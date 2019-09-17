// Bir string verilir. Verilen string`in harflerini bir-bir yazan proqram
// String input kullanici terefinden verilecek
// Example:
// Str = “salam”
// Output =
// s
// a
// l
// a
// m

var str = prompt ("Give me a word...");

for (var i = 0; i < str.length; i++){
    console.log (str[i]);
}