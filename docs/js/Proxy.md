#### Proxy 

```
ES6原生提供了Proxy构造函数，用来生成Proxy实例
var proxy = new Proxy(target,handler)
		参数一：所有代理的目标对象
		参数二：配置对象，对于每个被代理的操作，需要提供一个对应的处理函数
```

Proxy 支持的拦截操作 (共 13 种)

```
参数：
target: 目标对象
propkey: 属性名
value: 属性值
receiver: proxy实例本身 可选参数
1、get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
2、set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

3、参数：目标对象 需查询的属性名
has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。

4、deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。

5、ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

6、getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

7、defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

8、preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。

9、getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。

10、isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。

11、setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

12、参数：目标对象 目标对象的上下文对象(this) 目标对象的参数数组
apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

13、参数： 目标对象、构造函数的参数数组
construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。方法返回必须时对象，否则会报错；目标对象一定是函数；construct中的this指向的是handler，不是实例对象
```



```javascript
示例
let data = {
  name: 'lc'
}
let handler = {
  get: function (target, key, receiver) {
    return target[key] = 'hary'
  }
}
data = new Proxy(data, handler)
```

