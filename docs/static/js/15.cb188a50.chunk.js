(this.webpackJsonpair=this.webpackJsonpair||[]).push([[15],{118:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return g}));var a=n(0),c=n(9);function o(e){var t=e.name,n=e.className,a=e.title;return Object(c.jsx)("span",{className:"icon iconfont icon-".concat(t," ").concat(n||""),title:a,onClick:e.onClick})}var i=n(320);var l=function(e){var t=e.dataSource,n=e.total,a=e.current,o=e.pageSize,l=e.getColumns;return Object(c.jsx)("div",{className:"m-content-table",children:Object(c.jsx)(i.a,{className:"m-my-table",columns:l(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},rowSelection:{onChange:function(t,n){return e.onRowSelect(t,n)}},pagination:{current:a,total:n,pageSize:o,onChange:function(t,n){return e.onSearch({page:t,pageSize:n})},showSizeChanger:!0,pageSizeOptions:[10,20,50],onShowSizeChange:function(t,n){return e.onSearch({page:t,pageSize:n})},showTotal:function(e){return Object(c.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(c.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})};var r=function(e){var t=e.dataSource,n=e.getColumns;return Object(c.jsx)("div",{className:"m-content-table",children:Object(c.jsx)(i.a,{className:"m-my-table",columns:n(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},pagination:{showTotal:function(e){return Object(c.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(c.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})},s=n(114),u=n(120),d=n(201),b=n(326);function j(e){var t=e.value,n=void 0===t?{}:t,o=e.onChange,i=Object(a.useState)(!1),l=Object(u.a)(i,2),r=l[0],j=l[1],m=Object(a.useState)(),f=Object(u.a)(m,2),h=f[0],O=f[1],p=function(e){o(Object(s.a)(Object(s.a)({required:r,message:h},n),e))},g=!1,S="";return n&&"boolean"===typeof n.required?(g=n.required,S=n.message):(g=r,S=h),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{checked:g,onChange:function(e){j(e.target.checked),p({required:e.target.checked})},children:"\u5fc5\u586b"}),Object(c.jsx)(b.a,{className:"m-fields-required-input ".concat(g?"active":""),value:S,onChange:function(e){O(e.target.value),p({message:e.target.value})},placeholder:"\u8bf7\u8f93\u5165\u5fc5\u586b\u63d0\u793a\u8bed"})]})}var m=n(89),f=n(321),h=n(131),O=n(119),p=n(115);function g(e){var t=e.value,n=void 0===t?"":t,a=e.msg,o=e.onChange,i=e.accept,l=void 0===i?".jpg":i,r={uid:"-1",name:n,status:"done",url:n},u=[];n&&u.push(r);var d={name:"file",action:O.a.light.testUpload,maxCount:1,listType:"picture",defaultFileList:[].concat(u),accept:l,onChange:function(e){if("done"===e.file.status){if(m.b.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f")),1===e.file.response.state){var t="".concat(Object(p.b)(e.file.xhr.responseURL),"/").concat(e.file.response.data.filename);console.log(t),o(t)}}else"error"===e.file.status&&m.b.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return Object(c.jsx)("span",{children:Object(c.jsxs)(f.a,Object(s.a)(Object(s.a)({},d),{},{children:[Object(c.jsx)(h.a,{children:"\u4e0a\u4f20\u56fe\u7247"}),Object(c.jsx)("span",{className:"m-upload-text",children:a})]}))})}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(129);var c=n(137);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},303:function(e,t,n){"use strict";var a=n(198);t.a=a.a},307:function(e,t,n){"use strict";n.r(t);var a=n(114),c=n(0),o=n(62),i=n(6),l=n(327),r=n(322),s=n(131),u=n(118),d=n(9);var b=function(e){var t=e.onAdd;return Object(d.jsx)("div",{className:"m-content-tool",children:Object(d.jsx)("div",{className:"m-content-tool-row",children:Object(d.jsxs)(s.a,{className:"m-space",type:"primary",onClick:t,children:[Object(d.jsx)(u.b,{name:"add",className:"m-tool-btn-icon"}),"\u6dfb\u52a0"]})})})},j=n(142),m=(n(303),n(326)),f=function(e){return[].concat(Object(j.a)(e.columns),[{title:"\u64cd\u4f5c",width:220,render:function(t){return Object(d.jsxs)("div",{className:"m-action",children:[Object(d.jsx)(s.a,{className:"m-action-btn",size:"small",danger:!0,onClick:function(){return e.onDelete(t)},children:"\u5220\u9664"}),Object(d.jsx)(s.a,{className:"m-action-btn",size:"small",onClick:function(){return e.onCheck(t)},children:"\u67e5\u770b"}),Object(d.jsx)(s.a,{className:"m-action-btn",size:"small",onClick:function(){return e.onEdit(t)},children:"\u7f16\u8f91"})]})}}])},h=n(120),O=n(121),p=n(115);var g=l.a.confirm;function S(e){var t=Object(c.useState)(),n=Object(h.a)(t,2),o=n[0],i=n[1],l=Object(c.useState)(1),s=Object(h.a)(l,2),u=s[0],b=s[1],j=Object(c.useState)({columns:[],dataSource:[],pageSize:10}),f=Object(h.a)(j,2),S=f[0],v=f[1],x=r.a.useForm(),C=Object(h.a)(x,1)[0],N=Object(c.useState)(!1),k=Object(h.a)(N,2),y=k[0],F=k[1],w=Object(c.useState)({}),z=Object(h.a)(w,2),I=z[0],T=z[1],E=Object(c.useState)("add"),A=Object(h.a)(E,2),R=A[0],M=A[1],V=Object(c.useState)(),D=Object(h.a)(V,2),q=D[0],L=D[1],J=Object(c.useState)([]),K=Object(h.a)(J,2),P=K[0],U=K[1],_={getColumns:function(e){return e.filter((function(e){return e.isColumn})).map((function(e){return{title:e.title,dataIndex:e.dataIndex,render:function(t,n){var a=Object(p.c)().find((function(t){return t.renderFunName===e.renderFunName}));return a?a.render(t,n):t}}}))},getModalFields:function(e){var t=[];return e.forEach((function(e){if(e.isModalField){var n=Object(p.a)().find((function(t){return t.formComponentName===e.formComponentName}));t.push(Object(d.jsx)(r.a.Item,{label:e.title,name:e.dataIndex,rules:e.rules,children:n?n.component:Object(d.jsx)(m.a,{})},e.id))}})),t}},G=_.getColumns,H=_.getModalFields,B=Object(p.d)(e).id-0,Q={},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,n=void 0===t?1:t,a=e.pageSize,c=void 0===a?S.pageSize:a,o=e.searchParams,l=void 0===o?{}:o;O.a.light.tableSearch({tableId:B,page:n,pageSize:c,searchParams:l}).then((function(e){200===e.code&&(v({columns:G(e.data.fields),dataSource:e.data.list,pageSize:e.data.pageSize}),U(H(e.data.fields)),i(e.data.total),b(e.data.current))}))};return Object(c.useEffect)((function(){W()}),[e.location.search]),Object(c.useEffect)((function(){C.resetFields()}),[y,C]),{dataSource:S.dataSource,total:o,current:u,pageSize:S.pageSize,columns:S.columns,isModalVisible:y,initValues:I,type:R,form:C,modalTitle:q,modalFields:P,handleSearch:W,handleDelete:function(e){console.log("\u5220\u9664, id:",e.id),g({title:"\u786e\u8ba4\u8981\u5220\u9664\u5417\uff1f",onOk:function(){O.a.light.tableDelete({tableId:B,ids:[e.id]}).then((function(e){200===e.code&&W()}))}})},handleAdd:function(){M("add"),T(Q),L("\u6dfb\u52a0"),F(!0)},handleEdit:function(e){console.log("\u7f16\u8f91, id:",e),M("edit"),T(Object(a.a)(Object(a.a)({},I),e)),L("\u7f16\u8f91"),F(!0)},handleCheck:function(e){M("check"),T(Object(a.a)(Object(a.a)({},I),e)),L("\u67e5\u770b"),F(!0)},setIsModalVisible:F,handleFinish:function(e){console.log("Success:",e),"add"===R?O.a.light.tableAdd({tableId:B,dataItem:e}).then((function(e){200===e.code&&(F(!1),W())})):"edit"===R&&O.a.light.tableEdit({tableId:B,id:I.id,dataItem:Object(a.a)(Object(a.a)({},I),e)}).then((function(e){200===e.code&&(F(!1),W())}))},handleFinishFailed:function(e){console.log("Failed:",e)}}}var v=n(89),x=l.a.confirm;t.default=Object(o.b)((function(e){return{}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(i.g)((function(e){var t=S(e),n=t.dataSource,o=t.total,i=t.current,j=t.pageSize,m=t.columns,O=t.isModalVisible,p=t.initValues,g=t.type,C=t.form,N=t.modalTitle,k=t.modalFields,y=t.handleSearch,F=t.handleDelete,w=t.handleAdd,z=t.handleEdit,I=t.handleCheck,T=t.setIsModalVisible,E=t.handleFinish,A=t.handleFinishFailed,R=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];return{handleRowSelect:function(e,t){console.log(e,t),a(e)},handleOperate:function(e){var t=e.type;0===n.length?v.b.warning("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u9879"):0===t?x({title:"\u786e\u8ba4\u8981\u6279\u91cf\u63d0\u4ea4\u767e\u5ea6\u5ba1\u6838\u5417?",onOk:function(){console.log(n)}}):1===t?x({title:"\u786e\u8ba4\u6279\u91cf\u66f4\u65b0\u6570\u636e\u5230\u767e\u5ea6\u5417?",onOk:function(){console.log(n)}}):2===t?x({title:"\u786e\u8ba4\u8981\u6279\u91cf\u67e5\u770b\u5ba1\u6838\u5417?",onOk:function(){console.log(n)}}):3===t?x({title:"\u786e\u8ba4\u8981\u6279\u91cf\u63d0\u4ea4\u767e\u5ea6\u5ba1\u6838\u5417?",onOk:function(){console.log(n)}}):4===t?x({title:"\u786e\u8ba4\u66f4\u65b0\u6570\u636e\u5230\u767e\u5ea6\u5417?",onOk:function(){console.log(n)}}):5===t?x({title:"\u786e\u8ba4\u8981\u67e5\u770b\u767e\u5ea6\u5ba1\u6838\u5417?",onOk:function(){console.log(n)}}):6===t&&x({title:"\u786e\u8ba4\u8981\u6279\u91cf\u7ed1\u5b9a\u5230\u5e97\u94fa\u5417?",onOk:function(){console.log(n)}})}}}().handleRowSelect;return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{onAdd:w}),Object(d.jsx)(u.c,{dataSource:n,total:o,current:i,pageSize:j,columns:m,onSearch:y,onDelete:F,onEdit:z,onCheck:I,onRowSelect:R,getColumns:f}),Object(d.jsx)(l.a,{title:N,visible:O,onCancel:function(){return T(!1)},footer:null,className:"m-index-content-modal",forceRender:!0,children:Object(d.jsxs)(r.a,{form:C,labelCol:{span:4},wrapperCol:{span:17},initialValues:Object(a.a)({},p),onFinish:E,onFinishFailed:A,children:[k,Object(d.jsxs)(r.a.Item,{wrapperCol:{offset:4,span:17},children:[("add"===g||"edit"===g)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(s.a,{type:"primary",htmlType:"submit",className:"m-space",children:[Object(d.jsx)(u.b,{name:"submit",className:"m-tool-btn-icon"}),"\u63d0\u4ea4"]}),Object(d.jsxs)(s.a,{className:"m-space",onClick:function(){C.resetFields()},children:[Object(d.jsx)(u.b,{name:"reset",className:"m-tool-btn-icon"}),"\u91cd\u7f6e"]})]}),Object(d.jsx)(s.a,{className:"m-space",onClick:function(){return T(!1)},children:"\u53d6\u6d88"})]})]})})]})})))}}]);
//# sourceMappingURL=15.cb188a50.chunk.js.map