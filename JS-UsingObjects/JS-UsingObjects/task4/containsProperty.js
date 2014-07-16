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
    /*4.Write a function that checks if a given object contains a given property

 */
    var myFunc = function myFunc() {
        
        function isProperty(obj, property) {
            for (var i in obj) {
                if (i === property) {
                    return true;
                }
            }
            return false;
        }

        var testObject = {
            chislo: 5,
            ninja: 7,
        }

        var isProperty = isProperty(testObject, "ninja");
        WriteLine("Does the object has property ninja");
        WriteLine(isProperty.toString());
    }();
}