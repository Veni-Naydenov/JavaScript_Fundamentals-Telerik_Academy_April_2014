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
    /*1.Write functions for working with shapes in  standard Planar coordinate system
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending
L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points
Check if three segment lines can form a triangle
 */
    var myFunc = function myFunc() {
        
        function getPoint(x, y) {
            return {
                x: x,
                y: y
            };
        }

        function getLine(point1, point2) {
            return {
                pointA: point1,
                pointB: point2
            };
        }

        function getDistance(point1, point2) {
            return parseInt(Math.abs(point1.x - point2.x)
                * Math.abs(point1.x - point2.x)
                 + Math.abs(point1.y - point2.y)
                 * Math.abs(point1.y - point2.y));
        }

        function IsTriangle(line1, line2, line3) {
            var a = getDistance(line1.pointA, line1.pointB);
            var b = getDistance(line2.pointA, line2.pointB);
            var c = getDistance(line3.pointA, line3.pointB);
            if (a + b > c && a + c > b && b + c > a) {
              WriteLine("true");
            } else {
                WriteLine("false");
            }
        }

        var p1 = getPoint(23, 20);
        var p2 = getPoint(23, 30);
        var p3 = getPoint(36, 21);

        var l1 = getLine(p1, p2);
        var l2 = getLine(p2, p3);
        var l3 = getLine(p1, p3);

        var distance = getDistance(p2, p1);
       
        WriteLine("point2: x=" + p2.x + ", y=" + p2.y);
        WriteLine("point1: x=" + p1.x + ", y=" + p1.y);
        WriteLine("Distance= " + distance);
        WriteLine("Does the three lines can form a triangle? ");
        IsTriangle(l1, l2, l3);
    }();
}