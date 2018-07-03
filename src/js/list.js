require(["config"],function(){
   require(["jquery","template","cookie","load"],function($,template){
		    	
	   
	     $(function(){
				 	$.getJSON("/mock/list.json", function(data){
				 	
				 	const html = template("list_temp", {list : data.res_body.list});
				 	// 显示
				 	$(".main-list").prepend(html);
				 });
				 var fain = false;
				$(".main-list").on("mouseenter",".hua",function(){
					fain = true;
						$(this).find("button").fadeIn(300);
					
					
					fain = false;
				});
				var faout = false;
		$(".main-list").on("mouseleave",".hua",function(){
					faout = true;
			$(this).find("button").fadeOut(300);
					faout = false;
				});
				  
			$(".main-list").on("click", ".btn-cart", function(e){
					  var that  = $(this).parent()
						     
		// 获取当前选购商品信息
		    console.log(that.find(".product-name").text());
		const currProd = {
						id : that.data("id"),
						title : that.find(".product-name").text(),
						price : that.find(".price").text().slice(1),
						img : that.find(".proimg").attr("src"),
						cang:that.find(".cang").text(),
						amount : 1
		};
		console.log(currProd);
		// cookie插件配置
		$.cookie.json = true;
		// 先从 cookie 中读取已有保存的购物车数组
		const products = $.cookie("products") || [];
		// 判断当前选购商品是否在购物车中已存在
		const index = exist(currProd.id, products);
		if (index === -1) { // 不存在
			products.push(currProd);
		} else { // 存在
			products[index].amount++;
		}

		// 将当前选购的商品信息保存到 cookie 中：即将数组存回cookie 
		$.cookie("products", products, {expires:7, path:"/"});
		console.log("success");
		const  len = $.cookie("products").length;
		if($.cookie("products")){
			$("#yuan").text(len);
		}else{
			$("#yuan").text(0);
		}

		return false; // 阻止超级链接跳转
	}); 

	// 判断某 id 商品在数组中是否存在，
	// 存在则返回其在数组中的下标，-1表示不存在
	function exist(id, array) {
		for (let i = 0, len = array.length; i < len; i++) {
			if (array[i].id == id)
				return i;
		}
		return -1;
	} 

				
						
						
						
						
					
					
					
					
					
					
				 
				 
				 
				 
				 
				 
			 })
	    
	   
   })
})	   