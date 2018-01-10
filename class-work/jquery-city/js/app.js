// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/* 
$('#first').click(moveTobig1)
	function moveTobig1 () {
		$('#bigimage').attr('src', 'img/1.jpg');
	}

$('#second').click(moveTobig2)
	function moveTobig2 () {
		$('#bigimage').attr('src', 'img/2.jpg');
	}

$('#third').click(moveTobig3)
	function moveTobig3 () {
		$('#bigimage').attr('src', 'img/3.jpg');
	}

$('#fourth').click(moveTobig4)
	function moveTobig4 () {
		$('#bigimage').attr('src', 'img/4.jpg');
	}
*/


// below is the condensed version of above
$('.thumb').click(changeBigimage);

	function changeBigimage () {
		var imageUrl = $(this).attr('src');
	  	$('#bigimage').attr('src', imageUrl);
	}

