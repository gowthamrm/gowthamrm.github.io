(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t="unreachable"){return new Error(t)}function e(t,e){if(!t)throw new Error(e||"assertion failure")}function s(t){for(let e=1;e<arguments.length;e++){let s=arguments[e]
if(null===s||"object"!=typeof s)continue
let i=J(s)
for(let e=0;e<i.length;e++){let n=i[e]
t[n]=s[n]}}return t}function i(t){let e=new Array(t)
for(let s=0;s<t;s++)e[s]=null
return e}function n(t){return t._guid=++Z}function r(t){return t._guid||n(t)}function a(){return Object.create(null)}function l(t){let e=lt.length
lt.push(t=>t.value()),ot.push((t,e)=>t.validate(e)),t.id=e}function o({tag:t}){return t===ut}function h(t){return t===ut}function u(t){let e=[]
for(let s=0,i=t.length;s<i;s++){let i=t[s].tag
if(i===ct)return ct
i!==ut&&e.push(i)}return d(e)}function c(t){let e=[],s=t.head()
for(;null!==s;){let i=s.tag
if(i===ct)return ct
i!==ut&&e.push(i),s=t.nextNode(s)}return d(e)}function p(t){let e=[]
for(let s=0,i=t.length;s<i;s++){let i=t[s]
if(i===ct)return ct
i!==ut&&e.push(i)}return d(e)}function d(t){switch(t.length){case 0:return ut
case 1:return t[0]
case 2:return ft.create(t[0],t[1])
default:return gt.create(t)}}function m(t){let e=t[At]
return e&&function(t,e){return Nt.call(t,e)}(t,At)?e:t[At]=new xt(e)}function f(t,e,s=function(t,e){throw Tt.for(t,e)}){if("object"==typeof t&&t){0
return m(t).tagFor(e)}return ut}function g(t){return t[Ft]}function b(t,e){t[Ft]=e}function y(t){return function(e){return Array.isArray(e)&&e[0]===t}}function v(t,e,s){let i=t[1],n=t[2],r=t[3]
s.expr(n),r?s.dynamicAttr(i,r,e):s.dynamicAttr(i,null,e)}function k(t){return!(!t||!t[_e])}function S(t,e,s){let i=t.lookupComponent(e,s)
return i}function w(t){return _(t)?"":String(t)}function _(t){return null===t||void 0===t||"function"!=typeof t.toString}function E(t){return"object"==typeof t&&null!==t&&"function"==typeof t.toHTML}function C(t){return"object"==typeof t&&null!==t&&"number"==typeof t.nodeType}function x(t){return C(t)&&11===t.nodeType}function A(t){return"string"==typeof t}function N(t,e){return new Fe(t,e)}function O(t,e){let s=t.parentElement(),i=t.firstNode(),n=t.lastNode(),r=i
for(;r;){let t=r.nextSibling
if(s.insertBefore(r,e),r===n)return t
r=t}return null}function T(t){let e=t.parentElement(),s=t.firstNode(),i=t.lastNode(),n=s
for(;n;){let t=n.nextSibling
if(e.removeChild(n),n===i)return t
n=t}return null}function L(t,e,s){if(!t)return e
if(!function(t,e){let s=t.createElementNS(e,"svg")
try{s.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==s.childNodes.length||s.firstChild.namespaceURI!==Ie}}(t,s))return e
let i=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,n){return null===n||""===n?super.insertHTMLBefore(t,e,n):t.namespaceURI!==s?super.insertHTMLBefore(t,e,n):function(t,e,s,i){let n="<svg>"+s+"</svg>"
e.innerHTML=n
var r=function(t,e,s){let i=t.firstChild,n=null,r=i
for(;r;)n=r,r=r.nextSibling,e.insertBefore(n,s)
return[i,n]}(e.firstChild,t,i)
let a=r[0],l=r[1]
return new Me(t,a,l)}(t,i,n,e)}}}function B(t,e){return t&&function(t){let e=t.createElement("div")
if(e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2===e.childNodes.length)return!1
return!0}(t)?class extends e{constructor(t){super(t),this.uselessComment=t.createComment("")}insertHTMLBefore(t,e,s){if(null===s)return super.insertHTMLBefore(t,e,s)
let i=!1,n=e?e.previousSibling:t.lastChild
n&&n instanceof Text&&(i=!0,t.insertBefore(this.uselessComment,e))
let r=super.insertHTMLBefore(t,e,s)
return i&&t.removeChild(this.uselessComment),r}}:e}function D(t,e){return-1!==t.indexOf(e)}function R(t,e){return(null===t||D(Xe,t))&&D(qe,e)}function M(t,e){return null!==t&&(D(Ke,t)&&D(Je,e))}function F(t,e){return R(t,e)||M(t,e)}function I(t,e,s,i){let n=null
if(null===i||void 0===i)return i
if(E(i))return i.toHTML()
n=e?e.tagName.toUpperCase():null
let r=w(i)
if(R(n,s)){let e=t.protocolForURL(r)
if(D(We,e))return`unsafe:${r}`}return M(n,s)?`unsafe:${r}`:r}function P(t,e){let s,i
if(e in t)i=e,s="prop"
else{let n=e.toLowerCase()
n in t?(s="prop",i=n):(s="attr",i=e)}return"prop"!==s||"style"!==i.toLowerCase()&&!function(t,e){let s=Ze[t.toUpperCase()]
return s&&s[e.toLowerCase()]||!1}(t.tagName,i)||(s="attr"),{normalized:i,type:s}}function j(t,e){let s=t.tagName
if(t.namespaceURI===Pe)return V(s,e)
var i=P(t,e)
let n=i.type,r=i.normalized
return"attr"===n?V(s,r):function(t,e){if(F(t,e))return ss
if(function(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}(t,e))return ns
if(function(t,e){return"OPTION"===t&&"selected"===e}(t,e))return rs
return es}(s,r)}function V(t,e){return F(t,e)?is:ts}function z(t){return!1===t||void 0===t||null===t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}function H(t,e,i){let n=t.block,r=t.referrer,a=n.hasEval,l=n.symbols,o=s({},e,{asPartial:i,referrer:r})
return new le(n.statements,t,o,{referrer:r,hasEval:a,symbols:l})}function U(){}function $(t,e,s){return t|e<<16|s<<30}function G(t,e){return t|e<<30}function Y(t,e){let s=t.getSelf(),i=e.capture(),n=i.positional.at(0).value()
return"function"!=typeof n&&function(t,e){let s=function(t){let e,s,i=""
if(null===t||void 0===t)return i
"parent"in t&&"property"in t?(e=t.parent.value(),s=t.property):"_parentValue"in t&&"_propertyKey"in t&&(e=t._parentValue,s=t._propertyKey)
void 0!==s&&(i+=`('${s}' on ${function(t){let e=typeof t
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}(e)}) `)
return i}(e)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof t} instead of a function.`)}(n,i.positional.at(0)),new Vs(function(...t){let e=i.positional.value()
e.shift(),e.push(...t),n.apply(s&&s.value(),e)})}function W(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function X(t){let e=t.type,s=function(t){let e=[]
t.rootName&&e.push(t.rootName)
t.collection&&e.push(t.collection)
t.namespace&&e.push(t.namespace)
t.name&&e.push(t.name)
if(e.length>0){let s=e.join("/")
return W(t)&&(s="/"+s),s}}(t)
return s?e+":"+s:e}function K(t){let e={}
if(t.indexOf(":")>-1){var s=t.split(":")
let i=s[0],n=s[1]
e.type=i
let r
0===n.indexOf("/")?(r=n.substr(1).split("/"),e.rootName=r.shift(),e.collection=r.shift()):r=n.split("/"),r.length>0&&(e.name=r.pop(),r.length>0&&(e.namespace=r.join("/")))}else e.type=t
return e}function q(t,e){if(!e)throw new Error("Assertion Failed: "+t)}const J=Object.keys
let Z=0
class Q{constructor(){this.dict=a()}add(t){return"string"==typeof t?this.dict[t]=t:this.dict[r(t)]=t,this}delete(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]}}class tt{constructor(){this.stack=[],this.current=null}get size(){return this.stack.length}push(t){this.current=t,this.stack.push(t)}pop(){let t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t}isEmpty(){return 0===this.stack.length}}class et{constructor(t){this.next=null,this.prev=null,this.value=t}}class st{constructor(){this.clear()}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t.next}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=e.next}insertBefore(t,e=null){return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)}append(t){let e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t}remove(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t}}class it{constructor(t,e){this._head=t,this._tail=e}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=this.nextNode(e)}head(){return this._head}tail(){return this._tail}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t===this._tail?null:t.next}}new it(null,null)
const nt=Object.freeze([]),rt=1
class at{validate(t){return this.value()===t}}at.id=0
const lt=[],ot=[]
class ht{constructor(t,e){this.type=t,this.inner=e}value(){return(0,lt[this.type])(this.inner)}validate(t){return(0,ot[this.type])(this.inner,t)}}lt.push(()=>0),ot.push((t,e)=>0===e)
const ut=new ht(0,null)
lt.push(()=>NaN),ot.push((t,e)=>NaN===e)
const ct=new ht(1,null)
lt.push(()=>pt),ot.push((t,e)=>e===pt)
new ht(2,null)
let pt=rt
class dt extends at{static create(t=pt){return new ht(this.id,new dt(t))}constructor(t=pt){super(),this.revision=t}value(){return this.revision}dirty(){this.revision=++pt}}l(dt)
class mt extends at{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let t=this.lastChecked,e=this.lastValue
return t!==pt&&(this.lastChecked=pt,this.lastValue=e=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class ft extends mt{static create(t,e){return new ht(this.id,new ft(t,e))}constructor(t,e){super(),this.first=t,this.second=e}compute(){return Math.max(this.first.value(),this.second.value())}}l(ft)
class gt extends mt{static create(t){return new ht(this.id,new gt(t))}constructor(t){super(),this.tags=t}compute(){let t=this.tags,e=-1
for(let s=0;s<t.length;s++){let i=t[s].value()
e=Math.max(i,e)}return e}}l(gt)
class bt extends mt{static create(t){return new ht(this.id,new bt(t))}constructor(t){super(),this.tag=t,this.lastUpdated=rt}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(t){t!==this.tag&&(this.tag=t,this.lastUpdated=pt,this.invalidate())}}l(bt)
class yt{constructor(){this.lastRevision=null,this.lastValue=null}value(){let t=this.tag,e=this.lastRevision,s=this.lastValue
return null!==e&&t.validate(e)||(s=this.lastValue=this.compute(),this.lastRevision=t.value()),s}invalidate(){this.lastRevision=null}}class vt{constructor(t){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=t.tag,this.reference=t}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let t=this.reference,e=this.lastRevision,s=t.tag
if(s.validate(e))return kt
this.lastRevision=s.value()
let i=this.lastValue,n=t.value()
return n===i?kt:(this.lastValue=n,n)}initialize(){let t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e}}const kt="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class St{constructor(t){this.inner=t,this.tag=ut}value(){return this.inner}}class wt extends et{constructor(t,e){super(t.valueReferenceFor(e)),this.retained=!1,this.seen=!1,this.key=e.key,this.iterable=t,this.memo=t.memoReferenceFor(e)}update(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class _t{constructor(t){this.iterator=null,this.map=a(),this.list=new st,this.tag=t.tag,this.iterable=t}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let t
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t}has(t){return!!this.map[t]}get(t){return this.map[t]}wasSeen(t){let e=this.map[t]
return void 0!==e&&e.seen}append(t){let e=this.map,s=this.list,i=this.iterable,n=e[t.key]=new wt(i,t)
return s.append(n),n}insertBefore(t,e){let s=this.map,i=this.list,n=this.iterable,r=s[t.key]=new wt(n,t)
return r.retained=!0,i.insertBefore(r,e),r}move(t,e){let s=this.list
t.retained=!0,s.remove(t),s.insertBefore(t,e)}remove(t){this.list.remove(t),delete this.map[t.key]}nextNode(t){return this.list.nextNode(t)}head(){return this.list.head()}}var Et;(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(Et||(Et={}))
class Ct{constructor({target:t,artifacts:e}){this.target=t,this.artifacts=e,this.iterator=e.iterate(),this.current=e.head()}sync(){let t=Et.Append
for(;;)switch(t){case Et.Append:t=this.nextAppend()
break
case Et.Prune:t=this.nextPrune()
break
case Et.Done:return void this.nextDone()}}advanceToKey(t){let e=this.current,s=this.artifacts,i=e
for(;null!==i&&i.key!==t;)i.seen=!0,i=s.nextNode(i)
null!==i&&(this.current=s.nextNode(i))}nextAppend(){let t=this.iterator,e=this.current,s=this.artifacts,i=t.next()
if(null===i)return this.startPrune()
let n=i.key
return null!==e&&e.key===n?this.nextRetain(i):s.has(n)?this.nextMove(i):this.nextInsert(i),Et.Append}nextRetain(t){let e=this.artifacts,s=this.current;(s=s).update(t),this.current=e.nextNode(s),this.target.retain(t.key,s.value,s.memo)}nextMove(t){let e=this.current,s=this.artifacts,i=this.target,n=t.key,r=s.get(t.key)
r.update(t),s.wasSeen(t.key)?(s.move(r,e),i.move(r.key,r.value,r.memo,e?e.key:null)):this.advanceToKey(n)}nextInsert(t){let e=this.artifacts,s=this.target,i=this.current,n=e.insertBefore(t,i)
s.insert(n.key,n.value,n.memo,i?i.key:null)}startPrune(){return this.current=this.artifacts.head(),Et.Prune}nextPrune(){let t=this.artifacts,e=this.target,s=this.current
if(null===s)return Et.Done
let i=s
return this.current=t.nextNode(i),i.shouldRemove()?(t.remove(i),e.delete(i.key)):i.reset(),Et.Prune}nextDone(){this.target.done()}}class xt{constructor(t){this.tags=a(),this.computedPropertyTags=a(),this.trackedProperties=t?Object.create(t.trackedProperties):a(),this.trackedPropertyDependencies=t?Object.create(t.trackedPropertyDependencies):a()}tagFor(t){let e=this.tags[t]
if(e)return e
let s
return(s=this.trackedPropertyDependencies[t])?this.tags[t]=function(t,e,s){let i=[t.dirtyableTagFor(e)]
if(s&&s.length)for(let n=0;n<s.length;n++)i.push(t.tagFor(s[n]))
return p(i)}(this,t,s):this.tags[t]=dt.create()}dirtyableTagFor(t){let e
return this.trackedPropertyDependencies[t]?(e=this.computedPropertyTags[t])||(this.computedPropertyTags[t]=dt.create()):(e=this.tags[t])||(this.tags[t]=dt.create())}}let At=Symbol("ember-object"),Nt=Object.prototype.hasOwnProperty,Ot=function(){}
class Tt extends Error{constructor(t,e,s){super(s),this.target=t,this.key=e}static for(t,e){return new Tt(t,e,`The property '${e}' on ${t} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class Lt{constructor(t){this.debugName=null,this.__args__=null,Object.assign(this,t)}get element(){let t=this.bounds
return e(t&&t.firstNode===t.lastNode,"The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes."),t.firstNode}get args(){return this.__args__}set args(t){this.__args__=t,m(this).dirtyableTagFor("args").inner.dirty()}static create(t){return new this(t)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}const Bt={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0}
class Dt{constructor(t,e,s,i){this.name=t,this.manager=e,this.ComponentClass=s,this.layout=i,this.state={name:t,capabilities:Bt,ComponentClass:s,layout:i}}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class Rt{constructor(t,e=null){this._registry=t,this._resolver=e,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(t){let e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)}lookup(t){let e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
let s=this.factoryFor(t)
if(!s)return
if(!1===this._registry.registeredOption(t,"instantiate"))return s.class
let i=s.create()
return e&&i&&(this._lookups[t]=i),i}defaultInjections(t){return{}}buildInjections(t){let e,s=this.defaultInjections(t),i=this._registry.registeredInjections(t)
for(let n=0;n<i.length;n++)s[(e=i[n]).property]=this.lookup(e.source)
return s}buildFactory(t,e){let s=this.buildInjections(t)
return{class:e,create(t){let i=Object.assign({},s,t)
return e.create(i)}}}}class Mt{constructor(t){this._registrations={},this._registeredOptions={},this._registeredInjections={},t&&t.fallback&&(this._fallback=t.fallback)}register(t,e,s){this._registrations[t]=e,s&&(this._registeredOptions[t]=s)}registration(t){let e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e}unregister(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]}registerOption(t,e,s){let i=this._registeredOptions[t]
i||(i={},this._registeredOptions[t]=i),i[e]=s}registeredOption(t,e){let s,i=this.registeredOptions(t)
return i&&(s=i[e]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(t,e)),s}registeredOptions(t){let e=this._registeredOptions[t]
if(void 0===e){let s=t.split(":")[0]
e=this._registeredOptions[s]}return e}unregisterOption(t,e){let s=this._registeredOptions[t]
s&&delete s[e]}registerInjection(t,e,s){let i=this._registeredInjections[t]
void 0===i&&(this._registeredInjections[t]=i=[]),i.push({property:e,source:s})}registeredInjections(t){let e=t.split(":")[0],s=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(s,this._registeredInjections[e]),Array.prototype.push.apply(s,this._registeredInjections[t]),s}}const Ft="__owner__"
class It{constructor(t){this._bounds=t}get firstNode(){return this._bounds.firstNode()}get lastNode(){return this._bounds.lastNode()}}const Pt=new class{constructor(){this.evaluateOpcode=i(78).slice()}add(t,e){this.evaluateOpcode[t]=e}evaluate(t,e,s){(0,this.evaluateOpcode[s])(t,e)}}
class jt{constructor(){n(this)}}class Vt extends jt{constructor(){super(...arguments),this.next=null,this.prev=null}}var zt;(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})(zt||(zt={}))
class Ht extends St{constructor(t){super(t)}static create(t){return void 0===t?$t:null===t?Gt:!0===t?Yt:!1===t?Wt:"number"==typeof t?new Ut(t):new class extends Ht{constructor(){super(...arguments),this.lengthReference=null}get(t){if("length"===t){let t=this.lengthReference
return null===t&&(t=this.lengthReference=new Ut(this.inner.length)),t}return super.get(t)}}(t)}get(t){return $t}}class Ut extends Ht{constructor(t){super(t)}}const $t=new Ut(void 0),Gt=new Ut(null),Yt=new Ut(!0),Wt=new Ut(!1)
class Xt{constructor(t){this.inner=t,this.tag=t.tag}value(){return this.toBool(this.inner.value())}toBool(t){return!!t}}Pt.add(1,(t,{op1:e})=>{let s=t.stack,i=t.constants.resolveHandle(e)(t,s.pop())
t.loadValue(zt.v0,i)}),Pt.add(4,(t,{op1:e})=>{let s=t.referenceForSymbol(e)
t.stack.push(s)}),Pt.add(2,(t,{op1:e})=>{let s=t.stack.pop()
t.scope().bindSymbol(e,s)}),Pt.add(3,(t,{op1:e})=>{let s=t.stack.pop(),i=t.stack.pop(),n=t.stack.pop(),r=n?[s,i,n]:null
t.scope().bindBlock(e,r)}),Pt.add(76,(t,{op1:e})=>{let s=t.constants.getString(e),i=t.scope().getPartialMap()[s]
void 0===i&&(i=t.getSelf().get(s)),t.stack.push(i)}),Pt.add(17,(t,{op1:e,op2:s})=>{t.pushRootScope(e,!!s)}),Pt.add(5,(t,{op1:e})=>{let s=t.constants.getString(e),i=t.stack.pop()
t.stack.push(i.get(s))}),Pt.add(6,(t,{op1:e})=>{let s=t.stack,i=t.scope().getBlock(e)
i?(s.push(i[2]),s.push(i[1]),s.push(i[0])):(s.push(null),s.push(null),s.push(null))}),Pt.add(7,(t,{op1:e})=>{let s=!!t.scope().getBlock(e)
t.stack.push(s?Yt:Wt)}),Pt.add(8,t=>{let e=t.stack.pop(),s=e&&e.parameters.length
t.stack.push(s?Yt:Wt)}),Pt.add(9,(t,{op1:e})=>{let s=new Array(e)
for(let i=e;i>0;i--){s[i-1]=t.stack.pop()}t.stack.push(new class extends yt{constructor(t){super(),this.parts=t,this.tag=u(t)}compute(){let t=new Array
for(let e=0;e<this.parts.length;e++){let s=this.parts[e].value()
null!==s&&void 0!==s&&(t[e]=function(t){return"function"!=typeof t.toString?"":String(t)}(s))}return t.length>0?t.join(""):null}}(s))})
var Kt;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"})(Kt||(Kt={}))
const qt=y(Kt.Get),Jt=y(Kt.MaybeLocal)
var Zt;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.SetComponentAttrs=2]="SetComponentAttrs",t[t.DidRenderLayout=3]="DidRenderLayout",t[t.Debugger=4]="Debugger"})(Zt||(Zt={}))
var Qt=Kt
const te="&attrs"
class ee{constructor(t=0){this.offset=t,this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}compile(t,e){let s=t[this.offset],i=this.names[s],n=this.funcs[i]
n(t,e)}}let se,ie
class ne{constructor(){var t=function(t=new re,e=new ae){return t.add("if",(t,e,s,i,n)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
n.startLabels(),n.pushFrame(),n.returnTo("END"),n.expr(t[0]),n.toBoolean(),n.enter(1),n.jumpUnless("ELSE"),n.invokeStaticBlock(s),i?(n.jump("EXIT"),n.label("ELSE"),n.invokeStaticBlock(i),n.label("EXIT"),n.exit(),n.return()):(n.label("ELSE"),n.exit(),n.return()),n.label("END"),n.popFrame(),n.stopLabels()}),t.add("unless",(t,e,s,i,n)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
n.startLabels(),n.pushFrame(),n.returnTo("END"),n.expr(t[0]),n.toBoolean(),n.enter(1),n.jumpIf("ELSE"),n.invokeStaticBlock(s),i?(n.jump("EXIT"),n.label("ELSE"),n.invokeStaticBlock(i),n.label("EXIT"),n.exit(),n.return()):(n.label("ELSE"),n.exit(),n.return()),n.label("END"),n.popFrame(),n.stopLabels()}),t.add("with",(t,e,s,i,n)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
n.startLabels(),n.pushFrame(),n.returnTo("END"),n.expr(t[0]),n.dup(),n.toBoolean(),n.enter(2),n.jumpUnless("ELSE"),n.invokeStaticBlock(s,1),i?(n.jump("EXIT"),n.label("ELSE"),n.invokeStaticBlock(i),n.label("EXIT"),n.exit(),n.return()):(n.label("ELSE"),n.exit(),n.return()),n.label("END"),n.popFrame(),n.stopLabels()}),t.add("each",(t,e,s,i,n)=>{n.startLabels(),n.pushFrame(),n.returnTo("END"),e&&"key"===e[0][0]?n.expr(e[1][0]):n.pushPrimitiveReference(null),n.expr(t[0]),n.enter(2),n.putIterator(),n.jumpUnless("ELSE"),n.pushFrame(),n.returnTo("ITER"),n.dup(zt.fp,1),n.enterList("BODY"),n.label("ITER"),n.iterate("BREAK"),n.label("BODY"),n.invokeStaticBlock(s,2),n.pop(2),n.exit(),n.return(),n.label("BREAK"),n.exitList(),n.popFrame(),i?(n.jump("EXIT"),n.label("ELSE"),n.invokeStaticBlock(i),n.label("EXIT"),n.exit(),n.return()):(n.label("ELSE"),n.exit(),n.return()),n.label("END"),n.popFrame(),n.stopLabels()}),t.add("in-element",(t,e,s,i,n)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
n.startLabels(),n.pushFrame(),n.returnTo("END")
let r=e[0],a=e[1]
for(let l=0;l<r.length;l++){let t=r[l]
if("nextSibling"!==t&&"guid"!==t)throw new Error(`SYNTAX ERROR: #in-element does not take a \`${r[0]}\` option`)
n.expr(a[l])}n.expr(t[0]),n.dup(),n.enter(4),n.jumpUnless("ELSE"),n.pushRemoteElement(),n.invokeStaticBlock(s),n.popRemoteElement(),n.label("ELSE"),n.exit(),n.return(),n.label("END"),n.popFrame(),n.stopLabels()}),t.add("-with-dynamic-vars",(t,e,s,i,n)=>{if(e){let t=e[0],i=e[1]
n.compileParams(i),n.pushDynamicScope(),n.bindDynamicScope(t),n.invokeStaticBlock(s),n.popDynamicScope()}else n.invokeStaticBlock(s)}),t.add("component",(t,e,s,i,n)=>{let r=t[0],a=t.slice(1)
n.dynamicComponent(r,a,e,!0,s,i)}),e.add("component",(t,e,s,i)=>{let n=e[0],r=e.slice(1)
return i.dynamicComponent(n,r,s,!0,null,null),!0}),{blocks:t,inlines:e}}()
let e=t.blocks,s=t.inlines
this.blocks=e,this.inlines=s}}class re{constructor(){this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e,s,i,n,r){let a=this.names[t]
if(void 0===a){(0,this.missing)(t,e,s,i,n,r)}else{(0,this.funcs[a])(e,s,i,n,r)}}}class ae{constructor(){this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e){let s=t[1]
if(!Array.isArray(s))return["expr",s]
let i,n,r
if(s[0]===Qt.Helper)i=s[1],n=s[2],r=s[3]
else{if(s[0]!==Qt.Unknown)return["expr",s]
i=s[1],n=r=null}let a=this.names[i]
if(void 0===a&&this.missing){let t=(0,this.missing)(i,n,r,e)
return!1===t?["expr",s]:t}if(void 0!==a){let t=(0,this.funcs[a])(i,n,r,e)
return!1===t?["expr",s]:t}return["expr",s]}}class le{constructor(t,e,s,i){this.statements=t,this.containingLayout=e,this.options=s,this.symbolTable=i,this.compiled=null,this.statementCompiler=function(){if(se)return se
const t=se=new ee
t.add(Qt.Text,(t,e)=>{e.text(t[1])}),t.add(Qt.Comment,(t,e)=>{e.comment(t[1])}),t.add(Qt.CloseElement,(t,e)=>{e.closeElement()}),t.add(Qt.FlushElement,(t,e)=>{e.flushElement()}),t.add(Qt.Modifier,(t,e)=>{let s=e.lookup,i=e.referrer,n=t[1],r=t[2],a=t[3],l=s.lookupModifier(n,i)
if(!l)throw new Error(`Compile Error ${n} is not a modifier: Helpers may not be used in the element form.`)
e.modifier(l,r,a)}),t.add(Qt.StaticAttr,(t,e)=>{let s=t[1],i=t[2],n=t[3]
e.staticAttr(s,n,i)}),t.add(Qt.DynamicAttr,(t,e)=>{v(t,!1,e)}),t.add(Qt.TrustingAttr,(t,e)=>{v(t,!0,e)}),t.add(Qt.OpenElement,(t,e)=>{e.openPrimitiveElement(t[1])}),t.add(Qt.OpenSplattedElement,(t,e)=>{e.setComponentAttrs(!0),e.putComponentOperations(),e.openElementWithOperations(t[1])}),t.add(Qt.Component,(t,e)=>{let s=t[1],i=t[2],n=t[3],r=t[4],a=e.lookup,l=e.referrer,o=a.lookupComponentSpec(s,l)
if(null===o)throw new Error(`Compile Error: Cannot find component ${s}`)
{let t=a.getCapabilities(o),s=[[Qt.ClientSideStatement,Zt.SetComponentAttrs,!0],...i,[Qt.ClientSideStatement,Zt.SetComponentAttrs,!1]],l=e.inlineBlock({statements:s,parameters:nt}),h=e.template(r)
if(!1===t.dynamicLayout){let s=a.getLayout(o)
e.pushComponentDefinition(o),e.invokeStaticComponent(t,s,l,null,n,!1,h&&h)}else e.pushComponentDefinition(o),e.invokeComponent(l,null,n,!1,h&&h)}}),t.add(Qt.Partial,(t,e)=>{let s=t[1],i=t[2],n=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),e.expr(s),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(n,e.evalSymbols(),i),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),t.add(Qt.Yield,(t,e)=>{let s=t[1],i=t[2]
e.yield(s,i)}),t.add(Qt.AttrSplat,(t,e)=>{let s=t[1]
e.yield(s,[]),e.didCreateElement(zt.s0),e.setComponentAttrs(!1)}),t.add(Qt.Debugger,(t,e)=>{let s=t[1]
e.debugger(e.evalSymbols(),s)}),t.add(Qt.ClientSideStatement,(t,s)=>{e.compile(t,s)}),t.add(Qt.Append,(t,e)=>{let s=t[1],i=t[2]
if(!0===(e.macros.inlines.compile(t,e)||s))return
let n=qt(s),r=Jt(s)
i?e.guardedAppend(s,!0):n||r?e.guardedAppend(s,!1):(e.expr(s),e.dynamicContent(!1))}),t.add(Qt.Block,(t,e)=>{let s=t[1],i=t[2],n=t[3],r=t[4],a=t[5],l=e.template(r),o=e.template(a),h=l&&l,u=o&&o
e.macros.blocks.compile(s,i,n,h,u,e)})
const e=new ee(1)
return e.add(Zt.OpenComponentElement,(t,e)=>{e.putComponentOperations(),e.openElementWithOperations(t[2])}),e.add(Zt.DidCreateElement,(t,e)=>{e.didCreateElement(zt.s0)}),e.add(Zt.SetComponentAttrs,(t,e)=>{e.setComponentAttrs(t[2])}),e.add(Zt.Debugger,()=>{}),e.add(Zt.DidRenderLayout,(t,e)=>{e.didRenderLayout(zt.s0)}),t}()}static topLevel(t,e){return new le(t.statements,{block:t,referrer:e.referrer},e,{referrer:e.referrer,hasEval:t.hasEval,symbols:t.symbols})}compile(){let t=this.compiled
if(null!==t)return t
let e=this.options,s=this.statements,i=this.containingLayout,n=i.referrer,r=e.program,a=e.lookup,l=e.macros,o=e.asPartial,h=new(0,e.Builder)(r,a,n,l,i,o)
for(let c=0;c<s.length;c++)this.statementCompiler.compile(s[c],h)
let u=h.commit(r.heap)
return this.compiled=u}}class oe{constructor(t){this.builder=t}static(t,e){let s=e[0],i=e[1],n=e[2],r=e[3],a=this.builder,l=a.lookup
if(null!==t){let e=l.getCapabilities(t)
if(!1===e.dynamicLayout){let o=l.getLayout(t)
a.pushComponentDefinition(t),a.invokeStaticComponent(e,o,null,s,i,!1,n,r)}else a.pushComponentDefinition(t),a.invokeComponent(null,s,i,!1,n,r)}}}const he=8,ue=65535,ce=255,pe=255,de=768
class me{constructor(t){this.buffer=t,this.typePos=0,this.size=0}encode(t,...e){if(t>ce)throw new Error(`Opcode type over 8-bits. Got ${t}.`)
this.buffer.push(t|e.length<<he),this.typePos=this.buffer.length-1,e.forEach(t=>{if(t>ue)throw new Error(`Operand over 16-bits. Got ${t}.`)
this.buffer.push(t)}),this.size=this.buffer.length}compact(t){return String.fromCharCode(...t)}patch(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e}}class fe{constructor(){this.labels=a(),this.targets=[]}label(t,e){this.labels[t]=e}target(t,e,s){this.targets.push({at:t,Target:e,target:s})}patch(t){let e=this.targets,s=this.labels
for(let n=0;n<e.length;n++){var i=e[n]
let r=i.at,a=s[i.target]-r
t.patch(r,a)}}}class ge{constructor(t,e,s,i,n,r){this.program=t,this.lookup=e,this.referrer=s,this.macros=i,this.containingLayout=n,this.asPartial=r,this.encoder=new me([]),this.labelsStack=new tt,this.isComponentAttrs=!1,this.component=new oe(this),this.constants=t.constants,this.expressionCompiler=function(){if(ie)return ie
const t=ie=new ee
return t.add(Qt.Unknown,(t,e)=>{let s=e.lookup,i=e.asPartial,n=e.referrer,r=t[1],a=s.lookupHelper(r,n)
null!==a?e.helper(a,null,null):i?e.resolveMaybeLocal(r):(e.getVariable(0),e.getProperty(r))}),t.add(Qt.Concat,(t,e)=>{let s=t[1]
for(let i=0;i<s.length;i++)e.expr(s[i])
e.concat(s.length)}),t.add(Qt.Helper,(t,e)=>{let s=e.lookup,i=e.referrer,n=t[1],r=t[2],a=t[3]
if("component"===n){let t=r[0],s=r.slice(1)
return void e.curryComponent(t,s,a,!0)}let l=s.lookupHelper(n,i)
if(null===l)throw new Error(`Compile Error: ${n} is not a helper`)
e.helper(l,r,a)}),t.add(Qt.Get,(t,e)=>{let s=t[1],i=t[2]
e.getVariable(s)
for(let n=0;n<i.length;n++)e.getProperty(i[n])}),t.add(Qt.MaybeLocal,(t,e)=>{let s=t[1]
if(e.asPartial){let t=s[0]
s=s.slice(1),e.resolveMaybeLocal(t)}else e.getVariable(0)
for(let i=0;i<s.length;i++)e.getProperty(s[i])}),t.add(Qt.Undefined,(t,e)=>e.pushPrimitiveReference(void 0)),t.add(Qt.HasBlock,(t,e)=>{e.hasBlock(t[1])}),t.add(Qt.HasBlockParams,(t,e)=>{e.hasBlockParams(t[1])}),t}()}get pos(){return this.encoder.typePos}get nextPos(){return this.encoder.size}expr(t){Array.isArray(t)?this.expressionCompiler.compile(t,this):this.pushPrimitiveReference(t)}upvars(t){return i(t)}reserve(t,e=1){let s=[]
for(let i=0;i<e;i++)s[i]=-1
this.push(t,...s)}push(t,...e){this.encoder.encode(t,...e)}commit(t){this.push(20)
let e=this.encoder.buffer,s=t.malloc()
for(let i=0;i<e.length;i++)t.push(e[i])
return t.finishMalloc(s,this.containingLayout.block.symbols.length),s}setComponentAttrs(t){this.isComponentAttrs=t}pushArgs(t,e){let s=this.constants.stringArray(t)
this.push(61,s,e)}get labels(){return this.labelsStack.current}startLabels(){this.labelsStack.push(new fe)}stopLabels(){this.labelsStack.pop().patch(this.encoder)}pushComponentDefinition(t){this.push(59,this.constants.handle(t))}pushDynamicComponentManager(t){this.push(60,this.constants.serializable(t))}prepareArgs(t){this.push(63,t)}createComponent(t,e,s){let i=(!0===e?1:0)|(!0===s?1:0)<<1
this.push(64,i,t)}registerComponentDestructor(t){this.push(65,t)}beginComponentTransaction(){this.push(71)}commitComponentTransaction(){this.push(72)}putComponentOperations(){this.push(66)}getComponentSelf(t){this.push(67,t)}getComponentTagName(t){this.push(68,t)}getComponentLayout(t){this.push(69,t)}invokeComponentLayout(){this.push(70)}didCreateElement(t){this.push(73,t)}didRenderLayout(t){this.push(74,t)}invokePartial(t,e,s){let i=this.constants.serializable(t),n=this.constants.stringArray(e),r=this.constants.array(s)
this.push(75,i,n,r)}resolveMaybeLocal(t){this.push(76,this.string(t))}debugger(t,e){this.push(77,this.constants.stringArray(t),this.constants.array(e))}dynamicContent(t){this.push(24,t?1:0)}text(t){this.push(22,this.constants.string(t))}openPrimitiveElement(t){this.push(25,this.constants.string(t))}openElementWithOperations(t){this.push(26,this.constants.string(t))}openDynamicElement(){this.push(27)}flushElement(){this.push(31)}closeElement(){this.push(32)}staticAttr(t,e,s){let i=this.constants.string(t),n=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(s),this.push(30,i,1,n)
else{let t=this.constants.string(s)
this.push(28,i,t,n)}}dynamicAttr(t,e,s){let i=this.constants.string(t),n=e?this.constants.string(e):0
this.isComponentAttrs?this.push(30,i,!0===s?1:0,n):this.push(29,i,!0===s?1:0,n)}comment(t){let e=this.constants.string(t)
this.push(23,e)}modifier(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(33,this.constants.handle(t)),this.popFrame()}putIterator(){this.push(55)}enterList(t){this.reserve(53),this.labels.target(this.pos,53,t)}exitList(){this.push(54)}iterate(t){this.reserve(56),this.labels.target(this.pos,56,t)}setVariable(t){this.push(2,t)}setBlock(t){this.push(3,t)}getVariable(t){this.push(4,t)}getProperty(t){this.push(5,this.string(t))}getBlock(t){this.push(6,t)}hasBlock(t){this.push(7,t)}hasBlockParams(t){this.getBlock(t),this.resolveBlock(),this.push(8)}concat(t){this.push(9,t)}load(t){this.push(15,t)}fetch(t){this.push(16,t)}dup(t=zt.sp,e=0){return this.push(13,t,e)}pop(t=1){return this.push(14,t)}pushRemoteElement(){this.push(34)}popRemoteElement(){this.push(35)}label(t){this.labels.label(t,this.nextPos)}pushRootScope(t,e){this.push(17,t,e?1:0)}pushChildScope(){this.push(18)}popScope(){this.push(19)}returnTo(t){this.reserve(21),this.labels.target(this.pos,21,t)}pushDynamicScope(){this.push(37)}popDynamicScope(){this.push(38)}primitive(t){let e,s=0
switch(typeof t){case"number":t%1==0?t>-1?e=t:(e=this.negative(t),s=4):(e=this.float(t),s=1)
break
case"string":e=this.string(t),s=2
break
case"boolean":e=0|t,s=3
break
case"object":e=2,s=3
break
case"undefined":e=3,s=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,e<<3|s)}float(t){return this.constants.float(t)}negative(t){return this.constants.negative(t)}pushPrimitiveReference(t){this.primitive(t),this.primitiveReference()}primitiveReference(){this.push(12)}helper(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch(zt.v0)}bindDynamicScope(t){this.push(36,this.names(t))}enter(t){this.push(50,t)}exit(){this.push(51)}return(){this.push(20)}pushFrame(){this.push(48)}popFrame(){this.push(49)}invokeVirtual(){this.push(42)}invokeYield(){this.push(44)}toBoolean(){this.push(52)}jump(t){this.reserve(45),this.labels.target(this.pos,45,t)}jumpIf(t){this.reserve(46),this.labels.target(this.pos,46,t)}jumpUnless(t){this.reserve(47),this.labels.target(this.pos,47,t)}string(t){return this.constants.string(t)}names(t){let e=[]
for(let s=0;s<t.length;s++){let i=t[s]
e[s]=this.constants.string(i)}return this.constants.array(e)}symbols(t){return this.constants.array(t)}inlineBlock(t){let e=t.parameters,s=t.statements,i={parameters:e,referrer:this.containingLayout.referrer},n={program:this.program,macros:this.macros,Builder:this.constructor,lookup:this.lookup,asPartial:this.asPartial,referrer:this.referrer}
return new le(s,this.containingLayout,n,i)}evalSymbols(){let t=this.containingLayout.block
return t.hasEval?t.symbols:null}compileParams(t){if(!t)return 0
for(let e=0;e<t.length;e++)this.expr(t[e])
return t.length}compileArgs(t,e,s,i){s&&(this.pushYieldableBlock(s.main),this.pushYieldableBlock(s.else),this.pushYieldableBlock(s.attrs))
let n=this.compileParams(t)<<4
i&&(n|=8),s&&(n|=7)
let r=nt
if(e){r=e[0]
let t=e[1]
for(let e=0;e<t.length;e++)this.expr(t[e])}this.pushArgs(r,n)}invokeStaticBlock(t,e=0){let s=t.symbolTable.parameters,i=s.length,n=Math.min(e,i)
if(this.pushFrame(),n){this.pushChildScope()
for(let t=0;t<n;t++)this.dup(zt.fp,e-t),this.setVariable(s[t])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),n&&this.popScope(),this.popFrame()}guardedAppend(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(e),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}yield(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()}invokeComponent(t,e,s,i,n,r=null,a){this.fetch(zt.s0),this.dup(zt.sp,1),this.load(zt.s0),this.pushFrame()
let l={main:n,else:r,attrs:t}
this.compileArgs(e,s,l,i),this.prepareArgs(zt.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(zt.s0,null!==n,null!==r),this.registerComponentDestructor(zt.s0),this.getComponentSelf(zt.s0),a?(this.pushSymbolTable(a.symbolTable),this.pushLayout(a),this.resolveLayout()):this.getComponentLayout(zt.s0),this.invokeComponentLayout(),this.didRenderLayout(zt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(zt.s0)}invokeStaticComponent(e,s,i,n,r,a,l,o=null){let h=s.symbolTable
if(h.hasEval||e.prepareArgs)return void this.invokeComponent(i,n,r,a,l,o,s)
this.fetch(zt.s0),this.dup(zt.sp,1),this.load(zt.s0)
let u=h.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,r,null,a)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(zt.s0,null!==l,null!==o),e.createArgs&&this.popFrame(),this.registerComponentDestructor(zt.s0)
let c=[]
this.getComponentSelf(zt.s0),c.push({symbol:0,isBlock:!1})
for(let d=0;d<u.length;d++){let e=u[d]
switch(e.charAt(0)){case"&":let s=null
if("&default"===e)s=l
else if("&inverse"===e)s=o
else{if(e!==te)throw t()
s=i}s?(this.pushYieldableBlock(s),c.push({symbol:d+1,isBlock:!0})):(this.pushYieldableBlock(null),c.push({symbol:d+1,isBlock:!0}))
break
case"@":if(!r)break
let n=r[0],h=r[1],u=e
a&&(u=e.slice(1))
let p=n.indexOf(u);-1!==p&&(this.expr(h[p]),c.push({symbol:d+1,isBlock:!1}))}}this.pushRootScope(u.length+1,!!(l||o||i))
for(let t=c.length-1;t>=0;t--){var p=c[t]
let e=p.symbol
p.isBlock?this.setBlock(e):this.setVariable(e)}this.pushFrame(),this.invokeStatic(s),this.didRenderLayout(zt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(zt.s0)}dynamicComponent(t,e,s,i,n,r=null){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,e,s,i,n,r),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}isComponent(){this.push(57)}curryComponent(t,e,s,i){let n=this.referrer
this.pushFrame(),this.compileArgs(e,s,null,i),this.expr(t),this.push(58,this.constants.serializable(n)),this.popFrame(),this.fetch(zt.v0)}pushSymbolTable(t){if(t){let e=this.constants.table(t)
this.push(41,e)}else this.primitive(null)}pushBlockScope(){this.push(40)}pushYieldableBlock(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)}template(t){return t?this.inlineBlock(t):null}}class be extends ge{pushBlock(t){t?this.pushOther(t):this.primitive(null)}resolveBlock(){this.push(39)}pushLayout(t){t?this.pushOther(t):this.primitive(null)}resolveLayout(){this.push(39)}invokeStatic(t){this.pushOther(t),this.push(39),this.push(42)}pushOther(t){this.push(10,this.other(t))}other(t){return this.constants.other(t)}}class ye{constructor(t,e,s=e.length){this.tag=t,this.references=e,this.length=s}static empty(){return new ye(ut,nt,0)}at(t){return this.references[t]}value(){return this.references.map(this.valueOf)}get(t){let e=this.references,s=this.length
if("length"===t)return Ht.create(s)
{let i=parseInt(t,10)
return i<0||i>=s?$t:e[i]}}valueOf(t){return t.value()}}class ve{constructor(t,e,s){this.tag=t,this.names=e,this.references=s,this.length=e.length,this._map=null}get map(){let t=this._map
if(!t){let e=this.names,s=this.references
t=this._map=a()
for(let i=0;i<e.length;i++){t[e[i]]=s[i]}}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names,s=this.references,i=e.indexOf(t)
return-1===i?$t:s[i]}value(){let t=this.names,e=this.references,s=a()
for(let i=0;i<t.length;i++){s[t[i]]=e[i].value()}return s}}const ke=new ve(ut,nt,nt),Se=new ye(ut,nt),we={tag:ut,length:0,positional:Se,named:ke},_e="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
class Ee{constructor(t,e){this.inner=t,this.args=e,this[_e]=!0}unwrap(t){t.realloc(this.offset)
let e=this
for(;;){var s=e
let i=s.args,n=s.inner
if(i&&(t.positional.prepend(i.positional),t.named.merge(i.named)),!k(n))return n
e=n}}get offset(){let t=this.inner,e=this.args,s=e?e.positional.length:0
return k(t)?s+t.offset:s}}class Ce extends Xt{static create(t){return new Ce(t)}toBool(t){return k(t)}}Pt.add(24,(t,{op1:e})=>{let s,i=t.stack.pop(),n=i.value()
s=e?t.elements().appendTrustingDynamicContent(n):t.elements().appendCautiousDynamicContent(n),o(i)||t.updateWith(new class extends Vt{constructor(t,e){super(),this.reference=t,this.content=e,this.tag=t.tag}evaluate(t){let e=this.content,s=this.reference
e.update(t.env,s.value())}}(i,s))})
Pt.add(18,t=>t.pushChildScope()),Pt.add(19,t=>t.popScope()),Pt.add(37,t=>t.pushDynamicScope()),Pt.add(38,t=>t.popDynamicScope()),Pt.add(10,(t,{op1:e})=>{t.stack.push(t.constants.getOther(e))}),Pt.add(11,(t,{op1:e})=>{let s=t.stack,i=e>>3
switch(7&e){case 0:s.push(i)
break
case 1:s.push(t.constants.getFloat(i))
break
case 2:s.push(t.constants.getString(i))
break
case 3:switch(i){case 0:s.push(!1)
break
case 1:s.push(!0)
break
case 2:s.push(null)
break
case 3:s.push(void 0)}break
case 4:s.push(t.constants.getNegative(i))}}),Pt.add(12,t=>{let e=t.stack
e.push(Ht.create(e.pop()))}),Pt.add(13,(t,{op1:e,op2:s})=>{let i=t.fetchValue(e)-s
t.stack.dup(i)}),Pt.add(14,(t,{op1:e})=>{t.stack.pop(e)}),Pt.add(15,(t,{op1:e})=>{t.load(e)}),Pt.add(16,(t,{op1:e})=>{t.fetch(e)}),Pt.add(36,(t,{op1:e})=>{let s=t.constants.getArray(e)
t.bindDynamicScope(s)}),Pt.add(48,t=>{t.pushFrame()}),Pt.add(49,t=>{t.popFrame()}),Pt.add(50,(t,{op1:e})=>{t.enter(e)}),Pt.add(51,t=>{t.exit()}),Pt.add(41,(t,{op1:e})=>{t.stack.push(t.constants.getSymbolTable(e))}),Pt.add(40,t=>{t.stack.push(t.scope())}),Pt.add(39,t=>{let e=t.stack,s=e.pop()
e.push(s?s.compile():null)}),Pt.add(42,t=>{t.call(t.stack.pop())}),Pt.add(43,(t,{op1:e})=>{t.call(e)}),Pt.add(44,t=>{let e=t.stack,s=e.pop(),i=e.pop(),n=e.pop(),r=e.pop()
if(null===n)return t.pushFrame(),void t.pushScope(i)
let a=i
{let t=n.parameters,e=t.length
if(e>0){a=a.child()
for(let s=0;s<e;s++)a.bindSymbol(t[s],r.at(s))}}t.pushFrame(),t.pushScope(a),t.call(s)}),Pt.add(45,(t,{op1:e})=>{t.goto(e)}),Pt.add(46,(t,{op1:e})=>{let s=t.stack.pop()
if(o(s))s.value()&&t.goto(e)
else{let i=new vt(s)
i.peek()&&t.goto(e),t.updateWith(new xe(i))}}),Pt.add(47,(t,{op1:e})=>{let s=t.stack.pop()
if(o(s))s.value()||t.goto(e)
else{let i=new vt(s)
i.peek()||t.goto(e),t.updateWith(new xe(i))}}),Pt.add(20,t=>{t.return()}),Pt.add(21,(t,{op1:e})=>{t.returnTo(e)}),Pt.add(52,t=>{let e=t.env,s=t.stack
s.push(e.toConditionalReference(s.pop()))})
class xe extends Vt{constructor(t){super(),this.type="assert",this.tag=t.tag,this.cache=t}evaluate(t){(function(t){return t!==kt})(this.cache.revalidate())&&t.throw()}}class Ae extends Vt{constructor(t,e){super(),this.target=e,this.type="jump-if-not-modified",this.tag=t,this.lastRevision=t.value()}evaluate(t){let e=this.tag,s=this.target,i=this.lastRevision
!t.alwaysRevalidate&&e.validate(i)&&t.goto(s)}didModify(){this.lastRevision=this.tag.value()}}class Ne extends Vt{constructor(t){super(),this.target=t,this.type="did-modify",this.tag=ut}evaluate(){this.target.didModify()}}class Oe{constructor(t){this.tag=ut,this.type="label",this.label=null,this.prev=null,this.next=null,n(this),this.label=t}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}}Pt.add(22,(t,{op1:e})=>{t.elements().appendText(t.constants.getString(e))}),Pt.add(26,(t,{op1:e})=>{let s=t.constants.getString(e)
t.elements().openElement(s)}),Pt.add(23,(t,{op1:e})=>{t.elements().appendComment(t.constants.getString(e))}),Pt.add(25,(t,{op1:e})=>{t.elements().openElement(t.constants.getString(e))}),Pt.add(27,t=>{let e=t.stack.pop().value()
t.elements().openElement(e)}),Pt.add(34,t=>{let e,s,i=t.stack.pop(),n=t.stack.pop(),r=t.stack.pop().value()
if(o(i))e=i.value()
else{let s=new vt(i)
e=s.peek(),t.updateWith(new xe(s))}if(o(n))s=n.value()
else{let e=new vt(n)
s=e.peek(),t.updateWith(new xe(e))}t.elements().pushRemoteElement(e,r,s)}),Pt.add(35,t=>{t.elements().popRemoteElement()}),Pt.add(31,t=>{let e=t.fetchValue(zt.t0)
e&&(e.flush(t),t.loadValue(zt.t0,null)),t.elements().flushElement()}),Pt.add(32,t=>{t.elements().closeElement()}),Pt.add(33,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),i=t.stack.pop()
var n=t.elements()
let r=n.constructing,a=n.updateOperations,l=t.dynamicScope(),o=s.create(r,i,l,a)
t.env.scheduleInstallModifier(o,s)
let u=s.getDestructor(o)
u&&t.newDestroyable(u)
let c=s.getTag(o)
h(c)||t.updateWith(new class extends Vt{constructor(t,e,s){super(),this.tag=t,this.manager=e,this.modifier=s,this.type="update-modifier",this.lastUpdated=t.value()}evaluate(t){let e=this.manager,s=this.modifier,i=this.tag,n=this.lastUpdated
i.validate(n)||(t.env.scheduleUpdateModifier(s,e),this.lastUpdated=i.value())}}(c,s,o))})
Pt.add(28,(t,{op1:e,op2:s,op3:i})=>{let n=t.constants.getString(e),r=t.constants.getString(s),a=i?t.constants.getString(i):null
t.elements().setStaticAttribute(n,r,a)}),Pt.add(29,(t,{op1:e,op2:s,op3:i})=>{let n=t.constants.getString(e),r=t.stack.pop(),a=r.value(),l=i?t.constants.getString(i):null,h=t.elements().setDynamicAttribute(n,a,!!s,l)
o(r)||t.updateWith(new Te(r,h))})
class Te extends Vt{constructor(t,e){super(),this.reference=t,this.attribute=e,this.type="patch-element",this.tag=t.tag,this.lastRevision=this.tag.value()}evaluate(t){let e=this.attribute,s=this.reference,i=this.tag
i.validate(this.lastRevision)||(this.lastRevision=i.value(),e.update(s.value(),t.env))}}class Le{constructor(t){this.list=t,this.tag=u(t),this.list=t}value(){let t=[],e=this.list
for(let s=0;s<e.length;s++){let i=w(e[s].value())
i&&t.push(i)}return 0===t.length?null:t.join(" ")}}const Be=new class{constructor(){this.stack=null,this.positional=new class{constructor(){this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}setup(t,e,s){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=ut,this._references=nt):(this._tag=null,this._references=null)}get tag(){let t=this._tag
return t||(t=this._tag=u(this.references)),t}at(t){let e=this.base,s=this.length,i=this.stack
return t<0||t>=s?$t:i.get(t,e)}capture(){return new ye(this.tag,this.references)}prepend(t){let e=t.length
if(e>0){let s=this.base,i=this.length,n=this.stack
this.base=s-=e,this.length=i+e
for(let r=0;r<e;r++)n.set(t.at(r),r,s)
this._tag=null,this._references=null}}get references(){let t=this._references
if(!t){let e=this.stack,s=this.base,i=this.length
t=this._references=e.slice(s,s+i)}return t}},this.named=new class{constructor(){this.base=0,this.length=0,this._tag=null,this._references=null,this._names=nt,this._atNames=nt}setup(t,e,s,i,n){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=ut,this._references=nt,this._names=nt,this._atNames=nt):(this._tag=null,this._references=null,n?(this._names=i,this._atNames=null):(this._names=null,this._atNames=i))}get tag(){return u(this.references)}get names(){let t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}get atNames(){let t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}has(t){return-1!==this.names.indexOf(t)}get(t,e=!0){let s=this.base,i=this.stack,n=e?this.names:this.atNames,r=n.indexOf(t)
return-1===r?$t:i.get(r,s)}capture(){return new ve(this.tag,this.names,this.references)}merge(t){let e=t.length
if(e>0){let s=this.names,i=this.length,n=this.stack,r=t.names
Object.isFrozen(s)&&0===s.length&&(s=[])
for(let a=0;a<e;a++){let e=r[a],l=s.indexOf(e);-1===l&&(i=s.push(e),n.push(t.references[a]))}this.length=i,this._tag=null,this._references=null,this._names=s,this._atNames=null}}get references(){let t=this._references
if(!t){let e=this.base,s=this.length,i=this.stack
t=this._references=i.slice(e,e+s)}return t}toSyntheticName(t){return t.slice(1)}toAtName(t){return`@${t}`}},this.blocks=new class{constructor(){this.internalValues=null,this.internalTag=null,this.names=nt,this.length=0,this.base=0}setup(t,e,s,i){this.stack=t,this.names=i,this.base=e,this.length=s,0===s?(this.internalTag=ut,this.internalValues=nt):(this.internalTag=null,this.internalValues=null)}get values(){let t=this.internalValues
if(!t){let e=this.base,s=this.length,i=this.stack
t=this.internalValues=i.slice(e,e+3*s)}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.base,s=this.stack,i=this.names,n=i.indexOf(t)
if(-1===i.indexOf(t))return null
let r=s.get(3*n,e),a=s.get(3*n+1,e),l=s.get(3*n+2,e)
return null===l?null:[l,a,r]}capture(){return new class{constructor(t,e){this.names=t,this.values=e,this.length=t.length}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]}}(this.names,this.values)}}}setup(t,e,s,i,n){this.stack=t
let r=this.named,a=e.length,l=t.sp-a+1
r.setup(t,l,a,e,n)
let o=l-i
this.positional.setup(t,o,i)
let h=this.blocks,u=s.length,c=o-3*u
h.setup(t,c,u,s)}get tag(){return u([this.positional,this.named])}get base(){return this.blocks.base}get length(){return this.positional.length+this.named.length+3*this.blocks.length}at(t){return this.positional.at(t)}realloc(t){if(t>0){let e=this.positional,s=this.named,i=this.stack,n=e.base+t
for(let t=e.length+s.length-1;t>=0;t--)i.set(i.get(t,e.base),t,n)
e.base+=t,s.base+=t,i.sp+=t}}capture(){let t=0===this.positional.length?Se:this.positional.capture(),e=0===this.named.length?ke:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}}clear(){let t=this.stack,e=this.length
t.pop(e)}}
Pt.add(57,t=>{let e=t.stack,s=e.pop()
e.push(Ce.create(s))}),Pt.add(58,(t,{op1:e})=>{let s=t.stack,i=s.pop(),n=s.pop(),r=null
n.length&&(r=n.capture())
let a=t.constants.getSerializable(e),l=t.constants.resolver
t.loadValue(zt.v0,new class{constructor(t,e,s,i){this.inner=t,this.resolver=e,this.meta=s,this.args=i,this.tag=t.tag,this.lastValue=null,this.lastDefinition=null}value(){let t=this.inner,e=this.lastValue,s=t.value()
if(s===e)return this.lastDefinition
let i=null
return k(s)?i=s:"string"==typeof s&&s&&(i=S(this.resolver,s,this.meta)),i=this.curry(i),this.lastValue=s,this.lastDefinition=i,i}get(){return $t}curry(t){let e=this.args
return!e&&k(t)?t:t?new Ee(t,e):null}}(i,l,a,r))}),Pt.add(59,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),i=s.manager
t.stack.push({definition:s,manager:i,state:null})}),Pt.add(60,(e,{op1:s})=>{let i,n=e.stack,r=n.pop().value()
if("string"==typeof r){let t=e.constants
i=S(e.constants.resolver,r,t.getSerializable(s))}else{if(!k(r))throw t()
i=r}n.push({definition:i,manager:null,state:null})}),Pt.add(61,(t,{op1:e,op2:s})=>{let i=t.stack,n=t.constants.getStringArray(e),r=s>>4,a=8&s,l=[]
4&s&&l.push("main"),2&s&&l.push("else"),1&s&&l.push("attrs"),Be.setup(i,n,l,r,!!a),i.push(Be)}),Pt.add(63,(t,{op1:e})=>{let s,i=t.stack,n=t.fetchValue(e),r=n.definition
k(r)?(s=i.pop(),r=n.definition=r.unwrap(s)):s=i.pop()
var a=r
let l=a.manager,o=a.state
if(n.manager=r.manager,!0!==l.getCapabilities(o).prepareArgs)return void i.push(s)
let h=s.blocks.values,u=s.blocks.names,c=l.prepareArgs(o,s)
if(c){s.clear()
for(let t=0;t<h.length;t++)i.push(h[t])
let t=c.positional,e=c.named,n=t.length
for(let s=0;s<n;s++)i.push(t[s])
let r=Object.keys(e)
for(let s=0;s<r.length;s++)i.push(e[r[s]])
s.setup(i,r,u,n,!0)}i.push(s)}),Pt.add(64,(t,{op1:e,op2:s})=>{let i=t.dynamicScope(),n=t.fetchValue(s),r=n.definition,a=n.manager,l=1&e,o=null
a.getCapabilities(r.state).createArgs&&(o=t.stack.peek())
let u=a.create(t.env,r.state,o,i,t.getSelf(),!!l)
n.state=u
let c=a.getTag(u)
h(c)||t.updateWith(new class extends Vt{constructor(t,e,s,i){super(),this.tag=t,this.component=e,this.manager=s,this.dynamicScope=i,this.type="update-component"}evaluate(t){let e=this.component,s=this.manager,i=this.dynamicScope
s.update(e,i)}}(c,u,a,i))}),Pt.add(65,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.manager,n=s.state,r=i.getDestructor(n)
r&&t.newDestroyable(r)}),Pt.add(71,t=>{t.beginCacheGroup(),t.elements().pushSimpleBlock()}),Pt.add(66,t=>{t.loadValue(zt.t0,new class{constructor(){this.attributes=a(),this.classes=[]}setAttribute(t,e,s,i){let n={value:e,namespace:i,trusting:s}
"class"===t&&this.classes.push(e),this.attributes[t]=n}flush(t){for(let e in this.attributes){let s=this.attributes[e],i=s.value,n=s.namespace,r=s.trusting
"class"===e&&(i=new Le(this.classes))
let a=t.elements().setDynamicAttribute(e,i.value(),r,n)
o(i)||t.updateWith(new Te(i,a))}}})}),Pt.add(30,(t,{op1:e,op2:s,op3:i})=>{let n=t.constants.getString(e),r=t.stack.pop(),a=i?t.constants.getString(i):null
t.fetchValue(zt.t0).setAttribute(n,r,!!s,a)})
Pt.add(73,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,n=s.state,r=i.manager,a=t.fetchValue(zt.t0)
r.didCreateElement(n,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),Pt.add(67,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,n=s.state,r=i.manager
t.stack.push(r.getSelf(n))}),Pt.add(68,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,n=s.state,r=i.manager
t.stack.push(r.getTagName(n))}),Pt.add(69,(e,{op1:s})=>{let i,n=e.fetchValue(s),r=n.manager,a=n.definition,l=e.constants.resolver,o=e.stack,h=n.state,u=a.state
if(function(t,e){return!1===e.getCapabilities(t).dynamicLayout}(u,r))i=r.getLayout(u,l)
else{if(!function(t,e){return!0===e.getCapabilities(t).dynamicLayout}(u,r))throw t()
i=r.getDynamicLayout(h,l)}o.push(i.symbolTable),o.push(i.handle)}),Pt.add(70,t=>{let e=t.stack,s=e.pop()
var i=e.pop()
let n=i.symbols,r=i.hasEval
{let i=t.pushRootScope(n.length+1,!0)
i.bindSelf(e.pop())
let l=t.stack.pop(),o=null,h=-1
r&&(h=n.indexOf("$eval")+1,o=a())
let u=l.named.atNames
for(let t=u.length-1;t>=0;t--){let e=u[t],s=n.indexOf(u[t]),a=l.named.get(e,!1);-1!==s&&i.bindSymbol(s+1,a),r&&(o[e]=a)}let c=(t,e)=>{let s=n.indexOf(t),r=p.get(e);-1!==s&&i.bindBlock(s+1,r),o&&(o[t]=r)},p=l.blocks
c(te,"attrs"),c("&inverse","else"),c("&default","main"),o&&i.bindEvalScope(o),t.call(s)}}),Pt.add(74,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.manager,n=s.state,r=t.elements().popBlock()
i.didRenderLayout(n,r),t.env.didCreate(n,i),t.updateWith(new class extends Vt{constructor(t,e,s){super(),this.manager=t,this.component=e,this.bounds=s,this.type="did-update-layout",this.tag=ut}evaluate(t){let e=this.manager,s=this.component,i=this.bounds
e.didUpdateLayout(s,i),t.env.didUpdate(s,e)}}(i,n,r))}),Pt.add(72,t=>{t.commitCacheGroup()})
let De=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}
Pt.add(77,(t,{op1:e,op2:s})=>{let i=t.constants.getStringArray(e),n=t.constants.getArray(s),r=new class{constructor(t,e,s){this.scope=t,this.locals=a()
for(let i=0;i<s.length;i++){let n=s[i],r=e[n-1],a=t.getSymbol(n)
this.locals[r]=a}}get(t){let e=this.scope,s=this.locals,i=t.split(".")
var n=t.split(".")
let r,a=n[0],l=n.slice(1),o=e.getEvalScope()
return"this"===a?r=e.getSelf():s[a]?r=s[a]:0===a.indexOf("@")&&o[a]?r=o[a]:(r=this.scope.getSelf(),l=i),l.reduce((t,e)=>t.get(e),r)}}(t.scope(),i,n)
De(t.getSelf().value(),t=>r.get(t).value())}),Pt.add(75,(t,{op1:e,op2:s,op3:i})=>{let n=t.constants,r=t.constants.resolver,l=t.stack.pop().value(),o=n.getSerializable(e),h=n.getStringArray(s),u=n.getArray(i),c=r.lookupPartial(l,o)
var p=r.resolve(c).getPartial()
let d=p.symbolTable,m=p.handle
{let e=d.symbols,s=t.scope(),i=t.pushRootScope(e.length,!1)
i.bindCallerScope(s.getCallerScope()),i.bindEvalScope(s.getEvalScope()),i.bindSelf(s.getSelf())
let n=a()
for(let t=0;t<u.length;t++){let e=u[t],i=h[e-1],r=s.getSymbol(e)
n[i]=r}let r=s.getEvalScope()
for(let t=0;t<e.length;t++){let s=t+1,n=r[e[t]]
void 0!==n&&i.bind(s,n)}i.bindPartialMap(n),t.pushFrame(),t.call(m)}})
Pt.add(55,t=>{let e=t.stack,s=e.pop(),i=e.pop(),n=new class{constructor(t){this.iterator=null
let e=new _t(t)
this.artifacts=e}next(){let t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)}}(t.env.iterableFor(s,i.value()))
e.push(n),e.push(new class{constructor(t){this.tag=t.tag,this.artifacts=t}value(){return!this.artifacts.isEmpty()}}(n.artifacts))}),Pt.add(53,(t,{op1:e})=>{t.enterList(e)}),Pt.add(54,t=>{t.exitList()}),Pt.add(56,(t,{op1:e})=>{let s=t.stack.peek().next()
if(s){let e=t.iterate(s.memo,s.value)
t.enterItem(s.key,e)}else t.goto(e)})
class Re{constructor(t,e){this.element=t,this.nextSibling=e}}class Me{constructor(t,e,s){this.parentNode=t,this.first=e,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class Fe{constructor(t,e){this.parentNode=t,this.node=e}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}const Ie="http://www.w3.org/2000/svg",Pe="http://www.w3.org/2000/svg",je={foreignObject:1,desc:1,title:1},Ve=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(t=>Ve[t]=1)
let ze="undefined"==typeof document?null:document
class He{constructor(t){this.document=t,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(t,e){let s,i
if(e?(s=e.namespaceURI===Pe||"svg"===t,i=je[e.tagName]):(s="svg"===t,i=!1),s&&!i){if(Ve[t])throw new Error(`Cannot create a ${t} inside an SVG context`)
return this.document.createElementNS(Pe,t)}return this.document.createElement(t)}insertBefore(t,e,s){t.insertBefore(e,s)}insertHTMLBefore(t,e,s){return function(t,e,s,i){let n,r=e,a=t,l=s,o=l?l.previousSibling:r.lastChild
if(null===i||""===i)return new Me(r,null,null)
null===l?(r.insertAdjacentHTML("beforeend",i),n=r.lastChild):l instanceof HTMLElement?(l.insertAdjacentHTML("beforebegin",i),n=l.previousSibling):(r.insertBefore(a,l),a.insertAdjacentHTML("beforebegin",i),n=a.previousSibling,r.removeChild(a))
let h=o?o.nextSibling:r.firstChild
return new Me(r,h,n)}(this.uselessElement,t,e,s)}createTextNode(t){return this.document.createTextNode(t)}createComment(t){return this.document.createComment(t)}}var Ue;(function(t){class e extends He{createElementNS(t,e){return this.document.createElementNS(t,e)}setAttribute(t,e,s,i=null){i?t.setAttributeNS(i,e,s):t.setAttribute(e,s)}}t.TreeConstruction=e
let s=e
s=B(ze,s),s=L(ze,s,Pe),t.DOMTreeConstruction=s})(Ue||(Ue={}))
let $e=class extends He{constructor(t){super(t),this.document=t,this.namespace=null}setAttribute(t,e,s){t.setAttribute(e,s)}removeAttribute(t,e){t.removeAttribute(e)}insertAfter(t,e,s){this.insertBefore(t,e,s.nextSibling)}}
$e=B(ze,$e)
var Ge=$e=L(ze,$e,Pe)
const Ye=Ue.DOMTreeConstruction,We=["javascript:","vbscript:"],Xe=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Ke=["EMBED"],qe=["href","src","background","action"],Je=["src"],Ze={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
class Qe{constructor(t){this.attribute=t}}class ts extends Qe{set(t,e,s){let i=z(e)
if(null!==i){var n=this.attribute
let e=n.name,s=n.namespace
t.__setAttribute(e,i,s)}}update(t,e){let s=z(t)
var i=this.attribute
let n=i.element,r=i.name
null===s?n.removeAttribute(r):n.setAttribute(r,s)}}class es extends Qe{set(t,e,s){if(null!==e&&void 0!==e){let s=this.attribute.name
this.value=e,t.__setProperty(s,e)}}update(t,e){var s=this.attribute
let i=s.element,n=s.name
this.value!==t&&(i[n]=this.value=t,null!==t&&void 0!==t||this.removeAttribute())}removeAttribute(){var t=this.attribute
let e=t.element,s=t.name,i=t.namespace
i?e.removeAttributeNS(i,s):e.removeAttribute(s)}}class ss extends es{set(t,e,s){var i=this.attribute
let n=I(s,i.element,i.name,e)
super.set(t,n,s)}update(t,e){var s=this.attribute
let i=I(e,s.element,s.name,t)
super.update(i,e)}}class is extends ts{set(t,e,s){var i=this.attribute
let n=I(s,i.element,i.name,e)
super.set(t,n,s)}update(t,e){var s=this.attribute
let i=I(e,s.element,s.name,t)
super.update(i,e)}}class ns extends es{set(t,e){t.__setProperty("value",w(e))}update(t){let e=this.attribute.element,s=e.value,i=w(t)
s!==i&&(e.value=i)}}class rs extends es{set(t,e){null!==e&&void 0!==e&&!1!==e&&t.__setProperty("selected",!0)}update(t){let e=this.attribute.element
e.selected=!!t}}class as{constructor(t,e,s,i){this.slots=t,this.callerScope=e,this.evalScope=s,this.partialMap=i}static root(t,e=0){let s=new Array(e+1)
for(let i=0;i<=e;i++)s[i]=$t
return new as(s,null,null,null).init({self:t})}static sized(t=0){let e=new Array(t+1)
for(let s=0;s<=t;s++)e[s]=$t
return new as(e,null,null,null)}init({self:t}){return this.slots[0]=t,this}getSelf(){return this.get(0)}getSymbol(t){return this.get(t)}getBlock(t){return this.get(t)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(t,e){this.set(t,e)}bindSelf(t){this.set(0,t)}bindSymbol(t,e){this.set(t,e)}bindBlock(t,e){this.set(t,e)}bindEvalScope(t){this.evalScope=t}bindPartialMap(t){this.partialMap=t}bindCallerScope(t){this.callerScope=t}getCallerScope(){return this.callerScope}child(){return new as(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(t){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
return this.slots[t]}set(t,e){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
this.slots[t]=e}}class ls{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(t,e){this.createdComponents.push(t),this.createdManagers.push(e)}didUpdate(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)}scheduleInstallModifier(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)}scheduleUpdateModifier(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)}didDestroy(t){this.destructors.push(t)}commit(){let t=this.createdComponents,e=this.createdManagers
for(let h=0;h<t.length;h++){let s=t[h]
e[h].didCreate(s)}let s=this.updatedComponents,i=this.updatedManagers
for(let h=0;h<s.length;h++){let t=s[h]
i[h].didUpdate(t)}let n=this.destructors
for(let h=0;h<n.length;h++)n[h].destroy()
let r=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<r.length;h++){let t=r[h],e=a[h]
t.install(e)}let l=this.scheduledUpdateModifierManagers,o=this.scheduledUpdateModifiers
for(let h=0;h<l.length;h++){let t=l[h],e=o[h]
t.update(e)}}}class os{constructor({appendOperations:t,updateOperations:e}){this._transaction=null,this.appendOperations=t,this.updateOperations=e}toConditionalReference(t){return new Xt(t)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(t){return r(t)+""}begin(){this._transaction=new ls}get transaction(){return this._transaction}didCreate(t,e){this.transaction.didCreate(t,e)}didUpdate(t,e){this.transaction.didUpdate(t,e)}scheduleInstallModifier(t,e){this.transaction.scheduleInstallModifier(t,e)}scheduleUpdateModifier(t,e){this.transaction.scheduleUpdateModifier(t,e)}didDestroy(t){this.transaction.didDestroy(t)}commit(){let t=this.transaction
this._transaction=null,t.commit()}attributeFor(t,e,s,i=null){return j(t,e)}}class hs{constructor(t){this.trusting=t}retry(t,e){let s=this.bounds,i=s.parentElement(),n=T(s),r=bs.forInitialRender(t,{element:i,nextSibling:n})
return this.trusting?r.__appendTrustingDynamicContent(e):r.__appendCautiousDynamicContent(e)}}class us{constructor(t){this.inner=t,this.bounds=t.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(t,e){let s=this.inner=this.inner.update(t,e)
return this.bounds=s.bounds,this}}class cs extends hs{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
if(C(e)||E(e))return this.retry(t,e)
let i
if((i=_(e)?"":A(e)?e:String(e))!==s){this.bounds.firstNode().nodeValue=this.lastValue=i}return this}}class ps extends hs{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){return e===this.lastValue?this:this.retry(t,e)}}class ds extends hs{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:E(e)&&e.toHTML()===s.toHTML()?(this.lastValue=e,this):this.retry(t,e)}}class ms extends hs{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
return function(t){return _(t)?"":A(t)?t:E(t)?t.toHTML():C(t)?t:String(t)}(e)===s?this:this.retry(t,e)}}class fs{constructor(t){this.node=t}firstNode(){return this.node}}class gs{constructor(t){this.node=t}lastNode(){return this.node}}class bs{constructor(t,e,s){this.constructing=null,this.operations=null,this.cursorStack=new tt,this.blockStack=new tt,this.pushElement(e,s),this.env=t,this.dom=t.getAppendOperations(),this.updateOperations=t.getDOM()}static forInitialRender(t,e){let s=new this(t,e.element,e.nextSibling)
return s.pushSimpleBlock(),s}static resume(t,e,s){let i=new this(t,e.parentElement(),s)
return i.pushSimpleBlock(),i.pushBlockTracker(e),i}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(t){return this.constructing}block(){return this.blockStack.current}popElement(){this.cursorStack.pop(),this.cursorStack.current}pushSimpleBlock(){return this.pushBlockTracker(new ys(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new class extends ys{reset(t){let e=this.destroyables
if(e&&e.length)for(let i=0;i<e.length;i++)t.didDestroy(e[i])
let s=T(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}(this.element))}pushBlockList(t){return this.pushBlockTracker(new class{constructor(t,e){this.parent=t,this.boundList=e,this.parent=t,this.boundList=e}destroy(){this.boundList.forEachNode(t=>t.destroy())}parentElement(){return this.parent}firstNode(){let t=this.boundList.head()
return t&&t.firstNode()}lastNode(){let t=this.boundList.tail()
return t&&t.lastNode()}openElement(t){}closeElement(){}didAppendNode(t){}didAppendBounds(t){}newDestroyable(t){}finalize(t){}}(this.element,t))}pushBlockTracker(t,e=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(t),e||s.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t}popBlock(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()}__openBlock(){}__closeBlock(){}openElement(t){let e=this.__openElement(t)
return this.constructing=e,e}__openElement(t){return this.dom.createElement(t,this.element)}flushElement(){let t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)}__flushElement(t,e){this.dom.insertBefore(t,e,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(t,e,s=null){this.__pushRemoteElement(t,e,s)}__pushRemoteElement(t,e,s){this.pushElement(t,s)
let i=new class extends ys{destroy(){super.destroy(),T(this)}}(t)
this.pushBlockTracker(i,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(t,e){this.cursorStack.push(new Re(t,e))}didAddDestroyable(t){this.block().newDestroyable(t)}didAppendBounds(t){return this.block().didAppendBounds(t),t}didAppendNode(t){return this.block().didAppendNode(t),t}didOpenElement(t){return this.block().openElement(t),t}willCloseElement(){this.block().closeElement()}appendText(t){return this.didAppendNode(this.__appendText(t))}__appendText(t){let e=this.dom,s=this.element,i=this.nextSibling,n=e.createTextNode(t)
return e.insertBefore(s,n,i),n}__appendNode(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t}__appendFragment(t){let e=t.firstChild
if(e){let s=function(t,e,s){return new Me(t,e,s)}(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),s}return N(this.element,this.__appendComment(""))}__appendHTML(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)}appendTrustingDynamicContent(t){let e=new us(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e}__appendTrustingDynamicContent(t){if(A(t))return this.trustedContent(t)
if(_(t))return this.trustedContent("")
if(E(t))return this.trustedContent(t.toHTML())
if(x(t)){let e=this.__appendFragment(t)
return new ps(e,t,!0)}if(C(t)){let e=this.__appendNode(t)
return new ps(N(this.element,e),e,!0)}return this.trustedContent(String(t))}appendCautiousDynamicContent(t){let e=new us(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e}__appendCautiousDynamicContent(t){if(A(t))return this.untrustedContent(t)
if(_(t))return this.untrustedContent("")
if(x(t)){let e=this.__appendFragment(t)
return new ps(e,t,!1)}if(C(t)){let e=this.__appendNode(t)
return new ps(N(this.element,e),e,!1)}if(E(t)){let e=t.toHTML(),s=this.__appendHTML(e)
return new ds(s,t,!1)}return this.untrustedContent(String(t))}trustedContent(t){let e=this.__appendHTML(t)
return new ms(e,t,!0)}untrustedContent(t){let e=this.__appendText(t),s=N(this.element,e)
return new cs(s,t,!1)}appendComment(t){return this.didAppendNode(this.__appendComment(t))}__appendComment(t){let e=this.dom,s=this.element,i=this.nextSibling,n=e.createComment(t)
return e.insertBefore(s,n,i),n}__setAttribute(t,e,s){this.dom.setAttribute(this.constructing,t,e,s)}__setProperty(t,e){this.constructing[t]=e}setStaticAttribute(t,e,s){this.__setAttribute(t,e,s)}setDynamicAttribute(t,e,s,i){let n=this.constructing,r=new(this.env.attributeFor(n,t,s,i))({element:n,name:t,namespace:i||null})
return r.set(this,e,this.env),r}}class ys{constructor(t){this.parent=t,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let t=this.destroyables
if(t&&t.length)for(let e=0;e<t.length;e++)t[e].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(t){this.didAppendNode(t),this.nesting++}closeElement(){this.nesting--}didAppendNode(t){0===this.nesting&&(this.first||(this.first=new fs(t)),this.last=new gs(t))}didAppendBounds(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)}newDestroyable(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)}finalize(t){this.first||t.appendComment("")}}class vs{constructor(t,e,{alwaysRevalidate:s=!1}){this.frameStack=new tt,this.env=t,this.constants=e.constants,this.dom=t.getDOM(),this.alwaysRevalidate=s}execute(t,e){let s=this.frameStack
for(this.try(t,e);!s.isEmpty();){let t=this.frame.nextStatement()
null!==t?t.evaluate(this):this.frameStack.pop()}}get frame(){return this.frameStack.current}goto(t){this.frame.goto(t)}try(t,e){this.frameStack.push(new class{constructor(t,e,s){this.vm=t,this.ops=e,this.exceptionHandler=s,this.vm=t,this.ops=e,this.current=e.head()}goto(t){this.current=t}nextStatement(){let t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}(this,t,e))}throw(){this.frame.handleException(),this.frameStack.pop()}}class ks extends Vt{constructor(t,e,s,i){super(),this.start=t,this.state=e,this.type="block",this.next=null,this.prev=null,this.children=i,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(t){t.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.state.env.didDestroy(this.bounds)}}class Ss extends ks{constructor(t,e,s,i){super(t,e,s,i),this.type="try",this.tag=this._tag=bt.create(ut)}didInitializeChildren(){this._tag.inner.update(c(this.children))}evaluate(t){t.try(this.children,this)}handleException(){let t=this.state,e=this.bounds,s=this.children,i=this.start,n=this.prev,r=this.next
s.clear()
let a=bs.resume(t.env,e,e.reset(t.env)),l=xs.resume(t,a),o=new st
l.execute(i,e=>{e.stack=Cs.restore(t.stack),e.updatingOpcodeStack.push(o),e.updateWith(this),e.updatingOpcodeStack.push(s)}),this.prev=n,this.next=r}}class ws{constructor(t,e){this.opcode=t,this.marker=e,this.didInsert=!1,this.didDelete=!1,this.map=t.map,this.updating=t.children}insert(t,e,s,i){let n=this.map,r=this.opcode,a=this.updating,l=null,o=null
l=i?(o=n[i]).bounds.firstNode():this.marker
let h=r.vmForInsertion(l),u=null,c=r.start
h.execute(c,i=>{n[t]=u=i.iterate(s,e),i.updatingOpcodeStack.push(new st),i.updateWith(u),i.updatingOpcodeStack.push(u.children)}),a.insertBefore(u,o),this.didInsert=!0}retain(t,e,s){}move(t,e,s,i){let n=this.map,r=this.updating,a=n[t],l=n[i]||null
i?O(a,l.firstNode()):O(a,this.marker),r.remove(a),r.insertBefore(a,l)}delete(t){let e=this.map,s=e[t]
s.didDestroy(),T(s),this.updating.remove(s),delete e[t],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class _s extends ks{constructor(t,e,s,i,n){super(t,e,s,i),this.type="list-block",this.map=a(),this.lastIterated=rt,this.artifacts=n
let r=this._tag=bt.create(ut)
this.tag=p([n.tag,r])}didInitializeChildren(t=!0){this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(c(this.children))}evaluate(t){let e=this.artifacts,s=this.lastIterated
if(!e.tag.validate(s)){let s=this.bounds,i=t.dom,n=i.createComment("")
i.insertAfter(s.parentElement(),n,s.lastNode())
let r=new ws(this,n)
new Ct({target:r,artifacts:e}).sync(),this.parentElement().removeChild(n)}super.evaluate(t)}vmForInsertion(t){let e=this.bounds,s=this.state,i=bs.forInitialRender(s.env,{element:e.parentElement(),nextSibling:t})
return xs.resume(s,i)}}class Es{constructor(t,e,s,i){this.env=t,this.program=e,this.updating=s,this.bounds=i}rerender({alwaysRevalidate:t=!1}={alwaysRevalidate:!1}){let e=this.env,s=this.program,i=this.updating
new vs(e,s,{alwaysRevalidate:t}).execute(i,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),T(this.bounds)}}class Cs{constructor(t,e,s){this.stack=t,this.fp=e,this.sp=s}static empty(){return new this([],0,-1)}static restore(t){return new this(t.slice(),0,t.length-1)}push(t){this.stack[++this.sp]=t}dup(t=this.sp){this.push(this.stack[t])}pop(t=1){let e=this.stack[this.sp]
return this.sp-=t,e}peek(t=0){return this.stack[this.sp-t]}get(t,e=this.fp){return this.stack[e+t]}set(t,e,s=this.fp){this.stack[s+e]=t}slice(t,e){return this.stack.slice(t,e)}capture(t){let e=this.sp+1,s=e-t
return this.stack.slice(s,e)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class xs{constructor(t,e,s,i,n){this.program=t,this.env=e,this.elementStack=n,this.dynamicScopeStack=new tt,this.scopeStack=new tt,this.updatingOpcodeStack=new tt,this.cacheGroups=new tt,this.listBlockStack=new tt,this.stack=Cs.empty(),this._pc=-1,this.ra=-1,this.currentOpSize=0,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=e,this.heap=t.heap,this.constants=t.constants,this.elementStack=n,this.scopeStack.push(s),this.dynamicScopeStack.push(i)}get pc(){return this._pc}set pc(t){this._pc=t}get fp(){return this.stack.fp}set fp(t){this.stack.fp=t}get sp(){return this.stack.sp}set sp(t){this.stack.sp=t}fetch(t){this.stack.push(this[zt[t]])}load(t){this[zt[t]]=this.stack.pop()}fetchValue(t){return this[zt[t]]}loadValue(t,e){this[zt[t]]=e}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.get(0),this.fp=this.stack.get(1)}goto(t){let e=this.pc+t-this.currentOpSize
this.pc=e}call(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)}returnTo(t){let e=this.pc+t-this.currentOpSize
this.ra=e}return(){this.pc=this.ra}static initial(t,e,s,i,n,r,a){let l=t.heap.scopesizeof(a),o=as.root(s,l),h=new xs(t,e,o,n,r)
return h.pc=h.heap.getaddr(a),h.updatingOpcodeStack.push(new st),h}static resume({program:t,env:e,scope:s,dynamicScope:i},n){return new xs(t,e,s,i,n)}capture(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let t=new Oe("END"),e=this.updating(),s=this.cacheGroups.pop(),i=s?e.nextNode(s):e.head(),n=e.tail(),r=c(new it(i,n)),a=new Ae(r,t)
e.insertBefore(a,i),e.append(new Ne(a)),e.append(t)}enter(t){let e=new st,s=this.capture(t),i=this.elements().pushUpdatableBlock(),n=new Ss(this.heap.gethandle(this.pc),s,i,e)
this.didEnter(n)}iterate(t,e){let s=this.stack
s.push(e),s.push(t)
let i=this.capture(2),n=this.elements().pushUpdatableBlock()
return new Ss(this.heap.gethandle(this.pc),i,n,new st)}enterItem(t,e){this.listBlock().map[t]=e,this.didEnter(e)}enterList(t){let e=new st,s=this.capture(0),i=this.elements().pushBlockList(e),n=this.stack.peek().artifacts,r=this.pc+t-this.currentOpSize,a=this.heap.gethandle(r),l=new _s(a,s,i,e,n)
this.listBlockStack.push(l),this.didEnter(l)}didEnter(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop()
this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(t){this.updating().append(t)}listBlock(){return this.listBlockStack.current}updating(){return this.updatingOpcodeStack.current}elements(){return this.elementStack}scope(){return this.scopeStack.current}dynamicScope(){return this.dynamicScopeStack.current}pushChildScope(){this.scopeStack.push(this.scope().child())}pushDynamicScope(){let t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t}pushRootScope(t,e){let s=as.sized(t)
return e&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}pushScope(t){this.scopeStack.push(t)}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(t){this.elements().didAddDestroyable(t)}getSelf(){return this.scope().getSelf()}referenceForSymbol(t){return this.scope().getSymbol(t)}execute(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
let s
for(;!(s=this.next()).done;);return s.value}next(){let t,e=this.env,s=this.program,i=this.updatingOpcodeStack,n=this.elementStack,r=this.nextStatement()
return null!==r?(Pt.evaluate(this,r,r.type),t={done:!1,value:null}):(this.stack.reset(),t={done:!0,value:new Es(e,s,i.pop(),n.popBlock())}),t}nextStatement(){let t=this.pc,e=this.program
if(-1===t)return null
let s=this.program.opcode(t).size,i=this.currentOpSize=s
return this.pc+=i,e.opcode(t)}bindDynamicScope(t){let e=this.dynamicScope()
for(let s=t.length-1;s>=0;s--){let i=this.constants.getString(t[s])
e.set(i,this.stack.pop())}}}class As{constructor(t){this.vm=t}next(){return this.vm.next()}}let Ns=0
class Os{constructor(t,e){this.options=t,this.parsedLayout=e,this.layout=null,this.partial=null
let s=e.block
this.symbols=s.symbols,this.hasEval=s.hasEval,this.statements=s.statements,this.referrer=e.referrer,this.id=e.id||`client-${Ns++}`}renderLayout(t){let e=t.env,s=t.self,i=t.dynamicScope
var n=t.args
let r=void 0===n?we:n,a=t.builder,l=this.asLayout().compile(),o=xs.initial(this.options.program,e,s,r,i,a,l)
return new As(o)}asLayout(){return this.layout?this.layout:this.layout=H(this.parsedLayout,this.options,!1)}asPartial(){return this.partial?this.partial:this.partial=H(this.parsedLayout,this.options,!0)}}class Ts{get(t){return Ds.create(this,t)}}class Ls extends Ts{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let t=this.tag,e=this._lastRevision,s=this._lastValue
return e&&t.validate(e)||(s=this._lastValue=this.compute(),this._lastRevision=t.value()),s}}class Bs extends St{constructor(){super(...arguments),this.children=a()}get(t){let e=this.children[t]
return e||(e=this.children[t]=new Rs(this.inner,t)),e}}class Ds extends Ls{static create(t,e){return o(t)?new Rs(t.value(),e):new Ms(t,e)}get(t){return new Ms(this,t)}}class Rs extends Ds{constructor(t,e){super(),this._parentValue=t,this._propertyKey=e,this.tag=f(t,e)}compute(){return this._parentValue[this._propertyKey]}}class Ms extends Ds{constructor(t,e){super()
let s=t.tag,i=bt.create(ut)
this._parentReference=t,this._parentObjectTag=i,this._propertyKey=e,this.tag=p([s,i])}compute(){let t=this._parentReference,e=this._parentObjectTag,s=this._propertyKey,i=t.value()
return e.inner.update(f(i,s)),"string"==typeof i&&"length"===s?i.length:"object"==typeof i&&i?i[s]:void 0}}class Fs extends Ts{constructor(t){super(),this.tag=dt.create(),this._value=t}value(){return this._value}update(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)}}class Is{constructor(t,e,s){let i=t.ComponentClass,n=t.name
this.args=e
let r={debugName:n,args:this.namedArgsSnapshot()}
b(r,s),this.component=i.create(r)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class Ps{static create(t){return new Ps(t)}constructor(t){this.env=t.env}prepareArgs(t,e){return null}getCapabilities(t){return t.capabilities}getLayout({name:t,layout:e},s){return s.compileTemplate(t,e)}create(t,e,s,i,n,r){let a=g(this.env)
return new Is(e,s.capture(),a)}getSelf(t){return new Bs(t.component)}didCreateElement(t,e){}didRenderLayout(t,e){t.component.bounds=new It(e)}didCreate(t){t&&t.component.didInsertElement()}getTag({tag:t}){return t}update(t,e){t.component.args=t.namedArgsSnapshot()}didUpdateLayout(){}didUpdate({component:t}){t.didUpdate()}getDestructor(t){return t.component}}class js{constructor(t,e){this.cache=U,this.inner=null,this.chains=null,this.lastParentValue=U,this._guid=0,this.tag=ct,this.parent=t,this.property=e}value(){let t=this.lastParentValue,e=this.property,s=this.inner,i=this._parentValue()
if(null===i||void 0===i)return this.cache=void 0
if(t===i)s=this.inner
else{let t="object"==typeof i?Ws.for(i).referenceTypeFor(e):Xs
s=this.inner=new t(i,e,this)}return this.cache=s.value()}get(t){let e=this._getChains()
return t in e?e[t]:e[t]=new js(this,t)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=a()}_parentValue(){let t=this.parent.value()
return this.lastParentValue=t,t}}class Vs{constructor(t){this.chains=a(),this.tag=ct,this.object=t}value(){return this.object}update(t){this.object=t}get(t){let e=this.chains
return t in e?e[t]:e[t]=new js(this,t)}chainFor(t){let e=this.chains
return t in e?e[t]:null}path(t){return this.referenceFromParts(t.split("."))}referenceFromParts(t){return t.reduce((t,e)=>t.get(e),this)}label(){return"[reference Root]"}}const zs={destroy(){}}
class Hs{constructor(t,e){this.tag=ct,this.parent=t}chain(){return zs}notify(){}value(){return this.parent[this.property]}get(t){return new Hs(this.parent[this.property],t)}}class Us{constructor(t){this.tag=ct,this.inner=t}update(t){this.inner=t}chain(){return zs}notify(){}value(){return this.inner}referenceFromParts(t){throw new Error("Not implemented")}chainFor(t){throw new Error("Not implemented")}get(t){return new Hs(this.inner,t)}}class $s{constructor(t){this.object=t}root(){return new Us(this.object)}}const Gs="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Ys=Object.hasOwnProperty
class Ws{constructor(t,{RootReferenceFactory:e,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=t,this.RootReferenceFactory=e||Vs,this.DefaultPathReferenceFactory=s||Xs}static for(t){if(null===t||void 0===t)return new Ws(t,{})
if(Ys.call(t,"_meta")&&t._meta)return t._meta
if(!Object.isExtensible(t))return new $s(t)
let e=Ws
if(t.constructor&&t.constructor[Gs]){e=t.constructor[Gs].InstanceMetaConstructor}else t[Gs]&&(e=t[Gs].InstanceMetaConstructor)
return t._meta=new e(t,{})}static exists(t){return"object"==typeof t&&t._meta}static metadataForProperty(t){return null}addReference(t,e){let s=this.references=this.references||a();(s[t]=s[t]||new Q).add(e)}addReferenceTypeFor(t,e){this.referenceTypes=this.referenceTypes||a(),this.referenceTypes[t]=e}referenceTypeFor(t){return this.referenceTypes?this.referenceTypes[t]||Xs:Xs}removeReference(t,e){if(!this.references)return
this.references[t].delete(e)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||a(),this.referenceTypes}referencesFor(t){return this.references?this.references[t]:null}getSlots(){return this.slots=this.slots||a()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class Xs{constructor(t,e,s){this.tag=ct,this.object=t,this.property=e}value(){return this.object[this.property]}label(){return"[reference Property]"}}class Ks{constructor(t,e){this._registry=t,this._resolver=e}register(t,e,s){let i=this._toAbsoluteSpecifier(t)
this._registry.register(i,e,s)}registration(t){let e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)}unregister(t){let e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)}registerOption(t,e,s){let i=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(i,e,s)}registeredOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(s,e)}registeredOptions(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)}unregisterOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(s,e)}registerInjection(t,e,s){let i=this._toAbsoluteOrTypeSpecifier(t),n=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(i,e,n)}registeredInjections(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)}_toAbsoluteSpecifier(t,e){return this._resolver.identify(t,e)}_toAbsoluteOrTypeSpecifier(t){return function(t){return-1===t.indexOf(":")}(t)?t:this._toAbsoluteSpecifier(t)}}class qs{constructor(t=null){this.bucket=t?s({},t):{}}get(t){return this.bucket[t]}set(t,e){return this.bucket[t]=e}child(){return new qs(this.bucket)}}class Js{constructor(t,e){this.position=0,this.array=t,this.keyFor=e}isEmpty(){return 0===this.array.length}next(){let t=this.position,e=this.array,s=this.keyFor
if(t>=e.length)return null
let i=e[t],n=s(i,t),r=t
return this.position++,{key:n,value:i,memo:r}}}class Zs{constructor(t,e,s){this.position=0,this.keys=t,this.values=e,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let t=this.position,e=this.keys,s=this.values,i=this.keyFor
if(t>=e.length)return null
let n=s[t],r=e[t],a=i(n,r)
return this.position++,{key:a,value:n,memo:r}}}const Qs=new class{isEmpty(){return!0}next(){throw new Error("Cannot call next() on an empty iterator")}}
class ti{constructor(t,e){this.tag=t.tag,this.ref=t,this.keyFor=e}iterate(){let t=this.ref,e=this.keyFor,s=t.value()
if(Array.isArray(s))return s.length>0?new Js(s,e):Qs
if(void 0===s||null===s)return Qs
if(void 0!==s.forEach){let t=[]
return s.forEach(function(e){t.push(e)}),t.length>0?new Js(t,e):Qs}if("object"==typeof s){let t=Object.keys(s)
return t.length>0?new Zs(t,t.map(t=>s[t]),e):Qs}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(t){return new Fs(t.value)}updateValueReference(t,e){t.update(e.value)}memoReferenceFor(t){return new Fs(t.memo)}updateMemoReference(t,e){t.update(e.memo)}}const ei={},si=0,ii=Object.freeze([])
class ni{constructor(){this.strings=[],this.arrays=[ii],this.tables=[],this.handles=[],this.serializables=[],this.resolved=[],this.floats=[],this.negatives=[]}float(t){let e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1}negative(t){return this.negatives.push(t)-1}string(t){let e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1}stringArray(t){let e=new Array(t.length)
for(let s=0;s<t.length;s++)e[s]=this.string(t[s])
return this.array(e)}array(t){if(0===t.length)return si
let e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1}table(t){let e=this.tables.indexOf(t)
return e>-1?e:this.tables.push(t)-1}handle(t){return this.resolved.push(ei),this.handles.push(t)}serializable(t){let e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1}toPool(){return{strings:this.strings,arrays:this.arrays,tables:this.tables,handles:this.handles,serializables:this.serializables,floats:this.floats,negatives:this.negatives}}}class ri extends ni{constructor(t,e){super(),this.resolver=t,e&&(this.strings=e.strings,this.arrays=e.arrays,this.tables=e.tables,this.handles=e.handles,this.serializables=e.serializables,this.floats=e.floats,this.negatives=e.negatives,this.resolved=this.handles.map(()=>ei))}getFloat(t){return this.floats[t]}getNegative(t){return this.negatives[t]}getString(t){return this.strings[t]}getStringArray(t){let e=this.getArray(t),s=new Array(e.length)
for(let i=0;i<e.length;i++){let t=e[i]
s[i]=this.getString(t)}return s}getArray(t){return this.arrays[t]}getSymbolTable(t){return this.tables[t]}resolveHandle(t){let e=t-1,s=this.resolved[e]
if(s===ei){let t=this.handles[e]
s=this.resolved[e]=this.resolver.resolve(t)}return s}getSerializable(t){return this.serializables[t]}}class ai extends ri{constructor(){super(...arguments),this.others=[]}getOther(t){return this.others[t-1]}other(t){return this.others.push(t)}}class li{constructor(t){this.heap=t,this.offset=0}get size(){return 1+((this.heap.getbyaddr(this.offset)&de)>>he)}get type(){return this.heap.getbyaddr(this.offset)&pe}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var oi;(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(oi||(oi={}))
const hi=2,ui=1,ci=65535,pi=1073676288,di=3221225472
class mi{constructor(t){if(this.offset=0,this.handle=0,t){let e=t.buffer,s=t.table,i=t.handle
this.heap=new Uint16Array(e),this.table=s,this.offset=this.heap.length,this.handle=i}else this.heap=new Uint16Array(1048576),this.table=[]}push(t){this.heap[this.offset++]=t}getbyaddr(t){return this.heap[t]}setbyaddr(t,e){this.heap[t]=e}malloc(){this.table.push(this.offset,0)
let t=this.handle
return this.handle+=hi,t}finishMalloc(t,e){let s=this.table[t],i=$(this.offset-s,e,oi.Allocated)
this.table[t+ui]=i}size(){return this.offset}getaddr(t){return this.table[t]}gethandle(t){this.table.push(t,$(0,0,oi.Pointer))
let e=this.handle
return this.handle+=hi,e}sizeof(t){return-1}scopesizeof(t){return(this.table[t+ui]&pi)>>16}free(t){let e=this.table[t+ui]
this.table[t+ui]=G(e,oi.Freed)}compact(){let t=0,e=this.table,s=this.table.length,i=this.heap
for(let n=0;n<s;n+=hi){let s=e[n],r=e[n+ui],a=r&ci,l=r&di>>30
if(l!==oi.Purged)if(l===oi.Freed)e[n+ui]=G(r,oi.Purged),t+=a
else if(l===oi.Allocated){for(let e=s;e<=n+a;e++)i[e-t]=i[e]
e[n]=s-t}else l===oi.Pointer&&(e[n]=s-t)}this.offset=this.offset-t}capture(){let t=function(t,e,s){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,s).buffer
let i=new Uint16Array(s)
for(;e<s;e++)i[e]=t[e]
return i.buffer}return null}(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}}}class fi{constructor(t=new ni,e=new mi){this.constants=t,this.heap=e,this._opcode=new li(this.heap)}opcode(t){return this._opcode.offset=t,this._opcode}}class gi extends fi{}class bi{constructor(){this.byName=a(),this.byHandle=a()}hasName(t){return t in this.byName}getHandle(t){return this.byName[t]}hasHandle(t){return t in this.byHandle}getByHandle(t){return this.byHandle[t]}register(t,e,s){this.byHandle[t]=s,this.byName[e]=t}}class yi{constructor(t,e){this.tag=ct,this.parent=t,this.property=e}value(){return this.parent.value()[this.property]}get(t){return new yi(this,t)}}class vi{constructor(t,e){this.tag=ct,this.helper=t,this.args=e.capture()}value(){let t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())}get(t){return new yi(this,t)}}class ki{constructor(t){this.owner=t,this.handleLookup=[],this.cache={component:new bi,template:new bi,compiledTemplate:new bi,helper:new bi,manager:new bi,modifier:new bi}}setCompileOptions(t){this.templateOptions=t}lookup(t,e,s){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null}register(t,e,s){let i=this.cache[t],n=this.handleLookup.length
return this.handleLookup.push(i),this.cache[t].register(n,e,s),n}lookupModifier(t,e){let s=this.lookup("modifier",t)
if(null===s)throw new Error(`Modifier for ${t} not found.`)
return s}compileTemplate(t,e){if(!this.cache.compiledTemplate.hasName(t)){let s=this.resolve(e),i=s.block,n=s.meta,r=s.id,a=JSON.parse(i),l=new Os(this.templateOptions,{id:r,block:a,referrer:n}).asLayout(),o={handle:l.compile(),symbolTable:l.symbolTable}
return this.register("compiledTemplate",t,o),o}let s=this.lookup("compiledTemplate",t)
return this.resolve(s)}registerHelper(t,e){return this.register("helper",t,(t,s)=>new vi(e,s))}registerInternalHelper(t,e){this.register("helper",t,e)}registerComponent(t,e,s,i){let n=this.registerTemplate(e,i),r=this.managerFor(n.meta.managerId),a=new Dt(t,r,s,n.handle)
return this.register("component",t,a)}lookupComponentHandle(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)}managerFor(t="main"){let e
if(this.cache.manager.hasName(t)){let e=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(e)}{let s=this.owner.rootName
if(!(e=this.owner.lookup(`component-manager:/${s}/component-managers/${t}`)))throw new Error(`No component manager found for ID ${t}.`)
return this.register("manager",t,e),e}}registerTemplate(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}}lookupComponent(t,e){let s
if(this.cache.component.hasName(t))s=this.lookup("component",t,e)
else{let i=function(t,e){if(null===t||void 0===t)throw new Error(e)
return t}(this.identifyComponent(t,e),`Could not find the component '${t}'`),n=this.owner.lookup("template",i),r=this.owner.identify("component",i),a=null
a=void 0!==r?this.owner.factoryFor(r):{create:t=>Lt.create(t)},s=this.registerComponent(t,i,a,n)}return this.resolve(s)}lookupHelper(t,e){if(!this.cache.helper.hasName(t)){let s=this.owner,i=`helper:${t}`,n=e.specifier,r=s.identify(i,n)
if(void 0===r)return null
let a=this.owner.lookup(r,e.specifier)
return this.registerHelper(t,a)}return this.lookup("helper",t,e)}lookupPartial(t,e){throw new Error("Partials are not available in Glimmer applications.")}resolve(t){return this.handleLookup[t].getByHandle(t)}identifyComponent(t,e){let s=this.owner,i=`template:${t}`,n=e.specifier,r=s.identify(i,n)
if(void 0===r&&s.identify(`component:${t}`,n))throw new Error(`The component '${t}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return r}}var Si={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
class wi{constructor(t){this.resolver=t}getComponentDefinition(t){let s=this.resolver.resolve(t)
return e(!!s,`Couldn't find a template for ${t}`),s}getCapabilities(t){let e=this.getComponentDefinition(t),s=e.manager,i=e.state
return s.getCapabilities(i)}getLayout(t){let e=this.getComponentDefinition(t),s=e.manager.getLayout(e,this.resolver)
return{compile:()=>s.handle,symbolTable:s.symbolTable}}lookupHelper(t,e){return this.resolver.lookupHelper(t,e)}lookupModifier(t,e){return this.resolver.lookupModifier(t,e)}lookupComponentSpec(t,e){return this.resolver.lookupComponentHandle(t,e)}lookupPartial(t,e){return this.resolver.lookupPartial(t,e)}}class _i extends os{static create(t={}){return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Ye(t.document),new _i(t)}constructor(t){super({appendOperations:t.appendOperations,updateOperations:new Ge(t.document||document)}),b(this,g(t))
let e=this.resolver=new ki(g(this)),s=this.program=new gi(new ai(e)),i=new ne,n=new wi(e)
this.compileOptions={program:s,macros:i,lookup:n,Builder:be},this.resolver.setCompileOptions(this.compileOptions),e.registerTemplate("main",Si),e.registerInternalHelper("action",Y),e.registerHelper("if",t=>t[0]?t[1]:t[2]),this.uselessAnchor=t.document.createElement("a")}protocolForURL(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol}iterableFor(t,e){let s
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":s=((t,e)=>String(e))
break
case"@primitive":s=(t=>String(t))
break
default:s=(t=>t[e])}return new ti(t,s)}}class Ei{constructor(t){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=t.rootName,this.resolver=t.resolver,this.document=t.document||"undefined"!=typeof window&&window.document}renderComponent(t,e,s=null){this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:s}),this.scheduleRerender()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this._render()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}initialize(){this.initRegistry(),this.initContainer()}registerInitializer(t){this._initializers.push(t)}initRegistry(){let t=this._registry=new Mt,e=new Ks(this._registry,this.resolver)
t.register(`environment:/${this.rootName}/main/main`,_i),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register(`document:/${this.rootName}/main/main`,this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document",`document:/${this.rootName}/main/main`),t.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let i=0;i<s.length;i++)s[i].initialize(e)
this._initialized=!0}initContainer(){this._container=new Rt(this._registry,this.resolver),this._container.defaultInjections=(t=>{let e={}
return b(e,this),e})}get mainLayout(){return function({id:t,meta:e,block:i}){let n,r=t||`client-${Ns++}`
return{id:r,meta:e,create:(t,a)=>{let l=a?s({},a,e):e
return n||(n=JSON.parse(i)),new Os(t,{id:r,block:n,referrer:l})}}}(Si).create(this.env.compileOptions)}get templateIterator(){let t=this.env,e=this.mainLayout,s=new Vs({roots:this._roots}),i=new qs,n={element:this.document.body,nextSibling:null}
return e.renderLayout({env:t,self:s,dynamicScope:i,builder:function(t,e){return bs.forInitialRender(t,e)}(t,n)})}_rerender(){let t=this.env,e=this._result
if(!e)throw new Error("Cannot re-render before initial render has completed")
try{t.begin(),e.rerender(),t.commit(),this._didRender()}catch(t){this._didError(t)}}_render(){let t=this.env,e=this.templateIterator
try{t.begin()
let s
do{s=e.next()}while(!s.done)
t.commit(),this._result=s.value,this._didRender()}catch(t){throw this._didError(t),t}}_didRender(){this._rendered=!0
let t=this._notifiers
this._notifiers=[],t.forEach(t=>t[0]())}_didError(t){let e=this._notifiers
this._notifiers=[],e.forEach(e=>e[1](t))}identify(t,e){return this.resolver.identify(t,e)}factoryFor(t,e){return this._container.factoryFor(this.identify(t,e))}lookup(t,e){return this._container.lookup(this.identify(t,e))}}class Ci{constructor(t,e){this.config=t,this.registry=e}identify(t,e){if(function(t){var e=t.split(":")
let s=e[0],i=e[1]
return!!(s&&i&&0===i.indexOf("/")&&i.split("/").length>3)}(t))return t
let s,i=K(t)
if(e){let t=K(e)
if(W(t)){q("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===i.rootName&&void 0===i.collection&&void 0===i.namespace),i.rootName=t.rootName,i.collection=t.collection
let e=this._definitiveCollection(i.type)
if(!i.name)return i.namespace=t.namespace,i.name=t.name,this._serializeAndVerify(i)
if(i.namespace=t.namespace?t.namespace+"/"+t.name:t.name,function(t){let e=t.namespace,s=t.collection,i=e.lastIndexOf("/-")
if(i>-1){i+=2
let t=e.indexOf("/",i)
s=e.slice(i,t>-1?t:void 0)}return s}(i)===e&&(s=this._serializeAndVerify(i)))return s
if(e&&(i.namespace+="/-"+e,s=this._serializeAndVerify(i)))return s
i.rootName=i.collection=i.namespace=void 0}else q('Referrer must either be "absolute" or include a `type` to determine the associated type',t.type),i.collection=this._definitiveCollection(t.type),q(`'${t.type}' does not have a definitive collection`,i.collection)}if(i.collection||(i.collection=this._definitiveCollection(i.type),q(`'${i.type}' does not have a definitive collection`,i.collection)),!i.rootName){if(i.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(i))return s
let t
i.namespace?(t=this.config.addons&&this.config.addons[i.namespace],i.rootName=i.namespace,i.namespace=void 0):(t=this.config.addons&&this.config.addons[i.name],i.rootName=i.name,i.name="main")}return(s=this._serializeAndVerify(i))?s:void 0}retrieve(t){return this.registry.get(t)}resolve(t,e){let s=this.identify(t,e)
if(s)return this.retrieve(s)}_definitiveCollection(t){let e=this.config.types[t]
return q(`'${t}' is not a recognized type`,e),e.definitiveCollection}_serializeAndVerify(t){let e=X(t)
if(this.registry.has(e))return e}}class xi{constructor(t={}){this._entries=t}has(t){return t in this._entries}get(t){return this._entries[t]}}var Ai={"component:/my-site/components/MySite":class extends Lt{},"template:/my-site/components/MySite":{id:"Uqx4Bln4",block:'{"symbols":[],"statements":[[6,"section"],[10,"class","container"],[8],[0,"\\n  "],[6,"div"],[10,"class","content"],[8],[0,"\\n    "],[6,"img"],[10,"src","https://avatars3.githubusercontent.com/u/6940767?v=3&s=460"],[10,"alt","Avatar"],[8],[9],[0,"\\n    "],[6,"h1"],[10,"id","Gowtham-Raj-M"],[8],[6,"a"],[10,"href","#Gowtham-Raj-M"],[10,"class","headerlink"],[10,"title","Gowtham Raj M"],[8],[9],[0,"Gowtham Raj M"],[9],[6,"p"],[8],[0,"Front End Developer at Zoho Corporation"],[9],[0,"\\n    "],[6,"p"],[8],[6,"a"],[10,"href","https://twitter.com/gowthamrm_"],[10,"target","_blank"],[10,"rel","external"],[8],[0,"https://twitter.com/gowthamrm_"],[9],[9],[0,"\\n    "],[6,"p"],[8],[6,"a"],[10,"href","https://github.com/gowthamrm"],[10,"target","_blank"],[10,"rel","external"],[8],[0,"https://github.com/gowthamrm"],[9],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[6,"footer"],[10,"id","footer"],[8],[0,"\\n  "],[6,"div"],[10,"id","footer-info"],[10,"class","inner"],[8],[0,"\\n    © 2017 "],[6,"a"],[10,"href","https://github.com/gowthamrm"],[10,"target","_blank"],[8],[0,"@gowthamrm"],[9],[6,"br"],[8],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{specifier:"template:/my-site/components/MySite"}}},Ni={app:{name:"my-site",rootName:"my-site"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
const Oi=new class extends Ei{constructor(){let t=new xi(Ai)
super({resolver:new Ci(Ni,t),rootName:Ni.app.rootName})}},Ti=document.getElementById("app");(function(t){Ot=t})(()=>{Oi.scheduleRerender()}),Oi.registerInitializer({initialize(t){t.register(`component-manager:/${Oi.rootName}/component-managers/main`,Ps)}}),Oi.renderComponent("MySite",Ti,null),Oi.boot()})
