var type_id = '';
var type_name = '';
var ifExit = false;
var Img = [];
let t_name = '';
var newCount = 1;
var newLimitVal = 10;
let txt = '',
	next = '',
	last = ''
txt = `共{total}条`
next = `下一页`,
	last = `上一页`
$(function() {
	$('.product-type').on('click', '.type-kind', function() {
		let $this = $(this);
		let index = $this.attr('index')
		$('.product-type').find('.type-kind').removeClass('type-active');
		$('.type-content').find('.product-list-box').addClass('product-none')
		$('.type-content .product-list-box').eq(index - 1).removeClass('product-none')
		$this.addClass('type-active');
		switch (index) {
			case '1':
				$('.product-page').removeClass('product-none')
				break;
			case '2':
				$('.product-page').addClass('product-none')
				break;
			default:
				break;
		}
	})
	let pageHTML =
		`								<div class="product-page questions-pagenation">
									<div id="brand-news" class="demo"></div>
								</div>`
	$('.product-new').after(pageHTML);
	if (getQueryVariable('code')) {
		List.forEach((item, index) => {
			ifExit = item.second.some((sItem, sIndex) => {
				if (sItem.secondCategoryId == getQueryVariable('code')) {
					type_name = sItem.secondCategoryName
				}
				return sItem.secondCategoryId == getQueryVariable('code')
			})

			item.second.forEach((sItem, sIndex) => {
				if (getQueryVariable('code') == sItem.secondCategoryId) {
					Img.push(sItem.commodityImgOne)
					Img.push(sItem.commodityImgTwo)
				}
			})
			if (ifExit) {
				type_id = item.firstCategoryId
			}
		})
		if (type_id != '') {
			// findGoodsList(1, 100000)

			findLeftList(1, 100000, 'pcode');
			findRightList('pcode');
			createElement();

		} else {
			window.location.href = 'lost_404.html'
		}
		$('.top-title-name').html(type_name)
	} else if (getQueryVariable('e_id')) {

		eFind_left(1, 100000, 'e_id');
		eFind_right('e_id');
		createElement();
		efficalList.forEach((item) => {
			if (getQueryVariable('e_id') == item.id) {
				t_name = item.efficacyName
			}
		})

		$('.top-title-name').text(t_name)
		$('.img-details').addClass('dr_hide')
	} else if (getQueryVariable('keywords')) {
		kFind_left(1, 100000, 'keywords');
		kFind_right('keywords');
		createElement();
		if (flag == 0) {
			t_name = '搜索商品'
		} else {
			t_name = 'Search for goods'
		}
		$('.top-title-name').text(t_name)
		$('.img-details').addClass('dr_hide')
	} else {
		toPage({
			url: 'lost_404',
			data: {
				flag: flag,
				node: checkPage('lost_404')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	}

	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: 0,
		autoHeight: true,
		pagination: {
			el: '.type-swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						if (flag == 0) {
							text = '新品推荐';
						} else {
							text = 'News';
						}
						break;
					case 1:
						if (flag == 0) {
							text = '产品top10';
						} else {
							text = 'Top10';
						}
						break;
				}
				return `
	                     <li class="${className}"><a >${text}</a></li>
	                 `;
			},
		}
	})
	window.onresize = function() {
		var myswiper = new Swiper('#swiper-nav', {
			autoplay: false,
			loop: true, // 循环模式选项
			// pagination: {
			//     el: '.swiper-pagination-nav',
			// }
			initialSlide: 0,
			autoHeight: true,
			pagination: {
				el: '.type-swiper-pagination',
				clickable: true,
				renderBullet: function(index, className) {
					switch (index) {
						case 0:
							if (flag == 0) {
								text = '新品推荐';
							} else {
								text = 'News';
							}
							break;
						case 1:
							if (flag == 0) {
								text = '产品top10';
							} else {
								text = 'Top10';
							}
							break;
					}
					return `
	                     <li class="${className}"><a >${text}</a></li>
	                 `;
				},
			}
		})
	}
	$('.screen-big .product-list-box').on('click', '.product-list .product-to-find', function() {
		let code = $(this).parent().parent().parent().attr('code');
		let pcode = ''

		let data = {
			id: code,
			flag: flag,
			node: checkPage('goods_details')
		}
		if (getQueryVariable('keywords')) {
			pcode = $(this).parent().parent().parent().attr('keywords');
			data.keywords = pcode;
		} else if (getQueryVariable('e_id')) {
			pcode = $(this).parent().parent().parent().attr('e_id');
			data.e_id = pcode;
		} else if (getQueryVariable('code')) {
			pcode = $(this).parent().parent().parent().attr('pcode');
			data.fid = pcode;
		}
		sessionStorage.setItem('pcode', pcode)
		toPage({
			url: wjt_prefix + '/product/getDetails',
			data: data,
			ifPerfix: {
				name: '',
				result: false
			}
		})

	})
	$('.screen-small .product-list-box').on('click', '.product-info', function() {
		let code = $(this).attr('code');
		let pcode = $(this).attr('pcode');
		let data = {
			id: code,
			flag: flag,
			node: checkPage('goods_details')
		}
		if (getQueryVariable('keywords')) {
			pcode = $(this).parent().parent().parent().attr('keywords');
			data.keywords = pcode;
		} else if (getQueryVariable('e_id')) {
			pcode = $(this).parent().parent().parent().attr('e_id');
			data.e_id = pcode;
		} else if (getQueryVariable('code')) {
			pcode = $(this).parent().parent().parent().attr('pcode');
			data.fid = pcode;
		}
		sessionStorage.setItem('pcode', pcode)
		toPage({
			url: wjt_prefix + '/product/getDetails',
			data: data,
			ifPerfix: {
				name: '',
				result: false
			}
		})
	})
})

