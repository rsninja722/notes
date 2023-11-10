var themes;
var style = 0;

function switchTheme() {
    style = style + 1 > themes.length - 1 ? 0 : style + 1;

    setTheme(style);
}

function toggleThemeList() {
    var list = document.getElementById("themeList");

    list.classList.toggle("shown");
}

function setTheme(s) {
    root = document.documentElement.style;

    keys = Object.keys(themes[s]);
    for (var i = 1; i < keys.length; i++) {
        if(keys[i] == "--pre") debugger;
        root.setProperty(keys[i], themes[s][keys[i]]);
    }

    document.getElementById("styleButton").innerText = `theme: ${themes[s].name}`;

    style = s;
    localStorage.theme = s;

    root.setProperty("--themeListHeight", `-${document.getElementById("themeList").offsetHeight}px`);
}
