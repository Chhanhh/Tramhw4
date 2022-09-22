// Write a program that creates the following array, then calculates and shows the following:
// Declaring array
const values = [3,11,7,2,9,10];
// Initializing Sum value with first element of array
var Sum = values[0]
// Initializing Max value with first element of array
var Max = values[0]
// Initializing Min value with first element of array
var Min = values[0]
// Loop to iterate through every element of array
for(let i=1;i<values.length;i++) {
    // Adding value to Sum
    Sum=Sum+values[i];
    // Checking Max condition
    if(Max<values[i]) {
        Max=values[i]
    }
    // Checking Min condition
    if(Min>values[i]) {
        Min=values[i]
    }
}
console.log("Sum of elements of given array is:",Sum)
console.log("Maximum of element of given array is:",Max)
console.log("Min of the element of given array is:",Min)