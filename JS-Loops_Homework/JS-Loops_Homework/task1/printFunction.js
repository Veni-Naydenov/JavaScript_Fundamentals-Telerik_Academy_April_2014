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

    /*1Write a script that prints all the numbers from 1 to N.*/
    var myFunc = function myFunc() {
        var inputedN = (document.getElementById("num").value) - 0 || 1;

        for (var i = 1; i <= inputedN; i++) {
            WriteLine(i);
        }
       
       
    }();
    WriteLine("-------------------------------------");
}