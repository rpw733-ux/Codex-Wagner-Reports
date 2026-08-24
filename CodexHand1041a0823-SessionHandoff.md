# Wagner Reports — Codex Master Handoff

**Version:** 10:41 AM EDT, August 23, 2026
**Filename:** `CodexHand1041a0823-SessionHandoff.md`

This is the current authoritative working handoff for the Wagner Reports transition from Claude to Codex. It consolidates the historical handoff, KB57, AU1, the Codex Talk/Wave inventories, the sort–merge–purge review, and Robert's later direct decisions. Historical files remain evidence, but this document controls when they conflict with it.

No production website, Cloudflare Worker, R2 object, or Tiny Host deployment was changed while preparing this file.

## 1. Authority and working method

1. Robert's newest direct instruction controls.
2. Major actions require Robert's literal approval ending in **GO** or **magic word go**.
3. Work one concrete step at a time and discuss the result before beginning the next major step.
4. Tiny Host publication has a separate final gate: state the exact selected filename and wait for Robert to approve publication.
5. Preserve historical versions. Do not overwrite or delete them without separate approval.
6. Changing external facts and live infrastructure must be freshly verified before use.

## 2. Storage and delivery standard

- Google Drive is the cross-device master location.
- Drive structure:
  - `_CODEX/Codex Web` — Wagner Reports website, audio, and handoff files.
  - `_CODEX/Codex Bob App` — future Bob App work.
- On the HP, deliver a second identical copy directly to the HP Downloads folder.
- On a phone or another device, download locally to that device's Downloads area when supported.
- Dropbox `_CODEX` is retired and must not be used for new work.
- The current three Wagner Reports files have been moved into Drive `_CODEX/Codex Web`.

## 3. Three-file package

The synchronized working package is stamped `815a0823`:

- **Codex Talk** — visitor-facing Wagner Reports HTML/player.
- **Codex Wave** — practical dual-format audio-build specification. The `815a0823` version defines one continuous archival WAV master plus one website MP3 per subject, but it is intentionally not a runnable generator.
- **Codex Hand** — authoritative decisions, status, and next work.

When the three-file package is formally revised, use the same time/date stamp on all three filenames. Format:

- `CodexTalk[time][a/p][date]-WagnerReports.html`
- `CodexWave[time][a/p][date]-AudioMaster.html`
- `CodexHand[time][a/p][date]-SessionHandoff.md`

Do not claim the three files are synchronized merely because their names match. Their content and declared architecture must also agree.

## 4. Immediate project objective

Build Wagner Reports around the approved Earth/globe presentation while preserving a financially safe, pre-generated audio system. The globe is the visual shell; approved navigation and playback behavior from the inherited player will be transferred deliberately rather than copied blindly.

Current primary scope is National News with Supporters and Disagreers. Polls, NFL, MLB, and Golf may remain visible placeholders for later work. Podcasters are removed for now.

## 5. Current navigation scope

### National News buttons

1. Trump News
2. Strait of Hormuz
3. Iran MOU
4. Epstein Files
5. Reflecting Pool
6. Economy
7. Immigration
8. Kennedy Center
9. SAVE Act/FISA
10. Fact or Fiction?
11. Other News
12. Polls — placeholder/deferred

### Economy sub-tabs

- Food
- Gas
- Tariffs
- Others

### Deferred placeholders

- NFL
- MLB
- Golf

### Removed from present scope

- Podcasters
- Most Followed Podcasters
- Other Active Podcasters
- Daily podcaster ranking, research, cards, audio, spreadsheet, and navigation space
- Consensus section

## 6. Approved content sequence and terminology

- Use **Supporters** and **Disagreers** everywhere in the new system.
- Retire Left/Right, Critics, and Supporters vs Critics as current visible labels.
- Approved spoken structure: **Subject → Supporters → Disagreers → Conclusion**.
- Consensus remains excluded unless Robert later restores it.
- Do not force Supporters/Disagreers onto a subject with no genuine disagreement; use a straightforward subject/content/conclusion structure where appropriate.

## 7. Approved audio-file strategy

- Generate **one continuous high-quality WAV master for each complete subject or Economy sub-tab**.
- Convert each approved WAV master into a website MP3. Initial target: 128 kbps, subject to Robert's listening test.
- Retain the WAV as the archival source; Codex Talk and website visitors use the smaller MP3.
- If one subject fails, regenerate only that subject—not the entire site.
- Keep a structured script/build manifest so each subject remains independently reproducible.
- Visitors receive the stored MP3 only. A visitor click must never trigger chargeable generation.
- If stored audio is missing or broken, display **“Audio temporarily unavailable”**, stop cleanly, and record the failed item during testing.
- Do not fall back to an uncontrolled browser/device voice.
- Browser pitch and speed controls are deferred until Robert hears and evaluates the new one-WAV method.

