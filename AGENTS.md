# Agent Instruction

This document contains guideline for AI agents to maintain this project

## Tech Stack
- Next.js 
- TypeSript

## Tools
- [asdf](https://asdf-vm.com/) — **Node version is defined in [`.tool-versions`](.tool-versions)** (canonical). [`.node-version`](.node-version) mirrors it for tools that do not read asdf; when bumping Node, also update the `node/default` `tag` in [`.circleci/config.yml`](.circleci/config.yml) and `engines` in `package.json` if needed.
- Renovate
- Docker
- Circle CI

## Development
Read the `package.json` and `scripts` attribute to get the commands.

**Git:** When updating a feature branch from remote, prefer **`git pull --rebase`** (or `git fetch` + `git rebase origin/<branch>`) instead of a merge pull, unless you intentionally need a merge commit.


## Info
The Readme might but outdated the project was not maintained. We can clean what is not useful and keep the project for long maintenance only.


## Documentation rules

When modifying or generating documentation:

- `docs/product.md` describes **what the product does**.