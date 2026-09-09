# Codex-Wagner-Reports project instructions

> **TOP-LINE USAGE CONSERVATION RULE:** Protect Robert's limited Codex allowance. Do not automatically use Chrome, Browser, Computer Use, Google Sheets, web search, or other external tools for routine administration. Before any non-local tool use not covered by standing authorization, tell Robert the exact tool, why it is needed, the manual alternative, and the expected number of calls, then wait for explicit approval. Robert gives standing authorization for Google Drive reads and non-destructive writes involving Wagner Reports files within `_CODEX/Codex Web`, including search, inspection, upload, update, copy, organization, movement, and verification; announce these operations and expected calls, but do not ask for repeated approval. Deletion, permanent removal, unrelated Drive work, and changes outside `_CODEX/Codex Web` still require explicit review or authorization. Other standing exceptions are the automatic Chrome usage snapshots at session startup and closeout. Prefer focused local code work and consolidated commands. Never infer or reuse a usage reading in place of a fresh dashboard value.

## Identification and communication

- Begin every user-facing sentence with exactly `**Codex-Wagner-Reports —**`.
- Public branding is `Wagner Reports`.
- The internal project name is `Codex-Wagner-Reports`.
- Use exact filenames, timestamps, checkpoint names, and website stages.
- When referring to an HTML version, always use its complete exact filename, such as `CodexTalk845a0825-WagnerReports.html` or `BetaTalk536p0824-WagnerReports.html`.
- Never use a shortened checkpoint label such as `CODEX 845A` or `BETA 536P` by itself as the name of an HTML version.
- Give Robert one clear step at a time when he is operating the Codex interface, TinyHost, Google Drive, or GitHub.
- Do not give Robert a multi-step interface checklist all at once. Give one numbered action, wait for his result, and then give the next action.
- Whenever listing Wagner Reports sessions, handoffs, HTML versions, ZIPs, screenshots, or other timestamped files, order the list newest to oldest so the latest item appears first.
- Use Codex primarily for code diagnosis, code editing, focused local testing, dependency verification, and package creation.
- Treat spreadsheet entry, unrelated Google Drive file movement, TinyHost upload, task naming, and task pinning as manual tasks unless Robert explicitly asks Codex to perform a specific one. Chrome usage-dashboard readings at startup and closeout and the authorized Google Drive handoff rotation are automatic exceptions.
- Do not use subagents, broad searches, repeated screenshots, large spreadsheet reads, or redundant verification for routine Wagner Reports work.

## Low-usage startup sequence

- Treat Robert saying exactly `new session`, or a clear close variant in a newly opened Wagner Reports task, as authorization to resume automatically from the latest handoff without requiring him to paste an opening sentence or attach a file.
- If the outgoing handoff says Robert will upload a new-session-first text file, wait for that upload and read it completely before reading, searching for, or acting on any handoff file; treat Robert's uploaded text as authoritative for the order of startup work.
- For that automatic resume, locate the newest local `YYYYMMDD_HHmm_StartNewSession.txt` file in the `Codex-Wagner-Reports` project by its complete timestamp, read it completely, extract its `NEW SESSION OPENING MESSAGE`, and carry out that message together with the handoff's `FIRST SAFE NEXT ACTION`.
- Do not ask Robert to copy or paste the saved opening message when the newest local handoff is readable; report the exact handoff filename selected so he can verify the session lineage.
- If no current local handoff is readable, use the standing Google Drive authorization to inspect `_CODEX/Codex Web/00 CURRENT/Session Handoff`, read its sole current handoff, and resume from that file after announcing the expected Drive calls.
- At the beginning of a new Wagner Reports task, automatically use Robert's signed-in Chrome session to open `https://chatgpt.com/codex/settings/usage` if it is not already open and read a fresh starting snapshot.
- Do not ask Robert to open or read the dashboard when Chrome is connected; ask only if Chrome is unavailable or authentication blocks access.
- Record credits remaining, weekly usage remaining and reset time, and any five-hour usage value/reset time the dashboard actually displays. Mark undisplayed values unavailable; never infer them.
- Identify browser-read values as Chrome-dashboard verified. Do not write them to Google Sheets unless Robert explicitly asks for that specific connector operation after seeing the manual alternative.
- Compare the reported starting readings with the prior handoff's ending readings and explain any difference without guessing.
- When Robert supplies a handoff attachment or pasted handoff explicitly, read that supplied handoff completely and treat it as authoritative for that startup instead of searching Google Drive.
- Confirm the active checkpoint and paused versions before making changes.

## Usage tracking

