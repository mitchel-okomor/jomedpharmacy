webpackHotUpdate("styles",{

/***/ "./components/standingprescription.module.scss":
/*!*****************************************************!*\
  !*** ./components/standingprescription.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"standing_prescription":"standing_prescription___1aBW1","prescription_date":"prescription_date___30KHy","prescription":"prescription___2tq0C"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1598304178978");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.cfe0cf55c0d4eb8dd93a.hot-update.js.map