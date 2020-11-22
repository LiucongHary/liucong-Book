### Iterator 遍历器

##### 是一种接口，为各种不同的数据结构提供统一的访问机制

​	1 为各种数据结构，提供一个统一的、简便的访问接口

​	2 数据结构的成员能够按某种次序排列

​	3 ES6创造了一种新的遍历命令 for...of循环，Iterator接口主要供for...of消费

```
实现过程：
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}
```

##### Interator接口

默认的Interator接口部署在数据结构的Symbol.iterator属性，一个数据结构中，只要有Symbol.iterator属性，就认为是“可遍历的”

原生具备Iterator接口的数据：`Array/Map/Set/String/TypedArray/函数arguments对象/NodeList对象`

```
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```

