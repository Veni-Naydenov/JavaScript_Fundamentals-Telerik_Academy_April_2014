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
    /*6.Write a function that checks if the element at given position
    in given array of integers is bigger than its two neighbors (when such exist */
    var myFunc = function myFunc() {
        var inputString = document.getElementById("input").value || "";
        var array = inputString.split(",");

        isNeighborsBigger(array);

        function isNeighborsBigger(array) {
            var length = array.length;
            var index = 1
            WriteLine("Array elements bigger than its two neighbors: ");
            if (length>=3) {
                while (index < length-1) {
                    if (array[index]-0 > array[index-1]-0 && array[index]-0 > array[index+1]-0) {
                        WriteLine("Element = "+array[index]+ " ..../ at index= "+index);
                    }
                    index++;
                }
            } else {
                WriteLine("Array is too small, there is no neighbor elements!");
            }
        }
    }();
}