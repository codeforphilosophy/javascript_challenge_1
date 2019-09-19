// Bir string verilir. Verilen stringi stringin uzunlugu defe coxaldib yazan proqram
// Tip: stringler de ededler kimi toplana bilir 
// “men” + “yavru” + “kurtam” = “menyavrukurtam”

// Example: 
// Verilen_String: “salam” 
// Output: salamsalamsalamsalamsalam

var str = prompt ("What you would like to repeat? ");

var result= str;

for (var i = 1; i < str.length; i++){
    result = result + str; 
}

alert (result);

// -----------------------------------

var result= "";

for (var i = 0; i < str.length; i++){
    result = result + str; 
}

alert (result);