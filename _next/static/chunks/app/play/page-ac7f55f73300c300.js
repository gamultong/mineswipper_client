(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{3356:(e,t,n)=>{Promise.resolve().then(n.bind(n,9963))},9963:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var r=n(5155),o=n(1269),i=n.n(o),l=n(2115);function s(){let[e,t]=(0,l.useState)({windowWidth:0,windowHeight:0});return(0,l.useEffect)(()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight});let e=()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}let a=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,i={setState:r,getState:o,getInitialState:()=>l,subscribe:e=>(n.add(e),()=>n.delete(e))},l=t=e(r,o,i);return i},c=e=>e?a(e):a,u=e=>e,d=e=>{let t=c(e),n=e=>(function(e,t=u){let n=l.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return l.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},f=e=>e?d(e):d,h=f(e=>({x:100,y:100,color:"blue",originX:100,originY:100,zoom:1,setColor:t=>e({color:t}),setX:t=>e({x:t}),setY:t=>e({y:t}),setZoom:t=>e({zoom:t}),goup:()=>e(e=>({originY:e.originY-1})),godown:()=>e(e=>({originY:e.originY+1})),goleft:()=>e(e=>({originX:e.originX-1})),goright:()=>e(e=>({originX:e.originX+1})),goUpLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY-1})),goUpRight:()=>e(e=>({originX:e.originX+1,originY:e.originY-1})),goDownLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY+1})),goDownRight:()=>e(e=>({originX:e.originX+1,originY:e.originY+1})),setOringinPosition:(t,n)=>e({originX:t,originY:n}),setPosition:(t,n)=>e({x:t,y:n})})),g=f(e=>({cursors:[],addCursors:t=>e(e=>({cursors:[...e.cursors,...t]})),removeCursor:t=>e(e=>({cursors:e.cursors.filter(e=>e!==t)})),setCursors:t=>e({cursors:t})}));var x=n(40),y=n.n(x);let v=JSON.parse('{"HP":{"inner":[["#8fe340","#A4E863"],["#62B628","#71C637"],["#F1FAD1","#E9F6B9"]],"outer":[["#A8EC67","#81D92C"],["#74C63C","#5BB31F"],["#E9FAAA","#F5FDD8"]]},"nf":["M219.428 109.389 C226.519 114.964 223.188 126.337 214.21 127.205 L79.8702 140.188 L115.929 28.0267 L219.428 109.389 Z","M79.9801 8.51632 C75.8798 9.72627 73.972 13.8825 73.0599 18.0591 L25.8244 234.356 C30.5707 235.401 36.0988 236 42 236 C45.1362 236 48.1671 235.831 51.0311 235.515 L116.451 28.5289 C117.573 24.9766 117.96 21.0358 115.39 18.3387 C112.87 15.6942 108.055 12.4097 98.862 9.69397 C89.7757 7.00975 83.7643 7.39963 79.9801 8.51632 Z"],"qN":[" M77.85 145.025 L0.899994 54.5752 L103.5 92.3752 L117 0.575195 L164.25 74.8252 L219.6 38.3752 L202.05 103.175 L276.3 108.575 L219.6 153.125 L287.1 223.325 L198 230.075 L177.75 312.425 L130.5 236.825 L67.05 284.075 L75.15 196.325 L11.7 177.425 L77.85 145.025 "," M67.05 104.525 L104.85 150.425 L71.1 169.325 L104.85 178.775 L100.8 226.025 L133.2 200.375 L158.85 239.525 L168.3 196.325 L218.25 192.275 L181.8 154.475 L212.85 131.525 L171 128.825 L181.8 93.7251 L152.1 113.975 L126.45 73.4751 L118.35 122.075 L67.05 104.525 "],"PN":"M12.2719 13.6437 C11.4141 6.37712 19.6676 1.61197 25.5317 5.9881 L165.217 110.229 C171.554 114.958 168.358 125.029 160.453 125.238 L100.228 126.83 C91.7695 127.053 83.9984 131.54 79.5756 138.753 L48.0844 190.114 C43.9511 196.855 33.6313 194.587 32.7043 186.735 L12.2719 13.6437 Z`","Ml":["#0059B280","#0095B280","#00B20080","#77B20080","#B2950080","#B24A0080","#B2000080","#7700B280"]}'),p=f(e=>({x:1/0,y:1/0,content:"",movecost:0,setMovecost:t=>e({movecost:t}),setPosition:(t,n,r)=>e({x:t,y:n,content:r})})),L=f(e=>({socket:null,message:"",isOpen:!1,connect:t=>{let n=new WebSocket(t);n.onopen=()=>e({socket:n,isOpen:!0}),n.onclose=()=>e({socket:null,isOpen:!1}),n.onmessage=t=>e({message:t.data})},disconnect:()=>{e(e=>{var t;return null===(t=e.socket)||void 0===t||t.close(),{socket:null,isOpen:!1}})},sendMessage:t=>{t&&e(e=>{var n;return e.isOpen&&(null===(n=e.socket)||void 0===n||n.send(t)),{}})}}));class w{constructor(e,t){this.x=e,this.y=t,this.g=1/0,this.h=0,this.f=1/0,this.parent=null}}let C=e=>{let{paddingTiles:t,tiles:n,tileSize:o,cursorOriginX:i,cursorOriginY:a,startPoint:c,setCachingTiles:u}=e,[d,f]=[i-c.x,a-c.y],[x,C]=[(t-1)*d/t,(t-1)*f/t],{qN:m,PN:S,nf:b,HP:E,Ml:_}=v,k={red:"#FF4D00",blue:"#0094FF",yellow:"#F0C800",purple:"#BC3FDC",0:"#FF4D00",1:"#F0C800",2:"#0094FF",3:"#BC3FDC"},{windowHeight:M,windowWidth:j}=s(),{x:F,y:R,godown:A,goleft:B,goright:P,goup:D,goDownLeft:O,goDownRight:N,goUpLeft:Y,goUpRight:I,zoom:X,color:T,setPosition:W}=h(),{setPosition:z,x:H,y:U,setMovecost:G}=p(),{cursors:J}=g(),{sendMessage:Z}=L(),K=(0,l.useRef)(null),q={tileCanvasRef:(0,l.useRef)(null),interactionCanvasRef:(0,l.useRef)(null),otherCursorsRef:(0,l.useRef)(null)},[Q,V]=(0,l.useState)(!0),[$,ee]=(0,l.useState)([]),[et,en]=(0,l.useState)({x:0,y:0}),[er,eo]=(0,l.useState)([]),[ei,el]=(0,l.useState)(),es=()=>{K.current&&(clearInterval(K.current),K.current=null)};(0,l.useEffect)(()=>{let e=e=>{e.preventDefault()};return window.addEventListener("contextmenu",e),()=>{window.removeEventListener("contextmenu",e),es()}},[]);let ea=(e,t)=>{if(K.current)return;let n=0,r=ef(d,f,e,t),i=r[n];if((null==i?void 0:i.x)===void 0||(null==i?void 0:i.y)===void 0)return;G(r.length-1),W(e+c.x,t+c.y);let l=(e,t)=>{let n=0,r=setInterval(()=>{let{tileCanvasRef:i,interactionCanvasRef:l,otherCursorsRef:s}=q;if(!i.current||!l.current||!s.current)return;let a=[i.current,l.current,s.current];if(n>=1){for(let e of a)e.style.transform="0";clearInterval(r);return}let[c,u]=[e*(o-(n+=.03333333333333333)*o),t*(o-n*o)];for(let e of a)e.style.transform="translate(".concat(c,"px, ").concat(u,"px)")},200/30)};K.current=setInterval(()=>{if(++n>=r.length){ee([]),es();return}let e=r[n];if(!e)return;let[t,o]=[Math.sign(e.x-i.x),Math.sign(e.y-i.y)];1===t&&1===o?N():1===t&&-1===o?I():1===t&&0===o?P():-1===t&&1===o?O():-1===t&&-1===o?Y():-1===t&&0===o?B():0===t&&1===o?A():0===t&&-1===o&&D(),i=e,l(t,o),ee(r.slice(n))},200)},ec=(e,t,n)=>{Z(JSON.stringify({event:"pointing",payload:{position:{x:e,y:t},click_type:n}}))},eu=function(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=X/3.5*i;e.fillStyle=r,e.save(),e.translate(t+o/6/i,n+o/6/i),e.scale(l,l),e.fill(null==ei?void 0:ei.cursor),e.restore()},ed=()=>{var e;let t=null===(e=q.otherCursorsRef.current)||void 0===e?void 0:e.getContext("2d");t&&(t.clearRect(0,0,j,M),J.forEach(e=>{let[n,r]=[e.x-i+x,e.y-a+C];eu(t,n*o,r*o,k[e.color])}))},ef=(e,t,r,o)=>{let[i,l]=[new w(e,t),new w(r,o)],s=[...n.map(e=>[...e.map(()=>null)])];n.forEach((e,t)=>{e.forEach((e,n)=>{["F","C"].some(t=>null==e?void 0:e.includes(t))||(s[t][n]=new w(n,t))})});let a=[i],c=[];for(i.g=0,i.f=i.g+i.h;a.length>0;){let n=a.reduce((e,t)=>e.f<t.f?e:t);if(n.x===l.x&&n.y===l.y){let r=[],o=n;for(en({x:o.x-e,y:o.y-t});o;)r.unshift(o),o=o.parent;return r}for(let{node:e,isDiagonal:t}of(a=a.filter(e=>e!==n),c.push(n),function(e,t){let n=[];for(let[r,o]of[[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let[i,l]=[t.x+r,t.y+o];l>=0&&l<e.length&&i>=0&&i<e[l].length&&null!==e[l][i]&&n.push({node:e[l][i],isDiagonal:0!==r&&0!==o})}return n}(s,n))){if(c.includes(e))continue;let r=n.g+(t?1.5:1);r>=e.g||(a.includes(e)||a.push(e),e.parent=n,e.g=r,e.h=Math.abs(e.x-l.x)+Math.abs(e.y-l.y),e.f=e.g+e.h)}}return[]},eh=()=>{let e=q.tileCanvasRef.current,r=q.interactionCanvasRef.current;if(!e||!r||0===o)return;let l=e.getContext("2d"),s=r.getContext("2d");if(!l||!s)return;s.clearRect(0,0,j,M);let c=5*X,u=d/t*o,h=f/t*o,g=u+(H-i)*o,y=h+(U-a)*o,v=new Path2D("\n      M0 0\n      L".concat(o," 0\n      L").concat(o," ").concat(o,"\n      L0 ").concat(o,"\n      L0 0\n      ")),p=new Path2D("\n      M".concat(c," ").concat(c,"\n      L").concat(o-c," ").concat(c,"\n      L").concat(o-c," ").concat(o-c,"\n      L").concat(c," ").concat(o-c,"\n      L").concat(c," ").concat(c,"\n      ")),L=k[T],w=F-i-x-et.x,m=R-a-C-et.y,S=[c,c,o-2*c,o-2*c],b=[0,0,o,o],A={inner:[l.createLinearGradient(...S),l.createLinearGradient(...S),l.createLinearGradient(...S)],outer:[l.createLinearGradient(...b),l.createLinearGradient(...b),l.createLinearGradient(...b)],flag:l.createLinearGradient(36.5,212.5,36.5,259)};A.flag.addColorStop(0,"#E8E8E8"),A.flag.addColorStop(1,"transparent"),A.inner.forEach((e,t)=>{e.addColorStop(0,E.inner[t][0]),e.addColorStop(1,E.inner[t][1])}),A.outer.forEach((e,t)=>{e.addColorStop(0,E.outer[t][0]),e.addColorStop(.4,E.outer[t][0]),e.addColorStop(.6,E.outer[t][1]),e.addColorStop(1,E.outer[t][1])}),null==n||n.forEach((e,t)=>{if(null==e||e.forEach((e,n)=>{var r;if((null===(r=er[t])||void 0===r?void 0:r[n])===e)return;let[i,a]=[(n-x)*o,(t-C)*o];if(!(i<-o)&&!(a<-o)&&!(i>j+o)&&!(a>M+o)){switch(l.save(),l.translate(i,a),e){case"C0":case"C1":case"F00":case"F01":case"FRED0":case"FRED1":case"F10":case"F11":case"FYELLOW0":case"FYELLOW1":case"F20":case"F21":case"FBLUE0":case"FBLUE1":case"F30":case"F31":case"FPURPLE0":case"FPURPLE1":{let r="0"===e.slice(-1)?0:1;if(l.fillStyle=A.outer[r],1>=Math.abs(t-f)&&1>=Math.abs(n-d)&&!(n===d&&t===f)&&e.includes("C")&&(eu(s,i,a,"#0000002f",.5),l.fillStyle="white"),l.fill(v),l.fillStyle=A.inner[r],l.fill(p),!e.includes("F"))break;l.restore(),l.save(),l.translate(i+o/6,a+o/6),l.scale(X/4.5,X/4.5),l.fillStyle=k[e.slice(1,-1).toLowerCase()],l.fill(null==ei?void 0:ei.flag.flag),l.fillStyle=A.flag,l.fill(null==ei?void 0:ei.flag.pole);break}case"O":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"B":if(l.fillStyle=A.outer[2],l.fill(v),l.fillStyle=A.inner[2],l.fill(p),"B"===e&&(l.scale(X/4,X/4),l.fillStyle="rgba(0, 0, 0, 0.6)",l.fill(null==ei?void 0:ei.boom.inner),l.fillStyle="rgba(0, 0, 0, 0.5)",l.fill(null==ei?void 0:ei.boom.outer)),l.restore(),parseInt(e)>0){let t=parseInt(e)-1;l.fillStyle=_[t],l.font=50*X+"px LOTTERIACHAB",l.textAlign="center",l.textBaseline="middle",l.fillText(e,i+o/2,a+o/2)}}l.restore()}}),t===Math.floor(3*n.length/10)){if(eu(s,u,h,L),ed(),s.beginPath(),s.strokeStyle=L,s.lineWidth=c,s.strokeRect(g+c/2,y+c/2,o-c,o-c),s.closePath(),$.length>0){let[e,t]=[$[0].x+w+.5,$[0].y+m+.5];s.beginPath(),s.strokeStyle="black",s.lineWidth=o/6,s.moveTo(e*o,t*o),$.forEach(e=>{let[t,n]=[e.x+w+.5,e.y+m+.5];s.lineTo(t*o,n*o)}),s.stroke()}eo(n)}})};return(0,l.useEffect)(()=>{if(!Q){eh();return}let e=new FontFace("LOTTERIACHAB","url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2')");Promise.all([e.load()]).then(()=>{el({cursor:new Path2D(S),flag:{flag:new Path2D(b[0]),pole:new Path2D(b[1])},boom:{inner:new Path2D(m[0]),outer:new Path2D(m[1])}}),V(!1),document.fonts.add(e)})},[n,Q,o,i,a,c,H,U,T,X]),(0,l.useEffect)(()=>ed(),[J]),(0,r.jsx)(r.Fragment,{children:Q?(0,r.jsxs)("div",{className:y().loading,children:[(0,r.jsx)("h1",{children:"Loading..."}),(0,r.jsx)("div",{className:"".concat(n.length<1?y().loadingBar:y().loadComplete)})]}):(0,r.jsxs)("div",{className:y().canvasContainer,children:[(0,r.jsx)("canvas",{className:y().canvas,id:"TileCanvas",ref:q.tileCanvasRef,width:j,height:M}),(0,r.jsx)("canvas",{className:y().canvas,id:"OtherCursors",ref:q.otherCursorsRef,width:j,height:M}),(0,r.jsx)("canvas",{className:y().canvas,id:"InteractionCanvas",ref:q.interactionCanvasRef,width:j,height:M,onClick:e=>{var t,r;let i=q.tileCanvasRef.current;if(!i)return;let{left:l,top:s}=i.getBoundingClientRect(),[a,d]=[e.clientX-l,e.clientY-s],[f,h]=[Math.floor(a/o+x),Math.floor(d/o+C)],[g,y]=[Math.round(f+c.x),Math.round(h+c.y)],v=null!==(r=null===(t=n[h])||void 0===t?void 0:t[f])&&void 0!==r?r:"Out of bounds";z(g,y,v);let p=2===e.buttons?"SPECIAL_CLICK":"GENERAL_CLICK";K.current&&(es(),u(n)),"GENERAL_CLICK"!==p||(null==v?void 0:v.includes("F"))||(null==v?void 0:v.includes("C"))||ea(f,h),ec(g,y,p)}})]})})};var m=n(8871),S=n.n(m);function b(e){let{time:t}=e;return(0,r.jsx)("div",{className:S().inactive,children:(0,r.jsxs)("div",{className:S().alert,children:[(0,r.jsx)("p",{children:"You`re stunned!"}),(0,r.jsx)("p",{children:"Try Again After"}),(0,r.jsxs)("p",{children:[Math.floor(t/60),":",(t%60).toString().padStart(2,"0")]})]})})}var E=n(7350),_=n.n(E);function k(){return(0,r.jsx)("svg",{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.436226 1.88654C0.321855 0.917668 1.42232 0.282312 2.2042 0.865797L20.8289 14.7645C21.6738 15.3951 21.2476 16.7379 20.1937 16.7657L12.1637 16.978C11.0359 17.0078 9.99976 17.606 9.41006 18.5678L5.21123 25.4159C4.66013 26.3147 3.28415 26.0124 3.16055 24.9653L0.436226 1.88654Z",fill:"white"})})}function M(){return(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20 5L26 5C26.5523 5 27 5.44772 27 6L27 12",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M12 27L6 27C5.44772 27 5 26.5523 5 26L5 20",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M5 12L5 6C5 5.44772 5.44772 5 6 5L12 5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M27 20L27 26C27 26.5523 26.5523 27 26 27L20 27",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]})}function j(){return(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"14",cy:"14",r:"9",stroke:"white",strokeWidth:"4"}),(0,r.jsx)("path",{d:"M27 27L21.5 21.5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]})}function F(){let{zoom:e,setZoom:t,originX:n,originY:o}=h(),{x:i,y:l}=p();return(0,r.jsxs)("div",{className:_().dashboard,children:[(0,r.jsxs)("div",{className:_().coordinates,children:[(0,r.jsxs)("p",{children:["\xa0",(0,r.jsx)(k,{}),"(",n,", ",o,")"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(M,{}),"\xa0(",i===1/0?"":i,", ",l===1/0?"":l,")"]})]}),(0,r.jsxs)("div",{className:_().zoom,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(j,{}),"\xa0",Math.ceil(100*e),"%"]}),(0,r.jsxs)("div",{className:_().buttons,children:[(0,r.jsx)("button",{onClick:()=>t(e/1.5>.15?e/1.5:e),children:"-"}),(0,r.jsx)("button",{onClick:()=>t(1.5*e<1.7?1.5*e:e),children:"+"})]})]})]})}function R(){let e="".concat("wss://a4ed-152-67-203-244.ngrok-free.app","/session"),{isOpen:t,message:n,sendMessage:o,connect:a,disconnect:c}=L(),{x:u,y:d,setColor:f,setPosition:x,zoom:y,setZoom:v,originX:w,originY:m,setOringinPosition:S}=h(),{setCursors:E,addCursors:_,cursors:k}=g(),{setPosition:M}=p(),{windowWidth:j,windowHeight:R}=s(),[A,B]=(0,l.useState)(0),[P,D]=(0,l.useState)({x:0,y:0}),[O,N]=(0,l.useState)({x:0,y:0}),[Y,I]=(0,l.useState)({x:0,y:0}),[X,T]=(0,l.useState)([]),[W,z]=(0,l.useState)([...X.map(e=>[...e])]),[H,U]=(0,l.useState)(-1),[G,J]=(0,l.useState)(!1),Z=(e,n,r,i,l)=>{if(!t||!G)return;let[s,a]=[Math.abs(r-e)+1,Math.abs(n-i)+1];T(e=>{let t=[...e];switch(l){case"U":for(let e=0;e<a;e++)t.unshift([...Array(s).fill("??")]),t.pop();break;case"D":for(let e=0;e<a;e++)t.push([...Array(s).fill("??")]),t.shift();break;case"L":for(let e=0;e<a;e++)t[e]=[...Array(s).fill("??"),...t[e].slice(0,-1)];break;case"R":for(let e=0;e<a;e++)t[e]=[...t[e].slice(s,t[0].length),...Array(s).fill("??")];break;case"A":t=Array.from({length:a},()=>Array.from({length:s},()=>"??"))}return t}),o(JSON.stringify({event:"fetch-tiles",payload:{start_p:{x:e,y:n},end_p:{x:r,y:i}}}))};(0,l.useEffect)(()=>(document.documentElement.style.overflow="hidden",J(!1),v(1),()=>{document.documentElement.style.overflow="auto",c()}),[]),(0,l.useEffect)(()=>{if(!t&&P.x!==O.x&&O.y!==P.y){U(-1);let[t,n]=[O.x-P.x+1,O.y-P.y+1];a(e+"?view_width=".concat(t,"&view_height=").concat(n))}},[t,P,O]);let K=e=>{let t=e.match(/.{1,2}/g);if(!t)return"";let n=t.map(e=>parseInt(e,16).toString(2).padStart(8,"0")).join(""),r="1"===n[0],o="1"===n[1],i="1"===n[2],l=parseInt(n.slice(3,5),2).toString(),s=parseInt(n.slice(5),2);return r?o?"B":0===s?"O":s.toString():i?"F"+l:"C"},q=(e,t,n,r,o)=>{let[i,l]=[2*Math.abs(e-n+1),Math.abs(r-t+1)],s=[];for(let e=0;e<l;e++){let t=[],n=o.slice(e*i,(e+1)*i);for(let e=0;e<i/2;e++){let r=n.slice(2*e,2*e+2);t[e]=K(r)}s[e]=t}return s.reverse(),{rowlength:i,columnlength:l,sortedTiles:s}},Q=(e,t,n,r,o,i)=>{if(0===o.length)return;let{rowlength:l,columnlength:s,sortedTiles:a}=q(e,t,n,r,o),c=[...X];for(let e=0;e<s;e++){var u;let r=e;"All"===i&&d<t&&(r+=O.y-P.y-s+1),"PART"===i&&(r+=t-P.y),c[r]=null!==(u=c[r])&&void 0!==u?u:[];for(let o=0;o<l;o++){let i=a[e][o];["C","F"].some(e=>null==i?void 0:i.includes(e))&&(i+=(e-t+o-n)%2==0?"0":"1"),i&&(c[r][o+n-P.x]=i)}}T(c)};return(0,l.useEffect)(()=>{if(n)try{let{event:t,payload:r}=JSON.parse(n);switch(t){case"tiles":{let{tiles:e,start_p:t,end_p:n}=r,{x:o,y:i}=t,{x:l,y:s}=n;Q(l,s,o,i,e,"All");break}case"flag-set":{let{position:e,is_set:t,color:n}=r,{x:o,y:i}=e,l=[...X];l[i-P.y][o-P.x]=(t?"F"+n:"C")+((o+i)%2==0?"0":"1"),T(l);break}case"single-tile-opened":{let{position:e,tile:t}=r,{x:n,y:o}=e,i=[...X];i[o-P.y][n-P.x]=K(t),T(i);break}case"tiles-opened":{let{tiles:e,start_p:t,end_p:n}=r,{x:o,y:i}=t,{x:l,y:s}=n;Q(l,s,o,i,e,"PART");break}case"my-cursor":{let{position:e,pointer:t,color:n}=r;S(e.x,e.y),x(e.x,e.y),f(n.toLowerCase()),t&&M(t.x,t.y,""),setTimeout(()=>J(!0),0);break}case"you-died":{var e;let{revive_at:t}=r,n=Math.floor((((e=new Date(t),void 0===e)?void 0:e.getTime())-Date.now())/1e3);U(n);break}case"cursors":{let{cursors:e}=r,t=e.map(e=>{let{position:{x:t,y:n},color:r}=e;return{x:t,y:n,color:r.toLowerCase()}});_(t);break}case"moved":{let{origin_position:e,new_position:t,color:n}=r,{x:o,y:i}=e,{x:l,y:s}=t,a=[...k],c=a.findIndex(e=>{let{x:t,y:r,color:l}=e;return t===o&&r===i&&l===n.toLowerCase()});-1!==c&&(a[c]={x:l,y:s,color:n.toLowerCase()}),E(a);break}case"cursor-quit":{let{color:e,position:t}=r,n=[...k],o=n.findIndex(n=>{let{x:r,y:o,color:i}=n;return r===t.x&&o===t.y&&i===e.toLowerCase()});-1!==o&&n.splice(o,1),E(n);break}case"error":{let{msg:e}=r;console.error(e)}}}catch(e){console.error(e)}},[n]),(0,l.useEffect)(()=>{let e=[...X.map(e=>[...e.map(()=>"??")])];for(let r=0;r<X.length;r++){let o=r+m-d;for(let i=0;i<X[r].length;i++){var t,n;let l=i+w-u;(null===(t=X[o])||void 0===t?void 0:t[l])&&(e[r][i]=(null===(n=X[o])||void 0===n?void 0:n[l])||"??")}}z(e)},[X,w,m]),(0,l.useEffect)(()=>{let e=80*y,[t,n]=[Math.floor(2*j/e/2),Math.floor(2*R/e/2)];n<1||t<1||(D({x:u-t,y:d-n}),N({x:u+t,y:d+n}),I({x:w-t,y:m-n}),B(e))},[j,R,y,w,m,u,d,2,G]),(0,l.useEffect)(()=>{if(!G)return;let e=80*y,[t,n]=[Math.floor(2*j/e),Math.floor(2*R/e)],[r,i]=[Math.floor(t/2),Math.floor(n/2)],[l,s]=[0,0];t>O.x-P.x+1||n>O.y-P.y+1?(l=Math.floor(i-(O.y-P.y)/2),s=Math.round(r-(O.x-P.x)/2)):(l=-Math.round((O.y-P.y-n)/2),s=-Math.round((O.x-P.x-t)/2)),Z(P.x-s,O.y+l,O.x+s,P.y-l,"A"),o(JSON.stringify({event:"set-view-size",payload:{width:Math.floor(Math.floor(2*j/e)),height:Math.floor(Math.floor(2*R/e))}}))},[j,R,y,2,G]),(0,l.useEffect)(()=>{let[e,t]=[u-w,d-m],[n,r]=[e<0,e>0],[o,i]=[t<0,t>0],{upfrom:l,upto:s,downfrom:a,downto:c,leftfrom:f,leftto:h,rightfrom:g,rightto:x}={upfrom:P.y-1,upto:P.y+t,downfrom:O.y+t,downto:O.y+1,leftfrom:P.x+e,leftto:P.x-1,rightfrom:O.x+1,rightto:O.x+e};r&&i?(Z(g,a,x,s,"R"),Z(f,a,x,c,"D")):n&&i?(Z(f,a,h,s,"L"),Z(f,a,x,c,"D")):r&&o?(Z(g,a,x,s,"R"),Z(f,l,x,s,"U")):n&&o?(Z(f,a,h,s,"L"),Z(f,l,x,s,"U")):r?Z(g,O.y,x,P.y,"R"):n?Z(f,O.y,h,P.y,"L"):i?Z(P.x,a,O.x,c,"D"):o&&Z(P.x,l,O.x,s,"U")},[u,d]),(0,l.useEffect)(()=>{G&&o(JSON.stringify({event:"moving",payload:{position:{x:w,y:m}}}))},[w,m]),(0,l.useEffect)(()=>{setTimeout(()=>U(e=>e>0?--e:e),1e3)},[H]),(0,r.jsxs)("div",{className:i().page,children:[H>0&&(0,r.jsx)(b,{time:H}),(0,r.jsx)(F,{}),(0,r.jsx)(C,{paddingTiles:2,tiles:W,setCachingTiles:T,tileSize:A,startPoint:Y,cursorOriginX:w,cursorOriginY:m})]})}},1269:e=>{e.exports={page:"page_page__9CbJ0"}},40:e=>{e.exports={loading:"style_loading__42LVe",loadingBar:"style_loadingBar__AtBJr",loadingAnimation:"style_loadingAnimation__ScSQQ",loadComplete:"style_loadComplete__SRD5Z",canvasContainer:"style_canvasContainer__nKMjH",canvas:"style_canvas__m8mJO"}},7350:e=>{e.exports={dashboard:"style_dashboard__nDsof",coordinates:"style_coordinates__3RzzR",zoom:"style_zoom__EWfUf",buttons:"style_buttons__zf0nF"}},8871:e=>{e.exports={inactive:"style_inactive__B_gRa",alert:"style_alert__pv_lG"}}},e=>{var t=t=>e(e.s=t);e.O(0,[991,441,517,358],()=>t(3356)),_N_E=e.O()}]);