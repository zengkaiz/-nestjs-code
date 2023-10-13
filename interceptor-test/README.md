nest 的 interceptor 就用了 rxjs 来处理响应  
常用的几个 operrator ：  
1. tap：不修改响应数据，执行一些额外逻辑，比如记录日志、更新缓存等  
2. map：对响应数据做修改，一般都是改成 {code, data, message} 的格式  
3. catchError：在 exception filter 之前处理抛出的异常，可以记录或者抛出别的异常  
4. timeout：处理响应超时的情况，抛出一个 TimeoutError，配合 catchErrror 可以返回超时的响应  

全局 interceptor 可以通过 APP_INTERCEPTOR 的 token 声明，这种能注入依赖，比 app.useGlobalInterceptors 更好。
