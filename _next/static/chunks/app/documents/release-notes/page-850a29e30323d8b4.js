(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462,529,532,593],{481:(e,t,n)=>{Promise.resolve().then(n.bind(n,6826))},6826:(e,t,n)=>{"use strict";n.d(t,{default:()=>m});var s=n(5155),a=n(8173),o=n.n(a),i=n(3611),l=n.n(i);let r=JSON.parse('{"en":{"How to Play":{"link":"How to Play","Rules Of Gamulpung":"#rulesofgamulpung"},"Release Notes":{"link":"Release Notes","V0.1.2":"#V0.1.2","V0.1.1":"#V0.1.1"},"Contribute Guide":{"link":"Contribute Guide","Overview":"#overviewofcontributersguide","About dashboard":"#aboutdashboard","About interactions":"#aboutinteractions","How to render tiles":"#howtorendertiles","Kinds of websocket events":"#kindsofwebsocketevents"},"Blog":{"link":"Blog","First Beta Test Statistics":"#firstbetateststatistics"}},"ko":{"플레이 방법":{"link":"How to Play","가물펑 규칙":"#가물펑규칙"},"릴리즈 노트":{"link":"Release Notes","버전 0.1.2":"#V0.1.2","버전 0.1.1":"#V0.1.1"},"기여 가이드":{"link":"Contribute Guide","개요":"#기여자가이드개요","대시보드란":"#대시보드에대하여","상호작용이란":"#상호작용에대하여","타일을 렌더링하는 법":"#타일렌더링방법","웹 소켓 이벤트 종류":"#웹소켓이벤트종류"},"블로그":{"link":"Blog","첫 베타 테스트 통계":"#첫베타테스트통계"}}}');var c=n(6046),u=n(6352),d=n(2115);function m(e){let{endpoint:t,files:n,dir:a}=e,[i,m]=(0,d.useState)(""),h=(0,c.useSearchParams)().get("lang")||"ko",g=r[h],k=async()=>{try{let e=n.map(e=>fetch("".concat("https://gamultong.github.io/gamulpung-client","/docs/").concat(h,"/").concat(a,"/").concat(e,".md")).then(t=>{if(!t.ok)throw Error("Failed to fetch ".concat(e));return t.text()})),t=(await Promise.all(e)).join("\n"),s=new u.Converter;s.setOption("tables",!0);let o=s.makeHtml(t);m(o)}catch(e){return console.error("Error fetching markdown files:",e),""}};return(0,d.useEffect)(()=>{k()},[h]),(0,s.jsxs)("div",{className:l().document,children:[(0,s.jsx)("aside",{className:l().aside,children:g&&Object.keys(g).map(e=>(0,s.jsxs)("details",{open:t===g[e].link,children:[(0,s.jsx)("summary",{children:e}),(0,s.jsx)("ul",{children:Object.entries(g[e]).map(t=>{let[n,a]=t;return"link"!==n?(0,s.jsx)(o(),{href:"".concat("https://gamultong.github.io/gamulpung-client","/documents/").concat(g[e].link.replace(/ /g,"-").toLowerCase(),"?lang=").concat(h).concat(a),children:(0,s.jsx)("li",{children:n})},n):null})})]},e))}),(0,s.jsx)("main",{className:l().main,dangerouslySetInnerHTML:{__html:i}})]})}},3611:e=>{e.exports={document:"style_document__HF8Fl",aside:"style_aside__1oGJF",main:"style_main__MDUgZ"}}},e=>{var t=t=>e(e.s=t);e.O(0,[440,28,352,441,517,358],()=>t(481)),_N_E=e.O()}]);