# symbol
1、 Symbol 防止属性命名冲突，表示独一无二的值

​         Symbol值通过Symbol函数生成  let s = Symbol();   typeof s // symbol

2、 Symbol函数不能使用new命令，Symbol是一个原始类型的值，不是对象。函数可以接受一个字符串作为参数来便于区分，表示对Symbol实例的描述，如：let s1 = Symbol('foo')

3 、Symbol值不能与其他类型的值进行运算。Symbo可以转字符串、布尔，但是不能转为数值

4、使用description属性，直接可以返回Symbol的描述 s1.description  // 'foo'

5、Symbol作为属性名，不可以使用点运算符

```
const s = Symbol()
const a = {
	[s]:'hello' // 方式一
}
a[s] = 'hello' // 方式二
```



6 、获取Symbol的键名

 6.1通过 Object.getOwnPropertySymbols() 方法可以获取指定对象的所有Symbol属性名。该方法返回一个数组；使用其他方法，不会得到Symbol的键名

 6.2、通过 Reflect.ownKeys(obj) 可以得到所有类型的键名

  由于Symbol值作为键名，不会被常规方法遍历得到。可以利用此特性，为对象定义一些非私有但又希望只用于内部的方法

```
示例一：
 const obj = {
   c:'c'
 };
 let a = Symbol('a');
 let b = Symbol('b');
 obj[a] = 'hello';
 obj[b] = 'hi';
 console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(a), Symbol(b)]
 console.log(Reflect.ownKeys(obj)) // ["c", Symbol(a), Symbol(b)]
```

7、 Symbol.for('foo') : 先搜索有无以该参数作为名称的Symbol值。有则返回这个Symbol值，否则奖会新创建以该字符串为名称的Symbol值，并将其注册到全局

  Symbol.for()有登记机制，不管有没有在全局环境中，都是全局登记的；但是Symbol却没有登记机制

```
Symbol.keysFor() 返回一个已经登记的Symbol类型的值key
let s1 = Symbol.for("foo");
Symbol.keyFor(s1); // foo

let s2 = Symbol('foo');
Symbol.keyFor(s2); // undefined
```

8、内置的Symbol值

```

```





​	









 

