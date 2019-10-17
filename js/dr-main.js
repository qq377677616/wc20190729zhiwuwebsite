var head = 'https://dev.flyh5.cn/plant-doctor/pdapi';
var dr = new Ygtoast();
var List = []
var user = '';
var efficalList = [];
var video = false;
var flag;
var prefix = 'http://game.flyh5.cn/resources/game/wechat/dxl/dr_plant/'
var wjt_prefix = 'http://dev.flyh5.cn/plant-doctor/pdapi'
// var ctx = 'https://www.drplant.com.cn'
flag = getQueryVariable('flag');
flag = flag && flag == 1 ? 1 : 0;
var ctx = 'https://www.drplant.com.cn/'
var pageResult = [{
	name: '首页',
	e_name: 'Index',
	node: 101,
	url: 'index'
}, {
	name: '品牌故事',
	e_name: 'Brand story',
	node: 121,
	url: 'story'
}, {
	name: '品牌力量',
	e_name: 'Brand strength',
	node: 122,
	url: 'strength'
}, {
	name: '品牌历程',
	e_name: 'Brand course',
	node: 123,
	url: 'brand_history'
}, {
	name: '生物多样性',
	node: 131,
	url: 'kinds_more'
}, {
	name: '公益里程碑',
	e_name: 'Milestone',
	node: 132,
	url: 'dr_milepost'
}, {
	name: '公益动态',
	e_name: 'Good dynamic',
	node: 133,
	url: 'brand_kinds'
}, {
	name: '高山植物护肤',
	node: 141,
	url: 'seminar'
}, {
	name: '品牌动态',
	e_name: 'News source',		
	node: 151,
	url: 'brand_trends'
}, {
	name: '品牌新闻',
	e_name: 'News source',		
	node: 155,
	url: 'brand_trends_xw'
}, {
	name: '媒体报道',
	e_name: 'News source',		
	node: 156,
	url: 'brand_trends_m'
}, {
	name: '品牌相册',
	node: 157,
	url: 'brand_trends_x'
}, {
	name: '新闻源',
	e_name: 'News source',	
	node: 158,
	url: 'brand_trends_xwy'
}, {
	name: '植粉专区',
	e_name : 'Flour planting',
	node: 161,
	url: 'dr_fans_area'
}, {
	name: '会员政策',
	node: 165,
	url: 'dr_fans_area_m'
}, {
	name: '会员活动',
	node: 166,
	url: 'dr_fans_area_h'
}, {
	name: '植粉问答',
	e_name: 'Plant powder q&a',	
	node: 167,
	url: 'dr_fans_area_z'
}, {
	name: '植粉详情',
	node: 171,
	url: 'dr_fans_area'
}, {
	name: '门店展示',
	e_name: 'Store display',		
	node: 181,
	url: 'store_show'
}, {
	name: '个人中心',
	e_name: 'Personal center',		
	node: 191,
	url: 'dr_member'
}, {
	name: '品牌视频',
	e_name: 'Brand video',		
	node: 201,
	url: 'brand_video'
}, {
	name: '专柜查询',
	e_name: 'Search',		
	node: 211,
	url: 'dr_search'
}, {
	name: '登录',
	node: 221,
	url: 'login'
}, {
	name: '注册',
	node: 231,
	url: 'register'
}, {
	name: '忘记密码',
	node: 241,
	url: 'forget'
}, {
	name: '网页丢失',
	node: 251,
	url: 'lost_404'
}, {
	name: '石斛兰专题',
	e_name: 'Lon project',		
	node: 265,
	url: 'dr_topic_s',
}, {
	name: '凝露专题',
	e_name: 'Stone touch orchid special topic',		
	node: 266,
	url: 'dr_topic_n',
}, {
	name: '晚安面膜',
	e_name: 'Good night mask',		
	node: 267,
	url: 'dr_topic_w',
}, {
	name: '问答详情',
	node: 271,
	url: 'fans_details'
}, {
	name: '商品详情',
	node: 281,
	url: 'goods_details'
}, {
	name: '公益详情',
	node: 291,
	url: 'kinds'
}, {
	name: '新闻详情',
	node: 301,
	url: 'news'
}, , {
	name: '媒体详情',
	node: 311,
	url: 'report'
}]