function kFind_right(keywords) {
	$.ajax({
		url: head + '/product/selectGoodsNameList',
		type: 'GET',
		dataType: 'json',
		data: {
			commodityName: decodeURI(getQueryVariable('keywords')),
			series: 2,
			flag: flag
		},
		success: function(res) {
			createRight(res.result, decodeURI(getQueryVariable('keywords')), keywords)
		}
	})
}

function kFind_left(page, limit, keywords) {
	let brandNews = new Array();
	$.ajax({
		url: head + '/product/selectGoodsNameList',
		type: 'GET',
		dataType: 'json',
		data: {
			commodityName: decodeURI(getQueryVariable('keywords')),
			series: 1,
			flag: flag
		},
		success: function(res) {
			brandNews = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstDate = ''
			if (newCount == 1) {
				newCount = brandNews.length
				firstDate = brandNews
				if (brandNews.length > newLimitVal) {
					brandNews.forEach((item, index) => {
						if (index < newLimitVal) {
							brand.push(item)
						}
					})
				} else {
					brandNews.forEach((item, index) => {
						brand.push(item)
					})
				}
				brandNews = brand
			}
			$("#brand-news").sPage({
				page: page, //当前页码，必填
				total: newCount, //数据总条数，必填.
				pageSize: newLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: txt, //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: last, //上翻页文字描述，默认“上一页”
				nextPage: next, //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					kFind_left(page, newLimitVal, keywords)
				}
			});
			createLeft(res.result, decodeURI(getQueryVariable('keywords')), keywords)
		}
	})
}

function eFind_right(keywords) {
	$.ajax({
		url: head + '/product/selectGoodsListEfficacyId',
		type: 'GET',
		dataType: 'json',
		data: {
			efficacyId: getQueryVariable('e_id'),
			flag: flag
		},
		success: function(res) {
			createRight(res.result, getQueryVariable('e_id'), keywords)
		}
	})
}

