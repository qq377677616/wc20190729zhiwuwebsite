var djs_time = 60;
$(function() {
	$('.other-page .btn-send').on('click', function() {
		var r_phone = $('.other-page').find('.r_phone').val();
		if (r_phone == '') {
			if (flag == 0) {
				dr.toast('手机号不能为空！', 1000)
			} else {
				dr.toast('phone can not be null！', 1000)
			}
			return;
		}
		if (!(/^1[3456789]\d{9}$/.test(r_phone))) {
			if (flag == 0) {
				dr.toast('手机号格式错误！', 1000)
			} else {
				dr.toast('Wrong format of phone number！', 1000)
			}
			return;
		}
		$(this).attr('disabled', true)
		getRandomCode($('.other-page'))
		sendPhone(r_phone);
	})
	$('.other-main .btn-send').on('click', function() {
		var r_phone = $('.other-main').find('.r_phone').val();
		console.log(r_phone)
		if (r_phone == '') {
			if (flag == 0) {
				dr.toast('手机号不能为空！', 1000)
			} else {
				dr.toast('phone can not be null！', 1000)
			}
			return;
		}
		if (!(/^1[3456789]\d{9}$/.test(r_phone))) {
			if (flag == 0) {
				dr.toast('手机号格式错误！', 1000)
			} else {
				dr.toast('Wrong format of phone number！', 1000)
			}
			return;
		}
		$(this).attr('disabled', true)
		getRandomCode($('.other-page'))
		sendPhone(r_phone);
	})
	$('.other-page .btn-register').on('click', function() {
		let phone = $('.other-page .r_phone').val(),
			code = $('.other-page .r_code').val(),
			mail = $('other-page .r_mail').val(),
			birthTime = $('.other-page .birth-time').val(),
			pwd = $('.other-page .pwd').val(),
			rpwd = $('.other-page .rpwd').val()
		let obj = {
			code: code,
			phone: phone,
			pwd: pwd,
			rpwd: rpwd,
		}
		submitForm(obj);
	})
	$('.other-main .btn-register').on('click', function() {
		let phone = $('.other-main .r_phone').val(),
			code = $('.other-main .r_code').val(),
			pwd = $('.other-main .pwd').val(),
			rpwd = $('.other-main .rpwd').val()
		let obj = {
			code: code,
			phone: phone,
			birthTime: birthTime,
			pwd: pwd,
			rpwd: rpwd,
		}
		submitForm(obj);
	})
	window.onload = function() {
		$('.login-box').css({
			'visibility': 'visible'
		})
	}
})

function getRandomCode(ele) {
	if (djs_time === 1) {
		djs_time = 60;
		if (flag == 0) {
			ele.find('.btn-send').text('验证码');
		} else {
			ele.find('.btn-send').text('Code');
		}
		ele.find('.btn-send').removeAttr('disabled')
		return;
	} else {
		djs_time--;
		$('.btn-send').text(djs_time);
	}
	setTimeout(function() {
		getRandomCode(ele);
	}, 1000);
}

function sendPhone(phone) {
	$.ajax({
		url: head + '/sendSMSApi/sendSMSs',
		type: 'POST',
		dataType: 'json',
		data: {
			phone: phone
		},
		success: (res) => {
			if (res.code == '0000') {
				if (flag == 0) {
					dr.toast('发送成功！请注意查收', 1000)
				} else {
					dr.toast('successfully！', 1000)
				}
			} else {
				if (flag == 0) {
					dr.toast('验证码发送过于频繁！', 1000)
				} else {
					dr.toast('Captchas are sent too often！', 1000)
				}
			}
		}
	})
}

function submitForm(data) {
	let phone = data.phone,
		code = data.code,
		pwd = data.pwd,
		rpwd = data.rpwd
	let obj = {
		code: code,
		phone: phone,
		pwd: pwd,
		rpwd: rpwd,
	}
	if (flag == 0) {
		if (phone == '') {
			dr.toast('手机号不能为空！', 1000)
			return;
		}
		if (code == '') {
			dr.toast('验证码不能为空！', 1000)
			return;
		}
		if (pwd == '') {
			dr.toast('密码不能为空！', 1000)
			return;
		}
		if (rpwd == '') {
			dr.toast('确认的密码不能为空！', 1000)
			return;
		}
		if (pwd != rpwd) {
			dr.toast('两次密码不一致！', 1000)
			return;
		}
	} else {
		if (phone == '') {
			dr.toast('phone can not be null！', 1000)
			return;
		}
		if (code == '') {
			dr.toast('code can not be null！', 1000)
			return;
		}
		if (pwd == '') {
			dr.toast('password can not be null！', 1000)
			return;
		}
		if (rpwd == '') {
			dr.toast('confirm can not be null！', 1000)
			return;
		}
		if (pwd != rpwd) {
			dr.toast('entered passwords differ！', 1000)
			return;
		}
	}

	//匹配时间正则 0 => 年  1 => 月

	let Obj = {

	}

	Obj.phone = phone;
	Obj.verCode = code;
	Obj.password = pwd;
	Obj.passwordConfirm = rpwd;
	$.ajax({
		url: head + '/member/updateMemberPassword',
		type: 'POST',
		dataType: 'json',
		data: Obj,
		success: (res) => {
			if (res.code == '0000') {
				if (flag == 0) {
					dr.toast('修改成功！', 1000);
				} else {
					dr.toast('successfully！', 1000);
				}
				let obj = new Object()
				obj.userName = phone;
				obj.password = pwd
				sendLogin(obj)
			} else {
				dr.toast("" + res.message + "!", 1000)
			}
		}
	})
}

function sendLogin(data) {
	$.ajax({
		url: head + '/member/login',
		type: 'POST',
		dataType: 'json',
		data: data,
		success: (res) => {
			if (res.code == '0000') {
				localStorage.setItem('')
				window.location.href = '../index.html'
			}
		}
	})
}
