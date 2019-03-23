function multiplyNumbers(args) {
   let firstNumber = Number(args[0]);
   let secondNumber = Number(args[1]);
   let result = firstNumber*secondNumber;
   return result;
}
console.log(multiplyNumbers([2, 3]))