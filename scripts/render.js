async function renderNote(note, files) {

    var text = await loadTextFile(note);

    var lines = text.split("\n");
    
    lines = generateTopicLinks(lines);

    // render markdown
    postDiv.innerHTML += marked(lines.join("\n"));

    // highligh code
    elementsWithTagMap("pre", (e) => hljs.highlightElement(e));
    
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

    children = document.getElementById("postDiv").children;

    var stack = [];
    var tags = ["H1", "H2", "H3", "H4", "H5", "H6"];
    var mainDiv = document.createElement("div");

    // debugger

    // for(var i=0;i<children.length;i++) {
    while (document.getElementById("postDiv").children.length > 0) {
        curChild = document.getElementById("postDiv").children[0];
        tagName = curChild.tagName;
        if (!tags.includes(tagName)) {
            if (stack.length == 0) {
                mainDiv.appendChild(curChild);
            } else {
                stack[stack.length - 1].appendChild(curChild);
            }
            continue;
        }

        if (stack.length == 0) {
            div = document.createElement("div");
            div.className = tagName;
            stack.push(div);
            stack[stack.length - 1].appendChild(curChild);
            continue;
        }

        tagLevel = tagName.slice(1, 2);
        curLevel = parseInt(stack[stack.length - 1].className.slice(1, 2));

        // smaller header
        if (tagLevel > curLevel) {
            div = document.createElement("div");
            div.className = tagName;
            stack.push(div);
            // same size header
        } else if (tagLevel == curLevel) {
            if (stack.length == 1) {
                mainDiv.appendChild(stack.pop());
            } else {
                stack[stack.length - 2].appendChild(stack.pop());
            }

            div = document.createElement("div");
            div.className = tagName;
            stack.push(div);
            // bigger header
        } else {
            while (parseInt(stack[stack.length - 1].className.slice(1, 2)) >= tagLevel) {
                if (stack.length == 1) {
                    mainDiv.appendChild(stack.pop());
                    break;
                } else {
                    stack[stack.length - 2].appendChild(stack.pop());
                }
            }

            div = document.createElement("div");
            div.className = tagName;
            stack.push(div);
        }

        if (stack.length == 1) {
            mainDiv.appendChild(curChild);
        } else {
            stack[stack.length - 2].appendChild(curChild);
        }
    }
    while (stack.length > 0) {
        if (stack.length == 1) {
            mainDiv.appendChild(stack.pop());
        } else {
            stack[stack.length - 2].appendChild(stack.pop());
        }
    }

    document.getElementById("postDiv").innerHTML = "";
    document.getElementById("postDiv").appendChild(mainDiv);
    
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
    
    tree(fileStructure,document.getElementById("nav"),"?note=");
    
    link = window.location.hash.replace("#", "");
    if (link.length > 0) {
        document.getElementById(link).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } 
}

// create links to headers in note
function generateTopicLinks(lines) {
    var topics = [];
    var ignore = false;

    if (lines.length > 0) {
        document.title = lines[0].replace("# ", "");
    }

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("```")) {
            ignore = !ignore;
        }

        if (ignore) {
            continue;
        }

        if (lines[i].startsWith("#")) {
            topicName = lines[i].replace(/[\r#]/g, "").replace(" ", "");
            linkName = topicName.replace(/\s/g, "");
            topics.push(
                `${lines[i]
                    .split("#")
                    .slice(0, lines[i].split("#").length - 2)
                    .map((x) => "\t")
                    .join("")}- <a href="#${linkName}">${topicName}</a>`
            );
            lines.splice(i, 0, "");
            lines.splice(i, 0, `<a id="${linkName}"></a>`);
            lines.splice(i, 0, "");
            i += 3;
        }
    }

    lines.splice(1, 0, "</details>");

    for (var i = topics.length; i > -1; i--) {
        lines.splice(1, 0, topics[i]);
    }

    lines.splice(1, 0, "");
    lines.splice(1, 0, "<summary>topics</summary>");
    lines.splice(1, 0, "<details>");
    lines.splice(1, 0, "");

    return lines;
}