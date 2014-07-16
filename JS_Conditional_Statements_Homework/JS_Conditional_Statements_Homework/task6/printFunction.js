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

    /*6.Write a script that enters the coefficients a, b and c of a quadratic equation*/
    var myFunc = function myFunc() {
        var input = document.getElementById("num").value || "1 33 -7";
        var inputArray = input.split(" ");
        var a = inputArray[0] - 0; // -0 convert to Int (a is string!)
        var b = inputArray[1] - 0; // the same as a
        var c = inputArray[2] - 0;
        WriteLine("inputed :  a= " + a + ", b=" + b + ", c=" + c);
        
        if ((a!=0) && (b!= 0) && (c!=0))
        {
             var d = (b * b) - (4 * a * c);
            if (d < 0)
            {
                WriteLine("There are no real roots.");
            }
            else if (d > 0)
            {
                WriteLine("X1= " + (x1 = ((-b) + (Math.sqrt(d))) / (2 * a)) );
                WriteLine("X2= " + (x2 = ((-b) - (Math.sqrt(d))) / (2 * a)) );
            }
            else
            {
                WriteLine("X= " + (x = (-b) / (2 * a)) + " !");
            }
        }
        else if ((b==0) && (a!=0) && (c!=0))
        {
            if (((-1) * (c / a)) > 0)
            {
                WriteLine("Incomplete quadratic equation-> X1= -" + Math.sqrt((c * (-1)) / a)
                           + " ;  X2= " + Math.sqrt((c * (-1)) / a));
            }
            else
            {
                WriteLine("The equation has no solution!");
            }
        }
        else if ((b!=0) && (a!= 0) && (c == 0))
        {
            WriteLine("Incomplete quadratic equation-> X1= 0 ; X2= "+ ((-1) * (b / a)));
        }
        else
        {
            WriteLine("It\'s not a quadratic equation !");
        }
    }();
    WriteLine("-------------------------------------");
}