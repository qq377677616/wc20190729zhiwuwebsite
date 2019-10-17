var brandNews = new Array(),
	brandReport = new Array(),
	brandPhotos = new Array(),
	newComing = new Array(),
	newCount = 1,
	photoCount = 1
reportCount = 1,
	comingCount = 1,
	newLimitVal = 6,
	reportLimitVal = 6,
	photoLimitVal = 4,
	comingLimitVal = 8,
	topicList = new Array();
let txt = '',
	next = '',
	last = ''
txt = `共{total}条`
next = `下一页`,
	last = `上一页`

$(function() {
	let type = getQueryString('type')
	if (type == 1 || type == 2 || type == 3 || type == 4) {
		$('.type-index-info > div').addClass('dr_hide')
		$('.top-type-list > ul > li').removeClass('active')
		$('.type-index-info > div').eq(type - 1).removeClass('dr_hide')
		$('.top-type-list > ul > li').eq(type - 1).addClass('active')
		console.log(type)
		if (type == 4) {
			$('.other-page').addClass('no_more')
		} else {
			$('.other-page').removeClass('no_more')
		}
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

	// if(flag == 0){
	//
	// }else {
	//     txt = `{total} Item`
	//     next = `Next`,
	//         last = `Last`
	// }
	findNews(1, 100000);

	findPhoto(1, 100000);
	findReport(1, 100000);
	// findComing(1,100000);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	findTopic();
	createTopic(topicList)

})


function createTopic(arr) {
	let html = '';
	let wbHTML = '';
	let imgList = [{
		id: 1,
		url: '../image/topic_2.png'
	}, {
		id: 2,
		url: '../image/topic_1.png'
	}, {
		id: 3,
		url: '../image/topic_3.png'
	}]
	for (let prop in arr) {
		let node = ''
		switch (prop){
			case '0':
				node = 266
				break;
			case '1':
				node = 265
				break;
			case '2':
				node = 267
				break;								
			default:
				break;
		}
		html +=
			`                                <div class="photo-box" index="${arr[prop].id}" node="${node}">
	                                <div class="photo-img-sign"></div>
	                                <div class="photo-img">
	                                    <img src="${imgList[prop].url}" alt="">
	                                </div>
	                                <div class="photo-title">${arr[prop].threeCategoryName}</div>
	
	                            </div>`
		wbHTML +=
			`<div class="photo-box" index="${arr[prop].id}" node="${node}">
	                                <div class="photo-img-sign"></div>
	                                <div class="photo-img">
	                                    <img src="${imgList[prop].url}" alt="">
	                                </div>
	                                <div class="photo-title">${arr[prop].threeCategoryName}</div>
	                            </div>`
		$('.new-coming .brand-photo-list').html(html)
		$('.topic-list').html(wbHTML)
	}
	$('.new-coming .photo-box').on('click', function() {
		let node = $(this).attr('node');
		let index = $(this).attr('index');
		toPage({
			url: 'dr_topic',
			data: {
				flag: flag,
				code: index,
				node: node
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.topic-list .photo-box').on('click', function() {
		let node = $(this).attr('node');
		let index = $(this).attr('index');
		toPage({
			url: 'dr_topic',
			data: {
				flag: flag,
				code: index,
				node: node
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})

}

function createNews(arr, website) {
	var HTML = ''
	var wbHTML = ''
	if (website == 0) {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				HTML +=
					`<div class="brand-news-list">
	                            <div class="brand-news-box">
	                                <div class="brand-news-title">${arr[i].title}
	                                </div>
	                                <div class="brand-news-img" style="background: url('${arr[i].img}');background-position: center top;background-size: cover;background-repeat: no-repeat  "></div>
	                                <div class="brand-news-search" index="${arr[i].id}">
									<span class="dr_zn dr_hide">查看详情</span>
									<span class="dr_en dr_hide">Check</span>
									</div>
	                            </div>
	                        </div>`
			}
		} else {
			HTML +=
				`<div class="fans-questions-list">
	                               <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                            </div>`
		}
		$('.brand-news .breand-new-list-box').html(HTML)
	} else {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				let time;
				time = arr[i].publishTime ? splitTime(arr[i].publishTime) : arr[i].publishTime;
				wbHTML +=
					`<div class="news-info" index="${arr[i].id}">
	                        <div class="new-img" style="background: url(${arr[i].img});background-position: center center;background-repeat: no-repeat;background-size: cover">
	
	                         </div>
	
	                        <div class="news-details">
	                            <div class="news-details-title">${arr[i].title}</div>
	                            <div class="news-details-info">
	                                <span>${txt}</span>
	                            </div>
	                            <div class="news-details-descripts">
	                                <div class="news-search-count">
	                                    <i class="new-search-icon iconfont icon-chakan"></i>
	                                    <span class="search-count">${arr[i].hits}
	                                    </span>
	                                </div>
	                                <div class="news-search-time">
	                                    <span>${time}</span>
	                                </div>
	                            </div>
	                        </div>
	                    </div>`
			}
		} else {
			wbHTML +=
				`<div class="fans-area-list">
	                            <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                        </div>`
		}
		$('.other-main .news-list').html(wbHTML)
	}
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}

	$('.brand-news .brand-news-search').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				flag: flag,
				id: index,
				node: checkPage('news')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})

	$('.other-main .news-list .news-info').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				flag: flag,
				id: index,
				node: checkPage('news')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})

}

