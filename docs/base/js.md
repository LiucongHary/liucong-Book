# js
script标签中,可以写 type="text/JavaScript"也可以写 language="JavaScript".因为目前使用的html的标准是h5标准,所有不用额外备注

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
 

### 2 Number
数值范围 Number.MIN_VALUE~Number.MAX_VALUE  
无穷大Infinity 无穷小-Infinity  
#### 转number类型方法
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
  ##### 5 减法运算
    'number'-0

### 3 Boolean
  #### 转布尔值的方法
   #### Boolean
    Boolean(string/number/undefined/null) // 除了null undefined '' 0 NaN值为false其余都为true
   #### !!
   !!(string/number/undefined/null)
### 4 undefined(声明了一个变量,但没有给这个变量赋值,默认值就是undefined)
### 5 null(表示一个空值)

### 基本数据类型的判断 typeof
```
 var a = 'abc'
 typeof a; // 'string'  
 typeof (typeof a); // 'string' (typeof返回的结果是string类型)
 typeof null // 'object'
```

 

### NaN
1 NaN 判断一个值是不是`不是数字`(NaN与任何值比较都不相等,包括它自己)

```
	console.log( isNaN(123) ); //false
    console.log( isNaN(NaN) ); //true
    console.log( isNaN('abc') ); //true

```

## 运算符
 ### 1 算术运算符 (只能操作数字)
   +-*/%
 ### 2 一元运算符 (只有一个操作数的运算符)
  ++/--  
  二元运算符:需要两个操作数的运算符
   操作数:参与运算的数  
   操作符:参与运算的符号
    num1+num2
 ### 表达式 
  操作符和操作数且有返回值
 ### 逻辑运算符
  && || ! 返回布尔值
 ### 关系运算符 
 < > >= <= == != === !==返回布尔值
 ### 赋值运算符
 = ++ += -= *= /= %=

 ### 运算符的优先级
  1. () 优先级最高
  2. 一元运算符 ++ -- !
  3. 算术运算符 先 * / % 后 + -
  4. 关系运算符 > >= < <=
  5. 相等运算符 == != === !==
  6. 逻辑运算符 先 && 后 ||
  7. 赋值运算符

 ## 流程控制
  流程控制分为:顺序结构,分支结构(如if),循环结构(如for)
  ### 分支结构
   1. if ... else if ... else
   2. 三元运算  条件表达式 ？ 条件成功时的表达式 : 条件不成立时的表达式 (相当于if...else)
   3. switch  
     ```
     switch(变量) {
        case 条件: {
            ...
            break
        }
        case ...
        default {
            ...
          break
        }
     }
     ```
  ### 循环结构
   1. while  先判断后执行
    ```
     while(循环条件){
        循环体
     }
    ```
   2. do...while 先执行后判断 
   ```
     do{
       循环体
     }while(循环条件)
   ```
   3. for循环  
   ```
    for(初始表达式;条件表达式;自增表达式){
        循环体
    }

    for (;;) { //for 循环默认条件始终是成立的
        // console.log('这是条件成立时的语句');
        alert('这是条件成立时的语句');
    }
    var i=1;
    for (;i<=100;) {
        console.log(i);
        i++;
    }
   ```
   #### break和continue的区别
    

    

 