var TopList = [{
	zn: '首页',
	en: 'Index'
}, {
	zn: '品牌故事',
	en: 'Story',
	children: [{
		zn: '品牌故事',
		en: 'Brand story',
		scripts_zn: '源自高山的植物之美',
		scripts_en: 'beauty from the mountains',
	}, {
		zn: '品牌力量',
		en: 'Brand strength',
		scripts_zn: '优质科研团队力量',
		scripts_en: 'Quality research team strength',
	}, {
		zn: '品牌历程',
		en: 'Brand course',
		scripts_zn: '植物医生品牌大记事',
		scripts_en: 'Brand memory',
	}]
}, {
	zn: '生物多样性保护',
	en: 'Variety',
	children: [{
		zn: '生物多样性',
		en: 'Variety',
		scripts_zn: '植物医生生物多样性',
		scripts_en: 'Variety',
	}, {
		zn: '公益里程碑',
		en: 'Milestone',
		scripts_zn: '11年植树节',
		scripts_en: '11 Arbor Day',
	}, {
		zn: '公益动态',
		en: 'Good dynamic',
		scripts_zn: '云南行',
		scripts_en: 'Yunnan line',
	}]
}, {
	zn: '高山植物护肤',
	en: 'Product'
}, {
	zn: '品牌动态',
	en: 'Trends',
	children: [{
		zn: '品牌新闻',
		en: 'Brand news',
		scripts_zn: '各个新闻展示',
		scripts_en: 'News show'
	}, {
		zn: '媒体报道',
		en: 'Media report ',
		scripts_zn: '2018风尚,植物医生斩获大奖',
		scripts_en: 'Won awards in 2018'
	}, {
		zn: '品牌相册',
		en: 'Brand photo album',
		scripts_zn: '门店图片',
		scripts_en: 'Store image'
	}, {
		zn: '新闻源',
		en: 'news source',
		scripts_zn: '石斛兰专题',
		scripts_en: 'Topic of dendrobium'
	}]
}, {
	zn: '植粉专区',
	en: 'Area'
}]
//查询产品系列列表
findProduct();
//查询产品功效列表
findEffical();
//创建基础的头部，底部DOM
createInitElement();

function findUser(token) {
	$.ajax({
		url: head + '/member/selectUser',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			token: token
		},
		success: (data) => {
			if (data.code == '0000') {
				user = data.result;
			} else {
				localStorage.removeItem('token')
			}
		}
	})
}

