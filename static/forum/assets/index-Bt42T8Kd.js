const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initFireBase-nLTdp8L2.js","assets/index.esm-BrdPzmht.js"])))=>i.map(i=>d[i]);
var Yi=Object.defineProperty;var Ji=(n,e,t)=>e in n?Yi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qt=(n,e,t)=>Ji(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $(){}const Jr=n=>n;function Xr(n){return n()}function Kn(){return Object.create(null)}function ae(n){n.forEach(Xr)}function Bt(n){return typeof n=="function"}function le(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Xi(n){return Object.keys(n).length===0}function Zr(n,...e){if(n==null){for(const r of e)r(void 0);return $}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function dt(n){let e;return Zr(n,t=>e=t)(),e}function Ce(n,e,t){n.$$.on_destroy.push(Zr(e,t))}function Zi(n){return n&&Bt(n.destroy)?n.destroy:$}const ei=typeof window<"u";let es=ei?()=>window.performance.now():()=>Date.now(),vn=ei?n=>requestAnimationFrame(n):$;const Me=new Set;function ti(n){Me.forEach(e=>{e.c(n)||(Me.delete(e),e.f())}),Me.size!==0&&vn(ti)}function ts(n){let e;return Me.size===0&&vn(ti),{promise:new Promise(t=>{Me.add(e={c:n,f:t})}),abort(){Me.delete(e)}}}function _(n,e){n.appendChild(e)}function ni(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function ns(n){const e=b("style");return e.textContent="/* empty */",rs(ni(n),e),e.sheet}function rs(n,e){return _(n.head||n,e),e.sheet}function I(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode&&n.parentNode.removeChild(n)}function Mt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function j(n){return document.createTextNode(n)}function P(){return j(" ")}function wn(){return j("")}function Q(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function En(n){return function(e){return e.preventDefault(),n.call(this,e)}}function is(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function g(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ss(n){return Array.from(n.childNodes)}function te(n,e){e=""+e,n.data!==e&&(n.data=e)}function Be(n,e){n.value=e??""}function de(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function os(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Qn(n,e){return new n(e)}const Tt=new Map;let It=0;function as(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ls(n,e){const t={stylesheet:ns(e),rules:{}};return Tt.set(n,t),t}function Yn(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let w=0;w<=1;w+=l){const R=e+(t-e)*s(w);c+=w*100+`%{${o(R,1-R)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${as(u)}_${a}`,h=ni(n),{stylesheet:p,rules:f}=Tt.get(h)||ls(h,n);f[d]||(f[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=n.style.animation||"";return n.style.animation=`${m?`${m}, `:""}${d} ${r}ms linear ${i}ms 1 both`,It+=1,d}function cs(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),It-=i,It||us())}function us(){vn(()=>{It||(Tt.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&T(e)}),Tt.clear())})}let et;function Qe(n){et=n}function ri(){if(!et)throw new Error("Function called outside component initialization");return et}function Tn(n){ri().$$.on_mount.push(n)}function ds(n){ri().$$.after_update.push(n)}function hs(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Fe=[],Jn=[];let xe=[];const Xn=[],fs=Promise.resolve();let an=!1;function ps(){an||(an=!0,fs.then(ii))}function Ie(n){xe.push(n)}const Yt=new Set;let Oe=0;function ii(){if(Oe!==0)return;const n=et;do{try{for(;Oe<Fe.length;){const e=Fe[Oe];Oe++,Qe(e),ms(e.$$)}}catch(e){throw Fe.length=0,Oe=0,e}for(Qe(null),Fe.length=0,Oe=0;Jn.length;)Jn.pop()();for(let e=0;e<xe.length;e+=1){const t=xe[e];Yt.has(t)||(Yt.add(t),t())}xe.length=0}while(Fe.length);for(;Xn.length;)Xn.pop()();an=!1,Yt.clear(),Qe(n)}function ms(n){if(n.fragment!==null){n.update(),ae(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ie)}}function _s(n){const e=[],t=[];xe.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),xe=e}let Ke;function gs(){return Ke||(Ke=Promise.resolve(),Ke.then(()=>{Ke=null})),Ke}function Jt(n,e,t){n.dispatchEvent(os(`${e?"intro":"outro"}${t}`))}const wt=new Set;let he;function In(){he={r:0,c:[],p:he}}function An(){he.r||ae(he.c),he=he.p}function U(n,e){n&&n.i&&(wt.delete(n),n.i(e))}function G(n,e,t,r){if(n&&n.o){if(wt.has(n))return;wt.add(n),he.c.push(()=>{wt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const ys={duration:0};function Ae(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,l=null,c=null,u;function d(){c&&cs(n,c)}function h(f,m){const w=f.b-o;return m*=Math.abs(w),{a:o,b:f.b,d:w,duration:m,start:f.start,end:f.start+m,group:f.group}}function p(f){const{delay:m=0,duration:w=300,easing:R=Jr,tick:E=$,css:C}=s||ys,z={start:es()+m,b:f};f||(z.group=he,he.r+=1),"inert"in n&&(f?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||l?l=z:(C&&(d(),c=Yn(n,o,f,w,m,R,C)),f&&E(0,1),a=h(z,w),Ie(()=>Jt(n,f,"start")),ts(H=>{if(l&&H>l.start&&(a=h(l,w),l=null,Jt(n,a.b,"start"),C&&(d(),c=Yn(n,o,a.b,a.duration,0,R,s.css))),a){if(H>=a.end)E(o=a.b,1-o),Jt(n,a.b,"end"),l||(a.b?d():--a.group.r||ae(a.group.c)),a=null;else if(H>=a.start){const ie=H-a.start;o=a.a+a.d*R(ie/a.duration),E(o,1-o)}}return!!(a||l)}))}return{run(f){Bt(s)?gs().then(()=>{s=s({direction:f?"in":"out"}),p(f)}):p(f)},end(){d(),a=l=null}}}function Pe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ne(n){n&&n.c()}function Z(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Ie(()=>{const s=n.$$.on_mount.map(Xr).filter(Bt);n.$$.on_destroy?n.$$.on_destroy.push(...s):ae(s),n.$$.on_mount=[]}),i.forEach(Ie)}function ee(n,e){const t=n.$$;t.fragment!==null&&(_s(t.after_update),ae(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function bs(n,e){n.$$.dirty[0]===-1&&(Fe.push(n),ps(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ge(n,e,t,r,i,s,o=null,a=[-1]){const l=et;Qe(n);const c=n.$$={fragment:null,ctx:[],props:s,update:$,not_equal:i,bound:Kn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Kn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,h,...p)=>{const f=p.length?p[0]:h;return c.ctx&&i(c.ctx[d],c.ctx[d]=f)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](f),u&&bs(n,d)),h}):[],c.update(),u=!0,ae(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=ss(e.target);c.fragment&&c.fragment.l(d),d.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&U(n.$$.fragment),Z(n,e.target,e.anchor),ii()}Qe(l)}class ye{constructor(){Qt(this,"$$");Qt(this,"$$set")}$destroy(){ee(this,1),this.$destroy=$}$on(e,t){if(!Bt(t))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Xi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vs="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vs);function Ve(n,{delay:e=0,duration:t=400,easing:r=Jr}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}const ws="modulepreload",Es=function(n){return"/forum/"+n},Zn={},pe=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Es(l),l in Zn)return;Zn[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ws,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Ne=[];function Pn(n,e=$){let t;const r=new Set;function i(a){if(le(n,a)&&(n=a,t)){const l=!Ne.length;for(const c of r)c[1](),Ne.push(c,n);if(l){for(let c=0;c<Ne.length;c+=2)Ne[c][0](Ne[c+1]);Ne.length=0}}}function s(a){i(a(n))}function o(a,l=$){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||$),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}const tt=Pn({auth:{},user:{displayName:"",uid:""}});function Ts(n){return n&&n.replaceAll(" ","-").replaceAll(":","").toLowerCase()}function At(n){return n&&new Date(n.seconds*1e3).toLocaleString()}function er(n){return n.map(e=>e.data())}function Xt(n){const e=window.location.hash.replace("#/","");let t=n;return e.length&&(t=n.filter(r=>{var i;return e.includes((i=r==null?void 0:r.board)==null?void 0:i.toLowerCase())})),t||[]}const Is={title:"",board:"",comments:[]};function As(){const n={allComments:[],boards:[],threads:[],lastVisibleThreadSnapshot:null,filteredThreads:[],selectedThread:Is},{subscribe:e,set:t,update:r}=Pn(n);return{subscribe:e,update:r,setLastSnap:i=>r(s=>({...s,lastVisibleThreadSnapshot:i})),setAllComments:i=>r(s=>({...s,allComments:i})),setBoards:i=>r(s=>({...s,boards:i})),setFilteredThreads:(i=[])=>r(s=>({...s,filteredThreads:Xt(s.threads.concat(i))})),setSelectedThread:i=>r(s=>({...s,selectedThread:i})),clearSelectedThread:()=>r(i=>({...i,selectedThread:{board:""}})),updateAllThreads:i=>r(s=>({...s,threads:s.threads.concat(i),filteredThreads:Xt(s.threads.concat(i))})),addThreadLocally:i=>r(s=>({...s,threads:[i,...s.threads],filteredThreads:Xt([i,...s.threads])})),addCommentLocally:i=>r(s=>{const o=[...s.allComments,i],a=s.selectedThread&&s.selectedThread.url===i.threadURL?{...s.selectedThread,comments:[...s.selectedThread.comments||[],i]}:s.selectedThread;return{...s,allComments:o,selectedThread:a}}),reset:()=>t(n)}}const F=As();function tr(n,e,t){const r=n.slice();return r[15]=e[t],r}function nr(n){let e,t,r,i,s,o,a=n[0].length&&rr(n);return{c(){e=b("div"),t=b("div"),r=b("h3"),r.textContent="Создать новую тему",i=P(),a&&a.c(),g(t,"class","modal-content svelte-1bc0c9m"),g(e,"class","modal-overlay svelte-1bc0c9m")},m(l,c){I(l,e,c),_(e,t),_(t,r),_(t,i),a&&a.m(t,null),s||(o=[Q(t,"click",is(n[8])),Q(e,"click",n[14])],s=!0)},p(l,c){l[0].length?a?a.p(l,c):(a=rr(l),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(l){l&&T(e),a&&a.d(),s=!1,ae(o)}}}function rr(n){var ue;let e,t,r,i,s,o,a,l,c,u,d,h,p,f,m,w,R,E,C=(ue=n[5])!=null&&ue.user?"Создать":"Войдите, чтобы создать",z,H,ie,We,ce=Pe(n[0]),D=[];for(let V=0;V<ce.length;V+=1)D[V]=ir(tr(n,ce,V));return{c(){var V;e=b("div"),t=b("p"),t.textContent="Выберите категорию:",r=P();for(let O=0;O<D.length;O+=1)D[O].c();i=P(),s=b("div"),o=b("label"),o.textContent="Заголовок темы:",a=P(),l=b("input"),c=P(),u=b("div"),d=b("label"),d.textContent="Текст сообщения:",h=P(),p=b("textarea"),f=P(),m=b("div"),w=b("button"),w.textContent="Отмена",R=P(),E=b("button"),z=j(C),g(e,"class","category-selector svelte-1bc0c9m"),g(o,"for","thread-title"),g(l,"type","text"),g(l,"id","thread-title"),g(l,"placeholder","Введите название темы..."),g(l,"class","svelte-1bc0c9m"),g(s,"class","input-group svelte-1bc0c9m"),g(d,"for","thread-description"),g(p,"id","thread-description"),g(p,"placeholder","Опишите вашу тему подробнее..."),g(p,"rows","5"),de(p,"width","100%"),de(p,"border-radius","4px"),de(p,"border","1px solid #ccc"),de(p,"padding","0.5rem"),g(u,"class","input-group svelte-1bc0c9m"),g(w,"class","btn svelte-1bc0c9m"),g(E,"class","forum-btn"),E.disabled=H=!n[3]||!n[4]||!n[2]||!((V=n[5])!=null&&V.user),g(m,"class","modal-actions svelte-1bc0c9m")},m(V,O){I(V,e,O),_(e,t),_(e,r);for(let se=0;se<D.length;se+=1)D[se]&&D[se].m(e,null);I(V,i,O),I(V,s,O),_(s,o),_(s,a),_(s,l),Be(l,n[3]),I(V,c,O),I(V,u,O),_(u,d),_(u,h),_(u,p),Be(p,n[4]),I(V,f,O),I(V,m,O),_(m,w),_(m,R),_(m,E),_(E,z),ie||(We=[Q(l,"input",n[11]),Q(p,"input",n[12]),Q(w,"click",n[13]),Q(E,"click",n[7])],ie=!0)},p(V,O){var se,Gn;if(O&69){ce=Pe(V[0]);let X;for(X=0;X<ce.length;X+=1){const Wn=tr(V,ce,X);D[X]?D[X].p(Wn,O):(D[X]=ir(Wn),D[X].c(),D[X].m(e,null))}for(;X<D.length;X+=1)D[X].d(1);D.length=ce.length}O&8&&l.value!==V[3]&&Be(l,V[3]),O&16&&Be(p,V[4]),O&32&&C!==(C=(se=V[5])!=null&&se.user?"Создать":"Войдите, чтобы создать")&&te(z,C),O&60&&H!==(H=!V[3]||!V[4]||!V[2]||!((Gn=V[5])!=null&&Gn.user))&&(E.disabled=H)},d(V){V&&(T(e),T(i),T(s),T(c),T(u),T(f),T(m)),Mt(D,V),ie=!1,ae(We)}}}function ir(n){let e,t,r,i,s,o=n[15].title+"",a,l,c,u;function d(){return n[10](n[15])}return{c(){var h;e=b("label"),t=b("input"),i=P(),s=b("span"),a=j(o),l=P(),g(t,"type","radio"),g(t,"name","category"),t.checked=r=n[15].url===((h=n[2])==null?void 0:h.url),g(e,"class","radio-label svelte-1bc0c9m")},m(h,p){I(h,e,p),_(e,t),_(e,i),_(e,s),_(s,a),_(e,l),c||(u=Q(t,"change",d),c=!0)},p(h,p){var f;n=h,p&5&&r!==(r=n[15].url===((f=n[2])==null?void 0:f.url))&&(t.checked=r),p&1&&o!==(o=n[15].title+"")&&te(a,o)},d(h){h&&T(e),c=!1,u()}}}function Ps(n){let e,t,r,i,s,o=n[1]&&nr(n);return{c(){e=b("button"),e.textContent="Создать тему",t=P(),o&&o.c(),r=wn(),g(e,"class","btn btn-primary svelte-1bc0c9m"),de(e,"width","100%"),de(e,"margin-bottom","1rem")},m(a,l){I(a,e,l),I(a,t,l),o&&o.m(a,l),I(a,r,l),i||(s=Q(e,"click",n[9]),i=!0)},p(a,[l]){a[1]?o?o.p(a,l):(o=nr(a),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i:$,o:$,d(a){a&&(T(e),T(t),T(r)),o&&o.d(a),i=!1,s()}}}function Vs(n,e,t){let r;Ce(n,tt,E=>t(5,r=E));let{listAllCategories:i=[]}=e,s=!1,o,a="",l="";const c=E=>{t(2,o=E)},u=()=>{pe(()=>import("./forumHelpers-BbOhnSxM.js"),[]).then(async E=>{const C=dt(tt);if(!(C!=null&&C.user))return;const z=`${o.url}/${Ts(a)}`,H={board:o.url,title:a,dateCreated:new Date,dateModified:new Date,url:z,user:{displayName:C.user.displayName,uid:C.user.uid}},ie={board:o.url,text:l,threadURL:z,dateCreated:new Date,dateModified:new Date,user:{displayName:C.user.displayName,uid:C.user.uid}};F.addThreadLocally(H),F.addCommentLocally(ie),window.location.hash=`#/thread/${z}`,t(1,s=!1),t(3,a=""),t(4,l=""),E.addThread(H),E.addComment(ie)})};function d(E){hs.call(this,n,E)}const h=()=>t(1,s=!0),p=E=>c(E);function f(){a=this.value,t(3,a)}function m(){l=this.value,t(4,l)}const w=()=>t(1,s=!1),R=()=>t(1,s=!1);return n.$$set=E=>{"listAllCategories"in E&&t(0,i=E.listAllCategories)},[i,s,o,a,l,r,c,u,d,h,p,f,m,w,R]}class Rs extends ye{constructor(e){super(),ge(this,e,Vs,Ps,le,{listAllCategories:0})}}function sr(n,e,t){const r=n.slice();return r[2]=e[t],r}function or(n){var c;let e,t,r=((c=n[0][0])==null?void 0:c.category)+"",i,s,o,a=Pe(n[0]),l=[];for(let u=0;u<a.length;u+=1)l[u]=ar(sr(n,a,u));return{c(){e=b("div"),t=b("h3"),i=j(r),s=P(),o=b("div");for(let u=0;u<l.length;u+=1)l[u].c();g(t,"class","board-category svelte-1ic7svu"),g(o,"class","collection shadow svelte-1ic7svu"),g(e,"class","board-group svelte-1ic7svu")},m(u,d){I(u,e,d),_(e,t),_(t,i),_(e,s),_(e,o);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(o,null)},p(u,d){var h;if(d&1&&r!==(r=((h=u[0][0])==null?void 0:h.category)+"")&&te(i,r),d&3){a=Pe(u[0]);let p;for(p=0;p<a.length;p+=1){const f=sr(u,a,p);l[p]?l[p].p(f,d):(l[p]=ar(f),l[p].c(),l[p].m(o,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=a.length}},d(u){u&&T(e),Mt(l,u)}}}function ar(n){let e,t=n[2].title+"",r,i,s,o;return{c(){e=b("a"),r=j(t),i=P(),g(e,"class",s="collection-item "+n[1](n[2])+" svelte-1ic7svu"),g(e,"href",o="#/"+n[2].url)},m(a,l){I(a,e,l),_(e,r),_(e,i)},p(a,l){l&1&&t!==(t=a[2].title+"")&&te(r,t),l&1&&s!==(s="collection-item "+a[1](a[2])+" svelte-1ic7svu")&&g(e,"class",s),l&1&&o!==(o="#/"+a[2].url)&&g(e,"href",o)},d(a){a&&T(e)}}}function Ss(n){let e,t=n[0].length&&or(n);return{c(){t&&t.c(),e=wn()},m(r,i){t&&t.m(r,i),I(r,e,i)},p(r,[i]){r[0].length?t?t.p(r,i):(t=or(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:$,o:$,d(r){r&&T(e),t&&t.d(r)}}}function Cs(n,e,t){let{boards:r=[]}=e;const i=s=>window.location.hash===`#/${s.url}`?"active":"";return n.$$set=s=>{"boards"in s&&t(0,r=s.boards)},[r,i]}class pt extends ye{constructor(e){super(),ge(this,e,Cs,Ss,le,{boards:0})}}function Ds(n){let e,t,r,i,s,o,a,l,c,u,d;return t=new Rs({props:{listAllCategories:n[1]}}),i=new pt({props:{boards:n[0].main}}),o=new pt({props:{boards:n[0].methods}}),l=new pt({props:{boards:n[0].life}}),u=new pt({props:{boards:n[0].legal}}),{c(){e=b("aside"),ne(t.$$.fragment),r=P(),ne(i.$$.fragment),s=P(),ne(o.$$.fragment),a=P(),ne(l.$$.fragment),c=P(),ne(u.$$.fragment)},m(h,p){I(h,e,p),Z(t,e,null),_(e,r),Z(i,e,null),_(e,s),Z(o,e,null),_(e,a),Z(l,e,null),_(e,c),Z(u,e,null),d=!0},p(h,[p]){const f={};p&2&&(f.listAllCategories=h[1]),t.$set(f);const m={};p&1&&(m.boards=h[0].main),i.$set(m);const w={};p&1&&(w.boards=h[0].methods),o.$set(w);const R={};p&1&&(R.boards=h[0].life),l.$set(R);const E={};p&1&&(E.boards=h[0].legal),u.$set(E)},i(h){d||(U(t.$$.fragment,h),U(i.$$.fragment,h),U(o.$$.fragment,h),U(l.$$.fragment,h),U(u.$$.fragment,h),d=!0)},o(h){G(t.$$.fragment,h),G(i.$$.fragment,h),G(o.$$.fragment,h),G(l.$$.fragment,h),G(u.$$.fragment,h),d=!1},d(h){h&&T(e),ee(t),ee(i),ee(o),ee(l),ee(u)}}}function ks(n,e,t){let{categories:r}=e,i=[];return ds(()=>{var s;(s=r.main)!=null&&s.length&&t(1,i=r.main.concat(r.methods||[]).concat(r.life||[]).concat(r.legal||[]))}),n.$$set=s=>{"categories"in s&&t(0,r=s.categories)},[r,i]}class $s extends ye{constructor(e){super(),ge(this,e,ks,Ds,le,{categories:0})}}function Os(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<i class="material-icons">account_circle</i>
            Вход`,g(e,"class","forum-btn")},m(i,s){I(i,e,s),t||(r=Q(e,"click",En(Bs)),t=!0)},p:$,d(i){i&&T(e),t=!1,r()}}}function Ns(n){let e,t=n[0].user.displayName+"",r,i,s,o,a;return{c(){e=b("span"),r=j(t),i=P(),s=b("button"),s.textContent="Выход",g(e,"class","user-name svelte-bwihaq"),g(s,"class","forum-btn secondary svelte-bwihaq")},m(l,c){I(l,e,c),_(e,r),I(l,i,c),I(l,s,c),o||(a=Q(s,"click",En(Ls)),o=!0)},p(l,c){c&1&&t!==(t=l[0].user.displayName+"")&&te(r,t)},d(l){l&&(T(e),T(i),T(s)),o=!1,a()}}}function Fs(n){let e;function t(s,o){var a,l;return(l=(a=s[0])==null?void 0:a.user)!=null&&l.displayName?Ns:Os}let r=t(n),i=r(n);return{c(){e=b("div"),i.c(),g(e,"class","toolbar-login svelte-bwihaq")},m(s,o){I(s,e,o),i.m(e,null)},p(s,[o]){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e,null)))},i:$,o:$,d(s){s&&T(e),i.d()}}}function Ls(){pe(()=>import("./index.esm-BrdPzmht.js"),[]).then(n=>{n.signOut(n.getAuth())})}function Bs(){pe(()=>import("./index.esm-BrdPzmht.js"),[]).then(n=>{const e=n.getAuth(),t=new n.GoogleAuthProvider;n.signInWithPopup(e,t)})}function Ms(n,e,t){let r;return Ce(n,tt,i=>t(0,r=i)),[r]}class xs extends ye{constructor(e){super(),ge(this,e,Ms,Fs,le,{})}}function Us(n){let e,t,r;return{c(){e=b("div"),e.innerHTML='<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div> <div class="gap-patch"><div class="circle"></div></div> <div class="circle-clipper right"><div class="circle"></div></div></div></div>',g(e,"class","loading-spinner")},m(i,s){I(i,e,s),r=!0},p:$,i(i){r||(i&&Ie(()=>{r&&(t||(t=Ae(e,Ve,{},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=Ae(e,Ve,{},!1)),t.run(0)),r=!1},d(i){i&&T(e),i&&t&&t.end()}}}class qs extends ye{constructor(e){super(),ge(this,e,null,Us,le,{})}}function js(n){let e,t,r,i,s,o,a,l,c,u,d,h,p;return{c(){var f,m;e=b("form"),t=b("div"),r=b("div"),i=b("input"),s=P(),o=b("label"),o.textContent="Comment text",a=P(),l=b("div"),c=b("button"),u=j("Add comment"),g(i,"id","input_text"),g(i,"type","text"),g(i,"data-length","120"),g(o,"for","input_text"),g(r,"class","input-field col s8 m9"),c.disabled=d=!n[0]||!((m=(f=n[2])==null?void 0:f.user)!=null&&m.displayName),g(c,"class","btn waves-effect waves-light"),de(c,"word-break","break-all"),g(c,"type","submit"),g(c,"name","action"),g(l,"class","input-field col s6 m3 right-align"),g(t,"class","row valign-wrapper")},m(f,m){I(f,e,m),_(e,t),_(t,r),_(r,i),Be(i,n[0]),_(r,s),_(r,o),_(t,a),_(t,l),_(l,c),_(c,u),h||(p=[Q(i,"input",n[4]),Q(e,"submit",En(n[5]))],h=!0)},p(f,[m]){var w,R;m&1&&i.value!==f[0]&&Be(i,f[0]),m&5&&d!==(d=!f[0]||!((R=(w=f[2])==null?void 0:w.user)!=null&&R.displayName))&&(c.disabled=d)},i:$,o:$,d(f){f&&T(e),h=!1,ae(p)}}}function zs(n,e,t){let r,i;Ce(n,F,c=>t(1,r=c)),Ce(n,tt,c=>t(2,i=c));let s="";const o=c=>{pe(()=>import("./forumHelpers-BbOhnSxM.js"),[]).then(async u=>{const d=dt(tt),h={board:c.board,text:s,threadURL:c.url,dateCreated:new Date,dateModified:new Date,user:{displayName:d.user.displayName,uid:d.user.uid}};F.addCommentLocally(h),t(0,s=""),u.addComment(h)})};function a(){s=this.value,t(0,s)}return[s,r,i,o,a,()=>o(r.selectedThread)]}class Hs extends ye{constructor(e){super(),ge(this,e,zs,js,le,{})}}function lr(n,e,t){const r=n.slice();return r[3]=e[t],r}function cr(n){var h,p;let e,t,r=n[0].selectedThread.title+"",i,s,o,a,l,c,u=Pe(((p=(h=n[0])==null?void 0:h.selectedThread)==null?void 0:p.comments)||[]),d=[];for(let f=0;f<u.length;f+=1)d[f]=ur(lr(n,u,f));return l=new Hs({}),{c(){e=b("h5"),t=j("Thread Title: "),i=j(r),s=P(),o=b("ul");for(let f=0;f<d.length;f+=1)d[f].c();a=P(),ne(l.$$.fragment),g(o,"class","collection")},m(f,m){I(f,e,m),_(e,t),_(e,i),I(f,s,m),I(f,o,m);for(let w=0;w<d.length;w+=1)d[w]&&d[w].m(o,null);I(f,a,m),Z(l,f,m),c=!0},p(f,m){var w,R;if((!c||m&1)&&r!==(r=f[0].selectedThread.title+"")&&te(i,r),m&1){u=Pe(((R=(w=f[0])==null?void 0:w.selectedThread)==null?void 0:R.comments)||[]);let E;for(E=0;E<u.length;E+=1){const C=lr(f,u,E);d[E]?d[E].p(C,m):(d[E]=ur(C),d[E].c(),d[E].m(o,null))}for(;E<d.length;E+=1)d[E].d(1);d.length=u.length}},i(f){c||(U(l.$$.fragment,f),c=!0)},o(f){G(l.$$.fragment,f),c=!1},d(f){f&&(T(e),T(s),T(o),T(a)),Mt(d,f),ee(l,f)}}}function ur(n){let e,t,r=n[3].user.displayName+"",i,s,o,a=At(n[3].dateCreated)+"",l,c,u,d=n[3].text+"",h,p;return{c(){e=b("li"),t=b("p"),i=j(r),s=P(),o=b("small"),l=j(a),c=P(),u=b("blockquote"),h=j(d),p=P(),g(e,"class","collection-item hoverable")},m(f,m){I(f,e,m),_(e,t),_(t,i),_(t,s),_(t,o),_(o,l),_(e,c),_(e,u),_(u,h),_(e,p)},p(f,m){m&1&&r!==(r=f[3].user.displayName+"")&&te(i,r),m&1&&a!==(a=At(f[3].dateCreated)+"")&&te(l,a),m&1&&d!==(d=f[3].text+"")&&te(h,d)},d(f){f&&T(e)}}}function Gs(n){var s;let e,t,r,i=((s=n[0].selectedThread)==null?void 0:s.title)&&cr(n);return{c(){e=b("div"),i&&i.c()},m(o,a){I(o,e,a),i&&i.m(e,null),r=!0},p(o,[a]){var l;(l=o[0].selectedThread)!=null&&l.title?i?(i.p(o,a),a&1&&U(i,1)):(i=cr(o),i.c(),U(i,1),i.m(e,null)):i&&(In(),G(i,1,1,()=>{i=null}),An())},i(o){r||(U(i),o&&Ie(()=>{r&&(t||(t=Ae(e,Ve,{},!0)),t.run(1))}),r=!0)},o(o){G(i),o&&(t||(t=Ae(e,Ve,{},!1)),t.run(0)),r=!1},d(o){o&&T(e),i&&i.d(),o&&t&&t.end()}}}function Ws(n,e,t){let r;Ce(n,F,o=>t(0,r=o));const i=(o,a)=>o.filter(l=>a.url===l.threadURL);function s(){F.update(o=>({...o,selectedThread:{...o.selectedThread,comments:i(o.allComments,o.selectedThread)}}))}return Tn(()=>{pe(()=>import("./forumHelpers-BbOhnSxM.js"),[]).then(o=>{console.log("mount getAllComments"),o.getAllComments().then(()=>{s()})})}),[r]}class dr extends ye{constructor(e){super(),ge(this,e,Ws,Gs,le,{})}}function Ks(n){return n()}function Qs(n){n.forEach(Ks)}const mt=[],hr=[],Et=[],fr=[],si=Promise.resolve();let ln=!1;function Ys(){ln||(ln=!0,si.then(Zs))}function Js(){return Ys(),si}function Xs(n){Et.push(n)}const Zt=new Set;let _t=0;function Zs(){do{for(;_t<mt.length;){const n=mt[_t];_t++,eo(n.$$)}for(mt.length=0,_t=0;hr.length;)hr.pop()();for(let n=0;n<Et.length;n+=1){const e=Et[n];Zt.has(e)||(Zt.add(e),e())}Et.length=0}while(mt.length);for(;fr.length;)fr.pop()();ln=!1,Zt.clear()}function eo(n){if(n.fragment!==null){n.update(),Qs(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Xs)}}const to={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},ve=(n,e)=>new CustomEvent(n,{detail:e});function no(n,e={}){const{root:t,rootMargin:r,threshold:i,unobserveOnEnter:s}=Object.assign(Object.assign({},to),e);let o={x:void 0,y:void 0},a={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&n){const l=new IntersectionObserver((c,u)=>{c.forEach(d=>{o.y>d.boundingClientRect.y?a.vertical="up":a.vertical="down",o.x>d.boundingClientRect.x?a.horizontal="left":a.horizontal="right",o={y:d.boundingClientRect.y,x:d.boundingClientRect.x};const h={inView:d.isIntersecting,entry:d,scrollDirection:a,node:n,observer:u};n.dispatchEvent(ve("inview_change",h)),n.dispatchEvent(ve("change",h)),d.isIntersecting?(n.dispatchEvent(ve("inview_enter",h)),n.dispatchEvent(ve("enter",h)),s&&u.unobserve(n)):(n.dispatchEvent(ve("inview_leave",h)),n.dispatchEvent(ve("leave",h)))})},{root:t,rootMargin:r,threshold:i});return Js().then(()=>{n.dispatchEvent(ve("inview_init",{observer:l,node:n})),n.dispatchEvent(ve("init",{observer:l,node:n}))}),l.observe(n),{destroy(){l.unobserve(n)}}}}const ro=Pn({app:null,db:null});var pr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},io=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ai={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),r.push(t[u],t[d],t[h],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):io(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new so;const h=s<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const f=c<<6&192|d;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class so extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oo=function(n){const e=oi(n);return ai.encodeByteArray(e,!0)},Pt=function(n){return oo(n).replace(/\./g,"")},ao=function(n){try{return ai.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=()=>lo().__FIREBASE_DEFAULTS__,uo=()=>{if(typeof process>"u"||typeof pr>"u")return;const n=pr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ho=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ao(n[1]);return e&&JSON.parse(e)},Vn=()=>{try{return co()||uo()||ho()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fo=n=>{var e,t;return(t=(e=Vn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},po=n=>{const e=fo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},li=()=>{var n;return(n=Vn())===null||n===void 0?void 0:n.config},hc=n=>{var e;return(e=Vn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pt(JSON.stringify(t)),Pt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ci())}function pc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _c(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gc(){const n=ci();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function go(){try{return typeof indexedDB=="object"}catch{return!1}}function yo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="FirebaseError";class He extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bo,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vo(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,r)}}function vo(n,e){return n.replace(wo,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wo=/\{\$([^}]+)}/g;function yc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(mr(s)&&mr(o)){if(!cn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function mr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ec(n,e){const t=new Eo(n,e);return t.subscribe.bind(t)}class Eo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");To(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=en),i.error===void 0&&(i.error=en),i.complete===void 0&&(i.complete=en);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function To(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function en(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Po(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ao(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ao(n){return n===Se?void 0:n}function Po(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Io(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const Ro={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},So=S.INFO,Co={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Do=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Co[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=So,this._logHandler=Do,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ro[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const ko=(n,e)=>e.some(t=>n instanceof t);let _r,gr;function $o(){return _r||(_r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oo(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hi=new WeakMap,un=new WeakMap,fi=new WeakMap,tn=new WeakMap,Rn=new WeakMap;function No(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ee(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hi.set(t,n)}).catch(()=>{}),Rn.set(e,n),e}function Fo(n){if(un.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});un.set(n,e)}let dn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return un.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ee(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lo(n){dn=n(dn)}function Bo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(nn(this),e,...t);return fi.set(r,e.sort?e.sort():[e]),Ee(r)}:Oo().includes(n)?function(...e){return n.apply(nn(this),e),Ee(hi.get(this))}:function(...e){return Ee(n.apply(nn(this),e))}}function Mo(n){return typeof n=="function"?Bo(n):(n instanceof IDBTransaction&&Fo(n),ko(n,$o())?new Proxy(n,dn):n)}function Ee(n){if(n instanceof IDBRequest)return No(n);if(tn.has(n))return tn.get(n);const e=Mo(n);return e!==n&&(tn.set(n,e),Rn.set(e,n)),e}const nn=n=>Rn.get(n);function xo(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ee(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ee(o.result),l.oldVersion,l.newVersion,Ee(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Uo=["get","getKey","getAll","getAllKeys","count"],qo=["put","add","delete","clear"],rn=new Map;function yr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rn.get(e))return rn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=qo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uo.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return rn.set(e,s),s}Lo(n=>({...n,get:(e,t,r)=>yr(e,t)||n.get(e,t,r),has:(e,t)=>!!yr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hn="@firebase/app",br="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new di("@firebase/app"),Ho="@firebase/app-compat",Go="@firebase/analytics-compat",Wo="@firebase/analytics",Ko="@firebase/app-check-compat",Qo="@firebase/app-check",Yo="@firebase/auth",Jo="@firebase/auth-compat",Xo="@firebase/database",Zo="@firebase/data-connect",ea="@firebase/database-compat",ta="@firebase/functions",na="@firebase/functions-compat",ra="@firebase/installations",ia="@firebase/installations-compat",sa="@firebase/messaging",oa="@firebase/messaging-compat",aa="@firebase/performance",la="@firebase/performance-compat",ca="@firebase/remote-config",ua="@firebase/remote-config-compat",da="@firebase/storage",ha="@firebase/storage-compat",fa="@firebase/firestore",pa="@firebase/vertexai-preview",ma="@firebase/firestore-compat",_a="firebase",ga="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]",ya={[hn]:"fire-core",[Ho]:"fire-core-compat",[Wo]:"fire-analytics",[Go]:"fire-analytics-compat",[Qo]:"fire-app-check",[Ko]:"fire-app-check-compat",[Yo]:"fire-auth",[Jo]:"fire-auth-compat",[Xo]:"fire-rtdb",[Zo]:"fire-data-connect",[ea]:"fire-rtdb-compat",[ta]:"fire-fn",[na]:"fire-fn-compat",[ra]:"fire-iid",[ia]:"fire-iid-compat",[sa]:"fire-fcm",[oa]:"fire-fcm-compat",[aa]:"fire-perf",[la]:"fire-perf-compat",[ca]:"fire-rc",[ua]:"fire-rc-compat",[da]:"fire-gcs",[ha]:"fire-gcs-compat",[fa]:"fire-fst",[ma]:"fire-fst-compat",[pa]:"fire-vertex","fire-js":"fire-js",[_a]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Map,ba=new Map,pn=new Map;function vr(n,e){try{n.container.addComponent(e)}catch(t){me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rt(n){const e=n.name;if(pn.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;pn.set(e,n);for(const t of Vt.values())vr(t,n);for(const t of ba.values())vr(t,n);return!0}function va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tc(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new ui("app","Firebase",wa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=ga;function Ia(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Te.create("bad-app-name",{appName:String(i)});if(t||(t=li()),!t)throw Te.create("no-options");const s=Vt.get(i);if(s){if(cn(t,s.options)&&cn(r,s.config))return s;throw Te.create("duplicate-app",{appName:i})}const o=new Vo(i);for(const l of pn.values())o.addComponent(l);const a=new Ea(t,r,o);return Vt.set(i,a),a}function Aa(n=fn){const e=Vt.get(n);if(!e&&n===fn&&li())return Ia();if(!e)throw Te.create("no-app",{appName:n});return e}function Ye(n,e,t){var r;let i=(r=ya[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(a.join(" "));return}Rt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="firebase-heartbeat-database",Va=1,rt="firebase-heartbeat-store";let sn=null;function pi(){return sn||(sn=xo(Pa,Va,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Te.create("idb-open",{originalErrorMessage:n.message})})),sn}async function Ra(n){try{const t=(await pi()).transaction(rt),r=await t.objectStore(rt).get(mi(n));return await t.done,r}catch(e){if(e instanceof He)me.warn(e.message);else{const t=Te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(t.message)}}}async function wr(n,e){try{const r=(await pi()).transaction(rt,"readwrite");await r.objectStore(rt).put(e,mi(n)),await r.done}catch(t){if(t instanceof He)me.warn(t.message);else{const r=Te.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});me.warn(r.message)}}}function mi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=1024,Ca=30*24*60*60*1e3;class Da{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $a(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Er();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ca}),this._storage.overwrite(this._heartbeatsCache))}catch(r){me.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Er(),{heartbeatsToSend:r,unsentEntries:i}=ka(this._heartbeatsCache.heartbeats),s=Pt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return me.warn(t),""}}}function Er(){return new Date().toISOString().substring(0,10)}function ka(n,e=Sa){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Tr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $a{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return go()?yo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ra(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tr(n){return Pt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){Rt(new nt("platform-logger",e=>new jo(e),"PRIVATE")),Rt(new nt("heartbeat",e=>new Da(e),"PRIVATE")),Ye(hn,br,n),Ye(hn,br,"esm2017"),Ye("fire-js","")}Oa("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new di("@firebase/firestore");function St(n,...e){if(qe.logLevel<=S.DEBUG){const t=e.map(Cn);qe.debug(`Firestore (${Ge}): ${n}`,...t)}}function Sn(n,...e){if(qe.logLevel<=S.ERROR){const t=e.map(Cn);qe.error(`Firestore (${Ge}): ${n}`,...t)}}function _i(n,...e){if(qe.logLevel<=S.WARN){const t=e.map(Cn);qe.warn(`Firestore (${Ge}): ${n}`,...t)}}function Cn(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n="Unexpected state"){const e=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: `+n;throw Sn(e),new Error(e)}function Re(n,e){n||k()}function xt(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="ok",Na="cancelled",Je="unknown",v="invalid-argument",Fa="deadline-exceeded",gi="not-found",La="permission-denied",mn="unauthenticated",Ba="resource-exhausted",je="failed-precondition",Ma="aborted",xa="out-of-range",yi="unimplemented",Ua="internal",qa="unavailable";class y extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ja{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(W.UNAUTHENTICATED))}shutdown(){}}class za{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ha{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Re(typeof e.accessToken=="string"),new bi(e.accessToken,new W(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ga{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Wa{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ga(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ka{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qa{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Re(typeof e.token=="string"),new Ka(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class it{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new it("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof it&&e.projectId===this.projectId&&e.database===this.database}}class st{constructor(e,t,r){t===void 0?t=0:t>e.length&&k(),r===void 0?r=e.length-t:r>e.length-t&&k(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends st{construct(e,t,r){return new L(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(v,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Ja=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends st{construct(e,t,r){return new K(e,t,r)}static isValidIdentifier(e){return Ja.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(v,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(v,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new y(v,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(v,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(L.fromString(e))}static fromName(e){return new M(L.fromString(e).popFirst(5))}static empty(){return new M(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new L(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e,t){if(!t)throw new y(v,`Function ${n}() cannot be called with an empty ${e}.`)}function Ar(n){if(!M.isDocumentKey(n))throw new y(v,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pr(n){if(M.isDocumentKey(n))throw new y(v,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ut(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(v,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ut(n);throw new y(v,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Xa(n,e){if(e<=0)throw new y(v,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt=null;function Za(){return gt===null?gt=function(){return 268435456+Math.round(2147483648*Math.random())}():gt++,"0x"+gt.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){return n==null}function Ct(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr,A;function Rr(n){if(n===void 0)return Sn("RPC_ERROR","HTTP error has no status"),Je;switch(n){case 200:return Ir;case 400:return je;case 401:return mn;case 403:return La;case 404:return gi;case 409:return Ma;case 416:return xa;case 429:return Ba;case 499:return Na;case 500:return Je;case 501:return yi;case 503:return qa;case 504:return Fa;default:return n>=200&&n<300?Ir:n>=400&&n<500?je:n>=500&&n<600?Ua:Je}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A=Vr||(Vr={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class nl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){const a=Za(),l=this.V(t,r.toUriEncodedString());St("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,s,o),this.p(t,l,c,i).then(u=>(St("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw _i("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}I(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ge}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}V(t,r){const i=tl[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new y(Rr(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new y(Rr(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rl(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function B(n,e){return n<e?-1:n>e?1:0}function Ei(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sl("Invalid base64 string: "+s):s}}(e);return new _e(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const ol=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ke(n){if(Re(!!n),typeof n=="string"){let e=0;const t=ol.exec(n);if(Re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:N(n.seconds),nanos:N(n.nanos)}}function N(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ot(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(v,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(v,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(v,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(v,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Y(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ti(n){const e=n.mapValue.fields.__previous_value__;return Dn(e)?Ti(e):e}function at(n){const e=ke(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={};function $e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dn(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:function(t){var r,i;return((i=(((r=t==null?void 0:t.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(n)?10:11:k()}function Dt(n,e){if(n===e)return!0;const t=$e(n);if(t!==$e(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return at(n).isEqual(at(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ke(i.timestampValue),a=ke(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ot(i.bytesValue).isEqual(ot(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return N(i.geoPointValue.latitude)===N(s.geoPointValue.latitude)&&N(i.geoPointValue.longitude)===N(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return N(i.integerValue)===N(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=N(i.doubleValue),a=N(s.doubleValue);return o===a?Ct(o)===Ct(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ei(n.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Sr(o)!==Sr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dt(o[l],a[l])))return!1;return!0}(n,e);default:return k()}}function lt(n,e){return(n.values||[]).find(t=>Dt(t,e))!==void 0}function kt(n,e){if(n===e)return 0;const t=$e(n),r=$e(e);if(t!==r)return B(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=N(s.integerValue||s.doubleValue),l=N(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Cr(n.timestampValue,e.timestampValue);case 4:return Cr(at(n),at(e));case 5:return B(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ot(s),l=ot(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=B(a[c],l[c]);if(u!==0)return u}return B(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=B(N(s.latitude),N(o.latitude));return a!==0?a:B(N(s.longitude),N(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dr(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,u;const d=s.fields||{},h=o.fields||{},p=(a=d.value)===null||a===void 0?void 0:a.arrayValue,f=(l=h.value)===null||l===void 0?void 0:l.arrayValue,m=B(((c=p==null?void 0:p.values)===null||c===void 0?void 0:c.length)||0,((u=f==null?void 0:f.values)===null||u===void 0?void 0:u.length)||0);return m!==0?m:Dr(p,f)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===yt&&o===yt)return 0;if(s===yt)return 1;if(o===yt)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const h=B(l[d],u[d]);if(h!==0)return h;const p=kt(a[l[d]],c[u[d]]);if(p!==0)return p}return B(l.length,u.length)}(n.mapValue,e.mapValue);default:throw k()}}function Cr(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=ke(n),r=ke(e),i=B(t.seconds,r.seconds);return i!==0?i:B(t.nanos,r.nanos)}function Dr(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=kt(t[i],r[i]);if(s)return s}return B(t.length,r.length)}function $t(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ii(n){return!!n&&"arrayValue"in n}function kr(n){return!!n&&"nullValue"in n}function $r(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function on(n){return!!n&&"mapValue"in n}function Xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xe(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xe(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Ot{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{}class re extends Ai{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new al(e,t,r):t==="array-contains"?new ul(e,r):t==="in"?new dl(e,r):t==="not-in"?new hl(e,r):t==="array-contains-any"?new fl(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ll(e,r):new cl(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kt(t,this.value)):t!==null&&$e(this.value)===$e(t)&&this.matchesComparison(kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Ai{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new ht(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class al extends re{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class ll extends re{constructor(e,t){super(e,"in",t),this.keys=Pi("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cl extends re{constructor(e,t){super(e,"not-in",t),this.keys=Pi("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pi(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class ul extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ii(t)&&lt(t.arrayValue,this.value)}}class dl extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&lt(this.value.arrayValue,t)}}class hl extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(lt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!lt(this.value.arrayValue,t)}}class fl extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ii(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>lt(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Y(0,0))}static max(){return new q(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.comparator=e,this.root=t||x.EMPTY}insert(e,t){return new Ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,x.BLACK,null,null))}remove(e){return new Ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,x.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bt(this.root,e,this.comparator,!1)}getReverseIterator(){return new bt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bt(this.root,e,this.comparator,!0)}}class bt{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class x{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??x.RED,this.left=i??x.EMPTY,this.right=s??x.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new x(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return x.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return x.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}x.EMPTY=null,x.RED=!0,x.BLACK=!1;x.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,r,i,s){return this}insert(e,t,r){return new x(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Or(this.data.getIterator())}getIteratorFrom(e){return new Or(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ct(this.comparator);return t.data=e,t}}class Or{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new ut([])}unionWith(e){let t=new ct(K.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.value=e}static empty(){return new oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!on(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xe(t)}setAll(e){let t=K.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Xe(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());on(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];on(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new oe(Xe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new we(e,0,q.min(),q.min(),q.min(),oe.empty(),0)}static newFoundDocument(e,t,r,i){return new we(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new we(e,2,t,q.min(),q.min(),oe.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,q.min(),q.min(),oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Nr(n,e=null,t=[],r=[],i=null,s=null,o=null){return new pl(n,e,t,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Vi(n){return n.collectionGroup!==null}function Ri(n){const e=xt(n);if(e.S===null){e.S=[];const t=new Set;for(const s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ct(K.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new Nt(s,r))}),t.has(K.keyField().canonicalString())||e.S.push(new Nt(K.keyField(),r))}return e.S}function ml(n){const e=xt(n);return e.N||(e.N=_l(e,Ri(n))),e.N}function _l(n,e){if(n.limitType==="F")return Nr(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nt(i.field,s)});const t=n.endAt?new Ot(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ot(n.startAt.position,n.startAt.inclusive):null;return Nr(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _n(n,e){const t=n.filters.concat([e]);return new ft(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ct(e)?"-0":e}}function gl(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ct(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):Si(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this._=void 0}}class yl extends zt{}class bl extends zt{constructor(e){super(),this.elements=e}}class vl extends zt{constructor(e){super(),this.elements=e}}class wl extends zt{constructor(e,t){super(),this.serializer=e,this.q=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ht{}class Ci extends Ht{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends Ht{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class El extends Ht{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tl extends Ht{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={asc:"ASCENDING",desc:"DESCENDING"},Al={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pl={and:"AND",or:"OR"};class Vl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sl(n,e){return gn(n,e.toTimestamp())}function Fr(n){return Re(!!n),q.fromTimestamp(function(t){const r=ke(t);return new Y(r.seconds,r.nanos)}(n))}function kn(n,e){return yn(n,e).canonicalString()}function yn(n,e){const t=function(i){return new L(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bn(n,e){return kn(n.databaseId,e.path)}function Cl(n,e){const t=function(i){const s=L.fromString(i);return Re($i(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new y(v,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(v,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(function(i){return Re(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function Lr(n,e,t){return{name:bn(n,e),fields:t.value.mapValue.fields}}function Dl(n,e){let t;if(e instanceof Ci)t={update:Lr(n,e.key,e.value)};else if(e instanceof El)t={delete:bn(n,e.key)};else if(e instanceof Di)t={update:Lr(n,e.key,e.data),updateMask:Fl(e.fieldMask)};else{if(!(e instanceof Tl))return k();t={verify:bn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wl)return{fieldPath:o.field.canonicalString(),increment:a.q};throw k()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sl(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(n,e.precondition)),t}function kl(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(c,u){return kn(c.databaseId,u)}(n,i);const s=function(c){if(c.length!==0)return ki(ht.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Le(h.field),direction:$l(h.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||el(u)?u:{value:u}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:t,parent:i}}function $l(n){return Il[n]}function Ol(n){return Al[n]}function Nl(n){return Pl[n]}function Le(n){return{fieldPath:n.canonicalString()}}function ki(n){return n instanceof re?function(t){if(t.op==="=="){if($r(t.value))return{unaryFilter:{field:Le(t.field),op:"IS_NAN"}};if(kr(t.value))return{unaryFilter:{field:Le(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($r(t.value))return{unaryFilter:{field:Le(t.field),op:"IS_NOT_NAN"}};if(kr(t.value))return{unaryFilter:{field:Le(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Le(t.field),op:Ol(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(i=>ki(i));return r.length===1?r[0]:{compositeFilter:{op:Nl(t.op),filters:r}}}(n):k()}function Fl(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $i(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){return new Vl(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new y(je,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,yn(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===mn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(Je,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,yn(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===mn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(Je,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Oi(n,e){const t=xt(n),r={writes:e.map(i=>Dl(t.serializer,i))};await t.P("Commit",t.serializer.databaseId,L.emptyPath(),r)}async function Bl(n,e){const t=xt(n),{B:r,parent:i}=kl(t.serializer,ml(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,c){const u=Cl(a,l.name),d=Fr(l.updateTime),h=l.createTime?Fr(l.createTime):q.min(),p=new oe({mapValue:{fields:l.fields}}),f=we.newFoundDocument(u,d,h,p);return c?f.setHasCommittedMutations():f}(t.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Map;function On(n){if(n._terminated)throw new y(je,"The client has already been terminated.");if(!Ze.has(n)){St("ComponentProvider","Initializing Datastore");const e=function(s){return new nl(s,fetch.bind(null))}(function(s,o,a,l){return new Ya(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,wi(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=$n(n._databaseId),r=function(s,o,a,l){return new Ll(s,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);Ze.set(n,r)}return Ze.get(n)}class Br{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(v,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(v,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new y(v,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wi((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(v,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(v,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(v,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gt{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Br({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new y(je,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new y(je,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Br(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ja;switch(r.type){case"firstParty":return new Wa(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(v,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ze.get(t);r&&(St("ComponentProvider","Removing Datastore"),Ze.delete(t),r.terminate())}(this),Promise.resolve()}}function Vc(n,e){const t=typeof n=="object"?n:Aa(),r=typeof n=="string"?n:"(default)",i=va(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=po("firestore");s&&Ml(i,...s)}return i}function Ml(n,e,t,r={}){var i;const s=(n=qt(n,Gt))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=W.MOCK_USER;else{a=_o(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(v,"mockUserToken must contain 'sub' or 'user_id' field!");l=new W(c)}n._authCredentials=new za(new bi(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new be(this.firestore,e,this._query)}}class J{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new J(this.firestore,e,this._key)}}class fe extends be{constructor(e,t,r){super(e,t,function(s){return new ft(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new J(this.firestore,null,new M(e))}withConverter(e){return new fe(this.firestore,e,this._path)}}function Mr(n,e,...t){if(n=De(n),vi("collection","path",e),n instanceof Gt){const r=L.fromString(e,...t);return Pr(r),new fe(n,null,r)}{if(!(n instanceof J||n instanceof fe))throw new y(v,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return Pr(r),new fe(n.firestore,null,r)}}function xl(n,e,...t){if(n=De(n),arguments.length===1&&(e=il.newId()),vi("doc","path",e),n instanceof Gt){const r=L.fromString(e,...t);return Ar(r),new J(n,null,new M(r))}{if(!(n instanceof J||n instanceof fe))throw new y(v,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return Ar(r),new J(n.firestore,n instanceof fe?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ze(_e.fromBase64String(e))}catch(t){throw new y(v,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ze(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(v,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(v,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(v,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=/^__.*__$/;class ql{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}function Fi(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Bn{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new Bn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Lt(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Fi(this.et)&&Ul.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class jl{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$n(e)}ht(e,t,r,i=!1){return new Bn({et:e,methodName:t,lt:r,path:K.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wt(n){const e=n._freezeSettings(),t=$n(n._databaseId);return new jl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Li(n,e,t,r,i,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,i);Ui("Data must be an object, but it was:",o,r);const a=Mi(r,o);let l,c;if(s.merge)l=new ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const h=zl(e,d,t);if(!o.contains(h))throw new y(v,`Field '${h}' is specified in your field mask but missing from your input data.`);Gl(u,h)||u.push(h)}l=new ut(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new ql(new oe(a),l,c)}function Bi(n,e,t,r=!1){return Mn(t,n.ht(r?4:3,e))}function Mn(n,e){if(xi(n=De(n)))return Ui("Unsupported field value:",e,n),Mi(n,e);if(n instanceof Ni)return function(r,i){if(!Fi(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Mn(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Y.fromDate(r);return{timestampValue:gn(i.serializer,s)}}if(r instanceof Y){const s=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gn(i.serializer,s)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ze)return{bytesValue:Rl(i.serializer,r._byteString)};if(r instanceof J){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kn(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return Si(a.serializer,l)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${Ut(r)}`)}(n,e)}function Mi(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,i)=>{const s=Mn(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function xi(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Fn||n instanceof ze||n instanceof J||n instanceof Ni||n instanceof Ln)}function Ui(n,e,t){if(!xi(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ut(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}function zl(n,e,t){if((e=De(e))instanceof Nn)return e._internalPath;if(typeof e=="string")return qi(n,e);throw Lt("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hl=new RegExp("[~\\*/\\[\\]]");function qi(n,e,t){if(e.search(Hl)>=0)throw Lt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nn(...e.split("."))._internalPath}catch{throw Lt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lt(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new y(v,a+n+l)}function Gl(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zi(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zi extends ji{data(){return super.data()}}class Wl{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Hi(n,e){return typeof e=="string"?qi(n,e):e instanceof Nn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{}class Kt extends xn{}function xr(n,e,...t){let r=[];e instanceof xn&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof qn).length,a=s.filter(l=>l instanceof Un).length;if(o>1||o>0&&a>0)throw new y(v,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Un extends Kt{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Un(e,t,r)}_apply(e){const t=this._parse(e);return Gi(e._query,t),new be(e.firestore,e.converter,_n(e._query,t))}_parse(e){const t=Wt(e.firestore);return function(s,o,a,l,c,u,d){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(v,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){zr(d,u);const p=[];for(const f of d)p.push(jr(l,s,f));h={arrayValue:{values:p}}}else h=jr(l,s,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||zr(d,u),h=Bi(a,o,d,u==="in"||u==="not-in");return re.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class qn extends xn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qn(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Gi(o,l),o=_n(o,l)}(e._query,t),new be(e.firestore,e.converter,_n(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jn extends Kt{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new jn(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new y(v,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(v,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nt(s,o)}(e._query,this._field,this._direction);return new be(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ft(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Ur(n,e="asc"){const t=e,r=Hi("orderBy",n);return jn._create(r,t)}class zn extends Kt{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new zn(e,t,r)}_apply(e){return new be(e.firestore,e.converter,function(r,i,s){return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function qr(n){return Xa("limit",n),zn._create("limit",n,"F")}class Hn extends Kt{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Hn(e,t,r)}_apply(e){const t=Ql(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(i,s){return new ft(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Kl(...n){return Hn._create("startAfter",n,!1)}function Ql(n,e,t,r){if(t[0]=De(t[0]),t[0]instanceof ji)return function(s,o,a,l,c){if(!l)throw new y(gi,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const d of Ri(s))if(d.field.isKeyField())u.push($t(o,l.key));else{const h=l.data.field(d.field);if(Dn(h))throw new y(v,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const p=d.field.canonicalString();throw new y(v,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ot(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Wt(n.firestore);return function(o,a,l,c,u,d){const h=o.explicitOrderBy;if(u.length>h.length)throw new y(v,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let f=0;f<u.length;f++){const m=u[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new y(v,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Vi(o)&&m.indexOf("/")!==-1)throw new y(v,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const w=o.path.child(L.fromString(m));if(!M.isDocumentKey(w))throw new y(v,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const R=new M(w);p.push($t(a,R))}else{const w=Bi(l,c,m);p.push(w)}}return new Ot(p,d)}(n._query,n.firestore._databaseId,i,e,t,r)}}function jr(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new y(v,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vi(e)&&t.indexOf("/")!==-1)throw new y(v,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(L.fromString(t));if(!M.isDocumentKey(r))throw new y(v,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $t(n,new M(r))}if(t instanceof J)return $t(n,t._key);throw new y(v,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ut(t)}.`)}function zr(n,e){if(!Array.isArray(n)||n.length===0)throw new y(v,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gi(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(v,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(v,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Yl extends class{convertValue(t,r="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return N(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ot(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw k()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return jt(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertVectorValue(t){var r,i,s;const o=(s=(i=(r=t.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>N(a.doubleValue));return new Ln(o)}convertGeoPoint(t){return new Fn(N(t.latitude),N(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=Ti(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(at(t));default:return null}}convertTimestamp(t){const r=ke(t);return new Y(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=L.fromString(t);Re($i(i));const s=new it(i.get(1),i.get(3)),o=new M(i.popFirst(5));return s.isEqual(r)||Sn(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}function Hr(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new y(yi,"limitToLast() queries require specifying at least one orderBy() clause")})((n=qt(n,be))._query);const e=On(n.firestore),t=new Yl(n.firestore);return Bl(e,n._query).then(r=>{const i=r.map(s=>new zi(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new Wl(n,i)})}function Sc(n,e,t){const r=Wi((n=qt(n,J)).converter,e),i=Li(Wt(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return Oi(On(n.firestore),[i.toMutation(n._key,Ue.none())])}function Cc(n,e){const t=xl(n=qt(n,fe)),r=Wi(n.converter,e),i=Li(Wt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Oi(On(n.firestore),[i.toMutation(t._key,Ue.exists(!1))]).then(()=>t)}(function(){(function(t){Ge=t})(`${Ta}_lite`),Rt(new nt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Gt(new Ha(e.getProvider("auth-internal")),new Qa(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(v,'"projectId" not provided in firebase.initializeApp.');return new it(a.options.projectId,l)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ye("firestore-lite","4.7.3",""),Ye("firestore-lite","4.7.3","esm2017")})();async function Ki(n,e,t,r=null,i=25){var o,a;const{db:s}=dt(ro);if(r){const l=xr(Mr(s,n),Ur(e),Kl(r),qr(i)),c=await Hr(l);return[(c==null?void 0:c.docs[((o=c==null?void 0:c.docs)==null?void 0:o.length)-1])||null,er(c.docs)]}else if(t){const l=xr(Mr(s,n),Ur(e),qr(i)),c=await Hr(l);return[(c==null?void 0:c.docs[((a=c==null?void 0:c.docs)==null?void 0:a.length)-1])||null,er(c.docs)]}}async function Qi(n,e){if(n.inView){const{lastVisibleThreadSnapshot:t}=dt(e);if(!t)return;const r=await Ki("threads","dateCreated",!1,t);e.setLastSnap(r[0]),r[1].length>0&&e.updateAllThreads(r[1])}}const Jl=Object.freeze(Object.defineProperty({__proto__:null,getNextThreadsPage:Qi,getPaginatedResults:Ki},Symbol.toStringTag,{value:"Module"}));function Gr(n,e,t){const r=n.slice();return r[5]=e[t],r}function Wr(n){var We,ce;let e,t,r,i,s,o=n[5].title+"",a,l,c,u,d,h,p=At((We=n[5])==null?void 0:We.dateCreated)+"",f,m,w,R=((ce=n[5])==null?void 0:ce.board.replace("boards/",""))+"",E,C,z,H;function ie(){return n[3](n[5])}return{c(){var D;e=b("li"),t=b("i"),t.textContent="forum",r=P(),i=b("div"),s=b("a"),a=j(o),c=P(),u=b("br"),d=P(),h=b("span"),f=j(p),m=P(),w=b("span"),E=j(R),C=P(),g(t,"class","material-icons circle avatar-bg"),g(s,"class","thread-link svelte-1n4hnsk"),g(s,"href",l="#/"+((D=n[5])==null?void 0:D.url)),g(h,"class","thread-date svelte-1n4hnsk"),g(w,"class","new badge"),g(i,"class","thread-info"),g(e,"class","collection-item avatar")},m(D,ue){I(D,e,ue),_(e,t),_(e,r),_(e,i),_(i,s),_(s,a),_(i,c),_(i,u),_(i,d),_(i,h),_(h,f),_(i,m),_(i,w),_(w,E),_(e,C),z||(H=Q(s,"click",ie),z=!0)},p(D,ue){var V,O,se;n=D,ue&1&&o!==(o=n[5].title+"")&&te(a,o),ue&1&&l!==(l="#/"+((V=n[5])==null?void 0:V.url))&&g(s,"href",l),ue&1&&p!==(p=At((O=n[5])==null?void 0:O.dateCreated)+"")&&te(f,p),ue&1&&R!==(R=((se=n[5])==null?void 0:se.board.replace("boards/",""))+"")&&te(E,R)},d(D){D&&T(e),z=!1,H()}}}function Kr(n){let e,t=n[5]&&Wr(n);return{c(){t&&t.c(),e=wn()},m(r,i){t&&t.m(r,i),I(r,e,i)},p(r,i){r[5]?t?t.p(r,i):(t=Wr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&T(e),t&&t.d(r)}}}function Qr(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="",de(e,"height","1rem"),de(e,"display","block")},m(i,s){I(i,e,s),t||(r=[Zi(no.call(null,e,n[1])),Q(e,"change",n[2])],t=!0)},p:$,d(i){i&&T(e),t=!1,ae(r)}}}function Xl(n){let e,t,r,i,s,o,a,l=Pe(n[0].filteredThreads),c=[];for(let d=0;d<l.length;d+=1)c[d]=Kr(Gr(n,l,d));let u=n[0].filteredThreads.length&&Qr(n);return{c(){e=b("div"),t=b("h2"),t.textContent="Список тем",r=P(),i=b("ul");for(let d=0;d<c.length;d+=1)c[d].c();s=P(),u&&u.c(),g(t,"class","forum-title svelte-1n4hnsk"),g(i,"class","collection svelte-1n4hnsk"),g(e,"class","forum-content")},m(d,h){I(d,e,h),_(e,t),_(e,r),_(e,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(i,null);_(e,s),u&&u.m(e,null),a=!0},p(d,[h]){if(h&1){l=Pe(d[0].filteredThreads);let p;for(p=0;p<l.length;p+=1){const f=Gr(d,l,p);c[p]?c[p].p(f,h):(c[p]=Kr(f),c[p].c(),c[p].m(i,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}d[0].filteredThreads.length?u?u.p(d,h):(u=Qr(d),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(d){a||(d&&Ie(()=>{a&&(o||(o=Ae(e,Ve,{},!0)),o.run(1))}),a=!0)},o(d){d&&(o||(o=Ae(e,Ve,{},!1)),o.run(0)),a=!1},d(d){d&&T(e),Mt(c,d),u&&u.d(),d&&o&&o.end()}}}function Zl(n,e,t){let r;Ce(n,F,l=>t(0,r=l));const i={rootMargin:"0px"},s=async({detail:l})=>{Qi(l,F)},o=()=>{const{threads:l,lastVisibleThreadSnapshot:c}=dt(F);(l.length===0||c)&&pe(()=>import("./initFireBase-nLTdp8L2.js"),__vite__mapDeps([0,1])).then(()=>{pe(()=>Promise.resolve().then(()=>Jl),void 0).then(async u=>{const d=await u.getPaginatedResults("threads","dateCreated",l.length===0,c);F.setLastSnap(d[0]),d[1].length>0&&F.updateAllThreads(d[1])})})};return Tn(()=>{o()}),[r,i,s,l=>F.setSelectedThread(l)]}class Yr extends ye{constructor(e){super(),ge(this,e,Zl,Xl,le,{})}}const ec=[{collectionName:"boards",documents:[{category:"General",title:"Announcements",url:"boards/announcements"},{category:"General",title:"Social",url:"boards/social"},{category:"General",title:"Tutorials",url:"boards/tutorials"},{category:"Ideas",title:"Design",url:"boards/design"},{category:"Ideas",title:"Features",url:"boards/features"},{category:"Support",title:"Hosting",url:"boards/hosting"},{category:"Support",title:"Installation",url:"boards/installation"},{category:"Support",title:"Upgrades",url:"boards/upgrades"}]}],tc=n=>{ec.forEach(e=>{e.documents.forEach(async t=>{await n.addNewDocument(n.globalFirestoreDB,e.collectionName,t,t.title)})})},vt=(n,e)=>n.filter(t=>(t==null?void 0:t.category)===e);async function nc(n,e){return n.length===0?(console.log("Seeding boards..."),tc(e),await e.getAllCollectionDocs("boards")):n}const rc=()=>{pe(()=>import("./initFireBase-nLTdp8L2.js"),__vite__mapDeps([0,1])).then(()=>{pe(()=>import("./forumHelpers-BbOhnSxM.js"),[]).then(async n=>{let e=await n.getAllCollectionDocs("boards");e.length===0&&(e=await nc(e,n)),F.setBoards(e)})})};class ic{constructor(e){this.routes=[],this.mode="hash",this.root="/",this.addRoute=(t,r)=>(this.routes.push({path:t,callback:r}),this),this.cleanPath=t=>t.toString().replace(/\/$/,"").replace(/^\//,""),this.getCurrentRoute=()=>{let t="";if(this.mode==="history")t=this.cleanPath(decodeURI(window.location.pathname+window.location.search)),t=t.replace(/\?(.*)$/,""),t=this.root!=="/"?t.replace(this.root,""):t;else{const r=window.location.href.match(/#(.*)$/);t=r?r[1]:""}return this.cleanPath(t)},this.initializeNavigationListener=()=>{clearInterval(this.interval),this.interval=setInterval(this.getCustomInterval,50)},this.getCustomInterval=()=>{this.current!==this.getCurrentRoute()&&(this.current=this.getCurrentRoute(),this.routes.some(t=>{const r=this.current.match(t.path);return r?(r.shift(),t.callback.apply({},r),r):!1}))},this.mode=window.history.pushState?"history":"hash",e.mode&&(this.mode=e.mode),e.root&&(this.root=e.root),this.initializeNavigationListener()}}function sc(){new ic({mode:"hash",root:"/"}).addRoute(/boards\/\w+\/\w+/,()=>{F.setFilteredThreads()}).addRoute(/boards/,()=>{F.clearSelectedThread(),F.setFilteredThreads()}).addRoute("",()=>{F.clearSelectedThread(),F.setFilteredThreads()})}function oc(n){var f;let e,t,r,i,s,o,a,l,c,u,d;r=new xs({}),a=new $s({props:{categories:n[0]}});var h=(f=n[1].selectedThread)!=null&&f.board?dr:Yr;function p(m,w){return{}}return h&&(u=Qn(h,p())),{c(){e=b("div"),t=b("header"),ne(r.$$.fragment),i=P(),s=b("div"),o=b("aside"),ne(a.$$.fragment),l=P(),c=b("div"),u&&ne(u.$$.fragment),g(t,"class","forum-header svelte-115cryt"),g(o,"class","forum-sidebar svelte-115cryt"),g(c,"class","forum-main svelte-115cryt"),g(s,"class","forum-layout svelte-115cryt"),g(e,"class","main__content clearfix")},m(m,w){I(m,e,w),_(e,t),Z(r,t,null),_(e,i),_(e,s),_(s,o),Z(a,o,null),_(s,l),_(s,c),u&&Z(u,c,null),d=!0},p(m,w){var E;const R={};if(w&1&&(R.categories=m[0]),a.$set(R),w&2&&h!==(h=(E=m[1].selectedThread)!=null&&E.board?dr:Yr)){if(u){In();const C=u;G(C.$$.fragment,1,0,()=>{ee(C,1)}),An()}h?(u=Qn(h,p()),ne(u.$$.fragment),U(u.$$.fragment,1),Z(u,c,null)):u=null}},i(m){d||(U(r.$$.fragment,m),U(a.$$.fragment,m),u&&U(u.$$.fragment,m),d=!0)},o(m){G(r.$$.fragment,m),G(a.$$.fragment,m),u&&G(u.$$.fragment,m),d=!1},d(m){m&&T(e),ee(r),ee(a),u&&ee(u)}}}function ac(n){let e,t;return e=new qs({}),{c(){ne(e.$$.fragment)},m(r,i){Z(e,r,i),t=!0},p:$,i(r){t||(U(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){ee(e,r)}}}function lc(n){let e,t,r,i,s;const o=[ac,oc],a=[];function l(c,u){var d,h;return!((d=c[0].main)!=null&&d.length)&&!((h=c[0].methods)!=null&&h.length)?0:1}return t=l(n),r=a[t]=o[t](n),{c(){e=b("div"),r.c(),g(e,"class","forum-embedded-app svelte-115cryt")},m(c,u){I(c,e,u),a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?a[t].p(c,u):(In(),G(a[d],1,1,()=>{a[d]=null}),An(),r=a[t],r?r.p(c,u):(r=a[t]=o[t](c),r.c()),U(r,1),r.m(e,null))},i(c){s||(U(r),c&&Ie(()=>{s&&(i||(i=Ae(e,Ve,{},!0)),i.run(1))}),s=!0)},o(c){G(r),c&&(i||(i=Ae(e,Ve,{},!1)),i.run(0)),s=!1},d(c){c&&T(e),a[t].d(),c&&i&&i.end()}}}function cc(n,e,t){let r;Ce(n,F,s=>t(1,r=s));let i={};return Tn(()=>{F.subscribe(s=>{t(0,i.main=vt(s.boards,"Главное"),i),t(0,i.methods=vt(s.boards,"Методы коррекции"),i),t(0,i.life=vt(s.boards,"Жизнь после операции"),i),t(0,i.legal=vt(s.boards,"Юридическая помощь"),i)}),sc(),rc()}),[i,r]}class uc extends ye{constructor(e){super(),ge(this,e,cc,lc,le,{})}}new uc({target:document.getElementById("app")});export{va as A,fo as B,nt as C,Aa as D,ui as E,He as F,cn as G,gc as H,yc as I,vc as J,wc as K,di as L,pc as M,Ta as S,Rt as _,Cc as a,dt as b,Mr as c,xl as d,er as e,F as f,Hr as g,Vc as h,Ia as i,ro as j,tt as k,hc as l,fc as m,_c as n,Ur as o,mc as p,xr as q,Ye as r,Sc as s,Tc as t,De as u,Ec as v,S as w,ci as x,ao as y,bc as z};
