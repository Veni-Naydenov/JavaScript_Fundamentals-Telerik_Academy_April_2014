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
    /*2.Write a JavaScript function to check if in a given expression the brackets are put correctly.
*/
    var myFunc = function myFunc() {

        function checkBrackets(expr, bracket) {
            var count = 0;
            for (var i = 0; i < expr.length; i++) {
                if (expr[i] == bracket) {
                    count++;
                }
            }
            return count;
        }

        var testExpression = ["((a+b)/5-d)", "((a+b)/5-d"];
         
        for (var i = 0; i < testExpression.length; i++) {
            WriteLine("Test: "+(i-0+1));
            WriteLine(testExpression[i]);

            var leftBracketsCount = checkBrackets(testExpression[i], "(");
            var rightBracketsCount = checkBrackets(testExpression[i], ")");

            if (leftBracketsCount === rightBracketsCount) {
                WriteLine("The brackets are OK : " + leftBracketsCount + " couples of brackets.");
            }
            else {
                WriteLine("The brackets are wrong!");
                WriteLine(leftBracketsCount + " left brakets and " + rightBracketsCount + " right brakets!");
            }
        }
    }();
}