// Backend Logic
function numberTo(userInput) {
	let counter = 0;

	// Initialize the array with 0 to userInput
	let userResults = Array.from(Array(parseInt(userInput)).keys());

	for (let i = 0; i < userResults.length; i++) {
		if (userResults[i].toString().includes(1)) {
			userResults[i] = 'Beep! ';
		} else if (userResults[i].toString().includes(2)) {
			userResults[i] = 'Boop! ';
		} else if (userResults[i].toString().includes(3)) {
			userResults[i] = 'Wont you be my neighbor? ';
		} else if (userResults[i].toString() === '13') {
			userResults[i] = 'Wont you be my neighbor? ';
		} else if (userResults[i].toString() === '21') {
			userResults[i] = 'Boop ';
		} else if (userResults[i].toString() === '32') {
			userResults[i] = 'Wont you be my neighbor? ';
		}
	}
	$('.userResults2').append(userResults);
	console.log(userResults);
	return userResults;
}

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = $('#userInput').val();
		$('.userResults').append(userInput);
		numberTo(userInput);
	});
});
