// N ededi verilir (N>1). 1den N sayisina qeder sayilarin toplamini gosteren program
// N prompt olarak kullanici terefinden girilecek:
// Example: 
// N = 3 >>>>>>>>>>>> Output = 6
// N =5 >>>>>>>>>>>> Output = 15

var numSum = 0
var userNum = prompt ("enter your number...")

for (var i = 1; i <= userNum; i++) {
    numSum = numSum + i;
}
 alert (numSum);
