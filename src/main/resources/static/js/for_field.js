


let user = 0;

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



function zero_zero() {

    var cell = 0;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', ' /service/move11', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("start" + encodeURIComponent(cell));
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            // alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            stay_v("u1_00", "u1_13","u1_11","u1_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

        }
    }
}

function one_one() {
    var cell = 11;
    let field = "field"
    var var_json = JSON.parse(getCookie(field));
    let per = "login"
    let game_id = "game_id"

    document.cookie =game_id +"="+ gameId
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<=0){
       // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=1
               // alert(user)
                stay_v("u1_11", "u1_00","u1_13","u1_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                resurse = "resurse_1_1"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;




            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_two() {
    let field = "field"
    var cell = 12;
    let per = "login"
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<2){
       // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=2;
                //alert(user)
                stay_v("u1_12", "u1_00","u1_11","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")



                resurse = "resurse_1_2"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_tree() {
    let field = "field"
    let per = "login"
    let game_id = "game_id"
    var cell = 13;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<3){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=3;
                //alert(user)
                stay_v("u1_13", "u1_00","u1_11","u1_12","u1_14","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_3"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_four() {
    let field = "field"
    let per = "login"
    let game_id = "game_id"
    var cell = 14;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<4 && user>1){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=4;
                //alert(user)
                stay_v("u1_14", "u1_00","u1_11","u1_12","u1_13","u1_15","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_4"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_five() {
    let field = "field"
    let per = "login"
    var cell = 15;
    let game_id = "game_id"
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<5 && user>2){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=5;
                //alert(user)
                stay_v("u1_15", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_16","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_5"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_six() {
    let field = "field"
    let per = "login"
    var cell = 16;
    let game_id = "game_id"
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<6 && user>3){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=6;
                //alert(user)
                stay_v("u1_16", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_17","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_6"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_seven() {
    let field = "field"
    let per = "login"
    var cell = 17;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<7 && user>4){

        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=7;
                //alert(user)
                stay_v("u1_17", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_18","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")

                resurse = "resurse_1_7"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }

}

function one_eith() {
    let field = "field"
    let per = "login"
    var cell = 18;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<8 && user>5){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=8;
                //alert(user)
                stay_v("u1_18", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_8"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_nine() {
    let field = "field"
    let per = "login"
    var cell = 19;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<9 && user>6){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=9;
                //alert(user)
                stay_v("u1_19", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_9"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_ten() {
    let game_id = "game_id"
    let field = "field"
    let per = "login"
    var cell = '20';
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<10 && user>5){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=10;
                //alert(user)
                stay_v("u1_1a", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_21", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_1_10"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_one() {
    let field = "field"
    let per = "login"
    var cell = 21;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user==7 || user==6){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=30;
                //alert(user)
                stay_v("u1_21", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_22", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_2_1"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_two() {
    let field = "field"
    let per = "login"
    var cell = 22;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<31){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=user+1;
                //alert(user)
                stay_v("u1_22", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_31", "u1_23", "u1_30")


                resurse = "resurse_2_2"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function two_free() {
    let field = "field"
    let per = "login"
    var cell = 23;
    var answer;
    let game_id = "game_id"
    var resourseID = 0;
    var numbRes = 0;
    if (user<32){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell)+"&login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=user+1;
                //alert(user)
                stay_v("u1_23", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_31", "u1_30")

                resurse = "resurse_2_3"
                answer = xmlhttp.responseText;

                document.cookie =resurse +"="+ answer

                var res_json = JSON.parse(getCookie(resurse));

                document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
                document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
                document.getElementById("m_count").innerHTML = res_json[1].countOfResources;



            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function tree_zero() {
    let game_id = "game_id"
    var cell = 30;
    var answer;
    let per = "login"
    var resourseID = 0;
    var numbRes = 0;
    if (user==8 || user==9|| user==10){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','finish', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=45;
                //alert(user)
                stay_v("u1_30", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_31")


                //player_place();
                let value = xmlhttp.responseText;
                if (value==="true"){
                    win();
                }else {
                    document.getElementById("wrapper_34_h1").innerHTML="Поздравляю! Вы дошли до финиша. Ждем других игроков"
                    document.getElementById("wrapper_34").classList.remove("dis_none");
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
    let game_id = "game_id"
    var cell = 31;
    var answer;
    let per = "login"
    var resourseID = 0;
    var numbRes = 0;
    if (user==30 || user==31|| user==32 || user==33){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','finish', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("login="+getCookie(per)+"&gameId="+getCookie(game_id));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=45;
                //alert(user)

                stay_v("u1_31", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_30")
                //player_place();
                let value = xmlhttp.responseText;
                if (value==="true"){
                    win();
                }else {
                    document.getElementById("wrapper_34_h1").innerHTML="Поздравляю! Вы дошли до финиша. Ждем других игроков"
                    document.getElementById("wrapper_34").classList.remove("dis_none");
                }

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}


function player_place(){
    var login = document.cookie.slice(20, document.cookie.length);
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST','finish', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + encodeURIComponent(login));
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            let p_p = xmlhttp.responseText;

            let place = "place"

            document.cookie =place +"="+ p_p

        }else {

        }
    }
    win();
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

