package com.example.a01_active

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class SecondActive : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.i("active", "secondActive show")
        setContentView(R.layout.second_layout)
        super.onCreate(savedInstanceState)
        val data = intent.getStringExtra("data")
        Toast.makeText(this, data, Toast.LENGTH_SHORT).show()


        val button: Button = findViewById(R.id.btn_to_main)
        button.setOnClickListener {
            this.bindBack()
        }
    }

    private fun bindBack() {
        val intent = Intent()
        intent.putExtra("data", "hello intent result")
        setResult(RESULT_OK, intent)
        finish()
    }

    override fun onBackPressed() {
        this.bindBack()
    }
}