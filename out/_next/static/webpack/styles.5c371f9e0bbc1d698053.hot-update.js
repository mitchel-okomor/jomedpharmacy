webpackHotUpdate("styles",{

/***/ "./pages/resetpassword/reset.module.scss":
/*!***********************************************!*\
  !*** ./pages/resetpassword/reset.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"reset":"reset___37v3i","message":"message___1m_6j","set_password_button":"set_password_button___2ZjWI"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1599937024734");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5c371f9e0bbc1d698053.hot-update.js.map