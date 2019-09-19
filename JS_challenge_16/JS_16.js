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

// ----------------------------------------

var str = ("your word");
var str_ters = "";
var result = "";

for (let i = str.length-1; i >= 0; i++) {
   str_ters = str_ters + str[i];
}

for (let i = 0; i < str.length; i++) {
   result = result + str_ters;
}

alert(result);

// ----------------------------------------

var result = "";
for (var i=0; i<str.length; i++) {
   result += str;
}

var ters_result = "";
for (var i=0; i < result.length; i++) {
   ters_result = result[i] + ters_result;
}

alert(ters_result);