webpackJsonp([1],{H1t4:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"dropdown-transition",appear:"",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]},r=e("VU/8")({name:"App"},i,!1,null,null,null).exports,n=e("/ocq"),l=e("mvHQ"),o=e.n(l),c={name:"home",data:function(){return{url:null,errors:[],isValidUrl:!0,urls:[],colors:["#F0F5FD","#FEF0F5","#E9F5FE"]}},mounted:function(){this.urls=JSON.parse(localStorage.getItem("urls"))},methods:{checkForm:function(t){if(this.errors=[],this.url)if(this.validUrl(this.url)){if(t.preventDefault(),localStorage.getItem("urls")){var s=JSON.parse(localStorage.getItem("urls"));return!s.includes(this.url)&&s.length<6?(s.push(this.url),localStorage.setItem("urls",o()(s))):6==s.length&&(s.shift(),s.push(this.url),localStorage.setItem("urls",o()(s))),this.$router.push({path:"result",query:{url:this.url}}),!0}localStorage.setItem("urls",o()([this.url]))}else this.errors.push("Valid url required.");else this.errors.push("URL field cant be empty")},validUrl:function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)},getRandomColor:function(){var t=Math.floor(3*Math.random())+1;return this.colors[t]}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"container-fluid h-100 p-0"},[e("div",{staticClass:"row no-gutters h-100"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"bg-light h-100 d-flex align-items-end justify-content-center"},[e("div",{staticClass:"info-box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("form",{staticClass:"position-relative d-flex align-items-center input-box",attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),t.checkForm(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"",placeholder:"Enter domain eg. (https://www.example.com)"},domProps:{value:t.url},on:{input:function(s){s.target.composing||(t.url=s.target.value)}}}),t._v(" "),e("a",{staticClass:"pointer btn check-btn d-flex align-items-center px-3",on:{click:t.checkForm}},[e("i",{staticClass:"fas fa-arrow-right",staticStyle:{color:"white"}})])]),t._v(" "),t.errors.length>0?e("small",{staticClass:"text-danger"},[t._v("\n              "+t._s(t.errors[0])+"\n            ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"bg-white h-100"},[e("div",{staticClass:"p-5 d-flex align-items-center justify-content-center h-100"},[e("ul",{staticClass:"row list w-100 p-0"},t._l(t.urls,function(s,a){return e("li",{key:a,staticClass:"col-lg-4 col-md-6 col-sm-12 col-xlg-3"},[e("div",{staticClass:"p-5 url-item d-flex align-items-center",style:{backgroundColor:t.colors[Math.round(2*Math.random())]}},[t._v("\n                  "+t._s(s)+"\n                ")])])}),0)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"my-0 main-heading"},[this._v("Is it "),s("br"),this._v(" down ?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"my-5"},[this._v("Ping your website form 5 global locations"),s("br"),this._v(" and get to know is it down instantly")])}]},d=e("VU/8")(c,u,!1,null,null,null).exports,m={data:function(){return{url:null,hostname:"",cors:"https://cors-anywhere.herokuapp.com/",responseTime:0,isUp:!1,isLoading:!0}},mounted:function(){this.url=this.$route.query.url;this.parseURL(this.$route.query.url);this.hostname=this.$route.query.url,console.log(this.parseURL(this.$route.query.url));var t=new Date,s=new XMLHttpRequest,e=this;s.onreadystatechange=function(){4==this.readyState&&200==this.status?(t=new Date-t,e.responseTime=t,e.isUp=!0,e.isLoading=!1):4==this.readyState&&200!==this.status&&(t=new Date-t,e.responseTime=t,e.isUp=!1,e.isLoading=!1)},s.open("HEAD",this.urlWithCors(this.$route.query.url)),s.send()},methods:{urlWithCors:function(t){return this.cors+t}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid h-100 p-0"},[e("div",{staticClass:"row no-gutters h-100"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"h-100 d-flex align-items-end justify-content-center p-5",class:t.isUp?"bg-success":"bg-danger"},[e("div",{staticClass:"info-box"},[e("h2",{staticClass:"secondary-heading m-0"},[t._v("Is "+t._s(t.hostname)+" "),e("br"),t._v(" down ?")]),t._v(" "),e("p",{staticClass:"my-5"}),t.isLoading?e("div",{staticClass:"p-4 d-flex justify-content-center"},[e("i",{staticClass:"fas fa-circle-notch"})]):e("transition",{attrs:{name:"fade",appear:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"d-flex align-items-center justify-content-center response bg-white"},[t.isUp?e("div",{staticClass:"d-flex flex-column align-items-center p-5"},[e("div",{staticClass:"success-response mb-5"},[e("i",{staticClass:"fas fa-arrow-up"})]),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-md"},[t._v("Up")]),e("br"),t._v(" "),e("span",{staticClass:"text-sm"},[t._v("From a global location")])])]):e("div",{staticClass:"d-flex flex-column align-items-center p-5"},[e("div",{staticClass:"danger-response mb-5"},[e("i",{staticClass:"fas fa-arrow-down"})]),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-md"},[t._v("Down")]),e("br"),t._v(" "),e("span",{staticClass:"text-sm"},[t._v("From a global location")])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"d-flex align-items-center justify-content-center response bg-white"},[e("div",{staticClass:"d-flex flex-column align-items-center p-5"},[e("div",{staticClass:"time-response mb-5"},[e("i",{staticClass:"far fa-clock"})]),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-md"},[t._v(t._s(t.responseTime)+" ms")]),e("br"),t._v(" "),e("span",{staticClass:"text-sm"},[t._v("Fastest response time")])])])])])])]),t._v(" "),e("p")],1)])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"h-100 d-flex align-items-end justify-content-center p-5",staticStyle:{"background-color":"#2CA58D"}})])}]},p=e("VU/8")(m,h,!1,null,null,null).exports;a.a.use(n.a);var v=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/result",name:"Result",component:p}]});e("H1t4");a.a.config.productionTip=!1,a.a.mixin({methods:{parseURL:function(t){return new URL(t)}}}),new a.a({el:"#app",router:v,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.bfe3240c8b80254549e2.js.map