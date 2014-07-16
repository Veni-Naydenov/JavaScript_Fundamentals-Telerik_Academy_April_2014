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
    /*3.makes a deep copy of an object
 */
    var myFunc = function myFunc() {
        
        var a = {
            a: 23,
            b: 7,
            c: "ref",
        }

        var b = Object.create(a);
        for (var i in b) {
            WriteLine(b[i]);
        }

        function clone(obj) {
            if (obj == null || "object" != typeof obj) {
                return obj;
            }
            // for array
            if (obj instanceof Array) {
                var copy = [];
                for (var i = 0 ; i < obj.length ; i++) {
                    copy[i] = clone(obj[i]);
                }
                return copy;
            }
            // for object
            if (obj instanceof Object) {
                var copy = {};
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        copy[attr] = clone(obj[attr]);
                    }
                }
                return copy;
            }
            throw new Error("Error ,can not copy this !");
        }
        
        var c = clone(a);
        WriteLine("The deep copy:");
        for (var index in c) {
            WriteLine(c[index]);
        }
    }();
}