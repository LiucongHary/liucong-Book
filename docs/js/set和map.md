

#### set/WeakSet

##### set 类似于数组，本身是一个构造函数 set不会添加重复的元素

```
const s = new Set()
s.size // 返回set实例的成员总数
s.add(1)
s.add(2) // 添加元素 Set(2) {1,2} 返回set结构本身
s.delete(1) // 删除某个元素 set(1){2} 返回布尔值，是否删除成功
s.has(1) // 返回布尔值，该值是否为set的成员
s.clear() // 清除所有成员 返回 undefied



set函数可以接受一个数组,字符串作为参数，应用：数组去重
1 const a = new Set([1,2,3,4,2,]) // Set(4) {1, 2, 3, 4}
  set结构转数组
  方法一：[...a] // [1, 2, 3, 4]
  方法二：Array.from(a)
2 const a = new Set('abcabc')  // Set(3) {"a", "b", "c"}

```

set的遍历操作  for...of 可以循环set数据结构

```
Set.prototype.keys()    // 返回键名的遍历器
Set.prototype.values()  // 返回键值的遍历器
Set.prototype.entries() // 返回键值对的遍历器
Set.prototype.forEach() 

set结构实现并集、交集、差集
   let a = new Set([1, 2, 3]);
   let b = new Set([4, 3, 2]);
   const union = new Set([...a,...b])
   const Intersect = new Set([...a].filter(item=>b.has(item)))
   const difference = new Set([...a].filter(item=>!b.has(item)))
```

##### weakSet 不重复值的集合，它的成员只能是对象

```
const a = [[1,2],[3,4]]
const ws = new WeakSet(a); // WeakSet {[1, 2], [3, 4]}

WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
 const ws = new WeakSet();
 const obj = { name: 'lc' }
 const obj1 = { age: '19' }
 ws.add(obj)
 ws.add(obj1) 
 console.log(ws.has(obj1));  // true
 console.log(ws.delete(obj)); // true
 
 注意：WeakSet不能遍历，是因为成员都是弱引用，随时可能消失。可以使用WeakSet存储DOM节点，不用担心内存泄漏问题
```

#### Map和WeakMap

##### map 解决Object中的“键”不限于字符串，可以是各种类型的值

```
const m = new Map();
const o = {p:'hello'};
m.set(o,'content'); // 设置键值
m.get(o); // "content"  // 获取内容
m.has(o); // true  // 是否有此键值
m.delete(o); // false // 删除键值

================================
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]); // Map(2) {"name" => "张三", "title" => "Author"}
map.size // 2
map.has('name') // true
map.get('name') // "张三"

====> 其实执行的算法是
const items = [
  ['name', '张三'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(
  ([key, value]) => map.set(key, value)
);
====================================

```

map属性和操作方法

```
map.size 
map.set(key,value)
map.get(key)
map.has(key) //返回布尔值
map.delete(key) //返回布尔值
map.clear()

Map.prototype.keys()：返回键名的遍历器。
Map.prototype.values()：返回键值的遍历器。
Map.prototype.entries()：返回所有成员的遍历器。
Map.prototype.forEach()：遍历 Map 的所有成员。

map数据转数组 [...map.keys()]

```

##### WeakMap 与map结构类似，也是用于生成键值对的集合

```
未看-----
```





