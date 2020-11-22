# 数组总结

toString()、join()

```
arr.toString()  转字符串返回字符串
arr.join('-')   数组元素通过规定的分隔符结合成字符串 返回结合的字符串
```

pop、push、shift、unshift 改变原数组

```
arr.pop() 删除最后一个元素 返回删除的元素
arr.push('xx') 在数组最后面添加新元素 返回数组长度
arr.shift() 删除首个元素  返回删除的元素
arr.unshift('xx') 在数组最前面添加新元素 返回数组长度
```

delete 改变原数组

```
delete arr[index] 删除数组中某项 index项会留下未定义的空洞
```

splice 改变原数组

```
arr.splice(index,len,'str1','str2'...)  返回删除的元素 
		index:删除元素的位置 len:删除元素的长度  str1,str2,str3...添加元素

```

slice

```
arr.slice(index1[,index2]) 返回截取的数组 [index1,index2)

```

concat 

```
arr.concat(arr1,arr2,arr3) 返回合并后的数组
```

sort 、reverse 改变原数组

```
arr.sort()  对字母的顺序进行排序
	arr.sort(function(a,b){return a-b}) 升序  
	arr.sort(function(a,b){return b-a}) 降序
arr.reverse() 反转数组 返回反转后的数组

```





reduce

```
参数：
	prev:上次调用函数的返回值
	cur:当前元素
	index:当前元素索引
	arr:被遍历的数组
init 函数迭代的初始值
arr.reduce(function(prev,cur,index,arr){},init)

```

includes

```
[1,2,3].includes(1)  // 返回布尔值
```



Es6

1 扩展运算符

2 Array.from()  类似数组对象转数组

```
示例一：
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

示例二：
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']

示例三： Array.from() 的第二个参数，作用类似于数组的map,用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]

```

Array.of()  将一组数值，转换为数组

```
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

与 Array()/new Array()的区别
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

Array.copyWithin() 将制定位置的成员复制到其他位置(覆盖原有成员)，返回覆盖后的数组

```
Array.copyWithin(target[,startIndex,endIndex))  // [startIndex,endIndex)
target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
startIndex（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
endIndex（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算

[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1) // [4, 2, 3, 4, 5]
```

find() / findIndex() 找出符合条件的数组成员 

```
[1, 4, 5, 10].find((n) => n < 0) // undefined
[1, 4, -5, -10].find((n) => n < 0) // -5

find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组
[1, 5, 10, 15].find(function(value, index, arr) { return value > 9;}) // 10 

findIndex 查询到了返回数组索引否则返回-1
[1, 4, -5, -10].findIndex((n) => n < 0)  // 2
[1, 4, 5, 10].findIndex((n) => n < 0) // -1

注意：这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person); 

```

fill() 使用给定值，填充数组

```
arr.fill(copyContent[,startIndex,endIndex]) // [startIndex,endIndex)
['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']

如果填充类型为对象，则赋值的是同一个内存地址对象，不是深拷贝对象
let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

```

entries()、keys()、values() 用于遍历数组，可以用for...of进行遍历循环

```
keys() 对键名的遍历
values() 对键值的遍历
entries() 对键值对的遍历

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```



includes() 数组中是否包含某个元素 返回布尔值

```
arr.includes(ele[,startIndex])
[1, 2, 3].includes(2)  // true

includes() 与 indexOf的区别
[NaN].includes(NaN) // true
[NaN].indexOf(NaN) // -1
```

 flat() 、flatMap() 数组扁平化 返回新数组，不改变原数组

```
arr.flat(n) // n表示要拉平的层数，默认为1
[1, 2, [3, 4]].flat()  // [1, 2, 3, 4]
[1, 2, [3, [4, 5]]].flat() // [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2) // [1, 2, 3, 4, 5]

如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。
[1, [2, [3]]].flat(Infinity)

flatMap() 只能展开一层
示例一：
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
示例二：
// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]

```









 





****