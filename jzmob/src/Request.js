export default class Request {
    hehe() {
        // console.log(this);
    }
    send(URL, method, params, callback1, callback2) {
        if (window.fetch) {
            fetchRequest(URL, method, params, callback1, callback2);
        } else {
            request({
                url: URL, //请求地址
                type: method, //请求方式
                data: JSON.stringify(params), //请求参数
                dataType: "json",
                success: function(response, xml) {
                    // 此处放成功后执行的代码
                    // console.log('success');
                    // console.log(response);
                    callback1(response);
                },
                fail: function(status) {
                    // 此处放失败后执行的代码
                    // console.log('fail');
                    callback2(status);
                }
            })
        }
    }
}
let common_url = 'http://192.168.1.41:8080/';  //服务器地址
function request(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    // var params = formatParams(options.data);
    var params = options.data;
    // console.log(params);
    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
        // 自动发送cookies
        xhr.withCredentials = true;
    } else { //IE6及其以下版本浏览器
        // var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    };

    //接收 - 第三步
    xhr.onreadystatechange = function() {
        // console.log('xhr.readyState:' + xhr.readyState);
        if (xhr.readyState === 4) {
            var status = xhr.status;
            // console.log('status:' + status);
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    };

    //连接 和 发送 - 第二步
    if (options.type === "GET") {
        xhr.open("GET",common_url + options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type === "POST") {
        xhr.open("POST",common_url + options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        // 简单请求
        // xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.send(params);
    }
}
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function fetchRequest(url, method, params = '', callback1, callback2) {
    let header = {
        "Content-Type": "application/json;charset=utf-8"
    };
    // console.log('request url:', url, params); //打印请求参数
    if (params === '') { //如果网络请求中没有参数
        // console.log('不带参');
        return new Promise(function(resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                    credentials:"include",// 自动发送cookies
                    method: method,
                    headers: header,
                    mode: "cors"
                })).then((response) => response.json())
                .then((responseData) => {
                    //网络请求成功返回的数据
                    // console.log('res:', url, responseData);
                    refresh(responseData.state);
                    resolve(responseData);
                    if (responseData.state === 'Session expired') {
                        document.cookie = "role="+escape('-1');
                        document.cookie = "currentLabel="+escape('');
                        window.location.reload();
                    }
                    if (callback1) {
                        callback1(responseData);
                    }

                })
                .catch((err) => {
                    //网络请求失败返回的数据  
                    // console.log('err:', url, err);
                    reject(err);
                    if (callback2) {
                        callback2(err);
                    }

                    // alert('网络请求失败:'+err);
                    // document.cookie = "role="+escape('-1');
                    // window.location.reload();
                });
        });
    } else { //如果网络请求中带有参数
        // console.log('带参');
        return new Promise(function(resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                    credentials:"include",// 自动发送cookies
                    method: method,
                    headers: header,
                    mode: "cors",
                    body: JSON.stringify(params) //body参数，通常需要转换成字符串后服务器才能解析
                    // body: params //body参数，通常需要转换成字符串后服务器才能解析
                })).then((response) => response.json())
                .then((responseData) => {
                    //网络请求成功返回的数据
                    // console.log('res:', url, responseData);
                    refresh(responseData.state);
                    resolve(responseData);
                    if (responseData.state === 'Session expired') {
                        document.cookie = "role="+escape('-1');
                        document.cookie = "currentLabel="+escape('');
                        window.location.reload();
                    }
                    if (callback1) {
                        callback1(responseData);
                    }
                })
                .catch((err) => {
                    //网络请求失败返回的数据  
                    // console.log('err:', url, err);
                    reject(err);
                    if (callback2) {
                        callback2(err);
                    }
                    // alert('网络请求失败:'+err);
                    // document.cookie = "role="+escape('-1');
                    // window.location.reload();
                });
        });
    }
}
function refresh(state) {
    if (state === 'Session expired') {
        document.cookie = "role="+escape('-1');
        window.location.reload();
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    return arr.join("&");
}

function timeout_fetch(fetch_promise, timeout = 20000) {
    let timeout_fn = null;

    //这是一个可以被reject的promise
    let timeout_promise = new Promise(function(resolve, reject) {
        timeout_fn = function() {
            reject('timeout promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);

    setTimeout(function() {
        timeout_fn();
    }, timeout);

    return abortable_promise;
}