(this.webpackJsonpair=this.webpackJsonpair||[]).push([[9],{115:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var a=n(114),r=(n(65),n(365)),o=n(363),c=n(134),i=n.n(c),l=n(9),s=r.a.TextArea,u=function(e){return function(e){var t={},n=e.split("?");if(n.length<=1)return t;for(var a=0,r=(n=n[1].split("&")).length;a<r;a++){var o=n[a].split("=");t[o[0]]=o[1]}return t}(e.location.search)},d=function(e){var t=/http(s)?:\/\/([A-Za-z0123456789:.-]+)\/\S+/.exec(e);if(t)return"http://"+t[2]},f=function(){return[{id:1,title:"\u5355\u884c\u6587\u672c",formComponentName:"Input",component:Object(l.jsx)(r.a,{}),getComponent:function(e){var t=e.props;return Object(l.jsx)(r.a,Object(a.a)({},t))}},{id:2,title:"\u591a\u884c\u6587\u672c",formComponentName:"TextArea",component:Object(l.jsx)(s,{}),getComponent:function(e){var t=e.props;return Object(l.jsx)(s,Object(a.a)({},t))}},{id:3,title:"\u6570\u5b57",formComponentName:"InputNumber",component:Object(l.jsx)(o.a,{style:{width:"100%"}}),getComponent:function(e){var t=e.props;return Object(l.jsx)(o.a,Object(a.a)({style:{width:"100%"}},t))}},{id:4,title:"\u56fe\u7247",formComponentName:"Image",component:Object(l.jsx)("img",{style:{width:"100%"},alt:"\u56fe\u7247"}),getComponent:function(e){var t=e.props;return Object(l.jsx)("img",Object(a.a)(Object(a.a)({style:{width:"100%"}},t),{},{alt:"\u56fe\u7247"}))}}]},m=function(){return[{id:1,title:"span\u6807\u7b7e",renderFunName:"renderSpan",formComponentNameArr:["Input","TextArea"],render:function(e){return Object(l.jsx)("span",{children:e})}},{id:2,title:"\u65e5\u671f",renderFunName:"renderDatetime",formComponentNameArr:[],render:function(e){return Object(l.jsx)("span",{children:e?i()(e).format("YYYY-MM-DD HH:mm:ss"):""})}},{id:3,title:"\u56fe\u7247",renderFunName:"renderImage",formComponentNameArr:["Image"],render:function(e){return Object(l.jsx)("img",{alt:"\u56fe\u7247",src:e})}}]}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://efficacious-tiny-infinity.glitch.me";console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/air",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MODE:"test"})),console.log(a)},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return g}));var a=n(0),r=n(9);function o(e){var t=e.name,n=e.className,a=e.title;return Object(r.jsx)("span",{className:"icon iconfont icon-".concat(t," ").concat(n||""),title:a,onClick:e.onClick})}var c=n(359);var i=function(e){var t=e.dataSource,n=e.total,a=e.current,o=e.pageSize,i=e.getColumns;return Object(r.jsx)("div",{className:"m-content-table",children:Object(r.jsx)(c.a,{className:"m-my-table",columns:i(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},rowSelection:{onChange:function(t,n){return e.onRowSelect(t,n)}},pagination:{current:a,total:n,pageSize:o,onChange:function(t,n){return e.onSearch({page:t,pageSize:n})},showSizeChanger:!0,pageSizeOptions:[10,20,50],onShowSizeChange:function(t,n){return e.onSearch({page:t,pageSize:n})},showTotal:function(e){return Object(r.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(r.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})};var l=function(e){var t=e.dataSource,n=e.getColumns;return Object(r.jsx)("div",{className:"m-content-table",children:Object(r.jsx)(c.a,{className:"m-my-table",columns:n(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},pagination:{showTotal:function(e){return Object(r.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(r.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})},s=n(114),u=n(121),d=n(218),f=n(365);function m(e){var t=e.value,n=void 0===t?{}:t,o=e.onChange,c=Object(a.useState)(!1),i=Object(u.a)(c,2),l=i[0],m=i[1],p=Object(a.useState)(),b=Object(u.a)(p,2),h=b[0],j=b[1],O=function(e){o(Object(s.a)(Object(s.a)({required:l,message:h},n),e))},g=!1,v="";return n&&"boolean"===typeof n.required?(g=n.required,v=n.message):(g=l,v=h),Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{checked:g,onChange:function(e){m(e.target.checked),O({required:e.target.checked})},children:"\u5fc5\u586b"}),Object(r.jsx)(f.a,{className:"m-fields-required-input ".concat(g?"active":""),value:v,onChange:function(e){j(e.target.value),O({message:e.target.value})},placeholder:"\u8bf7\u8f93\u5165\u5fc5\u586b\u63d0\u793a\u8bed"})]})}var p=n(89),b=n(360),h=n(122),j=n(120),O=n(115);function g(e){var t=e.value,n=void 0===t?"":t,a=e.msg,o=e.onChange,c=e.accept,i=void 0===c?".jpg":c,l={uid:"-1",name:n,status:"done",url:n},u=[];n&&u.push(l);var d={name:"file",action:j.a.light.testUpload,maxCount:1,listType:"picture",defaultFileList:[].concat(u),accept:i,onChange:function(e){if("done"===e.file.status){if(p.b.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f")),1===e.file.response.state){var t=Object(O.b)("https://efficacious-tiny-infinity.glitch.me/api/upload");console.log(t);var n="".concat(Object(O.b)(e.file.xhr.responseURL),"/").concat(e.file.response.data.filename);console.log(n),o(n)}}else"error"===e.file.status&&p.b.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return Object(r.jsx)("span",{children:Object(r.jsxs)(b.a,Object(s.a)(Object(s.a)({},d),{},{children:[Object(r.jsx)(h.a,{children:"\u4e0a\u4f20\u56fe\u7247"}),Object(r.jsx)("span",{className:"m-upload-text",children:a})]}))})}},120:function(e,t,n){"use strict";var a={light:{testUpload:n(117).a+"/api/upload",templateSearch:"/api/template/search",templateAdd:"/api/template/add",templateDelete:"/api/template/delete",templateEdit:"/api/template/edit",easyTemplateSearch:"/api/easyTemplate/search",easyTemplateAdd:"/api/easyTemplate/add",easyTemplateDelete:"/api/easyTemplate/delete",easyTemplateEdit:"/api/easyTemplate/edit",routerSearch:"/api/router/search",routerAdd:"/api/router/add",routerDelete:"/api/router/delete",routerEdit:"/api/router/edit",tableSearch:"/api/table/search",tableAdd:"/api/table/add",tableDelete:"/api/table/delete",tableEdit:"/api/table/edit",fieldsSearch:"/api/fields/search",fieldsAdd:"/api/fields/add",fieldsDelete:"/api/fields/delete",fieldsEdit:"/api/fields/edit",fieldsEditAll:"/api/fields/editAll"}};t.a=a},123:function(e,t,n){"use strict";var a=n(120),r=n(136),o=n.n(r),c=n(137),i=n(114),l=n(138),s=n.n(l),u=n(89),d=n(117);s.a.defaults.baseURL=d.a,s.a.interceptors.request.use((function(e){return e.headers.token=localStorage.getItem("token")||"","get"===e.method?e.params=Object(i.a)({},e.data):e.data=Object(i.a)({},e.data),e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400===e.data.code?(u.b.warning(e.data.message),e.data):Promise.reject(e)}));var f=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={light:{templateSearch:function(e){return f({url:a.a.light.templateSearch,data:e,method:"post"})},templateAdd:function(e){return f({url:a.a.light.templateAdd,data:e,method:"post"})},templateDelete:function(e){return f({url:a.a.light.templateDelete,data:e,method:"post"})},templateEdit:function(e){return f({url:a.a.light.templateEdit,data:e,method:"post"})},easyTemplateSearch:function(e){return f({url:a.a.light.easyTemplateSearch,data:e,method:"post"})},easyTemplateAdd:function(e){return f({url:a.a.light.easyTemplateAdd,data:e,method:"post"})},easyTemplateDelete:function(e){return f({url:a.a.light.easyTemplateDelete,data:e,method:"post"})},easyTemplateEdit:function(e){return f({url:a.a.light.easyTemplateEdit,data:e,method:"post"})},routerSearch:function(e){return f({url:a.a.light.routerSearch,data:e,method:"post"})},routerAdd:function(e){return f({url:a.a.light.routerAdd,data:e,method:"post"})},routerDelete:function(e){return f({url:a.a.light.routerDelete,data:e,method:"post"})},routerEdit:function(e){return f({url:a.a.light.routerEdit,data:e,method:"post"})},tableSearch:function(e){return f({url:a.a.light.tableSearch,data:e,method:"post"})},tableAdd:function(e){return f({url:a.a.light.tableAdd,data:e,method:"post"})},tableDelete:function(e){return f({url:a.a.light.tableDelete,data:e,method:"post"})},tableEdit:function(e){return f({url:a.a.light.tableEdit,data:e,method:"post"})},fieldsSearch:function(e){return f({url:a.a.light.fieldsSearch,data:e,method:"post"})},fieldsAdd:function(e){return f({url:a.a.light.fieldsAdd,data:e,method:"post"})},fieldsDelete:function(e){return f({url:a.a.light.fieldsDelete,data:e,method:"post"})},fieldsEdit:function(e){return f({url:a.a.light.fieldsEdit,data:e,method:"post"})},fieldsEditAll:function(e){return f({url:a.a.light.fieldsEditAll,data:e,method:"post"})}}};t.a=m},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(123),r=function(e){return function(t){a.a.light.routerSearch().then((function(n){200===n.code&&(t({type:"SET_LIGHT_STATE",key:["router"],value:n.data}),e&&e())}))}}},161:function(e,t,n){"use strict";var a=n(4),r=n(2),o=n(0),c=n(143),i=n(12),l=n.n(i),s=n(62),u=n(3),d=n(5);var f=n(122),m=n(126),p=function(e){var t=o.useRef(!1),n=o.useRef(),a=o.useState(!1),c=Object(d.a)(a,2),i=c[0],l=c[1];o.useEffect((function(){var t;if(e.autoFocus){var a=n.current;t=setTimeout((function(){return a.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var s=e.type,u=e.children,p=e.prefixCls,b=e.buttonProps;return o.createElement(f.a,Object(r.a)({},Object(m.a)(s),{onClick:function(){var n=e.actionFn,a=e.closeModal;if(!t.current)if(t.current=!0,n){var r;if(n.length)r=n(a),t.current=!1;else if(!(r=n()))return void a();!function(n){var a=e.closeModal;n&&n.then&&(l(!0),n.then((function(){a.apply(void 0,arguments)}),(function(e){console.error(e),l(!1),t.current=!1})))}(r)}else a()},loading:i,prefixCls:p},b,{ref:n}),u)},b=n(58),h=n(25),j=n(118),O=function(e){var t=e.icon,n=e.onCancel,r=e.onOk,c=e.close,i=e.zIndex,s=e.afterClose,u=e.visible,d=e.keyboard,f=e.centered,m=e.getContainer,O=e.maskStyle,g=e.okText,v=e.okButtonProps,C=e.cancelText,x=e.cancelButtonProps,y=e.direction,T=e.prefixCls,E=e.rootPrefixCls,k=e.bodyStyle,S=e.closable,N=void 0!==S&&S,w=e.closeIcon,A=e.modalRender,F=e.focusTriggerAfterClose;Object(b.a)(!("string"===typeof t&&t.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t,"` at https://ant.design/components/icon"));var P=e.okType||"primary",I="".concat(T,"-confirm"),D=!("okCancel"in e)||e.okCancel,R=e.width||416,M=e.style||{},_=void 0===e.mask||e.mask,z=void 0!==e.maskClosable&&e.maskClosable,L=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),H=l()(I,"".concat(I,"-").concat(e.type),Object(a.a)({},"".concat(I,"-rtl"),"rtl"===y),e.className),V=D&&o.createElement(p,{actionFn:n,closeModal:c,autoFocus:"cancel"===L,buttonProps:x,prefixCls:"".concat(E,"-btn")},C);return o.createElement(J,{prefixCls:T,className:H,wrapClassName:l()(Object(a.a)({},"".concat(I,"-centered"),!!e.centered)),onCancel:function(){return c({triggerCancel:!0})},visible:u,title:"",footer:"",transitionName:Object(j.b)(E,"zoom",e.transitionName),maskTransitionName:Object(j.b)(E,"fade",e.maskTransitionName),mask:_,maskClosable:z,maskStyle:O,style:M,width:R,zIndex:i,afterClose:s,keyboard:d,centered:f,getContainer:m,closable:N,closeIcon:w,modalRender:A,focusTriggerAfterClose:F},o.createElement("div",{className:"".concat(I,"-body-wrapper")},o.createElement(h.a,{prefixCls:E},o.createElement("div",{className:"".concat(I,"-body"),style:k},t,void 0===e.title?null:o.createElement("span",{className:"".concat(I,"-title")},e.title),o.createElement("div",{className:"".concat(I,"-content")},e.content))),o.createElement("div",{className:"".concat(I,"-btns")},V,o.createElement(p,{type:P,actionFn:r,closeModal:c,autoFocus:"ok"===L,buttonProps:v,prefixCls:"".concat(E,"-btn")},g))))},g=n(34),v=n(40),C=n(28),x=function(e,t){var n=e.afterClose,a=e.config,c=o.useState(!0),i=Object(d.a)(c,2),l=i[0],s=i[1],u=o.useState(a),f=Object(d.a)(u,2),m=f[0],p=f[1],b=o.useContext(C.b),h=b.direction,j=b.getPrefixCls,x=j("modal"),y=j();function T(){s(!1);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.some((function(e){return e&&e.triggerCancel}));m.onCancel&&a&&m.onCancel()}return o.useImperativeHandle(t,(function(){return{destroy:T,update:function(e){p((function(t){return Object(r.a)(Object(r.a)({},t),e)}))}}})),o.createElement(v.a,{componentName:"Modal",defaultLocale:g.a.Modal},(function(e){return o.createElement(O,Object(r.a)({prefixCls:x,rootPrefixCls:y},m,{close:T,visible:l,afterClose:n,okText:m.okText||(m.okCancel?e.okText:e.justOkText),direction:h,cancelText:m.cancelText||e.cancelText}))}))},y=o.forwardRef(x),T=n(23),E=n(68),k=n(67),S=n(69),N=n(70),w=n(33),A=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},F="";function P(e){var t=document.createElement("div");document.body.appendChild(t);var n=Object(r.a)(Object(r.a)({},e),{close:i,visible:!0});function a(){var n=T.unmountComponentAtNode(t);n&&t.parentNode&&t.parentNode.removeChild(t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var c=r.some((function(e){return e&&e.triggerCancel}));e.onCancel&&c&&e.onCancel.apply(e,r);for(var l=0;l<B.length;l++){var s=B[l];if(s===i){B.splice(l,1);break}}}function c(e){var n=e.okText,a=e.cancelText,c=e.prefixCls,i=A(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=Object(w.b)(),l=(0,Object(h.b)().getPrefixCls)(void 0,F),s=c||"".concat(l,"-modal");T.render(o.createElement(O,Object(r.a)({},i,{prefixCls:s,rootPrefixCls:l,okText:n||(i.okCancel?e.okText:e.justOkText),cancelText:a||e.cancelText})),t)}))}function i(){for(var t=this,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];c(n=Object(r.a)(Object(r.a)({},n),{visible:!1,afterClose:function(){"function"===typeof e.afterClose&&e.afterClose(),a.apply(t,i)}}))}return c(n),B.push(i),{destroy:i,update:function(e){c(n="function"===typeof e?e(n):Object(r.a)(Object(r.a)({},n),e))}}}function I(e){return Object(r.a)(Object(r.a)({icon:o.createElement(N.a,null),okCancel:!1},e),{type:"warning"})}function D(e){return Object(r.a)(Object(r.a)({icon:o.createElement(E.a,null),okCancel:!1},e),{type:"info"})}function R(e){return Object(r.a)(Object(r.a)({icon:o.createElement(k.a,null),okCancel:!1},e),{type:"success"})}function M(e){return Object(r.a)(Object(r.a)({icon:o.createElement(S.a,null),okCancel:!1},e),{type:"error"})}function _(e){return Object(r.a)(Object(r.a)({icon:o.createElement(N.a,null),okCancel:!0},e),{type:"confirm"})}var z=0,L=o.memo(o.forwardRef((function(e,t){var n=function(){var e=o.useState([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return[n,o.useCallback((function(e){return a((function(t){return[].concat(Object(u.a)(t),[e])})),function(){a((function(t){return t.filter((function(t){return t!==e}))}))}}),[])]}(),a=Object(d.a)(n,2),r=a[0],c=a[1];return o.useImperativeHandle(t,(function(){return{patchElement:c}}),[]),o.createElement(o.Fragment,null,r)})));var H,V=n(141),q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},B=[];Object(V.a)()&&document.documentElement.addEventListener("click",(function(e){H={x:e.pageX,y:e.pageY},setTimeout((function(){H=null}),100)}),!0);var U=function(e){var t,n=o.useContext(C.b),i=n.getPopupContainer,u=n.getPrefixCls,d=n.direction,p=function(t){var n=e.onCancel;null===n||void 0===n||n(t)},b=function(t){var n=e.onOk;null===n||void 0===n||n(t)},h=function(t){var n=e.okText,a=e.okType,c=e.cancelText,i=e.confirmLoading;return o.createElement(o.Fragment,null,o.createElement(f.a,Object(r.a)({onClick:p},e.cancelButtonProps),c||t.cancelText),o.createElement(f.a,Object(r.a)({},Object(m.a)(a),{loading:i,onClick:b},e.okButtonProps),n||t.okText))},O=e.prefixCls,g=e.footer,x=e.visible,y=e.wrapClassName,T=e.centered,E=e.getContainer,k=e.closeIcon,S=e.focusTriggerAfterClose,N=void 0===S||S,A=q(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),F=u("modal",O),P=u(),I=o.createElement(v.a,{componentName:"Modal",defaultLocale:Object(w.b)()},h),D=o.createElement("span",{className:"".concat(F,"-close-x")},k||o.createElement(s.a,{className:"".concat(F,"-close-icon")})),R=l()(y,(t={},Object(a.a)(t,"".concat(F,"-centered"),!!T),Object(a.a)(t,"".concat(F,"-wrap-rtl"),"rtl"===d),t));return o.createElement(c.a,Object(r.a)({},A,{getContainer:void 0===E?i:E,prefixCls:F,wrapClassName:R,footer:void 0===g?I:g,visible:x,mousePosition:H,onClose:p,closeIcon:D,focusTriggerAfterClose:N,transitionName:Object(j.b)(P,"zoom",e.transitionName),maskTransitionName:Object(j.b)(P,"fade",e.maskTransitionName)}))};U.useModal=function(){var e=o.useRef(null),t=o.useState([]),n=Object(d.a)(t,2),a=n[0],r=n[1];o.useEffect((function(){a.length&&(Object(u.a)(a).forEach((function(e){e()})),r([]))}),[a]);var c=o.useCallback((function(t){return function(n){var a;z+=1;var c,i=o.createRef(),l=o.createElement(y,{key:"modal-".concat(z),config:t(n),ref:i,afterClose:function(){c()}});return c=null===(a=e.current)||void 0===a?void 0:a.patchElement(l),{destroy:function(){function e(){var e;null===(e=i.current)||void 0===e||e.destroy()}i.current?e():r((function(t){return[].concat(Object(u.a)(t),[e])}))},update:function(e){function t(){var t;null===(t=i.current)||void 0===t||t.update(e)}i.current?t():r((function(e){return[].concat(Object(u.a)(e),[t])}))}}}}),[]);return[o.useMemo((function(){return{info:c(D),success:c(R),error:c(M),warning:c(I),confirm:c(_)}}),[]),o.createElement(L,{ref:e})]},U.defaultProps={width:520,confirmLoading:!1,visible:!1,okType:"primary"};var J=U;function K(e){return P(I(e))}var Y=J;Y.info=function(e){return P(D(e))},Y.success=function(e){return P(R(e))},Y.error=function(e){return P(M(e))},Y.warning=K,Y.warn=K,Y.confirm=function(e){return P(_(e))},Y.destroyAll=function(){for(;B.length;){var e=B.pop();e&&e()}},Y.config=function(e){var t=e.rootPrefixCls;Object(b.a)(!1,"Modal","Modal.config is deprecated. Please use ConfigProvider.config instead."),F=t};t.a=Y},371:function(e,t,n){"use strict";n.r(t);var a=n(114),r=n(0),o=n(63),c=n(6),i=n(219),l=n(216),s=n(161),u=n(361),d=n(122),f=n(365),m=n(9),p=n(119),b=n(121),h=n(123),j=n(144),O=s.a.confirm;t.default=Object(o.b)((function(e){return{router:e.getIn(["light","router"]).toJS()}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(c.g)((function(e){var t=function(e){var t=u.a.useForm(),n=Object(b.a)(t,1)[0],o=Object(r.useState)(!1),c=Object(b.a)(o,2),i=c[0],l=c[1],s=Object(r.useState)({}),d=Object(b.a)(s,2),f=d[0],m=d[1],p=Object(r.useState)("add"),g=Object(b.a)(p,2),v=g[0],C=g[1],x=Object(r.useState)(),y=Object(b.a)(x,2),T=y[0],E=y[1],k=e.router,S={},N=function(){e.onDispatch(Object(j.a)())};return Object(r.useEffect)((function(){N()}),[]),Object(r.useEffect)((function(){n.resetFields()}),[i,n]),{isModalVisible:i,initValues:f,type:v,form:n,modalTitle:T,handleDelete:function(t){console.log("\u5220\u9664, id:",t),O({title:"\u786e\u8ba4\u8981\u5220\u9664\u5417\uff1f",onOk:function(){h.a.light.routerDelete({ids:[t]}).then((function(t){200===t.code&&e.onDispatch(Object(j.a)())}))}})},handleAdd:function(){C("add"),E("\u6dfb\u52a0\u5e94\u7528"),m(S),console.log(S),l(!0)},handleEdit:function(e){var t=k.find((function(t){return t.id===e}));console.log("\u7f16\u8f91, id:",t),C("edit"),E("\u4fee\u6539\u540d\u79f0"),m(Object(a.a)(Object(a.a)({},f),t)),l(!0)},setIsModalVisible:l,handleFinish:function(e){console.log("Success:",e),"add"===v?(e.path="/light/index/content",h.a.light.routerAdd({dataItem:e}).then((function(e){200===e.code&&(l(!1),N())}))):"edit"===v&&h.a.light.routerEdit({id:f.id,dataItem:Object(a.a)(Object(a.a)({},f),e)}).then((function(e){200===e.code&&(l(!1),N())}))},handleFinishFailed:function(e){console.log("Failed:",e)},handleJumpToSet:function(t){e.history.push("/light/admin/setApplication?id=".concat(t))}}}(e),n=t.isModalVisible,o=t.initValues,c=t.type,g=t.form,v=t.modalTitle,C=t.handleDelete,x=t.handleAdd,y=t.handleEdit,T=t.setIsModalVisible,E=t.handleFinish,k=t.handleFinishFailed,S=t.handleJumpToSet,N=e.router;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"m-admin-content home",children:[Object(m.jsxs)("div",{className:"m-admin-row",children:[Object(m.jsx)("div",{className:"m-adimn-row-title",children:"\u81ea\u5b9a\u4e49\u5e94\u7528"}),Object(m.jsxs)("div",{className:"m-app-wrap",children:[N.map((function(e){return Object(m.jsxs)("div",{className:"m-app-item",title:e.title,onClick:function(){return S(e.id)},children:[Object(m.jsx)(i.a,{overlay:Object(m.jsxs)(l.a,{onClick:function(e){return e.domEvent.stopPropagation()},children:[Object(m.jsx)(l.a.Item,{onClick:function(){return y(e.id)},children:"\u4fee\u6539\u540d\u79f0"},"0"),Object(m.jsx)(l.a.Item,{onClick:function(){return C(e.id)},children:"\u5220\u9664\u5e94\u7528"},"1")]}),children:Object(m.jsx)("span",{className:"m-app-item-icon",children:Object(m.jsx)(p.b,{name:"more"})})}),e.title]},e.id)})),Object(m.jsxs)("div",{className:"m-app-item",onClick:x,children:[Object(m.jsx)(p.b,{name:"add",className:"m-application-icon"}),"\u521b\u5efa\u65b0\u5e94\u7528"]})]})]}),Object(m.jsx)(s.a,{title:v,visible:n,onCancel:function(){return T(!1)},footer:null,forceRender:!0,children:Object(m.jsxs)(u.a,{form:g,labelCol:{span:4},wrapperCol:{span:17},initialValues:Object(a.a)({},o),onFinish:E,onFinishFailed:k,children:[Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a.Item,{label:"\u5e94\u7528\u540d\u79f0",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0\uff01"}],children:Object(m.jsx)(f.a,{})})}),Object(m.jsxs)(u.a.Item,{wrapperCol:{offset:4,span:17},className:"m-modal-footer",children:[("add"===c||"edit"===c)&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.a,{type:"primary",htmlType:"submit",className:"m-space",children:[Object(m.jsx)(p.b,{name:"submit",className:"m-tool-btn-icon"}),"\u63d0\u4ea4"]}),Object(m.jsxs)(d.a,{className:"m-space",onClick:function(){g.resetFields()},children:[Object(m.jsx)(p.b,{name:"reset",className:"m-tool-btn-icon"}),"\u91cd\u7f6e"]})]}),Object(m.jsx)(d.a,{className:"m-space",onClick:function(){return T(!1)},children:"\u53d6\u6d88"})]})]})})]})})})))}}]);