findUser(localStorage.getItem('token'));
if (localStorage.getItem('token') != null) {
	$('.main-page .dr-logo-nav >ul >li:nth-child(1) a').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好</span><span class="dr_en dr_hide">Welcome</span>,${window.user.userName}</a><a class='exit' onclick="exit(0)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	) //大屏 首页 登录
	$('.other-page .dr-logo-nav >ul >li:nth-child(1) a').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好</span><span class="dr_en dr_hide">Welcome</span>,${window.user.userName}</a><a class='exit' onclick="exit(1)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	) //大屏 首页 登录
	$('.index-main .login a').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好,</span><span class="dr_en dr_hide">Welcome</span>${window.user.userName}</a><a class='exit' onclick="exit(0)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	)
	$('.other-main .login a').html(
		`<a onclick="toMember()"><span class="dr_zn dr_hide">你好,</span>${window.user.userName}</a><a class='exit' onclick="exit(1)"><span class="dr_zn dr_hide">退出</span><span class="dr_en dr_hide">Exit</span></a>`
	)

} else {
	$('.main-page .dr-logo-nav >ul >li:nth-child(1) ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	) //大屏 首页 登录
	$('.other-page .dr-logo-nav >ul >li:nth-child(1) ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	) //大屏 首页 登录
	$('.index-main .login ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	)
	$('.other-main .login ').html(
		`<a onclick="toLogin()"><span class="dr_zn dr_hide">登录/注册</span><span class="dr_en dr_hide">Login/Register</span></a>`
	)
}

// if (flag == 1) {
// 	$('body .dr_zn').addClass('dr_hide');
// 	$('body .dr_en').removeClass('dr_hide');
// 	$('.lan_zn').html('英文');
// 	$('.lan_en').html('English');
// } else {
// 	$('body .dr_zn').removeClass('dr_hide');
// 	$('body .dr_en').addClass('dr_hide');
// 	$('.lan_zn').html('中文');
// 	$('.lan_en').html('Chinese');
// }

function findProduct() {
	$.ajax({
		url: head + '/product/selectFirstCategory',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: flag
		},
		async: false,
		success: (data) => {
			List = data.result == '' ? [] : data.result
			if (data.result) {
				List.forEach((item) => {
					findSecond(item.firstCategoryId)
				})
			}
		}
	})
}

function findSecond(id) {
	$.ajax({
		url: head + '/product/selectSecondCategory',
		dataType: 'json',
		data: {
			categoryId: id,
			flag: flag
		},
		type: 'POST',
		async: false,
		success: (data) => {
			if (data.result) {
				List.forEach((item, index) => {
					if (item.firstCategoryId == id) {
						item.second = data.result
					}
				})
			} else {
				List.forEach((item, index) => {
					if (item.firstCategoryId == id) {
						item.second = []
					}
				})
			}
		}
	})
}

function findEffical() {
	$.ajax({
		url: head + '/product/efficactList',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: flag
		},
		async: false,
		success: (data) => {
			efficalList = data.result == '' ? [] : data.result
		}
	})
}

function createPlant() {
	var plant_box = '';
	let m_l_f_plant = '',
		m_r_f_plant = '',
		m_l_s_plant = ''
	if (List) {
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

		for (let j = 0; j < List[0].second.length; j++) {
			if (j % 2 == 0) {
				m_l_f_plant +=
					`<li class="dr-plant-icon"><i class="img_left"><img src="${List[0].second[j].imgPath}"></i><a code="${List[0].second[j].secondCategoryId}">${List[0].second[j].secondCategoryName}</a></li>`
			} else {
				m_r_f_plant +=
					`<li class="dr-plant-icon"><i class="img_left"><img src="${List[0].second[j].imgPath}"></i><a code="${List[0].second[j].secondCategoryId}">${List[0].second[j].secondCategoryName}</a></li>`
			}
		}
		for (let j = 0; j < List[1].second.length; j++) {
			m_l_s_plant +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${List[1].second[j].imgPath}"></i><a code="${List[1].second[j].secondCategoryId}">${List[1].second[j].secondCategoryName}</a></li>`
		}
	}

	$(".main-page .plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(1)').append(
		m_l_f_plant)
	$(".main-page .plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(2)').append(
		m_r_f_plant)
	$(".main-page .plant-protect .brand-top > ul > li:nth-child(2)").find('.plant_box > ul:nth-child(1)').append(
		m_l_s_plant)

	$(".other-page .plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(1)').append(
		m_l_f_plant)
	$(".other-page .plant-protect .brand-top > ul > li:nth-child(1)").find('.plant_box > ul:nth-child(2)').append(
		m_r_f_plant)
	$(".other-page .plant-protect .brand-top > ul > li:nth-child(2)").find('.plant_box > ul:nth-child(1)').append(
		m_l_s_plant)
	let effectHTML =
		`<li>
                                        <h3><span class="dr_zn dr_hide">产品功效</span><span class="dr_en dr_hide">Product efficacy</span></h3>
                                        <div class="dr-efficacy plant_box">
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
				`<li class="dr-plant-icon"><i class="img_left"><img src="${efficalList[i].imgPath}"></i><a e_id="${efficalList[i].id}">${efficalList[i].efficacyName}</a></li>`
		} else {
			r_eHTML +=
				`<li class="dr-plant-icon"><i class="img_left"><img src="${efficalList[i].imgPath}"></i><a e_id="${efficalList[i].id}">${efficalList[i].efficacyName}</a></li>`
		}
	}
	$('.plant-protect .dr-efficacy > ul:nth-child(1)').append(l_eHTML)
	$('.plant-protect .dr-efficacy > ul:nth-child(2)').append(r_eHTML)

	$('.main-page .plant_box ul ').on('click', 'li a', function() {
		let code = $(this).attr('code')
		let e_id = $(this).attr('e_id')
		let data = new Object();
		data.flag = flag;
		data.node = checkPage('seminar')
		if (code) {
			data.code = code;
		} else if (e_id) {
			data.e_id = e_id;
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
	$('.other-page .plant_box ul ').on('click', 'li a', function() {
		let code = $(this).attr('code')
		let e_id = $(this).attr('e_id')
		let data = new Object();
		data.flag = flag;
		data.node = checkPage('seminar')
		if (code) {
			data.code = code;
		} else if (e_id) {
			data.e_id = e_id;
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

function createInitElement() {
	var main_top =
		`<ul class="main-nav-top">
                    <li>
                        <span class="dr_zn dr_hide">${TopList[0].zn}</span>
                        <span class="dr_en dr_hide">${TopList[0].en}</span>
                        <span class="top_line"></span>
                    </li>
                    <li>
                        <span class="dr_zn dr_hide">${TopList[1].zn}</span>
                        <span class="dr_en dr_hide">${TopList[1].en}</span>
                        <div class="brand-history nav_sub dr_hide">
                            <div class="brand-top">
                                <ul>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img">

</div>
                                            <div class="info-card-descript">
                                                <div class="card-title">                        
                                                    <span class="dr_zn dr_hide">${TopList[1].children[0].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[0].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[1].children[0].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[0].scripts_en}</span>
</div>
                                                <div class="card-to-find" index="1">
                                                <span class="dr_zn dr_hide">查看详情</span>
                                                <span class="dr_en dr_hide">view details</span>
                                                <span class="iconfont icon-youjiantou"></span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[1].children[1].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[1].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[1].children[1].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[1].scripts_en}</span>
</div>
                                                <div class="card-to-find" index="2">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[1].children[2].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[2].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[1].children[2].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[1].children[2].scripts_en}</span>
                                                </div>
                                                <div class="card-to-find" index="3">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="top_line"></span>
                    </li>
                    <li >
                        <span class="dr_zn dr_hide">${TopList[2].zn}</span>
                        <span class="dr_en dr_hide">${TopList[2].en}</span>
                        <div class="kinds-protect nav_sub dr_hide">
                            <div class="brand-top">
                                <ul>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[0].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[0].en}</span>
                                                
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[0].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[0].scripts_en}</span>
                                                </div>
                                                <div class="card-to-find" index="4">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[1].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[1].en}</span>
