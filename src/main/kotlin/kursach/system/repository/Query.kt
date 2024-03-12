package kursach.system.repository

import kursach.system.dto.Cell
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import kursach.system.vokabulary.Procedures
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.TransactionManager
import org.jetbrains.exposed.sql.transactions.transaction
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Repository
class Query() {

    companion object {
        val log = LoggerFactory.getLogger(Query::class.java)
    }

    init {
        Database.connect(
            "jdbc:mysql://localhost:3306",
            driver = "com.mysql.cj.jdbc.Driver",
            user = "admin",
            password = ""
        )
    }

    fun authorisationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры авторизации")

        val query = prepareQuery(Procedures.authorisationUser, login, password)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getBoolean("result")
            }
        }
        return result[0]
    }

    fun registrationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры регистрации")

        val query = prepareQuery(Procedures.registrationUser, login, password)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    fun createGameFieldQuery(gameId: Int): List<Cell> {
        log.info("Вызов процедуры создания игрового поля")

        val query = prepareQuery(Procedures.createGameField, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                Cell(cellId = rs.getLong("Cell_ID"),
                    resourceId = rs.getLong("Resource_ID"),
                    countOfResources = rs.getInt("Count_of_resources"))
            }
        }
        log.info("Игровое поле создано")
        return result
    }

    fun moveQuery(position: Int, login: String, gameId: Int): List<PlayerResources> {
        log.info("Вызов процедуры хода игрока")

        val query = prepareQuery(Procedures.move, login, position, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                PlayerResources(
                    resourcesId = rs.getLong("Resource_ID"),
                    countOfResources = rs.getInt("Count_of_resources"))
            }
        }

        val queryFinishMove = prepareQuery(Procedures.playerMoveFalse, login, gameId)
        transaction {
            queryFinishMove.execAndMap {
            }
        }

        val querySetNextPlayerMove = prepareQuery(Procedures.playerMoveTrue, login, gameId)
        transaction {
            querySetNextPlayerMove.execAndMap {
            }
        }
        return result
    }

    fun playerFinished(login: String, gameId: Int) {
        log.info("Вызов процедуры игрок на финише")

        val query = prepareQuery(Procedures.playerFinished, login, gameId)
        transaction {
            query.execAndMap {
            }
        }
    }

    fun everyoneFinish(gameId: Int): Boolean {
        log.info("Вызов процедуры проверки все ли финишировали")

        val query = prepareQuery(Procedures.everyoneFinish, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    fun createGameQuery(gameName: String = ""): Int{
        log.info("Вызов процедуры создания игры")

        val query = prepareQuery(Procedures.createGame, gameName)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getInt("result")
            }
        }

        return result[0]
    }

    fun createPlayerQuery(login: String, gameID: Int){
        log.info("Вызов процедуры игрока")

        val query = prepareQuery(Procedures.createPlayer, login, gameID)
        transaction {
            query.execAndMap {
            }
        }
    }

    fun availableGamesQuery(): List<Games>{
        log.info("Вызов процедуры всех доступных игр")

        val query = prepareQuery(Procedures.availableGames)
        val result = transaction {
            query.execAndMap {rs ->
                Games(
                    rs.getInt("Game_ID"),
                    rs.getString("name"))
            }
        }

        return result;
    }

    private fun prepareQuery(procedure: String, vararg arguments: Any): String {
        var result = procedure

        for (argument in arguments) {
            when (argument) {
                is String -> result = result.replaceFirst("?", "'$argument'")
                is Int -> result = result.replaceFirst("?", "$argument")
            }
        }

        return result
    }

    private fun <T : Any> String.execAndMap(transform: (ResultSet) -> T): List<T> {
        val result = arrayListOf<T>()
        TransactionManager.current().exec(this) { rs ->
            while (rs.next()) {
                result += transform(rs)
            }
        }
        return result
    }
}