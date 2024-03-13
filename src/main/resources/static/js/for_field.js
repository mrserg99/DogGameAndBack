let settings = {
    myPosition: 0
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

function updateRecorse(recurse, xmlhttp) {
    setCookie(recurse, xmlhttp.responseText)

    let res_json = JSON.parse(getCookie(recurse));

    document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
    document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
    document.getElementById("m_count").innerHTML = res_json[1].countOfResources;

    startGame();
}

function one_one() {
    let cell = 11;

    if (settings.myPosition<=0){
        let xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=1
                stay_v("u1_11", "u1_00","u1_13","u1_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_1

                updateRecorse(recurse, xmlhttp);
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_two() {
    var cell = 12;
    if (settings.myPosition<2){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));

        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=2;
                stay_v("u1_12", "u1_00","u1_11","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_2

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_tree() {
    var cell = 13;
    if (settings.myPosition<3){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=3;
                stay_v("u1_13", "u1_00","u1_11","u1_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_3

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_four() {
    var cell = 14;
    if (settings.myPosition<4 && settings.myPosition>1){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=4;
                stay_v("u1_14", "u1_00","u1_11","u1_12","u1_13","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_4

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_five() {
    var answer;
    if (settings.myPosition<5 && settings.myPosition>2){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=5;
                stay_v("u1_15", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_5

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_six() {
    var cell = 16;
    if (settings.myPosition<6 && settings.myPosition>3){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=6;
                stay_v("u1_16", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_6

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_seven() {
    var cell = 17;
    if (settings.myPosition<7 && settings.myPosition>4){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=7;
                stay_v("u1_17", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_7

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }

}

function one_eith() {
    var cell = 18;
    if (settings.myPosition<8 && settings.myPosition>5){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=8;
                stay_v("u1_18", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_8

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_nine() {
    var cell = 19;
    if (settings.myPosition<9 && settings.myPosition>6){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=9;
                stay_v("u1_19", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_9

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_ten() {
    var cell = '20';
    if (settings.myPosition<10 && settings.myPosition>5){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=10;
                stay_v("u1_1a", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_1_10

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_one() {
    var cell = 21;
    if (settings.myPosition==7 || settings.myPosition==6){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=30;
                stay_v("u1_21", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_22", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_2_1

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_two() {
    var cell = 22;
    if (settings.myPosition<31){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=settings.myPosition+1;
                stay_v("u1_22", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_31", "u1_23", "u1_30")

                let recurse = cookiesVocabulary.resurse_2_2

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_free() {
    var cell = 23;
    if (settings.myPosition<32){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=settings.myPosition+1;
                stay_v("u1_23", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_30")

                let recurse = cookiesVocabulary.resurse_2_3

                updateRecorse(recurse, xmlhttp)
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function finishMessage() {
    document.getElementById("wrapper_34_h1").innerHTML = "Поздравляю! Вы дошли до финиша. Ждем других игроков"
    document.getElementById("wrapper_34").classList.remove("dis_none");
}

function tree_zero() {
    if (settings.myPosition==8 || settings.myPosition==9|| settings.myPosition==10){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','finish', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=45;
                stay_v("u1_30", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_31")
                if (xmlhttp.responseText === "true"){
                    win();
                }else {
                    finishMessage()
                }

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function tree_one() {
    if (settings.myPosition==30 || settings.myPosition==31|| settings.myPosition==32 || settings.myPosition==33){
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','finish', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("login="+getCookie(cookiesVocabulary.login)+"&gameId="+getCookie(cookiesVocabulary.game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                settings.myPosition=45;
                stay_v("u1_31", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_30")
                if (xmlhttp.response === "true"){
                    win();
                }else {
                    finishMessage();
                }
            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function win() {
    window.location.href = 'win.html';
}

function stay_v(remove,add1,add2,add3,add4,add5,add6,add7,add8, add9, add10, add11, add12,add13,add14, add15){
    document.getElementById(remove).classList.remove("nothing");
    document.getElementById(add1).classList.add("nothing");
    document.getElementById(add2).classList.add("nothing");
    document.getElementById(add3).classList.add("nothing");
    document.getElementById(add4).classList.add("nothing");
    document.getElementById(add5).classList.add("nothing");
    document.getElementById(add6).classList.add("nothing");
    document.getElementById(add7).classList.add("nothing");
    document.getElementById(add8).classList.add("nothing");
    document.getElementById(add9).classList.add("nothing");
    document.getElementById(add10).classList.add("nothing");
    document.getElementById(add11).classList.add("nothing");
    document.getElementById(add12).classList.add("nothing");
    document.getElementById(add13).classList.add("nothing");
    document.getElementById(add14).classList.add("nothing");
    document.getElementById(add15).classList.add("nothing");

}