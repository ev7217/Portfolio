$(function (){
	$("#go_to_top").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
});


// if($(window).width() < 767)
// 	$("img").removeAttr("href")