(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var bs={exports:{}},il={},ea={exports:{}},L={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Jn=Symbol.for("react.element"),yc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Ho=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var ta={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},na=Object.assign,ra={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ra,this.updater=n||ta}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function la(){}la.prototype=sn.prototype;function Qi(e,t,n){this.props=e,this.context=t,this.refs=ra,this.updater=n||ta}var Ki=Qi.prototype=new la;Ki.constructor=Qi;na(Ki,sn.prototype);Ki.isPureReactComponent=!0;var Vo=Array.isArray,ia=Object.prototype.hasOwnProperty,Gi={current:null},oa={key:!0,ref:!0,__self:!0,__source:!0};function sa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ia.call(t,r)&&!oa.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Jn,type:e,key:i,ref:o,props:l,_owner:Gi.current}}function Pc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case yc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+El(o,0):r,Vo(l)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),kr(l,t,n,"",function(d){return d})):l!=null&&(Yi(l)&&(l=Pc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Vo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+El(i,s);o+=kr(i,t,n,u,l)}else if(u=_c(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+El(i,s++),o+=kr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Lc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Sr={transition:null},Tc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Gi};function aa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=sn;L.Fragment=gc;L.Profiler=wc;L.PureComponent=Qi;L.StrictMode=xc;L.Suspense=jc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;L.act=aa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=na({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Gi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ia.call(t,u)&&!oa.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Jn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};L.createElement=sa;L.createFactory=function(e){var t=sa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Nc,render:e}};L.isValidElement=Yi;L.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:Lc}};L.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};L.unstable_act=aa;L.useCallback=function(e,t){return ae.current.useCallback(e,t)};L.useContext=function(e){return ae.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};L.useEffect=function(e,t){return ae.current.useEffect(e,t)};L.useId=function(){return ae.current.useId()};L.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ae.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};L.useRef=function(e){return ae.current.useRef(e)};L.useState=function(e){return ae.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ae.current.useTransition()};L.version="18.3.1";ea.exports=L;var Nt=ea.exports;/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Mc=Nt,Ic=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Ac=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function ua(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Dc.call(t,r)&&!Oc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ic,type:e,key:i,ref:o,props:l,_owner:Ac.current}}il.Fragment=Rc;il.jsx=ua;il.jsxs=ua;bs.exports=il;var a=bs.exports,ca={exports:{}},xe={},da={exports:{}},fa={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(j,P){var z=j.length;j.push(P);e:for(;0<z;){var W=z-1>>>1,X=j[W];if(0<l(X,P))j[W]=P,j[z]=X,z=W;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var P=j[0],z=j.pop();if(z!==P){j[0]=z;e:for(var W=0,X=j.length,nr=X>>>1;W<nr;){var vt=2*(W+1)-1,Cl=j[vt],yt=vt+1,rr=j[yt];if(0>l(Cl,z))yt<X&&0>l(rr,Cl)?(j[W]=rr,j[yt]=z,W=yt):(j[W]=Cl,j[vt]=z,W=vt);else if(yt<X&&0>l(rr,z))j[W]=rr,j[yt]=z,W=yt;else break e}}return P}function l(j,P){var z=j.sortIndex-P.sortIndex;return z!==0?z:j.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],v=1,h=null,m=3,x=!1,w=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=j)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function y(j){if(k=!1,p(j),!w)if(n(u)!==null)w=!0,Nl(N);else{var P=n(d);P!==null&&jl(y,P.startTime-j)}}function N(j,P){w=!1,k&&(k=!1,f(_),_=-1),x=!0;var z=m;try{for(p(P),h=n(u);h!==null&&(!(h.expirationTime>P)||j&&!_e());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(P)}else r(u);h=n(u)}if(h!==null)var nr=!0;else{var vt=n(d);vt!==null&&jl(y,vt.startTime-P),nr=!1}return nr}finally{h=null,m=z,x=!1}}var C=!1,E=null,_=-1,B=5,T=-1;function _e(){return!(e.unstable_now()-T<B)}function cn(){if(E!==null){var j=e.unstable_now();T=j;var P=!0;try{P=E(!0,j)}finally{P?dn():(C=!1,E=null)}}else C=!1}var dn;if(typeof c=="function")dn=function(){c(cn)};else if(typeof MessageChannel<"u"){var $o=new MessageChannel,vc=$o.port2;$o.port1.onmessage=cn,dn=function(){vc.postMessage(null)}}else dn=function(){O(cn,0)};function Nl(j){E=j,C||(C=!0,dn())}function jl(j,P){_=O(function(){j(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Nl(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return j()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var z=m;m=j;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(j,P,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,j={id:v++,callback:P,priorityLevel:j,startTime:z,expirationTime:X,sortIndex:-1},z>W?(j.sortIndex=z,t(d,j),n(u)===null&&j===n(d)&&(k?(f(_),_=-1):k=!0,jl(y,z-W))):(j.sortIndex=X,t(u,j),w||x||(w=!0,Nl(N))),j},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(j){var P=m;return function(){var z=m;m=P;try{return j.apply(this,arguments)}finally{m=z}}}})(fa);da.exports=fa;var Fc=da.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Uc=Nt,ge=Fc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pa=new Set,In={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(In[e]=t,e=0;e<t.length;e++)pa.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wo={},Qo={};function Hc(e){return ql.call(Qo,e)?!0:ql.call(Wo,e)?!1:$c.test(e)?Qo[e]=!0:(Wo[e]=!0,!1)}function Vc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Vc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zi,Xi);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zi,Xi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zi,Xi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,l,r)&&(n=null),r||l===null?Hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),qi=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),ma=Symbol.for("react.provider"),ha=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),ei=Symbol.for("react.suspense"),ti=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),va=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,_l;function wn(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n *(at )?/);_l=t&&t[1]||""}return"\n"+_l+e}var Pl=!1;function zl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split("\n"),i=r.stack.split("\n"),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u="\n"+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Wc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Rt:return"Portal";case bl:return"Profiler";case qi:return"StrictMode";case ei:return"Suspense";case ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ha:return(e.displayName||"Context")+".Consumer";case ma:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ni(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ni(e(t))}catch{}}return null}function Qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(t);case 8:return t===qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ya(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=ya(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Kc(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ya(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ri(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xa(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function li(e,t){xa(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&ii(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ii(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(kn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function wa(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ka(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ka(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,Sa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Gc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Na(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ja(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Na(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Yc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ai(e,t){if(t){if(Yc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,Gt=null,Yt=null;function Jo(e){if(e=er(e)){if(typeof di!="function")throw Error(g(280));var t=e.stateNode;t&&(t=cl(t),di(e.stateNode,e.type,t))}}function Ca(e){Gt?Yt?Yt.push(e):Yt=[e]:Gt=e}function Ea(){if(Gt){var e=Gt,t=Yt;if(Yt=Gt=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function _a(e,t){return e(t)}function Pa(){}var Ll=!1;function za(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return _a(e,t,n)}finally{Ll=!1,(Gt!==null||Yt!==null)&&(Pa(),Ea())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var fi=!1;if(Qe)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{fi=!1}function Zc(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Cn=!1,Rr=null,Dr=!1,pi=null,Xc={onError:function(e){Cn=!0,Rr=e}};function Jc(e,t,n,r,l,i,o,s,u){Cn=!1,Rr=null,Zc.apply(Xc,arguments)}function qc(e,t,n,r,l,i,o,s,u){if(Jc.apply(this,arguments),Cn){if(Cn){var d=Rr;Cn=!1,Rr=null}else throw Error(g(198));Dr||(Dr=!0,pi=d)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function La(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if(Mt(e)!==e)throw Error(g(188))}function bc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return qo(l),e;if(i===r)return qo(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ta(e){return e=bc(e),e!==null?Ma(e):null}function Ma(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ma(e);if(t!==null)return t;e=e.sibling}return null}var Ia=ge.unstable_scheduleCallback,bo=ge.unstable_cancelCallback,ed=ge.unstable_shouldYield,td=ge.unstable_requestPaint,Q=ge.unstable_now,nd=ge.unstable_getCurrentPriorityLevel,no=ge.unstable_ImmediatePriority,Ra=ge.unstable_UserBlockingPriority,Ar=ge.unstable_NormalPriority,rd=ge.unstable_LowPriority,Da=ge.unstable_IdlePriority,ol=null,Fe=null;function ld(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:sd,id=Math.log,od=Math.LN2;function sd(e){return e>>>=0,e===0?32:31-(id(e)/od|0)|0}var ar=64,ur=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Sn(s):(i&=o,i!==0&&(r=Sn(i)))}else o=n&~l,o!==0?r=Sn(o):i!==0&&(r=Sn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=ad(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Aa(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Oa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,lo,Ua,$a,Ha,hi=!1,cr=[],rt=null,lt=null,it=null,An=new Map,On=new Map,be=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function mn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=er(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fd(e,t,n,r,l){switch(t){case"focusin":return rt=mn(rt,e,t,n,r,l),!0;case"dragenter":return lt=mn(lt,e,t,n,r,l),!0;case"mouseover":return it=mn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,mn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,mn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Va(e){var t=wt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=La(n),t!==null){e.blockedOn=t,Ha(e.priority,function(){Ua(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ci=r,n.target.dispatchEvent(r),ci=null}else return t=er(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){Nr(e)&&n.delete(t)}function pd(){hi=!1,rt!==null&&Nr(rt)&&(rt=null),lt!==null&&Nr(lt)&&(lt=null),it!==null&&Nr(it)&&(it=null),An.forEach(ts),On.forEach(ts)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,pd)))}function Fn(e){function t(l){return hn(l,e)}if(0<cr.length){hn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&hn(rt,e),lt!==null&&hn(lt,e),it!==null&&hn(it,e),An.forEach(t),On.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Va(n),n.blockedOn===null&&be.shift()}var Zt=Ze.ReactCurrentBatchConfig,Fr=!0;function md(e,t,n,r){var l=I,i=Zt.transition;Zt.transition=null;try{I=1,io(e,t,n,r)}finally{I=l,Zt.transition=i}}function hd(e,t,n,r){var l=I,i=Zt.transition;Zt.transition=null;try{I=4,io(e,t,n,r)}finally{I=l,Zt.transition=i}}function io(e,t,n,r){if(Fr){var l=vi(e,t,n,r);if(l===null)Hl(e,t,r,Ur,n),es(e,r);else if(fd(l,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<dd.indexOf(e)){for(;l!==null;){var i=er(l);if(i!==null&&Fa(i),i=vi(e,t,n,r),i===null&&Hl(e,t,r,Ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Ur=null;function vi(e,t,n,r){if(Ur=null,e=to(r),e=wt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=La(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Ba(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case no:return 1;case Ra:return 4;case Ar:case rd:return 16;case Da:return 536870912;default:return 16}default:return 16}}var tt=null,oo=null,jr=null;function Wa(){if(jr)return jr;var e,t=oo,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function ns(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dr:ns,this.isPropagationStopped=ns,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=we(an),bn=H({},an,{view:0,detail:0}),vd=we(bn),Ml,Il,vn,sl=H({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ml=e.screenX-vn.screenX,Il=e.screenY-vn.screenY):Il=Ml=0,vn=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),rs=we(sl),yd=H({},sl,{dataTransfer:0}),gd=we(yd),xd=H({},bn,{relatedTarget:0}),Rl=we(xd),wd=H({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=we(wd),Sd=H({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=we(Sd),jd=H({},an,{data:0}),ls=we(jd),Cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function ao(){return Pd}var zd=H({},bn,{key:function(e){if(e.key){var t=Cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=we(zd),Td=H({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=we(Td),Md=H({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Id=we(Md),Rd=H({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=we(Rd),Ad=H({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=we(Ad),Fd=H({},an,{data:0}),Ud=we(Fd),$d=H({},bn,{isTrusted:0}),Hd=we($d);function Vd(e,t){return e(t)}var Bd=!("undefined"==typeof window||window.document&&window.document.implementation&&window.document.implementation.createHTMLDocument);function Wd(e,t,n,r){if(n=n||"div",e=e||(Bd?document.implementation.createHTMLDocument(""):document),r=r?e.createElementNS(r,n):e.createElement(n),t)for(var l in t)t.hasOwnProperty(l)&&Ji(r,l,t[l]);return r}function Qd(e,t){var n=t.target;switch(t.type){case"scroll":return!0;case"selectionchange":case"keypress":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":return n===document||n!==document&&n.contentEditable==="true";default:return!1}}var Kd=ge.unstable_now,Gd=3,Yd=Kd(),Xc={};function Jd(){var e=Kd();Yd=e}function qd(e,t){if(Xc[t]){if(t=Xc[t],e._startProfiling(t))return t.onCommitFiberRoot=e.onCommitFiberRoot,t.onPostCommitFiberRoot=e.onPostCommitFiberRoot,t}}function Zd(e,t){Xc[t]=e}function el(e){delete Xc[e]}var tl=250,rl=!1;

// 👇 بداية الكود المعدّل يدويًا ليعكس السيرة الذاتية

const bf = ({ language }) => {
  const n = language === "ar" ? {
    title: "نبذة عني",
    content: "أنا نغم مشريقة، حاصلة على شهادة دكتوراه في تاريخ العلوم الأساسية (تخصص تاريخ الفلك) من جامعة حلب. لدي خبرة أكاديمية واسعة كمحاضرة في الرياضيات، بالإضافة إلى خبرة في تطوير البرمجيات كمطوّرة Front-End و Full-Stack. كما أعمل في مجال التعليم المجتمعي والمبادرات التطوعية، وأتمتع بمهارات متعددة في التصميم والتحرير والبحث العلمي."
  } : {
    title: "About Me",
    content: "I am Nagham Mashariqa, holding a Ph.D. in History of Basic Sciences (specializing in the history of astronomy) from the University of Aleppo. I have extensive academic experience as a mathematics lecturer, alongside professional experience as a Front-End and Full-Stack Developer. I am also actively engaged in community education initiatives and volunteer work, with additional skills in design, video editing, and scientific research."
  };
  return a.jsxs("section", { className: "about section", children: [a.jsx("h2", { className: "section-title", children: n.title }), a.jsx("p", { className: "section-text", children: n.content })] });
};

const ep = ({ language }) => {
  const n = language === "ar" ? [{
    degree: "دكتوراه في تاريخ العلوم الأساسية (تخصص تاريخ الفلك)",
    institution: "جامعة حلب - معهد تاريخ العلوم العربية",
    year: "2025",
    gpa: "86.4",
    thesis: "زيج ابن الشاطر لأبي الحسن ابن الشاطر: تحقيق ودراسة من الفصل الأول إلى الفصل الثالث والثلاثين"
  }, {
    degree: "ماجستير في تاريخ العلوم الأساسية (تخصص تاريخ الفلك)",
    institution: "جامعة حلب - معهد تاريخ العلوم العربية",
    year: "2020",
    gpa: "92.23",
    thesis: "زيج ابن الشاطر لأبي الحسن ابن الشاطر: تحقيق ودراسة من الفصل الأول إلى الفصل الثالث والثلاثين"
  }, {
    degree: "بكالوريوس في هندسة نظم المعلومات (تخصص تطوير تطبيقات البرمجيات)",
    institution: "الجامعة الافتراضية السورية",
    year: "2019",
    gpa: "72.57"
  }, {
    degree: "بكالوريوس في الرياضيات (تخصص التحليل الرياضي)",
    institution: "جامعة حلب",
    year: "2013",
    gpa: "78.36"
  }] : [{
    degree: "Ph.D. in History of Basic Sciences (specializing in the history of astronomy)",
    institution: "University of Aleppo - Institute for the History of Arabic Science",
    year: "2025",
    gpa: "86.4",
    thesis: "Zij Ibn al-Shatir by Ala al-Din Abu al-Hasan Ibn al-Shatir: Editing and Study from Chapter 1 to Chapter 33"
  }, {
    degree: "Master of the History of Basic Sciences (specializing in the history of astronomy)",
    institution: "University of Aleppo - Institute for the History of Arabic Science",
    year: "2020",
    gpa: "92.23",
    thesis: "Zij Ibn al-Shatir by Ala al-Din Abu al-Hasan Ibn al-Shatir: Editing and Study from Chapter 1 to Chapter 33"
  }, {
    degree: "Bachelor's in Information Systems Engineering (specializing in software application development)",
    institution: "Syrian Virtual University",
    year: "2019",
    gpa: "72.57"
  }, {
    degree: "Bachelor's in Mathematics (major in Mathematical Analysis)",
    institution: "University of Aleppo",
    year: "2013",
    gpa: "78.36"
  }];
  return a.jsxs("section", { className: "education section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "التحصيل العلمي" : "Education" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.degree }), a.jsx("p", { className: "timeline-text", children: e.institution }), a.jsx("span", { className: "timeline-date", children: e.year }), e.gpa && a.jsx("p", { children: `GPA: ${e.gpa}` }), e.thesis && a.jsx("p", { children: e.thesis })] }, t)) })] });
};

const tp = ({ language }) => {
  const n = language === "ar" ? [{
    role: "مدير برامج",
    org: "جمعية محو الأمية والتربية",
    period: "يناير 2025 - الحاضر"
  }, {
    role: "منسقة مبادرات ونشاطات مجتمعية",
    org: "جمعية محو الأمية والتربية",
    period: "أغسطس 2024 - ديسمبر 2024"
  }, {
    role: "منسقة مبادرات مجتمعية",
    org: "جمعية التآلف",
    period: "سبتمبر 2023 - أغسطس 2024"
  }, {
    role: "مطوّرة Front-End (Vue.js)",
    org: "شركة زنوبيا",
    period: "2023–2024"
  }, {
    role: "منسقة مشروع التعليم العلاجي",
    org: "جمعية محو الأمية والتربية",
    period: "2022–2023"
  }, {
    role: "مراقب ميداني",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2022"
  }, {
    role: "مشرفة تربوية",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2020"
  }, {
    role: "مشرفة فنية للرياضيات والعلوم العامة",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2020"
  }, {
    role: "منسقة برنامج الفلكي الصغير",
    org: "الجمعية الفلكية السورية",
    period: "2020–2023"
  }, {
    role: "ميسّرة جلسات التوعية الأبوية",
    org: "جمعية محو الأمية (حملة العودة إلى المدرسة)",
    period: "2021"
  }, {
    role: "مطوّرة Front-End (CSS, HTML, WordPress)",
    org: "شركة زنوبيا",
    period: "2020–2023"
  }, {
    role: "مدرسة",
    org: "مدرسة المنارة الخاصة",
    period: "2014–2021"
  }, {
    role: "مدرسة",
    org: "معهد الرويال للتحليل العددي (طلاب قسم الكيمياء)",
    period: "2016–2017"
  }, {
    role: "مدرسة",
    org: "مدرسة الجيل العربي (تدريب طلاب أولمبياد الرياضيات)",
    period: "2014–2021"
  }, {
    role: "محاضرة",
    org: "جامعة حلب - كلية الهندسة الميكانيكية (رياضيات 3)",
    period: "2016–2017"
  }, {
    role: "محاضرة",
    org: "جامعة حلب - كلية العلوم (تحليل 1، تحليل دالي 2، برمجة 2)",
    period: "2014–2015"
  }] : [{
    role: "Program Manager",
    org: "Education and Illiteracy Eradication Association",
    period: "Jan 2025 – Present"
  }, {
    role: "Community Initiatives and Activities Coordinator",
    org: "Education and Illiteracy Eradication Association",
    period: "Aug 2024 – Dec 2024"
  }, {
    role: "Community Initiatives Coordinator",
    org: "Al-Ta'aluf Association",
    period: "Sep 2023 – Aug 2024"
  }, {
    role: "Front-End Developer (Vue.js)",
    org: "Zenobia Company",
    period: "2023–2024"
  }, {
    role: "Remedial Education Project Coordinator",
    org: "Education and Illiteracy Eradication Association",
    period: "2022–2023"
  }, {
    role: "Field Monitor",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2022"
  }, {
    role: "Educational Supervisor",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2020"
  }, {
    role: "Technical Supervisor of Mathematics and General Sciences",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2020"
  }, {
    role: "Coordinator of the Young Astronomer Program",
    org: "Syrian Astronomical Society",
    period: "2020–2023"
  }, {
    role: "Facilitator of Parental Awareness Sessions",
    org: "Education and Illiteracy Eradication Association (Back-to-School Campaign)",
    period: "2021"
  }, {
    role: "Front-End Developer (CSS, HTML, WordPress)",
    org: "Zenobia Company",
    period: "2020–2023"
  }, {
    role: "Teacher",
    org: "Al-Manara Private School",
    period: "2014–2021"
  }, {
    role: "Teacher",
    org: "Royal Institute of Numerical Analysis (Chemistry Department students)",
    period: "2016–2017"
  }, {
    role: "Teacher",
    org: "Arab Generation School (Scientific Olympiad in Mathematics)",
    period: "2014–2021"
  }, {
    role: "Lecturer",
    org: "University of Aleppo – Faculty of Mechanical Engineering (Mathematics 3)",
    period: "2016–2017"
  }, {
    role: "Lecturer",
    org: "University of Aleppo – Faculty of Science (Analysis 1, Functional Analysis 2, Programming 2)",
    period: "2014–2015"
  }];
  return a.jsxs("section", { className: "experience section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الخبرة المهنية" : "Professional Experience" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.role }), a.jsx("p", { className: "timeline-text", children: e.org }), a.jsx("span", { className: "timeline-date", children: e.period })] }, t)) })] });
};

const np = ({ language }) => {
  const n = language === "ar" ? [{
    title: "التواريخ الفلكية في زيجه ابن الشاطر الدمشقي (704–777ه / 1306–1376م)",
    journal: "مجلة جامعة حلب للبحوث، سلسلة تاريخ العلوم عند العرب، العدد 14",
    year: "2019"
  }, {
    title: "تحقيق ودراسة الفصل الثامن \"في معرفة تواريخ الكواكب الخمسة السيارة\" في زيجه ابن الشاطر، تواريخ المشتري أنموذجًا",
    journal: "مجلة جامعة حلب للبحوث، سلسلة تاريخ العلوم عند العرب",
    year: "2020"
  }] : [{
    title: "Astronomical Calendars in the Zijj of Ibn al-Shatir al-Dimashqi (704–777 AH / 1306–1376 AD)",
    journal: "Research Journal of the University of Aleppo, Series on the History of Science among the Arabs, No. 14",
    year: "2019"
  }, {
    title: "Investigation and study of Chapter Eight, 'On Knowing the Calendar of the Five Moving Planets' in Zij Ibn Al-Shater, 'The Calendar of Jupiter' as a Model",
    journal: "Research Journal of the University of Aleppo, Series of the History of Science among the Arabs",
    year: "2020"
  }];
  return a.jsxs("section", { className: "publications section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الأبحاث المنشورة" : "Published Research" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.title }), a.jsx("p", { children: e.journal }), a.jsx("span", { className: "timeline-date", children: e.year })] }, t)) })] });
};

const ip = ({ language }) => {
  const n = language === "ar" ? [{
    title: "المنهج الشكي عند ابن الشاطر الدمشقي، كتاب نهاية النفس في تصح الأصول أنموذجًا",
    event: "المؤتمر الخامس والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "23–25 نوفمبر 2021"
  }, {
    title: "المصطلح الفلكي واستخدامه في الخطاب الصوفي عند السهروردي الحلبي",
    event: "مؤتمر اليونسكو للاحتفال بالذكرى 850 لحياة السهروردي",
    date: "16 أكتوبر 2019"
  }, {
    title: "فلكيو عصر كمال الدين الفارسي (ت 719ه / 1319م)",
    event: "المؤتمر الرابع والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "23–25 أبريل 2019"
  }, {
    title: "الإسهام العلمي للبيروني في التواريخ الفلكية",
    event: "المؤتمر الثالث والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "8–10 مايو 2018"
  }, {
    title: "مختصرات زيجه ابن الشاطر، مخطوطة تحفة الناظر لكم الريشي أنموذجًا",
    event: "المؤتمر الثاني والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "16–18 مايو 2017"
  }, {
    title: "مخطوطة رسالة في الأسطرلاب لابن الشاطر الدمشقي (704–777ه)، دراسة علمية مقارنة",
    event: "المؤتمر الحادي والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "10–12 مايو 2016"
  }] : [{
    title: "The Skeptical Approach of Ibn al-Shater al-Dimashqi, 'The Book of the End of the Soul in Taseh al-Usul' as a model",
    event: "35th Conference on the History of Science, University of Aleppo",
    date: "Nov 23–25, 2021"
  }, {
    title: "Astronomical Term and Employment in the Sufi Discourse of Suhrawardi of Halabi",
    event: "UNESCO Celebration Conference for the 850th Anniversary of Suhrawardi’s Life",
    date: "Oct 16, 2019"
  }, {
    title: "Astronomers in the era of Kamal al-Din al-Farsi (d. 719 AH / 1319 AD)",
    event: "34th Conference on the History of Science, University of Aleppo",
    date: "Apr 23–25, 2019"
  }, {
    title: "Al-Biruni’s Scientific Contribution to Astronomical Calendars",
    event: "33rd Conference on the History of Science, University of Aleppo",
    date: "May 8–10, 2018"
  }, {
    title: "Abbreviations of Zij Ibn al-Shater, The Manuscript of Tuhfat al-Nazir for Kom al-Rishi as a 'model'",
    event: "32nd Conference on the History of Science, University of Aleppo",
    date: "May 16–18, 2017"
  }, {
    title: "Manuscript of a treatise on the astrolabe by Ibn al-Shater al-Dimashqi (704–777 AH), a comparative scientific study",
    event: "31st Conference on the History of Science, University of Aleppo",
    date: "May 10–12, 2016"
  }];
  return a.jsxs("section", { className: "conferences section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "المشاركات في المؤتمرات" : "Conferences" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.title }), a.jsx("p", { children: e.event }), a.jsx("span", { className: "timeline-date", children: e.date })] }, t)) })] });
};

const lp = ({ language }) => {
  const n = language === "ar" ? [{
    course: "دورة فلكية",
    center: "الاتحاد العربي لعلوم الفضاء والفلك",
    place: "أونلاين - الأردن",
    year: "2023"
  }, {
    course: "ورشة عمل C4D",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2021"
  }, {
    course: "مبادئ إدارة مشاريع التنمية",
    center: "مؤسسة سناد للتنمية",
    place: "حلب",
    year: "2021"
  }, {
    course: "القيم الأخلاقية",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2020"
  }, {
    course: "تدريب المدربين (TOT)",
    center: "مركز تواصل",
    place: "حلب",
    year: "2020"
  }, {
    course: "التعلم النشط",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2020"
  }, {
    course: "أسس ومفاهيم في الفلك",
    center: "الجمعية الفلكية السورية",
    place: "حلب",
    year: "2019"
  }, {
    course: "إدارة العمل التطوعي والمتطوعين",
    center: "إدارة الجمعيات الخيرية",
    place: "حلب",
    year: "2019"
  }, {
    course: "أصول الخط العربي والتراث",
    center: "معهد تاريخ العلوم العربية",
    place: "حلب",
    year: "2016"
  }, {
    course: "C# & SQL",
    center: "CPC",
    place: "حلب",
    year: "2017"
  }, {
    course: "C#",
    center: "CPC",
    place: "حلب",
    year: "2016"
  }] : [{
    course: "Astronomy Course",
    center: "Arab Union for Space Sciences and Astronomy",
    place: "Online - Jordan",
    year: "2023"
  }, {
    course: "C4D Workshop",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2021"
  }, {
    course: "Principles of Managing Development Projects",
    center: "Sanad Development Foundation",
    place: "Aleppo",
    year: "2021"
  }, {
    course: "Moral Values Course",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Train the Trainers (TOT)",
    center: "Tawasol Center",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Active Learning",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Fundamentals and Principles in Astronomy",
    center: "Syrian Astronomical Society",
    place: "Aleppo",
    year: "2019"
  }, {
    course: "Management of Volunteer Work and Volunteers",
    center: "Charity Management",
    place: "Aleppo",
    year: "2019"
  }, {
    course: "The Origins of Arabic Calligraphy and Heritage",
    center: "Institute for the History of Arabic Science",
    place: "Aleppo",
    year: "2016"
  }, {
    course: "C# & SQL",
    center: "CPC",
    place: "Aleppo",
    year: "2017"
  }, {
    course: "C#",
    center: "CPC",
    place: "Aleppo",
    year: "2016"
  }];
  return a.jsxs("section", { className: "training section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الدورات التدريبية" : "Training Courses" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.course }), a.jsx("p", { children: `${e.center} — ${e.place}` }), a.jsx("span", { className: "timeline-date", children: e.year })] }, t)) })] });
};

const op = ({ language }) => {
  const n = language === "ar" ? {
    volunteering: [
      "متطوعة في الجمعية الفلكية السورية منذ 2018",
      "متطوعة في مبادرة الضوء (تسجيل كتب للمكفوفين) منذ 2018",
      "متطوعة في جمعية محو الأمية والتربية منذ 2020"
    ],
    memberships: [
      "عضو مجلس إدارة الجمعية الفلكية السورية في حلب منذ 2018",
      "عضو هيئة عامة في جمعية محو الأمية والتربية في حلب منذ 2022"
    ]
  } : {
    volunteering: [
      "Volunteer at the Syrian Astronomical Society since 2018",
      "Volunteer in the Light Initiative (recording books for the blind) since 2018",
      "Volunteer at the Education and Illiteracy Eradication Association since 2020"
    ],
    memberships: [
      "Member of the Board of Directors of the Syrian Astronomical Society in Aleppo since 2018",
      "Member of a public body in the Education and Illiteracy Eradication Association in Aleppo since 2022"
    ]
  };
  return a.jsxs("section", { className: "volunteer section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "التطوع والعضويات" : "Volunteering & Memberships" }), a.jsxs("div", { className: "two-columns", children: [a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "التطوع" : "Volunteering" }), a.jsx("ul", { children: n.volunteering.map((e, t) => a.jsx("li", { children: e }, t)) })] }), a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "العضويات" : "Memberships" }), a.jsx("ul", { children: n.memberships.map((e, t) => a.jsx("li", { children: e }, t)) })] })] })] });
};

const rp = ({ language }) => {
  const n = language === "ar" ? {
    languages: [{ name: "العربية", level: "اللغة الأم" }, { name: "الإنجليزية", level: "متقدم" }],
    technical: ["React.js", "Vue.js", "Node.js", "ASP.NET Razor Pages", "HTML/CSS", "JavaScript", "WordPress"],
    other: ["Photoshop (مستوى متوسط)", "Adobe Premiere (مستوى متوسط)"]
  } : {
    languages: [{ name: "Arabic", level: "Native" }, { name: "English", level: "Advanced" }],
    technical: ["React.js", "Vue.js", "Node.js", "ASP.NET Razor Pages", "HTML/CSS", "JavaScript", "WordPress"],
    other: ["Photoshop (Intermediate)", "Adobe Premiere (Intermediate)"]
  };
  return a.jsxs("section", { className: "skills section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "المهارات" : "Skills" }), a.jsxs("div", { className: "two-columns", children: [a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "اللغات" : "Languages" }), a.jsx("ul", { children: n.languages.map((e, t) => a.jsx("li", { children: `${e.name} — ${e.level}` }, t)) })] }), a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "المهارات التقنية" : "Technical Skills" }), a.jsx("ul", { children: n.technical.map((e, t) => a.jsx("li", { children: e }, t)) }), a.jsx("h3", { children: language === "ar" ? "مهارات أخرى" : "Other Skills" }), a.jsx("ul", { children: n.other.map((e, t) => a.jsx("li", { children: e }, t)) })] })] })] });
};

const App = () => {
  const [language, setLanguage] = a.useState("ar");
  return a.jsxs("div", { dir: language === "ar" ? "rtl" : "ltr", className: "app", children: [a.jsxs("header", { className: "header", children: [a.jsx("h1", { children: "Nagham Mashariqa" }), a.jsx("p", { children: language === "ar" ? "دكتوراه في تاريخ الفلك | مطوّرة برمجيات | محاضرة رياضيات" : "PhD in History of Astronomy | Software Developer | Mathematics Lecturer" }), a.jsxs("div", { className: "language-toggle", children: [a.jsx("button", { onClick: () => setLanguage("ar"), children: "العربية" }), a.jsx("button", { onClick: () => setLanguage("en"), children: "English" })] })] }), a.jsx(bf, { language }), a.jsx(ep, { language }), a.jsx(tp, { language }), a.jsx(np, { language }), a.jsx(ip, { language }), a.jsx(lp, { language }), a.jsx(op, { language }), a.jsx(rp, { language })] });
};

const root = document.getElementById("root");
root && Nt.createRoot(root).render(a.jsx(App, {}));
})();
