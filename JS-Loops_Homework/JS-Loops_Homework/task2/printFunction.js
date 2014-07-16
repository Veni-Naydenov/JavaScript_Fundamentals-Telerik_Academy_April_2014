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

    /*2.prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time*/
    var myFunc = function myFunc() {
        var inputedN = (document.getElementById("num").value) - 0 || 1;
        WriteLine("Numbers ,not divisible by 3 and 7 at the same time: ");
        for (var i = 1; i <= inputedN; i++) {
            if (i%21===0) {
                continue;
            }
            WriteLine(i);
        }
       
       
    }();
    WriteLine("-------------------------------------");
}