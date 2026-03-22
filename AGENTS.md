# Agent Instruction

This document contains guideline for AI agents to maintain this project

## Tech Stack
- Next.js 
- TypeSript

## Tools used
- [asdf](https://asdf-vm.com/) — **Node**, **pnpm**, and **pre-commit** are defined in [`.tool-versions`](.tool-versions) (canonical). [`.node-version`](.node-version) mirrors Node for tools that do not read asdf. Install the [pnpm](https://github.com/asdf-community/asdf-pnpm) plugin if needed: `asdf plugin add pnpm`. For pre-commit: `asdf plugin add pre-commit https://github.com/jonathanmorley/asdf-pre-commit.git`. After cloning or bumping versions, run `asdf install` from the repo root, then **`pre-commit install`** once per clone so commits run [`.pre-commit-config.yaml`](.pre-commit-config.yaml). When bumping **Node**, also update the `node/default` `tag` in [`.circleci/config.yml`](.circleci/config.yml) and `engines` in `package.json` if needed. When bumping **pnpm**, update **both** the `pnpm` line in `.tool-versions` and **`packageManager` in `package.json`** (same `pnpm@x.y.z`) so local asdf, Docker, and CI agree. When bumping **pre-commit**, keep the **pip** install in CircleCI in sync: it reads the version from `.tool-versions`.
- Renovate
- Docker — [Dockerfile](Dockerfile) runs `corepack enable && corepack install` after copying `package.json` and `pnpm-lock.yaml` so installs use the **pnpm** version from `packageManager` (matches `.tool-versions`).
- Circle CI

## Tooling management

When introducing or recommending a new development tool (e.g. `pre-commit`, `task`, `ruff`, `node`, `python`, `uv`):

- first check whether the tool can be managed via `asdf`
- prefer versioned installation through `.tool-versions` when possible
- avoid recommending `brew install`, `apt install`, or other system package managers unless `asdf` is not a viable option
- do not assume a global system installation if the tool can be versioned in the project
- if a new tool is added through `asdf`, update `.tool-versions` accordingly
- update relevant documentation (README or setup instructions) when tooling changes

## Development

Before starting to work on a new branch, think about pulling the default branch to have up to date code.
Read the `package.json` and `scripts` attribute for available commands.

**Lint and format:** the project uses **[pre-commit](https://pre-commit.com/)** on every commit (after `pre-commit install`) and in CI (`pre-commit run --all-files`). Hooks call `pnpm run lint` and `pnpm run prettier` from [`.pre-commit-config.yaml`](.pre-commit-config.yaml). For a manual check without committing, run **`pre-commit run --all-files`** from the repo root instead of invoking those `pnpm` scripts directly in docs or agent workflows.

**Environment variables:** Copy [`.env.example`](.env.example) to `.env`. With [direnv](https://direnv.net/) and [`.envrc`](.envrc), variables load when you enter the repo (run `direnv allow` once per clone). This uses direnv’s built-in `dotenv` — do **not** add the npm `dotenv` package. In CI and production (e.g. Vercel), define the same names in the host’s environment settings.

**Git:** When updating a feature branch from remote, prefer **`git pull --rebase`** (or `git fetch` + `git rebase origin/<branch>`) instead of a merge pull, unless you intentionally need a merge commit.


## Info
The Readme might but outdated the project was not maintained. We can clean what is not useful and keep the project for long maintenance only.


## Documentation rules

When modifying or generating documentation:

- `docs/product.md` describes **what the product does**.

## Planning before implementation

For non-trivial tasks (new features, architectural changes, schema updates):

The agent must first propose a short implementation plan before writing code.

The plan should include:
- the problem being solved
- affected modules or files
- required schema changes (if any)
- new endpoints or service functions
- potential edge cases
- identify impacts on the data model if applicable

Implementation should begin only after the plan is reviewed or confirmed.

If the task affects product behavior, the agent must review the documentation in `docs/` before planning.
