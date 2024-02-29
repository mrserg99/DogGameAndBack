package kursach.system.dto

data class PlayerResources(
    val resourcesId: Resource,
    val playerId: Player,
    val countOfResources: Int = 0
)
