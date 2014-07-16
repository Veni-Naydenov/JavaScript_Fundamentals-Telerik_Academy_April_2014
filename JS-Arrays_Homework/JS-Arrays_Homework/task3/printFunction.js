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
    /*3.Write a script that finds the maximal sequence of equal elements in an array.*/
    var myFunc = function myFunc() {
        var arrString = document.getElementById("arr1").value||"" ;
        var array = arrString.split(","); 
        //var array = [2,1,2,5,5,5,5];
        WriteLine("array=["+array+"]");
        WriteLine("<br/>");
        var maxLenght = 1;
        var element = 0;
        var arrElements=[];
        for (var i = 0,len=(array.length)-1; i < len; i++) {
            var curretLen = 1;
            var currentValue = array[i];
            for (var j = i + 1, len2 = array.length; j < len2; j++) {
                if (currentValue === array[j]) {
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
        WriteLine("the maximal sequence of equal elements is: " + maxLenght);
        for (var k = 0; k < maxLenght; k++) {
            Write(" "+element);
        }
    }();
    WriteLine("-------------------------------------");
}