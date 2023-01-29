async function init() {
    themes = await loadJSONfile("./themes.json");
    
    var files = await loadJSONfile("./files.json");

    var note = window.location.search;

    if (note.endsWith(".md")) {
        renderNote(document.getElementById("postDiv"), note.substring(6), files);
    } else { 
        renderDirectory(note, files);    
    }
        
    button = document.createElement("button");
    button.onclick = function () {
        search = window.location.search;
        if(search.endsWith(".md")) {
            link = search.substring(0, search.lastIndexOf("/") + 1);
        } else {
            link = search.substring(0, search.length - 1).substring(0, search.substring(0, search.length - 1).lastIndexOf("/") + 1);
        }
        window.location.search = link;
    };
    button.innerText = "△";
    button.style.marginLeft = "3.5em";
    document.body.insertBefore(button, document.getElementById("links"));

    var button = document.createElement("button");
    button.id = "styleButton";
    button.onclick = switchTheme;
    button.innerText = "theme: clean";
    document.body.insertBefore(button, document.getElementById("links"));

    style = localStorage.theme || 0;
    setTheme(style);
}


init();


function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");

    document.getElementById("nav").children[0].classList.toggle("active");
}
