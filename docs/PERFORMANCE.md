# Performance baseline

DK's Adventures targets smooth 1080p play on a mid-range system while keeping shaders and long-distance terrain.

## v0.1 pinned rendering stack

| Component | Version | Purpose |
| --- | --- | --- |
| Embeddium | 0.3.31+mc1.20.1 | Main rendering optimization |
| ModernFix | 5.24.0+mc1.20.1 | Performance, memory, and bug fixes |
| FerriteCore | 6.0.1 | Memory reduction |
| Entity Culling | 1.10.4 | Avoid rendering hidden entities/block entities |
| ImmediatelyFast | 1.2.4+1.20.1 | Immediate-mode rendering optimizations |
| Distant Horizons | 3.2.0-b | Long-distance LOD terrain |
| Oculus | 1.8.0 | Forge shader loader |
| Complementary Reimagined | r5.8.1 | Default shader pack |

## Initial gameplay target

The first playable build should be tested with these values before tuning upward:

- Vanilla render distance: 12 chunks.
- Simulation distance: 8 chunks.
- Distant Horizons distance: 128 chunks.
- Distant Horizons CPU load: conservative while actively playing.
- Complementary Reimagined: start from the Medium profile.
- Motion blur: off.
- Depth of field: off for normal gameplay.
- FPS limit: 120.
- Java heap: 8 GiB maximum on a 16 GiB system.

Do not raise vanilla render distance to chase distant scenery. Raise Distant Horizons distance after the baseline is stable.

## Compatibility note

Oculus 1.8.0 explicitly includes Distant Horizons compatibility fixes. The current 1.20.1 combination of Oculus 1.8.0, Embeddium 0.3.31, and Distant Horizons 3.2.0-b is a test target, not an assumption of perfect compatibility. A 2026 report shows this combination working with shaders but notes flicker when using Distant Horizons' zoom-quality feature with a spyglass. Keep that feature disabled if the issue reproduces.

## Benchmark gate

Before v1.0, benchmark the complete pack in at least these scenarios:

1. Fresh terrain generation while travelling quickly.
2. A mature main base with Create machinery and storage.
3. A large cave or dungeon encounter with multiple entities.
4. Nether traversal.
5. Distant Horizons at 128, 192, and 256 chunks.
6. Shaders enabled and disabled.

Prefer stable frame pacing over a high peak FPS number.
