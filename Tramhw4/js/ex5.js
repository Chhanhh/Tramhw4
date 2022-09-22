
let readline = require('readline-sync');

// create an empty array words to store each word entered by the user(except "stop")
words = []

// prompt the user to enters words one by one 
console.log("Enter words one by one (Enter \"stop\" to exit the input):");

// read the first word
word = readline.question("");

// loop that continues until the user enters "stop" in any case
// convert the input to lowercase and then compare with "stop"
while(word.toLowerCase() != "stop") {
	
	words.push(word); // insert the read word at the end of words array
	word = readline.question(""); // read the next word
}

// array is not empty, display the words entered by joining the array contents separated by a space
if(words.length > 0)
	console.log("You entered the following words: "+words.join(" "));
else // stop was the first word entered, hence array is empty, display message containing this information
	console.log("No words to display, Stop was the first word entered.");