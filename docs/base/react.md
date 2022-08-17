# react学习

## 基本创建
1 创建元素
 ```
 const root = React.createElement('h1',null,'hello');  
 or   
 注意   
 1 jsx创建元素最好是小括号包裹起来,避免格式化添加分号报错  
 2 jsx中使用js表达式,把js代码放在 {} 中
 const root = (
    <h1>hello</h1>
    )  
 ```
2 把元素挂载到页面上   
ReactDOM.render(root,document.getElementById('root'));

## 组件

#### 函数创建组件
- 函数组件:使用JS的函数(或箭头函数)创建组件
- 函数名称必须以`大写字母开头`
- 函数组件`必须有返回值`,表示该组件的结构;返回null,表示不渲染任何内容

渲染函数组件:以函数名称作为组件标签名

```
 function Fun(){
   return(
      <div>...</div>
   )
 }

 const Fun = () => {
   return (
       <div>...</div>
   )
 }
```

#### 使用类创建组件
- 类名称必须以`大写字母开头`
- 类组件应该继承`React.Component`父类,从而可以使用父类中提供的方法和属性
- 类组件必须提供`render()`方法,且render()方法`必须有返回值`,表示该组件的结构
```
class Fun extends React.Component{
  render(){
    return (
      <div>...</div>
    )
  }
}
```
 

## 事件绑定
  语法: on+事件名称={事件处理程序},比如 onClick={()=>{}}   
     - react中的事件使用`驼峰命名法`   
     - 函数组件中是没有this的 
 #### 事件对象
  - 可以通过`事件处理程序的参数`获取到事件对象
  - React中的事件对象叫做`合成事件(对象)`,合成事件(对象)兼容所有浏览器  
  ```
   function fun(e){
      e.preventDefault()
   }
  ```
## 有状态组件和无状态组件
 - 函数组件叫做`无状态组件`;类组件叫做`有状态组件`
 - 状态即`数据`
 - 函数组件没有自己的状态,只负责数据的展示;类组件有自己的状态,负责更新UI,让页面动起来

## state和setState的使用

  #### state基本使用
   - 状态即数据
   - 状态是私有的,只能在组件内部使用
   - 通过this.state来获取
  ```
    constructor() {
      super()
      this.state = {
        count:0
      }
    }
   或者 ----------------------
    state = {
      count:0

    }
  ```

  #### setState() 修改数据
   - 状态是可变的
   - 不能直接修改state中的值
   - setState()作用: 1 修改state值 2 更新UI (数据驱动视图)

    ```
    this.setState({
      count:this.state.count +1
    })
    ```

## 事件this的指向
#### 1 使用class的实例方法
  ```
   class Fun extends React.component{
     fun = () => {
       // todo...
     }
   }
  ```

#### 2 箭头函数
```
 <button onClick={()=>this.fun()}></button>
```

#### 3 bind

```
 constructor(){
  super()
  this.fun = this.fun.bind(this)
 }
```

## 表单处理

#### 受控组件
  文本框的值和state中数据绑定起来
  ```
   state={
     iptValue:1
   }
   ...
   <input value={this.state.iptValue}>
  ```

#### 非受控组件
 1 调用React.createRef()创建一个ref对象
 ```
  constructor(){
    super()
    this.txtRef = React.createRef()
  }
 ```
 2 将创建好的ref对象添加到文本框中
 ```
  <input type="text" ref={this.txtRef}/>
  txtRef代表的是input元素
 ```
 3 通过ref对象获取到文本框的值
 ```
  this.txtRef.current.value
 ```

 ## 组件通讯props
  #### props
  - 传递数据组件:给组件标签添加属性
  - 接收数据: 函数组件通用`参数props`,类组件通过`this.props`
  ```
   传递数据组件
   属性传递的数据默认是string类型,想要其他类型需要加`{}`
    <Hello name="lc">

    接收数据
    function Hello(props){
      props是一个对象
      console.log(props,props.name)
      return ...todo
    }
  ```
  1 可以传递任意类型的数据    
  2 props是一个只能读对象,只能读取属性值,不能修改  
  3 类组件写了构造函数,应该将props传递给super(),否则无法在`构造函数中`读取props  
  ```
  class Hello extends React.component{
    constructor(props){
      super(props)
    }
  }
  ```
 #### props的children属性
  - children属性:表示组件标签的子节点。当组件标签有子节点时,props就会有该属性
  - children属性与普通props一样,值可以是任意值(文本、react元素、组件、函数等)
 #### props校验
  使用步骤：
   1 安装包 prop-types  npm i prop-types -D  
   2 导入  import PropTypes from 'prop-types'  
   3 使用`组件名.propTypes = {}` 来给组件的props添加校验规则  
  ```
   App.propTypes = {
    color:PropTypes.array // 哪个组件使用的属性值需要检验就在哪个组件中添加props校验
   }
  ```
  约束规则
  - 常见类型:array、bool、func、number、object、string
  - React元素类型: element
  - 必填项: isRequired
  - 特定结构: shape({})
