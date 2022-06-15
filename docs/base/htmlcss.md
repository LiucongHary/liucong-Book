# html+css 

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
    type:text/password/radio  
    value: 默认文案  
    maxlength:文案最大长度  

   ##### input和label标签的使用  
    与for元素绑定,被绑定元素会获得输入焦点  
    ``` 
      // for...id
     <label for="name"></label>
     <input type="text" id="name">
    ```




