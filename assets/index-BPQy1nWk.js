(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dp={exports:{}},ul={},Up={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),L_=Symbol.for("react.portal"),b_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),U_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),F_=Symbol.for("react.forward_ref"),O_=Symbol.for("react.suspense"),z_=Symbol.for("react.memo"),k_=Symbol.for("react.lazy"),Jf=Symbol.iterator;function B_(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var Np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Fp={};function vs(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Np}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Op(){}Op.prototype=vs.prototype;function jc(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Np}var Yc=jc.prototype=new Op;Yc.constructor=jc;Ip(Yc,vs.prototype);Yc.isPureReactComponent=!0;var ed=Array.isArray,zp=Object.prototype.hasOwnProperty,qc={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Bp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zp.call(e,i)&&!kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:qc.current}}function H_(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $c(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function G_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var td=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G_(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case L_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Il(o,0):i,ed(r)?(n="",t!=null&&(n=t.replace(td,"$&/")+"/"),xa(r,e,n,"",function(u){return u})):r!=null&&($c(r)&&(r=H_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(td,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ed(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Il(s,a);o+=xa(s,e,n,l,r)}else if(l=B_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Il(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function V_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},ya={transition:null},W_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:ya,ReactCurrentOwner:qc};function Hp(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Lo,forEach:function(t,e,n){Lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lo(t,function(){e++}),e},toArray:function(t){return Lo(t,function(e){return e})||[]},only:function(t){if(!$c(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=vs;He.Fragment=b_;He.Profiler=U_;He.PureComponent=jc;He.StrictMode=D_;He.Suspense=O_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_;He.act=Hp;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ip({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zp.call(e,l)&&!kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:I_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N_,_context:t},t.Consumer=t};He.createElement=Bp;He.createFactory=function(t){var e=Bp.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:F_,render:t}};He.isValidElement=$c;He.lazy=function(t){return{$$typeof:k_,_payload:{_status:-1,_result:t},_init:V_}};He.memo=function(t,e){return{$$typeof:z_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};He.unstable_act=Hp;He.useCallback=function(t,e){return Yt.current.useCallback(t,e)};He.useContext=function(t){return Yt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Yt.current.useEffect(t,e)};He.useId=function(){return Yt.current.useId()};He.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Yt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};He.useRef=function(t){return Yt.current.useRef(t)};He.useState=function(t){return Yt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Yt.current.useTransition()};He.version="18.3.1";Up.exports=He;var vn=Up.exports;const X_=P_(vn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=vn,Y_=Symbol.for("react.element"),q_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,K_=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function Gp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$_.call(e,i)&&!Z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Y_,type:t,key:s,ref:o,props:r,_owner:K_.current}}ul.Fragment=q_;ul.jsx=Gp;ul.jsxs=Gp;Dp.exports=ul;var an=Dp.exports,Hu={},Vp={exports:{}},pn={},Wp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,O){var V=b.length;b.push(O);e:for(;0<V;){var K=V-1>>>1,Z=b[K];if(0<r(Z,O))b[K]=O,b[V]=Z,V=K;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var O=b[0],V=b.pop();if(V!==O){b[0]=V;e:for(var K=0,Z=b.length,j=Z>>>1;K<j;){var Q=2*(K+1)-1,re=b[Q],pe=Q+1,he=b[pe];if(0>r(re,V))pe<Z&&0>r(he,re)?(b[K]=he,b[pe]=V,K=pe):(b[K]=re,b[Q]=V,K=Q);else if(pe<Z&&0>r(he,V))b[K]=he,b[pe]=V,K=pe;else break e}}return O}function r(b,O){var V=b.sortIndex-O.sortIndex;return V!==0?V:b.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,x=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=b)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function M(b){if(S=!1,g(b),!x)if(n(l)!==null)x=!0,D(P);else{var O=n(u);O!==null&&B(M,O.startTime-b)}}function P(b,O){x=!1,S&&(S=!1,c(N),N=-1),p=!0;var V=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||b&&!C());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Z=K(d.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var j=!0;else{var Q=n(u);Q!==null&&B(M,Q.startTime-O),j=!1}return j}finally{d=null,h=V,p=!1}}var R=!1,A=null,N=-1,E=5,_=-1;function C(){return!(t.unstable_now()-_<E)}function I(){if(A!==null){var b=t.unstable_now();_=b;var O=!0;try{O=A(!0,b)}finally{O?F():(R=!1,A=null)}}else R=!1}var F;if(typeof v=="function")F=function(){v(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=I,F=function(){G.postMessage(null)}}else F=function(){m(I,0)};function D(b){A=b,R||(R=!0,F())}function B(b,O){N=m(function(){b(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,D(P))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var V=h;h=O;try{return b()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,O){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var V=h;h=b;try{return O()}finally{h=V}},t.unstable_scheduleCallback=function(b,O,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,b){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=V+Z,b={id:f++,callback:O,priorityLevel:b,startTime:V,expirationTime:Z,sortIndex:-1},V>K?(b.sortIndex=V,e(u,b),n(l)===null&&b===n(u)&&(S?(c(N),N=-1):S=!0,B(M,V-K))):(b.sortIndex=Z,e(l,b),x||p||(x=!0,D(P))),b},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(b){var O=h;return function(){var V=h;h=O;try{return b.apply(this,arguments)}finally{h=V}}}})(Xp);Wp.exports=Xp;var Q_=Wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=vn,hn=Q_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,Qs={};function yr(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Qs[t]=e,t=0;t<e.length;t++)jp.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},id={};function tv(t){return Gu.call(id,t)?!0:Gu.call(nd,t)?!1:ev.test(t)?id[t]=!0:(nd[t]=!0,!1)}function nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iv(t,e,n,i){if(e===null||typeof e>"u"||nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kc=/[\-:]([a-z])/g;function Zc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kc,Zc);Dt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kc,Zc);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kc,Zc);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qc(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iv(e,n,r,i)&&(n=null),i||r===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=rd&&t[rd]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Fl;function zs(t){if(Fl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fl=e&&e[1]||""}return`
`+Fl+t}var Ol=!1;function zl(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function rv(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case kr:return"Portal";case Vu:return"Profiler";case Jc:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Yp:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=Kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=ov(t))}function Zp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qp(t,e){e=e.checked,e!=null&&Qc(t,"checked",e,!1)}function qu(t,e){Qp(t,e);var n=Bi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ad(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ks(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function Jp(t,e){var n=Bi(e.value),i=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,tm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},av=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){av.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(t,e){if(e){if(lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,es=null,ts=null;function ud(t){if(t=So(t)){if(typeof tc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=pl(e),tc(t.stateNode,t.type,e))}}function rm(t){es?ts?ts.push(t):ts=[t]:es=t}function sm(){if(es){var t=es,e=ts;if(ts=es=null,ud(t),e)for(t=0;t<e.length;t++)ud(e[t])}}function om(t,e){return t(e)}function am(){}var kl=!1;function lm(t,e,n){if(kl)return t(e,n);kl=!0;try{return om(t,e,n)}finally{kl=!1,(es!==null||ts!==null)&&(am(),sm())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var i=pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var nc=!1;if(li)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){nc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{nc=!1}function uv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Vs=!1,Ua=null,Na=!1,ic=null,cv={onError:function(t){Vs=!0,Ua=t}};function fv(t,e,n,i,r,s,o,a,l){Vs=!1,Ua=null,uv.apply(cv,arguments)}function dv(t,e,n,i,r,s,o,a,l){if(fv.apply(this,arguments),Vs){if(Vs){var u=Ua;Vs=!1,Ua=null}else throw Error(ne(198));Na||(Na=!0,ic=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cd(t){if(Sr(t)!==t)throw Error(ne(188))}function hv(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cd(r),t;if(s===i)return cd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function cm(t){return t=hv(t),t!==null?fm(t):null}function fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fm(t);if(e!==null)return e;t=t.sibling}return null}var dm=hn.unstable_scheduleCallback,fd=hn.unstable_cancelCallback,pv=hn.unstable_shouldYield,mv=hn.unstable_requestPaint,mt=hn.unstable_now,gv=hn.unstable_getCurrentPriorityLevel,rf=hn.unstable_ImmediatePriority,hm=hn.unstable_UserBlockingPriority,Ia=hn.unstable_NormalPriority,_v=hn.unstable_LowPriority,pm=hn.unstable_IdlePriority,cl=null,jn=null;function vv(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Sv,xv=Math.log,yv=Math.LN2;function Sv(t){return t>>>=0,t===0?32:31-(xv(t)/yv|0)|0}var No=64,Io=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bs(a):(s&=o,s!==0&&(i=Bs(s)))}else o=n&~r,o!==0?i=Bs(o):s!==0&&(i=Bs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ev(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mm(){var t=No;return No<<=1,!(No&4194240)&&(No=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function Tv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _m,of,vm,xm,ym,sc=!1,Fo=[],Pi=null,Li=null,bi=null,to=new Map,no=new Map,Mi=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function As(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=So(e),e!==null&&of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Av(t,e,n,i,r){switch(e){case"focusin":return Pi=As(Pi,t,e,n,i,r),!0;case"dragenter":return Li=As(Li,t,e,n,i,r),!0;case"mouseover":return bi=As(bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return to.set(s,As(to.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,no.set(s,As(no.get(s)||null,t,e,n,i,r)),!0}return!1}function Sm(t){var e=sr(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=um(n),e!==null){t.blockedOn=e,ym(t.priority,function(){vm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ec=i,n.target.dispatchEvent(i),ec=null}else return e=So(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function hd(t,e,n){Sa(t)&&n.delete(e)}function Rv(){sc=!1,Pi!==null&&Sa(Pi)&&(Pi=null),Li!==null&&Sa(Li)&&(Li=null),bi!==null&&Sa(bi)&&(bi=null),to.forEach(hd),no.forEach(hd)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,Rv)))}function io(t){function e(r){return Rs(r,t)}if(0<Fo.length){Rs(Fo[0],t);for(var n=1;n<Fo.length;n++){var i=Fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pi!==null&&Rs(Pi,t),Li!==null&&Rs(Li,t),bi!==null&&Rs(bi,t),to.forEach(e),no.forEach(e),n=0;n<Mi.length;n++)i=Mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)Sm(n),n.blockedOn===null&&Mi.shift()}var ns=hi.ReactCurrentBatchConfig,Oa=!0;function Cv(t,e,n,i){var r=Ye,s=ns.transition;ns.transition=null;try{Ye=1,af(t,e,n,i)}finally{Ye=r,ns.transition=s}}function Pv(t,e,n,i){var r=Ye,s=ns.transition;ns.transition=null;try{Ye=4,af(t,e,n,i)}finally{Ye=r,ns.transition=s}}function af(t,e,n,i){if(Oa){var r=oc(t,e,n,i);if(r===null)Kl(t,e,i,za,n),dd(t,i);else if(Av(r,t,e,n,i))i.stopPropagation();else if(dd(t,i),e&4&&-1<wv.indexOf(t)){for(;r!==null;){var s=So(r);if(s!==null&&_m(s),s=oc(t,e,n,i),s===null&&Kl(t,e,i,za,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kl(t,e,i,null,n)}}var za=null;function oc(t,e,n,i){if(za=null,t=nf(i),t=sr(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function Mm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case rf:return 1;case hm:return 4;case Ia:case _v:return 16;case pm:return 536870912;default:return 16}default:return 16}}var Ti=null,lf=null,Ma=null;function Em(){if(Ma)return Ma;var t,e=lf,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ma=r.slice(t,1<i?1-i:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function pd(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:pd,this.isPropagationStopped=pd,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=mn(xs),yo=ut({},xs,{view:0,detail:0}),Lv=mn(yo),Hl,Gl,Cs,fl=ut({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Hl=t.screenX-Cs.screenX,Gl=t.screenY-Cs.screenY):Gl=Hl=0,Cs=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),md=mn(fl),bv=ut({},fl,{dataTransfer:0}),Dv=mn(bv),Uv=ut({},yo,{relatedTarget:0}),Vl=mn(Uv),Nv=ut({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=mn(Nv),Fv=ut({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=mn(Fv),zv=ut({},xs,{data:0}),gd=mn(zv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hv[t])?!!e[t]:!1}function cf(){return Gv}var Vv=ut({},yo,{key:function(t){if(t.key){var e=kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=mn(Vv),Xv=ut({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=mn(Xv),jv=ut({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Yv=mn(jv),qv=ut({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=mn(qv),Kv=ut({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=mn(Kv),Qv=[9,13,27,32],ff=li&&"CompositionEvent"in window,Ws=null;li&&"documentMode"in document&&(Ws=document.documentMode);var Jv=li&&"TextEvent"in window&&!Ws,Tm=li&&(!ff||Ws&&8<Ws&&11>=Ws),vd=" ",xd=!1;function wm(t,e){switch(t){case"keyup":return Qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function e0(t,e){switch(t){case"compositionend":return Am(e);case"keypress":return e.which!==32?null:(xd=!0,vd);case"textInput":return t=e.data,t===vd&&xd?null:t;default:return null}}function t0(t,e){if(Hr)return t==="compositionend"||!ff&&wm(t,e)?(t=Em(),Ma=lf=Ti=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tm&&e.locale!=="ko"?null:e.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n0[t.type]:e==="textarea"}function Rm(t,e,n,i){rm(i),e=ka(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,ro=null;function i0(t){zm(t,0)}function dl(t){var e=Wr(t);if(Zp(e))return t}function r0(t,e){if(t==="change")return e}var Cm=!1;if(li){var Wl;if(li){var Xl="oninput"in document;if(!Xl){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Xl=typeof Sd.oninput=="function"}Wl=Xl}else Wl=!1;Cm=Wl&&(!document.documentMode||9<document.documentMode)}function Md(){Xs&&(Xs.detachEvent("onpropertychange",Pm),ro=Xs=null)}function Pm(t){if(t.propertyName==="value"&&dl(ro)){var e=[];Rm(e,ro,t,nf(t)),lm(i0,e)}}function s0(t,e,n){t==="focusin"?(Md(),Xs=e,ro=n,Xs.attachEvent("onpropertychange",Pm)):t==="focusout"&&Md()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(ro)}function a0(t,e){if(t==="click")return dl(e)}function l0(t,e){if(t==="input"||t==="change")return dl(e)}function u0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:u0;function so(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gu.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var n=Ed(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function Lm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bm(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c0(t){var e=bm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lm(n.ownerDocument.documentElement,n)){if(i!==null&&df(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Td(n,s);var o=Td(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f0=li&&"documentMode"in document&&11>=document.documentMode,Gr=null,ac=null,js=null,lc=!1;function wd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||Gr==null||Gr!==Da(i)||(i=Gr,"selectionStart"in i&&df(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&so(js,i)||(js=i,i=ka(ac,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},jl={},Dm={};li&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function hl(t){if(jl[t])return jl[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dm)return jl[t]=e[n];return t}var Um=hl("animationend"),Nm=hl("animationiteration"),Im=hl("animationstart"),Fm=hl("transitionend"),Om=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Om.set(t,e),yr(e,[t])}for(var Yl=0;Yl<Ad.length;Yl++){var ql=Ad[Yl],d0=ql.toLowerCase(),h0=ql[0].toUpperCase()+ql.slice(1);Wi(d0,"on"+h0)}Wi(Um,"onAnimationEnd");Wi(Nm,"onAnimationIteration");Wi(Im,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Fm,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Rd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dv(i,e,void 0,t),t.currentTarget=null}function zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rd(r,a,u),s=l}}}if(Na)throw t=ic,Na=!1,ic=null,t}function tt(t,e){var n=e[hc];n===void 0&&(n=e[hc]=new Set);var i=t+"__bubble";n.has(i)||(km(e,t,2,!1),n.add(i))}function $l(t,e,n){var i=0;e&&(i|=4),km(n,t,i,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ko]){t[ko]=!0,jp.forEach(function(n){n!=="selectionchange"&&(p0.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,$l("selectionchange",!1,e))}}function km(t,e,n,i){switch(Mm(e)){case 1:var r=Cv;break;case 4:r=Pv;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Kl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lm(function(){var u=s,f=nf(n),d=[];e:{var h=Om.get(t);if(h!==void 0){var p=uf,x=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":p=Wv;break;case"focusin":x="focus",p=Vl;break;case"focusout":x="blur",p=Vl;break;case"beforeblur":case"afterblur":p=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yv;break;case Um:case Nm:case Im:p=Iv;break;case Fm:p=$v;break;case"scroll":p=Lv;break;case"wheel":p=Zv;break;case"copy":case"cut":case"paste":p=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_d}var S=(e&4)!==0,m=!S&&t==="scroll",c=S?h!==null?h+"Capture":null:h;S=[];for(var v=u,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,c!==null&&(M=eo(v,c),M!=null&&S.push(ao(v,M,g)))),m)break;v=v.return}0<S.length&&(h=new p(h,x,null,n,f),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ec&&(x=n.relatedTarget||n.fromElement)&&(sr(x)||x[ui]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?sr(x):null,x!==null&&(m=Sr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(S=md,M="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=_d,M="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?h:Wr(p),g=x==null?h:Wr(x),h=new S(M,v+"leave",p,n,f),h.target=m,h.relatedTarget=g,M=null,sr(f)===u&&(S=new S(c,v+"enter",x,n,f),S.target=g,S.relatedTarget=m,M=S),m=M,p&&x)t:{for(S=p,c=x,v=0,g=S;g;g=Mr(g))v++;for(g=0,M=c;M;M=Mr(M))g++;for(;0<v-g;)S=Mr(S),v--;for(;0<g-v;)c=Mr(c),g--;for(;v--;){if(S===c||c!==null&&S===c.alternate)break t;S=Mr(S),c=Mr(c)}S=null}else S=null;p!==null&&Cd(d,h,p,S,!1),x!==null&&m!==null&&Cd(d,m,x,S,!0)}}e:{if(h=u?Wr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=r0;else if(yd(h))if(Cm)P=l0;else{P=o0;var R=s0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=a0);if(P&&(P=P(t,u))){Rm(d,P,n,f);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&$u(h,"number",h.value)}switch(R=u?Wr(u):window,t){case"focusin":(yd(R)||R.contentEditable==="true")&&(Gr=R,ac=u,js=null);break;case"focusout":js=ac=Gr=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,wd(d,n,f);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":wd(d,n,f)}var A;if(ff)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Hr?wm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Tm&&n.locale!=="ko"&&(Hr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Hr&&(A=Em()):(Ti=f,lf="value"in Ti?Ti.value:Ti.textContent,Hr=!0)),R=ka(u,N),0<R.length&&(N=new gd(N,t,null,n,f),d.push({event:N,listeners:R}),A?N.data=A:(A=Am(n),A!==null&&(N.data=A)))),(A=Jv?e0(t,n):t0(t,n))&&(u=ka(u,"onBeforeInput"),0<u.length&&(f=new gd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}zm(d,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=eo(t,n),s!=null&&i.unshift(ao(t,s,r)),s=eo(t,e),s!=null&&i.push(ao(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):r||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function Bo(t,e,n){if(e=Pd(e),Pd(t)!==e&&n)throw Error(ne(425))}function Ba(){}var uc=null,cc=null;function fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(x0)}:dc;function x0(t){setTimeout(function(){throw t})}function Zl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);io(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Xn="__reactFiber$"+ys,lo="__reactProps$"+ys,ui="__reactContainer$"+ys,hc="__reactEvents$"+ys,y0="__reactListeners$"+ys,S0="__reactHandles$"+ys;function sr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bd(t);t!==null;){if(n=t[Xn])return n;t=bd(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[Xn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function pl(t){return t[lo]||null}var pc=[],Xr=-1;function Xi(t){return{current:t}}function it(t){0>Xr||(t.current=pc[Xr],pc[Xr]=null,Xr--)}function et(t,e){Xr++,pc[Xr]=t.current,t.current=e}var Hi={},kt=Xi(Hi),Jt=Xi(!1),pr=Hi;function ls(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Ha(){it(Jt),it(kt)}function Dd(t,e,n){if(kt.current!==Hi)throw Error(ne(168));et(kt,e),et(Jt,n)}function Bm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,sv(t)||"Unknown",r));return ut({},n,i)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,pr=kt.current,et(kt,t),et(Jt,Jt.current),!0}function Ud(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Bm(t,e,pr),i.__reactInternalMemoizedMergedChildContext=t,it(Jt),it(kt),et(kt,t)):it(Jt),et(Jt,n)}var ni=null,ml=!1,Ql=!1;function Hm(t){ni===null?ni=[t]:ni.push(t)}function M0(t){ml=!0,Hm(t)}function ji(){if(!Ql&&ni!==null){Ql=!0;var t=0,e=Ye;try{var n=ni;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,ml=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),dm(rf,ji),r}finally{Ye=e,Ql=!1}}return null}var jr=[],Yr=0,Va=null,Wa=0,xn=[],yn=0,mr=null,ri=1,si="";function Ji(t,e){jr[Yr++]=Wa,jr[Yr++]=Va,Va=t,Wa=e}function Gm(t,e,n){xn[yn++]=ri,xn[yn++]=si,xn[yn++]=mr,mr=t;var i=ri;t=si;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-On(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function hf(t){t.return!==null&&(Ji(t,1),Gm(t,1,0))}function pf(t){for(;t===Va;)Va=jr[--Yr],jr[Yr]=null,Wa=jr[--Yr],jr[Yr]=null;for(;t===mr;)mr=xn[--yn],xn[yn]=null,si=xn[--yn],xn[yn]=null,ri=xn[--yn],xn[yn]=null}var fn=null,cn=null,rt=!1,Un=null;function Vm(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(rt){var e=cn;if(e){var n=e;if(!Nd(t,e)){if(mc(t))throw Error(ne(418));e=Di(n.nextSibling);var i=fn;e&&Nd(t,e)?Vm(i,n):(t.flags=t.flags&-4097|2,rt=!1,fn=t)}}else{if(mc(t))throw Error(ne(418));t.flags=t.flags&-4097|2,rt=!1,fn=t}}}function Id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Ho(t){if(t!==fn)return!1;if(!rt)return Id(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fc(t.type,t.memoizedProps)),e&&(e=cn)){if(mc(t))throw Wm(),Error(ne(418));for(;e;)Vm(t,e),e=Di(e.nextSibling)}if(Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?Di(t.stateNode.nextSibling):null;return!0}function Wm(){for(var t=cn;t;)t=Di(t.nextSibling)}function us(){cn=fn=null,rt=!1}function mf(t){Un===null?Un=[t]:Un.push(t)}var E0=hi.ReactCurrentBatchConfig;function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Go(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fd(t){var e=t._init;return e(t._payload)}function Xm(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Fi(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,M){return v===null||v.tag!==6?(v=su(g,c.mode,M),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,M){var P=g.type;return P===Br?f(c,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===yi&&Fd(P)===v.type)?(M=r(v,g.props),M.ref=Ps(c,v,g),M.return=c,M):(M=La(g.type,g.key,g.props,null,c.mode,M),M.ref=Ps(c,v,g),M.return=c,M)}function u(c,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=ou(g,c.mode,M),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,M,P){return v===null||v.tag!==7?(v=ur(g,c.mode,M,P),v.return=c,v):(v=r(v,g),v.return=c,v)}function d(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=su(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return g=La(v.type,v.key,v.props,null,c.mode,g),g.ref=Ps(c,null,v),g.return=c,g;case kr:return v=ou(v,c.mode,g),v.return=c,v;case yi:var M=v._init;return d(c,M(v._payload),g)}if(ks(v)||Ts(v))return v=ur(v,c.mode,g,null),v.return=c,v;Go(c,v)}return null}function h(c,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(c,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===P?l(c,v,g,M):null;case kr:return g.key===P?u(c,v,g,M):null;case yi:return P=g._init,h(c,v,P(g._payload),M)}if(ks(g)||Ts(g))return P!==null?null:f(c,v,g,M,null);Go(c,g)}return null}function p(c,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(g)||null,a(v,c,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case bo:return c=c.get(M.key===null?g:M.key)||null,l(v,c,M,P);case kr:return c=c.get(M.key===null?g:M.key)||null,u(v,c,M,P);case yi:var R=M._init;return p(c,v,g,R(M._payload),P)}if(ks(M)||Ts(M))return c=c.get(g)||null,f(v,c,M,P,null);Go(v,M)}return null}function x(c,v,g,M){for(var P=null,R=null,A=v,N=v=0,E=null;A!==null&&N<g.length;N++){A.index>N?(E=A,A=null):E=A.sibling;var _=h(c,A,g[N],M);if(_===null){A===null&&(A=E);break}t&&A&&_.alternate===null&&e(c,A),v=s(_,v,N),R===null?P=_:R.sibling=_,R=_,A=E}if(N===g.length)return n(c,A),rt&&Ji(c,N),P;if(A===null){for(;N<g.length;N++)A=d(c,g[N],M),A!==null&&(v=s(A,v,N),R===null?P=A:R.sibling=A,R=A);return rt&&Ji(c,N),P}for(A=i(c,A);N<g.length;N++)E=p(A,c,N,g[N],M),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?N:E.key),v=s(E,v,N),R===null?P=E:R.sibling=E,R=E);return t&&A.forEach(function(C){return e(c,C)}),rt&&Ji(c,N),P}function S(c,v,g,M){var P=Ts(g);if(typeof P!="function")throw Error(ne(150));if(g=P.call(g),g==null)throw Error(ne(151));for(var R=P=null,A=v,N=v=0,E=null,_=g.next();A!==null&&!_.done;N++,_=g.next()){A.index>N?(E=A,A=null):E=A.sibling;var C=h(c,A,_.value,M);if(C===null){A===null&&(A=E);break}t&&A&&C.alternate===null&&e(c,A),v=s(C,v,N),R===null?P=C:R.sibling=C,R=C,A=E}if(_.done)return n(c,A),rt&&Ji(c,N),P;if(A===null){for(;!_.done;N++,_=g.next())_=d(c,_.value,M),_!==null&&(v=s(_,v,N),R===null?P=_:R.sibling=_,R=_);return rt&&Ji(c,N),P}for(A=i(c,A);!_.done;N++,_=g.next())_=p(A,c,N,_.value,M),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?N:_.key),v=s(_,v,N),R===null?P=_:R.sibling=_,R=_);return t&&A.forEach(function(I){return e(c,I)}),rt&&Ji(c,N),P}function m(c,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var P=g.key,R=v;R!==null;){if(R.key===P){if(P=g.type,P===Br){if(R.tag===7){n(c,R.sibling),v=r(R,g.props.children),v.return=c,c=v;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===yi&&Fd(P)===R.type){n(c,R.sibling),v=r(R,g.props),v.ref=Ps(c,R,g),v.return=c,c=v;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===Br?(v=ur(g.props.children,c.mode,M,g.key),v.return=c,c=v):(M=La(g.type,g.key,g.props,null,c.mode,M),M.ref=Ps(c,v,g),M.return=c,c=M)}return o(c);case kr:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=ou(g,c.mode,M),v.return=c,c=v}return o(c);case yi:return R=g._init,m(c,v,R(g._payload),M)}if(ks(g))return x(c,v,g,M);if(Ts(g))return S(c,v,g,M);Go(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=su(g,c.mode,M),v.return=c,c=v),o(c)):n(c,v)}return m}var cs=Xm(!0),jm=Xm(!1),Xa=Xi(null),ja=null,qr=null,gf=null;function _f(){gf=qr=ja=null}function vf(t){var e=Xa.current;it(Xa),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function is(t,e){ja=t,gf=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(ja===null)throw Error(ne(308));qr=t,ja.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var or=null;function xf(t){or===null?or=[t]:or.push(t)}function Ym(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ci(t,i)}function ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Si=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ci(t,n)}return r=i.interleaved,r===null?(e.next=e,xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ci(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}function Od(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ya(t,e,n,i){var r=t.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,S=a;switch(h=e,p=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ut({},d,h);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=d}}function zd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Mo={},Yn=Xi(Mo),uo=Xi(Mo),co=Xi(Mo);function ar(t){if(t===Mo)throw Error(ne(174));return t}function Sf(t,e){switch(et(co,e),et(uo,t),et(Yn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zu(e,t)}it(Yn),et(Yn,e)}function fs(){it(Yn),it(uo),it(co)}function $m(t){ar(co.current);var e=ar(Yn.current),n=Zu(e,t.type);e!==n&&(et(uo,t),et(Yn,n))}function Mf(t){uo.current===t&&(it(Yn),it(uo))}var at=Xi(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jl=[];function Ef(){for(var t=0;t<Jl.length;t++)Jl[t]._workInProgressVersionPrimary=null;Jl.length=0}var wa=hi.ReactCurrentDispatcher,eu=hi.ReactCurrentBatchConfig,gr=0,lt=null,yt=null,Rt=null,$a=!1,Ys=!1,fo=0,T0=0;function Nt(){throw Error(ne(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function wf(t,e,n,i,r,s){if(gr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?C0:P0,t=n(i,r),Ys){s=0;do{if(Ys=!1,fo=0,25<=s)throw Error(ne(301));s+=1,Rt=yt=null,e.updateQueue=null,wa.current=L0,t=n(i,r)}while(Ys)}if(wa.current=Ka,e=yt!==null&&yt.next!==null,gr=0,Rt=yt=lt=null,$a=!1,e)throw Error(ne(300));return t}function Af(){var t=fo!==0;return fo=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function An(){if(yt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Rt===null?lt.memoizedState:Rt.next;if(e!==null)Rt=e,yt=t;else{if(t===null)throw Error(ne(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ho(t,e){return typeof e=="function"?e(t):e}function tu(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((gr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,lt.lanes|=f,_r|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nu(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Km(){}function Zm(t,e){var n=lt,i=An(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Rf(eg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,po(9,Jm.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ne(349));gr&30||Qm(n,e,r)}return r}function Qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jm(t,e,n,i){e.value=n,e.getSnapshot=i,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function ng(t){var e=ci(t,1);e!==null&&zn(e,t,1,-1)}function kd(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=R0.bind(null,lt,t),[e.memoizedState,t]}function po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ig(){return An().memoizedState}function Aa(t,e,n,i){var r=Vn();lt.flags|=t,r.memoizedState=po(1|e,n,void 0,i===void 0?null:i)}function gl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&Tf(i,o.deps)){r.memoizedState=po(e,n,s,i);return}}lt.flags|=t,r.memoizedState=po(1|e,n,s,i)}function Bd(t,e){return Aa(8390656,8,t,e)}function Rf(t,e){return gl(2048,8,t,e)}function rg(t,e){return gl(4,2,t,e)}function sg(t,e){return gl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,og.bind(null,e,t),n)}function Cf(){}function lg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ug(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cg(t,e,n){return gr&21?(Bn(n,e)||(n=mm(),lt.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function w0(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=eu.transition;eu.transition={};try{t(!1),e()}finally{Ye=n,eu.transition=i}}function fg(){return An().memoizedState}function A0(t,e,n){var i=Ii(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dg(t))hg(e,n);else if(n=Ym(t,e,n,i),n!==null){var r=Xt();zn(n,t,i,r),pg(n,e,i)}}function R0(t,e,n){var i=Ii(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dg(t))hg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ym(t,e,r,i),n!==null&&(r=Xt(),zn(n,t,i,r),pg(n,e,i))}}function dg(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function hg(t,e){Ys=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}var Ka={readContext:wn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},C0={readContext:wn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Bd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=A0.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:kd,useDebugValue:Cf,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=kd(!1),e=t[0];return t=w0.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Vn();if(rt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ct===null)throw Error(ne(349));gr&30||Qm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bd(eg.bind(null,i,s,t),[t]),i.flags|=2048,po(9,Jm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(rt){var n=si,i=ri;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P0={readContext:wn,useCallback:lg,useContext:wn,useEffect:Rf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:tu,useRef:ig,useState:function(){return tu(ho)},useDebugValue:Cf,useDeferredValue:function(t){var e=An();return cg(e,yt.memoizedState,t)},useTransition:function(){var t=tu(ho)[0],e=An().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Zm,useId:fg,unstable_isNewReconciler:!1},L0={readContext:wn,useCallback:lg,useContext:wn,useEffect:Rf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:nu,useRef:ig,useState:function(){return nu(ho)},useDebugValue:Cf,useDeferredValue:function(t){var e=An();return yt===null?e.memoizedState=t:cg(e,yt.memoizedState,t)},useTransition:function(){var t=nu(ho)[0],e=An().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Zm,useId:fg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Ii(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(zn(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Ii(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(zn(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Ii(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(zn(e,t,i,n),Ta(e,t,i))}};function Hd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,i)||!so(r,s):!0}function mg(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=en(e)?pr:kt.current,i=e.contextTypes,s=(i=i!=null)?ls(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function xc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=en(e)?pr:kt.current,r.context=ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),Ya(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e){try{var n="",i=e;do n+=rv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function gg(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,Lc=i),yc(t,e)},n}function _g(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yc(t,e),typeof i!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new b0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=X0.bind(null,t,e,n),e.then(t,t))}function Wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var D0=hi.ReactCurrentOwner,Qt=!1;function Vt(t,e,n,i){e.child=t===null?jm(e,null,n,i):cs(e,t.child,n,i)}function jd(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=wf(t,e,n,i,s,r),n=Af(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(rt&&n&&hf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Yd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vg(t,e,s,i,r)):(t=La(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=Fi(s,i),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(so(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,fi(t,e,r)}return Sc(t,e,n,i,r)}function xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Kr,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Kr,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Kr,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Kr,ln),ln|=i;return Vt(t,e,r,n),e.child}function yg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sc(t,e,n,i,r){var s=en(n)?pr:kt.current;return s=ls(e,s),is(e,r),n=wf(t,e,n,i,s,r),i=Af(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(rt&&i&&hf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function qd(t,e,n,i,r){if(en(n)){var s=!0;Ga(e)}else s=!1;if(is(e,r),e.stateNode===null)Ra(t,e),mg(e,n,i),xc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=en(n)?pr:kt.current,u=ls(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gd(e,o,i,u),Si=!1;var h=e.memoizedState;o.state=h,Ya(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Si?(typeof f=="function"&&(vc(e,n,f,i),l=e.memoizedState),(a=Si||Hd(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(n)?pr:kt.current,l=ls(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Gd(e,o,i,l),Si=!1,h=e.memoizedState,o.state=h,Ya(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Jt.current||Si?(typeof p=="function"&&(vc(e,n,p,i),x=e.memoizedState),(u=Si||Hd(e,n,u,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Mc(t,e,n,i,s,r)}function Mc(t,e,n,i,r,s){yg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ud(e,n,!1),fi(t,e,s);i=e.stateNode,D0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Ud(e,n,!0),e.child}function Sg(t){var e=t.stateNode;e.pendingContext?Dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dd(t,e.context,!1),Sf(t,e.containerInfo)}function $d(t,e,n,i,r){return us(),mf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(at,r&1),t===null)return gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,i,0,null),t=ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tc(n),e.memoizedState=Ec,t):Pf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return U0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Tc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ec,i}return s=t.child,t=s.sibling,i=Fi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pf(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vo(t,e,n,i){return i!==null&&mf(i),cs(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=iu(Error(ne(422))),Vo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),s=ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=Tc(o),e.memoizedState=Ec,s);if(!(e.mode&1))return Vo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=iu(s,i,void 0),Vo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ci(t,r),zn(i,t,r,-1))}return If(),i=iu(Error(ne(421))),Vo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Di(r.nextSibling),fn=e,rt=!0,Un=null,t!==null&&(xn[yn++]=ri,xn[yn++]=si,xn[yn++]=mr,ri=t.id,si=t.overflow,mr=e),e=Pf(e,i.children),e.flags|=4096,e)}function Kd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_c(t.return,e,n)}function ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Eg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kd(t,n,e);else if(t.tag===19)Kd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ru(e,!0,n,null,s);break;case"together":ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N0(t,e,n){switch(e.tag){case 3:Sg(e),us();break;case 5:$m(e);break;case 1:en(e.type)&&Ga(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?Mg(t,e,n):(et(at,at.current&1),t=fi(t,e,n),t!==null?t.sibling:null);et(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Eg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,xg(t,e,n)}return fi(t,e,n)}var Tg,wc,wg,Ag;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wc=function(){};wg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ar(Yn.current);var s=null;switch(n){case"input":r=Yu(t,r),i=Yu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Ku(t,r),i=Ku(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ba)}Qu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ag=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ls(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function I0(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return en(e.type)&&Ha(),It(e),null;case 3:return i=e.stateNode,fs(),it(Jt),it(kt),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Uc(Un),Un=null))),wc(t,e),It(e),null;case 5:Mf(e);var r=ar(co.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return It(e),null}if(t=ar(Yn.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[lo]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)tt(Hs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":sd(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":ad(i,s),tt("invalid",i)}Qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Do(i),od(i,s,!0);break;case"textarea":Do(i),ld(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xn]=e,t[lo]=i,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ju(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)tt(Hs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":sd(t,i),r=Yu(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),tt("invalid",t);break;case"textarea":ad(t,i),r=Ku(t,i),tt("invalid",t);break;default:r=i}Qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&Qc(t,s,l,o))}switch(n){case"input":Do(t),od(t,i,!1);break;case"textarea":Do(t),ld(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Ag(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ar(co.current),ar(Yn.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return It(e),null;case 13:if(it(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&cn!==null&&e.mode&1&&!(e.flags&128))Wm(),us(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Xn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Un!==null&&(Uc(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?St===0&&(St=3):If())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return fs(),wc(t,e),t===null&&oo(e.stateNode.containerInfo),It(e),null;case 10:return vf(e.type._context),It(e),null;case 17:return en(e.type)&&Ha(),It(e),null;case 19:if(it(at),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ls(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,Ls(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>hs&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304)}else{if(!i)if(t=qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return It(e),null}else 2*mt()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=at.current,et(at,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function F0(t,e){switch(pf(e),e.tag){case 1:return en(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),it(Jt),it(kt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(it(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(at),null;case 4:return fs(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Wo=!1,zt=!1,O0=typeof WeakSet=="function"?WeakSet:Set,de=null;function $r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Ac(t,e,n){try{n()}catch(i){ht(t,e,i)}}var Zd=!1;function z0(t,e){if(uc=Oa,t=bm(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},Oa=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,m=x.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?S:bn(e.type,S),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=Zd,Zd=!1,x}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ac(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[lo],delete e[hc],delete e[y0],delete e[S0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cg(t){return t.tag===5||t.tag===3||t.tag===4}function Qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}function Pc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}var Pt=null,Dn=!1;function pi(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:zt||$r(n,e);case 6:var i=Pt,r=Dn;Pt=null,pi(t,e,n),Pt=i,Dn=r,Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),io(t)):Zl(Pt,n.stateNode));break;case 4:i=Pt,r=Dn,Pt=n.stateNode.containerInfo,Dn=!0,pi(t,e,n),Pt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ac(n,e,o),r=r.next}while(r!==i)}pi(t,e,n);break;case 1:if(!zt&&($r(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,pi(t,e,n),zt=i):pi(t,e,n);break;default:pi(t,e,n)}}function Jd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O0),e.forEach(function(i){var r=Y0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Dn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Pt===null)throw Error(ne(160));Pg(s,o,r),Pt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Gn(t),i&4){try{qs(3,t,t.return),vl(3,t)}catch(S){ht(t,t.return,S)}try{qs(5,t,t.return)}catch(S){ht(t,t.return,S)}}break;case 1:Rn(e,t),Gn(t),i&512&&n!==null&&$r(n,n.return);break;case 5:if(Rn(e,t),Gn(t),i&512&&n!==null&&$r(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(S){ht(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qp(r,s),Ju(a,o);var u=Ju(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?im(r,d):f==="dangerouslySetInnerHTML"?tm(r,d):f==="children"?Js(r,d):Qc(r,f,d,u)}switch(a){case"input":qu(r,s);break;case"textarea":Jp(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Jr(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[lo]=s}catch(S){ht(t,t.return,S)}}break;case 6:if(Rn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){ht(t,t.return,S)}}break;case 3:if(Rn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(S){ht(t,t.return,S)}break;case 4:Rn(e,t),Gn(t);break;case 13:Rn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=mt())),i&4&&Jd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Rn(e,t),zt=u):Rn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(d=de=f;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:qs(4,h,h.return);break;case 1:$r(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){ht(i,n,S)}}break;case 5:$r(h,h.return);break;case 22:if(h.memoizedState!==null){th(d);continue}}p!==null?(p.return=h,de=p):th(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nm("display",o))}catch(S){ht(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){ht(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rn(e,t),Gn(t),i&4&&Jd(t);break;case 21:break;default:Rn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var s=Qd(t);Pc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qd(t);Cc(t,a,o);break;default:throw Error(ne(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k0(t,e,n){de=t,bg(t)}function bg(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Wo;var u=zt;if(Wo=o,(zt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?nh(r):l!==null?(l.return=o,de=l):nh(r);for(;s!==null;)de=s,bg(s),s=s.sibling;de=r,Wo=a,zt=u}eh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):eh(t)}}function eh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&io(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&Rc(e)}catch(h){ht(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function th(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function nh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Rc(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{Rc(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var B0=Math.ceil,Za=hi.ReactCurrentDispatcher,Lf=hi.ReactCurrentOwner,Tn=hi.ReactCurrentBatchConfig,Ve=0,Ct=null,vt=null,bt=0,ln=0,Kr=Xi(0),St=0,mo=null,_r=0,xl=0,bf=0,$s=null,Kt=null,Df=0,hs=1/0,ti=null,Qa=!1,Lc=null,Ni=null,Xo=!1,wi=null,Ja=0,Ks=0,bc=null,Ca=-1,Pa=0;function Xt(){return Ve&6?mt():Ca!==-1?Ca:Ca=mt()}function Ii(t){return t.mode&1?Ve&2&&bt!==0?bt&-bt:E0.transition!==null?(Pa===0&&(Pa=mm()),Pa):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Mm(t.type)),t):1}function zn(t,e,n,i){if(50<Ks)throw Ks=0,bc=null,Error(ne(185));xo(t,n,i),(!(Ve&2)||t!==Ct)&&(t===Ct&&(!(Ve&2)&&(xl|=n),St===4&&Ei(t,bt)),tn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(hs=mt()+500,ml&&ji()))}function tn(t,e){var n=t.callbackNode;Ev(t,e);var i=Fa(t,t===Ct?bt:0);if(i===0)n!==null&&fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fd(n),e===1)t.tag===0?M0(ih.bind(null,t)):Hm(ih.bind(null,t)),v0(function(){!(Ve&6)&&ji()}),n=null;else{switch(gm(i)){case 1:n=rf;break;case 4:n=hm;break;case 16:n=Ia;break;case 536870912:n=pm;break;default:n=Ia}n=kg(n,Dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dg(t,e){if(Ca=-1,Pa=0,Ve&6)throw Error(ne(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var i=Fa(t,t===Ct?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=Ve;Ve|=2;var s=Ng();(Ct!==t||bt!==e)&&(ti=null,hs=mt()+500,lr(t,e));do try{V0();break}catch(a){Ug(t,a)}while(!0);_f(),Za.current=s,Ve=r,vt!==null?e=0:(Ct=null,bt=0,e=St)}if(e!==0){if(e===2&&(r=rc(t),r!==0&&(i=r,e=Dc(t,r))),e===1)throw n=mo,lr(t,0),Ei(t,i),tn(t,mt()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!H0(r)&&(e=el(t,i),e===2&&(s=rc(t),s!==0&&(i=s,e=Dc(t,s))),e===1))throw n=mo,lr(t,0),Ei(t,i),tn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:er(t,Kt,ti);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=Df+500-mt(),10<e)){if(Fa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dc(er.bind(null,t,Kt,ti),e);break}er(t,Kt,ti);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*B0(i/1960))-i,10<i){t.timeoutHandle=dc(er.bind(null,t,Kt,ti),i);break}er(t,Kt,ti);break;case 5:er(t,Kt,ti);break;default:throw Error(ne(329))}}}return tn(t,mt()),t.callbackNode===n?Dg.bind(null,t):null}function Dc(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=el(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Uc(e)),t}function Uc(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function H0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~bf,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function ih(t){if(Ve&6)throw Error(ne(327));rs();var e=Fa(t,0);if(!(e&1))return tn(t,mt()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=rc(t);i!==0&&(e=i,n=Dc(t,i))}if(n===1)throw n=mo,lr(t,0),Ei(t,e),tn(t,mt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Kt,ti),tn(t,mt()),null}function Uf(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(hs=mt()+500,ml&&ji())}}function vr(t){wi!==null&&wi.tag===0&&!(Ve&6)&&rs();var e=Ve;Ve|=1;var n=Tn.transition,i=Ye;try{if(Tn.transition=null,Ye=1,t)return t()}finally{Ye=i,Tn.transition=n,Ve=e,!(Ve&6)&&ji()}}function Nf(){ln=Kr.current,it(Kr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_0(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:fs(),it(Jt),it(kt),Ef();break;case 5:Mf(i);break;case 4:fs();break;case 13:it(at);break;case 19:it(at);break;case 10:vf(i.type._context);break;case 22:case 23:Nf()}n=n.return}if(Ct=t,vt=t=Fi(t.current,null),bt=ln=e,St=0,mo=null,bf=xl=_r=0,Kt=$s=null,or!==null){for(e=0;e<or.length;e++)if(n=or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}or=null}return t}function Ug(t,e){do{var n=vt;try{if(_f(),wa.current=Ka,$a){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$a=!1}if(gr=0,Rt=yt=lt=null,Ys=!1,fo=0,Lf.current=null,n===null||n.return===null){St=1,mo=e,vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Wd(o);if(p!==null){p.flags&=-257,Xd(p,o,a,s,e),p.mode&1&&Vd(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Vd(s,u,e),If();break e}l=Error(ne(426))}}else if(rt&&a.mode&1){var m=Wd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xd(m,o,a,s,e),mf(ds(l,a));break e}}s=l=ds(l,a),St!==4&&(St=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=gg(s,l,e);Od(s,c);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ni===null||!Ni.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=_g(s,a,e);Od(s,M);break e}}s=s.return}while(s!==null)}Fg(n)}catch(P){e=P,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function Ng(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function If(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(_r&268435455)&&!(xl&268435455)||Ei(Ct,bt)}function el(t,e){var n=Ve;Ve|=2;var i=Ng();(Ct!==t||bt!==e)&&(ti=null,lr(t,e));do try{G0();break}catch(r){Ug(t,r)}while(!0);if(_f(),Ve=n,Za.current=i,vt!==null)throw Error(ne(261));return Ct=null,bt=0,St}function G0(){for(;vt!==null;)Ig(vt)}function V0(){for(;vt!==null&&!pv();)Ig(vt)}function Ig(t){var e=zg(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Fg(t):vt=e,Lf.current=null}function Fg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=F0(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,vt=null;return}}else if(n=I0(n,e,ln),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);St===0&&(St=5)}function er(t,e,n){var i=Ye,r=Tn.transition;try{Tn.transition=null,Ye=1,W0(t,e,n,i)}finally{Tn.transition=r,Ye=i}return null}function W0(t,e,n,i){do rs();while(wi!==null);if(Ve&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tv(t,s),t===Ct&&(vt=Ct=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,kg(Ia,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Ye;Ye=1;var a=Ve;Ve|=4,Lf.current=null,z0(t,n),Lg(n,t),c0(cc),Oa=!!uc,cc=uc=null,t.current=n,k0(n),mv(),Ve=a,Ye=o,Tn.transition=s}else t.current=n;if(Xo&&(Xo=!1,wi=t,Ja=r),s=t.pendingLanes,s===0&&(Ni=null),vv(n.stateNode),tn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,t=Lc,Lc=null,t;return Ja&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===bc?Ks++:(Ks=0,bc=t):Ks=0,ji(),null}function rs(){if(wi!==null){var t=gm(Ja),e=Tn.transition,n=Ye;try{if(Tn.transition=null,Ye=16>t?16:t,wi===null)var i=!1;else{if(t=wi,wi=null,Ja=0,Ve&6)throw Error(ne(331));var r=Ve;for(Ve|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:qs(8,f,s)}var d=f.child;if(d!==null)d.return=f,de=d;else for(;de!==null;){f=de;var h=f.sibling,p=f.return;if(Rg(f),f===u){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,de=c;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(P){ht(a,a.return,P)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(Ve=r,ji(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{Ye=n,Tn.transition=e}}return!1}function rh(t,e,n){e=ds(n,e),e=gg(t,e,1),t=Ui(t,e,1),e=Xt(),t!==null&&(xo(t,1,e),tn(t,e))}function ht(t,e,n){if(t.tag===3)rh(t,t,n);else for(;e!==null;){if(e.tag===3){rh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ni===null||!Ni.has(i))){t=ds(n,t),t=_g(e,t,1),e=Ui(e,t,1),t=Xt(),e!==null&&(xo(e,1,t),tn(e,t));break}}e=e.return}}function X0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(bt&n)===n&&(St===4||St===3&&(bt&130023424)===bt&&500>mt()-Df?lr(t,0):bf|=n),tn(t,e)}function Og(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Xt();t=ci(t,e),t!==null&&(xo(t,e,n),tn(t,n))}function j0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Og(t,n)}function Y0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Og(t,n)}var zg;zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,N0(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,rt&&e.flags&1048576&&Gm(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ra(t,e),t=e.pendingProps;var r=ls(e,kt.current);is(e,n),r=wf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Ga(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,xc(e,i,t,n),e=Mc(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&hf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$0(i),t=bn(i,t),r){case 0:e=Sc(null,e,i,t,n);break e;case 1:e=qd(null,e,i,t,n);break e;case 11:e=jd(null,e,i,t,n);break e;case 14:e=Yd(null,e,i,bn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Sc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),qd(t,e,i,r,n);case 3:e:{if(Sg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qm(t,e),Ya(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ds(Error(ne(423)),e),e=$d(t,e,i,n,r);break e}else if(i!==r){r=ds(Error(ne(424)),e),e=$d(t,e,i,n,r);break e}else for(cn=Di(e.stateNode.containerInfo.firstChild),fn=e,rt=!0,Un=null,n=jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=fi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return $m(e),t===null&&gc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fc(i,r)?o=null:s!==null&&fc(i,s)&&(e.flags|=32),yg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&gc(e),null;case 13:return Mg(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=cs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),jd(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Xa,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!Jt.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,n),r=wn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),Yd(t,e,i,r,n);case 15:return vg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ra(t,e),e.tag=1,en(i)?(t=!0,Ga(e)):t=!1,is(e,n),mg(e,i,r),xc(e,i,r,n),Mc(null,e,i,!0,t,n);case 19:return Eg(t,e,n);case 22:return xg(t,e,n)}throw Error(ne(156,e.tag))};function kg(t,e){return dm(t,e)}function q0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new q0(t,e,n,i)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $0(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return ur(n.children,r,s,e);case Jc:o=8,r|=8;break;case Vu:return t=En(12,n,e,r|2),t.elementType=Vu,t.lanes=s,t;case Wu:return t=En(13,n,e,r),t.elementType=Wu,t.lanes=s,t;case Xu:return t=En(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case $p:return yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yp:o=10;break e;case qp:o=9;break e;case ef:o=11;break e;case tf:o=14;break e;case yi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ur(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=En(22,t,i,e),t.elementType=$p,t.lanes=n,t.stateNode={isHidden:!1},t}function su(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,i,r,s,o,a,l){return t=new K0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function Z0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bg(t){if(!t)return Hi;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(en(n))return Bm(t,n,e)}return e}function Hg(t,e,n,i,r,s,o,a,l){return t=Of(n,i,!0,t,r,s,o,a,l),t.context=Bg(null),n=t.current,i=Xt(),r=Ii(n),s=ai(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,xo(t,r,i),tn(t,i),t}function Sl(t,e,n,i){var r=e.current,s=Xt(),o=Ii(r);return n=Bg(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(zn(t,r,o,s),Ta(t,r,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){sh(t,e),(t=t.alternate)&&sh(t,e)}function Q0(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Ml.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Sl(t,e,null,null)};Ml.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){Sl(null,t,null,null)}),e[ui]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&Sm(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oh(){}function J0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tl(o);s.call(u)}}var o=Hg(e,i,t,0,null,!1,!1,"",oh);return t._reactRootContainer=o,t[ui]=o.current,oo(t.nodeType===8?t.parentNode:t),vr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tl(l);a.call(u)}}var l=Of(t,0,!1,null,null,!1,!1,"",oh);return t._reactRootContainer=l,t[ui]=l.current,oo(t.nodeType===8?t.parentNode:t),vr(function(){Sl(e,l,n,i)}),l}function Tl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}Sl(e,o,t,r)}else o=J0(n,e,t,r,i);return tl(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(sf(e,n|1),tn(e,mt()),!(Ve&6)&&(hs=mt()+500,ji()))}break;case 13:vr(function(){var i=ci(t,1);if(i!==null){var r=Xt();zn(i,t,1,r)}}),zf(t,1)}};of=function(t){if(t.tag===13){var e=ci(t,134217728);if(e!==null){var n=Xt();zn(e,t,134217728,n)}zf(t,134217728)}};vm=function(t){if(t.tag===13){var e=Ii(t),n=ci(t,e);if(n!==null){var i=Xt();zn(n,t,e,i)}zf(t,e)}};xm=function(){return Ye};ym=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};tc=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pl(i);if(!r)throw Error(ne(90));Zp(i),qu(i,r)}}}break;case"textarea":Jp(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};om=Uf;am=vr;var ex={usingClientEntryPoint:!1,Events:[So,Wr,pl,rm,sm,Uf]},bs={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tx={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cm(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{cl=jo.inject(tx),jn=jo}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(ne(200));return Z0(t,e,null,n)};pn.createRoot=function(t,e){if(!Bf(t))throw Error(ne(299));var n=!1,i="",r=Gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,oo(t.nodeType===8?t.parentNode:t),new kf(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=cm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return vr(t)};pn.hydrate=function(t,e,n){if(!El(e))throw Error(ne(200));return Tl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Gg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hg(e,null,t,1,n??null,r,!1,s,o),t[ui]=e.current,oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ml(e)};pn.render=function(t,e,n){if(!El(e))throw Error(ne(200));return Tl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!El(t))throw Error(ne(40));return t._reactRootContainer?(vr(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};pn.unstable_batchedUpdates=Uf;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!El(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Tl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),Vp.exports=pn;var nx=Vp.exports,ah=nx;Hu.createRoot=ah.createRoot,Hu.hydrateRoot=ah.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="160",ix=0,lh=1,rx=2,Wg=1,sx=2,ei=3,Gi=0,nn=1,ii=2,Oi=0,ss=1,nl=2,uh=3,ch=4,ox=5,ir=100,ax=101,lx=102,fh=103,dh=104,ux=200,cx=201,fx=202,dx=203,Nc=204,Ic=205,hx=206,px=207,mx=208,gx=209,_x=210,vx=211,xx=212,yx=213,Sx=214,Mx=0,Ex=1,Tx=2,il=3,wx=4,Ax=5,Rx=6,Cx=7,Xg=0,Px=1,Lx=2,zi=0,bx=1,Dx=2,Ux=3,Nx=4,Ix=5,Fx=6,jg=300,ps=301,ms=302,Fc=303,Oc=304,wl=306,zc=1e3,In=1001,kc=1002,Wt=1003,hh=1004,au=1005,Sn=1006,Ox=1007,go=1008,ki=1009,zx=1010,kx=1011,Gf=1012,Yg=1013,Ai=1014,Ri=1015,_o=1016,qg=1017,$g=1018,cr=1020,Bx=1021,Fn=1023,Hx=1024,Gx=1025,fr=1026,gs=1027,Vx=1028,Kg=1029,Wx=1030,Zg=1031,Qg=1033,lu=33776,uu=33777,cu=33778,fu=33779,ph=35840,mh=35841,gh=35842,_h=35843,Jg=36196,vh=37492,xh=37496,yh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,wh=37813,Ah=37814,Rh=37815,Ch=37816,Ph=37817,Lh=37818,bh=37819,Dh=37820,Uh=37821,du=36492,Nh=36494,Ih=36495,Xx=36283,Fh=36284,Oh=36285,zh=36286,e_=3e3,dr=3001,jx=3200,Yx=3201,qx=0,$x=1,Mn="",Lt="srgb",di="srgb-linear",Vf="display-p3",Al="display-p3-linear",rl="linear",nt="srgb",sl="rec709",ol="p3",Er=7680,kh=519,Kx=512,Zx=513,Qx=514,t_=515,Jx=516,ey=517,ty=518,ny=519,Bh=35044,Hh="300 es",Bc=1035,oi=2e3,al=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=Math.PI/180,Hc=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function iy(t,e){return(t%e+e)%e}function pu(t,e,n){return(1-n)*t+n*e}function Gh(t){return(t&t-1)===0&&t!==0}function Gc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],x=i[8],S=r[0],m=r[3],c=r[6],v=r[1],g=r[4],M=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*S+a*v+l*P,s[3]=o*m+a*g+l*R,s[6]=o*c+a*M+l*A,s[1]=u*S+f*v+d*P,s[4]=u*m+f*g+d*R,s[7]=u*c+f*M+d*A,s[2]=h*S+p*v+x*P,s[5]=h*m+p*g+x*R,s[8]=h*c+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,p=u*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(r*u-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-u*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new ke;function n_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ry(){const t=ll("canvas");return t.style.display="block",t}const Vh={};function Zs(t){t in Vh||(Vh[t]=!0,console.warn(t))}const Wh=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[di]:{transfer:rl,primaries:sl,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:nt,primaries:sl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:rl,primaries:ol,toReference:t=>t.applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(Wh)},[Vf]:{transfer:nt,primaries:ol,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(Wh).convertLinearToSRGB()}},sy=new Set([di,Al]),$e={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Yo[e].toReference,r=Yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Yo[t].primaries},getTransfer:function(t){return t===Mn?rl:Yo[t].transfer}};function os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=ll("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(os(n[i]/255)*255):n[i]=os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class r_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Eo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?i_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;class dn extends Ss{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=In,r=In,s=Sn,o=go,a=Fn,l=ki,u=dn.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Eo(),this.name="",this.source=new r_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===dr?Lt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?dr:e_}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?Lt:Mn}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=jg;dn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],x=l[9],S=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(p+1)/2,P=(c+1)/2,R=(f+h)/4,A=(d+S)/4,N=(x+m)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=A/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-S)/v,this.z=(h-f)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends Ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===dr?Lt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new r_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends ly{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uy extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=S;return}if(d!==S||l!==h||u!==p||f!==x){let m=1-a;const c=l*h+u*p+f*x+d*S,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,c*v);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const M=a*v;if(l=l*m+h*M,u=u*m+p*M,f=f*m+x*M,d=d*m+S*M,m===1-a){const P=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=P,u*=P,f*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*p-u*h,e[n+1]=l*x+f*h+u*d-a*p,e[n+2]=u*x+f*p+a*h-l*d,e[n+3]=f*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*p*x,this._y=u*p*d-h*f*x,this._z=u*f*x+h*p*d,this._w=u*f*d-h*p*x;break;case"YXZ":this._x=h*f*d+u*p*x,this._y=u*p*d-h*f*x,this._z=u*f*x-h*p*d,this._w=u*f*d+h*p*x;break;case"ZXY":this._x=h*f*d-u*p*x,this._y=u*p*d+h*f*x,this._z=u*f*x+h*p*d,this._w=u*f*d-h*p*x;break;case"ZYX":this._x=h*f*d-u*p*x,this._y=u*p*d+h*f*x,this._z=u*f*x-h*p*d,this._w=u*f*d+h*p*x;break;case"YZX":this._x=h*f*d+u*p*x,this._y=u*p*d+h*f*x,this._z=u*f*x-h*p*d,this._w=u*f*d-h*p*x;break;case"XZY":this._x=h*f*d-u*p*x,this._y=u*p*d-h*f*x,this._z=u*f*x+h*p*d,this._w=u*f*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new H,jh=new To;class wo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),$o.subVectors(this.max,Us),wr.subVectors(e.a,Us),Ar.subVectors(e.b,Us),Rr.subVectors(e.c,Us),mi.subVectors(Ar,wr),gi.subVectors(Rr,Ar),$i.subVectors(wr,Rr);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-$i.z,$i.y,mi.z,0,-mi.x,gi.z,0,-gi.x,$i.z,0,-$i.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-$i.y,$i.x,0];return!xu(n,wr,Ar,Rr,$o)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,wr,Ar,Rr,$o))?!1:(Ko.crossVectors(mi,gi),n=[Ko.x,Ko.y,Ko.z],xu(n,wr,Ar,Rr,$o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,qo=new wo,wr=new H,Ar=new H,Rr=new H,mi=new H,gi=new H,$i=new H,Us=new H,$o=new H,Ko=new H,Ki=new H;function xu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ki.fromArray(t,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),u=n.dot(Ki),f=i.dot(Ki);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const cy=new wo,Ns=new H,yu=new H;class Rl{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(yu)),this.expandByPoint(Ns.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new H,Su=new H,Zo=new H,_i=new H,Mu=new H,Qo=new H,Eu=new H;class o_{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Su.copy(e).add(n).multiplyScalar(.5),Zo.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(Su);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Zo),a=_i.dot(this.direction),l=-_i.dot(Zo),u=_i.lengthSq(),f=Math.abs(1-o*o);let d,h,p,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const S=1/f;d*=S,h*=S,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Su).addScaledVector(Zo,h),p}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){Mu.subVectors(n,e),Qo.subVectors(i,e),Eu.crossVectors(Mu,Qo);let o=this.direction.dot(Eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(_i,Qo));if(l<0)return null;const u=a*this.direction.dot(Mu.cross(_i));if(u<0||l+u>o)return null;const f=-a*_i.dot(Eu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,p,x,S,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,p,x,S,m)}set(e,n,i,r,s,o,a,l,u,f,d,h,p,x,S,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=x,c[11]=S,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,x=a*f,S=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+x*u,n[5]=h-S*u,n[9]=-a*l,n[2]=S-h*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,x=u*f,S=u*d;n[0]=h+S*a,n[4]=x*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-x,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,x=u*f,S=u*d;n[0]=h-S*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*f,n[9]=S-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,x=a*f,S=a*d;n[0]=l*f,n[4]=x*u-p,n[8]=h*u+S,n[1]=l*d,n[5]=S*u+h,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,S=a*u;n[0]=l*f,n[4]=S-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+x,n[10]=h-S*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,S=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+S,n[5]=o*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,dy)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),vi.crossVectors(i,sn),vi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),vi.crossVectors(i,sn)),vi.normalize(),Jo.crossVectors(sn,vi),r[0]=vi.x,r[4]=Jo.x,r[8]=sn.x,r[1]=vi.y,r[5]=Jo.y,r[9]=sn.y,r[2]=vi.z,r[6]=Jo.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],x=i[2],S=i[6],m=i[10],c=i[14],v=i[3],g=i[7],M=i[11],P=i[15],R=r[0],A=r[4],N=r[8],E=r[12],_=r[1],C=r[5],I=r[9],F=r[13],L=r[2],G=r[6],D=r[10],B=r[14],b=r[3],O=r[7],V=r[11],K=r[15];return s[0]=o*R+a*_+l*L+u*b,s[4]=o*A+a*C+l*G+u*O,s[8]=o*N+a*I+l*D+u*V,s[12]=o*E+a*F+l*B+u*K,s[1]=f*R+d*_+h*L+p*b,s[5]=f*A+d*C+h*G+p*O,s[9]=f*N+d*I+h*D+p*V,s[13]=f*E+d*F+h*B+p*K,s[2]=x*R+S*_+m*L+c*b,s[6]=x*A+S*C+m*G+c*O,s[10]=x*N+S*I+m*D+c*V,s[14]=x*E+S*F+m*B+c*K,s[3]=v*R+g*_+M*L+P*b,s[7]=v*A+g*C+M*G+P*O,s[11]=v*N+g*I+M*D+P*V,s[15]=v*E+g*F+M*B+P*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],x=e[3],S=e[7],m=e[11],c=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+S*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],x=e[12],S=e[13],m=e[14],c=e[15],v=d*m*u-S*h*u+S*l*p-a*m*p-d*l*c+a*h*c,g=x*h*u-f*m*u-x*l*p+o*m*p+f*l*c-o*h*c,M=f*S*u-x*d*u+x*a*p-o*S*p-f*a*c+o*d*c,P=x*d*l-f*S*l-x*a*h+o*S*h+f*a*m-o*d*m,R=n*v+i*g+r*M+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=v*A,e[1]=(S*h*s-d*m*s-S*r*p+i*m*p+d*r*c-i*h*c)*A,e[2]=(a*m*s-S*l*s+S*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(f*m*s-x*h*s+x*r*p-n*m*p-f*r*c+n*h*c)*A,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(x*d*s-f*S*s-x*i*p+n*S*p+f*i*c-n*d*c)*A,e[10]=(o*S*s-x*a*s+x*i*u-n*S*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(f*S*r-x*d*r+x*i*h-n*S*h-f*i*m+n*d*m)*A,e[14]=(x*a*r-o*S*r-x*i*l+n*S*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,p=s*f,x=s*d,S=o*f,m=o*d,c=a*d,v=l*u,g=l*f,M=l*d,P=i.x,R=i.y,A=i.z;return r[0]=(1-(S+c))*P,r[1]=(p+M)*P,r[2]=(x-g)*P,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+c))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(x+g)*A,r[9]=(m-v)*A,r[10]=(1-(h+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,f=1/o,d=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=oi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===oi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===al)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=oi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*f;let x,S;if(a===oi)x=(o+s)*d,S=-2*d;else if(a===al)x=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new H,Pn=new gt,fy=new H(0,0,0),dy=new H(1,1,1),vi=new H,Jo=new H,sn=new H,Yh=new gt,qh=new To;class Cl{constructor(e=0,n=0,i=0,r=Cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cl.DEFAULT_ORDER="XYZ";class a_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const $h=new H,Pr=new To,Zn=new gt,ea=new H,Is=new H,py=new H,my=new To,Kh=new H(1,0,0),Zh=new H(0,1,0),Qh=new H(0,0,1),gy={type:"added"},_y={type:"removed"};class jt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new H,n=new Cl,i=new To,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new ke}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,n){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ea.copy(e):ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Is,ea,this.up):Zn.lookAt(ea,Is,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_y)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new H(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new H,Qn=new H,Tu=new H,Jn=new H,Lr=new H,br=new H,Jh=new H,wu=new H,Au=new H,Ru=new H;let ta=!1;class Nn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),Qn.subVectors(i,n),Tu.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(Qn),l=Ln.dot(Tu),u=Qn.dot(Qn),f=Qn.dot(Tu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,n,i,r,s,o,a,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),Qn.subVectors(e,n),Ln.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Ln.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),br.subVectors(s,i),wu.subVectors(e,i);const l=Lr.dot(wu),u=br.dot(wu);if(l<=0&&u<=0)return n.copy(i);Au.subVectors(e,r);const f=Lr.dot(Au),d=br.dot(Au);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Lr,o);Ru.subVectors(e,s);const p=Lr.dot(Ru),x=br.dot(Ru);if(x>=0&&p<=x)return n.copy(s);const S=p*u-l*x;if(S<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(br,a);const m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return Jh.subVectors(s,r),a=(d-f)/(d-f+(p-x)),n.copy(r).addScaledVector(Jh,a);const c=1/(m+S+h);return o=S*c,a=h*c,n.copy(i).addScaledVector(Lr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=iy(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const i=l_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return $e.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Zt(Ot.r*255,0,255))*65536+Math.round(Zt(Ot.g*255,0,255))*256+Math.round(Zt(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){$e.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(na);const i=pu(xi.h,na.h,n),r=pu(xi.s,na.s,n),s=pu(xi.l,na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new We;We.NAMES=l_;let vy=0;class Ao extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=ss,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Ic,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ic&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class u_ extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,ia=new Xe;class xt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ia.fromBufferAttribute(this,n),ia.applyMatrix3(e),this.setXY(n,ia.x,ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}}class c_ extends xt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class f_ extends xt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hr extends xt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xy=0;const _n=new gt,Pu=new jt,Dr=new H,on=new wo,Fs=new wo,At=new H;class kn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?f_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,Fs.min),on.expandByPoint(At),At.addVectors(on.max,Fs.max),on.expandByPoint(At)):(on.expandByPoint(Fs.min),on.expandByPoint(Fs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)At.fromBufferAttribute(a,u),l&&(Dr.fromBufferAttribute(e,u),At.add(Dr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let _=0;_<a;_++)u[_]=new H,f[_]=new H;const d=new H,h=new H,p=new H,x=new Xe,S=new Xe,m=new Xe,c=new H,v=new H;function g(_,C,I){d.fromArray(r,_*3),h.fromArray(r,C*3),p.fromArray(r,I*3),x.fromArray(o,_*2),S.fromArray(o,C*2),m.fromArray(o,I*2),h.sub(d),p.sub(d),S.sub(x),m.sub(x);const F=1/(S.x*m.y-m.x*S.y);isFinite(F)&&(c.copy(h).multiplyScalar(m.y).addScaledVector(p,-S.y).multiplyScalar(F),v.copy(p).multiplyScalar(S.x).addScaledVector(h,-m.x).multiplyScalar(F),u[_].add(c),u[C].add(c),u[I].add(c),f[_].add(v),f[C].add(v),f[I].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let _=0,C=M.length;_<C;++_){const I=M[_],F=I.start,L=I.count;for(let G=F,D=F+L;G<D;G+=3)g(i[G+0],i[G+1],i[G+2])}const P=new H,R=new H,A=new H,N=new H;function E(_){A.fromArray(s,_*3),N.copy(A);const C=u[_];P.copy(C),P.sub(A.multiplyScalar(A.dot(C))).normalize(),R.crossVectors(N,C);const F=R.dot(f[_])<0?-1:1;l[_*4]=P.x,l[_*4+1]=P.y,l[_*4+2]=P.z,l[_*4+3]=F}for(let _=0,C=M.length;_<C;++_){const I=M[_],F=I.start,L=I.count;for(let G=F,D=F+L;G<D;G+=3)E(i[G+0]),E(i[G+1]),E(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,f=new H,d=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let c=0;c<f;c++)h[x++]=u[p++]}return new xt(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new gt,Zi=new o_,ra=new Rl,tp=new H,Ur=new H,Nr=new H,Ir=new H,Lu=new H,sa=new H,oa=new Xe,aa=new Xe,la=new Xe,np=new H,ip=new H,rp=new H,ua=new H,ca=new H;class Ci extends jt{constructor(e=new kn,n=new u_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Lu.fromBufferAttribute(d,e),o?sa.addScaledVector(Lu,f):sa.addScaledVector(Lu.sub(n),f))}n.add(sa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ra.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ra,tp)===null||Zi.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=g;M<P;M+=3){const R=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);r=fa(this,c,e,i,u,f,d,R,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,c=S;m<c;m+=3){const v=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=fa(this,o,e,i,u,f,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=g;M<P;M+=3){const R=M,A=M+1,N=M+2;r=fa(this,c,e,i,u,f,d,R,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,c=S;m<c;m+=3){const v=m,g=m+1,M=m+2;r=fa(this,o,e,i,u,f,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function yy(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ca);return u<n.near||u>n.far?null:{distance:u,point:ca.clone(),object:t}}function fa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Nr),t.getVertexPosition(u,Ir);const f=yy(t,e,n,i,Ur,Nr,Ir,ua);if(f){r&&(oa.fromBufferAttribute(r,a),aa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,u),f.uv=Nn.getInterpolation(ua,Ur,Nr,Ir,oa,aa,la,new Xe)),s&&(oa.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,l),la.fromBufferAttribute(s,u),f.uv1=Nn.getInterpolation(ua,Ur,Nr,Ir,oa,aa,la,new Xe),f.uv2=f.uv1),o&&(np.fromBufferAttribute(o,a),ip.fromBufferAttribute(o,l),rp.fromBufferAttribute(o,u),f.normal=Nn.getInterpolation(ua,Ur,Nr,Ir,np,ip,rp,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new H,materialIndex:0};Nn.getNormal(Ur,Nr,Ir,d.normal),f.face=d}return f}class Ro extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(u,3)),this.setAttribute("normal",new hr(f,3)),this.setAttribute("uv",new hr(d,2));function x(S,m,c,v,g,M,P,R,A,N,E){const _=M/A,C=P/N,I=M/2,F=P/2,L=R/2,G=A+1,D=N+1;let B=0,b=0;const O=new H;for(let V=0;V<D;V++){const K=V*C-F;for(let Z=0;Z<G;Z++){const j=Z*_-I;O[S]=j*v,O[m]=K*g,O[c]=L,u.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[c]=R>0?1:-1,f.push(O.x,O.y,O.z),d.push(Z/A),d.push(1-V/N),B+=1}}for(let V=0;V<N;V++)for(let K=0;K<A;K++){const Z=h+K+G*V,j=h+K+G*(V+1),Q=h+(K+1)+G*(V+1),re=h+(K+1)+G*V;l.push(Z,j,re),l.push(j,Q,re),b+=6}a.addGroup(p,b,E),p+=b,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function Sy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}const My={clone:_s,merge:Gt};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class h_ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends h_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class wy extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Fr,Or,e,n);r.layers=this.layers,this.add(r);const s=new un(Fr,Or,e,n);s.layers=this.layers,this.add(s);const o=new un(Fr,Or,e,n);o.layers=this.layers,this.add(o);const a=new un(Fr,Or,e,n);a.layers=this.layers,this.add(a);const l=new un(Fr,Or,e,n);l.layers=this.layers,this.add(l);const u=new un(Fr,Or,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class p_ extends dn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ps,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?Lt:Mn),this.texture=new p_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Oi});s.uniforms.tEquirect.value=n;const o=new Ci(r,s),a=n.minFilter;return n.minFilter===go&&(n.minFilter=Sn),new wy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const bu=new H,Ry=new H,Cy=new ke;class tr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bu.subVectors(i,n).cross(Ry.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Cy.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Rl,da=new H;class Wf{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],x=r[9],S=r[10],m=r[11],c=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-p,M-c).normalize(),i[1].setComponents(l+s,h+u,m+p,M+c).normalize(),i[2].setComponents(l+o,h+f,m+x,M+v).normalize(),i[3].setComponents(l-o,h-f,m-x,M-v).normalize(),i[4].setComponents(l-a,h-d,m-S,M-g).normalize(),n===oi)i[5].setComponents(l+a,h+d,m+S,M+g).normalize();else if(n===al)i[5].setComponents(a,d,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Py(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,p=d.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,d,h),u.onUploadCallback();let S;if(d instanceof Float32Array)S=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=t.SHORT;else if(d instanceof Uint32Array)S=t.UNSIGNED_INT;else if(d instanceof Int32Array)S=t.INT;else if(d instanceof Int8Array)S=t.BYTE;else if(d instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,f,d){const h=f.array,p=f._updateRange,x=f.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let S=0,m=x.length;S<m;S++){const c=x[S];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class Xf extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],x=[],S=[],m=[];for(let c=0;c<f;c++){const v=c*h-o;for(let g=0;g<u;g++){const M=g*d-s;x.push(M,-v,0),S.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,M=v+u*(c+1),P=v+1+u*(c+1),R=v+1+u*c;p.push(g,M,R),p.push(M,P,R)}this.setIndex(p),this.setAttribute("position",new hr(x,3)),this.setAttribute("normal",new hr(S,3)),this.setAttribute("uv",new hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ES=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PS=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
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
#endif`,XS=`#ifdef USE_MORPHTARGETS
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
#endif`,jS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,hM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pM=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,FM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,zM=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,qM=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,QM=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
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
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Ly,alphahash_pars_fragment:by,alphamap_fragment:Dy,alphamap_pars_fragment:Uy,alphatest_fragment:Ny,alphatest_pars_fragment:Iy,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:zy,batching_vertex:ky,begin_vertex:By,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:qy,color_fragment:$y,color_pars_fragment:Ky,color_pars_vertex:Zy,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:oS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:uS,envmap_pars_fragment:cS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:ES,envmap_vertex:dS,fog_vertex:hS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:_S,lightmap_fragment:vS,lightmap_pars_fragment:xS,lights_lambert_fragment:yS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:TS,lights_toon_pars_fragment:wS,lights_phong_fragment:AS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:PS,lights_fragment_begin:LS,lights_fragment_maps:bS,lights_fragment_end:DS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:IS,logdepthbuf_vertex:FS,map_fragment:OS,map_pars_fragment:zS,map_particle_fragment:kS,map_particle_pars_fragment:BS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:GS,morphcolor_vertex:VS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:jS,normal_fragment_begin:YS,normal_fragment_maps:qS,normal_pars_fragment:$S,normal_pars_vertex:KS,normal_vertex:ZS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:tM,iridescence_pars_fragment:nM,opaque_fragment:iM,packing:rM,premultiplied_alpha_fragment:sM,project_vertex:oM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:hM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:gM,skinning_vertex:_M,skinnormal_vertex:vM,specularmap_fragment:xM,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:MM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:wM,uv_pars_vertex:AM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:LM,backgroundCube_vert:bM,backgroundCube_frag:DM,cube_vert:UM,cube_frag:NM,depth_vert:IM,depth_frag:FM,distanceRGBA_vert:OM,distanceRGBA_frag:zM,equirect_vert:kM,equirect_frag:BM,linedashed_vert:HM,linedashed_frag:GM,meshbasic_vert:VM,meshbasic_frag:WM,meshlambert_vert:XM,meshlambert_frag:jM,meshmatcap_vert:YM,meshmatcap_frag:qM,meshnormal_vert:$M,meshnormal_frag:KM,meshphong_vert:ZM,meshphong_frag:QM,meshphysical_vert:JM,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Wn={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wn.physical={uniforms:Gt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ha={r:0,b:0,g:0};function uE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,f,d=null,h=0,p=null;function x(m,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?S(a,l):g&&g.isColor&&(S(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===wl)?(f===void 0&&(f=new Ci(new Ro(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:_s(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,(d!==g||h!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Ci(new Xf(2,2),new Vi({name:"BackgroundMaterial",uniforms:_s(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,c){m.getRGB(ha,d_(t)),i.buffers.color.setClear(ha.r,ha.g,ha.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:x}}function cE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function d(L,G,D,B,b){let O=!1;if(o){const V=S(B,D,G);u!==V&&(u=V,p(u.object)),O=c(L,B,D,b),O&&v(L,B,D,b)}else{const V=G.wireframe===!0;(u.geometry!==B.id||u.program!==D.id||u.wireframe!==V)&&(u.geometry=B.id,u.program=D.id,u.wireframe=V,O=!0)}b!==null&&n.update(b,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(L,G,D,B),b!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(b).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function S(L,G,D){const B=D.wireframe===!0;let b=a[L.id];b===void 0&&(b={},a[L.id]=b);let O=b[G.id];O===void 0&&(O={},b[G.id]=O);let V=O[B];return V===void 0&&(V=m(h()),O[B]=V),V}function m(L){const G=[],D=[],B=[];for(let b=0;b<r;b++)G[b]=0,D[b]=0,B[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:D,attributeDivisors:B,object:L,attributes:{},index:null}}function c(L,G,D,B){const b=u.attributes,O=G.attributes;let V=0;const K=D.getAttributes();for(const Z in K)if(K[Z].location>=0){const Q=b[Z];let re=O[Z];if(re===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;V++}return u.attributesNum!==V||u.index!==B}function v(L,G,D,B){const b={},O=G.attributes;let V=0;const K=D.getAttributes();for(const Z in K)if(K[Z].location>=0){let Q=O[Z];Q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),b[Z]=re,V++}u.attributes=b,u.attributesNum=V,u.index=B}function g(){const L=u.newAttributes;for(let G=0,D=L.length;G<D;G++)L[G]=0}function M(L){P(L,0)}function P(L,G){const D=u.newAttributes,B=u.enabledAttributes,b=u.attributeDivisors;D[L]=1,B[L]===0&&(t.enableVertexAttribArray(L),B[L]=1),b[L]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),b[L]=G)}function R(){const L=u.newAttributes,G=u.enabledAttributes;for(let D=0,B=G.length;D<B;D++)G[D]!==L[D]&&(t.disableVertexAttribArray(D),G[D]=0)}function A(L,G,D,B,b,O,V){V===!0?t.vertexAttribIPointer(L,G,D,b,O):t.vertexAttribPointer(L,G,D,B,b,O)}function N(L,G,D,B){if(i.isWebGL2===!1&&(L.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const b=B.attributes,O=D.getAttributes(),V=G.defaultAttributeValues;for(const K in O){const Z=O[K];if(Z.location>=0){let j=b[K];if(j===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const Q=j.normalized,re=j.itemSize,pe=n.get(j);if(pe===void 0)continue;const he=pe.buffer,Ee=pe.type,we=pe.bytesPerElement,_e=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||j.gpuType===Yg);if(j.isInterleavedBufferAttribute){const Ge=j.data,W=Ge.stride,ct=j.offset;if(Ge.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)P(Z.location+Se,Ge.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se);t.bindBuffer(t.ARRAY_BUFFER,he);for(let Se=0;Se<Z.locationSize;Se++)A(Z.location+Se,re/Z.locationSize,Ee,Q,W*we,(ct+re/Z.locationSize*Se)*we,_e)}else{if(j.isInstancedBufferAttribute){for(let Ge=0;Ge<Z.locationSize;Ge++)P(Z.location+Ge,j.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)M(Z.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,he);for(let Ge=0;Ge<Z.locationSize;Ge++)A(Z.location+Ge,re/Z.locationSize,Ee,Q,re*we,re/Z.locationSize*Ge*we,_e)}}else if(V!==void 0){const Q=V[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(Z.location,Q);break;case 3:t.vertexAttrib3fv(Z.location,Q);break;case 4:t.vertexAttrib4fv(Z.location,Q);break;default:t.vertexAttrib1fv(Z.location,Q)}}}}R()}function E(){I();for(const L in a){const G=a[L];for(const D in G){const B=G[D];for(const b in B)x(B[b].object),delete B[b];delete G[D]}delete a[L]}}function _(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const D in G){const B=G[D];for(const b in B)x(B[b].object),delete B[b];delete G[D]}delete a[L.id]}function C(L){for(const G in a){const D=a[G];if(D[L.id]===void 0)continue;const B=D[L.id];for(const b in B)x(B[b].object),delete B[b];delete D[L.id]}}function I(){F(),f=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:R}}function fE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,x;if(r)p=t,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(f[x],d[x]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let x=0;for(let S=0;S<h;S++)x+=d[S];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function dE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=o||e.has("OES_texture_float"),P=g&&M,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:R}}function hE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new tr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,g=v*4;let M=c.clippingState||null;l.value=M,M=f(x,h,g,p);for(let P=0;P!==g;++P)M[P]=n[P];c.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,x){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const c=p+S*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,M=p;g!==S;++g,M+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function pE(t){let e=new WeakMap;function n(o,a){return a===Fc?o.mapping=ps:a===Oc&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Oc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ay(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mE extends h_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=4,sp=[.125,.215,.35,.446,.526,.582],rr=20,Du=new mE,op=new We;let Uu=null,Nu=0,Iu=0;const nr=(1+Math.sqrt(5))/2,zr=1/nr,ap=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,nr,zr),new H(0,nr,-zr),new H(zr,0,nr),new H(-zr,0,nr),new H(nr,zr,0),new H(-nr,zr,0)];class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Nu,Iu),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:_o,format:Fn,colorSpace:di,depthBuffer:!1},r=up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(s)),this._blurMaterial=_E(s,e,n)}return r}_compileMaterial(e){const n=new Ci(this._lodPlanes[0],e);this._renderer.compile(n,Du)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(op),f.toneMapping=zi,f.autoClear=!1;const p=new u_({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Ci(new Ro,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(op),S=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;pa(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),S&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ap[(r-1)%ap.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Ci(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rr-1),S=s/x,m=isFinite(s)?1+Math.floor(f*S):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const c=[];let v=0;for(let A=0;A<rr;++A){const N=A/S,E=Math.exp(-N*N/2);c.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-Zr?r-g+Zr:0),R=4*(this._cubeSize-M);pa(n,P,R,3*M,2*M),l.setRenderTarget(n),l.render(d,Du)}}function gE(t){const e=[],n=[],i=[];let r=t;const s=t-Zr+1+sp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zr?l=sp[o-t+Zr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,S=3,m=2,c=1,v=new Float32Array(S*x*p),g=new Float32Array(m*x*p),M=new Float32Array(c*x*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,N=R>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];v.set(E,S*x*R),g.set(h,m*x*R);const _=[R,R,R,R,R,R];M.set(_,c*x*R)}const P=new kn;P.setAttribute("position",new xt(v,S)),P.setAttribute("uv",new xt(g,m)),P.setAttribute("faceIndex",new xt(M,c)),e.push(P),r>Zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function up(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _E(t,e,n){const i=new Float32Array(rr),r=new H(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function cp(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function fp(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function vE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Fc||l===Oc,f=l===ps||l===ms;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new lp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new lp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const S=h.morphAttributes[x];for(let m=0,c=S.length;m<c;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const S=p[x];for(let m=0,c=S.length;m<c;m++)e.update(S[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let S=0;if(p!==null){const v=p.array;S=p.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],R=v[g+1],A=v[g+2];h.push(P,R,R,A,A,P)}}else if(x!==void 0){const v=x.array;S=x.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,R=g+1,A=g+2;h.push(P,R,R,A,A,P)}}else return;const m=new(n_(h)?f_:c_)(h,1);m.version=S;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function SE(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function f(p,x){t.drawElements(s,x,a,p*l),n.update(x,s,1)}function d(p,x,S){if(S===0)return;let m,c;if(r)m=t,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](s,x,a,p*l,S),n.update(x,s,S)}function h(p,x,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<S;c++)this.render(p[c]/l,x[c]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,S);let c=0;for(let v=0;v<S;v++)c+=x[v];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function ME(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function EE(t,e){return t[0]-e[0]}function TE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function wE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let m=s.get(f);if(m===void 0||m.count!==S){let G=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const g=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let E=0;g===!0&&(E=1),M===!0&&(E=2),P===!0&&(E=3);let _=f.attributes.position.count*E,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const I=new Float32Array(_*C*4*S),F=new s_(I,_,C,S);F.type=Ri,F.needsUpdate=!0;const L=E*4;for(let D=0;D<S;D++){const B=R[D],b=A[D],O=N[D],V=_*C*4*D;for(let K=0;K<B.count;K++){const Z=K*L;g===!0&&(o.fromBufferAttribute(B,K),I[V+Z+0]=o.x,I[V+Z+1]=o.y,I[V+Z+2]=o.z,I[V+Z+3]=0),M===!0&&(o.fromBufferAttribute(b,K),I[V+Z+4]=o.x,I[V+Z+5]=o.y,I[V+Z+6]=o.z,I[V+Z+7]=0),P===!0&&(o.fromBufferAttribute(O,K),I[V+Z+8]=o.x,I[V+Z+9]=o.y,I[V+Z+10]=o.z,I[V+Z+11]=O.itemSize===4?o.w:1)}}m={count:S,texture:F,size:new Xe(_,C)},s.set(f,m),f.addEventListener("dispose",G)}let c=0;for(let g=0;g<h.length;g++)c+=h[g];const v=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let S=i[f.id];if(S===void 0||S.length!==x){S=[];for(let M=0;M<x;M++)S[M]=[M,0];i[f.id]=S}for(let M=0;M<x;M++){const P=S[M];P[0]=M,P[1]=h[M]}S.sort(TE);for(let M=0;M<8;M++)M<x&&S[M][1]?(a[M][0]=S[M][0],a[M][1]=S[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(EE);const m=f.morphAttributes.position,c=f.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const P=a[M],R=P[0],A=P[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+M)!==m[R]&&f.setAttribute("morphTarget"+M,m[R]),c&&f.getAttribute("morphNormal"+M)!==c[R]&&f.setAttribute("morphNormal"+M,c[R]),r[M]=A,v+=A):(m&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),c&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function AE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class g_ extends dn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:fr,f!==fr&&f!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===fr&&(i=Ai),i===void 0&&f===gs&&(i=cr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const __=new dn,v_=new g_(1,1);v_.compareFunction=t_;const x_=new s_,y_=new uy,S_=new p_,dp=[],hp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dp[r];if(s===void 0&&(s=new Float32Array(r),dp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pl(t,e){let n=hp[e];n===void 0&&(n=new Int32Array(e),hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function RE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function bE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;gp.set(i),t.uniformMatrix2fv(this.addr,!1,gp),Et(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;mp.set(i),t.uniformMatrix3fv(this.addr,!1,mp),Et(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;pp.set(i),t.uniformMatrix4fv(this.addr,!1,pp),Et(n,i)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?v_:__;n.setTexture2D(e||s,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y_,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S_,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x_,r)}function jE(t){switch(t){case 5126:return RE;case 35664:return CE;case 35665:return PE;case 35666:return LE;case 35674:return bE;case 35675:return DE;case 35676:return UE;case 5124:case 35670:return NE;case 35667:case 35671:return IE;case 35668:case 35672:return FE;case 35669:case 35673:return OE;case 5125:return zE;case 36294:return kE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function YE(t,e){t.uniform1fv(this.addr,e)}function qE(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function $E(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function KE(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function ZE(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QE(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JE(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eT(t,e){t.uniform1iv(this.addr,e)}function tT(t,e){t.uniform2iv(this.addr,e)}function nT(t,e){t.uniform3iv(this.addr,e)}function iT(t,e){t.uniform4iv(this.addr,e)}function rT(t,e){t.uniform1uiv(this.addr,e)}function sT(t,e){t.uniform2uiv(this.addr,e)}function oT(t,e){t.uniform3uiv(this.addr,e)}function aT(t,e){t.uniform4uiv(this.addr,e)}function lT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||__,s[o])}function uT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||y_,s[o])}function cT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S_,s[o])}function fT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||x_,s[o])}function dT(t){switch(t){case 5126:return YE;case 35664:return qE;case 35665:return $E;case 35666:return KE;case 35674:return ZE;case 35675:return QE;case 35676:return JE;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return fT}}class hT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class pT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dT(n.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function _p(t,e){t.seq.push(e),t.map[e.id]=e}function gT(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_p(n,u===void 0?new hT(a,t,e):new pT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new mT(a),_p(n,d)),n=d}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _T=37297;let vT=0;function xT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function yT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===ol&&n===sl?i="LinearDisplayP3ToLinearSRGB":e===sl&&n===ol&&(i="LinearSRGBToLinearDisplayP3"),t){case di:case Al:return[i,"LinearTransferOETF"];case Lt:case Vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xT(t.getShaderSource(e),o)}else return r}function ST(t,e){const n=yT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function MT(t,e){let n;switch(e){case bx:n="Linear";break;case Dx:n="Reinhard";break;case Ux:n="OptimizedCineon";break;case Nx:n="ACESFilmic";break;case Fx:n="AgX";break;case Ix:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ET(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function TT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qr).join(`
`)}function wT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qr(t){return t!==""}function yp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(t){return t.replace(RT,PT)}const CT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PT(t,e){let n=Ie[e];if(n===void 0){const i=CT.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vc(n)}const LT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(t){return t.replace(LT,bT)}function bT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ep(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function IT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case Px:e="ENVMAP_BLENDING_MIX";break;case Lx:e="ENVMAP_BLENDING_ADD";break}return e}function FT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DT(n),u=UT(n),f=NT(n),d=IT(n),h=FT(n),p=n.isWebGL2?"":ET(n),x=TT(n),S=wT(s),m=r.createProgram();let c,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Qr).join(`
`),c.length>0&&(c+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Qr).join(`
`),v.length>0&&(v+=`
`)):(c=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),v=[p,Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==zi?MT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ST("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Vc(o),o=yp(o,n),o=Sp(o,n),a=Vc(a),a=yp(a,n),a=Sp(a,n),o=Mp(o),a=Mp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=g+c+o,P=g+v+a,R=vp(r,r.VERTEX_SHADER,M),A=vp(r,r.FRAGMENT_SHADER,P);r.attachShader(m,R),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(A).trim();let D=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,A);else{const b=xp(r,R,"vertex"),O=xp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+b+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||G==="")&&(B=!1);B&&(I.diagnostics={runnable:D,programLog:F,vertexShader:{log:L,prefix:c},fragmentShader:{log:G,prefix:v}})}r.deleteShader(R),r.deleteShader(A),E=new ba(r,m),_=AT(r,m)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let _;this.getAttributes=function(){return _===void 0&&N(this),_};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,_T)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let zT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BT(e),n.set(e,i)),i}}class BT{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}}function HT(t,e,n,i,r,s,o){const a=new a_,l=new kT,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return E===0?"uv":`uv${E}`}function m(E,_,C,I,F){const L=I.fog,G=F.geometry,D=E.isMeshStandardMaterial?I.environment:null,B=(E.isMeshStandardMaterial?n:e).get(E.envMap||D),b=B&&B.mapping===wl?B.image.height:null,O=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const V=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,K=V!==void 0?V.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let j,Q,re,pe;if(O){const Bt=Wn[O];j=Bt.vertexShader,Q=Bt.fragmentShader}else j=E.vertexShader,Q=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const he=t.getRenderTarget(),Ee=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,_e=!!E.map,Ge=!!E.matcap,W=!!B,ct=!!E.aoMap,Se=!!E.lightMap,Ae=!!E.bumpMap,ge=!!E.normalMap,Ke=!!E.displacementMap,be=!!E.emissiveMap,w=!!E.metalnessMap,y=!!E.roughnessMap,k=E.anisotropy>0,ee=E.clearcoat>0,$=E.iridescence>0,J=E.sheen>0,ce=E.transmission>0,ie=k&&!!E.anisotropyMap,ae=ee&&!!E.clearcoatMap,ve=ee&&!!E.clearcoatNormalMap,ye=ee&&!!E.clearcoatRoughnessMap,te=$&&!!E.iridescenceMap,qe=$&&!!E.iridescenceThicknessMap,Be=J&&!!E.sheenColorMap,Le=J&&!!E.sheenRoughnessMap,Me=!!E.specularMap,me=!!E.specularColorMap,Ne=!!E.specularIntensityMap,je=ce&&!!E.transmissionMap,ft=ce&&!!E.thicknessMap,Oe=!!E.gradientMap,se=!!E.alphaMap,U=E.alphaTest>0,le=!!E.alphaHash,ue=!!E.extensions,Ce=!!G.attributes.uv1,Te=!!G.attributes.uv2,Ze=!!G.attributes.uv3;let Qe=zi;return E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Qe=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:Q,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:di,map:_e,matcap:Ge,envMap:W,envMapMode:W&&B.mapping,envMapCubeUVHeight:b,aoMap:ct,lightMap:Se,bumpMap:Ae,normalMap:ge,displacementMap:h&&Ke,emissiveMap:be,normalMapObjectSpace:ge&&E.normalMapType===$x,normalMapTangentSpace:ge&&E.normalMapType===qx,metalnessMap:w,roughnessMap:y,anisotropy:k,anisotropyMap:ie,clearcoat:ee,clearcoatMap:ae,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,iridescence:$,iridescenceMap:te,iridescenceThicknessMap:qe,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:me,specularIntensityMap:Ne,transmission:ce,transmissionMap:je,thicknessMap:ft,gradientMap:Oe,opaque:E.transparent===!1&&E.blending===ss,alphaMap:se,alphaTest:U,alphaHash:le,combine:E.combine,mapUv:_e&&S(E.map.channel),aoMapUv:ct&&S(E.aoMap.channel),lightMapUv:Se&&S(E.lightMap.channel),bumpMapUv:Ae&&S(E.bumpMap.channel),normalMapUv:ge&&S(E.normalMap.channel),displacementMapUv:Ke&&S(E.displacementMap.channel),emissiveMapUv:be&&S(E.emissiveMap.channel),metalnessMapUv:w&&S(E.metalnessMap.channel),roughnessMapUv:y&&S(E.roughnessMap.channel),anisotropyMapUv:ie&&S(E.anisotropyMap.channel),clearcoatMapUv:ae&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&S(E.sheenRoughnessMap.channel),specularMapUv:Me&&S(E.specularMap.channel),specularColorMapUv:me&&S(E.specularColorMap.channel),specularIntensityMapUv:Ne&&S(E.specularIntensityMap.channel),transmissionMapUv:je&&S(E.transmissionMap.channel),thicknessMapUv:ft&&S(E.thicknessMap.channel),alphaMapUv:se&&S(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ge||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:Ze,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(_e||se),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ii,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ue&&E.extensions.derivatives===!0,extensionFragDepth:ue&&E.extensions.fragDepth===!0,extensionDrawBuffers:ue&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)_.push(C),_.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(_,E),g(_,E),_.push(t.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function v(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function g(E,_){a.disableAll(),_.isWebGL2&&a.enable(0),_.supportsVertexTextures&&a.enable(1),_.instancing&&a.enable(2),_.instancingColor&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){const _=x[E.type];let C;if(_){const I=Wn[_];C=My.clone(I.uniforms)}else C=E.uniforms;return C}function P(E,_){let C;for(let I=0,F=u.length;I<F;I++){const L=u[I];if(L.cacheKey===_){C=L,++C.usedTimes;break}}return C===void 0&&(C=new OT(t,_,E,s),u.push(C)),C}function R(E){if(--E.usedTimes===0){const _=u.indexOf(E);u[_]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:M,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:N}}function GT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function VT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,S,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:S,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=S,c.group=m),e++,c}function a(d,h,p,x,S,m){const c=o(d,h,p,x,S,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,x,S,m){const c=o(d,h,p,x,S,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||VT),i.length>1&&i.sort(h||Tp),r.length>1&&r.sort(h||Tp)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function WT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wp,t.set(i,[o])):r>=s.length?(o=new wp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function XT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new We};break;case"SpotLight":n={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function jT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YT=0;function qT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $T(t,e){const n=new XT,i=jT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new H);const s=new H,o=new gt,a=new gt;function l(f,d){let h=0,p=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,m=0,c=0,v=0,g=0,M=0,P=0,R=0,A=0,N=0,E=0;f.sort(qT);const _=d===!0?Math.PI:1;for(let I=0,F=f.length;I<F;I++){const L=f[I],G=L.color,D=L.intensity,B=L.distance,b=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*D*_,p+=G.g*D*_,x+=G.b*D*_;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],D);E++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=b,r.directionalShadowMatrix[S]=L.shadow.matrix,M++}r.directional[S]=O,S++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(G).multiplyScalar(D*_),O.distance=B,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[c]=O;const V=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,V.updateMatrices(L),L.castShadow&&N++),r.spotLightMatrix[c]=V.matrix,L.castShadow){const K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=b,R++}c++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(G).multiplyScalar(D),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=O,v++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*_),O.distance=L.distance,O.decay=L.decay,L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=b,r.pointShadowMatrix[m]=L.shadow.matrix,P++}r.point[m]=O,m++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar(D*_),O.groundColor.copy(L.groundColor).multiplyScalar(D*_),r.hemi[g]=O,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const C=r.hash;(C.directionalLength!==S||C.pointLength!==m||C.spotLength!==c||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==P||C.numSpotShadows!==R||C.numSpotMaps!==A||C.numLightProbes!==E)&&(r.directional.length=S,r.spot.length=c,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+A-N,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=E,C.directionalLength=S,C.pointLength=m,C.spotLength=c,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=P,C.numSpotShadows=R,C.numSpotMaps=A,C.numLightProbes=E,r.version=YT++)}function u(f,d){let h=0,p=0,x=0,S=0,m=0;const c=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const M=f[v];if(M.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(c),h++}else if(M.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(c),x++}else if(M.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),a.identity(),o.copy(M.matrixWorld),o.premultiply(c),a.extractRotation(o),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),p++}else if(M.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function Ap(t,e){const n=new $T(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function KT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Ap(t,e),n.set(s,[l])):o>=a.length?(l=new Ap(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class ZT extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QT extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function tw(t,e,n){let i=new Wf;const r=new Xe,s=new Xe,o=new st,a=new ZT({depthPacking:Yx}),l=new QT,u={},f=n.maxTextureSize,d={[Gi]:nn,[nn]:Gi,[ii]:ii},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:JT,fragmentShader:ew}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new kn;x.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ci(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let c=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),_=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Oi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=c!==ei&&this.type===ei,L=c===ei&&this.type!==ei;for(let G=0,D=R.length;G<D;G++){const B=R[G],b=B.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const O=b.getFrameExtents();if(r.multiply(O),s.copy(b.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,b.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,b.mapSize.y=s.y)),b.map===null||F===!0||L===!0){const K=this.type!==ei?{minFilter:Wt,magFilter:Wt}:{};b.map!==null&&b.map.dispose(),b.map=new xr(r.x,r.y,K),b.map.texture.name=B.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const V=b.getViewportCount();for(let K=0;K<V;K++){const Z=b.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(o),b.updateMatrices(B,K),i=b.getFrustum(),M(A,N,b.camera,B,this.type)}b.isPointLightShadow!==!0&&this.type===ei&&v(b,N),b.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(E,_,C)};function v(R,A){const N=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,N,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,N,p,S,null)}function g(R,A,N,E){let _=null;const C=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)_=C;else if(_=N.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=_.uuid,F=A.uuid;let L=u[I];L===void 0&&(L={},u[I]=L);let G=L[F];G===void 0&&(G=_.clone(),L[F]=G,A.addEventListener("dispose",P)),_=G}if(_.visible=A.visible,_.wireframe=A.wireframe,E===ei?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=t.properties.get(_);I.light=N}return _}function M(R,A,N,E,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===ei)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const F=e.update(R),L=R.material;if(Array.isArray(L)){const G=F.groups;for(let D=0,B=G.length;D<B;D++){const b=G[D],O=L[b.materialIndex];if(O&&O.visible){const V=g(R,O,E,_);R.onBeforeShadow(t,R,A,N,F,V,b),t.renderBufferDirect(N,null,F,V,R,b),R.onAfterShadow(t,R,A,N,F,V,b)}}}else if(L.visible){const G=g(R,L,E,_);R.onBeforeShadow(t,R,A,N,F,G,null),t.renderBufferDirect(N,null,F,G,R,null),R.onAfterShadow(t,R,A,N,F,G,null)}}const I=R.children;for(let F=0,L=I.length;F<L;F++)M(I[F],A,N,E,_)}function P(R){R.target.removeEventListener("dispose",P);for(const N in u){const E=u[N],_=R.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function nw(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const le=new st;let ue=null;const Ce=new st(0,0,0,0);return{setMask:function(Te){ue!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){U=Te},setClear:function(Te,Ze,Qe,Tt,Bt){Bt===!0&&(Te*=Tt,Ze*=Tt,Qe*=Tt),le.set(Te,Ze,Qe,Tt),Ce.equals(le)===!1&&(t.clearColor(Te,Ze,Qe,Tt),Ce.copy(le))},reset:function(){U=!1,ue=null,Ce.set(-1,0,0,0)}}}function s(){let U=!1,le=null,ue=null,Ce=null;return{setTest:function(Te){Te?we(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(Te){le!==Te&&!U&&(t.depthMask(Te),le=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case Mx:t.depthFunc(t.NEVER);break;case Ex:t.depthFunc(t.ALWAYS);break;case Tx:t.depthFunc(t.LESS);break;case il:t.depthFunc(t.LEQUAL);break;case wx:t.depthFunc(t.EQUAL);break;case Ax:t.depthFunc(t.GEQUAL);break;case Rx:t.depthFunc(t.GREATER);break;case Cx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Te}},setLocked:function(Te){U=Te},setClear:function(Te){Ce!==Te&&(t.clearDepth(Te),Ce=Te)},reset:function(){U=!1,le=null,ue=null,Ce=null}}}function o(){let U=!1,le=null,ue=null,Ce=null,Te=null,Ze=null,Qe=null,Tt=null,Bt=null;return{setTest:function(Je){U||(Je?we(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Je){le!==Je&&!U&&(t.stencilMask(Je),le=Je)},setFunc:function(Je,Ht,Hn){(ue!==Je||Ce!==Ht||Te!==Hn)&&(t.stencilFunc(Je,Ht,Hn),ue=Je,Ce=Ht,Te=Hn)},setOp:function(Je,Ht,Hn){(Ze!==Je||Qe!==Ht||Tt!==Hn)&&(t.stencilOp(Je,Ht,Hn),Ze=Je,Qe=Ht,Tt=Hn)},setLocked:function(Je){U=Je},setClear:function(Je){Bt!==Je&&(t.clearStencil(Je),Bt=Je)},reset:function(){U=!1,le=null,ue=null,Ce=null,Te=null,Ze=null,Qe=null,Tt=null,Bt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,S=[],m=null,c=!1,v=null,g=null,M=null,P=null,R=null,A=null,N=null,E=new We(0,0,0),_=0,C=!1,I=null,F=null,L=null,G=null,D=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let b=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),b=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),b=O>=2);let K=null,Z={};const j=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),re=new st().fromArray(j),pe=new st().fromArray(Q);function he(U,le,ue,Ce){const Te=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(U,Ze),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<ue;Qe++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(le+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ze}const Ee={};Ee[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(t.DEPTH_TEST),l.setFunc(il),be(!1),w(lh),we(t.CULL_FACE),ge(Oi);function we(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function _e(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Ge(U,le){return p[U]!==le?(t.bindFramebuffer(U,le),p[U]=le,i&&(U===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function W(U,le){let ue=S,Ce=!1;if(U)if(ue=x.get(le),ue===void 0&&(ue=[],x.set(le,ue)),U.isWebGLMultipleRenderTargets){const Te=U.texture;if(ue.length!==Te.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Te.length;Ze<Qe;Ze++)ue[Ze]=t.COLOR_ATTACHMENT0+Ze;ue.length=Te.length,Ce=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ct(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Se={[ir]:t.FUNC_ADD,[ax]:t.FUNC_SUBTRACT,[lx]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[fh]=t.MIN,Se[dh]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Se[fh]=U.MIN_EXT,Se[dh]=U.MAX_EXT)}const Ae={[ux]:t.ZERO,[cx]:t.ONE,[fx]:t.SRC_COLOR,[Nc]:t.SRC_ALPHA,[_x]:t.SRC_ALPHA_SATURATE,[mx]:t.DST_COLOR,[hx]:t.DST_ALPHA,[dx]:t.ONE_MINUS_SRC_COLOR,[Ic]:t.ONE_MINUS_SRC_ALPHA,[gx]:t.ONE_MINUS_DST_COLOR,[px]:t.ONE_MINUS_DST_ALPHA,[vx]:t.CONSTANT_COLOR,[xx]:t.ONE_MINUS_CONSTANT_COLOR,[yx]:t.CONSTANT_ALPHA,[Sx]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(U,le,ue,Ce,Te,Ze,Qe,Tt,Bt,Je){if(U===Oi){c===!0&&(_e(t.BLEND),c=!1);return}if(c===!1&&(we(t.BLEND),c=!0),U!==ox){if(U!==v||Je!==C){if((g!==ir||R!==ir)&&(t.blendEquation(t.FUNC_ADD),g=ir,R=ir),Je)switch(U){case ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nl:t.blendFunc(t.ONE,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,P=null,A=null,N=null,E.set(0,0,0),_=0,v=U,C=Je}return}Te=Te||le,Ze=Ze||ue,Qe=Qe||Ce,(le!==g||Te!==R)&&(t.blendEquationSeparate(Se[le],Se[Te]),g=le,R=Te),(ue!==M||Ce!==P||Ze!==A||Qe!==N)&&(t.blendFuncSeparate(Ae[ue],Ae[Ce],Ae[Ze],Ae[Qe]),M=ue,P=Ce,A=Ze,N=Qe),(Tt.equals(E)===!1||Bt!==_)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Bt),E.copy(Tt),_=Bt),v=U,C=!1}function Ke(U,le){U.side===ii?_e(t.CULL_FACE):we(t.CULL_FACE);let ue=U.side===nn;le&&(ue=!ue),be(ue),U.blending===ss&&U.transparent===!1?ge(Oi):ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ce=U.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(U){I!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),I=U)}function w(U){U!==ix?(we(t.CULL_FACE),U!==F&&(U===lh?t.cullFace(t.BACK):U===rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),F=U}function y(U){U!==L&&(b&&t.lineWidth(U),L=U)}function k(U,le,ue){U?(we(t.POLYGON_OFFSET_FILL),(G!==le||D!==ue)&&(t.polygonOffset(le,ue),G=le,D=ue)):_e(t.POLYGON_OFFSET_FILL)}function ee(U){U?we(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function $(U){U===void 0&&(U=t.TEXTURE0+B-1),K!==U&&(t.activeTexture(U),K=U)}function J(U,le,ue){ue===void 0&&(K===null?ue=t.TEXTURE0+B-1:ue=K);let Ce=Z[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ue]=Ce),(Ce.type!==U||Ce.texture!==le)&&(K!==ue&&(t.activeTexture(ue),K=ue),t.bindTexture(U,le||Ee[U]),Ce.type=U,Ce.texture=le)}function ce(){const U=Z[K];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function je(U){pe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function ft(U,le){let ue=d.get(le);ue===void 0&&(ue=new WeakMap,d.set(le,ue));let Ce=ue.get(U);Ce===void 0&&(Ce=t.getUniformBlockIndex(le,U.name),ue.set(U,Ce))}function Oe(U,le){const Ce=d.get(le).get(U);f.get(le)!==Ce&&(t.uniformBlockBinding(le,Ce,U.__bindingPointIndex),f.set(le,Ce))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,Z={},p={},x=new WeakMap,S=[],m=null,c=!1,v=null,g=null,M=null,P=null,R=null,A=null,N=null,E=new We(0,0,0),_=0,C=!1,I=null,F=null,L=null,G=null,D=null,re.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:_e,bindFramebuffer:Ge,drawBuffers:W,useProgram:ct,setBlending:ge,setMaterial:Ke,setFlipSided:be,setCullFace:w,setLineWidth:y,setPolygonOffset:k,setScissorTest:ee,activeTexture:$,bindTexture:J,unbindTexture:ce,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:Me,texImage3D:me,updateUBOMapping:ft,uniformBlockBinding:Oe,texStorage2D:Be,texStorage3D:Le,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:te,compressedTexSubImage3D:qe,scissor:Ne,viewport:je,reset:se}}function iw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,y){return p?new OffscreenCanvas(w,y):ll("canvas")}function S(w,y,k,ee){let $=1;if((w.width>ee||w.height>ee)&&($=ee/Math.max(w.width,w.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const J=y?Gc:Math.floor,ce=J($*w.width),ie=J($*w.height);d===void 0&&(d=x(ce,ie));const ae=k?x(ce,ie):d;return ae.width=ce,ae.height=ie,ae.getContext("2d").drawImage(w,0,0,ce,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ce+"x"+ie+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Gh(w.width)&&Gh(w.height)}function c(w){return a?!1:w.wrapS!==In||w.wrapT!==In||w.minFilter!==Wt&&w.minFilter!==Sn}function v(w,y){return w.generateMipmaps&&y&&w.minFilter!==Wt&&w.minFilter!==Sn}function g(w){t.generateMipmap(w)}function M(w,y,k,ee,$=!1){if(a===!1)return y;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=y;if(y===t.RED&&(k===t.FLOAT&&(J=t.R32F),k===t.HALF_FLOAT&&(J=t.R16F),k===t.UNSIGNED_BYTE&&(J=t.R8)),y===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(J=t.R8UI),k===t.UNSIGNED_SHORT&&(J=t.R16UI),k===t.UNSIGNED_INT&&(J=t.R32UI),k===t.BYTE&&(J=t.R8I),k===t.SHORT&&(J=t.R16I),k===t.INT&&(J=t.R32I)),y===t.RG&&(k===t.FLOAT&&(J=t.RG32F),k===t.HALF_FLOAT&&(J=t.RG16F),k===t.UNSIGNED_BYTE&&(J=t.RG8)),y===t.RGBA){const ce=$?rl:$e.getTransfer(ee);k===t.FLOAT&&(J=t.RGBA32F),k===t.HALF_FLOAT&&(J=t.RGBA16F),k===t.UNSIGNED_BYTE&&(J=ce===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function P(w,y,k){return v(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){return w===Wt||w===hh||w===au?t.NEAREST:t.LINEAR}function A(w){const y=w.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&f.delete(y)}function N(w){const y=w.target;y.removeEventListener("dispose",N),C(y)}function E(w){const y=i.get(w);if(y.__webglInit===void 0)return;const k=w.source,ee=h.get(k);if(ee){const $=ee[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&_(w),Object.keys(ee).length===0&&h.delete(k)}i.remove(w)}function _(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const k=w.source,ee=h.get(k);delete ee[y.__cacheKey],o.memory.textures--}function C(w){const y=w.texture,k=i.get(w),ee=i.get(y);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(k.__webglFramebuffer[$]))for(let J=0;J<k.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(k.__webglFramebuffer[$][J]);else t.deleteFramebuffer(k.__webglFramebuffer[$]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[$])}else{if(Array.isArray(k.__webglFramebuffer))for(let $=0;$<k.__webglFramebuffer.length;$++)t.deleteFramebuffer(k.__webglFramebuffer[$]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let $=0;$<k.__webglColorRenderbuffer.length;$++)k.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,J=y.length;$<J;$++){const ce=i.get(y[$]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(y[$])}i.remove(y),i.remove(w)}let I=0;function F(){I=0}function L(){const w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function G(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function D(w,y){const k=i.get(w);if(w.isVideoTexture&&Ke(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,w,y);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+y)}function B(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){re(k,w,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+y)}function b(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){re(k,w,y);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+y)}function O(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){pe(k,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+y)}const V={[zc]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[kc]:t.MIRRORED_REPEAT},K={[Wt]:t.NEAREST,[hh]:t.NEAREST_MIPMAP_NEAREST,[au]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Ox]:t.LINEAR_MIPMAP_NEAREST,[go]:t.LINEAR_MIPMAP_LINEAR},Z={[Kx]:t.NEVER,[ny]:t.ALWAYS,[Zx]:t.LESS,[t_]:t.LEQUAL,[Qx]:t.EQUAL,[ty]:t.GEQUAL,[Jx]:t.GREATER,[ey]:t.NOTEQUAL};function j(w,y,k){if(k?(t.texParameteri(w,t.TEXTURE_WRAP_S,V[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,V[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,V[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,K[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,K[y.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==In||y.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,R(y.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Wt&&y.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Wt||y.minFilter!==au&&y.minFilter!==go||y.type===Ri&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===_o&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Q(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const ee=y.source;let $=h.get(ee);$===void 0&&($={},h.set(ee,$));const J=G(y);if(J!==w.__cacheKey){$[J]===void 0&&($[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[J].usedTimes++;const ce=$[w.__cacheKey];ce!==void 0&&($[w.__cacheKey].usedTimes--,ce.usedTimes===0&&_(y)),w.__cacheKey=J,w.__webglTexture=$[J].texture}return k}function re(w,y,k){let ee=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=t.TEXTURE_3D);const $=Q(w,y),J=y.source;n.bindTexture(ee,w.__webglTexture,t.TEXTURE0+k);const ce=i.get(J);if(J.version!==ce.__version||$===!0){n.activeTexture(t.TEXTURE0+k);const ie=$e.getPrimaries($e.workingColorSpace),ae=y.colorSpace===Mn?null:$e.getPrimaries(y.colorSpace),ve=y.colorSpace===Mn||ie===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ye=c(y)&&m(y.image)===!1;let te=S(y.image,ye,!1,r.maxTextureSize);te=be(y,te);const qe=m(te)||a,Be=s.convert(y.format,y.colorSpace);let Le=s.convert(y.type),Me=M(y.internalFormat,Be,Le,y.colorSpace,y.isVideoTexture);j(ee,y,qe);let me;const Ne=y.mipmaps,je=a&&y.isVideoTexture!==!0&&Me!==Jg,ft=ce.__version===void 0||$===!0,Oe=P(y,te,qe);if(y.isDepthTexture)Me=t.DEPTH_COMPONENT,a?y.type===Ri?Me=t.DEPTH_COMPONENT32F:y.type===Ai?Me=t.DEPTH_COMPONENT24:y.type===cr?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:y.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===fr&&Me===t.DEPTH_COMPONENT&&y.type!==Gf&&y.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ai,Le=s.convert(y.type)),y.format===gs&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,y.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=cr,Le=s.convert(y.type))),ft&&(je?n.texStorage2D(t.TEXTURE_2D,1,Me,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,Be,Le,null));else if(y.isDataTexture)if(Ne.length>0&&qe){je&&ft&&n.texStorage2D(t.TEXTURE_2D,Oe,Me,Ne[0].width,Ne[0].height);for(let se=0,U=Ne.length;se<U;se++)me=Ne[se],je?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Be,Le,me.data):n.texImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,Be,Le,me.data);y.generateMipmaps=!1}else je?(ft&&n.texStorage2D(t.TEXTURE_2D,Oe,Me,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Be,Le,te.data)):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,Be,Le,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,Me,Ne[0].width,Ne[0].height,te.depth);for(let se=0,U=Ne.length;se<U;se++)me=Ne[se],y.format!==Fn?Be!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,te.depth,Be,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,te.depth,Be,Le,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,te.depth,0,Be,Le,me.data)}else{je&&ft&&n.texStorage2D(t.TEXTURE_2D,Oe,Me,Ne[0].width,Ne[0].height);for(let se=0,U=Ne.length;se<U;se++)me=Ne[se],y.format!==Fn?Be!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Be,me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Be,Le,me.data):n.texImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,Be,Le,me.data)}else if(y.isDataArrayTexture)je?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,Me,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Be,Le,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,Be,Le,te.data);else if(y.isData3DTexture)je?(ft&&n.texStorage3D(t.TEXTURE_3D,Oe,Me,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Be,Le,te.data)):n.texImage3D(t.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,Be,Le,te.data);else if(y.isFramebufferTexture){if(ft)if(je)n.texStorage2D(t.TEXTURE_2D,Oe,Me,te.width,te.height);else{let se=te.width,U=te.height;for(let le=0;le<Oe;le++)n.texImage2D(t.TEXTURE_2D,le,Me,se,U,0,Be,Le,null),se>>=1,U>>=1}}else if(Ne.length>0&&qe){je&&ft&&n.texStorage2D(t.TEXTURE_2D,Oe,Me,Ne[0].width,Ne[0].height);for(let se=0,U=Ne.length;se<U;se++)me=Ne[se],je?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Be,Le,me):n.texImage2D(t.TEXTURE_2D,se,Me,Be,Le,me);y.generateMipmaps=!1}else je?(ft&&n.texStorage2D(t.TEXTURE_2D,Oe,Me,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Le,te)):n.texImage2D(t.TEXTURE_2D,0,Me,Be,Le,te);v(y,qe)&&g(ee),ce.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function pe(w,y,k){if(y.image.length!==6)return;const ee=Q(w,y),$=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+k);const J=i.get($);if($.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ce=$e.getPrimaries($e.workingColorSpace),ie=y.colorSpace===Mn?null:$e.getPrimaries(y.colorSpace),ae=y.colorSpace===Mn||ce===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ve=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,te=[];for(let se=0;se<6;se++)!ve&&!ye?te[se]=S(y.image[se],!1,!0,r.maxCubemapSize):te[se]=ye?y.image[se].image:y.image[se],te[se]=be(y,te[se]);const qe=te[0],Be=m(qe)||a,Le=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),me=M(y.internalFormat,Le,Me,y.colorSpace),Ne=a&&y.isVideoTexture!==!0,je=J.__version===void 0||ee===!0;let ft=P(y,qe,Be);j(t.TEXTURE_CUBE_MAP,y,Be);let Oe;if(ve){Ne&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,me,qe.width,qe.height);for(let se=0;se<6;se++){Oe=te[se].mipmaps;for(let U=0;U<Oe.length;U++){const le=Oe[U];y.format!==Fn?Le!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,le.width,le.height,Le,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,le.width,le.height,Le,Me,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,me,le.width,le.height,0,Le,Me,le.data)}}}else{Oe=y.mipmaps,Ne&&je&&(Oe.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,me,te[0].width,te[0].height));for(let se=0;se<6;se++)if(ye){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,te[se].width,te[se].height,Le,Me,te[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,te[se].width,te[se].height,0,Le,Me,te[se].data);for(let U=0;U<Oe.length;U++){const ue=Oe[U].image[se].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,ue.width,ue.height,Le,Me,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,me,ue.width,ue.height,0,Le,Me,ue.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Me,te[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Le,Me,te[se]);for(let U=0;U<Oe.length;U++){const le=Oe[U];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,Le,Me,le.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,me,Le,Me,le.image[se])}}}v(y,Be)&&g(t.TEXTURE_CUBE_MAP),J.__version=$.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function he(w,y,k,ee,$,J){const ce=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),ae=M(k.internalFormat,ce,ie,k.colorSpace);if(!i.get(y).__hasExternalTextures){const ye=Math.max(1,y.width>>J),te=Math.max(1,y.height>>J);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,J,ae,ye,te,y.depth,0,ce,ie,null):n.texImage2D($,J,ae,ye,te,0,ce,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,i.get(k).__webglTexture,0,Ae(y)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,i.get(k).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(w,y,k){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||ge(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Ri?ee=t.DEPTH_COMPONENT32F:$.type===Ai&&(ee=t.DEPTH_COMPONENT24));const J=Ae(y);ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,ee,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,ee,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Ae(y);k&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<ee.length;$++){const J=ee[$],ce=s.convert(J.format,J.colorSpace),ie=s.convert(J.type),ae=M(J.internalFormat,ce,ie,J.colorSpace),ve=Ae(y);k&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ae,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,ae,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ae,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const ee=i.get(y.depthTexture).__webglTexture,$=Ae(y);if(y.depthTexture.format===fr)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(y.depthTexture.format===gs)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function _e(w){const y=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");we(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=t.createRenderbuffer(),Ee(y.__webglDepthbuffer[ee],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),Ee(y.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(w,y,k){const ee=i.get(w);y!==void 0&&he(ee.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&_e(w)}function W(w){const y=w.texture,k=i.get(w),ee=i.get(y);w.addEventListener("dispose",N),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=y.version,o.memory.textures++);const $=w.isWebGLCubeRenderTarget===!0,J=w.isWebGLMultipleRenderTargets===!0,ce=m(w)||a;if($){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let ae=0;ae<y.mipmaps.length;ae++)k.__webglFramebuffer[ie][ae]=t.createFramebuffer()}else k.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)k.__webglFramebuffer[ie]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const ie=w.texture;for(let ae=0,ve=ie.length;ae<ve;ae++){const ye=i.get(ie[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ge(w)===!1){const ie=J?y:[y];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const ve=ie[ae];k.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const ye=s.convert(ve.format,ve.colorSpace),te=s.convert(ve.type),qe=M(ve.internalFormat,ye,te,ve.colorSpace,w.isXRRenderTarget===!0),Be=Ae(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,qe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),j(t.TEXTURE_CUBE_MAP,y,ce);for(let ie=0;ie<6;ie++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ae=0;ae<y.mipmaps.length;ae++)he(k.__webglFramebuffer[ie][ae],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else he(k.__webglFramebuffer[ie],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);v(y,ce)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const ie=w.texture;for(let ae=0,ve=ie.length;ae<ve;ae++){const ye=ie[ae],te=i.get(ye);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),j(t.TEXTURE_2D,ye,ce),he(k.__webglFramebuffer,w,ye,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),v(ye,ce)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ie,ee.__webglTexture),j(ie,y,ce),a&&y.mipmaps&&y.mipmaps.length>0)for(let ae=0;ae<y.mipmaps.length;ae++)he(k.__webglFramebuffer[ae],w,y,t.COLOR_ATTACHMENT0,ie,ae);else he(k.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,ie,0);v(y,ce)&&g(ie),n.unbindTexture()}w.depthBuffer&&_e(w)}function ct(w){const y=m(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,$=k.length;ee<$;ee++){const J=k[ee];if(v(J,y)){const ce=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(J).__webglTexture;n.bindTexture(ce,ie),g(ce),n.unbindTexture()}}}function Se(w){if(a&&w.samples>0&&ge(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,ee=w.height;let $=t.COLOR_BUFFER_BIT;const J=[],ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(w),ae=w.isWebGLMultipleRenderTargets===!0;if(ae)for(let ve=0;ve<y.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){J.push(t.COLOR_ATTACHMENT0+ve),w.depthBuffer&&J.push(ce);const ye=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ye===!1&&(w.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]),ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ce])),ae){const te=i.get(y[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,k,ee,0,0,k,ee,$,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ve=0;ve<y.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);const ye=i.get(y[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ae(w){return Math.min(r.maxSamples,w.samples)}function ge(w){const y=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ke(w){const y=o.render.frame;f.get(w)!==y&&(f.set(w,y),w.update())}function be(w,y){const k=w.colorSpace,ee=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Bc||k!==di&&k!==Mn&&($e.getTransfer(k)===nt?a===!1?e.has("EXT_sRGB")===!0&&ee===Fn?(w.format=Bc,w.minFilter=Sn,w.generateMipmaps=!1):y=i_.sRGBToLinear(y):(ee!==Fn||$!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=b,this.setTextureCube=O,this.rebindTextures=Ge,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ge}function rw(t,e,n){const i=n.isWebGL2;function r(s,o=Mn){let a;const l=$e.getTransfer(o);if(s===ki)return t.UNSIGNED_BYTE;if(s===qg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===$g)return t.UNSIGNED_SHORT_5_5_5_1;if(s===zx)return t.BYTE;if(s===kx)return t.SHORT;if(s===Gf)return t.UNSIGNED_SHORT;if(s===Yg)return t.INT;if(s===Ai)return t.UNSIGNED_INT;if(s===Ri)return t.FLOAT;if(s===_o)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Bx)return t.ALPHA;if(s===Fn)return t.RGBA;if(s===Hx)return t.LUMINANCE;if(s===Gx)return t.LUMINANCE_ALPHA;if(s===fr)return t.DEPTH_COMPONENT;if(s===gs)return t.DEPTH_STENCIL;if(s===Bc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vx)return t.RED;if(s===Kg)return t.RED_INTEGER;if(s===Wx)return t.RG;if(s===Zg)return t.RG_INTEGER;if(s===Qg)return t.RGBA_INTEGER;if(s===lu||s===uu||s===cu||s===fu)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ph||s===mh||s===gh||s===_h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ph)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vh)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===Ph||s===Lh||s===bh||s===Dh||s===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ah)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===du||s===Nh||s===Ih)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===du)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ih)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xx||s===Fh||s===Oh||s===zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===du)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Oh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class sw extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ow={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),c=this._getHandJoint(u,S);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class aw extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,x=null;const S=n.getContextAttributes();let m=null,c=null;const v=[],g=[],M=new Xe;let P=null;const R=new un;R.layers.enable(1),R.viewport=new st;const A=new un;A.layers.enable(2),A.viewport=new st;const N=[R,A],E=new sw;E.layers.enable(1),E.layers.enable(2);let _=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=v[j];return Q===void 0&&(Q=new Ou,v[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=v[j];return Q===void 0&&(Q=new Ou,v[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=v[j];return Q===void 0&&(Q=new Ou,v[j]=Q),Q.getHandSpace()};function I(j){const Q=g.indexOf(j.inputSource);if(Q===-1)return;const re=v[Q];re!==void 0&&(re.update(j.inputSource,j.frame,u||o),re.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",L);for(let j=0;j<v.length;j++){const Q=g[j];Q!==null&&(g[j]=null,v[j].disconnect(Q))}_=null,C=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,c=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",F),r.addEventListener("inputsourceschange",L),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new xr(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Q=null,re=null,pe=null;S.depth&&(pe=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=S.stencil?gs:fr,re=S.stencil?cr:Ai);const he={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new xr(h.textureWidth,h.textureHeight,{format:Fn,type:ki,depthTexture:new g_(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Ee=e.properties.get(c);Ee.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let Q=0;Q<j.removed.length;Q++){const re=j.removed[Q],pe=g.indexOf(re);pe>=0&&(g[pe]=null,v[pe].disconnect(re))}for(let Q=0;Q<j.added.length;Q++){const re=j.added[Q];let pe=g.indexOf(re);if(pe===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=g.length){g.push(re),pe=Ee;break}else if(g[Ee]===null){g[Ee]=re,pe=Ee;break}if(pe===-1)break}const he=v[pe];he&&he.connect(re)}}const G=new H,D=new H;function B(j,Q,re){G.setFromMatrixPosition(Q.matrixWorld),D.setFromMatrixPosition(re.matrixWorld);const pe=G.distanceTo(D),he=Q.projectionMatrix.elements,Ee=re.projectionMatrix.elements,we=he[14]/(he[10]-1),_e=he[14]/(he[10]+1),Ge=(he[9]+1)/he[5],W=(he[9]-1)/he[5],ct=(he[8]-1)/he[0],Se=(Ee[8]+1)/Ee[0],Ae=we*ct,ge=we*Se,Ke=pe/(-ct+Se),be=Ke*-ct;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(Ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const w=we+Ke,y=_e+Ke,k=Ae-be,ee=ge+(pe-be),$=Ge*_e/y*w,J=W*_e/y*w;j.projectionMatrix.makePerspective(k,ee,$,J,w,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function b(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.near=A.near=R.near=j.near,E.far=A.far=R.far=j.far,(_!==E.near||C!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),_=E.near,C=E.far);const Q=j.parent,re=E.cameras;b(E,Q);for(let pe=0;pe<re.length;pe++)b(re[pe],Q);re.length===2?B(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),O(j,E,Q)};function O(j,Q,re){re===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let V=null;function K(j,Q){if(f=Q.getViewerPose(u||o),x=Q,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let pe=!1;re.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let he=0;he<re.length;he++){const Ee=re[he];let we=null;if(p!==null)we=p.getViewport(Ee);else{const Ge=d.getViewSubImage(h,Ee);we=Ge.viewport,he===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let _e=N[he];_e===void 0&&(_e=new un,_e.layers.enable(he),_e.viewport=new st,N[he]=_e),_e.matrix.fromArray(Ee.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ee.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(we.x,we.y,we.width,we.height),he===0&&(E.matrix.copy(_e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(_e)}}for(let re=0;re<v.length;re++){const pe=g[re],he=v[re];pe!==null&&he!==void 0&&he.update(pe,Q,u||o)}V&&V(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Z=new m_;Z.setAnimationLoop(K),this.setAnimationLoop=function(j){V=j},this.dispose=function(){}}}function lw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,d_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,g,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,M)):c.isMeshMatcapMaterial?(s(m,c),x(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),S(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===nn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===nn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nn&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function S(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function u(v,g){let M=r[v.id];M===void 0&&(x(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const R=e.render.frame;s[v.id]!==R&&(h(v),s[v.id]=R)}function f(v){const g=d();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,A=M.length;R<A;R++){const N=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,_=N.length;E<_;E++){const C=N[E];if(p(C,R,E,P)===!0){const I=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let G=0;G<F.length;G++){const D=F[G],B=S(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,I+L,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,M,P){const R=v.value,A=g+"_"+M;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const N=P[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return P[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function x(v){const g=v.uniforms;let M=0;const P=16;for(let A=0,N=g.length;A<N;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let _=0,C=E.length;_<C;_++){const I=E[_],F=Array.isArray(I.value)?I.value:[I.value];for(let L=0,G=F.length;L<G;L++){const D=F[L],B=S(D),b=M%P;b!==0&&P-b<B.boundary&&(M+=P-b),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=B.storage}}}const R=M%P;return R>0&&(M+=P-R),v.__size=M,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class M_{constructor(e={}){const{canvas:n=ry(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let S=null,m=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,R=0,A=null,N=-1,E=null;const _=new st,C=new st;let I=null;const F=new We(0);let L=0,G=n.width,D=n.height,B=1,b=null,O=null;const V=new st(0,0,G,D),K=new st(0,0,G,D);let Z=!1;const j=new Wf;let Q=!1,re=!1,pe=null;const he=new gt,Ee=new Xe,we=new H,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return A===null?B:1}let W=i;function ct(T,z){for(let Y=0;Y<T.length;Y++){const q=T[Y],X=n.getContext(q,z);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",le,!1),W===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),W=ct(z,T),W===null)throw ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Ae,ge,Ke,be,w,y,k,ee,$,J,ce,ie,ae,ve,ye,te,qe,Be,Le,Me,me,Ne,je;function ft(){Se=new xE(W),Ae=new dE(W,Se,e),Se.init(Ae),me=new rw(W,Se,Ae),ge=new nw(W,Se,Ae),Ke=new ME(W),be=new GT,w=new iw(W,Se,ge,be,Ae,me,Ke),y=new pE(g),k=new vE(g),ee=new Py(W,Ae),Ne=new cE(W,Se,ee,Ae),$=new yE(W,ee,Ke,Ne),J=new AE(W,$,ee,Ke),Be=new wE(W,Ae,w),ye=new hE(be),ce=new HT(g,y,k,Se,Ae,Ne,ye),ie=new lw(g,be),ae=new WT,ve=new KT(Se,Ae),qe=new uE(g,y,k,ge,J,h,l),te=new tw(g,J,Ae),je=new uw(W,Ke,Ae,ge),Le=new fE(W,Se,Ke,Ae),Me=new SE(W,Se,Ke,Ae),Ke.programs=ce.programs,g.capabilities=Ae,g.extensions=Se,g.properties=be,g.renderLists=ae,g.shadowMap=te,g.state=ge,g.info=Ke}ft();const Oe=new aw(g,W);this.xr=Oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(G,D,!1))},this.getSize=function(T){return T.set(G,D)},this.setSize=function(T,z,Y=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,D=z,n.width=Math.floor(T*B),n.height=Math.floor(z*B),Y===!0&&(n.style.width=T+"px",n.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(G*B,D*B).floor()},this.setDrawingBufferSize=function(T,z,Y){G=T,D=z,B=Y,n.width=Math.floor(T*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,z,Y,q){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,z,Y,q),ge.viewport(_.copy(V).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,z,Y,q){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,z,Y,q),ge.scissor(C.copy(K).multiplyScalar(B).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){b=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,z=!0,Y=!0){let q=0;if(T){let X=!1;if(A!==null){const fe=A.texture.format;X=fe===Qg||fe===Zg||fe===Kg}if(X){const fe=A.texture.type,xe=fe===ki||fe===Ai||fe===Gf||fe===cr||fe===qg||fe===$g,Re=qe.getClearColor(),Pe=qe.getClearAlpha(),Fe=Re.r,De=Re.g,Ue=Re.b;xe?(p[0]=Fe,p[1]=De,p[2]=Ue,p[3]=Pe,W.clearBufferuiv(W.COLOR,0,p)):(x[0]=Fe,x[1]=De,x[2]=Ue,x[3]=Pe,W.clearBufferiv(W.COLOR,0,x))}else q|=W.COLOR_BUFFER_BIT}z&&(q|=W.DEPTH_BUFFER_BIT),Y&&(q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ae.dispose(),ve.dispose(),be.dispose(),y.dispose(),k.dispose(),J.dispose(),Ne.dispose(),je.dispose(),ce.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Bt),Oe.removeEventListener("sessionend",Je),pe&&(pe.dispose(),pe=null),Ht.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ke.autoReset,z=te.enabled,Y=te.autoUpdate,q=te.needsUpdate,X=te.type;ft(),Ke.autoReset=T,te.enabled=z,te.autoUpdate=Y,te.needsUpdate=q,te.type=X}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const z=T.target;z.removeEventListener("dispose",ue),Ce(z)}function Ce(T){Te(T),be.remove(T)}function Te(T){const z=be.get(T).programs;z!==void 0&&(z.forEach(function(Y){ce.releaseProgram(Y)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,q,X,fe){z===null&&(z=_e);const xe=X.isMesh&&X.matrixWorld.determinant()<0,Re=w_(T,z,Y,q,X);ge.setMaterial(q,xe);let Pe=Y.index,Fe=1;if(q.wireframe===!0){if(Pe=$.getWireframeAttribute(Y),Pe===void 0)return;Fe=2}const De=Y.drawRange,Ue=Y.attributes.position;let pt=De.start*Fe,rn=(De.start+De.count)*Fe;fe!==null&&(pt=Math.max(pt,fe.start*Fe),rn=Math.min(rn,(fe.start+fe.count)*Fe)),Pe!==null?(pt=Math.max(pt,0),rn=Math.min(rn,Pe.count)):Ue!=null&&(pt=Math.max(pt,0),rn=Math.min(rn,Ue.count));const wt=rn-pt;if(wt<0||wt===1/0)return;Ne.setup(X,q,Re,Y,Pe);let qn,ot=Le;if(Pe!==null&&(qn=ee.get(Pe),ot=Me,ot.setIndex(qn)),X.isMesh)q.wireframe===!0?(ge.setLineWidth(q.wireframeLinewidth*Ge()),ot.setMode(W.LINES)):ot.setMode(W.TRIANGLES);else if(X.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*Ge()),X.isLineSegments?ot.setMode(W.LINES):X.isLineLoop?ot.setMode(W.LINE_LOOP):ot.setMode(W.LINE_STRIP)}else X.isPoints?ot.setMode(W.POINTS):X.isSprite&&ot.setMode(W.TRIANGLES);if(X.isBatchedMesh)ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ot.renderInstances(pt,wt,X.count);else if(Y.isInstancedBufferGeometry){const ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ll=Math.min(Y.instanceCount,ze);ot.renderInstances(pt,wt,Ll)}else ot.render(pt,wt)};function Ze(T,z,Y){T.transparent===!0&&T.side===ii&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Po(T,z,Y),T.side=Gi,T.needsUpdate=!0,Po(T,z,Y),T.side=ii):Po(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),m=ve.get(Y),m.init(),v.push(m),Y.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(g._useLegacyLights);const q=new Set;return T.traverse(function(X){const fe=X.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Re=fe[xe];Ze(Re,Y,X),q.add(Re)}else Ze(fe,Y,X),q.add(fe)}),v.pop(),m=null,q},this.compileAsync=function(T,z,Y=null){const q=this.compile(T,z,Y);return new Promise(X=>{function fe(){if(q.forEach(function(xe){be.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){X(T);return}setTimeout(fe,10)}Se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Qe=null;function Tt(T){Qe&&Qe(T)}function Bt(){Ht.stop()}function Je(){Ht.start()}const Ht=new m_;Ht.setAnimationLoop(Tt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(T){Qe=T,Oe.setAnimationLoop(T),T===null?Ht.stop():Ht.start()},Oe.addEventListener("sessionstart",Bt),Oe.addEventListener("sessionend",Je),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(z),z=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,z,A),m=ve.get(T,v.length),m.init(),v.push(m),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(he),re=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,re),S=ae.get(T,c.length),S.init(),c.push(S),Hn(T,z,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(b,O),this.info.render.frame++,Q===!0&&ye.beginShadows();const Y=m.state.shadowsArray;if(te.render(Y,T,z),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(S,T),m.setupLights(g._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let X=0,fe=q.length;X<fe;X++){const xe=q[X];Yf(S,T,xe,xe.viewport)}}else Yf(S,T,z);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,z),Ne.resetDefaultState(),N=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,c.pop(),c.length>0?S=c[c.length-1]:S=null};function Hn(T,z,Y,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){q&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const xe=J.update(T),Re=T.material;Re.visible&&S.push(T,xe,Re,Y,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const xe=J.update(T),Re=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),we.copy(xe.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Re)){const Pe=xe.groups;for(let Fe=0,De=Pe.length;Fe<De;Fe++){const Ue=Pe[Fe],pt=Re[Ue.materialIndex];pt&&pt.visible&&S.push(T,xe,pt,Y,we.z,Ue)}}else Re.visible&&S.push(T,xe,Re,Y,we.z,null)}}const fe=T.children;for(let xe=0,Re=fe.length;xe<Re;xe++)Hn(fe[xe],z,Y,q)}function Yf(T,z,Y,q){const X=T.opaque,fe=T.transmissive,xe=T.transparent;m.setupLightsView(Y),Q===!0&&ye.setGlobalState(g.clippingPlanes,Y),fe.length>0&&T_(X,fe,z,Y),q&&ge.viewport(_.copy(q)),X.length>0&&Co(X,z,Y),fe.length>0&&Co(fe,z,Y),xe.length>0&&Co(xe,z,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function T_(T,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;pe===null&&(pe=new xr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?_o:ki,minFilter:go,samples:fe?4:0})),g.getDrawingBufferSize(Ee),fe?pe.setSize(Ee.x,Ee.y):pe.setSize(Gc(Ee.x),Gc(Ee.y));const xe=g.getRenderTarget();g.setRenderTarget(pe),g.getClearColor(F),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=zi,Co(T,Y,q),w.updateMultisampleRenderTarget(pe),w.updateRenderTargetMipmap(pe);let Pe=!1;for(let Fe=0,De=z.length;Fe<De;Fe++){const Ue=z[Fe],pt=Ue.object,rn=Ue.geometry,wt=Ue.material,qn=Ue.group;if(wt.side===ii&&pt.layers.test(q.layers)){const ot=wt.side;wt.side=nn,wt.needsUpdate=!0,qf(pt,Y,q,rn,wt,qn),wt.side=ot,wt.needsUpdate=!0,Pe=!0}}Pe===!0&&(w.updateMultisampleRenderTarget(pe),w.updateRenderTargetMipmap(pe)),g.setRenderTarget(xe),g.setClearColor(F,L),g.toneMapping=Re}function Co(T,z,Y){const q=z.isScene===!0?z.overrideMaterial:null;for(let X=0,fe=T.length;X<fe;X++){const xe=T[X],Re=xe.object,Pe=xe.geometry,Fe=q===null?xe.material:q,De=xe.group;Re.layers.test(Y.layers)&&qf(Re,z,Y,Pe,Fe,De)}}function qf(T,z,Y,q,X,fe){T.onBeforeRender(g,z,Y,q,X,fe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(g,z,Y,q,T,fe),X.transparent===!0&&X.side===ii&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,g.renderBufferDirect(Y,z,q,X,T,fe),X.side=Gi,X.needsUpdate=!0,g.renderBufferDirect(Y,z,q,X,T,fe),X.side=ii):g.renderBufferDirect(Y,z,q,X,T,fe),T.onAfterRender(g,z,Y,q,X,fe)}function Po(T,z,Y){z.isScene!==!0&&(z=_e);const q=be.get(T),X=m.state.lights,fe=m.state.shadowsArray,xe=X.state.version,Re=ce.getParameters(T,X.state,fe,z,Y),Pe=ce.getProgramCacheKey(Re);let Fe=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?k:y).get(T.envMap||q.environment),Fe===void 0&&(T.addEventListener("dispose",ue),Fe=new Map,q.programs=Fe);let De=Fe.get(Pe);if(De!==void 0){if(q.currentProgram===De&&q.lightsStateVersion===xe)return Kf(T,Re),De}else Re.uniforms=ce.getUniforms(T),T.onBuild(Y,Re,g),T.onBeforeCompile(Re,g),De=ce.acquireProgram(Re,Pe),Fe.set(Pe,De),q.uniforms=Re.uniforms;const Ue=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ye.uniform),Kf(T,Re),q.needsLights=R_(T),q.lightsStateVersion=xe,q.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=De,q.uniformsList=null,De}function $f(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ba.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Kf(T,z){const Y=be.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function w_(T,z,Y,q,X){z.isScene!==!0&&(z=_e),w.resetTextureUnits();const fe=z.fog,xe=q.isMeshStandardMaterial?z.environment:null,Re=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:di,Pe=(q.isMeshStandardMaterial?k:y).get(q.envMap||xe),Fe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,De=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,rn=!!Y.morphAttributes.color;let wt=zi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=g.toneMapping);const qn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=qn!==void 0?qn.length:0,ze=be.get(q),Ll=m.state.lights;if(Q===!0&&(re===!0||T!==E)){const gn=T===E&&q.id===N;ye.setState(q,T,gn)}let dt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ll.state.version||ze.outputColorSpace!==Re||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||ze.envMap!==Pe||q.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ye.numPlanes||ze.numIntersection!==ye.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==De||ze.morphTargets!==Ue||ze.morphNormals!==pt||ze.morphColors!==rn||ze.toneMapping!==wt||Ae.isWebGL2===!0&&ze.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,ze.__version=q.version);let Yi=ze.currentProgram;dt===!0&&(Yi=Po(q,z,X));let Zf=!1,Es=!1,bl=!1;const Ut=Yi.getUniforms(),qi=ze.uniforms;if(ge.useProgram(Yi.program)&&(Zf=!0,Es=!0,bl=!0),q.id!==N&&(N=q.id,Es=!0),Zf||E!==T){Ut.setValue(W,"projectionMatrix",T.projectionMatrix),Ut.setValue(W,"viewMatrix",T.matrixWorldInverse);const gn=Ut.map.cameraPosition;gn!==void 0&&gn.setValue(W,we.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Es=!0,bl=!0)}if(X.isSkinnedMesh){Ut.setOptional(W,X,"bindMatrix"),Ut.setOptional(W,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(Ae.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ut.setValue(W,"boneTexture",gn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ut.setOptional(W,X,"batchingTexture"),Ut.setValue(W,"batchingTexture",X._matricesTexture,w));const Dl=Y.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0&&Ae.isWebGL2===!0)&&Be.update(X,Y,Yi),(Es||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,Ut.setValue(W,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qi.envMap.value=Pe,qi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Es&&(Ut.setValue(W,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&A_(qi,bl),fe&&q.fog===!0&&ie.refreshFogUniforms(qi,fe),ie.refreshMaterialUniforms(qi,q,B,D,pe),ba.upload(W,$f(ze),qi,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ba.upload(W,$f(ze),qi,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(W,"center",X.center),Ut.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(W,"normalMatrix",X.normalMatrix),Ut.setValue(W,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const gn=q.uniformsGroups;for(let Ul=0,C_=gn.length;Ul<C_;Ul++)if(Ae.isWebGL2){const Qf=gn[Ul];je.update(Qf,Yi),je.bind(Qf,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function A_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function R_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,z,Y){be.get(T.texture).__webglTexture=z,be.get(T.depthTexture).__webglTexture=Y;const q=be.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const Y=be.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){A=T,P=z,R=Y;let q=!0,X=null,fe=!1,xe=!1;if(T){const Pe=be.get(T);Pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(W.FRAMEBUFFER,null),q=!1):Pe.__webglFramebuffer===void 0?w.setupRenderTarget(T):Pe.__hasExternalTextures&&w.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);const De=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[z])?X=De[z][Y]:X=De[z],fe=!0):Ae.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?X=be.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[Y]:X=De,_.copy(T.viewport),C.copy(T.scissor),I=T.scissorTest}else _.copy(V).multiplyScalar(B).floor(),C.copy(K).multiplyScalar(B).floor(),I=Z;if(ge.bindFramebuffer(W.FRAMEBUFFER,X)&&Ae.drawBuffers&&q&&ge.drawBuffers(T,X),ge.viewport(_),ge.scissor(C),ge.setScissorTest(I),fe){const Pe=be.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Y)}else if(xe){const Pe=be.get(T.texture),Fe=z||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pe.__webglTexture,Y||0,Fe)}N=-1},this.readRenderTargetPixels=function(T,z,Y,q,X,fe,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Re=Re[xe]),Re){ge.bindFramebuffer(W.FRAMEBUFFER,Re);try{const Pe=T.texture,Fe=Pe.format,De=Pe.type;if(Fe!==Fn&&me.convert(Fe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===_o&&(Se.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==ki&&me.convert(De)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Ri&&(Ae.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-X&&W.readPixels(z,Y,q,X,me.convert(Fe),me.convert(De),fe)}finally{const Pe=A!==null?be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(W.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,z,Y=0){const q=Math.pow(2,-Y),X=Math.floor(z.image.width*q),fe=Math.floor(z.image.height*q);w.setTexture2D(z,0),W.copyTexSubImage2D(W.TEXTURE_2D,Y,0,0,T.x,T.y,X,fe),ge.unbindTexture()},this.copyTextureToTexture=function(T,z,Y,q=0){const X=z.image.width,fe=z.image.height,xe=me.convert(Y.format),Re=me.convert(Y.type);w.setTexture2D(Y,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,T.x,T.y,X,fe,xe,Re,z.image.data):z.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,xe,z.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,q,T.x,T.y,xe,Re,z.image),q===0&&Y.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y,q,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Pe=me.convert(q.format),Fe=me.convert(q.type);let De;if(q.isData3DTexture)w.setTexture3D(q,0),De=W.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),De=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Ue=W.getParameter(W.UNPACK_ROW_LENGTH),pt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),rn=W.getParameter(W.UNPACK_SKIP_PIXELS),wt=W.getParameter(W.UNPACK_SKIP_ROWS),qn=W.getParameter(W.UNPACK_SKIP_IMAGES),ot=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,ot.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ot.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?W.texSubImage3D(De,X,z.x,z.y,z.z,fe,xe,Re,Pe,Fe,ot.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(De,X,z.x,z.y,z.z,fe,xe,Re,Pe,ot.data)):W.texSubImage3D(De,X,z.x,z.y,z.z,fe,xe,Re,Pe,Fe,ot),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ue),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rn),W.pixelStorei(W.UNPACK_SKIP_ROWS,wt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,qn),X===0&&q.generateMipmaps&&W.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Al?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?dr:e_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?Lt:di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cw extends M_{}cw.prototype.isWebGL1Renderer=!0;class fw extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Wc extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rp=new gt,Xc=new o_,ga=new Rl,_a=new H;class zu extends jt{constructor(e=new kn,n=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;Rp.copy(r).invert(),Xc.copy(e.ray).applyMatrix4(Rp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,S=p;x<S;x++){const m=u.getX(x);_a.fromBufferAttribute(d,m),Cp(_a,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,S=p;x<S;x++)_a.fromBufferAttribute(d,x),Cp(_a,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cp(t,e,n,i,r,s,o){const a=Xc.distanceSqToPoint(t);if(a<n){const l=new H;Xc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class E_ extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ku=new gt,Pp=new H,Lp=new H;class dw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pp),Lp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lp),n.updateMatrixWorld(),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bp=new gt,Os=new H,Bu=new H;class hw extends dw{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),i.position.copy(Os),Bu.copy(i.position),Bu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bu),i.updateMatrixWorld(),r.makeTranslation(-Os.x,-Os.y,-Os.z),bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}}class va extends E_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pw extends E_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);var mw={};(function(){function t(_){var C=0;return function(){return C<_.length?{done:!1,value:_[C++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(_,C,I){return _==Array.prototype||_==Object.prototype||(_[C]=I.value),_};function n(_){_=[typeof globalThis=="object"&&globalThis,_,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nl=="object"&&Nl];for(var C=0;C<_.length;++C){var I=_[C];if(I&&I.Math==Math)return I}throw Error("Cannot find global object")}var i=n(this);function r(_,C){if(C)e:{var I=i;_=_.split(".");for(var F=0;F<_.length-1;F++){var L=_[F];if(!(L in I))break e;I=I[L]}_=_[_.length-1],F=I[_],C=C(F),C!=F&&C!=null&&e(I,_,{configurable:!0,writable:!0,value:C})}}r("Symbol",function(_){function C(G){if(this instanceof C)throw new TypeError("Symbol is not a constructor");return new I(F+(G||"")+"_"+L++,G)}function I(G,D){this.g=G,e(this,"description",{configurable:!0,writable:!0,value:D})}if(_)return _;I.prototype.toString=function(){return this.g};var F="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return C}),r("Symbol.iterator",function(_){if(_)return _;_=Symbol("Symbol.iterator");for(var C="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),I=0;I<C.length;I++){var F=i[C[I]];typeof F=="function"&&typeof F.prototype[_]!="function"&&e(F.prototype,_,{configurable:!0,writable:!0,value:function(){return s(t(this))}})}return _});function s(_){return _={next:_},_[Symbol.iterator]=function(){return this},_}function o(_){var C=typeof Symbol<"u"&&Symbol.iterator&&_[Symbol.iterator];return C?C.call(_):{next:t(_)}}function a(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function l(_){if(_.i)throw new TypeError("Generator is already running");_.i=!0}a.prototype.l=function(_){this.o=_};function u(_,C){_.h={F:C,G:!0},_.j=_.m}a.prototype.return=function(_){this.h={return:_},this.j=this.m};function f(_){this.g=new a,this.h=_}function d(_,C){l(_.g);var I=_.g.g;return I?h(_,"return"in I?I.return:function(F){return{value:F,done:!0}},C,_.g.return):(_.g.return(C),p(_))}function h(_,C,I,F){try{var L=C.call(_.g.g,I);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return _.g.i=!1,L;var G=L.value}catch(D){return _.g.g=null,u(_.g,D),p(_)}return _.g.g=null,F.call(_.g,G),p(_)}function p(_){for(;_.g.j;)try{var C=_.h(_.g);if(C)return _.g.i=!1,{value:C.value,done:!1}}catch(I){_.g.o=void 0,u(_.g,I)}if(_.g.i=!1,_.g.h){if(C=_.g.h,_.g.h=null,C.G)throw C.F;return{value:C.return,done:!0}}return{value:void 0,done:!0}}function x(_){this.next=function(C){return l(_.g),_.g.g?C=h(_,_.g.g.next,C,_.g.l):(_.g.l(C),C=p(_)),C},this.throw=function(C){return l(_.g),_.g.g?C=h(_,_.g.g.throw,C,_.g.l):(u(_.g,C),C=p(_)),C},this.return=function(C){return d(_,C)},this[Symbol.iterator]=function(){return this}}function S(_){function C(F){return _.next(F)}function I(F){return _.throw(F)}return new Promise(function(F,L){function G(D){D.done?F(D.value):Promise.resolve(D.value).then(C,I).then(G,L)}G(_.next())})}r("Promise",function(_){function C(D){this.h=0,this.i=void 0,this.g=[],this.o=!1;var B=this.j();try{D(B.resolve,B.reject)}catch(b){B.reject(b)}}function I(){this.g=null}function F(D){return D instanceof C?D:new C(function(B){B(D)})}if(_)return _;I.prototype.h=function(D){if(this.g==null){this.g=[];var B=this;this.i(function(){B.l()})}this.g.push(D)};var L=i.setTimeout;I.prototype.i=function(D){L(D,0)},I.prototype.l=function(){for(;this.g&&this.g.length;){var D=this.g;this.g=[];for(var B=0;B<D.length;++B){var b=D[B];D[B]=null;try{b()}catch(O){this.j(O)}}}this.g=null},I.prototype.j=function(D){this.i(function(){throw D})},C.prototype.j=function(){function D(O){return function(V){b||(b=!0,O.call(B,V))}}var B=this,b=!1;return{resolve:D(this.A),reject:D(this.l)}},C.prototype.A=function(D){if(D===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof C)this.C(D);else{e:switch(typeof D){case"object":var B=D!=null;break e;case"function":B=!0;break e;default:B=!1}B?this.v(D):this.m(D)}},C.prototype.v=function(D){var B=void 0;try{B=D.then}catch(b){this.l(b);return}typeof B=="function"?this.D(B,D):this.m(D)},C.prototype.l=function(D){this.u(2,D)},C.prototype.m=function(D){this.u(1,D)},C.prototype.u=function(D,B){if(this.h!=0)throw Error("Cannot settle("+D+", "+B+"): Promise already settled in state"+this.h);this.h=D,this.i=B,this.h===2&&this.B(),this.H()},C.prototype.B=function(){var D=this;L(function(){if(D.I()){var B=i.console;typeof B<"u"&&B.error(D.i)}},1)},C.prototype.I=function(){if(this.o)return!1;var D=i.CustomEvent,B=i.Event,b=i.dispatchEvent;return typeof b>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof B=="function"?D=new B("unhandledrejection",{cancelable:!0}):(D=i.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.i,b(D))},C.prototype.H=function(){if(this.g!=null){for(var D=0;D<this.g.length;++D)G.h(this.g[D]);this.g=null}};var G=new I;return C.prototype.C=function(D){var B=this.j();D.s(B.resolve,B.reject)},C.prototype.D=function(D,B){var b=this.j();try{D.call(B,b.resolve,b.reject)}catch(O){b.reject(O)}},C.prototype.then=function(D,B){function b(Z,j){return typeof Z=="function"?function(Q){try{O(Z(Q))}catch(re){V(re)}}:j}var O,V,K=new C(function(Z,j){O=Z,V=j});return this.s(b(D,O),b(B,V)),K},C.prototype.catch=function(D){return this.then(void 0,D)},C.prototype.s=function(D,B){function b(){switch(O.h){case 1:D(O.i);break;case 2:B(O.i);break;default:throw Error("Unexpected state: "+O.h)}}var O=this;this.g==null?G.h(b):this.g.push(b),this.o=!0},C.resolve=F,C.reject=function(D){return new C(function(B,b){b(D)})},C.race=function(D){return new C(function(B,b){for(var O=o(D),V=O.next();!V.done;V=O.next())F(V.value).s(B,b)})},C.all=function(D){var B=o(D),b=B.next();return b.done?F([]):new C(function(O,V){function K(Q){return function(re){Z[Q]=re,j--,j==0&&O(Z)}}var Z=[],j=0;do Z.push(void 0),j++,F(b.value).s(K(Z.length-1),V),b=B.next();while(!b.done)})},C});var m=typeof Object.assign=="function"?Object.assign:function(_,C){for(var I=1;I<arguments.length;I++){var F=arguments[I];if(F)for(var L in F)Object.prototype.hasOwnProperty.call(F,L)&&(_[L]=F[L])}return _};r("Object.assign",function(_){return _||m});var c=this||self,v={facingMode:"user",width:640,height:480};function g(_,C){this.video=_,this.i=0,this.h=Object.assign(Object.assign({},v),C)}g.prototype.stop=function(){var _=this,C,I,F,L;return S(new x(new f(function(G){if(_.g){for(C=_.g.getTracks(),I=o(C),F=I.next();!F.done;F=I.next())L=F.value,L.stop();_.g=void 0}G.j=0})))},g.prototype.start=function(){var _=this,C;return S(new x(new f(function(I){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),C=_.h,I.return(navigator.mediaDevices.getUserMedia({video:{facingMode:C.facingMode,width:C.width,height:C.height}}).then(function(F){P(_,F)}).catch(function(F){var L="Failed to acquire camera feed: "+F;throw console.error(L),alert(L),F}))})))};function M(_){window.requestAnimationFrame(function(){R(_)})}function P(_,C){_.g=C,_.video.srcObject=C,_.video.onloadedmetadata=function(){_.video.play(),M(_)}}function R(_){var C=null;_.video.paused||_.video.currentTime===_.i||(_.i=_.video.currentTime,C=_.h.onFrame()),C?C.then(function(){M(_)}):M(_)}var A=["Camera"],N=c;A[0]in N||typeof N.execScript>"u"||N.execScript("var "+A[0]);for(var E;A.length&&(E=A.shift());)A.length||g===void 0?N[E]&&N[E]!==Object.prototype[E]?N=N[E]:N=N[E]={}:N[E]=g}).call(Nl);const gw=()=>{const t=vn.useRef(null),e=vn.useRef(null),[n,i]=vn.useState(!1),[r,s]=vn.useState(!1),[o,a]=vn.useState(0),l=vn.useRef({x:0,y:0,z:0}),u=["Eres la estrella más brillante de mi universo 💫","Cada día contigo es una nueva aventura 🌟","Tu sonrisa ilumina mis días más oscuros ✨","Eres mi planeta favorito en este cosmos infinito 🪐","Contigo, hasta el espacio se siente como hogar 💖","Eres la gravedad que mantiene mi mundo en órbita 🌍","Mi amor por ti es infinito como el universo 💕","Eres la luz que guía mi camino entre las estrellas 🌠"];vn.useEffect(()=>{const p=setInterval(()=>{a(x=>(x+1)%u.length)},5e3);return()=>clearInterval(p)},[]),vn.useEffect(()=>{if(!t.current)return;const p=new fw;p.background=new We(517);const x=new un(50,window.innerWidth/window.innerHeight,.1,1e3);x.position.set(0,3,38),x.lookAt(0,0,0);const S=new M_({antialias:!0,alpha:!1});S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(S.domElement);const m=new kn,c=7e3,v=new Float32Array(c*3),g=new Float32Array(c*3),M=new Float32Array(c);for(let y=0;y<c;y++){v[y*3]=(Math.random()-.5)*500,v[y*3+1]=(Math.random()-.5)*500,v[y*3+2]=(Math.random()-.5)*400-80,M[y]=Math.random()*1.5+.2;const k=.7+Math.random()*.3;g[y*3]=k,g[y*3+1]=k,g[y*3+2]=k}m.setAttribute("position",new xt(v,3)),m.setAttribute("color",new xt(g,3)),m.setAttribute("size",new xt(M,1));const P=new Wc({size:.8,transparent:!0,opacity:.6,vertexColors:!0,sizeAttenuation:!0}),R=new zu(m,P);p.add(R);const A=15e3,N=new Float32Array(A*3),E=new Float32Array(A*3),_=new Float32Array(A*3),C=new Float32Array(A),I=new Float32Array(A*3);let F=0;const L=Math.floor(A*.42);for(let y=0;y<L;y++){const k=Math.random()*Math.PI*2,ee=Math.random()*Math.PI,$=5.5+Math.random()*.6,J=$*Math.sin(ee)*Math.cos(k),ce=$*Math.sin(ee)*Math.sin(k),ie=$*Math.cos(ee);N[F*3]=J,N[F*3+1]=ce,N[F*3+2]=ie,E[F*3]=J,E[F*3+1]=ce,E[F*3+2]=ie;const ae=ee/Math.PI,ve=Math.random();if(ae<.3)_[F*3]=.15+ve*.1,_[F*3+1]=.6+ve*.2,_[F*3+2]=1;else if(ae<.5){const ye=(ae-.3)/.2;_[F*3]=.3+ye*.3+ve*.1,_[F*3+1]=.5-ye*.2+ve*.1,_[F*3+2]=.9}else if(ae<.7){const ye=(ae-.5)/.2;_[F*3]=.6+ye*.3,_[F*3+1]=.3+ye*.2,_[F*3+2]=.7-ye*.4}else{const ye=(ae-.7)/.3;_[F*3]=.9+ye*.1,_[F*3+1]=.5+ye*.2,_[F*3+2]=.2}C[F]=.8+Math.random()*.5,I[F*3]=0,I[F*3+1]=0,I[F*3+2]=0,F++}const G=A-L;[{inner:7.5,outer:8.8,density:.5,thickness:.08},{inner:8.8,outer:10,density:1,thickness:.1},{inner:10,outer:11.5,density:1.4,thickness:.12},{inner:11.5,outer:12,density:.2,thickness:.06},{inner:12,outer:14,density:1.2,thickness:.11},{inner:14,outer:15.5,density:.7,thickness:.09},{inner:15.5,outer:17.5,density:.4,thickness:.15}].forEach(y=>{const k=Math.floor(G*y.density/5.3);for(let ee=0;ee<k&&F<A;ee++){const $=Math.random()*Math.PI*2,J=y.inner+Math.random()*(y.outer-y.inner),ce=(Math.random()-.5)*y.thickness;N[F*3]=Math.cos($)*J,N[F*3+1]=ce,N[F*3+2]=Math.sin($)*J,E[F*3]=N[F*3],E[F*3+1]=N[F*3+1],E[F*3+2]=N[F*3+2];const ie=Math.random()*.15,ae=(J-7.5)/10;_[F*3]=1-ae*.1,_[F*3+1]=.75-ae*.12+ie,_[F*3+2]=.3+ie*.25,C[F]=.6+Math.random()*.4,I[F*3]=0,I[F*3+1]=0,I[F*3+2]=0,F++}});const B=new kn;B.setAttribute("position",new xt(N,3)),B.setAttribute("color",new xt(_,3)),B.setAttribute("size",new xt(C,1));const b=`
      attribute float size;
      varying vec3 vColor;
      varying float vDistance;
      
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDistance = -mvPosition.z;
        gl_PointSize = size * (300.0 / vDistance);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,O=`
      varying vec3 vColor;
      varying float vDistance;
      
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        
        if (dist > 0.5) discard;
        
        // Centro brillante
        float core = 1.0 - smoothstep(0.0, 0.2, dist);
        core = pow(core, 2.5);
        
        // Glow exterior (efecto neón)
        float glow = exp(-dist * 4.5) * 0.6;
        
        float depthFade = smoothstep(60.0, 25.0, vDistance);
        
        vec3 finalColor = vColor * (core + glow);
        float alpha = (core * 0.9 + glow * 0.5) * depthFade;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,V=new Vi({vertexShader:b,fragmentShader:O,transparent:!0,blending:nl,depthWrite:!1,vertexColors:!0}),K=new zu(B,V);p.add(K);const Z=new pw(657941,.3);p.add(Z);const j=new va(4491519,1.5,100);j.position.set(-25,20,30),p.add(j);const Q=new va(16750916,1.2,100);Q.position.set(25,-15,30),p.add(Q);const re=new va(6702250,.5,120);re.position.set(0,0,-40),p.add(re);const pe=new va(16738013,2.5,40);p.add(pe);const he=new kn,Ee=100,we=new Float32Array(Ee*3),_e=new Float32Array(Ee*3),Ge=new Float32Array(Ee),W=new Float32Array(Ee);for(let y=0;y<Ee;y++){we[y*3]=0,we[y*3+1]=0,we[y*3+2]=0,Ge[y]=Math.random()*2+.8,W[y]=Math.random()*Math.PI*2;const k=Math.random();k<.4?(_e[y*3]=1,_e[y*3+1]=.8,_e[y*3+2]=.3):k<.7?(_e[y*3]=.8,_e[y*3+1]=.4,_e[y*3+2]=1):(_e[y*3]=.4,_e[y*3+1]=.8,_e[y*3+2]=1)}he.setAttribute("position",new xt(we,3)),he.setAttribute("color",new xt(_e,3)),he.setAttribute("size",new xt(Ge,1));const ct=new Wc({size:1.2,transparent:!0,opacity:0,vertexColors:!0,blending:nl,depthWrite:!1});ct.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <output_fragment>",`
    // Esto hace que el cuadrado sea un círculo suave
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    
    float strength = 1.0 - r;
    gl_FragColor = vec4(diffuseColor.rgb, strength * opacity);
    `)};const Se=new zu(he,ct);p.add(Se);let Ae=0;const ge=()=>{if(!n){ct.opacity=Math.max(0,ct.opacity-.05);return}ct.opacity=Math.min(.7,ct.opacity+.1),Ae+=.04;const y=l.current,k=12,ee=.6;for(let $=0;$<Ee;$++){const J=$/Ee*Math.PI*2*3,ce=$/Ee*3,ie=2+Math.sin(Ae*2+W[$])*1.5;we[$*3]=y.x+Math.cos(J+Ae)*(ie+ce),we[$*3+1]=y.y+Math.sin(Ae*1.5+W[$])*2,we[$*3+2]=y.z+Math.sin(J+Ae)*(ie+ce)}he.attributes.position.needsUpdate=!0;for(let $=0;$<A;$++){const J=N[$*3]-y.x,ce=N[$*3+1]-y.y,ie=N[$*3+2]-y.z,ae=Math.sqrt(J*J+ce*ce+ie*ie);if(ae<k){const ve=(k-ae)/k*ee,ye=ae>0?1/ae:0;I[$*3]+=J*ye*ve,I[$*3+1]+=ce*ye*ve,I[$*3+2]+=ie*ye*ve}}pe.position.set(y.x,y.y,y.z)};let Ke=0;const be=()=>{requestAnimationFrame(be),Ke+=.01,ge();for(let y=0;y<A;y++){N[y*3]+=I[y*3],N[y*3+1]+=I[y*3+1],N[y*3+2]+=I[y*3+2];const k=E[y*3]-N[y*3],ee=E[y*3+1]-N[y*3+1],$=E[y*3+2]-N[y*3+2];I[y*3]+=k*.012,I[y*3+1]+=ee*.012,I[y*3+2]+=$*.012,I[y*3]*=.92,I[y*3+1]*=.92,I[y*3+2]*=.92}B.attributes.position.needsUpdate=!0,K.rotation.y+=.0018,K.rotation.x=Math.sin(Ke*.15)*.06,R.rotation.y+=8e-5,S.render(p,x)};be();const w=()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w),t.current&&S.domElement&&t.current.removeChild(S.domElement)}},[n]),vn.useEffect(()=>{if(!r)return;const p=e.current;if(!p)return;const x=new Hands({locateFile:g=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${g}`});x.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.7,minTrackingConfidence:.7});let S=0,m=0,c=0;x.onResults(g=>{if(g.multiHandLandmarks&&g.multiHandLandmarks.length>0){const P=g.multiHandLandmarks[0][9],R=(P.x-.5)*42,A=-(P.y-.5)*42,N=-P.z*26;S+=(R-S)*.22,m+=(A-m)*.22,c+=(N-c)*.22,l.current={x:S,y:m,z:c},i(!0)}else i(!1)});const v=new mw.Camera(p,{onFrame:async()=>{await x.send({image:p})},width:640,height:480});return v.start(),()=>{v.stop(),x.close()}},[r]);const f=async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"}});e.current&&(e.current.srcObject=p,s(!0))}catch(p){console.error("Error:",p),alert("No se pudo acceder a la cámara.")}},d=window.innerWidth<=768,h=window.innerWidth>768&&window.innerWidth<=1024;return an.jsxs("div",{style:{width:"100%",height:"100vh",overflow:"hidden",position:"relative",background:"#000205"},children:[an.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),an.jsx("video",{ref:e,style:{display:"none"},autoPlay:!0,playsInline:!0}),an.jsx("div",{style:{position:"fixed",bottom:d?"auto":"50%",top:d?"90px":"auto",left:d?"50%":"auto",right:d?"auto":"50px",transform:d?"translateX(-50%)":"translateY(50%)",zIndex:1e3,pointerEvents:"none",textAlign:d?"center":"right"},children:an.jsx("h1",{style:{margin:0,fontSize:d?"24px":h?"40px":"52px",fontFamily:"'Brush Script MT', 'Pacifico', cursive",fontWeight:"400",background:"linear-gradient(120deg, #ffd89b 0%, #e8be8a 50%, #d4a574 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"0.5px",filter:"drop-shadow(0 2px 12px rgba(255, 216, 155, 0.4))",fontStyle:"italic"},children:"Gianella Bustamante"})}),!d&&[{top:"22px",right:"28px",size:"22px",emoji:"💕",delay:0},{top:"55px",right:"50px",size:"19px",emoji:"💖",delay:.5},{top:"88px",right:"32px",size:"16px",emoji:"❤️",delay:1}].map((p,x)=>an.jsx("div",{style:{position:"fixed",top:p.top,right:p.right,fontSize:p.size,opacity:.6,animation:`float 3s ease-in-out infinite ${p.delay}s`,zIndex:999,pointerEvents:"none",filter:"drop-shadow(0 0 6px rgba(255, 105, 180, 0.5))"},children:p.emoji},x)),r?an.jsx("div",{style:{position:"fixed",top:d?"18px":"25px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,padding:d?"11px 22px":"13px 28px",background:n?"rgba(74, 222, 128, 0.13)":"rgba(248, 113, 113, 0.13)",backdropFilter:"blur(12px)",border:`1.5px solid ${n?"rgba(74, 222, 128, 0.4)":"rgba(248, 113, 113, 0.4)"}`,borderRadius:"50px",color:"white",fontSize:d?"13px":"14px",fontWeight:"700",fontFamily:"system-ui, sans-serif",letterSpacing:"0.4px",boxShadow:n?"0 0 22px rgba(74, 222, 128, 0.35)":"0 0 22px rgba(248, 113, 113, 0.35)"},children:n?"✨ ¡Mueve Saturno!":"👋 Muestra tu mano"}):an.jsx("button",{onClick:f,style:{position:"fixed",top:d?"18px":"25px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,padding:d?"12px 24px":"14px 34px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"50px",color:"white",fontSize:d?"13px":"14px",fontWeight:"700",cursor:"pointer",boxShadow:"0 6px 28px rgba(102, 126, 234, 0.45)",fontFamily:"system-ui, sans-serif",letterSpacing:"0.5px",textTransform:"uppercase",transition:"all 0.3s ease"},onMouseEnter:p=>{p.target.style.transform="translateX(-50%) translateY(-2px) scale(1.03)",p.target.style.boxShadow="0 10px 35px rgba(102, 126, 234, 0.6)"},onMouseLeave:p=>{p.target.style.transform="translateX(-50%) translateY(0) scale(1)",p.target.style.boxShadow="0 6px 28px rgba(102, 126, 234, 0.45)"},children:"✨ Activar Interacción"}),an.jsx("div",{style:{position:"fixed",bottom:d?"18px":"32px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,textAlign:"center",maxWidth:d?"93%":h?"86%":"620px",padding:d?"13px 20px":"16px 30px",background:"rgba(8, 12, 22, 0.5)",backdropFilter:"blur(20px)",borderRadius:"16px",border:"1px solid rgba(255, 255, 255, 0.12)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",animation:"phraseSlide 1s ease-out"},children:an.jsx("p",{style:{margin:0,fontSize:d?"14px":h?"15px":"16px",fontFamily:"'Georgia', serif",color:"rgba(255, 255, 255, 0.95)",fontWeight:"400",lineHeight:"1.6",letterSpacing:"0.2px",textShadow:"0 2px 12px rgba(0, 0, 0, 0.7)",fontStyle:"italic"},children:u[o]})}),an.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        
        @keyframes phraseSlide {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        * {
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
      `})]})};Hu.createRoot(document.getElementById("root")).render(an.jsx(X_.StrictMode,{children:an.jsx(gw,{})}));
