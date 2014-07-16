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
    /*1.Write a function that returns the last digit of given integer as an English word.
    Examples: 512  "two", 1024  "four", 12309  "nine" */
    var myFunc = function myFunc() {
        var number = document.getElementById("input").value - 0 || 0;
        WriteLine("<br/>" );

        var findLastDigitName = function findLastDigitName(num) {
           var number = num; 
           var digit = (number % 10) - 0;
           WriteLine("Last digit is: ");
            switch (digit) {
                case 0:
                    WriteLine("=> Zero");
                    break;
                case 1:
                    WriteLine("=> One");
                    break;
                case 2:
                    WriteLine("=> Two");
                    break;
                case 3:
                    WriteLine("=> Three");
                    break;
                case 4:
                    WriteLine("=> Four");
                    break;
                case 5:
                    WriteLine("=> Five");
                    break;
                case 6:
                    WriteLine("=> Six");
                    break;
                case 7:
                    WriteLine("=> Seven");
                    break;
                case 8:
                    WriteLine("=> Eight");
                    break;
                case 9:
                    WriteLine("=> Nine");
                    break;
                default: WriteLine("Error");

                    break;
            }
        }
        // call the function !
        findLastDigitName(number);
       
}();
WriteLine("-------------------------------------");
}