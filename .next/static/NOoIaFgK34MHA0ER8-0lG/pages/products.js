(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"23A7":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n("auAi")}])},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"GD+O":function(t,e,n){t.exports={pagelink:"pagelink___2-f9Q",loader:"loader___303lL",spin:"spin___aGIZ0"}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},PLZj:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("GD+O"),u=n.n(c),i=o.a.createElement;e.a=function(t){return i("div",{className:u.a.loading_container},i("div",{className:u.a.loader}),";")}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},auAi:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),c=n("q1tI"),u=n.n(c),i=n("1OyB"),a=n("vuIU"),s=n("Ji7U"),f=n("md7G"),l=n("foSv"),p=n("YFqc"),d=n.n(p),h=n("DvyO"),v=n.n(h),y=n("PLZj"),b=u.a.createElement,m=function(t){var e=t.product;return e?b("div",{className:v.a.product},b(d.a,{href:"/products/[id]",as:"/products/".concat(e.product_id)},b("a",null,b("div",{className:v.a.card,style:{width:"18rem"}},b("img",{src:e.image?e.image:"/product.png",className:"card-img-top",alt:""}),b("div",{className:"card-body"},b("b",{className:v.a.title},e.name),b("br",null),b("b",{className:v.a.title},"$ ",e.price),b("br",null),b("button",null,"View item")))))):b(y.a,null)},w=n("N2+H"),g=n.n(w),O=u.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t){Object(s.a)(n,t);var e=_(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(a.a)(n,[{key:"render",value:function(){return O("div",{className:g.a.productlist},this.props.products.map((function(t){return O(m,{key:t.product_id,product:t})})))}}]),n}(c.Component),P=n("J6MB"),k=n.n(P),E=n("vcXL"),x=n.n(E),N=u.a.createElement,S=function(t){return t.products.length<1?N("div",{className:k.a.products},N(y.a,null)):N("div",{className:k.a.products},N("h1",{className:k.a.featured_products},"Featured products"),N("div",null,N("h2",null,"Antibiotics"),N(j,{products:t.products})),N("div",null,N("h2",null,"Antimaleria")),N("div",null,N("h2",null,"Antidiabetics")),N("div",null,N("h2",null,"Haematenics")),N("div",null,N("h2",null)))};S.getInitialProps=function(){var t,e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(x()("http://localhost:4000/products"));case 3:return t=n.sent,n.next=6,o.a.awrap(t.json());case 6:return e=n.sent,n.abrupt("return",{products:e.data});case 10:return n.prev=10,n.t0=n.catch(0),console.log("Unable to load Products"),n.abrupt("return",{products:[]});case 14:case"end":return n.stop()}}),null,null,[[0,10]],Promise)};e.default=S},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),c=n("7W2i"),u=n("a1gu"),i=n("Nsbk");function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var s=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),y=n("elyg");function b(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var m=new Map,w=window.IntersectionObserver,g={};function O(){return l||(w?l=new w((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var _=function(t){c(n,t);var e=a(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,c){if(r&&o===e&&c===n)return r;var u=t(o,c);return e=o,n=c,r=u,u}}((function(t,e){return{href:(0,y.addBasePath)(b(t)),as:e?(0,y.addBasePath)(b(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var c=o.formatUrls(o.props.href,o.props.as),u=c.href,i=c.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var a=window.location.pathname;u=(0,d.resolve)(a,u),i=i?(0,d.resolve)(a,i):u,t.preventDefault();var s=o.props.scroll;null==s&&(s=i.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](u,i,{shallow:o.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=O();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var c=p.Children.only(e),u={ref:function(e){t.handleRef(e),c&&"object"===typeof c&&c.ref&&("function"===typeof c.ref?c.ref(e):"object"===typeof c.ref&&(c.ref.current=e))},onMouseEnter:function(e){c.props&&"function"===typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==c.type||"href"in c.props)||(u.href=o||r),p.default.cloneElement(c,u)}}]),n}(p.Component);e.default=_},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return u}));var c=n("JX7q");function u(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(c.a)(t):e}},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["23A7",0,1,3,4,2]]]);