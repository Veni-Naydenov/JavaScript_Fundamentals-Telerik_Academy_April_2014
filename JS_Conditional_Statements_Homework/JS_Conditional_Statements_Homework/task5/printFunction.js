function Global() {

   function Write(element) {
        var result = element;
        var container = document.getElementById("container");
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    function WriteLine(element) {
        var result = element;
        var container = document.getElementById("container");
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //---------------------------------------------------------------------------

    /*5.Write script that asks for a digit and depending on the input shows
    the name of that digit (in English) using a switch statement.*/
    var myFunc = function myFunc() {
        var input = (document.getElementById("num").value) - 0 || 0; // -0 convert to Int (first is string!)
        var digit = input; 
        
        WriteLine("inputed -> "+digit);
        if (digit>9) {
            WriteLine("This is not a digit(-1 < digit < 10) !!!");
            WriteLine("Try again please!");
        }
        else {
            switch (digit) {
                case 0:
                    WriteLine("The digit is-> Zero");
                    break;
                case 1:
                    WriteLine("The digit is-> One");
                    break;
                case 2:
                    WriteLine("The digit is-> Two");
                    break;
                case 3:
                    WriteLine("The digit is-> Three");
                    break;
                case 4:
                    WriteLine("The digit is-> Four");
                    break;
                case 5:
                    WriteLine("The digit is-> Five");
                    break;
                case 6:
                    WriteLine("The digit is-> Six");
                    break;
                case 7:
                    WriteLine("The digit is-> Seven");
                    break;
                case 8:
                    WriteLine("The digit is-> Eight");
                    break;
                case 9:
                    WriteLine("The digit is-> Nine");
                    break;
                default: WriteLine("Error");
                         
                    break;
            }
        }
    }();
    WriteLine("-------------------------------------");
}