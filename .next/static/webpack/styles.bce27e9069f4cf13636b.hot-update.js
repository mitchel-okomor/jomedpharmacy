webpackHotUpdate("styles",{

/***/ "./components/prescription.module.scss":
/*!*********************************************!*\
  !*** ./components/prescription.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"openbutton":"openbutton___1JJgq","chatclosed":"chatclosed___2VVtF","chatopen":"chatopen___yNv89","form-container":"form-container___1K6Fq","btn":"btn___31ijb","cancel":"cancel___20Iow"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1594235519289");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.bce27e9069f4cf13636b.hot-update.js.map