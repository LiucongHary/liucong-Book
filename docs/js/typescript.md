参考文档：http://ts.xcatliu.com/basics/type-of-object-interfaces.html

​					https://jspang.com/detailed?id=38



简单的typescript调试

```
npm install -g ts-node 安装ts-node

1 vscode中安装插件： Code Runner
2 设置  Run Code config中
	勾选	Run In Terminal 
			Whether to run code in  Integrated Terminal
3 运行 ts-node 文件名

```



typescript安装

```
1 全局安装typescript npm install typescript -g  
  tsc -v  查看版本号
2 初始化项目
	1> npm init -y
	2> tsc -init 创建tsconfig.json文件
	3> @type/node 解决模块的声明文件问题
3 typescript转javascript 
	1 创建task.json ctrl+shift+p打开命令调色板 输入 configure task 
		选择 tsconfg.json
	2 通过 ctrl+shift+b 运行构建javascript
	
```

使用vscode编辑器如何实时的 typescript转javascript

方法一 ： ts 'ts文件名'

方法二：

1 把tsconfig.json中 
	 "outDir":"./js", // 输出的js文件	

![image-20200603152047718](/Users/liucong/Library/Application Support/typora-user-images/image-20200603152047718.png)

2  终端监视任务

​	终端 -- 运行任务 -- 监视

![image-20200603152246105](/Users/liucong/Library/Application Support/typora-user-images/image-20200603152246105.png)

![image-20200603152309494](/Users/liucong/Library/Application Support/typora-user-images/image-20200603152309494.png)

设置变量：

```
基本类型设置
布尔类型 let isDone: boolean = false;
数字    let num: number = 888;
字符串	 let str: string = 'hhh'
空值(void) 表示没有任何返回值
	示例： 1 function myname():viod {
							console.log('666') // 没有return返回值
						}
				2 声明void类型的变量是没有意义的，它只能赋值为 undefined和null
					let myname:void = undefined;
undefined类型： let u: undefined = undefined;
null类型：      let n: null = null;


```

任意值

```

任意值(any)
	   let str:any = 'aa'
     str = 666
     str.name = 'hhh' // 也可以当作对象 不过会报错呦
  ⚠️ 如果在声明的时候未指定类型，会被默认识别为任意值类型
```

推论类型

```
let str = 'aa'
str = 77
编译的时候就报错，因为会把str推断成string类型

let str
str = 'aa'
str = 77
会把str推断成any类型
```

联合属性

```
let str: string|number; // 允许str的值是string类型或者number类型
str = 'aa'
str = 77
当属性被复制之后会自动推论其类型

```



引用类型

```
引用类型设置
数组	let list: number[] = [1,2,3]  <==> let list: Array<number> = [1,2,3]
		 构造函数赋值：
		 let arr1:number[] = new Array() <==> let arr1:Array<number> = new Array(1,2,3)
		数组中的any
		 let arr1:any[] = ['1',4,{name:'b'}]
元组：特殊的数组
		 let arr: [string, number] = ['hhh',123]
字符串： let a:String = new String('aa')
日期：   let d:Date = new Date()

正则的创建
		let reg:RegExp = new RegExp('aa')
		let reg:RegExp = /aa/
```

修饰符

```
public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
readonly:修饰符将属性设置为只读
  ⚠️只读的约束存在与第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
 interface Person {
  name: string,
  readonly age: number,
  }
  let person: Person = {
    name: 'hh',
    age:22,
  }
  person.age = 4; // 报错
```

接口定义 interface

​		定义的变量不可比接口多属性也不可比接口少属性，

​		赋值的时候，变量的形状必须和接口的形状保持一致

```
1 interface Husband {
		sex:string
		interest:string
	}
	let myhusband:Husband = {sex:'nan',interest:'play'}
	定义了一个接口Husband，定义了一个变量myhusband，myhusband的类型是Husband
2 可选参数接口
	interface Husband {
		sex:string
		interest:string
		say?:Boolean
	}
	let myhusband:Husband = {sex:'nan',interest:'play',say:false}
		// say 参数可写可不写
3 任意属性 一个接口中只能定义一个任意属性
		一旦定义了任意属性，那么确定属性和可选属性的类型都是它的类型的子类型
  interface Person{
  	name:string;
  	age?:number;
  	[proName:string]:string;
  }
  let tom: Person={
  	name:'Tom',
  	age:22,
  	gender:'male'
  }
    报错 因为age是number类型
   需要改为：
   interface Person{
  	name:string;
  	age?:number;
  	[proName:string]:string|number;
  }
 
4 规范函数类型接口
	interface searchMan{
		(source:string,substring:string):boolean
	}
	let mySearch:searchMan
	mySearch = function(source:string,substring:string):boolean{
		let flag:souce.search(substring)
		return (flag!= -1)
	}
	console.log(mySearch('高、富、帅、德','胖')) // false
```

命名空间的使用

```
namespace shuaiGe{
	export class Dehua{
		public name:string = '刘德华'
		talk(){
			console.log('我是帅哥刘德华')
		}
	}
}
namespace bajie{
	export class Dehua{
	  public name:string = '马德华'
	  talk(){
	    console.log('我是二师兄马德华')
	  }
	}
}

let dehua1:shuaiGe.Dehua = new shuaiGe.Dehua()
let dehua2:bajie.Dehua = new bajie.Dehua()
dehua1.talk()
```



