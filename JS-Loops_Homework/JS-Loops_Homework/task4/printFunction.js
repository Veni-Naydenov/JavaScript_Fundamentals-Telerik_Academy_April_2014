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

    /*4.finds the lexicographically smallest and largest property in document, window and navigator objects*/
    var myFunc = function myFunc() {
        WriteLine("</br>"+'<i style="color:white">'+window+"</i></br>");
        findSmallest(window);
        findBiggest(window);
        WriteLine("</br>"+'<i style="color:green">'+navigator+"</i>"+"</br>");
        findSmallest(navigator);
        findBiggest(navigator);
        WriteLine("</br>" + '<i style="color:red">' + document + "</i></br>");
        findSmallest(document);
        findBiggest(document);
        function findSmallest(object) {
            var smallest = 'zzz';
            for (var property in object) {
                if (property < smallest) {
                    smallest = property;
                }
            }
            WriteLine("Lexicographically smallest property in " + object + " is " + smallest);
        }
        function findBiggest(object) {
            var biggest = 'AAA';
            for (var property in object) {
                if (property > biggest) {
                    biggest = property;
                }
            }
            WriteLine("Lexicographically biggest property in " + object + " is " + biggest);
        }
    }();
    
}