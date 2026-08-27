# DK's Adventures

A curated Minecraft 1.20.1 Forge modpack for a long-term casual single-player world.

The pack is built around a simple loop:

> Explore -> discover -> return home -> improve -> explore again.

## Design goals

- Adventure and exploration are the primary activities.
- The main base stays useful throughout the world.
- RPG elements add choices without level grinding.
- Automation is optional and supports base building.
- Farms and redstone remain available but are never required for normal progression.
- Short sessions remain worthwhile.
- World generation and major content become conservative after v1.0.
- Performance targets mid-range hardware and includes shaders plus Distant Horizons.

See [docs/DESIGN.md](docs/DESIGN.md) for the locked design baseline.

## Platform

- Minecraft 1.20.1
- Forge 47.4.10 (recommended 1.20.1 build)
- Java 17
- Packwiz-managed source

## Status

`v0.1.0-dev` - repository bootstrap. The first playable test build is not complete yet.

## Development

This repository is the source of truth for the pack. Mod JAR files are not committed directly when Packwiz metadata can reference the upstream distribution.

Useful Packwiz commands:

```text
packwiz refresh
packwiz modrinth install <mod>
packwiz curseforge install <mod>
packwiz update <mod>
packwiz modrinth export
```

Configuration changes are part of the pack and should be committed with the mod/version change that requires them.

## Versioning

- `0.x`: test-world development; world generation can still change.
- `1.0`: permanent-world-ready baseline.
- After `1.0`, changes that affect already-generated worlds require explicit review.

## Repository

https://github.com/daniel-kindl/dks-adventures
