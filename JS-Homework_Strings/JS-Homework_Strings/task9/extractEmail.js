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
    /*9.Write a function for extracting all email addresses from given text.
    All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails.
    Return the emails as array of strings.
*/
    var myFunc = function myFunc() {

        var text = "Test the function. email: pesho.ivanov@gmail.com and another mail Gosho@abv.bg  zzzz. ";
        WriteLine(text);

        var mailArray = [];
        var index = text.indexOf("@");

        while (index > -1) {
            if (text[index - 1] != " " && text[index + 1] != " ") {
                var identifier = text.substring(text.lastIndexOf(" ", index - 1), index);
                var host = text.substring(index + 1, text.indexOf(".", index + 1));
                var domain = text.substring(text.indexOf(".", index + 1) + 1, text.indexOf(" ", text.indexOf(".", index + 1) + 1));
                var email = identifier + "@" + host + "." + domain;
                mailArray.push(email);
                index = text.indexOf("@", index + 1);
            }
        }
        for (var email in mailArray) {
            WriteLine(mailArray[email]);
        }
    }();
}