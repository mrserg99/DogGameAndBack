const cookiesVocabulary = {
    place: "place",
    P: "P",
    resurse_2_1: "resurse_2_1",
    resurse_2_2: "resurse_2_2",
    resurse_2_3: "resurse_2_3",
    resurse_1_1: "resurse_1_1",
    resurse_1_2: "resurse_1_2",
    resurse_1_3: "resurse_1_3",
    resurse_1_4: "resurse_1_4",
    resurse_1_5: "resurse_1_5",
    resurse_1_6: "resurse_1_6",
    resurse_1_7: "resurse_1_7",
    resurse_1_8: "resurse_1_8",
    resurse_1_9: "resurse_1_9",
    resurse_1_10: "resurse_1_10",
    login: "login",
    enemy_log: "enemy_log",
    field: "field",
    game_ready: "gameReady",
    game_id: "game_id",
    move_ready: "moveReady",
    enemy_position: "enemy_position",
    game_status: "game_status"
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function deleteCookie(name) {
    setCookie(name, "");
}