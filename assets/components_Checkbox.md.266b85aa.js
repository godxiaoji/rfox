import{_ as t,c as e,a as o,w as c,b as n,d as a,e as p,r as l,o as k}from"./app.0ad8fcc6.js";const f='{"title":"Checkbox/CheckboxGroup \u591A\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Checkbox Props","slug":"checkbox-props"},{"level":2,"title":"Checkbox Events","slug":"checkbox-events"},{"level":2,"title":"Checkbox Slots","slug":"checkbox-slots"},{"level":2,"title":"CheckboxGroup","slug":"checkboxgroup"},{"level":2,"title":"CheckboxGroup Props","slug":"checkboxgroup-props"},{"level":3,"title":"CheckboxOptionItem","slug":"checkboxoptionitem"},{"level":2,"title":"CheckboxGroup Events","slug":"checkboxgroup-events"},{"level":2,"title":"CheckboxGroup Slots","slug":"checkboxgroup-slots"},{"level":3,"title":"children","slug":"children"}],"relativePath":"components/Checkbox.md"}',u={},i=n("h1",{id:"checkbox-checkboxgroup-\u591A\u9009\u9879",tabindex:"-1"},[a("Checkbox/CheckboxGroup \u591A\u9009\u9879 "),n("a",{class:"header-anchor",href:"#checkbox-checkboxgroup-\u591A\u9009\u9879","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" FxCheckbox"),n("span",{class:"token punctuation"},","),a(" FxCell"),n("span",{class:"token punctuation"},","),a(" FxGroup"),n("span",{class:"token punctuation"},","),a(" showToast "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" groups "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'A'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'B'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpCheckbox"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"renderItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" groups"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("item "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("item"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("item"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token punctuation"},"{"),a("item"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"renderCellItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" groups"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("item "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(`
        `),n("span",{class:"token attr-name"},"key"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("item"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'\u5355\u5143\u683C '"),a(),n("span",{class:"token operator"},"+"),a(" item"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"renderIcon"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"circle"),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("item"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onChange"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"string"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Change Value: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9ED8\u8BA4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5E26\u6587\u6848"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u52FE\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9ED8\u8BA4\u6FC0\u6D3B"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"checked"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u52FE\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u81EA\u5B9A\u4E49\u989C\u8272"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"checked"),a(),n("span",{class:"token attr-name"},"activeColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8b1721"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            \u52FE\u9009
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7981\u7528"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u52FE\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("CheckboxGroup"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9ED8\u8BA4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"renderItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5185\u8054"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),a(),n("span",{class:"token attr-name"},"inline"),a(),n("span",{class:"token attr-name"},"activeColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8b1721"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"renderItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7981\u7528"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'A'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"renderItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u901A\u8FC7options\u8BBE\u7F6E"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("groups"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("CheckboxGroup + Cell"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"renderCellItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),a(),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onChange"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("B"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FxCheckbox")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCheckbox.Group")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"FxGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=p(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FxCheckbox<span class="token punctuation">,</span> FxCheckboxGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CheckboxOptionItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rfox&#39;</span>
</code></pre></div><h2 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td>&#39;&#39;</td><td>\u5426</td><td>\u8BE5\u9879\u503C\uFF0C<a href="./Checkbox.html#checkboxgroup-\u591A\u9879\u9009\u62E9\u5668">CheckboxGroup</a> \u7684 <code>onChange</code> \u4E8B\u4EF6\u4F1A\u643A\u5E26 <code>checkbox</code> \u7684 value</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>circle</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5706\u5F62\u7684\u56FE\u6807</td></tr><tr><td>checked</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u7528\u6765\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D</td></tr><tr><td>activeColor</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr></tbody></table><h2 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u52FE\u9009\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>checked: boolean</td></tr></tbody></table><h2 id="checkbox-slots" tabindex="-1">Checkbox Slots <a class="header-anchor" href="#checkbox-slots" aria-hidden="true">#</a></h2><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u5F00\u6717</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u6D3B\u6CFC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span>
<span class="token operator">...</span>
</code></pre></div><h2 id="checkboxgroup" tabindex="-1">CheckboxGroup <a class="header-anchor" href="#checkboxgroup" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A</p><ul><li>\u5185\u90E8\u7531\u591A\u4E2A <a href="./Checkbox.html#Checkbox-\u591A\u9009\u9879">Checkbox</a> \u7EC4\u6210\u3002</li><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>inline</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u4F7F\u7528\u5185\u8054\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u7EB5\u5411\u5E03\u5C40</td></tr><tr><td>value</td><td>(string | number)[]</td><td>[]</td><td>\u5426</td><td>\u5F53\u524D\u9009\u62E9\u5B50\u9879\u7684 value \u5217\u8868</td></tr><tr><td>activeColor</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u5B50\u9879\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr><tr><td>options</td><td>CheckboxOptionItem[]</td><td></td><td>\u5426</td><td>\u5B50\u9879\u914D\u7F6E\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E slot \u653E\u5165 <code>Checkbox</code> \u7EC4\u4EF6</td></tr></tbody></table><h3 id="checkboxoptionitem" tabindex="-1">CheckboxOptionItem <a class="header-anchor" href="#checkboxoptionitem" aria-hidden="true">#</a></h3><table><thead><tr><th>key</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td></td><td>\u662F</td><td>\u503C\uFF0C \u540C <code>Checkbox</code> \u7EC4\u4EF6 value</td></tr><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u63CF\u8FF0\uFF0C\u540C <code>Checkbox</code> \u7EC4\u4EF6 slot default</td></tr></tbody></table><h2 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: (string | number)[]</td></tr></tbody></table><h2 id="checkboxgroup-slots" tabindex="-1">CheckboxGroup Slots <a class="header-anchor" href="#checkboxgroup-slots" aria-hidden="true">#</a></h2><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxCheckbox.Group</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u5F00\u6717</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u6D3B\u6CFC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxCheckbox</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  ...
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxCheckbox.Group</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24);function x(h,g,b,m,C,v){const s=l("CodeDemo");return k(),e("div",null,[i,o(s,{name:"Checkbox"},{default:c(()=>[r]),_:1}),d])}var y=t(u,[["render",x]]);export{f as __pageData,y as default};
