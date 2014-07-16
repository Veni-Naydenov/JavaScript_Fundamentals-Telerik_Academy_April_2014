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
    /*3.JavaScript function that finds how many times a substring is 
    contained in a given text (perform case insensitive search).
*/
    var myFunc = function myFunc() {

        function countSubstrings(text, sub) {
            text = text.toLowerCase();
            sub = sub.toLowerCase();
            var indexOf = text.indexOf(sub);
            var count = 0;
            while (indexOf > -1) {
                count++;
                indexOf = text.indexOf(sub, indexOf + 1);
            }
            return count;
        }
        //test the function
        var text = "Go go go Zoro zoRo ala bala Bala go gO";
        var sub = ["go", "zoro"];
        for (var i = 0; i < sub.length; i++) {
            var result = countSubstrings(text, sub[i]);

            WriteLine("Text: " + text);
            WriteLine(sub[i] + ": " + result + " times in text");
        }
    }();
}