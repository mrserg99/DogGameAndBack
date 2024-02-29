package kursach.system.dto

data class Lobby(
    val lobbyId: String = "",
    val places: Places,
    val lobbyName: String = "",
    val maxTime: Int
)
