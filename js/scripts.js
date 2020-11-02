// Backend Logic
function numberTo(userInput) {
	let counter = 0;
	// let userResults = new Array(userInput);

	// Initialize the array with 0 to userInput
	let userResults = Array.from(Array(parseInt(userInput)).keys());

	for (let i = 0; i < userResults.length; i++) {
		if (userResults[i].toString().includes(1)) {
			userResults[i] = 'Beep!';
			// console.log('This value includes 1: ' + userResults[i]);
		}
	}
	console.log(userResults);

	// for (let i = 0; i <= parseInt(userInput); i++) {
	// 	// alert('Hello');
	// 	// console.log(userInput, typeof userInput);

	// 	if (userInput.includes(1)) {
	// 		$('.userResults').append('<li>Beep!');
	// 	}
	// 	if (counter.toString() == '1') {
	// 		$('userResults').append('<li>Beep!');
	// 		counter += 1;
	// 	}
	// }
}

// else {
// 	$('.userResults').append('<li>' + i + '</li>');
// }

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = $('#userInput').val();
		$('.userResults').append(userInput);
		numberTo(userInput);
	});
});
