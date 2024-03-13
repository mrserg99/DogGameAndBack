function clearCookies() {
    setCookie(cookiesVocabulary.game_ready, "false")
}

function getXmlHttp() {
    var x = false;
    try {
        x = new XMLHttpRequest();
    } catch (e) {
        try {
            x = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (ex) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e1) {
                x = false;
            }
        }
    }
    return x;
}

/* POST-запрос */
var uName = uName || function log() {
    var login = document.getElementById("login").value; // Считываем значение
    var password = document.getElementById("password").value; // Считываем значение
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'login', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert("Ваш логин или пароль не верны! Попробуйте войти еще раз")
        } else { // если всё прошло гладко, выводим результат
            let value = xmlhttp.responseText;
            setCookie(cookiesVocabulary.login, value)
            window.location.href = 'main.html';
        }
    }
}

function name() {
    document.getElementById("user_name").innerHTML = getCookie(cookiesVocabulary.login) + "\u{1F43E}";
}

function activateField(){
    document.getElementById("wrapper_34_h1").innerHTML = "Ваш ход"
    document.getElementById("wrapper_34").classList.add("dis_none")
}

function deactivateField(){
    document.getElementById("wrapper_34_h1").innerHTML = "Ход соперника"
    document.getElementById("wrapper_34").classList.remove("dis_none")
}

function whereEnemy() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/whereEnemy', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + getCookie(cookiesVocabulary.login) + "&gameId=" + getCookie(cookiesVocabulary.game_id)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            setCookie(cookiesVocabulary.enemy_position, xmlhttp.responseText);
        }
    }
}

function enemyPlace(){
    whereEnemy()
    if(getCookie(cookiesVocabulary.enemy_position)===11){
        stay_v("u2_11", "u2_00","u2_13","u2_12","u2_14","u2_15","u2_16","u2_17","u2_18","u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if(getCookie(cookiesVocabulary.enemy_position)===12){
        stay_v("u2_12", "u2_00","u2_11","u2_13","u2_14","u2_15","u2_16","u2_17","u2_18","u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if(getCookie(cookiesVocabulary.enemy_position)===13){
        stay_v("u2_13", "u2_00","u2_11","u2_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")
    }
    if(getCookie(cookiesVocabulary.enemy_position)===13){
        stay_v("u2_13", "u2_00","u2_11","u2_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")
    }

}

function startGame() {
    let timerId = setTimeout(function checkGameTimer() {
        checkGameMove()
        enemyPlace()
        if (getCookie(cookiesVocabulary.move_ready) === "true") {
            clearTimeout(timerId);
            activateField()
        } else {
            timerId = setTimeout(checkGameTimer, 3000)
            deactivateField()
        }
    }, 0);
}

function initGameField() {
    enemy(getCookie(cookiesVocabulary.enemy_log));
    user(getCookie(cookiesVocabulary.login))

    let gameId = JSON.parse(getCookie(cookiesVocabulary.field))["gameId"];
    setCookie(cookiesVocabulary.game_id, gameId)

    creatFieldAndSetResource();

    document.getElementById("wrapper_34").classList.add("dis_none");

    startGame()
}

function creatFieldAndSetResource() {
    let cells = JSON.parse(getCookie(cookiesVocabulary.field))["cells"];

    if (cells[0].cellId === 11) {
        get_cell(cells[0].resourceId, cells[0].countOfResources, "11_b", "11_202", "11_c", "11_p1", "11_p2", "11_p3", "11_p4");
    }
    if (cells[1].cellId === 12) {
        get_cell(cells[1].resourceId, cells[1].countOfResources, "12_b", "12_202", "12_c", "12_p1", "12_p2", "12_p3", "12_p4");
    }
    if (cells[2].cellId === 13) {
        get_cell(cells[2].resourceId, cells[2].countOfResources, "13_b", "13_202", "13_c", "13_p1", "13_p2", "13_p3", "13_p4");
    }
    if (cells[3].cellId === 14) {
        get_cell(cells[3].resourceId, cells[3].countOfResources, "14_b", "14_202", "14_c", "14_p1", "14_p2", "14_p3", "14_p4");
    }

    if (cells[4].cellId === 15) {
        get_cell(cells[4].resourceId, cells[4].countOfResources, "15_b", "15_202", "15_c", "15_p1", "15_p2", "15_p3", "15_p4");
    }

    if (cells[5].cellId === 16) {
        get_cell(cells[5].resourceId, cells[5].countOfResources, "16_b", "16_202", "16_c", "16_p1", "16_p2", "16_p3", "16_p4");
    }

    if (cells[6].cellId === 17) {
        get_cell(cells[6].resourceId, cells[6].countOfResources, "17_b", "17_202", "17_c", "17_p1", "17_p2", "17_p3", "17_p4");
    }

    if (cells[7].cellId === 18) {
        get_cell(cells[7].resourceId, cells[7].countOfResources, "18_b", "18_202", "18_c", "18_p1", "18_p2", "18_p3", "18_p4");
    }

    if (cells[8].cellId === 19) {
        get_cell(cells[8].resourceId, cells[8].countOfResources, "19_b", "19_202", "19_c", "19_p1", "19_p2", "19_p3", "19_p4");
    }

    if (cells[9].cellId === 20) {
        get_cell(cells[9].resourceId, cells[9].countOfResources, "1a_b", "1a_202", "1a_c", "1a_p1", "1a_p2", "1a_p3", "1a_p4");
    }

    if (cells[10].cellId === 21) {
        get_cell(cells[10].resourceId, cells[10].countOfResources, "21_b", "21_202", "21_c", "21_p1", "21_p2", "21_p3", "21_p4");
    }

    if (cells[11].cellId === 22) {
        get_cell(cells[11].resourceId, cells[11].countOfResources, "22_b", "22_202", "22_c", "22_p1", "22_p2", "22_p3", "22_p4");
    }

    if (cells[12].cellId === 23) {
        get_cell(cells[12].resourceId, cells[12].countOfResources, "23_b", "23_202", "23_c", "23_p1", "23_p2", "23_p3", "23_p4");
    }
}

function ename() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/enemyLogin', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + getCookie(cookiesVocabulary.login) + "&gameId=" + getCookie(cookiesVocabulary.game_id)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if(xmlhttp.status ===200){
            setCookie(cookiesVocabulary.enemy_log, xmlhttp.responseText);
        }
    }

}

