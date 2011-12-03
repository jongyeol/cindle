package net.jong10.cindle;

import java.io.File;
import java.io.IOException;

import android.content.Context;

public class CscopeUtils {
    final private static String CSCOPE_BIN = "cscope";
    
    public static boolean initialize(Context context) throws IOException {
        File file = context.getDir(CSCOPE_BIN, Context.MODE_PRIVATE);
        if (file.exists())
            return true;
        
        FileSystemUtils.copyAssetToInternalStorage(context, CSCOPE_BIN, CSCOPE_BIN);
        return false;
    }
}
