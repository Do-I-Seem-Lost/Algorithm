function linearSearch(array, toFind){
   for(let i = 0; i < array.length; i++){
     if(array[i] === toFind)
      return i;
   }
   return -1;
 }

 var array=[2,20,50,5,6,8];
 var find=5;
 console.log(linearSearch(array, find));