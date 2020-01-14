package com.example.launchmap

import android.content.Intent
import android.content.pm.ResolveInfo
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class ShowMap : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val bundle: Bundle? = intent.extras

        if (bundle !== null) {
            val value1 = bundle.getDouble("value1")
            val value2 = bundle.getDouble("value2")

        Log.d("ShowMap", "TÄSSÄ ON $value2")

        // Build the intent
        val location = Uri.parse("geo:$value1,$value2")
        val mapIntent = Intent(Intent.ACTION_VIEW, location)

        //Get data from intent


            // Verify it resolves
            val activities: List<ResolveInfo> = packageManager.queryIntentActivities(mapIntent, 0)
            val isIntentSafe: Boolean = activities.isNotEmpty()

            // Start an activity if it's safe
            if (isIntentSafe) {
                startActivity(mapIntent)
            } else {
                Toast.makeText(
                    this,
                    "There is no activity to handle map intent!",
                    Toast.LENGTH_LONG
                ).show()
            }
        }

        else {
            Toast.makeText(
                this,
                "Something went wrong",
                Toast.LENGTH_LONG
            ).show()
        }
    }
}