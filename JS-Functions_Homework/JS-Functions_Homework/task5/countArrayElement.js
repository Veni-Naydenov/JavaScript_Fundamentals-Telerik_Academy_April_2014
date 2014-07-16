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
    /*5.Write a function that counts how many times given number appears in given array. 
    Write a test function to check if the function is working correctly.
*/
    var myFunc = function myFunc() {
        //var inputString = document.getElementById("input").value || "";
        var array = [1,1,3,3,4,4,3,5,3];

        WriteLine("The array: "+ array.toString());
        WriteLine("3: "+countThisElement(array, 3)+" times in the array !");
        WriteLine("The Test function results: ");
        testMyFunction();

         function countThisElement(array,x) {
            var searched=x;
            var myArray=array;
            var countResult = 0;

            for (var i = 0 ; i < myArray.length; i++) {
                if (myArray[i] - 0 === searched) {
                    countResult++;
                }
            }
            return countResult-0;
        }

        function testMyFunction() {
            WriteLine("is element 1 appears 2 times: " );
            WriteLine( countThisElement(array, 1) === 2);
            WriteLine("is element 3 appears 4 times: " );
            WriteLine( countThisElement(array, 3) === 4);
            WriteLine("is element 4 appears 2 times: " );
            WriteLine(countThisElement(array, 4) === 2);
            WriteLine("is element 5 appears 1 times: " );
            WriteLine(countThisElement(array, 5) === 1);

            console.log( countThisElement(array, 1) === 2);
        }
    }();
}