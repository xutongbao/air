(this.webpackJsonpair=this.webpackJsonpair||[]).push([[12],{117:function(e,t,a){"use strict";var r={light:{templateSearch:"/api/template/search",templateAdd:"/api/template/add",templateDelete:"/api/template/delete",templateEdit:"/api/template/edit",easyTemplateSearch:"/api/easyTemplate/search",easyTemplateAdd:"/api/easyTemplate/add",easyTemplateDelete:"/api/easyTemplate/delete",easyTemplateEdit:"/api/easyTemplate/edit",routerSearch:"/api/router/search",routerAdd:"/api/router/add",routerDelete:"/api/router/delete",routerEdit:"/api/router/edit",tableSearch:"/api/table/search",tableAdd:"/api/table/add",tableDelete:"/api/table/delete",tableEdit:"/api/table/edit",fieldsSearch:"/api/fields/search",fieldsAdd:"/api/fields/add",fieldsDelete:"/api/fields/delete",fieldsEdit:"/api/fields/edit"}},n=a(129),i=a.n(n),l=a(130),d=a(113),o=a(131),u=a.n(o),c=a(88),s="http://localhost:81";s="https://efficacious-tiny-infinity.glitch.me",u.a.defaults.baseURL=s,u.a.interceptors.request.use((function(e){return e.headers.token=localStorage.getItem("token")||"","get"===e.method?e.params=Object(d.a)({},e.data):e.data=Object(d.a)({},e.data),e}),(function(e){return Promise.reject(e)})),u.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400===e.data.code?(c.b.warning(e.data.message),e.data):Promise.reject(e)}));var p=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={light:{templateSearch:function(e){return p({url:r.light.templateSearch,data:e,method:"post"})},templateAdd:function(e){return p({url:r.light.templateAdd,data:e,method:"post"})},templateDelete:function(e){return p({url:r.light.templateDelete,data:e,method:"post"})},templateEdit:function(e){return p({url:r.light.templateEdit,data:e,method:"post"})},easyTemplateSearch:function(e){return p({url:r.light.easyTemplateSearch,data:e,method:"post"})},easyTemplateAdd:function(e){return p({url:r.light.easyTemplateAdd,data:e,method:"post"})},easyTemplateDelete:function(e){return p({url:r.light.easyTemplateDelete,data:e,method:"post"})},easyTemplateEdit:function(e){return p({url:r.light.easyTemplateEdit,data:e,method:"post"})},routerSearch:function(e){return p({url:r.light.routerSearch,data:e,method:"post"})},routerAdd:function(e){return p({url:r.light.routerAdd,data:e,method:"post"})},routerDelete:function(e){return p({url:r.light.routerDelete,data:e,method:"post"})},routerEdit:function(e){return p({url:r.light.routerEdit,data:e,method:"post"})},tableSearch:function(e){return p({url:r.light.tableSearch,data:e,method:"post"})},tableAdd:function(e){return p({url:r.light.tableAdd,data:e,method:"post"})},tableDelete:function(e){return p({url:r.light.tableDelete,data:e,method:"post"})},tableEdit:function(e){return p({url:r.light.tableEdit,data:e,method:"post"})},fieldsSearch:function(e){return p({url:r.light.fieldsSearch,data:e,method:"post"})},fieldsAdd:function(e){return p({url:r.light.fieldsAdd,data:e,method:"post"})},fieldsDelete:function(e){return p({url:r.light.fieldsDelete,data:e,method:"post"})},fieldsEdit:function(e){return p({url:r.light.fieldsEdit,data:e,method:"post"})}}};t.a=h},121:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));a(66);var r=a(311),n=a(144),i=a.n(n),l=a(14),d=function(e){return function(e){var t={},a=e.split("?");if(a.length<=1)return t;for(var r=0,n=(a=a[1].split("&")).length;r<n;r++){var i=a[r].split("=");t[i[0]]=i[1]}return t}(e.location.search)},o=function(){return[{id:0,title:"\u8f93\u5165\u6846(Input)",formComponentName:"Input",component:Object(l.jsx)(r.a,{})}]},u=function(){return[{id:0,title:"span\u6807\u7b7e",renderFunName:"renderSpan",formComponentNameArr:["Input"],render:function(e){return Object(l.jsx)("span",{children:e})}},{id:1,title:"\u65e5\u671f",renderFunName:"renderDatetime",formComponentNameArr:[],render:function(e){return Object(l.jsx)("span",{children:e?i()(e).format("YYYY-MM-DD HH:mm:ss"):""})}}]}},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(117),n=function(e){return function(t){r.a.light.routerSearch().then((function(a){200===a.code&&(t({type:"SET_LIGHT_STATE",key:["router"],value:a.data}),e&&e())}))}}},305:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(194),i=a(50),l=a(6),d=a(62),o=a(121),u=a(128),c=a(14),s=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,295))}));t.default=Object(d.b)((function(e){return{router:e.getIn(["light","router"]).toJS()}}),(function(e){return{onSetState:function(t,a){e({type:"SET_LIGHT_STATE",key:t,value:a})},onDispatch:function(t){e(t)}}}))(Object(l.g)((function(e){var t=e.router,a=Object(o.c)(e);return Object(r.useEffect)((function(){e.onDispatch(Object(u.a)())}),[]),Object(c.jsxs)("div",{className:"m-wrap",children:[Object(c.jsxs)("div",{className:"m-header",children:[Object(c.jsx)("div",{className:"m-header-logo",children:"SalesWork"}),Object(c.jsx)(n.a,{className:"m-header-nav",selectedKeys:[a.id],mode:"horizontal",children:t.map((function(e){return Object(c.jsx)(n.a.Item,{children:Object(c.jsx)(i.b,{to:e.path,children:e.title})},e.key)}))}),Object(c.jsx)("div",{className:"m-header-operate",children:Object(c.jsx)(i.b,{to:"/light/admin/application",children:"\u7ba1\u7406\u540e\u53f0"})})]}),Object(c.jsx)("div",{className:"m-content",children:Object(c.jsx)(r.Suspense,{fallback:null,children:Object(c.jsx)(l.d,{children:Object(c.jsx)(l.b,{path:"/light/index/content",component:s})})})})]})})))}}]);
//# sourceMappingURL=12.0328a465.chunk.js.map