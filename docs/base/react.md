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

  #### setState() 异步更新数据
   - 状态是可变的
   - 不能直接修改state中的值
   - setState()作用: 1 修改state值 2 更新UI (数据驱动视图)  
   `注意`:  
   1 使用setState()时,后面的setState不能依赖前面的setState的结果;虽然组件中调用多次setState但是render只会执行1次  
   2 父组件渲染时,也会重新渲染子组件。只会渲染当前组件及其所有的子组件  


    ```
    this.setState({
      count:this.state.count +1
    }[,()=>{
      // 状态更新后且页面重新渲染后立即执行
    }])

    推荐使用:  
    多次调用setState,state的值是上次setState结果的值
    this.setState((state,props)=>{
      // state:最新的state
      // props:最新的props
      return {
        count:this.state.count +1
      }
    }[,()=>{
      // 状态更新后且页面重新渲染后立即执行
      }])
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



## 组件的性能优化
 #### 减轻state
   只存储和组件渲染相关的数据（对于需要在多个方法中用到的数据，应该放在this中） 

 #### 避免不必要的的重新渲染
  组件更新机制：父组件更新也会引起它的子组件被更新（子组件没有任何变化也会重新渲染）  
  解决方式：使用钩子函数 shouldComponentUpdate(newxProps,nextState)   
    通过返回值决定组件是否重新渲染,true重新渲染,false不重新渲染  
  shouldComponentUpdate触发时机: 更新阶段的钩子函数,组件重新渲染执行shouldComponentUpdate->render
  
  ```
   class Hello extends React.Component{
     shouldComponentUpdate(){
       // todo ...
       return false/true // 不重新渲染/重新渲染
     }
     render(){}
   }
  ```


注意:
 值类型的state或者props可以直接进行setState赋值进行比较,但是引用类型不可以  
 state或者props中的属性值是引用类型,`应该创建新数据,不要直接修改原数据`  
 ```
  对象
  const newObj= {...state.obj,number:2}
  setState({obj:newObj})  

  数组
  不要用数组的push/unShift 等直接修改当前数组的方法;而是该用concat或slice等这些返回新数组的方法
  this.setState({
    list:[...this.state.list,{新数据}]
  })

 ```


## 虚拟DOM和Diff算法

React更新视图:只要state变化就重新渲染视图  
如何只更新组件中变化的dom(部分更新)?  
虚拟dom和diff算法

## react路由
 路由安装
 1 npm i react-router-dom  
 2 导入路由三个核心组件 Router/Route/Link  
  ```
  import {BrowerRouter as Router,Route,Link} from 'react-router-dom' 
  ``` 
 3 使用Router组件包裹整个应用  
  ```
   <Router>
     <div>
        ... todo
     </div>
   </Router>
  ```
  4 使用`Link组件`作为导航菜单(路由入口)  
  5 使用`Route组件`配置路由规则和要展示的组件(路由出口)  
  ```
  const First = () => return (<p>页面一</p>)

  <Router>
    <div>
      <Link to="/first">页面一</Link>
      <Route path="/first" component={First}></Route>
    </div>
  </Router>
  ```

#### 常用组件说明 pathName就是地址栏中的 例如:'/login'
- Router组件:包裹整个应用,一个React应用只需要使用一次
- 常用两种Router:HashRouter和BrowerRouter  
   HashRouter:使用URL的哈希值实现(localhost:8080/#/first)  
   BrowserRouter:使用H5的history API实现(localhost:8080/first) `推荐`

- Link组件:用于指定导航链接(会转化成a标签,to会转换成href属性,其中to属性可以通过(location.pathname)得到)  
- Route组件:指定路由展示组件相关信息  
  path属性:路由规则  
  component属性:展示的组件  
  Route组件写在哪,渲染出来的组件就展示在哪

#### 路由的执行过程
1 点击Link组件,修改了浏览器地址栏中的url  
2 React路由监听到地址栏url的变化  
3 React路由内部遍历所有Route组件,使用路由规则(path)与pathname进行匹配  
4 当路由规则(path)能够匹配地址栏中的pathname时,就展示该Route组件的内容  

#### 编程式导航(通过JS代码实现页面的跳转)
```
// history是React路由提供的,用于获取浏览器历史记录的相关信息
this.props.history.push('/home') 跳转到某个页面  
this.props.history.go(n) 前进或后退到某个页面,n表示前进或后退页面数量  
```

#### 默认路由(进入页面就会匹配的路由)
```
默认路由path为:/
<Route path="/" component={Home}></Route>
```
#### 路由匹配模式
默认情况下,React路由是模糊匹配模式(只要pathname以path开头就会匹配成功)  
精确匹配:  
给组件添加`exact`属性,只有path和pathname完全匹配时才会展示该路由
```
 <Route exact path="/" component=... />
