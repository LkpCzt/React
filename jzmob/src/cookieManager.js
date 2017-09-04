function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 31 * 24 * 60 * 60 * 1000); //31天过期
    // escape() 对字符串进行编码。
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    return true;
};
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    // unescape 对由 escape() 编码的字符串进行解码。
    if (arr !== null) return unescape(arr[2]); return null;
};
export default getCookie;