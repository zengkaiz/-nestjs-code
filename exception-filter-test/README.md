### 自定义 Exception Filter


如果捕获的是 HttpException，要注意兼容下 ValidationPipe 的错误格式的处理。  
如果 filter 要注入其他 provider，就要通过 AppModule 里注册一个 token 为 APP_FILTER 的 provider 的方式。  
捕获的 Exception 也是可以自定义的。