var img = ''
if (localStorage.getItem('token') == null) {
	window.location.href = 'login.html'
}
var provinceList = [],
	cityList = [],
	areaList = [],
	provinceListOther = [],
	cityListOther = [],
	areaListOther = [],
	province = '',
	city = '',
	area = ''


$(function() {
	locationByIp();
	findList();
	$('.other-page .province').on('change', function() {
		var id = $(this).find('option:selected').attr('regid');
		$('.other-page .city').empty();
		$('.other-page .area').empty();
		findCity($('.other-page'), id, 1);
	})
	$('.other-page .city').on('change', function() {
		var id = $(this).find('option:selected').attr('regid');
		$('.other-page .area').empty();
		findArea($('.other-page'), id, 1);
	})

	$('.other-main .province').on('change', function() {
		var id = $(this).find('option:selected').attr('regid');
		$('.other-main .city').empty();
		$('.other-main .area').empty();
		findCity($('.other-main'), id, 1);
	})
	$('.other-main .city').on('change', function() {
		var id = $(this).find('option:selected').attr('regid');
		$('.other-main .area').empty();
		findArea($('.other-main'), id, 1);
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
			province = $(".screen-big .province").find('option:selected').attr('regid'),
			city = $(".screen-big .city").find('option:selected').attr('regid'),
			district = $(".screen-big .area").find('option:selected').attr('regid');
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
			province = $(".screen-small .province").find('option:selected').attr('regid'),
			city = $(".screen-small .city").find('option:selected').attr('regid'),
			district = $(".screen-small .area").find('option:selected').attr('regid');
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

	$('.screen-big').on('click', '.btn-update-pwd', function() {
		let oldPassword = $('.screen-big .m_old_pwd').val(),
			password = $('.screen-big .m_new_pwd').val(),
			passwordConfirm = $('.screen-big .m_s_pwd').val()
		let obj = new Object({
			oldPassword: oldPassword,
			password: password,
			passwordConfirm: passwordConfirm,
			token: localStorage.getItem('token')
		})
		let old_pwd, news_pwd, confirm, noComfirm;
		console.log(obj)
		if (flag == 1) {
			old_pwd = 'Old password cannot be empty！';
			news_pwd = 'The new password cannot be empty！';
			confirm = 'Confirm that password cannot be empty！';
			noComfirm = 'The two passwords did not match！';
		} else {
			old_pwd = '旧密码不能为空！';
			news_pwd = '新密码不能为空！';
			confirm = '确认密码不能为空！';
			noComfirm = '两次密码输入不一致！';
		}
		if (oldPassword == '') {
			dr.toast(old_pwd, 1000);
			return;
		}
		if (password == '') {
			dr.toast(news_pwd, 1000);
			return;
		}
		if (passwordConfirm == '') {
			dr.toast(confirm, 1000);
			return;
		}
		if (password != passwordConfirm) {
			dr.toast(noComfirm, 1000);
			return;
		}
		updatePwd(obj)
	})

	$('.screen-small').on('click', '.btn-update-pwd', function() {
		let oldPassword = $('.screen-small .m_old_pwd').val(),
			password = $('.screen-small .m_new_pwd').val(),
			passwordConfirm = $('.screen-small .m_s_pwd').val()

		let obj = new Object({
			oldPassword: oldPassword,
			password: password,
			passwordConfirm: passwordConfirm,
			token: localStorage.getItem('token')
		})
		console.log(obj)
		let old_pwd, news_pwd, confirm, noComfirm;
		if (flag == 1) {
			old_pwd = 'Old password cannot be empty！';
			news_pwd = 'The new password cannot be empty！';
			confirm = 'Confirm that password cannot be empty！';
			noComfirm = 'The two passwords did not match！';
		} else {
			old_pwd = '旧密码不能为空！';
			news_pwd = '新密码不能为空！';
			confirm = '确认密码不能为空！';
			noComfirm = '两次密码输入不一致！';
		}
		if (oldPassword == '') {
			dr.toast(old_pwd, 1000);
			return;
		}
		if (password == '') {
			dr.toast(news_pwd, 1000);
			return;
		}
		if (passwordConfirm == '') {
			dr.toast(confirm, 1000);
			return;
		}
		if (password != passwordConfirm) {
			dr.toast(noComfirm, 1000);
			return;
		}
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
		if (window.user.addressVo) {
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
		} else {
			showInfo({
				userName: window.user.userName,
				phone: window.user.phone,
				birth_time: window.user.birthYear + "-" + window.user.birthMonth + "-" + window.user.birthDay,
				email: window.user.email,
				sex: window.user.sex,
				address: '',
				province: '',
				city: '',
				avatar: window.user.avatar,
				district: ''
			})
		}

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
	let member_phone = '',
		member_address = '',
		member_old = '',
		member_new = '',
		member_sure = '';
	if (flag == 1) {
		member_phone = 'input phone';
		member_address = 'input address';
		member_old = 'input old password',
			member_new = 'input new password',
			member_sure = 'input sure password';
	} else {
		member_phone = '手机号';
		member_address = '街道地址';
		member_old = '原密码',
			member_new = '新密码',
			member_sure = '确认密码';
	}
	$('.other-page .r_phone').attr('placeholder', member_phone);
	$('.other-page .m_address').attr('placeholder', member_address);
	$('.other-page .m_old_pwd').attr('placeholder', member_old);
	$('.other-page .m_new_pwd').attr('placeholder', member_new);
	$('.other-page .m_s_pwd').attr('placeholder', member_sure);

	$('.other-main .r_phone').attr('placeholder', member_phone);
	$('.other-main .m_address').attr('placeholder', member_address);
	$('.other-main .m_old_pwd').attr('placeholder', member_old);
	$('.other-main .m_new_pwd').attr('placeholder', member_new);
	$('.other-main .m_s_pwd').attr('placeholder', member_sure);
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
	let zn_HTML = '',
		en_HTML = '';
	let provinceId;
	if (window.user.addressVo) {
		provinceId = window.user.addressVo.province;
	} else {
		provinceId = '';
	}
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: 0
		},
		async: false,
		success: (data) => {
			if (data.result) {
				provinceList = data.result;
				let elE = ele.find('.city_zn_box');
				for (let i = 0; i < provinceList.length; i++) {
					zn_HTML += `<option regid="${provinceList[i].code}">${provinceList[i].name}</option>`
				}
				elE.find('.province').html(zn_HTML)
				if (code == 1) {
					elE.find(".province").find("option[regid=" + provinceList[0].code + "]").attr("selected", true);
					findCity(ele, provinceList[0].code, code)
				} else {
					if (provinceId) {
						findCity(ele, provinceId, code);
						elE.find(".province").find("option[regid=" + provinceId + "]").attr("selected", true);
					} else {
						elE.find(".province").find("option[regid=" + provinceList[0].code + "]").attr("selected", true);
					}
				}
			} else {
				provinceList = []
			}
		}
	})
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: 1
		},
		async: false,
		success: (data) => {
			if (data.result) {
				console.log(data.result)
				provinceListOther = data.result;
				let elE = ele.find('.city_en_box');
				for (let i = 0; i < provinceListOther.length; i++) {
					en_HTML += `<option regid="${provinceListOther[i].code}">${provinceListOther[i].name}</option>`
				}
				elE.find('.province').html(en_HTML)
				if (code == 1) {
					elE.find(".province").find("option[regid=" + provinceList[0].code + "]").attr("selected", true);
					findCity(ele, provinceList[0].code, code)
				} else {
					if (provinceId) {
						findCity(ele, provinceId, code);
						elE.find(".province").find("option[regid=" + provinceId + "]").attr("selected", true);
					} else {
						elE.find(".province").find("option[regid=" + provinceList[0].code + "]").attr("selected", true);
					}
				}
			} else {
				provinceListOther = []
			}
		}
	})


}

