package com.example.a07_activityaunchmodel

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast

class SecondActivity : BaseActivity() {
    private val tag = "launchmode"
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.second_layout)

        Log.d(tag, "second activity onCreate")
        Log.d(tag, "second task id is: $taskId")

        val btn_toMain :Button = findViewById(R.id.btn_second2Main)
        val btn_toThrid: Button = findViewById(R.id.btn_second2Thrid)
        btn_toMain.setOnClickListener{
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }
        btn_toThrid.setOnClickListener{
            val intent = Intent(this, ThirdActivity::class.java)
            startActivity(intent)
        }

        Toast.makeText(this, intent.getStringExtra("toast"), Toast.LENGTH_SHORT).show()
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(tag, "second activity destory")
    }

    companion object{
        fun actionStart(context: Context, toast:String){
            val intent = Intent(context, SecondActivity::class.java)
            intent.putExtra("toast", toast)
            context.startActivity(intent)
        }
    }
}