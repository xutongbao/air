(this.webpackJsonpair=this.webpackJsonpair||[]).push([[3],{131:function(e,t,a){"use strict";a.d(t,"c",(function(){return n.a})),a.d(t,"f",(function(){return c})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return j})),a.d(t,"e",(function(){return v})),a.d(t,"a",(function(){return w})),a.d(t,"d",(function(){return A.a}));var n=a(150),r=a(0),i=a(327),o=a(9);var c=function(e){var t=e.dataSource,a=e.total,n=e.current,r=e.pageSize,c=e.getColumns;return Object(o.jsx)("div",{className:"m-content-table",children:Object(o.jsx)(i.a,{className:"m-my-table",columns:c(e),dataSource:t,rowKey:"id",scroll:{scrollToFirstRowOnChange:!0,x:!0},rowSelection:{onChange:function(t,a){return e.onRowSelect(t,a)}},pagination:{current:n,total:a,pageSize:r,onChange:function(t,a){return e.onSearch({page:t,pageSize:a})},showSizeChanger:!0,pageSizeOptions:[10,20,50,300],onShowSizeChange:function(t,a){return e.onSearch({page:t,pageSize:a})},showTotal:function(e){return Object(o.jsxs)("span",{children:["\u5171\u6709\u6570\u636e\uff1a ",Object(o.jsx)("span",{className:"m-total-text",children:e})," \u6761"]})}}})})};var s=a(31),l=a(132),u=a(99),d=a(100);function p(e){var t=e.value,a=void 0===t?{}:t,n=e.onChange,i=Object(r.useState)(!1),c=Object(l.a)(i,2),p=c[0],m=c[1],h=Object(r.useState)(),f=Object(l.a)(h,2),b=f[0],g=f[1],j=function(e){n(Object(s.a)(Object(s.a)({required:p,message:b},a),e))},O=!1,v="";return a&&"boolean"===typeof a.required?(O=a.required,v=a.message):(O=p,v=b),Object(o.jsxs)("div",{children:[Object(o.jsx)(u.a,{checked:O,onChange:function(e){m(e.target.checked),j({required:e.target.checked})},children:"\u5fc5\u586b"}),Object(o.jsx)(d.a,{className:"m-fields-required-input ".concat(O?"active":""),value:v,onChange:function(e){g(e.target.value),j({message:e.target.value})},placeholder:"\u8bf7\u8f93\u5165\u5fc5\u586b\u63d0\u793a\u8bed"})]})}var m=a(209),h=a(328),f=a(44),b=a(23),g=a(50);function j(e){var t=e.value,a=void 0===t?"":t,n=e.msg,r=e.onChange,i=e.accept,c=void 0===i?".jpg":i,l={uid:"-1",name:a,status:"done",url:a},u=[];a&&u.push(l);var d={name:"file",action:b.a.light.testUpload,maxCount:1,listType:"picture",defaultFileList:[].concat(u),accept:c,onChange:function(e){if("uploading"!==e.file.status&&(console.log(e.file,e.fileList),r(void 0)),"done"===e.file.status){if(m.b.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f")),1===e.file.response.state){var t="".concat(Object(g.e)(e.file.xhr.responseURL),"/").concat(e.file.response.data.filename);r(t)}}else"error"===e.file.status&&m.b.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return Object(o.jsx)("span",{children:Object(o.jsxs)(h.a,Object(s.a)(Object(s.a)({},d),{},{children:[Object(o.jsx)(f.a,{children:"\u4e0a\u4f20\u56fe\u7247"}),Object(o.jsx)("span",{className:"m-upload-text",children:n})]}))})}var O=a(329);function v(e){var t=e.dom,a=void 0===t?document.getElementById("m-content-wrap"):t;return Object(o.jsx)(O.a,{className:"m-back-top",target:function(){return a||window}})}var x=a(184),y=a(185),S=a(193),T=a(189),w=function(e){Object(S.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={error:null,isLoadingError:!1,errorInfo:null},n}return Object(y.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t});var a=e.toString();a.includes("ChunkLoadError")?(this.setState({isLoadingError:!0}),setTimeout((function(){window.location.reload()}),3e3)):(Object(g.a)({errorTitle:a,detail:t.componentStack}),this.setState({isLoadingError:!1}))}},{key:"render",value:function(){return this.state.errorInfo?Object(o.jsxs)("div",{className:"m-error-wrap",children:[Object(o.jsx)("div",{className:"m-error-img-wrap",children:Object(o.jsx)("div",{className:"m-error-img"})}),Object(o.jsx)("div",{className:"m-error-text",children:"\u7f51\u9875\u51fa\u9519\u4e86\uff0c\u8bf7\u5c1d\u8bd5\u5237\u65b0\u4e00\u4e0b~"}),this.state.isLoadingError&&Object(o.jsx)("div",{className:"m-error-text",children:"3\u79d2\u540e\u81ea\u52a8\u5237\u65b0~"}),Object(o.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(o.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){}}]),a}(r.Component),A=a(153)},148:function(e,t,a){"use strict";var n=a(23),r=a(145),i=a.n(r),o=a(201),c=a(31),s=a(202),l=a.n(s),u=a(209),d=a(98),p=a(203),m=a.n(p),h=a(50),f=!0,b=l.a.create();b.defaults.baseURL=d.a,b.interceptors.request.use((function(e){var t=localStorage.getItem("accessTokenForAdmin"),a=localStorage.getItem("userIdForAdmin");return t&&(e.headers.Authorization="Bearer "+t),e&&!1!==e.assignParam&&Object.assign(e.data||{},{loginUserId:a-0}),"get"===e.method&&(e.params=Object(c.a)({},e.data)),!1!==e.isLoading&&Object(h.i)(),e}),(function(e){return Promise.reject(e)})),b.interceptors.response.use((function(e){if(!1!==e.config.isLoading&&Object(h.h)(),200===e.data.code||1===e.data.state)return e.data;if(400===e.data.code||0===e.data.state){var t="";return t=e.data.message,e.data&&e.data.data&&(t+=e.data.data.error_msg?":".concat(e.data.data.error_msg," "):"",t+=e.data.data.error_code?e.data.data.error_code:""),!1!==e.config.isShowMessage&&u.b.warning(t),e.data}return Promise.reject(e)}),(function(e){Object(h.h)();var t=e.response;if("undefined"===typeof t)return Promise.reject(e);t?401===t.status?(f&&(u.b.warning("token\u5931\u6548,\u8bf7\u91cd\u65b0\u767b\u5f55!"),f=!1),setTimeout((function(){f=!0}),1e3),window.reactRouter.replace({pathname:"/light/login"})):(u.b.warning(e&&e.message),Object(h.a)({errorTitle:e.toString(),detail:"responseURL: ".concat(t.request&&t.request.responseURL)})):(u.b.warning(e&&e.message),Object(h.a)({errorTitle:e.toString(),detail:e.message}));return Promise.reject(e)}));var g=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"application/x-www-form-urlencoded"===t.contentType&&(t.headers={"content-type":"application/x-www-form-urlencoded"},t.data=m.a.stringify(t.data)),e.next=3,b(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={light:{testLogAdd:function(e){return g({url:n.a.light.testLogAdd,data:e,method:"post"})},templateSearch:function(e){return g({url:n.a.light.templateSearch,data:e,method:"post"})},templateAdd:function(e){return g({url:n.a.light.templateAdd,data:e,method:"post"})},templateDelete:function(e){return g({url:n.a.light.templateDelete,data:e,method:"post"})},templateEdit:function(e){return g({url:n.a.light.templateEdit,data:e,method:"post"})},easyTemplateSearch:function(e){return g({url:n.a.light.easyTemplateSearch,data:e,method:"post"})},easyTemplateAdd:function(e){return g({url:n.a.light.easyTemplateAdd,data:e,method:"post"})},easyTemplateDelete:function(e){return g({url:n.a.light.easyTemplateDelete,data:e,method:"post"})},easyTemplateEdit:function(e){return g({url:n.a.light.easyTemplateEdit,data:e,method:"post"})},routerSearch:function(e){return g({url:n.a.light.routerSearch,data:e,method:"post"})},routerAdd:function(e){return g({url:n.a.light.routerAdd,data:e,method:"post"})},routerDelete:function(e){return g({url:n.a.light.routerDelete,data:e,method:"post"})},routerEdit:function(e){return g({url:n.a.light.routerEdit,data:e,method:"post"})},tableSearch:function(e){return g({url:n.a.light.tableSearch,data:e,method:"post"})},tableAdd:function(e){return g({url:n.a.light.tableAdd,data:e,method:"post"})},tableDelete:function(e){return g({url:n.a.light.tableDelete,data:e,method:"post"})},tableEdit:function(e){return g({url:n.a.light.tableEdit,data:e,method:"post"})},fieldsSearch:function(e){return g({url:n.a.light.fieldsSearch,data:e,method:"post"})},fieldsAdd:function(e){return g({url:n.a.light.fieldsAdd,data:e,method:"post"})},fieldsDelete:function(e){return g({url:n.a.light.fieldsDelete,data:e,method:"post"})},fieldsEdit:function(e){return g({url:n.a.light.fieldsEdit,data:e,method:"post"})},fieldsEditAll:function(e){return g({url:n.a.light.fieldsEditAll,data:e,method:"post"})}}};t.a=j},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(9);function r(e){var t=e.name,a=e.className,r=e.title;return Object(n.jsx)("span",{className:"icon iconfont icon-".concat(t," ").concat(a||""),title:r,onClick:e.onClick})}},153:function(e,t,a){"use strict";a(0);var n=a(30),r=a.n(n),i=a(144),o=a(101),c=a(9);t.a=Object(o.b)((function(e){return{isLoading:e.getIn(["light","isLoading"])}}),(function(e){return{onSetState:function(t,a){e({type:"SET_LIGHT_STATE",key:t,value:a})},onDispatch:function(t){e(t)}}}))((function(e){var t=e.isLoading,a=e.isLazyLoading;return r.a.createPortal(Object(c.jsx)("div",{className:"m-loading "+(t||a?"active":""),children:Object(c.jsx)(i.a,{className:"m-spin"})}),document.body)}))},23:function(e,t,a){"use strict";var n=a(98),r={light:{testUpload:n.a+"/api/upload",testLogAdd:n.b+"/api/log/add",templateSearch:"/api/template/search",templateAdd:"/api/template/add",templateDelete:"/api/template/delete",templateEdit:"/api/template/edit",easyTemplateSearch:"/api/easyTemplate/search",easyTemplateAdd:"/api/easyTemplate/add",easyTemplateDelete:"/api/easyTemplate/delete",easyTemplateEdit:"/api/easyTemplate/edit",routerSearch:"/api/router/search",routerAdd:"/api/router/add",routerDelete:"/api/router/delete",routerEdit:"/api/router/edit",tableSearch:"/api/table/search",tableAdd:"/api/table/add",tableDelete:"/api/table/delete",tableEdit:"/api/table/edit",fieldsSearch:"/api/fields/search",fieldsAdd:"/api/fields/add",fieldsDelete:"/api/fields/delete",fieldsEdit:"/api/fields/edit",fieldsEditAll:"/api/fields/editAll"}};t.a=r},319:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(30),i=a.n(r),o=a(101),c=a(130),s=a(75),l=a(25),u=a(131),d=a(9),p=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,379))})),m=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,387))})),h=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(14)]).then(a.bind(null,348))})),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,380))})),b=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,381))})),g=Object(n.lazy)((function(){return a.e(15).then(a.bind(null,382))}));function j(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{children:Object(d.jsx)(n.Suspense,{fallback:null,children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.a,{from:"/",to:"/light/index/content?id=0",exact:!0}),Object(d.jsx)(l.b,{path:"/light/index",component:p}),Object(d.jsx)(l.b,{path:"/light/admin",component:m}),Object(d.jsx)(l.b,{path:"/light/formview",component:h}),Object(d.jsx)(l.b,{path:"/light/cards",component:f}),Object(d.jsx)(l.b,{path:"/light/cardPlus",component:b}),Object(d.jsx)(l.b,{path:"/404",component:g}),Object(d.jsx)(l.a,{from:"*",to:"/404",exact:!0})]})})}),Object(d.jsx)(u.d,{})]})}var O=a(19),v=a(206),x=a.n(v),y=(a(319),function(e){e&&e instanceof Function&&a.e(17).then(a.bind(null,383)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))});i.a.render(Object(d.jsx)(o.a,{store:s.a,children:Object(d.jsx)(c.a,{children:Object(d.jsx)(O.a,{locale:x.a,children:Object(d.jsx)(j,{})})})}),document.getElementById("root")),y()},50:function(e,t,a){"use strict";a.d(t,"i",(function(){return f})),a.d(t,"h",(function(){return b})),a.d(t,"g",(function(){return g})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return O})),a.d(t,"f",(function(){return v})),a.d(t,"c",(function(){return x})),a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return T}));var n,r=a(31),i=a(75),o=a(100),c=a(214),s=a(213),l=a(200),u=a.n(l),d=a(71),p=a(148),m=a(9),h=o.a.TextArea,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;n=setTimeout((function(){i.a.dispatch({type:"SET_LIGHT_STATE",key:["isLoading"],value:!0})}),e)},b=function(){clearTimeout(n),i.a.dispatch({type:"SET_LIGHT_STATE",key:["isLoading"],value:!1})},g=function(e){return function(e){var t={},a=e.split("?");if(a.length<=1)return t;for(var n=0,r=(a=a[1].split("&")).length;n<r;n++){var i=a[n].split("=");t[i[0]]=i[1]}return t}(e.location.search)},j=function(e){var t=/http(s)?:\/\/([A-Za-z0123456789:.-]+)\/\S+/.exec(e);if(t)return"http://"+t[2]},O=function(){return[{id:1,title:"\u5355\u884c\u6587\u672c",formComponentName:"Input",component:Object(m.jsx)(o.a,{}),getComponent:function(e){var t=e.props;return Object(m.jsx)(o.a,Object(r.a)({},t))}},{id:2,title:"\u591a\u884c\u6587\u672c",formComponentName:"TextArea",component:Object(m.jsx)(h,{}),getComponent:function(e){var t=e.props;return Object(m.jsx)(h,Object(r.a)({},t))}},{id:3,title:"\u6570\u5b57",formComponentName:"InputNumber",component:Object(m.jsx)(c.a,{style:{width:"100%"}}),getComponent:function(e){var t=e.props;return Object(m.jsx)(c.a,Object(r.a)({style:{width:"100%"}},t))}},{id:4,title:"\u56fe\u7247",formComponentName:"Image",component:Object(m.jsx)("img",{style:{width:"100%"},alt:"\u56fe\u7247"}),getComponent:function(e){var t=e.props;return Object(m.jsx)("img",Object(r.a)(Object(r.a)({style:{width:"100%"}},t),{},{alt:"\u56fe\u7247"}))}}]},v=function(){return[{id:1,title:"span\u6807\u7b7e",renderFunName:"renderSpan",formComponentNameArr:["Input","TextArea"],render:function(e){return Object(m.jsx)("span",{children:e})}},{id:2,title:"\u65e5\u671f",renderFunName:"renderDatetime",formComponentNameArr:[],render:function(e){return Object(m.jsx)("span",{children:e?u()(e).format("YYYY-MM-DD HH:mm:ss"):""})}},{id:3,title:"\u56fe\u7247",renderFunName:"renderImage",formComponentNameArr:["Image"],render:function(e){return Object(m.jsx)("img",{alt:"\u56fe\u7247",src:e})}}]},x=function(e){var t=[];return e.forEach((function(e){if(e.isModalField){var a=O().find((function(t){return t.formComponentName===e.formComponentName}));"formItem"===e.type?t.push(Object(m.jsx)(s.a.Item,{label:e.title,name:e.dataIndex,rules:e.rules,className:"m-formview-formitem",children:a?a.getComponent({props:e.props}):Object(m.jsx)(o.a,{})},e.id)):"image"===e.type&&t.push(Object(m.jsx)(s.a.Item,{name:e.dataIndex,wrapperCol:24,children:a?a.getComponent({props:{src:e.src}}):Object(m.jsx)(o.a,{})},e.id))}})),t},y=function(e){var t=e.router,a=e.authData,n=void 0===a?[]:a,i=e.isForTable,o=void 0!==i&&i;t=S(t);var c=[];return function e(t){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=function(i){var l=n.find((function(e){return e.path===t[i].path||e.path===t[i].key}));if(l){var u=Array.isArray(l.auth)&&l.auth.find((function(e){return"check"===e.name}));t[i].isVisible=!!u&&u.isVisible}if(Array.isArray(t[i].auth)){t[i].auth.forEach((function(e){if(l&&Array.isArray(l.auth)){var t=l.auth.find((function(t){return t.name===e.name}));e.isVisible=!!t&&t.isVisible}else"check"===e.name?e.isVisible=!0:e.isVisible=!1}));var d="";t[i].path?d=t[i].path:t[i].key&&(d=t[i].key),c.push({path:d,auth:S(t[i].auth)})}if(t[i].dataRange){l&&l.dataRange&&l.dataRange.value?t[i].dataRange.value=l.dataRange.value:t[i].dataRange.value=1;var p=c.findIndex((function(e){return e.path===t[i].path}));p>=0&&(c[p]=Object(r.a)(Object(r.a)({},c[p]),{},{dataRange:S(t[i].dataRange)}))}Array.isArray(t[i].children)&&t[i].children.length>0?(t[i].id="".concat(a).concat(i+1),e(t[i].children,"".concat(a).concat(i+1))):(t[i].id="".concat(a).concat(i+1),!0===t[i].isDevMenu&&o&&(t.splice(i,1),i-=1)),s=i},s=0;s<t.length;s++)i(s)}(t),{newRouter:t,newRouterAuthDataArr:c}},S=function(e){return Object(d.fromJS)(e).toJS()},T=function(e){var t=e.errorTitle,a=e.detail,n=window.reactRouter.location.pathname,o={username:i.a.getState().getIn(["light","userInfo"]).toJS().username,path:n,errorTitle:t,detail:a};p.a.light.testLogAdd({dataItem:Object(r.a)({},o)}).then((function(){}))}},75:function(e,t,a){"use strict";var n=a(128),r=a(194),i=a(195),o=a(71),c=a(0),s=[{title:"\u9996\u9875",icon:"home",className:"m-sidebar-home",isVisible:!0,path:"/light/admin/home",component:Object(c.lazy)((function(){return Promise.all([a.e(9),a.e(13)]).then(a.bind(null,392))}))},{title:"\u5e94\u7528\u7ba1\u7406",icon:"base",isVisible:!0,path:"/light/admin/app",component:Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(6),a.e(8)]).then(a.bind(null,385))}))}],l=Object(o.fromJS)({router:s,collapsed:!1,userInfo:{},routerForApp:[]}),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIGHT_STATE":return e.setIn(t.key,Object(o.fromJS)(t.value));default:return e}},d=Object(i.combineReducers)({light:u}),p=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):n.b)(Object(n.a)(r.a)),m=Object(n.c)(d,p);t.a=m},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="https://efficacious-tiny-infinity.glitch.me",r="https://efficacious-tiny-infinity.glitch.me"}},[[324,4,5]]]);