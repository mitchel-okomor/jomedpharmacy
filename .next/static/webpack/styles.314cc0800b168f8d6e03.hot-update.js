webpackHotUpdate("styles",{

/***/ "./components/navigation.module.scss":
/*!*******************************************!*\
  !*** ./components/navigation.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelink":"pagelink____jdru","nav_container":"nav_container___AArvw","container":"container___CN5Dy","bar1":"bar1___5HyMH","bar2":"bar2___iOrAY","bar3":"bar3___1ZgCt","change":"change___1C4xs","nav":"nav___1kSwy","active":"active___amG3s","dropbtn":"dropbtn___yJU84","dropdown":"dropdown___2r2lA","dropdown_content":"dropdown_content___1VBhe","togle_nav":"togle_nav___3Kd6k"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1599907053649");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.314cc0800b168f8d6e03.hot-update.js.map