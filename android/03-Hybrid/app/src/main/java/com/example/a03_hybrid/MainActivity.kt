package com.example.a03_hybrid

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.provider.Settings
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_layout)

        val btnToWebview :Button = findViewById(R.id.btn_toWebview)
        val btnToQQ :Button = findViewById(R.id.btn_toQQ)
        val btnTobaidu :Button = findViewById(R.id.btn_toBaidu)
        val btnToSystemString:Button = findViewById(R.id.btn_setting)
        val btnToCamera :Button=findViewById(R.id.btn_camera)
        btnToWebview.setOnClickListener{
            val intent = Intent(this, WebviewActive::class.java)
            // intent.data = Uri.parse("https://d1.shurongdai.cn/rongshu/src/p/index/index.html#/")
            intent.putExtra("data","https://d1.shurongdai.cn/rongshu/src/p/index/index.html#/")
            startActivity(intent)
        }
        btnToQQ.setOnClickListener{
            this.toBrowseView("http://qq.com")
        }
        btnTobaidu.setOnClickListener{
           this.toBrowseView("http://baidu.com")
        }
        btnToSystemString.setOnClickListener{
            val intent = Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:com.example.a03_hybrid"))
            startActivity(intent)
        }
        btnToCamera.setOnClickListener{
            val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            startActivity(intent)
        }
    }

    private fun toBrowseView(url: String){
        val intent = Intent(Intent.ACTION_VIEW)
        intent.data = Uri.parse(url)
        startActivity(intent)
    }
}