
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
    let per = "login"
    document.getElementById("user_name").innerHTML =  getCookie(per)+"\u{1F43E}";

}
function uname(){

    let per = "login"


    document.getElementById("u00_name").innerHTML =  getCookie(per);
    document.getElementById("u11_name").innerHTML =  getCookie(per);
    document.getElementById("u12_name").innerHTML =  getCookie(per);
    document.getElementById("u13_name").innerHTML =  getCookie(per);
    document.getElementById("u14_name").innerHTML =  getCookie(per);
    document.getElementById("u15_name").innerHTML =  getCookie(per);
    document.getElementById("u16_name").innerHTML =  getCookie(per);
    document.getElementById("u17_name").innerHTML =  getCookie(per);
    document.getElementById("u18_name").innerHTML =  getCookie(per);
    document.getElementById("u19_name").innerHTML =  getCookie(per);
    document.getElementById("u1a_name").innerHTML =  getCookie(per);

    document.getElementById("u21_name").innerHTML =  getCookie(per);
    document.getElementById("u22_name").innerHTML =  getCookie(per);
    document.getElementById("u23_name").innerHTML =  getCookie(per);

    document.getElementById("u30_name").innerHTML =  getCookie(per);
    document.getElementById("u31_name").innerHTML =  getCookie(per);


    //let arr = getCookie(field)

    get_one_one()


    document.getElementById("wrapper_34").classList.add("dis_none")

}




function single() {
    // alert(user)
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('GET','game', true); // Открываем асинхронное соединение
    xmlhttp.send();
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            let field = "field"
            let text = xmlhttp.responseText;
            document.cookie = field+"="+ text
            window.location.href = 'game_field.html';
        }
    }
}


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function get_one_one(){
    let field = "field"

    if (getCookie(field).slice(27,30)==="201"){
        document.getElementById("11_b").classList.remove("dis_none")
    }else if(getCookie(field).slice(27,30)==="202"){
        document.getElementById("11_202").classList.remove("dis_none")
    }else if(getCookie(field).slice(27,30)==="203"){
        document.getElementById("11_c").classList.remove("dis_none")

    }

    if (getCookie(field).slice(50,51)==="1"){
        document.getElementById("11_p1").classList.remove("dis_none")

    } else if((getCookie(field).slice(50,51)==="2")){
        document.getElementById("11_p2").classList.remove("dis_none")

    } else if((getCookie(field).slice(50,51)==="3")){
        document.getElementById("11_p3").classList.remove("dis_none")

    }else if(getCookie(field).slice(50,51)==="4"){
        document.getElementById("11_p4").classList.remove("dis_none")

    }
}