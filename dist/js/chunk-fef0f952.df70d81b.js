(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fef0f952"],{"002a":function(e,t,n){},"038f":function(e,t,n){e.exports=n.p+"img/Address.d40b8287.svg"},1113:function(e,t,n){e.exports=n.p+"img/wallet.66b8433e.svg"},"1a60":function(e,t,n){"use strict";var r=n("fba8"),s=n.n(r);s.a},2969:function(e,t,n){},"4da0":function(e,t,n){e.exports=n.p+"img/qr-code-white.6d0e26cd.svg"},"6a70":function(e,t,n){"use strict";var r=n("f1f5"),s=n.n(r);s.a},"8cbf":function(e,t,n){"use strict";var r=n("2969"),s=n.n(r);s.a},"918f":function(e,t,n){"use strict";var r=n("dd36"),s=n.n(r);s.a},a64c:function(e,t,n){},b1d0:function(e,t,n){"use strict";var r=n("a64c"),s=n.n(r);s.a},cff50:function(e,t,n){"use strict";var r=n("db31"),s=n.n(r);s.a},db31:function(e,t,n){},dc13:function(e,t,n){"use strict";var r=n("002a"),s=n.n(r);s.a},dd36:function(e,t,n){},f1f5:function(e,t,n){},f955:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-layout"},[n("wallet-password-modal"),n("enter-pin-number-modal"),n("ledger-app-modal",{ref:"ledgerAppModal",attrs:{networks:e.Networks},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("mnemonic-modal",{ref:"mnemonicPhraseModal",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal}}),n("mnemonic-password-modal",{ref:"mnemonicPhrasePassword",attrs:{"hardware-wallet-open":e.toggleNetworkAddrModal,phrase:e.phrase}}),n("network-and-address-modal",{ref:"networkAddress",attrs:{"hardware-wallet":e.hwInstance}}),n("hardware-password-modal",{ref:"hardwareModal",attrs:{"wallet-constructor":e.walletConstructor,"hardware-brand":e.hardwareBrand},on:{hardwareWalletOpen:e.toggleNetworkAddrModal}}),n("print-modal",{ref:"printModal",attrs:{"priv-key":!e.wallet,address:e.account.address}}),n("address-qrcode-modal",{ref:"addressQrcodeModal",attrs:{address:e.account.address}}),n("div",{staticClass:"mobile-interface-address-block"},[n("mobile-interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress}})],1),n("div",{staticClass:"wrap"},[n("div",{staticClass:"sidemenu"},[n("div",{staticClass:"side-nav-background",class:e.isSidemenuOpen&&"side-nav-open",on:{click:function(t){e.toggleSideMenu}}}),n("div",{staticClass:"side-nav",class:e.isSidemenuOpen&&"side-nav-open"},[n("interface-side-menu")],1)]),n("div",{staticClass:"contents"},[n("div",{staticClass:"tx-contents"},[n("div",{staticClass:"content-container mobile-hide"},[Object.keys(e.wallet).length>1?n("interface-address",{attrs:{address:e.address,print:e.print,"switch-addr":e.switchAddress,"display-addr":e.wallet.displayAddress,qrcode:e.openAddressQrcode}}):e._e()],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-balance",{attrs:{balance:e.balance,"get-balance":e.getBalance}})],1),n("div",{staticClass:"content-container mobile-hide"},[n("interface-network",{attrs:{"block-number":e.blockNumber}})],1),n("router-view",{attrs:{"tokens-with-balance":e.tokensWithBalance,"get-balance":e.getBalance,tokens:e.tokens,"highest-gas":e.highestGas,nonce:e.nonce,value:e.value,data:e.data,to:e.to,gaslimit:e.gaslimit,gas:e.gas,tokensymbol:e.tokensymbol,"is-prefilled":e.prefilled,"clear-prefilled":e.clearPrefilled,"check-prefilled":e.checkPrefilled}}),n("div",{staticClass:"tokens"},[n("interface-tokens",{attrs:{"fetch-tokens":e.setTokens,"get-token-balance":e.getTokenBalance,tokens:e.tokens,"received-tokens":e.receivedTokens,"reset-token-selection":e.setTokensWithBalance}})],1)],1)])])],1)},s=[],a=(n("8e6e"),n("5df3"),n("55dd"),n("7f7f"),n("c5f6"),n("6b54"),n("96cf"),n("3b8d")),o=(n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),c=n("3297"),d=n.n(c),l=n("6035"),u=n("7416"),p=n("6d89"),f=n("ae88"),h=n("ee3c"),b=n("9dbe"),m=n("f73c"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"interface-address"},[r("div",{staticClass:"info-block address"},[r("div",{staticClass:"block-image"},[r("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16,width:"64px",height:"64px"}}),r("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}})],1),r("div",{staticClass:"block-content"},[r("div",{staticClass:"information-container"},[r("h2",[e._v(e._s(e.$t("common.address")))]),r("p",{staticClass:"address"},[e._v(e._s(e.address))])]),r("div",{staticClass:"icon-container"},[e.hasMultipleAddr?r("button",{staticClass:"change-button",attrs:{id:"popover-ref-switch"},on:{click:e.switchAddr}},[e._v("\n          Switch\n        ")]):e._e(),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-qrcode"},on:{click:e.qrcode}},[r("img",{attrs:{alt:"",src:n("4da0")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-print"},on:{click:e.print}},[r("img",{attrs:{alt:"",src:n("240d")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"popover-ref-copy"},on:{click:e.copy}},[r("img",{attrs:{alt:"",src:n("fd74")}})]),r("b-btn",{directives:[{name:"show",rawName:"v-show",value:e.displayAddr,expression:"displayAddr"}],staticClass:"custom-tooltip button-address",attrs:{id:"popover-ref-address"},on:{click:e.displayAddr}},[r("img",{attrs:{alt:"",src:n("038f")}})]),r("b-popover",{attrs:{content:"Switch Address",target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.print"),target:"popover-ref-print",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.copy"),target:"popover-ref-copy",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.switchAddress"),target:"popover-ref-switch",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:e.$t("popover.displayAddress"),target:"popover-ref-address",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:"Address in Qrcode",target:"popover-ref-qrcode",placement:"top",triggers:"hover",title:""}})],1)])])])},v=[],g=n("c8e5"),k=n("ce96"),y=n("59c3");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={components:{blockie:g["a"]},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}},displayAddr:{type:Function,default:void 0},qrcode:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:C({},Object(i["b"])(["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==y["c"]&&this.account.identifier!==y["g"]&&this.account.identifier!==y["e"]&&this.account.identifier!==y["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),k["e"].responseHandler("Copied!",k["e"].INFO)}}},P=j,N=(n("dc13"),n("2877")),A=Object(N["a"])(P,w,v,!1,null,"37348b69",null),$=A.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"info-block-container"},[r("interface-balance-modal",{ref:"balance",attrs:{balance:e.balance}}),r("div",{staticClass:"info-block balance"},[e._m(0),r("div",{staticClass:"block-content"},[r("div",{staticClass:"information-container"},[r("h2",[e._v(e._s(e.$t("common.balance")))]),r("div",{staticClass:"balance-text-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.balance,expression:"balance !== undefined"}],staticClass:"balance-text"},[r("p",[e._v("\n              "+e._s(e.balance)+"\n              "),r("span",[e._v("\n                "+e._s(e.network.type.currencyName)+"\n              ")])])]),r("i",{directives:[{name:"show",rawName:"v-show",value:void 0===e.balance,expression:"balance === undefined"}],staticClass:"fa fa-spin fa-spinner"})])]),r("div",{staticClass:"icon-container"},[r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"balanceCheck"},on:{click:e.balanceModalOpen}},[r("img",{attrs:{alt:"",src:n("617f")}})]),r("b-btn",{staticClass:"custom-tooltip",attrs:{id:"refreshBalance"},on:{click:e.fetchBalance}},[r("img",{directives:[{name:"show",rawName:"v-show",value:!e.fetchingBalance,expression:"!fetchingBalance"}],attrs:{alt:"",src:n("acfc")}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.fetchingBalance,expression:"fetchingBalance"}],staticClass:"fa fa-lg fa-spinner fa-spin"})]),r("b-popover",{attrs:{content:"Check Balance",target:"balanceCheck",placement:"top",triggers:"hover",title:""}}),r("b-popover",{attrs:{content:"Refresh Balance",target:"refreshBalance",placement:"top",triggers:"hover",title:""}})],1)])])],1)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block-image"},[r("div",{staticClass:"icon-border"},[r("img",{staticClass:"icon",attrs:{alt:"",src:n("1113")}})])])}],M=n("0598");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={components:{"interface-balance-modal":M["a"]},props:{balance:{type:String,default:"0"},getBalance:{type:Function,default:function(){}}},data:function(){return{fetchingBalance:!1}},computed:E({},Object(i["b"])(["network"])),watch:{balance:function(){this.fetchingBalance=!1}},methods:{balanceModalOpen:function(){this.$refs.balance.$refs.balance.show()},fetchBalance:function(){var e=this;this.fetchingBalance=!0,setTimeout((function(){e.getBalance(),e.fetchingBalance=!1}),1e3)}}},I=S,R=(n("8cbf"),Object(N["a"])(I,B,_,!1,null,"7beada5f",null)),T=R.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-block-container"},[n("interface-network-modal",{ref:"network"}),n("div",{staticClass:"info-block network"},[n("div",{staticClass:"block-image"},[n("div",{staticClass:"network-type"},[n("div",{staticClass:"icon-block"},[n("img",{staticClass:"icon",attrs:{src:e.network.type.icon,alt:""}})])])]),n("div",{staticClass:"block-content"},[n("div",{staticClass:"information-container"},[n("div",{staticClass:"title-and-helper"},[n("h2",[e._v(e._s(e.$t("interface.network")))])]),e.account.identifier!==e.identifier?n("p",[e._v("\n          "+e._s(e.network.service+"("+e.network.type.name+")")+"\n        ")]):n("p",[e._v(e._s("Web3 Provider("+e.network.type.name+")"))]),n("p",[e._v("\n          "+e._s(e.$t("interface.lastBlock"))+"# :\n          "),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.parsedNetwork,expression:"parsedNetwork !== ''"}]},[e._v(" "+e._s(e.parsedNetwork))]),n("i",{directives:[{name:"show",rawName:"v-show",value:""===e.parsedNetwork,expression:"parsedNetwork === ''"}],staticClass:"fa fa-spinner fa-spin"})])]),n("div",{staticClass:"icon-container"},[e.account.identifier!==e.identifier?n("button",{staticClass:"change-button",attrs:{id:"networkModal"},on:{click:e.networkModalOpen}},[e._v("\n          Change\n        ")]):e._e(),n("b-popover",{attrs:{content:"Open Networks",target:"networkModal",placement:"top",triggers:"hover",title:""}})],1)])])],1)},W=[],H=n("37ea");function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={components:{"interface-network-modal":H["a"]},props:{blockNumber:{type:Number,default:0}},data:function(){return{parsedNetwork:0,identifier:y["j"]}},computed:q({},Object(i["b"])(["network","account","web3"])),watch:{blockNumber:function(e){this.parsedNetwork=parseInt(e)}},mounted:function(){this.blockNumber&&void 0!==this.blockNumber&&(this.parsedNetwork=parseInt(this.blockNumber))},methods:{networkModalOpen:function(){this.account.identifier!==this.identifier&&this.$refs.network.$refs.network.show()}}},G=F,U=(n("918f"),Object(N["a"])(G,D,W,!1,null,"1b3c3f2e",null)),L=U.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"transactions-side-menu"},[r("div",{staticClass:"side-menu-header"},[r("img",{attrs:{alt:"",src:n("9d64")}}),r("div",{on:{click:e.toggleSideMenu}},[r("i",{staticClass:"fa fa-lg fa-times"})])]),r("div",{staticClass:"side-menu"},[r("ul",e._l(e.tabData,(function(t,n){return r("li",{key:t.name+n,class:t.onlineOnly&&!e.online?"disabled-item":""},[t.onlineOnly&&!e.online?r("div",{staticClass:"dash"}):e._e(),r("div",{class:[e.isTabActive(t.routes)?"active":"","menu-group-title"],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[r("img",{attrs:{src:e.isTabActive(t.routes)?t.icons.active:t.icons.inactive,alt:""}}),r("p",[e._v(e._s(e.$t(t.titleKey)))]),r("i",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"tab.children.length"}],class:["fa",e.isTabActive(t.routes)?"fa-angle-up":"fa-angle-down"],attrs:{"aria-hidden":"true"}})]),t.children.length?r("ul",{class:[t.name,e.isTabActive(t.routes)?"show-child":"","child-tab"]},e._l(t.children,(function(t,n){return r("li",{key:t.name+n,class:[e.isTabActive(t.routes)?"active":"",t.onlineOnly&&!e.online?"disabled-item":""],on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[e._v("\n            "+e._s(e.$t(t.titleKey))+"\n          ")])})),0):e._e()])})),0)])])},J=[],K=(n("6762"),n("2fdb"),n("2c51"));function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={data:function(){return{tabData:K["a"].tabs}},computed:X({},Object(i["b"])(["online"])),methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")},isTabActive:function(e){return e.includes(this.$route.path)},tabAction:function(e){e.hasOwnProperty("children")&&0!==e.children.length?this.$router.push({path:e.children[0].routes[0]}):(this.toggleSideMenu(),this.$router.push({path:e.routes[0]}))}}},Z=Y,ee=(n("6a70"),Object(N["a"])(Z,z,J,!1,null,"61fcd621",null)),te=ee.exports,ne=n("2480"),re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mobile-interface-address"},[r("address-qrcode-modal",{ref:"qrcode",attrs:{address:e.account.address}}),r("div",{staticClass:"wrap"},[r("div",{staticClass:"top-block"},[r("div",{staticClass:"blockie-container"},[r("blockie",{staticClass:"blockie-image",attrs:{address:e.address,size:8,scale:16}})],1),r("div",{staticClass:"address"},[e._v(e._s(e.address))]),r("input",{ref:"copyAddress",staticClass:"hidden-input",attrs:{autocomplete:"off"},domProps:{value:e.address}}),r("div",{staticClass:"address-end"},[e._v("\n        "+e._s(e.address.substring(e.address.length-4,e.address.length))+"\n      ")]),r("div",{staticClass:"buttons-container"},[r("button",{on:{click:e.openQrcode}},[r("img",{attrs:{alt:"",src:n("4da0")}}),e._m(0)]),r("button",{on:{click:e.print}},[r("img",{attrs:{alt:"",src:n("240d")}})]),r("button",{on:{click:e.copy}},[r("img",{attrs:{alt:"",src:n("fd74")}})])])]),e.hasMultipleAddr?r("div",{staticClass:"bottom-block"},[r("button",{on:{click:e.switchAddr}},[e._v(e._s(e.$t("common.changeAddress")))])]):e._e()])],1)},se=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"floating-barcode"},[n("div",{staticClass:"barcode-image"})])}],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"address-qrcode-modal"},[n("b-modal",{ref:"addressQrcode",staticClass:"bootstrap-modal nopadding",attrs:{"hide-footer":"",centered:"",static:"",lazy:"",title:"Address"}},[n("div",{staticClass:"modal-contents"},[n("qrcode",{attrs:{value:e.address,options:{size:160}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"addressInput",staticClass:"address",attrs:{readonly:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),n("button",{on:{click:e.copyToClipboard}},[e._v("Copy")])],1)])],1)},oe=[],ie={name:"AddressQrcodeModal",props:{address:{type:String,default:""}},data:function(){return{}},methods:{copyToClipboard:function(){this.$refs.addressInput.select(),document.execCommand("copy")}}},ce=ie,de=(n("1a60"),Object(N["a"])(ce,ae,oe,!1,null,"1245132a",null)),le=de.exports;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={components:{blockie:g["a"],"address-qrcode-modal":le},props:{address:{type:String,default:""},print:{type:Function,default:function(){}},switchAddr:{type:Function,default:function(){}}},data:function(){return{hasMultipleAddr:!1}},computed:pe({},Object(i["b"])(["account"])),mounted:function(){null!==this.account.address&&(this.account.identifier!==y["c"]&&this.account.identifier!==y["g"]&&this.account.identifier!==y["e"]&&this.account.identifier!==y["j"]?this.hasMultipleAddr=!0:this.hasMultipleAddr=!1)},methods:{copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),k["e"].responseHandler("Copied!",k["e"].INFO)},openQrcode:function(){this.$refs.qrcode.$refs.addressQrcode.show()}}},he=fe,be=(n("cff50"),Object(N["a"])(he,re,se,!1,null,"523d15a2",null)),me=be.exports,we=n("8f2d"),ve=n("dce7"),ge=n("b7d3"),ke=n("8761"),ye=n("901e"),Oe=n("8ded"),Ce=n.n(Oe),je=n("3578"),Pe=n.n(je),Ne=n("cb38"),Ae=n("1131"),$e=n.n(Ae),Be=n("e3b9");function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe={name:"Interface",components:{"interface-side-menu":te,"interface-address":$,"interface-balance":T,"interface-network":L,"interface-tokens":ne["a"],"wallet-password-modal":l["a"],"print-modal":we["a"],"network-and-address-modal":p["a"],"hardware-password-modal":f["a"],"mnemonic-modal":b["a"],"mnemonic-password-modal":h["a"],"enter-pin-number-modal":u["a"],"mobile-interface-address":me,"address-qrcode-modal":le,"ledger-app-modal":m["a"]},data:function(){return{balance:"0",blockNumber:0,tokens:[],receivedTokens:!1,tokensWithBalance:[],pollBlock:function(){},pollNetwork:function(){},pollddress:function(){},highestGas:"0",alert:{show:!1,msg:""},hws:{ledger:Be["c"],trezor:Be["g"],bitbox:Be["a"],secalot:Be["f"]},hwInstance:{},walletConstructor:function(){},hardwareBrand:"",phrase:"",nonce:"0",value:"0",data:"",to:"",gaslimit:"21000",gas:0,tokensymbol:"",prefilled:!1}},computed:Me({isSidemenuOpen:function(){return this.sidemenuOpen},address:function(){if(null!==this.wallet)return Object(ge["b"])(this.account.address)}},Object(i["b"])(["network","account","online","web3","Networks","sidemenuOpen","wallet","linkQuery"])),watch:{web3:function(){this.setupOnlineEnvironment()},address:function(e){e&&this.setupOnlineEnvironment()}},mounted:function(){this.setupOnlineEnvironment()},destroyed:function(){this.clearIntervals()},methods:{checkPrefilled:function(){var e=this,t=Object.keys(e.linkQuery).length;if(t>0){e.prefilled=!0;var n=e.linkQuery,r=n.value,s=n.data,a=n.to,o=n.gaslimit,i=n.gas,c=n.tokensymbol,d=n.network;if(e.value=r&&new ye["BigNumber"](r).gt(0)?new ye["BigNumber"](r).toFixed():"0",e.data=s&&$e.a.isHexStrict(s)?s:"",e.to=a&&Object(ge["a"])(a)?a:"",e.gaslimit=o&&new ye["BigNumber"](o).gt(0)?o:"21000",e.gas=i&&new ye["BigNumber"](i).gt(0)?new ye["BigNumber"](i):0,e.tokensymbol=c||"",d){var l=e.Networks[d.toUpperCase()];l&&e.$store.dispatch("switchNetwork",l[0]).then((function(){e.$store.dispatch("setWeb3Instance")}))}e.$store.dispatch("saveQueryVal",{})}},clearPrefilled:function(){this.value="0",this.data="",this.to="",this.gaslimit="21000",this.gas=0,this.tokensymbol="",this.prefilled=!1},openAddressQrcode:function(){this.$refs.addressQrcodeModal.$refs.addressQrcode.show()},mnemonicphrasePasswordModalOpen:function(e){this.phrase=e,this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.show()},toggleNetworkAddrModal:function(e){this.$refs.hardwareModal.$refs.password.hide(),this.$refs.mnemonicPhrasePassword.$refs.password.hide(),this.hwInstance=e,this.$refs.networkAddress.$refs.networkAndAddress.show()},togglePasswordModal:function(e,t){this.walletConstructor=e,this.hardwareBrand=t,this.$refs.hardwareModal.$refs.password.show()},ledgerAppModalOpen:function(){this.$refs.ledgerAppModal.$refs.ledgerApp.show()},switchAddress:function(){var e=this;switch(this.account.identifier){case y["d"]:this.ledgerAppModalOpen();break;case y["i"]:Object(Be["g"])().then((function(t){e.toggleNetworkAddrModal(t)})).catch(Be["g"].errorHandler);break;case y["a"]:this.togglePasswordModal(Be["a"],"BitBox");break;case y["h"]:this.togglePasswordModal(Be["f"],"Secalot");break;case y["f"]:this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.show();break;case y["b"]:Object(Be["b"])(!1,this.$eventHub).then((function(t){e.toggleNetworkAddrModal(t)})).catch(Be["b"].errorHandler);break;default:k["e"].responseHandler(new Error("Wallet type ".concat(this.account.identifier," can't switch addresses")),!1)}},print:function(){this.$refs.printModal.$refs.print.show()},toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")},fetchTokens:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.receivedTokens=!1,t=[],1!==this.network.type.chainID&&3!==this.network.type.chainID){e.next=16;break}return n=new Pe.a(this.web3.currentProvider),e.prev=4,e.next=7,n.getBalance(this.account.address);case 7:t=e.sent,t=t.map((function(e){return e.address=e.addr,delete e.addr,e})),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),t=this.network.type.tokens.map((function(e){return e.balance="Load",e}));case 14:e.next=17;break;case 16:t=this.network.type.tokens.map((function(e){return e.balance="Load",e}));case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}(),setNonce:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Ce.a.set(this.web3.utils.sha3(this.account.address),{nonce:"0x00",timestamp:0}),e.next=3,this.web3.eth.getTransactionCount(this.account.address).catch((function(e){k["e"].responseHandler(e,k["e"].ERROR)}));case 3:t=e.sent,this.nonce=new ye["BigNumber"](t).toString();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTokenBalance:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this.web3,r=[{name:"balanceOf",type:"function",constant:!0,inputs:[{name:"address",type:"address"}],outputs:[{name:"out",type:"uint256"}]}],s=new n.eth.Contract(r),a=s.methods.balanceOf(this.account.address).encodeABI(),e.next=7,n.eth.call({to:t.address,data:a}).then((function(e){var n;if(0===Number(e)||"0x"===e)n=0;else{var r=new ye["BigNumber"](10).pow(t.decimals);n=new ye["BigNumber"](e).div(r).toString()}return n})).catch((function(e){k["e"].responseHandler(e,!1)}));case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e["catch"](0),k["e"].responseHandler(e.t0,k["e"].ERROR);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),setCustomTokenStore:function(){var e=Ce.a.get("customTokens");Object.keys(ke).forEach((function(t){void 0===e[ke[t].name]&&(e[ke[t].name]=[])})),Ce.a.set("customTokens",e)},setTokens:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.tokens=[],e.next=3,this.fetchTokens();case 3:t=e.sent,t=t.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0})).map((function(e){var t=new ye["BigNumber"](e.balance),n=t.isNaN()?e.balance:t.div(new ye["BigNumber"](10).pow(e.decimals)).toFixed(),r={address:e.address,balance:n,decimals:e.decimals,email:e.email,name:e.name,symbol:e.symbol,website:e.website};return r})),this.tokens=t.sort(Ne["a"]),this.setTokensWithBalance();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setTokensWithBalance:function(){var e=this,t=Ce.a.get("customTokens");void 0!==t&&void 0!==t[this.network.type.name]&&t[this.network.type.name].length>0?new Promise((function(n){var r=t[e.network.type.name].map(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenBalance(n);case 2:return n.balance=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());Promise.all(r).then((function(r){t[e.network.type.name]=r,Ce.a.set("customTokens",t),n(r)}))})).then((function(t){var n=e.tokens.filter((function(e){return e.balance>0})).concat(t.filter((function(e){return e.balance>0})));e.tokensWithBalance=n,e.receivedTokens=!0})).catch((function(e){k["e"].responseHandler(e,k["e"].ERROR)})):(this.receivedTokens=!0,this.tokensWithBalance=this.tokens.filter((function(e){return e.balance>0})))},getBlock:function(){var e=this;this.web3.eth.getBlockNumber().then((function(t){e.blockNumber=t,e.$store.dispatch("updateBlockNumber",t)})).catch((function(e){k["e"].responseHandler(e,k["e"].ERROR)}))},getBalance:function(){var e=this,t=this.web3;t.eth.getBalance(this.address.toLowerCase()).then((function(n){e.balance=t.utils.fromWei(n,"ether"),e.$store.dispatch("setAccountBalance",n)})).catch((function(e){k["e"].responseHandler(e,k["e"].ERROR)}))},checkWeb3WalletAddrChange:function(){var e=this,t=this.web3;window.ethereum.on("accountsChanged",(function(n){if(n.length>1){var r=new ve["b"](n[0]);e.$store.dispatch("decryptWallet",[r,t])}}))},checkAndSetNetwork:function(e){var t=this;this.network.type.chainID.toString()!=="".concat(e)&&Object.keys(ke).some((function(n){if(ke[n].chainID.toString()==="".concat(e)&&t.Networks[n])return t.$store.dispatch("switchNetwork",t.Networks[n][0]),!0}))},matchWeb3WalletNetwork:function(){var e=this;this.web3.eth.net.getId().then((function(t){e.checkAndSetNetwork(t)})),window.ethereum.on("networkChanged",(function(t){e.checkAndSetNetwork(t)}))},setupOnlineEnvironment:$e.a._.debounce((function(){var e=this;this.clearIntervals(),void 0===Ce.a.get("customTokens")?(Ce.a.set("customTokens",{}),this.setCustomTokenStore()):this.setCustomTokenStore(),this.online&&null!==this.account.address&&(this.account.identifier===y["j"]&&(window.ethereum.isMetaMask||window.ethereum.isMew?(this.checkWeb3WalletAddrChange(),this.matchWeb3WalletNetwork()):(this.web3WalletPollNetwork(),this.web3WalletPollAddress())),this.setENS(),this.getBlock(),this.getBalance(),this.setTokens(),this.setNonce(),this.getHighestGas(),this.getBlockUpdater().then((function(t){e.pollBlock=t})))})),getBlockUpdater:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=t.web3.eth.subscribe("newBlockHeaders",(function(r){r&&(n=setInterval(t.getBlock,14e3)),e(n)})).on("data",(function(e){t.blockNumber=e.number}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getHighestGas:function(){var e=this;this.web3.eth.getGasPrice().then((function(t){e.highestGas=new ye["BigNumber"](e.web3.utils.fromWei(t,"gwei")).toString()})).catch((function(e){k["e"].responseHandler(e,k["e"].ERROR)}))},setENS:function(){this.network.type.ens?this.$store.dispatch("setENS",new d.a(this.web3.currentProvider,this.network.type.ens.registry)):this.$store.dispatch("setENS",null)},clearIntervals:function(){this.pollBlock.unsubscribe?this.pollBlock.unsubscribe():clearInterval(this.pollBlock),clearInterval(this.pollNetwork),clearInterval(this.pollAddress)},web3WalletPollNetwork:function(){var e=this;window.web3.eth.net&&"function"===typeof window.web3.eth.net.getId&&(this.pollNetwork=setInterval((function(){window.web3.eth.net.getId().then((function(t){e.network.type.chainID.toString()!==t&&Object.keys(ke).some((function(n){if(ke[n].chainID===t&&e.Networks[n])return e.$store.dispatch("switchNetwork",e.Networks[n]),clearInterval(e.pollNetwork),!0}))})).catch((function(e){k["e"].responseHandler(e,!1)}))}),500))},web3WalletPollAddress:function(){var e=this;this.pollAddress=setInterval((function(){window.web3.eth||(k["e"].responseHandler(new Error("Web3 Instance not found!"),k["e"].ERROR),clearInterval(e.pollAddress)),window.web3.eth.getAccounts((function(t,n){t&&(k["e"].responseHandler(t,!1),clearInterval(e.pollAddress)),n.length||(k["e"].responseHandler(new Error("Please make sure that your Web3 Wallet is unlocked"),k["e"].ERROR),clearInterval(e.pollAddress));var r=n[0];if(null!==e.account.address&&r.toLowerCase()!==e.account.address.toLowerCase()){var s=new ve["b"](r);e.$store.dispatch("decryptWallet",[s,window.web3.currentProvider]),clearInterval(e.pollAddress)}}))}),500)}}},Ee=xe,Se=(n("b1d0"),Object(N["a"])(Ee,r,s,!1,null,"35e993d2",null)),Ie=Se.exports;n.d(t,"default",(function(){return Ie}))},fba8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fef0f952.df70d81b.js.map