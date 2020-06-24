webpackHotUpdate("styles",{

/***/ "./components/navigation.module.scss":
/*!*******************************************!*\
  !*** ./components/navigation.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav":"nav___1kSwy","dropbtn":"dropbtn___yJU84","dropdown":"dropdown___2r2lA","dropdown_content":"dropdown_content___1VBhe"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1593030156131");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.0fe56328f9f1502e1db7.hot-update.js.map