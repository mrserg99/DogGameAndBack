package kursach.system.vokabulary

data object Procedures {
    const val authorisationUser = "call authorisation_user(?, ?)"
    const val registrationUser = "call registration_user(?, ?)"
    const val createGameField = "call create_game_field()"
    const val move = "call move(?, ?)"
}