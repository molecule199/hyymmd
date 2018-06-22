$(function() {
	var nowpage = 0;

	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//	不是jquery自带的,是引入的插件
	$(".content").swipe({
		swipe: function(event, direction, distance, duration, fingerCount) {
//			滑动分页功能
			console.log(direction);
			if(direction == "up") {
				nowpage++;
			}
			if(direction == "down") {
				nowpage--;
			}
			if(nowpage > 3) {
				nowpage = 3;
			} else if(nowpage < 0) {
				nowpage = 0;

			}
			$(".content").animate({
				top: -nowpage * 100 + "%"
			}, {
				duration: 400,
				complete: function() {
					if(nowpage == 1) {
						$(".page2-farm").fadeIn(2000, function() {
							$(".page2-it").fadeIn(2000)
						})
					}
					if(nowpage==2){
						$(".page3-earlyTitle").fadeIn(2000);
						$(".page3-busTitile").fadeIn(3000);
						$(".page3-bus").animate({left:"-100%"},{duration:2000})
						$(".page3-busAvatar").animate({right:"50%"},{duration:3000,complete:function(){
							$(".page3-bus").fadeOut("slow");
							$(".page3-busAvatar").fadeOut("slow");
							$(".page3-buStation").fadeOut("slow");
							$(".page3-busTitile").fadeOut("slow")
							$(".page3-earlyTitle").fadeOut("slow",function(){
								$(".page3-Tw").fadeIn("slow");
								$(".page3-Ta").fadeIn("slow",function(){
									$(".page3-Ts").animate({width:"40%"},{duration:4000,complete:function(){
										$(".page3-where").animate({width:"40%"},{duration:4000})
									}})
								})
							});
						}})
					}
				}
			})
		}

	});
	$(".page1-Building").fadeIn(1000, function() {
		$(".page1-flight").animate({
			width: "70%"
		}), {
			duration: 1000
		}
	});
	$(".page4-lightOff").click(function(){
		
		$(".page4-lightOffBg").fadeOut("slow")
		$(".page4-weKonwYou").fadeOut("slow")
		$(".page4-clickGuide").fadeOut("slow",function(){
			$(".page4-lightOnBg").fadeIn("slow");
			$(".page4-lightOn").fadeIn("slow");
			$(".page4-weKonwYou").fadeIn("slow")
		})
			})

})
//$(document).ready(function(){

//})
//等文档完成之后再执行js代码