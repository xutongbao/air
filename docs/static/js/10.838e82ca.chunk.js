(this.webpackJsonpair=this.webpackJsonpair||[]).push([[10],{334:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(31),c=n(148),a=(n(50),function(e){return function(t){c.a.light.routerSearch().then((function(n){200===n.code&&(t({type:"SET_LIGHT_STATE",key:["routerForApp"],value:n.data}),e&&e())}))}}),o=function(){return function(e){var t=localStorage.getItem("userInfoAdmin")?JSON.parse(localStorage.getItem("userInfoAdmin")):{};e({type:"SET_LIGHT_STATE",key:["userInfo"],value:Object(r.a)({},t)})}}},387:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(101),a=n(25),o=n(132),i=n(73),l=n(150),s=n(9);var u=Object(c.b)((function(e){return{theme:e.getIn(["light","theme"]),userInfo:e.getIn(["light","userInfo"])}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.collapsed,n=e.userInfo;return Object(r.useEffect)((function(){document.title="SalesWork"}),[n]),Object(s.jsx)("div",{className:"m-logo ".concat("dark"===e.theme?"":"light"),children:t?Object(s.jsx)("span",{title:"SalesWork",children:"S"}):Object(s.jsx)("div",{title:"SalesWork",children:Object(s.jsx)("span",{className:"m-logo-text",children:"SalesWork"})})})}))),p=i.a.SubMenu;var d=Object(c.b)((function(e){return{router:e.getIn(["light","router"]),theme:e.getIn(["light","theme"]),selectedKeys:e.getIn(["light","selectedKeys"]),collapsed:e.getIn(["light","collapsed"]),userInfo:e.getIn(["light","userInfo"]).toJS()}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.router,n=e.location.pathname,c=e.theme,a=e.selectedKeys,d=e.collapsed,m=Object(r.useState)([]),f=Object(o.a)(m,2),h=f[0],b=f[1],j=function(e){var t=e.key.split("/").length;return n.includes("edu/index")?5===t:4===t},O=Object(r.useMemo)((function(){return function t(n){return n.map((function(n){return n.children?n.isVisible?Object(s.jsx)(p,{title:n.title,className:n.className?n.className:"",icon:n.icon?Object(s.jsx)("span",{className:"anticon anticon-appstore m-sidebar-icon-wrap",children:Object(s.jsx)(l.a,{name:n.icon,className:"m-sidebar-icon ".concat(d&&j(n)?"big":""),title:d&&j(n)?n.title:""})}):null,children:t(n.children)},n.key):null:n.isVisible?n.isDevMenu?null:!1!==n.hiddenMenu?Object(s.jsx)(i.a.Item,{className:n.className?n.className:"",onClick:function(){return t=n.path,void e.history.push(t);var t},icon:n.icon?Object(s.jsx)("span",{className:"anticon anticon-appstore m-sidebar-icon-wrap",children:Object(s.jsx)(l.a,{name:n.icon,className:"m-sidebar-icon ".concat(d?"big":"")})}):null,children:Object(s.jsx)("span",{title:n.title,children:n.title})},n.path):null:null}))}(t.toJS())}),[t,d]);return Object(r.useEffect)((function(){e.onSetState(["selectedKeys"],n)}),[n]),Object(r.useEffect)((function(){d||b(function(){var e=[],t=n.replace(/(\/+$)/g,"").split("/");if(t.length>4)for(var r=4;r<t.length;r++)e.push(t.slice(0,r).join("/"));return e}())}),[d]),Object(s.jsxs)(i.a,{selectedKeys:[a],openKeys:h,style:{width:d?40:200,height:"100%",overflowY:"auto",overflowX:"hidden"},mode:"inline",theme:c,inlineCollapsed:d,onOpenChange:function(e){b(e)},children:[Object(s.jsx)(u,{collapsed:d}),O]})}))),m=n(131),f=n(153),h=n(130),b=n(121);var j=Object(c.b)((function(e){return{collapsed:e.getIn(["light","collapsed"]),userInfo:e.getIn(["light","userInfo"]).toJS()}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.collapsed,n=function(t){e.onSetState(["theme"],t),localStorage.setItem("theme",JSON.stringify(t))};Object(r.useEffect)((function(){var t=!0===JSON.parse(localStorage.getItem("collapsed"));e.onSetState(["collapsed"],t);var n=JSON.parse(localStorage.getItem("theme"));n=n||"dark",e.onSetState(["theme"],n)}),[]);var c=Object(s.jsxs)(i.a,{children:[Object(s.jsx)(i.a.Item,{onClick:function(){return n("dark")},children:"\u9ed8\u8ba4(\u6df1\u8272)"},0),Object(s.jsx)(i.a.Item,{onClick:function(){return n("light")},children:"\u6d45\u8272"},1)]});return Object(s.jsxs)("div",{className:"m-list-header",children:[Object(s.jsx)(l.a,{name:"arrow",className:"m-list-header-icon ".concat(t?"rotate":""),onClick:function(){return e.onSetState(["collapsed"],!t),void localStorage.setItem("collapsed",!t)}}),Object(s.jsx)("div",{className:"m-list-header-info"}),Object(s.jsxs)("div",{className:"m-list-header-menu",children:[Object(s.jsx)(h.b,{to:"/light/index/content?id=0",children:"\u8fdb\u5165\u5e94\u7528"}),Object(s.jsx)(b.a,{overlay:c,children:Object(s.jsx)("span",{className:"m-list-header-menu-theme",children:Object(s.jsx)(l.a,{name:"theme"})})})]})]})}))),O=n(2),v=n(1),g=n(6),S=n(4),y=n.n(S),x=n(32),E=n(81),I=n(192),N=n(38),T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},k=function(e){var t,n,c=e.prefixCls,a=e.separator,o=void 0===a?"/":a,i=e.children,l=e.overlay,s=e.dropdownProps,u=T(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,r.useContext(N.b).getPrefixCls)("breadcrumb",c);return t="href"in u?r.createElement("a",Object(O.a)({className:"".concat(p,"-link")},u),i):r.createElement("span",Object(O.a)({className:"".concat(p,"-link")},u),i),n=t,t=l?r.createElement(I.a,Object(O.a)({overlay:l,placement:"bottomCenter"},s),r.createElement("span",{className:"".concat(p,"-overlay-link")},n,r.createElement(E.a,null))):n,i?r.createElement("span",null,t,o&&r.createElement("span",{className:"".concat(p,"-separator")},o)):null};k.__ANT_BREADCRUMB_ITEM=!0;var _=k,A=function(e){var t=e.children,n=(0,r.useContext(N.b).getPrefixCls)("breadcrumb");return r.createElement("span",{className:"".concat(n,"-separator")},t||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var C=A,w=n(18),R=n(16),D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};function J(e,t,n,c){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?r.createElement("span",null,o):r.createElement("a",{href:"#/".concat(c.join("/"))},o)}var P=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},M=function(e){var t,n=e.prefixCls,c=e.separator,a=void 0===c?"/":c,o=e.style,l=e.className,s=e.routes,u=e.children,p=e.itemRender,d=void 0===p?J:p,m=e.params,f=void 0===m?{}:m,h=D(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),b=r.useContext(N.b),j=b.getPrefixCls,S=b.direction,E=j("breadcrumb",n);if(s&&s.length>0){var I=[];t=s.map((function(e){var t,n=P(e.path,f);return n&&I.push(n),e.children&&e.children.length&&(t=r.createElement(i.a,null,e.children.map((function(e){return r.createElement(i.a.Item,{key:e.path||e.breadcrumbName},d(e,f,s,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=Object(g.a)(e),c=P(t,n);return c&&r.push(c),r}(I,e.path,f)))})))),r.createElement(_,{overlay:t,separator:a,key:n||e.breadcrumbName},d(e,f,s,I))}))}else u&&(t=Object(x.a)(u).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(R.a)(e,{separator:a,key:t})):e})));var T=y()(E,Object(v.a)({},"".concat(E,"-rtl"),"rtl"===S),l);return r.createElement("div",Object(O.a)({className:T,style:o},h),t)};M.Item=_,M.Separator=C;var B=M;var L=Object(c.b)((function(e){return{router:e.getIn(["light","router"]).toJS()}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.router,n=e.location.pathname,r=[],c=[];return function e(t){for(var a=0;a<t.length;a++)if(t[a].children)r.push(t[a].title),e(t[a].children);else if(t[a].path===n)return r.push(t[a].title),void(c=JSON.parse(JSON.stringify(r)));r.pop()}(t),Object(s.jsx)("div",{className:"m-list-nav",children:Object(s.jsx)(B,{children:c.map((function(e,t){return Object(s.jsx)(B.Item,{children:e},t)}))})})})));var G=Object(c.b)((function(e){return{router:e.getIn(["light","router"]),theme:e.getIn(["light","theme"])}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.router,n=e.location.pathname,c=Object(r.useMemo)((function(){var e=[],r=t.toJS();return function t(n){n.forEach((function(n){n.children?t(n.children):n.isVisible&&(n.isDevMenu||e.push(Object(s.jsx)(a.b,{path:n.path,component:n.component},n.path)))}))}(r),Array.isArray(r)&&r.length>0&&r[0].path.slice(0,5)===n.slice(0,5)&&e.push(Object(s.jsx)(a.a,{from:"*",to:"/404",exact:!0},"404")),e}),[t]);return Object(s.jsxs)("div",{className:"m-list",children:[Object(s.jsx)(j,{}),Object(s.jsxs)("div",{className:"m-list-info",id:"m-list-info",children:[Object(s.jsx)(L,{}),Object(s.jsx)(r.Suspense,{fallback:Object(s.jsx)(f.a,{isLazyLoading:!0}),children:Object(s.jsx)("div",{className:"m-content-wrap",id:"m-content-wrap",children:Object(s.jsx)(a.d,{children:c})})})]}),Object(s.jsx)(m.e,{})]})}))),H=n(334),K=function(e){Object(r.useEffect)((function(){e.onDispatch(Object(H.b)())}),[])};t.default=Object(c.b)((function(e){return{}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){return K(e),Object(s.jsxs)("div",{className:"m-index-wrap",children:[Object(s.jsx)(d,{}),Object(s.jsx)(G,{})]})})))}}]);