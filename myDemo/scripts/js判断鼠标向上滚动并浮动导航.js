var $nav = $('#Jnav'),
	navTop = $nav.offset().top,
	navH = $nav.outerHeight(),
	winTop_1 = 0,
	winWidth = $(window).width(),
	holder = jQuery('<div>');

$(window).on('scroll',function(){
	var winTop_2 = $(window).scrollTop();
	holder.css('height',navH);
	//开始浮动，不过不显示
	if(winTop_2 > navTop && winWidth > 980){
		holder.show().insertBefore($nav);
		$nav.addClass('fixed-nav');
	}else{
		holder.hide();
		$nav.removeClass('fixed-nav');
	}
	//判断鼠标向上滚动，显示出来
	if(winTop_2 > winTop_1 && winWidth > 980){
		$nav.removeClass('fixed-nav-appear');
	}else if(winTop_2 < winTop_1){
		$nav.addClass('fixed-nav-appear');
	}
	winTop_1 = $(window).scrollTop();
})