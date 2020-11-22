# Object

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Object.assign(targetObj,sourceObj) 浅拷贝 所有可枚举属性的值从一个或多个源对象复制到目标对象。他将返回目标对象

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
console.log(source) // Object { b: 4, c: 5 }
```

Object.create()  创建一个新对象，使现有对象来提供新创建的对象的`__proto__`

```
const person = {
name: 'lc'
}
const person1 = Object.create(person)
console.log(person1.name); // lc
```





应用

in 判断对象中是否有某个属性

```
var obj = {name:'1'}
console.log('name' in obj) // true 返回布尔值
```



