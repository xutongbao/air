(this.webpackJsonpair=this.webpackJsonpair||[]).push([[13],{115:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return m}));var r=a(114),n=(a(64),a(326)),i=a(323),o=a(130),l=a.n(o),d=a(9),u=n.a.TextArea,c=function(e){return function(e){var t={},a=e.split("?");if(a.length<=1)return t;for(var r=0,n=(a=a[1].split("&")).length;r<n;r++){var i=a[r].split("=");t[i[0]]=i[1]}return t}(e.location.search)},s=function(e){var t=/http(s)?:\/\/([A-Za-z0123456789:.-]+)\/\S+/.exec(e);if(t)return"http://"+t[2]},p=function(){return[{id:1,title:"\u5355\u884c\u6587\u672c",formComponentName:"Input",component:Object(d.jsx)(n.a,{}),getComponent:function(e){var t=e.props;return Object(d.jsx)(n.a,Object(r.a)({},t))}},{id:2,title:"\u591a\u884c\u6587\u672c",formComponentName:"TextArea",component:Object(d.jsx)(u,{}),getComponent:function(e){var t=e.props;return Object(d.jsx)(u,Object(r.a)({},t))}},{id:3,title:"\u6570\u5b57",formComponentName:"InputNumber",component:Object(d.jsx)(i.a,{style:{width:"100%"}}),getComponent:function(e){var t=e.props;return Object(d.jsx)(i.a,Object(r.a)({style:{width:"100%"}},t))}},{id:4,title:"\u56fe\u7247",formComponentName:"Image",component:Object(d.jsx)("img",{style:{width:"100%"},alt:"\u56fe\u7247"}),getComponent:function(e){var t=e.props;return Object(d.jsx)("img",Object(r.a)(Object(r.a)({style:{width:"100%"}},t),{},{alt:"\u56fe\u7247"}))}}]},m=function(){return[{id:1,title:"span\u6807\u7b7e",renderFunName:"renderSpan",formComponentNameArr:["Input","TextArea"],render:function(e){return Object(d.jsx)("span",{children:e})}},{id:2,title:"\u65e5\u671f",renderFunName:"renderDatetime",formComponentNameArr:[],render:function(e){return Object(d.jsx)("span",{children:e?l()(e).format("YYYY-MM-DD HH:mm:ss"):""})}},{id:3,title:"\u56fe\u7247",renderFunName:"renderImage",formComponentNameArr:["Image"],render:function(e){return Object(d.jsx)("img",{alt:"\u56fe\u7247",src:e})}}]}},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r="http://localhost:81";r="https://efficacious-tiny-infinity.glitch.me"},119:function(e,t,a){"use strict";var r={light:{testUpload:a(117).a+"/api/upload",templateSearch:"/api/template/search",templateAdd:"/api/template/add",templateDelete:"/api/template/delete",templateEdit:"/api/template/edit",easyTemplateSearch:"/api/easyTemplate/search",easyTemplateAdd:"/api/easyTemplate/add",easyTemplateDelete:"/api/easyTemplate/delete",easyTemplateEdit:"/api/easyTemplate/edit",routerSearch:"/api/router/search",routerAdd:"/api/router/add",routerDelete:"/api/router/delete",routerEdit:"/api/router/edit",tableSearch:"/api/table/search",tableAdd:"/api/table/add",tableDelete:"/api/table/delete",tableEdit:"/api/table/edit",fieldsSearch:"/api/fields/search",fieldsAdd:"/api/fields/add",fieldsDelete:"/api/fields/delete",fieldsEdit:"/api/fields/edit",fieldsEditAll:"/api/fields/editAll"}};t.a=r},121:function(e,t,a){"use strict";var r=a(119),n=a(133),i=a.n(n),o=a(134),l=a(114),d=a(135),u=a.n(d),c=a(89),s=a(117);u.a.defaults.baseURL=s.a,u.a.interceptors.request.use((function(e){return e.headers.token=localStorage.getItem("token")||"","get"===e.method?e.params=Object(l.a)({},e.data):e.data=Object(l.a)({},e.data),e}),(function(e){return Promise.reject(e)})),u.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400===e.data.code?(c.b.warning(e.data.message),e.data):Promise.reject(e)}));var p=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={light:{templateSearch:function(e){return p({url:r.a.light.templateSearch,data:e,method:"post"})},templateAdd:function(e){return p({url:r.a.light.templateAdd,data:e,method:"post"})},templateDelete:function(e){return p({url:r.a.light.templateDelete,data:e,method:"post"})},templateEdit:function(e){return p({url:r.a.light.templateEdit,data:e,method:"post"})},easyTemplateSearch:function(e){return p({url:r.a.light.easyTemplateSearch,data:e,method:"post"})},easyTemplateAdd:function(e){return p({url:r.a.light.easyTemplateAdd,data:e,method:"post"})},easyTemplateDelete:function(e){return p({url:r.a.light.easyTemplateDelete,data:e,method:"post"})},easyTemplateEdit:function(e){return p({url:r.a.light.easyTemplateEdit,data:e,method:"post"})},routerSearch:function(e){return p({url:r.a.light.routerSearch,data:e,method:"post"})},routerAdd:function(e){return p({url:r.a.light.routerAdd,data:e,method:"post"})},routerDelete:function(e){return p({url:r.a.light.routerDelete,data:e,method:"post"})},routerEdit:function(e){return p({url:r.a.light.routerEdit,data:e,method:"post"})},tableSearch:function(e){return p({url:r.a.light.tableSearch,data:e,method:"post"})},tableAdd:function(e){return p({url:r.a.light.tableAdd,data:e,method:"post"})},tableDelete:function(e){return p({url:r.a.light.tableDelete,data:e,method:"post"})},tableEdit:function(e){return p({url:r.a.light.tableEdit,data:e,method:"post"})},fieldsSearch:function(e){return p({url:r.a.light.fieldsSearch,data:e,method:"post"})},fieldsAdd:function(e){return p({url:r.a.light.fieldsAdd,data:e,method:"post"})},fieldsDelete:function(e){return p({url:r.a.light.fieldsDelete,data:e,method:"post"})},fieldsEdit:function(e){return p({url:r.a.light.fieldsEdit,data:e,method:"post"})},fieldsEditAll:function(e){return p({url:r.a.light.fieldsEditAll,data:e,method:"post"})}}};t.a=m},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(121),n=function(e){return function(t){r.a.light.routerSearch().then((function(a){200===a.code&&(t({type:"SET_LIGHT_STATE",key:["router"],value:a.data}),e&&e())}))}}},317:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(199),i=a(49),o=a(6),l=a(62),d=a(115),u=a(138),c=a(9),s=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(15)]).then(a.bind(null,307))}));t.default=Object(l.b)((function(e){return{router:e.getIn(["light","router"]).toJS()}}),(function(e){return{onSetState:function(t,a){e({type:"SET_LIGHT_STATE",key:t,value:a})},onDispatch:function(t){e(t)}}}))(Object(o.g)((function(e){var t=e.router,a=Object(d.d)(e);return Object(r.useEffect)((function(){e.onDispatch(Object(u.a)())}),[]),Object(c.jsxs)("div",{className:"m-wrap",children:[Object(c.jsxs)("div",{className:"m-header",children:[Object(c.jsx)("div",{className:"m-header-logo",children:"SalesWork"}),Object(c.jsx)(n.a,{className:"m-header-nav",selectedKeys:[a.id],mode:"horizontal",children:t.map((function(e){return Object(c.jsx)(n.a.Item,{children:Object(c.jsx)(i.b,{to:e.path,children:e.title})},e.key)}))}),Object(c.jsx)("div",{className:"m-header-operate",children:Object(c.jsx)(i.b,{to:"/light/admin/applicationPlus",children:"\u7ba1\u7406\u540e\u53f0"})})]}),Object(c.jsx)("div",{className:"m-content",children:Object(c.jsx)(r.Suspense,{fallback:null,children:Object(c.jsx)(o.d,{children:Object(c.jsx)(o.b,{path:"/light/index/content",component:s})})})})]})})))}}]);
//# sourceMappingURL=13.c7937c87.chunk.js.map