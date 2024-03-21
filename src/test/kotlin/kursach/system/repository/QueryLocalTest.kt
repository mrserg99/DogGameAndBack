package kursach.system.repository

import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import java.util.UUID

class QueryLocalTest {

    companion object {
        val query: Query = if (false) QueryLocal() else QueryRemove()
    }

    @Test
    fun authorisationQuerySuccessfulTest() {
        val login = "user1"
        val password = "password1"

        val actual = query.authorisationQuery(login, password)

        assertNotEquals("error", actual)
    }

    @Test
    fun authorisationQueryErrorTest() {
        val login = "user"
        val password = "password"

        val actual = query.authorisationQuery(login, password)

        assertEquals("error", actual)
    }

    @Test
    fun registrationQuerySuccessfulTest() {
        val login = "user${UUID.randomUUID()}"
        val password = "password1746"

        val actual = query.registrationQuery(login, password)

        assertTrue(actual)
    }

    @Test
    fun registrationQueryErrorTest() {
        val login = "user1"
        val password = "password1"

        val actual = query.registrationQuery(login, password)

        assertFalse(actual)
    }

    @Test
    fun createGameFieldQueryTest() {

        val gameId = query.createGameQuery("testGame")

        val actual = query.createGameFieldQuery(gameId)

        var i = 0
        assertNotNull(actual)
        assertEquals(0, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(11, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(12, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(13, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(14, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(15, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(16, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(17, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(18, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(19, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(20, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(21, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(22, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(23, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(30, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
        i++
        assertEquals(31, actual[i].cellId)
        assertNotNull(actual[i].resourceId)
        assertNotNull(actual[i].countOfResources)
    }


    @Test
    fun moveQueryNotYourTurnTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)

        val move0to12 = query.moveQuery(token, 12, gameId)

        assertEquals("not your turn", move0to12)
    }

    @Test
    fun moveQueryIncorrectPositionTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        query.moveQuery(token, 12, gameId)
        val move12to19 = query.moveQuery(token, 19, gameId)
        assertEquals("incorrect position", move12to19)
    }

    @Test
    fun moveQuerySingleGameStepByStepTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        val move0to11 = query.moveQuery(token, 11, gameId)
        assertNotNull(move0to11)
        assertTrue(move0to11 is List<*>)

        val move11to12 = query.moveQuery(token, 12, gameId)
        assertNotNull(move11to12)
        assertTrue(move11to12 is List<*>)

        val move12to13 = query.moveQuery(token, 13, gameId)
        assertNotNull(move12to13)
        assertTrue(move12to13 is List<*>)

        val move13to14 = query.moveQuery(token, 14, gameId)
        assertNotNull(move13to14)
        assertTrue(move13to14 is List<*>)

        val move14to15 = query.moveQuery(token, 15, gameId)
        assertNotNull(move14to15)
        assertTrue(move14to15 is List<*>)

        val move15to16 = query.moveQuery(token, 16, gameId)
        assertNotNull(move15to16)
        assertTrue(move15to16 is List<*>)

        val move16to17 = query.moveQuery(token, 17, gameId)
        assertNotNull(move16to17)
        assertTrue(move16to17 is List<*>)

        val move17to18 = query.moveQuery(token, 18, gameId)
        assertNotNull(move17to18)
        assertTrue(move17to18 is List<*>)

        val move18to19 = query.moveQuery(token, 19, gameId)
        assertNotNull(move18to19)
        assertTrue(move18to19 is List<*>)

        val move19to20 = query.moveQuery(token, 20, gameId)
        assertNotNull(move19to20)
        assertTrue(move19to20 is List<*>)
    }

    @Test
    fun moveQuerySingleGameStepBy2Test() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        val move0to12 = query.moveQuery(token, 12, gameId)
        assertNotNull(move0to12)
        assertTrue(move0to12 is List<*>)

        val move12to14 = query.moveQuery(token, 14, gameId)
        assertNotNull(move12to14)
        assertTrue(move12to14 is List<*>)

        val move14to16 = query.moveQuery(token, 16, gameId)
        assertNotNull(move14to16)
        assertTrue(move14to16 is List<*>)

        val move16to18 = query.moveQuery(token, 18, gameId)
        assertNotNull(move16to18)
        assertTrue(move16to18 is List<*>)

        val move18to20 = query.moveQuery(token, 20, gameId)
        assertNotNull(move18to20)
        assertTrue(move18to20 is List<*>)
    }


    @Test
    fun moveQuerySingleGameGoBackTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        val move0to12 = query.moveQuery(token, 12, gameId)
        assertNotNull(move0to12)
        assertTrue(move0to12 is List<*>)

        val move12to14 = query.moveQuery(token, 14, gameId)
        assertNotNull(move12to14)
        assertTrue(move12to14 is List<*>)

        val move14to11 = query.moveQuery(token, 11, gameId)
        assertTrue(move14to11 is String)
        assertEquals("incorrect position", move14to11)

        val move14to16 = query.moveQuery(token, 16, gameId)
        assertNotNull(move14to16)
        assertTrue(move14to16 is List<*>)

        val move16to17 = query.moveQuery(token, 17, gameId)
        assertNotNull(move16to17)
        assertTrue(move16to17 is List<*>)
    }

    @Test
    fun moveQuerySingleGameGoToUp17Test() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        val move0to12 = query.moveQuery(token, 12, gameId)
        assertNotNull(move0to12)
        assertTrue(move0to12 is List<*>)

        val move12to14 = query.moveQuery(token, 14, gameId)
        assertNotNull(move12to14)
        assertTrue(move12to14 is List<*>)

        val move14to16 = query.moveQuery(token, 16, gameId)
        assertNotNull(move14to16)
        assertTrue(move14to16 is List<*>)

        val move16to17 = query.moveQuery(token, 17, gameId)
        assertNotNull(move16to17)
        assertTrue(move16to17 is List<*>)

        val move17to21 = query.moveQuery(token, 21, gameId)
        assertNotNull(move17to21)
        assertTrue(move17to21 is List<*>)

        val move21to22 = query.moveQuery(token, 22, gameId)
        assertNotNull(move21to22)
        assertTrue(move21to22 is List<*>)
    }

    @Test
    fun moveQuerySingleGameGoToUp18Test() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        val move0to12 = query.moveQuery(token, 12, gameId)
        assertNotNull(move0to12)
        assertTrue(move0to12 is List<*>)

        val move12to14 = query.moveQuery(token, 14, gameId)
        assertNotNull(move12to14)
        assertTrue(move12to14 is List<*>)

        val move14to16 = query.moveQuery(token, 16, gameId)
        assertNotNull(move14to16)
        assertTrue(move14to16 is List<*>)

        val move16to18 = query.moveQuery(token, 18, gameId)
        assertNotNull(move16to18)
        assertTrue(move16to18 is List<*>)

        val move18to21 = query.moveQuery(token, 21, gameId)
        assertNotNull(move18to21)
        assertTrue(move18to21 is List<*>)

        val move21to22 = query.moveQuery(token, 22, gameId)
        assertNotNull(move21to22)
        assertTrue(move21to22 is List<*>)
    }

    @Test
    fun moveQueryCoopGameStepByStepTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }

        if (isSecondCanMove) {

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)

        }
    }


    @Test
    fun moveQueryCoopGameOneFinishButSecondSlowpokeTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove11to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove11to13)
            assertTrue(firstMove11to13 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove13to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove13to15)
            assertTrue(firstMove13to15 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove15to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove15to17)
            assertTrue(firstMove15to17 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove17to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove17to19)
            assertTrue(firstMove17to19 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("you finished", firstFinish)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }

        if (isSecondCanMove) {

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove11to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove11to13)
            assertTrue(firstMove11to13 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove13to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove13to15)
            assertTrue(firstMove13to15 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove15to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove15to17)
            assertTrue(firstMove15to17 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove17to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove17to19)
            assertTrue(firstMove17to19 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("you finished", firstFinish)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }
    }


    @Test
    fun moveQueryCoopGameStepBackTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)


            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val move14to11 = query.moveQuery(token1, 11, gameId)
            assertTrue(move14to11 is String)
            assertEquals("incorrect position", move14to11)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }

