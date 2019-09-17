// Verilen string`in harflerini bir-bir tersten yazan proqram
// String input kullanici terefinden verilecek
// Example:
// Str = “SALAM”
// Output = 
// M
// A
// L
// A
// S

var str = prompt ("yaD ehT roF nuF"); 

for (var i = str.length-1; i >= 0; i--){
    console.log (str[i]);
}
