import{_ as a,c as o,a as e,w as p,b as n,d as t,e as c,r as l,o as u}from"./app.0ad8fcc6.js";const y='{"title":"ActionSheet \u52A8\u4F5C\u9762\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"ActionSheetOption \u7684\u7ED3\u6784","slug":"actionsheetoption-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"showActionSheet(object)","slug":"showactionsheet-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/ActionSheet.md"}',i={},k=n("h1",{id:"actionsheet-\u52A8\u4F5C\u9762\u677F",tabindex:"-1"},[t("ActionSheet \u52A8\u4F5C\u9762\u677F "),n("a",{class:"header-anchor",href:"#actionsheet-\u52A8\u4F5C\u9762\u677F","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(`
  ActionSheetOption`),n("span",{class:"token punctuation"},","),t(`
  ActionSheetOnConfirm`),n("span",{class:"token punctuation"},","),t(`
  showToast`),n("span",{class:"token punctuation"},","),t(`
  showDialog`),n("span",{class:"token punctuation"},","),t(`
  PopupOnCancel`),n("span",{class:"token punctuation"},","),t(`
  showActionSheet`),n("span",{class:"token punctuation"},","),t(`
  PopupOnVisibleStateChange`),n("span",{class:"token punctuation"},","),t(`
  FxCell`),n("span",{class:"token punctuation"},","),t(`
  FxGroup`),n("span",{class:"token punctuation"},","),t(`
  FxActionSheet
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@/index'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useRef"),n("span",{class:"token punctuation"},","),t(" useState "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'react'"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"showArgs"),t(),n("span",{class:"token punctuation"},"{"),t(`
  options`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(" ActionSheetOption"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
  title`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(`
  showCancel`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
  cancelText`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(`
  visibleEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
  confirmEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" defaultOptions"),n("span",{class:"token operator"},":"),t(" ActionSheetOption"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98792'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98793'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"]"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"ExpActionSheet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("options"),n("span",{class:"token punctuation"},","),t(" setOptions"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),t("defaultOptions"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("visible"),n("span",{class:"token punctuation"},","),t(" setVisible"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("title"),n("span",{class:"token punctuation"},","),t(" setTitle"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("showCancel"),n("span",{class:"token punctuation"},","),t(" setShowCancel"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("cancelText"),n("span",{class:"token punctuation"},","),t(" setCancelText"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" visibleEvent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" confirmEvent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token operator"},":"),t(" showArgs "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setTitle"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token punctuation"},"."),t("title "),n("span",{class:"token operator"},"??"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setShowCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t("showCancel"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setCancelText"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token punctuation"},"."),t("cancelText"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setOptions"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token punctuation"},"."),t("options "),n("span",{class:"token operator"},"??"),t(" defaultOptions"),n("span",{class:"token punctuation"},")"),t(`

    visibleEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t(`visibleEvent
    confirmEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t(`confirmEvent

    `),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onVisibleStateChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"PopupOnVisibleStateChange"),t(),n("span",{class:"token operator"},"="),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("visibleEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onVisibleStateChange'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("res"),n("span",{class:"token punctuation"},"."),t("state"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u4E8B\u4EF6\u89E6\u53D1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},"."),t("state "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visibleEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
      confirmEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onConfirm"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"ActionSheetOnConfirm"),t(),n("span",{class:"token operator"},"="),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("confirmEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'confirm'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token comment"},"// showDialog({"),t(`
      `),n("span",{class:"token comment"},"//   title: '\u9009\u62E9\u4E86',"),t(`
      `),n("span",{class:"token comment"},"//   showCancel: false,"),t(`
      `),n("span",{class:"token comment"},"//   content: `item.name: '${res.item.name}'\\nindex: ${res.index}`"),t(`
      `),n("span",{class:"token comment"},"// })"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onCancel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"PopupOnCancel"),t(),n("span",{class:"token operator"},"="),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("confirmEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u53D6\u6D88\u4E86'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"showActionSheet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(" defaultOptions"),n("span",{class:"token punctuation"},","),t(`
      showCancel`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" confirm"),n("span",{class:"token punctuation"},","),t(" detail "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(` res

        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("confirm"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"showDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u62E9\u4E86'"),n("span",{class:"token punctuation"},","),t(`
            showCancel`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
            content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"item.name: '"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("detail"),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"'\\nindex: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("detail"),n("span",{class:"token punctuation"},"."),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u53D6\u6D88\u4E86'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u9ED8\u8BA4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"isLink"),t(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5C55\u793A\u6807\u9898"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u9898'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5C55\u793A\u53D6\u6D88\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" showCancel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BBE\u7F6E\u53D6\u6D88\u6309\u94AE\u6587\u6848"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" showCancel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6587\u6848'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options \u6269\u5C55"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u9009\u9879\u63CF\u8FF0"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
              options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),t(`
                  description`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848'"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98792'"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98793'"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u9009\u9879\u9AD8\u4EAE"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
              options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),t(`
                  highlight`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98792'"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98793'"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("confirm/cancel"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" showCancel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" confirmEvent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onVisibleStateChange"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" visibleEvent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("API"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showActionSheet"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"isLink"),t(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxActionSheet")]),t(`
        `),n("span",{class:"token attr-name"},"visible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("visible"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("options"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"showCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("showCancel"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"cancelText"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("cancelText"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onUpdateVisible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("v "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),t("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onVisibleStateChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onVisibleStateChange"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onCancel"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onConfirm"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onConfirm"),n("span",{class:"token punctuation"},"}")]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),d=c("",24);function h(g,m,b,f,v,w){const s=l("CodeDemo");return u(),o("div",null,[k,e(s,{name:"ActionSheet"},{default:p(()=>[r]),_:1}),d])}var C=a(i,[["render",h]]);export{y as __pageData,C as default};
