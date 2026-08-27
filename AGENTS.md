# Agent Guide

DK's Adventures is a curated Minecraft 1.20.1 Forge modpack. Read `docs/DESIGN.md` before changing dependencies, gameplay balance, world generation, travel, storage, automation, or progression.

## Rules

- Preserve the exploration -> return home -> improve -> explore loop.
- Do not add a mod because it is popular or broadly useful; require a concrete gap.
- Avoid kitchen-sink growth and overlapping systems.
- Keep Create optional and base-focused.
- Keep travel meaningful and backpacks restrained.
- Treat world-generation changes as high risk after v1.0.
- Pin dependency versions through Packwiz metadata.
- Do not commit third-party mod JARs when Packwiz can reference upstream distribution.
- Keep configuration in version control.
- Benchmark gameplay-impacting performance changes on the reference target when possible.
- Update `docs/MODLIST.md` and `docs/CONFIGURATION.md` when decisions change.

## Change quality gate

Before accepting a gameplay/content change, answer:

1. What problem does this solve?
2. Does an existing selected mod already solve it?
3. Does it strengthen exploration, the home base, or casual play?
4. Does it create grind, mandatory automation, inventory clutter, or travel shortcuts?
5. Does it affect world generation or save compatibility?
6. What is the expected performance cost?

If the benefit is unclear, leave the mod out.