#### props默认值 
  给props设置默认值,在未传入props时生效(比如:分页组件中每页显示的条数)  
  ```
   App.defaultProps = {
    pageSize:10
   }
  ```

  ## 组件通讯的三种方式 
  #### 父组件传递数据给子组件 通过props
  1 父组件提供要传递的state数据  
  2 给子组件标签添加属性,值为state中的数据  
  3 子组件中通过props接收父组件中传递的数据  
  #### 子组件传递数据给父组件
   利用回调函数,父组件提供回调,子组件调用,将传递的数据作为回调函数的参数
  1 父组件中提供一个回调函数(用于接收数据)   
  2 该函数作为属性值,传递给子组件  
  3 子组件通过props调用回调函数  
  ```
   Class Parent extends React.component{
     // 接收子组件传过来的数据的回调函数
     getChildMsg = (msg) => {
      console.log(msg为子组件传递的数据)
     }
     render(){
      return (
        <div>
            // 回调函数作为参数传递到子组件中,此回调函数在子组件中调用
           <Child getMsg={this.getChildMsg}>
        <div/>
      )
     }
   }

   // 子组件
      Class Parent extends React.component{
      
      handleClick = () => {
        this.props.getMsg('传递的数据')
      }
      render(){
        return (
          <div>
              // 点击按钮调用父组件中的回调函数
            <button onClick={this.handleClick}></button>
          <div/>
        )
      }
   }

  ```
 #### 兄弟组件
  - 将共享状态提升到最近的公共组件中,由`公共父组件`管理这个状态(状态提升思想)  
  - 公共父组件职责:1 提供共享状态 2 提供操作共享状态的方法  
  - 要通讯的子组件只需通过props接收状态或操作状态的方法  


## Context 跨组件传递数据 
 使用  
 1 调用React.createContext()创建Provider(提供数据)和Consumer(使用数据)两个组件
  ```
   const {Provider,Consumer} = React.createContext()
  ```
 2 使用Provider组件作为父节点
 ```
  <Provider>
    <div>
      <Child1>
    </div>
  </Provider>
 ```
 3 设置需要传递的value值,通过value属性提供数据
 ```
  <Provider value="pink"></Provider>
 ```
 4 在子组件中调用Consumer组件接收数据
 ```
  <Consumer>
    {data => <span>data参数为接收的数据{data}</span>}
  </Consumer>
 ```
## 组件的生命周期
只有类组件才有生命周期
#### 声明周期的三个阶段
1 创建时(挂载阶段):组件创建时(页面加载时)  
  constructor()->render()->componentDidMount  
  - constructor 创建组件时,最先执行  
    1初始化state 2为事件处理程序绑定this  
  - render 每次组件渲染都会触发  
    渲染UI(`注意:不能调用setState`)  
  - componentDidMount 组件挂载(完成DOM渲染后)  
    1 发送网络请求 2 DOM操作
  
    
2 更新时  
  触发更新的情况:    
  setState、组件接收到新的属性newProps、this.forceUpdate()方法,三种任意一种都会导致组件的重新渲染  
  shouldComponentUpdate->render->componentDidUpdate  
3 卸载时   
  触发时机:组件从页面消失    
  componentWillUnmount   
  1 执行清理工作:例如清理定时器  

## render-props和高阶组件 抽离共用组件(实现状态逻辑复用)
#### render-props
 使用步骤:  
 1 创建公共组件,在组件中提供复用的状态逻辑代码(1状态 2操作状态的方法)  在render方法暴露出去共用的状态数据  
 2 将要复用的状态作为props.render(state)方法的参数,暴露到组件外部  
 3 使用props.render()的返回值作为要渲染的内容 
 大白话: 组件中使用公共组件比如Common组件 
   ```
   Common组件中
   render(){
    return this.props.render(state)
   }
   ----------------
    render作为属性方法的返回值就是需要渲染的ui,render中的参数state就是共用的数据
   <Common render={(state)=>{return (....todo)}}/>
   ``` 

   ##### children代替render属性
   - 注意:并不是该模式叫render props就必须使用名为render的prop,实际上可以使用任意名称的prop
   - 把prop是一个函数并且告诉组件要渲染什么内容的技术叫做:render prop模式
   - 推荐:使用`children`代替render属性

   ```
    Common组件中
    render(){
      return this.props.children(state)
    }
    ----------------
    <Common>
      {state=>{
        return (
          ...todo
        )
      }

      }
    </Common>

   ```

   #### 高阶组件 
  - 是一个函数,接收要包装的组件,返回增强后的组件
  - 高阶组件内部创建一个类组件,在这个类组件中提供复用的状态逻辑代码,通过prop将复用的状态传递给被包装组件WrapedComponent

  ##### 使用步骤
  1 创建一个函数,名称约定以`with开头`  
  2 指定函数参数,参数应该以大写字母开头(作为要渲染的组件)  
  3 在函数内部创建一个类组件,`提供复用的状态逻辑代码`,并返回该类组件  
  4 在该组件中,渲染参数组件,同时将状态通过prop传递给参数组件  
  5 调用该高阶组件,传入要增强的组件,通过返回值拿到增强后的组件,并将其渲染到页面中  

  ```
   function widthCommon(WrappedComponent){
     // 创建类组件
     class Common extends React.Component{
      ... todo公共状态和状态处理

        // 设置displayName
       Common.displayName = `WidthCommon${getDisplayName(WrappedComponent)}`
        render(){
          // 渲染参数组件,并通过props传递组件参数
          return <WrappedComponent {...this.state}></WrappedComponent>
        }
     }
     // 返回类组件
     return Common
   }


  // 设置dispalyName
  function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

   // 传入组件
   const Position = props => {
    return (
      <p> {props.属性} <p>
    )
   }

   // 调用组件
   const Common = widthCommon(Position)
  ```

  ##### 问题: 使用高阶组件会得到相同名称的组件,所以需要设置displayName
  设置方式
  ```
  Common.displayName = `widthCommon${getDisplayName(WrappedComponent)}`

  function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  ```













