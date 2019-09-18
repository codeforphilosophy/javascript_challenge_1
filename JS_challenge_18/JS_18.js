// Uzunlugu tek eded olan bir string verilir (verilen_string.length % 2 == 1). Verilen stringin orta herfini yazan proqram. 
// Example: 
// Verilen_string: “salam”   >>>>>>>>>> Output: l
// Verilen_string: “seriyye”   >>>>>>>>>> Output: i
// Verilen_string: “zaman”   >>>>>>>>>> Output: m

var str = prompt ("your word");

var mid = str[(str.length/2)-0.5];

alert (mid);