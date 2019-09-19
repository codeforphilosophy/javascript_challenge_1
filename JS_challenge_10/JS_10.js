// N ve M ededleri verilir (Hansinin boyuk oldugu belli deyil). M ile N arasindaki ededlerin toplamini veren program. ( M ve N daxil deyil )
// 	Example:
// 	M = 2, N= 5 >>>>>>> Output: 7 ( 3+4)
// 	M = 10, N= 6 >>>>>>> Output: 40 ( 7+8+9)

var numN = prompt ("N NUmber")
numNint = Number (numN)
var numM = prompt ("M Number")
numMint = Number (numM)

var result = 0;
if (numNint > numMint) {
    for (var i = numMint; i <= numNint; i++){
        result = result + i;
    }
    alert (result);
}

else {
    for (var i = numMint; i >= numNint; i--){
        result = result + i;
    }
    alert (result);
}



var result = 0;
if (numNint > numMint) {
    for (var i = numMint-1; i < numNint; i++){
        result = result + i;
    }
}
else {
    for (var i = numNint-1; i < numMint; i++){
        result = result + i;
    }
}

alert (result);