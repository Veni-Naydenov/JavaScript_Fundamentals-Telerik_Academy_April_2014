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
    /*3.Write a function that finds all the occurrences of word in a text */
    var myFunc = function myFunc() {
        var word = document.getElementById("input").value || "java";
        var isCaseSensitive = (document.getElementById("case").value || "")
                                   === "yes" ? true : false;
        var text = "Jaba jaba, hi jaba, hi Jaba, JAVA JAVA, java java java , HI HI .";
        WriteLine("Search in text:  "+'<i style="color:green">'+text+"</i>");
        WriteLine("<br/>");

        function countWord(text, word, isCaseSensitive) {
           
            function CountCaseSensitive() {
                var indexOf = text.indexOf(word) ;
                var index = indexOf + (word.length);
                var count = 0;
                while (indexOf !== -1) {
                    count++;
                    indexOf = text.indexOf(word, index) ;
                    index = indexOf + (word.length);
                }
                WriteLine(word + ": " + '<strong style="color:yellow">' + count + "</strong>" + " times in text");
            }

            function CountCaseInsensitive() {
                var bufferText = text.toLowerCase();
                
                word = word.toLowerCase();
                var indexOf = bufferText.indexOf(word) ;
                var index = indexOf + (word.length);
                var count = 0;
                while (indexOf !== -1) {
                    count++;
                    indexOf = bufferText.indexOf(word, index) ;
                    index = indexOf + (word.length);
                }
                WriteLine(word + ": " + '<strong style="color:yellow">' + count + "</strong>" + " times in text");
            }

            switch (arguments.length) {
                case 2:
                    return CountCaseInsensitive(word);
                case 3:
                    return isCaseSensitive ? CountCaseSensitive(word) : CountCaseInsensitive(word);
            }
        }
        countWord(text, word,isCaseSensitive);
    }();
    WriteLine("-------------------------------------");
}