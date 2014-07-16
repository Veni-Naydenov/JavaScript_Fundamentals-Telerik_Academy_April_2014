function Global() {
    function Write(item) {
        var result = item;
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    function WriteLine(item) {
        var result = item;
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //---------------------------------------------------------------------------
    /*8.Write a JavaScript function that replaces in a HTML document given as
    string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL]. Sample HTML fragment:
*/
    var myFunc = function myFunc() {

        var text = "<p>Please visit <a href='http://academy.telerik. com'>our site</a> to choose a training course. Also visit <a href='www.devbg.org'>our forum</a> to discuss the courses.</p>";
        WriteLine(text);

        var index = text.indexOf("<a");
        while (index > -1) {
            text = text.replace("<a", "[URL=");
            text = text.replace("</a>", "[/URL]");

            index = text.indexOf("<a", index + 1);
        }

        WriteLine("After replacing: ");
        WriteLine(text);
    }();
}