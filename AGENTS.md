# Codex-Wagner-Reports project instructions

## Identification and communication

- Begin every user-facing sentence with exactly `**Codex-Wagner-Reports —**`.
- Public branding is `Wagner Reports`.
- The internal project name is `Codex-Wagner-Reports`.
- Use exact filenames, timestamps, checkpoint names, and website stages.
- When referring to an HTML version, always use its complete exact filename, such as `CodexTalk845a0825-WagnerReports.html` or `BetaTalk536p0824-WagnerReports.html`.
- Never use a shortened checkpoint label such as `CODEX 845A` or `BETA 536P` by itself as the name of an HTML version.
- Give Robert one clear step at a time when he is operating the Codex interface, TinyHost, Google Drive, or GitHub.

## Required startup question

- At the beginning of every newly created Codex task in this project, before editing project files, ask Robert exactly one startup question:
  `Do you have a new Codex Start New Session text file to upload? If yes, find the latest Start New Session file, click the plus button, and upload it here. If no, tell me to continue where we are.`
- If Robert uploads a Start New Session file, read it completely before acting.
- If Robert says there is no newer file or says to continue, inspect the newest local `Codex*-StartNewSession.txt` file and the files it identifies.
- Confirm the active checkpoint and paused versions before making changes.

## Start New Session handoff files

- Name every new-session handoff exactly `Codex[time][a-or-p][MMdd]-StartNewSession.txt` using the current America/New_York time and date.
- Example: `Codex633a0825-StartNewSession.txt` means 6:33 AM on August 25.
- Do not include the checkpoint name in the handoff filename; record the checkpoint inside the file.
- Preserve all previous Start New Session files.
- Each handoff must identify the active checkpoint, exact working files, paused versions, TinyHost deployment stage, Git/GitHub state, unresolved problems, approved decisions, and the first safe next action.

## Required end-of-session routine

- When Robert says he is finished, leaving, saying goodbye, creating a checkpoint, or ending the session, create a new timestamped Start New Session file before the final response.
- Also create the file whenever Robert explicitly says `End session and make checkpoint`.
- If the Google Drive connector is available, upload and verify the same file in Google Drive folder `_CODEX/Codex Web`.
- Report the exact local filename and Google Drive destination.
- This routine must happen before Robert closes the task; Codex cannot perform additional work after he silently closes the app or task.

## Version safety

- Never overwrite or delete an earlier timestamped HTML version or handoff file.
- Give every new CODEX test its own timestamped HTML filename using the current America/New_York date and time.
- Show that same test date and time in a clearly visible button on the opening `ENTER WAGNER REPORTS` screen beside the sound and skip controls.
- Keep the timestamped filename, visible CODEX banner, and opening-screen test button synchronized so Robert can confirm that the preview and test file are in lockstep.
- `beta.wagnerreports.com` is experimental testing.
- `test.wagnerreports.com` is formal testing of an approved experiment.
- `wagnerreports.com` is public production.
- Do not move a version between stages unless Robert explicitly approves it.
- Do not restart GitHub authentication unless Robert explicitly asks for GitHub work.
