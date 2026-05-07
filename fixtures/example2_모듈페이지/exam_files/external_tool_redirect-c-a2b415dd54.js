(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[359],{"27kk":function(t,e,r){"use strict"
r.r(e)
var n=r("ouhR")
var c=r.n(n)
class s{constructor(){this._contentReady=(t,e)=>e&&"file"===e.return_type?this.createMigration(e.url):this.redirectToSuccessUrl()
this._contentCancel=(t,e)=>{location.href=this.cancelUrl}
this.redirectToSuccessUrl=()=>{location.href=this.successUrl}
this.createMigration=t=>{const e={migration_type:"canvas_cartridge_importer",settings:{file_url:t}}
const r="/api/v1/courses/".concat(ENV.course_id,"/content_migrations")
return c.a.ajaxJSON(r,"POST",e,this.redirectToSuccessUrl,this.handleError)}}attachLtiEvents(){c()(window).on("externalContentReady",this._contentReady)
c()(window).on("externalContentCancel",this._contentCancel)}handleError(t){return c.a.flashError(t.message)}}s.prototype.successUrl=ENV.redirect_return_success_url
s.prototype.cancelUrl=ENV.redirect_return_cancel_url
c()(document).ready(()=>{window.external_tool_redirect={ready(){}}
const t=new s
t.attachLtiEvents()})}}])

//# sourceMappingURL=external_tool_redirect-c-a2b415dd54.js.map