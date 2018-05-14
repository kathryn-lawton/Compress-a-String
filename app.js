"use strict"


let string = "aaabbbbbccccaacccbbbaaabbbaaa";




function compressString (string) {
	let result = "";
	let count = 1;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i + 1]) {
			count ++;
		} else {
			 result += count + string[i];
			 count = 1;

		}	
	}

	return result;

	// console.log(result);
}

let finalString = compressString(string);
console.log(finalString);



	