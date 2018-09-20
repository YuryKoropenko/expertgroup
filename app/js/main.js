$('.p-slider').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	items:1,
	dots: true,
	autoplay:true,
	autoplayTimeout:10000,
	autoplayHoverPause:true
});

$('.p-sitebarslider').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	items:1,
	dots: false
});

$('.p-documentation__fb').fancybox();
$('.fb-modal').fancybox();

$(function() {
	var max_col_height = 0; // максимальная высота, первоначально 0
	$('.sameheight').each(function(){ // цикл "для каждой из колонок"
		if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
			max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
		}
	});
	$('.sameheight').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты

	$('.h-menu__item-mob .h-menu__link').on('click', function() {
		$(this).parent().children('.h-menu__submenu').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.h-menu__submenu').length) return;
				$('.h-menu__submenu').slideUp(200);
				event.stopPropagation();
			});
		return false;
	});

	if ($(window).width() < 992) {
		$('.h-mobnav').on('click', function() {
			$('.header__h-nav').slideToggle(200);
			$(document).click(function(event) {
				if ($(event.target).closest('.header__h-nav').length) return;
				$('.header__h-nav').slideUp(200);
				event.stopPropagation();
			});
			return false;
		});
	}
	if ($(window).width() >= 992) {
		$('.h-mobnav').on('click', function() {
			$('.header__h-nav').fadeToggle(200);
			$(document).click(function(event) {
				if ($(event.target).closest('.header__h-nav').length) return;
				$('.header__h-nav').fadeIn(200);
				event.stopPropagation();
			});
			return false;
		});
	}

	$('.h-menu__btn').on('click', function() {
		$('.h-menu').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.h-menu').length) return;
				$('.h-menu').slideUp(200);
				event.stopPropagation();
			});
		return false;
	});

	$('.p-menu__link').on('click', function() {
		$(this).parent().toggleClass('active');
		$(this).parent().children('.p-menu__submenu').slideToggle(200);
		return false;
	});

	$('.p-menu__mob').on('click', function() {
		$(this).parent().children('.p-menu').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-menu').length) return;
				$('.p-menu').slideUp(200);
				event.stopPropagation();
			});
		return false;
	});

	$('.page__p-sitebarslider-1 .p-sitebarslider__arrow-prev').on('click', function() {
		$('.page__p-sitebarslider-1 .owl-prev').trigger('click');
		return false;
	});
	$('.page__p-sitebarslider-1 .p-sitebarslider__arrow-next').on('click', function() {
		$('.page__p-sitebarslider-1 .owl-next').trigger('click');
		return false;
	});
	$('.page__p-sitebarslider-2 .p-sitebarslider__arrow-prev').on('click', function() {
		$('.page__p-sitebarslider-2 .owl-prev').trigger('click');
		return false;
	});
	$('.page__p-sitebarslider-2 .p-sitebarslider__arrow-next').on('click', function() {
		$('.page__p-sitebarslider-2 .owl-next').trigger('click');
		return false;
	});
	$('.page__p-sitebarslider-3 .p-sitebarslider__arrow-prev').on('click', function() {
		$('.page__p-sitebarslider-3 .owl-prev').trigger('click');
		return false;
	});
	$('.page__p-sitebarslider-3 .p-sitebarslider__arrow-next').on('click', function() {
		$('.page__p-sitebarslider-3 .owl-next').trigger('click');
		return false;
	});

	if ($(window).width() < 992) {
		$('.p-content__presentimg').attr('src', 'img/present-mob.png');
	}

});