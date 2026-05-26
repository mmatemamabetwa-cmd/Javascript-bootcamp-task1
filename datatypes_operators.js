//Exercise 1: Numbers
let numbervariable = 5;
let variable=5.5;

let addition = numbervariable + 10;
let subtraction = numbervariable - 2;
let multiplication = numbervariable * 9;
let division = numbervariable / 100;
let modulus = numbervariable % 3;
let exponentiation = numbervariable ** 1;
console.log("Number Variable: ", numbervariable);
console.log("Variable: ", variable);
console.log("Addition: ", addition);
console.log("Subtraction: ", subtraction);
console.log("Multiplication: ", multiplication);
console.log("Division: ", division);
console.log("Modulus: ", modulus);
console.log("Exponentiation: ", exponentiation);

//Exercise 2: Booleans and Operators
//1
let x =8;
let y = 12;
let isGreater = x > y;
let isLessOrEqual = x <= y;
let isEqual = x === y;
let isNotEqual = x !== y;
console.log("Is x greater than y? ", isGreater);
console.log("Is x less than or equal to y? ", isLessOrEqual);
console.log("Is x equal to y? ", isEqual);
console.log("Is x not equal to y? ", isNotEqual);
//2
 let a=true;
 let b=false;
    let AND = a && b;
    let OR = a || b;
    let NOTa = !a;
    console.log("AND: ", AND);
    console.log("OR: ", OR);
    console.log("NOTa: ", NOTa);
 //3
 let p =10;
console.log("initial value of p: ", p);
p +=10;
console.log("p += 10: ", p);
p -=2;
console.log("p -= 2: ", p);
p *=9;
console.log("p *= 9: ", p);
p /=50;
console.log("p /= 50: ", p);
p %=1;
console.log("p %= 1: ", p);