## 8. Voice and delivery standard

- Primary voice: **Charon**, spelled C-H-A-R-O-N.
- Fallback: **Google Cloud Studio-Q**.
- Algieba is excluded completely.
- Target sound: a natural male cable-news anchor—professional, authoritative, even, and non-robotic.
- Delivery must remain neutral between Supporters and Disagreers.
- Lock tone, pitch, pace, pronunciation, pauses, loudness, and style during generation rather than trying to repair inconsistent audio in the browser.
- If Charon repeatedly fails for one subject, Studio-Q may generate that subject during the controlled build. Disclose the exact fallback file.

## 9. Locked visitor behavior

- Double-tap a playable main button to start audio.
- Double-tap it again to stop.
- A single tap must not accidentally start audio.
- Single-tap Economy to open or close its four sub-tabs.
- Double-tap an Economy sub-tab to start or stop its audio.
- During playback, show a visible Home button.
- Home stops audio, clears queued and in-flight playback, and returns the visitor to the entry/navigation level.
- Changing layers or starting another item stops and invalidates the prior playback request.
- Approximately 600 milliseconds is the initial double-tap window, subject to later testing.

## 10. Safe production architecture

### Controlled build path

1. Read the approved HTML and determine the actual in-scope tabs, sub-tabs, cards, and order.
2. Run genuine fresh internet research in exact on-screen order.
3. Compare fresh results with existing content.
4. Update only where warranted.
5. Prepare the spoken script for each subject.
6. Generate one subject WAV at build time.
7. Track every attempt and retry.
8. Retry only failed subjects.
9. Use Studio-Q only as the approved build-time fallback.
10. Upload completed audio to Cloudflare R2.
11. Verify every expected R2 object exists and plays.
12. Build the test HTML so it retrieves stored audio only.
13. Publish to the test site after the separate approval gate.
14. Promote to production only after Robert tests and separately approves it.

### Visitor path

1. Visitor loads the static website.
2. Visitor double-taps a playable button.
3. Browser retrieves an already-generated MP3 from R2.
4. No visitor action invokes Gemini, Studio-Q, the generation Worker, or another paid generation endpoint.

## 11. Quota and retry controls

- Recalled allowance: 100 TTS generations per day; verify the current allowance before a real build.
- Typical full build: approximately 30–55 subject/card generations.
- Every attempt and retry counts.
- Maintain an item ledger: planned, attempted, Charon result, retry count, Studio-Q fallback, R2 upload, and playback verification.
- Never rerun successful subjects because a few others failed.
- Do not start a build without enough remaining capacity plus a reasonable retry reserve.

## 12. Internet-sweep behavior

- Before a real sweep, confirm whether the run is content only, audio only, or both.
- Confirm test, beta, or production target when relevant.
- Confirm morning or intraday run when relevant.
- State the detected in-scope area list before searching.
- Research every in-scope item genuinely; do not merely replace timestamps.
- Work left to right and top to bottom in visible order.
- Use terse progress statements:
  - `[Item] — research done, updated HTML.`
  - `[Item] — research done, no update needed.`
- Do not narrate all discovered material unless a blocker or important correction requires it.
- Do not fabricate or pad content.

## 13. Current visual direction

- Use the Earth/globe design as the future shell.
- Place main buttons inside the globe and follow its inside curve.
- Keep rows visually aligned while respecting the circular shape.
- Use polished, compact, three-dimensional push-down buttons.
- Add curved gold copy inside the top of the globe: **WORLD NEWS YOUR WAY** and **READ OR LISTEN!**, styled compatibly with the Wagner Reports title.
- Night side: visible stars, moon, darkened continent, city lights concentrated on land.
- Day side: sun with soft, broad, blended rays directed toward Earth.
- Remove lights incorrectly placed over the ocean.
- Left/right filler content remains undecided and must not be invented without Robert's approval.

## 14. Testing and publication

- Test every build on `test.wagnerreports.com` before production.
- Download the exact HTML to the active device and upload the matching copy to Drive `_CODEX/Codex Web`.
- During Tiny Host staging, state: **“The file selected is [exact filename]. May I click Publish?”**
- Wait for Robert's publication approval.
- After successful publishing, open and review the test site.
- Production promotion is a separate decision and approval.

## 15. Live items that remain unverified

Before production activation, freshly verify or retain evidence for:

- Current Cloudflare Worker code and deployed version — security gate completed 08/23/26 at 8:42 AM ET
- Generation endpoint authentication — private build-key requirement verified; unauthenticated POST returned 401
- Current CORS rules — permissive wildcard CORS removed
- Current R2 inventory, duplicates, sizes, and timestamps
- Actual Gemini model identifier and Charon configuration
- Current Studio-Q fallback implementation
- Current quotas, reset time, pricing, and request-count behavior
- R2 public delivery and playback behavior
- Current Tiny Host test and production versions

