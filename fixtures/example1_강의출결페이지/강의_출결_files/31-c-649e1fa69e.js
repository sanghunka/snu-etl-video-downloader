(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[31,656],{"0crz":function(e,t,i){"use strict"
var n=i("ouhR")
var l=i.n(n)
var s=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
i("jQeR")
i("0sPK")
var o=s["default"].scoped("lib.text_helper")
var a=i("5Ky4")
var u,c,d
u="LINK-PLACEHOLDER"
c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(a["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+l.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,i,n,l,s,r,o,h
l=[]
s=[]
e=e.replace(c,(function(e,t){var i
s.push(e===u?u:(i=e,"http://"===i.slice(0,7)||"https://"===i.slice(0,8)||(i="http://"+i),l.push(i),"<a href='"+Object(a["a"])(i)+"'>"+Object(a["a"])(e)+"</a>"))
return u}))
e=Object(a["a"])(e)
e=e.replace(new RegExp(u,"g"),(function(e,t){return s.shift()}))
e=e.replace(/\n/g,"<br />\n")
r=[]
o=[]
h=e.split("\n")
for(t=0,i=h.length;t<i;t++){n=h[t]
if(n.match(/^(&gt;|>)/))o.push(n)
else{o.length&&r.push(d.quoteClump(o))
o=[]
r.push(n)}}o.length&&r.push(d.quoteClump(o))
return r.join("\n")},delimit:function(e){var t,i,n,l,s
if(isNaN(e))return String(e)
s=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
i=Math.floor(t)
l=t===i?"":String(t).replace(/^\d+\./,".")
while(i>=1e3){n=String(i).replace(/\d+(\d\d\d)$/,",$1")
i=Math.floor(i/1e3)
l=n+l}return s+String(i)+l},truncateText:function(e,t){var i,n,l,s,r,a
null==t&&(t={})
n=null!=(s=t.max)?s:30
i=o.t("ellipsis","...")
a=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,a).trim()
if(!e||e.length<=n)return e
r=0
while(true){l=e.indexOf(a,r+1)
if(l<0||l>n-i.length)break
r=l}r||(r=n-i.length)
return e.substring(0,r)+i},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},B1vq:function(e,t,i){"use strict"
var n=i("ouhR")
var l=i.n(n)
i("s/PJ")
l.a.fn.scrollToVisible=function(e){const t={}
const i=l()(e)
if(0===i.length)return
let n=i.offset(),s=i.outerWidth(),r=i.outerHeight(),o=n.top,a=o+r,u=n.left,c=u+s,d="html,body"==this.selector?l.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),_=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){let e=l()("body").offset()
this.each((function(){try{e=l()(this).offset()
return false}catch(e){}}))
o-=e.top
a-=e.top
u-=e.left
c-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){_=l()(window).height()
l()("#wizard_box:visible").length>0&&(_-=l()("#wizard_box:visible").height())
p=l()(window).width()
o-=d
u-=h
a-=d
c-=h}o<0||_<r&&a>_?t.scrollTop=o+d:a>_&&(t.scrollTop=a+d-_+20)
u<0?t.scrollLeft=u+h:c>p&&(t.scrollLeft=c+h-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},cuKi:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i("GLiE")
var l=i.n(n)
function s(e){return l()(e).reduce((e,t,i)=>{let n=i.split("][")
let s=n.length-1
if(/\[/.test(n[0])&&/\]$/.test(n[s])){n[s]=n[s].replace(/\]$/,"")
n=n.shift().split("[").concat(n)
s=n.length-1}else s=0
if(s){let l=0
let r=e
while(l<=s){i=""===n[l]?r.length:n[l]
r=r[i]=l<s?r[i]||(n[l+1]&&isNaN(n[l+1])?{}:[]):t
l++}}else l.a.isArray(e[i])?e[i].push(t):null!=e[i]?e[i]=[e[i],t]:e[i]=t
return e},{})}},hX7l:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var n=i("ODXe")
var l=i("cuKi")
const s={true:true,false:false,null:null}
function r(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return r(e,...arguments)}const i={}
e.replace(/\+/g," ").split("&").forEach(e=>{let l=e.split("="),r=Object(n["a"])(l,2),o=r[0],a=r[1]
o=decodeURIComponent(o)
a=decodeURIComponent(a)
t&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==s[a]?s[a]:a)
i[o]=a})
return Object(l["a"])(i)}},p6Wi:function(e,t,i){"use strict"
var n=i("pQTu")
var l=i("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
i("jQeR")
i("0sPK")
var s=n["default"].scoped("instructure_misc_plugins")
var r=i("ouhR")
var o=i.n(r)
var a=i("5Ky4")
var u=i("JD5e")
i("jYyc")
i("YGE8")
i("B1vq")
i("s/PJ")
o.a.fn.setOptions=function(e,t){let i=e?"<option value=''>"+Object(a["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(a["a"])(e)
i+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(i))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const i=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
e.remove()
return i-n}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let i=null
let n=true
e.noMessage=e.noMessage||e.no_message
const l=function(){if(!n){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,i):{}
n.authenticity_token=Object(u["a"])()
o.a.ajaxJSON(e.url,"DELETE",n,i=>{e.success.call(t,i)},(i,n,l,s)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,i,n,l,s):o.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){n=false
const t="object"===typeof e.dialog?e.dialog:{}
const r=e.url.includes("assignments")?"btn-danger":"btn-primary"
i=o()(e.message).dialog(o.a.extend({},{modal:true,close:l,buttons:[{text:s.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:s.t("#buttons.delete","Delete"),class:r,click(){n=true
o()(this).dialog("close")}}]},t))
return}n=confirm(e.message)}l()}
o.a.fn.confirmDelete.defaults={get message(){return s.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<i.length;t++){const e=i[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const l=this
let s=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==l[0]&&(s=true)}s||o.a._checkFragments.fragmentList.push({doc:l,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{n&&n.length>0?l.triggerHandler("document_fragment_change",n):l&&l[0]&&l[0].location&&l[0].location.hash.length>0&&l.triggerHandler("document_fragment_change",l[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const i=e[t]
const n=i.doc
if(n[0].location.hash!=i.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
i.fragment=n[0].location.hash
o.a._checkFragments.fragmentList[t]=i}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let i=this.offset()
e&&e.offset&&(i=e.offset)
const n=this.width()
const l=this.height()
const s=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:n+6,height:l+6,top:i.top-3,left:i.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),i=o()(this),n=o()("#wrapper"),l=o()("#main"),s=o()("#not_right_side"),r=o()(window),a=o()(this).add(t.alsoResize)
function u(){a.height(0)
const e=r.height()-(n.offset().top+n.outerHeight())+(l.height()-s.height()),u=Math.max(400,e)
a.height(u)
o.a.isFunction(t.onResize)&&t.onResize.call(i,u)}u()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),i="",n=o()(this),l=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){setTimeout(()=>{if(i===(i=n.val()))return
l.text(i)
const s=l.width(),r=s+e.comfortZone>=t?s+e.comfortZone:t,o=n.width(),a=r<o&&r>=t||r>t&&r<e.maxWidth
a&&n.width(r)})}
l.insertAfter(n)
o()(this).bind("keyup keydown blur update change",s)}))
return this}
o.a}}])

//# sourceMappingURL=31-c-649e1fa69e.js.map