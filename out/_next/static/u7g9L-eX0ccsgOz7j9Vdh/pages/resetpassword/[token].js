(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{aumz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetpassword/[token]",function(){return a("fIl9")}])},fIl9:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),s=a.n(n),r=a("q1tI"),o=a.n(r),c=a("vDqi"),u=a.n(c),l=a("5qA4"),p=a.n(l),i=a("nOHt"),d=o.a.createElement,w={margin:"auto","text-align":"center"};t.default=function(){var e=Object(i.useRouter)(),t=Object(r.useState)(),a=t[0],n=t[1],c=Object(r.useState)(),l=c[0],f=c[1],h=Object(r.useState)(),b=h[0],m=h[1],v=Object(r.useState)(),g=v[0],y=v[1],k=Object(r.useState)(),x=k[0],_=k[1];Object(r.useEffect)((function(){O()}));var O=function(){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.token,n.prev=1,n.next=4,s.a.awrap(fetch("http://localhost:4000/verifytoken/".concat(t),{method:"GET"}));case 4:a=n.sent,console.log(a),200===a.status?(y(t),_(!0)):_(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,null,[[1,9]],Promise)};return d("div",{className:p.a.reset},d("br",null),d("br",null),d("h2",{style:w},"Forget password"),d("br",null),x?d(o.a.Fragment,null,d("p",{style:w},"Enter your new password."),d("br",null),d("form",{onSubmit:function(t){var n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),a!=l){r.next=15;break}return r.prev=2,r.next=5,s.a.awrap(u.a.post("http://localhost:4000/resetpassword/"+g,{password:a},{timeout:3e4}));case 5:n=r.sent,console.log(n),200===n.status?(alert("Password changed successfully"),e.push("/account")):alert("Something went wrong, please try again"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),console.log(r.t0);case 13:r.next=16;break;case 15:m("Password did not match, please check again");case 16:case"end":return r.stop()}}),null,null,[[2,10]],Promise)}},d("div",null,d("input",{type:"password",placeholder:"New password",id:"password",value:a,onChange:function(e){return n(e.target.value)}}),d("br",null),d("input",{type:"password",id:"confirm_password",placeholder:"Confirm password",value:l,onChange:function(e){return f(e.target.value)}})),d("div",{className:p.a.message},b),d("button",{className:p.a.set_password_button,type:"submit"},"Set new password"))):d("p",{className:b},"This link may have been expired"))}}},[["aumz",0,1,3,4,5,2]]]);