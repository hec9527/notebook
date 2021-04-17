package com.example.a02_activelifecycle

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class NormalActive : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.normal_layout)
    }
}