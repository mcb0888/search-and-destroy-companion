"""Build the Backroom firearm catalog from public CODM loadout references.

This is a research helper, not runtime code. It records short factual attachment
names and source URLs, then generates a transparent local data file. It never
copies source prose and never labels a community build as an official build.
"""

from __future__ import annotations

import concurrent.futures
import datetime as dt
import html
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "full" / "armory_data.js"
BASE = "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/"
CHECKED = dt.date.today().isoformat()


ROSTER = {
    "Assault Rifle": [
        "M16", "Type 25", "AK117", "AK-47", "ASM10", "M4", "BK57", "LK24", "ICR-1",
        "Man-O-War", "KN-44", "HBRa3", "HVK-30", "DR-H", "Peacekeeper MK2", "FR .556",
        "AS VAL", "CR-56 AMAX", "M13", "Swordfish", "Kilo 141", "Oden", "Krig 6", "EM2",
        "Maddox", "FFAR 1", "Grau 5.56", "Groza", "Type 19", "BP50", "LAG 53", "XM4",
        "Vargo-S", "RAM-7", "Lachmann 556", "BAL-27", "Cronen Squall",
    ],
    "Sniper Rifle": [
        "XPR-50", "Arctic .50", "M21 EBR", "DL Q33", "Locus", "NA-45", "Outlaw",
        "Rytec AMR", "SVD", "Koshka", "ZRG 20mm", "HDR", "LW3-Tundra", "3-Line Rifle",
    ],
    "Light Machine Gun": [
        "S36", "UL736", "RPD", "M4LMG", "Chopper", "Holger 26", "Hades", "PKM", "Dingo",
        "Bruen MK9", "MG42", "RAAL MG", "MG 82", "DP27",
    ],
    "Submachine Gun": [
        "RUS-79U", "Chicom", "PDW-57", "Razorback", "MSMC", "HG 40", "Pharo", "GKS",
        "Cordite", "QQ9", "Fennec", "AGR 556", "QXR", "PP19 Bizon", "MX9", "CBR4",
        "PPSh-41", "MAC-10", "KSP 45", "Switchblade X9", "LAPA", "OTs 9", "Striker 45",
        "CX-9", "TEC-9", "ISO", "USS 9", "VMP", "Sten", "LC10", "FSS Hurricane",
    ],
    "Shotgun": [
        "HS2126", "BY15", "HS0405", "Striker", "KRM-262", "Echo", "R9-0", "JAK-12",
        "Argus", "VLK Rogue", "Einhorn Revolving", "MX Guardian",
    ],
    "Marksman Rifle": [
        "Kilo Bolt-Action", "SKS", "SP-R 208", "MK2", "Type 63", "M1 Garand", "SO-14",
    ],
    "Sidearm": [
        ".50 GS", "Shorty", "J358", "MW11", "Renetti", "Crossbow", "L-CAR 9", "Dobvra",
        "Nail Gun", "Machine Pistol",
    ],
}


EXPLICIT = {
    "RUS-79U": "aks-74u-stats-attachment-stats",
    "Arctic .50": "arctic50-stats-attachment-skin",
    "DL Q33": "dl-q33-stats-attachment-skin",
    "SP-R 208": "sp-r-208-best-loadout-attachments-skin",
    "Kilo Bolt-Action": "kilo-bolt-action-stats-attachment-skin",
    "PP19 Bizon": "pp19-bizon-attachment-stats-skin",
    "3-Line Rifle": "best-cod-mobile-3-line-rifle-loadout",
    "LW3-Tundra": "best-lw3-tundra-attachments-cod-mobile",
    "ZRG 20mm": "best-zrg-20mm-cod-mobile-loadout",
    "Rytec AMR": "best-rytec-amr-loadout-cod-mobile",
    "HDR": "best-hdr-loadout-cod-mobile",
    "Type 63": "best-cod-mobile-type-63-loadout",
    "SO-14": "so-14-cod-mobile-loadout",
    "M1 Garand": "best-cod-mobile-m1-garand-loadout",
    "VLK Rogue": "best-cod-mobile-vlk-rouge-loadout",
    "Einhorn Revolving": "bset-cod-mobile-einhorn-revolving-loadout",
    "MX Guardian": "best-cod-mobile-mx-guardian-loadout",
    "Lachmann 556": "best-cod-mobile-lachmann-556-loadout",
    "Vargo-S": "best-cod-mobile-vargo-s-loadout",
    "RAM-7": "best-cod-mobile-ram-7-loadout",
    "BAL-27": "bal-27-cod-mobile-loadout",
    "Cronen Squall": "cronen-squall-cod-mobile-loadout",
    "DP27": "dp27-cod-mobile-loadout",
    "MG 82": "best-cod-mobile-mg-82-loadout",
    "VMP": "best-cod-mobile-vmp-loadout",
    "Sten": "best-cod-mobile-sten-loadout",
    "LC10": "lc10-cod-mobile-loadout",
    "FSS Hurricane": "fss-hurricane-cod-mobile-loadout",
    "Machine Pistol": "best-cod-mobile-machine-pistol-loadout",
    "RPD": "rpd-weapon-stats-attachment-skin",
    "HG 40": "hg40-stats-attachment-skin",
    "Bruen MK9": "best-bruen-mk9-attachments-cod-mobile",
    "KSP 45": "best-ksp-45-loadout-call-of-duty-mobile",
    "CX-9": "best-cx-9-attachments-cod-mobile",
    "Argus": "best-argus-attachments-cod-mobile",
}


