package kursach.system

import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam


@SpringBootApplication
@Controller
class Main {

    companion object{
        val log = LoggerFactory.getLogger(Main::class.java)
    }

    @RequestMapping(value = ["/"])
    fun welcome(): String {
        log.info("Подключение к сервису")
        return "login"
    }

    @PostMapping(value = ["/login"])
    fun login(@RequestParam(value = "login") login: String, @RequestParam(value = "pass") pass: String?): ResponseEntity<String> {
        log.info("Авторизация - Логин = ${login}, Пароль = $pass")
        if(true){ //TODO: обращение к БД registration_user
            log.info("Авторизация - вернул $login")
            return ResponseEntity(login, HttpStatus.OK)
        } else {
            log.error("Авторизация - ошибка, некорректные данные")
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping(value = ["/registration"])
    fun registration(@RequestParam(value = "login") login: String, @RequestParam(value = "pass") pass: String?): ResponseEntity<String> {
        log.info("Регистрация - Логин = ${login}, Пароль = $pass")
        if(true){ //TODO: обращение к БД RegisterUser
            log.info("Регистрация - вернул $login")
            return ResponseEntity(login, HttpStatus.OK)
        } else {
            log.error("Регистрация - ошибка, некорректные данные")
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @GetMapping(value = ["/game"])
    fun game(): ResponseEntity<HttpStatus> {
        // TODO: Запрос к БД, создание лобби, создание поля, ресурсов на поле и подключение игроков
        // TODO: возвращаем ресурсы
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping(value = ["/move"])
    fun move(@RequestParam(value = "position") position: String): ResponseEntity<HttpStatus> {
        log.info("Ход - position = $position")
        if(true){ //TODO: обращение к БД, присваиваем ресурсы игроку
            log.info("Ход - успешно")
//            return ResponseEntity(login, HttpStatus.OK)
            return ResponseEntity(HttpStatus.OK)
        } else {
            log.error("Ход - неудачно")
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }


}

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}