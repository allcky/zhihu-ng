# zhihu-ng
项目为采用angularjs1.0版本完成。有两个问题需要解决。

1. 跨域问题
<br>通过知乎API获取信息有跨域问题，因此采用php文件代理解决跨域问题，需要用到php环境方可访问。
2. 知乎图片防盗链
<br>采用meta标签，不发送referrer解决
