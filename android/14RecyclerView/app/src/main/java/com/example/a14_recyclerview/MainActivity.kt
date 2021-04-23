package com.example.a14_recyclerview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {
    private val fruitList = ArrayList<Fruit>()
    private val data = listOf(
        "Apple",
        "Banana",
        "Orange",
        "Watermelon",
        "Pera",
        "Grape",
        "Pineapple",
        "Strawbwrry",
        "Cherry",
        "Mango",
        "Apple",
        "Banana",
        "Orange",
        "Watermelon",
        "Pera",
        "Grape",
        "Pineapple",
        "Strawbwrry",
        "Cherry",
        "Mango",
        "Apple",
        "Banana",
        "Orange",
        "Watermelon",
        "Pera",
        "Grape",
        "Pineapple",
        "Strawbwrry",
        "Cherry",
        "Mango",
        "Apple",
        "Banana",
        "Orange",
        "Watermelon",
        "Pera",
        "Grape",
        "Pineapple",
        "Strawbwrry",
        "Cherry",
        "Mango"
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        for (fruit in data) {
            fruitList.add(Fruit(fruit, R.drawable.apple))
        }

        // val listView: RecyclerView = findViewById(R.id.recyclerView)
        // val adapter = FruitAdapter(this, R.layout.fruit_layout, this.fruitList)
        // listView.adapter = adapter

    }
}