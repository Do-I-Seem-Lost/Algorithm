function marge(left,right){
  var result=[];
while(left.length>0 && right.length>0){
   result.push(left[0]<right[0]?left.shift():right.shift());
}
return result.concat(left.length?left:right);
};

var l=[14, 23, 45, 98];
var r=[6, 33, 42, 67];
console.log('The Separate Sorted Array L:',l);
console.log('The Separate Sorted Array R:',r);
console.log('The Sorted Array:',marge(l,r));