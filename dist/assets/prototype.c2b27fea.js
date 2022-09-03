import"./modulepreload-polyfill.c7c6310f.js";function Vi(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function cu(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function $l(n){let t,e,i;n.length!==2?(t=Vi,e=(a,c)=>Vi(n(a),c),i=(a,c)=>n(a)-c):(t=n===Vi||n===cu?n:uu,e=n,i=n);function r(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{const h=l+u>>>1;e(a[h],c)<0?l=h+1:u=h}while(l<u)}return l}function s(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{const h=l+u>>>1;e(a[h],c)<=0?l=h+1:u=h}while(l<u)}return l}function o(a,c,l=0,u=a.length){const h=r(a,c,l,u-1);return h>l&&i(a[h-1],c)>-i(a[h],c)?h-1:h}return{left:r,center:o,right:s}}function uu(){return 0}function hu(n){return n===null?NaN:+n}const fu=$l(Vi),du=fu.right;$l(hu).center;const pu=du;function mu(n,t){let e,i;if(t===void 0)for(const r of n)r!=null&&(e===void 0?r>=r&&(e=i=r):(e>r&&(e=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=t(s,++r,n))!=null&&(e===void 0?s>=s&&(e=i=s):(e>s&&(e=s),i<s&&(i=s)))}return[e,i]}class qa extends Map{constructor(t,e=xu){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[i,r]of t)this.set(i,r)}get(t){return super.get(Xa(this,t))}has(t){return super.has(Xa(this,t))}set(t,e){return super.set(gu(this,t),e)}delete(t){return super.delete(_u(this,t))}}function Xa({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):e}function gu({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):(n.set(i,e),e)}function _u({_intern:n,_key:t},e){const i=t(e);return n.has(i)&&(e=n.get(i),n.delete(i)),e}function xu(n){return n!==null&&typeof n=="object"?n.valueOf():n}var Js=Math.sqrt(50),Qs=Math.sqrt(10),ta=Math.sqrt(2);function vu(n,t,e){var i,r=-1,s,o,a;if(t=+t,n=+n,e=+e,n===t&&e>0)return[n];if((i=t<n)&&(s=n,n=t,t=s),(a=Yl(n,t,e))===0||!isFinite(a))return[];if(a>0){let c=Math.round(n/a),l=Math.round(t/a);for(c*a<n&&++c,l*a>t&&--l,o=new Array(s=l-c+1);++r<s;)o[r]=(c+r)*a}else{a=-a;let c=Math.round(n*a),l=Math.round(t*a);for(c/a<n&&++c,l/a>t&&--l,o=new Array(s=l-c+1);++r<s;)o[r]=(c+r)/a}return i&&o.reverse(),o}function Yl(n,t,e){var i=(t-n)/Math.max(0,e),r=Math.floor(Math.log(i)/Math.LN10),s=i/Math.pow(10,r);return r>=0?(s>=Js?10:s>=Qs?5:s>=ta?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(s>=Js?10:s>=Qs?5:s>=ta?2:1)}function yu(n,t,e){var i=Math.abs(t-n)/Math.max(0,e),r=Math.pow(10,Math.floor(Math.log(i)/Math.LN10)),s=i/r;return s>=Js?r*=10:s>=Qs?r*=5:s>=ta&&(r*=2),t<n?-r:r}function Hi(n,t){let e;if(t===void 0)for(const i of n)i!=null&&(e<i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of n)(r=t(r,++i,n))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function Mu(n,t){let e;if(t===void 0)for(const i of n)i!=null&&(e>i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of n)(r=t(r,++i,n))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}function bu(n,t,e){n=+n,t=+t,e=(r=arguments.length)<2?(t=n,n=0,1):r<3?1:+e;for(var i=-1,r=Math.max(0,Math.ceil((t-n)/e))|0,s=new Array(r);++i<r;)s[i]=n+i*e;return s}function wu(n){return n}var cs=1,us=2,ea=3,Oi=4,$a=1e-6;function Su(n){return"translate("+n+",0)"}function Eu(n){return"translate(0,"+n+")"}function Au(n){return t=>+n(t)}function Tu(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function Cu(){return!this.__axis}function jl(n,t){var e=[],i=null,r=null,s=6,o=6,a=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,l=n===cs||n===Oi?-1:1,u=n===Oi||n===us?"x":"y",h=n===cs||n===ea?Su:Eu;function f(m){var g=i==null?t.ticks?t.ticks.apply(t,e):t.domain():i,p=r==null?t.tickFormat?t.tickFormat.apply(t,e):wu:r,d=Math.max(s,0)+a,_=t.range(),v=+_[0]+c,y=+_[_.length-1]+c,x=(t.bandwidth?Tu:Au)(t.copy(),c),b=m.selection?m.selection():m,L=b.selectAll(".domain").data([null]),I=b.selectAll(".tick").data(g,t).order(),M=I.exit(),T=I.enter().append("g").attr("class","tick"),P=I.select("line"),D=I.select("text");L=L.merge(L.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),I=I.merge(T),P=P.merge(T.append("line").attr("stroke","currentColor").attr(u+"2",l*s)),D=D.merge(T.append("text").attr("fill","currentColor").attr(u,l*d).attr("dy",n===cs?"0em":n===ea?"0.71em":"0.32em")),m!==b&&(L=L.transition(m),I=I.transition(m),P=P.transition(m),D=D.transition(m),M=M.transition(m).attr("opacity",$a).attr("transform",function(B){return isFinite(B=x(B))?h(B+c):this.getAttribute("transform")}),T.attr("opacity",$a).attr("transform",function(B){var C=this.parentNode.__axis;return h((C&&isFinite(C=C(B))?C:x(B))+c)})),M.remove(),L.attr("d",n===Oi||n===us?o?"M"+l*o+","+v+"H"+c+"V"+y+"H"+l*o:"M"+c+","+v+"V"+y:o?"M"+v+","+l*o+"V"+c+"H"+y+"V"+l*o:"M"+v+","+c+"H"+y),I.attr("opacity",1).attr("transform",function(B){return h(x(B)+c)}),P.attr(u+"2",l*s),D.attr(u,l*d).text(p),b.filter(Cu).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===us?"start":n===Oi?"end":"middle"),b.each(function(){this.__axis=x})}return f.scale=function(m){return arguments.length?(t=m,f):t},f.ticks=function(){return e=Array.from(arguments),f},f.tickArguments=function(m){return arguments.length?(e=m==null?[]:Array.from(m),f):e.slice()},f.tickValues=function(m){return arguments.length?(i=m==null?null:Array.from(m),f):i&&i.slice()},f.tickFormat=function(m){return arguments.length?(r=m,f):r},f.tickSize=function(m){return arguments.length?(s=o=+m,f):s},f.tickSizeInner=function(m){return arguments.length?(s=+m,f):s},f.tickSizeOuter=function(m){return arguments.length?(o=+m,f):o},f.tickPadding=function(m){return arguments.length?(a=+m,f):a},f.offset=function(m){return arguments.length?(c=+m,f):c},f}function Lu(n){return jl(ea,n)}function Du(n){return jl(Oi,n)}var Pu={value:()=>{}};function wa(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Nr(e)}function Nr(n){this._=n}function Ru(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Nr.prototype=wa.prototype={constructor:Nr,on:function(n,t){var e=this._,i=Ru(n+"",e),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=Iu(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(n=i[s]).type)e[r]=Ya(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Ya(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Nr(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function Iu(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function Ya(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=Pu,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var na="http://www.w3.org/1999/xhtml";const ja={svg:"http://www.w3.org/2000/svg",xhtml:na,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Kr(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),ja.hasOwnProperty(t)?{space:ja[t],local:n}:n}function Nu(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===na&&t.documentElement.namespaceURI===na?t.createElement(n):t.createElementNS(e,n)}}function Fu(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Zl(n){var t=Kr(n);return(t.local?Fu:Nu)(t)}function Ou(){}function Sa(n){return n==null?Ou:function(){return this.querySelector(n)}}function zu(n){typeof n!="function"&&(n=Sa(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=new Array(o),c,l,u=0;u<o;++u)(c=s[u])&&(l=n.call(c,c.__data__,u,s))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new xe(i,this._parents)}function Uu(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Bu(){return[]}function Kl(n){return n==null?Bu:function(){return this.querySelectorAll(n)}}function ku(n){return function(){return Uu(n.apply(this,arguments))}}function Gu(n){typeof n=="function"?n=ku(n):n=Kl(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(n.call(c,c.__data__,l,o)),r.push(c));return new xe(i,r)}function Jl(n){return function(){return this.matches(n)}}function Ql(n){return function(t){return t.matches(n)}}var Vu=Array.prototype.find;function Hu(n){return function(){return Vu.call(this.children,n)}}function Wu(){return this.firstElementChild}function qu(n){return this.select(n==null?Wu:Hu(typeof n=="function"?n:Ql(n)))}var Xu=Array.prototype.filter;function $u(){return Array.from(this.children)}function Yu(n){return function(){return Xu.call(this.children,n)}}function ju(n){return this.selectAll(n==null?$u:Yu(typeof n=="function"?n:Ql(n)))}function Zu(n){typeof n!="function"&&(n=Jl(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],c,l=0;l<o;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&a.push(c);return new xe(i,this._parents)}function tc(n){return new Array(n.length)}function Ku(){return new xe(this._enter||this._groups.map(tc),this._parents)}function kr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}kr.prototype={constructor:kr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Ju(n){return function(){return n}}function Qu(n,t,e,i,r,s){for(var o=0,a,c=t.length,l=s.length;o<l;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):e[o]=new kr(n,s[o]);for(;o<c;++o)(a=t[o])&&(r[o]=a)}function th(n,t,e,i,r,s,o){var a,c,l=new Map,u=t.length,h=s.length,f=new Array(u),m;for(a=0;a<u;++a)(c=t[a])&&(f[a]=m=o.call(c,c.__data__,a,t)+"",l.has(m)?r[a]=c:l.set(m,c));for(a=0;a<h;++a)m=o.call(n,s[a],a,s)+"",(c=l.get(m))?(i[a]=c,c.__data__=s[a],l.delete(m)):e[a]=new kr(n,s[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(f[a])===c&&(r[a]=c)}function eh(n){return n.__data__}function nh(n,t){if(!arguments.length)return Array.from(this,eh);var e=t?th:Qu,i=this._parents,r=this._groups;typeof n!="function"&&(n=Ju(n));for(var s=r.length,o=new Array(s),a=new Array(s),c=new Array(s),l=0;l<s;++l){var u=i[l],h=r[l],f=h.length,m=ih(n.call(u,u&&u.__data__,l,i)),g=m.length,p=a[l]=new Array(g),d=o[l]=new Array(g),_=c[l]=new Array(f);e(u,h,p,d,_,m,t);for(var v=0,y=0,x,b;v<g;++v)if(x=p[v]){for(v>=y&&(y=v+1);!(b=d[y])&&++y<g;);x._next=b||null}}return o=new xe(o,i),o._enter=a,o._exit=c,o}function ih(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function rh(){return new xe(this._exit||this._groups.map(tc),this._parents)}function sh(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function ah(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,o=Math.min(r,s),a=new Array(r),c=0;c<o;++c)for(var l=e[c],u=i[c],h=l.length,f=a[c]=new Array(h),m,g=0;g<h;++g)(m=l[g]||u[g])&&(f[g]=m);for(;c<r;++c)a[c]=e[c];return new xe(a,this._parents)}function oh(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function lh(n){n||(n=ch);function t(h,f){return h&&f?n(h.__data__,f.__data__):!h-!f}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var o=e[s],a=o.length,c=r[s]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new xe(r,this._parents).order()}function ch(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function uh(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function hh(){return Array.from(this)}function fh(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function dh(){let n=0;for(const t of this)++n;return n}function ph(){return!this.node()}function mh(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&n.call(a,a.__data__,s,r);return this}function gh(n){return function(){this.removeAttribute(n)}}function _h(n){return function(){this.removeAttributeNS(n.space,n.local)}}function xh(n,t){return function(){this.setAttribute(n,t)}}function vh(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function yh(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Mh(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function bh(n,t){var e=Kr(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?_h:gh:typeof t=="function"?e.local?Mh:yh:e.local?vh:xh)(e,t))}function ec(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function wh(n){return function(){this.style.removeProperty(n)}}function Sh(n,t,e){return function(){this.style.setProperty(n,t,e)}}function Eh(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function Ah(n,t,e){return arguments.length>1?this.each((t==null?wh:typeof t=="function"?Eh:Sh)(n,t,e==null?"":e)):yi(this.node(),n)}function yi(n,t){return n.style.getPropertyValue(t)||ec(n).getComputedStyle(n,null).getPropertyValue(t)}function Th(n){return function(){delete this[n]}}function Ch(n,t){return function(){this[n]=t}}function Lh(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Dh(n,t){return arguments.length>1?this.each((t==null?Th:typeof t=="function"?Lh:Ch)(n,t)):this.node()[n]}function nc(n){return n.trim().split(/^|\s+/)}function Ea(n){return n.classList||new ic(n)}function ic(n){this._node=n,this._names=nc(n.getAttribute("class")||"")}ic.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function rc(n,t){for(var e=Ea(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function sc(n,t){for(var e=Ea(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function Ph(n){return function(){rc(this,n)}}function Rh(n){return function(){sc(this,n)}}function Ih(n,t){return function(){(t.apply(this,arguments)?rc:sc)(this,n)}}function Nh(n,t){var e=nc(n+"");if(arguments.length<2){for(var i=Ea(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Ih:t?Ph:Rh)(e,t))}function Fh(){this.textContent=""}function Oh(n){return function(){this.textContent=n}}function zh(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}function Uh(n){return arguments.length?this.each(n==null?Fh:(typeof n=="function"?zh:Oh)(n)):this.node().textContent}function Bh(){this.innerHTML=""}function kh(n){return function(){this.innerHTML=n}}function Gh(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}function Vh(n){return arguments.length?this.each(n==null?Bh:(typeof n=="function"?Gh:kh)(n)):this.node().innerHTML}function Hh(){this.nextSibling&&this.parentNode.appendChild(this)}function Wh(){return this.each(Hh)}function qh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Xh(){return this.each(qh)}function $h(n){var t=typeof n=="function"?n:Zl(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Yh(){return null}function jh(n,t){var e=typeof n=="function"?n:Zl(n),i=t==null?Yh:typeof t=="function"?t:Sa(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function Zh(){var n=this.parentNode;n&&n.removeChild(this)}function Kh(){return this.each(Zh)}function Jh(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function Qh(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function tf(n){return this.select(n?Qh:Jh)}function ef(n){return arguments.length?this.property("__data__",n):this.node().__data__}function nf(n){return function(t){n.call(this,t,this.__data__)}}function rf(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function sf(n){return function(){var t=this.__on;if(!!t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function af(n,t,e){return function(){var i=this.__on,r,s=nf(t);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function of(n,t,e){var i=rf(n+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?af:sf,r=0;r<s;++r)this.each(a(i[r],t,e));return this}function ac(n,t,e){var i=ec(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function lf(n,t){return function(){return ac(this,n,t)}}function cf(n,t){return function(){return ac(this,n,t.apply(this,arguments))}}function uf(n,t){return this.each((typeof t=="function"?cf:lf)(n,t))}function*hf(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var oc=[null];function xe(n,t){this._groups=n,this._parents=t}function Ji(){return new xe([[document.documentElement]],oc)}function ff(){return this}xe.prototype=Ji.prototype={constructor:xe,select:zu,selectAll:Gu,selectChild:qu,selectChildren:ju,filter:Zu,data:nh,enter:Ku,exit:rh,join:sh,merge:ah,selection:ff,order:oh,sort:lh,call:uh,nodes:hh,node:fh,size:dh,empty:ph,each:mh,attr:bh,style:Ah,property:Dh,classed:Nh,text:Uh,html:Vh,raise:Wh,lower:Xh,append:$h,insert:jh,remove:Kh,clone:tf,datum:ef,on:of,dispatch:uf,[Symbol.iterator]:hf};function Rt(n){return typeof n=="string"?new xe([[document.querySelector(n)]],[document.documentElement]):new xe([[n]],oc)}function Aa(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function lc(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function Qi(){}var Wi=.7,Gr=1/Wi,gi="\\s*([+-]?\\d+)\\s*",qi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",He="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",df=/^#([0-9a-f]{3,8})$/,pf=new RegExp(`^rgb\\(${gi},${gi},${gi}\\)$`),mf=new RegExp(`^rgb\\(${He},${He},${He}\\)$`),gf=new RegExp(`^rgba\\(${gi},${gi},${gi},${qi}\\)$`),_f=new RegExp(`^rgba\\(${He},${He},${He},${qi}\\)$`),xf=new RegExp(`^hsl\\(${qi},${He},${He}\\)$`),vf=new RegExp(`^hsla\\(${qi},${He},${He},${qi}\\)$`),Za={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Aa(Qi,zn,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Ka,formatHex:Ka,formatHex8:yf,formatHsl:Mf,formatRgb:Ja,toString:Ja});function Ka(){return this.rgb().formatHex()}function yf(){return this.rgb().formatHex8()}function Mf(){return cc(this).formatHsl()}function Ja(){return this.rgb().formatRgb()}function zn(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=df.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Qa(t):e===3?new fe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?sr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?sr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=pf.exec(n))?new fe(t[1],t[2],t[3],1):(t=mf.exec(n))?new fe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=gf.exec(n))?sr(t[1],t[2],t[3],t[4]):(t=_f.exec(n))?sr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=xf.exec(n))?no(t[1],t[2]/100,t[3]/100,1):(t=vf.exec(n))?no(t[1],t[2]/100,t[3]/100,t[4]):Za.hasOwnProperty(n)?Qa(Za[n]):n==="transparent"?new fe(NaN,NaN,NaN,0):null}function Qa(n){return new fe(n>>16&255,n>>8&255,n&255,1)}function sr(n,t,e,i){return i<=0&&(n=t=e=NaN),new fe(n,t,e,i)}function bf(n){return n instanceof Qi||(n=zn(n)),n?(n=n.rgb(),new fe(n.r,n.g,n.b,n.opacity)):new fe}function Xi(n,t,e,i){return arguments.length===1?bf(n):new fe(n,t,e,i==null?1:i)}function fe(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Aa(fe,Xi,lc(Qi,{brighter(n){return n=n==null?Gr:Math.pow(Gr,n),new fe(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Wi:Math.pow(Wi,n),new fe(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new fe(Nn(this.r),Nn(this.g),Nn(this.b),Vr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:to,formatHex:to,formatHex8:wf,formatRgb:eo,toString:eo}));function to(){return`#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}`}function wf(){return`#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}${Dn((isNaN(this.opacity)?1:this.opacity)*255)}`}function eo(){const n=Vr(this.opacity);return`${n===1?"rgb(":"rgba("}${Nn(this.r)}, ${Nn(this.g)}, ${Nn(this.b)}${n===1?")":`, ${n})`}`}function Vr(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Nn(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Dn(n){return n=Nn(n),(n<16?"0":"")+n.toString(16)}function no(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Re(n,t,e,i)}function cc(n){if(n instanceof Re)return new Re(n.h,n.s,n.l,n.opacity);if(n instanceof Qi||(n=zn(n)),!n)return new Re;if(n instanceof Re)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),o=NaN,a=s-r,c=(s+r)/2;return a?(t===s?o=(e-i)/a+(e<i)*6:e===s?o=(i-t)/a+2:o=(t-e)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new Re(o,a,c,n.opacity)}function Sf(n,t,e,i){return arguments.length===1?cc(n):new Re(n,t,e,i==null?1:i)}function Re(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Aa(Re,Sf,lc(Qi,{brighter(n){return n=n==null?Gr:Math.pow(Gr,n),new Re(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Wi:Math.pow(Wi,n),new Re(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new fe(hs(n>=240?n-240:n+120,r,i),hs(n,r,i),hs(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Re(io(this.h),ar(this.s),ar(this.l),Vr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Vr(this.opacity);return`${n===1?"hsl(":"hsla("}${io(this.h)}, ${ar(this.s)*100}%, ${ar(this.l)*100}%${n===1?")":`, ${n})`}`}}));function io(n){return n=(n||0)%360,n<0?n+360:n}function ar(n){return Math.max(0,Math.min(1,n||0))}function hs(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function Ef(n,t,e,i,r){var s=n*n,o=s*n;return((1-3*n+3*s-o)*t+(4-6*s+3*o)*e+(1+3*n+3*s-3*o)*i+o*r)/6}function Af(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[i],s=n[i+1],o=i>0?n[i-1]:2*r-s,a=i<t-1?n[i+2]:2*s-r;return Ef((e-i/t)*t,o,r,s,a)}}const Ta=n=>()=>n;function Tf(n,t){return function(e){return n+e*t}}function Cf(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Lf(n){return(n=+n)==1?uc:function(t,e){return e-t?Cf(t,e,n):Ta(isNaN(t)?e:t)}}function uc(n,t){var e=t-n;return e?Tf(n,e):Ta(isNaN(n)?t:n)}const Hr=function n(t){var e=Lf(t);function i(r,s){var o=e((r=Xi(r)).r,(s=Xi(s)).r),a=e(r.g,s.g),c=e(r.b,s.b),l=uc(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return i.gamma=n,i}(1);function Df(n){return function(t){var e=t.length,i=new Array(e),r=new Array(e),s=new Array(e),o,a;for(o=0;o<e;++o)a=Xi(t[o]),i[o]=a.r||0,r[o]=a.g||0,s[o]=a.b||0;return i=n(i),r=n(r),s=n(s),a.opacity=1,function(c){return a.r=i(c),a.g=r(c),a.b=s(c),a+""}}}var Pf=Df(Af);function Rf(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,i=t.slice(),r;return function(s){for(r=0;r<e;++r)i[r]=n[r]*(1-s)+t[r]*s;return i}}function If(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Nf(n,t){var e=t?t.length:0,i=n?Math.min(e,n.length):0,r=new Array(i),s=new Array(e),o;for(o=0;o<i;++o)r[o]=Jr(n[o],t[o]);for(;o<e;++o)s[o]=t[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function Ff(n,t){var e=new Date;return n=+n,t=+t,function(i){return e.setTime(n*(1-i)+t*i),e}}function Pe(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function Of(n,t){var e={},i={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Jr(n[r],t[r]):i[r]=t[r];return function(s){for(r in e)i[r]=e[r](s);return i}}var ia=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fs=new RegExp(ia.source,"g");function zf(n){return function(){return n}}function Uf(n){return function(t){return n(t)+""}}function hc(n,t){var e=ia.lastIndex=fs.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",t=t+"";(i=ia.exec(n))&&(r=fs.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:Pe(i,r)})),e=fs.lastIndex;return e<t.length&&(s=t.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?Uf(c[0].x):zf(t):(t=c.length,function(l){for(var u=0,h;u<t;++u)a[(h=c[u]).i]=h.x(l);return a.join("")})}function Jr(n,t){var e=typeof t,i;return t==null||e==="boolean"?Ta(t):(e==="number"?Pe:e==="string"?(i=zn(t))?(t=i,Hr):hc:t instanceof zn?Hr:t instanceof Date?Ff:If(t)?Rf:Array.isArray(t)?Nf:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Of:Pe)(n,t)}function fc(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var ro=180/Math.PI,ra={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function dc(n,t,e,i,r,s){var o,a,c;return(o=Math.sqrt(n*n+t*t))&&(n/=o,t/=o),(c=n*e+t*i)&&(e-=n*c,i-=t*c),(a=Math.sqrt(e*e+i*i))&&(e/=a,i/=a,c/=a),n*i<t*e&&(n=-n,t=-t,c=-c,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*ro,skewX:Math.atan(c)*ro,scaleX:o,scaleY:a}}var or;function Bf(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?ra:dc(t.a,t.b,t.c,t.d,t.e,t.f)}function kf(n){return n==null||(or||(or=document.createElementNS("http://www.w3.org/2000/svg","g")),or.setAttribute("transform",n),!(n=or.transform.baseVal.consolidate()))?ra:(n=n.matrix,dc(n.a,n.b,n.c,n.d,n.e,n.f))}function pc(n,t,e,i){function r(l){return l.length?l.pop()+" ":""}function s(l,u,h,f,m,g){if(l!==h||u!==f){var p=m.push("translate(",null,t,null,e);g.push({i:p-4,x:Pe(l,h)},{i:p-2,x:Pe(u,f)})}else(h||f)&&m.push("translate("+h+t+f+e)}function o(l,u,h,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:h.push(r(h)+"rotate(",null,i)-2,x:Pe(l,u)})):u&&h.push(r(h)+"rotate("+u+i)}function a(l,u,h,f){l!==u?f.push({i:h.push(r(h)+"skewX(",null,i)-2,x:Pe(l,u)}):u&&h.push(r(h)+"skewX("+u+i)}function c(l,u,h,f,m,g){if(l!==h||u!==f){var p=m.push(r(m)+"scale(",null,",",null,")");g.push({i:p-4,x:Pe(l,h)},{i:p-2,x:Pe(u,f)})}else(h!==1||f!==1)&&m.push(r(m)+"scale("+h+","+f+")")}return function(l,u){var h=[],f=[];return l=n(l),u=n(u),s(l.translateX,l.translateY,u.translateX,u.translateY,h,f),o(l.rotate,u.rotate,h,f),a(l.skewX,u.skewX,h,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,h,f),l=u=null,function(m){for(var g=-1,p=f.length,d;++g<p;)h[(d=f[g]).i]=d.x(m);return h.join("")}}}var Gf=pc(Bf,"px, ","px)","deg)"),Vf=pc(kf,", ",")",")"),Mi=0,zi=0,Ri=0,mc=1e3,Wr,Ui,qr=0,Un=0,Qr=0,$i=typeof performance=="object"&&performance.now?performance:Date,gc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Ca(){return Un||(gc(Hf),Un=$i.now()+Qr)}function Hf(){Un=0}function Xr(){this._call=this._time=this._next=null}Xr.prototype=La.prototype={constructor:Xr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Ca():+e)+(t==null?0:+t),!this._next&&Ui!==this&&(Ui?Ui._next=this:Wr=this,Ui=this),this._call=n,this._time=e,sa()},stop:function(){this._call&&(this._call=null,this._time=1/0,sa())}};function La(n,t,e){var i=new Xr;return i.restart(n,t,e),i}function Wf(){Ca(),++Mi;for(var n=Wr,t;n;)(t=Un-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Mi}function so(){Un=(qr=$i.now())+Qr,Mi=zi=0;try{Wf()}finally{Mi=0,Xf(),Un=0}}function qf(){var n=$i.now(),t=n-qr;t>mc&&(Qr-=t,qr=n)}function Xf(){for(var n,t=Wr,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Wr=e);Ui=n,sa(i)}function sa(n){if(!Mi){zi&&(zi=clearTimeout(zi));var t=n-Un;t>24?(n<1/0&&(zi=setTimeout(so,n-$i.now()-Qr)),Ri&&(Ri=clearInterval(Ri))):(Ri||(qr=$i.now(),Ri=setInterval(qf,mc)),Mi=1,gc(so))}}function ao(n,t,e){var i=new Xr;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}var $f=wa("start","end","cancel","interrupt"),Yf=[],_c=0,oo=1,aa=2,Fr=3,lo=4,oa=5,Or=6;function ts(n,t,e,i,r,s){var o=n.__transition;if(!o)n.__transition={};else if(e in o)return;jf(n,e,{name:t,index:i,group:r,on:$f,tween:Yf,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:_c})}function Da(n,t){var e=Ue(n,t);if(e.state>_c)throw new Error("too late; already scheduled");return e}function qe(n,t){var e=Ue(n,t);if(e.state>Fr)throw new Error("too late; already running");return e}function Ue(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function jf(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=La(s,0,e.time);function s(l){e.state=oo,e.timer.restart(o,e.delay,e.time),e.delay<=l&&o(l-e.delay)}function o(l){var u,h,f,m;if(e.state!==oo)return c();for(u in i)if(m=i[u],m.name===e.name){if(m.state===Fr)return ao(o);m.state===lo?(m.state=Or,m.timer.stop(),m.on.call("interrupt",n,n.__data__,m.index,m.group),delete i[u]):+u<t&&(m.state=Or,m.timer.stop(),m.on.call("cancel",n,n.__data__,m.index,m.group),delete i[u])}if(ao(function(){e.state===Fr&&(e.state=lo,e.timer.restart(a,e.delay,e.time),a(l))}),e.state=aa,e.on.call("start",n,n.__data__,e.index,e.group),e.state===aa){for(e.state=Fr,r=new Array(f=e.tween.length),u=0,h=-1;u<f;++u)(m=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++h]=m);r.length=h+1}}function a(l){for(var u=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=oa,1),h=-1,f=r.length;++h<f;)r[h].call(n,u);e.state===oa&&(e.on.call("end",n,n.__data__,e.index,e.group),c())}function c(){e.state=Or,e.timer.stop(),delete i[t];for(var l in i)return;delete n.__transition}}function Zf(n,t){var e=n.__transition,i,r,s=!0,o;if(!!e){t=t==null?null:t+"";for(o in e){if((i=e[o]).name!==t){s=!1;continue}r=i.state>aa&&i.state<oa,i.state=Or,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[o]}s&&delete n.__transition}}function Kf(n){return this.each(function(){Zf(this,n)})}function Jf(n,t){var e,i;return function(){var r=qe(this,n),s=r.tween;if(s!==e){i=e=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function Qf(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=qe(this,n),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:t,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}s.tween=r}}function td(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=Ue(this.node(),e).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((t==null?Jf:Qf)(e,n,t))}function Pa(n,t,e){var i=n._id;return n.each(function(){var r=qe(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Ue(r,i).value[t]}}function xc(n,t){var e;return(typeof t=="number"?Pe:t instanceof zn?Hr:(e=zn(t))?(t=e,Hr):hc)(n,t)}function ed(n){return function(){this.removeAttribute(n)}}function nd(n){return function(){this.removeAttributeNS(n.space,n.local)}}function id(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttribute(n);return o===r?null:o===i?s:s=t(i=o,e)}}function rd(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?s:s=t(i=o,e)}}function sd(n,t,e){var i,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttribute(n):(o=this.getAttribute(n),c=a+"",o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a)))}}function ad(n,t,e){var i,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),c=a+"",o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a)))}}function od(n,t){var e=Kr(n),i=e==="transform"?Vf:xc;return this.attrTween(n,typeof t=="function"?(e.local?ad:sd)(e,i,Pa(this,"attr."+n,t)):t==null?(e.local?nd:ed)(e):(e.local?rd:id)(e,i,t))}function ld(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function cd(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function ud(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&cd(n,s)),e}return r._value=t,r}function hd(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&ld(n,s)),e}return r._value=t,r}function fd(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=Kr(n);return this.tween(e,(i.local?ud:hd)(i,t))}function dd(n,t){return function(){Da(this,n).delay=+t.apply(this,arguments)}}function pd(n,t){return t=+t,function(){Da(this,n).delay=t}}function md(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?dd:pd)(t,n)):Ue(this.node(),t).delay}function gd(n,t){return function(){qe(this,n).duration=+t.apply(this,arguments)}}function _d(n,t){return t=+t,function(){qe(this,n).duration=t}}function xd(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?gd:_d)(t,n)):Ue(this.node(),t).duration}function vd(n,t){if(typeof t!="function")throw new Error;return function(){qe(this,n).ease=t}}function yd(n){var t=this._id;return arguments.length?this.each(vd(t,n)):Ue(this.node(),t).ease}function Md(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;qe(this,n).ease=e}}function bd(n){if(typeof n!="function")throw new Error;return this.each(Md(this._id,n))}function wd(n){typeof n!="function"&&(n=Jl(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],c,l=0;l<o;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&a.push(c);return new rn(i,this._parents,this._name,this._id)}function Sd(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var c=t[a],l=e[a],u=c.length,h=o[a]=new Array(u),f,m=0;m<u;++m)(f=c[m]||l[m])&&(h[m]=f);for(;a<i;++a)o[a]=t[a];return new rn(o,this._parents,this._name,this._id)}function Ed(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function Ad(n,t,e){var i,r,s=Ed(t)?Da:qe;return function(){var o=s(this,n),a=o.on;a!==i&&(r=(i=a).copy()).on(t,e),o.on=r}}function Td(n,t){var e=this._id;return arguments.length<2?Ue(this.node(),e).on.on(n):this.each(Ad(e,n,t))}function Cd(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function Ld(){return this.on("end.remove",Cd(this._id))}function Dd(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Sa(n));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],c=a.length,l=s[o]=new Array(c),u,h,f=0;f<c;++f)(u=a[f])&&(h=n.call(u,u.__data__,f,a))&&("__data__"in u&&(h.__data__=u.__data__),l[f]=h,ts(l[f],t,e,f,l,Ue(u,e)));return new rn(s,this._parents,t,e)}function Pd(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Kl(n));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var c=i[a],l=c.length,u,h=0;h<l;++h)if(u=c[h]){for(var f=n.call(u,u.__data__,h,c),m,g=Ue(u,e),p=0,d=f.length;p<d;++p)(m=f[p])&&ts(m,t,e,p,f,g);s.push(f),o.push(u)}return new rn(s,o,t,e)}var Rd=Ji.prototype.constructor;function Id(){return new Rd(this._groups,this._parents)}function Nd(n,t){var e,i,r;return function(){var s=yi(this,n),o=(this.style.removeProperty(n),yi(this,n));return s===o?null:s===e&&o===i?r:r=t(e=s,i=o)}}function vc(n){return function(){this.style.removeProperty(n)}}function Fd(n,t,e){var i,r=e+"",s;return function(){var o=yi(this,n);return o===r?null:o===i?s:s=t(i=o,e)}}function Od(n,t,e){var i,r,s;return function(){var o=yi(this,n),a=e(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(n),yi(this,n))),o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a))}}function zd(n,t){var e,i,r,s="style."+t,o="end."+s,a;return function(){var c=qe(this,n),l=c.on,u=c.value[s]==null?a||(a=vc(t)):void 0;(l!==e||r!==u)&&(i=(e=l).copy()).on(o,r=u),c.on=i}}function Ud(n,t,e){var i=(n+="")=="transform"?Gf:xc;return t==null?this.styleTween(n,Nd(n,i)).on("end.style."+n,vc(n)):typeof t=="function"?this.styleTween(n,Od(n,i,Pa(this,"style."+n,t))).each(zd(this._id,n)):this.styleTween(n,Fd(n,i,t),e).on("end.style."+n,null)}function Bd(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function kd(n,t,e){var i,r;function s(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&Bd(n,o,e)),i}return s._value=t,s}function Gd(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,kd(n,t,e==null?"":e))}function Vd(n){return function(){this.textContent=n}}function Hd(n){return function(){var t=n(this);this.textContent=t==null?"":t}}function Wd(n){return this.tween("text",typeof n=="function"?Hd(Pa(this,"text",n)):Vd(n==null?"":n+""))}function qd(n){return function(t){this.textContent=n.call(this,t)}}function Xd(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&qd(r)),t}return i._value=n,i}function $d(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Xd(n))}function Yd(){for(var n=this._name,t=this._id,e=yc(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=Ue(c,t);ts(c,n,e,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new rn(i,this._parents,n,e)}function jd(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,o){var a={value:o},c={value:function(){--r===0&&s()}};e.each(function(){var l=qe(this,i),u=l.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&s()})}var Zd=0;function rn(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function yc(){return++Zd}var $e=Ji.prototype;rn.prototype={constructor:rn,select:Dd,selectAll:Pd,selectChild:$e.selectChild,selectChildren:$e.selectChildren,filter:wd,merge:Sd,selection:Id,transition:Yd,call:$e.call,nodes:$e.nodes,node:$e.node,size:$e.size,empty:$e.empty,each:$e.each,on:Td,attr:od,attrTween:fd,style:Ud,styleTween:Gd,text:Wd,textTween:$d,remove:Ld,tween:td,delay:md,duration:xd,ease:yd,easeVarying:bd,end:jd,[Symbol.iterator]:$e[Symbol.iterator]};function Kd(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Jd={time:null,delay:0,duration:250,ease:Kd};function Qd(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function tp(n){var t,e;n instanceof rn?(t=n._id,n=n._name):(t=yc(),(e=Jd).time=Ca(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&ts(c,n,t,l,o,e||Qd(c,t));return new rn(i,this._parents,n,t)}Ji.prototype.interrupt=Kf;Ji.prototype.transition=tp;var co=Math.abs,Yn=Math.cos,jn=Math.sin,Mc=Math.PI,lr=Mc/2,uo=Mc*2,ho=Math.max,ds=1e-12;function ps(n,t){return Array.from({length:t-n},(e,i)=>n+i)}function ep(n){return function(t,e){return n(t.source.value+t.target.value,e.source.value+e.target.value)}}function np(){return ip(!1,!1)}function ip(n,t){var e=0,i=null,r=null,s=null;function o(a){var c=a.length,l=new Array(c),u=ps(0,c),h=new Array(c*c),f=new Array(c),m=0,g;a=Float64Array.from({length:c*c},t?(p,d)=>a[d%c][d/c|0]:(p,d)=>a[d/c|0][d%c]);for(let p=0;p<c;++p){let d=0;for(let _=0;_<c;++_)d+=a[p*c+_]+n*a[_*c+p];m+=l[p]=d}m=ho(0,uo-e*c)/m,g=m?e:uo/c;{let p=0;i&&u.sort((d,_)=>i(l[d],l[_]));for(const d of u){const _=p;if(n){const v=ps(~c+1,c).filter(y=>y<0?a[~y*c+d]:a[d*c+y]);r&&v.sort((y,x)=>r(y<0?-a[~y*c+d]:a[d*c+y],x<0?-a[~x*c+d]:a[d*c+x]));for(const y of v)if(y<0){const x=h[~y*c+d]||(h[~y*c+d]={source:null,target:null});x.target={index:d,startAngle:p,endAngle:p+=a[~y*c+d]*m,value:a[~y*c+d]}}else{const x=h[d*c+y]||(h[d*c+y]={source:null,target:null});x.source={index:d,startAngle:p,endAngle:p+=a[d*c+y]*m,value:a[d*c+y]}}f[d]={index:d,startAngle:_,endAngle:p,value:l[d]}}else{const v=ps(0,c).filter(y=>a[d*c+y]||a[y*c+d]);r&&v.sort((y,x)=>r(a[d*c+y],a[d*c+x]));for(const y of v){let x;if(d<y?(x=h[d*c+y]||(h[d*c+y]={source:null,target:null}),x.source={index:d,startAngle:p,endAngle:p+=a[d*c+y]*m,value:a[d*c+y]}):(x=h[y*c+d]||(h[y*c+d]={source:null,target:null}),x.target={index:d,startAngle:p,endAngle:p+=a[d*c+y]*m,value:a[d*c+y]},d===y&&(x.source=x.target)),x.source&&x.target&&x.source.value<x.target.value){const b=x.source;x.source=x.target,x.target=b}}f[d]={index:d,startAngle:_,endAngle:p,value:l[d]}}p+=g}}return h=Object.values(h),h.groups=f,s?h.sort(s):h}return o.padAngle=function(a){return arguments.length?(e=ho(0,a),o):e},o.sortGroups=function(a){return arguments.length?(i=a,o):i},o.sortSubgroups=function(a){return arguments.length?(r=a,o):r},o.sortChords=function(a){return arguments.length?(a==null?s=null:(s=ep(a))._=a,o):s&&s._},o}const la=Math.PI,ca=2*la,An=1e-6,rp=ca-An;function ua(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Ra(){return new ua}ua.prototype=Ra.prototype={constructor:ua,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,e,i){this._+="Q"+ +n+","+ +t+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(n,t,e,i,r,s){this._+="C"+ +n+","+ +t+","+ +e+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(n,t,e,i,r){n=+n,t=+t,e=+e,i=+i,r=+r;var s=this._x1,o=this._y1,a=e-n,c=i-t,l=s-n,u=o-t,h=l*l+u*u;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(h>An)if(!(Math.abs(u*a-c*l)>An)||!r)this._+="L"+(this._x1=n)+","+(this._y1=t);else{var f=e-s,m=i-o,g=a*a+c*c,p=f*f+m*m,d=Math.sqrt(g),_=Math.sqrt(h),v=r*Math.tan((la-Math.acos((g+h-p)/(2*d*_)))/2),y=v/_,x=v/d;Math.abs(y-1)>An&&(this._+="L"+(n+y*l)+","+(t+y*u)),this._+="A"+r+","+r+",0,0,"+ +(u*f>l*m)+","+(this._x1=n+x*a)+","+(this._y1=t+x*c)}},arc:function(n,t,e,i,r,s){n=+n,t=+t,e=+e,s=!!s;var o=e*Math.cos(i),a=e*Math.sin(i),c=n+o,l=t+a,u=1^s,h=s?i-r:r-i;if(e<0)throw new Error("negative radius: "+e);this._x1===null?this._+="M"+c+","+l:(Math.abs(this._x1-c)>An||Math.abs(this._y1-l)>An)&&(this._+="L"+c+","+l),e&&(h<0&&(h=h%ca+ca),h>rp?this._+="A"+e+","+e+",0,1,"+u+","+(n-o)+","+(t-a)+"A"+e+","+e+",0,1,"+u+","+(this._x1=c)+","+(this._y1=l):h>An&&(this._+="A"+e+","+e+",0,"+ +(h>=la)+","+u+","+(this._x1=n+e*Math.cos(r))+","+(this._y1=t+e*Math.sin(r))))},rect:function(n,t,e,i){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};var sp=Array.prototype.slice;function Mn(n){return function(){return n}}function ap(n){return n.source}function op(n){return n.target}function fo(n){return n.radius}function lp(n){return n.startAngle}function cp(n){return n.endAngle}function up(){return 0}function hp(n){var t=ap,e=op,i=fo,r=fo,s=lp,o=cp,a=up,c=null;function l(){var u,h=t.apply(this,arguments),f=e.apply(this,arguments),m=a.apply(this,arguments)/2,g=sp.call(arguments),p=+i.apply(this,(g[0]=h,g)),d=s.apply(this,g)-lr,_=o.apply(this,g)-lr,v=+r.apply(this,(g[0]=f,g)),y=s.apply(this,g)-lr,x=o.apply(this,g)-lr;if(c||(c=u=Ra()),m>ds&&(co(_-d)>m*2+ds?_>d?(d+=m,_-=m):(d-=m,_+=m):d=_=(d+_)/2,co(x-y)>m*2+ds?x>y?(y+=m,x-=m):(y-=m,x+=m):y=x=(y+x)/2),c.moveTo(p*Yn(d),p*jn(d)),c.arc(0,0,p,d,_),d!==y||_!==x)if(n){var b=+n.apply(this,arguments),L=v-b,I=(y+x)/2;c.quadraticCurveTo(0,0,L*Yn(y),L*jn(y)),c.lineTo(v*Yn(I),v*jn(I)),c.lineTo(L*Yn(x),L*jn(x))}else c.quadraticCurveTo(0,0,v*Yn(y),v*jn(y)),c.arc(0,0,v,y,x);if(c.quadraticCurveTo(0,0,p*Yn(d),p*jn(d)),c.closePath(),u)return c=null,u+""||null}return n&&(l.headRadius=function(u){return arguments.length?(n=typeof u=="function"?u:Mn(+u),l):n}),l.radius=function(u){return arguments.length?(i=r=typeof u=="function"?u:Mn(+u),l):i},l.sourceRadius=function(u){return arguments.length?(i=typeof u=="function"?u:Mn(+u),l):i},l.targetRadius=function(u){return arguments.length?(r=typeof u=="function"?u:Mn(+u),l):r},l.startAngle=function(u){return arguments.length?(s=typeof u=="function"?u:Mn(+u),l):s},l.endAngle=function(u){return arguments.length?(o=typeof u=="function"?u:Mn(+u),l):o},l.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:Mn(+u),l):a},l.source=function(u){return arguments.length?(t=u,l):t},l.target=function(u){return arguments.length?(e=u,l):e},l.context=function(u){return arguments.length?(c=u==null?null:u,l):c},l}function fp(){return hp()}function dp(n){const t=+this._x.call(null,n),e=+this._y.call(null,n);return bc(this.cover(t,e),t,e,n)}function bc(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var r,s=n._root,o={data:i},a=n._x0,c=n._y0,l=n._x1,u=n._y1,h,f,m,g,p,d,_,v;if(!s)return n._root=o,n;for(;s.length;)if((p=t>=(h=(a+l)/2))?a=h:l=h,(d=e>=(f=(c+u)/2))?c=f:u=f,r=s,!(s=s[_=d<<1|p]))return r[_]=o,n;if(m=+n._x.call(null,s.data),g=+n._y.call(null,s.data),t===m&&e===g)return o.next=s,r?r[_]=o:n._root=o,n;do r=r?r[_]=new Array(4):n._root=new Array(4),(p=t>=(h=(a+l)/2))?a=h:l=h,(d=e>=(f=(c+u)/2))?c=f:u=f;while((_=d<<1|p)===(v=(g>=f)<<1|m>=h));return r[v]=s,r[_]=o,n}function pp(n){var t,e,i=n.length,r,s,o=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,h=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,t=n[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<c&&(c=r),r>u&&(u=r),s<l&&(l=s),s>h&&(h=s));if(c>u||l>h)return this;for(this.cover(c,l).cover(u,h),e=0;e<i;++e)bc(this,o[e],a[e],n[e]);return this}function mp(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(n))+1,s=(i=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,c,l;e>n||n>=r||i>t||t>=s;)switch(l=(t<i)<<1|n<e,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:r=e+o,s=i+o;break;case 1:e=r-o,s=i+o;break;case 2:r=e+o,i=s-o;break;case 3:e=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=i,this._x1=r,this._y1=s,this}function gp(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function _p(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function re(n,t,e,i,r){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=r}function xp(n,t,e){var i,r=this._x0,s=this._y0,o,a,c,l,u=this._x1,h=this._y1,f=[],m=this._root,g,p;for(m&&f.push(new re(m,r,s,u,h)),e==null?e=1/0:(r=n-e,s=t-e,u=n+e,h=t+e,e*=e);g=f.pop();)if(!(!(m=g.node)||(o=g.x0)>u||(a=g.y0)>h||(c=g.x1)<r||(l=g.y1)<s))if(m.length){var d=(o+c)/2,_=(a+l)/2;f.push(new re(m[3],d,_,c,l),new re(m[2],o,_,d,l),new re(m[1],d,a,c,_),new re(m[0],o,a,d,_)),(p=(t>=_)<<1|n>=d)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-p],f[f.length-1-p]=g)}else{var v=n-+this._x.call(null,m.data),y=t-+this._y.call(null,m.data),x=v*v+y*y;if(x<e){var b=Math.sqrt(e=x);r=n-b,s=t-b,u=n+b,h=t+b,i=m.data}}return i}function vp(n){if(isNaN(u=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,h,f,m,g,p,d,_;if(!e)return this;if(e.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(p=h>=(m=(a+l)/2))?a=m:l=m,t=e,!(e=e[d=p<<1|g]))return this;if(!e.length)break;(t[d+1&3]||t[d+2&3]||t[d+3&3])&&(i=t,_=d)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[d]=s:delete t[d],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[_]=e:this._root=e),this):(this._root=s,this)}function yp(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function Mp(){return this._root}function bp(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function wp(n){var t=[],e,i=this._root,r,s,o,a,c;for(i&&t.push(new re(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.y0,a=e.x1,c=e.y1)&&i.length){var l=(s+a)/2,u=(o+c)/2;(r=i[3])&&t.push(new re(r,l,u,a,c)),(r=i[2])&&t.push(new re(r,s,u,l,c)),(r=i[1])&&t.push(new re(r,l,o,a,u)),(r=i[0])&&t.push(new re(r,s,o,l,u))}return this}function Sp(n){var t=[],e=[],i;for(this._root&&t.push(new re(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,h=(a+l)/2;(s=r[0])&&t.push(new re(s,o,a,u,h)),(s=r[1])&&t.push(new re(s,u,a,c,h)),(s=r[2])&&t.push(new re(s,o,h,u,l)),(s=r[3])&&t.push(new re(s,u,h,c,l))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Ep(n){return n[0]}function Ap(n){return arguments.length?(this._x=n,this):this._x}function Tp(n){return n[1]}function Cp(n){return arguments.length?(this._y=n,this):this._y}function Ia(n,t,e){var i=new Na(t==null?Ep:t,e==null?Tp:e,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Na(n,t,e,i,r,s){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function po(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var le=Ia.prototype=Na.prototype;le.copy=function(){var n=new Na(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=po(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(4)}):t.target[r]=po(i));return n};le.add=dp;le.addAll=pp;le.cover=mp;le.data=gp;le.extent=_p;le.find=xp;le.remove=vp;le.removeAll=yp;le.root=Mp;le.size=bp;le.visit=wp;le.visitAfter=Sp;le.x=Ap;le.y=Cp;function se(n){return function(){return n}}function gn(n){return(n()-.5)*1e-6}function Lp(n){return n.x+n.vx}function Dp(n){return n.y+n.vy}function Pp(n){var t,e,i,r=1,s=1;typeof n!="function"&&(n=se(n==null?1:+n));function o(){for(var l,u=t.length,h,f,m,g,p,d,_=0;_<s;++_)for(h=Ia(t,Lp,Dp).visitAfter(a),l=0;l<u;++l)f=t[l],p=e[f.index],d=p*p,m=f.x+f.vx,g=f.y+f.vy,h.visit(v);function v(y,x,b,L,I){var M=y.data,T=y.r,P=p+T;if(M){if(M.index>f.index){var D=m-M.x-M.vx,B=g-M.y-M.vy,C=D*D+B*B;C<P*P&&(D===0&&(D=gn(i),C+=D*D),B===0&&(B=gn(i),C+=B*B),C=(P-(C=Math.sqrt(C)))/C*r,f.vx+=(D*=C)*(P=(T*=T)/(d+T)),f.vy+=(B*=C)*P,M.vx-=D*(P=1-P),M.vy-=B*P)}return}return x>m+P||L<m-P||b>g+P||I<g-P}}function a(l){if(l.data)return l.r=e[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(!!t){var l,u=t.length,h;for(e=new Array(u),l=0;l<u;++l)h=t[l],e[h.index]=+n(h,l,t)}}return o.initialize=function(l,u){t=l,i=u,c()},o.iterations=function(l){return arguments.length?(s=+l,o):s},o.strength=function(l){return arguments.length?(r=+l,o):r},o.radius=function(l){return arguments.length?(n=typeof l=="function"?l:se(+l),c(),o):n},o}function Rp(n){return n.index}function mo(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Ip(n){var t=Rp,e=h,i,r=se(30),s,o,a,c,l,u=1;n==null&&(n=[]);function h(d){return 1/Math.min(a[d.source.index],a[d.target.index])}function f(d){for(var _=0,v=n.length;_<u;++_)for(var y=0,x,b,L,I,M,T,P;y<v;++y)x=n[y],b=x.source,L=x.target,I=L.x+L.vx-b.x-b.vx||gn(l),M=L.y+L.vy-b.y-b.vy||gn(l),T=Math.sqrt(I*I+M*M),T=(T-s[y])/T*d*i[y],I*=T,M*=T,L.vx-=I*(P=c[y]),L.vy-=M*P,b.vx+=I*(P=1-P),b.vy+=M*P}function m(){if(!!o){var d,_=o.length,v=n.length,y=new Map(o.map((b,L)=>[t(b,L,o),b])),x;for(d=0,a=new Array(_);d<v;++d)x=n[d],x.index=d,typeof x.source!="object"&&(x.source=mo(y,x.source)),typeof x.target!="object"&&(x.target=mo(y,x.target)),a[x.source.index]=(a[x.source.index]||0)+1,a[x.target.index]=(a[x.target.index]||0)+1;for(d=0,c=new Array(v);d<v;++d)x=n[d],c[d]=a[x.source.index]/(a[x.source.index]+a[x.target.index]);i=new Array(v),g(),s=new Array(v),p()}}function g(){if(!!o)for(var d=0,_=n.length;d<_;++d)i[d]=+e(n[d],d,n)}function p(){if(!!o)for(var d=0,_=n.length;d<_;++d)s[d]=+r(n[d],d,n)}return f.initialize=function(d,_){o=d,l=_,m()},f.links=function(d){return arguments.length?(n=d,m(),f):n},f.id=function(d){return arguments.length?(t=d,f):t},f.iterations=function(d){return arguments.length?(u=+d,f):u},f.strength=function(d){return arguments.length?(e=typeof d=="function"?d:se(+d),g(),f):e},f.distance=function(d){return arguments.length?(r=typeof d=="function"?d:se(+d),p(),f):r},f}const Np=1664525,Fp=1013904223,go=4294967296;function Op(){let n=1;return()=>(n=(Np*n+Fp)%go)/go}function zp(n){return n.x}function Up(n){return n.y}var Bp=10,kp=Math.PI*(3-Math.sqrt(5));function Gp(n){var t,e=1,i=.001,r=1-Math.pow(i,1/300),s=0,o=.6,a=new Map,c=La(h),l=wa("tick","end"),u=Op();n==null&&(n=[]);function h(){f(),l.call("tick",t),e<i&&(c.stop(),l.call("end",t))}function f(p){var d,_=n.length,v;p===void 0&&(p=1);for(var y=0;y<p;++y)for(e+=(s-e)*r,a.forEach(function(x){x(e)}),d=0;d<_;++d)v=n[d],v.fx==null?v.x+=v.vx*=o:(v.x=v.fx,v.vx=0),v.fy==null?v.y+=v.vy*=o:(v.y=v.fy,v.vy=0);return t}function m(){for(var p=0,d=n.length,_;p<d;++p){if(_=n[p],_.index=p,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),isNaN(_.x)||isNaN(_.y)){var v=Bp*Math.sqrt(.5+p),y=p*kp;_.x=v*Math.cos(y),_.y=v*Math.sin(y)}(isNaN(_.vx)||isNaN(_.vy))&&(_.vx=_.vy=0)}}function g(p){return p.initialize&&p.initialize(n,u),p}return m(),t={tick:f,restart:function(){return c.restart(h),t},stop:function(){return c.stop(),t},nodes:function(p){return arguments.length?(n=p,m(),a.forEach(g),t):n},alpha:function(p){return arguments.length?(e=+p,t):e},alphaMin:function(p){return arguments.length?(i=+p,t):i},alphaDecay:function(p){return arguments.length?(r=+p,t):+r},alphaTarget:function(p){return arguments.length?(s=+p,t):s},velocityDecay:function(p){return arguments.length?(o=1-p,t):1-o},randomSource:function(p){return arguments.length?(u=p,a.forEach(g),t):u},force:function(p,d){return arguments.length>1?(d==null?a.delete(p):a.set(p,g(d)),t):a.get(p)},find:function(p,d,_){var v=0,y=n.length,x,b,L,I,M;for(_==null?_=1/0:_*=_,v=0;v<y;++v)I=n[v],x=p-I.x,b=d-I.y,L=x*x+b*b,L<_&&(M=I,_=L);return M},on:function(p,d){return arguments.length>1?(l.on(p,d),t):l.on(p)}}}function Vp(){var n,t,e,i,r=se(-30),s,o=1,a=1/0,c=.81;function l(m){var g,p=n.length,d=Ia(n,zp,Up).visitAfter(h);for(i=m,g=0;g<p;++g)t=n[g],d.visit(f)}function u(){if(!!n){var m,g=n.length,p;for(s=new Array(g),m=0;m<g;++m)p=n[m],s[p.index]=+r(p,m,n)}}function h(m){var g=0,p,d,_=0,v,y,x;if(m.length){for(v=y=x=0;x<4;++x)(p=m[x])&&(d=Math.abs(p.value))&&(g+=p.value,_+=d,v+=d*p.x,y+=d*p.y);m.x=v/_,m.y=y/_}else{p=m,p.x=p.data.x,p.y=p.data.y;do g+=s[p.data.index];while(p=p.next)}m.value=g}function f(m,g,p,d){if(!m.value)return!0;var _=m.x-t.x,v=m.y-t.y,y=d-g,x=_*_+v*v;if(y*y/c<x)return x<a&&(_===0&&(_=gn(e),x+=_*_),v===0&&(v=gn(e),x+=v*v),x<o&&(x=Math.sqrt(o*x)),t.vx+=_*m.value*i/x,t.vy+=v*m.value*i/x),!0;if(m.length||x>=a)return;(m.data!==t||m.next)&&(_===0&&(_=gn(e),x+=_*_),v===0&&(v=gn(e),x+=v*v),x<o&&(x=Math.sqrt(o*x)));do m.data!==t&&(y=s[m.data.index]*i/x,t.vx+=_*y,t.vy+=v*y);while(m=m.next)}return l.initialize=function(m,g){n=m,e=g,u()},l.strength=function(m){return arguments.length?(r=typeof m=="function"?m:se(+m),u(),l):r},l.distanceMin=function(m){return arguments.length?(o=m*m,l):Math.sqrt(o)},l.distanceMax=function(m){return arguments.length?(a=m*m,l):Math.sqrt(a)},l.theta=function(m){return arguments.length?(c=m*m,l):Math.sqrt(c)},l}function Hp(n){var t=se(.1),e,i,r;typeof n!="function"&&(n=se(n==null?0:+n));function s(a){for(var c=0,l=e.length,u;c<l;++c)u=e[c],u.vx+=(r[c]-u.x)*i[c]*a}function o(){if(!!e){var a,c=e.length;for(i=new Array(c),r=new Array(c),a=0;a<c;++a)i[a]=isNaN(r[a]=+n(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:se(+a),o(),s):t},s.x=function(a){return arguments.length?(n=typeof a=="function"?a:se(+a),o(),s):n},s}function Wp(n){var t=se(.1),e,i,r;typeof n!="function"&&(n=se(n==null?0:+n));function s(a){for(var c=0,l=e.length,u;c<l;++c)u=e[c],u.vy+=(r[c]-u.y)*i[c]*a}function o(){if(!!e){var a,c=e.length;for(i=new Array(c),r=new Array(c),a=0;a<c;++a)i[a]=isNaN(r[a]=+n(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:se(+a),o(),s):t},s.y=function(a){return arguments.length?(n=typeof a=="function"?a:se(+a),o(),s):n},s}function qp(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function $r(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,i=n.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]}function bi(n){return n=$r(Math.abs(n)),n?n[1]:NaN}function Xp(n,t){return function(e,i){for(var r=e.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(e.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(t)}}function $p(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var Yp=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yr(n){if(!(t=Yp.exec(n)))throw new Error("invalid format: "+n);var t;return new Fa({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Yr.prototype=Fa.prototype;function Fa(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Fa.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function jp(n){t:for(var t=n.length,e=1,i=-1,r;e<t;++e)switch(n[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+n[e])break t;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var wc;function Zp(n,t){var e=$r(n,t);if(!e)return n+"";var i=e[0],r=e[1],s=r-(wc=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+$r(n,Math.max(0,t+s-1))[0]}function _o(n,t){var e=$r(n,t);if(!e)return n+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const xo={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:qp,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>_o(n*100,t),r:_o,s:Zp,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function vo(n){return n}var yo=Array.prototype.map,Mo=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Kp(n){var t=n.grouping===void 0||n.thousands===void 0?vo:Xp(yo.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?vo:$p(yo.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"\u2212":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(h){h=Yr(h);var f=h.fill,m=h.align,g=h.sign,p=h.symbol,d=h.zero,_=h.width,v=h.comma,y=h.precision,x=h.trim,b=h.type;b==="n"?(v=!0,b="g"):xo[b]||(y===void 0&&(y=12),x=!0,b="g"),(d||f==="0"&&m==="=")&&(d=!0,f="0",m="=");var L=p==="$"?e:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",I=p==="$"?i:/[%p]/.test(b)?o:"",M=xo[b],T=/[defgprs%]/.test(b);y=y===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function P(D){var B=L,C=I,R,F,N;if(b==="c")C=M(D)+C,D="";else{D=+D;var V=D<0||1/D<0;if(D=isNaN(D)?c:M(Math.abs(D),y),x&&(D=jp(D)),V&&+D==0&&g!=="+"&&(V=!1),B=(V?g==="("?g:a:g==="-"||g==="("?"":g)+B,C=(b==="s"?Mo[8+wc/3]:"")+C+(V&&g==="("?")":""),T){for(R=-1,F=D.length;++R<F;)if(N=D.charCodeAt(R),48>N||N>57){C=(N===46?r+D.slice(R+1):D.slice(R))+C,D=D.slice(0,R);break}}}v&&!d&&(D=t(D,1/0));var H=B.length+D.length+C.length,O=H<_?new Array(_-H+1).join(f):"";switch(v&&d&&(D=t(O+D,O.length?_-C.length:1/0),O=""),m){case"<":D=B+D+C+O;break;case"=":D=B+O+D+C;break;case"^":D=O.slice(0,H=O.length>>1)+B+D+C+O.slice(H);break;default:D=O+B+D+C;break}return s(D)}return P.toString=function(){return h+""},P}function u(h,f){var m=l((h=Yr(h),h.type="f",h)),g=Math.max(-8,Math.min(8,Math.floor(bi(f)/3)))*3,p=Math.pow(10,-g),d=Mo[8+g/3];return function(_){return m(p*_)+d}}return{format:l,formatPrefix:u}}var cr,Sc,Ec;Jp({thousands:",",grouping:[3],currency:["$",""]});function Jp(n){return cr=Kp(n),Sc=cr.format,Ec=cr.formatPrefix,cr}function Qp(n){return Math.max(0,-bi(Math.abs(n)))}function tm(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bi(t)/3)))*3-bi(Math.abs(n)))}function em(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,bi(t)-bi(n))+1}function Oa(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function nm(n,t){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const bo=Symbol("implicit");function es(){var n=new qa,t=[],e=[],i=bo;function r(s){let o=n.get(s);if(o===void 0){if(i!==bo)return i;n.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],n=new qa;for(const o of s)n.has(o)||n.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return es(t,e).unknown(i)},Oa.apply(r,arguments),r}function za(){var n=es().unknown(void 0),t=n.domain,e=n.range,i=0,r=1,s,o,a=!1,c=0,l=0,u=.5;delete n.unknown;function h(){var f=t().length,m=r<i,g=m?r:i,p=m?i:r;s=(p-g)/Math.max(1,f-c+l*2),a&&(s=Math.floor(s)),g+=(p-g-s*(f-c))*u,o=s*(1-c),a&&(g=Math.round(g),o=Math.round(o));var d=bu(f).map(function(_){return g+s*_});return e(m?d.reverse():d)}return n.domain=function(f){return arguments.length?(t(f),h()):t()},n.range=function(f){return arguments.length?([i,r]=f,i=+i,r=+r,h()):[i,r]},n.rangeRound=function(f){return[i,r]=f,i=+i,r=+r,a=!0,h()},n.bandwidth=function(){return o},n.step=function(){return s},n.round=function(f){return arguments.length?(a=!!f,h()):a},n.padding=function(f){return arguments.length?(c=Math.min(1,l=+f),h()):c},n.paddingInner=function(f){return arguments.length?(c=Math.min(1,f),h()):c},n.paddingOuter=function(f){return arguments.length?(l=+f,h()):l},n.align=function(f){return arguments.length?(u=Math.max(0,Math.min(1,f)),h()):u},n.copy=function(){return za(t(),[i,r]).round(a).paddingInner(c).paddingOuter(l).align(u)},Oa.apply(h(),arguments)}function im(n){return function(){return n}}function rm(n){return+n}var wo=[0,1];function _n(n){return n}function ha(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:im(isNaN(t)?NaN:.5)}function sm(n,t){var e;return n>t&&(e=n,n=t,t=e),function(i){return Math.max(n,Math.min(t,i))}}function am(n,t,e){var i=n[0],r=n[1],s=t[0],o=t[1];return r<i?(i=ha(r,i),s=e(o,s)):(i=ha(i,r),s=e(s,o)),function(a){return s(i(a))}}function om(n,t,e){var i=Math.min(n.length,t.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<i;)r[o]=ha(n[o],n[o+1]),s[o]=e(t[o],t[o+1]);return function(a){var c=pu(n,a,1,i)-1;return s[c](r[c](a))}}function lm(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function cm(){var n=wo,t=wo,e=Jr,i,r,s,o=_n,a,c,l;function u(){var f=Math.min(n.length,t.length);return o!==_n&&(o=sm(n[0],n[f-1])),a=f>2?om:am,c=l=null,h}function h(f){return f==null||isNaN(f=+f)?s:(c||(c=a(n.map(i),t,e)))(i(o(f)))}return h.invert=function(f){return o(r((l||(l=a(t,n.map(i),Pe)))(f)))},h.domain=function(f){return arguments.length?(n=Array.from(f,rm),u()):n.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),u()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),e=fc,u()},h.clamp=function(f){return arguments.length?(o=f?!0:_n,u()):o!==_n},h.interpolate=function(f){return arguments.length?(e=f,u()):e},h.unknown=function(f){return arguments.length?(s=f,h):s},function(f,m){return i=f,r=m,u()}}function um(){return cm()(_n,_n)}function hm(n,t,e,i){var r=yu(n,t,e),s;switch(i=Yr(i==null?",f":i),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(t));return i.precision==null&&!isNaN(s=tm(r,o))&&(i.precision=s),Ec(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=em(r,Math.max(Math.abs(n),Math.abs(t))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=Qp(r))&&(i.precision=s-(i.type==="%")*2);break}}return Sc(i)}function Ac(n){var t=n.domain;return n.ticks=function(e){var i=t();return vu(i[0],i[i.length-1],e==null?10:e)},n.tickFormat=function(e,i){var r=t();return hm(r[0],r[r.length-1],e==null?10:e,i)},n.nice=function(e){e==null&&(e=10);var i=t(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,u=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);u-- >0;){if(l=Yl(o,a,e),l===c)return i[r]=o,i[s]=a,t(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function Yi(){var n=um();return n.copy=function(){return lm(n,Yi())},Oa.apply(n,arguments),Ac(n)}function fm(){var n=0,t=1,e,i,r,s,o=_n,a=!1,c;function l(h){return h==null||isNaN(h=+h)?c:o(r===0?.5:(h=(s(h)-e)*r,a?Math.max(0,Math.min(1,h)):h))}l.domain=function(h){return arguments.length?([n,t]=h,e=s(n=+n),i=s(t=+t),r=e===i?0:1/(i-e),l):[n,t]},l.clamp=function(h){return arguments.length?(a=!!h,l):a},l.interpolator=function(h){return arguments.length?(o=h,l):o};function u(h){return function(f){var m,g;return arguments.length?([m,g]=f,o=h(m,g),l):[o(0),o(1)]}}return l.range=u(Jr),l.rangeRound=u(fc),l.unknown=function(h){return arguments.length?(c=h,l):c},function(h){return s=h,e=h(n),i=h(t),r=e===i?0:1/(i-e),l}}function dm(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function Ua(){var n=Ac(fm()(_n));return n.copy=function(){return dm(n,Ua())},nm.apply(n,arguments)}function Tc(n){for(var t=n.length/6|0,e=new Array(t),i=0;i<t;)e[i]="#"+n.slice(i*6,++i*6);return e}const Cc=Tc("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),pm=n=>Pf(n[n.length-1]);var mm=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Tc);const gm=pm(mm);function on(n){return function(){return n}}const So=Math.abs,te=Math.atan2,bn=Math.cos,_m=Math.max,ms=Math.min,ke=Math.sin,di=Math.sqrt,ce=1e-12,ji=Math.PI,jr=ji/2,xm=2*ji;function vm(n){return n>1?0:n<-1?ji:Math.acos(n)}function Eo(n){return n>=1?jr:n<=-1?-jr:Math.asin(n)}function ym(n){return n.innerRadius}function Mm(n){return n.outerRadius}function bm(n){return n.startAngle}function wm(n){return n.endAngle}function Sm(n){return n&&n.padAngle}function Em(n,t,e,i,r,s,o,a){var c=e-n,l=i-t,u=o-r,h=a-s,f=h*c-u*l;if(!(f*f<ce))return f=(u*(t-s)-h*(n-r))/f,[n+f*c,t+f*l]}function ur(n,t,e,i,r,s,o){var a=n-e,c=t-i,l=(o?s:-s)/di(a*a+c*c),u=l*c,h=-l*a,f=n+u,m=t+h,g=e+u,p=i+h,d=(f+g)/2,_=(m+p)/2,v=g-f,y=p-m,x=v*v+y*y,b=r-s,L=f*p-g*m,I=(y<0?-1:1)*di(_m(0,b*b*x-L*L)),M=(L*y-v*I)/x,T=(-L*v-y*I)/x,P=(L*y+v*I)/x,D=(-L*v+y*I)/x,B=M-d,C=T-_,R=P-d,F=D-_;return B*B+C*C>R*R+F*F&&(M=P,T=D),{cx:M,cy:T,x01:-u,y01:-h,x11:M*(r/b-1),y11:T*(r/b-1)}}function zr(){var n=ym,t=Mm,e=on(0),i=null,r=bm,s=wm,o=Sm,a=null;function c(){var l,u,h=+n.apply(this,arguments),f=+t.apply(this,arguments),m=r.apply(this,arguments)-jr,g=s.apply(this,arguments)-jr,p=So(g-m),d=g>m;if(a||(a=l=Ra()),f<h&&(u=f,f=h,h=u),!(f>ce))a.moveTo(0,0);else if(p>xm-ce)a.moveTo(f*bn(m),f*ke(m)),a.arc(0,0,f,m,g,!d),h>ce&&(a.moveTo(h*bn(g),h*ke(g)),a.arc(0,0,h,g,m,d));else{var _=m,v=g,y=m,x=g,b=p,L=p,I=o.apply(this,arguments)/2,M=I>ce&&(i?+i.apply(this,arguments):di(h*h+f*f)),T=ms(So(f-h)/2,+e.apply(this,arguments)),P=T,D=T,B,C;if(M>ce){var R=Eo(M/h*ke(I)),F=Eo(M/f*ke(I));(b-=R*2)>ce?(R*=d?1:-1,y+=R,x-=R):(b=0,y=x=(m+g)/2),(L-=F*2)>ce?(F*=d?1:-1,_+=F,v-=F):(L=0,_=v=(m+g)/2)}var N=f*bn(_),V=f*ke(_),H=h*bn(x),O=h*ke(x);if(T>ce){var W=f*bn(v),tt=f*ke(v),J=h*bn(y),it=h*ke(y),ot;if(p<ji&&(ot=Em(N,V,J,it,W,tt,H,O))){var gt=N-ot[0],Y=V-ot[1],Ct=W-ot[0],dt=tt-ot[1],_t=1/ke(vm((gt*Ct+Y*dt)/(di(gt*gt+Y*Y)*di(Ct*Ct+dt*dt)))/2),ht=di(ot[0]*ot[0]+ot[1]*ot[1]);P=ms(T,(h-ht)/(_t-1)),D=ms(T,(f-ht)/(_t+1))}}L>ce?D>ce?(B=ur(J,it,N,V,f,D,d),C=ur(W,tt,H,O,f,D,d),a.moveTo(B.cx+B.x01,B.cy+B.y01),D<T?a.arc(B.cx,B.cy,D,te(B.y01,B.x01),te(C.y01,C.x01),!d):(a.arc(B.cx,B.cy,D,te(B.y01,B.x01),te(B.y11,B.x11),!d),a.arc(0,0,f,te(B.cy+B.y11,B.cx+B.x11),te(C.cy+C.y11,C.cx+C.x11),!d),a.arc(C.cx,C.cy,D,te(C.y11,C.x11),te(C.y01,C.x01),!d))):(a.moveTo(N,V),a.arc(0,0,f,_,v,!d)):a.moveTo(N,V),!(h>ce)||!(b>ce)?a.lineTo(H,O):P>ce?(B=ur(H,O,W,tt,h,-P,d),C=ur(N,V,J,it,h,-P,d),a.lineTo(B.cx+B.x01,B.cy+B.y01),P<T?a.arc(B.cx,B.cy,P,te(B.y01,B.x01),te(C.y01,C.x01),!d):(a.arc(B.cx,B.cy,P,te(B.y01,B.x01),te(B.y11,B.x11),!d),a.arc(0,0,h,te(B.cy+B.y11,B.cx+B.x11),te(C.cy+C.y11,C.cx+C.x11),d),a.arc(C.cx,C.cy,P,te(C.y11,C.x11),te(C.y01,C.x01),!d))):a.arc(0,0,h,x,y,d)}if(a.closePath(),l)return a=null,l+""||null}return c.centroid=function(){var l=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,u=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-ji/2;return[bn(u)*l,ke(u)*l]},c.innerRadius=function(l){return arguments.length?(n=typeof l=="function"?l:on(+l),c):n},c.outerRadius=function(l){return arguments.length?(t=typeof l=="function"?l:on(+l),c):t},c.cornerRadius=function(l){return arguments.length?(e=typeof l=="function"?l:on(+l),c):e},c.padRadius=function(l){return arguments.length?(i=l==null?null:typeof l=="function"?l:on(+l),c):i},c.startAngle=function(l){return arguments.length?(r=typeof l=="function"?l:on(+l),c):r},c.endAngle=function(l){return arguments.length?(s=typeof l=="function"?l:on(+l),c):s},c.padAngle=function(l){return arguments.length?(o=typeof l=="function"?l:on(+l),c):o},c.context=function(l){return arguments.length?(a=l==null?null:l,c):a},c}function pi(n,t,e){this.k=n,this.x=t,this.y=e}pi.prototype={constructor:pi,scale:function(n){return n===1?this:new pi(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new pi(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new pi(1,0,0);pi.prototype;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="143",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Am=0,Ao=1,Tm=2,Lc=1,Cm=2,Bi=3,Zi=0,Ne=1,wi=2,Lm=1,vn=0,_i=1,To=2,Co=3,Lo=4,Dm=5,fi=100,Pm=101,Rm=102,Do=103,Po=104,Im=200,Nm=201,Fm=202,Om=203,Dc=204,Pc=205,zm=206,Um=207,Bm=208,km=209,Gm=210,Vm=0,Hm=1,Wm=2,fa=3,qm=4,Xm=5,$m=6,Ym=7,Rc=0,jm=1,Zm=2,nn=0,Km=1,Jm=2,Qm=3,tg=4,eg=5,Ic=300,Si=301,Ei=302,da=303,pa=304,ns=306,ma=1e3,Ie=1001,ga=1002,ue=1003,Ro=1004,Io=1005,Se=1006,ng=1007,is=1008,Bn=1009,ig=1010,rg=1011,Nc=1012,sg=1013,Pn=1014,Rn=1015,Ki=1016,ag=1017,og=1018,xi=1020,lg=1021,cg=1022,Ve=1023,ug=1024,hg=1025,Fn=1026,Ai=1027,fg=1028,dg=1029,pg=1030,mg=1031,gg=1033,gs=33776,_s=33777,xs=33778,vs=33779,No=35840,Fo=35841,Oo=35842,zo=35843,_g=36196,Uo=37492,Bo=37496,ko=37808,Go=37809,Vo=37810,Ho=37811,Wo=37812,qo=37813,Xo=37814,$o=37815,Yo=37816,jo=37817,Zo=37818,Ko=37819,Jo=37820,Qo=37821,tl=36492,kn=3e3,Gt=3001,xg=3200,vg=3201,yg=0,Mg=1,Qe="srgb",In="srgb-linear",ys=7680,bg=519,el=35044,wg=35048,nl="300 es",_a=1035;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,il=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ee[n&255]+ee[n>>8&255]+ee[n>>16&255]+ee[n>>24&255]+"-"+ee[t&255]+ee[t>>8&255]+"-"+ee[t>>16&15|64]+ee[t>>24&255]+"-"+ee[e&63|128]+ee[e>>8&255]+"-"+ee[e>>16&255]+ee[e>>24&255]+ee[i&255]+ee[i>>8&255]+ee[i>>16&255]+ee[i>>24&255]).toLowerCase()}function he(n,t,e){return Math.max(t,Math.min(e,n))}function Sg(n,t){return(n%t+t)%t}function bs(n,t,e){return(1-e)*n+e*t}function rl(n){return(n&n-1)===0&&n!==0}function xa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],v=r[1],y=r[4],x=r[7],b=r[2],L=r[5],I=r[8];return s[0]=o*p+a*v+c*b,s[3]=o*d+a*y+c*L,s[6]=o*_+a*x+c*I,s[1]=l*p+u*v+h*b,s[4]=l*d+u*y+h*L,s[7]=l*_+u*x+h*I,s[2]=f*p+m*v+g*b,s[5]=f*d+m*y+g*L,s[8]=f*_+m*x+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=e*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(r*l-u*i)*p,t[2]=(a*i-r*o)*p,t[3]=f*p,t[4]=(u*e-r*c)*p,t[5]=(r*s-a*e)*p,t[6]=m*p,t[7]=(i*c-l*e)*p,t[8]=(o*e-i*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=e*s+i*c,r[3]=e*o+i*l,r[6]=e*a+i*u,r[1]=-i*s+e*c,r[4]=-i*o+e*l,r[7]=-i*a+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Fc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ws={[Qe]:{[In]:On},[In]:{[Qe]:Ur}},Te={legacyMode:!0,get workingColorSpace(){return In},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.legacyMode||t===e||!t||!e)return n;if(ws[t]&&ws[t][e]!==void 0){const i=ws[t][e];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={r:0,g:0,b:0},Ce={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ss(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function fr(n,t){return t.r=n.r,t.g=n.g,t.b=n.b,t}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=In){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=In){if(t=Sg(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ss(o,s,t+1/3),this.g=Ss(o,s,t),this.b=Ss(o,s,t-1/3)}return Te.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Te.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Te.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(c,l,u,e)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Te.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Te.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Qe){const i=Oc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Te.fromWorkingColorSpace(fr(this,Yt),t),he(Yt.r*255,0,255)<<16^he(Yt.g*255,0,255)<<8^he(Yt.b*255,0,255)<<0}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=In){Te.fromWorkingColorSpace(fr(this,Yt),e);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=In){return Te.fromWorkingColorSpace(fr(this,Yt),e),t.r=Yt.r,t.g=Yt.g,t.b=Yt.b,t}getStyle(t=Qe){return Te.fromWorkingColorSpace(fr(this,Yt),t),t!==Qe?`color(${t} ${Yt.r} ${Yt.g} ${Yt.b})`:`rgb(${Yt.r*255|0},${Yt.g*255|0},${Yt.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Ce),Ce.h+=t,Ce.s+=e,Ce.l+=i,this.setHSL(Ce.h,Ce.s,Ce.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ce),t.getHSL(hr);const i=bs(Ce.h,hr.h,e),r=bs(Ce.s,hr.s,e),s=bs(Ce.l,hr.l,e);return this.setHSL(i,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}zt.NAMES=Oc;let Jn;class zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Zr("canvas")),Jn.width=t.width,Jn.height=t.height;const i=Jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=On(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Uc{constructor(t=null){this.isSource=!0,this.uuid=tr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Es(r[o].image)):s.push(Es(r[o]))}else s=Es(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Es(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class Oe extends Wn{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=Ie,r=Ie,s=Se,o=is,a=Ve,c=Bn,l=1,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=tr(),this.name="",this.source=new Uc(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case Ie:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case Ie:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ic;class Jt{constructor(t=0,e=0,i=0,r=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(m+1)/2,b=(_+1)/2,L=(u+f)/4,I=(h+p)/4,M=(g+d)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=I/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=I/s,r=M/s),this.set(i,r,s,e),this}let v=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(h-p)/v,this.z=(f-u)/v,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gn extends Wn{constructor(t,e,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const r={width:t,height:e,depth:1};this.texture=new Oe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Se,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bc extends Oe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends Oe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(h!==p||c!==f||l!==m||u!==g){let d=1-a;const _=c*f+l*m+u*g+h*p,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),L=Math.atan2(b,_*v);d=Math.sin(d*L)/b,a=Math.sin(a*L)/b}const x=a*v;if(c=c*d+f*x,l=l*d+m*x,u=u*d+g*x,h=h*d+p*x,d===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-a*m,t[e+2]=l*g+u*m+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*r-a*i,u=c*i+a*e-s*r,h=c*r+s*i-o*e,f=-s*e-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new U,sl=new Vn;class er{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)wn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(wn)}else i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox),Ts.applyMatrix4(t.matrixWorld),this.union(Ts);const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),dr.subVectors(this.max,Ii),Qn.subVectors(t.a,Ii),ti.subVectors(t.b,Ii),ei.subVectors(t.c,Ii),ln.subVectors(ti,Qn),cn.subVectors(ei,ti),Sn.subVectors(Qn,ei);let e=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!Cs(e,Qn,ti,ei,dr)||(e=[1,0,0,0,1,0,0,0,1],!Cs(e,Qn,ti,ei,dr))?!1:(pr.crossVectors(ln,cn),e=[pr.x,pr.y,pr.z],Cs(e,Qn,ti,ei,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return wn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ye=[new U,new U,new U,new U,new U,new U,new U,new U],wn=new U,Ts=new er,Qn=new U,ti=new U,ei=new U,ln=new U,cn=new U,Sn=new U,Ii=new U,dr=new U,pr=new U,En=new U;function Cs(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){En.fromArray(n,s);const a=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),c=t.dot(En),l=e.dot(En),u=i.dot(En);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Tg=new er,al=new U,mr=new U,Ls=new U;class nr{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Tg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.add(Ls.multiplyScalar(r/i)),this.radius+=r}return this}union(t){return this.center.equals(t.center)===!0?mr.set(0,0,1).multiplyScalar(t.radius):mr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(al.copy(t.center).add(mr)),this.expandByPoint(al.copy(t.center).sub(mr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new U,Ds=new U,gr=new U,un=new U,Ps=new U,_r=new U,Rs=new U;class ka{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.direction).multiplyScalar(e).add(this.origin),je.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ds.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Ds);const s=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=un.dot(this.direction),c=-un.dot(gr),l=un.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(gr).multiplyScalar(f).add(Ds),m}intersectSphere(t,e){je.subVectors(t.center,this.origin);const i=je.dot(this.direction),r=je.dot(je)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,i,r,s){Ps.subVectors(e,t),_r.subVectors(i,t),Rs.crossVectors(Ps,_r);let o=this.direction.dot(Rs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,t);const c=a*this.direction.dot(_r.crossVectors(un,_r));if(c<0)return null;const l=a*this.direction.dot(Ps.cross(un));if(l<0||c+l>o)return null;const u=-a*un.dot(Rs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,r,s,o,a,c,l,u,h,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ni.setFromMatrixColumn(t,0).length(),s=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-p*l,e[9]=-a*c,e[2]=p-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f-p*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=p-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+p,e[1]=c*h,e[5]=p*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=p-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-p*h}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+p,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Lg)}lookAt(t,e,i){const r=this.elements;return ge.subVectors(t,e),ge.lengthSq()===0&&(ge.z=1),ge.normalize(),hn.crossVectors(i,ge),hn.lengthSq()===0&&(Math.abs(i.z)===1?ge.x+=1e-4:ge.z+=1e-4,ge.normalize(),hn.crossVectors(i,ge)),hn.normalize(),xr.crossVectors(ge,hn),r[0]=hn.x,r[4]=xr.x,r[8]=ge.x,r[1]=hn.y,r[5]=xr.y,r[9]=ge.y,r[2]=hn.z,r[6]=xr.z,r[10]=ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],v=i[3],y=i[7],x=i[11],b=i[15],L=r[0],I=r[4],M=r[8],T=r[12],P=r[1],D=r[5],B=r[9],C=r[13],R=r[2],F=r[6],N=r[10],V=r[14],H=r[3],O=r[7],W=r[11],tt=r[15];return s[0]=o*L+a*P+c*R+l*H,s[4]=o*I+a*D+c*F+l*O,s[8]=o*M+a*B+c*N+l*W,s[12]=o*T+a*C+c*V+l*tt,s[1]=u*L+h*P+f*R+m*H,s[5]=u*I+h*D+f*F+m*O,s[9]=u*M+h*B+f*N+m*W,s[13]=u*T+h*C+f*V+m*tt,s[2]=g*L+p*P+d*R+_*H,s[6]=g*I+p*D+d*F+_*O,s[10]=g*M+p*B+d*N+_*W,s[14]=g*T+p*C+d*V+_*tt,s[3]=v*L+y*P+x*R+b*H,s[7]=v*I+y*D+x*F+b*O,s[11]=v*M+y*B+x*N+b*W,s[15]=v*T+y*C+x*V+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*m-i*c*m)+p*(+e*c*m-e*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+d*(+e*l*h-e*a*m-s*o*h+i*o*m+s*a*u-i*l*u)+_*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],v=h*d*l-p*f*l+p*c*m-a*d*m-h*c*_+a*f*_,y=g*f*l-u*d*l-g*c*m+o*d*m+u*c*_-o*f*_,x=u*p*l-g*h*l+g*a*m-o*p*m-u*a*_+o*h*_,b=g*h*c-u*p*c-g*a*f+o*p*f+u*a*d-o*h*d,L=e*v+i*y+r*x+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=v*I,t[1]=(p*f*s-h*d*s-p*r*m+i*d*m+h*r*_-i*f*_)*I,t[2]=(a*d*s-p*c*s+p*r*l-i*d*l-a*r*_+i*c*_)*I,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*m-i*c*m)*I,t[4]=y*I,t[5]=(u*d*s-g*f*s+g*r*m-e*d*m-u*r*_+e*f*_)*I,t[6]=(g*c*s-o*d*s-g*r*l+e*d*l+o*r*_-e*c*_)*I,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*m+e*c*m)*I,t[8]=x*I,t[9]=(g*h*s-u*p*s-g*i*m+e*p*m+u*i*_-e*h*_)*I,t[10]=(o*p*s-g*a*s+g*i*l-e*p*l-o*i*_+e*a*_)*I,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*m-e*a*m)*I,t[12]=b*I,t[13]=(u*p*r-g*h*r+g*i*f-e*p*f-u*i*d+e*h*d)*I,t[14]=(g*a*r-o*p*r-g*i*c+e*p*c+o*i*d-e*a*d)*I,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*I,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,g=s*h,p=o*u,d=o*h,_=a*h,v=c*l,y=c*u,x=c*h,b=i.x,L=i.y,I=i.z;return r[0]=(1-(p+_))*b,r[1]=(m+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(m-x)*L,r[5]=(1-(f+_))*L,r[6]=(d+v)*L,r[7]=0,r[8]=(g+y)*I,r[9]=(d-v)*I,r[10]=(1-(f+p))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const o=ni.set(r[4],r[5],r[6]).length(),a=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Le.copy(this);const l=1/s,u=1/o,h=1/a;return Le.elements[0]*=l,Le.elements[1]*=l,Le.elements[2]*=l,Le.elements[4]*=u,Le.elements[5]*=u,Le.elements[6]*=u,Le.elements[8]*=h,Le.elements[9]*=h,Le.elements[10]*=h,e.setFromRotationMatrix(Le),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(i-r),u=(e+t)/(e-t),h=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,r,s,o){const a=this.elements,c=1/(e-t),l=1/(i-r),u=1/(o-s),h=(e+t)*c,f=(i+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ni=new U,Le=new jt,Cg=new U(0,0,0),Lg=new U(1,1,1),hn=new U,xr=new U,ge=new U,ol=new jt,ll=new Vn;class ir{constructor(t=0,e=0,i=0,r=ir.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ir.DefaultOrder="XYZ";ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dg=0;const cl=new U,ii=new Vn,Ze=new jt,vr=new U,Ni=new U,Pg=new U,Rg=new Vn,ul=new U(1,0,0),hl=new U(0,1,0),fl=new U(0,0,1),Ig={type:"added"},dl={type:"removed"};class ve extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DefaultUp.clone();const t=new U,e=new ir,i=new Vn,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ae}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(ul,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(fl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ul,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(fl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(Ni,vr,this.up):Ze.lookAt(vr,Ni,this.up),this.quaternion.setFromRotationMatrix(Ze),r&&(Ze.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(Ze),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ig)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(dl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ve.DefaultUp=new U(0,1,0);ve.DefaultMatrixAutoUpdate=!0;const De=new U,Ke=new U,Is=new U,Je=new U,ri=new U,si=new U,pl=new U,Ns=new U,Fs=new U,Os=new U;class tn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),De.subVectors(t,e),r.cross(De);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){De.subVectors(r,e),Ke.subVectors(i,e),Is.subVectors(t,e);const o=De.dot(De),a=De.dot(Ke),c=De.dot(Is),l=Ke.dot(Ke),u=Ke.dot(Is),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Je),Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getUV(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Je),c.set(0,0),c.addScaledVector(s,Je.x),c.addScaledVector(o,Je.y),c.addScaledVector(a,Je.z),c}static isFrontFacing(t,e,i,r){return De.subVectors(i,e),Ke.subVectors(t,e),De.cross(Ke).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),De.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return tn.getUV(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ri.subVectors(r,i),si.subVectors(s,i),Ns.subVectors(t,i);const c=ri.dot(Ns),l=si.dot(Ns);if(c<=0&&l<=0)return e.copy(i);Fs.subVectors(t,r);const u=ri.dot(Fs),h=si.dot(Fs);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ri,o);Os.subVectors(t,s);const m=ri.dot(Os),g=si.dot(Os);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(si,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return pl.subVectors(s,r),a=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(pl,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(i).addScaledVector(ri,o).addScaledVector(si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ng=0;class Ci extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=_i,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dc,this.blendDst=Pc,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Lm;continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gc extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qt=new U,yr=new At;class We{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=el,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let i=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new zt),e[i++]=o.r,e[i++]=o.g,e[i++]=o.b}return this}copyVector2sArray(t){const e=this.array;let i=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new At),e[i++]=o.x,e[i++]=o.y}return this}copyVector3sArray(t){const e=this.array;let i=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new U),e[i++]=o.x,e[i++]=o.y,e[i++]=o.z}return this}copyVector4sArray(t){const e=this.array;let i=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Jt),e[i++]=o.x,e[i++]=o.y,e[i++]=o.z,e[i++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix3(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix4(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyNormalMatrix(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.transformDirection(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Vc extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hc extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fg=0;const we=new jt,zs=new ve,ai=new U,_e=new er,Fi=new er,Kt=new U;class ze extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?Hc:Vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ae().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,i){return we.makeTranslation(t,e,i),this.applyMatrix4(we),this}scale(t,e,i){return we.makeScale(t,e,i),this.applyMatrix4(we),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];_e.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,_e.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,_e.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(_e.min),this.boundingBox.expandByPoint(_e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(_e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(_e.min,Fi.min),_e.expandByPoint(Kt),Kt.addVectors(_e.max,Fi.max),_e.expandByPoint(Kt)):(_e.expandByPoint(Fi.min),_e.expandByPoint(Fi.max))}_e.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Kt.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Kt));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Kt.fromBufferAttribute(a,l),c&&(ai.fromBufferAttribute(t,l),Kt.add(ai)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new U,u[P]=new U;const h=new U,f=new U,m=new U,g=new At,p=new At,d=new At,_=new U,v=new U;function y(P,D,B){h.fromArray(r,P*3),f.fromArray(r,D*3),m.fromArray(r,B*3),g.fromArray(o,P*2),p.fromArray(o,D*2),d.fromArray(o,B*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const C=1/(p.x*d.y-d.x*p.y);!isFinite(C)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(C),v.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(C),l[P].add(_),l[D].add(_),l[B].add(_),u[P].add(v),u[D].add(v),u[B].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let P=0,D=x.length;P<D;++P){const B=x[P],C=B.start,R=B.count;for(let F=C,N=C+R;F<N;F+=3)y(i[F+0],i[F+1],i[F+2])}const b=new U,L=new U,I=new U,M=new U;function T(P){I.fromArray(s,P*3),M.copy(I);const D=l[P];b.copy(D),b.sub(I.multiplyScalar(I.dot(D))).normalize(),L.crossVectors(M,D);const C=L.dot(u[P])<0?-1:1;c[P*4]=b.x,c[P*4+1]=b.y,c[P*4+2]=b.z,c[P*4+3]=C}for(let P=0,D=x.length;P<D;++P){const B=x[P],C=B.start,R=B.count;for(let F=C,N=C+R;F<N;F+=3)T(i[F+0]),T(i[F+1]),T(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),l.fromBufferAttribute(i,d),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(t.attributes[r]===void 0)continue;const o=i[r].array,a=t.attributes[r],c=a.array,l=a.itemSize*e,u=Math.min(c.length,o.length-l);for(let h=0,f=l;h<u;h++,f++)o[f]=c[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Kt.fromBufferAttribute(t,e),Kt.normalize(),t.setXYZ(e,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new We(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new jt,oi=new ka,Us=new nr,fn=new U,dn=new U,pn=new U,Bs=new U,ks=new U,Gs=new U,Mr=new U,br=new U,wr=new U,Sr=new At,Er=new At,Ar=new At,Vs=new U,Tr=new U;class xn extends ve{constructor(t=new ze,e=new Gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),t.ray.intersectsSphere(Us)===!1)||(ml.copy(s).invert(),oi.copy(t.ray).applyMatrix4(ml),i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=r[_.materialIndex],y=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,L=x;b<L;b+=3){const I=a.getX(b),M=a.getX(b+1),T=a.getX(b+2);o=Cr(this,v,t,oi,c,l,u,h,f,I,M,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,v=d;_<v;_+=3){const y=a.getX(_),x=a.getX(_+1),b=a.getX(_+2);o=Cr(this,r,t,oi,c,l,u,h,f,y,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=r[_.materialIndex],y=Math.max(_.start,g.start),x=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,L=x;b<L;b+=3){const I=b,M=b+1,T=b+2;o=Cr(this,v,t,oi,c,l,u,h,f,I,M,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=p,v=d;_<v;_+=3){const y=_,x=_+1,b=_+2;o=Cr(this,r,t,oi,c,l,u,h,f,y,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Og(n,t,e,i,r,s,o,a){let c;if(t.side===Ne?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side!==wi,a),c===null)return null;Tr.copy(a),Tr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Tr);return l<e.near||l>e.far?null:{distance:l,point:Tr.clone(),object:n}}function Cr(n,t,e,i,r,s,o,a,c,l,u,h){fn.fromBufferAttribute(r,l),dn.fromBufferAttribute(r,u),pn.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(s&&f){Mr.set(0,0,0),br.set(0,0,0),wr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=f[g],_=s[g];d!==0&&(Bs.fromBufferAttribute(_,l),ks.fromBufferAttribute(_,u),Gs.fromBufferAttribute(_,h),o?(Mr.addScaledVector(Bs,d),br.addScaledVector(ks,d),wr.addScaledVector(Gs,d)):(Mr.addScaledVector(Bs.sub(fn),d),br.addScaledVector(ks.sub(dn),d),wr.addScaledVector(Gs.sub(pn),d)))}fn.add(Mr),dn.add(br),pn.add(wr)}n.isSkinnedMesh&&(n.boneTransform(l,fn),n.boneTransform(u,dn),n.boneTransform(h,pn));const m=Og(n,t,e,i,fn,dn,pn,Vs);if(m){a&&(Sr.fromBufferAttribute(a,l),Er.fromBufferAttribute(a,u),Ar.fromBufferAttribute(a,h),m.uv=tn.getUV(Vs,fn,dn,pn,Sr,Er,Ar,new At)),c&&(Sr.fromBufferAttribute(c,l),Er.fromBufferAttribute(c,u),Ar.fromBufferAttribute(c,h),m.uv2=tn.getUV(Vs,fn,dn,pn,Sr,Er,Ar,new At));const g={a:l,b:u,c:h,normal:new U,materialIndex:0};tn.getNormal(fn,dn,pn,g.normal),m.face=g}return m}class rr extends ze{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(h,2));function g(p,d,_,v,y,x,b,L,I,M,T){const P=x/I,D=b/M,B=x/2,C=b/2,R=L/2,F=I+1,N=M+1;let V=0,H=0;const O=new U;for(let W=0;W<N;W++){const tt=W*D-C;for(let J=0;J<F;J++){const it=J*P-B;O[p]=it*v,O[d]=tt*y,O[_]=R,l.push(O.x,O.y,O.z),O[p]=0,O[d]=0,O[_]=L>0?1:-1,u.push(O.x,O.y,O.z),h.push(J/I),h.push(1-W/M),V+=1}}for(let W=0;W<M;W++)for(let tt=0;tt<I;tt++){const J=f+tt+F*W,it=f+tt+F*(W+1),ot=f+(tt+1)+F*(W+1),gt=f+(tt+1)+F*W;c.push(J,it,gt),c.push(it,ot,gt),H+=6}a.addGroup(m,H,T),m+=H,f+=V}}static fromJSON(t){return new rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ne(n){const t={};for(let e=0;e<n.length;e++){const i=Ti(n[e]);for(const r in i)t[r]=i[r]}return t}function zg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}const Ug={clone:Ti,merge:ne};var Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends Wc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=90,ci=1;class Gg extends ve{constructor(t,e,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Ee(li,ci,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Ee(li,ci,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const o=new Ee(li,ci,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);const a=new Ee(li,ci,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new U(0,-1,0)),this.add(a);const c=new Ee(li,ci,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,1)),this.add(c);const l=new Ee(li,ci,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=nn,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class qc extends Oe{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vg extends Gn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new qc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rr(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:vn});s.uniforms.tEquirect.value=e;const o=new xn(r,s),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Se),new Gg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Hs=new U,Hg=new U,Wg=new Ae;class Tn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Hs.subVectors(i,e).cross(Hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Hs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wg.getNormalMatrix(t),r=this.coplanarPoint(Hs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new nr,Lr=new U;class Xc{constructor(t=new Tn,e=new Tn,i=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],v=i[14],y=i[15];return e[0].setComponents(a-r,h-c,p-f,y-d).normalize(),e[1].setComponents(a+r,h+c,p+f,y+d).normalize(),e[2].setComponents(a+s,h+l,p+m,y+_).normalize(),e[3].setComponents(a-s,h-l,p-m,y-_).normalize(),e[4].setComponents(a-o,h-u,p-g,y-v).normalize(),e[5].setComponents(a+o,h+u,p+g,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Lr.x=r.normal.x>0?t.max.x:t.min.x,Lr.y=r.normal.y>0?t.max.y:t.min.y,Lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function qg(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,l),m.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ga extends ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const v=_*f-o;for(let y=0;y<l;y++){const x=y*h-s;g.push(x,-v,0),p.push(0,0,1),d.push(y/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<a;v++){const y=v+l*_,x=v+l*(_+1),b=v+1+l*(_+1),L=v+1+l*_;m.push(y,x,L),m.push(x,b,L)}this.setIndex(m),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(p,3)),this.setAttribute("uv",new Fe(d,2))}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg="vec3 transformed = vec3( position );",Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,e_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,I_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,s0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,w0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,O0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,z0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,U0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,B0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,k0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,G0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ax=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Et={alphamap_fragment:Xg,alphamap_pars_fragment:$g,alphatest_fragment:Yg,alphatest_pars_fragment:jg,aomap_fragment:Zg,aomap_pars_fragment:Kg,begin_vertex:Jg,beginnormal_vertex:Qg,bsdfs:t_,iridescence_fragment:e_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:a_,color_fragment:o_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:h_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:d_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:__,encodings_fragment:x_,encodings_pars_fragment:v_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:b_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:N_,envmap_vertex:S_,fog_vertex:E_,fog_pars_vertex:A_,fog_fragment:T_,fog_pars_fragment:C_,gradientmap_pars_fragment:L_,lightmap_fragment:D_,lightmap_pars_fragment:P_,lights_lambert_vertex:R_,lights_pars_begin:I_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:z_,lights_phong_pars_fragment:U_,lights_physical_fragment:B_,lights_physical_pars_fragment:k_,lights_fragment_begin:G_,lights_fragment_maps:V_,lights_fragment_end:H_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:$_,map_fragment:Y_,map_pars_fragment:j_,map_particle_fragment:Z_,map_particle_pars_fragment:K_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:r0,normal_fragment_maps:s0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,output_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:w0,shadowmap_vertex:S0,shadowmask_pars_fragment:E0,skinbase_vertex:A0,skinning_pars_vertex:T0,skinning_vertex:C0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:P0,tonemapping_fragment:R0,tonemapping_pars_fragment:I0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:z0,uv_vertex:U0,uv2_pars_fragment:B0,uv2_pars_vertex:k0,uv2_vertex:G0,worldpos_vertex:V0,background_vert:H0,background_frag:W0,cube_vert:q0,cube_frag:X0,depth_vert:$0,depth_frag:Y0,distanceRGBA_vert:j0,distanceRGBA_frag:Z0,equirect_vert:K0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:tx,meshbasic_vert:ex,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ax,meshnormal_vert:ox,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:ux,meshphysical_vert:hx,meshphysical_frag:fx,meshtoon_vert:dx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:xx,sprite_vert:vx,sprite_frag:yx},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ae},uv2Transform:{value:new Ae},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}}},Ge={basic:{uniforms:ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:ne([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:ne([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:ne([st.points,st.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:ne([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:ne([st.common,st.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:ne([st.sprite,st.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},cube:{uniforms:ne([st.envmap,{opacity:{value:1}}]),vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:ne([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:ne([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Ge.physical={uniforms:ne([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new At(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};function Mx(n,t,e,i,r,s){const o=new zt(0);let a=r===!0?0:1,c,l,u=null,h=0,f=null;function m(p,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=t.get(v));const y=n.xr,x=y.getSession&&y.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ns)?(l===void 0&&(l=new xn(new rr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ti(Ge.cube.uniforms),vertexShader:Ge.cube.vertexShader,fragmentShader:Ge.cube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xn(new Ga(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ti(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){e.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function bx(n,t,e,i){const r=n.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function h(R,F,N,V,H){let O=!1;if(o){const W=p(V,N,F);l!==W&&(l=W,m(l.object)),O=_(R,V,N,H),O&&v(R,V,N,H)}else{const W=F.wireframe===!0;(l.geometry!==V.id||l.program!==N.id||l.wireframe!==W)&&(l.geometry=V.id,l.program=N.id,l.wireframe=W,O=!0)}H!==null&&e.update(H,34963),(O||u)&&(u=!1,M(R,F,N,V),H!==null&&n.bindBuffer(34963,e.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,F,N){const V=N.wireframe===!0;let H=a[R.id];H===void 0&&(H={},a[R.id]=H);let O=H[F.id];O===void 0&&(O={},H[F.id]=O);let W=O[V];return W===void 0&&(W=d(f()),O[V]=W),W}function d(R){const F=[],N=[],V=[];for(let H=0;H<r;H++)F[H]=0,N[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:V,object:R,attributes:{},index:null}}function _(R,F,N,V){const H=l.attributes,O=F.attributes;let W=0;const tt=N.getAttributes();for(const J in tt)if(tt[J].location>=0){const ot=H[J];let gt=O[J];if(gt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),ot===void 0||ot.attribute!==gt||gt&&ot.data!==gt.data)return!0;W++}return l.attributesNum!==W||l.index!==V}function v(R,F,N,V){const H={},O=F.attributes;let W=0;const tt=N.getAttributes();for(const J in tt)if(tt[J].location>=0){let ot=O[J];ot===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor));const gt={};gt.attribute=ot,ot&&ot.data&&(gt.data=ot.data),H[J]=gt,W++}l.attributes=H,l.attributesNum=W,l.index=V}function y(){const R=l.newAttributes;for(let F=0,N=R.length;F<N;F++)R[F]=0}function x(R){b(R,0)}function b(R,F){const N=l.newAttributes,V=l.enabledAttributes,H=l.attributeDivisors;N[R]=1,V[R]===0&&(n.enableVertexAttribArray(R),V[R]=1),H[R]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),H[R]=F)}function L(){const R=l.newAttributes,F=l.enabledAttributes;for(let N=0,V=F.length;N<V;N++)F[N]!==R[N]&&(n.disableVertexAttribArray(N),F[N]=0)}function I(R,F,N,V,H,O){i.isWebGL2===!0&&(N===5124||N===5125)?n.vertexAttribIPointer(R,F,N,H,O):n.vertexAttribPointer(R,F,N,V,H,O)}function M(R,F,N,V){if(i.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const H=V.attributes,O=N.getAttributes(),W=F.defaultAttributeValues;for(const tt in O){const J=O[tt];if(J.location>=0){let it=H[tt];if(it===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),it!==void 0){const ot=it.normalized,gt=it.itemSize,Y=e.get(it);if(Y===void 0)continue;const Ct=Y.buffer,dt=Y.type,_t=Y.bytesPerElement;if(it.isInterleavedBufferAttribute){const ht=it.data,Nt=ht.stride,bt=it.offset;if(ht.isInstancedInterleavedBuffer){for(let pt=0;pt<J.locationSize;pt++)b(J.location+pt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<J.locationSize;pt++)x(J.location+pt);n.bindBuffer(34962,Ct);for(let pt=0;pt<J.locationSize;pt++)I(J.location+pt,gt/J.locationSize,dt,ot,Nt*_t,(bt+gt/J.locationSize*pt)*_t)}else{if(it.isInstancedBufferAttribute){for(let ht=0;ht<J.locationSize;ht++)b(J.location+ht,it.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ht=0;ht<J.locationSize;ht++)x(J.location+ht);n.bindBuffer(34962,Ct);for(let ht=0;ht<J.locationSize;ht++)I(J.location+ht,gt/J.locationSize,dt,ot,gt*_t,gt/J.locationSize*ht*_t)}}else if(W!==void 0){const ot=W[tt];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(J.location,ot);break;case 3:n.vertexAttrib3fv(J.location,ot);break;case 4:n.vertexAttrib4fv(J.location,ot);break;default:n.vertexAttrib1fv(J.location,ot)}}}}L()}function T(){B();for(const R in a){const F=a[R];for(const N in F){const V=F[N];for(const H in V)g(V[H].object),delete V[H];delete F[N]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const N in F){const V=F[N];for(const H in V)g(V[H].object),delete V[H];delete F[N]}delete a[R.id]}function D(R){for(const F in a){const N=a[F];if(N[R.id]===void 0)continue;const V=N[R.id];for(const H in V)g(V[H].object),delete V[H];delete N[R.id]}}function B(){C(),u=!0,l!==c&&(l=c,m(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:x,disableUnusedAttributes:L}}function wx(n,t,e,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Sx(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),v=n.getParameter(36349),y=f>0,x=o||t.has("OES_texture_float"),b=y&&x,L=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:L}}function Ex(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Tn,a=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||i!==0||r;return r=f,e=u(h,m,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const v=s?0:i,y=v*4;let x=_.clippingState||null;c.value=x,x=u(g,f,y,m);for(let b=0;b!==y;++b)x[b]=e[b];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const _=m+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,x=m;y!==p;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(d,x),d[x+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Ax(n){let t=new WeakMap;function e(o,a){return a===da?o.mapping=Si:a===pa&&(o.mapping=Ei),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===da||a===pa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Vg(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Tx extends Wc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,gl=[.125,.215,.35,.446,.526,.582],Ln=20,Ws=new Tx,_l=new zt;let qs=null;const Cn=(1+Math.sqrt(5))/2,hi=1/Cn,xl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Cn,hi),new U(0,Cn,-hi),new U(hi,0,Cn),new U(-hi,0,Cn),new U(Cn,hi,0),new U(-Cn,hi,0)];class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs),t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Ki,format:Ve,encoding:kn,depthBuffer:!1},r=yl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(s)),this._blurMaterial=Lx(s,t,e)}return r}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,Ws)}_sceneToCubeUV(t,e,i,r){const a=new Ee(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_l),u.toneMapping=nn,u.autoClear=!1;const m=new Gc({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new xn(new rr,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(_l),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):v===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;Dr(r,v*y,_>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Si||t.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Dr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ws)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(r-1)%xl.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Ln;d>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ln}`);const _=[];let v=0;for(let I=0;I<Ln;++I){const M=I/p,T=Math.exp(-M*M/2);_.push(T),I===0?v+=T:I<d&&(v+=2*T)}for(let I=0;I<_.length;I++)_[I]=_[I]/v;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-mi?r-y+mi:0),L=4*(this._cubeSize-x);Dr(e,b,L,3*x,2*x),c.setRenderTarget(e),c.render(h,Ws)}}function Cx(n){const t=[],e=[],i=[];let r=n;const s=n-mi+1+gl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-mi?c=gl[o-n+mi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,v=new Float32Array(p*g*m),y=new Float32Array(d*g*m),x=new Float32Array(_*g*m);for(let L=0;L<m;L++){const I=L%3*2/3-1,M=L>2?0:-1,T=[I,M,0,I+2/3,M,0,I+2/3,M+1,0,I,M,0,I+2/3,M+1,0,I,M+1,0];v.set(T,p*g*L),y.set(f,d*g*L);const P=[L,L,L,L,L,L];x.set(P,_*g*L)}const b=new ze;b.setAttribute("position",new We(v,p)),b.setAttribute("uv",new We(y,d)),b.setAttribute("faceIndex",new We(x,_)),t.push(b),r>mi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yl(n,t,e){const i=new Gn(n,t,e);return i.texture.mapping=ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Lx(n,t,e){const i=new Float32Array(Ln),r=new U(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ml(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function bl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===da||c===pa,u=c===Si||c===Ei;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new vl(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new vl(n));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Px(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rx(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],L=v[y+1],I=v[y+2];f.push(b,L,L,I,I,b)}}else{const v=g.array;p=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,L=y+1,I=y+2;f.push(b,L,L,I,I,b)}}const d=new(Fc(f)?Hc:Vc)(f,1);d.version=p;const _=s.get(h);_&&t.remove(_),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ix(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*c),e.update(m,s,1)}function h(f,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Nx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Fx(n,t){return n[0]-t[0]}function Ox(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Xs(n,t){let e=1;const i=t.isInterleavedBufferAttribute?t.data.array:t.array;i instanceof Int8Array?e=127:i instanceof Uint8Array?e=255:i instanceof Uint16Array?e=65535:i instanceof Int16Array?e=32767:i instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(e)}function zx(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Jt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let F=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let T=0;y===!0&&(T=1),x===!0&&(T=2),b===!0&&(T=3);let P=u.attributes.position.count*T,D=1;P>t.maxTextureSize&&(D=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const B=new Float32Array(P*D*4*p),C=new Bc(B,P,D,p);C.type=Rn,C.needsUpdate=!0;const R=T*4;for(let N=0;N<p;N++){const V=L[N],H=I[N],O=M[N],W=P*D*4*N;for(let tt=0;tt<V.count;tt++){const J=tt*R;y===!0&&(o.fromBufferAttribute(V,tt),V.normalized===!0&&Xs(o,V),B[W+J+0]=o.x,B[W+J+1]=o.y,B[W+J+2]=o.z,B[W+J+3]=0),x===!0&&(o.fromBufferAttribute(H,tt),H.normalized===!0&&Xs(o,H),B[W+J+4]=o.x,B[W+J+5]=o.y,B[W+J+6]=o.z,B[W+J+7]=0),b===!0&&(o.fromBufferAttribute(O,tt),O.normalized===!0&&Xs(o,O),B[W+J+8]=o.x,B[W+J+9]=o.y,B[W+J+10]=o.z,B[W+J+11]=O.itemSize===4?o.w:1)}}d={count:p,texture:C,size:new At(P,D)},s.set(u,d),u.addEventListener("dispose",F)}let _=0;for(let y=0;y<m.length;y++)_+=m[y];const v=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<g;x++){const b=p[x];b[0]=x,b[1]=m[x]}p.sort(Ox);for(let x=0;x<8;x++)x<g&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Fx);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=a[x],L=b[0],I=b[1];L!==Number.MAX_SAFE_INTEGER&&I?(d&&u.getAttribute("morphTarget"+x)!==d[L]&&u.setAttribute("morphTarget"+x,d[L]),_&&u.getAttribute("morphNormal"+x)!==_[L]&&u.setAttribute("morphNormal"+x,_[L]),r[x]=I,v+=I):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Ux(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);return r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Yc=new Oe,jc=new Bc,Zc=new Ag,Kc=new qc,wl=[],Sl=[],El=new Float32Array(16),Al=new Float32Array(9),Tl=new Float32Array(4);function Li(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=wl[r];if(s===void 0&&(s=new Float32Array(r),wl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rs(n,t){let e=Sl[t];e===void 0&&(e=new Int32Array(t),Sl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;n.uniform2fv(this.addr,t),oe(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;n.uniform3fv(this.addr,t),oe(e,t)}}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;n.uniform4fv(this.addr,t),oe(e,t)}}function Hx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,i))return;Tl.set(i),n.uniformMatrix2fv(this.addr,!1,Tl),oe(e,i)}}function Wx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,i))return;Al.set(i),n.uniformMatrix3fv(this.addr,!1,Al),oe(e,i)}}function qx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),oe(e,i)}}function Xx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $x(n,t){const e=this.cache;ae(e,t)||(n.uniform2iv(this.addr,t),oe(e,t))}function Yx(n,t){const e=this.cache;ae(e,t)||(n.uniform3iv(this.addr,t),oe(e,t))}function jx(n,t){const e=this.cache;ae(e,t)||(n.uniform4iv(this.addr,t),oe(e,t))}function Zx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Kx(n,t){const e=this.cache;ae(e,t)||(n.uniform2uiv(this.addr,t),oe(e,t))}function Jx(n,t){const e=this.cache;ae(e,t)||(n.uniform3uiv(this.addr,t),oe(e,t))}function Qx(n,t){const e=this.cache;ae(e,t)||(n.uniform4uiv(this.addr,t),oe(e,t))}function tv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Yc,r)}function ev(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Zc,r)}function nv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Kc,r)}function iv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||jc,r)}function rv(n){switch(n){case 5126:return Bx;case 35664:return kx;case 35665:return Gx;case 35666:return Vx;case 35674:return Hx;case 35675:return Wx;case 35676:return qx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return Yx;case 35669:case 35673:return jx;case 5125:return Zx;case 36294:return Kx;case 36295:return Jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function sv(n,t){n.uniform1fv(this.addr,t)}function av(n,t){const e=Li(t,this.size,2);n.uniform2fv(this.addr,e)}function ov(n,t){const e=Li(t,this.size,3);n.uniform3fv(this.addr,e)}function lv(n,t){const e=Li(t,this.size,4);n.uniform4fv(this.addr,e)}function cv(n,t){const e=Li(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uv(n,t){const e=Li(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hv(n,t){const e=Li(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fv(n,t){n.uniform1iv(this.addr,t)}function dv(n,t){n.uniform2iv(this.addr,t)}function pv(n,t){n.uniform3iv(this.addr,t)}function mv(n,t){n.uniform4iv(this.addr,t)}function gv(n,t){n.uniform1uiv(this.addr,t)}function _v(n,t){n.uniform2uiv(this.addr,t)}function xv(n,t){n.uniform3uiv(this.addr,t)}function vv(n,t){n.uniform4uiv(this.addr,t)}function yv(n,t,e){const i=t.length,r=rs(e,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)e.setTexture2D(t[s]||Yc,r[s])}function Mv(n,t,e){const i=t.length,r=rs(e,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)e.setTexture3D(t[s]||Zc,r[s])}function bv(n,t,e){const i=t.length,r=rs(e,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)e.setTextureCube(t[s]||Kc,r[s])}function wv(n,t,e){const i=t.length,r=rs(e,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||jc,r[s])}function Sv(n){switch(n){case 5126:return sv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return fv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return xv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return wv}}class Ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=rv(e.type)}}class Av{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Sv(e.type)}}class Tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function Cl(n,t){n.seq.push(t),n.map[t.id]=t}function Cv(n,t,e){const i=n.name,r=i.length;for($s.lastIndex=0;;){const s=$s.exec(i),o=$s.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cl(e,l===void 0?new Ev(a,n,t):new Av(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Tv(a),Cl(e,h)),e=h}}}class Br{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Cv(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ll(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let Lv=0;function Dv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Pv(n){switch(n){case kn:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Dl(n,t,e){const i=n.getShaderParameter(t,35713),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Dv(n.getShaderSource(t),o)}else return r}function Rv(n,t){const e=Pv(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Iv(n,t){let e;switch(t){case Km:e="Linear";break;case Jm:e="Reinhard";break;case Qm:e="OptimizedCineon";break;case tg:e="ACESFilmic";break;case eg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nv(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function Fv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ov(n,t){const e={},i=n.getProgramParameter(t,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ki(n){return n!==""}function Pl(n,t){return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(zv,Uv)}function Uv(n,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return va(e)}const Bv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(n){return n.replace(kv,Jc).replace(Bv,Gv)}function Gv(n,t,e,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Jc(n,t,e,i)}function Jc(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Ei:t="ENVMAP_TYPE_CUBE";break;case ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function qv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case jm:t="ENVMAP_BLENDING_MIX";break;case Zm:t="ENVMAP_BLENDING_ADD";break}return t}function Xv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $v(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vv(e),l=Hv(e),u=Wv(e),h=qv(e),f=Xv(e),m=e.isWebGL2?"":Nv(e),g=Fv(s),p=r.createProgram();let d,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(ki).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(ki).join(`
`),_.length>0&&(_+=`
`)):(d=[Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),_=[m,Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Et.tonemapping_pars_fragment:"",e.toneMapping!==nn?Iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,Rv("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),o=va(o),o=Pl(o,e),o=Rl(o,e),a=va(a),a=Pl(a,e),a=Rl(a,e),o=Il(o),a=Il(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+d+o,x=v+_+a,b=Ll(r,35633,y),L=Ll(r,35632,x);if(r.attachShader(p,b),r.attachShader(p,L),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(L).trim();let B=!0,C=!0;if(r.getProgramParameter(p,35714)===!1){B=!1;const R=Dl(r,b,"vertex"),F=Dl(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+F)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||D==="")&&(C=!1);C&&(this.diagnostics={runnable:B,programLog:T,vertexShader:{log:P,prefix:d},fragmentShader:{log:D,prefix:_}})}r.deleteShader(b),r.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new Br(r,p)),I};let M;return this.getAttributes=function(){return M===void 0&&(M=Ov(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=L,this}let Yv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const i=new Zv(t);e.set(t,i)}return e.get(t)}}class Zv{constructor(t){this.id=Yv++,this.code=t,this.usedTimes=0}}function Kv(n,t,e,i,r,s,o){const a=new kc,c=new jv,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,T,P,D,B){const C=D.fog,R=B.geometry,F=M.isMeshStandardMaterial?D.environment:null,N=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),V=!!N&&N.mapping===ns?N.image.height:null,H=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const O=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,W=O!==void 0?O.length:0;let tt=0;R.morphAttributes.position!==void 0&&(tt=1),R.morphAttributes.normal!==void 0&&(tt=2),R.morphAttributes.color!==void 0&&(tt=3);let J,it,ot,gt;if(H){const Nt=Ge[H];J=Nt.vertexShader,it=Nt.fragmentShader}else J=M.vertexShader,it=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),gt=c.getFragmentShaderID(M);const Y=n.getRenderTarget(),Ct=M.alphaTest>0,dt=M.clearcoat>0,_t=M.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:J,fragmentShader:it,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?n.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:kn,map:!!M.map,matcap:!!M.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:V,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Mg,tangentSpaceNormalMap:M.normalMapType===yg,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Gt,clearcoat:dt,clearcoatMap:dt&&!!M.clearcoatMap,clearcoatRoughnessMap:dt&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:dt&&!!M.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!M.iridescenceMap,iridescenceThicknessMap:_t&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===_i,alphaMap:!!M.alphaMap,alphaTest:Ct,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!R.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:tt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:nn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wi,flipSided:M.side===Ne,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)T.push(P),T.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(n.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.combine),M.push(T.vertexUvs),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),M.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),M.push(a.mask)}function y(M){const T=g[M.type];let P;if(T){const D=Ge[T];P=Ug.clone(D.uniforms)}else P=M.uniforms;return P}function x(M,T){let P;for(let D=0,B=l.length;D<B;D++){const C=l[D];if(C.cacheKey===T){P=C,++P.usedTimes;break}}return P===void 0&&(P=new $v(n,T,M,s),l.push(P)),P}function b(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function L(M){c.remove(M)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:I}}function Jv(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function Qv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ol(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,m,g,p,d){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},n[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),t++,_}function a(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):e.push(_)}function c(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||Qv),i.length>1&&i.sort(f||Fl),r.length>1&&r.sort(f||Fl)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ty(){let n=new WeakMap;function t(i,r){let s;return n.has(i)===!1?(s=new Ol,n.set(i,[s])):r>=n.get(i).length?(s=new Ol,n.get(i).push(s)):s=n.get(i)[r],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function ey(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function ny(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let iy=0;function ry(n,t){return(t.castShadow?1:0)-(n.castShadow?1:0)}function sy(n,t){const e=new ey,i=ny(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new jt,a=new jt;function c(u,h){let f=0,m=0,g=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let p=0,d=0,_=0,v=0,y=0,x=0,b=0,L=0;u.sort(ry);const I=h!==!0?Math.PI:1;for(let T=0,P=u.length;T<P;T++){const D=u[T],B=D.color,C=D.intensity,R=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*C*I,m+=B.g*C*I,g+=B.b*C*I;else if(D.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(D.sh.coefficients[N],C);else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*I),D.castShadow){const V=D.shadow,H=i.get(D);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.directionalShadow[p]=H,r.directionalShadowMap[p]=F,r.directionalShadowMatrix[p]=D.shadow.matrix,x++}r.directional[p]=N,p++}else if(D.isSpotLight){const N=e.get(D);if(N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(B).multiplyScalar(C*I),N.distance=R,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,D.castShadow){const V=D.shadow,H=i.get(D);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.spotShadow[_]=H,r.spotShadowMap[_]=F,r.spotShadowMatrix[_]=D.shadow.matrix,L++}r.spot[_]=N,_++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(B).multiplyScalar(C),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=N,v++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*I),N.distance=D.distance,N.decay=D.decay,D.castShadow){const V=D.shadow,H=i.get(D);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,r.pointShadow[d]=H,r.pointShadowMap[d]=F,r.pointShadowMatrix[d]=D.shadow.matrix,b++}r.point[d]=N,d++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(C*I),N.groundColor.copy(D.groundColor).multiplyScalar(C*I),r.hemi[y]=N,y++}}v>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=st.LTC_FLOAT_1,r.rectAreaLTC2=st.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=st.LTC_HALF_1,r.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==p||M.pointLength!==d||M.spotLength!==_||M.rectAreaLength!==v||M.hemiLength!==y||M.numDirectionalShadows!==x||M.numPointShadows!==b||M.numSpotShadows!==L)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=v,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=L,M.directionalLength=p,M.pointLength=d,M.spotLength=_,M.rectAreaLength=v,M.hemiLength=y,M.numDirectionalShadows=x,M.numPointShadows=b,M.numSpotShadows=L,r.version=iy++)}function l(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),f++}else if(x.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:r}}function zl(n,t){const e=new sy(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){e.setup(i,h)}function l(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ay(n,t){let e=new WeakMap;function i(s,o=0){let a;return e.has(s)===!1?(a=new zl(n,t),e.set(s,[a])):o>=e.get(s).length?(a=new zl(n,t),e.get(s).push(a)):a=e.get(s)[o],a}function r(){e=new WeakMap}return{get:i,dispose:r}}class oy extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ly extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hy(n,t,e){let i=new Xc;const r=new At,s=new At,o=new Jt,a=new oy({depthPacking:vg}),c=new ly,l={},u=e.maxTextureSize,h={0:Ne,1:Zi,2:wi},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:cy,fragmentShader:uy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new xn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc,this.render=function(x,b,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const I=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(vn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let D=0,B=x.length;D<B;D++){const C=x[D],R=C.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const F=R.getFrameExtents();if(r.multiply(F),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,R.mapSize.y=s.y)),R.map===null){const V=this.type!==Bi?{minFilter:ue,magFilter:ue}:{};R.map=new Gn(r.x,r.y,V),R.map.texture.name=C.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const N=R.getViewportCount();for(let V=0;V<N;V++){const H=R.getViewport(V);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),P.viewport(o),R.updateMatrices(C,V),i=R.getFrustum(),y(b,L,R.camera,C,this.type)}R.isPointLightShadow!==!0&&this.type===Bi&&_(R,L),R.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(I,M,T)};function _(x,b){const L=t.update(p);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(b,null,L,f,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(b,null,L,m,p,null)}function v(x,b,L,I,M,T){let P=null;const D=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0?P=D:P=L.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const B=P.uuid,C=b.uuid;let R=l[B];R===void 0&&(R={},l[B]=R);let F=R[C];F===void 0&&(F=P.clone(),R[C]=F),P=F}return P.visible=b.visible,P.wireframe=b.wireframe,T===Bi?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=I,P.farDistance=M),P}function y(x,b,L,I,M){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Bi)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const D=t.update(x),B=x.material;if(Array.isArray(B)){const C=D.groups;for(let R=0,F=C.length;R<F;R++){const N=C[R],V=B[N.materialIndex];if(V&&V.visible){const H=v(x,V,I,L.near,L.far,M);n.renderBufferDirect(L,null,D,H,x,N)}}}else if(B.visible){const C=v(x,B,I,L.near,L.far,M);n.renderBufferDirect(L,null,D,C,x,null)}}const P=x.children;for(let D=0,B=P.length;D<B;D++)y(P[D],b,L,I,M)}}function fy(n,t,e){const i=e.isWebGL2;function r(){let z=!1;const rt=new Jt;let X=null;const ft=new Jt(0,0,0,0);return{setMask:function(ut){X!==ut&&!z&&(n.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){z=ut},setClear:function(ut,Dt,Zt,Vt,sn){sn===!0&&(ut*=Vt,Dt*=Vt,Zt*=Vt),rt.set(ut,Dt,Zt,Vt),ft.equals(rt)===!1&&(n.clearColor(ut,Dt,Zt,Vt),ft.copy(rt))},reset:function(){z=!1,X=null,ft.set(-1,0,0,0)}}}function s(){let z=!1,rt=null,X=null,ft=null;return{setTest:function(ut){ut?Ct(2929):dt(2929)},setMask:function(ut){rt!==ut&&!z&&(n.depthMask(ut),rt=ut)},setFunc:function(ut){if(X!==ut){if(ut)switch(ut){case Vm:n.depthFunc(512);break;case Hm:n.depthFunc(519);break;case Wm:n.depthFunc(513);break;case fa:n.depthFunc(515);break;case qm:n.depthFunc(514);break;case Xm:n.depthFunc(518);break;case $m:n.depthFunc(516);break;case Ym:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);X=ut}},setLocked:function(ut){z=ut},setClear:function(ut){ft!==ut&&(n.clearDepth(ut),ft=ut)},reset:function(){z=!1,rt=null,X=null,ft=null}}}function o(){let z=!1,rt=null,X=null,ft=null,ut=null,Dt=null,Zt=null,Vt=null,sn=null;return{setTest:function(Bt){z||(Bt?Ct(2960):dt(2960))},setMask:function(Bt){rt!==Bt&&!z&&(n.stencilMask(Bt),rt=Bt)},setFunc:function(Bt,Xe,Me){(X!==Bt||ft!==Xe||ut!==Me)&&(n.stencilFunc(Bt,Xe,Me),X=Bt,ft=Xe,ut=Me)},setOp:function(Bt,Xe,Me){(Dt!==Bt||Zt!==Xe||Vt!==Me)&&(n.stencilOp(Bt,Xe,Me),Dt=Bt,Zt=Xe,Vt=Me)},setLocked:function(Bt){z=Bt},setClear:function(Bt){sn!==Bt&&(n.clearStencil(Bt),sn=Bt)},reset:function(){z=!1,rt=null,X=null,ft=null,ut=null,Dt=null,Zt=null,Vt=null,sn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,v=null,y=null,x=null,b=null,L=null,I=null,M=null,T=!1,P=null,D=null,B=null,C=null,R=null;const F=n.getParameter(35661);let N=!1,V=0;const H=n.getParameter(7938);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=V>=2);let O=null,W={};const tt=n.getParameter(3088),J=n.getParameter(2978),it=new Jt().fromArray(tt),ot=new Jt().fromArray(J);function gt(z,rt,X){const ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(z,ut),n.texParameteri(z,10241,9728),n.texParameteri(z,10240,9728);for(let Dt=0;Dt<X;Dt++)n.texImage2D(rt+Dt,0,6408,1,1,0,6408,5121,ft);return ut}const Y={};Y[3553]=gt(3553,3553,1),Y[34067]=gt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ct(2929),c.setFunc(fa),Xt(!1),de(Ao),Ct(2884),Ht(vn);function Ct(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function dt(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function _t(z,rt){return m[z]!==rt?(n.bindFramebuffer(z,rt),m[z]=rt,i&&(z===36009&&(m[36160]=rt),z===36160&&(m[36009]=rt)),!0):!1}function ht(z,rt){let X=p,ft=!1;if(z)if(X=g.get(rt),X===void 0&&(X=[],g.set(rt,X)),z.isWebGLMultipleRenderTargets){const ut=z.texture;if(X.length!==ut.length||X[0]!==36064){for(let Dt=0,Zt=ut.length;Dt<Zt;Dt++)X[Dt]=36064+Dt;X.length=ut.length,ft=!0}}else X[0]!==36064&&(X[0]=36064,ft=!0);else X[0]!==1029&&(X[0]=1029,ft=!0);ft&&(e.isWebGL2?n.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Nt(z){return d!==z?(n.useProgram(z),d=z,!0):!1}const bt={[fi]:32774,[Pm]:32778,[Rm]:32779};if(i)bt[Do]=32775,bt[Po]=32776;else{const z=t.get("EXT_blend_minmax");z!==null&&(bt[Do]=z.MIN_EXT,bt[Po]=z.MAX_EXT)}const pt={[Im]:0,[Nm]:1,[Fm]:768,[Dc]:770,[Gm]:776,[Bm]:774,[zm]:772,[Om]:769,[Pc]:771,[km]:775,[Um]:773};function Ht(z,rt,X,ft,ut,Dt,Zt,Vt){if(z===vn){_===!0&&(dt(3042),_=!1);return}if(_===!1&&(Ct(3042),_=!0),z!==Dm){if(z!==v||Vt!==T){if((y!==fi||L!==fi)&&(n.blendEquation(32774),y=fi,L=fi),Vt)switch(z){case _i:n.blendFuncSeparate(1,771,1,771);break;case To:n.blendFunc(1,1);break;case Co:n.blendFuncSeparate(0,769,0,1);break;case Lo:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case _i:n.blendFuncSeparate(770,771,1,771);break;case To:n.blendFunc(770,1);break;case Co:n.blendFuncSeparate(0,769,0,1);break;case Lo:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,b=null,I=null,M=null,v=z,T=Vt}return}ut=ut||rt,Dt=Dt||X,Zt=Zt||ft,(rt!==y||ut!==L)&&(n.blendEquationSeparate(bt[rt],bt[ut]),y=rt,L=ut),(X!==x||ft!==b||Dt!==I||Zt!==M)&&(n.blendFuncSeparate(pt[X],pt[ft],pt[Dt],pt[Zt]),x=X,b=ft,I=Dt,M=Zt),v=z,T=null}function Qt(z,rt){z.side===wi?dt(2884):Ct(2884);let X=z.side===Ne;rt&&(X=!X),Xt(X),z.blending===_i&&z.transparent===!1?Ht(vn):Ht(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const ft=z.stencilWrite;l.setTest(ft),ft&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ct(32926):dt(32926)}function Xt(z){P!==z&&(z?n.frontFace(2304):n.frontFace(2305),P=z)}function de(z){z!==Am?(Ct(2884),z!==D&&(z===Ao?n.cullFace(1029):z===Tm?n.cullFace(1028):n.cullFace(1032))):dt(2884),D=z}function $t(z){z!==B&&(N&&n.lineWidth(z),B=z)}function Ft(z,rt,X){z?(Ct(32823),(C!==rt||R!==X)&&(n.polygonOffset(rt,X),C=rt,R=X)):dt(32823)}function ye(z){z?Ct(3089):dt(3089)}function pe(z){z===void 0&&(z=33984+F-1),O!==z&&(n.activeTexture(z),O=z)}function A(z,rt){O===null&&pe();let X=W[O];X===void 0&&(X={type:void 0,texture:void 0},W[O]=X),(X.type!==z||X.texture!==rt)&&(n.bindTexture(z,rt||Y[z]),X.type=z,X.texture=rt)}function w(){const z=W[O];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function S(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(z){it.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function at(z){ot.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ot.copy(z))}function vt(z,rt){let X=h.get(rt);X===void 0&&(X=new WeakMap,h.set(rt,X));let ft=X.get(z);ft===void 0&&(ft=n.getUniformBlockIndex(rt,z.name),X.set(z,ft))}function Tt(z,rt){const ft=h.get(rt).get(z);u.get(z)!==ft&&(n.uniformBlockBinding(rt,ft,z.__bindingPointIndex),u.set(z,ft))}function Ut(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},O=null,W={},m={},g=new WeakMap,p=[],d=null,_=!1,v=null,y=null,x=null,b=null,L=null,I=null,M=null,T=!1,P=null,D=null,B=null,C=null,R=null,it.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ct,disable:dt,bindFramebuffer:_t,drawBuffers:ht,useProgram:Nt,setBlending:Ht,setMaterial:Qt,setFlipSided:Xt,setCullFace:de,setLineWidth:$t,setPolygonOffset:Ft,setScissorTest:ye,activeTexture:pe,bindTexture:A,unbindTexture:w,compressedTexImage2D:$,texImage2D:K,texImage3D:nt,updateUBOMapping:vt,uniformBlockBinding:Tt,texStorage2D:xt,texStorage3D:S,texSubImage2D:Q,texSubImage3D:et,compressedTexSubImage2D:lt,scissor:ct,viewport:at,reset:Ut}}function dy(n,t,e,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return _?new OffscreenCanvas(A,w):Zr("canvas")}function y(A,w,$,Q){let et=1;if((A.width>Q||A.height>Q)&&(et=Q/Math.max(A.width,A.height)),et<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const lt=w?xa:Math.floor,xt=lt(et*A.width),S=lt(et*A.height);p===void 0&&(p=v(xt,S));const K=$?v(xt,S):p;return K.width=xt,K.height=S,K.getContext("2d").drawImage(A,0,0,xt,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xt+"x"+S+")."),K}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return rl(A.width)&&rl(A.height)}function b(A){return a?!1:A.wrapS!==Ie||A.wrapT!==Ie||A.minFilter!==ue&&A.minFilter!==Se}function L(A,w){return A.generateMipmaps&&w&&A.minFilter!==ue&&A.minFilter!==Se}function I(A){n.generateMipmap(A)}function M(A,w,$,Q,et=!1){if(a===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt=w;return w===6403&&($===5126&&(lt=33326),$===5131&&(lt=33325),$===5121&&(lt=33321)),w===33319&&($===5126&&(lt=33328),$===5131&&(lt=33327),$===5121&&(lt=33323)),w===6408&&($===5126&&(lt=34836),$===5131&&(lt=34842),$===5121&&(lt=Q===Gt&&et===!1?35907:32856),$===32819&&(lt=32854),$===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function T(A,w,$){return L(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==ue&&A.minFilter!==Se?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===ue||A===Ro||A===Io?9728:9729}function D(A){const w=A.target;w.removeEventListener("dispose",D),C(w),w.isVideoTexture&&g.delete(w)}function B(A){const w=A.target;w.removeEventListener("dispose",B),F(w)}function C(A){const w=i.get(A);if(w.__webglInit===void 0)return;const $=A.source,Q=d.get($);if(Q){const et=Q[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(A),Object.keys(Q).length===0&&d.delete($)}i.remove(A)}function R(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const $=A.source,Q=d.get($);delete Q[w.__cacheKey],o.memory.textures--}function F(A){const w=A.texture,$=i.get(A),Q=i.get(w);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)n.deleteFramebuffer($.__webglFramebuffer[et]),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[et]);else{if(n.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let et=0;et<$.__webglColorRenderbuffer.length;et++)$.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[et]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,lt=w.length;et<lt;et++){const xt=i.get(w[et]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(w[et])}i.remove(w),i.remove(A)}let N=0;function V(){N=0}function H(){const A=N;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),N+=1,A}function O(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function W(A,w){const $=i.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt($,A,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,$.__webglTexture)}function tt(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){dt($,A,w);return}e.activeTexture(33984+w),e.bindTexture(35866,$.__webglTexture)}function J(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){dt($,A,w);return}e.activeTexture(33984+w),e.bindTexture(32879,$.__webglTexture)}function it(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){_t($,A,w);return}e.activeTexture(33984+w),e.bindTexture(34067,$.__webglTexture)}const ot={[ma]:10497,[Ie]:33071,[ga]:33648},gt={[ue]:9728,[Ro]:9984,[Io]:9986,[Se]:9729,[ng]:9985,[is]:9987};function Y(A,w,$){if($?(n.texParameteri(A,10242,ot[w.wrapS]),n.texParameteri(A,10243,ot[w.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,ot[w.wrapR]),n.texParameteri(A,10240,gt[w.magFilter]),n.texParameteri(A,10241,gt[w.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(w.wrapS!==Ie||w.wrapT!==Ie)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,P(w.magFilter)),n.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==ue&&w.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(w.type===Rn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ki&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ct(A,w){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",D));const Q=w.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const lt=O(w);if(lt!==A.__cacheKey){et[lt]===void 0&&(et[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),et[lt].usedTimes++;const xt=et[A.__cacheKey];xt!==void 0&&(et[A.__cacheKey].usedTimes--,xt.usedTimes===0&&R(w)),A.__cacheKey=lt,A.__webglTexture=et[lt].texture}return $}function dt(A,w,$){let Q=3553;w.isDataArrayTexture&&(Q=35866),w.isData3DTexture&&(Q=32879);const et=Ct(A,w),lt=w.source;if(e.activeTexture(33984+$),e.bindTexture(Q,A.__webglTexture),lt.version!==lt.__currentVersion||et===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const xt=b(w)&&x(w.image)===!1;let S=y(w.image,xt,!1,u);S=pe(w,S);const K=x(S)||a,nt=s.convert(w.format,w.encoding);let ct=s.convert(w.type),at=M(w.internalFormat,nt,ct,w.encoding,w.isVideoTexture);Y(Q,w,K);let vt;const Tt=w.mipmaps,Ut=a&&w.isVideoTexture!==!0,z=lt.__currentVersion===void 0||et===!0,rt=T(w,S,K);if(w.isDepthTexture)at=6402,a?w.type===Rn?at=36012:w.type===Pn?at=33190:w.type===xi?at=35056:at=33189:w.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Fn&&at===6402&&w.type!==Nc&&w.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Pn,ct=s.convert(w.type)),w.format===Ai&&at===6402&&(at=34041,w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=xi,ct=s.convert(w.type))),z&&(Ut?e.texStorage2D(3553,1,at,S.width,S.height):e.texImage2D(3553,0,at,S.width,S.height,0,nt,ct,null));else if(w.isDataTexture)if(Tt.length>0&&K){Ut&&z&&e.texStorage2D(3553,rt,at,Tt[0].width,Tt[0].height);for(let X=0,ft=Tt.length;X<ft;X++)vt=Tt[X],Ut?e.texSubImage2D(3553,X,0,0,vt.width,vt.height,nt,ct,vt.data):e.texImage2D(3553,X,at,vt.width,vt.height,0,nt,ct,vt.data);w.generateMipmaps=!1}else Ut?(z&&e.texStorage2D(3553,rt,at,S.width,S.height),e.texSubImage2D(3553,0,0,0,S.width,S.height,nt,ct,S.data)):e.texImage2D(3553,0,at,S.width,S.height,0,nt,ct,S.data);else if(w.isCompressedTexture){Ut&&z&&e.texStorage2D(3553,rt,at,Tt[0].width,Tt[0].height);for(let X=0,ft=Tt.length;X<ft;X++)vt=Tt[X],w.format!==Ve?nt!==null?Ut?e.compressedTexSubImage2D(3553,X,0,0,vt.width,vt.height,nt,vt.data):e.compressedTexImage2D(3553,X,at,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage2D(3553,X,0,0,vt.width,vt.height,nt,ct,vt.data):e.texImage2D(3553,X,at,vt.width,vt.height,0,nt,ct,vt.data)}else if(w.isDataArrayTexture)Ut?(z&&e.texStorage3D(35866,rt,at,S.width,S.height,S.depth),e.texSubImage3D(35866,0,0,0,0,S.width,S.height,S.depth,nt,ct,S.data)):e.texImage3D(35866,0,at,S.width,S.height,S.depth,0,nt,ct,S.data);else if(w.isData3DTexture)Ut?(z&&e.texStorage3D(32879,rt,at,S.width,S.height,S.depth),e.texSubImage3D(32879,0,0,0,0,S.width,S.height,S.depth,nt,ct,S.data)):e.texImage3D(32879,0,at,S.width,S.height,S.depth,0,nt,ct,S.data);else if(w.isFramebufferTexture){if(z)if(Ut)e.texStorage2D(3553,rt,at,S.width,S.height);else{let X=S.width,ft=S.height;for(let ut=0;ut<rt;ut++)e.texImage2D(3553,ut,at,X,ft,0,nt,ct,null),X>>=1,ft>>=1}}else if(Tt.length>0&&K){Ut&&z&&e.texStorage2D(3553,rt,at,Tt[0].width,Tt[0].height);for(let X=0,ft=Tt.length;X<ft;X++)vt=Tt[X],Ut?e.texSubImage2D(3553,X,0,0,nt,ct,vt):e.texImage2D(3553,X,at,nt,ct,vt);w.generateMipmaps=!1}else Ut?(z&&e.texStorage2D(3553,rt,at,S.width,S.height),e.texSubImage2D(3553,0,0,0,nt,ct,S)):e.texImage2D(3553,0,at,nt,ct,S);L(w,K)&&I(Q),lt.__currentVersion=lt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function _t(A,w,$){if(w.image.length!==6)return;const Q=Ct(A,w),et=w.source;if(e.activeTexture(33984+$),e.bindTexture(34067,A.__webglTexture),et.version!==et.__currentVersion||Q===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const lt=w.isCompressedTexture||w.image[0].isCompressedTexture,xt=w.image[0]&&w.image[0].isDataTexture,S=[];for(let X=0;X<6;X++)!lt&&!xt?S[X]=y(w.image[X],!1,!0,l):S[X]=xt?w.image[X].image:w.image[X],S[X]=pe(w,S[X]);const K=S[0],nt=x(K)||a,ct=s.convert(w.format,w.encoding),at=s.convert(w.type),vt=M(w.internalFormat,ct,at,w.encoding),Tt=a&&w.isVideoTexture!==!0,Ut=et.__currentVersion===void 0||Q===!0;let z=T(w,K,nt);Y(34067,w,nt);let rt;if(lt){Tt&&Ut&&e.texStorage2D(34067,z,vt,K.width,K.height);for(let X=0;X<6;X++){rt=S[X].mipmaps;for(let ft=0;ft<rt.length;ft++){const ut=rt[ft];w.format!==Ve?ct!==null?Tt?e.compressedTexSubImage2D(34069+X,ft,0,0,ut.width,ut.height,ct,ut.data):e.compressedTexImage2D(34069+X,ft,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(34069+X,ft,0,0,ut.width,ut.height,ct,at,ut.data):e.texImage2D(34069+X,ft,vt,ut.width,ut.height,0,ct,at,ut.data)}}}else{rt=w.mipmaps,Tt&&Ut&&(rt.length>0&&z++,e.texStorage2D(34067,z,vt,S[0].width,S[0].height));for(let X=0;X<6;X++)if(xt){Tt?e.texSubImage2D(34069+X,0,0,0,S[X].width,S[X].height,ct,at,S[X].data):e.texImage2D(34069+X,0,vt,S[X].width,S[X].height,0,ct,at,S[X].data);for(let ft=0;ft<rt.length;ft++){const Dt=rt[ft].image[X].image;Tt?e.texSubImage2D(34069+X,ft+1,0,0,Dt.width,Dt.height,ct,at,Dt.data):e.texImage2D(34069+X,ft+1,vt,Dt.width,Dt.height,0,ct,at,Dt.data)}}else{Tt?e.texSubImage2D(34069+X,0,0,0,ct,at,S[X]):e.texImage2D(34069+X,0,vt,ct,at,S[X]);for(let ft=0;ft<rt.length;ft++){const ut=rt[ft];Tt?e.texSubImage2D(34069+X,ft+1,0,0,ct,at,ut.image[X]):e.texImage2D(34069+X,ft+1,vt,ct,at,ut.image[X])}}}L(w,nt)&&I(34067),et.__currentVersion=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,$,Q,et){const lt=s.convert($.format,$.encoding),xt=s.convert($.type),S=M($.internalFormat,lt,xt,$.encoding);i.get(w).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,S,w.width,w.height,w.depth,0,lt,xt,null):e.texImage2D(et,0,S,w.width,w.height,0,lt,xt,null)),e.bindFramebuffer(36160,A),Ft(w)?f.framebufferTexture2DMultisampleEXT(36160,Q,et,i.get($).__webglTexture,0,$t(w)):n.framebufferTexture2D(36160,Q,et,i.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function Nt(A,w,$){if(n.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if($||Ft(w)){const et=w.depthTexture;et&&et.isDepthTexture&&(et.type===Rn?Q=36012:et.type===Pn&&(Q=33190));const lt=$t(w);Ft(w)?f.renderbufferStorageMultisampleEXT(36161,lt,Q,w.width,w.height):n.renderbufferStorageMultisample(36161,lt,Q,w.width,w.height)}else n.renderbufferStorage(36161,Q,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const Q=$t(w);$&&Ft(w)===!1?n.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Ft(w)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0;et<Q.length;et++){const lt=Q[et],xt=s.convert(lt.format,lt.encoding),S=s.convert(lt.type),K=M(lt.internalFormat,xt,S,lt.encoding),nt=$t(w);$&&Ft(w)===!1?n.renderbufferStorageMultisample(36161,nt,K,w.width,w.height):Ft(w)?f.renderbufferStorageMultisampleEXT(36161,nt,K,w.width,w.height):n.renderbufferStorage(36161,K,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function bt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,et=$t(w);if(w.depthTexture.format===Fn)Ft(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,et):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===Ai)Ft(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,et):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function pt(A){const w=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");bt(w.__webglFramebuffer,A)}else if($){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=n.createRenderbuffer(),Nt(w.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Nt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function Ht(A,w,$){const Q=i.get(A);w!==void 0&&ht(Q.__webglFramebuffer,A,A.texture,36064,3553),$!==void 0&&pt(A)}function Qt(A){const w=A.texture,$=i.get(A),Q=i.get(w);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++);const et=A.isWebGLCubeRenderTarget===!0,lt=A.isWebGLMultipleRenderTargets===!0,xt=x(A)||a;if(et){$.__webglFramebuffer=[];for(let S=0;S<6;S++)$.__webglFramebuffer[S]=n.createFramebuffer()}else{if($.__webglFramebuffer=n.createFramebuffer(),lt)if(r.drawBuffers){const S=A.texture;for(let K=0,nt=S.length;K<nt;K++){const ct=i.get(S[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ft(A)===!1){const S=lt?w:[w];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let K=0;K<S.length;K++){const nt=S[K];$.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(36161,$.__webglColorRenderbuffer[K]);const ct=s.convert(nt.format,nt.encoding),at=s.convert(nt.type),vt=M(nt.internalFormat,ct,at,nt.encoding),Tt=$t(A);n.renderbufferStorageMultisample(36161,Tt,vt,A.width,A.height),n.framebufferRenderbuffer(36160,36064+K,36161,$.__webglColorRenderbuffer[K])}n.bindRenderbuffer(36161,null),A.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt($.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,Q.__webglTexture),Y(34067,w,xt);for(let S=0;S<6;S++)ht($.__webglFramebuffer[S],A,w,36064,34069+S);L(w,xt)&&I(34067),e.unbindTexture()}else if(lt){const S=A.texture;for(let K=0,nt=S.length;K<nt;K++){const ct=S[K],at=i.get(ct);e.bindTexture(3553,at.__webglTexture),Y(3553,ct,xt),ht($.__webglFramebuffer,A,ct,36064+K,3553),L(ct,xt)&&I(3553)}e.unbindTexture()}else{let S=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?S=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(S,Q.__webglTexture),Y(S,w,xt),ht($.__webglFramebuffer,A,w,36064,S),L(w,xt)&&I(S),e.unbindTexture()}A.depthBuffer&&pt(A)}function Xt(A){const w=x(A)||a,$=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,et=$.length;Q<et;Q++){const lt=$[Q];if(L(lt,w)){const xt=A.isWebGLCubeRenderTarget?34067:3553,S=i.get(lt).__webglTexture;e.bindTexture(xt,S),I(xt),e.unbindTexture()}}}function de(A){if(a&&A.samples>0&&Ft(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],$=A.width,Q=A.height;let et=16384;const lt=[],xt=A.stencilBuffer?33306:36096,S=i.get(A),K=A.isWebGLMultipleRenderTargets===!0;if(K)for(let nt=0;nt<w.length;nt++)e.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+nt,36161,null),e.bindFramebuffer(36160,S.__webglFramebuffer),n.framebufferTexture2D(36009,36064+nt,3553,null,0);e.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,S.__webglFramebuffer);for(let nt=0;nt<w.length;nt++){lt.push(36064+nt),A.depthBuffer&&lt.push(xt);const ct=S.__ignoreDepthValues!==void 0?S.__ignoreDepthValues:!1;if(ct===!1&&(A.depthBuffer&&(et|=256),A.stencilBuffer&&(et|=1024)),K&&n.framebufferRenderbuffer(36008,36064,36161,S.__webglColorRenderbuffer[nt]),ct===!0&&(n.invalidateFramebuffer(36008,[xt]),n.invalidateFramebuffer(36009,[xt])),K){const at=i.get(w[nt]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,at,0)}n.blitFramebuffer(0,0,$,Q,0,0,$,Q,et,9728),m&&n.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),K)for(let nt=0;nt<w.length;nt++){e.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+nt,36161,S.__webglColorRenderbuffer[nt]);const ct=i.get(w[nt]).__webglTexture;e.bindFramebuffer(36160,S.__webglFramebuffer),n.framebufferTexture2D(36009,36064+nt,3553,ct,0)}e.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}}function $t(A){return Math.min(h,A.samples)}function Ft(A){const w=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function pe(A,w){const $=A.encoding,Q=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===_a||$!==kn&&($===Gt?a===!1?t.has("EXT_sRGB")===!0&&Q===Ve?(A.format=_a,A.minFilter=Se,A.generateMipmaps=!1):w=zc.sRGBToLinear(w):(Q!==Ve||et!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),w}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=tt,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ft}function py(n,t,e){const i=e.isWebGL2;function r(s,o=null){let a;if(s===Bn)return 5121;if(s===ag)return 32819;if(s===og)return 32820;if(s===ig)return 5120;if(s===rg)return 5122;if(s===Nc)return 5123;if(s===sg)return 5124;if(s===Pn)return 5125;if(s===Rn)return 5126;if(s===Ki)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lg)return 6406;if(s===Ve)return 6408;if(s===ug)return 6409;if(s===hg)return 6410;if(s===Fn)return 6402;if(s===Ai)return 34041;if(s===fg)return 6403;if(s===cg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===_a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dg)return 36244;if(s===pg)return 33319;if(s===mg)return 33320;if(s===gg)return 36249;if(s===gs||s===_s||s===xs||s===vs)if(o===Gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_s)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===No||s===Fo||s===Oo||s===zo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===No)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_g)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uo||s===Bo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Uo)return o===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ko||s===Go||s===Vo||s===Ho||s===Wo||s===qo||s===Xo||s===$o||s===Yo||s===jo||s===Zo||s===Ko||s===Jo||s===Qo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ko)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Go)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ho)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$o)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ko)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qo)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===tl)return o===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===xi?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class my extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gi extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,i);if(l.joints[p.jointName]===void 0){const v=new Gi;v.matrixAutoUpdate=!1,v.visible=!1,l.joints[p.jointName]=v,l.add(v)}const _=l.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class _y extends Oe{constructor(t,e,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Fn,u!==Fn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fn&&(i=Pn),i===void 0&&u===Ai&&(i=xi),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ue,this.minFilter=c!==void 0?c:ue,this.flipY=!1,this.generateMipmaps=!1}}class xy extends Wn{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],v=[],y=new Ee;y.layers.enable(1),y.viewport=new Jt;const x=new Ee;x.layers.enable(2),x.viewport=new Jt;const b=[y,x],L=new my;L.layers.enable(1),L.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=_[O];return W===void 0&&(W=new Ys,_[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=_[O];return W===void 0&&(W=new Ys,_[O]=W),W.getGripSpace()},this.getHand=function(O){let W=_[O];return W===void 0&&(W=new Ys,_[O]=W),W.getHandSpace()};function T(O){const W=v.indexOf(O.inputSource);if(W===-1)return;const tt=_[W];tt!==void 0&&tt.dispatchEvent({type:O.type,data:O.inputSource})}function P(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",D);for(let O=0;O<_.length;O++){const W=v[O];W!==null&&(v[O]=null,_[O].disconnect(W))}I=null,M=null,t.setRenderTarget(p),f=null,h=null,u=null,r=null,d=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",P),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:f}),d=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Ve,type:Bn,encoding:t.outputEncoding})}else{let W=null,tt=null,J=null;g.depth&&(J=g.stencil?35056:33190,W=g.stencil?Ai:Fn,tt=g.stencil?xi:Pn);const it={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(r,e),h=u.createProjectionLayer(it),r.updateRenderState({layers:[h]}),d=new Gn(h.textureWidth,h.textureHeight,{format:Ve,type:Bn,depthTexture:new _y(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const ot=t.properties.get(d);ot.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(O){for(let W=0;W<O.removed.length;W++){const tt=O.removed[W],J=v.indexOf(tt);J>=0&&(v[J]=null,_[J].dispatchEvent({type:"disconnected",data:tt}))}for(let W=0;W<O.added.length;W++){const tt=O.added[W];let J=v.indexOf(tt);if(J===-1){for(let ot=0;ot<_.length;ot++)if(ot>=v.length){v.push(tt),J=ot;break}else if(v[ot]===null){v[ot]=tt,J=ot;break}if(J===-1)break}const it=_[J];it&&it.dispatchEvent({type:"connected",data:tt})}}const B=new U,C=new U;function R(O,W,tt){B.setFromMatrixPosition(W.matrixWorld),C.setFromMatrixPosition(tt.matrixWorld);const J=B.distanceTo(C),it=W.projectionMatrix.elements,ot=tt.projectionMatrix.elements,gt=it[14]/(it[10]-1),Y=it[14]/(it[10]+1),Ct=(it[9]+1)/it[5],dt=(it[9]-1)/it[5],_t=(it[8]-1)/it[0],ht=(ot[8]+1)/ot[0],Nt=gt*_t,bt=gt*ht,pt=J/(-_t+ht),Ht=pt*-_t;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ht),O.translateZ(pt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Qt=gt+pt,Xt=Y+pt,de=Nt-Ht,$t=bt+(J-Ht),Ft=Ct*Y/Xt*Qt,ye=dt*Y/Xt*Qt;O.projectionMatrix.makePerspective(de,$t,Ft,ye,Qt,Xt)}function F(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;L.near=x.near=y.near=O.near,L.far=x.far=y.far=O.far,(I!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,M=L.far);const W=O.parent,tt=L.cameras;F(L,W);for(let it=0;it<tt.length;it++)F(tt[it],W);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),O.position.copy(L.position),O.quaternion.copy(L.quaternion),O.scale.copy(L.scale),O.matrix.copy(L.matrix),O.matrixWorld.copy(L.matrixWorld);const J=O.children;for(let it=0,ot=J.length;it<ot;it++)J[it].updateMatrixWorld(!0);tt.length===2?R(L,y,x):L.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let N=null;function V(O,W){if(l=W.getViewerPose(c||o),m=W,l!==null){const tt=l.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let J=!1;tt.length!==L.cameras.length&&(L.cameras.length=0,J=!0);for(let it=0;it<tt.length;it++){const ot=tt[it];let gt=null;if(f!==null)gt=f.getViewport(ot);else{const Ct=u.getViewSubImage(h,ot);gt=Ct.viewport,it===0&&(t.setRenderTargetTextures(d,Ct.colorTexture,h.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(d))}let Y=b[it];Y===void 0&&(Y=new Ee,Y.layers.enable(it),Y.viewport=new Jt,b[it]=Y),Y.matrix.fromArray(ot.transform.matrix),Y.projectionMatrix.fromArray(ot.projectionMatrix),Y.viewport.set(gt.x,gt.y,gt.width,gt.height),it===0&&L.matrix.copy(Y.matrix),J===!0&&L.cameras.push(Y)}}for(let tt=0;tt<_.length;tt++){const J=v[tt],it=_[tt];J!==null&&it!==void 0&&it.update(J,W,c||o)}N&&N(O,W),m=null}const H=new $c;H.setAnimationLoop(V),this.setAnimationLoop=function(O){N=O},this.dispose=function(){}}}function vy(n,t){function e(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ne&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ne&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ne&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function yy(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function c(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function l(v,y){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",d));const b=y.program;i.updateUBOMapping(v,b);const L=t.render.frame;s[v.id]!==L&&(f(v),s[v.id]=L)}function u(v){const y=h();v.__bindingPointIndex=y;const x=n.createBuffer(),b=v.__size,L=v.usage;return n.bindBuffer(35345,x),n.bufferData(35345,b,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,b=v.__cache;n.bindBuffer(35345,y);for(let L=0,I=x.length;L<I;L++){const M=x[L];if(m(M,L,b)===!0){const T=M.value,P=M.__offset;typeof T=="number"?(M.__data[0]=T,n.bufferSubData(35345,P,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):T.toArray(M.__data),n.bufferSubData(35345,P,M.__data))}}n.bindBuffer(35345,null)}function m(v,y,x){const b=v.value;if(x[y]===void 0)return typeof b=="number"?x[y]=b:x[y]=b.clone(),!0;if(typeof b=="number"){if(x[y]!==b)return x[y]=b,!0}else{const L=x[y];if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;let L=0;for(let I=0,M=y.length;I<M;I++){const T=y[I],P=p(T);if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,I>0){L=x%b;const D=b-L;L!==0&&D-P.boundary<0&&(x+=b-L,T.__offset=x)}x+=P.storage}return L=x%b,L>0&&(x+=b-L),v.__size=x,v.__cache={},this}function p(v){const y=v.value,x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(v){const y=v.target;y.removeEventListener("dispose",d);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:_}}function My(){const n=Zr("canvas");return n.style.display="block",n}function Qc(n={}){this.isWebGLRenderer=!0;const t=n.canvas!==void 0?n.canvas:My(),e=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,v=0,y=null,x=-1,b=null;const L=new Jt,I=new Jt;let M=null,T=t.width,P=t.height,D=1,B=null,C=null;const R=new Jt(0,0,T,P),F=new Jt(0,0,T,P);let N=!1;const V=new Xc;let H=!1,O=!1,W=null;const tt=new jt,J=new At,it=new U,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return y===null?D:1}let Y=e;function Ct(E,k){for(let q=0;q<E.length;q++){const G=E[q],j=t.getContext(G,k);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),Y===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),Y=Ct(k,E),Y===null)throw Ct(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let dt,_t,ht,Nt,bt,pt,Ht,Qt,Xt,de,$t,Ft,ye,pe,A,w,$,Q,et,lt,xt,S,K,nt;function ct(){dt=new Px(Y),_t=new Sx(Y,dt,n),dt.init(_t),S=new py(Y,dt,_t),ht=new fy(Y,dt,_t),Nt=new Nx,bt=new Jv,pt=new dy(Y,dt,ht,bt,_t,S,Nt),Ht=new Ax(p),Qt=new Dx(p),Xt=new qg(Y,_t),K=new bx(Y,dt,Xt,_t),de=new Rx(Y,Xt,Nt,K),$t=new Ux(Y,de,Xt,Nt),et=new zx(Y,_t,pt),w=new Ex(bt),Ft=new Kv(p,Ht,Qt,dt,_t,K,w),ye=new vy(p,bt),pe=new ty,A=new ay(dt,_t),Q=new Mx(p,Ht,ht,$t,u,o),$=new hy(p,$t,_t),nt=new yy(Y,Nt,_t,ht),lt=new wx(Y,dt,Nt,_t),xt=new Ix(Y,dt,Nt,_t),Nt.programs=Ft.programs,p.capabilities=_t,p.extensions=dt,p.properties=bt,p.renderLists=pe,p.shadowMap=$,p.state=ht,p.info=Nt}ct();const at=new xy(p,Y);this.xr=at,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(T,P,!1))},this.getSize=function(E){return E.set(T,P)},this.setSize=function(E,k,q){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,P=k,t.width=Math.floor(E*D),t.height=Math.floor(k*D),q!==!1&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(T*D,P*D).floor()},this.setDrawingBufferSize=function(E,k,q){T=E,P=k,D=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,k,q,G){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,k,q,G),ht.viewport(L.copy(R).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,k,q,G){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,k,q,G),ht.scissor(I.copy(F).multiplyScalar(D).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){ht.setScissorTest(N=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){C=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,k=!0,q=!0){let G=0;E&&(G|=16384),k&&(G|=256),q&&(G|=1024),Y.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),pe.dispose(),A.dispose(),bt.dispose(),Ht.dispose(),Qt.dispose(),$t.dispose(),K.dispose(),nt.dispose(),Ft.dispose(),at.dispose(),at.removeEventListener("sessionstart",Dt),at.removeEventListener("sessionend",Zt),W&&(W.dispose(),W=null),Vt.stop()};function vt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Nt.autoReset,k=$.enabled,q=$.autoUpdate,G=$.needsUpdate,j=$.type;ct(),Nt.autoReset=E,$.enabled=k,$.autoUpdate=q,$.needsUpdate=G,$.type=j}function Ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function z(E){const k=E.target;k.removeEventListener("dispose",z),rt(k)}function rt(E){X(E),bt.remove(E)}function X(E){const k=bt.get(E).programs;k!==void 0&&(k.forEach(function(q){Ft.releaseProgram(q)}),E.isShaderMaterial&&Ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,G,j,yt){k===null&&(k=ot);const Mt=j.isMesh&&j.matrixWorld.determinant()<0,St=su(E,k,q,G,j);ht.setMaterial(G,Mt);let wt=q.index;const Ot=q.attributes.position;if(wt===null){if(Ot===void 0||Ot.count===0)return}else if(wt.count===0)return;let Lt=1;G.wireframe===!0&&(wt=de.getWireframeAttribute(q),Lt=2),K.setup(j,G,St,q,wt);let Pt,kt=lt;wt!==null&&(Pt=Xt.get(wt),kt=xt,kt.setIndex(Pt));const yn=wt!==null?wt.count:Ot.count,qn=q.drawRange.start*Lt,Xn=q.drawRange.count*Lt,Be=yt!==null?yt.start*Lt:0,It=yt!==null?yt.count*Lt:1/0,$n=Math.max(qn,Be),Wt=Math.min(yn,qn+Xn,Be+It)-1,be=Math.max(0,Wt-$n+1);if(be!==0){if(j.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*gt()),kt.setMode(1)):kt.setMode(4);else if(j.isLine){let an=G.linewidth;an===void 0&&(an=1),ht.setLineWidth(an*gt()),j.isLineSegments?kt.setMode(1):j.isLineLoop?kt.setMode(2):kt.setMode(3)}else j.isPoints?kt.setMode(0):j.isSprite&&kt.setMode(4);if(j.isInstancedMesh)kt.renderInstances($n,be,j.count);else if(q.isInstancedBufferGeometry){const an=Math.min(q.instanceCount,q._maxInstanceCount);kt.renderInstances($n,be,an)}else kt.render($n,be)}},this.compile=function(E,k){f=A.get(E),f.init(),g.push(f),E.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(q){const G=q.material;if(G)if(Array.isArray(G))for(let j=0;j<G.length;j++){const yt=G[j];ss(yt,E,q)}else ss(G,E,q)}),g.pop(),f=null};let ft=null;function ut(E){ft&&ft(E)}function Dt(){Vt.stop()}function Zt(){Vt.start()}const Vt=new $c;Vt.setAnimationLoop(ut),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(E){ft=E,at.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},at.addEventListener("sessionstart",Dt),at.addEventListener("sessionend",Zt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(k),k=at.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,y),f=A.get(E,g.length),f.init(),g.push(f),tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(tt),O=this.localClippingEnabled,H=w.init(this.clippingPlanes,O,k),h=pe.get(E,m.length),h.init(),m.push(h),sn(E,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(B,C),H===!0&&w.beginShadows();const q=f.state.shadowsArray;if($.render(q,E,k),H===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,E),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const G=k.cameras;for(let j=0,yt=G.length;j<yt;j++){const Mt=G[j];Bt(h,E,Mt,Mt.viewport)}}else Bt(h,E,k);y!==null&&(pt.updateMultisampleRenderTarget(y),pt.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,k),K.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function sn(E,k,q,G){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){G&&it.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const Mt=$t.update(E),St=E.material;St.visible&&h.push(E,Mt,St,q,it.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Nt.render.frame&&(E.skeleton.update(),E.skeleton.frame=Nt.render.frame),!E.frustumCulled||V.intersectsObject(E))){G&&it.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const Mt=$t.update(E),St=E.material;if(Array.isArray(St)){const wt=Mt.groups;for(let Ot=0,Lt=wt.length;Ot<Lt;Ot++){const Pt=wt[Ot],kt=St[Pt.materialIndex];kt&&kt.visible&&h.push(E,Mt,kt,q,it.z,Pt)}}else St.visible&&h.push(E,Mt,St,q,it.z,null)}}const yt=E.children;for(let Mt=0,St=yt.length;Mt<St;Mt++)sn(yt[Mt],k,q,G)}function Bt(E,k,q,G){const j=E.opaque,yt=E.transmissive,Mt=E.transparent;f.setupLightsView(q),yt.length>0&&Xe(j,k,q),G&&ht.viewport(L.copy(G)),j.length>0&&Me(j,k,q),yt.length>0&&Me(yt,k,q),Mt.length>0&&Me(Mt,k,q),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Xe(E,k,q){const G=_t.isWebGL2;W===null&&(W=new Gn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")?Ki:Bn,minFilter:is,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(J),G?W.setSize(J.x,J.y):W.setSize(xa(J.x),xa(J.y));const j=p.getRenderTarget();p.setRenderTarget(W),p.clear();const yt=p.toneMapping;p.toneMapping=nn,Me(E,k,q),p.toneMapping=yt,pt.updateMultisampleRenderTarget(W),pt.updateRenderTargetMipmap(W),p.setRenderTarget(j)}function Me(E,k,q){const G=k.isScene===!0?k.overrideMaterial:null;for(let j=0,yt=E.length;j<yt;j++){const Mt=E[j],St=Mt.object,wt=Mt.geometry,Ot=G===null?Mt.material:G,Lt=Mt.group;St.layers.test(q.layers)&&ru(St,k,q,wt,Ot,Lt)}}function ru(E,k,q,G,j,yt){E.onBeforeRender(p,k,q,G,j,yt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(p,k,q,G,E,yt),j.transparent===!0&&j.side===wi?(j.side=Ne,j.needsUpdate=!0,p.renderBufferDirect(q,k,G,j,E,yt),j.side=Zi,j.needsUpdate=!0,p.renderBufferDirect(q,k,G,j,E,yt),j.side=wi):p.renderBufferDirect(q,k,G,j,E,yt),E.onAfterRender(p,k,q,G,j,yt)}function ss(E,k,q){k.isScene!==!0&&(k=ot);const G=bt.get(E),j=f.state.lights,yt=f.state.shadowsArray,Mt=j.state.version,St=Ft.getParameters(E,j.state,yt,k,q),wt=Ft.getProgramCacheKey(St);let Ot=G.programs;G.environment=E.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(E.isMeshStandardMaterial?Qt:Ht).get(E.envMap||G.environment),Ot===void 0&&(E.addEventListener("dispose",z),Ot=new Map,G.programs=Ot);let Lt=Ot.get(wt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===Mt)return Ha(E,St),Lt}else St.uniforms=Ft.getUniforms(E),E.onBuild(q,St,p),E.onBeforeCompile(St,p),Lt=Ft.acquireProgram(St,wt),Ot.set(wt,Lt),G.uniforms=St.uniforms;const Pt=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=w.uniform),Ha(E,St),G.needsLights=ou(E),G.lightsStateVersion=Mt,G.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.directionalShadowMap.value=j.state.directionalShadowMap,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotShadowMap.value=j.state.spotShadowMap,Pt.spotShadowMatrix.value=j.state.spotShadowMatrix,Pt.pointShadowMap.value=j.state.pointShadowMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix);const kt=Lt.getUniforms(),yn=Br.seqWithValue(kt.seq,Pt);return G.currentProgram=Lt,G.uniformsList=yn,Lt}function Ha(E,k){const q=bt.get(E);q.outputEncoding=k.outputEncoding,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function su(E,k,q,G,j){k.isScene!==!0&&(k=ot),pt.resetTextureUnits();const yt=k.fog,Mt=G.isMeshStandardMaterial?k.environment:null,St=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:kn,wt=(G.isMeshStandardMaterial?Qt:Ht).get(G.envMap||Mt),Ot=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!G.normalMap&&!!q.attributes.tangent,Pt=!!q.morphAttributes.position,kt=!!q.morphAttributes.normal,yn=!!q.morphAttributes.color,qn=G.toneMapped?p.toneMapping:nn,Xn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Be=Xn!==void 0?Xn.length:0,It=bt.get(G),$n=f.state.lights;if(H===!0&&(O===!0||E!==b)){const me=E===b&&G.id===x;w.setState(G,E,me)}let Wt=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==$n.state.version||It.outputEncoding!==St||j.isInstancedMesh&&It.instancing===!1||!j.isInstancedMesh&&It.instancing===!0||j.isSkinnedMesh&&It.skinning===!1||!j.isSkinnedMesh&&It.skinning===!0||It.envMap!==wt||G.fog===!0&&It.fog!==yt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==w.numPlanes||It.numIntersection!==w.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Lt||It.morphTargets!==Pt||It.morphNormals!==kt||It.morphColors!==yn||It.toneMapping!==qn||_t.isWebGL2===!0&&It.morphTargetsCount!==Be)&&(Wt=!0):(Wt=!0,It.__version=G.version);let be=It.currentProgram;Wt===!0&&(be=ss(G,k,j));let an=!1,Di=!1,as=!1;const ie=be.getUniforms(),Pi=It.uniforms;if(ht.useProgram(be.program)&&(an=!0,Di=!0,as=!0),G.id!==x&&(x=G.id,Di=!0),an||b!==E){if(ie.setValue(Y,"projectionMatrix",E.projectionMatrix),_t.logarithmicDepthBuffer&&ie.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Di=!0,as=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const me=ie.map.cameraPosition;me!==void 0&&me.setValue(Y,it.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||j.isSkinnedMesh)&&ie.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){ie.setOptional(Y,j,"bindMatrix"),ie.setOptional(Y,j,"bindMatrixInverse");const me=j.skeleton;me&&(_t.floatVertexTextures?(me.boneTexture===null&&me.computeBoneTexture(),ie.setValue(Y,"boneTexture",me.boneTexture,pt),ie.setValue(Y,"boneTextureSize",me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const os=q.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&_t.isWebGL2===!0)&&et.update(j,q,G,be),(Di||It.receiveShadow!==j.receiveShadow)&&(It.receiveShadow=j.receiveShadow,ie.setValue(Y,"receiveShadow",j.receiveShadow)),Di&&(ie.setValue(Y,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&au(Pi,as),yt&&G.fog===!0&&ye.refreshFogUniforms(Pi,yt),ye.refreshMaterialUniforms(Pi,G,D,P,W),Br.upload(Y,It.uniformsList,Pi,pt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Br.upload(Y,It.uniformsList,Pi,pt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(Y,"center",j.center),ie.setValue(Y,"modelViewMatrix",j.modelViewMatrix),ie.setValue(Y,"normalMatrix",j.normalMatrix),ie.setValue(Y,"modelMatrix",j.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const me=G.uniformsGroups;for(let ls=0,lu=me.length;ls<lu;ls++)if(_t.isWebGL2){const Wa=me[ls];nt.update(Wa,be),nt.bind(Wa,be)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return be}function au(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ou(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,k,q){bt.get(E.texture).__webglTexture=k,bt.get(E.depthTexture).__webglTexture=q;const G=bt.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const q=bt.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){y=E,_=k,v=q;let G=!0;if(E){const wt=bt.get(E);wt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),G=!1):wt.__webglFramebuffer===void 0?pt.setupRenderTarget(E):wt.__hasExternalTextures&&pt.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture)}let j=null,yt=!1,Mt=!1;if(E){const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture)&&(Mt=!0);const Ot=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Ot[k],yt=!0):_t.isWebGL2&&E.samples>0&&pt.useMultisampledRTT(E)===!1?j=bt.get(E).__webglMultisampledFramebuffer:j=Ot,L.copy(E.viewport),I.copy(E.scissor),M=E.scissorTest}else L.copy(R).multiplyScalar(D).floor(),I.copy(F).multiplyScalar(D).floor(),M=N;if(ht.bindFramebuffer(36160,j)&&_t.drawBuffers&&G&&ht.drawBuffers(E,j),ht.viewport(L),ht.scissor(I),ht.setScissorTest(M),yt){const wt=bt.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+k,wt.__webglTexture,q)}else if(Mt){const wt=bt.get(E.texture),Ot=k||0;Y.framebufferTextureLayer(36160,36064,wt.__webglTexture,q||0,Ot)}x=-1},this.readRenderTargetPixels=function(E,k,q,G,j,yt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){ht.bindFramebuffer(36160,St);try{const wt=E.texture,Ot=wt.format,Lt=wt.type;if(Ot!==Ve&&S.convert(Ot)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Lt===Ki&&(dt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&dt.has("EXT_color_buffer_float"));if(Lt!==Bn&&S.convert(Lt)!==Y.getParameter(35738)&&!(Lt===Rn&&(_t.isWebGL2||dt.has("OES_texture_float")||dt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-G&&q>=0&&q<=E.height-j&&Y.readPixels(k,q,G,j,S.convert(Ot),S.convert(Lt),yt)}finally{const wt=y!==null?bt.get(y).__webglFramebuffer:null;ht.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(E,k,q=0){const G=Math.pow(2,-q),j=Math.floor(k.image.width*G),yt=Math.floor(k.image.height*G);pt.setTexture2D(k,0),Y.copyTexSubImage2D(3553,q,0,0,E.x,E.y,j,yt),ht.unbindTexture()},this.copyTextureToTexture=function(E,k,q,G=0){const j=k.image.width,yt=k.image.height,Mt=S.convert(q.format),St=S.convert(q.type);pt.setTexture2D(q,0),Y.pixelStorei(37440,q.flipY),Y.pixelStorei(37441,q.premultiplyAlpha),Y.pixelStorei(3317,q.unpackAlignment),k.isDataTexture?Y.texSubImage2D(3553,G,E.x,E.y,j,yt,Mt,St,k.image.data):k.isCompressedTexture?Y.compressedTexSubImage2D(3553,G,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Mt,k.mipmaps[0].data):Y.texSubImage2D(3553,G,E.x,E.y,Mt,St,k.image),G===0&&q.generateMipmaps&&Y.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q,G,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=E.max.x-E.min.x+1,Mt=E.max.y-E.min.y+1,St=E.max.z-E.min.z+1,wt=S.convert(G.format),Ot=S.convert(G.type);let Lt;if(G.isData3DTexture)pt.setTexture3D(G,0),Lt=32879;else if(G.isDataArrayTexture)pt.setTexture2DArray(G,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,G.flipY),Y.pixelStorei(37441,G.premultiplyAlpha),Y.pixelStorei(3317,G.unpackAlignment);const Pt=Y.getParameter(3314),kt=Y.getParameter(32878),yn=Y.getParameter(3316),qn=Y.getParameter(3315),Xn=Y.getParameter(32877),Be=q.isCompressedTexture?q.mipmaps[0]:q.image;Y.pixelStorei(3314,Be.width),Y.pixelStorei(32878,Be.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?Y.texSubImage3D(Lt,j,k.x,k.y,k.z,yt,Mt,St,wt,Ot,Be.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Lt,j,k.x,k.y,k.z,yt,Mt,St,wt,Be.data)):Y.texSubImage3D(Lt,j,k.x,k.y,k.z,yt,Mt,St,wt,Ot,Be),Y.pixelStorei(3314,Pt),Y.pixelStorei(32878,kt),Y.pixelStorei(3316,yn),Y.pixelStorei(3315,qn),Y.pixelStorei(32877,Xn),j===0&&G.generateMipmaps&&Y.generateMipmap(Lt),ht.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?pt.setTextureCube(E,0):E.isData3DTexture?pt.setTexture3D(E,0):E.isDataArrayTexture?pt.setTexture2DArray(E,0):pt.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,ht.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class by extends Qc{}by.prototype.isWebGL1Renderer=!0;class wy extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class tu extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ul=new U,Bl=new U,kl=new jt,js=new ka,Pr=new nr;class Sy extends ve{constructor(t=new ze,e=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ul.fromBufferAttribute(e,r-1),Bl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Bl);t.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=s,t.ray.intersectsSphere(Pr)===!1)return;kl.copy(r).invert(),js.copy(t.ray).applyMatrix4(kl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new U,u=new U,h=new U,f=new U,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=_,x=v-1;y<x;y+=m){const b=g.getX(y),L=g.getX(y+1);if(l.fromBufferAttribute(d,b),u.fromBufferAttribute(d,L),js.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let y=_,x=v-1;y<x;y+=m){if(l.fromBufferAttribute(d,y),u.fromBufferAttribute(d,y+1),js.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class eu extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gl=new jt,ya=new ka,Rr=new nr,Ir=new U;class Ey extends ve{constructor(t=new ze,e=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Rr.radius+=s,t.ray.intersectsSphere(Rr)===!1)return;Gl.copy(r).invert(),ya.copy(t.ray).applyMatrix4(Gl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const d=l.getX(g);Ir.fromBufferAttribute(h,d),Vl(Ir,d,c,r,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m;g<p;g++)Ir.fromBufferAttribute(h,g),Vl(Ir,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vl(n,t,e,i,r,s,o){const a=ya.distanceSqToPoint(n);if(a<e){const c=new U;ya.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Hl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Wl={type:"change"},Zs={type:"start"},ql={type:"end"};class Ay extends Wn{constructor(t,e){super(),e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",pe),this._domElementKeyEvents=S},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wl),i.update(),s=r.NONE},this.update=function(){const S=new U,K=new Vn().setFromUnitVectors(t.up,new U(0,1,0)),nt=K.clone().invert(),ct=new U,at=new Vn,vt=2*Math.PI;return function(){const Ut=i.object.position;S.copy(Ut).sub(i.target),S.applyQuaternion(K),a.setFromVector3(S),i.autoRotate&&s===r.NONE&&T(I()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let z=i.minAzimuthAngle,rt=i.maxAzimuthAngle;return isFinite(z)&&isFinite(rt)&&(z<-Math.PI?z+=vt:z>Math.PI&&(z-=vt),rt<-Math.PI?rt+=vt:rt>Math.PI&&(rt-=vt),z<=rt?a.theta=Math.max(z,Math.min(rt,a.theta)):a.theta=a.theta>(z+rt)/2?Math.max(z,a.theta):Math.min(rt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),S.setFromSpherical(a),S.applyQuaternion(nt),Ut.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||ct.distanceToSquared(i.object.position)>o||8*(1-at.dot(i.object.quaternion))>o?(i.dispatchEvent(Wl),ct.copy(i.object.position),at.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$),i.domElement.removeEventListener("pointerdown",Ht),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",ye),i.domElement.removeEventListener("pointermove",Qt),i.domElement.removeEventListener("pointerup",Xt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",pe)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hl,c=new Hl;let l=1;const u=new U;let h=!1;const f=new At,m=new At,g=new At,p=new At,d=new At,_=new At,v=new At,y=new At,x=new At,b=[],L={};function I(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function T(S){c.theta-=S}function P(S){c.phi-=S}const D=function(){const S=new U;return function(nt,ct){S.setFromMatrixColumn(ct,0),S.multiplyScalar(-nt),u.add(S)}}(),B=function(){const S=new U;return function(nt,ct){i.screenSpacePanning===!0?S.setFromMatrixColumn(ct,1):(S.setFromMatrixColumn(ct,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(nt),u.add(S)}}(),C=function(){const S=new U;return function(nt,ct){const at=i.domElement;if(i.object.isPerspectiveCamera){const vt=i.object.position;S.copy(vt).sub(i.target);let Tt=S.length();Tt*=Math.tan(i.object.fov/2*Math.PI/180),D(2*nt*Tt/at.clientHeight,i.object.matrix),B(2*ct*Tt/at.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(nt*(i.object.right-i.object.left)/i.object.zoom/at.clientWidth,i.object.matrix),B(ct*(i.object.top-i.object.bottom)/i.object.zoom/at.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function R(S){i.object.isPerspectiveCamera?l/=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*S)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(S){i.object.isPerspectiveCamera?l*=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/S)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(S){f.set(S.clientX,S.clientY)}function V(S){v.set(S.clientX,S.clientY)}function H(S){p.set(S.clientX,S.clientY)}function O(S){m.set(S.clientX,S.clientY),g.subVectors(m,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;T(2*Math.PI*g.x/K.clientHeight),P(2*Math.PI*g.y/K.clientHeight),f.copy(m),i.update()}function W(S){y.set(S.clientX,S.clientY),x.subVectors(y,v),x.y>0?R(M()):x.y<0&&F(M()),v.copy(y),i.update()}function tt(S){d.set(S.clientX,S.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),C(_.x,_.y),p.copy(d),i.update()}function J(S){S.deltaY<0?F(M()):S.deltaY>0&&R(M()),i.update()}function it(S){let K=!1;switch(S.code){case i.keys.UP:C(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:C(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:C(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:C(-i.keyPanSpeed,0),K=!0;break}K&&(S.preventDefault(),i.update())}function ot(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const S=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);f.set(S,K)}}function gt(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const S=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);p.set(S,K)}}function Y(){const S=b[0].pageX-b[1].pageX,K=b[0].pageY-b[1].pageY,nt=Math.sqrt(S*S+K*K);v.set(0,nt)}function Ct(){i.enableZoom&&Y(),i.enablePan&&gt()}function dt(){i.enableZoom&&Y(),i.enableRotate&&ot()}function _t(S){if(b.length==1)m.set(S.pageX,S.pageY);else{const nt=xt(S),ct=.5*(S.pageX+nt.x),at=.5*(S.pageY+nt.y);m.set(ct,at)}g.subVectors(m,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;T(2*Math.PI*g.x/K.clientHeight),P(2*Math.PI*g.y/K.clientHeight),f.copy(m)}function ht(S){if(b.length===1)d.set(S.pageX,S.pageY);else{const K=xt(S),nt=.5*(S.pageX+K.x),ct=.5*(S.pageY+K.y);d.set(nt,ct)}_.subVectors(d,p).multiplyScalar(i.panSpeed),C(_.x,_.y),p.copy(d)}function Nt(S){const K=xt(S),nt=S.pageX-K.x,ct=S.pageY-K.y,at=Math.sqrt(nt*nt+ct*ct);y.set(0,at),x.set(0,Math.pow(y.y/v.y,i.zoomSpeed)),R(x.y),v.copy(y)}function bt(S){i.enableZoom&&Nt(S),i.enablePan&&ht(S)}function pt(S){i.enableZoom&&Nt(S),i.enableRotate&&_t(S)}function Ht(S){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",Qt),i.domElement.addEventListener("pointerup",Xt)),Q(S),S.pointerType==="touch"?A(S):$t(S))}function Qt(S){i.enabled!==!1&&(S.pointerType==="touch"?w(S):Ft(S))}function Xt(S){et(S),b.length===0&&(i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",Qt),i.domElement.removeEventListener("pointerup",Xt)),i.dispatchEvent(ql),s=r.NONE}function de(S){et(S)}function $t(S){let K;switch(S.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Zn.DOLLY:if(i.enableZoom===!1)return;V(S),s=r.DOLLY;break;case Zn.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;H(S),s=r.PAN}else{if(i.enableRotate===!1)return;N(S),s=r.ROTATE}break;case Zn.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;N(S),s=r.ROTATE}else{if(i.enablePan===!1)return;H(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Zs)}function Ft(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;O(S);break;case r.DOLLY:if(i.enableZoom===!1)return;W(S);break;case r.PAN:if(i.enablePan===!1)return;tt(S);break}}function ye(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(Zs),J(S),i.dispatchEvent(ql))}function pe(S){i.enabled===!1||i.enablePan===!1||it(S)}function A(S){switch(lt(S),b.length){case 1:switch(i.touches.ONE){case Kn.ROTATE:if(i.enableRotate===!1)return;ot(),s=r.TOUCH_ROTATE;break;case Kn.PAN:if(i.enablePan===!1)return;gt(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Kn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ct(),s=r.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;dt(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Zs)}function w(S){switch(lt(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;_t(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ht(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;bt(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pt(S),i.update();break;default:s=r.NONE}}function $(S){i.enabled!==!1&&S.preventDefault()}function Q(S){b.push(S)}function et(S){delete L[S.pointerId];for(let K=0;K<b.length;K++)if(b[K].pointerId==S.pointerId){b.splice(K,1);return}}function lt(S){let K=L[S.pointerId];K===void 0&&(K=new At,L[S.pointerId]=K),K.set(S.pageX,S.pageY)}function xt(S){const K=S.pointerId===b[0].pointerId?b[1]:b[0];return L[K.pointerId]}i.domElement.addEventListener("contextmenu",$),i.domElement.addEventListener("pointerdown",Ht),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",ye,{passive:!1}),this.update()}}const Ty="rgb(3, 218, 197)",Ks="rgb(3, 218, 197)",Cy=[fetch("../data/json/df_structures.json"),fetch("../data/json/df_modifications.json"),fetch("../data/json/df_nearest_neighbors.json")];Promise.all(Cy).then(n=>Promise.all(n.map(t=>t.json()))).then(n=>Ly(n[0],n[1],n[2]));let vi={},Z={},mt={};function Ly(n,t,e){vi.structures_raw=n,vi.modifications_raw=t,vi.neighbors_raw=e;let i=new Map;n.forEach(s=>{i.has(s.UniAcc)||i.set(s.UniAcc,{Protein:s.Protein,Species:s.Species,Gene:s.Gene})});let r=document.getElementById("dataset-picker");Array.from(i.entries()).forEach(s=>{let o=document.createElement("option");o.value=s[0],o.text=`${s[0]} - ${s[1].Protein} (${s[1].Species})`,r.appendChild(o)}),r.addEventListener("change",function(){let s=document.getElementById("dataset-picker");Xl(s.value),en()}),window.addEventListener("resize",function(){mn(),en()}),Xl(r.value),en()}function Xl(n){Dy(n),Py(),mn()}function en(){ba(),Ry()}function Dy(n){Z.structure=vi.structures_raw.filter(t=>t.UniAcc==n),Z.modifications=vi.modifications_raw.filter(t=>t.UniAcc==n),Z.neighbors=vi.neighbors_raw.filter(t=>t.UniAcc==n),Z.structure=Z.structure.map(t=>{let e=t;return e.has_pathogenic=e.num_mods_pathogenic>0,e}),Z.num_residues=Z.structure.length,Z.selected_residues=new Map,Z.available_color_vars=["RES","secondary_structure","has_pathogenic"],Z.color_var=Z.available_color_vars[0],Z.available_num_vars=Object.keys(Z.structure[0]).filter(t=>t.includes("num")),Z.num_var=Z.available_num_vars[0],Z.available_ribbon_color_vars=["distance_ca"],Z.ribbon_color_var=Z.available_ribbon_color_vars[0],Z.ordinal_var_maps={},Z.ordinal_var_maps.RES=new Map,Z.structure.forEach(t=>{if(!Z.ordinal_var_maps.RES.has(t.RES))Z.ordinal_var_maps.RES.set(t.RES,{RES_name:t.RES_name,num:1});else{const e=Z.ordinal_var_maps.RES.get(t.RES);Z.ordinal_var_maps.RES.set(t.RES,{RES_name:e.RES_name,num:e.num+1})}}),Z.ordinal_var_maps.secondary_structure=new Map,Z.structure.forEach(t=>{if(!Z.ordinal_var_maps.secondary_structure.has(t.secondary_structure))Z.ordinal_var_maps.secondary_structure.set(t.secondary_structure,{num:1});else{const e=Z.ordinal_var_maps.secondary_structure.get(t.secondary_structure);Z.ordinal_var_maps.secondary_structure.set(t.secondary_structure,{num:e.num+1})}}),Z.ordinal_var_maps.has_pathogenic=new Map,Z.structure.forEach(t=>{if(!Z.ordinal_var_maps.has_pathogenic.has(t.has_pathogenic))Z.ordinal_var_maps.has_pathogenic.set(t.has_pathogenic,{num:1});else{const e=Z.ordinal_var_maps.has_pathogenic.get(t.has_pathogenic);Z.ordinal_var_maps.has_pathogenic.set(t.has_pathogenic,{num:e.num+1})}}),Z.unique_modifications=new Map,Z.modifications.forEach(t=>{if(!Z.unique_modifications.has(t.MOD))Z.unique_modifications.set(t.MOD,{num:1});else{const e=Z.unique_modifications.get(t.MOD);Z.unique_modifications.set(t.MOD,{num:e.num+1})}}),Ma()}function Ma(){Z.structure_map=new Map,Z.structure.forEach(n=>Z.structure_map.set(n.POS,n)),Z.modifications_map=new Map,Array.from(Z.structure_map.keys()).forEach(n=>Z.modifications_map.set(n,[])),Z.modifications.forEach(n=>Z.modifications_map.get(n.POS).push(n)),Z.neighbors_map=new Map,Array.from(Z.structure_map.keys()).forEach(n=>Z.neighbors_map.set(n,[])),Z.neighbors.forEach(n=>Z.neighbors_map.get(n.POS_x).push({POS:n.POS_y,value:n.distance_ca})),Array.from(Z.neighbors_map.keys()).forEach(n=>{let t=Z.neighbors_map.get(n);t.sort((e,i)=>Vi(e.value,i.value)),mt.neighborhood_restriction_type==="knn"?Z.neighbors_map.set(n,t.slice(0,mt.neighborhood_restriction_value)):mt.neighborhood_restriction_type==="radius"&&(t=t.filter(e=>e.value<=mt.neighborhood_restriction_value),Z.neighbors_map.set(n,t))})}function mn(){mt.app_width=document.getElementById("app").offsetWidth,mt.app_height=document.getElementById("app").offsetHeight,mt.options_panel_width=document.getElementById("options-panel").offsetWidth,mt.options_panel_height=document.getElementById("options-panel").offsetHeight,mt.main_panel_width=document.getElementById("main-panel").offsetWidth,mt.main_panel_height=document.getElementById("main-panel").offsetHeight,mt.main_panel_square_size=Math.min(mt.main_panel_width,mt.main_panel_height),mt.side_panel_width=document.getElementById("side-panel").offsetWidth,mt.side_panel_height=document.getElementById("side-panel").offsetHeight,mt.side_panel_top_width=document.getElementById("side-panel-top").offsetWidth,mt.side_panel_top_height=document.getElementById("side-panel-top").offsetHeight,mt.side_panel_bottom_width=document.getElementById("side-panel-bottom-vis").offsetWidth,mt.side_panel_bottom_height=document.getElementById("side-panel-bottom-vis").offsetHeight,mt.inspection_mode=document.getElementById("inspection-mode-select").value,mt.neighborhood_restriction_type=document.getElementById("select-neighborhood-type").value,mt.neighborhood_restriction_value=+document.getElementById("restriction-input").value,mt.structure_vis={},mt.structure_vis.min_radius=.8*mt.main_panel_square_size/2,mt.structure_vis.max_radius=1*mt.main_panel_square_size/2,mt.scale_color=es().domain(Array.from(Z.ordinal_var_maps[Z.color_var].keys())),mt.scale_color_ribbons=Ua().domain([0,Hi(Z.neighbors,n=>n[Z.ribbon_color_var])]),mt.scale_num=Yi().domain([0,Hi(Z.structure,n=>n[Z.num_var])])}function Py(){const n=document.getElementById("inspection-mode-select").cloneNode(!0);document.getElementById("inspection-mode-select").replaceWith(n),n.addEventListener("change",function(){mt.inspection_mode=n.value,mn(),en()});const t=document.getElementById("select-arcs-colors").cloneNode(!0);document.getElementById("select-arcs-colors").replaceWith(t),t.innerHTML="",Z.available_color_vars.forEach(l=>{const u=document.createElement("option");u.value=l,u.text=l,t.appendChild(u)}),t.addEventListener("change",function(){Z.color_var=t.value,mn(),en()});const e=document.getElementById("select-arcs-height").cloneNode(!0);document.getElementById("select-arcs-height").replaceWith(e),e.innerHTML="",Z.available_num_vars.forEach(l=>{const u=document.createElement("option");u.value=l,u.text=l,e.appendChild(u)}),e.addEventListener("change",function(){Z.num_var=e.value,mn(),en()});const i=document.getElementById("select-ribbon-colors").cloneNode(!0);document.getElementById("select-ribbon-colors").replaceWith(i),i.innerHTML="",Z.available_ribbon_color_vars.forEach(l=>{const u=document.createElement("option");u.value=l,u.text=l,i.appendChild(u)}),i.addEventListener("change",function(){Z.ribbon_color_var=i.value,mn(),en()});const r=document.getElementById("select-neighborhood-type").cloneNode(!0);document.getElementById("select-neighborhood-type").replaceWith(r);const s=document.getElementById("restriction-input").cloneNode(!0);document.getElementById("restriction-input").replaceWith(s);function o(){const l=document.getElementById("restriction-input-labels");l.innerHTML=`
            <span>${s.min}</span> < 
            <span>${s.value}</span> > 
            <span>${s.max}</span>  
        `}function a(l){l==="knn"?(s.min=0,s.max=30,s.step=1,s.value=s.max):l==="radius"&&(s.min=0,s.max=Hi(Z.neighbors,u=>u.distance_ca),s.step=s.max/parseInt(s.max),s.value=s.max),o()}a(r.value),r.addEventListener("change",function(){a(r.value),mn(),Ma(),ba()}),s.addEventListener("input",function(){o(),mn(),Ma(),ba()});const c=document.getElementById("button-clear-selection").cloneNode(!0);document.getElementById("button-clear-selection").replaceWith(c),c.addEventListener("click",function(){console.log("clear selection"),Z.selected_residues=new Map,en()})}function ba(){const n=mt.main_panel_width,t=mt.main_panel_height;let e,i;Rt("#main-panel #svg-residues").empty()?e=Rt("#main-panel").append("svg").attr("id","svg-residues"):(e=Rt("#svg-residues"),e.selectAll("*").remove()),e.attr("width",n).attr("height",t).attr("style","position: absolute; top: 0; left: 0;"),Rt("#main-panel #svg-neighborhoods").empty()?i=Rt("#main-panel").append("svg").attr("id","svg-neighborhoods"):(i=Rt("#svg-neighborhoods"),i.selectAll("*").remove()),i.attr("width",n).attr("height",t).attr("style","position: absolute; top: 0; left: 0;"),mt.inspection_mode==="residues"?(console.log("Residues"),e.attr("style","z-index: 1;"),i.attr("style","z-index: 0;")):mt.inspection_mode==="neighborhoods"&&(console.log("Neighborhoods"),e.attr("style","z-index: 0;"),i.attr("style","z-index: 1;")),nu(),iu()}function nu(){const n=Z.structure,t=Z.structure_map,e=Z.neighbors_map,i=mt.main_panel_width,r=mt.main_panel_height;let s=Rt("#svg-residues");s.selectAll("*").remove();const o=mt.structure_vis.min_radius,c=mt.structure_vis.max_radius-o,l=.07,u=.01,h=1-(2*l+2*u),f=o,m=f+l*c,g=m+u*c,p=g+l*c,d=p+u*c,_=d+h*c,v=Z.color_var,y=Z.num_var,x=mt.scale_num.range([d,_]),b=mt.scale_color.range(Cc),L=Ua().domain(mu(n,F=>+F.POS)).interpolator(gm),I=t.size;let M=new Array(I);for(let F=0;F<I;F++){M[F]=new Array(I);for(let N=0;N<I;N++)M[F][N]=0;e.get(F).forEach(N=>M[F][N.POS]=1)}let P=np()(M),D,B,R=s.append("g").attr("id","orbit-arcs").selectAll("g").data(P.groups).join("g");R.append("g").attr("class","pos-arcs").call(F=>F.append("path")).attr("transform",`translate(${i/2}, ${r/2})`).select("path").attr("d",F=>(D=zr().innerRadius(f).outerRadius(m),D(F))).attr("fill",F=>{let N=t.get(F.index);return Z.selected_residues.has(N.POS)?Ks:L(N.POS)}),R.append("g").attr("class","type-arcs").call(F=>F.append("path")).attr("transform",`translate(${i/2}, ${r/2})`).select("path").attr("d",F=>(D=zr().innerRadius(g).outerRadius(p),D(F))).attr("fill",F=>{let N=t.get(F.index);return Z.selected_residues.has(N.POS)?Ks:b(N[v])}),R.append("g").attr("class","num-arcs").call(F=>F.append("path")).attr("transform",`translate(${i/2}, ${r/2})`).select("path").attr("d",F=>{let N=t.get(F.index);return D=zr().innerRadius(d).outerRadius(x(N[y])),D(F)}).attr("fill",F=>{let N=t.get(F.index);return Z.selected_residues.has(N.POS)?Ks:b(N[v])}),R.on("click",function(F,N){Rt(this);let V=t.get(N.index);Z.selected_residues.has(V.POS)?Z.selected_residues.delete(V.POS):(Z.selected_residues.set(V.POS,V),console.log(Z.selected_residues)),nu(),iu();let H=t.get(N.index);Rt("#tooltip-pso").node().innerHTML=`
        <div id="tooltip-inner">
            <h3>${H.POS} - ${H.RES_name} (${H.RES})</h3>
            <p>Color (${v}): 
                <span style="display: inline-block; width: 0.8em; height: 0.8em; background: ${b(H[v])};"></span>
            </p>                        
            <p>Arc thickness (${y}): ${H[y]}</p>
        </div>                    
`}),R.on("mouseover",function(F,N){let V=Rt(this);t.get(N.index);let H=P.filter(O=>O.source.index===N.index);V.classed("hovered",!0),s.append("g").attr("id","hovering-circle").append("circle").attr("cx",i/2).attr("cy",r/2).attr("r",o).attr("fill","gray").attr("fill-opacity",.5),s.append("g").attr("id","hover-ribbons").selectAll("g").data(H).join("path").attr("d",O=>(B=fp().radius(o).padAngle(0),B(O))).attr("stroke",Ty).attr("stroke-opacity",1).attr("transform",`translate(${i/2}, ${r/2})`)}),R.on("mouseout",function(F,N){Rt(this).classed("hovered",!1),s.select("#hovering-circle").remove(),s.selectAll("#hover-ribbons").remove()})}function iu(){const n=Z.selected_residues,t=Z.structure_map,e=Z.modifications_map,i=Z.neighbors_map,r=mt.main_panel_width,s=mt.main_panel_height;let o=Rt("#svg-neighborhoods");o.selectAll("*").remove(),mt.structure_vis.min_radius;let a=new Map,c=new Map;Array.from(n.keys()).forEach(C=>{i.get(C).forEach(F=>{e.has(F.POS)&&e.get(F.POS).forEach(V=>{a.has(V.MOD)?a.set(V.MOD,a.get(V.MOD)+1):a.set(V.MOD,1)})})}),Array.from(n.keys()).forEach(C=>{let R=i.get(C),F=new Map;Array.from(a.keys()).forEach(N=>F.set(N,{count:0,pathogenic:!1})),R.forEach(N=>{e.has(N.POS)&&e.get(N.POS).forEach(H=>{let O=F.get(H.MOD);O.count=O.count+1,H.PathogenicMutation&&(O.pathogenic=!0),F.set(H.MOD,O)})}),c.set(C,F)}),console.log(a),console.log(c);let l=new Map,u=new Map;Array.from(n.keys()).forEach(C=>{let R=t.get(C);if(!l.has(R.POS)){let F={};F.id=R.POS,F[Z.color_var]=R[Z.color_var],F[Z.num_var]=R[Z.num_var],F.quality=R.quality,F.has_pathogenic=R.has_pathogenic,F.node_type="primary",F.mods_hist=Array.from(c.get(R.POS).entries()).map(N=>({MOD:N[0],value:N[1].count,is_pathogenic:N[1].pathogenic})),F.node_is_pathogenic=!1,e.has(F.id)&&e.get(F.id).length>0&&(e.get(F.id).length===1?F.node_is_pathogenic=e.get(F.id).PathogenicMutation:F.node_is_pathogenic=e.get(F.id).reduce((N,V)=>N.PathogenicMutation||V.PathogenicMutation)),F.neighborhood_is_pathogenic=!1,F.mods_hist.length>0&&(F.neighborhood_is_pathogenic=F.mods_hist.reduce((N,V)=>N.is_pathogenic||V.is_pathogenic)),l.set(R.POS,F)}i.get(C).forEach(F=>{let N=t.get(F.POS);if(!l.has(N.POS)&&!n.has(N.POS)){let O={};O.id=N.POS,O[Z.color_var]=N[Z.color_var],O[Z.num_var]=N[Z.num_var],O.quality=N.quality,O.has_pathogenic=N.has_pathogenic,O.node_type="secondary",O.mods_hist=void 0,O.node_is_pathogenic=!1,e.has(O.id)&&e.get(O.id).length>0&&(e.get(O.id).length===1?O.node_is_pathogenic=e.get(O.id)[0].PathogenicMutation:O.node_is_pathogenic=e.get(O.id).reduce((W,tt)=>W.PathogenicMutation||tt.PathogenicMutation)),l.set(N.POS,O)}let V=Z.num_residues*R.POS+N.POS,H=Z.num_residues*N.POS+R.POS;if(V!==H&&!u.has(V)&&!u.has(H)){let O={};O.source=R.POS,O.target=N.POS,O.dist=F.value,O.value=1/O.dist,n.has()&&n.has()?O.link_type="primary":O.link_type="secondary",u.set(V,O)}})});const h=Array.from(l.values()),f=Array.from(u.values());console.log(h),console.log(f);const m="#b60a1c",g="#e39802",p="#309143",d="#ff684c",_="#8ace7e",v={};v.outer_radius=20,v.inner_radius=10,v.outer_radius_quality_arc=10,v.inner_radius_quality_arc=5;const y={};y.radius=5,y.color="rgb(80,80,80)",y.link_color="rgb(130,130,130)",y.stroke_color="rgb(130,130,130)";let x=za().domain(Array.from(a.keys())).range([0,2*Math.PI]),b=es().domain(Array.from(a.keys())).range(Cc),L=Yi().domain([Hi(h,C=>C.quality),Mu(h,C=>C.quality)]).range([v.outer_radius_quality_arc,v.inner_radius_quality_arc]),I={};Array.from(a.entries()).forEach(C=>{I[C[0]]=Yi().domain([0,C[1]]).range([v.inner_radius,v.outer_radius])});const M=Ip(f).distance(C=>C.dist*2).id(C=>C.id),T=Gp(h).force("collide",Pp(C=>C.node_type==="primary"?v.outer_radius:y.radius)).force("link",M).force("charge",Vp().strength(C=>(C.node_type==="primary",-80))).force("position-x",Hp()).force("position-y",Wp());o.append("g").attr("id","links_group").attr("transform",`translate(${r/2}, ${s/2})`).attr("stroke",y.link_color).attr("stroke-opacity",1).attr("stroke-width",1).selectAll("line").data(f).join("line");const D=o.append("g").attr("id","nodes_group_primary").attr("transform",`translate(${r/2}, ${s/2})`).selectAll(".nsg-group").data(h.filter(C=>C.node_type==="primary")).join("g").attr("class","nsg-group").call(C=>C.append("circle").attr("class","outer-circle")).call(C=>C.append("circle").attr("class","inner-circle")).call(C=>C.append("path").attr("class","quality-arc")).call(C=>C.append("g").attr("class","mods-hist").selectAll("path").data(function(R,F){return R.mods_hist}).join("path")).call(C=>C.append("g").attr("class","mods-hist-borders").selectAll("path").data(function(R,F){return R.mods_hist}).join("path")).call(C=>C.append("circle").attr("class","pathogenic-ring"));o.append("g").attr("id","nodes_group_secondary").attr("transform",`translate(${r/2}, ${s/2})`).selectAll("circle").data(h.filter(C=>C.node_type==="secondary")).join("circle"),D.on("click",function(C,R){const F=Rt(this);console.log(F),console.log(R),console.log(c.get(R.id)),F.attr("transform","scale(3)"),console.log(a),console.log(c)}),D.on("mouseover",function(C,R){let F=Rt(this),N=t.get(R.id);F.classed("hovered",!0),Rt("#tooltip-nfl").node().innerHTML=`
                    <div id="tooltip-inner">
                        <h3>${N.POS} - ${N.RES_name} (${N.RES})</h3>                                                                        
                    </div>                    
        `}),D.on("mouseout",function(C,R){Rt(this).classed("hovered",!1),Rt("#tooltip-nfl").node().innerHTML=""});let B=zr();T.on("tick",function(){console.log("ticked"),Rt("#links_group").selectAll("line").attr("x1",C=>C.source.x).attr("y1",C=>C.source.y).attr("x2",C=>C.target.x).attr("y2",C=>C.target.y),Rt("#nodes_group_primary").selectAll(".outer-circle").attr("cx",C=>C.x).attr("cy",C=>C.y).attr("r",v.outer_radius).attr("fill","white").attr("stroke","black").attr("stroke-width",C=>1),Rt("#nodes_group_primary").selectAll(".inner-circle").attr("cx",C=>C.x).attr("cy",C=>C.y).attr("r",v.inner_radius).attr("fill",C=>C.neighborhood_is_pathogenic?g:p).attr("stroke","black").attr("stroke-width",C=>1),Rt("#nodes_group_primary").selectAll(".quality-arc").attr("transform",C=>`translate(${C.x} ${C.y})`).attr("d",C=>{let R={innerRadius:L(C.quality),outerRadius:v.outer_radius_quality_arc,startAngle:0,endAngle:2*Math.PI};return B(R)}).attr("fill","black"),Rt("#nodes_group_primary").selectAll(".mods-hist").attr("transform",C=>`translate(${C.x} ${C.y})`).selectAll("path").attr("d",C=>{let R={innerRadius:v.inner_radius,outerRadius:I[C.MOD]===void 0?v.outer_radius:I[C.MOD](C.value),startAngle:x(C.MOD),endAngle:x(C.MOD)+x.bandwidth()};return B(R)}).attr("fill",C=>C.value>0?b(C.MOD):"white").attr("stroke","none"),Rt("#nodes_group_primary").selectAll(".mods-hist-borders").attr("transform",C=>`translate(${C.x} ${C.y})`).selectAll("path").attr("d",C=>{let R={innerRadius:v.inner_radius,outerRadius:v.outer_radius,startAngle:x(C.MOD),endAngle:x(C.MOD)+x.bandwidth()};return B(R)}).attr("fill","none").attr("stroke",C=>C.is_pathogenic?m:"black"),Rt("#nodes_group_primary").selectAll(".pathogenic-ring").attr("cx",C=>C.x).attr("cy",C=>C.y).attr("r",v.outer_radius).attr("fill","none").attr("stroke",C=>C.node_is_pathogenic?m:p).attr("stroke-width",C=>2),Rt("#nodes_group_secondary").selectAll("circle").attr("cx",C=>C.x).attr("cy",C=>C.y).attr("r",y.radius).attr("stroke",y.color).attr("fill",C=>C.node_is_pathogenic?d:_)})}function Ry(){Iy(),Ny()}function Iy(){const n=mt.side_panel_top_width,t=mt.side_panel_top_height,e=Rt(document.getElementById("side-panel-top"));let i;e.select("#view-3d-canvas").empty()?i=e.append("canvas").attr("id","view-3d-canvas"):i=e.select("#view-3d-canvas"),i.attr("width",n).attr("height",t);let r=i.node(),s=Z.color_var,o=mt.scale_color,c=Z.structure.map(P=>({x:P.x_coord_ca,y:P.y_coord_ca,z:P.z_coord_ca,var_color:P[s]}));const l=new wy;l.background=new zt("#232323");let u=new Ee(75,n/t,.1,2e3);const h=new Qc({canvas:r});h.setSize(n,t);let f=new Gi;l.add(f);let m=new eu({vertexColors:!0,size:5,transparent:!0,sizeAttenuation:!1}),g=new ze,p=new Float32Array(c.length*3),d=new Float32Array(c.length*3);for(let P=0;P<c.length;P++){p[P*3+0]=c[P].x,p[P*3+1]=c[P].y,p[P*3+2]=c[P].z;let D=Xi(o(c[P].var_color));d[P*3+0]=D.r/255,d[P*3+1]=D.g/255,d[P*3+2]=D.b/255}g.setDrawRange(0,c.length),g.setAttribute("position",new Fe(p,3).setUsage(wg)),g.setAttribute("color",new Fe(d,3));let _=new Ey(g,m);f.add(_);let v=new ze;v.setAttribute("position",new Fe(p,3));let y=new tu;y.color=new zt("rgba(200,200,200,1)");let x=new Sy(v,y);f.add(x);let b=[c.map(P=>P.x).reduce((P,D)=>P+D,0)/c.length,c.map(P=>P.y).reduce((P,D)=>P+D,0)/c.length,c.map(P=>P.z).reduce((P,D)=>P+D,0)/c.length],L=new U(b[0],b[1],b[2]);u.position.set(0,0,0);const I=new U(0,0,0);I.sub(L).multiplyScalar(10),u.position.add(I),u.lookAt(L),Rt(r).on("click",P=>{console.log("clicked canvas3d")});const M=new Ay(u,r);M.enabled=!0;function T(){requestAnimationFrame(T),M.update(),h.render(l,u)}return T(),M}function Ny(){const n=Z.structure;let t=Z.color_var,e=Array.from(Z.ordinal_var_maps[t].entries());const i=mt.side_panel_bottom_width,r=mt.side_panel_bottom_height,s=Rt(document.getElementById("side-panel-bottom-vis"));let o;s.select("#view-bulk-select-svg").empty()?o=s.append("svg").attr("id","view-bulk-select-svg"):(o=s.select("#view-bulk-select-svg"),o.selectAll("*").remove()),o.attr("width",i).attr("height",r);let a={top:10,right:10,bottom:40,left:0},c=r-a.top-a.bottom,l=za().domain(e.map(_=>_[0])).range([0,c]),u=mt.scale_color,h=o.append("g").attr("id","bulk-select-axis").call(Du(l)).attr("color","white");a.left=Rt("#bulk-select-axis g").node().getBBox().width+20;let f=i-a.left-a.right;h.attr("transform",`translate(${a.left} ${a.top})`);let m=Yi().domain([0,Hi(e,_=>_[1].num)]).range([0,f]);o.append("g").attr("id","bulk-select-axis").call(Lu(m)).attr("color","white").attr("transform",`translate(${a.left} ${a.top+c})`);let d=o.append("g").attr("id","bulk-select-bars").attr("transform",`translate(${a.left} ${a.top})`).selectAll("rect").data(e).join("rect").attr("x",0).attr("y",_=>l(_[0])).attr("width",_=>m(_[1].num)).attr("height",l.bandwidth()).attr("fill",_=>u(_[0]));d.on("mouseover",function(_,v){Rt(this).classed("hovered",!0)}),d.on("mouseout",function(_,v){Rt(this).classed("hovered",!1)}),d.on("click",function(_,v){Rt(this).classed("selected",!0),n.forEach(x=>{x[t]===v[0]&&!Z.selected_residues.has(x.POS)&&Z.selected_residues.set(x.POS,x)}),console.log(Z.selected_residues),en()})}
