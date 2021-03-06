
function request(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        // var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    };

    //接收 - 第三步
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    };

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&");
}
let common_url = 'http://192.168.1.16:8080/';  //服务器地址
let token = '';
function sayHello() {
    // body...
    console.log('hello world');
}
if(self.fetch){
    let params = {
        username:'admin',
        password:'123456'
    }
    fetchRequest('app/signin','POST',params)
        .then( res=>{
            //请求成功
            if(res.header.statusCode == 'success'){
                //这里设定服务器返回的header中statusCode为success时数据返回成功

            }else{
                //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc 
                console.log(res.header.msgArray[0].desc);
            }
        }).catch( err=>{ 
            //请求失败
        })
}else {
    request({
        url: "http://192.168.1.18:3000", //请求地址
        type: "GET", //请求方式
        data: {
            name: "super",
            age: 20
        }, //请求参数
        dataType: "json",
        success: function(response, xml) {
            // 此处放成功后执行的代码
            console.log('success');
        },
        fail: function(status) {
            // 此处放失败后执行的代码
            console.log('fail');
        }
    })
}
// fetch


/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
function timeout_fetch(fetch_promise,timeout = 10000) {
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

    return abortable_promise ;
}
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function fetchRequest(url, method, params = ''){
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    console.log('request url:',url,params);  //打印请求参数
    if(params == ''){   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                method: method,
                headers: header
            })).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:',url,responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.log('err:',url, err);     //网络请求失败返回的数据        
                    reject(err);
                });
        });
    }else{   //如果网络请求中没有参数
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                method: method,
                headers: header,
                body:JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
            })).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:',url, responseData);   //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.log('err:',url, err);   //网络请求失败返回的数据  
                    reject(err);
                });
        });
    }
}
