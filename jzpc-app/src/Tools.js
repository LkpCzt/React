export default class Tools {
	setCookie(name, value) {
		var exp = new Date();
		exp.setTime(exp.getTime() + 6 * 24 * 60 * 60 * 1000); //6天过期
		// escape() 对字符串进行编码。
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		return true;
	}
	getCookie(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		// unescape 对由 escape() 编码的字符串进行解码。
		if (arr != null) return unescape(arr[2]);
		return null;
	}
	closePopUp(id,hidden) {
		let close = document.getElementById(id);
		if (close) {
			close.className = id + ' ' + hidden;
		}else {
			console.log('未找到' + id);
		}
	}
	openPopUp(id) {
		let open = document.getElementById(id);
		if (open) {
			open.className = id;
		}else {
			console.log('未找到' + id);
		}
		
	}

}