!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("C3PriceSelector",[],t):"object"==typeof exports?exports.C3PriceSelector=t():e.C3PriceSelector=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,i){"use strict";var r=[{value:"",title:"不限"},{value:"0-3",title:"3万以下"},{value:"3-5",title:"3-5万"},{value:"5-10",title:"5-10万"},{value:"10-15",title:"10-15万"},{value:"15-20",title:"15-20万"},{value:"20-25",title:"20-25万"},{value:"25-30",title:"25-30万"},{value:"30",title:"30万以上"}];t.a={name:"price-selector",props:{isVisiable:{type:Boolean,default:!1},prices:{type:Array,default:function(){return[]}},initPrice:{type:Object,default:function(){return{}}},confirmCb:{type:Function,default:function(){}},goBack:{type:Function,default:function(){}}},data:function(){return{priceList:[],selectedPrice:{title:"",value:"",isDefine:!1},definePirce:{min:"0",max:"0"},definePriceError:!1}},watch:{initPrice:{handler:function(e){console.log("价格属性发生改变，重新渲染价格组件"),this.initPrice=e,this.init()},deep:!0}},created:function(){this.init()},methods:{init:function(){this.priceList=this.prices.length?this.prices:r,this.selectedPrice=Object.assign(this.selectedPrice,this.initPrice),this.selectedPrice.isDefine&&this.setDefinePriceInterval(this.selectedPrice)},testIntervalQualified:function(e,t){if(e="number"==typeof e?e:Number(e),t="number"==typeof t?t:Number(t),isNaN(e))throw new Error("自定义最小值非数字");if(isNaN(t))throw new Error("自定义最大值非数字");if(e>t)throw new Error("自定义最小值大于最大值");return!0},setDefinePriceInterval:function(e){var t=e.value.split("-"),i=Number(t[0])||0,r=Number(t[1])||0;try{this.testIntervalQualified(i,r)&&(this.definePirce={min:i,max:r})}catch(e){console.error(e)}},choosePirce:function(e){this.selectedPrice=Object.assign(this.selectedPrice,e,{isDefine:!1})},definePriceChange:function(){var e=Number(this.definePirce.min),t=Number(this.definePirce.max);this.definePriceError=isNaN(e)||isNaN(t)||e>t,this.definePriceError||(this.selectedPrice={title:e+"-"+t+"万",value:e+"-"+t,isDefine:!0})},confirm:function(){this.definePriceError||this.confirmCb(this.selectedPrice)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(2),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c={install:function(e){e.component(r.a.name,r.a)}};void 0!==("undefined"==typeof window?"undefined":n(window))&&window.Vue&&window.Vue.use(r.a),t.default=c},function(e,t,i){"use strict";function r(e){i(3)}var n=i(0),c=i(9),o=i(8),s=r,a=o(n.a,c.a,!1,s,"data-v-23d57568",null);t.a=a.exports},function(e,t,i){var r=i(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(6)("3b115796",r,!0,{})},function(e,t,i){t=e.exports=i(5)(!1),t.push([e.i,'.c3-price-selector[data-v-23d57568]{position:fixed;left:0;top:0;bottom:0;width:100%;background-color:#f5f5f5;z-index:998}.c3-price-selector .title-bar[data-v-23d57568]{position:relative;width:100%;height:45px;line-height:45px;text-align:center;font-size:.51rem;background-color:#fff;border-bottom:1px solid #f0f0f0}.c3-price-selector .title-bar .go-back__arrow[data-v-23d57568]{position:absolute;left:0;top:0;height:45px;width:50px}.c3-price-selector .title-bar .go-back__arrow .back-img[data-v-23d57568]{width:.24rem;height:.48rem}.c3-price-selector .title-bar .title-name[data-v-23d57568]{margin:0;padding:0}.c3-price-selector .price__content[data-v-23d57568]{position:absolute;top:45px;left:0;bottom:0;width:100%;overflow-y:scroll}.c3-price-selector .price__content .default-price__list[data-v-23d57568]{background-color:#fff}.c3-price-selector .price__content .default-price__list .default-price__item[data-v-23d57568]{display:flex;align-items:center;justify-content:space-between;height:1.2rem;margin-left:.4rem;margin-right:0;border-bottom:1px solid #f0f0f0;font-size:.42667rem;background-color:#fff}.c3-price-selector .price__content .default-price__list .default-price__item .default-price__select-icon[data-v-23d57568]{width:.53333rem;height:.53333rem;margin-right:.26667rem;font-size:0}.c3-price-selector .price__content .default-price__list .default-price__item .default-price__select-icon img[data-v-23d57568]{width:100%;height:100%}.c3-price-selector .price__content .define-price[data-v-23d57568]{box-sizing:border-box;padding:.4rem;margin-top:.26667rem;background-color:#fff}.c3-price-selector .price__content .define-price .define-price__header[data-v-23d57568]{display:flex;justify-content:space-between;font-size:.42667rem}.c3-price-selector .price__content .define-price .define-price__header .define-price__header-confirm[data-v-23d57568]{color:#f60}.c3-price-selector .price__content .define-price .define-price__content[data-v-23d57568]{display:flex;justify-content:center;align-items:center;margin-top:.53333rem}.c3-price-selector .price__content .define-price .define-price__content .define-price__input-wrapper[data-v-23d57568]{display:flex;align-items:center;justify-content:space-between;position:relative;width:47%;height:1.06667rem;border-radius:4px;background-color:#f5f5f5}.c3-price-selector .price__content .define-price .define-price__content .define-price__input-wrapper .define-price__input[data-v-23d57568]{width:80%;box-sizing:border-box;height:.53333rem;padding-left:.26667rem;line-height:.53333rem;font-size:.42667rem;background-color:#f5f5f5;border:none;outline:none}.c3-price-selector .price__content .define-price .define-price__content .define-price__input-wrapper .define-price__input—unit[data-v-23d57568]{margin-right:.26667rem;font-size:.42667rem}.c3-price-selector .price__content .define-price .define-price__content .define-price__input-wrapper .error__tip[data-v-23d57568]{position:absolute;height:22px;line-height:22px;top:-30px;left:0;padding:0 5px;background-color:#333;color:#fff}.c3-price-selector .price__content .define-price .define-price__content .define-price__input-wrapper .error__tip[data-v-23d57568]:before{content:"";position:absolute;left:10px;bottom:0;transform:translateY(90%);width:0;height:0;border-top:8px solid #333;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid transparent}.c3-price-selector .price__content .define-price .define-price__content .define-price__line[data-v-23d57568]{width:.21333rem;height:1px;margin:0 6px;background-color:#333}',""])},function(e,t){function i(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var c=r(n);return[i].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([c]).join("\n")}return[i].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=i(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var c=this[n][0];"number"==typeof c&&(r[c]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&r[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(e,t,i){function r(e){for(var t=0;t<e.length;t++){var i=e[t],r=p[i.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](i.parts[n]);for(;n<i.parts.length;n++)r.parts.push(c(i.parts[n]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{for(var o=[],n=0;n<i.parts.length;n++)o.push(c(i.parts[n]));p[i.id]={id:i.id,refs:1,parts:o}}}}function n(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function c(e){var t,i,r=document.querySelector("style["+h+'~="'+e.id+'"]');if(r){if(_)return v;r.parentNode.removeChild(r)}if(g){var c=u++;r=f||(f=n()),t=o.bind(null,r,c,!1),i=o.bind(null,r,c,!0)}else r=n(),t=s.bind(null,r),i=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else i()}}function o(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var c=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(c,o[t]):e.appendChild(c)}}function s(e,t){var i=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(h,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(7),p={},l=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,u=0,_=!1,v=function(){},m=null,h="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,n){_=i,m=n||{};var c=d(e,t);return r(c),function(t){for(var i=[],n=0;n<c.length;n++){var o=c[n],s=p[o.id];s.refs--,i.push(s)}t?(c=d(e,t),r(c)):c=[];for(var n=0;n<i.length;n++){var s=i[n];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete p[s.id]}}}};var b=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],r={},n=0;n<t.length;n++){var c=t[n],o=c[0],s=c[1],a=c[2],d=c[3],p={id:e+":"+n,css:s,media:a,sourceMap:d};r[o]?r[o].parts.push(p):i.push(r[o]={id:o,parts:[p]})}return i}},function(e,t){e.exports=function(e,t,i,r,n,c){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),n&&(d._scopeId=n);var p;if(c?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},d._ssrRegister=p):r&&(p=r),p){var l=d.functional,f=l?d.render:d.beforeCreate;l?(d._injectStyles=p,d.render=function(e,t){return p.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,p):[p]}return{esModule:o,exports:s,options:d}}},function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isVisiable?i("div",{staticClass:"c3-price-selector"},[i("div",{staticClass:"title-bar"},[i("div",{staticClass:"go-back__arrow",on:{click:function(t){return t.stopPropagation(),e.goBack(t)}}},[i("img",{staticClass:"back-img",attrs:{src:"https://ssl-assets.che300.com/feimg/bapp/substitution/left-arrow.png"}})]),e._v(" "),i("h2",{staticClass:"title-name"},[e._v("价格选择")])]),e._v(" "),i("div",{staticClass:"price__content"},[i("ul",{staticClass:"default-price__list"},e._l(e.priceList,function(t,r){return i("li",{key:r,staticClass:"default-price__item",on:{click:function(i){e.choosePirce(t)}}},[i("span",{staticClass:"default-price__value"},[e._v(e._s(t.title))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedPrice.value===t.value&&!e.selectedPrice.isDefine,expression:"selectedPrice.value === price.value && !selectedPrice.isDefine"}],staticClass:"default-price__select-icon"},[i("img",{attrs:{src:"https://fezz.che300.com/pics/priceSelect/city_selected_single@3x.png"}})])])})),e._v(" "),i("div",{staticClass:"define-price"},[i("div",{staticClass:"define-price__header"},[i("span",{staticClass:"define-price__header-title"},[e._v("自定义价格")]),e._v(" "),i("span",{staticClass:"define-price__header-confirm",on:{click:e.confirm}},[e._v("确定")])]),e._v(" "),i("div",{staticClass:"define-price__content"},[i("div",{staticClass:"define-price__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.definePirce.min,expression:"definePirce.min"}],staticClass:"define-price__input",attrs:{type:"number"},domProps:{value:e.definePirce.min},on:{input:[function(t){t.target.composing||e.$set(e.definePirce,"min",t.target.value)},e.definePriceChange]}}),e._v(" "),i("span",{staticClass:"define-price__input—unit"},[e._v("万")])]),e._v(" "),i("span",{staticClass:"define-price__line"}),e._v(" "),i("div",{staticClass:"define-price__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.definePirce.max,expression:"definePirce.max"}],staticClass:"define-price__input",attrs:{type:"number"},domProps:{value:e.definePirce.max},on:{input:[function(t){t.target.composing||e.$set(e.definePirce,"max",t.target.value)},e.definePriceChange]}}),e._v(" "),i("span",{staticClass:"define-price__input—unit"},[e._v("万")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.definePriceError,expression:"definePriceError"}],staticClass:"error__tip"},[e._v("\n            请从低到高输入\n          ")])])])])])]):e._e()},n=[],c={render:r,staticRenderFns:n};t.a=c}])});
//# sourceMappingURL=index.js.map