


window.onload = function() {
	setTimeout(function() {
		scrollTo(0, 0);
	}, 100);

	menuColor(1);

	selectMenuId = "#menu_a_line_1";
}

//세로 스크롤 시에는 고정하고 가로 스크롤시에는 움직이는 경우
$(function() {
	var marginLeft = parseInt($(".menudiv").css('margin-left'));
	$(window).scroll(function(e) {
		$(".menudiv").css("margin-left", marginLeft - $(this).scrollLeft());
	});
});

var targetOffset_home = $(".homediv").offset().top - 1;
var targetOffset_program = $(".programdiv").offset().top - 1;
var targetOffset_trainers = $(".trainersdiv").offset().top - 1;
var targetOffset_services = $(".servicesdiv").offset().top - 1;

$(window).resize(function() {

	targetOffset_home = $(".homediv").offset().top - 1;
	targetOffset_program = $(".programdiv").offset().top - 1;
	targetOffset_trainers = $(".trainersdiv").offset().top - 1;
    targetOffset_services = $(".servicesdiv").offset().top - 1;
});

var $w = $(window).scroll(function() {
	if ($w.scrollTop() >= targetOffset_home) {
		if (!selectMenu) menuColor(1);
		if (!selectRadio) $("input[name='page']:radio[value='home']").prop('checked', true);
	}
	if (Math.floor($w.scrollTop()) == Math.floor(targetOffset_home)+1) {
		selectMenu = false;
		selectRadio = false;
	}
	if ($w.scrollTop() >= targetOffset_program) {
		if (!selectMenu) menuColor(2);
		if (!selectRadio) $("input[name='page']:radio[value='program']").prop('checked', true);
	}
	if (Math.floor($w.scrollTop()) == Math.floor(targetOffset_program)+1) {
		selectMenu = false;
		selectRadio = false;
	}
	if ($w.scrollTop() >= targetOffset_trainers) {
		if (!selectMenu) menuColor(3);
		if (!selectRadio) $("input[name='page']:radio[value='trainers']").prop('checked', true);
	}
	if (Math.floor($w.scrollTop()) == Math.floor(targetOffset_trainers)+1) {
		selectMenu = false;
		selectRadio = false;
	}
	if ($w.scrollTop() >= targetOffset_services) {
		if (!selectMenu) menuColor(4);
		if (!selectRadio) $("input[name='page']:radio[value='services']").prop('checked', true);
	}
	if (Math.floor($w.scrollTop()) == Math.floor(targetOffset_services)+1) {
		selectMenu = false;
		selectRadio = false;
	}
});


function menuColor(value) {
	for (var i = 1; i <= 6; i++) {
		var id = "#menu_a_line_" + i;

		if (i == value) {
			$(id).css({ "color": "#006BFF" });

			selectMenuId = id;
		}
		else {
			$(id).css({ "color": "#B4C7E7" });
		}
	}
}

var selectRadio = false;

$("input:radio[name='page']").click(function() {
	if ($("input:radio[name='page']:checked").val() == 'home') {
		var offset = $('.homediv').offset();
		$('html').animate({ scrollTop: offset.top }, 400);
	}

	if ($("input:radio[name='page']:checked").val() == 'program') {
		var offset = $('.programdiv').offset();
		$('html').animate({ scrollTop: offset.top }, 400);
	}

	if ($("input:radio[name='page']:checked").val() == 'trainers') {
		var offset = $('.trainersdiv').offset();
		$('html').animate({ scrollTop: offset.top }, 400);
	}

	if ($("input:radio[name='page']:checked").val() == 'services') {
		var offset = $('.servicesdiv').offset();
		$('html').animate({ scrollTop: offset.top }, 400);
	}

	selectRadio = true;
});


$('.homediv').animate({
	opacity:'1'
	}, 500);


var selectMenuId = "";
var selectMenu = false;

$('#menu_a_line_1').hover(function() {
	$(this).css("color", "#006BFF");
}, function() {
	if (selectMenuId != '#menu_a_line_1')
		$(this).css("color", "#B4C7E7");
});

$('#menu_a_line_1').click(function() {

	var offset = $('.homediv').offset();
	$('html').animate({ scrollTop: offset.top }, 400);
	menuColor(1);
	selectMenu = true;
});

$('#menu_a_line_2').hover(function() {
	$(this).css("color", "#006BFF");
}, function() {
	if (selectMenuId != '#menu_a_line_2')
		$(this).css("color", "#B4C7E7");
});

$('#menu_a_line_2').click(function() {

	var offset = $('.programdiv').offset();
	$('html').animate({ scrollTop: offset.top }, 400);
	menuColor(2);
	selectMenu = true;
});

$('#menu_a_line_3').hover(function() {
	$(this).css("color", "#006BFF");
}, function() {
	if (selectMenuId != '#menu_a_line_3')
		$(this).css("color", "#B4C7E7");
});

$('#menu_a_line_3').click(function() {

	var offset = $('.trainersdiv').offset();
	$('html').animate({ scrollTop: offset.top }, 400);
	menuColor(3);
	selectMenu = true;
});

$('#menu_a_line_4').hover(function() {
	$(this).css("color", "#006BFF");
}, function() {
	if (selectMenuId != '#menu_a_line_4')
		$(this).css("color", "#B4C7E7");
});

$('#menu_a_line_4').click(function() {

	var offset = $('.servicesdiv').offset();
	$('html').animate({ scrollTop: offset.top }, 400);
	menuColor(4);
	selectMenu = true;
});