function single() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'single/game', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + encodeURIComponent(getCookie(cookiesVocabulary.login)))
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            setCookie(cookiesVocabulary.field, xmlhttp.responseText)
            window.location.href = 'game_field.html';
        }
    }
}

function get_cell(Res_id, count, i1, i2, i3, i4_p, i5_p, i6_p, i7_p) {
    if (Res_id === 201) {
        document.getElementById(i1).classList.remove("dis_none")
    } else if (Res_id === 202) {
        document.getElementById(i2).classList.remove("dis_none")
    } else if (Res_id === 203) {
        document.getElementById(i3).classList.remove("dis_none")
    }
    if (count === 1) {
        document.getElementById(i4_p).classList.remove("dis_none")

    } else if (count === 2) {
        document.getElementById(i5_p).classList.remove("dis_none")

    } else if (count === 3) {
        document.getElementById(i6_p).classList.remove("dis_none")

    } else if (count === 4) {
        document.getElementById(i7_p).classList.remove("dis_none")

    }
}

function create() {
    var lobby = document.getElementById("lobby_name").value; // Считываем значение
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/createGame', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + getCookie(cookiesVocabulary.login) + "&name=" + encodeURIComponent(lobby)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            setCookie(cookiesVocabulary.game_id, xmlhttp.response)
            let timerId = setTimeout(function checkGameTimer() {
                checkGameStart()
                if (getCookie(cookiesVocabulary.game_ready) === "true") {
                    clearTimeout(timerId);

                    createGameField();

                } else {//хде противник
                    timerId = setTimeout(checkGameTimer, 3000)
                    document.getElementById("wrapper_66").classList.remove("dis_none")
                }
            }, 0);
        }
    }
}


