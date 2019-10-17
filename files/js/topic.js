let Data = [{
	id: 1,
	search: '凝露',
	title: '凝露专题',
	e_title: 'Lon project',
	describe: '高山植物 纯净美肌',
	e_describe: 'Alpine plants are pure and beautiful',
	toptic: '植物医生凝露百科',
	e_topic: 'Plant doctor dew encyclopedia',
	url: '../image/topic_2.png',
	color: '#477F69',
	right_bg:'#477F69',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name : ''
	}, {
		id: 1,
		name: '凝露分类',
		en_name: 'classify',
		add_name : 'Lon classification'
	}, {
		id: 2,
		name: '凝露作用',
		en_name: 'effect',
		add_name : 'Condensation effect'
	}, {
		id: 3,
		name: '凝露怎么用',
		en_name: 'use ',
		add_name : 'How to use condensation'
	}, {
		id: 4,
		name: '凝露乳霜区别',
		en_name: 'distinction',
		add_name : 'Condensation cream distinction'
	}, {
		id: 5,
		name: '哪种凝露好',
		en_name: 'which good',
		add_name : 'What kind of condensation is good'
	}]
}, {
	id: 2,
	search: '石斛兰',
	title: '石斛兰专题',
	e_title: 'Dendrobium',
	describe: '高山植物 纯净美肌',
	e_describe: 'Alpine plants are pure and beautiful',
	toptic: '植物医生石斛兰百科',
	e_topic: 'Plant doctor dendrobium encyclopedia',
	url: '../image/topic_1.png',
	color: '#386af6',
	right_bg:'#82c0c6',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name : ''		
	}, {
		id: 1,
		name: '石斛兰护肤',
		en_name: 'skin care',
		add_name : 'Dendrobium skin care'	
	}, {
		id: 2,
		name: '仙草系列',
		en_name: 'product series',
		add_name : 'This product series'	
	}, {
		id: 3,
		name: '石斛兰怎么用',
		en_name: 'use ',
		add_name : 'How to use dendrobium'	
	}, {
		id: 4,
		name: '石斛兰的作用',
		en_name: 'Dendrobium action',
		add_name : 'How to use dendrobium'	
	}, {
		id: 5,
		name: '石斛兰是什么',
		en_name: 'What is dendrobium',
		add_name : 'How to use dendrobium'	
	}]
}, {
	id: 3,
	search: '面膜',
	title: '晚安面膜',
	e_title: 'Good night mask',
	describe: '高山植物 纯净美肌',
	e_describe: 'Alpine plants are pure and beautiful',
	toptic: '植物医生面膜百科',
	e_topic: 'Plant doctor facial mask encyclopedia',
	url: '../image/topic_3.png',
	color: '#49619d',
	right_bg:'#8198b4',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name : ''
	}, {
		id: 1,
		name: '面膜的使用方法',
		en_name: 'usage',
		add_name : 'How to use the mask'
	}, {
		id: 2,
		name: '面膜的作用',
		en_name: 'effect',
		add_name : 'Function of facial mask'
	}, {
		id: 3,
		name: '面膜的分类',
		en_name: 'classify',
		add_name : 'Classification of masks'
	}, {
		id: 4,
		name: '面膜的由来',
		en_name: 'origin',
		add_name : 'Origin of facial mask'
	}, {
		id: 5,
		name: '面膜发展',
		en_name: 'progress',
		add_name : 'Mask development'
	}]
}]
var TopicList = new Array();
var hotTopList = new Array();
var li = '';
var id = getQueryVariable('code');
var data = Data[id - 1],
	count = 1,
	areaLimitVal = 6,
	hotProduct = [];
$('.topic_right > div').css({
	'background' : ""+data.right_bg+""
})
$('.topic_left .search_type ul li').css({
	'color' : ""+data.color+"",
	'border-color' : ""+data.color+""
})
$('.topic_left .search_type ul .active').css({
	'background' : ""+data.color+""	,
})
$('.topic_left .questions-content').css({
	'color' : ""+data.color+""	
})

