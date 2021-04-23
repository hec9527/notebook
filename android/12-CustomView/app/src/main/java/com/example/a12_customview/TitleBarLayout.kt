package com.example.a12_customview

import android.app.Activity
import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.widget.Button
import android.widget.LinearLayout
import android.widget.Toast

class TitleBarLayout(context:Context, attrs: AttributeSet): LinearLayout(context,attrs) {
    init {
        LayoutInflater.from((context)).inflate(R.layout.action_bar,this)
        val btn_back :Button = findViewById(R.id.btn_back)
        val btn_edit: Button = findViewById(R.id.btn_edit)
        btn_back.setOnClickListener{
            (context as Activity).finish()
        }
        btn_edit.setOnClickListener{
            Toast.makeText(context, "You click setting button",Toast.LENGTH_SHORT).show()
        }
    }
}