package com.example.virtualstable

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_login)

        login_button_login.setOnClickListener {
            val email = login_username.text.toString()
            val password = login_passoword.text.toString()

            Log.d("Login", "Attempt login with email/pw: $email/*** ")

            FirebaseAuth.getInstance().signInWithEmailAndPassword(email, password)
                .addOnCompleteListener {

                }
                .addOnFailureListener {

                }
        }

        back_to_register_view.setOnClickListener {
            finish()
        }
    }
}