# js

## 基本数据类型
### 1 String
 ####  转字符串的方法
  ##### 1 toSting()  
    number.toString()  
    boolean.toString() 
    注意:undefined和null没有toString()方法  
  ##### 2  String()  
     String(number)
     String(Boolean)  
     String(undefiend)  
     String(null)  
  ##### 3 字符串拼接
     number/boolean/undefined/null + ''
 

#### 2 Number
数值范围 Number.MIN_VALUE~Number.MAX_VALUE  
无穷大Infinity 无穷小-Infinity  
  ##### 1 Number()  
    Number(String) // 只能转化纯数字的字符串  
    Number(Boolean)  // 1/0  
  ##### 2  parseInt()  
    parseInt(string)  
    注意: 字符串必须数字开头;如果字符串是数字+字母/小数, 则只提取数字/整数部分
  ##### 3 parseFloat()
    parseFloat(string)  
    注意: 字符串必须数字开头;如果字符串是数字+字母/小数, 则只提取开头的数字/有效的小数 
  ##### 4 +/-转换数字
    只能对纯数字进行转换/布尔值
    +'number/Boolean'  
    -'number/Boolean'
    

### 3 Boolean
### 4 undefined(声明了一个变量,但没有给这个变量赋值,默认值就是undefined)
### 5 null(表示一个空值)

### 基本数据类型的判断 typeof
```
 var a = 'abc'
 typeof a; // 'string'  
 typeof (typeof a); // 'string' (typeof返回的结果是string类型)
 typeof null // 'object'
```

 


1 NaN 判断一个值是不是`不是数字`(NaN与任何值比较都不相等,包括它自己)

```
	console.log( isNaN(123) ); //false
    console.log( isNaN(NaN) ); //true
    console.log( isNaN('abc') ); //true

```