- Robert signs into his general ChatGPT account in Chrome; do not tell him to sign into a separate Codex web account.
- Wagner Reports project work remains in the Codex desktop app; Codex reads the Codex and Work usage dashboard automatically in Robert's signed-in Chrome at `https://chatgpt.com/codex/settings/usage`, which may redirect to `https://chatgpt.com/codex/cloud/settings/analytics#usage`.
- Use one spreadsheet row per Codex task session only when Robert chooses to maintain the Google Sheet `Tracking Usage with Codex` (spreadsheet ID `1c3CbntP4j_YamalwPswhJSSRKJDwUJwHZbwts7Pez2Y`).
- When Robert wants to update the Sheet manually, prepare the exact values and tell him one cell or paste operation at a time; do not open or edit the Sheet automatically.
- Preserve left alignment for numeric usage and credit values when Robert enters them.
- At sign-off, show a paired `STARTING USAGE FOR THIS SESSION` and `ENDING USAGE FOR THIS SESSION` summary using the fresh Chrome-dashboard readings.
- Include both readings in the outgoing handoff and identify each as Chrome-dashboard verified or Robert-reported, as applicable.
- If Robert cannot read a value, mark it unavailable or approximate; never infer it.

## Start New Session handoff files

- Use the universal compact date-first timestamp format `YYYYMMDD_HHmm_Description.ext` for every newly created timestamped file, using the current America/New_York date and 24-hour time. Always zero-pad the month, day, hour, and minute. Do not rename earlier files to this format.
- Name every new-session handoff exactly `YYYYMMDD_HHmm_StartNewSession.txt`.
- Example: `20260903_1530_StartNewSession.txt` means September 3, 2026 at 3:30 PM ET.
- Do not include the checkpoint name in the handoff filename; record the checkpoint inside the file.
- Preserve all previous Start New Session files.
- Keep exactly one handoff in Google Drive folder `_CODEX/Codex Web/00 CURRENT/Session Handoff` and exactly one immediately preceding handoff in `_CODEX/Codex Web/10 PREVIOUS/Session Handoff`.
- Robert has given standing authorization for Codex to perform the end-of-session Google Drive handoff rotation, upload, and verification automatically.
- At closeout, Codex must archive the existing previous handoff, move the existing current handoff to previous, upload the new handoff to current, and verify the resulting current and previous folder contents.
- This standing authorization applies only to handoff closeout operations; TinyHost publishing and unrelated Google Drive work remain manual unless Robert explicitly authorizes them. Automatic Chrome usage-dashboard readings at startup and closeout are separately authorized above.
- Each handoff must identify the active checkpoint, exact working files, paused versions, TinyHost deployment stage, Git/GitHub state, unresolved problems, approved decisions, and the first safe next action.

## Automatic Codex task naming and pinning

- Robert has given standing authorization for Codex to rename and pin the active Wagner Reports task automatically during new-session closeout.
- When a Wagner Reports task is used for an active handoff, rename it automatically in the compact mobile-readable exact form `YYYYMMDD_HHmm — Description`, using America/New_York date and 24-hour time. Do not place spaces, hyphens, or a colon inside the timestamp. Example: `20260905_1638 — Awaiting Robert’s new information`.
- After renaming, pin the task automatically and verify both operations before reporting that closeout is complete.
- Do not rely on the task remaining visible only inside the `Codex-Wagner-Reports` project section.
- Preserve earlier pinned handoff tasks unless Robert explicitly asks to unpin or archive them.

## Low-usage end-of-session routine

- Treat `Let's do new session creation` and close variants as an explicit trigger for the complete closeout routine in this section, so Robert does not need to repeat its requirements.
- When Robert says he is finished, leaving, saying goodbye, creating a checkpoint, ending the session, or triggers new-session creation, automatically open/read the live ending usage dashboard in his signed-in Chrome before creating the outgoing handoff.
- If the Chrome dashboard is unavailable, give Robert only one manual dashboard-reading step at a time.
- Display the exact ending credits remaining, calculated credits used or adjustment, weekly usage remaining and reset time, and five-hour usage remaining and reset time.
- Create a new local timestamped Start New Session file after the ending readings are captured.
- If a purchase, refund, reset, or other credit adjustment occurred during the session, record it separately and do not misreport that adjustment as usage.
- Include both usage readings in the handoff and include the tracker row only if Robert manually updated it.
- After the ending usage readings are captured and Codex creates the new local handoff, perform the pre-authorized Google Drive handoff rotation, upload, and verification automatically.
- Before starting that closeout connector work, state the exact Google Drive operations and expected number of calls, but do not ask Robert for new approval.
- Report the exact local filename and intended Google Drive destination.
- Update `AGENTS.md` when the session established a durable workflow rule, record the TinyHost stage, inspect and report Git/GitHub state without committing or pushing, and verify that every required closeout artifact is in its intended local or Google Drive location.
- Automatically rename and pin the active task according to the standing authorization above.
- Finish by giving Robert the exact phrase to paste into the new task and explicitly state whether all closeout work is complete and it is safe to close the current task.
- This routine must happen before Robert closes the task; Codex cannot perform additional work after he silently closes the app or task.