function eFind_left(page, limit, keywords) {
	let brandNews = new Array();
	$.ajax({
		url: head + '/product/selectGoodsListEfficacyId',
		type: 'GET',
		dataType: 'json',
		data: {
			efficacyId: getQueryVariable('e_id'),
			flag: flag,
			page: page,
			limit: limit
		},
		success: function(res) {
			// createElement(res.result)
			brandNews = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstDate = ''
			if (newCount == 1) {
				newCount = brandNews.length
				firstDate = brandNews
				if (brandNews.length > newLimitVal) {
					brandNews.forEach((item, index) => {
						if (index < newLimitVal) {
							brand.push(item)
						}
					})
				} else {
					brandNews.forEach((item, index) => {
						brand.push(item)
					})
				}
				brandNews = brand
			}
			$("#brand-news").sPage({
				page: page, //当前页码，必填
				total: newCount, //数据总条数，必填.
				pageSize: newLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: txt, //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: last, //上翻页文字描述，默认“上一页”
				nextPage: next, //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					eFind_left(page, newLimitVal, keywords)
				}
			});
			createLeft(brandNews, getQueryVariable('e_id'), keywords)
		}
	})
}

function findLeftList(page, limit, keywords) {
	let brandNews = new Array();
	$.ajax({
		url: head + '/product/selectGoodsList',
		type: 'GET',
		dataType: 'json',
		data: {
			firstCategoryId: type_id,
			secondCategoryId: getQueryVariable('code'),
			flag: flag,
			page: page,
			limit: limit,
			series: 1
		},
		success: function(res) {
			brandNews = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstDate = ''
			if (newCount == 1) {
				newCount = brandNews.length
				firstDate = brandNews
				if (brandNews.length > newLimitVal) {
					brandNews.forEach((item, index) => {
						if (index < newLimitVal) {
							brand.push(item)
						}
					})
				} else {
					brandNews.forEach((item, index) => {
						brand.push(item)
					})
				}
				brandNews = brand
			}
			$("#brand-news").sPage({
				page: page, //当前页码，必填
				total: newCount, //数据总条数，必填.
				pageSize: newLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: txt, //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: last, //上翻页文字描述，默认“上一页”
				nextPage: next, //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					findLeftList(page, newLimitVal, keywords)
				}
			});
			createLeft(brandNews, getQueryVariable('code'), keywords)
		}
	})
}

function findRightList(keywords) {
	let brandNews = new Array();
	$.ajax({
		url: head + '/product/selectGoodsList',
		type: 'GET',
		dataType: 'json',
		data: {
			firstCategoryId: type_id,
			secondCategoryId: getQueryVariable('code'),
			flag: flag,
			series: 2
		},
		success: function(res) {
			brandNews = res.result == '' ? [] : res.result;

			createRight(brandNews, getQueryVariable('code'), keywords)
		}
	})
}


