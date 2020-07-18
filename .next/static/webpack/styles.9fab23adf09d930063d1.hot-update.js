webpackHotUpdate("styles",{

/***/ "./components/main.module.scss":
/*!*************************************!*\
  !*** ./components/main.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelink":"pagelink___3_nJX","main":"main___2CXzs","intro":"intro___1q6R9","cards":"cards___1MJLF","third":"third___xubTV"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1595081254665");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9fab23adf09d930063d1.hot-update.js.map