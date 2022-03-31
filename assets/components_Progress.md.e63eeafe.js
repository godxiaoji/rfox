import{_ as t,c as e,a as p,w as o,b as a,d as s,e as c,r as l,o as u}from"./app.0ad8fcc6.js";const P='{"title":"Progress \u8FDB\u5EA6\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5185\u5BB9\u533A\uFF08children\uFF09","slug":"\u5185\u5BB9\u533A\uFF08children\uFF09"}],"relativePath":"components/Progress.md"}',k={},i=a("h1",{id:"progress-\u8FDB\u5EA6\u6761",tabindex:"-1"},[s("Progress \u8FDB\u5EA6\u6761 "),a("a",{class:"header-anchor",href:"#progress-\u8FDB\u5EA6\u6761","aria-hidden":"true"},"#")],-1),r=a("div",{class:"language-tsx"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token punctuation"},"{"),s(" FxProgress"),a("span",{class:"token punctuation"},","),s(" FxStepper"),a("span",{class:"token punctuation"},","),s(" FxGroup "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'@/index'"),s(`
`),a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token punctuation"},"{"),s(" useState "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'react'"),s(`

`),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token keyword"},"function"),s(),a("span",{class:"token function"},"ExpProgress"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
  `),a("span",{class:"token keyword"},"const"),s(),a("span",{class:"token punctuation"},"["),s("percentage"),a("span",{class:"token punctuation"},","),s(" setPercentage"),a("span",{class:"token punctuation"},"]"),s(),a("span",{class:"token operator"},"="),s(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},")"),s(`

  `),a("span",{class:"token keyword"},"return"),s(),a("span",{class:"token punctuation"},"("),s(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),s(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("\u57FA\u7840\u7528\u6CD5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-box"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),s("percentage"),a("span",{class:"token punctuation"},"}")]),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-bottom"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxStepper")]),s(`
            `),a("span",{class:"token attr-name"},"min"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("0"),a("span",{class:"token punctuation"},'"')]),s(`
            `),a("span",{class:"token attr-name"},"max"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("100"),a("span",{class:"token punctuation"},'"')]),s(`
            `),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),s("percentage"),a("span",{class:"token punctuation"},"}")]),s(`
            `),a("span",{class:"token attr-name"},"onChange"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),s("p "),a("span",{class:"token operator"},"=>"),s(),a("span",{class:"token function"},"setPercentage"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"parseInt"),a("span",{class:"token punctuation"},"("),s("p"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),s(`
          `),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),s(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("\u5C55\u793A\u6587\u5B57"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("ul")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-list"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("5"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("50"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("100"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("ul")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),s(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("\u56FA\u5B9A\u8FDB\u5EA6\u6761"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("ul")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-list fixed-bar"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("5"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"fixedBar"),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("50"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"fixedBar"),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("100"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"fixedBar"),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("li")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("ul")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),s(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("Slot default"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-box"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),s(" progress "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token operator"},"=>"),s(),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'\u5DF2\u62A2'"),s(),a("span",{class:"token operator"},"+"),s(" progress"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token punctuation"},"}"),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxProgress")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),s(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("\u81EA\u5B9A\u4E49\u989C\u8272"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("exp-progress-box"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxProgress")]),s(),a("span",{class:"token attr-name"},"percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("50"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"showText"),s(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("#8b1721"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),s(`
  `),a("span",{class:"token punctuation"},")"),s(`
`),a("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FxProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>percentage</td><td>string | number</td><td></td><td>\u662F</td><td>\u767E\u5206\u6BD4\uFF0C\u4F8B\u5982\uFF1A50</td></tr><tr><td>showText</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u6587\u5B57</td></tr><tr><td>fixedBar</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u56FA\u5B9A\u8FDB\u5EA6\u6761\u5BBD\u5EA6\uFF0C\u914D\u5408 <code>showText=true</code> \u4F7F\u7528\uFF0C\u9632\u6B62\u7531\u4E8E\u6587\u5B57 5% \u548C 100% \u5BBD\u5EA6\u4E0D\u4E00\u6837\u5BFC\u81F4\u8FDB\u5EA6\u6761\u957F\u77ED\u4E0D\u4E00</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\u533A\uFF08children\uFF09" tabindex="-1">\u5185\u5BB9\u533A\uFF08children\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\u533A\uFF08children\uFF09" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxProgress</span></span> <span class="token attr-name">percentage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> progress <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token string">&#39;\u5DF2\u62A2&#39;</span> <span class="token operator">+</span> progress<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxProgress</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\uFF1A\u6DFB\u52A0 slot \u540E <code>showText</code> prop \u5C5E\u6027\u5931\u6548\u3002</p>`,9);function d(x,m,h,v,f,_){const n=l("CodeDemo");return u(),e("div",null,[i,p(n,{name:"Progress"},{default:o(()=>[r]),_:1}),g])}var q=t(k,[["render",d]]);export{P as __pageData,q as default};
