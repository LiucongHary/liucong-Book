#### generator

​	异步编程解决方案，调用generator函数会返回一个遍历对象。

函数调用和普通函数调用一样，generator函数调用后，该函数并不会执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象(即iterator遍历器对象)，需要调用next方法执行运行结果

```
genetator函数的写法
function* gen(){
	yield 'hello'
}

yield：遇到yield表达式，就会暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为对象返回
next:next方法的参数，yield表达式本身返回值为undefined。next方法可以带一个参数，该参数就会当作上一个yield表达式的返回值

示例：
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2
```