Do not delete old R2 objects without an object-by-object review and separate approval.

## 16. Cloudflare security milestone

Completed 08/23/26 at 8:42 AM ET with Robert's magic-word approval:

- Converted the Gemini credential from visible runtime text to a Cloudflare secret.
- Created a separate private Worker build-key secret.
- Required the <code>X-Wagner-Build-Key</code> header before request parsing or Gemini access.
- Removed permissive wildcard CORS from the generation Worker.
- Verified that a harmless unauthenticated POST returns <code>401 Unauthorized</code> with no Gemini call and no TTS quota consumed.
- Kept public stored-audio playback separate from the private generation endpoint.

The actual secret values must never be copied into Talk, Wave, Hand, a public HTML file, chat output, or source control.

## 17. Charon voice calibration and approval

Four fixed-script pilots were compared on 08/23/26. Pilot 4, <code>CharonPilot4-925a0823.wav</code>, is the approved reference. Its measured duration is 23.33 seconds. Robert approved its pace as neither too fast nor too slow, its pauses as correctly placed, its emphasis as restrained, and its tone as warm and natural.

Locked delivery direction: warm, composed, reassuring network-news journalist; mellow conversational tone; restrained authority; moderately brisk natural broadcast pace; tight but natural pauses; smooth transitions; no rushing, clipping, theatrical emphasis, booming projection, harshness, or drawn-out phrasing.

The fixed-script duration is a calibration reference, not a rule that every news story must last 23.33 seconds.

## 18. Current package status and recommended next step

The `1041a0823` package contains the revised cinematic Earth-interface Codex Talk plus synchronized Codex Wave and Codex Hand files. During testing, the introduction runs on every reload after the temporary Enter control. The text now moves much more slowly toward the exact center vanishing point while the original score continues. A compact central flash and synchronized boom replace the oversized white globe. The actual Earth interface then grows smoothly from a tiny central dot to full size. Skip Intro, Sound controls, the highlighted stored-audio test button, double-tap start/stop, and Home/Stop remain.

Next, stage `CodexTalk1041a0823-WagnerReports.html` on the Tiny Host test site only after Robert approves that exact filename, then review the slower center-directed text, continuous music, compact flash/boom, Earth-from-dot transition, phone layout, double-tap audio behavior, and Home/Stop behavior. Do not expand to every subject until Robert approves this prototype. MP3 conversion remains an implementation item; WAV is the approved archival master.


## 19. Editorial image collage — 10:41 AM build

The 1041 build adds ten subdued, mixed editorial images around the Earth. They fade in only after the globe reaches full size. Desktop shows all ten, tablet shows six, and phone shows four. Soft masks preserve the star field and avoid hard rectangular edges. The images are embedded directly in Codex Talk, so no separate image upload is required. An IMAGE CREDITS button in the site lists each source and license. No endorsement is implied.

- **Donald Trump** — Daniel Torok; Public domain. https://commons.wikimedia.org/wiki/File:January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg
- **Air Force One** — U.S. Air Force File Photo.; Public domain. https://commons.wikimedia.org/wiki/File:Air_Force_One_over_Mt._Rushmore.jpg
- **Kennedy Center** — AscendedAnathema; Public domain. https://commons.wikimedia.org/wiki/File:John_F._Kennedy_Center,_interior_000_0017.jpg
- **Reflecting Pool** — ThadeusOfNazereth; CC0. https://commons.wikimedia.org/wiki/File:Lincoln_Memorial_Reflecting_Pool_2023-08-01.jpg License: http://creativecommons.org/publicdomain/zero/1.0/deed.en
- **Strait of Hormuz** — CIA; Public domain. https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz_2004.png
- **Football** — Damon J. Moritz; Public domain. https://commons.wikimedia.org/wiki/File:2004_Vanderbilt-Navy_Game_TE.jpg
- **Baseball** — uwdigitalcollections; CC BY 2.0. https://commons.wikimedia.org/wiki/File:Baseball_game_action_(2246608221).jpg License: https://creativecommons.org/licenses/by/2.0
- **Hockey** — Michael Barera; CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Western_Michigan_vs._Michigan_ice_hockey_2024_25_(in-game_action).jpg License: https://creativecommons.org/licenses/by-sa/4.0
- **Golf** — Pk smi; CC0. https://commons.wikimedia.org/wiki/File:Martin_Smith_Golfer_Swing.jpg License: http://creativecommons.org/publicdomain/zero/1.0/deed.en
- **U.S. Capitol** — Otávio Astor Vaz Costa; CC0. https://commons.wikimedia.org/wiki/File:View_of_the_United_States_Capitol_at_night_from_Union_Square.jpg License: http://creativecommons.org/publicdomain/zero/1.0/deed.en
