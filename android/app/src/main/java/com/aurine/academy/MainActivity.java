package com.aurine.academy;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onStart() {
        super.onStart();
        // Tutaj możesz dodać swój kod, np. ukrycie pasków systemowych dla fullscreen
        // getWindow().getDecorView().setSystemUiVisibility(
        //      View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        // );
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Możesz tu zostawić domyślną konfigurację Capacitor
    }
}
