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
    /*7.returns the index of the first element in array that is bigger than its neighbors,
         or -1, if there’s no such element. */
    var myFunc = function myFunc() {
        var inputString = document.getElementById("input").value || "";
        var array = inputString.split(",");

        var result = isNeighborsBigger(array);
        var isArray = Array.isArray(result);
        if (isArray && result.length > 0) {
            WriteLine("The first bigger element than its neighbors is " + result[0]);
        } else {
            WriteLine(result+" ... no first bigger element")
        }

        function isNeighborsBigger(array) {
            var length = array.length;
            var index = 1
            var newArray = [];
            
            if (length>=3) {
                while (index < length-1) {
                    if (array[index]-0 > array[index-1]-0 && array[index]-0 > array[index+1]-0) {
                        newArray.push(array[index] - 0);
                    }
                    index++;
                }

                return newArray;
            } else {
                return -1;
            }
        }
    }();
}