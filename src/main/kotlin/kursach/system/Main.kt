package kursach.system

import kursach.system.dto.User
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam


@SpringBootApplication
@Controller
class Main
{
    @RequestMapping(value = ["/"])
    fun welcome(): String {
        return "login"
    }

    @PostMapping(value = ["/login"])
    fun login(@RequestParam(value = "login") login: String, @RequestParam(value = "pass") pass: String?): ResponseEntity<String> {
        if(true){ //TODO: обращение к БД registration_user
            return ResponseEntity(login, HttpStatus.OK)
        } else {
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping(value = ["/registration"])
    fun registration(@RequestBody login: String, @RequestBody pass: String): ResponseEntity<String> {
        if(true){ //TODO: обращение к БД RegisterUser
            return ResponseEntity("TEST", HttpStatus.OK)
        } else {
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping(value = ["/field"])
    fun field(@RequestBody status: String): ResponseEntity<HttpStatus> {
        return ResponseEntity(HttpStatus.OK)
    }

}

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}