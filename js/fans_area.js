var fansResult = new Array(),
	count = 1,
	areaLimitVal = 8;

$(function() {
	findList(1, 10000)
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
				let type = new Array();
				if (flag == 0) {
					type[0] = '会员政策'
					type[1] = '会员活动'
					type[2] = '植粉问答'
				} else {
					type[0] = 'Policy'
					type[1] = 'Activity'
					type[2] = 'Plant powder'
				}
				switch (index) {
					case 0:
						text = `${type[0]}`;
						break;
					case 1:
						text = `${type[1]}`;
						break;
					case 2:
						text = `${type[2]}`;
						break;
				}
				return `
					    <li class="${className}"><a >${text}</a></li>
					`;
			},
		},
	})

	myswiper.on('slideChangeTransitionEnd', function() {
		var imgurl = $('.swiper-slide-active img').attr("src");
		var txt = $('.swiper-slide-active').html();
		let url;
		console.log("内容：" + txt + "===索引值：" + myswiper.activeIndex + "===图片地址：" + imgurl);
		if (myswiper.activeIndex == 1 || myswiper.activeIndex == 4) {
			url = changeURLArg(window.location.href, 'type', 1);
		} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 3) {
			url = changeURLArg(window.location.href, 'type', 3);
		} else {
			url = changeURLArg(window.location.href, 'type', 2);
		}
		history.pushState('', '', url);

	});

	var listul = $('.top-type-list ul')
	var listLi = $('.top-type-list ul li')
	var typeDiv = $('.type-index-info > div')
	var index = getQueryVariable('type')
	var $this = $('.top-type-list ul li').eq(index - 1)
	listLi.removeClass('active')
	$this.addClass('active')
	typeDiv.addClass('dr_hide')
	typeDiv.eq("" + (index - 1) + "").removeClass('dr_hide')

	if (getQueryVariable('type') == 3 || getQueryVariable('type') == 0) {
		$('.addFans').removeClass('dr_main')
	} else {
		$('.addFans').addClass('dr_main')
	}

	myswiper.on('slideChangeTransitionEnd', function() {
		if (myswiper.activeIndex == 3 || myswiper.activeIndex == 0) {
			$('.addFans').removeClass('dr_main')
		} else {
			$('.addFans').addClass('dr_main')
		}
	});

	$(document).ready(function() {
		$('.addFans').on('click', function() {
			$('.fans-saying-bg').removeClass('dr_main');
			$('.other-main .say-title').val(''),
				$('.other-main .say-content').val('');
		})
		$('.fans-saying-bg').on('click', function(event) {
			$(this).addClass('dr_main');
			event = event || window.event;
			event.stopPropagation();
			// console.log(123)
		})
		$('.fans-saying-bg').on('click', '.fans_content', function(event) {
			event = event || window.event;
			event.stopPropagation();
			let tit = $('.other-main .say-title').val(),
				detial = $('.other-main .say-content').val();
			let data = new Object({
				title: tit,
				content: detial
			})
			console.log(123)
			// addTopicSend(data)
		})
		$('.fans-saying-bg').on('click', '.btn-fans-submit', function(event) {
			let tit = $('.other-main .say-title').val(),
				detial = $('.other-main .say-content').val();
			let title = '请输入标题！'
			let content = '请输入内容！'
			if (flag == 0) {
				title = '请输入标题！'
				content = '请输入内容！'
			} else {
				title = 'Please enter title！'
				content = 'Please enter content！'
			}
			if (tit == '') {
				dr.toast(`${title}`, 1500);
				return;
			}
			if (detial == '') {
				dr.toast(`${content}`, 1500);
				return;
			}
			let data = new Object({
				title: tit,
				content: detial
			})
			addTopicSend(data);
		})
		$('.m-response').on('click', '.fans-area-list', function() {
			var id = $(this).attr('index')
			toPage({
				url: wjt_prefix + '/answer/getAnswerDetails',
				data: {
					flag: flag,
					id: id,
					node: checkPage('fans_details')
				},
				ifPerfix: {
					name: 'page',
					result: false
				}
			})
		})
		$('.fans-questions-list-box').on('click', '.questions-title', function() {
			var id = $(this).attr('index')
			toPage({
				url: wjt_prefix + '/answer/getAnswerDetails',
				data: {
					flag: flag,
					id: id,
					node: checkPage('fans_details')
				},
				ifPerfix: {
					name: 'page',
					result: false
				}
			})
		})
	})

})

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
					if (flag == 0) {
						text = '会员政策';
					} else {
						text = 'Policy';
					}
					break;
				case 1:
					if (flag == 0) {
						text = '会员活动';
					} else {
						text = 'Activity';
					}
					break;
				case 2:
					if (flag == 0) {
						text = '植粉问答';
					} else {
						text = 'Plant powder';
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
	var imgurl = $('.swiper-slide-active img').attr("src");
	var txt = $('.swiper-slide-active').html();
	let url;
	console.log("内容：" + txt + "===索引值：" + myswiper.activeIndex + "===图片地址：" + imgurl);
	if (myswiper.activeIndex == 1 || myswiper.activeIndex == 4) {
		url = changeURLArg(window.location.href, 'type', 1);
	} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 3) {
		url = changeURLArg(window.location.href, 'type', 3);
	} else {
		url = changeURLArg(window.location.href, 'type', 2);
	}
	history.pushState('', '', url);

});

