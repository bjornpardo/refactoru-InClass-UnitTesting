 var assert = function(a,b) {
   if(a !== b) {
     console.error('Expected', a, 'to equal', b);
   }
   else {
     console.log('Test passed!', a, 'equals', b);
   }
 };