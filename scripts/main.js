// globals 



async function init() {
    themes = await loadJSONfile("./themes.json");
    
    var files = await loadJSONfile("./files.json");

    var note = window.location.search;

    var fileStructure = json;
    if (note.endsWith(".md")) {
        renderNote(note.substring(6, note.length), files);
    } else {
        render 
            var dir = note.length == 0 ? "notes/" : note.substring(6, note.length);
            var keyOrder = dir.split("/");
            var notes = fileStructure;
            for (var i of keyOrder) {
                if (i.length > 0) {
                    notes = notes[i];
                }
            }
            var keys = Object.keys(notes);
            for (var i = 0; i < keys.length; i++) {
                var span = document.createElement("span");
                var a = document.createElement("a");

                a.href = `?note=${dir}${keys[i]}${keys[i].endsWith(".md") ? "" : "/"}`;
                a.innerText = "/" + keys[i];
                a.style = "font-size: 20px";
                
                span.appendChild(a);
                document.getElementById("links").appendChild(span);
                
                var br = document.createElement("br");
                document.getElementById("links").appendChild(br);
            }
            document.body.removeChild(document.getElementById("loader"));
            
            tree(fileStructure,document.getElementById("nav"),"?note=");
        }
        
        button = document.createElement("button");
        button.onclick = function () {
            search = window.location.search;
            link = search.endsWith(".md") ? search.substring(0, search.lastIndexOf("/") + 1) : search.substring(0, search.length - 1).substring(0, search.substring(0, search.length - 1).lastIndexOf("/") + 1);
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

    style = localStorage.theme | 0;
    setTheme(style);
}


init();


function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");

    document.getElementById("nav").children[0].classList.toggle("active");
}

function tree(treeObject, parentElement, dir) {
    for(let i in treeObject) {
        let div = document.createElement("div");
        
        if(typeof treeObject[i] === "object" && treeObject[i] !== null) {
            let text = document.createElement("span");
            text.innerText = "⮟ " + i;
            text.onclick = e => {
                e.target.innerText = (e.target.innerText.slice(0,1) === "⮟" ? "⮞" : "⮟") + e.target.innerText.slice(1);
                [].forEach.call(e.target.parentElement.children, el => {if(el.tagName === "DIV") {el.style.display = el.style.display === "none" ? "block" : "none"}});
            }
            div.appendChild(text);
            tree(treeObject[i],div, dir + (dir === "?note=" ? "" : "/") + i);
        } else {
            // var dir = note.length == 0 ? "notes/" : note.substring(6, note.length);
            // text.href = `?note=${dir}${keys[i]}${keys[i].endsWith(".md") ? "" : "/"}`;
            let a = document.createElement("a");
            a.innerText = i;
            a.href = dir + "/" + i;
            div.appendChild(a);
        }

        parentElement.appendChild(div);
    }
}

function findFileLink(file, fileStructure) {
    for(let i in fileStructure) {
        if (i === file) {
            return i;
        } else if(typeof fileStructure[i] === "object" && fileStructure[i] !== null) {
            var search = findFileLink(file, fileStructure[i]);
            if (search) {
                return i + "/" + search;
            }
        }
    }

    return;
}