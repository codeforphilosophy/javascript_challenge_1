// N ve M ededleri verilir (N>M). M’den N’e qeder edederin cemini veren program
// 	Example:
// N= 5, M = 2 >>>>>>> Output: 14 ( 2+3+4+5)
// 	N= 10, M = 6 >>>>>>> Output: 40 ( 6+7+8+9+10)

var numbN = prompt ("Enter Number N: ");
numbNint = Number (numbN); 

var numbM = prompt ("Enter Number M: ");
numbMint = Number (numbM)
    
var result = 0;

for (var i = numbNint; i >= numbMint; i--) {
    result = result + i;
}
 
console.log (result);