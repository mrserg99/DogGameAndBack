const storageVocabulary = {
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
    token: "token",
    enemy_log: "enemy_log",
    field: "field",
    game_ready: "gameReady",
    game_id: "game_id",
    move_ready: "moveReady",
    enemy_position: "enemy_position",
    all_finish: "all_finish",
    is_single: "is_single",
    dog: "dog"
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getValue(key) {
    return sessionStorage.getItem(key);
}

function setValue(key, value) {
    sessionStorage.setItem(key, value);
}

function deleteValue(key) {
    sessionStorage.removeItem(key);
}

async function sendPostRequest(url, body) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })

    return await response.text()
}