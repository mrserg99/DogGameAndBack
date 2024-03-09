@import("core")



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


            let login = "login"
            let value = xmlhttp.responseText;

            document.cookie =login +"="+ value

            window.location.href = 'main.html';
        }
    }
}



function name() {
   // document.getElementById("user_name").innerHTML =  document.cookie.slice(20, document.cookie.length)+"\u{1F43E}";
    //document.getElementById("user_name").innerHTML =  document.cookie.split("login=")+"\u{1F43E}";
    document.getElementById("user_name").innerHTML =  getCookie("login")+"\u{1F43E}";

}
function uname(){
    //id="u00_name" class="user_name"
    document.getElementById("u00_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u11_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u12_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u13_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u14_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u15_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u16_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u17_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u18_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u19_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u1a_name").innerHTML =  document.cookie.slice(20, document.cookie.length);


    document.getElementById("u21_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u22_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u23_name").innerHTML =  document.cookie.slice(20, document.cookie.length);

    document.getElementById("u30_name").innerHTML =  document.cookie.slice(20, document.cookie.length);
    document.getElementById("u31_name").innerHTML =  document.cookie.slice(20, document.cookie.length);

}




function single() {
    window.location.href = 'game_field.html';

}