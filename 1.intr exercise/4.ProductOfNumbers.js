function productOfNumbers(args) {
let counter = 0;
for(let number of args) {
   if(number < 0) {
      counter++;
   } else if(number === 0) {
      return "Positive";
   }
}
if(counter % 2 !== 0) {
   return "Negative";
} else {
   return "Positive";
}
}
console.log(productOfNumbers([5, -4, -3]))