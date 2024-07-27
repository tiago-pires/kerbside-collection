(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||pa});
var qa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if(typeof Object.setPrototypeOf=="function")sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}
function xa(){this.v=!1;this.o=null;this.i=void 0;this.h=1;this.B=this.m=0;this.K=this.j=null}
function ya(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
xa.prototype.F=function(a){this.i=a};
function za(a,b){a.j={exception:b,bd:!0};a.h=a.m||a.B}
xa.prototype.return=function(a){this.j={return:a};this.h=this.B};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.D=function(a){this.h=a};
function Aa(a,b,c){a.m=b;c!=void 0&&(a.B=c)}
function Ba(a){a.m=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.bd?a.h=a.m||a.B:b.D!=void 0&&a.B<b.D?(a.h=b.D,a.j=null):a.h=a.B:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.o;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.o=null,za(a.h,g),Ha(a)}a.h.o=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.bd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ya(a.h);a.h.o?b=Ga(a,a.h.o.next,b,a.h.F):(a.h.F(b),b=Ha(a));return b};
this.throw=function(b){ya(a.h);a.h.o?b=Ga(a,a.h.o["throw"],b,a.h.F):(za(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ja(new Ia(new Ea(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ra});
v("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.B()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.B=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.X),reject:g(this.B)}};
b.prototype.X=function(g){if(g===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.o(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.B(k);return}typeof h=="function"?this.qa(h,g):this.o(g)};
b.prototype.B=function(g){this.F(2,g)};
b.prototype.o=function(g){this.F(1,g)};
b.prototype.F=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.K()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=fa.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.m();g.Vb(h.resolve,h.reject)};
b.prototype.qa=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(u){try{l(p(u))}catch(y){n(y)}}:t}
var l,n,m=new b(function(p,t){l=p;n=t});
this.Vb(k(g,l),k(h,n));return m};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Vb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Vb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function m(u){return function(y){p[u]=y;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).Vb(m(p.length-1),n),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||wa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(n.get(k)!=2||n.get(l)!=3)return!1;n.delete(k);n.set(l,4);return!n.has(k)&&n.get(l)==4}catch(m){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var m=n[h];if(k!==k&&m.key!==m.key||k===m.key)return{id:l,list:n,index:h,entry:m}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||n.value[1]!="s")return!1;n=l.next();return n.done||n.value[0].x!=4||n.value[1]!="t"||!l.next().done?!1:!0}catch(m){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
v("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a,b){var c=F("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(eb===void 0){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){D.console&&D.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ka([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.de=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Yb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function $b(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){this.h=a}
;function zc(a,b,c){this.m=a;this.j=b;this.fields=c||[];this.h=new Map}
r=zc.prototype;r.Cd=function(a){var b=C.apply(1,arguments),c=this.sc(b);c?c.push(new yc(a)):this.od(a,b)};
r.od=function(a){var b=this.Lc(C.apply(1,arguments));this.h.set(b,[new yc(a)])};
r.sc=function(){var a=this.Lc(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.Sd=function(){var a=this.sc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Lc=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Ac(a,b){zc.call(this,a,3,b)}
x(Ac,zc);Ac.prototype.i=function(a){var b=C.apply(1,arguments),c=0,d=this.Sd(b);d&&(c=d.h);this.od(c+a,b)};function Bc(a,b){zc.call(this,a,2,b)}
x(Bc,zc);Bc.prototype.record=function(a){this.Cd(a,C.apply(1,arguments))};function Cc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Dc.apply(null,d):Cc(d)}}
;function G(){this.ja=this.ja;this.B=this.B}
G.prototype.ja=!1;G.prototype.dispose=function(){this.ja||(this.ja=!0,this.da())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function Ec(a,b){a.addOnDisposeCallback(Ya(Cc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.ja?b!==void 0?a.call(b):a():(this.B||(this.B=[]),this.B.push(b!==void 0?Xa(a,b):a))};
G.prototype.da=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function Fc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fc.prototype.stopPropagation=function(){this.j=!0};
Fc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Gc=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();var Hc=Oa(1,!0),Ic=Oa(610401301,!1),Jc=Oa(188588736,!0),Kc=Oa(645172343,Hc),Lc=Oa(653718497,Hc);function Mc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Nc,Oc=D.navigator;Nc=Oc?Oc.userAgentData||null:null;function Pc(a){return Ic?Nc?Nc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Mc().indexOf(a)!=-1}
;function Qc(){return Ic?!!Nc&&Nc.brands.length>0:!1}
function Rc(){return Qc()?!1:I("Opera")}
function Sc(){return I("Firefox")||I("FxiOS")}
function Tc(){return Qc()?Pc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Qc()?0:I("Edge"))||I("Silk")}
;function Uc(){return Ic?!!Nc&&!!Nc.platform:!1}
function Vc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Wc(a){Wc[" "](a);return a}
Wc[" "]=function(){};var Xc=Rc(),Yc=Qc()?!1:I("Trident")||I("MSIE"),Zc=I("Edge"),$c=I("Gecko")&&!(Mc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),ad=Mc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");ad&&I("Mobile");Uc()||I("Macintosh");Uc()||I("Windows");(Uc()?Nc.platform==="Linux":I("Linux"))||Uc()||I("CrOS");var bd=Uc()?Nc.platform==="Android":I("Android");Vc();I("iPad");I("iPod");Vc()||I("iPad")||I("iPod");Mc().toLowerCase().indexOf("kaios");function cd(a,b){Fc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(cd,Fc);var dd={2:"touch",3:"pen",4:"mouse"};
cd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if($c){a:{try{Wc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:dd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&cd.Ca.preventDefault.call(this)};
cd.prototype.stopPropagation=function(){cd.Ca.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
cd.prototype.preventDefault=function(){cd.Ca.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ed="closure_listenable_"+(Math.random()*1E6|0);var fd=0;function gd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++fd;this.Lb=this.Ub=!1}
function hd(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function id(a){this.src=a;this.listeners={};this.h=0}
id.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=jd(a,b,d,e);g>-1?(b=a[g],c||(b.Ub=!1)):(b=new gd(b,this.src,f,!!d,e),b.Ub=c,a.push(b));return b};
id.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=jd(e,b,c,d);return b>-1?(hd(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function kd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(hd(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function jd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var ld="closure_lm_"+(Math.random()*1E6|0),md={},nd=0;function od(a,b,c,d,e){if(d&&d.once)pd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=qd(c),a&&a[ed]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e)}
function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=sd(a);h||(a[ld]=h=new id(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");nd++}}
function td(){function a(c){return b.call(a.src,a.listener,c)}
var b=vd;return a}
function pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pd(a,b[f],c,d,e);else c=qd(c),a&&a[ed]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e)}
function wd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)wd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=qd(c),a&&a[ed])?a.h.remove(String(b),c,d,e):a&&(a=sd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=jd(b,c,d,e)),(c=a>-1?b[a]:null)&&xd(c))}
function xd(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[ed])kd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);nd--;(c=sd(b))?(kd(c,a),c.h==0&&(c.src=null,b[ld]=null)):hd(a)}}}
function ud(a){return a in md?md[a]:md[a]="on"+a}
function vd(a,b){if(a.Lb)a=!0;else{b=new cd(b,this);var c=a.listener,d=a.ac||a.src;a.Ub&&xd(a);a=c.call(d,b)}return a}
function sd(a){a=a[ld];return a instanceof id?a:null}
var yd="__closure_events_fn_"+(Math.random()*1E9>>>0);function qd(a){if(typeof a==="function")return a;a[yd]||(a[yd]=function(b){return a.handleEvent(b)});
return a[yd]}
;function zd(){G.call(this);this.h=new id(this);this.Ka=this;this.ga=null}
$a(zd,G);zd.prototype[ed]=!0;r=zd.prototype;r.addEventListener=function(a,b,c,d){od(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){wd(this,a,b,c,d)};
function Ad(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Ka;c=b.type||b;typeof b==="string"?b=new Fc(b,a):b instanceof Fc?b.target=b.target||a:(e=b,b=new Fc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Bd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Bd(g,c,!0,b)&&e,b.j||(e=Bd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Bd(g,c,!1,b)&&e}
r.da=function(){zd.Ca.da.call(this);this.removeAllListeners();this.ga=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,hd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Bd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Ub&&kd(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Cd(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
Cd.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Dd(a,b){a.m(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Ed(){}
function Fd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Gd(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=Gd.prototype;r.clone=function(){return new Gd(this.x,this.y)};
r.equals=function(a){return a instanceof Gd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Hd(a,b){this.width=a;this.height=b}
r=Hd.prototype;r.clone=function(){return new Hd(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Id(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Jd(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Kd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ld;function Md(){var a=D.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Jd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Pc;c.Pc=null;e()}};
return function(e){d.next={Pc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function Nd(a){D.setTimeout(function(){throw a;},0)}
;function Od(){this.i=this.h=null}
Od.prototype.add=function(a,b){var c=Pd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Od.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Pd=new Cd(function(){return new Qd},function(a){return a.reset()});
function Qd(){this.next=this.scope=this.h=null}
Qd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Qd.prototype.reset=function(){this.next=this.scope=this.h=null};var Rd,Sd=!1,Td=new Od;function Ud(a,b){Rd||Vd();Sd||(Rd(),Sd=!0);Td.add(a,b)}
function Vd(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);Rd=function(){a.then(Wd)}}else Rd=function(){var b=Wd;
typeof D.setImmediate!=="function"||D.Window&&D.Window.prototype&&D.Window.prototype.setImmediate==D.setImmediate?(Ld||(Ld=Md()),Ld(b)):D.setImmediate(b)}}
function Wd(){for(var a;a=Td.remove();){try{a.h.call(a.scope)}catch(b){Nd(b)}Dd(Pd,a)}Sd=!1}
;function Xd(a){this.h=0;this.v=void 0;this.m=this.i=this.j=null;this.B=this.o=!1;if(a!=Ed)try{var b=this;a.call(void 0,function(c){Yd(b,2,c)},function(c){Yd(b,3,c)})}catch(c){Yd(this,3,c)}}
function Zd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Zd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var $d=new Cd(function(){return new Zd},function(a){a.reset()});
function ae(a,b,c){var d=$d.get();d.i=a;d.h=b;d.context=c;return d}
function be(a){return new Xd(function(b,c){c(a)})}
Xd.prototype.then=function(a,b,c){return ce(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Xd.prototype.$goog_Thenable=!0;r=Xd.prototype;r.lc=function(a,b){return ce(this,null,a,b)};
r.catch=Xd.prototype.lc;r.cancel=function(a){if(this.h==0){var b=new de(a);Ud(function(){ee(this,b)},this)}};
function ee(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?ee(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):fe(c),ge(c,e,3,b)))}a.j=null}else Yd(a,3,b)}
function he(a,b){a.i||a.h!=2&&a.h!=3||ie(a);a.m?a.m.next=b:a.i=b;a.m=b}
function ce(a,b,c,d){var e=ae(null,null,null);e.child=new Xd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof de?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;he(a,e);return e.child}
r.Ve=function(a){this.h=0;Yd(this,2,a)};
r.We=function(a){this.h=0;Yd(this,3,a)};
function Yd(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ve,f=a.We;if(d instanceof Xd){he(d,ae(e||Ed,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){je(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,ie(a),b!=3||c instanceof de||ke(a,c))}}
function je(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ie(a){a.o||(a.o=!0,Ud(a.Nd,a))}
function fe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
r.Nd=function(){for(var a;a=fe(this);)ge(this,a,this.h,this.v);this.o=!1};
function ge(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.B;a=a.j)a.B=!1;if(b.child)b.child.j=null,le(b,c,d);else try{b.j?b.i.call(b.context):le(b,c,d)}catch(e){me.call(null,e)}Dd($d,b)}
function le(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ke(a,b){a.B=!0;Ud(function(){a.B&&me.call(null,b)})}
var me=Nd;function de(a){bb.call(this,a)}
$a(de,bb);de.prototype.name="cancel";function ne(a,b){zd.call(this);this.j=a||1;this.i=b||D;this.m=Xa(this.Se,this);this.o=Za()}
$a(ne,zd);r=ne.prototype;r.enabled=!1;r.Ga=null;r.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
r.Se=function(){if(this.enabled){var a=Za()-this.o;a>0&&a<this.j*.8?this.Ga=this.i.setTimeout(this.m,this.j-a):(this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null),Ad(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.i.setTimeout(this.m,this.j),this.o=Za())};
r.stop=function(){this.enabled=!1;this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null)};
r.da=function(){ne.Ca.da.call(this);this.stop();delete this.i};
function oe(a,b,c){if(typeof a==="function")c&&(a=Xa(a,c));else if(a&&typeof a.handleEvent=="function")a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:D.setTimeout(a,b||0)}
;function pe(a){G.call(this);this.F=a;this.j=0;this.m=100;this.o=!1;this.i=new Map;this.v=new Set;this.flushInterval=3E4;this.h=new ne(this.flushInterval);this.h.listen("tick",this.mc,!1,this);Ec(this,this.h)}
x(pe,G);r=pe.prototype;r.sendIsolatedPayload=function(a){this.o=a;this.m=1};
function qe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.m&&a.mc()}
r.mc=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.F.flush(a,this.o);re(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Sa=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ac(a,b))};
r.Bb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bc(a,b))};
function se(a,b){return a.v.has(b)?void 0:a.i.get(b)}
r.yb=function(a){this.Ad(a,1,C.apply(1,arguments))};
r.Ad=function(a,b){var c=C.apply(2,arguments),d=se(this,a);d&&d instanceof Ac&&(d.i(b,c),qe(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=se(this,a);d&&d instanceof Bc&&(d.record(b,c),qe(this))};
function re(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function te(a){this.h=a;this.h.Sa("/client_streamz/bg/fic",{I:3,H:"ke"})}
function ue(a){this.h=a;this.h.Sa("/client_streamz/bg/fiec",{I:3,H:"rk"},{I:3,H:"ke"},{I:2,H:"ec"})}
function ve(a){this.h=a;this.h.Bb("/client_streamz/bg/fil",{I:3,H:"rk"},{I:3,H:"ke"})}
ve.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function we(a){this.h=a;this.h.Sa("/client_streamz/bg/fcc",{I:2,H:"ph"},{I:3,H:"ke"})}
function xe(a){this.h=a;this.h.Bb("/client_streamz/bg/fcd",{I:2,H:"ph"},{I:3,H:"ke"})}
xe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function ye(a){this.h=a;this.h.Sa("/client_streamz/bg/fsc",{I:3,H:"rk"},{I:3,H:"ke"})}
function ze(a){this.h=a;this.h.Bb("/client_streamz/bg/fsl",{I:3,H:"rk"},{I:3,H:"ke"})}
ze.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function Ae(a){this.h=a;this.h.Bb("/client_streamz/bg/wrl",{I:3,H:"mn"},{I:2,H:"ac"},{I:2,H:"sc"},{I:3,H:"rk"},{I:3,H:"mk"})}
Ae.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Be(a){this.h=a;this.h.Bb("/client_streamz/bg/el",{I:3,H:"en"},{I:3,H:"bk"},{I:3,H:"rk"},{I:3,H:"mk"})}
Be.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Ce(a){this.h=a;this.h.Sa("/client_streamz/bg/cec",{I:2,H:"ec"},{I:3,H:"bk"},{I:3,H:"rk"},{I:3,H:"mk"})}
function De(a){this.h=a;this.h.Sa("/client_streamz/bg/po/csc",{I:2,H:"cs"},{I:3,H:"rk"},{I:3,H:"mk"})}
function Ee(a){this.h=a;this.h.Sa("/client_streamz/bg/po/ctav",{I:3,H:"av"},{I:3,H:"rk"},{I:3,H:"mk"})}
function Fe(a){this.h=a;this.h.Sa("/client_streamz/bg/po/cwsc",{I:3,H:"su"},{I:3,H:"rk"},{I:3,H:"mk"})}
;Sc();var Ge=Vc()||I("iPod"),He=I("iPad");!I("Android")||Tc()||Sc()||Rc()||I("Silk");Tc();var Ie=I("Safari")&&!(Tc()||(Qc()?0:I("Coast"))||Rc()||(Qc()?0:I("Edge"))||(Qc()?Pc("Microsoft Edge"):I("Edg/"))||(Qc()?Pc("Opera"):I("OPR"))||Sc()||I("Silk")||I("Android"))&&!(Vc()||I("iPad")||I("iPod"));var Je={},Ke=null;function Le(a,b){Qa(a);b===void 0&&(b=0);Me();b=Je[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ne(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Oe(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Oe(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ke[l];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Me();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Me(){if(!Ke){Ke={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Je[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Ke[f]===void 0&&(Ke[f]=e)}}}}
;var Pe=typeof Uint8Array!=="undefined",Qe=!Yc&&typeof btoa==="function";function Re(a){if(!Qe)return Le(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Se=/[-_.]/g,Te={"-":"+",_:"/",".":"="};function Ue(a){return Te[a]||""}
function Ve(a){return Pe&&a!=null&&a instanceof Uint8Array}
var We={};var Xe;function Ye(a){if(a!==We)throw Error("illegal external caller");}
function Ze(a,b){Ye(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Ze.prototype.sizeBytes=function(){Ye(We);var a=this.h;if(a!=null&&!Ve(a))if(typeof a==="string")if(Qe){Se.test(a)&&(a=a.replace(Se,Ue));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ne(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var $e;function af(){var a=Error();ec(a,"incident");Nd(a)}
function bf(a){a=Error(a);ec(a,"warning");return a}
;function cf(){return typeof BigInt==="function"}
;function df(a){return Array.prototype.slice.call(a)}
;var ef=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ff(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var gf=ff(),hf=ff("2ex"),jf=ff("1oa");Math.max.apply(Math,ma(Object.values({vg:1,tg:2,sg:4,yg:8,xg:16,wg:32,mf:64,Ag:128,rg:256,qg:512,ug:1024,sf:2048,zg:4096,tf:8192})));var kf=ef?function(a,b){a[gf]|=b}:function(a,b){a.h!==void 0?a.h|=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},lf=ef?function(a){return a[gf]|0}:function(a){return a.h|0},mf=ef?function(a){return a[gf]}:function(a){return a.h},nf=ef?function(a,b){a[gf]=b}:function(a,b){a.h!==void 0?a.h=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function of(a,b){nf(b,(a|0)&-14591)}
function pf(a,b){nf(b,(a|34)&-14557)}
;var qf={},rf={};function sf(a){return!(!a||typeof a!=="object"||a.h!==rf)}
function tf(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function uf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=lf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;nf(a,d|1);return!0}
var vf,wf=[];nf(wf,55);vf=Object.freeze(wf);function xf(a){if(a&2)throw Error();}
var yf=Object.freeze({});Object.freeze({});var zf=Object.freeze({});var Af=0,Bf=0;function Cf(a){var b=a>>>0;Af=b;Bf=(a-b)/4294967296>>>0}
function Df(a){if(a<0){Cf(0-a);var b=w(Ef(Af,Bf));a=b.next().value;b=b.next().value;Af=a>>>0;Bf=b>>>0}else Cf(a)}
function Ff(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else cf()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Gf(c)+Gf(a));return c}
function Gf(a){a=String(a);return"0000000".slice(a.length)+a}
function Hf(){var a=Af,b=Bf;b&2147483648?cf()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Ef(a,b)),a=b.next().value,b=b.next().value,a="-"+Ff(a,b)):a=Ff(a,b);return a}
function Ef(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function If(a){return a.displayName||a.name||"unknown type name"}
function Jf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Kf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Lf(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Kf.test(a)}
function Mf(a){if(typeof a!=="number")throw bf("int32");if(!Number.isFinite(a))throw bf("int32");return a|0}
function Nf(a){return a==null?a:Mf(a)}
function Of(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function Pf(a){if(a!=null){var b=!!b;if(!Lf(a))throw bf("int64");a=typeof a==="string"?Qf(a):b?Rf(a):Sf(a)}return a}
function Tf(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Sf(a){Lf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Df(a);var b=Af,c=Bf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Rf(a){Lf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Tf(b)?a=b:(Df(a),a=Hf())}return a}
function Qf(a){Lf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");if(!Tf(a)){if(a.length<16)Df(Number(a));else if(cf())a=BigInt(a),Af=Number(a&BigInt(4294967295))>>>0,Bf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");Bf=Af=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Bf*=1E6,Af=Af*1E6+d,Af>=4294967296&&(Bf+=Math.trunc(Af/4294967296),Bf>>>=0,Af>>>=0);b&&(b=w(Ef(Af,Bf)),
a=b.next().value,b=b.next().value,Af=a,Bf=b)}a=Hf()}return a}
function Uf(a){if(typeof a!=="string")throw Error();return a}
function Vf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Wf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+If(b)+" but got "+(a&&If(a.constructor)));}
function Xf(a,b,c){if(a!=null&&typeof a==="object"&&a.zc===qf)return a;if(Array.isArray(a)){var d=lf(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&nf(a,e);return new b(a)}}
;function Yf(a){if(typeof Proxy!=="function")return a;var b=Zf(a);if(b)return b;b=new Proxy(a,{set:function(c,d,e){$f();c[d]=e;return!0}});
ag(a,b);return b}
function $f(){af()}
var bg=void 0,cg=void 0;function Zf(a){var b;return(b=bg)==null?void 0:b.get(a)}
function dg(a){var b;return((b=cg)==null?void 0:b.get(a))||a}
function ag(a,b){(bg||(bg=new WeakMap)).set(a,b);(cg||(cg=new WeakMap)).set(b,a)}
;var eg;function fg(a,b){lf(b);eg=b;a=new a(b);eg=void 0;return a}
function J(a,b,c){a==null&&(a=eg);eg=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=lf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(tf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}nf(a,d);return a}
;function gg(a,b){return hg(b)}
function hg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(uf(a,void 0,0))return}else{if(Ve(a))return Re(a);if(a instanceof Ze){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Re(b)}}}return a}
;function ig(a,b,c){a=df(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function jg(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=uf(a,void 0,0)?void 0:e&&lf(a)&2?a:kg(a,b,c,d!==void 0,e);else if(tf(a)){var f={},g;for(g in a)f[g]=jg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function kg(a,b,c,d,e){var f=d||c?lf(a):0;d=d?!!(f&32):void 0;a=df(a);for(var g=0;g<a.length;g++)a[g]=jg(a[g],b,c,d,e);c&&c(f,a);return a}
function lg(a){return a.zc===qf?a.toJSON():hg(a)}
;function mg(a,b,c){c=c===void 0?pf:c;if(a!=null){if(Pe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=lf(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(nf(a,(d|34)&-12293),a):kg(a,mg,d&4?pf:c,!0,!0)}a.zc===qf&&(c=a.G,d=mf(c),a=d&2?a:fg(a.constructor,ng(c,d,!0)));return a}}
function ng(a,b,c){var d=c||b&2?pf:of,e=!!(b&32);a=ig(a,b,function(f){return mg(f,e,d)});
kf(a,32|(c?2:0));return a}
function og(a){var b=a.G,c=mf(b);return c&2?fg(a.constructor,ng(b,c,!1)):a}
;function pg(a,b){a=a.G;return qg(a,mf(a),b)}
function rg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function qg(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(rg(a,b,e,c)&&hf!=null){var g;a=(g=$e)!=null?g:$e={};g=a[hf]||0;g>=4||(a[hf]=g+1,af())}return d}return rg(a,b,e,c)}}
function K(a,b,c){var d=a.G,e=mf(d);xf(e);sg(d,e,b,c);return a}
function sg(a,b,c,d,e){tf(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Kc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&nf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function tg(a){return ug(a,vg,11,!1)!==void 0}
function wg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function xg(a,b,c){var d=a.G,e=mf(d);xf(e);if(b==null)return sg(d,e,3),a;b=dg(b);if(!Array.isArray(b))throw bf();var f=lf(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===zf||!1);if(!(4&f))for(f=21,h&&(b=df(b),g=0,f=yg(f,e),f=zg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=df(b),g=0,f=yg(f,e),f=zg(f,e,!0));f!==g&&nf(b,f);sg(d,e,3,b);return a}
function Ag(a,b,c,d){a=a.G;var e=mf(a);xf(e);if(d==null){var f=Bg(a);if(Cg(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Bg(a);var g=Cg(f,a,e,c);g!==b&&(g&&(e=sg(a,e,g)),f.set(c,b))}sg(a,e,b,d)}
function Bg(a){if(ef){var b;return(b=a[jf])!=null?b:a[jf]=new Map}if(jf in a)return a[jf];b=new Map;Object.defineProperty(a,jf,{value:b});return b}
function Cg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];qg(b,c,g)!=null&&(e!==0&&(c=sg(b,c,e)),e=g)}a.set(d,e);return e}
function ug(a,b,c,d){a=a.G;var e=mf(a),f=qg(a,e,c,d);b=Xf(f,b,e);b!==f&&b!=null&&sg(a,e,c,b,d);return b}
function Dg(a,b,c,d){d=d===void 0?!1:d;b=ug(a,b,c,d);if(b==null)return b;a=a.G;var e=mf(a);if(!(e&2)){var f=og(b);f!==b&&(b=f,sg(a,e,c,b,d))}return b}
function Eg(a,b,c,d){d!=null?Wf(d,b):d=void 0;return K(a,c,d)}
function Fg(a,b,c,d){var e=a.G,f=mf(e);xf(f);if(d==null)return sg(e,f,c),a;d=dg(d);if(!Array.isArray(d))throw bf();for(var g=lf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&(void 0===zf||!1),m=!0,p=!0,t=0;t<d.length;t++){var u=d[t];Wf(u,b);k||(u=!!(lf(u.G)&2),m&&(m=!u),p&&(p=u))}k||(g|=5,g=m?g|8:g&-9,g=p?g|16:g&-17);if(n||l&&g!==h)d=df(d),h=0,g=yg(g,f),g=zg(g,f,!0);g!==h&&nf(d,g);sg(e,f,c,d);return a}
function yg(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function zg(a,b,c){32&b&&c||(a&=-33);return a}
function Gg(a,b){a=pg(a,b);var c;a==null?c=a:Lf(a)?typeof a==="number"?c=Sf(a):c=Qf(a):c=void 0;return c}
function Hg(a){a=pg(a,1);var b=b===void 0?!1:b;b=a==null?a:Lf(a)?typeof a==="string"?Qf(a):b?Rf(a):Sf(a):void 0;return b}
function Ig(a,b){return a!=null?a:b}
function Jg(a,b){var c=c===void 0?"":c;a=pg(a,b);return Ig(a==null||typeof a==="string"?a:void 0,c)}
function Kg(a){var b=0;b=b===void 0?0:b;a=pg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Ig(a,b)}
function Lg(a,b,c){return K(a,b,Vf(c))}
function Mg(a,b,c){if(c!=null){if(!Number.isFinite(c))throw bf("enum");c|=0}return K(a,b,c)}
;function Ng(a){return a}
function Og(a){return a}
function Pg(a,b,c,d){return Sg(a,b,c,d,Tg,Ug)}
function Vg(a,b,c,d){return Sg(a,b,c,d,Wg,Xg)}
function Sg(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,n=0,m=c.length-1;m>=0;m--){var p=c[m];d&&m===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)m=+t,isNaN(m)||(n+=Yg(m),h++,m>g&&(g=m));l=e(l,k)+f(h,g,n);t=k;m=h;p=g;for(var u=n,y=c.length-1;y>=0;y--){var z=c[y];if(!(z==null||d&&y===c.length-1&&z===d)){z=y-b;var A=e(z,t)+f(m,p,u);A<l&&(a=1+z,l=A);m++;t--;u+=Yg(z);p=Math.max(p,z)}}b=e(0,0)+f(m,p,u);b<l&&(a=0,l=b);if(d){m=h;p=g;u=n;t=k;for(var H in d)d=+H,isNaN(d)||d>=
1024||(m--,t++,u-=H.length,g=e(d,t)+f(m,p,u),g<l&&(a=1+d,l=g))}return a}
function Xg(a,b,c){return c+a*3+(a>1?a-1:0)}
function Wg(a,b){return(a>1?a-1:0)+(a-b)*4}
function Ug(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Tg(a){return 40+4*a}
function Yg(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Zg,$g;function L(a,b,c){this.G=J(a,b,c)}
r=L.prototype;r.toJSON=function(){return ah(this)};
r.serialize=function(a){try{return $g=!0,a&&(Zg=a===Og||a!==Ng&&a!==Pg&&a!==Vg?Og:a),JSON.stringify(ah(this),gg)}finally{a&&(Zg=void 0),$g=!1}};
function bh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");kf(b,32);return fg(a,b)}
r.clone=function(){var a=this.G,b=mf(a);return fg(this.constructor,ng(a,b,!1))};
r.zc=qf;r.toString=function(){try{return $g=!0,ah(this).toString()}finally{$g=!1}};
function ah(a){var b;$g?b=a.G:b=kg(a.G,lg,void 0,void 0,!1);var c=!$g;var d=Jc?void 0:a.constructor.Ra;var e=mf(c?a.G:b);if(a=b.length){var f=b[a-1],g=tf(f);g?a--:f=void 0;var h=+!!(e&512)-1,k=a-h,l=!!Zg&&Kc&&!(e&512),n;e=(n=Zg)!=null?n:Og;e=l?e(k,h,b,f):k;k=(n=l&&k!==e)?Array.prototype.slice.call(b,0,a):b;if(g||n){b:{var m=k;var p=f;g={};l=!1;if(n)for(var t=Math.max(0,e+h);t<m.length;t++){var u=m[t],y=t-h;u==null||uf(u,d,y)||sf(u)&&u.size===0||(m[t]=void 0,g[y]=u,l=!0)}if(p)for(var z in p)if(t=+z,
isNaN(t))g[z]=p[z];else if(u=p[z],Array.isArray(u)&&(uf(u,d,+z)||sf(u)&&u.size===0)&&(u=null),u==null&&(l=!0),n&&t<e){l=!0;u=t+h;for(y=m.length;y<=u;y++)m.push(void 0);m[u]=p[t]}else u!=null&&(g[z]=u);if(l){for(var A in g){p=g;break b}p=null}}m=p==null?f!=null:p!==f}n&&(a=k.length);for(;a>0;a--){A=a-1;z=k[A];A-=h;if(!(z==null||uf(z,d,A)||sf(z)&&z.size===0))break;var H=!0}if(k!==b||m||H){if(!n&&!c)k=Array.prototype.slice.call(k,0,a);else if(H||m||p)k.length=a;p&&k.push(p)}H=k}else H=b;return H}
;function ch(a){a.Lg=!0;return a}
;function dh(a){this.G=J(a)}
x(dh,L);dh.Ra=[1,2,3,4];var eh={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function fh(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=gh(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=hh(a,h),d+=hh(a,h+4),e+=hh(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return eh.toString(e)}
function gh(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function hh(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function ih(a){this.G=J(a)}
x(ih,L);var jh=[1,2,3];function kh(a){this.G=J(a)}
x(kh,L);var lh=[1,2,3];function mh(a){this.G=J(a)}
x(mh,L);mh.Ra=[1];function nh(a){this.G=J(a)}
x(nh,L);nh.Ra=[3,6,4];function oh(a){this.G=J(a)}
x(oh,L);oh.Ra=[1];function ph(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function qh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(m){for(var p=g,t=0;t<64;t+=4)p[t/4]=m[t]<<24|m[t+1]<<16|m[t+2]<<8|m[t+3];for(t=16;t<80;t++)m=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(m<<1|m>>>31)&4294967295;m=e[0];var u=e[1],y=e[2],z=e[3],A=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^u&(y^z);var R=1518500249}else H=u^y^z,R=1859775393;else t<60?(H=u&y|z&(u|y),R=2400959708):(H=u^y^z,R=3395469782);H=((m<<5|m>>>27)&4294967295)+H+A+R+p[t]&4294967295;A=z;z=y;y=(u<<30|u>>>2)&4294967295;u=m;m=H}e[0]=e[0]+m&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+A&4294967295}
function c(m,p){if(typeof m==="string"){m=unescape(encodeURIComponent(m));for(var t=[],u=0,y=m.length;u<y;++u)t.push(m.charCodeAt(u));m=t}p||(p=m.length);t=0;if(l==0)for(;t+64<p;)b(m.slice(t,t+64)),t+=64,n+=64;for(;t<p;)if(f[l++]=m[t++],n++,l==64)for(l=0,b(f);t+64<p;)b(m.slice(t,t+64)),t+=64,n+=64}
function d(){var m=[],p=n*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var u=24;u>=0;u-=8)m[p++]=e[t]>>u&255;return m}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Jd:function(){for(var m=d(),p="",t=0;t<m.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(m[t]/16))+"0123456789ABCDEF".charAt(m[t]%16);return p}}}
;function rh(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,sh(ph(d),a,c||null)].join(" "):null}
function sh(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Db(d,function(h){e.push(h)}),th(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=th(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function th(a){var b=qh();b.update(a);return b.Jd().toLowerCase()}
;var uh={};function vh(a){this.h=a||{cookie:""}}
r=vh.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ze;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var wh=new vh(typeof document=="undefined"?null:document);function xh(a){return!!uh.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function yh(a){a=a===void 0?!1:a;var b=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;xh(a)&&(b=b||D.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new vh(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");xh(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function zh(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new vh(document)).get(b));return a?rh(a,c,d):null}
function Ah(a,b){b=b===void 0?!1:b;var c=ph(String(D.location.href)),d=[];if(yh(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?D.__SAPISID:D.__APISID;e||typeof document==="undefined"||(e=new vh(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?rh(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&xh(b)&&((b=zh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=zh("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Bh(a){this.G=J(a)}
x(Bh,L);Bh.Ra=[2];function Ch(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
Ch.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ch.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Ch.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ch.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Dh(a){this.G=J(a)}
x(Dh,L);function Eh(a){this.G=J(a)}
x(Eh,L);function Fh(a){this.h=this.i=this.j=a}
Fh.prototype.reset=function(){this.h=this.i=this.j};
Fh.prototype.getValue=function(){return this.i};function Gh(a){this.G=J(a)}
x(Gh,L);Gh.prototype.Zb=function(){return Kg(this)};function Hh(a){this.G=J(a)}
x(Hh,L);function Ih(a){this.G=J(a)}
x(Ih,L);function Jh(a,b){Fg(a,Hh,1,b)}
Ih.Ra=[1];function vg(a){this.G=J(a)}
x(vg,L);var Kh=["platform","platformVersion","architecture","model","uaFullVersion"],Lh=new Ih,Mh=null;function Nh(a,b){b=b===void 0?Kh:b;if(!Mh){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Hh;f=Lg(f,1,e.brand);return Lg(f,2,e.version)});
Jh(K(Lh,2,Jf(a.mobile)),c);Mh=a.getHighEntropyValues(b)}var d=new Set(b);return Mh.then(function(e){var f=Lh.clone();d.has("platform")&&Lg(f,3,e.platform);d.has("platformVersion")&&Lg(f,4,e.platformVersion);d.has("architecture")&&Lg(f,5,e.architecture);d.has("model")&&Lg(f,6,e.model);d.has("uaFullVersion")&&Lg(f,7,e.uaFullVersion);return f}).catch(function(){return Lh.clone()})}
;function Oh(a){this.G=J(a)}
x(Oh,L);function Ph(a){this.G=J(a,4)}
x(Ph,L);function Qh(a){this.G=J(a,35)}
x(Qh,L);Qh.Ra=[3,20,27];function Rh(a){this.G=J(a,19)}
x(Rh,L);Rh.prototype.Mb=function(a){return Mg(this,2,a)};
Rh.Ra=[3,5];function Sh(a){this.G=J(a,8)}
x(Sh,L);var Th=function(a){return function(b){return bh(a,b)}}(Sh);
Sh.Ra=[5,6,7];function Uh(a){this.G=J(a)}
x(Uh,L);var Vh=new function(){this.ctor=Uh;this.isRepeated=0;this.h=Dg;this.defaultValue=void 0};function Wh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.X="";this.pageId=null;this.ga=this.U=-1;this.experimentIds=null;this.K=this.o=0;this.ia=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new Xh(a.logSource,a.bb);this.network=a.network;this.wb=a.wb||null;this.bufferSize=1E3;this.v=a.Xe||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.logger=null;this.withCredentials=!a.Sc;this.bb=a.bb||!1;this.F=typeof URLSearchParams!=="undefined"&&!!(new URL(Yh())).searchParams&&!!(new URL(Yh())).searchParams.set;var c=Mg(new Oh,1,1);Zh(this.i,c);this.m=new Fh(1E4);a=$h(this,a.Mc);this.h=new Ch(this.m.getValue(),a);this.W=new Ch(6E5,a);this.Eb||this.W.start();this.bb||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.qc()}),document.addEventListener("pagehide",this.qc.bind(this)))}
x(Wh,G);function $h(a,b){return a.F?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=Wh.prototype;r.da=function(){this.qc();this.h.stop();this.W.stop();G.prototype.da.call(this)};
r.log=function(a){if(this.F){a=a.clone();var b=this.ia++;a=K(a,21,Pf(b));this.componentId&&Lg(a,26,this.componentId);if(Hg(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";K(b,1,Pf(c))}Gg(a,15)==null&&K(a,15,Pf((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Eg(b,Bh,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.o+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
r.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ga>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.Zb==="function"?ai(this.i,this.network.Zb()):ai(this.i,0));var e=bi(this.i,this.j,this.o,this.K,this.wb);d={};var f=this.Gb();f&&(d.Authorization=f);this.v||(this.v=Yh());try{var g=(new URL(this.v)).toString()}catch(k){g=(new URL(this.v,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.X===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.o=0;var h=e.serialize();d={url:g.toString(),body:h,Dg:1,ld:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.m.reset();c.h.setInterval(c.m.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=Th(n)}catch(m){}l&&(k=Number,n="-1",n=n===void 0?"0":n,n=Ig(Hg(l),n),k=k(n),k>0&&(c.U=Date.now(),c.ga=c.U+k),l=Vh.ctor?Vh.h(l,Vh.ctor,175237375,!0):Vh.h(l,175237375,null,!0),l=l===null?void 0:l)&&(k=-1,k=k===void 0?0:k,l=Ig(Of(pg(l,1)),k),l!==-1&&(c.m=new Fh(l<1?1:l),c.h.setInterval(c.m.getValue())))}a&&a();c.K=0};
h=function(k,l){var n,m=void 0===yf?2:Lc?5:2,p=e.G,t=mf(p),u=t,y=!(2&t),z=!!(2&u);t=z?1:m;y&&(y=!z);m=qg(p,u,3);m=Array.isArray(m)?m:vf;var A=lf(m);z=!!(4&A);if(!z){var H=A;H===0&&(H=yg(H,u));A=m;H|=1;var R=u,O=!!(2&H);O&&(R|=2);for(var da=!O,Da=!0,P=0,ea=0;P<A.length;P++){var ja=Xf(A[P],Qh,R);if(ja instanceof Qh){if(!O){var oa=!!(lf(ja.G)&2);da&&(da=!oa);Da&&(Da=oa)}A[ea++]=ja}}ea<P&&(A.length=ea);H|=4;H=Da?H|16:H&-17;H=da?H|8:H&-9;nf(A,H);O&&Object.freeze(A);A=H}if(y&&!(8&A||!m.length&&(t===1||
t===4&&32&A))){wg(A)&&(m=df(m),A=yg(A,u),u=sg(p,u,3,m));y=m;for(H=0;H<y.length;H++)R=y[H],O=og(R),R!==O&&(y[H]=O);A|=8;A=y.length?A&-17:A|16;nf(y,A)}t===1||t===4&&32&A?wg(A)||(u=A,p=!!(32&A),A|=!m.length||16&A&&(!z||p)?2:2048,A!==u&&nf(m,A),Object.freeze(m)):(z=t!==5?!1:!!(32&A)||wg(A)||!!Zf(m),(t===2||z)&&wg(A)&&(m=df(m),A=yg(A,u),A=zg(A,u,!1),nf(m,A),u=sg(p,u,3,m)),wg(A)||(p=A,A=zg(A,u,!1),A!==p&&nf(m,A)),z&&(n=Yf(m)));n=n||m;u=Gg(e,14);p=c.m;p.h=Math.min(3E5,p.h*2);p.i=Math.min(3E5,p.h+Math.round((Math.random()-
.5)*.2*p.h));c.h.setInterval(c.m.getValue());k===401&&f&&(c.X=f);u&&(c.o+=u);l===void 0&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.K};
c.network&&c.network.send(d,g,h)}}}};
r.qc=function(){ci(this.i,!0);this.flush();ci(this.i,!1)};
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Yh(){return"https://play.google.com/log?format=json&hasfast=true"}
function Xh(a,b){this.bb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Rh;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Zh(this,new Oh)}
Xh.prototype.Mb=function(a){this.h.Mb(a);return this};
function Zh(a,b){Eg(a.h,Oh,1,b);Kg(b)||Mg(b,1,1);a.bb||(b=di(a),Jg(b,5)||Lg(b,5,a.locale));a.i&&(b=di(a),Dg(b,Ih,9)||Eg(b,Ih,9,a.i))}
function ai(a,b){tg(ei(a))&&(a=fi(a),Mg(a,1,b))}
function ci(a,b){tg(ei(a))&&(a=fi(a),K(a,2,Jf(b)))}
function ei(a){return Dg(a.h,Oh,1)}
function gi(a){var b=b===void 0?Kh:b;var c=a.bb?void 0:window;c?Nh(c,b).then(function(d){a.i=d;d=di(a);Eg(d,Ih,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function di(a){a=ei(a);var b=Dg(a,vg,11);b||(b=new vg,Eg(a,vg,11,b));return b}
function fi(a){a=di(a);var b=Dg(a,Gh,10);b||(b=new Gh,K(b,2,Jf(!1)),Eg(a,Gh,10,b));return b}
function bi(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(tg(ei(a))){var h=fi(a);K(h,3,Nf(d))}tg(ei(a))&&(d=fi(a),K(d,4,Nf(f)));tg(ei(a))&&(f=fi(a),K(f,5,Nf(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,Pf(g));b=b.slice();b=Fg(a,Qh,3,b);e&&(a=new Dh,e=K(a,13,Nf(e)),a=new Eh,e=Eg(a,Dh,2,e),a=new Ph,e=Eg(a,Eh,1,e),e=Mg(e,2,9),Eg(b,Ph,18,e));c&&K(b,14,Pf(c));return b}
;function hi(){this.Bd=typeof AbortController!=="undefined"}
hi.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,m,p,t;return B(function(u){switch(u.h){case 1:return f=(e=d.Bd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.ld)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.D(3);break}if((l=b)==null){u.D(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.K=[u.j];u.m=0;u.B=0;clearTimeout(f);Ca(u);break;case 2:n=Ba(u);switch((m=n)==null?void 0:m.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}u.D(3)}})};
hi.prototype.Zb=function(){return 4};function ii(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.m=!1;this.network=null;this.componentId="";this.pageId=this.i=this.wb=null}
x(ii,G);ii.prototype.Sc=function(){this.o=!0;return this};
function ji(a){a.network||(a.network=new hi);var b=new Wh({logSource:a.logSource,Gb:a.Gb?a.Gb:Ah,sessionIndex:a.sessionIndex,Xe:a.j,bb:a.m,Eb:!1,Sc:a.o,Mc:a.Mc,network:a.network});Ec(a,b);if(a.h){var c=a.h,d=di(b.i);Lg(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.wb&&(b.wb=a.wb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new Bh),c=b.experimentIds,d=d.serialize(),Lg(c,4,d)):b.experimentIds&&K(b.experimentIds,4));gi(b.i);a.network.Mb&&a.network.Mb(a.logSource);
a.network.Ke&&a.network.Ke(b);return b}
;function ki(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new ii(a,"0"),a.componentId=b,Ec(this,a),c!==""&&(a.j=c),d&&(a.m=!0),e&&(a.h=e),g&&(a.network=g),b=ji(a));this.h=b}
x(ki,G);
ki.prototype.flush=function(a){var b=a||[];if(b.length){a=new oh;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new nh;f=Lg(f,1,e.m);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].H);f=xg(f,g,Uf);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.j;for(var m=e.sc(l)||[],p=[],t=0;t<m.length;t++){var u=m[t],y=u&&u.h;u=new kh;switch(n){case 3:y=Number(y);Number.isFinite(y)&&Ag(u,1,lh,Pf(y));break;case 2:y=Number(y);
if(y!=null&&typeof y!=="number")throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);Ag(u,2,lh,y)}p.push(u)}n=p;for(m=0;m<n.length;m++){p=n[m];t=new mh;p=Eg(t,kh,2,p);t=l;u=[];y=[];for(var z=0;z<e.fields.length;z++)y.push(e.fields[z].I);for(z=0;z<y.length;z++){var A=y[z],H=t[z],R=new ih;switch(A){case 3:Ag(R,1,jh,Vf(String(H)));break;case 2:A=Number(H);Number.isFinite(A)&&Ag(R,2,jh,Nf(A));break;case 1:Ag(R,3,jh,Jf(H==="true"))}u.push(R)}Fg(p,ih,1,u);g.push(p)}}Fg(f,
mh,4,g);c.push(f);e.clear()}Fg(a,nh,1,c);b=this.h;b.F&&(a instanceof Qh?b.log(a):(c=new Qh,a=a.serialize(),a=Lg(c,8,a),b.log(a)));this.h.flush()}};function li(){}
li.prototype.serialize=function(a){var b=[];mi(this,a,b);return b.join("")};
function mi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),mi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),ni(d,c),c.push(":"),mi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ni(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var oi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},pi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ni(a,b){b.push('"',a.replace(pi,function(c){var d=oi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),oi[c]=d);return d}),'"')}
;function qi(){}
qi.prototype.h=null;qi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var ri;function si(){}
$a(si,qi);ri=new si;function ti(a){zd.call(this);this.headers=new Map;this.za=a||null;this.i=!1;this.K=this.V=null;this.m=this.X="";this.j=this.W=this.o=this.U=!1;this.F=0;this.v=null;this.qa="";this.ia=!1}
$a(ti,zd);var ui=/^https?$/i,vi=["POST","PUT"],wi=[];function xi(a,b,c,d,e,f,g){var h=new ti;wi.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Hd,!0,void 0,void 0);f&&(h.F=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
r=ti.prototype;r.Hd=function(){this.dispose();Ib(wi,this)};
r.send=function(a,b,c,d){if(this.V)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.m="";this.U=!1;this.i=!0;this.V=new XMLHttpRequest;this.K=this.za?this.za.getOptions():ri.getOptions();this.V.onreadystatechange=Xa(this.ed,this);try{this.getStatus(),this.W=!0,this.V.open(b,String(a),!0),this.W=!1}catch(g){this.getStatus();yi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Cb(vi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.V.setRequestHeader(d,c);this.qa&&(this.V.responseType=this.qa);"withCredentials"in this.V&&this.V.withCredentials!==this.ia&&(this.V.withCredentials=this.ia);try{zi(this),this.F>0&&(this.getStatus(),this.v=oe(this.Ue,this.F,this)),this.getStatus(),this.o=!0,this.V.send(a),this.o=
!1}catch(g){this.getStatus(),yi(this,g)}};
r.Ue=function(){typeof Na!="undefined"&&this.V&&(this.m="Timed out after "+this.F+"ms, aborting",this.getStatus(),Ad(this,"timeout"),this.abort(8))};
function yi(a,b){a.i=!1;a.V&&(a.j=!0,a.V.abort(),a.j=!1);a.m=b;Ai(a);Bi(a)}
function Ai(a){a.U||(a.U=!0,Ad(a,"complete"),Ad(a,"error"))}
r.abort=function(){this.V&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.V.abort(),this.j=!1,Ad(this,"complete"),Ad(this,"abort"),Bi(this))};
r.da=function(){this.V&&(this.i&&(this.i=!1,this.j=!0,this.V.abort(),this.j=!1),Bi(this,!0));ti.Ca.da.call(this)};
r.ed=function(){this.ja||(this.W||this.o||this.j?Ci(this):this.ne())};
r.ne=function(){Ci(this)};
function Ci(a){if(a.i&&typeof Na!="undefined")if(a.K[1]&&Di(a)==4&&a.getStatus()==2)a.getStatus();else if(a.o&&Di(a)==4)oe(a.ed,0,a);else if(Ad(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ei(a))Ad(a,"complete"),Ad(a,"success");else{try{var b=Di(a)>2?a.V.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Ai(a)}}finally{Bi(a)}}}
function Bi(a,b){if(a.V){zi(a);var c=a.V,d=a.K[0]?function(){}:null;
a.V=null;a.K=null;b||Ad(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function zi(a){a.v&&(D.clearTimeout(a.v),a.v=null)}
r.isActive=function(){return!!this.V};
r.isComplete=function(){return Di(this)==4};
function Ei(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=nc(1,String(a.X)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!ui.test(a?a.toLowerCase():"");c=b}return c}
function Di(a){return a.V?a.V.readyState:0}
r.getStatus=function(){try{return Di(this)>2?this.V.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.m==="string"?this.m:String(this.m)};function Fi(){}
Fi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
xi(a.url,function(d){d=d.target;if(Ei(d)){try{var e=d.V?d.V.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.ld,a.timeoutMillis,a.withCredentials)};
Fi.prototype.Zb=function(){return 1};function Gi(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Hi()}
Gi.prototype.start=function(){this.h=Hi()};
Gi.prototype.done=function(){this.h!=null&&this.logger.m(this.event,Hi()-this.h)};
function Ii(){G.apply(this,arguments)}
x(Ii,G);function Ji(a,b){var c=Hi();b=b();a.m("n",Hi()-c);return b}
function Ki(){Ii.apply(this,arguments)}
x(Ki,Ii);Ki.prototype.F=function(){};
Ki.prototype.m=function(){};
Ki.prototype.Ha=function(){};
Ki.prototype.i=function(){};
function Li(a,b,c,d){c=c===void 0?"":c;Ii.call(this);this.Fa=b;this.U=c;this.v=new Map;this.j=new Map;b=new ii(1828,"0");b.h="22";b.network=new Fi;d&&(c=new dh,d=xg(c,d,Mf),b.i=d);this.K=new ki(1828,"","",!1,"",ji(b));this.h=new pe(this.K);this.h.m=1E5;d=this.h;d.flushInterval=3E4;d.h.setInterval(3E4);this.qa=new ve(this.h);this.za=new ye(this.h);this.Ka=new ze(this.h);this.ia=new ue(this.h);this.W=new we(this.h);this.X=new xe(this.h);this.errorCount=new Ce(this.h);this.ga=new Be(this.h);new Ae(this.h);
new De(this.h);new Ee(this.h);new Fe(this.h);this.o=a?fh(a):"";a=new te(this.h);this.v.set("h",1);this.v.set("u",2);this.v.set("k",3);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4);a.h.yb("/client_streamz/bg/fic",this.Fa);Ec(this,this.K);Ec(this,this.h)}
x(Li,Ii);Li.prototype.F=function(){this.za.h.yb("/client_streamz/bg/fsc",this.o,this.Fa)};
Li.prototype.m=function(a,b){if(a==="t")this.qa.record(b,this.o,this.Fa);else if(a==="n")this.Ka.record(b,this.o,this.Fa);else if(a==="h"||a==="u"||a==="k"){if(a=this.v.get(a))this.W.h.yb("/client_streamz/bg/fcc",a,this.Fa),this.X.record(b,a,this.Fa)}else this.ga.record(b,a,"",this.U,this.Fa)};
Li.prototype.Ha=function(a){var b=this.j.get(a);b?this.ia.h.yb("/client_streamz/bg/fiec",this.o,this.Fa,b):this.errorCount.h.yb("/client_streamz/bg/cec",a,"",this.U,this.Fa)};
Li.prototype.i=function(){this.h.mc()};
function Hi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Mi(a){this.G=J(a,0,"bfkj")}
x(Mi,L);var Ni=function(a){return ch(function(b){return b instanceof a&&!(lf(b.G)&2)})}(Mi);function Oi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Pi(a){function b(m,p,t,u){Promise.resolve().then(function(){l.done();d.ba.i();k.resolve({Ed:m,Ne:p,Rg:t,Gg:u})})}
function c(m,p,t,u){var y="k";p?y="h":t&&(y="u");y!=="k"?u!==0&&d.ba.m(y,m):d.h<=0?(d.ba.m(y,m),d.h=Math.floor(Math.random()*200)):d.h--}
G.call(this);var d=this;this.h=Math.floor(Math.random()*200);if("challenge"in a&&Ni(a.challenge)){var e=Jg(a.challenge,4);var f=Jg(a.challenge,5)}else e=a.program,f=a.Ud;var g=new G;this.addOnDisposeCallback(function(){d.i.then(function(m){m=m.Ne;d.ba.i();m==null||m();g.dispose()})});
if(a.se!==!1)if(a.ba)this.ba=a.ba;else{var h;Ec(g,this.ba=new Li(f,(h=a.Fa)!=null?h:"_"))}else Ec(g,this.ba=new Ki);var k=new Oi;this.i=k.promise;var l=new Gi(this.ba,"t",!1);if(!D[f])throw this.ba.Ha(25),this.ba.i(),Error("EGOU");if(!D[f].a)throw this.ba.Ha(26),this.ba.i(),Error("ELIU");try{var n=D[f].a;l.start();this.j=w(n(e,b,!0,a.bh,c)).next().value;this.Me=k.promise.then(function(){})}catch(m){throw this.ba.Ha(28),this.ba.i(),m;
}}
x(Pi,G);Pi.prototype.snapshot=function(a){var b=this;if(this.ja)throw Error("Already disposed");this.ba.F();return this.i.then(function(c){var d=c.Ed;return new Promise(function(e){var f=new Gi(b.ba,"n");d(function(g){f.done();b.ba.i();e(g)},[a.Rc,
a.Oe,a.Ze,a.Pe])})})};
Pi.prototype.qd=function(a){var b=this;if(this.ja)throw Error("Already disposed");this.ba.F();var c=Ji(this.ba,function(){return b.j([a.Rc,a.Oe,a.Ze,a.Pe])});
this.ba.i();return c};
Pi.prototype.getLogger=function(){return this.ba};var Qi=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function Ri(a){var b=Si;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ti(){var a=[];Ri(function(b){a.push(b)});
return a}
var Si={af:"allow-forms",bf:"allow-modals",cf:"allow-orientation-lock",df:"allow-pointer-lock",ef:"allow-popups",ff:"allow-popups-to-escape-sandbox",gf:"allow-presentation",hf:"allow-same-origin",jf:"allow-scripts",kf:"allow-top-navigation",lf:"allow-top-navigation-by-user-activation"},Ui=Fd(function(){return Ti()});
function Vi(){var a=Wi(),b={};Db(Ui(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Wi(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Xi(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Yi=(new Date).getTime();function Zi(){var a=$i;return ch(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;function aj(a){zd.call(this);var b=this;this.v=this.j=0;this.Ea=a!=null?a:{ra:function(e,f){return setTimeout(e,f)},
sa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.m=function(){return B(function(e){return e.yield(bj(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||cj(this)}
x(aj,zd);function dj(){var a=ej;aj.h||(aj.h=new aj(a));return aj.h}
aj.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ea.sa(this.v);delete aj.h};
aj.prototype.xa=function(){return this.i};
function cj(a){a.v=a.Ea.ra(function(){var b;return B(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.D(3):c.yield(bj(a),3):c.yield(bj(a),3);cj(a);c.h=0})},3E4)}
function bj(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ea.ra(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.m=0;h.B=0;a.o=void 0;a.j&&(a.Ea.sa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ad(a,"networkstatus-online"):Ad(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function fj(){this.data=[];this.h=-1}
fj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
fj.prototype.get=function(a){return!!this.data[a]};
function gj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function hj(){this.blockSize=-1}
;function ij(){this.blockSize=-1;this.blockSize=64;this.h=[];this.B=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
$a(ij,hj);ij.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function jj(a,b,c){c||(c=0);var d=a.o;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ij.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.B,f=this.i;d<b;){if(f==0)for(;d<=c;)jj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){jj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){jj(this,e);f=0;break}}this.i=f;this.m+=b}};
ij.prototype.digest=function(){var a=[],b=this.m*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.B[c]=b&255,b/=256;jj(this,this.B);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function kj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function lj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function mj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:kj(a).match(/\S+/g)||[],b=Cb(a,b)>=0);return b}
function nj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):mj(a,"inverted-hdpi")&&lj(a,Array.prototype.filter.call(a.classList?a.classList:kj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function oj(){}
oj.prototype.next=function(){return pj};
var pj={done:!0,value:void 0};oj.prototype.kb=function(){return this};function qj(a){if(a instanceof rj||a instanceof sj||a instanceof tj)return a;if(typeof a.next=="function")return new rj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new rj(function(){return a[Symbol.iterator]()});
if(typeof a.kb=="function")return new rj(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function rj(a){this.h=a}
rj.prototype.kb=function(){return new sj(this.h())};
rj.prototype[Symbol.iterator]=function(){return new tj(this.h())};
rj.prototype.i=function(){return new tj(this.h())};
function sj(a){this.h=a}
x(sj,oj);sj.prototype.next=function(){return this.h.next()};
sj.prototype[Symbol.iterator]=function(){return new tj(this.h)};
sj.prototype.i=function(){return new tj(this.h)};
function tj(a){rj.call(this,function(){return a});
this.j=a}
x(tj,rj);tj.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.o=1;this.j=[];this.m=0;this.h=[];this.i={};this.v=!!a}
$a(M,G);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
r.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.m!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.jb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];uj(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.ja;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,this.j.length>0&&this.m==0)for(;c=this.j.pop();)this.Pb(c)}}return e!=0}return!1};
function uj(a,b,c){Ud(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.da=function(){M.Ca.da.call(this);this.clear();this.j.length=0};function vj(a){this.h=a}
vj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new li).serialize(b))};
vj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
vj.prototype.remove=function(a){this.h.remove(a)};function wj(a){this.h=a}
$a(wj,vj);function xj(a){this.data=a}
function yj(a){return a===void 0||a instanceof xj?a:new xj(a)}
wj.prototype.set=function(a,b){wj.Ca.set.call(this,a,yj(b))};
wj.prototype.i=function(a){a=wj.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
wj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function zj(a){this.h=a}
$a(zj,wj);zj.prototype.set=function(a,b,c){if(b=yj(b)){if(c){if(c<Za()){zj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}zj.Ca.set.call(this,a,b)};
zj.prototype.i=function(a){var b=zj.Ca.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())zj.prototype.remove.call(this,a);else return b}};function Aj(){}
;function Bj(){}
$a(Bj,Aj);Bj.prototype[Symbol.iterator]=function(){return qj(this.kb(!0)).i()};
Bj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Cj(a){this.h=a;this.i=null}
$a(Cj,Bj);r=Cj.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){Dj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Dj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Dj(this);this.h.removeItem(a)};
r.kb=function(a){Dj(this);var b=0,c=this.h,d=new oj;d.next=function(){if(b>=c.length)return pj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){Dj(this);this.h.clear()};
r.key=function(a){Dj(this);return this.h.key(a)};
function Dj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Nd(Error("Storage mechanism: Storage unavailable"))}
;function Ej(){var a=null;try{a=D.localStorage||null}catch(b){}Cj.call(this,a)}
$a(Ej,Cj);function Fj(a,b){this.i=a;this.h=b+"::"}
$a(Fj,Bj);Fj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Fj.prototype.get=function(a){return this.i.get(this.h+a)};
Fj.prototype.remove=function(a){this.i.remove(this.h+a)};
Fj.prototype.kb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new oj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Gj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Hc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Hj={lb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Uc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ij={lb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Uc:function(a){return[].concat.apply([],a)}};
N.Le=function(){Gj?(N.ib=Uint8Array,N.Ja=Uint16Array,N.zd=Int32Array,N.assign(N,Hj)):(N.ib=Array,N.Ja=Array,N.zd=Array,N.assign(N,Ij))};
N.Le();var Jj=!0;try{new Uint8Array(1)}catch(a){Jj=!1}
function Kj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.ib(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Lj={};Lj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Mj={},Nj,Oj=[],Pj=0;Pj<256;Pj++){Nj=Pj;for(var Qj=0;Qj<8;Qj++)Nj=Nj&1?3988292384^Nj>>>1:Nj>>>1;Oj[Pj]=Nj}Mj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Oj[(a^b[d])&255];return a^-1};var Rj={};Rj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Sj(a){for(var b=a.length;--b>=0;)a[b]=0}
var Tj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Uj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Vj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Wj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Xj=Array(576);Sj(Xj);var Yj=Array(60);Sj(Yj);var Zj=Array(512);Sj(Zj);var ak=Array(256);Sj(ak);var bk=Array(29);Sj(bk);var ck=Array(30);Sj(ck);function dk(a,b,c,d,e){this.rd=a;this.Qd=b;this.Pd=c;this.Kd=d;this.ke=e;this.Xc=a&&a.length}
var ek,fk,gk;function hk(a,b){this.Tc=a;this.tb=0;this.Wa=b}
function ik(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function jk(a,b,c){a.ka>16-c?(a.pa|=b<<a.ka&65535,ik(a,a.pa),a.pa=b>>16-a.ka,a.ka+=c-16):(a.pa|=b<<a.ka&65535,a.ka+=c)}
function kk(a,b,c){jk(a,c[b*2],c[b*2+1])}
function lk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function mk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=lk(d[e]++,e))}
function nk(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.Za[b*2]=0;for(b=0;b<19;b++)a.la[b*2]=0;a.ta[512]=1;a.Qa=a.xb=0;a.Aa=a.matches=0}
function ok(a){a.ka>8?ik(a,a.pa):a.ka>0&&(a.aa[a.pending++]=a.pa);a.pa=0;a.ka=0}
function pk(a,b,c){ok(a);ik(a,c);ik(a,~c);N.lb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function qk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function rk(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Oa;){e<a.Oa&&qk(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(qk(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function sk(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.aa[a.Db+d*2]<<8|a.aa[a.Db+d*2+1];var f=a.aa[a.wc+d];d++;if(e===0)kk(a,f,b);else{var g=ak[f];kk(a,g+256+1,b);var h=Tj[g];h!==0&&(f-=bk[g],jk(a,f,h));e--;g=e<256?Zj[e]:Zj[256+(e>>>7)];kk(a,g,c);h=Uj[g];h!==0&&(e-=ck[g],jk(a,e,h))}}while(d<a.Aa)}kk(a,256,b)}
function tk(a,b){var c=b.Tc,d=b.Wa.rd,e=b.Wa.Xc,f=b.Wa.Kd,g,h=-1;a.Oa=0;a.ob=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Oa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Oa<2;){var k=a.ea[++a.Oa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Qa--;e&&(a.xb-=d[k*2+1])}b.tb=h;for(g=a.Oa>>1;g>=1;g--)rk(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Oa--],rk(a,c,1),d=a.ea[1],a.ea[--a.ob]=g,a.ea[--a.ob]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,rk(a,c,1);while(a.Oa>=
2);a.ea[--a.ob]=a.ea[1];g=b.Tc;k=b.tb;d=b.Wa.rd;e=b.Wa.Xc;f=b.Wa.Qd;var l=b.Wa.Pd,n=b.Wa.ke,m,p=0;for(m=0;m<=15;m++)a.La[m]=0;g[a.ea[a.ob]*2+1]=0;for(b=a.ob+1;b<573;b++){var t=a.ea[b];m=g[g[t*2+1]*2+1]+1;m>n&&(m=n,p++);g[t*2+1]=m;if(!(t>k)){a.La[m]++;var u=0;t>=l&&(u=f[t-l]);var y=g[t*2];a.Qa+=y*(m+u);e&&(a.xb+=y*(d[t*2+1]+u))}}if(p!==0){do{for(m=n-1;a.La[m]===0;)m--;a.La[m]--;a.La[m+1]+=2;a.La[n]--;p-=2}while(p>0);for(m=n;m!==0;m--)for(t=a.La[m];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==m&&(a.Qa+=(m-g[d*
2+1])*g[d*2],g[d*2+1]=m),t--)}mk(c,h,a.La)}
function uk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.la[l*2]+=g:l!==0?(l!==e&&a.la[l*2]++,a.la[32]++):g<=10?a.la[34]++:a.la[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function vk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do kk(a,l,a.la);while(--g!==0)}else l!==0?(l!==e&&(kk(a,l,a.la),g--),kk(a,16,a.la),jk(a,g-3,2)):g<=10?(kk(a,17,a.la),jk(a,g-3,3)):(kk(a,18,a.la),jk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function wk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var xk=!1;function yk(a,b,c){a.aa[a.Db+a.Aa*2]=b>>>8&255;a.aa[a.Db+a.Aa*2+1]=b&255;a.aa[a.wc+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(ak[c]+256+1)*2]++,a.Za[(b<256?Zj[b]:Zj[256+(b>>>7)])*2]++);return a.Aa===a.Ib-1}
;function zk(a,b){a.msg=Rj[b];return b}
function Ak(a){for(var b=a.length;--b>=0;)a[b]=0}
function Bk(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.lb(a.output,b.aa,b.Kb,c,a.ub),a.ub+=c,b.Kb+=c,a.Ic+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function Ck(a,b){var c=a.wa>=0?a.wa:-1,d=a.u-a.wa,e=0;if(a.level>0){a.P.pc===2&&(a.P.pc=wk(a));tk(a,a.dc);tk(a,a.Xb);uk(a,a.ta,a.dc.tb);uk(a,a.Za,a.Xb.tb);tk(a,a.Nc);for(e=18;e>=3&&a.la[Wj[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.xb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)jk(a,b?1:0,3),pk(a,c,d);else if(a.strategy===4||g===f)jk(a,2+(b?1:0),3),sk(a,Xj,Yj);else{jk(a,4+(b?1:0),3);c=a.dc.tb+1;d=a.Xb.tb+1;e+=1;jk(a,c-257,5);jk(a,d-1,5);jk(a,e-4,4);for(f=0;f<e;f++)jk(a,a.la[Wj[f]*
2+1],3);vk(a,a.ta,c-1);vk(a,a.Za,d-1);sk(a,a.ta,a.Za)}nk(a);b&&ok(a);a.wa=a.u;Bk(a.P)}
function S(a,b){a.aa[a.pending++]=b}
function Dk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Ek(a,b){var c=a.cd,d=a.u,e=a.ya,f=a.dd,g=a.u>a.na-262?a.u-(a.na-262):0,h=a.window,k=a.Xa,l=a.Ia,n=a.u+258,m=h[d+e-1],p=h[d+e];a.ya>=a.Wc&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===p&&h[t+e-1]===m&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.sb=b;e=t;if(t>=f)break;m=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function Fk(a){var b=a.na,c;do{var d=a.xd-a.A-a.u;if(a.u>=b+(b-262)){N.lb(a.window,a.window,b,b,0);a.sb-=b;a.u-=b;a.wa-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.P.oa===0)break;e=a.P;c=a.window;f=a.u+a.A;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,N.lb(c,e.input,e.fb,g,f),e.state.wrap===1?e.M=Lj(e.M,c,g,f):e.state.wrap===2&&(e.M=Mj(e.M,c,g,f)),e.fb+=g,e.hb+=g,c=g);a.A+=c;if(a.A+a.va>=3)for(d=a.u-a.va,a.R=a.window[d],
a.R=(a.R<<a.Na^a.window[d+1])&a.Ma;a.va&&!(a.R=(a.R<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Xa]=a.head[a.R],a.head[a.R]=d,d++,a.va--,a.A+a.va<3););}while(a.A<262&&a.P.oa!==0)}
function Gk(a,b){for(var c;;){if(a.A<262){Fk(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,c=a.Ia[a.u&a.Xa]=a.head[a.R],a.head[a.R]=a.u);c!==0&&a.u-c<=a.na-262&&(a.T=Ek(a,c));if(a.T>=3)if(c=yk(a,a.u-a.sb,a.T-3),a.A-=a.T,a.T<=a.xc&&a.A>=3){a.T--;do a.u++,a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,a.Ia[a.u&a.Xa]=a.head[a.R],a.head[a.R]=a.u;while(--a.T!==0);a.u++}else a.u+=a.T,a.T=0,a.R=a.window[a.u],a.R=(a.R<<a.Na^a.window[a.u+1])&a.Ma;else c=yk(a,0,
a.window[a.u]),a.A--,a.u++;if(c&&(Ck(a,!1),a.P.S===0))return 1}a.va=a.u<2?a.u:2;return b===4?(Ck(a,!0),a.P.S===0?3:4):a.Aa&&(Ck(a,!1),a.P.S===0)?1:2}
function Hk(a,b){for(var c,d;;){if(a.A<262){Fk(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,c=a.Ia[a.u&a.Xa]=a.head[a.R],a.head[a.R]=a.u);a.ya=a.T;a.hd=a.sb;a.T=2;c!==0&&a.ya<a.xc&&a.u-c<=a.na-262&&(a.T=Ek(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.u-a.sb>4096)&&(a.T=2));if(a.ya>=3&&a.T<=a.ya){d=a.u+a.A-3;c=yk(a,a.u-1-a.hd,a.ya-3);a.A-=a.ya-1;a.ya-=2;do++a.u<=d&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,a.Ia[a.u&a.Xa]=a.head[a.R],a.head[a.R]=a.u);
while(--a.ya!==0);a.cb=0;a.T=2;a.u++;if(c&&(Ck(a,!1),a.P.S===0))return 1}else if(a.cb){if((c=yk(a,0,a.window[a.u-1]))&&Ck(a,!1),a.u++,a.A--,a.P.S===0)return 1}else a.cb=1,a.u++,a.A--}a.cb&&(yk(a,0,a.window[a.u-1]),a.cb=0);a.va=a.u<2?a.u:2;return b===4?(Ck(a,!0),a.P.S===0?3:4):a.Aa&&(Ck(a,!1),a.P.S===0)?1:2}
function Ik(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){Fk(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.u>0&&(d=a.u-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.u+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=yk(a,1,a.T-3),a.A-=a.T,a.u+=a.T,a.T=0):(c=yk(a,0,a.window[a.u]),a.A--,a.u++);if(c&&(Ck(a,!1),a.P.S===0))return 1}a.va=0;return b===4?(Ck(a,!0),a.P.S===0?3:4):
a.Aa&&(Ck(a,!1),a.P.S===0)?1:2}
function Jk(a,b){for(var c;;){if(a.A===0&&(Fk(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=yk(a,0,a.window[a.u]);a.A--;a.u++;if(c&&(Ck(a,!1),a.P.S===0))return 1}a.va=0;return b===4?(Ck(a,!0),a.P.S===0?3:4):a.Aa&&(Ck(a,!1),a.P.S===0)?1:2}
function Kk(a,b,c,d,e){this.Vd=a;this.je=b;this.me=c;this.he=d;this.Rd=e}
var Lk;Lk=[new Kk(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.A<=1){Fk(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.u+=a.A;a.A=0;var d=a.wa+c;if(a.u===0||a.u>=d)if(a.A=a.u-d,a.u=d,Ck(a,!1),a.P.S===0)return 1;if(a.u-a.wa>=a.na-262&&(Ck(a,!1),a.P.S===0))return 1}a.va=0;if(b===4)return Ck(a,!0),a.P.S===0?3:4;a.u>a.wa&&Ck(a,!1);return 1}),
new Kk(4,4,8,4,Gk),new Kk(4,5,16,8,Gk),new Kk(4,6,32,32,Gk),new Kk(4,4,16,16,Hk),new Kk(8,16,32,32,Hk),new Kk(8,16,128,128,Hk),new Kk(8,32,128,256,Hk),new Kk(32,128,258,1024,Hk),new Kk(32,258,258,4096,Hk)];
function Mk(){this.P=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Kb=this.Ba=0;this.J=null;this.Da=0;this.method=8;this.qb=-1;this.Xa=this.Kc=this.na=0;this.window=null;this.xd=0;this.head=this.Ia=null;this.dd=this.Wc=this.strategy=this.level=this.xc=this.cd=this.ya=this.A=this.sb=this.u=this.cb=this.hd=this.T=this.wa=this.Na=this.Ma=this.uc=this.cc=this.R=0;this.ta=new N.Ja(1146);this.Za=new N.Ja(122);this.la=new N.Ja(78);Ak(this.ta);Ak(this.Za);Ak(this.la);this.Nc=this.Xb=this.dc=
null;this.La=new N.Ja(16);this.ea=new N.Ja(573);Ak(this.ea);this.ob=this.Oa=0;this.depth=new N.Ja(573);Ak(this.depth);this.ka=this.pa=this.va=this.matches=this.xb=this.Qa=this.Db=this.Aa=this.Ib=this.wc=0}
function Nk(a,b){if(!a||!a.state||b>5||b<0)return a?zk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return zk(a,a.S===0?-5:-2);c.P=a;var d=c.qb;c.qb=b;if(c.status===42)if(c.wrap===2)a.M=0,S(c,31),S(c,139),S(c,8),c.J?(S(c,(c.J.text?1:0)+(c.J.Ua?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),S(c,c.J.time&255),S(c,c.J.time>>8&255),S(c,c.J.time>>16&255),S(c,c.J.time>>24&255),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(S(c,c.J.extra.length&255),S(c,c.J.extra.length>>8&255)),c.J.Ua&&(a.M=Mj(a.M,c.aa,c.pending,0)),c.Da=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,3),c.status=113);else{var e=8+(c.Kc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.u!==0&&(e|=32);c.status=113;Dk(c,e+(31-e%31));c.u!==0&&(Dk(c,a.M>>>16),Dk(c,a.M&65535));a.M=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Da<(c.J.extra.length&65535)&&(c.pending!==c.Ba||
(c.J.Ua&&c.pending>e&&(a.M=Mj(a.M,c.aa,c.pending-e,e)),Bk(a),e=c.pending,c.pending!==c.Ba));)S(c,c.J.extra[c.Da]&255),c.Da++;c.J.Ua&&c.pending>e&&(a.M=Mj(a.M,c.aa,c.pending-e,e));c.Da===c.J.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Ba&&(c.J.Ua&&c.pending>e&&(a.M=Mj(a.M,c.aa,c.pending-e,e)),Bk(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Da<c.J.name.length?c.J.name.charCodeAt(c.Da++)&255:0;S(c,f)}while(f!==0);c.J.Ua&&c.pending>
e&&(a.M=Mj(a.M,c.aa,c.pending-e,e));f===0&&(c.Da=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.J.Ua&&c.pending>e&&(a.M=Mj(a.M,c.aa,c.pending-e,e)),Bk(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Da<c.J.comment.length?c.J.comment.charCodeAt(c.Da++)&255:0;S(c,f)}while(f!==0);c.J.Ua&&c.pending>e&&(a.M=Mj(a.M,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.Ua?(c.pending+2>c.Ba&&Bk(a),c.pending+2<=c.Ba&&(S(c,
a.M&255),S(c,a.M>>8&255),a.M=0,c.status=113)):c.status=113);if(c.pending!==0){if(Bk(a),a.S===0)return c.qb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return zk(a,-5);if(c.status===666&&a.oa!==0)return zk(a,-5);if(a.oa!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?Jk(c,b):c.strategy===3?Ik(c,b):Lk[c.level].Rd(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.qb=-1),0;if(d===2&&(b===1?(jk(c,2,3),kk(c,256,Xj),c.ka===16?(ik(c,c.pa),c.pa=0,c.ka=0):c.ka>=
8&&(c.aa[c.pending++]=c.pa&255,c.pa>>=8,c.ka-=8)):b!==5&&(jk(c,0,3),pk(c,0,0),b===3&&(Ak(c.head),c.A===0&&(c.u=0,c.wa=0,c.va=0))),Bk(a),a.S===0))return c.qb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(S(c,a.M&255),S(c,a.M>>8&255),S(c,a.M>>16&255),S(c,a.M>>24&255),S(c,a.hb&255),S(c,a.hb>>8&255),S(c,a.hb>>16&255),S(c,a.hb>>24&255)):(Dk(c,a.M>>>16),Dk(c,a.M&65535));Bk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Ok={};Ok=function(){this.input=null;this.hb=this.oa=this.fb=0;this.output=null;this.Ic=this.S=this.ub=0;this.msg="";this.state=null;this.pc=2;this.M=0};var Pk=Object.prototype.toString;
function Qk(a){if(!(this instanceof Qk))return new Qk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.P=new Ok;this.P.S=0;var b=this.P;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=zk(b,-2);else{e===8&&(e=9);var k=new Mk;b.state=k;k.P=b;k.wrap=h;k.J=null;k.Kc=e;k.na=1<<k.Kc;k.Xa=k.na-1;k.uc=f+7;k.cc=1<<k.uc;k.Ma=k.cc-1;k.Na=~~((k.uc+3-1)/3);k.window=new N.ib(k.na*2);k.head=new N.Ja(k.cc);k.Ia=new N.Ja(k.na);k.Ib=1<<f+6;k.Ba=k.Ib*4;k.aa=new N.ib(k.Ba);k.Db=1*k.Ib;k.wc=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.hb=b.Ic=0;b.pc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.M=c.wrap===2?
0:1;c.qb=0;if(!xk){d=Array(16);for(f=g=0;f<28;f++)for(bk[f]=g,e=0;e<1<<Tj[f];e++)ak[g++]=f;ak[g-1]=f;for(f=g=0;f<16;f++)for(ck[f]=g,e=0;e<1<<Uj[f];e++)Zj[g++]=f;for(g>>=7;f<30;f++)for(ck[f]=g<<7,e=0;e<1<<Uj[f]-7;e++)Zj[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Xj[e*2+1]=8,e++,d[8]++;for(;e<=255;)Xj[e*2+1]=9,e++,d[9]++;for(;e<=279;)Xj[e*2+1]=7,e++,d[7]++;for(;e<=287;)Xj[e*2+1]=8,e++,d[8]++;mk(Xj,287,d);for(e=0;e<30;e++)Yj[e*2+1]=5,Yj[e*2]=lk(e,5);ek=new dk(Xj,Tj,257,286,15);fk=new dk(Yj,
Uj,0,30,15);gk=new dk([],Vj,0,19,7);xk=!0}c.dc=new hk(c.ta,ek);c.Xb=new hk(c.Za,fk);c.Nc=new hk(c.la,gk);c.pa=0;c.ka=0;nk(c);c=0}else c=zk(b,-2);c===0&&(b=b.state,b.xd=2*b.na,Ak(b.head),b.xc=Lk[b.level].je,b.Wc=Lk[b.level].Vd,b.dd=Lk[b.level].me,b.cd=Lk[b.level].he,b.u=0,b.wa=0,b.A=0,b.va=0,b.T=b.ya=2,b.cb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Rj[b]);a.header&&(b=this.P)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Kj(a.dictionary):
Pk.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.P;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.M=Lj(a.M,f,g,0));l.wrap=0;g>=l.na&&(b===0&&(Ak(l.head),l.u=0,l.wa=0,l.va=0),c=new N.ib(l.na),N.lb(c,f,g-l.na,l.na,0),f=c,g=l.na);c=a.oa;d=a.fb;e=a.input;a.oa=g;a.fb=0;a.input=f;for(Fk(l);l.A>=3;){f=l.u;g=l.A-2;do l.R=(l.R<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Xa]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.u=f;l.A=2;Fk(l)}l.u+=l.A;l.wa=l.u;l.va=l.A;l.A=0;l.T=l.ya=2;l.cb=0;a.fb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Rj[b]);this.Bg=!0}}
Qk.prototype.push=function(a,b){var c=this.P,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Kj(a):Pk.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.oa=c.input.length;do{c.S===0&&(c.output=new N.ib(d),c.ub=0,c.S=d);a=Nk(c,e);if(a!==1&&a!==0)return Rk(this,a),this.ended=!0,!1;if(c.S===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Hc(c.output,c.ub);b=f;f=f.length;if(f<65537&&(b.subarray&&Jj||!b.subarray))b=
String.fromCharCode.apply(null,N.Hc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Hc(c.output,c.ub),this.chunks.push(b)}while((c.oa>0||c.S===0)&&a!==1);if(e===4)return(c=this.P)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=zk(c,-2):(c.state=null,a=d===113?zk(c,-3):0)):a=-2,Rk(this,a),this.ended=!0,a===0;e===2&&(Rk(this,0),c.S=0);return!0};
function Rk(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Uc(a.chunks));a.chunks=[];a.err=b;a.msg=a.P.msg}
function Sk(a,b){b=b||{};b.gzip=!0;b=new Qk(b);b.push(a,!0);if(b.err)throw b.msg||Rj[b.err];return b.result}
;function Tk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Uk(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function Vk(a){this.name=a}
;var Wk=new Vk("rawColdConfigGroup");var Xk=new Vk("rawHotConfigGroup");function Yk(a){this.G=J(a)}
x(Yk,L);var Zk=new Vk("continuationCommand");var $k=new Vk("webCommandMetadata");var al=new Vk("signalServiceEndpoint");var bl={rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",nf:"EMBEDDED_PLAYER_MODE_DEFAULT",qf:"EMBEDDED_PLAYER_MODE_PFP",pf:"EMBEDDED_PLAYER_MODE_PFL"};var cl=new Vk("feedbackEndpoint");function dl(a){this.G=J(a)}
x(dl,L);dl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Ze(a,We):Xe||(Xe=new Ze(null,We));else if(a.constructor!==Ze)if(Ve(a))a=a.length?new Ze(new Uint8Array(a),We):Xe||(Xe=new Ze(null,We));else throw Error();return K(this,1,a)};var $i={gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ff:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Cf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Df:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Ef:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Bf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Af:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED"};var el=new Vk("shareEndpoint"),fl=new Vk("shareEntityEndpoint"),gl=new Vk("shareEntityServiceEndpoint"),hl=new Vk("webPlayerShareEntityServiceEndpoint");var il=new Vk("playlistEditEndpoint");var jl=new Vk("modifyChannelNotificationPreferenceEndpoint");var kl=new Vk("unsubscribeEndpoint");var ll=new Vk("subscribeEndpoint");function ml(){var a=nl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function ol(a){E("yt.ads.biscotti.lastId_",a)}
;function pl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var ql=D.window,rl,sl,tl=(ql==null?void 0:(rl=ql.yt)==null?void 0:rl.config_)||(ql==null?void 0:(sl=ql.ytcfg)==null?void 0:sl.data_)||{};E("yt.config_",tl);function ul(){pl(tl,arguments)}
function T(a,b){return a in tl?tl[a]:b}
function vl(a){var b=tl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var wl=[];function xl(a){wl.forEach(function(b){return b(a)})}
function yl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zl(b)}}:a}
function zl(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),ul("ERRORS",b));xl(a)}
function Al(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),ul("ERRORS",f))}
;var Bl=/^[\w.]*$/,Cl={q:!0,search_query:!0};function Dl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=El(f[0]||""),h=El(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,n=f[0],m=String(Dl);l.args=[{key:n,value:f[1],query:a,method:Fl===m?"unchanged":m}];Cl.hasOwnProperty(n)||Al(l)}}return c}
var Fl=String(Dl);function Gl(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Hl(a){a.charAt(0)==="?"&&(a=a.substring(1));return Dl(a,"&")}
function Il(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Hl(a.length>1?a[1]:a[0])):{}}
function Jl(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Hl(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function Kl(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function El(a){return a&&a.match(Bl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ll(a){var b=Ml;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Qi:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=Qi.screen)==null?void 0:k.height;var l;e.u_w=(l=Qi.screen)==null?void 0:l.width;var n;e.u_ah=(n=Qi.screen)==null?void 0:n.availHeight;var m;e.u_aw=
(m=Qi.screen)==null?void 0:m.availWidth;var p;e.u_cd=(p=Qi.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Ma){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Ma){}try{var A=h.innerWidth;var H=h.innerHeight}catch(Ma){}try{var R=h.screenLeft;var O=h.screenTop}catch(Ma){}try{A=h.innerWidth,H=h.innerHeight}catch(Ma){}try{var da=h.screen.availWidth;var Da=h.screen.availTop}catch(Ma){}t=[R,O,t,u,da,Da,y,z,A,H];try{var P=(b.h.top||window).document,ea=P.compatMode==
"CSS1Compat"?P.documentElement:P.body;var ja=(new Hd(ea.clientWidth,ea.clientHeight)).round()}catch(Ma){ja=new Hd(-12245933,-12245933)}P=ja;ja={};var oa=oa===void 0?D:oa;ea=new fj;"SVGElement"in oa&&"createElementNS"in oa.document&&ea.set(0);u=Vi();u["allow-top-navigation-by-user-activation"]&&ea.set(1);u["allow-popups-to-escape-sandbox"]&&ea.set(2);oa.crypto&&oa.crypto.subtle&&ea.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&ea.set(4);oa=gj(ea);ja.bc=oa;ja.bih=P.height;ja.biw=P.width;ja.brdim=t.join();
b=b.i;b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!Qi.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ml=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Gl(Ll(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var Nl="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function Ol(){if(!Nl)return null;var a=Nl();return"open"in a?a:null}
function Pl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ql(a,b){typeof a==="function"&&(a=yl(a));return window.setTimeout(a,b)}
;var Rl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(Rl),["client_dev_set_cookie"]);function U(a){a=Sl(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Tl(a,b){a=Sl(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Sl(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Ul(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Vl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Wl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(Rl)),Xl=!1;
function Yl(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&yl(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Ol();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Zl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=$l(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(m){Al(m)}}l.send(d);return l}
function $l(a,b){b=b===void 0?{}:b;var c=Kl(a),d=T("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in Vl){var g=T(Vl[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=T("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(oc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=oc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(nc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var n=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(m){}n&&
(b["X-YouTube-Time-Zone"]=n)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=Gl(Ll()));return b}
function am(a,b){b.method="POST";b.postParams||(b.postParams={});return bm(a,b)}
function bm(a,b){var c=b.format||"JSON";a=cm(a,b);var d=dm(a,b),e=!1,f=em(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Pl(k),n=null,m=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||m||p)n=fm(a,c,k,b.convertToSafeHtml);l&&(l=gm(c,k,n));n=n||{};m=b.context||D;l?b.onSuccess&&b.onSuccess.call(m,k,n):b.onError&&b.onError.call(m,k,n);b.onFinish&&b.onFinish.call(m,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Ql(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function cm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Jl(a,b||{},!0);return a}
function dm(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Hl(e),Ub(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!Xl&&f&&b.method!=="POST"&&(Xl=!0,zl(Error("AJAX request with postData should use POST")));return e}
function fm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Al(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?hm(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=im(g)})}d&&jm(e);
return e}
function jm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else jm(a[b])}}
function gm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function hm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function im(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Zl(a){var b=window.location.search,c=oc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Kl(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Hl(b),f={};Db(Wl,function(g){e[g]&&(f[g]=e[g])});
return Jl(a,f||{},!1)}
var em=Yl;var km=[{yc:function(a){return"Cannot read property '"+a.key+"'"},
ec:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{yc:function(a){return"Cannot call '"+a.key+"'"},
ec:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{yc:function(a){return a.key+" is not defined"},
ec:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var mm={Va:[],Ta:[{callback:lm,weight:500}]};function lm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function nm(){this.Ta=[];this.Va=[]}
var om;function pm(){if(!om){var a=om=new nm;a.Va.length=0;a.Ta.length=0;mm.Va&&a.Va.push.apply(a.Va,mm.Va);mm.Ta&&a.Ta.push.apply(a.Ta,mm.Ta)}return om}
;var qm=new M;function rm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=sm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=sm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=sm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function sm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function tm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=um(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=rm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?um(f+".ve",g,h,k):0;d+=f;d+=um(e,a[e],b,c);if(d>500)break}}else c[b]=wm(a),d+=c[b].length;else c[b]=wm(a),d+=c[b].length;return d}
function um(a,b,c,d){c+="."+a;a=wm(b);d[c]=a;return c.length+a.length}
function wm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function xm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function ym(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function zm(){this.Qe=!0}
function Am(){zm.h||(zm.h=new zm);return zm.h}
function Bm(a,b){a={};var c=[],d=U("enable_first_party_auth_v2")||(b==null?void 0:b.Yc)&&U("enable_first_party_auth_v2_on_get_account_menu");"USER_SESSION_ID"in tl&&d&&c.push({key:"u",value:T("USER_SESSION_ID")});if(c=Ah(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in tl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in
tl&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));return a}
;var Cm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Dm(a,b,c,d,e){wh.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Em(a){return wh.get(""+a,void 0)}
function Fm(a,b,c){wh.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Gm(){if(U("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!wh.isEnabled())return!1;if(wh.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?wh.set("TESTCOOKIESENABLED","1",{Jb:60,ze:"none",secure:!0}):wh.set("TESTCOOKIESENABLED","1",{Jb:60});if(wh.get("TESTCOOKIESENABLED")!=="1")return!1;wh.remove("TESTCOOKIESENABLED");return!0}
;var Hm=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",Hm);function Im(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Em(this.h);a&&this.parse(a)}
var Jm;function Km(){Jm||(Jm=new Im);return Jm}
r=Im.prototype;r.get=function(a,b){Lm(a);Mm(a);a=Hm[a]!==void 0?Hm[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){Lm(a);Mm(a);if(b==null)throw Error("ExpectedNotNull");Hm[a]=b.toString()};
function Nm(a){return!!((Om("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){Lm(a);Mm(a);delete Hm[a]};
r.clear=function(){for(var a in Hm)delete Hm[a]};
function Mm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Lm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Om(a){a=Hm[a]!==void 0?Hm[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Hm[d]=c.toString())}};var Pm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Qm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Rm(){var a=D.navigator;return a?a.connection:void 0}
function Sm(){var a=Rm();if(a){var b=Pm[a.type||"unknown"]||"CONN_UNKNOWN";a=Pm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Tm(){var a=Rm();if(a!=null&&a.effectiveType)return Qm.hasOwnProperty(a.effectiveType)?Qm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
x(V,Error);function Um(){try{return Vm(),!0}catch(a){return!1}}
function Vm(a){if(T("DATASYNC_ID")!==void 0)return T("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function Wm(){}
function Xm(a,b){return ej.Ya(a,0,b)}
Wm.prototype.ra=function(a,b){return this.Ya(a,1,b)};
Wm.prototype.Ab=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Ym=Tl("web_emulated_idle_callback_delay",300),Zm=1E3/60-3,$m=[8,5,4,3,2,1,0];
function an(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.X=this.h=0;this.W=this.o=!1;this.K=[];this.U=this.ga=!1;for(var b=w($m),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.m=0;this.oc=a.timeout||1;this.F=Zm;this.v=0;this.qa=this.oe.bind(this);this.nc=this.Te.bind(this);this.Ka=this.Dd.bind(this);this.zb=this.Wd.bind(this);this.Qb=this.re.bind(this);this.za=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.qa)}
x(an,G);r=an.prototype;r.Ab=function(a){var b=Za();bn(this,a);a=Za()-b;this.o||(this.F-=a)};
r.Ya=function(a,b,c){++this.X;if(b===10)return this.Ab(a),this.X;var d=this.X;this.j[d]=a;this.o&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.o||(this.h!==0&&cn(this)!==this.v&&this.stop(),this.start()));return d};
r.sa=function(a){delete this.j[a]};
function dn(a){a.K.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function en(a){return!a.isHidden()&&a.ia}
function cn(a){if(a.i[8].length){if(a.U)return 4;if(en(a))return 3}for(var b=5;b>=a.m;b--)if(a.i[b].length>0)return b>0?en(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function bn(a,b){try{b()}catch(c){a.Ha(c)}}
function fn(a){for(var b=w($m),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Wd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;gn(this,b);this.ga=!1};
r.Te=function(){gn(this)};
r.Dd=function(){hn(this)};
r.re=function(a){this.U=!0;var b=cn(this);b===4&&b!==this.v&&(this.stop(),this.start());gn(this,void 0,a);this.U=!1};
r.oe=function(){this.isHidden()||hn(this);this.h&&(this.stop(),this.start())};
function hn(a){a.stop();a.o=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&bn(a,e)}jn(a);a.o=!1;fn(a)&&a.start();b=Za()-b;a.F-=b}
function jn(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function gn(a,b,c){a.U&&a.v===4&&a.h||a.stop();a.o=!0;b=Za()+(b||a.F);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&bn(a,f);d=a.ga?0:1;d=a.m>d?a.m:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&bn(a,c)}while(c&&Za()<b)}a.o=!1;jn(a);a.F=Zm;fn(a)&&a.start()}
r.start=function(){this.W=!1;if(this.h===0)switch(this.v=cn(this),this.v){case 1:var a=this.zb;this.h=this.za?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Ym);break;case 2:this.h=window.setTimeout(this.nc,this.oc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Ka,0)}};
r.pause=function(){this.stop();this.W=!0};
r.stop=function(){if(this.h){switch(this.v){case 1:var a=this.h;this.za?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.da=function(){dn(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.qa);G.prototype.da.call(this)};var kn=F("yt.scheduler.instance.timerIdMap_")||{},ln=Tl("kevlar_tuner_scheduler_soft_state_timer_ms",800),mn=0,nn=0;function on(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ja)a=new an(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function pn(){qn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function qn(){dn(on());for(var a in kn)kn.hasOwnProperty(a)&&delete kn[Number(a)]}
function rn(a,b,c){if(!c)return c=c===void 0,-on().Ya(a,b,c);var d=window.setTimeout(function(){var e=on().Ya(a,b);kn[d]=e},c);
return d}
function sn(a){on().Ab(a)}
function tn(a){var b=on();if(a<0)b.sa(-a);else{var c=kn[a];c?(b.sa(c),delete kn[a]):window.clearTimeout(a)}}
function un(){vn()}
function vn(){window.clearTimeout(mn);on().start()}
function wn(){on().pause();window.clearTimeout(mn);mn=window.setTimeout(un,ln)}
function xn(){window.clearTimeout(nn);nn=window.setTimeout(function(){yn(0)},ln)}
function yn(a){xn();var b=on();b.m=a;b.start()}
function zn(a){xn();var b=on();b.m>a&&(b.m=a,b.start())}
function An(){window.clearTimeout(nn);var a=on();a.m=0;a.start()}
;function Bn(){Wm.apply(this,arguments)}
x(Bn,Wm);function Cn(){Bn.h||(Bn.h=new Bn);return Bn.h}
Bn.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Ql(a,c||0)};
Bn.prototype.sa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Bn.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
Bn.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var ej=Cn();
U("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",pn),E("yt.scheduler.instance.addJob",rn),E("yt.scheduler.instance.addImmediateJob",sn),E("yt.scheduler.instance.cancelJob",tn),E("yt.scheduler.instance.cancelAllJobs",qn),E("yt.scheduler.instance.start",vn),E("yt.scheduler.instance.pause",wn),E("yt.scheduler.instance.setPriorityThreshold",yn),E("yt.scheduler.instance.enablePriorityThreshold",zn),E("yt.scheduler.instance.clearPriorityThreshold",An),E("yt.scheduler.initialized",
!0));function Dn(a){var b=new Ej;this.h=(a=b.isAvailable()?a?new Fj(b,a):b:null)?new zj(a):null;this.i=document.domain||window.location.hostname}
Dn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new li).serialize(b))}catch(f){return}else e=escape(b);Dm(a,e,c,this.i)};
Dn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Em(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Dn.prototype.remove=function(a){this.h&&this.h.remove(a);Fm(a,"/",this.i)};var En=function(){var a;return function(){a||(a=new Dn("ytidb"));return a}}();
function Fn(){var a;return(a=En())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Gn=[],Hn,In=!1;function Jn(){var a={};for(Hn=new Kn(a.handleError===void 0?Ln:a.handleError,a.logEvent===void 0?Mn:a.logEvent);Gn.length>0;)switch(a=Gn.shift(),a.type){case "ERROR":Hn.Ha(a.payload);break;case "EVENT":Hn.logEvent(a.eventType,a.payload)}}
function Nn(a){In||(Hn?Hn.Ha(a):(Gn.push({type:"ERROR",payload:a}),Gn.length>10&&Gn.shift()))}
function On(a,b){In||(Hn?Hn.logEvent(a,b):(Gn.push({type:"EVENT",eventType:a,payload:b}),Gn.length>10&&Gn.shift()))}
;function Pn(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Qn(a){return a.substr(0,a.indexOf(":"))||a}
;var Rn=Ge||He;function Sn(a){var b=Mc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Tn={},Un=(Tn.AUTH_INVALID="No user identifier specified.",Tn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Tn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Tn.MISSING_INDEX="Index not created.",Tn.MISSING_OBJECT_STORES="Object stores not created.",Tn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Tn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Tn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Tn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Tn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Tn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Tn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Tn),Vn={},Wn=(Vn.AUTH_INVALID="ERROR",Vn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Vn.EXPLICIT_ABORT="IGNORED",Vn.IDB_NOT_SUPPORTED="ERROR",Vn.MISSING_INDEX=
"WARNING",Vn.MISSING_OBJECT_STORES="ERROR",Vn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Vn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Vn.QUOTA_EXCEEDED="WARNING",Vn.QUOTA_MAYBE_EXCEEDED="WARNING",Vn.UNKNOWN_ABORT="WARNING",Vn.INCOMPATIBLE_DB_VERSION="WARNING",Vn),Xn={},Yn=(Xn.AUTH_INVALID=!1,Xn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Xn.EXPLICIT_ABORT=!1,Xn.IDB_NOT_SUPPORTED=!1,Xn.MISSING_INDEX=!1,Xn.MISSING_OBJECT_STORES=!1,Xn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Xn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Xn.QUOTA_EXCEEDED=!1,Xn.QUOTA_MAYBE_EXCEEDED=!0,Xn.UNKNOWN_ABORT=!0,Xn.INCOMPATIBLE_DB_VERSION=!1,Xn);function Zn(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Un[a]:c;d=d===void 0?Wn[a]:d;e=e===void 0?Yn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Zn.prototype)}
x(Zn,V);function $n(a,b){Zn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Un.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,$n.prototype)}
x($n,Zn);function ao(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,ao.prototype)}
x(ao,Error);var bo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function co(a,b,c,d){b=Qn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Zn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Zn("QUOTA_EXCEEDED",a);if(Ie&&e.name==="UnknownError")return new Zn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof ao)return new Zn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&bo.some(function(f){return e.message.includes(f)}))return new Zn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Zn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",gd:e.name})];e.level="WARNING";return e}
function eo(a,b,c){var d=Fn();return new Zn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function fo(a){if(!a)throw Error();throw a;}
function go(a){return a}
function ho(a){this.h=a}
function io(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
io.all=function(a){return new io(new ho(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={pb:0};f.pb<a.length;f={pb:f.pb},++f.pb)io.resolve(a[f.pb]).then(function(g){return function(h){d[g.pb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
io.resolve=function(a){return new io(new ho(function(b,c){a instanceof io?a.then(b,c):b(a)}))};
io.reject=function(a){return new io(new ho(function(b,c){c(a)}))};
io.prototype.then=function(a,b){var c=this,d=a!=null?a:go,e=b!=null?b:fo;return new io(new ho(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){jo(c,c,d,f,g)}),c.i.push(function(){ko(c,c,e,f,g)})):c.state.status==="FULFILLED"?jo(c,c,d,f,g):c.state.status==="REJECTED"&&ko(c,c,e,f,g)}))};
io.prototype.catch=function(a){return this.then(void 0,a)};
function jo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof io?lo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ko(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof io?lo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function lo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof io?lo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function mo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function no(a){return new Promise(function(b,c){mo(a,b,c)})}
function oo(a){return new io(new ho(function(b,c){mo(a,b,c)}))}
;function po(a,b){return new io(new ho(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var qo=window,W=qo.ytcsi&&qo.ytcsi.now?qo.ytcsi.now:qo.performance&&qo.performance.timing&&qo.performance.now&&qo.performance.timing.navigationStart?function(){return qo.performance.timing.navigationStart+qo.performance.now()}:function(){return(new Date).getTime()};function ro(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
r=ro.prototype;r.add=function(a,b,c){return so(this,[a],{mode:"readwrite",ma:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return so(this,[a],{mode:"readwrite",ma:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return so(this,[a],{mode:"readonly",ma:!0},function(c){return c.objectStore(a).count(b)})};
function to(a,b,c){a=a.h.createObjectStore(b,c);return new uo(a)}
r.delete=function(a,b){return so(this,[a],{mode:"readwrite",ma:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return so(this,[a],{mode:"readonly",ma:!0},function(c){return c.objectStore(a).get(b)})};
function vo(a,b,c){return so(a,[b],{mode:"readwrite",ma:!0},function(d){d=d.objectStore(b);return oo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function so(a,b,c,d){var e,f,g,h,k,l,n,m,p,t,u,y;return B(function(z){switch(z.h){case 1:var A={mode:"readonly",ma:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?A.mode=c:Object.assign(A,c);e=A;a.transactionCount++;f=e.ma?3:1;g=0;case 2:if(h){z.D(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);A=z.yield;var H=new wo(l);H=xo(H,d);return A.call(z,H,7);case 7:return n=z.i,m=Math.round(W()),yo(a,k,m,g,void 0,b.join(),e),z.return(n);case 5:p=Ba(z);t=Math.round(W());u=co(p,
a.h.name,b.join(),a.h.version);if((y=u instanceof Zn&&!u.h)||g>=f)yo(a,k,t,g,u,b.join(),e),h=u;z.D(2);break;case 4:return z.return(Promise.reject(h))}})}
function yo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Zn&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&On("QUOTA_EXCEEDED",{dbName:Qn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Zn&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),On("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),zo(a,!1,d,f,b,g.tag),Nn(e)):zo(a,!0,d,f,b,g.tag)}
function zo(a,b,c,d,e,f){On("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function uo(a){this.h=a}
r=uo.prototype;r.add=function(a,b){return oo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return oo(this.h.clear()).then(function(){})};
function Ao(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return oo(this.h.count(a))};
function Bo(a,b){return Co(a,{query:b},function(c){return c.delete().then(function(){return Do(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?Bo(this,a):oo(this.h.delete(a))};
r.get=function(a){return oo(this.h.get(a))};
r.index=function(a){try{return new Eo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new ao(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function Co(a,b,c){a=a.h.openCursor(b.query,b.direction);return Fo(a).then(function(d){return po(d,c)})}
function wo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Zn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function xo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
wo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Zn("EXPLICIT_ABORT");};
wo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new uo(a),this.i.set(a,b));return b};
function Eo(a){this.h=a}
r=Eo.prototype;r.count=function(a){return oo(this.h.count(a))};
r.delete=function(a){return Go(this,{query:a},function(b){return b.delete().then(function(){return Do(b)})})};
r.get=function(a){return oo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function Go(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Fo(a).then(function(d){return po(d,c)})}
function Ho(a,b){this.request=a;this.cursor=b}
function Fo(a){return oo(a).then(function(b){return b?new Ho(a,b):null})}
function Do(a){a.cursor.continue(void 0);return Fo(a.request)}
Ho.prototype.delete=function(){return oo(this.cursor.delete()).then(function(){})};
Ho.prototype.getValue=function(){return this.cursor.value};
Ho.prototype.update=function(a){return oo(this.cursor.update(a))};function Io(a,b,c){return new Promise(function(d,e){function f(){p||(p=new ro(g.result,{closed:m}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Fd,k=c.blocking,l=c.Re,n=c.upgrade,m=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&On("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Qn(a)});var u=f(),y=new wo(g.transaction);
n&&n(u,function(z){return t.oldVersion<z&&t.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){On("IDB_UNEXPECTEDLY_CLOSED",{dbName:Qn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Jo(a,b,c){c=c===void 0?{}:c;return Io(a,b,c)}
function Ko(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Fd)&&c.addEventListener("blocked",function(){e()}),g.yield(no(c),4);
if(g.h!=2)g.h=0,g.m=0;else throw f=Ba(g),co(f,a,"",-1);})}
;function Lo(a,b){this.name=a;this.options=b;this.j=!0;this.B=this.m=0}
Lo.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Jo(a,b,c)};
Lo.prototype.delete=function(a){a=a===void 0?{}:a;return Ko(this.name,a)};
function Mo(a,b){return new Zn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function No(a,b){if(!b)throw eo("openWithToken",Qn(a.name));return a.open()}
Lo.prototype.open=function(){function a(){var f,g,h,k,l,n,m,p,t,u;return B(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,A=c.options,H=[],R=w(Object.keys(A.vb)),O=R.next();!O.done;O=R.next()){O=O.value;var da=A.vb[O],Da=da.te===void 0?Number.MAX_VALUE:da.te;!(z.h.version>=da.Cb)||z.h.version>=Da||z.h.objectStoreNames.contains(O)||H.push(O)}k=H;if(k.length===0){y.D(5);break}l=Object.keys(c.options.vb);
n=h.objectStoreNames();if(c.B<Tl("ytidb_reopen_db_retries",0))return c.B++,h.close(),Nn(new Zn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.m<Tl("ytidb_remake_db_retries",1))){y.D(6);break}c.m++;return y.yield(c.delete(),7);case 7:return Nn(new Zn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new $n(n,l);case 5:return y.return(h);case 2:m=Ba(y);
if(m instanceof DOMException?m.name!=="VersionError":"DOMError"in self&&m instanceof DOMError?m.name!=="VersionError":!(m instanceof Object&&"message"in m)||m.message!=="An attempt was made to open a database using a lower version than the existing version."){y.D(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=y.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,Mo(c,t);return y.return(p);case 8:throw b(),m instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(m.stack=m.stack+"\n"+g.substring(g.indexOf("\n")+1)),co(m,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Mo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Re:b,upgrade:this.options.upgrade};return this.h=d=a()};var Oo=new Lo("YtIdbMeta",{vb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&to(a,"databases",{keyPath:"actualName"})}});
function Po(a,b){var c;return B(function(d){if(d.h==1)return d.yield(No(Oo,b),2);c=d.i;return d.return(so(c,["databases"],{ma:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return oo(f.h.put(a,void 0)).then(function(){})})}))})}
function Qo(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(No(Oo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ro(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(No(Oo,b),2)):e.h!=3?(d=e.i,e.yield(so(d,["databases"],{ma:!0,mode:"readonly"},function(f){c.length=0;return Co(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Do(g)})}),3)):e.return(c)})}
function So(a){return Ro(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function To(a,b,c){return Ro(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Uo(a){var b,c;return B(function(d){if(d.h==1)return b=Vm("YtIdbMeta hasAnyMeta other"),d.yield(Ro(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Vo,Wo=new function(){}(new function(){});
function Xo(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=Fn();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Rn)f=/WebKit\/([0-9]+)/.exec(Mc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Mc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Po(d,Wo),4);case 4:return e.yield(Qo("yt-idb-test-do-not-use",Wo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Yo(){if(Vo!==void 0)return Vo;In=!0;return Vo=Xo().then(function(a){In=!1;var b;if((b=En())!=null&&b.h){var c;b={hasSucceededOnce:((c=Fn())==null?void 0:c.hasSucceededOnce)||a};var d;(d=En())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Zo(){return F("ytglobal.idbToken_")||void 0}
function $o(){var a=Zo();return a?Promise.resolve(a):Yo().then(function(b){(b=b?Wo:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var ap=0;function bp(a,b){ap||(ap=ej.ra(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield($o(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(To(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.D(6);break}f=e[0];return h.yield(Ko(f.actualName),7);case 7:return h.yield(Qo(f.actualName,c),6);case 6:h.h=4;h.m=0;break;case 3:g=Ba(h),Nn(g),d=!1;case 4:ej.sa(ap),ap=0,d&&bp(a,b),h.h=0}})}))}
function cp(){var a;return B(function(b){return b.h==1?b.yield($o(),2):(a=b.i)?b.return(Uo(a)):b.return(!1)})}
new Oi;function dp(a){if(!Um())throw a=new Zn("AUTH_INVALID",{dbName:a}),Nn(a),a;var b=Vm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function ep(a,b,c,d){var e,f,g,h,k,l;return B(function(n){switch(n.h){case 1:return f=(e=Error().stack)!=null?e:"",n.yield($o(),2);case 2:g=n.i;if(!g)throw h=eo("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Nn(h),h;Pn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:dp(a);Aa(n,3);return n.yield(Po(k,g),5);case 5:return n.yield(Jo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(Qo(k.actualName,
g),9);case 9:n.h=8;n.m=0;break;case 7:Ba(n);case 8:throw l;}})}
function fp(a,b,c){c=c===void 0?{}:c;return ep(a,b,!1,c)}
function gp(a,b,c){c=c===void 0?{}:c;return ep(a,b,!0,c)}
function hp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield($o(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Pn(a);d=dp(a);return e.yield(Ko(d.actualName,b),3)}return e.yield(Qo(d.actualName,c),0)})}
function ip(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(Ko(d.actualName,b),2):e.yield(Qo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function jp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield($o(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Pn("LogsDatabaseV2");return d.yield(So(b),3)}c=d.i;return d.yield(ip(c,a,b),0)})}
function kp(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield($o(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Pn(a);return d.yield(Ko(a,b),3)}return d.yield(Qo(a,c),0)})}
;function lp(a,b){Lo.call(this,a,b);this.options=b;Pn(a)}
x(lp,Lo);function mp(a,b){var c;return function(){c||(c=new lp(a,b));return c}}
lp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?gp:fp)(a,b,Object.assign({},c))};
lp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?kp:hp)(this.name,a)};
function np(a,b){return mp(a,b)}
;var op={},pp=np("ytGcfConfig",{vb:(op.coldConfigStore={Cb:1},op.hotConfigStore={Cb:1},op),shared:!1,upgrade:function(a,b){b(1)&&(Ao(to(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ao(to(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function qp(a){return No(pp(),a)}
function rp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(qp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(vo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function sp(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(qp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(vo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function tp(a){var b,c;return B(function(d){return d.h==1?d.yield(qp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(so(b,["coldConfigStore"],{mode:"readwrite",ma:!0},function(e){return Go(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function up(a){var b,c;return B(function(d){return d.h==1?d.yield(qp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(so(b,["hotConfigStore"],{mode:"readwrite",ma:!0},function(e){return Go(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function vp(){G.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(vp,G);vp.prototype.da=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.da.call(this)};function wp(){this.h=0;this.i=new vp}
function xp(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:T("RAW_HOT_CONFIG_GROUP")}
function yp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.D(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.m(b);d=Zo();if(!d){g.D(3);break}if(c){g.D(4);break}return g.yield(up(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(rp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function zp(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.D(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Zo())?c?h.D(4):h.yield(tp(d),5):h.D(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.D(0);g=c.configData;return h.yield(sp(c,b,g,d),0)})}
function Ap(){if(!wp.h){var a=new wp;wp.h=a}a=wp.h;var b=W()-a.h;if(!(a.h!==0&&b<Tl("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
wp.prototype.m=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Bp(){return"INNERTUBE_API_KEY"in tl&&"INNERTUBE_API_VERSION"in tl}
function Cp(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),Xd:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Kg:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),Zd:T("INNERTUBE_CONTEXT_HL"),Yd:T("INNERTUBE_CONTEXT_GL"),ae:T("INNERTUBE_HOST_OVERRIDE")||"",ce:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),be:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Dp(a){var b={client:{hl:a.Zd,gl:a.Yd,clientName:a.Zc,clientVersion:a.innertubeContextClientVersion,configInfo:a.Xd}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Ul();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Zc;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=ym()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Sm())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=Tm())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=Ap())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(Hl(T("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Ep(a,b,c){c=c===void 0?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().Cg:(a=Bm(Am()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Fp=typeof TextEncoder!=="undefined"?new TextEncoder:null,Gp=Fp?function(a){return Fp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Hp(a,b){this.version=a;this.args=b}
Hp.prototype.serialize=function(){return{version:this.version,args:this.args}};function Ip(a,b){this.topic=a;this.h=b}
Ip.prototype.toString=function(){return this.topic};var Jp=F("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.jb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",Jp);var Kp=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",Kp);var Lp=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",Lp);var Mp=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",Mp);
E("ytPubsub2Pubsub2SkipSubKey",null);function Np(a,b){var c=Op();c&&c.publish.call(c,a.toString(),a,b)}
function Pp(a){var b=Qp,c=Op();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Kp[d])try{if(f&&b instanceof Ip&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.vd){var l=new h;h.vd=l.version}var n=h.vd}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var m=n.construct;
var p=k.args,t=p.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=p[k];var y=u}else y=[];f=m.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){zl(z)}},Mp[b.toString()]?F("yt.scheduler.instance")?ej.ra(g):Ql(g,0):g())});
Kp[d]=!0;Lp[b.toString()]||(Lp[b.toString()]=[]);Lp[b.toString()].push(d);return d}
function Rp(){var a=Sp,b=Pp(function(c){a.apply(void 0,arguments);Tp(b)});
return b}
function Tp(a){var b=Op();b&&(typeof a==="number"&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete Kp[c]}))}
function Op(){return F("ytPubsub2Pubsub2Instance")}
;function Up(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Np("meta_logging_csi_event",{timerName:a,ah:b})}
;var Vp=void 0,Wp=void 0;function Xp(){Wp||(Wp=Tk(T("WORKER_SERIALIZATION_URL")));return Wp||void 0}
function Yp(){var a=Xp();Vp||a===void 0||(Vp=new Worker(kb(a),void 0));return Vp}
;var Zp=Tl("max_body_size_to_compress",5E5),$p=Tl("min_body_size_to_compress",500),aq=!0,bq=0,cq=0,dq=Tl("compression_performance_threshold_lr",250),eq=Tl("slow_compressions_before_abandon_count",4),fq=!1,gq=new Map,hq=1,iq=!0;function jq(){if(typeof Worker==="function"&&Xp()&&!fq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=gq.get(c.key);d&&(kq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),gq.delete(c.key))}},b=Yp();
b&&(b.addEventListener("message",a),b.onerror=function(){gq.clear()},fq=!0)}}
function lq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(aq)try{var g=mq(b);if(g!=null&&(g>Zp||g<$p))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!iq||!U("initial_gzip_use_main_thread"))){fq||jq();var h=Yp();if(h&&!e){gq.set(hq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:hq});hq++;return}}var k=Sk(Gp(b));kq(k,f,a,c,d)}}catch(l){Al(l),d(a,c)}else d(a,c)}
function kq(a,b,c,d,e){iq=!1;var f=W();b.ticks.gelc=f;cq++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=dq&&(bq++,U("abandon_compression_after_N_slow_zips")?cq===Tl("compression_disable_point")&&bq>eq&&(aq=!1):aq=!1);nq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function oq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(aq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=mq(g);if(h!=null&&(h>Zp||h<$p))return a;c=b?{level:1}:void 0;f=Sk(Gp(g),c);var k=W();e.ticks.gelc=k;if(b){cq++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=dq)if(bq++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=bq/cq;var l=eq/Tl("compression_disable_point");cq>0&&cq%Tl("compression_disable_point")===0&&b>=l&&(aq=!1)}else aq=!1;nq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Al(n),a}}else return a}
function mq(a){try{return(new Blob(a.split(""))).size}catch(b){return Al(b),null}}
function nq(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Up("gel_compression",a,{sampleRate:.1})}
;function pq(a){a=Object.assign({},a);delete a.Authorization;var b=Ah();if(b){var c=new ij;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Le(c.digest(),3)}return a}
;var qq;function rq(){qq||(qq=new Dn("yt.innertube"));return qq}
function sq(a,b,c,d){if(d)return null;d=rq().get("nextId",!0)||1;var e=rq().get("requests",!0)||{};e[d]={method:a,request:b,authState:pq(c),requestTime:Math.round(W())};rq().set("nextId",d+1,86400,!0);rq().set("requests",e,86400,!0);return d}
function tq(a){var b=rq().get("requests",!0)||{};delete b[a];rq().set("requests",b,86400,!0)}
function uq(a){var b=rq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=pq(Ep(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),vq(a,d.method,e,{}));delete b[c]}}rq().set("requests",b,86400,!0)}}
;function wq(a){this.Tb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.nb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.sd=(b=a.sd)!=null?b:100;var c;this.nd=(c=a.nd)!=null?c:1;var d;this.kd=(d=a.kd)!=null?d:2592E6;var e;this.jd=(e=a.jd)!=null?e:12E4;var f;this.md=(f=a.md)!=null?f:5E3;var g;this.Y=(g=a.Y)!=null?g:void 0;this.Yb=!!a.Yb;var h;this.Wb=(h=a.Wb)!=null?h:.1;var k;this.hc=(k=a.hc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.nb&&(this.nb=a.nb);a.Fb&&(this.Fb=a.Fb);a.Tb&&(this.Tb=a.Tb);this.Z=a.Z;this.Ea=a.Ea;this.ha=a.ha;this.fa=a.fa;this.sendFn=a.sendFn;
this.Ec=a.Ec;this.Bc=a.Bc;xq(this)&&(!this.Z||this.Z("networkless_logging"))&&yq(this)}
function yq(a){xq(a)&&!a.Fb&&(a.h=!0,a.Yb&&Math.random()<=a.Wb&&a.ha.Gd(a.Y),zq(a),a.fa.xa()&&a.Ob(),a.fa.listen(a.Ec,a.Ob.bind(a)),a.fa.listen(a.Bc,a.Oc.bind(a)))}
r=wq.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(xq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(d,this.Y).then(function(e){d.id=e;c.fa.xa()&&Aq(c,d)}).catch(function(e){Aq(c,d);
Bq(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(xq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z&&this.Z("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.xa()||this.Z&&this.Z("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ha.set(e,d.Y).catch(function(l){Bq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ha.set(e,this.Y).catch(function(g){d.sendFn(a,b,e.skipRetry);
Bq(d,g)})}else this.sendFn(a,b,this.Z&&this.Z("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(xq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ha.mb(d.id,c.Y):e=!0;c.fa.eb&&c.Z&&c.Z("vss_network_hint")&&c.fa.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ha.set(d,this.Y).then(function(g){d.id=g;e&&c.ha.mb(d.id,c.Y)}).catch(function(g){Bq(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Ob=function(){var a=this;if(!xq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.ra(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ha.Vc("NEW",a.Y),2);if(c.h!=3)return b=c.i,b?c.yield(Aq(a,b),3):(a.Oc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.sd))};
r.Oc=function(){this.Ea.sa(this.i);this.i=0};
function Aq(a,b){var c;return B(function(d){switch(d.h){case 1:if(!xq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.D(2);break}return d.yield(a.ha.ge(b.id,a.Y),3);case 3:(c=d.i)||a.nb(Error("The request cannot be found in the database."));case 2:if(Cq(a,b,a.kd)){d.D(4);break}a.nb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.D(5);break}return d.yield(a.ha.mb(b.id,a.Y),5);case 5:return d.return();case 4:b.skipRetry||(b=Dq(a,
b));if(!b){d.D(0);break}if(!b.skipRetry||b.id===void 0){d.D(8);break}return d.yield(a.ha.mb(b.id,a.Y),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Dq(a,b){if(!xq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(n){switch(n.h){case 1:g=Eq(f);(h=Fq(f))&&a.Z&&a.Z("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Z&&a.Z("nwl_consider_error_code")&&g||a.Z&&!a.Z("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.hc)){n.D(2);break}if(!a.fa.kc){n.D(3);break}return n.yield(a.fa.kc(),3);case 3:if(a.fa.xa()){n.D(2);break}c(e,f);if(!a.Z||!a.Z("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){n.D(6);
break}return n.yield(a.ha.Fc(b.id,a.Y,!1),6);case 6:return n.return();case 2:if(a.Z&&a.Z("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.hc)return n.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){n.D(8);break}return b.sendCount<a.nd?n.yield(a.ha.Fc(b.id,a.Y,!0,h?!1:void 0),12):n.yield(a.ha.mb(b.id,a.Y),8);case 12:a.Ea.ra(function(){a.fa.xa()&&a.Ob()},a.md);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.D(2):h.yield(a.ha.mb(b.id,a.Y),2);a.fa.eb&&a.Z&&a.Z("vss_network_hint")&&a.fa.eb(!0);d(e,f);h.h=0})};
return b}
function Cq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zq(a){if(!xq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.Vc("QUEUED",a.Y).then(function(b){b&&!Cq(a,b,a.jd)?a.Ea.ra(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.D(2):c.yield(a.ha.Fc(b.id,a.Y),2);zq(a);c.h=0})}):a.fa.xa()&&a.Ob()})}
function Bq(a,b){a.yd&&!a.fa.xa()?a.yd(b):a.handleError(b)}
function xq(a){return!!a.Y||a.Tb}
function Eq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Fq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Gq;
function Hq(){if(Gq)return Gq();var a={};Gq=np("LogsDatabaseV2",{vb:(a.LogsRequestsStore={Cb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&to(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Ao(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Gq()}
;function Iq(a){return No(Hq(),a)}
function Jq(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Iq(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(vo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Kq(c);return g.return(f)})}
function Lq(a,b){var c,d,e,f,g,h,k,l;return B(function(n){if(n.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(Iq(b),2);if(n.h!=3)return d=n.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(so(d,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(m){return Go(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=W();Kq(c);return n.return(l)})}
function Mq(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Iq(b),2);c=d.i;return d.return(so(c,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",oo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Nq(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(Iq(b),2);e=f.i;return f.return(so(e,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),oo(h.h.put(k,void 0)).then(function(){return k})):io.resolve(void 0)})}))})}
function Oq(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Iq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Pq(a){var b,c;return B(function(d){if(d.h==1)return d.yield(Iq(a),2);b=d.i;c=W()-2592E6;return d.yield(so(b,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(e){return Co(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Do(f)})})}),0)})}
function Qq(){B(function(a){return a.yield(jp(),0)})}
function Kq(a){U("nwl_csi_killswitch")||Up("networkless_performance",a,{sampleRate:1})}
;var Rq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var Sq={},Tq=np("ServiceWorkerLogsDatabase",{vb:(Sq.SWHealthLog={Cb:1},Sq),shared:!0,upgrade:function(a,b){b(1)&&Ao(to(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Uq(a){return No(Tq(),a)}
function Vq(a){var b,c;B(function(d){if(d.h==1)return d.yield(Uq(a),2);b=d.i;c=W()-2592E6;return d.yield(so(b,["SWHealthLog"],{mode:"readwrite",ma:!0},function(e){return Co(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Do(f)})})}),0)})}
function Wq(a){var b;return B(function(c){if(c.h==1)return c.yield(Uq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Xq={},Yq=0;function Zq(a){var b=new Image,c=""+Yq++;Xq[c]=b;b.onload=b.onerror=function(){delete Xq[c]};
b.src=a}
;var $q;function ar(){$q||($q=new Dn("yt.offline"));return $q}
function br(a){if(U("offline_error_handling")){var b=ar().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ar().set("errors",b,2592E3,!0)}}
;function cr(){this.h=new Map;this.i=!1}
function dr(){if(!cr.h){var a=F("yt.networkRequestMonitor.instance")||new cr;E("yt.networkRequestMonitor.instance",a);cr.h=a}return cr.h}
cr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
cr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
cr.prototype.removeParams=function(a){return a.split("?")[0]};
cr.prototype.removeParams=cr.prototype.removeParams;cr.prototype.isEndpointCFR=cr.prototype.isEndpointCFR;cr.prototype.requestComplete=cr.prototype.requestComplete;cr.getInstance=dr;function er(){zd.call(this);var a=this;this.j=!1;this.i=dj();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=ar().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;zl(d)}ar().set("errors",{},2592E3,!0)}}})}
x(er,zd);function fr(){if(!er.h){var a=F("yt.networkStatusManager.instance")||new er;E("yt.networkStatusManager.instance",a);er.h=a}return er.h}
r=er.prototype;r.xa=function(){return this.i.xa()};
r.eb=function(a){this.i.i=a};
r.Td=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Ld=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.kc=function(a){a=bj(this.i,a);a.then(function(b){U("use_cfr_monitor")&&dr().requestComplete("generate_204",b)});
return a};
er.prototype.sendNetworkCheckRequest=er.prototype.kc;er.prototype.listen=er.prototype.listen;er.prototype.enableErrorFlushing=er.prototype.Ld;er.prototype.getWindowStatus=er.prototype.Td;er.prototype.networkStatusHint=er.prototype.eb;er.prototype.isNetworkAvailable=er.prototype.xa;er.getInstance=fr;function gr(a){a=a===void 0?{}:a;zd.call(this);var b=this;this.i=this.o=0;this.j=fr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){hr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){hr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ad(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ad(b,"publicytnetworkstatus-offline")})))}
x(gr,zd);gr.prototype.xa=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
gr.prototype.eb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
gr.prototype.kc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&dr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.xa())})):c?d.return(c(a)):d.return(!0)})};
function hr(a,b){a.rateLimit?a.i?(ej.sa(a.o),a.o=ej.ra(function(){a.m!==b&&(Ad(a,b),a.m=b,a.i=W())},a.rateLimit-(W()-a.i))):(Ad(a,b),a.m=b,a.i=W()):Ad(a,b)}
;var ir;function jr(){var a=wq.call;ir||(ir=new gr({Pg:!0,Ig:!0}));a.call(wq,this,{ha:{Gd:Pq,mb:Oq,Vc:Lq,ge:Mq,Fc:Nq,set:Jq},fa:ir,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Al(new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else zl(b)},
nb:Al,sendFn:kr,now:W,yd:br,Ea:Cn(),Ec:"publicytnetworkstatus-online",Bc:"publicytnetworkstatus-offline",Yb:!0,Wb:.1,hc:Tl("potential_esf_error_limit",10),Z:U,Fb:!(Um()&&lr())});this.j=new Oi;U("networkless_immediately_drop_all_requests")&&Qq();kp("LogsDatabaseV2")}
x(jr,wq);function mr(){var a=F("yt.networklessRequestController.instance");a||(a=new jr,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&$o().then(function(b){a.Y=b;yq(a);a.j.resolve();a.Yb&&Math.random()<=a.Wb&&a.Y&&Vq(a.Y);U("networkless_immediately_drop_sw_health_store")&&nr(a)}));
return a}
jr.prototype.writeThenSend=function(a,b){b||(b={});b=or(a,b);Um()||(this.h=!1);wq.prototype.writeThenSend.call(this,a,b)};
jr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=or(a,b);Um()||(this.h=!1);wq.prototype.sendThenWrite.call(this,a,b,c)};
jr.prototype.sendAndWrite=function(a,b){b||(b={});b=or(a,b);Um()||(this.h=!1);wq.prototype.sendAndWrite.call(this,a,b)};
jr.prototype.awaitInitialization=function(){return this.j.promise};
function nr(a){var b;B(function(c){if(!a.Y)throw b=eo("clearSWHealthLogsDb"),b;return c.return(Wq(a.Y).catch(function(d){a.handleError(d)}))})}
function kr(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&pr(a,b);if(U("use_request_time_ms_header"))b.headers&&Kl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Yl(a,void 0,"POST",f,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Yl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.m){var l=mc(nc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var m=a.search(vc),p=uc(a,0,"ri",m);if(p<0)var t=null;else{var u=a.indexOf("&",p);if(u<0||u>m)u=m;t=decodeURIComponent(a.slice(p+3,u!==-1?u:0).replace(/\+/g," "))}n=t!=="1"}var y=!n;break b}}catch(A){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(A){}z=!1}c=z?!0:!1}else c=
!1;c||Zq(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),lq(a,b.postBody,b,bm,d)):lq(a,JSON.stringify(b.postParams),b,am,d):bm(a,b)}
function or(a,b){U("use_event_time_ms_header")&&Kl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function pr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){dr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){dr().requestComplete(a,!0);d(e,f)}}
function lr(){return oc(document.location.toString())!=="www.youtube-nocookie.com"}
;var qr=!1,rr=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:qr};E("ytNetworklessLoggingInitializationOptions",rr);function sr(){var a;B(function(b){if(b.h==1)return b.yield($o(),2);a=b.i;if(!a||!Um()&&!U("nwl_init_require_datasync_id_killswitch")||!lr())return b.D(0);qr=!0;rr.isNwlInitialized=qr;return b.yield(mr().awaitInitialization(),0)})}
;function tr(a){var b=this;this.config_=null;a?this.config_=a:Bp()&&(this.config_=Cp());Xm(function(){uq(b)},5E3)}
tr.prototype.isReady=function(){!this.config_&&Bp()&&(this.config_=Cp());return!!this.config_};
function vq(a,b,c,d){function e(u){u=u===void 0?!1:u;var y;if(d.retry&&h!="www.youtube-nocookie.com"&&(u||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(y=sq(b,c,l,k)),y)){var z=g.onSuccess,A=g.onFetchSuccess;g.onSuccess=function(O,da){tq(y);z(O,da)};
c.onFetchSuccess=function(O,da){tq(y);A(O,da)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?mr().writeThenSend(t,g):mr().sendAndWrite(t,g);
else if(d.compress){var H=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;typeof R!=="string"&&(R=JSON.stringify(g.postBody));lq(t,R,g,bm,H)}else lq(t,JSON.stringify(g.postParams),g,am,H)}else U("web_all_payloads_via_jspb")?bm(t,g):am(t,g)}catch(O){if(O.name==="InvalidAccessError")y&&(tq(y),y=0),Al(Error("An extension is blocking network request."));else throw O;}y&&Xm(function(){uq(a)},5E3)}
!T("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Al(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);zl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,y){if(d.onError)d.onError(y)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ae)&&(h=f);var k=a.config_.ce||!1,l=Ep(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,m={alt:"json"},p=a.config_.be&&f;p=p&&f.startsWith("Bearer");p||(m.key=a.config_.innertubeApiKey);var t=Jl(""+h+n,m||{},!0);(F("ytNetworklessLoggingInitializationOptions")?
rr.isNwlInitialized:qr)?Yo().then(function(u){e(u)}):e(!1)}
;var xr=0,yr=ad?"webkit":$c?"moz":Yc?"ms":Xc?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++xr});var zr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ar(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in zr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Br(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Ar.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ar.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ar.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Mb);var Cr=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Cr);
function Dr(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Er(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Dr(a,b,c,d);if(e)return e;e=++Cr.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ar(h);if(!Kd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ar(h);
h.currentTarget=a;return c.call(a,h)};
g=yl(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Fr()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Gr(a){a&&(typeof a=="string"&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Fr()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Fr=Fd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Hr(a){this.F=a;this.h=null;this.m=0;this.v=null;this.o=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Er(window,"mousemove",Xa(this.W,this));a=Xa(this.K,this);typeof a==="function"&&(a=yl(a));this.X=window.setInterval(a,25)}
$a(Hr,G);Hr.prototype.W=function(a){a.h===void 0&&Br(a);var b=a.h;a.i===void 0&&Br(a);this.h=new Gd(b,a.i)};
Hr.prototype.K=function(){if(this.h){var a=W();if(this.m!=0){var b=this.v,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.i[this.j]=Math.abs((d-this.o)/this.o)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.F();this.o=d}this.m=a;this.v=this.h;this.j=(this.j+1)%4}};
Hr.prototype.da=function(){window.clearInterval(this.X);Gr(this.U)};var Ir={};
function Jr(a){var b=a===void 0?{}:a;a=b.qe===void 0?!1:b.qe;b=b.Md===void 0?!0:b.Md;if(F("_lact",window)==null){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&Kr();Er(document,"keydown",Kr);Er(document,"keyup",Kr);Er(document,"mousedown",Kr);Er(document,"mouseup",Kr);a?Er(window,"touchmove",function(){Lr("touchmove",200)},{passive:!0}):(Er(window,"resize",function(){Lr("resize",200)}),b&&Er(window,"scroll",function(){Lr("scroll",200)}));
new Hr(function(){Lr("mouse",100)});
Er(document,"touchstart",Kr,{passive:!0});Er(document,"touchend",Kr,{passive:!0})}}
function Lr(a,b){Ir[a]||(Ir[a]=!0,ej.ra(function(){Kr();Ir[a]=!1},b))}
function Kr(){F("_lact",window)==null&&Jr();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function Mr(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Nr=D.ytPubsubPubsubInstance||new M,Or=D.ytPubsubPubsubSubscribedKeys||{},Pr=D.ytPubsubPubsubTopicToKeys||{},Qr=D.ytPubsubPubsubIsSynchronous||{};function Rr(a,b){var c=Sr();if(c&&b){var d=c.subscribe(a,function(){function e(){Or[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Qr[a]?e():Ql(e,0)}catch(g){zl(g)}},void 0);
Or[d]=!0;Pr[a]||(Pr[a]=[]);Pr[a].push(d);return d}return 0}
function Tr(a){var b=Sr();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete Or[c]}))}
function Ur(a,b){var c=Sr();c&&c.publish.apply(c,arguments)}
function Vr(a){var b=Sr();if(b)if(b.clear(a),a)Wr(a);else for(var c in Pr)Wr(c)}
function Sr(){return D.ytPubsubPubsubInstance}
function Wr(a){Pr[a]&&(a=Pr[a],Db(a,function(b){Or[b]&&delete Or[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.jb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",Nr);E("ytPubsubPubsubTopicToKeys",Pr);E("ytPubsubPubsubIsSynchronous",Qr);E("ytPubsubPubsubSubscribedKeys",Or);var Xr=Symbol("injectionDeps");function Yr(a){this.name=a}
Yr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Zr(a){this.key=a}
function $r(){this.i=new Map;this.j=new Map;this.h=new Map}
function as(a,b){a.i.set(b.jc,b);var c=a.j.get(b.jc);if(c)try{c.Wg(a.resolve(b.jc))}catch(d){c.Ug(d)}}
$r.prototype.resolve=function(a){return a instanceof Zr?bs(this,a.key,[],!0):bs(this,a,[])};
function bs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.ud!==void 0)var e=d.ud;else if(d.Ye)e=d[Xr]?cs(a,d[Xr],c):[],e=d.Ye.apply(d,ma(e));else if(d.td){e=d.td;var f=e[Xr]?cs(a,e[Xr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Zg||a.h.set(b,e);return e}
function cs(a,b,c){return b?b.map(function(d){return d instanceof Zr?bs(a,d.key,c,!0):bs(a,d,c)}):[]}
;var ds;function es(){ds||(ds=new $r);return ds}
;var gs=window;function hs(){var a,b;return"h5vcc"in gs&&((a=gs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=gs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in gs&&gs.performance.mark&&gs.performance.measure?2:0}
function is(a){var b=hs();switch(b){case 1:gs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:gs.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function js(a){var b=hs();switch(b){case 1:gs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";gs.performance.mark(c);gs.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var ks=U("web_enable_lifecycle_monitoring")&&hs()!==0,ls=U("web_enable_lifecycle_monitoring");function ms(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Cn():d;this.j=c;this.scheduler=d;this.i=new Oi;this.h=a;for(a={ab:0};a.ab<this.h.length;a={fc:void 0,ab:a.ab},a.ab++)a.fc=this.h[a.ab],c=function(e){return function(){e.fc.vc();b.h[e.ab].ic=!0;b.h.every(function(f){return f.ic===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.fc),d=this.scheduler.Ya(c,d),this.h[a.ab]=Object.assign({},a.fc,{vc:c,
jobId:d})}
function ns(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.ic||(a.scheduler.sa(c.jobId),a.scheduler.Ya(c.vc,10))}
ms.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.ic||this.scheduler.sa(b.jobId),b.ic=!0;this.i.resolve()};
ms.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function ps(a){this.state=a;this.plugins=[];this.m=void 0;this.v={};ks&&is(this.state)}
r=ps.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;ks&&js(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ns(this.j),this.j=void 0);qs(this,a,b);this.state=a;ks&&is(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(rs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function rs(a,b){var c=b.filter(function(e){return ss(a,e)===10}),d=b.filter(function(e){return ss(a,e)!==10});
return a.v.Yg?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.xe.apply(a,[c].concat(ma(e))),2);a.pd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.ye.apply(a,[c].concat(ma(e)));a.pd.apply(a,[d].concat(ma(e)))}}
r.ye=function(a){for(var b=C.apply(1,arguments),c=Cn(),d=w(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Ab(function(g){return function(){ts(g.Hb.name);g.Hb.callback.apply(g.Hb,ma(b));us(g.Hb.name)}}(f))};
r.xe=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=Cn(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.D(0);f.rb=e.value;f.Rb=void 0;g=function(k){return function(){ts(k.rb.name);var l=k.rb.callback.apply(k.rb,ma(b));typeof(l==null?void 0:l.then)==="function"?k.Rb=l.then(function(){us(k.rb.name)}):us(k.rb.name)}}(f);
c.Ab(g);return f.Rb?h.yield(f.Rb,3):h.D(3)}f={rb:void 0,Rb:void 0};e=d.next();return h.D(2)})};
r.pd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{vc:function(){ts(e.name);e.callback.apply(e,ma(b));us(e.name)},
priority:ss(c,e)}});
d.length&&(this.j=new ms(d))};
function ss(a,b){var c,d;return(d=(c=a.m)!=null?c:b.priority)!=null?d:0}
function ts(a){ks&&a&&is(a)}
function us(a){ks&&a&&js(a)}
function qs(a,b,c){ls&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(ps.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function vs(a){ps.call(this,a===void 0?"none":a);this.h=null;this.m=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.B},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ws;x(vs,ps);vs.prototype.i=function(a,b){var c=this;this.h=Xm(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
vs.prototype.B=function(a,b){this.h&&(ej.sa(this.h),this.h=null);a(b==null?void 0:b.event)};
function xs(){ws||(ws=new vs);return ws}
;var ys=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return ys});function zs(){this.store={};this.h={}}
zs.prototype.storePayload=function(a,b){a=As(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
zs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Bs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
zs.prototype.extractMatchingEntries=function(a){a=Bs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
zs.prototype.getSequenceCount=function(a){a=Bs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Bs(a,b){var c=As(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&As(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Cs(b.auth,g[0])){var h=b.isJspb;Cs(h===void 0?"undefined":h?"true":"false",g[1])&&Cs(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Cs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Cs(a,b){return a===void 0||a==="undefined"?!0:a===b}
zs.prototype.getSequenceCount=zs.prototype.getSequenceCount;zs.prototype.extractMatchingEntries=zs.prototype.extractMatchingEntries;zs.prototype.smartExtractMatchingEntries=zs.prototype.smartExtractMatchingEntries;zs.prototype.storePayload=zs.prototype.storePayload;function As(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Ds(a,b){if(a)return a[b.name]}
;var Es=Tl("initial_gel_batch_timeout",2E3),Fs=Tl("gel_queue_timeout_max_ms",6E4),Gs=Math.pow(2,16)-1,Hs=Tl("gel_min_batch_size",5),Is=void 0;function Js(){this.m=this.h=this.i=0;this.j=!1}
var Ks=new Js,Ls=new Js,Ms=new Js,Ns=new Js,Os,Ps=!0,Qs=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Qs);var Rs={};function Ss(){var a=F("yt.logging.ims");a||(a=new zs,E("yt.logging.ims",a));return a}
function Ts(a,b){if(a.endpoint==="log_event"){Us();var c=Vs(a),d=Ws(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=Rq[d||""];var f,g,h,k=es().resolve(new Zr(wp))==null?void 0:(f=xp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=Xs(e.tier);if(k===400){Ys(a,b);return}}Rs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ss().storePayload(e,a.payload);Zs(b,c,e,d==="gelDebuggingEvent")}}
function Zs(a,b,c,d){function e(){$s({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Is=new a);a=Tl("tvhtml5_logging_max_batch_ads_fork")||Tl("tvhtml5_logging_max_batch")||Tl("web_logging_max_batch")||100;var g=W(),h=at(f,c.tier),k=h.m;d&&(h.j=!0);d=0;c&&(d=Ss().getSequenceCount(c));d>=1E3?e():d>=a?Os||(Os=bt(function(){e();Os=void 0},0)):g-k>=10&&(ct(f,c.tier),h.m=g)}
function Ys(a,b){if(a.endpoint==="log_event"){Us();var c=Vs(a),d=new Map;d.set(c,[a.payload]);var e=Ws(a.payload)||"";b&&(Is=new b);return new Xd(function(f,g){Is&&Is.isReady()?dt(d,Is,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Vs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Qs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function $s(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Xd(function(e,f){var g=at(c,d),h=g.j;g.j=!1;et(g.i);et(g.h);g.h=0;Is&&Is.isReady()?d===void 0&&U("enable_web_tiered_gel")?ft(e,f,a,b,c,300,h):ft(e,f,a,b,c,d,h):(ct(c,d),e())})}
function ft(a,b,c,d,e,f,g){var h=Is;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?Ss().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ss().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(Rs)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?Ss().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ss().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Rs[l];dt(k,h,a,b,c,!1,g)}
function ct(a,b){function c(){$s({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=at(a,b),e=d===Ns||d===Ms?5E3:Fs;U("web_gel_timeout_cap")&&!d.h&&(e=bt(function(){c()},e),d.h=e);
et(d.i);e=T("LOGGING_BATCH_TIMEOUT",Tl("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Ps&&(e=Es);e=bt(function(){Tl("gel_min_batch_size")>0?Ss().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Hs&&c():c()},e);
d.i=e}
function dt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={Ac:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Dc:void 0,Cc:void 0},n=a.next()){var m=w(n.value);n=m.next().value;m=m.next().value;g.batchRequest=Sb({context:Dp(b.config_||Cp())});if(!Qa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=m;(m=Qs[n])&&
gt(g.batchRequest,n,m);delete Qs[n];g.dangerousLogToVisitorSession=n==="visitorOnlyApprovedKey";ht(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Dc=function(p){U("start_client_gcf")&&ej.ra(function(){return B(function(t){return t.yield(jt(p),0)})});
k--;k||c()};
g.Ac=0;g.Cc=function(p){return function(){p.Ac++;if(e.bypassNetworkless&&p.Ac===1)try{vq(b,l,p.batchRequest,kt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Dc,p.Cc,f)),Ps=!1}catch(t){zl(t),d()}k--;k||c()}}(g);
try{vq(b,l,g.batchRequest,kt(e,g.dangerousLogToVisitorSession,g.Dc,g.Cc,f)),Ps=!1}catch(p){zl(p),d()}}}
function kt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Eg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};lt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function ht(a,b,c){lt()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Gs/2)),c++,c>Gs&&(c=1),ul("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Us(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=Sl("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(ys=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",ys),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function lt(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function bt(a,b){return U("transport_use_scheduler")===!1?Ql(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Xm(function(){if(xs().currentState==="none")a();else{var c={};xs().install((c.none={callback:a},c))}},b):Xm(a,b)}
function et(a){U("transport_use_scheduler")?ej.sa(a):window.clearTimeout(a)}
function jt(a){var b,c,d,e,f,g,h,k,l,n;return B(function(m){return m.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Ds(d,Xk),g=(f=d)==null?void 0:f.hotHashData,h=Ds(d,Wk),l=(k=d)==null?void 0:k.coldHashData,(n=es().resolve(new Zr(wp)))?g?e?m.yield(yp(n,g,e),2):m.yield(yp(n,g),2):m.D(2):m.return()):l?h?m.yield(zp(n,l,h),0):m.yield(zp(n,l),0):m.D(0)})}
function at(a,b){b=b===void 0?200:b;return a?b===300?Ns:Ls:b===300?Ms:Ks}
function Ws(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Rq[b])return b}
function Xs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var mt=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",mt);
function nt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Mr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,mt[b]=b in mt?mt[b]+1:0,a.sequence={index:mt[b],groupKey:b},d.endOfSequence&&delete mt[d.sequenceGroup]);(d.sendIsolatedPayload?Ys:Ts)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Mn(a,b,c){c=c===void 0?{}:c;var d=tr;T("ytLoggingEventsDefaultDisabled",!1)&&tr===tr&&(d=null);nt(a,b,d,c)}
;E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var ot=new Set,pt=0,qt=0,rt=0,st=[],tt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ln(a){ut(a)}
function vt(a){ut(a,"WARNING")}
function wt(a){a instanceof Error?ut(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",vt(a))}
function ut(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(pt>=5))){d=st;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(m=tm(a.args[p],"params."+p,c,m),
m>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var u="params."+p,y=wm(t[p]);c[u]=y;m+=u.length+y.length;if(m>500)break}}else c.params=wm(t)}if(d.length)for(p=0;p<d.length&&!(m=tm(d[p],"params.context."+p,c,m),m>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=pm();c=w(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Qg)){a=d.weight;break a}a=w(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=w(km);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ec[p.name])for(e=w(c.ec[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],p.params["params.error."+e[n]]=d[n+1];p.message=c.yc(f);break}p.params||(p.params={});a=pm();p.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);
if(p.sampleWeight!==0&&!ot.has(p.message)){if(g&&U("web_enable_error_204"))xt(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(qm.jb("handleError",p),U("record_app_crashed_web")&&rt===0&&p.sampleWeight===1&&(rt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),Mn("appCrashed",g)),qt++):b==="WARNING"&&qm.jb("handleWarning",p);if(U("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=w(tt);for(c=a.next();!c.done;c=a.next())if(Sn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!vl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Mn("clientError",h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&$s(void 0,void 0,!1))}U("suppress_error_204_logging")||xt(b,p)}try{ot.add(p.message)}catch(z){}pt++}}}
function xt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}bm(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function zt(){this.register=new Map}
function At(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Tg("ABORTED")}
zt.prototype.clear=function(){At(this);this.register.clear()};
var Bt=new zt;var Ct=Date.now().toString();
function Dt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Ct)for(a=1,b=0;b<Ct.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ct.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Et,Ft=D.ytLoggingDocDocumentNonce_;Ft||(Ft=Dt(),E("ytLoggingDocDocumentNonce_",Ft));Et=Ft;function Gt(a){this.h=a}
r=Gt.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new dl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&K(a,2,Nf(this.h.veType)),this.h.veCounter!==void 0&&K(a,6,Nf(this.h.veCounter)),this.h.elementIndex!==void 0&&K(a,3,Nf(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,Jf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Eg(a,dl,7,b)}this.h.youtubeData!==void 0&&Eg(a,Yk,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ht(a){return T("client-screen-nonce-store",{})[a===void 0?0:a]}
function It(a,b){b=b===void 0?0:b;var c=T("client-screen-nonce-store");c||(c={},ul("client-screen-nonce-store",c));c[b]=a}
function Jt(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Kt(a){return T(Jt(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",Kt);function Lt(){var a=T("csn-to-ctt-auth-info");a||(a={},ul("csn-to-ctt-auth-info",a));return a}
function Mt(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Nt(a){a=Ht(a===void 0?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Nt);function Ot(a,b,c){var d=Lt();(c=Nt(c))&&delete d[c];b&&(d[a]=b)}
function Pt(a){return Lt()[a]}
E("yt_logging_screen.getCttAuthInfo",Pt);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Ht(c)||b!==T(Jt(c)))if(Ot(a,d,c),It(a,c),ul(Jt(c),b),b=function(){setTimeout(function(){a&&Mn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Et,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Qt(){var a=Rb(Rt),b;return(new Xd(function(c,d){a.onSuccess=function(e){Pl(e)?c(new St(e)):d(new Tt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Tt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Tt("Request timed out","net.timeout",e))};
b=bm("//googleads.g.doubleclick.net/pagead/id",a)})).lc(function(c){if(c instanceof de){var d;
(d=b)==null||d.abort()}return be(c)})}
function Tt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(Tt,bb);function St(a){this.xhr=a}
;function Ut(){this.h=0;this.i=null}
Ut.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Vt(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Wt(a):this};
Ut.prototype.getValue=function(){return this.i};
Ut.prototype.isRejected=function(){return this.h==2};
Ut.prototype.$goog_Thenable=!0;function Wt(a){var b=new Ut;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Vt(a){var b=new Ut;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Xt(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Kl(a)?"same-origin":"cors",credentials:Kl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Yt(){return yh()||(Ge||He)&&Sn("applewebkit")&&!Sn("version")&&(!Sn("safari")||Sn("gsa/"))||bd&&Sn("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function Zt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in bl)if(bl[d]==c.embeddedPlayerMode){b=bl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function $t(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof au;this.isTimeout=a instanceof Tt&&a.errorCode=="net.timeout";this.isCanceled=a instanceof de}
x($t,bb);$t.prototype.name="BiscottiError";function au(){bb.call(this,"Biscotti ID is missing from server")}
x(au,bb);au.prototype.name="BiscottiMissingError";var Rt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},bu=null;function cu(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Yt())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if(Pb(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Zt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function nl(){var a=cu();if(a!==void 0)return be(a);bu||(bu=Qt().then(du).lc(function(b){return eu(2,b)}));
return bu}
function du(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new au;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new au;a=a.id;ol(a);bu=Vt(a);fu(18E5,2);return a}
function eu(a,b){b=new $t(b);ol("");bu=Wt(b);a>0&&fu(12E4,a-1);throw b;}
function fu(a,b){Ql(function(){Qt().then(du,function(c){return eu(b,c)}).lc(Ed)},a)}
function gu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():nl()}catch(b){return be(b)}}
;var Bb=ka(["data-"]);function hu(a){a&&(a.dataset?a.dataset[iu()]="true":Wb(a))}
function ju(a){return a?a.dataset?a.dataset[iu()]:a.getAttribute("data-loaded"):null}
var ku={};function iu(){return ku.loaded||(ku.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function lu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
lu.prototype.clone=function(){var a=new lu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=Rb(c):a[b]=c}return a};var mu=["share/get_share_panel"],nu=["share/get_web_player_share_panel"],ou=["feedback"],pu=["notification/modify_channel_preference"],qu=["browse/edit_playlist"],ru=["subscription/subscribe"],su=["subscription/unsubscribe"];var tu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",tu);function uu(a){pl(tu,arguments)}
;function vu(a,b,c){wu(a,b,c===void 0?null:c)}
function xu(a){a=yu(a);var b=document.getElementById(a);b&&(Vr(a),b.parentNode.removeChild(b))}
function zu(a,b){a&&b&&(a=""+Sa(b),(a=Au[a])&&Tr(a))}
function wu(a,b,c){c=c===void 0?null:c;var d=yu(a),e=document.getElementById(d),f=e&&ju(e),g=e&&!f;f?b&&b():(b&&(f=Rr(d,b),b=""+Sa(b),Au[b]=f),g||(e=Bu(a,d,function(){ju(e)||(hu(e),Ur(d),Ql(function(){Vr(d)},0))},c)))}
function Bu(a,b,c,d){d=d===void 0?null:d;var e=Jd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,Uk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function yu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Au={};function Cu(a){var b=Du(a),c=document.getElementById(b),d=c&&ju(c);d||c&&!d||(c=Eu(a,b,function(){if(!ju(c)){hu(c);Ur(b);var e=Ya(Vr,b);Ql(e,0)}}))}
function Eu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Uk(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Du(a){var b=Jd("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Fu(a){var b=C.apply(1,arguments);if(!Gu(a)||b.some(function(d){return!Gu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())Hu(a,c.value)}
function Hu(a,b){for(var c in b)if(Gu(b[c])){if(c in a&&!Gu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Hu(a[c],b[c])}else if(Iu(b[c])){if(c in a&&!Iu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ju(a[c],b[c])}else a[c]=b[c];return a}
function Ju(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Gu(c)?a.push(Hu({},c)):Iu(c)?a.push(Ju([],c)):a.push(c);return a}
function Gu(a){return typeof a==="object"&&!Array.isArray(a)}
function Iu(a){return typeof a==="object"&&Array.isArray(a)}
;var Ku="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Lu(a,b){var c=c===void 0?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(Cb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Nt()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Mu(a,b,f)}else Mu(a,b)}
function Mu(a,b,c){a=Nu(a);b=b?sc(b):"";c=c||5;Yt()&&Dm(a,b,c)}
function Nu(a){for(var b=w(Ku),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function Ou(a){Hp.call(this,1,arguments);this.csn=a}
x(Ou,Hp);var Qp=new Ip("screen-created",Ou),Pu=[],Qu=0,Ru=new Map,Su=new Map,Tu=new Map;
function Uu(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Vu({cttAuthInfo:Pt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&vt(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=Wu(h,b);if(k.veType&&!Su.has(l)&&!Tu.has(l)&&!e){if(!U("il_attach_cache_limit")||Ru.size<1E3){Ru.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&Ru.size>1E3&&vt(new V("IL Attach cache exceeded limit"))}h=Wu(c,b);Ru.has(h)?
Xu(c,b):Tu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(n){return n.getAsJson()})};
b==="UNDEFINED_CSN"?Yu("visualElementAttached",f,c):a?nt("visualElementAttached",c,a,f):Mn("visualElementAttached",c,f)}
function Yu(a,b,c){Pu.push({pe:a,payload:c,Mg:void 0,options:b});Qu||(Qu=Rp())}
function Sp(a){if(Pu){for(var b=w(Pu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Mn(c.pe,c.payload,c.options));Pu.length=0}Qu=0}
function Wu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Xu(a,b){a=Wu(a,b);Ru.has(a)&&(b=Ru.get(a)||[],Uu(b[0],b[1],b[2],[b[3]],!0),Ru.delete(a))}
function Vu(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Zu(){try{return!!self.localStorage}catch(a){return!1}}
;function $u(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function av(a){if(Zu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=$u(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function bv(){if(!Zu())return!1;var a=Vm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=$u(c.value),c!==void 0&&c!==a)return!0;return!1}
;function cv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(T("INNERTUBE_CLIENT_NAME")==="WEB"||T("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function dv(a){if(T("LOGGED_IN",!0)&&cv()){var b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);Cb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=pc(a),(b=qc(b))?(b=Nu(b),b=(b=Em(b)||null)?Hl(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;cv()?(d||(d=T("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Lu(a,b)}}
;function ev(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Lu(a,b);if(c)return!1;dv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=tc(a,e);dv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.de(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function fv(a){if(Pb(T("PLAYER_VARS",{}))!="1"){a&&ml();try{gu().then(function(){},function(){}),Ql(fv,18E5)}catch(b){zl(b)}}}
;var gv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function hv(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Il(a).theme;return gv.get(b)||null}catch(c){}return null}
;function iv(){this.h={};if(this.i=Gm()){var a=Em("CONSISTENCY");a&&jv(this,{encryptedTokenJarContents:a})}}
iv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Pa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];jv(this,a)}};
function jv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Dm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var kv=window.location.hostname.split(".").slice(-2).join(".");function lv(){this.j=-1;var a=T("LOCATION_PLAYABILITY_TOKEN");T("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=mv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var nv;function ov(){nv=F("yt.clientLocationService.instance");nv||(nv=new lv,E("yt.clientLocationService.instance",nv));return nv}
r=lv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.m||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.m||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,T("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=mv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Dm("YT_CL",JSON.stringify({loctok:a}),15552E3,kv,!0))};
function mv(a){return a.h===void 0?new Dn("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=mv(this))&&this.h.remove("yt-location-playability-token"):Fm("YT_CL");this.m=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;T("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function pv(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);T("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=T("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function qv(){this.h={}}
qv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
qv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
qv.prototype.set=function(a,b){this.h[a]=b};
qv.prototype.remove=function(a){delete this.h[a]};function rv(){this.mappings=new qv}
rv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
rv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new rv;function sv(a){return function(){return new a}}
;var tv={},uv=(tv.WEB_UNPLUGGED="^unplugged/",tv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",tv.WEB_UNPLUGGED_OPS="^unplugged/",tv.WEB_UNPLUGGED_PUBLIC="^unplugged/",tv.WEB_CREATOR="^creator/",tv.WEB_KIDS="^kids/",tv.WEB_EXPERIMENTS="^experiments/",tv.WEB_MUSIC="^music/",tv.WEB_REMIX="^music/",tv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",tv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",tv);
function vv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=uv[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(uv).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function wv(){}
wv.prototype.B=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Cm:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=T("INNERTUBE_CONTEXT");if(g){g=Sb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;Km();var l="USER_INTERFACE_THEME_LIGHT";Nm(165)?l="USER_INTERFACE_THEME_DARK":Nm(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:hv()||l;h.userInterfaceTheme=k;if(!f){if(k=Sm())h.connectionType=k;U("web_log_effective_connection_type")&&(k=Tm())&&(g.client.effectiveConnectionType=k)}var n;if(U("web_log_memory_total_kbytes")&&((n=D.navigator)==null?0:n.deviceMemory)){var m;n=(m=D.navigator)==null?void 0:m.deviceMemory;g.client.memoryTotalKbytes=""+n*1E6}U("web_gcf_hashes_innertube")&&(k=Ap())&&(m=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},m&&(g.client.configInfo.coldConfigData=
m),n&&(g.client.configInfo.coldHashData=n),k&&(g.client.configInfo.hotHashData=k));m=Il(D.location.href);!U("web_populate_internal_geo_killswitch")&&m.internalcountrycode&&(h.internalGeo=m.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:D.location.href},U("kevlar_woffle")&&xm.h&&(m=xm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!m.h&&m.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=ym(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(m=T("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:m})),m=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:m}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}p=
void 0}p&&(h.timeZone=p)}(p=T("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=Ul();iv.h||(iv.h=new iv);h=iv.h.h;m=[];n=0;for(var t in h)m[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:m});!U("web_prequest_context_killswitch")&&(t=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=Km();t=Nm(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=Nt())&&(g.clientScreenNonce=f):!f&&(f=Nt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=F("yt.mdx.remote.remoteClient_"))g.remoteClient=d;ov().setLocationOnInnerTubeContext(g);try{var u=Ll(),y=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(u));for(var A=z.next();!A.done;A=z.next()){var H=w(A.value),R=H.next().value,O=H.next().value;u=R;y=O;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:u,value:""+
y})}var da;if(((da=g.client)==null?void 0:da.clientName)==="TVHTML5"){var Da=T("INNERTUBE_CONTEXT");Da.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Da.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Da.adSignalsInfo.limitAdTracking)}}catch(ea){ut(ea)}z=g}else ut(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(A=this.i(a)){this.h(z,A,b);var P;b="/youtubei/v1/"+vv(this.j());
(A=(P=Ds(a.commandMetadata,$k))==null?void 0:P.apiUrl)&&(b=A);P=b;(b=T("INNERTUBE_HOST_OVERRIDE"))&&(P=String(b)+String(pc(P)));b={};U("web_api_key_killswitch")&&(b.key=T("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");P=Jl(P,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:P,gb:Xt(P),Pa:z,config:a};a.config.Sb?a.config.Sb.identity=c:a.config.Sb={identity:c};return a}ut(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(wv.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function xv(){}
x(xv,wv);function yv(){}
x(yv,xv);yv.prototype.B=function(){return{input:"/getDatasyncIdsEndpoint",gb:Xt("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
yv.prototype.j=function(){return[]};
yv.prototype.i=function(){};
yv.prototype.h=function(){};var zv={},Av=(zv.GET_DATASYNC_IDS=sv(yv),zv);function Bv(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function Cv(){var a=Bv();a.info||(a.info={});return a.info}
function Dv(a){a=Bv(a);a.metadata||(a.metadata={});return a.metadata}
function Ev(a){a=Bv(a);a.tick||(a.tick={});return a.tick}
function Fv(a){a=Bv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Gv(a){a=Fv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Hv(a){var b=Bv(a).nonce;b||(b=Dt(),Bv(a).nonce=b);return b}
;function Iv(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Jv(a){a=a||"";var b=F("ytcsi.reference");b||(Iv(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Iv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Kv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",
X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]=
"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function Lv(a,b){Hp.call(this,1,arguments);this.timer=b}
x(Lv,Hp);var Mv=new Ip("aft-recorded",Lv);var Nv=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Nv);function Ov(){this.h=0}
function Pv(){Ov.h||(Ov.h=new Ov);return Ov.h}
Ov.prototype.tick=function(a,b,c,d){Qv(this,"tick_"+a+"_"+b)||Mn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Ov.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Qv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Mn("latencyActionInfo",a,{cttAuthInfo:c}))};
Ov.prototype.jspbInfo=function(){};
Ov.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Qv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Mn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Qv(a,b){Nv[b]=Nv[b]||{count:0};var c=Nv[b];c.count++;c.time=W();a.h||(a.h=Xm(function(){var d=W(),e;for(e in Nv)Nv[e]&&d-Nv[e].time>6E4&&delete Nv[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||vt(c)),!0):!1}
;var Rv=window;function Sv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Tv(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Uv(e.requestStart),e.responseEnd=Uv(e.responseEnd),e.redirectStart=Uv(e.redirectStart),e.redirectEnd=Uv(e.redirectEnd),e.domainLookupEnd=Uv(e.domainLookupEnd),e.connectStart=Uv(e.connectStart),e.connectEnd=
Uv(e.connectEnd),e.responseStart=Uv(e.responseStart),e.secureConnectionStart=Uv(e.secureConnectionStart),e.domainLookupStart=Uv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Uv(a){return Math.round(Vv()+a)}
function Vv(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Rv.performance||Rv.mozPerformance||Rv.msPerformance||Rv.webkitPerformance||new Sv;var Wv=!1,Xv=!1,Yv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Ed,Y);function Zv(a,b){if(!U("web_csi_action_sampling_enabled")||!Bv(b).actionDisabled){var c=Jv(b||"");Fu(c.info,a);a.loadType&&(c=a.loadType,Dv(b).loadType=c);Fu(Gv(b),a);c=Hv(b);b=Bv(b).cttAuthInfo;Pv().info(a,c,b)}}
function $v(){var a,b,c,d;return((d=es().resolve(new Zr(wp))==null?void 0:(a=xp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!Bv(c).actionDisabled){var d=Hv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(es().resolve(new Zr(wp))==null?0:xp())&&!Xv&&(Xv=!0,Z("gcfl",W(),c));var f,g,h;e=(es().resolve(new Zr(wp))==null?void 0:(f=xp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=$v();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;Bv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Zv(f,c));Bv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f-=Y.timeOrigin||Y.timing.navigationStart;try{Y.mark(e,{startTime:f})}catch(k){}}e=Jv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=
e.next())f=f.value,f();e=Fv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ev(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Bv(c).cttAuthInfo;a==="_start"?(a=Pv(),Qv(a,"baseline_"+d)||Mn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Pv().tick(a,d,b,f);aw(c);return e}}}
function bw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=yr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function cw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(T("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function dw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Vv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function ew(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Uv(b.startTime)),Z("wffe",Uv(b.responseEnd)))}
function fw(a){var b=gw("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=gw(b[d],a);if(e)return e}return NaN}
function gw(a,b){if(a=Ev(b)[a])return typeof a==="number"?a:a[a.length-1]}
function aw(a){var b=gw("_start",a),c=fw(a),d=U("enable_cow_info_csi")||!Wv;b&&c&&d&&(Np(Mv,new Lv(Math.round(c-b),a)),Wv=!0)}
function hw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return b.name==="first-paint"}))return Uv(a.startTime)}a=Y.timing;
return a.le?Math.max(0,a.le):0}
;function iw(a,b){yl(function(){Jv("").info.actionType=a;b&&ul("TIMING_AFT_KEYS",b);ul("TIMING_ACTION",a);var c=cw();Object.keys(c).length>0&&Zv(c);c={isNavigation:!0,actionType:Kv[T("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=T("PREVIOUS_ACTION");d&&(c.previousAction=Kv[d]||"LATENCY_ACTION_UNKNOWN");if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Nt())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=bw();if(d===1||d===-1)c.isVisible=!0;Dv();Cv();
c.loadType="cold";d=Cv();var e=Tv(),f=Vv(),g=T("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=hw();d>0&&Z("fpt",d);d=Tv();d.isPerformanceNavigationTiming&&Zv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Vv()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&ew();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Yv)Yv.hasOwnProperty(h)&&(e=Yv[h],
dw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Zv(c);c=Fv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Gv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Dv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Ev();e=Fv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,gw(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,Fu(c,d),Fu(k,d),d=!0;d&&Zv(k)}E("ytglobal.timingready_",!0);k=T("TIMING_ACTION");F("ytglobal.timingready_")&&k&&jw()&&fw()&&aw()})()}
function jw(){return yl(function(){return kw()})()}
function lw(a,b,c){yl(Zv)(a,b,c===void 0?!1:c)}
function mw(a,b,c){return yl(Z)(a,b,c)}
function kw(){return yl(function(){return"_start"in Ev()})()}
function nw(){yl(function(){var a=Hv();requestAnimationFrame(function(){setTimeout(function(){a===Hv()&&mw("ol",void 0,void 0)},0)})})()}
var ow=window;ow.ytcsi&&(ow.ytcsi.infoGel=lw,ow.ytcsi.tick=mw);var pw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),qw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function rw(a,b,c,d){this.B=a;this.fa=b;this.m=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},Av,a.Nb)}
function sw(a,b,c,d){if(rw.h!==void 0){if(d=rw.h,a=[a!==d.B,b!==d.fa,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else rw.h=new rw(a,b,c,d)}
function tw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Cm:c;var d=uw(a,b);return d?new Xd(function(e,f){var g,h,k,l,n;return B(function(m){switch(m.h){case 1:return m.yield(d,2);case 2:g=m.i;h=g.B(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));m.D(0);break}dv(h.input);l=((k=h.gb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.m.Qe){var p=h.config,t,u=p==null?void 0:(t=p.Sb)==null?void 0:t.sessionIndex,y;p=((y=Ds(p==null?void 0:p.command,
al))==null?void 0:y.signal)==="GET_ACCOUNT_MENU"?!0:!1;u=Bm(0,{sessionIndex:u,Yc:p});n=Object.assign({},pv(l),u);m.D(4);break}return m.yield(vw(h.config,l),5);case 5:n=m.i;case 4:e(ww(a,h,n)),m.h=0}})}):be(new V("Error: No request builder found for command.",b))}
function xw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(pw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function ww(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,n,m,p,t,u,y,z,A,H,R,O,da,Da,P,ea,ja,oa,Ma,Qg,Rg,ur,vr,wr;return B(function(ha){switch(ha.h){case 1:ha.D(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Pa)==null?0:g.context)){ha.D(4);break}h=b.Pa.context;ha.D(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ha.D(4);break}n=l.value;return ha.yield(n.Sg(h),9);case 9:l=k.next();ha.D(8);break;case 4:if((m=a.i)==null||!m.Xg(b.input,b.Pa)){ha.D(12);break}return ha.yield(a.i.Og(b.input,
b.Pa),13);case 13:return p=ha.i,U("kevlar_process_local_innertube_responses_killswitch")||xw(a,p,b),ha.return(p);case 12:return(y=(u=b.config)==null?void 0:u.Vg)&&a.h.has(y)?t=a.h.get(y):(z=JSON.stringify(b.Pa),R=(H=(A=b.gb)==null?void 0:A.headers)!=null?H:{},b.gb=Object.assign({},b.gb,{headers:Object.assign({},R,c)}),O=Object.assign({},b.gb),b.gb.method==="POST"&&(O=Object.assign({},O,{body:z})),((da=b.config)==null?0:da.ue)&&mw(b.config.ue),Da=function(){return a.fa.fetch(b.input,O,b.config)},t=
Da(),y&&a.h.set(y,t)),ha.yield(t,14);
case 14:if((P=ha.i)&&"error"in P&&((ea=P)==null?0:(ja=ea.error)==null?0:ja.details))for(oa=P.error.details,Ma=w(oa),Qg=Ma.next();!Qg.done;Qg=Ma.next())Rg=Qg.value,(ur=Rg["@type"])&&qw.indexOf(ur)>-1&&(delete Rg["@type"],P=Rg);y&&a.h.has(y)&&a.h.delete(y);((vr=b.config)==null?0:vr.we)&&mw(b.config.we);if(P||(wr=a.i)==null||!wr.Fg(b.input,b.Pa)){ha.D(15);break}return ha.yield(a.i.Ng(b.input,b.Pa),16);case 16:P=ha.i;case 15:return xw(a,P,b),d(),ha.return(P||void 0)}})}
function uw(a,b){a:{a=a.B;var c,d=(c=Ds(b,al))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=Ds(b,Zk))==null?void 0:f.request)&&a.Id&&(f=a.Id[c])){e=f();break a}for(e in b)if(a.Qc[e]&&(b=a.Qc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function vw(a,b){var c,d,e,f,g,h,k;return B(function(l){if(l.h==1){e=(c=a)==null?void 0:(d=c.Sb)==null?void 0:d.sessionIndex;h=((g=Ds((f=a)==null?void 0:f.command,al))==null?void 0:g.signal)==="GET_ACCOUNT_MENU"?!0:!1;var n=l.yield;var m=Bm(0,{sessionIndex:e,Yc:h});if(!(m instanceof Xd)){var p=new Xd(Ed);Yd(p,2,m);m=p}return n.call(l,m,2)}k=l.i;return l.return(Promise.resolve(Object.assign({},pv(b),k)))})}
;var yw=new Yr("INNERTUBE_TRANSPORT_TOKEN");function zw(){}
x(zw,xv);zw.prototype.j=function(){return ru};
zw.prototype.i=function(a){return Ds(a,ll)||void 0};
zw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(zw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Aw(){}
x(Aw,xv);Aw.prototype.j=function(){return su};
Aw.prototype.i=function(a){return Ds(a,kl)||void 0};
Aw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Aw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Bw=new Yr("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Cw(a){this.o=a}
x(Cw,xv);Cw.prototype.j=function(){return mu};
Cw.prototype.i=function(a){return Ds(a,fl)||Ds(a,gl)||Ds(a,el)};
Cw.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.o)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.o.i(b.clientParamIdentifier)}};
Cw[Xr]=[Bw];function Dw(){}
x(Dw,xv);Dw.prototype.j=function(){return ou};
Dw.prototype.i=function(a){return Ds(a,cl)||void 0};
Dw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Dw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ew(){}
x(Ew,xv);Ew.prototype.j=function(){return pu};
Ew.prototype.i=function(a){return Ds(a,jl)||void 0};
Ew.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Fw(){}
x(Fw,xv);Fw.prototype.j=function(){return qu};
Fw.prototype.i=function(a){return Ds(a,il)||void 0};
Fw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Gw(){}
x(Gw,xv);Gw.prototype.j=function(){return nu};
Gw.prototype.i=function(a){return Ds(a,hl)};
Gw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Hw(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
x(Hw,V);var Iw=new Yr("NETWORK_SLI_TOKEN");function Jw(a){this.h=a}
Jw.prototype.fetch=function(a,b,c){var d=this,e;return B(function(f){e=Kw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){vt(g);
if((c==null?0:c.Od)&&g instanceof Hw&&g.errorType===1)return Promise.reject(g)}))})};
function Kw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=oq(c));return new window.Request(b,a)}
Jw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.ee)&&a.ok)return bh(b.ee,d);d=d.replace(")]}'","");if((b==null?0:b.Od)&&d)try{var e=JSON.parse(d)}catch(g){throw new Hw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Jg(),c=c.then(function(d){vt(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Jw[Xr]=[new Zr(Iw)];var Lw=new Yr("NETWORK_MANAGER_TOKEN");var Mw;function Nw(){var a,b,c;return B(function(d){if(d.h==1)return a=es().resolve(yw),a?d.yield(tw(a),2):(vt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return vt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Hg;return d.return(c)}vt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Ow(){var a;return(a=T("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Pw=D.caches,Qw;function Rw(a){var b=a.indexOf(":");return b===-1?{gd:a}:{gd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Sw(){return B(function(a){if(Qw!==void 0)return a.return(Qw);Qw=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Pw.open("test-only"),4);case 4:return d.yield(Pw.delete("test-only"),5);case 5:d.h=3;d.m=0;break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Qw)})}
function Tw(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(Sw(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Pw.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Rw(f),h=g.datasyncId,!h||a.includes(h)||b.push(Pw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Uw(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(Sw(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Vm("cache contains other");return h.yield(Pw.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Rw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Vw(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Ww(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Xw(a){if(Vw()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ww(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Yw(){if(!Vw())return!1;var a=Vm(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Ww(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Zw(){Nw().then(function(a){a&&(bp(a),Tw(a),av(a),Xw(a))})}
function $w(){var a=new gr;ej.ra(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.D(2);break}b=Vm("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];bp(h);Tw(h);av(h);Xw(h);return g.return()}c=bv();d=Yw();return g.yield(Uw(),3);case 3:return e=g.i,g.yield(cp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.xa()?Zw():a.h.add("publicytnetworkstatus-online",Zw,!0,void 0,void 0),g.h=0}})})}
;function ax(){this.state=1;this.h=null}
r=ax.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Tk(a.interpreterSafeUrl).toString());bx(this,d,e,a.program,b,c)}else vt(Error("Cannot initialize botguard without program"))};
function bx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,vu(c,function(){window[g]?cx(a,d,g,e):(a.state=3,xu(c),vt(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Jd("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?cx(a,d,g,e):(a.state=4,vt(new V("Unable to load Botguard from JS")))):vt(new V("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function cx(a,b,c,d){a.state=5;try{var e=new Pi({program:b,Ud:c,se:U("att_web_record_metrics"),Fa:"aGIf"});e.Me.then(function(){a.state=6;d&&d(b)});
a.Gc(e)}catch(f){a.state=7,f instanceof Error&&vt(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Jc()?this.wd({Rc:a}):null};
r.dispose=function(){this.Gc(null);this.state=8};
r.Jc=function(){return!!this.h};
r.wd=function(a){return this.h.qd(a)};
r.Gc=function(a){Cc(this.h);this.h=a};var dx=[],ex=!1;function fx(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Yt()){var a=T("PLAYER_VARS",{});if(Pb(a)!="1"&&!Zt(a)){var b=function(){ex=!0;"google_ad_status"in window?ul("DCLKSTAT",1):ul("DCLKSTAT",2)};
try{vu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}dx.push(ej.ra(function(){if(!(ex||"google_ad_status"in window)){try{zu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ex=!0;ul("DCLKSTAT",3)}},5E3))}}}
function gx(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;function hx(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ix(){ax.apply(this,arguments)}
x(ix,ax);ix.prototype.Gc=function(a){var b;(b=hx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.qd.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
ix.prototype.Jc=function(){return!!hx()};
ix.prototype.wd=function(a){return hx().bgvmc(a)};function jx(a){ps.call(this,a===void 0?"document_active":a);var b=this;this.m=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.F},{from:"document_active",to:"document_disposed",action:this.B},{from:"document_disposed_preventable",to:"document_disposed",action:this.B},{from:"document_disposed_preventable",to:"flush_logs",action:this.o},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.o},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(jx,ps);jx.prototype.F=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
jx.prototype.B=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
jx.prototype.o=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
jx.prototype.i=function(){this.h=new Map};function kx(a){ps.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.B},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.o},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.o},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.B},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.B},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(kx,ps);kx.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
kx.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
kx.prototype.B=function(a,b){a(b==null?void 0:b.event)};
kx.prototype.o=function(a,b){a(b==null?void 0:b.event)};function lx(){this.m=new jx;this.B=new kx}
lx.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.m.install(c)});
a.forEach(function(c){b.B.install(c)})};function mx(){this.m=[];this.i=new Map;this.h=new Map;this.j=new Set}
mx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Nt(c===void 0?0:c)){a=this.client;d=new Gt({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=Wu(d,c);Su.set(f,!0);Xu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Vu({cttAuthInfo:Pt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Yu("visualElementGestured",f,d):a?nt("visualElementGestured",d,a,f):Mn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
mx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Gt({trackingParams:a}),b,c===void 0?0:c)};
mx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.m.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Nt(d);a||(a=(a=Kt(d===void 0?0:d))?new Gt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Vu({cttAuthInfo:Pt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Yu("visualElementStateChanged",d,b):a?nt("visualElementStateChanged",b,a,d):Mn("visualElementStateChanged",b,d))}};
function nx(a,b){if(b===void 0)for(var c=Mt(),d=0;d<c.length;d++)c[d]!==void 0&&nx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Uu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function ox(){lx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||Xm(px)}
x(ox,lx);ox.prototype.j=function(){Mn("finalPayload",{csn:Nt()})};
ox.prototype.h=function(){At(Bt)};
ox.prototype.i=function(){var a=nx;mx.h||(mx.h=new mx);a(mx.h)};
function px(){var a=T("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Zi();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Mn("genericClientExperimentEvent",{eventType:c});delete tl.CLIENT_EXPERIMENT_EVENTS}}
;function qx(){}
function rx(){var a=F("ytglobal.storage_");a||(a=new qx,E("ytglobal.storage_",a));return a}
qx.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(sx()):d.return()})};
function sx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",qx);function Kn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Kn.prototype.Ha=function(a){this.handleError(a)};
Kn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":tx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function tx(a,b){rx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ux(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ux(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ux(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var vx={},wx=(vx["api.invalidparam"]=2,vx.auth=150,vx["drm.auth"]=150,vx["heartbeat.net"]=150,vx["heartbeat.servererror"]=150,vx["heartbeat.stop"]=150,vx["html5.unsupportedads"]=5,vx["fmt.noneavailable"]=5,vx["fmt.decode"]=5,vx["fmt.unplayable"]=5,vx["html5.missingapi"]=5,vx["html5.unsupportedlive"]=5,vx["drm.unavailable"]=5,vx["mrm.blocked"]=151,vx["embedder.identity.denied"]=152,vx);var xx=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function yx(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function zx(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(xx);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ax(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Bx(a){G.call(this);var b=this;this.api=a;this.W=this.o=!1;this.v=[];this.K={};this.j=[];this.i=[];this.X=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=U("web_player_split_event_bus_iframe");this.m=T("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.F=function(c){a:if(!(b.m!=="*"&&c.origin!==b.m||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.m=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.o){b.W=!0;b.o=!1;b.sendMessage("initialDelivery",Cx(b));b.sendMessage("onReady");e=w(b.v);for(d=e.next();!d.done;d=e.next())Dx(b,d.value);b.v=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.X&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.K[e]||e==="onReady"||
(c=Ex(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.K[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&yx(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=zx(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=zx(g);break;case "loadPlaylist":case "cuePlaylist":g=Ax(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);yx(e)&&Fx(b,Cx(b))}}}};
Gx.addEventListener("message",this.F);if(a=T("WIDGET_ID"))this.sessionId=a;Hx(this,"onReady",function(){b.o=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.X=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?wx[c]||d:d;b.sendMessage("onError",b.errorCode.toString())}});
Hx(this,"onVideoProgress",this.He.bind(this));Hx(this,"onVolumeChange",this.Ie.bind(this));Hx(this,"onApiChange",this.Ae.bind(this));Hx(this,"onPlaybackQualityChange",this.Ee.bind(this));Hx(this,"onPlaybackRateChange",this.Fe.bind(this));Hx(this,"onStateChange",this.Ge.bind(this));Hx(this,"onWebglSettingsChanged",this.Je.bind(this));Hx(this,"onCaptionsTrackListChanged",this.Be.bind(this));Hx(this,"captionssettingschanged",this.Ce.bind(this))}
x(Bx,G);function Fx(a,b){a.sendMessage("infoDelivery",b)}
r=Bx.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.W?Dx(this,a):this.v.push(a)};
function Ex(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Hx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Cx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Ge=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Fx(this,a)};
r.Ee=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Fx(this,a)};
r.Fe=function(a){Fx(this,{playbackRate:a})};
r.Ae=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.Ie=function(){Fx(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.He=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Fx(this,a)};
r.Je=function(){Fx(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Be=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Fx(this,a)}};
r.Ce=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Fx(this,a)}};
function Dx(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){vt(d)}}}
r.da=function(){G.prototype.da.call(this);Gx.removeEventListener("message",this.F);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Gx=window;function Ix(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=U("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ja){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Jx(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Kx(g,f))&&Lx(d,g,f))}}}}}};
Mx.addEventListener("message",this.i);Lx(this,"RECEIVING")}
x(Ix,G);r=Ix.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.De.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.De=function(a,b){this.ja||Lx(this,a,Nx(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Jx(a,b){switch(a){case "loadVideoById":return[zx(b)];case "cueVideoById":return[zx(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Ax(b)];case "cuePlaylist":return[Ax(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Kx(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Nx(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Lx(a,b,c){a.ja||(b={id:a.id,command:b},c&&(b.data=c),Ox.postMessage(JSON.stringify(b),a.origin))}
r.da=function(){Mx.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.da.call(this)};
var Mx=window,Ox=window.parent;var Px=new ix;function Qx(){return Px.Jc()}
function Rx(a){a=a===void 0?{}:a;return Px.invoke(a)}
;function Sx(a,b,c,d,e){G.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.nc=e;this.Ka=!1;this.api={};this.ia=this.o=null;this.U=new M;this.h={};this.X=this.qa=this.elementId=this.zb=this.config=null;this.W=!1;this.j=this.F=null;this.za={};this.oc=["onReady"];this.lastError=null;this.Qb=NaN;this.K={};this.ga=0;this.i=this.m=a;Ec(this,this.U);Tx(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Ux(this),Vx(this))}
x(Sx,G);r=Sx.prototype;r.getId=function(){return this.v};
r.loadNewVideoConfig=function(a){if(!this.ja){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof lu||(b=new lu(b));this.config=b;this.setConfig(a);Vx(this);this.isReady()&&Wx(this)}};
function Ux(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.zb=a;this.config=Xx(a);Ux(this);if(!this.qa){var b;this.qa=Yx(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Xi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Xi(Number(a)||a))};
function Wx(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Zx(a){var b=!0,c=$x(a);c&&a.config&&(b=c.dataset.version===ay(a));return b&&!!F("yt.player.Application.create")}
function Vx(a){if(!a.ja&&!a.W){var b=Zx(a);if(b&&($x(a)?"html5":null)==="html5")a.X="html5",a.isReady()||by(a);else if(cy(a),a.X="html5",b&&a.j&&a.m)a.m.appendChild(a.j),by(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=dy(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?Xx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.nc);by(a)};
a.W=!0;b?a.F():(vu(ay(a),a.F),(b=ey(a))&&Cu(b||""),fy(a)&&!c&&E("yt.player.Application.create",null))}}}
function $x(a){var b=Id(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function by(a){if(!a.ja){var b=$x(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!dy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}gy(a)}else a.Qb=setTimeout(function(){by(a)},50)}}
function gy(a){Tx(a);a.Ka=!0;var b=$x(a);if(b){a.o=hy(a,b,"addEventListener");a.ia=hy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=hy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.o&&a.o(g,a.h[g]);Wx(a);a.qa&&a.qa(a.api);a.U.jb("onReady",a.api)}
function hy(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.v}),e.level="WARNING",e;}}}
function Tx(a){a.Ka=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.o=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.zb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Ka};
r.addEventListener=function(a,b){var c=this,d=Yx(this,b);d&&(Cb(this.oc,a)>=0||this.h[a]||(b=iy(this,a),this.o&&this.o(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ja||(b=Yx(this,b))&&this.U.unsubscribe(a,b)};
function Yx(a,b){var c=b;if(typeof b==="string"){if(a.za[b])return a.za[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.za[b]=c}return c?c:null}
function iy(a,b){function c(d){var e=setTimeout(function(){if(!a.ja){try{a.U.jb(b,d!=null?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.v,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.K,String(e))}
return a.h[b]=c}
r.getPlayerType=function(){return this.X||($x(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function cy(a){a.cancel();Tx(a);a.X=null;a.config&&(a.config.loaded=!1);var b=$x(a);b&&(Zx(a)||!fy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.F&&zu(ay(this),this.F);clearTimeout(this.Qb);this.W=!1};
r.da=function(){cy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.za=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.zb=this.config=this.api=null;delete this.m;delete this.i;G.prototype.da.call(this)};
function fy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function ay(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ey(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function dy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Xx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Rb(e):e}return b}
;var jy={},ky="player_uid_"+(Math.random()*1E9>>>0);function ly(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Id(c):c;var e=ky+"_"+Sa(c),f=jy[e];if(f&&d)return my(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Sx(c,e,a,b,void 0);jy[e]=f;f.addOnDisposeCallback(function(){delete jy[f.getId()]});
return f.api}
function my(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ny=null,oy=null;
function py(){nw();var a=Km(),b=Nm(119),c=window.devicePixelRatio>1;if(document.body&&mj(document.body,"exp-invert-logo"))if(c&&!mj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!mj(d,"inverted-hdpi")){var e=kj(d);lj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&mj(document.body,"inverted-hdpi")&&nj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Om(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Hm[b]:(c=d.toString(16),Hm[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Hm)Hm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Hm[f])));var f=d.join("&");Dm(b,f,63072E3,a.i,c)}}
function qy(){ry()}
function sy(){mw("ep_init_pr");ry()}
function ry(){var a=ny.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function ty(){ny&&ny.sendAbandonmentPing&&ny.sendAbandonmentPing();T("PL_ATT")&&Px.dispose();for(var a=ej,b=0,c=dx.length;b<c;b++)a.sa(dx[b]);dx.length=0;xu("//static.doubleclick.net/instream/ad_status.js");ex=!1;ul("DCLKSTAT",0);Dc(oy);ny&&(ny.removeEventListener("onVideoDataChange",qy),ny.destroy())}
;E("yt.setConfig",ul);E("yt.config.set",ul);E("yt.setMsg",uu);E("yt.msgs.set",uu);E("yt.logging.errors.log",ut);
E("writeEmbed",function(){var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}fv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=T("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);iw("embed",["ol"]);c=Ow();if(!c.serializedForcedExperimentIds){var d=Il(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&iw("watch",["pbs","pbu","pbp"]);ny=ly(a,c);ny.addEventListener("onVideoDataChange",qy);ny.addEventListener("onReady",sy);a=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?oy=new Bx(ny):T("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(oy=new Ix(ny,a,b));fx();U("ytidb_create_logger_embed_killswitch")||Jn();a={};ox.h||(ox.h=new ox);ox.h.install((a.flush_logs={callback:function(){$s()}},a));
sr();U("ytidb_clear_embedded_player")&&ej.ra(function(){var f,g;if(!Mw){var h=es();as(h,{jc:Lw,td:Jw});var k={Qc:{feedbackEndpoint:sv(Dw),modifyChannelNotificationPreferenceEndpoint:sv(Ew),playlistEditEndpoint:sv(Fw),shareEntityEndpoint:sv(Cw),subscribeEndpoint:sv(zw),unsubscribeEndpoint:sv(Aw),webPlayerShareEntityServiceEndpoint:sv(Gw)}},l=ov(),n={};l&&(n.client_location=l);f===void 0&&(f=Am());g===void 0&&(g=h.resolve(Lw));sw(k,g,f,n);as(h,{jc:yw,ud:rw.h});Mw=h.resolve(yw)}$w()})});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||Qx);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||Rx);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||gx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||ev);E("yt.util.activity.init",F("yt.util.activity.init")||Jr);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||Mr);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||Kr);window.addEventListener("load",yl(function(){py()}));
window.addEventListener("pageshow",yl(function(a){a.persisted||py()}));
window.addEventListener("pagehide",yl(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?ty():a.persisted||ty()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=vl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?ut(e):vt(e))};
me=wt;window.addEventListener("unhandledrejection",function(a){wt(a.reason)});
Db(T("ERRORS")||[],function(a){ut.apply(null,a)});
ul("ERRORS",[]);}).call(this);
