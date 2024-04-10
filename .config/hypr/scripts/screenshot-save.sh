#!/usr/bin/env sh
HYPRSHADE=$(hyprshade current)

if [ $HYPRSHADE ]; then
    hyprshade toggle
    grimblast save area
    hyprshade toggle
    exit
fi
grimblast save area
