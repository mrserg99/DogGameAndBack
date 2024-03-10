
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
    let field = "field"

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


     var var_json = JSON.parse(getCookie(field));

    if(var_json[0].cellId===11){
        get_cell(var_json[0].resourceId,var_json[0].countOfResources,"11_b","11_202","11_c","11_p1","11_p2","11_p3","11_p4");
    }
    if(var_json[1].cellId===12){
        get_cell(var_json[1].resourceId,var_json[1].countOfResources,"12_b","12_202","12_c","12_p1","12_p2","12_p3","12_p4");
    }


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

function get_cell(Res_id, count, i1,i2,i3,i4_p,i5_p,i6_p,i7_p){

    if (Res_id ===201){
        document.getElementById(i1).classList.remove("dis_none")
    }else if (Res_id ===202){
        document.getElementById(i2).classList.remove("dis_none")
    }else if (Res_id ===203){
        document.getElementById(i3).classList.remove("dis_none")

    }

    if (count===1){
        document.getElementById(i4_p).classList.remove("dis_none")

    } else if (count===2){
        document.getElementById(i5_p).classList.remove("dis_none")

    } else if (count===3){
        document.getElementById(i6_p).classList.remove("dis_none")

    }else if (count===4){
        document.getElementById(i7_p).classList.remove("dis_none")

    }
}
