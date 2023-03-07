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
    elementsWithTagMap("td", (e) => (e.style.backgroundColor = e.innerHTML === "T" ? "#1fc11f" : e.innerHTML === "F" ? "#c14b4b" : ""), noteDiv);

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
    
    // collapse examples
    var headers = [...noteDiv.getElementsByTagName("h1"), ...noteDiv.getElementsByTagName("h2"), ...noteDiv.getElementsByTagName("h3"), ...noteDiv.getElementsByTagName("h4"), ...noteDiv.getElementsByTagName("h5"), ...noteDiv.getElementsByTagName("h6")];

    for (var i of headers) {
        if(i.innerText.includes("example")) {
            i.click();
        }
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

        var flashcardData = await flashcards.getCards();

        // embed flashcards
        elementsWithTagMap("embed", e => {
            var tags = e.getAttribute("tags").split(",");
            var mode = e.getAttribute("mode");
            
            var cards = flashcardData.filter(card => {
                var cardTags = card[0].split(",");
                if(mode === "or") {
                    return tags.reduce((res,tag) => res || cardTags.includes(tag), false);
                } else {
                    return tags.reduce((res,tag) => res && cardTags.includes(tag), true);
                }
            });

            cards.forEach(card => {
                
                var div = createElement("div", {class: "flashcard"});
                var front = createElement("div", {class: "flashcardFront"});
                var back = createElement("div", {class: "flashcardBack"});
                front.innerHTML = card[1];
                back.innerHTML = card[2];
                div.appendChild(front);
                div.appendChild(back);
                front.innerHTML = marked(front.innerHTML);
                back.innerHTML = marked(back.innerHTML);
                e.parentElement.insertBefore(div, e);
                return true

            });
        })
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