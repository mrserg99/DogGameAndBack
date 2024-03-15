package kursach.system.repository

import kursach.system.dto.Cell
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import kursach.system.vocabulary.Procedures
import org.slf4j.LoggerFactory
import java.net.URL

class QueryRemove: Query {

    companion object {
        val log = LoggerFactory.getLogger(QueryRemove::class.java)
        const val url = "https://mysql.lavro.ru/call.php?db=263879&pname="
    }

    override fun authorisationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры авторизации")

        val query = prepareQuery(Procedures.authorisationUser, login, password)

        val response = URL(query).readText()

        return response.toBoolean()
    }

    override fun registrationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры регистрации")

        val query = prepareQuery(Procedures.registrationUser, login, password)

        val response = URL(query).readText()

        return response.toBoolean()
    }

    override fun createGameFieldQuery(gameId: Int): List<Cell> {
        QueryLocal.log.info("Вызов процедуры создания игрового поля")

        val query = prepareQuery(Procedures.createGameField, gameId)

        val response = URL(query).readText()

        return listOf(response as Cell) // TODO:
    }

    override fun getGameFieldQuery(gameId: Int): List<Cell> {
        QueryLocal.log.info("Вызов процедуры получения созданного игрового поля")


        val query = prepareQuery(Procedures.getGameField, gameId)

        val response = URL(query).readText()

        return listOf(response as Cell) // TODO:
    }

    override fun moveQuery(login: String, position: Int, gameId: Int): List<PlayerResources> {
        TODO("Not yet implemented")
    }

    override fun takeMeMoveQuery(login: String, gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun setMoveNextPlayerQuery(login: String, gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun playerFinished(login: String, gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun everyoneFinish(gameId: Int): Boolean {
        TODO("Not yet implemented")
    }

    override fun createGameQuery(gameName: String): Int {
        TODO("Not yet implemented")
    }

    override fun createPlayerQuery(login: String, gameID: Int, dogId: String) {
        TODO("Not yet implemented")
    }

    override fun availableGamesQuery(): List<Games> {
        TODO("Not yet implemented")
    }

    override fun gameStart(gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun gameFinish(gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun gameStarted(gameId: Int): Boolean {
        TODO("Not yet implemented")
    }

    override fun getEnemyLoginQuery(login: String, gameId: Int): String {
        TODO("Not yet implemented")
    }

    override fun setFirstMoveQuery(gameId: Int) {
        TODO("Not yet implemented")
    }

    override fun gameStatusQuery(gameId: Int): Int {
        TODO("Not yet implemented")
    }

    override fun canMove(login: String, gameId: Int): Boolean {
        TODO("Not yet implemented")
    }

    override fun whereEnemyQuery(login: String, gameId: Int): Int {
        TODO("Not yet implemented")
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
}