function findCity(ele, provinceId, code) {
	let zn_sHTML = '',
		en_sHTML = '';
	let cityId;
	if (window.user.addressVo) {
		cityId = window.user.addressVo.city
	}
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			flag: 0
		},
		success: (data) => {
			if (data.result) {
				cityList = data.result;
				let elE = ele.find('.city_zn_box');
				for (let i = 0; i < cityList.length; i++) {
					zn_sHTML += `<option parid="${provinceId}" regid="${cityList[i].code}">${cityList[i].name}</option>`
				}
				elE.find('.city').html(zn_sHTML)
				if (code == 1) {
					elE.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
					findArea(ele, provinceId, cityList[0].code, code)
				} else {
					if (cityId) {
						elE.find(".city").find("option[regid=" + cityId + "]").attr("selected", true);
						findArea(ele, provinceId, cityId, code)
					} else {
						elE.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
						findArea(ele, provinceId, cityList[0].code, code)
					}
				}
			} else {
				cityList = []
			}
		}
	})
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			flag: 1
		},
		success: (data) => {
			if (data.result) {
				cityListOther = data.result;
				let elE = ele.find('.city_en_box');
				for (let i = 0; i < cityListOther.length; i++) {
					en_sHTML += `<option parid="${provinceId}" regid="${cityListOther[i].code}">${cityListOther[i].name}</option>`
				}
				elE.find('.city').html(en_sHTML)
				if (code == 1) {
					elE.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
					findArea(ele, provinceId, cityList[0].code, code)
				} else {
					if (cityId) {
						elE.find(".city").find("option[regid=" + cityId + "]").attr("selected", true);
						findArea(ele, provinceId, cityId, code)
					} else {
						elE.find(".city").find("option[regid=" + cityList[0].code + "]").attr("selected", true);
						findArea(ele, provinceId, cityList[0].code, code)
					}
				}
			} else {
				cityListOther = []
			}
		}
	})
}

