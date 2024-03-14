function creatResources() {
    let cells = JSON.parse(getValue(storageVocabulary.field))["cells"];

    for (let i = 0; i<cells.length; i++){
        let cell = cells[i]
        printRecourse(cell.cellId, cell.resourceId, cell.countOfResources)
    }
}

function name() {
    document.getElementById("user_name").innerHTML = getValue(storageVocabulary.login) + "\u{1F43E}";
}

function activateField() {
    document.getElementById("wrapper_34_h1").innerHTML = "Ваш ход"
    document.getElementById("wrapper_34").classList.add("dis_none")
}

function deactivateField() {
    document.getElementById("wrapper_34_h1").innerHTML = "Ход соперника"
    document.getElementById("wrapper_34").classList.remove("dis_none")
}

function deleteEnemyImegeInSingleGame() {
    document.getElementById("u2_00").classList.add("nothing")
    document.getElementById("k2").classList.add("nothing")
}

function createSquare(how, new_cell_id, clazz, login) {
    document.getElementById(new_cell_id)
        .getElementsByClassName(clazz).item(0)
        .insertAdjacentHTML('afterend',
            "<div class='player' id='" + how + "'>" +
            "<div class='user_p'/>" +
            "<p class='user_p_name'>" + login + "</p>" +
            "</div>"
        )
}

function createStartSquare(how, login){
    document.getElementById("00")
        .insertAdjacentHTML('afterend',
            "<div class='you' id='" + how + "'>" +
                    "<div class='user'/>" +
                    "<p class='user_name'>" + login + "</p>" +
                "</div>"
        )
}

function createFinishSquare(how, finish_id, login) {
    document.getElementById(finish_id)
        .insertAdjacentHTML('afterend',
            "<div class='player' id='" + how + "'>" +
                    "<div class='user_p'/>" +
                    "<p class='user_p_name'>" + login + "</p>" +
                "</div>"
        )
}

function deleteSquare(how) {
    document.getElementById(how).remove()
}

function printRecourse(cell_id, recourse_id, count){
    document.getElementById(cell_id)
        .getElementsByClassName(CARDBONUS)
        .item(0).insertAdjacentHTML('afterbegin',
        "<img src='../img/bouns/"+recourse_id+".png' class='card_bonus_img'>"
            + "<div class='card_bonus_text'>+"+count+"</div>"
    )
}