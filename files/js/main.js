var userInfo = localStorage.getItem('userInfo')
var pageList = [{

}]

function createMenu() {
	let html = `<div class="panel-group" id="accordion"></div>`
	$('.index-main').append(html)
	let mHtml =
		`<div class="panel panel-default" index="0">
                <div class="panel-heading">
                    <a href="../index.html">首页</a>
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
                    <input type="text" autocomplete="off" news-password class="search_content form-control" placeholder="content">
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

$('body').on('click', '.dropdown li', function() {
	let index = $(this).attr('index');
	sessionStorage.setItem('flag', index);

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
if (sessionStorage.getItem('flag') == null || sessionStorage.getItem('flag') == '0') {
	flag = 0
} else {
	flag = 1
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
$('.index-main').on('click', '.main-search', function() {
	toPage({
		url: 'dr_search',
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	})
})
$('.other-main').on('click', '.main-search', function() {
	toPage({
		url: 'dr_search',
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	})
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
$('#product ul').append(productHtml)
$('#glass ul').append(glassHtml)
$('#product-effect ul').append(effecailHtml)
if (localStorage.getItem('token') != null) {
	$('.index-main .login').html(
		`<a onclick="toMember(0)"><span class="dr_zn dr_hide">你好,</span>${window.user.userName}</a><a class='exit' onclick="exit(0)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	)
	$('.other-main .login').html(
		`<a onclick="toMember(1)"><span class="dr_zn dr_hide">你好,</span>${window.user.userName}</a><a class='exit' onclick="exit(1)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	)
} else {
	$('.index-main .login ').html(
		`<a onclick="toLogin(0)"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	)
	$('.other-main .login ').html(
		`<a onclick="toLogin(1)"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	)
}
if (flag == 1) {
	$('.screen-small .dr_en').removeClass('dr_hide')
	$('.screen-small .lan_zn').html('英文')
	$('.screen-small .lan_en').html('English')
} else {
	$('.screen-small .dr_zn').removeClass('dr_hide')
	$('.screen-small .lan_zn').html('中文')
	$('.screen-small .lan_en').html('Chinese')
}
$('.panel-heading').on('click', function() {
	let index = $(this).attr('data-index');
})
$('.index-main .panel-heading').on('click', function() {
	let index = $(this).attr('data-index');
	switch (index) {
		case '0':
			return toPage({
				url: 'index',
				ifPerfix: {
					name: prefix + '',
					result: false
				}
			})
			break;
		case '1':
			return toPage({
				url: 'story',
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '2':
			return toPage({
				url: 'strength',
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
					type: 1
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
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '5':
			return toPage({
				url: 'dr_milepost',
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '6':
			return toPage({
				url: 'brand_kinds',
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
					type: 1
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
					type: 2
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
					type: 3
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
					type: 4
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
					type: 1
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
					type: 2
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
					type: 3
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
				url: 'index',
				ifPerfix: {
					name: prefix + '',
					result: true
				}
			})
			break;
		case '1':
			return toPage({
				url: 'story',
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '2':
			return toPage({
				url: 'strength',
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
					type: 1
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
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '5':
			return toPage({
				url: 'dr_milepost',
				ifPerfix: {
					name: prefix + 'page',
					result: true
				}
			})
			break;
		case '6':
			return toPage({
				url: 'brand_kinds',
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
					type: 1
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
					type: 2
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
					type: 3
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
					type: 4
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
					type: 1
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
					type: 2
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
					type: 3
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

function exit(num) {

	$.cookie('login', '')
	localStorage.removeItem('token')
	if (num == 0) {
		window.location.href = prefix + 'page/login.html'
	} else {
		window.location.href = prefix + 'page/login.html'
	}
}

function toMember(num) {
	if (num == 0) {
		window.location.href = prefix + 'page/dr_member.html'
	} else {
		window.location.href = prefix + 'page/dr_member.html'
	}
}

function toLogin(num) {
	if (num == 0) {
		window.location.href = prefix + 'page/login.html'
	} else {
		window.location.href = prefix + 'page/login.html'
	}
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
	var btnMenu = $('.btn-main-menu'),
		menuEle = $('.menu-list'),
		dialog = $('.common-dialog'),
		body = $('body'),
		imgHead = $('.member-head')
	btnMenu.on('click', function() {
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
	var btnMenu = $('.btn-main-menu'),
		menuEle = $('.menu-list'),
		dialog = $('.common-dialog'),
		body = $('body'),
		imgHead = $('.member-head')

	btnMenu.on('click', function() {
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
