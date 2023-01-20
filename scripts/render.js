async function renderNote(noteDiv, note, files, embedMode = false) {

    var text = await loadTextFile(note);

    var lines = text.split("\n");
    
    // create table of contents links at the top of the page
    lines = generateTopicLinks(lines);

    // render markdown
    noteDiv.innerHTML += marked(lines.join("\n"));

    // highligh code
    elementsWithTagMap("pre", hljs.highlightElement, noteDiv);
    
    // highlight true/false T's and F's
    elementsWithTagMap("td", (e) => (e.style.color = e.innerHTML === "T" ? "#0beb0b" : e.innerHTML === "F" ? "#e94c4c" : ""), noteDiv);

    // render LaTeX
    renderMathInElement(noteDiv, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ]
    });

    // indent based on headers
    indented = indentBasedOnHeaders(noteDiv);
    noteDiv.innerHTML = "";
    noteDiv.appendChild(indented);

    
    // handles collapsing sections
    function toggleSection(e) {
        var target;
        if(e.target.classList.contains("sectionCollapseButton")) {
            target = e.target.parentElement;
        } else {
            target = e.target.nextSibling;
        }

        target.previousSibling.classList.toggle("bottomBorder");
        for(var i of target.children) {
            if(i.classList.contains("sectionCollapseButton")) {
                continue;
            }
            i.classList.toggle("sectionCollapsed");
        }
        if(!checkVisible(target.previousSibling)) {
            target.previousSibling.scrollIntoView();
        }
    }

    // add mouse move event listener to all headers
    var sections = [...noteDiv.getElementsByClassName("H1"), ...noteDiv.getElementsByClassName("H2"), ...noteDiv.getElementsByClassName("H3"), ...noteDiv.getElementsByClassName("H4"), ...noteDiv.getElementsByClassName("H5"), ...noteDiv.getElementsByClassName("H6")];

    for (var i of sections) {
        div = createElement("div", {class: "sectionCollapseButton", });
        div.addEventListener("click", toggleSection);
        i.insertBefore(div, i.firstChild)

        i.previousSibling.addEventListener("click", toggleSection);
    }
    
    var toRemove = [];

    // embed notes
    elementsWithTagMap("a", (e) => {
        // debugger
        var linkParam = e.href.indexOf("?note=");
        if(linkParam === -1 || e.href.includes("#")) {
            return;
        }
        
        var curNoteDiv = createElement("div", {class: "noteDiv"});
        
        e.parentElement.insertBefore(curNoteDiv,e.nextElementSibling);
        toRemove.push(e);
        
        renderNote(curNoteDiv, e.href.slice(linkParam).substring(6), files, true);
        
    }, noteDiv);

    toRemove.forEach(e => e.parentElement.removeChild(e));

    if(!embedMode) {
        document.body.removeChild(document.getElementById("loader"));
        
        document.body.removeChild(document.getElementById("links"));
        
        document.getElementById("nav").appendChild(generateNavTree(files, "?note="));
        
        link = window.location.hash.replace("#", "");
        if (link.length > 0) {
            document.getElementById(link).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } 
    }
}

function renderDirectory(note, files) {
    var dir = note.length == 0 ? "notes/" : note.substring(6);
    var keyOrder = dir.split("/");
    var filesAtDir = files;
    for (var i of keyOrder) {
        if (i.length > 0) {
            filesAtDir = filesAtDir[i];
        }
    }
    var keys = Object.keys(filesAtDir);
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
    
    document.getElementById("nav").appendChild(generateNavTree(files, "?note="));
}