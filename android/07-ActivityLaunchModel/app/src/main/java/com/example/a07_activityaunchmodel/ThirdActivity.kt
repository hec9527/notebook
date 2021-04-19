package com.example.a07_activityaunchmodel

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button

class ThirdActivity : BaseActivity() {
    private val tag = "launchmode"
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.third_layout)
        Log.d(tag, "third Activity onCreate")
        Log.d(tag, "second task id is: $taskId")

        val btn_thridToMian :Button = findViewById(R.id.btn_thrid2Main)
        val btn_Exist:Button = findViewById(R.id.btn_exist)

        btn_thridToMian.setOnClickListener{
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

        /**
         * 主动退出应用，需要将所有的Activity都结束
         */
        btn_Exist.setOnClickListener{
            ActivityController.clearActivity()
            // 可以在退出应用之后，杀掉当前应用，确保程序完全退出
            // android.os.Process.killProcess(android.os.Process.myPid())
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(tag, "third activity onDestory")
    }

}