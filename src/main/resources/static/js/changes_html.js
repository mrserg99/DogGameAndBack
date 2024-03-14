function creatFieldAndSetResource() {
    let cells = JSON.parse(getValue(storageVocabulary.field))["cells"];

    if (cells[0].cellId === 11) {
        printRecourseAndNumberOf(cells[0].resourceId, cells[0].countOfResources, "11_b", "11_202", "11_c", "11_p1", "11_p2", "11_p3", "11_p4");
    }
    if (cells[1].cellId === 12) {
        printRecourseAndNumberOf(cells[1].resourceId, cells[1].countOfResources, "12_b", "12_202", "12_c", "12_p1", "12_p2", "12_p3", "12_p4");
    }
    if (cells[2].cellId === 13) {
        printRecourseAndNumberOf(cells[2].resourceId, cells[2].countOfResources, "13_b", "13_202", "13_c", "13_p1", "13_p2", "13_p3", "13_p4");
    }
    if (cells[3].cellId === 14) {
        printRecourseAndNumberOf(cells[3].resourceId, cells[3].countOfResources, "14_b", "14_202", "14_c", "14_p1", "14_p2", "14_p3", "14_p4");
    }

    if (cells[4].cellId === 15) {
        printRecourseAndNumberOf(cells[4].resourceId, cells[4].countOfResources, "15_b", "15_202", "15_c", "15_p1", "15_p2", "15_p3", "15_p4");
    }

    if (cells[5].cellId === 16) {
        printRecourseAndNumberOf(cells[5].resourceId, cells[5].countOfResources, "16_b", "16_202", "16_c", "16_p1", "16_p2", "16_p3", "16_p4");
    }

    if (cells[6].cellId === 17) {
        printRecourseAndNumberOf(cells[6].resourceId, cells[6].countOfResources, "17_b", "17_202", "17_c", "17_p1", "17_p2", "17_p3", "17_p4");
    }

    if (cells[7].cellId === 18) {
        printRecourseAndNumberOf(cells[7].resourceId, cells[7].countOfResources, "18_b", "18_202", "18_c", "18_p1", "18_p2", "18_p3", "18_p4");
    }

    if (cells[8].cellId === 19) {
        printRecourseAndNumberOf(cells[8].resourceId, cells[8].countOfResources, "19_b", "19_202", "19_c", "19_p1", "19_p2", "19_p3", "19_p4");
    }

    if (cells[9].cellId === 20) {
        printRecourseAndNumberOf(cells[9].resourceId, cells[9].countOfResources, "1a_b", "1a_202", "1a_c", "1a_p1", "1a_p2", "1a_p3", "1a_p4");
    }

    if (cells[10].cellId === 21) {
        printRecourseAndNumberOf(cells[10].resourceId, cells[10].countOfResources, "21_b", "21_202", "21_c", "21_p1", "21_p2", "21_p3", "21_p4");
    }

    if (cells[11].cellId === 22) {
        printRecourseAndNumberOf(cells[11].resourceId, cells[11].countOfResources, "22_b", "22_202", "22_c", "22_p1", "22_p2", "22_p3", "22_p4");
    }

    if (cells[12].cellId === 23) {
        printRecourseAndNumberOf(cells[12].resourceId, cells[12].countOfResources, "23_b", "23_202", "23_c", "23_p1", "23_p2", "23_p3", "23_p4");
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

function printEnemyPosition() {
    if (getValue(storageVocabulary.enemy_position) === '11') {
        stay_v("u2_11", "u2_00", "u2_13", "u2_12", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '12') {
        stay_v("u2_12", "u2_00", "u2_11", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '13') {
        stay_v("u2_13", "u2_00", "u2_11", "u2_12", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '14') {
        stay_v("u2_14", "u2_00", "u2_11", "u2_12", "u2_13", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '15') {
        stay_v("u2_15", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '16') {
        stay_v("u2_16", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '17') {
        stay_v("u2_17", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '18') {
        stay_v("u2_18", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '20') {
        stay_v("u2_1a", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_21", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '21') {
        stay_v("u2_21", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_22", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '22') {
        stay_v("u2_22", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_31", "u2_23", "u2_30")
    }
    if (getValue(storageVocabulary.enemy_position) === '23') {
        stay_v("u2_23", "u2_00", "u2_11", "u2_12", "u2_13", "u2_14", "u2_15", "u2_16", "u2_17", "u2_18", "u2_19", "u2_1a", "u2_21", "u2_22", "u2_31", "u2_30")
    }
}

function deleteEnemyImegeInSingleGame() {
    document.getElementById("u2_00").classList.add("nothing")
    document.getElementById("k2").classList.add("nothing")
}

function printRecourseAndNumberOf(Res_id, count, i1, i2, i3, i4_p, i5_p, i6_p, i7_p) {
    if (Res_id === 201) {
        document.getElementById(i1).classList.remove("dis_none")
    } else if (Res_id === 202) {
        document.getElementById(i2).classList.remove("dis_none")
    } else if (Res_id === 203) {
        document.getElementById(i3).classList.remove("dis_none")
    }

    if (count === 1) {
        document.getElementById(i4_p).classList.remove("dis_none")

    } else if (count === 2) {
        document.getElementById(i5_p).classList.remove("dis_none")

    } else if (count === 3) {
        document.getElementById(i6_p).classList.remove("dis_none")

    } else if (count === 4) {
        document.getElementById(i7_p).classList.remove("dis_none")

    }
}

function printEnemyLogin(login) {
    document.getElementById("name_e1").innerHTML = login;

    document.getElementById("e00_name").innerHTML = login;
    document.getElementById("e11_name").innerHTML = login;
    document.getElementById("e12_name").innerHTML = login;
    document.getElementById("e13_name").innerHTML = login;
    document.getElementById("e14_name").innerHTML = login;
    document.getElementById("e15_name").innerHTML = login;
    document.getElementById("e16_name").innerHTML = login;
    document.getElementById("e17_name").innerHTML = login;
    document.getElementById("e18_name").innerHTML = login;
    document.getElementById("e19_name").innerHTML = login;
    document.getElementById("e1a_name").innerHTML = login;

    document.getElementById("e21_name").innerHTML = login;
    document.getElementById("e22_name").innerHTML = login;
    document.getElementById("e23_name").innerHTML = login;

    document.getElementById("e30_name").innerHTML = login;
    document.getElementById("e31_name").innerHTML = login;
}

function printUserLogin(login) {
    document.getElementById("u00_name").innerHTML = login;
    document.getElementById("u11_name").innerHTML = login;
    document.getElementById("u12_name").innerHTML = login;
    document.getElementById("u13_name").innerHTML = login;
    document.getElementById("u14_name").innerHTML = login;
    document.getElementById("u15_name").innerHTML = login;
    document.getElementById("u16_name").innerHTML = login;
    document.getElementById("u17_name").innerHTML = login;
    document.getElementById("u18_name").innerHTML = login;
    document.getElementById("u19_name").innerHTML = login;
    document.getElementById("u1a_name").innerHTML = login;

    document.getElementById("u21_name").innerHTML = login;
    document.getElementById("u22_name").innerHTML = login;
    document.getElementById("u23_name").innerHTML = login;

    document.getElementById("u30_name").innerHTML = login;
    document.getElementById("u31_name").innerHTML = login;
}