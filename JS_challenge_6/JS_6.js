// N ededi verilir. N’in kubu ile N’in kvadratinin ferqini (cixmaq) hesablayan proqram
// N3 -N2
// Example:
// N = 4 >>>>> Output: 48 ( 4x4x4 - 4x4 )
// N = 3 >>>>> Output: 18 ( 3x3x3 - 3x3 )

var userNumber = prompt ("Your Number")

var result = (userNumber * userNumber * userNumber) - (userNumber * userNumber)

alert (result)