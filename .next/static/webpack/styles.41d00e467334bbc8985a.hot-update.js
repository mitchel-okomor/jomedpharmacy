webpackHotUpdate("styles",{

/***/ "./pages/account.module.scss":
/*!***********************************!*\
  !*** ./pages/account.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelink":"pagelink___23IcN","profile":"profile___2baMk","buttons":"buttons___35h7a","container":"container___3mFX3","heading":"heading___V7y3g","account":"account___3xtWf","myaccount":"myaccount___14c-i","logout_link":"logout_link___1z2LU","overview":"overview___1u136","overviewdiv":"overviewdiv___BnCNs","form":"form___14s8b"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1598304113376");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.41d00e467334bbc8985a.hot-update.js.map