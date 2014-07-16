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

    function FindTens(num) {
        var number = num;
        if ((number < 100) && (number > 19)) {
            if (number % 10 == 0) {
                index = (number / 10) | 0;
                return (tens[index]);
            }
            else {
                index = (number / 10) | 0;
                 var ten=(tens[index]);
                index = (number % 10);
                return (ten+" " + units[index]);
            }
        }
    }
  
    function ExtractUnits(num) {
        var number = num;
        if (number < 10) {
            index = number;
            return (units[index]);
        }
    }
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = [" ", " ", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var hundreds = [" ", "One hundred", "Two hundred", "Three hundred", "Four hundred", "Five hundred", "Six hundred", "Seven hundred", "Eight hundred", "Nine hundred"];
    /*8.Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation*/

    var myFunc = function myFunc() {
        var midNum;
        var index;
        var number = (document.getElementById("num").value) - 0 || 0;

        if ((number < 100) && (number > 19)) {
            if (number % 10 == 0) {
                index = (number / 10)|0;
                Write(tens[index]);
            }
            else {
                index = (number / 10) | 0;
                Write(tens[index]);
                index = (number % 10);
                Write(" " +units[index]);
            }
        }
        else if ((number > 9) && (number < 20)) {
            index = (number - 10);
            Write(teens[index]);
        }
        else if (number > 99) {
            index = (number / 100)|0;
            Write(hundreds[index]);
            if ((number - (100 * index)) > 19) {
                midNum = (number - (100 * index));
                Write(" and ");
               Write( FindTens(midNum));
            }
            else if ( ((number - (100 * index ))< 20) && (number - (100 * index) > 9) ) {
                midNum = (number - (100 * index));
                index = (midNum - 10);
                Write(" and ");
                Write(teens[index]);
            }
            else if ( (number - (100 * index) < 10) && (number - (100 * index) > 0) ) {
                midNum = (number - (100 * index));
                Write(" and ");
                Write(ExtractUnits(midNum));
            }
        }
        else if (number<10) {
           WriteLine( ExtractUnits(number));
        }
    }();
   
    WriteLine("-------------------------------------");
}