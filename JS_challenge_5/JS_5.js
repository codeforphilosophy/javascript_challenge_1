// N ededi verilir. 1’den N ededine qeder olan tek ededlerin hasilini yazan proqram
// Example: 
// N=4 >>>>> Output = 3 (1x3)
// N=6 >>>>> Output = 15 ( 1x3x5 )

var num = 7;
var result = 1;

for (var i = 1; i <= num; i++) {
    if ( i % 2 ===1) {

result =  result * i;
}
}

console.log (result);