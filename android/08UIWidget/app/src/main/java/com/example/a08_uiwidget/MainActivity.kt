package com.example.a08_uiwidget

import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.ProgressBar
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity(), View.OnClickListener {
    lateinit var edit_main: EditText
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btn_main: Button = findViewById(R.id.btn_main)
        val btn_cimg: Button = findViewById(R.id.btn_cimg)
        val img_main: ImageView = findViewById(R.id.img_main)
        val pro_main: ProgressBar = findViewById(R.id.progress_main)
        edit_main = findViewById(R.id.edit_main)
        btn_main.setOnClickListener(this)
        btn_cimg.setOnClickListener {
            if (pro_main.progress >= 100) {
                pro_main.progress = 0
            }
            pro_main.progress = pro_main.progress + 5
            if (img_main.tag == R.drawable.bllf1do) {
                img_main.setImageResource(R.drawable.igfxld2asd)
                img_main.tag = R.drawable.igfxld2asd
            } else {
                img_main.setImageResource(R.drawable.bllf1do)
                img_main.tag = R.drawable.bllf1do
            }
        }

    }

    /**
     * 继承View的OnClickListener接口
     */
    override fun onClick(v: View?) {
        Log.d("tag", v?.id.toString())
        when (v?.id) {
            R.id.btn_main -> {
                // Toast.makeText(this, edit_main.text.toString(), Toast.LENGTH_SHORT).show()
                AlertDialog.Builder(this).apply {
                    setTitle("您输入的内容为：")
                    setMessage(edit_main.text.toString())
                    setCancelable(false)
                    setPositiveButton("Ok") { dialog, which -> }
                    setNegativeButton("Cancel") { dialog, which -> }
                    show()
                }
            }
        }
    }
}