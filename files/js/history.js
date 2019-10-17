$(function(){
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
						text = '历年大事件';
						break;
					case 1:
						text = '国礼历程';
						break;
					case 2:
						text = '荣誉见证';
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
							text = '历年大事件';
							break;
						case 1:
							text = '国礼历程';
							break;
						case 2:
							text = '荣誉见证';
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
	}
})