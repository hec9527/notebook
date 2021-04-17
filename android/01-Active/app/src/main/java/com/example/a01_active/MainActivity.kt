package com.example.a01_active

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.widget.Button
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity

/**
 * 添加视图的步骤
 *   1. 创建 active
 *   2. 创建 layout文件
 *   3. active中调用 setContentView
 */
class MainActivity : AppCompatActivity() {
    private var clickTimes = 0;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_layout)
        Log.i("active", "active lunched")

        val button: Button = findViewById(R.id.button)
        button.setOnClickListener {
            Toast.makeText(this, "click ${++clickTimes} times", Toast.LENGTH_SHORT).show()
        }

        val btnToSecond: Button = findViewById(R.id.button_intent)
        btnToSecond.setOnClickListener {
            // val intent = Intent(this, SecondActive::class.java)
            val intent = Intent("com.example.a01_active.ACTION_START")
            // 隐式intent，手动设置category
            // intent.addCategory("com.example.a01_active.MY_CATEGORY")
            intent.putExtra("data", "hello android.intent")
            // 启动一个active
            // startActivity(intent)
            // 启动一个active 并且期望回调参数
            startActivityForResult(intent, 10086)
        }

        /**
         * 在本地action中打开指定的url，而不是在浏览器中打开
         */
        val btnToThird: Button = findViewById(R.id.btn_toThird)
        btnToThird.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("https://d1.shurongdai.cn/rongshu/src/p/index/index.html#/")
            startActivity(intent)
        }

        /**
         * intent 不仅可以用来启动本机应用，
         * 还可以用来启动其它应用
         */
        val btnToWebview: Button = findViewById(R.id.btn_toWebview)
        btnToWebview.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("http://qq.com")
            startActivity(intent)
        }

        /**
         * 打电话
         */
        val btnToCall: Button = findViewById(R.id.btn_toCall)
        btnToCall.setOnClickListener {
            val intent = Intent(Intent.ACTION_DIAL)
            intent.data = Uri.parse("tel:10086")
            startActivity(intent)
        }

        val btnExist: Button = findViewById(R.id.btn_exist)
        btnExist.setOnClickListener {
            finish()
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.main_menu, menu)
        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.main_add -> Toast.makeText(this, "click add menu", Toast.LENGTH_SHORT).show()
            R.id.main_del -> Toast.makeText(this, "click del menu", Toast.LENGTH_SHORT).show()
        }
        return super.onOptionsItemSelected(item)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        Log.i(
            "intent",
            "ActivityResult--> requestCode: $requestCode resultCode:$resultCode data:$data"
        )
        super.onActivityResult(requestCode, resultCode, data)
        when (requestCode) {
            10086 -> if (resultCode == RESULT_OK) {
                val resData = data?.getStringExtra("data")
                Toast.makeText(this, resData, Toast.LENGTH_SHORT).show()
            }
        }
    }

    @RequiresApi(Build.VERSION_CODES.R)
    override fun onBackPressed() {
        val toast = Toast.makeText(this, "再点点击退出", Toast.LENGTH_SHORT)
        toast.show()
    }
}