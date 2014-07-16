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

    /*7.Write a script that finds the greatest of given 5 variables.*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "1 33 -7 6 1007";
        var inputArray = input.split(" ");
        var a = inputArray[0] - 0; // -0 convert to Int (a is string!)
        var b = inputArray[1] - 0; // the same as a
        var c = inputArray[2] - 0;
        var d = inputArray[3] - 0;
        var e = inputArray[4] - 0;

        for (var i = 0, len = inputArray.length; i < len; i++) {
            WriteLine("value "+(i+1)+": "+ inputArray[i]);
        }
        
        var max = a;
        if (b > max)
        {
            max = b;
        }
        if (c > max)
        {
            max = c;
        }
        if (d > max)
        {
            max = d;
        }
        if (e > max)
        {
            max = e;
        }
         WriteLine("The greatest value is= "+ max);
    }();
    WriteLine("-------------------------------------");
}