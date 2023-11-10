async function init() {
    themes = await loadJSONfile("./themes.json");
    
    var files = await loadJSONfile("./files.json");

    var note = window.location.search;

    if (note.endsWith(".md")) {
        renderNote(document.getElementById("postDiv"), note.substring(6), files);
    } else { 
        renderDirectory(note, files);    
    }
        
    document.getElementById("upButton").onclick = function () {
        search = window.location.search;
        if(search.endsWith(".md")) {
            link = search.substring(0, search.lastIndexOf("/") + 1);
        } else {
            link = search.substring(0, search.length - 1).substring(0, search.substring(0, search.length - 1).lastIndexOf("/") + 1);
        }
        window.location.search = link;
    };

    document.getElementById("styleButton").onclick = toggleThemeList;

    for(var i = 0; i < themes.length; i++) {
        var div = createElement("div", {class: "themeOption", id: "themeOption" + i}, {innerText: themes[i].name});
        let id = i;
        div.addEventListener("click", function() {
            document.getElementById("themeOption" + style).classList.remove("selected");
            document.getElementById("themeOption" + id).classList.add("selected");

            setTheme(id);
            toggleThemeList();
        });
        document.getElementById("themeList").appendChild(div);
    }

    style = parseInt(localStorage.theme) || 0;
    setTheme(style);

    document.getElementById("themeOption" + style).classList.add("selected");
}


init();


function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");

    document.getElementById("nav").children[0].classList.toggle("active");
}
