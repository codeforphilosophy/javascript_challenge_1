// Bir string verilir. Eger verilen stringin uzunlugu cut ededdirse “verilen stringin uzunlugu tek deyil!” mesaji verilir. Eger verilen stringin uzunlugu tek ededdirse orta herf yazilir.
// Example: 
// Verilen_string: “nurlan”   >>>>>>>>>> Output: “verilen stringin uzunlugu tek deyil!”
// Verilen_string: “salam”   >>>>>>>>>> Output: l
// Verilen_string: “seriyye”   >>>>>>>>>> Output: i

var str = prompt ("word of the day?");

var mid = str[str.length/2-0.5];

if (str.length % 2 ==0) {
    alert ("verilen stringin uzunlugu tek deyil!");
}

else {
    alert (mid);
}