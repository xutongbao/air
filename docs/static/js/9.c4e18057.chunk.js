(this.webpackJsonpair=this.webpackJsonpair||[]).push([[9],{115:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(114),r=(a(64),a(326)),i=a(323),c=a(130),o=a.n(c),l=a(9),s=r.a.TextArea,d=function(e){return function(e){var t={},a=e.split("?");if(a.length<=1)return t;for(var n=0,r=(a=a[1].split("&")).length;n<r;n++){var i=a[n].split("=");t[i[0]]=i[1]}return t}(e.location.search)},u=function(e){var t=/http(s)?:\/\/([A-Za-z0123456789:.]+)\/\S+/.exec(e);if(t)return"http://"+t[2]},m=function(){return[{id:1,title:"\u5355\u884c\u6587\u672c",formComponentName:"Input",component:Object(l.jsx)(r.a,{}),getComponent:function(e){var t=e.props;return Object(l.jsx)(r.a,Object(n.a)({},t))}},{id:2,title:"\u591a\u884c\u6587\u672c",formComponentName:"TextArea",component:Object(l.jsx)(s,{}),getComponent:function(e){var t=e.props;return Object(l.jsx)(s,Object(n.a)({},t))}},{id:3,title:"\u6570\u5b57",formComponentName:"InputNumber",component:Object(l.jsx)(i.a,{style:{width:"100%"}}),getComponent:function(e){var t=e.props;return Object(l.jsx)(i.a,Object(n.a)({style:{width:"100%"}},t))}},{id:4,title:"\u56fe\u7247",formComponentName:"Image",component:Object(l.jsx)("img",{style:{width:"100%"},alt:"\u56fe\u7247"}),getComponent:function(e){var t=e.props;return Object(l.jsx)("img",Object(n.a)(Object(n.a)({style:{width:"100%"}},t),{},{alt:"\u56fe\u7247"}))}}]},p=function(){return[{id:1,title:"span\u6807\u7b7e",renderFunName:"renderSpan",formComponentNameArr:["Input","TextArea"],render:function(e){return Object(l.jsx)("span",{children:e})}},{id:2,title:"\u65e5\u671f",renderFunName:"renderDatetime",formComponentNameArr:[],render:function(e){return Object(l.jsx)("span",{children:e?o()(e).format("YYYY-MM-DD HH:mm:ss"):""})}},{id:3,title:"\u56fe\u7247",renderFunName:"renderImage",formComponentNameArr:["Image"],render:function(e){return Object(l.jsx)("img",{alt:"\u56fe\u7247",src:e})}}]}},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://localhost:81";n="https://efficacious-tiny-infinity.glitch.me"},118:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return g}));var n=a(0),r=a(9);function i(e){var t=e.name,a=e.className,n=e.title;return Object(r.jsx)("span",{className:"icon iconfont icon-".concat(t," ").concat(a||""),title:n,onClick:e.onClick})}var c=a(320);var o=function(e){var t=e.dataSource,a=e.total,n=e.current,i=e.pageSize,o=e.getColumns;return Object(r.jsx)("div",{className:"m-content-table",children:Object(r.jsx)(c.a,{className:"m-my-table",columns:o(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},rowSelection:{onChange:function(t,a){return e.onRowSelect(t,a)}},pagination:{current:n,total:a,pageSize:i,onChange:function(t,a){return e.onSearch({page:t,pageSize:a})},showSizeChanger:!0,pageSizeOptions:[10,20,50],onShowSizeChange:function(t,a){return e.onSearch({page:t,pageSize:a})},showTotal:function(e){return Object(r.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(r.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})};var l=function(e){var t=e.dataSource,a=e.getColumns;return Object(r.jsx)("div",{className:"m-content-table",children:Object(r.jsx)(c.a,{className:"m-my-table",columns:a(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},pagination:{showTotal:function(e){return Object(r.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(r.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})},s=a(114),d=a(120),u=a(201),m=a(326);function p(e){var t=e.value,a=void 0===t?{}:t,i=e.onChange,c=Object(n.useState)(!1),o=Object(d.a)(c,2),l=o[0],p=o[1],h=Object(n.useState)(),f=Object(d.a)(h,2),j=f[0],b=f[1],O=function(e){i(Object(s.a)(Object(s.a)({required:l,message:j},a),e))},g=!1,x="";return a&&"boolean"===typeof a.required?(g=a.required,x=a.message):(g=l,x=j),Object(r.jsxs)("div",{children:[Object(r.jsx)(u.a,{checked:g,onChange:function(e){p(e.target.checked),O({required:e.target.checked})},children:"\u5fc5\u586b"}),Object(r.jsx)(m.a,{className:"m-fields-required-input ".concat(g?"active":""),value:x,onChange:function(e){b(e.target.value),O({message:e.target.value})},placeholder:"\u8bf7\u8f93\u5165\u5fc5\u586b\u63d0\u793a\u8bed"})]})}var h=a(89),f=a(321),j=a(131),b=a(119),O=a(115);function g(e){var t=e.value,a=void 0===t?"":t,n=e.msg,i=e.onChange,c=e.accept,o=void 0===c?".jpg":c,l={uid:"-1",name:a,status:"done",url:a},d=[];a&&d.push(l);var u={name:"file",action:b.a.light.testUpload,maxCount:1,listType:"picture",defaultFileList:[].concat(d),accept:o,onChange:function(e){if("done"===e.file.status){if(h.b.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f")),1===e.file.response.state){var t="".concat(Object(O.b)(e.file.xhr.responseURL),"/").concat(e.file.response.data.filename);console.log(t),i(t)}}else"error"===e.file.status&&h.b.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return Object(r.jsx)("span",{children:Object(r.jsxs)(f.a,Object(s.a)(Object(s.a)({},u),{},{children:[Object(r.jsx)(j.a,{children:"\u4e0a\u4f20\u56fe\u7247"}),Object(r.jsx)("span",{className:"m-upload-text",children:n})]}))})}},119:function(e,t,a){"use strict";var n={light:{testUpload:a(117).a+"/api/upload",templateSearch:"/api/template/search",templateAdd:"/api/template/add",templateDelete:"/api/template/delete",templateEdit:"/api/template/edit",easyTemplateSearch:"/api/easyTemplate/search",easyTemplateAdd:"/api/easyTemplate/add",easyTemplateDelete:"/api/easyTemplate/delete",easyTemplateEdit:"/api/easyTemplate/edit",routerSearch:"/api/router/search",routerAdd:"/api/router/add",routerDelete:"/api/router/delete",routerEdit:"/api/router/edit",tableSearch:"/api/table/search",tableAdd:"/api/table/add",tableDelete:"/api/table/delete",tableEdit:"/api/table/edit",fieldsSearch:"/api/fields/search",fieldsAdd:"/api/fields/add",fieldsDelete:"/api/fields/delete",fieldsEdit:"/api/fields/edit",fieldsEditAll:"/api/fields/editAll"}};t.a=n},121:function(e,t,a){"use strict";var n=a(119),r=a(133),i=a.n(r),c=a(134),o=a(114),l=a(135),s=a.n(l),d=a(89),u=a(117);s.a.defaults.baseURL=u.a,s.a.interceptors.request.use((function(e){return e.headers.token=localStorage.getItem("token")||"","get"===e.method?e.params=Object(o.a)({},e.data):e.data=Object(o.a)({},e.data),e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400===e.data.code?(d.b.warning(e.data.message),e.data):Promise.reject(e)}));var m=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={light:{templateSearch:function(e){return m({url:n.a.light.templateSearch,data:e,method:"post"})},templateAdd:function(e){return m({url:n.a.light.templateAdd,data:e,method:"post"})},templateDelete:function(e){return m({url:n.a.light.templateDelete,data:e,method:"post"})},templateEdit:function(e){return m({url:n.a.light.templateEdit,data:e,method:"post"})},easyTemplateSearch:function(e){return m({url:n.a.light.easyTemplateSearch,data:e,method:"post"})},easyTemplateAdd:function(e){return m({url:n.a.light.easyTemplateAdd,data:e,method:"post"})},easyTemplateDelete:function(e){return m({url:n.a.light.easyTemplateDelete,data:e,method:"post"})},easyTemplateEdit:function(e){return m({url:n.a.light.easyTemplateEdit,data:e,method:"post"})},routerSearch:function(e){return m({url:n.a.light.routerSearch,data:e,method:"post"})},routerAdd:function(e){return m({url:n.a.light.routerAdd,data:e,method:"post"})},routerDelete:function(e){return m({url:n.a.light.routerDelete,data:e,method:"post"})},routerEdit:function(e){return m({url:n.a.light.routerEdit,data:e,method:"post"})},tableSearch:function(e){return m({url:n.a.light.tableSearch,data:e,method:"post"})},tableAdd:function(e){return m({url:n.a.light.tableAdd,data:e,method:"post"})},tableDelete:function(e){return m({url:n.a.light.tableDelete,data:e,method:"post"})},tableEdit:function(e){return m({url:n.a.light.tableEdit,data:e,method:"post"})},fieldsSearch:function(e){return m({url:n.a.light.fieldsSearch,data:e,method:"post"})},fieldsAdd:function(e){return m({url:n.a.light.fieldsAdd,data:e,method:"post"})},fieldsDelete:function(e){return m({url:n.a.light.fieldsDelete,data:e,method:"post"})},fieldsEdit:function(e){return m({url:n.a.light.fieldsEdit,data:e,method:"post"})},fieldsEditAll:function(e){return m({url:n.a.light.fieldsEditAll,data:e,method:"post"})}}};t.a=p},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(121),r=function(e){return function(t){n.a.light.routerSearch().then((function(a){200===a.code&&(t({type:"SET_LIGHT_STATE",key:["router"],value:a.data}),e&&e())}))}}},332:function(e,t,a){"use strict";a.r(t);var n=a(114),r=a(0),i=a(62),c=a(6),o=a(202),l=a(199),s=a(327),d=a(322),u=a(131),m=a(326),p=a(9),h=a(118),f=a(120),j=a(121),b=a(138),O=s.a.confirm;t.default=Object(i.b)((function(e){return{router:e.getIn(["light","router"]).toJS()}}),(function(e){return{onSetState:function(t,a){e({type:"SET_LIGHT_STATE",key:t,value:a})},onDispatch:function(t){e(t)}}}))(Object(c.g)((function(e){var t=function(e){var t=d.a.useForm(),a=Object(f.a)(t,1)[0],i=Object(r.useState)(!1),c=Object(f.a)(i,2),o=c[0],l=c[1],s=Object(r.useState)({}),u=Object(f.a)(s,2),m=u[0],p=u[1],h=Object(r.useState)("add"),g=Object(f.a)(h,2),x=g[0],v=g[1],S=Object(r.useState)(),y=Object(f.a)(S,2),C=y[0],T=y[1],N=e.router,A={},E=function(){e.onDispatch(Object(b.a)())};return Object(r.useEffect)((function(){E()}),[]),Object(r.useEffect)((function(){a.resetFields()}),[o,a]),{isModalVisible:o,initValues:m,type:x,form:a,modalTitle:C,handleDelete:function(t){console.log("\u5220\u9664, id:",t),O({title:"\u786e\u8ba4\u8981\u5220\u9664\u5417\uff1f",onOk:function(){j.a.light.routerDelete({ids:[t]}).then((function(t){200===t.code&&e.onDispatch(Object(b.a)())}))}})},handleAdd:function(){v("add"),T("\u6dfb\u52a0\u5e94\u7528"),p(A),console.log(A),l(!0)},handleEdit:function(e){var t=N.find((function(t){return t.id===e}));console.log("\u7f16\u8f91, id:",t),v("edit"),T("\u4fee\u6539\u540d\u79f0"),p(Object(n.a)(Object(n.a)({},m),t)),l(!0)},setIsModalVisible:l,handleFinish:function(e){console.log("Success:",e),"add"===x?(e.path="/light/index/content",j.a.light.routerAdd({dataItem:e}).then((function(e){200===e.code&&(l(!1),E())}))):"edit"===x&&j.a.light.routerEdit({id:m.id,dataItem:Object(n.a)(Object(n.a)({},m),e)}).then((function(e){200===e.code&&(l(!1),E())}))},handleFinishFailed:function(e){console.log("Failed:",e)},handleJumpToSet:function(t){e.history.push("/light/admin/setApplicationPlus?id=".concat(t))}}}(e),a=t.isModalVisible,i=t.initValues,c=t.type,g=t.form,x=t.modalTitle,v=t.handleDelete,S=t.handleAdd,y=t.handleEdit,C=t.setIsModalVisible,T=t.handleFinish,N=t.handleFinishFailed,A=t.handleJumpToSet,E=e.router;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"m-admin-content home",children:[Object(p.jsxs)("div",{className:"m-admin-row",children:[Object(p.jsx)("div",{className:"m-adimn-row-title",children:"\u81ea\u5b9a\u4e49\u5e94\u7528"}),Object(p.jsxs)("div",{className:"m-app-wrap",children:[E.map((function(e){return Object(p.jsxs)("div",{className:"m-app-item",title:e.title,onClick:function(){return A(e.id)},children:[Object(p.jsx)(o.a,{overlay:Object(p.jsxs)(l.a,{onClick:function(e){return e.domEvent.stopPropagation()},children:[Object(p.jsx)(l.a.Item,{onClick:function(){return y(e.id)},children:"\u4fee\u6539\u540d\u79f0"},"0"),Object(p.jsx)(l.a.Item,{onClick:function(){return v(e.id)},children:"\u5220\u9664\u5e94\u7528"},"1")]}),children:Object(p.jsx)("span",{className:"m-app-item-icon",children:Object(p.jsx)(h.b,{name:"more"})})}),e.title]},e.id)})),Object(p.jsxs)("div",{className:"m-app-item",onClick:S,children:[Object(p.jsx)(h.b,{name:"add",className:"m-application-icon"}),"\u521b\u5efa\u65b0\u5e94\u7528"]})]})]}),Object(p.jsx)(s.a,{title:x,visible:a,onCancel:function(){return C(!1)},footer:null,forceRender:!0,children:Object(p.jsxs)(d.a,{form:g,labelCol:{span:4},wrapperCol:{span:17},initialValues:Object(n.a)({},i),onFinish:T,onFinishFailed:N,children:[Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d.a.Item,{label:"\u5e94\u7528\u540d\u79f0",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0\uff01"}],children:Object(p.jsx)(m.a,{})})}),Object(p.jsxs)(d.a.Item,{wrapperCol:{offset:4,span:17},className:"m-modal-footer",children:[("add"===c||"edit"===c)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(u.a,{type:"primary",htmlType:"submit",className:"m-space",children:[Object(p.jsx)(h.b,{name:"submit",className:"m-tool-btn-icon"}),"\u63d0\u4ea4"]}),Object(p.jsxs)(u.a,{className:"m-space",onClick:function(){g.resetFields()},children:[Object(p.jsx)(h.b,{name:"reset",className:"m-tool-btn-icon"}),"\u91cd\u7f6e"]})]}),Object(p.jsx)(u.a,{className:"m-space",onClick:function(){return C(!1)},children:"\u53d6\u6d88"})]})]})})]})})})))}}]);
//# sourceMappingURL=9.c4e18057.chunk.js.map