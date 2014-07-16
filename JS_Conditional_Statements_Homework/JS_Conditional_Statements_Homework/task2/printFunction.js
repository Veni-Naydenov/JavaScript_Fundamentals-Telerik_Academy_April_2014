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

    /*2.Write a script that shows the sign (+ or -) of the product of three real numbers
        without calculating it. Use a sequence of if statements.*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "-5*6*-7";
        var inputArray = input.split('*');
        var first = inputArray[0] - 0; // -0 convert to Int (first is string!)
        var second = inputArray[1] - 0; // the same as first
        var third = inputArray[2] - 0;
        WriteLine("inputed : " + first + " * " + second + " * " + third);

        if ((first > 0 && second > 0 && third > 0) || (first < 0 && second > 0 && third < 0)
               || (first < 0 && second < 0 && third > 0) || (first > 0 && second < 0 && third < 0))
        {
            WriteLine("The sign is + ,POSITIVE !");
        }
        else if (first ==0 || second == 0 || third ==0) {
            WriteLine("The product is ZERO !");
        }
        else {
            WriteLine("The sign is - ,  NEGATIVE !");
        }
    }();
    WriteLine("-------------------------------------");
}