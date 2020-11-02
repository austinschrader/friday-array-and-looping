// Backend Logic
function numberTo(userInput) {
	let counter = 0;
	for (let i = 0; i < parseInt(userInput); i++) {
		// alert('Hello');
		// console.log(userInput, typeof userInput);
		if (userInput > '0') {
			$('.userResults').append('<li>Beep!');
		}
		if (counter.toString() == '1') {
			$('userResults').append('<li>Beep!');
			counter += 1;
		}
	}
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
