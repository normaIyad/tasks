// task 2 
// You are given an array of numbers. Write a function that calculates the total sum 
//and the average of the numbers using the reduce method
const numbers = [1, 2, 3, 4, 5 , 6 , 7 , 8, 9, 10, 11, 12, 13, 14, 15];
function calcolateTotal(arr){
  let total = arr.reduce((count,element)=>{
   return count += element
  }, 0)
  console.log(total);
  return total;
}
calcolateTotal(numbers);
// task 3 
// You are given an array of strings, some of which may be duplicates. 
//Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.
const strings = ['apple', 'apple', 'apple','banana', 'cherry', 'apple', 'banana', 'cherry', 'orange', 'banana', 'grape'];
function removeDuplicates(arr){
 let removeDuplicates = new Set(arr);
 let newarr = [...removeDuplicates];
 return newarr;
}
console.log(strings)
console.log(removeDuplicates(strings));