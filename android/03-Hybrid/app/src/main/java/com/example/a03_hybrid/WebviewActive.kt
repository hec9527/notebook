package com.example.a03_hybrid

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.WindowManager
import android.webkit.WebView

class WebviewActive : AppCompatActivity() {
    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled", "ResourceAsColor")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.webview_layout)

        this.window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
        this.window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        this.window.statusBarColor = R.color.rs

        webView = findViewById(R.id.my_webview)
        val data:String? = intent.getStringExtra("data")

        Log.d("webview", "past data ---> $data")

        webView.settings.javaScriptEnabled = true
        webView.webChromeClient = MyWebview()
        webView.loadUrl(data?:"http://qq.com")
    }

    /**
     * 重写back方法
     */
    override fun onBackPressed() {
        // super.onBackPressed()
        if(this.webView.canGoBack()){
            this.webView.goBack()
        }else{
            finish()
        }
    }
}