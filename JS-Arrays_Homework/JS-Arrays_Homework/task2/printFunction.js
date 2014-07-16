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
    /*1. Write a script that compares two char arrays lexicographically (letter by letter). */
    var myFunc = function myFunc() {
        //var arrayA = ["a", "s", "d", "f","j"];
        //var arrayB = ["a", "s", "d", "f"];
        var arr1 = document.getElementById("arr1").value || "";
        var arr2 = document.getElementById("arr2").value || "";
        var arrayA = arr1.split(" ");
        var arrayB = arr2.split(" ");
        WriteLine("<br/>");
        if ((arrayA.length === arrayB.length)&& findEqualArrays(arrayA,arrayB)) {
            WriteLine("Arrays are equal !");
        }
        else if (arrayA.length !== arrayB.length) {
            if (arrayA.length < arrayB.length) {
                WriteLine("Array 1 is lexicographically before Array 2 !");
            } else {
                WriteLine("Array 2 is lexicographically before Array 1 !");
            }
        }
        else {
            var compareResult = compareArrays(arrayA, arrayB);
            if (compareResult===-1) {
                WriteLine("Array 1 is lexicographically before Array 2 !");
            }
            else {
                WriteLine("Array 2 is lexicographically before Array 1 !");
            }
        }
        WriteLine("array 1: " + arrayA);
        WriteLine("array 2: " + arrayB);

        function findEqualArrays(arrA, arrB) {
            for (var i = 0,len=arrA.length; i < len; i++) {

                if (arrA[i]!==arrB[i]) {
                    return 0;
                }
                else if (i===len-1) {
                    return 1;
                }
            }
        }
        function compareArrays(arrA, arrB) {
            for (var i = 0, len = arrA.length; i < len; i++) {
                for (var j= i, len = i+1; j < len; j++) {

                    if (arrA[i] < arrB[j]) {
                        return -1;
                    }
                    else if (arrA[i] > arrB[j]) {
                        return 1;
                    }
                    else {
                        continue;
                    }
                }
            }
        }
    }();
    WriteLine("-------------------------------------");
}