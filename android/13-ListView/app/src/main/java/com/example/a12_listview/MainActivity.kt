package com.example.a12_listview

import android.os.Bundle
import android.widget.ListView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

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

        val listView: ListView = findViewById(R.id.list_main)
        val adapter = FruitAdapter(this, R.layout.fruit_list, this.fruitList)
        listView.adapter = adapter

        listView.setOnItemClickListener { parent, view, position, id ->
            val fruit = fruitList[position]
            Toast.makeText(this, fruit.name, Toast.LENGTH_SHORT).show()
        }
    }
}