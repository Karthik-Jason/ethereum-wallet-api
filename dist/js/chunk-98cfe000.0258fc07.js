(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98cfe000"],{2097:function(e,t,s){},"55e2":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"verify-content-container"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v("Signature:")]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),s("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),s("div",{staticClass:"the-form signature"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"signature"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),s("div",[""!==e.message&&!0===e.showMessage?s("p",{staticClass:"success-message"},[e._v("\n        "+e._s(JSON.parse(e.message).address)+"\n        "+e._s(e.$t("interface.verifiedMessage"))+":\n        "),JSON.parse(e.message).msg.length>20?s("br"):e._e(),s("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?s("p",[e._v(e._s(e.errors.first("signature")))]):e._e()])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n        "+e._s(e.$t("common.verifyMessage"))+"\n      ")])])])])},n=[],r=s("f29f"),i=r["a"],c=(s("5b3d"),s("2877")),o=Object(c["a"])(i,a,n,!1,null,"70b69d08",null),u=o.exports;s.d(t,"a",(function(){return u}))},"5b3d":function(e,t,s){"use strict";var a=s("2097"),n=s.n(a);n.a},a537:function(e,t,s){},bb65:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),s("verify-message-input"),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-container"},[s("div",{staticClass:"submit-button-container"})])}],r=s("539d"),i=s("55c1"),c=s("55e2"),o={name:"VerifyMessage",components:{"interface-bottom-text":r["a"],"interface-container-title":i["a"],"verify-message-input":c["a"]}},u=o,l=(s("f60a"),s("2877")),f=Object(l["a"])(u,a,n,!1,null,"0af333a0",null),g=f.exports;s.d(t,"default",(function(){return g}))},f29f:function(e,t,s){"use strict";(function(e){s("8e6e"),s("ac6a"),s("456d"),s("6b54"),s("a481");var a=s("bd86"),n=s("ce96"),r=s("2f62"),i=s("b671");function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(s,!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1}},computed:o({},Object(r["b"])(["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var t=JSON.parse(this.message),s=Object(i["hashPersonalMessage"])(Object(i["toBuffer"])(t.msg)),a=e.from(t.sig.replace("0x",""),"hex");if(65!==a.length)return void n["e"].responseHandler("Something went wrong!",n["e"].ERROR);a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"1"===t.version&&(s=this.web3.utils.sha3(t.msg));var r=Object(i["ecrecover"])(s,a[64],a.slice(0,32),a.slice(32,64));t.address.replace("0x","")!==Object(i["pubToAddress"])(r).toString("hex")?(this.showMessage=!1,n["e"].responseHandler("Signer address is different from the derived address!",n["e"].ERROR)):this.showMessage=!0}catch(c){n["e"].responseHandler(c,n["e"].ERROR)}}}}}).call(this,s("1c35").Buffer)},f60a:function(e,t,s){"use strict";var a=s("a537"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-98cfe000.0258fc07.js.map