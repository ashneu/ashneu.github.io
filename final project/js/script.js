/* 1)the trash fades out like i want but when the facts fade in, i'm not sure how to replace them in the same spot 
as the trash..they currently show up below and you have to scroll. I tried the replaceWith and the fadeout fadein and can't get it to work properly.
2)Also the animate css for the word 'waste' on 2nd html page doesn't work properly like the website shows 
3)to get to 2nd html page, click the word waste after click all trash
*/



/* this is what i thought would work but didn't


$('.cigpic').click(function () {
	$('.cigpic').replaceWith($('.cigarette'));
});

*/

$('.cigpic').click(function () {
	$('.cigpic').fadeOut('slow', function(){
        $('.cigarette').fadeIn('slow');
    });
});

$('.plasticpic').click(function () {
	$('.plasticpic').fadeOut('slow', function(){
        $('.plastic').fadeIn('slow');
    });
});

$('.foampic').click(function () {
	$('.foampic').fadeOut('slow');
	$('.foam').fadeIn('slow');
	
});


