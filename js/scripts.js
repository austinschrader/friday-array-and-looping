function numberTo(userInput) {
	for (let i = 0; i < userInput; i++) {
		if (i.includes('1')) {
			console.log('This is a 1 digit');
		}
		$('.userResults').append('</br> Hello');
	}
}

$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = parseInt($('#userInput').val());
		$('.userResults').append(userInput);
	});
});
