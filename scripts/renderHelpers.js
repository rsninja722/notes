function elementsWithTagMap(tag, f) {
    [].forEach.call(document.getElementsByTagName(tag), (e) => f(e));
}

// returns a div with elements indented based on headers
function indentBasedOnHeaders(parent) {
    var stack = [];
    // tags to indent based on
    var tags = ["H1", "H2", "H3", "H4", "H5", "H6"];
    var mainDiv = document.createElement("div");

   
    while (parent.children.length > 0) {
        // get first child
        curChild = parent.children[0];
    
        tagName = curChild.tagName;
        
        // if not a header element, add element and continue
        if (!tags.includes(tagName)) {
            if (stack.length == 0) {
                // add element to the main div if the stack is empty
                mainDiv.appendChild(curChild);
            } else {
                // add element to the element at the end of the stack
                stack[stack.length - 1].appendChild(curChild);
            }
            continue;
        }

        // if stack is empty
        if (stack.length == 0) {
            // add header
            mainDiv.appendChild(curChild);
            // create first level div in stack
            stack.push(createElement("div", {class: tagName}));
            continue;
        }

        // H1 -> 1, H2 -> 2...
        tagLevel = tagName.slice(1, 2);
        curLevel = parseInt(stack[stack.length - 1].className.slice(1, 2));

        // same size header, append the current div to its parent to make room for a new div at the same level
        if (tagLevel == curLevel) {
            if (stack.length == 1) {
                // append deepest div to the main div
                mainDiv.appendChild(stack.pop());
            } else {
                // append deepest div to its parent
                stack[stack.length - 2].appendChild(stack.pop());
            }
        // bigger header
        } else if(tagLevel < curLevel) {
            // append all divs to their parents until we are at the new depth fo the new header
            while (parseInt(stack[stack.length - 1].className.slice(1, 2)) >= tagLevel) {
                if (stack.length == 1) {
                    mainDiv.appendChild(stack.pop());
                    break;
                } else {
                    stack[stack.length - 2].appendChild(stack.pop());
                }
            }
        }

        // create new div in stack for this level
        stack.push(createElement("div", {class: tagName}));


        // append element to the current div
        if (stack.length == 1) {
            mainDiv.appendChild(curChild);
        } else {
            stack[stack.length - 2].appendChild(curChild);
        }
    }
    
    // if there are un-appended divs, append them to their parents
    while (stack.length > 0) {
        if (stack.length == 1) {
            mainDiv.appendChild(stack.pop());
        } else {
            stack[stack.length - 2].appendChild(stack.pop());
        }
    }

    return mainDiv;
}

// returns an element with the given tag and attributes
// with attributes in the form {attributeName: value, attributeName2: value2...}
function createElement(tag,attributes) {
    var element = document.createElement(tag);
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

// create links to headers in note
function generateTopicLinks(lines) {
    var topics = [];
    var ignore = false;

    if (lines.length > 0) {
        document.title = lines[0].replace("# ", "");
    }

    for (var i = 0; i < lines.length; i++) {

        // ignore preformatted blocks
        if (lines[i].startsWith("```")) {
            ignore = !ignore;
        }
        if (ignore) {
            continue;
        }

        // find lines that are headers
        if (lines[i].startsWith("#")) {
            topicName = lines[i].replace(/[\r#]/g, "").replace(" ", "");
            linkName = topicName.replace(/\s/g, "");
            // replace #s with tabs and add link as a list item to topics
            topics.push(
                `${lines[i]
                    .split("#")
                    .slice(0, lines[i].split("#").length - 2)
                    .map(_ => "\t")
                    .join("")}- <a href="#${linkName}">${topicName}</a>`
            );

            // add anchor for link above header
            lines.splice(i, 0, "");
            lines.splice(i, 0, `<a id="${linkName}"></a>`);
            lines.splice(i, 0, "");
            i += 3;
        }
    }

    // create collapsable topics section
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