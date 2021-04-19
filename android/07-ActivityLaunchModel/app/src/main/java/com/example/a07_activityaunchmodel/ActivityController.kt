package com.example.a07_activityaunchmodel

import android.app.Activity

object ActivityController {
    private val activities = ArrayList<Activity>()

    fun addActivity(activity: Activity){
        activities.add(activity)
    }

    fun delActivity(activity: Activity){
        activities.remove(activity)
    }

    fun clearActivity(){
        for( ac in activities){
            if(!ac.isFinishing){
                ac.finish()
            }
        }
        activities.clear()
    }
}