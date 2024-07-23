import{_ as e,c as a,o,a3 as r}from"./chunks/framework.B2Sicsqr.js";const t="/assets/1.911Tjfd8.png",d="/assets/2.tdVla_GB.png",_=JSON.parse('{"title":"BPB-Worker-Panel-Chinese：BPB-Panel汉化版","description":"","frontmatter":{},"headers":[],"relativePath":"project/BPB-Panel/index.md","filePath":"project/BPB-Panel/index.md"}'),c={name:"project/BPB-Panel/index.md"},n=r('<h1 id="bpb-worker-panel-chinese-bpb-panel汉化版" tabindex="-1">BPB-Worker-Panel-Chinese：BPB-Panel汉化版 <a class="header-anchor" href="#bpb-worker-panel-chinese-bpb-panel汉化版" aria-label="Permalink to &quot;BPB-Worker-Panel-Chinese：BPB-Panel汉化版&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p>翻墙需谨慎！翻墙漏身份，人生无轮回！<br> 禁止用于违法行动中</p></blockquote><p><code>BPB-Worker-Panel-Chinese</code>是由<a href="https://github.com/Starry-Sky-World" target="_blank" rel="noreferrer">@Starry-Sky-World</a>翻译的一个基于Cloudflare Worker的<code>VPN Vmess节点</code>搭建项目</p><h2 id="👨‍💻部署" tabindex="-1">👨‍💻部署 <a class="header-anchor" href="#👨‍💻部署" aria-label="Permalink to &quot;👨‍💻部署&quot;">​</a></h2><h3 id="⏬下载文件" tabindex="-1">⏬下载文件 <a class="header-anchor" href="#⏬下载文件" aria-label="Permalink to &quot;⏬下载文件&quot;">​</a></h3><p>下载<a href="https://github.com/Starry-Sky-World/BPB-Worker-Panel-Chinese/releases" target="_blank" rel="noreferrer">Release</a>的最新版本</p><h3 id="创建pages和kv储存" tabindex="-1">创建Pages和KV储存 <a class="header-anchor" href="#创建pages和kv储存" aria-label="Permalink to &quot;创建Pages和KV储存&quot;">​</a></h3><h4 id="创建pages" tabindex="-1">创建Pages <a class="header-anchor" href="#创建pages" aria-label="Permalink to &quot;创建Pages&quot;">​</a></h4><p>打开<code>Workers 和 Pages</code> -&gt; <code>概述</code> <br><img src="'+t+'" alt="1"> <br> 选择<code>创建</code> -&gt; <code>Pages</code> -&gt; <code>使用直接上传创建</code>(个人推荐)<br> 然后上传Github上下载的文件</p><h4 id="创建kv" tabindex="-1">创建KV <a class="header-anchor" href="#创建kv" aria-label="Permalink to &quot;创建KV&quot;">​</a></h4><p>依旧打开<code>Workers 和 Pages</code>，选择<code>KV</code><br> 叫啥都可以</p><h3 id="配置站点" tabindex="-1">配置站点 <a class="header-anchor" href="#配置站点" aria-label="Permalink to &quot;配置站点&quot;">​</a></h3><h4 id="配置kv" tabindex="-1">配置KV <a class="header-anchor" href="#配置kv" aria-label="Permalink to &quot;配置KV&quot;">​</a></h4><p>打开<code>Workers 和 Pages</code> -&gt; <code>概述</code><br> 选择你刚刚创建的<code>Pages</code>，<code>设置</code> -&gt; <code>函数</code> -&gt; <code>KV 命名空间绑定</code> -&gt; <code>添加绑定</code><br><img src="'+d+'" alt="2"><br> 变量名设为<code>bpb</code>，KV命名空间选中你刚刚创建的KV \\</p><h4 id="重新创建部署" tabindex="-1">重新创建部署 <a class="header-anchor" href="#重新创建部署" aria-label="Permalink to &quot;重新创建部署&quot;">​</a></h4><p>接下来，选择<code>部署</code>-&gt;<code>创建新部署</code>，上传源码，等待部署完成</p><h2 id="💻访问面板并配置vpn" tabindex="-1">💻访问面板并配置VPN <a class="header-anchor" href="#💻访问面板并配置vpn" aria-label="Permalink to &quot;💻访问面板并配置VPN&quot;">​</a></h2><h3 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h3><p>打开<code>https://{Pages域名}/panel</code>，进入面板 默认密码：<code>admin</code></p><h3 id="端口设置" tabindex="-1">端口设置 <a class="header-anchor" href="#端口设置" aria-label="Permalink to &quot;端口设置&quot;">​</a></h3><p>端口仅推荐开启<code>2087</code>,<code>2096</code></p><h3 id="配置clean-ip池" tabindex="-1">配置Clean IP池 <a class="header-anchor" href="#配置clean-ip池" aria-label="Permalink to &quot;配置Clean IP池&quot;">​</a></h3><p>选择<code>CLEAN IP · 清理IP(翻译官懵逼x2)</code> -&gt; <code>Online Scanner · 在线扫描</code>的旁边那个按钮<br> 打开另一个网站以后，直接点击<code>Start Scan</code>（不要开VPN！！！）<br> 过一会，他会弹出来一个IP（Start Scan按钮下面），复制，然后粘贴到面板的<code>Clean IPs</code>框中</p><h2 id="获取vpn" tabindex="-1">获取VPN <a class="header-anchor" href="#获取vpn" aria-label="Permalink to &quot;获取VPN&quot;">​</a></h2><p>首先，确保电脑/手机上有V2RayN/V2RayNG<br> 划到<code>NORMAL CONFIGS · 获取订阅配置</code>，按照自己手机/电脑上有的软件去获取订阅链接OR订阅二维码\\</p><p>搞定！</p>',27),l=[n];function h(s,i,p,P,b,k){return o(),a("div",null,l)}const g=e(c,[["render",h]]);export{_ as __pageData,g as default};
