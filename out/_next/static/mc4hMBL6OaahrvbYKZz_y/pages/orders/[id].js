(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3lDN":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/[id]",function(){return n("OWrJ")}])},JRi1:function(t,e,n){"use strict";var r=n("q1tI"),c=n.n(r),o=n("YJee"),a=n.n(o),u=n("bcQz"),s=c.a.createElement;e.a=function(t){for(var e=Object(r.useContext)(u.a),n=e.cart,c=e.addToCart,o=e.removeFromCart,l=e.removeFromTotal,i=e.total,d="",p=!1,m=0;m<=n.length;m++){var f=t.product.product_id;console.log[m],n[m]&&n[m].product_id===f&&(p=!0,d=n[m].quantity)}return console.log(p),s("div",{className:a.a.productItem},s("div",{className:a.a.image},s("div",{className:"card"},s("img",{src:t.product.image_url||"/product.png",className:"card-img-top",alt:""}),s("h5",null,t.product.name),s("h6",null,"\u20a6 ",t.product.price))),s("div",{className:a.a.item},s("div",null,s("h2",null," ",s("u",null,"Product Description:")),s("p",null,t.product.description)),s("div",null,"   ",s("button",{className:a.a.add,onClick:function(){c(t.product),i(t.product.price)}},"Add to Cart"),p?s("button",{className:a.a.remove,onClick:function(){o(t.product),l(t.product)}},"remove from cart"):""),s("div",null,"Qty in cart: ",d)))}},OWrJ:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),c=n.n(r),o=n("q1tI"),a=n.n(o),u=n("vcXL"),s=n.n(u),l=n("JRi1"),i=n("nOHt"),d=a.a.createElement;e.default=function(t){var e=Object(i.useRouter)(),n=Object(o.useState)(""),r=(n[0],n[1]);Object(o.useEffect)((function(){a()}),[]);var a=function(){var t,n,o,a;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.query.id,console.log(t),u.next=4,c.a.awrap(s()("http://localhost:4000/product/".concat(t)));case 4:return n=u.sent,u.next=7,c.a.awrap(n.json());case 7:o=u.sent,console.log(o.data),a=o.data,r(a);case 11:case"end":return u.stop()}}),null,null,null,Promise)};return d(l.a,{product:t.product})}},bcQz:function(t,e,n){"use strict";var r=n("q1tI"),c=Object(r.createContext)();e.a=c},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["3lDN",0,1,3,4,2]]]);