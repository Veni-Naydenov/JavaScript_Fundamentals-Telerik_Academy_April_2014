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
    /*1.Write a JavaScript function reverses string and returns it
*/
    var myFunc = function myFunc() {
        var str = "sample";
        var reversedArray = str.split(""); // maka an array
        reversedArray = reversedArray.reverse();// reverse the array
        var reversedString = reversedArray.join("");//make the reversed array string

        WriteLine("Straight: "+str);
        WriteLine("Reversed: "+reversedString);
       
    }();
}