function inquiry() {
    var lobby = document.getElementById("lobby_name").value; // Считываем значение

    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/createGame', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + getCookie(cookiesVocabulary.login) + "&name=" + encodeURIComponent(lobby)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            setCookie(cookiesVocabulary.game_id, xmlhttp.response)
            let timerId = setTimeout(function checkGameTimer() {
                checkGameMove()//могу ли я ходить? +кука

                if (getCookie(cookiesVocabulary.move_ready) === "true") {
                    clearTimeout(timerId);//если могу, то стоп таймера
                   // document.getElementById("wrapper_34_h1").innerHTML = "Ваш ход"
                   // document.getElementById("wrapper_34").classList.remove("dis_none");

                   // enemyMove()
                } else {//хде противник

                    timerId = setTimeout(checkGameTimer, 1000)
                  //  document.getElementById("wrapper_34_h1").innerHTML = "Сейчас ход соперника"
                  //  document.getElementById("wrapper_34").classList.remove("dis_none");
                }
            }, 0)//блокировка после мув
        }
    }
}

function checkGameMove() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/canMove', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + getCookie(cookiesVocabulary.login) + "&gameId=" + getCookie(cookiesVocabulary.game_id)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            if (getCookie(cookiesVocabulary.move_ready) != null || getCookie(cookiesVocabulary.move_ready) !== undefined) {
                deleteCookie(cookiesVocabulary.move_ready)
            }
            setCookie(cookiesVocabulary.move_ready, xmlhttp.responseText);
        }
    }
}

function checkGameStart() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/gameStarted', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("gameId=" + getCookie(cookiesVocabulary.game_id)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        setCookie(cookiesVocabulary.game_ready, xmlhttp.responseText);
    }
}

function join(element) {
    setCookie(cookiesVocabulary.game_ready, "true")
    var parent = element.parentNode;
    var content = parent.querySelector("div");
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/connectToGame', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + encodeURIComponent(getCookie(cookiesVocabulary.login)) + "&gameId=" + encodeURIComponent(parent.id)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        getGameField(xmlhttp)
    }
}

function createGameField() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'coop/getGameField', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("gameId=" + getCookie(cookiesVocabulary.game_id)) // Отправляем POST-запрос
    xmlhttp.onload = function () {
        getGameField(xmlhttp)
    }
}

function getGameField(xmlhttp) {

    if (xmlhttp.status === 200 && (getCookie(cookiesVocabulary.game_ready) === "true")) {
        setCookie(cookiesVocabulary.field, xmlhttp.responseText)

        ename();
        window.location.href = 'game_field.html';
    }
}


function user(login) {
    document.getElementById("u00_name").innerHTML = login;
    document.getElementById("u11_name").innerHTML = login;
    document.getElementById("u12_name").innerHTML = login;
    document.getElementById("u13_name").innerHTML = login;
    document.getElementById("u14_name").innerHTML = login;
    document.getElementById("u15_name").innerHTML = login;
    document.getElementById("u16_name").innerHTML = login;
    document.getElementById("u17_name").innerHTML = login;
    document.getElementById("u18_name").innerHTML = login;
    document.getElementById("u19_name").innerHTML = login;
    document.getElementById("u1a_name").innerHTML = login;

    document.getElementById("u21_name").innerHTML = login;
    document.getElementById("u22_name").innerHTML = login;
    document.getElementById("u23_name").innerHTML = login;

    document.getElementById("u30_name").innerHTML = login;
    document.getElementById("u31_name").innerHTML = login;

}


function enemy(login) {
    document.getElementById("name_e1").innerHTML = login;

    document.getElementById("e00_name").innerHTML = login;
    document.getElementById("e11_name").innerHTML = login;
    document.getElementById("e12_name").innerHTML = login;
    document.getElementById("e13_name").innerHTML = login;
    document.getElementById("e14_name").innerHTML = login;
    document.getElementById("e15_name").innerHTML = login;
    document.getElementById("e16_name").innerHTML = login;
    document.getElementById("e17_name").innerHTML = login;
    document.getElementById("e18_name").innerHTML = login;
    document.getElementById("e19_name").innerHTML = login;
    document.getElementById("e1a_name").innerHTML = login;

    document.getElementById("e21_name").innerHTML = login;
    document.getElementById("e22_name").innerHTML = login;
    document.getElementById("e23_name").innerHTML = login;

    document.getElementById("e30_name").innerHTML = login;
    document.getElementById("e31_name").innerHTML = login;
}

function enemyMove(){

}