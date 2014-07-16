function Global() {
    function Write(element) {
        var result = element;
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = result.toString();
    }
    //function WriteLine(element) {
    //    var result = element;
    //    var node = document.getElementById("writeLine").cloneNode(true);
    //    document.body.appendChild(node);
    //    return node.innerHTML = result.toString();
    //}
    //---------------------------------------------------------------------------
    /*4.Write a function to count the number of divs on the web  */
    var myFunc = function myFunc() {

        function countDivs() {
            var divs = document.body.getElementsByTagName("div").length;
            Write(divs+" divs");
        }
        countDivs();
    }();
    
}