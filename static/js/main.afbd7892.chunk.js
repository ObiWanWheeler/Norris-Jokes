(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(8),i=n.n(r),s=(n(15),n(7)),a=n.n(s),u=n(9),l=n(2),j=n(3),b=n(5),h=n(4),f=(n(17),n(0)),d=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Bible",onClick:this.props.onClick,children:Object(f.jsx)("img",{className:"bible-img",src:"https://freesvg.org/img/Anonymous_Closed_Bible.png",alt:"bible"})})}}]),n}(o.a.Component),g=(n(19),function(e){var t=e.quote;return Object(f.jsx)("div",{className:"Quote",children:Object(f.jsx)("h3",{className:"quote-txt",children:t})})}),v=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).showQuote=Object(u.a)(a.a.mark((function t(){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==e.state.givingQuote){t.next=11;break}return e.setState({givingQuote:!0,quoteReady:!1}),t.next=4,fetch("https://api.chucknorris.io/jokes/random");case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,e.setState({quoteReady:!0,currentQuote:c.value}),t.next=11,setTimeout((function(){return e.setState({givingQuote:!1})}),2e3);case 11:case"end":return t.stop()}}),t)}))),e.state={givingQuote:!1,quoteReady:!1,currentQuote:null},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.currentQuote,n=e.quoteReady;return console.log(t),Object(f.jsxs)("div",{children:[t&&n?Object(f.jsx)(g,{quote:t}):null,Object(f.jsx)(d,{onClick:this.showQuote})]})}}]),n}(o.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))},O=n(10);n.n(O).a.load({google:{families:["Pacifico:400","sans-serif"]}}),i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.afbd7892.chunk.js.map