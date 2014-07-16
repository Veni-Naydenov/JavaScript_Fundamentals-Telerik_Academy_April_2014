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
    /*5.Write a function that finds the youngest person in a given array of persons and prints his/hers full name*/
    var myFunc = function myFunc() {
        
        function findYoungest(arr) {
            var youngestPersonIndex = 0;
            var youngestPersonAge = Number.MAX_VALUE;

            for (var i in arr) {
                if (arr[i].age < youngestPersonAge) {
                    youngestPersonAge = arr[i].age;
                    youngestPersonIndex = i;
                }
            }
            return youngestPersonIndex;
        }

        var personArray = [
        { firstname: "Shisho", lastname: "Markov", age: 45 },
        { firstname: "Bace", lastname: "Tsochev", age: 25 },
        { firstname: "Krali", lastname: "Markov", age: 30 }];

        WriteLine("All available persons");
        for (var i in personArray) {
            Write(((i-0)+1)+":");
            Write(personArray[i].firstname);
            WriteLine("___"+personArray[i].lastname);
            WriteLine("___"+personArray[i].age);
            WriteLine("");
        }

        WriteLine("The youngest persons: ");
        var youngestIndex = findYoungest(personArray);

        WriteLine(personArray[youngestIndex].firstname);
        WriteLine(personArray[youngestIndex].lastname);
        WriteLine(personArray[youngestIndex].age);
    }();
}