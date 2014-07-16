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
    /*1. that allocates array of 20 integers and initializes each element 
    by its index multiplied by 5. Print the obtained array on the console.*/
    var myFunc = function myFunc() {
        var lenght = document.getElementById("num").value-0 || "0";
        var array =new Array(lenght);
        WriteLine("Array lenght: " + array.length);
        for (var i = 0 ,len=array.length; i < len; i++) {
            var value = i * 5;
            WriteLine("array["+i+"]= "+value);
        }
    }();
    WriteLine("-------------------------------------");
}