package net.jong10.cindle;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends Activity {
    final Context myApp = this;
    
    private String project = "test";
    private String filename = "FindResult.java";
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.i("MY_TAG", "on create");
        setContentView(R.layout.main);
        
        // setup project, filename
        WebView wv = (WebView)this.findViewById(R.id.codeView);
        wv.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        wv.getSettings().setJavaScriptEnabled(true);
        wv.loadUrl("file:///android_asset/www/test.html");
        wv.addJavascriptInterface( new CodeviewJavaScriptInterface(), "Codeview" );
    }
    
    
    final class CodeviewJavaScriptInterface {
        private String currentHtmlText = null;
        
        public void log( String string ){
            Log.i("MY_TAG", string);
        }
        
        public void Clickhook(String innerHTML) {
            String[] findTypeString = myApp.getResources().getStringArray(R.array.findBy);
            AlertDialog.Builder dialog = new AlertDialog.Builder(myApp);
            currentHtmlText = innerHTML;
            dialog.setTitle("cscope find");
            dialog.setItems( findTypeString, new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    Intent intent = new Intent( myApp, FindResult.class );
                    intent.putExtra("findBy", which);
                    intent.putExtra("text", currentHtmlText);
                    myApp.startActivity(intent);
                }
            } );
            dialog.setCancelable(true);
            dialog.create();
            dialog.show();
        }
        
        public String loadfile() {
            File sdcard = Environment.getExternalStorageDirectory();
            //Get the text file
            StringBuilder path = new StringBuilder();
            path = path.append("cindle").append("/").append( project ).append("/").append( filename );
            File file = new File(sdcard, path.toString() );
            Log.i("MY_TAG", file.getPath());
            
            //Read text from file
            StringBuilder text = new StringBuilder();
            try {
                BufferedReader br = new BufferedReader(new FileReader(file));
                String line;
                while ((line = br.readLine()) != null) {
                    text.append(line);
                    text.append('\n');
                }
            }
            catch (IOException e) {
                e.printStackTrace();
            }
            return text.toString();
        }
    }
}