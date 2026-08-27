# DK's Adventures Design Baseline

This document defines the locked direction for DK's Adventures. Change it only when the pack direction intentionally changes.

## Identity

DK's Adventures is a casual, long-term Minecraft adventure world focused on exploration, discovery, evolving equipment, and returning home between expeditions.

The core loop is:

> Base -> prepare -> explore -> discover -> return -> improve -> repeat.

## Principles

1. Exploration is the primary activity.
2. The main base must remain mechanically and emotionally relevant.
3. RPG systems must add choices without level grinding or stat inflation.
4. Automation must be optional and should support base building.
5. Farms and redstone are welcome but must not become prerequisites for normal play.
6. A 30-60 minute session should still offer meaningful activities.
7. Loot should favor interesting sidegrades, materials, artifacts, and discoveries over raw power escalation.
8. Travel should matter. Convenience is earned after discovery, not granted up front.
9. The pack must avoid kitchen-sink growth.
10. Performance and visual atmosphere are both first-class requirements.

## Locked platform

- Minecraft 1.20.1
- Forge
- Java 17
- Packwiz-managed source

## Core content direction

### World and exploration

- Tectonic
- Alex's Caves
- Dungeons & Taverns
- selected YUNG's structure overhauls
- When Dungeons Arise only if structure density remains appropriate

Wilderness must remain meaningful. Structures must feel like destinations, not constant roadside clutter.

### Equipment and combat

- Tetra is the primary modular equipment system.
- Better Combat improves combat feel.
- Artifacts provides unusual exploration-derived equipment.

Avoid overlapping giant weapon ecosystems.

### Creatures

- Alex's Mobs
- Mowzie's Mobs
- Friends & Foes
- Critters & Companions as the first removal candidate if mob density becomes excessive

### Base and lifestyle

- Farmer's Delight
- Supplementaries
- Quark + Zeta with curated feature toggles

### Engineering

- Create is optional base engineering, not progression.
- No important content may require Create.
- Avoid giant Create addon collections for v1.

### Storage

- Storage Drawers for bulk materials
- Sophisticated Storage for general storage
- Create Item Vaults where appropriate
- Sophisticated Backpacks with restrained upgrades

Backpacks must extend expeditions without replacing the need to return home.

### Travel

- Map Atlases for exploration-focused mapping
- Waystones with restrictive configuration

The intended Waystones rule is: travel somewhere normally first, then make return travel easier.

### Goals

- BlazeandCave's Advancements Pack (BACAP)
- Better Advancements

BACAP is optional guidance, not a quest tree or progression gate.

### Casual-play QoL

- Grave-based death recovery
- Comforts
- Carry On with abuse-prone interactions restricted
- automatic backups

### Atmosphere

- Complementary Reimagined
- Sound Physics Remastered
- AmbientSounds, subject to performance testing

### Performance and rendering

- Embeddium
- Oculus
- Distant Horizons
- ModernFix
- FerriteCore
- Entity Culling
- ImmediatelyFast

Initial target settings:

- vanilla render distance: 10-12 chunks
- simulation distance: 8 chunks
- Distant Horizons: 128 chunks
- shader preset: tuned around Complementary Reimagined Medium
- no motion blur or gameplay depth-of-field
- target: stable 60+ FPS on Ryzen 5 3600 / Radeon RX 7600 / 16 GB RAM class hardware

## v1 candidate additions

Locked candidates:

- Better Advancements
- Comforts
- Sound Physics Remastered
- AmbientSounds (benchmark before final inclusion)
- Carry On (configure before final inclusion)

Test candidate only:

- Aquamirae

Deferred:

- Immersive Aircraft

## Explicitly out of scope for v1

- Mekanism
- Applied Energistics 2
- Refined Storage
- large Create addon collections
- skill trees
- character level grinding
- mob level scaling
- RPG rarity spam
- large ore bloat
- huge magic systems
- multiple new dimensions
- full GPS/cave/entity-radar minimaps
- locator-compass shortcuts that trivialize exploration
- additional giant weapon, mob, or structure packs without a demonstrated gap

## World stability policy

Before v1.0, test worlds may be discarded and world generation can change.

After v1.0 and the permanent world starts:

- do not casually remove or replace world-generation mods;
- review new structures, biomes, dimensions, ores, and terrain changes as migration risks;
- prefer fixes, performance improvements, configuration changes, and compatible content additions;
- back up the permanent world before every pack update.
