$(function() {
	$('.product-type').on('click', '.type-kind', function() {
		let $this = $(this);
		let index = $this.attr('index')
		$('.product-type').find('.type-kind').removeClass('type-active');
		$('.type-content').find('.product-list-box').addClass('product-none')
		$('.type-content .product-list-box').eq(index - 1).removeClass('product-none')
		$this.addClass('type-active');
	})
	var code = getQueryVariable('id')
	console.log(flag)
	var flag = getQueryVariable('flag')
	sessionStorage.setItem('flag',flag)
	// 	if(code == '' || !code){
	// 		
	// 		return;
	// 	}
	// 	if(flag != 0 || flag != 1 || !flag){
	// 		toPage({
	// 		    url : 'lost_404',
	// 		    ifPerfix : {
	// 		        name : prefix+'page',
	// 		        result : true
	// 		    }
	// 		})
	// 		return;
	// 	}
	findGoods();

	function findGoods() {
		let hasGoods = false;
		let Obj = new Object();
		$.ajax({
			url: head + '/product/selectOneList',
			type: 'POST',
			dataType: 'json',
			data: {
				id: code,
				flag: flag
			},
			success: function(res) {
				if (res.result) {
					Obj = res.result
					createDom({
						title: Obj.commodityName,
						url: Obj.commodityUrl,
						image: Obj.commodityImgStr,
						describe: Obj.commodityDescribe,
						standard: Obj.commoditySpec,
						vprice: Obj.commodityVprice,
						reprice: Obj.commodityLprice
					})
				} else {
					toPage({
						url: 'lost_404',
						ifPerfix: {
							name: prefix + 'page',
							result: true
						}
					})
				}
			}
		})
	}

	function createDom(data) {
		// let html = "<div class=\"product_wrapper_box\"><div class=\"product_wrapper_title\"><span>"+data.title+"</span></div><div class=\"product_wrapper_info\"><div class=\"product_wrapper_img\"><image src=\"${data.image}\"></image></div><div class=\"product_descripts_wrapper\"><div class=\"descripts_title\"><span class=\"dr_zn dr_hide\">描述</span><span class=\"dr_en dr_hide\">Describe</span></div><div class=\"descripts_contentd\">"+data.describe+"</div><div class=\"product-weight\"><span class=\"dr_zn dr_hide\">规格：</span><span class=\"dr_en dr_hide\">Standard：</span><span>"+data.standard+"</span></div><div class=\"product-price\"><div class=\"product-price-left\"><span class=\"product-left-title\"><span class=\"dr_zn dr_hide\">会员价：</span><span class=\"dr_en dr_hide\">VIP price：</span></span><span> ￥ ${data.vprice}</span></div><div class=\"product-price-right\"><span class=\"product-right-title\"><span class=\"dr_zn dr_hide\">零售价：</span><span class=\"dr_en dr_hide\">Retail price：</span></span><span>￥ "+data.reprice+"</span></div></div><div class=\"tmall\"><a class=\"tmall_box\" href=\"${data.url}\"><div class=\"tmall_img\"></div><div class=\"btn btn-tmall\"><span class=\"dr_zn dr_hide\">官方天猫旗舰店>></span><span class=\"dr_en dr_hide\">Tmall flagship store >></span></div></a></div></div></div></div>"
		let html =
			`<div class="product_wrapper_box">
	                    <div class="product_wrapper_title">
	                        <span>${data.title}</span>
	                    </div>
	                    <div class="product_wrapper_info">
	                        <div class="product_wrapper_img">
	                            <image src="${data.image}"></image>
	                        </div>
	                        <div class="product_descripts_wrapper">
	                            <div class="descripts_title">
	    
	                                <span class="dr_zn dr_hide">描述</span>
	                                <span class="dr_en dr_hide">Describe</span>
	                            </div>
	                            <div class="descripts_contentd">${data.describe}</div>
	                            <div class="product-weight">
	                                <span class="dr_zn dr_hide">规格：</span>
	                                <span class="dr_en dr_hide">Standard：</span>
	                                <span>${data.standard}</span>
	                            </div>
	                            <div class="product-price">
	                                <div class="product-price-left">
	                                    <span class="product-left-title">
	                                        <span class="dr_zn dr_hide">会员价：</span>
	                                        <span class="dr_en dr_hide">VIP price：</span>
	                                    </span>
	                                    <span> ￥ ${data.vprice}</span>
	                                </div>
	                                <div class="product-price-right">
	                                    <span class="product-right-title">
	                                        <span class="dr_zn dr_hide">零售价：</span>
	                                        <span class="dr_en dr_hide">Retail price：</span>
	                                    </span>
	                                    <span>￥ ${data.reprice}</span>
	                                </div>
	                            </div>
	                            <div class="tmall">
	                                <a class="tmall_box" href="${data.url}">
	                                    <div class="tmall_img">
	    
	                                    </div>
	                                    <div class="btn btn-tmall">
	                                            <span class="dr_zn dr_hide">官方天猫旗舰店>></span>
	                                            <span class="dr_en dr_hide">Tmall flagship store >></span>
	                                    </div>
	                                </a>
	                            </div>
	                        </div>
	                    </div>
	                </div>`
		let wbHtml =
			`  <div class="product_wrapper_title">${data.title}</div>
	                    <div class="product_wrapper_info">
	                        <div class="product_wrapper_img">
	                            <image src="${data.image}"></image>
	                        </div>
	                        <div class="product_descripts_wrapper">
	                            <div class="descripts_title">
	                                <span class="dr_zn dr_hide">描述</span>
	                                <span class="dr_en dr_hide">Describe</span>
	                            </div>
	                            <div class="descripts_contentd">
	                                ${data.describe}
	                            </div>
	                            <div class="product-weight">
	                                <span class="dr_zn dr_hide">规格：</span>
	                                <span class="dr_en dr_hide">Standard：</span>
	                                <span>${data.standard}</span>
	                            </div>
	                            <div class="product-price">
	                                <div class="product-price-left">
	                                    <span class="product-left-title">
	                                        <span class="dr_zn dr_hide">会员价：</span>
	                                        <span class="dr_en dr_hide">VIP price：</span>
	                                    </span>
	                                    <span>￥ ${data.vprice}</span>
	                                </div>
	                                <div class="product-price-right">
	                                    <span class="product-right-title">
	                                        <span class="dr_zn dr_hide">零售价：</span>
	                                        <span class="dr_en dr_hide">Retail price：</span>
	                                    </span>
	                                    <span>￥ ${data.reprice}</span>
	                                </div>
	                            </div>
	                            <div class="tmall">
	                                <a class="tmall_box" href="https://drplant.tmall.com/">
	                                    <div class="tmall_img">
	    
	                                    </div>
	                                    <div class="btn btn-tmall">
	                                            <span class="dr_zn dr_hide">官方天猫旗舰店>></span>
	                                            <span class="dr_en dr_hide">Tmall flagship store >></span>
	                                    </div>
	                                </a>
	                            </div>
	                        </div>
	                    </div>`
		// let wbHtml = "<div class=\"product_wrapper_title\">${data.title}</div><div class=\"product_wrapper_info\"><div class=\"product_wrapper_img\"><image src=\"${data.image}\"></image></div><div class=\"product_descripts_wrapper\"><div class=\"descripts_title\"><span class=\"dr_zn dr_hide\">描述</span><span class=\"dr_en dr_hide\">Describe</span>\n                                </div>\n                                <div class=\"descripts_contentd\">\n                                    ${data.describe}\n                                </div>\n                                <div class=\"product-weight\">\n                                    <span class=\"dr_zn dr_hide\">规格：</span>\n                                    <span class=\"dr_en dr_hide\">Standard：</span>\n                                    <span>${data.standard}</span>\n                                </div>\n                                <div class=\"product-price\">\n                                    <div class=\"product-price-left\">\n                                        <span class=\"product-left-title\">\n                                            <span class=\"dr_zn dr_hide\">会员价：</span>\n                                            <span class=\"dr_en dr_hide\">VIP price：</span>\n                                        </span>\n                                        <span>￥ ${data.vprice}</span>\n                                    </div>\n                                    <div class=\"product-price-right\">\n                                        <span class=\"product-right-title\">\n                                            <span class=\"dr_zn dr_hide\">零售价：</span>\n                                            <span class=\"dr_en dr_hide\">Retail price：</span>\n                                        </span>\n                                        <span>￥ ${data.reprice}</span>\n                                    </div>\n                                </div>\n                                <div class=\"tmall\">\n                                    <a class=\"tmall_box\" href=\"https://drplant.tmall.com/\">\n                                        <div class=\"tmall_img\">\n\n                                        </div>\n                                        <div class=\"btn btn-tmall\">\n                                                <span class=\"dr_zn dr_hide\">官方天猫旗舰店>></span>\n                                                <span class=\"dr_en dr_hide\">Tmall flagship store >></span>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>"
		$('.other-page .product-wrapper-details').html(html)
		$('.other-main .product_wrapper_box').html(wbHtml)
		localStorage.setItem('flag', flag)
		if (flag == 1) {
			$('body .dr_zn').addClass('dr_hide')
			$('body .dr_en').removeClass('dr_hide')
			$('.lan_zn').html('英文')
			$('.lan_en').html('English')
		} else {
			$('body .dr_zn').removeClass('dr_hide')
			$('body .dr_en').addClass('dr_hide')
			$('.lan_zn').html('中文')
			$('.lan_en').html('Chinese')
		}


	}
})