function createReport(arr, website) {
	var HTML = ''
	var wbHTML = ''
	if (website == 0) {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				HTML +=
					`<div class="brand-news-list">
	                            <div class="brand-news-box">
	                                <div class="brand-news-title">${arr[i].title}
	                                </div>
	                                <div class="brand-news-img" style="background: url('${arr[i].img}');background-position: center top;background-size: cover;background-repeat: no-repeat  "></div>
	                                <div class="brand-news-search" index='${arr[i].id}'>
									<span class="dr_zn dr_hide">查看详情</span>
									<span class="dr_en dr_hide">Check</span>
									</div>
	                            </div>
	                        </div>`
			}

		} else {
			HTML +=
				`<div class="fans-questions-list">
	                               <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                            </div>`
		}
		$('.report_box .brand-report-list-box').html(HTML)
	} else {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				wbHTML +=
					`<div class="photo-info" index="${arr[i].id}">
	                            <div class="photo_box">
	                                <div class="img-sign">
	
	                                </div>
	                                <div class="photo-img" style="background: url('${arr[i].img}');background-position: center top;background-size: cover;background-repeat: no-repeat">
									
	                                </div>
	                                <div class="photo-title">${arr[i].title}</div>
	                                <div class="photo-en-title">
	                                    </div>
	                            </div>
	                        </div>`
			}
		} else {
			wbHTML +=
				`<div class="fans-area-list">
	                            <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                        </div>`
		}
		$('.other-main .report-list').html(wbHTML)
	}
	$('.other-main .report-list .photo-info').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				flag: flag,
				id: index,
				node: checkPage('report')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.report_box .brand-news-search').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				flag: flag,
				id: index,
				node: checkPage('report')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})

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

function createPhoto(arr, website) {
	var HTML = ''
	var html = ''
	var wbHTML = ''
	if (website == 0) {
		console.log(arr.length)
		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				HTML +=
					`<div class="photo-box">
	                                <div class="photo-img-sign"></div>
	                                <div class="photo-img">
	                                    <img src="${arr[i].img}" alt="">
	                                </div>
	                                <div class="photo-title">${arr[i].title}</div>
	                                <div class="photo-en-title">
	                                    </div>
	                            </div>`
			}
			html = HTML
			console.log(HTML)
		} else {
			HTML +=
				`<div class="fans-questions-list">
	                                   <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                            </div>`
		}
		$('.brand-photo .brand-photo-list').html(HTML)
	} else {
		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				wbHTML +=
					`<div class="photo-info">
	                            <div class="photo_box">
	                                <div class="img-sign">
	
	                                </div>
	                                <div class="photo-img" style="background: url('${arr[i].img}');background-position: center top;background-size: cover;background-repeat: no-repeat">
	
	                                </div>
	                                <div class="photo-title">${arr[i].title}</div>
	                                <div class="photo-en-title">
	                                    </div>
	                            </div>
	                        </div>`
			}
		} else {
			wbHTML +=
				`<div class="fans-area-list">
	                            <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
	                        </div>`
		}
		$('.news-photo .photo-list').html(wbHTML)
	}
}

