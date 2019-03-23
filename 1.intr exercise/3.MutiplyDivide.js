function multiplyDivide(args) {
let firstNumber = (args[0]);
let secondNumber = (args[1]);
let result = 0;

if(firstNumber<=secondNumber) {
   result = firstNumber*secondNumber;
} else {
   result = firstNumber / secondNumber;
}
return result;
}
console.log(multiplyDivide([0, 50]))