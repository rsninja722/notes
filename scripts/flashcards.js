// singleton for loading flashcards
class FlashCards {
    static flashCardText;

    async getCards(tags, mode) {
        if(this.flashCardText === undefined) {
            var txt = await loadTextFile("./flashcards/flashcards.md");
            txt = txt.split("# tags").slice(1).map(i => i.split("##"));
            txt.forEach(i => {
                i[0] = i[0].replaceAll("\n","").replaceAll("\r","");
                i[1] = i[1].split("\n").slice(1).join("\n"); 
                i[2] = i[2].split("\n").slice(1).join("\n"); 
            });
            this.flashCardText = txt;
        }

        return this.flashCardText;
    }
}

var flashcards = new FlashCards();

async function renderFlashCards(e) {
    var flashcardData = await flashcards.getCards();

    var tags = e.getAttribute("tags").split(",");
    var mode = e.getAttribute("mode");

    var orderedCards = flashcardData.filter(card => {
        var cardTags = card[0].split(",");
        if (mode === "or") {
            return tags.reduce((res, tag) => res || cardTags.includes(tag), false);
        } else {
            return tags.reduce((res, tag) => res && cardTags.includes(tag), true);
        }
    });
    
    var cards = [];
    // shuffle cards
    while(orderedCards.length > 0) {
        var index = Math.floor(Math.random() * orderedCards.length);
        cards.push(orderedCards[index]);
        orderedCards.splice(index, 1);
    }

    returnDiv = createElement("div", { class: "flashcardContainer" });

    var controls = createElement("div", { class: "flashcardControls" });

    var buttons = createElement("div");
    buttons.appendChild(createElement("button", {}, { innerText: "< back", onclick: event => {
        var cs = event.target.parentElement.parentElement.parentElement.getElementsByClassName("flashcard");
        var i = 0;
        while(i < cs.length && cs[i].classList.contains("hidden")) {
            i++;
        }
        if(i >= cs.length) { return; }

        cs[i].classList.add("hidden");
        if(i === 0) {
            cs[cs.length-1].classList.remove("hidden");
            cs[cs.length-1].getElementsByClassName("flashcardBack")[0].classList.add("hidden");
        } else {
            cs[i-1].classList.remove("hidden");
            cs[i-1].getElementsByClassName("flashcardBack")[0].classList.add("hidden");
        }
    }}));
    buttons.appendChild(createElement("button", {}, { innerText: "next >", onclick: event => {

        var cs = event.target.parentElement.parentElement.parentElement.getElementsByClassName("flashcard");
        var i = 0;
        while(i < cs.length && cs[i].classList.contains("hidden")) {
            i++;
        }
        if(i >= cs.length) { return; }

        if(cs[i].getElementsByClassName("flashcardBack")[0].classList.contains("hidden")) {
            cs[i].getElementsByClassName("flashcardBack")[0].classList.remove("hidden");
            return;
        }

        cs[i].classList.add("hidden");
        if(i === cs.length - 1) {
            cs[0].classList.remove("hidden");
            cs[0].getElementsByClassName("flashcardBack")[0].classList.add("hidden");
        } else {
            cs[i+1].classList.remove("hidden");
            cs[i+1].getElementsByClassName("flashcardBack")[0].classList.add("hidden");
        }
    }}));
    controls.appendChild(buttons);

    var grid = createElement("div", {style: "display:grid;"});
    controls.appendChild(createElement("span", {class: "flashcardTopics"}, {innerText: (mode === "or" ? "includes: " : "matches all: ") + tags.join(", ")}));
    controls.appendChild(createElement("span", {class: "flashcardTitle"}, {innerText: "Flashcardinator v1.0"}));

    controls.appendChild(grid);

    returnDiv.appendChild(controls);

    cards.forEach(card => {

        var div = createElement("div", { class: "flashcard hidden" });
        var front = createElement("div", { class: "flashcardFront" });
        var back = createElement("div", { class: "flashcardBack hidden" });
        front.innerHTML = card[1];
        back.innerHTML = card[2];
        // div.appendChild(createElement("button", { class: "flashcardButton"}, {innerText: "flip", onclick: event => { 
        //     event.target.parentElement.getElementsByClassName("flashcardBack")[0].classList.toggle("hidden"); 
        // }}));
        div.appendChild(front);
        div.appendChild(back);
        front.innerHTML = marked(front.innerHTML);
        back.innerHTML = marked(back.innerHTML);

        elementsWithTagMap("pre", hljs.highlightElement, front);
        elementsWithTagMap("pre", hljs.highlightElement, back);

        returnDiv.appendChild(div);
    });

    returnDiv.getElementsByClassName("flashcard")[0].classList.remove("hidden");

    return returnDiv;
}