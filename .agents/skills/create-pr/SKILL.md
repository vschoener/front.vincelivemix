---
name: create-pr
description: Prepare a small, reviewable draft pull request from the current git diff. Use this when changes are ready to be reviewed and you need help checking scope, tests, commit message, and PR text.
disable-model-invocation: true
---

# Create PR

## Purpose

Prepare a draft pull request from the current changes.

This skill helps the agent:
- review the current diff
- verify alignment with project documentation
- identify missing tests or risky changes
- propose a commit message
- propose a PR title
- write a concise PR description

This skill supports the PR workflow. It does not replace project rules in `AGENTS.md` or project knowledge in `docs/`.

## When to use

Use this skill when:
- a feature or fix is implemented and ready for review
- tests have been added or updated
- you want a clean summary of the current change set
- you want to open a small, reviewable draft pull request

Do not use this skill:
- at the beginning of implementation
- when the diff still contains unrelated work
- when the branch scope is unclear

## Inputs

Before using this skill, the agent should inspect the current git state and diff.

Useful sources of truth:
- current branch name
- `git status --short`
- `git diff --stat`
- `git diff`
- relevant project documentation in `docs/`
- `AGENTS.md`

## Workflow

### 1. Check scope

First, inspect the current changes and determine:
- what was changed
- whether the diff is focused on one coherent task
- whether unrelated changes should be excluded from the PR

If the diff is too broad, say so clearly before drafting the PR.

### 2. Check alignment with project docs

Use relevant documentation from `docs/` only when needed.

Validate the diff against:
- product scope in `docs/product.md`

When relevant:
- reference decision IDs instead of duplicating rationale
- call out any mismatch between code and docs
- identify if docs should be updated before the PR is opened

### 3. Check quality gates

Review whether the change includes appropriate validation:
- required unit tests, if pure logic was introduced
- required integration tests, if API / DB behavior changed
- migration files, if the data model changed
- documentation updates, if behavior or architecture changed

If something important is missing, state it explicitly.

### 3.1 Lockfile (`pnpm-lock.yaml`, pnpm)

This repo uses **pnpm** with a committed lockfile. **pnpm** is pinned in [`.tool-versions`](../../../.tool-versions) (asdf); keep **`packageManager` in `package.json`** in sync when bumping the CLI. Before a PR is ready:

- If **`package.json`** changed (dependencies, `engines`, scripts that affect install), run **`pnpm install`** so **`pnpm-lock.yaml` is up to date** and commit both together.
- **Do not** open a PR with a stale or missing lock relative to `package.json` — reviewers and CI expect a reproducible install (`pnpm install --frozen-lockfile`).
- If **`pnpm-lock.yaml` conflicts** with `base` (e.g. after merging `master`): merge or take the intended `package.json`, then run **`pnpm install`** again and commit the **regenerated** lockfile. Avoid resolving lockfile conflicts by hand-editing YAML; regenerate instead.

When using this skill, the agent should call out a **missing or conflicting lockfile** before treating the PR as ready.

### 4. Summarize the change

Produce a concise summary covering:
- what changed
- why it changed
- the main files or modules affected
- notable risks or follow-ups

Keep the summary factual and scoped to the current diff.

### 5. Propose git / PR metadata

Provide:
- a conventional commit message
- a PR title
- a draft PR description

The PR description should use this structure:

## Summary
- short bullets of the main changes

## Why
- short explanation of the purpose of the change

## Tests
- tests added or run

## Follow-ups
- anything intentionally deferred

### 6. Preferred PR behavior

Default to a **draft PR** unless the user explicitly says the PR is ready for review.

If the repository tooling supports it, the agent may help create the draft PR. Otherwise, provide the title and body ready to paste.

## Output expectations

When using this skill, the final response should usually contain:
1. a quick review of PR readiness
2. any missing items to address first
3. a proposed commit message
4. a proposed PR title
5. a draft PR body

## Constraints

- Do not invent product features not present in project docs.
- Do not duplicate long decision rationale from `docs/decisions.md`.
- Keep the PR small and reviewable when possible.
- Prefer clarity over exhaustive detail.
- If the branch contains unrelated changes, say so instead of pretending the PR is clean.
- **Husky** runs **`pnpm run check`** on each **`git commit`** after **`pnpm install`** (per `AGENTS.md`). Do not push commits made with **`--no-verify`** unless the PR explicitly documents why. If hooks were not run, run **`pnpm run check`** once so local checks match CI before pushing.


## Commit conventions

Use Conventional Commits for all proposed messages:

- `feat:` for new features
- `fix:` for bug fixes
- `test:` for tests
- `chore:` for maintenance

Rules:
- Do not use non-standard prefixes like `!feat:`
- Use `feat!:` only for breaking changes
- Prefer clear, descriptive messages over generic ones

If the current commits do not follow this format:
- identify the incorrect commits
- propose corrected messages
- do not rewrite history automatically unless explicitly requested

## Git: updating a local branch

When integrating changes from `origin` (e.g. before pushing or opening a PR):

- Prefer **`git pull --rebase`** (or **`git fetch` + `git rebase origin/<branch>`**) so your commits stay **on top of** the latest remote history.
- **Avoid `git pull` without `--rebase`** (merge commits) for routine updates — it adds noise and complicates review.

If a rebase hits conflicts, resolve files, then `git rebase --continue`. If a rebase is not appropriate (rare), say so explicitly.

## Commit history strategy

During development:
- allow multiple commits to support iterative review
- keep commits logically grouped by change

Before merge:
- suggest cleaning commit messages if needed
- optionally suggest an interactive rebase (`git rebase -i`) to:
  - reword commit messages
  - squash trivial commits

Do not force squashing by default.
Preserve an iterative commit history unless the user explicitly requests a squash or the project requires it.

## PR creation policy

- Default to creating a **draft PR**
- Do not create a final PR without confirmation
- Ensure tests have been run or clearly listed
- Highlight any missing validation or follow-ups before proposing merge
