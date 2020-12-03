$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.thumbs'
	});
	$('.thumbs').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true
	});


	$('.header__menu-btn').on('click', function(){
		$('.header__menu-list').slideToggle();
	});

});
