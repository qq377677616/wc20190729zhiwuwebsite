var img = ''
if (localStorage.getItem('token') == null) {
	window.location.href = 'login.html'
}
var provinceList = [],
	cityList = [],
	areaList = [],
	province = '',
	city = '',
	area = ''

$(function() {
	locationByIp();
	findList();
	$('.other-page .province').on('change', function() {
		var id = $(this).find('option:selected').attr('regid')
		findCity($('.other-page'), id, 1)
	})
	$('.other-page .city').on('change', function() {
		var id = $(this).find('option:selected').attr('regid')
		findArea($('.other-page'), id, 1)
	})

	$('.other-main .province').on('change', function() {
		var id = $(this).find('option:selected').attr('regid')
		findCity($('.other-main'), id, 1)
	})
	$('.other-main .city').on('change', function() {
		var id = $(this).find('option:selected').attr('regid')
		findArea($('.other-main'), id, 1)
	})
	$('.dr-main .product-type').on('click', '.type-kind', function() {
		let $this = $(this);
		let index = $this.attr('index')
		$('.dr-main .product-type').find('.type-kind').removeClass('type-active');
		$('.dr-main .member_box').find('.kind-type').addClass('dr_hide')
		$('.dr-main .member_box .kind-type').eq(index - 1).removeClass('dr_hide')

		$this.addClass('type-active');
	})
	$('.screen-big').on('click', '.info_box .btn-update', function() {
		let userName = $('.screen-big .phone_code').html(),
			phone = $('.screen-big .r_phone').val(),
			birth_time = $('.screen-big .birth_time').html(),
			mail = $('.screen-big .mail').html(),
			address = $('.screen-big .m_address').val(),
			sex = $('.screen-big .sex_box input[name="b_sex"]:checked').val(),
			province = $(".screen-big .province").val(),
			city = $(".screen-big .city").val(),
			district = $(".screen-big .area").val();
		$('.screen-big .m_address').val()
		let obj = new Object({
			userName: userName,
			province: province,
			city: city,
			district: district,
			address: address,
			sex: sex,
			token: localStorage.getItem('token'),
			avatar: $('.screen-big .imghead').attr('src')
		})
		updateInfo(obj)
	})

	$('.screen-small').on('click', '.info_box .btn-update', function() {
		let userName = $('.screen-small .phone_code').html(),
			phone = $('.screen-small .r_phone').val(),
			birth_time = $('.screen-small .birth_time').html(),
			mail = $('.screen-small .mail').html(),
			address = $('.screen-small .m_address').val(),
			sex = $('.screen-small .sex_box input[name="s_sex"]:checked').val(),
			province = $(".screen-small .province").val(),
			city = $(".screen-small .city").val(),
			district = $(".screen-small .area").val();
		$('.screen-small .m_address').val()
		let obj = new Object({
			userName: userName,
			province: province,
			city: city,
			district: district,
			address: address,
			sex: sex,
			token: localStorage.getItem('token'),
			avatar: $('.screen-small .imghead').attr('src')
		})
		updateInfo(obj)
	})

	$('.screen-big').on('click', '.update_box .btn-update', function() {
		let oldPassword = $('.screen-big .m_old_pwd').val(),
			password = $('.screen-big .m_new_pwd').val(),
			passwordConfirm = $('.screen-big .m_s_pwd').val()

		let obj = new Object({
			oldPassword: oldPassword,
			password: password,
			passwordConfirm: passwordConfirm,
			token: localStorage.getItem('token')
		})
		updatePwd(obj)
	})

	$('.screen-small').on('click', '.update_box .btn-update', function() {
		let oldPassword = $('.screen-small .m_old_pwd').val(),
			password = $('.screen-small .m_new_pwd').val(),
			passwordConfirm = $('.screen-small .m_s_pwd').val()

		let obj = new Object({
			oldPassword: oldPassword,
			password: password,
			passwordConfirm: passwordConfirm,
			token: localStorage.getItem('token')
		})
		updatePwd(obj)
	})
	var myswiper = new Swiper('#swiper-nav', {
		autoplay: false,
		loop: false, // 循环模式选项
		// pagination: {
		//     el: '.swiper-pagination-nav',
		// }
		initialSlide: 0,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				switch (index) {
					case 0:
						if (flag == 0) {
							text = '个人信息';
						} else {
							text = 'Information';
						}
						break;
					case 1:
						if (flag == 0) {
							text = '修改密码';
						} else {
							text = 'Change password';
						}
						break;
				}
				return `
	         <li class="${className}"><a >${text}</a></li>
	     `;
			},
		},
	})
	window.onresize = function() {
		showInfo({
			userName: window.user.userName,
			phone: window.user.phone,
			birth_time: window.user.birthYear + "-" + window.user.birthMonth + "-" + window.user.birthDay,
			email: window.user.email,
			sex: window.user.sex,
			address: window.user.addressVo.address,
			province: window.user.addressVo.province,
			city: window.user.addressVo.city,
			avatar: window.user.avatar,
			district: window.user.addressVo.district
		})
		var myswiper = new Swiper('#swiper-nav', {
			autoplay: false,
			loop: false, // 循环模式选项
			// pagination: {
			//     el: '.swiper-pagination-nav',
			// }
			initialSlide: 0,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function(index, className) {
					switch (index) {
						case 0:
							if (flag == 0) {
								text = '个人信息';
							} else {
								text = 'Information';
							}
							break;
						case 1:
							if (flag == 0) {
								text = '修改密码';
							} else {
								text = 'Change password';
							}
							break;
					}
					return `
	             <li class="${className}"><a >${text}</a></li>
	         `;
				},
			},
		});
	}
})

