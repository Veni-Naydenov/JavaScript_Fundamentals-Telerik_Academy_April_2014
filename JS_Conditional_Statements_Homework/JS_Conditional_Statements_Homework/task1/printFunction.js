function Global() {
    // this functions print the result in to the web page

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
    /*1. Write an if statement that examines two integer variables and exchanges their values if
      the first one is greater than the second one.*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "";
        var inputArray = input.split(',');
        var first = inputArray[0] - 0; // -0 convert to Int (first is string!)
        var second = inputArray[1] - 0; // the same as first

        WriteLine("first= " + first);
        WriteLine("second= " + second);
        WriteLine("");
        if (first > second) {
            //var buffer = second;
            //second = first;
            //first = buffer;
            second = inputArray[0];
            first = inputArray[1];
            WriteLine("first is bigger than second!");
            WriteLine("first= " + first);
            WriteLine("second= " + second);
        }
        else {
            WriteLine("first < second !");

        }
        WriteLine("-------------------------");
    }();

}