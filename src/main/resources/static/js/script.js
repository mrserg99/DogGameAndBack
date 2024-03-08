
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
    document.getElementById("user_name").innerHTML =  document.cookie.slice(14, document.cookie.length)+"\u{1F43E}";
}
function uname(){
    //id="u00_name" class="user_name"
    document.getElementById("u00_name").innerHTML =  document.cookie.slice(14, document.cookie.length);
    document.getElementById("u11_name").innerHTML =  document.cookie.slice(14, document.cookie.length);
    document.getElementById("u12_name").innerHTML =  document.cookie.slice(14, document.cookie.length);

}




function single() {
    window.location.href = 'game_field.html';

}