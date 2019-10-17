let vedioList = [];
$(function(){
	findVideo();
	let vhtml = ''
	
	for (let prop in vedioList) {
		vhtml +=
			`
	                <div class="nav-list">
	                                    <div class="nav-left">
	                                        <div class="video">
	                                            <video controls dataUrl="${vedioList[prop].videoViod}" class="videoShow" preload="auto" poster="${vedioList[prop].videoImg}"></video>
	                                            <span class="VideoBtn"><img src="../image/bo1.png"></span>
	                                        </div>
	                                    </div>
	                                    <div class="nav-right">
	                                        <div class="nav-right-title">${vedioList[prop].videoTitle}</div>
	                                        <div class="nav-right-content">${vedioList[prop].videoDescribe}</div>
	                                    </div>
	                                </div>
	                `
	}
	$('.video-list').html(vhtml)
	$('.video-list').on('click', '.video', function() {
		var url = $(this).find('video').attr('dataUrl')
		if ($(this).find('video').attr('src') == '' || $(this).find('video').attr('src') == undefined) {
			$(this).find('video').attr('src', url)
		}
		let video = $(this).find('.videoShow')[0];
		if (video.paused) {
			$('.nav-list .video .videoShow').trigger('pause');
			$('.nav-list .video .VideoBtn').show();
			$(this).find('.videoShow')[0].play();
			$(this).find('.VideoBtn').hide();
		} else {
			$(this).find('.videoShow')[0].pause();
			$(this).find('.VideoBtn').show();
		}
	})
	window.onload = function() {
		$('#loader').css({
			'display': 'none'
		})
	}
})
function findVideo() {
	let video = new Array();
	$.ajax({
		url: head + '/video/selectvideoEng',
		type: 'POST',
		async: false,
		data: {
			flag: flag
		},
		dataType: 'json',
		success: (res) => {
			if (res.code == '0000') {
				vedioList = res.result == '' ? [] : res.result;
			}
		}
	})
}

