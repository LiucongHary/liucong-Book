# html+css 

## html

### 标签
 - div块标签 span行内标签  无意义标签
 - h1-h6 标题标签
 - p 段落标签
 - hr<单标签> 下划线
 - br<单标签> 换行
 - b/strong 加粗
 - i/em 倾斜
 - s/del 删除
 - u/ins 特殊说明
 - img 图片 (标签属性 src:图片路径 title:鼠标放到图片上显示的文字 alt:图片显示不出来替换的文字 border:图片边框 height/width)
 - a 连接标签 (href:跳转地址 target:_blank/self是否打开新页面)
   ##### 锚点连接 
   href...id  
   ex:
   ```
    <a herf="#one"> (同一个页面直接#one 不同页面:页面地址+#one)
    <p id="one">
   ```
 - 列表
 ul>li 无序列表 默认前面有个小点点
 ol>li 有序列表 1,2,3
 dl>dt>dd

 - base (target:"_blank" 默认此页面中把所有的连接 都默认添加 target="_blank")

 写于标签内部的标签属性没有单位
 color width src 

 ### 表格 table
```
 <table>
 // 标签属性 width/height border align 
    cellspacing 单元格和单元格之间的距离
    cellpadding 单元格内容距离单元格边框的距离
    <caption></caption> // 表格标题
    <tr> 
     <th></th>  // 标头
      ....
     <th></th>
    </tr>
    <tr>
     // colspan合并行  rowspan合并列
     <td colspan="2"></td> 
     ...
     <td rowspan="3"></td>
    </tr>
 </table>
```

