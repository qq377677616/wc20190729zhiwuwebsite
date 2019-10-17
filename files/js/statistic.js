	//	<!-- 百度统计 -->
	document.write("<div style='display:none;'>"); //增加一个display:none的DIV
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol +
		"hm.baidu.com/h.js%3Fe2679b0698117173382a65620afd3268' type='text/javascript'%3E%3C/script%3E"));
	document.write("</div>"); //关闭DIV标签


	//	<!-- 百度商桥 -->
	document.write("<div style='display:none;'>"); //增加一个display:none的DIV
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write("</div>")
	document.write(unescape("%3Cscript src='" + _bdhmProtocol +
		"hm.baidu.com/h.js%3Fb3d80609ff324ecc73b0d4f951b50e81' type='text/javascript'%3E%3C/script%3E"));
	document.write("</div>"); //关闭DIV标签


	document.write(decodeURI("%3Cscript src='http://www.drplant.com.cn/visit_log?url=") + encodeURIComponent(document.location
		.href) + decodeURI(
		"&referrer=") + encodeURIComponent(document.referrer) + decodeURI("' type='text/javascript'%3E%3C/script%3E"));

	//<!--植物医生GA代码：-->

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	
	ga('create', 'UA-53569307-1', 'auto');
	ga('send', 'pageview');


