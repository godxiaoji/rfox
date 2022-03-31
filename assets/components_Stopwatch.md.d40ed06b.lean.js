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
`)])])],-1),g=c("",17);function m(f,x,v,w,y,b){const s=u("CodeDemo");return l(),o("div",null,[k,r,d,p(s,{name:"Stopwatch"},{default:e(()=>[h]),_:1}),g])}var T=a(i,[["render",m]]);export{_ as __pageData,T as default};
