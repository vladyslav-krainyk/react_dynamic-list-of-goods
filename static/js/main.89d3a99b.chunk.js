(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var o=e(5),c=e.n(o),r=e(6),a=e(4),i=e(3),u=e.n(i),s=e(1),d=e.n(s),l=(e(12),e(0)),f=d.a.memo((function(t){var n=t.goods;return Object(l.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.color,o=t.name;return Object(l.jsx)("li",{"data-cy":"good",style:{color:e},children:o},n)}))})}));function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){return b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},h=function(){return b().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},m=function(){var t=Object(s.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],c=Object(s.useState)(!1),i=Object(a.a)(c,2),d=i[0],m=i[1],p=function(){var t=Object(r.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n().then((function(t){return o(t)})).catch((function(){return m(!0)}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){p(b),m(!1)},children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){p(j),m(!1)},children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){p(h),m(!1)},children:"Load red goods"}),d&&Object(l.jsx)("div",{className:"error",children:"Failed to fetch data. Please try again later."}),Object(l.jsx)(f,{goods:e})]})};c.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89d3a99b.chunk.js.map