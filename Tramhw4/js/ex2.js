// Convert Fahrenheit to Celsius
function fToCel(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5/9;
    var message = `${fTemp} \xB0F is ${fToCel} \xB0C.`;
        console.log(message);
}
fToCel(32)
fToCel(98.7)
fToCel(212)