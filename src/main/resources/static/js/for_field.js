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

function codeAddress() {


    var load_11 = 11; // Считываем значение
    var resourseID_11;
    var answer_11;
    var numbRes_11;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_11', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_11)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            // alert("Oops!")
        } else { // если всё прошло гладко, выводим результат


            answer_11 = xmlhttp.responseText;
            resourseID_11 = answer_11.substring(0, 2); //ID ресурса 3 цифры
            numbRes_11 = answer_11.substring(2, 3);
            if (parseInt(resourseID_11) === 201) {
                document.getElementById("11_c").element.style.cssText('display: none');
                document.getElementById("11_b").element.style.cssText('display: block');
                if (parseInt(numbRes_11) === 1) {
                    document.getElementById("11_p1").element.style.cssText('display: block');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 2) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: block');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 3) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: block');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 4) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_11) === 203) {
                document.getElementById("11_b").element.style.cssText('display: none');
                document.getElementById("11_c").element.style.cssText('display: block');
                if (parseInt(numbRes_11) === 1) {
                    document.getElementById("11_p1").element.style.cssText('display: block');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 2) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: block');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 3) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: block');
                    document.getElementById("11_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_11) === 4) {
                    document.getElementById("11_p1").element.style.cssText('display: none');
                    document.getElementById("11_p2").element.style.cssText('display: none');
                    document.getElementById("11_p3").element.style.cssText('display: none');
                    document.getElementById("11_p4").element.style.cssText('display: block');
                }
            }
        }
    }

    var load_12 = 12; // Считываем значение
    var resourseID_12;
    var answer_12;
    var numbRes_12;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_12', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_12)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //  alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_12 = xmlhttp.responseText;
            resourseID_12 = answer_12.substring(0, 2); //ID ресурса 3 цифры
            numbRes_12 = answer_12.substring(2, 3);
            if (parseInt(resourseID_12) === 201) {
                document.getElementById("12_c").element.style.cssText('display: none');
                document.getElementById("12_b").element.style.cssText('display: block');
                if (parseInt(numbRes_12) === 1) {
                    document.getElementById("12_p1").element.style.cssText('display: block');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 2) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: block');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 3) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: block');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 4) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_12) === 203) {
                document.getElementById("12_b").element.style.cssText('display: none');
                document.getElementById("12_c").element.style.cssText('display: block');
                if (parseInt(numbRes_12) === 1) {
                    document.getElementById("12_p1").element.style.cssText('display: block');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 2) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: block');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 3) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: block');
                    document.getElementById("12_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_12) === 4) {
                    document.getElementById("12_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: none');
                    document.getElementById("12_p3").element.style.cssText('display: none');
                    document.getElementById("12_p4").element.style.cssText('display: block');
                }
            }
        }
    }

    var load_13 = 13; // Считываем значение
    var resourseID_13;
    var answer_13;
    var numbRes_13;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_13', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_13)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //  alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_13 = xmlhttp.responseText;
            resourseID_13 = answer_13.substring(0, 2); //ID ресурса 3 цифры
            numbRes_13 = answer_13.substring(2, 3);
            if (parseInt(resourseID_13) === 201) {
                document.getElementById("13_c").element.style.cssText('display: none');
                document.getElementById("13_b").element.style.cssText('display: block');
                if (parseInt(numbRes_13) === 1) {
                    document.getElementById("13_p1").element.style.cssText('display: block');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 2) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: block');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 3) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: block');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 4) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_13) === 203) {
                document.getElementById("13_b").element.style.cssText('display: none');
                document.getElementById("13_c").element.style.cssText('display: block');
                if (parseInt(numbRes_13) === 1) {
                    document.getElementById("13_p1").element.style.cssText('display: block');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 2) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: block');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 3) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: block');
                    document.getElementById("13_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_13) === 4) {
                    document.getElementById("13_p1").element.style.cssText('display: none');
                    document.getElementById("13_p2").element.style.cssText('display: none');
                    document.getElementById("13_p3").element.style.cssText('display: none');
                    document.getElementById("13_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_14 = 14; // Считываем значение
    var resourseID_14;
    var answer_14;
    var numbRes_14;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_14', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_14)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //  alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_14 = xmlhttp.responseText;
            resourseID_14 = answer_14.substring(0, 2); //ID ресурса 3 цифры
            numbRes_14 = answer_14.substring(2, 3);
            if (parseInt(resourseID_14) === 201) {
                document.getElementById("14_c").element.style.cssText('display: none');
                document.getElementById("14_b").element.style.cssText('display: block');
                if (parseInt(numbRes_14) === 1) {
                    document.getElementById("14_p1").element.style.cssText('display: block');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 2) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: block');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 3) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: block');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 4) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_14) === 203) {
                document.getElementById("14_b").element.style.cssText('display: none');
                document.getElementById("14_c").element.style.cssText('display: block');
                if (parseInt(numbRes_14) === 1) {
                    document.getElementById("14_p1").element.style.cssText('display: block');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 2) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: block');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 3) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: block');
                    document.getElementById("14_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_14) === 4) {
                    document.getElementById("14_p1").element.style.cssText('display: none');
                    document.getElementById("14_p2").element.style.cssText('display: none');
                    document.getElementById("14_p3").element.style.cssText('display: none');
                    document.getElementById("14_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_15 = 15; // Считываем значение
    var resourseID_15;
    var answer_15;
    var numbRes_15;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_15', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_15)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //    alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_15 = xmlhttp.responseText;
            resourseID_15 = answer_15.substring(0, 2); //ID ресурса 3 цифры
            numbRes_15 = answer_15.substring(2, 3);
            if (parseInt(resourseID_15) === 201) {
                document.getElementById("15_c").element.style.cssText('display: none');
                document.getElementById("15_b").element.style.cssText('display: block');
                if (parseInt(numbRes_15) === 1) {
                    document.getElementById("15_p1").element.style.cssText('display: block');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 2) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: block');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 3) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: block');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 4) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_15) === 203) {
                document.getElementById("15_b").element.style.cssText('display: none');
                document.getElementById("15_c").element.style.cssText('display: block');
                if (parseInt(numbRes_15) === 1) {
                    document.getElementById("15_p1").element.style.cssText('display: block');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 2) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: block');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 3) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: block');
                    document.getElementById("15_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_15) === 4) {
                    document.getElementById("15_p1").element.style.cssText('display: none');
                    document.getElementById("15_p2").element.style.cssText('display: none');
                    document.getElementById("15_p3").element.style.cssText('display: none');
                    document.getElementById("15_p4").element.style.cssText('display: block');
                }
            }
        }
    }
    var load_16 = 16; // Считываем значение
    var resourseID_16;
    var answer_16;
    var numbRes_16;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_16', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_16)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //   alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_16 = xmlhttp.responseText;
            resourseID_16 = answer_16.substring(0, 2); //ID ресурса 3 цифры
            numbRes_16 = answer_16.substring(2, 3);
            if (parseInt(resourseID_16) === 201) {
                document.getElementById("16_c").element.style.cssText('display: none');
                document.getElementById("16_b").element.style.cssText('display: block');
                if (parseInt(numbRes_16) === 1) {
                    document.getElementById("16_p1").element.style.cssText('display: block');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 2) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: block');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 3) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: block');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 4) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_13) === 203) {
                document.getElementById("16_b").element.style.cssText('display: none');
                document.getElementById("16_c").element.style.cssText('display: block');
                if (parseInt(numbRes_16) === 1) {
                    document.getElementById("16_p1").element.style.cssText('display: block');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 2) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: block');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 3) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: block');
                    document.getElementById("16_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_16) === 4) {
                    document.getElementById("16_p1").element.style.cssText('display: none');
                    document.getElementById("16_p2").element.style.cssText('display: none');
                    document.getElementById("16_p3").element.style.cssText('display: none');
                    document.getElementById("16_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_17 = 17; // Считываем значение
    var resourseID_17;
    var answer_17;
    var numbRes_17;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_17', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_13)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //    alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_17 = xmlhttp.responseText;
            resourseID_17 = answer_17.substring(0, 2); //ID ресурса 3 цифры
            numbRes_17 = answer_17.substring(2, 3);
            if (parseInt(resourseID_17) === 201) {
                document.getElementById("17_c").element.style.cssText('display: none');
                document.getElementById("17_b").element.style.cssText('display: block');
                if (parseInt(numbRes_17) === 1) {
                    document.getElementById("17_p1").element.style.cssText('display: block');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 2) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: block');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 3) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: block');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 4) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_13) === 203) {
                document.getElementById("17_b").element.style.cssText('display: none');
                document.getElementById("17_c").element.style.cssText('display: block');
                if (parseInt(numbRes_17) === 1) {
                    document.getElementById("17_p1").element.style.cssText('display: block');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 2) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: block');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 3) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: block');
                    document.getElementById("17_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_17) === 4) {
                    document.getElementById("17_p1").element.style.cssText('display: none');
                    document.getElementById("17_p2").element.style.cssText('display: none');
                    document.getElementById("17_p3").element.style.cssText('display: none');
                    document.getElementById("17_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_18 = 18; // Считываем значение
    var resourseID_18;
    var answer_18;
    var numbRes_18;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_18', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_18)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //    alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_18 = xmlhttp.responseText;
            resourseID_18 = answer_18.substring(0, 2); //ID ресурса 3 цифры
            numbRes_18 = answer_18.substring(2, 3);
            if (parseInt(resourseID_18) === 201) {
                document.getElementById("18_c").element.style.cssText('display: none');
                document.getElementById("18_b").element.style.cssText('display: block');
                if (parseInt(numbRes_18) === 1) {
                    document.getElementById("18_p1").element.style.cssText('display: block');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 2) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: block');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 3) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: block');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 4) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_18) === 203) {
                document.getElementById("18_b").element.style.cssText('display: none');
                document.getElementById("18_c").element.style.cssText('display: block');
                if (parseInt(numbRes_18) === 1) {
                    document.getElementById("18_p1").element.style.cssText('display: block');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 2) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: block');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 3) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: block');
                    document.getElementById("18_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_18) === 4) {
                    document.getElementById("18_p1").element.style.cssText('display: none');
                    document.getElementById("18_p2").element.style.cssText('display: none');
                    document.getElementById("18_p3").element.style.cssText('display: none');
                    document.getElementById("18_p4").element.style.cssText('display: block');
                }
            }
        }
    }

    var load_19 = 19; // Считываем значение
    var resourseID_19;
    var answer_19;
    var numbRes_19;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_19', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_19)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //   alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_19 = xmlhttp.responseText;
            resourseID_19 = answer_19.substring(0, 2); //ID ресурса 3 цифры
            numbRes_19 = answer_19.substring(2, 3);
            if (parseInt(resourseID_19) === 201) {
                document.getElementById("19_c").element.style.cssText('display: none');
                document.getElementById("19_b").element.style.cssText('display: block');
                if (parseInt(numbRes_19) === 1) {
                    document.getElementById("19_p1").element.style.cssText('display: block');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 2) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: block');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 3) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: block');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 4) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_19) === 203) {
                document.getElementById("19_b").element.style.cssText('display: none');
                document.getElementById("19_c").element.style.cssText('display: block');
                if (parseInt(numbRes_19) === 1) {
                    document.getElementById("19_p1").element.style.cssText('display: block');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 2) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: block');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 3) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: block');
                    document.getElementById("19_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_19) === 4) {
                    document.getElementById("19_p1").element.style.cssText('display: none');
                    document.getElementById("19_p2").element.style.cssText('display: none');
                    document.getElementById("19_p3").element.style.cssText('display: none');
                    document.getElementById("19_p4").element.style.cssText('display: block');
                }
            }
        }
    }

    var load_1a = '1a'; // Считываем значение
    var resourseID_1a;
    var answer_1a;
    var numbRes_1a;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_1a', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_1a)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //  alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_1a = xmlhttp.responseText;
            resourseID_1a = answer_1a.substring(0, 2); //ID ресурса 3 цифры
            numbRes_1a = answer_1a.substring(2, 3);
            if (parseInt(resourseID_1a) === 201) {
                document.getElementById("1a_c").element.style.cssText('display: none');
                document.getElementById("1a_b").element.style.cssText('display: block');
                if (parseInt(numbRes_1a) === 1) {
                    document.getElementById("1a_p1").element.style.cssText('display: block');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 2) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: block');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 3) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: block');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 4) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_1a) === 203) {
                document.getElementById("1a_b").element.style.cssText('display: none');
                document.getElementById("1a_c").element.style.cssText('display: block');
                if (parseInt(numbRes_13) === 1) {
                    document.getElementById("1a_p1").element.style.cssText('display: block');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 2) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: block');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 3) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: block');
                    document.getElementById("1a_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_1a) === 4) {
                    document.getElementById("1a_p1").element.style.cssText('display: none');
                    document.getElementById("1a_p2").element.style.cssText('display: none');
                    document.getElementById("1a_p3").element.style.cssText('display: none');
                    document.getElementById("1a_p4").element.style.cssText('display: block');
                }
            }
        }
    }

    var load_21 = 21; // Считываем значение
    var resourseID_21;
    var answer_21;
    var numbRes_21;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_21', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_21)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //  alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_21 = xmlhttp.responseText;
            resourseID_21 = answer_21.substring(0, 2); //ID ресурса 3 цифры
            numbRes_21 = answer_21.substring(2, 3);
            if (parseInt(resourseID_21) === 201) {
                document.getElementById("21_c").element.style.cssText('display: none');
                document.getElementById("21_b").element.style.cssText('display: block');
                if (parseInt(numbRes_21) === 1) {
                    document.getElementById("21_p1").element.style.cssText('display: block');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 2) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: block');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 3) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: block');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 4) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_13) === 203) {
                document.getElementById("21_b").element.style.cssText('display: none');
                document.getElementById("21_c").element.style.cssText('display: block');
                if (parseInt(numbRes_21) === 1) {
                    document.getElementById("21_p1").element.style.cssText('display: block');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 2) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: block');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 3) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: block');
                    document.getElementById("21_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_21) === 4) {
                    document.getElementById("21_p1").element.style.cssText('display: none');
                    document.getElementById("21_p2").element.style.cssText('display: none');
                    document.getElementById("21_p3").element.style.cssText('display: none');
                    document.getElementById("21_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_22 = 22; // Считываем значение
    var resourseID_22;
    var answer_22;
    var numbRes_22;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_22', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_22)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //   alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_22 = xmlhttp.responseText;
            resourseID_22 = answer_22.substring(0, 2); //ID ресурса 3 цифры
            numbRes_22 = answer_22.substring(2, 3);
            if (parseInt(resourseID_22) === 201) {
                document.getElementById("22_c").element.style.cssText('display: none');
                document.getElementById("22_b").element.style.cssText('display: block');
                if (parseInt(numbRes_22) === 1) {
                    document.getElementById("22_p1").element.style.cssText('display: block');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 2) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: block');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 3) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: block');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 4) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_22) === 203) {
                document.getElementById("22_b").element.style.cssText('display: none');
                document.getElementById("22_c").element.style.cssText('display: block');
                if (parseInt(numbRes_22) === 1) {
                    document.getElementById("22_p1").element.style.cssText('display: block');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 2) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: block');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 3) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: block');
                    document.getElementById("22_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_22) === 4) {
                    document.getElementById("22_p1").element.style.cssText('display: none');
                    document.getElementById("22_p2").element.style.cssText('display: none');
                    document.getElementById("22_p3").element.style.cssText('display: none');
                    document.getElementById("22_p4").element.style.cssText('display: block');
                }
            }
        }
    }


    var load_23 = 23; // Считываем значение
    var resourseID_23;
    var answer_23;
    var numbRes_23;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '/service/load_23', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("load" + encodeURIComponent(load_23)); // Отправляем POST-запрос
    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //     alert("Oops!")
        } else { // если всё прошло гладко, выводим результат

            answer_23 = xmlhttp.responseText;
            resourseID_23 = answer_23.substring(0, 2); //ID ресурса 3 цифры
            numbRes_23 = answer_23.substring(2, 3);
            if (parseInt(resourseID_23) === 201) {
                document.getElementById("23_c").element.style.cssText('display: none');
                document.getElementById("23_b").element.style.cssText('display: block');
                if (parseInt(numbRes_23) === 1) {
                    document.getElementById("23_p1").element.style.cssText('display: block');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 2) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("12_p2").element.style.cssText('display: block');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 3) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: block');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 4) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: block');
                }
            } else if (parseInt(resourseID_23) === 203) {
                document.getElementById("23_b").element.style.cssText('display: none');
                document.getElementById("23_c").element.style.cssText('display: block');
                if (parseInt(numbRes_23) === 1) {
                    document.getElementById("23_p1").element.style.cssText('display: block');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 2) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("23_p2").element.style.cssText('display: block');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 3) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: block');
                    document.getElementById("23_p4").element.style.cssText('display: none');
                } else if (parseInt(numbRes_23) === 4) {
                    document.getElementById("23_p1").element.style.cssText('display: none');
                    document.getElementById("23_p2").element.style.cssText('display: none');
                    document.getElementById("23_p3").element.style.cssText('display: none');
                    document.getElementById("23_p4").element.style.cssText('display: block');
                }
            }
        }
    }
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
     

   // var flag = 0;
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

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_five() {
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

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function one_ten() {
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

            } else {
                alert("serv trouble")
            }
        }
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

