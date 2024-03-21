package kursach.system.repository

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import kursach.system.dto.Cell
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import kursach.system.vocabulary.Procedures
import org.slf4j.LoggerFactory
import java.net.URL

class QueryRemove : Query {

    companion object {
        val log = LoggerFactory.getLogger(QueryRemove::class.java)
        const val url = "https://mysql.lavro.ru/call.php?db=263879&pname="
        val mapper = jacksonObjectMapper()
    }

    override fun authorisationQuery(login: String, password: String): String {
        log.info("Вызов процедуры авторизации")

        val query = prepareQuery(Procedures.authorisationUser, login, password)

        val json = URL(query).readText()

        val result = mapper.readValue<Map<String, List<String>>>(json)

        return result["result"]?.get(0) ?: "error"
    }

    override fun registrationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры регистрации")

        val query = prepareQuery(Procedures.registrationUser, login, password)

        val json = URL(query).readText()

        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getBoolean("result")
    }

    override fun createGameFieldQuery(gameId: Int): List<Cell> {
        log.info("Вызов процедуры создания игрового поля")

        val query = prepareQuery(Procedures.createGameField, gameId)

        val json = URL(query).readText()

        val cells = mapper.readValue<Map<String, List<Int>>>(json)

        return cells.getCells()
    }

    override fun getGameFieldQuery(gameId: Int): List<Cell> {
        log.info("Вызов процедуры получения созданного игрового поля")

        val query = prepareQuery(Procedures.getGameField, gameId)

        val json = URL(query).readText()

        val cells = mapper.readValue<Map<String, List<Int>>>(json)

        return cells.getCells()
    }

    override fun moveQuery(token: String, position: Int, gameId: Int): Any {
        log.info("Вызов процедуры хода игрока")
        val query = prepareQuery(Procedures.move, token, position, gameId)

        val json = URL(query).readText()

        val result = mapper.readValue<Map<String, List<String>>>(json)

        return if (result.size == 1){
            result["result"]?.get(0) ?: "error"
        } else {
            result.getPlayerResources()
        }
    }

    override fun takeMeMoveQuery(token: String, gameId: Int) {
        val query = prepareQuery(Procedures.playerMoveTrue, token, gameId)
        URL(query).readText()
    }

    override fun setMoveNextPlayerQuery(token: String, gameId: Int) {
        val query = prepareQuery(Procedures.setMoveNextPlayer, token, gameId)
        URL(query).readText()
    }

    override fun playerFinished(token: String, position: String, gameId: Int): String {
        log.info("Вызов процедуры игрок на финише")

        val query = prepareQuery(Procedures.playerFinished, token, position, gameId)
        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<String>>>(json)

        return result["result"]?.get(0) ?: "you finished"

    }

    override fun everyoneFinish(gameId: Int): Boolean {
        log.info("Вызов процедуры проверки все ли финишировали")

        val query = prepareQuery(Procedures.everyoneFinish, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getBoolean("result")
    }

    override fun createGameQuery(gameName: String): Int {
        log.info("Вызов процедуры создания игры")

        val query = prepareQuery(Procedures.createGame, gameName)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getInt("result")
    }

    override fun createPlayerQuery(token: String, gameID: Int, dogId: String) {
        log.info("Вызов процедуры создания игрока")

        val query = prepareQuery(Procedures.createPlayer, token, gameID, mapDog(dogId))
        URL(query).readText()
    }

    private fun mapDog(dogId: String): Int {
        return when(dogId){
            "001" -> return 1
            "002" -> return 2
            "005" -> return 3
            else -> 1
        }
    }

    override fun availableGamesQuery(): List<Games> {
        log.info("Вызов процедуры всех доступных игр")

        val query = prepareQuery(Procedures.availableGames)

        val json = URL(query).readText()

        val result = mapper.readValue<Map<String, List<Any>>>(json)

        return result.getGame()
    }


    override fun gameStart(gameId: Int) {
        log.info("Вызов процедуры начала игры")

        val query = prepareQuery(Procedures.gameStart, gameId)
        URL(query).readText()
    }

    override fun gameFinish(gameId: Int) {
        log.info("Вызов процедуры окончания игры")

        val query = prepareQuery(Procedures.gameFinish, gameId)
        URL(query).readText()
    }

    override fun gameStarted(gameId: Int): Boolean {
        log.info("Вызов процедуры проверки начала игры")

        val query = prepareQuery(Procedures.gameStarted, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getBoolean("result")
    }

    override fun getEnemyLoginQuery(token: String, gameId: Int): String {
        log.info("Вызов процедуры получения логина соперника")

        val query = prepareQuery(Procedures.getEnemyLogin, token, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<String>>>(json)

        return result["result"]?.get(0) ?: "enemy"
    }

    override fun setFirstMoveQuery(gameId: Int) {
        log.info("Вызов процедуры выбора игрока для первого хода")

        val query = prepareQuery(Procedures.setFirstMove, gameId)
        URL(query).readText()
    }

    override fun gameStatusQuery(gameId: Int): Int {
        log.info("Вызов процедуры проверки статуса")

        val query = prepareQuery(Procedures.gameStatus, gameId)
        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getInt("result")
    }

    override fun canMove(token: String, gameId: Int): Boolean {
        log.info("Вызов процедуры выбора игрока для первого хода")

        val query = prepareQuery(Procedures.canPlayerMove, token, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getBoolean("result")
    }

    override fun whereEnemyQuery(token: String, gameId: Int): Int {
        log.info("Вызов процедуры поиска позиции соперника")

        val query = prepareQuery(Procedures.enemiesPlace, token, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getInt("result")
    }

    override fun isEnemyFinishQuery(token: String, gameId: Int): Boolean {
        QueryLocal.log.info("Вызов процедуры проверки что соперник закончил игру ")

        val query = prepareQuery(Procedures.isEnemyFinish, token, gameId)

        val json = URL(query).readText()
        val result = mapper.readValue<Map<String, List<Int>>>(json)

        return result.getBoolean("result")
    }

    private fun prepareQuery(procedure: String, vararg arguments: Any): String {
        val cleanProcedure = procedure.removePrefix("call ")
            .removeSuffix("()")
            .removeSuffix("(?)")
            .removeSuffix("(?, ?)")
            .removeSuffix("(?, ?, ?)")

        var result = url + cleanProcedure

        var i = 1
        for (argument in arguments) {
            when (argument) {
                is String -> result += "&p${i}=${argument}"
                is Int -> result += "&p${i}=${argument}"
            }
            i++
        }

        return result
    }

    private fun Map<String, List<Int>>.getBoolean(key: String): Boolean {
        return (this[key]?.get(0) ?: 0) != 0
    }

    private fun Map<String, List<Int>>.getInt(key: String): Int {
        return if(this[key]!![0] == null)  0 else this[key]!![0]
    }
}

private fun Map<String, List<String>>.getPlayerResources(): List<PlayerResources> {
    val result = mutableListOf<PlayerResources>()

    for(i in this["Player_ID"]!!.indices) {
        val cell = PlayerResources(
            resourcesId = this["Resource_ID"]!![i].toLong(),
            countOfResources = this["Count_of_resources"]!![i].toInt()
        )
        result.add(i, cell)
    }

    return result
}

private fun Map<String, List<Int>>.getCells(): MutableList<Cell> {
    val result = mutableListOf<Cell>()

    for(i in this["Cell_ID"]!!.indices) {
        val cell = Cell(
            cellId = this["Cell_ID"]!![i].toLong(),
            resourceId = this["Resource_ID"]!![i].toLong(),
            countOfResources = this["Count_of_resources"]!![i]
        )
        result.add(i, cell)
    }

    return result
}

private fun Map<String, List<Any>>.getGame(): MutableList<Games> {
    val result = mutableListOf<Games>()

    for(i in this["Game_ID"]!!.indices) {
        val cell = Games(
            gameId = this["Game_ID"]!![i] as Int,
            name = this["name"]!![i] as String
        )
        result.add(i, cell)
    }

    return result
}
