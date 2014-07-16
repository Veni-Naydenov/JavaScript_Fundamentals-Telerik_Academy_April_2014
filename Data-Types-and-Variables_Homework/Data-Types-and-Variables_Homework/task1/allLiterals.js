
var intNumber = 333; // integer
var floatNumber = 3.3; // float 
var stringValue = "I am string in \" \" "; // string
var stringSingleQuoted = 'Single quoted string';// string
var booleanValue = intNumber > floatNumber; // boolean
var undefinedValue = undefined; // undefined
var nullValue = null; // null
var objectValue ={      // object
    name: "Pesho",
    talk: function () {
       return talk= "Hi, I am the OBJECT " + this.name;
    }
};

var myArray = [intNumber, floatNumber, stringValue, stringSingleQuoted,
                    booleanValue, undefinedValue, nullValue, objectValue];

 function printResult() {
    for (var i = 0, len = myArray.length; i < len; i++) {
        var result = ("<i>" + myArray[i] + "</i>" + " ------> is TYPE: "
                       + "<strong>" + typeof (myArray[i]) + "</strong>");
       
        var container=document.getElementById("conteiner");
        var node = document.getElementById("resultDiv").cloneNode(true);
        container.appendChild(node);
        node.innerHTML = result.toString();
        if (i === 7) {
            var node1 = document.getElementById("resultDiv").cloneNode(true);
            var node2 = document.getElementById("resultDiv").cloneNode(true);
            container.appendChild(node1);
            node1.innerHTML = myArray[i].name;
            container.appendChild(node2);
            node2.innerHTML = myArray[i].talk();
        }
    }
}



