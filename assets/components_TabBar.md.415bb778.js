import{_ as t,c as p,a as o,w as e,b as n,d as a,e as c,r as l,o as r}from"./app.0ad8fcc6.js";const T='{"title":"TabBar \u6807\u7B7E\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"TabOptions","slug":"taboptions"},{"level":3,"title":"BadgeOption","slug":"badgeoption"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/TabBar.md"}',u={},i=n("h1",{id:"tabbar-\u6807\u7B7E\u5217",tabindex:"-1"},[a("TabBar \u6807\u7B7E\u5217 "),n("a",{class:"header-anchor",href:"#tabbar-\u6807\u7B7E\u5217","aria-hidden":"true"},"#")],-1),k=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" FxTabBar"),n("span",{class:"token punctuation"},","),a(" FxFixed"),n("span",{class:"token punctuation"},","),a(" FxGroup "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" baseList"),n("span",{class:"token punctuation"},","),a(" badgeList"),n("span",{class:"token punctuation"},","),a(" imageList "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./data'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" TaobaoSvg "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../../assets/icons/taobao.svg?jsx'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" QqSvg "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../../assets/icons/qq.svg?jsx'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" WechatSvg "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../../assets/icons/wechat.svg?jsx'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" WeiboSvg "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../../assets/icons/weibo.svg?jsx'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" customIconList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'wechat'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5FAE\u4FE1'"),n("span",{class:"token punctuation"},","),a(`
    icon`),n("span",{class:"token operator"},":"),a(` WechatSvg
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'qq'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'QQ'"),n("span",{class:"token punctuation"},","),a(`
    icon`),n("span",{class:"token operator"},":"),a(` QqSvg
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'weibo'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5FAE\u535A'"),n("span",{class:"token punctuation"},","),a(`
    icon`),n("span",{class:"token operator"},":"),a(` WeiboSvg
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'taobao'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DD8\u5B9D'"),n("span",{class:"token punctuation"},","),a(`
    icon`),n("span",{class:"token operator"},":"),a(` TaobaoSvg
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpTabBar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("baseList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5FBD\u6807"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("badgeList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u81EA\u5B9A\u4E49\u56FE\u6807"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("customIconList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u81EA\u5B9A\u4E49\u989C\u8272"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(`
          `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8B8DB8"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"activeColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#ffffff"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),a(" backgroundColor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#6667ab'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("baseList"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tabBar-custom"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("imageList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxFixed")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxTabBar")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("baseList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxFixed")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FxTabBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TabBarOnChange<span class="token punctuation">,</span> TabOptions<span class="token punctuation">,</span> BadgeOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>options</td><td>TabOptions</td><td>[]</td><td>\u662F</td><td>tab \u6570\u636E\u96C6</td></tr><tr><td>activeValue</td><td>string | number</td><td></td><td>\u5426</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684 value \u503C</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u6001\u5B57\u4F53\u548C\u56FE\u6807\u989C\u8272</td></tr><tr><td>activeColor</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6001\u7684\u5B57\u4F53\u548C\u56FE\u6807\u989C\u8272</td></tr></tbody></table><h3 id="taboptions" tabindex="-1">TabOptions <a class="header-anchor" href="#taboptions" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">TabOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">|</span> <span class="token builtin">number</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token builtin">string</span>
      value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
      icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> IconData
      activeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> IconData
      badge<span class="token operator">?</span><span class="token operator">:</span> BadgeOption
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div><table><thead><tr><th>key</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td></td><td>\u662F</td><td>\u552F\u4E00\u503C\uFF08v-model:active-value \u4F7F\u7528\uFF09</td></tr><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u6807\u7B7E\u540D</td></tr><tr><td>icon</td><td>string | Component</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u4E5F\u652F\u6301\u56FE\u50CF URL</td></tr><tr><td>activeIcon</td><td>string | Component</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u6FC0\u6D3B\u6001\u56FE\u6807\uFF0C\u4E5F\u652F\u6301\u56FE\u50CF URL\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u5219\u6CBF\u7528 <code>icon</code> \u5C5E\u6027</td></tr><tr><td>badge</td><td>BadgeOption</td><td></td><td>\u5426</td><td>\u5FBD\u6807\uFF0C\u4F7F\u7528 <a href="./Badge.html">Badge</a> \u7EC4\u4EF6</td></tr></tbody></table><div class="language-js"><pre><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;HomeOutlined&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token string">&#39;\u70ED&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u641C\u7D22&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;SearchOutlined&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3A <code>string[]</code> \u6216 <code>number[]</code>\uFF0C\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ccc&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>\u5C06\u88AB\u8F6C\u4E3A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ccc&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;ccc&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u6CE8\uFF1A\u6CE8\u610F\u6570\u7EC4\u9879\u8981\u4FDD\u6301\u552F\u4E00\u6027\u3002</p><h3 id="badgeoption" tabindex="-1">BadgeOption <a class="header-anchor" href="#badgeoption" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">BadgeOption</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">number</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token builtin">string</span>
      content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
      offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      animated<span class="token operator">:</span> <span class="token builtin">boolean</span>
      dot<span class="token operator">:</span> <span class="token builtin">boolean</span>
      maxCount<span class="token operator">:</span> <span class="token builtin">number</span>
      showZero<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u53C2\u6570\u4E3B\u8981\u662F\u57FA\u4E8E <a href="./Badge.html">Badge</a> \u7EC4\u4EF6\u7684 props\uFF0C\u5982\u679C\u4F20\u5165\u662F <code>number</code> \u6216\u8005 <code>string</code> \u5219\u8BBE\u7F6E\u76F4\u63A5\u8BBE\u7F6E content \u5C5E\u6027\u3002</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u70B9\u51FB\u5207\u6362 tab \u65F6\u89E6\u53D1</td><td>(value\uFF1Astring | number, index: number)</td><td>TabBarOnChange</td></tr></tbody></table><h3 id="onchange-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">onChange \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#onchange-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684 value \u503C</td></tr><tr><td>index</td><td>number</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684\u7D22\u5F15\u503C</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>switchTo</td><td>\u5207\u6362\u5230\u6307\u5B9A Tab</td><td>(value: string | number) =&gt; void</td></tr><tr><td>switchToIndex</td><td>\u5207\u6362\u5230\u6307\u5B9A\u7D22\u5F15\u7684 Tab</td><td>(index: number) =&gt; void</td></tr></tbody></table>`,26);function g(b,h,m,v,y,x){const s=l("CodeDemo");return r(),p("div",null,[i,o(s,{name:"TabBar"},{default:e(()=>[k]),_:1}),d])}var w=t(u,[["render",g]]);export{T as __pageData,w as default};
