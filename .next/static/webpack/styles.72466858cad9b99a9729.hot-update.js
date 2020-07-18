webpackHotUpdate("styles",{

/***/ "./components/prescription.module.scss":
/*!*********************************************!*\
  !*** ./components/prescription.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelink":"pagelink___1xFXa","openbutton":"openbutton___1JJgq","closebutton":"closebutton___2pbXy","chatclosed":"chatclosed___2VVtF","chatopen":"chatopen___yNv89","formcontainer":"formcontainer___244JH","heading":"heading___3qTZh","btn":"btn___31ijb","cancel":"cancel___20Iow"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1595078815675");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.72466858cad9b99a9729.hot-update.js.map