</div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[1].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[1].scripts_en}</span>
</div>
                                                <div class="card-to-find" index="5">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[2].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[2].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[2].children[2].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[2].children[2].scripts_en}</span>
</div>
                                                <div class="card-to-find" index="6">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="top_line"></span>
                    </li>
                    <li>
                        <span class="dr_zn dr_hide">${TopList[3].zn}</span>
                        <span class="dr_en dr_hide">${TopList[3].en}</span>
                        <div class="plant-protect nav_sub dr_hide">
                            <div class="brand-top">
                                <ul>

                                </ul>
                                <div class="product-line"></div>
                            </div>
                        </div>
                        <span class="top_line"></span>
                    </li>
                    <li>
                        <span class="dr_zn dr_hide">${TopList[4].zn}</span>
                        <span class="dr_en dr_hide">${TopList[4].en}</span>
                        <div class="brand-trends nav_sub dr_hide">
                            <div class="brand-top">
                                <ul>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[0].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[0].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[0].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[0].scripts_en}</span>                                                   
                                        </div>
                                                <div class="card-to-find" index="7">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[1].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[1].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[1].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[1].scripts_en}</span>                                                   
                                        </div>
                                                <div class="card-to-find" index="8">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[2].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[2].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[2].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[2].scripts_en}</span>                                                   
                                        </div>
                                                <div class="card-to-find" index="9">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-card-box">
                                            <div class="info-card-img"></div>
                                            <div class="info-card-descript">
                                                <div class="card-title">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[3].zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[3].en}</span>
                                                </div>
                                                <div class="card-info-content">
                                                    <span class="dr_zn dr_hide">${TopList[4].children[3].scripts_zn}</span>
                                                    <span class="dr_en dr_hide">${TopList[4].children[3].scripts_en}</span>                                                   
                                        </div>
                                                <div class="card-to-find" index="10">
                                                    <span class="dr_zn dr_hide">查看详情</span>
                                                    <span class="dr_en dr_hide">view details</span>
                                                    <span class="iconfont icon-youjiantou"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <span class="top_line"></span>
                    </li>
                    <li>
                        <span class="dr_zn dr_hide">${TopList[5].zn}</span>
                        <span class="dr_en dr_hide">${TopList[5].en}</span>
                        <span class="top_line"></span>
                    </li>
                </ul>
                    <div class="search_all">
						<form action="" onsubmit="return toSeminar($(this));">
							<input onfocus="Focus()" onblur="Blur()" type="search" autocomplete="off" news-password class="search-input search_content form-control" placeholder="">
						</form>
                    </div>
                     
                    <div class="sale_search">
							<span class="dr_zn dr_hide">专柜查询</span>
							<span class="dr_en dr_hide">Search</span>	
                    </div>`
	var main_login =
		`<ul>
                        <li><a class="dr_zn dr_hide">注册/登录</a><a class="dr_en dr_hide">registe/login</a></li>
                        <li class="dr-logo-nva-line"></li>
                        <li class="change-lan">
                            <div class="nav_menu3">
                                <ul>
                                    <li class='nav-has-sub'><a class="lan_zn dr_zn dr_hide" href='javascript:;'>中文</a><a class="lan_en dr_en dr_hide" href='javascript:;'>Chinese</a>
                                        <ul>
                                            <li><a index="0" class="dr_zn dr_hide" href='#'>中文</a><a index="0" class="dr_en dr_hide" href='#'>Chinese</a></li>
                                            <li><a index="1" class="dr_zn dr_hide" href='#'>英文</a><a index="1" class="dr_en dr_hide" href='#'>English</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>`
	let ft_img1 = prefix + '/image/jf.jpg',
		ft_img2 = prefix + '/image/jf2.jpg'
	var footer =
		`<div class="footer_main"><div class="dr-main-footer-top">
                    <ul>
                        <li data-index="0">
                            <span class="dr_zn dr_hide">品牌视频</span>
                            <span class="dr_en dr_hide">Brand video</span>
                        </li>
                        <li data-index="1">
                            <span class="dr_zn dr_hide">兰精灵</span>
                            <span class="dr_en dr_hide">Blue elves</span>
                        </li>
                        <li data-index="2">
                            <span class="dr_zn dr_hide">公益动态</span>
                            <span class="dr_en dr_hide">Dynamic</span>                    
                        </li>
                        <li data-index="3">
                            <span class="dr_zn dr_hide">会员活动</span>
                            <span class="dr_en dr_hide">Activity</span>                      
                        </li>
                    </ul>
                </div>
            <div class="dr-main-footer-container">
                <div class="dr-main-footer-container-left">
                    <div class="dr-main-footer-container-left-top">
                        <ul>
                            <li><span class="dr_zn dr_hide">植物医生天猫旗舰店</span><span class="dr_en dr_hide">Tmall flagship store</span></li>
                            <li><span class="dr_zn dr_hide">加盟热线</span><span class="dr_en dr_hide">Join the hotline</span>: 010-66088228</li>
                            <li><span class="dr_zn dr_hide">客服热线</span><span class="dr_en dr_hide">customer service hotline</span>: 400-810-5889</li>
                            <li><span class="dr_zn dr_hide">网络邮箱</span><span class="dr_en dr_hide">Web mail</span>: service@drplant.com.cn</li>
                        </ul>
                    </div>
                    <div class="dr-main-footer-container-left-bottom">
                        <ul>
                            <li>copyright@ <span class="dr_zn dr_hide">北京植物医生生物科技有限公司</span><span class="dr_en dr_hide">Beijing plant doctor biotechnology co. LTD. All rights reserved</span></li>
                            <li><span><span class="dr_zn dr_hide">地址</span><span class="dr_en dr_hide">Address</span>：<span class="dr_zn dr_hide">北京西城区西直门外大街1号院T1座10层D8-D9室</span><span class="dr_en dr_hide">Room d8-d9, floor 10, building T1, yard 1, xizhimenwai street, xicheng district, Beijing</span></span>  
                            <span> <span class="dr_zn dr_hide">网站使用条款：</span><span class="dr_en dr_hide">Terms of use:</span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202007537"><span class="dr_zn dr_hide">京ICP备09066495号－2号</span><span class="dr_en dr_hide"> Beijing ICP 09066495 -2</span></a></span></li>
                        </ul>
                    </div>
                </div>
                <div class="dr-main-footer-container-right">
                    <ul>
                    <li><span class="dr_zn dr_hide">关注与分享</span><span class="dr_en dr_hide">Follow and share</span></li>
                    <li><img src="${ft_img1}"/></li>
                    <li><img src="${ft_img2}"/></li>
                    </ul>
                </div>
            </div></div>`
	$('.main-page .dr-nav-top').html(main_top)
	$('.other-page .dr-nav-top').html(main_top)

	$('.main-page .dr-logo-nav').html(main_login)
	$('.other-page .dr-logo-nav').html(main_login)
	$('.dr-main-footer').html(footer)
	$('.main-page .dr-nav-top').on('click', '.brand-top li .card-to-find', function() {
		let index = parseInt($(this).attr('index'));
		switch (index) {
			case 1:
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
			case 2:
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
			case 3:
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
			case 4:
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
				// window.location.href='page/kinds_more.html'
				break;
			case 5:
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
				// window.location.href='page/dr_milepost.html'
				break;
			case 6:
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
				// window.location.href='page/brand_kinds.html'
				break;
			case 7:
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
				// window.location.href='page/brand_trends.html?type=1'
				break;
			case 8:
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
				// window.location.href='page/brand_trends.html?type=2'
				break;
			case 9:
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
				// window.location.href='page/brand_trends.html?type=3'
				break;
			case 10:
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
			default:
				break;
		}
	})
	$('.other-page .dr-nav-top').on('click', '.brand-top li .card-to-find', function() {
		let index = parseInt($(this).attr('index'));
		switch (index) {
			case 1:
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
			case 2:
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
			case 3:
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
			case 4:
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
				// window.location.href='page/kinds_more.html'
				break;
			case 5:
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
				// window.location.href='page/dr_milepost.html'
				break;
			case 6:
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
				// window.location.href='page/brand_kinds.html'
				break;
			case 7:
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
				// window.location.href='page/brand_trends.html?type=1'
				break;
			case 8:
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
				// window.location.href='page/brand_trends.html?type=2'
				break;
			case 9:
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
				// window.location.href='page/brand_trends.html?type=3'
				break;
			case 10:
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
			default:
				break;
		}
	})

	$('.main-page .dr-main-top').on('click', '.main-nav-top > li:nth-child(1) span', function() {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: '',
				result: false
			}
		})
	})
	$('.other-page .dr-main-top').on('click', '.main-nav-top >li:nth-child(1) span', function() {
		toPage({
			url: prefix + 'index',
			data: {
				flag: flag
			},
			ifPerfix: {
				name: +'',
				result: false
			}
		})
	})
	$('.main-page .dr-main-top').on('click', '.main-nav-top > li:last-child span', function() {
		toPage({
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
	})
	$('.other-page .dr-main-top').on('click', '.main-nav-top > li:last-child span', function() {
		toPage({
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
	})

}

function toSearch() {
	$.ajax({
		url: head + '/news/selectNewsDetails',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			flag: flag
		},
		success: (data) => {
			if (data.result) {
				addressList = data.result
			} else {
				addressList = []
			}
		}
	})
}
//创建产品列表，产品功效DOM
createPlant();
if (flag == 1) {
	$('body .dr_en').removeClass('dr_hide')
	$('.lan_zn').html('英文')
	$('.lan_en').html('English')
} else {
	$('body .dr_zn').removeClass('dr_hide')
	$('.lan_zn').html('中文')
	$('.lan_en').html('Chinese')
}
// var dr =  new Ygtoast();
// function showRadio(num){
//     video = true;
//     $('.video_box').removeClass('dr_hide')
//     let pageObj = {
//         url : 'index',
//         data : {
//             type : 1,
//             code : 10000
//         },
//         ifPerfix : {
//             name : '..',
//             result : true
//         }
//     }
//     toPage(pageObj)
// }
function toPage(pageObj) {
	pageObj = pageObj || ''
	let str = ''
	let time = 0;
	if (pageObj.data) {
		Object.keys(pageObj.data).forEach(function(key) {
			if (time == 0) {
				str += "?" + key + "=" + pageObj.data[key]
			} else {
				str += "&&" + key + "=" + pageObj.data[key]
			}
			time++;
		})
	}
	if (pageObj) {
		// window.location.href = pageObj.ifPerfix.name +"/"+ pageObj.url+".html" + str
		if (pageObj.ifPerfix.result) {
			// console.log(pageObj.ifPerfix.name +"/"+ pageObj.url+".html" + str)
			window.location.href = pageObj.ifPerfix.name + "/" + pageObj.url + ".html" + str
		} else {
			// console.log(pageObj.ifPerfix.name +"/"+ pageObj.url+".html" + str)
			window.location.href = pageObj.url + ".html" + str
		}
	}
}


$(document).ready(function() {
	var logoNavUl = $('.dr-logo-nav ul'),
		el_ul = $('.main-page .dr-nav-top .main-nav-top'),
		m_ul = $('.dr-nav-top .ul'),
		m_li = $('.dr-nav-top .main-nav-top li'),
		navTop = $('.other-page .dr-nav-top'),
		dr_top_len = $('.dr-nav-top ul').length
	// logoNavUl.append(loginHtml)
	// navTop.append(topHtml)
	var otherTop = $('.other-page .dr-nav-top .main-nav-top')
	var el_li = $('.other-page .dr-nav-top .main-nav-top li')
	// 首页头部悬浮
	el_ul.on('mouseover mouseout', 'li', function() {
		var $this = $(this)
		m_li.find('.nav_sub').addClass('dr_hide')
		var nav_sub = $(this).find('.nav_sub')
		m_li.removeClass('nav-active')
		if (event.type == 'mouseover') {
			$this.addClass('nav-active')
			$this.find('.top_line').stop().animate({
				width: '100%'
			}, 200)
			nav_sub.stop().slideDown('50')
		} else if (event.type == 'mouseout') {
			$this.find('.top_line').stop().animate({
				width: '0px'
			}, 200)
			nav_sub.stop().slideUp('50')
		}
	})
	// 其他页头部悬浮
	otherTop.on('mouseover mouseout', 'li', function() {
		var $this = $(this)
		var nav_sub = $(this).find('.nav_sub')
		m_li.find('.nav_sub').addClass('dr_hide')
		el_li.removeClass('nav-active')
		if (event.type == 'mouseover') {
			$this.addClass('nav-active')
			$this.find('.top_line').stop().animate({
				width: '100%'
			}, 200)
			nav_sub.stop().slideDown('50')
		} else if (event.type == 'mouseout') {
			$this.find('.top_line').stop().animate({
				width: '0px'
			}, 200)
			nav_sub.stop().slideUp('50')
		}
	})

	// 语言悬浮显示
	$('.change-lan').on('mouseover mouseout', function() {
		var $this = $(this)
		if (event.type == 'mouseover') {
			$('.change-lan .lan-type').removeClass('dr_hide')
		} else if (event.type == 'mouseout') {
			$('.change-lan .lan-type').addClass('dr_hide')
		}
	})
	$('.change-lan  .nav-has-sub ul li').on('click', 'a', function() {
		let index = $(this).attr('index');
		if (getQueryVariable('flag') != '') {
			let url = changeURLArg(window.location.href, 'flag', index);
			history.pushState('', '', url)
			window.location.href = url
		} else {
			window.location.href = window.location.href
		}
	})
	// 语言选中
	$('.lan-type').on('mouseover mouseout', 'li', function() {
		var $this = $(this)
		var li = $('.lan-type li')
		li.removeClass('lan-active')
		if (event.type == 'mouseover') {
			$this.addClass('lan-active')
		} else if (event.type == 'mouseout') {
			$this.removeClass('lan-active')
		}
	})
	$('.main-footer').on('click', 'li', function() {
		let txt = $(this).attr('data-index')
		switch (txt) {
			case '0':
				toPage({
					url: 'brand_video',
					data: {
						flag: flag,
						node: checkPage('brand_video')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '1':
				toPage({
					url: 'seminar',
					data: {
						flag: flag,
						code: 1001,
						node: checkPage('seminar')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '2':
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
				})
				break;
			case '3':
				toPage({
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
		}
	})
	$('.other-footer').on('click', 'li', function() {
		let txt = $(this).attr('data-index')
		switch (txt) {
			case '0':
				toPage({
					url: 'brand_video',
					data: {
						flag: flag,
						node: checkPage('brand_video')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '1':
				toPage({
					url: 'seminar',
					data: {
						flag: flag,
						code: 1001,
						node: checkPage('seminar')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '2':
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
				})
				break;
			case '3':
				toPage({
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
		}
	})

	$('.index-main .dr-main-footer-top').on('click', 'li', function() {
		let txt = $(this).attr('data-index')
		switch (txt) {
			case '0':
				toPage({
					url: 'brand_video',
					data: {
						flag: flag,
						node: checkPage('brand_video')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				});

				break;
			case '1':
				toPage({
					url: 'seminar',
					data: {
						flag: flag,
						code: 2001,
						node: checkPage('seminar')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '2':
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
				})
				break;
			case '3':
				toPage({
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
		}
	})

	$('.other-main .dr-main-footer-top').on('click', 'li', function() {
		let txt = $(this).attr('data-index')

		switch (txt) {
			case '0':
				toPage({
					url: 'video',
					data: {
						flag: flag
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				});

				break;
			case '1':
				toPage({
					url: 'seminar',
					data: {
						flag: flag,
						type: 1,
						code: 2001,
						node: checkPage('seminar')
					},
					ifPerfix: {
						name: prefix + 'page',
						result: true
					}
				})
				break;
			case '2':
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
				})
				break;
			case '3':
				toPage({
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
		}
	})
	$('.main-page .sale_search').on('click', function() {
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
		})
	})
	$('.other-page .sale_search').on('click', function() {
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
		})
	})

	// $('.main-page .login').on('click', function() {
	// 	toPage({
	// 		url: 'dr_search',
	// 		data: data,
	// 		ifPerfix: {
	// 			name: prefix + 'page',
	// 			result: true
	// 		}
	// 	})
	// })
	// $('.other-page .member').on('click', function() {
	// 	toPage({
	// 		url: 'dr_search',
	// 		data: data,
	// 		ifPerfix: {
	// 			name: prefix + 'page',
	// 			result: true
	// 		}
	// 	})
	// })
})

window.οnbefοreunlοad = function() {
	alert("===οnbefοreunlοad===");

	if (event.clientX > document.body.clientWidth && event.clientY < 0 || event.altKey) {
		alert("你关闭了浏览器");
	} else {
		alert("你正在刷新页面");
	}
}

function Focus() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
		$('body').removeClass('marTop')
	}
}

function Blur() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isiOS) {
		let Index = $('body')
		Index.scrollIntoView()
	} else if (isAndroid) {
		$('body').removeClass('marTop')
	}
}

function changeUrlArg(url, arg, val) {
	var pattern = arg + '=([^&]*)';
	var replaceText = arg + '=' + val;
	return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url +
		'&' + replaceText : url + '?' + replaceText);
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


function splitTime(time) {
	var timearr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
	let str = timearr[0] + "-" + timearr[1] + "-" + timearr[2];
	return str;
}

function toSeminar(e) {
	let words = e.find('.search_content').val();
	toPage({
		url: 'seminar',
		data: {
			flag: flag,
			keywords: words,
			node: checkPage('seminar')
		},
		ifPerfix: {
			name: prefix + 'page',
			result: true
		}
	})
	return false;
}

function sortBy(attr, rev) {
	//第二个参数没有传递 默认升序排列
	if (rev == undefined) {
		rev = 1;
	} else {
		rev = (rev) ? 1 : -1;
	}

	return function(a, b) {
		a = a[attr];
		b = b[attr];
		if (a < b) {
			return rev * -1;
		}
		if (a > b) {
			return rev * 1;
		}
		return 0;
	}
}

function checkPage(str) {
	let node = ''
	for (var prop in pageResult) {
		if (pageResult[prop].url == str) {
			node = pageResult[prop].node
			break;
		}
	}
	return node;
}
