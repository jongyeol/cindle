#!/bin/bash
set -e
ant debug
adb install -r bin/cindle-debug.apk
adb logcat -c
adb shell am start -n net.jong10.cindle/net.jong10.cindle.MainActivity
adb logcat cindle:* *:S
