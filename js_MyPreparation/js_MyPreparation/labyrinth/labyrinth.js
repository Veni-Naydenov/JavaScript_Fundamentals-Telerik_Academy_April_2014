
function Solve(input) {
    var rowsCols = input[0].split(" ").map(Number);
    var rows = rowsCols[0];
    var cols = rowsCols[1];

    var numberField = [];
    var arrValue = 1;
    for (var i = 0; i < rows; i++) {
        numberField[i] = [];
        for (var j = 0; j < cols; j++) {
            numberField[i][j] = arrValue++;
        }
    }

    var positionStart = input[1].split(" ").map(Number);
    direction = {
        'u': {
            row: -1,
            col: 0
        },
        'd': {
            row: 1,
            col: 0
        },
        'r': {
            row: 0,
            col: +1
        },
        'l': {
            row: 0,
            col: -1
        }
    }
    var currentRow = positionStart[0];
    var currentCol = positionStart[1];
    var lab = input.slice(2);

    var sumOfNums = 0;
    var countCells = 0;
    while (true) {
        if (currentRow<0 || currentRow>=rows 
            || currentCol < 0 || currentCol >= cols) {
            return "out " + sumOfNums;
        }
        if (numberField[currentRow][currentCol]==='x') {
            return "lost "+countCells;
        }
        sumOfNums += numberField[currentRow][currentCol];
        countCells++;
        numberField[currentRow][currentCol] = 'x';
        var dir=lab[currentRow][currentCol];
        currentRow += direction[dir].row;
        currentCol += direction[dir].col;

    }
}

test = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"]

console.log(Solve(test));
var arr=[2,3];
visited = {};
visited[arr[0]] = true;
console.log(visited[2]);