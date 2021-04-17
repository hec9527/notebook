package com.example.a01_active

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class ThirdActive : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.third_active)

        val btn: Button = findViewById(R.id.btn_to_main2)
        btn.setOnClickListener{
            // val intent = Intent(this, MainActivity::class.java)
            val intent = Intent()
            intent.putExtra("data","hello intent result")
            // startActivity(intent)
            setResult(RESULT_OK,intent)
        }
    }
}