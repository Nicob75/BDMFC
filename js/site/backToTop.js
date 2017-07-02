
function btn_back_to_top(pTopSection) {
	if ( $(window).scrollTop() > amountScrolled ) {
        // TODO change picture to up arrow !
        // $('a.back-to-top').children('img').fadeTo('slow', 1.0);
        $('a.back-to-top').children('img').attr('src', 'img/icons/up_arrow.png');
        $('a.back-to-top').attr('href', '#page-top');
    } else {
        // TODO change picture to down arrow !
        // $('a.back-to-top').children('img').fadeTo('slow', 0.75);
        $('a.back-to-top').children('img').attr('src', 'img/icons/down_arrow.png');
        $('a.back-to-top').attr('href', pTopSection);
    }
}
