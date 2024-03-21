package kursach.system.repository

import kursach.system.dto.Cell
import kursach.system.dto.Games
import org.springframework.stereotype.Repository

@Repository
interface Query {
    fun authorisationQuery(login: String, password: String): String

    fun registrationQuery(login: String, password: String): Boolean

    fun createGameFieldQuery(gameId: Int): List<Cell>

    fun getGameFieldQuery(gameId: Int): List<Cell>

    fun moveQuery(token: String, position: Int,  gameId: Int): Any

    fun takeMeMoveQuery(token: String, gameId: Int)

    fun setMoveNextPlayerQuery(token: String, gameId: Int)

    fun playerFinished(token: String, position: String, gameId: Int): String

    fun everyoneFinish(gameId: Int): Boolean

    fun createGameQuery(gameName: String = "defaultName"): Int

    fun createPlayerQuery(token: String, gameID: Int, dogId: String)

    fun availableGamesQuery(): List<Games>

    fun gameStart(gameId: Int)

    fun gameFinish(gameId: Int)

    fun gameStarted(gameId: Int): Boolean

    fun getEnemyLoginQuery(token: String, gameId: Int): String

    fun setFirstMoveQuery(gameId: Int)

    fun gameStatusQuery(gameId: Int): Int

    fun canMove(token: String, gameId: Int): Boolean

    fun whereEnemyQuery(token: String, gameId: Int): Int
    fun isEnemyFinishQuery(token: String, gameId: Int): Boolean
}