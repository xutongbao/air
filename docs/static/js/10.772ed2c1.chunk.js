(this.webpackJsonpair=this.webpackJsonpair||[]).push([[10],{337:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var c=n(31),r=n(151),o=(n(50),function(e){return function(t){r.a.light.routerSearch().then((function(n){200===n.code&&(t({type:"SET_LIGHT_STATE",key:["routerForApp"],value:n.data}),e&&e())}))}}),a=function(){return function(e){var t=localStorage.getItem("userInfoAdmin")?JSON.parse(localStorage.getItem("userInfoAdmin")):{};e({type:"SET_LIGHT_STATE",key:["userInfo"],value:Object(c.a)({},t)})}}},379:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(74),o=n(133),a=n(25),i=n(104),s=n(50),u=n(337),l=n(134),d=n(7),j=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,376))}));t.default=Object(i.b)((function(e){return{routerForApp:e.getIn(["light","routerForApp"]).toJS()}}),(function(e){return{onSetState:function(t,n){e({type:"SET_LIGHT_STATE",key:t,value:n})},onDispatch:function(t){e(t)}}}))(Object(a.g)((function(e){var t=e.routerForApp,n=Object(s.g)(e);return Object(c.useEffect)((function(){e.onDispatch(Object(u.a)())}),[]),Object(d.jsxs)("div",{className:"m-wrap",children:[Object(d.jsxs)("div",{className:"m-header",children:[Object(d.jsx)("div",{className:"m-header-logo",children:"SalesWork"}),Object(d.jsx)(r.a,{className:"m-header-nav",selectedKeys:[n.id],mode:"horizontal",children:t.map((function(e){return Object(d.jsx)(r.a.Item,{children:Object(d.jsx)(o.b,{to:e.path,children:e.title})},e.key)}))}),Object(d.jsx)("div",{className:"m-header-operate",children:Object(d.jsx)(o.b,{to:"/light/admin/home",children:"\u7ba1\u7406\u540e\u53f0"})})]}),Object(d.jsxs)("div",{className:"m-content",id:"m-content",children:[Object(d.jsx)(c.Suspense,{fallback:null,children:Object(d.jsx)(a.d,{children:Object(d.jsx)(a.b,{path:"/light/index/content",component:j})})}),Object(d.jsx)(l.e,{dom:document.getElementById("m-content")})]})]})})))}}]);