package com.example.launchmap

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private val SECOND_ACTIVITY_REQUEST = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun showMap(view: View) {
        val intent = Intent(this, ShowMap::class.java)
        val value1 = value1.text.toString().toDouble()
        val value2 = value2.text.toString().toDouble()
        intent.putExtra("value1", value1)
        intent.putExtra("value2", value2)
        startActivityForResult(intent, SECOND_ACTIVITY_REQUEST)
        Log.d("MainActivity", "Button klicket")

    }
}
