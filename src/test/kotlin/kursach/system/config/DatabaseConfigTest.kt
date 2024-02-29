package kursach.system.config

import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DatabaseConfigTest {


    @Test
    fun testConfig(){

    }

    companion object {
        @JvmStatic
        @BeforeAll
        fun test(): Unit {
            val databaseConfig: DatabaseConfig
        }
    }
}