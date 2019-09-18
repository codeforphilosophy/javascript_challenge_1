// Bir string verilir. Verilen stringi tersten stringin uzunlugu defe coxaldib yazan proqram
// Example:
// Verilen_String: “salam” 
// Output: malasmalasmalasmalasmalas

var str = ("your word");
var result = str
for (var i = str.length-1; i >= 1; i--){
   var result = result + str;
}

 console.log (result.split("").reverse().join(""));
