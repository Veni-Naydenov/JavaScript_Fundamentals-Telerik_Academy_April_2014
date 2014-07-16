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

    /*4.Sort 3 real values in descending order using nested if statements.*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "0,0,0";
        var inputArray = input.split(',');
        var first = inputArray[0] - 0; // -0 convert to Int (first is string!)
        var second = inputArray[1] - 0; // the same as first
        var third = inputArray[2] - 0;
        WriteLine("inputed : " + first + ", " + second + ", " + third);

        if (second > third && third < first) {
            if (first > second) {
                WriteLine(first + ">" + second + ">" + third);
            }
            else {
                WriteLine(second + ">" + first + ">" + third);
            }
        }
        else if (first > second && second < third) {
            if (third > first) {
                WriteLine(third +">"+first +">"+ second );
            }
            else {
                WriteLine(first + ">" + third + ">" + second);
            }
        }
        else {
            if (second > third) {
                WriteLine(second + ">" + third + ">" + first);
            }
            else {
                WriteLine(third + ">" + second + ">" + first);
            }
        }
    }();
    WriteLine("-------------------------------------");
}