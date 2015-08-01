'use strict';
//exporting the postRandomWord function
//turned it into an anoymous function because its
//the only function in this file 
module.exports = function (word, wordObject) {
	//check if the word is on the object
	if (!wordObject.hasOwnProperty(word)) {
		//if its not send a message that we added it
		wordObject[word] = true;
		return {message: 'We added your word, ' + word + ' to the list.'};
	}
	//if it is on object send a message saying we have it
	return {message: "Ooops! We already have your word! Try a different word."};
	//these messages will be the return avalue of this function
}
