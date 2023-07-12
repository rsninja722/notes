var themes;
var style = 0;

function switchTheme() {
    style = style + 1 > themes.length - 1 ? 0 : style + 1;

    setTheme(style);

    localStorage.theme = style;
}

function setTheme(style) {
    root = document.documentElement.style;

    keys = Object.keys(themes[style]);
    for (var i = 1; i < keys.length; i++) {
        if(keys[i] == "--pre") debugger;
        root.setProperty(keys[i], themes[style][keys[i]]);
    }

    document.getElementById("styleButton").innerText = `theme: ${themes[style].name}`;
}