function findNews(page, limit) {
	let brandNews = new Array();
	$.ajax({
		url: head + '/brandstate/selectBrandStateListEng',
		type: 'POST',
		async: false,
		dataType: 'json',
		data: {
			page: page,
			limit: limit,
			firstCategoryId: 201,
			flag: flag
		},
		success: (res) => {
			brandNews = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstDate = ''
			if (newCount == 1) {
				newCount = brandNews.length
				firstDate = brandNews
				if (brandNews.length > 6) {
					brandNews.forEach((item, index) => {
						if (index < 6) {

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
					findNews(page, newLimitVal)
				}
			});
			createNews(brandNews, 0)
			createNews(firstDate, 1)

		}
	})
}

function findReport(page, limit) {
	let brandReport = new Array();
	let firstDate = ''
	$.ajax({
		url: head + '/brandstate/selectBrandStateListEng',
		type: 'POST',
		async: false,
		dataType: 'json',
		data: {
			page: page,
			limit: limit,
			firstCategoryId: 202,
			flag: flag
		},
		success: (res) => {
			brandReport = res.result == '' ? [] : res.result;
			let brand = new Array();
			if (reportCount == 1) {
				firstDate = brandReport;
				reportCount = brandReport.length
				if (brandReport.length > 6) {
					brandReport.forEach((item, index) => {
						if (index < 6) {
							brand.push(item)
						}
					})
				} else {
					brandReport.forEach((item, index) => {
						brand.push(item)
					})
				}
				brandReport = brand
			}
			console.log(brandReport)
			$("#brand-report").sPage({
				page: page, //当前页码，必填
				total: reportCount, //数据总条数，必填.
				pageSize: reportLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: txt, //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: last, //上翻页文字描述，默认“上一页”
				nextPage: next, //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					findReport(page, reportLimitVal)
				}
			});
			createReport(brandReport, 0)
			createReport(firstDate, 1)
		}
	})
}

function findPhoto(page, limit) {
	let brandPhotos = new Array();
	$.ajax({
		url: head + '/brandstate/selectBrandStateListEng',
		type: 'POST',
		async: false,
		dataType: 'json',
		data: {
			page: page,
			limit: limit,
			firstCategoryId: 204,
			flag: flag
		},
		success: (res) => {
			brandPhotos = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstData = '';
			if (photoCount == 1) {
				photoCount = brandPhotos.length
				firstData = brandPhotos;
				if (brandPhotos.length > 4) {
					brandPhotos.forEach((item, index) => {
						if (index < 4) {
							brand.push(item)
						}
					})
				} else {
					brandPhotos.forEach((item, index) => {
						brand.push(item)
					})
				}
				brandPhotos = brand
			}
			$("#brand-photo").sPage({
				page: page, //当前页码，必填
				total: photoCount, //数据总条数，必填
				pageSize: photoLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: txt, //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: last, //上翻页文字描述，默认“上一页”
				nextPage: next, //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					findPhoto(page, photoLimitVal)
				}
			});
			createPhoto(brandPhotos, 0)
			createPhoto(firstData, 1)
		}
	})
}

function findTopic() {
	$.ajax({
		url: head + '/news/selectNewsCatalogue',
		type: 'POST',
		async: false,
		dataType: 'json',
		data: {
			flag: flag
		},
		success: (res) => {
			topicList = res.result ? res.result : [];
		}
	})
}

function getSimpleText(html) {
	var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
	var msg = html.replace(re1, ''); //执行替换成空字符
	return msg;
}



function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

$(document).ready(function() {
	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: getQueryVariable('type') - 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						if (flag == 1) {
							text = 'News';
						} else {
							text = '品牌新闻';
						}
						break;
					case 1:
						if (flag == 1) {
							text = 'Reports';
						} else {
							text = '媒体报道';
						}
						break;
					case 2:
						if (flag == 1) {
							text = 'Photos';
						} else {
							text = '品牌相册';
						}
						break;
					case 3:
						if (flag == 1) {
							text = 'News source';
						} else {
							text = '新闻源';
						}
						break;
				}
				return `
	                    <li class="${className}"><a >${text}</a></li>
	                `;
			},
		},
	})
	myswiper.on('slideChangeTransitionEnd', function() {
		let url;
		if (myswiper.activeIndex == 1 || myswiper.activeIndex == 5) {
			url = changeURLArg(window.location.href, 'type', 1);
		} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 4) {
			console.log(123)
			url = changeURLArg(window.location.href, 'type', 4);
		} else {
			url = changeURLArg(window.location.href, 'type', myswiper.activeIndex);
		}
		history.pushState('', '', url);
	});

})
window.onresize = function() {
	var listul = $('.top-type-list ul')
	var listLi = $('.top-type-list ul li')
	var typeDiv = $('.type-index-info > div')
	var index = getQueryVariable('type')
	var $this = $('.top-type-list ul li').eq(index - 1)
	listLi.removeClass('active')
	$this.addClass('active')
	typeDiv.addClass('dr_hide')
	typeDiv.eq("" + (index - 1) + "").removeClass('dr_hide')
	let url = changeURLArg(window.location.href, 'type', index)
	history.pushState('', '', url)
	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: getQueryVariable('type') - 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						if (flag == 1) {
							text = 'News';
						} else {
							text = '品牌新闻';
						}
						break;
					case 1:
						if (flag == 1) {
							text = 'Reports';
						} else {
							text = '媒体报道';
						}
						break;
					case 2:
						if (flag == 1) {
							text = 'Photos';
						} else {
							text = '品牌相册';
						}
						break;
					case 3:
						if (flag == 1) {
							text = 'News source';
						} else {
							text = '新闻源';
						}
						break;
				}
				return `
	                    <li class="${className}"><a >${text}</a></li>
	                `;
			},
		},
	})
	myswiper.on('slideChangeTransitionEnd', function() {
		let url;
		if (myswiper.activeIndex == 1 || myswiper.activeIndex == 5) {
			url = changeURLArg(window.location.href, 'type', 1);
		} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 4) {
			url = changeURLArg(window.location.href, 'type', 4);
			console.log(123)
		} else {
			url = changeURLArg(window.location.href, 'type', myswiper.activeIndex);
		}
		history.pushState('', '', url);
	});
}
