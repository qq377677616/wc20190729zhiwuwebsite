var userInfo = localStorage.getItem('userInfo')
var pageList = [{

}]
var Data = [{
	id: 1,
	search: '凝露',
	title: '凝露专题',
	e_title: 'Lon project',
	describe: '高山植物 纯净美肌',
	e_describe: 'Alpine plants are pure and beautiful',
	toptic: '植物医生凝露百科',
	e_topic: 'Plant doctor dew encyclopedia',
	url: '../image/topic_2.png',
	color: '#4f8136',
	right_bg: '#82c6aa',
	className: 'active_1',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name: ''
	}, {
		id: 1,
		name: '凝露分类',
		en_name: 'classify',
		add_name: 'Lon classification'
	}, {
		id: 2,
		name: '凝露作用',
		en_name: 'effect',
		add_name: 'Condensation effect'
	}, {
		id: 3,
		name: '凝露怎么用',
		en_name: 'use ',
		add_name: 'How to use condensation'
	}, {
		id: 4,
		name: '凝露乳霜区别',
		en_name: 'distinction',
		add_name: 'Condensation cream distinction'
	}, {
		id: 5,
		name: '哪种凝露好',
		en_name: 'which good',
		add_name: 'What kind of condensation is good'
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
	color: '#386a5f',
	right_bg: '#82c0c6',
	className: 'active_2',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name: ''
	}, {
		id: 1,
		name: '石斛兰护肤',
		en_name: 'skin care',
		add_name: 'Dendrobium skin care'
	}, {
		id: 2,
		name: '仙草系列',
		en_name: 'product series',
		add_name: 'This product series'
	}, {
		id: 3,
		name: '石斛兰怎么用',
		en_name: 'use ',
		add_name: 'How to use dendrobium'
	}, {
		id: 4,
		name: '石斛兰的作用',
		en_name: 'Dendrobium action',
		add_name: 'How to use dendrobium'
	}, {
		id: 5,
		name: '石斛兰是什么',
		en_name: 'What is dendrobium',
		add_name: 'How to use dendrobium'
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
	right_bg: '#8198b4',
	className: 'active_3',
	typeList: [{
		id: 0,
		name: '全部',
		en_name: 'all',
		add_name: ''
	}, {
		id: 1,
		name: '面膜的使用方法',
		en_name: 'usage',
		add_name: 'How to use the mask'
	}, {
		id: 2,
		name: '面膜的作用',
		en_name: 'effect',
		add_name: 'Function of facial mask'
	}, {
		id: 3,
		name: '面膜的分类',
		en_name: 'classify',
		add_name: 'Classification of masks'
	}, {
		id: 4,
		name: '面膜的由来',
		en_name: 'origin',
		add_name: 'Origin of facial mask'
	}, {
		id: 5,
		name: '面膜发展',
		en_name: 'progress',
		add_name: 'Mask development'
	}]
}]