#### input
- input
    标签属性:  
    type:text/password/radio/checkbox/button不同按钮/submit提交按钮/reset重置/image图像形式的提交按钮/file文件域
    value: 默认文案    
    maxlength:文案最大长度    
    name:自定义控件名称  
    checked:默认选项  
    disabled:禁止选项    
    email:邮件  
    tel:手机号  
    url:网址  
    number:数字  
    range:拖动滑块  
    time:时间 
    date:日期  
    datetime:时间 
    month:月份  
    week:星期  

  ###### datalist 标签是input标签中描述可能只的一个下拉选项
  ###### fieldset 标签会在相关表单元素周围绘制边框

   ##### radio
   同一组必须命名相同名字的name才可以多选一
   ```
     女<input type="radio" name="sex">
	 男 <input type="radio"  name="sex"/>  
   ```
   ##### checkbox
    不需要写name值没有意义

   ##### input和label标签的使用  
    与for元素绑定,被绑定元素会获得输入焦点  
    ``` 
      // for...id
     <label for="name"></label>
     <input type="text" id="name">
    ```

    #### select 下拉菜单
    ```
     <select name="">
       <option value="" selected="selected"></option>
       ...
       <option></option>
     </select>
    ```
    #### form 表单提交
    ```
    <form action="" method=""> 
      // 表单有两个属性 action:提交的后台地址 method:提交方式post/get
      其中提交的参数
       key:其中的name
       value:输入的文案/或者选择的value值
    </from>
    ```

    #### 块级元素: 独自占用一行,可以设置宽高  
    注意:h和p,dt标签中尽量不要放置块元素,因为只有文字才能组成段落
    h1~h6,p,div,ul,ol,li,dl,dt   
    #### 行内元素: 不可设置宽高,只能设置水平的padding和margin  
    注意:行内元素只能放行内元素,a标签除外(a连接中不要在放a)
    span,a,strong,b,em,i
    #### 行内块  
     img,input,td


    ## css
    ### css书写方式
    - 行内
    - 内部 style
    - 外部引入
      ```
       <link rel="stylesheet" type="text/css" href="引入路径"/>
       //rel 属性规定当前文档与被链接文档之间的关系
       //type 指定浏览器的解析方式
      ```
    ### 选择器
    1.标签选择器 div  
    2.id选择器 #id  
    3.类选择器 伪类选择器 .class 
    4.通配符选择器 *  

    #### 复合选择器
    ##### 1 后代选择器 
      div p (p是div的孩子 中间用空格隔开)  
    ##### 2 子代选择器
      ul>li (li是ul的亲儿子)   
    ##### 3 交集选择器 
      div.red (即是div标签且类名是red)  
    ##### 4 并集选择器 
      div,p (用','隔开,表示集体声明相同的样式)  
    ##### 5 伪类选择器  
      :link 未访问  
      :visited 已访问  
      :hover 鼠标移动  
      :active 鼠标按下时  
      ```
       a:link {
           color:red
       }
      ```
    ##### 6 结构伪类选择器
      li:first-child 第一个li标签  
      li:last-child 最一个li标签  
      li:nth-child(n) 第n个li标签  
    ##### 7 属性选择器
      div[class]{选出所有 带有class属性的}   
      div[class=demo]{选出class = demo的}   
      div[class^=test]{选出test开头的标签} 
      div[class$=test] {选出test结尾的标签} 
    ##### 8 伪元素选择器
    	p::first-letter {选择第一个字}  
	    p::first-line {第一行}  
    	p::selection {选择文字时候的状态}  

	  

    #### line-height 行高=盒子高度 可以设置单行文本垂直居中
     line-height = height 垂直居中  
     line-heigh  > height 内容偏下  
     line-heigh  < height 内容偏上 

   #### css的特性
   1 层叠性(后面覆盖前面,就近原则)  
   2 继承性(子承父业)
   #### css权重
   !import(无穷), 行内(1,0,0,0), id(0,1,0,0), 类/伪类(0,0,1,0), 标签(0,0,0,1), */继承(0,0,0,0)  
    - 权重相同,就近原则
    - 权重可叠加
   #### background背景图片 多个背景用','号隔开
   background-color // 支持rgba color alpha
   background-image  // url(图片路径)
   background-repeat // 是否平铺
   background-attachment // scroll|fixed 背景是滚动还是固定定位
   background-position:x y //1 方位名词 2 px值
   background-size:// 1px 2cover等比例缩放,完全铺满容器,多余部分被裁剪 3contain等比例缩放,整张图片完全显示在容器内

   #### 盒模型
   border-collapse // 用于表格属性, 表示表格的两边框合并为一条 
    - separate :默认值。边框会被分开
    - collapse:边框会合并为一个单一的边框 
    - inherit:规定应该从父元素继承border-collapse属性的值。

  ##### 什么是盒模型:  
  规定网页元素如何显示以及元素间的相互关系(包括内容区content,填充区padding,边框区border,外边界margin)

  注意:  
  1 margin可以写负值,但是padding不可以  
  2 padding会自动撑开带有width/height的盒子  
  3 border也会撑开盒子

  box-sizing:border-box(怪异盒模型)/content-box(标准盒模型)  
  标准盒模型:content+padding+border+margin  
  怪异盒模型:content(content+padding+border)+margin

  ##### margin在盒模型的坑
  1 相邻的块圆度外边距合并(取较大值)
  2 嵌套盒子(嵌套关系是垂直外边距),子盒子有margin-top值,值父盒子没有设置padding-top或者border属性,会出现外边距塌陷。解决方案(给父盒子overflow:hidden或者父盒子设置padding-top/border-top)
  #### 浮动 float(left/right)
  1 元素添加浮动后,会转换成行内块级元素
  2 脱离标准流,不占位置
  3 浮动会对下面的盒子有影响,所以浮动的盒子需要在外面包裹一个父盒子

  ##### 为什么要清楚浮动?  
   解决父级元素因为浮动高度为0的问题  
  ##### 清楚浮动的方法
   1 额外标签法  
    在最后一个浮动标签后新添加一个标签清楚浮动(设置标签属性 .clear {clear:both},如果清除了浮动,父亲去自动检测孩子的高度,以最高的为准)  
   2 overflow  
    给浮动的父元素添加overflow:hidden  
   3 after伪元素
     给浮动的父元素添加
     ```
     	.clearfix:after {  /*正常浏览器 清除浮动*/
        content:"";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .clearfix {
        *zoom: 1;  /*zoom 1 就是ie6 清除浮动方式  *  ie7一下的版本所识别*/
      }
     ```
  4 双伪元素
    给浮动的父元素添加
    ```
      .clearfix:before, .clearfix:after {
        content: "";
        display: table;
      }
      .clearfix:after {
        clear: both;
      }

      .clearfix {
        *zoom: 1;
      }
    ```
  #### 定位 position
   1 static 静态定位 用途:取消定位  
   2 relative 相对定位   
     以自己的左上角为基准定位 (占位)  
   3 absolute 绝对定位   
      以距离自己最近的有定位的父元素为基准,没有定位的父元素,以浏览器为基准(不占位)  
   4 fixed 固定定位  
      以浏览器为基准定位(不占位)

  #### 定位于浮动的区别
    1 绝对定位是完全意义的脱标,不占位置
    2 浮动是不完全脱标(不会影响下面盒子文字类的信息),也不占位
  ## 需要注意
   #### 1 margin:0 auto 的使用  
     1>在块级元素且有宽的前提下  
   #### 2 显示和隐藏  
      display与visiblity的区别  
      display:none/block 隐藏后不占位  
      visiblity:visible/hidden 隐藏后占位  
   #### h5新标签
   header头部 nav导航栏 footer底部 article定义文章 section定义区域 aside内容之外 main time等
   #### 插入视频 
    1>使用iframe标签  
    2> audio标签音频 video标签视频
     ```
      <video>
        <source src="路径"/>
      </video>
     ```
    
    #### 伪元素的使用 ::before ::after
    div::before {必须带一个属性  content 伪元素 其实这个 before 是个盒子,这个盒子是行内的盒子  可以转换
      content:"hi", // 在div前面插入'hi'文案
    }
     
  ## 动画相关
   #### transition 过渡写到本身上 谁做过渡动画，写到谁身上(多组属性用逗号分隔)
    ransition-property 用于指定应用过渡属性的名称  
    transition-duration 用于指定这个过渡的持续时间  
    transition-timing-function 用于指定过渡的类型  
    transition-delay 用于指定延迟过渡的时间
    ```
    div {
      width: 100px;
      height: 100px;
      background-color: pink;
      /*transition: width 0.5s ease 0s, height 0.3s; 多组属性用逗号分隔*/
      transition: all 0.5s; /*  过渡写到本身上 谁做过渡动画，写到谁身上*/
    }
    div:hover {
      width: 800px;
      height: 300px;

    }
    ```  
    #### transform
     translate(x,y) translateX() translateY() // 移动自己盒子的距离  
     scale(x,y) // 写一个,默认和高度一起缩放  
     rotate(ndeg)  
     skew(ndeg) // 变形
    #### transform-origin 默认中心为原点
     transform-origin(x,y) // 支持方位名词和px
    #### animation
    ```
    animation: move 2s ease 0s infinite alternate; //动画名称 花费时间 运动曲线  何时开始  播放次数  是否反方向(alternate轮流反向 forward保持执行后的状态)
    	@keyframes move  {
        from {
          left: 0;
          background-color: pink;
        }

        to {
          left: 1000px;
          background-color: yellow;
          }
    	}

      or

    	@keyframes move  {
        0% {
          left: 0;
          background-color: pink;
        }

        100% {
          left: 1000px;
          background-color: yellow;
          }
    	}

    ```

    #### 不常见属性

    1 backface-visibility: hidden;/*定义当图片不面向屏幕时是否可见*/
  


     








