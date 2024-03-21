package kursach.system.repository

import kursach.system.dto.Cell
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import kursach.system.vocabulary.Procedures
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.TransactionManager
import org.jetbrains.exposed.sql.transactions.transaction
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Repository
class QueryLocal: Query {

    companion object {
        val log = LoggerFactory.getLogger(QueryLocal::class.java)
    }

    init {
        Database.connect(
            "jdbc:mysql://localhost:3306/kursach",
            driver = "com.mysql.cj.jdbc.Driver",
            user = "root",
            password = "password"
        )
    }

    override fun authorisationQuery(login: String, password: String): String {
        log.info("Вызов процедуры авторизации")

        val query = prepareQuery(Procedures.authorisationUser, login, password)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getString("result")
            }
        }
        return result[0]
    }

    override fun registrationQuery(login: String, password: String): Boolean {
        log.info("Вызов процедуры регистрации")

        val query = prepareQuery(Procedures.registrationUser, login, password)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    override fun createGameFieldQuery(gameId: Int): List<Cell> {
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

    override fun getGameFieldQuery(gameId: Int): List<Cell> {
        log.info("Вызов процедуры получения созданного игрового поля")

        val query = prepareQuery(Procedures.getGameField, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                Cell(cellId = rs.getLong("Cell_ID"),
                    resourceId = rs.getLong("Resource_ID"),
                    countOfResources = rs.getInt("Count_of_resources"))
            }
        }
        return result
    }

    override fun moveQuery(token: String, position: Int, gameId: Int): Any {
        log.info("Вызов процедуры хода игрока")

        val query = prepareQuery(Procedures.move, token, position, gameId)
        val result = transaction {
            query.execAndMap { rs ->
                if (rs.metaData.columnCount != 1) {
                    PlayerResources(
                        resourcesId = rs.getLong("Resource_ID"),
                        countOfResources = rs.getInt("Count_of_resources")
                    )
                } else {
                    rs.getString("result")
                }
            }
        }

        return if (result.size == 1){
            result[0] as String
        } else {
            result as List<PlayerResources>
        }
    }

    override fun takeMeMoveQuery(token: String, gameId: Int){
        val query = prepareQuery(Procedures.playerMoveTrue, token, gameId)
        transaction {
            query.execAndMap()
        }
    }

    override fun setMoveNextPlayerQuery(token: String, gameId: Int){
        val query = prepareQuery(Procedures.setMoveNextPlayer, token, gameId)
        transaction {
            query.execAndMap()
        }
    }

    override fun playerFinished(token: String, position: String, gameId: Int): String {
        log.info("Вызов процедуры игрок на финише")

        val query = prepareQuery(Procedures.playerFinished, token, position, gameId)
        val result = transaction {
            query.execAndMap { rs ->
                    rs.getString("result")
            }
        }

        return result[0]
    }

    override fun everyoneFinish(gameId: Int): Boolean {
        log.info("Вызов процедуры проверки все ли финишировали")

        val query = prepareQuery(Procedures.everyoneFinish, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    override fun createGameQuery(gameName: String): Int{
        log.info("Вызов процедуры создания игры")

        val query = prepareQuery(Procedures.createGame, gameName)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getInt("result")
            }
        }

        return result[0]
    }

    override fun createPlayerQuery(token: String, gameID: Int, dogId: String){
        log.info("Вызов процедуры создания игрока")

        val query = prepareQuery(Procedures.createPlayer, token, gameID, mapDog(dogId))
        transaction {
            query.execAndMap()
        }
    }

    private fun mapDog(dogId: String): Int {
        return when(dogId){
            "001" -> return 1
            "002" -> return 2
            "005" -> return 3
            else -> 1
        }
    }

    override fun availableGamesQuery(): List<Games>{
        log.info("Вызов процедуры всех доступных игр")

        val query = prepareQuery(Procedures.availableGames)
        val result = transaction {
            query.execAndMap {rs ->
                Games(
                    rs.getInt("Game_ID"),
                    rs.getString("name"))
            }
        }

        return result
    }

    override fun gameStart(gameId: Int){
        log.info("Вызов процедуры начала игры")

        val query = prepareQuery(Procedures.gameStart, gameId)
        transaction {
            query.execAndMap()
        }
    }

    override fun gameFinish(gameId: Int){
        log.info("Вызов процедуры окончания игры")

        val query = prepareQuery(Procedures.gameFinish, gameId)
        transaction {
            query.execAndMap()
        }
    }

    override fun gameStarted(gameId: Int): Boolean{
        log.info("Вызов процедуры проверки начала игры")

        val query = prepareQuery(Procedures.gameStarted, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    override fun getEnemyLoginQuery(token: String, gameId: Int): String{
        log.info("Вызов процедуры получения логина соперника")

        val query = prepareQuery(Procedures.getEnemyLogin, token, gameId)
        val result = transaction {
            query.execAndMap {rs ->
                rs.getString("result")
            }
        }

        return result[0]
    }

    override fun setFirstMoveQuery(gameId: Int) {
        log.info("Вызов процедуры выбора игрока для первого хода")

        val query = prepareQuery(Procedures.setFirstMove, gameId)
        transaction {
            query.execAndMap()
        }
    }

    override fun gameStatusQuery(gameId: Int): Int {
        log.info("Вызов процедуры проверки статуса")

        val query = prepareQuery(Procedures.gameStatus, gameId)
        val result = transaction {
            query.execAndMap(){
                it.getInt("result")
            }
        }
        return result[0]
    }

    override fun canMove(token: String, gameId: Int): Boolean {
        log.info("Вызов процедуры выбора игрока для первого хода")

        val query = prepareQuery(Procedures.canPlayerMove, token, gameId)
        val result = transaction {
            query.execAndMap(){rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    override fun isEnemyFinishQuery(token: String, gameId: Int): Boolean {
        log.info("Вызов процедуры проверки что соперник закончил игру ")

        val query = prepareQuery(Procedures.isEnemyFinish, token, gameId)
        val result = transaction {
            query.execAndMap(){rs ->
                rs.getBoolean("result")
            }
        }

        return result[0]
    }

    override fun whereEnemyQuery(token: String, gameId: Int): Int {
        log.info("Вызов процедуры поиска позиции соперника")

        val query = prepareQuery(Procedures.enemiesPlace, token, gameId)
        val result = transaction {
            query.execAndMap(){rs ->
                rs.getInt("result")
            }
        }

        return result[0]
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

    private fun String.execAndMap() {
        TransactionManager.current().exec(this)
    }
}