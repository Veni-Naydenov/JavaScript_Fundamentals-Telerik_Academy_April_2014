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

    /*3.that finds the max and min number from a sequence of numbers*/
    var myFunc = function myFunc() {
        var input = (document.getElementById("num").value)  || "0";
        var array = input.split(" ");
        var min = Number.MAX_VALUE;
        var max = Number.MIN_VALUE;
        for (var i = 0,len=array.length; i <len; i++) {
            var currentNum=array[i]-0;
            if (currentNum>max) {
                max = currentNum;
            }
            if (currentNum<min) {
                min = currentNum;
            }
        }
        WriteLine("Min nuber: " + min);
        WriteLine("Max nuber: " + max);
       
    }();
    WriteLine("-------------------------------------");
}