# DK's Adventures

A curated Minecraft 1.20.1 Forge modpack for a long-term casual single-player world.

> Explore -> discover -> return home -> improve -> explore again.

## Status

`0.1.0-dev`

The current development baseline includes:

- performance, shaders, and Distant Horizons;
- QoL, recovery, automatic backups, and bundled datapack support;
- terrain, caves, structures, and optional advancement goals;
- Tetra, Better Combat, Artifacts, Create, storage, travel, and base-building systems.

Creature, atmosphere, and final balance/configuration passes are still in development. Do not use the current build as the permanent-world release yet.

## Platform

- Minecraft 1.20.1
- Forge 47.4.10
- Java 17
- Packwiz-managed source

## Design

DK's Adventures prioritizes:

- adventure and exploration;
- a useful permanent home base;
- RPG-lite equipment progression without level grinding;
- optional automation instead of mandatory factories;
- meaningful travel and restrained inventory expansion;
- useful short sessions without pressure to rush content;
- stable performance on mid-range hardware.

Read [docs/DESIGN.md](docs/DESIGN.md) before changing gameplay scope. The selected content and current status are tracked in [docs/MODLIST.md](docs/MODLIST.md).

## Repository layout

- `mods/` - Packwiz mod metadata.
- `config/` - Pack-owned runtime configuration and bundled datapacks.
- `shaderpacks/` - Packwiz-managed shader metadata.
- `docs/` - design, configuration, performance, world-generation, and mod-selection policy.
- `.github/workflows/` - validation and reproducible `.mrpack` build checks.
- `pack.toml` / `index.toml` - Packwiz source of truth.

Third-party mod JARs are not committed when Packwiz can reference their upstream distribution.

## Maintenance

Common operations:

```text
packwiz refresh
packwiz update --all
packwiz modrinth export
```

Every dependency change must keep `packwiz refresh` clean and must produce a valid `.mrpack` in CI.

## Versioning

- `0.x`: development and test-world releases; world generation can still change.
- `1.0`: permanent-world-ready baseline.
- After `1.0`, world-generation and save-compatibility changes require explicit review.
