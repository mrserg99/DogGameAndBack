package kursach.system.dto

import jakarta.persistence.*
import java.sql.Timestamp

data class User(
    val login: String = "",
    val password: String,
    val dateActivity: Timestamp?
)
