# Mod List

This file tracks the intended DK's Adventures v1 scope. Exact versions are pinned in Packwiz metadata when each mod is installed.

## Core platform

| Component | Status | Role |
| --- | --- | --- |
| Minecraft 1.20.1 | Locked | Game version |
| Forge 47.4.10 | Locked | Mod loader |
| Paxi 1.20-Forge-4.0 | Pinned v0.1 | Load bundled datapacks/resource packs for new worlds |
| YUNG's API 1.20-Forge-4.0.6 | Pinned v0.1 | Shared dependency for Paxi/YUNG mods |

## Exploration and world

| Mod | Status | Role |
| --- | --- | --- |
| Tectonic | Locked | Terrain generation |
| Alex's Caves | Locked | Rare underground destinations |
| Dungeons & Taverns | Locked | Vanilla-style structures |
| Selected YUNG's Better mods | Locked | Improve vanilla structures |
| When Dungeons Arise | Test | Large destination structures; density must be tuned |
| Aquamirae | Test | Ocean adventure content |

## Equipment and combat

| Mod | Status | Role |
| --- | --- | --- |
| Tetra | Locked | Modular tools and weapons |
| Better Combat | Locked | Combat feel |
| Artifacts | Locked | Exploration-derived equipment |

## Creatures

| Mod | Status | Role |
| --- | --- | --- |
| Alex's Mobs | Locked | Main wildlife expansion |
| Mowzie's Mobs | Locked | Rare fantasy encounters |
| Friends & Foes | Locked | Vanilla-style creature expansion |
| Critters & Companions | Test | Small ambient creature layer |

## Base and lifestyle

| Mod | Status | Role |
| --- | --- | --- |
| Farmer's Delight | Locked | Farming and cooking |
| Supplementaries | Locked | Functional/decorative Vanilla+ content |
| Quark 4.0-462 + Zeta 1.0-31 | Pinned v0.1/configure | Curated Vanilla+ and QoL |
| Create | Locked | Optional base engineering |

## Storage and travel

| Mod | Status | Role |
| --- | --- | --- |
| Storage Drawers | Locked | Bulk storage |
| Sophisticated Storage | Locked | General storage |
| Sophisticated Backpacks | Locked/configure | Expedition storage without portable-factory behavior |
| Map Atlases | Locked | Exploration-oriented mapping |
| Waystones | Locked/configure | Earned travel network |
| Comforts 6.4.0+1.20.1 | Pinned v0.1 | Sleeping bags without moving home spawn |
| Carry On 2.1.2.7 | Pinned v0.1/configure | Small physical QoL interactions |

## Goals and UI

| Mod/datapack | Status | Role |
| --- | --- | --- |
| BlazeandCave's Advancements Pack | Locked | 1000+ optional goals |
| Better Advancements 0.6.0.73 | Pinned v0.1 | Better advancement UI |
| EMI 1.1.22+1.20.1+forge | Pinned v0.1 | Recipe/item viewer |
| Jade 11.13.3 | Pinned v0.1 | Lightweight contextual information |

## Atmosphere and graphics

| Component | Status | Role |
| --- | --- | --- |
| Complementary Reimagined r5.8.1 | Pinned v0.1 | Default shader |
| Oculus 1.8.0 | Pinned v0.1 | Forge shader support |
| Distant Horizons 3.2.0-b | Pinned v0.1 | Long-distance terrain |
| Sound Physics Remastered | Locked | Spatial cave/world acoustics |
| AmbientSounds | Benchmark | Environmental ambience |

## Performance

| Mod | Status |
| --- | --- |
| Embeddium 0.3.31+mc1.20.1 | Pinned v0.1 |
| ModernFix 5.24.0+mc1.20.1 | Pinned v0.1 |
| FerriteCore 6.0.1 | Pinned v0.1 |
| Entity Culling 1.10.4 | Pinned v0.1 |
| ImmediatelyFast 1.2.4+1.20.1 | Pinned v0.1 |

See [PERFORMANCE.md](PERFORMANCE.md) for the initial graphics and benchmark settings.

## Recovery and maintenance

| Mod | Status | Role |
| --- | --- | --- |
| Simple Backups 1.20.1-3.1.24 | Pinned/configured v0.1 | Automatic rotating world backups |
| GraveStone Mod 1.0.32 | Pinned v0.1 | Recoverable inventory after death |

Simple Backups uses full backups every 60 minutes, retains at most 12 archives, and caps the backup directory at 15 GB. This intentionally favors recovery reliability over incremental-storage efficiency.

## Deferred

- Immersive Aircraft

## Explicitly excluded for v1

- Mekanism
- Applied Energistics 2
- Refined Storage
- giant Create addon collections
- skill trees and character level grinding
- mob level scaling
- RPG rarity spam
- large ore bloat
- huge magic systems
- multiple new dimensions
- full GPS/cave/entity-radar minimaps
- locator-compass shortcuts that trivialize exploration
