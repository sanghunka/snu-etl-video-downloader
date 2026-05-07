(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[411,656,659,715],{"0crz":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var s=i["default"].scoped("lib.text_helper")
var l=n("5Ky4")
var u,c,d
u="LINK-PLACEHOLDER"
c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(s.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,r,a,i,o,s,_
a=[]
i=[]
e=e.replace(c,(function(e,t){var n
i.push(e===u?u:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(l["a"])(n)+"'>"+Object(l["a"])(e)+"</a>"))
return u}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(u,"g"),(function(e,t){return i.shift()}))
e=e.replace(/\n/g,"<br />\n")
o=[]
s=[]
_=e.split("\n")
for(t=0,n=_.length;t<n;t++){r=_[t]
if(r.match(/^(&gt;|>)/))s.push(r)
else{s.length&&o.push(d.quoteClump(s))
s=[]
o.push(r)}}s.length&&o.push(d.quoteClump(s))
return o.join("\n")},delimit:function(e){var t,n,r,a,i
if(isNaN(e))return String(e)
i=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){r=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=r+a}return i+String(n)+a},truncateText:function(e,t){var n,r,a,i,o,l
null==t&&(t={})
r=null!=(i=t.max)?i:30
n=s.t("ellipsis","...")
l=s.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=r)return e
o=0
while(true){a=e.indexOf(l,o+1)
if(a<0||a>r-n.length)break
o=a}o||(o=r-n.length)
return e.substring(0,o)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"5Shj":function(e,t,n){"use strict"
var r=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var c=n("17x9")
var d=n.n(c)
var _=n("UCAh")
var f=n("J2CL")
var p=n("nAyT")
var g=n("oXx0")
var h=n("bZJi")
var m=n("AdN2")
var b=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
n.d(t,"a",(function(){return j}))
var v,w,x,y,k,O
var S={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var j=(v=Object(p["a"])("7.0.0",null,"Use Tooltip from ui-tooltip instead."),w=Object(g["a"])(),x=Object(f["j"])(b,S),v(y=w(y=x(y=(O=k=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.tip,a=e.variant,i=e.on,o=e.placement,s=e.mountNode,l=e.positionTarget,c=e.constrain,d=Object(r["a"])(e,["children","tip","variant","on","placement","mountNode","positionTarget","constrain"])
return u.a.createElement(h["a"],Object.assign({},d,{renderTip:n,on:i,color:"inverse"===a?"primary":"primary-inverse",placement:o,mountNode:s,positionTarget:l,constrain:c}),t)}}])
n.displayName="Tooltip"
return n}(l["Component"]),k.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]).isRequired,tip:d.a.node.isRequired,as:d.a.elementType,on:d.a.oneOfType([d.a.oneOf(["click","hover","focus"]),d.a.arrayOf(d.a.oneOf(["click","hover","focus"]))]),variant:d.a.oneOf(["default","inverse"]),placement:_["a"].placement,mountNode:_["a"].mountNode,positionTarget:d.a.oneOfType([m["a"],d.a.func]),constrain:_["a"].constrain},k.defaultProps={on:void 0,variant:"inverse",placement:"top",mountNode:null,positionTarget:void 0,constrain:"window"},O))||y)||y)||y)},B1vq:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let r=n.offset(),i=n.outerWidth(),o=n.outerHeight(),s=r.top,l=s+o,u=r.left,c=u+i,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),_=this.scrollLeft(),f=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
u-=e.left
c-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=a()(window).height()
a()("#wizard_box:visible").length>0&&(f-=a()("#wizard_box:visible").height())
p=a()(window).width()
s-=d
u-=_
l-=d
c-=_}s<0||f<o&&l>f?t.scrollTop=s+d:l>f&&(t.scrollTop=l+d-f+20)
u<0?t.scrollLeft=u+_:c>p&&(t.scrollLeft=c+_-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},HMVb:function(e,t,n){"use strict"
var r=n("ODXe")
var a=n("i/8D")
var i=n("DUTp")
var o=n("IPIv")
var s={}
function l(e,t){if(!a["a"])return 16
var n=e||Object(i["a"])(e).documentElement
if(!t&&s[n])return s[n]
var r=parseInt(Object(o["a"])(n).getPropertyValue("font-size"))
s[n]=r
return r}var u=n("CyAq")
n.d(t,"a",(function(){return c}))
function c(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var a=Object(u["a"])(e),i=Object(r["a"])(a,2),o=i[0],s=i[1]
return"rem"===s?o*l():"em"===s?o*l(n):o}},bZJi:function(e,t,n){"use strict"
var r=n("Ff2n")
var a=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
var u=n("q1tI")
var c=n.n(u)
var d=n("17x9")
var _=n.n(d)
var f=n("nAyT")
var p=n("KgFQ")
var g=n("jtGx")
var h=n("sQ3t")
var m=n("E+IV")
var b=n("UCAh")
var v=n("BTe1")
var w=n("J2CL")
var x=n("oXx0")
var y=n("jsCG")
var k=n("AdN2")
var O=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
n.d(t,"a",(function(){return N}))
var S,j,T,C,q,z
var E={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var N=(S=Object(f["a"])("8.0.0",{tip:"renderTip",variant:"color"}),j=Object(x["a"])(),T=Object(w["j"])(O,E),S(C=j(C=T(C=(z=q=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(o["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,r=e.as
var i=this.state.hasFocus
var o={"aria-describedby":this._id}
if(r){var s=Object(p["a"])(n,this.props)
var l=Object(g["a"])(this.props,n.propTypes)
return c.a.createElement(s,Object.assign({},l,o),t)}return"function"===typeof t?t({focused:i,getTriggerProps:function(e){return Object(a["a"])({},o,{},e)}}):Object(h["a"])(this.props.children,o)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,a=t.isShowingContent,i=t.defaultIsShowingContent,o=t.on,s=t.placement,l=t.mountNode,u=t.constrain,d=t.offsetX,_=t.offsetY,f=t.positionTarget,p=t.onShowContent,h=t.onHideContent,b=t.tip,v=(t.variant,Object(r["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var w=this.props.variant
w=w?"default"===w?"primary-inverse":"primary":this.props.color
return c.a.createElement(y["a"],Object.assign({},Object(g["b"])(v),{isShowingContent:a,defaultIsShowingContent:i,on:o,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:s,color:"primary"===w?"primary-inverse":"primary",mountNode:l,constrain:u,shadow:"none",offsetX:d,offsetY:_,positionTarget:f,renderTrigger:function(){return e.renderTrigger()},onShowContent:p,onHideContent:h,onFocus:this.handleFocus,onBlur:this.handleBlur}),c.a.createElement("span",{id:this._id,className:E.root,role:"tooltip"},n?Object(m["a"])(n):b))}}])
n.displayName="Tooltip"
return n}(u["Component"]),q.propTypes={children:_.a.oneOfType([_.a.node,_.a.func]).isRequired,renderTip:_.a.oneOfType([_.a.node,_.a.func]),isShowingContent:_.a.bool,defaultIsShowingContent:_.a.bool,as:_.a.elementType,on:_.a.oneOfType([_.a.oneOf(["click","hover","focus"]),_.a.arrayOf(_.a.oneOf(["click","hover","focus"]))]),color:_.a.oneOf(["primary","primary-inverse"]),placement:b["a"].placement,mountNode:b["a"].mountNode,constrain:b["a"].constrain,offsetX:_.a.oneOfType([_.a.string,_.a.number]),offsetY:_.a.oneOfType([_.a.string,_.a.number]),positionTarget:_.a.oneOfType([k["a"],_.a.func]),onShowContent:_.a.func,onHideContent:_.a.func,tip:_.a.node,variant:_.a.oneOf(["default","inverse"])},q.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},z))||C)||C)||C)},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,a,i,o
var s=0
var l=[]
var u=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var c=!!n.leading
var d="maxWait"in n
var _=!("trailing"in n)||!!n.trailing
var f=d?Math.max(+n.maxWait||0,t):0
function p(t){var n=r
var o=a
r=a=void 0
s=t
if(true!==u){i=e.apply(o,n)
return i}}function g(e){s=e
l.push(setTimeout(b,t))
return c?p(e):i}function h(e){var n=e-o
var r=e-s
var a=t-n
return d?Math.min(a,f-r):a}function m(e){var n=e-o
var r=e-s
return"undefined"===typeof o||n>=t||n<0||d&&r>=f}function b(){var e=Date.now()
if(m(e))return v(e)
l.push(setTimeout(b,h(e)))}function v(e){y()
if(_&&r)return p(e)
r=a=void 0
return i}function w(){u=true
y()
s=0
r=o=a=void 0}function x(){return 0===l.length?i:v(Date.now())}function y(){l.forEach((function(e){return clearTimeout(e)}))
l=[]}function k(){var e=Date.now()
var n=m(e)
for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c]
r=u
a=this
o=e
if(n){if(0===l.length)return g(o)
if(d){l.push(setTimeout(b,t))
return p(o)}}0===l.length&&l.push(setTimeout(b,t))
return i}k.cancel=w
k.flush=x
return k}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("QF4Q")
var a=n("i/8D")
var i=n("EgqM")
var o=n("DUTp")
function s(e){var t={top:0,left:0,height:0,width:0}
if(!a["a"])return t
var n=Object(r["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=e===document?document:Object(o["a"])(n)
var u=l&&l.documentElement
if(!u||!Object(i["a"])(u,n))return t
var c=n.getBoundingClientRect()
var d
for(d in c)t[d]=c[d]
if(l!==document){var _=l.defaultView.frameElement
if(_){var f=s(_)
t.top+=f.top
t.bottom+=f.top
t.left+=f.left
t.right+=f.left}}return{top:t.top+(window.pageYOffset||u.scrollTop)-(u.clientTop||0),left:t.left+(window.pageXOffset||u.scrollLeft)-(u.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:l.body.clientWidth-t.width-t.left,bottom:l.body.clientHeight-t.height-t.top}}},"i+HM":function(e,t,n){"use strict"
var r=n("An8g")
var a=n("VTBJ")
var i=n("q1tI")
var o=n.n(i)
n("17x9")
var s=n("5Shj")
var l=n("EcmN")
function u(e){return o.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function c(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n=Object(a["a"])({},n,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(r["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,u(n)):u(n)}t["a"]=c},"m+tm":function(e,t,n){"use strict"
n.r(t)
var r=n("ouhR")
var a=n.n(r)
n("/j35")
var i=n("An8g")
var o=n("x1Tw")
var s=n("pQTu")
var l=n("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","select_group_to_grade_6df28d80":"採点するグループを選択する"},"ko":{"must_select_a_student_group_first_15c6a3cb":"먼저 학생 그룹을 선택해야 합니다.","select_group_to_grade_6df28d80":"채점 할 그룹 선택"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","select_group_to_grade_6df28d80":"Wybierz grupę do oceny"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para nota"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","select_group_to_grade_6df28d80":"Выберите группу для оценки"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","select_group_to_grade_6df28d80":"选择要评分的组"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","select_group_to_grade_6df28d80":"選擇要評分的群組"}}'))
n("jQeR")
n("0sPK")
var u=s["default"].scoped("module_sequence_footer")
var c=n("q1tI")
var d=n.n(c)
var _=n("i8i4")
var f=n.n(_)
var p=n("i+HM")
var g=n("mKSb")
class h extends c["Component"]{constructor(e){super(e)
this.state={selectedStudentGroupId:e.selectedStudentGroupId||"0"}
this.onStudentGroupSelected=this.onStudentGroupSelected.bind(this)}onStudentGroupSelected(e){if("0"!==e){o["a"].put("/api/v1/courses/".concat(this.props.courseId,"/gradebook_settings"),{gradebook_settings:{filter_rows_by:{student_group_id:e}}})
this.setState({selectedStudentGroupId:e})}}render(){const e=this.props.filterSpeedGraderByStudentGroup&&"0"===this.state.selectedStudentGroupId
return d.a.createElement(d.a.Fragment,null,this.props.filterSpeedGraderByStudentGroup&&Object(i["a"])(g["a"],{categories:this.props.groupCategories,label:u.t("Select Group to Grade"),onChange:this.onStudentGroupSelected,value:this.state.selectedStudentGroupId}),Object(i["a"])(p["a"],{className:"btn button-sidebar-wide",disabled:e,disabledTip:u.t("Must select a student group first"),href:this.props.speedGraderUrl}))}}function m(){if(ENV.speed_grader_url){const e=document.getElementById("speed_grader_link_container")
f.a.render(Object(i["a"])(h,{courseId:ENV.COURSE_ID,filterSpeedGraderByStudentGroup:ENV.SETTINGS.filter_speed_grader_by_student_group,groupCategories:ENV.group_categories||[],selectedStudentGroupId:ENV.selected_student_group_id,speedGraderUrl:ENV.speed_grader_url}),e)}}a()(m)},mKSb:function(e,t,n){"use strict"
var r=n("An8g")
n("17x9")
var a=n("sTNg")
var i=n("EcmN")
n("q1tI")
function o(e){return Object(r["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(r["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>o(e)))}function l(e){return Object(r["a"])(a["a"],{id:"student-group-filter",label:e.label},void 0,Object(r["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(r["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",i["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=l},p6Wi:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var i=r["default"].scoped("instructure_misc_plugins")
var o=n("ouhR")
var s=n.n(o)
var l=n("5Ky4")
var u=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
s.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const r=t.innerWidth()
e.remove()
return n-r}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let r=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!r){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const r=e.prepareData?e.prepareData.call(t,n):{}
r.authenticity_token=Object(u["a"])()
s.a.ajaxJSON(e.url,"DELETE",r,n=>{e.success.call(t,n)},(n,r,a,i)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,n,r,a,i):s.a.ajaxJSON.unhandledXHRs.push(r)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){r=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(e.message).dialog(s.a.extend({},{modal:true,close:a,buttons:[{text:i.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:i.t("#buttons.delete","Delete"),class:o,click(){r=true
s()(this).dialog("close")}}]},t))
return}r=confirm(e.message)}a()}
s.a.fn.confirmDelete.defaults={get message(){return i.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let r=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(r="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let i=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(i=true)}i||s.a._checkFragments.fragmentList.push({doc:a,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{r&&r.length>0?a.triggerHandler("document_fragment_change",r):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const r=n.doc
if(r[0].location.hash!=n.fragment){r.triggerHandler("document_fragment_change",r[0].location.hash)
n.fragment=r[0].location.hash
s.a._checkFragments.fragmentList[t]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const r=this.width()
const a=this.height()
const i=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:r+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:i+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),n=s()(this),r=s()("#wrapper"),a=s()("#main"),i=s()("#not_right_side"),o=s()(window),l=s()(this).add(t.alsoResize)
function u(){l.height(0)
const e=o.height()-(r.offset().top+r.outerHeight())+(a.height()-i.height()),u=Math.max(400,e)
l.height(u)
s.a.isFunction(t.onResize)&&t.onResize.call(n,u)}u()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),n="",r=s()(this),a=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:r.css("fontSize"),fontFamily:r.css("fontFamily"),fontWeight:r.css("fontWeight"),letterSpacing:r.css("letterSpacing"),whiteSpace:"nowrap"}),i=function(){setTimeout(()=>{if(n===(n=r.val()))return
a.text(n)
const i=a.width(),o=i+e.comfortZone>=t?i+e.comfortZone:t,s=r.width(),l=o<s&&o>=t||o>t&&o<e.maxWidth
l&&r.width(o)})}
a.insertAfter(r)
s()(this).bind("keyup keydown blur update change",i)}))
return this}
s.a},ppAs:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("GLiE")
var o=n.n(i)
var s=n("5Ky4")
var l=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"ko":{"user_content_aaf0fb5a":"사용자 콘텐츠"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var c=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){var t,n
if(!(null===(t=ENV)||void 0===t?void 0:null===(n=t.FEATURES)||void 0===n?void 0:n.new_math_equation_handling)){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=a()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=a()("<a\n        id='media_comment_".concat(Object(s["a"])(a()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(s["a"])(a()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(s["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(s["a"])(a()(e).attr("data-alt")),"'\n      />"))
t.html(a()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=a()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const r=a()("<form\n            action='".concat(Object(s["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(s["a"])(t),"'\n            id='form-").concat(Object(s["a"])(t),"'\n          />"))
r.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(r)
setTimeout(()=>r.submit(),0)
return a()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(s["a"])(t),"'\n            style='width: ").concat(Object(s["a"])(e.data("uc_width")),"; height: ").concat(Object(s["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(s["a"])(c.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=a()(t)
const r=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(r)})}return n.html()}}
t["a"]=d}}])

//# sourceMappingURL=module_sequence_footer-c-e7ce1b4ff2.js.map