


window.onload = function() {
	setTimeout(function() {
		scrollTo(0, 0);
	}, 100);
}

//세로 스크롤 시에는 고정하고 가로 스크롤시에는 움직이는 경우
$(function() {
	var marginLeft = parseInt($(".menudiv").css('margin-left'));
	$(window).scroll(function(e) {
		$(".menudiv").css("margin-left", marginLeft - $(this).scrollLeft());
	});
});