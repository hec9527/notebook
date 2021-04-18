package com.example.a07_activityaunchmodel

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button

class MainActivity : BaseActivity() {
    private val tag = "launchmode"
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_layout)

        Log.d(tag, "main taskId: ${this.taskId}  $this")
        val btnToMain: Button = findViewById(R.id.btn_launchMain)
        val btnToSecond:Button = findViewById(R.id.btn_toSecond)

        btnToMain.setOnClickListener{
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }
        btnToSecond.setOnClickListener{
//            val intent = Intent(this, SecondActivity::class.java)
//            startActivity(intent)
            // 采用伴生对象的方式调用SecondActivity
            SecondActivity.actionStart(this, "更优雅的调用Activity")
        }
    }

    override fun onRestart() {
        super.onRestart()
        Log.d(tag, "restart activity")

    }
}