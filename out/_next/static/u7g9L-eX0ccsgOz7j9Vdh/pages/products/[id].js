(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{JRi1:function(t,e,c){"use strict";var n=c("q1tI"),o=c.n(n),a=c("YJee"),r=c.n(a),u=c("bcQz"),i=o.a.createElement;e.a=function(t){for(var e=Object(n.useContext)(u.a),c=e.cart,o=e.addToCart,a=e.removeFromCart,l=e.removeFromTotal,s=e.total,d="",p=!1,m=0;m<=c.length;m++){var v=t.product.product_id;console.log[m],c[m]&&c[m].product_id===v&&(p=!0,d=c[m].quantity)}return console.log(p),i("div",{className:r.a.productItem},i("div",{className:r.a.image},i("div",{className:"card"},i("img",{src:t.product.image_url||"/product.png",className:"card-img-top",alt:""}),i("h5",null,t.product.name),i("h6",null,"\u20a6 ",t.product.price))),i("div",{className:r.a.item},i("div",null,i("h2",null," ",i("u",null,"Product Description:")),i("p",null,t.product.description)),i("div",null,"   ",i("button",{className:r.a.add,onClick:function(){o(t.product),s(t.product.price)}},"Add to Cart"),p?i("button",{className:r.a.remove,onClick:function(){a(t.product),l(t.product)}},"remove from cart"):""),i("div",null,"Qty in cart: ",d)))}},bcQz:function(t,e,c){"use strict";var n=c("q1tI"),o=Object(n.createContext)();e.a=o},"coD/":function(t,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[id]",function(){return c("wXvK")}])},wXvK:function(t,e,c){"use strict";c.r(e);var n=c("o0o1"),o=c.n(n),a=c("q1tI"),r=c.n(a),u=c("JRi1"),i=c("nOHt"),l=r.a.createElement;e.default=function(t){var e=Object(i.useRouter)(),c=Object(a.useState)(""),n=c[0],r=c[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var t,c,n,a;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.query.id,console.log(t),u.next=4,o.a.awrap(fetch("http://localhost:4000/product/".concat(t)));case 4:return c=u.sent,u.next=7,o.a.awrap(c.json());case 7:n=u.sent,console.log(n.data),a=n.data,r(a);case 11:case"end":return u.stop()}}),null,null,null,Promise)};return l(u.a,{product:n})}}},[["coD/",0,1,3,4,2]]]);