$('#click-me-1').click(convert2c);

function convert2c () {
	var numberInform = $('input').html();
	numberInform = parseInt(numberInform);

	numberInform = (numberInform - 32) / 1.8;
	$('#farhenheitValue').html('input');
	$('#celsiusValue').html(numberInform);


	$('#click-me-2').click(convert2f)

	function convert2f () {
		var numberInform = $('input').html();
	numberInform = parseInt(numberInform);

	numberInform = numberInform * 1.8 + 32;
	$('#celsiusValue').html('input');
	$('#farhenheitValue').html(numberInform);


	if ('#farhenheitValue' > 100) {
		 $('body').css('background', 'red');
	} else if ('#celsiusValue' < 0) {
		 $('body').css('background','blue');
}

}