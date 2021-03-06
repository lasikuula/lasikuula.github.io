package com.example.virtualstable

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        register_button_register.setOnClickListener {
            register()
        }

        already_have_account_text_view.setOnClickListener {
            Log.d("MainActivity", "Try show activity")

            // Laungh the login activity somehow
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }
    }

    private fun register() {
        val email  = email_editText_register.text.toString()
        val password = password_editText_register.text.toString()

        Log.d("MainActivity", "Email is " + email)
        Log.d("MainActivity", "Password: " + password)

        if (email.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please enter text in email/pw", Toast.LENGTH_SHORT)
                .show()
            return
        }

        FirebaseAuth.getInstance().createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener {
                if(!it.isSuccessful) return@addOnCompleteListener

                //else
                Log.d("Main", "Succesfully created user with uid:")
            }
            .addOnFailureListener {
                Toast.makeText(this, "Failed to greate user ${it.message}", Toast.LENGTH_SHORT)
                    .show()
                Log.d("Main", "Failed to greate user ${it.message}")
            }
    }
}
