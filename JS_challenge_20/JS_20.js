// N ededi ve bir string verilir (string.length > N). String sozunun basdan N’ci herfine qeder yazan proqram
// Example:
// N = 3, verilen_string = “salam” >>>>>>>>>> Output: sal
// N = 4, verilen_string = “salam” >>>>>>>>>> Output: sala
// N = 2, verilen_string = “pufdik” >>>>>>>>>> Output: pu
// N = 3, verilen_string = “pufdik” >>>>>>>>>> Output: puf


var num = 3;
var str = "pufdiy";
var result = "";
for (var i = 0; i < num; i++){
    result = result + str[i];
}

console.log (result);