function createMenu() {
	let html = `<div class="panel-group" id="accordion"></div>`
	$('.index-main').append(html)
	let mHtml =
		`<div class="panel panel-default" index="0">
                <div class="panel-heading">
                    <a href="javascript:;">首页</a>
                </div>
            </div>`
}
var other_menu =
	`
            <div class="menu-list-top">
                
                <div class="login ">
                     <span class="dr_zn dr_hide">登录/注册</span>
                     <span class="dr_en dr_hide">Login/Register</span>
                </div>
             </div>
         <div class="panel-group" id="accordion">
            <div class="panel panel-default" index="0">
                <div class="panel-heading" data-index="0">
                    <span class="dr_zn dr_hide">首页</span>
                    <span class="dr_en dr_hide">Index</span>
                </div>
            </div>
            <div class="panel panel-default" index="1">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#story">
                     <span class="dr_zn dr_hide">品牌故事</span>
                     <span class="dr_en dr_hide">Story</span>
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="story" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>
                            <li class="panel-heading" data-index="1">                                                         
                                <span class="dr_zn dr_hide">品牌故事</span>
                                <span class="dr_en dr_hide">Brand story</span>                           
                            </li>
                            <li class="panel-heading" data-index="2">
                                <span class="dr_zn dr_hide">品牌力量</span>
                                <span class="dr_en dr_hide">Brand strength</span>   
                            </li>
                            <li class="panel-heading" data-index="3">
                                <span class="dr_zn dr_hide">品牌历程</span>
                                <span class="dr_en dr_hide">Brand course</span>   
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="2">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#kinds">
                    <span class="dr_zn dr_hide">生物多样性保护</span>
                    <span class="dr_en dr_hide">Variety protect</span>
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="kinds" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>
                            <li class="panel-heading" data-index="4">
                                  <span class="dr_zn dr_hide">生物多样性</span>
                                  <span class="dr_en dr_hide">Variety</span>
                            </li>
                            <li class="panel-heading" data-index="5">
                                  <span class="dr_zn dr_hide">公益里程碑</span>
                                  <span class="dr_en dr_hide">Milestone</span>
                            </li>
                            <li class="panel-heading" data-index="6">
                                  <span class="dr_zn dr_hide">公益动态</span>
                                  <span class="dr_en dr_hide">Good dynamic</span>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="3">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#product">
                     <span>${List[0].firstCategoryName}</span>
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="product" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="4">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#glass">
                    <span>${List[1].firstCategoryName}</span>
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="glass" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="5">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#product-effect">
                     <span class="dr_zn dr_hide">产品功效</span>
                    <span class="dr_en dr_hide">Product efficacy</span>
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="product-effect" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="6">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#collapseTwo">
                     <span class="dr_zn dr_hide">品牌动态</span>
                     <span class="dr_en dr_hide">Brand trends</span>                    
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>
                            <li class="panel-heading" data-index="7">                        
                                  <span class="dr_zn dr_hide">品牌新闻</span>
                                  <span class="dr_en dr_hide">Brand news</span>    
                            </li>
                            <li class="panel-heading" data-index="8">
                                  <span class="dr_zn dr_hide">媒体报道</span>
                                  <span class="dr_en dr_hide">Media report</span>    
                            </li>
                            <li class="panel-heading" data-index="9">
                                  <span class="dr_zn dr_hide">品牌相册</span>
                                  <span class="dr_en dr_hide">Brand photo album</span>                             
                            </li>
                            <li class="panel-heading" data-index="10">
                                  <span class="dr_zn dr_hide">新闻源</span>
                                  <span class="dr_en dr_hide">News source</span>                             
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="7">
                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                     href="#fans-area">
                    <span class="dr_zn dr_hide">植物粉区</span>
                    <span class="dr_en dr_hide">Area</span>    
                    <i class="iconfont icon-xiajiantou-"></i>
                </div>
                <div id="fans-area" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul>
                            <li class="panel-heading" data-index="11">
                                <span class="dr_zn dr_hide">会员政策</span>
                                <span class="dr_en dr_hide">Policy</span>                                    
                            </li>
                            <li class="panel-heading" data-index="12">
                                <span class="dr_zn dr_hide">会员活动</span>
                                <span class="dr_en dr_hide">Activity</span>   
                            </li>
                            <li class="panel-heading" data-index="13">
                                <span class="dr_zn dr_hide">植物粉答</span>
                                <span class="dr_en dr_hide">Plant powder</span>   
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" index="8">
                <div class="panel-heading" data-index="14">
                    <span class="dr_zn dr_hide">专柜查询</span>
                    <span class="dr_en dr_hide">Search</span>
                </div>
            </div>
        </div>`
var index_nav_top =
	` <div class="main-top-l">
                <div class="main-logo"></div>
            </div>
            <div class="main-top-r">
                <div class="search_all">
					<form action="" onsubmit="return toSeminar($(this));">
						<input type="text" autocomplete="off" news-password class="search_content form-control" placeholder="content">
					</form>
                </div>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
                      <span class="dr_zn dr_hide"><span>中文</span></span>
                      <span class="dr_en dr_hide"><span>English</span></span>
                      <span class="caret"></span>         
                    </button>
                     
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                      <li index="0">
                         <span class="dr_zn dr_hide">中文</span><span class="dr_en dr_hide">Chinese</span>            
                      </li>
                      <li role="presentation" index="1">
                         <span class="dr_zn dr_hide">英文</span><span class="dr_en dr_hide">English</span>            
                      </li>
                    </ul>
                </div>             
                <div class="main-search">
                    <i class="iconfont icon-sousuo"></i>
                </div>
                <div class="btn-main-menu">
                    <i class="iconfont icon-caidan"></i>
                </div>
            </div>`
$('.index-main .menu-list').html(other_menu)
$('.other-main .menu-list').html(other_menu)
$('.index-main .main-top').html(index_nav_top)
$('.other-main .main-top').html(index_nav_top)
// $('.language').html(lan)
let productHtml = '',
	glassHtml = '',
	effecailHtml = ''
