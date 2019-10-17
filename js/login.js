var cusername = $.cookie('name');
var cpassword = $.cookie('pwd');
$(function() {
	window.onload = function() {
		$('.login-form').css({
			'visibility': 'visible'
		})
	}
	$('body').on('click', '.forget', function() {
		toPage({
			url: 'forget',
			data: {
				flag: flag,
				node: checkPage('forget')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
	$('.other-page .to_register').on('click', 'a', () => {
		toPage({
			url: 'register',
			data: {
				flag: flag,
				node: checkPage('register')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
	$('.other-main .to_register').on('click', 'a', () => {
		toPage({
			url: 'register',
			data: {
				flag: flag,
				node: checkPage('register')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
	if (cusername && cpassword) {
		$('.login-name').val(cusername);
		$('.login-pwd').val(decrypt(cpassword));
		$('#login-pwd').attr('checked', true)
	}
	if ($.cookie("login")) {
		$('#login-self').attr('checked', true);
		loginSend($.cookie('name'), $.cookie('pwd'))
	}
	if ($('#login-self').attr('checked')) {

	}
	$('.other-page .btn-login').on('click', () => {
		if ($('.other-page .btn_login_pwd').is(':checked')) {
			$.cookie("name", $('.other-page .login-name').val().trim(), {
				expires: 7
			});
			$.cookie("pwd", encrypt($('.other-page .login-pwd').val().trim()), {
				expires: 7
			});
		} else {
			$.cookie("name", '');
			$.cookie("pwd", '');
		}
		if ($('#login-self').is(':checked')) {
			$.cookie('login', $('.other-page .login-name').val().trim(), {
				expires: 7
			})
		} else {
			$.cookie('login', '')
		}

		let loginName = $('.other-page .login-name').val(),
			loginPwd = $('.other-page .login-pwd').val()
		if (flag == 0) {
			if (loginName == '') {
				dr.toast('请输入账号！', 1000)
				return;
			}
			if (loginPwd == '') {
				dr.toast('请输入密码！', 1000)
				return;
			}
		} else {
			if (loginName == '') {
				dr.toast('Please enter your account number！', 1000)
				return;
			}
			if (loginPwd == '') {
				dr.toast('Please enter your account password！', 1000)
				return;
			}
		}
		loginPwd = encrypt(loginPwd)
		loginSend(loginName, loginPwd)
	})
	$('.other-main .btn-login').on('click', () => {
		if ($('.other-main .btn_login_pwd').is(':checked')) {
			$.cookie("name", $('.other-main .login-name').val().trim(), {
				expires: 7
			});
			$.cookie("pwd", encrypt($('.other-main .login-pwd').val().trim()), {
				expires: 7
			});
		} else {
			$.cookie("name", '');
			$.cookie("pwd", '');
		}
		if ($('#login-self').is(':checked')) {
			$.cookie('login', $('.other-main .login-name').val().trim(), {
				expires: 7
			})
		} else {
			$.cookie('login', '')
		}

		let loginName = $('.other-main .login-name').val(),
			loginPwd = $('.other-main .login-pwd').val()
		if (flag == 0) {
			if (loginName == '') {
				dr.toast('请输入账号！', 1000)
				return;
			}
			if (loginPwd == '') {
				dr.toast('请输入密码！', 1000)
				return;
			}
		} else {
			if (loginName == '') {
				dr.toast('Please enter your account number！', 1000)
				return;
			}
			if (loginPwd == '') {
				dr.toast('Please enter your account password！', 1000)
				return;
			}
		}
		loginPwd = encrypt(loginPwd)
		loginSend(loginName, loginPwd)
	})
	let login_name_holder = '',
		login_pwd_holder = '';
	if (flag == 1) {
		login_name_holder = 'input name';
		login_pwd_holder = 'input password';
	} else {
		login_name_holder = '用户名';
		login_pwd_holder = '密码';
	}
	$('.other-page .login-name').attr('placeholder', login_name_holder);
	$('.other-page .login-pwd').attr('placeholder', login_pwd_holder);

	$('.other-main .login-name').attr('placeholder', login_name_holder);
	$('.other-main .login-pwd').attr('placeholder', login_pwd_holder);
})

function encrypt(word) {
	var key = CryptoJS.enc.Utf8.parse("drplantloginkeys");
	var srcs = CryptoJS.enc.Utf8.parse(word);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}

function decrypt(word) {
	var key = CryptoJS.enc.Utf8.parse("drplantloginkeys");
	var decryptedData = CryptoJS.AES.decrypt(word, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return decryptedData.toString(CryptoJS.enc.Utf8)
}

function loginSend(name, pwd) {
	$.ajax({
		url: head + '/member/login',
		type: 'POST',
		dataType: 'json',
		data: {
			userName: name,
			password: pwd
		},
		success: (res) => {
			if (res.code == '0000') {
				localStorage.setItem('token', res.result)
				if (flag == 0) {
					dr.toast('登录成功！', 1000)
				} else {
					dr.toast('Login successful！', 1000)
				}
				toPage({
					url: prefix + 'index',
					data: {
						flag: flag
					},
					ifPerfix: {
						name:  '',
						result: false
					}
				});
			} else {
				if (flag == 0) {
					dr.toast('用户名或密码错误！', 1000)
				} else {
					dr.toast('Incorrect user name or password！', 1000)
				}
			}
		}
	})
}
