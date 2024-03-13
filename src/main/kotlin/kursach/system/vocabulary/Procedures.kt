package kursach.system.vocabulary

data object Procedures {
    const val authorisationUser = "call authorisation_user(?, ?)"
    const val availableGames = "call available_games()"
    const val canPlayerMove = "call can_player_move(?, ?)"
    const val createGame = "call create_game(?)"
    const val createGameField = "call create_game_field(?)"
    const val createPlayer = "call create_player(?, ?)"
    const val enemiesPlace = "call enemies_place(?)"
    const val everyoneFinish = "call everyone_finish(?)"
    const val gameFinish = "call game_finish(?)"
    const val gameStart = "call game_start(?)"
    const val gameStarted = "call game_started(?)"
    const val getEnemyLogin = "call get_enemy_login(?, ?)"
    const val getGameField = "call get_game_field(?)"
    const val move = "call move(?, ?, ?)"
    const val playerFinished = "call player_finished(?, ?)"
    const val playerMoveFalse = "call player_move_false(?, ?)"
    const val playerMoveTrue = "call player_move_true(?, ?)"
    const val registrationUser = "call registration_user(?, ?)"
    const val setFirstMove = "call set_first_move(?)"
}