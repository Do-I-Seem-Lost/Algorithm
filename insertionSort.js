  let insertionSort= function(array){
   for(let i=1;i<array.length;i++){
      let key=array[i];
      let j=i-1;
   
   while(j>=0 && array[j]>key){
      array[j+1]=array[j];
      j--;
   }
   array[j+1]=key;
   }
 
   return array;
}

insert = [2,5,3,8,9,1,10,7];
console.log('The Unsorted Array:',insert);
let result =insertionSort(insert);
console.log('The Sorted Array:',result);