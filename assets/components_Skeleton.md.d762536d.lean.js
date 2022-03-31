import{_ as t,c as e,a as p,w as o,b as a,d as n,e as c,r as l,o as u}from"./app.0ad8fcc6.js";const y='{"title":"Skeleton \u9AA8\u67B6\u5C4F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Skeleton Props","slug":"skeleton-props"},{"level":2,"title":"Skeleton Slots","slug":"skeleton-slots"},{"level":3,"title":"children","slug":"children"},{"level":3,"title":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderLayout\uFF09","slug":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderlayout\uFF09"},{"level":2,"title":"SkeletonAvatar Props","slug":"skeletonavatar-props"},{"level":2,"title":"SkeletonImage Props","slug":"skeletonimage-props"},{"level":2,"title":"SkeletonTitle Props","slug":"skeletontitle-props"},{"level":2,"title":"SkeletonParagraph Props","slug":"skeletonparagraph-props"},{"level":2,"title":"SkeletonButton Props","slug":"skeletonbutton-props"}],"relativePath":"components/Skeleton.md"}',k={},i=a("h1",{id:"skeleton-\u9AA8\u67B6\u5C4F",tabindex:"-1"},[n("Skeleton \u9AA8\u67B6\u5C4F "),a("a",{class:"header-anchor",href:"#skeleton-\u9AA8\u67B6\u5C4F","aria-hidden":"true"},"#")],-1),r=a("div",{class:"language-tsx"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(`
  FxSkeleton`),a("span",{class:"token punctuation"},","),n(`
  FxGroup`),a("span",{class:"token punctuation"},","),n(`
  FxIcon`),a("span",{class:"token punctuation"},","),n(`
  FxSwitch`),a("span",{class:"token punctuation"},","),n(`
  SkeletonAvatarShape`),a("span",{class:"token punctuation"},","),n(`
  SkeletonButtonShape
`),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'@/index'"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" useState "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'react'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"ExpSkeleton"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("animated"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("avatarShape"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"useState"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),n("SkeletonAvatarShape"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'circle'"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("buttonShape"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"useState"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),n("SkeletonButtonShape"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'default'"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("loading"),a("span",{class:"token punctuation"},","),n(" setLoading"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),n(`

  `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"("),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u57FA\u7840\u7528\u6CD5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u663E\u793A\u5934\u50CF"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u5E26\u52A8\u753B"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token attr-name"},"animated"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("animated"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"avatarShape"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("avatarShape"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u663E\u793A\u5B50\u7EC4\u4EF6"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-switch"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSwitch")]),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("loading"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onChange"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("setLoading"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token attr-name"},"loading"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token operator"},"!"),n("loading"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-sub-component"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxIcon")]),n(),a("span",{class:"token attr-name"},"icon"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("HeartFilled"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("32"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h4")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},"hello World"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h4")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("paragraph"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxSkeleton")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u7531\u7EC4\u5408"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton")]),n(`
            `),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-custom"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"buttonShape"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("buttonShape"),a("span",{class:"token punctuation"},"}")]),n(`
            `),a("span",{class:"token attr-name"},"renderLayout"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"("),n(`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton.Image")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton.Title")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton.Paragraph")]),n(),a("span",{class:"token attr-name"},"row"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"FxSkeleton.Button")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
            `),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxSkeleton")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"FxGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),d=c("",26);function g(h,m,x,v,S,b){const s=l("CodeDemo");return u(),e("div",null,[i,p(s,{name:"Skeleton"},{default:o(()=>[r]),_:1}),d])}var F=t(k,[["render",g]]);export{y as __pageData,F as default};
