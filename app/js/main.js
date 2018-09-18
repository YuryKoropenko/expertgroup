$('.p-slider').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	items:1,
	dots: true
});

$(function() {
	var max_col_height = 0; // максимальная высота, первоначально 0
	$('.sameheight').each(function(){ // цикл "для каждой из колонок"
		if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
			max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
		}
	});
	$('.sameheight').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});