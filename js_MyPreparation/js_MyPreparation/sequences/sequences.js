
function Solve(input) {
    var array = input.map(Number).slice(1,input.length+1);
   
    var count = 1;
    var last=array[0];
    for (var i = 1; i <array.length ; i++) {

        if (array[i]<last) {
            count++;
        }
        last=array[i];
    }
    return count;
}
test1=[
'9',
'1',
'8',
'8',
'7',
'6',
'5',
'7',
'7',
'6'
];

console.log(Solve(test1));