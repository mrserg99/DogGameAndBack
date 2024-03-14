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
        })
}

function enemyPlace() {
    if(getValue(storageVocabulary.is_single) === "false") {
        whereEnemy()
        printEnemyPosition();
    }
}

function startGame() {
    if(getValue(storageVocabulary.is_single) === "true"){
        deleteEnemyImegeInSingleGame();
    }
    let timerId = setTimeout(function checkGameTimer() {
        checkGameMove()
        enemyPlace()
        if (getValue(storageVocabulary.move_ready) === "true" || getValue(storageVocabulary.is_single) === "true") {
            activateField()
            clearTimeout(timerId);
        } else {
            timerId = setTimeout(checkGameTimer, 1000)
            deactivateField()
        }
    }, 0);
}

function initGameField() {
    printEnemyLogin(getValue(storageVocabulary.enemy_log));
    printUserLogin(getValue(storageVocabulary.login))

    let gameId = JSON.parse(getValue(storageVocabulary.field))["gameId"];
    setValue(storageVocabulary.game_id, gameId)
    deleteValue(storageVocabulary.enemy_position)

    creatFieldAndSetResource();

    document.getElementById("wrapper_34").classList.add("dis_none");

    startGame()
}

function ename() {
    sendPostRequest('coop/enemyLogin', "login=" + getValue(storageVocabulary.login) + "&gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.enemy_log, result);
        })
}

function single() {
    setValue(storageVocabulary.is_single, true)

    sendPostRequest('single/game',"login=" + encodeURIComponent(getValue(storageVocabulary.login)))
        .then(result => {
            setValue(storageVocabulary.field, result)
            window.location.href = 'game_field.html';
        })
}

function create() {
    deleteValue(storageVocabulary.game_ready)
    setValue(storageVocabulary.is_single, false)
    let lobby = document.getElementById("lobby_name").value;

    sendPostRequest('coop/createGame',"login=" + getValue(storageVocabulary.login) + "&name=" + encodeURIComponent(lobby))
        .then(result => {
            setValue(storageVocabulary.game_id, result)
            let timerId = setTimeout(function checkGameTimer() {
                checkGameStart()
                if (getValue(storageVocabulary.game_ready) === "true") {
                    clearTimeout(timerId);
                    if (getValue(storageVocabulary.game_ready) === "true") {
                        createGameField();
                    }
                } else {
                    timerId = setTimeout(checkGameTimer, 1000)
                    document.getElementById("wrapper_66").classList.remove("dis_none")
                }
            }, 0);
        })
}

function checkGameMove() {
    sendPostRequest('coop/canMove',"login=" + getValue(storageVocabulary.login) + "&gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.move_ready, result);
        })
}

function checkGameStart() {
    sendPostRequest('coop/gameStarted',"gameId=" + getValue(storageVocabulary.game_id))
        .then(result => {
            setValue(storageVocabulary.game_ready, result);
        })
}

function join(element) {
    setValue(storageVocabulary.game_ready, true)
    setValue(storageVocabulary.is_single, false)
    let parent = element.parentNode;

    sendPostRequest('coop/connectToGame',"login=" + encodeURIComponent(getValue(storageVocabulary.login)) + "&gameId=" + encodeURIComponent(parent.id))
        .then(result => {
            getGameField(result)
        })
}

function createGameField() {
    sendPostRequest('coop/getGameField',"gameId=" + getValue(storageVocabulary.game_id))
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