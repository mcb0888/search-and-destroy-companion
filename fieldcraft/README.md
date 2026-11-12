# S&D Fieldcraft phone app

Fieldcraft is a separate installable web app under `/fieldcraft/` in the existing Search & Destroy Companion repository. Its own manifest identity, service-worker scope and icons keep it separate from the Starter and Full Guide.

After publication, open the Fieldcraft link on your phone. Use **Add to phone** or Chrome's **Add to Home screen > Install**. Open online once and wait for **Offline pack ready on this device**. Official/source links require internet. Notes and progress are local to the browser/device. Use the existing JSON export/import to move them between the downloadable HTML copy and the hosted app.

Thirty map workspaces are available. Only three approximate diagrams are bundled. Other entries explicitly identify missing layouts and distinguish historical support from unverified candidates. Installing the app does not complete layout coverage or certify the current S&D roster.

The original Companion's files remain unchanged except for package.json test commands that also run Fieldcraft's checks. A dedicated Fieldcraft worker intercepts only same-origin requests inside its scope and removes only its own old caches. Updates wait for the visible Update ready action; unsaved form text blocks reload until saved.

Static checks cover notes/drills/catalog behavior, PNG sizes, manifest identity, asset coverage, explicit worker activation and sibling-cache preservation. Browser checks run at 320px, 390px and 1280px and exercise notes, pins, practice history and actual offline reopening.

No user notes, private files, Sites credentials or account metadata are included in this source.
