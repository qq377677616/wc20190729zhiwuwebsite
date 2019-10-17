let addressObj = new Object();
addressList = new Array();
let store = sessionStorage.getItem('store')

$(function() {

	findList();
	// createAddress(addressList)
	createInfo({
		name: addressObj.shopName,
		address: addressObj.shopAddress,
		rideWay: addressObj.rideWay,
		url: addressObj.shopImageUrl
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
				name: prefix +'page',
				result: false
			}
		})
	})
	$('.other-page').on('click', '.has_store', function() {
		let store = $(this).attr('store')
		sessionStorage.setItem('store', store)
		toPage({
			url:  'store_show',
			data : {
				flag : flag,
				node: checkPage('store_show')
			},
			ifPerfix: {
				name: prefix +'page',
				result: false
			}
		})
	})

})

function createInfo(data) {
	let html =
		`<div class="type_box">
	                        <div class="store_title">${data.name}
	                               <span class="dr_zn dr_hide">店面地址？怎么联系？</span>
	                               <span class="dr_en dr_hide">Address ? How to contact?:</span>
	                        </div>
	                        <div class="address">
	                               <span class="dr_zn dr_hide">地址：</span>
	                               <span class="dr_en dr_hide">Address:</span>
	                            ${data.address}
	                        </div>
	                        <div class="type">
	                               <span class="dr_zn dr_hide">乘车方式：</span>
	                               <span class="dr_en dr_hide">rideWay:</span>
	                            ${data.rideWay}
	                        </div>
	                    </div>
	                    <div class="img_box">
	                        <div class="img_title">${data.name}
	                               <span class="dr_zn dr_hide">门店实景图</span>
	                               <span class="dr_en dr_hide">A real view of the store</span>
	                        </div>
	                        <div class="img_content">
	                            <img src="${data.url}" alt="">
	                        </div>
	                    </div>`
	let addressHTML = '',
		address = ''
	if (!addressList.length) {
		address +=
			`<tr>
	                               <td colspan="2"><span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span></td>
	                            </tr>`
		addressHTML +=
			`<div>
	                               <span class="dr_zn dr_hide">暂无数据</span><span class="dr_en dr_hide">No Data</span>
	                            </div>`
	} else {
		for (let prop in addressList) {
			addressHTML +=
				`<div class="address-box" class="has_store" store="${addressList[prop].id}">
	                            <div class="address-name">${addressList[prop].shopName}</div>
	                            <div class="address-details">${addressList[prop].shopAddress}</div>
	                        </div>`
			address +=
				`<tr class="has_store" store="${addressList[prop].id}">
	                                <td>${addressList[prop].shopName}</td>
	                                <td>${addressList[prop].shopAddress}</td>
	                            </tr>`
		}
	}
	$('.screen-big .top-title-main').html(data.name)
	$('.screen-small .top-title-main').html(data.name)
	$('.store_top').html(html)
	$('.address-list-box tbody').html(address)
	$('.address-list').html(addressHTML)
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

function findList() {
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
						addressObj = item
						cityId = item.cityId;
					}
				})
				data.result.forEach((item) => {
					if (cityId == item.cityId) {
						if (item.id != store) {
							addressList.push(item)
						}
					}
				})
			} else {
				addressObj = {}
				addressList = []
			}
		}
	})
}
