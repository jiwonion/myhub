


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

mainInit();

function mainInit(){	
 menuMove('#menu_a_line_1',1);
 menuMove('.subitem1',1,"item");
 
 menuMove('#menu_a_line_2',2);
 menuMove('.subitem2',2,"item");
 
 menuMove('#menu_a_line_3',3);
 menuMove('.subitem3',3,"item");
 
 menuMove('#menu_a_line_4',4);
 menuMove('.subitem4',4,"item");
 
 menuHover('#menu_a_line_1');
 menuHover('#menu_a_line_2');
 menuHover('#menu_a_line_3');
 menuHover('#menu_a_line_4');
}

function menuHover(id){
	$(id).hover(function() {
	$(this).css("color", "#006BFF");
	}, function() {
	if (selectMenuId != id)
		$(this).css("color", "#B4C7E7");
	});

}


function menuMove(id, num, value){
	
	var pageID;
	
	   switch(num){
	case 1: pageID = ".homediv"; break;
	case 2: pageID = ".programdiv"; break;
	case 3: pageID = ".trainersdiv"; break;
	case 4: pageID = ".servicesdiv"; break; 
	}

	
	$(id).click(function() { 

	var offset = $(pageID).offset();
	$('html').animate({ scrollTop: offset.top }, 400);
	menuColor(num);
	selectMenu = true;
	
		if(value == "item")	{
		$('#menu-toggle').prop('checked',false);
	}	
	
	});

}

$('html').click(function(e){
	if(!$(e.target).hasClass("menu-items") && $('.menu-items').offset().left == 0){		
		$('#menu-toggle').prop('checked',false);
	}
});



