package kursach.system.dto


data class Cell(
    val cellId: Long = 0L,
    val gameId: Long = 0L,
    val resourceId: Resource,
    val cellNumb: Int = 0,
    val countOfResources: Int = 0
)