PDF_BUILDS = {
    "3-Line Rifle": ["Maxim Silencer", "EMPRESS 700MM TNO2", "ZAC CUSTOM MZ", "SMLE Pistol Grip", ".30-06 20 Round Mags"],
    "LW3-Tundra": ["Tactical Suppressor", '28.2" Tiger Team', "Bandit Steady Stock", "7 Rnd", "Airborne Elastic Wrap"],
    "DL Q33": ["MIP Light", "YKM Combat Stock", "OWC Laser - Tactical", "Sleight of Hand", "Extended Mag A"],
    "Locus": ["YKM Lightweight Short", "OWC Skeleton Stock", "OWC Laser - Tactical", "OWC Stopping Power Reload", "Stippled Grip Tape"],
    "Koshka": ["MIP Light Barrel (Short)", "Mobility Stock", "OWC Laser - Tactical", "8 Round Fast Extended Mag", "Stippled Grip Tape"],
    "Outlaw": ["MIP Memorial Cowboy", "YKM Combat Stock", "FMJ", "OWC Laser - Tactical", "Stippled Grip Tape"],
    "HDR": ["Monolithic Suppressor", '26.9" HDR Pro', "FTAC Stalker-Scout", "OWC Laser - Tactical", "Sleight of Hand"],
    "ZRG 20mm": ["OWC Light Suppressor", "MIP Light Barrel (Short)", "YKM Light Stock", "OWC Laser - Tactical", "Anti-Vehicle Mag"],
    "Rytec AMR": ["MIP Light Barrel (Short)", "OWC Skeleton Stock", "OWC Laser - Tactical", "Stippled Grip Tape", "Full Ammo"],
    "SVD": ["RTC 660mm Heavy", "3x Tactical Scope A", "OWC Skeleton Stock", "OWC Laser - Tactical", "15 Round Extended Mag"],
    "Arctic .50": ["6x Tactical Scope C", "RTC Steady Stock", "Bipod", "MIP Stopping Power Reload", "Stippled Grip Tape"],
    "XPR-50": ["RTC CQB", "YKM Ghost Stock", "Operator Foregrip", "OWC Stopping Power Reload", "OWC Laser - Tactical"],
    "M21 EBR": ["OWC Light Suppressor", "6x Tactical Scope B", "YKM Light Stock", "Operator Foregrip", "OWC Laser - Tactical"],
    "NA-45": ["MIP Light Flash Guard", "OWC Skeleton Stock", "Wounding", "OWC Laser - Tactical", "Electromagnetic Ammo"],
    "Type 63": ["GRU Silencer", '16.4" Titanium', "KGB Pad", "GRU Mag Clamp", "Field Tape"],
    "SKS": ["Tactical Suppressor", "MIP Extended Light Barrel", "MIP Stalker Stock", "Disable", "Granulated Grip Tape"],
    "SO-14": ["Polarfire-S", '18" T300 Barrel', "HMW-20 Optic", "5GN Tactical Cheek Rest", "Disable"],
    "MK2": ['18.0" Sport Barrel', "MIP Sport Stock", "OWC Laser - Tactical", ".30 - 30 Ammo", "Stippled Grip Tape"],
    "SP-R 208": ["Tactical Suppressor", "MIP Light", "6X Tactical Scope 3", ".338 5 Round Reload", "Light Bolt"],
    "Kilo Bolt-Action": ["OWC Light Suppressor", "MIP Extended Light Barrel", "3x Tactical Scope 3", "OWC Stopping Power Reload", "OWC Laser - Tactical"],
    "M1 Garand": ["MX Silencer", 'COOPER 21" Shrouded', "CGC G2 Padded", "FMJ", ".30-06 16 Round Mags"],
}


