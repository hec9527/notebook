package com.example.a03_hybrid

import android.webkit.JsPromptResult
import android.webkit.WebChromeClient
import android.webkit.WebView

/**
 * - 自定义webview，继承WebChromeClient 覆盖原有方法
 * - 屏蔽JsPrompt弹窗
 */
class MyWebview : WebChromeClient() {
    override fun onJsPrompt(
        view: WebView?,
        url: String?,
        message: String?,
        defaultValue: String?,
        result: JsPromptResult?
    ): Boolean {
        // return super.onJsPrompt(view, url, message, defaultValue, result)
        result?.cancel()
        return true
    }
}