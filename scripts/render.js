async function renderNote(note, files) {

    var text = await loadTextFile(note);

    var lines = text.split("\n");
    
    // create table of contents links at the top of the page
    lines = generateTopicLinks(lines);

    // render markdown
    postDiv.innerHTML += marked(lines.join("\n"));

    // highligh code
    elementsWithTagMap("pre", hljs.highlightElement);
    
    // highlight true/false T's and F's
    elementsWithTagMap("td", (e) => (e.style.color = e.innerHTML === "T" ? "#0beb0b" : e.innerHTML === "F" ? "#e94c4c" : ""));

    // render LaTeX
    renderMathInElement(document.getElementById("postDiv"), {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ]
    });

    // indent based on headers
    var parent = document.getElementById("postDiv");
    indented = indentBasedOnHeaders(parent);
    parent.innerHTML = "";
    parent.appendChild(indented);

    function toggleSection(target) {
        for(var i of target.children) {
            if(i.classList.contains("sectionCollapseButton")) {
                continue;
            }
            i.classList.toggle("sectionCollapsed");
        }
    }

    

    // add mouse move event listener to all headers
    var sections = [...document.getElementsByClassName("H1"), ...document.getElementsByClassName("H2"), ...document.getElementsByClassName("H3"), ...document.getElementsByClassName("H4"), ...document.getElementsByClassName("H5"), ...document.getElementsByClassName("H6")];

    // for (var i of sections) {
    //     div = createElement("div", {class: "sectionCollapseButton"})
    //     var toggleFunction = function() {toggleSection(i.previousSibling);}
    //     div.addEventListener("click", toggleFunction);
    //     i.nextSibling.firstChild.addEventListener("click", toggleFunction);
    //     i.insertBefore(div, i.firstChild)
    // }
    // e.addEventListener("mousemove", (event) => mouseMove(event, e)));
    
    // [].forEach.call(document.getElementsByTagName("note"),e => {
    //     var id = e.id;
        
    //     var frame = document.createElement("iframe");
    //     frame.style.height = "fit-content";

    //     frame.href = window.location.origin + window.location.pathname + "?note=" + findFileLink(id, fileStructure);
    //     e.parentElement.insertBefore(frame,e.nextElementSibling);
    //     e.parentElement.removeChild(e);
    // });

    document.body.removeChild(document.getElementById("loader"));
    
    document.body.removeChild(document.getElementById("links"));
    
    tree(files,document.getElementById("nav"),"?note=");
    
    link = window.location.hash.replace("#", "");
    if (link.length > 0) {
        document.getElementById(link).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } 
}

