// N ededi verilir (N>=1). N ededi qeder prompt input eded alib onlarin ededi ortalamisini tapan proqram. ((A1 + A2 + A3 + ….. + AN) / N)
// Example: 
// N=2
// A1 = 4, A2 = 6 >>>>>>>>>>>>> Output: 5 ((4+6)/2)
// N=3
// A1 = 4, A2 = 6, A3 = 11 >>>>>>>>>>>>> Output: 7 ((4+6 + 11) / 3)

var num = prompt ("Here goes Number: ");
numInt = Number (num);
var result = 0;
for (var i = 1; i <= numInt; i++) {
    var yeniEded = prompt(i + " ci ededi giriniz...");
    yeniEdedInt = Number(yeniEded);
    result = result + yeniEdedInt;
}
alert(result/numInt);
