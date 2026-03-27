const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initFireBase-DnNQF2-P.js","assets/index.esm-BrKzN4UK.js"])))=>i.map(i=>d[i]);
var Wi=Object.defineProperty;var Ki=(n,e,t)=>e in n?Wi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>Ki(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function k(){}const Kr=n=>n;function Qr(n){return n()}function zn(){return Object.create(null)}function oe(n){n.forEach(Qr)}function $t(n){return typeof n=="function"}function ae(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Qi(n){return Object.keys(n).length===0}function Yr(n,...e){if(n==null){for(const r of e)r(void 0);return k}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function at(n){let e;return Yr(n,t=>e=t)(),e}function Pe(n,e,t){n.$$.on_destroy.push(Yr(e,t))}function Yi(n){return n&&$t(n.destroy)?n.destroy:k}const Jr=typeof window<"u";let Ji=Jr?()=>window.performance.now():()=>Date.now(),_n=Jr?n=>requestAnimationFrame(n):k;const Oe=new Set;function Xr(n){Oe.forEach(e=>{e.c(n)||(Oe.delete(e),e.f())}),Oe.size!==0&&_n(Xr)}function Xi(n){let e;return Oe.size===0&&_n(Xr),{promise:new Promise(t=>{Oe.add(e={c:n,f:t})}),abort(){Oe.delete(e)}}}function m(n,e){n.appendChild(e)}function Zr(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Zi(n){const e=b("style");return e.textContent="/* empty */",es(Zr(n),e),e.sheet}function es(n,e){return m(n.head||n,e),e.sheet}function A(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode&&n.parentNode.removeChild(n)}function Ot(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function z(n){return document.createTextNode(n)}function P(){return z(" ")}function gn(){return z("")}function K(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function yn(n){return function(e){return e.preventDefault(),n.call(this,e)}}function ts(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function v(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ns(n){return Array.from(n.childNodes)}function J(n,e){e=""+e,n.data!==e&&(n.data=e)}function gt(n,e){n.value=e??""}function Qe(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function rs(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Hn(n,e){return new n(e)}const yt=new Map;let vt=0;function is(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ss(n,e){const t={stylesheet:Zi(e),rules:{}};return yt.set(n,t),t}function Gn(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let g=0;g<=1;g+=l){const E=e+(t-e)*s(g);c+=g*100+`%{${o(E,1-E)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${is(u)}_${a}`,f=Zr(n),{stylesheet:p,rules:d}=yt.get(f)||ss(f,n);d[h]||(d[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${h} ${r}ms linear ${i}ms 1 both`,vt+=1,h}function os(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),vt-=i,vt||as())}function as(){_n(()=>{vt||(yt.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&T(e)}),yt.clear())})}let Ye;function ze(n){Ye=n}function ei(){if(!Ye)throw new Error("Function called outside component initialization");return Ye}function vn(n){ei().$$.on_mount.push(n)}function ls(n){ei().$$.after_update.push(n)}function cs(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const ke=[],Wn=[];let Ne=[];const Kn=[],us=Promise.resolve();let nn=!1;function hs(){nn||(nn=!0,us.then(ti))}function be(n){Ne.push(n)}const Ht=new Set;let Ce=0;function ti(){if(Ce!==0)return;const n=Ye;do{try{for(;Ce<ke.length;){const e=ke[Ce];Ce++,ze(e),ds(e.$$)}}catch(e){throw ke.length=0,Ce=0,e}for(ze(null),ke.length=0,Ce=0;Wn.length;)Wn.pop()();for(let e=0;e<Ne.length;e+=1){const t=Ne[e];Ht.has(t)||(Ht.add(t),t())}Ne.length=0}while(ke.length);for(;Kn.length;)Kn.pop()();nn=!1,Ht.clear(),ze(n)}function ds(n){if(n.fragment!==null){n.update(),oe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(be)}}function fs(n){const e=[],t=[];Ne.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Ne=e}let je;function ps(){return je||(je=Promise.resolve(),je.then(()=>{je=null})),je}function Gt(n,e,t){n.dispatchEvent(rs(`${e?"intro":"outro"}${t}`))}const mt=new Set;let le;function bn(){le={r:0,c:[],p:le}}function wn(){le.r||oe(le.c),le=le.p}function j(n,e){n&&n.i&&(mt.delete(n),n.i(e))}function W(n,e,t,r){if(n&&n.o){if(mt.has(n))return;mt.add(n),le.c.push(()=>{mt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const ms={duration:0};function we(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,l=null,c=null,u;function h(){c&&os(n,c)}function f(d,_){const g=d.b-o;return _*=Math.abs(g),{a:o,b:d.b,d:g,duration:_,start:d.start,end:d.start+_,group:d.group}}function p(d){const{delay:_=0,duration:g=300,easing:E=Kr,tick:R=k,css:N}=s||ms,C={start:Ji()+_,b:d};d||(C.group=le,le.r+=1),"inert"in n&&(d?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||l?l=C:(N&&(h(),c=Gn(n,o,d,g,_,E,N)),d&&R(0,1),a=f(C,g),be(()=>Gt(n,d,"start")),Xi(ne=>{if(l&&ne>l.start&&(a=f(l,g),l=null,Gt(n,a.b,"start"),N&&(h(),c=Gn(n,o,a.b,a.duration,0,E,s.css))),a){if(ne>=a.end)R(o=a.b,1-o),Gt(n,a.b,"end"),l||(a.b?h():--a.group.r||oe(a.group.c)),a=null;else if(ne>=a.start){const V=ne-a.start;o=a.a+a.d*E(V/a.duration),R(o,1-o)}}return!!(a||l)}))}return{run(d){$t(s)?ps().then(()=>{s=s({direction:d?"in":"out"}),p(d)}):p(d)},end(){h(),a=l=null}}}function Ee(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function se(n){n&&n.c()}function Z(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),be(()=>{const s=n.$$.on_mount.map(Qr).filter($t);n.$$.on_destroy?n.$$.on_destroy.push(...s):oe(s),n.$$.on_mount=[]}),i.forEach(be)}function ee(n,e){const t=n.$$;t.fragment!==null&&(fs(t.after_update),oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function _s(n,e){n.$$.dirty[0]===-1&&(ke.push(n),hs(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function fe(n,e,t,r,i,s,o=null,a=[-1]){const l=Ye;ze(n);const c=n.$$={fragment:null,ctx:[],props:s,update:k,not_equal:i,bound:zn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:zn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...p)=>{const d=p.length?p[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=d)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](d),u&&_s(n,h)),f}):[],c.update(),u=!0,oe(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=ns(e.target);c.fragment&&c.fragment.l(h),h.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&j(n.$$.fragment),Z(n,e.target,e.anchor),ti()}ze(l)}class pe{constructor(){zt(this,"$$");zt(this,"$$set")}$destroy(){ee(this,1),this.$destroy=k}$on(e,t){if(!$t(t))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Qi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gs="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gs);function Te(n,{delay:e=0,duration:t=400,easing:r=Kr}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}const ys="modulepreload",vs=function(n){return"/forum/"+n},Qn={},ue=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=vs(l),l in Qn)return;Qn[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ys,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},De=[];function En(n,e=k){let t;const r=new Set;function i(a){if(ae(n,a)&&(n=a,t)){const l=!De.length;for(const c of r)c[1](),De.push(c,n);if(l){for(let c=0;c<De.length;c+=2)De[c][0](De[c+1]);De.length=0}}}function s(a){i(a(n))}function o(a,l=k){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||k),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}const Je=En({auth:{},user:{displayName:"",uid:""}});function bs(n){return n&&n.replaceAll(" ","-").replaceAll(":","").toLowerCase()}function bt(n){return n&&new Date(n.seconds*1e3).toLocaleString()}function Yn(n){return n.map(e=>e.data())}function Jn(n){const e=window.location.hash.replace("#/","");let t=n;return e.length&&(t=n.filter(r=>{var i;return e.includes((i=r==null?void 0:r.board)==null?void 0:i.toLowerCase())})),t||[]}function Xn(n,e,t){const r=n.slice();return r[13]=e[t],r}function Zn(n){let e,t,r,i,s,o,a=n[0].length&&er(n);return{c(){e=b("div"),t=b("div"),r=b("h3"),r.textContent="Создать новую тему",i=P(),a&&a.c(),v(t,"class","modal-content svelte-1bc0c9m"),v(e,"class","modal-overlay svelte-1bc0c9m")},m(l,c){A(l,e,c),m(e,t),m(t,r),m(t,i),a&&a.m(t,null),s||(o=[K(t,"click",ts(n[7])),K(e,"click",n[12])],s=!0)},p(l,c){l[0].length?a?a.p(l,c):(a=er(l),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(l){l&&T(e),a&&a.d(),s=!1,oe(o)}}}function er(n){var ne;let e,t,r,i,s,o,a,l,c,u,h,f,p,d=(ne=n[4])!=null&&ne.user?"Создать":"Войдите, чтобы создать",_,g,E,R,N=Ee(n[0]),C=[];for(let V=0;V<N.length;V+=1)C[V]=tr(Xn(n,N,V));return{c(){var V;e=b("div"),t=b("p"),t.textContent="Выберите категорию:",r=P();for(let x=0;x<C.length;x+=1)C[x].c();i=P(),s=b("div"),o=b("label"),o.textContent="Название темы:",a=P(),l=b("input"),c=P(),u=b("div"),h=b("button"),h.textContent="Отмена",f=P(),p=b("button"),_=z(d),v(e,"class","category-selector svelte-1bc0c9m"),v(o,"for","thread-title"),v(l,"type","text"),v(l,"id","thread-title"),v(l,"placeholder","Введите название..."),v(l,"class","svelte-1bc0c9m"),v(s,"class","input-group svelte-1bc0c9m"),v(h,"class","btn svelte-1bc0c9m"),v(p,"class","forum-btn"),p.disabled=g=!n[3]||!n[2]||!((V=n[4])!=null&&V.user),v(u,"class","modal-actions svelte-1bc0c9m")},m(V,x){A(V,e,x),m(e,t),m(e,r);for(let re=0;re<C.length;re+=1)C[re]&&C[re].m(e,null);A(V,i,x),A(V,s,x),m(s,o),m(s,a),m(s,l),gt(l,n[3]),A(V,c,x),A(V,u,x),m(u,h),m(u,f),m(u,p),m(p,_),E||(R=[K(l,"input",n[10]),K(h,"click",n[11]),K(p,"click",n[6])],E=!0)},p(V,x){var re,X;if(x&37){N=Ee(V[0]);let F;for(F=0;F<N.length;F+=1){const qe=Xn(V,N,F);C[F]?C[F].p(qe,x):(C[F]=tr(qe),C[F].c(),C[F].m(e,null))}for(;F<C.length;F+=1)C[F].d(1);C.length=N.length}x&8&&l.value!==V[3]&&gt(l,V[3]),x&16&&d!==(d=(re=V[4])!=null&&re.user?"Создать":"Войдите, чтобы создать")&&J(_,d),x&28&&g!==(g=!V[3]||!V[2]||!((X=V[4])!=null&&X.user))&&(p.disabled=g)},d(V){V&&(T(e),T(i),T(s),T(c),T(u)),Ot(C,V),E=!1,oe(R)}}}function tr(n){let e,t,r,i,s,o=n[13].title+"",a,l,c,u;function h(){return n[9](n[13])}return{c(){var f;e=b("label"),t=b("input"),i=P(),s=b("span"),a=z(o),l=P(),v(t,"type","radio"),v(t,"name","category"),t.checked=r=n[13].url===((f=n[2])==null?void 0:f.url),v(e,"class","radio-label svelte-1bc0c9m")},m(f,p){A(f,e,p),m(e,t),m(e,i),m(e,s),m(s,a),m(e,l),c||(u=K(t,"change",h),c=!0)},p(f,p){var d;n=f,p&5&&r!==(r=n[13].url===((d=n[2])==null?void 0:d.url))&&(t.checked=r),p&1&&o!==(o=n[13].title+"")&&J(a,o)},d(f){f&&T(e),c=!1,u()}}}function ws(n){let e,t,r,i,s,o=n[1]&&Zn(n);return{c(){e=b("button"),e.textContent="Создать тему",t=P(),o&&o.c(),r=gn(),v(e,"class","btn btn-primary svelte-1bc0c9m"),Qe(e,"width","100%"),Qe(e,"margin-bottom","1rem")},m(a,l){A(a,e,l),A(a,t,l),o&&o.m(a,l),A(a,r,l),i||(s=K(e,"click",n[8]),i=!0)},p(a,[l]){a[1]?o?o.p(a,l):(o=Zn(a),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i:k,o:k,d(a){a&&(T(e),T(t),T(r)),o&&o.d(a),i=!1,s()}}}function Es(n,e,t){let r;Pe(n,Je,g=>t(4,r=g));let{listAllCategories:i=[]}=e,s=!1,o,a="";const l=g=>{t(2,o=g)},c=()=>{ue(()=>import("./forumHelpers-lx0EPPt0.js"),[]).then(async g=>{const E=at(Je);E!=null&&E.user&&(g.addThread({board:o.url,title:a,dateCreated:new Date,dateModified:new Date,url:`${o.url}/${bs(a)}`,user:{displayName:E.user.displayName,uid:E.user.uid}}),t(1,s=!1),t(3,a=""))})};function u(g){cs.call(this,n,g)}const h=()=>t(1,s=!0),f=g=>l(g);function p(){a=this.value,t(3,a)}const d=()=>t(1,s=!1),_=()=>t(1,s=!1);return n.$$set=g=>{"listAllCategories"in g&&t(0,i=g.listAllCategories)},[i,s,o,a,r,l,c,u,h,f,p,d,_]}class Ts extends pe{constructor(e){super(),fe(this,e,Es,ws,ae,{listAllCategories:0})}}function nr(n,e,t){const r=n.slice();return r[2]=e[t],r}function rr(n){var c;let e,t,r=((c=n[0][0])==null?void 0:c.category)+"",i,s,o,a=Ee(n[0]),l=[];for(let u=0;u<a.length;u+=1)l[u]=ir(nr(n,a,u));return{c(){e=b("div"),t=b("h3"),i=z(r),s=P(),o=b("div");for(let u=0;u<l.length;u+=1)l[u].c();v(t,"class","board-category svelte-1ic7svu"),v(o,"class","collection shadow svelte-1ic7svu"),v(e,"class","board-group svelte-1ic7svu")},m(u,h){A(u,e,h),m(e,t),m(t,i),m(e,s),m(e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(o,null)},p(u,h){var f;if(h&1&&r!==(r=((f=u[0][0])==null?void 0:f.category)+"")&&J(i,r),h&3){a=Ee(u[0]);let p;for(p=0;p<a.length;p+=1){const d=nr(u,a,p);l[p]?l[p].p(d,h):(l[p]=ir(d),l[p].c(),l[p].m(o,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=a.length}},d(u){u&&T(e),Ot(l,u)}}}function ir(n){let e,t=n[2].title+"",r,i,s,o;return{c(){e=b("a"),r=z(t),i=P(),v(e,"class",s="collection-item "+n[1](n[2])+" svelte-1ic7svu"),v(e,"href",o="#/"+n[2].url)},m(a,l){A(a,e,l),m(e,r),m(e,i)},p(a,l){l&1&&t!==(t=a[2].title+"")&&J(r,t),l&1&&s!==(s="collection-item "+a[1](a[2])+" svelte-1ic7svu")&&v(e,"class",s),l&1&&o!==(o="#/"+a[2].url)&&v(e,"href",o)},d(a){a&&T(e)}}}function Is(n){let e,t=n[0].length&&rr(n);return{c(){t&&t.c(),e=gn()},m(r,i){t&&t.m(r,i),A(r,e,i)},p(r,[i]){r[0].length?t?t.p(r,i):(t=rr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(r){r&&T(e),t&&t.d(r)}}}function As(n,e,t){let{boards:r=[]}=e;const i=s=>window.location.hash===`#/${s.url}`?"active":"";return n.$$set=s=>{"boards"in s&&t(0,r=s.boards)},[r,i]}class Wt extends pe{constructor(e){super(),fe(this,e,As,Is,ae,{boards:0})}}function Ps(n){let e,t,r,i,s,o,a,l,c;return t=new Ts({props:{listAllCategories:n[1]}}),i=new Wt({props:{boards:n[0].general}}),o=new Wt({props:{boards:n[0].ideas}}),l=new Wt({props:{boards:n[0].support}}),{c(){e=b("aside"),se(t.$$.fragment),r=P(),se(i.$$.fragment),s=P(),se(o.$$.fragment),a=P(),se(l.$$.fragment)},m(u,h){A(u,e,h),Z(t,e,null),m(e,r),Z(i,e,null),m(e,s),Z(o,e,null),m(e,a),Z(l,e,null),c=!0},p(u,[h]){const f={};h&2&&(f.listAllCategories=u[1]),t.$set(f);const p={};h&1&&(p.boards=u[0].general),i.$set(p);const d={};h&1&&(d.boards=u[0].ideas),o.$set(d);const _={};h&1&&(_.boards=u[0].support),l.$set(_)},i(u){c||(j(t.$$.fragment,u),j(i.$$.fragment,u),j(o.$$.fragment,u),j(l.$$.fragment,u),c=!0)},o(u){W(t.$$.fragment,u),W(i.$$.fragment,u),W(o.$$.fragment,u),W(l.$$.fragment,u),c=!1},d(u){u&&T(e),ee(t),ee(i),ee(o),ee(l)}}}function Vs(n,e,t){let{categories:r}=e,i=[];return ls(()=>{var s;(s=r.general)!=null&&s.length&&t(1,i=r.general.concat(r.ideas).concat(r.support))}),n.$$set=s=>{"categories"in s&&t(0,r=s.categories)},[r,i]}class Ss extends pe{constructor(e){super(),fe(this,e,Vs,Ps,ae,{categories:0})}}function Rs(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<i class="material-icons">account_circle</i>
            Вход`,v(e,"class","forum-btn")},m(i,s){A(i,e,s),t||(r=K(e,"click",yn($s)),t=!0)},p:k,d(i){i&&T(e),t=!1,r()}}}function Cs(n){let e,t=n[0].user.displayName+"",r,i,s,o,a;return{c(){e=b("span"),r=z(t),i=P(),s=b("button"),s.textContent="Выход",v(e,"class","user-name svelte-bwihaq"),v(s,"class","forum-btn secondary svelte-bwihaq")},m(l,c){A(l,e,c),m(e,r),A(l,i,c),A(l,s,c),o||(a=K(s,"click",yn(ks)),o=!0)},p(l,c){c&1&&t!==(t=l[0].user.displayName+"")&&J(r,t)},d(l){l&&(T(e),T(i),T(s)),o=!1,a()}}}function Ds(n){let e;function t(s,o){var a,l;return(l=(a=s[0])==null?void 0:a.user)!=null&&l.displayName?Cs:Rs}let r=t(n),i=r(n);return{c(){e=b("div"),i.c(),v(e,"class","toolbar-login svelte-bwihaq")},m(s,o){A(s,e,o),i.m(e,null)},p(s,[o]){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e,null)))},i:k,o:k,d(s){s&&T(e),i.d()}}}function ks(){ue(()=>import("./index.esm-BrKzN4UK.js"),[]).then(n=>{n.signOut(n.getAuth())})}function $s(){ue(()=>import("./index.esm-BrKzN4UK.js"),[]).then(n=>{const e=n.getAuth(),t=new n.GoogleAuthProvider;n.signInWithPopup(e,t)})}function Os(n,e,t){let r;return Pe(n,Je,i=>t(0,r=i)),[r]}class Ns extends pe{constructor(e){super(),fe(this,e,Os,Ds,ae,{})}}function Fs(n){let e,t,r;return{c(){e=b("div"),e.innerHTML='<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div> <div class="gap-patch"><div class="circle"></div></div> <div class="circle-clipper right"><div class="circle"></div></div></div></div>',v(e,"class","loading-spinner")},m(i,s){A(i,e,s),r=!0},p:k,i(i){r||(i&&be(()=>{r&&(t||(t=we(e,Te,{},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=we(e,Te,{},!1)),t.run(0)),r=!1},d(i){i&&T(e),i&&t&&t.end()}}}class Ls extends pe{constructor(e){super(),fe(this,e,null,Fs,ae,{})}}const Bs={title:"",board:"",comments:[]};function xs(){const n={allComments:[],boards:[],threads:[],lastVisibleThreadSnapshot:null,filteredThreads:[],selectedThread:Bs},{subscribe:e,set:t,update:r}=En(n);return{subscribe:e,update:r,setLastSnap:i=>r(s=>({...s,lastVisibleThreadSnapshot:i})),setAllComments:i=>r(s=>({...s,allComments:i})),setBoards:i=>r(s=>({...s,boards:i})),setFilteredThreads:(i=[])=>r(s=>({...s,filteredThreads:Jn(s.threads.concat(i))})),setSelectedThread:i=>r(s=>({...s,selectedThread:i})),clearSelectedThread:()=>r(i=>({...i,selectedThread:{board:""}})),updateAllThreads:i=>r(s=>({...s,threads:s.threads.concat(i),filteredThreads:Jn(s.threads.concat(i))})),reset:()=>t(n)}}const U=xs();function Ms(n){let e,t,r,i,s,o,a,l,c,u,h,f,p;return{c(){var d,_;e=b("form"),t=b("div"),r=b("div"),i=b("input"),s=P(),o=b("label"),o.textContent="Comment text",a=P(),l=b("div"),c=b("button"),u=z("Add comment"),v(i,"id","input_text"),v(i,"type","text"),v(i,"data-length","120"),v(o,"for","input_text"),v(r,"class","input-field col s8 m9"),c.disabled=h=!n[0]||!((_=(d=n[2])==null?void 0:d.user)!=null&&_.displayName),v(c,"class","btn waves-effect waves-light"),Qe(c,"word-break","break-all"),v(c,"type","submit"),v(c,"name","action"),v(l,"class","input-field col s6 m3 right-align"),v(t,"class","row valign-wrapper")},m(d,_){A(d,e,_),m(e,t),m(t,r),m(r,i),gt(i,n[0]),m(r,s),m(r,o),m(t,a),m(t,l),m(l,c),m(c,u),f||(p=[K(i,"input",n[4]),K(e,"submit",yn(n[5]))],f=!0)},p(d,[_]){var g,E;_&1&&i.value!==d[0]&&gt(i,d[0]),_&5&&h!==(h=!d[0]||!((E=(g=d[2])==null?void 0:g.user)!=null&&E.displayName))&&(c.disabled=h)},i:k,o:k,d(d){d&&T(e),f=!1,oe(p)}}}function Us(n,e,t){let r,i;Pe(n,U,c=>t(1,r=c)),Pe(n,Je,c=>t(2,i=c));let s="";const o=c=>{ue(()=>import("./forumHelpers-lx0EPPt0.js"),[]).then(async u=>{const h=at(Je);u.addComment({board:c.board,text:s,threadURL:c.url,dateCreated:new Date,dateModified:new Date,user:{displayName:h.user.displayName,uid:h.user.uid}})})};function a(){s=this.value,t(0,s)}return[s,r,i,o,a,()=>o(r.selectedThread)]}class qs extends pe{constructor(e){super(),fe(this,e,Us,Ms,ae,{})}}function sr(n,e,t){const r=n.slice();return r[3]=e[t],r}function or(n){var f,p;let e,t,r=n[0].selectedThread.title+"",i,s,o,a,l,c,u=Ee(((p=(f=n[0])==null?void 0:f.selectedThread)==null?void 0:p.comments)||[]),h=[];for(let d=0;d<u.length;d+=1)h[d]=ar(sr(n,u,d));return l=new qs({}),{c(){e=b("h5"),t=z("Thread Title: "),i=z(r),s=P(),o=b("ul");for(let d=0;d<h.length;d+=1)h[d].c();a=P(),se(l.$$.fragment),v(o,"class","collection")},m(d,_){A(d,e,_),m(e,t),m(e,i),A(d,s,_),A(d,o,_);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(o,null);A(d,a,_),Z(l,d,_),c=!0},p(d,_){var g,E;if((!c||_&1)&&r!==(r=d[0].selectedThread.title+"")&&J(i,r),_&1){u=Ee(((E=(g=d[0])==null?void 0:g.selectedThread)==null?void 0:E.comments)||[]);let R;for(R=0;R<u.length;R+=1){const N=sr(d,u,R);h[R]?h[R].p(N,_):(h[R]=ar(N),h[R].c(),h[R].m(o,null))}for(;R<h.length;R+=1)h[R].d(1);h.length=u.length}},i(d){c||(j(l.$$.fragment,d),c=!0)},o(d){W(l.$$.fragment,d),c=!1},d(d){d&&(T(e),T(s),T(o),T(a)),Ot(h,d),ee(l,d)}}}function ar(n){let e,t,r,i,s=n[3].user.displayName+"",o,a,l,c=bt(n[3].dateCreated)+"",u,h,f,p=n[3].text+"",d,_;return{c(){e=b("li"),t=b("i"),r=P(),i=b("p"),o=z(s),a=P(),l=b("small"),u=z(c),h=P(),f=b("blockquote"),d=z(p),_=P(),v(t,"class","material-icons circle"),v(e,"class","collection-item avatar hoverable")},m(g,E){A(g,e,E),m(e,t),m(e,r),m(e,i),m(i,o),m(i,a),m(i,l),m(l,u),m(e,h),m(e,f),m(f,d),m(e,_)},p(g,E){E&1&&s!==(s=g[3].user.displayName+"")&&J(o,s),E&1&&c!==(c=bt(g[3].dateCreated)+"")&&J(u,c),E&1&&p!==(p=g[3].text+"")&&J(d,p)},d(g){g&&T(e)}}}function js(n){var s;let e,t,r,i=((s=n[0].selectedThread)==null?void 0:s.title)&&or(n);return{c(){e=b("div"),i&&i.c()},m(o,a){A(o,e,a),i&&i.m(e,null),r=!0},p(o,[a]){var l;(l=o[0].selectedThread)!=null&&l.title?i?(i.p(o,a),a&1&&j(i,1)):(i=or(o),i.c(),j(i,1),i.m(e,null)):i&&(bn(),W(i,1,1,()=>{i=null}),wn())},i(o){r||(j(i),o&&be(()=>{r&&(t||(t=we(e,Te,{},!0)),t.run(1))}),r=!0)},o(o){W(i),o&&(t||(t=we(e,Te,{},!1)),t.run(0)),r=!1},d(o){o&&T(e),i&&i.d(),o&&t&&t.end()}}}function zs(n,e,t){let r;Pe(n,U,o=>t(0,r=o));const i=(o,a)=>o.filter(l=>a.url===l.threadURL);function s(){U.update(o=>({...o,selectedThread:{...o.selectedThread,comments:i(o.allComments,o.selectedThread)}}))}return vn(()=>{ue(()=>import("./forumHelpers-lx0EPPt0.js"),[]).then(o=>{console.log("mount getAllComments"),o.getAllComments().then(()=>{s()})})}),[r]}class lr extends pe{constructor(e){super(),fe(this,e,zs,js,ae,{})}}function Hs(n){return n()}function Gs(n){n.forEach(Hs)}const ut=[],cr=[],_t=[],ur=[],ni=Promise.resolve();let rn=!1;function Ws(){rn||(rn=!0,ni.then(Ys))}function Ks(){return Ws(),ni}function Qs(n){_t.push(n)}const Kt=new Set;let ht=0;function Ys(){do{for(;ht<ut.length;){const n=ut[ht];ht++,Js(n.$$)}for(ut.length=0,ht=0;cr.length;)cr.pop()();for(let n=0;n<_t.length;n+=1){const e=_t[n];Kt.has(e)||(Kt.add(e),e())}_t.length=0}while(ut.length);for(;ur.length;)ur.pop()();rn=!1,Kt.clear()}function Js(n){if(n.fragment!==null){n.update(),Gs(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Qs)}}const Xs={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},_e=(n,e)=>new CustomEvent(n,{detail:e});function Zs(n,e={}){const{root:t,rootMargin:r,threshold:i,unobserveOnEnter:s}=Object.assign(Object.assign({},Xs),e);let o={x:void 0,y:void 0},a={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&n){const l=new IntersectionObserver((c,u)=>{c.forEach(h=>{o.y>h.boundingClientRect.y?a.vertical="up":a.vertical="down",o.x>h.boundingClientRect.x?a.horizontal="left":a.horizontal="right",o={y:h.boundingClientRect.y,x:h.boundingClientRect.x};const f={inView:h.isIntersecting,entry:h,scrollDirection:a,node:n,observer:u};n.dispatchEvent(_e("inview_change",f)),n.dispatchEvent(_e("change",f)),h.isIntersecting?(n.dispatchEvent(_e("inview_enter",f)),n.dispatchEvent(_e("enter",f)),s&&u.unobserve(n)):(n.dispatchEvent(_e("inview_leave",f)),n.dispatchEvent(_e("leave",f)))})},{root:t,rootMargin:r,threshold:i});return Ks().then(()=>{n.dispatchEvent(_e("inview_init",{observer:l,node:n})),n.dispatchEvent(_e("init",{observer:l,node:n}))}),l.observe(n),{destroy(){l.unobserve(n)}}}}const eo=En({app:null,db:null});var hr={};/**
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
 */const ri=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},to=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ii={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(t[u],t[h],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ri(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):to(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new no;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const d=c<<6&192|h;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class no extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ro=function(n){const e=ri(n);return ii.encodeByteArray(e,!0)},wt=function(n){return ro(n).replace(/\./g,"")},io=function(n){try{return ii.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function so(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oo=()=>so().__FIREBASE_DEFAULTS__,ao=()=>{if(typeof process>"u"||typeof hr>"u")return;const n=hr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&io(n[1]);return e&&JSON.parse(e)},Tn=()=>{try{return oo()||ao()||lo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},co=n=>{var e,t;return(t=(e=Tn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uo=n=>{const e=co(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},si=()=>{var n;return(n=Tn())===null||n===void 0?void 0:n.config},cc=n=>{var e;return(e=Tn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wt(JSON.stringify(t)),wt(JSON.stringify(o)),""].join(".")}/**
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
 */function oi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oi())}function hc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pc(){const n=oi();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function po(){try{return typeof indexedDB=="object"}catch{return!1}}function mo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const _o="FirebaseError";class Me extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_o,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?go(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Me(i,a,r)}}function go(n,e){return n.replace(yo,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yo=/\{\$([^}]+)}/g;function mc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(dr(s)&&dr(o)){if(!sn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function dr(n){return n!==null&&typeof n=="object"}/**
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
 */function _c(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vc(n,e){const t=new vo(n,e);return t.subscribe.bind(t)}class vo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bo(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qt),i.error===void 0&&(i.error=Qt),i.complete===void 0&&(i.complete=Qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qt(){}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class wo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ho;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(To(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Eo(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eo(n){return n===Ae?void 0:n}function To(n){return n.instantiationMode==="EAGER"}/**
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
 */class Io{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const Ao={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Po=S.INFO,Vo={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},So=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Vo[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class li{constructor(e){this.name=e,this._logLevel=Po,this._logHandler=So,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ao[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Ro=(n,e)=>e.some(t=>n instanceof t);let fr,pr;function Co(){return fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Do(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ci=new WeakMap,on=new WeakMap,ui=new WeakMap,Yt=new WeakMap,In=new WeakMap;function ko(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ye(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ci.set(t,n)}).catch(()=>{}),In.set(e,n),e}function $o(n){if(on.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});on.set(n,e)}let an={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return on.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ui.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Oo(n){an=n(an)}function No(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jt(this),e,...t);return ui.set(r,e.sort?e.sort():[e]),ye(r)}:Do().includes(n)?function(...e){return n.apply(Jt(this),e),ye(ci.get(this))}:function(...e){return ye(n.apply(Jt(this),e))}}function Fo(n){return typeof n=="function"?No(n):(n instanceof IDBTransaction&&$o(n),Ro(n,Co())?new Proxy(n,an):n)}function ye(n){if(n instanceof IDBRequest)return ko(n);if(Yt.has(n))return Yt.get(n);const e=Fo(n);return e!==n&&(Yt.set(n,e),In.set(e,n)),e}const Jt=n=>In.get(n);function Lo(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ye(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ye(o.result),l.oldVersion,l.newVersion,ye(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bo=["get","getKey","getAll","getAllKeys","count"],xo=["put","add","delete","clear"],Xt=new Map;function mr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xt.get(e))return Xt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=xo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bo.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Xt.set(e,s),s}Oo(n=>({...n,get:(e,t,r)=>mr(e,t)||n.get(e,t,r),has:(e,t)=>!!mr(e,t)||n.has(e,t)}));/**
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
 */class Mo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Uo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Uo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ln="@firebase/app",_r="0.10.13";/**
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
 */const he=new li("@firebase/app"),qo="@firebase/app-compat",jo="@firebase/analytics-compat",zo="@firebase/analytics",Ho="@firebase/app-check-compat",Go="@firebase/app-check",Wo="@firebase/auth",Ko="@firebase/auth-compat",Qo="@firebase/database",Yo="@firebase/data-connect",Jo="@firebase/database-compat",Xo="@firebase/functions",Zo="@firebase/functions-compat",ea="@firebase/installations",ta="@firebase/installations-compat",na="@firebase/messaging",ra="@firebase/messaging-compat",ia="@firebase/performance",sa="@firebase/performance-compat",oa="@firebase/remote-config",aa="@firebase/remote-config-compat",la="@firebase/storage",ca="@firebase/storage-compat",ua="@firebase/firestore",ha="@firebase/vertexai-preview",da="@firebase/firestore-compat",fa="firebase",pa="10.14.1";/**
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
 */const cn="[DEFAULT]",ma={[ln]:"fire-core",[qo]:"fire-core-compat",[zo]:"fire-analytics",[jo]:"fire-analytics-compat",[Go]:"fire-app-check",[Ho]:"fire-app-check-compat",[Wo]:"fire-auth",[Ko]:"fire-auth-compat",[Qo]:"fire-rtdb",[Yo]:"fire-data-connect",[Jo]:"fire-rtdb-compat",[Xo]:"fire-fn",[Zo]:"fire-fn-compat",[ea]:"fire-iid",[ta]:"fire-iid-compat",[na]:"fire-fcm",[ra]:"fire-fcm-compat",[ia]:"fire-perf",[sa]:"fire-perf-compat",[oa]:"fire-rc",[aa]:"fire-rc-compat",[la]:"fire-gcs",[ca]:"fire-gcs-compat",[ua]:"fire-fst",[da]:"fire-fst-compat",[ha]:"fire-vertex","fire-js":"fire-js",[fa]:"fire-js-all"};/**
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
 */const Et=new Map,_a=new Map,un=new Map;function gr(n,e){try{n.container.addComponent(e)}catch(t){he.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(un.has(e))return he.debug(`There were multiple attempts to register component ${e}.`),!1;un.set(e,n);for(const t of Et.values())gr(t,n);for(const t of _a.values())gr(t,n);return!0}function ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bc(n){return n.settings!==void 0}/**
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
 */const ya={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new ai("app","Firebase",ya);/**
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
 */class va{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const ba=pa;function wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ve.create("bad-app-name",{appName:String(i)});if(t||(t=si()),!t)throw ve.create("no-options");const s=Et.get(i);if(s){if(sn(t,s.options)&&sn(r,s.config))return s;throw ve.create("duplicate-app",{appName:i})}const o=new Io(i);for(const l of un.values())o.addComponent(l);const a=new va(t,r,o);return Et.set(i,a),a}function Ea(n=cn){const e=Et.get(n);if(!e&&n===cn&&si())return wa();if(!e)throw ve.create("no-app",{appName:n});return e}function He(n,e,t){var r;let i=(r=ma[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),he.warn(a.join(" "));return}Tt(new Xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ta="firebase-heartbeat-database",Ia=1,Ze="firebase-heartbeat-store";let Zt=null;function hi(){return Zt||(Zt=Lo(Ta,Ia,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ze)}catch(t){console.warn(t)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Zt}async function Aa(n){try{const t=(await hi()).transaction(Ze),r=await t.objectStore(Ze).get(di(n));return await t.done,r}catch(e){if(e instanceof Me)he.warn(e.message);else{const t=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});he.warn(t.message)}}}async function yr(n,e){try{const r=(await hi()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(e,di(n)),await r.done}catch(t){if(t instanceof Me)he.warn(t.message);else{const r=ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});he.warn(r.message)}}}function di(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pa=1024,Va=30*24*60*60*1e3;class Sa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ca(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Va}),this._storage.overwrite(this._heartbeatsCache))}catch(r){he.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vr(),{heartbeatsToSend:r,unsentEntries:i}=Ra(this._heartbeatsCache.heartbeats),s=wt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return he.warn(t),""}}}function vr(){return new Date().toISOString().substring(0,10)}function Ra(n,e=Pa){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),br(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),br(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ca{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return po()?mo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Aa(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function br(n){return wt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Da(n){Tt(new Xe("platform-logger",e=>new Mo(e),"PRIVATE")),Tt(new Xe("heartbeat",e=>new Sa(e),"PRIVATE")),He(ln,_r,n),He(ln,_r,"esm2017"),He("fire-js","")}Da("");/**
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
 */class H{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
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
 */let Ue="10.14.0";/**
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
 */const Le=new li("@firebase/firestore");function It(n,...e){if(Le.logLevel<=S.DEBUG){const t=e.map(Pn);Le.debug(`Firestore (${Ue}): ${n}`,...t)}}function An(n,...e){if(Le.logLevel<=S.ERROR){const t=e.map(Pn);Le.error(`Firestore (${Ue}): ${n}`,...t)}}function fi(n,...e){if(Le.logLevel<=S.WARN){const t=e.map(Pn);Le.warn(`Firestore (${Ue}): ${n}`,...t)}}function Pn(n){if(typeof n=="string")return n;try{/**
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
 */function D(n="Unexpected state"){const e=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw An(e),new Error(e)}function Ie(n,e){n||D()}function Nt(n,e){return n}/**
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
 */const wr="ok",ka="cancelled",Ge="unknown",w="invalid-argument",$a="deadline-exceeded",pi="not-found",Oa="permission-denied",hn="unauthenticated",Na="resource-exhausted",Be="failed-precondition",Fa="aborted",La="out-of-range",mi="unimplemented",Ba="internal",xa="unavailable";class y extends Me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ma{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(H.UNAUTHENTICATED))}shutdown(){}}class Ua{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qa{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ie(typeof e.accessToken=="string"),new _i(e.accessToken,new H(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ja{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=H.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class za{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ja(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ha{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ga{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ie(typeof e.token=="string"),new Ha(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Wa{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class et{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new et("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof et&&e.projectId===this.projectId&&e.database===this.database}}class tt{constructor(e,t,r){t===void 0?t=0:t>e.length&&D(),r===void 0?r=e.length-t:r>e.length-t&&D(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends tt{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(w,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const Ka=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends tt{construct(e,t,r){return new G(e,t,r)}static isValidIdentifier(e){return Ka.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(w,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(w,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new y(w,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(w,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(O.fromString(e))}static fromName(e){return new B(O.fromString(e).popFirst(5))}static empty(){return new B(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new O(e.slice()))}}/**
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
 */function gi(n,e,t){if(!t)throw new y(w,`Function ${n}() cannot be called with an empty ${e}.`)}function Er(n){if(!B.isDocumentKey(n))throw new y(w,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tr(n){if(B.isDocumentKey(n))throw new y(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ft(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":D()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ft(n);throw new y(w,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Qa(n,e){if(e<=0)throw new y(w,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function yi(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let dt=null;function Ya(){return dt===null?dt=function(){return 268435456+Math.round(2147483648*Math.random())}():dt++,"0x"+dt.toString(16)}/**
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
 */function Ja(n){return n==null}function At(n){return n===0&&1/n==-1/0}/**
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
 */const Xa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Ir,I;function Ar(n){if(n===void 0)return An("RPC_ERROR","HTTP error has no status"),Ge;switch(n){case 200:return wr;case 400:return Be;case 401:return hn;case 403:return Oa;case 404:return pi;case 409:return Fa;case 416:return La;case 429:return Na;case 499:return ka;case 500:return Ge;case 501:return mi;case 503:return xa;case 504:return $a;default:return n>=200&&n<300?wr:n>=400&&n<500?Be:n>=500&&n<600?Ba:Ge}}/**
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
 */(I=Ir||(Ir={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";class Za extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){const a=Ya(),l=this.V(t,r.toUriEncodedString());It("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,s,o),this.p(t,l,c,i).then(u=>(It("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw fi("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}I(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}V(t,r){const i=Xa[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new y(Ar(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new y(Ar(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function el(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=el(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function L(n,e){return n<e?-1:n>e?1:0}function vi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */function Pr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nl("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const rl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Se(n){if(Ie(!!n),typeof n=="string"){let e=0;const t=rl.exec(n);if(Ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nt(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
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
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(w,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(w,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(w,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(w,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Vn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bi(n){const e=n.mapValue.fields.__previous_value__;return Vn(e)?bi(e):e}function rt(n){const e=Se(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
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
 */const ft={};function Re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vn(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:function(t){var r,i;return((i=(((r=t==null?void 0:t.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(n)?10:11:D()}function Pt(n,e){if(n===e)return!0;const t=Re(n);if(t!==Re(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rt(n).isEqual(rt(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Se(i.timestampValue),a=Se(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return nt(i.bytesValue).isEqual(nt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?At(o)===At(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return vi(n.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pr(o)!==Pr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Pt(o[l],a[l])))return!1;return!0}(n,e);default:return D()}}function it(n,e){return(n.values||[]).find(t=>Pt(t,e))!==void 0}function Vt(n,e){if(n===e)return 0;const t=Re(n),r=Re(e);if(t!==r)return L(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return L(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),l=$(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Vr(n.timestampValue,e.timestampValue);case 4:return Vr(rt(n),rt(e));case 5:return L(n.stringValue,e.stringValue);case 6:return function(s,o){const a=nt(s),l=nt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=L(a[c],l[c]);if(u!==0)return u}return L(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=L($(s.latitude),$(o.latitude));return a!==0?a:L($(s.longitude),$(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Sr(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,u;const h=s.fields||{},f=o.fields||{},p=(a=h.value)===null||a===void 0?void 0:a.arrayValue,d=(l=f.value)===null||l===void 0?void 0:l.arrayValue,_=L(((c=p==null?void 0:p.values)===null||c===void 0?void 0:c.length)||0,((u=d==null?void 0:d.values)===null||u===void 0?void 0:u.length)||0);return _!==0?_:Sr(p,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ft&&o===ft)return 0;if(s===ft)return 1;if(o===ft)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=L(l[h],u[h]);if(f!==0)return f;const p=Vt(a[l[h]],c[u[h]]);if(p!==0)return p}return L(l.length,u.length)}(n.mapValue,e.mapValue);default:throw D()}}function Vr(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return L(n,e);const t=Se(n),r=Se(e),i=L(t.seconds,r.seconds);return i!==0?i:L(t.nanos,r.nanos)}function Sr(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Vt(t[i],r[i]);if(s)return s}return L(t.length,r.length)}function St(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wi(n){return!!n&&"arrayValue"in n}function Rr(n){return!!n&&"nullValue"in n}function Cr(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function en(n){return!!n&&"mapValue"in n}function We(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=We(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=We(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Rt{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class Ei{}class te extends Ei{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new il(e,t,r):t==="array-contains"?new al(e,r):t==="in"?new ll(e,r):t==="not-in"?new cl(e,r):t==="array-contains-any"?new ul(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sl(e,r):new ol(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vt(t,this.value)):t!==null&&Re(this.value)===Re(t)&&this.matchesComparison(Vt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lt extends Ei{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new lt(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class il extends te{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class sl extends te{constructor(e,t){super(e,"in",t),this.keys=Ti("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ol extends te{constructor(e,t){super(e,"not-in",t),this.keys=Ti("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ti(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class al extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wi(t)&&it(t.arrayValue,this.value)}}class ll extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&it(this.value.arrayValue,t)}}class cl extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(it(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!it(this.value.arrayValue,t)}}class ul extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>it(this.value.arrayValue,r))}}/**
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
 */class Ct{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Q(0,0))}static max(){return new q(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Dt{constructor(e,t){this.comparator=e,this.root=t||M.EMPTY}insert(e,t){return new Dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,M.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,M.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pt(this.root,e,this.comparator,!1)}getReverseIterator(){return new pt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pt(this.root,e,this.comparator,!0)}}class pt{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class M{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??M.RED,this.left=i??M.EMPTY,this.right=s??M.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new M(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return M.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return M.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,M.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,M.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}M.EMPTY=null,M.RED=!0,M.BLACK=!1;M.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(e,t,r,i,s){return this}insert(e,t,r){return new M(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dr(this.data.getIterator())}getIteratorFrom(e){return new Dr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class Dr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(G.comparator)}static empty(){return new ot([])}unionWith(e){let t=new st(G.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ie{constructor(e){this.value=e}static empty(){return new ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!en(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=We(t)}setAll(e){let t=G.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=We(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());en(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];en(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ie(We(this.value))}}/**
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
 */class ge{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,q.min(),q.min(),q.min(),ie.empty(),0)}static newFoundDocument(e,t,r,i){return new ge(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new ge(e,2,t,q.min(),q.min(),ie.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,q.min(),q.min(),ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hl{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function kr(n,e=null,t=[],r=[],i=null,s=null,o=null){return new hl(n,e,t,r,i,s,o)}/**
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
 */class ct{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Ii(n){return n.collectionGroup!==null}function Ai(n){const e=Nt(n);if(e.S===null){e.S=[];const t=new Set;for(const s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(G.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new Ct(s,r))}),t.has(G.keyField().canonicalString())||e.S.push(new Ct(G.keyField(),r))}return e.S}function dl(n){const e=Nt(n);return e.N||(e.N=fl(e,Ai(n))),e.N}function fl(n,e){if(n.limitType==="F")return kr(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ct(i.field,s)});const t=n.endAt?new Rt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rt(n.startAt.position,n.startAt.inclusive):null;return kr(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dn(n,e){const t=n.filters.concat([e]);return new ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
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
 */function Pi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:At(e)?"-0":e}}function pl(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!At(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):Pi(n,e)}/**
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
 */class xt{constructor(){this._=void 0}}class ml extends xt{}class _l extends xt{constructor(e){super(),this.elements=e}}class gl extends xt{constructor(e){super(),this.elements=e}}class yl extends xt{constructor(e,t){super(),this.serializer=e,this.q=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Mt{}class Vi extends Mt{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends Mt{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class vl extends Mt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bl extends Mt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const wl={asc:"ASCENDING",desc:"DESCENDING"},El={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tl={and:"AND",or:"OR"};class Il{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Al(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Pl(n,e){return fn(n,e.toTimestamp())}function $r(n){return Ie(!!n),q.fromTimestamp(function(t){const r=Se(t);return new Q(r.seconds,r.nanos)}(n))}function Sn(n,e){return pn(n,e).canonicalString()}function pn(n,e){const t=function(i){return new O(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mn(n,e){return Sn(n.databaseId,e.path)}function Vl(n,e){const t=function(i){const s=O.fromString(i);return Ie(Ci(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new y(w,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(w,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(function(i){return Ie(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function Or(n,e,t){return{name:mn(n,e),fields:t.value.mapValue.fields}}function Sl(n,e){let t;if(e instanceof Vi)t={update:Or(n,e.key,e.value)};else if(e instanceof vl)t={delete:mn(n,e.key)};else if(e instanceof Si)t={update:Or(n,e.key,e.data),updateMask:$l(e.fieldMask)};else{if(!(e instanceof bl))return D();t={verify:mn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _l)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof gl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yl)return{fieldPath:o.field.canonicalString(),increment:a.q};throw D()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Pl(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:D()}(n,e.precondition)),t}function Rl(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(c,u){return Sn(c.databaseId,u)}(n,i);const s=function(c){if(c.length!==0)return Ri(lt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:$e(f.field),direction:Cl(f.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||Ja(u)?u:{value:u}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:t,parent:i}}function Cl(n){return wl[n]}function Dl(n){return El[n]}function kl(n){return Tl[n]}function $e(n){return{fieldPath:n.canonicalString()}}function Ri(n){return n instanceof te?function(t){if(t.op==="=="){if(Cr(t.value))return{unaryFilter:{field:$e(t.field),op:"IS_NAN"}};if(Rr(t.value))return{unaryFilter:{field:$e(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cr(t.value))return{unaryFilter:{field:$e(t.field),op:"IS_NOT_NAN"}};if(Rr(t.value))return{unaryFilter:{field:$e(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$e(t.field),op:Dl(t.op),value:t.value}}}(n):n instanceof lt?function(t){const r=t.getFilters().map(i=>Ri(i));return r.length===1?r[0]:{compositeFilter:{op:kl(t.op),filters:r}}}(n):D()}function $l(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ci(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Rn(n){return new Il(n,!0)}/**
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
 */class Ol extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new y(Be,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,pn(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===hn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(Ge,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,pn(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===hn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(Ge,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Di(n,e){const t=Nt(n),r={writes:e.map(i=>Sl(t.serializer,i))};await t.P("Commit",t.serializer.databaseId,O.emptyPath(),r)}async function Nl(n,e){const t=Nt(n),{B:r,parent:i}=Rl(t.serializer,dl(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,c){const u=Vl(a,l.name),h=$r(l.updateTime),f=l.createTime?$r(l.createTime):q.min(),p=new ie({mapValue:{fields:l.fields}}),d=ge.newFoundDocument(u,h,f,p);return c?d.setHasCommittedMutations():d}(t.serializer,s.document,void 0))}/**
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
 */const Ke=new Map;function Cn(n){if(n._terminated)throw new y(Be,"The client has already been terminated.");if(!Ke.has(n)){It("ComponentProvider","Initializing Datastore");const e=function(s){return new Za(s,fetch.bind(null))}(function(s,o,a,l){return new Wa(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yi(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Rn(n._databaseId),r=function(s,o,a,l){return new Ol(s,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);Ke.set(n,r)}return Ke.get(n)}class Nr{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new y(w,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yi((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ut{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new y(Be,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new y(Be,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ma;switch(r.type){case"firstParty":return new za(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(w,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ke.get(t);r&&(It("ComponentProvider","Removing Datastore"),Ke.delete(t),r.terminate())}(this),Promise.resolve()}}function Ic(n,e){const t=typeof n=="object"?n:Ea(),r=typeof n=="string"?n:"(default)",i=ga(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=uo("firestore");s&&Fl(i,...s)}return i}function Fl(n,e,t,r={}){var i;const s=(n=Lt(n,Ut))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=H.MOCK_USER;else{a=fo(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(w,"mockUserToken must contain 'sub' or 'user_id' field!");l=new H(c)}n._authCredentials=new Ua(new _i(a,l))}}/**
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
 */class me{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new me(this.firestore,e,this._query)}}class Y{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Y(this.firestore,e,this._key)}}class ce extends me{constructor(e,t,r){super(e,t,function(s){return new ct(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Y(this.firestore,null,new B(e))}withConverter(e){return new ce(this.firestore,e,this._path)}}function Fr(n,e,...t){if(n=Ve(n),gi("collection","path",e),n instanceof Ut){const r=O.fromString(e,...t);return Tr(r),new ce(n,null,r)}{if(!(n instanceof Y||n instanceof ce))throw new y(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Tr(r),new ce(n.firestore,null,r)}}function Ll(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=tl.newId()),gi("doc","path",e),n instanceof Ut){const r=O.fromString(e,...t);return Er(r),new Y(n,null,new B(r))}{if(!(n instanceof Y||n instanceof ce))throw new y(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Er(r),new Y(n.firestore,n instanceof ce?n.converter:null,new B(r))}}/**
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
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(de.fromBase64String(e))}catch(t){throw new y(w,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ki{constructor(e){this._methodName=e}}/**
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
 */class kn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(w,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(w,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
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
 */class $n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Bl=/^__.*__$/;class xl{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vi(e,this.data,t,this.fieldTransforms)}}function $i(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class On{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new On(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return kt(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if($i(this.et)&&Bl.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Ml{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Rn(e)}ht(e,t,r,i=!1){return new On({et:e,methodName:t,lt:r,path:G.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qt(n){const e=n._freezeSettings(),t=Rn(n._databaseId);return new Ml(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Oi(n,e,t,r,i,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,i);Bi("Data must be an object, but it was:",o,r);const a=Fi(r,o);let l,c;if(s.merge)l=new ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Ul(e,h,t);if(!o.contains(f))throw new y(w,`Field '${f}' is specified in your field mask but missing from your input data.`);jl(u,f)||u.push(f)}l=new ot(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new xl(new ie(a),l,c)}function Ni(n,e,t,r=!1){return Nn(t,n.ht(r?4:3,e))}function Nn(n,e){if(Li(n=Ve(n)))return Bi("Unsupported field value:",e,n),Fi(n,e);if(n instanceof ki)return function(r,i){if(!$i(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Nn(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Q.fromDate(r);return{timestampValue:fn(i.serializer,s)}}if(r instanceof Q){const s=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fn(i.serializer,s)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:Al(i.serializer,r._byteString)};if(r instanceof Y){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sn(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $n)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return Pi(a.serializer,l)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${Ft(r)}`)}(n,e)}function Fi(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,i)=>{const s=Nn(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Li(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof kn||n instanceof xe||n instanceof Y||n instanceof ki||n instanceof $n)}function Bi(n,e,t){if(!Li(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ft(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}function Ul(n,e,t){if((e=Ve(e))instanceof Dn)return e._internalPath;if(typeof e=="string")return xi(n,e);throw kt("Field path arguments must be of type string or ",n,!1,void 0,t)}const ql=new RegExp("[~\\*/\\[\\]]");function xi(n,e,t){if(e.search(ql)>=0)throw kt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dn(...e.split("."))._internalPath}catch{throw kt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function kt(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new y(w,a+n+l)}function jl(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ui(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ui extends Mi{data(){return super.data()}}class zl{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function qi(n,e){return typeof e=="string"?xi(n,e):e instanceof Dn?e._internalPath:e._delegate._internalPath}/**
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
 */class Fn{}class jt extends Fn{}function Lr(n,e,...t){let r=[];e instanceof Fn&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof Bn).length,a=s.filter(l=>l instanceof Ln).length;if(o>1||o>0&&a>0)throw new y(w,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ln extends jt{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ln(e,t,r)}_apply(e){const t=this._parse(e);return ji(e._query,t),new me(e.firestore,e.converter,dn(e._query,t))}_parse(e){const t=qt(e.firestore);return function(s,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(w,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ur(h,u);const p=[];for(const d of h)p.push(Mr(l,s,d));f={arrayValue:{values:p}}}else f=Mr(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ur(h,u),f=Ni(a,o,h,u==="in"||u==="not-in");return te.create(c,u,f)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bn extends Fn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bn(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ji(o,l),o=dn(o,l)}(e._query,t),new me(e.firestore,e.converter,dn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xn extends jt{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xn(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new y(w,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(w,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ct(s,o)}(e._query,this._field,this._direction);return new me(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ct(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Br(n,e="asc"){const t=e,r=qi("orderBy",n);return xn._create(r,t)}class Mn extends jt{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Mn(e,t,r)}_apply(e){return new me(e.firestore,e.converter,function(r,i,s){return new ct(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function xr(n){return Qa("limit",n),Mn._create("limit",n,"F")}class Un extends jt{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Un(e,t,r)}_apply(e){const t=Gl(e,this.type,this._docOrFields,this._inclusive);return new me(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Hl(...n){return Un._create("startAfter",n,!1)}function Gl(n,e,t,r){if(t[0]=Ve(t[0]),t[0]instanceof Mi)return function(s,o,a,l,c){if(!l)throw new y(pi,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of Ai(s))if(h.field.isKeyField())u.push(St(o,l.key));else{const f=l.data.field(h.field);if(Vn(f))throw new y(w,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const p=h.field.canonicalString();throw new y(w,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}u.push(f)}return new Rt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=qt(n.firestore);return function(o,a,l,c,u,h){const f=o.explicitOrderBy;if(u.length>f.length)throw new y(w,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let d=0;d<u.length;d++){const _=u[d];if(f[d].field.isKeyField()){if(typeof _!="string")throw new y(w,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof _}`);if(!Ii(o)&&_.indexOf("/")!==-1)throw new y(w,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${_}' contains a slash.`);const g=o.path.child(O.fromString(_));if(!B.isDocumentKey(g))throw new y(w,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const E=new B(g);p.push(St(a,E))}else{const g=Ni(l,c,_);p.push(g)}}return new Rt(p,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Mr(n,e,t){if(typeof(t=Ve(t))=="string"){if(t==="")throw new y(w,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ii(e)&&t.indexOf("/")!==-1)throw new y(w,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!B.isDocumentKey(r))throw new y(w,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return St(n,new B(r))}if(t instanceof Y)return St(n,t._key);throw new y(w,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ft(t)}.`)}function Ur(n,e){if(!Array.isArray(n)||n.length===0)throw new y(w,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ji(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(w,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(w,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
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
 */function zi(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Wl extends class{convertValue(t,r="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(nt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw D()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return Bt(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertVectorValue(t){var r,i,s;const o=(s=(i=(r=t.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>$(a.doubleValue));return new $n(o)}convertGeoPoint(t){return new kn($(t.latitude),$(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=bi(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(rt(t));default:return null}}convertTimestamp(t){const r=Se(t);return new Q(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=O.fromString(t);Ie(Ci(i));const s=new et(i.get(1),i.get(3)),o=new B(i.popFirst(5));return s.isEqual(r)||An(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}function qr(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new y(mi,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Lt(n,me))._query);const e=Cn(n.firestore),t=new Wl(n.firestore);return Nl(e,n._query).then(r=>{const i=r.map(s=>new Ui(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new zl(n,i)})}function Pc(n,e,t){const r=zi((n=Lt(n,Y)).converter,e),i=Oi(qt(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return Di(Cn(n.firestore),[i.toMutation(n._key,Fe.none())])}function Vc(n,e){const t=Ll(n=Lt(n,ce)),r=zi(n.converter,e),i=Oi(qt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Di(Cn(n.firestore),[i.toMutation(t._key,Fe.exists(!1))]).then(()=>t)}(function(){(function(t){Ue=t})(`${ba}_lite`),Tt(new Xe("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ut(new qa(e.getProvider("auth-internal")),new Ga(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(w,'"projectId" not provided in firebase.initializeApp.');return new et(a.options.projectId,l)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),He("firestore-lite","4.7.3",""),He("firestore-lite","4.7.3","esm2017")})();async function Hi(n,e,t,r=null,i=25){var o,a;const{db:s}=at(eo);if(r){const l=Lr(Fr(s,n),Br(e),Hl(r),xr(i)),c=await qr(l);return[(c==null?void 0:c.docs[((o=c==null?void 0:c.docs)==null?void 0:o.length)-1])||null,Yn(c.docs)]}else if(t){const l=Lr(Fr(s,n),Br(e),xr(i)),c=await qr(l);return[(c==null?void 0:c.docs[((a=c==null?void 0:c.docs)==null?void 0:a.length)-1])||null,Yn(c.docs)]}}async function Gi(n,e){if(n.inView){const{lastVisibleThreadSnapshot:t}=at(e);if(!t)return;const r=await Hi("threads","dateCreated",!1,t);e.setLastSnap(r[0]),r[1].length>0&&e.updateAllThreads(r[1])}}const Kl=Object.freeze(Object.defineProperty({__proto__:null,getNextThreadsPage:Gi,getPaginatedResults:Hi},Symbol.toStringTag,{value:"Module"}));function jr(n,e,t){const r=n.slice();return r[5]=e[t],r}function zr(n){var x,re;let e,t,r,i,s,o=n[5].title+"",a,l,c,u,h,f,p=bt((x=n[5])==null?void 0:x.dateCreated)+"",d,_,g,E=((re=n[5])==null?void 0:re.board.replace("boards/",""))+"",R,N,C,ne;function V(){return n[3](n[5])}return{c(){var X;e=b("li"),t=b("i"),t.textContent="forum",r=P(),i=b("div"),s=b("a"),a=z(o),c=P(),u=b("br"),h=P(),f=b("span"),d=z(p),_=P(),g=b("span"),R=z(E),N=P(),v(t,"class","material-icons circle avatar-bg"),v(s,"class","thread-link svelte-1n4hnsk"),v(s,"href",l="#/"+((X=n[5])==null?void 0:X.url)),v(f,"class","thread-date svelte-1n4hnsk"),v(g,"class","new badge"),v(i,"class","thread-info"),v(e,"class","collection-item avatar")},m(X,F){A(X,e,F),m(e,t),m(e,r),m(e,i),m(i,s),m(s,a),m(i,c),m(i,u),m(i,h),m(i,f),m(f,d),m(i,_),m(i,g),m(g,R),m(e,N),C||(ne=K(s,"click",V),C=!0)},p(X,F){var qe,qn,jn;n=X,F&1&&o!==(o=n[5].title+"")&&J(a,o),F&1&&l!==(l="#/"+((qe=n[5])==null?void 0:qe.url))&&v(s,"href",l),F&1&&p!==(p=bt((qn=n[5])==null?void 0:qn.dateCreated)+"")&&J(d,p),F&1&&E!==(E=((jn=n[5])==null?void 0:jn.board.replace("boards/",""))+"")&&J(R,E)},d(X){X&&T(e),C=!1,ne()}}}function Hr(n){let e,t=n[5]&&zr(n);return{c(){t&&t.c(),e=gn()},m(r,i){t&&t.m(r,i),A(r,e,i)},p(r,i){r[5]?t?t.p(r,i):(t=zr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&T(e),t&&t.d(r)}}}function Gr(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="",Qe(e,"height","1rem"),Qe(e,"display","block")},m(i,s){A(i,e,s),t||(r=[Yi(Zs.call(null,e,n[1])),K(e,"change",n[2])],t=!0)},p:k,d(i){i&&T(e),t=!1,oe(r)}}}function Ql(n){let e,t,r,i,s,o,a,l=Ee(n[0].filteredThreads),c=[];for(let h=0;h<l.length;h+=1)c[h]=Hr(jr(n,l,h));let u=n[0].filteredThreads.length&&Gr(n);return{c(){e=b("div"),t=b("h2"),t.textContent="Список тем",r=P(),i=b("ul");for(let h=0;h<c.length;h+=1)c[h].c();s=P(),u&&u.c(),v(t,"class","forum-title svelte-1n4hnsk"),v(i,"class","collection svelte-1n4hnsk"),v(e,"class","forum-content")},m(h,f){A(h,e,f),m(e,t),m(e,r),m(e,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(i,null);m(e,s),u&&u.m(e,null),a=!0},p(h,[f]){if(f&1){l=Ee(h[0].filteredThreads);let p;for(p=0;p<l.length;p+=1){const d=jr(h,l,p);c[p]?c[p].p(d,f):(c[p]=Hr(d),c[p].c(),c[p].m(i,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}h[0].filteredThreads.length?u?u.p(h,f):(u=Gr(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(h){a||(h&&be(()=>{a&&(o||(o=we(e,Te,{},!0)),o.run(1))}),a=!0)},o(h){h&&(o||(o=we(e,Te,{},!1)),o.run(0)),a=!1},d(h){h&&T(e),Ot(c,h),u&&u.d(),h&&o&&o.end()}}}function Yl(n,e,t){let r;Pe(n,U,l=>t(0,r=l));const i={rootMargin:"0px"},s=async({detail:l})=>{Gi(l,U)},o=()=>{const{threads:l,lastVisibleThreadSnapshot:c}=at(U);(l.length===0||c)&&ue(()=>import("./initFireBase-DnNQF2-P.js"),__vite__mapDeps([0,1])).then(()=>{ue(()=>Promise.resolve().then(()=>Kl),void 0).then(async u=>{const h=await u.getPaginatedResults("threads","dateCreated",l.length===0,c);U.setLastSnap(h[0]),h[1].length>0&&U.updateAllThreads(h[1])})})};return vn(()=>{o()}),[r,i,s,l=>U.setSelectedThread(l)]}class Wr extends pe{constructor(e){super(),fe(this,e,Yl,Ql,ae,{})}}const Jl=[{collectionName:"boards",documents:[{category:"General",title:"Announcements",url:"boards/announcements"},{category:"General",title:"Social",url:"boards/social"},{category:"General",title:"Tutorials",url:"boards/tutorials"},{category:"Ideas",title:"Design",url:"boards/design"},{category:"Ideas",title:"Features",url:"boards/features"},{category:"Support",title:"Hosting",url:"boards/hosting"},{category:"Support",title:"Installation",url:"boards/installation"},{category:"Support",title:"Upgrades",url:"boards/upgrades"}]}],Xl=n=>{Jl.forEach(e=>{e.documents.forEach(async t=>{await n.addNewDocument(n.globalFirestoreDB,e.collectionName,t,t.title)})})},tn=(n,e)=>n.filter(t=>(t==null?void 0:t.category)===e);async function Zl(n,e){return n.length===0?(console.log("Seeding boards..."),Xl(e),await e.getAllCollectionDocs("boards")):n}const ec=()=>{ue(()=>import("./initFireBase-DnNQF2-P.js"),__vite__mapDeps([0,1])).then(()=>{ue(()=>import("./forumHelpers-lx0EPPt0.js"),[]).then(async n=>{let e=await n.getAllCollectionDocs("boards");e.length===0&&(e=await Zl(e,n)),U.setBoards(e)})})};class tc{constructor(e){this.routes=[],this.mode="hash",this.root="/",this.addRoute=(t,r)=>(this.routes.push({path:t,callback:r}),this),this.cleanPath=t=>t.toString().replace(/\/$/,"").replace(/^\//,""),this.getCurrentRoute=()=>{let t="";if(this.mode==="history")t=this.cleanPath(decodeURI(window.location.pathname+window.location.search)),t=t.replace(/\?(.*)$/,""),t=this.root!=="/"?t.replace(this.root,""):t;else{const r=window.location.href.match(/#(.*)$/);t=r?r[1]:""}return this.cleanPath(t)},this.initializeNavigationListener=()=>{clearInterval(this.interval),this.interval=setInterval(this.getCustomInterval,50)},this.getCustomInterval=()=>{this.current!==this.getCurrentRoute()&&(this.current=this.getCurrentRoute(),this.routes.some(t=>{const r=this.current.match(t.path);return r?(r.shift(),t.callback.apply({},r),r):!1}))},this.mode=window.history.pushState?"history":"hash",e.mode&&(this.mode=e.mode),e.root&&(this.root=e.root),this.initializeNavigationListener()}}function nc(){new tc({mode:"hash",root:"/"}).addRoute(/boards\/\w+\/\w+/,()=>{U.setFilteredThreads()}).addRoute(/boards/,()=>{U.clearSelectedThread(),U.setFilteredThreads()}).addRoute("",()=>{U.clearSelectedThread(),U.setFilteredThreads()})}function rc(n){var d;let e,t,r,i,s,o,a,l,c,u,h;r=new Ns({}),a=new Ss({props:{categories:n[0]}});var f=(d=n[1].selectedThread)!=null&&d.board?lr:Wr;function p(_,g){return{}}return f&&(u=Hn(f,p())),{c(){e=b("div"),t=b("header"),se(r.$$.fragment),i=P(),s=b("div"),o=b("aside"),se(a.$$.fragment),l=P(),c=b("div"),u&&se(u.$$.fragment),v(t,"class","forum-header svelte-115cryt"),v(o,"class","forum-sidebar svelte-115cryt"),v(c,"class","forum-main svelte-115cryt"),v(s,"class","forum-layout svelte-115cryt"),v(e,"class","main__content clearfix")},m(_,g){A(_,e,g),m(e,t),Z(r,t,null),m(e,i),m(e,s),m(s,o),Z(a,o,null),m(s,l),m(s,c),u&&Z(u,c,null),h=!0},p(_,g){var R;const E={};if(g&1&&(E.categories=_[0]),a.$set(E),g&2&&f!==(f=(R=_[1].selectedThread)!=null&&R.board?lr:Wr)){if(u){bn();const N=u;W(N.$$.fragment,1,0,()=>{ee(N,1)}),wn()}f?(u=Hn(f,p()),se(u.$$.fragment),j(u.$$.fragment,1),Z(u,c,null)):u=null}},i(_){h||(j(r.$$.fragment,_),j(a.$$.fragment,_),u&&j(u.$$.fragment,_),h=!0)},o(_){W(r.$$.fragment,_),W(a.$$.fragment,_),u&&W(u.$$.fragment,_),h=!1},d(_){_&&T(e),ee(r),ee(a),u&&ee(u)}}}function ic(n){let e,t;return e=new Ls({}),{c(){se(e.$$.fragment)},m(r,i){Z(e,r,i),t=!0},p:k,i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){W(e.$$.fragment,r),t=!1},d(r){ee(e,r)}}}function sc(n){let e,t,r,i,s;const o=[ic,rc],a=[];function l(c,u){var h;return(h=c[0].general)!=null&&h.length?1:0}return t=l(n),r=a[t]=o[t](n),{c(){e=b("div"),r.c(),v(e,"class","forum-embedded-app svelte-115cryt")},m(c,u){A(c,e,u),a[t].m(e,null),s=!0},p(c,[u]){let h=t;t=l(c),t===h?a[t].p(c,u):(bn(),W(a[h],1,1,()=>{a[h]=null}),wn(),r=a[t],r?r.p(c,u):(r=a[t]=o[t](c),r.c()),j(r,1),r.m(e,null))},i(c){s||(j(r),c&&be(()=>{s&&(i||(i=we(e,Te,{},!0)),i.run(1))}),s=!0)},o(c){W(r),c&&(i||(i=we(e,Te,{},!1)),i.run(0)),s=!1},d(c){c&&T(e),a[t].d(),c&&i&&i.end()}}}function oc(n,e,t){let r;Pe(n,U,s=>t(1,r=s));let i={};return vn(()=>{U.subscribe(s=>{t(0,i.general=tn(s.boards,"General"),i),t(0,i.support=tn(s.boards,"Support"),i),t(0,i.ideas=tn(s.boards,"Ideas"),i)}),nc(),ec()}),[i,r]}class ac extends pe{constructor(e){super(),fe(this,e,oc,sc,ae,{})}}new ac({target:document.getElementById("app")});export{ga as A,co as B,Xe as C,Ea as D,ai as E,Me as F,sn as G,pc as H,mc as I,gc as J,yc as K,li as L,hc as M,ba as S,Tt as _,Vc as a,at as b,Fr as c,Ll as d,Yn as e,U as f,qr as g,Ic as h,wa as i,eo as j,Je as k,cc as l,uc as m,fc as n,Br as o,dc as p,Lr as q,He as r,Pc as s,bc as t,Ve as u,vc as v,S as w,oi as x,io as y,_c as z};
