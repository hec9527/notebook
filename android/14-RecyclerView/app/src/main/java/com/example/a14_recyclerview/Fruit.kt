package com.example.a14_recyclerview

import android.app.Activity
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.ImageView
import android.widget.TextView

class Fruit(val name: String, val imageId: Int)

class FruitAdapter(activity: Activity, private val resourceId: Int, data: List<Fruit>) :
    ArrayAdapter<Fruit>(activity, resourceId, data) {

    inner class ViewHolder(val fruitImage: ImageView, val fruitText: TextView)

    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
        val viewHolder: ViewHolder

        val view: View
        if (convertView == null) {
            view = LayoutInflater.from(context).inflate(resourceId, parent, false)
            val fruitImage: ImageView = view.findViewById(R.id.fruit_image)
            val fruitText: TextView = view.findViewById(R.id.fruit_text)
            viewHolder = ViewHolder(fruitImage, fruitText)
            view.tag = viewHolder
        } else {
            view = convertView
            viewHolder = view.tag as ViewHolder
        }
        val fruit = getItem(position)
        if (fruit !== null) {
            viewHolder.fruitImage.setImageResource(fruit.imageId)
            viewHolder.fruitText.text = fruit.name
        }
        Log.i("fruitId",fruit?.imageId.toString() + fruit?.name)

        return view
    }
}

