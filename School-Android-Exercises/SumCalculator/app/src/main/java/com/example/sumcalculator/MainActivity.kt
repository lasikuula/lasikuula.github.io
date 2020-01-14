package com.example.sumcalculator

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

<<<<<<< HEAD
=======
    }

    fun buttonClicked(view: View) {
        val num1 = numberOne.text.toString().toInt()
        val num2 = numberTwo.text.toString().toInt()
        val summa = num1 + num2
        sum.setText(" $summa")
>>>>>>> cd7c5a60be8af70840137794a0974ed82af7a6d5
    }
}