var listul = $('.top-type-list ul')
var listLi = $('.top-type-list ul li')
var typeDiv = $('.type-index-info > div')
var index = getQueryVariable('type')
var $this = $('.top-type-list ul li').eq(index - 1)
listLi.removeClass('active')
$this.addClass('active')
typeDiv.addClass('dr_hide')
typeDiv.eq("" + (index - 1) + "").removeClass('dr_hide')

if (getQueryVariable('type') == 3 || getQueryVariable('type') == 0) {
	$('.addFans').removeClass('dr_main')
} else {
	$('.addFans').addClass('dr_main')
}

myswiper.on('slideChangeTransitionEnd', function() {
	if (myswiper.activeIndex == 3 || myswiper.activeIndex == 0) {
		$('.addFans').removeClass('dr_main')
	} else {
		$('.addFans').addClass('dr_main')
	}
});

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
	if ($(window).width() > 1200) {
		$('.fans-saying-bg').addClass('dr_main')
	}
	if (getQueryVariable('type') == 3 || getQueryVariable('type') == 0) {
		$('.addFans').removeClass('dr_main')
	} else {
		$('.addFans').addClass('dr_main')
	}
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
						if (flag == 0) {
							text = '会员政策';
						} else {
							text = 'Policy';
						}
						break;
					case 1:
						if (flag == 0) {
							text = '会员活动';
						} else {
							text = 'Activity';
						}
						break;
					case 2:
						if (flag == 0) {
							text = '植粉问答';
						} else {
							text = 'Plant powder';
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
		var imgurl = $('.swiper-slide-active img').attr("src");
		var txt = $('.swiper-slide-active').html();
		let url;
		console.log("内容：" + txt + "===索引值：" + myswiper.activeIndex + "===图片地址：" + imgurl);
		if (myswiper.activeIndex == 1 || myswiper.activeIndex == 4) {
			url = changeURLArg(window.location.href, 'type', 1);
		} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 3) {
			url = changeURLArg(window.location.href, 'type', 3);
		} else {
			url = changeURLArg(window.location.href, 'type', 2);
		}
		history.pushState('', '', url);

	});
}



function findList(page, limit) {
	let List = new Array();
	$.ajax({
		url: head + '/answer/selectAnswerList',
		type: 'POST',
		data: {
			flag: flag,
			page: page,
			limit: limit
		},
		dataType: 'json',
		success: (res) => {
			List = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstData = '';
			if (count == 1) {
				count = List.length
				firstData = List;
				if (List.length > 8) {
					List.forEach((item, index) => {
						if (index < 8) {
							brand.push(item)
						}
					})
				} else {
					List.forEach((item, index) => {
						brand.push(item)
					})
				}
				List = brand
			}
			$("#myPage").sPage({
				page: page, //当前页码，必填
				total: count, //数据总条数，必填
				pageSize: areaLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: "共{total}条", //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: "上一页", //上翻页文字描述，默认“上一页”
				nextPage: "下一页", //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					findList(page, areaLimitVal)
				}
			});
			createElement(List, 0)
			createElement(firstData, 1)
		}
	})

}

