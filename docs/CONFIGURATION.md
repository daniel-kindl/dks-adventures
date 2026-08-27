# Configuration Policy

Configuration is part of the product. DK's Adventures should be playable after installation without requiring the player to tune individual mods.

## General rules

- Commit configuration changes with the mod/version change that needs them.
- Prefer the least intrusive setting that achieves the design goal.
- Do not enable automation, teleportation, storage, or backpack features that bypass the main gameplay loop.
- Avoid duplicated features between Quark, Supplementaries, Create, storage mods, and QoL mods.
- Keep wilderness, structure density, and creature density readable rather than saturated.
- Preserve vanilla methods even when a mod offers a faster alternative.

## Travel

Waystones must support an earned network:

- the player travels to a place normally before convenient return travel;
- portable teleportation is restricted;
- crafting is expensive or disabled if testing shows it trivializes distance;
- no `/home`-style shortcut is part of the baseline.

## Backpacks

Sophisticated Backpacks should extend expeditions, not replace the base.

Restrict or disable upgrades that create:

- extreme stack multiplication;
- automatic smelting;
- automatic feeding;
- excessive voiding or production automation;
- a portable warehouse/factory experience.

## Create

Create is optional base engineering.

- No quest, advancement gate, or core progression depends on Create.
- Vanilla furnaces, redstone, and manual processing stay useful.
- Prefer workshop-scale machines over always-running megafactories.
- Addons require a demonstrated gameplay need before inclusion.

## Quark

Perform a feature-by-feature pass before v1.0.

Disable features that:

- duplicate another selected mod;
- add unnecessary inventory clutter;
- bypass exploration or travel;
- do not materially improve the intended experience.

## Structures

Test world generation before v1.0.

- Major structures must remain destinations.
- Large stretches of wilderness must remain between points of interest.
- Reduce or remove overlapping structure sets rather than accepting saturation.

## Creatures

Test spawn density with the full creature stack.

- Vanilla mobs must remain visible and relevant.
- Rare fantasy encounters should remain rare.
- Remove Critters & Companions first if passive-mob density is excessive.

## Death

Use grave-based recovery with a casual long-term-world bias:

- death remains an inconvenience;
- equipment is recoverable;
- accidental permanent gear loss is not a design goal;
- XP loss should be reasonable.

## Visual defaults

Initial target:

- 10-12 vanilla render chunks;
- 8 simulation chunks;
- 128 Distant Horizons chunks;
- Complementary Reimagined around Medium settings;
- motion blur off;
- depth of field off for gameplay;
- restrained bloom;
- readable caves and nights;
- target stable 60+ FPS on the reference PC.

## Reference performance target

- Ryzen 5 3600
- 16 GB DDR4 system RAM
- Radeon RX 7600 8 GB
- 1080p
- Minecraft heap target: 7-8 GB

## Datapacks

Required datapacks must load automatically for new worlds through Paxi or an equivalent deterministic mechanism. Players should not need to enable BACAP, terrain, structure, or compatibility datapacks manually.