function createLeft(arr, pId, keywords) {
	let html = '';
	let wbHtml = '';
	if (arr.length) {
		for (let prop in arr) {
			if (prop <= 5) {
				html +=
					`<div class="product-list" code="${arr[prop].commodityId}">
	                                <div class="product-sign">
	                                    <div class="options_box">
	                                        <image class="options" src="../image/active.png">
	                                        <div class="num-count-v">${parseInt(prop)+1}</div>
	                                        </image>
	                                    </div>
	                                    <div class="product-img">
	                                        <image src="${arr[prop].commodityImgStr}"></image>
	                                    </div>
	                                </div>
	                                <div class="product-info">
	                                    <div class="product-info-cnname">
	                                        <span>${arr[prop].commodityName}</span>
	                                    </div>
	                                    <div class="product-info-enname">
	                                <span class="info_scripts">
	                                         <span>${arr[prop].commodityDescribe}</span>
	                                </span>
	                                    </div>
	                                    <div class="product-info-norms">
	                                        <div class="norms">
	                                            <span class="dr_zn dr_hide">规格：</span><span class="dr_en dr_hide">Standard：</span><span>${arr[prop].commoditySpec}</span>
	                                        </div>
	                                    </div>
	                                    <div class="product-info-price">
	                                        <div class="product-m-price"><span class="dr_zn dr_hide">会员价：</span><span class="dr_en dr_hide">VIP price：</span><span>￥ ${arr[prop].commodityVprice}</span></div>
	                                        <div class="product-o-price"><span class="dr_zn dr_hide">零售价：</span><span class="dr_en dr_hide">Retail price：</span><span>￥ ${arr[prop].commodityLprice}</span></div>
	                                    </div>
	                                    <div class="product-info-find-detail">
	                                        <span class="product-to-find"><a href="javascript:;">
	                                            <span class="dr_zn dr_hide">查看详情</span>
	                                            <span class="dr_en dr_hide">view details</span>
	                                        </a><span class="iconfont icon-youjiantou"></span></span>
	
	                                    </div>
	                                </div>
	                            </div>`
				wbHtml +=
					`<div class="product-info" code="${arr[prop].commodityId}">
	                                <div class="product-img-info">
	                                    <img src="${arr[prop].commodityImgStr}" alt="">
	                                </div>
	                                <div class="product-details ">
	                                    <div class="product-details-title">${arr[prop].commodityName}</div>
	                                    <div class="product-details-info">
	                                        <span>${arr[prop].commodityDescribe}</span>
	                                    </div>
	                                    <div class="product-weight">
	                                        <span class="dr_zn dr_hide">规格：</span>
	                                        <span class="dr_en dr_hide">Standard:</span>
	                                        <span>${arr[prop].commoditySpec}</span>
	                                    </div>
	                                    <div class="product-price">
	                                        <div class="product-price-left">
	
	                                            <span class="dr_zn dr_hide product-left-title">
	                                                 <span class="dr_zn dr_hide">会员价：</span>
	                                                 <span class="dr_en dr_hide">VIP price:</span>
	                                            </span>
	                                            <span>￥${arr[prop].commodityVprice}</span>
	                                        </div>
	                                        <div class="product-price-right">
	                                            <span class="dr_zn dr_hide product-right-title">
												   <span class="dr_zn dr_hide">零售价：</span>
												   <span class="dr_en dr_hide">Retail price：</span>
	                                            </span>
	                                            <span>￥${arr[prop].commodityLprice}</span>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>`
			} else {
				html +=
					`<div class="product-list" code="${arr[prop].commodityId}">
	                                <div class="product-sign">	                                
										<div class="product-img">
										    <image src="${arr[prop].commodityImgStr}"></image>
										</div>
	                                </div>
	                                <div class="product-info">
	                                    <div class="product-info-cnname">
	                                        <span>${arr[prop].commodityName}</span>
	                                    </div>
	                                    <div class="product-info-enname">
	                                <span class="info_scripts">
	                                         <span>${arr[prop].commodityDescribe}</span>
	                                </span>
	                                    </div>
	                                    <div class="product-info-norms">
	                                        <div class="norms">
	                                            <span class="dr_zn dr_hide">规格：</span><span class="dr_en dr_hide">Standard：</span><span>${arr[prop].commoditySpec}</span>
	                                        </div>
	                                    </div>
	                                    <div class="product-info-price">
	                                        <div class="product-m-price"><span class="dr_zn dr_hide">会员价：</span><span class="dr_en dr_hide">VIP price：</span><span>￥${arr[prop].commodityVprice}</span></div>
	                                        <div class="product-o-price"><span class="dr_zn dr_hide">零售价：</span><span class="dr_en dr_hide">Retail price：</span><span>￥${arr[prop].commodityLprice}</span></div>
	                                    </div>
	                                    <div class="product-info-find-detail">
	                                        <span class="product-to-find"><a href="javascript:;">
	                                            <span class="dr_zn dr_hide">查看详情</span>
	                                            <span class="dr_en dr_hide">view details</span>
	                                        </a><span class="iconfont icon-youjiantou"></span></span>
	
	                                    </div>
	                                </div>
	                            </div>`
				wbHtml +=
					`<div class="product-info" code="${arr[prop].commodityId}">
	                                <div class="product-img-info">
	                                    <img src="${arr[prop].commodityImgStr}" alt="">
	                                </div>
	                                <div class="product-details ">
	                                    <div class="product-details-title">${arr[prop].commodityName}</div>
	                                    <div class="product-details-info">
	                                        <span>Camellia Yuet Ze moisturizing cream</span>
	                                    </div>
	                                    <div class="product-weight">
	                                        <span class="dr_zn dr_hide">规格：</span>
	                                        <span class="dr_en dr_hide">Standard:</span>
	                                        <span>${arr[prop].commoditySpec}</span>
	                                    </div>
	                                    <div class="product-price">
	                                        <div class="product-price-left">
	
	                                            <span class="dr_zn dr_hide product-left-title">
	                                                 <span class="dr_zn dr_hide">会员价：</span>
	                                                 <span class="dr_en dr_hide">VIP price:</span>
	                                            </span>
	                                            <span>￥${arr[prop].commodityVprice}</span>
	                                        </div>
	                                        <div class="product-price-right">
	                                            <span class="dr_zn dr_hide product-right-title">
												   <span class="dr_zn dr_hide">零售价：</span>
												   <span class="dr_en dr_hide">Retail price：</span>
	                                            </span>
	                                            <span>￥${arr[prop].commodityLprice}</span>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>`
			}
		}
	} else {
		html +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
		wbHtml +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
	}
	$('.product-new').html(html)
	$('.product-new .product-list').attr(keywords, pId)
	$('.other-main .news .product-list-box').html(wbHtml)
	$('.other-main .news .product-list-box .product-info').attr(keywords, pId)
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
}

