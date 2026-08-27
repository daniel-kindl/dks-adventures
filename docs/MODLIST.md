# Mod List

This file is the human-readable inventory for DK's Adventures. Packwiz metadata is authoritative for exact download sources, hashes, and dependency resolution.

## Platform

| Component | Version/status | Role |
| --- | --- | --- |
| Minecraft | 1.20.1 | Game version |
| Forge | 47.4.10 | Mod loader |
| Paxi | 1.20-Forge-4.0 | Load bundled datapacks for new worlds |
| YUNG's API | 1.20-Forge-4.0.6 | Shared dependency for YUNG mods |

## Installed: world and exploration

| Mod/datapack | Version | Role |
| --- | --- | --- |
| Tectonic | 3.0.17 | Terrain generation |
| Alex's Caves | 2.0.2 | Rare underground destinations |
| Citadel | 2.6.1 | Alex's Caves dependency |
| Dungeons & Taverns | 3.0.3.f | Additional structure layer through Paxi |
| YUNG's Better Dungeons | 1.20-Forge-4.0.4 | Dungeon overhaul |
| YUNG's Better Mineshafts | 1.20-Forge-4.0.4 | Mineshaft overhaul |
| YUNG's Better Strongholds | 1.20-Forge-4.0.3 | Stronghold overhaul |
| YUNG's Better Desert Temples | 1.20-Forge-3.0.3 | Desert temple overhaul |
| YUNG's Better Jungle Temples | 1.20-Forge-2.0.5 | Jungle temple overhaul |
| YUNG's Better Ocean Monuments | 1.20-Forge-3.0.4 | Ocean monument overhaul |
| YUNG's Better Nether Fortresses | 1.20-Forge-2.0.6 | Nether fortress overhaul |

See [WORLDGEN.md](WORLDGEN.md) for the world-generation policy and test gate.

## Installed: equipment and combat

| Mod | Version | Role |
| --- | --- | --- |
| Tetra | 6.17.0 | Modular tools and weapons |
| Better Combat | 1.9.0 | Combat feel and animation |
| Artifacts | 9.5.19 | Exploration-derived equipment |

## Installed: base and lifestyle

| Mod | Version | Role |
| --- | --- | --- |
| Farmer's Delight | 1.3.3 | Farming and cooking |
| Supplementaries | 3.1.43 | Functional and decorative Vanilla+ content |
| Quark | 4.0-462 | Curated Vanilla+ and QoL |
| Zeta | 1.0-31 | Quark dependency |
| Create | 6.0.8 | Optional base engineering |

## Installed: storage and travel

| Mod | Version | Role |
| --- | --- | --- |
| Storage Drawers | 12.14.3 | Bulk physical storage |
| Sophisticated Storage | 1.4.86.2131 | General storage |
| Sophisticated Backpacks | 3.24.67.2109 | Expedition storage; requires balance pass |
| Map Atlases | 6.0.20 | Exploration-oriented mapping |
| Waystones | 14.1.20 | Earned travel network; requires balance pass |
| Comforts | 6.4.0+1.20.1 | Sleeping bags without moving home spawn |
| Carry On | 2.1.2.7 | Physical block/entity QoL; requires interaction pass |

## Installed: goals and UI

| Mod/datapack | Version | Role |
| --- | --- | --- |
| BlazeandCave's Advancements Pack | 1.16.2 | Large optional advancement set through Paxi |
| Better Advancements | 0.6.0.73 | Better advancement UI |
| EMI | 1.1.22+1.20.1+forge | Recipe and item viewer |
| Jade | 11.13.3 | Contextual block/entity information |

## Installed: graphics and performance

| Component | Version | Role |
| --- | --- | --- |
| Complementary Reimagined | r5.8.1 | Default shader |
| Oculus | 1.8.0 | Forge shader support |
| Distant Horizons | 3.2.0-b | Long-distance terrain |
| Embeddium | 0.3.31+mc1.20.1 | Rendering optimization |
| ModernFix | 5.24.0+mc1.20.1 | Runtime, loading, and memory fixes |
| FerriteCore | 6.0.1 | Memory optimization |
| Entity Culling | 1.10.4 | Skip hidden entity rendering |
| ImmediatelyFast | 1.2.4+1.20.1 | Immediate-mode rendering optimization |

See [PERFORMANCE.md](PERFORMANCE.md) for the reference settings and benchmark target.

## Installed: recovery

| Mod | Version | Role |
| --- | --- | --- |
| Simple Backups | 1.20.1-3.1.24 | Automatic rotating world backups |
| GraveStone Mod | 1.0.32 | Recoverable inventory after death |

Backup behavior is defined by the committed pack configuration.

## Next v0.1 candidates

These are part of the locked direction but are not yet installed in the pack.

| Mod | Decision | Role |
| --- | --- | --- |
| Alex's Mobs | Add | Main wildlife expansion |
| Mowzie's Mobs | Add | Rare fantasy encounters |
| Friends & Foes | Add | Vanilla-style creature expansion |
| Critters & Companions | Test | Small ambient creature layer; remove first if density is excessive |
| Sound Physics Remastered | Add | Spatial acoustics |
| AmbientSounds | Benchmark | Environmental ambience |

## Deferred candidates

- When Dungeons Arise: test only if the world needs more large destinations.
- Aquamirae: possible ocean-adventure expansion after the core pack is stable.
- Immersive Aircraft: possible late-world travel addition.

## Explicitly excluded for v1

- Mekanism
- Applied Energistics 2
- Refined Storage
- large Create addon collections
- skill trees and character level grinding
- mob level scaling
- RPG rarity spam
- large ore bloat
- large magic progression systems
- multiple new dimensions
- full GPS, cave, or entity-radar minimaps
- locator shortcuts that trivialize exploration
