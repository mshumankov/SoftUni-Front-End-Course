function biggerNumber(args) {
   let firstNumber = Number(args[0]);
   let secondNumber = Number(args[1]);
   
   if(firstNumber > secondNumber) {
      console.log(firstNumber);
   } else {
      console.log(secondNumber);
   }
}
biggerNumber([30, 20])