const ENEMY = "enemy"
const USER = "user"
const CARDBONUS = "card_bonus"

/* POST-запрос */
function authorisation() {
    let login = document.getElementById("login").value; // Считываем значение
    let password = document.getElementById("password").value; // Считываем значение

    sendPostRequest('login', "login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password))
        .then(result => {
            setValue(storageVocabulary.login, result)
            window.location.href = 'main.html';
        })
}

function whereEnemy() {
    sendPostRequest('coop/whereEnemy', "login=" + getValue(storageVocabulary.login) + "&gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.enemy_position, result);
            deleteSquare(ENEMY)
            createSquare(ENEMY, getValue(storageVocabulary.enemy_position, CARDBONUS, getValue(storageVocabulary.enemy_log)))
        })
}

function enemyPlace() {
    if (getValue(storageVocabulary.is_single) === "false") {
        whereEnemy()
    }
}

function startGame() {
    enemyPlace()
    checkGameMove().then(function () {
        if (getValue(storageVocabulary.move_ready) !== "true") {
            deactivateField()
        }
        let timerId = setTimeout(function checkGameTimer() {
            checkGameMove().then(function () {
                enemyPlace()
                if (getValue(storageVocabulary.move_ready) === "true") {
                    activateField()
                    clearTimeout(timerId);
                } else {
                    timerId = setTimeout(checkGameTimer, 1000)
                }
            })
        }, 0);
    })
}

function startSingleGame() {
        if (getValue(storageVocabulary.is_single) === "true") {
            deleteEnemyImegeInSingleGame();
        }
        activateField()
}

function initGameField() {
    let gameId = JSON.parse(getValue(storageVocabulary.field))["gameId"];
    setValue(storageVocabulary.game_id, gameId)
    deleteValue(storageVocabulary.enemy_position)

    creatResources();

    document.getElementById("wrapper_34").classList.add("dis_none");

    if (getValue(storageVocabulary.is_single) !== "true") {
        createStartSquare(ENEMY, getValue(storageVocabulary.enemy_log));
    }
    createStartSquare(USER, getValue(storageVocabulary.login))

    if(getValue(storageVocabulary.is_single) === "true") {
        startSingleGame();
    } else {
        startGame();
    }
}

function ename() {
    sendPostRequest('coop/enemyLogin', "login=" + getValue(storageVocabulary.login) + "&gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.enemy_log, result);
        })
}

function single() {
    setValue(storageVocabulary.is_single, true)

    sendPostRequest('single/game', "login=" + encodeURIComponent(getValue(storageVocabulary.login)) + "&dog=" + getValue(storageVocabulary.dog))
        .then(result => {
            setValue(storageVocabulary.field, result)
            window.location.href = 'game_field.html';
        })
}

function create() {
    setValue(storageVocabulary.is_single, false)
    deleteValue(storageVocabulary.game_ready)
    setValue(storageVocabulary.is_single, false)
    let lobby = document.getElementById("lobby_name").value;

    sendPostRequest('coop/createGame', "login=" + getValue(storageVocabulary.login) + "&name=" + encodeURIComponent(lobby))
        .then(result => {
            setValue(storageVocabulary.game_id, result)
            let timerId = setTimeout(function checkGameTimer() {
                checkGameStart()
                if (getValue(storageVocabulary.game_ready) === "true") {
                    clearTimeout(timerId);
                    createGameField();
                } else {
                    timerId = setTimeout(checkGameTimer, 1000)
                    document.getElementById("wrapper_66").classList.remove("dis_none")
                }
            }, 0);
        })
}

async function checkGameMove() {
    await sendPostRequest('coop/canMove', "login=" + getValue(storageVocabulary.login) + "&gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.move_ready, result);
        })
}

async function checkGameFinish() {
    await sendPostRequest('coop/everyoneFinish', "gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.all_finish, result);
        })
}

function checkGameStart() {
    sendPostRequest('coop/gameStarted', "gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.game_ready, result);
        })
}

function join(element) {
    setValue(storageVocabulary.game_ready, true)
    setValue(storageVocabulary.is_single, false)
    let parent = element.parentNode;

    sendPostRequest('coop/connectToGame', "login=" + encodeURIComponent(getValue(storageVocabulary.login)) + "&gameId=" + encodeURIComponent(parent.id))
        .then(result => {
            getGameField(result)
        })
}

function createGameField() {
    sendPostRequest('coop/getGameField', "gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            getGameField(result)
        })
}

function getGameField(result) {
    if (getValue(storageVocabulary.game_ready) === "true") {
        setValue(storageVocabulary.field, result)
        ename();
        window.location.href = 'game_field.html';
    }
}