function findArea(ele, provinceId, cityId, code) {
	let zn_sHTML = '',
		en_sHTML = '';
	let areaId;
	if (window.user.addressVo) {
		areaId = window.user.addressVo.districts
	}
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			cityId: cityId,
			flag: 0
		},
		success: (data) => {
			if (data.result) {
				areaListOther = data.result;
				let elE = ele.find('.city_zn_box');
				for (let i = 0; i < areaListOther.length; i++) {
					zn_sHTML += `<option parid="${cityId}" regid="${areaListOther[i].code}">${areaListOther[i].name}</option>`
				}
				elE.find('.area').html(zn_sHTML)
				if (code == 1) {
					elE.find(".area").find("option[regid=" + areaListOther[0].code + "]").attr("selected", true);
				} else {
					if (areaId) {
						elE.find(".area").find("option[regid=" + areaId + "]").attr("selected", true);
					} else {
						elE.find(".area").find("option[regid=" + areaListOther[0].code + "]").attr("selected", true);
					}
				}
			} else {
				areaListOther = []
			}
		}
	})
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			provinceId: provinceId,
			cityId: cityId,
			flag: 1
		},
		success: (data) => {
			if (data.result) {

				areaListOther = data.result;
				let elE = ele.find('.city_en_box');
				for (let i = 0; i < areaListOther.length; i++) {
					en_sHTML += `<option parid="${cityId}" regid="${areaListOther[i].code}">${areaListOther[i].name}</option>`
				}
				elE.find('.area').html(en_sHTML)
				if (code == 1) {
					elE.find(".area").find("option[regid=" + areaListOther[0].code + "]").attr("selected", true);
				} else {
					if (areaId) {
						elE.find(".area").find("option[regid=" + areaId + "]").attr("selected", true);
					} else {
						elE.find(".area").find("option[regid=" + areaListOther[0].code + "]").attr("selected", true);
					}
				}
			} else {
				areaListOther = []
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
		if (window.user.addressVo) {
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
		} else {
			showInfo({
				userName: window.user.userName,
				phone: window.user.phone,
				birth_time: window.user.birthYear + "-" + window.user.birthMonth + "-" + window.user.birthDay,
				email: window.user.email,
				sex: window.user.sex,
				address: '',
				province: '',
				city: '',
				avatar: window.user.avatar,
				district: ''
			})
		}
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
	$('.screen-big .mail').html(info.email)
	$('.screen-big .m_address').val(info.address)

	$('.screen-big .sex_box').find("input[type=radio][name=b_sex][value='" + info.sex + "']").prop("checked", 'checked');
	$(".screen-big .city_box .province").find("option[value = '" + info.province + "']").attr("selected", "selected");
	$(".screen-big .city_box .city").find("option[value = '" + info.city + "']").attr("selected", "selected");
	$(".screen-big .city_box .area").find("option[value = '" + info.district + "']").attr("selected", "selected");

	$('.screen-small .phone_code').html(info.userName)
	$('.screen-small .r_phone').val(info.phone)
	$('.screen-small .birth_time').html(info.birth_time)
	$('.screen-small .mail').html(info.email)
	$('.screen-small .m_address').val(info.address)
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
	$.ajax({
		url: head + '/member/updatePassword',
		dataType: 'json',
		type: 'POST',
		data: data,
		async: false,
		success: (data) => {
			if (data.code == '0000') {
				if (flag == 0) {
					dr.toast('修改成功！', 1000);
				} else {
					dr.toast('successfully！', 1000);
				}
				toPage({
					url: 'dr_member',
					data: {
						flag: flag,
						node: checkPage('dr_member')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				});
			} else {
				dr.toast(data.message, 1000);
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
