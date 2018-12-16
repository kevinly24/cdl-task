(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("8c4f"),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Compass Digital Labs")]),a("span",{staticClass:"font-weight-light"},[t._v(": Task")])]),a("v-spacer")],1),a("v-content",[a("router-view")],1)],1)},s=[],l={name:"App"},c=l,u=a("2877"),d=a("6544"),p=a.n(d),v=a("7496"),f=a("549c"),g=a("9910"),h=a("71d9"),b=a("2a7f"),_=Object(u["a"])(c,i,s,!1,null,null,null);_.options.__file="App.vue";var m=_.exports;p()(_,{VApp:v["a"],VContent:f["a"],VSpacer:g["a"],VToolbar:h["a"],VToolbarTitle:b["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("CDL - Location Services")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("The following will display brand details per location.")])]),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("v-card",[a("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[t._v("Select a Group")]),a("v-card-text",[a("v-autocomplete",{attrs:{items:t.groups,"persistent-hint":"","item-text":"name","item-value":"id"},on:{change:t.getLocations},model:{value:t.groupInput,callback:function(e){t.groupInput=e},expression:"groupInput"}}),t.loadingLocations?a("v-flex",{attrs:{xs12:""}},[a("v-progress-linear",{attrs:{indeterminate:!0}})],1):t._e()],1)],1)],1),t.locations.length>0?a("v-flex",{attrs:{xs12:"","mb-5":"",transition:"slide-x-transition"}},[a("v-card",[a("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[a("span",[t._v("Select a Location")]),a("v-spacer"),a("v-text-field",{attrs:{label:"Filter",clearable:"",dark:"",color:"white"},model:{value:t.filterInput,callback:function(e){t.filterInput=e},expression:"filterInput"}})],1),a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.filteredLocations,function(e){return a("v-flex",{key:e.id,attrs:{xs4:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return a("v-card",{class:"elevation-"+(r?12:2),on:{click:function(a){t.goToLocation(e.id)}}},[a("v-card-title",{staticClass:"subheading font-weight-regular blue-grey white--text"},[t._v(t._s(e.name))]),a("v-card-title",[e.address?a("div",[a("div",[t._v("\n                        "+t._s(e.address.address)+"\n                        "),a("br"),t._v("\n                        "+t._s(e.address.city)+"\n                        "+t._s(e.address.state)+"\n                        "),a("br"),t._v("\n                        "+t._s(e.address.country)+"\n                        "+t._s(e.address.zip)+"\n                      ")])]):a("div",[t._v("No address specified")])])],1)}}])})],1)}),1)],1)],1)],1):t._e()],1),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("location",{attrs:{locationInfo:t.activeDialogLocation}})],1)],1)},w=[],y=(a("96cf"),a("1da1")),I=(a("6762"),a("2fdb"),a("bc3a")),V=a.n(I),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[t._v(t._s(t.locationInfo.name))]),t.locationInfo.name?t._e():a("div",{staticClass:"text-xs-center"},[a("v-progress-linear",{attrs:{indeterminate:!0}})],1),a("v-card-text",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-10":""}},[t.locationInfo.address?a("v-card",{attrs:{transition:"slide-x-transition"}},[a("v-card-title",{staticClass:"subheading font-weight-regular blue-grey white--text"},[t._v("Address")]),a("v-card-text",[a("div",[t._v("\n              "+t._s(t.locationInfo.address.address)+"\n              "),a("br"),t._v("\n              "+t._s(t.locationInfo.address.city)+"\n              "+t._s(t.locationInfo.address.state)+"\n              "),a("br"),t._v("\n              "+t._s(t.locationInfo.address.country)+"\n              "+t._s(t.locationInfo.address.zip)+"\n            ")])])],1):t._e()],1),a("v-flex",{attrs:{xs12:""}},[t.locationInfo.brands?a("v-card",[a("v-card-title",{staticClass:"subheading font-weight-regular blue-grey white--text"},[t._v("Brands")]),a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.locationInfo.brands,function(e){return a("v-flex",{key:e.id,attrs:{xs6:"",md4:""}},[a("v-card",[t.checkImage(e)?a("v-img",{attrs:{src:e.style.logo,"aspect-ratio":"2.75"}}):a("v-img",{attrs:{src:"http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg","aspect-ratio":"2.75"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))])])]),a("v-card-text",[a("span",[t._v("Delivery Supported\n                      "),e.is.delivery_supported?a("v-icon",[t._v("check")]):a("v-icon",[t._v("close")])],1),a("br"),a("span",[t._v("Pickup Supported\n                      "),e.is.pickup_supported?a("v-icon",[t._v("check")]):a("v-icon",[t._v("close")])],1)])],1)],1)}),1)],1)],1):t._e()],1)],1)],1)],1)},L=[],k=(a("4917"),{props:["locationInfo"],methods:{checkImage:function(t){return!!t.style.logo&&t.style.logo.match(/^https?:\/\/(.*)/)}}}),O=k,j=(a("918b"),a("b0af")),T=a("99d9"),S=a("12b2"),P=a("a523"),D=a("0e8f"),R=a("132d"),A=a("adda"),F=a("a722"),M=a("8e36"),$=Object(u["a"])(O,C,L,!1,null,null,null);$.options.__file="location.vue";var E=$.exports;p()($,{VCard:j["a"],VCardText:T["a"],VCardTitle:S["a"],VContainer:P["a"],VFlex:D["a"],VIcon:R["a"],VImg:A["a"],VLayout:F["a"],VProgressLinear:M["a"]});var G={components:{location:E},data:function(){return{groupInput:"",groups:[],locationInput:"",locations:[],dialog:!1,activeDialogLocation:{},filterInput:"",loadingLocations:!1}},computed:{filteredLocations:function(){var t=this;return this.filterInput?this.locations.filter(function(e){return JSON.stringify(e).toLowerCase().includes(t.filterInput.toLowerCase())}):this.locations}},methods:{getGroups:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("https://api.compassdigital.org/staging/location/multigroup");case 2:e=t.sent,a=e.data,this.groups=a.multigroups;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getLocations:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingLocations=!0,t.next=3,V.a.get("https://api.compassdigital.org/staging/location/group/"+this.groupInput);case 3:e=t.sent,a=e.data,this.loadingLocations=!1,this.locations=a.locations;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goToLocation:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dialog=!0,this.activeDialogLocation={},t.next=4,V.a.get("https://api.compassdigital.org/staging/location/"+e);case 4:a=t.sent,n=a.data,this.activeDialogLocation=n;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getGroups()}},J=G,z=(a("ee90"),a("c6a6")),N=a("169a"),B=a("ce87"),H=a("2677"),q=Object(u["a"])(J,x,w,!1,null,null,null);q.options.__file="home.vue";var K=q.exports;p()(q,{VAutocomplete:z["a"],VCard:j["a"],VCardText:T["a"],VCardTitle:S["a"],VContainer:P["a"],VDialog:N["a"],VFlex:D["a"],VHover:B["a"],VLayout:F["a"],VProgressLinear:M["a"],VSpacer:g["a"],VTextField:H["a"]});var Q=new r["a"]({routes:[{path:"/",component:K}]});n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({router:Q,render:function(t){return t(m)}}).$mount("#app")},"918b":function(t,e,a){"use strict";var n=a("e82c"),r=a.n(n);r.a},d859:function(t,e,a){},e82c:function(t,e,a){},ee90:function(t,e,a){"use strict";var n=a("d859"),r=a.n(n);r.a}});
//# sourceMappingURL=app.78b81bf5.js.map