$(function() {

	findTopic();
	if (id) {
		let ifPass = Data.some((item) => {
			return item.id == id
		})
		if (!ifPass) {
			toPage({
				url: 'lost_404',
				ifPerfix: {
					name: 'page',
					result: false
				}
			})
		}
	} else {
		toPage({
			url: 'lost_404',
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	}
	if (flag == 0) {
		for (let prop in Data) {
			if (Data[prop].id == id) {
				li += `<li index="${Data[prop].id}" class="active">${Data[prop].title}</li>`
			} else {
				li += `<li index="${Data[prop].id}">${Data[prop].title}</li>`
			}
		}
		createPage({
			title: data.title,
			describe: data.describe,
			toptic: data.toptic,
			url: data.url,
			typeList: data.typeList
		})
	} else {
		for (let prop in Data) {
			if (Data[prop].id == id) {
				li += `<li index="${Data[prop].id}" class="active">${Data[prop].e_title}</li>`
			} else {
				li += `<li index="${Data[prop].id}">${Data[prop].e_title}</li>`
			}
		}
		createPage({
			title: data.e_title,
			describe: data.e_describe,
			toptic: data.e_topic,
			url: data.url,
			typeList: data.typeList
		})
	}
	findHotProduct(data.search)
	if (flag == 0) {
		searchList('全部', 1, 10000);
	} else {
		searchList('all', 1, 10000);
	}
	$('.search_type ul li:nth-child(1)').addClass('active');
	$('.search_type ul').on('click', 'li', function() {
		let txt = ''
		if(flag == 0){
			txt = $(this).text();
		}else {
			txt = $(this).attr('name');
		}
		count = 1;
		searchList(txt, 1, 10000)
	})
	findList(1, 10000)

	createHotCenter(List[0].second)
	$('.hot_top ul').on('click', 'li', function() {
		var id = $(this).attr('index')
		toPage({
			url: wjt_prefix + '/answer/getAnswerDetails',
			data: {
				id: id,
				flag: flag
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.topic_list').on('click', '.fans-area-list', function() {
		var id = $(this).attr('index')
		toPage({
			url: wjt_prefix + '/answer/getAnswerDetails',
			data: {
				id: id,
				flag: flag
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})

	})
	$('.hot_center ul').on('click', 'li', function() {
		var code = $(this).attr('index')
		toPage({
			url: 'seminar',
			data: {
				code: code
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
})

function getSimpleText(html) {
	var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
	var msg = html.replace(re1, ''); //执行替换成空字符
	return msg;
}

function findTopic() {
	$.ajax({
		url: head + '/news/selectNewsCatalogue',
		type: 'POST',
		async: false,
		dataType: 'json',
		data: {
			flag: 1
		},
		success: (res) => {
			topicList = res.result ? res.result : [];
		}
	})
}

function createPage(data) {
	$('.moment_title').html(data.toptic)
	$('.top_topic_title').html(data.title)
	$('.top_topic_describe').html(data.describe)
	createType(data.typeList)
	$('.headImg img').attr('src', data.url)

	$('.topic_type').html(li)

	$('.screen-big .topic_type').on('click', 'li', function() {
		let index = $(this).attr('index');
		toPage({
			url: 'dr_topic',
			data: {
				code: index
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.screen-small .topic_type').on('click', 'li', function() {
		let index = $(this).attr('index');
		toPage({
			url: 'dr_topic',
			data: {
				code: index
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})

	$('.search_type ul').on('click', 'li', function() {
		$('.search_type ul li').removeClass('active')
		$(this).addClass('active')
	})
}

function createType(typeList) {
	let typeHTML = '';

	if (typeList.length) {

		if (flag == 0) {
			for (let prop in typeList) {
				typeHTML += `<li name="${typeList[prop].add_name}">${typeList[prop].name}</li>`
			}
		} else {
			for (let prop in typeList) {
				typeHTML += `<li name="${typeList[prop].add_name}">${typeList[prop].en_name}</li>`
			}
		}
	}
	$('.search_type ul').html(typeHTML)
}

function findList(page, limit) {
	$.ajax({
		url: head + '/answer/selectAnswerList ',
		type: 'POST',
		data: {
			flag: flag
		},
		dataType: 'json',
		success: (res) => {
			res.result.sort(compare('hits'))
			res.result.forEach((item, index) => {
				if (index <= 10) {
					hotTopList.push(item)
				}
			})
			createHotTop(hotTopList)
		}
	})
}

function createHotTop(arr) {
	let HTML = '';
	let wbHTML = ''
	var title = '';
	let nodata = '';
	for (let prop in arr) {

		if (flag == 0) {
			title = arr[prop].title
			nodata = '暂无数据'
		} else {
			title = arr[prop].title
			nodata = 'No Data'
		}

		if (arr.length > 0) {
			HTML += `<li index="${arr[prop].id}">${parseInt(prop) + 1}. ${title}</li>`
		} else {
			HTML += `<li index="${arr[prop].id}">${nodata}</li>`
		}
	}
	$('.hot_top ul').html(HTML)

}

function createHotCenter(arr) {
	let HTML = '';
	let wbHTML = ''
	let title = '';
	let nodata = '';
	for (let prop in arr) {
		if (flag == 0) {
			title = arr[prop].secondCategoryName
			nodata = '暂无数据'
		} else {
			title = arr[prop].secondCategoryName
			nodata = 'No Data'
		}
		if (arr.length > 0) {
			HTML += `<li index="${arr[prop].secondCategoryId}">${parseInt(prop) + 1}.${title}</li>`
		} else {
			HTML += `<li index="${arr[prop].secondCategoryId}">${nodata}</li>`
		}
	}
	$('.hot_center ul').html(HTML)
}

function compare(property) {
	return function(a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value2 - value1;
	}
}

function searchList(title, page, limit) {
	let List = new Array();
	let data = new Object()
	if (title == 'all' || title == '全部') {
		data.newsCatalogueId = getQueryVariable('code')
		data.flag = flag
		data.page = page
		data.limit = limit
		data.keyword = ''
	} else {
		data.newsCatalogueId = getQueryVariable('code')
		data.flag = flag
		data.keyword = title
		data.page = page
		data.limit = limit
	}
	$.ajax({
		url: head + '/news/selectNewsList',
		type: 'POST',
		data: data,
		dataType: 'json',
		success: (res) => {
			List = res.result == '' ? [] : res.result;
			let brand = new Array();
			let firstData = '';
			if (count == 1) {
				count = List.length
				firstData = List;
				if (List.length > 6) {
					List.forEach((item, index) => {
						if (index < 6) {
							brand.push(item)
						}
					})
				} else {
					List.forEach((item, index) => {
						brand.push(item)
					})
				}
				List = brand
			}
			$("#myPage").sPage({
				page: page, //当前页码，必填
				total: count, //数据总条数，必填
				pageSize: areaLimitVal, //每页显示多少条数据，默认10条
				showTotal: true, //是否显示总条数，默认关闭：false
				totalTxt: "共{total}条", //数据总条数文字描述，{total}为占位符，默认"共{total}条"
				noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
				showSkip: true, //是否显示跳页，默认关闭：false
				showPN: true, //是否显示上下翻页，默认开启：true
				prevPage: "上一页", //上翻页文字描述，默认“上一页”
				nextPage: "下一页", //下翻页文字描述，默认“下一页”
				backFun: function(page) {
					//点击分页按钮回调函数，返回当前页码
					searchList(title, page, areaLimitVal)
				}
			});
			createElement(List)
		}
	})
}

function createElement(arr) {
	var HTML = ''
	var wbHTML = ''
	var nodata = '';
	if (flag == 0) {
		nodata = '暂无数据'
	} else {
		nodata = 'No Data'
	}
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {

			let txt = getSimpleText(arr[i].content)
			HTML +=
				`<div class="fans-questions-list" >
                                    <div class="questions-title" index="${arr[i].id}">${arr[i].title}</div>
                                    <div class="questions-content">
                                        ${txt}
                                    </div>
                                    <div class="questions-descripts">
                                        <div>
                                        <span class="dr_zn dr_hide">发布日期:</span>
                                        <span class="dr_en dr_hide">Release date:</span>
                                        <span>${arr[i].publishTime}</span></div>
                                        <div>
                                         <span class="dr_zn dr_hide">点击量:</span>
                                         <span class="dr_en dr_hide">Hits:</span>
                                        <span>${arr[i].hits}</span></div>
                                    </div>
                                </div>`
			wbHTML +=
				`<div class="fans-area-list" index="${arr[i].id}">
                                <div class="fans-title">
                                    <div class="iconfont icon-lingxing fans-title-icon"></div>
                                    <span class="fans-title-name">${arr[i].title}</span>
                                </div>
                                <div class="fans-content">
                                    <span>${txt}</span>
                                </div>
                                <div class="fans-area-descript">
                                    <div class="descript-time">
                                    <span class="dr_zn dr_hide">发布日期:</span>
                                        <span class="dr_en dr_hide">Release date:</span><span>${arr[i].publishTime}</span></div>
                                    <div class="descript-count">
                                    <span class="dr_zn dr_hide">点击量:</span>
                                         <span class="dr_en dr_hide">Hits:</span>  <span>${arr[i].hits}</span></div>
                                </div>
                            </div>`
		}
		$('.fans-questions-list-box').html(HTML)
		$('.topic_list').html(wbHTML)
	} else {
		HTML +=
			`<div class="fans-questions-list">
                                   <div class="nodata">${nodata}</div>
                                </div>`
		wbHTML +=
			`<div class="fans-area-list">
                                <div class="nodata">${nodata}</div>
                            </div>`
		$('.fans-questions-list-box').html(HTML)
		$('.topic_list').html(wbHTML)
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
	$('.fans-questions-list-box').on('click', '.questions-title', function() {
		var id = $(this).attr('index')
		toPage({
			url: wjt_prefix + '/answer/getAnswerDetails',
			data: {
				id: id,
				flag: flag
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
}

function findHotProduct(title) {
	$.ajax({
		url: head + '/product/selectGoodsNameList',
		type: 'POST',
		data: {
			flag: flag,
			commodityName: title
		},
		dataType: 'json',
		success: (res) => {
			res.result.sort(compare('bestseller'))
			res.result.forEach((item, index) => {
				if (index <= 1) {
					hotProduct.push(item)
				}
			})
			createHotProduct(hotProduct)
		}
	})
}

function createHotProduct(arr) {
	let HTML = '';
	let title = '';
	if (flag == 0) {
		title = '暂无'
	} else {
		title = 'No Data'
	}

	if (arr.length > 0) {
		for (let prop in arr) {
			HTML +=
				`<li index="${arr[prop].commodityId}"><img src="${arr[prop].commodityImgStr}" alt=""><div>${arr[prop].commodityName}</div></li>`
		}
	} else {
		HTML += `<li>${title}</li>`
	}
	$('.hot_product ul').html(HTML)
	$('.hot_product ul').on('click', 'li', function() {
		let code = $(this).attr('index');
		let data = {
			id: code,
			flag: flag
		}
		toPage({
			url: wjt_prefix + '/product/getDetails',
			data: data,
			ifPerfix: {
				name: '',
				result: false
			}
		})
	})
}