## Version safety

- Never overwrite or delete an earlier timestamped HTML version or handoff file.
- Give every new CODEX test its own timestamped HTML filename in the exact form `YYYYMMDD_HHmm_CodexTalk-WagnerReports.html`, using the current America/New_York date and 24-hour time.
- Show that same test date and time in a clearly visible button on the opening `ENTER WAGNER REPORTS` screen beside the sound and skip controls.
- Keep the timestamped filename, visible CODEX banner, and opening-screen test button synchronized so Robert can confirm that the preview and test file are in lockstep.
- Beginning with the next new timestamped HTML version, place two clearly visible timing controls directly under the visible CODEX version banner.
- The first control must be a live timer display labeled `TIMER` that starts automatically at the actual beginning of the Wagner Reports presentation or video timeline and continues updating for the full presentation.
- The timer must measure elapsed presentation time rather than page-load time, and it must remain synchronized with the presentation timeline after the opening `ENTER WAGNER REPORTS` action.
- The second control must be labeled `STOP`.
- When Robert clicks `STOP`, freeze the timer immediately and display the exact elapsed presentation time at that click, including hundredths of a second when the browser timing source supports them.
- Keep the frozen elapsed time visible so Robert can report the exact moment of a visual or audio event.
- Preserve these two timing controls in every later timestamped HTML version and its matching TinyHost-ready ZIP unless Robert explicitly removes or changes the requirement.
- `beta.wagnerreports.com` is experimental testing.
- `test.wagnerreports.com` is formal testing of an approved experiment.
- `wagnerreports.com` is public production.
- Do not move a version between stages unless Robert explicitly approves it.
- Do not restart GitHub authentication unless Robert explicitly asks for GitHub work.

## TinyHost package and Google Drive delivery

- Use local browser testing as the primary development and debugging stage. Robert has given standing authorization for Codex to run automated local Chrome tests without requesting permission for each test; announce the scope and approximate calls before testing. Do not upload a ZIP to Tiiny Host until the matching local HTML version has passed Robert's local approval. Use Tiiny Host afterward for cellphone and other device testing.
- When a local Wagner Reports test is ready for Robert, open the rendered local presentation URL in the Codex right-panel browser for interactive testing; do not open the HTML source-code view unless Robert explicitly asks to inspect the code.
- For every completed timestamped HTML test, create one TinyHost-ready ZIP named `[complete exact HTML filename without .html].zip`, beginning with the same `YYYYMMDD_HHmm` timestamp as its matching HTML file. Do not add a `Beta-`, `Test-`, or production-stage prefix; Robert selects the correct TinyHost destination manually.
- Put `index.html` at the ZIP root and make it an exact copy of the timestamped HTML version.
- Include the complete matching timestamped assets folder at the ZIP root, with every required image, stylesheet, script, and manifest.
- Do not include unused assets from earlier timestamped versions.
- Verify that `index.html` matches the timestamped HTML file and that every local `src` and `href` reference resolves inside the package before delivery.
- For a locally verified ZIP that Robert has not yet approved and needs to test remotely, automatically upload it to Google Drive folder `_CODEX/Codex Web/00 CURRENT/Beta Testing` and verify the exact filename, destination, size, and download availability. Create that folder under the verified `00 CURRENT` folder if it does not yet exist. Robert downloads the newest Beta Testing ZIP on any device and manually publishes it to TinyHost for beta testing.
- Reserve `_CODEX/Codex Web/00 CURRENT/Complete Package` for versions that have passed Robert's testing. After Robert approves a completed ZIP, automatically upload it there and verify the exact filename, destination, size, and download availability.
- Robert has given standing authorization for both Beta Testing and completed-package Drive uploads and verification, so do not request separate approval for each Wagner Reports ZIP; announce the Google Drive operation and expected call count before performing it.
- Treat the verified Google Drive ZIP as the primary device-independent download for Robert's manual TinyHost upload.
- Report the complete exact ZIP filename and intended Google Drive path.

## Local recording and voice-control tools

- ShareX's `ScreenRecorderCustomRegion` task uses `Shift+PrintScreen` and saves MP4 recordings to `C:\Users\Robert HP Wagner\Videos\Screen Recordings` through a per-task folder override in `C:\Users\Robert HP Wagner\Documents\ShareX\HotkeysConfig.json`.
- Keep ordinary ShareX screenshots and `ScreenRecorderGIF` output unchanged unless Robert explicitly requests otherwise.
- For Robert's VoiceAttack-driven ShareX workflow, choosing `Cancel` in the post-recording pop-up preserves the saved recording without opening the destination directory.
- VoiceAttack's desired startup setting is `StartMinimized=False`; retain `MinimizeToSystemTray=True` unless Robert explicitly requests a different tray behavior.
