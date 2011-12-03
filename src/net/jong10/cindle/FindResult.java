package net.jong10.cindle;

import android.app.Activity;
import android.os.Bundle;

public class FindResult extends Activity {
    @Override
    public void onCreate( Bundle savedInstanceState ) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.find_result );
        int which = getIntent().getIntExtra( "findBy", -1 );
        String html = getIntent().getStringExtra( "text" );
        if ( which == -1 ){
            this.setTitle( "error string" );
            return;
        }
        String[] findTypeString = getResources().getStringArray( R.array.findBy );
        this.setTitle( findTypeString[which] + " : " + html );
    }
}
