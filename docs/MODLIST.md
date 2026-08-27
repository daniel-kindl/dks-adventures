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

| Mod/datapack | Status | Role |
| --- | --- | --- |
| Tectonic 3.0.17 | Pinned v0.1 | Terrain generation |
| Alex's Caves 2.0.2 | Pinned v0.1 | Six rare underground destinations |
| Citadel 2.6.1 | Pinned v0.1 | Alex's Caves dependency |
| Dungeons & Taverns 3.0.3.f | Pinned v0.1/Paxi | Main additional structure layer |
| YUNG's Better Dungeons 1.20-Forge-4.0.4 | Pinned v0.1 | Dungeon overhaul |
| YUNG's Better Mineshafts 1.20-Forge-4.0.4 | Pinned v0.1 | Mineshaft overhaul |
| YUNG's Better Strongholds 1.20-Forge-4.0.3 | Pinned v0.1 | Stronghold overhaul |
| YUNG's Better Desert Temples 1.20-Forge-3.0.3 | Pinned v0.1 | Desert temple overhaul |
| YUNG's Better Jungle Temples 1.20-Forge-2.0.5 | Pinned v0.1 | Jungle temple overhaul |
| YUNG's Better Ocean Monuments 1.20-Forge-3.0.4 | Pinned v0.1 | Ocean monument overhaul |
| YUNG's Better Nether Fortresses 1.20-Forge-2.0.6 | Pinned v0.1 | Nether fortress overhaul |
| When Dungeons Arise | Deferred test | Add only if test worlds need more large destinations |
| Aquamirae | Deferred test | Possible ocean-adventure expansion |

See [WORLDGEN.md](WORLDGEN.md) for the world-generation policy and test gate.

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
| BlazeandCave's Advancements Pack 1.16.2 | Pinned v0.1/Paxi | 900+ added optional advancement goals |
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
