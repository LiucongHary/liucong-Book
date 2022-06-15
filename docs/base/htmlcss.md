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
    1.标签选择器  
    2.id选择器  
    3.类选择器 伪类选择器  
    4.通配符选择器 *  

    #### 复合选择器
    1 后代选择器 div p (p是div的孩子 中间用空格隔开)  
    2 子代选择器 ul>li (li是ul的亲儿子)   
    3 交集选择器 div.red (即是div标签且类名是red)  
    4 并集选择器 div,p (用','隔开,表示集体声明相同的样式)  
    5 伪类选择器  
      :link 未访问  
      :visited 已访问  
      :hover 鼠标移动  
      :active 鼠标按下时  
      ```
       a:link {
           color:red
       }
      ```
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







