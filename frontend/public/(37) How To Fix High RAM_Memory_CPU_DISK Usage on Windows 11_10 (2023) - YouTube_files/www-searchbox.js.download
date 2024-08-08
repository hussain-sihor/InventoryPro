(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ea=b.prototype}
function qa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ra(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
qa.prototype.A=function(a){this.l=a};
function ta(a,b){a.i={Kd:b,ee:!0};a.g=a.o||a.s}
qa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function z(a,b,c){a.g=c;return{value:b}}
qa.prototype.M=function(a){this.g=a};
function ua(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function va(a){a.o=0;var b=a.i.Kd;a.i=null;return b}
function wa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.ee?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function xa(a){this.g=new qa;this.l=a}
function ya(a,b){ra(a.g);var c=a.g.m;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ta(a.g,g),Aa(a)}a.g.m=null;d.call(a.g,f);return Aa(a)}
function Aa(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ta(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ee)throw b.Kd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){ra(a.g);a.g.m?b=za(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Aa(a));return b};
this.throw=function(b){ra(a.g);a.g.m?b=za(a,a.g.m["throw"],b,a.g.A):(ta(a.g,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ca(new Ba(new xa(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if(typeof l==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.cc(h.resolve,h.reject)};
b.prototype.O=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return typeof r=="function"?function(t){try{k(r(t))}catch(u){m(u)}}:q}
var k,m,p=new b(function(r,q){k=r;m=q});
this.cc(l(g,k),l(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;this.l==null?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).cc(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function p(t){return function(u){r[t]=u;q--;q==0&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).cc(p(r.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||pa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return k==="object"&&l!==null||k==="function"}
function e(l){if(!ia(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(m.get(l)!=2||m.get(k)!=3)return!1;m.delete(l);m.set(k,4);return!m.has(l)&&m.get(k)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ia(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ia(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;k=="object"||k=="function"?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&ia(h[0],k))for(h=0;h<m.length;h++){var p=m[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:m,index:h,entry:p}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if(l.get(h)!="s"||l.size!=1||l.get({x:4})||l.set({x:4},"t")!=l||l.size!=2)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=h===0?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Fa(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ha(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ia(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function La(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ma:Na;return E.apply(null,arguments)}
function F(){return Date.now()}
function G(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.Ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Oa(a){return a}
;function Pa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Pa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
H(Pa,Error);Pa.prototype.name="CustomError";function Qa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Ra=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Sa(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ta(a){return{valueOf:a}.valueOf()}
;var Ua;function Wa(){if(Ua===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Oa,createScript:Oa,createScriptURL:Oa})}catch(c){C.console&&C.console.error(c.message)}Ua=a}else Ua=a}return Ua}
;function Xa(a){this.g=a}
Xa.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Xa&&a.constructor===Xa)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Wa();a=b?b.createScriptURL(a):a;return new Xa(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g};
var bb=new ab("about:invalid#zClosurez");function cb(a){this.jg=a}
function db(a){return new cb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var eb=[db("data"),db("http"),db("https"),db("mailto"),db("ftp"),new cb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function hb(a){for(var b=Da.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""))}
var ib=Ta(function(){return typeof URL==="function"}),jb=["data:",
"http:","https:","mailto:","ftp:"],kb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function lb(a){if(a instanceof ab)if(a instanceof ab)a=a.g;else throw Error("");else a=kb.test(a)?a:void 0;return a}
;function mb(a,b){b=lb(b);b!==void 0&&(a.href=b)}
;var nb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},pb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function qb(a,b){b=nb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function rb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function sb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function tb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function wb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return wb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var xb={};function yb(a){this.g=a}
yb.prototype.toString=function(){return this.g.toString()};
function zb(a){if(a instanceof yb&&a.constructor===yb)return a.g;Ia(a);return"type_error:SafeHtml"}
function Ab(a){var b=Wa();a=b?b.createHTML(a):a;return new yb(a,xb)}
;function Bb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=zb(b)}
;function Cb(){throw Error("unknown trace type");}
;function Db(a,b){a.src=Ya(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Eb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Fb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Gb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hb(a){return a?decodeURI(a):a}
function Ib(a){return Hb(a.match(Gb)[3]||null)}
function Jb(a){var b=a.match(Gb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Kb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
function Nb(a,b){b=Mb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ob(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Pb=/#|$/,Qb=/[?&]($|#)/;function Rb(){this.Za=this.Za;this.m=this.m}
Rb.prototype.Za=!1;Rb.prototype.dispose=function(){this.Za||(this.Za=!0,this.Ba())};
Rb.prototype[Symbol.dispose]=function(){this.dispose()};
Rb.prototype.addOnDisposeCallback=function(a,b){this.Za?b!==void 0?a.call(b):a():(this.m||(this.m=[]),this.m.push(b!==void 0?E(a,b):a))};
Rb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Sb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Sb.prototype.stopPropagation=function(){this.i=!0};
Sb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Tb=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Ub=Ha(610401301,!1),Vb=Ha(188588736,!0),Wb=Ha(645172343,Ha(1,!0));function Xb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=C.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Ub?Yb?Yb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Xb().indexOf(a)!=-1}
;function ac(){return Ub?!!Yb&&Yb.brands.length>0:!1}
function bc(){return ac()?!1:I("Opera")}
function cc(){return ac()?!1:I("Trident")||I("MSIE")}
function dc(){return ac()?$b("Microsoft Edge"):I("Edg/")}
function ec(){return I("Safari")&&!(fc()||(ac()?0:I("Coast"))||bc()||(ac()?0:I("Edge"))||dc()||(ac()?$b("Opera"):I("OPR"))||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))}
function fc(){return ac()?$b("Chromium"):(I("Chrome")||I("CriOS"))&&!(ac()?0:I("Edge"))||I("Silk")}
function gc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function hc(){var a=Xb();if(cc()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=gc(b);return bc()?a(["Version","Opera"]):
(ac()?0:I("Edge"))?a(["Edge"]):dc()?a(["Edg"]):I("Silk")?a(["Silk"]):fc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function ic(){return I("Gecko")&&!(Xb().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge")}
;function jc(){return Ub&&Yb&&Yb.platform?Yb.platform==="Android":I("Android")}
function kc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function lc(a){lc[" "](a);return a}
lc[" "]=function(){};var mc=cc(),nc=I("Edge"),oc=ic(),pc=jc();function qc(a,b){Sb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
H(qc,Sb);var rc={2:"touch",3:"pen",4:"mouse"};
qc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{lc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:rc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&qc.Ea.preventDefault.call(this)};
qc.prototype.stopPropagation=function(){qc.Ea.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
qc.prototype.preventDefault=function(){qc.Ea.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var sc="closure_listenable_"+(Math.random()*1E6|0);var tc=0;function uc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.lc=e;this.key=++tc;this.Sb=this.Zb=!1}
function vc(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.lc=null}
;function wc(a){this.src=a;this.listeners={};this.g=0}
wc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=xc(a,b,d,e);g>-1?(b=a[g],c||(b.Zb=!1)):(b=new uc(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
wc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xc(e,b,c,d);return b>-1?(vc(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function yc(a,b){var c=b.type;c in a.listeners&&qb(a.listeners[c],b)&&(vc(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function xc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.lc==d)return e}return-1}
;var zc="closure_lm_"+(Math.random()*1E6|0),Ac={},Bc=0;function Cc(a,b,c,d,e){if(d&&d.once)Dc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Cc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.ra(b,c,La(d)?!!d.capture:!!d,e):Fc(a,b,c,!1,d,e)}
function Fc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=Gc(a);h||(a[zc]=h=new wc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Hc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tb||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ic(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Bc++}}
function Hc(){function a(c){return b.call(a.src,a.listener,c)}
var b=Jc;return a}
function Dc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.g.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):Fc(a,b,c,!0,d,e)}
function Kc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Kc(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=Ec(c),a&&a[sc])?a.g.remove(String(b),c,d,e):a&&(a=Gc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xc(b,c,d,e)),(c=a>-1?b[a]:null)&&Lc(c))}
function Lc(a){if(typeof a!=="number"&&a&&!a.Sb){var b=a.src;if(b&&b[sc])yc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ic(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Bc--;(c=Gc(b))?(yc(c,a),c.g==0&&(c.src=null,b[zc]=null)):vc(a)}}}
function Ic(a){return a in Ac?Ac[a]:Ac[a]="on"+a}
function Jc(a,b){if(a.Sb)a=!0;else{b=new qc(b,this);var c=a.listener,d=a.lc||a.src;a.Zb&&Lc(a);a=c.call(d,b)}return a}
function Gc(a){a=a[zc];return a instanceof wc?a:null}
var Mc="__closure_events_fn_"+(Math.random()*1E9>>>0);function Ec(a){if(typeof a==="function")return a;a[Mc]||(a[Mc]=function(b){return a.handleEvent(b)});
return a[Mc]}
;function Nc(){Rb.call(this);this.g=new wc(this);this.B=this;this.u=null}
H(Nc,Rb);Nc.prototype[sc]=!0;Nc.prototype.addEventListener=function(a,b,c,d){Cc(this,a,b,c,d)};
Nc.prototype.removeEventListener=function(a,b,c,d){Kc(this,a,b,c,d)};
function Oc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Sb(b,a):b instanceof Sb?b.target=b.target||a:(e=b,b=new Sb(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Pc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Pc(g,c,!0,b)&&e,b.i||(e=Pc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Pc(g,c,!1,b)&&e}
Nc.prototype.Ba=function(){Nc.Ea.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,vc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Nc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Pc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,l=g.lc||g.src;g.Zb&&yc(a.g,g);e=h.call(l,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Qc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Qc.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Rc(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Sc(){}
;function Tc(){var a=Uc;return document.createRange().createContextualFragment(zb(Ab(a[0])))}
;function Vc(a,b){var c=b.createRange();c.selectNode(b.body);a=Ab(a);return c.createContextualFragment(zb(a))}
;function Wc(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function Xc(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var Yc="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
Zc=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["IMG",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["VIDEO",new Map([["src",{ja:5}]])],["AUDIO",new Map([["src",{ja:5}]])]],$c="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
ad=[["dir",{ja:3,conditions:Ta(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Ta(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Ta(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Ta(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],bd=new function(){var a=new Set($c),b=new Map(ad),c=new Map(Zc);
this.l=new Set(Yc);this.g=c;this.i=a;this.m=b};function cd(){this.g=bd}
function dd(a,b){var c=document.implementation.createHTMLDocument("");a=ed(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Ab(c)}
function ed(a,b,c){b=Vc(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(Xc(h))if(h=Wc(h),h===null)h=2;else{var l=a.g;h=h!=="FORM"&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(Xc(d))g=fd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function fd(a,b,c){var d=Wc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(l==null?0:l.has(f))?l.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(l=h.conditions){l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value);k=m.next().value;m=m.next().value;var p=void 0;if((k=(p=b.getNamedItem(k))==null?void 0:p.value)&&!m.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ja){case 1:gd(c,f,g);break;
case 2:a:if(h=void 0,ib){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}gd(c,f,h!==void 0&&jb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:gd(c,f,g.toLowerCase());break;case 4:gd(c,f,g);break;case 5:gd(c,f,g);break;case 6:gd(c,f,g)}}return c}
function gd(a,b,c){a.setAttribute(b,c)}
var hd=Ta(function(){return new cd});function id(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function jd(a){var b=Da.apply(1,arguments);if(b.length===0)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function kd(a,b){a=id(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];h!==null&&h!==void 0&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function ld(a,b){this.width=a;this.height=b}
n=ld.prototype;n.clone=function(){return new ld(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function md(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function nd(a){typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(od||(od=pd()),od(a)):C.setImmediate(a)}
var od;function pd(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=md("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=E(function(l){if((h=="*"||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Fd;c.Fd=null;e()}};
return function(e){d.next={Fd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function qd(a){C.setTimeout(function(){throw a;},0)}
;function rd(){this.l=this.g=null}
rd.prototype.add=function(a,b){var c=sd.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
rd.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var sd=new Qc(function(){return new td},function(a){return a.reset()});
function td(){this.next=this.scope=this.g=null}
td.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
td.prototype.reset=function(){this.next=this.scope=this.g=null};var ud,vd=!1,wd=new rd;function xd(a,b){ud||yd();vd||(ud(),vd=!0);wd.add(a,b)}
function yd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);ud=function(){a.then(zd)}}else ud=function(){nd(zd)}}
function zd(){for(var a;a=wd.remove();){try{a.g.call(a.scope)}catch(b){qd(b)}Rc(sd,a)}vd=!1}
;function Ad(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Sc)try{var b=this;a.call(void 0,function(c){Bd(b,2,c)},function(c){Bd(b,3,c)})}catch(c){Bd(this,3,c)}}
function Cd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Cd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Dd=new Qc(function(){return new Cd},function(a){a.reset()});
function Ed(a,b,c){var d=Dd.get();d.i=a;d.l=b;d.context=c;return d}
Ad.prototype.then=function(a,b,c){return Fd(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Ad.prototype.$goog_Thenable=!0;Ad.prototype.cancel=function(a){if(this.g==0){var b=new Gd(a);xd(function(){Hd(this,b)},this)}};
function Hd(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?Hd(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Id(c),Jd(c,e,3,b)))}a.i=null}else Bd(a,3,b)}
function Kd(a,b){a.l||a.g!=2&&a.g!=3||Ld(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Fd(a,b,c,d){var e=Ed(null,null,null);e.g=new Ad(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);l===void 0&&h instanceof Gd?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Kd(a,e);return e.g}
Ad.prototype.B=function(a){this.g=0;Bd(this,2,a)};
Ad.prototype.D=function(a){this.g=0;Bd(this,3,a)};
function Bd(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Ad){Kd(d,Ed(e||Sc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var l=d.then;if(typeof l==="function"){Md(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Ld(a),b!=3||c instanceof Gd||Nd(a,c))}}
function Md(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ld(a){a.s||(a.s=!0,xd(a.A,a))}
function Id(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Ad.prototype.A=function(){for(var a;a=Id(this);)Jd(this,a,this.g,this.u);this.s=!1};
function Jd(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Od(b,c,d);else try{b.m?b.i.call(b.context):Od(b,c,d)}catch(e){Pd.call(null,e)}Rc(Dd,b)}
function Od(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Nd(a,b){a.o=!0;xd(function(){a.o&&Pd.call(null,b)})}
var Pd=qd;function Gd(a){Pa.call(this,a)}
H(Gd,Pa);Gd.prototype.name="cancel";function Qd(a,b){Nc.call(this);this.i=a||1;this.l=b||C;this.o=E(this.Sg,this);this.s=F()}
H(Qd,Nc);n=Qd.prototype;n.enabled=!1;n.Ka=null;n.Sg=function(){if(this.enabled){var a=F()-this.s;a>0&&a<this.i*.8?this.Ka=this.l.setTimeout(this.o,this.i-a):(this.Ka&&(this.l.clearTimeout(this.Ka),this.Ka=null),Oc(this,"tick"),this.enabled&&(Rd(this),this.start()))}};
n.start=function(){this.enabled=!0;this.Ka||(this.Ka=this.l.setTimeout(this.o,this.i),this.s=F())};
function Rd(a){a.enabled=!1;a.Ka&&(a.l.clearTimeout(a.Ka),a.Ka=null)}
n.Ba=function(){Qd.Ea.Ba.call(this);Rd(this);delete this.l};var Sd=kc()||I("iPod"),Td=I("iPad");!I("Android")||fc();fc();var Ud=ec()&&!(kc()||I("iPad")||I("iPod"));var Vd={},Wd=null;
function Xd(a,b){Ja(a);b===void 0&&(b=0);if(!Wd){Wd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));Vd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];Wd[h]===void 0&&(Wd[h]=g)}}}b=Vd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Yd=typeof Uint8Array!=="undefined",Zd=!mc&&typeof btoa==="function";var $d;function ae(){var a=Error();Eb(a,"incident");qd(a)}
function be(a){a=Error(a);Eb(a,"warning");return a}
;function ce(){return typeof BigInt==="function"}
;var de=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ee(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var fe=ee(),ge=ee("2ex"),he=ee("1oa");Math.max.apply(Math,x(Object.values({th:1,rh:2,qh:4,wh:8,vh:16,uh:32,lh:64,yh:128,ph:256,oh:512,sh:1024,mh:2048,xh:4096,nh:8192})));var ie=de?function(a,b){a[fe]|=b}:function(a,b){a.g!==void 0?a.g|=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},je=de?function(a,b){a[fe]&=~b}:function(a,b){a.g!==void 0&&(a.g&=~b)},ke=de?function(a){return a[fe]|0}:function(a){return a.g|0},le=de?function(a){return a[fe]}:function(a){return a.g},me=de?function(a,b){a[fe]=b}:function(a,b){a.g!==void 0?a.g=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function ne(a,b){me(b,(a|0)&-14591)}
function oe(a,b){me(b,(a|34)&-14557)}
;var pe={},qe={};function re(a){return!(!a||typeof a!=="object"||a.g!==qe)}
function se(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function te(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=ke(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;me(a,d|1);return!0}
var ue,ve=[];me(ve,55);ue=Object.freeze(ve);function we(a){if(a&2)throw Error();}
;var xe=0,ye=0;function ze(a){var b=a>>>0;xe=b;ye=(a-b)/4294967296>>>0}
function Ae(a){if(a<0){ze(0-a);var b=w(Be(xe,ye));a=b.next().value;b=b.next().value;xe=a>>>0;ye=b>>>0}else ze(a)}
function Ce(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ce()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+De(c)+De(a));return c}
function De(a){a=String(a);return"0000000".slice(a.length)+a}
function Ee(){var a=xe,b=ye;b&2147483648?ce()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Be(a,b)),a=b.next().value,b=b.next().value,a="-"+Ce(a,b)):a=Ce(a,b);return a}
function Be(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Fe(a){return a.displayName||a.name||"unknown type name"}
var Ge=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function He(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Ge.test(a)}
function Ie(a){if(a!=null){var b=!!b;if(!He(a))throw be("int64");if(typeof a==="string")if(He(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),!Je(a)){if(a.length<16)Ae(Number(a));else if(ce())a=BigInt(a),xe=Number(a&BigInt(4294967295))>>>0,ye=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");ye=xe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ye*=1E6,xe=xe*1E6+d,xe>=4294967296&&(ye+=Math.trunc(xe/
4294967296),ye>>>=0,xe>>>=0);b&&(b=w(Be(xe,ye)),a=b.next().value,b=b.next().value,xe=a,ye=b)}a=Ee()}}else if(b)He(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Je(b)?a=b:(Ae(a),a=Ee()));else if(He(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Ae(a);b=xe;c=ye;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}}return a}
function Je(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Ke(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Le(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Fe(b)+" but got "+(a&&Fe(a.constructor)));return a}
function Me(a,b,c){if(a!=null&&typeof a==="object"&&a.cd===pe)return a;if(Array.isArray(a)){var d=ke(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&me(a,e);return new b(a)}}
;function Ne(a){var b=Oe(a);if(b)return b;if(Math.random()>.01||typeof Proxy!=="function")return a;b=new Proxy(a,{set:function(c,d,e){Pe();c[d]=e;return!0}});
Qe(a,b);return b}
function Pe(){ae()}
var Re=void 0,Se=void 0;function Oe(a){var b;return(b=Re)==null?void 0:b.get(a)}
function Qe(a,b){(Re||(Re=new WeakMap)).set(a,b);(Se||(Se=new WeakMap)).set(b,a)}
;var Te;
function Ue(a,b,c){a==null&&(a=Te);Te=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=ke(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(se(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}me(a,d);return a}
;function Ve(a,b){return We(b)}
function We(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(te(a,void 0,0))return}else if(Yd&&a!=null&&a instanceof Uint8Array){if(Zd){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Xd(a);return a}}return a}
;function Xe(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ye(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=te(a,void 0,0)?void 0:e&&ke(a)&2?a:Ze(a,b,c,d!==void 0,e);else if(se(a)){var f={},g;for(g in a)f[g]=Ye(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ze(a,b,c,d,e){var f=d||c?ke(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Ye(a[g],b,c,d,e);c&&c(f,a);return a}
function $e(a){return a.cd===pe?a.toJSON():We(a)}
;function af(a,b,c){c=c===void 0?oe:c;if(a!=null){if(Yd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=ke(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(me(a,(d|34)&-12293),a):Ze(a,af,d&4?oe:c,!0,!0)}a.cd===pe&&(c=a.U,d=le(c),a=d&2?a:bf(a,c,d,!0));return a}}
function bf(a,b,c,d){a=a.constructor;b=cf(b,c,d);ke(b);Te=b;b=new a(b);Te=void 0;return b}
function cf(a,b,c){var d=c||b&2?oe:ne,e=!!(b&32);a=Xe(a,b,function(f){return af(f,e,d)});
ie(a,32|(c?2:0));return a}
function df(a){var b=a.U,c=le(b);return c&2?bf(a,b,c,!1):a}
;function ef(a,b){a=a.U;return ff(a,le(a),b)}
function gf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function ff(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(gf(a,b,e,c)&&ge!=null){var g;a=(g=$d)!=null?g:$d={};g=a[ge]||0;g>=4||(a[ge]=g+1,ae())}return d}return gf(a,b,e,c)}}
function hf(a,b,c){var d=a.U,e=le(d);we(e);jf(d,e,b,c);return a}
function jf(a,b,c,d,e){se(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Wb){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&me(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function kf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function lf(a){if(de){var b;return(b=a[he])!=null?b:a[he]=new Map}if(he in a)return a[he];b=new Map;Object.defineProperty(a,he,{value:b});return b}
function mf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];ff(b,c,g)!=null&&(e!==0&&(c=jf(b,c,e)),e=g)}a.set(d,e);return e}
function nf(a,b,c){var d=d===void 0?!1:d;var e=a.U;var f=le(e),g=ff(e,f,c,d);b=Me(g,b,f);b!==g&&b!=null&&jf(e,f,c,b,d);e=b;if(e==null)return e;a=a.U;f=le(a);f&2||(g=df(e),g!==e&&(e=g,jf(a,f,c,e,d)));return e}
function of(a,b,c,d){d!=null?Le(d,b):d=void 0;return hf(a,c,d)}
function pf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function qf(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function rf(a,b,c,d){a=a.U;var e=le(a);we(e);var f,g,h=!!(2&e),l=h?1:2;g&&(g=!h);h=ff(a,e,b);h=Array.isArray(h)?h:ue;var k=ke(h),m=!!(4&k);if(!m){var p=k;p===0&&(p=pf(p,e));k=h;p|=1;var r=e,q=!!(2&p);q&&(r|=2);for(var t=!q,u=!0,A=0,K=0;A<k.length;A++){var O=Me(k[A],c,r);if(O instanceof c){if(!q){var X=!!(ke(O.U)&2);t&&(t=!X);u&&(u=X)}k[K++]=O}}K<A&&(k.length=K);p|=4;p=u?p|16:p&-17;p=t?p|8:p&-9;me(k,p);q&&Object.freeze(k);k=p}if(g&&!(8&k||!h.length&&(l===1||l===4&&32&k))){kf(k)&&(h=Array.prototype.slice.call(h),
k=pf(k,e),e=jf(a,e,b,h));g=h;for(p=0;p<g.length;p++)r=g[p],q=df(r),r!==q&&(g[p]=q);k|=8;k=g.length?k&-17:k|16;me(g,k)}l===1||l===4&&32&k?kf(k)||(b=k,a=!!(32&k),k|=!h.length||16&k&&(!m||a)?2:2048,k!==b&&me(h,k),Object.freeze(h)):(m=l!==5?!1:!!(32&k)||kf(k)||!!Oe(h),(l===2||m)&&kf(k)&&(h=Array.prototype.slice.call(h),k=pf(k,e),k=qf(k,e),me(h,k),e=jf(a,e,b,h)),kf(k)||(b=k,k=qf(k,e),k!==b&&me(h,k)),m&&(f=Ne(h)));f=f||h;c=d!=null?Le(d,c):new c;f.push(c);ke(c.U)&2?je(f,8):je(f,16)}
function sf(a,b){var c=0;c=c===void 0?0:c;a=ef(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function tf(a,b){var c=uf;var d=a.U;c=mf(lf(d),d,le(d),c);a=ef(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function J(a,b,c){return hf(a,b,Ke(c))}
function vf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw be("enum");c|=0}return hf(a,b,c)}
;var wf;function xf(a,b,c){this.U=Ue(a,b,c)}
xf.prototype.toJSON=function(){return yf(this)};
xf.prototype.clone=function(){var a=this.U;return bf(this,a,le(a),!1)};
xf.prototype.cd=pe;xf.prototype.toString=function(){try{return wf=!0,yf(this).toString()}finally{wf=!1}};
function yf(a){var b;wf?b=a.U:b=Ze(a.U,$e,void 0,void 0,!1);var c=!wf;var d=Vb?void 0:a.constructor.gb;var e=le(c?a.U:b);if(a=b.length){var f=b[a-1],g=se(f);g?a--:f=void 0;e=+!!(e&512)-1;var h=b;if(g){b:{var l=f;var k={};g=!1;if(l)for(var m in l)if(isNaN(+m))k[m]=l[m];else{var p=l[m];Array.isArray(p)&&(te(p,d,+m)||re(p)&&p.size===0)&&(p=null);p==null&&(g=!0);p!=null&&(k[m]=p)}if(g){for(var r in k)break b;k=null}else k=l}l=k==null?f!=null:k!==f}for(;a>0;a--){r=a-1;m=h[r];r-=e;if(!(m==null||te(m,d,
r)||re(m)&&m.size===0))break;var q=!0}if(h!==b||l||q){if(!c)h=Array.prototype.slice.call(h,0,a);else if(q||l||k)h.length=a;k&&h.push(k)}q=h}else q=b;return q}
;var zf=window;function Af(){return Ub&&Yb?Yb.mobile:!(Ub&&Yb?!Yb.mobile&&(I("iPad")||I("Android")||I("Silk")):I("iPad")||I("Android")&&!I("Mobile")||I("Silk"))&&(I("iPod")||I("iPhone")||I("Android")||I("IEMobile"))}
;function Bf(a){var b=Cf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Df(){var a=[];Bf(function(b){a.push(b)});
return a}
var Cf={Zg:"allow-forms",ah:"allow-modals",bh:"allow-orientation-lock",dh:"allow-pointer-lock",eh:"allow-popups",fh:"allow-popups-to-escape-sandbox",gh:"allow-presentation",hh:"allow-same-origin",ih:"allow-scripts",jh:"allow-top-navigation",kh:"allow-top-navigation-by-user-activation"},Ef=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Df()});
function Ff(){var a=Gf(),b={};ob(Ef(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Gf(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Hf(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var If=(new Date).getTime();function Jf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Kf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],A=e[3],K=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var O=A^t&(u^A);var X=1518500249}else O=t^u^A,X=1859775393;else q<60?(O=t&u|A&(t|u),X=2400959708):(O=t^u^A,X=3395469782);O=((p<<5|p>>>27)&4294967295)+O+K+X+r[q]&4294967295;K=A;A=u;u=(t<<30|t>>>2)&4294967295;t=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+K&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(k==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[k++]=p[q++],m++,k==64)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;k<56?c(h,56-k):c(h,64-(k-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;l<64;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Ze:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Lf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Mf(Jf(d),a,c||null)].join(" "):null}
function Mf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],ob(d,function(h){e.push(h)}),Nf(e.join(" "));
var f=[],g=[];ob(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];ob(d,function(h){e.push(h)});
a=Nf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Nf(a){var b=Kf();b.update(a);return b.Ze().toLowerCase()}
;var Of={};function Pf(a){this.g=a||{cookie:""}}
n=Pf.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ad:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ki;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ad}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ra(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{ad:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ra(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Qf=new Pf(typeof document=="undefined"?null:document);function Rf(a){return!!Of.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Sf(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Rf(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Pf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Rf(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Tf(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Pf(document)).get(b));return a?Lf(a,c,d):null}
function Uf(a){var b=b===void 0?!1:b;var c=Jf(String(C.location.href)),d=[];if(Sf(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Pf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Lf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Rf(b)&&((b=Tf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=Tf("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Vf(a){Nc.call(this);var b=this;this.A=this.i=0;this.Da=a!=null?a:{Ga:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return z(e,Wf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Xf(this)}
y(Vf,Nc);function Yf(){var a=Zf;Vf.g||(Vf.g=new Vf(a));return Vf.g}
Vf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.xa(this.A);delete Vf.g};
Vf.prototype.ya=function(){return this.l};
function Xf(a){a.A=a.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):z(c,Wf(a),3):z(c,Wf(a),3);Xf(a);c.g=0})},3E4)}
function Wf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.i=a.Da.Ga(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Da.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Oc(a,"networkstatus-online"):Oc(a,"networkstatus-offline"));c(g);wa(h);break;case 2:va(h),g=!1,h.M(3)}})})}
;var $f=/^[6-9]$/,ag=/<\/?(?:b|em)>/gi;function bg(a){this.g=a}
var cg=new bg({});function dg(a){a=eg(a);return Ab(a)}
function fg(a){a=eg(a);return $a(a)}
function eg(a){return a===null?"null":a===void 0?"undefined":a}
;function gg(a,b,c,d,e,f){this.A=a instanceof yb?a:dg(a);this.g=b;this.l=c;this.s=d;this.i=e;this.m=f||cg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
gg.prototype.getHtml=function(){return zb(this.A).toString()};
gg.prototype.u=function(){return this.l};
gg.prototype.getType=function(){return this.s};var hg=/^\s/,ig=/\s+/,jg=/\s+/g,kg=/^\s+|\s+$/g,lg=/^\s+$/,mg=/<[^>]*>/g,ng=/&nbsp;/g,og=/&#x3000;/g,pg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],qg=document.getElementsByTagName("head")[0],rg=0,sg=1;function tg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function ug(a,b){function c(){return b}
b===void 0&&(b=a);return{Nb:c,Td:function(){return a},
uf:c,Uh:function(){return a<b},
equals:function(d){return d&&a==d.Td()&&b==d.uf()}}}
function vg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function wg(a,b){var c=[],d;for(d in a)vg(d,a[d],c,b);return c.join("&")}
function xg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function yg(a){return!!a&&!lg.test(a)}
function zg(a){for(var b=pg.length,c=0;c<b;c+=2)a=a.replace(pg[c],pg[c+1].source);return a}
function Ag(a){for(var b=pg.length,c=0;c<b;c+=2)a=a.replace(pg[c+1],pg[c].source);a=a.replace(ng," ");return a.replace(og,"\u3000")}
function Bg(a,b){return a&&(a.indexOf(" ")>-1||ig.test(a))?(a=a.replace(jg," "),a.replace(b?kg:hg,"")):a}
function Cg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Dg(){}
function Eg(a){var b=Fg;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Gg(){return 0}
function Hg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ig(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(nb(b,173)!=-1?14:1));return a}
;function Jg(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(rg++).toString(36);this.B=this.g.toLowerCase();this.l=Bg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Jg.prototype.getId=function(){return this.u};
function Kg(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Lg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Mg(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=cg)}
Mg.prototype.getType=function(){return this.s};function Ng(){}
Ng.prototype.yd=function(){};
Ng.prototype.redirect=function(){};
Ng.prototype.xd=function(){return""};
Ng.prototype.he=function(){};function Og(){this.l={};this.g={}}
Og.prototype.set=function(a,b){this.l[a]=b};
Og.prototype.has=function(a){return!!this.l[a]};
function Pg(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function Qg(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(Rg);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.he(this.o);this.o.Te();for(g=0;a=this.g[g++];)a.N(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.mb(this.config_);
for(g=0;a=this.g[g++];)a.P(this.config_);this.l=!0}
function Sg(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Fa();a.l=!1}}
Qg.prototype.isActive=function(){return this.l};
Qg.prototype.get=function(a){return this.u[a]};
function Tg(a,b){return a.m[b]||[]}
function Rg(a,b){a=Eg(a.getType());b=Eg(b.getType());return a<0?1:b<0?-1:a-b}
var Fg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function L(a){this.l=a}
n=L.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.mb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Fa=function(){};function Ug(){this.l=149;this.g={};this.i=0}
y(Ug,L);n=Ug.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.pb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ec;this.u=b.xc;this.m=b.Ce}};
n.Fa=function(){Vg(this);this.i=0};
n.Ae=function(a,b,c){Wg(this,a.getId(),a.g,b,c);return!0};
n.pb=function(){return 1};
n.Pc=function(){return this.i};
n.Lc=function(a){var b=this.g[a];b&&(Xg(b),delete this.g[a])};
function Wg(a,b,c,d,e){a.config_.Jd||Vg(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Lc(b)}};
a.g[b]=f;f.send(null)}
function Vg(a){for(var b in a.g)Xg(a.g[b]);a.g={}}
function Xg(a){a.onreadystatechange=Dg;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var Yg;function Zg(){this.l=153}
y(Zg,L);function $g(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function ah(a){this.o=a}
ah.prototype.getType=function(){return this.o};
ah.prototype.s=function(){return!0};function bh(a){this.l=152;this.D=a}
H(bh,L);bh.prototype.zb=Dg;var ch=cc(),dh;if(dh=ch){for(var eh=hc(),fh=0,gh=Ra(String(eh)).split("."),hh=Ra("10").split("."),ih=Math.max(gh.length,hh.length),jh=0;fh==0&&jh<ih;jh++){var kh=gh[jh]||"",lh=hh[jh]||"";do{var mh=/(\d*)(\D*)(.*)/.exec(kh)||["","","",""],nh=/(\d*)(\D*)(.*)/.exec(lh)||["","","",""];if(mh[0].length==0&&nh[0].length==0)break;fh=Sa(mh[1].length==0?0:parseInt(mh[1],10),nh[1].length==0?0:parseInt(nh[1],10))||Sa(mh[2].length==0,nh[2].length==0)||Sa(mh[2],nh[2]);kh=mh[3];lh=nh[3]}while(fh==0)}dh=fh>=0}
var oh=dh,ph=ic();ph&&hc();var qh=bc(),rh=Xb().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");ec();var sh=fc(),th=Af()&&ec(),uh=jc(),vh=Ub&&Yb&&Yb.platform?Yb.platform==="macOS":I("Macintosh"),wh=Af();var xh;wb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function yh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function zh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(xh||(c={},xh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=xh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Ah(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Bh(a,b){var c="";b&&(c=b.id);zh(a,"activedescendant",c)}
;var Ch=document.documentElement.style.opacity!=void 0,Dh={rtl:"right",ltr:"left"};function Eh(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Fh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Bc:b,Sa:c}}
function Gh(a){try{return Hh(a).activeElement==a}catch(b){}return!1}
function M(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function N(a){return M("div",a)}
function Ih(a,b){a.innerHTML!=b&&Bb(a,dg(b))}
function Jh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Dh[b])}
function Kh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Lh(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Kh(a)}
function Mh(a){var b=M("a");mb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Nh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Je:c,Yd:b}}
function Hh(a){return a?a.ownerDocument||a.document:window.document}
function Oh(a){return a?(a=Hh(a),a.defaultView||a.parentWindow):window}
function Ph(){return Ch?"opacity":"filter"}
function Qh(a){return Ch?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function Rh(){this.o=507;Sh(this)}
y(Rh,ah);Rh.prototype.g=function(){return this.i};
function Th(a,b,c,d){Sh(a,c,d);Bb(a.l,dd(hd,b))}
function Sh(a,b,c){a.i=N("sbfl_a");a.l=N("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var Uh=[30,35,33,41],Vh=[39,10,21];function Wh(a,b){bh.call(this,507);this.m=a;this.g=b}
y(Wh,bh);Wh.prototype.N=function(a){this.i=a.get(128)};
Wh.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
Wh.prototype.Hb=function(){return new Rh};
function Xh(a){return a.map(function(b){return{label:b.g}})}
Wh.prototype.Ab=function(a,b){a=pb(this.i.m,function(c){a:if(Uh.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(Vh),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(Th(b,this.m,Xh(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Uc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),Yh=ha(["#ps"]);
function Zh(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=N("sbpqs_d");this.u=N();this.O=M("span","sbpqs_a");this.J&&(this.l=M("a"),mb(this.l,hb(Yh)),this.l.className="sbsb_i",this.I=N("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=N("sbpqs_c"),Bb(this.m,dd(hd,this.Y)),yh(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(Zh,ah);Zh.prototype.g=function(){return this.i};
Zh.prototype.s=function(){return this.B};
function $h(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Bb(a.O,dd(hd,b));a.J&&(a.m.style.display="none",b=Tc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){ai(a,f)},a.l.title=e)}
function ai(a,b){a.A=!0;bi(a.X,a.ca,function(){a.A&&(ci(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&di(a.H),a.D.g==a.F&&(ei(a.D),fi(a.H)),a.B=!1)});
Lh(b)}
;function gi(){bh.call(this,35)}
y(gi,bh);n=gi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(){return new Zh(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Ab=function(a,b){$h(b,a.getHtml(),a.g,a.l,this.s)};
n.zb=function(a,b,c){hi(c,b.g,1)};function ii(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=N("sbpqs_d");this.m=N();this.O=M("span","sbpqs_a");this.J&&(this.u=M("a"),mb(this.u,"#ps"),this.u.className="sbsb_i",this.I=N("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=N("sbpqs_c"),Bb(this.i,dd(hd,this.Y)),yh(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(ii,ah);ii.prototype.g=function(){return this.l};
ii.prototype.s=function(){return this.B};
ii.prototype.ea=function(a){this.A=!0;bi(this.X,this.ca,E(this.na,this));return Lh(a)};
ii.prototype.na=function(){this.A&&(ci(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&di(this.H),this.D.g==this.F&&(ei(this.D),fi(this.H)),this.B=!1)};function ji(){bh.call(this,35)}
y(ji,bh);n=ji.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(a){return new ii(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Ab=function(a,b){var c=a.getHtml(),d=a.g;a=a.l;var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Bb(b.O,dd(hd,c));b.J&&(b.i.style.display="none",Bb(b.u,dd(hd,e)),b.u.onclick=E(b.ea,b))};
n.zb=function(a,b,c){hi(c,b.g,1)};function ki(){this.l=134;this.i={}}
y(ki,L);n=ki.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=E(this.Oe,this)};
n.P=function(a){this.A=fg("//"+(a.nd||"clients1."+a.ec)+"/complete/deleteitems");this.s=a.vd;this.o=a.authuser;this.u=a.clientName};
n.Fa=function(){li(this)};
function li(a){a.g&&(mi.removeChild(a.g),a.g=null)}
n.Oe=function(a){li(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var mi=qg;function ni(){this.l=189}
y(ni,L);ni.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
ni.prototype.ga=function(a){this.o=a.pf};
ni.prototype.P=function(a){this.m=a.vd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(E(this.B,this),a),this.o=!1)};
function bi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===xg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=M("script");b=kd(b,c);Db(a.g,b);mi.appendChild(a.g)}
ni.prototype.B=function(){var a=oi(this.A,"",void 0,void 0,!0);pi(this.i,a);qi(this.i)};function ri(){this.l=156}
y(ri,L);ri.prototype.N=function(a){this.m=a.get(189)};
ri.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===xg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Lg(a,d,c[d]);return 1};
ri.prototype.g=function(){return 12};function si(a){this.l=156;this.o=a;this.m=null}
H(si,L);si.prototype.i=function(a){var b=1,c=a.D;a=yg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
si.prototype.g=function(){return 2};
si.prototype.N=function(a){this.m=a.get(128)};function ti(){this.l=157}
y(ti,L);function ui(){this.l=156}
y(ui,L);ui.prototype.i=function(a){var b=xg(Fb(window.location.href));b.v&&Lg(a,"video_id",b.v,!0);return 1};
ui.prototype.g=function(){return 24};function vi(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(vi,L);vi.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
vi.prototype.ga=function(a){this.m=a.kd;this.H=a.lf};
function wi(a,b){a.s=b;a.F.qd(a.s)}
function xi(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&yi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(yi(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new gg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&zi(a.g,c,!1);return!1}
;function Ai(){this.l=156}
y(Ai,L);Ai.prototype.N=function(a){this.m=a.get(598)};
Ai.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=xg(Fb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,wi(b,c)):d||b.s==""?d&&b.s==""&&wi(b,b.m):wi(b,"");return a.D!="mousedown"&&a.D!="focus"||!xi(this.m)?1:2};
Ai.prototype.g=function(){return 46};function Bi(){this.l=149;this.i=qg;this.g={}}
y(Bi,L);n=Bi.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.pb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.xc,this.A=a.Ce,this.F="https:"==document.location.protocol,Ci(this,E(this.Pe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Fa=function(){Ci(this,null);Di(this)};
n.Ae=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Jd||Di(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];vg("q",e,a,!0);this.config_.Ie||vg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);vg("gs_gbg",e,a)}e=M("script");this.config_.kg&&e.setAttribute("nonce",this.config_.kg);
Db(e,fg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.pb=function(){return 0};
n.Pc=function(){return 0};
n.Lc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Di(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Pe=function(a){this.m&&this.m(a)};
function Ci(a,b){b||(b=Dg);var c=window.google;a.config_.Ie?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ei(){this.l=115;this.o={}}
y(Ei,L);n=Ei.prototype;n.N=function(a){this.m=a.get(116);if(a=Tg(a,154))for(var b,c=0;b=a[c++];)this.o[Fi]=b};
n.P=function(){this.g=!1};
n.Fa=function(){Gi(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Gi(a){if(a.g){var b=a.m;b.B=0;Hi(b.o.m,!1);Ii(b.O,!1);Ii(b.i,!1);Ji(b,b.W);Ki(b.F,9);a.g=!1}}
var Li={Zd:"left",gg:!0,ob:null,marginWidth:0};function Mi(){this.l=118}
y(Mi,L);n=Mi.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=Tg(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;Ni(this)};
function Oi(a){var b={};Ki(a.s,11,b);!b.cancel&&a.config_.Rf&&nd(function(){var c=a.i;qi(c.D);Pi(c)})}
function Qi(a,b){if(a.config_.Ac==0||a.config_.Ac==2||a.config_.Ac==3&&!a.o&&!b)return!1;a:{if(Ri(a.i)&&(a.i.i!=null?b=Si(a.i):(b=a.i,b=Ri(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Cg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),Ti(a,b,ug(b.length),"",!0),Ui(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function Ti(a,b,c,d,e){a.config_.cf&&!a.i.isVisible()&&d=="mousedown"&&Vi(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Cg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,Wi(a,b),Ki(a.s,1,{Vb:d,ob:a.u}),g=F(),a.H||(a.H=g),a.W=g,yg(b)&&(e=!0),g=!0;b=oi(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(E(f.clear,f),f.config_.Sf))),a.O&&Lg(b,"gs_is",1),pi(a.I,b)):g&&(a.i.clear(),qi(a.I));Ki(a.s,2,{Vb:d})}
function fi(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,Xi(a)}catch(b){}}
function Yi(a,b){Wi(a,b);Zi(a.m);Ki(a.s,4,{ob:a.u,input:b})}
function di(a){a.g!=a.o&&Wi(a,a.o);Ki(a.s,5,{input:a.o,Og:a.i.m,ob:a.u});Zi(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function $i(a){if(a.ca){if(a.config_.Sc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(Wi(this,""),this.m.clear(),Ki(this.s,1),Ki(this.s,16),this.i.clear())};
function aj(a,b){var c=a.m.s.Nb();a.u==b?Ri(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.jc&&!a.config_.Ma&&hi(a.F,Si(a.i).g,6):a.config_.ge&&Qi(a,!0)):a.A&&c==0&&a.A.g()}
function bj(a){var b=a.m.s.Nb();return a.config_.Ma&&Ri(a.i)&&a.i.i!=null&&b===a.g.length}
function Ui(a,b,c){a.g=b||"";Ni(a);Zi(a.m);c||Ki(a.s,4,{ob:a.u,input:a.g})}
function Ni(a){var b=cj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Bb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function Wi(a,b){a.g=a.o=b||"";Ni(a)}
;function dj(){this.l=128}
y(dj,L);n=dj.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=Tg(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Gg)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Fa=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;Pi(this)};
function zi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=Ri(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,l=0,k;l<f.length;++l)if(k=f.charAt(l),!ej.test(k)&&(fj.test(k)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=cj(a.O,e);if(a.config_.zg&&Ri(a)&&c&&!wh){a.F=!0;c=a.o;if(c.o){c.F=a.B;gj(c);e=!1;for(f=0;g=b[f++];)hj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Ag(e);b=a.ca;f=0;e&&(b.g||ij(b),jj(b),e in b.m?f=b.m[e]:(Ih(b.g,zg(e)),b.m[e]=f=b.g.offsetWidth,Ih(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Kg&&!Ri(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!$g(a.m,e););(f=e?e.length:0)&&(f-=kj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=kj(e,c,1));a.config_.Of&&c.push(1);f&&(f-=kj(e,c,2));f&&kj(e,c,3);a.config_.Wd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;gj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=M("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=N(),g.i.className="sbsb_g",g.config_.Wd&&(g.i.style.paddingBottom="1px"),lj(g,g.config_.Hg,g.i,13),g.config_.Nf?lj(g,g.config_.Md,g.i,8):g.config_.Pf&&lj(g,g.config_.Ig,g.i,14),h.appendChild(g.i),h.onmousedown=E(g.jd,g),h.className=g.config_.zc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=N("sbsb_j "+g.config_.zc);l=M("a");l.id="sbsb_f";mb(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Wc+"&answer=106230");var m=g.config_.lg;k={Ag:!0};
k=k===void 0?{}:k;m instanceof yb?k=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),k.gi&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),k.Ag&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),k.hi&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),k=Ab(m));Bb(l,k);h.appendChild(l);h.onmousedown=E(g.jd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=M("li"),zh(h,"hidden",!0),h.l=!0,l=M("div","sbsb_e"),h.appendChild(l)),
g.g.appendChild(h)):hj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),mj(a,a.H.g()));c?yi(a):a.clear()}
function mj(a,b){if(a.g!=b){var c=a.g;a.g=b;nj(a,c)}}
n.ye=function(){if(Ri(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;oj(this,a,E(this.ye,this))}else yi(this)};
n.ze=function(){if(Ri(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;oj(this,a,E(this.ze,this))}else yi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function Si(a){return a.i!=null?a.m[a.i]:null}
function Ri(a){return!(!a.m||!a.m.length)}
function yi(a){if(!a.s){a:{var b=a.I,c=Fi;if(c in b.o){if(b.i){if(c==Fi)break a;Gi(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Hg(Li);if(c.i){var e=c.i.i;d.ob=e.B;d.marginWidth=e.J;var f=e.config_.Pg;f||(f=e.B=="rtl"?"right":"left");d.Zd=f}Ji(b,d.ob||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.gg;b.ca=d.Zd;Hi(b.o.m,!0);Ii(b.O,!0);Ii(b.i,
!0);Ki(b.F,14);b.Ad();c.g=!0}a.s=!0}}
function Pi(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Gi(a.I),a.s=!1)}
n.clear=function(){Pi(this);this.m=null;this.F=!1;this.g!=null&&pj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function ei(a){a.g!=null&&pj(a.o,a.g);a.i=a.g=null}
function Vi(a,b,c){if(Ri(a))yi(a);else{var d=a.u.o;d&&(b=oi(a.Y,d,b||a.u.m.s,c),pi(a.D,b))}}
function kj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function oj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(nj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Ma&&(c=c.querySelector('[role="gridcell"]')),c&&Bh(b.u,c)),a.g==null?di(a.u):(b=a.m[a.g],b.getType(),Ui(a.u,b.g))):(pj(a.o,b),c())}
function nj(a,b){b!=null&&pj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&qj(a.g().parentNode,b.X))}
var Fi=sg++;function rj(){this.l=154}
y(rj,L);rj.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function sj(){this.l=145;this.g=fj.test("x")}
y(sj,L);sj.prototype.sa=function(a){this.i=a.kc()};
function cj(a,b){var c=a.i;a.g&&(fj.test(b)?c="ltr":ej.test(b)||(c="rtl"));return c}
var ej=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),fj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function tj(){this.l=117;this.i=[];this.g={Ne:1}}
y(tj,L);function uj(a,b,c,d,e,f){var g=vj(a,b);g||(g={},a.i.push({element:b,Jf:g}));var h=g[c];h||(h=g[c]=[],a=wj(a,c,b.Ne?window:Oh(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({fg:!!f,Zc:!1,priority:e||0,process:d});h.sort(xj);d.kf=c}
function yj(a,b,c){if(a=vj(a,b))if(a=a[c.kf])for(var d=0;b=a[d++];)if(b.process==c){b.Zc=!0;break}}
function Ki(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Vb)}
tj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function wj(a,b,c,d){return E(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.eg=!0)}e.Vb=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.Zc?l=!0:h||(g.fg?zj(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.Zc?d.splice(l,1):++l;if(e.oc)return delete e.oc,e.eg&&(e=c.event||e),Lh(e),e.returnValue=!1}},a)}
function vj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Jf;return null}
function zj(a,b){nd(function(){a.process(b)})}
function xj(a,b){return b.priority-a.priority}
;function Aj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Aj,L);Aj.prototype.P=function(){this.reset()};
Aj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Bj(){this.l=374}
y(Bj,L);Bj.prototype.P=function(){this.reset()};
Bj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Bj.prototype.reset=function(){this.g={}};function Cj(){this.l=120;this.D=-1}
y(Cj,L);Cj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=Tg(a,311)};
Cj.prototype.ga=function(a){this.u=a.ng};
Cj.prototype.P=function(a){this.config_=a;this.reset()};
function Dj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Ej(a.config_.clientName);d[28]=Ej(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Pc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Ig(h.getType(),h.i||[]);if(h!=l){e>1&&(f+="l"+e);f+=(l?"j":"")+h;e=0;var l=h}++e}e>1&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var k=Ig(g.getType(),
g.i||[]);k in b&&delete b[k]}if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;k=a.i.i;d[33]=k>-1?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=F()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Cb;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.ff?"a":"")+(a.config_.Hd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.na;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Bb;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=Fj;++b)f=k.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.O;k=0;for(var m in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=Ej(a.config_.td);m=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,m.m>1&&(l|=2)):m.m>0&&(l|=2);m=l;d[20]=m==0?"":m+"";for(m=0;k=a.F[m++];)l=k.l,Gj[l]&&(d[l]=d[l]==void 0?Ej(k.g()):"");d=d.join(".").replace(Hj,"");if(a.H&&a.u){m=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){g=k.charCodeAt(e);if(g<32||g>127||!Ij[g-32]){k=[];break b}f<<=6;f|=Ij[g-32]-1;b+=6;b>=8&&(l.push(f>>b-8&255),
b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.Yg=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;l<64;++l)k.padding[l]=0;Jj(k);l=Array(64);f.length>64&&(Jj(k),Kj(k,f),f=Lj(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;b<64;++b)l[b]=92;Jj(k);for(b=0;b<64;++b)k.buffer[b]=l[b]^106;Mj(k,k.buffer);k.total=64;Kj(k,Nj(m));m=Lj(k);Jj(k);Mj(k,l);k.total=64;Kj(k,m);m=Lj(k);m=m.slice(0,8);typeof m==="string"&&(m=Nj(m));k="";if(m){l=m.length;for(e=b=f=0;l--;)for(b<<=8,b|=m[e++],f+=8;f>=
6;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=k}else m="";c={oq:c,gs_l:d+"."+m};a.config_.hg&&(c.q=a.m.g);return c}
Cj.prototype.reset=function(){this.s=F();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Cb=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Bb=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=Fj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Ej(a){return a?a.replace(Oj,"-"):""}
var Hj=/\.+$/,Oj=/\./g,Gj=tg([23]);function Pj(){this.l=121}
y(Pj,L);Pj.prototype.sa=function(a){this.m=a.Qd()};
Pj.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=Tg(a,294)};
Pj.prototype.P=function(a){this.config_=a};
function hi(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(yg(b)||a.config_.kb||a.s&&a.s.kb()){if($f.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=M("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Mc&&Qj(a.g,c);a.u.yd(c);Rj(a);Ki(a.F,12,{query:b})}}
Pj.prototype.redirect=function(a){this.g&&this.config_.Mc&&Qj(this.g);this.u.redirect(a);Rj(this)};
function Rj(a){qi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function Sj(){this.l=553}
y(Sj,L);Sj.prototype.N=function(a){this.g=Tg(a,156);a.get(126)};
Sj.prototype.ga=function(){this.g.sort(Tj)};
Sj.prototype.P=function(a){this.config_=a;this.i=a.kd};
Sj.prototype.qd=function(a){this.i=a};
function oi(a,b,c,d,e){b=new Jg(b,c||ug(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Jc!=null&&Lg(b,"ds",a.config_.Jc,!0);a.config_.Be!=null&&Lg(b,"swl",a.config_.Be,!0);Lg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=F(),"cp"in b.A||(a=b.J.Nb(),Lg(b,"cp",a,!0)),Lg(b,"gs_id",b.u),b.i=wg(b.A)+":"+b.B,b.m=!0);return b}
function Tj(a,b){return a.g()-b.g()}
;function Uj(){this.l=123;this.A=!1;this.F=-1}
y(Uj,L);n=Uj.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Ec=a.get(118);this.Fc=a.get(120);this.X=a.get(494);this.Ue=a.get(124);this.Db=a.get(125);this.Eb=a.get(230);this.Gc=a.get(127)};
n.P=function(a){this.u=this.Gc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Qe=a.qf;this.Re=a.Vf;this.Xa=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Fa=function(){this.A=!1;Vj(this);this.m=this.o=null;qi(this)};
function pi(a,b){if(!(!a.A||a.Re||a.W&&a.W.l())){var c=!0,d=Kg(b);d>a.F&&(a.F=d);++a.Cb;a.X.g[b.getId()]=!0;yg(a.Ec.g)||yg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=F();for(var e in a.m)d-a.m[e].s>2500&&Wj(a,e);a.i&&(e=a.g.get(b))&&((c=a.Qe||b.I)&&a.config_.Wf&&(b.o=!0),a.Db.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.oe())}}
function qi(a){a.Xa=a.F}
function ci(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function Xj(a,b){return E(function(c){this.zd(c,b)},a)}
n.oe=function(){Vj(this);if(!(this.u.Pc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)vg(d,c[d],b);b=this.u.Ae(a,b.join("&"),Xj(this,a),E(this.zd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(E(this.oe,this),a)}}};
function Vj(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function Wj(a,b){a.u.Lc(b);delete a.m[b];a.s&&--a.s}
n.zd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ue;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,m=0;k=f[m++];)if((k[1]||0)==33?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(m=0;k=f[m++];){var p=k[1]||0;if(!h||p!=33){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),Ag(r).replace(mg,"")));var q=l,t=q.push,u=Ag(r).replace(mg,""),A=a++,K=k[3];t.call(q,new gg(r,u,A,p,k[2]||[],K?new bg(K):cg))}}c=
new Mg(d,l,new bg(g),!1,!0,!1);this.Eb&&(c=dd(this.Eb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Kg(b)<=this.Xa?!b||b.g||c.o||(this.O=F()-b.s):(++this.ea,this.Db.process(c)||++this.Bb,this.D=c.i.g.d||0,b&&(Wj(this,b.getId()),d=b.s,d=F()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>Yj?Fj:Zj[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Fc.u=b)}}};
var Zj=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Fj=Zj[Zj.length-1]+1,Yj=Zj.length*100-1;function ak(){this.l=124;this.g={}}
y(ak,L);ak.prototype.N=function(a){this.i=a.get(150);if(a=Tg(a,158))for(var b,c=0;b=a[c++];)this.g[b.Rh()]=b};
ak.prototype.P=function(a){this.m=a.Rc};function bk(){this.l=125}
y(bk,L);bk.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=Tg(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(ck)};
bk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Bg(c);var e=b.l;b=e?e.l:Bg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,zi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(yg(g.g)||(b.i=h),g=g.s,g=F()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Ig(h,f.i||[])]=!0;Ki(this.o,3,{input:a,Og:e})}return c};
function ck(a,b){return a.g()-b.g()}
;function dk(){this.l=126}
y(dk,L);dk.prototype.N=function(a){this.i=a.get(123)};
dk.prototype.P=function(){this.g=null};var ek=["expflags","plugin"];function fk(){this.l=127;this.m={}}
y(fk,L);fk.prototype.N=function(a){a=Tg(a,149);for(var b,c=0;b=a[c++];)this.m[b.pb()]=b};
fk.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];vg("client",a.clientName,c);vg("hl",a.Wc,c);vg("gl",a.Ee,c);vg("sugexp",a.td,c);vg("gs_rn",64,c);vg("gs_ri",a.requestIdentifier,c);var d=xg(a.url||C.location.href);ek.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&vg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.nd||"clients1."+a.ec,xc:a.xc||"/complete/search",Ce:c.length?c.join("&"):""};this.g&&this.g.pb()==a.connectionType||(this.g=this.m[a.connectionType])};function gk(){this.l=191}
y(gk,L);function Nj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Jj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Xb=a.total=0}
function Mj(a,b){for(var c=a.Yg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;k<64;++k)k<16?(g=f^b&(d^f),h=k):k<32?(g=d^f&(b^d),h=5*k+1&15):k<48?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+hk[k]+c[h]&4294967295,g=ik[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Kj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Xb++]=b[d],a.Xb==64&&(Mj(a,a.buffer),a.Xb=0)}
function Lj(a){var b=Array(16),c=a.total*8,d=a.Xb;Kj(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;Mj(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Ij=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],ik=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],hk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function jk(){this.l=150}
H(jk,L);
jk.prototype.bold=function(a,b){b=zg(b.replace(ag,""));a=zg(Bg(a,!0));if(Cg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Tb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Tb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Tb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Tb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Tb].Tb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function kk(){this.l=146}
H(kk,L);function lk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
lk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");lk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");lk("D1,D4,D7,DA,DD");lk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");lk("D1__,D4__,D7__,DA__,DD");lk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");lk("CF,D2,D5,D8,DB");function mk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(mk,L);n=mk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.kc();b.addRule(".sbdd_a",(wh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");wh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.mb=function(a){this.g=N();this.g.className="gstl_"+this.Y+" sbdd_a";Ii(this.g,!1);this.O=this.g;this.H=N("fl");this.g.appendChild(this.H);this.A=N();this.g.appendChild(this.A);this.s=N("sbdd_b");this.A.appendChild(this.s);this.na=N();this.A.appendChild(this.na);this.config_.Vd&&(this.i=M("iframe","gstl_"+this.Y+" sbdd_c"),Ii(this.i,!1),(this.config_.Ha||document.body).appendChild(this.i));if(this.m=this.config_.df)typeof this.m==="number"&&(this.m+=this.config_.hc[2],this.m-=nk(this)),ok(this,this.g,
this.m);pk(this);(a.Ha||document.body).appendChild(this.g);a=this.F;var b=E(this.Ad,this);uj(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Lb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Ad=function(){this.B=0;pk(this);if(this.i){var a=this.config_.Cd[0],b=this.i.style;this.config_.Lb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";ok(this,this.i,this.s.offsetWidth)}this.u&&gj(this.u.g)};
function pk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Mf||c.H==c.F?c.Xa:null;var d=(b=c)?b.offsetWidth:qk(a.o.m);var e=a.m;c=nk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.hc[2]-c,ok(a,a.g,e));if(a.config_.Lb!="relative"){var f="rtl"==Hf()!=(a.D=="rtl"),g=a.config_.Ha;var h={Sa:0,Bc:0};if(f||!g||g==document.body||a.config_.Od)h=Fh(a.o.m.F),b&&(h.Sa=Fh(b).Sa);b=h;h=e;e=a.config_.hc;g=e[1];e=e[0];e=b.Bc+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Hf()!=(a.D=="rtl");var l=a.config_.Ha;g=-g;if(h||!l||l==document.body)g+=(Oh(a.g)||window).document.documentElement.clientWidth-d-b.Sa;d=g;h=e;b=void 0}else b=b.Sa+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Sa:0,Bc:0};a.config_.Lb=="absolute"&&a.config_.Ha&&a.config_.Ha!=document.body&&(f||a.config_.Od)&&(e=Fh(a.config_.Ha));g=a.g.style;g.top=h-e.Bc+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Sa+"px":(b=0,a.config_.Ha&&f&&(b=document.body.clientWidth-(e.Sa+a.config_.Ha.offsetWidth)),
g.right=d+c-b+"px")}}
function ok(a,b,c){typeof c==="number"?c>0&&(a.config_.Xg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Ii(a,b){a&&(a.style.display=b?"":"none")}
function Ji(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ha;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");Jh(a.g,b)}}
function nk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function rk(){this.l=119;this.W=!1;this.s=ug(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(rk,L);n=rk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Qc();yh(this.g,"combobox");zh(this.g,"haspopup",!1);zh(this.g,"autocomplete","list");this.Ec=a.kc();a.Hc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=vh&&rh||ch?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),oh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Bb=!!a.get(136);this.Fc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Ob;this.O=a.dg;this.Gc=a.Id;this.u=Gh(this.g);this.Dc();var b=this;ch&&uj(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.oc=!0)},10);
a=(kc()||I("iPad")||I("iPod"))&&sh;ph&&sk(this);(th||a)&&tk(this);this.F=this.g};
n.mb=function(a){var b=!!a.jf[130];if(this.Bb||$i(this.i)||b||a.rf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=N("gstl_"+this.Fc+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=qh||ch?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Vc,b&&(this.B=N("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),$i(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ec,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=N("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),uk(this,this.A,this.o)),this.config_.pd&&this.g&&this.o&&(this.g.removeAttribute("role"),yh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),zh(this.o,"haspopup",!0)),this.config_.Ma&&this.g&&(b=this.D.getId("sbsg"),zh(this.g,"controls",b),this.config_.pd&&this.o?(zh(this.o,"haspopup","grid"),zh(this.o,
"owns",b)):zh(this.g,"haspopup","grid")),this.config_.Lg||this.config_.af||vk(this,this.A),this.F=this.A;this.Gc&&(b=E(this.me,this),uj(this.m,this.g,"blur",b,10),b=E(this.ue,this),uj(this.m,this.g,"focus",b,10),this.Eb=!0);b=this.m;a=E(this.If,this);uj(b,b.g,8,a);wk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ie?"":"none";this.Cb=this.g.value;this.Eb&&this.ue();xk(this)};
n.Fa=function(){this.Eb&&this.me();yk(this)};
function uk(a,b,c){yk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Cg&&(ch||ph?nd(function(){a.g.focus();Eh(a.g,a.s.Nb())}):a.g.focus());
xk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function qk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Dc()};
function Zi(a){uh&&(a.g.value="");a.g.value=a.i.g;uh&&(a.g.value=a.g.value);Xi(a)}
function zk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function Xi(a){if(a.u){var b=a.g.value.length;a.s=ug(b);Eh(a.g,b)}}
function vk(a,b){uj(a.m,b,"mouseup",function(){a.g.focus()})}
function wk(a){function b(e){uj(a.m,a.g,e,E(a.se,a),10,c)}
uj(a.m,a.g,"keydown",E(a.Gf,a));(qh||a.config_.Xe)&&uj(a.m,a.g,"keypress",E(a.Hf,a));uj(a.m,a.g,"select",E(a.Dc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=E(a.Df,a);uj(a.m,a.g,"compositionstart",d);uj(a.m,a.g,"compositionend",d)}
n.Df=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Gf=function(a){var b=a.keyCode;this.ca=b;var c=(rh||ph)&&(b==38||b==40)&&Ri(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=Qi(this.i));if(d){(b=Si(this.X))&&b.getType();var f=this;nd(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&Si(g).getType();g=g.u;hi(g.F,g.g,h)})}if(c||d||e||this.Y)a.oc=!0};
n.Hf=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.oc=!0};
n.se=function(a){if(!this.Db){var b=a.Vb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Gg?hi(a.F,a.g,5):(a.i.isVisible()?(c=a.i,qi(c.D),Pi(c)):zk(a.m),di(a));break;case 37:a=this.i;aj(a,"rtl");if(bj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Ak(a,c.i))&&!(c.length<=1))))for(d=Ah(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Bh(a.u,c[e-1]);break;case 39:a=this.i;aj(a,"ltr");if(bj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Ak(a,c.i))))for(d=Ah(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Bh(a.u,c[e+1]);break;case 38:this.i.i.ze();break;case 40:a=this.i;c=this.s;Ri(a.i)?a.i.ye():Vi(a.i,c);break;case 46:a=this.i;a.g&&this.s.Td()==a.g.length&&(a.J&&a.J.clear(),a.config_.Fg&&hi(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Nb()==0&&a.A.g()}}this.Dc();Ti(this.i,this.g.value,this.s,b)}};
n.Cf=function(){this.u=!0;Ki(this.i.s,10)};
n.Af=function(){this.u=!1;Oi(this.i)};
function xk(a){a.W||(a.W=!0,a.Xa=E(a.Cf,a),uj(a.m,a.g,"focus",a.Xa,99),a.na=E(a.Af,a),uj(a.m,a.g,"blur",a.na,99))}
function yk(a){a.W&&(a.W=!1,yj(a.m,a.g,a.Xa),yj(a.m,a.g,a.na))}
n.ue=function(){this.H||(this.H=new Qd(this.config_.yg||50),this.H.ra("tick",this.xg,void 0,this),this.H.start())};
n.me=function(){this.H&&(Rd(this.H),this.H=null)};
n.xg=function(){this.se({Vb:"polling"})};
n.If=function(){if(ph){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Dc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Hh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=ug(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function sk(a){var b;a.m.ra(window,"pagehide",function(){a.Db=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Db=!1;(c.persisted||b!==void 0)&&Yi(a.i,b)})}
function tk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Cb&&Yi(a.i,a.Cb)})}
function Hi(a,b){a.config_.pd&&a.o?zh(a.o,"expanded",b):zh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Bk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ck(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Dk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Bk(a).match(/\S+/g)||[],b=nb(a,b)>=0);return b}
function qj(a,b){if(a.classList)a.classList.add(b);else if(!Dk(a,b)){var c=Bk(a);Ck(a,c+(c.length>0?" "+b:b))}}
function Ek(a,b){a.classList?a.classList.remove(b):Dk(a,b)&&Ck(a,Array.prototype.filter.call(a.classList?a.classList:Bk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Fk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Fk,L);n=Fk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Qc();this.H=a.kc();wh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");wh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(rh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
wh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=Tg(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.mb=function(a){this.o=N();a.Ma?(this.g=N("sbsb_b"),yh(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=M("ul","sbsb_b"),yh(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.re;b&&(this.Xa=this.O.Pd(b));this.o.className=a.Qg||"sbsb_a";this.X=a.Ng||"sbsb_d"};
function Ak(a,b){if(a.config_.Ma&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function pj(a,b){(b=a.m[b])&&Ek(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function hj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Gk(a,d));d.Ab(b,c);a.W.push(c);var e=c.g();if(a.config_.Ma)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Hk(a);f.appendChild(e);if(b.u!==void 0){a.m.push(c);g=a.F;var h=b.l;a.config_.Tf&&(e.onmouseover=function(){mj(a.D,h)},e.onmouseout=function(){ei(a.D)});
var l=c.g();l.onclick=function(k){zk(a.s.m);b.o&&Ui(a.s,b.g);ei(a.D);var m=a.D;m.i=m.g=h;k=k||Oh(l).event;d.zb(k,b,a.I)}}else g=a.H;
Jh(f,g);return!0}
function Gk(a,b){b=b.Hb(a.I);var c=b.g();qj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Ma&&yh(c,"option");a.ea++;return b}
function lj(a,b,c,d){var e=M("input");e.type="button";e.value=Ag(b);e.onclick=function(){hi(a.I,a.s.g,d)};
if(a.config_.Lf){b="lsb";var f=M("span");var g=M("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Hk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Ma?(b=N(),yh(b,"row")):(b=M("li"),yh(b,"presentation"));b.className="sbsb_c "+a.config_.zc;b.onmousedown=E(a.jd,a);a.g.appendChild(b);return b}
n.jd=function(a){a=a||Oh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):ch&&!qh&&(this.s.m.ea=!0);return!1};
function gj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=qk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Ik(){this.l=147}
H(Ik,L);Ik.prototype.sa=function(a){this.u=a.Qd()||document.body};
Ik.prototype.ga=function(a){this.config_=a};
Ik.prototype.getHeight=function(){this.g||ij(this);jj(this);this.i||(Ih(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function ij(a){var b=N(a.config_.Vc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function jj(a){var b=F();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Oh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Jk(){Og.call(this);this.set(191,new gk);this.set(150,new jk);this.set(146,new kk);this.set(147,new Ik);Pg(this,149,new Bi);this.set(145,new sj);this.set(117,new tj);this.set(494,new Aj);this.set(374,new Bj);this.set(120,new Cj);this.set(121,new Pj);this.set(553,new Sj);this.set(124,new ak);this.set(125,new bk);this.set(123,new Uj);this.set(126,new dk);this.set(127,new fk);this.set(115,new Ei);this.set(118,new Mi);this.set(128,new dj);Pg(this,154,new rj);this.set(116,new mk);this.set(119,
new rk);this.set(129,new Fk)}
y(Jk,Og);function Kk(){this.l=347;this.i=[];this.m=0}
y(Kk,L);Kk.prototype.N=function(a){this.o=a.get(120)};
Kk.prototype.P=function(a){this.s="//"+(a.mg||"www."+a.ec)+"/gen_204?";this.g=a.Mg||{}};
function Qj(a,b){b=Dj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=wg(b,!0);Lk(a,a.s+c)}
function Lk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Mk(){this.l=151;this.g=!0;this.i={}}
y(Mk,L);n=Mk.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=tg([0])};
n.P=function(a){this.o=a.Rc;this.g=a.Hd};
n.Fa=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Cg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,m,p=0;m=k[p++];)l=m.g,h=f?this.m.bold(c,l):zg(l),g.push(new gg(h,l,m.l,m.getType(),m.i||[],m.m));delete this.i[d];return new Mg(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function Nk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Nk,L);Nk.prototype.N=function(a){this.g=Tg(a,151);this.g.sort(Ok)};
Nk.prototype.P=function(){this.o=this.m=0};
Nk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Mg(a,b.g,b.i,b.o,b.m,b.u):null};
Nk.prototype.has=function(a){return!!this.i[a.i]};
function Ok(){return 0}
;function Pk(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Qk(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function Rk(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function Sk(){this.l=570;this.m=!1}
H(Sk,L);n=Sk.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Mb;if(this.g=b?this.u.Pd(b):null){b=this.s;var c=E(this.Bf,this);uj(b,b.g,10,c);b=this.s;c=E(this.zf,this);uj(b,b.g,11,c);uj(this.s,this.g,"mouseover",E(this.Ff,this));uj(this.s,this.g,"mouseout",E(this.Ef,this));a.Oc&&(this.o=new Pk(a.Oc));a.Nc&&(this.i=new Pk(a.Nc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&Qk(this.i,this.g)};
n.Fa=function(){this.m=!1;this.g&&(this.o&&Rk(this.o,this.g),this.i&&Rk(this.i,this.g))};
n.Ff=function(){this.m&&this.o&&Qk(this.o,this.g)};
n.Ef=function(){this.m&&this.o&&Rk(this.o,this.g)};
n.Bf=function(){this.m&&this.i&&Qk(this.i,this.g)};
n.zf=function(){this.m&&this.i&&Rk(this.i,this.g)};var Tk=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function Uk(){this.l=160}
H(Uk,L);n=Uk.prototype;n.sa=function(a,b){this.m=a;a.Hc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.mc;this.A=a.ke;this.D=a.qc;this.H=a.vg;this.F=a.ug};
n.mb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=M("img"),this.g.src=this.A+"/tia.png",this.i=M("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=E(this.bf,this);this.g.setAttribute("tia_field_name",this.m.Qc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Sc&&(this.o=!!a.mc);this.g.setAttribute("tia_property",a.le)};
n.isEnabled=function(){return this.o};
n.Sd=function(){return{tooltip:this.F}};
n.Bd=function(a){if(!this.B){a=md("SCRIPT");var b=jd(Tk,this.H,this.D);Db(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.bf=function(){var a=this.u;qi(a.D);Pi(a)};
var Vk=sg++;var Wk=ha(["#"]);function Xk(){this.l=173;this.m={}}
y(Xk,L);n=Xk.prototype;
n.sa=function(a,b){this.o=a;a.Hc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Ph()+":"+Qh(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Ph()+":"+Qh(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Ph()+":"+
Qh(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=Tg(a,160)};
n.ga=function(a){this.A=a.Sc;this.i.sort(Yk)};
n.mb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=N("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Ob)this.g.style.lineHeight=a+"px";Zk(this)}$k(this)};
n.P=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[Vk];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);Zk(this);$k(this);break}}};
function Yk(){return 0}
function Zk(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=M("a","gsst_a");al(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function $k(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=Vk,e=c.i.parentNode;e.onclick=E(c.Bd,c);a.m[d]=e;c.Sd&&(c=c.Sd(),c.Xh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function al(a,b,c){mb(b,hb(Wk));b.addEventListener("click",function(){return!1});
qh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Bd(d),fi(a.u),Lh(d)}}
sg++;function bl(){this.o=33;this.l=N();this.l.className="gspr_a"}
H(bl,ah);bl.prototype.g=function(){return this.l};function cl(){bh.call(this,33)}
y(cl,bh);cl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
cl.prototype.Hb=function(){return new bl};
cl.prototype.Ab=function(a,b){Bb(b.l,dd(hd,a.m.g.b||""))};
cl.prototype.zb=function(a,b,c){hi(c,b.g,1)};function dl(a,b){this.o=0;this.u=a;this.D=b;this.m=N();this.l=N("sbqs_a");this.m.appendChild(this.l);this.B=N("sbqs_c");this.m.appendChild(this.B)}
y(dl,ah);dl.prototype.g=function(){return this.m};
function el(a,b,c,d){Bb(a.B,dg(b));a.A=c;d&&!a.i&&(a.i=Mh(a.l),a.i.onclick=E(function(e){zk(this.u.m);Ui(this.u,this.A);hi(this.D,this.A,9);return Lh(e)},a));
d?(Bb(a.i,dg(d+" &raquo;")),a.l.style.display="",zh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function fl(){bh.call(this,0)}
H(fl,bh);n=fl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Ld?a.Md:""};
n.Hb=function(a){return new dl(this.g,a)};
n.Ab=function(a,b){el(b,a.getHtml(),a.g,this.i)};
n.zb=function(a,b,c){hi(c,b.g,1)};function gl(a){Jk.call(this);Pg(this,149,new Ug);this.set(347,new Kk);this.set(133,new Nk);Pg(this,151,new Mk);this.set(570,new Sk);this.set(134,new ki);this.set(189,new ni);Pg(this,156,new ri);a.ENABLE_DELETE_ICON?Pg(this,152,new gi):Pg(this,152,new ji);Pg(this,152,new cl);Pg(this,152,new fl);this.set(173,new Xk);Pg(this,160,new Uk);this.set(157,new ti);Pg(this,156,new ui);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&Pg(this,156,new si(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(Pg(this,153,new Zg),Pg(this,152,new Wh(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new vi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),Pg(this,156,new Ai))}
y(gl,Jk);function hl(){return{tf:function(){return{clientName:"hp",requestIdentifier:"hp",ec:"google.com",Ee:"",Wc:"en",Jc:"",kd:"",videoId:"",vd:"",authuser:0,ng:"",wi:"",Be:null,td:"",Jd:!1,nd:"",xc:"",connectionType:0,transport:null,Ie:!1,ji:!1,Vf:!1,enableCaching:!0,lf:10,Qh:10,ff:!0,Hd:!0,Mh:!1,qf:!1,hg:!1,ig:!1,ai:!1,Rf:!0,cf:!1,Sf:500,Sc:!1,Kf:!0,Vh:!0,ni:!1,mc:!1,qc:"",ke:"//www.google.com/textinputassistant",le:"",vg:7,Sh:!1,Th:!1,Of:!1,Nf:!0,Pf:!1,Wd:!1,Ma:!1,Gg:!1,Fg:!1,Ac:1,ge:!0,jc:!1,Ld:!1,Id:!1,
yg:10,Rc:!1,Cg:!0,Ha:document.body,Qf:!0,Fe:null,jf:{},Ph:{},ii:0,rf:!1,Wf:!0,kb:!1,pf:!1,Kg:!1,ri:null,gf:!1,mg:null,Mg:null,Mc:!1,Tf:!0,pd:!1,Xe:!1,ti:1,ie:!1,Hg:"Search",Md:"I'm  Feeling Lucky",Ig:"",lg:"Learn more",md:"Remove",ld:"This search was removed from your Web History",Wh:"",Lh:"Did you mean:",ug:"",li:"",zi:"Search by voice",yi:'Listening for "Ok Google"',xi:'Say "Ok Google"',Kh:"Clear Search",Ob:0,dg:0,Vc:"",zc:"",Zh:!1,Lb:"absolute",Lf:!1,Vd:!1,re:null,Mf:!0,hc:[0,0,0],df:null,Pg:null,
Cd:[0],rd:!0,He:"",Qg:"",Ng:"",Mb:null,Oc:"",Nc:"",Jh:1,Xg:!1,Od:!1,ci:0,Lg:!1,af:!1,Nh:!1,zg:!0}}}}
;function il(a,b,c,d,e){var f=ph?"-moz-":ch?"-ms-":qh?"-o-":rh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,m){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",m,"}")}},
Te:function(){if(b&&l.length){b=!1;var k=M("style");k.setAttribute("type","text/css");(a||qg).appendChild(k);var m=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=m:k.appendChild(document.createTextNode(m))}},
prefix:function(k,m){var p=k+(m||"");f&&(p+=m?k+f+m:f+k);return p}}}
;function jl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=jl.prototype;n.install=function(a){if(!this.D){a=kl(a);this.l<0&&(this.l=ll(a));var b=Hh(this.i),c=ml(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.He&&f.push(a.He);f=il(a.Fe,a.Qf,a.gf,this.l,f);this.A=a.kb;this.g=new Qg(this.F,this.H,{Hc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Pd:function(g){return b.getElementById(g)},
Qd:function(){return e.I},
kc:function(){return c},
getId:function(g){return g+e.l},
Qc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Oh(this.i);this.s=Nh(a);this.B=E(this.Eg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function nl(a,b){function c(d){hi(a.X,a.J.g,12);return Kh(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.kb=function(){return this.A||!!this.u&&this.u.kb()};
n.qd=function(a){this.W.qd(a)};
function ll(a){a=Oh(a.Fe||qg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function ml(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function kl(a){a=Hg(a);var b=a.qc;b?a.qc=b.toLowerCase():a.mc=!1;a.jc&&!a.Ld&&(a.jc=!1);sh||(a.ig=!1);return a}
n.Eg=function(){var a=Nh(Oh(this.i));if(a.Je!=this.s.Je||a.Yd!=this.s.Yd)this.s=a,Ki(this.m,8)};function ol(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
G("ytvoicesearchloggingparams",E(this.vf,this))}
y(ol,Ng);n=ol.prototype;n.vf=function(){this.g.O.add(6);return Dj(this.g.o,15)};
n.yd=function(a){zk(this.g.Y);this.u(Dj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.xd(a))};
n.xd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Dj(this.g.o);var d=this.g;c||(c=Dj(d.o));d=wg(c);return a+b+d};
n.he=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=hl().tf();f.clientName="youtube";f.requestIdentifier="youtube";f.Jc="yt";f.Wc=d.REQUEST_LANGUAGE;f.Ee=d.REQUEST_DOMAIN;f.Kf=!1;f.Ac=0;f.ge=!1;f.jc=!1;f.ie=!1;f.Rc=!0;f.Vc=this.D;f.zc=this.i;f.Oc=this.B;f.Nc=this.A;f.Yh=!0;f.mc=d.HAS_ON_SCREEN_KEYBOARD;f.qc=d.REQUEST_LANGUAGE;f.ke="//www.gstatic.com/inputtools/images";f.le="youtube";f.Mc=!0;f.Lb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.nd="suggestqueries-clients6.youtube.com";d.PQ&&(f.kd=d.PQ);f.vd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.ld=e.SUGGESTION_DISMISSED_LABEL;f.md=e.SUGGESTION_DISMISS_LABEL;f.rd=!d.HIDE_REMOVE_LINK;f.si=tg([0,33,35]);this.o?(f.Mb="search-container",f.Ob=24):this.m?(f.Mb="masthead-search",f.Ob=24):(f.Mb="masthead-search-terms",f.Ob=30);bc()||(f.Vd=!0);f.re=f.Mb;e=this.l.offsetHeight;f.hc=[e+(56-e)/2-40+4,0,0];e=[0];cc()&&hc()=="8.0"&&
(e[0]=-1);f.Cd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Id=!0);if(e=d.SUGG_EXP_ID)f.td=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Oh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);Sg(a.g);b=kl(b);a.A=b.kb;a=a.g;Sg(a);for(c=0;d=a.g[c++];)d.P(b);a.l=!0}else d=new gl(d),this.g=new jl(b,a,this,d),
this.g.install(f),c&&(nl(this.g,c),c.onclick=null)};function pl(){this.data=[];this.g=-1}
pl.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
pl.prototype.get=function(a){return!!this.data[a]};
function ql(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function rl(){this.blockSize=-1}
;function sl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
H(sl,rl);sl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function tl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else e<60?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
sl.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)tl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){tl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){tl(this,e);f=0;break}}this.l=f;this.m+=b}};
sl.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;tl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ul(){}
ul.prototype.next=function(){return vl};
var vl={done:!0,value:void 0};ul.prototype.jb=function(){return this};function wl(a){if(a instanceof xl||a instanceof yl||a instanceof zl)return a;if(typeof a.next=="function")return new xl(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new xl(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new xl(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function xl(a){this.g=a}
xl.prototype.jb=function(){return new yl(this.g())};
xl.prototype[Symbol.iterator]=function(){return new zl(this.g())};
xl.prototype.l=function(){return new zl(this.g())};
function yl(a){this.g=a}
y(yl,ul);yl.prototype.next=function(){return this.g.next()};
yl.prototype[Symbol.iterator]=function(){return new zl(this.g)};
yl.prototype.l=function(){return new zl(this.g)};
function zl(a){xl.call(this,function(){return a});
this.i=a}
y(zl,xl);zl.prototype.next=function(){return this.i.next()};function Al(a){var b=[];Bl(new Cl,a,b);return b.join("")}
function Cl(){}
function Bl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Bl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Dl(d,c),c.push(":"),Bl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Dl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var El={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Fl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Dl(a,b){b.push('"',a.replace(Fl,function(c){var d=El[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),El[c]=d);return d}),'"')}
;function Gl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function P(a){Rb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
H(P,Rb);n=P.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Cc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&qb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.pe=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Hl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Za;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Cc(c)}}return e!=0}return!1};
function Hl(a,b,c){xd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Cc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){P.Ea.Ba.call(this);this.clear();this.i.length=0};function Il(a){this.g=a}
Il.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Al(b))};
Il.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Il.prototype.remove=function(a){this.g.remove(a)};function Jl(a){this.g=a}
H(Jl,Il);function Kl(a){this.data=a}
function Ll(a){return a===void 0||a instanceof Kl?a:new Kl(a)}
Jl.prototype.set=function(a,b){Jl.Ea.set.call(this,a,Ll(b))};
Jl.prototype.l=function(a){a=Jl.Ea.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Jl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ml(a){this.g=a}
H(Ml,Jl);Ml.prototype.set=function(a,b,c){if(b=Ll(b)){if(c){if(c<F()){Ml.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}Ml.Ea.set.call(this,a,b)};
Ml.prototype.l=function(a){var b=Ml.Ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())Ml.prototype.remove.call(this,a);else return b}};function Nl(){}
;function Ol(){}
H(Ol,Nl);Ol.prototype[Symbol.iterator]=function(){return wl(this.jb(!0)).l()};
Ol.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Pl(a){this.g=a;this.l=null}
H(Pl,Ol);n=Pl.prototype;n.set=function(a,b){Ql(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Ql(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Ql(this);this.g.removeItem(a)};
n.jb=function(a){Ql(this);var b=0,c=this.g,d=new ul;d.next=function(){if(b>=c.length)return vl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Ql(this);this.g.clear()};
n.key=function(a){Ql(this);return this.g.key(a)};
function Ql(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=Rl(a.g))||qd(Error("Storage mechanism: Storage unavailable"))}
function Rl(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function Sl(){var a=null;try{a=C.localStorage||null}catch(b){}Pl.call(this,a)}
H(Sl,Pl);function Tl(a,b){this.l=a;this.g=b+"::"}
H(Tl,Ol);Tl.prototype.set=function(a,b){this.l.set(this.g+a,b)};
Tl.prototype.get=function(a){return this.l.get(this.g+a)};
Tl.prototype.remove=function(a){this.l.remove(this.g+a)};
Tl.prototype.jb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new ul;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
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
var Q={},Ul=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";Q.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
Q.sd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Vl={lb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Wl={lb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){return[].concat.apply([],a)}};
Q.Jg=function(){Ul?(Q.ib=Uint8Array,Q.Ja=Uint16Array,Q.Me=Int32Array,Q.assign(Q,Vl)):(Q.ib=Array,Q.Ja=Array,Q.Me=Array,Q.assign(Q,Wl))};
Q.Jg();var Xl=!0;try{new Uint8Array(1)}catch(a){Xl=!1}
function Yl(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new Q.ib(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Zl={};Zl=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var $l={},am,bm=[],cm=0;cm<256;cm++){am=cm;for(var dm=0;dm<8;dm++)am=am&1?3988292384^am>>>1:am>>>1;bm[cm]=am}$l=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^bm[(a^b[d])&255];return a^-1};var em={};em={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function fm(a){for(var b=a.length;--b>=0;)a[b]=0}
var gm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],hm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],im=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],jm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],km=Array(576);fm(km);var lm=Array(60);fm(lm);var mm=Array(512);fm(mm);var nm=Array(256);fm(nm);var om=Array(29);fm(om);var pm=Array(30);fm(pm);function qm(a,b,c,d,e){this.De=a;this.nf=b;this.mf=c;this.ef=d;this.rg=e;this.Xd=a&&a.length}
var rm,sm,tm;function um(a,b){this.Gd=a;this.vb=0;this.Ta=b}
function vm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function wm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,vm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function xm(a,b,c){wm(a,c[b*2],c[b*2+1])}
function ym(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function zm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=ym(d[e]++,e))}
function Am(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Qa=a.yb=0;a.za=a.matches=0}
function Bm(a){a.ha>8?vm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Cm(a,b,c){Bm(a);vm(a,c);vm(a,~c);Q.lb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Dm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Em(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Pa;){e<a.Pa&&Dm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Dm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Fm(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Ib+d*2]<<8|a.ba[a.Ib+d*2+1];var f=a.ba[a.Yc+d];d++;if(e===0)xm(a,f,b);else{var g=nm[f];xm(a,g+256+1,b);var h=gm[g];h!==0&&(f-=om[g],wm(a,f,h));e--;g=e<256?mm[e]:mm[256+(e>>>7)];xm(a,g,c);h=hm[g];h!==0&&(e-=pm[g],wm(a,e,h))}}while(d<a.za)}xm(a,256,b)}
function Gm(a,b){var c=b.Gd,d=b.Ta.De,e=b.Ta.Xd,f=b.Ta.ef,g,h=-1;a.Pa=0;a.rb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Pa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Pa<2;){var l=a.da[++a.Pa]=h<2?++h:0;c[l*2]=1;a.depth[l]=0;a.Qa--;e&&(a.yb-=d[l*2+1])}b.vb=h;for(g=a.Pa>>1;g>=1;g--)Em(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Pa--],Em(a,c,1),d=a.da[1],a.da[--a.rb]=g,a.da[--a.rb]=d,c[l*2]=c[g*2]+c[d*2],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=l,a.da[1]=l++,Em(a,c,1);while(a.Pa>=
2);a.da[--a.rb]=a.da[1];g=b.Gd;l=b.vb;d=b.Ta.De;e=b.Ta.Xd;f=b.Ta.nf;var k=b.Ta.mf,m=b.Ta.rg,p,r=0;for(p=0;p<=15;p++)a.La[p]=0;g[a.da[a.rb]*2+1]=0;for(b=a.rb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>l)){a.La[p]++;var t=0;q>=k&&(t=f[q-k]);var u=g[q*2];a.Qa+=u*(p+t);e&&(a.yb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.La[p]===0;)p--;a.La[p]--;a.La[p+1]+=2;a.La[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.La[p];q!==0;)d=a.da[--b],d>l||(g[d*2+1]!==p&&(a.Qa+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}zm(c,h,a.La)}
function Hm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];++g<h&&k===f||(g<l?a.ka[k*2]+=g:k!==0?(k!==e&&a.ka[k*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=k,f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function Im(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];if(!(++g<h&&k===f)){if(g<l){do xm(a,k,a.ka);while(--g!==0)}else k!==0?(k!==e&&(xm(a,k,a.ka),g--),xm(a,16,a.ka),wm(a,g-3,2)):g<=10?(xm(a,17,a.ka),wm(a,g-3,3)):(xm(a,18,a.ka),wm(a,g-11,7));g=0;e=k;f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function Jm(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var Km=!1;function Lm(a,b,c){a.ba[a.Ib+a.za*2]=b>>>8&255;a.ba[a.Ib+a.za*2+1]=b&255;a.ba[a.Yc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(nm[c]+256+1)*2]++,a.ab[(b<256?mm[b]:mm[256+(b>>>7)])*2]++);return a.za===a.Qb-1}
;function Mm(a,b){a.msg=em[b];return b}
function Nm(a){for(var b=a.length;--b>=0;)a[b]=0}
function Om(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(Q.lb(a.output,b.ba,b.Rb,c,a.wb),a.wb+=c,b.Rb+=c,a.ud+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.Rb=0))}
function Pm(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.R.Kc===2&&(a.R.Kc=Jm(a));Gm(a,a.pc);Gm(a,a.fc);Hm(a,a.ta,a.pc.vb);Hm(a,a.ab,a.fc.vb);Gm(a,a.Dd);for(e=18;e>=3&&a.ka[jm[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)wm(a,b?1:0,3),Cm(a,c,d);else if(a.strategy===4||g===f)wm(a,2+(b?1:0),3),Fm(a,km,lm);else{wm(a,4+(b?1:0),3);c=a.pc.vb+1;d=a.fc.vb+1;e+=1;wm(a,c-257,5);wm(a,d-1,5);wm(a,e-4,4);for(f=0;f<e;f++)wm(a,a.ka[jm[f]*
2+1],3);Im(a,a.ta,c-1);Im(a,a.ab,d-1);Fm(a,a.ta,a.ab)}Am(a);b&&Bm(a);a.va=a.C;Om(a.R)}
function R(a,b){a.ba[a.pending++]=b}
function Qm(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function Rm(a,b){var c=a.fe,d=a.C,e=a.wa,f=a.je,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,l=a.Va,k=a.Ia,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Ud&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.ub=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&--c!==0);return e<=
a.G?e:a.G}
function Sm(a){var b=a.ma,c;do{var d=a.Ke-a.G-a.C;if(a.C>=b+(b-262)){Q.lb(a.window,a.window,b,b,0);a.ub-=b;a.C-=b;a.va-=b;var e=c=a.nc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,Q.lb(c,e.input,e.fb,g,f),e.state.wrap===1?e.L=Zl(e.L,c,g,f):e.state.wrap===2&&(e.L=$l(e.L,c,g,f)),e.fb+=g,e.hb+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.S=a.window[d],
a.S=(a.S<<a.Oa^a.window[d+1])&a.Na;a.la&&!(a.S=(a.S<<a.Oa^a.window[d+3-1])&a.Na,a.Ia[d&a.Va]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.R.oa!==0)}
function Tm(a,b){for(var c;;){if(a.G<262){Sm(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=Rm(a,c));if(a.V>=3)if(c=Lm(a,a.C-a.ub,a.V-3),a.G-=a.V,a.V<=a.bd&&a.G>=3){a.V--;do a.C++,a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.S=a.window[a.C],a.S=(a.S<<a.Oa^a.window[a.C+1])&a.Na;else c=Lm(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(Pm(a,!1),a.R.T===0))return 1}a.la=a.C<2?a.C:2;return b===4?(Pm(a,!0),a.R.T===0?3:4):a.za&&(Pm(a,!1),a.R.T===0)?1:2}
function Um(a,b){for(var c,d;;){if(a.G<262){Sm(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);a.wa=a.V;a.ne=a.ub;a.V=2;c!==0&&a.wa<a.bd&&a.C-c<=a.ma-262&&(a.V=Rm(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.ub>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=Lm(a,a.C-1-a.ne,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);
while(--a.wa!==0);a.cb=0;a.V=2;a.C++;if(c&&(Pm(a,!1),a.R.T===0))return 1}else if(a.cb){if((c=Lm(a,0,a.window[a.C-1]))&&Pm(a,!1),a.C++,a.G--,a.R.T===0)return 1}else a.cb=1,a.C++,a.G--}a.cb&&(Lm(a,0,a.window[a.C-1]),a.cb=0);a.la=a.C<2?a.C:2;return b===4?(Pm(a,!0),a.R.T===0?3:4):a.za&&(Pm(a,!1),a.R.T===0)?1:2}
function Vm(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){Sm(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=Lm(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Lm(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(Pm(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(Pm(a,!0),a.R.T===0?3:4):
a.za&&(Pm(a,!1),a.R.T===0)?1:2}
function Wm(a,b){for(var c;;){if(a.G===0&&(Sm(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=Lm(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(Pm(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(Pm(a,!0),a.R.T===0?3:4):a.za&&(Pm(a,!1),a.R.T===0)?1:2}
function Xm(a,b,c,d,e){this.xf=a;this.qg=b;this.tg=c;this.pg=d;this.sf=e}
var Ym;Ym=[new Xm(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){Sm(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,Pm(a,!1),a.R.T===0)return 1;if(a.C-a.va>=a.ma-262&&(Pm(a,!1),a.R.T===0))return 1}a.la=0;if(b===4)return Pm(a,!0),a.R.T===0?3:4;a.C>a.va&&Pm(a,!1);return 1}),
new Xm(4,4,8,4,Tm),new Xm(4,5,16,8,Tm),new Xm(4,6,32,32,Tm),new Xm(4,4,16,16,Um),new Xm(8,16,32,32,Um),new Xm(8,16,128,128,Um),new Xm(8,32,128,256,Um),new Xm(32,128,258,1024,Um),new Xm(32,258,258,4096,Um)];
function Zm(){this.R=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Rb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.sb=-1;this.Va=this.wd=this.ma=0;this.window=null;this.Ke=0;this.head=this.Ia=null;this.je=this.Ud=this.strategy=this.level=this.bd=this.fe=this.wa=this.G=this.ub=this.C=this.cb=this.ne=this.V=this.va=this.Oa=this.Na=this.Tc=this.nc=this.S=0;this.ta=new Q.Ja(1146);this.ab=new Q.Ja(122);this.ka=new Q.Ja(78);Nm(this.ta);Nm(this.ab);Nm(this.ka);this.Dd=this.fc=this.pc=
null;this.La=new Q.Ja(16);this.da=new Q.Ja(573);Nm(this.da);this.rb=this.Pa=0;this.depth=new Q.Ja(573);Nm(this.depth);this.ha=this.pa=this.la=this.matches=this.yb=this.Qa=this.Ib=this.za=this.Qb=this.Yc=0}
function $m(a,b){if(!a||!a.state||b>5||b<0)return a?Mm(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return Mm(a,a.T===0?-5:-2);c.R=a;var d=c.sb;c.sb=b;if(c.status===42)if(c.wrap===2)a.L=0,R(c,31),R(c,139),R(c,8),c.K?(R(c,(c.K.text?1:0)+(c.K.Ra?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),R(c,c.K.time&255),R(c,c.K.time>>8&255),R(c,c.K.time>>16&255),R(c,c.K.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.K.fi&255),c.K.extra&&c.K.extra.length&&
(R(c,c.K.extra.length&255),R(c,c.K.extra.length>>8&255)),c.K.Ra&&(a.L=$l(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.wd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;Qm(c,e+(31-e%31));c.C!==0&&(Qm(c,a.L>>>16),Qm(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Ra&&c.pending>e&&(a.L=$l(a.L,c.ba,c.pending-e,e)),Om(a),e=c.pending,c.pending!==c.Aa));)R(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Ra&&c.pending>e&&(a.L=$l(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=$l(a.L,c.ba,c.pending-e,e)),Om(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>
e&&(a.L=$l(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=$l(a.L,c.ba,c.pending-e,e)),Om(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>e&&(a.L=$l(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Ra?(c.pending+2>c.Aa&&Om(a),c.pending+2<=c.Aa&&(R(c,
a.L&255),R(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(Om(a),a.T===0)return c.sb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Mm(a,-5);if(c.status===666&&a.oa!==0)return Mm(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?Wm(c,b):c.strategy===3?Vm(c,b):Ym[c.level].sf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.sb=-1),0;if(d===2&&(b===1?(wm(c,2,3),xm(c,256,km),c.ha===16?(vm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(wm(c,0,3),Cm(c,0,0),b===3&&(Nm(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),Om(a),a.T===0))return c.sb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.L&255),R(c,a.L>>8&255),R(c,a.L>>16&255),R(c,a.L>>24&255),R(c,a.hb&255),R(c,a.hb>>8&255),R(c,a.hb>>16&255),R(c,a.hb>>24&255)):(Qm(c,a.L>>>16),Qm(c,a.L&65535));Om(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var an={};an=function(){this.input=null;this.hb=this.oa=this.fb=0;this.output=null;this.ud=this.T=this.wb=0;this.msg="";this.state=null;this.Kc=2;this.L=0};var bn=Object.prototype.toString;
function cn(a){if(!(this instanceof cn))return new cn(a);a=this.options=Q.assign({level:-1,method:8,chunkSize:16384,Wa:15,sg:8,strategy:0,Ua:""},a||{});a.raw&&a.Wa>0?a.Wa=-a.Wa:a.yf&&a.Wa>0&&a.Wa<16&&(a.Wa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new an;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.Wa,f=a.sg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Mm(b,-2);else{e===8&&(e=9);var l=new Zm;
b.state=l;l.R=b;l.wrap=h;l.K=null;l.wd=e;l.ma=1<<l.wd;l.Va=l.ma-1;l.Tc=f+7;l.nc=1<<l.Tc;l.Na=l.nc-1;l.Oa=~~((l.Tc+3-1)/3);l.window=new Q.ib(l.ma*2);l.head=new Q.Ja(l.nc);l.Ia=new Q.Ja(l.ma);l.Qb=1<<f+6;l.Aa=l.Qb*4;l.ba=new Q.ib(l.Aa);l.Ib=1*l.Qb;l.Yc=3*l.Qb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.hb=b.ud=0;b.Kc=2;c=b.state;c.pending=0;c.Rb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.sb=0;if(!Km){d=Array(16);for(f=g=0;f<28;f++)for(om[f]=g,e=0;e<1<<gm[f];e++)nm[g++]=
f;nm[g-1]=f;for(f=g=0;f<16;f++)for(pm[f]=g,e=0;e<1<<hm[f];e++)mm[g++]=f;for(g>>=7;f<30;f++)for(pm[f]=g<<7,e=0;e<1<<hm[f]-7;e++)mm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)km[e*2+1]=8,e++,d[8]++;for(;e<=255;)km[e*2+1]=9,e++,d[9]++;for(;e<=279;)km[e*2+1]=7,e++,d[7]++;for(;e<=287;)km[e*2+1]=8,e++,d[8]++;zm(km,287,d);for(e=0;e<30;e++)lm[e*2+1]=5,lm[e*2]=ym(e,5);rm=new qm(km,gm,257,286,15);sm=new qm(lm,hm,0,30,15);tm=new qm([],im,0,19,7);Km=!0}c.pc=new um(c.ta,rm);c.fc=new um(c.ab,sm);c.Dd=
new um(c.ka,tm);c.pa=0;c.ha=0;Am(c);c=0}else c=Mm(b,-2);c===0&&(b=b.state,b.Ke=2*b.ma,Nm(b.head),b.bd=Ym[b.level].qg,b.Ud=Ym[b.level].xf,b.je=Ym[b.level].tg,b.fe=Ym[b.level].pg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.cb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(em[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Jb){var k;typeof a.Jb==="string"?k=Yl(a.Jb):bn.call(a.Jb)==="[object ArrayBuffer]"?k=new Uint8Array(a.Jb):k=a.Jb;a=this.R;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,b===2||b===1&&k.status!==42||k.G)b=-2;else{b===1&&(a.L=Zl(a.L,f,g,0));k.wrap=0;g>=k.ma&&(b===0&&(Nm(k.head),k.C=0,k.va=0,k.la=0),c=new Q.ib(k.ma),Q.lb(c,f,g-k.ma,k.ma,0),f=c,g=k.ma);c=a.oa;d=a.fb;e=a.input;a.oa=g;a.fb=0;a.input=f;for(Sm(k);k.G>=3;){f=k.C;g=k.G-2;do k.S=(k.S<<k.Oa^k.window[f+3-1])&k.Na,k.Ia[f&k.Va]=k.head[k.S],k.head[k.S]=f,f++;while(--g);k.C=f;k.G=2;Sm(k)}k.C+=k.G;k.va=k.C;k.la=k.G;k.G=0;k.V=k.wa=2;k.cb=0;a.fb=d;a.input=e;a.oa=c;k.wrap=b;b=0}else b=-2;if(b!==0)throw Error(em[b]);
this.Eh=!0}}
cn.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Yl(a):bn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.oa=c.input.length;do{c.T===0&&(c.output=new Q.ib(d),c.wb=0,c.T=d);a=$m(c,e);if(a!==1&&a!==0)return dn(this,a),this.ended=!0,!1;if(c.T===0||c.oa===0&&(e===4||e===2))if(this.options.Ua==="string"){var f=Q.sd(c.output,c.wb);b=f;f=f.length;if(f<65537&&(b.subarray&&Xl||!b.subarray))b=
String.fromCharCode.apply(null,Q.sd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=Q.sd(c.output,c.wb),this.chunks.push(b)}while((c.oa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Mm(c,-2):(c.state=null,a=d===113?Mm(c,-3):0)):a=-2,dn(this,a),this.ended=!0,a===0;e===2&&(dn(this,0),c.T=0);return!0};
function dn(a,b){b===0&&(a.result=a.options.Ua==="string"?a.chunks.join(""):Q.Nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
;function en(a){this.name=a}
;var fn=new en("rawColdConfigGroup");var gn=new en("rawHotConfigGroup");function hn(a){this.U=Ue(a)}
y(hn,xf);hn.prototype.g=function(a){J(this,5,a)};function jn(a){this.U=Ue(a)}
y(jn,xf);function kn(a){this.U=Ue(a)}
y(kn,xf);kn.gb=[2];function ln(a){this.U=Ue(a)}
y(ln,xf);ln.prototype.pb=function(){return sf(this,61)};
ln.prototype.getPlayerType=function(){return sf(this,36)};
ln.prototype.setHomeGroupInfo=function(a){return of(this,kn,81,a)};
ln.gb=[9,66,32,86,100,101];function mn(a){this.U=Ue(a)}
y(mn,xf);var nn=[2,3,4,5,6];function on(a){this.U=Ue(a)}
y(on,xf);on.gb=[15,26,28];function pn(a){this.U=Ue(a)}
y(pn,xf);pn.gb=[5];function qn(a){this.U=Ue(a)}
y(qn,xf);function rn(a){this.U=Ue(a)}
y(rn,xf);rn.prototype.setSafetyMode=function(a){return vf(this,5,a)};
rn.gb=[12];function sn(a){this.U=Ue(a)}
y(sn,xf);sn.gb=[12];var tn={Dh:"WEB_DISPLAY_MODE_UNKNOWN",zh:"WEB_DISPLAY_MODE_BROWSER",Bh:"WEB_DISPLAY_MODE_MINIMAL_UI",Ch:"WEB_DISPLAY_MODE_STANDALONE",Ah:"WEB_DISPLAY_MODE_FULLSCREEN"};function un(a){this.U=Ue(a,497)}
y(un,xf);function vn(a){this.U=Ue(a)}
y(vn,xf);function wn(a){this.U=Ue(a)}
y(wn,xf);wn.prototype.getPlaylistId=function(){return tf(this,2)};
var uf=[1,2];function xn(a){this.U=Ue(a)}
y(xn,xf);xn.gb=[3];var yn=C.window,zn,An,Bn=(yn==null?void 0:(zn=yn.yt)==null?void 0:zn.config_)||(yn==null?void 0:(An=yn.ytcfg)==null?void 0:An.data_)||{};G("yt.config_",Bn);function Cn(){var a=arguments;a.length>1?Bn[a[0]]=a[1]:a.length===1&&Object.assign(Bn,a[0])}
function S(a,b){return a in Bn?Bn[a]:b}
;var Dn={};function En(){return Dn.clicktracking||(Dn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function T(a){a=Fn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function V(a,b){a=Fn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Fn(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Gn(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function Hn(a,b,c,d){Qf.set(""+a,b,{ad:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var In=[];function Jn(a){In.forEach(function(b){return b(a)})}
function Kn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ln(b)}}:a}
function Ln(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Cn("ERRORS",b));Jn(a)}
function Mn(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Cn("ERRORS",f))}
;var Nn=/^[\w.]*$/,On={q:!0,search_query:!0};function Pn(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Qn(f[0]||""),h=Qn(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?rb(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,m=f[0],p=String(Pn);k.args=[{key:m,value:f[1],query:a,method:Rn===p?"unchanged":p}];On.hasOwnProperty(m)||Mn(k)}}return c}
var Rn=String(Pn);function Sn(a){var b=[];sb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];ob(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Tn(a){a.charAt(0)==="?"&&(a=a.substring(1));return Pn(a,"&")}
function Un(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Tn(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Nb(a,e)+d}
function Vn(a){if(!b)var b=window.location.href;var c=a.match(Gb)[1]||null,d=Ib(a);c&&d?(a=a.match(Gb),b=b.match(Gb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ib(b)===d&&(Number(b.match(Gb)[4]||null)||null)===(Number(a.match(Gb)[4]||null)||null):!0;return a}
function Qn(a){return a&&a.match(Nn)?a:Fb(a)}
;var Wn=Sd||Td;function Xn(a){var b=Xb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Yn=Date.now().toString();function Zn(a){var b=$n;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=If;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?zf:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=(l=zf.screen)==null?void 0:l.height;var k;e.u_w=(k=zf.screen)==null?void 0:k.width;var m;e.u_ah=(m=zf.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=zf.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=zf.screen)==null?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var u=h.outerWidth;var A=h.outerHeight}catch(fb){}try{var K=h.innerWidth;var O=h.innerHeight}catch(fb){}try{var X=h.screenLeft;var U=h.screenTop}catch(fb){}try{K=h.innerWidth,O=h.innerHeight}catch(fb){}try{var da=h.screen.availWidth;var Va=h.screen.availTop}catch(fb){}q=[X,U,q,t,da,Va,u,A,K,O];t=b.g.top;try{var gb=(t||window).document,sa=
gb.compatMode=="CSS1Compat"?gb.documentElement:gb.body;var Ea=(new ld(sa.clientWidth,sa.clientHeight)).round()}catch(fb){Ea=new ld(-12245933,-12245933)}gb=Ea;Ea={};var Ka=Ka===void 0?C:Ka;sa=new pl;"SVGElement"in Ka&&"createElementNS"in Ka.document&&sa.set(0);t=Ff();t["allow-top-navigation-by-user-activation"]&&sa.set(1);t["allow-popups-to-escape-sandbox"]&&sa.set(2);Ka.crypto&&Ka.crypto.subtle&&sa.set(3);"TextDecoder"in Ka&&"TextEncoder"in Ka&&sa.set(4);Ka=ql(sa);Ea.bc=Ka;Ea.bih=gb.height;Ea.biw=
gb.width;Ea.brdim=q.join();b=b.l;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!zf.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var $n=new function(){var a=window.document;this.g=window;this.l=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return Sn(Zn(a))});F();var ao="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function bo(){if(!ao)return null;var a=ao();return"open"in a?a:null}
;function co(a,b){typeof a==="function"&&(a=Kn(a));return window.setTimeout(a,b)}
;var eo="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(eo);var fo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},go="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(eo)),ho=!1;
function io(a,b,c,d,e,f,g,h){function l(){(k&&"readyState"in k?k.readyState:0)===4&&b&&Kn(b)(k)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var k=bo();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=jo(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=ko(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){Mn(p)}}k.send(d);return k}
function ko(a,b){b=b===void 0?{}:b;var c=Vn(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in fo){var g=S(fo[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var l;if(!(l=!g)){if(!(l=c||(Ib(a)?!1:!0))){l=a;var k;if(k=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))k=Ib(l),k=k!==null?k.split(".").reverse():null,k=k===null?
!1:k[1]==="google"?!0:k[2]==="google"?k[0]==="au"&&k[1]==="com"?!0:k[0]==="uk"&&k[1]==="co"?!0:!1:!1;k&&(l=Hb(l.match(Gb)[5]||null)||"",l=l.split("/"),l="/"+(l.length>1?l[1]:""),k=l==="/pagead");l=k?!0:!1}l=!l}l||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ib(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ib(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Ib(a)||(b["X-YouTube-Ad-Signals"]=Sn(Zn()));return b}
function lo(a,b){b.method="POST";b.postParams||(b.postParams={});return mo(a,b)}
function mo(a,b){var c=b.format||"JSON";a=no(a,b);var d=oo(a,b),e=!1,f=po(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,p=400<=l.status&&l.status<500,r=500<=l.status&&l.status<600;if(k||p||r)m=qo(a,c,l,b.convertToSafeHtml);k&&(k=ro(c,l,m));m=m||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,m):b.onError&&b.onError.call(p,l,m);b.onFinish&&
b.onFinish.call(p,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=co(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function no(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Un(a,b||{},!0);return a}
function oo(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ib(a)&&!b.withCredentials&&Ib(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Tn(e),vb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!ho&&a&&b.method!=="POST"&&(ho=!0,Ln(Error("AJAX request with postData should use POST")));return e}
function qo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Mn(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?so(a):null)e={},ob(a.getElementsByTagName("*"),function(g){e[g.tagName]=to(g)})}d&&uo(e);
return e}
function uo(a){if(La(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ab(a[b]);a[c]=d}else uo(a[b])}}
function ro(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function so(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function to(a){var b="";ob(a.childNodes,function(c){b+=c.nodeValue});
return b}
function jo(a){var b=window.location.search,c=Ib(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Vn(a)&&(c=document.location.hostname);var d=Hb(a.match(Gb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Tn(b),f={};ob(go,function(g){e[g]&&(f[g]=e[g])});
return Un(a,f||{},!1)}
var po=io;function vo(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function wo(){}
;function xo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;G("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var yo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Ao={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Bo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Co(){var a=C.navigator;return a?a.connection:void 0}
;function Do(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Do,Error);function Eo(){try{return Fo(),!0}catch(a){return!1}}
function Fo(){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new Do("Datasync ID not set","unknown");}
;function Go(){}
function Ho(a,b){return Zf.Ya(a,0,b)}
Go.prototype.Ga=function(a,b){return this.Ya(a,1,b)};
Go.prototype.Fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Io=V("web_emulated_idle_callback_delay",300),Jo=1E3/60-3,Ko=[8,5,4,3,2,1,0];
function Lo(a){a=a===void 0?{}:a;Rb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(Ko),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=Jo;this.u=0;this.O=this.wg.bind(this);this.ea=this.Tg.bind(this);this.X=this.Se.bind(this);this.Y=this.Uf.bind(this);this.ca=this.Bg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(Lo,Rb);n=Lo.prototype;n.Fb=function(a){var b=F();Mo(a);a=F()-b;this.s||(this.A-=a)};
n.Ya=function(a,b,c){++this.I;if(b===10)return this.Fb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&No(this)!==this.u&&Oo(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function Po(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};Oo(a)}
function No(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function Qo(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Mo(a){try{a()}catch(b){Qo(b)}}
function Ro(a){for(var b=w(Ko),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Uf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;So(this,b);this.J=!1};
n.Tg=function(){So(this)};
n.Se=function(){To(this)};
n.Bg=function(a){this.D=!0;var b=No(this);b===4&&b!==this.u&&(Oo(this),this.start());So(this,void 0,a);this.D=!1};
n.wg=function(){document.hidden||To(this);this.g&&(Oo(this),this.start())};
function To(a){Oo(a);a.s=!0;for(var b=F(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Mo(e)}Uo(a);a.s=!1;Ro(a)&&a.start();b=F()-b;a.A-=b}
function Uo(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function So(a,b,c){a.D&&a.u===4&&a.g||Oo(a);a.s=!0;b=F()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){Qo(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Mo(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(F()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&Mo(c)}while(c&&F()<b)}a.s=!1;Uo(a);a.A=Jo;Ro(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=No(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Io);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function Oo(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){Po(this);Oo(this);this.F&&document.removeEventListener("visibilitychange",this.O);Rb.prototype.Ba.call(this)};var Vo=D("yt.scheduler.instance.timerIdMap_")||{},Wo=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),Xo=0,Yo=0;function Zo(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Za)a=new Lo(S("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function $o(){ap();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),G("ytglobal.schedulerInstanceInstance_",null))}
function ap(){Po(Zo());for(var a in Vo)Vo.hasOwnProperty(a)&&delete Vo[Number(a)]}
function bp(a,b,c){if(!c)return c=c===void 0,-Zo().Ya(a,b,c);var d=window.setTimeout(function(){var e=Zo().Ya(a,b);Vo[d]=e},c);
return d}
function cp(a){Zo().Fb(a)}
function dp(a){var b=Zo();if(a<0)b.xa(-a);else{var c=Vo[a];c?(b.xa(c),delete Vo[a]):window.clearTimeout(a)}}
function ep(){fp()}
function fp(){window.clearTimeout(Xo);Zo().start()}
function gp(){var a=Zo();Oo(a);a.H=!0;window.clearTimeout(Xo);Xo=window.setTimeout(ep,Wo)}
function hp(){window.clearTimeout(Yo);Yo=window.setTimeout(function(){ip(0)},Wo)}
function ip(a){hp();var b=Zo();b.o=a;b.start()}
function jp(a){hp();var b=Zo();b.o>a&&(b.o=a,b.start())}
function kp(){window.clearTimeout(Yo);var a=Zo();a.o=0;a.start()}
;function lp(){Go.apply(this,arguments)}
y(lp,Go);function mp(){lp.g||(lp.g=new lp);return lp.g}
lp.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):co(a,c||0)};
lp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
lp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Zf=mp();
T("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(G("yt.scheduler.instance.dispose",$o),G("yt.scheduler.instance.addJob",bp),G("yt.scheduler.instance.addImmediateJob",cp),G("yt.scheduler.instance.cancelJob",dp),G("yt.scheduler.instance.cancelAllJobs",ap),G("yt.scheduler.instance.start",fp),G("yt.scheduler.instance.pause",gp),G("yt.scheduler.instance.setPriorityThreshold",ip),G("yt.scheduler.instance.enablePriorityThreshold",jp),G("yt.scheduler.instance.clearPriorityThreshold",kp),G("yt.scheduler.initialized",
!0));function np(a){var b=new Sl;this.g=(a=(b.l=Rl(b.g))?a?new Tl(b,a):b:null)?new Ml(a):null;this.l=document.domain||window.location.hostname}
np.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Al(b))}catch(f){return}else e=escape(b);Hn(a,e,c,this.l)};
np.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Qf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
np.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Qf.remove(""+a,"/",b===void 0?"youtube.com":b)};var op=function(){var a;return function(){a||(a=new np("ytidb"));return a}}();
function pp(){var a;return(a=op())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var qp=[],rp=!1;function sp(a){rp||(qp.push({type:"ERROR",payload:a}),qp.length>10&&qp.shift())}
function tp(a,b){rp||(qp.push({type:"EVENT",eventType:a,payload:b}),qp.length>10&&qp.shift())}
;function up(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function vp(a){return a.substr(0,a.indexOf(":"))||a}
;var wp={},xp=(wp.AUTH_INVALID="No user identifier specified.",wp.EXPLICIT_ABORT="Transaction was explicitly aborted.",wp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",wp.MISSING_INDEX="Index not created.",wp.MISSING_OBJECT_STORES="Object stores not created.",wp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",wp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",wp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
wp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",wp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",wp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",wp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",wp),yp={},zp=(yp.AUTH_INVALID="ERROR",yp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",yp.EXPLICIT_ABORT="IGNORED",yp.IDB_NOT_SUPPORTED="ERROR",yp.MISSING_INDEX=
"WARNING",yp.MISSING_OBJECT_STORES="ERROR",yp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",yp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",yp.QUOTA_EXCEEDED="WARNING",yp.QUOTA_MAYBE_EXCEEDED="WARNING",yp.UNKNOWN_ABORT="WARNING",yp.INCOMPATIBLE_DB_VERSION="WARNING",yp),Ap={},Bp=(Ap.AUTH_INVALID=!1,Ap.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ap.EXPLICIT_ABORT=!1,Ap.IDB_NOT_SUPPORTED=!1,Ap.MISSING_INDEX=!1,Ap.MISSING_OBJECT_STORES=!1,Ap.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ap.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ap.QUOTA_EXCEEDED=!1,Ap.QUOTA_MAYBE_EXCEEDED=!0,Ap.UNKNOWN_ABORT=!0,Ap.INCOMPATIBLE_DB_VERSION=!1,Ap);function W(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?xp[a]:c;d=d===void 0?zp[a]:d;e=e===void 0?Bp[a]:e;Do.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
y(W,Do);function Cp(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},xp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Cp.prototype)}
y(Cp,W);function Dp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Dp.prototype)}
y(Dp,Error);var Ep=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Fp(a,b,c,d){b=vp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new W("QUOTA_EXCEEDED",a);if(Ud&&e.name==="UnknownError")return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Dp)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ep.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",di:e.name})];e.level="WARNING";return e}
function Gp(a,b,c){var d=pp();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Hp(a){if(!a)throw Error();throw a;}
function Ip(a){return a}
function Jp(a){this.g=a}
function Kp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Kp.resolve=function(a){return new Kp(new Jp(function(b,c){a instanceof Kp?a.then(b,c):b(a)}))};
Kp.reject=function(a){return new Kp(new Jp(function(b,c){c(a)}))};
Kp.prototype.then=function(a,b){var c=this,d=a!=null?a:Ip,e=b!=null?b:Hp;return new Kp(new Jp(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){Lp(c,c,d,f,g)}),c.l.push(function(){Mp(c,c,e,f,g)})):c.state.status==="FULFILLED"?Lp(c,c,d,f,g):c.state.status==="REJECTED"&&Mp(c,c,e,f,g)}))};
function Np(a,b){a.then(void 0,b)}
function Lp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Kp?Op(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Kp?Op(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Op(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Kp?Op(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Pp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Qp(a){return new Promise(function(b,c){Pp(a,b,c)})}
function Rp(a){return new Kp(new Jp(function(b,c){Pp(a,b,c)}))}
;function Sp(a,b){return new Kp(new Jp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Tp=window,Y=Tp.ytcsi&&Tp.ytcsi.now?Tp.ytcsi.now:Tp.performance&&Tp.performance.timing&&Tp.performance.now&&Tp.performance.timing.navigationStart?function(){return Tp.performance.timing.navigationStart+Tp.performance.now()}:function(){return(new Date).getTime()};function Up(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=Up.prototype;n.add=function(a,b,c){return Vp(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Vp(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function Wp(a,b,c){a=a.g.createObjectStore(b,c);return new Xp(a)}
n.delete=function(a,b){return Vp(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Vp(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function Yp(a,b,c){return Vp(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return Rp(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Vp(a,b,c,d){var e,f,g,h,l,k,m,p,r,q,t,u;return B(function(A){switch(A.g){case 1:var K={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){A.M(4);break}g++;l=Math.round(Y());ua(A,5);k=a.g.transaction(b,e.mode);K=new Zp(k);K=$p(K,d);return z(A,K,7);case 7:return m=A.l,p=Math.round(Y()),aq(a,l,p,g,void 0,b.join(),e),A.return(m);case 5:r=va(A);q=Math.round(Y());t=Fp(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof W&&!t.g)||g>=f)aq(a,l,q,g,t,b.join(),e),h=t;A.M(2);break;case 4:return A.return(Promise.reject(h))}})}
function aq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&tp("QUOTA_EXCEEDED",{dbName:vp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),tp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),bq(a,!1,d,f,b,g.tag),sp(e)):bq(a,!0,d,f,b,g.tag)}
function bq(a,b,c,d,e,f){tp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function Xp(a){this.g=a}
n=Xp.prototype;n.add=function(a,b){return Rp(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return Rp(this.g.clear()).then(function(){})};
function cq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function dq(a,b){return eq(a,{query:b},function(c){return c.delete().then(function(){return fq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?dq(this,a):Rp(this.g.delete(a))};
n.get=function(a){return Rp(this.g.get(a))};
n.index=function(a){try{return new gq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Dp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function eq(a,b,c){a=a.g.openCursor(b.query,b.direction);return hq(a).then(function(d){return Sp(d,c)})}
function Zp(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(l===null)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function $p(a,b){var c=new Promise(function(d,e){try{Np(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Zp.prototype.abort=function(){this.g.abort();this.l=!0;throw new W("EXPLICIT_ABORT");};
Zp.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Xp(a),this.i.set(a,b));return b};
function gq(a){this.g=a}
gq.prototype.delete=function(a){return iq(this,{query:a},function(b){return b.delete().then(function(){return fq(b)})})};
gq.prototype.get=function(a){return Rp(this.g.get(a))};
gq.prototype.keyPath=function(){return this.g.keyPath};
gq.prototype.unique=function(){return this.g.unique};
function iq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return hq(a).then(function(d){return Sp(d,c)})}
function jq(a,b){this.request=a;this.cursor=b}
function hq(a){return Rp(a).then(function(b){return b?new jq(a,b):null})}
function fq(a){a.cursor.continue(void 0);return hq(a.request)}
jq.prototype.delete=function(){return Rp(this.cursor.delete()).then(function(){})};
jq.prototype.update=function(a){return Rp(this.cursor.update(a))};function kq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Up(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ve,l=c.We,k=c.Rg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&tp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:vp(a)});var t=f(),u=new Zp(g.transaction);m&&
m(t,function(A){return q.oldVersion<A&&q.newVersion>=A},u);
u.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){tp("IDB_UNEXPECTEDLY_CLOSED",{dbName:vp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function lq(a,b,c){c=c===void 0?{}:c;return kq(a,b,c)}
function mq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ve)&&c.addEventListener("blocked",function(){e()}),z(g,Qp(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=va(g),Fp(f,a,"",-1);})}
;function nq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
nq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return lq(a,b,c)};
nq.prototype.delete=function(a){a=a===void 0?{}:a;return mq(this.name,a)};
function oq(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function pq(a,b){if(!b)throw Gp("openWithToken",vp(a.name));return qq(a)}
function qq(a){function b(){var f,g,h,l,k,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",ua(u,2),z(u,a.l(a.name,a.options.version,d),4);case 4:for(var A=h=u.l,K=a.options,O=[],X=w(Object.keys(K.xb)),U=X.next();!U.done;U=X.next()){U=U.value;var da=K.xb[U],Va=da.Dg===void 0?Number.MAX_VALUE:da.Dg;!(A.g.version>=da.Gb)||A.g.version>=Va||A.g.objectStoreNames.contains(U)||O.push(U)}l=O;if(l.length===0){u.M(5);break}k=Object.keys(a.options.xb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),sp(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.m<V("ytidb_remake_db_retries",1))){u.M(6);break}a.m++;return z(u,a.delete(),7);case 7:return sp(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Cp(m,k);case 5:return u.return(h);case 2:p=va(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.M(8);break}return z(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,oq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Fp(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw oq(a);if(a.g)return a.g;var d={We:function(f){f.close()},
closed:c,Rg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var rq=new nq("YtIdbMeta",{xb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&Wp(a,"databases",{keyPath:"actualName"})}});
function sq(a,b){var c;return B(function(d){if(d.g==1)return z(d,pq(rq,b),2);c=d.l;return d.return(Vp(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Rp(f.g.put(a,void 0)).then(function(){})})}))})}
function tq(a,b){var c;return B(function(d){if(d.g==1)return a?z(d,pq(rq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function uq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],z(e,pq(rq,b),2)):e.g!=3?(d=e.l,z(e,Vp(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return eq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return fq(g)})}),3)):e.return(c)})}
function vq(a){return uq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var wq,xq=new function(){}(new function(){});
function yq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=pp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Wn)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&parseInt(f[1],10)>=602));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,sq(d,xq),4);case 4:return z(e,tq("yt-idb-test-do-not-use",xq),5);case 5:return e.return(!0);case 2:return va(e),e.return(!1)}})}
function zq(){if(wq!==void 0)return wq;rp=!0;return wq=yq().then(function(a){rp=!1;var b;if((b=op())!=null&&b.g){var c;b={hasSucceededOnce:((c=pp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=op())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Aq(){return D("ytglobal.idbToken_")||void 0}
function Bq(){var a=Aq();return a?Promise.resolve(a):zq().then(function(b){(b=b?xq:void 0)&&G("ytglobal.idbToken_",b);return b})}
;new Gl;function Cq(a){if(!Eo())throw a=new W("AUTH_INVALID",{dbName:a}),sp(a),a;var b=Fo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Dq(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",z(m,Bq(),2);case 2:g=m.l;if(!g)throw h=Gp("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sp(h),h;up(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Cq(a);ua(m,3);return z(m,sq(l,g),5);case 5:return z(m,lq(l.actualName,b,d),6);case 6:return m.return(m.l);case 3:return k=va(m),ua(m,7),z(m,tq(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:va(m);case 8:throw k;}})}
function Eq(a,b,c){c=c===void 0?{}:c;return Dq(a,b,!1,c)}
function Fq(a,b,c){c=c===void 0?{}:c;return Dq(a,b,!0,c)}
function Gq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return z(e,Bq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();up(a);d=Cq(a);return z(e,mq(d.actualName,b),3)}return z(e,tq(d.actualName,c),0)})}
function Hq(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?z(e,mq(d.actualName,b),2):z(e,tq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Iq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return z(d,Bq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();up("LogsDatabaseV2");return z(d,vq(b),3)}c=d.l;return z(d,Hq(c,a,b),0)})}
function Jq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return z(d,Bq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();up(a);return z(d,mq(a,b),3)}return z(d,tq(a,c),0)})}
;function Kq(a,b){nq.call(this,a,b);this.options=b;up(a)}
y(Kq,nq);function Lq(a,b){var c;return function(){c||(c=new Kq(a,b));return c}}
Kq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Fq:Eq)(a,b,Object.assign({},c))};
Kq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Jq:Gq)(this.name,a)};
function Mq(a,b){return Lq(a,b)}
;var Nq={},Oq=Mq("ytGcfConfig",{xb:(Nq.coldConfigStore={Gb:1},Nq.hotConfigStore={Gb:1},Nq),shared:!1,upgrade:function(a,b){b(1)&&(cq(Wp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),cq(Wp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Pq(a){return pq(Oq(),a)}
function Qq(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,Pq(c),2);case 2:return e=g.l,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,Yp(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function Rq(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,Pq(d),2);case 2:return f=h.l,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,Yp(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function Sq(a){var b,c;return B(function(d){return d.g==1?z(d,Pq(a),2):d.g!=3?(b=d.l,c=void 0,z(d,Vp(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return iq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function Tq(a){var b,c;return B(function(d){return d.g==1?z(d,Pq(a),2):d.g!=3?(b=d.l,c=void 0,z(d,Vp(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return iq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function Uq(){Rb.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],G("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Uq,Rb);Uq.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Rb.prototype.Ba.call(this)};function Vq(){this.l=0;this.i=new Uq}
function Wq(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!T("start_client_gcf")){g.M(0);break}c&&(a.m=c,G("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Aq();if(!d){g.M(3);break}if(c){g.M(4);break}return z(g,Tq(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return z(g,Qq(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function Xq(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!T("start_client_gcf"))return h.M(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Aq())?c?h.M(4):z(h,Sq(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return z(h,Rq(c,b,g,d),0)})}
Vq.prototype.g=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function Yq(){return"INNERTUBE_API_KEY"in Bn&&"INNERTUBE_API_VERSION"in Bn}
function Zq(){return{Xf:S("INNERTUBE_API_KEY"),Yf:S("INNERTUBE_API_VERSION"),Uc:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ae:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Zf:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),be:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),de:S("INNERTUBE_CONTEXT_HL"),ce:S("INNERTUBE_CONTEXT_GL"),ag:S("INNERTUBE_HOST_OVERRIDE")||"",cg:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bg:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function $q(a){var b={client:{hl:a.de,gl:a.ce,clientName:a.ae,clientVersion:a.be,configInfo:a.Uc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Gn();c.length>0&&(b.request={internalExperimentFlags:c});ar(a,void 0,b);br(void 0,b);cr(void 0,b);dr(a,void 0,b);er(void 0,b);T("start_client_gcf")&&fr(void 0,b);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&
(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Tn(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function ar(a,b,c){a=a.ae;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=nf(b,jn,96)||new jn;var d=vo();d=Object.keys(tn).indexOf(d);d=d===-1?null:d;d!==null&&vf(c,3,d);of(b,jn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=vo())}
function br(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=nf(a,pn,7)||new pn,J(b,4,c),of(a,pn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function cr(a,b){var c;if(T("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?hf(a,95,Ie(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function dr(a,b,c){if(a.appInstallData)if(b){var d;c=(d=nf(b,hn,62))!=null?d:new hn;J(c,6,a.appInstallData);of(b,hn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function er(a,b){a:{var c=Co();if(c){var d=yo[c.type||"unknown"]||"CONN_UNKNOWN";c=yo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?vf(a,61,zo[d]):b&&(b.client.connectionType=d));T("web_log_effective_connection_type")&&(d=Co(),d=d!=null&&d.effectiveType?Bo.hasOwnProperty(d.effectiveType)?Bo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?vf(a,94,Ao[d]):
b&&(b.client.effectiveConnectionType=d)))}
function gr(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Gh||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Fh;else{wo.g||(wo.g=new wo);a={};c=[];var e=T("enable_first_party_auth_v2")||void 0;"USER_SESSION_ID"in Bn&&e&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=Uf(c))a.Authorization=c,c=void 0,
c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Bn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Bn&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));T("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function fr(a,b){if(!Vq.g){var c=new Vq;Vq.g=c}c=Vq.g;var d=Y()-c.l;if(c.l!==0&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=nf(a,hn,62))!=null?g:new hn;g=J(b,1,d);J(g,3,c).g(e);of(a,hn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var hr=typeof TextEncoder!=="undefined"?new TextEncoder:null,ir=hr?function(a){return hr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var jr=D("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Cc;P.prototype.publish=P.prototype.pe;P.prototype.clear=P.prototype.clear;G("ytPubsub2Pubsub2Instance",jr);G("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);function kr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={vi:a,ui:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var lr=void 0,mr=void 0;function nr(){if(!mr){var a=S("WORKER_SERIALIZATION_URL");mr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return mr||void 0}
function or(){var a=nr();lr||a===void 0||(lr=new Worker(Ya(a),void 0));return lr}
;var pr=V("max_body_size_to_compress",5E5),qr=V("min_body_size_to_compress",500),rr=!0,sr=0,tr=0,ur=V("compression_performance_threshold_lr",250),vr=V("slow_compressions_before_abandon_count",4),wr=!1,xr=new Map,yr=1,zr=!0;function Ar(){if(typeof Worker==="function"&&nr()&&!wr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=xr.get(c.key);d&&(Br(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),xr.delete(c.key))}},b=or();
b&&(b.addEventListener("message",a),b.onerror=function(){xr.clear()},wr=!0)}}
function Cr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(rr)try{try{var g=(new Blob(b.split(""))).size}catch(m){Mn(m),g=null}if(g!=null&&(g>pr||g<qr))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!zr||!T("initial_gzip_use_main_thread"))){wr||Ar();var h=or();if(h&&!e){xr.set(yr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:yr});yr++;return}}var l=ir(b);b=(b=void 0,{});b.yf=!0;var k=new cn(b);
k.push(l,!0);if(k.err)throw k.msg||em[k.err];Br(k.result,f,a,c,d)}}catch(m){Mn(m),d(a,c)}else d(a,c)}
function Br(a,b,c,d,e){zr=!1;var f=Y();b.ticks.gelc=f;tr++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=ur&&(sr++,T("abandon_compression_after_N_slow_zips")?tr===V("compression_disable_point")&&sr>vr&&(rr=!1):rr=!1);T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||kr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Dr(a){a=Object.assign({},a);delete a.Authorization;var b=Uf();if(b){var c=new sl;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Xd(c.digest(),3)}return a}
;var Er;function Fr(){Er||(Er=new np("yt.innertube"));return Er}
function Gr(a,b,c,d){if(d)return null;d=Fr().get("nextId",!0)||1;var e=Fr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Dr(c),requestTime:Math.round(Y())};Fr().set("nextId",d+1,86400,!0);Fr().set("requests",e,86400,!0);return d}
function Hr(a){var b=Fr().get("requests",!0)||{};delete b[a];Fr().set("requests",b,86400,!0)}
function Ir(a){var b=Fr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Dr(gr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Jr(a,d.method,e,{}));delete b[c]}}Fr().set("requests",b,86400,!0)}}
;function Kr(a){this.Yb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.qb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.Ge=(b=a.Ge)!=null?b:100;var c;this.xe=(c=a.xe)!=null?c:1;var d;this.te=(d=a.te)!=null?d:2592E6;var e;this.qe=(e=a.qe)!=null?e:12E4;var f;this.we=(f=a.we)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.ic=!!a.ic;var h;this.dc=(h=a.dc)!=null?h:.1;var l;this.uc=(l=a.uc)!=null?l:10;a.handleError&&(this.handleError=a.handleError);a.qb&&(this.qb=a.qb);a.Kb&&(this.Kb=a.Kb);a.Yb&&(this.Yb=a.Yb);this.aa=a.aa;this.Da=a.Da;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.hd=a.hd;this.ed=a.ed;Lr(this)&&(!this.aa||this.aa("networkless_logging"))&&Mr(this)}
function Mr(a){Lr(a)&&!a.Kb&&(a.g=!0,a.ic&&Math.random()<=a.dc&&a.fa.Ye(a.Z),Nr(a),a.ia.ya()&&a.Ub(),a.ia.ra(a.hd,a.Ub.bind(a)),a.ia.ra(a.ed,a.Ed.bind(a)))}
n=Kr.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Lr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&Or(c,d)}).catch(function(e){Or(c,d);
Pr(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Lr(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(l.g==1)return z(l,d.fa.set(e,d.Z).catch(function(k){Pr(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
Pr(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Lr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.nb(d.id,c.Z):e=!0;c.ia.eb&&c.aa&&c.aa("vss_network_hint")&&c.ia.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.nb(d.id,c.Z)}).catch(function(g){Pr(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Ub=function(){var a=this;if(!Lr(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return z(c,a.fa.Rd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?z(c,Or(a,b),3):(a.Ed(),c.return());a.l&&(a.l=0,a.Ub());c.g=0})},this.Ge))};
n.Ed=function(){this.Da.xa(this.l);this.l=0};
function Or(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Lr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return z(d,a.fa.og(b.id,a.Z),3);case 3:(c=d.l)||a.qb(Error("The request cannot be found in the database."));case 2:if(Qr(a,b,a.te)){d.M(4);break}a.qb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return z(d,a.fa.nb(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=Rr(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return z(d,a.fa.nb(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Rr(a,b){if(!Lr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=Sr(f);(h=Tr(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.uc)){m.M(2);break}if(!a.ia.yc){m.M(3);break}return z(m,a.ia.yc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((l=b)==null?void 0:l.id)===
void 0){m.M(6);break}return z(m,a.fa.od(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.uc)return m.return();a.potentialEsfErrorCounter++;if(((k=b)==null?void 0:k.id)===void 0){m.M(8);break}return b.sendCount<a.xe?z(m,a.fa.od(b.id,a.Z,!0,h?!1:void 0),12):z(m,a.fa.nb(b.id,a.Z),8);case 12:a.Da.Ga(function(){a.ia.ya()&&a.Ub()},a.we);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):z(h,a.fa.nb(b.id,a.Z),2);a.ia.eb&&a.aa&&a.aa("vss_network_hint")&&a.ia.eb(!0);d(e,f);h.g=0})};
return b}
function Qr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Nr(a){if(!Lr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Rd("QUEUED",a.Z).then(function(b){b&&!Qr(a,b,a.qe)?a.Da.Ga(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):z(c,a.fa.od(b.id,a.Z),2);Nr(a);c.g=0})}):a.ia.ya()&&a.Ub()})}
function Pr(a,b){a.Le&&!a.ia.ya()?a.Le(b):a.handleError(b)}
function Lr(a){return!!a.Z||a.Yb}
function Sr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Tr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Ur;
function Vr(){if(Ur)return Ur();var a={};Ur=Mq("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Gb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Wp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),cq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Ur()}
;function Wr(a){return pq(Vr(),a)}
function Xr(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,Wr(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,Yp(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();Yr(c);return g.return(f)})}
function Zr(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(m,Wr(b),2);if(m.g!=3)return d=m.l,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",T("use_fifo_for_networkless")&&(l="next"),k=void 0,z(m,Vp(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return iq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,a==="NEW"&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();Yr(c);return m.return(k)})}
function $r(a,b){var c;return B(function(d){if(d.g==1)return z(d,Wr(b),2);c=d.l;return d.return(Vp(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Rp(f.g.put(g,void 0)).then(function(){return g})})}))})}
function as(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return z(f,Wr(b),2);e=f.l;return f.return(Vp(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),d!==void 0&&(l.options.compress=d),Rp(h.g.put(l,void 0)).then(function(){return l})):Kp.resolve(void 0)})}))})}
function bs(a,b){var c;return B(function(d){if(d.g==1)return z(d,Wr(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function cs(a){var b,c;return B(function(d){if(d.g==1)return z(d,Wr(a),2);b=d.l;c=Y()-2592E6;return z(d,Vp(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return eq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return fq(f)})})}),0)})}
function ds(){B(function(a){return z(a,Iq(),0)})}
function Yr(a){T("nwl_csi_killswitch")||kr("networkless_performance",a,{sampleRate:1})}
;var es={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
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
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var fs={},gs=Mq("ServiceWorkerLogsDatabase",{xb:(fs.SWHealthLog={Gb:1},fs),shared:!0,upgrade:function(a,b){b(1)&&cq(Wp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function hs(a){return pq(gs(),a)}
function is(a){var b,c;B(function(d){if(d.g==1)return z(d,hs(a),2);b=d.l;c=Y()-2592E6;return z(d,Vp(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return eq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return fq(f)})})}),0)})}
function js(a){var b;return B(function(c){if(c.g==1)return z(c,hs(a),2);b=c.l;return z(c,b.clear("SWHealthLog"),0)})}
;var ks={},ls=0;function ms(a){var b=new Image,c=""+ls++;ks[c]=b;b.onload=b.onerror=function(){delete ks[c]};
b.src=a}
;var ns;function os(){ns||(ns=new np("yt.offline"));return ns}
function ps(a){if(T("offline_error_handling")){var b=os().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);os().set("errors",b,2592E3,!0)}}
;function qs(){this.g=new Map;this.l=!1}
function rs(){if(!qs.g){var a=D("yt.networkRequestMonitor.instance")||new qs;G("yt.networkRequestMonitor.instance",a);qs.g=a}return qs.g}
qs.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
qs.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
qs.prototype.removeParams=function(a){return a.split("?")[0]};
qs.prototype.removeParams=qs.prototype.removeParams;qs.prototype.isEndpointCFR=qs.prototype.isEndpointCFR;qs.prototype.requestComplete=qs.prototype.requestComplete;qs.getInstance=rs;function Z(){Nc.call(this);var a=this;this.i=!1;this.l=Yf();this.l.ra("networkstatus-online",function(){if(a.i&&T("offline_error_handling")){var b=os().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Do(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ln(d)}os().set("errors",{},2592E3,!0)}}})}
y(Z,Nc);function ss(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;G("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.eb=function(a){this.l.l=a};
n.wf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.hf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.yc=function(a){a=Wf(this.l,a);a.then(function(b){T("use_cfr_monitor")&&rs().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.yc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.hf;Z.prototype.getWindowStatus=Z.prototype.wf;Z.prototype.networkStatusHint=Z.prototype.eb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=ss;function ts(a){a=a===void 0?{}:a;Nc.call(this);var b=this;this.l=this.s=0;this.i=ss();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.wc?(this.wc=a.wc,c("networkstatus-online",function(){us(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){us(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Oc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Oc(b,"publicytnetworkstatus-offline")})))}
y(ts,Nc);ts.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
ts.prototype.eb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
ts.prototype.yc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return T("skip_network_check_if_cfr")&&rs().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function us(a,b){a.wc?a.l?(Zf.xa(a.s),a.s=Zf.Ga(function(){a.o!==b&&(Oc(a,b),a.o=b,a.l=Y())},a.wc-(Y()-a.l))):(Oc(a,b),a.o=b,a.l=Y()):Oc(a,b)}
;var vs;function ws(){var a=Kr.call;vs||(vs=new ts({bi:!0,Oh:!0}));a.call(Kr,this,{fa:{Ye:cs,nb:bs,Rd:Zr,og:$r,od:as,set:Xr},ia:vs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Mn(new Do(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Ln(b)},
qb:Mn,sendFn:xs,now:Y,Le:ps,Da:mp(),hd:"publicytnetworkstatus-online",ed:"publicytnetworkstatus-offline",ic:!0,dc:.1,uc:V("potential_esf_error_limit",10),aa:T,Kb:!(Eo()&&Ib(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Gl;T("networkless_immediately_drop_all_requests")&&ds();Jq("LogsDatabaseV2")}
y(ws,Kr);function ys(){var a=D("yt.networklessRequestController.instance");a||(a=new ws,G("yt.networklessRequestController.instance",a),T("networkless_logging")&&Bq().then(function(b){a.Z=b;Mr(a);a.i.resolve();a.ic&&Math.random()<=a.dc&&a.Z&&is(a.Z);T("networkless_immediately_drop_sw_health_store")&&zs(a)}));
return a}
ws.prototype.writeThenSend=function(a,b){b||(b={});b=As(a,b);Eo()||(this.g=!1);Kr.prototype.writeThenSend.call(this,a,b)};
ws.prototype.sendThenWrite=function(a,b,c){b||(b={});b=As(a,b);Eo()||(this.g=!1);Kr.prototype.sendThenWrite.call(this,a,b,c)};
ws.prototype.sendAndWrite=function(a,b){b||(b={});b=As(a,b);Eo()||(this.g=!1);Kr.prototype.sendAndWrite.call(this,a,b)};
ws.prototype.awaitInitialization=function(){return this.i.promise};
function zs(a){var b;B(function(c){if(!a.Z)throw b=Gp("clearSWHealthLogsDb"),b;return c.return(js(a.Z).catch(function(d){a.handleError(d)}))})}
function xs(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Bs(a,b);if(T("use_request_time_ms_header"))b.headers&&Vn(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)io(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)io(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Qa({url:a});if(l.i&&l.l||l.m){var k=Hb(a.match(Gb)[5]||null),m;if(!(m=!k||!k.endsWith("/aclk"))){var p=a.search(Pb),r=Ob(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Fb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(K){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(K){}A=!1}c=A?!0:!1}else c=!1;c||ms(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Cr(a,b.postBody,b,mo,d)):Cr(a,JSON.stringify(b.postParams),b,lo,d):mo(a,b)}
function As(a,b){T("use_event_time_ms_header")&&Vn(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Bs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){rs().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){rs().requestComplete(a,!0);d(e,f)}}
;var Cs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};G("ytNetworklessLoggingInitializationOptions",Cs);function Ds(a){var b=this;this.config_=null;a?this.config_=a:Yq()&&(this.config_=Zq());Ho(function(){Ir(b)},5E3)}
Ds.prototype.isReady=function(){!this.config_&&Yq()&&(this.config_=Zq());return!!this.config_};
function Jr(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=Gr(b,c,k,l)),u)){var A=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(U,da){Hr(u);A(U,da)};
c.onFetchSuccess=function(U,da){Hr(u);K(U,da)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?ys().writeThenSend(q,g):ys().sendAndWrite(q,g);
else if(d.compress){var O=!d.networklessOptions.writeThenSend;if(g.postBody){var X=g.postBody;typeof X!=="string"&&(X=JSON.stringify(g.postBody));Cr(q,X,g,mo,O)}else Cr(q,JSON.stringify(g.postParams),g,lo,O)}else T("web_all_payloads_via_jspb")?mo(q,g):lo(q,g)}catch(U){if(U.name==="InvalidAccessError")u&&(Hr(u),u=0),Mn(Error("An extension is blocking network request."));else throw U;}u&&Ho(function(){Ir(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Mn(new Do("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Do("innertube xhrclient not ready",b,c,d);Ln(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ag)&&(h=f);var l=a.config_.cg||!1,k=gr(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Yf+"/"+b,p={alt:"json"},r=a.config_.bg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.Xf);var q=Un(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Cs.isNwlInitialized?zq().then(function(t){e(t)}):e(!1)}
;var Es=0;G("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Es});G("ytEventsEventsListeners",C.ytEventsEventsListeners||{});G("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});var Fs=C.ytPubsubPubsubInstance||new P,Gs=C.ytPubsubPubsubSubscribedKeys||{},Hs=C.ytPubsubPubsubTopicToKeys||{},Is=C.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Cc;P.prototype.publish=P.prototype.pe;P.prototype.clear=P.prototype.clear;G("ytPubsubPubsubInstance",Fs);G("ytPubsubPubsubTopicToKeys",Hs);G("ytPubsubPubsubIsSynchronous",Is);G("ytPubsubPubsubSubscribedKeys",Gs);var Js=Symbol("injectionDeps");function Ks(){this.key=Vq}
function Ls(){this.l=new Map;this.g=new Map}
Ls.prototype.resolve=function(a){return a instanceof Ks?Ms(this,a.key,[],!0):Ms(this,a,[])};
function Ms(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Wg!==void 0)var e=d.Wg;else if(d.Vg)e=d[Js]?Ns(a,d[Js],c):[],e=d.Vg.apply(d,x(e));else if(d.Ug){e=d.Ug;var f=e[Js]?Ns(a,e[Js],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.oi||a.g.set(b,e);return e}
function Ns(a,b,c){return b?b.map(function(d){return d instanceof Ks?Ms(a,d.key,c,!0):Ms(a,d,c)}):[]}
;var Os;function Ps(){Os||(Os=new Ls);return Os}
;var Qs=window;function Rs(){var a,b;return"h5vcc"in Qs&&((a=Qs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Qs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Qs&&Qs.performance.mark&&Qs.performance.measure?2:0}
function Ss(a){switch(Rs()){case 1:Qs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Qs.performance.mark(a+"-start");break;case 0:break;default:Cb()}}
function Ts(a){switch(Rs()){case 1:Qs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Qs.performance.mark(c);Qs.performance.measure(a,b,c);break;case 0:break;default:Cb()}}
;var Us=T("web_enable_lifecycle_monitoring")&&Rs()!==0,Vs=T("web_enable_lifecycle_monitoring");function Ws(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?mp():d;this.m=c;this.l=d;this.i=new Gl;this.g=a;for(a={bb:0};a.bb<this.g.length;a={sc:void 0,bb:a.bb},a.bb++)a.sc=this.g[a.bb],c=function(e){return function(){e.sc.Xc();b.g[e.bb].vc=!0;b.g.every(function(f){return f.vc===!0})&&b.i.resolve()}}(a),d=this.l.Ya(c,Xs(this,a.sc)),this.g[a.bb]=Object.assign({},a.sc,{Xc:c,
jobId:d})}
function Ys(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Xs(a,a.g[e])-Xs(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.vc||(a.l.xa(c.jobId),a.l.Ya(c.Xc,10))}
Ws.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.vc||this.l.xa(b.jobId),b.vc=!0;this.i.resolve()};
function Xs(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function Zs(a){this.state=a;this.i=[];this.o=void 0;this.u={};Us&&Ss(this.state)}
Zs.prototype.install=function(a){this.i.push(a);return this};
function $s(a){Us&&Ts(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Ua==="none"}):d.from===a.state&&d.Ua==="none"});
if(b){a.l&&(Ys(a.l),a.l=void 0);Vs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Us&&Ss(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(at(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function at(a,b){var c=b.filter(function(e){return bt(a,e)===10}),d=b.filter(function(e){return bt(a,e)!==10});
return a.u.mi?function(){var e=Da.apply(0,arguments);return B(function(f){if(f.g==1)return z(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Da.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
Zs.prototype.F=function(a){for(var b=Da.apply(1,arguments),c=mp(),d=w(a),e=d.next(),f={};!e.done;f={Pb:void 0},e=d.next())f.Pb=e.value,c.Fb(function(g){return function(){ct(g.Pb.name);g.Pb.Ic.apply(g.Pb,x(b));dt(g.Pb.name)}}(f))};
Zs.prototype.D=function(a){var b=Da.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=mp(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.tb=e.value;f.Wb=void 0;g=function(l){return function(){ct(l.tb.name);var k=l.tb.Ic.apply(l.tb,x(b));typeof(k==null?void 0:k.then)==="function"?l.Wb=k.then(function(){dt(l.tb.name)}):dt(l.tb.name)}}(f);
c.Fb(g);return f.Wb?z(h,f.Wb,3):h.M(3)}f={tb:void 0,Wb:void 0};e=d.next();return h.M(2)})};
Zs.prototype.s=function(a){var b=Da.apply(1,arguments),c=this,d=a.map(function(e){return{Xc:function(){ct(e.name);e.Ic.apply(e,x(b));dt(e.name)},
priority:bt(c,e)}});
d.length&&(this.l=new Ws(d))};
function bt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ct(a){Us&&a&&Ss(a)}
function dt(a){Us&&a&&Ts(a)}
ea.Object.defineProperties(Zs.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function et(a){Zs.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ua:"application_navigating",action:this.A},{from:"application_navigating",Ua:"none",action:this.B},{from:"application_navigating",Ua:"application_navigating",action:function(){}},
{from:"none",Ua:"none",action:function(){}}]}
var ft;y(et,Zs);et.prototype.A=function(a,b){var c=this;this.g=Ho(function(){c.m==="application_navigating"&&$s(c)},5E3);
a(b==null?void 0:b.event)};
et.prototype.B=function(a,b){this.g&&(Zf.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function gt(){ft||(ft=new et);return ft}
;var ht=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return ht});function it(){this.store={};this.g={}}
it.prototype.storePayload=function(a,b){a=jt(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
it.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=kt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
it.prototype.extractMatchingEntries=function(a){a=kt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
it.prototype.getSequenceCount=function(a){a=kt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function kt(a,b){var c=jt(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&jt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(lt(b.auth,g[0])){var h=b.isJspb;lt(h===void 0?"undefined":h?"true":"false",g[1])&&lt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),lt(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function lt(a,b){return a===void 0||a==="undefined"?!0:a===b}
it.prototype.getSequenceCount=it.prototype.getSequenceCount;it.prototype.extractMatchingEntries=it.prototype.extractMatchingEntries;it.prototype.smartExtractMatchingEntries=it.prototype.smartExtractMatchingEntries;it.prototype.storePayload=it.prototype.storePayload;function jt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var mt=V("initial_gel_batch_timeout",2E3),nt=V("gel_queue_timeout_max_ms",6E4),ot=Math.pow(2,16)-1,pt=V("gel_min_batch_size",5),qt=void 0;function rt(){this.m=this.g=this.l=0;this.i=!1}
var st=new rt,tt=new rt,ut=new rt,vt=new rt,wt,xt=!0,zt=1,At=new Map,Bt=C.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",Bt);var Ct=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};G("ytLoggingTransportTokensToJspbCttTargetIds_",Ct);var Dt={};function Et(){var a=D("yt.logging.ims");a||(a=new it,G("yt.logging.ims",a));return a}
function Ft(a,b){if(a.endpoint==="log_event"){Gt(a);var c=Ht(a),d=It(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=es[d||""];var f,g;if(Ps().resolve(new Ks)==null)var h=void 0;else{var l;h=(l=D("yt.gcf.config.hotConfigGroup"))!=null?l:S("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;
f=Jt(e.tier);if(f===400){Kt(a,b);return}}Dt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Et().storePayload(e,a.payload);Lt(b,c,e,d==="gelDebuggingEvent")}}
function Lt(a,b,c,d){function e(){Mt(T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(qt=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("tvhtml5_logging_max_batch")||V("web_logging_max_batch")||100;var g=Y(),h=Nt(f,c.tier),l=h.m;d&&(h.i=!0);d=0;c&&(d=Et().getSequenceCount(c));d>=1E3?e():d>=a?wt||(wt=Ot(function(){e();wt=void 0},0)):g-l>=10&&(Pt(f,c.tier),h.m=g)}
function Kt(a,b){if(a.endpoint==="log_event"){Gt(a);var c=Ht(a),d=new Map;d.set(c,[a.payload]);var e=It(a.payload)||"";b&&(qt=new b);return new Ad(function(f,g){qt&&qt.isReady()?Qt(d,qt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ht(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Bt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Mt(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Ad(function(e,f){var g=Nt(b,c),h=g.i;g.i=!1;Rt(g.l);Rt(g.g);g.g=0;qt&&qt.isReady()?c===void 0&&T("enable_web_tiered_gel")?St(e,f,d,a,b,300,h):St(e,f,d,a,b,c,h):(Pt(b,c),e())})}
function St(a,b,c,d,e,f,g){var h=qt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=T("enable_web_tiered_gel")?Et().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Et().extractMatchingEntries(p),l.set(d,b),Tt(l,h,a,c,g)):(l=T("enable_web_tiered_gel")?Et().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Et().extractMatchingEntries(p),k.set(d,l),Qt(k,h,a,b,
c,!1,g));else if(e){b=w(Object.keys(Dt));for(k=b.next();!k.done;k=b.next())k=k.value,f=T("enable_web_tiered_gel")?Et().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Et().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),f.length>0&&l.set(k,f),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Dt[k];Tt(l,h,a,c,g)}else{l=w(Object.keys(Dt));for(m=l.next();!m.done;m=l.next())m=m.value,p=T("enable_web_tiered_gel")?Et().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Et().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&k.set(m,p),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Dt[m];Qt(k,h,a,b,c,!1,g)}}
function Pt(a,b){function c(){Mt(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Nt(a,b),e=d===vt||d===ut?5E3:nt;T("web_gel_timeout_cap")&&!d.g&&(e=Ot(function(){c()},e),d.g=e);
Rt(d.l);e=S("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&xt&&(e=mt);e=Ot(function(){V("gel_min_batch_size")>0?Et().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=pt&&c():c()},e);
d.l=e}
function Qt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),l=a.size,k=Ut(g);a=w(a);var m=a.next();for(g={};!m.done;g={dd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,gd:void 0,fd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=tb({context:$q(b.config_||Zq())});if(!Ja(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Bt[m])&&Vt(g.batchRequest,m,p);delete Bt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";Wt(g.batchRequest,h,g.dangerousLogToVisitorSession);Xt(e);g.gd=function(r){T("start_client_gcf")&&Zf.Ga(function(){return B(function(q){return z(q,Yt(r),0)})});
l--;l||c()};
g.dd=0;g.fd=function(r){return function(){r.dd++;if(e.bypassNetworkless&&r.dd===1)try{Jr(b,k,r.batchRequest,Zt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.gd,r.fd,f)),xt=!1}catch(q){Ln(q),d()}l--;l||c()}}(g);
try{Jr(b,k,g.batchRequest,Zt(e,g.dangerousLogToVisitorSession,g.gd,g.fd,f)),xt=!1}catch(r){Ln(r),d()}}}
function Tt(a,b,c,d,e){d=d===void 0?{}:d;var f=Math.round(Y()),g={value:a.size},h=new Map([].concat(x(a))),l=w(h);for(h=l.next();!h.done;h=l.next()){var k=w(h.value).next().value,m=a.get(k);h=new xn;var p=b.config_||Zq(),r=new sn,q=new ln;J(q,1,p.de);J(q,2,p.ce);vf(q,16,p.Zf);J(q,17,p.be);if(p.Uc){var t=p.Uc,u=new hn;t.coldConfigData&&J(u,1,t.coldConfigData);t.appInstallData&&J(u,6,t.appInstallData);t.coldHashData&&J(u,3,t.coldHashData);t.hotHashData&&u.g(t.hotHashData);of(q,hn,62,u)}if((t=C.devicePixelRatio)&&
t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);hf(q,65,t)}t=S("EXPERIMENTS_TOKEN","");t!==""&&J(q,54,t);t=Gn();if(t.length>0){u=new on;for(var A=0;A<t.length;A++){var K=new mn;J(K,1,t[A].key);a:{var O=K,X=Ke(t[A].value),U=nn;O=O.U;var da=le(O);we(da);if(X==null){var Va=lf(O);if(mf(Va,O,da,U)===2)Va.set(U,0);else break a}else{Va=O;U.includes(2);var gb=lf(Va),sa=mf(gb,Va,da,U);sa!==2&&(sa&&(da=jf(Va,da,sa)),gb.set(U,2))}jf(O,
da,2,X)}rf(u,15,mn,K)}of(r,on,5,u)}ar(p,q);br(r);cr(q);dr(p,q);er(q);T("start_client_gcf")&&fr(q);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(p=new rn,J(p,3,S("DELEGATED_SESSION_ID")));!T("fill_delegate_context_in_gel_killswitch")&&(t=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=nf(r,rn,3)||new rn,p=r,t=J(u,18,t),of(p,rn,3,t));p=q;t=w(Object.entries(Tn(S("DEVICE",""))));for(u=t.next();!u.done;u=t.next())A=w(u.value),u=A.next().value,A=A.next().value,u==="cbrand"?J(p,12,A):
u==="cmodel"?J(p,13,A):u==="cbr"?J(p,87,A):u==="cbrver"?J(p,88,A):u==="cos"?J(p,18,A):u==="cosver"?J(p,19,A):u==="cplatform"&&vf(p,42,xo(A));of(r,ln,1,q);of(h,sn,1,r);if(q=Ct[k])a:{if(tf(q,1))r=1;else if(q.getPlaylistId())r=2;else break a;of(h,wn,4,q);q=nf(h,sn,1)||new sn;p=nf(q,rn,3)||new rn;t=new qn;J(t,2,k);vf(t,1,r);rf(p,12,qn,t);of(q,rn,3,p)}delete Ct[k];k=k==="visitorOnlyApprovedKey";$t()||hf(h,2,Ie(f));!k&&(r=S("EVENT_ID"))&&(q=au(),p=new vn,J(p,1,r),hf(p,2,Ie(q)),of(h,vn,5,p));Xt(d);if(T("jspb_serialize_with_worker")&&
(r=or())&&d.writeThenSend){At.set(zt,{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=r;b=a.postMessage;c=yf(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:m,key:zt});zt++;break}if(m){r=[];for(q=0;q<m.length;q++)try{r.push(new un(m[q]))}catch(Ka){Ln(new Do("Transport failed to deserialize "+String(m[q])))}m=r}else m=[];m=w(m);for(r=m.next();!r.done;r=m.next())rf(h,3,un,r.value);m={startTime:Y(),ticks:{},
infos:{}};try{wf=!0;var Ea=JSON.stringify(yf(h),Ve)}finally{wf=!1}m.ticks.geljspc=Y();T("log_jspb_serialize_latency")&&kr("gel_jspb_serialize",m,{sampleRate:.1});bu(Ea,b,c,d,e,k,g)}}
function bu(a,b,c,d,e,f,g){d=d===void 0?{}:d;g=g===void 0?{value:0}:g;e=Ut(e);d=Zt(d,f,function(h){T("start_client_gcf")&&Zf.Ga(function(){return B(function(l){return z(l,Yt(h),0)})});
g.value--;g.value||c()},function(){g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Jr(b,e,"",d);xt=!1}
function Xt(a){T("always_send_and_write")&&(a.writeThenSend=!1)}
function Zt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ih:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};$t()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Wt(a,b,c){$t()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=au(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function au(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*ot/2));a++;a>ot&&(a=1);Cn("BATCH_CLIENT_COUNTER",a);return a}
function Vt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Gt(a){if(!D("yt.logging.transport.enableScrapingForTest")){var b=Fn("il_payload_scraping");if((b!==void 0?String(b):"")==="enable_il_payload_scraping")ht=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",ht),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
G("yt.logging.transport.scrapeClientEvent",!0);else return}b=D("yt.logging.transport.scrapedPayloadsForTesting");var c=D("yt.logging.transport.payloadToScrape"),d=D("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function $t(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Ot(a,b){return T("transport_use_scheduler")===!1?co(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Ho(function(){if(gt().m==="none")a();else{var c={};gt().install((c.none={Ic:a},c))}},b):Ho(a,b)}
function Rt(a){T("transport_use_scheduler")?Zf.xa(a):window.clearTimeout(a)}
function Yt(a){var b,c,d,e,f,g,h,l,k,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[gn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[fn.name]:void 0;h=r;k=(l=d)==null?void 0:l.coldHashData;return(m=Ps().resolve(new Ks))?g?e?z(p,Wq(m,g,e),2):z(p,Wq(m,g),2):p.M(2):p.return()}return k?h?z(p,Xq(m,k,h),0):z(p,Xq(m,k),0):p.M(0)})}
function Nt(a,b){b=b===void 0?200:b;return a?b===300?vt:tt:b===300?ut:st}
function It(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,es[b])return b}
function Jt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Ut(a){return(a===void 0?0:a)&&T("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var cu=C.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",cu);var du,eu=C.ytLoggingDocDocumentNonce_;
if(!eu){var fu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var gu=Array(16),hu=new Uint8Array(16);window.crypto.getRandomValues(hu);for(var iu=0;iu<gu.length;iu++)gu[iu]=hu[iu];fu=gu;break a}catch(a){}for(var ju=Array(16),ku=0;ku<16;ku++){for(var lu=Date.now(),mu=0;mu<lu%23;mu++)ju[ku]=Math.random();ju[ku]=Math.floor(Math.random()*256)}if(Yn)for(var nu=1,ou=0;ou<Yn.length;ou++)ju[nu%16]=ju[nu%16]^ju[(nu-1)%16]/4^Yn.charCodeAt(ou),nu++;fu=ju}for(var pu=fu,qu=[],ru=0;ru<pu.length;ru++)qu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(pu[ru]&
63));eu=qu.join("");G("ytLoggingDocDocumentNonce_",eu)}du=eu;function su(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function tu(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},Cn("client-screen-nonce-store",c));c[b]=a}
function uu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
G("yt_logging_screen.getRootVeType",function(a){return S(uu(a===void 0?0:a))});
function vu(){var a=S("csn-to-ctt-auth-info");a||(a={},Cn("csn-to-ctt-auth-info",a));return a}
function wu(a){a=su(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",wu);function xu(a,b,c){var d=vu();(c=wu(c))&&delete d[c];b&&(d[a]=b)}
G("yt_logging_screen.getCttAuthInfo",function(a){return vu()[a]});
G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==su(c)||b!==S(uu(c)))if(xu(a,d,c),tu(a,c),Cn(uu(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:du,clientScreenNonce:a};var f=f===void 0?{}:f;var g=Ds;S("ytLoggingEventsDefaultDisabled",!1)&&Ds===Ds&&(g=null);f=f===void 0?{}:f;var h={},l=Math.round(f.timestamp||Y());h.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0;h.foregroundHeartbeatScreenAssociated=e;e=D("_lact",window);e=e==null?-1:Math.max(Date.now()-
e,0);h.context={lastActivityMs:String(f.timestamp||!isFinite(e)?-1:e)};f.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(e=h.context,l=f.sequenceGroup,cu[l]=l in cu?cu[l]+1:0,e.sequence={index:cu[l],groupKey:l},f.endOfSequence&&delete cu[f.sequenceGroup]);(f.sendIsolatedPayload?Kt:Ft)({endpoint:"log_event",payload:h,cttAuthInfo:f.cttAuthInfo,dangerousLogToVisitorSession:f.dangerousLogToVisitorSession},g)}},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var yu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function zu(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ib(window.location.href);e&&d.push(e);e=Ib(a);if(nb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),mb(d,a),a=d.href)if(a=Jb(a),a=Kb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:wu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Au(a,b,f)}else Au(a,b)}
function Au(a,b,c){a=Bu(a);b=b?Mb(b):"";c=c||5;(Sf()||(Sd||Td)&&Xn("applewebkit")&&!Xn("version")&&(!Xn("safari")||Xn("gsa/"))||pc&&Xn("version/")||!S("EOM_VISITOR_DATA"))&&Hn(a,b,c)}
function Bu(a){var b=a;a=w(yu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Pb),f=0,g=[];(c=Ob(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Qb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new P;G("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});function Cu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function Du(a,b){b=b?{feature:b}:{};var c=S("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[En()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,zu(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Nb(a,d);S("LOGGED_IN",!0)&&Cu()&&(d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Ib(window.location.href))&&d.push(b),b=Ib(a),nb(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Jb(a),(d=Kb(d))?
(d=Bu(d),d=(d=Qf.get(""+d,void 0)||null)?Tn(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,Cu()?(c||(c=S("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&zu(a,d));e=a+e;var g=g===void 0?eb:g;a:if(g=g===void 0?eb:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof cb&&d.jg(e)){g=new ab(e);break a}g=void 0}f=f.location;g=lb(g||bb);g!==void 0&&(f.href=g)}}
;G("searchbox.yt.install",function(a,b,c,d,e,f,g){Yg||(Yg=new ol);Yg.install(a,b,c,d,e,f,g)});
G("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=Zf.Ga;if(a&&e){var f=S("SBOX_SETTINGS"),g=S("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Du,d))&&e(a,100)}});}).call(this);