function createRight(arr, pId, keywords) {
	let html = '',
		wbHtml = '';
	if (arr.length) {
		for (let prop in arr) {
			html +=
				`<div class="product-list" code="${arr[prop].commodityId}">
	                                <div class="product-sign">
	                                    <div class="options_box">
	                                        <image class="options" src="../image/active.png">
	                                        <div class="num-count-v">${parseInt(prop)+1}</div>
	                                        </image>
	                                    </div>
	                                    <div class="product-img">
	                                        <image src="${arr[prop].commodityImgStr}"></image>
	                                    </div>
	                                </div>
	                                <div class="product-info">
	                                    <div class="product-info-cnname">
	                                        <span>${arr[prop].commodityName}</span>
	                                    </div>
	                                    <div class="product-info-enname">
	                                <span class="info_scripts">
	                                         <span>${arr[prop].commodityDescribe}</span>
	                                </span>
	                                    </div>
	                                    <div class="product-info-norms">
	                                        <div class="norms">
	                                            <span class="dr_zn dr_hide">规格：</span><span class="dr_en dr_hide">Standard：</span><span>${arr[prop].commoditySpec}</span>
	                                        </div>
	                                    </div>
	                                    <div class="product-info-price">
	                                        <div class="product-m-price"><span class="dr_zn dr_hide">会员价：</span><span class="dr_en dr_hide">VIP price：</span><span>￥${arr[prop].commodityVprice}</span></div>
	                                        <div class="product-o-price"><span class="dr_zn dr_hide">零售价：</span><span class="dr_en dr_hide">Retail price：</span><span>￥${arr[prop].commodityLprice}</span></div>
	                                    </div>
	                                    <div class="product-info-find-detail">
	                                        <span class="product-to-find"><a href="javascript:;">
	                                            <span class="dr_zn dr_hide">查看详情</span>
	                                            <span class="dr_en dr_hide">view details</span>
	                                        </a><span class="iconfont icon-youjiantou"></span></span>
	
	                                    </div>
	                                </div>
	                            </div>`
			wbHtml +=
				`<div class="product-info" code="${arr[prop].commodityId}">
	                                <div class="product-img-info">
	                                    <img src="${arr[prop].commodityImgStr}" alt="">
	                                </div>
	                                <div class="product-details ">
	                                    <div class="product-details-title">${arr[prop].commodityName}</div>
	                                    <div class="product-details-info">
	                                        <span>${arr[prop].commodityDescribe}</span>
	                                    </div>
	                                    <div class="product-weight">
	                                        <span class="dr_zn dr_hide">规格：</span>
	                                        <span class="dr_en dr_hide">Standard:</span>
	                                        <span>${arr[prop].commoditySpec}</span>
	                                    </div>
	                                    <div class="product-price">
	                                        <div class="product-price-left">
	
	                                            <span class="dr_zn dr_hide product-left-title">
	                                                 <span class="dr_zn dr_hide">会员价：</span>
	                                                 <span class="dr_en dr_hide">VIP price:</span>
	                                            </span>
	                                            <span>￥ ${arr[prop].commodityVprice}</span>
	                                        </div>
	                                        <div class="product-price-right">
	                                            <span class="dr_zn dr_hide product-right-title">
												   <span class="dr_zn dr_hide">零售价：</span>
												   <span class="dr_en dr_hide">Retail price：</span>
	                                            </span>
	                                            <span>￥ ${arr[prop].commodityLprice}</span>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>`
		}

	} else {
		html +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
		wbHtml +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
	}
	$('.other-page .product-top10').html(html)
	$('.other-page .product-top10 .product-list').attr(keywords, pId)
	$('.other-main .product-top10  .product-list-box').html(wbHtml)
	$('.other-main .product-top10 .product-list-box').attr(keywords, pId)
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
}

