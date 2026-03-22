# Agent Instruction

This document contains guideline for AI agents to maintain this project

## Tech Stack
- Next.js 
- TypeSript

## Tools
- [asdf](https://asdf-vm.com/) — **Node** and **pnpm** are defined in [`.tool-versions`](.tool-versions) (canonical). [`.node-version`](.node-version) mirrors Node for tools that do not read asdf. Install the [pnpm](https://github.com/asdf-community/asdf-pnpm) plugin if needed: `asdf plugin add pnpm`. After cloning or bumping versions, run `asdf install` from the repo root. When bumping **pnpm**, update **both** the `pnpm` line in `.tool-versions` and **`packageManager` in `package.json`** (same `pnpm@x.y.z`) so local asdf, Docker, and CI agree.
- Renovate
- Docker — [Dockerfile](Dockerfile) runs `corepack enable && corepack install` after copying `package.json` and `pnpm-lock.yaml` so installs use the **pnpm** version from `packageManager` (matches `.tool-versions`).
- Circle CI

## Development
Read the `package.json` and `scripts` attribute to get the commands.

**Git:** When updating a feature branch from remote, prefer **`git pull --rebase`** (or `git fetch` + `git rebase origin/<branch>`) instead of a merge pull, unless you intentionally need a merge commit.


## Info
The Readme might but outdated the project was not maintained. We can clean what is not useful and keep the project for long maintenance only.


## Documentation rules

When modifying or generating documentation:

- `docs/product.md` describes **what the product does**.