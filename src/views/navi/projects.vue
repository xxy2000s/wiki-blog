<template>
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>

<div class="split-layout">
<div class="readme md crispy"><h1 id="vuenode多人博客">vue+node多人博客</h1>
<p>这个项目是我在疫情期间写的，我也不知道为什么突然想起来写个博客，可能就是闲的吧 <code>~ (～﹃～)~zZ</code>！好了言归正传，项目总体结构就是一个响应式的架构，前台<code>vue</code>，<code>ui</code>库使用<code>iview</code>，后台<code>nodejs</code>、数据库<code>mysql</code>，可适配多端：<code>PC</code>，<code>ios</code>，<code>Android</code>。</p>
<p><a href="codelei.cn" rel="nofollow noreferrer noopener" target="_blank" title="null">项目浏览地址</a></p>
<h4 id="项目上手注意事项">项目上手注意事项</h4>
<ul>
<li>网络请求封装在<code>network</code>文件夹，如果你需要使用的话请把<code>xxxxxx</code>修改为你的后台开启地址，不然你的项目是访问不了的，我在对应的文件中都有标注，封装在一个文件中这样管理起来也比较方便，后续更换框架也能给予更方面的更换，我的后台是<code>nodejs</code>写的，需要的朋友可以来找我要。<code>24h</code>在线。</li>
<li>各个位置的上传<code>url</code>我都换成了<code>xxxxxxx</code>，你们需要将各个<code>vue</code>文件中的<code>xxxxxx</code>全都更换为你们的后台，<code>admin</code>文件夹下面的文件差不多都要换一下，文件大概有6个，不会耗费太多时间。还有个人信息页，也就是<code>profile</code>的<code>vue</code>文件,换完这些你就可以开启后台愉快的玩耍了。</li>
<li>当然这些都是写给小白看的，老手的话应该一下就能定位问题所在，下面看一下博客的效果图。</li>
</ul>
<h4 id="一、首页功能">一、首页功能</h4>
<blockquote>
<p>首页使用简约式架构，看上去非常的简约，出场动画是一个移动效果，使用媒体查询对网站大小的不同给出不同的背景，个人觉得还是挺养眼的，不会那么花里胡哨，里面结合了我觉得比较好看的一些<code>demo</code>和<code>c3</code>动画元素，我把首页图放在下面了：</p>
</blockquote>
<p><code>lg</code>尺寸显示的背景：（PC端）
（具体ui布局已经更新了最新的，具体请拉取代码后查看或者浏览我的个人博客地址codelei.cn
<img src="http://codeleilei.gitee.io/blog/index.png" alt="博客首页">）</p>
<p><code>md</code>尺寸显示的背景：（手机端）</p>
<p><img src="http://codeleilei.gitee.io/blog/md_index.png" alt="博客首页"></p>
<h4 id="二、-文章列表结构">二、 文章列表结构</h4>
<blockquote>
<p>使用响应式布局，lg尺寸的话左边显示文章，右边有最近文章。音乐播放器，文章页做的不是很漂亮，看看效果图吧：</p>
</blockquote>
<p><img src="http://codeleilei.gitee.io/blog/article.png" alt="文章列表"></p>
<h4 id="三、-文章详情页">三、 文章详情页</h4>
<blockquote>
<p>详情页的文章支持<code>markdown</code>语法解析，使用了<code>highlight</code>进行解析，个人觉得这个插件在使用过程还是有些问题，最大的痛点就是不支持代码块的行号显示， 文章支持分享，与用户评论回复，毕竟是多人博客嘛，这都是必须的。后续会继续完善，有更好建议的朋友欢迎来讨论，虚心接受。下面上图：</p>
</blockquote>
<p><img src="http://codeleilei.gitee.io/blog/detail.png" alt="详情页"></p>
<h4 id="四、-博客留言板">四、 博客留言板</h4>
<blockquote>
<p>留言板的话我封装成了一个组件，因为在文章的评论中也使用到了一样的模板，封装的文件为<code>replyOrpublish</code>下的同名文件，详细的话可以看<code>props</code>参数,主要就是传入不同的后台地址。下面上效果图：</p>
</blockquote>
<p><img src="http://codeleilei.gitee.io/blog/new_leavemessage.png" alt="博客留言板"></p>
<ul>
<li>挑选了一些比较常用的模块来展示，还有那么多内容就不多介绍了，感兴趣的朋友可以下载自己详细的去琢磨，觉得好用的话请给一个<code>star</code>，谢谢啦笔芯~♥</li>
<li>欢迎你们来博客玩耍~</li>
</ul>
<h4 id="1-依赖安装">1. 依赖安装</h4>
<pre><code>npm install</code></pre>
<h4 id="2-项目启动">2. 项目启动</h4>
<pre><code>npm run serve</code></pre>
<h4 id="3-项目打包">3. 项目打包</h4>
<pre><code>npm run build</code></pre>
</div>

<div class="repo-details">
<div class="title-desc-box">
  <h1>Many People Blog</h1>
  <h2 class="crispy">
    🎈基于vue+node+mysql的多人博客，带后台管理系统。支持：登陆/注册，留言，评论/回复，点赞，记录浏览数量，带有相册功能，内容丰富，当然也可以发表文章。欢迎使用！
  </h2>
  </div>
</div>
</div>
</template>

<style scoped>

.split-layout {
    display: flex;
    justify-content: center;
    max-width: 1250px;
    margin: 0 auto;
}
.readme {
    max-width: 900px;
    padding: 24px 32px;
    border-radius: 24px;
    margin: 0 auto 48px;
}
.md {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #24292e;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}

.md img {
    max-width: 100%;
    box-sizing: content-box;
    box-sizing: initial;
    background-color: #fff;
}
  .crispy {
    border: 1px solid rgba(0,0,80,.08);
    box-shadow: 0 2px 10px rgb(0 20 80 / 10%);
    background: #fff;
}


.title-desc-box h2 {
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 8px;
}
.repo-details {
    margin: 0 24px;
    width: 300px;
}
  .title-desc-box {
    width: 100%;
    margin: 0 auto 32px;
}

h2 {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 400;
}
</style>