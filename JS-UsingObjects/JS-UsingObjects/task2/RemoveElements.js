function Global() {
    function Write(item) {
        var result = item;
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    function WriteLine(item) {
        var result = item;
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //---------------------------------------------------------------------------
    /*2.that removes all elements with a given value
    Attach it to the array type
Read about prototype and how to attach methods
 */
    var myFunc = function myFunc() {
        
        Array.prototype.remove = function (item) {
            var array = [];
            for (var i in this) {
                if (this[i] !== item) {
                    array.push(this[i]);
                }
            }
            return array;
        }

        var arr = [3, 4, 5, 5, 5, 6,77,8,5,6];

        var arrayResult = arr.remove(5);

        WriteLine("Array: " + arr.toString());
        WriteLine("Array after removing 5 ");
        for (var i = 0, len = arrayResult.length-1; i < len ; i++) {
           Write(" "+arrayResult[i] );
        }
    }();
}