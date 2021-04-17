package com.example.a02_activelifecycle

import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {
    private val tag = "lifecycle"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_layout)

        Log.d(tag, "onCreate")

        val btnToNormal: Button = findViewById(R.id.btn_toNormal)
        val btnToDialog: Button = findViewById(R.id.btn_toDialog)
        val btnToClose: Button = findViewById(R.id.btn_close)

        btnToNormal.setOnClickListener {
            val intent = Intent(this, NormalActive::class.java)
            startActivity(intent)
        }
        btnToDialog.setOnClickListener {
            val intent = Intent(this, DialogActive::class.java)
            startActivity(intent)
        }

        btnToClose.setOnClickListener {
            finish()
        }
    }

    /**
     * 在Active被回收的时候，一定会调用这个方法保存上下文
     */
    override fun onSaveInstanceState(outState: Bundle, outPersistentState: PersistableBundle) {
        Log.i(tag,"before active destory, and save instance now!")
        super.onSaveInstanceState(outState, outPersistentState)
    }

    override fun onStart() {
        super.onStart()
        Log.d(tag, "onstart")
    }

    override fun onResume() {
        super.onResume()
        Log.d(tag, "onResume")
    }

    override fun onStop() {
        super.onStop()
        Log.d(tag, "onStop")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(tag, "onDestory")
    }

    override fun onPause() {
        super.onPause()
        Log.d(tag, "onPause")
    }

    override fun onRestart() {
        super.onRestart()
        Log.d(tag, "onRestart")
    }
}