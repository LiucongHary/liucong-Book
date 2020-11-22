# String
1 anchor() 创建a标签

```
a标签的id属性是name属性的升级版 name属性相当于a标签的书签
1 anchor的使用
	js: const text = 'cilck me';
			document.write(text.anchor())
2 锚点链接的使用
	html <a href='#aaa'>aaa</a>
			 <a name='aaa'>ccc</a>
	
```

link

```
string.link('http://www.baidu.com') 字符串显示为超链接
```



设置字体方法

```
string.big()  字体大号
string.small() 字体小号
string.blink() 字体闪动
string.bold()  字体粗体
string.italics() 字体斜体
string.strike()  字体加删除线
string.fixed()  字体为打印机字体
string.sub()  字符串显示为下标
string.sup()  字符串显示为上标
string.fontcolor(color) 字体颜色 color: red/rgb(255,0,0)/#ccc
string.fontsize(size) 字体大小 size:1-7

```

charAt 、charCodeAt 、fromCharCode

```
str.chartAt(index)  返回指定位置的字符
str.charCodeAt(index) 返回指定位置的字符串Unicode编码
String.fromCharCode(72,69,76,76,79) 根据Unicode编码返回最终的字符串 ‘HRLLO’
```

concat、indexOf、lastIndexOf

```
不会改变原数组
str.concat(str1,str2,str3...)  字符串连接，返回连接后的最终字符串
str.indexOf(searchValue,fromindex) 返回某指定字符串首次出现的位置的索引值，无返回-1，此方法对字母的大小写敏感
str.lastIndexOf(serchvalue,fromindex) 从后往前搜索

```

localeCompare()

```
string.localCompare(str1) 比较本地特定顺序两个字符串 （汉文 大于返回1 小于返回-1）
```

match、replace、search

```
str.match(searchValue/regexp)  返回匹配到内容的数组,未匹配到返回null 支持全局匹配
str.replace(regexp/substr,relacement) 返回被修改的字符串 参数2可以是函数 支持全局匹配
str.search(regexp) 返回字符串所在的索引 未匹配到字符串则返回-1 不支持全局匹配
```

slice、substring、substr、split

```
string.slice(startIndex[,endIndex]) 返回截取字符串 [startIndex,endIndex)
string.substring(startIndex[,endIndex])  返回截取字符串 [startIndex,endIndex) endIndex不可为负数
string.substr(startIndex[,length])  返回截取字符串 [startIndex,length]
string.split(separator/regexp[,howmany]) 字符串转数组 参数二：截取多少个


```

toLocaleLowerCase

```
str.toLocalLowerCase()  字符串转大写转小写
str.toLowerCase()
str.toLocalUpperCase()  字符串小写转大写
str.toUppercase()
```

toString 转成字符串类型

```
Number.toString()
```

valueOf()

```
string.valueOf() 返回对象的原始值 调用该方法的对象不是String类型会抛出TypeError异常
```



ES6

includes(), startsWith(), endsWith()

```
includes(ele[,index])：返回布尔值，表示是否找到了参数字符串。
startsWith(ele[,index])：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith(ele[,index])：返回布尔值，表示参数字符串是否在原字符串的尾部。

let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

repeat() 返回一个新字符串

```
str.repeat(n) // n：表示重复n次
'hello'.repeat(2) // "hellohello"
```



padStart(), padEnd() 不全长度功能

```
参数一：字符串补全生效的最大长度
参数二：不来补全的字符串 参数二省略默认使用空格补全长度
头部补全
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

尾部补全
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

如果原字符串的长度，等于或者大于最大长度，则字符串补全不生效，返回原字符串
'xxx'.padStart(2, 'ab') // 'xxx'
```

trimStart(), trimEnd() 消除字符头部/尾部 空格，返回新字符串，不会修改原始字符串

```
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```







