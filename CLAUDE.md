# CLAUDE.md

Guidance for Claude Code in this repository.

## Project

A stoplight component in React 19 + TypeScript, built with Vite. The requirements and my design decisions are in `PLAN.md`; read it before starting a task. This code will be reviewed and extended live, so every change must be easy to read and explain.

## Commands

- `npm run dev`: dev server at http://localhost:5173, with Fast Refresh
- `npm run build`: type-check with `tsc` (TypeScript 7, strict by default), then build to `dist/`
- `npm run lint`: Oxlint, including the React hooks rules (`rules-of-hooks`, `exhaustive-deps`)

Before saying a change is done, run `npm run build` and `npm run lint` and fix anything they report. There is no test framework; for behavior, tell me exactly what to watch for in the browser

## How to work with me

- Before writing non-trivial code, state your assumptions and a short plan (which files change and how), then wait for my OK.
- If a request has two reasonable readings, name both. Don't pick one silently.
- One small change at a time. Touch only what the change needs; don't refactor or reformat unrelated code.
- After each change, say in 2-3 sentences what changed, why, and how you checked it.
- If there's a simpler approach, or my request would make the code worse, say so.