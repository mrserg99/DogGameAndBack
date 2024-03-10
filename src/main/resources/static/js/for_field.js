//@import("core")



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

            document.getElementById("u1_11").classList.remove("nothing");
            document.getElementById("u1_12").classList.add("nothing");
            document.getElementById("u1_13").classList.add("nothing");
            document.getElementById("u1_14").classList.add("nothing");
            document.getElementById("u1_15").classList.add("nothing");
            document.getElementById("u1_16").classList.add("nothing");
            document.getElementById("u1_17").classList.add("nothing");
            document.getElementById("u1_18").classList.add("nothing");
            document.getElementById("u1_19").classList.add("nothing");
            document.getElementById("u1_1A").classList.add("nothing");

            document.getElementById("u1_21").classList.add("nothing");
            document.getElementById("u1_22").classList.add("nothing");
            document.getElementById("u1_23").classList.add("nothing");

            document.getElementById("u1_31").classList.add("nothing");
            document.getElementById("u1_30").classList.add("nothing");
            document.getElementById("u1_00").classList.add("nothing");
        }
    }
}

function one_one() {
    var cell = 11;
    let field = "field"
    var var_json = JSON.parse(getCookie(field));

    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<=0){
       // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=1
               // alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.remove("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");


                addRes(var_json[0].resourceId,var_json[0].countOfResources);


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
    var var_json = JSON.parse(getCookie(field));
    var cell = 12;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<2){
       // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=2;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.remove("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[1].resourceId,var_json[1].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 13;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<3){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=3;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.remove("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[2].resourceId,var_json[2].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 14;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<4 && user>1){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=4;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.remove("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[3].resourceId,var_json[3].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));

    var cell = 15;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<5 && user>2){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=5;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.remove("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[4].resourceId,var_json[4].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 16;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<6 && user>3){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=6;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.remove("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[5].resourceId,var_json[5].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 17;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<7 && user>4){

        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=7;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.remove("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[6].resourceId,var_json[6].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 18;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<8 && user>5){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=8;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.remove("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[7].resourceId,var_json[7].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));

    var cell = 19;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<9 && user>6){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=9;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.remove("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[8].resourceId,var_json[8].countOfResources);

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_ten() {

    let field = "field"
    var var_json = JSON.parse(getCookie(field));

    var cell = '1a';
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<10 && user>5){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=10;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.remove("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[9].resourceId,var_json[9].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));

    var cell = 21;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user==7 || user==6){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=30;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.remove("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[10].resourceId,var_json[10].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 22;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<31){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=user+1;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.remove("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[11].resourceId,var_json[11].countOfResources);

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
    var var_json = JSON.parse(getCookie(field));
    var cell = 23;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user<32){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=user+1;
                //alert(user)
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.remove("nothing");

                document.getElementById("u1_31").classList.add("nothing");
                document.getElementById("u1_30").classList.add("nothing");

                addRes(var_json[12].resourceId,var_json[12].countOfResources);

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function tree_zero() {
    var cell = 30;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user==8 || user==9|| user==10){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=45;
                //alert(user)
                document.getElementById("u1_30").classList.remove("nothing");
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_31").classList.add("nothing");


                answer = xmlhttp.responseText;
                resourseID = answer.substring(0, 2); //ID ресурса 3 цифры
                numbRes = answer.substring(2, 3); //количество которое нужно прибавлять 1 цифра
                if (parseInt(resourseID) === 201) {//проверка на ID ресурса
                    document.getElementById("b_count").innerHTML = +parseInt(numbRes); //добавление ресурса
                } else {
                    if (parseInt(resourseID) === 203) {
                        document.getElementById("c_count").innerHTML = +parseInt(numbRes);
                    }
                }
                player_place();

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function tree_one() {
    var cell = 31;
    var answer;
    var resourseID = 0;
    var numbRes = 0;
    if (user==30 || user==31|| user==32 || user==33){
        // alert(user)
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        xmlhttp.open('POST','move', true); // Открываем асинхронное соединение
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
        xmlhttp.send("position=" + encodeURIComponent(cell));
        xmlhttp.onload = function () {
            if (xmlhttp.status === 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                user=45;
                //alert(user)
                document.getElementById("u1_31").classList.remove("nothing");
                document.getElementById("u1_00").classList.add("nothing");
                document.getElementById("u1_11").classList.add("nothing");
                document.getElementById("u1_12").classList.add("nothing");
                document.getElementById("u1_13").classList.add("nothing");
                document.getElementById("u1_14").classList.add("nothing");
                document.getElementById("u1_15").classList.add("nothing");
                document.getElementById("u1_16").classList.add("nothing");
                document.getElementById("u1_17").classList.add("nothing");
                document.getElementById("u1_18").classList.add("nothing");
                document.getElementById("u1_19").classList.add("nothing");
                document.getElementById("u1_1a").classList.add("nothing");

                document.getElementById("u1_21").classList.add("nothing");
                document.getElementById("u1_22").classList.add("nothing");
                document.getElementById("u1_23").classList.add("nothing");

                document.getElementById("u1_30").classList.add("nothing");


                answer = xmlhttp.responseText;
                resourseID = answer.substring(0, 2); //ID ресурса 3 цифры
                numbRes = answer.substring(2, 3); //количество которое нужно прибавлять 1 цифра
                if (parseInt(resourseID) === 201) {//проверка на ID ресурса
                    document.getElementById("b_count").innerHTML = +parseInt(numbRes); //добавление ресурса
                } else {
                    if (parseInt(resourseID) === 203) {
                        document.getElementById("c_count").innerHTML = +parseInt(numbRes);
                    }
                }
                player_place();

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

function addRes(resId, count){
    let p201 = document.getElementById('b_count')
    let p202= document.getElementById('m_count')
    let p203= document.getElementById('c_count')

    if (resId === 201) {//проверка на ID ресурса

        document.getElementById("b_count").innerHTML = parseInt(p201.value) +count; //добавление ресурса
    }
    if (resId === 202) {
        document.getElementById("m_count").innerHTML =parseInt( p202.value) +count;
    }
    if (resId === 203) {
        document.getElementById("c_count").innerHTML = parseInt(p203.value) +count;
    }
}

function win() {
    window.location.href = 'win.html';
}

