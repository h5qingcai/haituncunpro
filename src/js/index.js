require(["config"],function(){
   require(["jquery","template","load"],function($,template){
	    $(function() {
			
         $(".lunbotu li").eq(0).show();
          $(".point i").mouseover(function(){
			  $(this).addClass('active').siblings().removeClass("active");
			  var index = $(this).index();
			  c = index;
			  $(".lunbotu li").eq(index).fadeIn(500).siblings().fadeOut(500);
		  });
		  var c = 0;
		  
		  var play = function(){
			  c++;
			  c = c > 2 ? 0 : c ;
			  if(c == 1){
				  $(".banner").css(
				  {
					  background: "#f1e8d9",
				  })
			  }else if(c == 2){
				  $(".banner").css({
					  background: "#ade4e9",
				  })
			  }else if(c == 0){
				  $(".banner").css({
				  	background: "#e3eef4",
				  })
			  }
			  $(".point i").eq(c).addClass('active').siblings().removeClass("active");
			  $(".lunbotu li").eq(c).fadeIn(500).siblings().fadeOut(500);
		  }
			var timer=setInterval(play,2000);
		  var playLeft=function(){
                c--;
                c = c < 0 ? 2 : c ;
								if(c == 1){
									$(".banner").css(
									{
										background: "#f1e8d9",
									})
								}else if(c == 2){
									$(".banner").css({
										background: "#ade4e9",
									})
								}else if(c == 0){
									$(".banner").css({
										background: "#e3eef4",
									})
									}
                $(".point i").eq(c).addClass('active').siblings().removeClass("active");
                $(".lunbotu li").eq(c).fadeIn(500).siblings().fadeOut(500);
            }
            //鼠标移入移出效果
            $("#lunbotu").hover(function() {
                clearInterval(timer);
            }, function() {
                timer=setInterval(play,2000);
            });
            //左右点击切换
            $("#prev").click(function(){
                playLeft();
            })
            $("#nest").click(function(){
                play();
            })
             
				    $("#close").click(function(){
							   $(".footbar").hide()
						})
				
				//模板渲染
				$.getJSON("/mock/indextop.json", function(data){
				
				const html = template("hot_sale_temp", {list : data.res_body.list});
				// 显示
				$("#saleslist").prepend(html);
			});
			
			    $(window).scroll(function(){
						var t = $(document).scrollTop();
						
						if(t>666){
							$(".ding").slideDown("slow");
							
						}else if(t<666){
							$(".ding").slideUp("slow");
						};
						
						
						
						
						
						
					})
		
				
	   
	   
    })
   })
})