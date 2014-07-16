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
    /*6. function that groups an array of personArray by age, first or last name.
    The function must return an associative array, with keys - the groups, and values -arrays with personArray in this groups
*/
    var myFunc = function myFunc() {
        
        function group(arr, groupBy) {

            var groupedArr = [];

            var finalArray = [];

            if (groupBy == "age") {

                var uniqueElements = []; 

                for (var i = 0; i < arr.length; i++) {

                    var reppeat = false; 

                    for (var j = 0; j < i; j++) {
                        if (arr[i].age == arr[j].age) {
                            reppeat = true;
                            break; 
                        }
                    }

                    if (reppeat == false) { 
                        uniqueElements.push(arr[i]);
                    }
                }

                for (var i = 0; i < uniqueElements.length; i++) {
                    var tempArr = [];

                    for (var j = 0; j < arr.length; j++) {
                        if (uniqueElements[i].age == arr[j].age) {
                            tempArr.push(arr[j]);
                        }
                    }
                    groupedArr.push(tempArr);
                }

                for (var i = 0; i < groupedArr.length; i++) {
                    finalArray.push({ Key: groupedArr[i][0].age, Value: groupedArr[i] });
                }

            }
            else // grouped by firstname
            {
                var uniqueElements = []; 

                for (var i = 0; i < arr.length; i++) {

                    var reppeat = false; 

                    for (var j = 0; j < i; j++) {
                        if (arr[i].firstname == arr[j].firstname) {
                            reppeat = true;
                            break; 
                        }
                    }

                    if (reppeat == false) { 
                        uniqueElements.push(arr[i]);
                    }
                }

                for (var i = 0; i < uniqueElements.length; i++) {
                    var tempArr = [];

                    for (var j = 0; j < arr.length; j++) {
                        if (uniqueElements[i].firstname == arr[j].firstname) {
                            tempArr.push(arr[j]);
                        }
                    }
                    groupedArr.push(tempArr);
                }

                for (var i = 0; i < groupedArr.length; i++) {
                    finalArray.push({ Key: groupedArr[i][0].firstname, Value: groupedArr[i] });
                }
            }

            return finalArray;
        }

        var personArray = [
            { firstname: "Ivan", lastname: "Nikolov", age: 2 },
            { firstname: "Tosho", lastname: "Kolev", age: 20 },
            { firstname: "Ani", lastname: "Petrova", age: 18 },
            { firstname: "Alisa", lastname: "Amazing", age: 15 },
            { firstname: "Aladin", lastname: "Ivanov", age: 33 },
            { firstname: "Nindjo", lastname: "Telkov", age: 23 },
            { firstname: "Rosko", lastname: "Rogosko", age: 3 }
        ];

        WriteLine("Group by age: ");

        var ageGroped = group(personArray, "age");

        for (var i in ageGroped) {
            WriteLine(ageGroped[i].Key);
        }

        WriteLine("Group by first name");

        var fNameGrouped = group(personArray, "firstname");

        for (var i in fNameGrouped) {
            WriteLine(fNameGrouped[i].Key);
        }
    }();
}