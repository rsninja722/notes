styleNames = ["clean", "contrast", "blinding"];
styles = [
    {
        "--text": "#c7d6ff",
        "--line-height": "normal",
        "--title": "#6d86ff",
        "--bold": "#47f3a4",
        "--pre": "#e6c07b",
        "--summary": "#454bff",
        "--back": "#090f16",
        "--math": "#41f0c1",
        "--space": "0px",
        "--code": "#08172a",
        "--table": "#040609",
        "--table-head": "#292b56",
        "font-family": "Helvetica,Arial,sans-serif",
        "letter-spacing": "normal",
        "word-spacing": "normal"
    },
    {
        "--text": "#ffffff",
        "--line-height": "140%",
        "--title": "#ffb730",
        "--bold": "#6aff44",
        "--pre": "#e6c07b",
        "--summary": "#14a800",
        "--back": "#030508",
        "--math": "#3cffae",
        "--space": "-6px",
        "--code": "#08172a",
        "--table": "#040609",
        "--table-head": "#292b56",
        "font-family": "OpenDyslexic3",
        "letter-spacing": "-0.5px",
        "word-spacing": "-5px"
    },
    {
        "--text": "#2a415a",
        "--line-height": "normal",
        "--title": "#0b5394",
        "--bold": "#2fa1da",
        "--pre": "#c37e00;",
        "--summary": "#454bff",
        "--back": "#ffffff",
        "--math": "#003003",
        "--space": "0px",
        "--code": "#08172a",
        "--table": "#eeeeee",
        "--table-head": "#2fa1da",
        "font-family": "Helvetica,Arial,sans-serif",
        "letter-spacing": "normal",
        "word-spacing": "normal"
    }
];
style = 0;

function switchTheme() {
    style = style + 1 > styles.length - 1 ? 0 : style + 1;

    setTheme(style);

    localStorage.theme = style;
}

function setTheme(style) {
    root = document.documentElement.style;

    keys = Object.keys(styles[style]);
    for (var i = 0; i < keys.length; i++) {
        root.setProperty(keys[i], styles[style][keys[i]]);
    }

    document.getElementById("styleButton").innerText = `theme: ${styleNames[style]}`;
}

fetch("files.json").then((Response) =>
    Response.json().then((json) => {
        var fileStructure = json;
        var note = window.location.search;
        if (note.endsWith(".md")) {
            note = note.substring(6, note.length);
            fetch(note).then((Response) =>
                Response.text().then((text) => {
                    // find topics and create links
                    var lines = text.split("\n");
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

                    postDiv.innerHTML += marked(lines.join("\n"));
                    // highligh code
                    [].forEach.call(document.getElementsByTagName("pre"), (e) => hljs.highlightElement(e));
                    // highlight true/false T's and F's
                    [].forEach.call(document.getElementsByTagName("td"), (e) => (e.style.color = e.innerHTML === "T" ? "#0beb0b" : e.innerHTML === "F" ? "#e94c4c" : ""));

                    // render LaTeX
                    renderMathInElement(document.getElementById("postDiv"), {
                        delimiters: [
                            { left: "$$", right: "$$", display: true },
                            { left: "$", right: "$", display: false },
                            { left: "\\(", right: "\\)", display: false },
                            { left: "\\[", right: "\\]", display: true }
                        ]
                    });

                    // renderMathInElement(document.body, {
                    //     // customised options
                    //     // • auto-render specific keys, e.g.:
                    //     delimiters: [
                    //         { left: "$$", right: "$$", display: true },
                    //         { left: "$", right: "$", display: false },
                    //         { left: "\\(", right: "\\)", display: false },
                    //         { left: "\\[", right: "\\]", display: true }
                    //     ],
                    //     // • rendering keys, e.g.:
                    //     throwOnError: false
                    // });

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
                    
                })
                );
            } else {
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
    })
);

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