import{_ as t,c as o,a as p,w as e,b as n,d as a,e as c,r as l,o as u}from"./app.0ad8fcc6.js";const F='{"title":"SearchBar \u641C\u7D22\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"SearchBarSetSuggestList","slug":"searchbarsetsuggestlist"}],"relativePath":"components/SearchBar.md"}',i={},k=n("h1",{id:"searchbar-\u641C\u7D22\u680F",tabindex:"-1"},[a("SearchBar \u641C\u7D22\u680F "),n("a",{class:"header-anchor",href:"#searchbar-\u641C\u7D22\u680F","aria-hidden":"true"},"#")],-1),r=n("p",null,"\u6CE8\uFF1A",-1),d=n("ul",null,[n("li",null,[a("\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u6CA1\u6709\u56FA\u5B9A\u9876\u90E8\u529F\u80FD\uFF0C\u53EF\u4EE5\u914D\u5408 "),n("a",{href:"./Sticky.html"},"Sticky"),a(" \u7EC4\u4EF6\u5B9E\u73B0\u7F6E\u9876\u529F\u80FD\u3002")])],-1),g=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  FxSearchBar`),n("span",{class:"token punctuation"},","),a(`
  FxGroup`),n("span",{class:"token punctuation"},","),a(`
  showToast`),n("span",{class:"token punctuation"},","),a(`
  SearchBarOnFieldClick`),n("span",{class:"token punctuation"},","),a(`
  SearchBarOnInput`),n("span",{class:"token punctuation"},","),a(`
  SearchBarOnSearch
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" placeholders "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./data'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpSearchBar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" onInput"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"SearchBarOnInput"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("text"),n("span",{class:"token punctuation"},","),a(" fn"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),a(`
      text
        `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'ABCD'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("v "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
              text`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("text"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("v"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
              tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'tag1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tag2'"),n("span",{class:"token punctuation"},"]"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onInput2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"SearchBarOnInput"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("text"),n("span",{class:"token punctuation"},","),a(" fn"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u8F93\u5165\u4E86 "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("text"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onInput"),n("span",{class:"token punctuation"},"("),a("text"),n("span",{class:"token punctuation"},","),a(" fn"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onSearch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"SearchBarOnSearch"),a(),n("span",{class:"token operator"},"="),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSearch'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u641C\u7D22\u4E86 "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("res"),n("span",{class:"token punctuation"},"."),a("text"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onClick"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"SearchBarOnFieldClick"),a(),n("span",{class:"token operator"},"="),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onFieldClick'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u641C\u7D22\u8BCD "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("res"),n("span",{class:"token punctuation"},"."),a("text"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u641C\u7D22\u5EFA\u8BAE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token attr-name"},"onInput"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onInput"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u663E\u793A\u53D6\u6D88\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token attr-name"},"showCancel"),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BBE\u7F6E\u5019\u9009\u9879"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token attr-name"},"placeholders"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("placeholders"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6DF1\u8272\u9002\u914D"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-searchBar-dark-style"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"showCancel"),a(),n("span",{class:"token attr-name"},"ghost"),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u53EA\u8BFB\uFF08readonly=true\uFF09"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(),n("span",{class:"token attr-name"},"readOnly"),a(),n("span",{class:"token attr-name"},"placeholders"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("placeholders"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onInput/onFocus/onBlur/onCancelClick/onSearch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(`
          `),n("span",{class:"token attr-name"},"showCancel"),a(`
          `),n("span",{class:"token attr-name"},"placeholders"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("placeholders"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onInput"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onInput2"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onFocus"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onBlur"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onCancelClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u53D6\u6D88\u6309\u94AE\u70B9\u51FB'"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onSearch"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onSearch"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onFieldClick & readOnly=true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxSearchBar")]),a(`
          `),n("span",{class:"token attr-name"},"readOnly"),a(`
          `),n("span",{class:"token attr-name"},"placeholders"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("placeholders"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onFieldClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onClick"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),h=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FxSearchBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  SearchBarSetSuggestList<span class="token punctuation">,</span>
  SearchBarOnFocus<span class="token punctuation">,</span>
  SearchBarOnBlur<span class="token punctuation">,</span>
  SearchBarOnInput<span class="token punctuation">,</span>
  SearchBarOnSearch<span class="token punctuation">,</span>
  SearchBarOnFieldClick
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>placeholders</td><td>string/string[]</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u5019\u9009\u503C\u5217\u8868\uFF0C\u591A\u4E2A\u65F6\u8F6E\u8BE2\u663E\u793A</td></tr><tr><td>placeholderInterval</td><td>number</td><td>5000</td><td>\u5426</td><td>placeholder \u5207\u6362\u65F6\u95F4\uFF0Cplaceholders \u6709\u591A\u4E2A\u65F6\u751F\u6548</td></tr><tr><td>ghost</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u53CD\u8272\u6A21\u5F0F\uFF0C\u5F00\u59CB\u540E\u9002\u7528\u4E8E\u6DF1\u8272\u5E95\u8272\uFF0C\u901A\u8FC7 CSS \u8BBE\u7F6E\u80CC\u666F\u8272</td></tr><tr><td>readOnly</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u4E3B\u8981\u7528\u4E8E\u641C\u7D22\u5165\u53E3\u573A\u666F</td></tr><tr><td>maxLength</td><td>number</td><td>100</td><td>\u5426</td><td>\u6700\u5927\u957F\u5EA6</td></tr><tr><td>focus</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u52A0\u8F7D\u65F6\u662F\u5426\u83B7\u53D6\u7126\u70B9</td></tr><tr><td>showCancel</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>onInput</td><td>\u8F93\u5165\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u5305\u62EC clear \u7684</td><td>payload: { text: string }, setSuggestList: SearchBarSetSuggestList</td><td>SearchBarOnInput</td></tr><tr><td>onFocus</td><td>\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td>payload: { text: string }, setSuggestList: SearchBarSetSuggestList</td><td>SearchBarOnFocus</td></tr><tr><td>onBlur</td><td>\u8F93\u5165\u6846\u79FB\u51FA\u7126\u70B9\u65F6\u89E6\u53D1</td><td>payload: { text: string }, setSuggestList: SearchBarSetSuggestList</td><td>SearchBarOnBlur</td></tr><tr><td>onCancelClick</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB</td><td>e: Event</td><td></td></tr><tr><td>onFieldClick</td><td>\u8F93\u5165\u6846\u70B9\u51FB\uFF0C\u914D\u5408 <code>readOnly</code> \u4F7F\u7528\uFF0C\u83B7\u53D6\u5230\u5F53\u524D\u5019\u9009\u503C</td><td>payload: { text: string }</td><td>SearchBarOnFieldClick</td></tr><tr><td>onSearch</td><td>\u89E6\u53D1\u641C\u7D22\u65F6</td><td>payload: { text: string, source: string }</td><td>SearchBarOnSearch</td></tr></tbody></table><h3 id="searchbarsetsuggestlist" tabindex="-1">SearchBarSetSuggestList <a class="header-anchor" href="#searchbarsetsuggestlist" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">SearchBarSetSuggestList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  res<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">|</span> <span class="token builtin">string</span>
    <span class="token operator">|</span> <span class="token builtin">number</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
        tags<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">const</span> suggestList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;suggest A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;suggest B&#39;</span><span class="token punctuation">]</span>
<span class="token comment">// Or</span>
<span class="token keyword">const</span> suggestList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u6CB9\u70DF\u673A&#39;</span><span class="token punctuation">,</span>
    tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u53A8\u623F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7535\u5668&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,12);function m(x,S,f,B,v,y){const s=l("CodeDemo");return u(),o("div",null,[k,r,d,p(s,{name:"SearchBar"},{default:e(()=>[g]),_:1}),h])}var _=t(i,[["render",m]]);export{F as __pageData,_ as default};
