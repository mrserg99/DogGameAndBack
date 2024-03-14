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

function checkPosition(old_cell_position, new_cell_id) {
    if(old_cell_position === 0){
        return old_cell_position < new_cell_id
            && (new_cell_id === 11 || new_cell_id === 12)
    }

    if(old_cell_position <= 16){
        return old_cell_position < new_cell_id
            && new_cell_id < old_cell_position + 3
    }

    if(old_cell_position === 17 || old_cell_position === 18){
        return old_cell_position < new_cell_id
            && (new_cell_id < old_cell_position + 3 || new_cell_id === 21)
    }

    if(old_cell_position >= 19){
        return old_cell_position < new_cell_id
            && (new_cell_id < old_cell_position + 3 || new_cell_id === 30)
    }

    if(old_cell_position >= 21){
        return old_cell_position < new_cell_id
            && (new_cell_id < old_cell_position + 3 || new_cell_id === 31)
    }

    return false;
}

function move(element){
    let new_cell_id = Number(element.id);

    if (checkPosition(settings.myPosition, new_cell_id)){
        deleteSquare(USER)
        createSquare(USER, new_cell_id, CARDBONUS, getValue(storageVocabulary.login))
        sendPostRequest('move',"position=" + encodeURIComponent(new_cell_id)+"&login="+getValue(storageVocabulary.login)+"&gameId="+getValue(storageVocabulary.game_id))
            .then(result => {
                settings.myPosition=new_cell_id

                let recurse = storageVocabulary.resurse_1_1

                updateRecourse(recurse, result);
            })
    }else {
        alert("Вы можете передвинутся только вперед на 2 ближайшие клетки")
    }
}

function finishMessage() {
    document.getElementById("wrapper_34_h1").innerHTML = "Поздравляю! Вы дошли до финиша. Ждем других игроков"
    document.getElementById("wrapper_34").classList.remove("dis_none");
}

function waitFinishOverPlayers() {
    finishMessage()

    let timerId = setTimeout(function checkGameTimer() {
        checkGameFinish().then(function () {
            if (getValue(storageVocabulary.all_finish) === "true") {
                win()
                clearTimeout(timerId);
            } else {
                timerId = setTimeout(checkGameTimer, 1000)
            }
        })
    }, 0);
}

function finish(element){
    let new_cell_id = Number(element.id);

    if (checkPosition(settings.myPosition, new_cell_id)){
        deleteSquare(USER)
        createFinishSquare(USER, new_cell_id, getValue(storageVocabulary.login))
        sendPostRequest('finish',"position=" + encodeURIComponent(new_cell_id)+"&login="+getValue(storageVocabulary.login)+"&gameId="+getValue(storageVocabulary.game_id))
            .then(result => {
                if (result.responseText === "true"){
                    win();
                }else {
                    waitFinishOverPlayers()
                }
            })
    }else {
        alert("Вы можете передвинутся только вперед на 2 ближайшие клетки")
    }
}

function win() {
    window.location.href = 'win.html';
}