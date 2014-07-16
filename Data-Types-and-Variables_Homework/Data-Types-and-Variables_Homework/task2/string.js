
var result = '"Hi ninja, how are you \'?\' "';
var result2 = "'Hi Goshooooooo \"?\" '";

function printResult() {

    var node = document.getElementById("resultDiv").cloneNode(true);
    document.body.appendChild(node);
    node.innerHTML = result.toString();
    var node2 = document.getElementById("resultDiv").cloneNode(true);
    node2.innerHTML = result2.toString();
    document.body.appendChild(node2);
}