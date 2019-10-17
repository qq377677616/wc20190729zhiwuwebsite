var djs_time = 60; //倒计时
$(function() {
	var DATAPICKERAPI = {
		// 默认input显示当前月,自己获取后填充
		activeMonthRange: function() {
			return {
				begin: moment().set({
					'date': 1,
					'hour': 0,
					'minute': 0,
					'second': 0
				}).format('YYYY-MM-DD HH:mm:ss'),
				end: moment().set({
					'hour': 23,
					'minute': 59,
					'second': 59
				}).format('YYYY-MM-DD HH:mm:ss')
			}
		},
		shortcutMonth: function() {
			// 当月
			var nowDay = moment().get('date');
			var prevMonthFirstDay = moment().subtract(1, 'months').set({
				'date': 1
			});
			var prevMonthDay = moment().diff(prevMonthFirstDay, 'days');
			return {
				now: '-' + nowDay + ',0',
				prev: '-' + prevMonthDay + ',-' + nowDay
			}
		},
		// 注意为函数：快捷选项option:只能同一个月份内的
		rangeMonthShortcutOption1: function() {
			var result = DATAPICKERAPI.shortcutMonth();
			return [{
				name: '昨天',
				day: '-1,-1',
				time: '00:00:00,23:59:59'
			}, {
				name: '这一月',
				day: result.now,
				time: '00:00:00,'
			}, {
				name: '上一月',
				day: result.prev,
				time: '00:00:00,23:59:59'
			}];
		},
		// 快捷选项option
		rangeShortcutOption1: [{
			name: '最近一周',
			day: '-7,0'
		}, {
			name: '最近一个月',
			day: '-30,0'
		}, {
			name: '最近三个月',
			day: '-90, 0'
		}],
		singleShortcutOptions1: [{
			name: '今天',
			day: '0'
		}, {
			name: '昨天',
			day: '-1',
			time: '00:00:00'
		}, {
			name: '一周前',
			day: '-7'
		}]
	};

	//年月日单个
	$('.J-datepicker-day').datePicker({
		hasShortcut: true,
		format: 'YYYY-MM-DD',
		shortcutOptions: [{
			name: '今天',
			day: '0'
		}, {
			name: '昨天',
			day: '-1'
		}, {
			name: '一周前',
			day: '-7'
		}]
	});
	$('.other-page .btn-send').on('click', function() {
		var r_phone = $('.other-page').find('.r_phone').val();
		console.log(r_phone == '')
		if (r_phone == '') {
			if (flag == 0) {
				dr.toast('手机号不能为空！', 1000)
			} else {
				dr.toast('phone can not be null！', 1000)
			}
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
		console.log(r_phone == '')
		if (r_phone == '') {
			if (flag == 0) {
				dr.toast('手机号不能为空！', 1000)
			} else {
				dr.toast('phone can not be null！', 1000)
			}
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
		getRandomCode($('.other-main'))
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
			mail: mail,
			phone: phone,
			birthTime: birthTime,
			pwd: pwd,
			rpwd: rpwd,
		}
		submitForm(obj);
	})
	$('.other-main .btn-register').on('click', function() {
		let phone = $('.other-main .r_phone').val(),
			code = $('.other-main .r_code').val(),
			mail = $('other-main .r_mail').val(),
			birthTime = $('.other-main .birth-time').val(),
			pwd = $('.other-main .pwd').val(),
			rpwd = $('.other-main .rpwd').val()
		let obj = {
			code: code,
			mail: mail,
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
		ele.find('.btn-send').text(djs_time);
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
		mail = data.mail,
		birthTime = data.birthTime,
		pwd = data.pwd,
		rpwd = data.rpwd
	let obj = {
		code: code,
		mail: mail,
		phone: phone,
		birthTime: birthTime,
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
		if (mail == '') {
			dr.toast('邮箱不能为空！', 1000)
			return;
		}

		if (mail == '') {
			dr.toast('邮箱不能为空！', 1000)
			return;
		}
		let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
		if (!re.test(mail)) {
			dr.toast('邮箱格式错误！', 1000)
			return;
		}
		if (birthTime == '') {
			dr.toast('生日不能为空！', 1000)
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
		if (mail == '') {
			dr.toast('email can not be null！', 1000)
			return;
		}
		let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
		if (!re.test(mail)) {
			dr.toast('Email format error！', 1000)
			return;
		}
		if (birthTime == '') {
			dr.toast('birth can not be null！', 1000)
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
	var timearr = birthTime.replace(" ", ":").replace(/\:/g, "-").split("-");
	var year = timearr[0]
	var month = timearr[1]
	var day = timearr[2]

	let Obj = {

	}

	Obj.phone = phone;
	Obj.verCode = code;
	Obj.email = mail;
	Obj.year = year;
	Obj.month = month;
	Obj.day = day;
	Obj.mail = mail;
	Obj.password = pwd;
	Obj.passwordConfirm = rpwd;
	console.log(Obj)
	$.ajax({
		url: head + '/member/addMember',
		type: 'POST',
		dataType: 'json',
		data: Obj,
		success: (res) => {
			if (res.code == '0000') {
				dr.toast('添加成功！', 1000);
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
