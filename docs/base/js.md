# js
script标签中,可以写 type="text/JavaScript"也可以写 language="JavaScript".因为目前使用的html的标准是h5标准,所有不用额外备注  
js是一门弱类型语言  
js是一门脚本语言,直接执行  
js是一门解释型语言,遇到一行代码就解析一行  
js是一门动态类型的语言:执行这行代码的时候才能确定这个变量到底是什么类型  
js最初的目的:解决用户和浏览器之间的交互问题  


内存空间:  
 栈(同电梯原理一样,先进后出原则)  
 值类型(number string boolean)在栈中存储(简单数据类型是值传递)  
 对象(object)在堆中存储,地址(引用)在栈中存储(引用数据类型是引用(地址)传递)   


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
   2. do...while 先执行后判断,如果条件成立则继续循环
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
   三个循环的区别?  
   1 for循环知道循环次数,while和do...while不知道循环次数  
   2 for循环执行末尾循环体后将再次进行条件判断，若条件还成立，则继续重复上述循环，当条件不成立时则跳出当下for循环。
   while循环当满足条件时进入循环，进入循环后，当条件不满足时，执行完循环体内全部语句后再跳出（而不是立即跳出循环）  
   3 使用目的不同:for循环是为了限制循环体的执行次数;while循环是为了反复执行语句
   #### break和continue的区别
   break:直接跳出所在的当前循环,break后面的代码不再执行  
   continue:直接进入下一次循环,continue后面的代码不再执行 

   ## 数组 

   ### 数组定义
   #### 通过new来创建数组
    1 new Array() // 空数组  
    2 new Array(10) // 数组中有10个空的数据
    3 new Array(1,2,3) // 数组中有3个数据且有值 
  #### 字面量创建数组
    [1,2,3]
  ### 数组中案例
  ```
    1 冒泡排序
    var arr = [10, 2, 3, 100, 30, 50];
    for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
      }
    }
  ```
  ## 函数
  一个函数最好就实现一个功能
   ```
   1 命名函数(函数声明):  
    function fun(){
       //代码段
    }
    fun()

   2 匿名函数:自调用函数 一次性的  
     (function(){
       //代码段
     })()

   3 函数表达式
    var fun = function(){
      // 代码段
    }
    fun()
  ```
  函数声明和函数表达式不同处: `函数表达式的变量名会提升,函数声明是整个函数提升`
### 函数返回值
  函数中有return(并不是return后面啥也没有),则该函数有返回值,返回值就是一个结果.否则这个函数就没有返回值  
  注意:函数中return后面代码不会在执行

### 参数arguments
 arguments可以获取函数在调用时传入的参数个数及值,arguments是一个传入参数数组
 ```
   function add() {
      //console.log(arguments.length);//5
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    }

    //调用
    var result = add(1, 2, 3, 4, 5);
    console.log(result);
 ```

 ### 作用域 (变量的使用范围 )
  `局部作用域`:局部变量的使用范围  
  `全局作用域`:全局变量的使用范围   
  `局部变量`:函数中定义的变量叫局部变量,只能在函数中使用,外面不能使用  
  `全局变量`:只要不是在函数中定义的变量,就是全局变量,在script标签中直接定义的变量  
  全局变量在页面的任何位置都可以使用,局部变量只能在函数中使用  
  `块级作用域`:一块区域中的变量的使用范围 ,一对大括号就是一个区域.js中没有块级作用域,函数除外

  ### 预解析(在执行或者解释这行代码之前发生的阶段)
   - 变量的声明提升
   - 函数的声明提升,函数表达式不会提升
    变量和函数的声明会提升到当前所在的作用域最上面  
    函数中的变量就提升到函数中的最上面

 ## 对象
  面向过程: 凡是亲力亲为  
  面向对象: 从一个执行者变成指挥者,注重结果  
  对象:具体特指的某个事物,具有属性和方法  
  面向对象编程需要注意:  
   操作DOM原则:尽可能在内存中将dom的所有内容生成好,一次性加到页面上,不要频繁的操作dom,容易造成页面的渲染重复执行,影响性能
  ### 创建对象
  1 new Object
  ```
  // 创建对象
   var obj = new Object();
  // 添加属性和方法
   obj.name = 'LC';
   obj.hobby = function(){
    console.log(obj.name+'like eat')
   }
   // 方法调用
   obj.hobby();

   工厂模式创建对象,函数封装
   function createObj(){
    // 创建对象
    var obj = new Object();
    // 添加属性和方法
    obj.name = 'LC';
    obj.hobby = function(){
      console.log(obj.name+'like eat')
    }
    return obj
   }

  ```
  2 自定义构造函数创建对象
  ```
   1 先定义一个构造函数 构造函数名的首字母大写  
    function Obj(){
      // this指的是创建的对象
        this.name = 'LC';
        this.hobby = function(){
        console.log(this.name+'like eat')
      }
    }
   2 创建对象
    var obj = new Obj();
   调用:
      console.log(obj.name,obj.hobby())
  ```
 3 字面量创建对象
  ```
  var obj = {};
  obj.name = 'LC';
  obj.hobby = function(){
    console.log(obj.name+'like eat')
  }
  或者
  var obj = {
    name:'LC',
    hobby:function(){
      console.log(this.name+'like eat')
    }
  }
  ```
new执行了4件事
1 new会在内存中创建一个新的空对象
2 new会让this指向新的对象
3 执行构造函数(给对象添加新的属性和方法)
4 new会返回这个新对象
## this问题
 1 对象中的this,指的就是当前对象  
 2 普通函数中的this,指的是window对象
## 判断对象的类型
#### instanceof 
  var obj = new Object();  
  console.log(obj instanceof Object) 
## 对象的遍历 
 1 for...in 
   ```
    for(var key in obj){

    }
   ```

## 内置对象(todo 后期平移过来方法总结)
 ### Math
 Math.max() Math.min() Math.floor() Math.ceil() Math.abs() Math.random()...
 ### Date
 Date.now()....
 ### Array
 Array.isArray(obj)
 ### String
  基本包装类型:本事是基本类型,偶尔当成对象方式来使用.例如:string类型  
  var str = 'hello';  
  console.log(str.length);  
  普通变量是不能直接调用属性和方法的,对象可以.string本身是基本类型,但是调用了属性和方法此时这个变量就不是普通变量而是对象了  


 ### Object




    

    

 