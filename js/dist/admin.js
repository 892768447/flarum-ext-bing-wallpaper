module.exports=function(r){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)e.d(n,a,function(t){return r[t]}.bind(null,a));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=5)}([function(r,t){r.exports=flarum.core.compat.app},,,,function(r,t){r.exports=flarum.core.compat["components/SettingsModal"]},function(r,t,e){"use strict";e.r(t);var n=e(0),a=e.n(n);var o=e(4),i=function(r){var t,e;function n(){return r.apply(this,arguments)||this}e=r,(t=n).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var a=n.prototype;return a.className=function(){return"Modal--small"},a.title=function(){return app.translator.trans("flarum-ext-bing-wallpaper.admin.settings.title")},a.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-ext-bing-wallpaper.admin.settings.transparency_label")),m("input",{required:!0,className:"FormControl",bidi:this.setting("irony.bing.wallpaper.transparency")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-ext-bing-wallpaper.admin.settings.url_label")),m("input",{required:!0,className:"FormControl",value:"/api/irony/bing/wallpaper",bidi:this.setting("irony.bing.wallpaper.url","/api/irony/bing/wallpaper")}))]},n}(e.n(o).a);a.a.initializers.add("irony-bing-wallpaper",(function(r){r.extensionSettings["irony-bing-wallpaper"]=function(){return r.modal.show(new i)}}))}]);
//# sourceMappingURL=admin.js.map