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
    /*7.that finds the index of given element in a sorted array of integers by using the binary search algorithm  */
    var myFunc = function myFunc() {
        var arrString = document.getElementById("arr1").value||"" ;
        var array = arrString.split(",");
        var wanted = document.getElementById("find").value-0 || 0;
        
        WriteLine("<br/>");
        //sort the array
        var numbers = array.sort(function (a, b) {
            return a - b;
        });
        WriteLine("Sorted array:[ " + '<i style="color:yellow">' + numbers+"</i> ]");
        var index = -1; 
        var start = 0; 
        var end = array.length - 1; 
        var currentElement;
        var middle;

        while (start <= end) {
            // Calculate middle (rounded)
            middle = ((start + end + 1) / 2)|0; // |0 make it integer 

            // Get the current middle value
            currentElement = numbers[middle] - 0;

            // Check to see if we found our wanted value
            if (currentElement === wanted) {
                index = middle;
                break;
            }
            else if (currentElement < wanted) {
                // Wanted value is further to the right
                start = middle + 1;
            }
            else {
                // Wanted value is further to the left
                end = middle - 1;
            }
        }
        Write( wanted);
        WriteLine(index === -1 ? " is not an element in the array!" : " --> has index "+  '<a style="color:red">'+index+"</a>");
}();
WriteLine("-------------------------------------");
}