function createElement(arr, website) {
	var HTML = ''
	var wbHTML = ''
	if (website == 0) {
		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft()
				let time;
				time = arr[i].publishTime ? splitTime(arr[i].publishTime) : arr[i].publishTime;
				HTML +=
					`<div class="fans-questions-list">
		                                <div class="questions-title" index="${arr[i].id}">${arr[i].title}</div>
		                                <div class="questions-content">
		                                    ${txt}
		                                </div>
		                                <div class="questions-descripts">
		                                    <div>
		                                    <span class="dr_zn dr_hide">发布日期:</span>
		                                    <span class="dr_en dr_hide">Release date:</span>
		                                    <span>${time}</span></div>
		                                    <div>
		                                     <span class="dr_zn dr_hide">点击量:</span>
		                                     <span class="dr_en dr_hide">Hits:</span>
		                                    <span>${arr[i].hits}</span></div>
		                                </div>
		                            </div>`

			}
			$('.fans-questions-list-box').html(HTML)
		} else {
			HTML +=
				`<div class="fans-questions-list">
		                               <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
		                            </div>`
			$('.fans-questions-list-box').html(HTML)
		}
	} else {
		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				let txt = getSimpleText(arr[i].content)
				txt = txt.replace(/&nbsp;/ig, "").trimLeft();
				let time;
				time = arr[i].publishTime ? splitTime(arr[i].publishTime) : arr[i].publishTime;
				wbHTML +=
					`<div class="fans-area-list" index="${arr[i].id}">
		                            <div class="fans-title">
		                                <div class="iconfont icon-lingxing fans-title-icon"></div>
		                                <span class="fans-title-name">${arr[i].title}</span>
		                            </div>
		                            <div class="fans-content">
		                                <span>${txt}</span>
		                            </div>
		                            <div class="fans-area-descript">
		                                <div class="descript-time">
		                                <span class="dr_zn dr_hide">发布日期:</span>
		                                    <span class="dr_en dr_hide">Release date:</span><span>${time}</span></div>
		                                <div class="descript-count">
		                                <span class="dr_zn dr_hide">点击量:</span>
		                                     <span class="dr_en dr_hide">Hits:</span>  <span>${arr[i].hits}</span></div>
		                            </div>
		                        </div>`
			}
			$('.fans-area .m-response').html(wbHTML)
		} else {
			wbHTML +=
				`<div class="fans-area-list">
		                            <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
		                        </div>`
			$('.fans-area .m-response').html(wbHTML)
		}
	}
	let c_content = '',
		c_title = '';
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English');
		c_title = 'please input title';
		c_content = 'please input content details';
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
		c_title = '请输入标题';
		c_content = '请输入详情';
	}
	$('.other-main .say-title').attr('placeholder', c_title)
	$('.other-main .say-content').attr('placeholder', c_content)
}


$('.screen-big .btn-submit').on('click', function() {
	let fans_title = $('#fans-title').val();
	let data = new Object({
		title: fans_title,
		content: quill_content
	})
	let title = '请输入标题！'
	let content = '请输入内容！'
	if (flag == 0) {
		title = '请输入标题！'
		content = '请输入内容！'
	} else {
		title = 'Please enter title!'
		content = 'Please enter content!'
	}
	if (fans_title == '') {
		dr.toast(`${title}`, 1500);
		return;
	}
	if (content == '') {
		dr.toast(`${content}`, 1500);
		return;
	}
	addTopicSend(data)
})

function addTopicSend(data) {
	$.ajax({
		url: head + '/mz/addMessageZone',
		type: 'POST',
		async: false,
		data: {
			title: data.title,
			content: data.content
		},
		dataType: 'json',
		success: (res) => {
			console.log(res)
			let title = ''
			let error = '！'
			if (flag == 0) {
				title = '提交成功,感谢您的反馈!'
				error = '您所反馈的内容已经存在,感谢您的反馈!'
			} else {
				title = 'successfully!'
				error = 'content already exists！'
			}
			if (res.code == '0000') {
				dr.toast(`${title}`, 1000);
				setTimeout(() => {
					$('.fans-saying-bg').removeClass('dr_main');
					toPage({
						url: 'dr_fans_area',
						data: {
							flag: flag,
							node: checkPage('dr_fans_area')
						},
						ifPerfix: {
							name: prefix + 'page',
							result: true
						}
					})
				}, 1000);
			} else {
				dr.toast(`${error}`, 1000);
			}
		}
	})
}

function getSimpleText(html) {
	var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
	var msg = html.replace(re1, ''); //执行替换成空字符
	return msg;
}
