import{_ as s,o as a,c as n,b as l}from"./app.a1bbaf0b.js";const m=JSON.parse('{"title":"\u5FEB\u901F\u5B89\u88C5","description":"","frontmatter":{"realPath":"docs/guide.md"},"headers":[{"level":2,"title":"\u{1F4E6} Install","slug":"\u{1F4E6}-install"},{"level":2,"title":"\u{1F9E8} Quickstart","slug":"\u{1F9E8}-quickstart"}],"relativePath":"guide.md"}'),p={name:"guide.md"},o=l(`<h1 id="\u5FEB\u901F\u5B89\u88C5" tabindex="-1">\u5FEB\u901F\u5B89\u88C5 <a class="header-anchor" href="#\u5FEB\u901F\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="\u{1F4E6}-install" tabindex="-1">\u{1F4E6} Install <a class="header-anchor" href="#\u{1F4E6}-install" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#c9d1d9;"># using npm to install</span></span>
<span class="line"><span style="color:#c9d1d9;">$ npm i hazel-plus</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># using pnpm to install</span></span>
<span class="line"><span style="color:#c9d1d9;">$ pnpm add hazel-plus</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#24292f;"># using npm to install</span></span>
<span class="line"><span style="color:#24292f;">$ npm i hazel-plus</span></span>
<span class="line"><span style="color:#24292f;"></span></span>
<span class="line"><span style="color:#24292f;"># using pnpm to install</span></span>
<span class="line"><span style="color:#24292f;">$ pnpm add hazel-plus</span></span>
<span class="line"><span style="color:#24292f;"></span></span></code></pre></div><h2 id="\u{1F9E8}-quickstart" tabindex="-1">\u{1F9E8} Quickstart <a class="header-anchor" href="#\u{1F9E8}-quickstart" aria-hidden="true">#</a></h2><ol><li>Import the components style</li></ol><div class="language-ts :main.ts"><button class="copy"></button><span class="lang">ts :main.ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#8B949E;">// main.ts</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { createApp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hazel-plus/dist/style.css&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6E7781;">// main.ts</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { createApp } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hazel-plus/dist/style.css&#39;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Import the components or hooks you need on demand</li></ol><div class="language-ts :xx.vue"><button class="copy"></button><span class="lang">ts :xx.vue</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#8B949E;">// hooks</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useRequest } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hazel-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// Components</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { HzDialogConfirm } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hazel-plus&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { HzDropdownSelect } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hazel-plus&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { HzPopupBottom } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hazel-plus&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6E7781;">// hooks</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useRequest } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hazel-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// Components</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { HzDialogConfirm } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hazel-plus&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { HzDropdownSelect } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hazel-plus&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { HzPopupBottom } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hazel-plus&#39;</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,i,d,y,u){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
