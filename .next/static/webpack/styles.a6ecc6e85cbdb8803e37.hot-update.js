webpackHotUpdate("styles",{

/***/ "./components/standingprescription.module.scss":
/*!*****************************************************!*\
  !*** ./components/standingprescription.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"standingprescription":"standingprescription___2_r79","prescriptiondate":"prescriptiondate___3dri4","product":"product___2QA6K"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1598017869447");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.a6ecc6e85cbdb8803e37.hot-update.js.map