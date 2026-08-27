#!/usr/bin/env bash
set -euo pipefail

# Pin the v0.1 rendering/performance baseline to known Minecraft 1.20.1 builds.
packwiz modrinth add "https://modrinth.com/mod/embeddium/version/UTbfe5d1"
packwiz modrinth add "https://modrinth.com/mod/modernfix/version/h03ZvjY8"
packwiz modrinth add "https://modrinth.com/mod/ferrite-core/version/DG5Fn9Sz"
packwiz modrinth add "https://modrinth.com/mod/entityculling/version/Y76YJbkP"
packwiz modrinth add "https://modrinth.com/mod/immediatelyfast/version/NJ17fqEK"
packwiz modrinth add "https://modrinth.com/mod/distanthorizons/version/FWGxbEM3"
packwiz modrinth add "https://modrinth.com/shader/complementary-reimagined/version/r5.8.1"

# Oculus is tracked through CurseForge because it is not published on Modrinth.
# Its metadata is committed separately so Packwiz does not resolve a duplicate
# Embeddium dependency through a second provider.
packwiz refresh
