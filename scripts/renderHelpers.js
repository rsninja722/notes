function elementsWithTagMap(tag, f) {
    [].forEach.call(document.getElementsByTagName("tag"), (e) => f(e));
}