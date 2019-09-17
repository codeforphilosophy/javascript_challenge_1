// N ededi kullanici terefinden verilir. 1’den N ededine qeder ededelerin hasilini (carpimini, vurmaq) yazan proqram. (Faktorial problemi)
// Example: 
// N = 4 >>>> Output = 24 (1x2x3x4)
// N = 5 >>>> Output = 120 (1x2x3x4x5)

var num = prompt ("Y0ur Number ?");
var result = 1;

for (var i = 1; i <= num; i++) {

result =  result * i;
}

alert (result);