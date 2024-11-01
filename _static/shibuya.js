(()=>{var qt=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),P=Object.freeze({...qt,...B}),tt=Object.freeze({...P,body:"",hidden:!1}),he=Object.freeze({width:null,height:null}),Ft=Object.freeze({...he,...B});function pe(t,e=0){let n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){let o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}var ge=/[\s,]+/;function me(t,e){e.split(ge).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}var Bt={...Ft,preserveAspectRatio:""};function vt(t){let e={...Bt},n=(r,o)=>t.getAttribute(r)||o;return e.width=n("width",null),e.height=n("height",null),e.rotate=pe(n("rotate","")),me(e,n("flip","")),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}function be(t,e){for(let n in Bt)if(t[n]!==e[n])return!0;return!1}var L=/^[a-z0-9]+(-[a-z0-9]+)*$/,M=(t,e,n,r="")=>{let o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){let i=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:r,prefix:a,name:i};return e&&!q(l)?null:l}let s=o[0],c=s.split("-");if(c.length>1){let i={provider:r,prefix:c.shift(),name:c.join("-")};return e&&!q(i)?null:i}if(n&&r===""){let i={provider:r,prefix:"",name:s};return e&&!q(i,n)?null:i}return null},q=(t,e)=>t?!!((t.provider===""||t.provider.match(L))&&(e&&t.prefix===""||t.prefix.match(L))&&t.name.match(L)):!1;function ye(t,e){let n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);let r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function wt(t,e){let n=ye(t,e);for(let r in tt)r in B?r in t&&!(r in n)&&(n[r]=B[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function ve(t,e){let n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(c){if(n[c])return o[c]=[];if(!(c in o)){o[c]=null;let i=r[c]&&r[c].parent,a=i&&s(i);a&&(o[c]=[i].concat(a))}return o[c]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function we(t,e,n){let r=t.icons,o=t.aliases||Object.create(null),s={};function c(i){s=wt(r[i]||o[i],s)}return c(e),n.forEach(c),wt(t,s)}function $t(t,e){let n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});let r=ve(t);for(let o in r){let s=r[o];s&&(e(o,we(t,o,s)),n.push(o))}return n}var Se={provider:"",aliases:{},not_found:{},...qt};function W(t,e){for(let n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Dt(t){if(typeof t!="object"||t===null)return null;let e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!W(t,Se))return null;let n=e.icons;for(let o in n){let s=n[o];if(!o.match(L)||typeof s.body!="string"||!W(s,tt))return null}let r=e.aliases||Object.create(null);for(let o in r){let s=r[o],c=s.parent;if(!o.match(L)||typeof c!="string"||!n[c]&&!r[c]||!W(s,tt))return null}return e}var $=Object.create(null);function xe(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){let n=$[t]||($[t]=Object.create(null));return n[e]||(n[e]=xe(t,e))}function lt(t,e){return Dt(e)?$t(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Ie(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function Ce(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys($)).forEach(o=>{(typeof o=="string"&&typeof e=="string"?[e]:Object.keys($[o]||{})).forEach(c=>{let i=v(o,c);n=n.concat(Object.keys(i.icons).map(a=>(o!==""?"@"+o+":":"")+c+":"+a))})}),n}var O=!1;function Ht(t){return typeof t=="boolean"&&(O=t),O}function T(t){let e=typeof t=="string"?M(t,!0,O):t;if(e){let n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Qt(t,e){let n=M(t,!0,O);if(!n)return!1;let r=v(n.provider,n.prefix);return Ie(r,n.name,e)}function St(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),O&&!e&&!t.prefix){let o=!1;return Dt(t)&&(t.prefix="",$t(t,(s,c)=>{c&&Qt(s,c)&&(o=!0)})),o}let n=t.prefix;if(!q({provider:e,prefix:n,name:"a"}))return!1;let r=v(e,n);return!!lt(r,t)}function xt(t){return!!T(t)}function Ae(t){let e=T(t);return e?{...P,...e}:null}function _e(t){let e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;let s=o.provider,c=o.prefix,i=o.name,a=n[s]||(n[s]=Object.create(null)),l=a[c]||(a[c]=v(s,c)),u;i in l.icons?u=e.loaded:c===""||l.missing.has(i)?u=e.missing:u=e.pending;let f={provider:s,prefix:c,name:i};u.push(f)}),e}function Ut(t,e){t.forEach(n=>{let r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function ke(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;let e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1,r=t.provider,o=t.prefix;e.forEach(s=>{let c=s.icons,i=c.pending.length;c.pending=c.pending.filter(a=>{if(a.prefix!==o)return!0;let l=a.name;if(t.icons[l])c.loaded.push({provider:r,prefix:o,name:l});else if(t.missing.has(l))c.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),c.pending.length!==i&&(n||Ut([t],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}var Le=0;function Ee(t,e,n){let r=Le++,o=Ut.bind(null,n,r);if(!e.pending.length)return o;let s={id:r,icons:e,callback:t,abort:o};return n.forEach(c=>{(c.loaderCallbacks||(c.loaderCallbacks=[])).push(s)}),o}var et=Object.create(null);function It(t,e){et[t]=e}function nt(t){return et[t]||et[""]}function Oe(t,e=!0,n=!1){let r=[];return t.forEach(o=>{let s=typeof o=="string"?M(o,e,n):o;s&&r.push(s)}),r}var Te={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function je(t,e,n,r){let o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index,c;if(t.random){let d=t.resources.slice(0);for(c=[];d.length>1;){let b=Math.floor(Math.random()*d.length);c.push(d[b]),d=d.slice(0,b).concat(d.slice(b+1))}c=c.concat(d)}else c=t.resources.slice(s).concat(t.resources.slice(0,s));let i=Date.now(),a="pending",l=0,u,f=null,h=[],p=[];typeof r=="function"&&p.push(r);function w(){f&&(clearTimeout(f),f=null)}function S(){a==="pending"&&(a="aborted"),w(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function g(d,b){b&&(p=[]),typeof d=="function"&&p.push(d)}function Y(){return{startTime:i,payload:e,status:a,queriesSent:l,queriesPending:h.length,subscribe:g,abort:S}}function x(){a="failed",p.forEach(d=>{d(void 0,u)})}function y(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function m(d,b,_){let N=b!=="success";switch(h=h.filter(I=>I!==d),a){case"pending":break;case"failed":if(N||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){u=_,x();return}if(N){u=_,h.length||(c.length?K():x());return}if(w(),y(),!t.random){let I=t.resources.indexOf(d.resource);I!==-1&&I!==t.index&&(t.index=I)}a="completed",p.forEach(I=>{I(_)})}function K(){if(a!=="pending")return;w();let d=c.shift();if(d===void 0){if(h.length){f=setTimeout(()=>{w(),a==="pending"&&(y(),x())},t.timeout);return}x();return}let b={status:"pending",resource:d,callback:(_,N)=>{m(b,_,N)}};h.push(b),l++,f=setTimeout(K,t.rotate),n(d,e,b.callback)}return setTimeout(K),Y}function Vt(t){let e={...Te,...t},n=[];function r(){n=n.filter(i=>i().status==="pending")}function o(i,a,l){let u=je(e,i,a,(f,h)=>{r(),l&&l(f,h)});return n.push(u),u}function s(i){return n.find(a=>i(a))||null}return{query:o,find:s,setIndex:i=>{e.index=i},getIndex:()=>e.index,cleanup:r}}function ut(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}var H=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;k.length>0;)k.length===1||Math.random()>.5?F.push(k.shift()):F.push(k.pop());H[""]=ut({resources:["https://api.iconify.design"].concat(F)});function Ct(t,e){let n=ut(e);return n===null?!1:(H[t]=n,!0)}function Q(t){return H[t]}function Pe(){return Object.keys(H)}function At(){}var X=Object.create(null);function Me(t){if(!X[t]){let e=Q(t);if(!e)return;let n=Vt(e),r={config:e,redundancy:n};X[t]=r}return X[t]}function zt(t,e,n){let r,o;if(typeof t=="string"){let s=nt(t);if(!s)return n(void 0,424),At;o=s.send;let c=Me(t);c&&(r=c.redundancy)}else{let s=ut(t);if(s){r=Vt(s);let c=t.resources?t.resources[0]:"",i=nt(c);i&&(o=i.send)}}return!r||!o?(n(void 0,424),At):r.query(e,o,n)().abort}var _t="iconify2",j="iconify",Gt=j+"-count",kt=j+"-version",Jt=36e5,Ne=168,Re=50;function ot(t,e){try{return t.getItem(e)}catch{}}function ft(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Lt(t,e){try{t.removeItem(e)}catch{}}function rt(t,e){return ft(t,Gt,e.toString())}function st(t){return parseInt(ot(t,Gt))||0}var C={local:!0,session:!0},Yt={local:new Set,session:new Set},dt=!1;function qe(t){dt=t}var R=typeof window>"u"?{}:window;function Kt(t){let e=t+"Storage";try{if(R&&R[e]&&typeof R[e].length=="number")return R[e]}catch{}C[t]=!1}function Wt(t,e){let n=Kt(t);if(!n)return;let r=ot(n,kt);if(r!==_t){if(r){let i=st(n);for(let a=0;a<i;a++)Lt(n,j+a.toString())}ft(n,kt,_t),rt(n,0);return}let o=Math.floor(Date.now()/Jt)-Ne,s=i=>{let a=j+i.toString(),l=ot(n,a);if(typeof l=="string"){try{let u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,i))return!0}catch{}Lt(n,a)}},c=st(n);for(let i=c-1;i>=0;i--)s(i)||(i===c-1?(c--,rt(n,c)):Yt[t].add(i))}function Xt(){if(!dt){qe(!0);for(let t in C)Wt(t,e=>{let n=e.data,r=e.provider,o=n.prefix,s=v(r,o);if(!lt(s,n).length)return!1;let c=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,c):c,!0})}}function Fe(t,e){let n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(let r in C)Wt(r,o=>{let s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Be(t,e){dt||Xt();function n(r){let o;if(!C[r]||!(o=Kt(r)))return;let s=Yt[r],c;if(s.size)s.delete(c=Array.from(s).shift());else if(c=st(o),c>=Re||!rt(o,c+1))return;let i={cached:Math.floor(Date.now()/Jt),provider:t.provider,data:e};return ft(o,j+c.toString(),JSON.stringify(i))}e.lastModified&&!Fe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Et(){}function $e(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,ke(t)}))}function De(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;let{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=nt(n)))return;s.prepare(n,r,o).forEach(i=>{zt(n,i,a=>{if(typeof a!="object")i.icons.forEach(l=>{t.missing.add(l)});else try{let l=lt(t,a);if(!l.length)return;let u=t.pendingIcons;u&&l.forEach(f=>{u.delete(f)}),Be(t,a)}catch(l){console.error(l)}$e(t)})})}))}var ht=(t,e)=>{let n=Oe(t,!0,Ht()),r=_e(n);if(!r.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(r.loaded,r.missing,r.pending,Et)}),()=>{a=!1}}let o=Object.create(null),s=[],c,i;return r.pending.forEach(a=>{let{provider:l,prefix:u}=a;if(u===i&&l===c)return;c=l,i=u,s.push(v(l,u));let f=o[l]||(o[l]=Object.create(null));f[u]||(f[u]=[])}),r.pending.forEach(a=>{let{provider:l,prefix:u,name:f}=a,h=v(l,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(f)||(p.add(f),o[l][u].push(f))}),s.forEach(a=>{let{provider:l,prefix:u}=a;o[l][u].length&&De(a,o[l][u])}),e?Ee(e,r,s):Et},He=t=>new Promise((e,n)=>{let r=typeof t=="string"?M(t,!0):t;if(!r){n(t);return}ht([r||t],o=>{if(o.length&&r){let s=T(r);if(s){e({...P,...s});return}}n(t)})});function Qe(t){try{let e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function Ue(t,e){let n=typeof t=="string"?M(t,!0,!0):null;if(!n){let s=Qe(t);return{value:t,data:s}}let r=T(n);if(r!==void 0||!n.prefix)return{value:t,name:n,data:r};let o=ht([n],()=>e(t,n,T(n)));return{value:t,name:n,loading:o}}var Zt=!1;try{Zt=navigator.vendor.indexOf("Apple")===0}catch{}function Ve(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(Zt||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}var ze=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ge=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function it(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;let r=t.split(ze);if(r===null||!r.length)return t;let o=[],s=r.shift(),c=Ge.test(s);for(;;){if(c){let i=parseFloat(s);isNaN(i)?o.push(s):o.push(Math.ceil(i*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");c=!c}}function Je(t,e="defs"){let n="",r=t.indexOf("<"+e);for(;r>=0;){let o=t.indexOf(">",r),s=t.indexOf("</"+e);if(o===-1||s===-1)break;let c=t.indexOf(">",s);if(c===-1)break;n+=t.slice(o+1,s).trim(),t=t.slice(0,r).trim()+t.slice(c+1)}return{defs:n,content:t}}function Ye(t,e){return t?"<defs>"+t+"</defs>"+e:e}function Ke(t,e,n){let r=Je(t);return Ye(r.defs,e+r.content+n)}var We=t=>t==="unset"||t==="undefined"||t==="none";function te(t,e){let n={...P,...t},r={...Ft,...e},o={left:n.left,top:n.top,width:n.width,height:n.height},s=n.body;[n,r].forEach(S=>{let g=[],Y=S.hFlip,x=S.vFlip,y=S.rotate;Y?x?y+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):x&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=o.height/2+o.top,g.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:m=o.width/2+o.left,g.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(o.left!==o.top&&(m=o.left,o.left=o.top,o.top=m),o.width!==o.height&&(m=o.width,o.width=o.height,o.height=m)),g.length&&(s=Ke(s,'<g transform="'+g.join(" ")+'">',"</g>"))});let c=r.width,i=r.height,a=o.width,l=o.height,u,f;c===null?(f=i===null?"1em":i==="auto"?l:i,u=it(f,a/l)):(u=c==="auto"?a:c,f=i===null?it(u,l/a):i==="auto"?l:i);let h={},p=(S,g)=>{We(g)||(h[S]=g.toString())};p("width",u),p("height",f);let w=[o.left,o.top,a,l];return h.viewBox=w.join(" "),{attributes:h,viewBox:w,body:s}}function pt(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Xe(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ze(t){return"data:image/svg+xml,"+Xe(t)}function ee(t){return'url("'+Ze(t)+'")'}var tn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}},D=tn();function en(t){D=t}function nn(){return D}function on(t,e){let n=Q(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(c=>{o=Math.max(o,c.length)});let s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function rn(t){return t===404}var sn=(t,e,n)=>{let r=[],o=on(t,e),s="icons",c={type:s,provider:t,prefix:e,icons:[]},i=0;return n.forEach((a,l)=>{i+=a.length+1,i>=o&&l>0&&(r.push(c),c={type:s,provider:t,prefix:e,icons:[]},i=a.length),c.icons.push(a)}),r.push(c),r};function cn(t){if(typeof t=="string"){let e=Q(t);if(e)return e.path}return"/"}var an=(t,e,n)=>{if(!D){n("abort",424);return}let r=cn(e.provider);switch(e.type){case"icons":{let s=e.prefix,i=e.icons.join(","),a=new URLSearchParams({icons:i});r+=s+".json?"+a.toString();break}case"custom":{let s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;D(t+r).then(s=>{let c=s.status;if(c!==200){setTimeout(()=>{n(rn(c)?"abort":"next",c)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},ln={prepare:sn,send:an};function Ot(t,e){switch(t){case"local":case"session":C[t]=e;break;case"all":for(let n in C)C[n]=e;break}}var Z="data-style",ne="";function un(t){ne=t}function Tt(t,e){let n=Array.from(t.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(Z));n||(n=document.createElement("style"),n.setAttribute(Z,Z),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+ne}function oe(){It("",ln),Ht(!0);let t;try{t=window}catch{}if(t){if(Xt(),t.IconifyPreload!==void 0){let n=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!St(o))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){let n=t.IconifyProviders;if(typeof n=="object"&&n!==null)for(let r in n){let o="IconifyProviders["+r+"] is invalid.";try{let s=n[r];if(typeof s!="object"||!s||s.resources===void 0)continue;Ct(r,s)||console.error(o)}catch{console.error(o)}}}}return{enableCache:n=>Ot(n,!0),disableCache:n=>Ot(n,!1),iconLoaded:xt,iconExists:xt,getIcon:Ae,listIcons:Ce,addIcon:Qt,addCollection:St,calculateSize:it,buildIcon:te,iconToHTML:pt,svgToURL:ee,loadIcons:ht,loadIcon:He,addAPIProvider:Ct,appendCustomStyle:un,_api:{getAPIConfig:Q,setAPIModule:It,sendAPIQuery:zt,setFetch:en,getFetch:nn,listAPIProviders:Pe}}}var ct={"background-color":"currentColor"},re={"background-color":"transparent"},jt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Pt={"-webkit-mask":ct,mask:ct,background:re};for(let t in Pt){let e=Pt[t];for(let n in jt)e[t+"-"+n]=jt[n]}function Mt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function fn(t,e,n){let r=document.createElement("span"),o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");let s=t.attributes,c=pt(o,{...s,width:e.width+"",height:e.height+""}),i=ee(c),a=r.style,l={"--svg":i,width:Mt(s.width),height:Mt(s.height),...n?ct:re};for(let u in l)a.setProperty(u,l[u]);return r}var E;function dn(){try{E=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{E=null}}function hn(t){return E===void 0&&dn(),E?E.createHTML(t):t}function pn(t){let e=document.createElement("span"),n=t.attributes,r="";n.width||(r="width: inherit;"),n.height||(r+="height: inherit;"),r&&(n.style=r);let o=pt(t.body,n);return e.innerHTML=hn(o),e.firstChild}function at(t){return Array.from(t.childNodes).find(e=>{let n=e.tagName&&e.tagName.toUpperCase();return n==="SPAN"||n==="SVG"})}function Nt(t,e){let n=e.icon.data,r=e.customisations,o=te(n,r);r.preserveAspectRatio&&(o.attributes.preserveAspectRatio=r.preserveAspectRatio);let s=e.renderedMode,c;switch(s){case"svg":c=pn(o);break;default:c=fn(o,{...P,...n},s==="mask")}let i=at(t);i?c.tagName==="SPAN"&&i.tagName===c.tagName?i.setAttribute("style",c.getAttribute("style")):t.replaceChild(c,i):t.appendChild(c)}function Rt(t,e,n){let r=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:r}}function gn(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch{return}if(!e||!n)return;let r=e.get(t);if(r)return r;let o=["icon","mode","inline","noobserver","width","height","rotate","flip"],s=class extends n{_shadowRoot;_initialised=!1;_state;_checkQueued=!1;_connected=!1;_observer=null;_visible=!0;constructor(){super();let i=this._shadowRoot=this.attachShadow({mode:"open"}),a=this.hasAttribute("inline");Tt(i,a),this._state=Rt({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(i){switch(i){case"inline":{let a=this.hasAttribute("inline"),l=this._state;a!==l.inline&&(l.inline=a,Tt(this._shadowRoot,a));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){let i=this.getAttribute("icon");if(i&&i.slice(0,1)==="{")try{return JSON.parse(i)}catch{}return i}set icon(i){typeof i=="object"&&(i=JSON.stringify(i)),this.setAttribute("icon",i)}get inline(){return this.hasAttribute("inline")}set inline(i){i?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(i){i?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){let i=this._state;if(i.rendered){let a=this._shadowRoot;if(i.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}Nt(a,i)}}get status(){let i=this._state;return i.rendered?"rendered":i.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;let i=this._state,a=this.getAttribute("icon");if(a!==i.icon.value){this._iconChanged(a);return}if(!i.rendered||!this._visible)return;let l=this.getAttribute("mode"),u=vt(this);(i.attrMode!==l||be(i.customisations,u)||!at(this._shadowRoot))&&this._renderIcon(i.icon,u,l)}_iconChanged(i){let a=Ue(i,(l,u,f)=>{let h=this._state;if(h.rendered||this.getAttribute("icon")!==l)return;let p={value:l,name:u,data:f};p.data?this._gotIconData(p):h.icon=p});a.data?this._gotIconData(a):this._state=Rt(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){let i=at(this._shadowRoot);i&&this._shadowRoot.removeChild(i);return}this._queueCheck()}_gotIconData(i){this._checkQueued=!1,this._renderIcon(i,vt(this),this.getAttribute("mode"))}_renderIcon(i,a,l){let u=Ve(i.data.body,l),f=this._state.inline;Nt(this._shadowRoot,this._state={rendered:!0,icon:i,inline:f,customisations:a,attrMode:l,renderedMode:u})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(i=>{let a=i.some(l=>l.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(i=>{i in s.prototype||Object.defineProperty(s.prototype,i,{get:function(){return this.getAttribute(i)},set:function(a){a!==null?this.setAttribute(i,a):this.removeAttribute(i)}})});let c=oe();for(let i in c)s[i]=s.prototype[i]=c[i];return e.define(t,s),s}var mn=gn()||oe(),{enableCache:On,disableCache:Tn,iconLoaded:jn,iconExists:Pn,getIcon:Mn,listIcons:Nn,addIcon:Rn,addCollection:qn,calculateSize:Fn,buildIcon:Bn,iconToHTML:$n,svgToURL:Dn,loadIcons:Hn,loadIcon:Qn,addAPIProvider:Un,_api:Vn}=mn;function bn(t){let e=t.getAttribute("aria-controls"),n=document.getElementById(e),r="data-expanded-"+e;t.addEventListener("click",function(){document.body.hasAttribute(r)?(document.body.removeAttribute(r),n.classList.remove("_expanded"),se(e,"false")):(document.body.setAttribute(r,"true"),n.classList.add("_expanded"),se(e,"true"))})}function se(t,e){let n=document.querySelectorAll('[aria-controls="'+t+'"]');for(el of n)el.setAttribute("aria-expanded",e)}var ie=document.querySelectorAll(".js-menu");for(let t=0;t<ie.length;t++)bn(ie[t]);var U=document.querySelector(".announcement"),yn=document.querySelector(".announcement-close");if(U){let e=function(){t.textContent=`:root{--sy-s-banner-height:${U.clientHeight}px}`};vn=e;let t=document.createElement("style");document.head.appendChild(t),yn.addEventListener("click",()=>{U.parentNode.removeChild(U),document.head.removeChild(t)}),e(),window.addEventListener("resize",e)}var vn;var V=["auto","light","dark"],z=document.querySelector(".js-theme");function wn(){let t=ce();t+=1,V[t]||(t=0);let e=V[t];setColorMode(e),localStorage._theme=e,ae(e)}function ce(){return V.indexOf(document.documentElement.getAttribute("data-color-mode")||"auto")}function ae(t){let e=z.getAttribute("data-aria-"+t);z.setAttribute("aria-label",e)}z&&(z.addEventListener("click",wn),ae(V[ce()]||"auto"));function Sn(){let t=document.querySelector(".globaltoc");if(!t)return;let e=parseInt(t.getAttribute("data-expand-depth"),10),n=o=>{if(!e)return!1;let s=0;for(;o.parentNode&&o.parentNode!==t;)o=o.parentNode,o.nodeName==="UL"&&(s+=1);return e>=s};t.querySelectorAll("li > ul").forEach(o=>{let s=o.parentNode;s.classList.contains("current")||n(s)?s.classList.add("_expand"):s.classList.add("_collapse");let c=xn(o);s.appendChild(c)})}function xn(t){let e=document.createElement("button");e.innerHTML='<i class="i-lucide chevron-right"></i>';let n=t.parentNode,r=t.previousSibling,o=r.textContent,s=()=>{n.classList.contains("_expand")?e.setAttribute("aria-label","Collapse "+o):e.setAttribute("aria-label","Expand "+o)};s();let c=i=>{i.preventDefault(),n.classList.contains("_expand")?(n.classList.remove("_expand"),n.classList.add("_collapse")):(n.classList.remove("_collapse"),n.classList.add("_expand")),s()};return r.getAttribute("href")==="#"&&r.addEventListener("click",c),e.addEventListener("click",c),e}var gt=document.querySelector(".globaltoc a.current");gt&&gt.scrollIntoViewIfNeeded&&gt.scrollIntoViewIfNeeded();Sn();var le=0,mt=200,G=document.querySelectorAll(".yue > section section[id]"),A=document.querySelector(".back-to-top");function ue(){let t=document.querySelector(".yue > section");t&&(mt=t.computedStyleMap().get("scroll-margin-top").value)}function In(t){let e=t.getBoundingClientRect();return e.top<=mt&&e.bottom>=mt}function fe(t){document.querySelectorAll(".localtoc li.active").forEach(e=>{e.classList.remove("active")}),document.querySelector(`.localtoc a[href="#${t}"]`).parentNode.classList.add("active")}function de(){let t;for(let e=0;e<G.length;e++)if(t=G[e],In(t)){fe(t.id);break}}function Cn(){if(window.innerHeight+Math.round(window.scrollY)>=document.body.offsetHeight){let t=G[G.length-1];t&&fe(t.id)}else de();A&&(window.scrollY&&window.scrollY<le?A.setAttribute("data-visible","true"):A.hasAttribute("data-visible")&&A.removeAttribute("data-visible"),le=window.scrollY)}A&&A.addEventListener("click",()=>{window.scrollTo(0,0)});window.addEventListener("scroll",Cn);window.addEventListener("DOMContentLoaded",()=>{ue(),de()});window.addEventListener("resize",ue);var J=document.querySelector(".js-repo-stats");async function An(t,e){let n=`https://api.github.com/repos/${t}/${e}`,o=await(await fetch(n)).json(),s={stars:o.watchers,forks:o.forks};bt(s),sessionStorage.setItem("_sy/repo/stats",JSON.stringify(s))}async function _n(t,e){let n="https://gitlab.com/api/v4/projects/"+encodeURIComponent(t+"/"+e),o=await(await fetch(n)).json(),s={stars:o.star_count,forks:o.forks_count};bt(s),sessionStorage.setItem("_sy/repo/stats",JSON.stringify(s))}function bt({stars:t,forks:e}){t&&(document.querySelector(".js-repo-stars").textContent=t),e&&(document.querySelector(".js-repo-forks").textContent=e)}function kn(){let t=sessionStorage.getItem("_sy/repo/stats");if(t)bt(JSON.parse(t));else{let e=J.getAttribute("data-user"),n=J.getAttribute("data-repo"),r=J.getAttribute("data-type");r==="github"?An(e,n):r==="gitlab"&&_n(e,n)}}J&&kn();function Ln(t,e){let n=document.createElement("script");n.id="_carbonads_js",n.src=`//cdn.carbonads.com/carbon.js?serve=${t}&placement=${e}`;let r=document.querySelector(".yue > section"),o=document.querySelector(".yue > section > section");if(o)r.insertBefore(n,o);else{let s=document.querySelector(".yue > section > p");s?r.insertBefore(n,s.nextSibling):r.appendChild(n)}}var yt=document.querySelector(".js-carbon");if(yt){let t=yt.getAttribute("data-carbon-code"),e=yt.getAttribute("data-carbon-placement");t&&e&&Ln(t,e)}var En=`
:host > div .results .hit h2 {
  color: var(--sy-c-heading);
  margin-bottom: 0;
  border-bottom: 0;
  font-weight: 600;
}
:host > div .results .hit .hit-block .content {
  color: var(--sy-c-text);
}
:host > div .results .hit-block a.hit:hover, :host > div .results .hit-block .hit.active {
  background-color: var(--gray-5);
  border-radius: 4px;
}

:host > div div.hit-block a.hit-block-heading:hover {
  text-decoration: underline;
}

:host > div div.hit-block a.hit-block-heading i,
:host > div div.hit-block .hit-block-heading-container .close-icon {
  color: var(--sy-c-light);
  margin-bottom: 0;
  display: flex;
}
`;document.addEventListener("readthedocs-addons-data-ready",function(t){document.querySelector(".searchbox input").addEventListener("focusin",()=>{let e=new CustomEvent("readthedocs-search-show");document.dispatchEvent(e)}),setTimeout(()=>{let e=document.querySelector("readthedocs-search");if(e){let n=document.createElement("style");n.textContent=En,e.shadowRoot.appendChild(n)}},1e3)});/windows/i.test(navigator.userAgent)&&document.body.classList.add("win");})();
/*! Bundled license information:

iconify-icon/dist/iconify-icon.mjs:
  (**
  * (c) Iconify
  *
  * For the full copyright and license information, please view the license.txt
  * files at https://github.com/iconify/iconify
  *
  * Licensed under MIT.
  *
  * @license MIT
  * @version 2.1.0
  *)
*/