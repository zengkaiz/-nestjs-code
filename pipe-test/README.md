### post 请求的校验

1. 接收 post 请求的方式是声明一个 dto class，然后通过 @Body 来取请求体来注入值
2. 做验证要使用 ValidationPipe。 

它的实现原理是基于 class-tranformer 把参数对象转换为 dto class 的对象，然后通过 class-validator 基于装饰器对这个对象做验证。


 