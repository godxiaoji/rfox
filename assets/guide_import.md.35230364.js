import{_ as n,c as a,o as s,e as t}from"./app.0ad8fcc6.js";const g='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 Vite \u521B\u5EFA\u9879\u76EE","slug":"\u4F7F\u7528-vite-\u521B\u5EFA\u9879\u76EE"},{"level":2,"title":"\u5F15\u5165 rfox","slug":"\u5F15\u5165-rfox"},{"level":2,"title":"API \u8C03\u7528","slug":"api-\u8C03\u7528"}],"relativePath":"guide/import.md"}',p={},e=t(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528-vite-\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u4F7F\u7528 Vite \u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u4F7F\u7528-vite-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code># npm 6.x
npm create vite@latest my-react-app --template react-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react-ts

# yarn
yarn create vite my-react-app --template react-ts

# pnpm
pnpm create vite my-react-app -- --template react-ts
</code></pre></div><h2 id="\u5F15\u5165-rfox" tabindex="-1">\u5F15\u5165 rfox <a class="header-anchor" href="#\u5F15\u5165-rfox" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code># npm
npm i -S @fox2/rfox

# yarn
yarn add @fox2/rfox

# pnpm
pnpm add @fox2/rfox
</code></pre></div><p>\u4FEE\u6539 <code>src/App.tsx</code>\uFF0C\u5F15\u5165 rfox \u7684\u6309\u94AE\u7EC4\u4EF6\u3002</p><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FxButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fox2/rfox&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@fox2/rfox/es/style&#39;</span>
<span class="token comment">// import &#39;@fox2/rfox/es/style/sass&#39; // use sass</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div><h2 id="api-\u8C03\u7528" tabindex="-1">API \u8C03\u7528 <a class="header-anchor" href="#api-\u8C03\u7528" aria-hidden="true">#</a></h2><p>API \u8C03\u7528\u9700\u8981\u5148\u5F15\u5165\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u65B9\u53EF\u8C03\u7528\uFF0C\u5F15\u7528\u65B9\u5F0F\u540C\u4E0A\u3002</p><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> showToast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fox2/rfox&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@fox2/rfox/es/Toast/style&#39;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FxButton</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;\u6210\u529F&#39;</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
          duration<span class="token operator">:</span> <span class="token number">2000</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Button
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FxButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>`,10),o=[e];function c(l,u,r,i,k,d){return s(),a("div",null,o)}var x=n(p,[["render",c]]);export{g as __pageData,x as default};