```

## React Hook
 ### Hook使用注意事项
 1 Hook 不能在class组件中使用  
 2 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用  
 3 只能在React的函数中调用Hook。不要在JavaScript函数中调用  

 ### 基础Hook
 - useState
  ```
  useState传入的是initialState是当前state初始值,后续的重新渲染中,useState返回的第一个值将始终是更新后最新的state
  const [state,setState] = useState(0);

  setState更新state数据 
  写法1 setState(state+1)
  写法2 setState(() =>{return state+1})

  如果定义的是引用类型,使用函数式更新和扩展运算符进行更新
  const [state,setState] = useState({})
  setState(()=>{
    return {
      ...state
    }
  })

  初始state理解
  1 惰性state
   initialState参数只会在组件的初始渲染中起作用,后续渲染会被忽略 
  2 复杂初始state的定义
   初始state需要通过复杂计算获得 可以 useState(()=>{}) 传入一个函数,在函数中计算并返回初始的state

  ```

  - useContext
   接受一个context对象并返回context的当前值,使用useContext可以实现跨组件之间的通信 

   ```
   export const themes = {
    light:{
      background:'#fff'
    },
    dark:{
      background:'#000'
    }
   }
   创建上下文
   export const ThemeContext = React.createContext(themes.dark)

   父组件
   function F(){
    return(
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    )
   }

   中间组件
   function Toolbar(){
    return (
      <ThemeButton/>
    )
   }

   // 子组件
   function ThemeButton() {
    const theme = useContext(ThemeContext);
    return (
      <div>{theme}<div>
    )
   }
   ```

- useEffect 函数组件中可以写多个useEffect
React在完成对DOM的更新后会执行,默认情况下,React会在每次渲染后调用副作用函数,包括第一次渲染的时候  
```
 useEffect有两个参数,第一个参数是副作用的处理函数,第二个参数是与该副作用关联的状态或shuxing依赖的数组
  // 添加第二个参数为空数组,只在初始化的时候执行
  // 第二个参数有相关属性,在初始化时候执行和该属性变化的时候执行
 useEffect(()=>{
  setState(1)
 },[])

 useEffect中的return 
 useEffect(()=>{
  // 注册监听
  return ()=>{
    // 清除监听逻辑
  }
 })
```

useEffect实现生命周期
```

实现 componentDidMount和 componentWillUnmount
function Demo(){
  useEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log(unmount)
    }
  },[])
}

实现 componentDidUpdate

function Demo (props) {
  const [useId,detailId] = props
  useEffect(()=>{
    // userId变化后的处理逻辑
  },[userId])
  useEffect(()=>{
    // detailId变化后的处理逻辑
  },[detailId])
}

```

- useReducer
useReducer接收3个参数 
第一个参数:处理状态更新的reducer  
第二个参数:状态初始值  
第三个参数:状态初始值函数  

const [state, dispatch] = useReducer(reducer,initialArg, init)
```
 // reducer函数 
  state是初始数据
 function reducer(state,action){
   switch (action.type) {
     case 'increment':
     return { count:state+1}
   }
 }
 const [state,dispatch] = useReducer(
  reducer,
  {count:initialCount},
  // 惰性初始化,将第二个参数作为第三个函数入参传入
  function init(initialCount) {
    reutrn {count:initialCount}
  }
 )
 // state是reducer函数返回的数据 
 // dispatch是触发reducer函数的方法
```

对于复杂场景的状态关联进行处理

- useCallback  
第一个参数: 处理函数  
第二个参数:数组,用于制定被记忆函数更新所依赖的值

```
const memoizedCallback = useCallback(
  ()=>{
    //函数 todo(a,b),只有第二个参数属性a或者b发生改变,此函数才会执行 这个是一个函数
  },
  [a,b]
)
```
为什么用useCallback?  
在函数式组件中,定义在组件内部函数会随着状态值的更新而重新渲染,函数中定义的函数会被频繁定义,在父子组件的通信中这样是非常消耗性能的。使用useCallback集合memo可以有效的减少子组件更新频率,提高效率

```
父组件中嵌套子组件,父组件更新不管子组件是否修改,都会更新子组件,所以需要
const Child = React.memo(function Child(){
  return (
    <div>...todo...</div>
  )
})
```

- useMemo  (相当于vue中的computed)  
第一个参数:用于处理耗时计算并返回需要记录的值 (不仅可以返回数值也可以返回dom)   
第二个参数:数组,用于指定被记忆函数更新所依赖的值  
```
const memoizedValue = useMemo(
  ()=>computedValue(a,b),
  [a,b]
)
```
useMemo和useCallback的区别?  
1 useMemo传入函数内部需要有返回值  
2 useMemo只能声明在函数式组件内部
