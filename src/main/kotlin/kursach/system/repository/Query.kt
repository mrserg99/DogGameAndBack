package kursach.system.repository

import kursach.system.dto.Cell
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import org.springframework.stereotype.Repository

@Repository
interface Query {
    fun authorisationQuery(login: String, password: String): Boolean

    fun registrationQuery(login: String, password: String): Boolean

    fun createGameFieldQuery(gameId: Int): List<Cell>

    fun getGameFieldQuery(gameId: Int): List<Cell>

    fun moveQuery(login: String, position: Int,  gameId: Int): List<PlayerResources>

    fun takeMeMoveQuery(login: String, gameId: Int)

    fun setMoveNextPlayerQuery(login: String, gameId: Int)

    fun playerFinished(login: String, gameId: Int)

    fun everyoneFinish(gameId: Int): Boolean

    fun createGameQuery(gameName: String = "singleGame"): Int

    fun createPlayerQuery(login: String, gameID: Int, dogId: String)

    fun availableGamesQuery(): List<Games>

    fun gameStart(gameId: Int)

    fun gameFinish(gameId: Int)

    fun gameStarted(gameId: Int): Boolean

    fun getEnemyLoginQuery(login: String, gameId: Int): String

    fun setFirstMoveQuery(gameId: Int)

    fun gameStatusQuery(gameId: Int): Int

    fun canMove(login: String, gameId: Int): Boolean

    fun whereEnemyQuery(login: String, gameId: Int): Int
}