function findList() {
	$.ajax({
		url: head + '/shopaddress/selectPages',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			flag: flag
		},
		success: (data) => {
			if (data.result) {
				addressList = data.result
			} else {
				addressList = []
			}
		}
	})
}

function findProvince(ele, code) {
	let pHTML = ''
	if (flag == 0) {
		pHTML = '<option regid="0">全部</option>'
	} else {
		pHTML = '<option regid="0">All</option>'
	}
	let provinceId = '';
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: flag
		},
		async: false,
		success: (data) => {
			if (data.result) {
				let privinceId = '';
				provinceList = data.result
				for (let i = 0; i < provinceList.length; i++) {
					pHTML += `<option regid="${provinceList[i].code}">${provinceList[i].name}</option>`
					if (window.user.addressVo.province == provinceList[i].name) {
						privinceId = provinceList[i].code
					}
				}
				ele.find('.province').html(pHTML)
				if (code == 1) {
					ele.find(".province").find("option[regid=" + provinceList[0].code + "]").attr("selected", true);
					findCity(ele, provinceList[0].code, code)
				} else {
					ele.find(".province").find("option[regid=" + privinceId + "]").attr("selected", true);
					findCity(ele, privinceId, code)
				}

			} else {
				provinceList = []
			}
		}
	})
}

function findCity(ele, provinceId, code) {
	let sHTML = ''
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			flag: flag
		},
		success: (data) => {
			if (data.result) {
				let cityId = ''
				cityList = data.result
				for (let i = 0; i < cityList.length; i++) {
					sHTML += `<option parid="${provinceId}" regid="${cityList[i].code}">${cityList[i].name}</option>`
					if (window.user.addressVo.city == cityList[i].name) {
						cityId = cityList[i].code
					}
				}
				ele.find('.city').html(sHTML)
				ele.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
				if (code == 1) {
					ele.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
					findArea(ele, provinceId, cityList[0].code, code)
				} else {
					ele.find(".city").find("option[regid=" + cityId + "]").attr("selected", true);
					findArea(ele, provinceId, cityId, code)
				}
			} else {
				cityList = []
			}
		}
	})
}

function findArea(ele, provinceId, cityId, code) {
	let sHTML = ''
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			cityId: cityId,
			flag: flag
		},
		success: (data) => {
			if (data.result) {
				let areaId
				areaList = data.result
				for (let i = 0; i < areaList.length; i++) {
					sHTML += `<option parid="${cityId}" regid="${areaList[i].code}">${areaList[i].name}</option>`
					if (window.user.addressVo.districts == areaList[i].name) {
						areaId = areaList[i].code
					}
				}
				ele.find('.area').html(sHTML)
				if (code == 1) {
					ele.find(".area").find("option[regid=" + areaList[0].code + "]").attr("selected", true);
				} else {
					ele.find(".area").find("option[regid=" + areaId + "]").attr("selected", true);
				}
			} else {
				areaList = []
			}
		}
	})
}

function locationByIp() {
	var localtion = {};
	localtion.ip = returnCitySN.cip;
	// 通过百度api获得经纬度
	$.ajaxSettings.async = true;
	$.getJSON("https://api.map.baidu.com/location/ip?callback=?", {
		// 'ak' : 'x2CC5dtMtwjAAe6epLt2s1Kxs0BmSxPu',
		'ak': 'lApvxfMWyOB9So5CZUOupRGg7wLYlbGx',
		'coor': 'bd09ll',
		'ip': localtion.ip
	}, function(data) {
		localtion.province = data.content.address_detail.province;
		province = data.content.address_detail.province
		city = data.content.address_detail.city
		area = data.content.address_detail.district
		localtion.city = data.content.address_detail.city;
		localtion.district = data.content.address_detail.district;
		// x1.innerHTML=JSON.stringify(data.content);
		findProvince($('.other-page'), 0);
		findProvince($('.other-main'), 0);
		showInfo({
			userName: window.user.userName,
			phone: window.user.phone,
			birth_time: window.user.birthYear + "-" + window.user.birthMonth + "-" + window.user.birthDay,
			email: window.user.email,
			sex: window.user.sex,
			address: window.user.addressVo.address,
			province: window.user.addressVo.province,
			city: window.user.addressVo.city,
			avatar: window.user.avatar,
			district: window.user.addressVo.district
		})
	});
}

function closeHide() {
	$('.vip_dialog_bg ').addClass('dr_hide')
}

function showHide() {
	$('.vip_dialog_bg ').removeClass('dr_hide')
}