if (user.avatar) {
	$('.menu-list-top').prepend(
		`<div class="member-head" style="background: url(${user.avatar});background-size: cover;background-repeat: no-repeat;background-position: center center;"></div>`
	)
} else {
	$('.menu-list-top').prepend(
		`<div class="member-head" style="background: url('');background-size: cover;background-repeat: no-repeat;background-position: center center"></div>`
	)
}

// $('.screen-big .search_all form').on('submit',function(event) {	
// 		//  搜索工作
// 		let words = $('.screen-big .search_all .search_content').val();	
// 		alert(words);
// 		toPage({
// 			url: 'seminar',
// 			data: {
// 				flag: flag,
// 				keywords: words
// 			},
// 			ifPerfix: {
// 				name: prefix + 'page',
// 				result: true
// 			}
// 		})		
// 		return false;
// });



// $('.screen-small .search_all form').on('submit',function(event) {
// 		//  搜索工作
// 		let words = $('.screen-small .search_all .search_content').val();	
// 		alert(words);
// 		toPage({
// 			url: 'seminar',
// 			data: {
// 				flag: flag,
// 				keywords: words
// 			},
// 			ifPerfix: {
// 				name: prefix + 'page',
// 				result: true
// 			}
// 		})	
// 		return false;
// });

$('body').on('click', '.dropdown li', function() {
	let index = $(this).attr('index');
	if (getQueryVariable('flag') != '') {
		let url = changeURLArg(window.location.href, 'flag', index);
		history.pushState('', '', url)
		window.location.href = url
	} else {
		window.location.href = window.location.href
	}

})

window.onload = function() {
	$('.dr-main-footer').css({
		'opacity': '1'
	})
}
let search_holder = '',
	login_name_holder = '',
	login_pwd_holder = ''
