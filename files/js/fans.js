$(function() {
	let code = getQueryVariable('id')
	flag = getQueryVariable('flag')
	sessionStorage.setItem('flag',flag)
	findResult(code);
})

function findResult(code) {
	let brandReport = new Array();
	$.ajax({
		url: head + '/answer/selectAnswerDetails ',
		type: 'POST',
		async: false,
		data: {
			id: code,
			flag: flag
		},
		dataType: 'json',
		success: (res) => {
			if (res.code == '0000') {
				brandReport = res.result == '' ? [] : res.result;
				createReport(brandReport)
			} else {
				window.location.href = 'lost_404.html'
			}
		}
	})
}

function createReport(arr) {
	let content = '',
		title = '';
	// if (flag == 0) {

	// } else {
	// 	content = arr.contentEng
	// 	title = arr.titleEng
	// }
	title = arr.title
	content = arr.content
	var HTML =
		`<div class="report-title">${title}</div>
                                <div class="report-descripts">
                                    <div class="report-time">
                                        <span class="dr_zn dr_hide">发布日期:</span>
                                        <span class="dr_en dr_hide">Release date:</span>
                                        <span>${arr.publishTime}</span>
                                    </div>
                                    <div class="report-count">
                                        <span class="dr_zn dr_hide">点击量:</span>
                                        <span class="dr_en dr_hide">Hits:</span>
                                        <span>${arr.hits}</span>
                                    </div>
                                </div>
                                <div class="type-index-info">
                                    <div class="details">
                                           ${content}
                                    </div>
                     </div>`
	var wbHTML =
		`<div class="milepost-title">${title}</div>
                    <div class="milepost-descripts">
                        <div class="milepost-descripts-time">
                            <span class="dr_zn dr_hide">发布日期:</span>
                            <span class="dr_en dr_hide">Release date:</span>
                            <span>${arr.publishTime}</span>
                        </div>
                        <div class="milepost-descripts-count">
                            <span class="dr_zn dr_hide">点击量:</span>
                            <span class="dr_en dr_hide">Hits:</span>
                            <span>${arr.hits}</span>
                        </div>
                    </div>
                    <div class="milepost-details">
                         ${content}
                    </div>`
	$('.dr-main .report').html(HTML)
	$('.other-main .milepost-box').html(wbHTML)
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('body .dr_zn').addClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('body .dr_en').addClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
}
