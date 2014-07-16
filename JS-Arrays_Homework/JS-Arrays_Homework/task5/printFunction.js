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
    /*5.Sorting an array means to arrange its elements in increasing order.
       Write a script to sort an array. Use the "selection sort" algorithm:
        Find the smallest element, move it at the first position,
        find the smallest from the rest, move it at the second position, etc */
    var myFunc = function myFunc() {
        var arrString = document.getElementById("arr1").value||"" ;
        var array = arrString.split(","); 
        
        WriteLine("array=["+array+"]");
        WriteLine("<br/>");
        var min=0;
        var temp=0;
        var length = array.length;
        for (currentIndex = 0; currentIndex < length - 1; currentIndex++)
        {
            min = currentIndex;
            for (nextIndex = currentIndex + 1; nextIndex < length; nextIndex++)
            {
                if (array[nextIndex]-0 < array[min]-0)
                {
                    min = nextIndex;
                }
            }
            temp = array[currentIndex]-0;
            array[currentIndex] = array[min]-0;
            array[min] = temp;
        }
        //WriteLine(array);
        for(var i in array)
        {
            if (i-0 === array.length-1) {
                var print = function (array) {
                    Write(array[i]) ;
                }
            }
            else {
                var print=function(array){
                Write(array[i] + ", ");}
            }
            print(array);
        }
}();
WriteLine("-------------------------------------");
}