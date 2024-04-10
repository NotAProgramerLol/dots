#!/usr/bin/env sh
HYPRSHADE=$(hyprshade current)

if [ $HYPRSHADE ]; then
    hyprshade toggle
    grimblast copy area
    hyprshade toggle
    exit
fi
grimblast copy area
