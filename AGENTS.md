# Agent Instruction

This document contains guideline for AI agents to maintain this project

## Tech Stack
- Next.js 
- TypeSript

## Tools used
- [asdf](https://asdf-vm.com/) — **Node** and **pnpm** are defined in [`.tool-versions`](.tool-versions) (canonical). [`.node-version`](.node-version) mirrors Node for tools that do not read asdf. Install the [pnpm](https://github.com/asdf-community/asdf-pnpm) plugin if needed: `asdf plugin add pnpm`. After cloning or bumping versions, run `asdf install` from the repo root. When bumping **Node**, also update the `node/default` `tag` in [`.circleci/config.yml`](.circleci/config.yml) and `engines` in `package.json` if needed. When bumping **pnpm**, update **both** the `pnpm` line in `.tool-versions` and **`packageManager` in `package.json`** (same `pnpm@x.y.z`) so local asdf, Docker, and CI agree.
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
Read the `package.json` and `scripts` attribute to get the commands.

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
