package kursach.system.vokabulary

data object Procedures {
    const val authorisationUser = "call authorisation_user(?, ?)"
    const val availableGames = "call available_games()"
    const val canPlayerMove = "call can_player_move(?, ?)"
    const val createGame = "call create_game(?)"
    const val createGameField = "call create_game_field(?)"
    const val createPlayer = "call create_player(?, ?)"
    const val enemiesPlace = "call enemies_place(?)"
    const val everyoneFinish = "call everyone_finish(?)"
    const val game_finish = "call game_finish(?)"
    const val game_start = "call game_start(?)"
    const val move = "call game_finish(?, ?, ?)"
    const val playerFinished = "call player_finished(?, ?)"
    const val playerMoveFalse = "call player_move_false(?, ?)"
    const val playerMoveTrue = "call player_move_true(?, ?)"
    const val registrationUser = "call registration_user(?, ?)"
}