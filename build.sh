#!/bin/bash
ant clean
ant debug
~/bin/adb uninstall net.jong10.cindle
~/bin/adb install ./bin/cindle-debug.apk
adb logcat -c
adb shell am start -n net.jong10.cindle/net.jong10.cindle.MainActivity
adb logcat MY_TAG:* *:S
