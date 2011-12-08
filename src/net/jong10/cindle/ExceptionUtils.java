package net.jong10.cindle;

import android.util.Log;

public class ExceptionUtils {
    public static void printStackTrace(String tag, Exception e) {
        Log.e(tag, e.getMessage());
        for (StackTraceElement s : e.getStackTrace())
            Log.e(tag, "        at " + s.toString());
    }
}
