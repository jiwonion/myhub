


window.onload = function() {
	setTimeout(function() {
		scrollTo(0, 0);
	}, 100);

	menuColor(1);
	menuClick();
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

var $w = $(window).scroll(function() {
	if ($w.scrollTop() >= targetOffset_home) {
		menuColor(1);
	}
	if ($w.scrollTop() >= targetOffset_program) {
		menuColor(2);
	}
	if ($w.scrollTop() >= targetOffset_trainers) {
		menuColor(3);
	}
});


function menuColor(value) {
	for (var i = 1; i <= 6; i++) {
		var id = "#menu_a_line_" + i;

		if (i == value) {
			$(id).css({ "color": "#006BFF" });
		}
		else {
			$(id).css({ "color": "#B4C7E7" });
			
			$(id).hover(function() {
				$(this).css("color", "#006BFF");
			}, function() {
				$(this).css("color", "#B4C7E7");
			})
		}
	}
}

function menuClick(){
		$('#menu_a_line_2').click(function() {				
			var element = document.getElementById("menu_a_line_2");
				element.scrollIntoView({behavior:"smooth", block:"end", inline:"nearest"});
			});
}