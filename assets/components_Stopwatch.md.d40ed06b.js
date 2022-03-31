import{_ as a,c as o,a as p,w as e,b as n,d as t,e as c,r as u,o as l}from"./app.0ad8fcc6.js";const _='{"title":"Stopwatch \u79D2\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"CountTime \u7684\u7ED3\u6784","slug":"counttime-\u7684\u7ED3\u6784"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A\uFF08render\uFF09","slug":"\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A\uFF08render\uFF09"}],"relativePath":"components/Stopwatch.md"}',i={},k=n("h1",{id:"stopwatch-\u79D2\u8868",tabindex:"-1"},[t("Stopwatch \u79D2\u8868 "),n("a",{class:"header-anchor",href:"#stopwatch-\u79D2\u8868","aria-hidden":"true"},"#")],-1),r=n("p",null,"\u6CE8\uFF1A",-1),d=n("ul",null,[n("li",null,"\u672C\u7EC4\u4EF6\u6CA1\u6709\u6307\u5B9A\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EF\u5BF9\u6587\u5B57\u6837\u5F0F\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002")],-1),h=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(`
  CountTime`),n("span",{class:"token punctuation"},","),t(`
  FxStopwatch`),n("span",{class:"token punctuation"},","),t(`
  FxGroup`),n("span",{class:"token punctuation"},","),t(`
  FxCell`),n("span",{class:"token punctuation"},","),t(`
  FxButton`),n("span",{class:"token punctuation"},","),t(`
  StopwatchOnStop`),n("span",{class:"token punctuation"},","),t(`
  StopwatchRef
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@/index'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useRef"),n("span",{class:"token punctuation"},","),t(" useState "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'react'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"ExpStopwatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("paused"),n("span",{class:"token punctuation"},","),t(" setPaused"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("laps"),n("span",{class:"token punctuation"},","),t(" setLaps"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" stopWatchRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),t("StopwatchRef"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"updateLaps"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("_laps"),n("span",{class:"token operator"},":"),t(" CountTime"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setLaps"),n("span",{class:"token punctuation"},"("),t(`
      _laps`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),t("countTime "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t(`
          `),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),t("countTime"),n("span",{class:"token punctuation"},"."),t("fullHours"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),t(`
            `),n("span",{class:"token operator"},"?"),t(" countTime"),n("span",{class:"token punctuation"},"."),t("thousandsFullHours "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"':'"),t(`
            `),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
        `),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("countTime"),n("span",{class:"token punctuation"},"."),t("minutes"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},":"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("countTime"),n("span",{class:"token punctuation"},"."),t("seconds"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"."),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("countTime"),n("span",{class:"token punctuation"},"."),t("milliseconds"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"resetOrLap"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("paused"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      stopWatchRef`),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"reset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"updateLaps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"updateLaps"),n("span",{class:"token punctuation"},"("),t("stopWatchRef"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"lap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"??"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"startOrStop"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("paused"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      stopWatchRef`),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      stopWatchRef`),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onStop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"StopwatchOnStop"),t(),n("span",{class:"token operator"},"="),t(" e "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setPaused"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'stop'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token function"},"updateLaps"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("laps"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onStart"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setPaused"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onReset"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setPaused"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"renderLaps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(" laps"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},","),t(" index"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'\u8BA1\u6B21 '"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("laps"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(" index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("item"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token punctuation"},"{"),t("item"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("exp-stopwatch-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("exp-stopwatch-box-header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxStopwatch")]),t(`
              `),n("span",{class:"token attr-name"},"onStop"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onStop"),n("span",{class:"token punctuation"},"}")]),t(`
              `),n("span",{class:"token attr-name"},"onStart"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onStart"),n("span",{class:"token punctuation"},"}")]),t(`
              `),n("span",{class:"token attr-name"},"onReset"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onReset"),n("span",{class:"token punctuation"},"}")]),t(`
              `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("stopWatchRef"),n("span",{class:"token punctuation"},"}")]),t(`
            `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("exp-stopwatch-box-body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxButton")]),t(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("resetOrLap"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),t("paused "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'\u91CD\u7F6E'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BA1\u6B21'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxButton")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxButton")]),t(`
              `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("startOrStop"),n("span",{class:"token punctuation"},"}")]),t(`
              `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"!"),t("paused "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'danger'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},"}")]),t(`
            `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token punctuation"},"{"),t("paused "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'\u542F\u52A8'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u505C\u6B62'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxButton")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"renderLaps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),g=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FxStopwatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CountTime<span class="token punctuation">,</span> StopwatchOnStop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>showMilliseconds</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u6BEB\u79D2\u6570</td></tr><tr><td>thousands</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u5C0F\u65F6\u4F4D\u662F\u5426\u4EE5\u5343\u5206\u4F4D\u5F62\u5F0F\u663E\u793A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>onStart</td><td>\u8BA1\u65F6\u542F\u52A8\u65F6\u89E6\u53D1</td><td></td><td></td></tr><tr><td>onStop</td><td>\u8BA1\u65F6\u505C\u6B62\u65F6\u89E6\u53D1</td><td>payload: { detail: CountTime, laps: CountTime[] } detail \u5468\u671F\u603B\u65F6\u95F4\uFF0Claps\uFF0C\u5468\u671F\u5185\u6240\u6709\u8BA1\u6B21\u65F6\u95F4</td><td>StopwatchOnStop</td></tr><tr><td>onReset</td><td>\u8BA1\u65F6\u590D\u4F4D\u65F6\u89E6\u53D1</td><td></td><td></td></tr></tbody></table><h3 id="counttime-\u7684\u7ED3\u6784" tabindex="-1">CountTime \u7684\u7ED3\u6784 <a class="header-anchor" href="#counttime-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>time</td><td>number</td><td>\u6301\u7EED\u65F6\u95F4</td></tr><tr><td>days</td><td>string</td><td>\u5929\u6570</td></tr><tr><td>hours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF08&lt;24\uFF09\uFF0C\u9700\u8981\u8DDF days \u914D\u5408\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>fullHours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;124&#39;\uFF0C\u81F3\u5C11\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>thousandsFullHours</td><td>string</td><td>\u5343\u5206\u4F4D\u5F62\u5F0F\u7684\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;1,234&#39;</td></tr><tr><td>minutes</td><td>string</td><td>\u5206\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>seconds</td><td>string</td><td>\u79D2\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>milliseconds</td><td>string</td><td>\u6BEB\u79D2\u6570\uFF0C\u4FDD\u7559 3 \u4F4D</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u5F00\u59CB\u8BA1\u65F6</td><td>() =&gt; void</td></tr><tr><td>stop</td><td>\u505C\u6B62\u8BA1\u65F6</td><td>() =&gt; void</td></tr><tr><td>reset</td><td>\u590D\u4F4D/\u91CD\u7F6E</td><td>() =&gt; void</td></tr><tr><td>lap</td><td>\u89E6\u53D1 1 \u6B21\u8BA1\u6B21\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5468\u671F</td><td>() =&gt; CountTime[]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A\uFF08render\uFF09" tabindex="-1">\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A\uFF08render\uFF09 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A\uFF08render\uFF09" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxStopwatch</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>countTime <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>countTime<span class="token punctuation">.</span>fullHours<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,17);function m(f,x,v,w,y,b){const s=u("CodeDemo");return l(),o("div",null,[k,r,d,p(s,{name:"Stopwatch"},{default:e(()=>[h]),_:1}),g])}var T=a(i,[["render",m]]);export{_ as __pageData,T as default};