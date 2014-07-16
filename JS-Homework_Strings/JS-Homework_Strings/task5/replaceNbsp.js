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
    /*5.Write a function that replaces non breaking white-spaces in a text with &nbsp;
*/
    var myFunc = function myFunc() {

        function replaceWhiteSpace(text, newSign) {
            var result = "";
            for (var i = 0; i < text.length; i++) {
                if (text[i] ==" ") {
                    result += newSign;
                }
                else {
                    result += text[i];
                }
            }
            WriteLine(result);
            console.log(result);
        }

        var text = "I’m Luke Skywalker, I’m here to rescue you. ";
        WriteLine(text);
        replaceWhiteSpace(text, "&nbsp");
        WriteLine("Look at the console!!!");
    }();
}