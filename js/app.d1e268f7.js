(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function s(t){return a.p+"js/"+({list:"list",notfound:"notfound"}[t]||t)+"."+{list:"09cf92dc",notfound:"97bdcbb5"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var r={"./alarm.mp3":"a362","./logo.png":"cf05","./yay.mp3":"c7a5"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="1771"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),i=n("5f5b"),o=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(i["a"]),r["default"].use(o["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("b-row",{staticClass:"d-flex justify-content-center align-items-center"},[n("b-col",{staticClass:"mt-5 d-flex justify-content-center align-items-center",attrs:{cols:"12"}},[n("b-form-input",{attrs:{id:"newinput",state:t.newinputstate},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newinput,callback:function(e){t.newinput=e},expression:"newinput"}}),n("b-button",{staticClass:"plus_btn",attrs:{size:"sm"},on:{click:t.additem}},[n("b-icon",{attrs:{icon:"plus","font-scale":"3"}})],1)],1)],1)],1),n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)},a=[],c={data:function(){return{newinput:""}},computed:{newinputstate:function(){return this.newinput.length>2||0===this.newinput.length&&null},items:function(){return this.$store.state.items}},methods:{additem:function(){this.newinput.length>2&&(this.$store.commit("additem",this.newinput),this.newinput="")}}},u=c,l=n("2877"),f=Object(l["a"])(u,s,a,!1,null,null,null),d=f.exports,m=n("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",{staticClass:"mt-5"},[n("b-row",[n("b-col",{staticClass:"hamburger",attrs:{cols:"12"}},[n("b-button",{staticClass:"hamburgerBtn",attrs:{to:"/list"}},[n("b-icon",{attrs:{icon:"list","font-scale":"5"}})],1)],1)],1),n("b-row",{staticClass:"h-50 d-flex justify-content-center align-items-center flex-column content"},[n("b-col",{staticClass:"mt-5 d-flex justify-content-center align-items-center",attrs:{cols:"12"}},[1!==t.status?n("b-button",{staticClass:"square",on:{click:t.start}},[n("p",{staticClass:"start"},[t._v("Start")])]):n("b-button",{staticClass:"square",on:{click:t.pause}},[n("p",{staticClass:"start"},[t._v("Stop")])])],1),n("b-col",{staticClass:"d-flex justify-content-center",attrs:{cols:"12"}},[n("div",{staticClass:"timetxt text-center"},[n("h1",[t._v(" "+t._s(t.timeText))])])]),n("b-col",{staticClass:"items",attrs:{cols:"4"}},[n("ul",[n("li",[t._v(t._s(t.currentText))])])]),n("b-col",{staticClass:"txt",attrs:{cols:"3"}},[n("p",[t._v(".....Only show the first four tasks.....")])])],1),n("b-row",{staticClass:"mt-4 d-flex justify-content-center align-items-center txt2"},[n("h2",[t._v("Work")]),n("h2",[t._v("Break")])]),n("b-row",{staticClass:"p-0 bottom fixed-bottom"})],1)],1)},b=[],v=(n("4d90"),n("25f0"),n("99af"),{data:function(){return{status:0,timer:0,muted:!1}},computed:{current:function(){return this.$store.state.current},items:function(){return this.$store.state.items},currentText:function(){return this.current.length>0?this.current:this.items.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)}},methods:{start:function(){var t=this;0===this.status&&this.items.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finished(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finished:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.items.length>0&&this.start()}}}),g=v,w=Object(l["a"])(g,h,b,!1,null,null,null),y=w.exports;r["default"].use(p["a"]);var k=[{path:"/",name:"Home",component:y,meta:{title:"番茄鐘 ",keepAlive:!0}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 事項"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 | 404"}},{path:"*",redirect:"/404"}],x=new p["a"]({routes:k});x.afterEach((function(t){document.title=t.meta.title}));var _=x,j=(n("a434"),n("b0c0"),n("2f62")),C=n("0e44");r["default"].use(j["a"]);var O=parseInt("1500"),S=parseInt("300"),$=new j["a"].Store({state:{sound:"alarm.mp3",items:[],current:"",finished:[],timeleft:O,break:!1},mutations:{selectSound:function(t,e){t.sound=e},additem:function(t,e){t.items.push({name:e,edit:!1,model:e})},edititem:function(t,e){t.items[e].edit=!0},delitem:function(t,e){t.items.splice(e,1)},submitedit:function(t,e){t.items[e].name=t.items[e].model,t.items[e].edit=!1},canceledit:function(t,e){t.items[e].model=t.items[e].name,t.items[e].edit=!1},start:function(t){t.current=t.break?"休息一下吧":t.items.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push(t.current),t.current="",t.items.length>0&&(t.break=!t.break),t.timeleft=t.break?S:O},delfinish:function(t,e){t.finished.splice(e,1)}},actions:{},modules:{},plugins:[Object(C["a"])({key:"pomodoro"})]});n("3e8e");r["default"].config.productionTip=!1,new r["default"]({router:_,store:$,render:function(t){return t(d)}}).$mount("#app")},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d1e268f7.js.map