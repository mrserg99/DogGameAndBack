package kursach.system.repository

import org.jetbrains.exposed.sql.Database
import org.springframework.stereotype.Repository

@Repository
class MyRepository() {
    init {
//        Database.connect("",
//            driver = "com.mysql.cj.jdbc.Driver",
//            user = "",
//            password = "")
    }

    fun test(){
        println("Hello")
    }
}