if (flag == 1) {
	$('body .dr_en').removeClass('dr_hide');
	$('body .dr_zn').addClass('dr_hide');
	$('.lan_zn').html('英文');
	$('.lan_en').html('English');
	search_holder = 'input content';
} else {
	$('body .dr_en').addClass('dr_hide');
	$('body .dr_zn').removeClass('dr_hide');
	$('.lan_zn').html('中文');
	$('.lan_en').html('Chinese');
	search_holder = '输入内容';
}
$('.screen-big .search_content').attr('placeholder', search_holder);
$('.other-main .search_content').attr('placeholder', search_holder);
$('.index-main').on('click', '.main-search', function() {
	toPage({
		url: 'dr_search',
		data: {
			flag: flag,
			node: checkPage('dr_search')
		},
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	});
})
$('.other-main').on('click', '.main-search', function() {
	toPage({
		url: 'dr_search',
		data: {
			flag: flag,
			node: checkPage('dr_search')
		},
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	});
})
for (let prop in List[0].second) {
	productHtml +=
		`<li class="dr-plant-icon" code="${List[0].second[prop].secondCategoryId}"><img src="${List[0].second[prop].imgPath}" alt=""><span>${List[0].second[prop].secondCategoryName}</span></li>`
}
for (let prop in List[1].second) {
	glassHtml +=
		`<li class="dr-plant-icon" code="${List[1].second[prop].secondCategoryId}"><img src="${List[1].second[prop].imgPath}" alt=""><span>${List[1].second[prop].secondCategoryName}</span></li>`
}
for (let prop in efficalList) {
	effecailHtml +=
		`<li class="dr-plant-icon" e_id="${efficalList[prop].id}"><img src="${efficalList[prop].imgPath}" alt=""><span>${efficalList[prop].efficacyName}</span></li>`
}
$('#product ul').append(productHtml);
$('#glass ul').append(glassHtml);
$('#product-effect ul').append(effecailHtml);
if (localStorage.getItem('token') != null) {
	$('.index-main .login').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好,</span>${window.user.userName}</a><a class='exit' onclick="exit(0)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	);
	$('.other-main .login').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好,</span>${window.user.userName}</a><a class='exit' onclick="exit(1)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	);
} else {
	$('.index-main .login ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	);
	$('.other-main .login ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	);
}
if (flag == 1) {
	$('.screen-small .dr_en').removeClass('dr_hide');
	$('.screen-small .lan_zn').html('英文');
	$('.screen-small .lan_en').html('English');
} else {
	$('.screen-small .dr_zn').removeClass('dr_hide');
	$('.screen-small .lan_zn').html('中文');
	$('.screen-small .lan_en').html('Chinese');
}
$('.panel-heading').on('click', function() {
	let index = $(this).attr('data-index');
})
$('.index-main .panel-heading').on('click', function() {
	let index = $(this).attr('data-index');
	switch (index) {
		case '0':
			return toPage({
				url: prefix + 'index',
				data: {
					flag: flag
				},
				ifPerfix: {
					name: '',
					result: false
				}
			})
			break;
		case '1':
			return toPage({
				url: 'story',
				data: {
					flag: flag,
					node: checkPage('story')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '2':
			return toPage({
				url: 'strength',
				data: {
					flag: flag,
					node: checkPage('strength')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '3':
			return toPage({
				url: 'brand_history',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('brand_history')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '4':
			return toPage({
				url: 'kinds_more',
				data: {
					flag: flag,
					node: checkPage('kinds_more')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '5':
			return toPage({
				url: 'dr_milepost',
				data: {
					flag: flag,
					node: checkPage('dr_milepost')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '6':
			return toPage({
				url: 'brand_kinds',
				data: {
					flag: flag,
					node: checkPage('brand_kinds')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '7':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '8':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 2,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '9':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 3,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '10':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 4,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '11':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '12':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 2,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '13':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 3,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '14':
			return toPage({
				url: 'dr_search',
				data: {
					flag: flag,
					node: checkPage('dr_search')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
	}
})
$('.other-main .panel-heading').on('click', function() {
	let index = $(this).attr('data-index');
	switch (index) {
		case '0':
			return toPage({
				url: prefix + 'index',
				data: {
					flag: flag
				},
				ifPerfix: {
					name: '',
					result: false
				}
			})
			break;
		case '1':
			return toPage({
				url: 'story',
				data: {
					flag: flag,
					node: checkPage('story')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '2':
			return toPage({
				url: 'strength',
				data: {
					flag: flag,
					node: checkPage('strength')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '3':
			return toPage({
				url: 'brand_history',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('brand_history')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '4':
			return toPage({
				url: 'kinds_more',
				data: {
					flag: flag,
					node: checkPage('kinds_more')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '5':
			return toPage({
				url: 'dr_milepost',
				data: {
					flag: flag,
					node: checkPage('dr_milepost')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '6':
			return toPage({
				url: 'brand_kinds',
				data: {
					flag: flag,
					node: checkPage('brand_kinds')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '7':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '8':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 2,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '9':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 3,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '10':
			return toPage({
				url: 'brand_trends',
				data: {
					flag: flag,
					type: 4,
					node: checkPage('brand_trends')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '11':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 1,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '12':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 2,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '13':
			return toPage({
				url: 'dr_fans_area',
				data: {
					flag: flag,
					type: 3,
					node: checkPage('dr_fans_area')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '14':
			return toPage({
				url: 'dr_search',
				data: {
					flag: flag,
					node: checkPage('dr_search')
				},
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
	}
})

$('.index-main .dr-plant-icon').on('click', function() {
	let code = $(this).attr('code');
	let e_id = $(this).attr('e_id');
	let Obj = new Object();
	Obj.flag = flag;
	Obj.node = checkPage('seminar')
	if (code) {
		Obj.code = code;
	} else {
		Obj.e_id = e_id;
	}
	toPage({
		url: 'seminar',
		data: Obj,
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	})
})
$('.other-main .dr-plant-icon').on('click', function() {
	let code = $(this).attr('code');
	let e_id = $(this).attr('e_id');
	let Obj = new Object();
	Obj.flag = flag;
	Obj.node = checkPage('seminar')
	if (code) {
		Obj.code = code;
	} else {
		Obj.e_id = e_id;
	}
	toPage({
		url: 'seminar',
		data: Obj,
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	})
})


window.onresize = function() {
	$('.index-main .menu-list').html(other_menu)
	$('.other-main .menu-list').html(other_menu)
	$('.index-main .main-top').html(index_nav_top)
	$('.other-main .main-top').html(other_nav_top)
	$('#product ul').append(productHtml)
	$('#glass ul').append(glassHtml)
	$('#product-effect ul').append(effecailHtml)
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
}
createNav(getQueryVariable('node'));

function createTopicPage(node) {
	let divHTML = '';
	let id = getQueryVariable('code');
	let data = Data[id - 1];
	let nowNode = ''
	switch (id) {
		case '1':
			nowNode = 265
			break;
		case '2':
			nowNode = 266
			break;
		case '3':
			nowNode = 267
			break;
		default:
			break;
	}
	divHTML =
		`<ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li><span class='dr_hide dr_zn' node='${node}'>新闻源</span><span class='dr_hide dr_en'>News Resource</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${nowNode}'>${data.title}</span><span class='dr_hide dr_en'>${data.e_title}</span></li>
	</ul>`
	$('.screen-big .top_topic_title_box').prepend(divHTML)
	$('.screen-small .top_topic_title_box').prepend(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		toPage({
			url: 'brand_trends',
			data: {
				flag: flag,
				type: 4,
				node: checkPage('brand_trends')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
}

function createBrandPage(node) {
	let divHTML = '';
	let id = getQueryVariable('id');
	let nowNode = ''
	let type = '',
		name = '',
		e_name = '';
	if (node == 301) {
		type = 1
		name = '品牌新闻';
		e_name = 'Brand news'
	} else {
		type = 2
		name = '媒体报道';
		e_name = 'Report'
	}
	divHTML =
		`<div class="brand-top-title"><ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li><span class='dr_hide dr_zn' node='${node}'>${name}</span><span class='dr_hide dr_en'>${e_name}</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${node}'>详情</span><span class='dr_hide dr_en'>Details</span></li>
	</ul></div>`
	$('.screen-big .report').before(divHTML)
	$('.screen-small .milepost-box').before(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		toPage({
			url: 'brand_trends',
			data: {
				flag: flag,
				type: type,
				node: checkPage('brand_trends')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
}

function createFansPage(node) {
	let divHTML = '';
	let name = '植粉问答'
	e_name = 'Plant powder q&a'
	divHTML =
		`<div class="brand-top-title"><ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li><span class='dr_hide dr_zn' node='${node}'>${name}</span><span class='dr_hide dr_en'>${e_name}</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${node}'>详情</span><span class='dr_hide dr_en'>Details</span></li>
	</ul></div>`
	$('.screen-big .report').before(divHTML);
	$('.screen-small .milepost-box').before(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		toPage({
			url: 'dr_fans_area',
			data: {
				flag: flag,
				type: 3,
				node: checkPage('dr_fans_area')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
}

function createKindsPage(node) {
	let divHTML = '';
	let id = getQueryVariable('id');
	divHTML =
		`<div class="brand-top-title"><ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li><span class='dr_hide dr_zn' node='${node}'>公益动态</span><span class='dr_hide dr_en'>Dynamic</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${node}'>详情</span><span class='dr_hide dr_en'>Details</span></li>
	</ul></div>`
	$('.screen-big .report').before(divHTML);
	$('.screen-small .milepost-box').before(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		toPage({
			url: 'brand_kinds',
			data: {
				flag: flag,
				node: checkPage('brand_kinds')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
}

function createSeminarPage(node) {
	let divHTML = '';
	let code = getQueryVariable('code');
	let t_name = '';
	if (code) {
		List.forEach((item, index) => {
			item.second.some((sItem, sIndex) => {
				if (sItem.secondCategoryId == getQueryVariable('code')) {
					t_name = sItem.secondCategoryName
				}
			})
		})
	} else if (getQueryVariable('e_id')) {
		console.log(efficalList);
		efficalList.forEach((item) => {
			console.log(getQueryVariable('e_id'),item.id);
			if (getQueryVariable('e_id') == item.id) {				
				t_name = item.efficacyName
			}
		})
	} else if (getQueryVariable('keywords')) {
		if (flag == 0) {
			t_name = '搜索商品'
		} else {
			t_name = 'Search for goods'
		}		
	}
	
	divHTML =
		`<div class="brand-top-title"><ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${code}'>${t_name}</span><span class='dr_hide dr_en'>${t_name}</span></li>
	</ul></div>`
	$('.screen-big .brand-top-title').prepend(divHTML);
	$('.screen-small .product-img').before(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
}

function createStorePage(node) {
	let divHTML = '';
	let store = sessionStorage.getItem('store');
	let addressName = '';
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
				var cityId = ''
				data.result.forEach((item) => {
					if (item.id == store) {
						addressName = item.shopName
					}
				})
			} else {
				addressName = ''
			}
		}
	})
	let s_node = checkPage('dr_search'),
		a_node = checkPage('store_show')
	divHTML =
		`<ul class="bread-nav">
		<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
		<li><span class='dr_hide dr_zn' node='${s_node}'>专柜查询</span><span class='dr_hide dr_en'>Search</span></li>
		<li class="bread-first on"><span class='dr_hide dr_zn' node='${a_node}'>${addressName}</span><span class='dr_hide dr_en'>${addressName}</span></li>
	</ul>`
	$('.screen-big .brand-top-title').prepend(divHTML);
	$('.screen-small .dr_search_box').prepend(divHTML);
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		toPage({
			url: 'dr_search',
			data: {
				flag: flag,
				node: checkPage('dr_search')
			},
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		});
	})
}

function createProductPage(node) {
	let divHTML = '';
	let id = getQueryVariable('id');
	let code = getQueryVariable('fid');
	let t_name = '';
	let pro_name = '',
		pro_en_name = '',
		keywords = getQueryVariable('keywords'),
		e_id = getQueryVariable('e_id'),
		describe = ''
	$.ajax({
		url: head + '/product/selectOneList',
		type: 'POST',
		dataType: 'json',
		async: false,
		data: {
			id: id,
			flag: 0
		},
		success: function(res) {
			if (res.result) {
				console.log(res.result)
				pro_name = res.result.commodityName;
				pro_en_name = res.result.commodityNameEng;
			}
		}
	})
	if (code) {
		List.forEach((item, index) => {
			item.second.some((sItem, sIndex) => {
				if (sItem.secondCategoryId == code) {
					t_name = sItem.secondCategoryName
				}
			})
		})
	} else if (e_id) {
		efficalList.forEach((item) => {
			if (e_id == item.id) {				
				t_name = item.efficacyName
			}
		})
	} else if (keywords) {
		if (flag == 0) {
			t_name = '搜索商品'
		} else {
			t_name = 'Search for goods'
		}
	}
		divHTML =
			`<div class="brand-top-title"><ul class="bread-nav">
			<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
			<li><span class='dr_hide dr_zn' node='${code}'>${t_name}</span><span class='dr_hide dr_en'>${t_name}</span></li>
			<li class="bread-first on"><span class='dr_hide dr_zn' pcode="${code}" pcode="${code}" node='${id}'>${pro_name}</span><span class='dr_hide dr_en'>${pro_en_name}</span></li>
		</ul></div>`
	$('.screen-big .product-wrapper-details').before(divHTML);
	$('.screen-small .product_wrapper_box').before(divHTML);
	
	if (flag == 1) {
		$('body .dr_en').removeClass('dr_hide')
		$('.lan_zn').html('英文')
		$('.lan_en').html('English')
	} else {
		$('body .dr_zn').removeClass('dr_hide')
		$('.lan_zn').html('中文')
		$('.lan_en').html('Chinese')
	}
	$('.bread-nav li:nth-child(1)').on('click', () => {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		});
	})
	$('.bread-nav li:nth-child(2)').on('click', () => {
		let data = new Object();
		data.flag = flag;
		data.node = checkPage('seminar')
		if (code) {
			data.code = code;
		} else if (e_id) {
			data.e_id = e_id;
		} else {
			data.keywords = keywords
		}
		toPage({
			url: 'seminar',
			data: data,
			ifPerfix: {
				name: prefix + 'page',
				result: true
			}
		})
	})
}

function createNav(node) {
	let divHTML = '';
	let ifHas = pageResult.some((item) => {
		return item.node == node
	})
	if (parseInt(node) >= 265 && parseInt(node) <= 267) {
		createTopicPage(node);
	} else if (parseInt(node) == 141) {
		createSeminarPage(node)
	} else if (parseInt(node) == 271) {
		createFansPage(node)
	} else if (parseInt(node) == 181) {
		createStorePage(node)
	} else if (parseInt(node) >= 301 && parseInt(node) <= 311) {
		createBrandPage(node)
	} else if (parseInt(node) == 291) {
		createKindsPage(node)
	} else if (parseInt(node) == 281) {
		createProductPage(node)
	} else {
		if (ifHas) {
			for (let prop in pageResult) {
				if (pageResult[0].node != node) {
					if (pageResult[prop].node == node) {
						// divHTML =
						// 	`<div class='breadcrumb_box'><ul class="breadcrumb">
						// 	<li><a href="#"><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></a></li>
						// 	<li><a href="#"><span class='dr_hide dr_zn' node='${pageResult[prop].node}'>${pageResult[prop].name}</span><span class='dr_hide dr_en'>${pageResult[prop].name}</span></a></li>
						// </ul></div>`									
						divHTML =
							`<ul class="bread-nav">
							<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
							<li class="bread-first on"><span class='dr_hide dr_zn' node='${pageResult[prop].node}'>${pageResult[prop].name}</span><span class='dr_hide dr_en'>${pageResult[prop].e_name}</span></li>
						</ul>`
						webDiv =
							`<div class="brand-top-title"><ul class="bread-nav">
							<li><span class='dr_hide dr_zn' node='${pageResult[0].node}'>首页</span><span class='dr_hide dr_en'>Index</span></li>
							<li class="bread-first on"><span class='dr_hide dr_zn' node='${pageResult[prop].node}'>${pageResult[prop].name}</span><span class='dr_hide dr_en'>${pageResult[prop].e_name}</span></li>
						</ul></div>`

					}
				}
			}
			$('.brand-top-title').prepend(divHTML);
			$('.dr_search_box').prepend(webDiv);
			$('.bread-nav li:nth-child(1)').on('click', () => {
				toPage({
					url: prefix + 'index',
					data: {
						flag: flag
					},
					ifPerfix: {
						name: '',
						result: false
					}
				});
			})
			if (flag == 1) {
				$('body .dr_en').removeClass('dr_hide');
				$('body .dr_zn').addClass('dr_hide');
				$('.lan_zn').html('英文');
				$('.lan_en').html('English');
			} else {
				$('body .dr_en').addClass('dr_hide');
				$('body .dr_zn').removeClass('dr_hide');
				$('.lan_zn').html('中文');
				$('.lan_en').html('Chinese');
			}
		}
	}

}


function exit(num) {

	$.cookie('login', '')
	localStorage.removeItem('token')
	toPage({
		url: 'login',
		data: {
			flag: flag,
			node: checkPage('login')
		},
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	});
}

function toMember() {
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
}

function toRegister() {
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
}

function toLogin() {
	toPage({
		url: 'login',
		data: {
			flag: flag,
			node: checkPage('login')
		},
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	});
}

function createPlant() {
	var plant_box = '';
	for (let i = 0; i < List.length; i++) {
		switch (i) {
			case 0:
				plant_box =
					`<li>
                                        <h3>${List[i].firstCategoryName}</h3>
                                        <div class="plant_box product">
                                            <ul></ul>   
                                            <ul></ul>                               
                                        </div>
                                    </li>`;
				break;
			case 1:
				plant_box =
					`<li>
                                        <h3>${List[i].firstCategoryName}</h3>
                                        <div class="plant_box dr-alpine-grass">
                                             <ul></ul>                        
                                        </div>
                                    </li>`;
				break;
		}
		$('.plant-protect .brand-top > ul').append(plant_box)
	}
	let l_f_plant = '',
		r_f_plant = '',
		l_s_plant = ''
	for (let j = 0; j < List[0].second.length; j++) {
		if (j % 2 == 0) {
			l_f_plant +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${List[0].second[j].imgPath}" alt="${List[0].second[j].secondCategoryName}"></i><a href="seminar.html?type=${List[0].firstCategoryId}&&code=${List[0].second[j].secondCategoryId}">${List[0].second[j].secondCategoryName}</a></li>`
		} else {
			r_f_plant +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${List[0].second[j].imgPath}" alt="${List[0].second[j].secondCategoryName}"></i><a href="seminar.html?type=${List[0].firstCategoryId}&&code=${List[0].second[j].secondCategoryId}">${List[0].second[j].secondCategoryName}</a></li>`
		}
	}

	for (let j = 0; j < List[1].second.length; j++) {
		l_s_plant +=
			`<li class="dr-plant-icon"><i class="img_left"><img src="${List[1].second[j].imgPath}" alt="${List[1].second[j].secondCategoryName}"></i><a href="seminar.html?type=${List[0].firstCategoryId}&&code=${List[1].second[j].secondCategoryId}">${List[1].second[j].secondCategoryName}</a></li>`
	}
	$(".plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(1)').append(l_f_plant)
	$(".plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(2)').append(r_f_plant)
	$(".plant-protect .brand-top > ul > li:nth-child(2)").find('.plant_box > ul:nth-child(1)').append(l_s_plant)
	let effectHTML =
		`<li>
                                        <h3>产品功效</h3>
                                        <div class="dr-efficacy">
                                               <ul></ul>
                                               <ul></ul>
                                        </div>
                                    </li>`
	let l_eHTML = '',
		r_eHTML = ''
	$('.plant-protect .brand-top > ul').append(effectHTML)
	for (let i = 0; i < efficalList.length; i++) {
		if (i % 2 == 0) {
			l_eHTML +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${efficalList[i].imgPath}" alt="${efficalList[i].efficacyName}"></i><a href="javascript;;">${efficalList[i].efficacyName}</a></li>`
		} else {
			r_eHTML +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${efficalList[i].imgPath}" alt="${efficalList[i].efficacyName}"></i><a href="javascript;;">${efficalList[i].efficacyName}</a></li>`
		}
	}
	$('.plant-protect .dr-efficacy > ul:nth-child(1)').append(l_eHTML)
	$('.plant-protect .dr-efficacy > ul:nth-child(2)').append(r_eHTML)
}
window.onresize = function() {
	var btnMenu = $('.screen-small'),
		menuEle = $('.menu-list'),
		dialog = $('.common-dialog'),
		body = $('body'),
		imgHead = $('.member-head')
	btnMenu.on('click','.btn-main-menu',function() {
		dialog.animate({}, function() {
			$(this).css({
				'transform': 'translateX(0%)',
				'transition': '0.5s',
				'duration': '0.5s'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		menuEle.animate({}, function() {
			$(this).css({
				'transform': 'translateX(0%)',
				'transition': '0.5s',
				'duration': '0.5s',
				'box-shadow': '5px 0px 20px 1px #000'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		$('body').css({
			'overflow-y': 'hidden'
		})
	})
	body.on('click', '.common-dialog', function(event) {
		dialog.animate({}, function() {
			let _this = $(this);
			_this.css({
				'transform': 'translateX(100%)',
				'transition': '0.5s'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		menuEle.animate({}, function() {
			let _this = $(this);
			_this.css({
				'transform': 'translateX(100%)',
				'transition': '0.5s',
				'box-shadow': 'none'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		$('body').css({
			'overflow-y': 'initial'
		})
	})
}
$(document).ready(function() {
	$('#loader-box').removeClass('dr_main');
	$('#loader').shCircleLoader({
		duration: 1
	});
	$('#loader-box').addClass('dr_main');
	var btnMenu = $('.screen-small'),
	
		menuEle = $('.menu-list'),
		dialog = $('.common-dialog'),
		body = $('body'),
		imgHead = $('.member-head')

	btnMenu.on('click','.btn-main-menu', function() {
		dialog.animate({}, function() {
			$(this).css({
				'transform': 'translateX(0%)',
				'transition': '0.5s',
				'duration': '0.5s'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		menuEle.animate({}, function() {
			$(this).css({
				'transform': 'translateX(0%)',
				'transition': '0.5s',
				'duration': '0.5s',
				'box-shadow': '5px 0px 20px 1px #000'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		$('body').css({
			'overflow-y': 'hidden'
		})
	})
	body.on('click', '.common-dialog', function(event) {
		dialog.animate({}, function() {
			let _this = $(this);
			_this.css({
				'transform': 'translateX(100%)',
				'transition': '0.5s'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		menuEle.animate({}, function() {
			let _this = $(this);
			_this.css({
				'transform': 'translateX(100%)',
				'transition': '0.5s',
				'box-shadow': 'none'
			}); //在回调函数里面改变css属性来实现transform中的动画变换 
		})
		$('body').css({
			'overflow-y': 'initial'
		})
	})

	// imgHead.style.background = url('../../images/123.jpg')
	var num = 0
	$('.panel-group').on('click', '.panel', function(event) {
		if (num == $(this).attr('index')) {
			$('.panel-group').find('.icon-xiajiantou-').css({
				transform: 'rotate(0deg)',
				transition: '0.5s'
			})
			num = 0
		} else {
			if ($(this).find('.icon-xiajiantou-').hasClass('rotate')) {
				$('.panel-group').find('.icon-xiajiantou-').css({
					transform: 'rotate(0deg)',
					transition: '0.5s'
				})
			} else {
				$('.panel-group').find('.icon-xiajiantou-').css({
					transform: 'rotate(0deg)',
					transition: '0.5s'
				})
				$(this).find('.icon-xiajiantou-').css({
					transform: 'rotate(180deg)',
					transition: '0.5s'
				})
			}
			num = $(this).attr('index')
		}
	})
	$('.panel-group').on('click', '.panel-collapse', function(event) {
		event.stopPropagation();
	})
})
