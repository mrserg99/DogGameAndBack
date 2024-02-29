package kursach.system.dto

import java.sql.Timestamp

data class Move(
    val gameId: Player,
    val raundNumb: Timestamp
)
