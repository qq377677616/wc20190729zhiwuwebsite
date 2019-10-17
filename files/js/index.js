$(function() {
	let v_d =
		`            <div class="radio_content screen-small">
	           <div class="nav-list">
	
	                                    <div class="video">
	                                        <video controls dataUrl="http://game.flyh5.cn/resources/game/wechat/dxl/dr_plant/image/WilliamTVC_.mov" class="videoShow" preload="auto" poster="http://game.flyh5.cn/resources/game/wechat/dxl/dr_plant/image/video_bg.png"></video>
	                                        <span class="VideoBtn"><img src="image/bo1.png"></span>
	                                    </div>
	                            </div>
	        </div>`
	$('.dr-main-footer-top').after(v_d)
	$('.screen-small .radio_content').on('click', '.video', function() {
		var url = $(this).find('video').attr('dataUrl')
		if ($(this).find('video').attr('src') == '' || $(this).find('video').attr('src') == undefined) {
			$(this).find('video').attr('src', url)
		}
		let video = $(this).find('.videoShow')[0];
		if (video.paused) {
			$('.radio_content .video .videoShow').trigger('pause');
			$('.radio_content .video .VideoBtn').show();
			$(this).find('.videoShow')[0].play();
			$(this).find('.VideoBtn').hide();
		} else {
			$(this).find('.videoShow')[0].pause();
			$(this).find('.VideoBtn').show();
		}
	})
	$.ajax({
		url: head + '/member/selectUser',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			token: localStorage.getItem('token')
		},
		success: (data) => {
			if (data.code == '0000') {
				user = data.result;
			} else {
				localStorage.removeItem('token')
			}
		}
	})
	findResult();

	if (sessionStorage.getItem('ifVideo') == 'true') {
		$('.banner').addClass('dr_hide');
		$('.video_box').removeClass('dr_hide')
	} else {
		$('.banner').removeClass('dr_hide');
		$('.video_box').addClass('dr_hide')
	}
	var myswiper2 = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		autoHeight: true,
		pagination: {
			el: '.tab-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						text = '品牌视频';
						break;
					case 1:
						text = '蓝精灵';
						break;
					case 2:
						text = '公益动态';
						break;
					case 3:
						text = '会员活动';
						break;
				}
				return `
	             <li class="${className}"><a >${text}</a></li>
	         `;
			},
		},
	})
	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: true, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: 0,
		autoHeight: true,
		pagination: {
			el: '.tab-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						text = '品牌视频';
						break;
					case 1:
						text = '蓝精灵';
						break;
					case 2:
						text = '公益动态';
						break;
					case 3:
						text = '会员活动';
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
		if (myswiper.activeIndex == 1 || myswiper.activeIndex == 4) {
			url = changeURLArg(window.location.href, 'type', 1);
		} else if (myswiper.activeIndex == 0 || myswiper.activeIndex == 3) {
			url = changeURLArg(window.location.href, 'type', 3);
		} else {
			url = changeURLArg(window.location.href, 'type', 2);
		}
		history.pushState('', '', url);

	});

	window.onload = function() {
		$('.load_part').css({
			'display': 'block'
		})
	}
	window.onresize = function() {
		var myswiper3 = new Swiper('#swiper-nav', {
			autoplay: false,
			loop: true, // 循环模式选项
			// pagination: {
			//     el: '.swiper-pagination-nav',
			// }
			initialSlide: 0,
			autoHeight: true,
			pagination: {
				el: '.tab-pagination',
				clickable: true,
				renderBullet: function(index, className) {
					switch (index) {
						case 0:
							text = '品牌视频';
							break;
						case 1:
							text = '蓝精灵';
							break;
						case 2:
							text = '公益动态';
							break;
						case 3:
							text = '会员活动';
							break;
					}
					return `
	             <li class="${className}"><a >${text}</a></li>
	         `;
				},
			},
		})

		myswiper3.on('slideChangeTransitionEnd', function() {
			var imgurl = $('.swiper-slide-active img').attr("src");
			var txt = $('.swiper-slide-active').html();
			let url;
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
	$('.news-list').on('click', '.news-info', function() {
		var index = $(this).attr('news-index')
		window.location.href = 'page/trends-details.html?val=' + (parseInt(index) + 1)
	})
})

function findResult() {
	let brandReport = new Array();
	$.ajax({
		url: head + '/homedesign/selectHomeDesignDetails',
		type: 'POST',
		dataType: 'json',
		success: (res) => {
			if (res.code == '0000') {
				brandReport = res.result.records == '' ? [] : res.result.records;
				createReport(brandReport)
			}
		}
	})
}

function createReport(arr) {
	var HTML = '',
		wbHTML = ''
	for (let i = 0; i < arr.length; i++) {
		HTML +=
			`<div class="swiper-slide ">
            <a href="${arr[i].carouselUrl}" style="background: url(${arr[i].carouselImg});background-size: cover;background-position: center center;background-repeat: no-repeat;">
            </a>
</div>`
		wbHTML +=
			`<div class="swiper-slide ">
            <a href="${arr[i].carouselImgMobile}" style="background: url(${arr[i].carouselImg});background-size: 100% 100%;background-position: center center;background-repeat: no-repeat;">
            </a>
</div>`
	}
	$('#screen_big .swiper-wrapper').html(HTML)
	$('#swiper-banner .swiper-wrapper').html(wbHTML)

	var swiperBig = new Swiper('#screen_big', {
		// autoplay : true,
		autoplay: true,
		loop: true, // 循环模式选项
		// 如果需要分页器
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
	var swiperSmall = new Swiper('#swiper-banner', {
		autoplay: true,
		loop: true, // 循环模式选项
		// 如果需要分页器
		pagination: {
			el: '.small-swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
}
