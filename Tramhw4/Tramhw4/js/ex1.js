// Create a function to calculate input
// Add function used method 2 from chapter 5 tut2

const sumMethod1 = function(num1, num2) {
    return num1 + num2;
}

console.log(`The added result is: ${sumMethod1(5, 5)}`)

// Subtract number used method 1

function sumMethod2(num1, num2) {
    return num1 - num2;
}

const sum2 = sumMethod2(7, 2)
console.log(`The subtracted result is: ${sum2}`);

// Multiply number used method 3
const sumMethod3 = (num1, num2) => {
    return num1 * num2;
}

console.log(`The multiplied result is: ${sumMethod3(4, 5)}`);

// Divide number
const sumMethod4 = (num1, num2) => {
    return num1/num2;
}

console.log(`The divided result is: ${sumMethod4(10, 5)}`)