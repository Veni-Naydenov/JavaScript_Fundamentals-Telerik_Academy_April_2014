function Global() {
    function Write(element) {
        var result = element;
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    function WriteLine(element) {
        var result = element;
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //---------------------------------------------------------------------------
    /*2.Write a function that reverses the digits of given decimal number. Example: 256  652
 */
    var myFunc = function myFunc() {
        var number = document.getElementById("input").value || "";
        WriteLine("<br/>");

        var reverseNumber = function reverseNumber(num) {
            var theNumber = num;
            var array = number.split("");
            var reversedArray = array.reverse();
            var reversedNumber = (reversedArray.join("")) - 0;
            WriteLine(reversedNumber);
        }
        // call the function !
        reverseNumber(number);
    }();
    WriteLine("-------------------------------------");
}