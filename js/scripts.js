// Backend Logic
function numberTo(userInput) {
	let counter = 0;
	for (let i = 0; i < parseInt(userInput); i++) {
		if (counter.toString().indexOf('1') > -1) {
			$('ol').append('<li>Beep!');
			counter += 1;
		}
		if (i.includes('1')) {
			console.log('This is a 1 digit');
		}
		$('.userResults').append('</br> Hello');
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
