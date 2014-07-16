function Global() {

   function Write(element) {
        var result = element;
        var container = document.getElementById("container");
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    function WriteLine(element) {
        var result = element;
        var container = document.getElementById("container");
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //---------------------------------------------------------------------------

    /*3.Write a script that finds the biggest of three integers using nested if statements.*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "5,6,7";
        var inputArray = input.split(',');
        var first = inputArray[0] - 0; // -0 convert to Int (first is string!)
        var second = inputArray[1] - 0; // the same as first
        var third = inputArray[2] - 0;
        WriteLine("inputed : " + first + ", " + second + ", " + third);

        if (first > second) {
            if (third < first) {
                WriteLine("The biggest integer is: "+first);
            }
            else {
                WriteLine("The biggest integer is: "+ third);
            }
        }
        else if (second > first) {
            if (second > third) {
                WriteLine("The biggest integer is: "+second);
            }
            else {
                WriteLine("The biggest integer is: "+third);
            }
        }
        else {
            WriteLine("The numbers are equal !");
        }
    }();
    WriteLine("-------------------------------------");
}