webpackJsonp([7],{odi1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("f4F5"),n("Cj3+"),n("wA3Z");var s=n("Dd8w"),a=n.n(s),o=n("woOf"),i=n.n(o),c=n("//Fk"),l=n.n(c),r=n("7+uW"),u=n("9JZw"),f=n("SSsa"),m=n("CsZI"),d=Object(u.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"van-dialog-bounce"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:[t.b(),t.className]},[t.title?n("div",{class:t.b("header",{isolated:!t.message&&!t.$slots.default}),domProps:{textContent:t._s(t.title)}}):t._e(),t.message||t.$slots.default?n("div",{class:t.b("content")},[t._t("default",[t.message?n("div",{class:t.b("message",{"has-title":t.title}),domProps:{innerHTML:t._s(t.message)}}):t._e()])],2):t._e(),n("div",{staticClass:"van-hairline--top",class:t.b("footer",{buttons:t.showCancelButton&&t.showConfirmButton})},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showCancelButton,expression:"showCancelButton"}],class:t.b("cancel"),attrs:{loading:t.loading.cancel,size:"large"},on:{click:function(e){t.handleAction("cancel")}}},[t._v("\n        "+t._s(t.cancelButtonText||t.$t("cancel"))+"\n      ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showConfirmButton,expression:"showConfirmButton"}],class:[t.b("confirm"),{"van-hairline--left":t.showCancelButton&&t.showConfirmButton}],attrs:{size:"large",loading:t.loading.confirm},on:{click:function(e){t.handleAction("confirm")}}},[t._v("\n        "+t._s(t.confirmButtonText||t.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:f.a},mixins:[m.a],props:{title:String,message:String,callback:Function,className:[String,Object,Array],beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(t){var e=this;this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.$emit("input",!1),this.$emit(t),this.callback&&this.callback(t)}}}),v=void 0,h=function(t){return new l.a(function(e,n){v||((v=new(r.default.extend(d))({el:document.createElement("div")})).$on("input",function(t){v.value=t}),document.body.appendChild(v.$el)),i()(v,a()({resolve:e,reject:n},t))})};h.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){v["confirm"===t?"resolve":"reject"](t)}},h.alert=function(t){return h(a()({},h.currentOptions,t))},h.confirm=function(t){return h(a()({},h.currentOptions,{showCancelButton:!0},t))},h.close=function(){v&&(v.value=!1)},h.setDefaultOptions=function(t){i()(h.currentOptions,t)},h.resetDefaultOptions=function(){h.currentOptions=a()({},h.defaultOptions)},h.install=function(){r.default.use(d)},r.default.prototype.$dialog=h,h.resetDefaultOptions();var g=h,p=(n("eqfM"),n("/QYm")),_=n("NYxO"),C=n("gyMJ"),w=n("Du/2"),b=(n("IcnI"),{data:function(){return{settings:[{name:"头像",info:""},{name:"昵称",info:""}]}},computed:a()({},Object(_.mapState)({user:function(t){return t.user},isLoading:function(t){return t.isLoading}})),created:function(){this.$set(this.settings[0],"info",this.user.avatar.large),this.$set(this.settings[1],"info",this.user.nickname)},methods:a()({},Object(_.mapActions)(["setAvatar"]),{handleSetting:function(t){switch(t){case 0:break;case 1:this.$router.push({name:"setting_nickname",query:{nickname:""==this.user.nickname?"":this.user.nickname}});break;case 2:Object(p.a)("更改手机号，后续开通")}},logout:function(){var t=this;g.confirm({title:"退出登录",message:"确定要退出登录吗？"}).then(function(){t.$store.commit(w.l,{token:"",user:{}}),t.$router.push({name:"my"})})},onRead:function(t){var e=this;C.a.updateFile({data:{file:t.content,group:"user"}}).then(function(n){e.$set(e.settings[0],"info",t.content),e.setAvatar({avatarId:n.id}).then(function(){p.a.success("修改成功")}).catch(function(t){p.a.fail(t.message)})})}})}),B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my_setting"},[t.isLoading?n("e-loading"):t._e(),t._v(" "),t._l(t.settings,function(e,s){return n("div",{staticClass:"my_setting-item",on:{click:function(e){t.handleSetting(s)}}},[n("span",{staticClass:"my_setting-title title-18"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"my_setting-content"},[s?t._e():n("img",{staticClass:"my_setting-avatar",attrs:{src:e.info,alt:""}}),t._v(" "),s?n("span",[t._v(t._s(e.info))]):t._e(),t._v(" "),n("img",{staticClass:"my_setting-more",attrs:{src:"static/images/more.png",alt:""}})]),t._v(" "),s?t._e():n("van-uploader",{attrs:{"after-read":t.onRead}})],1)}),t._v(" "),n("div",{staticClass:"log-out-btn title-18",on:{click:t.logout}},[n("span",[t._v("退出登录")])])],2)},staticRenderFns:[]},k=n("VU/8")(b,B,!1,null,null,null);e.default=k.exports},wA3Z:function(t,e){}});