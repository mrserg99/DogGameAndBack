package kursach.system

import kursach.system.dto.Game
import kursach.system.dto.Games
import kursach.system.dto.PlayerResources
import kursach.system.repository.Query
import kursach.system.repository.QueryRemove
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam


@Controller
class App {

    val query: Query = QueryRemove()

    companion object {
        val log = LoggerFactory.getLogger(App::class.java)
    }

    @RequestMapping(value = ["/welcome"])
    fun welcome(): String {
        log.info("Подключение к сервису")
        return "login"
    }

    @PostMapping(value = ["/login"])
    fun login(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "password") pass: String
    ): ResponseEntity<String> {
        log.info("login - Логин = ${login}, Пароль = $pass")
        if (query.authorisationQuery(login, pass)) {
            log.info("login - вернул $login")
            return ResponseEntity(login, HttpStatus.OK)
        } else {
            log.error("login - ошибка, некорректные данные")
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping(value = ["/registration"])
    fun registration(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "password") pass: String
    ): ResponseEntity<String> {
        log.info("registration - Логин = ${login}, Пароль = $pass")
        if (query.registrationQuery(login, pass)) {
            log.info("registration - вернул $login")
            return ResponseEntity(login, HttpStatus.OK)
        } else {
            log.error("registration - ошибка, некорректные данные")
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping(value = ["/single/game"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun gameSingle(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "dog") dog: String
    ): ResponseEntity<Game> {
        log.info("single/game- Создаём одиночную игру")
        val gameId = query.createGameQuery()
        query.createPlayerQuery(login, gameId, dog)
        query.takeMeMoveQuery(login, gameId)
        return ResponseEntity(Game(gameId, query.createGameFieldQuery(gameId)), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/createGame"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun createGameCoop(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "name") name: String,
        @RequestParam(value = "dog") dog: String
    ): ResponseEntity<Int> {
        log.info("coop/createGame - Создаём кооперативную игру")
        val gameId = query.createGameQuery(name)
        query.createPlayerQuery(login, gameId, dog)
        return ResponseEntity(gameId, HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/gameStarted"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun gameStartedCoop(@RequestParam(value = "gameId") gameId: String): ResponseEntity<Boolean> {
        log.info("coop/gameStarted - Проверяем запустилась ли игра")
        return ResponseEntity(query.gameStarted(gameId.toInt()), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/connectToGame"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun gameCoop(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String,
        @RequestParam(value = "dog") dog: String
    ): ResponseEntity<Game> {
        log.info("coop/connectToGame - Пользователь подключается к игре")
        query.createPlayerQuery(login, gameId.toInt(), dog)
        query.gameStart(gameId.toInt())
        query.setFirstMoveQuery(gameId.toInt())
        return ResponseEntity(Game(gameId.toInt(), query.createGameFieldQuery(gameId.toInt())), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/getGameField"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun createGameFieldCoop(@RequestParam(value = "gameId") gameId: String): ResponseEntity<Game> {
        log.info("coop/getGameField - Возвращаем поле для игры")
        return ResponseEntity(Game(gameId.toInt(), query.getGameFieldQuery(gameId.toInt())), HttpStatus.OK)
    }

    @PostMapping(value = ["/move"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun move(
        @RequestParam(value = "position") position: String,
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<List<PlayerResources>> {
        log.info("move - position = $position")
        return ResponseEntity(query.moveQuery(login, position.toInt(), gameId.toInt()), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/canMove"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun canMove(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<Boolean> {
        log.info("coop/canMove - проверяем можно ли ходить")
        return ResponseEntity(query.canMove(login, gameId.toInt()), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/gameStatus"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun gameStatus(
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<Int> {
        log.info("gameStatus - проверяем статут игры")
        return ResponseEntity(query.gameStatusQuery(gameId.toInt()), HttpStatus.OK)
    }

    @PostMapping(value = ["coop/whereEnemy"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun whereEnemy(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<Int> {
        log.info("whereEnemy - проверяем где противник")
        return ResponseEntity(query.whereEnemyQuery(login, gameId.toInt()), HttpStatus.OK)
    }

    @PostMapping(value = ["/finish"])
    fun finish(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<Boolean> {
        log.info("finish - login = $login")
        query.playerFinished(login, gameId.toInt())
        query.setMoveNextPlayerQuery(login, gameId.toInt())

        return checkFinish(gameId)
    }

    @PostMapping(value = ["/everyoneFinish"])
    fun everyoneFinish(@RequestParam(value = "gameId") gameId: String): ResponseEntity<Boolean> {
        log.info("everyoneFinish - проверяем все ли финишировали")
        return checkFinish(gameId)
    }

    private fun checkFinish(gameId: String): ResponseEntity<Boolean> {
        if (query.everyoneFinish(gameId.toInt())) {
            query.gameFinish(gameId.toInt())
            log.info("finish - результат")
            return ResponseEntity(true, HttpStatus.OK)
        } else {
            log.info("finish - успешно")
            return ResponseEntity(false, HttpStatus.OK)
        }
    }

    @PostMapping(value = ["/availableGames"])
    fun availableGames(): ResponseEntity<List<Games>> {
        log.info("availableGames - Все доступные игры")

        return ResponseEntity(query.availableGamesQuery(), HttpStatus.OK)
    }

    @PostMapping(value = ["/coop/enemyLogin"])
    fun getEnemyLogin(
        @RequestParam(value = "login") login: String,
        @RequestParam(value = "gameId") gameId: String
    ): ResponseEntity<String> {
        log.info("coop/enemyLogin - Получение логина соперника")

        return ResponseEntity(query.getEnemyLoginQuery(login, gameId.toInt()), HttpStatus.OK)
    }
}