# World generation baseline

DK's Adventures uses world generation to create destinations, not constant visual noise. Wilderness must remain important.

## v0.1 baseline

### Terrain

- Tectonic 3.0.17 (Forge 1.20.1).
- Use the standard Minecraft world-height range for the first playable build.
- Do not intentionally enable extended-height generation until the complete pack is benchmarked.
- Distant Horizons provides long-distance scale; vanilla render distance stays modest.

### Rare cave destinations

- Alex's Caves 2.0.2.
- Citadel 2.6.1.

Alex's Caves is intentionally valuable because its six cave biomes are rare destinations rather than a replacement for ordinary underground exploration.

### Vanilla structure overhauls

The initial YUNG set is:

- Better Dungeons 1.20-Forge-4.0.4.
- Better Mineshafts 1.20-Forge-4.0.4.
- Better Strongholds 1.20-Forge-4.0.3.
- Better Desert Temples 1.20-Forge-3.0.3.
- Better Jungle Temples 1.20-Forge-2.0.5.
- Better Ocean Monuments 1.20-Forge-3.0.4.
- Better Nether Fortresses 1.20-Forge-2.0.6.

These are preferred over adding many unrelated structure packs because they make existing Minecraft destinations more substantial without requiring a large increase in structure frequency.

### Additional structures

Dungeons and Taverns 3.0.3.f is loaded globally through Paxi. It adds the main new-structure layer for the initial test build.

Do not add When Dungeons Arise to the first worldgen baseline. Reconsider it only after measuring structure frequency in generated test worlds.

## Advancement layer

BlazeandCave's Advancements Pack 1.16.2 is loaded globally through Paxi for Minecraft 1.20.1. It is an optional goal reservoir, not a progression gate.

No important item, recipe, location, or feature may require BACAP completion.

## Initial exclusions

The following are intentionally absent from the first worldgen test:

- When Dungeons Arise.
- YUNG's Better Witch Huts.
- YUNG's Bridges.
- YUNG's Extras.
- YUNG's Better End Island.
- Aquamirae.
- biome packs that replace the broad vanilla biome identity.

These can be reconsidered only if play testing identifies a specific gap.

## Test-world gate

Before the permanent world is created, generate and inspect multiple seeds. At minimum test:

1. 5,000+ blocks of Overworld travel in several directions.
2. Structure frequency and visible spacing between destinations.
3. Tectonic mountains and coastlines with Distant Horizons enabled.
4. Alex's Caves discovery rate and generation boundaries.
5. YUNG structure placement and loot behavior.
6. Dungeons and Taverns placement near villages and vanilla structures.
7. Nether fortress generation.
8. Ocean monument generation.
9. Chunk-generation frame pacing while exploring new terrain.
10. BACAP loading automatically in a brand-new world.

A test fails if exploration becomes a continuous chain of visible structures, if ordinary wilderness feels absent, or if terrain generation produces unacceptable stutter on the reference PC.

## Permanent-world rule

After v1.0, terrain generators and structure-set changes are high-risk changes. Do not casually add, remove, or replace them in an established world.
