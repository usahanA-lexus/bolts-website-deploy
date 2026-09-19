# Data you still need to fill in

## Signature features (blocked)

1. **Spotify:** playlist or track URI and preferred embed size for `/whimsical`.
2. **Dead fish cursor:** original asset file and which routes it should run on.
3. **Photo flip (optional):** if an older flip design (timing, back-face copy) exists outside this repo, share it so we can match it exactly. A new flip with major/role/badges is already in the redesign.

## Roster gaps

Handwritten team/exec notes were applied where names matched existing photos. Still needed:

| Item | Notes |
| --- | --- |
| Jackson Frankel | Team 1 on notes; no photo or major yet |
| Paul Rosales | Team 1 on notes; no photo or major yet |
| John Edelman | Team 2 on notes; no photo or major yet |
| Matt Long | Treasurer photo added; confirm major and team (1, 2, or neither) |
| Manju, Bryce, Nathan | On the old site; not on the handwritten Team A/B lists. Assign `team` or leave unassigned |
| Founder flags | All set to `false`. Mark founders in `src/data/roster.json` |
| Sixth exec seat | Design shows 6 exec cards; notes list 5 (President, VP, Secretary, Treasurer, Media Manager). Add a sixth title/person or leave at 5 |
| Team nicknames | Do not use `[TEAM NAME]`. Optional short names for Team 1 / Team 2 |
| Team blurbs | Optional one-line "what this team builds" under each team header |
| Majors | Fill empty `major` fields (Manju, Bryce, Matt, and any new people) |
| `flipBack` | Optional custom back-of-card copy per person in `roster.json` |

## Calendar

| Item | Notes |
| --- | --- |
| `oneOffEvents` | Workshops and competitions in `src/data/schedule.json` |
| `exceptions` | Campus holidays or cancelled meeting dates (YYYY-MM-DD) |

## Before production merge

1. Note the current Vercel production deployment URL (for Instant Rollback). See `docs/ROLLBACK.md`.
2. Set `hierarchyReady` in `src/data/site.json` only when you are happy with exec/team data (currently `true` using your handwritten assignments for people who have photos).
3. Confirm `og:image` at `/og.png` looks right after deploy.
