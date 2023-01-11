
function loadJSONfile(path) {
    return fetch(path).then((Response) =>
        Response.json().then((json) => {
            return json;
        })
    );
}

function loadTextFile(path) {
    return fetch(path).then((Response) =>
        Response.text().then((text) => {
            return text;
        })
    );
}