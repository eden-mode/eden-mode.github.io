(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},a={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+".js"}function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,i){s=a[t]=[e,i]}));e.push(s[2]=i);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t);var l=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,s[1](l)}a[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"034f":function(t,e,s){"use strict";var i=s("85ec"),a=s.n(i);a.a},1390:function(t,e,s){"use strict";var i=s("3d05"),a=s.n(i);a.a},"3d05":function(t,e,s){},4195:function(t,e,s){"use strict";var i=s("9d9f"),a=s.n(i);a.a},"85ec":function(t,e,s){},"9d9f":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=(s("034f"),s("2877")),c={},o=Object(r["a"])(c,a,n,!1,null,null,null),l=o.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t.mobileView?s("div",{staticClass:"head"},[s("div",{staticClass:"logo"},[s("img",{staticClass:"brand",attrs:{src:"/dl-sim/logo-new.png"}}),s("div",{staticClass:"menu",on:{click:function(e){t.asideHidden=!1}}},[s("i",{staticClass:"el-icon-s-operation"})])])]):t._e(),s("div",{staticClass:"main-scrollbar"},[t.mobileView?s("ul",{staticClass:"mobile-holder"},[t.mobileView?s("virtual-list",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"virtual-list",attrs:{"data-key":"id","data-sources":t.filtered,"data-component":t.dpsMobile,"element-loading-spinner":"el-icon-loading","element-loading-text":"loading..."}}):t._e()],1):t._e(),t.mobileView?t._e():s("ul",{staticClass:"holder"},[t._m(0),t.mobileView?t._e():s("virtual-list",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"virtual-list",attrs:{"data-key":"id","data-sources":t.filtered,"data-component":t.dpsEntry,"element-loading-spinner":"el-icon-loading","element-loading-text":"loading..."}})],1)]),t.mobileView?s("div",{staticClass:"aside-invisible-closer",class:{show:t.mobileView&&!t.asideHidden},on:{click:function(e){t.asideHidden=!0}}}):t._e(),s("div",{staticClass:"aside the-filter",class:{show:t.mobileView&&!t.asideHidden}},[s("div",{staticClass:"aside-container"},[t._m(1),t.mobileView?s("div",{staticClass:"closer fr",on:{click:function(e){t.asideHidden=!0}}},[t._v(" × ")]):t._e(),t._m(2),s("div",{staticClass:"splitter"}),s("div",{staticClass:"last-modified"},[s("div",{staticClass:"mb-5"},[t._v("Last modified: "+t._s(t.lastModifiedTime))]),s("div",[s("div",[t._v("Changed:")]),s("div",{staticClass:"last-modified-icons"},t._l(t.lastModifiedList,(function(t){return s("img",{key:t.name,attrs:{src:t.src}})})),0)])]),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v(" Legend "),t.dpsCategories.length<t.allCategories.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleFactor()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"legend",staticStyle:{"line-height":"25px"}},t._l(t.allCategories,(function(e){return s("div",{key:e,staticClass:"dib",class:{"c-gray":!t.dpsCategories.includes(e)},on:{click:function(s){return t.toggleFactor(e)}}},[s("span",{staticClass:"dib"},[s("div",{staticClass:"indic",class:"c-"+e})]),s("span",{staticClass:"dib"},[s("div",{staticClass:"label"},[t._v(t._s(e))])])])})),0),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v("Affliction")]),s("div",{staticClass:"filter"},[s("el-radio-group",{staticClass:"rg-filter",attrs:{size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.afflict,callback:function(e){t.afflict=e},expression:"afflict"}},[s("el-radio-button",{attrs:{label:"ALWAYS"}},[t._v("100%")]),s("el-radio-button",{attrs:{label:"SELF"}},[t._v("Self")]),s("el-radio-button",{attrs:{label:"IMMUNE"}},[t._v("0%")])],1)],1),s("div",{staticClass:"title"},[t._v("Situation")]),s("div",{staticClass:"filter"},[s("el-checkbox",{attrs:{label:"NIHILISM"},on:{change:function(e){return t.reload()}},model:{value:t.nihilismChecked,callback:function(e){t.nihilismChecked=e},expression:"nihilismChecked"}},[t._v(" Curse of Nihility ")])],1),s("div",{staticClass:"filter"},[s("el-checkbox",{attrs:{label:"MONO"},on:{change:function(e){return t.reload()}},model:{value:t.monoChecked,callback:function(e){t.monoChecked=e},expression:"monoChecked"}},[t._v(" Element Lock ")])],1),s("div",{staticClass:"title"},[t._v("Special Variants")]),s("div",{staticClass:"filter"},[s("el-radio-group",{staticClass:"rg-filter",attrs:{size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.variant,callback:function(e){t.variant=e},expression:"variant"}},[s("el-radio-button",{attrs:{label:"HIDDEN"}},[t._v("Hidden")]),s("el-radio-button",{attrs:{label:"VISIBLE"}},[t._v("Visible")]),s("el-radio-button",{attrs:{label:"ONLY"}},[t._v("Only")])],1)],1),s("div",{staticClass:"title"},[t._v("Team DPS")]),s("div",{staticClass:"filter"},[s("el-input-number",{attrs:{min:0,step:5e3,size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.teamdps,callback:function(e){t.teamdps=e},expression:"teamdps"}})],1),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v(" Element "),t.elements.length<t.allElements.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleElement()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"filter"},[s("el-checkbox-group",{staticClass:"cb-filter",attrs:{size:"mini"},model:{value:t.elements,callback:function(e){t.elements=e},expression:"elements"}},t._l(t.allElements,(function(e){return s("el-checkbox",{key:e,attrs:{label:e},on:{change:function(s){return t.toggleElement(e)}}},[s("img",{staticClass:"icon-element",attrs:{src:"/dl-sim/pic/icons/"+e+".png",alt:"K"}})])})),1)],1),s("div",{staticClass:"title"},[t._v(" Weapon "),t.weapons.length<t.allWeapons.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleWeapon()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"filter"},[s("el-checkbox-group",{staticClass:"cb-filter",attrs:{size:"mini"},model:{value:t.weapons,callback:function(e){t.weapons=e},expression:"weapons"}},t._l(t.allWeapons,(function(e){return s("el-checkbox",{key:e,attrs:{label:e},on:{change:function(s){return t.toggleWeapon(e)}}},[s("img",{staticClass:"icon-weapon",attrs:{src:"/dl-sim/pic/icons/"+e+".png"}})])})),1)],1),s("div",{staticClass:"splitter"}),t._m(3)])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title h-40"},[s("div",{staticClass:"dib name"},[s("div",{staticClass:"dfac h-40",staticStyle:{"padding-left":"33px"}},[t._v("Adventurer")])]),s("div",{staticClass:"dib dps"},[s("div",{staticClass:"dfac h-40"},[t._v("DPS Distribution")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"the-brand"},[s("img",{staticClass:"brand",attrs:{src:"/dl-sim/logo-new.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title custom-build"},[s("a",{attrs:{href:"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html",target:"websim"}},[t._v("Custom Sim")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter footer"},[s("div",{staticClass:"links"},[s("a",{attrs:{href:"https://github.com/dl-stuff/dl/wiki"}},[t._v("About")]),s("a",{staticClass:"pl-15",attrs:{href:"https://github.com/dl-stuff/dl/issues/new"}},[t._v("Feedback")])])])}],p=(s("2397"),s("3835")),f=(s("ffc1"),s("6762"),s("2fdb"),s("28a5"),s("6b54"),s("55dd"),s("ac6a"),s("96cf"),s("1da1")),m=s("d4ec"),v=s("bee2"),g=s("262e"),b=s("99de"),w=s("7e84"),C=s("9ab4"),k=s("60a3"),y=s("bc3a"),_=s.n(y),x=function(){function t(){Object(m["a"])(this,t)}return Object(v["a"])(t,null,[{key:"Get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",s={method:"GET",url:t,responseType:e,timeout:36e4,headers:{"Access-Control-Allow-Origin":"*"}};return new Promise((function(t,e){_()(s).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}}]),t}();s("8615"),s("7f7f"),s("ac4d"),s("8a81"),s("5df3"),s("1c4c"),s("f559");function O(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=j(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,c=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return r=t.done,t},e:function(t){c=!0,n=t},f:function(){try{r||null==s.return||s.return()}finally{if(c)throw n}}}}function j(t,e){if(t){if("string"===typeof t)return I(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}var S=["x","fs","other","team","s1","s2","s3","s4","dx","ds","dfs"],E=function(){function t(e,s,i){Object(m["a"])(this,t),this.width=0,this.name=e,this.kind=e.split("_")[0],this.kind.startsWith("fs")?this.kind="fs":this.kind.startsWith("ds")?this.kind="ds":this.kind.startsWith("dfs")?this.kind="dfs":S.includes(this.kind)||(this.kind="other"),this.value=s,this.scale=i||0}return Object(v["a"])(t,[{key:"scaled",get:function(){return"team"===this.name?Math.round(this.value*this.scale):Math.round(this.value)}}]),t}(),R=function(){function t(e,s){Object(m["a"])(this,t),this.factors=[],this.filtered=[],this.filter=S.slice();var i,a=O(s);try{for(a.s();!(i=a.n()).done;){var n=i.value;this.factors.push(new E(n[0],n[1]))}}catch(r){a.e(r)}finally{a.f()}this.team=new E("team",0,e),e>0&&this.factors.push(this.team),this.filterFactors()}return Object(v["a"])(t,[{key:"filterFactors",value:function(t){var e=this;this.filter=t||this.filter,this.filtered=this.factors.filter((function(t){return t.name&&e.filter.includes(t.kind)}))}},{key:"updateWidths",value:function(t){var e,s=O(this.filtered);try{for(s.s();!(e=s.n()).done;){var i=e.value;i.width=Math.floor(i.scaled/t*1e3)/10}}catch(a){s.e(a)}finally{s.f()}}},{key:"total",get:function(){return this.filtered.reduce((function(t,e){return t+e.scaled}),0)}}]),t}(),M=(s("b54a"),"<NO>"),L=function(){function t(e,s){Object(m["a"])(this,t),this.qual=e,this.name=s.name,this.icon=s.icon,this.link=s.link||this.name,this.deco=s.deco}return Object(v["a"])(t,[{key:"src",get:function(){return"/dl-sim/pic/".concat(this.icon)}},{key:"deco_src",get:function(){return"/dl-sim/pic/".concat(this.deco)}},{key:"wiki",get:function(){return this.link!=M?encodeURI("https://dragalialost.wiki/w/".concat(this.link)):""}}]),t}(),$=["flame","water","wind","light","shadow"],N=["sword","blade","dagger","axe","lance","bow","wand","staff","gun"],P=function(){function t(e){Object(m["a"])(this,t),this.wps=[],this.coabs=[],this.share=[],this.stats=[],this.chara=t.getIcon(e.adv),e.variant?(this.id="".concat(this.chara.name," (").concat(e.variant,")"),this.variant=e.variant):(this.id=this.chara.name,this.variant=null),this.ele=e.ele,this.wt=e.wt,this.drg=t.getIcon(e.drg),this.wep=t.getIcon(e.wep),this.wps=e.wps.map(t.getIcon);while(this.wps.length<7){var s="Empty_".concat(this.wps.length+1);this.wps.push(t.getIcon(s))}if(this.coabs=e.coabs.map(t.getIcon),this.share=e.share.map(t.getIcon),this.cond=e.cond,this.comment=e.comment,this.stats=[],e.stats)for(var i=0,a=Object.entries(e.stats);i<a.length;i++){var n=Object(p["a"])(a[i],2),r=n[0],c=n[1];this.stats.push(new L(r,{name:r,icon:"icons/".concat(r,".png"),link:c}))}this.dps=new R(e.team,e.slices)}return Object(v["a"])(t,[{key:"customsim",get:function(){return this.variant?"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html?adv_name=".concat(this.chara.qual,"&variant=").concat(this.variant):"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html?adv_name=".concat(this.chara.qual)}}],[{key:"fromJSON",value:function(e){for(var s=[],i=0,a=Object.values(e);i<a.length;i++){var n=a[i];s.push(new t(n))}return s}},{key:"sort",value:function(t){return t.sort((function(t,e){return e.dps.total-t.dps.total}))}},{key:"getIcon",value:function(e){return t.iconIndex[e]}}]),t}(),A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"dib name mb-5"},[t.source.variant?s("span",{staticClass:"variant-txt"},[t._v(t._s(t.source.variant))]):t._e(),s("div",{staticClass:"avatar-slot-grid",class:{variant:t.source.variant}},[s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.id))]),s("a",{staticClass:"d-f avatar",attrs:{slot:"reference",href:t.source.chara.wiki,target:"wiki"},slot:"reference"},[s("img",{attrs:{src:t.source.chara.src}})])]),s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.drg.name))]),s("a",{attrs:{slot:"reference",href:t.source.drg.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.drg.src}})])]),s("div"),t._l([0,1,2,5],(function(e){return s("popper",{key:"sl"+t.source.wps[e].name+e,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wps[e].name))]),s("a",{attrs:{slot:"reference",href:t.source.wps[e].wiki||void 0,target:"wiki"},slot:"reference"},[t.source.wps[e].deco?s("img",{staticClass:"d-f deco",attrs:{src:t.source.wps[e].deco_src}}):t._e(),s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wps[e].src}})])])})),s("div"),t._l(t.source.coabs,(function(e){return s("popper",{key:"ca"+e.name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(e.name))]),s("a",{attrs:{slot:"reference",href:e.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:e.src}})])])})),s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wep.name))]),s("a",{attrs:{slot:"reference",href:t.source.wep.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wep.src}})])]),s("div"),s("div",{staticClass:"skillshare"},[s("img",{staticClass:"d-f",attrs:{src:"/dl-sim/pic/icons/amulet.png"}})]),t._l([3,4,6],(function(e){return s("popper",{key:"sl"+t.source.wps[e].name+e,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wps[e].name))]),s("a",{attrs:{slot:"reference",href:t.source.wps[e].wiki||void 0,target:"wiki"},slot:"reference"},[t.source.wps[e].deco?s("img",{staticClass:"d-f deco",attrs:{src:t.source.wps[e].deco_src}}):t._e(),s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wps[e].src}})])])})),s("div"),s("div",{staticClass:"skillshare"},[s("img",{staticClass:"d-f",attrs:{src:"/dl-sim/pic/icons/skillshare.png"}})]),t._l(t.source.share,(function(e,i){return s("popper",{key:"sh"+t.source.share[i].name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v("S"+t._s(i+3)+" "+t._s(t.source.share[i].name))]),s("a",{attrs:{slot:"reference",href:t.source.share[i].wiki||void 0,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.share[i].src}})])])}))],2)]),s("div",{staticClass:"dib dps"},[s("a",{staticClass:"custom-sim-link",attrs:{href:t.source.customsim,target:"websim"}},[t.source.variant?s("span",[t._v("Variant: "+t._s(t.source.variant))]):s("span",[t._v("Customize")])]),s("div",{staticClass:"dps-holder"},[s("div",{staticClass:"factors mb-1"},[s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper dps-details"},t._l(t.source.dps.filtered,(function(e,i){return s("span",{key:"fa"+e.name},[s("span",{staticClass:"f-title"},[t._v(t._s((i>0?", ":"")+e.name)+":")]),t._v(" "+t._s(e.scaled)+" ")])})),0),s("div",{staticClass:"dps-progress",attrs:{slot:"reference"},slot:"reference"},t._l(t.source.dps.filtered.filter((function(t){return t.width>0})),(function(t){return s("div",{key:t.factor,staticClass:"factor",class:"c-"+t.kind,style:{width:t.width+"%"}})})),0)])],1),s("div",{staticClass:"mb-1"},t._l(t.source.stats,(function(e){return s("popper",{key:"st"+e.icon,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(e.name+": "+e.link))]),s("span",{staticClass:"stats",attrs:{slot:"reference"},slot:"reference"},[s("img",{staticClass:"stats-icon",attrs:{src:e.src}}),s("span",{staticClass:"stats-txt"},[t._v(t._s(e.link))])])])})),1),s("div",{staticClass:"comment"},[""!=t.source.cond?s("span",[t._v("<"+t._s(t.source.cond)+">")]):t._e(),s("span",{domProps:{innerHTML:t._s(t.source.comment)}})])])]),s("div",{staticClass:"dib full"},[s("b",[t._v(t._s(t.source.dps.total))])])])},W=[],T=(s("c5f6"),s("526e")),V=s.n(T);k["b"].component("Popper",V.a);var H={name:"adv-component-full",props:{index:{type:Number},source:{type:P,default:function(){return{}}}}},D=H,F=Object(r["a"])(D,A,W,!1,null,null,null),U=F.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"mb-10"},[s("div",{staticClass:"dib",class:{variant:t.source.variant}},[s("a",{staticClass:"avatar-box",attrs:{href:t.source.customsim,target:"websim"}},[s("a",{attrs:{slot:"reference",href:t.source.chara.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"avatar",attrs:{src:t.source.chara.src}})]),t.source.variant?s("span",{staticClass:"variant-txt"},[t._v(t._s(t.source.variant))]):s("span",[t._v("Customize")])])]),s("div",{staticClass:"dib content"},[s("div",{staticClass:"mt-2"},[s("div",{staticClass:"dib chains"},[s("div",{staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.source.drg.wiki},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.source.drg.src}})])]),s("div",{staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.source.wep.wiki},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.source.wep.src}})])])]),s("div",{staticClass:"dib chains"},t._l(t.source.coabs,(function(t){return s("div",{key:"ca"+t.name,staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.src}})])])})),0),s("div",{staticClass:"dib chains"},t._l(t.source.share,(function(t){return s("div",{key:"sh"+t.name,staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.src}})])])})),0),s("div",{staticClass:"dib"},t._l(t.source.wps,(function(e){return s("div",{key:"sl"+e.name,staticClass:"dib"},[s("a",{staticClass:"wp-deco-holder",attrs:{slot:"reference",href:e.wiki},slot:"reference"},[e.deco?s("img",{staticClass:"deco",attrs:{src:e.deco_src}}):t._e(),s("img",{staticClass:"wyrmprint",attrs:{src:e.src}})])])})),0)]),s("div",{staticClass:"dib dps ml-4"},[s("div",{staticClass:"factors dps mb-1"},[t._l(t.source.dps.filtered,(function(t){return s("div",{key:"fa"+t.name,staticClass:"dps factor",class:"c-"+t.kind,style:{width:t.width+"%"}})})),s("div",{staticClass:"full"},[s("b",[t._v(t._s(t.source.dps.total))])])],2),s("div",t._l(t.source.stats,(function(e){return s("span",{key:"st"+e.icon,staticClass:"stats"},[s("img",{staticClass:"stats-icon",attrs:{src:e.src}}),s("span",{staticClass:"stats-txt"},[t._v(t._s(e.name))])])})),0)]),s("div",{staticClass:"mobile-comment"},[""!=t.source.cond?s("div",[t._v("<"+t._s(t.source.cond)+">")]):t._e(),s("span",{domProps:{innerHTML:t._s(t.source.comment)}})])])])},G=[],Y={name:"adv-component-mobile",props:{index:{type:Number},source:{type:P,default:function(){return{}}}}},q=Y,J=Object(r["a"])(q,z,G,!1,null,null,null),B=J.exports,K=s("89c1"),Q=s.n(K);s("3b2b"),s("a481");function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;s=s||{past:[{ceiling:60,text:"$seconds seconds ago"},{ceiling:3600,text:"$minutes minutes ago"},{ceiling:86400,text:"$hours hours ago"},{ceiling:2629744,text:"$days days ago"},{ceiling:31556926,text:"$months months ago"},{ceiling:null,text:"$years years ago"}],future:[{ceiling:60,text:"in $seconds seconds"},{ceiling:3600,text:"in $minutes minutes"},{ceiling:86400,text:"in $hours hours"},{ceiling:2629744,text:"in $days days"},{ceiling:31556926,text:"in $months months"},{ceiling:null,text:"in $years years"}]},i=i||[[31556926,"years"],[2629744,"months"],[86400,"days"],[3600,"hours"],[60,"minutes"],[1,"seconds"]];var a=(e.getTime()-t.getTime())/1e3,n="past";function r(){for(var t in s[n])if(null===s[n][t].ceiling||a<=s[n][t].ceiling)return s[n][t];return null}function c(){var t={},e=a;return i.forEach((function(s){var i=Math.floor(e/s[0]);e-=s[0]*i,t[s[1]]=i})),t}function o(t){var e=c(),s=t.text.replace(/\$(\w+)/g,(function(){return e[arguments[1]]}));return l(s,e)}function l(t,e){for(var s in e)if(1===e[s]){var i=new RegExp("\\b"+s+"\\b");t=t.replace(i,(function(){return arguments[0].replace(/s\b/g,"")}))}return t}return a<0&&(n="future",a=0-a),o(r())}function Z(t){var e=tt();return function(){var s,i=Object(w["a"])(t);if(e){var a=Object(w["a"])(this).constructor;s=Reflect.construct(i,arguments,a)}else s=i.apply(this,arguments);return Object(b["a"])(this,s)}}function tt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var et=function(t){Object(g["a"])(s,t);var e=Z(s);function s(){var t;return Object(m["a"])(this,s),t=e.apply(this,arguments),t.dpsEntry=U,t.dpsMobile=B,t.afflict=localStorage.getItem("afflict")||"ALWAYS",t.situation=localStorage.getItem("situation")||"NORMAL",t.nihilismChecked=!1,t.elelock=localStorage.getItem("elelock")||"ANY",t.monoChecked=!1,t.variant=localStorage.getItem("variant")||"HIDDEN",t.teamdps=3e4,t.allElements=$,t.prevElements=$.slice(),t.elements=$.slice(),t.allWeapons=N,t.prevWeapons=N.slice(),t.weapons=N.slice(),t.lastModifiedTime="",t.lastModifiedList=[],t.allCategories=S,t.dpsCategories=S.slice(),t.mobileView=!1,t.asideHidden=!0,t.loading=!0,t.cachedPageURL="",t.adventurers=[],t.filtered=[],t}return Object(v["a"])(s,[{key:"reload",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$nextTick();case 3:return t.next=5,this.reloadOps();case 5:return t.next=7,this.$nextTick();case 7:this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"reloadOps",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,s,i,a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.simPageURL===this.cachedPageURL){t.next=8;break}return t.next=3,this.loadSimPage();case 3:if(e=t.sent,e){t.next=6;break}return t.abrupt("return");case 6:this.adventurers=P.fromJSON(e),this.cachedPageURL=this.adventurers.length>0?this.csvUrl:"";case 8:for(this.adventurers.forEach((function(t){t.dps.team.value=r.teamdps,t.dps.filterFactors(r.dpsCategories)})),this.filtered=P.sort(this.adventurers.filter(this.matched)),s=this.filtered.length>0?this.filtered[0].dps.total:0,this.adventurers.forEach((function(t){t.dps.updateWidths(s)})),i=0,a=["teamdps","elements","weapons","afflict","situation","elelock","variant"];i<a.length;i++)n=a[i],localStorage.setItem(n,this[n].toString());case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=this;window.$dps=this,window.$http=x,localStorage.getItem("teamdps")&&(this.teamdps=parseInt(localStorage.getItem("teamdps"),10));for(var e=0,s=["elements","weapons"];e<s.length;e++){var i=s[e],a=localStorage.getItem(i);a&&(this[i]=a.split(","))}window.onresize=function(){t.mobileView=window.outerWidth<=800},this.mobileView=window.outerWidth<=800,this.nihilismChecked="NIHILISM"==this.situation,this.monoChecked="MONO"==this.elelock,this.loadIconIndex(),this.loadLastModified(),this.reload()}},{key:"toggleCheckboxGroup",value:function(t,e,s){return t&&0!==e.length?e.length===s.length?[t]:(e.includes(t)?(1===e.length&&(e=s.slice()),e.splice(e.indexOf(t),1)):e.length==s.length-1?e=[t]:e.push(t),e):s.slice()}},{key:"toggleNihilism",value:function(){}},{key:"toggleElement",value:function(t){this.elements=this.toggleCheckboxGroup(t,this.prevElements,this.allElements),this.prevElements=this.elements,this.reload()}},{key:"toggleWeapon",value:function(t){this.weapons=this.toggleCheckboxGroup(t,this.prevWeapons,this.allWeapons),this.prevWeapons=this.weapons,this.reload()}},{key:"toggleFactor",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$nextTick();case 3:return t.next=5,this.toggleFactorOps(e);case 5:return t.next=7,this.$nextTick();case 7:this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"toggleFactorOps",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e?this.dpsCategories.includes(e)?(1===this.dpsCategories.length&&(this.dpsCategories=this.allCategories.slice()),this.dpsCategories.splice(this.dpsCategories.indexOf(e),1)):this.dpsCategories.length==this.allCategories.length-1?this.dpsCategories=[e]:this.dpsCategories.push(e):this.dpsCategories=this.allCategories.slice(),this.filtered.forEach((function(t){t.dps.filterFactors(i.dpsCategories)})),P.sort(this.filtered),s=this.filtered.length>0?this.filtered[0].dps.total:0,this.adventurers.forEach((function(t){t.dps.updateWidths(s)}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadSimPage",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.Get(this.simPageURL,"json");case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","");case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadIconIndex",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,s,i,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.Get("/dl-sim/pic/index.json","json");case 3:for(e=t.sent,s=0,i=Object.entries(e);s<i.length;s++)a=Object(p["a"])(i[s],2),n=a[0],r=a[1],e[n]=new L(n,r);P.iconIndex=e,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadLastModified",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.Get("/dl-sim/page/lastmodified.json","json");case 3:e=t.sent,this.lastModifiedTime=X(new Date(parseInt(e.timestamp))),this.lastModifiedList=e.message.map(P.getIcon),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"matched",value:function(t){return!(this.elements.length>0&&!this.elements.includes(t.ele))&&(!(this.weapons.length>0&&!this.weapons.includes(t.wt))&&(("HIDDEN"!=this.variant||null==t.variant)&&("ONLY"!=this.variant||null!=t.variant)))}},{key:"simPageURL",get:function(){return this.situation=this.nihilismChecked?"NIHILISM":"NORMAL",this.elelock=this.monoChecked?"MONO":"ANY","/dl-sim/page/".concat(this.afflict,"-").concat(this.situation,"-").concat(this.elelock,".json")}}]),s}(k["b"]);et=Object(C["a"])([Object(k["a"])({components:{Popper:V.a,"virtual-list":Q.a}})],et);var st=et,it=st,at=(s("4195"),s("1390"),Object(r["a"])(it,d,h,!1,null,null,null)),nt=at.exports;i["default"].use(u["a"]);var rt=new u["a"]({routes:[{path:"/",name:"dps",component:nt},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),ct=s("5c96"),ot=s.n(ct),lt=(s("0fae"),s("a101"),s("a584"));i["default"].config.productionTip=!1,i["default"].use(ot.a),i["default"].use(lt["a"],{config:{id:"UA-159918955-1"}}),new i["default"]({router:rt,render:function(t){return t(l)}}).$mount("#app")}});