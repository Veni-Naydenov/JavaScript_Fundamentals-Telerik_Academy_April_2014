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
    /*6.finds the most frequent number in an array.  */
    var myFunc = function myFunc() {
        var arrString = document.getElementById("arr1").value||"" ;
        var array = arrString.split(","); 
        
        WriteLine("array=["+array+"]");
        WriteLine("<br/>");
        var count = 1;
        var bestCount = 0;
        var bestElement=0;
        var length = array.length;
       
        var numbers = array.sort(function (a, b) {
            return a - b;
        });
        WriteLine("Sorted array: "+ numbers);

        var element = numbers[0];
        var nextElement;
        for (var index = 1; index < length; index++)
        {
            nextElement=numbers[index];
            if (element==nextElement)
            {
                count++;
                element = nextElement;
                if (count>bestCount )
                {
                    bestCount = count;
                    bestElement = element;
                }
            }
            else
            {
                count = 1;
                element = nextElement;
            }
        }
        WriteLine(bestElement + " ( " + bestCount + " times)");
        //find if there is more then one sequence of the same, max count!
        var moreMaxElements = function more(numbers,count,index) {
            for (var i = index, len = (index + count) - 2; i <= len; i++) {

                if (((numbers.length - 1) <= index - 0) ||
                     (numbers[i + 1] - 0 !== numbers[index] - 0)) {
                    return 0;
                }
            }
            return 1;
        }

        var indexOf = bestCount;
        for (var i = indexOf; i < numbers.length; i++) {
            while (moreMaxElements(numbers, bestCount, i)) {

                WriteLine(numbers[i] + " ( " + bestCount + " times)");
                i += bestCount;
            }
        }
}();
WriteLine("-------------------------------------");
}