
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
    if(var_json[2].cellId===13){
        get_cell(var_json[2].resourceId,var_json[2].countOfResources,"13_b","13_202","13_c","13_p1","13_p2","13_p3","13_p4");
    }
    if(var_json[3].cellId===14){
        get_cell(var_json[3].resourceId,var_json[3].countOfResources,"14_b","14_202","14_c","14_p1","14_p2","14_p3","14_p4");
    }

    if(var_json[4].cellId===15){
        get_cell(var_json[4].resourceId,var_json[4].countOfResources,"15_b","15_202","15_c","15_p1","15_p2","15_p3","15_p4");
    }

    if(var_json[5].cellId===16){
        get_cell(var_json[5].resourceId,var_json[5].countOfResources,"16_b","16_202","16_c","16_p1","16_p2","16_p3","16_p4");
    }

    if(var_json[6].cellId===17){
        get_cell(var_json[6].resourceId,var_json[6].countOfResources,"17_b","17_202","17_c","17_p1","17_p2","17_p3","17_p4");
    }

    if(var_json[7].cellId===18){
        get_cell(var_json[7].resourceId,var_json[7].countOfResources,"18_b","18_202","18_c","18_p1","18_p2","18_p3","18_p4");
    }

    if(var_json[8].cellId===19){
        get_cell(var_json[8].resourceId,var_json[8].countOfResources,"19_b","19_202","19_c","19_p1","19_p2","19_p3","19_p4");
    }

    if(var_json[9].cellId===20){
        get_cell(var_json[9].resourceId,var_json[9].countOfResources,"1a_b","1a_202","1a_c","1a_p1","1a_p2","1a_p3","1a_p4");
    }

    if(var_json[10].cellId===21){
        get_cell(var_json[10].resourceId,var_json[10].countOfResources,"21_b","21_202","21_c","21_p1","21_p2","21_p3","21_p4");
    }

    if(var_json[11].cellId===22){
        get_cell(var_json[11].resourceId,var_json[11].countOfResources,"22_b","22_202","22_c","22_p1","22_p2","22_p3","22_p4");
    }

    if(var_json[12].cellId===23){
        get_cell(var_json[12].resourceId,var_json[12].countOfResources,"23_b","23_202","23_c","23_p1","23_p2","23_p3","23_p4");
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