MANUAL_BUILDS = {
    "M4": {
        "attachments": ["YKM Integral Suppressor Light", "MIP Strike Stock", "Ranger Foregrip", "40 Round Extended Mag", "Stippled Grip Tape"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/m4-stats-attachment-skin",
        "sourceKind": "Stat-informed S&D adaptation",
    },
    "RPD": {
        "attachments": ["OWC Compact Barrel", "RTC Steady Stock", "OWC Laser - Tactical", "Sleight of Hand", "Stippled Grip Tape"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/rpd-weapon-stats-attachment-skin",
        "sourceKind": "Stat-informed S&D adaptation",
    },
    "CBR4": {
        "attachments": ["Tactical Suppressor", "OWC Marksman", "YKM Combat Stock", "OWC Laser - Tactical", "Granulated Grip Tape"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/cbr4-stats-attachment-skin",
        "sourceKind": "Stat-informed S&D adaptation — corrected impossible duplicate",
    },
    "Type 19": {
        "attachments": ["North-Industry Heavyweight Suppressor", "Accurate/Supportive Long Barrel", "Agile Stock", "Fast Reload Mag", "Polymer Grip"],
        "source": "https://www.reddit.com/r/CODMobile_Loadouts/comments/1rzftxq/who_has_the_best_type_19_loadout_for_br_and/",
        "sourceKind": "Current community MP pattern",
    },
    "Dingo": {
        "attachments": ["Agency Suppressor", "OWC Marksman", "Aim Assist Laser", "Steel Rain Foregrip", "Light Reload"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/cod-mobile/dingo-loadout",
        "sourceKind": "Community baseline",
    },
    "Bruen MK9": {
        "attachments": ["Tactical Suppressor", 'XRK Horizon 23.0"', "FORGE TAC Stalker", "OWC Laser - Tactical", "60 Round Mags"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/best-bruen-mk9-attachments-cod-mobile",
        "sourceKind": "Community baseline",
    },
    "KSP 45": {
        "attachments": ['10.5" Task Force Barrel', "Light Weight Stock", "Striker Foregrip", "Extended Mag A", "Rustle Grip Tape"],
        "source": "https://mobilematters.gg/no-category/ksp-45-loadout-best",
        "sourceKind": "Community baseline",
    },
    "LAPA": {
        "attachments": ["Agency Suppressor", '10.2" Ranger', "Red Dot Sight 3", "Aim Assist Laser", "BO Foregrip"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/cod-mobile/lapa-loadout-codm",
        "sourceKind": "Community baseline",
    },
    "USS 9": {
        "attachments": ["Monolithic Suppressor", "OWC Marksman", "No Stock", "50 Round Extended Mag", "OWC Laser - Tactical"],
        "source": "https://shwoom.com/loadouts/cod-mobile/weapons/uss-9",
        "sourceKind": "Archived Season 6 community build",
    },
    "HS2126": {
        "attachments": ["Choke", "YKM Light Short", "YKM Light Stock", "OWC Laser - Tactical", "Stippled Grip Tape"],
        "source": "https://codsito.com/hs2126-clase-y-accesorios/",
        "sourceKind": "Community mobility build",
    },
    "HS0405": {
        "attachments": ["Choke", "RTC Light Extended Barrel", "No Stock", "Sleight of Hand", "MIP Laser 5mW"],
        "source": "https://codsito.com/hs0405-clase-y-accesorios/",
        "sourceKind": "Community Multiplayer build",
    },
    "Striker": {
        "attachments": ["RTC Extended Light Barrel", "MIP Laser 5mW", "Stippled Grip Tape", "16 Round Reload Case", "Sleight of Hand"],
        "source": "https://www.reddit.com/r/CODMobile_Loadouts/comments/z3tepu/striker_leaderboard_build/",
        "sourceKind": "Community S&D pattern",
    },
    "Argus": {
        "attachments": ["Choke", "BO Barrel", "Steady Stock", "BO Lever", "BO Mag"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/best-argus-attachments-cod-mobile",
        "sourceKind": "Community baseline",
    },
    ".50 GS": {
        "attachments": ["MIP Extended Light Barrel", "Extended Mag A", "Stippled Grip Tape", "MIP Laser 5mW", "Match Grade Trigger"],
        "source": "https://www.charlieintel.com/call-of-duty-mobile/best-50-gs-loadout-for-call-of-duty-mobile-66828/",
        "sourceKind": "Archived community build",
    },
    "J358": {
        "attachments": ["J358 Long", "Wounding", "Lightweight Trigger", "8 Rounds Reload", "Shoulder Stock - Wood"],
        "source": "https://www.reddit.com/r/CallOfDutyMobile/comments/s13zxp/what_was_your_first_load_out_of_you_can_remember/",
        "sourceKind": "Archived community build",
    },
    "MW11": {
        "attachments": ["MIP Light Flash Guard", ".45 Tac Long", "Lightweight Trigger", "15 Round Reload", "Rubberized Grip Tape"],
        "source": "https://www.reddit.com/r/CallOfDutyMobile/comments/ikcueh/best_mw11_set_up/",
        "sourceKind": "Archived community build",
    },
    "Renetti": {
        "attachments": ["OWC Ranger", "Folding Stock", "MIP Laser 5mW", "Match Grade Trigger", "Large Extended Mag B"],
        "source": "https://www.dexerto.com/call-of-duty/best-cod-mobile-renetti-pistol-loadouts-1569844/",
        "sourceKind": "Archived community build",
    },
    "Crossbow": {
        "attachments": ["28 Bowstring", "Heavy Limb", "Archer Stock", "Full Ammo", "OWC Laser - Tactical"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/guide/how-to-get-crossbow-in-cod-mobile",
        "sourceKind": "Community baseline",
    },
    "L-CAR 9": {
        "attachments": ["OWC Ranger", "Agile Stock", "5mW Combat Laser", "Fast Extended Mag A", "Rustle Grip Tape"],
        "source": "https://www.charlieintel.com/call-of-duty-mobile/best-cod-mobile-l-car-9-loadout-184525/",
        "sourceKind": "Archived community build",
    },
    "Dobvra": {
        "attachments": ["Agency Suppressor", "Sorokin 140mm Auto", "MIP Laser 5mW", "20 Round Mags", "Akimbo"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/best-akimbo-makarov-loadout-cod-mobile",
        "sourceKind": "Community specialist build",
    },
    "Nail Gun": {
        "attachments": ["Stock configuration — no normal Gunsmith attachment set"],
        "source": "https://www.reddit.com/r/CallOfDutyMobile/comments/18lyu81/no_attachments_for_the_nail_gun/",
        "sourceKind": "Community capability check",
        "special": True,
    },
    "Machine Pistol": {
        "attachments": ["Marauder Flash Hider", "VOD 140MM HE", "Akimbo", "Hair Trigger", "Pine Tar Grip"],
        "source": "https://zilliongamer.com/call-of-duty-mobile/c/weapon-guide/best-cod-mobile-machine-pistol-loadout",
        "sourceKind": "Community specialist build",
    },
}


def slugify(name: str) -> str:
    swaps = {".50 GS": "50-gs", "FR .556": "fr-556", "Grau 5.56": "grau-556", "AK-47": "ak47"}
    if name in swaps:
        return swaps[name]
    value = name.lower().replace(".", "").replace(" ", "-")
    return re.sub(r"[^a-z0-9-]", "", value)


def candidates(name: str) -> list[str]:
    slug = slugify(name)
    paths = []
    if name in EXPLICIT:
        paths.append(EXPLICIT[name])
    paths.extend([
        f"{slug}-cod-mobile-loadout",
        f"best-cod-mobile-{slug}-loadout",
        f"best-{slug}-loadout-cod-mobile",
        f"{slug}-stats-attachment-skin",
        f"{slug}-stats-attachment-skins",
        f"best-{slug}-loadout-attachments-perks-skins",
        f"{slug}-attachment-stats-skin",
    ])
    return list(dict.fromkeys(paths))


def clean(value: str) -> str:
    value = re.sub(r"<img[^>]*>", "", value, flags=re.I | re.S)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return re.sub(r"\s+", " ", value).strip(" .\n\t")


def normalized_attachment(value: str) -> str:
    """Normalize punctuation and common label prefixes for exact-build matching."""
    value = clean(value).lower()
    value = re.sub(r"^(muzzle|barrel|optic|stock|laser|underbarrel|ammunition|rear grip|perk|trigger action|guard|magazine)\s*:\s*", "", value)
    return re.sub(r"[^a-z0-9]+", "", value)


def same_build(left: list[str], right: list[str]) -> bool:
    if len(left) != 5 or len(right) != 5:
        return False
    return sorted(normalized_attachment(item) for item in left) == sorted(normalized_attachment(item) for item in right)


STAT_LABELS = {
    "damage": "damage",
    "fire rate": "fireRate",
    "accuracy": "accuracy",
    "mobility": "mobility",
    "range": "range",
    "controls": "control",
    "control": "control",
}


def parse_display_stats(page: str) -> dict:
    """Read the simple displayed weapon-rating tables when a source exposes them.

    These are comparative UI-style ratings, not physical damage, RPM, ADS, or TTK
    measurements. The generated app keeps that limitation visible.
    """
    found = []
    for table in re.findall(r"<table[^>]*>(.*?)</table>", page, flags=re.I | re.S):
        stats = {}
        for row in re.findall(r"<tr[^>]*>(.*?)</tr>", table, flags=re.I | re.S):
            cells = re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", row, flags=re.I | re.S)
            if len(cells) < 2:
                continue
            label = clean(cells[0]).rstrip(":").lower()
            key = STAT_LABELS.get(label)
            value = clean(cells[1])
            if key and re.fullmatch(r"-?\d+(?:\.\d+)?", value):
                stats[key] = float(value) if "." in value else int(value)
        if len(stats) >= 4:
            found.append(stats)
    return {
        "base": found[0] if found else {},
        "built": found[1] if len(found) > 1 else {},
    }


def fetch_page(url: str) -> str:
    if not url.startswith("http"):
        return ""
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; SNDC-research/2.0)"})
    with urllib.request.urlopen(req, timeout=18) as response:
        return response.read().decode("utf-8", errors="replace")


def parse_build(page: str, name: str) -> list[str]:
    headings = list(re.finditer(r"<h2[^>]*>(.*?)</h2>", page, flags=re.I | re.S))
    chosen = None
    for match in headings:
        title = clean(match.group(1)).lower()
        if "loadout" in title and ("best" in title or name.lower().split()[0] in title):
            chosen = match
            break
    if chosen is None:
        for match in headings:
            title = clean(match.group(1)).lower()
            first = name.lower().replace(".", "").split()[0]
            if ("attachment guide" in title or "best attachment" in title or ("attachment" in title and first in title)):
                chosen = match
                break
    if chosen is None:
        return []
    end = len(page)
    for match in headings:
        if match.start() > chosen.end():
            end = match.start()
            break
    section = page[chosen.end():end]
    table = re.search(r"<table[^>]*>(.*?)</table>", section, flags=re.I | re.S)
    ul = re.search(r"<ul[^>]*>(.*?)</ul>", section, flags=re.I | re.S)
    # Older pages usually put the attachment list before a numeric stats table.
    if ul and (not table or ul.start() < table.start()):
        attachments = []
        for item in re.findall(r"<li[^>]*>(.*?)</li>", ul.group(1), flags=re.I | re.S):
            value = clean(re.sub(r"<strong[^>]*>.*?</strong>", "", item, count=1, flags=re.I | re.S))
            if value:
                attachments.append(value)
        if len(attachments) >= 5:
            return attachments[:5]
    if table:
        attachments = []
        for row in re.findall(r"<tr[^>]*>(.*?)</tr>", table.group(1), flags=re.I | re.S):
            cells = re.findall(r"<td[^>]*>(.*?)</td>", row, flags=re.I | re.S)
            if not cells:
                continue
            value = clean(cells[0])
            if ":" in value:
                label, remainder = value.split(":", 1)
                if label.lower() in {"muzzle", "barrel", "optic", "stock", "laser", "underbarrel", "ammunition", "rear grip", "perk", "trigger action", "guard", "magazine"} and remainder.strip():
                    value = remainder.strip()
            if value and value.lower() not in {"icon", "attachment", "name", name.lower()}:
                attachments.append(value)
            if len(attachments) == 5:
                return attachments
    if ul:
        attachments = []
        for item in re.findall(r"<li[^>]*>(.*?)</li>", ul.group(1), flags=re.I | re.S):
            value = clean(re.sub(r"<strong[^>]*>.*?</strong>", "", item, count=1, flags=re.I | re.S))
            if value:
                attachments.append(value)
        if len(attachments) >= 5:
            return attachments[:5]
    return []


def fetch_one(name: str) -> dict:
    if name in MANUAL_BUILDS:
        item = MANUAL_BUILDS[name]
        stats = {"base": {}, "built": {}}
        try:
            page = fetch_page(item["source"])
            page_stats = parse_display_stats(page)
            page_build = parse_build(page, name)
            stats = page_stats if same_build(page_build, item["attachments"]) else {"base": page_stats.get("base", {}), "built": {}}
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError):
            pass
        return {
            "attachments": item["attachments"],
            "source": item["source"],
            "sourceKind": item["sourceKind"],
            "checked": CHECKED,
            "special": item.get("special", False),
            "stats": stats,
        }
    headers = {"User-Agent": "Mozilla/5.0 (compatible; SNDC-research/1.0)"}
    for path in candidates(name):
        url = BASE + path
        try:
            page = fetch_page(url)
            build = parse_build(page, name)
            if len(build) == 5:
                return {
                    "attachments": build,
                    "source": url,
                    "sourceKind": "Current stat/build page",
                    "checked": CHECKED,
                    "stats": parse_display_stats(page),
                }
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError):
            continue
    if name in PDF_BUILDS:
        return {
            "attachments": PDF_BUILDS[name],
            "source": "../guides/sniper-marksman-gunsmith-guide-season-6.pdf",
            "sourceKind": "Archived Season 6 field guide",
            "checked": "2026-07-29",
            "stats": {"base": {}, "built": {}},
        }
    return {
        "attachments": [],
        "source": "",
        "sourceKind": "Needs exact-build research",
        "checked": CHECKED,
        "stats": {"base": {}, "built": {}},
    }


MOBILE_RIFLES = {
    "Type 25", "AK117", "Peacekeeper MK2", "AS VAL", "M13", "Maddox", "FFAR 1",
    "Groza", "BP50", "XM4", "RAM-7", "BAL-27", "Cronen Squall",
}
BOLT_MARKSMAN = {"Kilo Bolt-Action", "SP-R 208", "MK2"}

ROLE = {
    "steady-rifle": {
        "label": "Steady rifle flex",
        "cue": "Use cover at medium range and make the first accurate burst matter before committing to a longer spray.",
        "fingerFit": "Works well on two thumbs and scales cleanly to three or four fingers because it does not demand constant movement inputs to stay useful.",
        "secondary": "MW11 or a melee weapon",
        "perks": ["Skulker", "Ghost", "Dead Silence"],
        "lethal": "Frag Grenade",
        "tactical": "Trophy System",
    },
    "mobile-rifle": {
        "label": "Mobile rifle pressure",
        "cue": "Close distance with cover, then use the faster rifle rhythm before the opponent settles into a prepared angle.",
        "fingerFit": "Three or four fingers make simultaneous movement, aim, and fire easier; two-thumb players can still use it by entering fights from cover instead of relying on mid-fight movement alone.",
        "secondary": "Base melee weapon",
        "perks": ["Lightweight", "Ghost", "Dead Silence"],
        "lethal": "Semtex",
        "tactical": "Smoke Grenade",
    },
    "close-route": {
        "label": "Close-route pressure",
        "cue": "Use covered paths to make the fight short. Stay close enough to a teammate that the first close fight can be answered.",
        "fingerFit": "Independent aim, fire, slide, and jump inputs reward three- or four-finger layouts, but route choice matters more than adding fingers without practice.",
        "secondary": "Base melee weapon",
        "perks": ["Lightweight", "Ghost", "Dead Silence"],
        "lethal": "Semtex",
        "tactical": "Smoke Grenade",
    },
    "lane-control": {
        "label": "Lane control",
        "cue": "Set the weapon before contact, expose one lane, and leave the position when the objective moves elsewhere.",
        "fingerFit": "A stable two-thumb layout is enough for deliberate holds. Three or four fingers mainly help when the role must reposition, crouch, or fire without surrendering camera control.",
        "secondary": "MW11",
        "perks": ["Skulker", "Toughness", "Dead Silence"],
        "lethal": "Trip Mine",
        "tactical": "Trophy System",
    },
    "precision-pick": {
        "label": "Precision pick",
        "cue": "Pre-aim one likely crossing, take one deliberate shot, and change the angle before the enemy prepares for the repeat peek.",
        "fingerFit": "A three- or four-finger layout makes scope, fire, movement, and camera corrections easier to separate. Two-thumb play remains viable for deliberate holds rather than constant quickscoping.",
        "secondary": "L-CAR 9 or MW11",
        "perks": ["Skulker", "Toughness", "Dead Silence"],
        "lethal": "Frag Grenade",
        "tactical": "Smoke Grenade",
    },
    "tight-corner": {
        "label": "Tight-corner specialist",
        "cue": "Choose doors and cover that keep the engagement short. Leave long open lanes instead of asking the weapon to solve the wrong distance.",
        "fingerFit": "Three or four fingers help combine movement with a fast shot. Two-thumb players need a more deliberate pre-aim and should avoid depending on a last-second slide to rescue the route.",
        "secondary": "MW11",
        "perks": ["Lightweight", "Ghost", "Dead Silence"],
        "lethal": "Semtex",
        "tactical": "Flashbang",
    },
    "backup": {
        "label": "Backup or specialist secondary",
        "cue": "Use the secondary for missed-shot recovery, a faster swap, or the exact short-range job the primary cannot cover.",
        "fingerFit": "The important input is a reachable weapon-swap control. Extra fingers help only when the swap and firing buttons remain distinct under pressure.",
        "secondary": "This weapon is the secondary",
        "perks": ["Choose for the primary weapon", "Choose for the primary weapon", "Dead Silence"],
        "lethal": "Choose for the primary role",
        "tactical": "Choose for the primary role",
    },
}


def role_id(category: str, name: str) -> str:
    if category == "Assault Rifle":
        return "mobile-rifle" if name in MOBILE_RIFLES else "steady-rifle"
    if category == "Submachine Gun":
        return "close-route"
    if category == "Light Machine Gun":
        return "lane-control"
    if category == "Shotgun":
        return "tight-corner"
    if category == "Sniper Rifle" or name in BOLT_MARKSMAN:
        return "precision-pick"
    if category == "Marksman Rifle":
        return "lane-control"
    return "backup"


def attachment_reason(name: str) -> str:
    value = name.lower()
    if "stock configuration" in value:
        return "This weapon has no normal five-slot Gunsmith set, so its result depends on learning the stock handling rather than attachment tuning."
    if "suppress" in value or "silencer" in value or "polarfire" in value or "polafire" in value or "echoless" in value:
        return "Keeps the shot quieter or concealed on the minimap while supporting the build's intended range or handling tradeoff."
    if "choke" in value:
        return "Tightens the shotgun's pellet spread so a deliberate close-range shot converts more reliably."
    if any(term in value for term in ["compensator", "flash guard", "muzzle brake", "muzzle booster"]):
        return "Controls muzzle behavior, recoil, or flash so the first burst is easier to read and keep on target."
    if "laser" in value:
        return "Improves ready-to-fire or shot-consistency behavior; check the live description because a visible beam can expose a held angle."
    if "no stock" in value or any(term in value for term in ["removed stock", "light stock", "combat stock", "strike stock", "skeleton stock", "agile stock", "mobile stock", "mobility stock", "ghost stock", "cqb", "bandit", "raider stock", "kgb pad"]):
        return "Reduces the heavy feel and helps the weapon move or aim faster, accepting some stability or flinch cost."
    if any(term in value for term in ["steady stock", "stead stock", "stalker", "padded", "hunter", "supportive", "stock"]):
        return "Adds stability for the repeated first bullets or held sightline this role depends on."
    if any(term in value for term in ["short", "compact", "mini barrel", "light barrel", "mip light", "rapid", "titanium", "sport barrel", "cowboy"]):
        return "Leans the weapon toward faster handling or fire cadence so it can enter the intended fight sooner."
    if any(term in value for term in ["marksman", "extended light barrel", "extended barrel", "long barrel", "custom long", "heavy barrel", "task force", "tiger team", "ranger", "pro", "shrouded", "shroud", "barrel"]):
        return "Protects range, bullet behavior, or control so the build remains dependable in its planned lane."
    if any(term in value for term in ["foregrip", "handstop", "ripper", "handle", "bipod", "pineapple", "sharkfin", "angled", "strife"]):
        return "Reduces recoil or steadies repeated shots so the theoretical damage is easier to convert into real hits."
    if any(term in value for term in ["extended mag", "speed mag", "round mag", "round mags", "round reload", "round belt", "rnd", "mag", "reload", "drum", "belt", "ammo"]):
        return "Adds follow-up capacity or improves magazine handling; the value is surviving the full engagement, not firing continuously without a plan."
    if any(term in value for term in ["stopping power", "large caliber", "slug", "anti-vehicle", "thermite", "electromagnetic", "wild fire", "rapid fire"]):
        return "Changes the weapon's damage, fire, penetration, or trigger behavior and is central to the build's elimination pattern."
    if "sleight of hand" in value or "fast reload" in value or "light reload" in value:
        return "Shortens a vulnerable reload or improves the recovery rhythm after the first engagement."
    if "granulated" in value or "field tape" in value or "elastic wrap" in value or "firm grip" in value:
        return "Improves aimed-shot consistency or flinch behavior so the first bullets stay closer to the intended point."
    if "stippled" in value or "rustle" in value or "dropshot" in value or "grip" in value or "wrap" in value or "tape" in value:
        return "Improves handling, ready speed, or control according to the weapon family, supporting the role's input rhythm."
    if any(term in value for term in ["red dot", "scope", "optic", "sight"]):
        return "Uses an attachment slot to make the sight picture easier to read; clearer target identification is worth more than a paper stat the player cannot convert."
    if "fmj" in value or "disable" in value or "wounding" in value or "full ammo" in value:
        return "Adds a specialist effect that supports penetration, target control, or ammunition reliability for this weapon's job."
    if "akimbo" in value:
        return "Trades aimed precision for two-weapon close-range pressure; it is a specialist recovery choice rather than an all-distance answer."
    if "trigger" in value or "bolt" in value or "lever" in value:
        return "Improves the interval between shots or trigger response, reducing the recovery cost when the first shot does not finish the fight."
    return "Fills a weapon-specific handling or lethality need in the sourced combination; confirm its exact live description before changing the slot."


def build_tradeoffs(attachments: list[str], role_key: str) -> list[str]:
    lower = " ".join(attachments).lower()
    notes = []
    if "laser" in lower:
        notes.append("A laser may be visible. Keep the beam off a doorway or wall edge until the fight begins.")
    if any(term in lower for term in ["no stock", "light stock", "skeleton stock", "short", "compact"]):
        notes.append("The speed package can reduce stability or increase flinch, so movement does not replace clean first-shot placement.")
    if any(term in lower for term in ["marksman", "heavy", "extended barrel", "ranger", "steady stock"]):
        notes.append("Range or control parts can slow aim or movement; have the weapon ready before entering a likely fight.")
    if any(term in lower for term in ["extended mag", "round belt", "drum", "50 round"]):
        notes.append("Extra ammunition usually costs handling. In one-life S&D, reload safety matters more than carrying ammunition you never fire.")
    if role_key in {"precision-pick", "tight-corner"}:
        notes.append("A missed first shot creates the build's largest danger window. Use cover or the secondary instead of forcing the same exposure.")
    if not notes:
        notes.append("The combination is balanced rather than perfect at every distance; keep the weapon inside the role and range described above.")
    return notes[:3]


def stat_deltas(stats: dict) -> list[dict]:
    base, built = stats.get("base", {}), stats.get("built", {})
    labels = {"damage": "Damage", "fireRate": "Fire rate", "accuracy": "Accuracy", "mobility": "Mobility", "range": "Range", "control": "Control"}
    return [
        {"key": key, "label": label, "base": base[key], "built": built[key], "delta": built[key] - base[key]}
        for key, label in labels.items() if key in base and key in built
    ]


def build_catalog() -> dict:
    work = [(category, name) for category, names in ROSTER.items() for name in names]
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
        futures = {pool.submit(fetch_one, name): (category, name) for category, name in work}
        for future in concurrent.futures.as_completed(futures):
            category, name = futures[future]
            try:
                results[name] = future.result()
            except Exception as exc:  # diagnostic fallback stays visible in generated data
                results[name] = {
                    "attachments": [],
                    "source": "",
                    "sourceKind": f"Research error: {type(exc).__name__}",
                    "checked": CHECKED,
                    "stats": {"base": {}, "built": {}},
                }
    records = []
    for category, names in ROSTER.items():
        for name in names:
            found = results[name]
            role_key = role_id(category, name)
            role = ROLE[role_key]
            attachments = found["attachments"]
            records.append({
                "id": slugify(name),
                "name": name,
                "category": category,
                "roleId": role_key,
                "role": role["label"],
                "cue": role["cue"],
                "fingerFit": role["fingerFit"],
                "attachments": attachments,
                "attachmentReasons": [attachment_reason(item) for item in attachments],
                "whyBuild": f"This combination is the strongest practical {role['label'].lower()} starting point found for {name}: every slot serves concealment, handling, shot consistency, range, or the weapon's defining damage behavior rather than trying to maximize one menu bar.",
                "tradeoffs": build_tradeoffs(attachments, role_key),
                "loadout": {
                    "secondary": role["secondary"],
                    "perks": role["perks"],
                    "lethal": role["lethal"],
                    "tactical": role["tactical"],
                },
                "displayStats": found.get("stats", {"base": {}, "built": {}}),
                "statDeltas": stat_deltas(found.get("stats", {})),
                "source": found["source"],
                "sourceKind": found["sourceKind"],
                "checked": found["checked"],
                "special": bool(found.get("special")),
                "status": "ready" if len(found["attachments"]) == 5 or found.get("special") else "research",
            })
    return {
        "meta": {
            "version": "2.0.0",
            "build": "MB-SNDC-2026-0831-047",
            "checked": CHECKED,
            "scope": "Current Season 7 firearm roster with one stat-informed S&D recommendation per firearm. Displayed ratings and attachment behavior are used where the linked current page exposes them; every exact part remains subject to the live Global Multiplayer Gunsmith.",
            "excludes": "Launchers and melee weapons do not receive five-attachment firearm builds in this catalog.",
            "ratingBoundary": "Displayed weapon ratings are comparative menu-style numbers, not physical damage, RPM, ADS time, or TTK measurements.",
            "roles": ROLE,
        },
        "weapons": records,
    }


def load_existing_catalog() -> dict:
    """Reuse the last researched attachment catalog when network research is unavailable."""
    source = OUTPUT.read_text(encoding="utf-8")
    prefix = "window.ARMORY_DATA="
    if not source.startswith(prefix):
        raise RuntimeError("Existing armory_data.js does not contain ARMORY_DATA")
    return json.loads(source[len(prefix):].rstrip().rstrip(";"))


def enrich_existing_catalog(existing: dict) -> dict:
    records = []
    for old in existing.get("weapons", []):
        role_key = role_id(old["category"], old["name"])
        role = ROLE[role_key]
        manual = MANUAL_BUILDS.get(old["name"])
        attachments = manual["attachments"] if manual else old.get("attachments", [])
        records.append({
            **old,
            "roleId": role_key,
            "role": role["label"],
            "cue": role["cue"],
            "fingerFit": role["fingerFit"],
            "attachments": attachments,
            "attachmentReasons": [attachment_reason(item) for item in attachments],
            "whyBuild": f"This combination is the strongest practical {role['label'].lower()} starting point currently supported by the catalog for {old['name']}: every slot serves concealment, handling, shot consistency, range, or the weapon's defining damage behavior rather than chasing one menu bar.",
            "tradeoffs": build_tradeoffs(attachments, role_key),
            "loadout": {
                "secondary": role["secondary"],
                "perks": role["perks"],
                "lethal": role["lethal"],
                "tactical": role["tactical"],
            },
            "displayStats": old.get("displayStats", {"base": {}, "built": {}}),
            "statDeltas": old.get("statDeltas", []),
            "source": manual["source"] if manual else old.get("source", ""),
            "sourceKind": manual["sourceKind"] if manual else old.get("sourceKind", ""),
            "special": bool(manual.get("special")) if manual else bool(old.get("special")),
            "status": "ready" if len(attachments) == 5 or (manual and manual.get("special")) or old.get("special") else "research",
        })
    return {
        "meta": {
            **existing.get("meta", {}),
            "version": "2.0.0",
            "build": "MB-SNDC-2026-0831-047",
            "scope": "Current firearm roster with one S&D recommendation per firearm. The last researched attachment catalog is preserved; this offline enrichment adds role, mobile-control, attachment-purpose, tradeoff, and complete-class analysis without inventing displayed ratings.",
            "ratingBoundary": "Displayed weapon ratings are comparative menu-style numbers, not physical damage, RPM, ADS time, or TTK measurements. Empty rating panels remain empty rather than being estimated.",
            "roles": ROLE,
        },
        "weapons": records,
    }


def main() -> int:
    offline = "--offline" in sys.argv
    catalog = enrich_existing_catalog(load_existing_catalog()) if offline else build_catalog()
    payload = json.dumps(catalog, ensure_ascii=False, separators=(",", ":"))
    OUTPUT.write_text("window.ARMORY_DATA=" + payload + ";\n", encoding="utf-8")
    five_part = sum(len(item["attachments"]) == 5 for item in catalog["weapons"])
    special = sum(item.get("special", False) for item in catalog["weapons"])
    missing = [item["name"] for item in catalog["weapons"] if item["status"] != "ready"]
    print(f"Generated {len(catalog['weapons'])} firearm records: {five_part} five-part builds, {special} special stock configuration, {len(missing)} needing research.")
    if missing:
        print("Missing: " + ", ".join(missing))
    return 0


if __name__ == "__main__":
    sys.exit(main())
