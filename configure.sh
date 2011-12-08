#!/bin/bash
# make local.properties file

LOCALPROP=local.properties

SDKDIR=`which adb | sed -e 's:/platform-tools/adb$::g'`
NDKDIR=`which ndk-build | sed -e 's:/ndk-build$::g'`

if [ -z "$SDKDIR" ]
then
    echo 'error: cannot found "adb". install Android SDK: http://developer.android.com/sdk/'
    exit
elif [ -z "$NDKDIR" ]
then
    echo 'error: cannot found "ndk-build". install Android NDK: http://developer.android.com/sdk/ndk/'
    exit
fi

# generate local.properties
rm -rf $LOCALPROP
touch $LOCALPROP
echo "sdk.dir=$SDKDIR" >> $LOCALPROP
echo "ndk.dir=$NDKDIR" >> $LOCALPROP
echo "generated: $LOCALPROP"
