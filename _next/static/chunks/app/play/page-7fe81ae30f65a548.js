(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{3356:(e,t,n)=>{Promise.resolve().then(n.bind(n,5017))},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},5353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(2115);function o(e,t){let n=(0,r.useRef)(()=>{}),o=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),o.current()):(n.current=i(e,r),o.current=i(t,r))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5017:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>X});var r=n(5155),o=n(1269),i=n.n(o),l=n(2115);function s(){let[e,t]=(0,l.useState)({windowWidth:0,windowHeight:0});return(0,l.useEffect)(()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight});let e=()=>{t({windowWidth:1.1*window.innerWidth,windowHeight:1.1*window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}let a=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,i={setState:r,getState:o,getInitialState:()=>l,subscribe:e=>(n.add(e),()=>n.delete(e))},l=t=e(r,o,i);return i},c=e=>e?a(e):a,u=e=>e,d=e=>{let t=c(e),n=e=>(function(e,t=u){let n=l.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return l.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},f=e=>e?d(e):d,h=f(e=>({id:"",x:100,y:100,color:"blue",originX:100,originY:100,zoom:1,setId:t=>e({id:t}),setColor:t=>e({color:t}),setX:t=>e({x:t}),setY:t=>e({y:t}),setZoom:t=>e({zoom:t}),goup:()=>e(e=>({originY:e.originY-1})),godown:()=>e(e=>({originY:e.originY+1})),goleft:()=>e(e=>({originX:e.originX-1})),goright:()=>e(e=>({originX:e.originX+1})),goUpLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY-1})),goUpRight:()=>e(e=>({originX:e.originX+1,originY:e.originY-1})),goDownLeft:()=>e(e=>({originX:e.originX-1,originY:e.originY+1})),goDownRight:()=>e(e=>({originX:e.originX+1,originY:e.originY+1})),setOringinPosition:(t,n)=>e({originX:t,originY:n}),setPosition:(t,n)=>e({x:t,y:n})})),g=f(e=>({cursors:[],addCursors:t=>e(e=>({cursors:[...e.cursors,...t]})),removeCursor:t=>e(e=>({cursors:e.cursors.filter(e=>e!==t)})),setCursors:t=>e({cursors:t})}));var v=n(40),x=n.n(v);let p=JSON.parse('{"HP":{"inner":[["#8fe340","#A4E863"],["#62B628","#71C637"],["#F1FAD1","#E9F6B9"]],"outer":[["#A8EC67","#81D92C"],["#74C63C","#5BB31F"],["#E9FAAA","#F5FDD8"]]},"nf":["M219.428 109.389 C226.519 114.964 223.188 126.337 214.21 127.205 L79.8702 140.188 L115.929 28.0267 L219.428 109.389 Z","M79.9801 8.51632 C75.8798 9.72627 73.972 13.8825 73.0599 18.0591 L25.8244 234.356 C30.5707 235.401 36.0988 236 42 236 C45.1362 236 48.1671 235.831 51.0311 235.515 L116.451 28.5289 C117.573 24.9766 117.96 21.0358 115.39 18.3387 C112.87 15.6942 108.055 12.4097 98.862 9.69397 C89.7757 7.00975 83.7643 7.39963 79.9801 8.51632 Z"],"qN":[" M77.85 145.025 L0.899994 54.5752 L103.5 92.3752 L117 0.575195 L164.25 74.8252 L219.6 38.3752 L202.05 103.175 L276.3 108.575 L219.6 153.125 L287.1 223.325 L198 230.075 L177.75 312.425 L130.5 236.825 L67.05 284.075 L75.15 196.325 L11.7 177.425 L77.85 145.025 "," M67.05 104.525 L104.85 150.425 L71.1 169.325 L104.85 178.775 L100.8 226.025 L133.2 200.375 L158.85 239.525 L168.3 196.325 L218.25 192.275 L181.8 154.475 L212.85 131.525 L171 128.825 L181.8 93.7251 L152.1 113.975 L126.45 73.4751 L118.35 122.075 L67.05 104.525 "],"PN":"M12.2719 13.6437 C11.4141 6.37712 19.6676 1.61197 25.5317 5.9881 L165.217 110.229 C171.554 114.958 168.358 125.029 160.453 125.238 L100.228 126.83 C91.7695 127.053 83.9984 131.54 79.5756 138.753 L48.0844 190.114 C43.9511 196.855 33.6313 194.587 32.7043 186.735 L12.2719 13.6437 Z`","Ml":["#0059B280","#0095B280","#00B20080","#77B20080","#B2950080","#B24A0080","#B2000080","#7700B280"],"HG":["M129.815 125.662C130.503 123.446 133.497 123.446 134.185 125.662L139.22 141.887C139.527 142.878 140.409 143.549 141.404 143.549H157.699C159.924 143.549 160.849 146.53 159.049 147.899L145.866 157.927C145.061 158.539 144.724 159.625 145.032 160.616L150.067 176.841C150.755 179.057 148.333 180.899 146.533 179.53L133.35 169.502C132.545 168.89 131.455 168.89 130.65 169.502L117.467 179.53C115.667 180.899 113.245 179.057 113.933 176.841L118.968 160.616C119.276 159.625 118.939 158.539 118.134 157.927L104.951 147.899C103.151 146.53 104.076 143.549 106.301 143.549H122.596C123.591 143.549 124.473 142.878 124.78 141.887L129.815 125.662Z","M194.44 89.187C194.931 87.6043 197.069 87.6043 197.56 89.187L201.157 100.776C201.377 101.484 202.007 101.963 202.717 101.963H214.356C215.946 101.963 216.606 104.093 215.321 105.071L205.905 112.234C205.329 112.671 205.089 113.446 205.309 114.154L208.905 125.744C209.396 127.326 207.666 128.642 206.38 127.664L196.964 120.501C196.389 120.064 195.611 120.064 195.036 120.501L185.62 127.664C184.334 128.642 182.604 127.326 183.095 125.744L186.691 114.154C186.911 113.446 186.671 112.671 186.095 112.234L176.679 105.071C175.394 104.093 176.054 101.963 177.644 101.963H189.283C189.993 101.963 190.623 101.484 190.843 100.776L194.44 89.187Z","M170 93.7976C170 90.9223 167.92 88.439 165.054 88.2051C163.391 88.0694 161.705 88 160 88C139.889 88 122.445 97.66 113.794 111.795C111.465 115.603 114.57 120 119.034 120C121.483 120 123.681 118.599 125.072 116.583C131.592 107.134 144.005 100 160 100C160.973 100 161.933 100.026 162.879 100.078C166.586 100.281 170 97.5106 170 93.7976ZM206 132C202.686 132 200.06 134.723 199.266 137.94C196.313 149.9 184.652 160.816 167.768 163.416C164.571 163.908 162 166.522 162 169.756C162 173.154 164.823 175.908 168.191 175.457C190.725 172.44 208.443 157.177 211.524 137.977C212.049 134.705 209.314 132 206 132Z"]}'),y=f(e=>({x:1/0,y:1/0,content:"",movecost:0,setMovecost:t=>e({movecost:t}),setPosition:(t,n,r)=>e({x:t,y:n,content:r})})),C=f(e=>({socket:null,message:"",isOpen:!1,connect:t=>{let n=new WebSocket(t);n.onopen=()=>e({socket:n,isOpen:!0}),n.onclose=()=>e({socket:null,isOpen:!1}),n.onmessage=t=>e({message:t.data})},disconnect:()=>{e(e=>{var t;return null===(t=e.socket)||void 0===t||t.close(),{socket:null,isOpen:!1}})},sendMessage:t=>{t&&e(e=>{var n;return e.isOpen&&(null===(n=e.socket)||void 0===n||n.send(t)),{}})}}));var w=n(4706),L=n.n(w);function m(e){let{isClient:t,x:n,y:o,color:i,msg:s}=e,[a,c]=(0,l.useState)(s||""),[u,d]=(0,l.useState)(0),[f,h]=(0,l.useState)(0),{sendMessage:g}=C(),v=(0,l.useRef)(null),x=(0,l.useRef)(null),p=(0,l.useRef)();(0,l.useEffect)(()=>{x.current&&d(null==x?void 0:x.current.getBoundingClientRect().width)},[a]),(0,l.useEffect)(()=>{clearTimeout(p.current),f>0&&(p.current=setTimeout(()=>h(f-1),1e3))},[f]);let y=e=>{if("Enter"===e.key&&t){var n;h(8),null===(n=v.current)||void 0===n||n.focus()}"Escape"===e.key&&t&&(c(""),h(0))};return(0,l.useEffect)(()=>(window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)),[]),(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsxs)("form",{className:L().chat,onSubmit:e=>{e.preventDefault(),""===a||f<=0||(g(JSON.stringify({event:"send-chat",payload:{message:a}})),c(""))},style:{left:"51%",top:"51%",backgroundColor:i,opacity:f>4?1:f/4},children:[(0,r.jsx)("input",{type:"text",ref:v,className:L().message,value:a,maxLength:40,onChange:e=>{c(e.target.value),h(8)},style:{width:"".concat(u+5,"px"),color:"yellow"===i?"black":"white"}}),(0,r.jsx)("div",{ref:x,"aria-hidden":!0,children:a})]}),!t&&(0,r.jsx)("div",{className:L().chat,style:{left:"".concat(n,"%"),top:"".concat(o,"%"),backgroundColor:i},children:(0,r.jsx)("p",{className:L().message,children:a})})]})}class _{constructor(e,t){this.x=e,this.y=t,this.g=1/0,this.h=0,this.f=1/0,this.parent=null}}let k=e=>{let{paddingTiles:t,tiles:n,tileSize:o,cursorOriginX:i,cursorOriginY:a,startPoint:c,leftReviveTime:u,setCachingTiles:d}=e,[f,v]=[i-c.x,a-c.y],[w,L]=[(t-1)*f/t,(t-1)*v/t],{qN:k,PN:b,nf:j,HG:S,HP:E,Ml:M}=p,F={red:"#FF4D00",blue:"#0094FF",yellow:"#F0C800",purple:"#BC3FDC",0:"#FF4D00",1:"#F0C800",2:"#0094FF",3:"#BC3FDC"},P={red:"#FBCBB6",blue:"#A8DBFF",yellow:"#FFEE99",purple:"#E8BEF3",0:"#FBCBB6",1:"#A8DBFF",2:"#FFEE99",3:"#E8BEF3"},{windowHeight:R,windowWidth:B}=s(),{x:D,y:N,godown:O,goleft:A,goright:I,goup:T,goDownLeft:Y,goDownRight:W,goUpLeft:X,goUpRight:H,zoom:z,color:J,setPosition:U}=h(),{setPosition:Z,x:G,y:K,setMovecost:q}=y(),{cursors:V}=g(),{sendMessage:Q}=C(),$=(0,l.useRef)(null),ee={tileCanvasRef:(0,l.useRef)(null),interactionCanvasRef:(0,l.useRef)(null),otherCursorsRef:(0,l.useRef)(null),otherPointerRef:(0,l.useRef)(null)},[et,en]=(0,l.useState)(!0),[er,eo]=(0,l.useState)([]),[ei,el]=(0,l.useState)({x:0,y:0}),[es,ea]=(0,l.useState)([]),[ec,eu]=(0,l.useState)(),ed=()=>{$.current&&(clearInterval($.current),$.current=null)};(0,l.useEffect)(()=>{let e=e=>e.preventDefault();return window.addEventListener("contextmenu",e),()=>{window.removeEventListener("contextmenu",e),ed()}},[]);let ef=e=>!["F","C"].some(t=>e.includes(t)),eh=(e,t,n,r,i)=>{if($.current)return;let l=0,s=eL(f,v,e,t),a=s[l];if((null==a?void 0:a.x)===void 0||(null==a?void 0:a.y)===void 0)return;q(s.length-1),U(e+c.x,t+c.y);let u=(e,t)=>{let n=0,r=setInterval(()=>{let{tileCanvasRef:i,interactionCanvasRef:l,otherCursorsRef:s}=ee;if(!i.current||!l.current||!s.current)return;let a=[i.current,l.current,s.current];if(n>=1){for(let e of a)e.style.transform="0";clearInterval(r);return}let[c,u]=[e*(o-(n+=.03333333333333333)*o),t*(o-n*o)];for(let e of a)e.style.transform="translate(".concat(c,"px, ").concat(u,"px)")},200/30)};$.current=setInterval(()=>{if(++l>=s.length){eg(n,r,i),eo([]),ed();return}let e=s[l];if(!e)return;let[t,o]=[Math.sign(e.x-a.x),Math.sign(e.y-a.y)];1===t&&1===o?W():1===t&&-1===o?H():1===t&&0===o?I():-1===t&&1===o?Y():-1===t&&-1===o?X():-1===t&&0===o?A():0===t&&1===o?O():0===t&&-1===o&&T(),a=e,u(t,o),eo(s.slice(l))},200)},eg=(e,t,n)=>{Q(JSON.stringify({event:"pointing",payload:{position:{x:e,y:t},click_type:n}}))},ev=(e,t)=>{for(let[n,r]of[[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let[o,l]=[i+n,a+r];if(o===e&&l===t)return!0}return!1},ex=(e,t)=>{for(let[r,o]of[[0,0],[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let[i,l]=[e+r,t+o];if(l>=0&&l<n.length&&i>=0&&i<n[l].length&&ef(n[l][i]))return{x:i,y:l}}return{x:1/0,y:1/0}},ep=function(e,t,n,r,i,l){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,a=z/3.5*s;if(e.fillStyle=r,e.save(),null!==l){let[r,i]=[2*Math.cos(l-1/4)*Math.PI,2*Math.sin(l-1/4)*Math.PI];e.translate(t-r*o/18/s+o/2,n-i*o/18/s+o/2),e.rotate(l-Math.PI/24*8)}else e.translate(t+o/6/s,n+o/6/s);if(e.scale(a,a),e.fill(null==ec?void 0:ec.cursor),e.restore(),i&&Date.now()<i&&(null==ec?void 0:ec.stun)){let r=z/2*s;e.save(),e.translate(t-o/2/s,n-o/2/s),e.fillStyle="white",e.strokeStyle="black",e.scale(r,r);for(let t=0;t<(null==ec?void 0:ec.stun.length);t++)e.fill(ec.stun[t]),e.stroke(ec.stun[t])}e.restore()},ey=()=>{var e;let t=null===(e=ee.otherCursorsRef.current)||void 0===e?void 0:e.getContext("2d");t&&(t.clearRect(0,0,B,R),V.forEach(e=>{var n,r,l,s;let[c,u]=[e.x-i+w,e.y-a+L],[d,f]=[e.x-(null!==(l=null===(n=e.pointer)||void 0===n?void 0:n.x)&&void 0!==l?l:e.x),e.y-(null!==(s=null===(r=e.pointer)||void 0===r?void 0:r.y)&&void 0!==s?s:e.y)],h=null;(0!==d||0!==f)&&(h=Math.atan2(f,d)),ep(t,c*o,u*o,F[e.color],e.revive_at||null,h)}))},eC=(e,t,n,r,i)=>{e&&(e.beginPath(),e.strokeStyle=r,e.lineWidth=i,e.strokeRect(t+i/2,n+i/2,o-i,o-i),e.closePath())},ew=e=>{var t;let n=null===(t=ee.otherPointerRef.current)||void 0===t?void 0:t.getContext("2d");n&&(n.clearRect(0,0,B,R),V.forEach(t=>{let[r,l]=[t.x-i+w,t.y-a+L];eC(n,r*o,l*o,P[t.color],e)}))},eL=(e,t,r,o)=>{let[i,l]=[new _(e,t),new _(r,o)],s=[...n.map(e=>[...e.map(()=>null)])];n.forEach((e,t)=>{e.forEach((e,n)=>{ef(e)&&(s[t][n]=new _(n,t))})});let a=[i],c=[];for(i.g=0,i.f=i.g+i.h;a.length>0;){let n=a.reduce((e,t)=>e.f<t.f?e:t);if(n.x===l.x&&n.y===l.y){let r=[],o=n;for(el({x:o.x-e,y:o.y-t});o;)r.unshift(o),o=o.parent;return r}for(let{node:e,isDiagonal:t}of(a=a.filter(e=>e!==n),c.push(n),function(e,t){let n=[];for(let[r,o]of[[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]]){let[i,l]=[t.x+r,t.y+o];l>=0&&l<e.length&&i>=0&&i<e[l].length&&null!==e[l][i]&&n.push({node:e[l][i],isDiagonal:0!==r&&0!==o})}return n}(s,n))){if(c.includes(e))continue;let r=n.g+(t?1.5:1);r>=e.g||(a.includes(e)||a.push(e),e.parent=n,e.g=r,e.h=Math.abs(e.x-l.x)+Math.abs(e.y-l.y),e.f=e.g+e.h)}}return[]},em=()=>{let e=ee.tileCanvasRef.current,r=ee.interactionCanvasRef.current;if(!e||!r||0===o)return;let l=e.getContext("2d"),s=r.getContext("2d");if(!l||!s)return;s.clearRect(0,0,B,R);let c=5*z,u=f/t*o,d=v/t*o,h=u+(G-i)*o,g=d+(K-a)*o,x=new Path2D("\n      M0 0\n      L".concat(o," 0\n      L").concat(o," ").concat(o,"\n      L0 ").concat(o,"\n      L0 0\n      ")),p=new Path2D("\n      M".concat(c," ").concat(c,"\n      L").concat(o-c," ").concat(c,"\n      L").concat(o-c," ").concat(o-c,"\n      L").concat(c," ").concat(o-c,"\n      L").concat(c," ").concat(c,"\n      ")),y=F[J],C=D-i-w-ei.x,m=N-a-L-ei.y,_=[c,c,o-2*c,o-2*c],k=[0,0,o,o],b={inner:[l.createLinearGradient(..._),l.createLinearGradient(..._),l.createLinearGradient(..._)],outer:[l.createLinearGradient(...k),l.createLinearGradient(...k),l.createLinearGradient(...k)],flag:l.createLinearGradient(36.5,212.5,36.5,259)};b.flag.addColorStop(0,"#E8E8E8"),b.flag.addColorStop(1,"transparent"),b.inner.forEach((e,t)=>{e.addColorStop(0,E.inner[t][0]),e.addColorStop(1,E.inner[t][1])}),b.outer.forEach((e,t)=>{e.addColorStop(0,E.outer[t][0]),e.addColorStop(.4,E.outer[t][0]),e.addColorStop(.6,E.outer[t][1]),e.addColorStop(1,E.outer[t][1])}),null==n||n.forEach((e,t)=>{if(null==e||e.forEach((e,n)=>{var r;if((null===(r=es[t])||void 0===r?void 0:r[n])===e)return;let[i,a]=[(n-w)*o,(t-L)*o];if(!(i<-o)&&!(a<-o)&&!(i>B+o)&&!(a>R+o)){switch(l.save(),l.translate(i,a),e){case"C0":case"C1":case"F00":case"F01":case"FRED0":case"FRED1":case"F10":case"F11":case"FYELLOW0":case"FYELLOW1":case"F20":case"F21":case"FBLUE0":case"FBLUE1":case"F30":case"F31":case"FPURPLE0":case"FPURPLE1":{let r="0"===e.slice(-1)?0:1;if(l.fillStyle=b.outer[r],1>=Math.abs(t-v)&&1>=Math.abs(n-f)&&!(n===f&&t===v)&&e.includes("C")&&(ep(s,i,a,"#0000002f",null,null,.5),l.fillStyle="white"),l.fill(x),l.fillStyle=b.inner[r],l.fill(p),!e.includes("F"))break;l.restore(),l.save(),l.translate(i+o/6,a+o/6),l.scale(z/4.5,z/4.5),l.fillStyle=F[e.slice(1,-1).toLowerCase()],l.fill(null==ec?void 0:ec.flag.flag),l.fillStyle=b.flag,l.fill(null==ec?void 0:ec.flag.pole);break}case"O":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"B":if(l.fillStyle=b.outer[2],l.fill(x),l.fillStyle=b.inner[2],l.fill(p),"B"===e&&(l.scale(z/4,z/4),l.fillStyle="rgba(0, 0, 0, 0.6)",l.fill(null==ec?void 0:ec.boom.inner),l.fillStyle="rgba(0, 0, 0, 0.5)",l.fill(null==ec?void 0:ec.boom.outer)),l.restore(),parseInt(e)>0){let t=parseInt(e)-1;l.fillStyle=M[t],l.font=50*z+"px LOTTERIACHAB",l.textAlign="center",l.textBaseline="middle",l.fillText(e,i+o/2,a+o/2)}}l.restore()}}),t===Math.floor(3*n.length/10)){let[e,t]=[i-G,a-K],r=null;if((0!==e||0!==t)&&(r=Math.atan2(t,e)),ep(s,u,d,y,null,r),eC(s,h,g,y,c),ey(),ew(c),er.length>0){let[e,t]=[er[0].x+C+.5,er[0].y+m+.5];s.beginPath(),s.strokeStyle="black",s.lineWidth=o/6,s.moveTo(e*o,t*o),er.forEach(e=>{let[t,n]=[e.x+C+.5,e.y+m+.5];s.lineTo(t*o,n*o)}),s.stroke()}ea(n)}})};return(0,l.useEffect)(()=>{if(!et){em();return}let e=new FontFace("LOTTERIACHAB","url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2')");Promise.all([e.load()]).then(()=>{eu({cursor:new Path2D(b),stun:[new Path2D(S[0]),new Path2D(S[1]),new Path2D(S[2])],flag:{flag:new Path2D(j[0]),pole:new Path2D(j[1])},boom:{inner:new Path2D(k[0]),outer:new Path2D(k[1])}}),en(!1),document.fonts.add(e)})},[n,et,o,i,a,c,G,K,J,z]),(0,l.useEffect)(()=>{ey(),ew(5*z)},[V]),(0,r.jsx)(r.Fragment,{children:et?(0,r.jsxs)("div",{className:x().loading,children:[(0,r.jsx)("h1",{children:"Loading..."}),(0,r.jsx)("div",{className:"".concat(n.length<1?x().loadingBar:x().loadComplete)})]}):(0,r.jsxs)("div",{className:"".concat(x().canvasContainer," ").concat(u>0?x().vibration:""),children:[(0,r.jsx)(m,{color:J,isClient:!0,x:i,y:a}),(0,r.jsx)("canvas",{className:x().canvas,id:"TileCanvas",ref:ee.tileCanvasRef,width:B,height:R}),(0,r.jsx)("canvas",{className:x().canvas,id:"OtherCursors",ref:ee.otherCursorsRef,width:B,height:R}),(0,r.jsx)("canvas",{className:x().canvas,id:"OtherPointer",ref:ee.otherPointerRef,width:B,height:R}),(0,r.jsx)("canvas",{className:x().canvas,id:"InteractionCanvas",ref:ee.interactionCanvasRef,width:B,height:R,onPointerDown:e=>{var t,r;let i=ee.tileCanvasRef.current;if(!i)return;let{left:l,top:s}=i.getBoundingClientRect(),[a,u]=[e.clientX-l,e.clientY-s],[f,h]=[Math.floor(a/o+w),Math.floor(u/o+L)],[g,v]=[Math.round(f+c.x),Math.round(h+c.y)],x=null!==(r=null===(t=n[h])||void 0===t?void 0:t[f])&&void 0!==r?r:"Out of bounds";Z(g,v,x);let p=2===e.buttons?"SPECIAL_CLICK":"GENERAL_CLICK";if($.current&&(ed(),d(n)),eg(g,v,p),"SPECIAL_CLICK"===p&&!x.includes("C"))return;if(ev(g,v)){eh(f,h,g,v,p);return}let{x:y,y:C}=ex(f,h);eh(y,C,g,v,p)}})]})})};var b=n(8871),j=n.n(b);function S(e){let{time:t}=e;return(0,r.jsxs)("div",{className:j().inactive,children:[(0,r.jsxs)("div",{className:j().alert,children:[(0,r.jsx)("p",{children:"You`re stunned!"}),(0,r.jsx)("p",{children:"Try Again After"}),(0,r.jsxs)("p",{children:[Math.floor(t/60),":",(t%60).toString().padStart(2,"0")]})]}),(0,r.jsx)("div",{className:j().ad,children:"광고 받습니다: kkh061101@naver.com"})]})}var E=n(7350),M=n.n(E);function F(){return(0,r.jsx)("svg",{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.436226 1.88654C0.321855 0.917668 1.42232 0.282312 2.2042 0.865797L20.8289 14.7645C21.6738 15.3951 21.2476 16.7379 20.1937 16.7657L12.1637 16.978C11.0359 17.0078 9.99976 17.606 9.41006 18.5678L5.21123 25.4159C4.66013 26.3147 3.28415 26.0124 3.16055 24.9653L0.436226 1.88654Z",fill:"white"})})}function P(){return(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20 5L26 5C26.5523 5 27 5.44772 27 6L27 12",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M12 27L6 27C5.44772 27 5 26.5523 5 26L5 20",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M5 12L5 6C5 5.44772 5.44772 5 6 5L12 5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M27 20L27 26C27 26.5523 26.5523 27 26 27L20 27",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]})}function R(){return(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"14",cy:"14",r:"9",stroke:"white",strokeWidth:"4"}),(0,r.jsx)("path",{d:"M27 27L21.5 21.5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})]})}function B(){let{zoom:e,setZoom:t,originX:n,originY:o}=h(),{x:i,y:l}=y();return(0,r.jsxs)("div",{className:M().dashboard,children:[(0,r.jsxs)("div",{className:M().coordinates,children:[(0,r.jsxs)("p",{children:["\xa0",(0,r.jsx)(F,{}),"(",n,", ",o,")"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(P,{}),"\xa0(",i===1/0?"":i,", ",l===1/0?"":l,")"]})]}),(0,r.jsxs)("div",{className:M().zoom,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(R,{}),"\xa0",Math.ceil(100*e),"%"]}),(0,r.jsxs)("div",{className:M().buttons,children:[(0,r.jsx)("button",{onPointerDown:()=>t(e/1.5>.15?e/1.5:e),children:"-"}),(0,r.jsx)("button",{onPointerDown:()=>t(1.5*e<1.7?1.5*e:e),children:"+"})]})]})]})}var D=n(412),N=n.n(D),O=n(5565);let A=JSON.parse('{"p":[{"id":1,"gif":"/mainvideos/moving.gif","description":{"en":"Click Open Tile to move cursor","ko":"열린 타일을 클릭하여 커서를 이동하세요"}},{"id":2,"description":{"en":"Click - and + buttons to zoom in and out","ko":"확대 및 축소 버튼을 클릭하여 확대 및 축소하세요"},"gif":"/mainvideos/zoom.gif"},{"id":3,"description":{"en":"Click left mouse button on closed tile to open tile","ko":"닫힌 타일에 왼쪽 마우스 버튼을 클릭하여 타일을 엽니다"},"gif":"/mainvideos/open_tile.gif"},{"id":4,"description":{"en":"Click right mouse button on open tile to flag tile","ko":"열린 타일에 오른쪽 마우스 버튼을 클릭하여 타일을 깃발로 표시하세요"},"gif":"/mainvideos/flag.gif"},{"id":5,"description":{"en":"If the tile you clicked is a mine, you get a stun for 3 minutes","ko":"클릭한 타일이 지뢰인 경우 3분간 스턴을 받습니다"},"gif":"/mainvideos/mine.gif"}]}');var I=n(6046);function T(){return(0,r.jsxs)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M25 55L58.2322 21.7678C59.2085 20.7915 60.7915 20.7915 61.7678 21.7678L95 55",stroke:"white",strokeWidth:"10",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M25 90L58.2322 56.7678C59.2085 55.7915 60.7915 55.7915 61.7678 56.7678L95 90",stroke:"white",strokeWidth:"10",strokeLinecap:"round"})]})}function Y(){return(0,r.jsxs)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M25 65L58.2322 98.2322C59.2085 99.2085 60.7915 99.2085 61.7678 98.2322L95 65",stroke:"white",strokeWidth:"10",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M25 30L58.2322 63.2322C59.2085 64.2085 60.7915 64.2085 61.7678 63.2322L95 30",stroke:"white",strokeWidth:"10",strokeLinecap:"round"})]})}function W(){let e="https://gamultong.github.io/gamulpung-client",t=(0,I.useSearchParams)().get("lang")||"ko",[n,o]=(0,l.useState)(0),i=A.p[n];return(0,r.jsx)(r.Fragment,{children:-1!==n&&(0,r.jsxs)("div",{className:N().tutorial,children:[(0,r.jsxs)("div",{className:N().button,onClick:()=>{n>0&&o(n-1)},children:[n>0&&(0,r.jsx)(T,{})," "]}),(0,r.jsxs)("div",{className:N().step,children:[(0,r.jsx)(O.default,{src:"".concat(e).concat(i.gif),alt:i.gif,width:400,height:225}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Step ",i.id]}),(0,r.jsx)("p",{children:i.description[t]})]})]}),(0,r.jsx)("div",{className:N().button,onClick:()=>{n<A.p.length-1?o(n+1):o(-1)},children:A.p.length-1>n?(0,r.jsx)(Y,{}):(0,r.jsx)(O.default,{src:"".concat(e,"/icon.png"),alt:"Play",width:88,height:88})})]})})}function X(){let e="".concat("wss://a4ed-152-67-203-244.ngrok-free.app","/session"),{isOpen:t,message:n,sendMessage:o,connect:a,disconnect:c}=C(),{x:u,y:d,setColor:f,setPosition:v,zoom:x,setZoom:p,originX:w,originY:L,setOringinPosition:m,setId:_}=h(),{setCursors:b,addCursors:j,cursors:E}=g(),{setPosition:M}=y(),{windowWidth:F,windowHeight:P}=s(),[R,D]=(0,l.useState)(0),[N,O]=(0,l.useState)({x:0,y:0}),[A,I]=(0,l.useState)({x:0,y:0}),[T,Y]=(0,l.useState)({x:0,y:0}),[X,H]=(0,l.useState)([]),[z,J]=(0,l.useState)([...X.map(e=>[...e])]),[U,Z]=(0,l.useState)(-1),[G,K]=(0,l.useState)(!1),q=(e,n,r,i,l)=>{if(!t||!G)return;let[s,a]=[Math.abs(r-e)+1,Math.abs(n-i)+1];H(e=>{let t=[...e];switch(l){case"U":for(let e=0;e<a;e++)t.unshift([...Array(s).fill("??")]),t.pop();break;case"D":for(let e=0;e<a;e++)t.push([...Array(s).fill("??")]),t.shift();break;case"L":for(let e=0;e<a;e++)t[e]=[...Array(s).fill("??"),...t[e].slice(0,-1)];break;case"R":for(let e=0;e<a;e++)t[e]=[...t[e].slice(s,t[0].length),...Array(s).fill("??")];break;case"A":t=Array.from({length:a},()=>Array.from({length:s},()=>"??"))}return t}),o(JSON.stringify({event:"fetch-tiles",payload:{start_p:{x:e,y:n},end_p:{x:r,y:i}}}))};(0,l.useEffect)(()=>(document.documentElement.style.overflow="hidden",K(!1),p(1),()=>{document.documentElement.style.overflow="auto",c()}),[]),(0,l.useEffect)(()=>{if(!t&&N.x!==A.x&&A.y!==N.y){Z(-1);let[t,n]=[A.x-N.x+1,A.y-N.y+1];a(e+"?view_width=".concat(t,"&view_height=").concat(n))}},[t,N,A]);let V=e=>{let t=e.match(/.{1,2}/g);if(!t)return"";let n=t.map(e=>parseInt(e,16).toString(2).padStart(8,"0")).join(""),r="1"===n[0],o="1"===n[1],i="1"===n[2],l=parseInt(n.slice(3,5),2).toString(),s=parseInt(n.slice(5),2);return r?o?"B":0===s?"O":s.toString():i?"F"+l:"C"},Q=(e,t,n,r,o)=>{let[i,l]=[2*Math.abs(e-n+1),Math.abs(r-t+1)],s=[];for(let e=0;e<l;e++){let t=[],n=o.slice(e*i,(e+1)*i);for(let e=0;e<i/2;e++){let r=n.slice(2*e,2*e+2);t[e]=V(r)}s[e]=t}return s.reverse(),{rowlength:i,columnlength:l,sortedTiles:s}},$=(e,t,n,r,o,i)=>{if(0===o.length)return;let{rowlength:l,columnlength:s,sortedTiles:a}=Q(e,t,n,r,o),c=[...X];for(let e=0;e<s;e++){var u;let r=e;"All"===i&&d<t&&(r+=A.y-N.y-s+1),"PART"===i&&(r+=t-N.y),c[r]=null!==(u=c[r])&&void 0!==u?u:[];for(let o=0;o<l;o++){let i=a[e][o];["C","F"].some(e=>null==i?void 0:i.includes(e))&&(i+=(e-t+o-n)%2==0?"0":"1"),i&&(c[r][o+n-N.x]=i)}}H(c)};return(0,l.useEffect)(()=>{if(n)try{var e,t;let{event:r,payload:o}=JSON.parse(n);switch(r){case"tiles":{let{tiles:e,start_p:t,end_p:n}=o,{x:r,y:i}=t,{x:l,y:s}=n;$(l,s,r,i,e,"All");break}case"flag-set":{let{position:e,is_set:t,color:n}=o,{x:r,y:i}=e,l=[...X];l[i-N.y][r-N.x]=(t?"F"+n:"C")+((r+i)%2==0?"0":"1"),H(l);break}case"pointer-set":{let{id:e,pointer:t}=o,n=E.map(n=>e===n.id?{...n,pointer:t}:n);b(n)}case"single-tile-opened":{let{position:e,tile:t}=o;if(!e||!t)return;let{x:n,y:r}=e,i=[...X];i[r-N.y][n-N.x]=V(t),H(i);break}case"tiles-opened":{let{tiles:e,start_p:t,end_p:n}=o,{x:r,y:i}=t,{x:l,y:s}=n;$(l,s,r,i,e,"PART");break}case"my-cursor":{let{position:e,pointer:t,color:n,id:r}=o;_(r),m(e.x,e.y),v(e.x,e.y),f(n.toLowerCase()),t&&M(t.x,t.y,""),setTimeout(()=>K(!0),0);break}case"you-died":{let{revive_at:t}=o,n=Math.floor((((e=new Date(t),void 0===e)?void 0:e.getTime())-Date.now())/1e3);Z(n);break}case"cursors":{let{cursors:e}=o,t=e.map(e=>{let{position:{x:t,y:n},color:r,id:o,pointer:i}=e;return{id:o,pointer:i,x:t,y:n,color:r.toLowerCase()}});j(t);break}case"cursors-died":{let{cursors:e,revive_at:n}=o,r=(t=new Date(n),void 0===t)?void 0:t.getTime(),i=E.map(t=>{for(let n of e)if(t.id===n.id)return{...t,revive_at:r};return t});b(i);break}case"moved":{let{id:e,new_position:t}=o,{x:n,y:r}=t,i=E.map(t=>e===t.id?{...t,x:n,y:r}:t);b(i);break}case"cursor-quit":{let{id:e}=o,t=[...E],n=t.findIndex(t=>t.id===e);-1!==n&&t.splice(n,1),b(t);break}case"send-chat":{let{position:e,message:t,color:n}=o,{x:r,y:i}=e;console.log(r,i,t,n);break}case"error":{let{msg:e}=o;console.error(e)}}}catch(e){console.error(e)}},[n]),(0,l.useEffect)(()=>{let e=[...X.map(e=>[...e.map(()=>"??")])];for(let r=0;r<X.length;r++){let o=r+L-d;for(let i=0;i<X[r].length;i++){var t,n;let l=i+w-u;(null===(t=X[o])||void 0===t?void 0:t[l])&&(e[r][i]=(null===(n=X[o])||void 0===n?void 0:n[l])||"??")}}J(e)},[X,w,L]),(0,l.useEffect)(()=>{let e=80*x,[t,n]=[Math.floor(2*F/e/2),Math.floor(2*P/e/2)];n<1||t<1||(O({x:u-t,y:d-n}),I({x:u+t,y:d+n}),Y({x:w-t,y:L-n}),D(e))},[F,P,x,w,L,u,d,2,G]),(0,l.useEffect)(()=>{if(!G)return;let e=80*x,[t,n]=[Math.floor(2*F/e),Math.floor(2*P/e)],[r,i]=[Math.floor(t/2),Math.floor(n/2)],[l,s]=[0,0];t>A.x-N.x+1||n>A.y-N.y+1?(l=Math.floor(i-(A.y-N.y)/2),s=Math.round(r-(A.x-N.x)/2)):(l=-Math.round((A.y-N.y-n)/2),s=-Math.round((A.x-N.x-t)/2)),q(N.x-s,A.y+l,A.x+s,N.y-l,"A"),o(JSON.stringify({event:"set-view-size",payload:{width:Math.floor(Math.floor(2*F/e)),height:Math.floor(Math.floor(2*P/e))}}))},[F,P,x,2,G]),(0,l.useEffect)(()=>{let[e,t]=[u-w,d-L],[n,r]=[e<0,e>0],[o,i]=[t<0,t>0],{upfrom:l,upto:s,downfrom:a,downto:c,leftfrom:f,leftto:h,rightfrom:g,rightto:v}={upfrom:N.y-1,upto:N.y+t,downfrom:A.y+t,downto:A.y+1,leftfrom:N.x+e,leftto:N.x-1,rightfrom:A.x+1,rightto:A.x+e};r&&i?(q(g,a,v,s,"R"),q(f,a,v,c,"D")):n&&i?(q(f,a,h,s,"L"),q(f,a,v,c,"D")):r&&o?(q(g,a,v,s,"R"),q(f,l,v,s,"U")):n&&o?(q(f,a,h,s,"L"),q(f,l,v,s,"U")):r?q(g,A.y,v,N.y,"R"):n?q(f,A.y,h,N.y,"L"):i?q(N.x,a,A.x,c,"D"):o&&q(N.x,l,A.x,s,"U")},[u,d]),(0,l.useEffect)(()=>{G&&o(JSON.stringify({event:"moving",payload:{position:{x:w,y:L}}}))},[w,L]),(0,l.useEffect)(()=>{setTimeout(()=>Z(e=>e>0?--e:e),1e3)},[U]),(0,r.jsxs)("div",{className:i().page,children:[U>0&&(0,r.jsx)(S,{time:U}),(0,r.jsx)(W,{}),(0,r.jsx)(B,{}),(0,r.jsx)(k,{leftReviveTime:U,paddingTiles:2,tiles:z,setCachingTiles:H,tileSize:R,startPoint:T,cursorOriginX:w,cursorOriginY:L})]})}},1269:e=>{e.exports={page:"page_page__9CbJ0"}},40:e=>{e.exports={loading:"style_loading__42LVe",loadingBar:"style_loadingBar__AtBJr",loadingAnimation:"style_loadingAnimation__ScSQQ",loadComplete:"style_loadComplete__SRD5Z",canvasContainer:"style_canvasContainer__nKMjH",canvas:"style_canvas__m8mJO",vibration:"style_vibration__6_Fiw"}},7350:e=>{e.exports={dashboard:"style_dashboard__nDsof",coordinates:"style_coordinates__3RzzR",zoom:"style_zoom__EWfUf",buttons:"style_buttons__zf0nF"}},4706:e=>{e.exports={chat:"style_chat__ZTXhD",message:"style_message__uEVba"}},8871:e=>{e.exports={inactive:"style_inactive__B_gRa",fade:"style_fade__sZevv",alert:"style_alert__pv_lG",ad:"style_ad__2DN3O"}},412:e=>{e.exports={tutorial:"style_tutorial__75p5w",step:"style_step__kswJY",fade:"style_fade__KaBU4",button:"style_button__rjKit"}}},e=>{var t=t=>e(e.s=t);e.O(0,[249,565,441,517,358],()=>t(3356)),_N_E=e.O()}]);