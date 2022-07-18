// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gPfuD":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4bbdff57f2cd18dc";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ctLCf":[function(require,module,exports) {
/**
 * @file
 * Generic Drupal Web Components Example behaviors.
 */ var _componentsEs = require("@gdwc/components/dist/components.es");
(function(Drupal) {
    /**
   * Behavior description.
   */ Drupal.behaviors.gdwcExample = {
        attach: function(context, settings) {
            console.log("It works!");
        }
    };
})(Drupal);

},{"@gdwc/components/dist/components.es":"2k8xE"}],"2k8xE":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$5 = Symbol(), n$6 = /* @__PURE__ */ new Map();
class s$5 {
    constructor(t2, n2){
        if (this._$cssResult$ = true, n2 !== e$5) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t2;
    }
    get styleSheet() {
        let e2 = n$6.get(this.cssText);
        return t$3 && e2 === void 0 && (n$6.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
    }
    toString() {
        return this.cssText;
    }
}
const o$6 = (t2)=>new s$5(typeof t2 == "string" ? t2 : t2 + "", e$5), r$4 = (t2, ...n2)=>{
    const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2)=>e2 + ((t3)=>{
            if (t3._$cssResult$ === true) return t3.cssText;
            if (typeof t3 == "number") return t3;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n3) + t2[s2 + 1], t2[0]);
    return new s$5(o2, e$5);
}, i$5 = (e2, n2)=>{
    t$3 ? e2.adoptedStyleSheets = n2.map((t2)=>t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2)=>{
        const n3 = document.createElement("style"), s2 = window.litNonce;
        s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
    });
}, S$1 = t$3 ? (t2)=>t2 : (t2)=>t2 instanceof CSSStyleSheet ? ((t3)=>{
        let e2 = "";
        for (const n2 of t3.cssRules)e2 += n2.cssText;
        return o$6(e2);
    })(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s$4;
const e$4 = window.trustedTypes, r$3 = e$4 ? e$4.emptyScript : "", h$3 = window.reactiveElementPolyfillSupport, o$5 = {
    toAttribute (t2, i2) {
        switch(i2){
            case Boolean:
                t2 = t2 ? r$3 : null;
                break;
            case Object:
            case Array:
                t2 = t2 == null ? t2 : JSON.stringify(t2);
        }
        return t2;
    },
    fromAttribute (t2, i2) {
        let s2 = t2;
        switch(i2){
            case Boolean:
                s2 = t2 !== null;
                break;
            case Number:
                s2 = t2 === null ? null : Number(t2);
                break;
            case Object:
            case Array:
                try {
                    s2 = JSON.parse(t2);
                } catch (t3) {
                    s2 = null;
                }
        }
        return s2;
    }
}, n$5 = (t2, i2)=>i2 !== t2 && (i2 == i2 || t2 == t2), l$4 = {
    attribute: true,
    type: String,
    converter: o$5,
    reflect: false,
    hasChanged: n$5
};
class a$2 extends HTMLElement {
    constructor(){
        super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t2) {
        var i2;
        (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
    }
    static get observedAttributes() {
        this.finalize();
        const t2 = [];
        return this.elementProperties.forEach((i2, s2)=>{
            const e2 = this._$Eh(s2, i2);
            e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
        }), t2;
    }
    static createProperty(t2, i2 = l$4) {
        if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
            const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
            e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
        }
    }
    static getPropertyDescriptor(t2, i2, s2) {
        return {
            get () {
                return this[i2];
            },
            set (e2) {
                const r2 = this[t2];
                this[i2] = e2, this.requestUpdate(t2, r2, s2);
            },
            configurable: true,
            enumerable: true
        };
    }
    static getPropertyOptions(t2) {
        return this.elementProperties.get(t2) || l$4;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return false;
        this.finalized = true;
        const t2 = Object.getPrototypeOf(this);
        if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
            const t3 = this.properties, i2 = [
                ...Object.getOwnPropertyNames(t3),
                ...Object.getOwnPropertySymbols(t3)
            ];
            for (const s2 of i2)this.createProperty(s2, t3[s2]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i2) {
        const s2 = [];
        if (Array.isArray(i2)) {
            const e2 = new Set(i2.flat(1 / 0).reverse());
            for (const i3 of e2)s2.unshift(S$1(i3));
        } else i2 !== void 0 && s2.push(S$1(i2));
        return s2;
    }
    static _$Eh(t2, i2) {
        const s2 = i2.attribute;
        return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
    }
    o() {
        var t2;
        this._$Ep = new Promise((t3)=>this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3)=>t3(this));
    }
    addController(t2) {
        var i2, s2;
        ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
    }
    removeController(t2) {
        var i2;
        (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
    }
    _$Em() {
        this.constructor.elementProperties.forEach((t2, i2)=>{
            this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
        });
    }
    createRenderRoot() {
        var t2;
        const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
        return i$5(s2, this.constructor.elementStyles), s2;
    }
    connectedCallback() {
        var t2;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3)=>{
            var i2;
            return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
        });
    }
    enableUpdating(t2) {}
    disconnectedCallback() {
        var t2;
        (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3)=>{
            var i2;
            return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
        });
    }
    attributeChangedCallback(t2, i2, s2) {
        this._$AK(t2, s2);
    }
    _$ES(t2, i2, s2 = l$4) {
        var e2, r2;
        const h2 = this.constructor._$Eh(t2, s2);
        if (h2 !== void 0 && s2.reflect === true) {
            const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$5.toAttribute)(i2, s2.type);
            this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
        }
    }
    _$AK(t2, i2) {
        var s2, e2, r2;
        const h2 = this.constructor, n2 = h2._$Eu.get(t2);
        if (n2 !== void 0 && this._$Ei !== n2) {
            const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$5.fromAttribute;
            this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
        }
    }
    requestUpdate(t2, i2, s2) {
        let e2 = true;
        t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$5)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$E_());
    }
    async _$E_() {
        this.isUpdatePending = true;
        try {
            await this._$Ep;
        } catch (t3) {
            Promise.reject(t3);
        }
        const t2 = this.scheduleUpdate();
        return t2 != null && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t2;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3)=>this[i3] = t3), this._$Et = void 0);
        let i2 = false;
        const s2 = this._$AL;
        try {
            i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3)=>{
                var i3;
                return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
            }), this.update(s2)) : this._$EU();
        } catch (t3) {
            throw i2 = false, this._$EU(), t3;
        }
        i2 && this._$AE(s2);
    }
    willUpdate(t2) {}
    _$AE(t2) {
        var i2;
        (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3)=>{
            var i3;
            return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$EU() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$Ep;
    }
    shouldUpdate(t2) {
        return true;
    }
    update(t2) {
        this._$EC !== void 0 && (this._$EC.forEach((t3, i2)=>this._$ES(i2, this[i2], t3)), this._$EC = void 0), this._$EU();
    }
    updated(t2) {}
    firstUpdated(t2) {}
}
a$2.finalized = true, a$2.elementProperties = /* @__PURE__ */ new Map(), a$2.elementStyles = [], a$2.shadowRootOptions = {
    mode: "open"
}, h$3 == null || h$3({
    ReactiveElement: a$2
}), ((s$4 = globalThis.reactiveElementVersions) !== null && s$4 !== void 0 ? s$4 : globalThis.reactiveElementVersions = []).push("1.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t$2;
const i$4 = globalThis.trustedTypes, s$3 = i$4 ? i$4.createPolicy("lit-html", {
    createHTML: (t2)=>t2
}) : void 0, e$3 = `lit$${(Math.random() + "").slice(9)}$`, o$4 = "?" + e$3, n$4 = `<${o$4}>`, l$3 = document, h$2 = (t2 = "")=>l$3.createComment(t2), r$2 = (t2)=>t2 === null || typeof t2 != "object" && typeof t2 != "function", d$1 = Array.isArray, u = (t2)=>{
    var i2;
    return d$1(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a$1 = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2)=>(i2, ...s2)=>({
            _$litType$: t2,
            strings: i2,
            values: s2
        }), $ = p(1), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), x = (t2, i2, s2)=>{
    var e2, o2;
    const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
    let l2 = n2._$litPart$;
    if (l2 === void 0) {
        const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
        n2._$litPart$ = l2 = new N(i2.insertBefore(h$2(), t3), t3, void 0, s2 != null ? s2 : {});
    }
    return l2._$AI(t2), l2;
}, A = l$3.createTreeWalker(l$3, 129, null, false), C = (t2, i2)=>{
    const o2 = t2.length - 1, l2 = [];
    let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c$1;
    for(let i3 = 0; i3 < o2; i3++){
        const s2 = t2[i3];
        let o3, u3, p2 = -1, $2 = 0;
        for(; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null);)$2 = d2.lastIndex, d2 === c$1 ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a$1 : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c$1, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a$1 ? d2 = c$1 : (d2 = f, h2 = void 0);
        const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
        r2 += d2 === c$1 ? s2 + n$4 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$3 + y) : s2 + e$3 + (p2 === -2 ? (l2.push(void 0), i3) : y);
    }
    const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
    if (!Array.isArray(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        s$3 !== void 0 ? s$3.createHTML(u2) : u2,
        l2
    ];
};
class E {
    constructor({ strings: t2 , _$litType$: s2  }, n2){
        let l2;
        this.parts = [];
        let r2 = 0, d2 = 0;
        const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
        if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
            const t3 = this.el.content, i2 = t3.firstChild;
            i2.remove(), t3.append(...i2.childNodes);
        }
        for(; (l2 = A.nextNode()) !== null && c2.length < u2;){
            if (l2.nodeType === 1) {
                if (l2.hasAttributes()) {
                    const t3 = [];
                    for (const i2 of l2.getAttributeNames())if (i2.endsWith("$lit$") || i2.startsWith(e$3)) {
                        const s3 = a2[d2++];
                        if (t3.push(i2), s3 !== void 0) {
                            const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$3), i3 = /([.?@])?(.*)/.exec(s3);
                            c2.push({
                                type: 1,
                                index: r2,
                                name: i3[2],
                                strings: t4,
                                ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S
                            });
                        } else c2.push({
                            type: 6,
                            index: r2
                        });
                    }
                    for (const i21 of t3)l2.removeAttribute(i21);
                }
                if (g.test(l2.tagName)) {
                    const t3 = l2.textContent.split(e$3), s3 = t3.length - 1;
                    if (s3 > 0) {
                        l2.textContent = i$4 ? i$4.emptyScript : "";
                        for(let i2 = 0; i2 < s3; i2++)l2.append(t3[i2], h$2()), A.nextNode(), c2.push({
                            type: 2,
                            index: ++r2
                        });
                        l2.append(t3[s3], h$2());
                    }
                }
            } else if (l2.nodeType === 8) {
                if (l2.data === o$4) c2.push({
                    type: 2,
                    index: r2
                });
                else {
                    let t3 = -1;
                    for(; (t3 = l2.data.indexOf(e$3, t3 + 1)) !== -1;)c2.push({
                        type: 7,
                        index: r2
                    }), t3 += e$3.length - 1;
                }
            }
            r2++;
        }
    }
    static createElement(t2, i2) {
        const s2 = l$3.createElement("template");
        return s2.innerHTML = t2, s2;
    }
}
function P(t2, i2, s2 = t2, e2) {
    var o2, n2, l2, h2;
    if (i2 === b) return i2;
    let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
    const u2 = r$2(i2) ? void 0 : i2._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V {
    constructor(t2, i2){
        this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t2) {
        var i2;
        const { el: { content: s2  } , parts: e2  } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$3).importNode(s2, true);
        A.currentNode = o2;
        let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
        for(; d2 !== void 0;){
            if (h2 === d2.index) {
                let i3;
                d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
            }
            h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
        }
        return o2;
    }
    m(t2) {
        let i2 = 0;
        for (const s2 of this.v)s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
}
class N {
    constructor(t2, i2, s2, e2){
        var o2;
        this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
    }
    get _$AU() {
        var t2, i2;
        return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
    }
    get parentNode() {
        let t2 = this._$AA.parentNode;
        const i2 = this._$AM;
        return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t2, i2 = this) {
        t2 = P(this, t2, i2), r$2(t2) ? t2 === w || t2 == null || t2 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
    }
    M(t2, i2 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t2, i2);
    }
    k(t2) {
        this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
    }
    $(t2) {
        this._$AH !== w && r$2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$3.createTextNode(t2)), this._$AH = t2;
    }
    T(t2) {
        var i2;
        const { values: s2 , _$litType$: e2  } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
        if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2) this._$AH.m(s2);
        else {
            const t3 = new V(o2, this), i3 = t3.p(this.options);
            t3.m(s2), this.k(i3), this._$AH = t3;
        }
    }
    _$AC(t2) {
        let i2 = T.get(t2.strings);
        return i2 === void 0 && T.set(t2.strings, i2 = new E(t2)), i2;
    }
    S(t2) {
        d$1(this._$AH) || (this._$AH = [], this._$AR());
        const i2 = this._$AH;
        let s2, e2 = 0;
        for (const o2 of t2)e2 === i2.length ? i2.push(s2 = new N(this.M(h$2()), this.M(h$2()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
        e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
        var s2;
        for((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB;){
            const i3 = t2.nextSibling;
            t2.remove(), t2 = i3;
        }
    }
    setConnected(t2) {
        var i2;
        this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
    }
}
class S {
    constructor(t2, i2, s2, e2, o2){
        this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2, i2 = this, s2, e2) {
        const o2 = this.strings;
        let n2 = false;
        if (o2 === void 0) t2 = P(this, t2, i2, 0), n2 = !r$2(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
        else {
            const e3 = t2;
            let l2, h2;
            for(t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$2(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
        }
        n2 && !e2 && this.C(t2);
    }
    C(t2) {
        t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    C(t2) {
        this.element[this.name] = t2 === w ? void 0 : t2;
    }
}
const k = i$4 ? i$4.emptyScript : "";
class H extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    C(t2) {
        t2 && t2 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
}
class I extends S {
    constructor(t2, i2, s2, e2, o2){
        super(t2, i2, s2, e2, o2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
        var s2;
        if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w) === b) return;
        const e2 = this._$AH, o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w && (e2 === w || o2);
        o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
        var i2, s2;
        typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
    }
}
class L {
    constructor(t2, i2, s2){
        this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2) {
        P(this, t2);
    }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push("2.2.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l$2, o$3;
class s$2 extends a$2 {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Dt = void 0;
    }
    createRenderRoot() {
        var t2, e2;
        const i2 = super.createRenderRoot();
        return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
    }
    update(t2) {
        const i2 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x(i2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t2;
        super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
    }
    disconnectedCallback() {
        var t2;
        super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
    }
    render() {
        return b;
    }
}
s$2.finalized = true, s$2._$litElement$ = true, (l$2 = globalThis.litElementHydrateSupport) === null || l$2 === void 0 || l$2.call(globalThis, {
    LitElement: s$2
});
const n$3 = globalThis.litElementPolyfillSupport;
n$3 == null || n$3({
    LitElement: s$2
});
((o$3 = globalThis.litElementVersions) !== null && o$3 !== void 0 ? o$3 : globalThis.litElementVersions = []).push("3.2.0");
var normalize$2 = r$4`
  :host {
    --link: var(--indigo-7);
    --link-visited: var(--grape-7);
    --text-1: var(--gray-9);
    --text-2: var(--gray-7);
    --surface-1: var(--gray-0);
    --surface-2: var(--gray-2);
    --surface-3: var(--gray-3);
    --surface-4: var(--gray-4);
    --scrollbar-color: var(--gray-7);
    accent-color: var(--link);
    -webkit-text-size-adjust: none;
    background-color: var(--surface-1);
    block-size: 100%;
    caret-color: var(--link);
    color: var(--text-2);
    color-scheme: light;
    font-family: var(--font-sans);
    line-height: var(--font-lineheight-3);
    scrollbar-color: var(--scrollbar-color) transparent;
  }
  @media (dynamic-range: high) {
    @supports (color(display-p3 0 0.5 1)) {
      :host {
        --link: color(display-p3 0 0.5 1);
        --link-visited: color(display-p3 0.6 0.2 1);
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    :host {
      --link: var(--indigo-3);
      --link-visited: var(--grape-3);
      --text-1: var(--gray-1);
      --text-2: var(--gray-4);
      --surface-1: var(--gray-9);
      --surface-2: var(--gray-8);
      --surface-3: var(--gray-7);
      --surface-4: var(--gray-6);
      color-scheme: dark;
    }
  }
  :where(h1, h2, h3, h4, h5, h6, dt) {
    color: var(--text-1);
  }
  :where(a[href]) {
    color: var(--link);
  }
  :where(a[href]):visited {
    color: var(--link-visited);
  }
  :focus-visible {
    outline-color: var(--link);
  }
  @media (prefers-color-scheme: light) {
    :host {
      --scrollbar-color: var(--gray-4);
    }
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :where(:not(dialog)) {
    margin: 0;
  }
  :where(:not(fieldset, progress, meter)) {
    background-origin: border-box;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 0;
  }
  @media (prefers-reduced-motion: no-preference) {
    :host {
      scroll-behavior: smooth;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    :focus-visible {
      transition: outline-offset 145ms var(--ease-2);
    }
    :where(:not(:active)):focus-visible {
      transition-duration: 0.25s;
    }
  }
  :where(:not(:active)):focus-visible {
    outline-offset: 5px;
  }
  :where(body) {
    scrollbar-gutter: stable both-edges;
    min-block-size: 100%;
  }
  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: var(--font-weight-9);
    line-height: var(--font-lineheight-1);
  }
  :where(h1) {
    font-size: var(--font-size-8);
    max-inline-size: var(--size-header-1);
  }
  :where(h2) {
    font-size: var(--font-size-6);
    max-inline-size: var(--size-header-2);
  }
  :where(h3) {
    font-size: var(--font-size-5);
  }
  :where(h4) {
    font-size: var(--font-size-4);
  }
  :where(h5) {
    font-size: var(--font-size-3);
  }
  :where(h3, h4, h5, h6, dt) {
    max-inline-size: var(--size-header-3);
  }
  :where(p, ul, ol, dl, h6) {
    font-size: var(--font-size-2);
  }
  :where(a, u, ins, abbr) {
    text-underline-offset: 1px;
  }
  :where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*='-'])) {
    cursor: pointer;
    touch-action: manipulation;
  }
  :where(a) {
    margin-block: calc(var(--size-1) * -1);
    margin-inline: calc(var(--size-1) * -1);
    padding-block: var(--size-1);
    padding-inline: var(--size-1);
  }
  :where(a):where([href]) {
    text-decoration-color: var(--indigo-2);
  }
  :where(a):where([href]):where(:visited) {
    text-decoration-color: var(--grape-2);
  }
  :where(a):where(:not(:hover)) {
    text-decoration: inherit;
  }
  :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }
  :where(img, svg, video) {
    block-size: auto;
    max-inline-size: 100%;
  }
  :where(input, button, textarea, select),
  :where(input[type='file'])::-webkit-file-upload-button {
    color: inherit;
    font: inherit;
    font-size: inherit;
    letter-spacing: inherit;
  }
  :where(input, textarea) {
    padding-block: var(--size-1);
    padding-inline: var(--size-2);
  }
  :where(select) {
    padding-block: 0.75ch;
    padding-inline: 1.25ch 0;
  }
  :where(textarea, select, input:not(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])) {
    background-color: var(--surface-2);
    border-radius: var(--radius-2);
  }
  @media (prefers-color-scheme: dark) {
    :where(textarea, select, input:not(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])) {
      background-color: #171a1c;
    }
  }
  :where(textarea) {
    resize: block;
  }
  :where(input[type='checkbox'], input[type='radio']) {
    block-size: var(--size-3);
    inline-size: var(--size-3);
  }
  :where(svg) {
    stroke: none;
    fill: currentColor;
  }
  :where(svg):where(:not([fill])) {
    stroke: currentColor;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  :where(svg):where(:not([width])) {
    inline-size: var(--size-10);
  }
  :where(code, kbd, samp, pre) {
    font-family: var(--font-mono);
  }
  :where(:not(pre) > code, kbd) {
    white-space: nowrap;
  }
  :where(pre) {
    max-inline-size: max-content;
    min-inline-size: 0;
    white-space: pre;
  }
  :where(:not(pre) > code) {
    background: var(--surface-2);
    border-radius: var(--radius-2);
    padding: var(--size-1) var(--size-2);
  }
  :where(kbd, var) {
    border-color: var(--surface-4);
    border-radius: var(--radius-2);
    border-width: var(--border-size-1);
    padding: var(--size-1) var(--size-2);
  }
  :where(mark) {
    border-radius: var(--radius-2);
    padding-inline: var(--size-1);
  }
  :where(ol, ul) {
    padding-inline-start: var(--size-8);
  }
  :where(li) {
    padding-inline-start: var(--size-2);
  }
  :where(li, dd, figcaption) {
    max-inline-size: var(--size-content-2);
  }
  :where(p) {
    max-inline-size: var(--size-content-3);
  }
  :where(dt, summary) {
    font-weight: var(--font-weight-7);
  }
  :where(dt:not(:first-of-type)) {
    margin-block-start: var(--size-5);
  }
  :where(small) {
    font-size: max(0.5em, var(--font-size-0));
    max-inline-size: var(--size-content-1);
  }
  :where(hr) {
    background-color: var(--surface-3);
    height: var(--border-size-2);
    margin-block: var(--size-fluid-5);
  }
  :where(figure) {
    display: grid;
    gap: var(--size-2);
    place-items: center;
  }
  :where(figure) > :where(figcaption) {
    font-size: var(--font-size-1);
  }
  :where(blockquote, :not > cite) {
    border-inline-start-width: var(--border-size-3);
  }
  :where(blockquote) {
    display: grid;
    gap: var(--size-3);
    max-inline-size: var(--size-content-2);
    padding-block: var(--size-3);
    padding-inline: var(--size-4);
  }
  :where(:not(blockquote) > cite) {
    padding-inline-start: var(--size-2);
  }
  :where(summary) {
    background: var(--surface-3);
    border-radius: var(--radius-2);
    margin: calc(var(--size-2) * -1) calc(var(--size-3) * -1);
    padding: var(--size-2) var(--size-3);
  }
  :where(details) {
    background: var(--surface-2);
    border-radius: var(--radius-2);
    padding-block: var(--size-2);
    padding-inline: var(--size-3);
  }
  :where(details[open] > summary) {
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    margin-bottom: var(--size-2);
  }
  :where(fieldset) {
    border: var(--border-size-1) solid var(--surface-4);
    border-radius: var(--radius-2);
  }
  :where(del) {
    background: var(--red-9);
    color: var(--red-2);
  }
  :where(ins) {
    background: var(--green-9);
    color: var(--green-1);
  }
  :where(abbr) {
    text-decoration-color: var(--blue-5);
  }
  :where(dialog) {
    background-color: var(--surface-1);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-6);
    color: inherit;
  }
  @media (prefers-color-scheme: dark) {
    :where(dialog) {
      background-color: var(--surface-2);
    }
  }
  :where(dialog)::backdrop {
    backdrop-filter: blur(25px);
  }
  :host[\:has\(dialog\[open\]\)] {
    overflow: hidden;
  }
  :host:has(dialog[open]) {
    overflow: hidden;
  }
  :where(menu) {
    display: flex;
    gap: var(--size-3);
    padding-inline-start: 0;
  }
`;
var theme = r$4`
  :host {
    --link: var(--gdwc-link, var(--indigo-7));
    --link-visited: var(--gdwc-link-visited, var(--grape-7));
    --text-1: var(--gdwc-text-1, var(--gray-9));
    --text-2: var(--gdwc-text-2, var(--gray-7));
    --surface-1: var(--gdwc-surface-1, var(--gray-0));
    font-family: var(--gdwc-font-family, var(--font-sans));
    line-height: var(--gdwc-font-lineheight, var(--font-lineheight-3));
  }

  :where(a):where([href]) {
    text-decoration-color: var(--gdwc-link, var(--indigo-2));
  }
  :where(a):where([href]):where(:visited) {
    text-decoration-color: var(--gdwc-link, var(--grape-2));
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --text-1: var(--gdwc-text-1, var(--gray-1));
      --text-2: var(--gdwc-text-2, var(--gray-4));
      --surface-1: var(--gdwc-surface-1, var(--gray-9));
    }
  }
`;
var buttons = r$4`
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    --_accent: initial;
    --_text: initial;
    --_size: initial;
    --_bg-light: #fff;
    --_bg-dark: var(--surface-3);
    --_bg: var(--_bg-light);
    --_border: var(--surface-3);
    --_highlight-size: 0;
    --_highlight-light: hsl(210 10% 71%/25%);
    --_highlight-dark: hsl(210 10% 5%/25%);
    --_highlight: var(--_highlight-light);
    --_ink-shadow-light: 0 1px 0 var(--gray-3);
    --_ink-shadow-dark: 0 1px 0 var(--surface-1);
    --_ink-shadow: var(--_ink-shadow-light);
    --_icon-size: 2ch;
    --_icon-color: var(--_accent, var(--link));
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    align-items: center;
    background: var(--_bg);
    border: var(--border-size-2) solid var(--_border);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2), 0 1px var(--surface-3),
      0 0 0 var(--_highlight-size) var(--_highlight);
    color: var(--_text);
    display: inline-flex;
    font-size: var(--_size);
    font-weight: var(--font-weight-7);
    gap: var(--size-2);
    justify-content: center;
    padding-block: 0.75ch;
    padding-inline: 1.75ch;
    text-align: center;
    text-shadow: var(--_ink-shadow);
    transition: border-color 0.5s var(--ease-3) 3s;
    user-select: none;
  }
  @media (prefers-color-scheme: dark) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
    :where(input[type='file'])::-webkit-file-upload-button,
    :where(input[type='file'])::file-selector-button {
      --_highlight: var(--_highlight-dark);
      --_bg: var(--_bg-dark);
      --_ink-shadow: var(--_ink-shadow-dark);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
    :where(input[type='file'])::-webkit-file-upload-button,
    :where(input[type='file'])::file-selector-button {
      transition: border-color 0.5s var(--ease-3) 3s,
        box-shadow 145ms var(--ease-4);
    }
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])[disabled] {
    --_text: var(--gray-6);
    box-shadow: var(--shadow-1);
    cursor: not-allowed;
  }
  @media (prefers-color-scheme: dark) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])[disabled] {
      --_text: var(--gray-5);
    }
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']):where(:not(:active):hover) {
    --_highlight-size: var(--size-2);
    transition-delay: 0s;
    transition-duration: 0.25s;
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])
    > :where(svg) {
    block-size: var(--_icon-size);
    filter: drop-shadow(var(--_ink-shadow));
    flex-shrink: 0;
    inline-size: var(--_icon-size);
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])
    > :where(svg > *) {
    stroke: var(--_icon-color);
    stroke-width: var(--border-size-2);
  }
  :where([type='submit'], form button:not([type], [disabled])) {
    --_text: var(--_accent, var(--link));
  }
  :where([type='reset']) {
    --_text: var(--red-6);
    --_border: var(--red-3);
  }
  :where([type='reset']):focus-visible {
    outline-color: var(--red-6);
  }
  @media (prefers-color-scheme: dark) {
    :where([type='reset']) {
      --_text: var(--red-2);
      --_border: var(--surface-3);
    }
  }
  :where([type='submit'], [type='reset'], form
      button:not([type])):is(:hover, :focus-visible):not([disabled]) {
    --_border: currentColor;
  }
  :where(input[type='file']) {
    align-self: flex-start;
    border: var(--border-size-1) solid var(--surface-2);
    border-radius: var(--radius-2);
    box-shadow: var(--inner-shadow-4);
    color: var(--text-2);
    cursor: auto;
    max-inline-size: 100%;
    padding: 0;
  }
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    cursor: pointer;
    margin-inline-end: 1.75ch;
  }
  @media (prefers-color-scheme: dark) {
    :where([disabled]),
    :where([type='reset']),
    :where([type='submit']),
    :where(form button:not([type='button'])) {
      --_bg: var(--surface-1);
    }
  }
`;
class GdwcButton extends s$2 {
    static get properties() {
        return {
            type: {
                type: String
            },
            disabled: {
                type: Boolean
            },
            text: {
                type: String
            },
            primary: {
                type: Boolean
            }
        };
    }
    constructor(){
        super();
        this.type = "button";
        this.disabled = false;
        this.primary = false;
    }
    static get styles() {
        return [
            normalize$2,
            theme,
            buttons,
            r$4`
        button {
          padding: var(--gdwc-padding, 0.75ch);
          --_bg-light: var(--gdwc-bg-light, #fff);
          --_bg-dark: var(--gdwc-bg-dark, var(--surface-3));
          --_bg: #fff;
          border-radius: var(--gdwc-border-radius, var(--radius-2));
          background-image: var(--gdwc-background-image);
          --_border: var(--gdwc-border-color, var(--surface-3));
          --_highlight-light: var(--gdwc-highlight-light, hsl(210 10% 71%/25%));
          --_highlight-dark: var(--gdwc-highlight-dark, hsl(210 10% 5%/25%));
          --_ink-shadow-light: 0 1px 0
            var(--gdwc-ink-shadow-color-light, var(--gray-3));
          --_ink-shadow-dark: 0 1px 0
            var(--gdwc-ink-shadow-color-dark, var(--surface-1));
        }
        button:hover {
          --_bg: var(--_bg-light);
        }
        button[primary] {
          --_bg: var(--_bg-light);
        }
        button[primary]:hover {
          --_bg: #fff;
        }
        @media (prefers-color-scheme: dark) {
          button {
            --_bg: var(--surface-3);
          }
          button:hover {
            --_bg: var(--_bg-dark);
          }
          button[primary] {
            --_bg: var(--_bg-dark);
          }
          button[primary]:hover {
            --_bg: var(--surface-3);
          }
        }
      `
        ];
    }
    render() {
        return $` <button
      ?primary=${this.primary}
      type=${this.type}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
    }
}
if (!customElements.get("gdwc-button")) customElements.define("gdwc-button", GdwcButton);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
    if (n2.__esModule) return n2;
    var a2 = Object.defineProperty({}, "__esModule", {
        value: true
    });
    Object.keys(n2).forEach(function(k2) {
        var d2 = Object.getOwnPropertyDescriptor(n2, k2);
        Object.defineProperty(a2, k2, d2.get ? d2 : {
            enumerable: true,
            get: function() {
                return n2[k2];
            }
        });
    });
    return a2;
}
var dist$1 = {};
var menu = {};
var linkset = {};
var __assign$6 = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign$6 = Object.assign || function(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$6.apply(this, arguments);
};
var __rest$4 = commonjsGlobal && commonjsGlobal.__rest || function(s2, e2) {
    var t2 = {};
    for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
};
var __spreadArray$3 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from2) {
    for(var i2 = 0, il = from2.length, j = to.length; i2 < il; i2++, j++)to[j] = from2[i2];
    return to;
};
Object.defineProperty(linkset, "__esModule", {
    value: true
});
linkset.Linkset = void 0;
var Linkset = function() {
    function Linkset2(links) {
        this.elements = links;
        this.size = links.length;
    }
    Linkset2.prototype.hasLinkTo = function(relationType) {
        return this.elements.some(function(link2) {
            return link2.rel === relationType;
        });
    };
    Linkset2.prototype.linkTo = function(relationType) {
        return this.elements.find(function(link2) {
            return link2.rel === relationType;
        });
    };
    Linkset2.prototype.linksTo = function(relationType) {
        return new Linkset2(this.elements.filter(function(link2) {
            return link2.rel === relationType;
        }));
    };
    Linkset2.prototype.linksFrom = function(anchor) {
        return new Linkset2(this.elements.filter(function(link2) {
            return link2.anchor === anchor;
        }));
    };
    Linkset2.prototype.linksWithAttribute = function(name) {
        return new Linkset2(this.elements.filter(function(link2) {
            return Object.prototype.hasOwnProperty.call(link2.attributes, name);
        }));
    };
    Linkset2.prototype.linksWithAttributeValue = function(name, value) {
        return new Linkset2(this.linksWithAttribute(name).elements.filter(function(link2) {
            var values = Array.isArray(link2.attributes[name]) ? link2.attributes[name] : [
                link2.attributes[name]
            ];
            return values.some(function(v2) {
                return isAttributeEqual(v2, value);
            });
        }));
    };
    Linkset2.prototype[Symbol.iterator] = function() {
        var elems = this.elements;
        var pointer = 0;
        return {
            next: function() {
                if (pointer < elems.length) return {
                    value: elems[pointer++],
                    done: false
                };
                else return {
                    value: void 0,
                    done: true
                };
            }
        };
    };
    Linkset2.prototype.normalize = function() {
        var contexts = {};
        this.elements.forEach(function(_a2) {
            var anchor = _a2.anchor, rel = _a2.rel, target = __rest$4(_a2, [
                "anchor",
                "rel"
            ]);
            if (!Object.hasOwnProperty.call(contexts, anchor)) contexts[anchor] = {};
            if (!Object.hasOwnProperty.call(contexts[anchor], rel)) contexts[anchor][rel] = [];
            var href = target.href, attributes = target.attributes;
            var targetObject = __assign$6({
                href
            }, attributes);
            contexts[anchor][rel].push(targetObject);
        });
        return {
            linkset: Object.entries(contexts).reduce(function(carry, _a2) {
                var anchor = _a2[0], rels = _a2[1];
                return __spreadArray$3(__spreadArray$3([], carry), [
                    __assign$6({
                        anchor
                    }, rels)
                ]);
            }, [])
        };
    };
    return Linkset2;
}();
linkset.Linkset = Linkset;
function isAttributeEqual(a2, b2) {
    if (typeof a2 !== typeof b2) return false;
    if (typeof a2 === "string" && typeof b2 === "string") return a2 === b2;
    return a2.value === a2.value && a2.language === a2.language;
}
var menuElement = {};
var __spreadArray$2 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from2) {
    for(var i2 = 0, il = from2.length, j = to.length; i2 < il; i2++, j++)to[j] = from2[i2];
    return to;
};
Object.defineProperty(menuElement, "__esModule", {
    value: true
});
menuElement.buildTree = menuElement.MenuElement = void 0;
var MenuElement = function() {
    function MenuElement2(link2, children) {
        if (children === void 0) children = [];
        this.link = link2;
        this.children = buildTree(__spreadArray$2([], children));
    }
    Object.defineProperty(MenuElement2.prototype, "title", {
        get: function() {
            return this.link.attributes.title;
        },
        enumerable: false,
        configurable: true
    });
    return MenuElement2;
}();
menuElement.MenuElement = MenuElement;
function buildTree(links) {
    if (links.length < 2) return links.length ? [
        new MenuElement(links.shift())
    ] : [];
    links.sort(function(a2, b2) {
        return a2.attributes["drupal-menu-hierarchy"][0].localeCompare(b2.attributes["drupal-menu-hierarchy"][0]);
    });
    var elements = [];
    var last;
    var children = [];
    do {
        var curr = links.shift();
        if (last) {
            if (curr.attributes["drupal-menu-hierarchy"][0].length > last.attributes["drupal-menu-hierarchy"][0].length) children.push(curr);
            else {
                elements.push(new MenuElement(last, children));
                last = curr;
                children = [];
            }
        } else last = curr;
    }while (links.length);
    elements.push(new MenuElement(last, children));
    return elements;
}
menuElement.buildTree = buildTree;
var __extends$5 = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics2 = function(d2, b2) {
        extendStatics2 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
        } || function(d3, b3) {
            for(var p2 in b3)if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
        };
        return extendStatics2(d2, b2);
    };
    return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null) throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics2(d2, b2);
        function __2() {
            this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
    };
}();
var __spreadArray$1 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from2) {
    for(var i2 = 0, il = from2.length, j = to.length; i2 < il; i2++, j++)to[j] = from2[i2];
    return to;
};
Object.defineProperty(menu, "__esModule", {
    value: true
});
menu.Menu = void 0;
var linkset_1$2 = linkset;
var menu_element_1 = menuElement;
var Menu = function(_super) {
    __extends$5(Menu2, _super);
    function Menu2(machineName, linkset2) {
        var _this = _super.call(this, linkset2.elements) || this;
        _this.id = machineName;
        _this.tree = menu_element_1.buildTree(__spreadArray$1([], _this.elements));
        return _this;
    }
    Menu2.prototype.linksTo = function(relationType) {
        return new Menu2(this.id, _super.prototype.linksTo.call(this, relationType));
    };
    Menu2.prototype.linksFrom = function(anchor) {
        return new Menu2(this.id, _super.prototype.linksTo.call(this, anchor));
    };
    Menu2.prototype.linksWithAttribute = function(name) {
        return new Menu2(this.id, _super.prototype.linksWithAttribute.call(this, name));
    };
    Menu2.prototype.linksWithAttributeValue = function(name, value) {
        return new Menu2(this.id, _super.prototype.linksWithAttributeValue.call(this, name, value));
    };
    return Menu2;
}(linkset_1$2.Linkset);
menu.Menu = Menu;
var dist = {};
var link = {};
var __rest$3 = commonjsGlobal && commonjsGlobal.__rest || function(s2, e2) {
    var t2 = {};
    for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
};
Object.defineProperty(link, "__esModule", {
    value: true
});
link.Link = void 0;
var Link = function() {
    function Link2(parameters) {
        var anchor = parameters.anchor, rel = parameters.rel, href = parameters.href, attributes = __rest$3(parameters, [
            "anchor",
            "rel",
            "href"
        ]);
        this.anchor = anchor;
        this.rel = rel;
        this.href = href;
        this.attributes = attributes;
    }
    return Link2;
}();
link.Link = Link;
var __assign$5 = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign$5 = Object.assign || function(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$5.apply(this, arguments);
};
var __rest$2 = commonjsGlobal && commonjsGlobal.__rest || function(s2, e2) {
    var t2 = {};
    for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
};
Object.defineProperty(dist, "__esModule", {
    value: true
});
dist.denormalize = dist.parse = void 0;
var linkset_1$1 = linkset;
var link_1 = link;
function denormalize$1(normalized) {
    var links = [];
    normalized.linkset.forEach(function(contextObject) {
        var anchor = contextObject.anchor, rels = __rest$2(contextObject, [
            "anchor"
        ]);
        Object.keys(rels).forEach(function(rel) {
            contextObject[rel].forEach(function(targetObject) {
                links.push(new link_1.Link(__assign$5({
                    anchor,
                    rel
                }, targetObject)));
            });
        });
    });
    return new linkset_1$1.Linkset(links);
}
dist.denormalize = denormalize$1;
function parse$4(json) {
    return denormalize$1(JSON.parse(json));
}
dist.parse = parse$4;
Object.defineProperty(dist$1, "__esModule", {
    value: true
});
var denormalize_1 = dist$1.denormalize = dist$1.parse = void 0;
var menu_1 = menu;
var linkset_1 = dist;
function denormalize(normalized, menuID) {
    var linkset2 = linkset_1.denormalize(normalized);
    var machineNames = [];
    if (!menuID) linkset2.linksWithAttribute("drupal-menu-machine-name").elements.forEach(function(link2) {
        if (!machineNames.includes(link2.attributes["drupal-menu-machine-name"][0])) machineNames.push(link2.attributes["drupal-menu-machine-name"][0]);
    });
    else machineNames.push(menuID);
    var menus = machineNames.map(function(machineName) {
        return new menu_1.Menu(machineName, linkset2.linksWithAttributeValue("drupal-menu-machine-name", machineName));
    });
    return menuID ? menus.shift() : menus;
}
denormalize_1 = dist$1.denormalize = denormalize;
function parse$3(json, menuID) {
    return denormalize(JSON.parse(json), menuID);
}
dist$1.parse = parse$3;
class GdwcMenu extends s$2 {
    static get styles() {
        return r$4`
      :host {
        display: block;
      }
      :host(:not([theme='unstyled'])) a {
        text-decoration: none;
      }
      :host(:not([theme='unstyled'])) a:hover {
        text-decoration: underline;
      }

      /* Menu expand and collapse */
      :host(:not([theme='unstyled'])) li > ul {
        display: none;
      }
      :host(:not([theme='unstyled'])) ul.show {
        display: block;
      }
      :host(:not([theme='unstyled'])) a[aria-haspopup='true']:after {
        content: '';
        display: inline-block;
        position: relative;
        vertical-align: top;
        height: 0.45em;
        width: 0.45em;
        top: 0.15em;
        left: 0.25em;
        border-style: solid;
        border-width: 0.1em 0.1em 0 0;
        transform: rotate(135deg);
      }
      :host(:not([theme='unstyled']))
        a[aria-haspopup='true'][aria-expanded='true']:after {
        transform: rotate(-45deg);
        top: 0.45em;
      }

      /* Horizontal Theme */
      :host([theme='horizontal']) {
        overflow: visible;
        float: left;
        width: 100%;
        background-color: var(--background, #f8f9fa);
      }
      :host([theme='horizontal']) slot h2 {
        float: left;
      }
      :host([theme='horizontal']) .navbar-toggler {
        float: right;
        /* Would much rather flex align this... */
        margin: 0.75rem 0;
        border: 0;
        border-radius: 5px;
        background: transparent;
      }
      :host([theme='horizontal']) .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }
      :host([theme='horizontal']) .change .bar2 {
        opacity: 0;
      }
      :host([theme='horizontal']) .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
      :host([theme='horizontal']) .navbar-toggler .bar {
        width: 30px;
        height: 3px;
        background-color: #333;
        margin: 8px 0;
        transition: 0.4s;
      }
      :host([theme='horizontal']) #main-menu {
        display: none;
        float: right;
        clear: both;
        width: 100%;
      }
      :host([theme='horizontal']) ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
      }
      :host([theme='horizontal']) #main-menu > ul > li {
        margin: 0 1em 1em 0;
      }
      :host([theme='horizontal']) ul li {
        margin: 1em;
      }
      :host([theme='horizontal']) ul ul {
        list-style-type: none;
      }
      @media (min-width: 1024px) {
        :host([theme='horizontal']) .navbar-toggler {
          display: none;
        }
        :host([theme='horizontal']) #main-menu {
          border-bottom: none;
          /*
          !important is a hacky fix below. I'm hoping we can remove this when the expand and
          collapse is animated and no longer depends on 'display'
          */
          display: block !important;
          width: auto;
          clear: none;
        }
        :host([theme='horizontal']) ul {
          display: flex;
          padding-left: 0;
          margin-top: 1em;
          float: right;
        }
        :host([theme='horizontal']) ul ul {
          background-color: white;
        }
        :host([theme='horizontal']) li {
          padding: 0.75rem 0.75rem 0.75rem 1rem;
          position: relative;
        }
        :host([theme='horizontal']) #main-menu > ul > li {
          margin: 0;
        }
        :host([theme='horizontal']) ul li {
          margin: 0;
        }
        :host([theme='horizontal']) li > ul {
          position: absolute;
          top: 3rem;
          right: 0;
          border: 1px solid black;
        }
      }
    `;
    }
    static get properties() {
        return {
            baseUrl: {
                type: String
            },
            menuId: {
                type: String
            },
            branding: {
                type: String
            },
            tree: {
                type: Array
            },
            isLoading: {
                type: Boolean,
                attribute: false
            },
            loadingMessage: {
                type: String
            },
            theme: {
                type: String
            }
        };
    }
    constructor(){
        super();
        this.tree = [];
        this.mobileStyle = "none";
        this.isLoading = false;
        this.loadingMessage = "Loading...";
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.baseUrl && this.menuId) this.fetchData(this.baseUrl, this.menuId);
    }
    static menuLevelTemplate(levels) {
        return $`<ul part="menu-level">
      ${levels}
    </ul>`;
    }
    menuParentTemplate(title, children) {
        return $`<li part="menu-item">
      <a
        @click="${GdwcMenu.openMenu}"
        role="button"
        aria-expanded="false"
        aria-haspopup="true"
        href="#"
      >
        ${title}
      </a>
      ${this.renderMenuLevel(children)}
    </li>`;
    }
    static menuLinkTemplate(title, href) {
        return $`<li part="menu-item"><a href=${href}>${title}</a></li>`;
    }
    static menuItemTemplate(title) {
        return $`<li part="menu-item">${title}</li>`;
    }
    renderMenuLevel(level) {
        const levels = level.map((item)=>this.renderMenuItem(item));
        return GdwcMenu.menuLevelTemplate(levels);
    }
    renderMenuItem(item) {
        var _a2, _b, _c;
        const title = (_b = (_a2 = item == null ? void 0 : item.link) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.title;
        const href = (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.href;
        const children = item == null ? void 0 : item.children;
        if (children && children.length) return this.menuParentTemplate(title, children);
        if (href) return GdwcMenu.menuLinkTemplate(title, href);
        return GdwcMenu.menuItemTemplate(title);
    }
    fetchData(baseURL, menuID) {
        this.isLoading = true;
        const url = `${baseURL}/system/menu/${menuID}/linkset`;
        fetch(url, {}).then((response)=>{
            if (response.ok) return response.json();
            this.isLoading = false;
            throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
        }).then((json)=>{
            try {
                const denormalized = denormalize_1(json, menuID);
                this.tree = denormalized.tree;
            } catch (e2) {
                throw new Error("Unable to denormalize menu.");
            }
            this.isLoading = false;
        });
    }
    render() {
        return $`
      <div class="gdwc-menu">
        <slot name="brand"><h2>${this.branding}</h2></slot>
        ${this.theme === "horizontal" ? $`
              <button
                id="mobile-menu"
                @click=${this._mobileMenu}
                aria-label="Toggle navigation"
                class="navbar-toggler collapsed"
              >
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </button>
            ` : ""}
        <div id="main-menu">
          ${this.isLoading ? $`<slot name="loading">${this.loadingMessage}</slot>` : this.renderMenuLevel(this.tree)}
        </div>
      </div>
    `;
    }
    get mobileMainNav() {
        return this.shadowRoot.getElementById("main-menu");
    }
    _mobileMenu() {
        this.mobileFunc = this.shadowRoot.getElementById("mobile-menu");
        this.mobileFunc.classList.toggle("change");
        if (this.mobileStyle === "none") {
            this.mobileMainNav.style.display = "block";
            this.mobileMainNav.setAttribute("aria-expanded", true);
            this.mobileStyle = "block";
        } else {
            this.mobileMainNav.style.display = "none";
            this.mobileMainNav.setAttribute("aria-expanded", false);
            this.mobileStyle = "none";
        }
    }
    static openMenu(e2) {
        e2.preventDefault();
        const { target  } = e2;
        const isExpanded = target.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            target.setAttribute("aria-expanded", "false");
            target.nextElementSibling.classList.remove("show");
        } else {
            target.setAttribute("aria-expanded", "true");
            target.nextElementSibling.classList.add("show");
        }
    }
}
if (!customElements.get("gdwc-menu")) customElements.define("gdwc-menu", GdwcMenu);
var runtime = {
    exports: {}
};
(function(module2) {
    var runtime2 = function(exports) {
        var Op = Object.prototype;
        var hasOwn2 = Op.hasOwnProperty;
        var undefined$12;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return obj[key];
        }
        try {
            define({}, "");
        } catch (err1) {
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap2(innerFn, outerFn, self2, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self2, context);
            return generator;
        }
        exports.wrap = wrap2;
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto2 = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto2 && getProto2(getProto2(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn2.call(NativeIteratorPrototype, iteratorSymbol)) IteratorPrototype = NativeIteratorPrototype;
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
        function defineIteratorMethods(prototype2) {
            [
                "next",
                "throw",
                "return"
            ].forEach(function(method) {
                define(prototype2, method, function(arg) {
                    return this._invoke(method, arg);
                });
            });
        }
        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        };
        exports.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") reject(record.arg);
                else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && typeof value === "object" && hasOwn2.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value2) {
                        invoke("next", value2, resolve, reject);
                    }, function(err) {
                        invoke("throw", err, resolve, reject);
                    });
                    return PromiseImpl.resolve(value).then(function(unwrapped) {
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue2(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            this._invoke = enqueue2;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        };
        exports.AsyncIterator = AsyncIterator;
        exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap2(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self2, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) throw new Error("Generator is already running");
                if (state === GenStateCompleted) {
                    if (method === "throw") throw arg;
                    return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while(true){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") context.sent = context._sent = context.arg;
                    else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") context.abrupt("return", context.arg);
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self2, context);
                    if (record.type === "normal") {
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$12) {
                context.delegate = null;
                if (context.method === "throw") {
                    if (delegate.iterator["return"]) {
                        context.method = "return";
                        context.arg = undefined$12;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") return ContinueSentinel;
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined$12;
                }
            } else return info;
            context.delegate = null;
            return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        Gp[iteratorSymbol] = function() {
            return this;
        };
        Gp.toString = function() {
            return "[object Generator]";
        };
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) entry.catchLoc = locs[1];
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            this.tryEntries = [
                {
                    tryLoc: "root"
                }
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        exports.keys = function(object) {
            var keys = [];
            for(var key in object)keys.push(key);
            keys.reverse();
            return function next() {
                while(keys.length){
                    var key2 = keys.pop();
                    if (key2 in object) {
                        next.value = key2;
                        next.done = false;
                        return next;
                    }
                }
                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if (typeof iterable.next === "function") return iterable;
                if (!isNaN(iterable.length)) {
                    var i2 = -1, next = function next2() {
                        while(++i2 < iterable.length)if (hasOwn2.call(iterable, i2)) {
                            next2.value = iterable[i2];
                            next2.done = false;
                            return next2;
                        }
                        next2.value = undefined$12;
                        next2.done = true;
                        return next2;
                    };
                    return next.next = next;
                }
            }
            return {
                next: doneResult
            };
        }
        exports.values = values;
        function doneResult() {
            return {
                value: undefined$12,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = undefined$12;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined$12;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for(var name in this)if (name.charAt(0) === "t" && hasOwn2.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined$12;
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        context.method = "next";
                        context.arg = undefined$12;
                    }
                    return !!caught;
                }
                for(var i2 = this.tryEntries.length - 1; i2 >= 0; --i2){
                    var entry = this.tryEntries[i2];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn2.call(entry, "catchLoc");
                        var hasFinally = hasOwn2.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else throw new Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function(type, arg) {
                for(var i2 = this.tryEntries.length - 1; i2 >= 0; --i2){
                    var entry = this.tryEntries[i2];
                    if (entry.tryLoc <= this.prev && hasOwn2.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) finallyEntry = null;
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                if (record.type === "break" || record.type === "continue") this.next = record.arg;
                else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for(var i2 = this.tryEntries.length - 1; i2 >= 0; --i2){
                    var entry = this.tryEntries[i2];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            "catch": function(tryLoc) {
                for(var i2 = this.tryEntries.length - 1; i2 >= 0; --i2){
                    var entry = this.tryEntries[i2];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc
                };
                if (this.method === "next") this.arg = undefined$12;
                return ContinueSentinel;
            }
        };
        return exports;
    }(module2.exports);
    try {
        regeneratorRuntime = runtime2;
    } catch (accidentalStrictMode) {
        Function("r", "regeneratorRuntime = r")(runtime2);
    }
})(runtime);
var regenerator = runtime.exports;
function createStore(createState) {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace2)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (nextState !== state) {
            const previousState = state;
            state = replace2 ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is)=>{
        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
        let currentSlice = selector(state);
        function listenerToAdd() {
            const nextSlice = selector(state);
            if (!equalityFn(currentSlice, nextSlice)) {
                const previousSlice = currentSlice;
                listener(currentSlice = nextSlice, previousSlice);
            }
        }
        listeners.add(listenerToAdd);
        return ()=>listeners.delete(listenerToAdd);
    };
    const subscribe = (listener, selector, equalityFn)=>{
        if (selector || equalityFn) return subscribeWithSelector(listener, selector, equalityFn);
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>listeners.clear();
    const api = {
        setState,
        getState,
        subscribe,
        destroy
    };
    state = createState(setState, getState, api);
    return api;
}
var Observable$4 = {};
Object.defineProperty(Observable$4, "__esModule", {
    value: true
});
Observable$4.Observable = void 0;
function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$4(target, props) {
    for(var i2 = 0; i2 < props.length; i2++){
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$4(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$4(Constructor, staticProps);
    return Constructor;
}
var hasSymbols$3 = function() {
    return typeof Symbol === "function";
};
var hasSymbol$1 = function(name) {
    return hasSymbols$3() && Boolean(Symbol[name]);
};
var getSymbol$1 = function(name) {
    return hasSymbol$1(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols$3() && !hasSymbol$1("observable")) Symbol.observable = Symbol("observable");
var SymbolIterator$1 = getSymbol$1("iterator");
var SymbolObservable$1 = getSymbol$1("observable");
var SymbolSpecies$1 = getSymbol$1("species");
function getMethod$1(obj, key) {
    var value = obj[key];
    if (value == null) return void 0;
    if (typeof value !== "function") throw new TypeError(value + " is not a function");
    return value;
}
function getSpecies$1(obj) {
    var ctor = obj.constructor;
    if (ctor !== void 0) {
        ctor = ctor[SymbolSpecies$1];
        if (ctor === null) ctor = void 0;
    }
    return ctor !== void 0 ? ctor : Observable$3;
}
function isObservable$1(x2) {
    return x2 instanceof Observable$3;
}
function hostReportError$1(e2) {
    if (hostReportError$1.log) hostReportError$1.log(e2);
    else setTimeout(function() {
        throw e2;
    });
}
function enqueue$1(fn) {
    Promise.resolve().then(function() {
        try {
            fn();
        } catch (e2) {
            hostReportError$1(e2);
        }
    });
}
function cleanupSubscription$1(subscription) {
    var cleanup = subscription._cleanup;
    if (cleanup === void 0) return;
    subscription._cleanup = void 0;
    if (!cleanup) return;
    try {
        if (typeof cleanup === "function") cleanup();
        else {
            var unsubscribe = getMethod$1(cleanup, "unsubscribe");
            if (unsubscribe) unsubscribe.call(cleanup);
        }
    } catch (e2) {
        hostReportError$1(e2);
    }
}
function closeSubscription$1(subscription) {
    subscription._observer = void 0;
    subscription._queue = void 0;
    subscription._state = "closed";
}
function flushSubscription$1(subscription) {
    var queue = subscription._queue;
    if (!queue) return;
    subscription._queue = void 0;
    subscription._state = "ready";
    for(var i2 = 0; i2 < queue.length; ++i2){
        notifySubscription$1(subscription, queue[i2].type, queue[i2].value);
        if (subscription._state === "closed") break;
    }
}
function notifySubscription$1(subscription, type, value) {
    subscription._state = "running";
    var observer = subscription._observer;
    try {
        var m2 = getMethod$1(observer, type);
        switch(type){
            case "next":
                if (m2) m2.call(observer, value);
                break;
            case "error":
                closeSubscription$1(subscription);
                if (m2) m2.call(observer, value);
                else throw value;
                break;
            case "complete":
                closeSubscription$1(subscription);
                if (m2) m2.call(observer);
                break;
        }
    } catch (e2) {
        hostReportError$1(e2);
    }
    if (subscription._state === "closed") cleanupSubscription$1(subscription);
    else if (subscription._state === "running") subscription._state = "ready";
}
function onNotify$1(subscription, type, value) {
    if (subscription._state === "closed") return;
    if (subscription._state === "buffering") {
        subscription._queue.push({
            type,
            value
        });
        return;
    }
    if (subscription._state !== "ready") {
        subscription._state = "buffering";
        subscription._queue = [
            {
                type,
                value
            }
        ];
        enqueue$1(function() {
            return flushSubscription$1(subscription);
        });
        return;
    }
    notifySubscription$1(subscription, type, value);
}
var Subscription$1 = /* @__PURE__ */ function() {
    function Subscription2(observer, subscriber) {
        _classCallCheck$2(this, Subscription2);
        this._cleanup = void 0;
        this._observer = observer;
        this._queue = void 0;
        this._state = "initializing";
        var subscriptionObserver = new SubscriptionObserver$1(this);
        try {
            this._cleanup = subscriber.call(void 0, subscriptionObserver);
        } catch (e2) {
            subscriptionObserver.error(e2);
        }
        if (this._state === "initializing") this._state = "ready";
    }
    _createClass$4(Subscription2, [
        {
            key: "unsubscribe",
            value: function unsubscribe() {
                if (this._state !== "closed") {
                    closeSubscription$1(this);
                    cleanupSubscription$1(this);
                }
            }
        },
        {
            key: "closed",
            get: function() {
                return this._state === "closed";
            }
        }
    ]);
    return Subscription2;
}();
var SubscriptionObserver$1 = /* @__PURE__ */ function() {
    function SubscriptionObserver2(subscription) {
        _classCallCheck$2(this, SubscriptionObserver2);
        this._subscription = subscription;
    }
    _createClass$4(SubscriptionObserver2, [
        {
            key: "next",
            value: function next(value) {
                onNotify$1(this._subscription, "next", value);
            }
        },
        {
            key: "error",
            value: function error(value) {
                onNotify$1(this._subscription, "error", value);
            }
        },
        {
            key: "complete",
            value: function complete() {
                onNotify$1(this._subscription, "complete");
            }
        },
        {
            key: "closed",
            get: function() {
                return this._subscription._state === "closed";
            }
        }
    ]);
    return SubscriptionObserver2;
}();
var Observable$3 = /* @__PURE__ */ function() {
    function Observable2(subscriber) {
        _classCallCheck$2(this, Observable2);
        if (!(this instanceof Observable2)) throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
    }
    _createClass$4(Observable2, [
        {
            key: "subscribe",
            value: function subscribe(observer) {
                if (typeof observer !== "object" || observer === null) observer = {
                    next: observer,
                    error: arguments[1],
                    complete: arguments[2]
                };
                return new Subscription$1(observer, this._subscriber);
            }
        },
        {
            key: "forEach",
            value: function forEach2(fn) {
                var _this = this;
                return new Promise(function(resolve, reject) {
                    if (typeof fn !== "function") {
                        reject(new TypeError(fn + " is not a function"));
                        return;
                    }
                    function done() {
                        subscription.unsubscribe();
                        resolve();
                    }
                    var subscription = _this.subscribe({
                        next: function(value) {
                            try {
                                fn(value, done);
                            } catch (e2) {
                                reject(e2);
                                subscription.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                });
            }
        },
        {
            key: "map",
            value: function map(fn) {
                var _this2 = this;
                if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                var C2 = getSpecies$1(this);
                return new C2(function(observer) {
                    return _this2.subscribe({
                        next: function(value) {
                            try {
                                value = fn(value);
                            } catch (e2) {
                                return observer.error(e2);
                            }
                            observer.next(value);
                        },
                        error: function(e2) {
                            observer.error(e2);
                        },
                        complete: function() {
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "filter",
            value: function filter(fn) {
                var _this3 = this;
                if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                var C2 = getSpecies$1(this);
                return new C2(function(observer) {
                    return _this3.subscribe({
                        next: function(value) {
                            try {
                                if (!fn(value)) return;
                            } catch (e2) {
                                return observer.error(e2);
                            }
                            observer.next(value);
                        },
                        error: function(e2) {
                            observer.error(e2);
                        },
                        complete: function() {
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "reduce",
            value: function reduce(fn) {
                var _this4 = this;
                if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                var C2 = getSpecies$1(this);
                var hasSeed = arguments.length > 1;
                var hasValue = false;
                var seed = arguments[1];
                var acc = seed;
                return new C2(function(observer) {
                    return _this4.subscribe({
                        next: function(value) {
                            var first = !hasValue;
                            hasValue = true;
                            if (!first || hasSeed) try {
                                acc = fn(acc, value);
                            } catch (e2) {
                                return observer.error(e2);
                            }
                            else acc = value;
                        },
                        error: function(e2) {
                            observer.error(e2);
                        },
                        complete: function() {
                            if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
                            observer.next(acc);
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "concat",
            value: function concat2() {
                var _this5 = this;
                for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                var C2 = getSpecies$1(this);
                return new C2(function(observer) {
                    var subscription;
                    var index = 0;
                    function startNext(next) {
                        subscription = next.subscribe({
                            next: function(v2) {
                                observer.next(v2);
                            },
                            error: function(e2) {
                                observer.error(e2);
                            },
                            complete: function() {
                                if (index === sources.length) {
                                    subscription = void 0;
                                    observer.complete();
                                } else startNext(C2.from(sources[index++]));
                            }
                        });
                    }
                    startNext(_this5);
                    return function() {
                        if (subscription) {
                            subscription.unsubscribe();
                            subscription = void 0;
                        }
                    };
                });
            }
        },
        {
            key: "flatMap",
            value: function flatMap(fn) {
                var _this6 = this;
                if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                var C2 = getSpecies$1(this);
                return new C2(function(observer) {
                    var subscriptions = [];
                    var outer = _this6.subscribe({
                        next: function(value) {
                            if (fn) try {
                                value = fn(value);
                            } catch (e21) {
                                return observer.error(e21);
                            }
                            var inner = C2.from(value).subscribe({
                                next: function(value2) {
                                    observer.next(value2);
                                },
                                error: function(e2) {
                                    observer.error(e2);
                                },
                                complete: function() {
                                    var i2 = subscriptions.indexOf(inner);
                                    if (i2 >= 0) subscriptions.splice(i2, 1);
                                    completeIfDone();
                                }
                            });
                            subscriptions.push(inner);
                        },
                        error: function(e2) {
                            observer.error(e2);
                        },
                        complete: function() {
                            completeIfDone();
                        }
                    });
                    function completeIfDone() {
                        if (outer.closed && subscriptions.length === 0) observer.complete();
                    }
                    return function() {
                        subscriptions.forEach(function(s2) {
                            return s2.unsubscribe();
                        });
                        outer.unsubscribe();
                    };
                });
            }
        },
        {
            key: SymbolObservable$1,
            value: function() {
                return this;
            }
        }
    ], [
        {
            key: "from",
            value: function from2(x2) {
                var C2 = typeof this === "function" ? this : Observable2;
                if (x2 == null) throw new TypeError(x2 + " is not an object");
                var method = getMethod$1(x2, SymbolObservable$1);
                if (method) {
                    var observable = method.call(x2);
                    if (Object(observable) !== observable) throw new TypeError(observable + " is not an object");
                    if (isObservable$1(observable) && observable.constructor === C2) return observable;
                    return new C2(function(observer) {
                        return observable.subscribe(observer);
                    });
                }
                if (hasSymbol$1("iterator")) {
                    method = getMethod$1(x2, SymbolIterator$1);
                    if (method) return new C2(function(observer) {
                        enqueue$1(function() {
                            if (observer.closed) return;
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = void 0;
                            try {
                                for(var _iterator = method.call(x2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var _item = _step.value;
                                    observer.next(_item);
                                    if (observer.closed) return;
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
                                } finally{
                                    if (_didIteratorError) throw _iteratorError;
                                }
                            }
                            observer.complete();
                        });
                    });
                }
                if (Array.isArray(x2)) return new C2(function(observer) {
                    enqueue$1(function() {
                        if (observer.closed) return;
                        for(var i2 = 0; i2 < x2.length; ++i2){
                            observer.next(x2[i2]);
                            if (observer.closed) return;
                        }
                        observer.complete();
                    });
                });
                throw new TypeError(x2 + " is not observable");
            }
        },
        {
            key: "of",
            value: function of() {
                for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
                var C2 = typeof this === "function" ? this : Observable2;
                return new C2(function(observer) {
                    enqueue$1(function() {
                        if (observer.closed) return;
                        for(var i2 = 0; i2 < items.length; ++i2){
                            observer.next(items[i2]);
                            if (observer.closed) return;
                        }
                        observer.complete();
                    });
                });
            }
        },
        {
            key: SymbolSpecies$1,
            get: function() {
                return this;
            }
        }
    ]);
    return Observable2;
}();
Observable$4.Observable = Observable$3;
if (hasSymbols$3()) Object.defineProperty(Observable$3, Symbol("extensions"), {
    value: {
        symbol: SymbolObservable$1,
        hostReportError: hostReportError$1
    },
    configurable: true
});
var zenObservable = Observable$4.Observable;
var Observable$1 = zenObservable;
var Observable$2 = Observable$1;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var extendStatics$2 = function(d2, b2) {
    extendStatics$2 = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
    } || function(d3, b3) {
        for(var p2 in b3)if (b3.hasOwnProperty(p2)) d3[p2] = b3[p2];
    };
    return extendStatics$2(d2, b2);
};
function __extends$4(d2, b2) {
    extendStatics$2(d2, b2);
    function __2() {
        this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
}
var __assign$4 = function() {
    __assign$4 = Object.assign || function __assign2(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$4.apply(this, arguments);
};
var genericMessage$2 = "Invariant Violation";
var _a$6 = Object.setPrototypeOf, setPrototypeOf$2 = _a$6 === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a$6;
var InvariantError$2 = function(_super) {
    __extends$4(InvariantError2, _super);
    function InvariantError2(message) {
        if (message === void 0) message = genericMessage$2;
        var _this = _super.call(this, typeof message === "number" ? genericMessage$2 + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage$2;
        setPrototypeOf$2(_this, InvariantError2.prototype);
        return _this;
    }
    return InvariantError2;
}(Error);
function invariant$3(condition, message) {
    if (!condition) throw new InvariantError$2(message);
}
function wrapConsoleMethod$2(method) {
    return function() {
        return console[method].apply(console, arguments);
    };
}
(function(invariant2) {
    invariant2.warn = wrapConsoleMethod$2("warn");
    invariant2.error = wrapConsoleMethod$2("error");
})(invariant$3 || (invariant$3 = {}));
var processStub$1 = {
    env: {}
};
if (typeof process === "object") processStub$1 = process;
else try {
    Function("stub", "process = stub")(processStub$1);
} catch (atLeastWeTried) {}
var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;
function _typeof$3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof$3 = function _typeof2(obj2) {
        return typeof obj2;
    };
    else _typeof$3 = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
    return _typeof$3(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect$1(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(_typeof$3(value)){
        case "string":
            return JSON.stringify(value);
        case "function":
            return value.name ? "[function ".concat(value.name, "]") : "[function]";
        case "object":
            if (value === null) return "null";
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) return "[Circular]";
    var seenValues = [].concat(previouslySeenValues, [
        value
    ]);
    var customInspectFn = getCustomFn(value);
    if (customInspectFn !== void 0) {
        var customValue = customInspectFn.call(value);
        if (customValue !== value) return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
    } else if (Array.isArray(value)) return formatArray(value, seenValues);
    return formatObject(value, seenValues);
}
function formatObject(object, seenValues) {
    var keys = Object.keys(object);
    if (keys.length === 0) return "{}";
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return "[" + getObjectTag(object) + "]";
    var properties = keys.map(function(key) {
        var value = formatValue(object[key], seenValues);
        return key + ": " + value;
    });
    return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
    if (array.length === 0) return "[]";
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return "[Array]";
    var len = Math.min(MAX_ARRAY_LENGTH, array.length);
    var remaining = array.length - len;
    var items = [];
    for(var i2 = 0; i2 < len; ++i2)items.push(formatValue(array[i2], seenValues));
    if (remaining === 1) items.push("... 1 more item");
    else if (remaining > 1) items.push("... ".concat(remaining, " more items"));
    return "[" + items.join(", ") + "]";
}
function getCustomFn(object) {
    var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];
    if (typeof customInspectFn === "function") return customInspectFn;
    if (typeof object.inspect === "function") return object.inspect;
}
function getObjectTag(object) {
    var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
        var name = object.constructor.name;
        if (typeof name === "string" && name !== "") return name;
    }
    return tag;
}
function invariant$2(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message != null ? message : "Unexpected invariant triggered.");
}
function defineInspect(classObject) {
    var fn = classObject.prototype.toJSON;
    typeof fn === "function" || invariant$2(0);
    classObject.prototype.inspect = fn;
    if (nodejsCustomInspectSymbol$1) classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
}
var Location = /* @__PURE__ */ function() {
    function Location2(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    var _proto = Location2.prototype;
    _proto.toJSON = function toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    };
    return Location2;
}();
defineInspect(Location);
var Token = /* @__PURE__ */ function() {
    function Token2(kind, start, end, line, column, prev, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
    var _proto2 = Token2.prototype;
    _proto2.toJSON = function toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    };
    return Token2;
}();
defineInspect(Token);
function isNode(maybeNode) {
    return maybeNode != null && typeof maybeNode.kind === "string";
}
var QueryDocumentKeys = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
};
var BREAK = Object.freeze({});
function visit(root2, visitor) {
    var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
    var stack = void 0;
    var inArray = Array.isArray(root2);
    var keys = [
        root2
    ];
    var index = -1;
    var edits = [];
    var node = void 0;
    var key = void 0;
    var parent = void 0;
    var path = [];
    var ancestors = [];
    var newRoot = root2;
    do {
        index++;
        var isLeaving = index === keys.length;
        var isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? void 0 : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) node = node.slice();
                else {
                    var clone = {};
                    for(var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++){
                        var k2 = _Object$keys2[_i2];
                        clone[k2] = node[k2];
                    }
                    node = clone;
                }
                var editOffset = 0;
                for(var ii = 0; ii < edits.length; ii++){
                    var editKey = edits[ii][0];
                    var editValue = edits[ii][1];
                    if (inArray) editKey -= editOffset;
                    if (inArray && editValue === null) {
                        node.splice(editKey, 1);
                        editOffset++;
                    } else node[editKey] = editValue;
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else {
            key = parent ? inArray ? index : keys[index] : void 0;
            node = parent ? parent[key] : newRoot;
            if (node === null || node === void 0) continue;
            if (parent) path.push(key);
        }
        var result = void 0;
        if (!Array.isArray(node)) {
            if (!isNode(node)) throw new Error("Invalid AST Node: ".concat(inspect$1(node), "."));
            var visitFn = getVisitFn(visitor, node.kind, isLeaving);
            if (visitFn) {
                result = visitFn.call(visitor, node, key, parent, path, ancestors);
                if (result === BREAK) break;
                if (result === false) {
                    if (!isLeaving) {
                        path.pop();
                        continue;
                    }
                } else if (result !== void 0) {
                    edits.push([
                        key,
                        result
                    ]);
                    if (!isLeaving) {
                        if (isNode(result)) node = result;
                        else {
                            path.pop();
                            continue;
                        }
                    }
                }
            }
        }
        if (result === void 0 && isEdited) edits.push([
            key,
            node
        ]);
        if (isLeaving) path.pop();
        else {
            var _visitorKeys$node$kin;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
            index = -1;
            edits = [];
            if (parent) ancestors.push(parent);
            parent = node;
        }
    }while (stack !== void 0);
    if (edits.length !== 0) newRoot = edits[edits.length - 1][1];
    return newRoot;
}
function getVisitFn(visitor, kind, isLeaving) {
    var kindVisitor = visitor[kind];
    if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === "function") return kindVisitor;
        var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === "function") return kindSpecificVisitor;
    } else {
        var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
            if (typeof specificVisitor === "function") return specificVisitor;
            var specificKindVisitor = specificVisitor[kind];
            if (typeof specificKindVisitor === "function") return specificKindVisitor;
        }
    }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var extendStatics$1 = function(d2, b2) {
    extendStatics$1 = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
    } || function(d3, b3) {
        for(var p2 in b3)if (b3.hasOwnProperty(p2)) d3[p2] = b3[p2];
    };
    return extendStatics$1(d2, b2);
};
function __extends$3(d2, b2) {
    extendStatics$1(d2, b2);
    function __2() {
        this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
}
var __assign$3 = function() {
    __assign$3 = Object.assign || function __assign2(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$3.apply(this, arguments);
};
function __spreadArrays$2() {
    for(var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)s2 += arguments[i2].length;
    for(var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)for(var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)r2[k2] = a2[j];
    return r2;
}
var genericMessage$1 = "Invariant Violation";
var _a$5 = Object.setPrototypeOf, setPrototypeOf$1 = _a$5 === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a$5;
var InvariantError$1 = function(_super) {
    __extends$3(InvariantError2, _super);
    function InvariantError2(message) {
        if (message === void 0) message = genericMessage$1;
        var _this = _super.call(this, typeof message === "number" ? genericMessage$1 + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage$1;
        setPrototypeOf$1(_this, InvariantError2.prototype);
        return _this;
    }
    return InvariantError2;
}(Error);
function invariant$1(condition, message) {
    if (!condition) throw new InvariantError$1(message);
}
function wrapConsoleMethod$1(method) {
    return function() {
        return console[method].apply(console, arguments);
    };
}
(function(invariant2) {
    invariant2.warn = wrapConsoleMethod$1("warn");
    invariant2.error = wrapConsoleMethod$1("error");
})(invariant$1 || (invariant$1 = {}));
var processStub = {
    env: {}
};
if (typeof process === "object") processStub = process;
else try {
    Function("stub", "process = stub")(processStub);
} catch (atLeastWeTried1) {}
var fastJsonStableStringify = function(data, opts) {
    if (!opts) opts = {};
    if (typeof opts === "function") opts = {
        cmp: opts
    };
    var cycles = typeof opts.cycles === "boolean" ? opts.cycles : false;
    var cmp = opts.cmp && function(f2) {
        return function(node) {
            return function(a2, b2) {
                var aobj = {
                    key: a2,
                    value: node[a2]
                };
                var bobj = {
                    key: b2,
                    value: node[b2]
                };
                return f2(aobj, bobj);
            };
        };
    }(opts.cmp);
    var seen = [];
    return function stringify3(node) {
        if (node && node.toJSON && typeof node.toJSON === "function") node = node.toJSON();
        if (node === void 0) return;
        if (typeof node == "number") return isFinite(node) ? "" + node : "null";
        if (typeof node !== "object") return JSON.stringify(node);
        var i2, out;
        if (Array.isArray(node)) {
            out = "[";
            for(i2 = 0; i2 < node.length; i2++){
                if (i2) out += ",";
                out += stringify3(node[i2]) || "null";
            }
            return out + "]";
        }
        if (node === null) return "null";
        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
        }
        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = "";
        for(i2 = 0; i2 < keys.length; i2++){
            var key = keys[i2];
            var value = stringify3(node[key]);
            if (!value) continue;
            if (out) out += ",";
            out += JSON.stringify(key) + ":" + value;
        }
        seen.splice(seenIndex, 1);
        return "{" + out + "}";
    }(data);
};
var _a$4 = Object.prototype, toString$3 = _a$4.toString, hasOwnProperty$7 = _a$4.hasOwnProperty;
var previousComparisons$1 = /* @__PURE__ */ new Map();
function equal$1(a2, b2) {
    try {
        return check$1(a2, b2);
    } finally{
        previousComparisons$1.clear();
    }
}
function check$1(a2, b2) {
    if (a2 === b2) return true;
    var aTag = toString$3.call(a2);
    var bTag = toString$3.call(b2);
    if (aTag !== bTag) return false;
    switch(aTag){
        case "[object Array]":
            if (a2.length !== b2.length) return false;
        case "[object Object]":
            if (previouslyCompared$1(a2, b2)) return true;
            var aKeys = Object.keys(a2);
            var bKeys = Object.keys(b2);
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length) return false;
            for(var k2 = 0; k2 < keyCount; ++k2){
                if (!hasOwnProperty$7.call(b2, aKeys[k2])) return false;
            }
            for(var k2 = 0; k2 < keyCount; ++k2){
                var key = aKeys[k2];
                if (!check$1(a2[key], b2[key])) return false;
            }
            return true;
        case "[object Error]":
            return a2.name === b2.name && a2.message === b2.message;
        case "[object Number]":
            if (a2 !== a2) return b2 !== b2;
        case "[object Boolean]":
        case "[object Date]":
            return +a2 === +b2;
        case "[object RegExp]":
        case "[object String]":
            return a2 == "" + b2;
        case "[object Map]":
        case "[object Set]":
            if (a2.size !== b2.size) return false;
            if (previouslyCompared$1(a2, b2)) return true;
            var aIterator = a2.entries();
            var isMap2 = aTag === "[object Map]";
            while(true){
                var info = aIterator.next();
                if (info.done) break;
                var _a2 = info.value, aKey = _a2[0], aValue = _a2[1];
                if (!b2.has(aKey)) return false;
                if (isMap2 && !check$1(aValue, b2.get(aKey))) return false;
            }
            return true;
    }
    return false;
}
function previouslyCompared$1(a2, b2) {
    var bSet = previousComparisons$1.get(a2);
    if (bSet) {
        if (bSet.has(b2)) return true;
    } else previousComparisons$1.set(a2, bSet = /* @__PURE__ */ new Set());
    bSet.add(b2);
    return false;
}
function isScalarValue(value) {
    return [
        "StringValue",
        "BooleanValue",
        "EnumValue"
    ].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return [
        "IntValue",
        "FloatValue"
    ].indexOf(value.kind) > -1;
}
function isStringValue$1(value) {
    return value.kind === "StringValue";
}
function isBooleanValue$1(value) {
    return value.kind === "BooleanValue";
}
function isIntValue$1(value) {
    return value.kind === "IntValue";
}
function isFloatValue$1(value) {
    return value.kind === "FloatValue";
}
function isVariable$1(value) {
    return value.kind === "Variable";
}
function isObjectValue$1(value) {
    return value.kind === "ObjectValue";
}
function isListValue$1(value) {
    return value.kind === "ListValue";
}
function isEnumValue$1(value) {
    return value.kind === "EnumValue";
}
function isNullValue$1(value) {
    return value.kind === "NullValue";
}
function valueToObjectRepresentation$1(argObj, name, value, variables) {
    if (isIntValue$1(value) || isFloatValue$1(value)) argObj[name.value] = Number(value.value);
    else if (isBooleanValue$1(value) || isStringValue$1(value)) argObj[name.value] = value.value;
    else if (isObjectValue$1(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function(obj) {
            return valueToObjectRepresentation$1(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    } else if (isVariable$1(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    } else if (isListValue$1(value)) argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation$1(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
    });
    else if (isEnumValue$1(value)) argObj[name.value] = value.value;
    else if (isNullValue$1(value)) argObj[name.value] = null;
    else throw new InvariantError$1(17);
}
function storeKeyNameFromField$1(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function(directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) directive.arguments.forEach(function(_a2) {
                var name = _a2.name, value = _a2.value;
                return valueToObjectRepresentation$1(directivesObj[directive.name.value], name, value, variables);
            });
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function(_a2) {
            var name = _a2.name, value = _a2.value;
            return valueToObjectRepresentation$1(argObj, name, value, variables);
        });
    }
    return getStoreKeyName$1(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES$1 = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export"
];
function getStoreKeyName$1(fieldName, args, directives) {
    if (directives && directives["connection"] && directives["connection"]["key"]) {
        if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
            var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function(key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives["connection"]["key"] + "(" + JSON.stringify(filteredArgs_1) + ")";
        } else return directives["connection"]["key"];
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fastJsonStableStringify(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES$1.indexOf(key) !== -1) return;
        if (directives[key] && Object.keys(directives[key]).length) completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
        else completeFieldName += "@" + key;
    });
    return completeFieldName;
}
function argumentsObjectFromField$1(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function(_a2) {
            var name = _a2.name, value = _a2.value;
            return valueToObjectRepresentation$1(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField$1(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField$1(selection) {
    return selection.kind === "Field";
}
function isInlineFragment$1(selection) {
    return selection.kind === "InlineFragment";
}
function isIdValue(idObject) {
    return idObject && idObject.type === "id" && typeof idObject.generated === "boolean";
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) generated = false;
    return __assign$3({
        type: "id",
        generated
    }, typeof idConfig === "string" ? {
        id: idConfig,
        typename: void 0
    } : idConfig);
}
function isJsonValue(jsonObject) {
    return jsonObject != null && typeof jsonObject === "object" && jsonObject.type === "json";
}
function defaultValueFromVariable(node) {
    throw new InvariantError$1(18);
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) onVariable = defaultValueFromVariable;
    switch(node.kind){
        case "Variable":
            return onVariable(node);
        case "NullValue":
            return null;
        case "IntValue":
            return parseInt(node.value, 10);
        case "FloatValue":
            return parseFloat(node.value);
        case "ListValue":
            return node.values.map(function(v2) {
                return valueFromNode(v2, onVariable);
            });
        case "ObjectValue":
            var value = {};
            for(var _i = 0, _a2 = node.fields; _i < _a2.length; _i++){
                var field = _a2[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        default:
            return node.value;
    }
}
function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function(directive) {
            directiveObj_1[directive.name.value] = argumentsObjectFromField$1(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude$1(selection, variables) {
    if (variables === void 0) variables = {};
    return getInclusionDirectives$1(selection.directives).every(function(_a2) {
        var directive = _a2.directive, ifArgument = _a2.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === "Variable") {
            evaledValue = variables[ifArgument.value.name.value];
            invariant$1(evaledValue !== void 0, 13);
        } else evaledValue = ifArgument.value.value;
        return directive.name.value === "skip" ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames$1(doc) {
    var names = [];
    visit(doc, {
        Directive: function(node) {
            names.push(node.name.value);
        }
    });
    return names;
}
function hasDirectives$1(names, doc) {
    return getDirectiveNames$1(doc).some(function(name) {
        return names.indexOf(name) > -1;
    });
}
function hasClientExports$1(document2) {
    return document2 && hasDirectives$1([
        "client"
    ], document2) && hasDirectives$1([
        "export"
    ], document2);
}
function isInclusionDirective$1(_a2) {
    var value = _a2.name.value;
    return value === "skip" || value === "include";
}
function getInclusionDirectives$1(directives) {
    return directives ? directives.filter(isInclusionDirective$1).map(function(directive) {
        var directiveArguments = directive.arguments;
        directive.name.value;
        invariant$1(directiveArguments && directiveArguments.length === 1, 14);
        var ifArgument = directiveArguments[0];
        invariant$1(ifArgument.name && ifArgument.name.value === "if", 15);
        var ifValue = ifArgument.value;
        invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 16);
        return {
            directive,
            ifArgument
        };
    }) : [];
}
function getFragmentQueryDocument$1(document2, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document2.definitions.forEach(function(definition) {
        if (definition.kind === "OperationDefinition") throw new InvariantError$1(11);
        if (definition.kind === "FragmentDefinition") fragments.push(definition);
    });
    if (typeof actualFragmentName === "undefined") {
        invariant$1(fragments.length === 1, 12);
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign$3(__assign$3({}, document2), {
        definitions: __spreadArrays$2([
            {
                kind: "OperationDefinition",
                operation: "query",
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: actualFragmentName
                            }
                        }
                    ]
                }
            }
        ], document2.definitions)
    });
    return query;
}
function assign$2(target) {
    var sources = [];
    for(var _i = 1; _i < arguments.length; _i++)sources[_i - 1] = arguments[_i];
    sources.forEach(function(source) {
        if (typeof source === "undefined" || source === null) return;
        Object.keys(source).forEach(function(key) {
            target[key] = source[key];
        });
    });
    return target;
}
function getMutationDefinition(doc) {
    checkDocument$1(doc);
    var mutationDef = doc.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition" && definition.operation === "mutation";
    })[0];
    invariant$1(mutationDef, 1);
    return mutationDef;
}
function checkDocument$1(doc) {
    invariant$1(doc && doc.kind === "Document", 2);
    var operations = doc.definitions.filter(function(d2) {
        return d2.kind !== "FragmentDefinition";
    }).map(function(definition) {
        if (definition.kind !== "OperationDefinition") throw new InvariantError$1(3);
        return definition;
    });
    invariant$1(operations.length <= 1, 4);
    return doc;
}
function getOperationDefinition$1(doc) {
    checkDocument$1(doc);
    return doc.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition";
    })[0];
}
function getOperationDefinitionOrDie(document2) {
    var def = getOperationDefinition$1(document2);
    invariant$1(def, 5);
    return def;
}
function getOperationName$1(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x2) {
        return x2.name.value;
    })[0] || null;
}
function getFragmentDefinitions$1(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === "FragmentDefinition";
    });
}
function getQueryDefinition$1(doc) {
    var queryDef = getOperationDefinition$1(doc);
    invariant$1(queryDef && queryDef.operation === "query", 6);
    return queryDef;
}
function getFragmentDefinition$1(doc) {
    invariant$1(doc.kind === "Document", 7);
    invariant$1(doc.definitions.length <= 1, 8);
    var fragmentDef = doc.definitions[0];
    invariant$1(fragmentDef.kind === "FragmentDefinition", 9);
    return fragmentDef;
}
function getMainDefinition$1(queryDoc) {
    checkDocument$1(queryDoc);
    var fragmentDefinition;
    for(var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++){
        var definition = _a2[_i];
        if (definition.kind === "OperationDefinition") {
            var operation = definition.operation;
            if (operation === "query" || operation === "mutation" || operation === "subscription") return definition;
        }
        if (definition.kind === "FragmentDefinition" && !fragmentDefinition) fragmentDefinition = definition;
    }
    if (fragmentDefinition) return fragmentDefinition;
    throw new InvariantError$1(10);
}
function createFragmentMap$1(fragments) {
    if (fragments === void 0) fragments = [];
    var symTable = {};
    fragments.forEach(function(fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues$1(definition) {
    if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions.filter(function(_a2) {
            var defaultValue = _a2.defaultValue;
            return defaultValue;
        }).map(function(_a2) {
            var variable = _a2.variable, defaultValue = _a2.defaultValue;
            var defaultValueObj = {};
            valueToObjectRepresentation$1(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return assign$2.apply(void 0, __spreadArrays$2([
            {}
        ], defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = /* @__PURE__ */ new Set();
    if (operation.variableDefinitions) for(var _i = 0, _a2 = operation.variableDefinitions; _i < _a2.length; _i++){
        var definition = _a2[_i];
        names.add(definition.variable.name.value);
    }
    return names;
}
function filterInPlace$1(array, test, context) {
    var target = 0;
    array.forEach(function(elem, i2) {
        if (test.call(this, elem, i2, array)) array[target++] = elem;
    }, context);
    array.length = target;
    return array;
}
var TYPENAME_FIELD$1 = {
    kind: "Field",
    name: {
        kind: "Name",
        value: "__typename"
    }
};
function isEmpty$1(op, fragments) {
    return op.selectionSet.selections.every(function(selection) {
        return selection.kind === "FragmentSpread" && isEmpty$1(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty$1(doc) {
    return isEmpty$1(getOperationDefinition$1(doc) || getFragmentDefinition$1(doc), createFragmentMap$1(getFragmentDefinitions$1(doc))) ? null : doc;
}
function getDirectiveMatcher$1(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function(dir) {
            return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
        });
    };
}
function removeDirectivesFromDocument$1(directives, doc) {
    var variablesInUse = /* @__PURE__ */ Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty$1(visit(doc, {
        Variable: {
            enter: function(node, _key, parent) {
                if (parent.kind !== "VariableDefinition") variablesInUse[node.name.value] = true;
            }
        },
        Field: {
            enter: function(node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function(directive) {
                        return directive.remove;
                    });
                    if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher$1(directives))) {
                        if (node.arguments) node.arguments.forEach(function(arg) {
                            if (arg.value.kind === "Variable") variablesToRemove.push({
                                name: arg.value.name.value
                            });
                        });
                        if (node.selectionSet) getAllFragmentSpreadsFromSelectionSet$1(node.selectionSet).forEach(function(frag) {
                            fragmentSpreadsToRemove.push({
                                name: frag.name.value
                            });
                        });
                        return null;
                    }
                }
            }
        },
        FragmentSpread: {
            enter: function(node) {
                fragmentSpreadsInUse[node.name.value] = true;
            }
        },
        Directive: {
            enter: function(node) {
                if (getDirectiveMatcher$1(directives)(node)) return null;
            }
        }
    }));
    if (modifiedDoc && filterInPlace$1(variablesToRemove, function(v2) {
        return !variablesInUse[v2.name];
    }).length) modifiedDoc = removeArgumentsFromDocument$1(variablesToRemove, modifiedDoc);
    if (modifiedDoc && filterInPlace$1(fragmentSpreadsToRemove, function(fs) {
        return !fragmentSpreadsInUse[fs.name];
    }).length) modifiedDoc = removeFragmentSpreadFromDocument$1(fragmentSpreadsToRemove, modifiedDoc);
    return modifiedDoc;
}
function addTypenameToDocument$1(doc) {
    return visit(checkDocument$1(doc), {
        SelectionSet: {
            enter: function(node, _key, parent) {
                if (parent && parent.kind === "OperationDefinition") return;
                var selections = node.selections;
                if (!selections) return;
                var skip = selections.some(function(selection) {
                    return isField$1(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
                });
                if (skip) return;
                var field = parent;
                if (isField$1(field) && field.directives && field.directives.some(function(d2) {
                    return d2.name.value === "export";
                })) return;
                return __assign$3(__assign$3({}, node), {
                    selections: __spreadArrays$2(selections, [
                        TYPENAME_FIELD$1
                    ])
                });
            }
        }
    });
}
var connectionRemoveConfig$2 = {
    test: function(directive) {
        var willRemove = directive.name.value === "connection";
        if (willRemove) !directive.arguments || directive.arguments.some(function(arg) {
            return arg.name.value === "key";
        });
        return willRemove;
    }
};
function removeConnectionDirectiveFromDocument$1(doc) {
    return removeDirectivesFromDocument$1([
        connectionRemoveConfig$2
    ], checkDocument$1(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    return selectionSet && selectionSet.selections && selectionSet.selections.some(function(selection) {
        return hasDirectivesInSelection(directives, selection, nestedCheck);
    });
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    if (!isField$1(selection)) return true;
    if (!selection.directives) return false;
    return selection.directives.some(getDirectiveMatcher$1(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}
function getDirectivesFromDocument(directives, doc) {
    checkDocument$1(doc);
    var parentPath;
    return nullIfDocIsEmpty$1(visit(doc, {
        SelectionSet: {
            enter: function(node, _key, _parent, path) {
                var currentPath = path.join("-");
                if (!parentPath || currentPath === parentPath || !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function(selection) {
                            return hasDirectivesInSelection(directives, selection);
                        });
                        if (hasDirectivesInSelectionSet(directives, node, false)) parentPath = currentPath;
                        return __assign$3(__assign$3({}, node), {
                            selections: selectionsWithDirectives
                        });
                    } else return null;
                }
            }
        }
    }));
}
function getArgumentMatcher$1(config) {
    return function argumentMatcher(argument) {
        return config.some(function(aConfig) {
            return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
        });
    };
}
function removeArgumentsFromDocument$1(config, doc) {
    var argMatcher = getArgumentMatcher$1(config);
    return nullIfDocIsEmpty$1(visit(doc, {
        OperationDefinition: {
            enter: function(node) {
                return __assign$3(__assign$3({}, node), {
                    variableDefinitions: node.variableDefinitions.filter(function(varDef) {
                        return !config.some(function(arg) {
                            return arg.name === varDef.variable.name.value;
                        });
                    })
                });
            }
        },
        Field: {
            enter: function(node) {
                var shouldRemoveField = config.some(function(argConfig) {
                    return argConfig.remove;
                });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function(arg) {
                        if (argMatcher(arg)) argMatchCount_1 += 1;
                    });
                    if (argMatchCount_1 === 1) return null;
                }
            }
        },
        Argument: {
            enter: function(node) {
                if (argMatcher(node)) return null;
            }
        }
    }));
}
function removeFragmentSpreadFromDocument$1(config, doc) {
    function enter(node) {
        if (config.some(function(def) {
            return def.name === node.name.value;
        })) return null;
    }
    return nullIfDocIsEmpty$1(visit(doc, {
        FragmentSpread: {
            enter
        },
        FragmentDefinition: {
            enter
        }
    }));
}
function getAllFragmentSpreadsFromSelectionSet$1(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function(selection) {
        if ((isField$1(selection) || isInlineFragment$1(selection)) && selection.selectionSet) getAllFragmentSpreadsFromSelectionSet$1(selection.selectionSet).forEach(function(frag) {
            return allFragments.push(frag);
        });
        else if (selection.kind === "FragmentSpread") allFragments.push(selection);
    });
    return allFragments;
}
function buildQueryFromSelectionSet$1(document2) {
    var definition = getMainDefinition$1(document2);
    var definitionOperation = definition.operation;
    if (definitionOperation === "query") return document2;
    var modifiedDoc = visit(document2, {
        OperationDefinition: {
            enter: function(node) {
                return __assign$3(__assign$3({}, node), {
                    operation: "query"
                });
            }
        }
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument$1(document2) {
    checkDocument$1(document2);
    var modifiedDoc = removeDirectivesFromDocument$1([
        {
            test: function(directive) {
                return directive.name.value === "client";
            },
            remove: true
        }
    ], document2);
    if (modifiedDoc) modifiedDoc = visit(modifiedDoc, {
        FragmentDefinition: {
            enter: function(node) {
                if (node.selectionSet) {
                    var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
                        return isField$1(selection) && selection.name.value === "__typename";
                    });
                    if (isTypenameOnly) return null;
                }
            }
        }
    });
    return modifiedDoc;
}
var canUseWeakMap$1 = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
var toString$2 = Object.prototype.toString;
function cloneDeep$1(value) {
    return cloneDeepHelper$1(value, /* @__PURE__ */ new Map());
}
function cloneDeepHelper$1(val, seen) {
    switch(toString$2.call(val)){
        case "[object Array]":
            if (seen.has(val)) return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function(child, i2) {
                copy_1[i2] = cloneDeepHelper$1(child, seen);
            });
            return copy_1;
        case "[object Object]":
            if (seen.has(val)) return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function(key) {
                copy_2[key] = cloneDeepHelper$1(val[key], seen);
            });
            return copy_2;
        default:
            return val;
    }
}
function getEnv() {
    if (typeof process !== "undefined" && "production") return "production";
    return "development";
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv("production") === true;
}
function isDevelopment() {
    return isEnv("development") === true;
}
function isTest() {
    return isEnv("test") === true;
}
function tryFunctionOrLogError(f2) {
    try {
        return f2();
    } catch (e2) {
        if (console.error) console.error(e2);
    }
}
function graphQLResultHasError$1(result) {
    return result.errors && result.errors.length;
}
function deepFreeze$1(o2) {
    Object.freeze(o2);
    Object.getOwnPropertyNames(o2).forEach(function(prop) {
        if (o2[prop] !== null && (typeof o2[prop] === "object" || typeof o2[prop] === "function") && !Object.isFrozen(o2[prop])) deepFreeze$1(o2[prop]);
    });
    return o2;
}
function maybeDeepFreeze$1(obj) {
    if (isDevelopment() || isTest()) {
        var symbolIsPolyfilled = typeof Symbol === "function" && typeof Symbol("") === "string";
        if (!symbolIsPolyfilled) return deepFreeze$1(obj);
    }
    return obj;
}
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function mergeDeep$1() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return mergeDeepArray$1(sources);
}
function mergeDeepArray$1(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var pastCopies = [];
        target = shallowCopyForMerge(target, pastCopies);
        for(var i2 = 1; i2 < count; ++i2)target = mergeHelper(target, sources[i2], pastCopies);
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
function mergeHelper(target, source, pastCopies) {
    if (isObject(source) && isObject(target)) {
        if (Object.isExtensible && !Object.isExtensible(target)) target = shallowCopyForMerge(target, pastCopies);
        Object.keys(source).forEach(function(sourceKey) {
            var sourceValue = source[sourceKey];
            if (hasOwnProperty$6.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (sourceValue !== targetValue) target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
            } else target[sourceKey] = sourceValue;
        });
        return target;
    }
    return source;
}
function shallowCopyForMerge(value, pastCopies) {
    if (value !== null && typeof value === "object" && pastCopies.indexOf(value) < 0) {
        if (Array.isArray(value)) value = value.slice(0);
        else value = __assign$3({
            __proto__: Object.getPrototypeOf(value)
        }, value);
        pastCopies.push(value);
    }
    return value;
}
var haveWarned = /* @__PURE__ */ Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) type = "warn";
    if (!isProduction() && !haveWarned[msg]) {
        if (!isTest()) haveWarned[msg] = true;
        if (type === "error") console.error(msg);
        else console.warn(msg);
    }
}
function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}
var bundle_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addTypenameToDocument: addTypenameToDocument$1,
    argumentsObjectFromField: argumentsObjectFromField$1,
    assign: assign$2,
    buildQueryFromSelectionSet: buildQueryFromSelectionSet$1,
    canUseWeakMap: canUseWeakMap$1,
    checkDocument: checkDocument$1,
    cloneDeep: cloneDeep$1,
    createFragmentMap: createFragmentMap$1,
    getDefaultValues: getDefaultValues$1,
    getDirectiveInfoFromField,
    getDirectiveNames: getDirectiveNames$1,
    getDirectivesFromDocument,
    getEnv,
    getFragmentDefinition: getFragmentDefinition$1,
    getFragmentDefinitions: getFragmentDefinitions$1,
    getFragmentQueryDocument: getFragmentQueryDocument$1,
    getInclusionDirectives: getInclusionDirectives$1,
    getMainDefinition: getMainDefinition$1,
    getMutationDefinition,
    getOperationDefinition: getOperationDefinition$1,
    getOperationDefinitionOrDie,
    getOperationName: getOperationName$1,
    getQueryDefinition: getQueryDefinition$1,
    getStoreKeyName: getStoreKeyName$1,
    graphQLResultHasError: graphQLResultHasError$1,
    hasClientExports: hasClientExports$1,
    hasDirectives: hasDirectives$1,
    isDevelopment,
    isEnv,
    isField: isField$1,
    isIdValue,
    isInlineFragment: isInlineFragment$1,
    isJsonValue,
    isNumberValue,
    isProduction,
    isScalarValue,
    isTest,
    maybeDeepFreeze: maybeDeepFreeze$1,
    mergeDeep: mergeDeep$1,
    mergeDeepArray: mergeDeepArray$1,
    removeArgumentsFromDocument: removeArgumentsFromDocument$1,
    removeClientSetsFromDocument: removeClientSetsFromDocument$1,
    removeConnectionDirectiveFromDocument: removeConnectionDirectiveFromDocument$1,
    removeDirectivesFromDocument: removeDirectivesFromDocument$1,
    removeFragmentSpreadFromDocument: removeFragmentSpreadFromDocument$1,
    resultKeyNameFromField: resultKeyNameFromField$1,
    shouldInclude: shouldInclude$1,
    storeKeyNameFromField: storeKeyNameFromField$1,
    stripSymbols,
    toIdValue,
    tryFunctionOrLogError,
    valueFromNode,
    valueToObjectRepresentation: valueToObjectRepresentation$1,
    variablesInOperation,
    warnOnceInDevelopment,
    isEqual: equal$1
}, Symbol.toStringTag, {
    value: "Module"
}));
function validateOperation$1(operation) {
    var OPERATION_FIELDS = [
        "query",
        "operationName",
        "variables",
        "extensions",
        "context"
    ];
    for(var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++){
        var key = _a2[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) throw new InvariantError$2(2);
    }
    return operation;
}
(function(_super) {
    __extends$4(LinkError2, _super);
    function LinkError2(message, link2) {
        var _this = _super.call(this, message) || this;
        _this.link = link2;
        return _this;
    }
    return LinkError2;
})(Error);
function isTerminating$1(link2) {
    return link2.request.length <= 1;
}
function transformOperation$1(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query
    };
    if (!transformedOperation.operationName) transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName$1(transformedOperation.query) : "";
    return transformedOperation;
}
function createOperation$1(starting, operation) {
    var context = __assign$4({}, starting);
    var setContext = function(next) {
        if (typeof next === "function") context = __assign$4({}, context, next(context));
        else context = __assign$4({}, context, next);
    };
    var getContext = function() {
        return __assign$4({}, context);
    };
    Object.defineProperty(operation, "setContext", {
        enumerable: false,
        value: setContext
    });
    Object.defineProperty(operation, "getContext", {
        enumerable: false,
        value: getContext
    });
    Object.defineProperty(operation, "toKey", {
        enumerable: false,
        value: function() {
            return getKey(operation);
        }
    });
    return operation;
}
function getKey(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([
        operationName,
        query,
        variables
    ]);
}
function passthrough$1(op, forward) {
    return forward ? forward(op) : Observable$2.of();
}
function toLink$1(handler) {
    return typeof handler === "function" ? new ApolloLink$1(handler) : handler;
}
function empty() {
    return new ApolloLink$1(function() {
        return Observable$2.of();
    });
}
function from(links) {
    if (links.length === 0) return empty();
    return links.map(toLink$1).reduce(function(x2, y) {
        return x2.concat(y);
    });
}
function split$1(test, left, right) {
    var leftLink = toLink$1(left);
    var rightLink = toLink$1(right || new ApolloLink$1(passthrough$1));
    if (isTerminating$1(leftLink) && isTerminating$1(rightLink)) return new ApolloLink$1(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable$2.of() : rightLink.request(operation) || Observable$2.of();
    });
    else return new ApolloLink$1(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable$2.of() : rightLink.request(operation, forward) || Observable$2.of();
    });
}
var concat = function(first, second) {
    var firstLink = toLink$1(first);
    if (isTerminating$1(firstLink)) return firstLink;
    var nextLink = toLink$1(second);
    if (isTerminating$1(nextLink)) return new ApolloLink$1(function(operation) {
        return firstLink.request(operation, function(op) {
            return nextLink.request(op) || Observable$2.of();
        }) || Observable$2.of();
    });
    else return new ApolloLink$1(function(operation, forward) {
        return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || Observable$2.of();
        }) || Observable$2.of();
    });
};
var ApolloLink$1 = function() {
    function ApolloLink2(request) {
        if (request) this.request = request;
    }
    ApolloLink2.prototype.split = function(test, left, right) {
        return this.concat(split$1(test, left, right || new ApolloLink2(passthrough$1)));
    };
    ApolloLink2.prototype.concat = function(next) {
        return concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
        throw new InvariantError$2(1);
    };
    ApolloLink2.empty = empty;
    ApolloLink2.from = from;
    ApolloLink2.split = split$1;
    ApolloLink2.execute = execute$1;
    return ApolloLink2;
}();
function execute$1(link2, operation) {
    return link2.request(createOperation$1(operation.context, transformOperation$1(validateOperation$1(operation)))) || Observable$2.of();
}
var connectionRemoveConfig$1 = {
    test: function(directive) {
        return directive.name.value === "jsonapi";
    },
    remove: true
};
var removed = /* @__PURE__ */ new Map();
function removeRestSetsFromDocument(query) {
    var cached = removed.get(query);
    if (cached) return cached;
    checkDocument$1(query);
    var docClone = removeDirectivesFromDocument$1([
        connectionRemoveConfig$1
    ], query);
    removed.set(query, docClone);
    return docClone;
}
var mapObject = function(obj, fn) {
    return Object.entries(obj).map(fn).reduce(function(acc, _a2) {
        var k2 = _a2[0], v2 = _a2[1];
        acc[k2] = v2;
        return acc;
    }, {});
};
var mapObjectValues = function(obj, fn) {
    return mapObject(obj, function(_a2) {
        var k2 = _a2[0], v2 = _a2[1];
        return [
            k2,
            fn(v2)
        ];
    });
};
var identity = function(v2) {
    return v2;
};
var __assign$2 = globalThis && globalThis.__assign || function() {
    __assign$2 = Object.assign || function(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$2.apply(this, arguments);
};
var __awaiter$2 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P2, generator) {
    function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
        });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e2) {
                reject(e2);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e2) {
                reject(e2);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = globalThis && globalThis.__generator || function(thisArg, body) {
    var _2 = {
        label: 0,
        sent: function() {
            if (t2[0] & 1) throw t2[1];
            return t2[1];
        },
        trys: [],
        ops: []
    }, f2, y, t2, g2;
    return g2 = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
        return this;
    }), g2;
    function verb(n2) {
        return function(v2) {
            return step([
                n2,
                v2
            ]);
        };
    }
    function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while(_2)try {
            if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
            if (y = 0, t2) op = [
                op[0] & 2,
                t2.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t2 = op;
                    break;
                case 4:
                    _2.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _2.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _2 = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                        _2.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                        _2.label = t2[1];
                        t2 = op;
                        break;
                    }
                    if (t2 && _2.label < t2[2]) {
                        _2.label = t2[2];
                        _2.ops.push(op);
                        break;
                    }
                    if (t2[2]) _2.ops.pop();
                    _2.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _2);
        } catch (e2) {
            op = [
                6,
                e2
            ];
            y = 0;
        } finally{
            f2 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __rest$1 = globalThis && globalThis.__rest || function(s2, e2) {
    var t2 = {};
    for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
};
var __spreadArrays$1 = globalThis && globalThis.__spreadArrays || function() {
    for(var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)s2 += arguments[i2].length;
    for(var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)for(var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)r2[k2] = a2[j];
    return r2;
};
var flattenResource = function(_a2) {
    var attributes = _a2.attributes, relationships = _a2.relationships;
    _a2.links;
    var restResource = __rest$1(_a2, [
        "attributes",
        "relationships",
        "links"
    ]);
    if (!relationships) return __assign$2(__assign$2({}, restResource), attributes);
    var flattenedRelationships = mapObjectValues(relationships, function(related) {
        return related && related.data && applyToData(flattenResource)(related).data;
    });
    return __assign$2(__assign$2(__assign$2({}, restResource), attributes), flattenedRelationships);
};
var findResource = function(_a2, resources) {
    var id = _a2.id, type = _a2.type;
    return resources.find(function(_a3) {
        var resourceId = _a3.id, resourceType = _a3.type;
        return id === resourceId && type === resourceType;
    });
};
var _denormalizeRelationships = function(data, allResources) {
    if (!data || !data.relationships || data.__relationships_denormalizing) return data;
    data.__relationships_denormalizing = true;
    var relationships = mapObjectValues(data.relationships, function(related) {
        return related && related.data && applyToData(function(item) {
            return _denormalizeRelationships(findResource(item, allResources) || item, allResources);
        })(related);
    });
    return __assign$2(__assign$2({}, data), {
        relationships
    });
};
var denormalizeRelationships = function(data, _a2) {
    var _b = _a2.included, included = _b === void 0 ? [] : _b;
    return _denormalizeRelationships(data, __spreadArrays$1([
        data
    ], included));
};
var applyToData = function(fn) {
    return function(_a2) {
        var data = _a2.data, rest = __rest$1(_a2, [
            "data"
        ]);
        if (Array.isArray(data)) return __assign$2({
            data: data.map(function(obj) {
                return fn(obj, rest);
            })
        }, rest);
        return __assign$2({
            data: fn(data, rest)
        }, rest);
    };
};
var applyToIncluded = function(fn) {
    return function(_a2) {
        var included = _a2.included, rest = __rest$1(_a2, [
            "included"
        ]);
        if (!included) return rest;
        return __assign$2({
            included: included.map(function(obj) {
                return fn(obj, rest);
            })
        }, rest);
    };
};
var applyToJsonapiFullResponse = function(fn) {
    return function(_a2) {
        var __jsonapi_full_response = _a2.__jsonapi_full_response, rest = __rest$1(_a2, [
            "__jsonapi_full_response"
        ]);
        return __jsonapi_full_response ? __assign$2({
            __jsonapi_full_response: fn(__jsonapi_full_response)
        }, rest) : rest;
    };
};
var applyNormalizer = function(normalizer) {
    return function(resource) {
        return __assign$2({
            __typename: normalizer(resource.type)
        }, resource);
    };
};
var typeFor = function(data) {
    return Array.isArray(data) ? data[0] && data[0].type : data.type;
};
var typenameNamespacer = function(prefix, normalizer) {
    var resourceTypenameNamespacer = function(_a2) {
        var attributes = _a2.attributes, relationships = _a2.relationships, meta = _a2.meta, links = _a2.links, resource = __rest$1(_a2, [
            "attributes",
            "relationships",
            "meta",
            "links"
        ]);
        var __typename = normalizer("" + prefix + resource.type);
        return __assign$2(__assign$2({}, resource), {
            __typename,
            attributes: attributes && __assign$2(__assign$2({}, attributes), {
                __typename: normalizer(__typename + "_attributes")
            }),
            relationships: relationships && __assign$2(__assign$2({}, mapObjectValues(relationships, function(related) {
                return related && related.data && applyToData(resourceTypenameNamespacer)(related);
            })), {
                __typename: normalizer(__typename + "_relationships")
            }),
            meta: meta && __assign$2(__assign$2({}, meta), {
                __typename: normalizer(__typename + "_meta")
            }),
            links: links && __assign$2(__assign$2({}, links), {
                __typename: normalizer(__typename + "_links")
            })
        });
    };
    var bodyTypenameNamespacer = function(body) {
        var type = typeFor(body.data) || "unknown";
        return {
            data: body.data && (Array.isArray(body.data) ? body.data.map(resourceTypenameNamespacer) : resourceTypenameNamespacer(body.data)),
            meta: body.meta && __assign$2(__assign$2({}, body.meta), {
                __typename: normalizer("" + prefix + type + "_body_meta")
            }),
            links: body.links && __assign$2(__assign$2({}, body.links), {
                __typename: normalizer("" + prefix + type + "_body_links")
            }),
            included: body.included ? body.included.map(resourceTypenameNamespacer) : body.included,
            __typename: normalizer("" + prefix + type + "_body")
        };
    };
    return bodyTypenameNamespacer;
};
var preserveBody = function(normalizer) {
    return function(body) {
        return __awaiter$2(void 0, void 0, void 0, function() {
            var __jsonapi_full_response;
            return __generator$2(this, function(_a2) {
                __jsonapi_full_response = typenameNamespacer("jsonapi_full_response_", normalizer)(body);
                return [
                    2,
                    __assign$2(__assign$2({}, body), {
                        __typename: normalizer(__jsonapi_full_response.__typename + "_wrapper"),
                        __jsonapi_full_response
                    })
                ];
            });
        });
    };
};
var jsonapiResponseTransformer = function(response, typeNameNormalizer, includeJsonapi) {
    return __awaiter$2(void 0, void 0, void 0, function() {
        return __generator$2(this, function(_a2) {
            return [
                2,
                response.json().then(applyToIncluded(applyNormalizer(typeNameNormalizer))).then(applyToData(applyNormalizer(typeNameNormalizer))).then(includeJsonapi ? preserveBody(typeNameNormalizer) : identity).then(applyToData(denormalizeRelationships)).then(applyToData(flattenResource)).then(applyToJsonapiFullResponse(applyToIncluded(denormalizeRelationships))).then(applyToJsonapiFullResponse(applyToData(denormalizeRelationships))).then(function(_a3) {
                    var data = _a3.data, __jsonapi_full_response = _a3.__jsonapi_full_response, __typename = _a3.__typename;
                    return includeJsonapi ? {
                        graphql: data,
                        jsonapi: __jsonapi_full_response,
                        __typename
                    } : data;
                })
            ];
        });
    });
};
var global$3;
if (typeof global$3 !== "undefined") global$3;
else if (typeof window !== "undefined") global$3 = window;
else if (typeof self !== "undefined") global$3 = self;
else global$3 = {};
var global$4 = global$3;
var async = {};
var tslib = {
    exports: {}
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ (function(module2) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter2;
    var __generator2;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays2;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
        var root2 = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
        factory(createExporter(root2, createExporter(module2.exports)));
        function createExporter(exports, previous) {
            if (exports !== root2) {
                if (typeof Object.create === "function") Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                else exports.__esModule = true;
            }
            return function(id, v2) {
                return exports[id] = previous ? previous(id, v2) : v2;
            };
        }
    })(function(exporter) {
        var extendStatics2 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
        } || function(d2, b2) {
            for(var p2 in b2)if (b2.hasOwnProperty(p2)) d2[p2] = b2[p2];
        };
        __extends2 = function(d2, b2) {
            extendStatics2(d2, b2);
            function __2() {
                this.constructor = d2;
            }
            d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
        };
        __assign2 = Object.assign || function(t2) {
            for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
                s2 = arguments[i2];
                for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
            }
            return t2;
        };
        __rest2 = function(s2, e2) {
            var t2 = {};
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
            if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
                for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
            }
            return t2;
        };
        __decorate = function(decorators, target, key, desc) {
            var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
            else for(var i2 = decorators.length - 1; i2 >= 0; i2--)if (d2 = decorators[i2]) r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
            return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
        };
        __param = function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        };
        __metadata = function(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P2, generator) {
            function adopt(value) {
                return value instanceof P2 ? value : new P2(function(resolve) {
                    resolve(value);
                });
            }
            return new (P2 || (P2 = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e2) {
                        reject(e2);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e2) {
                        reject(e2);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        __generator2 = function(thisArg, body) {
            var _2 = {
                label: 0,
                sent: function() {
                    if (t2[0] & 1) throw t2[1];
                    return t2[1];
                },
                trys: [],
                ops: []
            }, f2, y, t2, g2;
            return g2 = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
                return this;
            }), g2;
            function verb(n2) {
                return function(v2) {
                    return step([
                        n2,
                        v2
                    ]);
                };
            }
            function step(op) {
                if (f2) throw new TypeError("Generator is already executing.");
                while(_2)try {
                    if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
                    if (y = 0, t2) op = [
                        op[0] & 2,
                        t2.value
                    ];
                    switch(op[0]){
                        case 0:
                        case 1:
                            t2 = op;
                            break;
                        case 4:
                            _2.label++;
                            return {
                                value: op[1],
                                done: false
                            };
                        case 5:
                            _2.label++;
                            y = op[1];
                            op = [
                                0
                            ];
                            continue;
                        case 7:
                            op = _2.ops.pop();
                            _2.trys.pop();
                            continue;
                        default:
                            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _2 = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                                _2.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _2.label < t2[1]) {
                                _2.label = t2[1];
                                t2 = op;
                                break;
                            }
                            if (t2 && _2.label < t2[2]) {
                                _2.label = t2[2];
                                _2.ops.push(op);
                                break;
                            }
                            if (t2[2]) _2.ops.pop();
                            _2.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _2);
                } catch (e2) {
                    op = [
                        6,
                        e2
                    ];
                    y = 0;
                } finally{
                    f2 = t2 = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        };
        __createBinding = function(o2, m2, k2, k22) {
            if (k22 === void 0) k22 = k2;
            o2[k22] = m2[k2];
        };
        __exportStar = function(m2, exports) {
            for(var p2 in m2)if (p2 !== "default" && !exports.hasOwnProperty(p2)) exports[p2] = m2[p2];
        };
        __values = function(o2) {
            var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
            if (m2) return m2.call(o2);
            if (o2 && typeof o2.length === "number") return {
                next: function() {
                    if (o2 && i2 >= o2.length) o2 = void 0;
                    return {
                        value: o2 && o2[i2++],
                        done: !o2
                    };
                }
            };
            throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o2, n2) {
            var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
            if (!m2) return o2;
            var i2 = m2.call(o2), r2, ar = [], e2;
            try {
                while((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)ar.push(r2.value);
            } catch (error) {
                e2 = {
                    error
                };
            } finally{
                try {
                    if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
                } finally{
                    if (e2) throw e2.error;
                }
            }
            return ar;
        };
        __spread = function() {
            for(var ar = [], i2 = 0; i2 < arguments.length; i2++)ar = ar.concat(__read(arguments[i2]));
            return ar;
        };
        __spreadArrays2 = function() {
            for(var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)s2 += arguments[i2].length;
            for(var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)for(var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)r2[k2] = a2[j];
            return r2;
        };
        __await = function(v2) {
            return this instanceof __await ? (this.v = v2, this) : new __await(v2);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g2 = generator.apply(thisArg, _arguments || []), i2, q = [];
            return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
                return this;
            }, i2;
            function verb(n2) {
                if (g2[n2]) i2[n2] = function(v2) {
                    return new Promise(function(a2, b2) {
                        q.push([
                            n2,
                            v2,
                            a2,
                            b2
                        ]) > 1 || resume(n2, v2);
                    });
                };
            }
            function resume(n2, v2) {
                try {
                    step(g2[n2](v2));
                } catch (e2) {
                    settle(q[0][3], e2);
                }
            }
            function step(r2) {
                r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
            }
            function fulfill(value) {
                resume("next", value);
            }
            function reject(value) {
                resume("throw", value);
            }
            function settle(f2, v2) {
                if (f2(v2), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        };
        __asyncDelegator = function(o2) {
            var i2, p2;
            return i2 = {}, verb("next"), verb("throw", function(e2) {
                throw e2;
            }), verb("return"), i2[Symbol.iterator] = function() {
                return this;
            }, i2;
            function verb(n2, f2) {
                i2[n2] = o2[n2] ? function(v2) {
                    return (p2 = !p2) ? {
                        value: __await(o2[n2](v2)),
                        done: n2 === "return"
                    } : f2 ? f2(v2) : v2;
                } : f2;
            }
        };
        __asyncValues = function(o2) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m2 = o2[Symbol.asyncIterator], i2;
            return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
                return this;
            }, i2);
            function verb(n2) {
                i2[n2] = o2[n2] && function(v2) {
                    return new Promise(function(resolve, reject) {
                        v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
                    });
                };
            }
            function settle(resolve, reject, d2, v2) {
                Promise.resolve(v2).then(function(v3) {
                    resolve({
                        value: v3,
                        done: d2
                    });
                }, reject);
            }
        };
        __makeTemplateObject = function(cooked, raw) {
            if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
                value: raw
            });
            else cooked.raw = raw;
            return cooked;
        };
        __importStar = function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) {
                for(var k2 in mod)if (Object.hasOwnProperty.call(mod, k2)) result[k2] = mod[k2];
            }
            result["default"] = mod;
            return result;
        };
        __importDefault = function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        __classPrivateFieldGet = function(receiver, privateMap) {
            if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
            return privateMap.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, privateMap, value) {
            if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
            privateMap.set(receiver, value);
            return value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
})(tslib);
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(bundle_esm);
var graphql$2 = {};
Object.defineProperty(graphql$2, "__esModule", {
    value: true
});
var apollo_utilities_1$1 = require$$1;
function graphql$1(resolver2, document2, rootValue, contextValue, variableValues, execOptions) {
    if (variableValues === void 0) variableValues = {};
    if (execOptions === void 0) execOptions = {};
    var mainDefinition = apollo_utilities_1$1.getMainDefinition(document2);
    var fragments = apollo_utilities_1$1.getFragmentDefinitions(document2);
    var fragmentMap = apollo_utilities_1$1.createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || function() {
        return true;
    };
    var execContext = {
        fragmentMap,
        contextValue,
        variableValues,
        resultMapper,
        resolver: resolver2,
        fragmentMatcher
    };
    return executeSelectionSet$1(mainDefinition.selectionSet, rootValue, execContext);
}
graphql$2.graphql = graphql$1;
function executeSelectionSet$1(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function(selection) {
        if (variables && !apollo_utilities_1$1.shouldInclude(selection, variables)) return;
        if (apollo_utilities_1$1.isField(selection)) {
            var fieldResult = executeField$1(selection, rootValue, execContext);
            var resultFieldKey = apollo_utilities_1$1.resultKeyNameFromField(selection);
            if (fieldResult !== void 0) {
                if (result[resultFieldKey] === void 0) result[resultFieldKey] = fieldResult;
                else merge$1(result[resultFieldKey], fieldResult);
            }
        } else {
            var fragment = void 0;
            if (apollo_utilities_1$1.isInlineFragment(selection)) fragment = selection;
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) throw new Error("No fragment named " + selection.name.value);
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet$1(fragment.selectionSet, rootValue, execContext);
                merge$1(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) return execContext.resultMapper(result, rootValue);
    return result;
}
function executeField$1(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver2 = execContext.resolver;
    var fieldName = field.name.value;
    var args = apollo_utilities_1$1.argumentsObjectFromField(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: apollo_utilities_1$1.resultKeyNameFromField(field),
        directives: apollo_utilities_1$1.getDirectiveInfoFromField(field, variables),
        field
    };
    var result = resolver2(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) return result;
    if (result == null) return result;
    if (Array.isArray(result)) return executeSubSelectedArray$1(field, result, execContext);
    return executeSelectionSet$1(field.selectionSet, result, execContext);
}
function executeSubSelectedArray$1(field, result, execContext) {
    return result.map(function(item) {
        if (item === null) return null;
        if (Array.isArray(item)) return executeSubSelectedArray$1(field, item, execContext);
        return executeSelectionSet$1(field.selectionSet, item, execContext);
    });
}
var hasOwn$3 = Object.prototype.hasOwnProperty;
function merge$1(dest, src2) {
    if (src2 !== null && typeof src2 === "object") Object.keys(src2).forEach(function(key) {
        var srcVal = src2[key];
        if (!hasOwn$3.call(dest, key)) dest[key] = srcVal;
        else merge$1(dest[key], srcVal);
    });
}
graphql$2.merge = merge$1;
Object.defineProperty(async, "__esModule", {
    value: true
});
var tslib_1 = tslib.exports;
var apollo_utilities_1 = require$$1;
var graphql_1 = graphql$2;
function graphql(resolver2, document2, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) execOptions = {};
    var mainDefinition = apollo_utilities_1.getMainDefinition(document2);
    var fragments = apollo_utilities_1.getFragmentDefinitions(document2);
    var fragmentMap = apollo_utilities_1.createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || function() {
        return true;
    };
    var execContext = {
        fragmentMap,
        contextValue,
        variableValues,
        resultMapper,
        resolver: resolver2,
        fragmentMatcher
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
var graphql_2 = async.graphql = graphql;
function executeSelectionSet(selectionSet, rootValue, execContext) {
    return tslib_1.__awaiter(this, void 0, void 0, function() {
        var fragmentMap, contextValue, variables, result, execute2;
        var _this = this;
        return tslib_1.__generator(this, function(_a2) {
            switch(_a2.label){
                case 0:
                    fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
                    result = {};
                    execute2 = function(selection) {
                        return tslib_1.__awaiter(_this, void 0, void 0, function() {
                            var fieldResult, resultFieldKey, fragment, typeCondition, fragmentResult;
                            return tslib_1.__generator(this, function(_a3) {
                                switch(_a3.label){
                                    case 0:
                                        if (!apollo_utilities_1.shouldInclude(selection, variables)) return [
                                            2
                                        ];
                                        if (!apollo_utilities_1.isField(selection)) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            executeField(selection, rootValue, execContext)
                                        ];
                                    case 1:
                                        fieldResult = _a3.sent();
                                        resultFieldKey = apollo_utilities_1.resultKeyNameFromField(selection);
                                        if (fieldResult !== void 0) {
                                            if (result[resultFieldKey] === void 0) result[resultFieldKey] = fieldResult;
                                            else graphql_1.merge(result[resultFieldKey], fieldResult);
                                        }
                                        return [
                                            2
                                        ];
                                    case 2:
                                        if (apollo_utilities_1.isInlineFragment(selection)) fragment = selection;
                                        else {
                                            fragment = fragmentMap[selection.name.value];
                                            if (!fragment) throw new Error("No fragment named " + selection.name.value);
                                        }
                                        typeCondition = fragment.typeCondition.name.value;
                                        if (!execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) return [
                                            3,
                                            4
                                        ];
                                        return [
                                            4,
                                            executeSelectionSet(fragment.selectionSet, rootValue, execContext)
                                        ];
                                    case 3:
                                        fragmentResult = _a3.sent();
                                        graphql_1.merge(result, fragmentResult);
                                        _a3.label = 4;
                                    case 4:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                    };
                    return [
                        4,
                        Promise.all(selectionSet.selections.map(execute2))
                    ];
                case 1:
                    _a2.sent();
                    if (execContext.resultMapper) return [
                        2,
                        execContext.resultMapper(result, rootValue)
                    ];
                    return [
                        2,
                        result
                    ];
            }
        });
    });
}
function executeField(field, rootValue, execContext) {
    return tslib_1.__awaiter(this, void 0, void 0, function() {
        var variables, contextValue, resolver2, fieldName, args, info, result;
        return tslib_1.__generator(this, function(_a2) {
            switch(_a2.label){
                case 0:
                    variables = execContext.variableValues, contextValue = execContext.contextValue, resolver2 = execContext.resolver;
                    fieldName = field.name.value;
                    args = apollo_utilities_1.argumentsObjectFromField(field, variables);
                    info = {
                        isLeaf: !field.selectionSet,
                        resultKey: apollo_utilities_1.resultKeyNameFromField(field),
                        directives: apollo_utilities_1.getDirectiveInfoFromField(field, variables),
                        field
                    };
                    return [
                        4,
                        resolver2(fieldName, rootValue, args, contextValue, info)
                    ];
                case 1:
                    result = _a2.sent();
                    if (!field.selectionSet) return [
                        2,
                        result
                    ];
                    if (result == null) return [
                        2,
                        result
                    ];
                    if (Array.isArray(result)) return [
                        2,
                        executeSubSelectedArray(field, result, execContext)
                    ];
                    return [
                        2,
                        executeSelectionSet(field.selectionSet, result, execContext)
                    ];
            }
        });
    });
}
function executeSubSelectedArray(field, result, execContext) {
    return Promise.all(result.map(function(item) {
        if (item === null) return null;
        if (Array.isArray(item)) return executeSubSelectedArray(field, item, execContext);
        return executeSelectionSet(field.selectionSet, item, execContext);
    }));
}
var shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$2 = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice$1 = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$1 = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr$1.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice$1.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice$1.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice$1.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i2 = 0; i2 < boundLength; i2++)boundArgs.push("$" + i2);
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty2() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e2) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e2) {
    $gOPD = null;
}
var throwTypeError = function() {
    throw new $TypeError$1();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        arguments.callee;
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols$1 = hasSymbols$2();
var getProto = Object.getPrototypeOf || function(x2) {
    return x2.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols$1 ? undefined$1 : getProto(/* @__PURE__ */ new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols$1 ? undefined$1 : getProto(/* @__PURE__ */ new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols$1 ? getProto(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols$1 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError$1,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = functionBind;
var hasOwn$2 = src;
var $concat$1 = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace$1(string, rePropName, function(match, number, quote2, subString) {
        result[result.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn$2(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn$2(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError$1("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias,
            name: intrinsicName,
            value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic2(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError$1("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError$1('"allowMissing" argument must be a boolean');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat$1([
            0,
            1
        ], alias));
    }
    for(var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1){
        var part = parts[i2];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn$2(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError$1("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i2 + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn$2(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};
var callBind$1 = {
    exports: {}
};
(function(module2) {
    var bind3 = functionBind;
    var GetIntrinsic3 = getIntrinsic;
    var $apply = GetIntrinsic3("%Function.prototype.apply%");
    var $call = GetIntrinsic3("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
    var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
    var $max = GetIntrinsic3("%Math.max%");
    if ($defineProperty) try {
        $defineProperty({}, "a", {
            value: 1
        });
    } catch (e2) {
        $defineProperty = null;
    }
    module2.exports = function callBind2(originalFunction) {
        var func = $reflectApply(bind3, $call, arguments);
        if ($gOPD2 && $defineProperty) {
            var desc = $gOPD2(func, "length");
            if (desc.configurable) $defineProperty(func, "length", {
                value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
            });
        }
        return func;
    };
    var applyBind = function applyBind2() {
        return $reflectApply(bind3, $apply, arguments);
    };
    if ($defineProperty) $defineProperty(module2.exports, "apply", {
        value: applyBind
    });
    else module2.exports.apply = applyBind;
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic$1(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    "default": __viteBrowserExternal
}, Symbol.toStringTag, {
    value: "Module"
}));
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1e3 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var inspectCustom = require$$0.custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has$3(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has$3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") return "undefined";
    if (obj === null) return "null";
    if (typeof obj === "boolean") return obj ? "true" : "false";
    if (typeof obj === "string") return inspectString(obj, opts);
    if (typeof obj === "number") {
        if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray$4(obj) ? "[Array]" : "[Object]";
    var indent2 = getIndent(opts, depth);
    if (typeof seen === "undefined") seen = [];
    else if (indexOf(seen, obj) >= 0) return "[Circular]";
    function inspect2(value, from2, noIndent) {
        if (from2) {
            seen = $arrSlice.call(seen);
            seen.push(from2);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function") {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect2);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s2 = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i2 = 0; i2 < attrs.length; i2++)s2 += " " + attrs[i2].name + "=" + wrapQuotes(quote(attrs[i2].value), "double", opts);
        s2 += ">";
        if (obj.childNodes && obj.childNodes.length) s2 += "...";
        s2 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s2;
    }
    if (isArray$4(obj)) {
        if (obj.length === 0) return "[]";
        var xs = arrObjKeys(obj, inspect2);
        if (indent2 && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent2) + "]";
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect2);
        if ("cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
        if (parts.length === 0) return "[" + String(obj) + "]";
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function") return obj[inspectSymbol]();
        else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent2);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
            setParts.push(inspect2(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent2);
    }
    if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
    if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
    if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
    if (isNumber(obj)) return markBoxed(inspect2(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect2(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect2(String(obj)));
    if (!isDate(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect2);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) return tag + "{}";
        if (indent2) return tag + "{" + indentedJoin(ys, indent2) + "}";
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s2, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s2 + quoteChar;
}
function quote(s2) {
    return $replace.call(String(s2), /"/g, "&quot;");
}
function isArray$4(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
    if (typeof obj === "symbol") return true;
    if (!obj || typeof obj !== "object" || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e2) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e2) {}
    return false;
}
var hasOwn$1 = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has$3(obj, key) {
    return hasOwn$1.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f2) {
    if (f2.name) return f2.name;
    var m2 = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
    if (m2) return m2[1];
    return null;
}
function indexOf(xs, x2) {
    if (xs.indexOf) return xs.indexOf(x2);
    for(var i2 = 0, l2 = xs.length; i2 < l2; i2++){
        if (xs[i2] === x2) return i2;
    }
    return -1;
}
function isMap(x2) {
    if (!mapSize || !x2 || typeof x2 !== "object") return false;
    try {
        mapSize.call(x2);
        try {
            setSize.call(x2);
        } catch (s2) {
            return true;
        }
        return x2 instanceof Map;
    } catch (e2) {}
    return false;
}
function isWeakMap(x2) {
    if (!weakMapHas || !x2 || typeof x2 !== "object") return false;
    try {
        weakMapHas.call(x2, weakMapHas);
        try {
            weakSetHas.call(x2, weakSetHas);
        } catch (s2) {
            return true;
        }
        return x2 instanceof WeakMap;
    } catch (e2) {}
    return false;
}
function isWeakRef(x2) {
    if (!weakRefDeref || !x2 || typeof x2 !== "object") return false;
    try {
        weakRefDeref.call(x2);
        return true;
    } catch (e2) {}
    return false;
}
function isSet(x2) {
    if (!setSize || !x2 || typeof x2 !== "object") return false;
    try {
        setSize.call(x2);
        try {
            mapSize.call(x2);
        } catch (m2) {
            return true;
        }
        return x2 instanceof Set;
    } catch (e2) {}
    return false;
}
function isWeakSet(x2) {
    if (!weakSetHas || !x2 || typeof x2 !== "object") return false;
    try {
        weakSetHas.call(x2, weakSetHas);
        try {
            weakMapHas.call(x2, weakMapHas);
        } catch (s2) {
            return true;
        }
        return x2 instanceof WeakSet;
    } catch (e2) {}
    return false;
}
function isElement(x2) {
    if (!x2 || typeof x2 !== "object") return false;
    if (typeof HTMLElement !== "undefined" && x2 instanceof HTMLElement) return true;
    return typeof x2.nodeName === "string" && typeof x2.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var s2 = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s2, "single", opts);
}
function lowbyte(c2) {
    var n2 = c2.charCodeAt(0);
    var x2 = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n2];
    if (x2) return "\\" + x2;
    return "\\x" + (n2 < 16 ? "0" : "") + $toUpperCase.call(n2.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent2) {
    var joinedEntries = indent2 ? indentedJoin(entries, indent2) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i2 = 0; i2 < xs.length; i2++){
        if (indexOf(xs[i2], "\n") >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") baseIndent = "	";
    else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent2) {
    if (xs.length === 0) return "";
    var lineJoiner = "\n" + indent2.prev + indent2.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent2.prev;
}
function arrObjKeys(obj, inspect2) {
    var isArr = isArray$4(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i2 = 0; i2 < obj.length; i2++)xs[i2] = has$3(obj, i2) ? inspect2(obj[i2], obj) : "";
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k2 = 0; k2 < syms.length; k2++)symMap["$" + syms[k2]] = syms[k2];
    }
    for(var key in obj){
        if (!has$3(obj, key)) continue;
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
        else xs.push(key + ": " + inspect2(obj[key], obj));
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
    }
    return xs;
}
var GetIntrinsic = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
var listGetNode = function(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        curr.next = list.next;
        list.next = curr;
        return curr;
    }
};
var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else objects.next = {
        key,
        next: objects.next,
        value
    };
};
var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel2() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapGet($wm, key);
            } else if ($Map) {
                if ($m) return $mapGet($m, key);
            } else {
                if ($o) return listGet($o, key);
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapHas($wm, key);
            } else if ($Map) {
                if ($m) return $mapHas($m, key);
            } else {
                if ($o) return listHas($o, key);
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) $m = new $Map();
                $mapSet($m, key, value);
            } else {
                if (!$o) $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
var formats$3 = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$3 = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i2 = 0; i2 < 256; ++i2)array.push("%" + ((i2 < 16 ? "0" : "") + i2.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue2(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray$3(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject2(source, options) {
    var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for(var i2 = 0; i2 < source.length; ++i2)if (typeof source[i2] !== "undefined") obj[i2] = source[i2];
    return obj;
};
var merge = function merge2(target, source, options) {
    if (!source) return target;
    if (typeof source !== "object") {
        if (isArray$3(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray$3(target) && !isArray$3(source)) mergeTarget = arrayToObject(target, options);
    if (isArray$3(target) && isArray$3(source)) {
        source.forEach(function(item, i2) {
            if (has$2.call(target, i2)) {
                var targetItem = target[i2];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i2] = merge2(targetItem, item, options);
                else target.push(item);
            } else target[i2] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has$2.call(acc, key)) acc[key] = merge2(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign$1 = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode$1 = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e2) {
        return strWithoutPlus;
    }
};
var encode = function encode2(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i2 = 0; i2 < string.length; ++i2){
        var c2 = string.charCodeAt(i2);
        if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats$2.RFC1738 && (c2 === 40 || c2 === 41)) {
            out += string.charAt(i2);
            continue;
        }
        if (c2 < 128) {
            out = out + hexTable[c2];
            continue;
        }
        if (c2 < 2048) {
            out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
            continue;
        }
        if (c2 < 55296 || c2 >= 57344) {
            out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
            continue;
        }
        i2 += 1;
        c2 = 65536 + ((c2 & 1023) << 10 | string.charCodeAt(i2) & 1023);
        out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
    }
    return out;
};
var compact$1 = function compact2(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i2 = 0; i2 < queue.length; ++i2){
        var item = queue[i2];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp2(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a2, b2) {
    return [].concat(a2, b2);
};
var maybeMap = function maybeMap2(val, fn) {
    if (isArray$3(val)) {
        var mapped = [];
        for(var i2 = 0; i2 < val.length; i2 += 1)mapped.push(fn(val[i2]));
        return mapped;
    }
    return fn(val);
};
var utils$3 = {
    arrayToObject,
    assign: assign$1,
    combine,
    compact: compact$1,
    decode: decode$1,
    encode,
    isBuffer,
    isRegExp,
    maybeMap,
    merge
};
var getSideChannel = sideChannel;
var utils$2 = utils$3;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray$2 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray$2(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils$2.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
    return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
};
var sentinel = {};
var stringify$2 = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag){
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
            if (pos === step) throw new RangeError("Cyclic object value");
            else findFlag = true;
        }
        if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
    }
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate2(obj);
    else if (generateArrayPrefix === "comma" && isArray$2(obj)) obj = utils$2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) return serializeDate2(value2);
        return value2;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format) : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils$2.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ",");
                var valuesJoined = "";
                for(var i2 = 0; i2 < valuesArray.length; ++i2)valuesJoined += (i2 === 0 ? "" : ",") + formatter(encoder(valuesArray[i2], defaults$1.encoder, charset, "value", format));
                return [
                    formatter(keyValue) + "=" + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray$2(obj)) objKeys = [
        {
            value: obj.length > 0 ? obj.join(",") || null : void 0
        }
    ];
    else if (isArray$2(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var keyPrefix = isArray$2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel2.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel2);
        pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) return defaults$1;
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats$1["default"];
    if (typeof opts.format !== "undefined") {
        if (!has$1.call(formats$1.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];
    var filter = defaults$1.filter;
    if (typeof opts.filter === "function" || isArray$2(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};
var stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray$2(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel2 = getSideChannel();
    for(var i2 = 0; i2 < objKeys.length; ++i2){
        var key = objKeys[i2];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify$2(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel2));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") prefix += "utf8=%26%2310003%3B&";
        else prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};
var utils$1 = utils$3;
var has = Object.prototype.hasOwnProperty;
var isArray$1 = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils$1.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1;
    var i2;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i2 = 0; i2 < parts.length; ++i2)if (parts[i2].indexOf("utf8=") === 0) {
            if (parts[i2] === charsetSentinel) charset = "utf-8";
            else if (parts[i2] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i2;
            i2 = parts.length;
        }
    }
    for(i2 = 0; i2 < parts.length; ++i2){
        if (i2 === skipIndex) continue;
        var part = parts[i2];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils$1.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray$1(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils$1.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i2 = chain.length - 1; i2 >= 0; --i2){
        var obj;
        var root2 = chain[i2];
        if (root2 === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
            var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root2 !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    var brackets2 = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets2.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    var i2 = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i2 < options.depth){
        i2 += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils$1.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
var parse$2 = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    var keys = Object.keys(tempObj);
    for(var i2 = 0; i2 < keys.length; ++i2){
        var key = keys[i2];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils$1.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) return obj;
    return utils$1.compact(obj);
};
var stringify$1 = stringify_1;
var parse$1 = parse$2;
var formats = formats$3;
var lib$2 = {
    formats,
    parse: parse$1,
    stringify: stringify$1
};
var __extends$2 = globalThis && globalThis.__extends || function() {
    var extendStatics2 = function(d2, b2) {
        extendStatics2 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
        } || function(d3, b3) {
            for(var p2 in b3)if (b3.hasOwnProperty(p2)) d3[p2] = b3[p2];
        };
        return extendStatics2(d2, b2);
    };
    return function(d2, b2) {
        extendStatics2(d2, b2);
        function __2() {
            this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
    };
}();
var __assign$1 = globalThis && globalThis.__assign || function() {
    __assign$1 = Object.assign || function(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign$1.apply(this, arguments);
};
var __awaiter$1 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P2, generator) {
    function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
        });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e22) {
                reject(e22);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e23) {
                reject(e23);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = globalThis && globalThis.__generator || function(thisArg, body) {
    var _2 = {
        label: 0,
        sent: function() {
            if (t2[0] & 1) throw t2[1];
            return t2[1];
        },
        trys: [],
        ops: []
    }, f2, y, t2, g2;
    return g2 = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
        return this;
    }), g2;
    function verb(n2) {
        return function(v2) {
            return step([
                n2,
                v2
            ]);
        };
    }
    function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while(_2)try {
            if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
            if (y = 0, t2) op = [
                op[0] & 2,
                t2.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t2 = op;
                    break;
                case 4:
                    _2.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _2.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _2 = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                        _2.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                        _2.label = t2[1];
                        t2 = op;
                        break;
                    }
                    if (t2 && _2.label < t2[2]) {
                        _2.label = t2[2];
                        _2.ops.push(op);
                        break;
                    }
                    if (t2[2]) _2.ops.pop();
                    _2.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _2);
        } catch (e24) {
            op = [
                6,
                e24
            ];
            y = 0;
        } finally{
            f2 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __spreadArrays = globalThis && globalThis.__spreadArrays || function() {
    for(var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)s2 += arguments[i2].length;
    for(var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)for(var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)r2[k2] = a2[j];
    return r2;
};
var quickFindJsonApiDirective = function(field) {
    if (field.directives && field.directives.length) return field.directives.find(function(directive) {
        return directive.name.value === "jsonapi";
    });
};
function findRestDirectivesThenInsertNullsForOmittedFields(resultKey, current, mainDefinition, fragmentMap, currentSelectionSet) {
    if (currentSelectionSet == null || current == null || typeof current === "number" || typeof current === "boolean" || typeof current === "string") return current;
    currentSelectionSet.selections.forEach(function(node) {
        if (isInlineFragment$1(node)) findRestDirectivesThenInsertNullsForOmittedFields(resultKey, current, mainDefinition, fragmentMap, node.selectionSet);
        else if (node.kind === "FragmentSpread") {
            var fragment = fragmentMap[node.name.value];
            findRestDirectivesThenInsertNullsForOmittedFields(resultKey, current, mainDefinition, fragmentMap, fragment.selectionSet);
        } else if (isField$1(node)) {
            var name_1 = resultKeyNameFromField$1(node);
            if (name_1 === resultKey && quickFindJsonApiDirective(node)) insertNullsForAnyOmittedFields(current, mainDefinition, fragmentMap, node.selectionSet);
            else findRestDirectivesThenInsertNullsForOmittedFields(resultKey, current, mainDefinition, fragmentMap, node.selectionSet);
        } else return function(node2) {
            throw new Error("Unhandled Node Type in SelectionSetNode.selections");
        }();
    });
    return current;
}
function insertNullsForAnyOmittedFields(current, mainDefinition, fragmentMap, currentSelectionSet) {
    if (currentSelectionSet == null || current == null || typeof current === "number" || typeof current === "boolean" || typeof current === "string") return;
    if (Array.isArray(current)) {
        current.forEach(function(c2) {
            return insertNullsForAnyOmittedFields(c2, mainDefinition, fragmentMap, currentSelectionSet);
        });
        return;
    }
    currentSelectionSet.selections.forEach(function(node) {
        if (isInlineFragment$1(node)) insertNullsForAnyOmittedFields(current, mainDefinition, fragmentMap, node.selectionSet);
        else if (node.kind === "FragmentSpread") {
            var fragment = fragmentMap[node.name.value];
            insertNullsForAnyOmittedFields(current, mainDefinition, fragmentMap, fragment.selectionSet);
        } else if (isField$1(node)) {
            var value = current[node.name.value];
            if (node.name.value === "__typename") ;
            else if (typeof value === "undefined") current[node.name.value] = null;
            else if (value != null && typeof value === "object" && node.selectionSet != null) insertNullsForAnyOmittedFields(value, mainDefinition, fragmentMap, node.selectionSet);
        } else return function(node2) {
            throw new Error("Unhandled Node Type in SelectionSetNode.selections");
        }();
    });
}
var getEndpointOptions = function(endpoints, endpoint) {
    var result = endpoints[endpoint || DEFAULT_ENDPOINT_KEY] || endpoints[DEFAULT_ENDPOINT_KEY];
    if (typeof result === "string") return {
        uri: result
    };
    return result;
};
var PathBuilder = function() {
    function PathBuilder2() {}
    PathBuilder2.replacerForPath = function(path) {
        if (path in PathBuilder2.cache) return PathBuilder2.cache[path];
        var queryOrigStartIndex = path.indexOf("?");
        var pathBits = path.split(PathBuilder2.argReplacement);
        var chunkActions = [];
        var hasBegunQuery = false;
        pathBits.reduce(function(processedCount, bit) {
            if (bit === "" || bit === "{}") return processedCount + bit.length;
            var nextIndex = processedCount + bit.length;
            if (bit[0] === "{" && bit[bit.length - 1] === "}") {
                var _keyPath_1 = bit.slice(1, bit.length - 1).split(".");
                chunkActions.push(function(props, useQSEncoder) {
                    try {
                        var value = PathBuilderLookupValue(props, _keyPath_1);
                        if (!useQSEncoder || typeof value !== "object" || value == null) return String(value);
                        else return lib$2.stringify(value);
                    } catch (e2) {
                        var key = [
                            path,
                            _keyPath_1.join(".")
                        ].join("|");
                        if (!(key in PathBuilder2.warnTable)) {
                            console.warn("Warning: JsonApiLink caught an error while unpacking", key, "This tends to happen if you forgot to pass a parameter needed for creating an @jsonapi(path, or if JsonApiLink was configured to deeply unpack a path parameter that wasn't provided. This message will only log once per detected instance. Trouble-shooting hint: check @jsonapi(path: and the variables provided to this query.");
                            PathBuilder2.warnTable[key] = true;
                        }
                        return "";
                    }
                });
            } else {
                chunkActions.push(bit);
                if (!hasBegunQuery && nextIndex >= queryOrigStartIndex) {
                    hasBegunQuery = true;
                    chunkActions.push(true);
                }
            }
            return nextIndex;
        }, 0);
        var result = function(props) {
            var hasEnteredQuery = false;
            var tmp = chunkActions.reduce(function(accumulator, action) {
                if (typeof action === "string") return accumulator + action;
                else if (typeof action === "boolean") {
                    hasEnteredQuery = true;
                    return accumulator;
                } else return accumulator + action(props, hasEnteredQuery);
            }, "");
            return tmp;
        };
        return PathBuilder2.cache[path] = result;
    };
    PathBuilder2.cache = {};
    PathBuilder2.warnTable = {};
    PathBuilder2.argReplacement = /({[._a-zA-Z0-9]*})/;
    return PathBuilder2;
}();
function PathBuilderLookupValue(tmp, keyPath) {
    if (keyPath.length === 0) return tmp;
    var remainingKeyPath = __spreadArrays(keyPath);
    var key = remainingKeyPath.shift();
    return PathBuilderLookupValue(tmp[key], remainingKeyPath);
}
var noMangleKeys = [
    "__typename"
];
var convertObjectKeys = function(object, __converter, keypath) {
    if (keypath === void 0) keypath = [];
    var converter = null;
    if (__converter.length != 2) converter = function(name, keypath2) {
        return __converter(name);
    };
    else converter = __converter;
    if (object == null || typeof object !== "object") return object;
    if (global$4.FileList && object instanceof FileList || global$4.File && object instanceof File) return object;
    if (Array.isArray(object)) return object.map(function(o2, index) {
        return convertObjectKeys(o2, converter, __spreadArrays(keypath, [
            String(index)
        ]));
    });
    return Object.keys(object).reduce(function(acc, key) {
        var value = object[key];
        if (noMangleKeys.indexOf(key) !== -1) {
            acc[key] = value;
            return acc;
        }
        var nestedKeyPath = __spreadArrays(keypath, [
            key
        ]);
        acc[converter(key, nestedKeyPath)] = convertObjectKeys(value, converter, nestedKeyPath);
        return acc;
    }, {});
};
var noOpNameNormalizer = function(name) {
    return name;
};
var normalizeHeaders = function(headers) {
    if (headers instanceof Headers) return headers;
    else return new Headers(headers || {});
};
var concatHeadersMergePolicy = function() {
    var headerGroups = [];
    for(var _i = 0; _i < arguments.length; _i++)headerGroups[_i] = arguments[_i];
    return headerGroups.reduce(function(accumulator, current) {
        if (!current) return accumulator;
        if (!current.forEach) current = normalizeHeaders(current);
        current.forEach(function(value, key) {
            accumulator.append(key, value);
        });
        return accumulator;
    }, new Headers());
};
var overrideHeadersMergePolicy = function(linkHeaders, headersToOverride, requestHeaders) {
    var result = new Headers();
    linkHeaders.forEach(function(value, key) {
        if (headersToOverride.indexOf(key) !== -1) return;
        result.append(key, value);
    });
    return concatHeadersMergePolicy(result, requestHeaders || new Headers());
};
var makeOverrideHeadersMergePolicy = function(headersToOverride) {
    return function(linkHeaders, requestHeaders) {
        return overrideHeadersMergePolicy(linkHeaders, headersToOverride, requestHeaders);
    };
};
var SUPPORTED_HTTP_VERBS = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
];
var validateRequestMethodForOperationType = function(method, operationType) {
    switch(operationType){
        case "query":
            if (SUPPORTED_HTTP_VERBS.indexOf(method.toUpperCase()) !== -1) return;
            throw new Error('A "query" operation can only support "GET" requests but got "' + method + '".');
        case "mutation":
            if (SUPPORTED_HTTP_VERBS.indexOf(method.toUpperCase()) !== -1) return;
            throw new Error('"mutation" operations do not support that HTTP-verb');
        case "subscription":
            throw new Error('A "subscription" operation is not supported yet.');
        default:
            var _exhaustiveCheck = operationType;
            return _exhaustiveCheck;
    }
};
var rethrowServerSideError = function(response, result, message) {
    var error = new Error(message);
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var addTypeToNode = function(node, typename) {
    if (node === null || node === void 0 || typeof node !== "object") return node;
    if (!Array.isArray(node)) {
        node["__typename"] = typename;
        return node;
    }
    return node.map(function(item) {
        return addTypeToNode(item, typename);
    });
};
var resolver = function(fieldName, root2, args, context, info) {
    return __awaiter$1(void 0, void 0, void 0, function() {
        var directives, isLeaf, resultKey, exportVariablesByNode, exportVariables, copyExportVariables, aliasedNode, preAliasingNode, isATypeCall, isNotAJsonApiCall, credentials, endpoints, headers, customFetch, operationType, mainDefinition, fragmentDefinitions, typeNameNormalizer, fieldNameNormalizer, linkLevelNameDenormalizer, serializers, fragmentMap, _a2, path, endpoint, pathBuilder, endpointOption, neitherPathsProvided, allParams, pathWithParams, _b, method, perRequestNameDenormalizer, includeJsonapi, body, overrideHeaders, serializedBody, requestParams, requestUrl, response, result, err_1, parsed;
        return __generator$1(this, function(_c) {
            switch(_c.label){
                case 0:
                    directives = info.directives, isLeaf = info.isLeaf, resultKey = info.resultKey;
                    exportVariablesByNode = context.exportVariablesByNode;
                    exportVariables = exportVariablesByNode.get(root2) || {};
                    copyExportVariables = function(result2) {
                        if (result2 instanceof Array) result2.forEach(copyExportVariables);
                        else exportVariablesByNode.set(result2, __assign$1({}, exportVariables));
                        return result2;
                    };
                    aliasedNode = (root2 || {})[resultKey];
                    preAliasingNode = (root2 || {})[fieldName];
                    isATypeCall = directives && directives.type;
                    if (!isLeaf && isATypeCall) {
                        if (directives.jsonapi) throw new Error("Invalid use of @type(name: ...) directive on a call that also has @jsonapi(...)");
                        return [
                            2,
                            addTypeToNode(preAliasingNode, directives.type.name)
                        ];
                    }
                    isNotAJsonApiCall = !directives || !directives.jsonapi;
                    if (isNotAJsonApiCall) return [
                        2,
                        copyExportVariables(aliasedNode || preAliasingNode)
                    ];
                    credentials = context.credentials, endpoints = context.endpoints, headers = context.headers, customFetch = context.customFetch, operationType = context.operationType, mainDefinition = context.mainDefinition, fragmentDefinitions = context.fragmentDefinitions, typeNameNormalizer = context.typeNameNormalizer, fieldNameNormalizer = context.fieldNameNormalizer, linkLevelNameDenormalizer = context.fieldNameDenormalizer, serializers = context.serializers;
                    fragmentMap = createFragmentMap$1(fragmentDefinitions);
                    _a2 = directives.jsonapi, path = _a2.path, endpoint = _a2.endpoint, pathBuilder = _a2.pathBuilder;
                    endpointOption = getEndpointOptions(endpoints, endpoint);
                    neitherPathsProvided = path == null && pathBuilder == null;
                    if (neitherPathsProvided) throw new Error('One of ("path" | "pathBuilder") must be set in the @jsonapi() directive. This request had neither, please add one');
                    if (!pathBuilder) {
                        if (path.includes(":")) throw new Error("'@jsonapi(path:' contains a ':' colon, this format is not supported");
                        pathBuilder = PathBuilder.replacerForPath(path);
                    }
                    allParams = {
                        args,
                        exportVariables,
                        context,
                        "@jsonapi": directives.jsonapi,
                        replacer: pathBuilder
                    };
                    pathWithParams = pathBuilder(allParams);
                    _b = directives.jsonapi, method = _b.method, perRequestNameDenormalizer = _b.fieldNameDenormalizer, includeJsonapi = _b.includeJsonapi;
                    if (!method) method = "GET";
                    if (!includeJsonapi) includeJsonapi = false;
                    body = void 0;
                    overrideHeaders = void 0;
                    if ([
                        "GET",
                        "DELETE"
                    ].indexOf(method) === -1) {
                        body = convertObjectKeys(allParams.args.input, perRequestNameDenormalizer || linkLevelNameDenormalizer || noOpNameNormalizer);
                        serializedBody = void 0;
                        serializedBody = serializers[DEFAULT_SERIALIZER_KEY](body, headers);
                        body = serializedBody.body;
                        overrideHeaders = new Headers(serializedBody.headers);
                    }
                    validateRequestMethodForOperationType(method, operationType || "query");
                    requestParams = __assign$1({
                        method,
                        headers: overrideHeaders || headers,
                        body
                    }, credentials ? {
                        credentials
                    } : {});
                    requestUrl = "" + endpointOption.uri + pathWithParams;
                    return [
                        4,
                        (customFetch || fetch)(requestUrl, requestParams)
                    ];
                case 1:
                    response = _c.sent();
                    context.responses.push(response);
                    if (!response.ok) return [
                        3,
                        6
                    ];
                    if (!(response.status === 204 || response.headers.get("Content-Length") === "0")) return [
                        3,
                        2
                    ];
                    result = {};
                    return [
                        3,
                        5
                    ];
                case 2:
                    _c.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        jsonapiResponseTransformer(response, typeNameNormalizer, includeJsonapi)
                    ];
                case 3:
                    result = _c.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    err_1 = _c.sent();
                    console.warn("An error occurred in jsonApiTransformer:");
                    throw err_1;
                case 5:
                    return [
                        3,
                        13
                    ];
                case 6:
                    if (!(response.status === 404)) return [
                        3,
                        7
                    ];
                    result = null;
                    return [
                        3,
                        13
                    ];
                case 7:
                    parsed = void 0;
                    _c.label = 8;
                case 8:
                    _c.trys.push([
                        8,
                        10,
                        ,
                        12
                    ]);
                    return [
                        4,
                        response.clone().json()
                    ];
                case 9:
                    parsed = _c.sent();
                    return [
                        3,
                        12
                    ];
                case 10:
                    _c.sent();
                    return [
                        4,
                        response.clone().text()
                    ];
                case 11:
                    parsed = _c.sent();
                    return [
                        3,
                        12
                    ];
                case 12:
                    rethrowServerSideError(response, parsed, "Response not successful: Received status code " + response.status);
                    _c.label = 13;
                case 13:
                    if (fieldNameNormalizer !== null) result = convertObjectKeys(result, fieldNameNormalizer);
                    result = findRestDirectivesThenInsertNullsForOmittedFields(resultKey, result, mainDefinition, fragmentMap, mainDefinition.selectionSet);
                    return [
                        2,
                        copyExportVariables(result)
                    ];
            }
        });
    });
};
var DEFAULT_ENDPOINT_KEY = "";
var DEFAULT_SERIALIZER_KEY = "";
var DEFAULT_JSON_SERIALIZER = function(data, headers) {
    if (!headers.has("content-type")) headers.append("Content-Type", "application/vnd.api+json");
    return {
        body: JSON.stringify(data),
        headers
    };
};
var JsonApiLink = function(_super) {
    __extends$2(JsonApiLink2, _super);
    function JsonApiLink2(_a2) {
        var _b;
        var uri = _a2.uri, endpoints = _a2.endpoints, headers = _a2.headers, typeNameNormalizer = _a2.typeNameNormalizer, fieldNameNormalizer = _a2.fieldNameNormalizer, fieldNameDenormalizer = _a2.fieldNameDenormalizer, customFetch = _a2.customFetch, credentials = _a2.credentials, bodySerializers = _a2.bodySerializers, defaultSerializer = _a2.defaultSerializer;
        var _this = _super.call(this) || this;
        var fallback = {};
        fallback[DEFAULT_ENDPOINT_KEY] = uri || "";
        _this.endpoints = Object.assign({}, endpoints || fallback);
        if (uri == null && endpoints == null) throw new Error("A JsonApiLink must be initialized with either 1 uri, or a map of keyed-endpoints");
        if (uri != null) {
            var currentDefaultURI = (endpoints || {})[DEFAULT_ENDPOINT_KEY];
            if (currentDefaultURI != null && currentDefaultURI != uri) throw new Error("JsonApiLink was configured with a default uri that doesn't match what's passed in to the endpoints map.");
            _this.endpoints[DEFAULT_ENDPOINT_KEY] = uri;
        }
        if (_this.endpoints[DEFAULT_ENDPOINT_KEY] == null) console.warn("JsonApiLink configured without a default URI. All @jsonapi(\u2026) directives must provide an endpoint key!");
        if (bodySerializers && bodySerializers.hasOwnProperty(DEFAULT_SERIALIZER_KEY)) console.warn("JsonApiLink was configured to override the default serializer! This may result in unexpected behavior");
        _this.typeNameNormalizer = typeNameNormalizer || identity;
        _this.fieldNameNormalizer = fieldNameNormalizer || null;
        _this.fieldNameDenormalizer = fieldNameDenormalizer || null;
        _this.headers = normalizeHeaders(headers);
        _this.credentials = credentials || null;
        _this.customFetch = customFetch;
        _this.serializers = __assign$1((_b = {}, _b[DEFAULT_SERIALIZER_KEY] = defaultSerializer || DEFAULT_JSON_SERIALIZER, _b), bodySerializers || {});
        return _this;
    }
    JsonApiLink2.prototype.request = function(operation, forward) {
        var query = operation.query, variables = operation.variables, getContext = operation.getContext, setContext = operation.setContext;
        var context = getContext();
        var isJsonApiQuery = hasDirectives$1([
            "jsonapi"
        ], query);
        if (!isJsonApiQuery) return forward(operation);
        var nonRest = removeRestSetsFromDocument(query);
        var headersMergePolicy = context.headersMergePolicy;
        if (headersMergePolicy == null && Array.isArray(context.headersToOverride)) headersMergePolicy = makeOverrideHeadersMergePolicy(context.headersToOverride);
        else if (headersMergePolicy == null) headersMergePolicy = concatHeadersMergePolicy;
        var headers = headersMergePolicy(this.headers, context.headers);
        if (!headers.has("Accept")) headers.append("Accept", "application/vnd.api+json");
        var credentials = context.credentials || this.credentials;
        var queryWithTypename = addTypenameToDocument$1(query);
        var mainDefinition = getMainDefinition$1(query);
        var fragmentDefinitions = getFragmentDefinitions$1(query);
        var operationType = (mainDefinition || {}).operation || "query";
        var requestContext = {
            headers,
            endpoints: this.endpoints,
            exportVariablesByNode: /* @__PURE__ */ new Map(),
            credentials,
            customFetch: this.customFetch,
            operationType,
            typeNameNormalizer: this.typeNameNormalizer,
            fieldNameNormalizer: this.fieldNameNormalizer,
            fieldNameDenormalizer: this.fieldNameDenormalizer,
            mainDefinition,
            fragmentDefinitions,
            serializers: this.serializers,
            responses: []
        };
        var resolverOptions = {};
        var obs;
        if (nonRest && forward) {
            operation.query = nonRest;
            obs = forward(operation);
        } else obs = Observable$2.of({
            data: {}
        });
        return obs.flatMap(function(_a2) {
            var data = _a2.data, errors = _a2.errors;
            return new Observable$2(function(observer) {
                graphql_2(resolver, queryWithTypename, data, requestContext, variables, resolverOptions).then(function(data2) {
                    setContext({
                        restResponses: (context.restResponses || []).concat(requestContext.responses)
                    });
                    observer.next({
                        data: data2,
                        errors
                    });
                    observer.complete();
                }).catch(function(err) {
                    if (err.name === "AbortError") return;
                    if (err.result && err.result.errors) observer.next(err.result);
                    observer.error(err);
                });
            });
        });
    };
    return JsonApiLink2;
}(ApolloLink$1);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
    } || function(d3, b3) {
        for(var p2 in b3)if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
};
function __extends$1(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null) throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __2() {
        this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
}
var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
        for(var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
        }
        return t2;
    };
    return __assign.apply(this, arguments);
};
function __rest(s2, e25) {
    var t2 = {};
    for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2) && e25.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)if (e25.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
        });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e26) {
                reject(e26);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e27) {
                reject(e27);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _2 = {
        label: 0,
        sent: function() {
            if (t2[0] & 1) throw t2[1];
            return t2[1];
        },
        trys: [],
        ops: []
    }, f2, y, t2, g2;
    return g2 = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
        return this;
    }), g2;
    function verb(n2) {
        return function(v2) {
            return step([
                n2,
                v2
            ]);
        };
    }
    function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while(_2)try {
            if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
            if (y = 0, t2) op = [
                op[0] & 2,
                t2.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t2 = op;
                    break;
                case 4:
                    _2.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _2.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _2 = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                        _2.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                        _2.label = t2[1];
                        t2 = op;
                        break;
                    }
                    if (t2 && _2.label < t2[2]) {
                        _2.label = t2[2];
                        _2.ops.push(op);
                        break;
                    }
                    if (t2[2]) _2.ops.pop();
                    _2.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _2);
        } catch (e28) {
            op = [
                6,
                e28
            ];
            y = 0;
        } finally{
            f2 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2) {
        for(var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++)if (ar || !(i2 in from2)) {
            if (!ar) ar = Array.prototype.slice.call(from2, 0, i2);
            ar[i2] = from2[i2];
        }
    }
    return to.concat(ar || from2);
}
var genericMessage = "Invariant Violation";
var _a$3 = Object.setPrototypeOf, setPrototypeOf = _a$3 === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a$3;
var InvariantError = function(_super) {
    __extends$1(InvariantError2, _super);
    function InvariantError2(message) {
        if (message === void 0) message = genericMessage;
        var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError2.prototype);
        return _this;
    }
    return InvariantError2;
}(Error);
function invariant(condition, message) {
    if (!condition) throw new InvariantError(message);
}
var verbosityLevels = [
    "debug",
    "log",
    "warn",
    "error",
    "silent"
];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function() {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function(invariant2) {
    invariant2.debug = wrapConsoleMethod("debug");
    invariant2.log = wrapConsoleMethod("log");
    invariant2.warn = wrapConsoleMethod("warn");
    invariant2.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function maybe$1(thunk) {
    try {
        return thunk();
    } catch (_a2) {}
}
var global$2 = maybe$1(function() {
    return globalThis;
}) || maybe$1(function() {
    return window;
}) || maybe$1(function() {
    return self;
}) || maybe$1(function() {
    return global;
}) || maybe$1(function() {
    return maybe$1.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [
    __,
    __
].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    } catch (_a2) {
        Object.defineProperty(global$2, GLOBAL_KEY, {
            value: maybe$1(function() {
                return "production";
            }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true
        });
        return global$2[GLOBAL_KEY];
    }
}
var DEV = getDEV();
function maybe(thunk) {
    try {
        return thunk();
    } catch (_2) {}
}
var safeGlobal = maybe(function() {
    return globalThis;
}) || maybe(function() {
    return window;
}) || maybe(function() {
    return self;
}) || maybe(function() {
    return global;
}) || maybe(function() {
    return maybe.constructor("return this")();
});
var needToRemove = false;
function install() {
    if (safeGlobal && !maybe(function() {
        return "production";
    }) && !maybe(function() {
        return process;
    })) {
        Object.defineProperty(safeGlobal, "process", {
            value: {
                env: {
                    NODE_ENV: "production"
                }
            },
            configurable: true,
            enumerable: false,
            writable: true
        });
        needToRemove = true;
    }
}
install();
function remove() {
    if (needToRemove) {
        delete safeGlobal.process;
        needToRemove = false;
    }
}
function _typeof$2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof$2 = function _typeof2(obj2) {
        return typeof obj2;
    };
    else _typeof$2 = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
    return _typeof$2(obj);
}
function isObjectLike(value) {
    return _typeof$2(value) == "object" && value !== null;
}
var SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
function getLocation(source, position) {
    var lineRegexp = /\r\n|[\n\r]/g;
    var line = 1;
    var column = position + 1;
    var match;
    while((match = lineRegexp.exec(source.body)) && match.index < position){
        line += 1;
        column = position + 1 - (match.index + match[0].length);
    }
    return {
        line,
        column
    };
}
function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    var firstLineColumnOffset = source.locationOffset.column - 1;
    var body = whitespace(firstLineColumnOffset) + source.body;
    var lineIndex = sourceLocation.line - 1;
    var lineOffset = source.locationOffset.line - 1;
    var lineNum = sourceLocation.line + lineOffset;
    var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    var columnNum = sourceLocation.column + columnOffset;
    var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
    var lines = body.split(/\r\n|[\n\r]/g);
    var locationLine = lines[lineIndex];
    if (locationLine.length > 120) {
        var subLineIndex = Math.floor(columnNum / 80);
        var subLineColumnNum = columnNum % 80;
        var subLines = [];
        for(var i2 = 0; i2 < locationLine.length; i2 += 80)subLines.push(locationLine.slice(i2, i2 + 80));
        return locationStr + printPrefixedLines([
            [
                "".concat(lineNum),
                subLines[0]
            ]
        ].concat(subLines.slice(1, subLineIndex + 1).map(function(subLine) {
            return [
                "",
                subLine
            ];
        }), [
            [
                " ",
                whitespace(subLineColumnNum - 1) + "^"
            ],
            [
                "",
                subLines[subLineIndex + 1]
            ]
        ]));
    }
    return locationStr + printPrefixedLines([
        [
            "".concat(lineNum - 1),
            lines[lineIndex - 1]
        ],
        [
            "".concat(lineNum),
            locationLine
        ],
        [
            "",
            whitespace(columnNum - 1) + "^"
        ],
        [
            "".concat(lineNum + 1),
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    var existingLines = lines.filter(function(_ref) {
        _ref[0];
        var line = _ref[1];
        return line !== void 0;
    });
    var padLen = Math.max.apply(Math, existingLines.map(function(_ref2) {
        var prefix = _ref2[0];
        return prefix.length;
    }));
    return existingLines.map(function(_ref3) {
        var prefix = _ref3[0], line = _ref3[1];
        return leftPad(padLen, prefix) + (line ? " | " + line : " |");
    }).join("\n");
}
function whitespace(len) {
    return Array(len + 1).join(" ");
}
function leftPad(len, str) {
    return whitespace(len - str.length) + str;
}
function _typeof$1(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof$1 = function _typeof2(obj2) {
        return typeof obj2;
    };
    else _typeof$1 = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
    return _typeof$1(obj);
}
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i2 = 1; i2 < arguments.length; i2++){
        var source = arguments[i2] != null ? arguments[i2] : {};
        if (i2 % 2) ownKeys$1(Object(source), true).forEach(function(key) {
            _defineProperty$1(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty$1(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$3(target, props) {
    for(var i2 = 0; i2 < props.length; i2++){
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$3(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
    if (self2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self2;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
        if (typeof Class2 !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class2)) return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct2(Parent2, args2, Class2) {
        var a2 = [
            null
        ];
        a2.push.apply(a2, args2);
        var Constructor = Function.bind.apply(Parent2, a2);
        var instance = new Constructor();
        if (Class2) _setPrototypeOf(instance, Class2.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e2) {
        return false;
    }
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
    };
    return _setPrototypeOf(o2, p2);
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
        return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
}
var GraphQLError = /* @__PURE__ */ function(_Error) {
    _inherits(GraphQLError2, _Error);
    var _super = _createSuper(GraphQLError2);
    function GraphQLError2(message, nodes, source, positions, path, originalError, extensions) {
        var _nodeLocations, _nodeLocations2, _nodeLocations3;
        var _this;
        _classCallCheck$1(this, GraphQLError2);
        _this = _super.call(this, message);
        _this.name = "GraphQLError";
        _this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
        _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : void 0);
        var nodeLocations = [];
        for(var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++){
            var _this$nodes;
            var _ref4 = _ref3[_i2];
            var loc = _ref4.loc;
            if (loc != null) nodeLocations.push(loc);
        }
        nodeLocations = undefinedIfEmpty(nodeLocations);
        _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
        _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function(loc2) {
            return loc2.start;
        });
        _this.locations = positions && source ? positions.map(function(pos) {
            return getLocation(source, pos);
        }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function(loc2) {
            return getLocation(loc2.source, loc2.start);
        });
        _this.path = path !== null && path !== void 0 ? path : void 0;
        var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;
        if (extensions == null && isObjectLike(originalExtensions)) _this.extensions = _objectSpread$1({}, originalExtensions);
        else _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
        Object.defineProperties(_assertThisInitialized(_this), {
            message: {
                enumerable: true
            },
            locations: {
                enumerable: _this.locations != null
            },
            path: {
                enumerable: _this.path != null
            },
            extensions: {
                enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(_assertThisInitialized(_this), "stack", {
                value: originalError.stack,
                writable: true,
                configurable: true
            });
            return _possibleConstructorReturn(_this);
        }
        if (Error.captureStackTrace) Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError2);
        else Object.defineProperty(_assertThisInitialized(_this), "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
        });
        return _this;
    }
    _createClass$3(GraphQLError2, [
        {
            key: "toString",
            value: function toString2() {
                return printError(this);
            }
        },
        {
            key: SYMBOL_TO_STRING_TAG,
            get: function get() {
                return "Object";
            }
        }
    ]);
    return GraphQLError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function undefinedIfEmpty(array) {
    return array === void 0 || array.length === 0 ? void 0 : array;
}
function printError(error) {
    var output = error.message;
    if (error.nodes) for(var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++){
        var node = _error$nodes2[_i4];
        if (node.loc) output += "\n\n" + printLocation(node.loc);
    }
    else if (error.source && error.locations) for(var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++){
        var location = _error$locations2[_i6];
        output += "\n\n" + printSourceLocation(error.source, location);
    }
    return output;
}
function syntaxError(source, position, description) {
    return new GraphQLError("Syntax Error: ".concat(description), void 0, source, [
        position
    ]);
}
var Kind = Object.freeze({
    NAME: "Name",
    DOCUMENT: "Document",
    OPERATION_DEFINITION: "OperationDefinition",
    VARIABLE_DEFINITION: "VariableDefinition",
    SELECTION_SET: "SelectionSet",
    FIELD: "Field",
    ARGUMENT: "Argument",
    FRAGMENT_SPREAD: "FragmentSpread",
    INLINE_FRAGMENT: "InlineFragment",
    FRAGMENT_DEFINITION: "FragmentDefinition",
    VARIABLE: "Variable",
    INT: "IntValue",
    FLOAT: "FloatValue",
    STRING: "StringValue",
    BOOLEAN: "BooleanValue",
    NULL: "NullValue",
    ENUM: "EnumValue",
    LIST: "ListValue",
    OBJECT: "ObjectValue",
    OBJECT_FIELD: "ObjectField",
    DIRECTIVE: "Directive",
    NAMED_TYPE: "NamedType",
    LIST_TYPE: "ListType",
    NON_NULL_TYPE: "NonNullType",
    SCHEMA_DEFINITION: "SchemaDefinition",
    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
    FIELD_DEFINITION: "FieldDefinition",
    INPUT_VALUE_DEFINITION: "InputValueDefinition",
    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
    UNION_TYPE_DEFINITION: "UnionTypeDefinition",
    ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
    ENUM_VALUE_DEFINITION: "EnumValueDefinition",
    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
    DIRECTIVE_DEFINITION: "DirectiveDefinition",
    SCHEMA_EXTENSION: "SchemaExtension",
    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
    UNION_TYPE_EXTENSION: "UnionTypeExtension",
    ENUM_TYPE_EXTENSION: "EnumTypeExtension",
    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
});
var TokenKind = Object.freeze({
    SOF: "<SOF>",
    EOF: "<EOF>",
    BANG: "!",
    DOLLAR: "$",
    AMP: "&",
    PAREN_L: "(",
    PAREN_R: ")",
    SPREAD: "...",
    COLON: ":",
    EQUALS: "=",
    AT: "@",
    BRACKET_L: "[",
    BRACKET_R: "]",
    BRACE_L: "{",
    PIPE: "|",
    BRACE_R: "}",
    NAME: "Name",
    INT: "Int",
    FLOAT: "Float",
    STRING: "String",
    BLOCK_STRING: "BlockString",
    COMMENT: "Comment"
});
function devAssert(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message);
}
var instanceOf = function instanceOf2(value, constructor) {
    return value instanceof constructor;
};
function _defineProperties$2(target, props) {
    for(var i2 = 0; i2 < props.length; i2++){
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
}
var Source = /* @__PURE__ */ function() {
    function Source2(body) {
        var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
        var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            line: 1,
            column: 1
        };
        typeof body === "string" || devAssert(0, "Body must be a string. Received: ".concat(inspect$1(body), "."));
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(0, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || devAssert(0, "column in locationOffset is 1-indexed and must be positive.");
    }
    _createClass$2(Source2, [
        {
            key: SYMBOL_TO_STRING_TAG,
            get: function get() {
                return "Source";
            }
        }
    ]);
    return Source2;
}();
function isSource(source) {
    return instanceOf(source, Source);
}
var DirectiveLocation = Object.freeze({
    QUERY: "QUERY",
    MUTATION: "MUTATION",
    SUBSCRIPTION: "SUBSCRIPTION",
    FIELD: "FIELD",
    FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
    FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
    INLINE_FRAGMENT: "INLINE_FRAGMENT",
    VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
    SCHEMA: "SCHEMA",
    SCALAR: "SCALAR",
    OBJECT: "OBJECT",
    FIELD_DEFINITION: "FIELD_DEFINITION",
    ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
    INTERFACE: "INTERFACE",
    UNION: "UNION",
    ENUM: "ENUM",
    ENUM_VALUE: "ENUM_VALUE",
    INPUT_OBJECT: "INPUT_OBJECT",
    INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
});
function dedentBlockStringValue(rawString) {
    var lines = rawString.split(/\r\n|[\n\r]/g);
    var commonIndent = getBlockStringIndentation(rawString);
    if (commonIndent !== 0) for(var i2 = 1; i2 < lines.length; i2++)lines[i2] = lines[i2].slice(commonIndent);
    var startLine = 0;
    while(startLine < lines.length && isBlank(lines[startLine]))++startLine;
    var endLine = lines.length;
    while(endLine > startLine && isBlank(lines[endLine - 1]))--endLine;
    return lines.slice(startLine, endLine).join("\n");
}
function isBlank(str) {
    for(var i2 = 0; i2 < str.length; ++i2){
        if (str[i2] !== " " && str[i2] !== "	") return false;
    }
    return true;
}
function getBlockStringIndentation(value) {
    var _commonIndent;
    var isFirstLine = true;
    var isEmptyLine = true;
    var indent2 = 0;
    var commonIndent = null;
    for(var i2 = 0; i2 < value.length; ++i2)switch(value.charCodeAt(i2)){
        case 13:
            if (value.charCodeAt(i2 + 1) === 10) ++i2;
        case 10:
            isFirstLine = false;
            isEmptyLine = true;
            indent2 = 0;
            break;
        case 9:
        case 32:
            ++indent2;
            break;
        default:
            if (isEmptyLine && !isFirstLine && (commonIndent === null || indent2 < commonIndent)) commonIndent = indent2;
            isEmptyLine = false;
    }
    return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
function printBlockString(value) {
    var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var isSingleLine = value.indexOf("\n") === -1;
    var hasLeadingSpace = value[0] === " " || value[0] === "	";
    var hasTrailingQuote = value[value.length - 1] === '"';
    var hasTrailingSlash = value[value.length - 1] === "\\";
    var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
    var result = "";
    if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) result += "\n" + indentation;
    result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
    if (printAsMultipleLines) result += "\n";
    return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
var Lexer = /* @__PURE__ */ function() {
    function Lexer2(source) {
        var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    var _proto = Lexer2.prototype;
    _proto.advance = function advance() {
        this.lastToken = this.token;
        var token = this.token = this.lookahead();
        return token;
    };
    _proto.lookahead = function lookahead() {
        var token = this.token;
        if (token.kind !== TokenKind.EOF) do {
            var _token$next;
            token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
        }while (token.kind === TokenKind.COMMENT);
        return token;
    };
    return Lexer2;
}();
function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function printCharCode(code) {
    return isNaN(code) ? TokenKind.EOF : code < 127 ? JSON.stringify(String.fromCharCode(code)) : '"\\u'.concat(("00" + code.toString(16).toUpperCase()).slice(-4), '"');
}
function readToken(lexer, prev) {
    var source = lexer.source;
    var body = source.body;
    var bodyLength = body.length;
    var pos = prev.end;
    while(pos < bodyLength){
        var code = body.charCodeAt(pos);
        var _line = lexer.line;
        var _col = 1 + pos - lexer.lineStart;
        switch(code){
            case 65279:
            case 9:
            case 32:
            case 44:
                ++pos;
                continue;
            case 10:
                ++pos;
                ++lexer.line;
                lexer.lineStart = pos;
                continue;
            case 13:
                if (body.charCodeAt(pos + 1) === 10) pos += 2;
                else ++pos;
                ++lexer.line;
                lexer.lineStart = pos;
                continue;
            case 33:
                return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);
            case 35:
                return readComment(source, pos, _line, _col, prev);
            case 36:
                return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);
            case 38:
                return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);
            case 40:
                return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);
            case 41:
                return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);
            case 46:
                if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
                break;
            case 58:
                return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);
            case 61:
                return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);
            case 64:
                return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);
            case 91:
                return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);
            case 93:
                return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);
            case 123:
                return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);
            case 124:
                return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);
            case 125:
                return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);
            case 34:
                if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) return readBlockString(source, pos, _line, _col, prev, lexer);
                return readString(source, pos, _line, _col, prev);
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return readNumber(source, pos, code, _line, _col, prev);
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                return readName(source, pos, _line, _col, prev);
        }
        throw syntaxError(source, pos, unexpectedCharacterMessage(code));
    }
    var line = lexer.line;
    var col = 1 + pos - lexer.lineStart;
    return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
function unexpectedCharacterMessage(code) {
    if (code < 32 && code !== 9 && code !== 10 && code !== 13) return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
    if (code === 39) return `Unexpected single quote character ('), did you mean to use a double quote (")?`;
    return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
function readComment(source, start, line, col, prev) {
    var body = source.body;
    var code;
    var position = start;
    do code = body.charCodeAt(++position);
    while (!isNaN(code) && (code > 31 || code === 9));
    return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
function readNumber(source, start, firstCode, line, col, prev) {
    var body = source.body;
    var code = firstCode;
    var position = start;
    var isFloat = false;
    if (code === 45) code = body.charCodeAt(++position);
    if (code === 48) {
        code = body.charCodeAt(++position);
        if (code >= 48 && code <= 57) throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    } else {
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
    }
    if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
    }
    if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position);
        if (code === 43 || code === 45) code = body.charCodeAt(++position);
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
    }
    if (code === 46 || isNameStart(code)) throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
function readDigits(source, start, firstCode) {
    var body = source.body;
    var position = start;
    var code = firstCode;
    if (code >= 48 && code <= 57) {
        do code = body.charCodeAt(++position);
        while (code >= 48 && code <= 57);
        return position;
    }
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
function readString(source, start, line, col, prev) {
    var body = source.body;
    var position = start + 1;
    var chunkStart = position;
    var code = 0;
    var value = "";
    while(position < body.length && !isNaN(code = body.charCodeAt(position)) && code !== 10 && code !== 13){
        if (code === 34) {
            value += body.slice(chunkStart, position);
            return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
        }
        if (code < 32 && code !== 9) throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        ++position;
        if (code === 92) {
            value += body.slice(chunkStart, position - 1);
            code = body.charCodeAt(position);
            switch(code){
                case 34:
                    value += '"';
                    break;
                case 47:
                    value += "/";
                    break;
                case 92:
                    value += "\\";
                    break;
                case 98:
                    value += "\b";
                    break;
                case 102:
                    value += "\f";
                    break;
                case 110:
                    value += "\n";
                    break;
                case 114:
                    value += "\r";
                    break;
                case 116:
                    value += "	";
                    break;
                case 117:
                    var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
                    if (charCode < 0) {
                        var invalidSequence = body.slice(position + 1, position + 5);
                        throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
                    }
                    value += String.fromCharCode(charCode);
                    position += 4;
                    break;
                default:
                    throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
            }
            ++position;
            chunkStart = position;
        }
    }
    throw syntaxError(source, position, "Unterminated string.");
}
function readBlockString(source, start, line, col, prev, lexer) {
    var body = source.body;
    var position = start + 3;
    var chunkStart = position;
    var code = 0;
    var rawValue = "";
    while(position < body.length && !isNaN(code = body.charCodeAt(position))){
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
            rawValue += body.slice(chunkStart, position);
            return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
        }
        if (code < 32 && code !== 9 && code !== 10 && code !== 13) throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        if (code === 10) {
            ++position;
            ++lexer.line;
            lexer.lineStart = position;
        } else if (code === 13) {
            if (body.charCodeAt(position + 1) === 10) position += 2;
            else ++position;
            ++lexer.line;
            lexer.lineStart = position;
        } else if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
            rawValue += body.slice(chunkStart, position) + '"""';
            position += 4;
            chunkStart = position;
        } else ++position;
    }
    throw syntaxError(source, position, "Unterminated string.");
}
function uniCharCode(a2, b2, c2, d2) {
    return char2hex(a2) << 12 | char2hex(b2) << 8 | char2hex(c2) << 4 | char2hex(d2);
}
function char2hex(a2) {
    return a2 >= 48 && a2 <= 57 ? a2 - 48 : a2 >= 65 && a2 <= 70 ? a2 - 55 : a2 >= 97 && a2 <= 102 ? a2 - 87 : -1;
}
function readName(source, start, line, col, prev) {
    var body = source.body;
    var bodyLength = body.length;
    var position = start + 1;
    var code = 0;
    while(position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122))++position;
    return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}
function isNameStart(code) {
    return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}
function parse(source, options) {
    var parser = new Parser(source, options);
    return parser.parseDocument();
}
var Parser = /* @__PURE__ */ function() {
    function Parser2(source, options) {
        var sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
    }
    var _proto = Parser2.prototype;
    _proto.parseName = function parseName() {
        var token = this.expectToken(TokenKind.NAME);
        return {
            kind: Kind.NAME,
            value: token.value,
            loc: this.loc(token)
        };
    };
    _proto.parseDocument = function parseDocument2() {
        var start = this._lexer.token;
        return {
            kind: Kind.DOCUMENT,
            definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
            loc: this.loc(start)
        };
    };
    _proto.parseDefinition = function parseDefinition() {
        if (this.peek(TokenKind.NAME)) switch(this._lexer.token.value){
            case "query":
            case "mutation":
            case "subscription":
                return this.parseOperationDefinition();
            case "fragment":
                return this.parseFragmentDefinition();
            case "schema":
            case "scalar":
            case "type":
            case "interface":
            case "union":
            case "enum":
            case "input":
            case "directive":
                return this.parseTypeSystemDefinition();
            case "extend":
                return this.parseTypeSystemExtension();
        }
        else if (this.peek(TokenKind.BRACE_L)) return this.parseOperationDefinition();
        else if (this.peekDescription()) return this.parseTypeSystemDefinition();
        throw this.unexpected();
    };
    _proto.parseOperationDefinition = function parseOperationDefinition() {
        var start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) return {
            kind: Kind.OPERATION_DEFINITION,
            operation: "query",
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
        var operation = this.parseOperationType();
        var name;
        if (this.peek(TokenKind.NAME)) name = this.parseName();
        return {
            kind: Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    };
    _proto.parseOperationType = function parseOperationType() {
        var operationToken = this.expectToken(TokenKind.NAME);
        switch(operationToken.value){
            case "query":
                return "query";
            case "mutation":
                return "mutation";
            case "subscription":
                return "subscription";
        }
        throw this.unexpected(operationToken);
    };
    _proto.parseVariableDefinitions = function parseVariableDefinitions() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
    };
    _proto.parseVariableDefinition = function parseVariableDefinition() {
        var start = this._lexer.token;
        return {
            kind: Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : void 0,
            directives: this.parseDirectives(true),
            loc: this.loc(start)
        };
    };
    _proto.parseVariable = function parseVariable() {
        var start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return {
            kind: Kind.VARIABLE,
            name: this.parseName(),
            loc: this.loc(start)
        };
    };
    _proto.parseSelectionSet = function parseSelectionSet() {
        var start = this._lexer.token;
        return {
            kind: Kind.SELECTION_SET,
            selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
            loc: this.loc(start)
        };
    };
    _proto.parseSelection = function parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    };
    _proto.parseField = function parseField() {
        var start = this._lexer.token;
        var nameOrAlias = this.parseName();
        var alias;
        var name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else name = nameOrAlias;
        return {
            kind: Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
            loc: this.loc(start)
        };
    };
    _proto.parseArguments = function parseArguments(isConst) {
        var item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    };
    _proto.parseArgument = function parseArgument() {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
            kind: Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(false),
            loc: this.loc(start)
        };
    };
    _proto.parseConstArgument = function parseConstArgument() {
        var start = this._lexer.token;
        return {
            kind: Kind.ARGUMENT,
            name: this.parseName(),
            value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
            loc: this.loc(start)
        };
    };
    _proto.parseFragment = function parseFragment() {
        var start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        var hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) return {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false),
            loc: this.loc(start)
        };
        return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    };
    _proto.parseFragmentDefinition = function parseFragmentDefinition() {
        var _this$_options;
        var start = this._lexer.token;
        this.expectKeyword("fragment");
        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) return {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
        return {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    };
    _proto.parseFragmentName = function parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName();
    };
    _proto.parseValueLiteral = function parseValueLiteral(isConst) {
        var token = this._lexer.token;
        switch(token.kind){
            case TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case TokenKind.INT:
                this._lexer.advance();
                return {
                    kind: Kind.INT,
                    value: token.value,
                    loc: this.loc(token)
                };
            case TokenKind.FLOAT:
                this._lexer.advance();
                return {
                    kind: Kind.FLOAT,
                    value: token.value,
                    loc: this.loc(token)
                };
            case TokenKind.STRING:
            case TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case TokenKind.NAME:
                this._lexer.advance();
                switch(token.value){
                    case "true":
                        return {
                            kind: Kind.BOOLEAN,
                            value: true,
                            loc: this.loc(token)
                        };
                    case "false":
                        return {
                            kind: Kind.BOOLEAN,
                            value: false,
                            loc: this.loc(token)
                        };
                    case "null":
                        return {
                            kind: Kind.NULL,
                            loc: this.loc(token)
                        };
                    default:
                        return {
                            kind: Kind.ENUM,
                            value: token.value,
                            loc: this.loc(token)
                        };
                }
            case TokenKind.DOLLAR:
                if (!isConst) return this.parseVariable();
                break;
        }
        throw this.unexpected();
    };
    _proto.parseStringLiteral = function parseStringLiteral() {
        var token = this._lexer.token;
        this._lexer.advance();
        return {
            kind: Kind.STRING,
            value: token.value,
            block: token.kind === TokenKind.BLOCK_STRING,
            loc: this.loc(token)
        };
    };
    _proto.parseList = function parseList(isConst) {
        var _this = this;
        var start = this._lexer.token;
        var item = function item2() {
            return _this.parseValueLiteral(isConst);
        };
        return {
            kind: Kind.LIST,
            values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
            loc: this.loc(start)
        };
    };
    _proto.parseObject = function parseObject2(isConst) {
        var _this2 = this;
        var start = this._lexer.token;
        var item = function item2() {
            return _this2.parseObjectField(isConst);
        };
        return {
            kind: Kind.OBJECT,
            fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
            loc: this.loc(start)
        };
    };
    _proto.parseObjectField = function parseObjectField(isConst) {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
            kind: Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst),
            loc: this.loc(start)
        };
    };
    _proto.parseDirectives = function parseDirectives(isConst) {
        var directives = [];
        while(this.peek(TokenKind.AT))directives.push(this.parseDirective(isConst));
        return directives;
    };
    _proto.parseDirective = function parseDirective(isConst) {
        var start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return {
            kind: Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst),
            loc: this.loc(start)
        };
    };
    _proto.parseTypeReference = function parseTypeReference() {
        var start = this._lexer.token;
        var type;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
            type = this.parseTypeReference();
            this.expectToken(TokenKind.BRACKET_R);
            type = {
                kind: Kind.LIST_TYPE,
                type,
                loc: this.loc(start)
            };
        } else type = this.parseNamedType();
        if (this.expectOptionalToken(TokenKind.BANG)) return {
            kind: Kind.NON_NULL_TYPE,
            type,
            loc: this.loc(start)
        };
        return type;
    };
    _proto.parseNamedType = function parseNamedType() {
        var start = this._lexer.token;
        return {
            kind: Kind.NAMED_TYPE,
            name: this.parseName(),
            loc: this.loc(start)
        };
    };
    _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
        var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) switch(keywordToken.value){
            case "schema":
                return this.parseSchemaDefinition();
            case "scalar":
                return this.parseScalarTypeDefinition();
            case "type":
                return this.parseObjectTypeDefinition();
            case "interface":
                return this.parseInterfaceTypeDefinition();
            case "union":
                return this.parseUnionTypeDefinition();
            case "enum":
                return this.parseEnumTypeDefinition();
            case "input":
                return this.parseInputObjectTypeDefinition();
            case "directive":
                return this.parseDirectiveDefinition();
        }
        throw this.unexpected(keywordToken);
    };
    _proto.peekDescription = function peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    };
    _proto.parseDescription = function parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    };
    _proto.parseSchemaDefinition = function parseSchemaDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        return {
            kind: Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes,
            loc: this.loc(start)
        };
    };
    _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
        var start = this._lexer.token;
        var operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        var type = this.parseNamedType();
        return {
            kind: Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type,
            loc: this.loc(start)
        };
    };
    _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
            kind: Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
        };
    };
    _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
            kind: Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
        var _this$_options2;
        if (!this.expectOptionalKeyword("implements")) return [];
        if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
            var types = [];
            this.expectOptionalToken(TokenKind.AMP);
            do types.push(this.parseNamedType());
            while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));
            return types;
        }
        return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
    };
    _proto.parseFieldsDefinition = function parseFieldsDefinition() {
        var _this$_options3;
        if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
            this._lexer.advance();
            this._lexer.advance();
            return [];
        }
        return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
    };
    _proto.parseFieldDefinition = function parseFieldDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        var type = this.parseTypeReference();
        var directives = this.parseDirectives(true);
        return {
            kind: Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives,
            loc: this.loc(start)
        };
    };
    _proto.parseArgumentDefs = function parseArgumentDefs() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
    };
    _proto.parseInputValueDef = function parseInputValueDef() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        var type = this.parseTypeReference();
        var defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) defaultValue = this.parseValueLiteral(true);
        var directives = this.parseDirectives(true);
        return {
            kind: Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives,
            loc: this.loc(start)
        };
    };
    _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("interface");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
            kind: Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        return {
            kind: Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types,
            loc: this.loc(start)
        };
    };
    _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
        return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
    };
    _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        return {
            kind: Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values,
            loc: this.loc(start)
        };
    };
    _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
    };
    _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
            kind: Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
        };
    };
    _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        return {
            kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
    };
    _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
        var keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) switch(keywordToken.value){
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(keywordToken);
    };
    _proto.parseSchemaExtension = function parseSchemaExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) throw this.unexpected();
        return {
            kind: Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes,
            loc: this.loc(start)
        };
    };
    _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        if (directives.length === 0) throw this.unexpected();
        return {
            kind: Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives,
            loc: this.loc(start)
        };
    };
    _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return {
            kind: Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return {
            kind: Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) throw this.unexpected();
        return {
            kind: Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types,
            loc: this.loc(start)
        };
    };
    _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) throw this.unexpected();
        return {
            kind: Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values,
            loc: this.loc(start)
        };
    };
    _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) throw this.unexpected();
        return {
            kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields,
            loc: this.loc(start)
        };
    };
    _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(TokenKind.AT);
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        var repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        var locations = this.parseDirectiveLocations();
        return {
            kind: Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations,
            loc: this.loc(start)
        };
    };
    _proto.parseDirectiveLocations = function parseDirectiveLocations() {
        return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
    };
    _proto.parseDirectiveLocation = function parseDirectiveLocation() {
        var start = this._lexer.token;
        var name = this.parseName();
        if (DirectiveLocation[name.value] !== void 0) return name;
        throw this.unexpected(start);
    };
    _proto.loc = function loc(startToken) {
        var _this$_options4;
        if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) return new Location(startToken, this._lexer.lastToken, this._lexer.source);
    };
    _proto.peek = function peek(kind) {
        return this._lexer.token.kind === kind;
    };
    _proto.expectToken = function expectToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
    };
    _proto.expectOptionalToken = function expectOptionalToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        return void 0;
    };
    _proto.expectKeyword = function expectKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) this._lexer.advance();
        else throw syntaxError(this._lexer.source, token.start, 'Expected "'.concat(value, '", found ').concat(getTokenDesc(token), "."));
    };
    _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
            this._lexer.advance();
            return true;
        }
        return false;
    };
    _proto.unexpected = function unexpected(atToken) {
        var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
    };
    _proto.any = function any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        while(!this.expectOptionalToken(closeKind))nodes.push(parseFn.call(this));
        return nodes;
    };
    _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            var nodes = [];
            do nodes.push(parseFn.call(this));
            while (!this.expectOptionalToken(closeKind));
            return nodes;
        }
        return [];
    };
    _proto.many = function many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        do nodes.push(parseFn.call(this));
        while (!this.expectOptionalToken(closeKind));
        return nodes;
    };
    _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        var nodes = [];
        do nodes.push(parseFn.call(this));
        while (this.expectOptionalToken(delimiterKind));
        return nodes;
    };
    return Parser2;
}();
function getTokenDesc(token) {
    var value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ' "'.concat(value, '"') : "");
}
function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? '"'.concat(kind, '"') : kind;
}
function print(ast) {
    return visit(ast, {
        leave: printDocASTReducer
    });
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
    Name: function Name(node) {
        return node.value;
    },
    Variable: function Variable(node) {
        return "$" + node.name;
    },
    Document: function Document2(node) {
        return join(node.definitions, "\n\n") + "\n";
    },
    OperationDefinition: function OperationDefinition(node) {
        var op = node.operation;
        var name = node.name;
        var varDefs = wrap$1("(", join(node.variableDefinitions, ", "), ")");
        var directives = join(node.directives, " ");
        var selectionSet = node.selectionSet;
        return !name && !directives && !varDefs && op === "query" ? selectionSet : join([
            op,
            join([
                name,
                varDefs
            ]),
            directives,
            selectionSet
        ], " ");
    },
    VariableDefinition: function VariableDefinition(_ref) {
        var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
        return variable + ": " + type + wrap$1(" = ", defaultValue) + wrap$1(" ", join(directives, " "));
    },
    SelectionSet: function SelectionSet(_ref2) {
        var selections = _ref2.selections;
        return block(selections);
    },
    Field: function Field(_ref3) {
        var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
        var prefix = wrap$1("", alias, ": ") + name;
        var argsLine = prefix + wrap$1("(", join(args, ", "), ")");
        if (argsLine.length > MAX_LINE_LENGTH) argsLine = prefix + wrap$1("(\n", indent(join(args, "\n")), "\n)");
        return join([
            argsLine,
            join(directives, " "),
            selectionSet
        ], " ");
    },
    Argument: function Argument(_ref4) {
        var name = _ref4.name, value = _ref4.value;
        return name + ": " + value;
    },
    FragmentSpread: function FragmentSpread(_ref5) {
        var name = _ref5.name, directives = _ref5.directives;
        return "..." + name + wrap$1(" ", join(directives, " "));
    },
    InlineFragment: function InlineFragment(_ref6) {
        var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
        return join([
            "...",
            wrap$1("on ", typeCondition),
            join(directives, " "),
            selectionSet
        ], " ");
    },
    FragmentDefinition: function FragmentDefinition(_ref7) {
        var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
        return "fragment ".concat(name).concat(wrap$1("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap$1("", join(directives, " "), " ")) + selectionSet;
    },
    IntValue: function IntValue(_ref8) {
        var value = _ref8.value;
        return value;
    },
    FloatValue: function FloatValue(_ref9) {
        var value = _ref9.value;
        return value;
    },
    StringValue: function StringValue(_ref10, key) {
        var value = _ref10.value, isBlockString = _ref10.block;
        return isBlockString ? printBlockString(value, key === "description" ? "" : "  ") : JSON.stringify(value);
    },
    BooleanValue: function BooleanValue(_ref11) {
        var value = _ref11.value;
        return value ? "true" : "false";
    },
    NullValue: function NullValue() {
        return "null";
    },
    EnumValue: function EnumValue(_ref12) {
        var value = _ref12.value;
        return value;
    },
    ListValue: function ListValue(_ref13) {
        var values = _ref13.values;
        return "[" + join(values, ", ") + "]";
    },
    ObjectValue: function ObjectValue(_ref14) {
        var fields = _ref14.fields;
        return "{" + join(fields, ", ") + "}";
    },
    ObjectField: function ObjectField(_ref15) {
        var name = _ref15.name, value = _ref15.value;
        return name + ": " + value;
    },
    Directive: function Directive(_ref16) {
        var name = _ref16.name, args = _ref16.arguments;
        return "@" + name + wrap$1("(", join(args, ", "), ")");
    },
    NamedType: function NamedType(_ref17) {
        var name = _ref17.name;
        return name;
    },
    ListType: function ListType(_ref18) {
        var type = _ref18.type;
        return "[" + type + "]";
    },
    NonNullType: function NonNullType(_ref19) {
        var type = _ref19.type;
        return type + "!";
    },
    SchemaDefinition: addDescription(function(_ref20) {
        var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
        return join([
            "schema",
            join(directives, " "),
            block(operationTypes)
        ], " ");
    }),
    OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
        var operation = _ref21.operation, type = _ref21.type;
        return operation + ": " + type;
    },
    ScalarTypeDefinition: addDescription(function(_ref22) {
        var name = _ref22.name, directives = _ref22.directives;
        return join([
            "scalar",
            name,
            join(directives, " ")
        ], " ");
    }),
    ObjectTypeDefinition: addDescription(function(_ref23) {
        var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
        return join([
            "type",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
        ], " ");
    }),
    FieldDefinition: addDescription(function(_ref24) {
        var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
        return name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + ": " + type + wrap$1(" ", join(directives, " "));
    }),
    InputValueDefinition: addDescription(function(_ref25) {
        var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
        return join([
            name + ": " + type,
            wrap$1("= ", defaultValue),
            join(directives, " ")
        ], " ");
    }),
    InterfaceTypeDefinition: addDescription(function(_ref26) {
        var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
        return join([
            "interface",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
        ], " ");
    }),
    UnionTypeDefinition: addDescription(function(_ref27) {
        var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
        return join([
            "union",
            name,
            join(directives, " "),
            types && types.length !== 0 ? "= " + join(types, " | ") : ""
        ], " ");
    }),
    EnumTypeDefinition: addDescription(function(_ref28) {
        var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
        return join([
            "enum",
            name,
            join(directives, " "),
            block(values)
        ], " ");
    }),
    EnumValueDefinition: addDescription(function(_ref29) {
        var name = _ref29.name, directives = _ref29.directives;
        return join([
            name,
            join(directives, " ")
        ], " ");
    }),
    InputObjectTypeDefinition: addDescription(function(_ref30) {
        var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
        return join([
            "input",
            name,
            join(directives, " "),
            block(fields)
        ], " ");
    }),
    DirectiveDefinition: addDescription(function(_ref31) {
        var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
        return "directive @" + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
    }),
    SchemaExtension: function SchemaExtension(_ref32) {
        var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
        return join([
            "extend schema",
            join(directives, " "),
            block(operationTypes)
        ], " ");
    },
    ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
        var name = _ref33.name, directives = _ref33.directives;
        return join([
            "extend scalar",
            name,
            join(directives, " ")
        ], " ");
    },
    ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
        var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
        return join([
            "extend type",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
        ], " ");
    },
    InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
        var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
        return join([
            "extend interface",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
        ], " ");
    },
    UnionTypeExtension: function UnionTypeExtension(_ref36) {
        var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
        return join([
            "extend union",
            name,
            join(directives, " "),
            types && types.length !== 0 ? "= " + join(types, " | ") : ""
        ], " ");
    },
    EnumTypeExtension: function EnumTypeExtension(_ref37) {
        var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
        return join([
            "extend enum",
            name,
            join(directives, " "),
            block(values)
        ], " ");
    },
    InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
        var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
        return join([
            "extend input",
            name,
            join(directives, " "),
            block(fields)
        ], " ");
    }
};
function addDescription(cb) {
    return function(node) {
        return join([
            node.description,
            cb(node)
        ], "\n");
    };
}
function join(maybeArray) {
    var _maybeArray$filter$jo;
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x2) {
        return x2;
    }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
    return wrap$1("{\n", indent(join(array, "\n")), "\n}");
}
function wrap$1(start, maybeString) {
    var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
    return wrap$1("  ", str.replace(/\n/g, "\n  "));
}
function isMultiline(str) {
    return str.indexOf("\n") !== -1;
}
function hasMultilineItems(maybeArray) {
    return maybeArray != null && maybeArray.some(isMultiline);
}
function removeTemporaryGlobals() {
    return typeof Source === "function" ? remove() : remove();
}
function checkDEV() {
    __DEV__ ? invariant(typeof DEV === "boolean", DEV) : invariant(typeof DEV === "boolean", 36);
}
removeTemporaryGlobals();
checkDEV();
function shouldInclude(_a2, variables) {
    var directives = _a2.directives;
    if (!directives || !directives.length) return true;
    return getInclusionDirectives(directives).every(function(_a3) {
        var directive = _a3.directive, ifArgument = _a3.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === "Variable") {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant(evaledValue !== void 0, 37);
        } else evaledValue = ifArgument.value.value;
        return directive.name.value === "skip" ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root2) {
    var names = [];
    visit(root2, {
        Directive: function(node) {
            names.push(node.name.value);
        }
    });
    return names;
}
function hasDirectives(names, root2) {
    return getDirectiveNames(root2).some(function(name) {
        return names.indexOf(name) > -1;
    });
}
function hasClientExports(document2) {
    return document2 && hasDirectives([
        "client"
    ], document2) && hasDirectives([
        "export"
    ], document2);
}
function isInclusionDirective(_a2) {
    var value = _a2.name.value;
    return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) directives.forEach(function(directive) {
        if (!isInclusionDirective(directive)) return;
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
        __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant(directiveArguments && directiveArguments.length === 1, 38);
        var ifArgument = directiveArguments[0];
        __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant(ifArgument.name && ifArgument.name.value === "if", 39);
        var ifValue = ifArgument.value;
        __DEV__ ? invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 40);
        result.push({
            directive,
            ifArgument
        });
    });
    return result;
}
function getFragmentQueryDocument(document2, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document2.definitions.forEach(function(definition) {
        if (definition.kind === "OperationDefinition") throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(41);
        if (definition.kind === "FragmentDefinition") fragments.push(definition);
    });
    if (typeof actualFragmentName === "undefined") {
        __DEV__ ? invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant(fragments.length === 1, 42);
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign(__assign({}, document2), {
        definitions: __spreadArray([
            {
                kind: "OperationDefinition",
                operation: "query",
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: actualFragmentName
                            }
                        }
                    ]
                }
            }
        ], document2.definitions, true)
    });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) fragments = [];
    var symTable = {};
    fragments.forEach(function(fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch(selection.kind){
        case "InlineFragment":
            return selection;
        case "FragmentSpread":
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant(fragment, 43);
            return fragment;
        default:
            return null;
    }
}
function isNonNullObject$1(obj) {
    return obj !== null && typeof obj === "object";
}
function makeReference(id) {
    return {
        __ref: String(id)
    };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
    return isNonNullObject$1(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
    return value.kind === "StringValue";
}
function isBooleanValue(value) {
    return value.kind === "BooleanValue";
}
function isIntValue(value) {
    return value.kind === "IntValue";
}
function isFloatValue(value) {
    return value.kind === "FloatValue";
}
function isVariable(value) {
    return value.kind === "Variable";
}
function isObjectValue(value) {
    return value.kind === "ObjectValue";
}
function isListValue(value) {
    return value.kind === "ListValue";
}
function isEnumValue(value) {
    return value.kind === "EnumValue";
}
function isNullValue(value) {
    return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) argObj[name.value] = Number(value.value);
    else if (isBooleanValue(value) || isStringValue(value)) argObj[name.value] = value.value;
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function(obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    } else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    } else if (isListValue(value)) argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
    });
    else if (isEnumValue(value)) argObj[name.value] = value.value;
    else if (isNullValue(value)) argObj[name.value] = null;
    else throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(52);
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function(directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) directive.arguments.forEach(function(_a2) {
                var name = _a2.name, value = _a2.value;
                return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
            });
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function(_a2) {
            var name = _a2.name, value = _a2.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
    if (args && directives && directives["connection"] && directives["connection"]["key"]) {
        if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
            var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function(key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
        } else return directives["connection"]["key"];
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;
        if (directives[key] && Object.keys(directives[key]).length) completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
        else completeFieldName += "@".concat(key);
    });
    return completeFieldName;
}, {
    setStringify: function(s2) {
        var previous = stringify;
        stringify = s2;
        return previous;
    }
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject$1(value) && !Array.isArray(value)) value = Object.keys(value).sort().reduce(function(copy, key) {
        copy[key] = value[key];
        return copy;
    }, {});
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function(_a2) {
            var name = _a2.name, value = _a2.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === "string") return result.__typename;
    for(var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++){
        var selection = _a2[_i];
        if (isField(selection)) {
            if (selection.name.value === "__typename") return result[resultKeyNameFromField(selection)];
        } else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === "string") return typename;
        }
    }
}
function isField(selection) {
    return selection.kind === "Field";
}
function isInlineFragment(selection) {
    return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
    __DEV__ ? invariant(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc && doc.kind === "Document", 44);
    var operations = doc.definitions.filter(function(d2) {
        return d2.kind !== "FragmentDefinition";
    }).map(function(definition) {
        if (definition.kind !== "OperationDefinition") throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition.kind, '"')) : new InvariantError(45);
        return definition;
    });
    __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant(operations.length <= 1, 46);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition";
    })[0];
}
function getOperationName(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x2) {
        return x2.name.value;
    })[0] || null;
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === "FragmentDefinition";
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? invariant(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant(queryDef && queryDef.operation === "query", 47);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? invariant(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc.kind === "Document", 48);
    __DEV__ ? invariant(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant(doc.definitions.length <= 1, 49);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? invariant(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant(fragmentDef.kind === "FragmentDefinition", 50);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for(var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++){
        var definition = _a2[_i];
        if (definition.kind === "OperationDefinition") {
            var operation = definition.operation;
            if (operation === "query" || operation === "mutation" || operation === "subscription") return definition;
        }
        if (definition.kind === "FragmentDefinition" && !fragmentDefinition) fragmentDefinition = definition;
    }
    if (fragmentDefinition) return fragmentDefinition;
    throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(51);
}
function getDefaultValues(definition) {
    var defaultValues = /* @__PURE__ */ Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) defs.forEach(function(def) {
        if (def.defaultValue) valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
    });
    return defaultValues;
}
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function(elem, i2) {
        if (test.call(this, elem, i2, array)) array[target++] = elem;
    }, context);
    array.length = target;
    return array;
}
var TYPENAME_FIELD = {
    kind: "Field",
    name: {
        kind: "Name",
        value: "__typename"
    }
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function(selection) {
        return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function(dir) {
            return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = /* @__PURE__ */ Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
        Variable: {
            enter: function(node, _key, parent) {
                if (parent.kind !== "VariableDefinition") variablesInUse[node.name.value] = true;
            }
        },
        Field: {
            enter: function(node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function(directive) {
                        return directive.remove;
                    });
                    if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) node.arguments.forEach(function(arg) {
                            if (arg.value.kind === "Variable") variablesToRemove.push({
                                name: arg.value.name.value
                            });
                        });
                        if (node.selectionSet) getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                            fragmentSpreadsToRemove.push({
                                name: frag.name.value
                            });
                        });
                        return null;
                    }
                }
            }
        },
        FragmentSpread: {
            enter: function(node) {
                fragmentSpreadsInUse[node.name.value] = true;
            }
        },
        Directive: {
            enter: function(node) {
                if (getDirectiveMatcher(directives)(node)) return null;
            }
        }
    }));
    if (modifiedDoc && filterInPlace(variablesToRemove, function(v2) {
        return !!v2.name && !variablesInUse[v2.name];
    }).length) modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
        return !!fs.name && !fragmentSpreadsInUse[fs.name];
    }).length) modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
    return visit(checkDocument(doc), {
        SelectionSet: {
            enter: function(node, _key, parent) {
                if (parent && parent.kind === "OperationDefinition") return;
                var selections = node.selections;
                if (!selections) return;
                var skip = selections.some(function(selection) {
                    return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
                });
                if (skip) return;
                var field = parent;
                if (isField(field) && field.directives && field.directives.some(function(d2) {
                    return d2.name.value === "export";
                })) return;
                return __assign(__assign({}, node), {
                    selections: __spreadArray(__spreadArray([], selections, true), [
                        TYPENAME_FIELD
                    ], false)
                });
            }
        }
    });
}, {
    added: function(field) {
        return field === TYPENAME_FIELD;
    }
});
var connectionRemoveConfig = {
    test: function(directive) {
        var willRemove = directive.name.value === "connection";
        if (willRemove) {
            if (!directive.arguments || !directive.arguments.some(function(arg) {
                return arg.name.value === "key";
            })) __DEV__ && invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
        }
        return willRemove;
    }
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([
        connectionRemoveConfig
    ], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function(aConfig) {
            return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(visit(doc, {
        OperationDefinition: {
            enter: function(node) {
                return __assign(__assign({}, node), {
                    variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
                        return !config.some(function(arg) {
                            return arg.name === varDef.variable.name.value;
                        });
                    }) : []
                });
            }
        },
        Field: {
            enter: function(node) {
                var shouldRemoveField = config.some(function(argConfig) {
                    return argConfig.remove;
                });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) node.arguments.forEach(function(arg) {
                        if (argMatcher(arg)) argMatchCount_1 += 1;
                    });
                    if (argMatchCount_1 === 1) return null;
                }
            }
        },
        Argument: {
            enter: function(node) {
                if (argMatcher(node)) return null;
            }
        }
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function(def) {
            return def.name === node.name.value;
        })) return null;
    }
    return nullIfDocIsEmpty(visit(doc, {
        FragmentSpread: {
            enter
        },
        FragmentDefinition: {
            enter
        }
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function(selection) {
        if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
            return allFragments.push(frag);
        });
        else if (selection.kind === "FragmentSpread") allFragments.push(selection);
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document2) {
    var definition = getMainDefinition(document2);
    var definitionOperation = definition.operation;
    if (definitionOperation === "query") return document2;
    var modifiedDoc = visit(document2, {
        OperationDefinition: {
            enter: function(node) {
                return __assign(__assign({}, node), {
                    operation: "query"
                });
            }
        }
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
    checkDocument(document2);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function(directive) {
                return directive.name.value === "client";
            },
            remove: true
        }
    ], document2);
    if (modifiedDoc) modifiedDoc = visit(modifiedDoc, {
        FragmentDefinition: {
            enter: function(node) {
                if (node.selectionSet) {
                    var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
                        return isField(selection) && selection.name.value === "__typename";
                    });
                    if (isTypenameOnly) return null;
                }
            }
        }
    });
    return modifiedDoc;
}
var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for(var i2 = 1; i2 < count; ++i2)target = merger.merge(target, sources[i2]);
    }
    return target;
}
var defaultReconciler = function(target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
    function DeepMerger2(reconciler) {
        if (reconciler === void 0) reconciler = defaultReconciler;
        this.reconciler = reconciler;
        this.isObject = isNonNullObject$1;
        this.pastCopies = /* @__PURE__ */ new Set();
    }
    DeepMerger2.prototype.merge = function(target, source) {
        var _this = this;
        var context = [];
        for(var _i = 2; _i < arguments.length; _i++)context[_i - 2] = arguments[_i];
        if (isNonNullObject$1(source) && isNonNullObject$1(target)) {
            Object.keys(source).forEach(function(sourceKey) {
                if (hasOwnProperty$5.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, __spreadArray([
                            target,
                            source,
                            sourceKey
                        ], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                } else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger2.prototype.shallowCopyForMerge = function(value) {
        if (isNonNullObject$1(value)) {
            if (this.pastCopies.has(value)) {
                if (!Object.isFrozen(value)) return value;
                this.pastCopies.delete(value);
            }
            if (Array.isArray(value)) value = value.slice(0);
            else value = __assign({
                __proto__: Object.getPrototypeOf(value)
            }, value);
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger2;
}();
function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
        if (it) o2 = it;
        var i2 = 0;
        return function() {
            if (i2 >= o2.length) return {
                done: true
            };
            return {
                done: false,
                value: o2[i2++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set") return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i2 = 0, arr2 = new Array(len); i2 < len; i2++)arr2[i2] = arr[i2];
    return arr2;
}
function _defineProperties$1(target, props) {
    for(var i2 = 0; i2 < props.length; i2++){
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
}
var hasSymbols = function() {
    return typeof Symbol === "function";
};
var hasSymbol = function(name) {
    return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
    return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) Symbol.observable = Symbol("observable");
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
    var value = obj[key];
    if (value == null) return void 0;
    if (typeof value !== "function") throw new TypeError(value + " is not a function");
    return value;
}
function getSpecies(obj) {
    var ctor = obj.constructor;
    if (ctor !== void 0) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) ctor = void 0;
    }
    return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x2) {
    return x2 instanceof Observable;
}
function hostReportError(e29) {
    if (hostReportError.log) hostReportError.log(e29);
    else setTimeout(function() {
        throw e29;
    });
}
function enqueue(fn) {
    Promise.resolve().then(function() {
        try {
            fn();
        } catch (e210) {
            hostReportError(e210);
        }
    });
}
function cleanupSubscription(subscription) {
    var cleanup = subscription._cleanup;
    if (cleanup === void 0) return;
    subscription._cleanup = void 0;
    if (!cleanup) return;
    try {
        if (typeof cleanup === "function") cleanup();
        else {
            var unsubscribe = getMethod(cleanup, "unsubscribe");
            if (unsubscribe) unsubscribe.call(cleanup);
        }
    } catch (e211) {
        hostReportError(e211);
    }
}
function closeSubscription(subscription) {
    subscription._observer = void 0;
    subscription._queue = void 0;
    subscription._state = "closed";
}
function flushSubscription(subscription) {
    var queue = subscription._queue;
    if (!queue) return;
    subscription._queue = void 0;
    subscription._state = "ready";
    for(var i2 = 0; i2 < queue.length; ++i2){
        notifySubscription(subscription, queue[i2].type, queue[i2].value);
        if (subscription._state === "closed") break;
    }
}
function notifySubscription(subscription, type, value) {
    subscription._state = "running";
    var observer = subscription._observer;
    try {
        var m2 = getMethod(observer, type);
        switch(type){
            case "next":
                if (m2) m2.call(observer, value);
                break;
            case "error":
                closeSubscription(subscription);
                if (m2) m2.call(observer, value);
                else throw value;
                break;
            case "complete":
                closeSubscription(subscription);
                if (m2) m2.call(observer);
                break;
        }
    } catch (e212) {
        hostReportError(e212);
    }
    if (subscription._state === "closed") cleanupSubscription(subscription);
    else if (subscription._state === "running") subscription._state = "ready";
}
function onNotify(subscription, type, value) {
    if (subscription._state === "closed") return;
    if (subscription._state === "buffering") {
        subscription._queue.push({
            type,
            value
        });
        return;
    }
    if (subscription._state !== "ready") {
        subscription._state = "buffering";
        subscription._queue = [
            {
                type,
                value
            }
        ];
        enqueue(function() {
            return flushSubscription(subscription);
        });
        return;
    }
    notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
    function Subscription2(observer, subscriber) {
        this._cleanup = void 0;
        this._observer = observer;
        this._queue = void 0;
        this._state = "initializing";
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
            this._cleanup = subscriber.call(void 0, subscriptionObserver);
        } catch (e213) {
            subscriptionObserver.error(e213);
        }
        if (this._state === "initializing") this._state = "ready";
    }
    var _proto = Subscription2.prototype;
    _proto.unsubscribe = function unsubscribe() {
        if (this._state !== "closed") {
            closeSubscription(this);
            cleanupSubscription(this);
        }
    };
    _createClass$1(Subscription2, [
        {
            key: "closed",
            get: function() {
                return this._state === "closed";
            }
        }
    ]);
    return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
    function SubscriptionObserver2(subscription) {
        this._subscription = subscription;
    }
    var _proto2 = SubscriptionObserver2.prototype;
    _proto2.next = function next(value) {
        onNotify(this._subscription, "next", value);
    };
    _proto2.error = function error(value) {
        onNotify(this._subscription, "error", value);
    };
    _proto2.complete = function complete() {
        onNotify(this._subscription, "complete");
    };
    _createClass$1(SubscriptionObserver2, [
        {
            key: "closed",
            get: function() {
                return this._subscription._state === "closed";
            }
        }
    ]);
    return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
    function Observable2(subscriber) {
        if (!(this instanceof Observable2)) throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
    }
    var _proto3 = Observable2.prototype;
    _proto3.subscribe = function subscribe(observer) {
        if (typeof observer !== "object" || observer === null) observer = {
            next: observer,
            error: arguments[1],
            complete: arguments[2]
        };
        return new Subscription(observer, this._subscriber);
    };
    _proto3.forEach = function forEach2(fn) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (typeof fn !== "function") {
                reject(new TypeError(fn + " is not a function"));
                return;
            }
            function done() {
                subscription.unsubscribe();
                resolve();
            }
            var subscription = _this.subscribe({
                next: function(value) {
                    try {
                        fn(value, done);
                    } catch (e214) {
                        reject(e214);
                        subscription.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
        });
    };
    _proto3.map = function map(fn) {
        var _this2 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function(observer) {
            return _this2.subscribe({
                next: function(value) {
                    try {
                        value = fn(value);
                    } catch (e215) {
                        return observer.error(e215);
                    }
                    observer.next(value);
                },
                error: function(e216) {
                    observer.error(e216);
                },
                complete: function() {
                    observer.complete();
                }
            });
        });
    };
    _proto3.filter = function filter(fn) {
        var _this3 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function(observer) {
            return _this3.subscribe({
                next: function(value) {
                    try {
                        if (!fn(value)) return;
                    } catch (e217) {
                        return observer.error(e217);
                    }
                    observer.next(value);
                },
                error: function(e218) {
                    observer.error(e218);
                },
                complete: function() {
                    observer.complete();
                }
            });
        });
    };
    _proto3.reduce = function reduce(fn) {
        var _this4 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        var hasSeed = arguments.length > 1;
        var hasValue = false;
        var seed = arguments[1];
        var acc = seed;
        return new C2(function(observer) {
            return _this4.subscribe({
                next: function(value) {
                    var first = !hasValue;
                    hasValue = true;
                    if (!first || hasSeed) try {
                        acc = fn(acc, value);
                    } catch (e219) {
                        return observer.error(e219);
                    }
                    else acc = value;
                },
                error: function(e220) {
                    observer.error(e220);
                },
                complete: function() {
                    if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
                    observer.next(acc);
                    observer.complete();
                }
            });
        });
    };
    _proto3.concat = function concat2() {
        var _this5 = this;
        for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
        var C2 = getSpecies(this);
        return new C2(function(observer) {
            var subscription;
            var index = 0;
            function startNext(next) {
                subscription = next.subscribe({
                    next: function(v2) {
                        observer.next(v2);
                    },
                    error: function(e221) {
                        observer.error(e221);
                    },
                    complete: function() {
                        if (index === sources.length) {
                            subscription = void 0;
                            observer.complete();
                        } else startNext(C2.from(sources[index++]));
                    }
                });
            }
            startNext(_this5);
            return function() {
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = void 0;
                }
            };
        });
    };
    _proto3.flatMap = function flatMap(fn) {
        var _this6 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function(observer) {
            var subscriptions = [];
            var outer = _this6.subscribe({
                next: function(value) {
                    if (fn) try {
                        value = fn(value);
                    } catch (e222) {
                        return observer.error(e222);
                    }
                    var inner = C2.from(value).subscribe({
                        next: function(value2) {
                            observer.next(value2);
                        },
                        error: function(e223) {
                            observer.error(e223);
                        },
                        complete: function() {
                            var i2 = subscriptions.indexOf(inner);
                            if (i2 >= 0) subscriptions.splice(i2, 1);
                            completeIfDone();
                        }
                    });
                    subscriptions.push(inner);
                },
                error: function(e224) {
                    observer.error(e224);
                },
                complete: function() {
                    completeIfDone();
                }
            });
            function completeIfDone() {
                if (outer.closed && subscriptions.length === 0) observer.complete();
            }
            return function() {
                subscriptions.forEach(function(s2) {
                    return s2.unsubscribe();
                });
                outer.unsubscribe();
            };
        });
    };
    _proto3[SymbolObservable] = function() {
        return this;
    };
    Observable2.from = function from2(x2) {
        var C2 = typeof this === "function" ? this : Observable2;
        if (x2 == null) throw new TypeError(x2 + " is not an object");
        var method = getMethod(x2, SymbolObservable);
        if (method) {
            var observable = method.call(x2);
            if (Object(observable) !== observable) throw new TypeError(observable + " is not an object");
            if (isObservable(observable) && observable.constructor === C2) return observable;
            return new C2(function(observer) {
                return observable.subscribe(observer);
            });
        }
        if (hasSymbol("iterator")) {
            method = getMethod(x2, SymbolIterator);
            if (method) return new C2(function(observer) {
                enqueue(function() {
                    if (observer.closed) return;
                    for(var _iterator = _createForOfIteratorHelperLoose(method.call(x2)), _step; !(_step = _iterator()).done;){
                        var item = _step.value;
                        observer.next(item);
                        if (observer.closed) return;
                    }
                    observer.complete();
                });
            });
        }
        if (Array.isArray(x2)) return new C2(function(observer) {
            enqueue(function() {
                if (observer.closed) return;
                for(var i2 = 0; i2 < x2.length; ++i2){
                    observer.next(x2[i2]);
                    if (observer.closed) return;
                }
                observer.complete();
            });
        });
        throw new TypeError(x2 + " is not observable");
    };
    Observable2.of = function of() {
        for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
        var C2 = typeof this === "function" ? this : Observable2;
        return new C2(function(observer) {
            enqueue(function() {
                if (observer.closed) return;
                for(var i2 = 0; i2 < items.length; ++i2){
                    observer.next(items[i2]);
                    if (observer.closed) return;
                }
                observer.complete();
            });
        });
    };
    _createClass$1(Observable2, null, [
        {
            key: SymbolSpecies,
            get: function() {
                return this;
            }
        }
    ]);
    return Observable2;
}();
if (hasSymbols()) Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
        symbol: SymbolObservable,
        hostReportError
    },
    configurable: true
});
function symbolObservablePonyfill(root2) {
    var result;
    var Symbol2 = root2.Symbol;
    if (typeof Symbol2 === "function") {
        if (Symbol2.observable) result = Symbol2.observable;
        else {
            if (typeof Symbol2.for === "function") result = Symbol2.for("https://github.com/benlesh/symbol-observable");
            else result = Symbol2("https://github.com/benlesh/symbol-observable");
            try {
                Symbol2.observable = result;
            } catch (err) {}
        }
    } else result = "@@observable";
    return result;
}
var root;
if (typeof self !== "undefined") root = self;
else if (typeof window !== "undefined") root = window;
else if (typeof global !== "undefined") root = global;
else root = module;
symbolObservablePonyfill(root);
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) prototype[fakeObsSymbol] = function() {
    return this;
};
var toString$1 = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch(toString$1.call(val)){
        case "[object Array]":
            seen = seen || /* @__PURE__ */ new Map();
            if (seen.has(val)) return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function(child, i2) {
                copy_1[i2] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        case "[object Object]":
            seen = seen || /* @__PURE__ */ new Map();
            if (seen.has(val)) return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function(key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        default:
            return val;
    }
}
function deepFreeze(value) {
    var workSet = /* @__PURE__ */ new Set([
        value
    ]);
    workSet.forEach(function(obj) {
        if (isNonNullObject$1(obj) && shallowFreeze(obj) === obj) Object.getOwnPropertyNames(obj).forEach(function(name) {
            if (isNonNullObject$1(obj[name])) workSet.add(obj[name]);
        });
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) try {
        Object.freeze(obj);
    } catch (e225) {
        if (e225 instanceof TypeError) return null;
        throw e225;
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) deepFreeze(obj);
    return obj;
}
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function(obs) {
        return obs[method] && observersWithMethod.push(obs);
    });
    observersWithMethod.forEach(function(obs) {
        return obs[method](argument);
    });
}
function asyncMap(observable, mapFn, catchFn) {
    return new Observable(function(observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function(callback) {
                return new Promise(function(resolve) {
                    return resolve(callback());
                });
            }
        };
        function makeCallback(examiner, delegate) {
            if (examiner) return function(arg) {
                ++activeCallbackCount;
                var both = function() {
                    return examiner(arg);
                };
                promiseQueue = promiseQueue.then(both, both).then(function(result) {
                    --activeCallbackCount;
                    next && next.call(observer, result);
                    if (completed) handler.complete();
                }, function(error2) {
                    --activeCallbackCount;
                    throw error2;
                }).catch(function(caught) {
                    error && error.call(observer, caught);
                });
            };
            else return function(arg) {
                return delegate && delegate.call(observer, arg);
            };
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function() {
                completed = true;
                if (!activeCallbackCount) complete && complete.call(observer);
            }
        };
        var sub = observable.subscribe(handler);
        return function() {
            return sub.unsubscribe();
        };
    });
}
var canUseWeakMap = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol$1 = typeof Symbol === "function" && typeof Symbol.for === "function";
function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, {
            value: Observable
        });
    }
    if (canUseSymbol$1 && Symbol.species) set(Symbol.species);
    set("@@species");
    return subclass;
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = function(_super) {
    __extends$1(Concast2, _super);
    function Concast2(sources) {
        var _this = _super.call(this, function(observer) {
            _this.addObserver(observer);
            return function() {
                return _this.removeObserver(observer);
            };
        }) || this;
        _this.observers = /* @__PURE__ */ new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function(resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function(result) {
                if (_this.sub !== null) {
                    _this.latest = [
                        "next",
                        result
                    ];
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function(error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub) setTimeout(function() {
                        return sub.unsubscribe();
                    });
                    _this.sub = null;
                    _this.latest = [
                        "error",
                        error
                    ];
                    _this.reject(error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function() {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest && _this.latest[0] === "next") _this.resolve(_this.latest[1]);
                        else _this.resolve();
                        iterateObserversSafely(_this.observers, "complete");
                    } else if (isPromiseLike(value)) value.then(function(obs) {
                        return _this.sub = obs.subscribe(_this.handlers);
                    });
                    else _this.sub = value.subscribe(_this.handlers);
                }
            }
        };
        _this.cancel = function(reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function(_2) {});
        if (typeof sources === "function") sources = [
            new Observable(sources)
        ];
        if (isPromiseLike(sources)) sources.then(function(iterable) {
            return _this.start(iterable);
        }, _this.handlers.error);
        else _this.start(sources);
        return _this;
    }
    Concast2.prototype.start = function(sources) {
        if (this.sub !== void 0) return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast2.prototype.deliverLastMessage = function(observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) method.call(observer, this.latest[1]);
            if (this.sub === null && nextOrError === "next" && observer.complete) observer.complete();
        }
    };
    Concast2.prototype.addObserver = function(observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast2.prototype.removeObserver = function(observer, quietly) {
        if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) this.handlers.error(new Error("Observable cancelled prematurely"));
    };
    Concast2.prototype.cleanup = function(callback) {
        var _this = this;
        var called = false;
        var once = function() {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length > 0 || false;
}
function compact() {
    var objects = [];
    for(var _i = 0; _i < arguments.length; _i++)objects[_i] = arguments[_i];
    var result = /* @__PURE__ */ Object.create(null);
    objects.forEach(function(obj) {
        if (!obj) return;
        Object.keys(obj).forEach(function(key) {
            var value = obj[key];
            if (value !== void 0) result[key] = value;
        });
    });
    return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function(key, value2) {
        return value2 === void 0 ? undefId : value2;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}
function fromError(errorValue) {
    return new Observable(function(observer) {
        observer.error(errorValue);
    });
}
var throwServerError = function(response, result, message) {
    var error = new Error(message);
    error.name = "ServerError";
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
function validateOperation(operation) {
    var OPERATION_FIELDS = [
        "query",
        "operationName",
        "variables",
        "extensions",
        "context"
    ];
    for(var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++){
        var key = _a2[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(24);
    }
    return operation;
}
function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function(next) {
        if (typeof next === "function") context = __assign(__assign({}, context), next(context));
        else context = __assign(__assign({}, context), next);
    };
    var getContext = function() {
        return __assign({}, context);
    };
    Object.defineProperty(operation, "setContext", {
        enumerable: false,
        value: setContext
    });
    Object.defineProperty(operation, "getContext", {
        enumerable: false,
        value: getContext
    });
    return operation;
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query
    };
    if (!transformedOperation.operationName) transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
    return transformedOperation;
}
function passthrough(op, forward) {
    return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
    return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link2) {
    return link2.request.length <= 1;
}
var LinkError = function(_super) {
    __extends$1(LinkError2, _super);
    function LinkError2(message, link2) {
        var _this = _super.call(this, message) || this;
        _this.link = link2;
        return _this;
    }
    return LinkError2;
}(Error);
var ApolloLink = function() {
    function ApolloLink2(request) {
        if (request) this.request = request;
    }
    ApolloLink2.empty = function() {
        return new ApolloLink2(function() {
            return Observable.of();
        });
    };
    ApolloLink2.from = function(links) {
        if (links.length === 0) return ApolloLink2.empty();
        return links.map(toLink).reduce(function(x2, y) {
            return x2.concat(y);
        });
    };
    ApolloLink2.split = function(test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink2(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) return new ApolloLink2(function(operation) {
            return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
        });
        else return new ApolloLink2(function(operation, forward) {
            return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
        });
    };
    ApolloLink2.execute = function(link2, operation) {
        return link2.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
    };
    ApolloLink2.concat = function(first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) return new ApolloLink2(function(operation) {
            return firstLink.request(operation, function(op) {
                return nextLink.request(op) || Observable.of();
            }) || Observable.of();
        });
        else return new ApolloLink2(function(operation, forward) {
            return firstLink.request(operation, function(op) {
                return nextLink.request(op, forward) || Observable.of();
            }) || Observable.of();
        });
    };
    ApolloLink2.prototype.split = function(test, left, right) {
        return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
    };
    ApolloLink2.prototype.concat = function(next) {
        return ApolloLink2.concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
        throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(19);
    };
    ApolloLink2.prototype.onError = function(error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink2.prototype.setOnError = function(fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink2;
}();
var execute = ApolloLink.execute;
var version = "3.5.10";
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function(response) {
        return response.text().then(function(bodyText) {
            try {
                return JSON.parse(bodyText);
            } catch (err) {
                var parseError = err;
                parseError.name = "ServerParseError";
                parseError.response = response;
                parseError.statusCode = response.status;
                parseError.bodyText = bodyText;
                throw parseError;
            }
        }).then(function(result) {
            if (response.status >= 300) throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
            if (!Array.isArray(result) && !hasOwnProperty$4.call(result, "data") && !hasOwnProperty$4.call(result, "errors")) throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
                return op.operationName;
            }) : operations.operationName, "'."));
            return result;
        });
    };
}
var serializeFetchParameter = function(p2, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p2);
    } catch (e226) {
        var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e226.message)) : new InvariantError(21);
        parseError.parseError = e226;
        throw parseError;
    }
    return serialized;
};
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false
};
var defaultHeaders = {
    accept: "*/*",
    "content-type": "application/json"
};
var defaultOptions = {
    method: "POST"
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
    return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for(var _i = 2; _i < arguments.length; _i++)configs[_i - 2] = arguments[_i];
    var options = {};
    var http = {};
    configs.forEach(function(config) {
        options = __assign(__assign(__assign({}, options), config.options), {
            headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers))
        });
        if (config.credentials) options.credentials = config.credentials;
        http = __assign(__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = {
        operationName,
        variables
    };
    if (http.includeExtensions) body.extensions = extensions;
    if (http.includeQuery) body.query = printer(query, print);
    return {
        options,
        body
    };
}
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = /* @__PURE__ */ Object.create(null);
        Object.keys(Object(headers)).forEach(function(name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}
var checkFetcher = function(fetcher) {
    if (!fetcher && typeof fetch === "undefined") throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(20);
};
var createSignalIfSupported = function() {
    if (typeof AbortController === "undefined") return {
        controller: false,
        signal: false
    };
    var controller = new AbortController();
    var signal = controller.signal;
    return {
        controller,
        signal
    };
};
var selectURI = function(operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) return contextURI;
    else if (typeof fallbackURI === "function") return fallbackURI(operation);
    else return fallbackURI || "/graphql";
};
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function(key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ("query" in body) addQueryParam("query", body.query);
    if (body.operationName) addQueryParam("operationName", body.operationName);
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, "Variables map");
        } catch (parseError) {
            return {
                parseError
            };
        }
        addQueryParam("variables", serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
        } catch (parseError) {
            return {
                parseError
            };
        }
        addQueryParam("extensions", serializedExtensions);
    }
    var fragment = "", preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf("#");
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
    var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
    return {
        newURI
    };
}
var backupFetch = maybe$1(function() {
    return fetch;
});
var createHttpLink = function(linkOptions) {
    if (linkOptions === void 0) linkOptions = {};
    var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, [
        "uri",
        "fetch",
        "print",
        "includeExtensions",
        "useGETForQueries",
        "includeUnusedVariables"
    ]);
    if (__DEV__) checkFetcher(preferredFetch || backupFetch);
    var linkConfig = {
        http: {
            includeExtensions
        },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers
    };
    return new ApolloLink(function(operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
            if (name_1) clientAwarenessHeaders["apollographql-client-name"] = name_1;
            if (version2) clientAwarenessHeaders["apollographql-client-version"] = version2;
        }
        var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders
        };
        var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            visit(operation.query, {
                Variable: function(node, _key, parent) {
                    if (parent && parent.kind !== "VariableDefinition") unusedNames_1.delete(node.name.value);
                }
            });
            if (unusedNames_1.size) {
                body.variables = __assign({}, body.variables);
                unusedNames_1.forEach(function(name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
            controller = _controller;
            if (controller) options.signal = signal;
        }
        var definitionIsMutation = function(d2) {
            return d2.kind === "OperationDefinition" && d2.operation === "mutation";
        };
        if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) options.method = "GET";
        if (options.method === "GET") {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) return fromError(parseError);
            chosenURI = newURI;
        } else try {
            options.body = serializeFetchParameter(body, "Payload");
        } catch (parseError2) {
            return fromError(parseError2);
        }
        return new Observable(function(observer) {
            var currentFetch = preferredFetch || maybe$1(function() {
                return fetch;
            }) || backupFetch;
            currentFetch(chosenURI, options).then(function(response) {
                operation.setContext({
                    response
                });
                return response;
            }).then(parseAndCheckHttpResponse(operation)).then(function(result) {
                observer.next(result);
                observer.complete();
                return result;
            }).catch(function(err) {
                if (err.name === "AbortError") return;
                if (err.result && err.result.errors && err.result.data) observer.next(err.result);
                observer.error(err);
            });
            return function() {
                if (controller) controller.abort();
            };
        });
    });
};
var HttpLink = function(_super) {
    __extends$1(HttpLink2, _super);
    function HttpLink2(options) {
        if (options === void 0) options = {};
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink2;
}(ApolloLink);
var _a$2 = Object.prototype, toString = _a$2.toString, hasOwnProperty$3 = _a$2.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a2, b2) {
    try {
        return check(a2, b2);
    } finally{
        previousComparisons.clear();
    }
}
function check(a2, b2) {
    if (a2 === b2) return true;
    var aTag = toString.call(a2);
    var bTag = toString.call(b2);
    if (aTag !== bTag) return false;
    switch(aTag){
        case "[object Array]":
            if (a2.length !== b2.length) return false;
        case "[object Object]":
            if (previouslyCompared(a2, b2)) return true;
            var aKeys = definedKeys(a2);
            var bKeys = definedKeys(b2);
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length) return false;
            for(var k2 = 0; k2 < keyCount; ++k2){
                if (!hasOwnProperty$3.call(b2, aKeys[k2])) return false;
            }
            for(var k2 = 0; k2 < keyCount; ++k2){
                var key = aKeys[k2];
                if (!check(a2[key], b2[key])) return false;
            }
            return true;
        case "[object Error]":
            return a2.name === b2.name && a2.message === b2.message;
        case "[object Number]":
            if (a2 !== a2) return b2 !== b2;
        case "[object Boolean]":
        case "[object Date]":
            return +a2 === +b2;
        case "[object RegExp]":
        case "[object String]":
            return a2 == "" + b2;
        case "[object Map]":
        case "[object Set]":
            if (a2.size !== b2.size) return false;
            if (previouslyCompared(a2, b2)) return true;
            var aIterator = a2.entries();
            var isMap2 = aTag === "[object Map]";
            while(true){
                var info = aIterator.next();
                if (info.done) break;
                var _a2 = info.value, aKey = _a2[0], aValue = _a2[1];
                if (!b2.has(aKey)) return false;
                if (isMap2 && !check(aValue, b2.get(aKey))) return false;
            }
            return true;
        case "[object Uint16Array]":
        case "[object Uint8Array]":
        case "[object Uint32Array]":
        case "[object Int32Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object ArrayBuffer]":
            a2 = new Uint8Array(a2);
            b2 = new Uint8Array(b2);
        case "[object DataView]":
            var len = a2.byteLength;
            if (len === b2.byteLength) {
                while((len--) && a2[len] === b2[len]);
            }
            return len === -1;
        case "[object AsyncFunction]":
        case "[object GeneratorFunction]":
        case "[object AsyncGeneratorFunction]":
        case "[object Function]":
            var aCode = fnToStr.call(a2);
            if (aCode !== fnToStr.call(b2)) return false;
            return !endsWith(aCode, nativeCodeSuffix);
    }
    return false;
}
function definedKeys(obj) {
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a2, b2) {
    var bSet = previousComparisons.get(a2);
    if (bSet) {
        if (bSet.has(b2)) return true;
    } else previousComparisons.set(a2, bSet = /* @__PURE__ */ new Set());
    bSet.add(b2);
    return false;
}
var defaultMakeData = function() {
    return /* @__PURE__ */ Object.create(null);
};
var _a$1 = Array.prototype, forEach = _a$1.forEach, slice = _a$1.slice;
var Trie = function() {
    function Trie2(weakness, makeData) {
        if (weakness === void 0) weakness = true;
        if (makeData === void 0) makeData = defaultMakeData;
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie2.prototype.lookup = function() {
        var array = [];
        for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
        return this.lookupArray(array);
    };
    Trie2.prototype.lookupArray = function(array) {
        var node = this;
        forEach.call(array, function(key) {
            return node = node.getChildTrie(key);
        });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie2.prototype.getChildTrie = function(key) {
        var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
        var child = map.get(key);
        if (!child) map.set(key, child = new Trie2(this.weakness, this.makeData));
        return child;
    };
    return Trie2;
}();
function isObjRef(value) {
    switch(typeof value){
        case "object":
            if (value === null) break;
        case "function":
            return true;
    }
    return false;
}
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
    return function() {
        function Slot2() {
            this.id = [
                "slot",
                idCounter++,
                Date.now(),
                Math.random().toString(36).slice(2)
            ].join(":");
        }
        Slot2.prototype.hasValue = function() {
            for(var context_1 = currentContext; context_1; context_1 = context_1.parent)if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE) break;
                if (context_1 !== currentContext) currentContext.slots[this.id] = value;
                return true;
            }
            if (currentContext) currentContext.slots[this.id] = MISSING_VALUE;
            return false;
        };
        Slot2.prototype.getValue = function() {
            if (this.hasValue()) return currentContext.slots[this.id];
        };
        Slot2.prototype.withValue = function(value, callback, args, thisArg) {
            var _a2;
            var slots = (_a2 = {
                __proto__: null
            }, _a2[this.id] = value, _a2);
            var parent = currentContext;
            currentContext = {
                parent,
                slots
            };
            try {
                return callback.apply(thisArg, args);
            } finally{
                currentContext = parent;
            }
        };
        Slot2.bind = function(callback) {
            var context = currentContext;
            return function() {
                var saved = currentContext;
                try {
                    currentContext = context;
                    return callback.apply(this, arguments);
                } finally{
                    currentContext = saved;
                }
            };
        };
        Slot2.noContext = function(callback, args, thisArg) {
            if (currentContext) {
                var saved = currentContext;
                try {
                    currentContext = null;
                    return callback.apply(thisArg, args);
                } finally{
                    currentContext = saved;
                }
            } else return callback.apply(thisArg, args);
        };
        return Slot2;
    }();
};
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
    var Slot2 = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot2,
            enumerable: false,
            writable: false,
            configurable: false
        });
    } finally{
        return Slot2;
    }
}();
Slot.bind;
Slot.noContext;
function defaultDispose() {}
var Cache = function() {
    function Cache2(max, dispose) {
        if (max === void 0) max = Infinity;
        if (dispose === void 0) dispose = defaultDispose;
        this.max = max;
        this.dispose = dispose;
        this.map = /* @__PURE__ */ new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache2.prototype.has = function(key) {
        return this.map.has(key);
    };
    Cache2.prototype.get = function(key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache2.prototype.getNode = function(key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) newer.older = older;
            if (older) older.newer = newer;
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) this.oldest = newer;
        }
        return node;
    };
    Cache2.prototype.set = function(key, value) {
        var node = this.getNode(key);
        if (node) return node.value = value;
        node = {
            key,
            value,
            newer: null,
            older: this.newest
        };
        if (this.newest) this.newest.newer = node;
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache2.prototype.clean = function() {
        while(this.oldest && this.map.size > this.max)this.delete(this.oldest.key);
    };
    Cache2.prototype.delete = function(key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) this.newest = node.older;
            if (node === this.oldest) this.oldest = node.newer;
            if (node.newer) node.newer.older = node.older;
            if (node.older) node.older.newer = node.newer;
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache2;
}();
var parentEntrySlot = new Slot();
var _a;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var toArray = (_a = Array.from, _a === void 0 ? function(collection) {
    var array = [];
    collection.forEach(function(item) {
        return array.push(item);
    });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
    if (!condition) throw new Error(optionalMessage || "assertion failure");
}
function valueIs(a2, b2) {
    var len = a2.length;
    return len > 0 && len === b2.length && a2[len - 1] === b2[len - 1];
}
function valueGet(value) {
    switch(value.length){
        case 0:
            throw new Error("unknown value");
        case 1:
            return value[0];
        case 2:
            throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = function() {
    function Entry2(fn) {
        this.fn = fn;
        this.parents = /* @__PURE__ */ new Set();
        this.childValues = /* @__PURE__ */ new Map();
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry2.count;
    }
    Entry2.prototype.peek = function() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    Entry2.prototype.recompute = function(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
    };
    Entry2.prototype.setDirty = function() {
        if (this.dirty) return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        maybeUnsubscribe(this);
    };
    Entry2.prototype.dispose = function() {
        var _this = this;
        this.setDirty();
        forgetChildren(this);
        eachParent(this, function(parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry2.prototype.forget = function() {
        this.dispose();
    };
    Entry2.prototype.dependOn = function(dep2) {
        dep2.add(this);
        if (!this.deps) this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
        this.deps.add(dep2);
    };
    Entry2.prototype.forgetDeps = function() {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function(dep2) {
                return dep2.delete(_this);
            });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry2.count = 0;
    return Entry2;
}();
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) parent.childValues.set(child, []);
        if (mightBeDirty(child)) reportDirtyChild(parent, child);
        else reportCleanChild(parent, child);
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    parentEntrySlot.withValue(entry, recomputeNewValue, [
        entry,
        args
    ]);
    if (maybeSubscribe(entry, args)) setClean(entry);
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    entry.value.length = 0;
    try {
        entry.value[0] = entry.fn.apply(null, args);
    } catch (e227) {
        entry.value[1] = e227;
    }
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) return;
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for(var i2 = 0; i2 < parentCount; ++i2)callback(parents[i2], child);
    }
}
function reportDirtyChild(parent, child) {
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
    else if (parent.dirtyChildren.has(child)) return;
    parent.dirtyChildren.add(child);
    if (parentWasClean) reportDirty(parent);
}
function reportCleanChild(parent, child) {
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) parent.childValues.set(child, valueCopy(child.value));
    else if (!valueIs(childValue, child.value)) parent.setDirty();
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) return;
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) emptySetPool.push(dc);
            parent.dirtyChildren = null;
        }
    }
}
function forgetChildren(parent) {
    if (parent.childValues.size > 0) parent.childValues.forEach(function(_value, child) {
        forgetChild(parent, child);
    });
    parent.forgetDeps();
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") try {
        maybeUnsubscribe(entry);
        entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e2) {
        entry.setDirty();
        return false;
    }
    return true;
}
var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true
};
function dep(options) {
    var depsByKey = /* @__PURE__ */ new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) depsByKey.set(key, dep_1 = /* @__PURE__ */ new Set());
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep2 = depsByKey.get(key);
        if (dep2) {
            var m_1 = entryMethodName && hasOwnProperty$2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
            toArray(dep2).forEach(function(entry) {
                return entry[m_1]();
            });
            depsByKey.delete(key);
            maybeUnsubscribe(dep2);
        }
    };
    return depend;
}
function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new Trie(typeof WeakMap === "function");
    return function() {
        return keyTrie.lookupArray(arguments);
    };
}
makeDefaultMakeCacheKeyFunction();
var caches = /* @__PURE__ */ new Set();
function wrap(originalFunction, options) {
    if (options === void 0) options = /* @__PURE__ */ Object.create(null);
    var cache2 = new Cache(options.max || Math.pow(2, 16), function(entry) {
        return entry.dispose();
    });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
    var optimistic = function() {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) return originalFunction.apply(null, arguments);
        var entry = cache2.get(key);
        if (!entry) {
            cache2.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            entry.forget = function() {
                return cache2.delete(key);
            };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        cache2.set(key, entry);
        caches.add(cache2);
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function(cache3) {
                return cache3.clean();
            });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function() {
            return cache2["map"].size;
        },
        configurable: false,
        enumerable: false
    });
    function dirtyKey(key) {
        var entry = cache2.get(key);
        if (entry) entry.setDirty();
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache2.get(key);
        if (entry) return entry.peek();
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache2.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey2() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}
var ApolloCache = function() {
    function ApolloCache2() {
        this.getFragmentDoc = wrap(getFragmentQueryDocument);
    }
    ApolloCache2.prototype.batch = function(options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function() {
            return updateResult = options.update(_this);
        }, optimisticId);
        return updateResult;
    };
    ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache2.prototype.transformDocument = function(document2) {
        return document2;
    };
    ApolloCache2.prototype.identify = function(object) {
        return;
    };
    ApolloCache2.prototype.gc = function() {
        return [];
    };
    ApolloCache2.prototype.modify = function(options) {
        return false;
    };
    ApolloCache2.prototype.transformForLink = function(document2) {
        return document2;
    };
    ApolloCache2.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = !!options.optimistic;
        return this.read(__assign(__assign({}, options), {
            rootId: options.id || "ROOT_QUERY",
            optimistic
        }));
    };
    ApolloCache2.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = !!options.optimistic;
        return this.read(__assign(__assign({}, options), {
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            rootId: options.id,
            optimistic
        }));
    };
    ApolloCache2.prototype.writeQuery = function(_a2) {
        var id = _a2.id, data = _a2.data, options = __rest(_a2, [
            "id",
            "data"
        ]);
        return this.write(Object.assign(options, {
            dataId: id || "ROOT_QUERY",
            result: data
        }));
    };
    ApolloCache2.prototype.writeFragment = function(_a2) {
        var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, [
            "id",
            "data",
            "fragment",
            "fragmentName"
        ]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data
        }));
    };
    ApolloCache2.prototype.updateQuery = function(options, update) {
        return this.batch({
            update: function(cache2) {
                var value = cache2.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null) return value;
                cache2.writeQuery(__assign(__assign({}, options), {
                    data
                }));
                return data;
            }
        });
    };
    ApolloCache2.prototype.updateFragment = function(options, update) {
        return this.batch({
            update: function(cache2) {
                var value = cache2.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null) return value;
                cache2.writeFragment(__assign(__assign({}, options), {
                    data
                }));
                return data;
            }
        });
    };
    return ApolloCache2;
}();
var MissingFieldError = function() {
    function MissingFieldError2(message, path, query, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
    }
    return MissingFieldError2;
}();
var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a2, context) {
    var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
    if (typeof __typename === "string") {
        if (context) context.keyObject = id !== void 0 ? {
            id
        } : _id !== void 0 ? {
            _id
        } : void 0;
        if (id === void 0) id = _id;
        if (id !== void 0) return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false
};
function normalizeConfig(config) {
    return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (isNonNullObject$1(result)) return isArray(result) ? result.every(function(item) {
        return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
        if (isField(field) && shouldInclude(field, variables)) {
            var key = resultKeyNameFromField(field);
            return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
        }
        return true;
    });
    return false;
}
function storeValueIsStoreObject(value) {
    return isNonNullObject$1(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
    return new DeepMerger();
}
var isArray = function(a2) {
    return Array.isArray(a2);
};
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
    return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
    function EntityStore2(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = /* @__PURE__ */ Object.create(null);
        this.rootIds = /* @__PURE__ */ Object.create(null);
        this.refs = /* @__PURE__ */ Object.create(null);
        this.getFieldValue = function(objectOrReference, storeFieldName) {
            return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
        };
        this.canRead = function(objOrRef) {
            return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
        };
        this.toReference = function(objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") return makeReference(objOrIdOrRef);
            if (isReference(objOrIdOrRef)) return objOrIdOrRef;
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = makeReference(id);
                if (mergeIntoStore) _this.merge(id, objOrIdOrRef);
                return ref;
            }
        };
    }
    EntityStore2.prototype.toObject = function() {
        return __assign({}, this.data);
    };
    EntityStore2.prototype.has = function(dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore2.prototype.get = function(dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) return storeObject[fieldName];
        }
        if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) return this.policies.rootTypenamesById[dataId];
        if (this instanceof Layer) return this.parent.get(dataId, fieldName);
    };
    EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
        if (dependOnExistence) this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) return this.data[dataId];
        if (this instanceof Layer) return this.parent.lookup(dataId, dependOnExistence);
        if (this.policies.rootTypenamesById[dataId]) return /* @__PURE__ */ Object.create(null);
    };
    EntityStore2.prototype.merge = function(older, newer) {
        var _this = this;
        var dataId;
        if (isReference(older)) older = older.__ref;
        if (isReference(newer)) newer = newer.__ref;
        var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
        var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
        if (!incoming) return;
        __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
        var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
                if (!existing) fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function(storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) fieldsToDirty_1[fieldName] = 1;
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) delete merged[storeFieldName];
                    }
                });
                if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) delete fieldsToDirty_1.__typename;
                Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
                    return _this.group.dirty(dataId, fieldName);
                });
            }
        }
    };
    EntityStore2.prototype.modify = function(dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = /* @__PURE__ */ Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE,
                INVALIDATE,
                isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function(fieldNameOrOptions, from2) {
                    return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                        fieldName: fieldNameOrOptions,
                        from: from2 || makeReference(dataId)
                    } : fieldNameOrOptions, {
                        store: _this
                    });
                }
            };
            Object.keys(storeObject).forEach(function(storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0) return;
                var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), {
                        fieldName,
                        storeFieldName,
                        storage: _this.getStorage(dataId, storeFieldName)
                    }));
                    if (newValue === INVALIDATE) _this.group.dirty(dataId, storeFieldName);
                    else {
                        if (newValue === DELETE) newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) allDeleted_1 = false;
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) this.data[dataId] = void 0;
                    else delete this.data[dataId];
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore2.prototype.delete = function(dataId, fieldName, args) {
        var _a2;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
                typename,
                fieldName,
                args
            }) : fieldName;
            return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
        }
        return false;
    };
    EntityStore2.prototype.evict = function(options, limit) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) evicted = this.delete(options.id, options.fieldName, options.args);
            if (this instanceof Layer && this !== limit) evicted = this.parent.evict(options, limit) || evicted;
            if (options.fieldName || evicted) this.group.dirty(options.id, options.fieldName || "__exists");
        }
        return evicted;
    };
    EntityStore2.prototype.clear = function() {
        this.replace(null);
    };
    EntityStore2.prototype.extract = function() {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function(id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) extraRootIds.push(id);
        });
        if (extraRootIds.length) obj.__META = {
            extraRootIds: extraRootIds.sort()
        };
        return obj;
    };
    EntityStore2.prototype.replace = function(newData) {
        var _this = this;
        Object.keys(this.data).forEach(function(dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) _this.delete(dataId);
        });
        if (newData) {
            var __META = newData.__META, rest_1 = __rest(newData, [
                "__META"
            ]);
            Object.keys(rest_1).forEach(function(dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) __META.extraRootIds.forEach(this.retain, this);
        }
    };
    EntityStore2.prototype.retain = function(rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore2.prototype.release = function(rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count) delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore2.prototype.getRootIdSet = function(ids) {
        if (ids === void 0) ids = /* @__PURE__ */ new Set();
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) this.parent.getRootIdSet(ids);
        else Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        return ids;
    };
    EntityStore2.prototype.gc = function() {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function(id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while(root_1 instanceof Layer)root_1 = root_1.parent;
            idsToRemove.forEach(function(id) {
                return root_1.delete(id);
            });
        }
        return idsToRemove;
    };
    EntityStore2.prototype.findChildRefIds = function(dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
            var root2 = this.data[dataId];
            if (!root2) return found_1;
            var workSet_1 = /* @__PURE__ */ new Set([
                root2
            ]);
            workSet_1.forEach(function(obj) {
                if (isReference(obj)) found_1[obj.__ref] = true;
                if (isNonNullObject$1(obj)) Object.keys(obj).forEach(function(key) {
                    var child = obj[key];
                    if (isNonNullObject$1(child)) workSet_1.add(child);
                });
            });
        }
        return this.refs[dataId];
    };
    EntityStore2.prototype.makeCacheKey = function() {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore2;
}();
var CacheGroup = function() {
    function CacheGroup2(caching, parent) {
        if (parent === void 0) parent = null;
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup2.prototype.resetCaching = function() {
        this.d = this.caching ? dep() : null;
        this.keyMaker = new Trie(canUseWeakMap);
    };
    CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) this.d(makeDepKey(dataId, fieldName));
            if (this.parent) this.parent.depend(dataId, storeFieldName);
        }
    };
    CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
        if (this.d) this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    };
    return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) store.group.depend(entityId, "__exists");
}
(function(EntityStore2) {
    var Root = function(_super) {
        __extends$1(Root2, _super);
        function Root2(_a2) {
            var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new Trie(canUseWeakMap);
            if (seed) _this.replace(seed);
            return _this;
        }
        Root2.prototype.addLayer = function(layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root2.prototype.removeLayer = function() {
            return this;
        };
        Root2.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root2;
    }(EntityStore2);
    EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
    __extends$1(Layer2, _super);
    function Layer2(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer2.prototype.addLayer = function(layerId, replay) {
        return new Layer2(layerId, this, replay, this.group);
    };
    Layer2.prototype.removeLayer = function(layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) Object.keys(this.data).forEach(function(dataId) {
                var ownStoreObject = _this.data[dataId];
                var parentStoreObject = parent["lookup"](dataId);
                if (!parentStoreObject) _this.delete(dataId);
                else if (!ownStoreObject) {
                    _this.group.dirty(dataId, "__exists");
                    Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                        _this.group.dirty(dataId, storeFieldName);
                    });
                } else if (ownStoreObject !== parentStoreObject) Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                    if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) _this.group.dirty(dataId, storeFieldName);
                });
            });
            return parent;
        }
        if (parent === this.parent) return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer2.prototype.toObject = function() {
        return __assign(__assign({}, this.parent.toObject()), this.data);
    };
    Layer2.prototype.findChildRefIds = function(dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer2.prototype.getStorage = function() {
        var p2 = this.parent;
        while(p2.parent)p2 = p2.parent;
        return p2.getStorage.apply(p2, arguments);
    };
    return Layer2;
}(EntityStore);
var Stump = function(_super) {
    __extends$1(Stump2, _super);
    function Stump2(root2) {
        return _super.call(this, "EntityStore.Stump", root2, function() {}, new CacheGroup(root2.group.caching, root2.group)) || this;
    }
    Stump2.prototype.removeLayer = function() {
        return this;
    };
    Stump2.prototype.merge = function() {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
    if (isNonNullObject$1(value)) return isArray(value) ? value.slice(0) : __assign({
        __proto__: Object.getPrototypeOf(value)
    }, value);
    return value;
}
var ObjectCanon = function() {
    function ObjectCanon2() {
        this.known = new (canUseWeakSet ? WeakSet : Set)();
        this.pool = new Trie(canUseWeakMap);
        this.passes = /* @__PURE__ */ new WeakMap();
        this.keysByJSON = /* @__PURE__ */ new Map();
        this.empty = this.admit({});
    }
    ObjectCanon2.prototype.isKnown = function(value) {
        return isNonNullObject$1(value) && this.known.has(value);
    };
    ObjectCanon2.prototype.pass = function(value) {
        if (isNonNullObject$1(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon2.prototype.admit = function(value) {
        var _this = this;
        if (isNonNullObject$1(value)) {
            var original = this.passes.get(value);
            if (original) return original;
            var proto = Object.getPrototypeOf(value);
            switch(proto){
                case Array.prototype:
                    if (this.known.has(value)) return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) Object.freeze(array);
                    }
                    return node.array;
                case null:
                case Object.prototype:
                    if (this.known.has(value)) return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [
                        proto_1
                    ];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function(key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function(key, i2) {
                            obj_1[key] = array_1[firstValueIndex_1 + i2];
                        });
                        if (__DEV__) Object.freeze(obj_1);
                    }
                    return node.object;
            }
        }
        return value;
    };
    ObjectCanon2.prototype.sortedKeys = function(obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) this.keysByJSON.set(json, node.keys = {
                sorted: keys,
                json
            });
        }
        return node.keys;
    };
    return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
    if (isNonNullObject$1(value)) {
        if (stringifyCanon === void 0) resetCanonicalStringify();
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) stringifyCache.set(canonical, json = JSON.stringify(canonical));
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon();
    stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults
    ];
}
var StoreReader = function() {
    function StoreReader2(config) {
        var _this = this;
        this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
        this.config = compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config)
        });
        this.canon = config.canon || new ObjectCanon();
        this.executeSelectionSet = wrap(function(options) {
            var _a2;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
            if (other) {
                if (canonizeResults) return __assign(__assign({}, other), {
                    result: _this.canon.admit(other.result)
                });
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
            }
        });
        this.executeSubSelectedArray = wrap(function(options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(_a2) {
                var field = _a2.field, array = _a2.array, context = _a2.context;
                if (supportsResultCaching(context.store)) return context.store.makeCacheKey(field, array, context.varString);
            }
        });
    }
    StoreReader2.prototype.resetCanon = function() {
        this.canon = new ObjectCanon();
    };
    StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
        var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
        var rootRef = makeReference(rootId);
        var merger = new DeepMerger();
        var execResult = this.executeSelectionSet({
            selectionSet: getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store,
                query,
                policies,
                variables,
                varString: canonicalStringify(variables),
                canonizeResults,
                fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
                merge: function(a2, b2) {
                    return merger.merge(a2, b2);
                }
            }
        });
        var missing;
        if (execResult.missing) {
            missing = [
                new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
            ];
            if (!returnPartialData) throw missing[0];
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing
        };
    };
    StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) return true;
        }
        return false;
    };
    StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
        var _this = this;
        var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
        if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
        };
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var result = {};
        var missing;
        if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) result = {
            __typename: typename
        };
        function handleMissing(result2, resultName) {
            var _a3;
            if (result2.missing) missing = context.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
            return result2.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function(selection) {
            var _a3, _b;
            if (!shouldInclude(selection, variables)) return;
            if (isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference
                }, context);
                var resultName = resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!addTypenameToDocument.added(selection)) missing = context.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
                } else if (isArray(fieldValue)) fieldValue = handleMissing(_this.executeSubSelectedArray({
                    field: selection,
                    array: fieldValue,
                    enclosingRef,
                    context
                }), resultName);
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) fieldValue = _this.canon.pass(fieldValue);
                } else if (fieldValue != null) fieldValue = handleMissing(_this.executeSelectionSet({
                    selectionSet: selection.selectionSet,
                    objectOrReference: fieldValue,
                    enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
                    context
                }), resultName);
                if (fieldValue !== void 0) result = context.merge(result, (_b = {}, _b[resultName] = fieldValue, _b));
            } else {
                var fragment = getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) fragment.selectionSet.selections.forEach(workSet.add, workSet);
            }
        });
        var finalResult = {
            result,
            missing
        };
        var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
        if (frozen.result) this.knownResults.set(frozen.result, selectionSet);
        return frozen;
    };
    StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
        var _this = this;
        var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
        var missing;
        function handleMissing(childResult, i2) {
            var _a3;
            if (childResult.missing) missing = context.merge(missing, (_a3 = {}, _a3[i2] = childResult.missing, _a3));
            return childResult.result;
        }
        if (field.selectionSet) array = array.filter(context.store.canRead);
        array = array.map(function(item, i2) {
            if (item === null) return null;
            if (isArray(item)) return handleMissing(_this.executeSubSelectedArray({
                field,
                array: item,
                enclosingRef,
                context
            }), i2);
            if (field.selectionSet) return handleMissing(_this.executeSelectionSet({
                selectionSet: field.selectionSet,
                objectOrReference: item,
                enclosingRef: isReference(item) ? item : enclosingRef,
                context
            }), i2);
            if (__DEV__) assertSelectionSetForIdValue(context.store, field, item);
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing
        };
    };
    return StoreReader2;
}();
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function(_2, value) {
            if (typeof value === "string") throw value;
            return value;
        });
    } catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = /* @__PURE__ */ new Set([
            fieldValue
        ]);
        workSet_1.forEach(function(value) {
            if (isNonNullObject$1(value)) {
                __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant(!isReference(value), 5);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache2) {
    var info = cacheInfoMap.get(cache2);
    if (!info) cacheInfoMap.set(cache2, info = {
        vars: /* @__PURE__ */ new Set(),
        dep: dep()
    });
    return info;
}
function forgetCache(cache2) {
    getCacheInfo(cache2).vars.forEach(function(rv) {
        return rv.forgetCache(cache2);
    });
}
function recallCache(cache2) {
    getCacheInfo(cache2).vars.forEach(function(rv) {
        return rv.attachCache(cache2);
    });
}
function makeVar(value) {
    var caches2 = /* @__PURE__ */ new Set();
    var listeners = /* @__PURE__ */ new Set();
    var rv = function(newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches2.forEach(function(cache3) {
                    getCacheInfo(cache3).dep.dirty(rv);
                    broadcast(cache3);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function(listener) {
                    return listener(value);
                });
            }
        } else {
            var cache2 = cacheSlot.getValue();
            if (cache2) {
                attach(cache2);
                getCacheInfo(cache2).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function(listener) {
        listeners.add(listener);
        return function() {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function(cache2) {
        caches2.add(cache2);
        getCacheInfo(cache2).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function(cache2) {
        return caches2.delete(cache2);
    };
    return rv;
}
function broadcast(cache2) {
    if (cache2.broadcastWatches) cache2.broadcastWatches();
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
        var extract = function(from2, key) {
            return context.readField(key, from2);
        };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            __DEV__ ? invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
        var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
        var collected = collectSpecifierPaths(specifier, function(keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d2 = field.directives.find(function(d3) {
                        return d3.name.value === directiveName_1;
                    });
                    var directiveArgs = d2 && argumentsObjectFromField(d2, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) return extractKeyPath(args, keyPath);
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") fieldName += ":" + suffix;
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new DeepMerger();
    return getSpecifierPaths(specifier).reduce(function(collected, path) {
        var _a2;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for(var i2 = path.length - 1; i2 >= 0; --i2)toMerge = (_a2 = {}, _a2[path[i2]] = toMerge, _a2);
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function(s2, i2) {
            if (isArray(s2)) {
                getSpecifierPaths(s2).forEach(function(p2) {
                    return paths_1.push(currentPath_1.concat(p2));
                });
                currentPath_1.length = 0;
            } else {
                currentPath_1.push(s2);
                if (!isArray(spec[i2 + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize$1(path.reduce(function reducer(obj, key) {
        return isArray(obj) ? obj.map(function(child) {
            return reducer(child, key);
        }) : obj && extract(obj, key);
    }, object));
}
function normalize$1(value) {
    if (isNonNullObject$1(value)) {
        if (isArray(value)) return value.map(normalize$1);
        return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
            return extractKeyPath(value, path);
        });
    }
    return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
    return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
    return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
    var mergeObjects = _a2.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_2, incoming) {
    return incoming;
};
var Policies = function() {
    function Policies2(config) {
        this.config = config;
        this.typePolicies = /* @__PURE__ */ Object.create(null);
        this.toBeAdded = /* @__PURE__ */ Object.create(null);
        this.supertypeMap = /* @__PURE__ */ new Map();
        this.fuzzySubtypes = /* @__PURE__ */ new Map();
        this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
        this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
        this.usingPossibleTypes = false;
        this.config = __assign({
            dataIdFromObject: defaultDataIdFromObject
        }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) this.addPossibleTypes(config.possibleTypes);
        if (config.typePolicies) this.addTypePolicies(config.typePolicies);
    }
    Policies2.prototype.identify = function(object, partialContext) {
        var _a2;
        var policies = this;
        var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) return [
            "ROOT_QUERY"
        ];
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = __assign(__assign({}, partialContext), {
            typename,
            storeObject,
            readField: partialContext && partialContext.readField || function() {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables
                });
            }
        });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while(keyFn){
            var specifierOrId = keyFn(object, context);
            if (isArray(specifierOrId)) keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [
            id,
            context.keyObject
        ] : [
            id
        ];
    };
    Policies2.prototype.addTypePolicies = function(typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function(typename) {
            var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, [
                "queryType",
                "mutationType",
                "subscriptionType"
            ]);
            if (queryType) _this.setRootTypename("Query", typename);
            if (mutationType) _this.setRootTypename("Mutation", typename);
            if (subscriptionType) _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) _this.toBeAdded[typename].push(incoming);
            else _this.toBeAdded[typename] = [
                incoming
            ];
        });
    };
    Policies2.prototype.updateTypePolicy = function(typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing2, merge3) {
            existing2.merge = typeof merge3 === "function" ? merge3 : merge3 === true ? mergeTrueFn : merge3 === false ? mergeFalseFn : existing2.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
        if (fields) Object.keys(fields).forEach(function(fieldName) {
            var existing2 = _this.getFieldPolicy(typename, fieldName, true);
            var incoming2 = fields[fieldName];
            if (typeof incoming2 === "function") existing2.read = incoming2;
            else {
                var keyArgs = incoming2.keyArgs, read = incoming2.read, merge3 = incoming2.merge;
                existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
                if (typeof read === "function") existing2.read = read;
                setMerge(existing2, merge3);
            }
            if (existing2.read && existing2.merge) existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        });
    };
    Policies2.prototype.setRootTypename = function(which, typename) {
        if (typename === void 0) typename = which;
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant(!old || old === which, 3);
            if (old) delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies2.prototype.addPossibleTypes = function(possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function(supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function(subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
            });
        });
    };
    Policies2.prototype.getTypePolicy = function(typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
            policy_1.fields = /* @__PURE__ */ Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) supertypes.forEach(function(supertype) {
                var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, [
                    "fields"
                ]);
                Object.assign(policy_1, rest);
                Object.assign(policy_1.fields, fields);
            });
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) inbox.splice(0).forEach(function(policy) {
            _this.updateTypePolicy(typename, policy);
        });
        return this.typePolicies[typename];
    };
    Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
        }
    };
    Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
        return supertypeSet;
    };
    Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition) return true;
        if (!typename) return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype) return true;
        if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [
                typenameSupertypeSet
            ];
            var maybeEnqueue_1 = function(subtype) {
                var supertypeSet2 = _this.getSupertypeSet(subtype, false);
                if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) workQueue_1.push(supertypeSet2);
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for(var i2 = 0; i2 < workQueue_1.length; ++i2){
                var supertypeSet = workQueue_1[i2];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) __DEV__ && invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes && i2 === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) maybeEnqueue_1(fuzzyString);
                    });
                }
            }
        }
        return false;
    };
    Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies2.prototype.getStoreFieldName = function(fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename,
                fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while(keyFn){
                var specifierOrString = keyFn(args, context);
                if (isArray(specifierOrString)) keyFn = keyArgsFnFromSpecifier(specifierOrString);
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        if (storeFieldName === false) return fieldName;
        return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies2.prototype.readField = function(options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference) return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField) return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename) options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [
                existing,
                readOptions
            ]);
        }
        return existing;
    };
    Policies2.prototype.getReadFunction = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge3 = policy && policy.merge;
        if (!merge3 && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge3 = policy && policy.merge;
        }
        return merge3;
    };
    Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
        var field = _a2.field, typename = _a2.typename, merge3 = _a2.merge;
        if (merge3 === mergeTrueFn) return makeMergeObjectsFunction(context.store)(existing, incoming);
        if (merge3 === mergeFalseFn) return incoming;
        if (context.overwrite) existing = void 0;
        return merge3(existing, incoming, makeFieldFunctionOptions(this, void 0, {
            typename,
            fieldName: field.name.value,
            field,
            variables: context.variables
        }, context, storage || /* @__PURE__ */ Object.create(null)));
    };
    return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName,
        storeFieldName,
        variables,
        isReference,
        toReference,
        storage,
        cache: policies.cache,
        canRead,
        readField: function() {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store)
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") options = {
        fieldName: fieldNameOrOptions,
        from: argc > 1 ? from2 : objectOrReference
    };
    else {
        options = __assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) options.from = objectOrReference;
    }
    if (__DEV__ && options.from === void 0) __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
    if (options.variables === void 0) options.variables = variables;
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (isArray(existing) || isArray(incoming)) throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
        if (isNonNullObject$1(existing) && isNonNullObject$1(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) return incoming;
            if (isReference(existing) && storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) && isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) return __assign(__assign({}, existing), incoming);
        }
        return incoming;
    };
}
function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), {
        clientOnly,
        deferred
    }));
    return flavored;
}
var StoreWriter = function() {
    function StoreWriter2(cache2, reader) {
        this.cache = cache2;
        this.reader = reader;
    }
    StoreWriter2.prototype.writeToStore = function(store, _a2) {
        var _this = this;
        var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
        var operationDefinition = getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
        var context = {
            store,
            written: /* @__PURE__ */ Object.create(null),
            merge: function(existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables,
            varString: canonicalStringify(variables),
            fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
            overwrite: !!overwrite,
            incomingById: /* @__PURE__ */ new Map(),
            clientOnly: false,
            deferred: false,
            flavors: /* @__PURE__ */ new Map()
        };
        var ref = this.processSelectionSet({
            result: result || /* @__PURE__ */ Object.create(null),
            dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: {
                map: /* @__PURE__ */ new Map()
            },
            context
        });
        if (!isReference(ref)) throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new InvariantError(6);
        context.incomingById.forEach(function(_a3, dataId2) {
            var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
            var entityRef = makeReference(dataId2);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (isReference(applied)) return;
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
                fieldNodeSet.forEach(function(field) {
                    if (field.selectionSet) fieldsWithSelectionSets_1[field.name.value] = true;
                });
                var hasSelectionSet_1 = function(storeFieldName) {
                    return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function(storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function(storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                });
            }
            store.merge(dataId2, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter2.prototype.processSelectionSet = function(_a2) {
        var _this = this;
        var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
        var policies = this.cache.policies;
        var incoming = /* @__PURE__ */ Object.create(null);
        var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
        if (typeof typename === "string") incoming.__typename = typename;
        var readField = function() {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (isReference(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(__assign(__assign({}, options), {
                        from: info.storeObject
                    }), context);
                    if (result_1 !== void 0) return result_1;
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = /* @__PURE__ */ new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
            var _a3;
            var resultFieldKey = resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename,
                    fieldName: field.name.value,
                    field,
                    variables: context2.variables
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
                var childTypename = void 0;
                if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) childTypename = readField("__typename", incomingValue);
                var merge3 = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge3) childTree.info = {
                    field,
                    typename,
                    merge: merge3
                };
                else maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
            } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) __DEV__ && invariant.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1e3));
        });
        try {
            var _b = policies.identify(result, {
                typename,
                selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) incoming = context.merge(incoming, keyObject);
        } catch (e228) {
            if (!dataId) throw e228;
        }
        if (typeof dataId === "string") {
            var dataRef = makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0) return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) return dataRef;
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function(field) {
                    return previous_1.fieldNodeSet.add(field);
                });
            } else context.incomingById.set(dataId, {
                storeObject: incoming,
                mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                fieldNodeSet
            });
            return dataRef;
        }
        return incoming;
    };
    StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) return __DEV__ ? cloneDeep(value) : value;
        if (isArray(value)) return value.map(function(item, i2) {
            var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i2));
            maybeRecycleChildMergeTree(mergeTree, i2);
            return value2;
        });
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context,
            mergeTree
        });
    };
    StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
        if (typename === void 0) typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
        var fieldMap = /* @__PURE__ */ new Map();
        var policies = this.cache.policies;
        var limitingTrie = new Trie(false);
        (function flatten(selectionSet2, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited) return;
            visitedNode.visited = true;
            selectionSet2.selections.forEach(function(selection) {
                if (!shouldInclude(selection, context.variables)) return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) selection.directives.forEach(function(dir) {
                    var name = dir.name.value;
                    if (name === "client") clientOnly = true;
                    if (name === "defer") {
                        var args = argumentsObjectFromField(dir, context.variables);
                        if (!args || args.if !== false) deferred = true;
                    }
                });
                if (isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                } else {
                    var fragment = getFragmentFromSelection(selection, context.fragmentMap);
                    if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
        var _a2;
        var _this = this;
        if (mergeTree.map.size && !isReference(incoming)) {
            var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) getStorageArgs = [
                isReference(e_1) ? e_1.__ref : e_1
            ];
            var changedFields_1;
            var getValue_1 = function(from2, name) {
                return isArray(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
            };
            mergeTree.map.forEach(function(childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (iVal === void 0) return;
                if (getStorageArgs) getStorageArgs.push(storeFieldName);
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) invariant(getStorageArgs.pop() === storeFieldName);
            });
            if (changedFields_1) {
                incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
                changedFields_1.forEach(function(value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
        return incoming;
    };
    return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
    var map = _a2.map;
    if (!map.has(name)) map.set(name, emptyMergeTreePool.pop() || {
        map: /* @__PURE__ */ new Map()
    });
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right)) return left;
    if (!left || mergeTreeIsEmpty(left)) return right;
    var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
    var merged = {
        info,
        map
    };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function(leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function(key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
    var map = _a2.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function(objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing) return;
    var incoming = getChild(incomingObj);
    if (!incoming) return;
    if (isReference(existing)) return;
    if (equal(existing, incoming)) return;
    if (Object.keys(existing).every(function(key) {
        return store.getFieldValue(incoming, key) !== void 0;
    })) return;
    var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName)) return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!isArray(existing) && !isArray(incoming)) [
        existing,
        incoming
    ].forEach(function(child) {
        var typename = store.getFieldValue(child, "__typename");
        if (typeof typename === "string" && !childTypenames.includes(typename)) childTypenames.push(typename);
    });
    __DEV__ && invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
var InMemoryCache = function(_super) {
    __extends$1(InMemoryCache2, _super);
    function InMemoryCache2(config) {
        if (config === void 0) config = {};
        var _this = _super.call(this) || this;
        _this.watches = /* @__PURE__ */ new Set();
        _this.typenameDocumentCache = /* @__PURE__ */ new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies
        });
        _this.init();
        return _this;
    }
    InMemoryCache2.prototype.init = function() {
        var rootStore = this.data = new EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
        }));
        this.maybeBroadcastWatch = wrap(function(c2, options) {
            return _this.broadcastWatch(c2, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(c2) {
                var store = c2.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c2.optimistic, rootId = c2.rootId, variables = c2.variables;
                    return store.makeCacheKey(c2.query, c2.callback, canonicalStringify({
                        optimistic,
                        rootId,
                        variables
                    }));
                }
            }
        });
        /* @__PURE__ */ new Set([
            this.data.group,
            this.optimisticData.group
        ]).forEach(function(group) {
            return group.resetCaching();
        });
    };
    InMemoryCache2.prototype.restore = function(data) {
        this.init();
        if (data) this.data.replace(data);
        return this;
    };
    InMemoryCache2.prototype.extract = function(optimistic) {
        if (optimistic === void 0) optimistic = false;
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache2.prototype.read = function(options) {
        var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
        try {
            return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
                store: options.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData
            })).result || null;
        } catch (e229) {
            if (e229 instanceof MissingFieldError) return null;
            throw e229;
        }
    };
    InMemoryCache2.prototype.write = function(options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache2.prototype.modify = function(options) {
        if (hasOwn.call(options, "id") && !options.id) return false;
        var store = options.optimistic ? this.optimisticData : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache2.prototype.diff = function(options) {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
            store: options.optimistic ? this.optimisticData : this.data,
            rootId: options.id || "ROOT_QUERY",
            config: this.config
        }));
    };
    InMemoryCache2.prototype.watch = function(watch) {
        var _this = this;
        if (!this.watches.size) recallCache(this);
        this.watches.add(watch);
        if (watch.immediate) this.maybeBroadcastWatch(watch);
        return function() {
            if (_this.watches.delete(watch) && !_this.watches.size) forgetCache(_this);
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache2.prototype.gc = function(options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) this.resetResultCache(options.resetResultIdentities);
            else if (options.resetResultIdentities) this.storeReader.resetCanon();
        }
        return ids;
    };
    InMemoryCache2.prototype.retain = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache2.prototype.release = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache2.prototype.identify = function(object) {
        if (isReference(object)) return object.__ref;
        try {
            return this.policies.identify(object)[0];
        } catch (e230) {
            __DEV__ && invariant.warn(e230);
        }
    };
    InMemoryCache2.prototype.evict = function(options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) return false;
            options = __assign(__assign({}, options), {
                id: "ROOT_QUERY"
            });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache2.prototype.reset = function(options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function(watch) {
                return _this.maybeBroadcastWatch.forget(watch);
            });
            this.watches.clear();
            forgetCache(this);
        } else this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache2.prototype.batch = function(options) {
        var _this = this;
        var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function(layer) {
            var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
            ++_this.txCount;
            if (layer) _this.data = _this.optimisticData = layer;
            try {
                return updateResult = update(_this);
            } finally{
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = /* @__PURE__ */ new Set();
        if (onWatchUpdated && !this.txCount) this.broadcastWatches(__assign(__assign({}, options), {
            onWatchUpdated: function(watch) {
                alreadyDirty.add(watch);
                return false;
            }
        }));
        if (typeof optimistic === "string") this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        else if (optimistic === false) perform(this.data);
        else perform();
        if (typeof removeOptimistic === "string") this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(__assign(__assign({}, options), {
                onWatchUpdated: function(watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) alreadyDirty.delete(watch);
                    return result;
                }
            }));
            if (alreadyDirty.size) alreadyDirty.forEach(function(watch) {
                return _this.maybeBroadcastWatch.dirty(watch);
            });
        } else this.broadcastWatches(options);
        return updateResult;
    };
    InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
        return this.batch({
            update,
            optimistic: optimisticId || optimisticId !== null
        });
    };
    InMemoryCache2.prototype.transformDocument = function(document2) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document2);
            if (!result) {
                result = addTypenameToDocument(document2);
                this.typenameDocumentCache.set(document2, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document2;
    };
    InMemoryCache2.prototype.broadcastWatches = function(options) {
        var _this = this;
        if (!this.txCount) this.watches.forEach(function(c2) {
            return _this.maybeBroadcastWatch(c2, options);
        });
    };
    InMemoryCache2.prototype.broadcastWatch = function(c2, options) {
        var lastDiff = c2.lastDiff;
        var diff = this.diff(c2);
        if (options) {
            if (c2.optimistic && typeof options.optimistic === "string") diff.fromOptimisticTransaction = true;
            if (options.onWatchUpdated && options.onWatchUpdated.call(this, c2, diff, lastDiff) === false) return;
        }
        if (!lastDiff || !equal(lastDiff.result, diff.result)) c2.callback(c2.lastDiff = diff, lastDiff);
    };
    return InMemoryCache2;
}(ApolloCache);
function isApolloError(err) {
    return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
    var message = "";
    if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
        errors.forEach(function(error) {
            var errorMessage = error ? error.message : "Error message not found.";
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) message += "".concat(err.networkError.message, "\n");
    message = message.replace(/\n$/, "");
    return message;
};
var ApolloError = function(_super) {
    __extends$1(ApolloError2, _super);
    function ApolloError2(_a2) {
        var graphQLErrors = _a2.graphQLErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError2.prototype;
        return _this;
    }
    return ApolloError2;
}(Error);
var NetworkStatus;
(function(NetworkStatus2) {
    NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
    NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
    NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
    NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
    NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
    NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
    NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;
var ObservableQuery = function(_super) {
    __extends$1(ObservableQuery2, _super);
    function ObservableQuery2(_a2) {
        var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
        var _this = _super.call(this, function(observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) subObserver.error = defaultSubscriptionObserverErrorCallback;
            } catch (_a3) {}
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) observer.error && observer.error(last.error);
            else if (last && last.result) observer.next && observer.next(last.result);
            if (first) _this.reobserve().catch(function() {});
            return function() {
                if (_this.observers.delete(observer) && !_this.observers.size) _this.tearDownQuery();
            };
        }) || this;
        _this.observers = /* @__PURE__ */ new Set();
        _this.subscriptions = /* @__PURE__ */ new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = getOperationDefinition(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery2.prototype, "variables", {
        get: function() {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery2.prototype.result = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var observer = {
                next: function(result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) _this.queryManager.removeQuery(_this.queryId);
                    setTimeout(function() {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
        if (saveAsLastResult === void 0) saveAsLastResult = true;
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
        var result = __assign(__assign({}, lastResult), {
            loading: isNetworkRequestInFlight(networkStatus),
            networkStatus
        });
        var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
        if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) result.data = diff.result;
            if (equal(result.data, {})) result.data = void 0;
            if (diff.complete) {
                delete result.partial;
                if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
                    result.networkStatus = NetworkStatus.ready;
                    result.loading = false;
                }
            } else result.partial = true;
            if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) logMissingFieldErrors(diff.missing);
        }
        if (saveAsLastResult) this.updateLastResult(result);
        return result;
    };
    ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
        return !this.last || !equal(this.last.result, newResult);
    };
    ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
        var last = this.last;
        if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) return last[key];
    };
    ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery2.prototype.resetLastResults = function() {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery2.prototype.resetQueryStoreErrors = function() {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery2.prototype.refetch = function(variables) {
        var _a2;
        var reobserveOptions = {
            pollInterval: 0
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === "cache-and-network") reobserveOptions.fetchPolicy = fetchPolicy;
        else if (fetchPolicy === "no-cache") reobserveOptions.fetchPolicy = "no-cache";
        else reobserveOptions.fetchPolicy = "network-only";
        if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
            var queryDef = getQueryDefinition(this.options.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function(v2) {
                return v2.variable.name.value === "variables";
            })) __DEV__ && invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
        }
        if (variables && !equal(this.options.variables, variables)) reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, NetworkStatus.refetch);
    };
    ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
        var _this = this;
        var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign({}, this.options), fetchMoreOptions), {
            variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables)
        })), {
            fetchPolicy: "no-cache"
        });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = NetworkStatus.fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if (__DEV__ && !warnedAboutUpdateQuery) {
                    __DEV__ && invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function(previous) {
                    return updateQuery(previous, {
                        fetchMoreResult: data,
                        variables: combinedOptions.variables
                    });
                });
            } else _this.queryManager.cache.writeQuery({
                query: combinedOptions.query,
                variables: combinedOptions.variables,
                data
            });
            return fetchMoreResult;
        }).finally(function() {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery2.prototype.subscribeToMore = function(options) {
        var _this = this;
        var subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context
        }).subscribe({
            next: function(subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) _this.updateQuery(function(previous, _a2) {
                    var variables = _a2.variables;
                    return updateQuery(previous, {
                        subscriptionData,
                        variables
                    });
                });
            },
            error: function(err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && invariant.error("Unhandled GraphQL subscription error", err);
            }
        });
        this.subscriptions.add(subscription);
        return function() {
            if (_this.subscriptions.delete(subscription)) subscription.unsubscribe();
        };
    };
    ObservableQuery2.prototype.setOptions = function(newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery2.prototype.setVariables = function(variables) {
        if (equal(this.variables, variables)) return this.observers.size ? this.result() : Promise.resolve();
        this.options.variables = variables;
        if (!this.observers.size) return Promise.resolve();
        return this.reobserve({
            fetchPolicy: this.initialFetchPolicy,
            variables
        }, NetworkStatus.setVariables);
    };
    ObservableQuery2.prototype.updateQuery = function(mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery2.prototype.startPolling = function(pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery2.prototype.stopPolling = function() {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery2.prototype.updatePolling = function() {
        var _this = this;
        if (this.queryManager.ssrMode) return;
        var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo && pollingInfo.interval === pollInterval) return;
        __DEV__ ? invariant(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant(pollInterval, 10);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function() {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) _this.reobserve({
                    fetchPolicy: "network-only"
                }, NetworkStatus.poll).then(poll, poll);
                else poll();
            }
        };
        var poll = function() {
            var info2 = _this.pollingInfo;
            if (info2) {
                clearTimeout(info2.timeout);
                info2.timeout = setTimeout(maybeFetch, info2.interval);
            }
        };
        poll();
    };
    ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
        if (variables === void 0) variables = this.variables;
        this.last = __assign(__assign({}, this.last), {
            result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult),
            variables
        });
        if (!isNonEmptyArray(newResult.errors)) delete this.last.error;
        return this.last;
    };
    ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var options = useDisposableConcast ? compact(this.options, newOptions) : assign(this.options, compact(newOptions));
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions && newOptions.variables && !newOptions.fetchPolicy && !equal(newOptions.variables, oldVariables)) {
                options.fetchPolicy = this.initialFetchPolicy;
                if (newNetworkStatus === void 0) newNetworkStatus = NetworkStatus.setVariables;
            }
        }
        var variables = options.variables && __assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function(result) {
                _this.reportResult(result, variables);
            },
            error: function(error) {
                _this.reportError(error, variables);
            }
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) this.concast.removeObserver(this.observer, true);
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery2.prototype.observe = function() {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery2.prototype.reportResult = function(result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result)) {
            if (lastError || !result.partial || this.options.returnPartialData) this.updateLastResult(result, variables);
            iterateObserversSafely(this.observers, "next", result);
        }
    };
    ObservableQuery2.prototype.reportError = function(error, variables) {
        var errorResult = __assign(__assign({}, this.getLastResult()), {
            error,
            errors: error.graphQLErrors,
            networkStatus: NetworkStatus.error,
            loading: false
        });
        this.updateLastResult(errorResult, variables);
        iterateObserversSafely(this.observers, "error", this.last.error = error);
    };
    ObservableQuery2.prototype.hasObservers = function() {
        return this.observers.size > 0;
    };
    ObservableQuery2.prototype.tearDownQuery = function() {
        if (this.isTornDown) return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function(sub) {
            return sub.unsubscribe();
        });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && invariant.error("Unhandled error", error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) __DEV__ && invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
}
function applyNextFetchPolicy(options) {
    var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) options.fetchPolicy = typeof nextFetchPolicy === "function" ? nextFetchPolicy.call(options, fetchPolicy) : nextFetchPolicy;
}
var LocalState = function() {
    function LocalState2(_a2) {
        var cache2 = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
        this.cache = cache2;
        if (client) this.client = client;
        if (resolvers) this.addResolvers(resolvers);
        if (fragmentMatcher) this.setFragmentMatcher(fragmentMatcher);
    }
    LocalState2.prototype.addResolvers = function(resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) resolvers.forEach(function(resolverGroup) {
            _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
        });
        else this.resolvers = mergeDeep(this.resolvers, resolvers);
    };
    LocalState2.prototype.setResolvers = function(resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState2.prototype.getResolvers = function() {
        return this.resolvers || {};
    };
    LocalState2.prototype.runResolvers = function(_a2) {
        var document2 = _a2.document, remoteResult = _a2.remoteResult, context = _a2.context, variables = _a2.variables, _b = _a2.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_c) {
                if (document2) return [
                    2,
                    this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
                        return __assign(__assign({}, remoteResult), {
                            data: localResult.result
                        });
                    })
                ];
                return [
                    2,
                    remoteResult
                ];
            });
        });
    };
    LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState2.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
    };
    LocalState2.prototype.clientQuery = function(document2) {
        if (hasDirectives([
            "client"
        ], document2)) {
            if (this.resolvers) return document2;
        }
        return null;
    };
    LocalState2.prototype.serverQuery = function(document2) {
        return removeClientSetsFromDocument(document2);
    };
    LocalState2.prototype.prepareContext = function(context) {
        var cache2 = this.cache;
        return __assign(__assign({}, context), {
            cache: cache2,
            getCacheKey: function(obj) {
                return cache2.identify(obj);
            }
        });
    };
    LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
        if (variables === void 0) variables = {};
        if (context === void 0) context = {};
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
                if (document2) return [
                    2,
                    this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
                        return __assign(__assign({}, variables), data.exportedVariables);
                    })
                ];
                return [
                    2,
                    __assign({}, variables)
                ];
            });
        });
    };
    LocalState2.prototype.shouldForceResolvers = function(document2) {
        var forceResolvers = false;
        visit(document2, {
            Directive: {
                enter: function(node) {
                    if (node.name.value === "client" && node.arguments) {
                        forceResolvers = node.arguments.some(function(arg) {
                            return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
                        });
                        if (forceResolvers) return BREAK;
                    }
                }
            }
        });
        return forceResolvers;
    };
    LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
        return this.cache.diff({
            query: buildQueryFromSelectionSet(document2),
            variables,
            returnPartialData: true,
            optimistic: false
        }).result;
    };
    LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) context = {};
        if (variables === void 0) variables = {};
        if (fragmentMatcher === void 0) fragmentMatcher = function() {
            return true;
        };
        if (onlyRunForcedResolvers === void 0) onlyRunForcedResolvers = false;
        return __awaiter(this, void 0, void 0, function() {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a2, cache2, client, execContext;
            return __generator(this, function(_b) {
                mainDefinition = getMainDefinition(document2);
                fragments = getFragmentDefinitions(document2);
                fragmentMap = createFragmentMap(fragments);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
                _a2 = this, cache2 = _a2.cache, client = _a2.client;
                execContext = {
                    fragmentMap,
                    context: __assign(__assign({}, context), {
                        cache: cache2,
                        client
                    }),
                    variables,
                    fragmentMatcher,
                    defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers
                };
                return [
                    2,
                    this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
                        return {
                            result,
                            exportedVariables: execContext.exportedVariables
                        };
                    })
                ];
            });
        });
    };
    LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
        return __awaiter(this, void 0, void 0, function() {
            var fragmentMap, context, variables, resultsToMerge, execute2;
            var _this = this;
            return __generator(this, function(_a2) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [
                    rootValue
                ];
                execute2 = function(selection) {
                    return __awaiter(_this, void 0, void 0, function() {
                        var fragment, typeCondition;
                        return __generator(this, function(_a3) {
                            if (!shouldInclude(selection, variables)) return [
                                2
                            ];
                            if (isField(selection)) return [
                                2,
                                this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                                    var _a4;
                                    if (typeof fieldResult !== "undefined") resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                                })
                            ];
                            if (isInlineFragment(selection)) fragment = selection;
                            else {
                                fragment = fragmentMap[selection.name.value];
                                __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value)) : invariant(fragment, 9);
                            }
                            if (fragment && fragment.typeCondition) {
                                typeCondition = fragment.typeCondition.name.value;
                                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) return [
                                    2,
                                    this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })
                                ];
                            }
                            return [
                                2
                            ];
                        });
                    });
                };
                return [
                    2,
                    Promise.all(selectionSet.selections.map(execute2)).then(function() {
                        return mergeDeepArray(resultsToMerge);
                    })
                ];
            });
        });
    };
    LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
        return __awaiter(this, void 0, void 0, function() {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return __generator(this, function(_a2) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                            rootValue,
                            argumentsObjectFromField(field, variables),
                            execContext.context,
                            {
                                field,
                                fragmentMap: execContext.fragmentMap
                            }
                        ]));
                    }
                }
                return [
                    2,
                    resultPromise.then(function(result) {
                        if (result === void 0) result = defaultResult;
                        if (field.directives) field.directives.forEach(function(directive) {
                            if (directive.name.value === "export" && directive.arguments) directive.arguments.forEach(function(arg) {
                                if (arg.name.value === "as" && arg.value.kind === "StringValue") execContext.exportedVariables[arg.value.value] = result;
                            });
                        });
                        if (!field.selectionSet) return result;
                        if (result == null) return result;
                        if (Array.isArray(result)) return _this.resolveSubSelectedArray(field, result, execContext);
                        if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                    })
                ];
            });
        });
    };
    LocalState2.prototype.resolveSubSelectedArray = function(field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function(item) {
            if (item === null) return null;
            if (Array.isArray(item)) return _this.resolveSubSelectedArray(field, item, execContext);
            if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, item, execContext);
        }));
    };
    return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache2, methodName) {
    var original = cache2[methodName];
    if (typeof original === "function") cache2[methodName] = function() {
        destructiveMethodCounts.set(cache2, (destructiveMethodCounts.get(cache2) + 1) % 1e15);
        return original.apply(this, arguments);
    };
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = function() {
    function QueryInfo2(queryManager, queryId) {
        if (queryId === void 0) queryId = queryManager.generateQueryId();
        this.queryId = queryId;
        this.listeners = /* @__PURE__ */ new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = /* @__PURE__ */ new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache2 = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache2)) {
            destructiveMethodCounts.set(cache2, 0);
            wrapDestructiveCacheMethod(cache2, "evict");
            wrapDestructiveCacheMethod(cache2, "modify");
            wrapDestructiveCacheMethod(cache2, "reset");
        }
    }
    QueryInfo2.prototype.init = function(query) {
        var networkStatus = query.networkStatus || NetworkStatus.loading;
        if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) networkStatus = NetworkStatus.setVariables;
        if (!equal(query.variables, this.variables)) this.lastDiff = void 0;
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus
        });
        if (query.observableQuery) this.setObservableQuery(query.observableQuery);
        if (query.lastRequestId) this.lastRequestId = query.lastRequestId;
        return this;
    };
    QueryInfo2.prototype.reset = function() {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo2.prototype.getDiff = function(variables) {
        if (variables === void 0) variables = this.variables;
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equal(options, this.lastDiff.options)) return this.lastDiff.diff;
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") return {
            complete: false
        };
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo2.prototype.updateLastDiff = function(diff, options) {
        this.lastDiff = diff ? {
            diff,
            options: options || this.getDiffOptions()
        } : void 0;
    };
    QueryInfo2.prototype.getDiffOptions = function(variables) {
        var _a2;
        if (variables === void 0) variables = this.variables;
        return {
            query: this.document,
            variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
        };
    };
    QueryInfo2.prototype.setDiff = function(diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) this.notifyTimeout = setTimeout(function() {
                return _this.notify();
            }, 0);
        }
    };
    QueryInfo2.prototype.setObservableQuery = function(oq) {
        var _this = this;
        if (oq === this.observableQuery) return;
        if (this.oqListener) this.listeners.delete(this.oqListener);
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function() {
                if (_this.getDiff().fromOptimisticTransaction) oq["observe"]();
                else oq.reobserve();
            });
        } else delete this.oqListener;
    };
    QueryInfo2.prototype.notify = function() {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) this.listeners.forEach(function(listener) {
            return listener(_this);
        });
        this.dirty = false;
    };
    QueryInfo2.prototype.shouldNotify = function() {
        if (!this.dirty || !this.listeners.size) return false;
        if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") return false;
        }
        return true;
    };
    QueryInfo2.prototype.stop = function() {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo2.prototype.cancel;
            this.subscriptions.forEach(function(sub) {
                return sub.unsubscribe();
            });
            var oq = this.observableQuery;
            if (oq) oq.stopPolling();
        }
    };
    QueryInfo2.prototype.cancel = function() {};
    QueryInfo2.prototype.updateWatch = function(variables) {
        var _this = this;
        if (variables === void 0) variables = this.variables;
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") return;
        var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), {
            watcher: this,
            callback: function(diff) {
                return _this.setDiff(diff);
            }
        });
        if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo2.prototype.resetLastWrite = function() {
        this.lastWrite = void 0;
    };
    QueryInfo2.prototype.shouldWrite = function(result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
    };
    QueryInfo2.prototype.markResult = function(result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === "no-cache") this.updateLastDiff({
            result: result.data,
            complete: true
        }, this.getDiffOptions(options.variables));
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) this.cache.performTransaction(function(cache2) {
                if (_this.shouldWrite(result, options.variables)) {
                    cache2.writeQuery({
                        query: _this.document,
                        data: result.data,
                        variables: options.variables,
                        overwrite: cacheWriteBehavior === 1
                    });
                    _this.lastWrite = {
                        result,
                        variables: options.variables,
                        dmCount: destructiveMethodCounts.get(_this.cache)
                    };
                } else if (_this.lastDiff && _this.lastDiff.diff.complete) {
                    result.data = _this.lastDiff.diff.result;
                    return;
                }
                var diffOptions = _this.getDiffOptions(options.variables);
                var diff = cache2.diff(diffOptions);
                if (!_this.stopped) _this.updateWatch(options.variables);
                _this.updateLastDiff(diff, diffOptions);
                if (diff.complete) result.data = diff.result;
            });
            else this.lastWrite = void 0;
        }
    };
    QueryInfo2.prototype.markReady = function() {
        this.networkError = null;
        return this.networkStatus = NetworkStatus.ready;
    };
    QueryInfo2.prototype.markError = function(error) {
        this.networkStatus = NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) this.graphQLErrors = error.graphQLErrors;
        if (error.networkError) this.networkError = error.networkError;
        return error;
    };
    return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) errorPolicy = "none";
    var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
    var writeWithErrors = !graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) writeWithErrors = true;
    return writeWithErrors;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
    function QueryManager2(_a2) {
        var cache2 = _a2.cache, link2 = _a2.link, _b = _a2.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a2.onBroadcast, _c = _a2.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a2.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a2.localState, assumeImmutableResults = _a2.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = /* @__PURE__ */ new Map();
        this.fetchCancelFns = /* @__PURE__ */ new Map();
        this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = /* @__PURE__ */ new Map();
        this.cache = cache2;
        this.link = link2;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({
            cache: cache2
        });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if (this.onBroadcast = onBroadcast) this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    QueryManager2.prototype.stop = function() {
        var _this = this;
        this.queries.forEach(function(_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(11));
    };
    QueryManager2.prototype.cancelPendingFetches = function(error) {
        this.fetchCancelFns.forEach(function(cancel) {
            return cancel(error);
        });
        this.fetchCancelFns.clear();
    };
    QueryManager2.prototype.mutate = function(_a2) {
        var mutation = _a2.mutation, variables = _a2.variables, optimisticResponse = _a2.optimisticResponse, updateQueries = _a2.updateQueries, _b = _a2.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a2.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a2.update, onQueryUpdated = _a2.onQueryUpdated, _d = _a2.errorPolicy, errorPolicy = _d === void 0 ? "none" : _d, _e = _a2.fetchPolicy, fetchPolicy = _e === void 0 ? "network-only" : _e, keepRootFields = _a2.keepRootFields, context = _a2.context;
        return __awaiter(this, void 0, void 0, function() {
            var mutationId, mutationStoreValue, self2;
            return __generator(this, function(_f) {
                switch(_f.label){
                    case 0:
                        __DEV__ ? invariant(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant(mutation, 12);
                        __DEV__ ? invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 13);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            this.localState.addExportedVariables(mutation, variables, context)
                        ];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                            mutation,
                            variables,
                            loading: true,
                            error: null
                        });
                        if (optimisticResponse) this.markMutationOptimistic(optimisticResponse, {
                            mutationId,
                            document: mutation,
                            variables,
                            fetchPolicy,
                            errorPolicy,
                            context,
                            updateQueries,
                            update: updateWithProxyFn,
                            keepRootFields
                        });
                        this.broadcastQueries();
                        self2 = this;
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), {
                                    optimisticResponse
                                }), variables, false), function(result) {
                                    if (graphQLResultHasError(result) && errorPolicy === "none") throw new ApolloError({
                                        graphQLErrors: result.errors
                                    });
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = __assign({}, result);
                                    if (typeof refetchQueries === "function") refetchQueries = refetchQueries(storeResult);
                                    if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) delete storeResult.errors;
                                    return self2.markMutationResult({
                                        mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables,
                                        fetchPolicy,
                                        errorPolicy,
                                        context,
                                        update: updateWithProxyFn,
                                        updateQueries,
                                        awaitRefetchQueries,
                                        refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated,
                                        keepRootFields
                                    });
                                }).subscribe({
                                    next: function(storeResult) {
                                        self2.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function(err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) self2.cache.removeOptimistic(mutationId);
                                        self2.broadcastQueries();
                                        reject(err instanceof ApolloError ? err : new ApolloError({
                                            networkError: err
                                        }));
                                    }
                                });
                            })
                        ];
                }
            });
        });
    };
    QueryManager2.prototype.markMutationResult = function(mutation, cache2) {
        var _this = this;
        if (cache2 === void 0) cache2 = this.cache;
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: "ROOT_MUTATION",
                query: mutation.document,
                variables: mutation.variables
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) this.queries.forEach(function(_a2, queryId) {
                var observableQuery = _a2.observableQuery;
                var queryName = observableQuery && observableQuery.queryName;
                if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) return;
                var updater = updateQueries_1[queryName];
                var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
                var _c = cache2.diff({
                    query: document2,
                    variables,
                    returnPartialData: true,
                    optimistic: false
                }), currentQueryResult = _c.result, complete = _c.complete;
                if (complete && currentQueryResult) {
                    var nextQueryResult = updater(currentQueryResult, {
                        mutationResult: result,
                        queryName: document2 && getOperationName(document2) || void 0,
                        queryVariables: variables
                    });
                    if (nextQueryResult) cacheWrites.push({
                        result: nextQueryResult,
                        dataId: "ROOT_QUERY",
                        query: document2,
                        variables
                    });
                }
            });
        }
        if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function(cache3) {
                    if (!skipCache) cacheWrites.forEach(function(write) {
                        return cache3.write(write);
                    });
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache3.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true
                            });
                            if (diff.complete) result = __assign(__assign({}, result), {
                                data: diff.result
                            });
                        }
                        update(cache3, result, {
                            context: mutation.context,
                            variables: mutation.variables
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) cache3.modify({
                        id: "ROOT_MUTATION",
                        fields: function(value, _a2) {
                            var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                            return fieldName === "__typename" ? value : DELETE2;
                        }
                    });
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null
            }).forEach(function(result2) {
                return results_1.push(result2);
            });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) return Promise.all(results_1).then(function() {
                return result;
            });
        }
        return Promise.resolve(result);
    };
    QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function(cache2) {
            try {
                _this.markMutationResult(__assign(__assign({}, mutation), {
                    result: {
                        data
                    }
                }), cache2);
            } catch (error) {
                __DEV__ && invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager2.prototype.getQueryStore = function() {
        var store = /* @__PURE__ */ Object.create(null);
        this.queries.forEach(function(info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors
            };
        });
        return store;
    };
    QueryManager2.prototype.resetErrors = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = void 0;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager2.prototype.transform = function(document2) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document2)) {
            var transformed = this.cache.transformDocument(document2);
            var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery,
                serverQuery,
                defaultVars: getDefaultValues(getOperationDefinition(transformed)),
                asQuery: __assign(__assign({}, transformed), {
                    definitions: transformed.definitions.map(function(def) {
                        if (def.kind === "OperationDefinition" && def.operation !== "query") return __assign(__assign({}, def), {
                            operation: "query"
                        });
                        return def;
                    })
                })
            };
            var add = function(doc) {
                if (doc && !transformCache.has(doc)) transformCache.set(doc, cacheEntry_1);
            };
            add(document2);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document2);
    };
    QueryManager2.prototype.getVariables = function(document2, variables) {
        return __assign(__assign({}, this.transform(document2).defaultVars), variables);
    };
    QueryManager2.prototype.watchQuery = function(options) {
        options = __assign(__assign({}, options), {
            variables: this.getVariables(options.query, options.variables)
        });
        if (typeof options.notifyOnNetworkStatusChange === "undefined") options.notifyOnNetworkStatusChange = false;
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo,
            options
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables
        });
        return observable;
    };
    QueryManager2.prototype.query = function(options, queryId) {
        var _this = this;
        if (queryId === void 0) queryId = this.generateQueryId();
        __DEV__ ? invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant(options.query, 14);
        __DEV__ ? invariant(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === "Document", 15);
        __DEV__ ? invariant(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant(!options.returnPartialData, 16);
        __DEV__ ? invariant(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant(!options.pollInterval, 17);
        return this.fetchQuery(queryId, options).finally(function() {
            return _this.stopQuery(queryId);
        });
    };
    QueryManager2.prototype.generateQueryId = function() {
        return String(this.queryIdCounter++);
    };
    QueryManager2.prototype.generateRequestId = function() {
        return this.requestIdCounter++;
    };
    QueryManager2.prototype.generateMutationId = function() {
        return String(this.mutationIdCounter++);
    };
    QueryManager2.prototype.stopQueryInStore = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) queryInfo.stop();
    };
    QueryManager2.prototype.clearStore = function(options) {
        if (options === void 0) options = {
            discardWatches: true
        };
        this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(18));
        this.queries.forEach(function(queryInfo) {
            if (queryInfo.observableQuery) queryInfo.networkStatus = NetworkStatus.loading;
            else queryInfo.stop();
        });
        if (this.mutationStore) this.mutationStore = /* @__PURE__ */ Object.create(null);
        return this.cache.reset(options);
    };
    QueryManager2.prototype.getObservableQueries = function(include) {
        var _this = this;
        if (include === void 0) include = "active";
        var queries = /* @__PURE__ */ new Map();
        var queryNamesAndDocs = /* @__PURE__ */ new Map();
        var legacyQueryOptions = /* @__PURE__ */ new Set();
        if (Array.isArray(include)) include.forEach(function(desc) {
            if (typeof desc === "string") queryNamesAndDocs.set(desc, false);
            else if (isDocumentNode(desc)) queryNamesAndDocs.set(_this.transform(desc).document, false);
            else if (isNonNullObject$1(desc) && desc.query) legacyQueryOptions.add(desc);
        });
        this.queries.forEach(function(_a2, queryId) {
            var oq = _a2.observableQuery, document2 = _a2.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) return;
                if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
                    queries.set(queryId, oq);
                    if (queryName) queryNamesAndDocs.set(queryName, true);
                    if (document2) queryNamesAndDocs.set(document2, true);
                }
            }
        });
        if (legacyQueryOptions.size) legacyQueryOptions.forEach(function(options) {
            var queryId = makeUniqueId("legacyOneTimeQuery");
            var queryInfo = _this.getQuery(queryId).init({
                document: options.query,
                variables: options.variables
            });
            var oq = new ObservableQuery({
                queryManager: _this,
                queryInfo,
                options: __assign(__assign({}, options), {
                    fetchPolicy: "network-only"
                })
            });
            invariant(oq.queryId === queryId);
            queryInfo.setObservableQuery(oq);
            queries.set(queryId, oq);
        });
        if (__DEV__ && queryNamesAndDocs.size) queryNamesAndDocs.forEach(function(included, nameOrDoc) {
            if (!included) __DEV__ && invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        });
        return queries;
    };
    QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
        var _this = this;
        if (includeStandby === void 0) includeStandby = false;
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") observableQueryPromises.push(observableQuery.refetch());
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager2.prototype.setObservableQuery = function(observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager2.prototype.startGraphQLSubscription = function(_a2) {
        var _this = this;
        var query = _a2.query, fetchPolicy = _a2.fetchPolicy, errorPolicy = _a2.errorPolicy, variables = _a2.variables, _b = _a2.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function(variables2) {
            return _this.getObservableFromLink(query, context, variables2).map(function(result) {
                if (fetchPolicy !== "no-cache") {
                    if (shouldWriteResult(result, errorPolicy)) _this.cache.write({
                        query,
                        result: result.data,
                        dataId: "ROOT_SUBSCRIPTION",
                        variables: variables2
                    });
                    _this.broadcastQueries();
                }
                if (graphQLResultHasError(result)) throw new ApolloError({
                    graphQLErrors: result.errors
                });
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new Observable(function(observer) {
                var sub = null;
                observablePromise_1.then(function(observable) {
                    return sub = observable.subscribe(observer);
                }, observer.error);
                return function() {
                    return sub && sub.unsubscribe();
                };
            });
        }
        return makeObservable(variables);
    };
    QueryManager2.prototype.stopQuery = function(queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager2.prototype.removeQuery = function(queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager2.prototype.broadcastQueries = function() {
        if (this.onBroadcast) this.onBroadcast();
        this.queries.forEach(function(info) {
            return info.notify();
        });
    };
    QueryManager2.prototype.getLocalState = function() {
        return this.localState;
    };
    QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
        var _this = this;
        var _a2;
        if (deduplication === void 0) deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link2 = _b.link;
            var operation = {
                query: serverQuery,
                variables,
                operationName: getOperationName(serverQuery) || void 0,
                context: this.prepareContext(__assign(__assign({}, context), {
                    forceFetch: !deduplication
                }))
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new Concast([
                        execute(link2, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function() {
                        if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) inFlightLinkObservables_1.delete(serverQuery);
                    });
                }
            } else observable = new Concast([
                execute(link2, operation)
            ]);
        } else {
            observable = new Concast([
                Observable.of({
                    data: {}
                })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) observable = asyncMap(observable, function(result) {
            return _this.localState.runResolvers({
                document: clientQuery,
                remoteResult: result,
                context,
                variables
            });
        });
        return observable;
    };
    QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result) {
            var hasErrors = isNonEmptyArray(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") throw queryInfo.markError(new ApolloError({
                    graphQLErrors: result.errors
                }));
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || NetworkStatus.ready
            };
            if (hasErrors && options.errorPolicy !== "ignore") aqr.errors = result.errors;
            return aqr;
        }, function(networkError) {
            var error = isApolloError(networkError) ? networkError : new ApolloError({
                networkError
            });
            if (requestId >= queryInfo.lastRequestId) queryInfo.markError(error);
            throw error;
        });
    };
    QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) networkStatus = NetworkStatus.loading;
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query,
            variables,
            fetchPolicy,
            errorPolicy,
            returnPartialData,
            notifyOnNetworkStatusChange,
            context
        });
        var fromVariables = function(variables2) {
            normalized.variables = variables2;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function(reason) {
            setTimeout(function() {
                return concast.cancel(reason);
            });
        });
        var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
        concast.cleanup(function() {
            _this.fetchCancelFns.delete(queryId);
            applyNextFetchPolicy(options);
        });
        return concast;
    };
    QueryManager2.prototype.refetchQueries = function(_a2) {
        var _this = this;
        var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
        var includedQueriesById = /* @__PURE__ */ new Map();
        if (include) this.getObservableQueries(include).forEach(function(oq, queryId) {
            includedQueriesById.set(queryId, {
                oq,
                lastDiff: _this.getQuery(queryId).getDiff()
            });
        });
        var results = /* @__PURE__ */ new Map();
        if (updateCache) this.cache.batch({
            update: updateCache,
            optimistic: optimistic && removeOptimistic || false,
            removeOptimistic,
            onWatchUpdated: function(watch, diff, lastDiff) {
                var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
                if (oq) {
                    if (onQueryUpdated) {
                        includedQueriesById.delete(oq.queryId);
                        var result = onQueryUpdated(oq, diff, lastDiff);
                        if (result === true) result = oq.refetch();
                        if (result !== false) results.set(oq, result);
                        return result;
                    }
                    if (onQueryUpdated !== null) includedQueriesById.set(oq.queryId, {
                        oq,
                        lastDiff,
                        diff
                    });
                }
            }
        });
        if (includedQueriesById.size) includedQueriesById.forEach(function(_a3, queryId) {
            var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
            var result;
            if (onQueryUpdated) {
                if (!diff) {
                    var info = oq["queryInfo"];
                    info.reset();
                    diff = info.getDiff();
                }
                result = onQueryUpdated(oq, diff, lastDiff);
            }
            if (!onQueryUpdated || result === true) result = oq.refetch();
            if (result !== false) results.set(oq, result);
            if (queryId.indexOf("legacyOneTimeQuery") >= 0) _this.stopQueryNoBroadcast(queryId);
        });
        if (removeOptimistic) this.cache.removeOptimistic(removeOptimistic);
        return results;
    };
    QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
        var _this = this;
        var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables,
            networkStatus
        });
        var readCache = function() {
            return queryInfo.getDiff(variables);
        };
        var resultsFromCache = function(diff2, networkStatus2) {
            if (networkStatus2 === void 0) networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
            var data = diff2.result;
            if (__DEV__ && !returnPartialData && !equal(data, {})) logMissingFieldErrors(diff2.missing);
            var fromData = function(data2) {
                return Observable.of(__assign({
                    data: data2,
                    loading: isNetworkRequestInFlight(networkStatus2),
                    networkStatus: networkStatus2
                }, diff2.complete ? null : {
                    partial: true
                }));
            };
            if (data && _this.transform(query).hasForcedResolvers) return _this.localState.runResolvers({
                document: query,
                remoteResult: {
                    data
                },
                context,
                variables,
                onlyRunForcedResolvers: true
            }).then(function(resolved) {
                return fromData(resolved.data || void 0);
            });
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
        var resultsFromLink = function() {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables,
                context,
                fetchPolicy,
                errorPolicy
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
        switch(fetchPolicy){
            default:
            case "cache-first":
                var diff = readCache();
                if (diff.complete) return [
                    resultsFromCache(diff, queryInfo.markReady())
                ];
                if (returnPartialData || shouldNotify) return [
                    resultsFromCache(diff),
                    resultsFromLink()
                ];
                return [
                    resultsFromLink()
                ];
            case "cache-and-network":
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) return [
                    resultsFromCache(diff),
                    resultsFromLink()
                ];
                return [
                    resultsFromLink()
                ];
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady())
                ];
            case "network-only":
                if (shouldNotify) return [
                    resultsFromCache(readCache()),
                    resultsFromLink()
                ];
                return [
                    resultsFromLink()
                ];
            case "no-cache":
                if (shouldNotify) return [
                    resultsFromCache(queryInfo.getDiff()),
                    resultsFromLink()
                ];
                return [
                    resultsFromLink()
                ];
            case "standby":
                return [];
        }
    };
    QueryManager2.prototype.getQuery = function(queryId) {
        if (queryId && !this.queries.has(queryId)) this.queries.set(queryId, new QueryInfo(this, queryId));
        return this.queries.get(queryId);
    };
    QueryManager2.prototype.prepareContext = function(context) {
        if (context === void 0) context = {};
        var newContext = this.localState.prepareContext(context);
        return __assign(__assign({}, newContext), {
            clientAwareness: this.clientAwareness
        });
    };
    return QueryManager2;
}();
var hasSuggestedDevtools = false;
function mergeOptions(defaults2, options) {
    return compact(defaults2, options, options.variables && {
        variables: __assign(__assign({}, defaults2.variables), options.variables)
    });
}
var ApolloClient = function() {
    function ApolloClient2(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache2 = options.cache, _a2 = options.ssrMode, ssrMode = _a2 === void 0 ? false : _a2, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link2 = options.link;
        if (!link2) link2 = uri ? new HttpLink({
            uri,
            credentials,
            headers
        }) : ApolloLink.empty();
        if (!cache2) throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
        this.link = link2;
        this.cache = cache2;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions2 || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) setTimeout(function() {
            return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === "object") window.__APOLLO_CLIENT__ = this;
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    else if (ua.indexOf("Firefox/") > -1) url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                }
                if (url) __DEV__ && invariant.log("Download the Apollo DevTools for a better development experience: " + url);
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache2,
            client: this,
            resolvers,
            fragmentMatcher
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            queryDeduplication,
            ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion
            },
            localState: this.localState,
            assumeImmutableResults,
            onBroadcast: connectToDevTools ? function() {
                if (_this.devToolsHookCb) _this.devToolsHookCb({
                    action: {},
                    state: {
                        queries: _this.queryManager.getQueryStore(),
                        mutations: _this.queryManager.mutationStore || {}
                    },
                    dataWithOptimisticResults: _this.cache.extract(true)
                });
            } : void 0
        });
    }
    ApolloClient2.prototype.stop = function() {
        this.queryManager.stop();
    };
    ApolloClient2.prototype.watchQuery = function(options) {
        if (this.defaultOptions.watchQuery) options = mergeOptions(this.defaultOptions.watchQuery, options);
        if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) options = __assign(__assign({}, options), {
            fetchPolicy: "cache-first"
        });
        return this.queryManager.watchQuery(options);
    };
    ApolloClient2.prototype.query = function(options) {
        if (this.defaultOptions.query) options = mergeOptions(this.defaultOptions.query, options);
        __DEV__ ? invariant(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant(options.fetchPolicy !== "cache-and-network", 8);
        if (this.disableNetworkFetches && options.fetchPolicy === "network-only") options = __assign(__assign({}, options), {
            fetchPolicy: "cache-first"
        });
        return this.queryManager.query(options);
    };
    ApolloClient2.prototype.mutate = function(options) {
        if (this.defaultOptions.mutate) options = mergeOptions(this.defaultOptions.mutate, options);
        return this.queryManager.mutate(options);
    };
    ApolloClient2.prototype.subscribe = function(options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient2.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient2.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient2.prototype.writeQuery = function(options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient2.prototype.writeFragment = function(options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient2.prototype.__requestRaw = function(payload) {
        return execute(this.link, payload);
    };
    ApolloClient2.prototype.resetStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore({
                discardWatches: false
            });
        }).then(function() {
            return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
                return fn();
            }));
        }).then(function() {
            return _this.reFetchObservableQueries();
        });
    };
    ApolloClient2.prototype.clearStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore({
                discardWatches: true
            });
        }).then(function() {
            return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
                return fn();
            }));
        });
    };
    ApolloClient2.prototype.onResetStore = function(cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function() {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c2) {
                return c2 !== cb;
            });
        };
    };
    ApolloClient2.prototype.onClearStore = function(cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function() {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c2) {
                return c2 !== cb;
            });
        };
    };
    ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient2.prototype.refetchQueries = function(options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function(result2, obsQuery) {
            queries.push(obsQuery);
            results.push(result2);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function(error) {
            __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient2.prototype.getObservableQueries = function(include) {
        if (include === void 0) include = "active";
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient2.prototype.extract = function(optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient2.prototype.restore = function(serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient2.prototype.addResolvers = function(resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient2.prototype.setResolvers = function(resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient2.prototype.getResolvers = function() {
        return this.localState.getResolvers();
    };
    ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient2.prototype.setLink = function(newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient2;
}();
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = /* @__PURE__ */ new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === "FragmentDefinition") {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
            } else if (!sourceKeySet) fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else definitions.push(fragmentDefinition);
    });
    return __assign(__assign({}, ast), {
        definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === "object") workSet.add(value);
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = parse(source, {
            experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== "Document") throw new Error("Not a valid GraphQL document.");
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    if (typeof literals === "string") literals = [
        literals
    ];
    var result = literals[0];
    args.forEach(function(arg, i2) {
        if (arg && arg.kind === "Document") result += arg.loc.source.body;
        else result += arg;
        result += literals[i2 + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql,
    resetCaches,
    disableFragmentWarnings,
    enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var lib$1 = {};
var Jsona$2 = {};
var utils = {};
Object.defineProperty(utils, "__esModule", {
    value: true
});
utils.jsonParse = utils.createIncludeNamesTree = void 0;
function createIncludeNamesTree(namesChain, includeTree) {
    var namesArray = namesChain.split(".");
    var currentIncludeName = namesArray.shift();
    var chainHasMoreNames = namesArray.length;
    var subTree = null;
    if (chainHasMoreNames) {
        subTree = includeTree[currentIncludeName] || {};
        createIncludeNamesTree(namesArray.join("."), subTree);
    }
    includeTree[currentIncludeName] = subTree;
}
utils.createIncludeNamesTree = createIncludeNamesTree;
function jsonParse(stringified) {
    var parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e231) {
        parsed = {};
        console.warn(e231);
    }
    return parsed;
}
utils.jsonParse = jsonParse;
var ModelsSerializer$1 = {};
Object.defineProperty(ModelsSerializer$1, "__esModule", {
    value: true
});
ModelsSerializer$1.ModelsSerializer = void 0;
var utils_1$1 = utils;
var ModelsSerializer = function() {
    function ModelsSerializer2(propertiesMapper) {
        propertiesMapper && this.setPropertiesMapper(propertiesMapper);
    }
    ModelsSerializer2.prototype.setPropertiesMapper = function(propertiesMapper) {
        this.propertiesMapper = propertiesMapper;
    };
    ModelsSerializer2.prototype.setStuff = function(stuff) {
        this.stuff = stuff;
    };
    ModelsSerializer2.prototype.setIncludeNames = function(includeNames) {
        if (Array.isArray(includeNames)) {
            var includeNamesTree_1 = {};
            includeNames.forEach(function(namesChain) {
                utils_1$1.createIncludeNamesTree(namesChain, includeNamesTree_1);
            });
            this.includeNamesTree = includeNamesTree_1;
        } else this.includeNamesTree = includeNames;
    };
    ModelsSerializer2.prototype.build = function() {
        var _a2 = this, stuff = _a2.stuff, propertiesMapper = _a2.propertiesMapper;
        if (!propertiesMapper || typeof propertiesMapper !== "object") throw new Error("ModelsSerializer cannot build, propertiesMapper is not set");
        else if (!stuff || typeof stuff !== "object") throw new Error("ModelsSerializer cannot build, stuff is not set");
        var body = {};
        var uniqueIncluded = {};
        if (stuff && Array.isArray(stuff)) {
            var collectionLength = stuff.length;
            var data = [];
            for(var i2 = 0; i2 < collectionLength; i2++){
                data.push(this.buildDataByModel(stuff[i2]));
                this.buildIncludedByModel(stuff[i2], this.includeNamesTree, uniqueIncluded);
            }
            body["data"] = data;
        } else if (stuff) {
            body["data"] = this.buildDataByModel(stuff);
            this.buildIncludedByModel(stuff, this.includeNamesTree, uniqueIncluded);
        } else if (stuff === null) body["data"] = null;
        if (Object.keys(uniqueIncluded).length) {
            body["included"] = [];
            var includeUniqueKeys = Object.keys(uniqueIncluded);
            includeUniqueKeys.forEach(function(k2) {
                body["included"].push(uniqueIncluded[k2]);
            });
        }
        return body;
    };
    ModelsSerializer2.prototype.buildDataByModel = function(model) {
        var data = {
            id: this.propertiesMapper.getId(model),
            type: this.propertiesMapper.getType(model),
            attributes: this.propertiesMapper.getAttributes(model)
        };
        if (typeof data.type !== "string" || !data.type) {
            console.warn("ModelsSerializer cannot buildDataByModel, type is not set or incorrect", model);
            throw new Error("ModelsSerializer cannot buildDataByModel, type is not set or incorrect");
        }
        var relationships = this.buildRelationshipsByModel(model);
        if (relationships && Object.keys(relationships).length) data["relationships"] = relationships;
        return data;
    };
    ModelsSerializer2.prototype.buildRelationshipsByModel = function(model) {
        var _this = this;
        var relations = this.propertiesMapper.getRelationships(model);
        if (!relations || !Object.keys(relations).length) return;
        var relationships = {};
        Object.keys(relations).forEach(function(k2) {
            var relation = relations[k2];
            if (Array.isArray(relation)) {
                var relationshipData = [];
                var relationLength = relation.length;
                for(var i2 = 0; i2 < relationLength; i2++){
                    var item = {
                        id: _this.propertiesMapper.getId(relation[i2]),
                        type: _this.propertiesMapper.getType(relation[i2])
                    };
                    if (item.id && item.type) relationshipData.push(item);
                    else console.error("Can't create data item[" + i2 + "] for relationship " + k2 + ",\n                            it doesn't have 'id' or 'type', it was skipped", relation[i2]);
                }
                relationships[k2] = {
                    data: relationshipData
                };
            } else if (relation) {
                var item = {
                    id: _this.propertiesMapper.getId(relation),
                    type: _this.propertiesMapper.getType(relation)
                };
                if (item.type) relationships[k2] = {
                    data: item
                };
                else console.error("Can't create data for relationship " + k2 + ", it doesn't have 'type', it was skipped", relation);
            } else relationships[k2] = {
                data: relation
            };
        });
        return relationships;
    };
    ModelsSerializer2.prototype.buildIncludedByModel = function(model, includeTree, builtIncluded) {
        if (builtIncluded === void 0) builtIncluded = {};
        if (!includeTree || !Object.keys(includeTree).length) return;
        var modelRelationships = this.propertiesMapper.getRelationships(model);
        if (!modelRelationships || !Object.keys(modelRelationships).length) return;
        var includeNames = Object.keys(includeTree);
        var includeNamesLength = includeNames.length;
        for(var i2 = 0; i2 < includeNamesLength; i2++){
            var currentRelationName = includeNames[i2];
            var relation = modelRelationships[currentRelationName];
            if (relation) {
                if (Array.isArray(relation)) {
                    var relationModelsLength = relation.length;
                    for(var r2 = 0; r2 < relationModelsLength; r2++){
                        var relationModel = relation[r2];
                        this.buildIncludedItem(relationModel, includeTree[currentRelationName], builtIncluded);
                    }
                } else this.buildIncludedItem(relation, includeTree[currentRelationName], builtIncluded);
            }
        }
    };
    ModelsSerializer2.prototype.buildIncludedItem = function(relationModel, subIncludeTree, builtIncluded) {
        var includeKey = this.propertiesMapper.getType(relationModel) + this.propertiesMapper.getId(relationModel);
        if (!builtIncluded[includeKey]) {
            builtIncluded[includeKey] = this.buildDataByModel(relationModel);
            if (subIncludeTree) this.buildIncludedByModel(relationModel, subIncludeTree, builtIncluded);
        }
    };
    return ModelsSerializer2;
}();
ModelsSerializer$1.ModelsSerializer = ModelsSerializer;
ModelsSerializer$1.default = ModelsSerializer;
var JsonDeserializer$1 = {};
Object.defineProperty(JsonDeserializer$1, "__esModule", {
    value: true
});
JsonDeserializer$1.JsonDeserializer = void 0;
var JsonDeserializer = function() {
    function JsonDeserializer2(propertiesMapper, deserializeCache, options) {
        this.preferNestedDataFromData = false;
        this.setPropertiesMapper(propertiesMapper);
        this.setDeserializeCache(deserializeCache);
        if (!options) return;
        if (options.preferNestedDataFromData) this.preferNestedDataFromData = true;
    }
    JsonDeserializer2.prototype.setDeserializeCache = function(dc) {
        this.dc = dc;
    };
    JsonDeserializer2.prototype.setPropertiesMapper = function(pm) {
        this.pm = pm;
    };
    JsonDeserializer2.prototype.setJsonParsedObject = function(body) {
        this.body = body;
    };
    JsonDeserializer2.prototype.build = function() {
        var data = this.body.data;
        var stuff;
        if (Array.isArray(data)) {
            stuff = [];
            var collectionLength = data.length;
            for(var i2 = 0; i2 < collectionLength; i2++)if (data[i2]) {
                var model = this.buildModelByData(data[i2]);
                if (model) stuff.push(model);
            }
        } else if (data) stuff = this.buildModelByData(data);
        return stuff;
    };
    JsonDeserializer2.prototype.buildModelByData = function(data, resourceIdObj) {
        if (resourceIdObj === void 0) resourceIdObj = {};
        var cachedModel = this.dc.getCachedModel(data);
        if (cachedModel) return cachedModel;
        var model = this.pm.createModel(data.type);
        this.dc.handleModel(model, data);
        if (model) {
            this.pm.setId(model, data.id);
            if (data.attributes) this.pm.setAttributes(model, data.attributes);
            if (data.meta && this.pm.setMeta) this.pm.setMeta(model, data.meta);
            if (data.links && this.pm.setLinks) this.pm.setLinks(model, data.links);
            if (resourceIdObj.meta) this.pm.setResourceIdObjMeta(model, resourceIdObj.meta);
            var relationships = this.buildRelationsByData(data, model);
            if (relationships) this.pm.setRelationships(model, relationships);
        }
        return model;
    };
    JsonDeserializer2.prototype.buildRelationsByData = function(data, model) {
        var readyRelations = {};
        if (data.relationships) for(var k2 in data.relationships){
            var relation = data.relationships[k2];
            if (Array.isArray(relation.data)) {
                readyRelations[k2] = [];
                var relationDataLength = relation.data.length;
                var resourceIdObj = void 0;
                for(var i2 = 0; i2 < relationDataLength; i2++){
                    resourceIdObj = relation.data[i2];
                    if (!resourceIdObj) return;
                    var dataItem = this.buildDataFromIncludedOrData(resourceIdObj.id, resourceIdObj.type);
                    readyRelations[k2].push(this.buildModelByData(dataItem, resourceIdObj));
                }
            } else if (relation.data) {
                var dataItem = this.buildDataFromIncludedOrData(relation.data.id, relation.data.type);
                readyRelations[k2] = this.buildModelByData(dataItem, relation.data);
            } else if (relation.data === null) readyRelations[k2] = null;
            if (relation.links) {
                var setRelationshipLinks = this.pm.setRelationshipLinks;
                if (setRelationshipLinks) setRelationshipLinks(model, k2, relation.links);
            }
            if (relation.meta) {
                var setRelationshipMeta = this.pm.setRelationshipMeta;
                if (setRelationshipMeta) setRelationshipMeta(model, k2, relation.meta);
            }
        }
        if (Object.keys(readyRelations).length) return readyRelations;
        return null;
    };
    JsonDeserializer2.prototype.buildDataFromIncludedOrData = function(id, type) {
        if (this.preferNestedDataFromData) {
            var dataObject = this.buildDataInObject();
            var dataItemFromData = dataObject[type + id];
            if (dataItemFromData) return dataItemFromData;
        }
        var includedObject = this.buildIncludedInObject();
        var dataItemFromIncluded = includedObject[type + id];
        if (dataItemFromIncluded) return dataItemFromIncluded;
        if (!this.preferNestedDataFromData) {
            var dataObject = this.buildDataInObject();
            var dataItemFromData = dataObject[type + id];
            if (dataItemFromData) return dataItemFromData;
        }
        return {
            id,
            type
        };
    };
    JsonDeserializer2.prototype.buildDataInObject = function() {
        if (!this.dataInObject) {
            this.dataInObject = {};
            var data = this.body.data;
            var dataLength = data.length;
            if (data && dataLength) for(var i2 = 0; i2 < dataLength; i2++){
                var item = data[i2];
                this.dataInObject[item.type + item.id] = item;
            }
            else if (data) this.dataInObject[data.type + data.id] = data;
        }
        return this.dataInObject;
    };
    JsonDeserializer2.prototype.buildIncludedInObject = function() {
        if (!this.includedInObject) {
            this.includedInObject = {};
            if (this.body.included) {
                var includedLength = this.body.included.length;
                for(var i2 = 0; i2 < includedLength; i2++){
                    var item = this.body.included[i2];
                    this.includedInObject[item.type + item.id] = item;
                }
            }
        }
        return this.includedInObject;
    };
    return JsonDeserializer2;
}();
JsonDeserializer$1.JsonDeserializer = JsonDeserializer;
JsonDeserializer$1.default = JsonDeserializer;
var ReduxObjectDenormalizer$1 = {};
Object.defineProperty(ReduxObjectDenormalizer$1, "__esModule", {
    value: true
});
var ReduxObjectDenormalizer = function() {
    function ReduxObjectDenormalizer2(propertiesMapper) {
        this.cachedModels = {};
        this.setPropertiesMapper(propertiesMapper);
    }
    ReduxObjectDenormalizer2.prototype.setPropertiesMapper = function(propertiesMapper) {
        this.propertiesMapper = propertiesMapper;
    };
    ReduxObjectDenormalizer2.prototype.setReduxObject = function(reduxObject) {
        this.reduxObject = reduxObject;
    };
    ReduxObjectDenormalizer2.prototype.setEntityType = function(entityType) {
        this.entityType = entityType;
    };
    ReduxObjectDenormalizer2.prototype.setEntityIds = function(ids) {
        this.ids = ids;
    };
    ReduxObjectDenormalizer2.prototype.setReturnBuilderInRelations = function(returnBuilderInRelations) {
        this.returnBuilderInRelations = returnBuilderInRelations;
    };
    ReduxObjectDenormalizer2.prototype.build = function() {
        var _this = this;
        var _a2 = this, reduxObject = _a2.reduxObject, entityType = _a2.entityType, propertiesMapper = _a2.propertiesMapper;
        if (!propertiesMapper || typeof propertiesMapper !== "object") throw new Error("ReduxObjectDenormalizer cannot build, propertiesMapper is not set");
        else if (!reduxObject || typeof reduxObject !== "object") throw new Error("ReduxObjectDenormalizer cannot build, reduxObject is not set");
        else if (!entityType) throw new Error("ReduxObjectDenormalizer cannot build, entityType is not set");
        if (!reduxObject[entityType]) return null;
        var ids = this.ids;
        if (!ids) ids = Object.keys(reduxObject[entityType]);
        if (Array.isArray(ids)) {
            if (!ids.length) return null;
            var models_1 = [];
            ids.forEach(function(id) {
                var model = _this.buildModel(entityType, id);
                if (model) models_1.push(model);
            });
            return models_1;
        }
        return this.buildModel(entityType, ids);
    };
    ReduxObjectDenormalizer2.prototype.buildModel = function(type, id) {
        var reduxObject = this.reduxObject;
        if (!reduxObject[type]) return null;
        var reduxObjectModel = reduxObject[type][id];
        if (!reduxObjectModel) return null;
        var entityKey = type + "-" + id;
        var model = this.cachedModels[entityKey];
        if (!model) {
            model = this.propertiesMapper.createModel(type);
            if (model) {
                this.cachedModels[entityKey] = model;
                this.propertiesMapper.setId(model, reduxObjectModel.id);
                if (reduxObjectModel.attributes) this.propertiesMapper.setAttributes(model, reduxObjectModel.attributes);
                var relationships = this.buildRelationships(model, reduxObjectModel.relationships);
                if (relationships) this.propertiesMapper.setRelationships(model, relationships);
            }
        }
        return model;
    };
    ReduxObjectDenormalizer2.prototype.buildRelationships = function(model, reduxObjectRelationships) {
        var _this = this;
        if (!reduxObjectRelationships) return null;
        var relationNames = Object.keys(reduxObjectRelationships);
        if (!relationNames.length) return null;
        var relations = {};
        relationNames.forEach(function(relationName) {
            var relation = reduxObjectRelationships[relationName];
            if (relation && relation.data) {
                if (_this.returnBuilderInRelations) relations[relationName] = _this.buildRelationModels.bind(_this, relation.data);
                else relations[relationName] = _this.buildRelationModels(relation.data);
            }
            if (relation && relation.links) _this.propertiesMapper.setRelationshipLinks(model, relationName, relation.links);
            if (relation && relation.meta) {
                var setRelationshipMeta = _this.propertiesMapper.setRelationshipMeta;
                if (setRelationshipMeta) setRelationshipMeta(model, relationName, relation.meta);
            }
        });
        return Object.keys(relations).length ? relations : null;
    };
    ReduxObjectDenormalizer2.prototype.buildRelationModels = function(data) {
        var _this = this;
        if (Array.isArray(data)) {
            var relationModels_1 = [];
            data.forEach(function(dataItem) {
                var model = _this.buildModel(dataItem.type, dataItem.id);
                relationModels_1.push(model || dataItem);
            });
            return relationModels_1;
        } else if (data.id && data.type) return this.buildModel(data.type, data.id) || data;
        return null;
    };
    return ReduxObjectDenormalizer2;
}();
ReduxObjectDenormalizer$1.default = ReduxObjectDenormalizer;
var simplePropertyMappers = {};
(function(exports) {
    var __spreadArray2 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from2) {
        for(var i2 = 0, il = from2.length, j = to.length; i2 < il; i2++, j++)to[j] = from2[i2];
        return to;
    };
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.JsonPropertiesMapper = exports.defineRelationGetter = exports.ModelPropertiesMapper = exports.RELATIONSHIP_NAMES_PROP = void 0;
    exports.RELATIONSHIP_NAMES_PROP = "relationshipNames";
    var ModelPropertiesMapper = function() {
        function ModelPropertiesMapper2() {}
        ModelPropertiesMapper2.prototype.getId = function(model) {
            return model.id;
        };
        ModelPropertiesMapper2.prototype.getType = function(model) {
            return model.type;
        };
        ModelPropertiesMapper2.prototype.getAttributes = function(model) {
            var exceptProps = [
                "id",
                "type",
                exports.RELATIONSHIP_NAMES_PROP
            ];
            if (Array.isArray(model[exports.RELATIONSHIP_NAMES_PROP])) exceptProps.push.apply(exceptProps, model[exports.RELATIONSHIP_NAMES_PROP]);
            else if (model[exports.RELATIONSHIP_NAMES_PROP]) console.warn("Can't getAttributes correctly, '" + exports.RELATIONSHIP_NAMES_PROP + "' property of " + model.type + "-" + model.id + " model\n                isn't array of relationship names", model[exports.RELATIONSHIP_NAMES_PROP]);
            var attributes = {};
            Object.keys(model).forEach(function(attrName) {
                if (exceptProps.indexOf(attrName) === -1) attributes[attrName] = model[attrName];
            });
            return attributes;
        };
        ModelPropertiesMapper2.prototype.getRelationships = function(model) {
            var relationshipNames = model[exports.RELATIONSHIP_NAMES_PROP];
            if (!relationshipNames || Array.isArray(relationshipNames) && !relationshipNames.length) return;
            else if (relationshipNames && !Array.isArray(relationshipNames)) {
                console.warn("Can't getRelationships correctly,\n                '" + exports.RELATIONSHIP_NAMES_PROP + "' property of " + model.type + "-" + model.id + " model\n                isn't array of relationship names", model[exports.RELATIONSHIP_NAMES_PROP]);
                return;
            }
            var relationships = {};
            relationshipNames.forEach(function(relationName) {
                if (model[relationName] !== void 0) relationships[relationName] = model[relationName];
            });
            return relationships;
        };
        return ModelPropertiesMapper2;
    }();
    exports.ModelPropertiesMapper = ModelPropertiesMapper;
    function defineRelationGetter(model, relationName, buildRelation) {
        Object.defineProperty(model, relationName, {
            enumerable: true,
            configurable: true,
            set: function(value) {
                delete model[relationName];
                model[relationName] = value;
            },
            get: function() {
                delete model[relationName];
                return model[relationName] = buildRelation();
            }
        });
    }
    exports.defineRelationGetter = defineRelationGetter;
    var JsonPropertiesMapper = function() {
        function JsonPropertiesMapper2() {}
        JsonPropertiesMapper2.prototype.createModel = function(type) {
            return {
                type
            };
        };
        JsonPropertiesMapper2.prototype.setId = function(model, id) {
            model.id = id;
        };
        JsonPropertiesMapper2.prototype.setAttributes = function(model, attributes) {
            Object.keys(attributes).forEach(function(propName) {
                model[propName] = attributes[propName];
            });
        };
        JsonPropertiesMapper2.prototype.setMeta = function(model, meta) {
            model.meta = meta;
        };
        JsonPropertiesMapper2.prototype.setLinks = function(model, links) {
            model.links = links;
        };
        JsonPropertiesMapper2.prototype.setResourceIdObjMeta = function(model, meta) {
            model.resourceIdObjMeta = meta;
        };
        JsonPropertiesMapper2.prototype.setRelationships = function(model, relationships) {
            Object.keys(relationships).forEach(function(propName) {
                if (typeof relationships[propName] === "function") defineRelationGetter(model, propName, relationships[propName]);
                else model[propName] = relationships[propName];
            });
            var newNames = Object.keys(relationships);
            var currentNames = model[exports.RELATIONSHIP_NAMES_PROP];
            if (currentNames && currentNames.length) model[exports.RELATIONSHIP_NAMES_PROP] = __spreadArray2(__spreadArray2([], currentNames), newNames).filter(function(value, i2, self2) {
                return self2.indexOf(value) === i2;
            });
            else model[exports.RELATIONSHIP_NAMES_PROP] = newNames;
        };
        JsonPropertiesMapper2.prototype.setRelationshipLinks = function(parentModel, relationName, links) {};
        JsonPropertiesMapper2.prototype.setRelationshipMeta = function(parentModel, relationName, links) {};
        return JsonPropertiesMapper2;
    }();
    exports.JsonPropertiesMapper = JsonPropertiesMapper;
})(simplePropertyMappers);
var cache = {};
Object.defineProperty(cache, "__esModule", {
    value: true
});
cache.DeserializeCache = cache.jsonStringify = void 0;
function jsonStringify(json) {
    var stringified;
    try {
        stringified = JSON.stringify(json);
    } catch (e232) {
        stringified = "";
        console.warn(e232);
    }
    return stringified;
}
cache.jsonStringify = jsonStringify;
var DeserializeCache = function() {
    function DeserializeCache2() {
        this.cachedModels = {};
    }
    DeserializeCache2.prototype.getCachedModel = function(data) {
        var entityKey = this.createCacheKey(data);
        return this.cachedModels[entityKey] || null;
    };
    DeserializeCache2.prototype.handleModel = function(model, data) {
        var entityKey = this.createCacheKey(data);
        var dataWithPayload = data.attributes || data.relationships;
        if (entityKey && dataWithPayload) this.cachedModels[entityKey] = model;
    };
    DeserializeCache2.prototype.createCacheKey = function(data) {
        if (data.type && data.id && !data.meta) return data.type + "-" + data.id;
        if (data.type && data.id && data.meta) {
            var meta = jsonStringify(data.meta);
            return data.type + "-" + data.id + "-" + meta;
        }
        return "";
    };
    return DeserializeCache2;
}();
cache.DeserializeCache = DeserializeCache;
Object.defineProperty(Jsona$2, "__esModule", {
    value: true
});
var utils_1 = utils;
var ModelsSerializer_1 = ModelsSerializer$1;
var JsonDeserializer_1 = JsonDeserializer$1;
var ReduxObjectDenormalizer_1 = ReduxObjectDenormalizer$1;
var simplePropertyMappers_1$1 = simplePropertyMappers;
var cache_1 = cache;
var Jsona$1 = function() {
    function Jsona2(params) {
        this.modelPropertiesMapper = new simplePropertyMappers_1$1.ModelPropertiesMapper();
        this.jsonPropertiesMapper = new simplePropertyMappers_1$1.JsonPropertiesMapper();
        this.DeserializeCache = cache_1.DeserializeCache;
        this.ModelsSerializer = ModelsSerializer_1.default;
        this.JsonDeserializer = JsonDeserializer_1.default;
        if (params && params.modelPropertiesMapper) this.modelPropertiesMapper = params.modelPropertiesMapper;
        if (params && params.jsonPropertiesMapper) this.jsonPropertiesMapper = params.jsonPropertiesMapper;
        if (params && params.DeserializeCache) this.DeserializeCache = params.DeserializeCache;
        if (params && params.ModelsSerializer) this.ModelsSerializer = params.ModelsSerializer;
        if (params && params.JsonDeserializer) this.JsonDeserializer = params.JsonDeserializer;
    }
    Jsona2.prototype.serialize = function(_a2) {
        var stuff = _a2.stuff, includeNames = _a2.includeNames;
        if (!stuff) throw new Error("Jsona can not serialize, stuff is not passed");
        var jsonBuilder = new this.ModelsSerializer(this.modelPropertiesMapper);
        jsonBuilder.setStuff(stuff);
        if (includeNames) jsonBuilder.setIncludeNames(includeNames);
        return jsonBuilder.build();
    };
    Jsona2.prototype.deserialize = function(body, options) {
        if (!body) throw new Error("Jsona can not deserialize, body is not passed");
        var deserializeCache = new this.DeserializeCache();
        var modelBuilder = new this.JsonDeserializer(this.jsonPropertiesMapper, deserializeCache, options);
        if (typeof body === "string") modelBuilder.setJsonParsedObject(utils_1.jsonParse(body));
        else modelBuilder.setJsonParsedObject(body);
        return modelBuilder.build();
    };
    Jsona2.prototype.denormalizeReduxObject = function(_a2) {
        var reduxObject = _a2.reduxObject, entityType = _a2.entityType, entityIds = _a2.entityIds, _b = _a2.returnBuilderInRelations, returnBuilderInRelations = _b === void 0 ? false : _b;
        if (!reduxObject) throw new Error("Jsona can not denormalize ReduxObject, incorrect reduxObject passed");
        if (!entityType) throw new Error("Jsona can not denormalize ReduxObject, entityType is not passed");
        if (!reduxObject[entityType]) return null;
        var modelBuilder = new ReduxObjectDenormalizer_1.default(this.jsonPropertiesMapper);
        modelBuilder.setReduxObject(reduxObject);
        modelBuilder.setEntityType(entityType);
        modelBuilder.setReturnBuilderInRelations(returnBuilderInRelations);
        if (entityIds) modelBuilder.setEntityIds(Array.isArray(entityIds) ? entityIds : entityIds.toString());
        return modelBuilder.build();
    };
    return Jsona2;
}();
Jsona$2.default = Jsona$1;
var switchCasePropertyMappers = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics2 = function(d2, b2) {
        extendStatics2 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
        } || function(d3, b3) {
            for(var p2 in b3)if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
        };
        return extendStatics2(d2, b2);
    };
    return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null) throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics2(d2, b2);
        function __2() {
            this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
    };
}();
Object.defineProperty(switchCasePropertyMappers, "__esModule", {
    value: true
});
switchCasePropertyMappers.SwitchCaseJsonMapper = switchCasePropertyMappers.SwitchCaseModelMapper = void 0;
var simplePropertyMappers_1 = simplePropertyMappers;
var SwitchCaseModelMapper = function(_super) {
    __extends(SwitchCaseModelMapper2, _super);
    function SwitchCaseModelMapper2(options) {
        var _this = _super.call(this) || this;
        var _a2 = options || {}, _b = _a2.switchAttributes, switchAttributes = _b === void 0 ? true : _b, _c = _a2.switchRelationships, switchRelationships = _c === void 0 ? true : _c, _d = _a2.switchType, switchType = _d === void 0 ? true : _d, _e = _a2.switchChar, switchChar = _e === void 0 ? "-" : _e;
        _this.switchAttributes = switchAttributes;
        _this.switchRelationships = switchRelationships;
        _this.switchType = switchType;
        _this.switchChar = switchChar;
        return _this;
    }
    SwitchCaseModelMapper2.prototype.getType = function(model) {
        var _this = this;
        var type = _super.prototype.getType.call(this, model);
        if (!this.switchType || !type) return type;
        return type.replace(/([a-z][A-Z0-9])/g, function(g2) {
            return g2[0] + _this.switchChar + g2[1].toLowerCase();
        });
    };
    SwitchCaseModelMapper2.prototype.getAttributes = function(model) {
        var _this = this;
        var camelCasedAttributes = _super.prototype.getAttributes.call(this, model);
        if (!this.switchAttributes || !camelCasedAttributes) return camelCasedAttributes;
        var kebabAttributes = {};
        Object.keys(camelCasedAttributes).forEach(function(name) {
            var kebabName = name.replace(/([a-z][A-Z0-9])/g, function(g2) {
                return g2[0] + _this.switchChar + g2[1].toLowerCase();
            });
            kebabAttributes[kebabName] = camelCasedAttributes[name];
        });
        return kebabAttributes;
    };
    SwitchCaseModelMapper2.prototype.getRelationships = function(model) {
        var _this = this;
        var camelCasedRelationships = _super.prototype.getRelationships.call(this, model);
        if (!this.switchRelationships || !camelCasedRelationships) return camelCasedRelationships;
        var kebabRelationships = {};
        Object.keys(camelCasedRelationships).forEach(function(name) {
            var kebabName = name.replace(/([a-z][A-Z0-9])/g, function(g2) {
                return g2[0] + _this.switchChar + g2[1].toLowerCase();
            });
            kebabRelationships[kebabName] = camelCasedRelationships[name];
        });
        return kebabRelationships;
    };
    return SwitchCaseModelMapper2;
}(simplePropertyMappers_1.ModelPropertiesMapper);
switchCasePropertyMappers.SwitchCaseModelMapper = SwitchCaseModelMapper;
var SwitchCaseJsonMapper = function(_super) {
    __extends(SwitchCaseJsonMapper2, _super);
    function SwitchCaseJsonMapper2(options) {
        var _this = _super.call(this) || this;
        var _a2 = options || {}, _b = _a2.camelizeAttributes, camelizeAttributes = _b === void 0 ? true : _b, _c = _a2.camelizeRelationships, camelizeRelationships = _c === void 0 ? true : _c, _d = _a2.camelizeType, camelizeType = _d === void 0 ? true : _d, _e = _a2.camelizeMeta, camelizeMeta = _e === void 0 ? false : _e, _f = _a2.switchChar, switchChar = _f === void 0 ? "-" : _f;
        _this.camelizeAttributes = camelizeAttributes;
        _this.camelizeRelationships = camelizeRelationships;
        _this.camelizeType = camelizeType;
        _this.camelizeMeta = camelizeMeta;
        _this.switchChar = switchChar;
        return _this;
    }
    SwitchCaseJsonMapper2.prototype.createModel = function(type) {
        if (!this.camelizeType) return {
            type
        };
        var regex = new RegExp(this.switchChar + "([a-z0-9])", "g");
        var camelizedType = type.replace(regex, function(g2) {
            return g2[1].toUpperCase();
        });
        return {
            type: camelizedType
        };
    };
    SwitchCaseJsonMapper2.prototype.setAttributes = function(model, attributes) {
        var _this = this;
        if (!this.camelizeAttributes) return _super.prototype.setAttributes.call(this, model, attributes);
        Object.keys(attributes).forEach(function(propName) {
            var regex = new RegExp(_this.switchChar + "([a-z0-9])", "g");
            var camelName = propName.replace(regex, function(g2) {
                return g2[1].toUpperCase();
            });
            model[camelName] = attributes[propName];
        });
    };
    SwitchCaseJsonMapper2.prototype.setMeta = function(model, meta) {
        var _this = this;
        if (!this.camelizeMeta) return _super.prototype.setMeta.call(this, model, meta);
        model.meta = {};
        Object.keys(meta).forEach(function(propName) {
            var regex = new RegExp(_this.switchChar + "([a-z0-9])", "g");
            var camelName = propName.replace(regex, function(g2) {
                return g2[1].toUpperCase();
            });
            model.meta[camelName] = meta[propName];
        });
    };
    SwitchCaseJsonMapper2.prototype.setRelationships = function(model, relationships) {
        var _this = this;
        _super.prototype.setRelationships.call(this, model, relationships);
        if (!this.camelizeRelationships) return;
        model[simplePropertyMappers_1.RELATIONSHIP_NAMES_PROP].forEach(function(kebabName, i2) {
            var regex = new RegExp(_this.switchChar + "([a-z0-9])", "g");
            var camelName = kebabName.replace(regex, function(g2) {
                return g2[1].toUpperCase();
            });
            if (camelName !== kebabName) {
                model[camelName] = model[kebabName];
                delete model[kebabName];
                model[simplePropertyMappers_1.RELATIONSHIP_NAMES_PROP][i2] = camelName;
            }
        });
    };
    return SwitchCaseJsonMapper2;
}(simplePropertyMappers_1.JsonPropertiesMapper);
switchCasePropertyMappers.SwitchCaseJsonMapper = SwitchCaseJsonMapper;
(function(exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SwitchCaseJsonMapper = exports.SwitchCaseModelMapper = exports.JsonPropertiesMapper = exports.ModelPropertiesMapper = exports.JsonDeserializer = exports.ModelsSerializer = exports.Jsona = void 0;
    var Jsona_1 = Jsona$2;
    exports.Jsona = Jsona_1.default;
    var ModelsSerializer_12 = ModelsSerializer$1;
    exports.ModelsSerializer = ModelsSerializer_12.default;
    var JsonDeserializer_12 = JsonDeserializer$1;
    exports.JsonDeserializer = JsonDeserializer_12.default;
    var simplePropertyMappers_12 = simplePropertyMappers;
    Object.defineProperty(exports, "ModelPropertiesMapper", {
        enumerable: true,
        get: function() {
            return simplePropertyMappers_12.ModelPropertiesMapper;
        }
    });
    Object.defineProperty(exports, "JsonPropertiesMapper", {
        enumerable: true,
        get: function() {
            return simplePropertyMappers_12.JsonPropertiesMapper;
        }
    });
    var switchCasePropertyMappers_1 = switchCasePropertyMappers;
    Object.defineProperty(exports, "SwitchCaseModelMapper", {
        enumerable: true,
        get: function() {
            return switchCasePropertyMappers_1.SwitchCaseModelMapper;
        }
    });
    Object.defineProperty(exports, "SwitchCaseJsonMapper", {
        enumerable: true,
        get: function() {
            return switchCasePropertyMappers_1.SwitchCaseJsonMapper;
        }
    });
    exports.default = Jsona_1.default;
})(lib$1);
var Jsona = /* @__PURE__ */ getDefaultExportFromCjs(lib$1);
var lib = {};
Object.defineProperty(lib, "__esModule", {
    value: true
});
var DrupalJsonApiParams_1 = lib.DrupalJsonApiParams = void 0;
const qs = lib$2;
class DrupalJsonApiParams {
    constructor(input){
        this.data = {
            filter: {},
            include: [],
            page: void 0,
            sort: [],
            fields: {}
        };
        this.initialize(input);
    }
    addCustomParam(input) {
        this.data = Object.assign(Object.assign({}, this.data), input);
    }
    addFields(type, fields) {
        this.data.fields[type] = fields.join(",");
        return this;
    }
    addSort(path, direction) {
        let prefix = "";
        if (direction !== void 0 && direction === "DESC") prefix = "-";
        this.data.sort = this.data.sort.concat(prefix + path);
        return this;
    }
    addPageLimit(limit) {
        this.data.page = {
            limit
        };
        return this;
    }
    addInclude(fields) {
        this.data.include = this.data.include.concat(fields);
        return this;
    }
    addGroup(name, conjunction = "OR", memberOf) {
        this.data.filter[name] = {
            group: Object.assign({
                conjunction
            }, memberOf !== void 0 && {
                memberOf
            })
        };
        return this;
    }
    addFilter(path, value, operator = "=", memberOf) {
        const name = this.getIndexId(this.data.filter, path);
        if (value === null) {
            if (!(operator === "IS NULL" || operator === "IS NOT NULL")) throw new TypeError(`Value cannot be null for the operator "${operator}"`);
            this.data.filter[name] = {
                condition: Object.assign(Object.assign({
                    path
                }, {
                    operator
                }), memberOf !== void 0 && {
                    memberOf
                })
            };
            return this;
        }
        if (Array.isArray(value)) {
            switch(operator){
                case "BETWEEN":
                case "NOT BETWEEN":
                    if (value.length !== 2) throw new TypeError(`Value must consists of 2 items for the "${operator}"`);
                    break;
                case "IN":
                case "NOT IN":
                    break;
                default:
                    throw new TypeError(`Value cannot be an array for the operator "${operator}"`);
            }
            this.data.filter[name] = {
                condition: Object.assign(Object.assign({
                    path,
                    value
                }, {
                    operator
                }), memberOf !== void 0 && {
                    memberOf
                })
            };
            return this;
        }
        if (operator === "=" && memberOf === void 0 && this.data.filter[path] === void 0) {
            this.data.filter[path] = value;
            return this;
        }
        this.data.filter[name] = {
            condition: Object.assign(Object.assign({
                path,
                value
            }, operator !== "=" && {
                operator
            }), memberOf !== void 0 && {
                memberOf
            })
        };
        return this;
    }
    getIndexId(obj, proposedKey) {
        let key;
        if (obj[proposedKey] === void 0) key = proposedKey;
        else key = Object.keys(obj).length.toString();
        return key;
    }
    getQueryObject() {
        const foo = JSON.parse(JSON.stringify(this.data));
        if (!!this.data.include.length) foo.include = this.data.include.join(",");
        if (!!this.data.sort.length) foo.sort = this.data.sort.join(",");
        return foo;
    }
    getQueryString(options) {
        const data = this.getQueryObject();
        return qs.stringify(data, options);
    }
    clear() {
        this.data = {
            filter: {},
            include: [],
            page: void 0,
            sort: [],
            fields: {}
        };
        return this;
    }
    initializeWithQueryObject(input) {
        this.clear();
        const keys = Object.keys(input);
        keys.forEach((key)=>{
            switch(key){
                case "sort":
                    if (input.sort.length) this.data.sort = input.sort.split(",");
                    break;
                case "include":
                    if (input.include.length) this.data.include = input.include.split(",");
                    break;
                default:
                    this.data[key] = input[key];
            }
        });
        return this;
    }
    initializeWithQueryString(input) {
        this.clear();
        this.initializeWithQueryObject(qs.parse(input));
        return this;
    }
    clone(input) {
        const data = JSON.parse(JSON.stringify(input.getQueryObject()));
        this.initializeWithQueryObject(data);
        return this;
    }
    initialize(input) {
        if (input === void 0) this.initializeWithQueryString("");
        else if (typeof input === "object") try {
            input.getQueryObject();
            this.clone(input);
        } catch (error) {
            this.initializeWithQueryObject(input);
        }
        else this.initializeWithQueryString(input);
        return this;
    }
}
DrupalJsonApiParams_1 = lib.DrupalJsonApiParams = DrupalJsonApiParams;
var humps = {
    exports: {}
};
(function(module2) {
    (function(global2) {
        var _processKeys = function(convert, obj, options) {
            if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) return obj;
            var output, i2 = 0, l2 = 0;
            if (_isArray(obj)) {
                output = [];
                for(l2 = obj.length; i2 < l2; i2++)output.push(_processKeys(convert, obj[i2], options));
            } else {
                output = {};
                for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) output[convert(key, options)] = _processKeys(convert, obj[key], options);
            }
            return output;
        };
        var separateWords = function(string, options) {
            options = options || {};
            var separator = options.separator || "_";
            var split2 = options.split || /(?=[A-Z])/;
            return string.split(split2).join(separator);
        };
        var camelize = function(string) {
            if (_isNumerical(string)) return string;
            string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
                return chr ? chr.toUpperCase() : "";
            });
            return string.substr(0, 1).toLowerCase() + string.substr(1);
        };
        var pascalize = function(string) {
            var camelized = camelize(string);
            return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
        };
        var decamelize = function(string, options) {
            return separateWords(string, options).toLowerCase();
        };
        var toString2 = Object.prototype.toString;
        var _isFunction = function(obj) {
            return typeof obj === "function";
        };
        var _isObject = function(obj) {
            return obj === Object(obj);
        };
        var _isArray = function(obj) {
            return toString2.call(obj) == "[object Array]";
        };
        var _isDate = function(obj) {
            return toString2.call(obj) == "[object Date]";
        };
        var _isRegExp = function(obj) {
            return toString2.call(obj) == "[object RegExp]";
        };
        var _isBoolean = function(obj) {
            return toString2.call(obj) == "[object Boolean]";
        };
        var _isNumerical = function(obj) {
            obj = obj - 0;
            return obj === obj;
        };
        var _processor = function(convert, options) {
            var callback = options && "process" in options ? options.process : options;
            if (typeof callback !== "function") return convert;
            return function(string, options2) {
                return callback(string, convert, options2);
            };
        };
        var humps2 = {
            camelize,
            decamelize,
            pascalize,
            depascalize: decamelize,
            camelizeKeys: function(object, options) {
                return _processKeys(_processor(camelize, options), object);
            },
            decamelizeKeys: function(object, options) {
                return _processKeys(_processor(decamelize, options), object, options);
            },
            pascalizeKeys: function(object, options) {
                return _processKeys(_processor(pascalize, options), object);
            },
            depascalizeKeys: function() {
                return this.decamelizeKeys.apply(this, arguments);
            }
        };
        if (module2.exports) module2.exports = humps2;
        else global2.humps = humps2;
    })(commonjsGlobal);
})(humps);
var isMergeableObject = function isMergeableObject2(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) return deepmerge;
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_2) {
        return false;
    }
}
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) return;
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
    else if (sourceIsArray) return options.arrayMerge(target, source, options);
    else return mergeObject(target, source, options);
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) throw new Error("first argument should be an array");
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
var global$1 = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global$1 !== "undefined" && global$1;
var support = {
    searchParams: "URLSearchParams" in global$1,
    iterable: "Symbol" in global$1 && "iterator" in Symbol,
    blob: "FileReader" in global$1 && "Blob" in global$1 && function() {
        try {
            new Blob();
            return true;
        } catch (e2) {
            return false;
        }
    }(),
    formData: "FormData" in global$1,
    arrayBuffer: "ArrayBuffer" in global$1
};
function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
    var viewClasses = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
}
function normalizeName(name) {
    if (typeof name !== "string") name = String(name);
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") throw new TypeError('Invalid character in header field name: "' + name + '"');
    return name.toLowerCase();
}
function normalizeValue(value) {
    if (typeof value !== "string") value = String(value);
    return value;
}
function iteratorFor(items) {
    var iterator = {
        next: function() {
            var value = items.shift();
            return {
                done: value === void 0,
                value
            };
        }
    };
    if (support.iterable) iterator[Symbol.iterator] = function() {
        return iterator;
    };
    return iterator;
}
function Headers$1(headers) {
    this.map = {};
    if (headers instanceof Headers$1) headers.forEach(function(value, name) {
        this.append(name, value);
    }, this);
    else if (Array.isArray(headers)) headers.forEach(function(header) {
        this.append(header[0], header[1]);
    }, this);
    else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
    }, this);
}
Headers$1.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers$1.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
};
Headers$1.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
};
Headers$1.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
};
Headers$1.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
};
Headers$1.prototype.forEach = function(callback, thisArg) {
    for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
};
Headers$1.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push(name);
    });
    return iteratorFor(items);
};
Headers$1.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
        items.push(value);
    });
    return iteratorFor(items);
};
Headers$1.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push([
            name,
            value
        ]);
    });
    return iteratorFor(items);
};
if (support.iterable) Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
function consumed(body) {
    if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
    body.bodyUsed = true;
}
function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = function() {
            reject(reader.error);
        };
    });
}
function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
}
function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
}
function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for(var i2 = 0; i2 < view.length; i2++)chars[i2] = String.fromCharCode(view[i2]);
    return chars.join("");
}
function bufferClone(buf) {
    if (buf.slice) return buf.slice(0);
    else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
    }
}
function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) this._bodyText = "";
        else if (typeof body === "string") this._bodyText = body;
        else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
        else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
        else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
        else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([
                this._bodyArrayBuffer
            ]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
        else this._bodyText = body = Object.prototype.toString.call(body);
        if (!this.headers.get("content-type")) {
            if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
            else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
    };
    if (support.blob) {
        this.blob = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                this._bodyArrayBuffer
            ]));
            else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            else return Promise.resolve(new Blob([
                this._bodyText
            ]));
        };
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                if (isConsumed) return isConsumed;
                if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
                else return Promise.resolve(this._bodyArrayBuffer);
            } else return this.blob().then(readBlobAsArrayBuffer);
        };
    }
    this.text = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
        else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        else if (this._bodyFormData) throw new Error("could not read FormData body as text");
        else return Promise.resolve(this._bodyText);
    };
    if (support.formData) this.formData = function() {
        return this.text().then(decode);
    };
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
var methods = [
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT"
];
function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
    if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
        if (input.bodyUsed) throw new TypeError("Already read");
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) this.headers = new Headers$1(input.headers);
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
        }
    } else this.url = String(input);
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) this.headers = new Headers$1(options.headers);
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(body);
    if (this.method === "GET" || this.method === "HEAD") {
        if (options.cache === "no-store" || options.cache === "no-cache") {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
        }
    }
}
Request.prototype.clone = function() {
    return new Request(this, {
        body: this._bodyInit
    });
};
function decode(body) {
    var form = new FormData();
    body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
            var split2 = bytes.split("=");
            var name = split2.shift().replace(/\+/g, " ");
            var value = split2.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
    });
    return form;
}
function parseHeaders(rawHeaders) {
    var headers = new Headers$1();
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split("\r").map(function(header) {
        return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
    }).forEach(function(line) {
        var parts = line.split(":");
        var key = parts.shift().trim();
        if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
        }
    });
    return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
    if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    if (!options) options = {};
    this.type = "default";
    this.status = options.status === void 0 ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
    this.headers = new Headers$1(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers$1(this.headers),
        url: this.url
    });
};
Response.error = function() {
    var response = new Response(null, {
        status: 0,
        statusText: ""
    });
    response.type = "error";
    return response;
};
var redirectStatuses = [
    301,
    302,
    303,
    307,
    308
];
Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
    return new Response(null, {
        status,
        headers: {
            location: url
        }
    });
};
var DOMException = global$1.DOMException;
try {
    new DOMException();
} catch (err) {
    DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
}
function fetch$1(input, init) {
    return new Promise(function(resolve, reject) {
        var request = new Request(input, init);
        if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
        var xhr = new XMLHttpRequest();
        function abortXhr() {
            xhr.abort();
        }
        xhr.onload = function() {
            var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
                resolve(new Response(body, options));
            }, 0);
        };
        xhr.onerror = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.ontimeout = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.onabort = function() {
            setTimeout(function() {
                reject(new DOMException("Aborted", "AbortError"));
            }, 0);
        };
        function fixUrl(url) {
            try {
                return url === "" && global$1.location.href ? global$1.location.href : url;
            } catch (e2) {
                return url;
            }
        }
        xhr.open(request.method, fixUrl(request.url), true);
        if (request.credentials === "include") xhr.withCredentials = true;
        else if (request.credentials === "omit") xhr.withCredentials = false;
        if ("responseType" in xhr) {
            if (support.blob) xhr.responseType = "blob";
            else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) xhr.responseType = "arraybuffer";
        }
        if (init && typeof init.headers === "object" && !(init.headers instanceof Headers$1)) Object.getOwnPropertyNames(init.headers).forEach(function(name) {
            xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        else request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
        });
        if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
            };
        }
        xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
    });
}
fetch$1.polyfill = true;
if (!global$1.fetch) {
    global$1.fetch = fetch$1;
    global$1.Headers = Headers$1;
    global$1.Request = Request;
    global$1.Response = Response;
}
var fetchNpmBrowserify = self.fetch.bind(self);
var _templateObject;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i2 = 1; i2 < arguments.length; i2++){
        var source = arguments[i2] != null ? arguments[i2] : {};
        i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
    } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i2 = 0; i2 < props.length; i2++){
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err2) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err2);
            }
            _next(void 0);
        });
    };
}
var defaultFetch = function defaultFetch2(apiUrl) {
    var requestInit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fetchNpmBrowserify(apiUrl, requestInit);
};
var _fetchApiIndex = function fetchApiIndex(apiRoot) {
    var fetch2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultFetch;
    var apiIndex = fetch2(apiRoot).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data.links || false;
    })["catch"](function(error) {
        return console.error("API index fetch failed", error);
    });
    return apiIndex;
};
var _fetchJsonapiEndpoint = function fetchJsonapiEndpoint(apiUrl) {
    var requestInit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _res = arguments.length > 2 ? arguments[2] : void 0;
    var fetch2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : defaultFetch;
    var collection = fetch2(apiUrl, requestInit, _res).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data;
    })["catch"](function(error) {
        return console.error("JSON:API fetch failed", error);
    });
    return collection;
};
var translatePath = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(apiUrl, path) {
        var requestInit, _res, fetch2, response, _args = arguments;
        return regenerator.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    requestInit = _args.length > 2 && _args[2] !== void 0 ? _args[2] : {};
                    _res = _args.length > 3 && _args[3] !== void 0 ? _args[3] : false;
                    fetch2 = _args.length > 4 && _args[4] !== void 0 ? _args[4] : defaultFetch;
                    _context.next = 5;
                    return _fetchJsonapiEndpoint(apiUrl + "?path=" + path + "&_format=json", requestInit, _res, fetch2);
                case 5:
                    response = _context.sent;
                    return _context.abrupt("return", response);
                case 7:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return function translatePath2(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
var fetchToken = function fetchToken2(apiUrl, tokenFetchBody) {
    var fetch2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultFetch;
    var body = Object.keys(tokenFetchBody).map(function(key) {
        return "".concat(key, "=").concat(tokenFetchBody[key]);
    }).join("&");
    var tokenPayload = fetch2(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data;
    })["catch"](function(error) {
        return console.error("Token fetch failed", error);
    });
    return tokenPayload;
};
var DrupalState = /* @__PURE__ */ function() {
    function DrupalState2(_ref2) {
        var apiBase = _ref2.apiBase, _ref2$apiPrefix = _ref2.apiPrefix, apiPrefix = _ref2$apiPrefix === void 0 ? "jsonapi" : _ref2$apiPrefix, defaultLocale = _ref2.defaultLocale, clientId = _ref2.clientId, clientSecret = _ref2.clientSecret, _ref2$fetchAdapter = _ref2.fetchAdapter, fetchAdapter = _ref2$fetchAdapter === void 0 ? defaultFetch : _ref2$fetchAdapter, _ref2$debug = _ref2.debug, debug = _ref2$debug === void 0 ? false : _ref2$debug;
        _classCallCheck(this, DrupalState2);
        _defineProperty(this, "apiBase", void 0);
        _defineProperty(this, "apiPrefix", void 0);
        _defineProperty(this, "defaultLocale", void 0);
        _defineProperty(this, "apiRoot", void 0);
        _defineProperty(this, "clientId", void 0);
        _defineProperty(this, "clientSecret", void 0);
        _defineProperty(this, "fetchAdapter", void 0);
        _defineProperty(this, "auth", void 0);
        _defineProperty(this, "token", {
            accessToken: "",
            validUntil: 0,
            tokenType: ""
        });
        _defineProperty(this, "debug", void 0);
        _defineProperty(this, "store", void 0);
        _defineProperty(this, "getState", void 0);
        _defineProperty(this, "setState", void 0);
        _defineProperty(this, "subscribe", void 0);
        _defineProperty(this, "destroy", void 0);
        _defineProperty(this, "client", void 0);
        _defineProperty(this, "dataFormatter", void 0);
        _defineProperty(this, "params", void 0);
        this.apiBase = apiBase;
        this.apiPrefix = apiPrefix;
        this.defaultLocale = defaultLocale;
        this.apiRoot = this.assembleApiRoot();
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.auth = this.clientId && this.clientSecret ? true : false;
        this.fetchAdapter = fetchAdapter;
        this.debug = debug;
        this.dataFormatter = new Jsona();
        this.params = new DrupalJsonApiParams_1();
        !this.debug || console.log("Debug mode:", debug);
        this.store = createStore(function() {
            return {};
        });
        var _this$store = this.store, getState = _this$store.getState, setState = _this$store.setState, subscribe = _this$store.subscribe, destroy = _this$store.destroy;
        this.getState = getState;
        this.setState = setState;
        this.subscribe = subscribe;
        this.destroy = destroy;
        var jsonApiLink = new JsonApiLink({
            uri: this.apiRoot,
            customFetch: this.fetchAdapter
        });
        this.client = new ApolloClient({
            link: jsonApiLink,
            cache: new InMemoryCache()
        });
    }
    _createClass(DrupalState2, [
        {
            key: "assembleApiRoot",
            value: function assembleApiRoot() {
                this.apiBase = this.apiBase.replace(/\/\s*$/, "");
                this.apiPrefix = this.apiPrefix.replace(/^\s*\//, "");
                this.apiPrefix = this.apiPrefix.slice(-1) === "/" ? this.apiPrefix : "".concat(this.apiPrefix, "/");
                if (this.defaultLocale) return "".concat(this.apiBase, "/").concat(this.defaultLocale, "/").concat(this.apiPrefix);
                else return "".concat(this.apiBase, "/").concat(this.apiPrefix);
            }
        },
        {
            key: "assembleEndpoint",
            value: function assembleEndpoint(objectName, index) {
                var id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                var query = arguments.length > 3 ? arguments[3] : void 0;
                var endpoint = "";
                if (index === void 0 || _typeof(index) === void 0) throw new Error("Error: The following index is not a string. Check the object name, id and, apiBase:\n	 index: ".concat(JSON.stringify(index), "\n	 id: ").concat(id, "\n	 objectName: ").concat(objectName));
                else if (typeof index === "string") endpoint = index;
                else endpoint = index.href;
                if (id) endpoint += "/".concat(id);
                if (query) {
                    endpoint = endpoint.replace("".concat(this.apiBase).concat("/".concat(this.defaultLocale) || "", "/").concat(this.apiPrefix), "");
                    var fields = [];
                    var gqlObject = gql(query);
                    gqlObject.definitions.forEach(function(definition) {
                        var iterableDefinitions = definition;
                        iterableDefinitions.selectionSet.selections.forEach(function(selection) {
                            if (selection.kind === "Field") fields.push(selection.name.value);
                        });
                    });
                    this.params.addFields(objectName, fields);
                    endpoint = endpoint.replace(this.apiRoot, "");
                }
                if (this.params.getQueryString()) endpoint += "?".concat(this.params.getQueryString());
                return endpoint;
            }
        },
        {
            key: "getAuthHeader",
            value: function() {
                var _getAuthHeader = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2() {
                    var tokenRequestBody, tokenResponse;
                    return regenerator.wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                if (!(this.token.validUntil - 10000 > Date.now())) {
                                    _context2.next = 4;
                                    break;
                                }
                                !this.debug || console.log("Using existing auth token");
                                _context2.next = 10;
                                break;
                            case 4:
                                !this.debug || console.log("Fetching new auth token");
                                tokenRequestBody = {
                                    grant_type: "client_credentials",
                                    client_id: this.clientId,
                                    client_secret: this.clientSecret
                                };
                                _context2.next = 8;
                                return fetchToken("".concat(this.apiBase, "/oauth/token"), tokenRequestBody, this.fetchAdapter);
                            case 8:
                                tokenResponse = _context2.sent;
                                this.token = {
                                    accessToken: tokenResponse.access_token,
                                    validUntil: Date.now() + tokenResponse.expires_in * 1e3,
                                    tokenType: tokenResponse.token_type
                                };
                            case 10:
                                return _context2.abrupt("return", "".concat(this.token.tokenType, " ").concat(this.token.accessToken));
                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function getAuthHeader() {
                    return _getAuthHeader.apply(this, arguments);
                }
                return getAuthHeader;
            }()
        },
        {
            key: "fetchApiIndex",
            value: function() {
                var _fetchApiIndex2 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee3(apiRoot) {
                    return regenerator.wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.next = 2;
                                return _fetchApiIndex(apiRoot, this.fetchAdapter);
                            case 2:
                                return _context3.abrupt("return", _context3.sent);
                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3, this);
                }));
                function fetchApiIndex2(_x3) {
                    return _fetchApiIndex2.apply(this, arguments);
                }
                return fetchApiIndex2;
            }()
        },
        {
            key: "fetchJsonapiEndpoint",
            value: function() {
                var _fetchJsonapiEndpoint2 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee4(endpoint) {
                    var requestInit, res, _args4 = arguments;
                    return regenerator.wrap(function _callee4$(_context4) {
                        while(true)switch(_context4.prev = _context4.next){
                            case 0:
                                requestInit = _args4.length > 1 && _args4[1] !== void 0 ? _args4[1] : {};
                                res = _args4.length > 2 ? _args4[2] : void 0;
                                _context4.next = 4;
                                return _fetchJsonapiEndpoint(endpoint, requestInit, res, this.fetchAdapter);
                            case 4:
                                return _context4.abrupt("return", _context4.sent);
                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }, _callee4, this);
                }));
                function fetchJsonapiEndpoint2(_x4) {
                    return _fetchJsonapiEndpoint2.apply(this, arguments);
                }
                return fetchJsonapiEndpoint2;
            }()
        },
        {
            key: "conditionalFetch",
            value: function() {
                var _conditionalFetch = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee5(endpoint) {
                    var query, objectName, res, requestInit, authHeader, headers, queryObjectName, gqlQuery, response, data, object, result, _args5 = arguments;
                    return regenerator.wrap(function _callee5$(_context5) {
                        while(true)switch(_context5.prev = _context5.next){
                            case 0:
                                query = _args5.length > 1 && _args5[1] !== void 0 ? _args5[1] : false;
                                objectName = _args5.length > 2 && _args5[2] !== void 0 ? _args5[2] : false;
                                res = _args5.length > 3 && _args5[3] !== void 0 ? _args5[3] : false;
                                requestInit = {};
                                authHeader = "";
                                if (!(this.clientId && this.clientSecret)) {
                                    _context5.next = 12;
                                    break;
                                }
                                headers = new Headers();
                                _context5.next = 9;
                                return this.getAuthHeader();
                            case 9:
                                authHeader = _context5.sent;
                                headers.append("Authorization", authHeader);
                                requestInit = {
                                    headers
                                };
                            case 12:
                                if (!query) {
                                    _context5.next = 31;
                                    break;
                                }
                                _context5.prev = 13;
                                this.client.link.headers = {
                                    Authorization: authHeader
                                };
                                queryObjectName = humps.exports.camelize(objectName);
                                gqlQuery = gql(_templateObject || (_templateObject = _taggedTemplateLiteral([
                                    "{\n              ",
                                    ' @jsonapi(path: "',
                                    '", includeJsonapi: true)\n                {\n                  jsonapi\n                  graphql\n                  ',
                                    "\n                }\n              }"
                                ])), queryObjectName, endpoint, query);
                                _context5.next = 19;
                                return this.client.query({
                                    query: gqlQuery
                                });
                            case 19:
                                response = _context5.sent;
                                data = response.data;
                                object = data[queryObjectName];
                                result = {
                                    data: object.jsonapi.data,
                                    graphql: object.graphql,
                                    links: object.jsonapi.links
                                };
                                return _context5.abrupt("return", new Promise(function(resolve, reject) {
                                    resolve(result);
                                    if (response.errors || response.error) reject(response.errors || response.error);
                                }));
                            case 26:
                                _context5.prev = 26;
                                _context5.t0 = _context5["catch"](13);
                                if (_context5.t0 instanceof ApolloError) _context5.t0.graphQLErrors.forEach(function(e233, i2) {
                                    return console.error("Error ".concat(i2 + 1, ": ").concat(JSON.stringify(e233, null, 2)));
                                });
                                else console.error(_context5.t0);
                            case 29:
                                _context5.next = 34;
                                break;
                            case 31:
                                _context5.next = 33;
                                return this.fetchJsonapiEndpoint(endpoint, requestInit, res);
                            case 33:
                                return _context5.abrupt("return", _context5.sent);
                            case 34:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this, [
                        [
                            13,
                            26
                        ]
                    ]);
                }));
                function conditionalFetch(_x5) {
                    return _conditionalFetch.apply(this, arguments);
                }
                return conditionalFetch;
            }()
        },
        {
            key: "getApiIndex",
            value: function() {
                var _getApiIndex = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee6() {
                    var state, dsApiIndex, dsApiIndexData, updatedState;
                    return regenerator.wrap(function _callee6$(_context6) {
                        while(true)switch(_context6.prev = _context6.next){
                            case 0:
                                state = this.getState();
                                dsApiIndex = state.dsApiIndex;
                                if (dsApiIndex) {
                                    _context6.next = 9;
                                    break;
                                }
                                _context6.next = 5;
                                return this.fetchApiIndex(this.apiRoot);
                            case 5:
                                dsApiIndexData = _context6.sent;
                                this.setState({
                                    dsApiIndex: dsApiIndexData
                                });
                                updatedState = this.getState();
                                return _context6.abrupt("return", updatedState.dsApiIndex);
                            case 9:
                                return _context6.abrupt("return", dsApiIndex);
                            case 10:
                            case "end":
                                return _context6.stop();
                        }
                    }, _callee6, this);
                }));
                function getApiIndex() {
                    return _getApiIndex.apply(this, arguments);
                }
                return getApiIndex;
            }()
        },
        {
            key: "getObjectByPath",
            value: function() {
                var _getObjectByPath = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee7(_ref3) {
                    var objectName, path, res, _ref3$query, query, currentState, dsPathTranslations, requestInit, authHeader, headers, response, pathTranslationsState, updatedPathTranslationState, newPathTranslationState, updatedState, pathTranslations, id, object;
                    return regenerator.wrap(function _callee7$(_context7) {
                        while(true)switch(_context7.prev = _context7.next){
                            case 0:
                                objectName = _ref3.objectName, path = _ref3.path, res = _ref3.res, _ref3$query = _ref3.query, query = _ref3$query === void 0 ? false : _ref3$query;
                                currentState = this.getState();
                                dsPathTranslations = currentState.dsPathTranslations;
                                if (dsPathTranslations !== null && dsPathTranslations !== void 0 && dsPathTranslations["".concat(path)]) {
                                    _context7.next = 18;
                                    break;
                                }
                                !this.debug || console.log("No match for ".concat(path, " in dsPathTranslations - calling translatePath."));
                                requestInit = {};
                                authHeader = "";
                                if (!(this.clientId && this.clientSecret)) {
                                    _context7.next = 14;
                                    break;
                                }
                                headers = new Headers();
                                _context7.next = 11;
                                return this.getAuthHeader();
                            case 11:
                                authHeader = _context7.sent;
                                headers.append("Authorization", authHeader);
                                requestInit = {
                                    headers
                                };
                            case 14:
                                _context7.next = 16;
                                return translatePath(this.apiBase + "/router/translate-path", path, requestInit, false, this.fetchAdapter);
                            case 16:
                                response = _context7.sent;
                                if (response) {
                                    pathTranslationsState = currentState["dsPathTranslations"];
                                    if (pathTranslationsState) {
                                        updatedPathTranslationState = _objectSpread(_objectSpread({}, pathTranslationsState), {}, _defineProperty({}, path, response));
                                        this.setState(_defineProperty({}, "dsPathTranslations", updatedPathTranslationState));
                                    } else {
                                        newPathTranslationState = _defineProperty({}, path, response);
                                        this.setState(_defineProperty({}, "dsPathTranslations", newPathTranslationState));
                                    }
                                }
                            case 18:
                                updatedState = this.getState();
                                pathTranslations = updatedState.dsPathTranslations;
                                id = pathTranslations["".concat(path)].entity.uuid;
                                _context7.next = 23;
                                return this.getObject({
                                    objectName,
                                    id,
                                    res,
                                    query
                                });
                            case 23:
                                object = _context7.sent;
                                return _context7.abrupt("return", object);
                            case 25:
                            case "end":
                                return _context7.stop();
                        }
                    }, _callee7, this);
                }));
                function getObjectByPath(_x6) {
                    return _getObjectByPath.apply(this, arguments);
                }
                return getObjectByPath;
            }()
        },
        {
            key: "getObject",
            value: function() {
                var _getObject = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee9(_ref4) {
                    var _collectionState$link, _collectionState$link2, _this = this;
                    var objectName, id, _ref4$res, res, _ref4$query, query, _ref4$all, all, state, collectionState, resourceState, resource, matchedResourceState, serializedState, dsApiIndex, endpoint, resourceData, objectResourceState, updatedResourceState, newResourceState, _dsApiIndex, _endpoint, collectionData, fetchedCollectionState, links, normalizeNextLink, nextLink, getNextPageEndpoint, getNextPage, nextPageEndpoint, results, currentLinks, _nextLink, gqlCollectionState;
                    return regenerator.wrap(function _callee9$(_context9) {
                        while(true)switch(_context9.prev = _context9.next){
                            case 0:
                                objectName = _ref4.objectName, id = _ref4.id, _ref4$res = _ref4.res, res = _ref4$res === void 0 ? false : _ref4$res, _ref4$query = _ref4.query, query = _ref4$query === void 0 ? false : _ref4$query, _ref4$all = _ref4.all, all = _ref4$all === void 0 ? false : _ref4$all;
                                state = this.getState();
                                collectionState = state[objectName];
                                if (!id) {
                                    _context9.next = 27;
                                    break;
                                }
                                resourceState = state["".concat(objectName, "Resources")];
                                if (!resourceState) {
                                    _context9.next = 10;
                                    break;
                                }
                                resource = resourceState[id];
                                if (!resource) {
                                    _context9.next = 10;
                                    break;
                                }
                                !this.debug || console.log("Matched resource ".concat(id, " in state"));
                                return _context9.abrupt("return", resource !== null && resource !== void 0 && resource.graphql ? resource.graphql : this.dataFormatter.deserialize(resource));
                            case 10:
                                if (!(collectionState !== null && collectionState !== void 0 && collectionState.data && !query)) {
                                    _context9.next = 16;
                                    break;
                                }
                                matchedResourceState = collectionState.data.filter(function(item) {
                                    return item["id"] === id;
                                });
                                if (!matchedResourceState) {
                                    _context9.next = 16;
                                    break;
                                }
                                !this.debug || console.log("Matched resource ".concat(id, " in collection"));
                                serializedState = {
                                    data: matchedResourceState.pop()
                                };
                                return _context9.abrupt("return", this.dataFormatter.deserialize(serializedState));
                            case 16:
                                !this.debug || console.log("Fetch Resource ".concat(id, " and add to state"));
                                _context9.next = 19;
                                return this.getApiIndex();
                            case 19:
                                dsApiIndex = _context9.sent;
                                endpoint = this.assembleEndpoint(objectName, dsApiIndex[objectName], id, query);
                                _context9.next = 23;
                                return this.conditionalFetch(endpoint, query, "".concat(objectName, "Resources"), res);
                            case 23:
                                resourceData = _context9.sent;
                                objectResourceState = state["".concat(objectName, "Resources")];
                                if (objectResourceState) {
                                    updatedResourceState = _objectSpread(_objectSpread({}, objectResourceState), {}, _defineProperty({}, id, resourceData));
                                    this.setState(_defineProperty({}, "".concat(objectName, "Resources"), updatedResourceState));
                                } else {
                                    newResourceState = _defineProperty({}, id, resourceData);
                                    this.setState(_defineProperty({}, "".concat(objectName, "Resources"), newResourceState));
                                }
                                return _context9.abrupt("return", query ? resourceData.graphql : this.dataFormatter.deserialize(resourceData));
                            case 27:
                                if (!(!collectionState || query && !collectionState.graphql || (_collectionState$link = collectionState.links) !== null && _collectionState$link !== void 0 && _collectionState$link.next && !((_collectionState$link2 = collectionState.links) !== null && _collectionState$link2 !== void 0 && _collectionState$link2.last) && all)) {
                                    _context9.next = 60;
                                    break;
                                }
                                !this.debug || console.log("Fetch Collection ".concat(objectName, " and add to state"));
                                _context9.next = 31;
                                return this.getApiIndex();
                            case 31:
                                _dsApiIndex = _context9.sent;
                                _endpoint = this.assembleEndpoint(objectName, _dsApiIndex[objectName], id, query);
                                _context9.next = 35;
                                return this.conditionalFetch(_endpoint, query, objectName, res);
                            case 35:
                                collectionData = _context9.sent;
                                fetchedCollectionState = {};
                                fetchedCollectionState[objectName] = collectionData;
                                this.setState(fetchedCollectionState);
                                if (!all) {
                                    _context9.next = 57;
                                    break;
                                }
                                links = collectionData === null || collectionData === void 0 ? void 0 : collectionData.links;
                                normalizeNextLink = function normalizeNextLink2(linkObj) {
                                    var _linkObj$next;
                                    if (linkObj === void 0 || !linkObj.next) return "";
                                    else if (typeof linkObj.next === "string") return linkObj.next;
                                    else if (typeof ((_linkObj$next = linkObj.next) === null || _linkObj$next === void 0 ? void 0 : _linkObj$next.href) === "string") return linkObj.next.href;
                                    return "";
                                };
                                nextLink = normalizeNextLink(links);
                                if (!nextLink) {
                                    _context9.next = 57;
                                    break;
                                }
                                !this.debug || console.log("Found 'next' link - attempting to fetch next page of results for ".concat(objectName));
                                getNextPageEndpoint = function getNextPageEndpoint2(nextLink2) {
                                    var nextPageEndpoint2;
                                    if (query && objectName.includes("--")) {
                                        var querySafeName = objectName.split("--").join("/");
                                        nextPageEndpoint2 = "".concat(querySafeName).concat(id ? "/".concat(id) : "", "?").concat(nextLink2.split("?")[1]);
                                    } else nextPageEndpoint2 = nextLink2;
                                    return nextPageEndpoint2;
                                };
                                getNextPage = /* @__PURE__ */ function() {
                                    var _ref5 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee8(nextPageEndpoint2) {
                                        var nextPage, currentState, mergedCollection;
                                        return regenerator.wrap(function _callee8$(_context8) {
                                            while(true)switch(_context8.prev = _context8.next){
                                                case 0:
                                                    if (!(nextPageEndpoint2 === "")) {
                                                        _context8.next = 2;
                                                        break;
                                                    }
                                                    return _context8.abrupt("return", {});
                                                case 2:
                                                    _context8.next = 4;
                                                    return _this.conditionalFetch(nextPageEndpoint2, query, objectName, res);
                                                case 4:
                                                    nextPage = _context8.sent;
                                                    currentState = _this.getState();
                                                    mergedCollection = cjs(currentState[objectName], nextPage);
                                                    currentState[objectName] = mergedCollection;
                                                    _this.setState(currentState);
                                                    return _context8.abrupt("return", nextPage.links);
                                                case 10:
                                                case "end":
                                                    return _context8.stop();
                                            }
                                        }, _callee8);
                                    }));
                                    return function getNextPage2(_x8) {
                                        return _ref5.apply(this, arguments);
                                    };
                                }();
                                nextPageEndpoint = getNextPageEndpoint(nextLink);
                            case 48:
                                _context9.next = 50;
                                return getNextPage(nextPageEndpoint);
                            case 50:
                                currentLinks = _context9.sent;
                                results = this.getState();
                                links = currentLinks;
                                _nextLink = normalizeNextLink(currentLinks);
                                nextPageEndpoint = getNextPageEndpoint(_nextLink);
                            case 55:
                                if (links.next) {
                                    _context9.next = 48;
                                    break;
                                }
                            case 56:
                                return _context9.abrupt("return", query ? results[objectName].graphql : this.dataFormatter.deserialize(results[objectName]));
                            case 57:
                                return _context9.abrupt("return", query ? collectionData.graphql : this.dataFormatter.deserialize(collectionData));
                            case 60:
                                !this.debug || console.log("Matched collection ".concat(objectName, " in state"));
                                gqlCollectionState = collectionState;
                                return _context9.abrupt("return", query ? gqlCollectionState.graphql : this.dataFormatter.deserialize(collectionState));
                            case 63:
                            case "end":
                                return _context9.stop();
                        }
                    }, _callee9, this);
                }));
                function getObject(_x7) {
                    return _getObject.apply(this, arguments);
                }
                return getObject;
            }()
        }
    ]);
    return DrupalState2;
}();
class StoreController {
    constructor(host2, apiBase, apiPrefix = "jsonapi", defaultLocale = "", debug = false){
        this.host = host2;
        this.store = new DrupalState({
            apiBase,
            apiPrefix,
            defaultLocale,
            debug
        });
        this.storeEvent = new CustomEvent("storeupdate", {
            bubbles: true,
            composed: true
        });
        host2.addController(this);
    }
    hostUpdate() {
        this.host.dispatchEvent(this.storeEvent);
    }
    async query({ objectName , query , id , include  }) {
        if (include) this.store.params.addInclude([
            include
        ]);
        const result = await this.store.getObject({
            objectName,
            id,
            query
        });
        this.host.requestUpdate();
        return result;
    }
}
class GdwcStore extends s$2 {
    static get properties() {
        return {
            apiBase: {
                type: String
            },
            apiPrefix: {
                type: String
            },
            defaultLocale: {
                type: String
            },
            debug: {
                type: Boolean
            }
        };
    }
    constructor(){
        super();
        this.debug = false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.apiBase) this.storeController = new StoreController(this, this.apiBase, this.apiPrefix, this.defaultLocale, this.debug);
        this.findGdwcChildren();
    }
    async findGdwcChildren() {
        const { children  } = this;
        await Promise.all(Array.from(children).map((c2)=>c2.updateComplete));
        for (const child of children)this.addGdwcChild(child);
    }
    addGdwcChild(child) {
        const tagName = child.tagName.toLowerCase();
        if (tagName.startsWith("gdwc-provider")) child.setStoreController(this.storeController);
    }
    render() {
        return $`<slot></slot>`;
    }
}
if (!customElements.get("gdwc-store")) customElements.define("gdwc-store", GdwcStore);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t$1 = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e$2 = (t2)=>(...e234)=>({
            _$litDirective$: t2,
            values: e234
        });
class i$3 {
    constructor(t2){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t2, e235, i2) {
        this._$Ct = t2, this._$AM = e235, this._$Ci = i2;
    }
    _$AS(t2, e236) {
        return this.update(t2, e236);
    }
    update(t2, e237) {
        return this.render(...e237);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o$2 = e$2(class extends i$3 {
    constructor(t2){
        if (super(t2), t2.type !== t$1.CHILD) throw Error("templateContent can only be used in child bindings");
    }
    render(r2) {
        return this.vt === r2 ? b : (this.vt = r2, document.importNode(r2.content, true));
    }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t = (o2)=>o2 === null || typeof o2 != "object" && typeof o2 != "function", r$1 = (o2)=>o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e$1 = (i2, t2)=>{
    var s2, o2;
    const n2 = i2._$AN;
    if (n2 === void 0) return false;
    for (const i3 of n2)(o2 = (s2 = i3)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$1(i3, t2);
    return true;
}, o$1 = (i2)=>{
    let t2, s2;
    do {
        if ((t2 = i2._$AM) === void 0) break;
        s2 = t2._$AN, s2.delete(i2), i2 = t2;
    }while ((s2 == null ? void 0 : s2.size) === 0);
}, n$2 = (i2)=>{
    for(let t2; t2 = i2._$AM; i2 = t2){
        let s2 = t2._$AN;
        if (s2 === void 0) t2._$AN = s2 = /* @__PURE__ */ new Set();
        else if (s2.has(i2)) break;
        s2.add(i2), l$1(t2);
    }
};
function r(i2) {
    this._$AN !== void 0 ? (o$1(this), this._$AM = i2, n$2(this)) : this._$AM = i2;
}
function h$1(i2, t2 = false, s2 = 0) {
    const n2 = this._$AH, r2 = this._$AN;
    if (r2 !== void 0 && r2.size !== 0) {
        if (t2) {
            if (Array.isArray(n2)) for(let i3 = s2; i3 < n2.length; i3++)e$1(n2[i3], false), o$1(n2[i3]);
            else n2 != null && (e$1(n2, false), o$1(n2));
        } else e$1(this, i2);
    }
}
const l$1 = (i2)=>{
    var t2, e238, o2, n2;
    i2.type == t$1.CHILD && ((t2 = (o2 = i2)._$AP) !== null && t2 !== void 0 || (o2._$AP = h$1), (e238 = (n2 = i2)._$AQ) !== null && e238 !== void 0 || (n2._$AQ = r));
};
class d extends i$3 {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i2, t2, s2) {
        super._$AT(i2, t2, s2), n$2(this), this.isConnected = i2._$AU;
    }
    _$AO(i2, t2 = true) {
        var s2, n2;
        i2 !== this.isConnected && (this.isConnected = i2, i2 ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$1(this, i2), o$1(this));
    }
    setValue(t2) {
        if (r$1(this._$Ct)) this._$Ct._$AI(t2, this);
        else {
            const i2 = [
                ...this._$Ct._$AH
            ];
            i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class s$1 {
    constructor(t2){
        this.U = t2;
    }
    disconnect() {
        this.U = void 0;
    }
    reconnect(t2) {
        this.U = t2;
    }
    deref() {
        return this.U;
    }
}
class i$2 {
    constructor(){
        this.Y = void 0, this.q = void 0;
    }
    get() {
        return this.Y;
    }
    pause() {
        var t2;
        (t2 = this.Y) !== null && t2 !== void 0 || (this.Y = new Promise((t3)=>this.q = t3));
    }
    resume() {
        var t2;
        (t2 = this.q) === null || t2 === void 0 || t2.call(this), this.Y = this.q = void 0;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const n$1 = (t$12)=>!t(t$12) && typeof t$12.then == "function";
class h extends d {
    constructor(){
        super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CG = new s$1(this), this._$CK = new i$2();
    }
    render(...s2) {
        var i2;
        return (i2 = s2.find((t2)=>!n$1(t2))) !== null && i2 !== void 0 ? i2 : b;
    }
    update(s2, i2) {
        const r2 = this._$Cyt;
        let e239 = r2.length;
        this._$Cyt = i2;
        const o2 = this._$CG, h2 = this._$CK;
        this.isConnected || this.disconnected();
        for(let t2 = 0; t2 < i2.length && !(t2 > this._$Cwt); t2++){
            const s3 = i2[t2];
            if (!n$1(s3)) return this._$Cwt = t2, s3;
            t2 < e239 && s3 === r2[t2] || (this._$Cwt = 1073741823, e239 = 0, Promise.resolve(s3).then(async (t3)=>{
                for(; h2.get();)await h2.get();
                const i3 = o2.deref();
                if (i3 !== void 0) {
                    const r3 = i3._$Cyt.indexOf(s3);
                    r3 > -1 && r3 < i3._$Cwt && (i3._$Cwt = r3, i3.setValue(t3));
                }
            }));
        }
        return b;
    }
    disconnected() {
        this._$CG.disconnect(), this._$CK.pause();
    }
    reconnected() {
        this._$CG.reconnect(this), this._$CK.resume();
    }
}
const c = e$2(h);
var objectPath$1 = {
    exports: {}
};
(function(module2) {
    (function(root2, factory) {
        module2.exports = factory();
    })(commonjsGlobal, function() {
        var toStr2 = Object.prototype.toString;
        function hasOwnProperty2(obj, prop) {
            if (obj == null) return false;
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        function isEmpty2(value) {
            if (!value) return true;
            if (isArray2(value) && value.length === 0) return true;
            else if (typeof value !== "string") {
                for(var i2 in value){
                    if (hasOwnProperty2(value, i2)) return false;
                }
                return true;
            }
            return false;
        }
        function toString2(type) {
            return toStr2.call(type);
        }
        function isObject2(obj) {
            return typeof obj === "object" && toString2(obj) === "[object Object]";
        }
        var isArray2 = Array.isArray || function(obj) {
            return toStr2.call(obj) === "[object Array]";
        };
        function isBoolean2(obj) {
            return typeof obj === "boolean" || toString2(obj) === "[object Boolean]";
        }
        function getKey2(key) {
            var intKey = parseInt(key);
            if (intKey.toString() === key) return intKey;
            return key;
        }
        function factory(options) {
            options = options || {};
            var objectPath2 = function(obj) {
                return Object.keys(objectPath2).reduce(function(proxy, prop) {
                    if (prop === "create") return proxy;
                    if (typeof objectPath2[prop] === "function") proxy[prop] = objectPath2[prop].bind(objectPath2, obj);
                    return proxy;
                }, {});
            };
            var hasShallowProperty;
            if (options.includeInheritedProps) hasShallowProperty = function() {
                return true;
            };
            else hasShallowProperty = function(obj, prop) {
                return typeof prop === "number" && Array.isArray(obj) || hasOwnProperty2(obj, prop);
            };
            function getShallowProperty(obj, prop) {
                if (hasShallowProperty(obj, prop)) return obj[prop];
            }
            var getShallowPropertySafely;
            if (options.includeInheritedProps) getShallowPropertySafely = function(obj, currentPath) {
                if (typeof currentPath !== "string" && typeof currentPath !== "number") currentPath = String(currentPath);
                var currentValue = getShallowProperty(obj, currentPath);
                if (currentPath === "__proto__" || currentPath === "prototype" || currentPath === "constructor" && typeof currentValue === "function") throw new Error("For security reasons, object's magic properties cannot be set");
                return currentValue;
            };
            else getShallowPropertySafely = function(obj, currentPath) {
                return getShallowProperty(obj, currentPath);
            };
            function set(obj, path, value, doNotReplace) {
                if (typeof path === "number") path = [
                    path
                ];
                if (!path || path.length === 0) return obj;
                if (typeof path === "string") return set(obj, path.split(".").map(getKey2), value, doNotReplace);
                var currentPath = path[0];
                var currentValue = getShallowPropertySafely(obj, currentPath);
                if (path.length === 1) {
                    if (currentValue === void 0 || !doNotReplace) obj[currentPath] = value;
                    return currentValue;
                }
                if (currentValue === void 0) {
                    if (typeof path[1] === "number") obj[currentPath] = [];
                    else obj[currentPath] = {};
                }
                return set(obj[currentPath], path.slice(1), value, doNotReplace);
            }
            objectPath2.has = function(obj, path) {
                if (typeof path === "number") path = [
                    path
                ];
                else if (typeof path === "string") path = path.split(".");
                if (!path || path.length === 0) return !!obj;
                for(var i2 = 0; i2 < path.length; i2++){
                    var j = getKey2(path[i2]);
                    if (typeof j === "number" && isArray2(obj) && j < obj.length || (options.includeInheritedProps ? j in Object(obj) : hasOwnProperty2(obj, j))) obj = obj[j];
                    else return false;
                }
                return true;
            };
            objectPath2.ensureExists = function(obj, path, value) {
                return set(obj, path, value, true);
            };
            objectPath2.set = function(obj, path, value, doNotReplace) {
                return set(obj, path, value, doNotReplace);
            };
            objectPath2.insert = function(obj, path, value, at) {
                var arr = objectPath2.get(obj, path);
                at = ~~at;
                if (!isArray2(arr)) {
                    arr = [];
                    objectPath2.set(obj, path, arr);
                }
                arr.splice(at, 0, value);
            };
            objectPath2.empty = function(obj, path) {
                if (isEmpty2(path)) return void 0;
                if (obj == null) return void 0;
                var value, i2;
                if (!(value = objectPath2.get(obj, path))) return void 0;
                if (typeof value === "string") return objectPath2.set(obj, path, "");
                else if (isBoolean2(value)) return objectPath2.set(obj, path, false);
                else if (typeof value === "number") return objectPath2.set(obj, path, 0);
                else if (isArray2(value)) value.length = 0;
                else if (isObject2(value)) {
                    for(i2 in value)if (hasShallowProperty(value, i2)) delete value[i2];
                } else return objectPath2.set(obj, path, null);
            };
            objectPath2.push = function(obj, path) {
                var arr = objectPath2.get(obj, path);
                if (!isArray2(arr)) {
                    arr = [];
                    objectPath2.set(obj, path, arr);
                }
                arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
            };
            objectPath2.coalesce = function(obj, paths, defaultValue) {
                var value;
                for(var i2 = 0, len = paths.length; i2 < len; i2++){
                    if ((value = objectPath2.get(obj, paths[i2])) !== void 0) return value;
                }
                return defaultValue;
            };
            objectPath2.get = function(obj, path, defaultValue) {
                if (typeof path === "number") path = [
                    path
                ];
                if (!path || path.length === 0) return obj;
                if (obj == null) return defaultValue;
                if (typeof path === "string") return objectPath2.get(obj, path.split("."), defaultValue);
                var currentPath = getKey2(path[0]);
                var nextObj = getShallowPropertySafely(obj, currentPath);
                if (nextObj === void 0) return defaultValue;
                if (path.length === 1) return nextObj;
                return objectPath2.get(obj[currentPath], path.slice(1), defaultValue);
            };
            objectPath2.del = function del(obj, path) {
                if (typeof path === "number") path = [
                    path
                ];
                if (obj == null) return obj;
                if (isEmpty2(path)) return obj;
                if (typeof path === "string") return objectPath2.del(obj, path.split("."));
                var currentPath = getKey2(path[0]);
                getShallowPropertySafely(obj, currentPath);
                if (!hasShallowProperty(obj, currentPath)) return obj;
                if (path.length === 1) {
                    if (isArray2(obj)) obj.splice(currentPath, 1);
                    else delete obj[currentPath];
                } else return objectPath2.del(obj[currentPath], path.slice(1));
                return obj;
            };
            return objectPath2;
        }
        var mod = factory();
        mod.create = factory;
        mod.withInheritedProps = factory({
            includeInheritedProps: true
        });
        return mod;
    });
})(objectPath$1);
var objectPath = objectPath$1.exports;
class GdwcProvider extends s$2 {
    static get properties() {
        return {
            storeController: {
                type: Object
            },
            objectName: {
                type: String
            },
            id: {
                type: String
            },
            include: {
                type: String
            },
            query: {
                type: String
            },
            debug: {
                type: Boolean
            }
        };
    }
    constructor(){
        super();
        this.debug = false;
        this.template = this.querySelector("template");
    }
    async processTemplate() {
        var _a2;
        await super.getUpdateComplete();
        const store = await this.storeController.query({
            objectName: this.objectName,
            id: this.id,
            query: this.query,
            include: this.include
        });
        if (this.debug) console.log("Provider scope", store);
        const templateMarkup = this.template ? (_a2 = this.template) == null ? void 0 : _a2.innerHTML : "";
        let processedTemplateMarkup = "";
        if (!Array.isArray(store)) processedTemplateMarkup = templateMarkup.replaceAll(/{{(.*?)}}/g, (match, p1)=>objectPath.get(store, p1.trim(), ""));
        else store.forEach((item)=>{
            processedTemplateMarkup += templateMarkup.replaceAll(/{{(.*?)}}/g, (match, p1)=>objectPath.get(item, p1.trim(), ""));
        });
        const processedTemplate = document.createElement("template");
        processedTemplate.innerHTML = processedTemplateMarkup;
        return o$2(processedTemplate);
    }
    setStoreController(storeController) {
        this.storeController = storeController;
        this.processedTemplate = this.processTemplate();
    }
    render() {
        return $`${c(this.processedTemplate)}`;
    }
}
if (!customElements.get("gdwc-provider")) customElements.define("gdwc-provider", GdwcProvider);
class GdwcCard extends s$2 {
    static get properties() {
        return {
            query: {
                type: String
            },
            imgSrc: {
                type: String
            },
            headline: {
                type: String
            },
            body: {
                type: String
            },
            linkHref: {
                type: String
            }
        };
    }
    static get styles() {
        return [
            normalize$2,
            theme,
            r$4`
        :host {
          display: block;
          background-image: var(--gdwc-background-image);
          border: var(--gdwc-border, none) !important;
          border-radius: var(--gdwc-border-radius);
          box-shadow: var(--gdwc-shadow);
        }
        img {
          max-width: 100%;
        }
        .gdwc-card__body {
          padding: var(--gdwc-padding, var(--size-3));
        }
      `
        ];
    }
    render() {
        return $`
      <div class="gdwc-card">
        ${this.imgSrc ? $`<div class="gdwc-card__image">
              <img src="${this.imgSrc}" alt="" />
            </div>` : ""}
        <div class="gdwc-card__body">
          <h2>${this.headline}</h2>
          <slot><p>${this.body}</p></slot>
          <a href="${this.linkHref}">Read more</a>
        </div>
      </div>
    `;
    }
}
if (!customElements.get("gdwc-card")) customElements.define("gdwc-card", GdwcCard);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i$1 = e$2(class extends i$3 {
    constructor(t2){
        var e240;
        if (super(t2), t2.type !== t$1.ATTRIBUTE || t2.name !== "style" || ((e240 = t2.strings) === null || e240 === void 0 ? void 0 : e240.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t2) {
        return Object.keys(t2).reduce((e241, r2)=>{
            const s2 = t2[r2];
            return s2 == null ? e241 : e241 + `${r2 = r2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
        }, "");
    }
    update(e242, [r2]) {
        const { style: s2  } = e242.element;
        if (this.ct === void 0) {
            this.ct = /* @__PURE__ */ new Set();
            for(const t2 in r2)this.ct.add(t2);
            return this.render(r2);
        }
        this.ct.forEach((t2)=>{
            r2[t2] == null && (this.ct.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
        });
        for(const t21 in r2){
            const e3 = r2[t21];
            e3 != null && (this.ct.add(t21), t21.includes("-") ? s2.setProperty(t21, e3) : s2[t21] = e3);
        }
        return b;
    }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = Symbol.for(""), e = (t2)=>{
    var r2, e243;
    if (((r2 = t2) === null || r2 === void 0 ? void 0 : r2.r) === o) return (e243 = t2) === null || e243 === void 0 ? void 0 : e243._$litStatic$;
}, i = (t2)=>({
        _$litStatic$: t2,
        r: o
    }), a = /* @__PURE__ */ new Map(), s = (t2)=>(r2, ...o2)=>{
        const i2 = o2.length;
        let l2, s2;
        const n2 = [], u2 = [];
        let c2, v2 = 0, $2 = false;
        for(; v2 < i2;){
            for(c2 = r2[v2]; v2 < i2 && (s2 = o2[v2], l2 = e(s2)) !== void 0;)c2 += l2 + r2[++v2], $2 = true;
            u2.push(s2), n2.push(c2), v2++;
        }
        if (v2 === i2 && n2.push(r2[i2]), $2) {
            const t3 = n2.join("$$lit$$");
            (r2 = a.get(t3)) === void 0 && (n2.raw = n2, a.set(t3, r2 = n2)), o2 = u2;
        }
        return t2(r2, ...o2);
    }, n = s($);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (l2)=>l2 != null ? l2 : w;
class GdwcHeading extends s$2 {
    static get properties() {
        return {
            size: {
                type: String
            },
            level: {
                type: String
            }
        };
    }
    static get styles() {
        return [
            normalize$2,
            theme,
            r$4`
        :host {
          display: block;
          border: var(--gdwc-border, none) !important;
          border-radius: var(--gdwc-border-radius);
          box-shadow: var(--gdwc-shadow);
          padding: var(--gdwc-padding);
          background-image: var(--gdwc-background-image);
        }
      `
        ];
    }
    constructor(){
        super();
        this.validLevels = [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ];
        this.level = "h2";
    }
    render() {
        const styles = {
            fontSize: `var(${this.size})`
        };
        const style = this.size ? i$1(styles) : null;
        const level = this.sanitizeLevel(this.level);
        return n` <${i(level)}
        style=${l(style)}
      >
        <slot></slot>
      </${i(level)}> `;
    }
    sanitizeLevel(level) {
        return this.validLevels.includes(level.toLowerCase()) ? level : "h2";
    }
}
if (!customElements.get("gdwc-heading")) customElements.define("gdwc-heading", GdwcHeading);
var openProps_min = "";

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}]},["gPfuD","ctLCf"], "ctLCf", "parcelRequirebdb1")

//# sourceMappingURL=gdwc-example.js.map
