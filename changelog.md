# 更新历史
---

### V0.3.2 报时更新
* 增加报时功能，每小时报时一次，使用NodeSchedule进行定时推送

### V0.3.1 优化
* 将原来的使用`switch...case`获取发送URL改为使用多维数组然后`foreach`
 原来的：

 ```javascript
 switch(vtuber){
  case "AIC":
    var group1 = "xxxxxxxxx";
    var group2 = "xxxxxxx";
  case "Luna":
  /*略*/
 }
 ```
 现在的：

 ```javascript
 group["AIC"]=["xxxxxx","xxxxxxx","xxxxxx"];
 group["Luna"]=["xxxxxx","xxxxxxx"];
 function getReply(msg,type){
    var postdata=new Array();
    for (var i = 0, len = groups[type].length; i < len; i++) {
      postdata[i] = address + "group_id=" + groups[type][i] + "&message=" + encodeURIComponent(msg);
    }
    return postdata;
 }
 ```



### V0.3.0 主程序更新
* 由于辣鸡腾讯关闭webqq接口……不得不换用docker-CoolQ……
* 过程更改如下
 
 ```text
 IFTTT -> NodeJS Webhook Server -> CoolQ HTTP api
 ```

---

### V0.2.4 格式更新
* 将更新提示的格式由之前的

 ```text
 xxxxx更新了：xxxxxxx
 地址：xxxxxxxxx
 更新时间：xxxxxxxxxx
 ```

 改为

 ```text
 xxxxxxxx|更新了：
 ---------------
 xxxxxxxxxxxxx
 --------------- 
 地址：xxxxxxxxxxxx
 --------------
 更新时间：xxxxxxxxxxxx
 -------------
 提示：可使用-f:zh:xxxxxxxxxxx来翻译
 ```

  _注：发现手机版QQ的消息框是`51`个`-`或者`24`个数字就开始换行_
  _又注：这个数值是根据屏幕宽度而定的……_
---
### V0.2.3 适配更新
* 增加Vtube适配：`Akari` `Luna` `Siro`
* 增加来源适配：`Twitter`
* 将获取URL的代码分离成一个单独的函数
* 将IFTTT的Content-Body由原来的
 
 ```json
 {"Title":"标题","url":"地址","postat":"发布时间","postBy":"发布人"}
 ```

 改为

 ```json
 {"Title":"标题","url":"地址","postat":"发布时间","postBy":"发布人","type":"发布者(AKARI/LUNA/AIC/SIRO)","from":"来源(video/twitter)"}
 ```


---
### V0.2.2 判断修复
* 修复了推送undefined的BUG
* 增加了错误报告
---
### V0.2.1 字符串修复
* 修复了由于`encodeURI()`函数由于不编码`http://`导致的`require`函数库的出错，将`encodeURI()`改为`encodeURIComponent()`
---
### V0.2.0 代码重构
* 将原先由`PHP`写的Webhook server端改为使用`nodejs`
* 思路由原来的
 
 ```text
  IFTTT -> PHP Webhook Server -> Shell Script ->qqbot
 ```
 变为

 ```text
 IFTTT -> NodeJS Webhook Server -> qqbot Web Server
 ```
 简化了流程，加快了反应速率

---
### V0.1.3 逻辑修复
* 修复了怎样都不推送更新提示的BUG
---
### V0.1.2 
* 修复了由于命令行下由于`""`引起的发送不成功
---
### V0.1.1
* 修复了由于Shell Script的一些玄学问题
---
### V0.1.0
* 在`AIC字幕组`成员的~~逼迫~~支持下，开启了自动更新提示人偶的计划，从此踏入了一个无底深坑
* 更新提示Youtube部分的实现：
 
 ```json
 使用IFTTT：
 IF YouTube Channel @A.I.Channel & @A.I.Game has New video upload
 Then Use Webhook Make A web request 
 Address : My server address
 Method : POST
 Content-Type: application/json
 Content-Body:{"Title":"标题","url":"地址","postat":"发布时间","postBy":"发布人"}
 ```

 更新提示在Bilibili部分的实现：

 ```text
 使用由@DIYgod的项目RSSHub订阅Bilibili @AIChannel搬运 的空间
 然后IFTTT如上
 ```
