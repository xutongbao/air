(this.webpackJsonpair=this.webpackJsonpair||[]).push([[16],{379:function(e,a,n){"use strict";n.r(a);var t=n(330),r=n(31),i=n(184),c=n(185),d=n(193),l=n(189),s=n(0),o=n(338),p=n(9),u=function(e){Object(d.a)(n,e);var a=Object(l.a)(n);function n(){var e;Object(i.a)(this,n),(e=a.call(this)).handleGetChildPayload=function(e){return console.log(e),e},e.handleCardDrop=function(e){};return e.state={scene:{children:[{id:"column0",type:"container",props:{orientation:"vertical"},children:[{type:"draggable",id:"00",props:{className:"card",style:{}},data:"a"},{type:"draggable",id:"01",props:{className:"card",style:{}},data:"b"}]},{id:"column1",type:"container",props:{orientation:"vertical"},children:[{type:"draggable",id:"10",props:{className:"card",style:{}},data:"1"},{type:"draggable",id:"11",props:{className:"card",style:{}},data:"2"},{type:"draggable",id:"12",props:{className:"card",style:{}},data:"3"}]}]}},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(o.Container,{orientation:"horizontal",children:this.state.scene.children.map((function(a){return Object(p.jsx)(o.Draggable,{children:Object(p.jsx)("div",{children:Object(p.jsx)(o.Container,Object(r.a)(Object(r.a)({},a.props),{},{groupName:"col",onDrop:function(n){return e.onCardDrop(a.id,n)},getChildPayload:function(n){return e.getCardPayload(a.id,n)},children:a.children.map((function(e){return Object(p.jsx)(o.Draggable,{children:Object(p.jsx)("div",Object(r.a)(Object(r.a)({},e.props),{},{children:Object(p.jsx)("p",{children:e.data})}))},e.id)}))}))})},a.id)}))})}},{key:"applyDrag",value:function(e,a){var n=a.removedIndex,r=a.addedIndex,i=a.payload;if(null===n&&null===r)return e;var c=Object(t.a)(e),d=i;return null!==n&&(d=c.splice(n,1)[0]),null!==r&&c.splice(r,0,d),c}},{key:"getCardPayload",value:function(e,a){return this.state.scene.children.filter((function(a){return a.id===e}))[0].children[a]}},{key:"onCardDrop",value:function(e,a){if(null!==a.removedIndex||null!==a.addedIndex){var n=Object.assign({},this.state.scene),t=n.children.filter((function(a){return a.id===e}))[0],r=n.children.indexOf(t),i=Object.assign({},t);i.children=this.applyDrag(i.children,a),n.children.splice(r,1,i),this.setState({scene:n})}}}]),n}(s.Component);a.default=u}}]);