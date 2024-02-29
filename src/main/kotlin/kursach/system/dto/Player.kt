package kursach.system.dto

data class Player(
    val playerId: Long = 0L,
    val resourcesIdForDog: Int = 0,
    val numbResourcesForDog: Int = 0,
    val queueNumb: Int = 0,
    val cellId: Cell,
    val login: User,
    val gameId: User,
    val resourceId: List<PlayerResources>
)