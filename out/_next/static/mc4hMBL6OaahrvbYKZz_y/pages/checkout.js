(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{bcQz:function(e,t,n){"use strict";var c=n("q1tI"),o=Object(c.createContext)();t.a=o},ef60:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return n("fdRS")}])},fdRS:function(e,t,n){"use strict";n.r(t);var c=n("o0o1"),o=n.n(c),a=n("q1tI"),r=n.n(a),s=n("VbfF"),u=n.n(s),i=n("bcQz"),l=n("nOHt"),f=n("vDqi"),p=n.n(f),b=r.a.createElement;t.default=function(){var e=Object(a.useContext)(i.a),t=e.customer,n=e.cart,c=Object(a.useState)(""),r=c[0],s=c[1],f=Object(l.useRouter)();Object(a.useEffect)((function(){t||(alert("please Login"),f.push("/account"))}),[]);return r.length>1&&b("div",{className:u.a.checkout}," ",r),b("div",{className:u.a.checkout},b("h2",null,"Web payment coming soon"),b("button",{onClick:function(e){var t;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,e.preventDefault(),c.next=4,o.a.awrap(p.a.post("http://localhost:4000/order",{cart:n},{timeout:3e4}));case 4:t=c.sent,console.log(t),s(t.data.message),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(0),console.log(c.t0),s("Error occured please try again");case 13:case"end":return c.stop()}}),null,null,[[0,9]],Promise)}},"Submit order"))}}},[["ef60",0,1,3,4,5,2]]]);