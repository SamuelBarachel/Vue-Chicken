const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BatchesView-DbZeLsIo.js","assets/BatchesView-CYYi7dGo.css","assets/AddBatchView-Bfl_Uifu.js","assets/AddBatchView-BNJZhXN1.css","assets/BatchDetailView-6pzzj6-m.js","assets/BatchDetailView-DxeEXXpp.css","assets/LogEntryView-BqjYuoEQ.js","assets/LogEntryView-C4BDZX9S.css","assets/ReportsView-wL9CHUBd.js","assets/ReportsView-Dw1gUd0t.css","assets/SettingsView-DDCBgT6F.js","assets/SettingsView-DzxQ-pNo.css","assets/ActivityLogView-F8qd6m4I.js","assets/ActivityLogView-EVj08ztI.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},Ns=[],wn=()=>{},ug=()=>!1,ec=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tc=t=>t.startsWith("onUpdate:"),ct=Object.assign,Eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kv=Object.prototype.hasOwnProperty,Ne=(t,e)=>Kv.call(t,e),fe=Array.isArray,Ds=t=>Eo(t)==="[object Map]",nc=t=>Eo(t)==="[object Set]",Sf=t=>Eo(t)==="[object Date]",me=t=>typeof t=="function",$e=t=>typeof t=="string",zt=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",hg=t=>(Oe(t)||me(t))&&me(t.then)&&me(t.catch),fg=Object.prototype.toString,Eo=t=>fg.call(t),Qv=t=>Eo(t).slice(8,-1),dg=t=>Eo(t)==="[object Object]",rc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mi=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jv=/-\w/g,xt=sc(t=>t.replace(Jv,e=>e.slice(1).toUpperCase())),Yv=/\B([A-Z])/g,ps=sc(t=>t.replace(Yv,"-$1").toLowerCase()),ic=sc(t=>t.charAt(0).toUpperCase()+t.slice(1)),nl=sc(t=>t?`on${ic(t)}`:""),In=(t,e)=>!Object.is(t,e),ia=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},pg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xv=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Rf;const ac=()=>Rf||(Rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yi(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?nE(r):Yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Oe(t))return t}const Zv=/;(?![^(]*\))/g,eE=/:([^]+)/,tE=/\/\*[^]*?\*\//g;function nE(t){const e={};return t.replace(tE,"").split(Zv).forEach(n=>{if(n){const r=n.split(eE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qt(t){let e="";if($e(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=qt(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sE=vu(rE);function gg(t){return!!t||t===""}function iE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=To(t[r],e[r]);return n}function To(t,e){if(t===e)return!0;let n=Sf(t),r=Sf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=zt(t),r=zt(e),n||r)return t===e;if(n=fe(t),r=fe(e),n||r)return n&&r?iE(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!To(t[o],e[o]))return!1}}return String(t)===String(e)}function oE(t,e){return t.findIndex(n=>To(n,e))}const mg=t=>!!(t&&t.__v_isRef===!0),Pe=t=>$e(t)?t:t==null?"":fe(t)||Oe(t)&&(t.toString===fg||!me(t.toString))?mg(t)?Pe(t.value):JSON.stringify(t,_g,2):String(t),_g=(t,e)=>mg(e)?_g(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[rl(r,i)+" =>"]=s,n),{})}:nc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rl(n))}:zt(e)?rl(e):Oe(e)&&!fe(e)&&!dg(e)?String(e):e,rl=(t,e="")=>{var n;return zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class yg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ot&&(ot.active?(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){if(this._on>0&&--this._on===0){if(ot===this)ot=this.prevScope;else{let e=ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vg(t){return new yg(t)}function Eg(){return ot}function aE(t,e=!1){ot&&ot.cleanups.push(t)}let Fe;const sl=new WeakSet;class Tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&(ot.active?ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sl.has(this)&&(sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cf(this),Ag(this);const e=Fe,n=an;Fe=this,an=!0;try{return this.fn()}finally{bg(this),Fe=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,Cf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let Ig=0,Fi,Ui;function wg(t,e=!1){if(t.flags|=8,e){t.next=Ui,Ui=t;return}t.next=Fi,Fi=t}function Tu(){Ig++}function Iu(){if(--Ig>0)return;if(Ui){let e=Ui;for(Ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fi;){let e=Fi;for(Fi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ag(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wu(r),cE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xi)||(t.globalVersion=Xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Vl(t))))return;t.flags|=2;const e=t.dep,n=Fe,r=an;Fe=t,an=!0;try{Ag(t);const s=t.fn(t._value);(e.version===0||In(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,an=r,bg(t),t.flags&=-3}}function wu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const Rg=[];function Yn(){Rg.push(an),an=!1}function Xn(){const t=Rg.pop();an=t===void 0?!0:t}function Cf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Xi=0;class lE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Fe||!an||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new lE(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,Cg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Xi++,this.notify(e)}notify(e){Tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Iu()}}}function Cg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Cg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ta=new WeakMap,ss=Symbol(""),Nl=Symbol(""),Zi=Symbol("");function bt(t,e,n){if(an&&Fe){let r=Ta.get(t);r||Ta.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Au),s.map=r,s.key=n),s.track()}}function qn(t,e,n,r,s,i){const o=Ta.get(t);if(!o){Xi++;return}const c=l=>{l&&l.trigger()};if(Tu(),e==="clear")o.forEach(c);else{const l=fe(t),u=l&&rc(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Zi||!zt(g)&&g>=h)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Zi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(ss)),Ds(t)&&c(o.get(Nl)));break;case"delete":l||(c(o.get(ss)),Ds(t)&&c(o.get(Nl)));break;case"set":Ds(t)&&c(o.get(ss));break}}Iu()}function uE(t,e){const n=Ta.get(t);return n&&n.get(e)}function ws(t){const e=Re(t);return e===t?e:(bt(e,"iterate",Zi),Wt(t)?e:e.map(un))}function cc(t){return bt(t=Re(t),"iterate",Zi),t}function En(t,e){return Zn(t)?qs(Qn(t)?un(e):e):un(e)}const hE={__proto__:null,[Symbol.iterator](){return il(this,Symbol.iterator,t=>En(this,t))},concat(...t){return ws(this).concat(...t.map(e=>fe(e)?ws(e):e))},entries(){return il(this,"entries",t=>(t[1]=En(this,t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(r=>En(this,r)),arguments)},find(t,e){return Fn(this,"find",t,e,n=>En(this,n),arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,n=>En(this,n),arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ol(this,"includes",t)},indexOf(...t){return ol(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return ol(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return Ti(this,"pop")},push(...t){return Ti(this,"push",t)},reduce(t,...e){return Pf(this,"reduce",t,e)},reduceRight(t,...e){return Pf(this,"reduceRight",t,e)},shift(){return Ti(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return Ti(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return Ti(this,"unshift",t)},values(){return il(this,"values",t=>En(this,t))}};function il(t,e,n){const r=cc(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const fE=Array.prototype;function Fn(t,e,n,r,s,i){const o=cc(t),c=o!==t&&!Wt(t),l=o[e];if(l!==fE[e]){const d=l.apply(t,i);return c?un(d):d}let u=n;o!==t&&(c?u=function(d,g){return n.call(this,En(t,d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Pf(t,e,n,r){const s=cc(t),i=s!==t&&!Wt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,h,d){return c&&(c=!1,u=En(t,u)),n.call(this,u,En(t,h),d,t)}):n.length>3&&(o=function(u,h,d){return n.call(this,u,h,d,t)}));const l=s[e](o,...r);return c?En(t,l):l}function ol(t,e,n){const r=Re(t);bt(r,"iterate",Zi);const s=r[e](...n);return(s===-1||s===!1)&&lc(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function Ti(t,e,n=[]){Yn(),Tu();const r=Re(t)[e].apply(t,n);return Iu(),Xn(),r}const dE=vu("__proto__,__v_isRef,__isVue"),Pg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zt));function pE(t){zt(t)||(t=String(t));const e=Re(this);return bt(e,"has",t),e.hasOwnProperty(t)}class kg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?AE:Og:i?Dg:Ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=hE[n]))return l;if(n==="hasOwnProperty")return pE}const c=Reflect.get(e,n,Ke(e)?e:r);if((zt(n)?Pg.has(n):dE(n))||(s||bt(e,"get",n),i))return c;if(Ke(c)){const l=o&&rc(n)?c:c.value;return s&&Oe(l)?Ol(l):l}return Oe(c)?s?Ol(c):gs(c):c}}class Vg extends kg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=fe(e)&&rc(n);if(!this._isShallow){const u=Zn(i);if(!Wt(r)&&!Zn(r)&&(i=Re(i),r=Re(r)),!o&&Ke(i)&&!Ke(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Re(s)&&(c?In(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!zt(n)||!Pg.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",fe(e)?"length":ss),Reflect.ownKeys(e)}}class gE extends kg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mE=new Vg,_E=new gE,yE=new Vg(!0);const Dl=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function vE(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=Ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Dl:e?qs:un;return!e&&bt(i,"iterate",l?Nl:ss),ct(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[h(d[0]),h(d[1])]:h(d),done:g}}})}}function Qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function EE(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(In(s,c)&&bt(o,"get",s),bt(o,"get",c));const{has:l}=Ko(o),u=e?Dl:t?qs:un;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(Re(s),"iterate",ss),s.size},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(In(s,c)&&bt(o,"has",s),bt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),u=e?Dl:t?qs:un;return!t&&bt(l,"iterate",ss),c.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return ct(n,t?{add:Qo("add"),set:Qo("set"),delete:Qo("delete"),clear:Qo("clear")}:{add(s){const i=Re(this),o=Ko(i),c=Re(s),l=!e&&!Wt(s)&&!Zn(s)?c:s;return o.has.call(i,l)||In(s,l)&&o.has.call(i,s)||In(c,l)&&o.has.call(i,c)||(i.add(l),qn(i,"add",l,l)),this},set(s,i){!e&&!Wt(i)&&!Zn(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=Ko(o);let u=c.call(o,s);u||(s=Re(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?In(i,h)&&qn(o,"set",s,i):qn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=Ko(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&qn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vE(s,t,e)}),n}function bu(t,e){const n=EE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const TE={get:bu(!1,!1)},IE={get:bu(!1,!0)},wE={get:bu(!0,!1)};const Ng=new WeakMap,Dg=new WeakMap,Og=new WeakMap,AE=new WeakMap;function bE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gs(t){return Zn(t)?t:Su(t,!1,mE,TE,Ng)}function xg(t){return Su(t,!1,yE,IE,Dg)}function Ol(t){return Su(t,!0,_E,wE,Og)}function Su(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=bE(Qv(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Qn(t){return Zn(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function lc(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Ru(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&pg(t,"__v_skip",!0),t}const un=t=>Oe(t)?gs(t):t,qs=t=>Oe(t)?Ol(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Je(t){return Lg(t,!1)}function SE(t){return Lg(t,!0)}function Lg(t,e){return Ke(t)?t:new RE(t,e)}class RE{constructor(e,n){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:un(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||Zn(e);e=r?e:Re(e),In(e,n)&&(this._rawValue=e,this._value=r?e:un(e),this.dep.trigger())}}function At(t){return Ke(t)?t.value:t}const CE={get:(t,e,n)=>e==="__v_raw"?t:At(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mg(t){return Qn(t)?t:new Proxy(t,CE)}function PE(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=VE(t,n);return e}class kE{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=zt(n)?n:String(n),this._raw=Re(e);let s=!0,i=e;if(!fe(e)||zt(this._key)||!rc(this._key))do s=!lc(i)||Wt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=At(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ke(this._raw[this._key])){const n=this._object[this._key];if(Ke(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return uE(this._raw,this._key)}}function VE(t,e,n){return new kE(t,e,n)}class NE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return wg(this,!0),!0}get value(){const e=this.dep.track();return Sg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DE(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new NE(r,s,n)}const Jo={},Ia=new WeakMap;let Jr;function OE(t,e=!1,n=Jr){if(n){let r=Ia.get(n);r||Ia.set(n,r=[]),r.push(t)}}function xE(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Wt(H)||s===!1||s===0?Hn(H,1):Hn(H);let h,d,g,y,R=!1,C=!1;if(Ke(t)?(d=()=>t.value,R=Wt(t)):Qn(t)?(d=()=>u(t),R=!0):fe(t)?(C=!0,R=t.some(H=>Qn(H)||Wt(H)),d=()=>t.map(H=>{if(Ke(H))return H.value;if(Qn(H))return u(H);if(me(H))return l?l(H,2):H()})):me(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){Yn();try{g()}finally{Xn()}}const H=Jr;Jr=h;try{return l?l(t,3,[y]):t(y)}finally{Jr=H}}:d=wn,e&&s){const H=d,Y=s===!0?1/0:s;d=()=>Hn(H(),Y)}const V=Eg(),$=()=>{h.stop(),V&&V.active&&Eu(V.effects,h)};if(i&&e){const H=e;e=(...Y)=>{H(...Y),$()}}let x=C?new Array(t.length).fill(Jo):Jo;const z=H=>{if(!(!(h.flags&1)||!h.dirty&&!H))if(e){const Y=h.run();if(s||R||(C?Y.some((le,I)=>In(le,x[I])):In(Y,x))){g&&g();const le=Jr;Jr=h;try{const I=[Y,x===Jo?void 0:C&&x[0]===Jo?[]:x,y];x=Y,l?l(e,3,I):e(...I)}finally{Jr=le}}}else h.run()};return c&&c(z),h=new Tg(d),h.scheduler=o?()=>o(z,!1):z,y=H=>OE(H,!1,h),g=h.onStop=()=>{const H=Ia.get(h);if(H){if(l)l(H,4);else for(const Y of H)Y();Ia.delete(h)}},e?r?z(!0):x=h.run():o?o(z.bind(null,!0),!0):h.run(),$.pause=h.pause.bind(h),$.resume=h.resume.bind(h),$.stop=$,$}function Hn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Hn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Hn(t[r],e,n);else if(nc(t)||Ds(t))t.forEach(r=>{Hn(r,e,n)});else if(dg(t)){for(const r in t)Hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Io(t,e,n,r){try{return r?t(...r):t()}catch(s){uc(s,e,n)}}function en(t,e,n,r){if(me(t)){const s=Io(t,e,n,r);return s&&hg(s)&&s.catch(i=>{uc(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function uc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}c=c.parent}if(i){Yn(),Io(i,null,10,[t,l,u]),Xn();return}}LE(t,n,s,r,o)}function LE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let yn=-1;const Os=[];let vr=null,bs=0;const Fg=Promise.resolve();let wa=null;function hc(t){const e=wa||Fg;return t?e.then(this?t.bind(this):t):e}function ME(t){let e=yn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=eo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Cu(t){if(!(t.flags&1)){const e=eo(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=eo(n)?Ot.push(t):Ot.splice(ME(e),0,t),t.flags|=1,Ug()}}function Ug(){wa||(wa=Fg.then(jg))}function FE(t){fe(t)?Os.push(...t):vr&&t.id===-1?vr.splice(bs+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),Ug()}function kf(t,e,n=yn+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Bg(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>eo(n)-eo(r));if(Os.length=0,vr){vr.push(...e);return}for(vr=e,bs=0;bs<vr.length;bs++){const n=vr[bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vr=null,bs=0}}const eo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function jg(t){try{for(yn=0;yn<Ot.length;yn++){const e=Ot[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Ot.length;yn++){const e=Ot[yn];e&&(e.flags&=-2)}yn=-1,Ot.length=0,Bg(),wa=null,(Ot.length||Os.length)&&jg()}}let yt=null,$g=null;function Aa(t){const e=yt;return yt=t,$g=t&&t.type.__scopeId||null,e}function ba(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ca(-1);const i=Aa(e);let o;try{o=t(...s)}finally{Aa(i),r._d&&Ca(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function AV(t,e){if(yt===null)return t;const n=mc(yt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Me]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Hn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Yn(),en(l,n,8,[t.el,c,t,e]),Xn())}}function oa(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=Ou();if(r||is){let s=is?is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function UE(){return!!(Ou()||is)}const BE=Symbol.for("v-scx"),jE=()=>Xt(BE);function Bi(t,e,n){return qg(t,e,n)}function qg(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,c=ct({},n),l=e&&r||!e&&i!=="post";let u;if(so){if(i==="sync"){const y=jE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=wn,y.resume=wn,y.pause=wn,y}}const h=Ct;c.call=(y,R,C)=>en(y,h,R,C);let d=!1;i==="post"?c.scheduler=y=>{Nt(y,h&&h.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(y,R)=>{R?y():Cu(y)}),c.augmentJob=y=>{e&&(y.flags|=4),d&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const g=xE(t,e,c);return so&&(u?u.push(g):l&&g()),g}function $E(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Hg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=wo(this),c=qg(s,i.bind(r),n);return o(),c}function Hg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _r=new WeakMap,Gg=Symbol("_vte"),Wg=t=>t.__isTeleport,Xr=t=>t&&(t.disabled||t.disabled===""),qE=t=>t&&(t.defer||t.defer===""),Vf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,xl=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},HE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:h,pc:d,pbc:g,o:{insert:y,querySelector:R,createText:C,createComment:V,parentNode:$}}=u,x=Xr(e.props);let{dynamicChildren:z}=e;const H=(I,v,_)=>{I.shapeFlag&16&&h(I.children,v,_,s,i,o,c,l)},Y=(I=e)=>{const v=Xr(I.props),_=I.target=xl(I.props,R),A=Ll(_,I,C,y);_&&(o!=="svg"&&Vf(_)?o="svg":o!=="mathml"&&Nf(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),v||(H(I,_,A),ki(I,!1)))},le=I=>{const v=()=>{if(_r.get(I)===v){if(_r.delete(I),Xr(I.props)){const _=$(I.el)||n;H(I,_,I.anchor),ki(I,!0)}Y(I)}};_r.set(I,v),Nt(v,i)};if(t==null){const I=e.el=C(""),v=e.anchor=C("");if(y(I,n,r),y(v,n,r),qE(e.props)||i&&i.pendingBranch){le(e);return}x&&(H(e,n,v),ki(e,!0)),Y()}else{e.el=t.el;const I=e.anchor=t.anchor,v=_r.get(t);if(v){v.flags|=8,_r.delete(t),le(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,A=e.targetAnchor=t.targetAnchor,b=Xr(t.props),w=b?n:_,E=b?I:A;if(o==="svg"||Vf(_)?o="svg":(o==="mathml"||Nf(_))&&(o="mathml"),z?(g(t.dynamicChildren,z,w,s,i,o,c),Nu(t,e,!0)):l||d(t,e,w,E,s,i,o,c,!1),x)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Yo(e,n,I,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const J=e.target=xl(e.props,R);J&&Yo(e,J,null,u,0)}else b&&Yo(e,_,A,u,1);ki(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:h,target:d,props:g}=t,y=i||!Xr(g),R=_r.get(t);if(R&&(R.flags|=8,_r.delete(t)),d&&(s(u),s(h)),i&&s(l),!R&&o&16)for(let C=0;C<c.length;C++){const V=c[C];r(V,e,n,y,!!V.dynamicChildren)}},move:Yo,hydrate:GE};function Yo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),!_r.has(t)&&(!d||Xr(h))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);d&&r(c,e,n)}function GE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:h}},d){function g(V,$){let x=$;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,V._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function y(V,$){$.anchor=d(o(V),$,c(V),n,r,s,i)}const R=e.target=xl(e.props,l),C=Xr(e.props);if(R){const V=R._lpa||R.firstChild;e.shapeFlag&16&&(C?(y(t,e),g(R,V),e.targetAnchor||Ll(R,e,h,u,c(t)===R?t:null)):(e.anchor=o(t),g(R,V),e.targetAnchor||Ll(R,e,h,u),d(V&&o(V),e,R,n,r,s,i))),ki(e,C)}else C&&e.shapeFlag&16&&(y(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const bV=HE;function ki(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ll(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Gg]=o,t&&(r(i,t,s),r(o,t,s)),o}const Jt=Symbol("_leaveCb"),Ii=Symbol("_enterCb");function WE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pu(()=>{t.isMounted=!0}),em(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Kg=t=>{const e=t.subTree;return e.component?Kg(e.component):e},zE={name:"BaseTransition",props:zg,setup(t,{slots:e}){const n=Ou(),r=WE();return()=>{const s=e.default&&Yg(e.default(),!0),i=s&&s.length?Qg(s):n.subTree?Ar():void 0;if(!i)return;const o=Re(t),{mode:c}=o;if(r.isLeaving)return al(i);const l=Df(i);if(!l)return al(i);let u=Ml(l,o,r,n,d=>u=d);l.type!==Rt&&to(l,u);let h=n.subTree&&Df(n.subTree);if(h&&h.type!==Rt&&!Zr(h,l)&&Kg(n).type!==Rt){let d=Ml(h,o,r,n);if(to(h,d),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},al(i);c==="in-out"&&l.type!==Rt?d.delayLeave=(g,y,R)=>{const C=Jg(r,h);C[String(h.key)]=h,g[Jt]=()=>{y(),g[Jt]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Qg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Rt){e=n;break}}return e}const KE=zE;function Jg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ml(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:y,onAfterLeave:R,onLeaveCancelled:C,onBeforeAppear:V,onAppear:$,onAfterAppear:x,onAppearCancelled:z}=e,H=String(t.key),Y=Jg(n,t),le=(_,A)=>{_&&en(_,r,9,A)},I=(_,A)=>{const b=A[1];le(_,A),fe(_)?_.every(w=>w.length<=1)&&b():_.length<=1&&b()},v={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=V||l;else return;_[Jt]&&_[Jt](!0);const b=Y[H];b&&Zr(t,b)&&b.el[Jt]&&b.el[Jt](),le(A,[_])},enter(_){if(Y[H]===t)return;let A=u,b=h,w=d;if(!n.isMounted)if(i)A=$||u,b=x||h,w=z||d;else return;let E=!1;_[Ii]=N=>{E||(E=!0,N?le(w,[_]):le(b,[_]),v.delayedLeave&&v.delayedLeave(),_[Ii]=void 0)};const J=_[Ii].bind(null,!1);A?I(A,[_,J]):J()},leave(_,A){const b=String(t.key);if(_[Ii]&&_[Ii](!0),n.isUnmounting)return A();le(g,[_]);let w=!1;_[Jt]=J=>{w||(w=!0,A(),J?le(C,[_]):le(R,[_]),_[Jt]=void 0,Y[b]===t&&delete Y[b])};const E=_[Jt].bind(null,!1);Y[b]=t,y?I(y,[_,E]):E()},clone(_){const A=Ml(_,e,n,r,s);return s&&s(A),A}};return v}function al(t){if(fc(t))return t=kr(t),t.children=null,t}function Df(t){if(!fc(t))return Wg(t.type)&&t.children?Qg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function to(t,e){t.shapeFlag&6&&t.component?(t.transition=e,to(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===dt?(o.patchFlag&128&&s++,r=r.concat(Yg(o.children,e,c))):(e||o.type!==Rt)&&r.push(c!=null?kr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Xs(t,e){return me(t)?ct({name:t.name},e,{setup:t}):t}function Xg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Of(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Sa=new WeakMap;function ji(t,e,n,r,s=!1){if(fe(t)){t.forEach((C,V)=>ji(C,e&&(fe(e)?e[V]:e),n,r,s));return}if(xs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ji(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?mc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Me?c.refs={}:c.refs,d=c.setupState,g=Re(d),y=d===Me?ug:C=>Of(h,C)?!1:Ne(g,C),R=(C,V)=>!(V&&Of(h,V));if(u!=null&&u!==l){if(xf(e),$e(u))h[u]=null,y(u)&&(d[u]=null);else if(Ke(u)){const C=e;R(u,C.k)&&(u.value=null),C.k&&(h[C.k]=null)}}if(me(l))Io(l,c,12,[o,h]);else{const C=$e(l),V=Ke(l);if(C||V){const $=()=>{if(t.f){const x=C?y(l)?d[l]:h[l]:R()||!t.k?l.value:h[t.k];if(s)fe(x)&&Eu(x,i);else if(fe(x))x.includes(i)||x.push(i);else if(C)h[l]=[i],y(l)&&(d[l]=h[l]);else{const z=[i];R(l,t.k)&&(l.value=z),t.k&&(h[t.k]=z)}}else C?(h[l]=o,y(l)&&(d[l]=o)):V&&(R(l,t.k)&&(l.value=o),t.k&&(h[t.k]=o))};if(o){const x=()=>{$(),Sa.delete(t)};x.id=-1,Sa.set(t,x),Nt(x,n)}else xf(t),$()}}}function xf(t){const e=Sa.get(t);e&&(e.flags|=8,Sa.delete(t))}ac().requestIdleCallback;ac().cancelIdleCallback;const xs=t=>!!t.type.__asyncLoader,fc=t=>t.type.__isKeepAlive;function QE(t,e){Zg(t,"a",e)}function JE(t,e){Zg(t,"da",e)}function Zg(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(dc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fc(s.parent.vnode)&&YE(r,e,n,s),s=s.parent}}function YE(t,e,n,r){const s=dc(e,t,r,!0);tm(()=>{Eu(r[e],s)},n)}function dc(t,e,n=Ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const c=wo(n),l=en(e,n,t,o);return c(),Xn(),l});return r?s.unshift(i):s.push(i),i}}const sr=t=>(e,n=Ct)=>{(!so||t==="sp")&&dc(t,(...r)=>e(...r),n)},XE=sr("bm"),Pu=sr("m"),ZE=sr("bu"),eT=sr("u"),em=sr("bum"),tm=sr("um"),tT=sr("sp"),nT=sr("rtg"),rT=sr("rtc");function sT(t,e=Ct){dc("ec",t,e)}const nm="components";function rm(t,e){return im(nm,t,!0,e)||t}const sm=Symbol.for("v-ndc");function iT(t){return $e(t)?im(nm,t,!1)||t:t||sm}function im(t,e,n=!0,r=!1){const s=yt||Ct;if(s){const i=s.type;{const c=HT(i,!1);if(c&&(c===e||c===xt(e)||c===ic(xt(e))))return i}const o=Lf(s[t]||i[t],e)||Lf(s.appContext[t],e);return!o&&r?i:o}}function Lf(t,e){return t&&(t[e]||t[xt(e)]||t[ic(xt(e))])}function aa(t,e,n,r){let s;const i=n,o=fe(t);if(o||$e(t)){const c=o&&Qn(t);let l=!1,u=!1;c&&(l=!Wt(t),u=Zn(t),t=cc(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?qs(un(t[h])):un(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function SV(t,e,n={},r,s){if(yt.ce||yt.parent&&xs(yt.parent)&&yt.parent.ce){const u=Object.keys(n).length>0;return Le(),Pa(dt,null,[et("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Le();const o=i&&om(i(n)),c=n.key||o&&o.key,l=Pa(dt,{key:(c&&!zt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function om(t){return t.some(e=>ro(e)?!(e.type===Rt||e.type===dt&&!om(e.children)):!0)?t:null}const Fl=t=>t?bm(t)?mc(t):Fl(t.parent):null,$i=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fl(t.parent),$root:t=>Fl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cm(t),$forceUpdate:t=>t.f||(t.f=()=>{Cu(t.update)}),$nextTick:t=>t.n||(t.n=hc.bind(t.proxy)),$watch:t=>$E.bind(t)}),cl=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ne(t,e),oT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cl(r,e))return o[e]=1,r[e];if(s!==Me&&Ne(s,e))return o[e]=2,s[e];if(Ne(i,e))return o[e]=3,i[e];if(n!==Me&&Ne(n,e))return o[e]=4,n[e];Ul&&(o[e]=0)}}const u=$i[e];let h,d;if(u)return e==="$attrs"&&bt(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Me&&Ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ne(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cl(s,e)?(s[e]=n,!0):r!==Me&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Me&&c[0]!=="$"&&Ne(t,c)||cl(e,c)||Ne(i,c)||Ne(r,c)||Ne($i,c)||Ne(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ul=!0;function aT(t){const e=cm(t),n=t.proxy,r=t.ctx;Ul=!1,e.beforeCreate&&Ff(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:y,updated:R,activated:C,deactivated:V,beforeDestroy:$,beforeUnmount:x,destroyed:z,unmounted:H,render:Y,renderTracked:le,renderTriggered:I,errorCaptured:v,serverPrefetch:_,expose:A,inheritAttrs:b,components:w,directives:E,filters:J}=e;if(u&&cT(u,r,null),o)for(const se in o){const ye=o[se];me(ye)&&(r[se]=ye.bind(n))}if(s){const se=s.call(n,n);Oe(se)&&(t.data=gs(se))}if(Ul=!0,i)for(const se in i){const ye=i[se],Lt=me(ye)?ye.bind(n,n):me(ye.get)?ye.get.bind(n,n):wn,pn=!me(ye)&&me(ye.set)?ye.set.bind(n):wn,Ut=ie({get:Lt,set:pn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:pt=>Ut.value=pt})}if(c)for(const se in c)am(c[se],r,n,se);if(l){const se=me(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ye=>{oa(ye,se[ye])})}h&&Ff(h,t,"c");function K(se,ye){fe(ye)?ye.forEach(Lt=>se(Lt.bind(n))):ye&&se(ye.bind(n))}if(K(XE,d),K(Pu,g),K(ZE,y),K(eT,R),K(QE,C),K(JE,V),K(sT,v),K(rT,le),K(nT,I),K(em,x),K(tm,H),K(tT,_),fe(A))if(A.length){const se=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(se,ye,{get:()=>n[ye],set:Lt=>n[ye]=Lt,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===wn&&(t.render=Y),b!=null&&(t.inheritAttrs=b),w&&(t.components=w),E&&(t.directives=E),_&&Xg(t)}function cT(t,e,n=wn){fe(t)&&(t=Bl(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ff(t,e,n){en(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function am(t,e,n,r){let s=r.includes(".")?Hg(n,r):()=>n[r];if($e(t)){const i=e[t];me(i)&&Bi(s,i)}else if(me(t))Bi(s,t.bind(n));else if(Oe(t))if(fe(t))t.forEach(i=>am(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Bi(s,i,t)}}function cm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ra(l,u,o,!0)),Ra(l,e,o)),Oe(e)&&i.set(e,l),l}function Ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ra(t,i,n,!0),s&&s.forEach(o=>Ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=lT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const lT={data:Uf,props:Bf,emits:Bf,methods:Vi,computed:Vi,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Vi,directives:Vi,watch:hT,provide:Uf,inject:uT};function Uf(t,e){return e?t?function(){return ct(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function uT(t,e){return Vi(Bl(t),Bl(e))}function Bl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vi(t,e){return t?ct(Object.create(null),t,e):e}function Bf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ct(Object.create(null),Mf(t),Mf(e??{})):e}function hT(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function lm(){return{app:null,config:{isNativeTag:ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fT=0;function dT(t,e){return function(r,s=null){me(r)||(r=ct({},r)),s!=null&&!Oe(s)&&(s=null);const i=lm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:fT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:WT,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&me(h.install)?(o.add(h),h.install(u,...d)):me(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!l){const y=u._ceVNode||et(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,h,g),l=!0,u._container=h,h.__vue_app__=u,mc(y.component)}},onUnmount(h){c.push(h)},unmount(){l&&(en(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=is;is=u;try{return h()}finally{is=d}}};return u}}let is=null;const pT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${ps(e)}Modifiers`];function gT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&pT(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>$e(h)?h.trim():h)),o.number&&(s=n.map(oc)));let c,l=r[c=nl(e)]||r[c=nl(xt(e))];!l&&i&&(l=r[c=nl(ps(e))]),l&&en(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,en(u,t,6,s)}}const mT=new WeakMap;function um(t,e,n=!1){const r=n?mT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!me(t)){const l=u=>{const h=um(u,e,!0);h&&(c=!0,ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(fe(i)?i.forEach(l=>o[l]=null):ct(o,i),Oe(t)&&r.set(t,o),o)}function pc(t,e){return!t||!ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,ps(e))||Ne(t,e))}function jf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:d,data:g,setupState:y,ctx:R,inheritAttrs:C}=t,V=Aa(t);let $,x;try{if(n.shapeFlag&4){const H=s||r,Y=H;$=Tn(u.call(Y,H,h,d,y,g,R)),x=c}else{const H=e;$=Tn(H.length>1?H(d,{attrs:c,slots:o,emit:l}):H(d,null)),x=e.props?c:_T(c)}}catch(H){qi.length=0,uc(H,t,1),$=et(Rt)}let z=$;if(x&&C!==!1){const H=Object.keys(x),{shapeFlag:Y}=z;H.length&&Y&7&&(i&&H.some(tc)&&(x=yT(x,i)),z=kr(z,x,!1,!0))}return n.dirs&&(z=kr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&to(z,n.transition),$=z,Aa(V),$}const _T=t=>{let e;for(const n in t)(n==="class"||n==="style"||ec(n))&&((e||(e={}))[n]=t[n]);return e},yT=(t,e)=>{const n={};for(const r in t)(!tc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$f(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(hm(o,r,g)&&!pc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?$f(r,o,u):!0:!!o;return!1}function $f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(hm(e,t,i)&&!pc(n,i))return!0}return!1}function hm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Oe(r)&&Oe(s)?!To(r,s):r!==s}function ET({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const fm={},dm=()=>Object.create(fm),pm=t=>Object.getPrototypeOf(t)===fm;function TT(t,e,n,r=!1){const s={},i=dm();t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(pc(t.emitsOptions,g))continue;const y=e[g];if(l)if(Ne(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const R=xt(g);s[R]=jl(l,c,R,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{gm(t,e,s,i)&&(u=!0);let h;for(const d in c)(!e||!Ne(e,d)&&((h=ps(d))===d||!Ne(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=jl(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ne(e,d))&&(delete i[d],u=!0)}u&&qn(t.attrs,"set","")}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Mi(l))continue;const u=e[l];let h;s&&Ne(s,h=xt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:pc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=c||Me;for(let h=0;h<i.length;h++){const d=i[h];n[d]=jl(s,l,d,u[d],t,!Ne(u,d))}}return o}function jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=wo(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ps(n))&&(r=!0))}return r}const wT=new WeakMap;function mm(t,e,n=!1){const r=n?wT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!me(t)){const h=d=>{l=!0;const[g,y]=mm(d,e,!0);ct(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Oe(t)&&r.set(t,Ns),Ns;if(fe(i))for(let h=0;h<i.length;h++){const d=xt(i[h]);qf(d)&&(o[d]=Me)}else if(i)for(const h in i){const d=xt(h);if(qf(d)){const g=i[h],y=o[d]=fe(g)||me(g)?{type:g}:ct({},g),R=y.type;let C=!1,V=!0;if(fe(R))for(let $=0;$<R.length;++$){const x=R[$],z=me(x)&&x.name;if(z==="Boolean"){C=!0;break}else z==="String"&&(V=!1)}else C=me(R)&&R.name==="Boolean";y[0]=C,y[1]=V,(C||Ne(y,"default"))&&c.push(d)}}const u=[o,c];return Oe(t)&&r.set(t,u),u}function qf(t){return t[0]!=="$"&&!Mi(t)}const ku=t=>t==="_"||t==="_ctx"||t==="$stable",Vu=t=>fe(t)?t.map(Tn):[Tn(t)],AT=(t,e,n)=>{if(e._n)return e;const r=ba((...s)=>Vu(e(...s)),n);return r._c=!1,r},_m=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ku(s))continue;const i=t[s];if(me(i))e[s]=AT(s,i,r);else if(i!=null){const o=Vu(i);e[s]=()=>o}}},ym=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},vm=(t,e,n)=>{for(const r in e)(n||!ku(r))&&(t[r]=e[r])},bT=(t,e,n)=>{const r=t.slots=dm();if(t.vnode.shapeFlag&32){const s=e._;s?(vm(r,e,n),n&&pg(r,"_",s,!0)):_m(e,r)}else e&&ym(t,e)},ST=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:vm(s,e,n):(i=!e.$stable,_m(e,s)),o=e}else e&&(ym(t,e),o={default:1});if(i)for(const c in s)!ku(c)&&o[c]==null&&delete s[c]},Nt=VT;function RT(t){return CT(t)}function CT(t,e){const n=ac();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:y=wn,insertStaticContent:R}=t,C=(T,S,P,M=null,j=null,L=null,X=void 0,W=null,G=!!S.dynamicChildren)=>{if(T===S)return;T&&!Zr(T,S)&&(M=U(T),pt(T,j,L,!0),T=null),S.patchFlag===-2&&(G=!1,S.dynamicChildren=null);const{type:q,ref:ue,shapeFlag:ne}=S;switch(q){case gc:V(T,S,P,M);break;case Rt:$(T,S,P,M);break;case ca:T==null&&x(S,P,M,X);break;case dt:w(T,S,P,M,j,L,X,W,G);break;default:ne&1?Y(T,S,P,M,j,L,X,W,G):ne&6?E(T,S,P,M,j,L,X,W,G):(ne&64||ne&128)&&q.process(T,S,P,M,j,L,X,W,G,oe)}ue!=null&&j?ji(ue,T&&T.ref,L,S||T,!S):ue==null&&T&&T.ref!=null&&ji(T.ref,null,L,T,!0)},V=(T,S,P,M)=>{if(T==null)r(S.el=c(S.children),P,M);else{const j=S.el=T.el;S.children!==T.children&&u(j,S.children)}},$=(T,S,P,M)=>{T==null?r(S.el=l(S.children||""),P,M):S.el=T.el},x=(T,S,P,M)=>{[T.el,T.anchor]=R(T.children,S,P,M,T.el,T.anchor)},z=({el:T,anchor:S},P,M)=>{let j;for(;T&&T!==S;)j=g(T),r(T,P,M),T=j;r(S,P,M)},H=({el:T,anchor:S})=>{let P;for(;T&&T!==S;)P=g(T),s(T),T=P;s(S)},Y=(T,S,P,M,j,L,X,W,G)=>{if(S.type==="svg"?X="svg":S.type==="math"&&(X="mathml"),T==null)le(S,P,M,j,L,X,W,G);else{const q=T.el&&T.el._isVueCE?T.el:null;try{q&&q._beginPatch(),_(T,S,j,L,X,W,G)}finally{q&&q._endPatch()}}},le=(T,S,P,M,j,L,X,W)=>{let G,q;const{props:ue,shapeFlag:ne,transition:ae,dirs:he}=T;if(G=T.el=o(T.type,L,ue&&ue.is,ue),ne&8?h(G,T.children):ne&16&&v(T.children,G,null,M,j,ll(T,L),X,W),he&&Wr(T,null,M,"created"),I(G,T,T.scopeId,X,M),ue){for(const ke in ue)ke!=="value"&&!Mi(ke)&&i(G,ke,null,ue[ke],L,M);"value"in ue&&i(G,"value",null,ue.value,L),(q=ue.onVnodeBeforeMount)&&_n(q,M,T)}he&&Wr(T,null,M,"beforeMount");const Ae=PT(j,ae);Ae&&ae.beforeEnter(G),r(G,S,P),((q=ue&&ue.onVnodeMounted)||Ae||he)&&Nt(()=>{try{q&&_n(q,M,T),Ae&&ae.enter(G),he&&Wr(T,null,M,"mounted")}finally{}},j)},I=(T,S,P,M,j)=>{if(P&&y(T,P),M)for(let L=0;L<M.length;L++)y(T,M[L]);if(j){let L=j.subTree;if(S===L||Im(L.type)&&(L.ssContent===S||L.ssFallback===S)){const X=j.vnode;I(T,X,X.scopeId,X.slotScopeIds,j.parent)}}},v=(T,S,P,M,j,L,X,W,G=0)=>{for(let q=G;q<T.length;q++){const ue=T[q]=W?$n(T[q]):Tn(T[q]);C(null,ue,S,P,M,j,L,X,W)}},_=(T,S,P,M,j,L,X)=>{const W=S.el=T.el;let{patchFlag:G,dynamicChildren:q,dirs:ue}=S;G|=T.patchFlag&16;const ne=T.props||Me,ae=S.props||Me;let he;if(P&&zr(P,!1),(he=ae.onVnodeBeforeUpdate)&&_n(he,P,S,T),ue&&Wr(S,T,P,"beforeUpdate"),P&&zr(P,!0),(ne.innerHTML&&ae.innerHTML==null||ne.textContent&&ae.textContent==null)&&h(W,""),q?A(T.dynamicChildren,q,W,P,M,ll(S,j),L):X||ye(T,S,W,null,P,M,ll(S,j),L,!1),G>0){if(G&16)b(W,ne,ae,P,j);else if(G&2&&ne.class!==ae.class&&i(W,"class",null,ae.class,j),G&4&&i(W,"style",ne.style,ae.style,j),G&8){const Ae=S.dynamicProps;for(let ke=0;ke<Ae.length;ke++){const Ce=Ae[ke],Ge=ne[Ce],rt=ae[Ce];(rt!==Ge||Ce==="value")&&i(W,Ce,Ge,rt,j,P)}}G&1&&T.children!==S.children&&h(W,S.children)}else!X&&q==null&&b(W,ne,ae,P,j);((he=ae.onVnodeUpdated)||ue)&&Nt(()=>{he&&_n(he,P,S,T),ue&&Wr(S,T,P,"updated")},M)},A=(T,S,P,M,j,L,X)=>{for(let W=0;W<S.length;W++){const G=T[W],q=S[W],ue=G.el&&(G.type===dt||!Zr(G,q)||G.shapeFlag&198)?d(G.el):P;C(G,q,ue,null,M,j,L,X,!0)}},b=(T,S,P,M,j)=>{if(S!==P){if(S!==Me)for(const L in S)!Mi(L)&&!(L in P)&&i(T,L,S[L],null,j,M);for(const L in P){if(Mi(L))continue;const X=P[L],W=S[L];X!==W&&L!=="value"&&i(T,L,W,X,j,M)}"value"in P&&i(T,"value",S.value,P.value,j)}},w=(T,S,P,M,j,L,X,W,G)=>{const q=S.el=T?T.el:c(""),ue=S.anchor=T?T.anchor:c("");let{patchFlag:ne,dynamicChildren:ae,slotScopeIds:he}=S;he&&(W=W?W.concat(he):he),T==null?(r(q,P,M),r(ue,P,M),v(S.children||[],P,ue,j,L,X,W,G)):ne>0&&ne&64&&ae&&T.dynamicChildren&&T.dynamicChildren.length===ae.length?(A(T.dynamicChildren,ae,P,j,L,X,W),(S.key!=null||j&&S===j.subTree)&&Nu(T,S,!0)):ye(T,S,P,ue,j,L,X,W,G)},E=(T,S,P,M,j,L,X,W,G)=>{S.slotScopeIds=W,T==null?S.shapeFlag&512?j.ctx.activate(S,P,M,X,G):J(S,P,M,j,L,X,G):N(T,S,G)},J=(T,S,P,M,j,L,X)=>{const W=T.component=UT(T,M,j);if(fc(T)&&(W.ctx.renderer=oe),BT(W,!1,X),W.asyncDep){if(j&&j.registerDep(W,K,X),!T.el){const G=W.subTree=et(Rt);$(null,G,S,P),T.placeholder=G.el}}else K(W,T,S,P,j,L,X)},N=(T,S,P)=>{const M=S.component=T.component;if(vT(T,S,P))if(M.asyncDep&&!M.asyncResolved){se(M,S,P);return}else M.next=S,M.update();else S.el=T.el,M.vnode=S},K=(T,S,P,M,j,L,X)=>{const W=()=>{if(T.isMounted){let{next:ne,bu:ae,u:he,parent:Ae,vnode:ke}=T;{const jt=Em(T);if(jt){ne&&(ne.el=ke.el,se(T,ne,X)),jt.asyncDep.then(()=>{Nt(()=>{T.isUnmounted||q()},j)});return}}let Ce=ne,Ge;zr(T,!1),ne?(ne.el=ke.el,se(T,ne,X)):ne=ke,ae&&ia(ae),(Ge=ne.props&&ne.props.onVnodeBeforeUpdate)&&_n(Ge,Ae,ne,ke),zr(T,!0);const rt=jf(T),Bt=T.subTree;T.subTree=rt,C(Bt,rt,d(Bt.el),U(Bt),T,j,L),ne.el=rt.el,Ce===null&&ET(T,rt.el),he&&Nt(he,j),(Ge=ne.props&&ne.props.onVnodeUpdated)&&Nt(()=>_n(Ge,Ae,ne,ke),j)}else{let ne;const{el:ae,props:he}=S,{bm:Ae,m:ke,parent:Ce,root:Ge,type:rt}=T,Bt=xs(S);zr(T,!1),Ae&&ia(Ae),!Bt&&(ne=he&&he.onVnodeBeforeMount)&&_n(ne,Ce,S),zr(T,!0);{Ge.ce&&Ge.ce._hasShadowRoot()&&Ge.ce._injectChildStyle(rt,T.parent?T.parent.type:void 0);const jt=T.subTree=jf(T);C(null,jt,P,M,T,j,L),S.el=jt.el}if(ke&&Nt(ke,j),!Bt&&(ne=he&&he.onVnodeMounted)){const jt=S;Nt(()=>_n(ne,Ce,jt),j)}(S.shapeFlag&256||Ce&&xs(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&T.a&&Nt(T.a,j),T.isMounted=!0,S=P=M=null}};T.scope.on();const G=T.effect=new Tg(W);T.scope.off();const q=T.update=G.run.bind(G),ue=T.job=G.runIfDirty.bind(G);ue.i=T,ue.id=T.uid,G.scheduler=()=>Cu(ue),zr(T,!0),q()},se=(T,S,P)=>{S.component=T;const M=T.vnode.props;T.vnode=S,T.next=null,IT(T,S.props,M,P),ST(T,S.children,P),Yn(),kf(T),Xn()},ye=(T,S,P,M,j,L,X,W,G=!1)=>{const q=T&&T.children,ue=T?T.shapeFlag:0,ne=S.children,{patchFlag:ae,shapeFlag:he}=S;if(ae>0){if(ae&128){pn(q,ne,P,M,j,L,X,W,G);return}else if(ae&256){Lt(q,ne,P,M,j,L,X,W,G);return}}he&8?(ue&16&&Tt(q,j,L),ne!==q&&h(P,ne)):ue&16?he&16?pn(q,ne,P,M,j,L,X,W,G):Tt(q,j,L,!0):(ue&8&&h(P,""),he&16&&v(ne,P,M,j,L,X,W,G))},Lt=(T,S,P,M,j,L,X,W,G)=>{T=T||Ns,S=S||Ns;const q=T.length,ue=S.length,ne=Math.min(q,ue);let ae;for(ae=0;ae<ne;ae++){const he=S[ae]=G?$n(S[ae]):Tn(S[ae]);C(T[ae],he,P,null,j,L,X,W,G)}q>ue?Tt(T,j,L,!0,!1,ne):v(S,P,M,j,L,X,W,G,ne)},pn=(T,S,P,M,j,L,X,W,G)=>{let q=0;const ue=S.length;let ne=T.length-1,ae=ue-1;for(;q<=ne&&q<=ae;){const he=T[q],Ae=S[q]=G?$n(S[q]):Tn(S[q]);if(Zr(he,Ae))C(he,Ae,P,null,j,L,X,W,G);else break;q++}for(;q<=ne&&q<=ae;){const he=T[ne],Ae=S[ae]=G?$n(S[ae]):Tn(S[ae]);if(Zr(he,Ae))C(he,Ae,P,null,j,L,X,W,G);else break;ne--,ae--}if(q>ne){if(q<=ae){const he=ae+1,Ae=he<ue?S[he].el:M;for(;q<=ae;)C(null,S[q]=G?$n(S[q]):Tn(S[q]),P,Ae,j,L,X,W,G),q++}}else if(q>ae)for(;q<=ne;)pt(T[q],j,L,!0),q++;else{const he=q,Ae=q,ke=new Map;for(q=Ae;q<=ae;q++){const gt=S[q]=G?$n(S[q]):Tn(S[q]);gt.key!=null&&ke.set(gt.key,q)}let Ce,Ge=0;const rt=ae-Ae+1;let Bt=!1,jt=0;const rn=new Array(rt);for(q=0;q<rt;q++)rn[q]=0;for(q=he;q<=ne;q++){const gt=T[q];if(Ge>=rt){pt(gt,j,L,!0);continue}let ut;if(gt.key!=null)ut=ke.get(gt.key);else for(Ce=Ae;Ce<=ae;Ce++)if(rn[Ce-Ae]===0&&Zr(gt,S[Ce])){ut=Ce;break}ut===void 0?pt(gt,j,L,!0):(rn[ut-Ae]=q+1,ut>=jt?jt=ut:Bt=!0,C(gt,S[ut],P,null,j,L,X,W,G),Ge++)}const vs=Bt?kT(rn):Ns;for(Ce=vs.length-1,q=rt-1;q>=0;q--){const gt=Ae+q,ut=S[gt],oi=S[gt+1],jr=gt+1<ue?oi.el||Tm(oi):M;rn[q]===0?C(null,ut,P,jr,j,L,X,W,G):Bt&&(Ce<0||q!==vs[Ce]?Ut(ut,P,jr,2):Ce--)}}},Ut=(T,S,P,M,j=null)=>{const{el:L,type:X,transition:W,children:G,shapeFlag:q}=T;if(q&6){Ut(T.component.subTree,S,P,M);return}if(q&128){T.suspense.move(S,P,M);return}if(q&64){X.move(T,S,P,oe);return}if(X===dt){r(L,S,P);for(let ne=0;ne<G.length;ne++)Ut(G[ne],S,P,M);r(T.anchor,S,P);return}if(X===ca){z(T,S,P);return}if(M!==2&&q&1&&W)if(M===0)W.persisted&&!L[Jt]?r(L,S,P):(W.beforeEnter(L),r(L,S,P),Nt(()=>W.enter(L),j));else{const{leave:ne,delayLeave:ae,afterLeave:he}=W,Ae=()=>{T.ctx.isUnmounted?s(L):r(L,S,P)},ke=()=>{const Ce=L._isLeaving||!!L[Jt];L._isLeaving&&L[Jt](!0),W.persisted&&!Ce?Ae():ne(L,()=>{Ae(),he&&he()})};ae?ae(L,Ae,ke):ke()}else r(L,S,P)},pt=(T,S,P,M=!1,j=!1)=>{const{type:L,props:X,ref:W,children:G,dynamicChildren:q,shapeFlag:ue,patchFlag:ne,dirs:ae,cacheIndex:he,memo:Ae}=T;if(ne===-2&&(j=!1),W!=null&&(Yn(),ji(W,null,P,T,!0),Xn()),he!=null&&(S.renderCache[he]=void 0),ue&256){S.ctx.deactivate(T);return}const ke=ue&1&&ae,Ce=!xs(T);let Ge;if(Ce&&(Ge=X&&X.onVnodeBeforeUnmount)&&_n(Ge,S,T),ue&6)nn(T.component,P,M);else{if(ue&128){T.suspense.unmount(P,M);return}ke&&Wr(T,null,S,"beforeUnmount"),ue&64?T.type.remove(T,S,P,oe,M):q&&!q.hasOnce&&(L!==dt||ne>0&&ne&64)?Tt(q,S,P,!1,!0):(L===dt&&ne&384||!j&&ue&16)&&Tt(G,S,P),M&&Mn(T)}const rt=Ae!=null&&he==null;(Ce&&(Ge=X&&X.onVnodeUnmounted)||ke||rt)&&Nt(()=>{Ge&&_n(Ge,S,T),ke&&Wr(T,null,S,"unmounted"),rt&&(T.el=null)},P)},Mn=T=>{const{type:S,el:P,anchor:M,transition:j}=T;if(S===dt){tn(P,M);return}if(S===ca){H(T);return}const L=()=>{s(P),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:X,delayLeave:W}=j,G=()=>X(P,L);W?W(T.el,L,G):G()}else L()},tn=(T,S)=>{let P;for(;T!==S;)P=g(T),s(T),T=P;s(S)},nn=(T,S,P)=>{const{bum:M,scope:j,job:L,subTree:X,um:W,m:G,a:q}=T;Hf(G),Hf(q),M&&ia(M),j.stop(),L&&(L.flags|=8,pt(X,T,S,P)),W&&Nt(W,S),Nt(()=>{T.isUnmounted=!0},S)},Tt=(T,S,P,M=!1,j=!1,L=0)=>{for(let X=L;X<T.length;X++)pt(T[X],S,P,M,j)},U=T=>{if(T.shapeFlag&6)return U(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=g(T.anchor||T.el),P=S&&S[Gg];return P?g(P):S};let re=!1;const ee=(T,S,P)=>{let M;T==null?S._vnode&&(pt(S._vnode,null,null,!0),M=S._vnode.component):C(S._vnode||null,T,S,null,null,null,P),S._vnode=T,re||(re=!0,kf(M),Bg(),re=!1)},oe={p:C,um:pt,m:Ut,r:Mn,mt:J,mc:v,pc:ye,pbc:A,n:U,o:t};return{render:ee,hydrate:void 0,createApp:dT(ee)}}function ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function PT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Nu(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=$n(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Nu(o,c)),c.type===gc&&(c.patchFlag===-1&&(c=s[i]=$n(c)),c.el=o.el),c.type===Rt&&!c.el&&(c.el=o.el)}}function kT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Em(e)}function Hf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Tm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Tm(e.subTree):null}const Im=t=>t.__isSuspense;function VT(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):FE(t)}const dt=Symbol.for("v-fgt"),gc=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),ca=Symbol.for("v-stc"),qi=[];let Ht=null;function Le(t=!1){qi.push(Ht=t?null:[])}function NT(){qi.pop(),Ht=qi[qi.length-1]||null}let no=1;function Ca(t,e=!1){no+=t,t<0&&Ht&&e&&(Ht.hasOnce=!0)}function wm(t){return t.dynamicChildren=no>0?Ht||Ns:null,NT(),no>0&&Ht&&Ht.push(t),t}function He(t,e,n,r,s,i){return wm(O(t,e,n,r,s,i,!0))}function Pa(t,e,n,r,s){return wm(et(t,e,n,r,s,!0))}function ro(t){return t?t.__v_isVNode===!0:!1}function Zr(t,e){return t.type===e.type&&t.key===e.key}const Am=({key:t})=>t??null,la=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ke(t)||me(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,r=0,s=null,i=t===dt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&la(e),scopeId:$g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return c?(Du(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),no>0&&!o&&Ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ht.push(l),l}const et=DT;function DT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sm)&&(t=Rt),ro(t)){const c=kr(t,e,!0);return n&&Du(c,n),no>0&&!i&&Ht&&(c.shapeFlag&6?Ht[Ht.indexOf(t)]=c:Ht.push(c)),c.patchFlag=-2,c}if(GT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=qt(c)),Oe(l)&&(lc(l)&&!fe(l)&&(l=ct({},l)),e.style=Yi(l))}const o=$e(t)?1:Im(t)?128:Wg(t)?64:Oe(t)?4:me(t)?2:0;return O(t,e,n,r,s,o,i,!0)}function OT(t){return t?lc(t)||pm(t)?ct({},t):t:null}function kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?LT(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Am(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(la(e)):[i,la(e)]:la(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kr(t.ssContent),ssFallback:t.ssFallback&&kr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&to(h,l.clone(h)),h}function ua(t=" ",e=0){return et(gc,null,t,e)}function xT(t,e){const n=et(ca,null,t);return n.staticCount=e,n}function Ar(t="",e=!1){return e?(Le(),Pa(Rt,null,t)):et(Rt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?et(Rt):fe(t)?et(dt,null,t.slice()):ro(t)?$n(t):et(gc,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kr(t)}function Du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pm(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[ua(e)]):n=8);t.children=e,t.shapeFlag|=n}function LT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qt([e.class,r.class]));else if(s==="style")e.style=Yi([e.style,r.style]);else if(ec(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!tc(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function _n(t,e,n,r=null){en(t,e,7,[n,r])}const MT=lm();let FT=0;function UT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||MT,i={uid:FT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(r,s),emitsOptions:um(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gT.bind(null,i),t.ce&&t.ce(i),i}let Ct=null;const Ou=()=>Ct||yt;let ka,$l;{const t=ac(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>Ct=n),$l=e("__VUE_SSR_SETTERS__",n=>so=n)}const wo=t=>{const e=Ct;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},Gf=()=>{Ct&&Ct.scope.off(),ka(null)};function bm(t){return t.vnode.shapeFlag&4}let so=!1;function BT(t,e=!1,n=!1){e&&$l(e);const{props:r,children:s}=t.vnode,i=bm(t);TT(t,r,i,e),bT(t,s,n||e);const o=i?jT(t,e):void 0;return e&&$l(!1),o}function jT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,oT);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?qT(t):null,i=wo(t),o=Io(r,t,0,[t.props,s]),c=hg(o);if(Xn(),i(),(c||t.sp)&&!xs(t)&&Xg(t),c){if(o.then(Gf,Gf),e)return o.then(l=>{Wf(t,l)}).catch(l=>{uc(l,t,0)});t.asyncDep=o}else Wf(t,o)}else Sm(t)}function Wf(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Mg(e)),Sm(t)}function Sm(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=wo(t);Yn();try{aT(t)}finally{Xn(),s()}}}const $T={get(t,e){return bt(t,"get",""),t[e]}};function qT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$T),slots:t.slots,emit:t.emit,expose:e}}function mc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mg(Ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)},has(e,n){return n in e||n in $i}})):t.proxy}function HT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function GT(t){return me(t)&&"__vccOpts"in t}const ie=(t,e)=>DE(t,e,so);function xu(t,e,n){try{Ca(-1);const r=arguments.length;return r===2?Oe(e)&&!fe(e)?ro(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ro(n)&&(n=[n]),et(t,e,n))}finally{Ca(1)}}const WT="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ql;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{ql=zf.createPolicy("vue",{createHTML:t=>t})}catch{}const Rm=ql?t=>ql.createHTML(t):t=>t,zT="http://www.w3.org/2000/svg",KT="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Kf=jn&&jn.createElement("template"),QT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(zT,t):e==="mathml"?jn.createElementNS(KT,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Kf.innerHTML=Rm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Kf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dr="transition",wi="animation",io=Symbol("_vtc"),Cm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},JT=ct({},zg,Cm),YT=t=>(t.displayName="Transition",t.props=JT,t),XT=YT((t,{slots:e})=>xu(KE,ZT(t),e)),Kr=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function ZT(t){const e={};for(const w in t)w in Cm||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,R=eI(s),C=R&&R[0],V=R&&R[1],{onBeforeEnter:$,onEnter:x,onEnterCancelled:z,onLeave:H,onLeaveCancelled:Y,onBeforeAppear:le=$,onAppear:I=x,onAppearCancelled:v=z}=e,_=(w,E,J,N)=>{w._enterCancelled=N,Qr(w,E?h:c),Qr(w,E?u:o),J&&J()},A=(w,E)=>{w._isLeaving=!1,Qr(w,d),Qr(w,y),Qr(w,g),E&&E()},b=w=>(E,J)=>{const N=w?I:x,K=()=>_(E,w,J);Kr(N,[E,K]),Jf(()=>{Qr(E,w?l:i),Un(E,w?h:c),Qf(N)||Yf(E,r,C,K)})};return ct(e,{onBeforeEnter(w){Kr($,[w]),Un(w,i),Un(w,o)},onBeforeAppear(w){Kr(le,[w]),Un(w,l),Un(w,u)},onEnter:b(!1),onAppear:b(!0),onLeave(w,E){w._isLeaving=!0;const J=()=>A(w,E);Un(w,d),w._enterCancelled?(Un(w,g),ed(w)):(ed(w),Un(w,g)),Jf(()=>{w._isLeaving&&(Qr(w,d),Un(w,y),Qf(H)||Yf(w,r,V,J))}),Kr(H,[w,J])},onEnterCancelled(w){_(w,!1,void 0,!0),Kr(z,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Kr(v,[w])},onLeaveCancelled(w){A(w),Kr(Y,[w])}})}function eI(t){if(t==null)return null;if(Oe(t))return[ul(t.enter),ul(t.leave)];{const e=ul(t);return[e,e]}}function ul(t){return Xv(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[io]||(t[io]=new Set)).add(e)}function Qr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[io];n&&(n.delete(e),n.size||(t[io]=void 0))}function Jf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let tI=0;function Yf(t,e,n,r){const s=t._endId=++tI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=nI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},c+1),t.addEventListener(u,g)}function nI(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${dr}Delay`),i=r(`${dr}Duration`),o=Xf(s,i),c=r(`${wi}Delay`),l=r(`${wi}Duration`),u=Xf(c,l);let h=null,d=0,g=0;e===dr?o>0&&(h=dr,d=o,g=i.length):e===wi?u>0&&(h=wi,d=u,g=l.length):(d=Math.max(o,u),h=d>0?o>u?dr:wi:null,g=h?h===dr?i.length:l.length:0);const y=h===dr&&/\b(?:transform|all)(?:,|$)/.test(r(`${dr}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:y}}function Xf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zf(n)+Zf(t[r])))}function Zf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ed(t){return(t?t.ownerDocument:document).body.offsetHeight}function rI(t,e,n){const r=t[io];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const td=Symbol("_vod"),sI=Symbol("_vsh"),iI=Symbol(""),oI=/(?:^|;)\s*display\s*:/;function aI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ni(r,c,"")}else for(const o in e)n[o]==null&&Ni(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?lI(t,o,!$e(e)&&e?e[o]:void 0,c)||Ni(r,o,c):Ni(r,o,"")}}else if(s){if(e!==n){const o=r[iI];o&&(n+=";"+o),r.cssText=n,i=oI.test(n)}}else e&&t.removeAttribute("style");td in t&&(t[td]=i?r.display:"",t[sI]&&(r.display="none"))}const nd=/\s*!important$/;function Ni(t,e,n){if(fe(n))n.forEach(r=>Ni(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cI(t,e);nd.test(n)?t.setProperty(ps(r),n.replace(nd,""),"important"):t[r]=n}}const rd=["Webkit","Moz","ms"],hl={};function cI(t,e){const n=hl[e];if(n)return n;let r=xt(e);if(r!=="filter"&&r in t)return hl[e]=r;r=ic(r);for(let s=0;s<rd.length;s++){const i=rd[s]+r;if(i in t)return hl[e]=i}return e}function lI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&$e(r)&&n===r}const sd="http://www.w3.org/1999/xlink";function id(t,e,n,r,s,i=sE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n):n==null||i&&!gg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":zt(n)?String(n):n)}function od(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function es(t,e,n,r){t.addEventListener(e,n,r)}function uI(t,e,n,r){t.removeEventListener(e,n,r)}const ad=Symbol("_vei");function hI(t,e,n,r,s=null){const i=t[ad]||(t[ad]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=fI(e);if(r){const u=i[e]=gI(r,s);es(t,c,u,l)}else o&&(uI(t,c,o,l),i[e]=void 0)}}const cd=/(?:Once|Passive|Capture)$/;function fI(t){let e;if(cd.test(t)){e={};let r;for(;r=t.match(cd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let fl=0;const dI=Promise.resolve(),pI=()=>fl||(dI.then(()=>fl=0),fl=Date.now());function gI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(fe(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&en(u,e,5,c)}}else en(s,e,5,[r])};return n.value=t,n.attached=pI(),n}const ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rI(t,r,o):e==="style"?aI(t,n,r):ec(e)?tc(e)||hI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_I(t,e,r,o))?(od(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&id(t,e,r,o,i,e!=="value")):t._isVueCE&&(yI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?od(t,xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),id(t,e,r,o))};function _I(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ld(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ld(e)&&$e(n)?!1:e in t}function yI(t,e){const n=t._def.props;if(!n)return!1;const r=xt(e);return Array.isArray(n)?n.some(s=>xt(s)===r):Object.keys(n).some(s=>xt(s)===r)}const Va=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>ia(e,n):e};function vI(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign");function hd(t,e,n){return e&&(t=t.trim()),n&&(t=oc(t)),t}const RV={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ls]=Va(s);const i=r||s.props&&s.props.type==="number";es(t,e?"change":"input",o=>{o.target.composing||t[Ls](hd(t.value,n,i))}),(n||i)&&es(t,"change",()=>{t.value=hd(t.value,n,i)}),e||(es(t,"compositionstart",vI),es(t,"compositionend",ud),es(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ls]=Va(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?oc(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},CV={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=nc(e);es(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?oc(Na(o)):Na(o));t[Ls](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,hc(()=>{t._assigning=!1})}),t[Ls]=Va(r)},mounted(t,{value:e}){fd(t,e)},beforeUpdate(t,e,n){t[Ls]=Va(n)},updated(t,{value:e}){t._assigning||fd(t,e)}};function fd(t,e){const n=t.multiple,r=fe(e);if(!(n&&!r&&!nc(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Na(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=oE(e,c)>-1}else o.selected=e.has(c);else if(To(Na(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Na(t){return"_value"in t?t._value:t.value}const EI=["ctrl","shift","alt","meta"],TI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EI.some(n=>t[`${n}Key`]&&!e.includes(n))},PV=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=TI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},II=ct({patchProp:mI},QT);let dd;function wI(){return dd||(dd=RT(II))}const AI=(...t)=>{const e=wI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=SI(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function SI(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pm;const _c=t=>Pm=t,km=Symbol();function Hl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hi||(Hi={}));function RI(){const t=vg(!0),e=t.run(()=>Je({}));let n=[],r=[];const s=Ru({install(i){_c(s),s._a=i,i.provide(km,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Vm=()=>{};function pd(t,e,n,r=Vm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Eg()&&aE(s),s}function As(t,...e){t.slice().forEach(n=>{n(...e)})}const CI=t=>t(),gd=Symbol(),dl=Symbol();function Gl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hl(s)&&Hl(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Qn(r)?t[n]=Gl(s,r):t[n]=r}return t}const PI=Symbol();function kI(t){return!Hl(t)||!t.hasOwnProperty(PI)}const{assign:yr}=Object;function VI(t){return!!(Ke(t)&&t.effect)}function NI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=PE(n.state.value[t]);return yr(h,i,Object.keys(o||{}).reduce((d,g)=>(d[g]=Ru(ie(()=>{_c(n);const y=n._s.get(t);return o[g].call(y,y)})),d),{}))}return l=Nm(t,u,e,n,r,!0),l}function Nm(t,e,n={},r,s,i){let o;const c=yr({actions:{}},n),l={deep:!0};let u,h,d=[],g=[],y;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={});let C;function V(v){let _;u=h=!1,typeof v=="function"?(v(r.state.value[t]),_={type:Hi.patchFunction,storeId:t,events:y}):(Gl(r.state.value[t],v),_={type:Hi.patchObject,payload:v,storeId:t,events:y});const A=C=Symbol();hc().then(()=>{C===A&&(u=!0)}),h=!0,As(d,_,r.state.value[t])}const $=i?function(){const{state:_}=n,A=_?_():{};this.$patch(b=>{yr(b,A)})}:Vm;function x(){o.stop(),d=[],g=[],r._s.delete(t)}const z=(v,_="")=>{if(gd in v)return v[dl]=_,v;const A=function(){_c(r);const b=Array.from(arguments),w=[],E=[];function J(se){w.push(se)}function N(se){E.push(se)}As(g,{args:b,name:A[dl],store:Y,after:J,onError:N});let K;try{K=v.apply(this&&this.$id===t?this:Y,b)}catch(se){throw As(E,se),se}return K instanceof Promise?K.then(se=>(As(w,se),se)).catch(se=>(As(E,se),Promise.reject(se))):(As(w,K),K)};return A[gd]=!0,A[dl]=_,A},H={_p:r,$id:t,$onAction:pd.bind(null,g),$patch:V,$reset:$,$subscribe(v,_={}){const A=pd(d,v,_.detached,()=>b()),b=o.run(()=>Bi(()=>r.state.value[t],w=>{(_.flush==="sync"?h:u)&&v({storeId:t,type:Hi.direct,events:y},w)},yr({},l,_)));return A},$dispose:x},Y=gs(H);r._s.set(t,Y);const I=(r._a&&r._a.runWithContext||CI)(()=>r._e.run(()=>(o=vg()).run(()=>e({action:z}))));for(const v in I){const _=I[v];if(Ke(_)&&!VI(_)||Qn(_))i||(R&&kI(_)&&(Ke(_)?_.value=R[v]:Gl(_,R[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const A=z(_,v);I[v]=A,c.actions[v]=_}}return yr(Y,I),yr(Re(Y),I),Object.defineProperty(Y,"$state",{get:()=>r.state.value[t],set:v=>{V(_=>{yr(_,v)})}}),r._p.forEach(v=>{yr(Y,o.run(()=>v({store:Y,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(Y.$state,R),u=!0,h=!0,Y}/*! #__NO_SIDE_EFFECTS__ */function Kt(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=UE();return c=c||(u?Xt(km,null):null),c&&_c(c),c=Pm,c._s.has(r)||(i?Nm(r,e,s,c):NI(r,s,c)),c._s.get(r)}return o.$id=r,o}const DI=()=>{};var md={};/**
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
 */const Dm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[h],n[d],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new xI;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),d!==64){const R=u<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(t){const e=Dm(t);return Om.encodeByteArray(e,!0)},Da=function(t){return LI(t).replace(/\./g,"")},xm=function(t){try{return Om.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>MI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof md>"u")return;const t=md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xm(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return DI()||FI()||UI()||BI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lm=t=>{var e,n;return(n=(e=yc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jI=t=>{const e=Lm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mm=()=>{var t;return(t=yc())==null?void 0:t.config},Fm=t=>{var e;return(e=yc())==null?void 0:e[`_${t}`]};/**
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
 */class $I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function GI(){var e;const t=(e=yc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QI(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JI(){return!GI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function XI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZI="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZI,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ew(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ir(s,c,r)}}function ew(t,e){return t.replace(tw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tw=/\{\$([^}]+)}/g;function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_d(i)&&_d(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _d(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rw(t,e){const n=new sw(t,e);return n.subscribe.bind(n)}class sw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pl),s.error===void 0&&(s.error=pl),s.complete===void 0&&(s.complete=pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function So(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(t){return(await fetch(t,{credentials:"include"})).ok}class ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $I;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cw(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(t){return t===Yr?void 0:t}function cw(t){return t.instantiationMode==="EAGER"}/**
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
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const uw={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},hw=be.INFO,fw={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},dw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lu{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=dw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const pw=(t,e)=>e.some(n=>t instanceof n);let yd,vd;function gw(){return yd||(yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mw(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bm=new WeakMap,Wl=new WeakMap,jm=new WeakMap,gl=new WeakMap,Mu=new WeakMap;function _w(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bm.set(n,t)}).catch(()=>{}),Mu.set(e,t),e}function yw(t){if(Wl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wl.set(t,e)}let zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vw(t){zl=t(zl)}function Ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ml(this),e,...n);return jm.set(r,e.sort?e.sort():[e]),br(r)}:mw().includes(t)?function(...e){return t.apply(ml(this),e),br(Bm.get(this))}:function(...e){return br(t.apply(ml(this),e))}}function Tw(t){return typeof t=="function"?Ew(t):(t instanceof IDBTransaction&&yw(t),pw(t,gw())?new Proxy(t,zl):t)}function br(t){if(t instanceof IDBRequest)return _w(t);if(gl.has(t))return gl.get(t);const e=Tw(t);return e!==t&&(gl.set(t,e),Mu.set(e,t)),e}const ml=t=>Mu.get(t);function Iw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const ww=["get","getKey","getAll","getAllKeys","count"],Aw=["put","add","delete","clear"],_l=new Map;function Ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_l.get(e))return _l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Aw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ww.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return _l.set(e,i),i}vw(t=>({...t,get:(e,n,r)=>Ed(e,n)||t.get(e,n,r),has:(e,n)=>!!Ed(e,n)||t.has(e,n)}));/**
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
 */class bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Td="0.14.13";/**
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
 */const er=new Lu("@firebase/app"),Rw="@firebase/app-compat",Cw="@firebase/analytics-compat",Pw="@firebase/analytics",kw="@firebase/app-check-compat",Vw="@firebase/app-check",Nw="@firebase/auth",Dw="@firebase/auth-compat",Ow="@firebase/database",xw="@firebase/data-connect",Lw="@firebase/database-compat",Mw="@firebase/functions",Fw="@firebase/functions-compat",Uw="@firebase/installations",Bw="@firebase/installations-compat",jw="@firebase/messaging",$w="@firebase/messaging-compat",qw="@firebase/performance",Hw="@firebase/performance-compat",Gw="@firebase/remote-config",Ww="@firebase/remote-config-compat",zw="@firebase/storage",Kw="@firebase/storage-compat",Qw="@firebase/firestore",Jw="@firebase/ai",Yw="@firebase/firestore-compat",Xw="firebase",Zw="12.14.0";/**
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
 */const Ql="[DEFAULT]",eA={[Kl]:"fire-core",[Rw]:"fire-core-compat",[Pw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Vw]:"fire-app-check",[kw]:"fire-app-check-compat",[Nw]:"fire-auth",[Dw]:"fire-auth-compat",[Ow]:"fire-rtdb",[xw]:"fire-data-connect",[Lw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Fw]:"fire-fn-compat",[Uw]:"fire-iid",[Bw]:"fire-iid-compat",[jw]:"fire-fcm",[$w]:"fire-fcm-compat",[qw]:"fire-perf",[Hw]:"fire-perf-compat",[Gw]:"fire-rc",[Ww]:"fire-rc-compat",[zw]:"fire-gcs",[Kw]:"fire-gcs-compat",[Qw]:"fire-fst",[Yw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[Xw]:"fire-js-all"};/**
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
 */const Oa=new Map,tA=new Map,Jl=new Map;function Id(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(Jl.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,t);for(const n of Oa.values())Id(n,t);for(const n of tA.values())Id(n,t);return!0}function Fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const nA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Ao("app","Firebase",nA);/**
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
 */class rA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=Zw;function $m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ql,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=Mm()),!n)throw Sr.create("no-options");const i=Oa.get(s);if(i){if(cs(n,i.options)&&cs(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new lw(s);for(const l of Jl.values())o.addComponent(l);const c=new rA(n,r,o);return Oa.set(s,c),c}function qm(t=Ql){const e=Oa.get(t);if(!e&&t===Ql&&Mm())return $m();if(!e)throw Sr.create("no-app",{appName:t});return e}function Rr(t,e,n){let r=eA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(o.join(" "));return}Hs(new ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sA="firebase-heartbeat-database",iA=1,oo="firebase-heartbeat-store";let yl=null;function Hm(){return yl||(yl=Iw(sA,iA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),yl}async function oA(t){try{const n=(await Hm()).transaction(oo),r=await n.objectStore(oo).get(Gm(t));return await n.done,r}catch(e){if(e instanceof ir)er.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function wd(t,e){try{const r=(await Hm()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,Gm(t)),await r.done}catch(n){if(n instanceof ir)er.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function Gm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aA=1024,cA=30;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ad();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cA){const o=fA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ad(),{heartbeatsToSend:r,unsentEntries:s}=uA(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return er.warn(n),""}}}function Ad(){return new Date().toISOString().substring(0,10)}function uA(t,e=aA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?XI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bd(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}function fA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function dA(t){Hs(new ls("platform-logger",e=>new bw(e),"PRIVATE")),Hs(new ls("heartbeat",e=>new lA(e),"PRIVATE")),Rr(Kl,Td,t),Rr(Kl,Td,"esm2020"),Rr("fire-js","")}dA("");var pA="firebase",gA="12.14.0";/**
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
 */Rr(pA,gA,"app");var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,Wm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function _(){}_.prototype=v.prototype,I.F=v.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(A,b,w){for(var E=Array(arguments.length-2),J=2;J<arguments.length;J++)E[J-2]=arguments[J];return v.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,_){_||(_=0);const A=Array(16);if(typeof v=="string")for(var b=0;b<16;++b)A[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;b<16;++b)A[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=I.g[0],_=I.g[1],b=I.g[2];let w=I.g[3],E;E=v+(w^_&(b^w))+A[0]+3614090360&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+A[1]+3905402710&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+A[2]+606105819&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+A[3]+3250441966&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+A[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+A[5]+1200080426&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+A[6]+2821735955&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+A[7]+4249261313&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+A[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+A[9]+2336552879&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+A[10]+4294925233&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+A[11]+2304563134&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+A[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+A[13]+4254626195&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+A[14]+2792965006&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+A[15]+1236535329&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(b^w&(_^b))+A[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+A[6]+3225465664&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+A[11]+643717713&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+A[0]+3921069994&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+A[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+A[10]+38016083&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+A[15]+3634488961&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+A[4]+3889429448&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+A[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+A[14]+3275163606&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+A[3]+4107603335&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+A[8]+1163531501&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+A[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+A[2]+4243563512&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+A[7]+1735328473&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+A[12]+2368359562&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(_^b^w)+A[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+A[8]+2272392833&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+A[11]+1839030562&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+A[14]+4259657740&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+A[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+A[4]+1272893353&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+A[7]+4139469664&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+A[10]+3200236656&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+A[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+A[0]+3936430074&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+A[3]+3572445317&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+A[6]+76029189&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+A[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+A[12]+3873151461&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+A[15]+530742520&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+A[2]+3299628645&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(b^(_|~w))+A[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+A[7]+1126891415&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+A[14]+2878612391&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+A[5]+4237533241&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+A[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+A[3]+2399980690&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+A[10]+4293915773&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+A[1]+2240044497&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+A[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+A[15]+4264355552&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+A[6]+2734768916&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+A[13]+1309151649&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+A[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+A[11]+3174756917&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+A[2]+718787259&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const _=v-this.blockSize,A=this.C;let b=this.h,w=0;for(;w<v;){if(b==0)for(;w<=_;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<v;)if(A[b++]=I.charCodeAt(w++),b==this.blockSize){s(this,A),b=0;break}}else for(;w<v;)if(A[b++]=I[w++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)I[v++]=this.g[_]>>>A&255;return I};function i(I,v){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=v(I)}function o(I,v){this.h=v;const _=[];let A=!0;for(let b=I.length-1;b>=0;b--){const w=I[b]|0;A&&w==v||(_[b]=w,A=!1)}this.g=_}var c={};function l(I){return-128<=I&&I<128?i(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(I<0)return V(u(-I));const v=[];let _=1;for(let A=0;I>=_;A++)v[A]=I/_|0,_*=4294967296;return new o(v,0)}function h(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return V(h(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(v,8));let A=d;for(let w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w);const E=parseInt(I.substring(w,w+b),v);b<8?(b=u(Math.pow(v,b)),A=A.j(b).add(u(E))):(A=A.j(_),A=A.add(u(E)))}return A}var d=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-V(this).m();let I=0,v=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);I+=(A>=0?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(C(this))return"-"+V(this).toString(I);const v=u(Math.pow(I,6));var _=this;let A="";for(;;){const b=H(_,v).g;_=$(_,b.j(v));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=b,R(_))return w+A;for(;w.length<6;)w="0"+w;A=w+A}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function C(I){return I.h==-1}t.l=function(I){return I=$(this,I),C(I)?-1:R(I)?0:1};function V(I){const v=I.g.length,_=[];for(let A=0;A<v;A++)_[A]=~I.g[A];return new o(_,~I.h).add(g)}t.abs=function(){return C(this)?V(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),_=[];let A=0;for(let b=0;b<=v;b++){let w=A+(this.i(b)&65535)+(I.i(b)&65535),E=(w>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=E>>>16,w&=65535,E&=65535,_[b]=E<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function $(I,v){return I.add(V(v))}t.j=function(I){if(R(this)||R(I))return d;if(C(this))return C(I)?V(this).j(V(I)):V(V(this).j(I));if(C(I))return V(this.j(V(I)));if(this.l(y)<0&&I.l(y)<0)return u(this.m()*I.m());const v=this.g.length+I.g.length,_=[];for(var A=0;A<2*v;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<I.g.length;b++){const w=this.i(A)>>>16,E=this.i(A)&65535,J=I.i(b)>>>16,N=I.i(b)&65535;_[2*A+2*b]+=E*N,x(_,2*A+2*b),_[2*A+2*b+1]+=w*N,x(_,2*A+2*b+1),_[2*A+2*b+1]+=E*J,x(_,2*A+2*b+1),_[2*A+2*b+2]+=w*J,x(_,2*A+2*b+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function x(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function z(I,v){this.g=I,this.h=v}function H(I,v){if(R(v))throw Error("division by zero");if(R(I))return new z(d,d);if(C(I))return v=H(V(I),v),new z(V(v.g),V(v.h));if(C(v))return v=H(I,V(v)),new z(V(v.g),v.h);if(I.g.length>30){if(C(I)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=v;A.l(I)<=0;)_=Y(_),A=Y(A);var b=le(_,1),w=le(A,1);for(A=le(A,2),_=le(_,2);!R(A);){var E=w.add(A);E.l(I)<=0&&(b=b.add(_),w=E),A=le(A,1),_=le(_,1)}return v=$(I,b.j(v)),new z(b,v)}for(b=d;I.l(v)>=0;){for(_=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),w=u(_),E=w.j(v);C(E)||E.l(I)>0;)_-=A,w=u(_),E=w.j(v);R(w)&&(w=g),b=b.add(w),I=$(I,E)}return new z(b,I)}t.B=function(I){return H(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)&I.i(A);return new o(_,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)|I.i(A);return new o(_,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)^I.i(A);return new o(_,this.h^I.h)};function Y(I){const v=I.g.length+1,_=[];for(let A=0;A<v;A++)_[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(_,I.h)}function le(I,v){const _=v>>5;v%=32;const A=I.g.length-_,b=[];for(let w=0;w<A;w++)b[w]=v>0?I.i(w+_)>>>v|I.i(w+_+1)<<32-v:I.i(w+_);return new o(b,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Cr=o}).apply(typeof Sd<"u"?Sd:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zm,Di,Km,ha,Yl,Qm,Jm,Ym;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in p))break e;p=p[k]}a=a[a.length-1],m=p[a],f=f(m),f!=m&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var p=[],m;for(m in f)Object.prototype.hasOwnProperty.call(f,m)&&p.push([m,f[m]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,p){return a.call.apply(a.bind,arguments)}function u(a,f,p){return u=l,u.apply(null,arguments)}function h(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function d(a,f){function p(){}p.prototype=f.prototype,a.Z=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(m,k,D){for(var Q=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)Q[ve-2]=arguments[ve];return f.prototype[k].apply(m,Q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const f=a.length;if(f>0){const p=Array(f);for(let m=0;m<f;m++)p[m]=a[m];return p}return[]}function R(a,f){for(let m=1;m<arguments.length;m++){const k=arguments[m];var p=typeof k;if(p=p!="object"?p:k?Array.isArray(k)?"array":p:"null",p=="array"||p=="object"&&typeof k.length=="number"){p=a.length||0;const D=k.length||0;a.length=p+D;for(let Q=0;Q<D;Q++)a[p+Q]=k[Q]}else a.push(k)}}class C{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(a){o.setTimeout(()=>{throw a},0)}function $(){var a=I;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class x{constructor(){this.h=this.g=null}add(f,p){const m=z.get();m.set(f,p),this.h?this.h.next=m:this.g=m,this.h=m}}var z=new C(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,le=!1,I=new x,v=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(_)}};function _(){for(var a;a=$();){try{a.h.call(a.g)}catch(p){V(p)}var f=z;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}le=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function J(a,f){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}d(J,b),J.prototype.init=function(a,f){const p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&J.Z.h.call(this)},J.prototype.h=function(){J.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(Math.random()*1e6|0),K=0;function se(a,f,p,m,k){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!m,this.ha=k,this.key=++K,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lt(a,f,p){for(const m in a)f.call(p,a[m],m,a)}function pn(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function Ut(a){const f={};for(const p in a)f[p]=a[p];return f}const pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(a,f){let p,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(p in m)a[p]=m[p];for(let D=0;D<pt.length;D++)p=pt[D],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function tn(a){this.src=a,this.g={},this.h=0}tn.prototype.add=function(a,f,p,m,k){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const Q=Tt(a,f,m,k);return Q>-1?(f=a[Q],p||(f.fa=!1)):(f=new se(f,this.src,D,!!m,k),f.fa=p,a.push(f)),f};function nn(a,f){const p=f.type;if(p in a.g){var m=a.g[p],k=Array.prototype.indexOf.call(m,f,void 0),D;(D=k>=0)&&Array.prototype.splice.call(m,k,1),D&&(ye(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Tt(a,f,p,m){for(let k=0;k<a.length;++k){const D=a[k];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==m)return k}return-1}var U="closure_lm_"+(Math.random()*1e6|0),re={};function ee(a,f,p,m,k){if(Array.isArray(f)){for(let D=0;D<f.length;D++)ee(a,f[D],p,m,k);return null}return p=X(p),a&&a[N]?a.J(f,p,c(m)?!!m.capture:!1,k):oe(a,f,p,!1,m,k)}function oe(a,f,p,m,k,D){if(!f)throw Error("Invalid event type");const Q=c(k)?!!k.capture:!!k;let ve=j(a);if(ve||(a[U]=ve=new tn(a)),p=ve.add(f,p,m,Q,D),p.proxy)return p;if(m=we(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)w||(k=Q),k===void 0&&(k=!1),a.addEventListener(f.toString(),m,k);else if(a.attachEvent)a.attachEvent(P(f.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function we(){function a(p){return f.call(a.src,a.listener,p)}const f=M;return a}function T(a,f,p,m,k){if(Array.isArray(f))for(var D=0;D<f.length;D++)T(a,f[D],p,m,k);else m=c(m)?!!m.capture:!!m,p=X(p),a&&a[N]?(a=a.i,D=String(f).toString(),D in a.g&&(f=a.g[D],p=Tt(f,p,m,k),p>-1&&(ye(f[p]),Array.prototype.splice.call(f,p,1),f.length==0&&(delete a.g[D],a.h--)))):a&&(a=j(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Tt(f,p,m,k)),(p=a>-1?f[a]:null)&&S(p))}function S(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[N])nn(f.i,a);else{var p=a.type,m=a.proxy;f.removeEventListener?f.removeEventListener(p,m,a.capture):f.detachEvent?f.detachEvent(P(p),m):f.addListener&&f.removeListener&&f.removeListener(m),(p=j(f))?(nn(p,a),p.h==0&&(p.src=null,f[U]=null)):ye(a)}}}function P(a){return a in re?re[a]:re[a]="on"+a}function M(a,f){if(a.da)a=!0;else{f=new J(f,this);const p=a.listener,m=a.ha||a.src;a.fa&&S(a),a=p.call(m,f)}return a}function j(a){return a=a[U],a instanceof tn?a:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function X(a){return typeof a=="function"?a:(a[L]||(a[L]=function(f){return a.handleEvent(f)}),a[L])}function W(){A.call(this),this.i=new tn(this),this.M=this,this.G=null}d(W,A),W.prototype[N]=!0,W.prototype.removeEventListener=function(a,f,p,m){T(this,a,f,p,m)};function G(a,f){var p,m=a.G;if(m)for(p=[];m;m=m.G)p.push(m);if(a=a.M,m=f.type||f,typeof f=="string")f=new b(f,a);else if(f instanceof b)f.target=f.target||a;else{var k=f;f=new b(m,a),Mn(f,k)}k=!0;let D,Q;if(p)for(Q=p.length-1;Q>=0;Q--)D=f.g=p[Q],k=q(D,m,!0,f)&&k;if(D=f.g=a,k=q(D,m,!0,f)&&k,k=q(D,m,!1,f)&&k,p)for(Q=0;Q<p.length;Q++)D=f.g=p[Q],k=q(D,m,!1,f)&&k}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const p=a.g[f];for(let m=0;m<p.length;m++)ye(p[m]);delete a.g[f],a.h--}}this.G=null},W.prototype.J=function(a,f,p,m){return this.i.add(String(a),f,!1,p,m)},W.prototype.K=function(a,f,p,m){return this.i.add(String(a),f,!0,p,m)};function q(a,f,p,m){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let k=!0;for(let D=0;D<f.length;++D){const Q=f[D];if(Q&&!Q.da&&Q.capture==p){const ve=Q.listener,st=Q.ha||Q.src;Q.fa&&nn(a.i,Q),k=ve.call(st,m)!==!1&&k}}return k&&!m.defaultPrevented}function ue(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function ne(a){a.g=ue(()=>{a.g=null,a.i&&(a.i=!1,ne(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class ae extends A{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(a){A.call(this),this.h=a,this.g={}}d(he,A);var Ae=[];function ke(a){Lt(a.g,function(f,p){this.g.hasOwnProperty(p)&&S(f)},a),a.g={}}he.prototype.N=function(){he.Z.N.call(this),ke(this)},he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ce=o.JSON.stringify,Ge=o.JSON.parse,rt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bt(){}function jt(){}var rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){b.call(this,"d")}d(vs,b);function gt(){b.call(this,"c")}d(gt,b);var ut={},oi=null;function jr(){return oi=oi||new W}ut.Ia="serverreachability";function Mh(a){b.call(this,ut.Ia,a)}d(Mh,b);function ai(a){const f=jr();G(f,new Mh(f))}ut.STAT_EVENT="statevent";function Fh(a,f){b.call(this,ut.STAT_EVENT,a),this.stat=f}d(Fh,b);function kt(a){const f=jr();G(f,new Fh(f,a))}ut.Ja="timingevent";function Uh(a,f){b.call(this,ut.Ja,a),this.size=f}d(Uh,b);function ci(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function li(){this.g=!0}li.prototype.ua=function(){this.g=!1};function Sv(a,f,p,m,k,D){a.info(function(){if(a.g)if(D){var Q="",ve=D.split("&");for(let xe=0;xe<ve.length;xe++){var st=ve[xe].split("=");if(st.length>1){const ht=st[0];st=st[1];const mn=ht.split("_");Q=mn.length>=2&&mn[1]=="type"?Q+(ht+"="+st+"&"):Q+(ht+"=redacted&")}}}else Q=null;else Q=D;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+f+`
`+p+`
`+Q})}function Rv(a,f,p,m,k,D,Q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+f+`
`+p+`
`+D+" "+Q})}function Es(a,f,p,m){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Pv(a,p)+(m?" "+m:"")})}function Cv(a,f){a.info(function(){return"TIMEOUT: "+f})}li.prototype.info=function(){};function Pv(a,f){if(!a.g)return f;if(!f)return null;try{const D=JSON.parse(f);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var m=p[1];if(Array.isArray(m)&&!(m.length<1)){var k=m[0];if(k!="noop"&&k!="stop"&&k!="close")for(let Q=1;Q<m.length;Q++)m[Q]=""}}}}return Ce(D)}catch{return f}}var Fo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},jh;function $c(){}d($c,Bt),$c.prototype.g=function(){return new XMLHttpRequest},jh=new $c;function ui(a){return encodeURIComponent(String(a))}function kv(a){var f=1;a=a.split(":");const p=[];for(;f>0&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function ar(a,f,p,m){this.j=a,this.i=f,this.l=p,this.S=m||1,this.V=new he(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $h}function $h(){this.i=null,this.g="",this.h=!1}var qh={},qc={};function Hc(a,f,p){a.M=1,a.A=Bo(gn(f)),a.u=p,a.R=!0,Hh(a,null)}function Hh(a,f){a.F=Date.now(),Uo(a),a.B=gn(a.A);var p=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),rf(p.i,"t",m),a.C=0,p=a.j.L,a.h=new $h,a.g=If(a.j,p?f:null,!a.u),a.P>0&&(a.O=new ae(u(a.Y,a,a.g),a.P)),f=a.V,p=a.g,m=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(Ae[0]=k.toString()),k=Ae);for(let D=0;D<k.length;D++){const Q=ee(p,k[D],m||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=a.J?Ut(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),ai(),Sv(a.i,a.v,a.B,a.l,a.S,a.u)}ar.prototype.ba=function(a){a=a.target;const f=this.O;f&&ur(a)==3?f.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ve=ur(this.g),st=this.g.ya(),xe=this.g.ca();if(!(ve<3)&&(ve!=3||this.g&&(this.h.h||this.g.la()||hf(this.g)))){this.K||ve!=4||st==7||(st==8||xe<=0?ai(3):ai(2)),Gc(this);var f=this.g.ca();this.X=f;var p=Vv(this);if(this.o=f==200,Rv(this.i,this.v,this.B,this.l,this.S,ve,f),this.o){if(this.U&&!this.L){t:{if(this.g){var m,k=this.g;if((m=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var D=m;break t}}D=null}if(a=D)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wc(this,a);else{this.o=!1,this.m=3,kt(12),$r(this),hi(this);break e}}if(this.R){a=!0;let ht;for(;!this.K&&this.C<p.length;)if(ht=Nv(this,p),ht==qc){ve==4&&(this.m=4,kt(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==qh){this.m=4,kt(15),Es(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,ht,null),Wc(this,ht);if(Gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||p.length!=0||this.h.h||(this.m=1,kt(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,p,"[Invalid Chunked Response]"),$r(this),hi(this);else if(p.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),el(Q),Q.P=!0,kt(11))}}else Es(this.i,this.l,p,null),Wc(this,p);ve==4&&$r(this),this.o&&!this.K&&(ve==4?yf(this.j,this):(this.o=!1,Uo(this)))}else Wv(this.g),f==400&&p.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),$r(this),hi(this)}}}catch{}finally{}};function Vv(a){if(!Gh(a))return a.g.la();const f=hf(a.g);if(f==="")return"";let p="";const m=f.length,k=ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $r(a),hi(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<m;D++)a.h.h=!0,p+=a.h.i.decode(f[D],{stream:!(k&&D==m-1)});return f.length=0,a.h.g+=p,a.C=0,a.h.g}function Gh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Nv(a,f){var p=a.C,m=f.indexOf(`
`,p);return m==-1?qc:(p=Number(f.substring(p,m)),isNaN(p)?qh:(m+=1,m+p>f.length?qc:(f=f.slice(m,m+p),a.C=m+p,f)))}ar.prototype.cancel=function(){this.K=!0,$r(this)};function Uo(a){a.T=Date.now()+a.H,Wh(a,a.H)}function Wh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ci(u(a.aa,a),f)}function Gc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ar.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Cv(this.i,this.B),this.M!=2&&(ai(),kt(17)),$r(this),this.m=2,hi(this)):Wh(this,this.T-a)};function hi(a){a.j.I==0||a.K||yf(a.j,a)}function $r(a){Gc(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,ke(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function Wc(a,f){try{var p=a.j;if(p.I!=0&&(p.g==a||zc(p.h,a))){if(!a.L&&zc(p.h,a)&&p.I==3){try{var m=p.Ba.g.parse(f)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Go(p),qo(p);else break e;Zc(p),kt(18)}}else p.xa=k[1],0<p.xa-p.K&&k[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ci(u(p.Va,p),6e3));Qh(p.h)<=1&&p.ta&&(p.ta=void 0)}else Hr(p,11)}else if((a.L||p.g==a)&&Go(p),!E(f))for(k=p.Ba.g.parse(f),f=0;f<k.length;f++){let xe=k[f];const ht=xe[0];if(!(ht<=p.K))if(p.K=ht,xe=xe[1],p.I==2)if(xe[0]=="c"){p.M=xe[1],p.ba=xe[2];const mn=xe[3];mn!=null&&(p.ka=mn,p.j.info("VER="+p.ka));const Gr=xe[4];Gr!=null&&(p.za=Gr,p.j.info("SVER="+p.za));const hr=xe[5];hr!=null&&typeof hr=="number"&&hr>0&&(m=1.5*hr,p.O=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const fr=a.g;if(fr){const zo=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var D=m.h;D.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Kc(D,D.h),D.h=null))}if(m.G){const tl=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(m.wa=tl,Be(m.J,m.G,tl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),m=p;var Q=a;if(m.na=Tf(m,m.L?m.ba:null,m.W),Q.L){Jh(m.h,Q);var ve=Q,st=m.O;st&&(ve.H=st),ve.D&&(Gc(ve),Uo(ve)),m.g=Q}else mf(m);p.i.length>0&&Ho(p)}else xe[0]!="stop"&&xe[0]!="close"||Hr(p,7);else p.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Hr(p,7):Xc(p):xe[0]!="noop"&&p.l&&p.l.qa(xe),p.A=0)}}ai(4)}catch{}}var Dv=class{constructor(a,f){this.g=a,this.map=f}};function zh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qh(a){return a.h?1:a.g?a.g.size:0}function zc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Kc(a,f){a.g?a.g.add(f):a.h=f}function Jh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}zh.prototype.cancel=function(){if(this.i=Yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.G);return f}return y(a.i)}var Xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ov(a,f){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const m=a[p].indexOf("=");let k,D=null;m>=0?(k=a[p].substring(0,m),D=a[p].substring(m+1)):k=a[p],f(k,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function cr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof cr?(this.l=a.l,fi(this,a.j),this.o=a.o,this.g=a.g,di(this,a.u),this.h=a.h,Qc(this,sf(a.i)),this.m=a.m):a&&(f=String(a).match(Xh))?(this.l=!1,fi(this,f[1]||"",!0),this.o=pi(f[2]||""),this.g=pi(f[3]||"",!0),di(this,f[4]),this.h=pi(f[5]||"",!0),Qc(this,f[6]||"",!0),this.m=pi(f[7]||"")):(this.l=!1,this.i=new mi(null,this.l))}cr.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(gi(f,Zh,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(gi(f,Zh,!0),"@"),a.push(ui(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(gi(p,p.charAt(0)=="/"?Mv:Lv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",gi(p,Uv)),a.join("")},cr.prototype.resolve=function(a){const f=gn(this);let p=!!a.j;p?fi(f,a.j):p=!!a.o,p?f.o=a.o:p=!!a.g,p?f.g=a.g:p=a.u!=null;var m=a.h;if(p)di(f,a.u);else if(p=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var k=f.h.lastIndexOf("/");k!=-1&&(m=f.h.slice(0,k+1)+m)}if(k=m,k==".."||k==".")m="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){m=k.lastIndexOf("/",0)==0,k=k.split("/");const D=[];for(let Q=0;Q<k.length;){const ve=k[Q++];ve=="."?m&&Q==k.length&&D.push(""):ve==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&Q==k.length&&D.push("")):(D.push(ve),m=!0)}m=D.join("/")}else m=k}return p?f.h=m:p=a.i.toString()!=="",p?Qc(f,sf(a.i)):p=!!a.m,p&&(f.m=a.m),f};function gn(a){return new cr(a)}function fi(a,f,p){a.j=p?pi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function di(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Qc(a,f,p){f instanceof mi?(a.i=f,Bv(a.i,a.l)):(p||(f=gi(f,Fv)),a.i=new mi(f,a.l))}function Be(a,f,p){a.i.set(f,p)}function Bo(a){return Be(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function pi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,xv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zh=/[#\/\?@]/g,Lv=/[#\?:]/g,Mv=/[#\?]/g,Fv=/[#\?@]/g,Uv=/#/g;function mi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&Ov(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=mi.prototype,t.add=function(a,f){qr(this),this.i=null,a=Ts(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function ef(a,f){qr(a),f=Ts(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function tf(a,f){return qr(a),f=Ts(a,f),a.g.has(f)}t.forEach=function(a,f){qr(this),this.g.forEach(function(p,m){p.forEach(function(k){a.call(f,k,m,this)},this)},this)};function nf(a,f){qr(a);let p=[];if(typeof f=="string")tf(a,f)&&(p=p.concat(a.g.get(Ts(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)p=p.concat(a[f]);return p}t.set=function(a,f){return qr(this),this.i=null,a=Ts(this,a),tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=nf(this,a),a.length>0?String(a[0]):f):f};function rf(a,f,p){ef(a,f),p.length>0&&(a.i=null,a.g.set(Ts(a,f),y(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let m=0;m<f.length;m++){var p=f[m];const k=ui(p);p=nf(this,p);for(let D=0;D<p.length;D++){let Q=k;p[D]!==""&&(Q+="="+ui(p[D])),a.push(Q)}}return this.i=a.join("&")};function sf(a){const f=new mi;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Ts(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Bv(a,f){f&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(p,m){const k=m.toLowerCase();m!=k&&(ef(this,m),rf(this,k,p))},a)),a.j=f}function jv(a,f){const p=new li;if(o.Image){const m=new Image;m.onload=h(lr,p,"TestLoadImage: loaded",!0,f,m),m.onerror=h(lr,p,"TestLoadImage: error",!1,f,m),m.onabort=h(lr,p,"TestLoadImage: abort",!1,f,m),m.ontimeout=h(lr,p,"TestLoadImage: timeout",!1,f,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else f(!1)}function $v(a,f){const p=new li,m=new AbortController,k=setTimeout(()=>{m.abort(),lr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(k),D.ok?lr(p,"TestPingServer: ok",!0,f):lr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),lr(p,"TestPingServer: error",!1,f)})}function lr(a,f,p,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(p)}catch{}}function qv(){this.g=new rt}function Jc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(Jc,Bt),Jc.prototype.g=function(){return new jo(this.i,this.h)};function jo(a,f){W.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(jo,W),t=jo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;of(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function of(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?_i(this):yi(this),this.readyState==3&&of(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,_i(this))},t.Na=function(a){this.g&&(this.response=a,_i(this))},t.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.B=null,yi(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function af(a){let f="";return Lt(a,function(p,m){f+=m,f+=":",f+=p,f+=`\r
`}),f}function Yc(a,f,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=af(p),typeof a=="string"?p!=null&&ui(p):Be(a,f,p))}function We(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(We,W);var Hv=/^https?$/i,Gv=["POST","PUT"];t=We.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():jh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){cf(this,D);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)p.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())p.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Gv,f,void 0)>=0)||m||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Q]of p)this.g.setRequestHeader(D,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){cf(this,D)}};function cf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,lf(a),$o(a)}function lf(a){a.A||(a.A=!0,G(a,"complete"),G(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,G(this,"complete"),G(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),We.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?uf(this):this.Xa())},t.Xa=function(){uf(this)};function uf(a){if(a.h&&typeof i<"u"){if(a.v&&ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(G(a,"readystatechange"),ur(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var m;if(m=D===0){let Q=String(a.D).match(Xh)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),m=!Hv.test(Q?Q.toLowerCase():"")}p=m}if(p)G(a,"complete"),G(a,"success");else{a.o=6;try{var k=ur(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",lf(a)}}finally{$o(a)}}}}function $o(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,f||G(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ge(f)}};function hf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wv(a){const f={};a=(a.g&&ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var p=kv(a[m]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[k]||[];f[k]=D,D.push(p)}pn(f,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function ff(a){this.za=0,this.i=[],this.j=new li,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,a),this.Za=vi("retryDelaySeedMs",1e4,a),this.Ta=vi("forwardChannelMaxRetries",2,a),this.va=vi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new zh(a&&a.concurrentRequestLimit),this.Ba=new qv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ff.prototype,t.ka=8,t.I=1,t.connect=function(a,f,p,m){kt(0),this.W=a,this.H=f||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.J=Tf(this,null,this.W),Ho(this)};function Xc(a){if(df(a),a.I==3){var f=a.V++,p=gn(a.J);if(Be(p,"SID",a.M),Be(p,"RID",f),Be(p,"TYPE","terminate"),Ei(a,p),f=new ar(a,a.j,f),f.M=2,f.A=Bo(gn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.A,p=!0),p||(f.g=If(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Uo(f)}Ef(a)}function qo(a){a.g&&(el(a),a.g.cancel(),a.g=null)}function df(a){qo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Go(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ho(a){if(!Kh(a.h)&&!a.m){a.m=!0;var f=a.Ea;Y||v(),le||(Y(),le=!0),I.add(f,a),a.D=0}}function zv(a,f){return Qh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ci(u(a.Ea,a,f),vf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new ar(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Ut(D),Mn(D,this.U)):D=this.U),this.u!==null||this.R||(k.J=D,D=null),this.S)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(f+=m,f>4096){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=gf(this,k,f),p=gn(this.J),Be(p,"RID",a),Be(p,"CVER",22),this.G&&Be(p,"X-HTTP-Session-Id",this.G),Ei(this,p),D&&(this.R?f="headers="+ui(af(D))+"&"+f:this.u&&Yc(p,this.u,D)),Kc(this.h,k),this.Ra&&Be(p,"TYPE","init"),this.S?(Be(p,"$req",f),Be(p,"SID","null"),k.U=!0,Hc(k,p,null)):Hc(k,p,f),this.I=2}}else this.I==3&&(a?pf(this,a):this.i.length==0||Kh(this.h)||pf(this))};function pf(a,f){var p;f?p=f.l:p=a.V++;const m=gn(a.J);Be(m,"SID",a.M),Be(m,"RID",p),Be(m,"AID",a.K),Ei(a,m),a.u&&a.o&&Yc(m,a.u,a.o),p=new ar(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),f&&(a.i=f.G.concat(a.i)),f=gf(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Kc(a.h,p),Hc(p,m,f)}function Ei(a,f){a.H&&Lt(a.H,function(p,m){Be(f,m,p)}),a.l&&Lt({},function(p,m){Be(f,m,p)})}function gf(a,f,p){p=Math.min(a.i.length,p);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let ve=-1;for(;;){const st=["count="+p];ve==-1?p>0?(ve=k[0].g,st.push("ofs="+ve)):ve=0:st.push("ofs="+ve);let xe=!0;for(let ht=0;ht<p;ht++){var D=k[ht].g;const mn=k[ht].map;if(D-=ve,D<0)ve=Math.max(0,k[ht].g-100),xe=!1;else try{D="req"+D+"_"||"";try{var Q=mn instanceof Map?mn:Object.entries(mn);for(const[Gr,hr]of Q){let fr=hr;c(hr)&&(fr=Ce(hr)),st.push(D+Gr+"="+encodeURIComponent(fr))}}catch(Gr){throw st.push(D+"type="+encodeURIComponent("_badmap")),Gr}}catch{m&&m(mn)}}if(xe){Q=st.join("&");break e}}Q=void 0}return a=a.i.splice(0,p),f.G=a,Q}function mf(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;Y||v(),le||(Y(),le=!0),I.add(f,a),a.A=0}}function Zc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ci(u(a.Da,a),vf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_f(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ci(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),qo(this),_f(this))};function el(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _f(a){a.g=new ar(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=gn(a.na);Be(f,"RID","rpc"),Be(f,"SID",a.M),Be(f,"AID",a.K),Be(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&Be(f,"TO",a.ia),Be(f,"TYPE","xmlhttp"),Ei(a,f),a.u&&a.o&&Yc(f,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Bo(gn(f)),p.u=null,p.R=!0,Hh(p,a)}t.Va=function(){this.C!=null&&(this.C=null,qo(this),Zc(this),kt(19))};function Go(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function yf(a,f){var p=null;if(a.g==f){Go(a),el(a),a.g=null;var m=2}else if(zc(a.h,f))p=f.G,Jh(a.h,f),m=1;else return;if(a.I!=0){if(f.o)if(m==1){p=f.u?f.u.length:0,f=Date.now()-f.F;var k=a.D;m=jr(),G(m,new Uh(m,p)),Ho(a)}else mf(a);else if(k=f.m,k==3||k==0&&f.X>0||!(m==1&&zv(a,f)||m==2&&Zc(a)))switch(p&&p.length>0&&(f=a.h,f.i=f.i.concat(p)),k){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function vf(a,f){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*f}function Hr(a,f){if(a.j.info("Error code "+f),f==2){var p=u(a.bb,a),m=a.Ua;const k=!m;m=new cr(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||fi(m,"https"),Bo(m),k?jv(m.toString(),p):$v(m.toString(),p)}else kt(2);a.I=0,a.l&&a.l.pa(f),Ef(a),df(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Ef(a){if(a.I=0,a.ja=[],a.l){const f=Yh(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ja,f),R(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Tf(a,f,p){var m=p instanceof cr?gn(p):new cr(p);if(m.g!="")f&&(m.g=f+"."+m.g),di(m,m.u);else{var k=o.location;m=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;const D=new cr(null);m&&fi(D,m),f&&(D.g=f),k&&di(D,k),p&&(D.h=p),m=D}return p=a.G,f=a.wa,p&&f&&Be(m,p,f),Be(m,"VER",a.ka),Ei(a,m),m}function If(a,f,p){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new We(new Jc({ab:p})):new We(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wf(){}t=wf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Wo(){}Wo.prototype.g=function(a,f){return new $t(a,f)};function $t(a,f){W.call(this),this.g=new ff(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Is(this)}d($t,W),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Xc(this.g)},$t.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Ce(a),a=p);f.i.push(new Dv(f.Ya++,a)),f.I==3&&Ho(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Xc(this.g),delete this.g,$t.Z.N.call(this)};function Af(a){vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}d(Af,vs);function bf(){gt.call(this),this.status=1}d(bf,gt);function Is(a){this.g=a}d(Is,wf),Is.prototype.ra=function(){G(this.g,"a")},Is.prototype.qa=function(a){G(this.g,new Af(a))},Is.prototype.pa=function(a){G(this.g,new bf)},Is.prototype.oa=function(){G(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Ym=function(){return new Wo},Jm=function(){return jr()},Qm=ut,Yl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,ha=Fo,Bh.COMPLETE="complete",Km=Bh,jt.EventType=rn,rn.OPEN="a",rn.CLOSE="b",rn.ERROR="c",rn.MESSAGE="d",W.prototype.listen=W.prototype.J,Di=jt,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,zm=We}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let ei="12.14.0";function mA(t){ei=t}/**
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
 */const us=new Lu("@firebase/firestore");function Ss(){return us.logLevel}function Z(t,...e){if(us.logLevel<=be.DEBUG){const n=e.map(Uu);us.debug(`Firestore (${ei}): ${t}`,...n)}}function tr(t,...e){if(us.logLevel<=be.ERROR){const n=e.map(Uu);us.error(`Firestore (${ei}): ${t}`,...n)}}function hs(t,...e){if(us.logLevel<=be.WARN){const n=e.map(Uu);us.warn(`Firestore (${ei}): ${t}`,...n)}}function Uu(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Xm(t,r,n)}function Xm(t,e,n){let r=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Xm(e,s,r)}function _e(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class EA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class TA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new EA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Xl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return vl(s)===vl(i)?Te(s,i):vl(s)?1:-1}return Te(t.length,e.length)}const AA=55296,bA=57343;function vl(t){const e=t.charCodeAt(0);return e>=AA&&e<=bA}function Gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Cd="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),s=vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?vn.extractNumericId(e).compare(vn.extractNumericId(n)):Xl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cr.fromString(e.substring(4,e.length-2))}}class Ue extends vn{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const SA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends vn{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return SA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cd}static keyField(){return new _t([Cd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ue.fromString(e))}static fromName(e){return new ce(Ue.fromString(e).popFirst(5))}static empty(){return new ce(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ue(e.slice()))}}/**
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
 */function e_(t,e,n){if(!n)throw new te(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RA(t,e,n,r){if(e===!0&&r===!0)throw new te(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pd(t){if(!ce.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kd(t){if(ce.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function t_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(t);throw new te(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ro(t,e){if(!t_(t))throw new te(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const Vd=-62135596800,Nd=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nd);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vd)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nd}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ro(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:tt("string",je._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new je(0,0))}static max(){return new ge(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ao=-1;function CA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Vr(s,ce.empty(),e)}function PA(t){return new Vr(t.readTime,t.key,ao)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(ge.min(),ce.empty(),ao)}static max(){return new Vr(ge.max(),ce.empty(),ao)}}function kA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const VA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ti(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==VA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function DA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ni(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ec.ce=-1;/**
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
 */const ju=-1;function Tc(t){return t==null}function xa(t){return t===0&&1/t==-1/0}function OA(t){return typeof t=="number"&&Number.isInteger(t)&&!xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const n_="";function xA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dd(e)),e=LA(t.get(n),e);return Dd(e)}function LA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case n_:n+="";break;default:n+=i}}return n}function Dd(t){return t+n_+""}/**
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
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function r_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new at(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class s_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new s_("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const MA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=MA.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */const i_="server_timestamp",o_="__type__",a_="__previous_value__",c_="__local_write_time__";function $u(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[o_])==null?void 0:r.stringValue)===i_}function Ic(t){const e=t.mapValue.fields[a_];return $u(e)?Ic(e):e}function co(t){const e=Nr(t.mapValue.fields[c_].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class FA{constructor(e,n,r,s,i,o,c,l,u,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const La="(default)";class lo{constructor(e,n){this.projectId=e,this.database=n||La}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database===La}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}function UA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new te(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(t.options.projectId,e)}/**
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
 */const l_="__type__",BA="__max__",ea={mapValue:{}},u_="__vector__",Ma="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$u(t)?4:$A(t)?9007199254740991:jA(t)?10:11:de(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),c=Nr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),c=Qe(i.doubleValue);return o===c?xa(o)===xa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Od(o)!==Od(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function uo(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Qe(i.integerValue||i.doubleValue),l=Qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(co(t),co(e));case 5:return Xl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Dr(i),l=Dr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Te(c[u],l[u]);if(h!==0)return h}return Te(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Te(Qe(i.latitude),Qe(o.latitude));return c!==0?c:Te(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Md(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,y,R,C;const c=i.fields||{},l=o.fields||{},u=(g=c[Ma])==null?void 0:g.arrayValue,h=(y=l[Ma])==null?void 0:y.arrayValue,d=Te(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((C=h==null?void 0:h.values)==null?void 0:C.length)||0);return d!==0?d:Md(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ea.mapValue&&o===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(o===ea.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const g=Xl(l[d],h[d]);if(g!==0)return g;const y=Ws(c[l[d]],u[h[d]]);if(y!==0)return y}return Te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw de(23264,{he:n})}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Nr(t),r=Nr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function zs(t){return Zl(t)}function Zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zl(n.fields[o])}`;return s+"}"}(t.mapValue):de(61005,{value:t})}function fa(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ic(t);return e?16+fa(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Fr(r.fields,(i,o)=>{s+=i.length+fa(o)}),s}(t.mapValue);default:throw de(13486,{value:t})}}function Fd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ho(t){return!!t&&"integerValue"in t}function h_(t){return ho(t)||function(n){return!!n&&"doubleValue"in n}(t)}function qu(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function jA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[l_])==null?void 0:r.stringValue)===u_}function Gi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gi(t.arrayValue.values[n]);return e}return{...t}}function $A(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BA}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Gi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Gi(this.value))}}function f_(t){const e=[];return Fr(t.fields,(n,r)=>{const s=new _t([n]);if(da(r)){const i=f_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class St{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new St(e,0,ge.min(),ge.min(),ge.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,ge.min(),ge.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,ge.min(),ge.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fa{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function qA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class d_{}class Ze extends d_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GA(e,n,r):n==="array-contains"?new KA(e,r):n==="in"?new QA(e,r):n==="not-in"?new JA(e,r):n==="array-contains-any"?new YA(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WA(e,r):new zA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ws(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends d_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return p_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function p_(t){return t.op==="and"}function g_(t){return HA(t)&&p_(t)}function HA(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function eu(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(g_(t))return t.filters.map(e=>eu(e)).join(",");{const e=t.filters.map(n=>eu(n)).join(",");return`${t.op}(${e})`}}function m_(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&m_(o,s.filters[c]),!0):!1}(t,e):void de(19439)}function __(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${zs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(__).join(" ,")+"}"}(t):"Filter"}class GA extends Ze{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class WA extends Ze{constructor(e,n){super(e,"in",n),this.keys=y_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zA extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=y_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function y_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class KA extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&uo(n.arrayValue,this.value)}}class QA extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class JA extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!uo(this.value.arrayValue,n)}}class YA extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
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
 */class XA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new XA(t,e,n,r,s,i,o)}function Hu(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>eu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.Te=n}return e.Te}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!m_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$d(t.startAt,e.startAt)&&$d(t.endAt,e.endAt)}function tu(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ri{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ZA(t,e,n,r,s,i,o,c){return new ri(t,e,n,r,s,i,o,c)}function Wu(t){return new ri(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eb(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function v_(t){return t.collectionGroup!==null}function Wi(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new fo(i,r))}),n.has(_t.keyField().canonicalString())||e.Ie.push(new fo(_t.keyField(),r))}return e.Ie}function An(t){const e=_e(t);return e.Ee||(e.Ee=tb(e,Wi(t))),e.Ee}function tb(t,e){if(t.limitType==="F")return qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fo(s.field,i)});const n=t.endAt?new Fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fa(t.startAt.position,t.startAt.inclusive):null;return qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nu(t,e){const n=t.filters.concat([e]);return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nb(t,e){const n=t.explicitOrderBy.concat([e]);return new ri(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ua(t,e,n){return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wc(t,e){return Gu(An(t),An(e))&&t.limitType===e.limitType}function E_(t){return`${Hu(An(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>__(s)).join(", ")}]`),Tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>zs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>zs(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=jd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Wi(r),s)||r.endAt&&!function(o,c,l){const u=jd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Wi(r),s))}(t,e)}function rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function T_(t){return(e,n)=>{let r=!1;for(const s of Wi(t)){const i=sb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sb(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ws(l,u):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return r_(this.inner)}size(){return this.innerSize}}/**
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
 */const ib=new qe(ce.comparator);function nr(){return ib}const I_=new qe(ce.comparator);function Oi(...t){let e=I_;for(const n of t)e=e.insert(n.key,n);return e}function w_(t){let e=I_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ts(){return zi()}function A_(){return zi()}function zi(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const ob=new qe(ce.comparator),ab=new at(ce.comparator);function Ie(...t){let e=ab;for(const n of t)e=e.add(n);return e}const cb=new at(Te);function lb(){return cb}/**
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
 */function bc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(e)?"-0":e}}function zu(t){return{integerValue:""+t}}function ub(t,e){return OA(e)?zu(e):bc(t,e)}/**
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
 */class Sc{constructor(){this._=void 0}}function hb(t,e,n){return t instanceof po?function(s,i){const o={fields:{[o_]:{stringValue:i_},[c_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$u(i)&&(i=Ic(i)),i&&(o.fields[a_]=i),{mapValue:o}}(n,e):t instanceof go?S_(t,e):t instanceof mo?R_(t,e):t instanceof _o?function(s,i){const o=b_(s,i),c=$a(o)+$a(s.Ae);return ho(o)&&ho(s.Ae)?zu(c):bc(s.serializer,c)}(t,e):t instanceof Ba?function(s,i){return Gd(s,i,Math.min)}(t,e):t instanceof ja?function(s,i){return Gd(s,i,Math.max)}(t,e):void 0}function fb(t,e,n){return t instanceof go?S_(t,e):t instanceof mo?R_(t,e):n}function b_(t,e){return t instanceof _o?h_(e)?e:{integerValue:0}:null}class po extends Sc{}class go extends Sc{constructor(e){super(),this.elements=e}}function S_(t,e){const n=C_(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends Sc{constructor(e){super(),this.elements=e}}function R_(t,e){let n=C_(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class Ku extends Sc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class _o extends Ku{}class Ba extends Ku{}class ja extends Ku{}function Gd(t,e,n){if(!h_(e))return t.Ae;const r=n($a(e),$a(t.Ae));return ho(e)&&ho(t.Ae)?zu(r):bc(t.serializer,r)}function $a(t){return Qe(t.integerValue||t.doubleValue)}function C_(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class db{constructor(e,n){this.field=e,this.transform=n}}function pb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof go&&s instanceof go||r instanceof mo&&s instanceof mo?Gs(r.elements,s.elements,Cn):r instanceof _o&&s instanceof _o||r instanceof Ba&&s instanceof Ba||r instanceof ja&&s instanceof ja?Cn(r.Ae,s.Ae):r instanceof po&&s instanceof po}(t.transform,e.transform)}class gb{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function P_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qu(t.key,Zt.none()):new Co(t.key,t.data,Zt.none());{const n=t.data,r=Ft.empty();let s=new at(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ur(t.key,r,new Gt(s.toArray()),Zt.none())}}function mb(t,e,n){t instanceof Co?function(s,i,o){const c=s.value.clone(),l=zd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,i,o){if(!pa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=zd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(k_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ki(t,e,n,r){return t instanceof Co?function(i,o,c,l){if(!pa(i.precondition,o))return c;const u=i.value.clone(),h=Kd(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,o,c,l){if(!pa(i.precondition,o))return c;const u=Kd(i.fieldTransforms,l,o),h=o.data;return h.setAll(k_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return pa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function _b(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=b_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gs(r,s,(i,o)=>pb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends Rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function k_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zd(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,fb(o,c,n[s]))}return r}function Kd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hb(i,o,e))}return r}class Qu extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yb extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=P_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>Wd(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>Wd(n,r))}}class Ju{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return ob}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ju(e,n,r,s)}}/**
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
 */class Eb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Tb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Se;function Ib(t){switch(t){case F.OK:return de(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function V_(t){if(t===void 0)return tr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Xe.OK:return F.OK;case Xe.CANCELLED:return F.CANCELLED;case Xe.UNKNOWN:return F.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return F.INTERNAL;case Xe.UNAVAILABLE:return F.UNAVAILABLE;case Xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Xe.NOT_FOUND:return F.NOT_FOUND;case Xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Xe.ABORTED:return F.ABORTED;case Xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Xe.DATA_LOSS:return F.DATA_LOSS;default:return de(39323,{code:t})}}(Se=Xe||(Xe={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wb(){return new TextEncoder}/**
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
 */const Ab=new Cr([4294967295,4294967295],0);function Qd(t){const e=wb().encode(t),n=new Wm;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([s,i],0)]}class Yu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xi(`Invalid padding: ${n}`);if(r<0)throw new xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Cr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Cr.fromNumber(r)));return s.compare(Ab)===1&&(s=new Cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Po{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Po(ge.min(),s,new qe(Te),nr(),Ie())}}class ko{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ko(r,n,Ie(),Ie(),Ie())}}/**
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
 */class ga{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class N_{constructor(e,n){this.targetId=e,this.Ce=n}}class D_{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yd{constructor(e){this.targetId=e,this.ve=0,this.Fe=Xd(),this.Me=Et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de(38017,{changeType:i})}}),new ko(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Xd()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Ai="WatchChangeAggregator";class bb{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=ta(),this.He=ta(),this.Ze=new qe(Te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:de(56790,{state:e.state})}else Z(Ai,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.Ce.count,s=this.st(n);if(s){const i=s.target;if(tu(i))if(r===0){const o=new ce(i.path);this.et(n,o,St.newNoDocument(o,ge.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Dr(r).toUint8Array()}catch(l){if(l instanceof s_)return hs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Yu(o,s,i)}catch(l){return hs(l instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Pt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.st(o);if(c){if(i.current&&tu(c.target)){const l=new ce(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.et(o,l,St.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Po(e,n,this.Ze,this.je,r);return this.je=nr(),this.Je=ta(),this.He=ta(),this.Ze=new qe(Te),s}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void Z(Ai,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,n.key)?2:0;r.Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):Z(Ai,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||(Z(Ai,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new Yd(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new at(Te),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new at(Te),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Z(Ai,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Yd(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ta(){return new qe(ce.comparator)}function Xd(){return new qe(ce.comparator)}const Sb={asc:"ASCENDING",desc:"DESCENDING"},Rb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cb={and:"AND",or:"OR"};class Pb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ru(t,e){return t.useProto3Json||Tc(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kb(t,e){return qa(t,e.toTimestamp())}function bn(t){return De(!!t,49232),ge.fromTimestamp(function(n){const r=Nr(n);return new je(r.seconds,r.nanos)}(t))}function Xu(t,e){return su(t,e).canonicalString()}function su(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function x_(t){const e=Ue.fromString(t);return De(B_(e),10190,{key:e.toString()}),e}function iu(t,e){return Xu(t.databaseId,e.path)}function El(t,e){const n=x_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(M_(n))}function L_(t,e){return Xu(t.databaseId,e)}function Vb(t){const e=x_(t);return e.length===4?Ue.emptyPath():M_(e)}function ou(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function M_(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zd(t,e,n){return{name:iu(t,e),fields:n.value.mapValue.fields}}function Nb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(De(h===void 0||typeof h=="string",58123),Et.fromBase64String(h||"")):(De(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?F.UNKNOWN:V_(u.code);return new te(h,u.message||"")}(o);n=new D_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=El(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ge.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ga(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=El(t,r.document),i=r.readTime?bn(r.readTime):ge.min(),o=St.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ga([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=El(t,r.document),i=r.removedTargetIds||[];n=new ga([],i,s,null)}else{if(!("filter"in e))return de(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Tb(s,i),c=r.targetId;n=new N_(c,o)}}return n}function Db(t,e){let n;if(e instanceof Co)n={update:Zd(t,e.key,e.value)};else if(e instanceof Qu)n={delete:iu(t,e.key)};else if(e instanceof Ur)n={update:Zd(t,e.key,e.data),updateMask:$b(e.fieldMask)};else{if(!(e instanceof yb))return de(16599,{Vt:e.type});n={verify:iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _o)return{fieldPath:o.field.canonicalString(),increment:c.Ae};if(c instanceof Ba)return{fieldPath:o.field.canonicalString(),minimum:c.Ae};if(c instanceof ja)return{fieldPath:o.field.canonicalString(),maximum:c.Ae};throw de(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function Ob(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(ge.min())&&(o=bn(i)),new gb(o,s.transformResults||[])}(n,e))):[]}function xb(t,e){return{documents:[L_(t,e.path)]}}function Lb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=L_(t,s);const i=function(u){if(u.length!==0)return U_(fn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Cs(g.field),direction:Ub(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ru(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{dt:n,parent:s}}function Mb(t){let e=Vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=F_(d);return g instanceof fn&&g_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(R){return new fo(Ps(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,Tc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,y=d.values||[];return new Fa(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,y=d.values||[];return new Fa(y,g)}(n.endAt)),ZA(e,s,o,i,c,"F",l,u)}function Fb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function F_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>F_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function Ub(t){return Sb[t]}function Bb(t){return Rb[t]}function jb(t){return Cb[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ps(t){return _t.fromServerFormat(t.fieldPath)}function U_(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Bd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:Bb(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>U_(s));return r.length===1?r[0]:{compositeFilter:{op:jb(n.op),filters:r}}}(t):de(54877,{filter:t})}function $b(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function B_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function j_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Wn{constructor(e,n,r,s,i=ge.min(),o=ge.min(),c=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qb{constructor(e){this.gt=e}}function Hb(t){const e=Mb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ua(e,e.limit,"L"):e}/**
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
 */class Gb{constructor(){this.Sn=new Wb}addToCollectionParentIndex(e,n){return this.Sn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Vr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ue.comparator)).toArray()}}/**
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
 */const ep={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$_=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt($_,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
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
 */class xr{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new xr(0)}static _r(){return new xr(-1)}}/**
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
 */const tp="LruGarbageCollector",zb=1048576;function np([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class Kb{constructor(e){this.hr=e,this.buffer=new at(np),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();np(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Qb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){Z(tp,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?Z(tp,"Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Rr(3e5)})}}class Jb{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Ec.ce);const r=new Kb(n);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(ep)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ep):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Ss()<=be.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function Yb(t,e){return new Jb(t,e)}/**
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
 */class Xb{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Zb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ki(r.mutation,s,Gt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=ts();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=nr();const o=zi(),c=function(){return zi()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Ur)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ki(h.mutation,u,h.mutation.getFieldMask(),je.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>c.set(u,new Zb(h,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=zi();let s=new qe((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Gt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const d=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,d=A_();h.forEach(g=>{if(!i.has(g)){const y=P_(n.get(g),r.get(g));y!==null&&d.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return eb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):v_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(ts());let c=ao,l=i;return o.next(u=>B.forEach(u,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ie())).next(h=>({batchId:c,changes:w_(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const u=function(d,g){return new ri(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,St.newInvalidDocument(h)))});let c=Oi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Ki(h.mutation,u,Gt.empty(),je.now()),Ac(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class tS{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return B.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(s){return{name:s.name,query:Hb(s.bundledQuery),readTime:bn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class nS{constructor(){this.overlays=new qe(ce.comparator),this.Br=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ts();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Br.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=ts(),i=n.length+1,o=new ce(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ts(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=ts(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return B.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Eb(n,r));let i=this.Br.get(n);i===void 0&&(i=Ie(),this.Br.set(n,i)),this.Br.set(n,i.add(r.key))}}/**
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
 */class rS{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Zu{constructor(){this.Lr=new at(ft.kr),this.qr=new at(ft.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new ft(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new ce(new Ue([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.$r(o),i.push(o.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new ce(new Ue([])),r=new ft(n,e),s=new ft(n,e+1);let i=Ie();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return ce.comparator(e.key,n.key)||Te(e.jr,n.jr)}static Kr(e,n){return Te(e.jr,n.jr)||ce.comparator(e.key,n.key)}}/**
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
 */class sS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new at(ft.kr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new ft(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Zr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?ju:this.Xn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const c=this.Hr(o.jr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Te);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],c=>{r=r.add(c.jr)})}),B.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ft(new ce(i),0);let c=new at(Te);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.jr)),!0)},o),B.resolve(this.Xr(c))}Xr(e){const n=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return B.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new ft(n,0),s=this.Jr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iS{constructor(e){this.ei=e,this.docs=function(){return new qe(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=nr();const o=n.path,c=new ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kA(PA(h),r)<=0||(s.has(h.key)||Ac(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}ti(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oS(this)}getSize(e){return B.resolve(this.size)}}class oS extends Xb{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
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
 */class aS{constructor(e){this.persistence=e,this.ni=new ms(n=>Hu(n),Gu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.ri=0,this.ii=new Zu,this.targetCount=0,this.si=xr.sr()}forEachTarget(e,n){return this.ni.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),B.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new xr(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.cr(n),B.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ni.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ni.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.ii.containsKey(n))}}/**
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
 */class q_{constructor(e,n){this.oi={},this.overlays={},this._i=new Ec(0),this.ai=!1,this.ai=!0,this.ui=new rS,this.referenceDelegate=e(this),this.ci=new aS(this),this.indexManager=new Gb,this.remoteDocumentCache=function(s){return new iS(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new qb(n),this.hi=new tS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new sS(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new cS(this._i.next());return this.referenceDelegate.Pi(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return B.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class cS extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class eh{constructor(e){this.persistence=e,this.Ei=new Zu,this.Ri=null}static Ai(e){return new eh(e)}get Vi(){if(this.Ri)return this.Ri;throw de(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Vi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Vi,r=>{const s=ce.fromPath(r);return this.di(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return B.or([()=>B.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.mi=new ms(r=>xA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Yb(this,n)}static Ai(e,n){return new Ha(e,n)}Pi(){}Ti(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return B.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,o=>this.yr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),B.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fa(e.data.value)),n}yr(e,n,r){return B.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.mi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class th{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=s}static Is(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new th(e,n.fromCache,r,s)}}/**
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
 */class lS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uS{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return JI()?8:DA(Pt())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.fs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.gs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lS;return this.ps(e,n,o).next(c=>{if(i.result=c,this.Rs)return this.ys(e,n,o,c.size)})}).next(()=>i.result)}ys(e,n,r,s){return r.documentReadCount<this.As?(Ss()<=be.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),B.resolve()):(Ss()<=be.DEBUG&&Z("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(Ss()<=be.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):B.resolve())}fs(e,n){if(Hd(n))return B.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ua(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ds.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ws(n,c);return this.Ss(n,u,o,l.readTime)?this.fs(e,Ua(n,null,"F")):this.bs(e,u,n,l)}))})))}gs(e,n,r,s){return Hd(n)||s.isEqual(ge.min())?B.resolve(null):this.ds.getDocuments(e,r).next(i=>{const o=this.ws(n,i);return this.Ss(n,o,r,s)?B.resolve(null):(Ss()<=be.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.bs(e,o,n,CA(s,ao)).next(c=>c))})}ws(e,n){let r=new at(T_(e));return n.forEach((s,i)=>{Ac(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,n,r){return Ss()<=be.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ds.getDocumentsMatchingQuery(e,n,Vr.min(),r)}bs(e,n,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const nh="LocalStore",hS=3e8;class fS{constructor(e,n,r,s){this.persistence=e,this.Ds=n,this.serializer=s,this.Cs=new qe(Te),this.vs=new ms(i=>Hu(i),Gu),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eS(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function dS(t,e,n,r){return new fS(t,e,n,r)}async function H_(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Os:u,removedBatchIds:o,addedBatchIds:c}))})})}function pS(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const d=u.batch,g=d.keys();let y=B.resolve();return g.forEach(R=>{y=y.next(()=>h.getEntry(l,R)).next(C=>{const V=u.docVersions.get(R);De(V!==null,48541),C.version.compareTo(V)<0&&(d.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function G_(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function gS(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});s=n.Cs;const c=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;c.push(n.ci.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.ci.addMatchingKeys(i,h.addedDocuments,d)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Et.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(d,y),function(C,V,$){return C.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=hS?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,y,h)&&c.push(n.ci.updateTargetData(i,y))});let l=nr(),u=Ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(mS(i,o,e.documentUpdates).next(h=>{l=h.Ns,u=h.Bs})),!r.isEqual(ge.min())){const h=n.ci.getLastRemoteSnapshotVersion(i).next(d=>n.ci.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Cs=s,i))}function mS(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=nr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(nh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ns:o,Bs:s}})}function _S(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ju),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yS(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ci.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.ci.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function au(t,e,n){const r=_e(t),s=r.Cs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;Z(nh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function rp(t,e,n){const r=_e(t);let s=ge.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),g=d.vs.get(h);return g!==void 0?B.resolve(d.Cs.get(g)):d.ci.getTargetData(u,h)}(r,o,An(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ie())).next(c=>(vS(r,rb(e),c),{documents:c,Ls:i})))}function vS(t,e,n){let r=t.Fs.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Fs.set(e,r)}class sp{constructor(){this.activeTargetIds=lb()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ES{constructor(){this.Co=new sp,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TS{Fo(e){}shutdown(){}}/**
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
 */const ip="ConnectivityMonitor";class op{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){Z(ip,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){Z(ip,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let na=null;function cu(){return na===null?na=function(){return 268435456+Math.round(2147483648*Math.random())}():na++,"0x"+na.toString(16)}/**
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
 */const Tl="RestConnection",IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wS{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===La?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,n,r,s,i){const o=cu(),c=this.Wo(e,n.toUriEncodedString());Z(Tl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(l,s,i);const{host:u}=new URL(c),h=So(u);return this.Go(e,c,l,r,h).then(d=>(Z(Tl,`Received RPC '${e}' ${o}: `,d),d),d=>{throw hs(Tl,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}zo(e,n,r,s,i,o){return this.$o(e,n,r,s,i)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Wo(e,n){const r=IS[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class AS{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const It="WebChannelConnection",bi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ms extends wS{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Ms.u_){const e=Jm();bi(e,Qm.STAT_EVENT,n=>{n.stat===Yl.PROXY?Z(It,"STAT_EVENT: detected buffering proxy"):n.stat===Yl.NOPROXY&&Z(It,"STAT_EVENT: detected no buffering proxy")}),Ms.u_=!0}}Go(e,n,r,s,i){const o=cu();return new Promise((c,l)=>{const u=new zm;u.setWithCredentials(!0),u.listenOnce(Km.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ha.NO_ERROR:const d=u.getResponseJson();Z(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case ha.TIMEOUT:Z(It,`RPC '${e}' ${o} timed out`),l(new te(F.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const g=u.getStatus();if(Z(It,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const C=function($){const x=$.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(x)>=0?x:F.UNKNOWN}(R.status);l(new te(C,R.message))}else l(new te(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te(F.UNAVAILABLE,"Connection failed."));break;default:de(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Z(It,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);Z(It,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=cu(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Qo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");Z(It,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);this.T_(h);let d=!1,g=!1;const y=new AS({jo:R=>{g?Z(It,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(d||(Z(It,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),Z(It,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},Jo:()=>h.close()});return bi(h,Di.EventType.OPEN,()=>{g||(Z(It,`RPC '${e}' stream ${s} transport opened.`),y.r_())}),bi(h,Di.EventType.CLOSE,()=>{g||(g=!0,Z(It,`RPC '${e}' stream ${s} transport closed`),y.s_(),this.I_(h))}),bi(h,Di.EventType.ERROR,R=>{g||(g=!0,hs(It,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),y.s_(new te(F.UNAVAILABLE,"The operation could not be completed")))}),bi(h,Di.EventType.MESSAGE,R=>{var C;if(!g){const V=R.data[0];De(!!V,16349);const $=V,x=($==null?void 0:$.error)||((C=$[0])==null?void 0:C.error);if(x){Z(It,`RPC '${e}' stream ${s} received error:`,x);const z=x.status;let H=function(I){const v=Xe[I];if(v!==void 0)return V_(v)}(z),Y=x.message;z==="NOT_FOUND"&&Y.includes("database")&&Y.includes("does not exist")&&Y.includes(this.databaseId.database)&&hs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=F.INTERNAL,Y="Unknown error status: "+z+" with message "+x.message),g=!0,y.s_(new te(H,Y)),h.close()}else Z(It,`RPC '${e}' stream ${s} received:`,V),y.o_(V)}}),Ms.a_(),setTimeout(()=>{y.i_()},0),y}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ym()}}/**
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
 */function bS(t){return new Ms(t)}function Il(){return typeof document<"u"?document:null}/**
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
 */function Cc(t){return new Pb(t,!0)}/**
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
 */Ms.u_=!1;class W_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ap="PersistentStream";class z_{constructor(e,n,r,s,i,o,c,l){this.Di=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new W_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.Q_(r,s)},r=>{e(()=>{const s=new te(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return Z(ap,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():(Z(ap,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SS extends z_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Nb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?bn(o.readTime):ge.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ou(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=tu(l)?{documents:xb(i,l)}:{query:Lb(i,l).dt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=O_(i,o.resumeToken);const u=ru(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){c.readTime=qa(i,o.snapshotVersion.toTimestamp());const u=ru(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Fb(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=ou(this.serializer),n.removeTarget=e,this.k_(n)}}class RS extends z_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Ob(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ou(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Db(this.serializer,r))};this.k_(n)}}/**
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
 */class CS{}class PS extends CS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.$o(e,su(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(F.UNKNOWN,i.toString())})}zo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.zo(e,su(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(F.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function kS(t,e,n,r){return new PS(t,e,n,r)}class VS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tr(n),this._a=!1):Z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Pn="RemoteStore";class NS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new xr(1e3),this.Aa=new xr(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{_s(this)&&(Z(Pn,"Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.Va.add(4),await Vo(u),u.fa.set("Unknown"),u.Va.delete(4),await Pc(u)}(this))})}),this.fa=new VS(r,s)}}async function Pc(t){if(_s(t))for(const e of t.da)await e(!0)}async function Vo(t){for(const e of t.da)await e(!1)}function lu(t,e){return t.Ia.get(e)||void 0}function K_(t,e){const n=_e(t),r=lu(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const s=function(c,l){const u=lu(c,l);u!==void 0&&c.Ea.delete(u);const h=function(g,y){return y%2!=0?g.Aa.next():g.Ra.next()}(c,l);return c.Ia.set(l,h),c.Ea.set(h,l),h}(n,e.targetId);Z(Pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Wn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(s,i),oh(n)?ih(n):si(n).x_()&&sh(n,i)}function rh(t,e){const n=_e(t),r=si(n),s=lu(n,e);Z(Pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ta.delete(s),n.Ia.delete(e),n.Ea.delete(s),r.x_()&&Q_(n,s),n.Ta.size===0&&(r.x_()?r.B_():_s(n)&&n.fa.set("Unknown"))}function sh(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void Z(Pn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}si(t).H_(e)}function Q_(t,e){t.ga.$e(e),si(t).Z_(e)}function ih(t){t.ga=new bb({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):Ie()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),si(t).start(),t.fa.aa()}function oh(t){return _s(t)&&!si(t).M_()&&t.Ta.size>0}function _s(t){return _e(t).Va.size===0}function J_(t){t.ga=void 0}async function DS(t){t.fa.set("Online")}async function OS(t){t.Ta.forEach((e,n)=>{sh(t,e)})}async function xS(t,e){J_(t),oh(t)?(t.fa.la(e),ih(t)):t.fa.set("Unknown")}async function LS(t,e,n){if(t.fa.set("Online"),e instanceof D_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.Ta.has(c)){const l=s.Ea.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Ea.delete(c)),s.Ta.delete(c)}s.ga.removeTarget(c)}}(t,e)}catch(r){Z(Pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ga(t,r)}else if(e instanceof ga?t.ga.Xe(e):e instanceof N_?t.ga.it(e):t.ga.tt(e),!n.isEqual(ge.min()))try{const r=await G_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ga.Pt(o);c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const d=i.Ta.get(u);if(!d)return;i.Ta.set(u,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),Q_(i,u);const g=new Wn(d.target,u,h,d.sequenceNumber);sh(i,g)});const l=function(h,d){const g=new Map;d.targetChanges.forEach((R,C)=>{const V=h.Ea.get(C);V!==void 0&&g.set(V,R)});let y=new qe(Te);return d.targetMismatches.forEach((R,C)=>{const V=h.Ea.get(R);V!==void 0&&(y=y.insert(V,C))}),new Po(d.snapshotVersion,g,y,d.documentUpdates,d.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(Pn,"Failed to raise snapshot:",r),await Ga(t,r)}}async function Ga(t,e,n){if(!ni(e))throw e;t.Va.add(1),await Vo(t),t.fa.set("Offline"),n||(n=()=>G_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Pn,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await Pc(t)})}function Y_(t,e){return e().catch(n=>Ga(t,n,e))}async function kc(t){const e=_e(t),n=Lr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ju;for(;MS(e);)try{const s=await _S(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,FS(e,s)}catch(s){await Ga(e,s)}X_(e)&&Z_(e)}function MS(t){return _s(t)&&t.Pa.length<10}function FS(t,e){t.Pa.push(e);const n=Lr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function X_(t){return _s(t)&&!Lr(t).M_()&&t.Pa.length>0}function Z_(t){Lr(t).start()}async function US(t){Lr(t).na()}async function BS(t){const e=Lr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function jS(t,e,n){const r=t.Pa.shift(),s=Ju.from(r,e,n);await Y_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kc(t)}async function $S(t,e){e&&Lr(t).X_&&await async function(r,s){if(function(o){return Ib(o)&&o!==F.ABORTED}(s.code)){const i=r.Pa.shift();Lr(r).N_(),await Y_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kc(r)}}(t,e),X_(t)&&Z_(t)}async function cp(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),Z(Pn,"RemoteStore received new credentials");const r=_s(n);n.Va.add(3),await Vo(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await Pc(n)}async function qS(t,e){const n=_e(t);e?(n.Va.delete(2),await Pc(n)):e||(n.Va.add(2),await Vo(n),n.fa.set("Unknown"))}function si(t){return t.pa||(t.pa=function(n,r,s){const i=_e(n);return i.ia(),new SS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ho:DS.bind(null,t),Xo:OS.bind(null,t),e_:xS.bind(null,t),J_:LS.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),oh(t)?ih(t):t.fa.set("Unknown")):(await t.pa.stop(),J_(t))})),t.pa}function Lr(t){return t.ya||(t.ya=function(n,r,s){const i=_e(n);return i.ia(),new RS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:US.bind(null,t),e_:$S.bind(null,t),ea:BS.bind(null,t),ta:jS.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await kc(t)):(await t.ya.stop(),t.Pa.length>0&&(Z(Pn,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
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
 */class ah{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ah(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(tr("AsyncQueue",`${e}: ${t}`),ni(t))return new te(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{static emptySet(e){return new Fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lp{constructor(){this.wa=new qe(ce.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):de(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ks(e,n,Fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class HS{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class GS{constructor(){this.queries=up(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=up(),i.forEach((o,c)=>{for(const l of c.Ca)l.onError(r)})})(this,new te(F.ABORTED,"Firestore shutting down"))}}function up(){return new ms(t=>E_(t),wc)}async function ey(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.va()&&e.Fa()&&(r=2):(i=new HS,r=e.Fa()?0:1);try{switch(r){case 0:i.Da=await n.onListen(s,!0);break;case 1:i.Da=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ch(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Ca.push(e),e.xa(n.onlineState),i.Da&&e.Oa(i.Da)&&lh(n)}async function ty(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ca.indexOf(e);o>=0&&(i.Ca.splice(o,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WS(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Ca)c.Oa(s)&&(r=!0);o.Da=s}}r&&lh(n)}function zS(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Ca)i.onError(n);r.queries.delete(e)}function lh(t){t.Ma.forEach(e=>{e.next()})}var uu,hp;(hp=uu||(uu={})).Na="default",hp.Cache="cache";class ny{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==uu.Cache}}/**
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
 */class ry{constructor(e){this.key=e}}class sy{constructor(e){this.key=e}}class KS{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=Ie(),this.mutatedKeys=Ie(),this.ru=T_(e),this.iu=new Fs(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new lp,s=n?n.iu:this.iu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),y=Ac(this.query,d)?d:null,R=!!g&&this.mutatedKeys.has(g.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let V=!1;g&&y?g.data.isEqual(y.data)?R!==C&&(r.track({type:3,doc:y}),V=!0):this.au(g,y)||(r.track({type:2,doc:y}),V=!0,(l&&this.ru(y,l)>0||u&&this.ru(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),V=!0):g&&!y&&(r.track({type:1,doc:g}),V=!0,(l||u)&&(c=!0)),V&&(y?(o=o.add(y),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{iu:o,_u:r,Ss:c,mutatedKeys:i}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((h,d)=>function(y,R){const C=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{At:V})}};return C(y)-C(R)}(h.type,d.type)||this.ru(h.doc,d.doc)),this.uu(r),s=s??!1;const c=n&&!s?this.cu():[],l=this.nu.size===0&&this.current&&!s?1:0,u=l!==this.tu;return this.tu=l,o.length!==0||u?{snapshot:new Ks(this.query,e.iu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:c}:{lu:c}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new lp,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=Ie(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new sy(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new ry(r))}),n}Pu(e){this.eu=e.Ls,this.nu=Ie();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return Ks.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const uh="SyncEngine";class QS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JS{constructor(e){this.key=e,this.Iu=!1}}class YS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new ms(c=>E_(c),wc),this.Au=new Map,this.Vu=new Set,this.du=new qe(ce.comparator),this.mu=new Map,this.fu=new Zu,this.gu={},this.pu=new Map,this.yu=xr._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function XS(t,e,n=!0){const r=uy(t);let s;const i=r.Ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await iy(r,e,n,!0),s}async function ZS(t,e){const n=uy(t);await iy(n,e,!0,!1)}async function iy(t,e,n,r){const s=await yS(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await eR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&K_(t.remoteStore,s),c}async function eR(t,e,n,r,s){t.Su=(d,g,y)=>async function(C,V,$,x){let z=V.view.ou($);z.Ss&&(z=await rp(C.localStore,V.query,!1).then(({documents:I})=>V.view.ou(I,z)));const H=x&&x.targetChanges.get(V.targetId),Y=x&&x.targetMismatches.get(V.targetId)!=null,le=V.view.applyChanges(z,C.isPrimaryClient,H,Y);return dp(C,V.targetId,le.lu),le.snapshot}(t,d,g,y);const i=await rp(t.localStore,e,!0),o=new KS(e,i.Ls),c=o.ou(i.documents),l=ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);dp(t,n,u.lu);const h=new QS(e,n,o);return t.Ru.set(e,h),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),u.snapshot}async function tR(t,e,n){const r=_e(t),s=r.Ru.get(e),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(o=>!wc(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await au(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rh(r.remoteStore,s.targetId),hu(r,s.targetId)}).catch(ti)):(hu(r,s.targetId),await au(r.localStore,s.targetId,!0))}async function nR(t,e){const n=_e(t),r=n.Ru.get(e),s=n.Au.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rh(n.remoteStore,r.targetId))}async function rR(t,e,n){const r=uR(t);try{const s=await function(o,c){const l=_e(o),u=je.now(),h=c.reduce((y,R)=>y.add(R.key),Ie());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=nr(),C=Ie();return l.Ms.getEntries(y,h).next(V=>{R=V,R.forEach(($,x)=>{x.isValidDocument()||(C=C.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,R)).next(V=>{d=V;const $=[];for(const x of c){const z=_b(x,d.get(x.key).overlayedDocument);z!=null&&$.push(new Ur(x.key,z,f_(z.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,$,c)}).next(V=>{g=V;const $=V.applyToLocalDocumentSet(d,C);return l.documentOverlayCache.saveOverlays(y,V.batchId,$)})}).then(()=>({batchId:g.batchId,changes:w_(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.gu[o.currentUser.toKey()];u||(u=new qe(Te)),u=u.insert(c,l),o.gu[o.currentUser.toKey()]=u}(r,s.batchId,n),await No(r,s.changes),await kc(r.remoteStore)}catch(s){const i=ch(s,"Failed to persist write");n.reject(i)}}async function oy(t,e){const n=_e(t);try{const r=await gS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.mu.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Iu=!0:s.modifiedDocuments.size>0?De(o.Iu,14607):s.removedDocuments.size>0&&(De(o.Iu,42227),o.Iu=!1))}),await No(n,r,e)}catch(r){await ti(r)}}function fp(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ru.forEach((i,o)=>{const c=o.view.xa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((h,d)=>{for(const g of d.Ca)g.xa(c)&&(u=!0)}),u&&lh(l)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sR(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.mu.get(e),i=s&&s.key;if(i){let o=new qe(ce.comparator);o=o.insert(i,St.newNoDocument(i,ge.min()));const c=Ie().add(i),l=new Po(ge.min(),new Map,new qe(Te),o,c);await oy(r,l),r.du=r.du.remove(i),r.mu.delete(e),hh(r)}else await au(r.localStore,e,!1).then(()=>hu(r,e,n)).catch(ti)}async function iR(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await pS(n.localStore,e);cy(n,r,null),ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,s)}catch(s){await ti(s)}}async function oR(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(De(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);cy(r,e,n),ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,s)}catch(s){await ti(s)}}function ay(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function cy(t,e,n){const r=_e(t);let s=r.gu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||ly(t,r)})}function ly(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(rh(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),hh(t))}function dp(t,e,n){for(const r of n)r instanceof ry?(t.fu.addReference(r.key,e),aR(t,r)):r instanceof sy?(Z(uh,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||ly(t,r.key)):de(19791,{Du:r})}function aR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||(Z(uh,"New document in limbo: "+n),t.Vu.add(r),hh(t))}function hh(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new ce(Ue.fromString(e)),r=t.yu.next();t.mu.set(r,new JS(n)),t.du=t.du.insert(n,r),K_(t.remoteStore,new Wn(An(Wu(n.path)),r,"TargetPurposeLimboResolution",Ec.ce))}}async function No(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((c,l)=>{o.push(r.Su(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=th.Is(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Eu.J_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,g=>B.forEach(g.Ps,y=>h.persistence.referenceDelegate.addReference(d,g.targetId,y)).next(()=>B.forEach(g.Ts,y=>h.persistence.referenceDelegate.removeReference(d,g.targetId,y)))))}catch(d){if(!ni(d))throw d;Z(nh,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const y=h.Cs.get(g),R=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(R);h.Cs=h.Cs.insert(g,C)}}}(r.localStore,i))}async function cR(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){Z(uh,"User change. New user:",e.toKey());const r=await H_(n.localStore,e);n.currentUser=e,function(i,o){i.pu.forEach(c=>{c.forEach(l=>{l.reject(new te(F.CANCELLED,o))})}),i.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.Os)}}function lR(t,e){const n=_e(t),r=n.mu.get(e);if(r&&r.Iu)return Ie().add(r.key);{let s=Ie();const i=n.Au.get(e);if(!i)return s;for(const o of i){const c=n.Ru.get(o);s=s.unionWith(c.view.su)}return s}}function uy(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sR.bind(null,e),e.Eu.J_=WS.bind(null,e.eventManager),e.Eu.bu=zS.bind(null,e.eventManager),e}function uR(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oR.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return dS(this.persistence,new uS,e.initialUser,this.serializer)}Mu(e){return new q_(eh.Ai,this.serializer)}Fu(e){return new ES}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class hR extends Wa{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){De(this.persistence.referenceDelegate instanceof Ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qb(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new q_(r=>Ha.Ai(r,n),this.serializer)}}class fu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cR.bind(null,this.syncEngine),await qS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GS}()}createDatastore(e){const n=Cc(e.databaseInfo.databaseId),r=bS(e.databaseInfo);return kS(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new NS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>fp(this.syncEngine,n,0),function(){return op.v()?new op:new TS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const d=new YS(s,i,o,c,l,u);return h&&(d.wu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);Z(Pn,"RemoteStore shutting down."),i.Va.add(5),await Vo(i),i.ma.shutdown(),i.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}fu.provider={build:()=>new fu};/**
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
 */class hy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Mr="FirestoreClient";class fR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await H_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dR(t);Z(Mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cp(e.remoteStore,s)),t._onlineComponents=e}async function dR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Mr,"Using user provided OfflineComponentProvider");try{await wl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await wl(t,new Wa)}}else Z(Mr,"Using default OfflineComponentProvider"),await wl(t,new hR(void 0));return t._offlineComponents}async function fy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Mr,"Using user provided OnlineComponentProvider"),await pp(t,t._uninitializedComponentsProvider._online)):(Z(Mr,"Using default OnlineComponentProvider"),await pp(t,new fu))),t._onlineComponents}function pR(t){return fy(t).then(e=>e.syncEngine)}async function dy(t){const e=await fy(t),n=e.eventManager;return n.onListen=XS.bind(null,e.syncEngine),n.onUnlisten=tR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nR.bind(null,e.syncEngine),n}function gR(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new hy({next:g=>{h.ku(),o.enqueueAndForget(()=>ty(i,d));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new te(F.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new te(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new ny(Wu(c.path),h,{includeMetadataChanges:!0,$a:!0});return ey(i,d)}(await dy(t),t.asyncQueue,e,n,r)),r.promise}function mR(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new hy({next:g=>{h.ku(),o.enqueueAndForget(()=>ty(i,d)),g.fromCache&&l.source==="server"?u.reject(new te(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new ny(c,h,{includeMetadataChanges:!0,$a:!0});return ey(i,d)}(await dy(t),t.asyncQueue,e,n,r)),r.promise}function _R(t,e){const n=new Jn;return t.asyncQueue.enqueueAndForget(async()=>rR(await pR(t),e,n)),n.promise}/**
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
 */function py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yR="ComponentProvider",gp=new Map;function vR(t,e,n,r,s){return new FA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,py(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const gy="firestore.googleapis.com",mp=!0;class _p{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gy,this.ssl=mp}else this.host=e.host,this.ssl=e.ssl??mp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zb)throw new te(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=py(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _p({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _p(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _A;switch(r.type){case"firstParty":return new TA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gp.get(n);r&&(Z(yR,"Removing Datastore"),gp.delete(n),r.terminate())}(this),Promise.resolve()}}function ER(t,e,n,r={}){var u;t=hn(t,Vc);const s=So(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&Um(`https://${c}`),i.host!==gy&&i.host!==c&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!cs(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=wt.MOCK_USER;else{h=qI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new te(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new wt(g)}t._authCredentials=new yA(new Zm(h,d))}}/**
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
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ro(n,Ye._jsonSchema))return new Ye(e,r||null,new ce(Ue.fromString(n.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:tt("string",Ye._jsonSchemaVersion),referencePath:tt("string")};class Pr extends Br{constructor(e,n,r){super(e,n,Wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new ce(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function nt(t,e,...n){if(t=vt(t),e_("collection","path",e),t instanceof Vc){const r=Ue.fromString(e,...n);return kd(r),new Pr(t,null,r)}{if(!(t instanceof Ye||t instanceof Pr))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return kd(r),new Pr(t.firestore,null,r)}}function lt(t,e,...n){if(t=vt(t),arguments.length===1&&(e=Bu.newId()),e_("doc","path",e),t instanceof Vc){const r=Ue.fromString(e,...n);return Pd(r),new Ye(t,null,new ce(r))}{if(!(t instanceof Ye||t instanceof Pr))throw new te(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Pd(r),new Ye(t.firestore,t instanceof Pr?t.converter:null,new ce(r))}}/**
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
 */const yp="AsyncQueue";class vp{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new W_(this,"async_queue_retry"),this.cc=()=>{const r=Il();r&&Z(yp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=Il();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=Il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new Jn;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ni(e))throw e;Z(yp,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,tr("INTERNAL UNHANDLED ERROR: ",Ep(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const s=ah.createAndSchedule(this,e,n,r,i=>this.Ic(i));return this.sc.push(s),s}hc(){this.oc&&de(47125,{Ec:Ep(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function Ep(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ys extends Vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vp(e),this._firestoreClient=void 0,await e}}}function TR(t,e){const n=typeof t=="object"?t:qm(),r=typeof t=="string"?t:La,s=Fu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jI("firestore");i&&ER(s,...i)}return s}function fh(t){if(t._terminated)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||IR(t),t._firestoreClient}function IR(t){var r,s,i,o;const e=t._freezeSettings(),n=vR(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new fR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(Et.fromBase64String(e))}catch(n){throw new te(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ro(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:tt("string",Yt._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nc{constructor(e){this._methodName=e}}/**
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
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(Ro(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:tt("string",Sn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class cn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ro(e,cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new cn(e.vectorValues);throw new te(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:tt("string",cn._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const wR=/^__.*__$/;class AR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class my{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{dataSource:t})}}class ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ph({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return za(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(_y(this.dataSource)&&wR.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class bR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cc(e)}V(e,n,r,s=!1){return new ph({dataSource:e,methodName:n,targetDoc:r,path:_t.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(t){const e=t._freezeSettings(),n=Cc(t._databaseId);return new bR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yy(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);mh("Data must be an object, but it was:",o,r);const c=vy(r,o);let l,u;if(i.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=fs(e,d,n);if(!o.contains(g))throw new te(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Iy(h,g)||h.push(g)}l=new Gt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new AR(new Ft(c),l,u)}class Oc extends Nc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}class gh extends Nc{_toFieldTransform(e){return new db(e.path,new po)}isEqual(e){return e instanceof gh}}function SR(t,e,n,r){const s=t.V(1,e,n);mh("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Fr(r,(l,u)=>{const h=Ty(e,l,n);u=vt(u);const d=s.wc(h);if(u instanceof Oc)i.push(h);else{const g=Do(u,d);g!=null&&(i.push(h),o.set(h,g))}});const c=new Gt(i);return new my(o,c,s.fieldTransforms)}function RR(t,e,n,r,s,i){const o=t.V(1,e,n),c=[fs(e,r,n)],l=[s];if(i.length%2!=0)throw new te(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(fs(e,i[g])),l.push(i[g+1]);const u=[],h=Ft.empty();for(let g=c.length-1;g>=0;--g)if(!Iy(u,c[g])){const y=c[g];let R=l[g];R=vt(R);const C=o.wc(y);if(R instanceof Oc)u.push(y);else{const V=Do(R,C);V!=null&&(u.push(y),h.set(y,V))}}const d=new Gt(u);return new my(h,d,o.fieldTransforms)}function CR(t,e,n,r=!1){return Do(n,t.V(r?4:3,e))}function Do(t,e){if(Ey(t=vt(t)))return mh("Unsupported field value:",e,t),vy(t,e);if(t instanceof Nc)return function(r,s){if(!_y(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Do(c,s.Sc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ub(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:O_(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof cn)return function(o,c){const l=o instanceof cn?o.toArray():o;return{mapValue:{fields:{[l_]:{stringValue:u_},[Ma]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw c.bc("VectorValues must only contain numeric values.");return bc(c.serializer,h)})}}}}}}(r,s);if(j_(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${vc(r)}`)}(t,e)}function vy(t,e){const n={};return r_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,s)=>{const i=Do(s,e.gc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ey(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Sn||t instanceof Yt||t instanceof Ye||t instanceof Nc||t instanceof cn||j_(t))}function mh(t,e,n){if(!Ey(n)||!t_(n)){const r=vc(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function fs(t,e,n){if((e=vt(e))instanceof dh)return e._internalPath;if(typeof e=="string")return Ty(t,e);throw za("Field path arguments must be of type string or ",t,!1,void 0,n)}const PR=new RegExp("[~\\*/\\[\\]]");function Ty(t,e,n){if(e.search(PR)>=0)throw za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dh(...e.split("."))._internalPath}catch{throw za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(F.INVALID_ARGUMENT,c+t+l)}function Iy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kR{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ma].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Qe(o.doubleValue));return new cn(n)}convertGeoPoint(e){return new Sn(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);De(B_(r),9688,{name:e});const s=new lo(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class wy extends kR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function Vn(){return new gh("serverTimestamp")}const Tp="@firebase/firestore",Ip="4.15.0";/**
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
 */class Ay{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VR extends Ay{data(){return super.data()}}/**
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
 */function NR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _h{}class yh extends _h{}function Nn(t,e,...n){let r=[];e instanceof _h&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof vh).length,c=i.filter(l=>l instanceof xc).length;if(o>1||o>0&&c>0)throw new te(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xc extends yh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return by(e._query,n),new Br(e.firestore,e.converter,nu(e._query,n))}_parse(e){const n=Dc(e.firestore);return function(i,o,c,l,u,h,d){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ap(d,h);const R=[];for(const C of d)R.push(wp(l,i,C));g={arrayValue:{values:R}}}else g=wp(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ap(d,h),g=CR(c,o,d,h==="in"||h==="not-in");return Ze.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dn(t,e,n){const r=e,s=fs("where",t);return xc._create(s,r,n)}class vh extends _h{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)by(o,l),o=nu(o,l)}(e._query,n),new Br(e.firestore,e.converter,nu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eh extends yh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Eh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fo(i,o)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,nb(e._query,n))}}function On(t,e="asc"){const n=e,r=fs("orderBy",t);return Eh._create(r,n)}class Th extends yh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Th(e,n,r)}_apply(e){return new Br(e.firestore,e.converter,Ua(e._query,this._limit,this._limitType))}}function DR(t){return Th._create("limit",t,"F")}function wp(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new te(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!v_(e)&&n.indexOf("/")!==-1)throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ce.isDocumentKey(r))throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fd(t,new ce(r))}if(n instanceof Ye)return Fd(t,n._key);throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(n)}.`)}function Ap(t,e){if(!Array.isArray(t)||t.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function by(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Sy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends Ay{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=os._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:tt("string",os._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class ma extends os{data(e={}){return super.data(e)}}class Us{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ma(this._firestore,this._userDataWriter,r.key,r,new Li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:OR(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}/**
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
 */Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:tt("string",Us._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};/**
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
 */function Ry(t){t=hn(t,Ye);const e=hn(t.firestore,ys),n=fh(e);return gR(n,t._key).then(r=>xR(e,t,r))}function xn(t){t=hn(t,Br);const e=hn(t.firestore,ys),n=fh(e),r=new wy(e);return NR(t._query),mR(n,t._query).then(s=>new Us(e,r,t,s))}function Cy(t,e,n){t=hn(t,Ye);const r=hn(t.firestore,ys),s=Sy(t.converter,e,n),i=Dc(r);return Lc(r,[yy(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Zt.none())])}function Oo(t,e,n,...r){t=hn(t,Ye);const s=hn(t.firestore,ys),i=Dc(s);let o;return o=typeof(e=vt(e))=="string"||e instanceof dh?RR(i,"updateDoc",t._key,e,n,r):SR(i,"updateDoc",t._key,e),Lc(s,[o.toMutation(t._key,Zt.exists(!0))])}function or(t){return Lc(hn(t.firestore,ys),[new Qu(t._key,Zt.none())])}function Ln(t,e){const n=hn(t.firestore,ys),r=lt(t),s=Sy(t.converter,e),i=Dc(t.firestore);return Lc(n,[yy(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Lc(t,e){const n=fh(t);return _R(n,e)}function xR(t,e,n){const r=n.docs.get(e._key),s=new wy(t);return new os(t,s,e._key,r,new Li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){mA(Zs),Hs(new ls("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ys(new vA(r.getProvider("auth-internal")),new IA(o,r.getProvider("app-check-internal")),UA(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Rr(Tp,Ip,e),Rr(Tp,Ip,"esm2020")})();function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LR=Py,ky=new Ao("auth","Firebase",Py());/**
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
 */const Ka=new Lu("@firebase/auth");function MR(t,...e){Ka.logLevel<=be.WARN&&Ka.warn(`Auth (${Zs}): ${t}`,...e)}function _a(t,...e){Ka.logLevel<=be.ERROR&&Ka.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function kn(t,...e){throw wh(t,...e)}function ln(t,...e){return wh(t,...e)}function Ih(t,e,n){const r={...LR(),[e]:n};return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function as(t){return Ih(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kn(t,"argument-error"),Ih(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ky.create(t,...e)}function pe(t,e,...n){if(!t)throw wh(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function rr(t,e){t||zn(e)}/**
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
 */function du(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function UR(){return bp()==="http:"||bp()==="https:"}function bp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function BR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UR()||zI()||"connection"in navigator)?navigator.onLine:!0}function jR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=HI()||KI()}get(){return BR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ah(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HR=new xo(3e4,6e4);function bh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ii(t,e,n,r,s={}){return Ny(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=bo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return WI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&So(t.emulatorConfig.host)&&(u.credentials="include"),Vy.fetch()(await Dy(t,t.config.apiHost,n,c),u)})}async function Ny(t,e,n){t._canInitEmulator=!1;const r={...$R,...e};try{const s=new WR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ra(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ih(t,h,u);kn(t,h)}}catch(s){if(s instanceof ir)throw s;kn(t,"network-request-failed",{message:String(s)})}}async function GR(t,e,n,r,s={}){const i=await ii(t,e,n,r,s);return"mfaPendingCredential"in i&&kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ah(t.config,s):`${t.config.apiScheme}://${s}`;return qR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class WR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),HR.get())})}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function zR(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function Qa(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KR(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Sh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qi(Al(s.auth_time)),issuedAtTime:Qi(Al(s.iat)),expirationTime:Qi(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=xm(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sp(t){const e=Sh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&QR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var d;const e=t.auth,n=await t.getIdToken(),r=await yo(t,Qa(e,{idToken:n}));pe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?Oy(s.providerUserInfo):[],o=XR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YR(t){const e=vt(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Oy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ZR(t,e){const n=await Ny(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Dy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&So(t.emulatorConfig.host)&&(l.credentials="include"),Vy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function e0(t,e){return ii(t,"POST","/v2/accounts:revokeToken",bh(t,e))}/**
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
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ZR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function pr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new JR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KR(this,e)}reload(){return YR(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await yo(this,zR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:y,providerData:R,stsTokenManager:C}=n;pe(d&&C,e,"internal-error");const V=Bs.fromJSON(this.name,C);pe(typeof d=="string",e,"internal-error"),pr(r,e.name),pr(s,e.name),pe(typeof g=="boolean",e,"internal-error"),pe(typeof y=="boolean",e,"internal-error"),pr(i,e.name),pr(o,e.name),pr(c,e.name),pr(l,e.name),pr(u,e.name),pr(h,e.name);const $=new on({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:u,lastLoginAt:h});return R&&Array.isArray(R)&&($.providerData=R.map(x=>({...x}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Oy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Bs;c.updateFromIdToken(r);const l=new on({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Rp=new Map;function Kn(t){rr(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
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
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xy.type="NONE";const Cp=xy;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qa(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Kn(Cp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Kn(Cp);const o=ya(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await Qa(e,{idToken:h}).catch(()=>{});if(!g)break;d=await on._fromGetAccountInfoResponse(e,g,h)}else d=on._fromJSON(e,h);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new js(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new js(i,e,r))}}/**
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
 */function Pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jy(e))return"Blackberry";if($y(e))return"Webos";if(My(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(By(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ly(t=Pt()){return/firefox\//i.test(t)}function My(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(t=Pt()){return/crios\//i.test(t)}function Uy(t=Pt()){return/iemobile/i.test(t)}function By(t=Pt()){return/android/i.test(t)}function jy(t=Pt()){return/blackberry/i.test(t)}function $y(t=Pt()){return/webos/i.test(t)}function Rh(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function t0(t=Pt()){var e;return Rh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function n0(){return QI()&&document.documentMode===10}function qy(t=Pt()){return Rh(t)||By(t)||$y(t)||jy(t)||/windows phone/i.test(t)||Uy(t)}/**
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
 */function Hy(t,e=[]){let n;switch(t){case"Browser":n=Pp(Pt());break;case"Worker":n=`${Pp(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
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
 */class r0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function s0(t,e={}){return ii(t,"GET","/v2/passwordPolicy",bh(t,e))}/**
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
 */const i0=6;class o0{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??i0,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class a0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new r0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qa(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(as(this));const n=e?vt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s0(this),n=new o0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await e0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&MR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mc(t){return vt(t)}class kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function c0(t){Ch=t}function l0(t){return Ch.loadJS(t)}function u0(){return Ch.gapiScript}function h0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function f0(t,e){const n=Fu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cs(i,e??{}))return s;kn(s,"already-initialized")}return n.initialize({options:e})}function d0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function p0(t,e,n){const r=Mc(t);pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gy(e),{host:o,port:c}=g0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pe(cs(u,r.config.emulator)&&cs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,So(o)?Um(`${i}//${o}${l}`):m0()}function Gy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g0(t){const e=Gy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function $s(t,e){return GR(t,"POST","/v1/accounts:signInWithIdp",bh(t,e))}/**
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
 */const _0="http://localhost";class ds extends Wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ds(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:_0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends Lo{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Ir extends Lo{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
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
 */class wr extends Lo{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=Np(r);return new Qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Np(r);return new Qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ya extends ir{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ya(e,n,r,s)}}function zy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ya._fromErrorAndOperation(t,i,e,r):i})}async function y0(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
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
 */async function v0(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(as(r));const s="reauthenticate";try{const i=await yo(t,zy(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Sh(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),Qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),i}}/**
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
 */async function E0(t,e,n=!1){if(sn(t.app))return Promise.reject(as(t));const r="signIn",s=await zy(t,r,e),i=await Qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function T0(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function I0(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function w0(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function A0(t){return vt(t).signOut()}const Xa="__sak";/**
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
 */class Ky{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const b0=1e3,S0=10;class Qy extends Ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);n0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,S0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qy.type="LOCAL";const R0=Qy;/**
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
 */class Jy extends Ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jy.type="SESSION";const Yy=Jy;/**
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
 */function C0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await C0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
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
 */function kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=kh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function k0(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Xy(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function V0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function D0(){return Xy()?self:null}/**
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
 */const Zy="firebaseLocalStorageDb",O0=1,Za="firebaseLocalStorage",ev="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function x0(){const t=indexedDB.deleteDatabase(Zy);return new Mo(t).toPromise()}function tv(){const t=indexedDB.open(Zy,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:ev})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await x0(),e(await tv()))})})}async function Dp(t,e,n){const r=Uc(t,!0).put({[ev]:e,value:n});return new Mo(r).toPromise()}async function L0(t,e){const n=Uc(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Op(t,e){const n=Uc(t,!0).delete(e);return new Mo(n).toPromise()}const M0=800,F0=3;class nv{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=tv(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F0)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(D0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await V0(),!this.activeServiceWorker)return;this.sender=new P0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Dp(e,Xa,"1"),await Op(e,Xa)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>L0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uc(s,!1).getAll();return new Mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const U0=nv;new xo(3e4,6e4);/**
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
 */function rv(t,e){return e?Kn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vh extends Wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function B0(t){return E0(t.auth,new Vh(t),t.bypassAuthState)}function j0(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),v0(n,new Vh(t),t.bypassAuthState)}async function $0(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),y0(n,new Vh(t),t.bypassAuthState)}/**
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
 */class sv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B0;case"linkViaPopup":case"linkViaRedirect":return $0;case"reauthViaPopup":case"reauthViaRedirect":return j0;default:kn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const q0=new xo(2e3,1e4);async function H0(t,e,n){if(sn(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Mc(t);FR(t,e,Ph);const s=rv(r,n);return new ns(r,"signInViaPopup",e,s).executeNotNull()}class ns extends sv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q0.get())};e()}}ns.currentPopupAction=null;/**
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
 */const G0="pendingRedirect",va=new Map;class W0 extends sv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(t,e){const n=J0(e),r=Q0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function K0(t,e){va.set(t._key(),e)}function Q0(t){return Kn(t._redirectPersistence)}function J0(t){return ya(G0,t.config.apiKey,t.name)}async function Y0(t,e,n=!1){if(sn(t.app))return Promise.reject(as(t));const r=Mc(t),s=rv(r,e),o=await new W0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const X0=10*60*1e3;class Z0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iv(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X0&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(t);default:return!1}}/**
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
 */async function tC(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const nC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rC=/^https?/;async function sC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tC(t);for(const n of e)try{if(iC(n))return}catch{}kn(t,"unauthorized-domain")}function iC(t){const e=du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rC.test(n))return!1;if(nC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const oC=new xo(3e4,6e4);function Lp(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aC(t){return new Promise((e,n)=>{var s,i,o;function r(){Lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lp(),n(ln(t,"network-request-failed"))},timeout:oC.get()})}if((i=(s=Rn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Rn().gapi)!=null&&o.load)r();else{const c=h0("iframefcb");return Rn()[c]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},l0(`${u0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function cC(t){return Ea=Ea||aC(t),Ea}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lC=new xo(5e3,15e3),uC="__/auth/iframe",hC="emulator/auth/iframe",fC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pC(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ah(e,hC):`https://${t.config.authDomain}/${uC}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},s=dC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bo(r).slice(1)}`}async function gC(t){const e=await cC(t),n=Rn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:pC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=Rn().setTimeout(()=>{i(o)},lC.get());function l(){Rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_C=500,yC=600,vC="_blank",EC="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(t,e,n,r=_C,s=yC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...mC,width:r.toString(),height:s.toString(),top:i,left:o},u=Pt().toLowerCase();n&&(c=Fy(u)?vC:n),Ly(u)&&(e=e||EC,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[y,R])=>`${g}${y}=${R},`,"");if(t0(u)&&c!=="_self")return IC(e||"",c),new Mp(null);const d=window.open(e||"",c,h);pe(d,t,"popup-blocked");try{d.focus()}catch{}return new Mp(d)}function IC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wC="__/auth/handler",AC="emulator/auth/handler",bC=encodeURIComponent("fac");async function Fp(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Lo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${bC}=${encodeURIComponent(l)}`:"";return`${SC(t)}?${bo(c).slice(1)}${u}`}function SC({config:t}){return t.emulator?Ah(t,AC):`https://${t.authDomain}/${wC}`}/**
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
 */const bl="webStorageSupport";class RC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=Y0,this._overrideRedirectResult=K0}async _openPopup(e,n,r,s){var o;rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fp(e,n,r,du(),s);return TC(e,i,kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fp(e,n,r,du(),s);return k0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gC(e),r=new Z0(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[bl];i!==void 0&&n(!!i),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qy()||My()||Rh()}}const CC=RC;var Up="@firebase/auth",Bp="1.13.2";/**
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
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VC(t){Hs(new ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(t)},u=new a0(r,s,i,l);return d0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hs(new ls("auth-internal",e=>{const n=Mc(e.getProvider("auth").getImmediate());return(r=>new PC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(Up,Bp,kC(t)),Rr(Up,Bp,"esm2020")}/**
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
 */const NC=5*60,DC=Fm("authIdTokenMaxAge")||NC;let jp=null;const OC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DC)return;const s=n==null?void 0:n.token;jp!==s&&(jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xC(t=qm()){const e=Fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=f0(t,{popupRedirectResolver:CC,persistence:[U0,R0,Yy]}),r=Fm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OC(i.toString());I0(n,o,()=>o(n.currentUser)),T0(n,c=>o(c))}}const s=Lm("auth");return s&&p0(n,`http://${s}`),n}function LC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}c0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VC("Browser");const MC={apiKey:"AIzaSyANhiEU4CvantODisibi-K2Hf8Xh56IoSQ",authDomain:"vue-chicken.firebaseapp.com",projectId:"vue-chicken",storageBucket:"vue-chicken.firebasestorage.app",messagingSenderId:"555186655345",appId:"1:555186655345:web:a0706fea92a71e8176cbd0"},ov=$m(MC),Ee=TR(ov),Sl=xC(ov),FC=Kt("auth",()=>{const t=Je(null),e=Je(null),n=Je(!1),r=Je("");function s(){return new Promise(c=>{w0(Sl,l=>{l?(t.value={id:l.uid,username:l.displayName||l.email||l.uid,email:l.email||void 0,profileImage:l.photoURL||void 0},e.value=l.uid):(t.value=null,e.value=null),n.value=!0,c()})})}async function i(){const c=new Gn;await H0(Sl,c)}async function o(){await A0(Sl),t.value=null,e.value=null}return{user:t,uid:e,ready:n,redirectError:r,loadUser:s,signIn:i,signOut:o}}),Vs=Kt("batches",()=>{const t=Je([]);async function e(u){if(!u){t.value=[];return}try{const h=Nn(nt(Ee,"batches"),Dn("userId","==",u),On("createdAt","desc")),d=await xn(h);t.value=d.docs.map(g=>({id:g.id,...g.data()}))}catch(h){console.error("batches init",h)}}async function n(u){const d={id:(await Ln(nt(Ee,"batches"),{...u,createdAt:Vn()})).id,...u};return t.value.unshift(d),d}async function r(u,h){await Oo(lt(Ee,"batches",u),h);const d=t.value.findIndex(g=>g.id===u);d!==-1&&(t.value[d]={...t.value[d],...h})}async function s(u){await or(lt(Ee,"batches",u)),t.value=t.value.filter(h=>h.id!==u)}function i(u){return t.value.find(h=>h.id===u)}const o=ie(()=>t.value.filter(u=>u.status==="active")),c=ie(()=>t.value.filter(u=>u.mode==="egg")),l=ie(()=>t.value.filter(u=>u.mode==="meat"));return{batches:t,init:e,add:n,update:r,remove:s,getById:i,active:o,eggBatches:c,meatBatches:l}}),Nh=Kt("eggs",()=>{const t=Je([]);async function e(l){if(!l){t.value=[];return}try{const u=Nn(nt(Ee,"eggs"),Dn("userId","==",l),On("date","desc")),h=await xn(u);t.value=h.docs.map(d=>({id:d.id,...d.data()}))}catch(u){console.error("eggs init",u)}}async function n(l){const u=await Ln(nt(Ee,"eggs"),{...l,createdAt:Vn()});t.value.unshift({id:u.id,...l})}async function r(l){await or(lt(Ee,"eggs",l)),t.value=t.value.filter(u=>u.id!==l)}async function s(l,u){await Oo(lt(Ee,"eggs",l),u);const h=t.value.findIndex(d=>d.id===l);h!==-1&&(t.value[h]={...t.value[h],...u})}function i(l){return ie(()=>t.value.filter(u=>u.batchId===l).sort((u,h)=>h.date.localeCompare(u.date)))}function o(l){return ie(()=>t.value.filter(u=>u.batchId===l).reduce((u,h)=>u+h.totalEggs,0))}const c=ie(()=>t.value.reduce((l,u)=>l+u.totalEggs,0));return{collections:t,init:e,add:n,remove:r,update:s,forBatch:i,totalEggsForBatch:o,totalAll:c}}),av=Kt("expenses",()=>{const t=Je([]);async function e(l){if(!l){t.value=[];return}try{const u=Nn(nt(Ee,"expenses"),Dn("userId","==",l),On("date","desc")),h=await xn(u);t.value=h.docs.map(d=>({id:d.id,...d.data()}))}catch(u){console.error("expenses init",u)}}async function n(l){const u=await Ln(nt(Ee,"expenses"),{...l,createdAt:Vn()});t.value.unshift({id:u.id,...l})}async function r(l){await or(lt(Ee,"expenses",l)),t.value=t.value.filter(u=>u.id!==l)}async function s(l,u){await Oo(lt(Ee,"expenses",l),u);const h=t.value.findIndex(d=>d.id===l);h!==-1&&(t.value[h]={...t.value[h],...u})}function i(l){return ie(()=>t.value.filter(u=>u.batchId===l))}function o(l){return ie(()=>t.value.filter(u=>u.batchId===l).reduce((u,h)=>u+h.amount,0))}const c=ie(()=>t.value.reduce((l,u)=>l+u.amount,0));return{expenses:t,init:e,add:n,remove:r,update:s,forBatch:i,totalForBatch:o,totalAll:c}}),cv=Kt("revenue",()=>{const t=Je([]);async function e(l){if(!l){t.value=[];return}try{const u=Nn(nt(Ee,"revenue"),Dn("userId","==",l),On("date","desc")),h=await xn(u);t.value=h.docs.map(d=>({id:d.id,...d.data()}))}catch(u){console.error("revenue init",u)}}async function n(l){const u=await Ln(nt(Ee,"revenue"),{...l,createdAt:Vn()});t.value.unshift({id:u.id,...l})}async function r(l){await or(lt(Ee,"revenue",l)),t.value=t.value.filter(u=>u.id!==l)}async function s(l,u){await Oo(lt(Ee,"revenue",l),u);const h=t.value.findIndex(d=>d.id===l);h!==-1&&(t.value[h]={...t.value[h],...u})}function i(l){return ie(()=>t.value.filter(u=>u.batchId===l))}function o(l){return ie(()=>t.value.filter(u=>u.batchId===l).reduce((u,h)=>u+h.amount,0))}const c=ie(()=>t.value.reduce((l,u)=>l+u.amount,0));return{revenues:t,init:e,add:n,remove:r,update:s,forBatch:i,totalForBatch:o,totalAll:c}}),Dh=Kt("mortality",()=>{const t=Je([]);async function e(c){if(!c){t.value=[];return}try{const l=Nn(nt(Ee,"mortality"),Dn("userId","==",c),On("date","desc")),u=await xn(l);t.value=u.docs.map(h=>({id:h.id,...h.data()}))}catch(l){console.error("mortality init",l)}}async function n(c){const l=await Ln(nt(Ee,"mortality"),{...c,createdAt:Vn()});t.value.unshift({id:l.id,...c})}async function r(c){await or(lt(Ee,"mortality",c)),t.value=t.value.filter(l=>l.id!==c)}function s(c){return ie(()=>t.value.filter(l=>l.batchId===c))}function i(c){return ie(()=>t.value.filter(l=>l.batchId===c).reduce((l,u)=>l+u.count,0))}const o=ie(()=>t.value.reduce((c,l)=>c+l.count,0));return{records:t,init:e,add:n,remove:r,forBatch:s,totalForBatch:i,totalAll:o}}),UC=Kt("weights",()=>{const t=Je([]);async function e(o){if(!o){t.value=[];return}try{const c=Nn(nt(Ee,"weights"),Dn("userId","==",o),On("date","desc")),l=await xn(c);t.value=l.docs.map(u=>({id:u.id,...u.data()}))}catch(c){console.error("weights init",c)}}async function n(o){const c=await Ln(nt(Ee,"weights"),{...o,createdAt:Vn()});t.value.unshift({id:c.id,...o})}async function r(o){await or(lt(Ee,"weights",o)),t.value=t.value.filter(c=>c.id!==o)}function s(o){return ie(()=>t.value.filter(c=>c.batchId===o).sort((c,l)=>l.date.localeCompare(c.date)))}function i(o){return ie(()=>t.value.filter(l=>l.batchId===o).sort((l,u)=>u.date.localeCompare(l.date))[0]||null)}return{records:t,init:e,add:n,remove:r,forBatch:s,latestForBatch:i}}),BC=Kt("environment",()=>{const t=Je([]);async function e(o){if(!o){t.value=[];return}try{const c=Nn(nt(Ee,"environment"),Dn("userId","==",o),On("date","desc")),l=await xn(c);t.value=l.docs.map(u=>({id:u.id,...u.data()}))}catch(c){console.error("environment init",c)}}async function n(o){const c=await Ln(nt(Ee,"environment"),{...o,createdAt:Vn()});t.value.unshift({id:c.id,...o})}async function r(o){await or(lt(Ee,"environment",o)),t.value=t.value.filter(c=>c.id!==o)}function s(o){return ie(()=>t.value.filter(c=>c.batchId===o).sort((c,l)=>{const u=c.date+c.time;return(l.date+l.time).localeCompare(u)}))}function i(o){return ie(()=>t.value.filter(l=>l.batchId===o).sort((l,u)=>(u.date+u.time).localeCompare(l.date+l.time))[0]||null)}return{logs:t,init:e,add:n,remove:r,forBatch:s,latestForBatch:i}}),lv=Kt("health",()=>{const t=Je([]);async function e(o){if(!o){t.value=[];return}try{const c=Nn(nt(Ee,"health"),Dn("userId","==",o),On("date","desc")),l=await xn(c);t.value=l.docs.map(u=>({id:u.id,...u.data()}))}catch(c){console.error("health init",c)}}async function n(o){const c=await Ln(nt(Ee,"health"),{...o,createdAt:Vn()});t.value.unshift({id:c.id,...o})}async function r(o){await or(lt(Ee,"health",o)),t.value=t.value.filter(c=>c.id!==o)}async function s(o,c){await Oo(lt(Ee,"health",o),c);const l=t.value.findIndex(u=>u.id===o);l!==-1&&(t.value[l]={...t.value[l],...c})}function i(o){return ie(()=>t.value.filter(c=>c.batchId===o).sort((c,l)=>l.date.localeCompare(c.date)))}return{records:t,init:e,add:n,remove:r,update:s,forBatch:i}}),Si={currency:"ZiG",currencySymbol:"ZiG",weightUnit:"kg",temperatureUnit:"C",darkMode:!0},uv=Kt("settings",()=>{const t=gs({...Si});async function e(r){if(!r){Object.assign(t,Si);return}try{const s=await Ry(lt(Ee,"settings",r));s.exists()?Object.assign(t,{...Si,...s.data()}):Object.assign(t,Si)}catch{Object.assign(t,Si)}}async function n(r,s){Object.assign(t,s);try{await Cy(lt(Ee,"settings",r),{...t},{merge:!0})}catch(i){console.error("settings update",i)}}return{settings:t,init:e,update:n}}),hv=Kt("feedStock",()=>{const t=Je([]);async function e(c){if(!c){t.value=[];return}try{const l=Nn(nt(Ee,"feedStock"),Dn("userId","==",c),On("date","desc")),u=await xn(l);t.value=u.docs.map(h=>({id:h.id,...h.data()}))}catch(l){console.error("feedStock init",l)}}async function n(c){const l=await Ln(nt(Ee,"feedStock"),{...c,createdAt:Vn()});t.value.unshift({id:l.id,...c})}async function r(c){await or(lt(Ee,"feedStock",c)),t.value=t.value.filter(l=>l.id!==c)}function s(c){return ie(()=>t.value.filter(l=>l.batchId===c).sort((l,u)=>u.date.localeCompare(l.date))[0]??null)}function i(c){return ie(()=>t.value.filter(l=>l.batchId===c).sort((l,u)=>u.date.localeCompare(l.date)))}const o=ie(()=>t.value.length);return{records:t,totalRecords:o,init:e,add:n,remove:r,latestForBatch:s,forBatch:i}}),jC=Kt("activityLog",()=>{const t=Je([]);async function e(r){if(!r){t.value=[];return}try{const s=Nn(nt(Ee,"activityLog"),Dn("userId","==",r),On("timestamp","desc"),DR(300)),i=await xn(s);t.value=i.docs.map(o=>({id:o.id,...o.data()}))}catch(s){console.error("activityLog init",s)}}async function n(r,s,i,o){const c=new Date,l={category:r,description:s,timestamp:c.getTime(),date:c.toISOString().slice(0,10),userId:i.uid,userName:i.displayName||i.email||"Unknown",userEmail:i.email||"",userPhoto:i.photoURL||void 0,...o},u=await Ln(nt(Ee,"activityLog"),{...l,createdAt:Vn()});t.value.unshift({id:u.id,...l})}return{entries:t,init:e,log:n}}),Ri={eggReminderEnabled:!1,eggReminderHour:18,healthAlertEnabled:!1,healthAlertDaysAhead:1,mortalityAlertEnabled:!1,mortalityAlertThreshold:3,feedLowAlertEnabled:!1,feedLowAlertDaysAhead:2,feedRateAlertEnabled:!1},fv=Kt("notifications",()=>{const t=Je("default"),e=Je(null),n=gs({...Ri}),r=Je(!1),s=Je(!1);function i(){s.value="Notification"in window&&"serviceWorker"in navigator,s.value&&(t.value=Notification.permission)}async function o(h){if(i(),!h){Object.assign(n,Ri),e.value=null;return}try{const d=await Ry(lt(Ee,"notificationPrefs",h));d.exists()?Object.assign(n,{...Ri,...d.data()}):Object.assign(n,Ri)}catch{Object.assign(n,Ri)}}async function c(){if(!s.value)return!1;r.value=!0;try{const h=await Notification.requestPermission();return t.value=h,h==="granted"}finally{r.value=!1}}async function l(h,d){Object.assign(n,d);try{await Cy(lt(Ee,"notificationPrefs",h),{...n},{merge:!0})}catch(g){console.error("updatePrefs",g)}}function u(h,d,g){t.value==="granted"&&("serviceWorker"in navigator?navigator.serviceWorker.ready.then(y=>{y.showNotification(h,{body:d,icon:"/favicon.ico",badge:"/favicon.ico",tag:g,requireInteraction:!1})}):new Notification(h,{body:d,icon:"/favicon.ico",tag:g}))}return{permission:t,fcmToken:e,prefs:n,loading:r,supported:s,init:o,requestPermission:c,updatePrefs:l,showLocal:u}}),$p="vc_notif_last_egg_check",qp="vc_notif_last_health_check",Hp="vc_notif_last_mortality_check",Gp="vc_notif_last_feed_check",$C={egg:120,meat:100};function qC(){return new Date().toISOString().split("T")[0]}function Wp(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00");return Math.round((n.getTime()-e.getTime())/864e5)}function HC(){function t(){const e=fv();if(e.permission!=="granted")return;const n=qC(),r=new Date().getHours();if(e.prefs.eggReminderEnabled&&r>=e.prefs.eggReminderHour&&localStorage.getItem($p)!==n){const i=Vs(),o=Nh();i.batches.filter(l=>l.mode==="egg"&&l.status==="active").length>0&&(o.collections.some(u=>u.date===n)||e.showLocal("🥚 Egg count reminder","You haven't logged today's egg collection yet. Tap to open Vue Chicken.","egg-reminder")),localStorage.setItem($p,n)}if(e.prefs.mortalityAlertEnabled&&localStorage.getItem(Hp)!==n){const i=Dh(),o=Vs(),c=e.prefs.mortalityAlertThreshold,l=i.records.filter(d=>d.date===n),u={};for(const d of l)u[d.batchId]=(u[d.batchId]??0)+d.count;const h=Object.entries(u).filter(([,d])=>d>=c);if(h.length>0){const d=h.map(([g,y])=>{const R=o.batches.find(C=>C.id===g);return`${(R==null?void 0:R.name)??"Unknown batch"}: ${y} bird${y!==1?"s":""} today`});e.showLocal("⚠️ Mortality spike detected",d.slice(0,3).join(`
`),"mortality-spike")}localStorage.setItem(Hp,n)}if(e.prefs.healthAlertEnabled&&localStorage.getItem(qp)!==n){const i=lv(),o=Vs(),c=e.prefs.healthAlertDaysAhead,l=i.records.filter(u=>{if(!u.nextDue)return!1;const h=Wp(u.nextDue);return h>=0&&h<=c});if(l.length>0){const u=l.map(h=>{const d=o.batches.find(C=>C.id===h.batchId),g=(d==null?void 0:d.name)??"Unknown batch",y=Wp(h.nextDue),R=y===0?"today":y===1?"tomorrow":`in ${y} days`;return`${g}: ${h.description} due ${R}`});e.showLocal(`🩺 Health check${l.length>1?"s":""} due`,u.slice(0,3).join(`
`),"health-alert")}localStorage.setItem(qp,n)}if((e.prefs.feedLowAlertEnabled||e.prefs.feedRateAlertEnabled)&&localStorage.getItem(Gp)!==n){const i=hv(),o=Vs(),c=[],l=[],u=[];for(const h of o.batches.filter(d=>d.status==="active")){const d=i.records.filter(R=>R.batchId===h.id).sort((R,C)=>C.date.localeCompare(R.date))[0];if(!d)continue;const g=Math.floor((new Date(n+"T00:00:00").getTime()-new Date(d.date+"T00:00:00").getTime())/864e5),y=d.durationDays-g;if(e.prefs.feedLowAlertEnabled&&y<=e.prefs.feedLowAlertDaysAhead){const R=y<=0?"today":y===1?"tomorrow":`in ${y} days`;c.push(`${h.name}: runs out ${R}`)}if(e.prefs.feedRateAlertEnabled&&h.currentCount>0){const R=d.quantityKg*1e3/d.durationDays/h.currentCount,C=$C[h.mode]??110,V=R/C;V<.8?l.push(`${h.name}: ${Math.round(R)}g/bird/day (need ~${C}g)`):V>1.25&&u.push(`${h.name}: ${Math.round(R)}g/bird/day (need ~${C}g)`)}}c.length>0&&e.showLocal("🌾 Feed running low",c.slice(0,3).join(`
`),"feed-low"),l.length>0&&e.showLocal("⬇️ Underfeeding detected",l.slice(0,3).join(`
`),"feed-under"),u.length>0&&e.showLocal("⬆️ Overfeeding detected",u.slice(0,3).join(`
`),"feed-over"),localStorage.setItem(Gp,n)}}return{runChecks:t}}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ks=typeof document<"u";function dv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function GC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dv(t.default)}const Ve=Object.assign;function Rl(t,e){const n={};for(const r in e){const s=e[r];n[r]=dn(s)?s.map(t):t(s)}return n}const Ji=()=>{},dn=Array.isArray;function zp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const pv=/#/g,WC=/&/g,zC=/\//g,KC=/=/g,QC=/\?/g,gv=/\+/g,JC=/%5B/g,YC=/%5D/g,mv=/%5E/g,XC=/%60/g,_v=/%7B/g,ZC=/%7C/g,yv=/%7D/g,eP=/%20/g;function Oh(t){return t==null?"":encodeURI(""+t).replace(ZC,"|").replace(JC,"[").replace(YC,"]")}function tP(t){return Oh(t).replace(_v,"{").replace(yv,"}").replace(mv,"^")}function gu(t){return Oh(t).replace(gv,"%2B").replace(eP,"+").replace(pv,"%23").replace(WC,"%26").replace(XC,"`").replace(_v,"{").replace(yv,"}").replace(mv,"^")}function nP(t){return gu(t).replace(KC,"%3D")}function rP(t){return Oh(t).replace(pv,"%23").replace(QC,"%3F")}function sP(t){return rP(t).replace(zC,"%2F")}function vo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const iP=/\/$/,oP=t=>t.replace(iP,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=uP(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:vo(o)}}function aP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&vv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!lP(t[n],e[n]))return!1;return!0}function lP(t,e){return dn(t)?Qp(t,e):dn(e)?Qp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Qp(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const gr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let mu=function(t){return t.pop="pop",t.push="push",t}({}),Pl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function hP(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oP(t)}const fP=/^[^#]+#/;function dP(t,e){return t.replace(fP,"#")+e}function pP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Bc=()=>({left:window.scrollX,top:window.scrollY});function gP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Jp(t,e){return(history.state?history.state.position-e:-1)+t}const _u=new Map;function mP(t,e){_u.set(t,e)}function _P(t){const e=_u.get(t);return _u.delete(t),e}function yP(t){return typeof t=="string"||t&&typeof t=="object"}function Ev(t){return typeof t=="string"||typeof t=="symbol"}let ze=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Tv=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Ys(t,e){return Ve(new Error,{type:t,[Tv]:!0},e)}function Bn(t,e){return t instanceof Error&&Tv in t&&(e==null||!!(t.type&e))}const vP=["params","query","hash"];function EP(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of vP)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function TP(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(gv," "),i=s.indexOf("="),o=vo(i<0?s:s.slice(0,i)),c=i<0?null:vo(s.slice(i+1));if(o in e){let l=e[o];dn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Yp(t){let e="";for(let n in t){const r=t[n];if(n=nP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(s=>s&&gu(s)):[r&&gu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function IP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wP=Symbol(""),Xp=Symbol(""),jc=Symbol(""),xh=Symbol(""),yu=Symbol("");function Ci(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ys(ze.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):yP(g)?l(Ys(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function kl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(dv(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Er(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=GC(h)?h.default:h;o.mods[c]=h,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&Er(g,n,r,o,c,s)()}))}}return i}function AP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Js(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Js(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bP=()=>location.protocol+"//"+location.host;function Iv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Kp(c,"")}return Kp(n,t)+r+s}function SP(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Iv(t,location),R=n.value,C=e.value;let V=0;if(g){if(n.value=y,e.value=g,o&&o===R){o=null;return}V=C?g.position-C.position:0}else r(y);s.forEach($=>{$(n.value,R,{delta:V,type:mu.pop,direction:V?V>0?Pl.forward:Pl.back:Pl.unknown})})};function l(){o=n.value}function u(g){s.push(g);const y=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(y),y}function h(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ve({},g.state,{scroll:Bc()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:d}}function Zp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Bc():null}}function RP(t){const{history:e,location:n}=window,r={value:Iv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:bP()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[h?"replace":"assign"](g)}}function o(l,u){i(l,Ve({},e.state,Zp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const h=Ve({},s.value,e.state,{forward:l,scroll:Bc()});i(h.current,h,!0),i(l,Ve({},Zp(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function CP(t){t=hP(t);const e=RP(t),n=SP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:dP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let rs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var it=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(it||{});const PP={type:rs.Static,value:""},kP=/[a-zA-Z0-9_]/;function VP(t){if(!t)return[[]];if(t==="/")return[[PP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=it.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function d(){u&&(n===it.Static?i.push({type:rs.Static,value:u}):n===it.Param||n===it.ParamRegExp||n===it.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:rs.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==it.ParamRegExp){r=n,n=it.EscapeNext;continue}switch(n){case it.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=it.Param):g();break;case it.EscapeNext:g(),n=r;break;case it.Param:l==="("?n=it.ParamRegExp:kP.test(l)?g():(d(),n=it.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case it.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=it.ParamRegExpEnd:h+=l;break;case it.ParamRegExpEnd:d(),n=it.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===it.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const eg="[^/]+?",NP={sensitive:!1,strict:!1,start:!0,end:!0};var Dt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Dt||{});const DP=/[.+*?^${}()[\]/\\]/g;function OP(t,e){const n=Ve({},NP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[Dt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let y=Dt.Segment+(n.sensitive?Dt.BonusCaseSensitive:0);if(g.type===rs.Static)d||(s+="/"),s+=g.value.replace(DP,"\\$&"),y+=Dt.Static;else if(g.type===rs.Param){const{value:R,repeatable:C,optional:V,regexp:$}=g;i.push({name:R,repeatable:C,optional:V});const x=$||eg;if(x!==eg){y+=Dt.BonusCustomRegExp;try{`${x}`}catch(H){throw new Error(`Invalid custom RegExp for param "${R}" (${x}): `+H.message)}}let z=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(z=V&&u.length<2?`(?:/${z})`:"/"+z),V&&(z+="?"),s+=z,y+=Dt.Dynamic,V&&(y+=Dt.BonusOptional),C&&(y+=Dt.BonusRepeatable),x===".*"&&(y+=Dt.BonusWildcard)}h.push(y)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Dt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const y=h[g]||"",R=i[g-1];d[R.name]=y&&R.repeatable?y.split("/"):y}return d}function l(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const y of g)if(y.type===rs.Static)h+=y.value;else if(y.type===rs.Param){const{value:R,repeatable:C,optional:V}=y,$=R in u?u[R]:"";if(dn($)&&!C)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const x=dn($)?$.join("/"):$;if(!x)if(V)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function xP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Dt.Static+Dt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Dt.Static+Dt.Segment?1:-1:0}function wv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(tg(r))return 1;if(tg(s))return-1}return s.length-r.length}function tg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LP={strict:!1,end:!0,sensitive:!1};function MP(t,e,n){const r=OP(VP(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FP(t,e){const n=[],r=new Map;e=zp(LP,e);function s(d){return r.get(d)}function i(d,g,y){const R=!y,C=rg(d);C.aliasOf=y&&y.record;const V=zp(e,d),$=[C];if("alias"in d){const H=typeof d.alias=="string"?[d.alias]:d.alias;for(const Y of H)$.push(rg(Ve({},C,{components:y?y.record.components:C.components,path:Y,aliasOf:y?y.record:C})))}let x,z;for(const H of $){const{path:Y}=H;if(g&&Y[0]!=="/"){const le=g.record.path,I=le[le.length-1]==="/"?"":"/";H.path=g.record.path+(Y&&I+Y)}if(x=MP(H,g,V),y?y.alias.push(x):(z=z||x,z!==x&&z.alias.push(x),R&&d.name&&!sg(x)&&o(d.name)),Av(x)&&l(x),C.children){const le=C.children;for(let I=0;I<le.length;I++)i(le[I],x,y&&y.children[I])}y=y||x}return z?()=>{o(z)}:Ji}function o(d){if(Ev(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=jP(d,n);n.splice(g,0,d),d.record.name&&!sg(d)&&r.set(d.record.name,d)}function u(d,g){let y,R={},C,V;if("name"in d&&d.name){if(y=r.get(d.name),!y)throw Ys(ze.MATCHER_NOT_FOUND,{location:d});V=y.record.name,R=Ve(ng(g.params,y.keys.filter(z=>!z.optional).concat(y.parent?y.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),d.params&&ng(d.params,y.keys.map(z=>z.name))),C=y.stringify(R)}else if(d.path!=null)C=d.path,y=n.find(z=>z.re.test(C)),y&&(R=y.parse(C),V=y.record.name);else{if(y=g.name?r.get(g.name):n.find(z=>z.re.test(g.path)),!y)throw Ys(ze.MATCHER_NOT_FOUND,{location:d,currentLocation:g});V=y.record.name,R=Ve({},g.params,d.params),C=y.stringify(R)}const $=[];let x=y;for(;x;)$.unshift(x.record),x=x.parent;return{name:V,path:C,params:R,matched:$,meta:BP($)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function ng(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function sg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BP(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function jP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wv(t,e[i])<0?r=i:n=i+1}const s=$P(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $P(t){let e=t;for(;e=e.parent;)if(Av(e)&&wv(t,e)===0)return e}function Av({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ig(t){const e=Xt(jc),n=Xt(xh),r=ie(()=>{const l=At(t.to);return e.resolve(l)}),s=ie(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(Js.bind(null,h));if(g>-1)return g;const y=og(l[u-2]);return u>1&&og(h)===y&&d[d.length-1].path!==y?d.findIndex(Js.bind(null,l[u-2])):g}),i=ie(()=>s.value>-1&&zP(n.params,r.value.params)),o=ie(()=>s.value>-1&&s.value===n.matched.length-1&&vv(n.params,r.value.params));function c(l={}){if(WP(l)){const u=e[At(t.replace)?"replace":"push"](At(t.to)).catch(Ji);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function qP(t){return t.length===1?t[0]:t}const HP=Xs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ig,setup(t,{slots:e}){const n=gs(ig(t)),{options:r}=Xt(jc),s=ie(()=>({[ag(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ag(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&qP(e.default(n));return t.custom?i:xu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GP=HP;function WP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function og(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ag=(t,e,n)=>t??e??n,KP=Xs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(yu),s=ie(()=>t.route||r.value),i=Xt(Xp,0),o=ie(()=>{let u=At(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),c=ie(()=>s.value.matched[o.value]);oa(Xp,ie(()=>o.value+1)),oa(wP,c),oa(yu,s);const l=Je();return Bi(()=>[l.value,c.value,t.name],([u,h,d],[g,y,R])=>{h&&(h.instances[d]=u,y&&y!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=y.leaveGuards),h.updateGuards.size||(h.updateGuards=y.updateGuards))),u&&h&&(!y||!Js(h,y)||!g)&&(h.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=c.value,g=d&&d.components[h];if(!g)return cg(n.default,{Component:g,route:u});const y=d.props[h],R=y?y===!0?u.params:typeof y=="function"?y(u):y:null,V=xu(g,Ve({},R,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return cg(n.default,{Component:V,route:u})||V}}});function cg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const QP=KP;function JP(t){const e=FP(t.routes,t),n=t.parseQuery||TP,r=t.stringifyQuery||Yp,s=t.history,i=Ci(),o=Ci(),c=Ci(),l=SE(gr);let u=gr;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Rl.bind(null,U=>""+U),d=Rl.bind(null,sP),g=Rl.bind(null,vo);function y(U,re){let ee,oe;return Ev(U)?(ee=e.getRecordMatcher(U),oe=re):oe=U,e.addRoute(oe,ee)}function R(U){const re=e.getRecordMatcher(U);re&&e.removeRoute(re)}function C(){return e.getRoutes().map(U=>U.record)}function V(U){return!!e.getRecordMatcher(U)}function $(U,re){if(re=Ve({},re||l.value),typeof U=="string"){const P=Cl(n,U,re.path),M=e.resolve({path:P.path},re),j=s.createHref(P.fullPath);return Ve(P,M,{params:g(M.params),hash:vo(P.hash),redirectedFrom:void 0,href:j})}let ee;if(U.path!=null)ee=Ve({},U,{path:Cl(n,U.path,re.path).path});else{const P=Ve({},U.params);for(const M in P)P[M]==null&&delete P[M];ee=Ve({},U,{params:d(P)}),re.params=d(re.params)}const oe=e.resolve(ee,re),we=U.hash||"";oe.params=h(g(oe.params));const T=aP(r,Ve({},U,{hash:tP(we),path:oe.path})),S=s.createHref(T);return Ve({fullPath:T,hash:we,query:r===Yp?IP(U.query):U.query||{}},oe,{redirectedFrom:void 0,href:S})}function x(U){return typeof U=="string"?Cl(n,U,l.value.path):Ve({},U)}function z(U,re){if(u!==U)return Ys(ze.NAVIGATION_CANCELLED,{from:re,to:U})}function H(U){return I(U)}function Y(U){return H(Ve(x(U),{replace:!0}))}function le(U,re){const ee=U.matched[U.matched.length-1];if(ee&&ee.redirect){const{redirect:oe}=ee;let we=typeof oe=="function"?oe(U,re):oe;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=x(we):{path:we},we.params={}),Ve({query:U.query,hash:U.hash,params:we.path!=null?{}:U.params},we)}}function I(U,re){const ee=u=$(U),oe=l.value,we=U.state,T=U.force,S=U.replace===!0,P=le(ee,oe);if(P)return I(Ve(x(P),{state:typeof P=="object"?Ve({},we,P.state):we,force:T,replace:S}),re||ee);const M=ee;M.redirectedFrom=re;let j;return!T&&cP(r,oe,ee)&&(j=Ys(ze.NAVIGATION_DUPLICATED,{to:M,from:oe}),Ut(oe,oe,!0,!1)),(j?Promise.resolve(j):A(M,oe)).catch(L=>Bn(L)?Bn(L,ze.NAVIGATION_GUARD_REDIRECT)?L:pn(L):ye(L,M,oe)).then(L=>{if(L){if(Bn(L,ze.NAVIGATION_GUARD_REDIRECT))return I(Ve({replace:S},x(L.to),{state:typeof L.to=="object"?Ve({},we,L.to.state):we,force:T}),re||M)}else L=w(M,oe,!0,S,we);return b(M,oe,L),L})}function v(U,re){const ee=z(U,re);return ee?Promise.reject(ee):Promise.resolve()}function _(U){const re=tn.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(U):U()}function A(U,re){let ee;const[oe,we,T]=AP(U,re);ee=kl(oe.reverse(),"beforeRouteLeave",U,re);for(const P of oe)P.leaveGuards.forEach(M=>{ee.push(Er(M,U,re))});const S=v.bind(null,U,re);return ee.push(S),Tt(ee).then(()=>{ee=[];for(const P of i.list())ee.push(Er(P,U,re));return ee.push(S),Tt(ee)}).then(()=>{ee=kl(we,"beforeRouteUpdate",U,re);for(const P of we)P.updateGuards.forEach(M=>{ee.push(Er(M,U,re))});return ee.push(S),Tt(ee)}).then(()=>{ee=[];for(const P of T)if(P.beforeEnter)if(dn(P.beforeEnter))for(const M of P.beforeEnter)ee.push(Er(M,U,re));else ee.push(Er(P.beforeEnter,U,re));return ee.push(S),Tt(ee)}).then(()=>(U.matched.forEach(P=>P.enterCallbacks={}),ee=kl(T,"beforeRouteEnter",U,re,_),ee.push(S),Tt(ee))).then(()=>{ee=[];for(const P of o.list())ee.push(Er(P,U,re));return ee.push(S),Tt(ee)}).catch(P=>Bn(P,ze.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(U,re,ee){c.list().forEach(oe=>_(()=>oe(U,re,ee)))}function w(U,re,ee,oe,we){const T=z(U,re);if(T)return T;const S=re===gr,P=ks?history.state:{};ee&&(oe||S?s.replace(U.fullPath,Ve({scroll:S&&P&&P.scroll},we)):s.push(U.fullPath,we)),l.value=U,Ut(U,re,ee,S),pn()}let E;function J(){E||(E=s.listen((U,re,ee)=>{if(!nn.listening)return;const oe=$(U),we=le(oe,nn.currentRoute.value);if(we){I(Ve(we,{replace:!0,force:!0}),oe).catch(Ji);return}u=oe;const T=l.value;ks&&mP(Jp(T.fullPath,ee.delta),Bc()),A(oe,T).catch(S=>Bn(S,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?S:Bn(S,ze.NAVIGATION_GUARD_REDIRECT)?(I(Ve(x(S.to),{force:!0}),oe).then(P=>{Bn(P,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===mu.pop&&s.go(-1,!1)}).catch(Ji),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),ye(S,oe,T))).then(S=>{S=S||w(oe,T,!1),S&&(ee.delta&&!Bn(S,ze.NAVIGATION_CANCELLED)?s.go(-ee.delta,!1):ee.type===mu.pop&&Bn(S,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(oe,T,S)}).catch(Ji)}))}let N=Ci(),K=Ci(),se;function ye(U,re,ee){pn(U);const oe=K.list();return oe.length?oe.forEach(we=>we(U,re,ee)):console.error(U),Promise.reject(U)}function Lt(){return se&&l.value!==gr?Promise.resolve():new Promise((U,re)=>{N.add([U,re])})}function pn(U){return se||(se=!U,J(),N.list().forEach(([re,ee])=>U?ee(U):re()),N.reset()),U}function Ut(U,re,ee,oe){const{scrollBehavior:we}=t;if(!ks||!we)return Promise.resolve();const T=!ee&&_P(Jp(U.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return hc().then(()=>we(U,re,T)).then(S=>S&&gP(S)).catch(S=>ye(S,U,re))}const pt=U=>s.go(U);let Mn;const tn=new Set,nn={currentRoute:l,listening:!0,addRoute:y,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:C,resolve:$,options:t,push:H,replace:Y,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:K.add,isReady:Lt,install(U){U.component("RouterLink",GP),U.component("RouterView",QP),U.config.globalProperties.$router=nn,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>At(l)}),ks&&!Mn&&l.value===gr&&(Mn=!0,H(s.location).catch(oe=>{}));const re={};for(const oe in gr)Object.defineProperty(re,oe,{get:()=>l.value[oe],enumerable:!0});U.provide(jc,nn),U.provide(xh,xg(re)),U.provide(yu,l);const ee=U.unmount;tn.add(U),U.unmount=function(){tn.delete(U),tn.size<1&&(u=gr,E&&E(),E=null,l.value=gr,Mn=!1,se=!1),ee()}}};function Tt(U){return U.reduce((re,ee)=>re.then(()=>_(ee)),Promise.resolve())}return nn}function VV(){return Xt(jc)}function YP(t){return Xt(xh)}const XP={class:"bottom-nav"},ZP={class:"nav-icon-wrap"},ek=["innerHTML"],tk={class:"nav-label"},nk=Xs({__name:"BottomNav",setup(t){const e=YP(),n=[{to:"/",label:"Home",exact:!0,icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'},{to:"/batches",label:"Batches",exact:!1,icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>'},{to:"/log",label:"Log",exact:!0,icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>'},{to:"/reports",label:"Reports",exact:!0,icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'},{to:"/activity",label:"Activity",exact:!0,icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'}];function r(s){return s.exact?e.path===s.to:e.path.startsWith(s.to)}return(s,i)=>{const o=rm("RouterLink");return Le(),He("nav",XP,[(Le(),He(dt,null,aa(n,c=>et(o,{key:c.to,to:c.to,class:qt(["nav-item",{active:r(c)}])},{default:ba(()=>[O("div",ZP,[O("div",{class:"nav-icon",innerHTML:c.icon},null,8,ek)]),O("span",tk,Pe(c.label),1)]),_:2},1032,["to","class"])),64))])}}}),bv=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rk=bv(nk,[["__scopeId","data-v-c0154ad0"]]),sk={id:"app-root"},ik={key:0,class:"auth-loading"},ok={class:"auth-loading-text"},ak={key:1,class:"login-screen"},ck=Xs({__name:"App",setup(t){const e=FC(),n=hv(),r=jC(),s=fv(),{runChecks:i}=HC(),o=Vs(),c=Nh(),l=av(),u=cv(),h=Dh(),d=UC(),g=BC(),y=lv(),R=uv(),C=["Loading farm…","Checking account…","Syncing data…"],V=Je(C[0]);let $=0;async function x(H){await Promise.all([o.init(H),c.init(H),l.init(H),u.init(H),h.init(H),d.init(H),g.init(H),y.init(H),R.init(H),n.init(H),r.init(H),s.init(H)]),H&&setTimeout(()=>i(),3e3)}Pu(async()=>{const H=setInterval(()=>{$=($+1)%C.length,V.value=C[$]},900);await e.loadUser(),clearInterval(H),await x(e.uid)});function z(){e.signIn()}return(H,Y)=>{const le=rm("RouterView");return Le(),He("div",sk,[At(e).ready?At(e).uid?(Le(),He(dt,{key:2},[et(le,null,{default:ba(({Component:I})=>[et(XT,{name:"page",mode:"out-in"},{default:ba(()=>[(Le(),Pa(iT(I)))]),_:2},1024)]),_:1}),et(rk)],64)):(Le(),He("div",ak,[O("div",{class:"login-card"},[Y[1]||(Y[1]=xT('<div class="login-top-bar"></div><div class="login-logo-area"><div class="login-icon">🐔</div><div class="login-title">Vue Chicken</div><div class="login-subtitle">Poultry farm manager</div></div><p class="login-desc">Sign in to access your farm records and track performance.</p>',3)),O("button",{class:"login-btn",onClick:z}," Log in to your farm "),Y[2]||(Y[2]=O("p",{class:"auth-footnote"},"Your account is handled securely. No password needed.",-1))])])):(Le(),He("div",ik,[Y[0]||(Y[0]=O("div",{class:"auth-loading-icon"},"🐔",-1)),O("div",ok,Pe(V.value),1)]))])}}}),lk="modulepreload",uk=function(t){return"/"+t},lg={},mr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=uk(l),l in lg)return;lg[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":lk,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,y)=>{d.addEventListener("load",g),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},hk=["width","height","viewBox"],fk=["stop-color"],dk=["stop-color"],pk=["d","fill"],gk=["d","stroke"],mk=["cx","cy","fill"],_k=Xs({__name:"SparkLine",props:{data:{},color:{default:"#F5A623"},width:{default:"100%"},height:{default:48}},setup(t){const e=t,n=`sg-${Math.random().toString(36).slice(2,8)}`,r=ie(()=>Number(e.height)||48),s=ie(()=>{const u=e.data;if(!u||u.length<2)return[];const h=Math.min(...u),g=Math.max(...u)-h||1,y=5;return u.map((R,C)=>({x:C/(u.length-1)*200,y:r.value-y-(R-h)/g*(r.value-y*2)}))});function i(u){if(u.length<2)return"";let h=`M ${u[0].x},${u[0].y}`;for(let d=1;d<u.length;d++){const g=u[d-1].x+(u[d].x-u[d-1].x)*.5;h+=` C ${g},${u[d-1].y} ${g},${u[d].y} ${u[d].x},${u[d].y}`}return h}const o=ie(()=>i(s.value)),c=ie(()=>{const u=s.value;return u.length?`${i(u)} L ${u[u.length-1].x},${r.value} L 0,${r.value} Z`:""}),l=ie(()=>s.value[s.value.length-1]||null);return(u,h)=>(Le(),He("svg",{width:t.width,height:t.height,viewBox:`0 0 200 ${r.value}`,preserveAspectRatio:"none",style:{display:"block",width:"100%",overflow:"visible"}},[O("defs",null,[O("linearGradient",{id:n,x1:"0",y1:"0",x2:"0",y2:"1"},[O("stop",{offset:"0%","stop-color":t.color,"stop-opacity":"0.28"},null,8,fk),O("stop",{offset:"100%","stop-color":t.color,"stop-opacity":"0"},null,8,dk)])]),c.value?(Le(),He("path",{key:0,d:c.value,fill:`url(#${n})`},null,8,pk)):Ar("",!0),o.value?(Le(),He("path",{key:1,d:o.value,stroke:t.color,"stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gk)):Ar("",!0),l.value?(Le(),He("circle",{key:2,cx:l.value.x,cy:l.value.y,r:"3",fill:t.color},null,8,mk)):Ar("",!0)],8,hk))}});function Pi(t,e="$"){return`${e}${t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function NV(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}function sa(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short"})}function yk(){return new Date().toISOString().split("T")[0]}function DV(){const t=new Date;return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function vk(t,e){const n=new Date(t);return Math.floor((new Date().getTime()-n.getTime())/(1e3*60*60*24))}function Ek(t){return Math.floor(vk(t)/7)}function Tk(t,e){return e?parseFloat((t/e*100).toFixed(1)):0}const Ik={class:"page"},wk={class:"page-header"},Ak={class:"flex-between"},bk={class:"greeting"},Sk={class:"section"},Rk={class:"hero-sign"},Ck={class:"hero-meta"},Pk={class:"hero-meta-item"},kk={class:"hero-meta-val text-green"},Vk={class:"hero-meta-item"},Nk={class:"hero-meta-val text-red"},Dk={class:"hero-meta-item"},Ok={key:0,class:"hero-spark"},xk={class:"section"},Lk={class:"stat-row"},Mk={class:"stat-row-body"},Fk={class:"stat-row-sub"},Uk={class:"stat-row-value text-egg"},Bk={class:"stat-row"},jk={class:"stat-row-body"},$k={class:"stat-row-sub"},qk={class:"stat-row-value"},Hk={class:"stat-row-body"},Gk={class:"stat-row-sub"},Wk={class:"stat-row"},zk={class:"stat-row-value text-amber"},Kk={key:0,class:"section"},Qk={class:"flex-1 text-sm",style:{color:"var(--amber2)"}},Jk={key:1,class:"section"},Yk={class:"section-header"},Xk={class:"batch-list"},Zk=["onClick"],eV={class:"batch-icon"},tV={class:"flex-1 min-w-0"},nV={class:"batch-name"},rV={class:"batch-meta"},sV={key:2,class:"section"},iV={class:"onboard-card card"},oV={class:"onboard-modes"},aV={key:3,class:"section"},cV={class:"mode-pills"},lV={class:"mode-pill egg-pill"},uV={class:"mode-pill-val"},hV={class:"mode-pill-total"},fV={class:"mode-pill meat-pill"},dV={class:"mode-pill-val"},pV={class:"mode-pill-total"},gV={key:4,class:"section"},mV={class:"card",style:{padding:"4px 14px"}},_V={class:"flex-1 min-w-0"},yV={class:"text-sm font-bold",style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},vV={class:"text-xs text-muted"},EV={class:"text-xxs text-dim flex-shrink-0"},TV=Xs({__name:"DashboardView",setup(t){const e=Vs(),n=av(),r=cv(),s=Dh(),i=Nh(),{settings:o}=uv(),c=ie(()=>o.currencySymbol),l=new Date().getHours(),u=l<12?"Good morning 🌅":l<17?"Good afternoon ☀️":"Good evening 🌙",h=ie(()=>e.active),d=ie(()=>h.value.filter(J=>J.mode==="egg").length),g=ie(()=>h.value.filter(J=>J.mode==="meat").length),y=ie(()=>h.value.reduce((J,N)=>J+N.currentCount,0)),R=ie(()=>h.value.filter(J=>J.mode==="meat").reduce((J,N)=>J+N.currentCount,0)),C=ie(()=>n.totalAll),V=ie(()=>r.totalAll),$=ie(()=>V.value-C.value),x=ie(()=>s.totalAll),z=ie(()=>i.totalAll),H=ie(()=>{const J=yk();return i.collections.filter(N=>N.date===J).reduce((N,K)=>N+K.totalEggs,0)}),Y=ie(()=>{const J=e.batches.reduce((N,K)=>N+K.initialCount,0);return J?(x.value/J*100).toFixed(1):"0.0"}),le=ie(()=>Number(Y.value)>5),I=ie(()=>{const J=h.value.reduce((N,K)=>N+K.initialCount,0);return!J||!C.value?0:C.value/J}),v=ie(()=>V.value?($.value/V.value*100).toFixed(1)+"%":"0%"),_=ie(()=>r.revenues.slice(0,16).map(J=>J.amount).reverse());function A(J){const N=r.revenues.filter(se=>se.batchId===J).reduce((se,ye)=>se+ye.amount,0),K=n.expenses.filter(se=>se.batchId===J).reduce((se,ye)=>se+ye.amount,0);return N-K}function b(J){const N=s.records.filter(K=>K.batchId===J.id).reduce((K,se)=>K+se.count,0);return Tk(N,J.initialCount)}const w=ie(()=>{const J=[];return h.value.forEach(N=>{s.records.filter(se=>se.batchId===N.id).reduce((se,ye)=>se+ye.count,0)/N.initialCount*100>5&&J.push(`"${N.name}" mortality > 5% — inspect flock health.`)}),J.slice(0,2)}),E=ie(()=>{const J=[];return i.collections.slice(0,2).forEach(N=>{const K=e.getById(N.batchId);J.push({icon:"🥚",color:"#EAB308",title:`${N.totalEggs} eggs collected`,sub:(K==null?void 0:K.name)||"",date:sa(N.date)})}),s.records.slice(0,2).forEach(N=>{const K=e.getById(N.batchId);J.push({icon:"💀",color:"#FF4060",title:`${N.count} bird loss — ${N.cause}`,sub:(K==null?void 0:K.name)||"",date:sa(N.date)})}),n.expenses.slice(0,2).forEach(N=>{const K=e.getById(N.batchId);J.push({icon:"💰",color:"#F5A623",title:N.description,sub:(K==null?void 0:K.name)||"",date:sa(N.date)})}),r.revenues.slice(0,2).forEach(N=>{const K=e.getById(N.batchId);J.push({icon:"💵",color:"#00C896",title:`Sold ${N.quantity} ${N.type}`,sub:(K==null?void 0:K.name)||"",date:sa(N.date)})}),J.slice(0,5)});return(J,N)=>(Le(),He("div",Ik,[O("div",wk,[O("div",Ak,[O("div",null,[O("div",bk,Pe(At(u)),1),N[5]||(N[5]=O("div",{class:"page-title"},"Farm Overview",-1))]),O("button",{class:"add-batch-btn",onClick:N[0]||(N[0]=K=>J.$router.push("/batches/new"))},[...N[6]||(N[6]=[O("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.8","stroke-linecap":"round"},[O("path",{d:"M12 5v14M5 12h14"})],-1),ua(" New Batch ",-1)])])])]),O("div",Sk,[O("div",{class:qt(["hero-card",$.value>=0?"hero-profit":"hero-loss"])},[N[15]||(N[15]=O("div",{class:"hero-bg-orb"},null,-1)),N[16]||(N[16]=O("div",{class:"hero-label"},"Total Farm P&L",-1)),O("div",{class:qt(["hero-amount",$.value>=0?"text-green":"text-red"])},[O("span",Rk,Pe($.value>=0?"+":"−"),1),ua(Pe(At(Pi)(Math.abs($.value),c.value)),1)],2),O("div",Ck,[O("div",Pk,[N[8]||(N[8]=O("div",{class:"hero-meta-dot green-dot"},null,-1)),O("div",null,[N[7]||(N[7]=O("div",{class:"hero-meta-label"},"Revenue",-1)),O("div",kk,Pe(At(Pi)(V.value,c.value)),1)])]),N[13]||(N[13]=O("div",{class:"hero-meta-div"},null,-1)),O("div",Vk,[N[10]||(N[10]=O("div",{class:"hero-meta-dot red-dot"},null,-1)),O("div",null,[N[9]||(N[9]=O("div",{class:"hero-meta-label"},"Expenses",-1)),O("div",Nk,Pe(At(Pi)(C.value,c.value)),1)])]),N[14]||(N[14]=O("div",{class:"hero-meta-div"},null,-1)),O("div",Dk,[N[12]||(N[12]=O("div",{class:"hero-meta-dot amber-dot"},null,-1)),O("div",null,[N[11]||(N[11]=O("div",{class:"hero-meta-label"},"Margin",-1)),O("div",{class:qt(["hero-meta-val",$.value>=0?"text-green":"text-red"])},Pe(v.value),3)])])]),_.value.length>2?(Le(),He("div",Ok,[et(_k,{data:_.value,color:$.value>=0?"#00C896":"#FF4060",width:"100%",height:"40"},null,8,["data","color"])])):Ar("",!0)],2)]),O("div",xk,[O("div",{class:"stats-group",onClick:N[1]||(N[1]=K=>J.$router.push("/batches"))},[O("div",Lk,[N[18]||(N[18]=O("div",{class:"stat-row-icon",style:{background:"var(--egg-dim)"}},"🥚",-1)),O("div",Mk,[N[17]||(N[17]=O("div",{class:"stat-row-label"},"Eggs Today",-1)),O("div",Fk,Pe(z.value.toLocaleString())+" total collected",1)]),O("div",Uk,Pe(H.value.toLocaleString()),1)]),O("div",Bk,[N[20]||(N[20]=O("div",{class:"stat-row-icon",style:{background:"rgba(59,126,255,0.10)"}},"🐔",-1)),O("div",jk,[N[19]||(N[19]=O("div",{class:"stat-row-label"},"Live Birds",-1)),O("div",$k,Pe(h.value.length)+" active batches",1)]),O("div",qk,Pe(y.value.toLocaleString()),1)]),O("div",{class:qt(["stat-row",le.value?"stat-warn-row":""])},[O("div",{class:"stat-row-icon",style:Yi({background:le.value?"var(--red-dim)":"var(--green-dim)"})},"📉",4),O("div",Hk,[N[21]||(N[21]=O("div",{class:"stat-row-label"},"Mortality Rate",-1)),O("div",Gk,Pe(x.value)+" birds lost",1)]),O("div",{class:qt(["stat-row-value",le.value?"text-red":"text-green"])},Pe(Y.value)+"%",3)],2),O("div",Wk,[N[22]||(N[22]=O("div",{class:"stat-row-icon",style:{background:"var(--amber-dim)"}},"💸",-1)),N[23]||(N[23]=O("div",{class:"stat-row-body"},[O("div",{class:"stat-row-label"},"Avg Cost / Bird"),O("div",{class:"stat-row-sub"},"all active batches")],-1)),O("div",zk,Pe(At(Pi)(I.value,c.value)),1)])])]),w.value.length?(Le(),He("div",Kk,[(Le(!0),He(dt,null,aa(w.value,(K,se)=>(Le(),He("div",{class:"alert-strip",key:se},[N[24]||(N[24]=O("div",{class:"alert-strip-icon"},"⚠️",-1)),O("div",Qk,Pe(K),1)]))),128))])):Ar("",!0),h.value.length?(Le(),He("div",Jk,[O("div",Yk,[N[25]||(N[25]=O("span",{class:"section-title"},"Active Batches",-1)),O("button",{class:"section-action",onClick:N[2]||(N[2]=K=>J.$router.push("/batches"))},"See all →")]),O("div",Xk,[(Le(!0),He(dt,null,aa(h.value.slice(0,5),K=>(Le(),He("div",{key:K.id,class:qt(["batch-row",K.mode==="egg"?"batch-egg":"batch-meat"]),onClick:se=>J.$router.push(`/batches/${K.id}`)},[O("div",{class:qt(["batch-mode-stripe",K.mode==="egg"?"stripe-egg":"stripe-meat"])},null,2),O("div",eV,Pe(K.mode==="egg"?"🥚":"🍗"),1),O("div",tV,[O("div",nV,Pe(K.name),1),O("div",rV,[O("span",null,Pe(K.currentCount)+" birds",1),N[26]||(N[26]=O("span",{class:"dot"},"·",-1)),O("span",null,"Wk "+Pe(At(Ek)(K.startDate)),1),N[27]||(N[27]=O("span",{class:"dot"},"·",-1)),O("span",{class:qt(A(K.id)>=0?"profit-positive":"profit-negative")},Pe(A(K.id)>=0?"+":"")+Pe(At(Pi)(A(K.id),c.value)),3)])]),O("div",{class:qt(["batch-mort",b(K)>5?"text-red":"text-green"])},[ua(Pe(b(K).toFixed(1))+"% ",1),N[28]||(N[28]=O("div",{class:"text-xxs text-dim"},"mort.",-1))],2),N[29]||(N[29]=O("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--text3)","stroke-width":"2.5","stroke-linecap":"round"},[O("path",{d:"M9 18l6-6-6-6"})],-1))],10,Zk))),128))])])):(Le(),He("div",sV,[O("div",iV,[N[32]||(N[32]=O("div",{class:"onboard-emoji"},"🐣",-1)),N[33]||(N[33]=O("div",{class:"onboard-title"},"Start Your First Flock",-1)),N[34]||(N[34]=O("div",{class:"onboard-desc"},"Track every egg, every cost, and every profit from day one. Choose egg or meat mode to get started.",-1)),O("div",oV,[O("button",{class:"onboard-mode egg-mode",onClick:N[3]||(N[3]=K=>J.$router.push("/batches/new?mode=egg"))},[...N[30]||(N[30]=[O("span",{class:"onboard-mode-icon"},"🥚",-1),O("span",{class:"onboard-mode-label"},"Egg Layers",-1)])]),O("button",{class:"onboard-mode meat-mode",onClick:N[4]||(N[4]=K=>J.$router.push("/batches/new?mode=meat"))},[...N[31]||(N[31]=[O("span",{class:"onboard-mode-icon"},"🍗",-1),O("span",{class:"onboard-mode-label"},"Broilers",-1)])])])])])),h.value.length?(Le(),He("div",aV,[O("div",cV,[O("div",lV,[N[36]||(N[36]=O("span",{class:"mode-pill-icon"},"🥚",-1)),O("div",null,[O("div",uV,Pe(d.value),1),N[35]||(N[35]=O("div",{class:"mode-pill-label"},"Egg Batches",-1))]),O("div",hV,Pe(z.value.toLocaleString())+" eggs",1)]),O("div",fV,[N[38]||(N[38]=O("span",{class:"mode-pill-icon"},"🍗",-1)),O("div",null,[O("div",dV,Pe(g.value),1),N[37]||(N[37]=O("div",{class:"mode-pill-label"},"Meat Batches",-1))]),O("div",pV,Pe(R.value.toLocaleString())+" birds",1)])])])):Ar("",!0),E.value.length?(Le(),He("div",gV,[N[39]||(N[39]=O("div",{class:"section-header"},[O("span",{class:"section-title"},"Recent Activity")],-1)),O("div",mV,[(Le(!0),He(dt,null,aa(E.value,(K,se)=>(Le(),He("div",{key:se,class:"activity-row"},[O("div",{class:"activity-icon",style:Yi({background:K.color+"18",color:K.color})},Pe(K.icon),5),O("div",_V,[O("div",yV,Pe(K.title),1),O("div",vV,Pe(K.sub),1)]),O("div",EV,Pe(K.date),1)]))),128))])])):Ar("",!0),N[40]||(N[40]=O("div",{style:{height:"8px"}},null,-1))]))}}),IV=bv(TV,[["__scopeId","data-v-b03a995b"]]),wV=JP({history:CP("/"),routes:[{path:"/",name:"dashboard",component:IV},{path:"/batches",name:"batches",component:()=>mr(()=>import("./BatchesView-DbZeLsIo.js"),__vite__mapDeps([0,1]))},{path:"/batches/new",name:"batch-new",component:()=>mr(()=>import("./AddBatchView-Bfl_Uifu.js"),__vite__mapDeps([2,3]))},{path:"/batches/:id",name:"batch-detail",component:()=>mr(()=>import("./BatchDetailView-6pzzj6-m.js").then(t=>t.B),__vite__mapDeps([4,5]))},{path:"/batches/:id/edit",name:"batch-edit",component:()=>mr(()=>import("./AddBatchView-Bfl_Uifu.js"),__vite__mapDeps([2,3]))},{path:"/log",name:"log",component:()=>mr(()=>import("./LogEntryView-BqjYuoEQ.js"),__vite__mapDeps([6,7]))},{path:"/reports",name:"reports",component:()=>mr(()=>import("./ReportsView-wL9CHUBd.js"),__vite__mapDeps([8,9]))},{path:"/settings",name:"settings",component:()=>mr(()=>import("./SettingsView-DDCBgT6F.js"),__vite__mapDeps([10,11]))},{path:"/activity",name:"activity",component:()=>mr(()=>import("./ActivityLogView-F8qd6m4I.js"),__vite__mapDeps([12,13]))}],scrollBehavior(){return{top:0}}}),Lh=AI(ck);Lh.use(RI());Lh.use(wV);Lh.mount("#app");export{FC as A,Vs as B,Nh as C,BC as D,av as E,dt as F,hv as G,lv as H,Dh as I,fv as J,cv as K,YP as L,VV as M,uv as N,UC as O,CV as P,RV as Q,Bi as R,Ek as S,bV as T,ba as U,AV as V,PV as W,mr as _,XT as a,bv as b,_k as c,ie as d,O as e,Pa as f,Ar as g,He as h,xT as i,ua as j,et as k,Xs as l,Pi as m,NV as n,qt as o,Yi as p,DV as q,Le as r,Tk as s,Je as t,aa as u,SV as v,Pe as w,yk as x,At as y,jC as z};
