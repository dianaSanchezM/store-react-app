(this["webpackJsonpstore-sanchez-diana"]=this["webpackJsonpstore-sanchez-diana"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/coin.4669120c.svg"},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/aerolab-logo.71af6f4b.svg"},,function(e,t,a){e.exports=a.p+"static/media/header-x2.a343e153.png"},function(e,t,a){e.exports=a.p+"static/media/buy-blue.2f11a957.svg"},function(e,t,a){e.exports=a.p+"static/media/buy-white.40bc2813.svg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(2),i=(a(34),a(24)),s=a.n(i),u=a(8),m=a.n(u),d=a(10),p=a(11),E=a.n(p),f=a(7),b=a(16),h={load_user:{id:"profile",path:"/user/me",method:"GET"},products:{id:"products",path:"/products",method:"GET"},history:{id:"history",path:"/user/history",method:"GET"},redeem:{id:"redeem",path:"/redeem",method:"POST"},points:{id:"points",path:"/user/points",method:"POST"}},v="https://coding-challenge-api.aerolab.co",g="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c";function j(e){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(E.a.mark((function e(t){var a,n,r,c,l,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,n=a.path,r=a.method,c=t.body,l={method:r,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(g)}},"POST"===r&&(l=Object(f.a)(Object(f.a)({},l),{},{body:JSON.stringify(c)})),e.next=5,fetch(v+n,l);case 5:return o=e.sent,e.next=8,o.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={lowPrice:"Lowest price",hightPrice:"Higest price"},y={id:"Any category",options:[]},x={id:"Any price",options:["0 - 500","501 - 1000","1001 - 1500","1501 - 2000","2001 - 2500"]},C=[1e3,5e3,7500],w={name:"",points:0},S=r.a.createContext();function k(e){var t=e.children,a=Object(n.useState)(w),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(S.Provider,{value:{user:l,setUser:i}},t)}a(36);var P=document.getElementById("modal-root"),M=function(e){var t=document.createElement("div");return Object(n.useEffect)((function(){return P.appendChild(t),function(){P.removeChild(t)}}),[t]),Object(c.createPortal)(r.a.createElement("div",null,e.children),t)},I=(a(37),function(){var e=Object(n.useContext)(S),t=e.user,a=e.setUser,c=Object(n.useState)(C[0]),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)("Add points to your account now"),d=Object(o.a)(u,2),p=d[0],E=d[1],b=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){b.current=!1}}),[]),r.a.createElement("div",{className:"points-comp"},r.a.createElement("h1",null,"Add points"),r.a.createElement("div",{className:"options"},C.map((function(e){return r.a.createElement("button",{key:e,className:i===e?"btn-active number":"btn number",onClick:function(){return s(e)}},r.a.createElement("img",{src:m.a,alt:"coin"}),r.a.createElement("p",null,e))}))),r.a.createElement("button",{className:"btn btn-add btn-add-points",onClick:function(){j({data:h.points,body:{amount:i}}).then((function(e){a(Object(f.a)(Object(f.a)({},t),{},{points:e["New Points"]})),b.current&&E(e.message)})).catch(b.current&&E("Oh! Something went wrong"))}},"Go!"),r.a.createElement("h3",null,p,"!"))}),T=function(e){var t=e.setShowModal,a=e.showModal,c=Object(n.useContext)(S),l=c.user,o=l.name,i=l.points,s=c.setUser;return Object(n.useEffect)((function(){j({data:h.load_user}).then((function(e){return s(e)}))}),[s]),r.a.createElement("button",{className:"profile-data",onClick:function(){return t(!a)}},r.a.createElement("p",{className:"username"},o),r.a.createElement("div",{className:"points"},r.a.createElement("p",null,i),r.a.createElement("img",{src:m.a,alt:"coin"})))},F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"navigation-bar"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:s.a,alt:"Logo"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement(d.b,{className:"link",to:"/store-react-app/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(d.b,{className:"link",to:"/store-react-app/"},"Products"))),r.a.createElement(T,{setShowModal:c,showModal:a}),a&&r.a.createElement(M,null,r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("button",{className:"modal-close",onClick:function(){return c(!a)}},"x"),r.a.createElement("div",{className:"modal-profile"},r.a.createElement(I,null))))))},J=(a(43),a(26)),Y=a.n(J),B=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:Y.a,alt:"cover"}),r.a.createElement("h1",null,"Electronics"))},z=a(1),A=(a(44),a(45),function(e){var t=e.setSortBy,a=e.jump,c=Object(n.useState)(""),l=Object(o.a)(c,2),i=l[0],s=l[1];return r.a.createElement("div",{className:"sortBar"},r.a.createElement("p",null,"Sort by: "),Object.entries(N).map((function(e){return r.a.createElement("button",{key:e[1],className:i===e[1]?"btn-active":"btn",onClick:function(){return n=e[1],s(n),t(n),void a(1);var n}},e[1])})))}),D=a(17),G=(a(46),function(e){var t=e.handleFilterChange,a=e.id,c=e.options,l=e.jump,i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1];c=[a].concat(Object(D.a)(c));return r.a.createElement("div",{className:"filter"},r.a.createElement("select",{"data-testid":"selectOption",onChange:function(e){return a=e.target.value,m(a),t(a),void l(1);var a},value:u},c.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}),R=(a(47),function(e){var t=e.products,a=e.setCategoryFilter,n=e.setPriceFilter,c=e.jump,l=Object(D.a)(t).map((function(e){return e.category})),o=Object(f.a)(Object(f.a)({},y),{},{options:l.filter((function(e,t){return l.indexOf(e)===t}))});return r.a.createElement("div",{className:"filterBar"},r.a.createElement("p",null,"Filter by: "),r.a.createElement(G,Object.assign({},o,{handleFilterChange:a,jump:c})),r.a.createElement(G,Object.assign({},x,{handleFilterChange:n,jump:c})))});var U=function(e,t){var a=Object(n.useState)(1),r=Object(o.a)(a,2),c=r[0],l=r[1],i=Math.ceil(e.length/t);return{next:function(){l((function(e){return Math.min(e+1,i)}))},prev:function(){l((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);l((function(e){return Math.max(Math.min(t,i),1)}))},currentData:function(){var a=(c-1)*t,n=a+t;return e.slice(a,n)},currentPage:c,maxPage:i}},_=(a(48),function(e){var t=e.currentPage,a=e.jump,n=e.prev,c=e.next,l=e.maxPage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("p",null,16*(t-1)," of ",16*l," products"),r.a.createElement("button",{onClick:function(){return a(1)}},"<<"),r.a.createElement("button",{onClick:function(){return n()}},"<"),r.a.createElement(r.a.Fragment,null,t),r.a.createElement("button",{onClick:function(){return c()}},">"),r.a.createElement("button",{onClick:function(){return a(l)}},">>"))}),H=function(e){var t=e.info.id,a=e.render,c=Object(n.useState)([]),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)(x.id),m=Object(o.a)(u,2),d=m[0],p=m[1],v=Object(n.useState)(y.id),g=Object(o.a)(v,2),O=g[0],C=g[1],w=Object(n.useState)(""),S=Object(o.a)(w,2),k=S[0],P=S[1];Object(n.useEffect)((function(){Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,j({data:h[t]});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]);var M=i.filter((function(e){return(O===y.id||e.category===O)&&(d===x.id||e.cost>parseInt(d.split("-")[0])&&e.cost<=parseInt(d.split("-")[1]))})).sort((function(e,t){return k===N.lowPrice?e.cost-t.cost:t.cost-e.cost})),I=U(M,16),T=I.next,F=I.prev,J=I.jump,Y=I.currentData,B=I.currentPage,z=I.maxPage;return r.a.createElement("div",{className:"products"},r.a.createElement("div",{className:"menu"},r.a.createElement(A,{setSortBy:P,jump:J}),r.a.createElement(R,{products:i,setCategoryFilter:C,setPriceFilter:p,jump:J}),r.a.createElement(_,{currentPage:B,jump:J,prev:F,next:T,maxPage:z})),r.a.createElement("div",{className:"grid"},Y().map((function(e){return r.a.createElement(n.Fragment,{key:Math.random()},a(Object(f.a)({},e)))}))),r.a.createElement("div",{className:"menu",style:{justifyContent:"right",paddingRight:"10%"}},r.a.createElement(_,{currentPage:B,jump:J,prev:F,next:T,maxPage:z})))},L=(a(49),function(e){var t=e.info,a=e.render,c=Object(n.useContext)(S).user,l=c.name,o=c.points,i=c.createDate,s=void 0===i?"":i;return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user-info"},r.a.createElement("h1",null,l),r.a.createElement("h2",null,"Points available: ",o),r.a.createElement("p",null,"Count created on: ",s.substr(0,10))),r.a.createElement(I,null)),r.a.createElement("h1",{className:"history-title"},"BUY HISTORY"),r.a.createElement(H,{info:t,render:a}))}),Q=(a(23),a(27)),Z=a.n(Q),q=a(28),K=a.n(q),V=function(e){var t=e._id,a=e.name,c=e.cost,l=e.category,i=e.img.url,s=Object(n.useContext)(S),u=s.user,d=s.setUser,p=Object(n.useState)(!1),E=Object(o.a)(p,2),f=E[0],b=E[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),O=g[0],N=g[1],y=u.points-c;return r.a.createElement("div",{className:"card"},y>0?r.a.createElement("img",{className:"icon",src:Z.a,alt:"icon"}):r.a.createElement("div",{className:"icon"},r.a.createElement("div",{className:"you-need"},r.a.createElement("p",null," You need ",-y),r.a.createElement("img",{src:m.a,alt:"coin"}))),r.a.createElement("img",{className:"product",src:i,alt:"product"}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,l),r.a.createElement("h3",null,a),r.a.createElement("div",{className:"card-points"},r.a.createElement("img",{src:m.a,alt:"coin"}),r.a.createElement("p",null,c))),y>0&&r.a.createElement("div",{className:"card-hover"},r.a.createElement("img",{className:"icon",src:K.a,alt:"icon"}),r.a.createElement("div",{className:"buy-info"},r.a.createElement("div",{className:"points-card"},r.a.createElement("p",null,c),r.a.createElement("img",{src:m.a,alt:"coin"})),r.a.createElement("button",{className:"btn btn-add",onClick:function(){j({data:h.redeem,body:{productId:t}}).then((function(e){b(!0),"You've redeem the product successfully"===e.message?N(e.message):N("Oh no, something went wrong!"),j({data:h.load_user}).then((function(e){return d(e)}))})).catch((function(){b(!0),N("Oh no, something went wrong!")}))}},"Redeem now"))),f&&r.a.createElement(M,{setShowModal:b,showModal:f},r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("button",{className:"modal-close",onClick:function(){return b(!f)}},"x"),r.a.createElement("div",{className:"modal-confirmation"},r.a.createElement("h1",null,O))))))},X=function(e){e._id;var t=e.name,a=e.cost,n=e.category,c=e.img.url;return r.a.createElement("div",{className:"card history-card"},r.a.createElement("img",{src:c,alt:"product"}),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,n),r.a.createElement("h3",null,t),r.a.createElement("div",{className:"card-points"},r.a.createElement("img",{src:m.a,alt:"coin"}),r.a.createElement("p",null,a))))},W=function(){return r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/store-react-app/",render:function(){return r.a.createElement(H,{info:h.products,render:function(e){return r.a.createElement(V,e)}})}}),r.a.createElement(z.a,{exact:!0,path:"/store-react-app/profile",render:function(){return r.a.createElement(L,{info:h.history,render:function(e){return r.a.createElement(X,e)}})}}))};var $=function(){return r.a.createElement(k,null,r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(W,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,null,r.a.createElement($,null))),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.c837ff9c.chunk.js.map