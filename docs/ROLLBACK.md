# Rollback: restore the pre-riso site

Three ways to get the old design back. Pick one.

## 1. Check out the backup tag (local)

```bash
git fetch --tags
git checkout pre-riso-backup-2026-09-18
```

To put that snapshot on a branch again:

```bash
git checkout -b restore/pre-riso pre-riso-backup-2026-09-18
```

Offline copies (outside this repo):

- `../bolts-pre-riso.bundle` (full git bundle; restore with `git clone ../bolts-pre-riso.bundle bolts-restore`)
- `../bolts-pre-riso-worktree.zip` (working tree zip without `node_modules`, `.git`, or `dist`)

## 2. Redeploy the backup branch on Vercel

Branch: `backup/pre-riso-2026-09-18`

In the Vercel project, deploy that branch (or set it as the production branch temporarily) so production serves the pre-riso code again.

## 3. Vercel Instant Rollback

In the Vercel dashboard, open the project Deployments list, find the last production deployment from before the riso redesign merge, and use Instant Rollback.

## To-do for you before any merge to production

Note the current production deployment URL in the Vercel dashboard (Deployments, the live Production deployment). You will need that URL if you use Instant Rollback. This agent cannot see it.

## Backup identifiers

| Kind | Name |
| --- | --- |
| Annotated tag | `pre-riso-backup-2026-09-18` |
| Branch | `backup/pre-riso-2026-09-18` |
| Commit | `1b61c71` (origin/main at backup time) |
