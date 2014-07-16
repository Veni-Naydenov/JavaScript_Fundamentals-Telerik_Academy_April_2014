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
    /*7.that parses an URL address given in the format:[protocol]://[server]/[resource]
*/
    var myFunc = function myFunc() {

        function parseURL() {
            var url = "http://www.devbg.org/forum/index.php";
            WriteLine(url);

            var protokol = url.substring(0, url.indexOf(":"));
            var server = url.substring(url.indexOf(":") + 3, url.indexOf("/", url.indexOf(":") + 3));
            var resource = url.substr(url.indexOf("/", url.indexOf(":") + 3) + 1)
            var URLJSON = { "Protokol": protokol, "Server": server, "Resource": resource };

            WriteLine("Protokol :" + URLJSON.Protokol);
            WriteLine("Server :" + URLJSON.Server);
            WriteLine("Resource :" + URLJSON.Resource);
        }
        parseURL();
    }();
}