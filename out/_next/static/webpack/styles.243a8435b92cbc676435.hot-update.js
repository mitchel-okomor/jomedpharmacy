webpackHotUpdate("styles",{

/***/ "./components/productItem.module.scss":
/*!********************************************!*\
  !*** ./components/productItem.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelink":"pagelink___1l65_","productItem":"productItem___3zsw_","image":"image___A6YxT","item":"item___2lEaX","remove":"remove___2T0y-","add":"add___1GbcU"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1599935118527");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.243a8435b92cbc676435.hot-update.js.map