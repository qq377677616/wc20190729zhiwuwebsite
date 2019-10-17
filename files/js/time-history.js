$(document).ready(function() {
	var listul = $('.top-type-list ul')
	var listLi = $('.top-type-list ul li')
	var typeDiv = $('.type-index-info > div')
	getQueryVariable('type')
	$('.top-type-list ul').on('click', 'li', function() {
		var $this = $(this)
		var index = $this.attr('type-index')
		window.sessionStorage.setItem('type', parseInt(index) + 1)
		if (window.sessionStorage.getItem('type') == 4) {
			$('.other-page').addClass('no_more')
		} else {
			$('.other-page').removeClass('no_more')
		}
		listLi.removeClass('active')
		$this.addClass('active')
		typeDiv.addClass('dr_hide')
		typeDiv.eq("" + index + "").removeClass('dr_hide')
		let url = changeURLArg(window.location.href, 'type', parseInt(index) + 1)
		history.pushState('', '', url)
	})
})



function changeURLArg(url, arg, arg_val) {
	var pattern = arg + '=([^&]*)';
	var replaceText = arg + '=' + arg_val;
	if (url.match(pattern)) {
		var tmp = '/(' + arg + '=)([^&]*)/gi';
		tmp = url.replace(eval(tmp), replaceText);
		return tmp;
	} else {
		if (url.match('[\?]')) {
			return url + '&' + replaceText;
		} else {
			return url + '?' + replaceText;
		}
	}
	return url + '\n' + arg + '\n' + arg_val;
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}
