package com.example.a02_activelifecycle

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class DialogActive : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.dialog_layout)
    }
}