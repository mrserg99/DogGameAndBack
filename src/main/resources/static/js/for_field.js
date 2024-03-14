let settings = {
    myPosition: 0
}

function updateRecourse(recurse, result) {
    setValue(recurse, result)

    let res_json = JSON.parse(getValue(recurse));

    document.getElementById("b_count").innerHTML = res_json[0].countOfResources; //добавление ресурса
    document.getElementById("c_count").innerHTML = res_json[2].countOfResources;
    document.getElementById("m_count").innerHTML = res_json[1].countOfResources;

    if(getValue(storageVocabulary.is_single) === "true") {
        startSingleGame();
    } else {
        startGame();
    }
}

function move(element){
    let new_cell_id = element.id;

    if (settings.myPosition<=new_cell_id){
        deleteSquare(USER)
        createSquare(USER, new_cell_id, CARDBONUS, getValue(storageVocabulary.login))
        sendPostRequest('move',"position=" + encodeURIComponent(new_cell_id)+"&login="+getValue(storageVocabulary.login)+"&gameId="+getValue(storageVocabulary.game_id))
            .then(result => {
                settings.myPosition=new_cell_id

                let recurse = storageVocabulary.resurse_1_1

                updateRecourse(recurse, result);
            })
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function finishMessage() {
    document.getElementById("wrapper_34_h1").innerHTML = "Поздравляю! Вы дошли до финиша. Ждем других игроков"
    document.getElementById("wrapper_34").classList.remove("dis_none");
}

function tree_zero() {
    if (settings.myPosition===8 || settings.myPosition===9|| settings.myPosition===10){
        sendPostRequest('finish',"login="+getValue(storageVocabulary.login)+"&gameId="+getValue(storageVocabulary.game_id))
            .then(result => {
                settings.myPosition=45;
                stay_v("u1_30", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_31")
                if (result.responseText === "true"){
                    win();
                }else {
                    finishMessage()
                }
            })
    }else {
        alert("Вы можете передвинутся только вперед на 3 ближайшие клетки")
    }
}

function tree_one() {
    if (settings.myPosition===30 || settings.myPosition===31|| settings.myPosition===32 || settings.myPosition===33){
        sendPostRequest('finish',"login="+getValue(storageVocabulary.login)+"&gameId="+getValue(storageVocabulary.game_id))
            .then(result => {
                settings.myPosition=45;
                stay_v("u1_31", "u1_00","u1_11","u1_12","u1_13","u1_14","u1_15","u1_16","u1_17","u1_18", "u1_19", "u1_1a", "u1_21", "u1_22", "u1_23", "u1_30")
                if (result.response === "true"){
                    win();
                }else {
                    finishMessage();
                }
            })
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