        if (isSecondCanMove) {

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val move14to11 = query.moveQuery(token1, 11, gameId)
            assertTrue(move14to11 is String)
            assertEquals("incorrect position", move14to11)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)

        }
    }


    @Test
    fun moveQueryCoopGameStepInCorrectFinishTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)


            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("incorrect position", firstFinish)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }

        if (isSecondCanMove) {

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)


            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("incorrect position", firstFinish)


            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)

        }
    }


    @Test
    fun moveQueryCoopGameStepInCorrectFinishNotTurnTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)


            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("not your turn", firstFinish)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)


            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

        }

        if (isSecondCanMove) {

            val secondMove0to11 = query.moveQuery(token2, 11, gameId)
            assertNotNull(secondMove0to11)
            assertTrue(secondMove0to11 is List<*>)

            val firstMove0to11 = query.moveQuery(token1, 11, gameId)
            assertNotNull(firstMove0to11)
            assertTrue(firstMove0to11 is List<*>)

            val secondMove11to12 = query.moveQuery(token2, 12, gameId)
            assertNotNull(secondMove11to12)
            assertTrue(secondMove11to12 is List<*>)

            val firstMove11to12 = query.moveQuery(token1, 12, gameId)
            assertNotNull(firstMove11to12)
            assertTrue(firstMove11to12 is List<*>)

            val secondMove12to13 = query.moveQuery(token2, 13, gameId)
            assertNotNull(secondMove12to13)
            assertTrue(secondMove12to13 is List<*>)

            val firstMove12to13 = query.moveQuery(token1, 13, gameId)
            assertNotNull(firstMove12to13)
            assertTrue(firstMove12to13 is List<*>)

            val secondMove13to14 = query.moveQuery(token2, 14, gameId)
            assertNotNull(secondMove13to14)
            assertTrue(secondMove13to14 is List<*>)

            val firstMove13to14 = query.moveQuery(token1, 14, gameId)
            assertNotNull(firstMove13to14)
            assertTrue(firstMove13to14 is List<*>)

            val firstFinish = query.playerFinished(token1, "30", gameId)
            assertEquals("not your turn", firstFinish)

            val secondMove14to15 = query.moveQuery(token2, 15, gameId)
            assertNotNull(secondMove14to15)
            assertTrue(secondMove14to15 is List<*>)

            val firstMove14to15 = query.moveQuery(token1, 15, gameId)
            assertNotNull(firstMove14to15)
            assertTrue(firstMove14to15 is List<*>)

            val secondMove15to16 = query.moveQuery(token2, 16, gameId)
            assertNotNull(secondMove15to16)
            assertTrue(secondMove15to16 is List<*>)

            val firstMove15to16 = query.moveQuery(token1, 16, gameId)
            assertNotNull(firstMove15to16)
            assertTrue(firstMove15to16 is List<*>)

            val secondMove16to17 = query.moveQuery(token2, 17, gameId)
            assertNotNull(secondMove16to17)
            assertTrue(secondMove16to17 is List<*>)

            val firstMove16to17 = query.moveQuery(token1, 17, gameId)
            assertNotNull(firstMove16to17)
            assertTrue(firstMove16to17 is List<*>)

            val secondMove17to18 = query.moveQuery(token2, 18, gameId)
            assertNotNull(secondMove17to18)
            assertTrue(secondMove17to18 is List<*>)

            val firstMove17to18 = query.moveQuery(token1, 18, gameId)
            assertNotNull(firstMove17to18)
            assertTrue(firstMove17to18 is List<*>)

            val secondMove18to19 = query.moveQuery(token2, 19, gameId)
            assertNotNull(secondMove18to19)
            assertTrue(secondMove18to19 is List<*>)

            val firstMove18to19 = query.moveQuery(token1, 19, gameId)
            assertNotNull(firstMove18to19)
            assertTrue(firstMove18to19 is List<*>)

            val secondMove19to20 = query.moveQuery(token2, 20, gameId)
            assertNotNull(secondMove19to20)
            assertTrue(secondMove19to20 is List<*>)

            val firstMove19to20 = query.moveQuery(token1, 20, gameId)
            assertNotNull(firstMove19to20)
            assertTrue(firstMove19to20 is List<*>)

        }
    }

    @Test
    fun setMoveNextPlayerQueryTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            assertFalse(isSecondCanMove)
            query.setMoveNextPlayerQuery(token1, gameId)
            val action = query.canMove(token2, gameId)
            assertTrue(action)

        }
        if (isSecondCanMove) {
            assertFalse(isFirstCanMove)
            query.setMoveNextPlayerQuery(token2, gameId)
            val action = query.canMove(token1, gameId)
            assertTrue(action)

        }
    }

    @Test
    fun playerFinishedSingleTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        query.moveQuery(token, 12, gameId)
        query.moveQuery(token, 14, gameId)
        query.moveQuery(token, 16, gameId)
        query.moveQuery(token, 18, gameId)

        val actual2 = query.playerFinished(token, "31", gameId)
        assertEquals("incorrect position", actual2)

        query.moveQuery(token, 21, gameId)
        query.moveQuery(token, 22, gameId)

        val actual = query.playerFinished(token, "31", gameId)
        assertEquals("you finished", actual)
    }

    @Test
    fun playerFinishedCoopTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 12, gameId)

            val secondFinishIncorrectPositionActual = query.playerFinished(token2, "30", gameId)
            assertEquals("incorrect position", secondFinishIncorrectPositionActual)

            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token1, 20, gameId)
            query.moveQuery(token2, 20, gameId)

            val secondFinishNotYourTurnActual = query.playerFinished(token2, "30", gameId)
            assertEquals("not your turn", secondFinishNotYourTurnActual)

            val firstFinishActual = query.playerFinished(token1, "30", gameId)
            assertEquals("you finished", firstFinishActual)

            val secondFinishActual = query.playerFinished(token2, "30", gameId)
            assertEquals("you finished", secondFinishActual)
        }

        if (isSecondCanMove) {
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 12, gameId)

            val secondFinishIncorrectPositionActual = query.playerFinished(token2, "30", gameId)
            assertEquals("incorrect position", secondFinishIncorrectPositionActual)

            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token2, 20, gameId)
            query.moveQuery(token1, 20, gameId)

            val firstFinishNotYourTurnActual = query.playerFinished(token1, "30", gameId)
            assertEquals("not your turn", firstFinishNotYourTurnActual)

            val secondFinishActual = query.playerFinished(token2, "30", gameId)
            assertEquals("you finished", secondFinishActual)

            val firstFinishActual = query.playerFinished(token1, "30", gameId)
            assertEquals("you finished", firstFinishActual)
        }
    }


    @Test
    fun everyoneFinishSingleTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        query.moveQuery(token, 12, gameId)
        query.moveQuery(token, 14, gameId)
        query.moveQuery(token, 16, gameId)
        query.moveQuery(token, 18, gameId)

        val everyoneFinishFalseActual = query.everyoneFinish(gameId)
        assertFalse(everyoneFinishFalseActual)

        query.moveQuery(token, 21, gameId)
        query.moveQuery(token, 22, gameId)
        query.playerFinished(token, "31", gameId)

        val everyoneFinishActual = query.everyoneFinish(gameId)
        assertTrue(everyoneFinishActual)
    }

    @Test
    fun everyoneFinishCoopTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token1, 20, gameId)
            query.moveQuery(token2, 20, gameId)

            assertFalse(query.everyoneFinish(gameId))

            query.playerFinished(token1, "30", gameId)

            assertFalse(query.everyoneFinish(gameId))

            query.playerFinished(token2, "30", gameId)

            assertTrue(query.everyoneFinish(gameId))
        }

        if (isSecondCanMove) {
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token2, 20, gameId)
            query.moveQuery(token1, 20, gameId)

            assertFalse(query.everyoneFinish(gameId))

            query.playerFinished(token2, "30", gameId)

            assertFalse(query.everyoneFinish(gameId))

            query.playerFinished(token1, "30", gameId)

            assertTrue(query.everyoneFinish(gameId))
        }
    }

    @Test
    fun getEnemyLoginQueryTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val enemyLogonForFirstActual = query.getEnemyLoginQuery(token1, gameId)
        assertEquals("user2", enemyLogonForFirstActual)
        val enemyLogonForSecondActual = query.getEnemyLoginQuery(token2, gameId)
        assertEquals("user1", enemyLogonForSecondActual)
    }

    @Test
    fun setFirstMoveQuerySingleTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        assertFalse(query.canMove(token, gameId))
        query.setFirstMoveQuery(gameId)
        assertTrue(query.canMove(token, gameId))
    }

    @Test
    fun setFirstMoveQueryCoopTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)

        assertFalse(query.canMove(token1, gameId))
        assertFalse(query.canMove(token2, gameId))

        query.setFirstMoveQuery(gameId)

        assertTrue(query.canMove(token1, gameId) || query.canMove(token2, gameId))
        //game started(first player)
        query.getGameFieldQuery(gameId)
    }

    @Test
    fun canMoveSingleTest() {
        val login = "user1"
        val password = "password1"
        val dog = "2"

        val token = query.authorisationQuery(login, password)
        val gameId = query.createGameQuery("testGame")
        query.createGameFieldQuery(gameId)
        query.createPlayerQuery(token, gameId, dog)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        assertTrue(query.canMove(token,gameId))

        query.moveQuery(token, 12, gameId)

        assertTrue(query.canMove(token,gameId))
    }

    @Test
    fun canMoveCoopTest(){
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            assertTrue(query.canMove(token1,gameId))
            assertFalse(query.canMove(token2,gameId))

            query.moveQuery(token1, 11, gameId)

            assertTrue(query.canMove(token2,gameId))
            assertFalse(query.canMove(token1,gameId))

            query.moveQuery(token2, 11, gameId)

            assertTrue(query.canMove(token1,gameId))
            assertFalse(query.canMove(token2,gameId))

            query.moveQuery(token1, 12, gameId)

            assertTrue(query.canMove(token2,gameId))
            assertFalse(query.canMove(token1,gameId))

            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 20, gameId)
            query.moveQuery(token2, 16, gameId)

            query.playerFinished(token1, "30", gameId)

            assertTrue(query.canMove(token2,gameId))

            query.moveQuery(token2, 17, gameId)

            assertTrue(query.canMove(token2,gameId))

            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token2, 20, gameId)
            query.playerFinished(token2, "30", gameId)
        }

        if (isSecondCanMove) {
            assertTrue(query.canMove(token2,gameId))
            assertFalse(query.canMove(token1,gameId))

            query.moveQuery(token2, 11, gameId)

            assertTrue(query.canMove(token1,gameId))
            assertFalse(query.canMove(token2,gameId))

            query.moveQuery(token1, 11, gameId)

            assertTrue(query.canMove(token2,gameId))
            assertFalse(query.canMove(token1,gameId))

            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 20, gameId)
            query.moveQuery(token1, 16, gameId)

            query.playerFinished(token2, "30", gameId)

            assertTrue(query.canMove(token1,gameId))

            query.moveQuery(token1, 17, gameId)

            assertTrue(query.canMove(token1,gameId))

            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token1, 20, gameId)

            query.playerFinished(token1, "30", gameId)
        }
    }

    @Test
    fun isEnemyFinishQueryTest() {
        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 12, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 16, gameId)
            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 20, gameId)
            query.moveQuery(token2, 16, gameId)

            assertFalse(query.isEnemyFinishQuery(token2,gameId))

            query.playerFinished(token1, "30", gameId)

            assertTrue(query.isEnemyFinishQuery(token2,gameId))

            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token2, 20, gameId)
            query.playerFinished(token2, "30", gameId)
        }

        if (isSecondCanMove) {
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 13, gameId)
            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 20, gameId)
            query.moveQuery(token1, 16, gameId)

            assertFalse(query.isEnemyFinishQuery(token1,gameId))

            query.playerFinished(token2, "30", gameId)

            assertTrue(query.isEnemyFinishQuery(token1,gameId))

            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token1, 20, gameId)
            query.playerFinished(token1, "30", gameId)
        }
    }

    @Test
    fun whereEnemyQuery() {

        val login1 = "user1"
        val password1 = "password1"
        val dog1 = "2"

        val login2 = "user2"
        val password2 = "password2"
        val dog2 = "2"

        //create game(first player)
        val token1 = query.authorisationQuery(login1, password1)
        val gameId = query.createGameQuery("testGame")
        query.createPlayerQuery(token1, gameId, dog1)

        //join game(second player)
        val token2 = query.authorisationQuery(login2, password2)
        query.createPlayerQuery(token2, gameId, dog2)
        query.createGameFieldQuery(gameId)
        query.gameStart(gameId)
        query.setFirstMoveQuery(gameId)

        //game started(first player)
        query.getGameFieldQuery(gameId)

        val isFirstCanMove = query.canMove(token1, gameId)
        val isSecondCanMove = query.canMove(token2, gameId)

        if (isFirstCanMove) {
            assertEquals(0,query.whereEnemyQuery(token2,gameId))

            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 12, gameId)

            assertEquals(12,query.whereEnemyQuery(token2,gameId))

            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 13, gameId)
            query.moveQuery(token1, 16, gameId)


            assertEquals(16,query.whereEnemyQuery(token2,gameId))

            query.moveQuery(token2, 14, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 20, gameId)
            query.moveQuery(token2, 16, gameId)

            assertEquals(20,query.whereEnemyQuery(token2,gameId))

            query.playerFinished(token1, "30", gameId)

            assertEquals(30,query.whereEnemyQuery(token2,gameId))

            query.moveQuery(token2, 17, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token2, 19, gameId)
            query.moveQuery(token2, 20, gameId)
            query.playerFinished(token2, "30", gameId)
        }

        if (isSecondCanMove) {
            assertEquals(0,query.whereEnemyQuery(token1,gameId))

            query.moveQuery(token2, 11, gameId)
            query.moveQuery(token1, 11, gameId)
            query.moveQuery(token2, 13, gameId)

            assertEquals(13,query.whereEnemyQuery(token1,gameId))

            query.moveQuery(token1, 12, gameId)
            query.moveQuery(token2, 15, gameId)
            query.moveQuery(token1, 13, gameId)

            assertEquals(15,query.whereEnemyQuery(token1,gameId))

            query.moveQuery(token2, 16, gameId)
            query.moveQuery(token1, 14, gameId)
            query.moveQuery(token2, 18, gameId)
            query.moveQuery(token1, 15, gameId)
            query.moveQuery(token2, 20, gameId)
            query.moveQuery(token1, 16, gameId)

            assertEquals(20,query.whereEnemyQuery(token1,gameId))

            query.playerFinished(token2, "30", gameId)

            assertEquals(30,query.whereEnemyQuery(token1,gameId))

            query.moveQuery(token1, 17, gameId)
            query.moveQuery(token1, 18, gameId)
            query.moveQuery(token1, 19, gameId)
            query.moveQuery(token1, 20, gameId)
            query.playerFinished(token1, "30", gameId)
        }
    }
}