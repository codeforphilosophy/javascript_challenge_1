// N ve M ededleri verilir (N<M). N’den M’e qeder ededlerin cemini veren program
// 	Example:
// 	N = 2, M= 5 >>>>>>> Output: 14 ( 2+3+4+5)
// 	N = 6, M= 10 >>>>>>> Output: 40 ( 6+7+8+9+10)

var numN = prompt ("Enter N number: ");
    numNint= Number(numN)

var numM = prompt ("Enter M number: ");
    numMint= Number(numM)
var result = 0;

for (var i = numNint; i <= numMint; i++) {
    result = result + i;
}
console.log (result);