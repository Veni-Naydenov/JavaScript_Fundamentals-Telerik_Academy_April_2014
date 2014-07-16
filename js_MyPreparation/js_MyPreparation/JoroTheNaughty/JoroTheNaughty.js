
function Solve(input) {
    var rowsColsJumps = input[0].split(" ").map(Number);
    var rowsN = rowsColsJumps[0];
    var colsM = rowsColsJumps[1];
    var jumps = rowsColsJumps[2];

    var startPosition = input[1].split(" ").map(Number);
    var currentRow = startPosition[0];
    var currentCol = startPosition[1];

    var arrayValues = 1
    //generate field array
    var field = [];
    for (var i = 0; i < rowsN; i++) {
        field[i] = [];
        for (var j = 0; j < colsM; j++) {
            field[i][j] = arrayValues++;
        }
    }

    var jumpsArray = readJumps();//jump array with objects(row: ,col:)
    var escaped = false;
    var sumOfNumbers = 0;
    var numberOfJumps = 0;
    var jumpIndex = 0;

    while (true) {

        if (currentRow<0 || currentRow>=rowsN 
            || currentCol < 0 || currentCol >= colsM) {
            escape = true;
            break;
        }

        if (field[currentRow][currentCol] === 'x') {
            escape = false;
            break;
        }
        sumOfNumbers += field[currentRow][currentCol];
        numberOfJumps++;
        field[currentRow][currentCol] = 'x';

        currentRow += jumpsArray[jumpIndex].row;
        currentCol += jumpsArray[jumpIndex++].col;

        if (jumpIndex >= jumps) {
            jumpIndex = 0;
        }
    }

    if (escape) {
        return "escaped " + sumOfNumbers;
    }
    else {
        return "caught " + numberOfJumps;
    }




    function readJumps() {
        var jumpsArr = [];
       
        for (var i = 2; i < 2 + jumps; i++) {
            var parsedJump = input[i].split(" ").map(Number);

            var currJump = {
                row: parsedJump[0],
                col: parsedJump[1]
            }
            jumpsArr.push(currJump);
        }

        return jumpsArr;
    }
}
test1 = [
'6 7 3',
'0 0',
'2 2',
'-2 2',
'3 -1'
];
/*
console.log(Solve(test1));
// Useful !
// row * cols + col + 1
//-----
console.log(isFinite("44"));
//...........
var arr = [2,4];
var otherArr = [1,3,4];
Array.prototype.push.apply(arr, otherArr);
console.log(arr);

*/