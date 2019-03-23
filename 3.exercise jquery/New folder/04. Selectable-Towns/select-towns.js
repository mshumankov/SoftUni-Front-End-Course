function attachEvents() {
	$('#items li').on('click', clicked);
	let towns = $('#items li');

	function clicked() {

		if ($(this).hasClass('check')) {
			$(this).removeClass('check').css('background', '');
		} else {
			$(this).addClass('check').css('background', '#DDD');
		}
	}

	$('#showTownsButton').on('click', buttonclick);
	function buttonclick() {
		let selectedTowns = [];
		for (town of towns) {
			if ($(town).hasClass('check')) {
				selectedTowns.push(town.textContent)

			}

		}
		$('#selectedTowns').text(selectedTowns.join(', '));
		
	}


}