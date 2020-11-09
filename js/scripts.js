// Backend Logic
function numberTo(userInput) {
	let userResults = Array.from(Array(parseInt(userInput)).keys());
	console.log(userResults);

	for (let i = 0; i < userResults.length; i++) {
		if (userResults[i].toString().includes(3)) {
			userResults[i] = 'Wont you be my neighbor?';
		} else if (userResults[i].toString().includes(2)) {
			userResults[i] = 'Boop!';
		} else if (userResults[i].toString().includes(1)) {
			userResults[i] = 'Beep!';
		}
	}
	return userResults;
}

function reverse(string) {
	// Split a string on every character
	let reversedString = string.split('');
	// Reverses the order of elements
	reversedString = reversedString.reverse();
	// Combines the elements together
	reversedString = reversedString.join('');
	return reversedString;
}

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = $('#userInput').val();
		$('.userResults').append(userInput);
		$('.userResults2').empty().append(numberTo(userInput));
	});

	$('.opposite-button').click(function () {
		let userInput = $('.userResults2').text();
		let reverseduserInput = reverse(userInput);
		$('.userResults2').empty().append(reverseduserInput);
		console.log(userInput);
	});
});
