#### export 与 export default 的区别

```js
1.export
//a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}
对应的导入方式：

//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号

2.export default
//a.js
const str = "blablabla~";
export default str;
对应的导入方式：

//b.js
import str from 'a'; //导入的时候没有花括号
```



#### node 模块导出

```javascript
// 01.js
module.exports = {}; //在内部的话这个东西默认等于{}
module.exports = {
　　a: 1,
　　b: function(){},
　　c: 'name'
}

let o = require('./01.js')
```



