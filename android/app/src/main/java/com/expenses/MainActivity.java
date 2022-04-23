package com.expenses;

import com.reactnativenavigation.NavigationActivity;
import android.graphics.drawable.Drawable;
import androidx.core.content.ContextCompat;
import android.widget.LinearLayout;

public class MainActivity extends NavigationActivity {

    @Override
    protected void addDefaultSplashLayout() {
        LinearLayout splash = new LinearLayout(this);
        Drawable launch_screen_bitmap = ContextCompat.getDrawable(getApplicationContext(), R.drawable.launch_screen_bitmap);
        splash.setBackground(launch_screen_bitmap);
        setContentView(splash);
    }
}
