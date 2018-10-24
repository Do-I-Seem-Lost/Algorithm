function fn(currencies, amount) {
   const result = [];
 
   for (let i = 0; i < currencies.length; i++) {
     let changeAmount = Math.floor(amount / currencies[i]);
     amount -= (currencies[i] * changeAmount);
 
     result.push(changeAmount);
 
   }
   return result;
 }
 var x= fn([1000, 500, 100, 50, 20, 10, 5, 2, 1], 779);

 var sum = x.reduce(add, 0);
 function add(a, b) {
     return a + b;
 }
 console.log(`No. of Notes needed to pay 779 is :`,sum);
