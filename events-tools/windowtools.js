var gdjs;
(function (r) {
  let s;
  (function (u) {
    let m;
    (function (t) {
      (t.setMargins = function (e, n, o, i, g) {
        e.getGame().getRenderer().setMargins(n, o, i, g);
      }),
        (t.setFullScreen = function (e, n, o) {
          e.getGame().getRenderer().keepAspectRatio(o),
            e.getGame().getRenderer().setFullScreen(n);
        }),
        (t.isFullScreen = function (e) {
          return e.getGame().getRenderer().isFullScreen();
        }),
        (t.setWindowSize = function (e, n, o, i) {
          e.getGame().getRenderer().setWindowSize(n, o),
            i && e.getGame().setGameResolutionSize(n, o);
        }),
        (t.centerWindow = function (e) {
          e.getGame().getRenderer().centerWindow();
        }),
        (t.setGameResolutionSize = function (e, n, o) {
          e.getGame().setGameResolutionSize(n, o);
        }),
        (t.setGameResolutionResizeMode = function (e, n) {
          e.getGame().setGameResolutionResizeMode(n);
        }),
        (t.setAdaptGameResolutionAtRuntime = function (e, n) {
          e.getGame().setAdaptGameResolutionAtRuntime(n);
        }),
        // (t.setWindowTitle = function (e, n) {
        //   e.getGame().getRenderer().setWindowTitle(n);
        // }),
        (t.getWindowTitle = function (e) {
          return e.getGame().getRenderer().getWindowTitle();
        }),
        (t.getWindowInnerWidth = function () {
          return r.RuntimeGameRenderer &&
            r.RuntimeGameRenderer.getWindowInnerWidth
            ? r.RuntimeGameRenderer.getWindowInnerWidth()
            : typeof t != "undefined"
            ? t.innerWidth
            : 800;
        }),
        (t.getWindowInnerHeight = function () {
          return r.RuntimeGameRenderer &&
            r.RuntimeGameRenderer.getWindowInnerHeight
            ? r.RuntimeGameRenderer.getWindowInnerHeight()
            : typeof t != "undefined"
            ? t.innerHeight
            : 800;
        }),
        (t.getGameResolutionWidth = function (e) {
          return e.getGame().getGameResolutionWidth();
        }),
        (t.getGameResolutionHeight = function (e) {
          return e.getGame().getGameResolutionHeight();
        }),
        (t.openURL = function (e, n) {
          return n.getGame().getRenderer().openURL(e);
        });
    })((m = u.window || (u.window = {})));
  })((s = r.evtTools || (r.evtTools = {})));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=windowtools.js.map
