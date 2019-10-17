var count = 0,
	kindLimitVal = 5
$(function() {
	findList(1, 10000);
})
var flag = getQueryVariable('flag')
function findList(page, limit) {
	let List = new Array();
	$.ajax({
		url: head + '/brandstate/selectBrandStateListEng',
		type: 'POST',
		async: false,
		data: {
			firstCategoryId: 205,
			flag: flag
		},
		dataType: 'json',
		success: (res) => {
			List = res.result == '' ? [] : res.result;
			if (count == 0) {
				count = List.length
			}
			$("#myPage").sPage({
				page: page, //当前页码，必填
				total: count, //数据总条数，必填
				pageSize: kindLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: "共{total}条", //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: "上一页", //上翻页文字描述，默认“上一页”
				nextPage: "下一页", //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					findList(page, kindLimitVal)
				}
			});
			createElement(List)
		}
	})

}

function getSimpleText(html) {
	var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
	var msg = html.replace(re1, ''); //执行替换成空字符
	return msg;
}

function createElement(arr) {
	var HTML = ''
	var wbHTML = ''
	if (arr.length) {
		for (let i = 0; i < arr.length; i++) {
			let txt = getSimpleText(arr[i].content)
			txt = txt.replace(/&nbsp;/ig, "").trimLeft()
			HTML +=
				`<div class="kinds-list">
                                    <div class="kind-list-img" style="background: url(${arr[i].img});background-position: center center;background-repeat: no-repeat;background-size: cover">

                                        </div>
                                    <div class="kind-list-info">
                                        <div class="kinds-list-title">${arr[i].title}</div>
                                        <div class="kinds-list-descripts">
                                            <div class="kinds-list-time">
                                                <span class="dr_zn dr_hide">发布日期:</span>
                                                <span class="dr_en dr_hide">Release date:</span>

                                            <span>${arr[i].publishTime}</span></div>
                                            <div class="kinds-list-count">
                                                <span class="dr_zn dr_hide">点击量:</span>
                                                <span class="dr_en dr_hide">Hits:</span>
                                            <span>${arr[i].hits}</span></div>
                                        </div>
                                        <div class="kinds-list-details">
                                            ${txt}
                                        </div>
                                        <div class="kinds-search" index="${arr[i].id}">
                                            
                                                <span class="dr_zn dr_hide">查看详情</span>
                                                <span class="dr_en dr_hide">view details</span>
                                            <i class="iconfont icon-shuangjiantouyou"></i>
											
                                        </div>
                                    </div>
                                </div>`
			wbHTML +=
				`<div class="news-info" index="${arr[i].id}">
                            <div class="new-img" style="background: url(${arr[i].img});background-position: center center;background-repeat: no-repeat;background-size: cover">

                             </div>

                            <div class="news-details">
                                <div class="news-details-title">${arr[i].title}</div>
                                <div class="news-details-info">
                                    ${txt}
                                </div>
                                <div class="news-details-descripts">
                                    <div class="news-search-count">
                                        <i class="new-search-icon iconfont icon-chakan"></i>
                                        <span class="search-count">${arr[i].hits} <span class="dr_zn dr_hide">人阅读</span><span class="dr_en dr_hide">Reader</span> </span>
                                    </div>
                                    <div class="news-search-time">
                                        <span>${arr[i].publishTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
		}
		$('.brand_kinds .kinds-list-box').html(HTML)
		$('.kinds_search_box .news-list').html(wbHTML)
	} else {
		HTML +=
			`<div class="fans-questions-list">
                                   <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
                                </div>`
		wbHTML +=
			`<div class="fans-area-list">
                                <div><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>
                            </div>`
		$('.brand_kinds .kinds-list-box').html(HTML)
		$('.kinds_search_box .news-list').html(wbHTML)
	}
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.fans-questions-box .kinds-search').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				id: index,
				flag: flag
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.other-main .news-info').on('click', function() {
		let index = $(this).attr('index');
		toPage({
			url: wjt_prefix + '/brandstate/getBrandStateDetailsEng',
			data: {
				id: index,
				flag: flag
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
}
