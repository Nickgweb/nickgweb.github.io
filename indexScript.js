$(function() {

  // 跟随导航
    var toTopHeight = $("#nav").offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() > (toTopHeight)) {
            if ('undefined' == typeof(document.body.style.maxHeight)) { //检测是否为IE6。jQuery1.9中去掉了msie的方法，所以只好这样写
                var scrollTop = $(document).scrollTop();
                $("#nav").css({
                    'position': 'absolute',
                    'top': scrollTop + 'px'
                });
            } else {
                $("#nav").addClass("nav_fixed");
            }
        } else {
            if ('undefined' == typeof(document.body.style.maxHeight)) {
                $("#nav").css({
                    'position': 'absolute',
                    'top': toTopHeight + 'px'
                });
            } else {
                $("#nav").removeClass("nav_fixed");
            }
        }
    });


    setTimeout( function(){
				$('.terminal').typewriting( "出发之前永远是梦想，上路之后永远是挑战", {
					"typing_interval": 200,
					"blink_interval": "1s",
					"cursor_color": "#00fd55"
				}, function() {
					console.log( "END" );
				});
				setTimeout( function(){
					$('.terminal').rewrite( "这里是Nickj的前端小屋~", function(){
						console.log( "END, 2." );
					});
				}, 5000);
			}, 1000);

});
