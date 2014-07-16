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
    /*4.that finds the maximal increasing sequence in an array. */
    var myFunc = function myFunc() {
        var arrString = document.getElementById("arr1").value||"" ;
        var array = arrString.split(","); 
        
        WriteLine("array=["+array+"]");
        WriteLine("<br/>");
        var maxLenght = 1;
        var element = 0;
        for (var i = 0,len=(array.length)-1; i < len; i++) {
            var curretLen = 1;
            var currentValue = array[i]-0;
            for (var j = i + 1, len2 = array.length; j < len2; j++) {
                if (currentValue + 1 === array[j]-0) {
                    currentValue += 1;
                    curretLen++;
                }
                else {
                    if (maxLenght<curretLen) {
                        maxLenght = curretLen
                        element = currentValue;
                    }
                    break;
                }
                if (maxLenght < curretLen) {
                    maxLenght = curretLen
                    element = currentValue;
                }
            }
        }
        WriteLine("the maximal increasing  sequence contains: " + '<strong style="color:red;">' + maxLenght + "</strong>" + " elements !");
        var start = (element - 0) - maxLenght;
        Write("Increasing sequence: => " );
        for (var k = 1; k <= maxLenght; k++) {
            Write(" " + '<i style="color:yellow;">' + (start + k) + '</i>');
        }
    }();
    WriteLine("-------------------------------------");
}