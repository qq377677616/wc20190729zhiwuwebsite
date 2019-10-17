var addressList = [],
	provinceList = [],
	cityList = [],
	province = '',
	city = '',
	provinceId = '',
	cityId = ''
$(function() {
	locationByIpNow();
	$('.other-page').on('change', '.province', function() {
		let provinceId = $(this).find('option:selected').attr('regid');
		findCity(provinceId, $('.other-page').find('.city'))
		$('.screen-big .btn-dr-search').click();	
	})
	$('.other-main').on('change', '.province', function() {
		let provinceId = $(this).find('option:selected').attr('regid');
		findCity(provinceId, $('.other-main').find('.city'))
		$('.screen-small .btn-dr-search').click();
	})
	$('.other-page').on('change', '.city', function() {
		$('.screen-big .btn-dr-search').click();
	})
	$('.other-main').on('change', '.city', function() {
		$('.screen-small .btn-dr-search').click();
	})

	$('.other-main').on('click', '.address-box', function() {
		var store = $(this).attr('store')
		sessionStorage.setItem('store', store)
		toPage({
			url: 'store_show',
			data : {
				flag : flag,
				node: checkPage('store_show')
			},
			ifPerfix: {
				name: 'page',
				result: false
			}
		})
	})
	$('.screen-big').on('click', '.btn-dr-search', function() {
		let province = $('.screen-big .province').find("option:selected").attr('regid'),
			city = $('.screen-big .city').find("option:selected").attr('regid');
		let data = new Object();
		if (province != '0') {
			data.provinceId = province;
			if (city != '0') {
				data.cityId = city;
			}
		}
		data.flag = flag
		$.ajax({
			url: head + '/shopaddress/selectPages',
			dataType: 'json',
			type: 'POST',
			data: data,
			async: false,
			success: (data) => {
				if (data.result) {
					addressList = data.result
				} else {
					addressList = []
				}
				createAddress(addressList)
			}
		})

	})
	$('.screen-small').on('click', '.btn-dr-search', function() {
		let province = $('.screen-small .province').find("option:selected").attr('regid'),
			city = $('.screen-small .city').find("option:selected").attr('regid');
		let data = new Object();

		if (province != '0') {
			data.provinceId = province;
			if (city != '0') {
				data.cityId = city;
			}
		}
		data.flag = flag
		$.ajax({
			url: head + '/shopaddress/selectPages',
			dataType: 'json',
			type: 'POST',
			data: data,
			async: false,
			success: (data) => {
				if (data.result) {
					addressList = data.result
				} else {
					addressList = []
				}
				createAddress(addressList)
			}
		})

	})
})

function findList() {
	$.ajax({
		url: head + '/shopaddress/selectPages',
		dataType: 'json',
		type: 'POST',
		async: false,
		data: {
			flag: flag,
			provinceId: provinceId,
			city: cityId
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

function createAddress(arr) {
	var addressHTML = ''
	var address = ''
	if (arr.length) {
		for (let i = 0; i < arr.length; i++) {
			addressHTML +=
				`<div class="address-box" class="has_store" store="${arr[i].id}">
                                <div class="address-name">${arr[i].shopName}</div>
                                <div class="address-details">${arr[i].shopAddress}</div>
                            </div>`
			address +=
				`<tr class="has_store" store="${arr[i].id}">
                                    <td>${arr[i].shopName}</td>
                                    <td>${arr[i].shopAddress}</td>
                                </tr>`
		}
		$('.address-list-box tbody').html(address)
		$('.address-list').html(addressHTML)
	} else {
		addressHTML +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
		address +=
			`<div class="nodata"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></div>`
		$('.address-list-box tbody').html(addressHTML)
		$('.address-list').html(address)
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
}

function findProvince(ele) {
	let pHTML = ''
	if (flag == 0) {
		pHTML = '<option regid="0">全部</option>'
	} else {
		pHTML = '<option regid="0">All</option>'
	}

	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: 0
		},
		async: false,
		success: (data) => {
			if (data.result) {
				provinceList = data.result
				for (let i = 0; i < provinceList.length; i++) {
					if (province == provinceList[i].name) {
						provinceId = provinceList[i].code
					}
				}
			}
		}
	})
	$.ajax({
		url: head + '/shopaddress/selectAddress',
		dataType: 'json',
		type: 'POST',
		data: {
			flag: flag
		},
		async: false,
		success: (data) => {
			if (data.result) {
				provinceList = data.result
				for (let i = 0; i < provinceList.length; i++) {
					pHTML += `<option regid="${provinceList[i].code}">${provinceList[i].name}</option>`
				}
				ele.find('.province').html(pHTML)
				ele.find('.province').find("option[regid=" + provinceId + "]").attr("selected", true);
				findCity(provinceId, ele.find('.city'))
			} else {
				provinceList = []
			}
		}
	})
}

function findCity(provinceId, ele) {
	let sHTML = ''
	// let cityId = ''
	if (flag == 0) {
		sHTML = '<option regid="0">全部</option>'
	} else {
		sHTML = '<option regid="0">All</option>'
	}
	
	if (provinceId == 0) {
		ele.html(sHTML)
	} else {
		$.ajax({
			url: head + '/shopaddress/selectAddress',
			dataType: 'json',
			type: 'POST',
			async: false,
			data: {
				provinceId: provinceId,
				flag: 0
			},
			success: (data) => {
				if (data.result) {
					cityList = data.result
					city = cityList[0].name
					cityId = cityList[0].code
				}
			}
		})
		
		$.ajax({
			url: head + '/shopaddress/selectAddress',
			dataType: 'json',
			type: 'POST',
			async: false,
			data: {
				provinceId: provinceId,
				flag: flag
			},
			success: (data) => {
				if (data.result) {
					cityList = data.result
					for (let i = 0; i < cityList.length; i++) {
						sHTML += `<option parid="${provinceId}" regid="${cityList[i].code}">${cityList[i].name}</option>`
					}
					ele.html(sHTML)
					ele.find("option[regid=" + cityId + "]").attr("selected", true);
				} else {
					cityList = []
				}
			}
		})
		findList();
		createAddress(addressList)
	}

}

$('.other-page').on('click', '.has_store', function() {
	let store = $(this).attr('store')
	sessionStorage.setItem('store', store)
	toPage({
		url: 'store_show',
		data : {
			flag : flag,
			node: checkPage('store_show')
		},
		ifPerfix: {
			name: 'page',
			result: false
		}
	})
})

function locationByIpNow() {
	var localtion = {};
	localtion.ip = returnCitySN.cip;
	// 通过百度api获得经纬度
	$.ajaxSettings.async = true;
	$.getJSON("https://api.map.baidu.com/location/ip?callback=?", {
		// 'ak' : 'x2CC5dtMtwjAAe6epLt2s1Kxs0BmSxPu',
		'ak': 'lApvxfMWyOB9So5CZUOupRGg7wLYlbGx',
		'coor': 'bd09ll',
		'ip': localtion.ip
	}, function(data) {
		localtion.province = data.content.address_detail.province;
		province = data.content.address_detail.province
		city = data.content.address_detail.city
		localtion.city = data.content.address_detail.city;
		localtion.district = data.content.address_detail.district;
		// x1.innerHTML=JSON.stringify(data.content);
		findProvince($('.other-page'));
		findProvince($('.other-main'));
	});
}
