const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initFireBase-D83qRv54.js","assets/index.esm-BKguC6La.js"])))=>i.map(i=>d[i]);
var Hi=Object.defineProperty;var Gi=(n,e,t)=>e in n?Hi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>Gi(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function C(){}const Gr=n=>n;function Wr(n){return n()}function qn(){return Object.create(null)}function se(n){n.forEach(Wr)}function kt(n){return typeof n=="function"}function oe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Wi(n){return Object.keys(n).length===0}function Kr(n,...e){if(n==null){for(const r of e)r(void 0);return C}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function st(n){let e;return Kr(n,t=>e=t)(),e}function Ae(n,e,t){n.$$.on_destroy.push(Kr(e,t))}function Ki(n){return n&&kt(n.destroy)?n.destroy:C}const Qr=typeof window<"u";let Qi=Qr?()=>window.performance.now():()=>Date.now(),_n=Qr?n=>requestAnimationFrame(n):C;const $e=new Set;function Yr(n){$e.forEach(e=>{e.c(n)||($e.delete(e),e.f())}),$e.size!==0&&_n(Yr)}function Yi(n){let e;return $e.size===0&&_n(Yr),{promise:new Promise(t=>{$e.add(e={c:n,f:t})}),abort(){$e.delete(e)}}}function m(n,e){n.appendChild(e)}function Jr(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ji(n){const e=b("style");return e.textContent="/* empty */",Xi(Jr(n),e),e.sheet}function Xi(n,e){return m(n.head||n,e),e.sheet}function A(n,e,t){n.insertBefore(e,t||null)}function I(n){n.parentNode&&n.parentNode.removeChild(n)}function $t(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function W(n){return document.createTextNode(n)}function V(){return W(" ")}function Ot(){return W("")}function K(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function gn(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Zi(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function v(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function es(n){return Array.from(n.childNodes)}function ie(n,e){e=""+e,n.data!==e&&(n.data=e)}function mt(n,e){n.value=e??""}function _t(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function ts(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function jn(n,e){return new n(e)}const gt=new Map;let yt=0;function ns(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function rs(n,e){const t={stylesheet:Ji(e),rules:{}};return gt.set(n,t),t}function zn(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(t-e)*s(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(t,1-t)}}
}`,u=`__svelte_${ns(h)}_${a}`,f=Jr(n),{stylesheet:p,rules:d}=gt.get(f)||rs(f,n);d[u]||(d[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${u} ${r}ms linear ${i}ms 1 both`,yt+=1,u}function is(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),yt-=i,yt||ss())}function ss(){_n(()=>{yt||(gt.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&I(e)}),gt.clear())})}let Ke;function je(n){Ke=n}function Xr(){if(!Ke)throw new Error("Function called outside component initialization");return Ke}function yn(n){Xr().$$.on_mount.push(n)}function os(n){Xr().$$.after_update.push(n)}function as(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const De=[],Hn=[];let Oe=[];const Gn=[],ls=Promise.resolve();let nn=!1;function cs(){nn||(nn=!0,ls.then(Zr))}function be(n){Oe.push(n)}const Ht=new Set;let Re=0;function Zr(){if(Re!==0)return;const n=Ke;do{try{for(;Re<De.length;){const e=De[Re];Re++,je(e),us(e.$$)}}catch(e){throw De.length=0,Re=0,e}for(je(null),De.length=0,Re=0;Hn.length;)Hn.pop()();for(let e=0;e<Oe.length;e+=1){const t=Oe[e];Ht.has(t)||(Ht.add(t),t())}Oe.length=0}while(De.length);for(;Gn.length;)Gn.pop()();nn=!1,Ht.clear(),je(n)}function us(n){if(n.fragment!==null){n.update(),se(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(be)}}function hs(n){const e=[],t=[];Oe.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Oe=e}let qe;function ds(){return qe||(qe=Promise.resolve(),qe.then(()=>{qe=null})),qe}function Gt(n,e,t){n.dispatchEvent(ts(`${e?"intro":"outro"}${t}`))}const ft=new Set;let ae;function bn(){ae={r:0,c:[],p:ae}}function vn(){ae.r||se(ae.c),ae=ae.p}function q(n,e){n&&n.i&&(ft.delete(n),n.i(e))}function G(n,e,t,r){if(n&&n.o){if(ft.has(n))return;ft.add(n),ae.c.push(()=>{ft.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const fs={duration:0};function ve(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,l=null,c=null,h;function u(){c&&is(n,c)}function f(d,_){const y=d.b-o;return _*=Math.abs(y),{a:o,b:d.b,d:y,duration:_,start:d.start,end:d.start+_,group:d.group}}function p(d){const{delay:_=0,duration:y=300,easing:E=Gr,tick:R=C,css:j}=s||fs,D={start:Qi()+_,b:d};d||(D.group=ae,ae.r+=1),"inert"in n&&(d?h!==void 0&&(n.inert=h):(h=n.inert,n.inert=!0)),a||l?l=D:(j&&(u(),c=zn(n,o,d,y,_,E,j)),d&&R(0,1),a=f(D,y),be(()=>Gt(n,d,"start")),Yi(M=>{if(l&&M>l.start&&(a=f(l,y),l=null,Gt(n,a.b,"start"),j&&(u(),c=zn(n,o,a.b,a.duration,0,E,s.css))),a){if(M>=a.end)R(o=a.b,1-o),Gt(n,a.b,"end"),l||(a.b?u():--a.group.r||se(a.group.c)),a=null;else if(M>=a.start){const T=M-a.start;o=a.a+a.d*E(T/a.duration),R(o,1-o)}}return!!(a||l)}))}return{run(d){kt(s)?ds().then(()=>{s=s({direction:d?"in":"out"}),p(d)}):p(d)},end(){u(),a=l=null}}}function we(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function re(n){n&&n.c()}function X(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),be(()=>{const s=n.$$.on_mount.map(Wr).filter(kt);n.$$.on_destroy?n.$$.on_destroy.push(...s):se(s),n.$$.on_mount=[]}),i.forEach(be)}function Z(n,e){const t=n.$$;t.fragment!==null&&(hs(t.after_update),se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ps(n,e){n.$$.dirty[0]===-1&&(De.push(n),cs(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function de(n,e,t,r,i,s,o=null,a=[-1]){const l=Ke;je(n);const c=n.$$={fragment:null,ctx:[],props:s,update:C,not_equal:i,bound:qn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:qn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(u,f,...p)=>{const d=p.length?p[0]:f;return c.ctx&&i(c.ctx[u],c.ctx[u]=d)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](d),h&&ps(n,u)),f}):[],c.update(),h=!0,se(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const u=es(e.target);c.fragment&&c.fragment.l(u),u.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&q(n.$$.fragment),X(n,e.target,e.anchor),Zr()}je(l)}class fe{constructor(){zt(this,"$$");zt(this,"$$set")}$destroy(){Z(this,1),this.$destroy=C}$on(e,t){if(!kt(t))return C;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Wi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ms="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ms);function Ee(n,{delay:e=0,duration:t=400,easing:r=Gr}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}const _s="modulepreload",gs=function(n){return"/forum/"+n},Wn={},ce=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=gs(l),l in Wn)return;Wn[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":_s,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Ce=[];function wn(n,e=C){let t;const r=new Set;function i(a){if(oe(n,a)&&(n=a,t)){const l=!Ce.length;for(const c of r)c[1](),Ce.push(c,n);if(l){for(let c=0;c<Ce.length;c+=2)Ce[c][0](Ce[c+1]);Ce.length=0}}}function s(a){i(a(n))}function o(a,l=C){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||C),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}const Qe=wn({auth:{},user:{displayName:"",uid:""}});function ys(n){return n&&n.replaceAll(" ","-").replaceAll(":","").toLowerCase()}function bt(n){return n&&new Date(n.seconds*1e3).toLocaleString()}function Kn(n){return n.map(e=>e.data())}function Qn(n){const e=window.location.hash.replace("#/","");let t=n;return e.length&&(t=n.filter(r=>{var i;return e.includes((i=r==null?void 0:r.board)==null?void 0:i.toLowerCase())})),t||[]}function Yn(n,e,t){const r=n.slice();return r[13]=e[t],r}function Jn(n){let e,t,r,i,s,o,a=n[0].length&&Xn(n);return{c(){e=b("div"),t=b("div"),r=b("h3"),r.textContent="Создать новую тему",i=V(),a&&a.c(),v(t,"class","modal-content svelte-1bc0c9m"),v(e,"class","modal-overlay svelte-1bc0c9m")},m(l,c){A(l,e,c),m(e,t),m(t,r),m(t,i),a&&a.m(t,null),s||(o=[K(t,"click",Zi(n[7])),K(e,"click",n[12])],s=!0)},p(l,c){l[0].length?a?a.p(l,c):(a=Xn(l),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(l){l&&I(e),a&&a.d(),s=!1,se(o)}}}function Xn(n){var M;let e,t,r,i,s,o,a,l,c,h,u,f,p,d=(M=n[4])!=null&&M.user?"Создать":"Войдите, чтобы создать",_,y,E,R,j=we(n[0]),D=[];for(let T=0;T<j.length;T+=1)D[T]=Zn(Yn(n,j,T));return{c(){var T;e=b("div"),t=b("p"),t.textContent="Выберите категорию:",r=V();for(let L=0;L<D.length;L+=1)D[L].c();i=V(),s=b("div"),o=b("label"),o.textContent="Название темы:",a=V(),l=b("input"),c=V(),h=b("div"),u=b("button"),u.textContent="Отмена",f=V(),p=b("button"),_=W(d),v(e,"class","category-selector svelte-1bc0c9m"),v(o,"for","thread-title"),v(l,"type","text"),v(l,"id","thread-title"),v(l,"placeholder","Введите название..."),v(l,"class","svelte-1bc0c9m"),v(s,"class","input-group svelte-1bc0c9m"),v(u,"class","btn svelte-1bc0c9m"),v(p,"class","btn btn-primary svelte-1bc0c9m"),p.disabled=y=!n[3]||!n[2]||!((T=n[4])!=null&&T.user),v(h,"class","modal-actions svelte-1bc0c9m")},m(T,L){A(T,e,L),m(e,t),m(e,r);for(let te=0;te<D.length;te+=1)D[te]&&D[te].m(e,null);A(T,i,L),A(T,s,L),m(s,o),m(s,a),m(s,l),mt(l,n[3]),A(T,c,L),A(T,h,L),m(h,u),m(h,f),m(h,p),m(p,_),E||(R=[K(l,"input",n[10]),K(u,"click",n[11]),K(p,"click",n[6])],E=!0)},p(T,L){var te,Ue;if(L&37){j=we(T[0]);let J;for(J=0;J<j.length;J+=1){const Un=Yn(T,j,J);D[J]?D[J].p(Un,L):(D[J]=Zn(Un),D[J].c(),D[J].m(e,null))}for(;J<D.length;J+=1)D[J].d(1);D.length=j.length}L&8&&l.value!==T[3]&&mt(l,T[3]),L&16&&d!==(d=(te=T[4])!=null&&te.user?"Создать":"Войдите, чтобы создать")&&ie(_,d),L&28&&y!==(y=!T[3]||!T[2]||!((Ue=T[4])!=null&&Ue.user))&&(p.disabled=y)},d(T){T&&(I(e),I(i),I(s),I(c),I(h)),$t(D,T),E=!1,se(R)}}}function Zn(n){let e,t,r,i,s,o=n[13].title+"",a,l,c,h;function u(){return n[9](n[13])}return{c(){var f;e=b("label"),t=b("input"),i=V(),s=b("span"),a=W(o),l=V(),v(t,"type","radio"),v(t,"name","category"),t.checked=r=n[13].url===((f=n[2])==null?void 0:f.url),v(e,"class","radio-label svelte-1bc0c9m")},m(f,p){A(f,e,p),m(e,t),m(e,i),m(e,s),m(s,a),m(e,l),c||(h=K(t,"change",u),c=!0)},p(f,p){var d;n=f,p&5&&r!==(r=n[13].url===((d=n[2])==null?void 0:d.url))&&(t.checked=r),p&1&&o!==(o=n[13].title+"")&&ie(a,o)},d(f){f&&I(e),c=!1,h()}}}function bs(n){let e,t,r,i,s,o=n[1]&&Jn(n);return{c(){e=b("button"),e.textContent="Создать тему",t=V(),o&&o.c(),r=Ot(),v(e,"class","btn btn-primary svelte-1bc0c9m"),_t(e,"width","100%"),_t(e,"margin-bottom","1rem")},m(a,l){A(a,e,l),A(a,t,l),o&&o.m(a,l),A(a,r,l),i||(s=K(e,"click",n[8]),i=!0)},p(a,[l]){a[1]?o?o.p(a,l):(o=Jn(a),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i:C,o:C,d(a){a&&(I(e),I(t),I(r)),o&&o.d(a),i=!1,s()}}}function vs(n,e,t){let r;Ae(n,Qe,y=>t(4,r=y));let{listAllCategories:i=[]}=e,s=!1,o,a="";const l=y=>{t(2,o=y)},c=()=>{ce(()=>import("./forumHelpers-BEhXHnXz.js"),[]).then(async y=>{const E=st(Qe);E!=null&&E.user&&(y.addThread({board:o.url,title:a,dateCreated:new Date,dateModified:new Date,url:`${o.url}/${ys(a)}`,user:{displayName:E.user.displayName,uid:E.user.uid}}),t(1,s=!1),t(3,a=""))})};function h(y){as.call(this,n,y)}const u=()=>t(1,s=!0),f=y=>l(y);function p(){a=this.value,t(3,a)}const d=()=>t(1,s=!1),_=()=>t(1,s=!1);return n.$$set=y=>{"listAllCategories"in y&&t(0,i=y.listAllCategories)},[i,s,o,a,r,l,c,h,u,f,p,d,_]}class ws extends fe{constructor(e){super(),de(this,e,vs,bs,oe,{listAllCategories:0})}}function er(n,e,t){const r=n.slice();return r[2]=e[t],r}function tr(n){var l;let e,t=((l=n[0][0])==null?void 0:l.category)+"",r,i,s,o=we(n[0]),a=[];for(let c=0;c<o.length;c+=1)a[c]=nr(er(n,o,c));return{c(){e=b("h5"),r=W(t),i=V(),s=b("div");for(let c=0;c<a.length;c+=1)a[c].c();v(s,"class","collection")},m(c,h){A(c,e,h),m(e,r),A(c,i,h),A(c,s,h);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,null)},p(c,h){var u;if(h&1&&t!==(t=((u=c[0][0])==null?void 0:u.category)+"")&&ie(r,t),h&3){o=we(c[0]);let f;for(f=0;f<o.length;f+=1){const p=er(c,o,f);a[f]?a[f].p(p,h):(a[f]=nr(p),a[f].c(),a[f].m(s,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=o.length}},d(c){c&&(I(e),I(i),I(s)),$t(a,c)}}}function nr(n){let e,t=n[2].title+"",r,i,s,o;return{c(){e=b("a"),r=W(t),i=V(),v(e,"class",s="collection-item "+n[1](n[2])),v(e,"href",o="/#/"+n[2].url)},m(a,l){A(a,e,l),m(e,r),m(e,i)},p(a,l){l&1&&t!==(t=a[2].title+"")&&ie(r,t),l&1&&s!==(s="collection-item "+a[1](a[2]))&&v(e,"class",s),l&1&&o!==(o="/#/"+a[2].url)&&v(e,"href",o)},d(a){a&&I(e)}}}function Es(n){let e,t=n[0].length&&tr(n);return{c(){t&&t.c(),e=Ot()},m(r,i){t&&t.m(r,i),A(r,e,i)},p(r,[i]){r[0].length?t?t.p(r,i):(t=tr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:C,o:C,d(r){r&&I(e),t&&t.d(r)}}}function Ts(n,e,t){let{boards:r=[]}=e;const i=s=>window.location.hash===`#/${s.url}`?"active":"";return n.$$set=s=>{"boards"in s&&t(0,r=s.boards)},[r,i]}class Wt extends fe{constructor(e){super(),de(this,e,Ts,Es,oe,{boards:0})}}function Is(n){let e,t,r,i,s,o,a,l,c;return t=new ws({props:{listAllCategories:n[1]}}),i=new Wt({props:{boards:n[0].general}}),o=new Wt({props:{boards:n[0].ideas}}),l=new Wt({props:{boards:n[0].support}}),{c(){e=b("aside"),re(t.$$.fragment),r=V(),re(i.$$.fragment),s=V(),re(o.$$.fragment),a=V(),re(l.$$.fragment)},m(h,u){A(h,e,u),X(t,e,null),m(e,r),X(i,e,null),m(e,s),X(o,e,null),m(e,a),X(l,e,null),c=!0},p(h,[u]){const f={};u&2&&(f.listAllCategories=h[1]),t.$set(f);const p={};u&1&&(p.boards=h[0].general),i.$set(p);const d={};u&1&&(d.boards=h[0].ideas),o.$set(d);const _={};u&1&&(_.boards=h[0].support),l.$set(_)},i(h){c||(q(t.$$.fragment,h),q(i.$$.fragment,h),q(o.$$.fragment,h),q(l.$$.fragment,h),c=!0)},o(h){G(t.$$.fragment,h),G(i.$$.fragment,h),G(o.$$.fragment,h),G(l.$$.fragment,h),c=!1},d(h){h&&I(e),Z(t),Z(i),Z(o),Z(l)}}}function As(n,e,t){let{categories:r}=e,i=[];return os(()=>{var s;(s=r.general)!=null&&s.length&&t(1,i=r.general.concat(r.ideas).concat(r.support))}),n.$$set=s=>{"categories"in s&&t(0,r=s.categories)},[r,i]}class Ps extends fe{constructor(e){super(),de(this,e,As,Is,oe,{categories:0})}}function Vs(n){let e,t,r;return{c(){e=b("a"),e.textContent="Login",v(e,"class","waves-effect waves-light btn"),v(e,"href","/#/")},m(i,s){A(i,e,s),t||(r=K(e,"click",gn(Ds)),t=!0)},p:C,d(i){i&&I(e),t=!1,r()}}}function Ss(n){let e,t,r;return{c(){e=b("a"),e.textContent="Logout",v(e,"class","waves-effect waves-light btn"),v(e,"href","/#/")},m(i,s){A(i,e,s),t||(r=K(e,"click",gn(Cs)),t=!0)},p:C,d(i){i&&I(e),t=!1,r()}}}function Rs(n){let e;function t(s,o){var a,l;return(l=(a=s[0])==null?void 0:a.user)!=null&&l.displayName?Ss:Vs}let r=t(n),i=r(n);return{c(){i.c(),e=Ot()},m(s,o){i.m(s,o),A(s,e,o)},p(s,[o]){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:C,o:C,d(s){s&&I(e),i.d(s)}}}function Cs(){ce(()=>import("./index.esm-BKguC6La.js"),[]).then(n=>{n.signOut(n.getAuth())})}function Ds(){ce(()=>import("./index.esm-BKguC6La.js"),[]).then(n=>{const e=n.getAuth(),t=new n.GoogleAuthProvider;n.signInWithPopup(e,t)})}function ks(n,e,t){let r;return Ae(n,Qe,i=>t(0,r=i)),[r]}class $s extends fe{constructor(e){super(),de(this,e,ks,Rs,oe,{})}}function Os(n){let e,t,r;return{c(){e=b("div"),e.innerHTML='<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div> <div class="gap-patch"><div class="circle"></div></div> <div class="circle-clipper right"><div class="circle"></div></div></div></div>',v(e,"class","loading-spinner")},m(i,s){A(i,e,s),r=!0},p:C,i(i){r||(i&&be(()=>{r&&(t||(t=ve(e,Ee,{},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=ve(e,Ee,{},!1)),t.run(0)),r=!1},d(i){i&&I(e),i&&t&&t.end()}}}class Ns extends fe{constructor(e){super(),de(this,e,null,Os,oe,{})}}const Fs={title:"",board:"",comments:[]};function Ls(){const n={allComments:[],boards:[],threads:[],lastVisibleThreadSnapshot:null,filteredThreads:[],selectedThread:Fs},{subscribe:e,set:t,update:r}=wn(n);return{subscribe:e,update:r,setLastSnap:i=>r(s=>({...s,lastVisibleThreadSnapshot:i})),setAllComments:i=>r(s=>({...s,allComments:i})),setBoards:i=>r(s=>({...s,boards:i})),setFilteredThreads:(i=[])=>r(s=>({...s,filteredThreads:Qn(s.threads.concat(i))})),setSelectedThread:i=>r(s=>({...s,selectedThread:i})),clearSelectedThread:()=>r(i=>({...i,selectedThread:{board:""}})),updateAllThreads:i=>r(s=>({...s,threads:s.threads.concat(i),filteredThreads:Qn(s.threads.concat(i))})),reset:()=>t(n)}}const x=Ls();function Bs(n){let e,t,r,i,s,o,a,l,c,h,u,f,p;return{c(){var d,_;e=b("form"),t=b("div"),r=b("div"),i=b("input"),s=V(),o=b("label"),o.textContent="Comment text",a=V(),l=b("div"),c=b("button"),h=W("Add comment"),v(i,"id","input_text"),v(i,"type","text"),v(i,"data-length","120"),v(o,"for","input_text"),v(r,"class","input-field col s8 m9"),c.disabled=u=!n[0]||!((_=(d=n[2])==null?void 0:d.user)!=null&&_.displayName),v(c,"class","btn waves-effect waves-light"),_t(c,"word-break","break-all"),v(c,"type","submit"),v(c,"name","action"),v(l,"class","input-field col s6 m3 right-align"),v(t,"class","row valign-wrapper")},m(d,_){A(d,e,_),m(e,t),m(t,r),m(r,i),mt(i,n[0]),m(r,s),m(r,o),m(t,a),m(t,l),m(l,c),m(c,h),f||(p=[K(i,"input",n[4]),K(e,"submit",gn(n[5]))],f=!0)},p(d,[_]){var y,E;_&1&&i.value!==d[0]&&mt(i,d[0]),_&5&&u!==(u=!d[0]||!((E=(y=d[2])==null?void 0:y.user)!=null&&E.displayName))&&(c.disabled=u)},i:C,o:C,d(d){d&&I(e),f=!1,se(p)}}}function xs(n,e,t){let r,i;Ae(n,x,c=>t(1,r=c)),Ae(n,Qe,c=>t(2,i=c));let s="";const o=c=>{ce(()=>import("./forumHelpers-BEhXHnXz.js"),[]).then(async h=>{const u=st(Qe);h.addComment({board:c.board,text:s,threadURL:c.url,dateCreated:new Date,dateModified:new Date,user:{displayName:u.user.displayName,uid:u.user.uid}})})};function a(){s=this.value,t(0,s)}return[s,r,i,o,a,()=>o(r.selectedThread)]}class Ms extends fe{constructor(e){super(),de(this,e,xs,Bs,oe,{})}}function rr(n,e,t){const r=n.slice();return r[3]=e[t],r}function ir(n){var f,p;let e,t,r=n[0].selectedThread.title+"",i,s,o,a,l,c,h=we(((p=(f=n[0])==null?void 0:f.selectedThread)==null?void 0:p.comments)||[]),u=[];for(let d=0;d<h.length;d+=1)u[d]=sr(rr(n,h,d));return l=new Ms({}),{c(){e=b("h5"),t=W("Thread Title: "),i=W(r),s=V(),o=b("ul");for(let d=0;d<u.length;d+=1)u[d].c();a=V(),re(l.$$.fragment),v(o,"class","collection")},m(d,_){A(d,e,_),m(e,t),m(e,i),A(d,s,_),A(d,o,_);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(o,null);A(d,a,_),X(l,d,_),c=!0},p(d,_){var y,E;if((!c||_&1)&&r!==(r=d[0].selectedThread.title+"")&&ie(i,r),_&1){h=we(((E=(y=d[0])==null?void 0:y.selectedThread)==null?void 0:E.comments)||[]);let R;for(R=0;R<h.length;R+=1){const j=rr(d,h,R);u[R]?u[R].p(j,_):(u[R]=sr(j),u[R].c(),u[R].m(o,null))}for(;R<u.length;R+=1)u[R].d(1);u.length=h.length}},i(d){c||(q(l.$$.fragment,d),c=!0)},o(d){G(l.$$.fragment,d),c=!1},d(d){d&&(I(e),I(s),I(o),I(a)),$t(u,d),Z(l,d)}}}function sr(n){let e,t,r,i,s=n[3].user.displayName+"",o,a,l,c=bt(n[3].dateCreated)+"",h,u,f,p=n[3].text+"",d,_;return{c(){e=b("li"),t=b("i"),r=V(),i=b("p"),o=W(s),a=V(),l=b("small"),h=W(c),u=V(),f=b("blockquote"),d=W(p),_=V(),v(t,"class","material-icons circle"),v(e,"class","collection-item avatar hoverable")},m(y,E){A(y,e,E),m(e,t),m(e,r),m(e,i),m(i,o),m(i,a),m(i,l),m(l,h),m(e,u),m(e,f),m(f,d),m(e,_)},p(y,E){E&1&&s!==(s=y[3].user.displayName+"")&&ie(o,s),E&1&&c!==(c=bt(y[3].dateCreated)+"")&&ie(h,c),E&1&&p!==(p=y[3].text+"")&&ie(d,p)},d(y){y&&I(e)}}}function Us(n){var s;let e,t,r,i=((s=n[0].selectedThread)==null?void 0:s.title)&&ir(n);return{c(){e=b("div"),i&&i.c()},m(o,a){A(o,e,a),i&&i.m(e,null),r=!0},p(o,[a]){var l;(l=o[0].selectedThread)!=null&&l.title?i?(i.p(o,a),a&1&&q(i,1)):(i=ir(o),i.c(),q(i,1),i.m(e,null)):i&&(bn(),G(i,1,1,()=>{i=null}),vn())},i(o){r||(q(i),o&&be(()=>{r&&(t||(t=ve(e,Ee,{},!0)),t.run(1))}),r=!0)},o(o){G(i),o&&(t||(t=ve(e,Ee,{},!1)),t.run(0)),r=!1},d(o){o&&I(e),i&&i.d(),o&&t&&t.end()}}}function qs(n,e,t){let r;Ae(n,x,o=>t(0,r=o));const i=(o,a)=>o.filter(l=>a.url===l.threadURL);function s(){x.update(o=>({...o,selectedThread:{...o.selectedThread,comments:i(o.allComments,o.selectedThread)}}))}return yn(()=>{ce(()=>import("./forumHelpers-BEhXHnXz.js"),[]).then(o=>{console.log("mount getAllComments"),o.getAllComments().then(()=>{s()})})}),[r]}class or extends fe{constructor(e){super(),de(this,e,qs,Us,oe,{})}}function js(n){return n()}function zs(n){n.forEach(js)}const lt=[],ar=[],pt=[],lr=[],ei=Promise.resolve();let rn=!1;function Hs(){rn||(rn=!0,ei.then(Ks))}function Gs(){return Hs(),ei}function Ws(n){pt.push(n)}const Kt=new Set;let ct=0;function Ks(){do{for(;ct<lt.length;){const n=lt[ct];ct++,Qs(n.$$)}for(lt.length=0,ct=0;ar.length;)ar.pop()();for(let n=0;n<pt.length;n+=1){const e=pt[n];Kt.has(e)||(Kt.add(e),e())}pt.length=0}while(lt.length);for(;lr.length;)lr.pop()();rn=!1,Kt.clear()}function Qs(n){if(n.fragment!==null){n.update(),zs(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ws)}}const Ys={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},me=(n,e)=>new CustomEvent(n,{detail:e});function Js(n,e={}){const{root:t,rootMargin:r,threshold:i,unobserveOnEnter:s}=Object.assign(Object.assign({},Ys),e);let o={x:void 0,y:void 0},a={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&n){const l=new IntersectionObserver((c,h)=>{c.forEach(u=>{o.y>u.boundingClientRect.y?a.vertical="up":a.vertical="down",o.x>u.boundingClientRect.x?a.horizontal="left":a.horizontal="right",o={y:u.boundingClientRect.y,x:u.boundingClientRect.x};const f={inView:u.isIntersecting,entry:u,scrollDirection:a,node:n,observer:h};n.dispatchEvent(me("inview_change",f)),n.dispatchEvent(me("change",f)),u.isIntersecting?(n.dispatchEvent(me("inview_enter",f)),n.dispatchEvent(me("enter",f)),s&&h.unobserve(n)):(n.dispatchEvent(me("inview_leave",f)),n.dispatchEvent(me("leave",f)))})},{root:t,rootMargin:r,threshold:i});return Gs().then(()=>{n.dispatchEvent(me("inview_init",{observer:l,node:n})),n.dispatchEvent(me("init",{observer:l,node:n}))}),l.observe(n),{destroy(){l.unobserve(n)}}}}const Xs=wn({app:null,db:null});var cr={};/**
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
 */const ti=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zs=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(t[h],t[u],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ti(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zs(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new eo;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),u!==64){const d=c<<6&192|u;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const to=function(n){const e=ti(n);return ni.encodeByteArray(e,!0)},vt=function(n){return to(n).replace(/\./g,"")},no=function(n){try{return ni.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ro(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const io=()=>ro().__FIREBASE_DEFAULTS__,so=()=>{if(typeof process>"u"||typeof cr>"u")return;const n=cr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&no(n[1]);return e&&JSON.parse(e)},En=()=>{try{return io()||so()||oo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ao=n=>{var e,t;return(t=(e=En())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lo=n=>{const e=ao(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ri=()=>{var n;return(n=En())===null||n===void 0?void 0:n.config},ac=n=>{var e;return(e=En())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function uo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vt(JSON.stringify(t)),vt(JSON.stringify(o)),""].join(".")}/**
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
 */function ii(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ii())}function cc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dc(){const n=ii();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ho(){try{return typeof indexedDB=="object"}catch{return!1}}function fo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const po="FirebaseError";class xe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=po,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mo(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xe(i,a,r)}}function mo(n,e){return n.replace(_o,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _o=/\{\$([^}]+)}/g;function fc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ur(s)&&ur(o)){if(!sn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ur(n){return n!==null&&typeof n=="object"}/**
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
 */function pc(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _c(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function gc(n,e){const t=new go(n,e);return t.subscribe.bind(t)}class go{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");yo(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qt),i.error===void 0&&(i.error=Qt),i.complete===void 0&&(i.complete=Qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qt(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ie="[DEFAULT]";/**
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
 */class bo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new co;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wo(e))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ie){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ie){return this.instances.has(e)}getOptions(e=Ie){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vo(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ie){return this.component?this.component.multipleInstances?e:Ie:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vo(n){return n===Ie?void 0:n}function wo(n){return n.instantiationMode==="EAGER"}/**
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
 */class Eo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const To={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Io=S.INFO,Ao={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Po=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ao[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oi{constructor(e){this.name=e,this._logLevel=Io,this._logHandler=Po,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?To[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Vo=(n,e)=>e.some(t=>n instanceof t);let hr,dr;function So(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ro(){return dr||(dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ai=new WeakMap,on=new WeakMap,li=new WeakMap,Yt=new WeakMap,Tn=new WeakMap;function Co(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ge(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ai.set(t,n)}).catch(()=>{}),Tn.set(e,n),e}function Do(n){if(on.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});on.set(n,e)}let an={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return on.get(n);if(e==="objectStoreNames")return n.objectStoreNames||li.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ko(n){an=n(an)}function $o(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jt(this),e,...t);return li.set(r,e.sort?e.sort():[e]),ge(r)}:Ro().includes(n)?function(...e){return n.apply(Jt(this),e),ge(ai.get(this))}:function(...e){return ge(n.apply(Jt(this),e))}}function Oo(n){return typeof n=="function"?$o(n):(n instanceof IDBTransaction&&Do(n),Vo(n,So())?new Proxy(n,an):n)}function ge(n){if(n instanceof IDBRequest)return Co(n);if(Yt.has(n))return Yt.get(n);const e=Oo(n);return e!==n&&(Yt.set(n,e),Tn.set(e,n)),e}const Jt=n=>Tn.get(n);function No(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ge(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ge(o.result),l.oldVersion,l.newVersion,ge(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Fo=["get","getKey","getAll","getAllKeys","count"],Lo=["put","add","delete","clear"],Xt=new Map;function fr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xt.get(e))return Xt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Lo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fo.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Xt.set(e,s),s}ko(n=>({...n,get:(e,t,r)=>fr(e,t)||n.get(e,t,r),has:(e,t)=>!!fr(e,t)||n.has(e,t)}));/**
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
 */class Bo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ln="@firebase/app",pr="0.10.13";/**
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
 */const ue=new oi("@firebase/app"),Mo="@firebase/app-compat",Uo="@firebase/analytics-compat",qo="@firebase/analytics",jo="@firebase/app-check-compat",zo="@firebase/app-check",Ho="@firebase/auth",Go="@firebase/auth-compat",Wo="@firebase/database",Ko="@firebase/data-connect",Qo="@firebase/database-compat",Yo="@firebase/functions",Jo="@firebase/functions-compat",Xo="@firebase/installations",Zo="@firebase/installations-compat",ea="@firebase/messaging",ta="@firebase/messaging-compat",na="@firebase/performance",ra="@firebase/performance-compat",ia="@firebase/remote-config",sa="@firebase/remote-config-compat",oa="@firebase/storage",aa="@firebase/storage-compat",la="@firebase/firestore",ca="@firebase/vertexai-preview",ua="@firebase/firestore-compat",ha="firebase",da="10.14.1";/**
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
 */const cn="[DEFAULT]",fa={[ln]:"fire-core",[Mo]:"fire-core-compat",[qo]:"fire-analytics",[Uo]:"fire-analytics-compat",[zo]:"fire-app-check",[jo]:"fire-app-check-compat",[Ho]:"fire-auth",[Go]:"fire-auth-compat",[Wo]:"fire-rtdb",[Ko]:"fire-data-connect",[Qo]:"fire-rtdb-compat",[Yo]:"fire-fn",[Jo]:"fire-fn-compat",[Xo]:"fire-iid",[Zo]:"fire-iid-compat",[ea]:"fire-fcm",[ta]:"fire-fcm-compat",[na]:"fire-perf",[ra]:"fire-perf-compat",[ia]:"fire-rc",[sa]:"fire-rc-compat",[oa]:"fire-gcs",[aa]:"fire-gcs-compat",[la]:"fire-fst",[ua]:"fire-fst-compat",[ca]:"fire-vertex","fire-js":"fire-js",[ha]:"fire-js-all"};/**
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
 */const wt=new Map,pa=new Map,un=new Map;function mr(n,e){try{n.container.addComponent(e)}catch(t){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(un.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;un.set(e,n);for(const t of wt.values())mr(t,n);for(const t of pa.values())mr(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yc(n){return n.settings!==void 0}/**
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
 */const _a={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ye=new si("app","Firebase",_a);/**
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
 */class ga{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
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
 */const ya=da;function ba(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ye.create("bad-app-name",{appName:String(i)});if(t||(t=ri()),!t)throw ye.create("no-options");const s=wt.get(i);if(s){if(sn(t,s.options)&&sn(r,s.config))return s;throw ye.create("duplicate-app",{appName:i})}const o=new Eo(i);for(const l of un.values())o.addComponent(l);const a=new ga(t,r,o);return wt.set(i,a),a}function va(n=cn){const e=wt.get(n);if(!e&&n===cn&&ri())return ba();if(!e)throw ye.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let i=(r=fa[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(a.join(" "));return}Et(new Ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wa="firebase-heartbeat-database",Ea=1,Je="firebase-heartbeat-store";let Zt=null;function ci(){return Zt||(Zt=No(wa,Ea,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Je)}catch(t){console.warn(t)}}}}).catch(n=>{throw ye.create("idb-open",{originalErrorMessage:n.message})})),Zt}async function Ta(n){try{const t=(await ci()).transaction(Je),r=await t.objectStore(Je).get(ui(n));return await t.done,r}catch(e){if(e instanceof xe)ue.warn(e.message);else{const t=ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ue.warn(t.message)}}}async function _r(n,e){try{const r=(await ci()).transaction(Je,"readwrite");await r.objectStore(Je).put(e,ui(n)),await r.done}catch(t){if(t instanceof xe)ue.warn(t.message);else{const r=ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ue.warn(r.message)}}}function ui(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ia=1024,Aa=30*24*60*60*1e3;class Pa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Aa}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ue.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gr(),{heartbeatsToSend:r,unsentEntries:i}=Va(this._heartbeatsCache.heartbeats),s=vt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ue.warn(t),""}}}function gr(){return new Date().toISOString().substring(0,10)}function Va(n,e=Ia){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),yr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ho()?fo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ta(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yr(n){return vt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ra(n){Et(new Ye("platform-logger",e=>new Bo(e),"PRIVATE")),Et(new Ye("heartbeat",e=>new Pa(e),"PRIVATE")),ze(ln,pr,n),ze(ln,pr,"esm2017"),ze("fire-js","")}Ra("");/**
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
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let Me="10.14.0";/**
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
 */const Fe=new oi("@firebase/firestore");function Tt(n,...e){if(Fe.logLevel<=S.DEBUG){const t=e.map(An);Fe.debug(`Firestore (${Me}): ${n}`,...t)}}function In(n,...e){if(Fe.logLevel<=S.ERROR){const t=e.map(An);Fe.error(`Firestore (${Me}): ${n}`,...t)}}function hi(n,...e){if(Fe.logLevel<=S.WARN){const t=e.map(An);Fe.warn(`Firestore (${Me}): ${n}`,...t)}}function An(n){if(typeof n=="string")return n;try{/**
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
 */function k(n="Unexpected state"){const e=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+n;throw In(e),new Error(e)}function Te(n,e){n||k()}function Nt(n,e){return n}/**
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
 */const br="ok",Ca="cancelled",He="unknown",w="invalid-argument",Da="deadline-exceeded",di="not-found",ka="permission-denied",hn="unauthenticated",$a="resource-exhausted",Le="failed-precondition",Oa="aborted",Na="out-of-range",fi="unimplemented",Fa="internal",La="unavailable";class g extends xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ba{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(z.UNAUTHENTICATED))}shutdown(){}}class xa{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ma{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Te(typeof e.accessToken=="string"),new pi(e.accessToken,new z(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ua{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class qa{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ua(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ja{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class za{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Te(typeof e.token=="string"),new ja(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Ha{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Xe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xe&&e.projectId===this.projectId&&e.database===this.database}}class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&k(),r===void 0?r=e.length-t:r>e.length-t&&k(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends Ze{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(w,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const Ga=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends Ze{construct(e,t,r){return new H(e,t,r)}static isValidIdentifier(e){return Ga.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(w,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(w,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new g(w,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(w,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(O.fromString(e))}static fromName(e){return new F(O.fromString(e).popFirst(5))}static empty(){return new F(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new O(e.slice()))}}/**
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
 */function mi(n,e,t){if(!t)throw new g(w,`Function ${n}() cannot be called with an empty ${e}.`)}function vr(n){if(!F.isDocumentKey(n))throw new g(w,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wr(n){if(F.isDocumentKey(n))throw new g(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ft(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ft(n);throw new g(w,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Wa(n,e){if(e<=0)throw new g(w,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function _i(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let ut=null;function Ka(){return ut===null?ut=function(){return 268435456+Math.round(2147483648*Math.random())}():ut++,"0x"+ut.toString(16)}/**
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
 */function Qa(n){return n==null}function It(n){return n===0&&1/n==-1/0}/**
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
 */const Ya={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Er,P;function Tr(n){if(n===void 0)return In("RPC_ERROR","HTTP error has no status"),He;switch(n){case 200:return br;case 400:return Le;case 401:return hn;case 403:return ka;case 404:return di;case 409:return Oa;case 416:return Na;case 429:return $a;case 499:return Ca;case 500:return He;case 501:return fi;case 503:return La;case 504:return Da;default:return n>=200&&n<300?br:n>=400&&n<500?Le:n>=500&&n<600?Fa:He}}/**
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
 */(P=Er||(Er={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";class Ja extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){const a=Ka(),l=this.V(t,r.toUriEncodedString());Tt("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,s,o),this.p(t,l,c,i).then(h=>(Tt("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw hi("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}I(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}V(t,r){const i=Ya[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new g(Tr(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new g(Tr(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function Xa(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Za{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Xa(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function gi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */function Ir(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new el("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const tl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(n){if(Te(!!n),typeof n=="string"){let e=0;const t=tl.exec(n);if(Te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function et(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(w,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(w,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(w,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(w,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Pn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yi(n){const e=n.mapValue.fields.__previous_value__;return Pn(e)?yi(e):e}function tt(n){const e=Ve(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
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
 */const ht={};function Se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pn(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:function(t){var r,i;return((i=(((r=t==null?void 0:t.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(n)?10:11:k()}function At(n,e){if(n===e)return!0;const t=Se(n);if(t!==Se(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return tt(n).isEqual(tt(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ve(i.timestampValue),a=Ve(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return et(i.bytesValue).isEqual(et(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?It(o)===It(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return gi(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ir(o)!==Ir(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!At(o[l],a[l])))return!1;return!0}(n,e);default:return k()}}function nt(n,e){return(n.values||[]).find(t=>At(t,e))!==void 0}function Pt(n,e){if(n===e)return 0;const t=Se(n),r=Se(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),l=$(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Ar(n.timestampValue,e.timestampValue);case 4:return Ar(tt(n),tt(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(s,o){const a=et(s),l=et(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=N(a[c],l[c]);if(h!==0)return h}return N(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=N($(s.latitude),$(o.latitude));return a!==0?a:N($(s.longitude),$(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Pr(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const u=s.fields||{},f=o.fields||{},p=(a=u.value)===null||a===void 0?void 0:a.arrayValue,d=(l=f.value)===null||l===void 0?void 0:l.arrayValue,_=N(((c=p==null?void 0:p.values)===null||c===void 0?void 0:c.length)||0,((h=d==null?void 0:d.values)===null||h===void 0?void 0:h.length)||0);return _!==0?_:Pr(p,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ht&&o===ht)return 0;if(s===ht)return 1;if(o===ht)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let u=0;u<l.length&&u<h.length;++u){const f=N(l[u],h[u]);if(f!==0)return f;const p=Pt(a[l[u]],c[h[u]]);if(p!==0)return p}return N(l.length,h.length)}(n.mapValue,e.mapValue);default:throw k()}}function Ar(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Ve(n),r=Ve(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function Pr(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Pt(t[i],r[i]);if(s)return s}return N(t.length,r.length)}function Vt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bi(n){return!!n&&"arrayValue"in n}function Vr(n){return!!n&&"nullValue"in n}function Sr(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function en(n){return!!n&&"mapValue"in n}function Ge(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ge(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ge(n.arrayValue.values[t]);return e}return Object.assign({},n)}class St{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class vi{}class ee extends vi{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nl(e,t,r):t==="array-contains"?new sl(e,r):t==="in"?new ol(e,r):t==="not-in"?new al(e,r):t==="array-contains-any"?new ll(e,r):new ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rl(e,r):new il(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pt(t,this.value)):t!==null&&Se(this.value)===Se(t)&&this.matchesComparison(Pt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends vi{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new ot(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class nl extends ee{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class rl extends ee{constructor(e,t){super(e,"in",t),this.keys=wi("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class il extends ee{constructor(e,t){super(e,"not-in",t),this.keys=wi("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wi(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class sl extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bi(t)&&nt(t.arrayValue,this.value)}}class ol extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nt(this.value.arrayValue,t)}}class al extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!nt(this.value.arrayValue,t)}}class ll extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>nt(this.value.arrayValue,r))}}/**
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
 */class Rt{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new Q(0,0))}static max(){return new U(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ct{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new Ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dt(this.root,e,this.comparator,!1)}getReverseIterator(){return new dt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dt(this.root,e,this.comparator,!0)}}class dt{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??B.RED,this.left=i??B.EMPTY,this.right=s??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new B(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return B.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,r,i,s){return this}insert(e,t,r){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rr(this.data.getIterator())}getIteratorFrom(e){return new Rr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class Rr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(e){this.fields=e,e.sort(H.comparator)}static empty(){return new it([])}unionWith(e){let t=new rt(H.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ne{constructor(e){this.value=e}static empty(){return new ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!en(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ge(t)}setAll(e){let t=H.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Ge(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());en(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];en(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ne(Ge(this.value))}}/**
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
 */class _e{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _e(e,0,U.min(),U.min(),U.min(),ne.empty(),0)}static newFoundDocument(e,t,r,i){return new _e(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new _e(e,2,t,U.min(),U.min(),ne.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,U.min(),U.min(),ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cl{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Cr(n,e=null,t=[],r=[],i=null,s=null,o=null){return new cl(n,e,t,r,i,s,o)}/**
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
 */class at{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Ei(n){return n.collectionGroup!==null}function Ti(n){const e=Nt(n);if(e.S===null){e.S=[];const t=new Set;for(const s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(H.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new Rt(s,r))}),t.has(H.keyField().canonicalString())||e.S.push(new Rt(H.keyField(),r))}return e.S}function ul(n){const e=Nt(n);return e.N||(e.N=hl(e,Ti(n))),e.N}function hl(n,e){if(n.limitType==="F")return Cr(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Rt(i.field,s)});const t=n.endAt?new St(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new St(n.startAt.position,n.startAt.inclusive):null;return Cr(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dn(n,e){const t=n.filters.concat([e]);return new at(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
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
 */function Ii(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:It(e)?"-0":e}}function dl(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!It(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):Ii(n,e)}/**
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
 */class xt{constructor(){this._=void 0}}class fl extends xt{}class pl extends xt{constructor(e){super(),this.elements=e}}class ml extends xt{constructor(e){super(),this.elements=e}}class _l extends xt{constructor(e,t){super(),this.serializer=e,this.q=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Mt{}class Ai extends Mt{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends Mt{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class gl extends Mt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yl extends Mt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const bl={asc:"ASCENDING",desc:"DESCENDING"},vl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wl={and:"AND",or:"OR"};class El{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Il(n,e){return fn(n,e.toTimestamp())}function Dr(n){return Te(!!n),U.fromTimestamp(function(t){const r=Ve(t);return new Q(r.seconds,r.nanos)}(n))}function Vn(n,e){return pn(n,e).canonicalString()}function pn(n,e){const t=function(i){return new O(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mn(n,e){return Vn(n.databaseId,e.path)}function Al(n,e){const t=function(i){const s=O.fromString(i);return Te(Si(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new g(w,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(w,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(function(i){return Te(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function kr(n,e,t){return{name:mn(n,e),fields:t.value.mapValue.fields}}function Pl(n,e){let t;if(e instanceof Ai)t={update:kr(n,e.key,e.value)};else if(e instanceof gl)t={delete:mn(n,e.key)};else if(e instanceof Pi)t={update:kr(n,e.key,e.data),updateMask:Dl(e.fieldMask)};else{if(!(e instanceof yl))return k();t={verify:mn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _l)return{fieldPath:o.field.canonicalString(),increment:a.q};throw k()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Il(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(n,e.precondition)),t}function Vl(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(c,h){return Vn(c.databaseId,h)}(n,i);const s=function(c){if(c.length!==0)return Vi(ot.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:ke(f.field),direction:Sl(f.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=function(c,h){return c.useProto3Json||Qa(h)?h:{value:h}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:t,parent:i}}function Sl(n){return bl[n]}function Rl(n){return vl[n]}function Cl(n){return wl[n]}function ke(n){return{fieldPath:n.canonicalString()}}function Vi(n){return n instanceof ee?function(t){if(t.op==="=="){if(Sr(t.value))return{unaryFilter:{field:ke(t.field),op:"IS_NAN"}};if(Vr(t.value))return{unaryFilter:{field:ke(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sr(t.value))return{unaryFilter:{field:ke(t.field),op:"IS_NOT_NAN"}};if(Vr(t.value))return{unaryFilter:{field:ke(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(t.field),op:Rl(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(i=>Vi(i));return r.length===1?r[0]:{compositeFilter:{op:Cl(t.op),filters:r}}}(n):k()}function Dl(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Si(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Sn(n){return new El(n,!0)}/**
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
 */class kl extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new g(Le,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,pn(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===hn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(He,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,pn(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===hn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new g(He,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Ri(n,e){const t=Nt(n),r={writes:e.map(i=>Pl(t.serializer,i))};await t.P("Commit",t.serializer.databaseId,O.emptyPath(),r)}async function $l(n,e){const t=Nt(n),{B:r,parent:i}=Vl(t.serializer,ul(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,c){const h=Al(a,l.name),u=Dr(l.updateTime),f=l.createTime?Dr(l.createTime):U.min(),p=new ne({mapValue:{fields:l.fields}}),d=_e.newFoundDocument(h,u,f,p);return c?d.setHasCommittedMutations():d}(t.serializer,s.document,void 0))}/**
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
 */const We=new Map;function Rn(n){if(n._terminated)throw new g(Le,"The client has already been terminated.");if(!We.has(n)){Tt("ComponentProvider","Initializing Datastore");const e=function(s){return new Ja(s,fetch.bind(null))}(function(s,o,a,l){return new Ha(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,_i(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Sn(n._databaseId),r=function(s,o,a,l){return new kl(s,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);We.set(n,r)}return We.get(n)}class $r{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new g(w,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_i((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(w,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(w,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(w,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ut{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $r({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new g(Le,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new g(Le,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $r(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ba;switch(r.type){case"firstParty":return new qa(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(w,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=We.get(t);r&&(Tt("ComponentProvider","Removing Datastore"),We.delete(t),r.terminate())}(this),Promise.resolve()}}function Ec(n,e){const t=typeof n=="object"?n:va(),r=typeof n=="string"?n:"(default)",i=ma(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=lo("firestore");s&&Ol(i,...s)}return i}function Ol(n,e,t,r={}){var i;const s=(n=Lt(n,Ut))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=z.MOCK_USER;else{a=uo(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new g(w,"mockUserToken must contain 'sub' or 'user_id' field!");l=new z(c)}n._authCredentials=new xa(new pi(a,l))}}/**
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
 */class pe{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pe(this.firestore,e,this._query)}}class Y{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new le(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Y(this.firestore,e,this._key)}}class le extends pe{constructor(e,t,r){super(e,t,function(s){return new at(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Y(this.firestore,null,new F(e))}withConverter(e){return new le(this.firestore,e,this._path)}}function Or(n,e,...t){if(n=Pe(n),mi("collection","path",e),n instanceof Ut){const r=O.fromString(e,...t);return wr(r),new le(n,null,r)}{if(!(n instanceof Y||n instanceof le))throw new g(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return wr(r),new le(n.firestore,null,r)}}function Nl(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=Za.newId()),mi("doc","path",e),n instanceof Ut){const r=O.fromString(e,...t);return vr(r),new Y(n,null,new F(r))}{if(!(n instanceof Y||n instanceof le))throw new g(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return vr(r),new Y(n.firestore,n instanceof le?n.converter:null,new F(r))}}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(he.fromBase64String(e))}catch(t){throw new g(w,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Cn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ci{constructor(e){this._methodName=e}}/**
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
 */class Dn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(w,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(w,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */class kn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Fl=/^__.*__$/;class Ll{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ai(e,this.data,t,this.fieldTransforms)}}function Di(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class $n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new $n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Dt(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Di(this.et)&&Fl.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Bl{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Sn(e)}ht(e,t,r,i=!1){return new $n({et:e,methodName:t,lt:r,path:H.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qt(n){const e=n._freezeSettings(),t=Sn(n._databaseId);return new Bl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ki(n,e,t,r,i,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,i);Fi("Data must be an object, but it was:",o,r);const a=Oi(r,o);let l,c;if(s.merge)l=new it(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const u of s.mergeFields){const f=xl(e,u,t);if(!o.contains(f))throw new g(w,`Field '${f}' is specified in your field mask but missing from your input data.`);Ul(h,f)||h.push(f)}l=new it(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new Ll(new ne(a),l,c)}function $i(n,e,t,r=!1){return On(t,n.ht(r?4:3,e))}function On(n,e){if(Ni(n=Pe(n)))return Fi("Unsupported field value:",e,n),Oi(n,e);if(n instanceof Ci)return function(r,i){if(!Di(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=On(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Q.fromDate(r);return{timestampValue:fn(i.serializer,s)}}if(r instanceof Q){const s=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fn(i.serializer,s)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:Tl(i.serializer,r._byteString)};if(r instanceof Y){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vn(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kn)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return Ii(a.serializer,l)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${Ft(r)}`)}(n,e)}function Oi(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,i)=>{const s=On(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ni(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Dn||n instanceof Be||n instanceof Y||n instanceof Ci||n instanceof kn)}function Fi(n,e,t){if(!Ni(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ft(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}function xl(n,e,t){if((e=Pe(e))instanceof Cn)return e._internalPath;if(typeof e=="string")return Li(n,e);throw Dt("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ml=new RegExp("[~\\*/\\[\\]]");function Li(n,e,t){if(e.search(Ml)>=0)throw Dt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cn(...e.split("."))._internalPath}catch{throw Dt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dt(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new g(w,a+n+l)}function Ul(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xi(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xi extends Bi{data(){return super.data()}}class ql{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Mi(n,e){return typeof e=="string"?Li(n,e):e instanceof Cn?e._internalPath:e._delegate._internalPath}/**
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
 */class Nn{}class jt extends Nn{}function Nr(n,e,...t){let r=[];e instanceof Nn&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof Ln).length,a=s.filter(l=>l instanceof Fn).length;if(o>1||o>0&&a>0)throw new g(w,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Fn extends jt{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Fn(e,t,r)}_apply(e){const t=this._parse(e);return Ui(e._query,t),new pe(e.firestore,e.converter,dn(e._query,t))}_parse(e){const t=qt(e.firestore);return function(s,o,a,l,c,h,u){let f;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new g(w,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xr(u,h);const p=[];for(const d of u)p.push(Br(l,s,d));f={arrayValue:{values:p}}}else f=Br(l,s,u)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xr(u,h),f=$i(a,o,u,h==="in"||h==="not-in");return ee.create(c,h,f)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ln extends Nn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ln(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Ui(o,l),o=dn(o,l)}(e._query,t),new pe(e.firestore,e.converter,dn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bn extends jt{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Bn(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(w,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(w,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rt(s,o)}(e._query,this._field,this._direction);return new pe(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new at(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Fr(n,e="asc"){const t=e,r=Mi("orderBy",n);return Bn._create(r,t)}class xn extends jt{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new xn(e,t,r)}_apply(e){return new pe(e.firestore,e.converter,function(r,i,s){return new at(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function Lr(n){return Wa("limit",n),xn._create("limit",n,"F")}class Mn extends jt{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Mn(e,t,r)}_apply(e){const t=zl(e,this.type,this._docOrFields,this._inclusive);return new pe(e.firestore,e.converter,function(i,s){return new at(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function jl(...n){return Mn._create("startAfter",n,!1)}function zl(n,e,t,r){if(t[0]=Pe(t[0]),t[0]instanceof Bi)return function(s,o,a,l,c){if(!l)throw new g(di,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const u of Ti(s))if(u.field.isKeyField())h.push(Vt(o,l.key));else{const f=l.data.field(u.field);if(Pn(f))throw new g(w,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const p=u.field.canonicalString();throw new g(w,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}h.push(f)}return new St(h,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=qt(n.firestore);return function(o,a,l,c,h,u){const f=o.explicitOrderBy;if(h.length>f.length)throw new g(w,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let d=0;d<h.length;d++){const _=h[d];if(f[d].field.isKeyField()){if(typeof _!="string")throw new g(w,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof _}`);if(!Ei(o)&&_.indexOf("/")!==-1)throw new g(w,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${_}' contains a slash.`);const y=o.path.child(O.fromString(_));if(!F.isDocumentKey(y))throw new g(w,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const E=new F(y);p.push(Vt(a,E))}else{const y=$i(l,c,_);p.push(y)}}return new St(p,u)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Br(n,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new g(w,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ei(e)&&t.indexOf("/")!==-1)throw new g(w,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!F.isDocumentKey(r))throw new g(w,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vt(n,new F(r))}if(t instanceof Y)return Vt(n,t._key);throw new g(w,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ft(t)}.`)}function xr(n,e){if(!Array.isArray(n)||n.length===0)throw new g(w,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ui(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(w,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(w,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
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
 */function qi(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Hl extends class{convertValue(t,r="none"){switch(Se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(et(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw k()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return Bt(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertVectorValue(t){var r,i,s;const o=(s=(i=(r=t.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>$(a.doubleValue));return new kn(o)}convertGeoPoint(t){return new Dn($(t.latitude),$(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=yi(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(tt(t));default:return null}}convertTimestamp(t){const r=Ve(t);return new Q(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=O.fromString(t);Te(Si(i));const s=new Xe(i.get(1),i.get(3)),o=new F(i.popFirst(5));return s.isEqual(r)||In(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}function Mr(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new g(fi,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Lt(n,pe))._query);const e=Rn(n.firestore),t=new Hl(n.firestore);return $l(e,n._query).then(r=>{const i=r.map(s=>new xi(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new ql(n,i)})}function Ic(n,e,t){const r=qi((n=Lt(n,Y)).converter,e),i=ki(qt(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return Ri(Rn(n.firestore),[i.toMutation(n._key,Ne.none())])}function Ac(n,e){const t=Nl(n=Lt(n,le)),r=qi(n.converter,e),i=ki(qt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Ri(Rn(n.firestore),[i.toMutation(t._key,Ne.exists(!1))]).then(()=>t)}(function(){(function(t){Me=t})(`${ya}_lite`),Et(new Ye("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ut(new Ma(e.getProvider("auth-internal")),new za(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(w,'"projectId" not provided in firebase.initializeApp.');return new Xe(a.options.projectId,l)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),ze("firestore-lite","4.7.3",""),ze("firestore-lite","4.7.3","esm2017")})();async function ji(n,e,t,r=null,i=25){var o,a;const{db:s}=st(Xs);if(r){const l=Nr(Or(s,n),Fr(e),jl(r),Lr(i)),c=await Mr(l);return[(c==null?void 0:c.docs[((o=c==null?void 0:c.docs)==null?void 0:o.length)-1])||null,Kn(c.docs)]}else if(t){const l=Nr(Or(s,n),Fr(e),Lr(i)),c=await Mr(l);return[(c==null?void 0:c.docs[((a=c==null?void 0:c.docs)==null?void 0:a.length)-1])||null,Kn(c.docs)]}}async function zi(n,e){if(n.inView){const{lastVisibleThreadSnapshot:t}=st(e);if(!t)return;const r=await ji("threads","dateCreated",!1,t);e.setLastSnap(r[0]),r[1].length>0&&e.updateAllThreads(r[1])}}const Gl=Object.freeze(Object.defineProperty({__proto__:null,getNextThreadsPage:zi,getPaginatedResults:ji},Symbol.toStringTag,{value:"Module"}));function Ur(n,e,t){const r=n.slice();return r[5]=e[t],r}function qr(n){var D;let e,t,r,i,s=n[5].title+"",o,a,l,c,h,u=bt((D=n[5])==null?void 0:D.dateCreated)+"",f,p,d,_,y,E,R;function j(){return n[3](n[5])}return{c(){var M,T;e=b("li"),t=b("i"),r=V(),i=b("a"),o=W(s),l=V(),c=b("br"),h=b("small"),f=W(u),p=V(),d=b("span"),y=V(),v(t,"class","material-icons circle avatar-bg"),v(i,"href",a="/#/"+((M=n[5])==null?void 0:M.url)),v(d,"class","new badge right"),v(d,"data-badge-caption",_=(T=n[5])==null?void 0:T.board.replace("boards/","")),v(e,"class","collection-item avatar hoverable")},m(M,T){A(M,e,T),m(e,t),m(e,r),m(e,i),m(i,o),m(e,l),m(e,c),m(e,h),m(h,f),m(e,p),m(e,d),m(e,y),E||(R=K(i,"click",j),E=!0)},p(M,T){var L,te,Ue;n=M,T&1&&s!==(s=n[5].title+"")&&ie(o,s),T&1&&a!==(a="/#/"+((L=n[5])==null?void 0:L.url))&&v(i,"href",a),T&1&&u!==(u=bt((te=n[5])==null?void 0:te.dateCreated)+"")&&ie(f,u),T&1&&_!==(_=(Ue=n[5])==null?void 0:Ue.board.replace("boards/",""))&&v(d,"data-badge-caption",_)},d(M){M&&I(e),E=!1,R()}}}function jr(n){let e,t=n[5]&&qr(n);return{c(){t&&t.c(),e=Ot()},m(r,i){t&&t.m(r,i),A(r,e,i)},p(r,i){r[5]?t?t.p(r,i):(t=qr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&I(e),t&&t.d(r)}}}function zr(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="",_t(e,"height","1rem")},m(i,s){A(i,e,s),t||(r=[Ki(Js.call(null,e,n[1])),K(e,"change",n[2])],t=!0)},p:C,d(i){i&&I(e),t=!1,se(r)}}}function Wl(n){let e,t,r,i,s,o,a,l=we(n[0].filteredThreads),c=[];for(let u=0;u<l.length;u+=1)c[u]=jr(Ur(n,l,u));let h=n[0].filteredThreads.length&&zr(n);return{c(){e=b("div"),t=b("h5"),t.textContent="Thread List",r=V(),i=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();s=V(),h&&h.c(),v(i,"class","collection")},m(u,f){A(u,e,f),m(e,t),m(e,r),m(e,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(i,null);m(e,s),h&&h.m(e,null),a=!0},p(u,[f]){if(f&1){l=we(u[0].filteredThreads);let p;for(p=0;p<l.length;p+=1){const d=Ur(u,l,p);c[p]?c[p].p(d,f):(c[p]=jr(d),c[p].c(),c[p].m(i,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}u[0].filteredThreads.length?h?h.p(u,f):(h=zr(u),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i(u){a||(u&&be(()=>{a&&(o||(o=ve(e,Ee,{},!0)),o.run(1))}),a=!0)},o(u){u&&(o||(o=ve(e,Ee,{},!1)),o.run(0)),a=!1},d(u){u&&I(e),$t(c,u),h&&h.d(),u&&o&&o.end()}}}function Kl(n,e,t){let r;Ae(n,x,l=>t(0,r=l));const i={rootMargin:"0px"},s=async({detail:l})=>{zi(l,x)},o=()=>{const{threads:l,lastVisibleThreadSnapshot:c}=st(x);(l.length===0||c)&&ce(()=>import("./initFireBase-D83qRv54.js"),__vite__mapDeps([0,1])).then(()=>{ce(()=>Promise.resolve().then(()=>Gl),void 0).then(async h=>{const u=await h.getPaginatedResults("threads","dateCreated",l.length===0,c);x.setLastSnap(u[0]),u[1].length>0&&x.updateAllThreads(u[1])})})};return yn(()=>{o()}),[r,i,s,l=>x.setSelectedThread(l)]}class Hr extends fe{constructor(e){super(),de(this,e,Kl,Wl,oe,{})}}const Ql=[{collectionName:"boards",documents:[{category:"General",title:"Announcements",url:"boards/announcements"},{category:"General",title:"Social",url:"boards/social"},{category:"General",title:"Tutorials",url:"boards/tutorials"},{category:"Ideas",title:"Design",url:"boards/design"},{category:"Ideas",title:"Features",url:"boards/features"},{category:"Support",title:"Hosting",url:"boards/hosting"},{category:"Support",title:"Installation",url:"boards/installation"},{category:"Support",title:"Upgrades",url:"boards/upgrades"}]}],Yl=n=>{Ql.forEach(e=>{e.documents.forEach(async t=>{await n.addNewDocument(n.globalFirestoreDB,e.collectionName,t,t.title)})})},tn=(n,e)=>n.filter(t=>(t==null?void 0:t.category)===e);async function Jl(n,e){return n.length===0?(console.log("Seeding boards..."),Yl(e),await e.getAllCollectionDocs("boards")):n}const Xl=()=>{ce(()=>import("./initFireBase-D83qRv54.js"),__vite__mapDeps([0,1])).then(()=>{ce(()=>import("./forumHelpers-BEhXHnXz.js"),[]).then(async n=>{let e=await n.getAllCollectionDocs("boards");e.length===0&&(e=await Jl(e,n)),x.setBoards(e)})})};class Zl{constructor(e){this.routes=[],this.mode="hash",this.root="/",this.addRoute=(t,r)=>(this.routes.push({path:t,callback:r}),this),this.cleanPath=t=>t.toString().replace(/\/$/,"").replace(/^\//,""),this.getCurrentRoute=()=>{let t="";if(this.mode==="history")t=this.cleanPath(decodeURI(window.location.pathname+window.location.search)),t=t.replace(/\?(.*)$/,""),t=this.root!=="/"?t.replace(this.root,""):t;else{const r=window.location.href.match(/#(.*)$/);t=r?r[1]:""}return this.cleanPath(t)},this.initializeNavigationListener=()=>{clearInterval(this.interval),this.interval=setInterval(this.getCustomInterval,50)},this.getCustomInterval=()=>{this.current!==this.getCurrentRoute()&&(this.current=this.getCurrentRoute(),this.routes.some(t=>{const r=this.current.match(t.path);return r?(r.shift(),t.callback.apply({},r),r):!1}))},this.mode=window.history.pushState?"history":"hash",e.mode&&(this.mode=e.mode),e.root&&(this.root=e.root),this.initializeNavigationListener()}}function ec(){new Zl({mode:"hash",root:"/"}).addRoute(/boards\/\w+\/\w+/,()=>{x.setFilteredThreads()}).addRoute(/boards/,()=>{x.clearSelectedThread(),x.setFilteredThreads()}).addRoute("",()=>{x.clearSelectedThread(),x.setFilteredThreads()})}function tc(n){var p;let e,t,r,i,s,o,a,l,c,h;t=new $s({}),o=new Ps({props:{categories:n[0]}});var u=(p=n[1].selectedThread)!=null&&p.board?or:Hr;function f(d,_){return{}}return u&&(c=jn(u,f())),{c(){e=b("header"),re(t.$$.fragment),r=V(),i=b("div"),s=b("aside"),re(o.$$.fragment),a=V(),l=b("main"),c&&re(c.$$.fragment),v(e,"class","forum-header svelte-qzqu49"),v(s,"class","forum-sidebar svelte-qzqu49"),v(l,"class","forum-main svelte-qzqu49"),v(i,"class","forum-layout svelte-qzqu49")},m(d,_){A(d,e,_),X(t,e,null),A(d,r,_),A(d,i,_),m(i,s),X(o,s,null),m(i,a),m(i,l),c&&X(c,l,null),h=!0},p(d,_){var E;const y={};if(_&1&&(y.categories=d[0]),o.$set(y),_&2&&u!==(u=(E=d[1].selectedThread)!=null&&E.board?or:Hr)){if(c){bn();const R=c;G(R.$$.fragment,1,0,()=>{Z(R,1)}),vn()}u?(c=jn(u,f()),re(c.$$.fragment),q(c.$$.fragment,1),X(c,l,null)):c=null}},i(d){h||(q(t.$$.fragment,d),q(o.$$.fragment,d),c&&q(c.$$.fragment,d),h=!0)},o(d){G(t.$$.fragment,d),G(o.$$.fragment,d),c&&G(c.$$.fragment,d),h=!1},d(d){d&&(I(e),I(r),I(i)),Z(t),Z(o),c&&Z(c)}}}function nc(n){let e,t;return e=new Ns({}),{c(){re(e.$$.fragment)},m(r,i){X(e,r,i),t=!0},p:C,i(r){t||(q(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function rc(n){let e,t,r,i,s;const o=[nc,tc],a=[];function l(c,h){var u;return(u=c[0].general)!=null&&u.length?1:0}return t=l(n),r=a[t]=o[t](n),{c(){e=b("div"),r.c(),v(e,"class","forum-root svelte-qzqu49")},m(c,h){A(c,e,h),a[t].m(e,null),s=!0},p(c,[h]){let u=t;t=l(c),t===u?a[t].p(c,h):(bn(),G(a[u],1,1,()=>{a[u]=null}),vn(),r=a[t],r?r.p(c,h):(r=a[t]=o[t](c),r.c()),q(r,1),r.m(e,null))},i(c){s||(q(r),c&&be(()=>{s&&(i||(i=ve(e,Ee,{},!0)),i.run(1))}),s=!0)},o(c){G(r),c&&(i||(i=ve(e,Ee,{},!1)),i.run(0)),s=!1},d(c){c&&I(e),a[t].d(),c&&i&&i.end()}}}function ic(n,e,t){let r;Ae(n,x,s=>t(1,r=s));let i={};return yn(()=>{x.subscribe(s=>{t(0,i.general=tn(s.boards,"General"),i),t(0,i.support=tn(s.boards,"Support"),i),t(0,i.ideas=tn(s.boards,"Ideas"),i)}),ec(),Xl()}),[i,r]}class sc extends fe{constructor(e){super(),de(this,e,ic,rc,oe,{})}}new sc({target:document.getElementById("app")});export{ma as A,ao as B,Ye as C,va as D,si as E,xe as F,sn as G,dc as H,fc as I,mc as J,_c as K,oi as L,cc as M,ya as S,Et as _,Ac as a,st as b,Or as c,Nl as d,Kn as e,x as f,Mr as g,Ec as h,ba as i,Xs as j,Qe as k,ac as l,lc as m,hc as n,Fr as o,uc as p,Nr as q,ze as r,Ic as s,yc as t,Pe as u,gc as v,S as w,ii as x,no as y,pc as z};
