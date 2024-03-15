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
        log.info("Вызов процедуры создания игрового поля")

        val query = prepareQuery(Procedures.createGameField, gameId)

        val response = URL(query).readText()

        return listOf(response as Cell) // TODO:
    }

    override fun getGameFieldQuery(gameId: Int): List<Cell> {
     log.info("Вызов процедуры получения созданного игрового поля")

        val query = prepareQuery(Procedures.getGameField, gameId)

        val response = URL(query).readText()

        return listOf(response as Cell) // TODO:
    }

    override fun moveQuery(login: String, position: Int, gameId: Int): List<PlayerResources> {
     log.info("Вызов процедуры хода игрока")
        val query = prepareQuery(Procedures.move, login, position, gameId)

        val response = URL(query).readText()

        val queryFinishMove = prepareQuery(Procedures.playerMoveFalse, login, gameId)

        URL(queryFinishMove)

        val querySetNextPlayerMove = prepareQuery(Procedures.setMoveNextPlayer, login, gameId)

        URL(querySetNextPlayerMove)

        return listOf(response as PlayerResources) // TODO:
    }

    override fun takeMeMoveQuery(login: String, gameId: Int) {

         val query = prepareQuery(Procedures.playerMoveTrue, login, gameId)

         URL(query)

       }

    override fun setMoveNextPlayerQuery(login: String, gameId: Int) {

            val query = prepareQuery(Procedures.setMoveNextPlayer, login, gameId)

            URL(query)
           }

    override fun playerFinished(login: String, gameId: Int) {
             log.info("Вызов процедуры игрок на финише")

             val query = prepareQuery(Procedures.playerFinished, login, gameId)

             URL(query)

         }

    override fun everyoneFinish(gameId: Int): Boolean {
         log.info("Вызов процедуры проверки все ли финишировали")

            val query = prepareQuery(Procedures.everyoneFinish, gameId)

            val response = URL(query).readText()

            return response.toBoolean();//TODO
        }

    override fun createGameQuery(gameName: String): Int {
            log.info("Вызов процедуры создания игры")

            val query = prepareQuery(Procedures.createGame, gameName)

            val response = URL(query).readText()

           return response.toInt();//TODO
       }

    override fun createPlayerQuery(login: String, gameID: Int, dogId: String) {
           log.info("Вызов процедуры игрок на финише")

           val query =  prepareQuery(Procedures.createPlayer, login, gameID, mapDog(dogId))

           URL(query)
    }

    override fun availableGamesQuery(): List<Games> {
            log.info("Вызов процедуры всех доступных игр")

            val query = prepareQuery(Procedures.availableGames)

            val response = URL(query).readText()

            return listOf(response as Games) // TODO:
     }


    override fun gameStart(gameId: Int) {
            log.info("Вызов процедуры начала игры")

            val query =  prepareQuery(Procedures.gameStart, gameId)

            URL(query)
     }

    override fun gameFinish(gameId: Int) {
            log.info("Вызов процедуры окончания игры")

            val query =  prepareQuery(Procedures.gameFinish, gameId)

            URL(query)
    }

    override fun gameStarted(gameId: Int): Boolean {
            log.info("Вызов процедуры проверки начала игры")

            val query = prepareQuery(Procedures.gameStarted, gameId)

            return response.toBoolean();//TODO
     }

    override fun getEnemyLoginQuery(login: String, gameId: Int): String {
            log.info("Вызов процедуры получения логина соперника")

            val query = prepareQuery(Procedures.getEnemyLogin, login, gameId)

            return response.toString();//TODO
    }

    override fun setFirstMoveQuery(gameId: Int) {
               log.info("Вызов процедуры выбора игрока для первого хода")

               val query = prepareQuery(Procedures.setFirstMove, gameId)

               URL(query)
    }

    override fun gameStatusQuery(gameId: Int): Int {
            log.info("Вызов процедуры проверки статуса")

            val query = prepareQuery(Procedures.gameStatus, gameId)

            return response.toInt();//TODO

    override fun canMove(login: String, gameId: Int): Boolean {
            log.info("Вызов процедуры выбора игрока для первого хода")

             val query = prepareQuery(Procedures.canPlayerMove, login, gameId)

             return response.toBoolean(); // TODO:
    }

    override fun whereEnemyQuery(login: String, gameId: Int): Int {
              log.info("Вызов процедуры поиска позиции соперника")

              val query = prepareQuery(Procedures.enemiesPlace, login, gameId)

              return response.toInt();//TODO
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