function showInfo(info) {
	$('.screen-big .phone_code').html(info.userName)
	$('.screen-big .r_phone').val(info.phone)
	$('.screen-big .birth_time').html(info.birth_time)
	$('.screen-big .mail').html(info.phone)
	$('.screen-big .m_address').val(info.address)

	$('.screen-big .sex_box').find("input[type=radio][name=b_sex][value='" + info.sex + "']").prop("checked", 'checked');
	$(".screen-big .city_box .province").find("option[value = '" + info.province + "']").attr("selected", "selected");
	$(".screen-big .city_box .city").find("option[value = '" + info.city + "']").attr("selected", "selected");
	$(".screen-big .city_box .area").find("option[value = '" + info.district + "']").attr("selected", "selected");

	$('.screen-small .phone_code').html(info.userName)
	$('.screen-small .r_phone').val(info.phone)
	$('.screen-small .birth_time').html(info.birth_time)
	$('.screen-small .mail').html(info.phone)
	$('.screen-small .m_address').val(info.address)
	console.log($('.screen-small .sex_box').find("input[type=radio][name=s_sex][value='" + info.sex + "']"))
	$('.screen-small .sex_box').find("input[type=radio][name=s_sex][value='" + info.sex + "']").prop("checked",
		'checked');
	$(".screen-small .city_box .province").find("option[value = '" + info.province + "']").attr("selected", "selected");
	$(".screen-small .city_box .city").find("option[value = '" + info.city + "']").attr("selected", "selected");
	$(".screen-small .city_box .area").find("option[value = '" + info.district + "']").attr("selected", "selected");

	if (info.avatar) {
		$('.screen-big .imghead').attr('src', info.avatar);
		$('.screen-small .imghead').attr('src', info.avatar);
	} else {
		$('.screen-big .imghead').attr('src', 'https:game.flyh5.cn/resources/game/wechat/dxl/dr_plant/image/initial.jpg')
		$('.screen-small .imghead').attr('src', 'https:game.flyh5.cn/resources/game/wechat/dxl/dr_plant/image/initial.jpg');
	}
}

function updateInfo(data) {
	$.ajax({
		url: head + '/member/updateMember',
		dataType: 'json',
		type: 'POST',
		data: data,
		async: false,
		success: (data) => {
			if (data.code == '0000') {
				if (flag == 0) {
					dr.toast('修改成功！', 1000)
				} else {
					dr.toast('successfully！', 1000)
				}

			}
		}
	})
}

function updatePwd(data) {
	console.log(data)
	$.ajax({
		url: head + '/member/updatePassword',
		dataType: 'json',
		type: 'POST',
		data: data,
		async: false,
		success: (data) => {
			if (data.code == '0000') {
				if (flag == 0) {
					dr.toast('修改成功！', 1000)
				} else {
					dr.toast('successfully！', 1000)
				}
			}
		}
	})
}

function previewImage(file, type) {
	var MAXWIDTH = 90;
	var MAXHEIGHT = 90;
	// var div = document.getElementById('preview');
	// var div = $('.preview');
	if (type == 1) {
		var div = $('.screen-big .preview');
		if (file.files && file.files[0]) {
			div.innerHTML = '<img class=imghead onclick=$(".screen-big .previewImg").click()>';
			var img = $('.screen-big .imghead')

			img.onload = function() {
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				img.width = rect.width;
				img.height = rect.height;
				//                 img.style.marginLeft = rect.left+'px';
				img.style.marginTop = rect.top + 'px';
			}
			var reader = new FileReader();
			reader.onload = function(evt) {
				img.src = evt.target.result;
				createImg(file.files[0], 1)
			}
			reader.readAsDataURL(file.files[0]);
		}
	} else {
		var div = $('.screen-small .preview');
		if (file.files && file.files[0]) {
			div.innerHTML = '<img class=imghead onclick=$(".screen-small .previewImg").click()>';
			var img = $('.screen-small .imghead')

			img.onload = function() {
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				img.width = rect.width;
				img.height = rect.height;
				//                 img.style.marginLeft = rect.left+'px';
				img.style.marginTop = rect.top + 'px';
			}
			var reader = new FileReader();
			reader.onload = function(evt) {
				img.src = evt.target.result;
				createImg(file.files[0], 0)
			}
			reader.readAsDataURL(file.files[0]);
		}
	}

}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth = width / maxWidth;
		rateHeight = height / maxHeight;

		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = Math.round(height / rateWidth);
		} else {
			param.width = Math.round(width / rateHeight);
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}

function createImg(data, type) {
	let formData = new FormData();
	let file = type == `1` ? $('.screen-big .previewImg')[0].files[0] : $('.screen-small .previewImg')[0].files[0];
	formData.append('file', file)
	$.ajax({
		url: head + '/upload/upload',
		dataType: 'json',
		type: 'POST',
		async: false,
		processData: false, // 使数据不做处理
		contentType: false, // 不要设置Content-Type请求头
		data: formData,
		success: (data) => {
			if (data.data) {
				// img = data.data.url

				if (type == 1) {
					$('.screen-big .imghead').attr('src', data.data.src)
				} else {
					$('.screen-small .imghead').attr('src', data.data.src)
				}
			}
		}
	})

}