function createElement() {
	let div1 = `<div class="swiper-pagination big-swiper-pagination"></div>`
	let str = Img[0];
	let newStr = '',
		result = ''
	if(str){
		result = str.split('=');
	}	
	if(result.length >=2){	
		newStr = result[1];
	}
	var pcode = getQueryVariable('code');
	if (Img.length > 0) {
		let div =
			` <div class="swiper-slide">
	                                        <a style="background:url(${Img[0]});background-size: cover;background-position: center center;background-repeat: no-repeat;">
	
	                                        </a>
	                                    </div>
	                                    <div class="swiper-slide ">
	                                        <a style="background:url(${Img[1]});background-size: cover;background-position: center center;background-repeat: no-repeat;">
	
	                                        </a>
	                                    </div>`
		let divImg =
			`
		<div>
			<img code="${newStr}" pcode="${pcode}" src="${Img[1]}" alt="">
		</div>`
		$('.topImg').on('click', 'img', function() {
			let code = $(this).attr('code');
			let fid = $(this).attr('pcode');

			let data = {
				id: code,
				flag: flag,
				node: checkPage('goods_details')
			}
			data.fid = fid;
			sessionStorage.setItem('pcode', fid);
			toPage({
				url: wjt_prefix + '/product/getDetails',
				data: data,
				ifPerfix: {
					name: '',
					result: false
				}
			})
		})
		$('.product-img').on('click', 'img', function() {
			let code = $(this).attr('code');
			let fid = $(this).attr('pcode');

			let data = {
				id: code,
				flag: flag,
				node: checkPage('goods_details')
			}
			data.fid = fid;
			sessionStorage.setItem('pcode', fid);
			toPage({
				url: wjt_prefix + '/product/getDetails',
				data: data,
				ifPerfix: {
					name: '',
					result: false
				}
			})
		})
		$('.topImg').append(divImg)
		$('.product-img').html(divImg)
	} else {
		$('.product-img').addClass('dr_hide')
	}
	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: 0,
		autoHeight: true,
		pagination: {
			el: '.type-swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						if (flag == 0) {
							text = '新品推荐';
						} else {
							text = 'News';
						}
						break;
					case 1:
						if (flag == 0) {
							text = '产品top10';
						} else {
							text = 'Top10';
						}
						break;
				}
				return `
	                     <li class="${className}"><a >${text}</a></li>
	                 `;
			},
		},
	})
}

function findGoods() {
	$.ajax({
		url: head + '/product/selectGoodsList',
		type: 'GET',
		dataType: 'json',
		data: {
			firstCategoryId: type_id,
			secondCategoryId: getQueryVariable('code')
		},
		success: function(res) {

			createElement(res.result)
		}
	})
}
