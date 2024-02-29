/*Смена картинки*/
var total_pics_num = 5; // колличество изображений
var interval = 5000; // задержка между изображениями
var time_out = 1; // задержка смены изображений
var i = 0;
var timeout;
var opacity = 100;
let name22 ="o";

function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity / 100;
    document.getElementById(image_now).style.filter = 'alpha(opacity=' + opacity + ')';
    document.getElementById(image_next).style.opacity = (100 - opacity) / 100;
    document.getElementById(image_next).style.filter = 'alpha(opacity=' + (100 - opacity) + ')';
    timeout = setTimeout("fade_to_next()", time_out);
    if (opacity == 1) {
        opacity = 100;
        clearTimeout(timeout);
    }
}


setInterval(
    function () {
        i++;
        if (i > total_pics_num) i = 1;
        fade_to_next();
    }, interval
);
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
var uName = uName||function log() {
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
           //window.userName= xmlhttp.responseText;

            name22=xmlhttp.responseText;


          //  user_name = xmlhttp.responseText;
            // window.user_name;
            window.location.href = 'main.html';
        }
    }
}



function name() {
    document.getElementById("user_name").innerHTML = name22;
}




function single() {
    window.location.href = 'game_field.html';

}