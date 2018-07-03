define(["jquery","cookie"],function($){
	
	$(function(){
		
		$("header").load("/html/include/header.html",function(){
			$.cookie.json = true;
			const  len = $.cookie("products").length;
			if($.cookie("products")){
				$("#yuan").text(len);
			}else{
				$("#yuan").text(0);
			}
		})
		$("footer").load("/html/include/footer.html");
	
	
	
	
	
	});
	
	
	
	
	
	
	
	
});