function quickSort(array){
if (array.length <= 1) { 
		return array;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return newArray.concat(quickSort(right), pivot, quickSort(left));
	}
}
var myArray = [17,13,7,15,9,33,42,55,6,73];
console.log("Input array: " + myArray);
var sortedArray = quickSort(myArray);
console.log("Output array: " + sortedArray);