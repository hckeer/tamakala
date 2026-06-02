var rw=Object.defineProperty;var aw=(t,e,n)=>e in t?rw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>aw(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function ro(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tl={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zc={duration:.5,overwrite:!1,delay:0},rm,oi,rn,vl=1e8,Qt=1/vl,Nh=Math.PI*2,cw=Nh/4,uw=0,K1=Math.sqrt,dw=Math.cos,fw=Math.sin,Fn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},vo=function(e){return typeof e=="number"},am=function(e){return typeof e>"u"},Fl=function(e){return typeof e=="object"},Oi=function(e){return e!==!1},cm=function(){return typeof window<"u"},Iu=function(e){return mn(e)||Fn(e)},J1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fi=Array.isArray,_w=/random\([^)]+\)/g,hw=/,\s*/g,_g=/(?:-?\.?\d|\.)+/gi,ex=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,j_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tx=/[+-]=-?[.\d]+/,mw=/[^,'"\[\]\s]+/gi,pw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dn,Yl,Lh,um,sl={},ef={},nx,ix=function(e){return(ef=pa(e,sl))&&$i},dm=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Kc=function(e,n){return!n&&console.warn(e)},lx=function(e,n){return e&&(sl[e]=n)&&ef&&(ef[e]=n)||sl},Jc=function(){return 0},gw={suppressEvents:!0,isStart:!0,kill:!1},Dd={suppressEvents:!0,kill:!1},yw={suppressEvents:!0},fm={},Ko=[],Bh={},ox,Qi={},M_={},hg=30,Rd=[],_m="",hm=function(e){var n=e[0],i,l;if(Fl(n)||mn(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(l=Rd.length;l--&&!Rd[l].targetTest(n););i=Rd[l]}for(l=e.length;l--;)e[l]&&(e[l]._gsap||(e[l]._gsap=new Mx(e[l],i)))||e.splice(l,1);return e},qs=function(e){return e._gsap||hm(wl(e))[0]._gsap},sx=function(e,n,i){return(i=e[n])&&mn(i)?e[n]():am(i)&&e.getAttribute&&e.getAttribute(n)||i},Ai=function(e,n){return(e=e.split(",")).forEach(n)||e},bn=function(e){return Math.round(e*1e5)/1e5||0},un=function(e){return Math.round(e*1e7)/1e7||0},ta=function(e,n){var i=n.charAt(0),l=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+l:i==="-"?e-l:i==="*"?e*l:e/l},xw=function(e,n){for(var i=n.length,l=0;e.indexOf(n[l])<0&&++l<i;);return l<i},tf=function(){var e=Ko.length,n=Ko.slice(0),i,l;for(Bh={},Ko.length=0,i=0;i<e;i++)l=n[i],l&&l._lazy&&(l.render(l._lazy[0],l._lazy[1],!0)._lazy=0)},mm=function(e){return!!(e._initted||e._startAt||e.add)},rx=function(e,n,i,l){Ko.length&&!oi&&tf(),e.render(n,i,!!(oi&&n<0&&mm(e))),Ko.length&&!oi&&tf()},ax=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(mw).length<2?n:Fn(e)?e.trim():e},cx=function(e){return e},rl=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},bw=function(e){return function(n,i){for(var l in i)l in n||l==="duration"&&e||l==="ease"||(n[l]=i[l])}},pa=function(e,n){for(var i in n)e[i]=n[i];return e},mg=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fl(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},nf=function(e,n){var i={},l;for(l in e)l in n||(i[l]=e[l]);return i},kc=function(e){var n=e.parent||dn,i=e.keyframes?bw(fi(e.keyframes)):rl;if(Oi(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},vw=function(e,n){for(var i=e.length,l=i===n.length;l&&i--&&e[i]===n[i];);return i<0},ux=function(e,n,i,l,o){var s=e[l],a;if(o)for(a=n[o];s&&s[o]>a;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[l]=n,n._prev=s,n.parent=n._dp=e,n},qf=function(e,n,i,l){i===void 0&&(i="_first"),l===void 0&&(l="_last");var o=n._prev,s=n._next;o?o._next=s:e[i]===n&&(e[i]=s),s?s._prev=o:e[l]===n&&(e[l]=o),n._next=n._prev=n.parent=null},us=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ws=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ww=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},$h=function(e,n,i,l){return e._startAt&&(oi?e._startAt.revert(Dd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,l))},Sw=function t(e){return!e||e._ts&&t(e.parent)},pg=function(e){return e._repeat?ga(e._tTime,e=e.duration()+e._rDelay)*e:0},ga=function(e,n){var i=Math.floor(e=un(e/n));return e&&i===e?i-1:i},lf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Wf=function(e){return e._end=un(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qt)||0))},Qf=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=un(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Wf(e),i._dirty||Ws(i,e)),e},dx=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=lf(e.rawTime(),n),(!n._dur||wu(0,n.totalDuration(),i)-n._tTime>Qt)&&n.render(i,!0)),Ws(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Qt}},Xl=function(e,n,i,l){return n.parent&&us(n),n._start=un((vo(i)?i:i||e!==dn?dl(e,i,n):e._time)+n._delay),n._end=un(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ux(e,n,"_first","_last",e._sort?"_start":0),Hh(n)||(e._recent=n),l||dx(e,n),e._ts<0&&Qf(e,e._tTime),e},fx=function(e,n){return(sl.ScrollTrigger||dm("scrollTrigger",n))&&sl.ScrollTrigger.create(n,e)},_x=function(e,n,i,l,o){if(gm(e,n,o),!e._initted)return 1;if(!i&&e._pt&&!oi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ox!==Pi.frame)return Ko.push(e),e._lazy=[o,l],1},kw=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Hh=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Cw=function(e,n,i,l){var o=e.ratio,s=n<0||!n&&(!e._start&&kw(e)&&!(!e._initted&&Hh(e))||(e._ts<0||e._dp._ts<0)&&!Hh(e))?0:1,a=e._rDelay,c=0,u,d,h;if(a&&e._repeat&&(c=wu(0,e._tDur,n),d=ga(c,a),e._yoyo&&d&1&&(s=1-s),d!==ga(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||oi||l||e._zTime===Qt||!n&&e._zTime){if(!e._initted&&_x(e,n,l,i,c))return;for(h=e._zTime,e._zTime=n||(i?Qt:0),i||(i=n&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,u=e._pt;u;)u.r(s,u.d),u=u._next;n<0&&$h(e,n,i,!0),e._onUpdate&&!i&&Ki(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&Ki(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&us(e,1),!i&&!oi&&(Ki(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},jw=function(e,n,i){var l;if(i>n)for(l=e._first;l&&l._start<=i;){if(l.data==="isPause"&&l._start>n)return l;l=l._next}else for(l=e._last;l&&l._start>=i;){if(l.data==="isPause"&&l._start<n)return l;l=l._prev}},ya=function(e,n,i,l){var o=e._repeat,s=un(n)||0,a=e._tTime/e._tDur;return a&&!l&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:un(s*(o+1)+e._rDelay*o):s,a>0&&!l&&Qf(e,e._tTime=e._tDur*a),e.parent&&Wf(e),i||Ws(e.parent,e),e},gg=function(e){return e instanceof zi?Ws(e):ya(e,e._dur)},Mw={_start:0,endTime:Jc,totalDuration:Jc},dl=function t(e,n,i){var l=e.labels,o=e._recent||Mw,s=e.duration()>=vl?o.endTime(!1):e._dur,a,c,u;return Fn(n)&&(isNaN(n)||n in l)?(c=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),c==="<"||c===">"?(a>=0&&(n=n.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?o:i).totalDuration()/100:1)):a<0?(n in l||(l[n]=s),l[n]):(c=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&i&&(c=c/100*(fi(i)?i[0]:i).totalDuration()),a>1?t(e,n.substr(0,a-1),i)+c:s+c)):n==null?s:+n},Cc=function(e,n,i){var l=vo(n[1]),o=(l?2:1)+(e<2?0:1),s=n[o],a,c;if(l&&(s.duration=n[1]),s.parent=i,e){for(a=s,c=i;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Oi(c.vars.inherit)&&c.parent;s.immediateRender=Oi(a.immediateRender),e<2?s.runBackwards=1:s.startAt=n[o-1]}return new Dn(n[0],s,n[o+1])},ys=function(e,n){return e||e===0?n(e):n},wu=function(e,n,i){return i<e?e:i>n?n:i},ui=function(e,n){return!Fn(e)||!(n=pw.exec(e))?"":n[1]},Tw=function(e,n,i){return ys(i,function(l){return wu(e,n,l)})},Yh=[].slice,hx=function(e,n){return e&&Fl(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Fl(e[0]))&&!e.nodeType&&e!==Yl},Ew=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(l){var o;return Fn(l)&&!n||hx(l,1)?(o=i).push.apply(o,wl(l)):i.push(l)})||i},wl=function(e,n,i){return rn&&!n&&rn.selector?rn.selector(e):Fn(e)&&!i&&(Lh||!xa())?Yh.call((n||um).querySelectorAll(e),0):fi(e)?Ew(e,i):hx(e)?Yh.call(e,0):e?[e]:[]},Uh=function(e){return e=wl(e)[0]||Kc("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return wl(n,i.querySelectorAll?i:i===e?Kc("Invalid scope")||um.createElement("div"):e)}},mx=function(e){return e.sort(function(){return .5-Math.random()})},px=function(e){if(mn(e))return e;var n=Fl(e)?e:{each:e},i=Qs(n.ease),l=n.from||0,o=parseFloat(n.base)||0,s={},a=l>0&&l<1,c=isNaN(l)||a,u=n.axis,d=l,h=l;return Fn(l)?d=h={center:.5,edges:.5,end:1}[l]||0:!a&&c&&(d=l[0],h=l[1]),function(f,_,m){var p=(m||n).length,C=s[p],g,y,b,x,M,R,k,N,L;if(!C){if(L=n.grid==="auto"?0:(n.grid||[1,vl])[1],!L){for(k=-vl;k<(k=m[L++].getBoundingClientRect().left)&&L<p;);L<p&&L--}for(C=s[p]=[],g=c?Math.min(L,p)*d-.5:l%L,y=L===vl?0:c?p*h/L-.5:l/L|0,k=0,N=vl,R=0;R<p;R++)b=R%L-g,x=y-(R/L|0),C[R]=M=u?Math.abs(u==="y"?x:b):K1(b*b+x*x),M>k&&(k=M),M<N&&(N=M);l==="random"&&mx(C),C.max=k-N,C.min=N,C.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(L>p?p-1:u?u==="y"?p/L:L:Math.max(L,p/L))||0)*(l==="edges"?-1:1),C.b=p<0?o-p:o,C.u=ui(n.amount||n.each)||0,i=i&&p<0?Xw(i):i}return p=(C[f]-C.min)/C.max||0,un(C.b+(i?i(p):p)*C.v)+C.u}},Xh=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var l=un(Math.round(parseFloat(i)/e)*e*n);return(l-l%1)/n+(vo(i)?0:ui(i))}},gx=function(e,n){var i=fi(e),l,o;return!i&&Fl(e)&&(l=i=e.radius||vl,e.values?(e=wl(e.values),(o=!vo(e[0]))&&(l*=l)):e=Xh(e.increment)),ys(n,i?mn(e)?function(s){return o=e(s),Math.abs(o-s)<=l?o:s}:function(s){for(var a=parseFloat(o?s.x:s),c=parseFloat(o?s.y:0),u=vl,d=0,h=e.length,f,_;h--;)o?(f=e[h].x-a,_=e[h].y-c,f=f*f+_*_):f=Math.abs(e[h]-a),f<u&&(u=f,d=h);return d=!l||u<=l?e[d]:s,o||d===s||vo(s)?d:d+ui(s)}:Xh(e))},yx=function(e,n,i,l){return ys(fi(e)?!n:i===!0?!!(i=0):!l,function(){return fi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(l=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*l)/l})},Dw=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(l){return n.reduce(function(o,s){return s(o)},l)}},Rw=function(e,n){return function(i){return e(parseFloat(i))+(n||ui(i))}},zw=function(e,n,i){return bx(e,n,0,1,i)},xx=function(e,n,i){return ys(i,function(l){return e[~~n(l)]})},Ow=function t(e,n,i){var l=n-e;return fi(e)?xx(e,t(0,e.length),n):ys(i,function(o){return(l+(o-e)%l)%l+e})},Aw=function t(e,n,i){var l=n-e,o=l*2;return fi(e)?xx(e,t(0,e.length-1),n):ys(i,function(s){return s=(o+(s-e)%o)%o||0,e+(s>l?o-s:s)})},eu=function(e){return e.replace(_w,function(n){var i=n.indexOf("[")+1,l=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(hw);return yx(i?l:+l[0],i?0:+l[1],+l[2]||1e-5)})},bx=function(e,n,i,l,o){var s=n-e,a=l-i;return ys(o,function(c){return i+((c-e)/s*a||0)})},Nw=function t(e,n,i,l){var o=isNaN(e+n)?0:function(_){return(1-_)*e+_*n};if(!o){var s=Fn(e),a={},c,u,d,h,f;if(i===!0&&(l=1)&&(i=null),s)e={p:e},n={p:n};else if(fi(e)&&!fi(n)){for(d=[],h=e.length,f=h-2,u=1;u<h;u++)d.push(t(e[u-1],e[u]));h--,o=function(m){m*=h;var p=Math.min(f,~~m);return d[p](m-p)},i=n}else l||(e=pa(fi(e)?[]:{},e));if(!d){for(c in n)pm.call(a,e,c,"get",n[c]);o=function(m){return bm(m,a)||(s?e.p:e)}}}return ys(i,o)},yg=function(e,n,i){var l=e.labels,o=vl,s,a,c;for(s in l)a=l[s]-n,a<0==!!i&&a&&o>(a=Math.abs(a))&&(c=s,o=a);return c},Ki=function(e,n,i){var l=e.vars,o=l[n],s=rn,a=e._ctx,c,u,d;if(o)return c=l[n+"Params"],u=l.callbackScope||e,i&&Ko.length&&tf(),a&&(rn=a),d=c?o.apply(u,c):o.call(u),rn=s,d},fc=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!oi),e.progress()<1&&Ki(e,"onInterrupt"),e},Yr,vx=[],wx=function(e){if(e)if(e=!e.name&&e.default||e,cm()||e.headless){var n=e.name,i=mn(e),l=n&&!i&&e.init?function(){this._props=[]}:e,o={init:Jc,render:bm,add:pm,kill:Kw,modifier:Zw,rawVars:0},s={targetTest:0,get:0,getSetter:xm,aliases:{},register:0};if(xa(),e!==l){if(Qi[n])return;rl(l,rl(nf(e,o),s)),pa(l.prototype,pa(o,nf(e,s))),Qi[l.prop=n]=l,e.targetTest&&(Rd.push(l),fm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}lx(n,l),e.register&&e.register($i,l,Ni)}else vx.push(e)},Wt=255,_c={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},T_=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*Wt+.5|0},Sx=function(e,n,i){var l=e?vo(e)?[e>>16,e>>8&Wt,e&Wt]:0:_c.black,o,s,a,c,u,d,h,f,_,m;if(!l){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_c[e])l=_c[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return l=parseInt(e.substr(1,6),16),[l>>16,l>>8&Wt,l&Wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),l=[e>>16,e>>8&Wt,e&Wt]}else if(e.substr(0,3)==="hsl"){if(l=m=e.match(_g),!n)c=+l[0]%360/360,u=+l[1]/100,d=+l[2]/100,s=d<=.5?d*(u+1):d+u-d*u,o=d*2-s,l.length>3&&(l[3]*=1),l[0]=T_(c+1/3,o,s),l[1]=T_(c,o,s),l[2]=T_(c-1/3,o,s);else if(~e.indexOf("="))return l=e.match(ex),i&&l.length<4&&(l[3]=1),l}else l=e.match(_g)||_c.transparent;l=l.map(Number)}return n&&!m&&(o=l[0]/Wt,s=l[1]/Wt,a=l[2]/Wt,h=Math.max(o,s,a),f=Math.min(o,s,a),d=(h+f)/2,h===f?c=u=0:(_=h-f,u=d>.5?_/(2-h-f):_/(h+f),c=h===o?(s-a)/_+(s<a?6:0):h===s?(a-o)/_+2:(o-s)/_+4,c*=60),l[0]=~~(c+.5),l[1]=~~(u*100+.5),l[2]=~~(d*100+.5)),i&&l.length<4&&(l[3]=1),l},kx=function(e){var n=[],i=[],l=-1;return e.split(Jo).forEach(function(o){var s=o.match(Hr)||[];n.push.apply(n,s),i.push(l+=s.length+1)}),n.c=i,n},xg=function(e,n,i){var l="",o=(e+l).match(Jo),s=n?"hsla(":"rgba(",a=0,c,u,d,h;if(!o)return e;if(o=o.map(function(f){return(f=Sx(f,n,1))&&s+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(d=kx(e),c=i.c,c.join(l)!==d.c.join(l)))for(u=e.replace(Jo,"1").split(Hr),h=u.length-1;a<h;a++)l+=u[a]+(~c.indexOf(a)?o.shift()||s+"0,0,0,0)":(d.length?d:o.length?o:i).shift());if(!u)for(u=e.split(Jo),h=u.length-1;a<h;a++)l+=u[a]+o[a];return l+u[h]},Jo=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _c)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Lw=/hsl[a]?\(/,Cx=function(e){var n=e.join(" "),i;if(Jo.lastIndex=0,Jo.test(n))return i=Lw.test(n),e[1]=xg(e[1],i),e[0]=xg(e[0],i,kx(e[1])),!0},tu,Pi=function(){var t=Date.now,e=500,n=33,i=t(),l=i,o=1e3/240,s=o,a=[],c,u,d,h,f,_,m=function p(C){var g=t()-l,y=C===!0,b,x,M,R;if((g>e||g<0)&&(i+=g-n),l+=g,M=l-i,b=M-s,(b>0||y)&&(R=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=b+(b>=o?4:o-b),x=1),y||(c=u(p)),x)for(_=0;_<a.length;_++)a[_](M,f,R,C)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(C){return f/(1e3/(C||60))},wake:function(){nx&&(!Lh&&cm()&&(Yl=Lh=window,um=Yl.document||{},sl.gsap=$i,(Yl.gsapVersions||(Yl.gsapVersions=[])).push($i.version),ix(ef||Yl.GreenSockGlobals||!Yl.gsap&&Yl||{}),vx.forEach(wx)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),u=d||function(C){return setTimeout(C,s-h.time*1e3+1|0)},tu=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),tu=0,u=Jc},lagSmoothing:function(C,g){e=C||1/0,n=Math.min(g||33,e)},fps:function(C){o=1e3/(C||240),s=h.time*1e3+o},add:function(C,g,y){var b=g?function(x,M,R,k){C(x,M,R,k),h.remove(b)}:C;return h.remove(C),a[y?"unshift":"push"](b),xa(),b},remove:function(C,g){~(g=a.indexOf(C))&&a.splice(g,1)&&_>=g&&_--},_listeners:a},h}(),xa=function(){return!tu&&Pi.wake()},wt={},Bw=/^[\d.\-M][\d.\-,\s]/,$w=/["']/g,Hw=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),l=i[0],o=1,s=i.length,a,c,u;o<s;o++)c=i[o],a=o!==s-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),n[l]=isNaN(u)?u.replace($w,"").trim():+u,l=c.substr(a+1).trim();return n},Yw=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),l=e.indexOf("(",n);return e.substring(n,~l&&l<i?e.indexOf(")",i+1):i)},Uw=function(e){var n=(e+"").split("("),i=wt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Hw(n[1])]:Yw(e).split(",").map(ax)):wt._CE&&Bw.test(e)?wt._CE("",e):i},Xw=function(e){return function(n){return 1-e(1-n)}},Qs=function(e,n){return e&&(mn(e)?e:wt[e]||Uw(e))||n},dr=function(e,n,i,l){i===void 0&&(i=function(c){return 1-n(1-c)}),l===void 0&&(l=function(c){return c<.5?n(c*2)/2:1-n((1-c)*2)/2});var o={easeIn:n,easeOut:i,easeInOut:l},s;return Ai(e,function(a){wt[a]=sl[a]=o,wt[s=a.toLowerCase()]=i;for(var c in o)wt[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=wt[a+"."+c]=o[c]}),o},jx=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},E_=function t(e,n,i){var l=n>=1?n:1,o=(i||(e?.3:.45))/(n<1?n:1),s=o/Nh*(Math.asin(1/l)||0),a=function(d){return d===1?1:l*Math.pow(2,-10*d)*fw((d-s)*o)+1},c=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:jx(a);return o=Nh/o,c.config=function(u,d){return t(e,u,d)},c},D_=function t(e,n){n===void 0&&(n=1.70158);var i=function(s){return s?--s*s*((n+1)*s+n)+1:0},l=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:jx(i);return l.config=function(o){return t(e,o)},l};Ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;dr(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});wt.Linear.easeNone=wt.none=wt.Linear.easeIn;dr("Elastic",E_("in"),E_("out"),E_());(function(t,e){var n=1/e,i=2*n,l=2.5*n,o=function(a){return a<n?t*a*a:a<i?t*Math.pow(a-1.5/e,2)+.75:a<l?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};dr("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);dr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});dr("Circ",function(t){return-(K1(1-t*t)-1)});dr("Sine",function(t){return t===1?1:-dw(t*cw)+1});dr("Back",D_("in"),D_("out"),D_());wt.SteppedEase=wt.steps=sl.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,l=e+(n?0:1),o=n?1:0,s=1-Qt;return function(a){return((l*wu(0,s,a)|0)+o)*i}}};Zc.ease=wt["quad.out"];Ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _m+=t+","+t+"Params,"});var Mx=function(e,n){this.id=uw++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:sx,this.set=n?n.getSetter:xm},nu=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ya(this,+n.duration,1,1),this.data=n.data,rn&&(this._ctx=rn,rn.data.push(this)),tu||Pi.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ya(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,l){if(xa(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Qf(this,i),!o._dp||o.parent||dx(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xl(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!l||this._initted&&Math.abs(this._zTime)===Qt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),rx(this,i,l)),this},e.time=function(i,l){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+pg(this))%(this._dur+this._rDelay)||(i?this._dur:0),l):this._time},e.totalProgress=function(i,l){return arguments.length?this.totalTime(this.totalDuration()*i,l):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,l){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+pg(this),l):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,l){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,l):this._repeat?ga(this._tTime,o)+1:1},e.timeScale=function(i,l){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?lf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Qt?0:this._rts,this.totalTime(wu(-Math.abs(this._delay),this.totalDuration(),o),l!==!1),Wf(this),ww(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=un(i);var l=this.parent||this._dp;return l&&(l._sort||!this.parent)&&Xl(l,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var l=this.parent||this._dp;return l?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lf(l.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=yw);var l=oi;return oi=i,mm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),oi=l,this},e.globalTime=function(i){for(var l=this,o=arguments.length?i:l.rawTime();l;)o=l._start+o/(Math.abs(l._ts)||1),l=l._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var l=this._time;return this._rDelay=i,gg(this),l?this.time(l):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,l){return this.totalTime(dl(this,i),Oi(l))},e.restart=function(i,l){return this.play().totalTime(i?-this._delay:0,Oi(l)),this._dur||(this._zTime=-Qt),this},e.play=function(i,l){return i!=null&&this.seek(i,l),this.reversed(!1).paused(!1)},e.reverse=function(i,l){return i!=null&&this.seek(i||this.totalDuration(),l),this.reversed(!0).paused(!1)},e.pause=function(i,l){return i!=null&&this.seek(i,l),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Qt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},e.isActive=function(){var i=this.parent||this._dp,l=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=l&&o<this.endTime(!0)-Qt)},e.eventCallback=function(i,l,o){var s=this.vars;return arguments.length>1?(l?(s[i]=l,o&&(s[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=l)):delete s[i],this):s[i]},e.then=function(i){var l=this,o=l._prom;return new Promise(function(s){var a=mn(i)?i:cx,c=function(){var d=l.then;l.then=null,o&&o(),mn(a)&&(a=a(l))&&(a.then||a===l)&&(l.then=d),s(a),l.then=d};l._initted&&l.totalProgress()===1&&l._ts>=0||!l._tTime&&l._ts<0?c():l._prom=c})},e.kill=function(){fc(this)},t}();rl(nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var zi=function(t){Z1(e,t);function e(i,l){var o;return i===void 0&&(i={}),o=t.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=Oi(i.sortChildren),dn&&Xl(i.parent||dn,ro(o),l),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&fx(ro(o),i.scrollTrigger),o}var n=e.prototype;return n.to=function(l,o,s){return Cc(0,arguments,this),this},n.from=function(l,o,s){return Cc(1,arguments,this),this},n.fromTo=function(l,o,s,a){return Cc(2,arguments,this),this},n.set=function(l,o,s){return o.duration=0,o.parent=this,kc(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Dn(l,o,dl(this,s),1),this},n.call=function(l,o,s){return Xl(this,Dn.delayedCall(0,l,o),s)},n.staggerTo=function(l,o,s,a,c,u,d){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=u,s.onCompleteParams=d,s.parent=this,new Dn(l,s,dl(this,c)),this},n.staggerFrom=function(l,o,s,a,c,u,d){return s.runBackwards=1,kc(s).immediateRender=Oi(s.immediateRender),this.staggerTo(l,o,s,a,c,u,d)},n.staggerFromTo=function(l,o,s,a,c,u,d,h){return a.startAt=s,kc(a).immediateRender=Oi(a.immediateRender),this.staggerTo(l,o,a,c,u,d,h)},n.render=function(l,o,s){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=l<=0?0:un(l),h=this._zTime<0!=l<0&&(this._initted||!u),f,_,m,p,C,g,y,b,x,M,R,k;if(this!==dn&&d>c&&l>=0&&(d=c),d!==this._tTime||s||h){if(a!==this._time&&u&&(d+=this._time-a,l+=this._time-a),f=d,x=this._start,b=this._ts,g=!b,h&&(u||(a=this._zTime),(l||!o)&&(this._zTime=l)),this._repeat){if(R=this._yoyo,C=u+this._rDelay,this._repeat<-1&&l<0)return this.totalTime(C*100+l,o,s);if(f=un(d%C),d===c?(p=this._repeat,f=u):(M=un(d/C),p=~~M,p&&p===M&&(f=u,p--),f>u&&(f=u)),M=ga(this._tTime,C),!a&&this._tTime&&M!==p&&this._tTime-M*C-this._dur<=0&&(M=p),R&&p&1&&(f=u-f,k=1),p!==M&&!this._lock){var N=R&&M&1,L=N===(R&&p&1);if(p<M&&(N=!N),a=N?0:d%u?u:d,this._lock=1,this.render(a||(k?0:un(p*C)),o,!u)._lock=0,this._tTime=d,!o&&this.parent&&Ki(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1,M=p),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,L&&(this._lock=2,a=N?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=jw(this,un(a),un(f)),y&&(d-=f-(f=y._start))),this._tTime=d,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=l,a=0),!a&&d&&u&&!o&&!M&&(Ki(this,"onStart"),this._tTime!==d))return this;if(f>=a&&l>=0)for(_=this._first;_;){if(m=_._next,(_._act||f>=_._start)&&_._ts&&y!==_){if(_.parent!==this)return this.render(l,o,s);if(_.render(_._ts>0?(f-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(f-_._start)*_._ts,o,s),f!==this._time||!this._ts&&!g){y=0,m&&(d+=this._zTime=-Qt);break}}_=m}else{_=this._last;for(var A=l<0?l:f;_;){if(m=_._prev,(_._act||A<=_._end)&&_._ts&&y!==_){if(_.parent!==this)return this.render(l,o,s);if(_.render(_._ts>0?(A-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(A-_._start)*_._ts,o,s||oi&&mm(_)),f!==this._time||!this._ts&&!g){y=0,m&&(d+=this._zTime=A?-Qt:Qt);break}}_=m}}if(y&&!o&&(this.pause(),y.render(f>=a?0:-Qt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Wf(this),this.render(l,o,s);this._onUpdate&&!o&&Ki(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((l||!u)&&(d===c&&this._ts>0||!d&&this._ts<0)&&us(this,1),!o&&!(l<0&&!a)&&(d||a||!c)&&(Ki(this,d===c&&l>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(l,o){var s=this;if(vo(o)||(o=dl(this,o,l)),!(l instanceof nu)){if(fi(l))return l.forEach(function(a){return s.add(a,o)}),this;if(Fn(l))return this.addLabel(l,o);if(mn(l))l=Dn.delayedCall(0,l);else return this}return this!==l?Xl(this,l,o):this},n.getChildren=function(l,o,s,a){l===void 0&&(l=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-vl);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof Dn?o&&c.push(u):(s&&c.push(u),l&&c.push.apply(c,u.getChildren(!0,o,s)))),u=u._next;return c},n.getById=function(l){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===l)return o[s]},n.remove=function(l){return Fn(l)?this.removeLabel(l):mn(l)?this.killTweensOf(l):(l.parent===this&&qf(this,l),l===this._recent&&(this._recent=this._last),Ws(this))},n.totalTime=function(l,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(Pi.time-(this._ts>0?l/this._ts:(this.totalDuration()-l)/-this._ts))),t.prototype.totalTime.call(this,l,o),this._forcing=0,this):this._tTime},n.addLabel=function(l,o){return this.labels[l]=dl(this,o),this},n.removeLabel=function(l){return delete this.labels[l],this},n.addPause=function(l,o,s){var a=Dn.delayedCall(0,o||Jc,s);return a.data="isPause",this._hasPause=1,Xl(this,a,dl(this,l))},n.removePause=function(l){var o=this._first;for(l=dl(this,l);o;)o._start===l&&o.data==="isPause"&&us(o),o=o._next},n.killTweensOf=function(l,o,s){for(var a=this.getTweensOf(l,s),c=a.length;c--;)Xo!==a[c]&&a[c].kill(l,o);return this},n.getTweensOf=function(l,o){for(var s=[],a=wl(l),c=this._first,u=vo(o),d;c;)c instanceof Dn?xw(c._targets,a)&&(u?(!Xo||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&s.push(c):(d=c.getTweensOf(a,o)).length&&s.push.apply(s,d),c=c._next;return s},n.tweenTo=function(l,o){o=o||{};var s=this,a=dl(s,l),c=o,u=c.startAt,d=c.onStart,h=c.onStartParams,f=c.immediateRender,_,m=Dn.to(s,rl({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale())||Qt,onStart:function(){if(s.pause(),!_){var C=o.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale());m._dur!==C&&ya(m,C,0,1).render(m._time,!0,!0),_=1}d&&d.apply(m,h||[])}},o));return f?m.render(0):m},n.tweenFromTo=function(l,o,s){return this.tweenTo(o,rl({startAt:{time:dl(this,l)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(l){return l===void 0&&(l=this._time),yg(this,dl(this,l))},n.previousLabel=function(l){return l===void 0&&(l=this._time),yg(this,dl(this,l),1)},n.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.previousLabel(this._time+Qt)},n.shiftChildren=function(l,o,s){s===void 0&&(s=0);var a=this._first,c=this.labels,u;for(l=un(l);a;)a._start>=s&&(a._start+=l,a._end+=l),a=a._next;if(o)for(u in c)c[u]>=s&&(c[u]+=l);return Ws(this)},n.invalidate=function(l){var o=this._first;for(this._lock=0;o;)o.invalidate(l),o=o._next;return t.prototype.invalidate.call(this,l)},n.clear=function(l){l===void 0&&(l=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),l&&(this.labels={}),Ws(this)},n.totalDuration=function(l){var o=0,s=this,a=s._last,c=vl,u,d,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-l:l));if(s._dirty){for(h=s.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>c&&s._sort&&a._ts&&!s._lock?(s._lock=1,Xl(s,a,d-a._delay,1)._lock=0):c=d,d<0&&a._ts&&(o-=d,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=un(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),a._end>o&&a._ts&&(o=a._end),a=u;ya(s,s===dn&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(l){if(dn._ts&&(rx(dn,lf(l,dn)),ox=Pi.frame),Pi.frame>=hg){hg+=tl.autoSleep||120;var o=dn._first;if((!o||!o._ts)&&tl.autoSleep&&Pi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Pi.sleep()}}},e}(nu);rl(zi.prototype,{_lock:0,_hasPause:0,_forcing:0});var Iw=function(e,n,i,l,o,s,a){var c=new Ni(this._pt,e,n,0,1,Ox,null,o),u=0,d=0,h,f,_,m,p,C,g,y;for(c.b=i,c.e=l,i+="",l+="",(g=~l.indexOf("random("))&&(l=eu(l)),s&&(y=[i,l],s(y,e,n),i=y[0],l=y[1]),f=i.match(j_)||[];h=j_.exec(l);)m=h[0],p=l.substring(u,h.index),_?_=(_+1)%5:p.substr(-5)==="rgba("&&(_=1),m!==f[d++]&&(C=parseFloat(f[d-1])||0,c._pt={_next:c._pt,p:p||d===1?p:",",s:C,c:m.charAt(1)==="="?ta(C,m)-C:parseFloat(m)-C,m:_&&_<4?Math.round:0},u=j_.lastIndex);return c.c=u<l.length?l.substring(u,l.length):"",c.fp=a,(tx.test(l)||g)&&(c.e=0),this._pt=c,c},pm=function(e,n,i,l,o,s,a,c,u,d){mn(l)&&(l=l(o||0,e,s));var h=e[n],f=i!=="get"?i:mn(h)?u?e[n.indexOf("set")||!mn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():h,_=mn(h)?u?Vw:Rx:ym,m;if(Fn(l)&&(~l.indexOf("random(")&&(l=eu(l)),l.charAt(1)==="="&&(m=ta(f,l)+(ui(f)||0),(m||m===0)&&(l=m))),!d||f!==l||Ih)return!isNaN(f*l)&&l!==""?(m=new Ni(this._pt,e,n,+f||0,l-(f||0),typeof h=="boolean"?Fw:zx,0,_),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(n in e)&&dm(n,l),Iw.call(this,e,n,f,l,_,c||tl.stringFilter,u))},qw=function(e,n,i,l,o){if(mn(e)&&(e=jc(e,o,n,i,l)),!Fl(e)||e.style&&e.nodeType||fi(e)||J1(e))return Fn(e)?jc(e,o,n,i,l):e;var s={},a;for(a in e)s[a]=jc(e[a],o,n,i,l);return s},Tx=function(e,n,i,l,o,s){var a,c,u,d;if(Qi[e]&&(a=new Qi[e]).init(o,a.rawVars?n[e]:qw(n[e],l,o,s,i),i,l,s)!==!1&&(i._pt=c=new Ni(i._pt,o,e,0,1,a.render,a,0,a.priority),i!==Yr))for(u=i._ptLookup[i._targets.indexOf(o)],d=a._props.length;d--;)u[a._props[d]]=c;return a},Xo,Ih,gm=function t(e,n,i){var l=e.vars,o=l.ease,s=l.startAt,a=l.immediateRender,c=l.lazy,u=l.onUpdate,d=l.runBackwards,h=l.yoyoEase,f=l.keyframes,_=l.autoRevert,m=e._dur,p=e._startAt,C=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:C,b=e._overwrite==="auto"&&!rm,x=e.timeline,M=l.easeReverse||h,R,k,N,L,A,J,V,pe,oe,ae,$,F,H;if(x&&(!f||!o)&&(o="none"),e._ease=Qs(o,Zc.ease),e._rEase=M&&(Qs(M)||e._ease),e._from=!x&&!!l.runBackwards,e._from&&(e.ratio=1),!x||f&&!l.stagger){if(pe=C[0]?qs(C[0]).harness:0,F=pe&&l[pe.prop],R=nf(l,fm),p&&(p._zTime<0&&p.progress(1),n<0&&d&&a&&!_?p.render(-1,!0):p.revert(d&&m?Dd:gw),p._lazy=0),s){if(us(e._startAt=Dn.set(C,rl({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!p&&Oi(c),startAt:null,delay:0,onUpdate:u&&function(){return Ki(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(oi||!a&&!_)&&e._startAt.revert(Dd),a&&m&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(d&&m&&!p){if(n&&(a=!1),N=rl({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Oi(c),immediateRender:a,stagger:0,parent:g},R),F&&(N[pe.prop]=F),us(e._startAt=Dn.set(C,N)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(oi?e._startAt.revert(Dd):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,Qt,Qt);else if(!n)return}for(e._pt=e._ptCache=0,c=m&&Oi(c)||c&&!m,k=0;k<C.length;k++){if(A=C[k],V=A._gsap||hm(C)[k]._gsap,e._ptLookup[k]=ae={},Bh[V.id]&&Ko.length&&tf(),$=y===C?k:y.indexOf(A),pe&&(oe=new pe).init(A,F||R,e,$,y)!==!1&&(e._pt=L=new Ni(e._pt,A,oe.name,0,1,oe.render,oe,0,oe.priority),oe._props.forEach(function(te){ae[te]=L}),oe.priority&&(J=1)),!pe||F)for(N in R)Qi[N]&&(oe=Tx(N,R,e,$,A,y))?oe.priority&&(J=1):ae[N]=L=pm.call(e,A,N,"get",R[N],$,y,0,l.stringFilter);e._op&&e._op[k]&&e.kill(A,e._op[k]),b&&e._pt&&(Xo=e,dn.killTweensOf(A,ae,e.globalTime(n)),H=!e.parent,Xo=0),e._pt&&c&&(Bh[V.id]=1)}J&&Ax(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!H,f&&n<=0&&x.render(vl,!0,!0)},Ww=function(e,n,i,l,o,s,a,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],d,h,f,_;if(!u)for(u=e._ptCache[n]=[],f=e._ptLookup,_=e._targets.length;_--;){if(d=f[_][n],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==n&&d.fp!==n;)d=d._next;if(!d)return Ih=1,e.vars[n]="+=0",gm(e,a),Ih=0,c?Kc(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(d)}for(_=u.length;_--;)h=u[_],d=h._pt||h,d.s=(l||l===0)&&!o?l:d.s+(l||0)+s*d.c,d.c=i-d.s,h.e&&(h.e=bn(i)+ui(h.e)),h.b&&(h.b=d.s+ui(h.b))},Qw=function(e,n){var i=e[0]?qs(e[0]).harness:0,l=i&&i.aliases,o,s,a,c;if(!l)return n;o=pa({},n);for(s in l)if(s in o)for(c=l[s].split(","),a=c.length;a--;)o[c[a]]=o[s];return o},Gw=function(e,n,i,l){var o=n.ease||l||"power1.inOut",s,a;if(fi(n))a=i[e]||(i[e]=[]),n.forEach(function(c,u){return a.push({t:u/(n.length-1)*100,v:c,e:o})});else for(s in n)a=i[s]||(i[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:n[s],e:o})},jc=function(e,n,i,l,o){return mn(e)?e.call(n,i,l,o):Fn(e)&&~e.indexOf("random(")?eu(e):e},Ex=_m+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Dx={};Ai(Ex+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Dx[t]=1});var Dn=function(t){Z1(e,t);function e(i,l,o,s){var a;typeof l=="number"&&(o.duration=l,l=o,o=null),a=t.call(this,s?l:kc(l))||this;var c=a.vars,u=c.duration,d=c.delay,h=c.immediateRender,f=c.stagger,_=c.overwrite,m=c.keyframes,p=c.defaults,C=c.scrollTrigger,g=l.parent||dn,y=(fi(i)||J1(i)?vo(i[0]):"length"in l)?[i]:wl(i),b,x,M,R,k,N,L,A;if(a._targets=y.length?hm(y):Kc("GSAP target "+i+" not found. https://gsap.com",!tl.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,m||f||Iu(u)||Iu(d)){l=a.vars;var J=l.easeReverse||l.yoyoEase;if(b=a.timeline=new zi({data:"nested",defaults:p||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=ro(a),b._start=0,f||Iu(u)||Iu(d)){if(R=y.length,L=f&&px(f),Fl(f))for(k in f)~Ex.indexOf(k)&&(A||(A={}),A[k]=f[k]);for(x=0;x<R;x++)M=nf(l,Dx),M.stagger=0,J&&(M.easeReverse=J),A&&pa(M,A),N=y[x],M.duration=+jc(u,ro(a),x,N,y),M.delay=(+jc(d,ro(a),x,N,y)||0)-a._delay,!f&&R===1&&M.delay&&(a._delay=d=M.delay,a._start+=d,M.delay=0),b.to(N,M,L?L(x,N,y):0),b._ease=wt.none;b.duration()?u=d=0:a.timeline=0}else if(m){kc(rl(b.vars.defaults,{ease:"none"})),b._ease=Qs(m.ease||l.ease||"none");var V=0,pe,oe,ae;if(fi(m))m.forEach(function($){return b.to(y,$,">")}),b.duration();else{M={};for(k in m)k==="ease"||k==="easeEach"||Gw(k,m[k],M,m.easeEach);for(k in M)for(pe=M[k].sort(function($,F){return $.t-F.t}),V=0,x=0;x<pe.length;x++)oe=pe[x],ae={ease:oe.e,duration:(oe.t-(x?pe[x-1].t:0))/100*u},ae[k]=oe.v,b.to(y,ae,V),V+=ae.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||a.duration(u=b.duration())}else a.timeline=0;return _===!0&&!rm&&(Xo=ro(a),dn.killTweensOf(y),Xo=0),Xl(g,ro(a),o),l.reversed&&a.reverse(),l.paused&&a.paused(!0),(h||!u&&!m&&a._start===un(g._time)&&Oi(h)&&Sw(ro(a))&&g.data!=="nested")&&(a._tTime=-Qt,a.render(Math.max(0,-d)||0)),C&&fx(ro(a),C),a}var n=e.prototype;return n.render=function(l,o,s){var a=this._time,c=this._tDur,u=this._dur,d=l<0,h=l>c-Qt&&!d?c:l<Qt?0:l,f,_,m,p,C,g,y,b;if(!u)Cw(this,l,o,s);else if(h!==this._tTime||!l||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=h,b=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(p*100+l,o,s);if(f=un(h%p),h===c?(m=this._repeat,f=u):(C=un(h/p),m=~~C,m&&m===C?(f=u,m--):f>u&&(f=u)),g=this._yoyo&&m&1,g&&(f=u-f),C=ga(this._tTime,p),f===a&&!s&&this._initted&&m===C)return this._tTime=h,this;m!==C&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==p&&this._initted&&(this._lock=s=1,this.render(un(p*m),!0).invalidate()._lock=0)}if(!this._initted){if(_x(this,d?l:f,s,o,h))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&m!==C))return this;if(u!==this._dur)return this.render(l,o,s)}if(this._rEase){var x=f<a;if(x!==this._inv){var M=x?a:u-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/u);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!o&&!C&&(Ki(this,"onStart"),this._tTime!==h))return this;for(_=this._pt;_;)_.r(y,_.d),_=_._next;b&&b.render(l<0?l:b._dur*b._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=l),this._onUpdate&&!o&&(d&&$h(this,l,o,s),Ki(this,"onUpdate")),this._repeat&&m!==C&&this.vars.onRepeat&&!o&&this.parent&&Ki(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&$h(this,l,!0,!0),(l||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&us(this,1),!o&&!(d&&!a)&&(h||a||g)&&(Ki(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(l){return(!l||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(l),t.prototype.invalidate.call(this,l)},n.resetTo=function(l,o,s,a,c){tu||Pi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||gm(this,u),d=this._ease(u/this._dur),Ww(this,l,o,s,a,d,u,c)?this.resetTo(l,o,s,a,1):(Qf(this,0),this.parent||ux(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(l,o){if(o===void 0&&(o="all"),!l&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?fc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!oi),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(l,o,Xo&&Xo.vars.overwrite!==!0)._first||fc(this),this.parent&&s!==this.timeline.totalDuration()&&ya(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,c=l?wl(l):a,u=this._ptLookup,d=this._pt,h,f,_,m,p,C,g;if((!o||o==="all")&&vw(a,c))return o==="all"&&(this._pt=0),fc(this);for(h=this._op=this._op||[],o!=="all"&&(Fn(o)&&(p={},Ai(o,function(y){return p[y]=1}),o=p),o=Qw(a,o)),g=a.length;g--;)if(~c.indexOf(a[g])){f=u[g],o==="all"?(h[g]=o,m=f,_={}):(_=h[g]=h[g]||{},m=o);for(p in m)C=f&&f[p],C&&((!("kill"in C.d)||C.d.kill(p)===!0)&&qf(this,C,"_pt"),delete f[p]),_!=="all"&&(_[p]=1)}return this._initted&&!this._pt&&d&&fc(this),this},e.to=function(l,o){return new e(l,o,arguments[2])},e.from=function(l,o){return Cc(1,arguments)},e.delayedCall=function(l,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:l,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(l,o,s){return Cc(2,arguments)},e.set=function(l,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(l,o)},e.killTweensOf=function(l,o,s){return dn.killTweensOf(l,o,s)},e}(nu);rl(Dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ai("staggerTo,staggerFrom,staggerFromTo",function(t){Dn[t]=function(){var e=new zi,n=Yh.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var ym=function(e,n,i){return e[n]=i},Rx=function(e,n,i){return e[n](i)},Vw=function(e,n,i,l){return e[n](l.fp,i)},Pw=function(e,n,i){return e.setAttribute(n,i)},xm=function(e,n){return mn(e[n])?Rx:am(e[n])&&e.setAttribute?Pw:ym},zx=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Fw=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Ox=function(e,n){var i=n._pt,l="";if(!e&&n.b)l=n.b;else if(e===1&&n.e)l=n.e;else{for(;i;)l=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+l,i=i._next;l+=n.c}n.set(n.t,n.p,l,n)},bm=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},Zw=function(e,n,i,l){for(var o=this._pt,s;o;)s=o._next,o.p===l&&o.modifier(e,n,i),o=s},Kw=function(e){for(var n=this._pt,i,l;n;)l=n._next,n.p===e&&!n.op||n.op===e?qf(this,n,"_pt"):n.dep||(i=1),n=l;return!i},Jw=function(e,n,i,l){l.mSet(e,n,l.m.call(l.tween,i,l.mt),l)},Ax=function(e){for(var n=e._pt,i,l,o,s;n;){for(i=n._next,l=o;l&&l.pr>n.pr;)l=l._next;(n._prev=l?l._prev:s)?n._prev._next=n:o=n,(n._next=l)?l._prev=n:s=n,n=i}e._pt=o},Ni=function(){function t(n,i,l,o,s,a,c,u,d){this.t=i,this.s=o,this.c=s,this.p=l,this.r=a||zx,this.d=c||this,this.set=u||ym,this.pr=d||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,l,o){this.mSet=this.mSet||this.set,this.set=Jw,this.m=i,this.mt=o,this.tween=l},t}();Ai(_m+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return fm[t]=1});sl.TweenMax=sl.TweenLite=Dn;sl.TimelineLite=sl.TimelineMax=zi;dn=new zi({sortChildren:!1,defaults:Zc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tl.stringFilter=Cx;var Gs=[],zd={},e4=[],bg=0,t4=0,R_=function(e){return(zd[e]||e4).map(function(n){return n()})},qh=function(){var e=Date.now(),n=[];e-bg>2&&(R_("matchMediaInit"),Gs.forEach(function(i){var l=i.queries,o=i.conditions,s,a,c,u;for(a in l)s=Yl.matchMedia(l[a]).matches,s&&(c=1),s!==o[a]&&(o[a]=s,u=1);u&&(i.revert(),c&&n.push(i))}),R_("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(l){return i.add(null,l)})}),bg=e,R_("matchMedia"))},Nx=function(){function t(n,i){this.selector=i&&Uh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=t4++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,l,o){mn(i)&&(o=l,l=i,i=mn);var s=this,a=function(){var u=rn,d=s.selector,h;return u&&u!==s&&u.data.push(s),o&&(s.selector=Uh(o)),rn=s,h=l.apply(s,arguments),mn(h)&&s._r.push(h),rn=u,s.selector=d,s.isReverted=!1,h};return s.last=a,i===mn?a(s,function(c){return s.add(null,c)}):i?s[i]=a:a},e.ignore=function(i){var l=rn;rn=null,i(this),rn=l},e.getTweens=function(){var i=[];return this.data.forEach(function(l){return l instanceof t?i.push.apply(i,l.getTweens()):l instanceof Dn&&!(l.parent&&l.parent.data==="nested")&&i.push(l)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,l){var o=this;if(i?function(){for(var a=o.getTweens(),c=o.data.length,u;c--;)u=o.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return a.splice(a.indexOf(d),1)}));for(a.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),c=o.data.length;c--;)u=o.data[c],u instanceof zi?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Dn)&&u.revert&&u.revert(i);o._r.forEach(function(d){return d(i,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),l)for(var s=Gs.length;s--;)Gs[s].id===this.id&&Gs.splice(s,1)},e.revert=function(i){this.kill(i||{})},t}(),n4=function(){function t(n){this.contexts=[],this.scope=n,rn&&rn.data.push(this)}var e=t.prototype;return e.add=function(i,l,o){Fl(i)||(i={matches:i});var s=new Nx(0,o||this.scope),a=s.conditions={},c,u,d;rn&&!s.selector&&(s.selector=rn.selector),this.contexts.push(s),l=s.add("onMatch",l),s.queries=i;for(u in i)u==="all"?d=1:(c=Yl.matchMedia(i[u]),c&&(Gs.indexOf(s)<0&&Gs.push(s),(a[u]=c.matches)&&(d=1),c.addListener?c.addListener(qh):c.addEventListener("change",qh)));return d&&l(s,function(h){return s.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(l){return l.kill(i,!0)})},t}(),of={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(l){return wx(l)})},timeline:function(e){return new zi(e)},getTweensOf:function(e,n){return dn.getTweensOf(e,n)},getProperty:function(e,n,i,l){Fn(e)&&(e=wl(e)[0]);var o=qs(e||{}).get,s=i?cx:ax;return i==="native"&&(i=""),e&&(n?s((Qi[n]&&Qi[n].get||o)(e,n,i,l)):function(a,c,u){return s((Qi[a]&&Qi[a].get||o)(e,a,c,u))})},quickSetter:function(e,n,i){if(e=wl(e),e.length>1){var l=e.map(function(d){return $i.quickSetter(d,n,i)}),o=l.length;return function(d){for(var h=o;h--;)l[h](d)}}e=e[0]||{};var s=Qi[n],a=qs(e),c=a.harness&&(a.harness.aliases||{})[n]||n,u=s?function(d){var h=new s;Yr._pt=0,h.init(e,i?d+i:d,Yr,0,[e]),h.render(1,h),Yr._pt&&bm(1,Yr)}:a.set(e,c);return s?u:function(d){return u(e,c,i?d+i:d,a,1)}},quickTo:function(e,n,i){var l,o=$i.to(e,rl((l={},l[n]="+=0.1",l.paused=!0,l.stagger=0,l),i||{})),s=function(c,u,d){return o.resetTo(n,c,u,d)};return s.tween=o,s},isTweening:function(e){return dn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qs(e.ease,Zc.ease)),mg(Zc,e||{})},config:function(e){return mg(tl,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,l=e.plugins,o=e.defaults,s=e.extendTimeline;(l||"").split(",").forEach(function(a){return a&&!Qi[a]&&!sl[a]&&Kc(n+" effect requires "+a+" plugin.")}),M_[n]=function(a,c,u){return i(wl(a),rl(c||{},o),u)},s&&(zi.prototype[n]=function(a,c,u){return this.add(M_[n](a,Fl(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,n){wt[e]=Qs(n)},parseEase:function(e,n){return arguments.length?Qs(e,n):wt},getById:function(e){return dn.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new zi(e),l,o;for(i.smoothChildTiming=Oi(e.smoothChildTiming),dn.remove(i),i._dp=0,i._time=i._tTime=dn._time,l=dn._first;l;)o=l._next,(n||!(!l._dur&&l instanceof Dn&&l.vars.onComplete===l._targets[0]))&&Xl(i,l,l._start-l._delay),l=o;return Xl(dn,i,0),i},context:function(e,n){return e?new Nx(e,n):rn},matchMedia:function(e){return new n4(e)},matchMediaRefresh:function(){return Gs.forEach(function(e){var n=e.conditions,i,l;for(l in n)n[l]&&(n[l]=!1,i=1);i&&e.revert()})||qh()},addEventListener:function(e,n){var i=zd[e]||(zd[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=zd[e],l=i&&i.indexOf(n);l>=0&&i.splice(l,1)},utils:{wrap:Ow,wrapYoyo:Aw,distribute:px,random:yx,snap:gx,normalize:zw,getUnit:ui,clamp:Tw,splitColor:Sx,toArray:wl,selector:Uh,mapRange:bx,pipe:Dw,unitize:Rw,interpolate:Nw,shuffle:mx},install:ix,effects:M_,ticker:Pi,updateRoot:zi.updateRoot,plugins:Qi,globalTimeline:dn,core:{PropTween:Ni,globals:lx,Tween:Dn,Timeline:zi,Animation:nu,getCache:qs,_removeLinkedListItem:qf,reverting:function(){return oi},context:function(e){return e&&rn&&(rn.data.push(e),e._ctx=rn),rn},suppressOverwrites:function(e){return rm=e}}};Ai("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return of[t]=Dn[t]});Pi.add(zi.updateRoot);Yr=of.to({},{duration:0});var i4=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},l4=function(e,n){var i=e._targets,l,o,s;for(l in n)for(o=i.length;o--;)s=e._ptLookup[o][l],s&&(s=s.d)&&(s._pt&&(s=i4(s,l)),s&&s.modifier&&s.modifier(n[l],e,i[o],l))},z_=function(e,n){return{name:e,headless:1,rawVars:1,init:function(l,o,s){s._onInit=function(a){var c,u;if(Fn(o)&&(c={},Ai(o,function(d){return c[d]=1}),o=c),n){c={};for(u in o)c[u]=n(o[u]);o=c}l4(a,o)}}}},$i=of.registerPlugin({name:"attr",init:function(e,n,i,l,o){var s,a,c;this.tween=i;for(s in n)c=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(c||0)+"",n[s],l,o,0,0,s),a.op=s,a.b=c,this._props.push(s)},render:function(e,n){for(var i=n._pt;i;)oi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},z_("roundProps",Xh),z_("modifiers"),z_("snap",gx))||of;Dn.version=zi.version=$i.version="3.15.0";nx=1;cm()&&xa();wt.Power0;wt.Power1;wt.Power2;wt.Power3;wt.Power4;wt.Linear;wt.Quad;wt.Cubic;wt.Quart;wt.Quint;wt.Strong;wt.Elastic;wt.Back;wt.SteppedEase;wt.Bounce;wt.Sine;wt.Expo;wt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vg,Io,na,vm,Xs,wg,wm,o4=function(){return typeof window<"u"},wo={},As=180/Math.PI,ia=Math.PI/180,Cr=Math.atan2,Sg=1e8,Sm=/([A-Z])/g,s4=/(left|right|width|margin|padding|x)/i,r4=/[\s,\(]\S/,Il={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},a4=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},c4=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},u4=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},d4=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Lx=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Bx=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},f4=function(e,n,i){return e.style[n]=i},_4=function(e,n,i){return e.style.setProperty(n,i)},h4=function(e,n,i){return e._gsap[n]=i},m4=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},p4=function(e,n,i,l,o){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(o,s)},g4=function(e,n,i,l,o){var s=e._gsap;s[n]=i,s.renderTransform(o,s)},fn="transform",Li=fn+"Origin",y4=function t(e,n){var i=this,l=this.target,o=l.style,s=l._gsap;if(e in wo&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Il[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ao(l,a)}):this.tfm[e]=s.x?s[e]:ao(l,e),e===Li&&(this.tfm.zOrigin=s.zOrigin);else return Il.transform.split(",").forEach(function(a){return t.call(i,a,n)});if(this.props.indexOf(fn)>=0)return;s.svg&&(this.svgo=l.getAttribute("data-svg-origin"),this.props.push(Li,n,"")),e=fn}(o||n)&&this.props.push(e,n,o[e])},$x=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},x4=function(){var e=this.props,n=this.target,i=n.style,l=n._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?n[e[o]](e[o+2]):n[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Sm,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)l[s]=this.tfm[s];l.svg&&(l.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=wm(),(!o||!o.isStart)&&!i[fn]&&($x(i),l.zOrigin&&i[Li]&&(i[Li]+=" "+l.zOrigin+"px",l.zOrigin=0,l.renderTransform()),l.uncache=1)}},Hx=function(e,n){var i={target:e,props:[],revert:x4,save:y4};return e._gsap||$i.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(l){return i.save(l)}),i},Yx,Qh=function(e,n){var i=Io.createElementNS?Io.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Io.createElement(e);return i&&i.style?i:Io.createElement(e)},Ji=function t(e,n,i){var l=getComputedStyle(e);return l[n]||l.getPropertyValue(n.replace(Sm,"-$1").toLowerCase())||l.getPropertyValue(n)||!i&&t(e,ba(n)||n,1)||""},kg="O,Moz,ms,Ms,Webkit".split(","),ba=function(e,n,i){var l=n||Xs,o=l.style,s=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(kg[s]+e in o););return s<0?null:(s===3?"ms":s>=0?kg[s]:"")+e},Gh=function(){o4()&&window.document&&(vg=window,Io=vg.document,na=Io.documentElement,Xs=Qh("div")||{style:{}},Qh("div"),fn=ba(fn),Li=fn+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yx=!!ba("perspective"),wm=$i.core.reverting,vm=1)},Cg=function(e){var n=e.ownerSVGElement,i=Qh("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),l=e.cloneNode(!0),o;l.style.display="block",i.appendChild(l),na.appendChild(i);try{o=l.getBBox()}catch{}return i.removeChild(l),na.removeChild(i),o},jg=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Ux=function(e){var n,i;try{n=e.getBBox()}catch{n=Cg(e),i=1}return n&&(n.width||n.height)||i||(n=Cg(e)),n&&!n.width&&!n.x&&!n.y?{x:+jg(e,["x","cx","x1"])||0,y:+jg(e,["y","cy","y1"])||0,width:0,height:0}:n},Xx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ux(e))},ds=function(e,n){if(n){var i=e.style,l;n in wo&&n!==Li&&(n=fn),i.removeProperty?(l=n.substr(0,2),(l==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(l==="--"?n:n.replace(Sm,"-$1").toLowerCase())):i.removeAttribute(n)}},qo=function(e,n,i,l,o,s){var a=new Ni(e._pt,n,i,0,1,s?Bx:Lx);return e._pt=a,a.b=l,a.e=o,e._props.push(i),a},Mg={deg:1,rad:1,turn:1},b4={grid:1,flex:1},fs=function t(e,n,i,l){var o=parseFloat(i)||0,s=(i+"").trim().substr((o+"").length)||"px",a=Xs.style,c=s4.test(n),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(c?"Width":"Height"),h=100,f=l==="px",_=l==="%",m,p,C,g;if(l===s||!o||Mg[l]||Mg[s])return o;if(s!=="px"&&!f&&(o=t(e,n,i,"px")),g=e.getCTM&&Xx(e),(_||s==="%")&&(wo[n]||~n.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],bn(_?o/m*h:o/100*m);if(a[c?"width":"height"]=h+(f?s:l),p=l!=="rem"&&~n.indexOf("adius")||l==="em"&&e.appendChild&&!u?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Io||!p.appendChild)&&(p=Io.body),C=p._gsap,C&&_&&C.width&&c&&C.time===Pi.time&&!C.uncache)return bn(o/C.width*h);if(_&&(n==="height"||n==="width")){var y=e.style[n];e.style[n]=h+l,m=e[d],y?e.style[n]=y:ds(e,n)}else(_||s==="%")&&!b4[Ji(p,"display")]&&(a.position=Ji(e,"position")),p===e&&(a.position="static"),p.appendChild(Xs),m=Xs[d],p.removeChild(Xs),a.position="absolute";return c&&_&&(C=qs(p),C.time=Pi.time,C.width=p[d]),bn(f?m*o/h:m&&o?h/m*o:0)},ao=function(e,n,i,l){var o;return vm||Gh(),n in Il&&n!=="transform"&&(n=Il[n],~n.indexOf(",")&&(n=n.split(",")[0])),wo[n]&&n!=="transform"?(o=lu(e,l),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:rf(Ji(e,Li))+" "+o.zOrigin+"px"):(o=e.style[n],(!o||o==="auto"||l||~(o+"").indexOf("calc("))&&(o=sf[n]&&sf[n](e,n,i)||Ji(e,n)||sx(e,n)||(n==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?fs(e,n,o,i)+i:o},v4=function(e,n,i,l){if(!i||i==="none"){var o=ba(n,e,1),s=o&&Ji(e,o,1);s&&s!==i?(n=o,i=s):n==="borderColor"&&(i=Ji(e,"borderTopColor"))}var a=new Ni(this._pt,e.style,n,0,1,Ox),c=0,u=0,d,h,f,_,m,p,C,g,y,b,x,M;if(a.b=i,a.e=l,i+="",l+="",l.substring(0,6)==="var(--"&&(l=Ji(e,l.substring(4,l.indexOf(")")))),l==="auto"&&(p=e.style[n],e.style[n]=l,l=Ji(e,n)||l,p?e.style[n]=p:ds(e,n)),d=[i,l],Cx(d),i=d[0],l=d[1],f=i.match(Hr)||[],M=l.match(Hr)||[],M.length){for(;h=Hr.exec(l);)C=h[0],y=l.substring(c,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),C!==(p=f[u++]||"")&&(_=parseFloat(p)||0,x=p.substr((_+"").length),C.charAt(1)==="="&&(C=ta(_,C)+x),g=parseFloat(C),b=C.substr((g+"").length),c=Hr.lastIndex-b.length,b||(b=b||tl.units[n]||x,c===l.length&&(l+=b,a.e+=b)),x!==b&&(_=fs(e,n,p,b)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:_,c:g-_,m:m&&m<4||n==="zIndex"?Math.round:0});a.c=c<l.length?l.substring(c,l.length):""}else a.r=n==="display"&&l==="none"?Bx:Lx;return tx.test(l)&&(a.e=0),this._pt=a,a},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},w4=function(e){var n=e.split(" "),i=n[0],l=n[1]||"50%";return(i==="top"||i==="bottom"||l==="left"||l==="right")&&(e=i,i=l,l=e),n[0]=Tg[i]||i,n[1]=Tg[l]||l,n.join(" ")},S4=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,l=i.style,o=n.u,s=i._gsap,a,c,u;if(o==="all"||o===!0)l.cssText="",c=1;else for(o=o.split(","),u=o.length;--u>-1;)a=o[u],wo[a]&&(c=1,a=a==="transformOrigin"?Li:fn),ds(i,a);c&&(ds(i,fn),s&&(s.svg&&i.removeAttribute("transform"),l.scale=l.rotate=l.translate="none",lu(i,1),s.uncache=1,$x(l)))}},sf={clearProps:function(e,n,i,l,o){if(o.data!=="isFromStart"){var s=e._pt=new Ni(e._pt,n,i,0,0,S4);return s.u=l,s.pr=-10,s.tween=o,e._props.push(i),1}}},iu=[1,0,0,1,0,0],Ix={},qx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eg=function(e){var n=Ji(e,fn);return qx(n)?iu:n.substr(7).match(ex).map(bn)},km=function(e,n){var i=e._gsap||qs(e),l=e.style,o=Eg(e),s,a,c,u;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?iu:o):(o===iu&&!e.offsetParent&&e!==na&&!i.svg&&(c=l.display,l.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,na.appendChild(e)),o=Eg(e),c?l.display=c:ds(e,"display"),u&&(a?s.insertBefore(e,a):s?s.appendChild(e):na.removeChild(e))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Vh=function(e,n,i,l,o,s){var a=e._gsap,c=o||km(e,!0),u=a.xOrigin||0,d=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,_=c[0],m=c[1],p=c[2],C=c[3],g=c[4],y=c[5],b=n.split(" "),x=parseFloat(b[0])||0,M=parseFloat(b[1])||0,R,k,N,L;i?c!==iu&&(k=_*C-m*p)&&(N=x*(C/k)+M*(-p/k)+(p*y-C*g)/k,L=x*(-m/k)+M*(_/k)-(_*y-m*g)/k,x=N,M=L):(R=Ux(e),x=R.x+(~b[0].indexOf("%")?x/100*R.width:x),M=R.y+(~(b[1]||b[0]).indexOf("%")?M/100*R.height:M)),l||l!==!1&&a.smooth?(g=x-u,y=M-d,a.xOffset=h+(g*_+y*p)-g,a.yOffset=f+(g*m+y*C)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!l,a.origin=n,a.originIsAbsolute=!!i,e.style[Li]="0px 0px",s&&(qo(s,a,"xOrigin",u,x),qo(s,a,"yOrigin",d,M),qo(s,a,"xOffset",h,a.xOffset),qo(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},lu=function(e,n){var i=e._gsap||new Mx(e);if("x"in i&&!n&&!i.uncache)return i;var l=e.style,o=i.scaleX<0,s="px",a="deg",c=getComputedStyle(e),u=Ji(e,Li)||"0",d,h,f,_,m,p,C,g,y,b,x,M,R,k,N,L,A,J,V,pe,oe,ae,$,F,H,te,D,De,_t,St,st,xt;return d=h=f=p=C=g=y=b=x=0,_=m=1,i.svg=!!(e.getCTM&&Xx(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(l[fn]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[fn]!=="none"?c[fn]:"")),l.scale=l.rotate=l.translate="none"),k=km(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),u=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),Vh(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,k)),M=i.xOrigin||0,R=i.yOrigin||0,k!==iu&&(J=k[0],V=k[1],pe=k[2],oe=k[3],d=ae=k[4],h=$=k[5],k.length===6?(_=Math.sqrt(J*J+V*V),m=Math.sqrt(oe*oe+pe*pe),p=J||V?Cr(V,J)*As:0,y=pe||oe?Cr(pe,oe)*As+p:0,y&&(m*=Math.abs(Math.cos(y*ia))),i.svg&&(d-=M-(M*J+R*pe),h-=R-(M*V+R*oe))):(xt=k[6],St=k[7],D=k[8],De=k[9],_t=k[10],st=k[11],d=k[12],h=k[13],f=k[14],N=Cr(xt,_t),C=N*As,N&&(L=Math.cos(-N),A=Math.sin(-N),F=ae*L+D*A,H=$*L+De*A,te=xt*L+_t*A,D=ae*-A+D*L,De=$*-A+De*L,_t=xt*-A+_t*L,st=St*-A+st*L,ae=F,$=H,xt=te),N=Cr(-pe,_t),g=N*As,N&&(L=Math.cos(-N),A=Math.sin(-N),F=J*L-D*A,H=V*L-De*A,te=pe*L-_t*A,st=oe*A+st*L,J=F,V=H,pe=te),N=Cr(V,J),p=N*As,N&&(L=Math.cos(N),A=Math.sin(N),F=J*L+V*A,H=ae*L+$*A,V=V*L-J*A,$=$*L-ae*A,J=F,ae=H),C&&Math.abs(C)+Math.abs(p)>359.9&&(C=p=0,g=180-g),_=bn(Math.sqrt(J*J+V*V+pe*pe)),m=bn(Math.sqrt($*$+xt*xt)),N=Cr(ae,$),y=Math.abs(N)>2e-4?N*As:0,x=st?1/(st<0?-st:st):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qx(Ji(e,fn)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(o?(_*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=d-((i.xPercent=d&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=h-((i.yPercent=h&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=bn(_),i.scaleY=bn(m),i.rotation=bn(p)+a,i.rotationX=bn(C)+a,i.rotationY=bn(g)+a,i.skewX=y+a,i.skewY=b+a,i.transformPerspective=x+s,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(l[Li]=rf(u)),i.xOffset=i.yOffset=0,i.force3D=tl.force3D,i.renderTransform=i.svg?C4:Yx?Wx:k4,i.uncache=0,i},rf=function(e){return(e=e.split(" "))[0]+" "+e[1]},O_=function(e,n,i){var l=ui(n);return bn(parseFloat(n)+parseFloat(fs(e,"x",i+"px",l)))+l},k4=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Wx(e,n)},Ts="0deg",Fa="0px",Es=") ",Wx=function(e,n){var i=n||this,l=i.xPercent,o=i.yPercent,s=i.x,a=i.y,c=i.z,u=i.rotation,d=i.rotationY,h=i.rotationX,f=i.skewX,_=i.skewY,m=i.scaleX,p=i.scaleY,C=i.transformPerspective,g=i.force3D,y=i.target,b=i.zOrigin,x="",M=g==="auto"&&e&&e!==1||g===!0;if(b&&(h!==Ts||d!==Ts)){var R=parseFloat(d)*ia,k=Math.sin(R),N=Math.cos(R),L;R=parseFloat(h)*ia,L=Math.cos(R),s=O_(y,s,k*L*-b),a=O_(y,a,-Math.sin(R)*-b),c=O_(y,c,N*L*-b+b)}C!==Fa&&(x+="perspective("+C+Es),(l||o)&&(x+="translate("+l+"%, "+o+"%) "),(M||s!==Fa||a!==Fa||c!==Fa)&&(x+=c!==Fa||M?"translate3d("+s+", "+a+", "+c+") ":"translate("+s+", "+a+Es),u!==Ts&&(x+="rotate("+u+Es),d!==Ts&&(x+="rotateY("+d+Es),h!==Ts&&(x+="rotateX("+h+Es),(f!==Ts||_!==Ts)&&(x+="skew("+f+", "+_+Es),(m!==1||p!==1)&&(x+="scale("+m+", "+p+Es),y.style[fn]=x||"translate(0, 0)"},C4=function(e,n){var i=n||this,l=i.xPercent,o=i.yPercent,s=i.x,a=i.y,c=i.rotation,u=i.skewX,d=i.skewY,h=i.scaleX,f=i.scaleY,_=i.target,m=i.xOrigin,p=i.yOrigin,C=i.xOffset,g=i.yOffset,y=i.forceCSS,b=parseFloat(s),x=parseFloat(a),M,R,k,N,L;c=parseFloat(c),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,c+=d),c||u?(c*=ia,u*=ia,M=Math.cos(c)*h,R=Math.sin(c)*h,k=Math.sin(c-u)*-f,N=Math.cos(c-u)*f,u&&(d*=ia,L=Math.tan(u-d),L=Math.sqrt(1+L*L),k*=L,N*=L,d&&(L=Math.tan(d),L=Math.sqrt(1+L*L),M*=L,R*=L)),M=bn(M),R=bn(R),k=bn(k),N=bn(N)):(M=h,N=f,R=k=0),(b&&!~(s+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=fs(_,"x",s,"px"),x=fs(_,"y",a,"px")),(m||p||C||g)&&(b=bn(b+m-(m*M+p*k)+C),x=bn(x+p-(m*R+p*N)+g)),(l||o)&&(L=_.getBBox(),b=bn(b+l/100*L.width),x=bn(x+o/100*L.height)),L="matrix("+M+","+R+","+k+","+N+","+b+","+x+")",_.setAttribute("transform",L),y&&(_.style[fn]=L)},j4=function(e,n,i,l,o){var s=360,a=Fn(o),c=parseFloat(o)*(a&&~o.indexOf("rad")?As:1),u=c-l,d=l+u+"deg",h,f;return a&&(h=o.split("_")[1],h==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),h==="cw"&&u<0?u=(u+s*Sg)%s-~~(u/s)*s:h==="ccw"&&u>0&&(u=(u-s*Sg)%s-~~(u/s)*s)),e._pt=f=new Ni(e._pt,n,i,l,u,a4),f.e=d,f.u="deg",e._props.push(i),f},Dg=function(e,n){for(var i in n)e[i]=n[i];return e},M4=function(e,n,i){var l=Dg({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=i.style,a,c,u,d,h,f,_,m;l.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),s[fn]=n,a=lu(i,1),ds(i,fn),i.setAttribute("transform",u)):(u=getComputedStyle(i)[fn],s[fn]=n,a=lu(i,1),s[fn]=u);for(c in wo)u=l[c],d=a[c],u!==d&&o.indexOf(c)<0&&(_=ui(u),m=ui(d),h=_!==m?fs(i,c,u,m):parseFloat(u),f=parseFloat(d),e._pt=new Ni(e._pt,a,c,h,f-h,Wh),e._pt.u=m||0,e._props.push(c));Dg(a,l)};Ai("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",l="Bottom",o="Left",s=(e<3?[n,i,l,o]:[n+o,n+i,l+i,l+o]).map(function(a){return e<2?t+a:"border"+a+t});sf[e>1?"border"+t:t]=function(a,c,u,d,h){var f,_;if(arguments.length<4)return f=s.map(function(m){return ao(a,m,u)}),_=f.join(" "),_.split(f[0]).length===5?f[0]:_;f=(d+"").split(" "),_={},s.forEach(function(m,p){return _[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(c,_,h)}});var Qx={name:"css",register:Gh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,l,o){var s=this._props,a=e.style,c=i.vars.startAt,u,d,h,f,_,m,p,C,g,y,b,x,M,R,k,N,L;vm||Gh(),this.styles=this.styles||Hx(e),N=this.styles.props,this.tween=i;for(p in n)if(p!=="autoRound"&&(d=n[p],!(Qi[p]&&Tx(p,n,i,l,e,o)))){if(_=typeof d,m=sf[p],_==="function"&&(d=d.call(i,l,e,o),_=typeof d),_==="string"&&~d.indexOf("random(")&&(d=eu(d)),m)m(this,e,p,d,i)&&(k=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),d+="",Jo.lastIndex=0,Jo.test(u)||(C=ui(u),g=ui(d),g?C!==g&&(u=fs(e,p,u,g)+g):C&&(d+=C)),this.add(a,"setProperty",u,d,l,o,0,0,p),s.push(p),N.push(p,0,a[p]);else if(_!=="undefined"){if(c&&p in c?(u=typeof c[p]=="function"?c[p].call(i,l,e,o):c[p],Fn(u)&&~u.indexOf("random(")&&(u=eu(u)),ui(u+"")||u==="auto"||(u+=tl.units[p]||ui(ao(e,p))||""),(u+"").charAt(1)==="="&&(u=ao(e,p))):u=ao(e,p),f=parseFloat(u),y=_==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),h=parseFloat(d),p in Il&&(p==="autoAlpha"&&(f===1&&ao(e,"visibility")==="hidden"&&h&&(f=0),N.push("visibility",0,a.visibility),qo(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Il[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in wo,b){if(this.styles.save(p),L=d,_==="string"&&d.substring(0,6)==="var(--"){if(d=Ji(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=d,d=Ji(e,"perspective"),A?e.style.perspective=A:ds(e,"perspective")}h=parseFloat(d)}if(x||(M=e._gsap,M.renderTransform&&!n.parseTransform||lu(e,n.parseTransform),R=n.smoothOrigin!==!1&&M.smooth,x=this._pt=new Ni(this._pt,a,fn,0,1,M.renderTransform,M,0,-1),x.dep=1),p==="scale")this._pt=new Ni(this._pt,M,"scaleY",M.scaleY,(y?ta(M.scaleY,y+h):h)-M.scaleY||0,Wh),this._pt.u=0,s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){N.push(Li,0,a[Li]),d=w4(d),M.svg?Vh(e,d,0,R,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==M.zOrigin&&qo(this,M,"zOrigin",M.zOrigin,g),qo(this,a,p,rf(u),rf(d)));continue}else if(p==="svgOrigin"){Vh(e,d,1,R,0,this);continue}else if(p in Ix){j4(this,M,p,f,y?ta(f,y+d):d);continue}else if(p==="smoothOrigin"){qo(this,M,"smooth",M.smooth,d);continue}else if(p==="force3D"){M[p]=d;continue}else if(p==="transform"){M4(this,d,e);continue}}else p in a||(p=ba(p)||p);if(b||(h||h===0)&&(f||f===0)&&!r4.test(d)&&p in a)C=(u+"").substr((f+"").length),h||(h=0),g=ui(d)||(p in tl.units?tl.units[p]:C),C!==g&&(f=fs(e,p,u,g)),this._pt=new Ni(this._pt,b?M:a,p,f,(y?ta(f,y+h):h)-f,!b&&(g==="px"||p==="zIndex")&&n.autoRound!==!1?d4:Wh),this._pt.u=g||0,b&&L!==d?(this._pt.b=u,this._pt.e=L,this._pt.r=u4):C!==g&&g!=="%"&&(this._pt.b=u,this._pt.r=c4);else if(p in a)v4.call(this,e,p,u,y?y+d:d);else if(p in e)this.add(e,p,u||e[p],y?y+d:d,l,o);else if(p!=="parseTransform"){dm(p,d);continue}b||(p in a?N.push(p,0,a[p]):typeof e[p]=="function"?N.push(p,2,e[p]()):N.push(p,1,u||e[p])),s.push(p)}}k&&Ax(this)},render:function(e,n){if(n.tween._time||!wm())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:ao,aliases:Il,getSetter:function(e,n,i){var l=Il[n];return l&&l.indexOf(",")<0&&(n=l),n in wo&&n!==Li&&(e._gsap.x||ao(e,"x"))?i&&wg===i?n==="scale"?m4:h4:(wg=i||{})&&(n==="scale"?p4:g4):e.style&&!am(e.style[n])?f4:~n.indexOf("-")?_4:xm(e,n)},core:{_removeProperty:ds,_getMatrix:km}};$i.utils.checkPrefix=ba;$i.core.getStyleSaver=Hx;(function(t,e,n,i){var l=Ai(t+","+e+","+n,function(o){wo[o]=1});Ai(e,function(o){tl.units[o]="deg",Ix[o]=1}),Il[l[13]]=t+","+e,Ai(i,function(o){var s=o.split(":");Il[s[1]]=l[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){tl.units[t]="px"});$i.registerPlugin(Qx);var mt=$i.registerPlugin(Qx)||$i;mt.core.Tween;function T4(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function E4(t,e,n){return e&&T4(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ii,Od,Fi,Wo,Qo,la,Gx,Ns,oa,Vx,_o,Dl,Px,Fx=function(){return ii||typeof window<"u"&&(ii=window.gsap)&&ii.registerPlugin&&ii},Zx=1,Ur=[],ft=[],Vl=[],Mc=Date.now,Ph=function(e,n){return n},D4=function(){var e=oa.core,n=e.bridge||{},i=e._scrollers,l=e._proxies;i.push.apply(i,ft),l.push.apply(l,Vl),ft=i,Vl=l,Ph=function(s,a){return n[s](a)}},es=function(e,n){return~Vl.indexOf(e)&&Vl[Vl.indexOf(e)+1][n]},Tc=function(e){return!!~Vx.indexOf(e)},pi=function(e,n,i,l,o){return e.addEventListener(n,i,{passive:l!==!1,capture:!!o})},mi=function(e,n,i,l){return e.removeEventListener(n,i,!!l)},qu="scrollLeft",Wu="scrollTop",Fh=function(){return _o&&_o.isPressed||ft.cache++},af=function(e,n){var i=function l(o){if(o||o===0){Zx&&(Fi.history.scrollRestoration="manual");var s=_o&&_o.isPressed;o=l.v=Math.round(o)||(_o&&_o.iOS?1:0),e(o),l.cacheID=ft.cache,s&&Ph("ss",o)}else(n||ft.cache!==l.cacheID||Ph("ref"))&&(l.cacheID=ft.cache,l.v=e());return l.v+l.offset};return i.offset=0,e&&i},wi={s:qu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:af(function(t){return arguments.length?Fi.scrollTo(t,Yn.sc()):Fi.pageXOffset||Wo[qu]||Qo[qu]||la[qu]||0})},Yn={s:Wu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wi,sc:af(function(t){return arguments.length?Fi.scrollTo(wi.sc(),t):Fi.pageYOffset||Wo[Wu]||Qo[Wu]||la[Wu]||0})},Di=function(e,n){return(n&&n._ctx&&n._ctx.selector||ii.utils.toArray)(e)[0]||(typeof e=="string"&&ii.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},R4=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},_s=function(e,n){var i=n.s,l=n.sc;Tc(e)&&(e=Wo.scrollingElement||Qo);var o=ft.indexOf(e),s=l===Yn.sc?1:2;!~o&&(o=ft.push(e)-1),ft[o+s]||pi(e,"scroll",Fh);var a=ft[o+s],c=a||(ft[o+s]=af(es(e,i),!0)||(Tc(e)?l:af(function(u){return arguments.length?e[i]=u:e[i]})));return c.target=e,a||(c.smooth=ii.getProperty(e,"scrollBehavior")==="smooth"),c},Zh=function(e,n,i){var l=e,o=e,s=Mc(),a=s,c=n||50,u=Math.max(500,c*3),d=function(m,p){var C=Mc();p||C-s>c?(o=l,l=m,a=s,s=C):i?l+=m:l=o+(m-o)/(C-a)*(s-a)},h=function(){o=l=i?0:l,a=s=0},f=function(m){var p=a,C=o,g=Mc();return(m||m===0)&&m!==l&&d(m),s===a||g-a>u?0:(l+(i?C:-C))/((i?g:s)-p)*1e3};return{update:d,reset:h,getVelocity:f}},Za=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rg=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},Kx=function(){oa=ii.core.globals().ScrollTrigger,oa&&oa.core&&D4()},Jx=function(e){return ii=e||Fx(),!Od&&ii&&typeof document<"u"&&document.body&&(Fi=window,Wo=document,Qo=Wo.documentElement,la=Wo.body,Vx=[Fi,Wo,Qo,la],ii.utils.clamp,Px=ii.core.context||function(){},Ns="onpointerenter"in la?"pointer":"mouse",Gx=wn.isTouch=Fi.matchMedia&&Fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Dl=wn.eventTypes=("ontouchstart"in Qo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zx=0},500),Od=1),oa||Kx(),Od};wi.op=Yn;ft.cache=0;var wn=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Od||Jx(ii)||console.warn("Please gsap.registerPlugin(Observer)"),oa||Kx();var l=i.tolerance,o=i.dragMinimum,s=i.type,a=i.target,c=i.lineHeight,u=i.debounce,d=i.preventDefault,h=i.onStop,f=i.onStopDelay,_=i.ignore,m=i.wheelSpeed,p=i.event,C=i.onDragStart,g=i.onDragEnd,y=i.onDrag,b=i.onPress,x=i.onRelease,M=i.onRight,R=i.onLeft,k=i.onUp,N=i.onDown,L=i.onChangeX,A=i.onChangeY,J=i.onChange,V=i.onToggleX,pe=i.onToggleY,oe=i.onHover,ae=i.onHoverEnd,$=i.onMove,F=i.ignoreCheck,H=i.isNormalizer,te=i.onGestureStart,D=i.onGestureEnd,De=i.onWheel,_t=i.onEnable,St=i.onDisable,st=i.onClick,xt=i.scrollSpeed,Pt=i.capture,Ct=i.allowClicks,Ft=i.lockAxis,Zt=i.onLockAxis;this.target=a=Di(a)||Qo,this.vars=i,_&&(_=ii.utils.toArray(_)),l=l||1e-9,o=o||0,m=m||1,xt=xt||1,s=s||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(Fi.getComputedStyle(la).lineHeight)||22);var Zn,zt,ot,Ne,rt,an,cn,Y=this,U=0,ye=0,Oe=i.passive||!d&&i.passive!==!1,_e=_s(a,wi),Ve=_s(a,Yn),$e=_e(),Ke=Ve(),je=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Dl[0]==="pointerdown",tt=Tc(a),Qe=a.ownerDocument||Wo,he=[0,0,0],z=[0,0,0],B=0,W=function(){return B=Mc()},I=function(Z,we){return(Y.event=Z)&&_&&R4(Z.target,_)||we&&je&&Z.pointerType!=="touch"||F&&F(Z,we)},ve=function(){Y._vx.reset(),Y._vy.reset(),zt.pause(),h&&h(Y)},de=function(){var Z=Y.deltaX=Rg(he),we=Y.deltaY=Rg(z),ie=Math.abs(Z)>=l,Me=Math.abs(we)>=l;J&&(ie||Me)&&J(Y,Z,we,he,z),ie&&(M&&Y.deltaX>0&&M(Y),R&&Y.deltaX<0&&R(Y),L&&L(Y),V&&Y.deltaX<0!=U<0&&V(Y),U=Y.deltaX,he[0]=he[1]=he[2]=0),Me&&(N&&Y.deltaY>0&&N(Y),k&&Y.deltaY<0&&k(Y),A&&A(Y),pe&&Y.deltaY<0!=ye<0&&pe(Y),ye=Y.deltaY,z[0]=z[1]=z[2]=0),(Ne||ot)&&($&&$(Y),ot&&(C&&ot===1&&C(Y),y&&y(Y),ot=0),Ne=!1),an&&!(an=!1)&&Zt&&Zt(Y),rt&&(De(Y),rt=!1),Zn=0},ne=function(Z,we,ie){he[ie]+=Z,z[ie]+=we,Y._vx.update(Z),Y._vy.update(we),u?Zn||(Zn=requestAnimationFrame(de)):de()},Pe=function(Z,we){Ft&&!cn&&(Y.axis=cn=Math.abs(Z)>Math.abs(we)?"x":"y",an=!0),cn!=="y"&&(he[2]+=Z,Y._vx.update(Z,!0)),cn!=="x"&&(z[2]+=we,Y._vy.update(we,!0)),u?Zn||(Zn=requestAnimationFrame(de)):de()},Ae=function(Z){if(!I(Z,1)){Z=Za(Z,d);var we=Z.clientX,ie=Z.clientY,Me=we-Y.x,me=ie-Y.y,Le=Y.isDragging;Y.x=we,Y.y=ie,(Le||(Me||me)&&(Math.abs(Y.startX-we)>=o||Math.abs(Y.startY-ie)>=o))&&(ot||(ot=Le?2:1),Le||(Y.isDragging=!0),Pe(Me,me))}},Je=Y.onPress=function(ke){I(ke,1)||ke&&ke.button||(Y.axis=cn=null,zt.pause(),Y.isPressed=!0,ke=Za(ke),U=ye=0,Y.startX=Y.x=ke.clientX,Y.startY=Y.y=ke.clientY,Y._vx.reset(),Y._vy.reset(),pi(H?a:Qe,Dl[1],Ae,Oe,!0),Y.deltaX=Y.deltaY=0,b&&b(Y))},se=Y.onRelease=function(ke){if(!I(ke,1)){mi(H?a:Qe,Dl[1],Ae,!0);var Z=!isNaN(Y.y-Y.startY),we=Y.isDragging,ie=we&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Me=Za(ke);!ie&&Z&&(Y._vx.reset(),Y._vy.reset(),d&&Ct&&ii.delayedCall(.08,function(){if(Mc()-B>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(Qe.createEvent){var me=Qe.createEvent("MouseEvents");me.initMouseEvent("click",!0,!0,Fi,1,Me.screenX,Me.screenY,Me.clientX,Me.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(me)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&we&&!H&&zt.restart(!0),ot&&de(),g&&we&&g(Y),x&&x(Y,ie)}},fe=function(Z){return Z.touches&&Z.touches.length>1&&(Y.isGesturing=!0)&&te(Z,Y.isDragging)},qe=function(){return(Y.isGesturing=!1)||D(Y)},Fe=function(Z){if(!I(Z)){var we=_e(),ie=Ve();ne((we-$e)*xt,(ie-Ke)*xt,1),$e=we,Ke=ie,h&&zt.restart(!0)}},jt=function(Z){if(!I(Z)){Z=Za(Z,d),De&&(rt=!0);var we=(Z.deltaMode===1?c:Z.deltaMode===2?Fi.innerHeight:1)*m;ne(Z.deltaX*we,Z.deltaY*we,0),h&&!H&&zt.restart(!0)}},ce=function(Z){if(!I(Z)){var we=Z.clientX,ie=Z.clientY,Me=we-Y.x,me=ie-Y.y;Y.x=we,Y.y=ie,Ne=!0,h&&zt.restart(!0),(Me||me)&&Pe(Me,me)}},nt=function(Z){Y.event=Z,oe(Y)},He=function(Z){Y.event=Z,ae(Y)},We=function(Z){return I(Z)||Za(Z,d)&&st(Y)};zt=Y._dc=ii.delayedCall(f||.25,ve).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Zh(0,50,!0),Y._vy=Zh(0,50,!0),Y.scrollX=_e,Y.scrollY=Ve,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Px(this),Y.enable=function(ke){return Y.isEnabled||(pi(tt?Qe:a,"scroll",Fh),s.indexOf("scroll")>=0&&pi(tt?Qe:a,"scroll",Fe,Oe,Pt),s.indexOf("wheel")>=0&&pi(a,"wheel",jt,Oe,Pt),(s.indexOf("touch")>=0&&Gx||s.indexOf("pointer")>=0)&&(pi(a,Dl[0],Je,Oe,Pt),pi(Qe,Dl[2],se),pi(Qe,Dl[3],se),Ct&&pi(a,"click",W,!0,!0),st&&pi(a,"click",We),te&&pi(Qe,"gesturestart",fe),D&&pi(Qe,"gestureend",qe),oe&&pi(a,Ns+"enter",nt),ae&&pi(a,Ns+"leave",He),$&&pi(a,Ns+"move",ce)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ne=ot=!1,Y._vx.reset(),Y._vy.reset(),$e=_e(),Ke=Ve(),ke&&ke.type&&Je(ke),_t&&_t(Y)),Y},Y.disable=function(){Y.isEnabled&&(Ur.filter(function(ke){return ke!==Y&&Tc(ke.target)}).length||mi(tt?Qe:a,"scroll",Fh),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),mi(H?a:Qe,Dl[1],Ae,!0)),mi(tt?Qe:a,"scroll",Fe,Pt),mi(a,"wheel",jt,Pt),mi(a,Dl[0],Je,Pt),mi(Qe,Dl[2],se),mi(Qe,Dl[3],se),mi(a,"click",W,!0),mi(a,"click",We),mi(Qe,"gesturestart",fe),mi(Qe,"gestureend",qe),mi(a,Ns+"enter",nt),mi(a,Ns+"leave",He),mi(a,Ns+"move",ce),Y.isEnabled=Y.isPressed=Y.isDragging=!1,St&&St(Y))},Y.kill=Y.revert=function(){Y.disable();var ke=Ur.indexOf(Y);ke>=0&&Ur.splice(ke,1),_o===Y&&(_o=0)},Ur.push(Y),H&&Tc(a)&&(_o=Y),Y.enable(p)},E4(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();wn.version="3.15.0";wn.create=function(t){return new wn(t)};wn.register=Jx;wn.getAll=function(){return Ur.slice()};wn.getById=function(t){return Ur.filter(function(e){return e.vars.id===t})[0]};Fx()&&ii.registerPlugin(wn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,Ar,ut,Ot,Gi,Rt,Cm,cf,ou,Ec,hc,Qu,ai,Gf,Kh,bi,zg,Og,Nr,e5,A_,t5,xi,Jh,n5,i5,No,e0,jm,sa,Mm,Dc,t0,N_,Gu=1,ci=Date.now,L_=ci(),Sl=0,mc=0,Ag=function(e,n,i){var l=qi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=l,l?e.substr(6,e.length-7):e},Ng=function(e,n){return n&&(!qi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},z4=function t(){return mc&&requestAnimationFrame(t)},Lg=function(){return Gf=1},Bg=function(){return Gf=0},Ul=function(e){return e},pc=function(e){return Math.round(e*1e5)/1e5||0},l5=function(){return typeof window<"u"},o5=function(){return Se||l5()&&(Se=window.gsap)&&Se.registerPlugin&&Se},nr=function(e){return!!~Cm.indexOf(e)},s5=function(e){return(e==="Height"?Mm:ut["inner"+e])||Gi["client"+e]||Rt["client"+e]},r5=function(e){return es(e,"getBoundingClientRect")||(nr(e)?function(){return $d.width=ut.innerWidth,$d.height=Mm,$d}:function(){return uo(e)})},O4=function(e,n,i){var l=i.d,o=i.d2,s=i.a;return(s=es(e,"getBoundingClientRect"))?function(){return s()[l]}:function(){return(n?s5(o):e["client"+o])||0}},A4=function(e,n){return!n||~Vl.indexOf(e)?r5(e):function(){return $d}},ql=function(e,n){var i=n.s,l=n.d2,o=n.d,s=n.a;return Math.max(0,(i="scroll"+l)&&(s=es(e,i))?s()-r5(e)()[o]:nr(e)?(Gi[i]||Rt[i])-s5(l):e[i]-e["offset"+l])},Vu=function(e,n){for(var i=0;i<Nr.length;i+=3)(!n||~n.indexOf(Nr[i+1]))&&e(Nr[i],Nr[i+1],Nr[i+2])},qi=function(e){return typeof e=="string"},di=function(e){return typeof e=="function"},gc=function(e){return typeof e=="number"},Ls=function(e){return typeof e=="object"},Ka=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},jr=function(e,n,i){if(e.enabled){var l=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);l&&l.totalTime&&(e.callbackAnimation=l)}},Mr=Math.abs,a5="left",c5="top",Tm="right",Em="bottom",Vs="width",Ps="height",Rc="Right",zc="Left",Oc="Top",Ac="Bottom",En="padding",_l="margin",va="Width",Dm="Height",Hn="px",hl=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},N4=function(e){var n=hl(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},$g=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},uo=function(e,n){var i=n&&hl(e)[Kh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),l=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),l},uf=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},u5=function(e){var n=[],i=e.labels,l=e.duration(),o;for(o in i)n.push(i[o]/l);return n},L4=function(e){return function(n){return Se.utils.snap(u5(e),n)}},Rm=function(e){var n=Se.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(l,o){return l-o});return i?function(l,o,s){s===void 0&&(s=.001);var a;if(!o)return n(l);if(o>0){for(l-=s,a=0;a<i.length;a++)if(i[a]>=l)return i[a];return i[a-1]}else for(a=i.length,l+=s;a--;)if(i[a]<=l)return i[a];return i[0]}:function(l,o,s){s===void 0&&(s=.001);var a=n(l);return!o||Math.abs(a-l)<s||a-l<0==o<0?a:n(o<0?l-e:l+e)}},B4=function(e){return function(n,i){return Rm(u5(e))(n,i.direction)}},Pu=function(e,n,i,l){return i.split(",").forEach(function(o){return e(n,o,l)})},Qn=function(e,n,i,l,o){return e.addEventListener(n,i,{passive:!l,capture:!!o})},Wn=function(e,n,i,l){return e.removeEventListener(n,i,!!l)},Fu=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},Hg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zu={toggleActions:"play",anticipatePin:0},df={top:0,left:0,center:.5,bottom:1,right:1},Ad=function(e,n){if(qi(e)){var i=e.indexOf("="),l=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(l*=n/100),e=e.substr(0,i-1)),e=l+(e in df?df[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},Ku=function(e,n,i,l,o,s,a,c){var u=o.startColor,d=o.endColor,h=o.fontSize,f=o.indent,_=o.fontWeight,m=Ot.createElement("div"),p=nr(i)||es(i,"pinType")==="fixed",C=e.indexOf("scroller")!==-1,g=p?Rt:i.tagName==="IFRAME"?i.contentDocument.body:i,y=e.indexOf("start")!==-1,b=y?u:d,x="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((C||c)&&p?"fixed;":"absolute;"),(C||c||!p)&&(x+=(l===Yn?Tm:Em)+":"+(s+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),m.style.cssText=x,m.innerText=n||n===0?e+"-"+n:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+l.op.d2],Nd(m,0,l,y),m},Nd=function(e,n,i,l){var o={display:"block"},s=i[l?"os2":"p2"],a=i[l?"p2":"os2"];e._isFlipped=l,o[i.a+"Percent"]=l?-100:0,o[i.a]=l?"1px":0,o["border"+s+va]=1,o["border"+a+va]=0,o[i.p]=n+"px",Se.set(e,o)},ct=[],n0={},su,Yg=function(){return ci()-Sl>34&&(su||(su=requestAnimationFrame(go)))},Tr=function(){(!xi||!xi.isPressed||xi.startX>Rt.clientWidth)&&(ft.cache++,xi?su||(su=requestAnimationFrame(go)):go(),Sl||lr("scrollStart"),Sl=ci())},B_=function(){i5=ut.innerWidth,n5=ut.innerHeight},yc=function(e){ft.cache++,(e===!0||!ai&&!t5&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!Jh||i5!==ut.innerWidth||Math.abs(ut.innerHeight-n5)>ut.innerHeight*.25))&&cf.restart(!0)},ir={},$4=[],d5=function t(){return Wn(Ge,"scrollEnd",t)||Is(!0)},lr=function(e){return ir[e]&&ir[e].map(function(n){return n()})||$4},Ii=[],f5=function(e){for(var n=0;n<Ii.length;n+=5)(!e||Ii[n+4]&&Ii[n+4].query===e)&&(Ii[n].style.cssText=Ii[n+1],Ii[n].getBBox&&Ii[n].setAttribute("transform",Ii[n+2]||""),Ii[n+3].uncache=1)},_5=function(){return ft.forEach(function(e){return di(e)&&++e.cacheID&&(e.rec=e())})},zm=function(e,n){var i;for(bi=0;bi<ct.length;bi++)i=ct[bi],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));Dc=!0,n&&f5(n),n||lr("revert")},h5=function(e,n){ft.cache++,(n||!vi)&&ft.forEach(function(i){return di(i)&&i.cacheID++&&(i.rec=0)}),qi(e)&&(ut.history.scrollRestoration=jm=e)},vi,Fs=0,Ug,H4=function(){if(Ug!==Fs){var e=Ug=Fs;requestAnimationFrame(function(){return e===Fs&&Is(!0)})}},m5=function(){Rt.appendChild(sa),Mm=!xi&&sa.offsetHeight||ut.innerHeight,Rt.removeChild(sa)},Xg=function(e){return ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},Is=function(e,n){if(Gi=Ot.documentElement,Rt=Ot.body,Cm=[ut,Ot,Gi,Rt],Sl&&!e&&!Dc){Qn(Ge,"scrollEnd",d5);return}m5(),vi=Ge.isRefreshing=!0,Dc||_5();var i=lr("refreshInit");e5&&Ge.sort(),n||zm(),ft.forEach(function(l){di(l)&&(l.smooth&&(l.target.style.scrollBehavior="auto"),l(0))}),ct.slice(0).forEach(function(l){return l.refresh()}),Dc=!1,ct.forEach(function(l){if(l._subPinOffset&&l.pin){var o=l.vars.horizontal?"offsetWidth":"offsetHeight",s=l.pin[o];l.revert(!0,1),l.adjustPinSpacing(l.pin[o]-s),l.refresh()}}),t0=1,Xg(!0),ct.forEach(function(l){var o=ql(l.scroller,l._dir),s=l.vars.end==="max"||l._endClamp&&l.end>o,a=l._startClamp&&l.start>=o;(s||a)&&l.setPositions(a?o-1:l.start,s?Math.max(a?o:l.start+1,o):l.end,!0)}),Xg(!1),t0=0,i.forEach(function(l){return l&&l.render&&l.render(-1)}),ft.forEach(function(l){di(l)&&(l.smooth&&requestAnimationFrame(function(){return l.target.style.scrollBehavior="smooth"}),l.rec&&l(l.rec))}),h5(jm,1),cf.pause(),Fs++,vi=2,go(2),ct.forEach(function(l){return di(l.vars.onRefresh)&&l.vars.onRefresh(l)}),vi=Ge.isRefreshing=!1,lr("refresh")},i0=0,Ld=1,Nc,go=function(e){if(e===2||!vi&&!Dc){Ge.isUpdating=!0,Nc&&Nc.update(0);var n=ct.length,i=ci(),l=i-L_>=50,o=n&&ct[0].scroll();if(Ld=i0>o?-1:1,vi||(i0=o),l&&(Sl&&!Gf&&i-Sl>200&&(Sl=0,lr("scrollEnd")),hc=L_,L_=i),Ld<0){for(bi=n;bi-- >0;)ct[bi]&&ct[bi].update(0,l);Ld=1}else for(bi=0;bi<n;bi++)ct[bi]&&ct[bi].update(0,l);Ge.isUpdating=!1}su=0},l0=[a5,c5,Em,Tm,_l+Ac,_l+Rc,_l+Oc,_l+zc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bd=l0.concat([Vs,Ps,"boxSizing","max"+va,"max"+Dm,"position",_l,En,En+Oc,En+Rc,En+Ac,En+zc]),Y4=function(e,n,i){ra(i);var l=e._gsap;if(l.spacerIsNative)ra(l.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},$_=function(e,n,i,l){if(!e._gsap.swappedIn){for(var o=l0.length,s=n.style,a=e.style,c;o--;)c=l0[o],s[c]=i[c];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),a[Em]=a[Tm]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Vs]=uf(e,wi)+Hn,s[Ps]=uf(e,Yn)+Hn,s[En]=a[_l]=a[c5]=a[a5]="0",ra(l),a[Vs]=a["max"+va]=i[Vs],a[Ps]=a["max"+Dm]=i[Ps],a[En]=i[En],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},U4=/([A-Z])/g,ra=function(e){if(e){var n=e.t.style,i=e.length,l=0,o,s;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;l<i;l+=2)s=e[l+1],o=e[l],s?n[o]=s:n[o]&&n.removeProperty(o.replace(U4,"-$1").toLowerCase())}},Ju=function(e){for(var n=Bd.length,i=e.style,l=[],o=0;o<n;o++)l.push(Bd[o],i[Bd[o]]);return l.t=e,l},X4=function(e,n,i){for(var l=[],o=e.length,s=i?8:0,a;s<o;s+=2)a=e[s],l.push(a,a in n?n[a]:e[s+1]);return l.t=e.t,l},$d={left:0,top:0},Ig=function(e,n,i,l,o,s,a,c,u,d,h,f,_,m){di(e)&&(e=e(c)),qi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ad("0"+e.substr(3),i):0));var p=_?_.time():0,C,g,y;if(_&&_.seek(0),isNaN(e)||(e=+e),gc(e))_&&(e=Se.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,f,e)),a&&Nd(a,i,l,!0);else{di(n)&&(n=n(c));var b=(e||"0").split(" "),x,M,R,k;y=Di(n,c)||Rt,x=uo(y)||{},(!x||!x.left&&!x.top)&&hl(y).display==="none"&&(k=y.style.display,y.style.display="block",x=uo(y),k?y.style.display=k:y.style.removeProperty("display")),M=Ad(b[0],x[l.d]),R=Ad(b[1]||"0",i),e=x[l.p]-u[l.p]-d+M+o-R,a&&Nd(a,R,l,i-R<20||a._isStart&&R>20),i-=i-R}if(m&&(c[m]=e||-.001,e<0&&(e=0)),s){var N=e+i,L=s._isStart;C="scroll"+l.d2,Nd(s,N,l,L&&N>20||!L&&(h?Math.max(Rt[C],Gi[C]):s.parentNode[C])<=N+1),h&&(u=uo(a),h&&(s.style[l.op.p]=u[l.op.p]-l.op.m-s._offset+Hn))}return _&&y&&(C=uo(y),_.seek(f),g=uo(y),_._caScrollDist=C[l.p]-g[l.p],e=e/_._caScrollDist*f),_&&_.seek(p),_?e:Math.round(e)},I4=/(webkit|moz|length|cssText|inset)/i,qg=function(e,n,i,l){if(e.parentNode!==n){var o=e.style,s,a;if(n===Rt){e._stOrig=o.cssText,a=hl(e);for(s in a)!+s&&!I4.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=i,o.left=l}else o.cssText=e._stOrig;Se.core.getCache(e).uncache=1,n.appendChild(e)}},p5=function(e,n,i){var l=n,o=l;return function(s){var a=Math.round(e());return a!==l&&a!==o&&Math.abs(a-l)>3&&Math.abs(a-o)>3&&(s=a,i&&i()),o=l,l=Math.round(s),l}},ed=function(e,n,i){var l={};l[n.p]="+="+i,Se.set(e,l)},Wg=function(e,n){var i=_s(e,n),l="_scroll"+n.p2,o=function s(a,c,u,d,h){var f=s.tween,_=c.onComplete,m={};u=u||i();var p=p5(i,u,function(){f.kill(),s.tween=0});return h=d&&h||0,d=d||a-u,f&&f.kill(),c[l]=a,c.inherit=!1,c.modifiers=m,m[l]=function(){return p(u+d*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){ft.cache++,s.tween&&go()},c.onComplete=function(){s.tween=0,_&&_.call(f)},f=s.tween=Se.to(e,c),f};return e[l]=i,i.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Qn(e,"wheel",i.wheelHandler),Ge.isTouch&&Qn(e,"touchmove",i.wheelHandler),o},Ge=function(){function t(n,i){Ar||t.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),e0(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,l){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!mc){this.update=this.refresh=this.kill=Ul;return}i=$g(qi(i)||gc(i)||i.nodeType?{trigger:i}:i,Zu);var o=i,s=o.onUpdate,a=o.toggleClass,c=o.id,u=o.onToggle,d=o.onRefresh,h=o.scrub,f=o.trigger,_=o.pin,m=o.pinSpacing,p=o.invalidateOnRefresh,C=o.anticipatePin,g=o.onScrubComplete,y=o.onSnapComplete,b=o.once,x=o.snap,M=o.pinReparent,R=o.pinSpacer,k=o.containerAnimation,N=o.fastScrollEnd,L=o.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?wi:Yn,J=!h&&h!==0,V=Di(i.scroller||ut),pe=Se.core.getCache(V),oe=nr(V),ae=("pinType"in i?i.pinType:es(V,"pinType")||oe&&"fixed")==="fixed",$=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=J&&i.toggleActions.split(" "),H="markers"in i?i.markers:Zu.markers,te=oe?0:parseFloat(hl(V)["border"+A.p2+va])||0,D=this,De=i.onRefreshInit&&function(){return i.onRefreshInit(D)},_t=O4(V,oe,A),St=A4(V,oe),st=0,xt=0,Pt=0,Ct=_s(V,A),Ft,Zt,Zn,zt,ot,Ne,rt,an,cn,Y,U,ye,Oe,_e,Ve,$e,Ke,je,tt,Qe,he,z,B,W,I,ve,de,ne,Pe,Ae,Je,se,fe,qe,Fe,jt,ce,nt,He;if(D._startClamp=D._endClamp=!1,D._dir=A,C*=45,D.scroller=V,D.scroll=k?k.time.bind(k):Ct,zt=Ct(),D.vars=i,l=l||i.animation,"refreshPriority"in i&&(e5=1,i.refreshPriority===-9999&&(Nc=D)),pe.tweenScroll=pe.tweenScroll||{top:Wg(V,Yn),left:Wg(V,wi)},D.tweenTo=Ft=pe.tweenScroll[A.p],D.scrubDuration=function(ie){fe=gc(ie)&&ie,fe?se?se.duration(ie):se=Se.to(l,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:fe,paused:!0,onComplete:function(){return g&&g(D)}}):(se&&se.progress(1).kill(),se=0)},l&&(l.vars.lazy=!1,l._initted&&!D.isReverted||l.vars.immediateRender!==!1&&i.immediateRender!==!1&&l.duration()&&l.render(0,!0,!0),D.animation=l.pause(),l.scrollTrigger=D,D.scrubDuration(h),Ae=0,c||(c=l.vars.id)),x&&((!Ls(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Rt.style&&Se.set(oe?[Rt,Gi]:V,{scrollBehavior:"auto"}),ft.forEach(function(ie){return di(ie)&&ie.target===(oe?Ot.scrollingElement||Gi:V)&&(ie.smooth=!1)}),Zn=di(x.snapTo)?x.snapTo:x.snapTo==="labels"?L4(l):x.snapTo==="labelsDirectional"?B4(l):x.directional!==!1?function(ie,Me){return Rm(x.snapTo)(ie,ci()-xt<500?0:Me.direction)}:Se.utils.snap(x.snapTo),qe=x.duration||{min:.1,max:2},qe=Ls(qe)?Ec(qe.min,qe.max):Ec(qe,qe),Fe=Se.delayedCall(x.delay||fe/2||.1,function(){var ie=Ct(),Me=ci()-xt<500,me=Ft.tween;if((Me||Math.abs(D.getVelocity())<10)&&!me&&!Gf&&st!==ie){var Le=(ie-Ne)/_e,Bt=l&&!J?l.totalProgress():Le,Ye=Me?0:(Bt-Je)/(ci()-hc)*1e3||0,Ze=Se.utils.clamp(-Le,1-Le,Mr(Ye/2)*Ye/.185),$t=Le+(x.inertia===!1?0:Ze),bt,Mt,ee=x,ln=ee.onStart,Xt=ee.onInterrupt,Kn=ee.onComplete;if(bt=Zn($t,D),gc(bt)||(bt=$t),Mt=Math.max(0,Math.round(Ne+bt*_e)),ie<=rt&&ie>=Ne&&Mt!==ie){if(me&&!me._initted&&me.data<=Mr(Mt-ie))return;x.inertia===!1&&(Ze=bt-Le),Ft(Mt,{duration:qe(Mr(Math.max(Mr($t-Bt),Mr(bt-Bt))*.185/Ye/.05||0)),ease:x.ease||"power3",data:Mr(Mt-ie),onInterrupt:function(){return Fe.restart(!0)&&Xt&&jr(D,Xt)},onComplete:function(){D.update(),st=Ct(),l&&!J&&(se?se.resetTo("totalProgress",bt,l._tTime/l._tDur):l.progress(bt)),Ae=Je=l&&!J?l.totalProgress():D.progress,y&&y(D),Kn&&jr(D,Kn)}},ie,Ze*_e,Mt-ie-Ze*_e),ln&&jr(D,ln,Ft.tween)}}else D.isActive&&st!==ie&&Fe.restart(!0)}).pause()),c&&(n0[c]=D),f=D.trigger=Di(f||_!==!0&&_),He=f&&f._gsap&&f._gsap.stRevert,He&&(He=He(D)),_=_===!0?f:Di(_),qi(a)&&(a={targets:f,className:a}),_&&(m===!1||m===_l||(m=!m&&_.parentNode&&_.parentNode.style&&hl(_.parentNode).display==="flex"?!1:En),D.pin=_,Zt=Se.core.getCache(_),Zt.spacer?Ve=Zt.pinState:(R&&(R=Di(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Zt.spacerIsNative=!!R,R&&(Zt.spacerState=Ju(R))),Zt.spacer=je=R||Ot.createElement("div"),je.classList.add("pin-spacer"),c&&je.classList.add("pin-spacer-"+c),Zt.pinState=Ve=Ju(_)),i.force3D!==!1&&Se.set(_,{force3D:!0}),D.spacer=je=Zt.spacer,Pe=hl(_),W=Pe[m+A.os2],Qe=Se.getProperty(_),he=Se.quickSetter(_,A.a,Hn),$_(_,je,Pe),Ke=Ju(_)),H){ye=Ls(H)?$g(H,Hg):Hg,Y=Ku("scroller-start",c,V,A,ye,0),U=Ku("scroller-end",c,V,A,ye,0,Y),tt=Y["offset"+A.op.d2];var We=Di(es(V,"content")||V);an=this.markerStart=Ku("start",c,We,A,ye,tt,0,k),cn=this.markerEnd=Ku("end",c,We,A,ye,tt,0,k),k&&(nt=Se.quickSetter([an,cn],A.a,Hn)),!ae&&!(Vl.length&&es(V,"fixedMarkers")===!0)&&(N4(oe?Rt:V),Se.set([Y,U],{force3D:!0}),ve=Se.quickSetter(Y,A.a,Hn),ne=Se.quickSetter(U,A.a,Hn))}if(k){var ke=k.vars.onUpdate,Z=k.vars.onUpdateParams;k.eventCallback("onUpdate",function(){D.update(0,0,1),ke&&ke.apply(k,Z||[])})}if(D.previous=function(){return ct[ct.indexOf(D)-1]},D.next=function(){return ct[ct.indexOf(D)+1]},D.revert=function(ie,Me){if(!Me)return D.kill(!0);var me=ie!==!1||!D.enabled,Le=ai;me!==D.isReverted&&(me&&(jt=Math.max(Ct(),D.scroll.rec||0),Pt=D.progress,ce=l&&l.progress()),an&&[an,cn,Y,U].forEach(function(Bt){return Bt.style.display=me?"none":"block"}),me&&(ai=D,D.update(me)),_&&(!M||!D.isActive)&&(me?Y4(_,je,Ve):$_(_,je,hl(_),I)),me||D.update(me),ai=Le,D.isReverted=me)},D.refresh=function(ie,Me,me,Le){if(!((ai||!D.enabled)&&!Me)){if(_&&ie&&Sl){Qn(t,"scrollEnd",d5);return}!vi&&De&&De(D),ai=D,Ft.tween&&!me&&(Ft.tween.kill(),Ft.tween=0),se&&se.pause(),p&&l&&(l.revert({kill:!1}).invalidate(),l.getChildren?l.getChildren(!0,!0,!1).forEach(function(ji){return ji.vars.immediateRender&&ji.render(0,!0,!0)}):l.vars.immediateRender&&l.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Bt=_t(),Ye=St(),Ze=k?k.duration():ql(V,A),$t=_e<=.01||!_e,bt=0,Mt=Le||0,ee=Ls(me)?me.end:i.end,ln=i.endTrigger||f,Xt=Ls(me)?me.start:i.start||(i.start===0||!f?0:_?"0 0":"0 100%"),Kn=D.pinnedContainer=i.pinnedContainer&&Di(i.pinnedContainer,D),In=f&&Math.max(0,ct.indexOf(D))||0,Nn=In,kn,qn,Jl,gr,Cn,pn,Ui,eo,vs,Jn,_i,Eo,Al;for(H&&Ls(me)&&(Eo=Se.getProperty(Y,A.p),Al=Se.getProperty(U,A.p));Nn-- >0;)pn=ct[Nn],pn.end||pn.refresh(0,1)||(ai=D),Ui=pn.pin,Ui&&(Ui===f||Ui===_||Ui===Kn)&&!pn.isReverted&&(Jn||(Jn=[]),Jn.unshift(pn),pn.revert(!0,!0)),pn!==ct[Nn]&&(In--,Nn--);for(di(Xt)&&(Xt=Xt(D)),Xt=Ag(Xt,"start",D),Ne=Ig(Xt,f,Bt,A,Ct(),an,Y,D,Ye,te,ae,Ze,k,D._startClamp&&"_startClamp")||(_?-.001:0),di(ee)&&(ee=ee(D)),qi(ee)&&!ee.indexOf("+=")&&(~ee.indexOf(" ")?ee=(qi(Xt)?Xt.split(" ")[0]:"")+ee:(bt=Ad(ee.substr(2),Bt),ee=qi(Xt)?Xt:(k?Se.utils.mapRange(0,k.duration(),k.scrollTrigger.start,k.scrollTrigger.end,Ne):Ne)+bt,ln=f)),ee=Ag(ee,"end",D),rt=Math.max(Ne,Ig(ee||(ln?"100% 0":Ze),ln,Bt,A,Ct()+bt,cn,U,D,Ye,te,ae,Ze,k,D._endClamp&&"_endClamp"))||-.001,bt=0,Nn=In;Nn--;)pn=ct[Nn]||{},Ui=pn.pin,Ui&&pn.start-pn._pinPush<=Ne&&!k&&pn.end>0&&(kn=pn.end-(D._startClamp?Math.max(0,pn.start):pn.start),(Ui===f&&pn.start-pn._pinPush<Ne||Ui===Kn)&&isNaN(Xt)&&(bt+=kn*(1-pn.progress)),Ui===_&&(Mt+=kn));if(Ne+=bt,rt+=bt,D._startClamp&&(D._startClamp+=bt),D._endClamp&&!vi&&(D._endClamp=rt||-.001,rt=Math.min(rt,ql(V,A))),_e=rt-Ne||(Ne-=.01)&&.001,$t&&(Pt=Se.utils.clamp(0,1,Se.utils.normalize(Ne,rt,jt))),D._pinPush=Mt,an&&bt&&(kn={},kn[A.a]="+="+bt,Kn&&(kn[A.p]="-="+Ct()),Se.set([an,cn],kn)),_&&!(t0&&D.end>=ql(V,A)))kn=hl(_),gr=A===Yn,Jl=Ct(),z=parseFloat(Qe(A.a))+Mt,!Ze&&rt>1&&(_i=(oe?Ot.scrollingElement||Gi:V).style,_i={style:_i,value:_i["overflow"+A.a.toUpperCase()]},oe&&hl(Rt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(_i.style["overflow"+A.a.toUpperCase()]="scroll")),$_(_,je,kn),Ke=Ju(_),qn=uo(_,!0),eo=ae&&_s(V,gr?wi:Yn)(),m?(I=[m+A.os2,_e+Mt+Hn],I.t=je,Nn=m===En?uf(_,A)+_e+Mt:0,Nn&&(I.push(A.d,Nn+Hn),je.style.flexBasis!=="auto"&&(je.style.flexBasis=Nn+Hn)),ra(I),Kn&&ct.forEach(function(ji){ji.pin===Kn&&ji.vars.pinSpacing!==!1&&(ji._subPinOffset=!0)}),ae&&Ct(jt)):(Nn=uf(_,A),Nn&&je.style.flexBasis!=="auto"&&(je.style.flexBasis=Nn+Hn)),ae&&(Cn={top:qn.top+(gr?Jl-Ne:eo)+Hn,left:qn.left+(gr?eo:Jl-Ne)+Hn,boxSizing:"border-box",position:"fixed"},Cn[Vs]=Cn["max"+va]=Math.ceil(qn.width)+Hn,Cn[Ps]=Cn["max"+Dm]=Math.ceil(qn.height)+Hn,Cn[_l]=Cn[_l+Oc]=Cn[_l+Rc]=Cn[_l+Ac]=Cn[_l+zc]="0",Cn[En]=kn[En],Cn[En+Oc]=kn[En+Oc],Cn[En+Rc]=kn[En+Rc],Cn[En+Ac]=kn[En+Ac],Cn[En+zc]=kn[En+zc],$e=X4(Ve,Cn,M),vi&&Ct(0)),l?(vs=l._initted,A_(1),l.render(l.duration(),!0,!0),B=Qe(A.a)-z+_e+Mt,de=Math.abs(_e-B)>1,ae&&de&&$e.splice($e.length-2,2),l.render(0,!0,!0),vs||l.invalidate(!0),l.parent||l.totalTime(l.totalTime()),A_(0)):B=_e,_i&&(_i.value?_i.style["overflow"+A.a.toUpperCase()]=_i.value:_i.style.removeProperty("overflow-"+A.a));else if(f&&Ct()&&!k)for(qn=f.parentNode;qn&&qn!==Rt;)qn._pinOffset&&(Ne-=qn._pinOffset,rt-=qn._pinOffset),qn=qn.parentNode;Jn&&Jn.forEach(function(ji){return ji.revert(!1,!0)}),D.start=Ne,D.end=rt,zt=ot=vi?jt:Ct(),!k&&!vi&&(zt<jt&&Ct(jt),D.scroll.rec=0),D.revert(!1,!0),xt=ci(),Fe&&(st=-1,Fe.restart(!0)),ai=0,l&&J&&(l._initted||ce)&&l.progress()!==ce&&l.progress(ce||0,!0).render(l.time(),!0,!0),($t||Pt!==D.progress||k||p||l&&!l._initted)&&(l&&!J&&(l._initted||Pt||l.vars.immediateRender!==!1)&&l.totalProgress(k&&Ne<-.001&&!Pt?Se.utils.normalize(Ne,rt,0):Pt,!0),D.progress=$t||(zt-Ne)/_e===Pt?0:Pt),_&&m&&(je._pinOffset=Math.round(D.progress*B)),se&&se.invalidate(),isNaN(Eo)||(Eo-=Se.getProperty(Y,A.p),Al-=Se.getProperty(U,A.p),ed(Y,A,Eo),ed(an,A,Eo-(Le||0)),ed(U,A,Al),ed(cn,A,Al-(Le||0))),$t&&!vi&&D.update(),d&&!vi&&!Oe&&(Oe=!0,d(D),Oe=!1)}},D.getVelocity=function(){return(Ct()-ot)/(ci()-hc)*1e3||0},D.endAnimation=function(){Ka(D.callbackAnimation),l&&(se?se.progress(1):l.paused()?J||Ka(l,D.direction<0,1):Ka(l,l.reversed()))},D.labelToScroll=function(ie){return l&&l.labels&&(Ne||D.refresh()||Ne)+l.labels[ie]/l.duration()*_e||0},D.getTrailing=function(ie){var Me=ct.indexOf(D),me=D.direction>0?ct.slice(0,Me).reverse():ct.slice(Me+1);return(qi(ie)?me.filter(function(Le){return Le.vars.preventOverlaps===ie}):me).filter(function(Le){return D.direction>0?Le.end<=Ne:Le.start>=rt})},D.update=function(ie,Me,me){if(!(k&&!me&&!ie)){var Le=vi===!0?jt:D.scroll(),Bt=ie?0:(Le-Ne)/_e,Ye=Bt<0?0:Bt>1?1:Bt||0,Ze=D.progress,$t,bt,Mt,ee,ln,Xt,Kn,In;if(Me&&(ot=zt,zt=k?Ct():Le,x&&(Je=Ae,Ae=l&&!J?l.totalProgress():Ye)),C&&_&&!ai&&!Gu&&Sl&&(!Ye&&Ne<Le+(Le-ot)/(ci()-hc)*C?Ye=1e-4:Ye===1&&rt>Le+(Le-ot)/(ci()-hc)*C&&(Ye=.9999)),Ye!==Ze&&D.enabled){if($t=D.isActive=!!Ye&&Ye<1,bt=!!Ze&&Ze<1,Xt=$t!==bt,ln=Xt||!!Ye!=!!Ze,D.direction=Ye>Ze?1:-1,D.progress=Ye,ln&&!ai&&(Mt=Ye&&!Ze?0:Ye===1?1:Ze===1?2:3,J&&(ee=!Xt&&F[Mt+1]!=="none"&&F[Mt+1]||F[Mt],In=l&&(ee==="complete"||ee==="reset"||ee in l))),L&&(Xt||In)&&(In||h||!l)&&(di(L)?L(D):D.getTrailing(L).forEach(function(Jl){return Jl.endAnimation()})),J||(se&&!ai&&!Gu?(se._dp._time-se._start!==se._time&&se.render(se._dp._time-se._start),se.resetTo?se.resetTo("totalProgress",Ye,l._tTime/l._tDur):(se.vars.totalProgress=Ye,se.invalidate().restart())):l&&l.totalProgress(Ye,!!(ai&&(xt||ie)))),_){if(ie&&m&&(je.style[m+A.os2]=W),!ae)he(pc(z+B*Ye));else if(ln){if(Kn=!ie&&Ye>Ze&&rt+1>Le&&Le+1>=ql(V,A),M)if(!ie&&($t||Kn)){var Nn=uo(_,!0),kn=Le-Ne;qg(_,Rt,Nn.top+(A===Yn?kn:0)+Hn,Nn.left+(A===Yn?0:kn)+Hn)}else qg(_,je);ra($t||Kn?$e:Ke),de&&Ye<1&&$t||he(z+(Ye===1&&!Kn?B:0))}}x&&!Ft.tween&&!ai&&!Gu&&Fe.restart(!0),a&&(Xt||b&&Ye&&(Ye<1||!N_))&&ou(a.targets).forEach(function(Jl){return Jl.classList[$t||b?"add":"remove"](a.className)}),s&&!J&&!ie&&s(D),ln&&!ai?(J&&(In&&(ee==="complete"?l.pause().totalProgress(1):ee==="reset"?l.restart(!0).pause():ee==="restart"?l.restart(!0):l[ee]()),s&&s(D)),(Xt||!N_)&&(u&&Xt&&jr(D,u),$[Mt]&&jr(D,$[Mt]),b&&(Ye===1?D.kill(!1,1):$[Mt]=0),Xt||(Mt=Ye===1?1:3,$[Mt]&&jr(D,$[Mt]))),N&&!$t&&Math.abs(D.getVelocity())>(gc(N)?N:2500)&&(Ka(D.callbackAnimation),se?se.progress(1):Ka(l,ee==="reverse"?1:!Ye,1))):J&&s&&!ai&&s(D)}if(ne){var qn=k?Le/k.duration()*(k._caScrollDist||0):Le;ve(qn+(Y._isFlipped?1:0)),ne(qn)}nt&&nt(-Le/k.duration()*(k._caScrollDist||0))}},D.enable=function(ie,Me){D.enabled||(D.enabled=!0,Qn(V,"resize",yc),oe||Qn(V,"scroll",Tr),De&&Qn(t,"refreshInit",De),ie!==!1&&(D.progress=Pt=0,zt=ot=st=Ct()),Me!==!1&&D.refresh())},D.getTween=function(ie){return ie&&Ft?Ft.tween:se},D.setPositions=function(ie,Me,me,Le){if(k){var Bt=k.scrollTrigger,Ye=k.duration(),Ze=Bt.end-Bt.start;ie=Bt.start+Ze*ie/Ye,Me=Bt.start+Ze*Me/Ye}D.refresh(!1,!1,{start:Ng(ie,me&&!!D._startClamp),end:Ng(Me,me&&!!D._endClamp)},Le),D.update()},D.adjustPinSpacing=function(ie){if(I&&ie){var Me=I.indexOf(A.d)+1;I[Me]=parseFloat(I[Me])+ie+Hn,I[1]=parseFloat(I[1])+ie+Hn,ra(I)}},D.disable=function(ie,Me){if(ie!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Me||se&&se.pause(),jt=0,Zt&&(Zt.uncache=1),De&&Wn(t,"refreshInit",De),Fe&&(Fe.pause(),Ft.tween&&Ft.tween.kill()&&(Ft.tween=0)),!oe)){for(var me=ct.length;me--;)if(ct[me].scroller===V&&ct[me]!==D)return;Wn(V,"resize",yc),oe||Wn(V,"scroll",Tr)}},D.kill=function(ie,Me){D.disable(ie,Me),se&&!Me&&se.kill(),c&&delete n0[c];var me=ct.indexOf(D);me>=0&&ct.splice(me,1),me===bi&&Ld>0&&bi--,me=0,ct.forEach(function(Le){return Le.scroller===D.scroller&&(me=1)}),me||vi||(D.scroll.rec=0),l&&(l.scrollTrigger=null,ie&&l.revert({kill:!1}),Me||l.kill()),an&&[an,cn,Y,U].forEach(function(Le){return Le.parentNode&&Le.parentNode.removeChild(Le)}),Nc===D&&(Nc=0),_&&(Zt&&(Zt.uncache=1),me=0,ct.forEach(function(Le){return Le.pin===_&&me++}),me||(Zt.spacer=0)),i.onKill&&i.onKill(D)},ct.push(D),D.enable(!1,!1),He&&He(D),l&&l.add&&!_e){var we=D.update;D.update=function(){D.update=we,ft.cache++,Ne||rt||D.refresh()},Se.delayedCall(.01,D.update),_e=.01,Ne=rt=0}else D.refresh();_&&H4()},t.register=function(i){return Ar||(Se=i||o5(),l5()&&window.document&&t.enable(),Ar=mc),Ar},t.defaults=function(i){if(i)for(var l in i)Zu[l]=i[l];return Zu},t.disable=function(i,l){mc=0,ct.forEach(function(s){return s[l?"kill":"disable"](i)}),Wn(ut,"wheel",Tr),Wn(Ot,"scroll",Tr),clearInterval(Qu),Wn(Ot,"touchcancel",Ul),Wn(Rt,"touchstart",Ul),Pu(Wn,Ot,"pointerdown,touchstart,mousedown",Lg),Pu(Wn,Ot,"pointerup,touchend,mouseup",Bg),cf.kill(),Vu(Wn);for(var o=0;o<ft.length;o+=3)Fu(Wn,ft[o],ft[o+1]),Fu(Wn,ft[o],ft[o+2])},t.enable=function(){if(ut=window,Ot=document,Gi=Ot.documentElement,Rt=Ot.body,Se){if(ou=Se.utils.toArray,Ec=Se.utils.clamp,e0=Se.core.context||Ul,A_=Se.core.suppressOverwrites||Ul,jm=ut.history.scrollRestoration||"auto",i0=ut.pageYOffset||0,Se.core.globals("ScrollTrigger",t),Rt){mc=1,sa=document.createElement("div"),sa.style.height="100vh",sa.style.position="absolute",m5(),z4(),wn.register(Se),t.isTouch=wn.isTouch,No=wn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jh=wn.isTouch===1,Qn(ut,"wheel",Tr),Cm=[ut,Ot,Gi,Rt],Se.matchMedia?(t.matchMedia=function(d){var h=Se.matchMedia(),f;for(f in d)h.add(f,d[f]);return h},Se.addEventListener("matchMediaInit",function(){_5(),zm()}),Se.addEventListener("matchMediaRevert",function(){return f5()}),Se.addEventListener("matchMedia",function(){Is(0,1),lr("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return B_(),B_})):console.warn("Requires GSAP 3.11.0 or later"),B_(),Qn(Ot,"scroll",Tr);var i=Rt.hasAttribute("style"),l=Rt.style,o=l.borderTopStyle,s=Se.core.Animation.prototype,a,c;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),l.borderTopStyle="solid",a=uo(Rt),Yn.m=Math.round(a.top+Yn.sc())||0,wi.m=Math.round(a.left+wi.sc())||0,o?l.borderTopStyle=o:l.removeProperty("border-top-style"),i||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),Qu=setInterval(Yg,250),Se.delayedCall(.5,function(){return Gu=0}),Qn(Ot,"touchcancel",Ul),Qn(Rt,"touchstart",Ul),Pu(Qn,Ot,"pointerdown,touchstart,mousedown",Lg),Pu(Qn,Ot,"pointerup,touchend,mouseup",Bg),Kh=Se.utils.checkPrefix("transform"),Bd.push(Kh),Ar=ci(),cf=Se.delayedCall(.2,Is).pause(),Nr=[Ot,"visibilitychange",function(){var d=ut.innerWidth,h=ut.innerHeight;Ot.hidden?(zg=d,Og=h):(zg!==d||Og!==h)&&yc()},Ot,"DOMContentLoaded",Is,ut,"load",Is,ut,"resize",yc],Vu(Qn),ct.forEach(function(d){return d.enable(0,1)}),c=0;c<ft.length;c+=3)Fu(Wn,ft[c],ft[c+1]),Fu(Wn,ft[c],ft[c+2])}else if(Ot){var u=function d(){t.enable(),Ot.removeEventListener("DOMContentLoaded",d)};Ot.addEventListener("DOMContentLoaded",u)}}},t.config=function(i){"limitCallbacks"in i&&(N_=!!i.limitCallbacks);var l=i.syncInterval;l&&clearInterval(Qu)||(Qu=l)&&setInterval(Yg,l),"ignoreMobileResize"in i&&(Jh=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vu(Wn)||Vu(Qn,i.autoRefreshEvents||"none"),t5=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,l){var o=Di(i),s=ft.indexOf(o),a=nr(o);~s&&ft.splice(s,a?6:2),l&&(a?Vl.unshift(ut,l,Rt,l,Gi,l):Vl.unshift(o,l))},t.clearMatchMedia=function(i){ct.forEach(function(l){return l._ctx&&l._ctx.query===i&&l._ctx.kill(!0,!0)})},t.isInViewport=function(i,l,o){var s=(qi(i)?Di(i):i).getBoundingClientRect(),a=s[o?Vs:Ps]*l||0;return o?s.right-a>0&&s.left+a<ut.innerWidth:s.bottom-a>0&&s.top+a<ut.innerHeight},t.positionInViewport=function(i,l,o){qi(i)&&(i=Di(i));var s=i.getBoundingClientRect(),a=s[o?Vs:Ps],c=l==null?a/2:l in df?df[l]*a:~l.indexOf("%")?parseFloat(l)*a/100:parseFloat(l)||0;return o?(s.left+c)/ut.innerWidth:(s.top+c)/ut.innerHeight},t.killAll=function(i){if(ct.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),i!==!0){var l=ir.killAll||[];ir={},l.forEach(function(o){return o()})}},t}();Ge.version="3.15.0";Ge.saveStyles=function(t){return t?ou(t).forEach(function(e){if(e&&e.style){var n=Ii.indexOf(e);n>=0&&Ii.splice(n,5),Ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),e0())}}):Ii};Ge.revert=function(t,e){return zm(!t,e)};Ge.create=function(t,e){return new Ge(t,e)};Ge.refresh=function(t){return t?yc(!0):(Ar||Ge.register())&&Is(!0)};Ge.update=function(t){return++ft.cache&&go(t===!0?2:0)};Ge.clearScrollMemory=h5;Ge.maxScroll=function(t,e){return ql(t,e?wi:Yn)};Ge.getScrollFunc=function(t,e){return _s(Di(t),e?wi:Yn)};Ge.getById=function(t){return n0[t]};Ge.getAll=function(){return ct.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Ge.isScrolling=function(){return!!Sl};Ge.snapDirectional=Rm;Ge.addEventListener=function(t,e){var n=ir[t]||(ir[t]=[]);~n.indexOf(e)||n.push(e)};Ge.removeEventListener=function(t,e){var n=ir[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};Ge.batch=function(t,e){var n=[],i={},l=e.interval||.016,o=e.batchMax||1e9,s=function(u,d){var h=[],f=[],_=Se.delayedCall(l,function(){d(h,f),h=[],f=[]}).pause();return function(m){h.length||_.restart(!0),h.push(m.trigger),f.push(m),o<=h.length&&_.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&di(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return di(o)&&(o=o(),Qn(Ge,"refresh",function(){return o=e.batchMax()})),ou(t).forEach(function(c){var u={};for(a in i)u[a]=i[a];u.trigger=c,n.push(Ge.create(u))}),n};var Qg=function(e,n,i,l){return n>l?e(l):n<0&&e(0),i>l?(l-n)/(i-n):i<0?n/(n-i):1},H_=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(wn.isTouch?" pinch-zoom":""):"none",e===Gi&&t(Rt,n)},td={auto:1,scroll:1},q4=function(e){var n=e.event,i=e.target,l=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,s=o._gsap||Se.core.getCache(o),a=ci(),c;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==Rt&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(td[(c=hl(o)).overflowY]||td[c.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==i&&!nr(o)&&(td[(c=hl(o)).overflowY]||td[c.overflowX]),s._isScrollT=a}(s._isScroll||l==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},g5=function(e,n,i,l){return wn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:l=l&&q4,onPress:l,onDrag:l,onScroll:l,onEnable:function(){return i&&Qn(Ot,wn.eventTypes[0],Vg,!1,!0)},onDisable:function(){return Wn(Ot,wn.eventTypes[0],Vg,!0)}})},W4=/(input|label|select|textarea)/i,Gg,Vg=function(e){var n=W4.test(e.target.tagName);(n||Gg)&&(e._gsapAllow=!0,Gg=n)},Q4=function(e){Ls(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,l=n.momentum,o=n.allowNestedScroll,s=n.onRelease,a,c,u=Di(e.target)||Gi,d=Se.core.globals().ScrollSmoother,h=d&&d.get(),f=No&&(e.content&&Di(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),_=_s(u,Yn),m=_s(u,wi),p=1,C=(wn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,y=di(l)?function(){return l(a)}:function(){return l||2.8},b,x,M=g5(u,e.type,!0,o),R=function(){return x=!1},k=Ul,N=Ul,L=function(){c=ql(u,Yn),N=Ec(No?1:0,c),i&&(k=Ec(0,ql(u,wi))),b=Fs},A=function(){f._gsap.y=pc(parseFloat(f._gsap.y)+_.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},J=function(){if(x){requestAnimationFrame(R);var H=pc(a.deltaY/2),te=N(_.v-H);if(f&&te!==_.v+_.offset){_.offset=te-_.v;var D=pc((parseFloat(f&&f._gsap.y)||0)-_.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",_.cacheID=ft.cache,go()}return!0}_.offset&&A(),x=!0},V,pe,oe,ae,$=function(){L(),V.isActive()&&V.vars.scrollY>c&&(_()>c?V.progress(1)&&_(c):V.resetTo("scrollY",c))};return f&&Se.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return No&&F.type==="touchmove"&&J()||p>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){x=!1;var F=p;p=pc((ut.visualViewport&&ut.visualViewport.scale||1)/C),V.pause(),F!==p&&H_(u,p>1.01?!0:i?!1:"x"),pe=m(),oe=_(),L(),b=Fs},e.onRelease=e.onGestureStart=function(F,H){if(_.offset&&A(),!H)ae.restart(!0);else{ft.cache++;var te=y(),D,De;i&&(D=m(),De=D+te*.05*-F.velocityX/.227,te*=Qg(m,D,De,ql(u,wi)),V.vars.scrollX=k(De)),D=_(),De=D+te*.05*-F.velocityY/.227,te*=Qg(_,D,De,ql(u,Yn)),V.vars.scrollY=N(De),V.invalidate().duration(te).play(.01),(No&&V.vars.scrollY>=c||D>=c-1)&&Se.to({},{onUpdate:$,duration:te})}s&&s(F)},e.onWheel=function(){V._ts&&V.pause(),ci()-g>1e3&&(b=0,g=ci())},e.onChange=function(F,H,te,D,De){if(Fs!==b&&L(),H&&i&&m(k(D[2]===H?pe+(F.startX-F.x):m()+H-D[1])),te){_.offset&&A();var _t=De[2]===te,St=_t?oe+F.startY-F.y:_()+te-De[1],st=N(St);_t&&St!==st&&(oe+=st-St),_(st)}(te||H)&&go()},e.onEnable=function(){H_(u,i?!1:"x"),Ge.addEventListener("refresh",$),Qn(ut,"resize",$),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){H_(u,!0),Wn(ut,"resize",$),Ge.removeEventListener("refresh",$),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new wn(e),a.iOS=No,No&&!_()&&_(1),No&&Se.ticker.add(Ul),ae=a._dc,V=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:p5(_,_(),function(){return V.pause()})},onUpdate:go,onComplete:ae.vars.onComplete}),a};Ge.sort=function(t){if(di(t))return ct.sort(t);var e=ut.pageYOffset||0;return Ge.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+ut.innerHeight}),ct.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ge.observe=function(t){return new wn(t)};Ge.normalizeScroll=function(t){if(typeof t>"u")return xi;if(t===!0&&xi)return xi.enable();if(t===!1){xi&&xi.kill(),xi=t;return}var e=t instanceof wn?t:Q4(t);return xi&&xi.target===e.target&&xi.kill(),nr(e.target)&&(xi=e),e};Ge.core={_getVelocityProp:Zh,_inputObserver:g5,_scrollers:ft,_proxies:Vl,bridge:{ss:function(){Sl||lr("scrollStart"),Sl=ci()},ref:function(){return ai}}};o5()&&Se.registerPlugin(Ge);var Pg="1.3.23";function y5(t,e,n){return Math.max(t,Math.min(e,n))}function G4(t,e,n){return(1-n)*t+n*e}function V4(t,e,n,i){return G4(t,e,1-Math.exp(-n*i))}function P4(t,e){return(t%e+e)%e}var F4=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=y5(0,this.currentTime/this.duration,1);e=i>=1;const l=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*l}else this.lerp?(this.value=V4(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:l,onStart:o,onUpdate:s}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=l,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function Z4(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var K4=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Z4(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},x5=class{constructor(){Ee(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let l=0,o=n.length;l<o;l++)(i=n[l])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const J4=100/6,zo={passive:!1};function Fg(t,e){return t===1?J4:t===2?e:1}var e6=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new x5);Ee(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Ee(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,l=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:l},this.emitter.emit("scroll",{deltaX:i,deltaY:l,event:t})});Ee(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Ee(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const l=Fg(i,this.window.width),o=Fg(i,this.window.height);e*=l,n*=o,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zo),this.element.addEventListener("touchstart",this.onTouchStart,zo),this.element.addEventListener("touchmove",this.onTouchMove,zo),this.element.addEventListener("touchend",this.onTouchEnd,zo)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,zo),this.element.removeEventListener("touchstart",this.onTouchStart,zo),this.element.removeEventListener("touchmove",this.onTouchMove,zo),this.element.removeEventListener("touchend",this.onTouchEnd,zo)}};const Zg=t=>Math.min(1,1.001-2**(-10*t));var t6=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:l=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:c,lerp:u=.1,infinite:d=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:m=1,autoResize:p=!0,prevent:C,virtualScroll:g,overscroll:y=!0,autoRaf:b=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:k=!1,naiveDimensions:N=k,stopInertiaOnNavigate:L=!1}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"_rafId",null);Ee(this,"isTouching");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new F4);Ee(this,"emitter",new x5);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Ee(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(l=>n.host===l.host&&n.pathname===l.pathname&&l.hash);if(i){const l=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.hash.split("#")[1]}`;this.scrollTo(o,l);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Ee(this,"onPointerDown",t=>{t.button===1&&this.reset()});Ee(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const l=i.type.includes("touch"),o=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const s=e===0&&n===0;if(this.options.syncTouch&&l&&i.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(c.find(m=>{var p,C,g,y,b;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||d==="vertical"&&((C=m.hasAttribute)==null?void 0:C.call(m,"data-lenis-prevent-vertical"))||d==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||l&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||o&&((b=m.hasAttribute)==null?void 0:b.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&l||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=n;this.options.gestureOrientation==="both"?h=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=l&&this.options.syncTouch,_=l&&i.type==="touchend";_&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Pg,window.lenis||(window.lenis={}),window.lenis.version=Pg,h==="horizontal"&&(window.lenis.horizontal=!0),l===!0&&(window.lenis.touch=!0),(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof c!="function"?c=Zg:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:l,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:c,lerp:u,infinite:d,gestureOrientation:f,orientation:h,touchMultiplier:_,wheelMultiplier:m,autoResize:p,prevent:C,virtualScroll:g,overscroll:y,autoRaf:b,anchors:x,autoToggle:M,allowNestedScroll:R,naiveDimensions:N,stopInertiaOnNavigate:L},this.dimensions=new K4(t,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new e6(n,{touchMultiplier:_,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:l=!0,lerp:o=l?this.options.lerp:void 0,duration:s=l?this.options.duration:void 0,easing:a=l?this.options.easing:void 0,onStart:c,onComplete:u,force:d=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!d)return;let f=t,_=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?x.left:x.top}const p=m.getBoundingClientRect(),C=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(C.scrollMarginLeft):Number.parseFloat(C.scrollMarginTop),y=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?p.left:p.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=_,this.options.infinite){if(l){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=y5(0,f,this.limit);if(f===this.targetScroll){c==null||c(this),u==null||u(this);return}if(this.userData=h??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}l||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=Zg:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(m,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),l&&(this.targetScroll=m),p||this.emit(),p&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const l=t._lenis;let o,s,a,c,u,d,h,f,_,m;if(i-(l.time??0)>2e3){l.time=Date.now();const R=window.getComputedStyle(t);if(l.computedStyle=R,o=["auto","overlay","scroll"].includes(R.overflowX),s=["auto","overlay","scroll"].includes(R.overflowY),u=["auto"].includes(R.overscrollBehaviorX),d=["auto"].includes(R.overscrollBehaviorY),l.hasOverflowX=o,l.hasOverflowY=s,!(o||s))return!1;h=t.scrollWidth,f=t.scrollHeight,_=t.clientWidth,m=t.clientHeight,a=h>_,c=f>m,l.isScrollableX=a,l.isScrollableY=c,l.scrollWidth=h,l.scrollHeight=f,l.clientWidth=_,l.clientHeight=m,l.hasOverscrollBehaviorX=u,l.hasOverscrollBehaviorY=d}else a=l.isScrollableX,c=l.isScrollableY,o=l.hasOverflowX,s=l.hasOverflowY,h=l.scrollWidth,f=l.scrollHeight,_=l.clientWidth,m=l.clientHeight,u=l.hasOverscrollBehaviorX,d=l.hasOverscrollBehaviorY;if(!(o&&a||s&&c))return!1;const p=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let C,g,y,b,x,M;if(p==="horizontal")C=Math.round(t.scrollLeft),g=h-_,y=e,b=o,x=a,M=u;else if(p==="vertical")C=Math.round(t.scrollTop),g=f-m,y=n,b=s,x=c,M=d;else return!1;return!M&&(C>=g||C<=0)?!0:(y>0?C<g:C>0)&&b&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?P4(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function n6(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b5={exports:{}},et={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=Symbol.for("react.transitional.element"),i6=Symbol.for("react.portal"),l6=Symbol.for("react.fragment"),o6=Symbol.for("react.strict_mode"),s6=Symbol.for("react.profiler"),r6=Symbol.for("react.consumer"),a6=Symbol.for("react.context"),c6=Symbol.for("react.forward_ref"),u6=Symbol.for("react.suspense"),d6=Symbol.for("react.memo"),v5=Symbol.for("react.lazy"),f6=Symbol.for("react.activity"),Kg=Symbol.iterator;function _6(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var w5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S5=Object.assign,k5={};function Aa(t,e,n){this.props=t,this.context=e,this.refs=k5,this.updater=n||w5}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C5(){}C5.prototype=Aa.prototype;function Am(t,e,n){this.props=t,this.context=e,this.refs=k5,this.updater=n||w5}var Nm=Am.prototype=new C5;Nm.constructor=Am;S5(Nm,Aa.prototype);Nm.isPureReactComponent=!0;var Jg=Array.isArray;function o0(){}var tn={H:null,A:null,T:null,S:null},j5=Object.prototype.hasOwnProperty;function Lm(t,e,n){var i=n.ref;return{$$typeof:Om,type:t,key:e,ref:i!==void 0?i:null,props:n}}function h6(t,e){return Lm(t.type,e,t.props)}function Bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Om}function m6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ey=/\/+/g;function Y_(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m6(""+t.key):e.toString(36)}function p6(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(o0,o0):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Lr(t,e,n,i,l){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Om:case i6:s=!0;break;case v5:return s=t._init,Lr(s(t._payload),e,n,i,l)}}if(s)return l=l(t),s=i===""?"."+Y_(t,0):i,Jg(l)?(n="",s!=null&&(n=s.replace(ey,"$&/")+"/"),Lr(l,e,n,"",function(u){return u})):l!=null&&(Bm(l)&&(l=h6(l,n+(l.key==null||t&&t.key===l.key?"":(""+l.key).replace(ey,"$&/")+"/")+s)),e.push(l)),1;s=0;var a=i===""?".":i+":";if(Jg(t))for(var c=0;c<t.length;c++)i=t[c],o=a+Y_(i,c),s+=Lr(i,e,n,o,l);else if(c=_6(t),typeof c=="function")for(t=c.call(t),c=0;!(i=t.next()).done;)i=i.value,o=a+Y_(i,c++),s+=Lr(i,e,n,o,l);else if(o==="object"){if(typeof t.then=="function")return Lr(p6(t),e,n,i,l);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function nd(t,e,n){if(t==null)return t;var i=[],l=0;return Lr(t,i,"","",function(o){return e.call(n,o,l++)}),i}function g6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ty=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},y6={map:nd,forEach:function(t,e,n){nd(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nd(t,function(){e++}),e},toArray:function(t){return nd(t,function(e){return e})||[]},only:function(t){if(!Bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Activity=f6;et.Children=y6;et.Component=Aa;et.Fragment=l6;et.Profiler=s6;et.PureComponent=Am;et.StrictMode=o6;et.Suspense=u6;et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tn;et.__COMPILER_RUNTIME={__proto__:null,c:function(t){return tn.H.useMemoCache(t)}};et.cache=function(t){return function(){return t.apply(null,arguments)}};et.cacheSignal=function(){return null};et.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=S5({},t.props),l=t.key;if(e!=null)for(o in e.key!==void 0&&(l=""+e.key),e)!j5.call(e,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&e.ref===void 0||(i[o]=e[o]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),a=0;a<o;a++)s[a]=arguments[a+2];i.children=s}return Lm(t.type,l,i)};et.createContext=function(t){return t={$$typeof:a6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:r6,_context:t},t};et.createElement=function(t,e,n){var i,l={},o=null;if(e!=null)for(i in e.key!==void 0&&(o=""+e.key),e)j5.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(l[i]=e[i]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)l[i]===void 0&&(l[i]=s[i]);return Lm(t,o,l)};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:c6,render:t}};et.isValidElement=Bm;et.lazy=function(t){return{$$typeof:v5,_payload:{_status:-1,_result:t},_init:g6}};et.memo=function(t,e){return{$$typeof:d6,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=tn.T,n={};tn.T=n;try{var i=t(),l=tn.S;l!==null&&l(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(o0,ty)}catch(o){ty(o)}finally{e!==null&&n.types!==null&&(e.types=n.types),tn.T=e}};et.unstable_useCacheRefresh=function(){return tn.H.useCacheRefresh()};et.use=function(t){return tn.H.use(t)};et.useActionState=function(t,e,n){return tn.H.useActionState(t,e,n)};et.useCallback=function(t,e){return tn.H.useCallback(t,e)};et.useContext=function(t){return tn.H.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t,e){return tn.H.useDeferredValue(t,e)};et.useEffect=function(t,e){return tn.H.useEffect(t,e)};et.useEffectEvent=function(t){return tn.H.useEffectEvent(t)};et.useId=function(){return tn.H.useId()};et.useImperativeHandle=function(t,e,n){return tn.H.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return tn.H.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return tn.H.useLayoutEffect(t,e)};et.useMemo=function(t,e){return tn.H.useMemo(t,e)};et.useOptimistic=function(t,e){return tn.H.useOptimistic(t,e)};et.useReducer=function(t,e,n){return tn.H.useReducer(t,e,n)};et.useRef=function(t){return tn.H.useRef(t)};et.useState=function(t){return tn.H.useState(t)};et.useSyncExternalStore=function(t,e,n){return tn.H.useSyncExternalStore(t,e,n)};et.useTransition=function(){return tn.H.useTransition()};et.version="19.2.7";b5.exports=et;var S=b5.exports;const M5=n6(S);var T5={exports:{}},Vf={},E5={exports:{}},D5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,F){var H=$.length;$.push(F);e:for(;0<H;){var te=H-1>>>1,D=$[te];if(0<l(D,F))$[te]=F,$[H]=D,H=te;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var F=$[0],H=$.pop();if(H!==F){$[0]=H;e:for(var te=0,D=$.length,De=D>>>1;te<De;){var _t=2*(te+1)-1,St=$[_t],st=_t+1,xt=$[st];if(0>l(St,H))st<D&&0>l(xt,St)?($[te]=xt,$[st]=H,te=st):($[te]=St,$[_t]=H,te=_t);else if(st<D&&0>l(xt,H))$[te]=xt,$[st]=H,te=st;else break e}}return F}function l($,F){var H=$.sortIndex-F.sortIndex;return H!==0?H:$.id-F.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,h=null,f=3,_=!1,m=!1,p=!1,C=!1,g=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function x($){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=$)i(u),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(u)}}function M($){if(p=!1,x($),!m)if(n(c)!==null)m=!0,R||(R=!0,V());else{var F=n(u);F!==null&&ae(M,F.startTime-$)}}var R=!1,k=-1,N=5,L=-1;function A(){return C?!0:!(t.unstable_now()-L<N)}function J(){if(C=!1,R){var $=t.unstable_now();L=$;var F=!0;try{e:{m=!1,p&&(p=!1,y(k),k=-1),_=!0;var H=f;try{t:{for(x($),h=n(c);h!==null&&!(h.expirationTime>$&&A());){var te=h.callback;if(typeof te=="function"){h.callback=null,f=h.priorityLevel;var D=te(h.expirationTime<=$);if($=t.unstable_now(),typeof D=="function"){h.callback=D,x($),F=!0;break t}h===n(c)&&i(c),x($)}else i(c);h=n(c)}if(h!==null)F=!0;else{var De=n(u);De!==null&&ae(M,De.startTime-$),F=!1}}break e}finally{h=null,f=H,_=!1}F=void 0}}finally{F?V():R=!1}}}var V;if(typeof b=="function")V=function(){b(J)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,oe=pe.port2;pe.port1.onmessage=J,V=function(){oe.postMessage(null)}}else V=function(){g(J,0)};function ae($,F){k=g(function(){$(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function($){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var H=f;f=F;try{return $()}finally{f=H}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function($,F){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var H=f;f=$;try{return F()}finally{f=H}},t.unstable_scheduleCallback=function($,F,H){var te=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=H+D,$={id:d++,callback:F,priorityLevel:$,startTime:H,expirationTime:D,sortIndex:-1},H>te?($.sortIndex=H,e(u,$),n(c)===null&&$===n(u)&&(p?(y(k),k=-1):p=!0,ae(M,H-te))):($.sortIndex=D,e(c,$),m||_||(m=!0,R||(R=!0,V()))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var F=f;return function(){var H=f;f=F;try{return $.apply(this,arguments)}finally{f=H}}}})(D5);E5.exports=D5;var x6=E5.exports,R5={exports:{}},Ci={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b6=S;function z5(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Oo(){}var Si={d:{f:Oo,r:function(){throw Error(z5(522))},D:Oo,C:Oo,L:Oo,m:Oo,X:Oo,S:Oo,M:Oo},p:0,findDOMNode:null},v6=Symbol.for("react.portal");function w6(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v6,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Lc=b6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Pf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ci.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Si;Ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(z5(299));return w6(t,e,null,n)};Ci.flushSync=function(t){var e=Lc.T,n=Si.p;try{if(Lc.T=null,Si.p=2,t)return t()}finally{Lc.T=e,Si.p=n,Si.d.f()}};Ci.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Si.d.C(t,e))};Ci.prefetchDNS=function(t){typeof t=="string"&&Si.d.D(t)};Ci.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Pf(n,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,o=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Si.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:l,fetchPriority:o}):n==="script"&&Si.d.X(t,{crossOrigin:i,integrity:l,fetchPriority:o,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ci.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Pf(e.as,e.crossOrigin);Si.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Si.d.M(t)};Ci.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Pf(n,e.crossOrigin);Si.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ci.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Pf(e.as,e.crossOrigin);Si.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Si.d.m(t)};Ci.requestFormReset=function(t){Si.d.r(t)};Ci.unstable_batchedUpdates=function(t,e){return t(e)};Ci.useFormState=function(t,e,n){return Lc.H.useFormState(t,e,n)};Ci.useFormStatus=function(){return Lc.H.useHostTransitionStatus()};Ci.version="19.2.7";function O5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O5)}catch(t){console.error(t)}}O5(),R5.exports=Ci;var $m=R5.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=x6,A5=S,S6=$m;function G(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N5(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L5(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B5(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ny(t){if(Su(t)!==t)throw Error(G(188))}function k6(t){var e=t.alternate;if(!e){if(e=Su(t),e===null)throw Error(G(188));return e!==t?null:t}for(var n=t,i=e;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ny(l),t;if(o===i)return ny(l),e;o=o.sibling}throw Error(G(188))}if(n.return!==i.return)n=l,i=o;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,i=o;break}if(a===i){s=!0,i=l,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=l;break}if(a===i){s=!0,i=o,n=l;break}a=a.sibling}if(!s)throw Error(G(189))}}if(n.alternate!==i)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?t:e}function $5(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$5(t),e!==null)return e;t=t.sibling}return null}var nn=Object.assign,C6=Symbol.for("react.element"),id=Symbol.for("react.transitional.element"),xc=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),H5=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),Y5=Symbol.for("react.consumer"),ho=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),r0=Symbol.for("react.suspense"),a0=Symbol.for("react.suspense_list"),Ym=Symbol.for("react.memo"),Lo=Symbol.for("react.lazy"),c0=Symbol.for("react.activity"),j6=Symbol.for("react.memo_cache_sentinel"),iy=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var M6=Symbol.for("react.client.reference");function u0(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===M6?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case s0:return"Profiler";case H5:return"StrictMode";case r0:return"Suspense";case a0:return"SuspenseList";case c0:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case xc:return"Portal";case ho:return t.displayName||"Context";case Y5:return(t._context.displayName||"Context")+".Consumer";case Hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ym:return e=t.displayName||null,e!==null?e:u0(t.type)||"Memo";case Lo:e=t._payload,t=t._init;try{return u0(t(e))}catch{}}return null}var bc=Array.isArray,Ie=A5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt=S6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zs={pending:!1,data:null,method:null,action:null},d0=[],Ir=-1;function Zl(t){return{current:t}}function Pn(t){0>Ir||(t.current=d0[Ir],d0[Ir]=null,Ir--)}function Vt(t,e){Ir++,d0[Ir]=t.current,t.current=e}var Pl=Zl(null),ru=Zl(null),ts=Zl(null),ff=Zl(null);function _f(t,e){switch(Vt(ts,e),Vt(ru,t),Vt(Pl,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?c1(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=c1(e),t=sv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Pn(Pl),Vt(Pl,t)}function wa(){Pn(Pl),Pn(ru),Pn(ts)}function f0(t){t.memoizedState!==null&&Vt(ff,t);var e=Pl.current,n=sv(e,t.type);e!==n&&(Vt(ru,t),Vt(Pl,n))}function hf(t){ru.current===t&&(Pn(Pl),Pn(ru)),ff.current===t&&(Pn(ff),yu._currentValue=Zs)}var U_,ly;function Bs(t){if(U_===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);U_=e&&e[1]||"",ly=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+U_+t+ly}var X_=!1;function I_(t,e){if(!t||X_)return"";X_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(_){var f=_}Reflect.construct(t,[],h)}else{try{h.call()}catch(_){f=_}t.call(h.prototype)}}else{try{throw Error()}catch(_){f=_}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(_){if(_&&f&&typeof _.stack=="string")return[_.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),s=o[0],a=o[1];if(s&&a){var c=s.split(`
`),u=a.split(`
`);for(l=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(i===c.length||l===u.length)for(i=c.length-1,l=u.length-1;1<=i&&0<=l&&c[i]!==u[l];)l--;for(;1<=i&&0<=l;i--,l--)if(c[i]!==u[l]){if(i!==1||l!==1)do if(i--,l--,0>l||c[i]!==u[l]){var d=`
`+c[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=l);break}}}finally{X_=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Bs(n):""}function T6(t,e){switch(t.tag){case 26:case 27:case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return t.child!==e&&e!==null?Bs("Suspense Fallback"):Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 15:return I_(t.type,!1);case 11:return I_(t.type.render,!1);case 1:return I_(t.type,!0);case 31:return Bs("Activity");default:return""}}function oy(t){try{var e="",n=null;do e+=T6(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var _0=Object.prototype.hasOwnProperty,Um=Xn.unstable_scheduleCallback,q_=Xn.unstable_cancelCallback,E6=Xn.unstable_shouldYield,D6=Xn.unstable_requestPaint,nl=Xn.unstable_now,R6=Xn.unstable_getCurrentPriorityLevel,U5=Xn.unstable_ImmediatePriority,X5=Xn.unstable_UserBlockingPriority,mf=Xn.unstable_NormalPriority,z6=Xn.unstable_LowPriority,I5=Xn.unstable_IdlePriority,O6=Xn.log,A6=Xn.unstable_setDisableYieldValue,ku=null,il=null;function Go(t){if(typeof O6=="function"&&A6(t),il&&typeof il.setStrictMode=="function")try{il.setStrictMode(ku,t)}catch{}}var ll=Math.clz32?Math.clz32:B6,N6=Math.log,L6=Math.LN2;function B6(t){return t>>>=0,t===0?32:31-(N6(t)/L6|0)|0}var ld=256,od=262144,sd=4194304;function $s(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ff(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var l=0,o=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var a=i&134217727;return a!==0?(i=a&~o,i!==0?l=$s(i):(s&=a,s!==0?l=$s(s):n||(n=a&~t,n!==0&&(l=$s(n))))):(a=i&~o,a!==0?l=$s(a):s!==0?l=$s(s):n||(n=i&~t,n!==0&&(l=$s(n)))),l===0?0:e!==0&&e!==l&&!(e&o)&&(o=l&-l,n=e&-e,o>=n||o===32&&(n&4194048)!==0)?e:l}function Cu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $6(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q5(){var t=sd;return sd<<=1,!(sd&62914560)&&(sd=4194304),t}function W_(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ju(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function H6(t,e,n,i,l,o){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var a=t.entanglements,c=t.expirationTimes,u=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-ll(n),h=1<<d;a[d]=0,c[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var _=f[d];_!==null&&(_.lane&=-536870913)}n&=~h}i!==0&&W5(t,i,0),o!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=o&~(s&~e))}function W5(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ll(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Q5(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ll(n),l=1<<i;l&e|t[i]&e&&(t[i]|=e),n&=~l}}function G5(t,e){var n=e&-e;return n=n&42?1:Xm(n),n&(t.suspendedLanes|e)?0:n}function Xm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Im(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function V5(){var t=Dt.p;return t!==0?t:(t=window.event,t===void 0?32:gv(t.type))}function sy(t,e){var n=Dt.p;try{return Dt.p=t,e()}finally{Dt.p=n}}var xs=Math.random().toString(36).slice(2),ti="__reactFiber$"+xs,Hi="__reactProps$"+xs,Na="__reactContainer$"+xs,h0="__reactEvents$"+xs,Y6="__reactListeners$"+xs,U6="__reactHandles$"+xs,ry="__reactResources$"+xs,Mu="__reactMarker$"+xs;function qm(t){delete t[ti],delete t[Hi],delete t[h0],delete t[Y6],delete t[U6]}function qr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Na]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=h1(t);t!==null;){if(n=t[ti])return n;t=h1(t)}return e}t=n,n=t.parentNode}return null}function La(t){if(t=t[ti]||t[Na]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function vc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(G(33))}function aa(t){var e=t[ry];return e||(e=t[ry]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Vn(t){t[Mu]=!0}var P5=new Set,F5={};function fr(t,e){Sa(t,e),Sa(t+"Capture",e)}function Sa(t,e){for(F5[t]=e,t=0;t<e.length;t++)P5.add(e[t])}var X6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ay={},cy={};function I6(t){return _0.call(cy,t)?!0:_0.call(ay,t)?!1:X6.test(t)?cy[t]=!0:(ay[t]=!0,!1)}function Hd(t,e,n){if(I6(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function rd(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function no(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ml(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z5(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q6(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function m0(t){if(!t._valueTracker){var e=Z5(t)?"checked":"value";t._valueTracker=q6(t,e,""+t[e])}}function K5(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Z5(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var W6=/[\n"\\]/g;function yl(t){return t.replace(W6,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function p0(t,e,n,i,l,o,s,a){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ml(e)):t.value!==""+ml(e)&&(t.value=""+ml(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?g0(t,s,ml(e)):n!=null?g0(t,s,ml(n)):i!=null&&t.removeAttribute("value"),l==null&&o!=null&&(t.defaultChecked=!!o),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.name=""+ml(a):t.removeAttribute("name")}function J5(t,e,n,i,l,o,s,a){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||e!=null)){m0(t);return}n=n!=null?""+ml(n):"",e=e!=null?""+ml(e):n,a||e===t.value||(t.value=e),t.defaultValue=e}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=a?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),m0(t)}function g0(t,e,n){e==="number"&&pf(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ca(t,e,n,i){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ml(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function e2(t,e,n){if(e!=null&&(e=""+ml(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ml(n):""}function t2(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(G(92));if(bc(i)){if(1<i.length)throw Error(G(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ml(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),m0(t)}function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Q6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uy(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Q6.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function n2(t,e,n){if(e!=null&&typeof e!="object")throw Error(G(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var l in e)i=e[l],e.hasOwnProperty(l)&&n[l]!==i&&uy(t,l,i)}else for(var o in e)e.hasOwnProperty(o)&&uy(t,o,e[o])}function Wm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yd(t){return V6.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function mo(){}var y0=null;function Qm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,ua=null;function dy(t){var e=La(t);if(e&&(t=e.stateNode)){var n=t[Hi]||null;e:switch(t=e.stateNode,e.type){case"input":if(p0(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yl(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var l=i[Hi]||null;if(!l)throw Error(G(90));p0(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&K5(i)}break e;case"textarea":e2(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ca(t,!!n.multiple,e,!1)}}}var Q_=!1;function i2(t,e,n){if(Q_)return t(e,n);Q_=!0;try{var i=t(e);return i}finally{if(Q_=!1,(Wr!==null||ua!==null)&&(a_(),Wr&&(e=Wr,t=ua,ua=Wr=null,dy(e),t)))for(e=0;e<t.length;e++)dy(t[e])}}function au(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Hi]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(G(231,e,typeof n));return n}var So=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x0=!1;if(So)try{var ec={};Object.defineProperty(ec,"passive",{get:function(){x0=!0}}),window.addEventListener("test",ec,ec),window.removeEventListener("test",ec,ec)}catch{x0=!1}var Vo=null,Gm=null,Ud=null;function l2(){if(Ud)return Ud;var t,e=Gm,n=e.length,i,l="value"in Vo?Vo.value:Vo.textContent,o=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===l[o-i];i++);return Ud=l.slice(t,1<i?1-i:void 0)}function Xd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ad(){return!0}function fy(){return!1}function Yi(t){function e(n,i,l,o,s){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ad:fy,this.isPropagationStopped=fy,this}return nn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ad)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ad)},persist:function(){},isPersistent:ad}),e}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=Yi(_r),Tu=nn({},_r,{view:0,detail:0}),P6=Yi(Tu),G_,V_,tc,Kf=nn({},Tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tc&&(tc&&t.type==="mousemove"?(G_=t.screenX-tc.screenX,V_=t.screenY-tc.screenY):V_=G_=0,tc=t),G_)},movementY:function(t){return"movementY"in t?t.movementY:V_}}),_y=Yi(Kf),F6=nn({},Kf,{dataTransfer:0}),Z6=Yi(F6),K6=nn({},Tu,{relatedTarget:0}),P_=Yi(K6),J6=nn({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),e3=Yi(J6),t3=nn({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n3=Yi(t3),i3=nn({},_r,{data:0}),hy=Yi(i3),l3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s3[t])?!!e[t]:!1}function Vm(){return r3}var a3=nn({},Tu,{key:function(t){if(t.key){var e=l3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(t){return t.type==="keypress"?Xd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c3=Yi(a3),u3=nn({},Kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=Yi(u3),d3=nn({},Tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),f3=Yi(d3),_3=nn({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),h3=Yi(_3),m3=nn({},Kf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p3=Yi(m3),g3=nn({},_r,{newState:0,oldState:0}),y3=Yi(g3),x3=[9,13,27,32],Pm=So&&"CompositionEvent"in window,Bc=null;So&&"documentMode"in document&&(Bc=document.documentMode);var b3=So&&"TextEvent"in window&&!Bc,o2=So&&(!Pm||Bc&&8<Bc&&11>=Bc),py=" ",gy=!1;function s2(t,e){switch(t){case"keyup":return x3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function v3(t,e){switch(t){case"compositionend":return r2(e);case"keypress":return e.which!==32?null:(gy=!0,py);case"textInput":return t=e.data,t===py&&gy?null:t;default:return null}}function w3(t,e){if(Qr)return t==="compositionend"||!Pm&&s2(t,e)?(t=l2(),Ud=Gm=Vo=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o2&&e.locale!=="ko"?null:e.data;default:return null}}var S3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S3[t.type]:e==="textarea"}function a2(t,e,n,i){Wr?ua?ua.push(i):ua=[i]:Wr=i,e=Af(e,"onChange"),0<e.length&&(n=new Zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $c=null,cu=null;function k3(t){iv(t,0)}function Jf(t){var e=vc(t);if(K5(e))return t}function xy(t,e){if(t==="change")return e}var c2=!1;if(So){var F_;if(So){var Z_="oninput"in document;if(!Z_){var by=document.createElement("div");by.setAttribute("oninput","return;"),Z_=typeof by.oninput=="function"}F_=Z_}else F_=!1;c2=F_&&(!document.documentMode||9<document.documentMode)}function vy(){$c&&($c.detachEvent("onpropertychange",u2),cu=$c=null)}function u2(t){if(t.propertyName==="value"&&Jf(cu)){var e=[];a2(e,cu,t,Qm(t)),i2(k3,e)}}function C3(t,e,n){t==="focusin"?(vy(),$c=e,cu=n,$c.attachEvent("onpropertychange",u2)):t==="focusout"&&vy()}function j3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jf(cu)}function M3(t,e){if(t==="click")return Jf(e)}function T3(t,e){if(t==="input"||t==="change")return Jf(e)}function E3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var al=typeof Object.is=="function"?Object.is:E3;function uu(t,e){if(al(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!_0.call(e,l)||!al(t[l],e[l]))return!1}return!0}function wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sy(t,e){var n=wy(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wy(n)}}function d2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f2(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pf(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pf(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var D3=So&&"documentMode"in document&&11>=document.documentMode,Gr=null,b0=null,Hc=null,v0=!1;function ky(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;v0||Gr==null||Gr!==pf(i)||(i=Gr,"selectionStart"in i&&Fm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hc&&uu(Hc,i)||(Hc=i,i=Af(b0,"onSelect"),0<i.length&&(e=new Zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function Ds(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},K_={},_2={};So&&(_2=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function hr(t){if(K_[t])return K_[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _2)return K_[t]=e[n];return t}var h2=hr("animationend"),m2=hr("animationiteration"),p2=hr("animationstart"),R3=hr("transitionrun"),z3=hr("transitionstart"),O3=hr("transitioncancel"),g2=hr("transitionend"),y2=new Map,w0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");w0.push("scrollEnd");function Ol(t,e){y2.set(t,e),fr(e,[t])}var gf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fl=[],Pr=0,Zm=0;function e_(){for(var t=Pr,e=Zm=Pr=0;e<t;){var n=fl[e];fl[e++]=null;var i=fl[e];fl[e++]=null;var l=fl[e];fl[e++]=null;var o=fl[e];if(fl[e++]=null,i!==null&&l!==null){var s=i.pending;s===null?l.next=l:(l.next=s.next,s.next=l),i.pending=l}o!==0&&x2(n,l,o)}}function t_(t,e,n,i){fl[Pr++]=t,fl[Pr++]=e,fl[Pr++]=n,fl[Pr++]=i,Zm|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Km(t,e,n,i){return t_(t,e,n,i),yf(t)}function mr(t,e){return t_(t,null,null,e),yf(t)}function x2(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var l=!1,o=t.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(l=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,l&&e!==null&&(l=31-ll(n),t=o.hiddenUpdates,i=t[l],i===null?t[l]=[e]:i.push(e),e.lane=n|536870912),o):null}function yf(t){if(50<Vc)throw Vc=0,I0=null,Error(G(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Fr={};function A3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zi(t,e,n,i){return new A3(t,e,n,i)}function Jm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yo(t,e){var n=t.alternate;return n===null?(n=Zi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function b2(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Id(t,e,n,i,l,o){var s=0;if(i=t,typeof t=="function")Jm(t)&&(s=1);else if(typeof t=="string")s=HS(t,n,Pl.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case c0:return t=Zi(31,n,e,l),t.elementType=c0,t.lanes=o,t;case Xr:return Ks(n.children,l,o,e);case H5:s=8,l|=24;break;case s0:return t=Zi(12,n,e,l|2),t.elementType=s0,t.lanes=o,t;case r0:return t=Zi(13,n,e,l),t.elementType=r0,t.lanes=o,t;case a0:return t=Zi(19,n,e,l),t.elementType=a0,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ho:s=10;break e;case Y5:s=9;break e;case Hm:s=11;break e;case Ym:s=14;break e;case Lo:s=16,i=null;break e}s=29,n=Error(G(130,t===null?"null":typeof t,"")),i=null}return e=Zi(s,n,e,l),e.elementType=t,e.type=i,e.lanes=o,e}function Ks(t,e,n,i){return t=Zi(7,t,i,e),t.lanes=n,t}function J_(t,e,n){return t=Zi(6,t,null,e),t.lanes=n,t}function v2(t){var e=Zi(18,null,null,0);return e.stateNode=t,e}function eh(t,e,n){return e=Zi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Cy=new WeakMap;function xl(t,e){if(typeof t=="object"&&t!==null){var n=Cy.get(t);return n!==void 0?n:(e={value:t,source:e,stack:oy(e)},Cy.set(t,e),e)}return{value:t,source:e,stack:oy(e)}}var Zr=[],Kr=0,xf=null,du=0,pl=[],gl=0,hs=null,Wl=1,Ql="";function co(t,e){Zr[Kr++]=du,Zr[Kr++]=xf,xf=t,du=e}function w2(t,e,n){pl[gl++]=Wl,pl[gl++]=Ql,pl[gl++]=hs,hs=t;var i=Wl;t=Ql;var l=32-ll(i)-1;i&=~(1<<l),n+=1;var o=32-ll(e)+l;if(30<o){var s=l-l%5;o=(i&(1<<s)-1).toString(32),i>>=s,l-=s,Wl=1<<32-ll(e)+l|n<<l|i,Ql=o+t}else Wl=1<<o|n<<l|i,Ql=t}function ep(t){t.return!==null&&(co(t,1),w2(t,1,0))}function tp(t){for(;t===xf;)xf=Zr[--Kr],Zr[Kr]=null,du=Zr[--Kr],Zr[Kr]=null;for(;t===hs;)hs=pl[--gl],pl[gl]=null,Ql=pl[--gl],pl[gl]=null,Wl=pl[--gl],pl[gl]=null}function S2(t,e){pl[gl++]=Wl,pl[gl++]=Ql,pl[gl++]=hs,Wl=e.id,Ql=e.overflow,hs=t}var ni=null,en=null,vt=!1,ns=null,bl=!1,S0=Error(G(519));function ms(t){var e=Error(G(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fu(xl(e,t)),S0}function jy(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ti]=t,e[Hi]=i,n){case"dialog":ht("cancel",e),ht("close",e);break;case"iframe":case"object":case"embed":ht("load",e);break;case"video":case"audio":for(n=0;n<pu.length;n++)ht(pu[n],e);break;case"source":ht("error",e);break;case"img":case"image":case"link":ht("error",e),ht("load",e);break;case"details":ht("toggle",e);break;case"input":ht("invalid",e),J5(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ht("invalid",e);break;case"textarea":ht("invalid",e),t2(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||ov(e.textContent,n)?(i.popover!=null&&(ht("beforetoggle",e),ht("toggle",e)),i.onScroll!=null&&ht("scroll",e),i.onScrollEnd!=null&&ht("scrollend",e),i.onClick!=null&&(e.onclick=mo),e=!0):e=!1,e||ms(t,!0)}function My(t){for(ni=t.return;ni;)switch(ni.tag){case 5:case 31:case 13:bl=!1;return;case 27:case 3:bl=!0;return;default:ni=ni.return}}function Er(t){if(t!==ni)return!1;if(!vt)return My(t),vt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||V0(t.type,t.memoizedProps)),n=!n),n&&en&&ms(t),My(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));en=_1(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));en=_1(t)}else e===27?(e=en,bs(t.type)?(t=K0,K0=null,en=t):en=e):en=ni?Cl(t.stateNode.nextSibling):null;return!0}function or(){en=ni=null,vt=!1}function th(){var t=ns;return t!==null&&(Ri===null?Ri=t:Ri.push.apply(Ri,t),ns=null),t}function fu(t){ns===null?ns=[t]:ns.push(t)}var k0=Zl(null),pr=null,po=null;function $o(t,e,n){Vt(k0,e._currentValue),e._currentValue=n}function xo(t){t._currentValue=k0.current,Pn(k0)}function C0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function j0(t,e,n,i){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var a=o;o=l;for(var c=0;c<e.length;c++)if(a.context===e[c]){o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),C0(o.return,n,t),i||(s=null);break e}o=a.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(G(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),C0(s,n,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Ba(t,e,n,i){t=null;for(var l=e,o=!1;l!==null;){if(!o){if(l.flags&524288)o=!0;else if(l.flags&262144)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(G(387));if(s=s.memoizedProps,s!==null){var a=l.type;al(l.pendingProps.value,s.value)||(t!==null?t.push(a):t=[a])}}else if(l===ff.current){if(s=l.alternate,s===null)throw Error(G(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(yu):t=[yu])}l=l.return}t!==null&&j0(e,t,n,i),e.flags|=262144}function bf(t){for(t=t.firstContext;t!==null;){if(!al(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){pr=t,po=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function li(t){return k2(pr,t)}function cd(t,e){return pr===null&&sr(t),k2(t,e)}function k2(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},po===null){if(t===null)throw Error(G(308));po=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else po=po.next=e;return n}var N3=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},L3=Xn.unstable_scheduleCallback,B3=Xn.unstable_NormalPriority,On={$$typeof:ho,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function np(){return{controller:new N3,data:new Map,refCount:0}}function Eu(t){t.refCount--,t.refCount===0&&L3(B3,function(){t.controller.abort()})}var Yc=null,M0=0,Ca=0,da=null;function $3(t,e){if(Yc===null){var n=Yc=[];M0=0,Ca=Mp(),da={status:"pending",value:void 0,then:function(i){n.push(i)}}}return M0++,e.then(Ty,Ty),e}function Ty(){if(--M0===0&&Yc!==null){da!==null&&(da.status="fulfilled");var t=Yc;Yc=null,Ca=0,da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function H3(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Ey=Ie.S;Ie.S=function(t,e){$b=nl(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$3(t,e),Ey!==null&&Ey(t,e)};var Js=Zl(null);function ip(){var t=Js.current;return t!==null?t:Gt.pooledCache}function qd(t,e){e===null?Vt(Js,Js.current):Vt(Js,e.pool)}function C2(){var t=ip();return t===null?null:{parent:On._currentValue,pool:t}}var $a=Error(G(460)),lp=Error(G(474)),n_=Error(G(542)),vf={then:function(){}};function Dy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function j2(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(mo,mo),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zy(t),t;default:if(typeof e.status=="string")e.then(mo,mo);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(G(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=i}},function(i){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zy(t),t}throw er=e,$a}}function Hs(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(er=n,$a):n}}var er=null;function Ry(){if(er===null)throw Error(G(459));var t=er;return er=null,t}function zy(t){if(t===$a||t===n_)throw Error(G(483))}var fa=null,_u=0;function ud(t){var e=_u;return _u+=1,fa===null&&(fa=[]),j2(fa,t,e)}function nc(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function dd(t,e){throw e.$$typeof===C6?Error(G(525)):(t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function M2(t){function e(g,y){if(t){var b=g.deletions;b===null?(g.deletions=[y],g.flags|=16):b.push(y)}}function n(g,y){if(!t)return null;for(;y!==null;)e(g,y),y=y.sibling;return null}function i(g){for(var y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function l(g,y){return g=yo(g,y),g.index=0,g.sibling=null,g}function o(g,y,b){return g.index=b,t?(b=g.alternate,b!==null?(b=b.index,b<y?(g.flags|=67108866,y):b):(g.flags|=67108866,y)):(g.flags|=1048576,y)}function s(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function a(g,y,b,x){return y===null||y.tag!==6?(y=J_(b,g.mode,x),y.return=g,y):(y=l(y,b),y.return=g,y)}function c(g,y,b,x){var M=b.type;return M===Xr?d(g,y,b.props.children,x,b.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lo&&Hs(M)===y.type)?(y=l(y,b.props),nc(y,b),y.return=g,y):(y=Id(b.type,b.key,b.props,null,g.mode,x),nc(y,b),y.return=g,y)}function u(g,y,b,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=eh(b,g.mode,x),y.return=g,y):(y=l(y,b.children||[]),y.return=g,y)}function d(g,y,b,x,M){return y===null||y.tag!==7?(y=Ks(b,g.mode,x,M),y.return=g,y):(y=l(y,b),y.return=g,y)}function h(g,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=J_(""+y,g.mode,b),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case id:return b=Id(y.type,y.key,y.props,null,g.mode,b),nc(b,y),b.return=g,b;case xc:return y=eh(y,g.mode,b),y.return=g,y;case Lo:return y=Hs(y),h(g,y,b)}if(bc(y)||Ja(y))return y=Ks(y,g.mode,b,null),y.return=g,y;if(typeof y.then=="function")return h(g,ud(y),b);if(y.$$typeof===ho)return h(g,cd(g,y),b);dd(g,y)}return null}function f(g,y,b,x){var M=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return M!==null?null:a(g,y,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case id:return b.key===M?c(g,y,b,x):null;case xc:return b.key===M?u(g,y,b,x):null;case Lo:return b=Hs(b),f(g,y,b,x)}if(bc(b)||Ja(b))return M!==null?null:d(g,y,b,x,null);if(typeof b.then=="function")return f(g,y,ud(b),x);if(b.$$typeof===ho)return f(g,y,cd(g,b),x);dd(g,b)}return null}function _(g,y,b,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return g=g.get(b)||null,a(y,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case id:return g=g.get(x.key===null?b:x.key)||null,c(y,g,x,M);case xc:return g=g.get(x.key===null?b:x.key)||null,u(y,g,x,M);case Lo:return x=Hs(x),_(g,y,b,x,M)}if(bc(x)||Ja(x))return g=g.get(b)||null,d(y,g,x,M,null);if(typeof x.then=="function")return _(g,y,b,ud(x),M);if(x.$$typeof===ho)return _(g,y,b,cd(y,x),M);dd(y,x)}return null}function m(g,y,b,x){for(var M=null,R=null,k=y,N=y=0,L=null;k!==null&&N<b.length;N++){k.index>N?(L=k,k=null):L=k.sibling;var A=f(g,k,b[N],x);if(A===null){k===null&&(k=L);break}t&&k&&A.alternate===null&&e(g,k),y=o(A,y,N),R===null?M=A:R.sibling=A,R=A,k=L}if(N===b.length)return n(g,k),vt&&co(g,N),M;if(k===null){for(;N<b.length;N++)k=h(g,b[N],x),k!==null&&(y=o(k,y,N),R===null?M=k:R.sibling=k,R=k);return vt&&co(g,N),M}for(k=i(k);N<b.length;N++)L=_(k,g,N,b[N],x),L!==null&&(t&&L.alternate!==null&&k.delete(L.key===null?N:L.key),y=o(L,y,N),R===null?M=L:R.sibling=L,R=L);return t&&k.forEach(function(J){return e(g,J)}),vt&&co(g,N),M}function p(g,y,b,x){if(b==null)throw Error(G(151));for(var M=null,R=null,k=y,N=y=0,L=null,A=b.next();k!==null&&!A.done;N++,A=b.next()){k.index>N?(L=k,k=null):L=k.sibling;var J=f(g,k,A.value,x);if(J===null){k===null&&(k=L);break}t&&k&&J.alternate===null&&e(g,k),y=o(J,y,N),R===null?M=J:R.sibling=J,R=J,k=L}if(A.done)return n(g,k),vt&&co(g,N),M;if(k===null){for(;!A.done;N++,A=b.next())A=h(g,A.value,x),A!==null&&(y=o(A,y,N),R===null?M=A:R.sibling=A,R=A);return vt&&co(g,N),M}for(k=i(k);!A.done;N++,A=b.next())A=_(k,g,N,A.value,x),A!==null&&(t&&A.alternate!==null&&k.delete(A.key===null?N:A.key),y=o(A,y,N),R===null?M=A:R.sibling=A,R=A);return t&&k.forEach(function(V){return e(g,V)}),vt&&co(g,N),M}function C(g,y,b,x){if(typeof b=="object"&&b!==null&&b.type===Xr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case id:e:{for(var M=b.key;y!==null;){if(y.key===M){if(M=b.type,M===Xr){if(y.tag===7){n(g,y.sibling),x=l(y,b.props.children),x.return=g,g=x;break e}}else if(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lo&&Hs(M)===y.type){n(g,y.sibling),x=l(y,b.props),nc(x,b),x.return=g,g=x;break e}n(g,y);break}else e(g,y);y=y.sibling}b.type===Xr?(x=Ks(b.props.children,g.mode,x,b.key),x.return=g,g=x):(x=Id(b.type,b.key,b.props,null,g.mode,x),nc(x,b),x.return=g,g=x)}return s(g);case xc:e:{for(M=b.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(g,y.sibling),x=l(y,b.children||[]),x.return=g,g=x;break e}else{n(g,y);break}else e(g,y);y=y.sibling}x=eh(b,g.mode,x),x.return=g,g=x}return s(g);case Lo:return b=Hs(b),C(g,y,b,x)}if(bc(b))return m(g,y,b,x);if(Ja(b)){if(M=Ja(b),typeof M!="function")throw Error(G(150));return b=M.call(b),p(g,y,b,x)}if(typeof b.then=="function")return C(g,y,ud(b),x);if(b.$$typeof===ho)return C(g,y,cd(g,b),x);dd(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,y!==null&&y.tag===6?(n(g,y.sibling),x=l(y,b),x.return=g,g=x):(n(g,y),x=J_(b,g.mode,x),x.return=g,g=x),s(g)):n(g,y)}return function(g,y,b,x){try{_u=0;var M=C(g,y,b,x);return fa=null,M}catch(k){if(k===$a||k===n_)throw k;var R=Zi(29,k,null,g.mode);return R.lanes=x,R.return=g,R}finally{}}}var rr=M2(!0),T2=M2(!1),Bo=!1;function op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function T0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function is(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Et&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,e=yf(t),x2(t,null,n),e}return t_(t,i,e,n),yf(t)}function Uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Q5(t,n)}}function nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=e:o=o.next=e}else l=o=e;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var E0=!1;function Xc(){if(E0){var t=da;if(t!==null)throw t}}function Ic(t,e,n,i){E0=!1;var l=t.updateQueue;Bo=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=l.baseState;s=0,d=u=c=null,a=o;do{var f=a.lane&-536870913,_=f!==a.lane;if(_?(yt&f)===f:(i&f)===f){f!==0&&f===Ca&&(E0=!0),d!==null&&(d=d.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});e:{var m=t,p=a;f=e;var C=n;switch(p.tag){case 1:if(m=p.payload,typeof m=="function"){h=m.call(C,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=p.payload,f=typeof m=="function"?m.call(C,h,f):m,f==null)break e;h=nn({},h,f);break e;case 2:Bo=!0}}f=a.callback,f!==null&&(t.flags|=64,_&&(t.flags|=8192),_=l.callbacks,_===null?l.callbacks=[f]:_.push(f))}else _={lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,c=h):d=d.next=_,s|=f;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;_=a,a=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);d===null&&(c=h),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=d,o===null&&(l.shared.lanes=0),gs|=s,t.lanes=s,t.memoizedState=h}}function E2(t,e){if(typeof t!="function")throw Error(G(191,t));t.call(e)}function D2(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)E2(n[t],e)}var ja=Zl(null),wf=Zl(0);function Oy(t,e){t=Mo,Vt(wf,t),Vt(ja,e),Mo=t|e.baseLanes}function D0(){Vt(wf,Mo),Vt(ja,ja.current)}function sp(){Mo=wf.current,Pn(ja),Pn(wf)}var cl=Zl(null),kl=null;function Ho(t){var e=t.alternate;Vt(vn,vn.current&1),Vt(cl,t),kl===null&&(e===null||ja.current!==null||e.memoizedState!==null)&&(kl=t)}function R0(t){Vt(vn,vn.current),Vt(cl,t),kl===null&&(kl=t)}function R2(t){t.tag===22?(Vt(vn,vn.current),Vt(cl,t),kl===null&&(kl=t)):Yo()}function Yo(){Vt(vn,vn.current),Vt(cl,cl.current)}function Vi(t){Pn(cl),kl===t&&(kl=null),Pn(vn)}var vn=Zl(0);function Sf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||F0(n)||Z0(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ko=0,lt=null,Ut=null,Rn=null,kf=!1,_a=!1,ar=!1,Cf=0,hu=0,ha=null,Y3=0;function _n(){throw Error(G(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!al(t[n],e[n]))return!1;return!0}function ap(t,e,n,i,l,o){return ko=o,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ie.H=t===null||t.memoizedState===null?ab:xp,ar=!1,o=n(i,l),ar=!1,_a&&(o=O2(e,n,i,l)),z2(t),o}function z2(t){Ie.H=mu;var e=Ut!==null&&Ut.next!==null;if(ko=0,Rn=Ut=lt=null,kf=!1,hu=0,ha=null,e)throw Error(G(300));t===null||An||(t=t.dependencies,t!==null&&bf(t)&&(An=!0))}function O2(t,e,n,i){lt=t;var l=0;do{if(_a&&(ha=null),hu=0,_a=!1,25<=l)throw Error(G(301));if(l+=1,Rn=Ut=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Ie.H=cb,o=e(n,i)}while(_a);return o}function U3(){var t=Ie.H,e=t.useState()[0];return e=typeof e.then=="function"?Du(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(lt.flags|=1024),e}function cp(){var t=Cf!==0;return Cf=0,t}function up(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function dp(t){if(kf){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}kf=!1}ko=0,Rn=Ut=lt=null,_a=!1,hu=Cf=0,ha=null}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?lt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function Sn(){if(Ut===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Rn===null?lt.memoizedState:Rn.next;if(e!==null)Rn=e,Ut=t;else{if(t===null)throw lt.alternate===null?Error(G(467)):Error(G(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Rn===null?lt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function i_(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Du(t){var e=hu;return hu+=1,ha===null&&(ha=[]),t=j2(ha,t,e),e=lt,(Rn===null?e.memoizedState:Rn.next)===null&&(e=e.alternate,Ie.H=e===null||e.memoizedState===null?ab:xp),t}function l_(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Du(t);if(t.$$typeof===ho)return li(t)}throw Error(G(438,String(t)))}function fp(t){var e=null,n=lt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=lt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=i_(),lt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=j6;return e.index++,n}function Co(t,e){return typeof e=="function"?e(t):e}function Wd(t){var e=Sn();return _p(e,Ut,t)}function _p(t,e,n){var i=t.queue;if(i===null)throw Error(G(311));i.lastRenderedReducer=n;var l=t.baseQueue,o=i.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}e.baseQueue=l=o,i.pending=null}if(o=t.baseState,l===null)t.memoizedState=o;else{e=l.next;var a=s=null,c=null,u=e,d=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(yt&h)===h:(ko&h)===h){var f=u.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Ca&&(d=!0);else if((ko&f)===f){u=u.next,f===Ca&&(d=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(a=c=h,s=o):c=c.next=h,lt.lanes|=f,gs|=f;h=u.action,ar&&n(o,h),o=u.hasEagerState?u.eagerState:n(o,h)}else f={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(a=c=f,s=o):c=c.next=f,lt.lanes|=h,gs|=h;u=u.next}while(u!==null&&u!==e);if(c===null?s=o:c.next=a,!al(o,t.memoizedState)&&(An=!0,d&&(n=da,n!==null)))throw n;t.memoizedState=o,t.baseState=s,t.baseQueue=c,i.lastRenderedState=o}return l===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ih(t){var e=Sn(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var i=n.dispatch,l=n.pending,o=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=t(o,s.action),s=s.next;while(s!==l);al(o,e.memoizedState)||(An=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function A2(t,e,n){var i=lt,l=Sn(),o=vt;if(o){if(n===void 0)throw Error(G(407));n=n()}else n=e();var s=!al((Ut||l).memoizedState,n);if(s&&(l.memoizedState=n,An=!0),l=l.queue,hp(B2.bind(null,i,l,t),[t]),l.getSnapshot!==e||s||Rn!==null&&Rn.memoizedState.tag&1){if(i.flags|=2048,Ma(9,{destroy:void 0},L2.bind(null,i,l,n,e),null),Gt===null)throw Error(G(349));o||ko&127||N2(i,e,n)}return n}function N2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e=i_(),lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L2(t,e,n,i){e.value=n,e.getSnapshot=i,$2(e)&&H2(t)}function B2(t,e,n){return n(function(){$2(e)&&H2(t)})}function $2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!al(t,n)}catch{return!0}}function H2(t){var e=mr(t,2);e!==null&&Bi(e,t,2)}function z0(t){var e=yi();if(typeof t=="function"){var n=t;if(t=n(),ar){Go(!0);try{n()}finally{Go(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e}function Y2(t,e,n,i){return t.baseState=n,_p(t,Ut,typeof i=="function"?i:Co)}function X3(t,e,n,i,l){if(s_(t))throw Error(G(485));if(t=e.action,t!==null){var o={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};Ie.T!==null?n(!0):o.isTransition=!1,i(o),n=e.pending,n===null?(o.next=e.pending=o,U2(e,o)):(o.next=n.next,e.pending=n.next=o)}}function U2(t,e){var n=e.action,i=e.payload,l=t.state;if(e.isTransition){var o=Ie.T,s={};Ie.T=s;try{var a=n(l,i),c=Ie.S;c!==null&&c(s,a),Ay(t,e,a)}catch(u){O0(t,e,u)}finally{o!==null&&s.types!==null&&(o.types=s.types),Ie.T=o}}else try{o=n(l,i),Ay(t,e,o)}catch(u){O0(t,e,u)}}function Ay(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ny(t,e,i)},function(i){return O0(t,e,i)}):Ny(t,e,n)}function Ny(t,e,n){e.status="fulfilled",e.value=n,X2(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,U2(t,n)))}function O0(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,X2(e),e=e.next;while(e!==i)}t.action=null}function X2(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function I2(t,e){return e}function Ly(t,e){if(vt){var n=Gt.formState;if(n!==null){e:{var i=lt;if(vt){if(en){t:{for(var l=en,o=bl;l.nodeType!==8;){if(!o){l=null;break t}if(l=Cl(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){en=Cl(l.nextSibling),i=l.data==="F!";break e}}ms(i)}i=!1}i&&(e=n[0])}}return n=yi(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I2,lastRenderedState:e},n.queue=i,n=ob.bind(null,lt,i),i.dispatch=n,i=z0(!1),o=yp.bind(null,lt,!1,i.queue),i=yi(),l={state:e,dispatch:null,action:t,pending:null},i.queue=l,n=X3.bind(null,lt,l,o,n),l.dispatch=n,i.memoizedState=t,[e,n,!1]}function By(t){var e=Sn();return q2(e,Ut,t)}function q2(t,e,n){if(e=_p(t,e,I2)[0],t=Wd(Co)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Du(e)}catch(s){throw s===$a?n_:s}else i=e;e=Sn();var l=e.queue,o=l.dispatch;return n!==e.memoizedState&&(lt.flags|=2048,Ma(9,{destroy:void 0},I3.bind(null,l,n),null)),[i,o,t]}function I3(t,e){t.action=e}function $y(t){var e=Sn(),n=Ut;if(n!==null)return q2(e,n,t);Sn(),e=e.memoizedState,n=Sn();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ma(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=lt.updateQueue,e===null&&(e=i_(),lt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function W2(){return Sn().memoizedState}function Qd(t,e,n,i){var l=yi();lt.flags|=t,l.memoizedState=Ma(1|e,{destroy:void 0},n,i===void 0?null:i)}function o_(t,e,n,i){var l=Sn();i=i===void 0?null:i;var o=l.memoizedState.inst;Ut!==null&&i!==null&&rp(i,Ut.memoizedState.deps)?l.memoizedState=Ma(e,o,n,i):(lt.flags|=t,l.memoizedState=Ma(1|e,o,n,i))}function Hy(t,e){Qd(8390656,8,t,e)}function hp(t,e){o_(2048,8,t,e)}function q3(t){lt.flags|=4;var e=lt.updateQueue;if(e===null)e=i_(),lt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Q2(t){var e=Sn().memoizedState;return q3({ref:e,nextImpl:t}),function(){if(Et&2)throw Error(G(440));return e.impl.apply(void 0,arguments)}}function G2(t,e){return o_(4,2,t,e)}function V2(t,e){return o_(4,4,t,e)}function P2(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function F2(t,e,n){n=n!=null?n.concat([t]):null,o_(4,4,P2.bind(null,e,t),n)}function mp(){}function Z2(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function K2(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&rp(e,i[1]))return i[0];if(i=t(),ar){Go(!0);try{t()}finally{Go(!1)}}return n.memoizedState=[i,e],i}function pp(t,e,n){return n===void 0||ko&1073741824&&!(yt&261930)?t.memoizedState=e:(t.memoizedState=n,t=Yb(),lt.lanes|=t,gs|=t,n)}function J2(t,e,n,i){return al(n,e)?n:ja.current!==null?(t=pp(t,n,i),al(t,e)||(An=!0),t):!(ko&42)||ko&1073741824&&!(yt&261930)?(An=!0,t.memoizedState=n):(t=Yb(),lt.lanes|=t,gs|=t,e)}function eb(t,e,n,i,l){var o=Dt.p;Dt.p=o!==0&&8>o?o:8;var s=Ie.T,a={};Ie.T=a,yp(t,!1,e,n);try{var c=l(),u=Ie.S;if(u!==null&&u(a,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=H3(c,i);qc(t,e,d,ol(t))}else qc(t,e,i,ol(t))}catch(h){qc(t,e,{then:function(){},status:"rejected",reason:h},ol())}finally{Dt.p=o,s!==null&&a.types!==null&&(s.types=a.types),Ie.T=s}}function W3(){}function A0(t,e,n,i){if(t.tag!==5)throw Error(G(476));var l=tb(t).queue;eb(t,l,e,Zs,n===null?W3:function(){return nb(t),n(i)})}function tb(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Zs,baseState:Zs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:Zs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function nb(t){var e=tb(t);e.next===null&&(e=t.alternate.memoizedState),qc(t,e.next.queue,{},ol())}function gp(){return li(yu)}function ib(){return Sn().memoizedState}function lb(){return Sn().memoizedState}function Q3(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ol();t=is(n);var i=ls(e,t,n);i!==null&&(Bi(i,e,n),Uc(i,e,n)),e={cache:np()},t.payload=e;return}e=e.return}}function G3(t,e,n){var i=ol();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t)?sb(e,n):(n=Km(t,e,n,i),n!==null&&(Bi(n,t,i),rb(n,e,i)))}function ob(t,e,n){var i=ol();qc(t,e,n,i)}function qc(t,e,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))sb(e,l);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(l.hasEagerState=!0,l.eagerState=a,al(a,s))return t_(t,e,l,0),Gt===null&&e_(),!1}catch{}finally{}if(n=Km(t,e,l,i),n!==null)return Bi(n,t,i),rb(n,e,i),!0}return!1}function yp(t,e,n,i){if(i={lane:2,revertLane:Mp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},s_(t)){if(e)throw Error(G(479))}else e=Km(t,n,i,2),e!==null&&Bi(e,t,2)}function s_(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function sb(t,e){_a=kf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rb(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Q5(t,n)}}var mu={readContext:li,use:l_,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};mu.useEffectEvent=_n;var ab={readContext:li,use:l_,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:li,useEffect:Hy,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qd(4194308,4,P2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qd(4194308,4,t,e)},useInsertionEffect:function(t,e){Qd(4,2,t,e)},useMemo:function(t,e){var n=yi();e=e===void 0?null:e;var i=t();if(ar){Go(!0);try{t()}finally{Go(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=yi();if(n!==void 0){var l=n(e);if(ar){Go(!0);try{n(e)}finally{Go(!1)}}}else l=e;return i.memoizedState=i.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},i.queue=t,t=t.dispatch=G3.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:function(t){t=z0(t);var e=t.queue,n=ob.bind(null,lt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:mp,useDeferredValue:function(t,e){var n=yi();return pp(n,t,e)},useTransition:function(){var t=z0(!1);return t=eb.bind(null,lt,t.queue,!0,!1),yi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=lt,l=yi();if(vt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=e(),Gt===null)throw Error(G(349));yt&127||N2(i,e,n)}l.memoizedState=n;var o={value:n,getSnapshot:e};return l.queue=o,Hy(B2.bind(null,i,o,t),[t]),i.flags|=2048,Ma(9,{destroy:void 0},L2.bind(null,i,o,n,e),null),n},useId:function(){var t=yi(),e=Gt.identifierPrefix;if(vt){var n=Ql,i=Wl;n=(i&~(1<<32-ll(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Cf++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Y3++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:gp,useFormState:Ly,useActionState:Ly,useOptimistic:function(t){var e=yi();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=yp.bind(null,lt,!0,n),n.dispatch=e,[t,e]},useMemoCache:fp,useCacheRefresh:function(){return yi().memoizedState=Q3.bind(null,lt)},useEffectEvent:function(t){var e=yi(),n={impl:t};return e.memoizedState=n,function(){if(Et&2)throw Error(G(440));return n.impl.apply(void 0,arguments)}}},xp={readContext:li,use:l_,useCallback:Z2,useContext:li,useEffect:hp,useImperativeHandle:F2,useInsertionEffect:G2,useLayoutEffect:V2,useMemo:K2,useReducer:Wd,useRef:W2,useState:function(){return Wd(Co)},useDebugValue:mp,useDeferredValue:function(t,e){var n=Sn();return J2(n,Ut.memoizedState,t,e)},useTransition:function(){var t=Wd(Co)[0],e=Sn().memoizedState;return[typeof t=="boolean"?t:Du(t),e]},useSyncExternalStore:A2,useId:ib,useHostTransitionStatus:gp,useFormState:By,useActionState:By,useOptimistic:function(t,e){var n=Sn();return Y2(n,Ut,t,e)},useMemoCache:fp,useCacheRefresh:lb};xp.useEffectEvent=Q2;var cb={readContext:li,use:l_,useCallback:Z2,useContext:li,useEffect:hp,useImperativeHandle:F2,useInsertionEffect:G2,useLayoutEffect:V2,useMemo:K2,useReducer:ih,useRef:W2,useState:function(){return ih(Co)},useDebugValue:mp,useDeferredValue:function(t,e){var n=Sn();return Ut===null?pp(n,t,e):J2(n,Ut.memoizedState,t,e)},useTransition:function(){var t=ih(Co)[0],e=Sn().memoizedState;return[typeof t=="boolean"?t:Du(t),e]},useSyncExternalStore:A2,useId:ib,useHostTransitionStatus:gp,useFormState:$y,useActionState:$y,useOptimistic:function(t,e){var n=Sn();return Ut!==null?Y2(n,Ut,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:fp,useCacheRefresh:lb};cb.useEffectEvent=Q2;function lh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:nn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var N0={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ol(),l=is(i);l.payload=e,n!=null&&(l.callback=n),e=ls(t,l,i),e!==null&&(Bi(e,t,i),Uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ol(),l=is(i);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=ls(t,l,i),e!==null&&(Bi(e,t,i),Uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ol(),i=is(n);i.tag=2,e!=null&&(i.callback=e),e=ls(t,i,n),e!==null&&(Bi(e,t,n),Uc(e,t,n))}};function Yy(t,e,n,i,l,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!uu(n,i)||!uu(l,o):!0}function Uy(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&N0.enqueueReplaceState(e,e.state,null)}function cr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=nn({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function ub(t){gf(t)}function db(t){console.error(t)}function fb(t){gf(t)}function jf(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Xy(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function L0(t,e,n){return n=is(n),n.tag=3,n.payload={element:null},n.callback=function(){jf(t,e)},n}function _b(t){return t=is(t),t.tag=3,t}function hb(t,e,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;t.payload=function(){return l(o)},t.callback=function(){Xy(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xy(e,n,i),typeof l!="function"&&(os===null?os=new Set([this]):os.add(this));var a=i.stack;this.componentDidCatch(i.value,{componentStack:a!==null?a:""})})}function V3(t,e,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Ba(e,n,l,!0),n=cl.current,n!==null){switch(n.tag){case 31:case 13:return kl===null?Rf():n.alternate===null&&hn===0&&(hn=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===vf?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),mh(t,i,l)),!1;case 22:return n.flags|=65536,i===vf?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),mh(t,i,l)),!1}throw Error(G(435,n.tag))}return mh(t,i,l),Rf(),!1}if(vt)return e=cl.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,i!==S0&&(t=Error(G(422),{cause:i}),fu(xl(t,n)))):(i!==S0&&(e=Error(G(423),{cause:i}),fu(xl(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,i=xl(i,n),l=L0(t.stateNode,i,l),nh(t,l),hn!==4&&(hn=2)),!1;var o=Error(G(520),{cause:i});if(o=xl(o,n),Gc===null?Gc=[o]:Gc.push(o),hn!==4&&(hn=2),e===null)return!0;i=xl(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=L0(n.stateNode,i,t),nh(n,t),!1;case 1:if(e=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(os===null||!os.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=_b(l),hb(l,t,n,i),nh(n,l),!1}n=n.return}while(n!==null);return!1}var bp=Error(G(461)),An=!1;function ei(t,e,n,i){e.child=t===null?T2(e,null,n,i):rr(e,t.child,n,i)}function Iy(t,e,n,i,l){n=n.render;var o=e.ref;if("ref"in i){var s={};for(var a in i)a!=="ref"&&(s[a]=i[a])}else s=i;return sr(e),i=ap(t,e,n,s,o,l),a=cp(),t!==null&&!An?(up(t,e,l),jo(t,e,l)):(vt&&a&&ep(e),e.flags|=1,ei(t,e,i,l),e.child)}function qy(t,e,n,i,l){if(t===null){var o=n.type;return typeof o=="function"&&!Jm(o)&&o.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=o,mb(t,e,o,i,l)):(t=Id(n.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!vp(t,l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:uu,n(s,i)&&t.ref===e.ref)return jo(t,e,l)}return e.flags|=1,t=yo(o,i),t.ref=e.ref,t.return=e,e.child=t}function mb(t,e,n,i,l){if(t!==null){var o=t.memoizedProps;if(uu(o,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=o,vp(t,l))t.flags&131072&&(An=!0);else return e.lanes=t.lanes,jo(t,e,l)}return B0(t,e,n,i,l)}function pb(t,e,n,i){var l=i.children,o=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(o=o!==null?o.baseLanes|n:n,t!==null){for(i=e.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,e.child=null;return Wy(t,e,o,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&qd(e,o!==null?o.cachePool:null),o!==null?Oy(e,o):D0(),R2(e);else return i=e.lanes=536870912,Wy(t,e,o!==null?o.baseLanes|n:n,n,i)}else o!==null?(qd(e,o.cachePool),Oy(e,o),Yo(),e.memoizedState=null):(t!==null&&qd(e,null),D0(),Yo());return ei(t,e,l,n),e.child}function wc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Wy(t,e,n,i,l){var o=ip();return o=o===null?null:{parent:On._currentValue,pool:o},e.memoizedState={baseLanes:n,cachePool:o},t!==null&&qd(e,null),D0(),R2(e),t!==null&&Ba(t,e,i,!0),e.childLanes=l,null}function Gd(t,e){return e=Mf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Qy(t,e,n){return rr(e,t.child,null,n),t=Gd(e,e.pendingProps),t.flags|=2,Vi(e),e.memoizedState=null,t}function P3(t,e,n){var i=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(vt){if(i.mode==="hidden")return t=Gd(e,i),e.lanes=536870912,wc(null,t);if(R0(e),(t=en)?(t=av(t,bl),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hs!==null?{id:Wl,overflow:Ql}:null,retryLane:536870912,hydrationErrors:null},n=v2(t),n.return=e,e.child=n,ni=e,en=null)):t=null,t===null)throw ms(e);return e.lanes=536870912,null}return Gd(e,i)}var o=t.memoizedState;if(o!==null){var s=o.dehydrated;if(R0(e),l)if(e.flags&256)e.flags&=-257,e=Qy(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(G(558));else if(An||Ba(t,e,n,!1),l=(n&t.childLanes)!==0,An||l){if(i=Gt,i!==null&&(s=G5(i,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,mr(t,s),Bi(i,t,s),bp;Rf(),e=Qy(t,e,n)}else t=o.treeContext,en=Cl(s.nextSibling),ni=e,vt=!0,ns=null,bl=!1,t!==null&&S2(e,t),e=Gd(e,i),e.flags|=4096;return e}return t=yo(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vd(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(G(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function B0(t,e,n,i,l){return sr(e),n=ap(t,e,n,i,void 0,l),i=cp(),t!==null&&!An?(up(t,e,l),jo(t,e,l)):(vt&&i&&ep(e),e.flags|=1,ei(t,e,n,l),e.child)}function Gy(t,e,n,i,l,o){return sr(e),e.updateQueue=null,n=O2(e,i,n,l),z2(t),i=cp(),t!==null&&!An?(up(t,e,o),jo(t,e,o)):(vt&&i&&ep(e),e.flags|=1,ei(t,e,n,o),e.child)}function Vy(t,e,n,i,l){if(sr(e),e.stateNode===null){var o=Fr,s=n.contextType;typeof s=="object"&&s!==null&&(o=li(s)),o=new n(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=N0,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},op(e),s=n.contextType,o.context=typeof s=="object"&&s!==null?li(s):Fr,o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(lh(e,n,s,i),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&N0.enqueueReplaceState(o,o.state,null),Ic(e,i,o,l),Xc(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var a=e.memoizedProps,c=cr(n,a);o.props=c;var u=o.context,d=n.contextType;s=Fr,typeof d=="object"&&d!==null&&(s=li(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function",a=e.pendingProps!==a,d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a||u!==s)&&Uy(e,o,i,s),Bo=!1;var f=e.memoizedState;o.state=f,Ic(e,i,o,l),Xc(),u=e.memoizedState,a||f!==u||Bo?(typeof h=="function"&&(lh(e,n,h,i),u=e.memoizedState),(c=Bo||Yy(e,n,c,i,f,u,s))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),o.props=i,o.state=u,o.context=s,i=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,T0(t,e),s=e.memoizedProps,d=cr(n,s),o.props=d,h=e.pendingProps,f=o.context,u=n.contextType,c=Fr,typeof u=="object"&&u!==null&&(c=li(u)),a=n.getDerivedStateFromProps,(u=typeof a=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||f!==c)&&Uy(e,o,i,c),Bo=!1,f=e.memoizedState,o.state=f,Ic(e,i,o,l),Xc();var _=e.memoizedState;s!==h||f!==_||Bo||t!==null&&t.dependencies!==null&&bf(t.dependencies)?(typeof a=="function"&&(lh(e,n,a,i),_=e.memoizedState),(d=Bo||Yy(e,n,d,i,f,_,c)||t!==null&&t.dependencies!==null&&bf(t.dependencies))?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,Vd(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=rr(e,t.child,null,l),e.child=rr(e,null,n,l)):ei(t,e,n,l),e.memoizedState=o.state,t=e.child):t=jo(t,e,l),t}function Py(t,e,n,i){return or(),e.flags|=256,ei(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sh(t){return{baseLanes:t,cachePool:C2()}}function rh(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=el),t}function gb(t,e,n){var i=e.pendingProps,l=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(l?Ho(e):Yo(),(t=en)?(t=av(t,bl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hs!==null?{id:Wl,overflow:Ql}:null,retryLane:536870912,hydrationErrors:null},n=v2(t),n.return=e,e.child=n,ni=e,en=null)):t=null,t===null)throw ms(e);return Z0(t)?e.lanes=32:e.lanes=536870912,null}var a=i.children;return i=i.fallback,l?(Yo(),l=e.mode,a=Mf({mode:"hidden",children:a},l),i=Ks(i,l,n,null),a.return=e,i.return=e,a.sibling=i,e.child=a,i=e.child,i.memoizedState=sh(n),i.childLanes=rh(t,s,n),e.memoizedState=oh,wc(null,i)):(Ho(e),$0(e,a))}var c=t.memoizedState;if(c!==null&&(a=c.dehydrated,a!==null)){if(o)e.flags&256?(Ho(e),e.flags&=-257,e=ah(t,e,n)):e.memoizedState!==null?(Yo(),e.child=t.child,e.flags|=128,e=null):(Yo(),a=i.fallback,l=e.mode,i=Mf({mode:"visible",children:i.children},l),a=Ks(a,l,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,rr(e,t.child,null,n),i=e.child,i.memoizedState=sh(n),i.childLanes=rh(t,s,n),e.memoizedState=oh,e=wc(null,i));else if(Ho(e),Z0(a)){if(s=a.nextSibling&&a.nextSibling.dataset,s)var u=s.dgst;s=u,i=Error(G(419)),i.stack="",i.digest=s,fu({value:i,source:null,stack:null}),e=ah(t,e,n)}else if(An||Ba(t,e,n,!1),s=(n&t.childLanes)!==0,An||s){if(s=Gt,s!==null&&(i=G5(s,n),i!==0&&i!==c.retryLane))throw c.retryLane=i,mr(t,i),Bi(s,t,i),bp;F0(a)||Rf(),e=ah(t,e,n)}else F0(a)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,en=Cl(a.nextSibling),ni=e,vt=!0,ns=null,bl=!1,t!==null&&S2(e,t),e=$0(e,i.children),e.flags|=4096);return e}return l?(Yo(),a=i.fallback,l=e.mode,c=t.child,u=c.sibling,i=yo(c,{mode:"hidden",children:i.children}),i.subtreeFlags=c.subtreeFlags&65011712,u!==null?a=yo(u,a):(a=Ks(a,l,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,wc(null,i),i=e.child,a=t.child.memoizedState,a===null?a=sh(n):(l=a.cachePool,l!==null?(c=On._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=C2(),a={baseLanes:a.baseLanes|n,cachePool:l}),i.memoizedState=a,i.childLanes=rh(t,s,n),e.memoizedState=oh,wc(t.child,i)):(Ho(e),n=t.child,t=n.sibling,n=yo(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function $0(t,e){return e=Mf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Mf(t,e){return t=Zi(22,t,null,e),t.lanes=0,t}function ah(t,e,n){return rr(e,t.child,null,n),t=$0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fy(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),C0(t.return,e,n)}function ch(t,e,n,i,l,o){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:o}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l,s.treeForkCount=o)}function yb(t,e,n){var i=e.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var s=vn.current,a=(s&2)!==0;if(a?(s=s&1|2,e.flags|=128):s&=1,Vt(vn,s),ei(t,e,i,n),i=vt?du:0,!a&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,n,e);else if(t.tag===19)Fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Sf(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),ch(e,!1,l,n,o,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Sf(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}ch(e,!0,n,null,o,i);break;case"together":ch(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function jo(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))if(t!==null){if(Ba(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,n=yo(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yo(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&bf(t)))}function F3(t,e,n){switch(e.tag){case 3:_f(e,e.stateNode.containerInfo),$o(e,On,t.memoizedState.cache),or();break;case 27:case 5:f0(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:$o(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,R0(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ho(e),e.flags|=128,null):n&e.child.childLanes?gb(t,e,n):(Ho(e),t=jo(t,e,n),t!==null?t.sibling:null);Ho(e);break;case 19:var l=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Ba(t,e,n,!1),i=(n&e.childLanes)!==0),l){if(i)return yb(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Vt(vn,vn.current),i)break;return null;case 22:return e.lanes=0,pb(t,e,n,e.pendingProps);case 24:$o(e,On,t.memoizedState.cache)}return jo(t,e,n)}function xb(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)An=!0;else{if(!vp(t,n)&&!(e.flags&128))return An=!1,F3(t,e,n);An=!!(t.flags&131072)}else An=!1,vt&&e.flags&1048576&&w2(e,du,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Hs(e.elementType),e.type=t,typeof t=="function")Jm(t)?(i=cr(t,i),e.tag=1,e=Vy(null,e,t,i,n)):(e.tag=0,e=B0(null,e,t,i,n));else{if(t!=null){var l=t.$$typeof;if(l===Hm){e.tag=11,e=Iy(null,e,t,i,n);break e}else if(l===Ym){e.tag=14,e=qy(null,e,t,i,n);break e}}throw e=u0(t)||t,Error(G(306,e,""))}}return e;case 0:return B0(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,l=cr(i,e.pendingProps),Vy(t,e,i,l,n);case 3:e:{if(_f(e,e.stateNode.containerInfo),t===null)throw Error(G(387));i=e.pendingProps;var o=e.memoizedState;l=o.element,T0(t,e),Ic(e,i,null,n);var s=e.memoizedState;if(i=s.cache,$o(e,On,i),i!==o.cache&&j0(e,[On],n,!0),Xc(),i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=Py(t,e,i,n);break e}else if(i!==l){l=xl(Error(G(424)),e),fu(l),e=Py(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Cl(t.firstChild),ni=e,vt=!0,ns=null,bl=!0,n=T2(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(or(),i===l){e=jo(t,e,n);break e}ei(t,e,i,n)}e=e.child}return e;case 26:return Vd(t,e),t===null?(n=p1(e.type,null,e.pendingProps,null))?e.memoizedState=n:vt||(n=e.type,t=e.pendingProps,i=Nf(ts.current).createElement(n),i[ti]=e,i[Hi]=t,si(i,n,t),Vn(i),e.stateNode=i):e.memoizedState=p1(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return f0(e),t===null&&vt&&(i=e.stateNode=cv(e.type,e.pendingProps,ts.current),ni=e,bl=!0,l=en,bs(e.type)?(K0=l,en=Cl(i.firstChild)):en=l),ei(t,e,e.pendingProps.children,n),Vd(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((l=i=en)&&(i=jS(i,e.type,e.pendingProps,bl),i!==null?(e.stateNode=i,ni=e,en=Cl(i.firstChild),bl=!1,l=!0):l=!1),l||ms(e)),f0(e),l=e.type,o=e.pendingProps,s=t!==null?t.memoizedProps:null,i=o.children,V0(l,o)?i=null:s!==null&&V0(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=ap(t,e,U3,null,null,n),yu._currentValue=l),Vd(t,e),ei(t,e,i,n),e.child;case 6:return t===null&&vt&&((t=n=en)&&(n=MS(n,e.pendingProps,bl),n!==null?(e.stateNode=n,ni=e,en=null,t=!0):t=!1),t||ms(e)),null;case 13:return gb(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=rr(e,null,i,n):ei(t,e,i,n),e.child;case 11:return Iy(t,e,e.type,e.pendingProps,n);case 7:return ei(t,e,e.pendingProps,n),e.child;case 8:return ei(t,e,e.pendingProps.children,n),e.child;case 12:return ei(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,$o(e,e.type,i.value),ei(t,e,i.children,n),e.child;case 9:return l=e.type._context,i=e.pendingProps.children,sr(e),l=li(l),i=i(l),e.flags|=1,ei(t,e,i,n),e.child;case 14:return qy(t,e,e.type,e.pendingProps,n);case 15:return mb(t,e,e.type,e.pendingProps,n);case 19:return yb(t,e,n);case 31:return P3(t,e,n);case 22:return pb(t,e,n,e.pendingProps);case 24:return sr(e),i=li(On),t===null?(l=ip(),l===null&&(l=Gt,o=np(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),e.memoizedState={parent:i,cache:l},op(e),$o(e,On,l)):(t.lanes&n&&(T0(t,e),Ic(e,null,null,n),Xc()),l=t.memoizedState,o=e.memoizedState,l.parent!==i?(l={parent:i,cache:i},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),$o(e,On,i)):(i=o.cache,$o(e,On,i),i!==l.cache&&j0(e,[On],n,!0))),ei(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(G(156,e.tag))}function io(t){t.flags|=4}function uh(t,e,n,i,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Ib())t.flags|=8192;else throw er=vf,lp}else t.flags&=-16777217}function Zy(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!fv(e))if(Ib())t.flags|=8192;else throw er=vf,lp}function fd(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?q5():536870912,t.lanes|=e,Ta|=e)}function ic(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Z3(t,e,n){var i=e.pendingProps;switch(tp(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Jt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),xo(On),wa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Er(e)?io(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,th())),Jt(e),null;case 26:var l=e.type,o=e.memoizedState;return t===null?(io(e),o!==null?(Jt(e),Zy(e,o)):(Jt(e),uh(e,l,null,i,n))):o?o!==t.memoizedState?(io(e),Jt(e),Zy(e,o)):(Jt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&io(e),Jt(e),uh(e,l,t,i,n)),null;case 27:if(hf(e),n=ts.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&io(e);else{if(!i){if(e.stateNode===null)throw Error(G(166));return Jt(e),null}t=Pl.current,Er(e)?jy(e):(t=cv(l,i,n),e.stateNode=t,io(e))}return Jt(e),null;case 5:if(hf(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&io(e);else{if(!i){if(e.stateNode===null)throw Error(G(166));return Jt(e),null}if(o=Pl.current,Er(e))jy(e);else{var s=Nf(ts.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?s.createElement(l,{is:i.is}):s.createElement(l)}}o[ti]=e,o[Hi]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=o;e:switch(si(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&io(e)}}return Jt(e),uh(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&io(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(G(166));if(t=ts.current,Er(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,l=ni,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}t[ti]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ov(t.nodeValue,n)),t||ms(e,!0)}else t=Nf(t).createTextNode(i),t[ti]=e,e.stateNode=t}return Jt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Er(e),n!==null){if(t===null){if(!i)throw Error(G(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(557));t[ti]=e}else or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),t=!1}else n=th(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Vi(e),e):(Vi(e),null);if(e.flags&128)throw Error(G(558))}return Jt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Er(e),i!==null&&i.dehydrated!==null){if(t===null){if(!l)throw Error(G(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(G(317));l[ti]=e}else or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),l=!1}else l=th(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Vi(e),e):(Vi(e),null)}return Vi(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),fd(e,e.updateQueue),Jt(e),null);case 4:return wa(),t===null&&Tp(e.stateNode.containerInfo),Jt(e),null;case 10:return xo(e.type),Jt(e),null;case 19:if(Pn(vn),i=e.memoizedState,i===null)return Jt(e),null;if(l=(e.flags&128)!==0,o=i.rendering,o===null)if(l)ic(i,!1);else{if(hn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sf(t),o!==null){for(e.flags|=128,ic(i,!1),t=o.updateQueue,e.updateQueue=t,fd(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)b2(n,t),n=n.sibling;return Vt(vn,vn.current&1|2),vt&&co(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&nl()>Ef&&(e.flags|=128,l=!0,ic(i,!1),e.lanes=4194304)}else{if(!l)if(t=Sf(o),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,fd(e,t),ic(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!vt)return Jt(e),null}else 2*nl()-i.renderingStartTime>Ef&&n!==536870912&&(e.flags|=128,l=!0,ic(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=nl(),t.sibling=null,n=vn.current,Vt(vn,l?n&1|2:n&1),vt&&co(e,i.treeForkCount),t):(Jt(e),null);case 22:case 23:return Vi(e),sp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),n=e.updateQueue,n!==null&&fd(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Pn(Js),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),xo(On),Jt(e),null;case 25:return null;case 30:return null}throw Error(G(156,e.tag))}function K3(t,e){switch(tp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(On),wa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return hf(e),null;case 31:if(e.memoizedState!==null){if(Vi(e),e.alternate===null)throw Error(G(340));or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Vi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pn(vn),null;case 4:return wa(),null;case 10:return xo(e.type),null;case 22:case 23:return Vi(e),sp(),t!==null&&Pn(Js),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return xo(On),null;case 25:return null;default:return null}}function bb(t,e){switch(tp(e),e.tag){case 3:xo(On),wa();break;case 26:case 27:case 5:hf(e);break;case 4:wa();break;case 31:e.memoizedState!==null&&Vi(e);break;case 13:Vi(e);break;case 19:Pn(vn);break;case 10:xo(e.type);break;case 22:case 23:Vi(e),sp(),t!==null&&Pn(Js);break;case 24:xo(On)}}function Ru(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&t)===t){i=void 0;var o=n.create,s=n.inst;i=o(),s.destroy=i}n=n.next}while(n!==l)}}catch(a){Nt(e,e.return,a)}}function ps(t,e,n){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&t)===t){var s=i.inst,a=s.destroy;if(a!==void 0){s.destroy=void 0,l=e;var c=n,u=a;try{u()}catch(d){Nt(l,c,d)}}}i=i.next}while(i!==o)}}catch(d){Nt(e,e.return,d)}}function vb(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{D2(e,n)}catch(i){Nt(t,t.return,i)}}}function wb(t,e,n){n.props=cr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Nt(t,e,i)}}function Wc(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(l){Nt(t,e,l)}}function Gl(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Nt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Nt(t,e,l)}else n.current=null}function Sb(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Nt(t,t.return,l)}}function dh(t,e,n){try{var i=t.stateNode;bS(i,t.type,n,e),i[Hi]=e}catch(l){Nt(t,t.return,l)}}function kb(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bs(t.type)||t.tag===4}function fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function H0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mo));else if(i!==4&&(i===27&&bs(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(H0(t,e,n),t=t.sibling;t!==null;)H0(t,e,n),t=t.sibling}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&bs(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}function Cb(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);si(e,i,n),e[ti]=t,e[Hi]=n}catch(o){Nt(t,t.return,o)}}var fo=!1,zn=!1,_h=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function J3(t,e){if(t=t.containerInfo,Q0=Hf,t=f2(t),Fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||l!==0&&h.nodeType!==3||(a=s+l),h!==o||i!==0&&h.nodeType!==3||(c=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++u===l&&(a=s),f===o&&++d===i&&(c=s),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(G0={focusedElem:t,selectionRange:n},Hf=!1,Gn=e;Gn!==null;)if(e=Gn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Gn=t;else for(;Gn!==null;){switch(e=Gn,o=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)l=t[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&o!==null){t=void 0,n=e,l=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var m=cr(n.type,l);t=i.getSnapshotBeforeUpdate(m,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(p){Nt(n,n.return,p)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)P0(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":P0(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(G(163))}if(t=e.sibling,t!==null){t.return=e.return,Gn=t;break}Gn=e.return}}function jb(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:oo(t,n),i&4&&Ru(5,n);break;case 1:if(oo(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Nt(n,n.return,s)}else{var l=cr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Nt(n,n.return,s)}}i&64&&vb(n),i&512&&Wc(n,n.return);break;case 3:if(oo(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{D2(t,e)}catch(s){Nt(n,n.return,s)}}break;case 27:e===null&&i&4&&Cb(n);case 26:case 5:oo(t,n),e===null&&i&4&&Sb(n),i&512&&Wc(n,n.return);break;case 12:oo(t,n);break;case 31:oo(t,n),i&4&&Eb(t,n);break;case 13:oo(t,n),i&4&&Db(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=aS.bind(null,n),TS(t,n))));break;case 22:if(i=n.memoizedState!==null||fo,!i){e=e!==null&&e.memoizedState!==null||zn,l=fo;var o=zn;fo=i,(zn=e)&&!o?so(t,n,(n.subtreeFlags&8772)!==0):oo(t,n),fo=l,zn=o}break;case 30:break;default:oo(t,n)}}function Mb(t){var e=t.alternate;e!==null&&(t.alternate=null,Mb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&qm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,Ei=!1;function lo(t,e,n){for(n=n.child;n!==null;)Tb(t,e,n),n=n.sibling}function Tb(t,e,n){if(il&&typeof il.onCommitFiberUnmount=="function")try{il.onCommitFiberUnmount(ku,n)}catch{}switch(n.tag){case 26:zn||Gl(n,e),lo(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zn||Gl(n,e);var i=sn,l=Ei;bs(n.type)&&(sn=n.stateNode,Ei=!1),lo(t,e,n),Pc(n.stateNode),sn=i,Ei=l;break;case 5:zn||Gl(n,e);case 6:if(i=sn,l=Ei,sn=null,lo(t,e,n),sn=i,Ei=l,sn!==null)if(Ei)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(n.stateNode)}catch(o){Nt(n,e,o)}else try{sn.removeChild(n.stateNode)}catch(o){Nt(n,e,o)}break;case 18:sn!==null&&(Ei?(t=sn,d1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),za(t)):d1(sn,n.stateNode));break;case 4:i=sn,l=Ei,sn=n.stateNode.containerInfo,Ei=!0,lo(t,e,n),sn=i,Ei=l;break;case 0:case 11:case 14:case 15:ps(2,n,e),zn||ps(4,n,e),lo(t,e,n);break;case 1:zn||(Gl(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&wb(n,e,i)),lo(t,e,n);break;case 21:lo(t,e,n);break;case 22:zn=(i=zn)||n.memoizedState!==null,lo(t,e,n),zn=i;break;default:lo(t,e,n)}}function Eb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{za(t)}catch(n){Nt(e,e.return,n)}}}function Db(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{za(t)}catch(n){Nt(e,e.return,n)}}function eS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ky),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ky),e;default:throw Error(G(435,t.tag))}}function _d(t,e){var n=eS(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var l=cS.bind(null,t,i);i.then(l,l)}})}function Mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 27:if(bs(a.type)){sn=a.stateNode,Ei=!1;break e}break;case 5:sn=a.stateNode,Ei=!1;break e;case 3:case 4:sn=a.stateNode.containerInfo,Ei=!0;break e}a=a.return}if(sn===null)throw Error(G(160));Tb(o,s,l),sn=null,Ei=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Rb(e,t),e=e.sibling}var zl=null;function Rb(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mi(e,t),Ti(t),i&4&&(ps(3,t,t.return),Ru(3,t),ps(5,t,t.return));break;case 1:Mi(e,t),Ti(t),i&512&&(zn||n===null||Gl(n,n.return)),i&64&&fo&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=zl;if(Mi(e,t),Ti(t),i&512&&(zn||n===null||Gl(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Mu]||o[ti]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),si(o,i,n),o[ti]=t,Vn(o),i=o;break e;case"link":var s=y1("link","href",l).get(i+(n.href||""));if(s){for(var a=0;a<s.length;a++)if(o=s[a],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(a,1);break t}}o=l.createElement(i),si(o,i,n),l.head.appendChild(o);break;case"meta":if(s=y1("meta","content",l).get(i+(n.content||""))){for(a=0;a<s.length;a++)if(o=s[a],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(a,1);break t}}o=l.createElement(i),si(o,i,n),l.head.appendChild(o);break;default:throw Error(G(468,i))}o[ti]=t,Vn(o),i=o}t.stateNode=i}else x1(l,t.type,t.stateNode);else t.stateNode=g1(l,i,t.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?x1(l,t.type,t.stateNode):g1(l,i,t.memoizedProps)):i===null&&t.stateNode!==null&&dh(t,t.memoizedProps,n.memoizedProps)}break;case 27:Mi(e,t),Ti(t),i&512&&(zn||n===null||Gl(n,n.return)),n!==null&&i&4&&dh(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Mi(e,t),Ti(t),i&512&&(zn||n===null||Gl(n,n.return)),t.flags&32){l=t.stateNode;try{ka(l,"")}catch(m){Nt(t,t.return,m)}}i&4&&t.stateNode!=null&&(l=t.memoizedProps,dh(t,l,n!==null?n.memoizedProps:l)),i&1024&&(_h=!0);break;case 6:if(Mi(e,t),Ti(t),i&4){if(t.stateNode===null)throw Error(G(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(m){Nt(t,t.return,m)}}break;case 3:if(Zd=null,l=zl,zl=Lf(e.containerInfo),Mi(e,t),zl=l,Ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(m){Nt(t,t.return,m)}_h&&(_h=!1,zb(t));break;case 4:i=zl,zl=Lf(t.stateNode.containerInfo),Mi(e,t),Ti(t),zl=i;break;case 12:Mi(e,t),Ti(t);break;case 31:Mi(e,t),Ti(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,_d(t,i)));break;case 13:Mi(e,t),Ti(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(r_=nl()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,_d(t,i)));break;case 22:l=t.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,u=fo,d=zn;if(fo=u||l,zn=d||c,Mi(e,t),zn=d,fo=u,Ti(t),i&8192)e:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||c||fo||zn||Ys(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){c=n=e;try{if(o=c.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{a=c.stateNode;var h=c.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;a.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(m){Nt(c,c.return,m)}}}else if(e.tag===6){if(n===null){c=e;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(m){Nt(c,c.return,m)}}}else if(e.tag===18){if(n===null){c=e;try{var _=c.stateNode;l?f1(_,!0):f1(c.stateNode,!1)}catch(m){Nt(c,c.return,m)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,_d(t,n))));break;case 19:Mi(e,t),Ti(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,_d(t,i)));break;case 30:break;case 21:break;default:Mi(e,t),Ti(t)}}function Ti(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(kb(i)){n=i;break}i=i.return}if(n==null)throw Error(G(160));switch(n.tag){case 27:var l=n.stateNode,o=fh(t);Tf(t,o,l);break;case 5:var s=n.stateNode;n.flags&32&&(ka(s,""),n.flags&=-33);var a=fh(t);Tf(t,a,s);break;case 3:case 4:var c=n.stateNode.containerInfo,u=fh(t);H0(t,u,c);break;default:throw Error(G(161))}}catch(d){Nt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zb(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;zb(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function oo(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jb(t,e.alternate,e),e=e.sibling}function Ys(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ps(4,e,e.return),Ys(e);break;case 1:Gl(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&wb(e,e.return,n),Ys(e);break;case 27:Pc(e.stateNode);case 26:case 5:Gl(e,e.return),Ys(e);break;case 22:e.memoizedState===null&&Ys(e);break;case 30:Ys(e);break;default:Ys(e)}t=t.sibling}}function so(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,l=t,o=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:so(l,o,n),Ru(4,o);break;case 1:if(so(l,o,n),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(u){Nt(i,i.return,u)}if(i=o,l=i.updateQueue,l!==null){var a=i.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)E2(c[l],a)}catch(u){Nt(i,i.return,u)}}n&&s&64&&vb(o),Wc(o,o.return);break;case 27:Cb(o);case 26:case 5:so(l,o,n),n&&i===null&&s&4&&Sb(o),Wc(o,o.return);break;case 12:so(l,o,n);break;case 31:so(l,o,n),n&&s&4&&Eb(l,o);break;case 13:so(l,o,n),n&&s&4&&Db(l,o);break;case 22:o.memoizedState===null&&so(l,o,n),Wc(o,o.return);break;case 30:break;default:so(l,o,n)}e=e.sibling}}function wp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Eu(n))}function Sp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Eu(t))}function El(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ob(t,e,n,i),e=e.sibling}function Ob(t,e,n,i){var l=e.flags;switch(e.tag){case 0:case 11:case 15:El(t,e,n,i),l&2048&&Ru(9,e);break;case 1:El(t,e,n,i);break;case 3:El(t,e,n,i),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Eu(t)));break;case 12:if(l&2048){El(t,e,n,i),t=e.stateNode;try{var o=e.memoizedProps,s=o.id,a=o.onPostCommit;typeof a=="function"&&a(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){Nt(e,e.return,c)}}else El(t,e,n,i);break;case 31:El(t,e,n,i);break;case 13:El(t,e,n,i);break;case 23:break;case 22:o=e.stateNode,s=e.alternate,e.memoizedState!==null?o._visibility&2?El(t,e,n,i):Qc(t,e):o._visibility&2?El(t,e,n,i):(o._visibility|=2,Br(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),l&2048&&wp(s,e);break;case 24:El(t,e,n,i),l&2048&&Sp(e.alternate,e);break;default:El(t,e,n,i)}}function Br(t,e,n,i,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var o=t,s=e,a=n,c=i,u=s.flags;switch(s.tag){case 0:case 11:case 15:Br(o,s,a,c,l),Ru(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Br(o,s,a,c,l):Qc(o,s):(d._visibility|=2,Br(o,s,a,c,l)),l&&u&2048&&wp(s.alternate,s);break;case 24:Br(o,s,a,c,l),l&&u&2048&&Sp(s.alternate,s);break;default:Br(o,s,a,c,l)}e=e.sibling}}function Qc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,l=i.flags;switch(i.tag){case 22:Qc(n,i),l&2048&&wp(i.alternate,i);break;case 24:Qc(n,i),l&2048&&Sp(i.alternate,i);break;default:Qc(n,i)}e=e.sibling}}var Sc=8192;function Dr(t,e,n){if(t.subtreeFlags&Sc)for(t=t.child;t!==null;)Ab(t,e,n),t=t.sibling}function Ab(t,e,n){switch(t.tag){case 26:Dr(t,e,n),t.flags&Sc&&t.memoizedState!==null&&YS(n,zl,t.memoizedState,t.memoizedProps);break;case 5:Dr(t,e,n);break;case 3:case 4:var i=zl;zl=Lf(t.stateNode.containerInfo),Dr(t,e,n),zl=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Sc,Sc=16777216,Dr(t,e,n),Sc=i):Dr(t,e,n));break;default:Dr(t,e,n)}}function Nb(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function lc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Gn=i,Bb(i,t)}Nb(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lb(t),t=t.sibling}function Lb(t){switch(t.tag){case 0:case 11:case 15:lc(t),t.flags&2048&&ps(9,t,t.return);break;case 3:lc(t);break;case 12:lc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Pd(t)):lc(t);break;default:lc(t)}}function Pd(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Gn=i,Bb(i,t)}Nb(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ps(8,e,e.return),Pd(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Pd(e));break;default:Pd(e)}t=t.sibling}}function Bb(t,e){for(;Gn!==null;){var n=Gn;switch(n.tag){case 0:case 11:case 15:ps(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Eu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Gn=i;else e:for(n=t;Gn!==null;){i=Gn;var l=i.sibling,o=i.return;if(Mb(i),i===n){Gn=null;break e}if(l!==null){l.return=o,Gn=l;break e}Gn=o}}}var tS={getCacheForType:function(t){var e=li(On),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return li(On).controller.signal}},nS=typeof WeakMap=="function"?WeakMap:Map,Et=0,Gt=null,pt=null,yt=0,At=0,Wi=null,Po=!1,Ha=!1,kp=!1,Mo=0,hn=0,gs=0,tr=0,Cp=0,el=0,Ta=0,Gc=null,Ri=null,Y0=!1,r_=0,$b=0,Ef=1/0,Df=null,os=null,Un=0,ss=null,Ea=null,bo=0,U0=0,X0=null,Hb=null,Vc=0,I0=null;function ol(){return Et&2&&yt!==0?yt&-yt:Ie.T!==null?Mp():V5()}function Yb(){if(el===0)if(!(yt&536870912)||vt){var t=od;od<<=1,!(od&3932160)&&(od=262144),el=t}else el=536870912;return t=cl.current,t!==null&&(t.flags|=32),el}function Bi(t,e,n){(t===Gt&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(Da(t,0),Fo(t,yt,el,!1)),ju(t,n),(!(Et&2)||t!==Gt)&&(t===Gt&&(!(Et&2)&&(tr|=n),hn===4&&Fo(t,yt,el,!1)),Kl(t))}function Ub(t,e,n){if(Et&6)throw Error(G(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Cu(t,e),l=i?oS(t,e):hh(t,e,!0),o=i;do{if(l===0){Ha&&!i&&Fo(t,e,0,!1);break}else{if(n=t.current.alternate,o&&!iS(n)){l=hh(t,e,!1),o=!1;continue}if(l===2){if(o=e,t.errorRecoveryDisabledLanes&o)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var a=t;l=Gc;var c=a.current.memoizedState.isDehydrated;if(c&&(Da(a,s).flags|=256),s=hh(a,s,!1),s!==2){if(kp&&!c){a.errorRecoveryDisabledLanes|=o,tr|=o,l=4;break e}o=Ri,Ri=l,o!==null&&(Ri===null?Ri=o:Ri.push.apply(Ri,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){Da(t,0),Fo(t,e,0,!0);break}e:{switch(i=t,o=l,o){case 0:case 1:throw Error(G(345));case 4:if((e&4194048)!==e)break;case 6:Fo(i,e,el,!Po);break e;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(G(329))}if((e&62914560)===e&&(l=r_+300-nl(),10<l)){if(Fo(i,e,el,!Po),Ff(i,0,!0)!==0)break e;bo=e,i.timeoutHandle=rv(Jy.bind(null,i,n,Ri,Df,Y0,e,el,tr,Ta,Po,o,"Throttled",-0,0),l);break e}Jy(i,n,Ri,Df,Y0,e,el,tr,Ta,Po,o,null,-0,0)}}break}while(!0);Kl(t)}function Jy(t,e,n,i,l,o,s,a,c,u,d,h,f,_){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mo},Ab(e,o,h);var m=(o&62914560)===o?r_-nl():(o&4194048)===o?$b-nl():0;if(m=US(h,m),m!==null){bo=o,t.cancelPendingCommit=m(t1.bind(null,t,e,o,n,i,l,s,a,c,d,h,null,f,_)),Fo(t,o,s,!u);return}}t1(t,e,o,n,i,l,s,a,c)}function iS(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!al(o(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fo(t,e,n,i){e&=~Cp,e&=~tr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var l=e;0<l;){var o=31-ll(l),s=1<<o;i[o]=-1,l&=~s}n!==0&&W5(t,n,e)}function a_(){return Et&6?!0:(zu(0),!1)}function jp(){if(pt!==null){if(At===0)var t=pt.return;else t=pt,po=pr=null,dp(t),fa=null,_u=0,t=pt;for(;t!==null;)bb(t.alternate,t),t=t.return;pt=null}}function Da(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,SS(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),bo=0,jp(),Gt=t,pt=n=yo(t.current,null),yt=e,At=0,Wi=null,Po=!1,Ha=Cu(t,e),kp=!1,Ta=el=Cp=tr=gs=hn=0,Ri=Gc=null,Y0=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var l=31-ll(i),o=1<<l;e|=t[l],i&=~o}return Mo=e,e_(),n}function Xb(t,e){lt=null,Ie.H=mu,e===$a||e===n_?(e=Ry(),At=3):e===lp?(e=Ry(),At=4):At=e===bp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Wi=e,pt===null&&(hn=1,jf(t,xl(e,t.current)))}function Ib(){var t=cl.current;return t===null?!0:(yt&4194048)===yt?kl===null:(yt&62914560)===yt||yt&536870912?t===kl:!1}function qb(){var t=Ie.H;return Ie.H=mu,t===null?mu:t}function Wb(){var t=Ie.A;return Ie.A=tS,t}function Rf(){hn=4,Po||(yt&4194048)!==yt&&cl.current!==null||(Ha=!0),!(gs&134217727)&&!(tr&134217727)||Gt===null||Fo(Gt,yt,el,!1)}function hh(t,e,n){var i=Et;Et|=2;var l=qb(),o=Wb();(Gt!==t||yt!==e)&&(Df=null,Da(t,e)),e=!1;var s=hn;e:do try{if(At!==0&&pt!==null){var a=pt,c=Wi;switch(At){case 8:jp(),s=6;break e;case 3:case 2:case 9:case 6:cl.current===null&&(e=!0);var u=At;if(At=0,Wi=null,Jr(t,a,c,u),n&&Ha){s=0;break e}break;default:u=At,At=0,Wi=null,Jr(t,a,c,u)}}lS(),s=hn;break}catch(d){Xb(t,d)}while(!0);return e&&t.shellSuspendCounter++,po=pr=null,Et=i,Ie.H=l,Ie.A=o,pt===null&&(Gt=null,yt=0,e_()),s}function lS(){for(;pt!==null;)Qb(pt)}function oS(t,e){var n=Et;Et|=2;var i=qb(),l=Wb();Gt!==t||yt!==e?(Df=null,Ef=nl()+500,Da(t,e)):Ha=Cu(t,e);e:do try{if(At!==0&&pt!==null){e=pt;var o=Wi;t:switch(At){case 1:At=0,Wi=null,Jr(t,e,o,1);break;case 2:case 9:if(Dy(o)){At=0,Wi=null,e1(e);break}e=function(){At!==2&&At!==9||Gt!==t||(At=7),Kl(t)},o.then(e,e);break e;case 3:At=7;break e;case 4:At=5;break e;case 7:Dy(o)?(At=0,Wi=null,e1(e)):(At=0,Wi=null,Jr(t,e,o,7));break;case 5:var s=null;switch(pt.tag){case 26:s=pt.memoizedState;case 5:case 27:var a=pt;if(s?fv(s):a.stateNode.complete){At=0,Wi=null;var c=a.sibling;if(c!==null)pt=c;else{var u=a.return;u!==null?(pt=u,c_(u)):pt=null}break t}}At=0,Wi=null,Jr(t,e,o,5);break;case 6:At=0,Wi=null,Jr(t,e,o,6);break;case 8:jp(),hn=6;break e;default:throw Error(G(462))}}sS();break}catch(d){Xb(t,d)}while(!0);return po=pr=null,Ie.H=i,Ie.A=l,Et=n,pt!==null?0:(Gt=null,yt=0,e_(),hn)}function sS(){for(;pt!==null&&!E6();)Qb(pt)}function Qb(t){var e=xb(t.alternate,t,Mo);t.memoizedProps=t.pendingProps,e===null?c_(t):pt=e}function e1(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Gy(n,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Gy(n,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:dp(e);default:bb(n,e),e=pt=b2(e,Mo),e=xb(n,e,Mo)}t.memoizedProps=t.pendingProps,e===null?c_(t):pt=e}function Jr(t,e,n,i){po=pr=null,dp(e),fa=null,_u=0;var l=e.return;try{if(V3(t,l,e,n,yt)){hn=1,jf(t,xl(n,t.current)),pt=null;return}}catch(o){if(l!==null)throw pt=l,o;hn=1,jf(t,xl(n,t.current)),pt=null;return}e.flags&32768?(vt||i===1?t=!0:Ha||yt&536870912?t=!1:(Po=t=!0,(i===2||i===9||i===3||i===6)&&(i=cl.current,i!==null&&i.tag===13&&(i.flags|=16384))),Gb(e,t)):c_(e)}function c_(t){var e=t;do{if(e.flags&32768){Gb(e,Po);return}t=e.return;var n=Z3(e.alternate,e,Mo);if(n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);hn===0&&(hn=5)}function Gb(t,e){do{var n=K3(t.alternate,t);if(n!==null){n.flags&=32767,pt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=n}while(t!==null);hn=6,pt=null}function t1(t,e,n,i,l,o,s,a,c){t.cancelPendingCommit=null;do u_();while(Un!==0);if(Et&6)throw Error(G(327));if(e!==null){if(e===t.current)throw Error(G(177));if(o=e.lanes|e.childLanes,o|=Zm,H6(t,n,o,s,a,c),t===Gt&&(pt=Gt=null,yt=0),Ea=e,ss=t,bo=n,U0=o,X0=l,Hb=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,uS(mf,function(){return Kb(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ie.T,Ie.T=null,l=Dt.p,Dt.p=2,s=Et,Et|=4;try{J3(t,e,n)}finally{Et=s,Dt.p=l,Ie.T=i}}Un=1,Vb(),Pb(),Fb()}}function Vb(){if(Un===1){Un=0;var t=ss,e=Ea,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ie.T,Ie.T=null;var i=Dt.p;Dt.p=2;var l=Et;Et|=4;try{Rb(e,t);var o=G0,s=f2(t.containerInfo),a=o.focusedElem,c=o.selectionRange;if(s!==a&&a&&a.ownerDocument&&d2(a.ownerDocument.documentElement,a)){if(c!==null&&Fm(a)){var u=c.start,d=c.end;if(d===void 0&&(d=u),"selectionStart"in a)a.selectionStart=u,a.selectionEnd=Math.min(d,a.value.length);else{var h=a.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var _=f.getSelection(),m=a.textContent.length,p=Math.min(c.start,m),C=c.end===void 0?p:Math.min(c.end,m);!_.extend&&p>C&&(s=C,C=p,p=s);var g=Sy(a,p),y=Sy(a,C);if(g&&y&&(_.rangeCount!==1||_.anchorNode!==g.node||_.anchorOffset!==g.offset||_.focusNode!==y.node||_.focusOffset!==y.offset)){var b=h.createRange();b.setStart(g.node,g.offset),_.removeAllRanges(),p>C?(_.addRange(b),_.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),_.addRange(b))}}}}for(h=[],_=a;_=_.parentNode;)_.nodeType===1&&h.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<h.length;a++){var x=h[a];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Hf=!!Q0,G0=Q0=null}finally{Et=l,Dt.p=i,Ie.T=n}}t.current=e,Un=2}}function Pb(){if(Un===2){Un=0;var t=ss,e=Ea,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ie.T,Ie.T=null;var i=Dt.p;Dt.p=2;var l=Et;Et|=4;try{jb(t,e.alternate,e)}finally{Et=l,Dt.p=i,Ie.T=n}}Un=3}}function Fb(){if(Un===4||Un===3){Un=0,D6();var t=ss,e=Ea,n=bo,i=Hb;e.subtreeFlags&10256||e.flags&10256?Un=5:(Un=0,Ea=ss=null,Zb(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(os=null),Im(n),e=e.stateNode,il&&typeof il.onCommitFiberRoot=="function")try{il.onCommitFiberRoot(ku,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ie.T,l=Dt.p,Dt.p=2,Ie.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var a=i[s];o(a.value,{componentStack:a.stack})}}finally{Ie.T=e,Dt.p=l}}bo&3&&u_(),Kl(t),l=t.pendingLanes,n&261930&&l&42?t===I0?Vc++:(Vc=0,I0=t):Vc=0,zu(0)}}function Zb(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Eu(e)))}function u_(){return Vb(),Pb(),Fb(),Kb()}function Kb(){if(Un!==5)return!1;var t=ss,e=U0;U0=0;var n=Im(bo),i=Ie.T,l=Dt.p;try{Dt.p=32>n?32:n,Ie.T=null,n=X0,X0=null;var o=ss,s=bo;if(Un=0,Ea=ss=null,bo=0,Et&6)throw Error(G(331));var a=Et;if(Et|=4,Lb(o.current),Ob(o,o.current,s,n),Et=a,zu(0,!1),il&&typeof il.onPostCommitFiberRoot=="function")try{il.onPostCommitFiberRoot(ku,o)}catch{}return!0}finally{Dt.p=l,Ie.T=i,Zb(t,e)}}function n1(t,e,n){e=xl(n,e),e=L0(t.stateNode,e,2),t=ls(t,e,2),t!==null&&(ju(t,2),Kl(t))}function Nt(t,e,n){if(t.tag===3)n1(t,t,n);else for(;e!==null;){if(e.tag===3){n1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(os===null||!os.has(i))){t=xl(n,t),n=_b(2),i=ls(e,n,2),i!==null&&(hb(n,i,e,t),ju(i,2),Kl(i));break}}e=e.return}}function mh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nS;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(n)||(kp=!0,l.add(n),t=rS.bind(null,t,e,n),e.then(t,t))}function rS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Gt===t&&(yt&n)===n&&(hn===4||hn===3&&(yt&62914560)===yt&&300>nl()-r_?!(Et&2)&&Da(t,0):Cp|=n,Ta===yt&&(Ta=0)),Kl(t)}function Jb(t,e){e===0&&(e=q5()),t=mr(t,e),t!==null&&(ju(t,e),Kl(t))}function aS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jb(t,n)}function cS(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(G(314))}i!==null&&i.delete(e),Jb(t,n)}function uS(t,e){return Um(t,e)}var zf=null,$r=null,q0=!1,Of=!1,ph=!1,Zo=0;function Kl(t){t!==$r&&t.next===null&&($r===null?zf=$r=t:$r=$r.next=t),Of=!0,q0||(q0=!0,fS())}function zu(t,e){if(!ph&&Of){ph=!0;do for(var n=!1,i=zf;i!==null;){if(t!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var s=i.suspendedLanes,a=i.pingedLanes;o=(1<<31-ll(42|t)+1)-1,o&=l&~(s&~a),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,i1(i,o))}else o=yt,o=Ff(i,i===Gt?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(o&3)||Cu(i,o)||(n=!0,i1(i,o));i=i.next}while(n);ph=!1}}function dS(){ev()}function ev(){Of=q0=!1;var t=0;Zo!==0&&wS()&&(t=Zo);for(var e=nl(),n=null,i=zf;i!==null;){var l=i.next,o=tv(i,e);o===0?(i.next=null,n===null?zf=l:n.next=l,l===null&&($r=n)):(n=i,(t!==0||o&3)&&(Of=!0)),i=l}Un!==0&&Un!==5||zu(t),Zo!==0&&(Zo=0)}function tv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var s=31-ll(o),a=1<<s,c=l[s];c===-1?(!(a&n)||a&i)&&(l[s]=$6(a,e)):c<=e&&(t.expiredLanes|=a),o&=~a}if(e=Gt,n=yt,n=Ff(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&q_(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Cu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&q_(i),Im(n)){case 2:case 8:n=X5;break;case 32:n=mf;break;case 268435456:n=I5;break;default:n=mf}return i=nv.bind(null,t),n=Um(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&q_(i),t.callbackPriority=2,t.callbackNode=null,2}function nv(t,e){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(u_()&&t.callbackNode!==n)return null;var i=yt;return i=Ff(t,t===Gt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Ub(t,i,e),tv(t,nl()),t.callbackNode!=null&&t.callbackNode===n?nv.bind(null,t):null)}function i1(t,e){if(u_())return null;Ub(t,e,!0)}function fS(){kS(function(){Et&6?Um(U5,dS):ev()})}function Mp(){if(Zo===0){var t=Ca;t===0&&(t=ld,ld<<=1,!(ld&261888)&&(ld=256)),Zo=t}return Zo}function l1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yd(""+t)}function o1(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function _S(t,e,n,i,l){if(e==="submit"&&n&&n.stateNode===l){var o=l1((l[Hi]||null).action),s=i.submitter;s&&(e=(e=s[Hi]||null)?l1(e.formAction):s.getAttribute("formAction"),e!==null&&(o=e,s=null));var a=new Zf("action","action",null,i,l);t.push({event:a,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Zo!==0){var c=s?o1(l,s):new FormData(l);A0(n,{pending:!0,data:c,method:l.method,action:o},null,c)}}else typeof o=="function"&&(a.preventDefault(),c=s?o1(l,s):new FormData(l),A0(n,{pending:!0,data:c,method:l.method,action:o},o,c))},currentTarget:l}]})}}for(var gh=0;gh<w0.length;gh++){var yh=w0[gh],hS=yh.toLowerCase(),mS=yh[0].toUpperCase()+yh.slice(1);Ol(hS,"on"+mS)}Ol(h2,"onAnimationEnd");Ol(m2,"onAnimationIteration");Ol(p2,"onAnimationStart");Ol("dblclick","onDoubleClick");Ol("focusin","onFocus");Ol("focusout","onBlur");Ol(R3,"onTransitionRun");Ol(z3,"onTransitionStart");Ol(O3,"onTransitionCancel");Ol(g2,"onTransitionEnd");Sa("onMouseEnter",["mouseout","mouseover"]);Sa("onMouseLeave",["mouseout","mouseover"]);Sa("onPointerEnter",["pointerout","pointerover"]);Sa("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pu));function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],l=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&l.isPropagationStopped())break e;o=a,l.currentTarget=u;try{o(l)}catch(d){gf(d)}l.currentTarget=null,o=c}else for(s=0;s<i.length;s++){if(a=i[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&l.isPropagationStopped())break e;o=a,l.currentTarget=u;try{o(l)}catch(d){gf(d)}l.currentTarget=null,o=c}}}}function ht(t,e){var n=e[h0];n===void 0&&(n=e[h0]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function xh(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var hd="_reactListening"+Math.random().toString(36).slice(2);function Tp(t){if(!t[hd]){t[hd]=!0,P5.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||xh(n,!1,t),xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hd]||(e[hd]=!0,xh("selectionchange",!1,e))}}function lv(t,e,n,i){switch(gv(e)){case 2:var l=qS;break;case 8:l=WS;break;default:l=zp}n=l.bind(null,e,n,t),l=void 0,!x0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function bh(t,e,n,i,l){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===l)break;if(s===4)for(s=i.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;a!==null;){if(s=qr(a),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){i=o=s;continue e}a=a.parentNode}}i=i.return}i2(function(){var u=o,d=Qm(n),h=[];e:{var f=y2.get(t);if(f!==void 0){var _=Zf,m=t;switch(t){case"keypress":if(Xd(n)===0)break e;case"keydown":case"keyup":_=c3;break;case"focusin":m="focus",_=P_;break;case"focusout":m="blur",_=P_;break;case"beforeblur":case"afterblur":_=P_;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=_y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Z6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=f3;break;case h2:case m2:case p2:_=e3;break;case g2:_=h3;break;case"scroll":case"scrollend":_=P6;break;case"wheel":_=p3;break;case"copy":case"cut":case"paste":_=n3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=my;break;case"toggle":case"beforetoggle":_=y3}var p=(e&4)!==0,C=!p&&(t==="scroll"||t==="scrollend"),g=p?f!==null?f+"Capture":null:f;p=[];for(var y=u,b;y!==null;){var x=y;if(b=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||b===null||g===null||(x=au(y,g),x!=null&&p.push(gu(y,x,b))),C)break;y=y.return}0<p.length&&(f=new _(f,m,null,n,d),h.push({event:f,listeners:p}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==y0&&(m=n.relatedTarget||n.fromElement)&&(qr(m)||m[Na]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(m=n.relatedTarget||n.toElement,_=u,m=m?qr(m):null,m!==null&&(C=Su(m),p=m.tag,m!==C||p!==5&&p!==27&&p!==6)&&(m=null)):(_=null,m=u),_!==m)){if(p=_y,x="onMouseLeave",g="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(p=my,x="onPointerLeave",g="onPointerEnter",y="pointer"),C=_==null?f:vc(_),b=m==null?f:vc(m),f=new p(x,y+"leave",_,n,d),f.target=C,f.relatedTarget=b,x=null,qr(d)===u&&(p=new p(g,y+"enter",m,n,d),p.target=b,p.relatedTarget=C,x=p),C=x,_&&m)t:{for(p=gS,g=_,y=m,b=0,x=g;x;x=p(x))b++;x=0;for(var M=y;M;M=p(M))x++;for(;0<b-x;)g=p(g),b--;for(;0<x-b;)y=p(y),x--;for(;b--;){if(g===y||y!==null&&g===y.alternate){p=g;break t}g=p(g),y=p(y)}p=null}else p=null;_!==null&&s1(h,f,_,p,!1),m!==null&&C!==null&&s1(h,C,m,p,!0)}}e:{if(f=u?vc(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var R=xy;else if(yy(f))if(c2)R=T3;else{R=j3;var k=C3}else _=f.nodeName,!_||_.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Wm(u.elementType)&&(R=xy):R=M3;if(R&&(R=R(t,u))){a2(h,R,n,d);break e}k&&k(t,f,u),t==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&g0(f,"number",f.value)}switch(k=u?vc(u):window,t){case"focusin":(yy(k)||k.contentEditable==="true")&&(Gr=k,b0=u,Hc=null);break;case"focusout":Hc=b0=Gr=null;break;case"mousedown":v0=!0;break;case"contextmenu":case"mouseup":case"dragend":v0=!1,ky(h,n,d);break;case"selectionchange":if(D3)break;case"keydown":case"keyup":ky(h,n,d)}var N;if(Pm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Qr?s2(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(o2&&n.locale!=="ko"&&(Qr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Qr&&(N=l2()):(Vo=d,Gm="value"in Vo?Vo.value:Vo.textContent,Qr=!0)),k=Af(u,L),0<k.length&&(L=new hy(L,t,null,n,d),h.push({event:L,listeners:k}),N?L.data=N:(N=r2(n),N!==null&&(L.data=N)))),(N=b3?v3(t,n):w3(t,n))&&(L=Af(u,"onBeforeInput"),0<L.length&&(k=new hy("onBeforeInput","beforeinput",null,n,d),h.push({event:k,listeners:L}),k.data=N)),_S(h,t,u,n,d)}iv(h,e)})}function gu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Af(t,e){for(var n=e+"Capture",i=[];t!==null;){var l=t,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=au(t,n),l!=null&&i.unshift(gu(t,l,o)),l=au(t,e),l!=null&&i.push(gu(t,l,o))),t.tag===3)return i;t=t.return}return[]}function gS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s1(t,e,n,i,l){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,c=a.alternate,u=a.stateNode;if(a=a.tag,c!==null&&c===i)break;a!==5&&a!==26&&a!==27||u===null||(c=u,l?(u=au(n,o),u!=null&&s.unshift(gu(n,u,c))):l||(u=au(n,o),u!=null&&s.push(gu(n,u,c)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var yS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function r1(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(xS,"")}function ov(t,e){return e=r1(e),r1(t)===e}function Ht(t,e,n,i,l,o){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ka(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ka(t,""+i);break;case"className":rd(t,"class",i);break;case"tabIndex":rd(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":rd(t,n,i);break;case"style":n2(t,i,o);break;case"data":if(e!=="object"){rd(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Yd(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(e!=="input"&&Ht(t,e,"name",l.name,l,null),Ht(t,e,"formEncType",l.formEncType,l,null),Ht(t,e,"formMethod",l.formMethod,l,null),Ht(t,e,"formTarget",l.formTarget,l,null)):(Ht(t,e,"encType",l.encType,l,null),Ht(t,e,"method",l.method,l,null),Ht(t,e,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Yd(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=mo);break;case"onScroll":i!=null&&ht("scroll",t);break;case"onScrollEnd":i!=null&&ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(G(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(G(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Yd(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":ht("beforetoggle",t),ht("toggle",t),Hd(t,"popover",i);break;case"xlinkActuate":no(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":no(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":no(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":no(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":no(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":no(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":no(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":no(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":no(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Hd(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=G6.get(n)||n,Hd(t,n,i))}}function W0(t,e,n,i,l,o){switch(n){case"style":n2(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(G(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(G(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ka(t,i):(typeof i=="number"||typeof i=="bigint")&&ka(t,""+i);break;case"onScroll":i!=null&&ht("scroll",t);break;case"onScrollEnd":i!=null&&ht("scrollend",t);break;case"onClick":i!=null&&(t.onclick=mo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!F5.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),o=t[Hi]||null,o=o!=null?o[n]:null,typeof o=="function"&&t.removeEventListener(e,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,l);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Hd(t,n,i)}}}function si(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ht("error",t),ht("load",t);var i=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(G(137,e));default:Ht(t,e,o,s,n,null)}}l&&Ht(t,e,"srcSet",n.srcSet,n,null),i&&Ht(t,e,"src",n.src,n,null);return;case"input":ht("invalid",t);var a=o=s=l=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":l=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":o=d;break;case"defaultValue":a=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(G(137,e));break;default:Ht(t,e,i,d,n,null)}}J5(t,o,a,c,u,s,l,!1);return;case"select":ht("invalid",t),i=s=o=null;for(l in n)if(n.hasOwnProperty(l)&&(a=n[l],a!=null))switch(l){case"value":o=a;break;case"defaultValue":s=a;break;case"multiple":i=a;default:Ht(t,e,l,a,n,null)}e=o,n=s,t.multiple=!!i,e!=null?ca(t,!!i,e,!1):n!=null&&ca(t,!!i,n,!0);return;case"textarea":ht("invalid",t),o=l=i=null;for(s in n)if(n.hasOwnProperty(s)&&(a=n[s],a!=null))switch(s){case"value":i=a;break;case"defaultValue":l=a;break;case"children":o=a;break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(G(91));break;default:Ht(t,e,s,a,n,null)}t2(t,i,l,o);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ht(t,e,c,i,n,null)}return;case"dialog":ht("beforetoggle",t),ht("toggle",t),ht("cancel",t),ht("close",t);break;case"iframe":case"object":ht("load",t);break;case"video":case"audio":for(i=0;i<pu.length;i++)ht(pu[i],t);break;case"image":ht("error",t),ht("load",t);break;case"details":ht("toggle",t);break;case"embed":case"source":case"link":ht("error",t),ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(G(137,e));default:Ht(t,e,u,i,n,null)}return;default:if(Wm(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&W0(t,e,d,i,n,void 0));return}}for(a in n)n.hasOwnProperty(a)&&(i=n[a],i!=null&&Ht(t,e,a,i,n,null))}function bS(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,a=null,c=null,u=null,d=null;for(_ in n){var h=n[_];if(n.hasOwnProperty(_)&&h!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":c=h;default:i.hasOwnProperty(_)||Ht(t,e,_,null,i,h)}}for(var f in i){var _=i[f];if(h=n[f],i.hasOwnProperty(f)&&(_!=null||h!=null))switch(f){case"type":o=_;break;case"name":l=_;break;case"checked":u=_;break;case"defaultChecked":d=_;break;case"value":s=_;break;case"defaultValue":a=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(G(137,e));break;default:_!==h&&Ht(t,e,f,_,i,h)}}p0(t,s,a,c,u,d,o,l);return;case"select":_=s=a=f=null;for(o in n)if(c=n[o],n.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":_=c;default:i.hasOwnProperty(o)||Ht(t,e,o,null,i,c)}for(l in i)if(o=i[l],c=n[l],i.hasOwnProperty(l)&&(o!=null||c!=null))switch(l){case"value":f=o;break;case"defaultValue":a=o;break;case"multiple":s=o;default:o!==c&&Ht(t,e,l,o,i,c)}e=a,n=s,i=_,f!=null?ca(t,!!n,f,!1):!!i!=!!n&&(e!=null?ca(t,!!n,e,!0):ca(t,!!n,n?[]:"",!1));return;case"textarea":_=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null&&!i.hasOwnProperty(a))switch(a){case"value":break;case"children":break;default:Ht(t,e,a,null,i,l)}for(s in i)if(l=i[s],o=n[s],i.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":f=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(G(91));break;default:l!==o&&Ht(t,e,s,l,i,o)}e2(t,f,_);return;case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!i.hasOwnProperty(m))switch(m){case"selected":t.selected=!1;break;default:Ht(t,e,m,null,i,f)}for(c in i)if(f=i[c],_=n[c],i.hasOwnProperty(c)&&f!==_&&(f!=null||_!=null))switch(c){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ht(t,e,c,f,i,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&Ht(t,e,p,null,i,f);for(u in i)if(f=i[u],_=n[u],i.hasOwnProperty(u)&&f!==_&&(f!=null||_!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(G(137,e));break;default:Ht(t,e,u,f,i,_)}return;default:if(Wm(e)){for(var C in n)f=n[C],n.hasOwnProperty(C)&&f!==void 0&&!i.hasOwnProperty(C)&&W0(t,e,C,void 0,i,f);for(d in i)f=i[d],_=n[d],!i.hasOwnProperty(d)||f===_||f===void 0&&_===void 0||W0(t,e,d,f,i,_);return}}for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g)&&Ht(t,e,g,null,i,f);for(h in i)f=i[h],_=n[h],!i.hasOwnProperty(h)||f===_||f==null&&_==null||Ht(t,e,h,f,i,_)}function a1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],o=l.transferSize,s=l.initiatorType,a=l.duration;if(o&&a&&a1(s)){for(s=0,a=l.responseEnd,i+=1;i<n.length;i++){var c=n[i],u=c.startTime;if(u>a)break;var d=c.transferSize,h=c.initiatorType;d&&a1(h)&&(c=c.responseEnd,s+=d*(c<a?1:(a-u)/(c-u)))}if(--i,e+=8*(o+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Q0=null,G0=null;function Nf(t){return t.nodeType===9?t:t.ownerDocument}function c1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function V0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vh=null;function wS(){var t=window.event;return t&&t.type==="popstate"?t===vh?!1:(vh=t,!0):(vh=null,!1)}var rv=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,u1=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof u1<"u"?function(t){return u1.resolve(null).then(t).catch(CS)}:rv;function CS(t){setTimeout(function(){throw t})}function bs(t){return t==="head"}function d1(t,e){var n=e,i=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(l),za(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Pc(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Pc(n);for(var o=n.firstChild;o;){var s=o.nextSibling,a=o.nodeName;o[Mu]||a==="SCRIPT"||a==="STYLE"||a==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=s}}else n==="body"&&Pc(t.ownerDocument.body);n=l}while(n);za(e)}function f1(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function P0(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":P0(n),qm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function jS(t,e,n,i){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Mu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Cl(t.nextSibling),t===null)break}return null}function MS(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Cl(t.nextSibling),t===null))return null;return t}function av(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Cl(t.nextSibling),t===null))return null;return t}function F0(t){return t.data==="$?"||t.data==="$~"}function Z0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TS(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Cl(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var K0=null;function _1(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Cl(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function h1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function cv(t,e,n){switch(e=Nf(n),t){case"html":if(t=e.documentElement,!t)throw Error(G(452));return t;case"head":if(t=e.head,!t)throw Error(G(453));return t;case"body":if(t=e.body,!t)throw Error(G(454));return t;default:throw Error(G(451))}}function Pc(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);qm(t)}var jl=new Map,m1=new Set;function Lf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var To=Dt.d;Dt.d={f:ES,r:DS,D:RS,C:zS,L:OS,m:AS,X:LS,S:NS,M:BS};function ES(){var t=To.f(),e=a_();return t||e}function DS(t){var e=La(t);e!==null&&e.tag===5&&e.type==="form"?nb(e):To.r(t)}var Ya=typeof document>"u"?null:document;function uv(t,e,n){var i=Ya;if(i&&typeof e=="string"&&e){var l=yl(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),m1.has(l)||(m1.add(l),t={rel:t,crossOrigin:n,href:e},i.querySelector(l)===null&&(e=i.createElement("link"),si(e,"link",t),Vn(e),i.head.appendChild(e)))}}function RS(t){To.D(t),uv("dns-prefetch",t,null)}function zS(t,e){To.C(t,e),uv("preconnect",t,e)}function OS(t,e,n){To.L(t,e,n);var i=Ya;if(i&&t&&e){var l='link[rel="preload"][as="'+yl(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+yl(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+yl(n.imageSizes)+'"]')):l+='[href="'+yl(t)+'"]';var o=l;switch(e){case"style":o=Ra(t);break;case"script":o=Ua(t)}jl.has(o)||(t=nn({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),jl.set(o,t),i.querySelector(l)!==null||e==="style"&&i.querySelector(Ou(o))||e==="script"&&i.querySelector(Au(o))||(e=i.createElement("link"),si(e,"link",t),Vn(e),i.head.appendChild(e)))}}function AS(t,e){To.m(t,e);var n=Ya;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+yl(i)+'"][href="'+yl(t)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ua(t)}if(!jl.has(o)&&(t=nn({rel:"modulepreload",href:t},e),jl.set(o,t),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Au(o)))return}i=n.createElement("link"),si(i,"link",t),Vn(i),n.head.appendChild(i)}}}function NS(t,e,n){To.S(t,e,n);var i=Ya;if(i&&t){var l=aa(i).hoistableStyles,o=Ra(t);e=e||"default";var s=l.get(o);if(!s){var a={loading:0,preload:null};if(s=i.querySelector(Ou(o)))a.loading=5;else{t=nn({rel:"stylesheet",href:t,"data-precedence":e},n),(n=jl.get(o))&&Ep(t,n);var c=s=i.createElement("link");Vn(c),si(c,"link",t),c._p=new Promise(function(u,d){c.onload=u,c.onerror=d}),c.addEventListener("load",function(){a.loading|=1}),c.addEventListener("error",function(){a.loading|=2}),a.loading|=4,Fd(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:a},l.set(o,s)}}}function LS(t,e){To.X(t,e);var n=Ya;if(n&&t){var i=aa(n).hoistableScripts,l=Ua(t),o=i.get(l);o||(o=n.querySelector(Au(l)),o||(t=nn({src:t,async:!0},e),(e=jl.get(l))&&Dp(t,e),o=n.createElement("script"),Vn(o),si(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function BS(t,e){To.M(t,e);var n=Ya;if(n&&t){var i=aa(n).hoistableScripts,l=Ua(t),o=i.get(l);o||(o=n.querySelector(Au(l)),o||(t=nn({src:t,async:!0,type:"module"},e),(e=jl.get(l))&&Dp(t,e),o=n.createElement("script"),Vn(o),si(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function p1(t,e,n,i){var l=(l=ts.current)?Lf(l):null;if(!l)throw Error(G(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ra(n.href),n=aa(l).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ra(n.href);var o=aa(l).hoistableStyles,s=o.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,s),(o=l.querySelector(Ou(t)))&&!o._p&&(s.instance=o,s.state.loading=5),jl.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jl.set(t,n),o||$S(l,t,n,s.state))),e&&i===null)throw Error(G(528,""));return s}if(e&&i!==null)throw Error(G(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ua(n),n=aa(l).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(G(444,t))}}function Ra(t){return'href="'+yl(t)+'"'}function Ou(t){return'link[rel="stylesheet"]['+t+"]"}function dv(t){return nn({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),si(e,"link",n),Vn(e),t.head.appendChild(e))}function Ua(t){return'[src="'+yl(t)+'"]'}function Au(t){return"script[async]"+t}function g1(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+yl(n.href)+'"]');if(i)return e.instance=i,Vn(i),i;var l=nn({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Vn(i),si(i,"style",l),Fd(i,n.precedence,t),e.instance=i;case"stylesheet":l=Ra(n.href);var o=t.querySelector(Ou(l));if(o)return e.state.loading|=4,e.instance=o,Vn(o),o;i=dv(n),(l=jl.get(l))&&Ep(i,l),o=(t.ownerDocument||t).createElement("link"),Vn(o);var s=o;return s._p=new Promise(function(a,c){s.onload=a,s.onerror=c}),si(o,"link",i),e.state.loading|=4,Fd(o,n.precedence,t),e.instance=o;case"script":return o=Ua(n.src),(l=t.querySelector(Au(o)))?(e.instance=l,Vn(l),l):(i=n,(l=jl.get(o))&&(i=nn({},n),Dp(i,l)),t=t.ownerDocument||t,l=t.createElement("script"),Vn(l),si(l,"link",i),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(G(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Fd(i,n.precedence,t));return e.instance}function Fd(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,s=0;s<i.length;s++){var a=i[s];if(a.dataset.precedence===e)o=a;else if(o!==l)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Ep(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Dp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zd=null;function y1(t,e,n){if(Zd===null){var i=new Map,l=Zd=new Map;l.set(n,i)}else l=Zd,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var o=n[l];if(!(o[Mu]||o[ti]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(e)||"";s=t+s;var a=i.get(s);a?a.push(o):i.set(s,[o])}}return i}function x1(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function HS(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function fv(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function YS(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var l=Ra(i.href),o=e.querySelector(Ou(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Bf.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=o,Vn(o);return}o=e.ownerDocument||e,i=dv(i),(l=jl.get(l))&&Ep(i,l),o=o.createElement("link"),Vn(o);var s=o;s._p=new Promise(function(a,c){s.onload=a,s.onerror=c}),si(o,"link",i),n.instance=o}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Bf.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var wh=0;function US(t,e){return t.stylesheets&&t.count===0&&Kd(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Kd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4+e);0<t.imgBytes&&wh===0&&(wh=62500*vS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kd(t,t.stylesheets),t.unsuspend)){var o=t.unsuspend;t.unsuspend=null,o()}},(t.imgBytes>wh?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Bf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $f=null;function Kd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$f=new Map,e.forEach(XS,t),$f=null,Bf.call(t))}function XS(t,e){if(!(e.state.loading&4)){var n=$f.get(t);if(n)var i=n.get(null);else{n=new Map,$f.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}l=e.instance,s=l.getAttribute("data-precedence"),o=n.get(s)||i,o===i&&n.set(null,l),n.set(s,l),this.count++,i=Bf.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var yu={$$typeof:ho,Provider:null,Consumer:null,_currentValue:Zs,_currentValue2:Zs,_threadCount:0};function IS(t,e,n,i,l,o,s,a,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=W_(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=W_(0),this.hiddenUpdates=W_(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function _v(t,e,n,i,l,o,s,a,c,u,d,h){return t=new IS(t,e,n,s,c,u,d,h,a),e=1,o===!0&&(e|=24),o=Zi(3,null,null,e),t.current=o,o.stateNode=t,e=np(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:e},op(o),t}function hv(t){return t?(t=Fr,t):Fr}function mv(t,e,n,i,l,o){l=hv(l),i.context===null?i.context=l:i.pendingContext=l,i=is(e),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=ls(t,i,e),n!==null&&(Bi(n,t,e),Uc(n,t,e))}function b1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){b1(t,e),(t=t.alternate)&&b1(t,e)}function pv(t){if(t.tag===13||t.tag===31){var e=mr(t,67108864);e!==null&&Bi(e,t,67108864),Rp(t,67108864)}}function v1(t){if(t.tag===13||t.tag===31){var e=ol();e=Xm(e);var n=mr(t,e);n!==null&&Bi(n,t,e),Rp(t,e)}}var Hf=!0;function qS(t,e,n,i){var l=Ie.T;Ie.T=null;var o=Dt.p;try{Dt.p=2,zp(t,e,n,i)}finally{Dt.p=o,Ie.T=l}}function WS(t,e,n,i){var l=Ie.T;Ie.T=null;var o=Dt.p;try{Dt.p=8,zp(t,e,n,i)}finally{Dt.p=o,Ie.T=l}}function zp(t,e,n,i){if(Hf){var l=J0(i);if(l===null)bh(t,e,i,Yf,n),w1(t,i);else if(GS(l,t,e,n,i))i.stopPropagation();else if(w1(t,i),e&4&&-1<QS.indexOf(t)){for(;l!==null;){var o=La(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=$s(o.pendingLanes);if(s!==0){var a=o;for(a.pendingLanes|=2,a.entangledLanes|=2;s;){var c=1<<31-ll(s);a.entanglements[1]|=c,s&=~c}Kl(o),!(Et&6)&&(Ef=nl()+500,zu(0))}}break;case 31:case 13:a=mr(o,2),a!==null&&Bi(a,o,2),a_(),Rp(o,2)}if(o=J0(i),o===null&&bh(t,e,i,Yf,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else bh(t,e,i,null,n)}}function J0(t){return t=Qm(t),Op(t)}var Yf=null;function Op(t){if(Yf=null,t=qr(t),t!==null){var e=Su(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=L5(e),t!==null)return t;t=null}else if(n===31){if(t=B5(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yf=t,null}function gv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R6()){case U5:return 2;case X5:return 8;case mf:case z6:return 32;case I5:return 268435456;default:return 32}default:return 32}}var em=!1,rs=null,as=null,cs=null,xu=new Map,bu=new Map,Uo=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w1(t,e){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":xu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(e.pointerId)}}function oc(t,e,n,i,l,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},e!==null&&(e=La(e),e!==null&&pv(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function GS(t,e,n,i,l){switch(e){case"focusin":return rs=oc(rs,t,e,n,i,l),!0;case"dragenter":return as=oc(as,t,e,n,i,l),!0;case"mouseover":return cs=oc(cs,t,e,n,i,l),!0;case"pointerover":var o=l.pointerId;return xu.set(o,oc(xu.get(o)||null,t,e,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,bu.set(o,oc(bu.get(o)||null,t,e,n,i,l)),!0}return!1}function yv(t){var e=qr(t.target);if(e!==null){var n=Su(e);if(n!==null){if(e=n.tag,e===13){if(e=L5(n),e!==null){t.blockedOn=e,sy(t.priority,function(){v1(n)});return}}else if(e===31){if(e=B5(n),e!==null){t.blockedOn=e,sy(t.priority,function(){v1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=J0(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);y0=i,n.target.dispatchEvent(i),y0=null}else return e=La(n),e!==null&&pv(e),t.blockedOn=n,!1;e.shift()}return!0}function S1(t,e,n){Jd(t)&&n.delete(e)}function VS(){em=!1,rs!==null&&Jd(rs)&&(rs=null),as!==null&&Jd(as)&&(as=null),cs!==null&&Jd(cs)&&(cs=null),xu.forEach(S1),bu.forEach(S1)}function md(t,e){t.blockedOn===e&&(t.blockedOn=null,em||(em=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,VS)))}var pd=null;function k1(t){pd!==t&&(pd=t,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,function(){pd===t&&(pd=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],l=t[e+2];if(typeof i!="function"){if(Op(i||n)===null)continue;break}var o=La(n);o!==null&&(t.splice(e,3),e-=3,A0(o,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function za(t){function e(c){return md(c,t)}rs!==null&&md(rs,t),as!==null&&md(as,t),cs!==null&&md(cs,t),xu.forEach(e),bu.forEach(e);for(var n=0;n<Uo.length;n++){var i=Uo[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Uo.length&&(n=Uo[0],n.blockedOn===null);)yv(n),n.blockedOn===null&&Uo.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],o=n[i+1],s=l[Hi]||null;if(typeof o=="function")s||k1(n);else if(s){var a=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[Hi]||null)a=s.formAction;else if(Op(l)!==null)continue}else a=s.action;typeof a=="function"?n[i+1]=a:(n.splice(i,3),i-=3),k1(n)}}}function xv(){function t(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Ap(t){this._internalRoot=t}d_.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));var n=e.current,i=ol();mv(n,i,t,e,null,null)};d_.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mv(t.current,2,null,t,null,null),a_(),e[Na]=null}};function d_(t){this._internalRoot=t}d_.prototype.unstable_scheduleHydration=function(t){if(t){var e=V5();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Uo.length&&e!==0&&e<Uo[n].priority;n++);Uo.splice(n,0,t),n===0&&yv(t)}};var C1=A5.version;if(C1!=="19.2.7")throw Error(G(527,C1,"19.2.7"));Dt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=k6(e),t=t!==null?$5(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Ie,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gd.isDisabled&&gd.supportsFiber)try{ku=gd.inject(PS),il=gd}catch{}}Vf.createRoot=function(t,e){if(!N5(t))throw Error(G(299));var n=!1,i="",l=ub,o=db,s=fb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=_v(t,1,!1,null,null,n,i,null,l,o,s,xv),t[Na]=e.current,Tp(t),new Ap(e)};Vf.hydrateRoot=function(t,e,n){if(!N5(t))throw Error(G(299));var i=!1,l="",o=ub,s=db,a=fb,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(a=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),e=_v(t,1,!0,e,n??null,i,l,c,o,s,a,xv),e.context=hv(null),n=e.current,i=ol(),i=Xm(i),l=is(i),l.callback=null,ls(n,l,i),n=i,e.current.lanes=n,ju(e,n),Kl(e),t[Na]=e.current,Tp(t),new d_(e)};Vf.version="19.2.7";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),T5.exports=Vf;var FS=T5.exports,vv={exports:{}},f_={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZS=Symbol.for("react.transitional.element"),KS=Symbol.for("react.fragment");function wv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var l in e)l!=="key"&&(n[l]=e[l])}else n=e;return e=n.ref,{$$typeof:ZS,type:t,key:i,ref:e!==void 0?e:null,props:n}}f_.Fragment=KS;f_.jsx=wv;f_.jsxs=wv;vv.exports=f_;var r=vv.exports,JS=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,ek={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=JS}var qt=ek,tk=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,nk={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=tk}var Yt=nk,ik=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),lk=({size:t=24,style:e={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:e,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ok=({size:t=20,...e})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),sk=({size:t=24,copied:e=!1,tint:n})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Yt.iconState} ${e?Yt.hiddenScaled:Yt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Yt.iconState} ${e?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),rk=({size:t=24,state:e="idle"})=>{const n=e==="idle",i=e==="sent",l=e==="failed",o=e==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Yt.iconStateFast} ${n?Yt.visibleScaled:o?Yt.sending:Yt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Yt.iconStateFast} ${i?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Yt.iconStateFast} ${l?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},ak=({size:t=24,isOpen:e=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Yt.iconFade} ${e?Yt.visible:Yt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Yt.iconFade} ${e?Yt.hidden:Yt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),ck=({size:t=24,isPaused:e=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Yt.iconFadeFast} ${e?Yt.hidden:Yt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Yt.iconFadeFast} ${e?Yt.visible:Yt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),uk=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),dk=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Sv=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),fk=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),_k=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),hk=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),mk=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),pk=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),gk=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yk=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),kv=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Sh=kv.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),tm="feedback-freeze-styles",kh="__agentation_freeze";function xk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[kh]||(t[kh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[kh]}var dt=xk();typeof window<"u"&&!dt.installed&&(dt.origSetTimeout=window.setTimeout.bind(window),dt.origSetInterval=window.setInterval.bind(window),dt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?dt.origSetTimeout(t,e):dt.origSetTimeout((...i)=>{dt.frozen?dt.frozenTimeoutQueue.push(()=>t(...i)):t(...i)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?dt.origSetInterval(t,e):dt.origSetInterval((...i)=>{dt.frozen||t(...i)},e,...n),window.requestAnimationFrame=t=>dt.origRAF(e=>{dt.frozen?dt.frozenRAFQueue.push(t):t(e)}),dt.installed=!0);var ze=dt.origSetTimeout,bk=dt.origSetInterval,ea=dt.origRAF;function vk(t){return t?kv.some(e=>{var n;return!!((n=t.closest)!=null&&n.call(t,`[${e}]`))}):!1}function wk(){if(typeof document>"u"||dt.frozen)return;dt.frozen=!0,dt.frozenTimeoutQueue=[],dt.frozenRAFQueue=[];let t=document.getElementById(tm);t||(t=document.createElement("style"),t.id=tm),t.textContent=`
    *${Sh},
    *${Sh}::before,
    *${Sh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),dt.pausedAnimations=[];try{document.getAnimations().forEach(e=>{var i;if(e.playState!=="running")return;const n=(i=e.effect)==null?void 0:i.target;vk(n)||(e.pause(),dt.pausedAnimations.push(e))})}catch{}document.querySelectorAll("video").forEach(e=>{e.paused||(e.dataset.wasPaused="false",e.pause())})}function j1(){var n;if(typeof document>"u"||!dt.frozen)return;dt.frozen=!1;const t=dt.frozenTimeoutQueue;dt.frozenTimeoutQueue=[];for(const i of t)dt.origSetTimeout(()=>{if(dt.frozen){dt.frozenTimeoutQueue.push(i);return}try{i()}catch(l){console.warn("[agentation] Error replaying queued timeout:",l)}},0);const e=dt.frozenRAFQueue;dt.frozenRAFQueue=[];for(const i of e)dt.origRAF(l=>{if(dt.frozen){dt.frozenRAFQueue.push(i);return}i(l)});for(const i of dt.pausedAnimations)try{i.play()}catch(l){console.warn("[agentation] Error resuming animation:",l)}dt.pausedAnimations=[],(n=document.getElementById(tm))==null||n.remove(),document.querySelectorAll("video").forEach(i=>{i.dataset.wasPaused==="false"&&(i.play().catch(()=>{}),delete i.dataset.wasPaused)})}function Ch(t){if(!t)return;const e=n=>n.stopImmediatePropagation();document.addEventListener("focusin",e,!0),document.addEventListener("focusout",e,!0);try{t.focus()}finally{document.removeEventListener("focusin",e,!0),document.removeEventListener("focusout",e,!0)}}var Uf=S.forwardRef(function({element:e,timestamp:n,selectedText:i,placeholder:l="What should change?",initialValue:o="",submitLabel:s="Add",onSubmit:a,onCancel:c,onDelete:u,style:d,accentColor:h="#3c82f7",isExiting:f=!1,lightMode:_=!1,computedStyles:m},p){const[C,g]=S.useState(o),[y,b]=S.useState(!1),[x,M]=S.useState("initial"),[R,k]=S.useState(!1),[N,L]=S.useState(!1),A=S.useRef(null),J=S.useRef(null),V=S.useRef(null),pe=S.useRef(null);S.useEffect(()=>{f&&x!=="exit"&&M("exit")},[f,x]),S.useEffect(()=>{ze(()=>{M("enter")},0);const te=ze(()=>{M("entered")},200),D=ze(()=>{const De=A.current;De&&(Ch(De),De.selectionStart=De.selectionEnd=De.value.length,De.scrollTop=De.scrollHeight)},50);return()=>{clearTimeout(te),clearTimeout(D),V.current&&clearTimeout(V.current),pe.current&&clearTimeout(pe.current)}},[]);const oe=S.useCallback(()=>{pe.current&&clearTimeout(pe.current),b(!0),pe.current=ze(()=>{b(!1),Ch(A.current)},250)},[]);S.useImperativeHandle(p,()=>({shake:oe}),[oe]);const ae=S.useCallback(()=>{M("exit"),V.current=ze(()=>{c()},150)},[c]),$=S.useCallback(()=>{C.trim()&&a(C.trim())},[C,a]),F=S.useCallback(te=>{te.stopPropagation(),!te.nativeEvent.isComposing&&(te.key==="Enter"&&!te.shiftKey&&(te.preventDefault(),$()),te.key==="Escape"&&ae())},[$,ae]),H=[qt.popup,_?qt.light:"",x==="enter"?qt.enter:"",x==="entered"?qt.entered:"",x==="exit"?qt.exit:"",y?qt.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:J,className:H,"data-annotation-popup":!0,style:d,onClick:te=>te.stopPropagation(),children:[r.jsxs("div",{className:qt.header,children:[m&&Object.keys(m).length>0?r.jsxs("button",{className:qt.headerToggle,onClick:()=>{const te=N;L(!N),te&&ze(()=>Ch(A.current),0)},type:"button",children:[r.jsx("svg",{className:`${qt.chevron} ${N?qt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:qt.element,children:e})]}):r.jsx("span",{className:qt.element,children:e}),n&&r.jsx("span",{className:qt.timestamp,children:n})]}),m&&Object.keys(m).length>0&&r.jsx("div",{className:`${qt.stylesWrapper} ${N?qt.expanded:""}`,children:r.jsx("div",{className:qt.stylesInner,children:r.jsx("div",{className:qt.stylesBlock,children:Object.entries(m).map(([te,D])=>r.jsxs("div",{className:qt.styleLine,children:[r.jsx("span",{className:qt.styleProperty,children:te.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:qt.styleValue,children:D}),";"]},te))})})}),i&&r.jsxs("div",{className:qt.quote,children:["“",i.slice(0,80),i.length>80?"...":"","”"]}),r.jsx("textarea",{ref:A,className:qt.textarea,style:{borderColor:R?h:void 0},placeholder:l,value:C,onChange:te=>g(te.target.value),onFocus:()=>k(!0),onBlur:()=>k(!1),rows:2,onKeyDown:F}),r.jsxs("div",{className:qt.actions,children:[u&&r.jsx("div",{className:qt.deleteWrapper,children:r.jsx("button",{className:qt.deleteButton,onClick:u,type:"button",children:r.jsx(pk,{size:22})})}),r.jsx("button",{className:qt.cancel,onClick:ae,children:"Cancel"}),r.jsx("button",{className:qt.submit,style:{backgroundColor:h,opacity:C.trim()?1:.4},onClick:$,disabled:!C.trim(),children:s})]})]})}),Sk=({content:t,children:e,...n})=>{const[i,l]=S.useState(!1),[o,s]=S.useState(!1),[a,c]=S.useState({top:0,right:0}),u=S.useRef(null),d=S.useRef(null),h=S.useRef(null),f=()=>{if(u.current){const p=u.current.getBoundingClientRect();c({top:p.top+p.height/2,right:window.innerWidth-p.left+8})}},_=()=>{s(!0),h.current&&(clearTimeout(h.current),h.current=null),f(),d.current=ze(()=>{l(!0)},500)},m=()=>{d.current&&(clearTimeout(d.current),d.current=null),l(!1),h.current=ze(()=>{s(!1)},150)};return S.useEffect(()=>()=>{d.current&&clearTimeout(d.current),h.current&&clearTimeout(h.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:u,onMouseEnter:_,onMouseLeave:m,...n,children:e}),o&&$m.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:a.top,right:a.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:i?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},kk=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Ck={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=kk}var M1=Ck,Us=({content:t})=>r.jsx(Sk,{className:M1.tooltip,content:t,children:r.jsx(ok,{className:M1.tooltipIcon})}),ge={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Cv=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ge.navigation},{type:"header",label:"Header",...ge.header},{type:"hero",label:"Hero",...ge.hero},{type:"section",label:"Section",...ge.section},{type:"sidebar",label:"Sidebar",...ge.sidebar},{type:"footer",label:"Footer",...ge.footer},{type:"modal",label:"Modal",...ge.modal},{type:"banner",label:"Banner",...ge.banner},{type:"drawer",label:"Drawer",...ge.drawer},{type:"popover",label:"Popover",...ge.popover},{type:"divider",label:"Divider",...ge.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ge.card},{type:"text",label:"Text",...ge.text},{type:"image",label:"Image",...ge.image},{type:"video",label:"Video",...ge.video},{type:"table",label:"Table",...ge.table},{type:"grid",label:"Grid",...ge.grid},{type:"list",label:"List",...ge.list},{type:"chart",label:"Chart",...ge.chart},{type:"codeBlock",label:"Code Block",...ge.codeBlock},{type:"map",label:"Map",...ge.map},{type:"timeline",label:"Timeline",...ge.timeline},{type:"calendar",label:"Calendar",...ge.calendar},{type:"accordion",label:"Accordion",...ge.accordion},{type:"carousel",label:"Carousel",...ge.carousel},{type:"logo",label:"Logo",...ge.logo},{type:"faq",label:"FAQ",...ge.faq},{type:"gallery",label:"Gallery",...ge.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ge.button},{type:"input",label:"Input",...ge.input},{type:"search",label:"Search",...ge.search},{type:"form",label:"Form",...ge.form},{type:"tabs",label:"Tabs",...ge.tabs},{type:"dropdown",label:"Dropdown",...ge.dropdown},{type:"toggle",label:"Toggle",...ge.toggle},{type:"stepper",label:"Stepper",...ge.stepper},{type:"rating",label:"Rating",...ge.rating},{type:"fileUpload",label:"File Upload",...ge.fileUpload},{type:"checkbox",label:"Checkbox",...ge.checkbox},{type:"radio",label:"Radio",...ge.radio},{type:"slider",label:"Slider",...ge.slider},{type:"datePicker",label:"Date Picker",...ge.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ge.avatar},{type:"badge",label:"Badge",...ge.badge},{type:"tag",label:"Tag",...ge.tag},{type:"breadcrumb",label:"Breadcrumb",...ge.breadcrumb},{type:"pagination",label:"Pagination",...ge.pagination},{type:"progress",label:"Progress",...ge.progress},{type:"alert",label:"Alert",...ge.alert},{type:"toast",label:"Toast",...ge.toast},{type:"notification",label:"Notification",...ge.notification},{type:"tooltip",label:"Tooltip",...ge.tooltip},{type:"stat",label:"Stat",...ge.stat},{type:"skeleton",label:"Skeleton",...ge.skeleton},{type:"chip",label:"Chip",...ge.chip},{type:"icon",label:"Icon",...ge.icon},{type:"spinner",label:"Spinner",...ge.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ge.pricing},{type:"testimonial",label:"Testimonial",...ge.testimonial},{type:"cta",label:"CTA",...ge.cta},{type:"productCard",label:"Product Card",...ge.productCard},{type:"profile",label:"Profile",...ge.profile},{type:"feature",label:"Feature",...ge.feature},{type:"team",label:"Team",...ge.team},{type:"login",label:"Login",...ge.login},{type:"contact",label:"Contact",...ge.contact}]}],Rl={};for(const t of Cv)for(const e of t.items)Rl[e.type]=e;function P({w:t,h:e=3,strong:n}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:e,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Lt({w:t,h:e,radius:n=3,style:i}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof e=="number"?`${e}px`:e,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...i}})}function ki({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function jk({width:t,height:e}){const n=Math.max(8,e*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:t*.02},children:[r.jsx(Lt,{w:Math.max(20,e*.5),h:Math.max(12,e*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx(P,{w:t*.06}),r.jsx(P,{w:t*.07}),r.jsx(P,{w:t*.05}),r.jsx(P,{w:t*.06})]}),r.jsx(Lt,{w:t*.1,h:Math.min(28,e*.5),radius:4})]})}function Mk({width:t,height:e,text:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:e*.05},children:[n?r.jsx("span",{style:{fontSize:Math.min(20,e*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):r.jsx(P,{w:t*.5,h:Math.max(6,e*.04),strong:!0}),r.jsx(P,{w:t*.6}),r.jsx(P,{w:t*.4}),r.jsx(Lt,{w:Math.min(140,t*.2),h:Math.min(36,e*.12),radius:6,style:{marginTop:e*.06}})]})}function Tk({width:t,height:e}){const n=Math.max(3,Math.floor(e/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:e*.03},children:[r.jsx(P,{w:t*.6,h:4,strong:!0}),Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Lt,{w:10,h:10,radius:2}),r.jsx(P,{w:t*(.4+l*17%30/100)})]},l))]})}function Ek({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${e*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(P,{w:"60%",h:3,strong:!0}),r.jsx(P,{w:"80%",h:2}),r.jsx(P,{w:"70%",h:2}),r.jsx(P,{w:"60%",h:2})]},l))})}function Dk({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(P,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(P,{w:"90%"}),r.jsx(P,{w:"70%"}),r.jsx(P,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Lt,{w:70,h:26,radius:4}),r.jsx(Lt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Rk({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(P,{w:"70%",h:4,strong:!0}),r.jsx(P,{w:"95%",h:2}),r.jsx(P,{w:"85%",h:2}),r.jsx(P,{w:"50%",h:2})]})]})}function zk({width:t,height:e,text:n}){if(n)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,e*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});const i=Math.max(2,Math.floor(e/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(P,{w:t*.6,h:5,strong:!0}),Array.from({length:i},(l,o)=>r.jsx(P,{w:`${70+o*13%25}%`,h:2},o))]})}function Ok({width:t,height:e}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:e,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:e,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:e*.3,r:Math.min(t,e)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Ak({width:t,height:e}){const n=Math.max(2,Math.min(5,Math.floor(t/100))),i=Math.max(2,Math.min(6,Math.floor(e/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(l,o)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(P,{w:"70%",h:3,strong:!0})},o))}),Array.from({length:i},(l,o)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(s,a)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(P,{w:`${50+(o*7+a*13)%40}%`,h:2})},a))},o))]})}function Nk({width:t,height:e}){const n=Math.max(2,Math.floor(e/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(ki,{size:8}),r.jsx(P,{w:`${55+l*17%35}%`,h:2})]},l))})}function Lk({width:t,height:e,text:n}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,e/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?r.jsx("span",{style:{fontSize:Math.min(13,e*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):r.jsx(P,{w:Math.max(20,t*.5),h:3,strong:!0})})}function Bk({width:t,height:e}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(P,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,e*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(P,{w:"40%",h:2})})]})}function $k({width:t,height:e}){const n=Math.max(2,Math.min(5,Math.floor(e/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e*.04,padding:8},children:[Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(P,{w:60+l*17%30,h:2}),r.jsx(Lt,{w:"100%",h:28,radius:4})]},l)),r.jsx(Lt,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Hk({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(i,l)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:l===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(P,{w:60,h:3,strong:l===0})},l))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(P,{w:"80%",h:2}),r.jsx(P,{w:"65%",h:2}),r.jsx(P,{w:"75%",h:2})]})]})}function Yk({width:t,height:e}){const n=Math.min(t,e)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:e/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:e*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-n*.55} ${e*.78} C${t/2-n*.55} ${e*.55} ${t/2+n*.55} ${e*.55} ${t/2+n*.55} ${e*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Uk({width:t,height:e}){return r.jsx("div",{style:{height:"100%",borderRadius:e/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(P,{w:Math.max(16,t*.5),h:2,strong:!0})})}function Xk({width:t,height:e}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:e*.08},children:[r.jsx(P,{w:t*.5,h:Math.max(5,e*.06),strong:!0}),r.jsx(P,{w:t*.35})]})}function Ik({width:t,height:e}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:e*.04,padding:t*.04},children:[r.jsx(P,{w:t*.3,h:4,strong:!0}),r.jsx(P,{w:t*.7}),r.jsx(P,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:e*.06},children:[r.jsx(Lt,{w:"33%",h:"100%",radius:4}),r.jsx(Lt,{w:"33%",h:"100%",radius:4}),r.jsx(Lt,{w:"33%",h:"100%",radius:4})]})]})}function qk({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/140))),i=Math.max(1,Math.min(3,Math.floor(e/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${i}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*i},(l,o)=>r.jsx(Lt,{w:"100%",h:"100%",radius:4},o))})}function Wk({width:t,height:e}){const n=Math.max(2,Math.floor((e-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(P,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(i,l)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:l===0?"var(--agd-fill)":"transparent"},children:r.jsx(P,{w:`${50+l*17%35}%`,h:2,strong:l===0})},l))})]})}function Qk({width:t,height:e}){const n=Math.min(t,e)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:e-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-n,cy:e/2,r:n*.7,fill:"var(--agd-bar)"})]})}function Gk({width:t,height:e}){const n=Math.min(e/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[r.jsx(ki,{size:Math.min(14,e*.4)}),r.jsx(P,{w:"50%",h:2})]})}function Vk({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ki,{size:Math.min(20,e*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:"60%",h:3,strong:!0}),r.jsx(P,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Pk({width:t,height:e}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:e,rx:e/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:e-2,rx:(e-2)/2,fill:"var(--agd-bar)"})]})}function Fk({width:t,height:e}){const n=Math.max(3,Math.min(7,Math.floor(t/50))),i=t/(n*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(l,o)=>{const s=30+(o*37+17)%55;return r.jsx(Lt,{w:i,h:`${s}%`,radius:2},o)})})}function Zk({width:t,height:e}){const n=Math.min(t,e)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Lt,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function Kk({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(P,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Jk({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(P,{w:40+l*13%20,h:2,strong:l===n-1})]},l))})}function e8({width:t,height:e}){const n=Math.max(3,Math.min(5,Math.floor(t/40))),i=Math.min(28,e*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(l,o)=>r.jsx(Lt,{w:i,h:i,radius:4,style:o===1?{background:"var(--agd-bar)"}:void 0},o))})}function t8({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function n8({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(e/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:l===0?2:1},children:[r.jsx(P,{w:`${40+l*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:l===0?"▼":"▶"})]},l))})}function i8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Lt,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(ki,{size:5}),r.jsx(ki,{size:5}),r.jsx(ki,{size:5})]})]})}function l8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:e*.04},children:[r.jsx(P,{w:t*.4,h:3,strong:!0}),r.jsx(P,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,i)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(ki,{size:5}),r.jsx(P,{w:`${50+i*17%35}%`,h:2})]},i))}),r.jsx(Lt,{w:t*.7,h:Math.min(32,e*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function o8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(P,{w:"90%",h:2}),r.jsx(P,{w:"75%",h:2}),r.jsx(P,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(ki,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(P,{w:60,h:3,strong:!0}),r.jsx(P,{w:40,h:2})]})]})]})}function s8({width:t,height:e}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:e*.08},children:[r.jsx(P,{w:t*.5,h:Math.max(4,e*.05),strong:!0}),r.jsx(P,{w:t*.35}),r.jsx(Lt,{w:Math.min(140,t*.25),h:Math.min(32,e*.15),radius:6,style:{marginTop:e*.04,background:"var(--agd-bar)"}})]})}function r8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:"40%",h:3,strong:!0}),r.jsx(P,{w:"70%",h:2})]})]})}function a8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(P,{w:t*.4,h:3,strong:!0}),r.jsx(Lt,{w:60,h:Math.min(24,e*.6),radius:4})]})}function c8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:e*.06},children:[r.jsx(P,{w:t*.5,h:2}),r.jsx(P,{w:t*.4,h:Math.max(8,e*.18),strong:!0}),r.jsx(P,{w:t*.3,h:2})]})}function u8({width:t,height:e}){const n=Math.max(3,Math.min(5,Math.floor(t/100))),i=Math.min(12,e*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(l,o)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:i,height:i,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:o===0?"var(--agd-bar)":"transparent",flexShrink:0}}),o<n-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},o))})}function d8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(P,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function f8({width:t,height:e}){const i=Math.min(e*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:i*.2},children:Array.from({length:5},(l,o)=>r.jsx("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:o<3?"var(--agd-bar)":"none"})},o))})}function _8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:e*.3,x2:t,y2:e*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:e*.6,x2:t,y2:e*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:e,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function h8({width:t,height:e}){const n=Math.max(3,Math.min(5,Math.floor(e/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(ki,{size:8}),l<n-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},l))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:`${35+l*13%25}%`,h:3,strong:!0}),r.jsx(P,{w:`${50+l*17%30}%`,h:2})]},l))})]})}function m8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:e*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(P,{w:t*.4,h:2}),r.jsx(P,{w:t*.25,h:2})]})}function p8({width:t,height:e}){const n=Math.max(3,Math.min(8,Math.floor(e/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(ki,{size:6}),r.jsx(ki,{size:6}),r.jsx(ki,{size:6})]}),Array.from({length:n},(i,l)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:l>0&&l<n-1?12:0},children:r.jsx(P,{w:`${25+l*23%50}%`,h:2,strong:l===0})},l))]})}function g8({width:t,height:e}){const l=Math.min((t-16)/7,(e-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(P,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(o,s)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l*.6},children:r.jsx(P,{w:l*.5,h:2})},`h${s}`)),Array.from({length:7*5},(o,s)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l},children:r.jsx("div",{style:{width:l*.6,height:l*.6,borderRadius:"50%",background:s===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===12?1:.3}})})},s))]})]})}function y8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ki,{size:Math.min(32,e*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:"50%",h:3,strong:!0}),r.jsx(P,{w:"75%",h:2})]}),r.jsx(P,{w:30,h:2})]})}function x8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(P,{w:"65%",h:4,strong:!0}),r.jsx(P,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(P,{w:"30%",h:5,strong:!0}),r.jsx(Lt,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function b8({width:t,height:e}){const n=Math.min(48,e*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:e*.06},children:[r.jsx(ki,{size:n}),r.jsx(P,{w:t*.45,h:4,strong:!0}),r.jsx(P,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:e*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(P,{w:20,h:3,strong:!0}),r.jsx(P,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(P,{w:20,h:3,strong:!0}),r.jsx(P,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(P,{w:20,h:3,strong:!0}),r.jsx(P,{w:28,h:2})]})]})]})}function v8({width:t,height:e}){const n=Math.max(t*.6,80),i=Math.max(3,Math.floor(e/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-n,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:e*.06},children:[r.jsx(P,{w:n*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:i},(l,o)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(P,{w:`${50+o*17%35}%`,h:2,strong:o===0})},o))]})]})}function w8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(P,{w:"70%",h:3,strong:!0}),r.jsx(P,{w:"90%",h:2}),r.jsx(P,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function S8({width:t,height:e}){const n=Math.min(e*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Lt,{w:n,h:n,radius:n*.25}),r.jsx(P,{w:t*.45,h:Math.max(4,e*.2),strong:!0})]})}function k8({width:t,height:e}){const n=Math.max(2,Math.min(5,Math.floor(e/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:l===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(P,{w:t*(.3+l*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:l===0?"▼":"▶"})]},l))})}function C8({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/120))),i=Math.max(1,Math.min(3,Math.floor(e/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${i}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*i},(l,o)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},o))})}function j8({width:t,height:e}){const n=Math.min(t,e);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(e-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${n*.25} ${e/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function M8({width:t,height:e}){const n=Math.min(t,e)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:e/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:e/2,r:n*.45,fill:"var(--agd-bar)"})]})}function T8({width:t,height:e}){const n=Math.max(2,e*.12),i=Math.min(e*.35,10),l=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:l,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:l-i,width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function E8({width:t,height:e}){const n=Math.min(36,e*.15),i=7,l=4,o=Math.min((t-16)/i,(e-n-40)/(l+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(P,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(P,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:i*l},(s,a)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o},children:r.jsx("div",{style:{width:o*.5,height:o*.5,borderRadius:"50%",background:a===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:a===10?1:.25}})})})},a))})]})]})}function D8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:e*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:e*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,e*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,e*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,e*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function R8({width:t,height:e}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:e/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${e*.3}px`,gap:4},children:[r.jsx(P,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,e*.3),height:Math.max(6,e*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function z8({width:t,height:e}){const n=Math.min(t,e);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(e-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function O8({width:t,height:e}){const n=Math.min(t,e)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${e}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:e/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${e/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function A8({width:t,height:e}){const n=Math.min(36,e*.25,t*.12),i=Math.max(1,Math.min(3,Math.floor(e/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:i},(l,o)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Lt,{w:n,h:n,radius:n*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(P,{w:`${40+o*13%20}%`,h:3,strong:!0}),r.jsx(P,{w:`${60+o*17%25}%`,h:2})]})]},o))})}function N8({width:t,height:e}){const n=Math.max(2,Math.min(4,Math.floor(t/120))),i=Math.min(36,e*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:e*.06,padding:e*.06},children:[r.jsx(P,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(l,o)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(ki,{size:i}),r.jsx(P,{w:t*.12,h:3,strong:!0}),r.jsx(P,{w:t*.08,h:2})]},o))})]})}function L8({width:t,height:e}){const n=Math.max(2,Math.min(3,Math.floor(e/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:e*.04},children:[r.jsx(P,{w:t*.5,h:Math.max(5,e*.04),strong:!0}),r.jsx(P,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:e*.03,marginTop:e*.04},children:Array.from({length:n},(i,l)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:Math.min(60,t*.2),h:2}),r.jsx(Lt,{w:"100%",h:Math.min(32,e*.1),radius:4})]},l))}),r.jsx(Lt,{w:"100%",h:Math.min(36,e*.12),radius:6,style:{marginTop:e*.03,background:"var(--agd-bar)"}}),r.jsx(P,{w:t*.4,h:2})]})}function B8({width:t,height:e}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:e*.03},children:[r.jsx(P,{w:t*.4,h:4,strong:!0}),r.jsx(P,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:e*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:50,h:2}),r.jsx(Lt,{w:"100%",h:Math.min(28,e*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:40,h:2}),r.jsx(Lt,{w:"100%",h:Math.min(28,e*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(P,{w:50,h:2}),r.jsx(Lt,{w:"100%",h:Math.min(28,e*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(P,{w:60,h:2}),r.jsx(Lt,{w:"100%",h:"100%",radius:4})]}),r.jsx(Lt,{w:Math.min(120,t*.3),h:Math.min(30,e*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var $8={navigation:jk,hero:Mk,sidebar:Tk,footer:Ek,modal:Dk,card:Rk,text:zk,image:Ok,table:Ak,list:Nk,button:Lk,input:Bk,form:$k,tabs:Hk,avatar:Yk,badge:Uk,header:Xk,section:Ik,grid:qk,dropdown:Wk,toggle:Qk,search:Gk,toast:Vk,progress:Pk,chart:Fk,video:Zk,tooltip:Kk,breadcrumb:Jk,pagination:e8,divider:t8,accordion:n8,carousel:i8,pricing:l8,testimonial:o8,cta:s8,alert:r8,banner:a8,stat:c8,stepper:u8,tag:d8,rating:f8,map:_8,timeline:h8,fileUpload:m8,codeBlock:p8,calendar:g8,notification:y8,productCard:x8,profile:b8,drawer:v8,popover:w8,logo:S8,faq:k8,gallery:C8,checkbox:j8,radio:M8,slider:T8,datePicker:E8,skeleton:D8,chip:R8,icon:z8,spinner:O8,feature:A8,team:N8,login:L8,contact:B8};function H8({type:t,width:e,height:n,text:i}){const l=$8[t];return l?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(l,{width:e,height:n,text:i})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var Y8=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,U8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=Y8}var Q=U8,Rr=24,yd=5;function T1(t,e,n,i,l){let o=1/0,s=1/0;const a=t.x,c=t.x+t.width,u=t.x+t.width/2,d=t.y,h=t.y+t.height,f=t.y+t.height/2,_=!i,m=_?[a,c,u]:[...i.left?[a]:[],...i.right?[c]:[]],p=_?[d,h,f]:[...i.top?[d]:[],...i.bottom?[h]:[]],C=[];for(const J of e)n.has(J.id)||C.push(J);l&&C.push(...l);for(const J of C){const V=J.x,pe=J.x+J.width,oe=J.x+J.width/2,ae=J.y,$=J.y+J.height,F=J.y+J.height/2;for(const H of m)for(const te of[V,pe,oe]){const D=te-H;Math.abs(D)<yd&&Math.abs(D)<Math.abs(o)&&(o=D)}for(const H of p)for(const te of[ae,$,F]){const D=te-H;Math.abs(D)<yd&&Math.abs(D)<Math.abs(s)&&(s=D)}}const g=Math.abs(o)<yd?o:0,y=Math.abs(s)<yd?s:0,b=[],x=new Set,M=a+g,R=c+g,k=u+g,N=d+y,L=h+y,A=f+y;for(const J of C){const V=J.x,pe=J.x+J.width,oe=J.x+J.width/2,ae=J.y,$=J.y+J.height,F=J.y+J.height/2;for(const H of[V,oe,pe])for(const te of[M,k,R])if(Math.abs(te-H)<.5){const D=`x:${Math.round(H)}`;x.has(D)||(x.add(D),b.push({axis:"x",pos:H}))}for(const H of[ae,F,$])for(const te of[N,A,L])if(Math.abs(te-H)<.5){const D=`y:${Math.round(H)}`;x.has(D)||(x.add(D),b.push({axis:"y",pos:H}))}}return{dx:g,dy:y,guides:b}}function E1(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function X8({placements:t,onChange:e,activeComponent:n,onActiveComponentChange:i,isDarkMode:l,exiting:o,onInteractionChange:s,className:a,passthrough:c,extraSnapRects:u,onSelectionChange:d,deselectSignal:h,onDragMove:f,onDragEnd:_,clearSignal:m,wireframe:p}){const[C,g]=S.useState(new Set),[y,b]=S.useState(null),[x,M]=S.useState(null),[R,k]=S.useState(null),[N,L]=S.useState([]),[A,J]=S.useState(null),[V,pe]=S.useState(!1),oe=S.useRef(!1),[ae,$]=S.useState(new Set),F=S.useRef(new Map),H=S.useRef(null),te=S.useRef(null),D=S.useRef(t);D.current=t;const De=S.useRef(d);De.current=d;const _t=S.useRef(f);_t.current=f;const St=S.useRef(_);St.current=_;const st=S.useRef(h);S.useEffect(()=>{h!==st.current&&(st.current=h,g(new Set))},[h]);const xt=S.useRef(m);S.useEffect(()=>{if(m!==void 0&&m!==xt.current){xt.current=m;const U=new Set(D.current.map(ye=>ye.id));U.size>0&&($(U),g(new Set),te.current=null,ze(()=>{e([]),$(new Set)},180))}},[m,e]),S.useEffect(()=>{const U=ye=>{const Oe=ye.target;if(!(Oe.tagName==="INPUT"||Oe.tagName==="TEXTAREA"||Oe.isContentEditable)){if((ye.key==="Backspace"||ye.key==="Delete")&&C.size>0){ye.preventDefault();const Ve=new Set(C);$(Ve),g(new Set),ze(()=>{e(D.current.filter($e=>!Ve.has($e.id))),$(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ye.key)&&C.size>0){ye.preventDefault();const Ve=ye.shiftKey?20:1,$e=ye.key==="ArrowLeft"?-Ve:ye.key==="ArrowRight"?Ve:0,Ke=ye.key==="ArrowUp"?-Ve:ye.key==="ArrowDown"?Ve:0;e(t.map(je=>C.has(je.id)?{...je,x:Math.max(0,je.x+$e),y:Math.max(0,je.y+Ke)}:je));return}if(ye.key==="Escape"){n?i(null):C.size>0&&g(new Set);return}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[C,n,t,e,i]);const Pt=S.useCallback(U=>{if(U.button!==0||c||U.target.closest(`.${Q.placement}`))return;U.preventDefault(),U.stopPropagation();const Oe=window.scrollY,_e=U.clientX,Ve=U.clientY;if(n){te.current="place",s==null||s(!0);let $e=!1,Ke=_e,je=Ve;const tt=he=>{Ke=he.clientX,je=he.clientY;const z=Math.abs(Ke-_e),B=Math.abs(je-Ve);if((z>5||B>5)&&($e=!0),$e){const W=Math.min(_e,Ke),I=Math.min(Ve,je),ve=Math.abs(Ke-_e),de=Math.abs(je-Ve);b({x:W,y:I,w:ve,h:de}),k({x:he.clientX+12,y:he.clientY+12,text:`${Math.round(ve)} × ${Math.round(de)}`})}},Qe=he=>{window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",Qe),b(null),k(null),te.current=null,s==null||s(!1);const z=ge[n];let B,W,I,ve;$e?(B=Math.min(_e,Ke),W=Math.min(Ve,je)+Oe,I=Math.max(Rr,Math.abs(Ke-_e)),ve=Math.max(Rr,Math.abs(je-Ve))):(I=z.width,ve=z.height,B=_e-I/2,W=Ve+Oe-ve/2),B=Math.max(0,B),W=Math.max(0,W);const de={id:E1(),type:n,x:B,y:W,width:I,height:ve,scrollY:Oe,timestamp:Date.now()},ne=[...t,de];e(ne),g(new Set([de.id])),i(null)};window.addEventListener("mousemove",tt),window.addEventListener("mouseup",Qe)}else{U.shiftKey||g(new Set),te.current="select";let $e=!1;const Ke=tt=>{const Qe=Math.abs(tt.clientX-_e),he=Math.abs(tt.clientY-Ve);if((Qe>4||he>4)&&($e=!0),$e){const z=Math.min(_e,tt.clientX),B=Math.min(Ve,tt.clientY);M({x:z,y:B,w:Math.abs(tt.clientX-_e),h:Math.abs(tt.clientY-Ve)})}},je=tt=>{if(window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",je),te.current=null,$e){const Qe=Math.min(_e,tt.clientX),he=Math.min(Ve,tt.clientY)+Oe,z=Math.abs(tt.clientX-_e),B=Math.abs(tt.clientY-Ve),W=new Set(U.shiftKey?C:new Set);for(const I of t)I.y-Oe,I.x+I.width>Qe&&I.x<Qe+z&&I.y+I.height>he&&I.y<he+B&&W.add(I.id);g(W)}M(null)};window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",je)}},[n,c,t,e,C]),Ct=S.useCallback((U,ye)=>{var de;if(U.button!==0)return;const Oe=U.target;if(Oe.closest(`.${Q.handle}`)||Oe.closest(`.${Q.deleteButton}`))return;U.preventDefault(),U.stopPropagation();let _e;U.shiftKey?(_e=new Set(C),_e.has(ye)?_e.delete(ye):_e.add(ye)):C.has(ye)?_e=new Set(C):_e=new Set([ye]),g(_e),(_e.size!==C.size||[..._e].some(ne=>!C.has(ne)))&&((de=De.current)==null||de.call(De,_e,U.shiftKey));const $e=U.clientX,Ke=U.clientY,je=new Map;for(const ne of t)_e.has(ne.id)&&je.set(ne.id,{x:ne.x,y:ne.y});te.current="move",s==null||s(!0);let tt=!1,Qe=!1,he=t,z=0,B=0;const W=new Map;for(const ne of t)je.has(ne.id)&&W.set(ne.id,{w:ne.width,h:ne.height});const I=ne=>{var ke;const Pe=ne.clientX-$e,Ae=ne.clientY-Ke;if((Math.abs(Pe)>2||Math.abs(Ae)>2)&&(tt=!0),!tt)return;if(ne.altKey&&!Qe){Qe=!0;const Z=[];for(const we of t)je.has(we.id)&&Z.push({...we,id:E1(),timestamp:Date.now()});he=[...t,...Z]}let Je=1/0,se=1/0,fe=-1/0,qe=-1/0;for(const[Z,we]of je){const ie=W.get(Z);ie&&(Je=Math.min(Je,we.x+Pe),se=Math.min(se,we.y+Ae),fe=Math.max(fe,we.x+Pe+ie.w),qe=Math.max(qe,we.y+Ae+ie.h))}const Fe={x:Je,y:se,width:fe-Je,height:qe-se},{dx:jt,dy:ce,guides:nt}=T1(Fe,he,new Set(je.keys()),void 0,u);L(nt);const He=Pe+jt,We=Ae+ce;z=He,B=We,e(he.map(Z=>{const we=je.get(Z.id);return we?{...Z,x:Math.max(0,we.x+He),y:Math.max(0,we.y+We)}:Z})),(ke=_t.current)==null||ke.call(_t,He,We)},ve=()=>{var ne;window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",ve),te.current=null,s==null||s(!1),L([]),(ne=St.current)==null||ne.call(St,z,B,tt)};window.addEventListener("mousemove",I),window.addEventListener("mouseup",ve)},[C,t,e,s]),Ft=S.useCallback((U,ye,Oe)=>{U.preventDefault(),U.stopPropagation();const _e=t.find(W=>W.id===ye);if(!_e)return;g(new Set([ye])),te.current="resize",s==null||s(!0);const Ve=U.clientX,$e=U.clientY,Ke=_e.width,je=_e.height,tt=_e.x,Qe=_e.y,he={left:Oe.includes("w"),right:Oe.includes("e"),top:Oe.includes("n"),bottom:Oe.includes("s")},z=W=>{const I=W.clientX-Ve,ve=W.clientY-$e;let de=Ke,ne=je,Pe=tt,Ae=Qe;Oe.includes("e")&&(de=Math.max(Rr,Ke+I)),Oe.includes("w")&&(de=Math.max(Rr,Ke-I),Pe=tt+Ke-de),Oe.includes("s")&&(ne=Math.max(Rr,je+ve)),Oe.includes("n")&&(ne=Math.max(Rr,je-ve),Ae=Qe+je-ne);const Je={x:Pe,y:Ae,width:de,height:ne},{dx:se,dy:fe,guides:qe}=T1(Je,D.current,new Set([ye]),he,u);L(qe),se!==0&&(he.right?de+=se:he.left&&(Pe+=se,de-=se)),fe!==0&&(he.bottom?ne+=fe:he.top&&(Ae+=fe,ne-=fe)),e(D.current.map(Fe=>Fe.id===ye?{...Fe,x:Pe,y:Ae,width:de,height:ne}:Fe)),k({x:W.clientX+12,y:W.clientY+12,text:`${Math.round(de)} × ${Math.round(ne)}`})},B=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",B),k(null),te.current=null,s==null||s(!1),L([])};window.addEventListener("mousemove",z),window.addEventListener("mouseup",B)},[t,e,s]),Zt=S.useCallback(U=>{te.current=null,$(ye=>{const Oe=new Set(ye);return Oe.add(U),Oe}),g(ye=>{const Oe=new Set(ye);return Oe.delete(U),Oe}),ze(()=>{e(D.current.filter(ye=>ye.id!==U)),$(ye=>{const Oe=new Set(ye);return Oe.delete(U),Oe})},180)},[e]),Zn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},zt=S.useCallback(U=>{const ye=t.find(Oe=>Oe.id===U);ye&&(oe.current=!!ye.text,J(U),pe(!1))},[t]),ot=S.useCallback(()=>{A&&(pe(!0),ze(()=>{J(null),pe(!1)},150))},[A]);S.useEffect(()=>{o&&A&&ot()},[o]);const Ne=S.useCallback(U=>{A&&(e(t.map(ye=>ye.id===A?{...ye,text:U.trim()||void 0}:ye)),ot())},[A,t,e,ot]),rt=typeof window<"u"?window.scrollY:0,an=["nw","ne","se","sw"],cn=p?"#f97316":"#3c82f7",Y=[{dir:"n",cls:Q.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:cn})})},{dir:"e",cls:Q.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:cn})})},{dir:"s",cls:Q.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:cn})})},{dir:"w",cls:Q.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:cn})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:H,className:`${Q.overlay} ${l?"":Q.light} ${n?Q.placing:""} ${c?Q.passthrough:""} ${o?Q.overlayExiting:""} ${p?Q.wireframe:""}${a?` ${a}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Pt,children:t.map(U=>{var Ve;const ye=C.has(U.id),Oe=((Ve=Rl[U.type])==null?void 0:Ve.label)||U.type,_e=U.y-rt;return r.jsxs("div",{"data-design-placement":U.id,className:`${Q.placement} ${ye?Q.selected:""} ${ae.has(U.id)?Q.exiting:""}`,style:{left:U.x,top:_e,width:U.width,height:U.height,position:"fixed"},onMouseDown:$e=>Ct($e,U.id),onDoubleClick:()=>zt(U.id),children:[r.jsx("span",{className:Q.placementLabel,children:Oe}),r.jsx("span",{className:`${Q.placementAnnotation} ${U.text?Q.annotationVisible:""}`,children:(U.text&&F.current.set(U.id,U.text),U.text||F.current.get(U.id)||"")}),r.jsx("div",{className:Q.placementContent,children:r.jsx(H8,{type:U.type,width:U.width,height:U.height,text:U.text})}),r.jsx("div",{className:Q.deleteButton,onMouseDown:$e=>$e.stopPropagation(),onClick:()=>Zt(U.id),children:"✕"}),an.map($e=>r.jsx("div",{className:`${Q.handle} ${Q[`handle${$e.charAt(0).toUpperCase()}${$e.slice(1)}`]}`,onMouseDown:Ke=>Ft(Ke,U.id,$e)},$e)),Y.map(({dir:$e,cls:Ke,arrow:je})=>r.jsx("div",{className:`${Q.edgeHandle} ${Ke}`,onMouseDown:tt=>Ft(tt,U.id,$e),children:je},$e))]},U.id)})}),A&&(()=>{var Qe;const U=t.find(he=>he.id===A);if(!U)return null;const ye=U.y-rt,Oe=U.x+U.width/2,_e=ye-8,Ve=ye+U.height+8,$e=_e>200,Ke=Ve<window.innerHeight-100,je=Math.max(160,Math.min(window.innerWidth-160,Oe));let tt;return $e?tt={left:je,bottom:window.innerHeight-_e}:Ke?tt={left:je,top:Ve}:tt={left:je,top:Math.max(80,window.innerHeight/2-80)},r.jsx(Uf,{element:((Qe=Rl[U.type])==null?void 0:Qe.label)||U.type,placeholder:Zn[U.type]||"Label or content text",initialValue:U.text??"",submitLabel:oe.current?"Save":"Set",onSubmit:Ne,onCancel:ot,onDelete:oe.current?()=>{Ne("")}:void 0,isExiting:V,lightMode:!l,style:tt})})(),y&&r.jsx("div",{className:Q.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),x&&r.jsx("div",{className:Q.selectBox,style:{left:x.x,top:x.y,width:x.w,height:x.h},"data-feedback-toolbar":!0}),R&&r.jsx("div",{className:Q.sizeIndicator,style:{left:R.x,top:R.y},"data-feedback-toolbar":!0,children:R.text}),N.map((U,ye)=>r.jsx("div",{className:Q.guideLine,style:U.axis==="x"?{position:"fixed",left:U.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:U.pos-rt,right:0,height:1},"data-feedback-toolbar":!0},`${U.axis}-${U.pos}-${ye}`))]})}function I8(t){if(!t)return"";const e=t.scrollTop>2,n=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${e?Q.fadeTop:""} ${n?Q.fadeBottom:""}`}var w="currentColor",q="0.5";function q8({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:w,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:w,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:w,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:w,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:w,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:w,strokeWidth:q})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:w,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:w,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:w,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:w,strokeWidth:q})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:w,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:w,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:w,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:w,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:w,strokeWidth:q,fill:w,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:w,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:w,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:q})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:w,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:w,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:w,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:w,strokeWidth:q})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:w,strokeWidth:q,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:w,strokeWidth:q,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:w,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:w,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:w,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:w,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:w,strokeWidth:q})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:w,strokeWidth:q})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:w,strokeWidth:q,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:w,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:w,strokeWidth:q})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:w,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:w,strokeWidth:q,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:w,strokeWidth:q,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:w,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:w,opacity:".15",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:q})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:w,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:w,strokeWidth:q})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:w,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:w,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:w,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:w,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:w,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:w,strokeWidth:q,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:w,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:w,strokeWidth:q})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:w,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:w,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:w,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:w,strokeWidth:q})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:w,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:w,opacity:".2",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:w,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:w,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:w,strokeWidth:q})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:w,strokeWidth:q,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:w,strokeWidth:q,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:w,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:w,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:w,strokeWidth:q,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:w,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:w,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:w,opacity:".15",stroke:w,strokeWidth:q})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:w,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:w,opacity:".2",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:w,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:q,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:w,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:w,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:w,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:w,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:w,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:q}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:w,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:w,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:w,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:w,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:w,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:w,strokeWidth:q,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:w,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:w,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:w,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:w,strokeWidth:q})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:w,strokeWidth:q,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:w,strokeWidth:q})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:w,strokeWidth:q,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:w,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:w,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:w,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:w,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:w,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:q})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:w,strokeWidth:q,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:w,strokeWidth:q}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:w,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:w,strokeWidth:q})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:w,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:w,strokeWidth:q,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:w,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:w,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:w,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:w,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:w,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:w,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:w,opacity:".08",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:w,strokeWidth:q,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:w,strokeWidth:q,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:w,strokeWidth:q,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:w,strokeWidth:q,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:w,strokeWidth:q,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:w,strokeWidth:q,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:w,strokeWidth:q,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:w,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:w,strokeWidth:q,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:w,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:w,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:w,strokeWidth:q}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:w,opacity:".2"})]});default:return null}}function W8({activeType:t,onSelect:e,onDragStart:n,scrollRef:i,fadeClass:l,blankCanvas:o}){return r.jsx("div",{ref:i,className:`${Q.placeScroll} ${l||""}`,children:Cv.map(s=>r.jsxs("div",{className:Q.paletteSection,children:[r.jsx("div",{className:Q.paletteSectionTitle,children:s.section}),s.items.map(a=>r.jsxs("div",{className:`${Q.paletteItem} ${t===a.type?Q.active:""} ${o?Q.wireframe:""}`,onClick:()=>e(a.type),onMouseDown:c=>{c.button===0&&n(a.type,c)},children:[r.jsx("div",{className:Q.paletteItemIcon,children:r.jsx(q8,{type:a.type})}),r.jsx("span",{className:Q.paletteItemLabel,children:a.label})]},a.type))]},s.section))})}function Q8({value:t,suffix:e}){const[n,i]=S.useState(null),[l,o]=S.useState(e),[s,a]=S.useState("up"),c=S.useRef(t),u=S.useRef(e),d=S.useRef(),h=n!==null&&l!==e;return S.useEffect(()=>{if(t!==c.current){if(t===0){c.current=t,u.current=e,i(null);return}a(t>c.current?"up":"down"),i(c.current),o(u.current),c.current=t,u.current=e,clearTimeout(d.current),d.current=ze(()=>i(null),250)}else u.current=e},[t,e]),n===null?r.jsxs(r.Fragment,{children:[t,e?` ${e}`:""]}):h?r.jsxs("span",{className:Q.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",e]}),r.jsxs("span",{className:`${Q.rollingNum} ${s==="up"?Q.exitUp:Q.exitDown}`,children:[n," ",l]},`o${n}-${t}`),r.jsxs("span",{className:`${Q.rollingNum} ${s==="up"?Q.enterUp:Q.enterDown}`,children:[t," ",e]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:Q.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${Q.rollingNum} ${s==="up"?Q.exitUp:Q.exitDown}`,children:n},`o${n}-${t}`),r.jsx("span",{className:`${Q.rollingNum} ${s==="up"?Q.enterUp:Q.enterDown}`,children:t},`n${t}`)]}),e?` ${e}`:""]})}function G8({activeType:t,onSelect:e,isDarkMode:n,sectionCount:i,onDetectSections:l,visible:o,onExited:s,placementCount:a,onClearPlacements:c,onDragStart:u,blankCanvas:d,onBlankCanvasChange:h,wireframePurpose:f,onWireframePurposeChange:_,Tooltip:m}){const[p,C]=S.useState(!1),[g,y]=S.useState("exit"),[b,x]=S.useState(!1),[M,R]=S.useState(!0),k=S.useRef(0),N=S.useRef(""),L=S.useRef(0),A=S.useRef(),J=S.useRef(null),[V,pe]=S.useState("");S.useEffect(()=>(o?(C(!0),clearTimeout(A.current),cancelAnimationFrame(L.current),L.current=ea(()=>{L.current=ea(()=>{y("enter")})})):(cancelAnimationFrame(L.current),y("exit"),clearTimeout(A.current),A.current=ze(()=>{C(!1),s==null||s()},200)),()=>cancelAnimationFrame(L.current)),[o]);const oe=a>0||i>0,ae=a+i;return ae>0&&(k.current=ae,N.current=d?ae===1?"Component":"Components":ae===1?"Change":"Changes"),S.useEffect(()=>{if(oe)b?R(!1):(R(!0),x(!0),ea(()=>{ea(()=>{R(!1)})}));else{R(!0);const $=ze(()=>x(!1),300);return()=>clearTimeout($)}},[oe]),S.useEffect(()=>{if(!p)return;const $=J.current;if(!$)return;const F=()=>pe(I8($));F(),$.addEventListener("scroll",F,{passive:!0});const H=new ResizeObserver(F);return H.observe($),()=>{$.removeEventListener("scroll",F),H.disconnect()}},[p]),p?r.jsxs("div",{className:`${Q.palette} ${Q[g]} ${n?"":Q.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation(),onTransitionEnd:$=>{$.target===$.currentTarget&&(o||(clearTimeout(A.current),C(!1),y("exit"),s==null||s()))},children:[r.jsxs("div",{className:Q.paletteHeader,children:[r.jsx("div",{className:Q.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:Q.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${Q.canvasToggle} ${d?Q.active:""}`,onClick:()=>h(!d),children:[r.jsx("span",{className:Q.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:Q.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${Q.wireframePurposeWrap} ${d?"":Q.collapsed}`,children:r.jsx("div",{className:Q.wireframePurposeInner,children:r.jsx("textarea",{className:Q.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:f,onChange:$=>_($.target.value),rows:2})})}),r.jsx(W8,{activeType:t,onSelect:e,onDragStart:u,scrollRef:J,fadeClass:V,blankCanvas:d}),b&&r.jsx("div",{className:`${Q.paletteFooterWrap} ${M?Q.footerHidden:""}`,children:r.jsx("div",{className:Q.paletteFooterInner,children:r.jsx("div",{className:Q.paletteFooterInnerContent,children:r.jsxs("div",{className:Q.paletteFooter,children:[r.jsx("span",{className:Q.paletteFooterCount,children:r.jsx(Q8,{value:k.current,suffix:N.current})}),r.jsx("button",{className:Q.paletteFooterClear,onClick:c,children:"Clear"})]})})})})]}):null}function Oa(t){if(t.parentElement)return t.parentElement;const e=t.getRootNode();return e instanceof ShadowRoot?e.host:null}function gi(t,e){let n=t;for(;n;){if(n.matches(e))return n;n=Oa(n)}return null}function V8(t,e=4){const n=[];let i=t,l=0;for(;i&&l<e;){const o=i.tagName.toLowerCase();if(o==="html"||o==="body")break;let s=o;if(i.id)s=`#${i.id}`;else if(i.className&&typeof i.className=="string"){const c=i.className.split(/\s+/).find(u=>u.length>2&&!u.match(/^[a-z]{1,2}$/)&&!u.match(/[A-Z0-9]{5,}/));c&&(s=`.${c.split("_")[0]}`)}const a=Oa(i);!i.parentElement&&a&&(s=`⟨shadow⟩ ${s}`),n.unshift(s),i=a,l++}return n.join(" > ")}function ma(t){var i,l,o,s,a,c,u,d;const e=V8(t);if(t.dataset.element)return{name:t.dataset.element,path:e};const n=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){const h=gi(t,"svg");if(h){const f=Oa(h);if(f instanceof HTMLElement)return{name:`graphic in ${ma(f).name}`,path:e}}return{name:"graphic element",path:e}}if(n==="svg"){const h=Oa(t);if((h==null?void 0:h.tagName.toLowerCase())==="button"){const f=(i=h.textContent)==null?void 0:i.trim();return{name:f?`icon in "${f}" button`:"button icon",path:e}}return{name:"icon",path:e}}if(n==="button"){const h=(l=t.textContent)==null?void 0:l.trim(),f=t.getAttribute("aria-label");return f?{name:`button [${f}]`,path:e}:{name:h?`button "${h.slice(0,25)}"`:"button",path:e}}if(n==="a"){const h=(o=t.textContent)==null?void 0:o.trim(),f=t.getAttribute("href");return h?{name:`link "${h.slice(0,25)}"`,path:e}:f?{name:`link to ${f.slice(0,30)}`,path:e}:{name:"link",path:e}}if(n==="input"){const h=t.getAttribute("type")||"text",f=t.getAttribute("placeholder"),_=t.getAttribute("name");return f?{name:`input "${f}"`,path:e}:_?{name:`input [${_}]`,path:e}:{name:`${h} input`,path:e}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){const h=(s=t.textContent)==null?void 0:s.trim();return{name:h?`${n} "${h.slice(0,35)}"`:n,path:e}}if(n==="p"){const h=(a=t.textContent)==null?void 0:a.trim();return h?{name:`paragraph: "${h.slice(0,40)}${h.length>40?"...":""}"`,path:e}:{name:"paragraph",path:e}}if(n==="span"||n==="label"){const h=(c=t.textContent)==null?void 0:c.trim();return h&&h.length<40?{name:`"${h}"`,path:e}:{name:n,path:e}}if(n==="li"){const h=(u=t.textContent)==null?void 0:u.trim();return h&&h.length<40?{name:`list item: "${h.slice(0,35)}"`,path:e}:{name:"list item",path:e}}if(n==="blockquote")return{name:"blockquote",path:e};if(n==="code"){const h=(d=t.textContent)==null?void 0:d.trim();return h&&h.length<30?{name:`code: \`${h}\``,path:e}:{name:"code",path:e}}if(n==="pre")return{name:"code block",path:e};if(n==="img"){const h=t.getAttribute("alt");return{name:h?`image "${h.slice(0,30)}"`:"image",path:e}}if(n==="video")return{name:"video",path:e};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){const h=t.className,f=t.getAttribute("role"),_=t.getAttribute("aria-label");if(_)return{name:`${n} [${_}]`,path:e};if(f)return{name:`${f}`,path:e};if(typeof h=="string"&&h){const m=h.split(/[\s_-]+/).map(p=>p.replace(/[A-Z0-9]{5,}.*$/,"")).filter(p=>p.length>2&&!/^[a-z]{1,2}$/.test(p)).slice(0,2);if(m.length>0)return{name:m.join(" "),path:e}}return{name:n==="div"?"container":n,path:e}}return{name:n,path:e}}function sc(t){var o,s,a;const e=[],n=(o=t.textContent)==null?void 0:o.trim();n&&n.length<100&&e.push(n);const i=t.previousElementSibling;if(i){const c=(s=i.textContent)==null?void 0:s.trim();c&&c.length<50&&e.unshift(`[before: "${c.slice(0,40)}"]`)}const l=t.nextElementSibling;if(l){const c=(a=l.textContent)==null?void 0:a.trim();c&&c.length<50&&e.push(`[after: "${c.slice(0,40)}"]`)}return e.join(" ")}function xd(t){const e=Oa(t);if(!e)return"";const l=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(e.children)).filter(d=>d!==t&&d instanceof HTMLElement);if(l.length===0)return"";const o=l.slice(0,4).map(d=>{var m;const h=d.tagName.toLowerCase(),f=d.className;let _="";if(typeof f=="string"&&f){const p=f.split(/\s+/).map(C=>C.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C));p&&(_=`.${p}`)}if(h==="button"||h==="a"){const p=(m=d.textContent)==null?void 0:m.trim().slice(0,15);if(p)return`${h}${_} "${p}"`}return`${h}${_}`});let a=e.tagName.toLowerCase();if(typeof e.className=="string"&&e.className){const d=e.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2&&!/^[a-z]{1,2}$/.test(h));d&&(a=`.${d}`)}const c=e.children.length,u=c>o.length+1?` (${c} total in ${a})`:"";return o.join(", ")+u}function rc(t){const e=t.className;return typeof e!="string"||!e?"":e.split(/\s+/).filter(i=>i.length>0).map(i=>{const l=i.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return l?l[1]:i}).filter((i,l,o)=>o.indexOf(i)===l).join(", ")}var jv=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),P8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),F8=new Set(["input","textarea","select"]),Z8=new Set(["img","video","canvas","svg"]),K8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function bd(t){if(typeof window>"u")return{};const e=window.getComputedStyle(t),n={},i=t.tagName.toLowerCase();let l;P8.has(i)?l=["color","fontSize","fontWeight","fontFamily","lineHeight"]:i==="button"||i==="a"&&t.getAttribute("role")==="button"?l=["backgroundColor","color","padding","borderRadius","fontSize"]:F8.has(i)?l=["backgroundColor","color","padding","borderRadius","fontSize"]:Z8.has(i)?l=["width","height","objectFit","borderRadius"]:K8.has(i)?l=["display","padding","margin","gap","backgroundColor"]:l=["color","fontSize","margin","padding","backgroundColor"];for(const o of l){const s=o.replace(/([A-Z])/g,"-$1").toLowerCase(),a=e.getPropertyValue(s);a&&!jv.has(a)&&(n[o]=a)}return n}var J8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function vd(t){if(typeof window>"u")return"";const e=window.getComputedStyle(t),n=[];for(const i of J8){const l=i.replace(/([A-Z])/g,"-$1").toLowerCase(),o=e.getPropertyValue(l);o&&!jv.has(o)&&n.push(`${l}: ${o}`)}return n.join("; ")}function e7(t){if(!t)return;const e={},n=t.split(";").map(i=>i.trim()).filter(Boolean);for(const i of n){const l=i.indexOf(":");if(l>0){const o=i.slice(0,l).trim(),s=i.slice(l+1).trim();o&&s&&(e[o]=s)}}return Object.keys(e).length>0?e:void 0}function wd(t){const e=[],n=t.getAttribute("role"),i=t.getAttribute("aria-label"),l=t.getAttribute("aria-describedby"),o=t.getAttribute("tabindex"),s=t.getAttribute("aria-hidden");return n&&e.push(`role="${n}"`),i&&e.push(`aria-label="${i}"`),l&&e.push(`aria-describedby="${l}"`),o&&e.push(`tabindex=${o}`),s==="true"&&e.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&e.push("focusable"),e.join(", ")}function Sd(t){const e=[];let n=t;for(;n&&n.tagName.toLowerCase()!=="html";){const i=n.tagName.toLowerCase();let l=i;if(n.id)l=`${i}#${n.id}`;else if(n.className&&typeof n.className=="string"){const s=n.className.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2);s&&(l=`${i}.${s}`)}const o=Oa(n);!n.parentElement&&o&&(l=`⟨shadow⟩ ${l}`),e.unshift(l),n=o}return e.join(" > ")}var t7=new Set(["nav","header","main","section","article","footer","aside"]),nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},D1={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},n7=new Set(["script","style","noscript","link","meta"]),i7=40;function Mv(t){let e=t;for(;e&&e!==document.body&&e!==document.documentElement;){const n=window.getComputedStyle(e).position;if(n==="fixed"||n==="sticky")return!0;e=e.parentElement}return!1}function ur(t){const e=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(e)&&document.querySelectorAll(e).length===1)return e;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const l=t.className.split(/\s+/).filter(o=>o.length>0).find(o=>o.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(o)&&!/^[a-z]{1,2}$/.test(o));if(l){const o=`${e}.${CSS.escape(l)}`;if(document.querySelectorAll(o).length===1)return o}}const n=t.parentElement;if(n){const l=Array.from(n.children).indexOf(t)+1;return`${n===document.body?"body":ur(n)} > ${e}:nth-child(${l})`}return e}function Xf(t){var s;const e=t.tagName.toLowerCase(),n=t.getAttribute("aria-label");if(n)return n;const i=t.getAttribute("role");if(i&&nm[i])return nm[i];if(D1[e])return D1[e];const l=t.querySelector("h1, h2, h3, h4, h5, h6");if(l){const a=(s=l.textContent)==null?void 0:s.trim();if(a&&a.length<=50)return a;if(a)return a.slice(0,47)+"..."}const{name:o}=ma(t);return o.charAt(0).toUpperCase()+o.slice(1)}function Tv(t){const e=t.className;return typeof e!="string"||!e?null:e.split(/\s+/).map(i=>i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(i=>i.length>2&&!/^[a-z]{1,2}$/.test(i))||null}function Ev(t){var i;const e=(i=t.textContent)==null?void 0:i.trim();if(!e)return null;const n=e.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"…"}function l7(){const t=document.querySelector("main")||document.body,e=Array.from(t.children);let n=e;t!==document.body&&e.length<3&&(n=Array.from(document.body.children));const i=[];return n.forEach((l,o)=>{if(!(l instanceof HTMLElement))return;const s=l.tagName.toLowerCase();if(n7.has(s)||l.hasAttribute("data-feedback-toolbar")||l.closest("[data-feedback-toolbar]"))return;const a=window.getComputedStyle(l);if(a.display==="none"||a.visibility==="hidden")return;const c=l.getBoundingClientRect();if(c.height<i7)return;const u=t7.has(s),d=l.getAttribute("role")&&nm[l.getAttribute("role")],h=s==="div"&&c.height>=60;if(!u&&!d&&!h)return;const f=window.scrollY,_=Mv(l),m={x:c.x,y:_?c.y:c.y+f,width:c.width,height:c.height};i.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Xf(l),tagName:s,selector:ur(l),role:l.getAttribute("role"),className:Tv(l),textSnippet:Ev(l),originalRect:m,currentRect:{...m},originalIndex:o,isFixed:_})}),i}function o7(t){const e=window.scrollY,n=t.getBoundingClientRect(),i=Mv(t),l={x:n.x,y:i?n.y:n.y+e,width:n.width,height:n.height},o=t.parentElement;let s=0;return o&&(s=Array.from(o.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Xf(t),tagName:t.tagName.toLowerCase(),selector:ur(t),role:t.getAttribute("role"),className:Tv(t),textSnippet:Ev(t),originalRect:l,currentRect:{...l},originalIndex:s,isFixed:i}}var R1={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},z1=["nw","n","ne","e","se","s","sw","w"],kd=24,O1=16,Cd=5;function A1(t,e,n,i){let l=1/0,o=1/0;const s=t.x,a=t.x+t.width,c=t.x+t.width/2,u=t.y,d=t.y+t.height,h=t.y+t.height/2,f=[];for(const k of e)n.has(k.id)||f.push(k.currentRect);i&&f.push(...i);for(const k of f){const N=k.x,L=k.x+k.width,A=k.x+k.width/2,J=k.y,V=k.y+k.height,pe=k.y+k.height/2;for(const oe of[s,a,c])for(const ae of[N,L,A]){const $=ae-oe;Math.abs($)<Cd&&Math.abs($)<Math.abs(l)&&(l=$)}for(const oe of[u,d,h])for(const ae of[J,V,pe]){const $=ae-oe;Math.abs($)<Cd&&Math.abs($)<Math.abs(o)&&(o=$)}}const _=Math.abs(l)<Cd?l:0,m=Math.abs(o)<Cd?o:0,p=[],C=new Set,g=s+_,y=a+_,b=c+_,x=u+m,M=d+m,R=h+m;for(const k of f){const N=k.x,L=k.x+k.width,A=k.x+k.width/2,J=k.y,V=k.y+k.height,pe=k.y+k.height/2;for(const oe of[N,A,L])for(const ae of[g,b,y])if(Math.abs(ae-oe)<.5){const $=`x:${Math.round(oe)}`;C.has($)||(C.add($),p.push({axis:"x",pos:oe}))}for(const oe of[J,pe,V])for(const ae of[x,R,M])if(Math.abs(ae-oe)<.5){const $=`y:${Math.round(oe)}`;C.has($)||(C.add($),p.push({axis:"y",pos:oe}))}}return{dx:_,dy:m,guides:p}}var s7=new Set(["script","style","noscript","link","meta","br","hr"]);function N1(t){let e=t;for(;e&&e!==document.body&&e!==document.documentElement;){if(e.closest("[data-feedback-toolbar]"))return null;if(s7.has(e.tagName.toLowerCase())){e=e.parentElement;continue}const n=e.getBoundingClientRect();if(n.width>=O1&&n.height>=O1)return e;e=e.parentElement}return null}function r7({rearrangeState:t,onChange:e,isDarkMode:n,exiting:i,className:l,blankCanvas:o,extraSnapRects:s,onSelectionChange:a,deselectSignal:c,onDragMove:u,onDragEnd:d,clearSignal:h}){const{sections:f}=t,_=S.useRef(t);_.current=t;const[m,p]=S.useState(new Set),[C,g]=S.useState(!1),y=S.useRef(h);S.useEffect(()=>{h!==void 0&&h!==y.current&&(y.current=h,f.length>0&&g(!0))},[h,f.length]);const b=S.useRef(c);S.useEffect(()=>{c!==b.current&&(b.current=c,p(new Set))},[c]);const[x,M]=S.useState(null),[R,k]=S.useState(!1),N=S.useRef(!1),L=S.useCallback(z=>{const B=f.find(W=>W.id===z);B&&(N.current=!!B.note,M(z),k(!1))},[f]),A=S.useCallback(()=>{x&&(k(!0),ze(()=>{M(null),k(!1)},150))},[x]),J=S.useCallback(z=>{x&&(e({...t,sections:f.map(B=>B.id===x?{...B,note:z.trim()||void 0}:B)}),A())},[x,f,t,e,A]);S.useEffect(()=>{i&&x&&A()},[i]);const[V,pe]=S.useState(new Set),oe=S.useRef(new Map),[ae,$]=S.useState(null),[F,H]=S.useState(null),[te,D]=S.useState([]),[De,_t]=S.useState(0),St=S.useRef(null),st=S.useRef(new Set),xt=S.useRef(new Map),[Pt,Ct]=S.useState(new Map),[Ft,Zt]=S.useState(new Map),Zn=S.useRef(new Set),zt=S.useRef(new Map),ot=S.useRef(a);ot.current=a;const Ne=S.useRef(u);Ne.current=u;const rt=S.useRef(d);rt.current=d,S.useEffect(()=>{o&&p(new Set)},[o]);const[an,cn]=S.useState(()=>!t.sections.some(z=>{const B=z.originalRect,W=z.currentRect;return Math.abs(B.x-W.x)>1||Math.abs(B.y-W.y)>1||Math.abs(B.width-W.width)>1||Math.abs(B.height-W.height)>1}));S.useEffect(()=>{if(!an){const z=ze(()=>cn(!0),380);return()=>clearTimeout(z)}},[]);const Y=S.useRef(new Set);S.useEffect(()=>{Y.current=new Set(f.map(z=>z.selector))},[f]),S.useEffect(()=>{const z=()=>_t(window.scrollY);return z(),window.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",z,{passive:!0}),()=>{window.removeEventListener("scroll",z),window.removeEventListener("resize",z)}},[]),S.useEffect(()=>{const z=B=>{if(St.current){$(null);return}const W=document.elementFromPoint(B.clientX,B.clientY);if(!W){$(null);return}if(W.closest("[data-feedback-toolbar]")){$(null);return}if(W.closest("[data-design-placement]")){$(null);return}if(W.closest("[data-annotation-popup]")){$(null);return}const I=N1(W);if(!I){$(null);return}for(const de of Y.current)try{const ne=document.querySelector(de);if(ne&&(ne===I||I.contains(ne))){$(null);return}}catch{}const ve=I.getBoundingClientRect();$({x:ve.x,y:ve.y,w:ve.width,h:ve.height})};return document.addEventListener("mousemove",z,{passive:!0}),()=>document.removeEventListener("mousemove",z)},[f]),S.useEffect(()=>{const z=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=z}},[]),S.useEffect(()=>{const z=B=>{var ne,Pe,Ae,Je;if(St.current||B.button!==0)return;const W=B.target;if(!W||W.closest("[data-feedback-toolbar]")||W.closest("[data-design-placement]")||W.closest("[data-annotation-popup]"))return;const I=N1(W);let ve=!1;if(I)for(const se of Y.current)try{const fe=document.querySelector(se);if(fe&&(fe===I||I.contains(fe))){ve=!0;break}}catch{}const de=!!(B.shiftKey||B.metaKey||B.ctrlKey);if(I&&!ve){B.preventDefault(),B.stopPropagation();const se=o7(I),fe=[...f,se],qe=[...t.originalOrder,se.id];e({...t,sections:fe,originalOrder:qe});const Fe=new Set([se.id]);p(Fe),(ne=ot.current)==null||ne.call(ot,Fe,de),$(null);const jt=B.clientX,ce=B.clientY,nt={x:se.currentRect.x,y:se.currentRect.y};se.originalRect;let He=!1,We=0,ke=0;St.current="move";const Z=ie=>{var bt;const Me=ie.clientX-jt,me=ie.clientY-ce;if(!He&&(Math.abs(Me)>2||Math.abs(me)>2)&&(He=!0),!He)return;const Le={x:nt.x+Me,y:nt.y+me,width:se.currentRect.width,height:se.currentRect.height},Bt=A1(Le,fe,new Set([se.id]),s);D(Bt.guides);const Ye=Me+Bt.dx,Ze=me+Bt.dy;We=Ye,ke=Ze;const $t=document.querySelector(`[data-rearrange-section="${se.id}"]`);$t&&($t.style.transform=`translate(${Ye}px, ${Ze}px)`),Ct(new Map([[se.id,{x:nt.x+Ye,y:nt.y+Ze,width:se.currentRect.width,height:se.currentRect.height}]])),(bt=Ne.current)==null||bt.call(Ne,Ye,Ze)},we=()=>{var Me;window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",we),St.current=null,D([]),Ct(new Map);const ie=document.querySelector(`[data-rearrange-section="${se.id}"]`);ie&&(ie.style.transform=""),He&&e({...t,sections:fe.map(me=>me.id===se.id?{...me,currentRect:{...me.currentRect,x:Math.max(0,nt.x+We),y:Math.max(0,nt.y+ke)}}:me),originalOrder:qe}),(Me=rt.current)==null||Me.call(rt,We,ke,He)};window.addEventListener("mousemove",Z),window.addEventListener("mouseup",we)}else if(ve&&I){B.preventDefault();for(const se of f)try{const fe=document.querySelector(se.selector);if(fe&&fe===I){const qe=new Set([se.id]);p(qe),(Pe=ot.current)==null||Pe.call(ot,qe,de);return}}catch{}de||(p(new Set),(Ae=ot.current)==null||Ae.call(ot,new Set,!1))}else de||(p(new Set),(Je=ot.current)==null||Je.call(ot,new Set,!1))};return document.addEventListener("mousedown",z,!0),()=>document.removeEventListener("mousedown",z,!0)},[f,t,e]),S.useEffect(()=>{const z=B=>{const W=B.target;if(!(W.tagName==="INPUT"||W.tagName==="TEXTAREA"||W.isContentEditable)){if((B.key==="Backspace"||B.key==="Delete")&&m.size>0){B.preventDefault();const I=new Set(m);pe(ve=>{const de=new Set(ve);for(const ne of I)de.add(ne);return de}),p(new Set),ze(()=>{const ve=_.current;e({...ve,sections:ve.sections.filter(de=>!I.has(de.id)),originalOrder:ve.originalOrder.filter(de=>!I.has(de))}),pe(de=>{const ne=new Set(de);for(const Pe of I)ne.delete(Pe);return ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(B.key)&&m.size>0){B.preventDefault();const I=B.shiftKey?20:1,ve=B.key==="ArrowLeft"?-I:B.key==="ArrowRight"?I:0,de=B.key==="ArrowUp"?-I:B.key==="ArrowDown"?I:0;e({...t,sections:f.map(ne=>m.has(ne.id)?{...ne,currentRect:{...ne.currentRect,x:Math.max(0,ne.currentRect.x+ve),y:Math.max(0,ne.currentRect.y+de)}}:ne)});return}B.key==="Escape"&&m.size>0&&p(new Set)}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[m,f,t,e]);const U=S.useCallback((z,B)=>{var jt;if(z.button!==0)return;const W=z.target;if(W.closest(`.${Q.handle}`)||W.closest(`.${Q.deleteButton}`))return;z.preventDefault(),z.stopPropagation();let I;z.shiftKey||z.metaKey||z.ctrlKey?(I=new Set(m),I.has(B)?I.delete(B):I.add(B)):m.has(B)?I=new Set(m):I=new Set([B]),p(I),(I.size!==m.size||[...I].some(ce=>!m.has(ce)))&&((jt=ot.current)==null||jt.call(ot,I,!!(z.shiftKey||z.metaKey||z.ctrlKey)));const de=z.clientX,ne=z.clientY,Pe=new Map;for(const ce of f)I.has(ce.id)&&Pe.set(ce.id,{x:ce.currentRect.x,y:ce.currentRect.y});St.current="move";let Ae=!1,Je=0,se=0;const fe=new Map;for(const ce of f)if(I.has(ce.id)){const nt=document.querySelector(`[data-rearrange-section="${ce.id}"]`);fe.set(ce.id,{outlineEl:nt,curW:ce.currentRect.width,curH:ce.currentRect.height})}const qe=ce=>{var Bt;const nt=ce.clientX-de,He=ce.clientY-ne;if(nt===0&&He===0)return;Ae=!0;let We=1/0,ke=1/0,Z=-1/0,we=-1/0;for(const[Ye,{curW:Ze,curH:$t}]of fe){const bt=Pe.get(Ye);if(!bt)continue;const Mt=bt.x+nt,ee=bt.y+He;We=Math.min(We,Mt),ke=Math.min(ke,ee),Z=Math.max(Z,Mt+Ze),we=Math.max(we,ee+$t)}const ie=A1({x:We,y:ke,width:Z-We,height:we-ke},f,I,s),Me=nt+ie.dx,me=He+ie.dy;Je=Me,se=me,D(ie.guides);for(const[,{outlineEl:Ye}]of fe)Ye&&(Ye.style.transform=`translate(${Me}px, ${me}px)`);const Le=new Map;for(const[Ye,{curW:Ze,curH:$t}]of fe){const bt=Pe.get(Ye);if(bt){const Mt={x:Math.max(0,bt.x+Me),y:Math.max(0,bt.y+me),width:Ze,height:$t};Le.set(Ye,Mt)}}Ct(Le),(Bt=Ne.current)==null||Bt.call(Ne,Me,me)},Fe=ce=>{var nt,He;window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",Fe),St.current=null,D([]),Ct(new Map);for(const[,{outlineEl:We}]of fe)We&&(We.style.transform="");if(Ae){const We=ce.clientX-de,ke=ce.clientY-ne;if(Math.abs(We)<5&&Math.abs(ke)<5)e({...t,sections:f.map(Z=>{const we=Pe.get(Z.id);return we?{...Z,currentRect:{...Z.currentRect,x:we.x,y:we.y}}:Z})});else{e({...t,sections:f.map(Z=>{const we=Pe.get(Z.id);return we?{...Z,currentRect:{...Z.currentRect,x:Math.max(0,we.x+Je),y:Math.max(0,we.y+se)}}:Z})}),(nt=rt.current)==null||nt.call(rt,Je,se,!0);return}}(He=rt.current)==null||He.call(rt,0,0,!1)};window.addEventListener("mousemove",qe),window.addEventListener("mouseup",Fe)},[m,f,t,e]),ye=S.useCallback((z,B,W)=>{z.preventDefault(),z.stopPropagation();const I=f.find(qe=>qe.id===B);if(!I)return;p(new Set([B])),St.current="resize";const ve=z.clientX,de=z.clientY,ne={...I.currentRect};I.originalRect;const Pe=ne.width/ne.height;let Ae={...ne};const Je=document.querySelector(`[data-rearrange-section="${B}"]`),se=qe=>{const Fe=qe.clientX-ve,jt=qe.clientY-de;let ce=ne.x,nt=ne.y,He=ne.width,We=ne.height;if(W.includes("e")&&(He=Math.max(kd,ne.width+Fe)),W.includes("w")&&(He=Math.max(kd,ne.width-Fe),ce=ne.x+ne.width-He),W.includes("s")&&(We=Math.max(kd,ne.height+jt)),W.includes("n")&&(We=Math.max(kd,ne.height-jt),nt=ne.y+ne.height-We),qe.shiftKey)if(W.length===2){const Z=Math.abs(He-ne.width),we=Math.abs(We-ne.height);Z>we?We=He/Pe:He=We*Pe,W.includes("w")&&(ce=ne.x+ne.width-He),W.includes("n")&&(nt=ne.y+ne.height-We)}else W==="e"||W==="w"?We=He/Pe:He=We*Pe,W==="w"&&(ce=ne.x+ne.width-He),W==="n"&&(nt=ne.y+ne.height-We);Ae={x:ce,y:nt,width:He,height:We},Je&&(Je.style.left=`${ce}px`,Je.style.top=`${nt-De}px`,Je.style.width=`${He}px`,Je.style.height=`${We}px`),H({x:qe.clientX+12,y:qe.clientY+12,text:`${Math.round(He)} × ${Math.round(We)}`}),Ct(new Map([[B,Ae]]))},fe=()=>{window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",fe),H(null),St.current=null,Ct(new Map),e({...t,sections:f.map(qe=>qe.id===B?{...qe,currentRect:Ae}:qe)})};window.addEventListener("mousemove",se),window.addEventListener("mouseup",fe)},[f,t,e,De]),Oe=S.useCallback(z=>{pe(B=>{const W=new Set(B);return W.add(z),W}),p(B=>{const W=new Set(B);return W.delete(z),W}),ze(()=>{const B=_.current;e({...B,sections:B.sections.filter(W=>W.id!==z),originalOrder:B.originalOrder.filter(W=>W!==z)}),pe(W=>{const I=new Set(W);return I.delete(z),I})},180)},[e]),_e=z=>{const B=z.originalRect,W=z.currentRect;return Math.abs(B.x-W.x)>1||Math.abs(B.y-W.y)>1||Math.abs(B.width-W.width)>1||Math.abs(B.height-W.height)>1},Ve=z=>{const B=z.originalRect,W=z.currentRect;return Math.abs(B.x-W.x)>1||Math.abs(B.y-W.y)>1},$e=z=>{const B=z.originalRect,W=z.currentRect;return Math.abs(B.width-W.width)>1||Math.abs(B.height-W.height)>1};for(const z of f)xt.current.has(z.id)||(Ve(z)?xt.current.set(z.id,"move"):$e(z)&&xt.current.set(z.id,"resize"));for(const z of xt.current.keys())f.some(B=>B.id===z)||xt.current.delete(z);const Ke=f.filter(z=>{try{if(V.has(z.id)||m.has(z.id))return!0;const B=document.querySelector(z.selector);if(!B)return!1;const W=B.getBoundingClientRect(),I=z.originalRect;return Math.abs(W.width-I.width)+Math.abs(W.height-I.height)<200}catch{return!1}}),je=Ke.filter(z=>_e(z)),tt=Ke.filter(z=>!_e(z)),Qe=new Set(je.map(z=>z.id));for(const z of st.current)Qe.has(z)||st.current.delete(z);const he=[...Qe].sort().join(",");for(const z of je)zt.current.set(z.id,{currentRect:z.currentRect,originalRect:z.originalRect,isFixed:z.isFixed});return S.useEffect(()=>{const z=Zn.current;Zn.current=Qe;const B=new Map;for(const W of z)if(!Qe.has(W)){if(!f.some(ve=>ve.id===W))continue;const I=zt.current.get(W);I&&(B.set(W,{orig:I.originalRect,target:I.currentRect,isFixed:I.isFixed}),zt.current.delete(W))}if(B.size>0){Zt(I=>{const ve=new Map(I);for(const[de,ne]of B)ve.set(de,ne);return ve});const W=ze(()=>{Zt(I=>{const ve=new Map(I);for(const de of B.keys())ve.delete(de);return ve})},250);return()=>clearTimeout(W)}},[he,f]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${Q.rearrangeOverlay} ${n?"":Q.light} ${i?Q.overlayExiting:""}${l?` ${l}`:""}`,"data-feedback-toolbar":!0,children:[ae&&r.jsx("div",{className:Q.hoverHighlight,style:{left:ae.x,top:ae.y,width:ae.w,height:ae.h}}),tt.map(z=>{const B=z.currentRect,W=z.isFixed?B.y:B.y-De,I=R1,ve=m.has(z.id);return r.jsxs("div",{"data-rearrange-section":z.id,className:`${Q.sectionOutline} ${ve?Q.selected:""} ${C||i||V.has(z.id)?Q.exiting:""}`,style:{left:B.x,top:W,width:B.width,height:B.height,borderColor:I.border,backgroundColor:I.bg,...an?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:de=>U(de,z.id),onDoubleClick:()=>L(z.id),children:[r.jsx("span",{className:Q.sectionLabel,style:{backgroundColor:I.pill},children:z.label}),r.jsx("span",{className:`${Q.sectionAnnotation} ${z.note?Q.annotationVisible:""}`,children:(z.note&&oe.current.set(z.id,z.note),z.note||oe.current.get(z.id)||"")}),r.jsxs("span",{className:Q.sectionDimensions,children:[Math.round(B.width)," × ",Math.round(B.height)]}),r.jsx("div",{className:Q.deleteButton,onMouseDown:de=>de.stopPropagation(),onClick:()=>Oe(z.id),children:"✕"}),z1.map(de=>r.jsx("div",{className:`${Q.handle} ${Q[`handle${de.charAt(0).toUpperCase()}${de.slice(1)}`]}`,onMouseDown:ne=>ye(ne,z.id,de)},de))]},z.id)}),je.map(z=>{const B=z.currentRect,W=z.isFixed?B.y:B.y-De,I=m.has(z.id),ve=Ve(z),de=$e(z);if(o&&!I)return null;const Pe=!st.current.has(z.id);return Pe&&st.current.add(z.id),r.jsxs("div",{"data-rearrange-section":z.id,className:`${Q.ghostOutline} ${I?Q.selected:""} ${C||i||V.has(z.id)?Q.exiting:""}`,style:{left:B.x,top:W,width:B.width,height:B.height,...an?{}:{opacity:0,animation:"none",transition:"none"},...Pe?{}:{animation:"none"}},onMouseDown:Ae=>U(Ae,z.id),onDoubleClick:()=>L(z.id),children:[r.jsx("span",{className:Q.sectionLabel,style:{backgroundColor:R1.pill},children:z.label}),r.jsx("span",{className:`${Q.sectionAnnotation} ${z.note?Q.annotationVisible:""}`,children:(z.note&&oe.current.set(z.id,z.note),z.note||oe.current.get(z.id)||"")}),r.jsxs("span",{className:Q.sectionDimensions,children:[Math.round(B.width)," × ",Math.round(B.height)]}),r.jsx("div",{className:Q.deleteButton,onMouseDown:Ae=>Ae.stopPropagation(),onClick:()=>Oe(z.id),children:"✕"}),z1.map(Ae=>r.jsx("div",{className:`${Q.handle} ${Q[`handle${Ae.charAt(0).toUpperCase()}${Ae.slice(1)}`]}`,onMouseDown:Je=>ye(Je,z.id,Ae)},Ae)),r.jsx("span",{className:Q.ghostBadge,children:(()=>{const Ae=xt.current.get(z.id);if(ve&&de){const[Je,se]=Ae==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Je," ",r.jsxs("span",{className:Q.ghostBadgeExtra,children:["& ",se]})]})}return`Suggested ${de?"Resize":"Move"}`})()})]},z.id)})]}),!o&&(()=>{const z=[];for(const B of je){const W=Pt.get(B.id);z.push({id:B.id,orig:B.originalRect,target:W||B.currentRect,isFixed:B.isFixed,isSelected:m.has(B.id),isExiting:V.has(B.id)})}for(const[B,W]of Pt)if(!z.some(I=>I.id===B)){const I=f.find(ve=>ve.id===B);I&&z.push({id:B,orig:I.originalRect,target:W,isFixed:I.isFixed,isSelected:m.has(B)})}for(const[B,W]of Ft)z.some(I=>I.id===B)||z.push({id:B,orig:W.orig,target:W.target,isFixed:W.isFixed,isSelected:!1,isExiting:!0});return z.length===0?null:r.jsxs("svg",{className:`${Q.connectorSvg} ${C||i?Q.connectorExiting:""}`,children:[z.map(({id:B,orig:W,target:I,isFixed:ve,isSelected:de,isExiting:ne})=>{const Pe=W.x+W.width/2,Ae=(ve?W.y:W.y-De)+W.height/2,Je=I.x+I.width/2,se=(ve?I.y:I.y-De)+I.height/2,fe=Je-Pe,qe=se-Ae,Fe=Math.sqrt(fe*fe+qe*qe);if(Fe<2)return null;const jt=Math.min(1,Fe/40),ce=Math.min(Fe*.3,60),nt=Fe>0?-qe/Fe:0,He=Fe>0?fe/Fe:0,We=(Pe+Je)/2+nt*ce,ke=(Ae+se)/2+He*ce,Z=Pt.has(B),we=Z||de?1:.4,ie=Z||de?1:.5;return r.jsxs("g",{className:ne?Q.connectorExiting:"",children:[r.jsx("path",{className:Q.connectorLine,d:`M ${Pe} ${Ae} Q ${We} ${ke} ${Je} ${se}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:we*jt}),r.jsx("circle",{className:Q.connectorDot,cx:Pe,cy:Ae,r:4*jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ie*jt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:Q.connectorDot,cx:Je,cy:se,r:4*jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ie*jt,filter:"url(#connDotShadow)"})]},`conn-${B}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),x&&(()=>{const z=f.find(se=>se.id===x);if(!z)return null;const B=z.currentRect,W=z.isFixed?B.y:B.y-De,I=B.x+B.width/2,ve=W-8,de=W+B.height+8,ne=ve>200,Pe=de<window.innerHeight-100,Ae=Math.max(160,Math.min(window.innerWidth-160,I));let Je;return ne?Je={left:Ae,bottom:window.innerHeight-ve}:Pe?Je={left:Ae,top:de}:Je={left:Ae,top:Math.max(80,window.innerHeight/2-80)},r.jsx(Uf,{element:z.label,placeholder:"Add a note about this section",initialValue:z.note??"",submitLabel:N.current?"Save":"Set",onSubmit:J,onCancel:A,onDelete:N.current?()=>{J("")}:void 0,isExiting:R,lightMode:!n,style:Je})})(),F&&r.jsx("div",{className:Q.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),te.map((z,B)=>r.jsx("div",{className:Q.guideLine,style:z.axis==="x"?{position:"fixed",left:z.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:z.pos-De,width:"100vw",height:1}},`${z.axis}-${z.pos}-${B}`))]})}var im=new Set(["script","style","noscript","link","meta","br","hr"]);function a7(){const t=document.querySelector("main")||document.body,e=[],n=Array.from(t.children),i=t!==document.body&&n.length<3?Array.from(document.body.children):n;for(const l of i){if(!(l instanceof HTMLElement)||im.has(l.tagName.toLowerCase())||l.hasAttribute("data-feedback-toolbar"))continue;const o=window.getComputedStyle(l);if(o.display==="none"||o.visibility==="hidden")continue;const s=l.getBoundingClientRect();if(!(s.height<10||s.width<10)){e.push({label:Xf(l),selector:ur(l),top:s.top,bottom:s.bottom,left:s.left,right:s.right,area:s.width*s.height});for(const a of Array.from(l.children)){if(!(a instanceof HTMLElement)||im.has(a.tagName.toLowerCase())||a.hasAttribute("data-feedback-toolbar"))continue;const c=window.getComputedStyle(a);if(c.display==="none"||c.visibility==="hidden")continue;const u=a.getBoundingClientRect();u.height<10||u.width<10||e.push({label:Xf(a),selector:ur(a),top:u.top,bottom:u.bottom,left:u.left,right:u.right,area:u.width*u.height})}}}return e}function c7(t){const e=window.scrollY;return t.map(({label:n,selector:i,rect:l})=>{const o=l.y-e;return{label:n,selector:i,top:o,bottom:o+l.height,left:l.x,right:l.x+l.width,area:l.width*l.height}})}function u7(t){const e=window.scrollY,n=t.y-e,i=t.x;return{top:n,bottom:n+t.height,left:i,right:i+t.width,area:t.width*t.height}}function lm(t,e){const n=e?c7(e):a7(),i=u7(t);let l=null,o=null,s=null,a=null,c=null;for(const m of n){if(Math.abs(m.left-i.left)<2&&Math.abs(m.top-i.top)<2&&Math.abs(m.right-m.left-t.width)<2&&Math.abs(m.bottom-m.top-t.height)<2)continue;m.left<=i.left+2&&m.right>=i.right-2&&m.top<=i.top+2&&m.bottom>=i.bottom-2&&m.area>i.area*1.5&&(!c||m.area<c._area)&&(c={label:m.label,selector:m.selector,_area:m.area});const p=i.right>m.left+5&&i.left<m.right-5,C=i.bottom>m.top+5&&i.top<m.bottom-5;if(p&&m.bottom<=i.top+5){const g=Math.round(i.top-m.bottom);(!l||g<l._dist)&&(l={label:m.label,selector:m.selector,gap:Math.max(0,g),_dist:g})}if(p&&m.top>=i.bottom-5){const g=Math.round(m.top-i.bottom);(!o||g<o._dist)&&(o={label:m.label,selector:m.selector,gap:Math.max(0,g),_dist:g})}if(C&&m.right<=i.left+5){const g=Math.round(i.left-m.right);(!s||g<s._dist)&&(s={label:m.label,selector:m.selector,gap:Math.max(0,g),_dist:g})}if(C&&m.left>=i.right-5){const g=Math.round(m.left-i.right);(!a||g<a._dist)&&(a={label:m.label,selector:m.selector,gap:Math.max(0,g),_dist:g})}}const u=window.innerWidth,d=window.innerHeight,h=f7(t,u),f=m=>m?{label:m.label,selector:m.selector,gap:m.gap}:null,_=d7(i,t,u,d,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(l),below:f(o),left:f(s),right:f(a),alignment:h,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:_}}function d7(t,e,n,i,l,o){const s={};let a=!1;const c=[];if(t.left<-2&&c.push("left"),t.right>n+2&&c.push("right"),t.top<-2&&c.push("top"),t.bottom>i+2&&c.push("bottom"),c.length>0&&(s.viewport=c,a=!0),l){const u=o.find(d=>d.label===l.label&&d.selector===l.selector&&Math.abs(d.area-l._area)<10);if(u){const d=[];t.left<u.left-2&&d.push("left"),t.right>u.right+2&&d.push("right"),t.top<u.top-2&&d.push("top"),t.bottom>u.bottom+2&&d.push("bottom"),d.length>0&&(s.container={label:l.label,edges:d},a=!0)}}return a?s:null}function f7(t,e){if(t.width/e>.85)return"full-width";const i=t.x+t.width/2,l=e/2,o=i-l,s=e*.08;return Math.abs(o)<s?"center":o<0?"left":"right"}function Dv(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Rv(t,e={}){const n=[];t.above&&n.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&n.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),e.includeLeftRight&&(t.left&&n.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&n.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const i=Dv(t.alignment);return t.containedIn?n.push(`${i.charAt(0).toUpperCase()+i.slice(1)} in \`${t.containedIn.label}\``):n.push(`${i.charAt(0).toUpperCase()+i.slice(1)} in page`),e.includePixelRef&&e.pixelRef&&n.push(`Pixel ref: \`${e.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&n.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&n.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),n}function _7(t,e,n){var o,s;const i=[];t.above&&i.push(`below \`${t.above.label}\``),t.below&&i.push(`above \`${t.below.label}\``),t.left&&i.push(`right of \`${t.left.label}\``),t.right&&i.push(`left of \`${t.right.label}\``),t.containedIn&&i.push(`inside \`${t.containedIn.label}\``),i.push(Dv(t.alignment)),(o=t.outOfBounds)!=null&&o.viewport&&i.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(s=t.outOfBounds)!=null&&s.container&&i.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const l=n?`, ${Math.round(n.width)}×${Math.round(n.height)}px`:"";return`at (${Math.round(e.x)}, ${Math.round(e.y)})${l}: ${i.join(", ")}`}var L1=15;function B1(t){if(t.length<2)return[];const e=[],n=new Set;for(let i=0;i<t.length;i++){if(n.has(i))continue;const l=[i];for(let o=i+1;o<t.length;o++)n.has(o)||Math.abs(t[i].rect.y-t[o].rect.y)<L1&&l.push(o);if(l.length>=2){const o=l.map(c=>t[c]);o.sort((c,u)=>c.rect.x-u.rect.x);const s=[];for(let c=0;c<o.length-1;c++)s.push(Math.round(o[c+1].rect.x-(o[c].rect.x+o[c].rect.width)));const a=Math.round(o.reduce((c,u)=>c+u.rect.y,0)/o.length);e.push({labels:o.map(c=>c.label),type:"row",sharedEdge:a,gaps:s,avgGap:s.length?Math.round(s.reduce((c,u)=>c+u,0)/s.length):0}),l.forEach(c=>n.add(c))}}for(let i=0;i<t.length;i++){if(n.has(i))continue;const l=[i];for(let o=i+1;o<t.length;o++)n.has(o)||Math.abs(t[i].rect.x-t[o].rect.x)<L1&&l.push(o);if(l.length>=2){const o=l.map(c=>t[c]);o.sort((c,u)=>c.rect.y-u.rect.y);const s=[];for(let c=0;c<o.length-1;c++)s.push(Math.round(o[c+1].rect.y-(o[c].rect.y+o[c].rect.height)));const a=Math.round(o.reduce((c,u)=>c+u.rect.x,0)/o.length);e.push({labels:o.map(c=>c.label),type:"column",sharedEdge:a,gaps:s,avgGap:s.length?Math.round(s.reduce((c,u)=>c+u,0)/s.length):0}),l.forEach(c=>n.add(c))}}return e}function h7(t){if(t.length<2)return[];const e=B1(t.map(s=>({label:s.label,rect:s.originalRect}))),n=B1(t.map(s=>({label:s.label,rect:s.currentRect}))),i=[],l=new Set;for(const s of e){const a=new Set(s.labels);let c=null,u=0;for(const d of n){const h=d.labels.filter(f=>a.has(f)).length;h>=2&&h>u&&(c=d,u=h)}if(c){const d=c.labels.filter(f=>a.has(f)),h=d.join(", ");if(c.type!==s.type){const f=s.type==="row"?"y":"x",_=c.type==="row"?"y":"x";i.push(`**${h}**: ${s.type} (${f}≈${s.sharedEdge}, ${s.avgGap}px gaps) → ${c.type} (${_}≈${c.sharedEdge}, ${c.avgGap}px gaps)`)}else if(Math.abs(s.sharedEdge-c.sharedEdge)>20||Math.abs(s.avgGap-c.avgGap)>5){const f=s.type==="row"?"y":"x",_=Math.abs(s.sharedEdge-c.sharedEdge)>20?` ${f}: ${s.sharedEdge} → ${c.sharedEdge}`:"",m=Math.abs(s.avgGap-c.avgGap)>5?` gaps: ${s.avgGap}px → ${c.avgGap}px`:"";i.push(`**${h}**: ${s.type} shifted —${_}${m}`)}d.forEach(f=>l.add(f))}else{const d=s.labels.join(", "),h=s.type==="row"?"y":"x";i.push(`**${d}**: ${s.type} (${h}≈${s.sharedEdge}) dissolved`),s.labels.forEach(f=>l.add(f))}}for(const s of n){if(s.labels.every(u=>l.has(u))||s.labels.filter(u=>!l.has(u)).length<2)continue;if(!e.some(u=>u.labels.filter(h=>s.labels.includes(h)).length>=2)){const u=s.type==="row"?"y":"x";i.push(`**${s.labels.join(", ")}**: new ${s.type} (${u}≈${s.sharedEdge}, ${s.avgGap}px gaps)`),s.labels.forEach(d=>l.add(d))}}const o=t.filter(s=>!l.has(s.label));if(o.length>=2){const s={};for(const a of o){const c=Math.round(a.currentRect.x/5)*5;(s[c]??(s[c]=[])).push(a.label)}for(const[a,c]of Object.entries(s))c.length>=2&&i.push(`**${c.join(", ")}**: shared left edge at x≈${a}`)}return i}function zv(t){if(typeof document>"u")return{viewport:t,contentArea:null};const e=[],n=new Set,i=a=>{n.has(a)||a instanceof HTMLElement&&(a.hasAttribute("data-feedback-toolbar")||im.has(a.tagName.toLowerCase())||(n.add(a),e.push(a)))},l=document.querySelector("main");l&&i(l);const o=document.querySelector("[role='main']");o&&i(o);for(const a of Array.from(document.body.children))if(i(a),a.children){for(const c of Array.from(a.children))if(i(c),c.children)for(const u of Array.from(c.children))i(u)}let s=null;for(const a of e){const c=a.getBoundingClientRect();if(c.height<50)continue;const u=getComputedStyle(a);if(u.maxWidth&&u.maxWidth!=="none"&&u.maxWidth!=="0px"){(!s||c.width<s.rect.width)&&(s={el:a,rect:c});continue}!s&&c.width<t.width-20&&c.width>100&&(s={el:a,rect:c})}if(s){const{el:a,rect:c}=s;return{viewport:t,contentArea:{width:Math.round(c.width),left:Math.round(c.left),right:Math.round(c.right),centerX:Math.round(c.left+c.width/2),selector:ur(a)}}}return{viewport:t,contentArea:null}}function m7(t){if(typeof document>"u")return null;const e=document.querySelector(t);if(!(e!=null&&e.parentElement))return null;const n=getComputedStyle(e.parentElement),i={parentDisplay:n.display,parentSelector:ur(e.parentElement)};return n.display.includes("flex")&&(i.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(i.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(i.gap=n.gap),i}function Ov(t,e){const n=e.contentArea,i=n?n.width:e.viewport.width,l=n?n.left:0,o=n?n.centerX:Math.round(e.viewport.width/2),s=Math.round(t.x-l),a=Math.round(l+i-(t.x+t.width)),c=(t.width/i*100).toFixed(1),u=t.x+t.width/2,d=Math.abs(u-o)<20,h=t.width/i>.95,f=[];return h?f.push("`width: 100%` of container"):f.push(`left \`${s}px\` in container, right \`${a}px\`, width \`${c}%\` (\`${Math.round(t.width)}px\`)`),d&&!h&&f.push("centered — `margin-inline: auto`"),f.join(" — ")}function Av(t){const{viewport:e,contentArea:n}=t;let i=`### Reference Frame
`;if(i+=`- Viewport: \`${e.width}×${e.height}px\`
`,n){const l=n;i+=`- Content area: \`${l.width}px\` wide, left edge at \`x=${l.left}\`, right at \`x=${l.right}\` (\`${l.selector}\`)
`,i+=`- Pixel → CSS translation:
`,i+=`  - **Horizontal position in container**: \`element.x - ${l.left}\` → use as \`margin-left\` or \`left\`
`,i+=`  - **Width as % of container**: \`element.width / ${l.width} × 100\` → use as \`width: X%\`
`,i+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",i+=`  - **Centered**: if \`|element.centerX - ${l.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else i+=`- No distinct content container — elements positioned relative to full viewport
`,i+=`- Pixel → CSS translation:
`,i+=`  - **Width as % of viewport**: \`element.width / ${e.width} × 100\` → use as \`width: X%\`
`,i+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(e.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return i+=`
`,i}function p7(t){const e=m7(t);if(!e)return null;let n=`\`${e.parentDisplay}\``;return e.flexDirection&&(n+=`, flex-direction: \`${e.flexDirection}\``),e.gridCols&&(n+=`, grid-template-columns: \`${e.gridCols}\``),e.gap&&(n+=`, gap: \`${e.gap}\``),`Parent: ${n} (\`${e.parentSelector}\`)`}function $1(t,e,n,i="standard"){var C,g,y,b;if(t.length===0)return"";const l=[...t].sort((x,M)=>Math.abs(x.y-M.y)<20?x.x-M.x:x.y-M.y);let o="";if(n!=null&&n.blankCanvas?(o+=`## Wireframe: New Page

`,n.wireframePurpose&&(o+=`> **Purpose:** ${n.wireframePurpose}
>
`),o+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):o+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,i==="compact")return o+=`### Components
`,l.forEach((x,M)=>{var k;const R=((k=Rl[x.type])==null?void 0:k.label)||x.type;o+=`${M+1}. **${R}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`}),o;const s=zv(e);o+=Av(s),o+=`### Components
`,l.forEach((x,M)=>{var V;const R=((V=Rl[x.type])==null?void 0:V.label)||x.type,k={x:x.x,y:x.y,width:x.width,height:x.height};o+=`${M+1}. **${R}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`;const N=lm(k),A=Rv(N,{includeLeftRight:i==="detailed"||i==="forensic"});for(const pe of A)o+=`   - ${pe}
`;const J=Ov(k,s);J&&(o+=`   - CSS: ${J}
`)}),o+=`
### Layout Analysis
`;const a=[];for(const x of l){const M=a.find(R=>Math.abs(R.y-x.y)<30);M?M.items.push(x):a.push({y:x.y,items:[x]})}if(a.sort((x,M)=>x.y-M.y),a.forEach((x,M)=>{x.items.sort((k,N)=>k.x-N.x);const R=x.items.map(k=>{var N;return((N=Rl[k.type])==null?void 0:N.label)||k.type});if(x.items.length===1){const N=x.items[0].width>e.width*.8;o+=`- Row ${M+1} (y≈${Math.round(x.y)}): ${R[0]}${N?" — full width":""}
`}else o+=`- Row ${M+1} (y≈${Math.round(x.y)}): ${R.join(" | ")} — ${x.items.length} items side by side
`}),i==="detailed"||i==="forensic"){o+=`
### Spacing & Gaps
`;for(let x=0;x<l.length-1;x++){const M=l[x],R=l[x+1],k=((C=Rl[M.type])==null?void 0:C.label)||M.type,N=((g=Rl[R.type])==null?void 0:g.label)||R.type,L=Math.round(R.y-(M.y+M.height)),A=Math.round(R.x-(M.x+M.width));Math.abs(M.y-R.y)<30?o+=`- ${k} → ${N}: \`${A}px\` horizontal gap
`:o+=`- ${k} → ${N}: \`${L}px\` vertical gap
`}if(i==="forensic"&&l.length>2){o+=`
### All Pairwise Gaps
`;for(let x=0;x<l.length;x++)for(let M=x+1;M<l.length;M++){const R=l[x],k=l[M],N=((y=Rl[R.type])==null?void 0:y.label)||R.type,L=((b=Rl[k.type])==null?void 0:b.label)||k.type,A=Math.round(k.y-(R.y+R.height)),J=Math.round(k.x-(R.x+R.width));o+=`- ${N} ↔ ${L}: h=\`${J}px\` v=\`${A}px\`
`}}i==="forensic"&&(o+=`
### Z-Order (placement order)
`,t.forEach((x,M)=>{var k;const R=((k=Rl[x.type])==null?void 0:k.label)||x.type;o+=`${M}. ${R} at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`}))}o+=`
### Suggested Implementation
`;const c=l.some(x=>x.type==="navigation"),u=l.some(x=>x.type==="hero"),d=l.some(x=>x.type==="sidebar"),h=l.some(x=>x.type==="footer"),f=l.filter(x=>x.type==="card"),_=l.filter(x=>x.type==="form"),m=l.filter(x=>x.type==="table"),p=l.filter(x=>x.type==="modal");if(c&&(o+=`- Top navigation bar with logo + nav links + CTA
`),u&&(o+=`- Hero section with heading, subtext, and call-to-action
`),d&&(o+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?o+=`- ${f.length}-column card grid — use CSS Grid or Flexbox
`:f.length===1&&(o+=`- Card component with image + content area
`),_.length>0&&(o+=`- ${_.length} form${_.length>1?"s":""} — add proper labels, validation, and submit handling
`),m.length>0&&(o+=`- Data table — consider sortable columns and pagination
`),p.length>0&&(o+=`- Modal dialog — add overlay backdrop and focus trapping
`),h&&(o+=`- Multi-column footer with links
`),i==="detailed"||i==="forensic"){if(o+=`
### CSS Suggestions
`,d){const x=l.find(M=>M.type==="sidebar");o+=`- \`display: grid; grid-template-columns: ${Math.round(x.width)}px 1fr;\`
`}if(f.length>1){const x=Math.round(f[0].width);o+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${x}px); gap: 16px;\`
`}c&&(o+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return o}function H1(t,e="standard",n){const{sections:i}=t,l=[];for(const d of i){const h=d.originalRect,f=d.currentRect,_=Math.abs(h.x-f.x)>1||Math.abs(h.y-f.y)>1,m=Math.abs(h.width-f.width)>1||Math.abs(h.height-f.height)>1;if(!_&&!m){e==="forensic"&&l.push({section:d,posMoved:!1,sizeChanged:!1});continue}l.push({section:d,posMoved:_,sizeChanged:m})}if(l.length===0||e!=="forensic"&&l.every(d=>!d.posMoved&&!d.sizeChanged))return"";let o=`## Suggested Layout Changes

`;const s=n?n.width:typeof window<"u"?window.innerWidth:0,a=n?n.height:typeof window<"u"?window.innerHeight:0,c=zv({width:s,height:a});e!=="compact"&&(o+=Av(c)),e==="forensic"&&(o+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,o+=`> Total sections: ${i.length}

`);const u=d=>i.map(h=>({label:h.label,selector:h.selector,rect:d==="original"?h.originalRect:h.currentRect}));o+=`**Changes:**
`;for(const{section:d,posMoved:h,sizeChanged:f}of l){const _=d.originalRect,m=d.currentRect;if(!h&&!f){o+=`- ${d.label} — unchanged at (${Math.round(m.x)}, ${Math.round(m.y)}) ${Math.round(m.width)}×${Math.round(m.height)}px
`;continue}if(e==="compact"){h&&f?o+=`- Suggested: move **${d.label}** to (${Math.round(m.x)}, ${Math.round(m.y)}) ${Math.round(m.width)}×${Math.round(m.height)}px
`:h?o+=`- Suggested: move **${d.label}** to (${Math.round(m.x)}, ${Math.round(m.y)})
`:o+=`- Suggested: resize **${d.label}** to ${Math.round(m.width)}×${Math.round(m.height)}px
`;continue}if(h&&f?o+=`- Suggested: move and resize **${d.label}**
`:h?o+=`- Suggested: move **${d.label}**
`:o+=`- Suggested: resize **${d.label}** from ${Math.round(_.width)}×${Math.round(_.height)}px to ${Math.round(m.width)}×${Math.round(m.height)}px
`,h){const C=lm(_,u("original")),g=lm(m,u("current")),y=f?{width:_.width,height:_.height}:void 0;o+=`  - Currently ${_7(C,{x:_.x,y:_.y},y)}
`;const b=f?{width:m.width,height:m.height}:void 0,x=`at (${Math.round(m.x)}, ${Math.round(m.y)})`,M=b?`, ${Math.round(b.width)}×${Math.round(b.height)}px`:"",k=Rv(g,{includeLeftRight:e==="detailed"||e==="forensic"});if(k.length>0){o+=`  - Suggested position ${x}${M}: ${k[0]}
`;for(let L=1;L<k.length;L++)o+=`    ${k[L]}
`}else o+=`  - Suggested position ${x}${M}
`;const N=Ov(m,c);N&&(o+=`  - CSS: ${N}
`)}const p=p7(d.selector);if(p&&(o+=`  - ${p}
`),o+=`  - Selector: \`${d.selector}\`
`,e==="detailed"||e==="forensic"){const C=d.className?`${d.tagName}.${d.className.split(" ")[0]}`:d.tagName;C!==d.selector&&(o+=`  - Element: \`${C}\`
`),d.role&&(o+=`  - Role: \`${d.role}\`
`),e==="forensic"&&d.textSnippet&&(o+=`  - Text: "${d.textSnippet}"
`)}e==="forensic"&&(o+=`  - Original rect: \`{ x: ${Math.round(_.x)}, y: ${Math.round(_.y)}, w: ${Math.round(_.width)}, h: ${Math.round(_.height)} }\`
`,o+=`  - Current rect: \`{ x: ${Math.round(m.x)}, y: ${Math.round(m.y)}, w: ${Math.round(m.width)}, h: ${Math.round(m.height)} }\`
`)}if(e!=="compact"){const d=l.filter(f=>f.posMoved).map(f=>({label:f.section.label,originalRect:f.section.originalRect,currentRect:f.section.currentRect})),h=h7(d);if(h.length>0){o+=`
### Layout Summary
`;for(const f of h)o+=`- ${f}
`}}if(e!=="compact"&&i.length>1){o+=`
### All Sections (current positions)
`;const d=[...i].sort((h,f)=>Math.abs(h.currentRect.y-f.currentRect.y)<20?h.currentRect.x-f.currentRect.x:h.currentRect.y-f.currentRect.y);for(const h of d){const f=h.currentRect,_=Math.abs(f.x-h.originalRect.x)>1||Math.abs(f.y-h.originalRect.y)>1||Math.abs(f.width-h.originalRect.width)>1||Math.abs(f.height-h.originalRect.height)>1;o+=`- ${h.label}: \`${Math.round(f.width)}×${Math.round(f.height)}px\` at \`(${Math.round(f.x)}, ${Math.round(f.y)})\`${_?" ← suggested":""}
`}}return o}var om="feedback-annotations-",Nv=7;function If(t){return`${om}${t}`}function jh(t){if(typeof window>"u")return[];try{const e=localStorage.getItem(If(t));if(!e)return[];const n=JSON.parse(e),i=Date.now()-Nv*24*60*60*1e3;return n.filter(l=>!l.timestamp||l.timestamp>i)}catch{return[]}}function Lv(t,e){if(!(typeof window>"u"))try{localStorage.setItem(If(t),JSON.stringify(e))}catch{}}function g7(){const t=new Map;if(typeof window>"u")return t;try{const e=Date.now()-Nv*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){const i=localStorage.key(n);if(i!=null&&i.startsWith(om)){const l=i.slice(om.length),o=localStorage.getItem(i);if(o){const a=JSON.parse(o).filter(c=>!c.timestamp||c.timestamp>e);a.length>0&&t.set(l,a)}}}}catch{}return t}function ac(t,e,n){const i=e.map(l=>({...l,_syncedTo:n}));Lv(t,i)}var Np="agentation-design-";function y7(t){if(typeof window>"u")return[];try{const e=localStorage.getItem(`${Np}${t}`);return e?JSON.parse(e):[]}catch{return[]}}function x7(t,e){if(!(typeof window>"u"))try{localStorage.setItem(`${Np}${t}`,JSON.stringify(e))}catch{}}function b7(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Np}${t}`)}catch{}}var Lp="agentation-rearrange-";function v7(t){if(typeof window>"u")return null;try{const e=localStorage.getItem(`${Lp}${t}`);return e?JSON.parse(e):null}catch{return null}}function w7(t,e){if(!(typeof window>"u"))try{localStorage.setItem(`${Lp}${t}`,JSON.stringify(e))}catch{}}function S7(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Lp}${t}`)}catch{}}var Bp="agentation-wireframe-";function k7(t){if(typeof window>"u")return null;try{const e=localStorage.getItem(`${Bp}${t}`);return e?JSON.parse(e):null}catch{return null}}function Y1(t,e){if(!(typeof window>"u"))try{localStorage.setItem(`${Bp}${t}`,JSON.stringify(e))}catch{}}function jd(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Bp}${t}`)}catch{}}var Bv="agentation-session-";function $p(t){return`${Bv}${t}`}function C7(t){if(typeof window>"u")return null;try{return localStorage.getItem($p(t))}catch{return null}}function Mh(t,e){if(!(typeof window>"u"))try{localStorage.setItem($p(t),e)}catch{}}function j7(t){if(!(typeof window>"u"))try{localStorage.removeItem($p(t))}catch{}}var $v=`${Bv}toolbar-hidden`;function M7(){if(typeof window>"u")return!1;try{return sessionStorage.getItem($v)==="1"}catch{return!1}}function T7(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem($v,"1")}catch{}}async function Th(t,e){const n=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function U1(t,e){const n=await fetch(`${t}/sessions/${e}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function zr(t,e,n){const i=await fetch(`${t}/sessions/${e}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok)throw new Error(`Failed to sync annotation: ${i.status}`);return i.json()}async function X1(t,e,n){const i=await fetch(`${t}/annotations/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok)throw new Error(`Failed to update annotation: ${i.status}`);return i.json()}async function Ao(t,e){const n=await fetch(`${t}/annotations/${e}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var Tt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},I1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),q1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],E7=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function D7(t){const e=(t==null?void 0:t.mode)??"filtered";let n=I1;if(t!=null&&t.skipExact){const i=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);n=new Set([...I1,...i])}return{maxComponents:(t==null?void 0:t.maxComponents)??6,maxDepth:(t==null?void 0:t.maxDepth)??30,mode:e,skipExact:n,skipPatterns:t!=null&&t.skipPatterns?[...q1,...t.skipPatterns]:q1,userPatterns:(t==null?void 0:t.userPatterns)??E7,filter:t==null?void 0:t.filter}}function R7(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function z7(t,e=10){const n=new Set;let i=t,l=0;for(;i&&l<e;)i.className&&typeof i.className=="string"&&i.className.split(/\s+/).forEach(o=>{if(o.length>1){const s=o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();s.length>1&&n.add(s)}}),i=i.parentElement,l++;return n}function O7(t,e){const n=R7(t);for(const i of e){if(i===n)return!0;const l=n.split("-").filter(s=>s.length>2),o=i.split("-").filter(s=>s.length>2);for(const s of l)for(const a of o)if(s===a||s.includes(a)||a.includes(s))return!0}return!1}function A7(t,e,n,i){if(n.filter)return n.filter(t,e);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(t)||n.skipPatterns.some(l=>l.test(t)));case"smart":return n.skipExact.has(t)||n.skipPatterns.some(l=>l.test(t))?!1:!!(i&&O7(t,i)||n.userPatterns.some(l=>l.test(t)));default:return!0}}var Or=null,N7=new WeakMap;function Eh(t){return Object.keys(t).some(e=>e.startsWith("__reactFiber$")||e.startsWith("__reactInternalInstance$")||e.startsWith("__reactProps$"))}function L7(){if(Or!==null)return Or;if(typeof document>"u")return!1;if(document.body&&Eh(document.body))return Or=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const e of t){const n=document.querySelector(e);if(n&&Eh(n))return Or=!0,!0}if(document.body){for(const e of document.body.children)if(Eh(e))return Or=!0,!0}return Or=!1,!1}var cc={map:N7};function B7(t){return Object.keys(t).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function $7(t){const e=B7(t);return e?t[e]:null}function Rs(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function H7(t){var l;const{tag:e,type:n,elementType:i}=t;if(e===Tt.HostComponent||e===Tt.HostText||e===Tt.HostHoistable||e===Tt.HostSingleton||e===Tt.Fragment||e===Tt.Mode||e===Tt.Profiler||e===Tt.DehydratedFragment||e===Tt.HostRoot||e===Tt.HostPortal||e===Tt.ScopeComponent||e===Tt.OffscreenComponent||e===Tt.LegacyHiddenComponent||e===Tt.CacheComponent||e===Tt.TracingMarkerComponent||e===Tt.Throw||e===Tt.ViewTransitionComponent||e===Tt.ActivityComponent)return null;if(e===Tt.ForwardRef){const o=i;if(o!=null&&o.render){const s=Rs(o.render);if(s)return s}return o!=null&&o.displayName?o.displayName:Rs(n)}if(e===Tt.MemoComponent||e===Tt.SimpleMemoComponent){const o=i;if(o!=null&&o.type){const s=Rs(o.type);if(s)return s}return o!=null&&o.displayName?o.displayName:Rs(n)}if(e===Tt.ContextProvider){const o=n;return(l=o==null?void 0:o._context)!=null&&l.displayName?`${o._context.displayName}.Provider`:null}if(e===Tt.ContextConsumer){const o=n;return o!=null&&o.displayName?`${o.displayName}.Consumer`:null}if(e===Tt.LazyComponent){const o=i;return(o==null?void 0:o._status)===1&&o._result?Rs(o._result):null}return e===Tt.SuspenseComponent||e===Tt.SuspenseListComponent?null:e===Tt.IncompleteClassComponent||e===Tt.IncompleteFunctionComponent||e===Tt.FunctionComponent||e===Tt.ClassComponent||e===Tt.IndeterminateComponent?Rs(n):null}function Y7(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function U7(t,e){const n=D7(e),i=n.mode==="all";if(i){const c=cc.map.get(t);if(c!==void 0)return c}if(!L7()){const c={path:null,components:[]};return i&&cc.map.set(t,c),c}const l=n.mode==="smart"?z7(t):void 0,o=[];try{let c=$7(t),u=0;for(;c&&u<n.maxDepth&&o.length<n.maxComponents;){const d=H7(c);d&&!Y7(d)&&A7(d,u,n,l)&&o.push(d),c=c.return,u++}}catch{const c={path:null,components:[]};return i&&cc.map.set(t,c),c}if(o.length===0){const c={path:null,components:[]};return i&&cc.map.set(t,c),c}const a={path:o.slice().reverse().map(c=>`<${c}>`).join(" "),components:o};return i&&cc.map.set(t,a),a}var uc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function X7(t){if(!t||typeof t!="object")return null;const e=Object.keys(t),n=e.find(o=>o.startsWith("__reactFiber$"));if(n)return t[n]||null;const i=e.find(o=>o.startsWith("__reactInternalInstance$"));if(i)return t[i]||null;const l=e.find(o=>{if(!o.startsWith("__react"))return!1;const s=t[o];return s&&typeof s=="object"&&"_debugSource"in s});return l&&t[l]||null}function vu(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const e=t.type;if(e.displayName)return e.displayName;if(e.name)return e.name}return null}function I7(t,e=50){var l;let n=t,i=0;for(;n&&i<e;){if(n._debugSource)return{source:n._debugSource,componentName:vu(n)};if((l=n._debugOwner)!=null&&l._debugSource)return{source:n._debugOwner._debugSource,componentName:vu(n._debugOwner)};n=n.return,i++}return null}function q7(t){let e=t,n=0;const i=50;for(;e&&n<i;){const l=e,o=["_debugSource","__source","_source","debugSource"];for(const s of o){const a=l[s];if(a&&typeof a=="object"&&"fileName"in a)return{source:a,componentName:vu(e)}}if(e.memoizedProps){const s=e.memoizedProps;if(s.__source&&typeof s.__source=="object"){const a=s.__source;if(a.fileName&&a.lineNumber)return{source:{fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber},componentName:vu(e)}}}e=e.return,n++}return null}var Md=new Map;function W7(t){var l;const e=t.tag,n=t.type,i=t.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&((l=n.prototype)!=null&&l.isReactComponent))return null;if((e===uc.FunctionComponent||e===uc.IndeterminateComponent)&&typeof n=="function")return n;if(e===uc.ForwardRef&&i){const o=i.render;if(typeof o=="function")return o}if((e===uc.MemoComponent||e===uc.SimpleMemoComponent)&&i){const o=i.type;if(typeof o=="function")return o}return typeof n=="function"?n:null}function Q7(){const t=M5,e=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(e&&"H"in e)return{get:()=>e.H,set:i=>{e.H=i}};const n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){const i=n.ReactCurrentDispatcher;if(i&&"current"in i)return{get:()=>i.current,set:l=>{i.current=l}}}return null}function G7(t){const e=t.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],i=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,l=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const o of e){const s=o.trim();if(!s||n.some(c=>c.test(s)))continue;const a=i.exec(s)||l.exec(s);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function V7(t){let e=t;return e=e.replace(/[?#].*$/,""),e=e.replace(/^turbopack:\/\/\/\[project\]\//,""),e=e.replace(/^webpack-internal:\/\/\/\.\//,""),e=e.replace(/^webpack-internal:\/\/\//,""),e=e.replace(/^webpack:\/\/\/\.\//,""),e=e.replace(/^webpack:\/\/\//,""),e=e.replace(/^turbopack:\/\/\//,""),e=e.replace(/^https?:\/\/[^/]+\//,""),e=e.replace(/^file:\/\/\//,"/"),e=e.replace(/^\([^)]+\)\/\.\//,""),e=e.replace(/^\.\//,""),e}function P7(t){const e=W7(t);if(!e)return null;if(Md.has(e))return Md.get(e);const n=Q7();if(!n)return Md.set(e,null),null;const i=n.get();let l=null;try{const o=new Proxy({},{get(){throw new Error("probe")}});n.set(o);try{e({})}catch(s){if(s instanceof Error&&s.message==="probe"&&s.stack){const a=G7(s.stack);a&&(l={fileName:V7(a.fileName),lineNumber:a.line,columnNumber:a.column,componentName:vu(t)||void 0})}}}finally{n.set(i)}return Md.set(e,l),l}function F7(t,e=15){let n=t,i=0;for(;n&&i<e;){const l=P7(n);if(l)return l;n=n.return,i++}return null}function sm(t){const e=X7(t);if(!e)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=I7(e);if(n||(n=q7(e)),n!=null&&n.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};const i=F7(e);return i?{found:!0,source:i,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Z7(t,e="path"){const{fileName:n,lineNumber:i,columnNumber:l}=t;let o=`${n}:${i}`;return l!==void 0&&(o+=`:${l}`),e==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${o}`:o}function K7(t,e=10){let n=t,i=0;for(;n&&i<e;){const l=sm(n);if(l.found)return l;n=n.parentElement,i++}return sm(t)}var J7=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,e9={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=J7}var K=e9,dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function W1(t,e,n="standard"){if(t.length===0)return"";const i=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let l=`## Page Feedback: ${e}
`;return n==="forensic"?(l+=`
**Environment:**
`,l+=`- Viewport: ${i}
`,typeof window<"u"&&(l+=`- URL: ${window.location.href}
`,l+=`- User Agent: ${navigator.userAgent}
`,l+=`- Timestamp: ${new Date().toISOString()}
`,l+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),l+=`
---
`):n!=="compact"&&(l+=`**Viewport:** ${i}
`),l+=`
`,t.forEach((o,s)=>{n==="compact"?(l+=`${s+1}. **${o.element}**${o.sourceFile?` (${o.sourceFile})`:""}: ${o.comment}`,o.selectedText&&(l+=` (re: "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}")`),l+=`
`):n==="forensic"?(l+=`### ${s+1}. ${o.element}
`,o.isMultiSelect&&o.fullPath&&(l+=`*Forensic data shown for first element of selection*
`),o.fullPath&&(l+=`**Full DOM Path:** ${o.fullPath}
`),o.cssClasses&&(l+=`**CSS Classes:** ${o.cssClasses}
`),o.boundingBox&&(l+=`**Position:** x:${Math.round(o.boundingBox.x)}, y:${Math.round(o.boundingBox.y)} (${Math.round(o.boundingBox.width)}×${Math.round(o.boundingBox.height)}px)
`),l+=`**Annotation at:** ${o.x.toFixed(1)}% from left, ${Math.round(o.y)}px from top
`,o.selectedText&&(l+=`**Selected text:** "${o.selectedText}"
`),o.nearbyText&&!o.selectedText&&(l+=`**Context:** ${o.nearbyText.slice(0,100)}
`),o.computedStyles&&(l+=`**Computed Styles:** ${o.computedStyles}
`),o.accessibility&&(l+=`**Accessibility:** ${o.accessibility}
`),o.nearbyElements&&(l+=`**Nearby Elements:** ${o.nearbyElements}
`),o.sourceFile&&(l+=`**Source:** ${o.sourceFile}
`),o.reactComponents&&(l+=`**React:** ${o.reactComponents}
`),l+=`**Feedback:** ${o.comment}

`):(l+=`### ${s+1}. ${o.element}
`,l+=`**Location:** ${o.elementPath}
`,o.sourceFile&&(l+=`**Source:** ${o.sourceFile}
`),o.reactComponents&&(l+=`**React:** ${o.reactComponents}
`),n==="detailed"&&(o.cssClasses&&(l+=`**Classes:** ${o.cssClasses}
`),o.boundingBox&&(l+=`**Position:** ${Math.round(o.boundingBox.x)}px, ${Math.round(o.boundingBox.y)}px (${Math.round(o.boundingBox.width)}×${Math.round(o.boundingBox.height)}px)
`)),o.selectedText&&(l+=`**Selected text:** "${o.selectedText}"
`),n==="detailed"&&o.nearbyText&&!o.selectedText&&(l+=`**Context:** ${o.nearbyText.slice(0,100)}
`),l+=`**Feedback:** ${o.comment}

`)}),l.trim()}var t9=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,n9={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=t9}var xn=n9;function Q1({annotation:t,globalIndex:e,layerIndex:n,layerSize:i,isExiting:l,isClearing:o,isAnimated:s,isHovered:a,isDeleting:c,isEditingAny:u,renumberFrom:d,markerClickBehavior:h,tooltipStyle:f,onHoverEnter:_,onHoverLeave:m,onClick:p,onContextMenu:C}){const g=(a||c)&&!u,y=g&&h==="delete",b=t.isMultiSelect,x=b?"var(--agentation-color-green)":"var(--agentation-color-accent)",M=l?xn.exit:o?xn.clearing:s?"":xn.enter,R=l?`${(i-1-n)*20}ms`:`${n*20}ms`;return r.jsxs("div",{className:`${xn.marker} ${b?xn.multiSelect:""} ${M} ${y?xn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:y?void 0:x,animationDelay:R},onMouseEnter:()=>_(t),onMouseLeave:m,onClick:k=>{k.stopPropagation(),l||p(t)},onContextMenu:C?k=>{h==="delete"&&(k.preventDefault(),k.stopPropagation(),l||C(t))}:void 0,children:[g?y?r.jsx(Sv,{size:b?18:16}):r.jsx(mk,{size:16}):r.jsx("span",{className:d!==null&&e>=d?xn.renumber:void 0,children:e+1}),a&&!u&&r.jsxs("div",{className:`${xn.markerTooltip} ${xn.enter}`,style:f,children:[r.jsxs("span",{className:xn.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:xn.markerNote,children:t.comment})]})]})}function i9({x:t,y:e,isMultiSelect:n,isExiting:i}){return r.jsx("div",{className:`${xn.marker} ${xn.pending} ${n?xn.multiSelect:""} ${i?xn.exit:xn.enter}`,style:{left:`${t}%`,top:e,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(ik,{size:12})})}function G1({annotation:t,fixed:e}){const n=t.isMultiSelect;return r.jsx("div",{className:`${xn.marker} ${e?xn.fixed:""} ${xn.hovered} ${n?xn.multiSelect:""} ${xn.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(Sv,{size:n?12:10})})}var l9=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,o9={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=l9}var Dh=o9,Rh=({className:t="",...e})=>r.jsxs("div",{className:`${Dh.switchContainer} ${t}`,children:[r.jsx("input",{className:Dh.switchInput,type:"checkbox",...e}),r.jsx("div",{className:Dh.switchThumb})]}),s9=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,r9={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=s9}var Td=r9,a9=({className:t="",...e})=>r.jsxs("div",{className:`${Td.checkboxContainer} ${t}`,children:[r.jsx("input",{className:Td.checkboxInput,type:"checkbox",...e}),r.jsx("svg",{className:Td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:Td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),c9=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,u9={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=c9}var V1=u9,P1=({className:t="",label:e,tooltip:n,checked:i,onChange:l,...o})=>{const s=S.useId();return r.jsxs("div",{className:`${V1.container} ${t}`,...o,children:[r.jsx(a9,{id:s,onChange:l,checked:i}),r.jsx("label",{className:V1.label,htmlFor:s,children:e}),n&&r.jsx(Us,{content:n})]})},d9=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,f9={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=d9}var be=f9;function _9({settings:t,onSettingsChange:e,isDarkMode:n,onToggleTheme:i,isDevMode:l,connectionStatus:o,endpoint:s,isVisible:a,toolbarNearBottom:c,settingsPage:u,onSettingsPageChange:d,onHideToolbar:h}){var f;return r.jsx("div",{className:`${be.settingsPanel} ${a?be.enter:be.exit}`,style:c?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:be.settingsPanelContainer,children:[r.jsxs("div",{className:`${be.settingsPage} ${u==="automations"?be.slideLeft:""}`,children:[r.jsxs("div",{className:be.settingsHeader,children:[r.jsx("a",{className:be.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:be.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:be.themeToggle,onClick:i,title:n?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:be.themeIconWrapper,children:r.jsx("span",{className:be.themeIcon,children:n?r.jsx(_k,{size:20}):r.jsx(hk,{size:20})},n?"sun":"moon")})})]}),r.jsx("div",{className:be.divider}),r.jsxs("div",{className:be.settingsSection,children:[r.jsxs("div",{className:be.settingsRow,children:[r.jsxs("div",{className:be.settingsLabel,children:["Output Detail",r.jsx(Us,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:be.cycleButton,onClick:()=>{const m=(dc.findIndex(p=>p.value===t.outputDetail)+1)%dc.length;e({outputDetail:dc[m].value})},children:[r.jsx("span",{className:be.cycleButtonText,children:(f=dc.find(_=>_.value===t.outputDetail))==null?void 0:f.label},t.outputDetail),r.jsx("span",{className:be.cycleDots,children:dc.map(_=>r.jsx("span",{className:`${be.cycleDot} ${t.outputDetail===_.value?be.active:""}`},_.value))})]})]}),r.jsxs("div",{className:`${be.settingsRow} ${be.settingsRowMarginTop} ${l?"":be.settingsRowDisabled}`,children:[r.jsxs("div",{className:be.settingsLabel,children:["React Components",r.jsx(Us,{content:l?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(Rh,{checked:l&&t.reactEnabled,onChange:_=>e({reactEnabled:_.target.checked}),disabled:!l})]}),r.jsxs("div",{className:`${be.settingsRow} ${be.settingsRowMarginTop}`,children:[r.jsxs("div",{className:be.settingsLabel,children:["Hide Until Restart",r.jsx(Us,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(Rh,{checked:!1,onChange:_=>{_.target.checked&&h()}})]})]}),r.jsx("div",{className:be.divider}),r.jsxs("div",{className:be.settingsSection,children:[r.jsx("div",{className:`${be.settingsLabel} ${be.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:be.colorOptions,children:Fc.map(_=>r.jsx("button",{className:`${be.colorOption} ${t.annotationColorId===_.id?be.selected:""}`,style:{"--swatch":_.srgb,"--swatch-p3":_.p3},onClick:()=>e({annotationColorId:_.id}),title:_.label,type:"button"},_.id))})]}),r.jsx("div",{className:be.divider}),r.jsxs("div",{className:be.settingsSection,children:[r.jsx(P1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:_=>e({autoClearAfterCopy:_.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(P1,{className:be.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:_=>e({blockInteractions:_.target.checked})})]}),r.jsx("div",{className:be.divider}),r.jsxs("button",{className:be.settingsNavLink,onClick:()=>d("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:be.settingsNavLinkRight,children:[s&&o!=="disconnected"&&r.jsx("span",{className:`${be.mcpNavIndicator} ${be[o]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${be.settingsPage} ${be.automationsPage} ${u==="automations"?be.slideIn:""}`,children:[r.jsxs("button",{className:be.settingsBackButton,onClick:()=>d("main"),children:[r.jsx(gk,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:be.divider}),r.jsxs("div",{className:be.settingsSection,children:[r.jsxs("div",{className:be.settingsRow,children:[r.jsxs("span",{className:be.automationHeader,children:["MCP Connection",r.jsx(Us,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),s&&r.jsx("div",{className:`${be.mcpStatusDot} ${be[o]}`,title:o==="connected"?"Connected":o==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:be.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:be.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:be.divider}),r.jsxs("div",{className:`${be.settingsSection} ${be.settingsSectionGrow}`,children:[r.jsxs("div",{className:be.settingsRow,children:[r.jsxs("span",{className:be.automationHeader,children:["Webhooks",r.jsx(Us,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:be.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${be.autoSendLabel} ${t.webhooksEnabled?be.active:""} ${t.webhookUrl?"":be.disabled}`,children:"Auto-Send"}),r.jsx(Rh,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:_=>e({webhooksEnabled:_.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:be.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:be.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:_=>_.stopPropagation(),onChange:_=>e({webhookUrl:_.target.value})})]})]})]})})}function zh(t,e="filtered"){const{name:n,path:i}=ma(t);if(e==="off")return{name:n,elementName:n,path:i,reactComponents:null};const l=U7(t,{mode:e});return{name:l.path?`${l.path} ${n}`:n,elementName:n,path:i,reactComponents:l.path}}var F1=!1,Oh={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Hl=t=>{if(!t||!t.trim())return!1;try{const e=new URL(t.trim());return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}},Fc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],h9=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Fc.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${Fc.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Fc.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};h9();function zs(t,e){let n=document.elementFromPoint(t,e);if(!n)return null;for(;n!=null&&n.shadowRoot;){const i=n.shadowRoot.elementFromPoint(t,e);if(!i||i===n)break;n=i}return n}function Ah(t){let e=t;for(;e&&e!==document.body;){const i=window.getComputedStyle(e).position;if(i==="fixed"||i==="sticky")return!0;e=e.parentElement}return!1}function Os(t){return t.status!=="resolved"&&t.status!=="dismissed"}function Ed(t){const e=sm(t),n=e.found?e:K7(t);if(n.found&&n.source)return Z7(n.source,"path")}function m9({demoAnnotations:t,demoDelay:e=1e3,enableDemoMode:n=!1,onAnnotationAdd:i,onAnnotationDelete:l,onAnnotationUpdate:o,onAnnotationsClear:s,onCopy:a,onSubmit:c,copyToClipboard:u=!0,endpoint:d,sessionId:h,onSessionCreated:f,webhookUrl:_,className:m}={}){var rg,ag,cg,ug,dg,fg;const[p,C]=S.useState(!1),[g,y]=S.useState([]),[b,x]=S.useState(!0),[M,R]=S.useState(()=>M7()),[k,N]=S.useState(!1),L=S.useRef(null);S.useEffect(()=>{const v=E=>{const T=L.current;T&&T.contains(E.target)&&E.stopPropagation()},j=["mousedown","click","pointerdown"];return j.forEach(E=>document.body.addEventListener(E,v)),()=>{j.forEach(E=>document.body.removeEventListener(E,v))}},[]);const[A,J]=S.useState(!1),[V,pe]=S.useState(!1),[oe,ae]=S.useState(null),[$,F]=S.useState({x:0,y:0}),[H,te]=S.useState(null),[D,De]=S.useState(!1),[_t,St]=S.useState("idle"),[st,xt]=S.useState(!1),[Pt,Ct]=S.useState(!1),[Ft,Zt]=S.useState(null),[Zn,zt]=S.useState(null),[ot,Ne]=S.useState([]),[rt,an]=S.useState(null),[cn,Y]=S.useState(null),[U,ye]=S.useState(null),[Oe,_e]=S.useState(null),[Ve,$e]=S.useState([]),[Ke,je]=S.useState(0),[tt,Qe]=S.useState(!1),[he,z]=S.useState(!1),[B,W]=S.useState(!1),[I,ve]=S.useState(!1),[de,ne]=S.useState(!1),[Pe,Ae]=S.useState("main"),[Je,se]=S.useState(!1),[fe,qe]=S.useState(!1),[Fe,jt]=S.useState(!1),[ce,nt]=S.useState([]),[He,We]=S.useState(null),ke=S.useRef(!1),[Z,we]=S.useState(!1),[ie,Me]=S.useState(!1),[me,Le]=S.useState(1),[Bt,Ye]=S.useState("new-page"),[Ze,$t]=S.useState(""),[bt,Mt]=S.useState(!1),[ee,ln]=S.useState(null),Xt=S.useRef(!1),Kn=S.useRef({rearrange:null,placements:[]}),In=S.useRef({rearrange:null,placements:[]}),[Nn,kn]=S.useState(0),[qn,Jl]=S.useState(0),[gr,Cn]=S.useState(0),[pn,Ui]=S.useState(0),eo=S.useRef(new Set),vs=S.useRef(new Set),Jn=S.useRef(null),_i=S.useRef(),Eo=fe&&p&&!Fe&&Z;S.useEffect(()=>{if(Eo){Me(!1);const v=ea(()=>{Me(!0)});return()=>cancelAnimationFrame(v)}else Me(!1)},[Eo]);const Al=S.useRef(new Map),ji=S.useRef(new Map),Xa=S.useRef(),[Ml,__]=S.useState(!1),[ul,Uv]=S.useState([]),Xv=S.useRef(ul);Xv.current=ul;const[Hp,C9]=S.useState(null),h_=S.useRef(null);S.useRef(!1),S.useRef([]),S.useRef(0),S.useRef(null),S.useRef(null),S.useRef(1);const[Yp,Up]=S.useState(!1),yr=S.useRef(null),[jn,xr]=S.useState([]),Nl=S.useRef({cmd:!1,shift:!1}),ri=()=>{se(!0)},Iv=()=>{se(!1)},qv=()=>{Yp||(yr.current=ze(()=>Up(!0),850))},Wv=()=>{yr.current&&(clearTimeout(yr.current),yr.current=null),Up(!1),Iv()};S.useEffect(()=>()=>{yr.current&&clearTimeout(yr.current)},[]);const[gt,Qv]=S.useState(()=>{try{const v=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Oh,...v,annotationColorId:Fc.find(j=>j.id===v.annotationColorId)?v.annotationColorId:Oh.annotationColorId}}catch{return Oh}}),[Ll,Xp]=S.useState(!0),[Ip,qp]=S.useState(!1),Gv=()=>{var v;(v=L.current)==null||v.classList.add(K.disableTransitions),Xp(j=>!j),ea(()=>{var j;(j=L.current)==null||j.classList.remove(K.disableTransitions)})},Vv=!1,ws="off",[Ln,m_]=S.useState(h??null),Wp=S.useRef(!1),[Tl,Ss]=S.useState(d?"connecting":"disconnected"),[It,p_]=S.useState(null),[ks,Qp]=S.useState(!1),[br,Gp]=S.useState(null),g_=S.useRef(!1),[Vp,Ia]=S.useState(new Set),[Pp,Nu]=S.useState(new Set),[qa,Lu]=S.useState(!1),[Pv,vr]=S.useState(!1),[to,Fp]=S.useState(!1),wr=S.useRef(null),Bl=S.useRef(null),Wa=S.useRef(null),Qa=S.useRef(null),Bu=S.useRef(!1),Zp=S.useRef(0),$u=S.useRef(null),Kp=S.useRef(null),y_=8,Fv=50,Jp=S.useRef(null),eg=S.useRef(null),Ga=S.useRef(null),Be=typeof window<"u"?window.location.pathname:"/";S.useEffect(()=>{if(I)ne(!0);else{se(!1),Ae("main");const v=ze(()=>ne(!1),0);return()=>clearTimeout(v)}},[I]);const x_=p&&b&&!fe;S.useEffect(()=>{if(x_){pe(!1),J(!0),Ia(new Set);const v=ze(()=>{Ia(j=>{const E=new Set(j);return g.forEach(T=>E.add(T.id)),E})},350);return()=>clearTimeout(v)}else if(A){pe(!0);const v=ze(()=>{J(!1),pe(!1)},250);return()=>clearTimeout(v)}},[x_]),S.useEffect(()=>{z(!0),je(window.scrollY);const v=jh(Be);y(v.filter(Os)),F1||(qp(!0),F1=!0,ze(()=>qp(!1),750));try{const j=localStorage.getItem("feedback-toolbar-theme");j!==null&&Xp(j==="dark")}catch{}try{const j=localStorage.getItem("feedback-toolbar-position");if(j){const E=JSON.parse(j);typeof E.x=="number"&&typeof E.y=="number"&&p_(E)}}catch{}},[Be]),S.useEffect(()=>{he&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(gt))},[gt,he]),S.useEffect(()=>{he&&localStorage.setItem("feedback-toolbar-theme",Ll?"dark":"light")},[Ll,he]);const tg=S.useRef(!1);S.useEffect(()=>{const v=tg.current;tg.current=ks,v&&!ks&&It&&he&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(It))},[ks,It,he]),S.useEffect(()=>{if(!d||!he||Wp.current)return;Wp.current=!0,Ss("connecting"),(async()=>{try{const j=C7(Be),E=h||j;let T=!1;if(E)try{const O=await U1(d,E);m_(O.id),Ss("connected"),Mh(Be,O.id),T=!0;const X=jh(Be),le=new Set(O.annotations.map(ue=>ue.id)),re=X.filter(ue=>!le.has(ue.id));if(re.length>0){const Ce=`${typeof window<"u"?window.location.origin:""}${Be}`,Ue=(await Promise.allSettled(re.map(Re=>zr(d,O.id,{...Re,sessionId:O.id,url:Ce})))).map((Re,xe)=>Re.status==="fulfilled"?Re.value:(console.warn("[Agentation] Failed to sync annotation:",Re.reason),re[xe])),at=[...O.annotations,...Ue];y(at.filter(Os)),ac(Be,at.filter(Os),O.id)}else y(O.annotations.filter(Os)),ac(Be,O.annotations.filter(Os),O.id)}catch(O){console.warn("[Agentation] Could not join session, creating new:",O),j7(Be)}if(!T){const O=typeof window<"u"?window.location.href:"/",X=await Th(d,O);m_(X.id),Ss("connected"),Mh(Be,X.id),f==null||f(X.id);const le=g7(),re=typeof window<"u"?window.location.origin:"",ue=[];for(const[Ce,Te]of le){const Ue=Te.filter(xe=>!xe._syncedTo);if(Ue.length===0)continue;const at=`${re}${Ce}`,Re=Ce===Be;ue.push((async()=>{try{const xe=Re?X:await Th(d,at),Mn=(await Promise.allSettled(Ue.map(kt=>zr(d,xe.id,{...kt,sessionId:xe.id,url:at})))).map((kt,yn)=>kt.status==="fulfilled"?kt.value:(console.warn("[Agentation] Failed to sync annotation:",kt.reason),Ue[yn])).filter(Os);if(ac(Ce,Mn,xe.id),Re){const kt=new Set(Ue.map(yn=>yn.id));y(yn=>{const Xe=yn.filter(it=>!kt.has(it.id));return[...Mn,...Xe]})}}catch(xe){console.warn(`[Agentation] Failed to sync annotations for ${Ce}:`,xe)}})())}await Promise.allSettled(ue)}}catch(j){Ss("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",j)}})()},[d,h,he,f,Be]),S.useEffect(()=>{if(!d||!he)return;const v=async()=>{try{(await fetch(`${d}/health`)).ok?Ss("connected"):Ss("disconnected")}catch{Ss("disconnected")}};v();const j=bk(v,1e4);return()=>clearInterval(j)},[d,he]),S.useEffect(()=>{if(!d||!he||!Ln)return;const v=new EventSource(`${d}/sessions/${Ln}/events`),j=["resolved","dismissed"],E=T=>{var O;try{const X=JSON.parse(T.data);if(j.includes((O=X.payload)==null?void 0:O.status)){const le=X.payload.id,re=X.payload.kind;if(re==="placement"){for(const[ue,Ce]of Al.current)if(Ce===le){Al.current.delete(ue),nt(Te=>Te.filter(Ue=>Ue.id!==ue));break}}else if(re==="rearrange"){for(const[ue,Ce]of ji.current)if(Ce===le){ji.current.delete(ue),ln(Te=>{if(!Te)return null;const Ue=Te.sections.filter(at=>at.id!==ue);return Ue.length===0?null:{...Te,sections:Ue}});break}}else Nu(ue=>new Set(ue).add(le)),ze(()=>{y(ue=>ue.filter(Ce=>Ce.id!==le)),Nu(ue=>{const Ce=new Set(ue);return Ce.delete(le),Ce})},150)}}catch{}};return v.addEventListener("annotation.updated",E),()=>{v.removeEventListener("annotation.updated",E),v.close()}},[d,he,Ln]),S.useEffect(()=>{if(!d||!he)return;const v=Kp.current==="disconnected",j=Tl==="connected";Kp.current=Tl,v&&j&&(async()=>{try{const T=jh(Be);if(T.length===0)return;const X=`${typeof window<"u"?window.location.origin:""}${Be}`;let le=Ln,re=[];if(le)try{re=(await U1(d,le)).annotations}catch{le=null}le||(le=(await Th(d,X)).id,m_(le),Mh(Be,le));const ue=new Set(re.map(Te=>Te.id)),Ce=T.filter(Te=>!ue.has(Te.id));if(Ce.length>0){const Ue=(await Promise.allSettled(Ce.map(xe=>zr(d,le,{...xe,sessionId:le,url:X})))).map((xe,gn)=>xe.status==="fulfilled"?xe.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",xe.reason),Ce[gn])),Re=[...re,...Ue].filter(Os);y(Re),ac(Be,Re,le)}}catch(T){console.warn("[Agentation] Failed to sync on reconnect:",T)}})()},[Tl,d,he,Ln,Be]);const Zv=S.useCallback(()=>{k||(N(!0),ve(!1),C(!1),ze(()=>{T7(!0),R(!0),N(!1)},400))},[k]);S.useEffect(()=>{if(!n||!he||!t||t.length===0||g.length>0)return;const v=[];return v.push(ze(()=>{C(!0)},e-200)),t.forEach((j,E)=>{const T=e+E*300;v.push(ze(()=>{const O=document.querySelector(j.selector);if(!O)return;const X=O.getBoundingClientRect(),{name:le,path:re}=ma(O),ue={id:`demo-${Date.now()}-${E}`,x:(X.left+X.width/2)/window.innerWidth*100,y:X.top+X.height/2+window.scrollY,comment:j.comment,element:le,elementPath:re,timestamp:Date.now(),selectedText:j.selectedText,boundingBox:{x:X.left,y:X.top+window.scrollY,width:X.width,height:X.height},nearbyText:sc(O),cssClasses:rc(O)};y(Ce=>[...Ce,ue])},T))}),()=>{v.forEach(clearTimeout)}},[n,he,t,e]),S.useEffect(()=>{const v=()=>{je(window.scrollY),Qe(!0),Ga.current&&clearTimeout(Ga.current),Ga.current=ze(()=>{Qe(!1)},150)};return window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),Ga.current&&clearTimeout(Ga.current)}},[]),S.useEffect(()=>{he&&g.length>0?Ln?ac(Be,g,Ln):Lv(Be,g):he&&g.length===0&&localStorage.removeItem(If(Be))},[g,Be,he,Ln]),S.useEffect(()=>{if(he&&!ke.current){ke.current=!0;const v=y7(Be);v.length>0&&nt(v)}},[he,Be]),S.useEffect(()=>{he&&ke.current&&!Z&&(ce.length>0?x7(Be,ce):b7(Be))},[ce,Be,he,Z]),S.useEffect(()=>{if(he&&!Xt.current){Xt.current=!0;const v=v7(Be);if(v){const j={...v,sections:v.sections.map(E=>({...E,currentRect:E.currentRect??{...E.originalRect}}))};ln(j)}}},[he,Be]),S.useEffect(()=>{he&&Xt.current&&!Z&&(ee?w7(Be,ee):S7(Be))},[ee,Be,he,Z]);const b_=S.useRef(!1);S.useEffect(()=>{if(he&&!b_.current){b_.current=!0;const v=k7(Be);v&&(In.current={rearrange:v.rearrange,placements:v.placements||[]},v.purpose&&$t(v.purpose))}},[he,Be]),S.useEffect(()=>{var j,E,T;if(!he||!b_.current)return;const v=In.current;Z?(((j=ee==null?void 0:ee.sections)==null?void 0:j.length)??0)>0||ce.length>0||Ze?Y1(Be,{rearrange:ee,placements:ce,purpose:Ze}):jd(Be):(((T=(E=v.rearrange)==null?void 0:E.sections)==null?void 0:T.length)??0)>0||v.placements.length>0||Ze?Y1(Be,{rearrange:v.rearrange,placements:v.placements,purpose:Ze}):jd(Be)},[ee,ce,Ze,Z,Be,he]),S.useEffect(()=>{fe&&!ee&&ln({sections:[],originalOrder:[],detectedAt:Date.now()})},[fe,ee]),S.useEffect(()=>{if(!d||!Ln)return;const v=Al.current,j=new Set(ce.map(E=>E.id));for(const E of ce){if(v.has(E.id))continue;v.set(E.id,"");const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Be;zr(d,Ln,{id:E.id,x:E.x/window.innerWidth*100,y:E.y,comment:`Place ${E.type} at (${Math.round(E.x)}, ${Math.round(E.y)}), ${E.width}×${E.height}px${E.text?` — "${E.text}"`:""}`,element:`[design:${E.type}]`,elementPath:"[placement]",timestamp:E.timestamp,url:T,intent:"change",severity:"important",kind:"placement",placement:{componentType:E.type,width:E.width,height:E.height,scrollY:E.scrollY,text:E.text}}).then(O=>{v.has(E.id)&&v.set(E.id,O.id)}).catch(O=>{console.warn("[Agentation] Failed to sync placement annotation:",O),v.delete(E.id)})}for(const[E,T]of v)j.has(E)||(v.delete(E),T&&Ao(d,T).catch(()=>{}))},[ce,d,Ln,Be]),S.useEffect(()=>{if(!(!d||!Ln))return Xa.current&&clearTimeout(Xa.current),Xa.current=ze(()=>{const v=ji.current;if(!ee||ee.sections.length===0){for(const[,T]of v)T&&Ao(d,T).catch(()=>{});v.clear();return}const j=new Set(ee.sections.map(T=>T.id)),E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Be;for(const T of ee.sections){const O=T.originalRect,X=T.currentRect;if(!(Math.abs(O.x-X.x)>1||Math.abs(O.y-X.y)>1||Math.abs(O.width-X.width)>1||Math.abs(O.height-X.height)>1)){const ue=v.get(T.id);ue&&(v.delete(T.id),Ao(d,ue).catch(()=>{}));continue}const re=v.get(T.id);re?X1(d,re,{comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round(O.x)},${Math.round(O.y)}) ${Math.round(O.width)}×${Math.round(O.height)} to (${Math.round(X.x)},${Math.round(X.y)}) ${Math.round(X.width)}×${Math.round(X.height)}`}).catch(ue=>{console.warn("[Agentation] Failed to update rearrange annotation:",ue)}):(v.set(T.id,""),zr(d,Ln,{id:T.id,x:X.x/window.innerWidth*100,y:X.y,comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round(O.x)},${Math.round(O.y)}) ${Math.round(O.width)}×${Math.round(O.height)} to (${Math.round(X.x)},${Math.round(X.y)}) ${Math.round(X.width)}×${Math.round(X.height)}`,element:T.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:E,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:T.selector,label:T.label,tagName:T.tagName,originalRect:O,currentRect:X}}).then(ue=>{v.has(T.id)&&v.set(T.id,ue.id)}).catch(ue=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ue),v.delete(T.id)}))}for(const[T,O]of v)j.has(T)||(v.delete(T),O&&Ao(d,O).catch(()=>{}))},300),()=>{Xa.current&&clearTimeout(Xa.current)}},[ee,d,Ln,Be]);const Sr=S.useRef(new Map);S.useLayoutEffect(()=>{const v=(ee==null?void 0:ee.sections)??[],j=new Set;if((fe||Fe)&&p)for(const E of v){j.add(E.id);try{const T=document.querySelector(E.selector);if(!T)continue;if(!Sr.current.has(E.id)){const O={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},X=[];let le=T.parentElement;for(;le&&le!==document.body;){const ue=getComputedStyle(le);(ue.overflow!=="visible"||ue.overflowX!=="visible"||ue.overflowY!=="visible")&&(X.push({el:le,overflow:le.style.overflow}),le.style.overflow="visible"),le=le.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),Sr.current.set(E.id,{el:T,origStyles:O,ancestors:X}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(const[E,T]of Sr.current)if(!j.has(E)){const{el:O,origStyles:X,ancestors:le}=T;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=X.transform,O.style.transformOrigin=X.transformOrigin,O.style.opacity=X.opacity,O.style.position=X.position,O.style.zIndex=X.zIndex,Sr.current.delete(E),ze(()=>{O.style.transition="",O.style.display=X.display;for(const re of le)re.el.style.overflow=re.overflow},450)}},[ee,fe,Fe,p]),S.useEffect(()=>()=>{for(const[,v]of Sr.current){const{el:j,origStyles:E,ancestors:T}=v;j.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",j.style.transform=E.transform,j.style.transformOrigin=E.transformOrigin,j.style.opacity=E.opacity,j.style.position=E.position,j.style.zIndex=E.zIndex,ze(()=>{j.style.transition="",j.style.display=E.display;for(const O of T)O.el.style.overflow=O.overflow},450)}Sr.current.clear()},[]);const Hu=S.useCallback(()=>{jt(!0),qe(!1),We(null),clearTimeout(_i.current),_i.current=ze(()=>{jt(!1)},300)},[]),ng=S.useCallback(()=>{fe&&(jt(!0),qe(!1),We(null),clearTimeout(_i.current),_i.current=ze(()=>{jt(!1)},300)),C(!1)},[fe]),ig=S.useCallback(()=>{B||(wk(),W(!0))},[B]),Yu=S.useCallback(()=>{B&&(j1(),W(!1))},[B]),v_=S.useCallback(()=>{B?Yu():ig()},[B,ig,Yu]),lg=S.useCallback(()=>{if(jn.length===0)return;const v=jn[0],j=v.element,E=jn.length>1,T=jn.map(O=>O.element.getBoundingClientRect());if(E){const O={left:Math.min(...T.map(xe=>xe.left)),top:Math.min(...T.map(xe=>xe.top)),right:Math.max(...T.map(xe=>xe.right)),bottom:Math.max(...T.map(xe=>xe.bottom))},X=jn.slice(0,5).map(xe=>xe.name).join(", "),le=jn.length>5?` +${jn.length-5} more`:"",re=T.map(xe=>({x:xe.left,y:xe.top+window.scrollY,width:xe.width,height:xe.height})),Ce=jn[jn.length-1].element,Te=T[T.length-1],Ue=Te.left+Te.width/2,at=Te.top+Te.height/2,Re=Ah(Ce);te({x:Ue/window.innerWidth*100,y:Re?at:at+window.scrollY,clientY:at,element:`${jn.length} elements: ${X}${le}`,elementPath:"multi-select",boundingBox:{x:O.left,y:O.top+window.scrollY,width:O.right-O.left,height:O.bottom-O.top},isMultiSelect:!0,isFixed:Re,elementBoundingBoxes:re,multiSelectElements:jn.map(xe=>xe.element),targetElement:Ce,fullPath:Sd(j),accessibility:wd(j),computedStyles:vd(j),computedStylesObj:bd(j),nearbyElements:xd(j),cssClasses:rc(j),nearbyText:sc(j),sourceFile:Ed(j)})}else{const O=T[0],X=Ah(j);te({x:O.left/window.innerWidth*100,y:X?O.top:O.top+window.scrollY,clientY:O.top,element:v.name,elementPath:v.path,boundingBox:{x:O.left,y:X?O.top:O.top+window.scrollY,width:O.width,height:O.height},isFixed:X,fullPath:Sd(j),accessibility:wd(j),computedStyles:vd(j),computedStylesObj:bd(j),nearbyElements:xd(j),cssClasses:rc(j),nearbyText:sc(j),reactComponents:v.reactComponents,sourceFile:Ed(j)})}xr([]),ae(null)},[jn]);S.useEffect(()=>{p||(te(null),ye(null),_e(null),$e([]),ae(null),ve(!1),xr([]),Nl.current={cmd:!1,shift:!1},B&&Yu())},[p,B,Yu]),S.useEffect(()=>()=>{j1()},[]),S.useEffect(()=>{if(!p)return;const v=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),j=":not([data-agentation-root]):not([data-agentation-root] *)",E=document.createElement("style");return E.id="feedback-cursor-styles",E.textContent=`
      body ${j} {
        cursor: crosshair !important;
      }

      body :is(${v})${j} {
        cursor: text !important;
      }
    `,document.head.appendChild(E),()=>{const T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[p]),S.useEffect(()=>{if(Hp!==null&&p)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Hp,p]),S.useEffect(()=>{if(!p||H||Ml||fe)return;const v=j=>{const E=j.composedPath()[0]||j.target;if(gi(E,"[data-feedback-toolbar]")){ae(null);return}const T=zs(j.clientX,j.clientY);if(!T||gi(T,"[data-feedback-toolbar]")){ae(null);return}const{name:O,elementName:X,path:le,reactComponents:re}=zh(T,ws),ue=T.getBoundingClientRect();ae({element:O,elementName:X,elementPath:le,rect:ue,reactComponents:re}),F({x:j.clientX,y:j.clientY})};return document.addEventListener("mousemove",v),()=>document.removeEventListener("mousemove",v)},[p,H,Ml,fe,ws,ul]);const Uu=S.useCallback(v=>{var j;if(ye(v),Zt(null),zt(null),Ne([]),(j=v.elementBoundingBoxes)!=null&&j.length){const E=[];for(const T of v.elementBoundingBoxes){const O=T.x+T.width/2,X=T.y+T.height/2-window.scrollY,le=zs(O,X);le&&E.push(le)}$e(E),_e(null)}else if(v.boundingBox){const E=v.boundingBox,T=E.x+E.width/2,O=v.isFixed?E.y+E.height/2:E.y+E.height/2-window.scrollY,X=zs(T,O);if(X){const le=X.getBoundingClientRect(),re=le.width/E.width,ue=le.height/E.height;re<.5||ue<.5?_e(null):_e(X)}else _e(null);$e([])}else _e(null),$e([])},[]);S.useEffect(()=>{if(!p||Ml||fe)return;const v=j=>{var Kt,Mn;if(Bu.current){Bu.current=!1;return}const E=j.composedPath()[0]||j.target;if(gi(E,"[data-feedback-toolbar]")||gi(E,"[data-annotation-popup]")||gi(E,"[data-annotation-marker]"))return;if(j.metaKey&&j.shiftKey&&!H&&!U){j.preventDefault(),j.stopPropagation();const kt=zs(j.clientX,j.clientY);if(!kt)return;const yn=kt.getBoundingClientRect(),{name:Xe,path:it,reactComponents:Bn}=zh(kt,ws),on=jn.findIndex(hi=>hi.element===kt);on>=0?xr(hi=>hi.filter((Xi,$n)=>$n!==on)):xr(hi=>[...hi,{element:kt,rect:yn,name:Xe,path:it,reactComponents:Bn??void 0}]);return}const T=gi(E,"button, a, input, select, textarea, [role='button'], [onclick]");if(gt.blockInteractions&&T&&(j.preventDefault(),j.stopPropagation()),H){if(T&&!gt.blockInteractions)return;j.preventDefault(),(Kt=Jp.current)==null||Kt.shake();return}if(U){if(T&&!gt.blockInteractions)return;j.preventDefault(),(Mn=eg.current)==null||Mn.shake();return}j.preventDefault();const O=zs(j.clientX,j.clientY);if(!O)return;const{name:X,path:le,reactComponents:re}=zh(O,ws),ue=O.getBoundingClientRect(),Ce=j.clientX/window.innerWidth*100,Te=Ah(O),Ue=Te?j.clientY:j.clientY+window.scrollY,at=window.getSelection();let Re;at&&at.toString().trim().length>0&&(Re=at.toString().trim().slice(0,500));const xe=bd(O),gn=vd(O);te({x:Ce,y:Ue,clientY:j.clientY,element:X,elementPath:le,selectedText:Re,boundingBox:{x:ue.left,y:Te?ue.top:ue.top+window.scrollY,width:ue.width,height:ue.height},nearbyText:sc(O),cssClasses:rc(O),isFixed:Te,fullPath:Sd(O),accessibility:wd(O),computedStyles:gn,computedStylesObj:xe,nearbyElements:xd(O),reactComponents:re??void 0,sourceFile:Ed(O),targetElement:O}),ae(null)};return document.addEventListener("click",v,!0),()=>document.removeEventListener("click",v,!0)},[p,Ml,fe,H,U,gt.blockInteractions,ws,jn]),S.useEffect(()=>{if(!p)return;const v=T=>{T.key==="Meta"&&(Nl.current.cmd=!0),T.key==="Shift"&&(Nl.current.shift=!0)},j=T=>{const O=Nl.current.cmd&&Nl.current.shift;T.key==="Meta"&&(Nl.current.cmd=!1),T.key==="Shift"&&(Nl.current.shift=!1);const X=Nl.current.cmd&&Nl.current.shift;O&&!X&&jn.length>0&&lg()},E=()=>{Nl.current={cmd:!1,shift:!1},xr([])};return document.addEventListener("keydown",v),document.addEventListener("keyup",j),window.addEventListener("blur",E),()=>{document.removeEventListener("keydown",v),document.removeEventListener("keyup",j),window.removeEventListener("blur",E)}},[p,jn,lg]),S.useEffect(()=>{if(!p||H||Ml||fe)return;const v=j=>{const E=j.composedPath()[0]||j.target;gi(E,"[data-feedback-toolbar]")||gi(E,"[data-annotation-marker]")||gi(E,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(E.tagName)||E.isContentEditable||(j.preventDefault(),wr.current={x:j.clientX,y:j.clientY})};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[p,H,Ml,fe]),S.useEffect(()=>{if(!p||H)return;const v=j=>{if(!wr.current)return;const E=j.clientX-wr.current.x,T=j.clientY-wr.current.y,O=E*E+T*T,X=y_*y_;if(!to&&O>=X&&(Bl.current=wr.current,Fp(!0),j.preventDefault()),(to||O>=X)&&Bl.current){if(Wa.current){const Xe=Math.min(Bl.current.x,j.clientX),it=Math.min(Bl.current.y,j.clientY),Bn=Math.abs(j.clientX-Bl.current.x),on=Math.abs(j.clientY-Bl.current.y);Wa.current.style.transform=`translate(${Xe}px, ${it}px)`,Wa.current.style.width=`${Bn}px`,Wa.current.style.height=`${on}px`}const le=Date.now();if(le-Zp.current<Fv)return;Zp.current=le;const re=Bl.current.x,ue=Bl.current.y,Ce=Math.min(re,j.clientX),Te=Math.min(ue,j.clientY),Ue=Math.max(re,j.clientX),at=Math.max(ue,j.clientY),Re=(Ce+Ue)/2,xe=(Te+at)/2,gn=new Set,Kt=[[Ce,Te],[Ue,Te],[Ce,at],[Ue,at],[Re,xe],[Re,Te],[Re,at],[Ce,xe],[Ue,xe]];for(const[Xe,it]of Kt){const Bn=document.elementsFromPoint(Xe,it);for(const on of Bn)on instanceof HTMLElement&&gn.add(on)}const Mn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Xe of Mn)if(Xe instanceof HTMLElement){const it=Xe.getBoundingClientRect(),Bn=it.left+it.width/2,on=it.top+it.height/2,hi=Bn>=Ce&&Bn<=Ue&&on>=Te&&on<=at,Xi=Math.min(it.right,Ue)-Math.max(it.left,Ce),$n=Math.min(it.bottom,at)-Math.max(it.top,Te),Pa=Xi>0&&$n>0?Xi*$n:0,js=it.width*it.height,Do=js>0?Pa/js:0;(hi||Do>.5)&&gn.add(Xe)}const kt=[],yn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Xe of gn){if(gi(Xe,"[data-feedback-toolbar]")||gi(Xe,"[data-annotation-marker]"))continue;const it=Xe.getBoundingClientRect();if(!(it.width>window.innerWidth*.8&&it.height>window.innerHeight*.5)&&!(it.width<10||it.height<10)&&it.left<Ue&&it.right>Ce&&it.top<at&&it.bottom>Te){const Bn=Xe.tagName;let on=yn.has(Bn);if(!on&&(Bn==="DIV"||Bn==="SPAN")){const hi=Xe.textContent&&Xe.textContent.trim().length>0,Xi=Xe.onclick!==null||Xe.getAttribute("role")==="button"||Xe.getAttribute("role")==="link"||Xe.classList.contains("clickable")||Xe.hasAttribute("data-clickable");(hi||Xi)&&!Xe.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(on=!0)}if(on){let hi=!1;for(const Xi of kt)if(Xi.left<=it.left&&Xi.right>=it.right&&Xi.top<=it.top&&Xi.bottom>=it.bottom){hi=!0;break}hi||kt.push(it)}}}if(Qa.current){const Xe=Qa.current;for(;Xe.children.length>kt.length;)Xe.removeChild(Xe.lastChild);kt.forEach((it,Bn)=>{let on=Xe.children[Bn];on||(on=document.createElement("div"),on.className=K.selectedElementHighlight,Xe.appendChild(on)),on.style.transform=`translate(${it.left}px, ${it.top}px)`,on.style.width=`${it.width}px`,on.style.height=`${it.height}px`})}}};return document.addEventListener("mousemove",v,{passive:!0}),()=>document.removeEventListener("mousemove",v)},[p,H,to,y_]),S.useEffect(()=>{if(!p)return;const v=j=>{const E=to,T=Bl.current;if(to&&T){Bu.current=!0;const O=Math.min(T.x,j.clientX),X=Math.min(T.y,j.clientY),le=Math.max(T.x,j.clientX),re=Math.max(T.y,j.clientY),ue=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Re=>{if(!(Re instanceof HTMLElement)||gi(Re,"[data-feedback-toolbar]")||gi(Re,"[data-annotation-marker]"))return;const xe=Re.getBoundingClientRect();xe.width>window.innerWidth*.8&&xe.height>window.innerHeight*.5||xe.width<10||xe.height<10||xe.left<le&&xe.right>O&&xe.top<re&&xe.bottom>X&&ue.push({element:Re,rect:xe})});const Te=ue.filter(({element:Re})=>!ue.some(({element:xe})=>xe!==Re&&Re.contains(xe))),Ue=j.clientX/window.innerWidth*100,at=j.clientY+window.scrollY;if(Te.length>0){const Re=Te.reduce((yn,{rect:Xe})=>({left:Math.min(yn.left,Xe.left),top:Math.min(yn.top,Xe.top),right:Math.max(yn.right,Xe.right),bottom:Math.max(yn.bottom,Xe.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),xe=Te.slice(0,5).map(({element:yn})=>ma(yn).name).join(", "),gn=Te.length>5?` +${Te.length-5} more`:"",Kt=Te[0].element,Mn=bd(Kt),kt=vd(Kt);te({x:Ue,y:at,clientY:j.clientY,element:`${Te.length} elements: ${xe}${gn}`,elementPath:"multi-select",boundingBox:{x:Re.left,y:Re.top+window.scrollY,width:Re.right-Re.left,height:Re.bottom-Re.top},isMultiSelect:!0,fullPath:Sd(Kt),accessibility:wd(Kt),computedStyles:kt,computedStylesObj:Mn,nearbyElements:xd(Kt),cssClasses:rc(Kt),nearbyText:sc(Kt),sourceFile:Ed(Kt)})}else{const Re=Math.abs(le-O),xe=Math.abs(re-X);Re>20&&xe>20&&te({x:Ue,y:at,clientY:j.clientY,element:"Area selection",elementPath:`region at (${Math.round(O)}, ${Math.round(X)})`,boundingBox:{x:O,y:X+window.scrollY,width:Re,height:xe},isMultiSelect:!0})}ae(null)}else E&&(Bu.current=!0);wr.current=null,Bl.current=null,Fp(!1),Qa.current&&(Qa.current.innerHTML="")};return document.addEventListener("mouseup",v),()=>document.removeEventListener("mouseup",v)},[p,to]);const $l=S.useCallback(async(v,j,E)=>{const T=gt.webhookUrl||_;if(!T||!gt.webhooksEnabled&&!E)return!1;try{return(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:v,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...j})})).ok}catch(O){return console.warn("[Agentation] Webhook failed:",O),!1}},[_,gt.webhookUrl,gt.webhooksEnabled]),Kv=S.useCallback(v=>{var E;if(!H)return;const j={id:Date.now().toString(),x:H.x,y:H.y,comment:v,element:H.element,elementPath:H.elementPath,timestamp:Date.now(),selectedText:H.selectedText,boundingBox:H.boundingBox,nearbyText:H.nearbyText,cssClasses:H.cssClasses,isMultiSelect:H.isMultiSelect,isFixed:H.isFixed,fullPath:H.fullPath,accessibility:H.accessibility,computedStyles:H.computedStyles,nearbyElements:H.nearbyElements,reactComponents:H.reactComponents,sourceFile:H.sourceFile,elementBoundingBoxes:H.elementBoundingBoxes,...d&&Ln?{sessionId:Ln,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};y(T=>[...T,j]),$u.current=j.id,ze(()=>{$u.current=null},300),ze(()=>{Ia(T=>new Set(T).add(j.id))},250),i==null||i(j),$l("annotation.add",{annotation:j}),Lu(!0),ze(()=>{te(null),Lu(!1)},150),(E=window.getSelection())==null||E.removeAllRanges(),d&&Ln&&zr(d,Ln,j).then(T=>{T.id!==j.id&&(y(O=>O.map(X=>X.id===j.id?{...X,id:T.id}:X)),Ia(O=>{const X=new Set(O);return X.delete(j.id),X.add(T.id),X}))}).catch(T=>{console.warn("[Agentation] Failed to sync annotation:",T)})},[H,i,$l,d,Ln]),w_=S.useCallback(()=>{Lu(!0),ze(()=>{te(null),Lu(!1)},150)},[]),S_=S.useCallback(v=>{const j=g.findIndex(T=>T.id===v),E=g[j];(U==null?void 0:U.id)===v&&(vr(!0),ze(()=>{ye(null),_e(null),$e([]),vr(!1)},150)),an(v),Nu(T=>new Set(T).add(v)),E&&(l==null||l(E),$l("annotation.delete",{annotation:E})),d&&Ao(d,v).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)}),ze(()=>{y(T=>T.filter(O=>O.id!==v)),Nu(T=>{const O=new Set(T);return O.delete(v),O}),an(null),j<g.length-1&&(Y(j),ze(()=>Y(null),200))},150)},[g,U,l,$l,d]),Xu=S.useCallback(v=>{var j;if(!v){Zt(null),zt(null),Ne([]);return}if(Zt(v.id),(j=v.elementBoundingBoxes)!=null&&j.length){const E=[];for(const T of v.elementBoundingBoxes){const O=T.x+T.width/2,X=T.y+T.height/2-window.scrollY,re=document.elementsFromPoint(O,X).find(ue=>!ue.closest("[data-annotation-marker]")&&!ue.closest("[data-agentation-root]"));re&&E.push(re)}Ne(E),zt(null)}else if(v.boundingBox){const E=v.boundingBox,T=E.x+E.width/2,O=v.isFixed?E.y+E.height/2:E.y+E.height/2-window.scrollY,X=zs(T,O);if(X){const le=X.getBoundingClientRect(),re=le.width/E.width,ue=le.height/E.height;re<.5||ue<.5?zt(null):zt(X)}else zt(null);Ne([])}else zt(null),Ne([])},[]),Jv=S.useCallback(v=>{if(!U)return;const j={...U,comment:v};y(E=>E.map(T=>T.id===U.id?j:T)),o==null||o(j),$l("annotation.update",{annotation:j}),d&&X1(d,U.id,{comment:v}).catch(E=>{console.warn("[Agentation] Failed to update annotation on server:",E)}),vr(!0),ze(()=>{ye(null),_e(null),$e([]),vr(!1)},150)},[U,o,$l,d]),ew=S.useCallback(()=>{vr(!0),ze(()=>{ye(null),_e(null),$e([]),vr(!1)},150)},[]),Cs=S.useCallback(()=>{const v=g.length,j=ce.length>0||!!ee;if(v===0&&ul.length===0&&!j)return;if(s==null||s(g),$l("annotations.clear",{annotations:g}),d){Promise.all(g.map(O=>Ao(d,O.id).catch(X=>{console.warn("[Agentation] Failed to delete annotation from server:",X)})));for(const[,O]of Al.current)O&&Ao(d,O).catch(()=>{});Al.current.clear();for(const[,O]of ji.current)O&&Ao(d,O).catch(()=>{});ji.current.clear()}Ct(!0),xt(!0),Uv([]);const E=h_.current;if(E){const O=E.getContext("2d");O&&O.clearRect(0,0,E.width,E.height)}(ce.length>0||ee)&&(Cn(O=>O+1),Ui(O=>O+1),ze(()=>{nt([]),ln(null)},200)),Z&&we(!1),Ze&&$t(""),In.current={rearrange:null,placements:[]},jd(Be);const T=v*30+200;ze(()=>{y([]),Ia(new Set),localStorage.removeItem(If(Be)),Ct(!1)},T),ze(()=>xt(!1),1500)},[Be,g,ul,ce,ee,Z,Ze,s,$l,d]),k_=S.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Be,j=fe&&Z;let E;if(j){if(ce.length===0&&!ee&&!Ze)return;E=""}else{if(E=W1(g,v,gt.outputDetail),!E&&ul.length===0&&ce.length===0&&!ee)return;E||(E=`## Page Feedback: ${v}
`)}if(!j&&ul.length>0){const T=new Set;for(const re of g)re.drawingIndex!=null&&T.add(re.drawingIndex);const O=h_.current;O&&(O.style.visibility="hidden");const X=[],le=window.scrollY;for(let re=0;re<ul.length;re++){if(T.has(re))continue;const ue=ul[re];if(ue.points.length<2)continue;const Ce=ue.fixed?ue.points:ue.points.map(Tn=>({x:Tn.x,y:Tn.y-le}));let Te=1/0,Ue=1/0,at=-1/0,Re=-1/0;for(const Tn of Ce)Te=Math.min(Te,Tn.x),Ue=Math.min(Ue,Tn.y),at=Math.max(at,Tn.x),Re=Math.max(Re,Tn.y);const xe=at-Te,gn=Re-Ue,Kt=Math.hypot(xe,gn),Mn=Ce[0],kt=Ce[Ce.length-1],yn=Math.hypot(kt.x-Mn.x,kt.y-Mn.y);let Xe;const it=yn<Kt*.35,Bn=xe/Math.max(gn,1);if(it&&Kt>20){const Tn=Math.max(xe,gn)*.15;let Ro=0;for(const Ms of Ce){const iw=Ms.x-Te<Tn,lw=at-Ms.x<Tn,ow=Ms.y-Ue<Tn,sw=Re-Ms.y<Tn;(iw||lw)&&(ow||sw)&&Ro++}Xe=Ro>Ce.length*.15?"box":"circle"}else Bn>3&&gn<40?Xe="underline":yn>Kt*.5?Xe="arrow":Xe="drawing";const on=Math.min(10,Ce.length),hi=Math.max(1,Math.floor(Ce.length/on)),Xi=new Set,$n=[],Pa=[Mn];for(let Tn=hi;Tn<Ce.length-1;Tn+=hi)Pa.push(Ce[Tn]);Pa.push(kt);for(const Tn of Pa){const Ro=zs(Tn.x,Tn.y);if(!Ro||Xi.has(Ro)||gi(Ro,"[data-feedback-toolbar]"))continue;Xi.add(Ro);const{name:Ms}=ma(Ro);$n.includes(Ms)||$n.push(Ms)}const js=`${Math.round(Te)},${Math.round(Ue)} → ${Math.round(at)},${Math.round(Re)}`;let Do;(Xe==="circle"||Xe==="box")&&$n.length>0?Do=`${Xe==="box"?"Boxed":"Circled"} **${$n[0]}**${$n.length>1?` (and ${$n.slice(1).join(", ")})`:""} (region: ${js})`:Xe==="underline"&&$n.length>0?Do=`Underlined **${$n[0]}** (${js})`:Xe==="arrow"&&$n.length>=2?Do=`Arrow from **${$n[0]}** to **${$n[$n.length-1]}** (${Math.round(Mn.x)},${Math.round(Mn.y)} → ${Math.round(kt.x)},${Math.round(kt.y)})`:$n.length>0?Do=`${Xe==="arrow"?"Arrow":"Drawing"} near **${$n.join("**, **")}** (region: ${js})`:Do=`Drawing at ${js}`,X.push(Do)}O&&(O.style.visibility=""),X.length>0&&(E+=`
**Drawings:**
`,X.forEach((re,ue)=>{E+=`${ue+1}. ${re}
`}))}if((ce.length>0||j&&Ze)&&(E+=`
`+$1(ce,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Z,wireframePurpose:Ze||void 0},gt.outputDetail)),ee){const T=H1(ee,gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(E+=`
`+T)}if(u)try{await navigator.clipboard.writeText(E)}catch{}a==null||a(E),De(!0),ze(()=>De(!1),2e3),gt.autoClearAfterCopy&&ze(()=>Cs(),500)},[g,ul,ce,ee,Z,fe,Bt,Ze,Be,gt.outputDetail,ws,gt.autoClearAfterCopy,Cs,u,a]),C_=S.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Be;let j=W1(g,v,gt.outputDetail);if(!j&&ce.length===0&&!ee)return;if(j||(j=`## Page Feedback: ${v}
`),ce.length>0&&(j+=`
`+$1(ce,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Z,wireframePurpose:Ze||void 0},gt.outputDetail)),ee){const T=H1(ee,gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(j+=`
`+T)}c&&c(j,g),St("sending"),await new Promise(T=>ze(T,150));const E=await $l("submit",{output:j,annotations:g},!0);St(E?"sent":"failed"),ze(()=>St("idle"),2500),E&&gt.autoClearAfterCopy&&ze(()=>Cs(),500)},[c,$l,g,ce,ee,Z,Bt,Be,gt.outputDetail,ws,gt.autoClearAfterCopy,Cs]);S.useEffect(()=>{if(!br)return;const v=10,j=T=>{const O=T.clientX-br.x,X=T.clientY-br.y,le=Math.sqrt(O*O+X*X);if(!ks&&le>v&&Qp(!0),ks||le>v){let re=br.toolbarX+O,ue=br.toolbarY+X;const Ce=20,Te=337,Ue=44,Re=Te-(p?Tl==="connected"?297:257:44),xe=Ce-Re,gn=window.innerWidth-Ce-Te;re=Math.max(xe,Math.min(gn,re)),ue=Math.max(Ce,Math.min(window.innerHeight-Ue-Ce,ue)),p_({x:re,y:ue})}},E=()=>{ks&&(g_.current=!0),Qp(!1),Gp(null)};return document.addEventListener("mousemove",j),document.addEventListener("mouseup",E),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",E)}},[br,ks,p,Tl]);const tw=S.useCallback(v=>{if(v.target.closest("button")||v.target.closest("[data-agentation-settings-panel]"))return;const j=v.currentTarget.parentElement;if(!j)return;const E=j.getBoundingClientRect(),T=(It==null?void 0:It.x)??E.left,O=(It==null?void 0:It.y)??E.top;Gp({x:v.clientX,y:v.clientY,toolbarX:T,toolbarY:O})},[It]);if(S.useEffect(()=>{if(!It)return;const v=()=>{let O=It.x,X=It.y;const ue=20-(337-(p?Tl==="connected"?297:257:44)),Ce=window.innerWidth-20-337;O=Math.max(ue,Math.min(Ce,O)),X=Math.max(20,Math.min(window.innerHeight-44-20,X)),(O!==It.x||X!==It.y)&&p_({x:O,y:X})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[It,p,Tl]),S.useEffect(()=>{const v=j=>{const E=j.target,T=E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable;if(j.key==="Escape"){if(fe){He?We(null):Hu();return}if(Ml){__(!1);return}if(jn.length>0){xr([]);return}H||p&&(ri(),C(!1))}if((j.metaKey||j.ctrlKey)&&j.shiftKey&&(j.key==="f"||j.key==="F")){j.preventDefault(),ri(),p?ng():C(!0);return}if(!(T||j.metaKey||j.ctrlKey)&&((j.key==="p"||j.key==="P")&&(j.preventDefault(),ri(),v_()),(j.key==="l"||j.key==="L")&&(j.preventDefault(),ri(),Ml&&__(!1),I&&ve(!1),H&&w_(),fe?Hu():qe(!0)),(j.key==="h"||j.key==="H")&&g.length>0&&(j.preventDefault(),ri(),x(O=>!O)),(j.key==="c"||j.key==="C")&&(g.length>0||ce.length>0||ee)&&(j.preventDefault(),ri(),k_()),(j.key==="x"||j.key==="X")&&(g.length>0||ce.length>0||ee)&&(j.preventDefault(),ri(),Cs(),ce.length>0&&nt([]),ee&&ln(null)),j.key==="s"||j.key==="S")){const O=Hl(gt.webhookUrl)||Hl(_||"");g.length>0&&O&&_t==="idle"&&(j.preventDefault(),ri(),C_())}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[p,Ml,fe,He,ce,ee,H,g.length,gt.webhookUrl,_,_t,C_,v_,k_,Cs,jn]),!he||M)return null;const Va=g.length>0,kr=g.filter(v=>!Pp.has(v.id)&&v.kind!=="placement"&&v.kind!=="rearrange"),nw=kr.length>0,og=g.filter(v=>Pp.has(v.id)),sg=v=>{const X=v.x/100*window.innerWidth,le=typeof v.y=="string"?parseFloat(v.y):v.y,re={};window.innerHeight-le-22-10<80&&(re.top="auto",re.bottom="calc(100% + 10px)");const Ce=X-200/2,Te=10;if(Ce<Te){const Ue=Te-Ce;re.left=`calc(50% + ${Ue}px)`}else if(Ce+200>window.innerWidth-Te){const Ue=Ce+200-(window.innerWidth-Te);re.left=`calc(50% - ${Ue}px)`}return re};return $m.createPortal(r.jsxs("div",{ref:L,style:{display:"contents"},"data-agentation-theme":Ll?"dark":"light","data-agentation-accent":gt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${K.toolbar}${m?` ${m}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:It?{left:It.x,top:It.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${K.toolbarContainer} ${p?K.expanded:K.collapsed} ${Ip?K.entrance:""} ${k?K.hiding:""} ${!gt.webhooksEnabled&&(Hl(gt.webhookUrl)||Hl(_||""))?K.serverConnected:""}`,onClick:p?void 0:v=>{if(g_.current){g_.current=!1,v.preventDefault();return}C(!0)},onMouseDown:tw,role:p?void 0:"button",tabIndex:p?-1:0,title:p?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${K.toggleContent} ${p?K.hidden:K.visible}`,children:[r.jsx(lk,{size:24}),nw&&r.jsx("span",{className:`${K.badge} ${p?K.fadeOut:""} ${Ip?K.entrance:""}`,children:kr.length})]}),r.jsxs("div",{className:`${K.controlsContent} ${p?K.visible:K.hidden} ${It&&It.y<100?K.tooltipBelow:""} ${Je||I?K.tooltipsHidden:""} ${Yp?K.tooltipsInSession:""}`,onMouseEnter:qv,onMouseLeave:Wv,children:[r.jsxs("div",{className:`${K.buttonWrapper} ${It&&It.x<120?K.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:K.controlButton,onClick:v=>{v.stopPropagation(),ri(),v_()},"data-active":B,children:r.jsx(ck,{size:24,isPaused:B})}),r.jsxs("span",{className:K.buttonTooltip,children:[B?"Resume animations":"Pause animations",r.jsx("span",{className:K.shortcut,children:"P"})]})]}),r.jsxs("div",{className:K.buttonWrapper,children:[r.jsx("button",{className:`${K.controlButton} ${Ll?"":K.light}`,onClick:v=>{v.stopPropagation(),ri(),Ml&&__(!1),I&&ve(!1),H&&w_(),fe?Hu():qe(!0)},"data-active":fe,style:fe&&Z?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(yk,{size:21})}),r.jsxs("span",{className:K.buttonTooltip,children:[fe?"Exit layout mode":"Layout mode",r.jsx("span",{className:K.shortcut,children:"L"})]})]}),r.jsxs("div",{className:K.buttonWrapper,children:[r.jsx("button",{className:K.controlButton,onClick:v=>{v.stopPropagation(),ri(),x(!b)},disabled:!Va||fe,children:r.jsx(ak,{size:24,isOpen:b})}),r.jsxs("span",{className:K.buttonTooltip,children:[b?"Hide markers":"Show markers",r.jsx("span",{className:K.shortcut,children:"H"})]})]}),r.jsxs("div",{className:K.buttonWrapper,children:[r.jsx("button",{className:`${K.controlButton} ${D?K.statusShowing:""}`,onClick:v=>{v.stopPropagation(),ri(),k_()},disabled:fe&&Z?ce.length===0&&!((rg=ee==null?void 0:ee.sections)!=null&&rg.length):!Va&&ul.length===0&&ce.length===0&&!((ag=ee==null?void 0:ee.sections)!=null&&ag.length),"data-active":D,children:r.jsx(sk,{size:24,copied:D,tint:fe&&Z&&(ce.length>0||(cg=ee==null?void 0:ee.sections)!=null&&cg.length)?"#f97316":void 0})}),r.jsxs("span",{className:K.buttonTooltip,children:[fe&&Z?"Copy layout":"Copy feedback",r.jsx("span",{className:K.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${K.buttonWrapper} ${K.sendButtonWrapper} ${p&&!gt.webhooksEnabled&&(Hl(gt.webhookUrl)||Hl(_||""))?K.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${K.controlButton} ${_t==="sent"||_t==="failed"?K.statusShowing:""}`,onClick:v=>{v.stopPropagation(),ri(),C_()},disabled:!Va||!Hl(gt.webhookUrl)&&!Hl(_||"")||_t==="sending","data-no-hover":_t==="sent"||_t==="failed",tabIndex:Hl(gt.webhookUrl)||Hl(_||"")?0:-1,children:[r.jsx(rk,{size:24,state:_t}),Va&&_t==="idle"&&r.jsx("span",{className:K.buttonBadge,children:g.length})]}),r.jsxs("span",{className:K.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:K.shortcut,children:"S"})]})]}),r.jsxs("div",{className:K.buttonWrapper,children:[r.jsx("button",{className:K.controlButton,onClick:v=>{v.stopPropagation(),ri(),Cs()},disabled:!Va&&ul.length===0&&ce.length===0&&!((ug=ee==null?void 0:ee.sections)!=null&&ug.length),"data-danger":!0,children:r.jsx(dk,{size:24})}),r.jsxs("span",{className:K.buttonTooltip,children:["Clear all",r.jsx("span",{className:K.shortcut,children:"X"})]})]}),r.jsxs("div",{className:K.buttonWrapper,children:[r.jsx("button",{className:K.controlButton,onClick:v=>{v.stopPropagation(),ri(),fe&&Hu(),ve(!I)},children:r.jsx(uk,{size:24})}),d&&Tl!=="disconnected"&&r.jsx("span",{className:`${K.mcpIndicator} ${K[Tl]} ${I?K.hidden:""}`,title:Tl==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:K.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:K.divider}),r.jsxs("div",{className:`${K.buttonWrapper} ${It&&typeof window<"u"&&It.x>window.innerWidth-120?K.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:K.controlButton,onClick:v=>{v.stopPropagation(),ri(),ng()},children:r.jsx(fk,{size:24})}),r.jsxs("span",{className:K.buttonTooltip,children:["Exit",r.jsx("span",{className:K.shortcut,children:"Esc"})]})]})]}),r.jsx(G8,{visible:fe&&p,activeType:He,onSelect:v=>{We(He===v?null:v)},isDarkMode:Ll,sectionCount:(ee==null?void 0:ee.sections.length)??0,onDetectSections:()=>{const v=l7(),j=(ee==null?void 0:ee.sections)??[],E=new Set(j.map(le=>le.selector)),T=v.filter(le=>!E.has(le.selector)),O=[...j,...T],X=[...(ee==null?void 0:ee.originalOrder)??[],...T.map(le=>le.id)];ln({sections:O,originalOrder:X,detectedAt:Date.now()})},placementCount:ce.length,onClearPlacements:()=>{Cn(v=>v+1),Ui(v=>v+1),ze(()=>{ln({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Z,onBlankCanvasChange:v=>{const j={sections:[],originalOrder:[],detectedAt:Date.now()};v?(Kn.current={rearrange:ee,placements:ce},ln(In.current.rearrange||j),nt(In.current.placements),We(null)):(In.current={rearrange:ee,placements:ce},ln(Kn.current.rearrange||j),nt(Kn.current.placements)),we(v)},wireframePurpose:Ze,onWireframePurposeChange:$t,Tooltip:Us,onDragStart:(v,j)=>{j.preventDefault();const E=ge[v];let T=null,O=!1;const X=j.clientX,le=j.clientY,re=j.target.closest("[data-feedback-toolbar]"),ue=(re==null?void 0:re.getBoundingClientRect().top)??window.innerHeight,Ce=Ue=>{const at=Ue.clientX-X,Re=Ue.clientY-le;if(!O&&(Math.abs(at)>4||Math.abs(Re)>4)&&(O=!0,T=document.createElement("div"),T.className=`${Q.dragPreview}${Z?` ${Q.dragPreviewWireframe}`:""}`,document.body.appendChild(T)),!T)return;const xe=Math.max(0,ue-Ue.clientY),gn=Math.min(1,xe/180),Kt=1-Math.pow(1-gn,2),Mn=28,kt=20,yn=Math.min(140,E.width*.18),Xe=Math.min(90,E.height*.18),it=Mn+(yn-Mn)*Kt,Bn=kt+(Xe-kt)*Kt;T.style.width=`${it}px`,T.style.height=`${Bn}px`,T.style.left=`${Ue.clientX-it/2}px`,T.style.top=`${Ue.clientY-Bn/2}px`,T.style.opacity=`${.5+.5*Kt}`,T.textContent=Kt>.25?v:""},Te=Ue=>{if(window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",Te),T&&document.body.removeChild(T),O){const at=E.width,Re=E.height,xe=window.scrollY,gn=Math.max(0,Ue.clientX-at/2),Kt=Math.max(0,Ue.clientY+xe-Re/2),Mn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:v,x:gn,y:Kt,width:at,height:Re,scrollY:xe,timestamp:Date.now()};nt(kt=>[...kt,Mn]),We(null),eo.current=new Set,kn(kt=>kt+1)}};window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",Te)}}),r.jsx(_9,{settings:gt,onSettingsChange:v=>Qv(j=>({...j,...v})),isDarkMode:Ll,onToggleTheme:Gv,isDevMode:Vv,connectionStatus:Tl,endpoint:d,isVisible:de,toolbarNearBottom:!!It&&It.y<230,settingsPage:Pe,onSettingsPageChange:Ae,onHideToolbar:Zv})]})}),(fe||Fe)&&r.jsx("div",{className:`${Q.blankCanvas} ${ie?Q.visible:""} ${bt?Q.gridActive:""}`,style:{"--canvas-opacity":me},"data-feedback-toolbar":!0}),fe&&Z&&ie&&r.jsxs("div",{className:Q.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:Q.wireframeOpacityRow,children:[r.jsx("span",{className:Q.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:Q.wireframeOpacitySlider,min:0,max:1,step:.01,value:me,onChange:v=>Le(Number(v.target.value))})]}),r.jsxs("div",{className:Q.wireframeNoticeTitleRow,children:[r.jsx("span",{className:Q.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:Q.wireframeNoticeDivider}),r.jsx("button",{className:Q.wireframeStartOver,onClick:()=>{Cn(v=>v+1),ln({sections:[],originalOrder:[],detectedAt:Date.now()}),In.current={rearrange:null,placements:[]},$t(""),jd(Be)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(fe||Fe)&&r.jsx(X8,{placements:ce,onChange:nt,activeComponent:Fe?null:He,onActiveComponentChange:We,isDarkMode:Ll,exiting:Fe,onInteractionChange:Mt,passthrough:!He,extraSnapRects:ee==null?void 0:ee.sections.map(v=>v.currentRect),deselectSignal:Nn,clearSignal:gr,wireframe:Z,onSelectionChange:(v,j)=>{eo.current=v,j||(vs.current=new Set,Jl(E=>E+1))},onDragMove:(v,j)=>{const E=vs.current;if(!(!E.size||!ee)){if(!Jn.current){Jn.current=new Map;for(const T of ee.sections)E.has(T.id)&&Jn.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(const T of ee.sections){if(!E.has(T.id)||!Jn.current.get(T.id))continue;const X=document.querySelector(`[data-rearrange-section="${T.id}"]`);X&&(X.style.transform=`translate(${v}px, ${j}px)`)}}},onDragEnd:(v,j,E)=>{const T=vs.current,O=Jn.current;if(Jn.current=null,!(!T.size||!ee||!O)){for(const X of T){const le=document.querySelector(`[data-rearrange-section="${X}"]`);le&&(le.style.transform="")}E&&ln(X=>X&&{...X,sections:X.sections.map(le=>{const re=O.get(le.id);return re?{...le,currentRect:{...le.currentRect,x:Math.max(0,re.x+v),y:Math.max(0,re.y+j)}}:le})})}}}),(fe||Fe)&&ee&&r.jsx(r7,{rearrangeState:ee,onChange:ln,isDarkMode:Ll,exiting:Fe,blankCanvas:Z,extraSnapRects:ce.map(v=>({x:v.x,y:v.y,width:v.width,height:v.height})),clearSignal:pn,deselectSignal:qn,onSelectionChange:(v,j)=>{vs.current=v,j||(eo.current=new Set,kn(E=>E+1))},onDragMove:(v,j)=>{const E=eo.current;if(E.size){if(!Jn.current){Jn.current=new Map;for(const T of ce)E.has(T.id)&&Jn.current.set(T.id,{x:T.x,y:T.y})}for(const T of E){const O=document.querySelector(`[data-design-placement="${T}"]`);O&&(O.style.transform=`translate(${v}px, ${j}px)`)}}},onDragEnd:(v,j,E)=>{const T=eo.current,O=Jn.current;if(Jn.current=null,!(!T.size||!O)){for(const X of T){const le=document.querySelector(`[data-design-placement="${X}"]`);le&&(le.style.transform="")}E&&nt(X=>X.map(le=>{const re=O.get(le.id);return re?{...le,x:Math.max(0,re.x+v),y:Math.max(0,re.y+j)}:le}))}}}),r.jsx("canvas",{ref:h_,className:`${K.drawCanvas} ${Ml?K.active:""}`,style:{opacity:x_?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:K.markersLayer,"data-feedback-toolbar":!0,children:[A&&kr.filter(v=>!v.isFixed).map((v,j,E)=>r.jsx(Q1,{annotation:v,globalIndex:kr.findIndex(T=>T.id===v.id),layerIndex:j,layerSize:E.length,isExiting:V,isClearing:Pt,isAnimated:Vp.has(v.id),isHovered:!V&&Ft===v.id,isDeleting:rt===v.id,isEditingAny:!!U,renumberFrom:cn,markerClickBehavior:gt.markerClickBehavior,tooltipStyle:sg(v),onHoverEnter:T=>!V&&T.id!==$u.current&&Xu(T),onHoverLeave:()=>Xu(null),onClick:T=>gt.markerClickBehavior==="delete"?S_(T.id):Uu(T),onContextMenu:Uu},v.id)),A&&!V&&og.filter(v=>!v.isFixed).map(v=>r.jsx(G1,{annotation:v},v.id))]}),r.jsxs("div",{className:K.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[A&&kr.filter(v=>v.isFixed).map((v,j,E)=>r.jsx(Q1,{annotation:v,globalIndex:kr.findIndex(T=>T.id===v.id),layerIndex:j,layerSize:E.length,isExiting:V,isClearing:Pt,isAnimated:Vp.has(v.id),isHovered:!V&&Ft===v.id,isDeleting:rt===v.id,isEditingAny:!!U,renumberFrom:cn,markerClickBehavior:gt.markerClickBehavior,tooltipStyle:sg(v),onHoverEnter:T=>!V&&T.id!==$u.current&&Xu(T),onHoverLeave:()=>Xu(null),onClick:T=>gt.markerClickBehavior==="delete"?S_(T.id):Uu(T),onContextMenu:Uu},v.id)),A&&!V&&og.filter(v=>v.isFixed).map(v=>r.jsx(G1,{annotation:v,fixed:!0},v.id))]}),p&&r.jsxs("div",{className:K.overlay,"data-feedback-toolbar":!0,style:H||U?{zIndex:99999}:void 0,children:[(oe==null?void 0:oe.rect)&&!H&&!tt&&!to&&r.jsx("div",{className:`${K.hoverHighlight} ${K.enter}`,style:{left:oe.rect.left,top:oe.rect.top,width:oe.rect.width,height:oe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),jn.filter(v=>document.contains(v.element)).map((v,j)=>{const E=v.element.getBoundingClientRect(),T=jn.length>1;return r.jsx("div",{className:T?K.multiSelectOutline:K.singleSelectOutline,style:{position:"fixed",left:E.left,top:E.top,width:E.width,height:E.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},j)}),Ft&&!H&&(()=>{var O;const v=g.find(X=>X.id===Ft);if(!(v!=null&&v.boundingBox))return null;if((O=v.elementBoundingBoxes)!=null&&O.length)return ot.length>0?ot.filter(X=>document.contains(X)).map((X,le)=>{const re=X.getBoundingClientRect();return r.jsx("div",{className:`${K.multiSelectOutline} ${K.enter}`,style:{left:re.left,top:re.top,width:re.width,height:re.height}},`hover-outline-live-${le}`)}):v.elementBoundingBoxes.map((X,le)=>r.jsx("div",{className:`${K.multiSelectOutline} ${K.enter}`,style:{left:X.x,top:X.y-Ke,width:X.width,height:X.height}},`hover-outline-${le}`));const j=Zn&&document.contains(Zn)?Zn.getBoundingClientRect():null,E=j?{x:j.left,y:j.top,width:j.width,height:j.height}:{x:v.boundingBox.x,y:v.isFixed?v.boundingBox.y:v.boundingBox.y-Ke,width:v.boundingBox.width,height:v.boundingBox.height},T=v.isMultiSelect;return r.jsx("div",{className:`${T?K.multiSelectOutline:K.singleSelectOutline} ${K.enter}`,style:{left:E.x,top:E.y,width:E.width,height:E.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),oe&&!H&&!tt&&!to&&r.jsxs("div",{className:`${K.hoverTooltip} ${K.enter}`,style:{left:Math.max(8,Math.min($.x,window.innerWidth-100)),top:Math.max($.y-(oe.reactComponents?48:32),8)},children:[oe.reactComponents&&r.jsx("div",{className:K.hoverReactPath,children:oe.reactComponents}),r.jsx("div",{className:K.hoverElementName,children:oe.elementName})]}),H&&r.jsxs(r.Fragment,{children:[(dg=H.multiSelectElements)!=null&&dg.length?H.multiSelectElements.filter(v=>document.contains(v)).map((v,j)=>{const E=v.getBoundingClientRect();return r.jsx("div",{className:`${K.multiSelectOutline} ${qa?K.exit:K.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height}},`pending-multi-${j}`)}):H.targetElement&&document.contains(H.targetElement)?(()=>{const v=H.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${K.singleSelectOutline} ${qa?K.exit:K.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():H.boundingBox&&r.jsx("div",{className:`${H.isMultiSelect?K.multiSelectOutline:K.singleSelectOutline} ${qa?K.exit:K.enter}`,style:{left:H.boundingBox.x,top:H.boundingBox.y-Ke,width:H.boundingBox.width,height:H.boundingBox.height,...H.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const v=H.x,j=H.isFixed?H.y:H.y-Ke;return r.jsxs(r.Fragment,{children:[r.jsx(i9,{x:v,y:j,isMultiSelect:H.isMultiSelect,isExiting:qa}),r.jsx(Uf,{ref:Jp,element:H.element,selectedText:H.selectedText,computedStyles:H.computedStylesObj,placeholder:H.element==="Area selection"?"What should change in this area?":H.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Kv,onCancel:w_,isExiting:qa,lightMode:!Ll,accentColor:H.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,v/100*window.innerWidth)),...j>window.innerHeight-290?{bottom:window.innerHeight-j+20}:{top:j+20}}})]})})()]}),U&&r.jsxs(r.Fragment,{children:[(fg=U.elementBoundingBoxes)!=null&&fg.length?Ve.length>0?Ve.filter(v=>document.contains(v)).map((v,j)=>{const E=v.getBoundingClientRect();return r.jsx("div",{className:`${K.multiSelectOutline} ${K.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height}},`edit-multi-live-${j}`)}):U.elementBoundingBoxes.map((v,j)=>r.jsx("div",{className:`${K.multiSelectOutline} ${K.enter}`,style:{left:v.x,top:v.y-Ke,width:v.width,height:v.height}},`edit-multi-${j}`)):(()=>{const v=Oe&&document.contains(Oe)?Oe.getBoundingClientRect():null,j=v?{x:v.left,y:v.top,width:v.width,height:v.height}:U.boundingBox?{x:U.boundingBox.x,y:U.isFixed?U.boundingBox.y:U.boundingBox.y-Ke,width:U.boundingBox.width,height:U.boundingBox.height}:null;return j?r.jsx("div",{className:`${U.isMultiSelect?K.multiSelectOutline:K.singleSelectOutline} ${K.enter}`,style:{left:j.x,top:j.y,width:j.width,height:j.height,...U.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(Uf,{ref:eg,element:U.element,selectedText:U.selectedText,computedStyles:e7(U.computedStyles),placeholder:"Edit your feedback...",initialValue:U.comment,submitLabel:"Save",onSubmit:Jv,onCancel:ew,onDelete:()=>S_(U.id),isExiting:Pv,lightMode:!Ll,accentColor:U.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const v=U.isFixed?U.y:U.y-Ke;return{left:Math.max(160,Math.min(window.innerWidth-160,U.x/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}})()})]}),to&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:Wa,className:K.dragSelection}),r.jsx("div",{ref:Qa,className:K.highlightsContainer})]})]})]}),document.body)}mt.registerPlugin(Ge);const Hv=new t6({lerp:.1,wheelMultiplier:1,infinite:!1,gestureOrientation:"vertical",normalizeWheel:!0,smoothWheel:!0});function Yv(t){Hv.raf(t),Ge.update(),requestAnimationFrame(Yv)}requestAnimationFrame(Yv);function p9(){const t=document.querySelector(".bg-video"),e=document.querySelector(".hero-eyebrow"),n=document.querySelector(".hero-title"),i=document.querySelector(".hero-subtitle"),l=document.querySelector(".hero-cta-group"),o=document.querySelector(".hero-text-bg"),s=document.querySelector(".hero-details"),a=document.querySelector(".nav");mt.set([e,n,i,l],{opacity:0,y:30}),mt.set(o,{opacity:0,scale:.7}),mt.set(a,{opacity:0,y:-100}),t&&mt.set(t,{opacity:0,scale:1.2});const c=mt.timeline({defaults:{ease:"power2.out"}});t&&c.to(t,{opacity:1,scale:1.05,duration:2.5}),c.to(o,{opacity:1,scale:1,duration:1.4},t?"-=1.4":0).to(e,{opacity:1,y:0,duration:.9},"-=0.8").to(n,{opacity:1,y:0,duration:.9},"-=0.65").to(i,{opacity:1,y:0,duration:.8},"-=0.55").to(l,{opacity:1,y:0,duration:.8},"-=0.5").to(a,{opacity:1,y:0,duration:.8,ease:"power4.out"},"-=0.55"),t&&mt.to(t,{scale:1,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),mt.to(s,{y:-150,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}}),mt.to(o,{y:-300,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.2}}),Ge.create({trigger:".hero",start:"bottom top",onEnter:()=>mt.set(".hero",{visibility:"hidden"}),onLeaveBack:()=>mt.set(".hero",{visibility:"visible"})})}function g9(){const t=document.querySelector(".product-reveal-product"),e=document.querySelector(".product-reveal-eyebrow"),n=document.querySelector(".product-reveal-title"),i=document.querySelector(".product-reveal-subtitle"),l=document.querySelector(".product-reveal-cta-group"),o=document.querySelector(".product-reveal-text-bg");t&&(mt.set([t],{opacity:0,x:-40}),mt.set([e,n,i,l],{opacity:0,y:25}),Ge.create({trigger:".product-reveal",start:"top 65%",toggleActions:"play none none reverse",onEnter:()=>{mt.timeline({defaults:{ease:"power3.out"}}).to(t,{opacity:1,x:0,duration:1.1}).to(e,{opacity:1,y:0,duration:.7},"-=0.6").to(n,{opacity:1,y:0,duration:.8},"-=0.55").to(i,{opacity:1,y:0,duration:.7},"-=0.5").to(l,{opacity:1,y:0,duration:.7},"-=0.5")},onLeaveBack:()=>{mt.to([t,e,n,i,l],{opacity:0,duration:.3})}}),mt.to(o,{y:-150,scrollTrigger:{trigger:".product-reveal",start:"top bottom",end:"bottom top",scrub:1.2}}))}function y9(){const t=[document.querySelector(".heritage-eyebrow"),document.querySelector(".heritage-title"),document.querySelector(".heritage-divider"),...document.querySelectorAll(".heritage-body"),document.querySelector(".heritage-link"),...document.querySelectorAll(".heritage-stat")].filter(Boolean);mt.set(t,{opacity:0,y:40}),Ge.create({trigger:".heritage",start:"top 60%",toggleActions:"play none none reverse",onEnter:()=>{mt.to(t,{opacity:1,y:0,duration:.9,stagger:.1,ease:"power3.out"})},onLeaveBack:()=>{mt.to(t,{opacity:0,y:40,duration:.3,stagger:0})}}),mt.to(".heritage-bg-img",{yPercent:-10,ease:"none",scrollTrigger:{trigger:".heritage",start:"top bottom",end:"bottom top",scrub:!0}})}function x9(){const t=document.querySelectorAll(".logistics-item");t.length&&(mt.set(t,{opacity:0,y:20}),Ge.create({trigger:".logistics",start:"top 80%",toggleActions:"play none none reverse",onEnter:()=>{mt.to(t,{opacity:1,y:0,duration:.7,stagger:.1,ease:"power2.out"})},onLeaveBack:()=>{mt.to(t,{opacity:0,y:20,duration:.3,stagger:0})}}))}function b9(){document.querySelectorAll(".collection-bg-img").forEach(e=>{mt.to(e,{scale:1.08,yPercent:8,ease:"none",scrollTrigger:{trigger:".collection",start:"top bottom",end:"bottom top",scrub:!0}})});const t=document.querySelector(".collection-header");t&&(mt.set(t,{opacity:0,y:20}),Ge.create({trigger:".collection",start:"top 70%",once:!0,onEnter:()=>mt.to(t,{opacity:1,y:0,duration:1,ease:"power3.out"})})),Ge.create({trigger:".collection",start:"top 65%",once:!0,onEnter:()=>{const e=document.querySelectorAll(".collection-main.active .collection-text-side > *"),n=document.querySelector(".collection-product-img");n&&mt.fromTo(n,{opacity:0,x:80},{opacity:1,x:0,duration:1.2,ease:"power3.out"}),e.length&&mt.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.9,stagger:.08,ease:"power3.out"})}})}function v9(){const t=[document.querySelector(".showcase-eyebrow"),document.querySelector(".showcase-headline"),document.querySelector(".showcase-body"),document.querySelector(".showcase-actions")].filter(Boolean);mt.set(t,{opacity:0,y:40}),Ge.create({trigger:".showcase",start:"top 65%",toggleActions:"play none none reverse",onEnter:()=>{mt.to(t,{opacity:1,y:0,duration:.9,stagger:.14,ease:"power3.out"})},onLeaveBack:()=>{mt.to(t,{opacity:0,y:40,duration:.3,stagger:0})}}),mt.to(".showcase-bg-img",{yPercent:-10,ease:"none",scrollTrigger:{trigger:".showcase",start:"top bottom",end:"bottom top",scrub:!0}})}function w9(){const t=document.querySelector(".nav");let e=0;Ge.create({start:"top top",end:"max",onUpdate:l=>{const o=l.scroll(),s=o-e;o>80?t.classList.add("scrolled"):t.classList.remove("scrolled"),s>5&&o>100?t.classList.add("hidden"):s<-5&&t.classList.remove("hidden"),e=o}});function n(l){l==="NPR"?(document.body.classList.add("currency-npr"),document.body.classList.remove("currency-usd")):(document.body.classList.add("currency-usd"),document.body.classList.remove("currency-npr")),document.querySelectorAll(".currency-option").forEach(o=>{o.dataset.currency===l?o.classList.add("active"):o.classList.remove("active")})}document.querySelectorAll(".currency-option").forEach(l=>{l.addEventListener("click",()=>{n(l.dataset.currency)})});async function i(){try{(await(await fetch("https://ipapi.co/json/")).json()).country_code==="NP"?n("NPR"):n("USD")}catch{console.warn("Geolocation failed, defaulting to USD"),n("USD")}}i()}function S9(){const t=document.getElementById("track-submit-btn"),e=document.getElementById("track-result"),n=document.getElementById("track-input");!t||!e||(t.addEventListener("click",()=>{var l;if(!((l=n==null?void 0:n.value)==null?void 0:l.trim())){n==null||n.focus(),mt.fromTo(n,{x:-6},{x:0,duration:.4,ease:"elastic.out(1, 0.4)"});return}t.textContent="···",t.disabled=!0,setTimeout(()=>{e.removeAttribute("hidden"),e.style.display="block",mt.fromTo(e,{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power3.out"}),t.textContent="Track →",t.disabled=!1},1200)}),n==null||n.addEventListener("keydown",i=>{i.key==="Enter"&&t.click()}))}function k9(){const t=document.getElementById("enquiry-modal"),e=document.getElementById("modal-close"),n=document.querySelectorAll(".open-enquiry-modal"),i=document.querySelector(".modal-right"),l=i?i.innerHTML:"";function o(){t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",setTimeout(()=>{const c=t.querySelector("input, select, textarea, button:not(.modal-close)");c==null||c.focus()},420)}function s(){t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="",setTimeout(()=>{const c=document.querySelector(".modal-right");c&&l&&(c.innerHTML=l,a())},400)}function a(){const c=document.getElementById("enquiry-form"),u=document.getElementById("modal-submit-btn");!c||!u||c.addEventListener("submit",d=>{var p,C,g,y,b,x;d.preventDefault();const h=(C=(p=document.getElementById("first-name"))==null?void 0:p.value)==null?void 0:C.trim(),f=(y=(g=document.getElementById("last-name"))==null?void 0:g.value)==null?void 0:y.trim(),_=(x=(b=document.getElementById("email"))==null?void 0:b.value)==null?void 0:x.trim();if(!h||!f||!_){[document.getElementById("first-name"),document.getElementById("last-name"),document.getElementById("email")].forEach(R=>{R&&!R.value.trim()&&(R.focus(),mt.fromTo(R,{x:-6},{x:0,duration:.4,ease:"elastic.out(1, 0.4)"}))});return}u.textContent="Sending Enquiry...",u.disabled=!0;const m=()=>{const M=document.querySelector(".modal-right");if(M){M.innerHTML=`
            <div class="modal-success-state" style="display: flex; flex-direction: column; justify-content: center; height: 100%; text-align: center; padding: 3rem 1.5rem; opacity: 0; transform: translateY(15px);">
              <div class="modal-success-icon" style="color: var(--primary-color); font-size: 3.5rem; margin-bottom: 1.5rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="width: 72px; height: 72px; margin: 0 auto;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h2 class="modal-title" style="margin-bottom: 1rem;">Enquiry <em>Sent</em></h2>
              <p class="modal-subtitle" style="max-width: 360px; margin: 0 auto 2.5rem; font-size: 0.86rem; line-height: 1.7; color: var(--text-dim);">
                Thank you. Your request for The Monolith Vessel has been received. Our team in South Asia will contact you within 24 hours.
              </p>
              <button class="secondary-btn" id="modal-success-close" style="align-self: center; cursor: pointer; padding: 0.8rem 2.2rem; font-size: 0.72rem; letter-spacing: 0.25em;">Close Window</button>
            </div>
          `;const R=M.querySelector(".modal-success-state");mt.to(R,{opacity:1,y:0,duration:.6,ease:"power3.out"});const k=document.getElementById("modal-success-close");k==null||k.addEventListener("click",s)}};window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?setTimeout(()=>{m()},1200):fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(c)).toString()}).then(()=>{m()}).catch(M=>{console.error("Form submission failed",M),m()})})}n.forEach(c=>c.addEventListener("click",o)),e==null||e.addEventListener("click",s),t==null||t.addEventListener("click",c=>{c.target===t&&s()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&(t!=null&&t.classList.contains("active"))&&s()}),a(),document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",u=>{const d=document.querySelector(c.getAttribute("href"));d&&(u.preventDefault(),Hv.scrollTo(d,{offset:-72,duration:1.4,easing:h=>1-Math.pow(1-h,4)}))})})}document.addEventListener("DOMContentLoaded",()=>{p9(),g9(),y9(),x9(),b9(),v9(),w9(),S9(),k9();const t=document.createElement("div");document.body.appendChild(t),FS.createRoot(t).render(M5.createElement(m9,{endpoint:"http://localhost:4747",onSessionCreated:n=>{console.log("Session started:",n)}}))});
