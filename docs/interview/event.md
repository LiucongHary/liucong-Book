# 事件机制

### 事件触发有三个阶段
 - 捕获阶段
  事件从根节点流向目标节点,途中流经各个DOM节点,在各个节点上触发捕获事件,直到达到目标节点
 - 目标阶段
  事件到达目标节点时,就到了目标阶段,事件在目标节点上被触发
 - 冒泡阶段
  事件在目标节点上触发后,不会终止,一层层向上冒,回溯到根节点

  事件的执行顺序:事件触发都是先捕获在冒泡

  ```
   <div style="height: 300px;width:300px;background-color:green">
        <div style="height: 200px;width:200px;background-color:yellow">
            <div style="height: 100px;width:100px;background-color:red">
            </div>
        </div>
    </div>

    let divs = document.getElementsByTagName('div');
    [...divs].forEach((
        ele,index,array)=>{
        console.log(ele,index,array,this)
        
        ele.addEventListener('click',()=>{
            console.log('冒泡'+index)
        })
        
        ele.addEventListener('click',()=>{
            console.log('捕获'+index)
        },true)
    })
  ```
  打印结果:
  捕获0 捕获1 捕获2 冒泡2 冒泡1 冒泡0


  ### 注册事件
  - addEventListener  
  el.addEventListener(type,listener[,useCapture])  
  type:事件类型;  
  linstener:事件处理函数,事件发生,就会触发该函数运行  
  useCapture:布尔值 默认false(冒泡) true(捕获)  

  第三个参数也可是对象  
  {  
      capture: 布尔值 //作用和useCapture一样  
      once:布尔值 // 为true表示该调用只会调用一次,调用后会移除监听  
      passive: 布尔值 // 表示永远不会调用 preventDefault  
  }

  `stopPropagation `来阻止事件的进一步传播,通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件  
  `stopImmediatePropagation` 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。
  
  ### 事件代理 (冒泡原理)  
   如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上

   ```
    <ul id="ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    </ul>
    <script>
        let ul = document.querySelector('#ul')
        ul.addEventListener('click', (event) => {
            console.log(event.target);
        })
    </script>
   ```

事件代理的方式相对于直接给目标注册事件来说，有以下优点
- 节省内存
- 不需要给子节点注销事件