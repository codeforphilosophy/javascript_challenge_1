
// Bir string verilir. Verilen stringin son herfini stringun uzunlugu qeder coxaldib (birlesdirib) yazan program
// Example:
// Verilen_String: “salam” 
// Output: mmmmm

var str = ("hello");

var lastL = str[str.length-1];

var result = lastL;

for (var i = str.length; i>1; i--) {
    result = result + lastL;
}
console.log (result);

// var result = "";
// for (var i = 0; i< str.length; i++) {
//     result = result + lastL;
    
// }