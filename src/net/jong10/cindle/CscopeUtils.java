package net.jong10.cindle;

import java.io.File;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import android.content.Context;
import android.os.Environment;
import android.provider.OpenableColumns;
import android.util.Log;

public class CscopeUtils {
    final private static String CSCOPE_BIN = "cscope";
    private static final String TAG = "cindle";
    private Context mContext = null;
    private String mProjectName = null;

    public CscopeUtils(Context context, String project) throws IOException {
        mContext = context;
        mProjectName = project;
        copyIfNotExistsCscopeBinary(context);
    }

    private boolean copyIfNotExistsCscopeBinary(Context context) throws IOException {
//        File file = context.getDir(CSCOPE_BIN, Context.MODE_PRIVATE);
//        if (file.exists())
//            return true;

        FileSystemUtils.copyAssetToInternalStorage(context, "bin/cscope", CSCOPE_BIN);
        return false;
    }

    public void generateCscopeOut() {
        Log.d(TAG, "generate cscope.out");
        String cscope = mContext.getFileStreamPath(CSCOPE_BIN).toString();
        String path = FileSystemUtils.getProjectPath(mContext, mProjectName);
        //executeCommand(String.format("%s -bkR %s", cscope, path));
        executeCommand(String.format("%s --help", cscope));
    }

    public void executeCommand(String cmd) {
        Log.d(TAG, "executeCommand: " + cmd);

        Runtime run = Runtime.getRuntime();
        Process pr = null;
        try {
            pr = run.exec(cmd);
        } catch (IOException e) {
            ExceptionUtils.printStackTrace(TAG, e);
        }
        try {
            pr.waitFor();
        } catch (InterruptedException e) {
            ExceptionUtils.printStackTrace(TAG, e);
        }
        BufferedReader buf = new BufferedReader(new InputStreamReader(pr.getInputStream()));
        String line = "";
        try {
            while ((line = buf.readLine()) != null) {
                //System.out.println(line);
                Log.d(TAG, line);
            }
        } catch (IOException e) {
            ExceptionUtils.printStackTrace(TAG, e);
        }
    }
}
