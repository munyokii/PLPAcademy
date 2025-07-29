function N1(i, r) {
    for (var o = 0; o < r.length; o++) {
        const c = r[o];
        if (typeof c != "string" && !Array.isArray(c)) {
            for (const f in c)
                if (f !== "default" && !(f in i)) {
                    const h = Object.getOwnPropertyDescriptor(c, f);
                    h && Object.defineProperty(i, f, h.get ? h : {
                        enumerable: !0,
                        get: () => c[f]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]'))
        c(f);
    new MutationObserver(f => {
        for (const h of f)
            if (h.type === "childList")
                for (const p of h.addedNodes)
                    p.tagName === "LINK" && p.rel === "modulepreload" && c(p)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(f) {
        const h = {};
        return f.integrity && (h.integrity = f.integrity),
        f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
        f.crossOrigin === "use-credentials" ? h.credentials = "include" : f.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin",
        h
    }
    function c(f) {
        if (f.ep)
            return;
        f.ep = !0;
        const h = o(f);
        fetch(f.href, h)
    }
}
)();
function Fh(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var Ic = {
    exports: {}
}
  , Wl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $m;
function O1() {
    if ($m)
        return Wl;
    $m = 1;
    var i = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.fragment");
    function o(c, f, h) {
        var p = null;
        if (h !== void 0 && (p = "" + h),
        f.key !== void 0 && (p = "" + f.key),
        "key"in f) {
            h = {};
            for (var S in f)
                S !== "key" && (h[S] = f[S])
        } else
            h = f;
        return f = h.ref,
        {
            $$typeof: i,
            type: c,
            key: p,
            ref: f !== void 0 ? f : null,
            props: h
        }
    }
    return Wl.Fragment = r,
    Wl.jsx = o,
    Wl.jsxs = o,
    Wl
}
var Im;
function E1() {
    return Im || (Im = 1,
    Ic.exports = O1()),
    Ic.exports
}
var d = E1()
  , eo = {
    exports: {}
}
  , ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh;
function T1() {
    if (eh)
        return ne;
    eh = 1;
    var i = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , c = Symbol.for("react.strict_mode")
      , f = Symbol.for("react.profiler")
      , h = Symbol.for("react.consumer")
      , p = Symbol.for("react.context")
      , S = Symbol.for("react.forward_ref")
      , b = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , E = Symbol.for("react.lazy")
      , R = Symbol.iterator;
    function _(y) {
        return y === null || typeof y != "object" ? null : (y = R && y[R] || y["@@iterator"],
        typeof y == "function" ? y : null)
    }
    var V = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , F = Object.assign
      , $ = {};
    function L(y, D, k) {
        this.props = y,
        this.context = D,
        this.refs = $,
        this.updater = k || V
    }
    L.prototype.isReactComponent = {},
    L.prototype.setState = function(y, D) {
        if (typeof y != "object" && typeof y != "function" && y != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, D, "setState")
    }
    ,
    L.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate")
    }
    ;
    function ee() {}
    ee.prototype = L.prototype;
    function te(y, D, k) {
        this.props = y,
        this.context = D,
        this.refs = $,
        this.updater = k || V
    }
    var X = te.prototype = new ee;
    X.constructor = te,
    F(X, L.prototype),
    X.isPureReactComponent = !0;
    var de = Array.isArray
      , Q = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , We = Object.prototype.hasOwnProperty;
    function ke(y, D, k, H, Z, ue) {
        return k = ue.ref,
        {
            $$typeof: i,
            type: y,
            key: D,
            ref: k !== void 0 ? k : null,
            props: ue
        }
    }
    function Je(y, D) {
        return ke(y.type, D, void 0, void 0, void 0, y.props)
    }
    function Ct(y) {
        return typeof y == "object" && y !== null && y.$$typeof === i
    }
    function rn(y) {
        var D = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + y.replace(/[=:]/g, function(k) {
            return D[k]
        })
    }
    var qt = /\/+/g;
    function Ve(y, D) {
        return typeof y == "object" && y !== null && y.key != null ? rn("" + y.key) : D.toString(36)
    }
    function La() {}
    function qa(y) {
        switch (y.status) {
        case "fulfilled":
            return y.value;
        case "rejected":
            throw y.reason;
        default:
            switch (typeof y.status == "string" ? y.then(La, La) : (y.status = "pending",
            y.then(function(D) {
                y.status === "pending" && (y.status = "fulfilled",
                y.value = D)
            }, function(D) {
                y.status === "pending" && (y.status = "rejected",
                y.reason = D)
            })),
            y.status) {
            case "fulfilled":
                return y.value;
            case "rejected":
                throw y.reason
            }
        }
        throw y
    }
    function Xe(y, D, k, H, Z) {
        var ue = typeof y;
        (ue === "undefined" || ue === "boolean") && (y = null);
        var ae = !1;
        if (y === null)
            ae = !0;
        else
            switch (ue) {
            case "bigint":
            case "string":
            case "number":
                ae = !0;
                break;
            case "object":
                switch (y.$$typeof) {
                case i:
                case r:
                    ae = !0;
                    break;
                case E:
                    return ae = y._init,
                    Xe(ae(y._payload), D, k, H, Z)
                }
            }
        if (ae)
            return Z = Z(y),
            ae = H === "" ? "." + Ve(y, 0) : H,
            de(Z) ? (k = "",
            ae != null && (k = ae.replace(qt, "$&/") + "/"),
            Xe(Z, D, k, "", function(la) {
                return la
            })) : Z != null && (Ct(Z) && (Z = Je(Z, k + (Z.key == null || y && y.key === Z.key ? "" : ("" + Z.key).replace(qt, "$&/") + "/") + ae)),
            D.push(Z)),
            1;
        ae = 0;
        var lt = H === "" ? "." : H + ":";
        if (de(y))
            for (var Oe = 0; Oe < y.length; Oe++)
                H = y[Oe],
                ue = lt + Ve(H, Oe),
                ae += Xe(H, D, k, ue, Z);
        else if (Oe = _(y),
        typeof Oe == "function")
            for (y = Oe.call(y),
            Oe = 0; !(H = y.next()).done; )
                H = H.value,
                ue = lt + Ve(H, Oe++),
                ae += Xe(H, D, k, ue, Z);
        else if (ue === "object") {
            if (typeof y.then == "function")
                return Xe(qa(y), D, k, H, Z);
            throw D = String(y),
            Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ae
    }
    function w(y, D, k) {
        if (y == null)
            return y;
        var H = []
          , Z = 0;
        return Xe(y, H, "", "", function(ue) {
            return D.call(k, ue, Z++)
        }),
        H
    }
    function B(y) {
        if (y._status === -1) {
            var D = y._result;
            D = D(),
            D.then(function(k) {
                (y._status === 0 || y._status === -1) && (y._status = 1,
                y._result = k)
            }, function(k) {
                (y._status === 0 || y._status === -1) && (y._status = 2,
                y._result = k)
            }),
            y._status === -1 && (y._status = 0,
            y._result = D)
        }
        if (y._status === 1)
            return y._result.default;
        throw y._result
    }
    var J = typeof reportError == "function" ? reportError : function(y) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var D = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
                error: y
            });
            if (!window.dispatchEvent(D))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", y);
            return
        }
        console.error(y)
    }
    ;
    function be() {}
    return ne.Children = {
        map: w,
        forEach: function(y, D, k) {
            w(y, function() {
                D.apply(this, arguments)
            }, k)
        },
        count: function(y) {
            var D = 0;
            return w(y, function() {
                D++
            }),
            D
        },
        toArray: function(y) {
            return w(y, function(D) {
                return D
            }) || []
        },
        only: function(y) {
            if (!Ct(y))
                throw Error("React.Children.only expected to receive a single React element child.");
            return y
        }
    },
    ne.Component = L,
    ne.Fragment = o,
    ne.Profiler = f,
    ne.PureComponent = te,
    ne.StrictMode = c,
    ne.Suspense = b,
    ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q,
    ne.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(y) {
            return Q.H.useMemoCache(y)
        }
    },
    ne.cache = function(y) {
        return function() {
            return y.apply(null, arguments)
        }
    }
    ,
    ne.cloneElement = function(y, D, k) {
        if (y == null)
            throw Error("The argument must be a React element, but you passed " + y + ".");
        var H = F({}, y.props)
          , Z = y.key
          , ue = void 0;
        if (D != null)
            for (ae in D.ref !== void 0 && (ue = void 0),
            D.key !== void 0 && (Z = "" + D.key),
            D)
                !We.call(D, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && D.ref === void 0 || (H[ae] = D[ae]);
        var ae = arguments.length - 2;
        if (ae === 1)
            H.children = k;
        else if (1 < ae) {
            for (var lt = Array(ae), Oe = 0; Oe < ae; Oe++)
                lt[Oe] = arguments[Oe + 2];
            H.children = lt
        }
        return ke(y.type, Z, void 0, void 0, ue, H)
    }
    ,
    ne.createContext = function(y) {
        return y = {
            $$typeof: p,
            _currentValue: y,
            _currentValue2: y,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        y.Provider = y,
        y.Consumer = {
            $$typeof: h,
            _context: y
        },
        y
    }
    ,
    ne.createElement = function(y, D, k) {
        var H, Z = {}, ue = null;
        if (D != null)
            for (H in D.key !== void 0 && (ue = "" + D.key),
            D)
                We.call(D, H) && H !== "key" && H !== "__self" && H !== "__source" && (Z[H] = D[H]);
        var ae = arguments.length - 2;
        if (ae === 1)
            Z.children = k;
        else if (1 < ae) {
            for (var lt = Array(ae), Oe = 0; Oe < ae; Oe++)
                lt[Oe] = arguments[Oe + 2];
            Z.children = lt
        }
        if (y && y.defaultProps)
            for (H in ae = y.defaultProps,
            ae)
                Z[H] === void 0 && (Z[H] = ae[H]);
        return ke(y, ue, void 0, void 0, null, Z)
    }
    ,
    ne.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ne.forwardRef = function(y) {
        return {
            $$typeof: S,
            render: y
        }
    }
    ,
    ne.isValidElement = Ct,
    ne.lazy = function(y) {
        return {
            $$typeof: E,
            _payload: {
                _status: -1,
                _result: y
            },
            _init: B
        }
    }
    ,
    ne.memo = function(y, D) {
        return {
            $$typeof: g,
            type: y,
            compare: D === void 0 ? null : D
        }
    }
    ,
    ne.startTransition = function(y) {
        var D = Q.T
          , k = {};
        Q.T = k;
        try {
            var H = y()
              , Z = Q.S;
            Z !== null && Z(k, H),
            typeof H == "object" && H !== null && typeof H.then == "function" && H.then(be, J)
        } catch (ue) {
            J(ue)
        } finally {
            Q.T = D
        }
    }
    ,
    ne.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }
    ,
    ne.use = function(y) {
        return Q.H.use(y)
    }
    ,
    ne.useActionState = function(y, D, k) {
        return Q.H.useActionState(y, D, k)
    }
    ,
    ne.useCallback = function(y, D) {
        return Q.H.useCallback(y, D)
    }
    ,
    ne.useContext = function(y) {
        return Q.H.useContext(y)
    }
    ,
    ne.useDebugValue = function() {}
    ,
    ne.useDeferredValue = function(y, D) {
        return Q.H.useDeferredValue(y, D)
    }
    ,
    ne.useEffect = function(y, D, k) {
        var H = Q.H;
        if (typeof k == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return H.useEffect(y, D)
    }
    ,
    ne.useId = function() {
        return Q.H.useId()
    }
    ,
    ne.useImperativeHandle = function(y, D, k) {
        return Q.H.useImperativeHandle(y, D, k)
    }
    ,
    ne.useInsertionEffect = function(y, D) {
        return Q.H.useInsertionEffect(y, D)
    }
    ,
    ne.useLayoutEffect = function(y, D) {
        return Q.H.useLayoutEffect(y, D)
    }
    ,
    ne.useMemo = function(y, D) {
        return Q.H.useMemo(y, D)
    }
    ,
    ne.useOptimistic = function(y, D) {
        return Q.H.useOptimistic(y, D)
    }
    ,
    ne.useReducer = function(y, D, k) {
        return Q.H.useReducer(y, D, k)
    }
    ,
    ne.useRef = function(y) {
        return Q.H.useRef(y)
    }
    ,
    ne.useState = function(y) {
        return Q.H.useState(y)
    }
    ,
    ne.useSyncExternalStore = function(y, D, k) {
        return Q.H.useSyncExternalStore(y, D, k)
    }
    ,
    ne.useTransition = function() {
        return Q.H.useTransition()
    }
    ,
    ne.version = "19.1.0",
    ne
}
var th;
function Ho() {
    return th || (th = 1,
    eo.exports = T1()),
    eo.exports
}
var q = Ho();
const Bo = Fh(q)
  , C1 = N1({
    __proto__: null,
    default: Bo
}, [q]);
var to = {
    exports: {}
}
  , Jl = {}
  , ao = {
    exports: {}
}
  , no = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah;
function j1() {
    return ah || (ah = 1,
    function(i) {
        function r(w, B) {
            var J = w.length;
            w.push(B);
            e: for (; 0 < J; ) {
                var be = J - 1 >>> 1
                  , y = w[be];
                if (0 < f(y, B))
                    w[be] = B,
                    w[J] = y,
                    J = be;
                else
                    break e
            }
        }
        function o(w) {
            return w.length === 0 ? null : w[0]
        }
        function c(w) {
            if (w.length === 0)
                return null;
            var B = w[0]
              , J = w.pop();
            if (J !== B) {
                w[0] = J;
                e: for (var be = 0, y = w.length, D = y >>> 1; be < D; ) {
                    var k = 2 * (be + 1) - 1
                      , H = w[k]
                      , Z = k + 1
                      , ue = w[Z];
                    if (0 > f(H, J))
                        Z < y && 0 > f(ue, H) ? (w[be] = ue,
                        w[Z] = J,
                        be = Z) : (w[be] = H,
                        w[k] = J,
                        be = k);
                    else if (Z < y && 0 > f(ue, J))
                        w[be] = ue,
                        w[Z] = J,
                        be = Z;
                    else
                        break e
                }
            }
            return B
        }
        function f(w, B) {
            var J = w.sortIndex - B.sortIndex;
            return J !== 0 ? J : w.id - B.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            i.unstable_now = function() {
                return h.now()
            }
        } else {
            var p = Date
              , S = p.now();
            i.unstable_now = function() {
                return p.now() - S
            }
        }
        var b = []
          , g = []
          , E = 1
          , R = null
          , _ = 3
          , V = !1
          , F = !1
          , $ = !1
          , L = !1
          , ee = typeof setTimeout == "function" ? setTimeout : null
          , te = typeof clearTimeout == "function" ? clearTimeout : null
          , X = typeof setImmediate < "u" ? setImmediate : null;
        function de(w) {
            for (var B = o(g); B !== null; ) {
                if (B.callback === null)
                    c(g);
                else if (B.startTime <= w)
                    c(g),
                    B.sortIndex = B.expirationTime,
                    r(b, B);
                else
                    break;
                B = o(g)
            }
        }
        function Q(w) {
            if ($ = !1,
            de(w),
            !F)
                if (o(b) !== null)
                    F = !0,
                    We || (We = !0,
                    Ve());
                else {
                    var B = o(g);
                    B !== null && Xe(Q, B.startTime - w)
                }
        }
        var We = !1
          , ke = -1
          , Je = 5
          , Ct = -1;
        function rn() {
            return L ? !0 : !(i.unstable_now() - Ct < Je)
        }
        function qt() {
            if (L = !1,
            We) {
                var w = i.unstable_now();
                Ct = w;
                var B = !0;
                try {
                    e: {
                        F = !1,
                        $ && ($ = !1,
                        te(ke),
                        ke = -1),
                        V = !0;
                        var J = _;
                        try {
                            t: {
                                for (de(w),
                                R = o(b); R !== null && !(R.expirationTime > w && rn()); ) {
                                    var be = R.callback;
                                    if (typeof be == "function") {
                                        R.callback = null,
                                        _ = R.priorityLevel;
                                        var y = be(R.expirationTime <= w);
                                        if (w = i.unstable_now(),
                                        typeof y == "function") {
                                            R.callback = y,
                                            de(w),
                                            B = !0;
                                            break t
                                        }
                                        R === o(b) && c(b),
                                        de(w)
                                    } else
                                        c(b);
                                    R = o(b)
                                }
                                if (R !== null)
                                    B = !0;
                                else {
                                    var D = o(g);
                                    D !== null && Xe(Q, D.startTime - w),
                                    B = !1
                                }
                            }
                            break e
                        } finally {
                            R = null,
                            _ = J,
                            V = !1
                        }
                        B = void 0
                    }
                } finally {
                    B ? Ve() : We = !1
                }
            }
        }
        var Ve;
        if (typeof X == "function")
            Ve = function() {
                X(qt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var La = new MessageChannel
              , qa = La.port2;
            La.port1.onmessage = qt,
            Ve = function() {
                qa.postMessage(null)
            }
        } else
            Ve = function() {
                ee(qt, 0)
            }
            ;
        function Xe(w, B) {
            ke = ee(function() {
                w(i.unstable_now())
            }, B)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(w) {
            w.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(w) {
            0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < w ? Math.floor(1e3 / w) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return _
        }
        ,
        i.unstable_next = function(w) {
            switch (_) {
            case 1:
            case 2:
            case 3:
                var B = 3;
                break;
            default:
                B = _
            }
            var J = _;
            _ = B;
            try {
                return w()
            } finally {
                _ = J
            }
        }
        ,
        i.unstable_requestPaint = function() {
            L = !0
        }
        ,
        i.unstable_runWithPriority = function(w, B) {
            switch (w) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                w = 3
            }
            var J = _;
            _ = w;
            try {
                return B()
            } finally {
                _ = J
            }
        }
        ,
        i.unstable_scheduleCallback = function(w, B, J) {
            var be = i.unstable_now();
            switch (typeof J == "object" && J !== null ? (J = J.delay,
            J = typeof J == "number" && 0 < J ? be + J : be) : J = be,
            w) {
            case 1:
                var y = -1;
                break;
            case 2:
                y = 250;
                break;
            case 5:
                y = 1073741823;
                break;
            case 4:
                y = 1e4;
                break;
            default:
                y = 5e3
            }
            return y = J + y,
            w = {
                id: E++,
                callback: B,
                priorityLevel: w,
                startTime: J,
                expirationTime: y,
                sortIndex: -1
            },
            J > be ? (w.sortIndex = J,
            r(g, w),
            o(b) === null && w === o(g) && ($ ? (te(ke),
            ke = -1) : $ = !0,
            Xe(Q, J - be))) : (w.sortIndex = y,
            r(b, w),
            F || V || (F = !0,
            We || (We = !0,
            Ve()))),
            w
        }
        ,
        i.unstable_shouldYield = rn,
        i.unstable_wrapCallback = function(w) {
            var B = _;
            return function() {
                var J = _;
                _ = B;
                try {
                    return w.apply(this, arguments)
                } finally {
                    _ = J
                }
            }
        }
    }(no)),
    no
}
var nh;
function w1() {
    return nh || (nh = 1,
    ao.exports = j1()),
    ao.exports
}
var lo = {
    exports: {}
}
  , Pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lh;
function R1() {
    if (lh)
        return Pe;
    lh = 1;
    var i = Ho();
    function r(b) {
        var g = "https://react.dev/errors/" + b;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var E = 2; E < arguments.length; E++)
                g += "&args[]=" + encodeURIComponent(arguments[E])
        }
        return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o() {}
    var c = {
        d: {
            f: o,
            r: function() {
                throw Error(r(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
        },
        p: 0,
        findDOMNode: null
    }
      , f = Symbol.for("react.portal");
    function h(b, g, E) {
        var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: f,
            key: R == null ? null : "" + R,
            children: b,
            containerInfo: g,
            implementation: E
        }
    }
    var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function S(b, g) {
        if (b === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c,
    Pe.createPortal = function(b, g) {
        var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(r(299));
        return h(b, g, null, E)
    }
    ,
    Pe.flushSync = function(b) {
        var g = p.T
          , E = c.p;
        try {
            if (p.T = null,
            c.p = 2,
            b)
                return b()
        } finally {
            p.T = g,
            c.p = E,
            c.d.f()
        }
    }
    ,
    Pe.preconnect = function(b, g) {
        typeof b == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        c.d.C(b, g))
    }
    ,
    Pe.prefetchDNS = function(b) {
        typeof b == "string" && c.d.D(b)
    }
    ,
    Pe.preinit = function(b, g) {
        if (typeof b == "string" && g && typeof g.as == "string") {
            var E = g.as
              , R = S(E, g.crossOrigin)
              , _ = typeof g.integrity == "string" ? g.integrity : void 0
              , V = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            E === "style" ? c.d.S(b, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: R,
                integrity: _,
                fetchPriority: V
            }) : E === "script" && c.d.X(b, {
                crossOrigin: R,
                integrity: _,
                fetchPriority: V,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Pe.preinitModule = function(b, g) {
        if (typeof b == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var E = S(g.as, g.crossOrigin);
                    c.d.M(b, {
                        crossOrigin: E,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && c.d.M(b)
    }
    ,
    Pe.preload = function(b, g) {
        if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var E = g.as
              , R = S(E, g.crossOrigin);
            c.d.L(b, E, {
                crossOrigin: R,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Pe.preloadModule = function(b, g) {
        if (typeof b == "string")
            if (g) {
                var E = S(g.as, g.crossOrigin);
                c.d.m(b, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: E,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                c.d.m(b)
    }
    ,
    Pe.requestFormReset = function(b) {
        c.d.r(b)
    }
    ,
    Pe.unstable_batchedUpdates = function(b, g) {
        return b(g)
    }
    ,
    Pe.useFormState = function(b, g, E) {
        return p.H.useFormState(b, g, E)
    }
    ,
    Pe.useFormStatus = function() {
        return p.H.useHostTransitionStatus()
    }
    ,
    Pe.version = "19.1.0",
    Pe
}
var ih;
function Wh() {
    if (ih)
        return lo.exports;
    ih = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (r) {
                console.error(r)
            }
    }
    return i(),
    lo.exports = R1(),
    lo.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh;
function M1() {
    if (sh)
        return Jl;
    sh = 1;
    var i = w1()
      , r = Ho()
      , o = Wh();
    function c(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function f(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function h(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function p(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function S(e) {
        if (h(e) !== e)
            throw Error(c(188))
    }
    function b(e) {
        var t = e.alternate;
        if (!t) {
            if (t = h(e),
            t === null)
                throw Error(c(188));
            return t !== e ? null : e
        }
        for (var a = e, n = t; ; ) {
            var l = a.return;
            if (l === null)
                break;
            var s = l.alternate;
            if (s === null) {
                if (n = l.return,
                n !== null) {
                    a = n;
                    continue
                }
                break
            }
            if (l.child === s.child) {
                for (s = l.child; s; ) {
                    if (s === a)
                        return S(l),
                        e;
                    if (s === n)
                        return S(l),
                        t;
                    s = s.sibling
                }
                throw Error(c(188))
            }
            if (a.return !== n.return)
                a = l,
                n = s;
            else {
                for (var u = !1, m = l.child; m; ) {
                    if (m === a) {
                        u = !0,
                        a = l,
                        n = s;
                        break
                    }
                    if (m === n) {
                        u = !0,
                        n = l,
                        a = s;
                        break
                    }
                    m = m.sibling
                }
                if (!u) {
                    for (m = s.child; m; ) {
                        if (m === a) {
                            u = !0,
                            a = s,
                            n = l;
                            break
                        }
                        if (m === n) {
                            u = !0,
                            n = s,
                            a = l;
                            break
                        }
                        m = m.sibling
                    }
                    if (!u)
                        throw Error(c(189))
                }
            }
            if (a.alternate !== n)
                throw Error(c(190))
        }
        if (a.tag !== 3)
            throw Error(c(188));
        return a.stateNode.current === a ? e : t
    }
    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = g(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var E = Object.assign
      , R = Symbol.for("react.element")
      , _ = Symbol.for("react.transitional.element")
      , V = Symbol.for("react.portal")
      , F = Symbol.for("react.fragment")
      , $ = Symbol.for("react.strict_mode")
      , L = Symbol.for("react.profiler")
      , ee = Symbol.for("react.provider")
      , te = Symbol.for("react.consumer")
      , X = Symbol.for("react.context")
      , de = Symbol.for("react.forward_ref")
      , Q = Symbol.for("react.suspense")
      , We = Symbol.for("react.suspense_list")
      , ke = Symbol.for("react.memo")
      , Je = Symbol.for("react.lazy")
      , Ct = Symbol.for("react.activity")
      , rn = Symbol.for("react.memo_cache_sentinel")
      , qt = Symbol.iterator;
    function Ve(e) {
        return e === null || typeof e != "object" ? null : (e = qt && e[qt] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var La = Symbol.for("react.client.reference");
    function qa(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === La ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case F:
            return "Fragment";
        case L:
            return "Profiler";
        case $:
            return "StrictMode";
        case Q:
            return "Suspense";
        case We:
            return "SuspenseList";
        case Ct:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case V:
                return "Portal";
            case X:
                return (e.displayName || "Context") + ".Provider";
            case te:
                return (e._context.displayName || "Context") + ".Consumer";
            case de:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case ke:
                return t = e.displayName || null,
                t !== null ? t : qa(e.type) || "Memo";
            case Je:
                t = e._payload,
                e = e._init;
                try {
                    return qa(e(t))
                } catch {}
            }
        return null
    }
    var Xe = Array.isArray
      , w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , B = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , J = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , be = []
      , y = -1;
    function D(e) {
        return {
            current: e
        }
    }
    function k(e) {
        0 > y || (e.current = be[y],
        be[y] = null,
        y--)
    }
    function H(e, t) {
        y++,
        be[y] = e.current,
        e.current = t
    }
    var Z = D(null)
      , ue = D(null)
      , ae = D(null)
      , lt = D(null);
    function Oe(e, t) {
        switch (H(ae, t),
        H(ue, e),
        H(Z, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Tm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Tm(t),
                e = Cm(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        k(Z),
        H(Z, e)
    }
    function la() {
        k(Z),
        k(ue),
        k(ae)
    }
    function Hs(e) {
        e.memoizedState !== null && H(lt, e);
        var t = Z.current
          , a = Cm(t, e.type);
        t !== a && (H(ue, e),
        H(Z, a))
    }
    function ci(e) {
        ue.current === e && (k(Z),
        k(ue)),
        lt.current === e && (k(lt),
        Xl._currentValue = J)
    }
    var Bs = Object.prototype.hasOwnProperty
      , ks = i.unstable_scheduleCallback
      , Gs = i.unstable_cancelCallback
      , tp = i.unstable_shouldYield
      , ap = i.unstable_requestPaint
      , jt = i.unstable_now
      , np = i.unstable_getCurrentPriorityLevel
      , iu = i.unstable_ImmediatePriority
      , su = i.unstable_UserBlockingPriority
      , oi = i.unstable_NormalPriority
      , lp = i.unstable_LowPriority
      , ru = i.unstable_IdlePriority
      , ip = i.log
      , sp = i.unstable_setDisableYieldValue
      , In = null
      , it = null;
    function ia(e) {
        if (typeof ip == "function" && sp(e),
        it && typeof it.setStrictMode == "function")
            try {
                it.setStrictMode(In, e)
            } catch {}
    }
    var st = Math.clz32 ? Math.clz32 : op
      , rp = Math.log
      , cp = Math.LN2;
    function op(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (rp(e) / cp | 0) | 0
    }
    var ui = 256
      , fi = 4194304;
    function Ha(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function di(e, t, a) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var l = 0
          , s = e.suspendedLanes
          , u = e.pingedLanes;
        e = e.warmLanes;
        var m = n & 134217727;
        return m !== 0 ? (n = m & ~s,
        n !== 0 ? l = Ha(n) : (u &= m,
        u !== 0 ? l = Ha(u) : a || (a = m & ~e,
        a !== 0 && (l = Ha(a))))) : (m = n & ~s,
        m !== 0 ? l = Ha(m) : u !== 0 ? l = Ha(u) : a || (a = n & ~e,
        a !== 0 && (l = Ha(a)))),
        l === 0 ? 0 : t !== 0 && t !== l && (t & s) === 0 && (s = l & -l,
        a = t & -t,
        s >= a || s === 32 && (a & 4194048) !== 0) ? t : l
    }
    function el(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function up(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function cu() {
        var e = ui;
        return ui <<= 1,
        (ui & 4194048) === 0 && (ui = 256),
        e
    }
    function ou() {
        var e = fi;
        return fi <<= 1,
        (fi & 62914560) === 0 && (fi = 4194304),
        e
    }
    function Ys(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function tl(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function fp(e, t, a, n, l, s) {
        var u = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var m = e.entanglements
          , v = e.expirationTimes
          , O = e.hiddenUpdates;
        for (a = u & ~a; 0 < a; ) {
            var j = 31 - st(a)
              , z = 1 << j;
            m[j] = 0,
            v[j] = -1;
            var T = O[j];
            if (T !== null)
                for (O[j] = null,
                j = 0; j < T.length; j++) {
                    var C = T[j];
                    C !== null && (C.lane &= -536870913)
                }
            a &= ~z
        }
        n !== 0 && uu(e, n, 0),
        s !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(u & ~t))
    }
    function uu(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var n = 31 - st(t);
        e.entangledLanes |= t,
        e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 4194090
    }
    function fu(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var n = 31 - st(a)
              , l = 1 << n;
            l & t | e[n] & t && (e[n] |= t),
            a &= ~l
        }
    }
    function Ks(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Vs(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function du() {
        var e = B.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Qm(e.type))
    }
    function dp(e, t) {
        var a = B.p;
        try {
            return B.p = e,
            t()
        } finally {
            B.p = a
        }
    }
    var sa = Math.random().toString(36).slice(2)
      , Qe = "__reactFiber$" + sa
      , Ie = "__reactProps$" + sa
      , cn = "__reactContainer$" + sa
      , Xs = "__reactEvents$" + sa
      , mp = "__reactListeners$" + sa
      , hp = "__reactHandles$" + sa
      , mu = "__reactResources$" + sa
      , al = "__reactMarker$" + sa;
    function Qs(e) {
        delete e[Qe],
        delete e[Ie],
        delete e[Xs],
        delete e[mp],
        delete e[hp]
    }
    function on(e) {
        var t = e[Qe];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[cn] || a[Qe]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Mm(e); e !== null; ) {
                        if (a = e[Qe])
                            return a;
                        e = Mm(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function un(e) {
        if (e = e[Qe] || e[cn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function nl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(c(33))
    }
    function fn(e) {
        var t = e[mu];
        return t || (t = e[mu] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Le(e) {
        e[al] = !0
    }
    var hu = new Set
      , gu = {};
    function Ba(e, t) {
        dn(e, t),
        dn(e + "Capture", t)
    }
    function dn(e, t) {
        for (gu[e] = t,
        e = 0; e < t.length; e++)
            hu.add(t[e])
    }
    var gp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , pu = {}
      , vu = {};
    function pp(e) {
        return Bs.call(vu, e) ? !0 : Bs.call(pu, e) ? !1 : gp.test(e) ? vu[e] = !0 : (pu[e] = !0,
        !1)
    }
    function mi(e, t, a) {
        if (pp(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var n = t.toLowerCase().slice(0, 5);
                    if (n !== "data-" && n !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function hi(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function Ht(e, t, a, n) {
        if (n === null)
            e.removeAttribute(a);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + n)
        }
    }
    var Zs, yu;
    function mn(e) {
        if (Zs === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Zs = t && t[1] || "",
                yu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Zs + e + yu
    }
    var Ps = !1;
    function Fs(e, t) {
        if (!e || Ps)
            return "";
        Ps = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(z, [])
                                } catch (C) {
                                    var T = C
                                }
                                Reflect.construct(e, [], z)
                            } else {
                                try {
                                    z.call()
                                } catch (C) {
                                    T = C
                                }
                                e.call(z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (C) {
                                T = C
                            }
                            (z = e()) && typeof z.catch == "function" && z.catch(function() {})
                        }
                    } catch (C) {
                        if (C && T && typeof C.stack == "string")
                            return [C.stack, T.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = n.DetermineComponentFrameRoot()
              , u = s[0]
              , m = s[1];
            if (u && m) {
                var v = u.split(`
`)
                  , O = m.split(`
`);
                for (l = n = 0; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                for (; l < O.length && !O[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                if (n === v.length || l === O.length)
                    for (n = v.length - 1,
                    l = O.length - 1; 1 <= n && 0 <= l && v[n] !== O[l]; )
                        l--;
                for (; 1 <= n && 0 <= l; n--,
                l--)
                    if (v[n] !== O[l]) {
                        if (n !== 1 || l !== 1)
                            do
                                if (n--,
                                l--,
                                0 > l || v[n] !== O[l]) {
                                    var j = `
` + v[n].replace(" at new ", " at ");
                                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)),
                                    j
                                }
                            while (1 <= n && 0 <= l);
                        break
                    }
            }
        } finally {
            Ps = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? mn(a) : ""
    }
    function vp(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return mn(e.type);
        case 16:
            return mn("Lazy");
        case 13:
            return mn("Suspense");
        case 19:
            return mn("SuspenseList");
        case 0:
        case 15:
            return Fs(e.type, !1);
        case 11:
            return Fs(e.type.render, !1);
        case 1:
            return Fs(e.type, !0);
        case 31:
            return mn("Activity");
        default:
            return ""
        }
    }
    function bu(e) {
        try {
            var t = "";
            do
                t += vp(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function gt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function xu(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function yp(e) {
        var t = xu(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , n = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var l = a.get
              , s = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(u) {
                    n = "" + u,
                    s.call(this, u)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(u) {
                    n = "" + u
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function gi(e) {
        e._valueTracker || (e._valueTracker = yp(e))
    }
    function Su(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , n = "";
        return e && (n = xu(e) ? e.checked ? "true" : "false" : e.value),
        e = n,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function pi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var bp = /[\n"\\]/g;
    function pt(e) {
        return e.replace(bp, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Ws(e, t, a, n, l, s, u, m) {
        e.name = "",
        u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"),
        t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + gt(t)) : e.value !== "" + gt(t) && (e.value = "" + gt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"),
        t != null ? Js(e, u, gt(t)) : a != null ? Js(e, u, gt(a)) : n != null && e.removeAttribute("value"),
        l == null && s != null && (e.defaultChecked = !!s),
        l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"),
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + gt(m) : e.removeAttribute("name")
    }
    function Au(e, t, a, n, l, s, u, m) {
        if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s),
        t != null || a != null) {
            if (!(s !== "submit" && s !== "reset" || t != null))
                return;
            a = a != null ? "" + gt(a) : "",
            t = t != null ? "" + gt(t) : a,
            m || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = n ?? l,
        n = typeof n != "function" && typeof n != "symbol" && !!n,
        e.checked = m ? e.checked : !!n,
        e.defaultChecked = !!n,
        u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u)
    }
    function Js(e, t, a) {
        t === "number" && pi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function hn(e, t, a, n) {
        if (e = e.options,
        t) {
            t = {};
            for (var l = 0; l < a.length; l++)
                t["$" + a[l]] = !0;
            for (a = 0; a < e.length; a++)
                l = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== l && (e[a].selected = l),
                l && n && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + gt(a),
            t = null,
            l = 0; l < e.length; l++) {
                if (e[l].value === a) {
                    e[l].selected = !0,
                    n && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Nu(e, t, a) {
        if (t != null && (t = "" + gt(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + gt(a) : ""
    }
    function Ou(e, t, a, n) {
        if (t == null) {
            if (n != null) {
                if (a != null)
                    throw Error(c(92));
                if (Xe(n)) {
                    if (1 < n.length)
                        throw Error(c(93));
                    n = n[0]
                }
                a = n
            }
            a == null && (a = ""),
            t = a
        }
        a = gt(t),
        e.defaultValue = a,
        n = e.textContent,
        n === a && n !== "" && n !== null && (e.value = n)
    }
    function gn(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var xp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Eu(e, t, a) {
        var n = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || xp.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Tu(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(c(62));
        if (e = e.style,
        a != null) {
            for (var n in a)
                !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
            for (var l in t)
                n = t[l],
                t.hasOwnProperty(l) && a[l] !== n && Eu(e, l, n)
        } else
            for (var s in t)
                t.hasOwnProperty(s) && Eu(e, s, t[s])
    }
    function $s(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Sp = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Ap = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function vi(e) {
        return Ap.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Is = null;
    function er(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var pn = null
      , vn = null;
    function Cu(e) {
        var t = un(e);
        if (t && (e = t.stateNode)) {
            var a = e[Ie] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Ws(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var n = a[t];
                        if (n !== e && n.form === e.form) {
                            var l = n[Ie] || null;
                            if (!l)
                                throw Error(c(90));
                            Ws(n, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        n = a[t],
                        n.form === e.form && Su(n)
                }
                break e;
            case "textarea":
                Nu(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && hn(e, !!a.multiple, t, !1)
            }
        }
    }
    var tr = !1;
    function ju(e, t, a) {
        if (tr)
            return e(t, a);
        tr = !0;
        try {
            var n = e(t);
            return n
        } finally {
            if (tr = !1,
            (pn !== null || vn !== null) && (as(),
            pn && (t = pn,
            e = vn,
            vn = pn = null,
            Cu(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Cu(e[t])
        }
    }
    function ll(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var n = a[Ie] || null;
        if (n === null)
            return null;
        a = n[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type,
            n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !n;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(c(231, t, typeof a));
        return a
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , ar = !1;
    if (Bt)
        try {
            var il = {};
            Object.defineProperty(il, "passive", {
                get: function() {
                    ar = !0
                }
            }),
            window.addEventListener("test", il, il),
            window.removeEventListener("test", il, il)
        } catch {
            ar = !1
        }
    var ra = null
      , nr = null
      , yi = null;
    function wu() {
        if (yi)
            return yi;
        var e, t = nr, a = t.length, n, l = "value"in ra ? ra.value : ra.textContent, s = l.length;
        for (e = 0; e < a && t[e] === l[e]; e++)
            ;
        var u = a - e;
        for (n = 1; n <= u && t[a - n] === l[s - n]; n++)
            ;
        return yi = l.slice(e, 1 < n ? 1 - n : void 0)
    }
    function bi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function xi() {
        return !0
    }
    function Ru() {
        return !1
    }
    function et(e) {
        function t(a, n, l, s, u) {
            this._reactName = a,
            this._targetInst = l,
            this.type = n,
            this.nativeEvent = s,
            this.target = u,
            this.currentTarget = null;
            for (var m in e)
                e.hasOwnProperty(m) && (a = e[m],
                this[m] = a ? a(s) : s[m]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? xi : Ru,
            this.isPropagationStopped = Ru,
            this
        }
        return E(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = xi)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = xi)
            },
            persist: function() {},
            isPersistent: xi
        }),
        t
    }
    var ka = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Si = et(ka), sl = E({}, ka, {
        view: 0,
        detail: 0
    }), Np = et(sl), lr, ir, rl, Ai = E({}, sl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: rr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== rl && (rl && e.type === "mousemove" ? (lr = e.screenX - rl.screenX,
            ir = e.screenY - rl.screenY) : ir = lr = 0,
            rl = e),
            lr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : ir
        }
    }), Mu = et(Ai), Op = E({}, Ai, {
        dataTransfer: 0
    }), Ep = et(Op), Tp = E({}, sl, {
        relatedTarget: 0
    }), sr = et(Tp), Cp = E({}, ka, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), jp = et(Cp), wp = E({}, ka, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Rp = et(wp), Mp = E({}, ka, {
        data: 0
    }), zu = et(Mp), zp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Dp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, _p = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Up(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = _p[e]) ? !!t[e] : !1
    }
    function rr() {
        return Up
    }
    var Lp = E({}, sl, {
        key: function(e) {
            if (e.key) {
                var t = zp[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = bi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: rr,
        charCode: function(e) {
            return e.type === "keypress" ? bi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , qp = et(Lp)
      , Hp = E({}, Ai, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Du = et(Hp)
      , Bp = E({}, sl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: rr
    })
      , kp = et(Bp)
      , Gp = E({}, ka, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Yp = et(Gp)
      , Kp = E({}, Ai, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Vp = et(Kp)
      , Xp = E({}, ka, {
        newState: 0,
        oldState: 0
    })
      , Qp = et(Xp)
      , Zp = [9, 13, 27, 32]
      , cr = Bt && "CompositionEvent"in window
      , cl = null;
    Bt && "documentMode"in document && (cl = document.documentMode);
    var Pp = Bt && "TextEvent"in window && !cl
      , _u = Bt && (!cr || cl && 8 < cl && 11 >= cl)
      , Uu = " "
      , Lu = !1;
    function qu(e, t) {
        switch (e) {
        case "keyup":
            return Zp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Hu(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var yn = !1;
    function Fp(e, t) {
        switch (e) {
        case "compositionend":
            return Hu(t);
        case "keypress":
            return t.which !== 32 ? null : (Lu = !0,
            Uu);
        case "textInput":
            return e = t.data,
            e === Uu && Lu ? null : e;
        default:
            return null
        }
    }
    function Wp(e, t) {
        if (yn)
            return e === "compositionend" || !cr && qu(e, t) ? (e = wu(),
            yi = nr = ra = null,
            yn = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return _u && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Jp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Bu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Jp[e.type] : t === "textarea"
    }
    function ku(e, t, a, n) {
        pn ? vn ? vn.push(n) : vn = [n] : pn = n,
        t = cs(t, "onChange"),
        0 < t.length && (a = new Si("onChange","change",null,a,n),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ol = null
      , ul = null;
    function $p(e) {
        Sm(e, 0)
    }
    function Ni(e) {
        var t = nl(e);
        if (Su(t))
            return e
    }
    function Gu(e, t) {
        if (e === "change")
            return t
    }
    var Yu = !1;
    if (Bt) {
        var or;
        if (Bt) {
            var ur = "oninput"in document;
            if (!ur) {
                var Ku = document.createElement("div");
                Ku.setAttribute("oninput", "return;"),
                ur = typeof Ku.oninput == "function"
            }
            or = ur
        } else
            or = !1;
        Yu = or && (!document.documentMode || 9 < document.documentMode)
    }
    function Vu() {
        ol && (ol.detachEvent("onpropertychange", Xu),
        ul = ol = null)
    }
    function Xu(e) {
        if (e.propertyName === "value" && Ni(ul)) {
            var t = [];
            ku(t, ul, e, er(e)),
            ju($p, t)
        }
    }
    function Ip(e, t, a) {
        e === "focusin" ? (Vu(),
        ol = t,
        ul = a,
        ol.attachEvent("onpropertychange", Xu)) : e === "focusout" && Vu()
    }
    function e0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ni(ul)
    }
    function t0(e, t) {
        if (e === "click")
            return Ni(t)
    }
    function a0(e, t) {
        if (e === "input" || e === "change")
            return Ni(t)
    }
    function n0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var rt = typeof Object.is == "function" ? Object.is : n0;
    function fl(e, t) {
        if (rt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , n = Object.keys(t);
        if (a.length !== n.length)
            return !1;
        for (n = 0; n < a.length; n++) {
            var l = a[n];
            if (!Bs.call(t, l) || !rt(e[l], t[l]))
                return !1
        }
        return !0
    }
    function Qu(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Zu(e, t) {
        var a = Qu(e);
        e = 0;
        for (var n; a; ) {
            if (a.nodeType === 3) {
                if (n = e + a.textContent.length,
                e <= t && n >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Qu(a)
        }
    }
    function Pu(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Fu(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = pi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = pi(e.document)
        }
        return t
    }
    function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var l0 = Bt && "documentMode"in document && 11 >= document.documentMode
      , bn = null
      , dr = null
      , dl = null
      , mr = !1;
    function Wu(e, t, a) {
        var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        mr || bn == null || bn !== pi(n) || (n = bn,
        "selectionStart"in n && fr(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
        n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }),
        dl && fl(dl, n) || (dl = n,
        n = cs(dr, "onSelect"),
        0 < n.length && (t = new Si("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: n
        }),
        t.target = bn)))
    }
    function Ga(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var xn = {
        animationend: Ga("Animation", "AnimationEnd"),
        animationiteration: Ga("Animation", "AnimationIteration"),
        animationstart: Ga("Animation", "AnimationStart"),
        transitionrun: Ga("Transition", "TransitionRun"),
        transitionstart: Ga("Transition", "TransitionStart"),
        transitioncancel: Ga("Transition", "TransitionCancel"),
        transitionend: Ga("Transition", "TransitionEnd")
    }
      , hr = {}
      , Ju = {};
    Bt && (Ju = document.createElement("div").style,
    "AnimationEvent"in window || (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
    "TransitionEvent"in window || delete xn.transitionend.transition);
    function Ya(e) {
        if (hr[e])
            return hr[e];
        if (!xn[e])
            return e;
        var t = xn[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Ju)
                return hr[e] = t[a];
        return e
    }
    var $u = Ya("animationend")
      , Iu = Ya("animationiteration")
      , ef = Ya("animationstart")
      , i0 = Ya("transitionrun")
      , s0 = Ya("transitionstart")
      , r0 = Ya("transitioncancel")
      , tf = Ya("transitionend")
      , af = new Map
      , gr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    gr.push("scrollEnd");
    function Ot(e, t) {
        af.set(e, t),
        Ba(t, [e])
    }
    var nf = new WeakMap;
    function vt(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = nf.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: bu(t)
            },
            nf.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: bu(t)
        }
    }
    var yt = []
      , Sn = 0
      , pr = 0;
    function Oi() {
        for (var e = Sn, t = pr = Sn = 0; t < e; ) {
            var a = yt[t];
            yt[t++] = null;
            var n = yt[t];
            yt[t++] = null;
            var l = yt[t];
            yt[t++] = null;
            var s = yt[t];
            if (yt[t++] = null,
            n !== null && l !== null) {
                var u = n.pending;
                u === null ? l.next = l : (l.next = u.next,
                u.next = l),
                n.pending = l
            }
            s !== 0 && lf(a, l, s)
        }
    }
    function Ei(e, t, a, n) {
        yt[Sn++] = e,
        yt[Sn++] = t,
        yt[Sn++] = a,
        yt[Sn++] = n,
        pr |= n,
        e.lanes |= n,
        e = e.alternate,
        e !== null && (e.lanes |= n)
    }
    function vr(e, t, a, n) {
        return Ei(e, t, a, n),
        Ti(e)
    }
    function An(e, t) {
        return Ei(e, null, null, t),
        Ti(e)
    }
    function lf(e, t, a) {
        e.lanes |= a;
        var n = e.alternate;
        n !== null && (n.lanes |= a);
        for (var l = !1, s = e.return; s !== null; )
            s.childLanes |= a,
            n = s.alternate,
            n !== null && (n.childLanes |= a),
            s.tag === 22 && (e = s.stateNode,
            e === null || e._visibility & 1 || (l = !0)),
            e = s,
            s = s.return;
        return e.tag === 3 ? (s = e.stateNode,
        l && t !== null && (l = 31 - st(a),
        e = s.hiddenUpdates,
        n = e[l],
        n === null ? e[l] = [t] : n.push(t),
        t.lane = a | 536870912),
        s) : null
    }
    function Ti(e) {
        if (50 < ql)
            throw ql = 0,
            Nc = null,
            Error(c(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Nn = {};
    function c0(e, t, a, n) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = n,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ct(e, t, a, n) {
        return new c0(e,t,a,n)
    }
    function yr(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function kt(e, t) {
        var a = e.alternate;
        return a === null ? (a = ct(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 65011712,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function sf(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Ci(e, t, a, n, l, s) {
        var u = 0;
        if (n = e,
        typeof e == "function")
            yr(e) && (u = 1);
        else if (typeof e == "string")
            u = u1(e, a, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Ct:
                return e = ct(31, a, t, l),
                e.elementType = Ct,
                e.lanes = s,
                e;
            case F:
                return Ka(a.children, l, s, t);
            case $:
                u = 8,
                l |= 24;
                break;
            case L:
                return e = ct(12, a, t, l | 2),
                e.elementType = L,
                e.lanes = s,
                e;
            case Q:
                return e = ct(13, a, t, l),
                e.elementType = Q,
                e.lanes = s,
                e;
            case We:
                return e = ct(19, a, t, l),
                e.elementType = We,
                e.lanes = s,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case ee:
                    case X:
                        u = 10;
                        break e;
                    case te:
                        u = 9;
                        break e;
                    case de:
                        u = 11;
                        break e;
                    case ke:
                        u = 14;
                        break e;
                    case Je:
                        u = 16,
                        n = null;
                        break e
                    }
                u = 29,
                a = Error(c(130, e === null ? "null" : typeof e, "")),
                n = null
            }
        return t = ct(u, a, t, l),
        t.elementType = e,
        t.type = n,
        t.lanes = s,
        t
    }
    function Ka(e, t, a, n) {
        return e = ct(7, e, n, t),
        e.lanes = a,
        e
    }
    function br(e, t, a) {
        return e = ct(6, e, null, t),
        e.lanes = a,
        e
    }
    function xr(e, t, a) {
        return t = ct(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var On = []
      , En = 0
      , ji = null
      , wi = 0
      , bt = []
      , xt = 0
      , Va = null
      , Gt = 1
      , Yt = "";
    function Xa(e, t) {
        On[En++] = wi,
        On[En++] = ji,
        ji = e,
        wi = t
    }
    function rf(e, t, a) {
        bt[xt++] = Gt,
        bt[xt++] = Yt,
        bt[xt++] = Va,
        Va = e;
        var n = Gt;
        e = Yt;
        var l = 32 - st(n) - 1;
        n &= ~(1 << l),
        a += 1;
        var s = 32 - st(t) + l;
        if (30 < s) {
            var u = l - l % 5;
            s = (n & (1 << u) - 1).toString(32),
            n >>= u,
            l -= u,
            Gt = 1 << 32 - st(t) + l | a << l | n,
            Yt = s + e
        } else
            Gt = 1 << s | a << l | n,
            Yt = e
    }
    function Sr(e) {
        e.return !== null && (Xa(e, 1),
        rf(e, 1, 0))
    }
    function Ar(e) {
        for (; e === ji; )
            ji = On[--En],
            On[En] = null,
            wi = On[--En],
            On[En] = null;
        for (; e === Va; )
            Va = bt[--xt],
            bt[xt] = null,
            Yt = bt[--xt],
            bt[xt] = null,
            Gt = bt[--xt],
            bt[xt] = null
    }
    var $e = null
      , Ce = null
      , me = !1
      , Qa = null
      , wt = !1
      , Nr = Error(c(519));
    function Za(e) {
        var t = Error(c(418, ""));
        throw gl(vt(t, e)),
        Nr
    }
    function cf(e) {
        var t = e.stateNode
          , a = e.type
          , n = e.memoizedProps;
        switch (t[Qe] = e,
        t[Ie] = n,
        a) {
        case "dialog":
            re("cancel", t),
            re("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            re("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Bl.length; a++)
                re(Bl[a], t);
            break;
        case "source":
            re("error", t);
            break;
        case "img":
        case "image":
        case "link":
            re("error", t),
            re("load", t);
            break;
        case "details":
            re("toggle", t);
            break;
        case "input":
            re("invalid", t),
            Au(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0),
            gi(t);
            break;
        case "select":
            re("invalid", t);
            break;
        case "textarea":
            re("invalid", t),
            Ou(t, n.value, n.defaultValue, n.children),
            gi(t)
        }
        a = n.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || Em(t.textContent, a) ? (n.popover != null && (re("beforetoggle", t),
        re("toggle", t)),
        n.onScroll != null && re("scroll", t),
        n.onScrollEnd != null && re("scrollend", t),
        n.onClick != null && (t.onclick = os),
        t = !0) : t = !1,
        t || Za(e)
    }
    function of(e) {
        for ($e = e.return; $e; )
            switch ($e.tag) {
            case 5:
            case 13:
                wt = !1;
                return;
            case 27:
            case 3:
                wt = !0;
                return;
            default:
                $e = $e.return
            }
    }
    function ml(e) {
        if (e !== $e)
            return !1;
        if (!me)
            return of(e),
            me = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Bc(e.type, e.memoizedProps)),
        a = !a),
        a && Ce && Za(e),
        of(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(c(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (a = e.data,
                        a === "/$") {
                            if (t === 0) {
                                Ce = Tt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                Ce = null
            }
        } else
            t === 27 ? (t = Ce,
            Na(e.type) ? (e = Kc,
            Kc = null,
            Ce = e) : Ce = t) : Ce = $e ? Tt(e.stateNode.nextSibling) : null;
        return !0
    }
    function hl() {
        Ce = $e = null,
        me = !1
    }
    function uf() {
        var e = Qa;
        return e !== null && (nt === null ? nt = e : nt.push.apply(nt, e),
        Qa = null),
        e
    }
    function gl(e) {
        Qa === null ? Qa = [e] : Qa.push(e)
    }
    var Or = D(null)
      , Pa = null
      , Kt = null;
    function ca(e, t, a) {
        H(Or, t._currentValue),
        t._currentValue = a
    }
    function Vt(e) {
        e._currentValue = Or.current,
        k(Or)
    }
    function Er(e, t, a) {
        for (; e !== null; ) {
            var n = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function Tr(e, t, a, n) {
        var l = e.child;
        for (l !== null && (l.return = e); l !== null; ) {
            var s = l.dependencies;
            if (s !== null) {
                var u = l.child;
                s = s.firstContext;
                e: for (; s !== null; ) {
                    var m = s;
                    s = l;
                    for (var v = 0; v < t.length; v++)
                        if (m.context === t[v]) {
                            s.lanes |= a,
                            m = s.alternate,
                            m !== null && (m.lanes |= a),
                            Er(s.return, a, e),
                            n || (u = null);
                            break e
                        }
                    s = m.next
                }
            } else if (l.tag === 18) {
                if (u = l.return,
                u === null)
                    throw Error(c(341));
                u.lanes |= a,
                s = u.alternate,
                s !== null && (s.lanes |= a),
                Er(u, a, e),
                u = null
            } else
                u = l.child;
            if (u !== null)
                u.return = l;
            else
                for (u = l; u !== null; ) {
                    if (u === e) {
                        u = null;
                        break
                    }
                    if (l = u.sibling,
                    l !== null) {
                        l.return = u.return,
                        u = l;
                        break
                    }
                    u = u.return
                }
            l = u
        }
    }
    function pl(e, t, a, n) {
        e = null;
        for (var l = t, s = !1; l !== null; ) {
            if (!s) {
                if ((l.flags & 524288) !== 0)
                    s = !0;
                else if ((l.flags & 262144) !== 0)
                    break
            }
            if (l.tag === 10) {
                var u = l.alternate;
                if (u === null)
                    throw Error(c(387));
                if (u = u.memoizedProps,
                u !== null) {
                    var m = l.type;
                    rt(l.pendingProps.value, u.value) || (e !== null ? e.push(m) : e = [m])
                }
            } else if (l === lt.current) {
                if (u = l.alternate,
                u === null)
                    throw Error(c(387));
                u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Xl) : e = [Xl])
            }
            l = l.return
        }
        e !== null && Tr(t, e, a, n),
        t.flags |= 262144
    }
    function Ri(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!rt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Fa(e) {
        Pa = e,
        Kt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Ze(e) {
        return ff(Pa, e)
    }
    function Mi(e, t) {
        return Pa === null && Fa(e),
        ff(e, t)
    }
    function ff(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Kt === null) {
            if (e === null)
                throw Error(c(308));
            Kt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Kt = Kt.next = t;
        return a
    }
    var o0 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, n) {
                e.push(n)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , u0 = i.unstable_scheduleCallback
      , f0 = i.unstable_NormalPriority
      , _e = {
        $$typeof: X,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Cr() {
        return {
            controller: new o0,
            data: new Map,
            refCount: 0
        }
    }
    function vl(e) {
        e.refCount--,
        e.refCount === 0 && u0(f0, function() {
            e.controller.abort()
        })
    }
    var yl = null
      , jr = 0
      , Tn = 0
      , Cn = null;
    function d0(e, t) {
        if (yl === null) {
            var a = yl = [];
            jr = 0,
            Tn = Rc(),
            Cn = {
                status: "pending",
                value: void 0,
                then: function(n) {
                    a.push(n)
                }
            }
        }
        return jr++,
        t.then(df, df),
        t
    }
    function df() {
        if (--jr === 0 && yl !== null) {
            Cn !== null && (Cn.status = "fulfilled");
            var e = yl;
            yl = null,
            Tn = 0,
            Cn = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function m0(e, t) {
        var a = []
          , n = {
            status: "pending",
            value: null,
            reason: null,
            then: function(l) {
                a.push(l)
            }
        };
        return e.then(function() {
            n.status = "fulfilled",
            n.value = t;
            for (var l = 0; l < a.length; l++)
                (0,
                a[l])(t)
        }, function(l) {
            for (n.status = "rejected",
            n.reason = l,
            l = 0; l < a.length; l++)
                (0,
                a[l])(void 0)
        }),
        n
    }
    var mf = w.S;
    w.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && d0(e, t),
        mf !== null && mf(e, t)
    }
    ;
    var Wa = D(null);
    function wr() {
        var e = Wa.current;
        return e !== null ? e : Ae.pooledCache
    }
    function zi(e, t) {
        t === null ? H(Wa, Wa.current) : H(Wa, t.pool)
    }
    function hf() {
        var e = wr();
        return e === null ? null : {
            parent: _e._currentValue,
            pool: e
        }
    }
    var bl = Error(c(460))
      , gf = Error(c(474))
      , Di = Error(c(542))
      , Rr = {
        then: function() {}
    };
    function pf(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function _i() {}
    function vf(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(_i, _i),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            bf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(_i, _i);
            else {
                if (e = Ae,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(c(482));
                e = t,
                e.status = "pending",
                e.then(function(n) {
                    if (t.status === "pending") {
                        var l = t;
                        l.status = "fulfilled",
                        l.value = n
                    }
                }, function(n) {
                    if (t.status === "pending") {
                        var l = t;
                        l.status = "rejected",
                        l.reason = n
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                bf(e),
                e
            }
            throw xl = t,
            bl
        }
    }
    var xl = null;
    function yf() {
        if (xl === null)
            throw Error(c(459));
        var e = xl;
        return xl = null,
        e
    }
    function bf(e) {
        if (e === bl || e === Di)
            throw Error(c(483))
    }
    var oa = !1;
    function Mr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function zr(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function ua(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fa(e, t, a) {
        var n = e.updateQueue;
        if (n === null)
            return null;
        if (n = n.shared,
        (he & 2) !== 0) {
            var l = n.pending;
            return l === null ? t.next = t : (t.next = l.next,
            l.next = t),
            n.pending = t,
            t = Ti(e),
            lf(e, null, a),
            t
        }
        return Ei(e, n, t, a),
        Ti(e)
    }
    function Sl(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var n = t.lanes;
            n &= e.pendingLanes,
            a |= n,
            t.lanes = a,
            fu(e, a)
        }
    }
    function Dr(e, t) {
        var a = e.updateQueue
          , n = e.alternate;
        if (n !== null && (n = n.updateQueue,
        a === n)) {
            var l = null
              , s = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var u = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    s === null ? l = s = u : s = s.next = u,
                    a = a.next
                } while (a !== null);
                s === null ? l = s = t : s = s.next = t
            } else
                l = s = t;
            a = {
                baseState: n.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: s,
                shared: n.shared,
                callbacks: n.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var _r = !1;
    function Al() {
        if (_r) {
            var e = Cn;
            if (e !== null)
                throw e
        }
    }
    function Nl(e, t, a, n) {
        _r = !1;
        var l = e.updateQueue;
        oa = !1;
        var s = l.firstBaseUpdate
          , u = l.lastBaseUpdate
          , m = l.shared.pending;
        if (m !== null) {
            l.shared.pending = null;
            var v = m
              , O = v.next;
            v.next = null,
            u === null ? s = O : u.next = O,
            u = v;
            var j = e.alternate;
            j !== null && (j = j.updateQueue,
            m = j.lastBaseUpdate,
            m !== u && (m === null ? j.firstBaseUpdate = O : m.next = O,
            j.lastBaseUpdate = v))
        }
        if (s !== null) {
            var z = l.baseState;
            u = 0,
            j = O = v = null,
            m = s;
            do {
                var T = m.lane & -536870913
                  , C = T !== m.lane;
                if (C ? (oe & T) === T : (n & T) === T) {
                    T !== 0 && T === Tn && (_r = !0),
                    j !== null && (j = j.next = {
                        lane: 0,
                        tag: m.tag,
                        payload: m.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var I = e
                          , P = m;
                        T = t;
                        var ye = a;
                        switch (P.tag) {
                        case 1:
                            if (I = P.payload,
                            typeof I == "function") {
                                z = I.call(ye, z, T);
                                break e
                            }
                            z = I;
                            break e;
                        case 3:
                            I.flags = I.flags & -65537 | 128;
                        case 0:
                            if (I = P.payload,
                            T = typeof I == "function" ? I.call(ye, z, T) : I,
                            T == null)
                                break e;
                            z = E({}, z, T);
                            break e;
                        case 2:
                            oa = !0
                        }
                    }
                    T = m.callback,
                    T !== null && (e.flags |= 64,
                    C && (e.flags |= 8192),
                    C = l.callbacks,
                    C === null ? l.callbacks = [T] : C.push(T))
                } else
                    C = {
                        lane: T,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    },
                    j === null ? (O = j = C,
                    v = z) : j = j.next = C,
                    u |= T;
                if (m = m.next,
                m === null) {
                    if (m = l.shared.pending,
                    m === null)
                        break;
                    C = m,
                    m = C.next,
                    C.next = null,
                    l.lastBaseUpdate = C,
                    l.shared.pending = null
                }
            } while (!0);
            j === null && (v = z),
            l.baseState = v,
            l.firstBaseUpdate = O,
            l.lastBaseUpdate = j,
            s === null && (l.shared.lanes = 0),
            ba |= u,
            e.lanes = u,
            e.memoizedState = z
        }
    }
    function xf(e, t) {
        if (typeof e != "function")
            throw Error(c(191, e));
        e.call(t)
    }
    function Sf(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                xf(a[e], t)
    }
    var jn = D(null)
      , Ui = D(0);
    function Af(e, t) {
        e = Jt,
        H(Ui, e),
        H(jn, t),
        Jt = e | t.baseLanes
    }
    function Ur() {
        H(Ui, Jt),
        H(jn, jn.current)
    }
    function Lr() {
        Jt = Ui.current,
        k(jn),
        k(Ui)
    }
    var da = 0
      , le = null
      , pe = null
      , Me = null
      , Li = !1
      , wn = !1
      , Ja = !1
      , qi = 0
      , Ol = 0
      , Rn = null
      , h0 = 0;
    function we() {
        throw Error(c(321))
    }
    function qr(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!rt(e[a], t[a]))
                return !1;
        return !0
    }
    function Hr(e, t, a, n, l, s) {
        return da = s,
        le = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        w.H = e === null || e.memoizedState === null ? id : sd,
        Ja = !1,
        s = a(n, l),
        Ja = !1,
        wn && (s = Of(t, a, n, l)),
        Nf(e),
        s
    }
    function Nf(e) {
        w.H = Ki;
        var t = pe !== null && pe.next !== null;
        if (da = 0,
        Me = pe = le = null,
        Li = !1,
        Ol = 0,
        Rn = null,
        t)
            throw Error(c(300));
        e === null || qe || (e = e.dependencies,
        e !== null && Ri(e) && (qe = !0))
    }
    function Of(e, t, a, n) {
        le = e;
        var l = 0;
        do {
            if (wn && (Rn = null),
            Ol = 0,
            wn = !1,
            25 <= l)
                throw Error(c(301));
            if (l += 1,
            Me = pe = null,
            e.updateQueue != null) {
                var s = e.updateQueue;
                s.lastEffect = null,
                s.events = null,
                s.stores = null,
                s.memoCache != null && (s.memoCache.index = 0)
            }
            w.H = S0,
            s = t(a, n)
        } while (wn);
        return s
    }
    function g0() {
        var e = w.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? El(t) : t,
        e = e.useState()[0],
        (pe !== null ? pe.memoizedState : null) !== e && (le.flags |= 1024),
        t
    }
    function Br() {
        var e = qi !== 0;
        return qi = 0,
        e
    }
    function kr(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function Gr(e) {
        if (Li) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Li = !1
        }
        da = 0,
        Me = pe = le = null,
        wn = !1,
        Ol = qi = 0,
        Rn = null
    }
    function tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Me === null ? le.memoizedState = Me = e : Me = Me.next = e,
        Me
    }
    function ze() {
        if (pe === null) {
            var e = le.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = pe.next;
        var t = Me === null ? le.memoizedState : Me.next;
        if (t !== null)
            Me = t,
            pe = e;
        else {
            if (e === null)
                throw le.alternate === null ? Error(c(467)) : Error(c(310));
            pe = e,
            e = {
                memoizedState: pe.memoizedState,
                baseState: pe.baseState,
                baseQueue: pe.baseQueue,
                queue: pe.queue,
                next: null
            },
            Me === null ? le.memoizedState = Me = e : Me = Me.next = e
        }
        return Me
    }
    function Yr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function El(e) {
        var t = Ol;
        return Ol += 1,
        Rn === null && (Rn = []),
        e = vf(Rn, e, t),
        t = le,
        (Me === null ? t.memoizedState : Me.next) === null && (t = t.alternate,
        w.H = t === null || t.memoizedState === null ? id : sd),
        e
    }
    function Hi(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return El(e);
            if (e.$$typeof === X)
                return Ze(e)
        }
        throw Error(c(438, String(e)))
    }
    function Kr(e) {
        var t = null
          , a = le.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var n = le.alternate;
            n !== null && (n = n.updateQueue,
            n !== null && (n = n.memoCache,
            n != null && (t = {
                data: n.data.map(function(l) {
                    return l.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = Yr(),
        le.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            n = 0; n < e; n++)
                a[n] = rn;
        return t.index++,
        a
    }
    function Xt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Bi(e) {
        var t = ze();
        return Vr(t, pe, e)
    }
    function Vr(e, t, a) {
        var n = e.queue;
        if (n === null)
            throw Error(c(311));
        n.lastRenderedReducer = a;
        var l = e.baseQueue
          , s = n.pending;
        if (s !== null) {
            if (l !== null) {
                var u = l.next;
                l.next = s.next,
                s.next = u
            }
            t.baseQueue = l = s,
            n.pending = null
        }
        if (s = e.baseState,
        l === null)
            e.memoizedState = s;
        else {
            t = l.next;
            var m = u = null
              , v = null
              , O = t
              , j = !1;
            do {
                var z = O.lane & -536870913;
                if (z !== O.lane ? (oe & z) === z : (da & z) === z) {
                    var T = O.revertLane;
                    if (T === 0)
                        v !== null && (v = v.next = {
                            lane: 0,
                            revertLane: 0,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        }),
                        z === Tn && (j = !0);
                    else if ((da & T) === T) {
                        O = O.next,
                        T === Tn && (j = !0);
                        continue
                    } else
                        z = {
                            lane: 0,
                            revertLane: O.revertLane,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        },
                        v === null ? (m = v = z,
                        u = s) : v = v.next = z,
                        le.lanes |= T,
                        ba |= T;
                    z = O.action,
                    Ja && a(s, z),
                    s = O.hasEagerState ? O.eagerState : a(s, z)
                } else
                    T = {
                        lane: z,
                        revertLane: O.revertLane,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    },
                    v === null ? (m = v = T,
                    u = s) : v = v.next = T,
                    le.lanes |= z,
                    ba |= z;
                O = O.next
            } while (O !== null && O !== t);
            if (v === null ? u = s : v.next = m,
            !rt(s, e.memoizedState) && (qe = !0,
            j && (a = Cn,
            a !== null)))
                throw a;
            e.memoizedState = s,
            e.baseState = u,
            e.baseQueue = v,
            n.lastRenderedState = s
        }
        return l === null && (n.lanes = 0),
        [e.memoizedState, n.dispatch]
    }
    function Xr(e) {
        var t = ze()
          , a = t.queue;
        if (a === null)
            throw Error(c(311));
        a.lastRenderedReducer = e;
        var n = a.dispatch
          , l = a.pending
          , s = t.memoizedState;
        if (l !== null) {
            a.pending = null;
            var u = l = l.next;
            do
                s = e(s, u.action),
                u = u.next;
            while (u !== l);
            rt(s, t.memoizedState) || (qe = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            a.lastRenderedState = s
        }
        return [s, n]
    }
    function Ef(e, t, a) {
        var n = le
          , l = ze()
          , s = me;
        if (s) {
            if (a === void 0)
                throw Error(c(407));
            a = a()
        } else
            a = t();
        var u = !rt((pe || l).memoizedState, a);
        u && (l.memoizedState = a,
        qe = !0),
        l = l.queue;
        var m = jf.bind(null, n, l, e);
        if (Tl(2048, 8, m, [e]),
        l.getSnapshot !== t || u || Me !== null && Me.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            Mn(9, ki(), Cf.bind(null, n, l, a, t), null),
            Ae === null)
                throw Error(c(349));
            s || (da & 124) !== 0 || Tf(n, t, a)
        }
        return a
    }
    function Tf(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = le.updateQueue,
        t === null ? (t = Yr(),
        le.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Cf(e, t, a, n) {
        t.value = a,
        t.getSnapshot = n,
        wf(t) && Rf(e)
    }
    function jf(e, t, a) {
        return a(function() {
            wf(t) && Rf(e)
        })
    }
    function wf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !rt(e, a)
        } catch {
            return !0
        }
    }
    function Rf(e) {
        var t = An(e, 2);
        t !== null && mt(t, e, 2)
    }
    function Qr(e) {
        var t = tt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Ja) {
                ia(!0);
                try {
                    a()
                } finally {
                    ia(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xt,
            lastRenderedState: e
        },
        t
    }
    function Mf(e, t, a, n) {
        return e.baseState = a,
        Vr(e, pe, typeof n == "function" ? n : Xt)
    }
    function p0(e, t, a, n, l) {
        if (Yi(e))
            throw Error(c(485));
        if (e = t.action,
        e !== null) {
            var s = {
                payload: l,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(u) {
                    s.listeners.push(u)
                }
            };
            w.T !== null ? a(!0) : s.isTransition = !1,
            n(s),
            a = t.pending,
            a === null ? (s.next = t.pending = s,
            zf(t, s)) : (s.next = a.next,
            t.pending = a.next = s)
        }
    }
    function zf(e, t) {
        var a = t.action
          , n = t.payload
          , l = e.state;
        if (t.isTransition) {
            var s = w.T
              , u = {};
            w.T = u;
            try {
                var m = a(l, n)
                  , v = w.S;
                v !== null && v(u, m),
                Df(e, t, m)
            } catch (O) {
                Zr(e, t, O)
            } finally {
                w.T = s
            }
        } else
            try {
                s = a(l, n),
                Df(e, t, s)
            } catch (O) {
                Zr(e, t, O)
            }
    }
    function Df(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(n) {
            _f(e, t, n)
        }, function(n) {
            return Zr(e, t, n)
        }) : _f(e, t, a)
    }
    function _f(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Uf(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        zf(e, a)))
    }
    function Zr(e, t, a) {
        var n = e.pending;
        if (e.pending = null,
        n !== null) {
            n = n.next;
            do
                t.status = "rejected",
                t.reason = a,
                Uf(t),
                t = t.next;
            while (t !== n)
        }
        e.action = null
    }
    function Uf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Lf(e, t) {
        return t
    }
    function qf(e, t) {
        if (me) {
            var a = Ae.formState;
            if (a !== null) {
                e: {
                    var n = le;
                    if (me) {
                        if (Ce) {
                            t: {
                                for (var l = Ce, s = wt; l.nodeType !== 8; ) {
                                    if (!s) {
                                        l = null;
                                        break t
                                    }
                                    if (l = Tt(l.nextSibling),
                                    l === null) {
                                        l = null;
                                        break t
                                    }
                                }
                                s = l.data,
                                l = s === "F!" || s === "F" ? l : null
                            }
                            if (l) {
                                Ce = Tt(l.nextSibling),
                                n = l.data === "F!";
                                break e
                            }
                        }
                        Za(n)
                    }
                    n = !1
                }
                n && (t = a[0])
            }
        }
        return a = tt(),
        a.memoizedState = a.baseState = t,
        n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lf,
            lastRenderedState: t
        },
        a.queue = n,
        a = ad.bind(null, le, n),
        n.dispatch = a,
        n = Qr(!1),
        s = $r.bind(null, le, !1, n.queue),
        n = tt(),
        l = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        n.queue = l,
        a = p0.bind(null, le, l, s, a),
        l.dispatch = a,
        n.memoizedState = e,
        [t, a, !1]
    }
    function Hf(e) {
        var t = ze();
        return Bf(t, pe, e)
    }
    function Bf(e, t, a) {
        if (t = Vr(e, t, Lf)[0],
        e = Bi(Xt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var n = El(t)
            } catch (u) {
                throw u === bl ? Di : u
            }
        else
            n = t;
        t = ze();
        var l = t.queue
          , s = l.dispatch;
        return a !== t.memoizedState && (le.flags |= 2048,
        Mn(9, ki(), v0.bind(null, l, a), null)),
        [n, s, e]
    }
    function v0(e, t) {
        e.action = t
    }
    function kf(e) {
        var t = ze()
          , a = pe;
        if (a !== null)
            return Bf(t, a, e);
        ze(),
        t = t.memoizedState,
        a = ze();
        var n = a.queue.dispatch;
        return a.memoizedState = e,
        [t, n, !1]
    }
    function Mn(e, t, a, n) {
        return e = {
            tag: e,
            create: a,
            deps: n,
            inst: t,
            next: null
        },
        t = le.updateQueue,
        t === null && (t = Yr(),
        le.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (n = a.next,
        a.next = e,
        e.next = n,
        t.lastEffect = e),
        e
    }
    function ki() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Gf() {
        return ze().memoizedState
    }
    function Gi(e, t, a, n) {
        var l = tt();
        n = n === void 0 ? null : n,
        le.flags |= e,
        l.memoizedState = Mn(1 | t, ki(), a, n)
    }
    function Tl(e, t, a, n) {
        var l = ze();
        n = n === void 0 ? null : n;
        var s = l.memoizedState.inst;
        pe !== null && n !== null && qr(n, pe.memoizedState.deps) ? l.memoizedState = Mn(t, s, a, n) : (le.flags |= e,
        l.memoizedState = Mn(1 | t, s, a, n))
    }
    function Yf(e, t) {
        Gi(8390656, 8, e, t)
    }
    function Kf(e, t) {
        Tl(2048, 8, e, t)
    }
    function Vf(e, t) {
        return Tl(4, 2, e, t)
    }
    function Xf(e, t) {
        return Tl(4, 4, e, t)
    }
    function Qf(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Zf(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        Tl(4, 4, Qf.bind(null, t, e), a)
    }
    function Pr() {}
    function Pf(e, t) {
        var a = ze();
        t = t === void 0 ? null : t;
        var n = a.memoizedState;
        return t !== null && qr(t, n[1]) ? n[0] : (a.memoizedState = [e, t],
        e)
    }
    function Ff(e, t) {
        var a = ze();
        t = t === void 0 ? null : t;
        var n = a.memoizedState;
        if (t !== null && qr(t, n[1]))
            return n[0];
        if (n = e(),
        Ja) {
            ia(!0);
            try {
                e()
            } finally {
                ia(!1)
            }
        }
        return a.memoizedState = [n, t],
        n
    }
    function Fr(e, t, a) {
        return a === void 0 || (da & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = $d(),
        le.lanes |= e,
        ba |= e,
        a)
    }
    function Wf(e, t, a, n) {
        return rt(a, t) ? a : jn.current !== null ? (e = Fr(e, a, n),
        rt(e, t) || (qe = !0),
        e) : (da & 42) === 0 ? (qe = !0,
        e.memoizedState = a) : (e = $d(),
        le.lanes |= e,
        ba |= e,
        t)
    }
    function Jf(e, t, a, n, l) {
        var s = B.p;
        B.p = s !== 0 && 8 > s ? s : 8;
        var u = w.T
          , m = {};
        w.T = m,
        $r(e, !1, t, a);
        try {
            var v = l()
              , O = w.S;
            if (O !== null && O(m, v),
            v !== null && typeof v == "object" && typeof v.then == "function") {
                var j = m0(v, n);
                Cl(e, t, j, dt(e))
            } else
                Cl(e, t, n, dt(e))
        } catch (z) {
            Cl(e, t, {
                then: function() {},
                status: "rejected",
                reason: z
            }, dt())
        } finally {
            B.p = s,
            w.T = u
        }
    }
    function y0() {}
    function Wr(e, t, a, n) {
        if (e.tag !== 5)
            throw Error(c(476));
        var l = $f(e).queue;
        Jf(e, l, t, J, a === null ? y0 : function() {
            return If(e),
            a(n)
        }
        )
    }
    function $f(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: J,
            baseState: J,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: J
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function If(e) {
        var t = $f(e).next.queue;
        Cl(e, t, {}, dt())
    }
    function Jr() {
        return Ze(Xl)
    }
    function ed() {
        return ze().memoizedState
    }
    function td() {
        return ze().memoizedState
    }
    function b0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = dt();
                e = ua(a);
                var n = fa(t, e, a);
                n !== null && (mt(n, t, a),
                Sl(n, t, a)),
                t = {
                    cache: Cr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function x0(e, t, a) {
        var n = dt();
        a = {
            lane: n,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Yi(e) ? nd(t, a) : (a = vr(e, t, a, n),
        a !== null && (mt(a, e, n),
        ld(a, t, n)))
    }
    function ad(e, t, a) {
        var n = dt();
        Cl(e, t, a, n)
    }
    function Cl(e, t, a, n) {
        var l = {
            lane: n,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Yi(e))
            nd(t, l);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
                try {
                    var u = t.lastRenderedState
                      , m = s(u, a);
                    if (l.hasEagerState = !0,
                    l.eagerState = m,
                    rt(m, u))
                        return Ei(e, t, l, 0),
                        Ae === null && Oi(),
                        !1
                } catch {} finally {}
            if (a = vr(e, t, l, n),
            a !== null)
                return mt(a, e, n),
                ld(a, t, n),
                !0
        }
        return !1
    }
    function $r(e, t, a, n) {
        if (n = {
            lane: 2,
            revertLane: Rc(),
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Yi(e)) {
            if (t)
                throw Error(c(479))
        } else
            t = vr(e, a, n, 2),
            t !== null && mt(t, e, 2)
    }
    function Yi(e) {
        var t = e.alternate;
        return e === le || t !== null && t === le
    }
    function nd(e, t) {
        wn = Li = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function ld(e, t, a) {
        if ((a & 4194048) !== 0) {
            var n = t.lanes;
            n &= e.pendingLanes,
            a |= n,
            t.lanes = a,
            fu(e, a)
        }
    }
    var Ki = {
        readContext: Ze,
        use: Hi,
        useCallback: we,
        useContext: we,
        useEffect: we,
        useImperativeHandle: we,
        useLayoutEffect: we,
        useInsertionEffect: we,
        useMemo: we,
        useReducer: we,
        useRef: we,
        useState: we,
        useDebugValue: we,
        useDeferredValue: we,
        useTransition: we,
        useSyncExternalStore: we,
        useId: we,
        useHostTransitionStatus: we,
        useFormState: we,
        useActionState: we,
        useOptimistic: we,
        useMemoCache: we,
        useCacheRefresh: we
    }
      , id = {
        readContext: Ze,
        use: Hi,
        useCallback: function(e, t) {
            return tt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Ze,
        useEffect: Yf,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            Gi(4194308, 4, Qf.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return Gi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Gi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = tt();
            t = t === void 0 ? null : t;
            var n = e();
            if (Ja) {
                ia(!0);
                try {
                    e()
                } finally {
                    ia(!1)
                }
            }
            return a.memoizedState = [n, t],
            n
        },
        useReducer: function(e, t, a) {
            var n = tt();
            if (a !== void 0) {
                var l = a(t);
                if (Ja) {
                    ia(!0);
                    try {
                        a(t)
                    } finally {
                        ia(!1)
                    }
                }
            } else
                l = t;
            return n.memoizedState = n.baseState = l,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: l
            },
            n.queue = e,
            e = e.dispatch = x0.bind(null, le, e),
            [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = tt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Qr(e);
            var t = e.queue
              , a = ad.bind(null, le, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: Pr,
        useDeferredValue: function(e, t) {
            var a = tt();
            return Fr(a, e, t)
        },
        useTransition: function() {
            var e = Qr(!1);
            return e = Jf.bind(null, le, e.queue, !0, !1),
            tt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var n = le
              , l = tt();
            if (me) {
                if (a === void 0)
                    throw Error(c(407));
                a = a()
            } else {
                if (a = t(),
                Ae === null)
                    throw Error(c(349));
                (oe & 124) !== 0 || Tf(n, t, a)
            }
            l.memoizedState = a;
            var s = {
                value: a,
                getSnapshot: t
            };
            return l.queue = s,
            Yf(jf.bind(null, n, s, e), [e]),
            n.flags |= 2048,
            Mn(9, ki(), Cf.bind(null, n, s, a, t), null),
            a
        },
        useId: function() {
            var e = tt()
              , t = Ae.identifierPrefix;
            if (me) {
                var a = Yt
                  , n = Gt;
                a = (n & ~(1 << 32 - st(n) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = qi++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = h0++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Jr,
        useFormState: qf,
        useActionState: qf,
        useOptimistic: function(e) {
            var t = tt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = $r.bind(null, le, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: Kr,
        useCacheRefresh: function() {
            return tt().memoizedState = b0.bind(null, le)
        }
    }
      , sd = {
        readContext: Ze,
        use: Hi,
        useCallback: Pf,
        useContext: Ze,
        useEffect: Kf,
        useImperativeHandle: Zf,
        useInsertionEffect: Vf,
        useLayoutEffect: Xf,
        useMemo: Ff,
        useReducer: Bi,
        useRef: Gf,
        useState: function() {
            return Bi(Xt)
        },
        useDebugValue: Pr,
        useDeferredValue: function(e, t) {
            var a = ze();
            return Wf(a, pe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Bi(Xt)[0]
              , t = ze().memoizedState;
            return [typeof e == "boolean" ? e : El(e), t]
        },
        useSyncExternalStore: Ef,
        useId: ed,
        useHostTransitionStatus: Jr,
        useFormState: Hf,
        useActionState: Hf,
        useOptimistic: function(e, t) {
            var a = ze();
            return Mf(a, pe, e, t)
        },
        useMemoCache: Kr,
        useCacheRefresh: td
    }
      , S0 = {
        readContext: Ze,
        use: Hi,
        useCallback: Pf,
        useContext: Ze,
        useEffect: Kf,
        useImperativeHandle: Zf,
        useInsertionEffect: Vf,
        useLayoutEffect: Xf,
        useMemo: Ff,
        useReducer: Xr,
        useRef: Gf,
        useState: function() {
            return Xr(Xt)
        },
        useDebugValue: Pr,
        useDeferredValue: function(e, t) {
            var a = ze();
            return pe === null ? Fr(a, e, t) : Wf(a, pe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Xr(Xt)[0]
              , t = ze().memoizedState;
            return [typeof e == "boolean" ? e : El(e), t]
        },
        useSyncExternalStore: Ef,
        useId: ed,
        useHostTransitionStatus: Jr,
        useFormState: kf,
        useActionState: kf,
        useOptimistic: function(e, t) {
            var a = ze();
            return pe !== null ? Mf(a, pe, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: Kr,
        useCacheRefresh: td
    }
      , zn = null
      , jl = 0;
    function Vi(e) {
        var t = jl;
        return jl += 1,
        zn === null && (zn = []),
        vf(zn, e, t)
    }
    function wl(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Xi(e, t) {
        throw t.$$typeof === R ? Error(c(525)) : (e = Object.prototype.toString.call(t),
        Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function rd(e) {
        var t = e._init;
        return t(e._payload)
    }
    function cd(e) {
        function t(A, x) {
            if (e) {
                var N = A.deletions;
                N === null ? (A.deletions = [x],
                A.flags |= 16) : N.push(x)
            }
        }
        function a(A, x) {
            if (!e)
                return null;
            for (; x !== null; )
                t(A, x),
                x = x.sibling;
            return null
        }
        function n(A) {
            for (var x = new Map; A !== null; )
                A.key !== null ? x.set(A.key, A) : x.set(A.index, A),
                A = A.sibling;
            return x
        }
        function l(A, x) {
            return A = kt(A, x),
            A.index = 0,
            A.sibling = null,
            A
        }
        function s(A, x, N) {
            return A.index = N,
            e ? (N = A.alternate,
            N !== null ? (N = N.index,
            N < x ? (A.flags |= 67108866,
            x) : N) : (A.flags |= 67108866,
            x)) : (A.flags |= 1048576,
            x)
        }
        function u(A) {
            return e && A.alternate === null && (A.flags |= 67108866),
            A
        }
        function m(A, x, N, M) {
            return x === null || x.tag !== 6 ? (x = br(N, A.mode, M),
            x.return = A,
            x) : (x = l(x, N),
            x.return = A,
            x)
        }
        function v(A, x, N, M) {
            var G = N.type;
            return G === F ? j(A, x, N.props.children, M, N.key) : x !== null && (x.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Je && rd(G) === x.type) ? (x = l(x, N.props),
            wl(x, N),
            x.return = A,
            x) : (x = Ci(N.type, N.key, N.props, null, A.mode, M),
            wl(x, N),
            x.return = A,
            x)
        }
        function O(A, x, N, M) {
            return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = xr(N, A.mode, M),
            x.return = A,
            x) : (x = l(x, N.children || []),
            x.return = A,
            x)
        }
        function j(A, x, N, M, G) {
            return x === null || x.tag !== 7 ? (x = Ka(N, A.mode, M, G),
            x.return = A,
            x) : (x = l(x, N),
            x.return = A,
            x)
        }
        function z(A, x, N) {
            if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
                return x = br("" + x, A.mode, N),
                x.return = A,
                x;
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                case _:
                    return N = Ci(x.type, x.key, x.props, null, A.mode, N),
                    wl(N, x),
                    N.return = A,
                    N;
                case V:
                    return x = xr(x, A.mode, N),
                    x.return = A,
                    x;
                case Je:
                    var M = x._init;
                    return x = M(x._payload),
                    z(A, x, N)
                }
                if (Xe(x) || Ve(x))
                    return x = Ka(x, A.mode, N, null),
                    x.return = A,
                    x;
                if (typeof x.then == "function")
                    return z(A, Vi(x), N);
                if (x.$$typeof === X)
                    return z(A, Mi(A, x), N);
                Xi(A, x)
            }
            return null
        }
        function T(A, x, N, M) {
            var G = x !== null ? x.key : null;
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return G !== null ? null : m(A, x, "" + N, M);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case _:
                    return N.key === G ? v(A, x, N, M) : null;
                case V:
                    return N.key === G ? O(A, x, N, M) : null;
                case Je:
                    return G = N._init,
                    N = G(N._payload),
                    T(A, x, N, M)
                }
                if (Xe(N) || Ve(N))
                    return G !== null ? null : j(A, x, N, M, null);
                if (typeof N.then == "function")
                    return T(A, x, Vi(N), M);
                if (N.$$typeof === X)
                    return T(A, x, Mi(A, N), M);
                Xi(A, N)
            }
            return null
        }
        function C(A, x, N, M, G) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return A = A.get(N) || null,
                m(x, A, "" + M, G);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case _:
                    return A = A.get(M.key === null ? N : M.key) || null,
                    v(x, A, M, G);
                case V:
                    return A = A.get(M.key === null ? N : M.key) || null,
                    O(x, A, M, G);
                case Je:
                    var ie = M._init;
                    return M = ie(M._payload),
                    C(A, x, N, M, G)
                }
                if (Xe(M) || Ve(M))
                    return A = A.get(N) || null,
                    j(x, A, M, G, null);
                if (typeof M.then == "function")
                    return C(A, x, N, Vi(M), G);
                if (M.$$typeof === X)
                    return C(A, x, N, Mi(x, M), G);
                Xi(x, M)
            }
            return null
        }
        function I(A, x, N, M) {
            for (var G = null, ie = null, K = x, W = x = 0, Be = null; K !== null && W < N.length; W++) {
                K.index > W ? (Be = K,
                K = null) : Be = K.sibling;
                var fe = T(A, K, N[W], M);
                if (fe === null) {
                    K === null && (K = Be);
                    break
                }
                e && K && fe.alternate === null && t(A, K),
                x = s(fe, x, W),
                ie === null ? G = fe : ie.sibling = fe,
                ie = fe,
                K = Be
            }
            if (W === N.length)
                return a(A, K),
                me && Xa(A, W),
                G;
            if (K === null) {
                for (; W < N.length; W++)
                    K = z(A, N[W], M),
                    K !== null && (x = s(K, x, W),
                    ie === null ? G = K : ie.sibling = K,
                    ie = K);
                return me && Xa(A, W),
                G
            }
            for (K = n(K); W < N.length; W++)
                Be = C(K, A, W, N[W], M),
                Be !== null && (e && Be.alternate !== null && K.delete(Be.key === null ? W : Be.key),
                x = s(Be, x, W),
                ie === null ? G = Be : ie.sibling = Be,
                ie = Be);
            return e && K.forEach(function(ja) {
                return t(A, ja)
            }),
            me && Xa(A, W),
            G
        }
        function P(A, x, N, M) {
            if (N == null)
                throw Error(c(151));
            for (var G = null, ie = null, K = x, W = x = 0, Be = null, fe = N.next(); K !== null && !fe.done; W++,
            fe = N.next()) {
                K.index > W ? (Be = K,
                K = null) : Be = K.sibling;
                var ja = T(A, K, fe.value, M);
                if (ja === null) {
                    K === null && (K = Be);
                    break
                }
                e && K && ja.alternate === null && t(A, K),
                x = s(ja, x, W),
                ie === null ? G = ja : ie.sibling = ja,
                ie = ja,
                K = Be
            }
            if (fe.done)
                return a(A, K),
                me && Xa(A, W),
                G;
            if (K === null) {
                for (; !fe.done; W++,
                fe = N.next())
                    fe = z(A, fe.value, M),
                    fe !== null && (x = s(fe, x, W),
                    ie === null ? G = fe : ie.sibling = fe,
                    ie = fe);
                return me && Xa(A, W),
                G
            }
            for (K = n(K); !fe.done; W++,
            fe = N.next())
                fe = C(K, A, W, fe.value, M),
                fe !== null && (e && fe.alternate !== null && K.delete(fe.key === null ? W : fe.key),
                x = s(fe, x, W),
                ie === null ? G = fe : ie.sibling = fe,
                ie = fe);
            return e && K.forEach(function(A1) {
                return t(A, A1)
            }),
            me && Xa(A, W),
            G
        }
        function ye(A, x, N, M) {
            if (typeof N == "object" && N !== null && N.type === F && N.key === null && (N = N.props.children),
            typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case _:
                    e: {
                        for (var G = N.key; x !== null; ) {
                            if (x.key === G) {
                                if (G = N.type,
                                G === F) {
                                    if (x.tag === 7) {
                                        a(A, x.sibling),
                                        M = l(x, N.props.children),
                                        M.return = A,
                                        A = M;
                                        break e
                                    }
                                } else if (x.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Je && rd(G) === x.type) {
                                    a(A, x.sibling),
                                    M = l(x, N.props),
                                    wl(M, N),
                                    M.return = A,
                                    A = M;
                                    break e
                                }
                                a(A, x);
                                break
                            } else
                                t(A, x);
                            x = x.sibling
                        }
                        N.type === F ? (M = Ka(N.props.children, A.mode, M, N.key),
                        M.return = A,
                        A = M) : (M = Ci(N.type, N.key, N.props, null, A.mode, M),
                        wl(M, N),
                        M.return = A,
                        A = M)
                    }
                    return u(A);
                case V:
                    e: {
                        for (G = N.key; x !== null; ) {
                            if (x.key === G)
                                if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                                    a(A, x.sibling),
                                    M = l(x, N.children || []),
                                    M.return = A,
                                    A = M;
                                    break e
                                } else {
                                    a(A, x);
                                    break
                                }
                            else
                                t(A, x);
                            x = x.sibling
                        }
                        M = xr(N, A.mode, M),
                        M.return = A,
                        A = M
                    }
                    return u(A);
                case Je:
                    return G = N._init,
                    N = G(N._payload),
                    ye(A, x, N, M)
                }
                if (Xe(N))
                    return I(A, x, N, M);
                if (Ve(N)) {
                    if (G = Ve(N),
                    typeof G != "function")
                        throw Error(c(150));
                    return N = G.call(N),
                    P(A, x, N, M)
                }
                if (typeof N.then == "function")
                    return ye(A, x, Vi(N), M);
                if (N.$$typeof === X)
                    return ye(A, x, Mi(A, N), M);
                Xi(A, N)
            }
            return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N,
            x !== null && x.tag === 6 ? (a(A, x.sibling),
            M = l(x, N),
            M.return = A,
            A = M) : (a(A, x),
            M = br(N, A.mode, M),
            M.return = A,
            A = M),
            u(A)) : a(A, x)
        }
        return function(A, x, N, M) {
            try {
                jl = 0;
                var G = ye(A, x, N, M);
                return zn = null,
                G
            } catch (K) {
                if (K === bl || K === Di)
                    throw K;
                var ie = ct(29, K, null, A.mode);
                return ie.lanes = M,
                ie.return = A,
                ie
            } finally {}
        }
    }
    var Dn = cd(!0)
      , od = cd(!1)
      , St = D(null)
      , Rt = null;
    function ma(e) {
        var t = e.alternate;
        H(Ue, Ue.current & 1),
        H(St, e),
        Rt === null && (t === null || jn.current !== null || t.memoizedState !== null) && (Rt = e)
    }
    function ud(e) {
        if (e.tag === 22) {
            if (H(Ue, Ue.current),
            H(St, e),
            Rt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Rt = e)
            }
        } else
            ha()
    }
    function ha() {
        H(Ue, Ue.current),
        H(St, St.current)
    }
    function Qt(e) {
        k(St),
        Rt === e && (Rt = null),
        k(Ue)
    }
    var Ue = D(0);
    function Qi(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || Yc(a)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function Ir(e, t, a, n) {
        t = e.memoizedState,
        a = a(n, t),
        a = a == null ? t : E({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var ec = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var n = dt()
              , l = ua(n);
            l.payload = t,
            a != null && (l.callback = a),
            t = fa(e, l, n),
            t !== null && (mt(t, e, n),
            Sl(t, e, n))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var n = dt()
              , l = ua(n);
            l.tag = 1,
            l.payload = t,
            a != null && (l.callback = a),
            t = fa(e, l, n),
            t !== null && (mt(t, e, n),
            Sl(t, e, n))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = dt()
              , n = ua(a);
            n.tag = 2,
            t != null && (n.callback = t),
            t = fa(e, n, a),
            t !== null && (mt(t, e, a),
            Sl(t, e, a))
        }
    };
    function fd(e, t, a, n, l, s, u) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, s, u) : t.prototype && t.prototype.isPureReactComponent ? !fl(a, n) || !fl(l, s) : !0
    }
    function dd(e, t, a, n) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n),
        t.state !== e && ec.enqueueReplaceState(t, t.state, null)
    }
    function $a(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var n in t)
                n !== "ref" && (a[n] = t[n])
        }
        if (e = e.defaultProps) {
            a === t && (a = E({}, a));
            for (var l in e)
                a[l] === void 0 && (a[l] = e[l])
        }
        return a
    }
    var Zi = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function md(e) {
        Zi(e)
    }
    function hd(e) {
        console.error(e)
    }
    function gd(e) {
        Zi(e)
    }
    function Pi(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function pd(e, t, a) {
        try {
            var n = e.onCaughtError;
            n(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function tc(e, t, a) {
        return a = ua(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            Pi(e, t)
        }
        ,
        a
    }
    function vd(e) {
        return e = ua(e),
        e.tag = 3,
        e
    }
    function yd(e, t, a, n) {
        var l = a.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var s = n.value;
            e.payload = function() {
                return l(s)
            }
            ,
            e.callback = function() {
                pd(t, a, n)
            }
        }
        var u = a.stateNode;
        u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
            pd(t, a, n),
            typeof l != "function" && (xa === null ? xa = new Set([this]) : xa.add(this));
            var m = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: m !== null ? m : ""
            })
        }
        )
    }
    function A0(e, t, a, n, l) {
        if (a.flags |= 32768,
        n !== null && typeof n == "object" && typeof n.then == "function") {
            if (t = a.alternate,
            t !== null && pl(t, a, l, !0),
            a = St.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Rt === null ? Ec() : a.alternate === null && je === 0 && (je = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = l,
                    n === Rr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([n]) : t.add(n),
                    Cc(e, n, l)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    n === Rr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([n]) : a.add(n)),
                    Cc(e, n, l)),
                    !1
                }
                throw Error(c(435, a.tag))
            }
            return Cc(e, n, l),
            Ec(),
            !1
        }
        if (me)
            return t = St.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = l,
            n !== Nr && (e = Error(c(422), {
                cause: n
            }),
            gl(vt(e, a)))) : (n !== Nr && (t = Error(c(423), {
                cause: n
            }),
            gl(vt(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            l &= -l,
            e.lanes |= l,
            n = vt(n, a),
            l = tc(e.stateNode, n, l),
            Dr(e, l),
            je !== 4 && (je = 2)),
            !1;
        var s = Error(c(520), {
            cause: n
        });
        if (s = vt(s, a),
        Ll === null ? Ll = [s] : Ll.push(s),
        je !== 4 && (je = 2),
        t === null)
            return !0;
        n = vt(n, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = l & -l,
                a.lanes |= e,
                e = tc(a.stateNode, n, e),
                Dr(a, e),
                !1;
            case 1:
                if (t = a.type,
                s = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (xa === null || !xa.has(s))))
                    return a.flags |= 65536,
                    l &= -l,
                    a.lanes |= l,
                    l = vd(l),
                    yd(l, e, a, n),
                    Dr(a, l),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var bd = Error(c(461))
      , qe = !1;
    function Ge(e, t, a, n) {
        t.child = e === null ? od(t, null, a, n) : Dn(t, e.child, a, n)
    }
    function xd(e, t, a, n, l) {
        a = a.render;
        var s = t.ref;
        if ("ref"in n) {
            var u = {};
            for (var m in n)
                m !== "ref" && (u[m] = n[m])
        } else
            u = n;
        return Fa(t),
        n = Hr(e, t, a, u, s, l),
        m = Br(),
        e !== null && !qe ? (kr(e, t, l),
        Zt(e, t, l)) : (me && m && Sr(t),
        t.flags |= 1,
        Ge(e, t, n, l),
        t.child)
    }
    function Sd(e, t, a, n, l) {
        if (e === null) {
            var s = a.type;
            return typeof s == "function" && !yr(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = s,
            Ad(e, t, s, n, l)) : (e = Ci(a.type, null, n, t, t.mode, l),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (s = e.child,
        !oc(e, l)) {
            var u = s.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : fl,
            a(u, n) && e.ref === t.ref)
                return Zt(e, t, l)
        }
        return t.flags |= 1,
        e = kt(s, n),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Ad(e, t, a, n, l) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (fl(s, n) && e.ref === t.ref)
                if (qe = !1,
                t.pendingProps = n = s,
                oc(e, l))
                    (e.flags & 131072) !== 0 && (qe = !0);
                else
                    return t.lanes = e.lanes,
                    Zt(e, t, l)
        }
        return ac(e, t, a, n, l)
    }
    function Nd(e, t, a) {
        var n = t.pendingProps
          , l = n.children
          , s = e !== null ? e.memoizedState : null;
        if (n.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = s !== null ? s.baseLanes | a : a,
                e !== null) {
                    for (l = t.child = e.child,
                    s = 0; l !== null; )
                        s = s | l.lanes | l.childLanes,
                        l = l.sibling;
                    t.childLanes = s & ~n
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Od(e, t, n, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && zi(t, s !== null ? s.cachePool : null),
                s !== null ? Af(t, s) : Ur(),
                ud(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Od(e, t, s !== null ? s.baseLanes | a : a, a)
        } else
            s !== null ? (zi(t, s.cachePool),
            Af(t, s),
            ha(),
            t.memoizedState = null) : (e !== null && zi(t, null),
            Ur(),
            ha());
        return Ge(e, t, l, a),
        t.child
    }
    function Od(e, t, a, n) {
        var l = wr();
        return l = l === null ? null : {
            parent: _e._currentValue,
            pool: l
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: l
        },
        e !== null && zi(t, null),
        Ur(),
        ud(t),
        e !== null && pl(e, t, n, !0),
        null
    }
    function Fi(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(c(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function ac(e, t, a, n, l) {
        return Fa(t),
        a = Hr(e, t, a, n, void 0, l),
        n = Br(),
        e !== null && !qe ? (kr(e, t, l),
        Zt(e, t, l)) : (me && n && Sr(t),
        t.flags |= 1,
        Ge(e, t, a, l),
        t.child)
    }
    function Ed(e, t, a, n, l, s) {
        return Fa(t),
        t.updateQueue = null,
        a = Of(t, n, a, l),
        Nf(e),
        n = Br(),
        e !== null && !qe ? (kr(e, t, s),
        Zt(e, t, s)) : (me && n && Sr(t),
        t.flags |= 1,
        Ge(e, t, a, s),
        t.child)
    }
    function Td(e, t, a, n, l) {
        if (Fa(t),
        t.stateNode === null) {
            var s = Nn
              , u = a.contextType;
            typeof u == "object" && u !== null && (s = Ze(u)),
            s = new a(n,s),
            t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
            s.updater = ec,
            t.stateNode = s,
            s._reactInternals = t,
            s = t.stateNode,
            s.props = n,
            s.state = t.memoizedState,
            s.refs = {},
            Mr(t),
            u = a.contextType,
            s.context = typeof u == "object" && u !== null ? Ze(u) : Nn,
            s.state = t.memoizedState,
            u = a.getDerivedStateFromProps,
            typeof u == "function" && (Ir(t, a, u, n),
            s.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (u = s.state,
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            u !== s.state && ec.enqueueReplaceState(s, s.state, null),
            Nl(t, n, s, l),
            Al(),
            s.state = t.memoizedState),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            n = !0
        } else if (e === null) {
            s = t.stateNode;
            var m = t.memoizedProps
              , v = $a(a, m);
            s.props = v;
            var O = s.context
              , j = a.contextType;
            u = Nn,
            typeof j == "object" && j !== null && (u = Ze(j));
            var z = a.getDerivedStateFromProps;
            j = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function",
            m = t.pendingProps !== m,
            j || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || O !== u) && dd(t, s, n, u),
            oa = !1;
            var T = t.memoizedState;
            s.state = T,
            Nl(t, n, s, l),
            Al(),
            O = t.memoizedState,
            m || T !== O || oa ? (typeof z == "function" && (Ir(t, a, z, n),
            O = t.memoizedState),
            (v = oa || fd(t, a, v, n, T, O, u)) ? (j || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = n,
            t.memoizedState = O),
            s.props = n,
            s.state = O,
            s.context = u,
            n = v) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            n = !1)
        } else {
            s = t.stateNode,
            zr(e, t),
            u = t.memoizedProps,
            j = $a(a, u),
            s.props = j,
            z = t.pendingProps,
            T = s.context,
            O = a.contextType,
            v = Nn,
            typeof O == "object" && O !== null && (v = Ze(O)),
            m = a.getDerivedStateFromProps,
            (O = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== z || T !== v) && dd(t, s, n, v),
            oa = !1,
            T = t.memoizedState,
            s.state = T,
            Nl(t, n, s, l),
            Al();
            var C = t.memoizedState;
            u !== z || T !== C || oa || e !== null && e.dependencies !== null && Ri(e.dependencies) ? (typeof m == "function" && (Ir(t, a, m, n),
            C = t.memoizedState),
            (j = oa || fd(t, a, j, n, T, C, v) || e !== null && e.dependencies !== null && Ri(e.dependencies)) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(n, C, v),
            typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(n, C, v)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && T === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = n,
            t.memoizedState = C),
            s.props = n,
            s.state = C,
            s.context = v,
            n = j) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && T === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024),
            n = !1)
        }
        return s = n,
        Fi(e, t),
        n = (t.flags & 128) !== 0,
        s || n ? (s = t.stateNode,
        a = n && typeof a.getDerivedStateFromError != "function" ? null : s.render(),
        t.flags |= 1,
        e !== null && n ? (t.child = Dn(t, e.child, null, l),
        t.child = Dn(t, null, a, l)) : Ge(e, t, a, l),
        t.memoizedState = s.state,
        e = t.child) : e = Zt(e, t, l),
        e
    }
    function Cd(e, t, a, n) {
        return hl(),
        t.flags |= 256,
        Ge(e, t, a, n),
        t.child
    }
    var nc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function lc(e) {
        return {
            baseLanes: e,
            cachePool: hf()
        }
    }
    function ic(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= At),
        e
    }
    function jd(e, t, a) {
        var n = t.pendingProps, l = !1, s = (t.flags & 128) !== 0, u;
        if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (Ue.current & 2) !== 0),
        u && (l = !0,
        t.flags &= -129),
        u = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (me) {
                if (l ? ma(t) : ha(),
                me) {
                    var m = Ce, v;
                    if (v = m) {
                        e: {
                            for (v = m,
                            m = wt; v.nodeType !== 8; ) {
                                if (!m) {
                                    m = null;
                                    break e
                                }
                                if (v = Tt(v.nextSibling),
                                v === null) {
                                    m = null;
                                    break e
                                }
                            }
                            m = v
                        }
                        m !== null ? (t.memoizedState = {
                            dehydrated: m,
                            treeContext: Va !== null ? {
                                id: Gt,
                                overflow: Yt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        v = ct(18, null, null, 0),
                        v.stateNode = m,
                        v.return = t,
                        t.child = v,
                        $e = t,
                        Ce = null,
                        v = !0) : v = !1
                    }
                    v || Za(t)
                }
                if (m = t.memoizedState,
                m !== null && (m = m.dehydrated,
                m !== null))
                    return Yc(m) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Qt(t)
            }
            return m = n.children,
            n = n.fallback,
            l ? (ha(),
            l = t.mode,
            m = Wi({
                mode: "hidden",
                children: m
            }, l),
            n = Ka(n, l, a, null),
            m.return = t,
            n.return = t,
            m.sibling = n,
            t.child = m,
            l = t.child,
            l.memoizedState = lc(a),
            l.childLanes = ic(e, u, a),
            t.memoizedState = nc,
            n) : (ma(t),
            sc(t, m))
        }
        if (v = e.memoizedState,
        v !== null && (m = v.dehydrated,
        m !== null)) {
            if (s)
                t.flags & 256 ? (ma(t),
                t.flags &= -257,
                t = rc(e, t, a)) : t.memoizedState !== null ? (ha(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (ha(),
                l = n.fallback,
                m = t.mode,
                n = Wi({
                    mode: "visible",
                    children: n.children
                }, m),
                l = Ka(l, m, a, null),
                l.flags |= 2,
                n.return = t,
                l.return = t,
                n.sibling = l,
                t.child = n,
                Dn(t, e.child, null, a),
                n = t.child,
                n.memoizedState = lc(a),
                n.childLanes = ic(e, u, a),
                t.memoizedState = nc,
                t = l);
            else if (ma(t),
            Yc(m)) {
                if (u = m.nextSibling && m.nextSibling.dataset,
                u)
                    var O = u.dgst;
                u = O,
                n = Error(c(419)),
                n.stack = "",
                n.digest = u,
                gl({
                    value: n,
                    source: null,
                    stack: null
                }),
                t = rc(e, t, a)
            } else if (qe || pl(e, t, a, !1),
            u = (a & e.childLanes) !== 0,
            qe || u) {
                if (u = Ae,
                u !== null && (n = a & -a,
                n = (n & 42) !== 0 ? 1 : Ks(n),
                n = (n & (u.suspendedLanes | a)) !== 0 ? 0 : n,
                n !== 0 && n !== v.retryLane))
                    throw v.retryLane = n,
                    An(e, n),
                    mt(u, e, n),
                    bd;
                m.data === "$?" || Ec(),
                t = rc(e, t, a)
            } else
                m.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = v.treeContext,
                Ce = Tt(m.nextSibling),
                $e = t,
                me = !0,
                Qa = null,
                wt = !1,
                e !== null && (bt[xt++] = Gt,
                bt[xt++] = Yt,
                bt[xt++] = Va,
                Gt = e.id,
                Yt = e.overflow,
                Va = t),
                t = sc(t, n.children),
                t.flags |= 4096);
            return t
        }
        return l ? (ha(),
        l = n.fallback,
        m = t.mode,
        v = e.child,
        O = v.sibling,
        n = kt(v, {
            mode: "hidden",
            children: n.children
        }),
        n.subtreeFlags = v.subtreeFlags & 65011712,
        O !== null ? l = kt(O, l) : (l = Ka(l, m, a, null),
        l.flags |= 2),
        l.return = t,
        n.return = t,
        n.sibling = l,
        t.child = n,
        n = l,
        l = t.child,
        m = e.child.memoizedState,
        m === null ? m = lc(a) : (v = m.cachePool,
        v !== null ? (O = _e._currentValue,
        v = v.parent !== O ? {
            parent: O,
            pool: O
        } : v) : v = hf(),
        m = {
            baseLanes: m.baseLanes | a,
            cachePool: v
        }),
        l.memoizedState = m,
        l.childLanes = ic(e, u, a),
        t.memoizedState = nc,
        n) : (ma(t),
        a = e.child,
        e = a.sibling,
        a = kt(a, {
            mode: "visible",
            children: n.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (u = t.deletions,
        u === null ? (t.deletions = [e],
        t.flags |= 16) : u.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function sc(e, t) {
        return t = Wi({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Wi(e, t) {
        return e = ct(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function rc(e, t, a) {
        return Dn(t, e.child, null, a),
        e = sc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function wd(e, t, a) {
        e.lanes |= t;
        var n = e.alternate;
        n !== null && (n.lanes |= t),
        Er(e.return, t, a)
    }
    function cc(e, t, a, n, l) {
        var s = e.memoizedState;
        s === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: a,
            tailMode: l
        } : (s.isBackwards = t,
        s.rendering = null,
        s.renderingStartTime = 0,
        s.last = n,
        s.tail = a,
        s.tailMode = l)
    }
    function Rd(e, t, a) {
        var n = t.pendingProps
          , l = n.revealOrder
          , s = n.tail;
        if (Ge(e, t, n.children, a),
        n = Ue.current,
        (n & 2) !== 0)
            n = n & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && wd(e, a, t);
                    else if (e.tag === 19)
                        wd(e, a, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            n &= 1
        }
        switch (H(Ue, n),
        l) {
        case "forwards":
            for (a = t.child,
            l = null; a !== null; )
                e = a.alternate,
                e !== null && Qi(e) === null && (l = a),
                a = a.sibling;
            a = l,
            a === null ? (l = t.child,
            t.child = null) : (l = a.sibling,
            a.sibling = null),
            cc(t, !1, l, a, s);
            break;
        case "backwards":
            for (a = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Qi(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = a,
                a = l,
                l = e
            }
            cc(t, !0, a, null, s);
            break;
        case "together":
            cc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Zt(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        ba |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (pl(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child,
            a = kt(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = kt(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function oc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Ri(e)))
    }
    function N0(e, t, a) {
        switch (t.tag) {
        case 3:
            Oe(t, t.stateNode.containerInfo),
            ca(t, _e, e.memoizedState.cache),
            hl();
            break;
        case 27:
        case 5:
            Hs(t);
            break;
        case 4:
            Oe(t, t.stateNode.containerInfo);
            break;
        case 10:
            ca(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var n = t.memoizedState;
            if (n !== null)
                return n.dehydrated !== null ? (ma(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? jd(e, t, a) : (ma(t),
                e = Zt(e, t, a),
                e !== null ? e.sibling : null);
            ma(t);
            break;
        case 19:
            var l = (e.flags & 128) !== 0;
            if (n = (a & t.childLanes) !== 0,
            n || (pl(e, t, a, !1),
            n = (a & t.childLanes) !== 0),
            l) {
                if (n)
                    return Rd(e, t, a);
                t.flags |= 128
            }
            if (l = t.memoizedState,
            l !== null && (l.rendering = null,
            l.tail = null,
            l.lastEffect = null),
            H(Ue, Ue.current),
            n)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Nd(e, t, a);
        case 24:
            ca(t, _e, e.memoizedState.cache)
        }
        return Zt(e, t, a)
    }
    function Md(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                qe = !0;
            else {
                if (!oc(e, a) && (t.flags & 128) === 0)
                    return qe = !1,
                    N0(e, t, a);
                qe = (e.flags & 131072) !== 0
            }
        else
            qe = !1,
            me && (t.flags & 1048576) !== 0 && rf(t, wi, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var n = t.elementType
                  , l = n._init;
                if (n = l(n._payload),
                t.type = n,
                typeof n == "function")
                    yr(n) ? (e = $a(n, e),
                    t.tag = 1,
                    t = Td(null, t, n, e, a)) : (t.tag = 0,
                    t = ac(null, t, n, e, a));
                else {
                    if (n != null) {
                        if (l = n.$$typeof,
                        l === de) {
                            t.tag = 11,
                            t = xd(null, t, n, e, a);
                            break e
                        } else if (l === ke) {
                            t.tag = 14,
                            t = Sd(null, t, n, e, a);
                            break e
                        }
                    }
                    throw t = qa(n) || n,
                    Error(c(306, t, ""))
                }
            }
            return t;
        case 0:
            return ac(e, t, t.type, t.pendingProps, a);
        case 1:
            return n = t.type,
            l = $a(n, t.pendingProps),
            Td(e, t, n, l, a);
        case 3:
            e: {
                if (Oe(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(c(387));
                n = t.pendingProps;
                var s = t.memoizedState;
                l = s.element,
                zr(e, t),
                Nl(t, n, null, a);
                var u = t.memoizedState;
                if (n = u.cache,
                ca(t, _e, n),
                n !== s.cache && Tr(t, [_e], a, !0),
                Al(),
                n = u.element,
                s.isDehydrated)
                    if (s = {
                        element: n,
                        isDehydrated: !1,
                        cache: u.cache
                    },
                    t.updateQueue.baseState = s,
                    t.memoizedState = s,
                    t.flags & 256) {
                        t = Cd(e, t, n, a);
                        break e
                    } else if (n !== l) {
                        l = vt(Error(c(424)), t),
                        gl(l),
                        t = Cd(e, t, n, a);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Ce = Tt(e.firstChild),
                        $e = t,
                        me = !0,
                        Qa = null,
                        wt = !0,
                        a = od(t, null, n, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (hl(),
                    n === l) {
                        t = Zt(e, t, a);
                        break e
                    }
                    Ge(e, t, n, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return Fi(e, t),
            e === null ? (a = Um(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : me || (a = t.type,
            e = t.pendingProps,
            n = us(ae.current).createElement(a),
            n[Qe] = t,
            n[Ie] = e,
            Ke(n, a, e),
            Le(n),
            t.stateNode = n) : t.memoizedState = Um(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Hs(t),
            e === null && me && (n = t.stateNode = zm(t.type, t.pendingProps, ae.current),
            $e = t,
            wt = !0,
            l = Ce,
            Na(t.type) ? (Kc = l,
            Ce = Tt(n.firstChild)) : Ce = l),
            Ge(e, t, t.pendingProps.children, a),
            Fi(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && me && ((l = n = Ce) && (n = J0(n, t.type, t.pendingProps, wt),
            n !== null ? (t.stateNode = n,
            $e = t,
            Ce = Tt(n.firstChild),
            wt = !1,
            l = !0) : l = !1),
            l || Za(t)),
            Hs(t),
            l = t.type,
            s = t.pendingProps,
            u = e !== null ? e.memoizedProps : null,
            n = s.children,
            Bc(l, s) ? n = null : u !== null && Bc(l, u) && (t.flags |= 32),
            t.memoizedState !== null && (l = Hr(e, t, g0, null, null, a),
            Xl._currentValue = l),
            Fi(e, t),
            Ge(e, t, n, a),
            t.child;
        case 6:
            return e === null && me && ((e = a = Ce) && (a = $0(a, t.pendingProps, wt),
            a !== null ? (t.stateNode = a,
            $e = t,
            Ce = null,
            e = !0) : e = !1),
            e || Za(t)),
            null;
        case 13:
            return jd(e, t, a);
        case 4:
            return Oe(t, t.stateNode.containerInfo),
            n = t.pendingProps,
            e === null ? t.child = Dn(t, null, n, a) : Ge(e, t, n, a),
            t.child;
        case 11:
            return xd(e, t, t.type, t.pendingProps, a);
        case 7:
            return Ge(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Ge(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Ge(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return n = t.pendingProps,
            ca(t, t.type, n.value),
            Ge(e, t, n.children, a),
            t.child;
        case 9:
            return l = t.type._context,
            n = t.pendingProps.children,
            Fa(t),
            l = Ze(l),
            n = n(l),
            t.flags |= 1,
            Ge(e, t, n, a),
            t.child;
        case 14:
            return Sd(e, t, t.type, t.pendingProps, a);
        case 15:
            return Ad(e, t, t.type, t.pendingProps, a);
        case 19:
            return Rd(e, t, a);
        case 31:
            return n = t.pendingProps,
            a = t.mode,
            n = {
                mode: n.mode,
                children: n.children
            },
            e === null ? (a = Wi(n, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = kt(e.child, n),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return Nd(e, t, a);
        case 24:
            return Fa(t),
            n = Ze(_e),
            e === null ? (l = wr(),
            l === null && (l = Ae,
            s = Cr(),
            l.pooledCache = s,
            s.refCount++,
            s !== null && (l.pooledCacheLanes |= a),
            l = s),
            t.memoizedState = {
                parent: n,
                cache: l
            },
            Mr(t),
            ca(t, _e, l)) : ((e.lanes & a) !== 0 && (zr(e, t),
            Nl(t, null, null, a),
            Al()),
            l = e.memoizedState,
            s = t.memoizedState,
            l.parent !== n ? (l = {
                parent: n,
                cache: n
            },
            t.memoizedState = l,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
            ca(t, _e, n)) : (n = s.cache,
            ca(t, _e, n),
            n !== l.cache && Tr(t, [_e], a, !0))),
            Ge(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(c(156, t.tag))
    }
    function Pt(e) {
        e.flags |= 4
    }
    function zd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !km(t)) {
            if (t = St.current,
            t !== null && ((oe & 4194048) === oe ? Rt !== null : (oe & 62914560) !== oe && (oe & 536870912) === 0 || t !== Rt))
                throw xl = Rr,
                gf;
            e.flags |= 8192
        }
    }
    function Ji(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ou() : 536870912,
        e.lanes |= t,
        qn |= t)
    }
    function Rl(e, t) {
        if (!me)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var n = null; a !== null; )
                    a.alternate !== null && (n = a),
                    a = a.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
            }
    }
    function Te(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , n = 0;
        if (t)
            for (var l = e.child; l !== null; )
                a |= l.lanes | l.childLanes,
                n |= l.subtreeFlags & 65011712,
                n |= l.flags & 65011712,
                l.return = e,
                l = l.sibling;
        else
            for (l = e.child; l !== null; )
                a |= l.lanes | l.childLanes,
                n |= l.subtreeFlags,
                n |= l.flags,
                l.return = e,
                l = l.sibling;
        return e.subtreeFlags |= n,
        e.childLanes = a,
        t
    }
    function O0(e, t, a) {
        var n = t.pendingProps;
        switch (Ar(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Te(t),
            null;
        case 1:
            return Te(t),
            null;
        case 3:
            return a = t.stateNode,
            n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Vt(_e),
            la(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (ml(t) ? Pt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            uf())),
            Te(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (Pt(t),
            a !== null ? (Te(t),
            zd(t, a)) : (Te(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Pt(t),
            Te(t),
            zd(t, a)) : (Te(t),
            t.flags &= -16777217) : (e.memoizedProps !== n && Pt(t),
            Te(t),
            t.flags &= -16777217),
            null;
        case 27:
            ci(t),
            a = ae.current;
            var l = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== n && Pt(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return Te(t),
                    null
                }
                e = Z.current,
                ml(t) ? cf(t) : (e = zm(l, n, a),
                t.stateNode = e,
                Pt(t))
            }
            return Te(t),
            null;
        case 5:
            if (ci(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== n && Pt(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return Te(t),
                    null
                }
                if (e = Z.current,
                ml(t))
                    cf(t);
                else {
                    switch (l = us(ae.current),
                    e) {
                    case 1:
                        e = l.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        e = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            e = l.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            e = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            e = l.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof n.is == "string" ? l.createElement("select", {
                                is: n.is
                            }) : l.createElement("select"),
                            n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                            break;
                        default:
                            e = typeof n.is == "string" ? l.createElement(a, {
                                is: n.is
                            }) : l.createElement(a)
                        }
                    }
                    e[Qe] = t,
                    e[Ie] = n;
                    e: for (l = t.child; l !== null; ) {
                        if (l.tag === 5 || l.tag === 6)
                            e.appendChild(l.stateNode);
                        else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                            l.child.return = l,
                            l = l.child;
                            continue
                        }
                        if (l === t)
                            break e;
                        for (; l.sibling === null; ) {
                            if (l.return === null || l.return === t)
                                break e;
                            l = l.return
                        }
                        l.sibling.return = l.return,
                        l = l.sibling
                    }
                    t.stateNode = e;
                    e: switch (Ke(e, a, n),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!n.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && Pt(t)
                }
            }
            return Te(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== n && Pt(t);
            else {
                if (typeof n != "string" && t.stateNode === null)
                    throw Error(c(166));
                if (e = ae.current,
                ml(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    n = null,
                    l = $e,
                    l !== null)
                        switch (l.tag) {
                        case 27:
                        case 5:
                            n = l.memoizedProps
                        }
                    e[Qe] = t,
                    e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || Em(e.nodeValue, a)),
                    e || Za(t)
                } else
                    e = us(e).createTextNode(n),
                    e[Qe] = t,
                    t.stateNode = e
            }
            return Te(t),
            null;
        case 13:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (l = ml(t),
                n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(c(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(c(317));
                        l[Qe] = t
                    } else
                        hl(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Te(t),
                    l = !1
                } else
                    l = uf(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (Qt(t),
                    t) : (Qt(t),
                    null)
            }
            if (Qt(t),
            (t.flags & 128) !== 0)
                return t.lanes = a,
                t;
            if (a = n !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                n = t.child,
                l = null,
                n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (l = n.alternate.memoizedState.cachePool.pool);
                var s = null;
                n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool),
                s !== l && (n.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            Ji(t, t.updateQueue),
            Te(t),
            null;
        case 4:
            return la(),
            e === null && _c(t.stateNode.containerInfo),
            Te(t),
            null;
        case 10:
            return Vt(t.type),
            Te(t),
            null;
        case 19:
            if (k(Ue),
            l = t.memoizedState,
            l === null)
                return Te(t),
                null;
            if (n = (t.flags & 128) !== 0,
            s = l.rendering,
            s === null)
                if (n)
                    Rl(l, !1);
                else {
                    if (je !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (s = Qi(e),
                            s !== null) {
                                for (t.flags |= 128,
                                Rl(l, !1),
                                e = s.updateQueue,
                                t.updateQueue = e,
                                Ji(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    sf(a, e),
                                    a = a.sibling;
                                return H(Ue, Ue.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && jt() > es && (t.flags |= 128,
                    n = !0,
                    Rl(l, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Qi(s),
                    e !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ji(t, e),
                        Rl(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !s.alternate && !me)
                            return Te(t),
                            null
                    } else
                        2 * jt() - l.renderingStartTime > es && a !== 536870912 && (t.flags |= 128,
                        n = !0,
                        Rl(l, !1),
                        t.lanes = 4194304);
                l.isBackwards ? (s.sibling = t.child,
                t.child = s) : (e = l.last,
                e !== null ? e.sibling = s : t.child = s,
                l.last = s)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = jt(),
            t.sibling = null,
            e = Ue.current,
            H(Ue, n ? e & 1 | 2 : e & 1),
            t) : (Te(t),
            null);
        case 22:
        case 23:
            return Qt(t),
            Lr(),
            n = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192),
            n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Te(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
            a = t.updateQueue,
            a !== null && Ji(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            n = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            n !== a && (t.flags |= 2048),
            e !== null && k(Wa),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Vt(_e),
            Te(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(c(156, t.tag))
    }
    function E0(e, t) {
        switch (Ar(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Vt(_e),
            la(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return ci(t),
            null;
        case 13:
            if (Qt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(c(340));
                hl()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return k(Ue),
            null;
        case 4:
            return la(),
            null;
        case 10:
            return Vt(t.type),
            null;
        case 22:
        case 23:
            return Qt(t),
            Lr(),
            e !== null && k(Wa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Vt(_e),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Dd(e, t) {
        switch (Ar(t),
        t.tag) {
        case 3:
            Vt(_e),
            la();
            break;
        case 26:
        case 27:
        case 5:
            ci(t);
            break;
        case 4:
            la();
            break;
        case 13:
            Qt(t);
            break;
        case 19:
            k(Ue);
            break;
        case 10:
            Vt(t.type);
            break;
        case 22:
        case 23:
            Qt(t),
            Lr(),
            e !== null && k(Wa);
            break;
        case 24:
            Vt(_e)
        }
    }
    function Ml(e, t) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var l = n.next;
                a = l;
                do {
                    if ((a.tag & e) === e) {
                        n = void 0;
                        var s = a.create
                          , u = a.inst;
                        n = s(),
                        u.destroy = n
                    }
                    a = a.next
                } while (a !== l)
            }
        } catch (m) {
            xe(t, t.return, m)
        }
    }
    function ga(e, t, a) {
        try {
            var n = t.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                n = s;
                do {
                    if ((n.tag & e) === e) {
                        var u = n.inst
                          , m = u.destroy;
                        if (m !== void 0) {
                            u.destroy = void 0,
                            l = t;
                            var v = a
                              , O = m;
                            try {
                                O()
                            } catch (j) {
                                xe(l, v, j)
                            }
                        }
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (j) {
            xe(t, t.return, j)
        }
    }
    function _d(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Sf(t, a)
            } catch (n) {
                xe(e, e.return, n)
            }
        }
    }
    function Ud(e, t, a) {
        a.props = $a(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (n) {
            xe(e, t, n)
        }
    }
    function zl(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var n = e.stateNode;
                    break;
                case 30:
                    n = e.stateNode;
                    break;
                default:
                    n = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(n) : a.current = n
            }
        } catch (l) {
            xe(e, t, l)
        }
    }
    function Mt(e, t) {
        var a = e.ref
          , n = e.refCleanup;
        if (a !== null)
            if (typeof n == "function")
                try {
                    n()
                } catch (l) {
                    xe(e, t, l)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (l) {
                    xe(e, t, l)
                }
            else
                a.current = null
    }
    function Ld(e) {
        var t = e.type
          , a = e.memoizedProps
          , n = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && n.focus();
                break e;
            case "img":
                a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet)
            }
        } catch (l) {
            xe(e, e.return, l)
        }
    }
    function uc(e, t, a) {
        try {
            var n = e.stateNode;
            Q0(n, e.type, a, t),
            n[Ie] = t
        } catch (l) {
            xe(e, e.return, l)
        }
    }
    function qd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Na(e.type) || e.tag === 4
    }
    function fc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || qd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Na(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function dc(e, t, a) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = os));
        else if (n !== 4 && (n === 27 && Na(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (dc(e, t, a),
            e = e.sibling; e !== null; )
                dc(e, t, a),
                e = e.sibling
    }
    function $i(e, t, a) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (n !== 4 && (n === 27 && Na(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for ($i(e, t, a),
            e = e.sibling; e !== null; )
                $i(e, t, a),
                e = e.sibling
    }
    function Hd(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var n = e.type, l = t.attributes; l.length; )
                t.removeAttributeNode(l[0]);
            Ke(t, n, a),
            t[Qe] = e,
            t[Ie] = a
        } catch (s) {
            xe(e, e.return, s)
        }
    }
    var Ft = !1
      , Re = !1
      , mc = !1
      , Bd = typeof WeakSet == "function" ? WeakSet : Set
      , He = null;
    function T0(e, t) {
        if (e = e.containerInfo,
        qc = ps,
        e = Fu(e),
        fr(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var n = a.getSelection && a.getSelection();
                    if (n && n.rangeCount !== 0) {
                        a = n.anchorNode;
                        var l = n.anchorOffset
                          , s = n.focusNode;
                        n = n.focusOffset;
                        try {
                            a.nodeType,
                            s.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var u = 0
                          , m = -1
                          , v = -1
                          , O = 0
                          , j = 0
                          , z = e
                          , T = null;
                        t: for (; ; ) {
                            for (var C; z !== a || l !== 0 && z.nodeType !== 3 || (m = u + l),
                            z !== s || n !== 0 && z.nodeType !== 3 || (v = u + n),
                            z.nodeType === 3 && (u += z.nodeValue.length),
                            (C = z.firstChild) !== null; )
                                T = z,
                                z = C;
                            for (; ; ) {
                                if (z === e)
                                    break t;
                                if (T === a && ++O === l && (m = u),
                                T === s && ++j === n && (v = u),
                                (C = z.nextSibling) !== null)
                                    break;
                                z = T,
                                T = z.parentNode
                            }
                            z = C
                        }
                        a = m === -1 || v === -1 ? null : {
                            start: m,
                            end: v
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Hc = {
            focusedElem: e,
            selectionRange: a
        },
        ps = !1,
        He = t; He !== null; )
            if (t = He,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                He = e;
            else
                for (; He !== null; ) {
                    switch (t = He,
                    s = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && s !== null) {
                            e = void 0,
                            a = t,
                            l = s.memoizedProps,
                            s = s.memoizedState,
                            n = a.stateNode;
                            try {
                                var I = $a(a.type, l, a.elementType === a.type);
                                e = n.getSnapshotBeforeUpdate(I, s),
                                n.__reactInternalSnapshotBeforeUpdate = e
                            } catch (P) {
                                xe(a, a.return, P)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Gc(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Gc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(c(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        He = e;
                        break
                    }
                    He = t.return
                }
    }
    function kd(e, t, a) {
        var n = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            pa(e, a),
            n & 4 && Ml(5, a);
            break;
        case 1:
            if (pa(e, a),
            n & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (u) {
                        xe(a, a.return, u)
                    }
                else {
                    var l = $a(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (u) {
                        xe(a, a.return, u)
                    }
                }
            n & 64 && _d(a),
            n & 512 && zl(a, a.return);
            break;
        case 3:
            if (pa(e, a),
            n & 64 && (e = a.updateQueue,
            e !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    Sf(e, t)
                } catch (u) {
                    xe(a, a.return, u)
                }
            }
            break;
        case 27:
            t === null && n & 4 && Hd(a);
        case 26:
        case 5:
            pa(e, a),
            t === null && n & 4 && Ld(a),
            n & 512 && zl(a, a.return);
            break;
        case 12:
            pa(e, a);
            break;
        case 13:
            pa(e, a),
            n & 4 && Kd(e, a),
            n & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = U0.bind(null, a),
            I0(e, a))));
            break;
        case 22:
            if (n = a.memoizedState !== null || Ft,
            !n) {
                t = t !== null && t.memoizedState !== null || Re,
                l = Ft;
                var s = Re;
                Ft = n,
                (Re = t) && !s ? va(e, a, (a.subtreeFlags & 8772) !== 0) : pa(e, a),
                Ft = l,
                Re = s
            }
            break;
        case 30:
            break;
        default:
            pa(e, a)
        }
    }
    function Gd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Gd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Qs(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ee = null
      , at = !1;
    function Wt(e, t, a) {
        for (a = a.child; a !== null; )
            Yd(e, t, a),
            a = a.sibling
    }
    function Yd(e, t, a) {
        if (it && typeof it.onCommitFiberUnmount == "function")
            try {
                it.onCommitFiberUnmount(In, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Re || Mt(a, t),
            Wt(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Re || Mt(a, t);
            var n = Ee
              , l = at;
            Na(a.type) && (Ee = a.stateNode,
            at = !1),
            Wt(e, t, a),
            Gl(a.stateNode),
            Ee = n,
            at = l;
            break;
        case 5:
            Re || Mt(a, t);
        case 6:
            if (n = Ee,
            l = at,
            Ee = null,
            Wt(e, t, a),
            Ee = n,
            at = l,
            Ee !== null)
                if (at)
                    try {
                        (Ee.nodeType === 9 ? Ee.body : Ee.nodeName === "HTML" ? Ee.ownerDocument.body : Ee).removeChild(a.stateNode)
                    } catch (s) {
                        xe(a, t, s)
                    }
                else
                    try {
                        Ee.removeChild(a.stateNode)
                    } catch (s) {
                        xe(a, t, s)
                    }
            break;
        case 18:
            Ee !== null && (at ? (e = Ee,
            Rm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            Fl(e)) : Rm(Ee, a.stateNode));
            break;
        case 4:
            n = Ee,
            l = at,
            Ee = a.stateNode.containerInfo,
            at = !0,
            Wt(e, t, a),
            Ee = n,
            at = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Re || ga(2, a, t),
            Re || ga(4, a, t),
            Wt(e, t, a);
            break;
        case 1:
            Re || (Mt(a, t),
            n = a.stateNode,
            typeof n.componentWillUnmount == "function" && Ud(a, t, n)),
            Wt(e, t, a);
            break;
        case 21:
            Wt(e, t, a);
            break;
        case 22:
            Re = (n = Re) || a.memoizedState !== null,
            Wt(e, t, a),
            Re = n;
            break;
        default:
            Wt(e, t, a)
        }
    }
    function Kd(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Fl(e)
            } catch (a) {
                xe(t, t.return, a)
            }
    }
    function C0(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Bd),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Bd),
            t;
        default:
            throw Error(c(435, e.tag))
        }
    }
    function hc(e, t) {
        var a = C0(e);
        t.forEach(function(n) {
            var l = L0.bind(null, e, n);
            a.has(n) || (a.add(n),
            n.then(l, l))
        })
    }
    function ot(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var n = 0; n < a.length; n++) {
                var l = a[n]
                  , s = e
                  , u = t
                  , m = u;
                e: for (; m !== null; ) {
                    switch (m.tag) {
                    case 27:
                        if (Na(m.type)) {
                            Ee = m.stateNode,
                            at = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ee = m.stateNode,
                        at = !1;
                        break e;
                    case 3:
                    case 4:
                        Ee = m.stateNode.containerInfo,
                        at = !0;
                        break e
                    }
                    m = m.return
                }
                if (Ee === null)
                    throw Error(c(160));
                Yd(s, u, l),
                Ee = null,
                at = !1,
                s = l.alternate,
                s !== null && (s.return = null),
                l.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                Vd(t, e),
                t = t.sibling
    }
    var Et = null;
    function Vd(e, t) {
        var a = e.alternate
          , n = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ot(t, e),
            ut(e),
            n & 4 && (ga(3, e, e.return),
            Ml(3, e),
            ga(5, e, e.return));
            break;
        case 1:
            ot(t, e),
            ut(e),
            n & 512 && (Re || a === null || Mt(a, a.return)),
            n & 64 && Ft && (e = e.updateQueue,
            e !== null && (n = e.callbacks,
            n !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
            break;
        case 26:
            var l = Et;
            if (ot(t, e),
            ut(e),
            n & 512 && (Re || a === null || Mt(a, a.return)),
            n & 4) {
                var s = a !== null ? a.memoizedState : null;
                if (n = e.memoizedState,
                a === null)
                    if (n === null)
                        if (e.stateNode === null) {
                            e: {
                                n = e.type,
                                a = e.memoizedProps,
                                l = l.ownerDocument || l;
                                t: switch (n) {
                                case "title":
                                    s = l.getElementsByTagName("title")[0],
                                    (!s || s[al] || s[Qe] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = l.createElement(n),
                                    l.head.insertBefore(s, l.querySelector("head > title"))),
                                    Ke(s, n, a),
                                    s[Qe] = e,
                                    Le(s),
                                    n = s;
                                    break e;
                                case "link":
                                    var u = Hm("link", "href", l).get(n + (a.href || ""));
                                    if (u) {
                                        for (var m = 0; m < u.length; m++)
                                            if (s = u[m],
                                            s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                u.splice(m, 1);
                                                break t
                                            }
                                    }
                                    s = l.createElement(n),
                                    Ke(s, n, a),
                                    l.head.appendChild(s);
                                    break;
                                case "meta":
                                    if (u = Hm("meta", "content", l).get(n + (a.content || ""))) {
                                        for (m = 0; m < u.length; m++)
                                            if (s = u[m],
                                            s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                u.splice(m, 1);
                                                break t
                                            }
                                    }
                                    s = l.createElement(n),
                                    Ke(s, n, a),
                                    l.head.appendChild(s);
                                    break;
                                default:
                                    throw Error(c(468, n))
                                }
                                s[Qe] = e,
                                Le(s),
                                n = s
                            }
                            e.stateNode = n
                        } else
                            Bm(l, e.type, e.stateNode);
                    else
                        e.stateNode = qm(l, n, e.memoizedProps);
                else
                    s !== n ? (s === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : s.count--,
                    n === null ? Bm(l, e.type, e.stateNode) : qm(l, n, e.memoizedProps)) : n === null && e.stateNode !== null && uc(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            ot(t, e),
            ut(e),
            n & 512 && (Re || a === null || Mt(a, a.return)),
            a !== null && n & 4 && uc(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (ot(t, e),
            ut(e),
            n & 512 && (Re || a === null || Mt(a, a.return)),
            e.flags & 32) {
                l = e.stateNode;
                try {
                    gn(l, "")
                } catch (C) {
                    xe(e, e.return, C)
                }
            }
            n & 4 && e.stateNode != null && (l = e.memoizedProps,
            uc(e, l, a !== null ? a.memoizedProps : l)),
            n & 1024 && (mc = !0);
            break;
        case 6:
            if (ot(t, e),
            ut(e),
            n & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                n = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = n
                } catch (C) {
                    xe(e, e.return, C)
                }
            }
            break;
        case 3:
            if (ms = null,
            l = Et,
            Et = fs(t.containerInfo),
            ot(t, e),
            Et = l,
            ut(e),
            n & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Fl(t.containerInfo)
                } catch (C) {
                    xe(e, e.return, C)
                }
            mc && (mc = !1,
            Xd(e));
            break;
        case 4:
            n = Et,
            Et = fs(e.stateNode.containerInfo),
            ot(t, e),
            ut(e),
            Et = n;
            break;
        case 12:
            ot(t, e),
            ut(e);
            break;
        case 13:
            ot(t, e),
            ut(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (xc = jt()),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            hc(e, n)));
            break;
        case 22:
            l = e.memoizedState !== null;
            var v = a !== null && a.memoizedState !== null
              , O = Ft
              , j = Re;
            if (Ft = O || l,
            Re = j || v,
            ot(t, e),
            Re = j,
            Ft = O,
            ut(e),
            n & 8192)
                e: for (t = e.stateNode,
                t._visibility = l ? t._visibility & -2 : t._visibility | 1,
                l && (a === null || v || Ft || Re || Ia(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            v = a = t;
                            try {
                                if (s = v.stateNode,
                                l)
                                    u = s.style,
                                    typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                                else {
                                    m = v.stateNode;
                                    var z = v.memoizedProps.style
                                      , T = z != null && z.hasOwnProperty("display") ? z.display : null;
                                    m.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim()
                                }
                            } catch (C) {
                                xe(v, v.return, C)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            v = t;
                            try {
                                v.stateNode.nodeValue = l ? "" : v.memoizedProps
                            } catch (C) {
                                xe(v, v.return, C)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            n & 4 && (n = e.updateQueue,
            n !== null && (a = n.retryQueue,
            a !== null && (n.retryQueue = null,
            hc(e, a))));
            break;
        case 19:
            ot(t, e),
            ut(e),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            hc(e, n)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ot(t, e),
            ut(e)
        }
    }
    function ut(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, n = e.return; n !== null; ) {
                    if (qd(n)) {
                        a = n;
                        break
                    }
                    n = n.return
                }
                if (a == null)
                    throw Error(c(160));
                switch (a.tag) {
                case 27:
                    var l = a.stateNode
                      , s = fc(e);
                    $i(e, s, l);
                    break;
                case 5:
                    var u = a.stateNode;
                    a.flags & 32 && (gn(u, ""),
                    a.flags &= -33);
                    var m = fc(e);
                    $i(e, m, u);
                    break;
                case 3:
                case 4:
                    var v = a.stateNode.containerInfo
                      , O = fc(e);
                    dc(e, O, v);
                    break;
                default:
                    throw Error(c(161))
                }
            } catch (j) {
                xe(e, e.return, j)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Xd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Xd(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function pa(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                kd(e, t.alternate, t),
                t = t.sibling
    }
    function Ia(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ga(4, t, t.return),
                Ia(t);
                break;
            case 1:
                Mt(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Ud(t, t.return, a),
                Ia(t);
                break;
            case 27:
                Gl(t.stateNode);
            case 26:
            case 5:
                Mt(t, t.return),
                Ia(t);
                break;
            case 22:
                t.memoizedState === null && Ia(t);
                break;
            case 30:
                Ia(t);
                break;
            default:
                Ia(t)
            }
            e = e.sibling
        }
    }
    function va(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var n = t.alternate
              , l = e
              , s = t
              , u = s.flags;
            switch (s.tag) {
            case 0:
            case 11:
            case 15:
                va(l, s, a),
                Ml(4, s);
                break;
            case 1:
                if (va(l, s, a),
                n = s,
                l = n.stateNode,
                typeof l.componentDidMount == "function")
                    try {
                        l.componentDidMount()
                    } catch (O) {
                        xe(n, n.return, O)
                    }
                if (n = s,
                l = n.updateQueue,
                l !== null) {
                    var m = n.stateNode;
                    try {
                        var v = l.shared.hiddenCallbacks;
                        if (v !== null)
                            for (l.shared.hiddenCallbacks = null,
                            l = 0; l < v.length; l++)
                                xf(v[l], m)
                    } catch (O) {
                        xe(n, n.return, O)
                    }
                }
                a && u & 64 && _d(s),
                zl(s, s.return);
                break;
            case 27:
                Hd(s);
            case 26:
            case 5:
                va(l, s, a),
                a && n === null && u & 4 && Ld(s),
                zl(s, s.return);
                break;
            case 12:
                va(l, s, a);
                break;
            case 13:
                va(l, s, a),
                a && u & 4 && Kd(l, s);
                break;
            case 22:
                s.memoizedState === null && va(l, s, a),
                zl(s, s.return);
                break;
            case 30:
                break;
            default:
                va(l, s, a)
            }
            t = t.sibling
        }
    }
    function gc(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && vl(a))
    }
    function pc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && vl(e))
    }
    function zt(e, t, a, n) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Qd(e, t, a, n),
                t = t.sibling
    }
    function Qd(e, t, a, n) {
        var l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            zt(e, t, a, n),
            l & 2048 && Ml(9, t);
            break;
        case 1:
            zt(e, t, a, n);
            break;
        case 3:
            zt(e, t, a, n),
            l & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && vl(e)));
            break;
        case 12:
            if (l & 2048) {
                zt(e, t, a, n),
                e = t.stateNode;
                try {
                    var s = t.memoizedProps
                      , u = s.id
                      , m = s.onPostCommit;
                    typeof m == "function" && m(u, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (v) {
                    xe(t, t.return, v)
                }
            } else
                zt(e, t, a, n);
            break;
        case 13:
            zt(e, t, a, n);
            break;
        case 23:
            break;
        case 22:
            s = t.stateNode,
            u = t.alternate,
            t.memoizedState !== null ? s._visibility & 2 ? zt(e, t, a, n) : Dl(e, t) : s._visibility & 2 ? zt(e, t, a, n) : (s._visibility |= 2,
            _n(e, t, a, n, (t.subtreeFlags & 10256) !== 0)),
            l & 2048 && gc(u, t);
            break;
        case 24:
            zt(e, t, a, n),
            l & 2048 && pc(t.alternate, t);
            break;
        default:
            zt(e, t, a, n)
        }
    }
    function _n(e, t, a, n, l) {
        for (l = l && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var s = e
              , u = t
              , m = a
              , v = n
              , O = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                _n(s, u, m, v, l),
                Ml(8, u);
                break;
            case 23:
                break;
            case 22:
                var j = u.stateNode;
                u.memoizedState !== null ? j._visibility & 2 ? _n(s, u, m, v, l) : Dl(s, u) : (j._visibility |= 2,
                _n(s, u, m, v, l)),
                l && O & 2048 && gc(u.alternate, u);
                break;
            case 24:
                _n(s, u, m, v, l),
                l && O & 2048 && pc(u.alternate, u);
                break;
            default:
                _n(s, u, m, v, l)
            }
            t = t.sibling
        }
    }
    function Dl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , n = t
                  , l = n.flags;
                switch (n.tag) {
                case 22:
                    Dl(a, n),
                    l & 2048 && gc(n.alternate, n);
                    break;
                case 24:
                    Dl(a, n),
                    l & 2048 && pc(n.alternate, n);
                    break;
                default:
                    Dl(a, n)
                }
                t = t.sibling
            }
    }
    var _l = 8192;
    function Un(e) {
        if (e.subtreeFlags & _l)
            for (e = e.child; e !== null; )
                Zd(e),
                e = e.sibling
    }
    function Zd(e) {
        switch (e.tag) {
        case 26:
            Un(e),
            e.flags & _l && e.memoizedState !== null && d1(Et, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Un(e);
            break;
        case 3:
        case 4:
            var t = Et;
            Et = fs(e.stateNode.containerInfo),
            Un(e),
            Et = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = _l,
            _l = 16777216,
            Un(e),
            _l = t) : Un(e));
            break;
        default:
            Un(e)
        }
    }
    function Pd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Ul(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    He = n,
                    Wd(n, e)
                }
            Pd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Fd(e),
                e = e.sibling
    }
    function Fd(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ul(e),
            e.flags & 2048 && ga(9, e, e.return);
            break;
        case 3:
            Ul(e);
            break;
        case 12:
            Ul(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Ii(e)) : Ul(e);
            break;
        default:
            Ul(e)
        }
    }
    function Ii(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    He = n,
                    Wd(n, e)
                }
            Pd(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                ga(8, t, t.return),
                Ii(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Ii(t));
                break;
            default:
                Ii(t)
            }
            e = e.sibling
        }
    }
    function Wd(e, t) {
        for (; He !== null; ) {
            var a = He;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ga(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var n = a.memoizedState.cachePool.pool;
                    n != null && n.refCount++
                }
                break;
            case 24:
                vl(a.memoizedState.cache)
            }
            if (n = a.child,
            n !== null)
                n.return = a,
                He = n;
            else
                e: for (a = e; He !== null; ) {
                    n = He;
                    var l = n.sibling
                      , s = n.return;
                    if (Gd(n),
                    n === a) {
                        He = null;
                        break e
                    }
                    if (l !== null) {
                        l.return = s,
                        He = l;
                        break e
                    }
                    He = s
                }
        }
    }
    var j0 = {
        getCacheForType: function(e) {
            var t = Ze(_e)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , w0 = typeof WeakMap == "function" ? WeakMap : Map
      , he = 0
      , Ae = null
      , se = null
      , oe = 0
      , ge = 0
      , ft = null
      , ya = !1
      , Ln = !1
      , vc = !1
      , Jt = 0
      , je = 0
      , ba = 0
      , en = 0
      , yc = 0
      , At = 0
      , qn = 0
      , Ll = null
      , nt = null
      , bc = !1
      , xc = 0
      , es = 1 / 0
      , ts = null
      , xa = null
      , Ye = 0
      , Sa = null
      , Hn = null
      , Bn = 0
      , Sc = 0
      , Ac = null
      , Jd = null
      , ql = 0
      , Nc = null;
    function dt() {
        if ((he & 2) !== 0 && oe !== 0)
            return oe & -oe;
        if (w.T !== null) {
            var e = Tn;
            return e !== 0 ? e : Rc()
        }
        return du()
    }
    function $d() {
        At === 0 && (At = (oe & 536870912) === 0 || me ? cu() : 536870912);
        var e = St.current;
        return e !== null && (e.flags |= 32),
        At
    }
    function mt(e, t, a) {
        (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (kn(e, 0),
        Aa(e, oe, At, !1)),
        tl(e, a),
        ((he & 2) === 0 || e !== Ae) && (e === Ae && ((he & 2) === 0 && (en |= a),
        je === 4 && Aa(e, oe, At, !1)),
        Dt(e))
    }
    function Id(e, t, a) {
        if ((he & 6) !== 0)
            throw Error(c(327));
        var n = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || el(e, t)
          , l = n ? z0(e, t) : Tc(e, t, !0)
          , s = n;
        do {
            if (l === 0) {
                Ln && !n && Aa(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                s && !R0(a)) {
                    l = Tc(e, t, !1),
                    s = !1;
                    continue
                }
                if (l === 2) {
                    if (s = t,
                    e.errorRecoveryDisabledLanes & s)
                        var u = 0;
                    else
                        u = e.pendingLanes & -536870913,
                        u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
                    if (u !== 0) {
                        t = u;
                        e: {
                            var m = e;
                            l = Ll;
                            var v = m.current.memoizedState.isDehydrated;
                            if (v && (kn(m, u).flags |= 256),
                            u = Tc(m, u, !1),
                            u !== 2) {
                                if (vc && !v) {
                                    m.errorRecoveryDisabledLanes |= s,
                                    en |= s,
                                    l = 4;
                                    break e
                                }
                                s = nt,
                                nt = l,
                                s !== null && (nt === null ? nt = s : nt.push.apply(nt, s))
                            }
                            l = u
                        }
                        if (s = !1,
                        l !== 2)
                            continue
                    }
                }
                if (l === 1) {
                    kn(e, 0),
                    Aa(e, t, 0, !0);
                    break
                }
                e: {
                    switch (n = e,
                    s = l,
                    s) {
                    case 0:
                    case 1:
                        throw Error(c(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Aa(n, t, At, !ya);
                        break e;
                    case 2:
                        nt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(c(329))
                    }
                    if ((t & 62914560) === t && (l = xc + 300 - jt(),
                    10 < l)) {
                        if (Aa(n, t, At, !ya),
                        di(n, 0, !0) !== 0)
                            break e;
                        n.timeoutHandle = jm(em.bind(null, n, a, nt, ts, bc, t, At, en, qn, ya, s, 2, -0, 0), l);
                        break e
                    }
                    em(n, a, nt, ts, bc, t, At, en, qn, ya, s, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Dt(e)
    }
    function em(e, t, a, n, l, s, u, m, v, O, j, z, T, C) {
        if (e.timeoutHandle = -1,
        z = t.subtreeFlags,
        (z & 8192 || (z & 16785408) === 16785408) && (Vl = {
            stylesheets: null,
            count: 0,
            unsuspend: f1
        },
        Zd(t),
        z = m1(),
        z !== null)) {
            e.cancelPendingCommit = z(rm.bind(null, e, t, s, a, n, l, u, m, v, j, 1, T, C)),
            Aa(e, s, u, !O);
            return
        }
        rm(e, t, s, a, n, l, u, m, v)
    }
    function R0(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var n = 0; n < a.length; n++) {
                    var l = a[n]
                      , s = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!rt(s(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Aa(e, t, a, n) {
        t &= ~yc,
        t &= ~en,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        n && (e.warmLanes |= t),
        n = e.expirationTimes;
        for (var l = t; 0 < l; ) {
            var s = 31 - st(l)
              , u = 1 << s;
            n[s] = -1,
            l &= ~u
        }
        a !== 0 && uu(e, a, t)
    }
    function as() {
        return (he & 6) === 0 ? (Hl(0),
        !1) : !0
    }
    function Oc() {
        if (se !== null) {
            if (ge === 0)
                var e = se.return;
            else
                e = se,
                Kt = Pa = null,
                Gr(e),
                zn = null,
                jl = 0,
                e = se;
            for (; e !== null; )
                Dd(e.alternate, e),
                e = e.return;
            se = null
        }
    }
    function kn(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        P0(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Oc(),
        Ae = e,
        se = a = kt(e.current, null),
        oe = t,
        ge = 0,
        ft = null,
        ya = !1,
        Ln = el(e, t),
        vc = !1,
        qn = At = yc = en = ba = je = 0,
        nt = Ll = null,
        bc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
            for (e = e.entanglements,
            n &= t; 0 < n; ) {
                var l = 31 - st(n)
                  , s = 1 << l;
                t |= e[l],
                n &= ~s
            }
        return Jt = t,
        Oi(),
        a
    }
    function tm(e, t) {
        le = null,
        w.H = Ki,
        t === bl || t === Di ? (t = yf(),
        ge = 3) : t === gf ? (t = yf(),
        ge = 4) : ge = t === bd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        ft = t,
        se === null && (je = 1,
        Pi(e, vt(t, e.current)))
    }
    function am() {
        var e = w.H;
        return w.H = Ki,
        e === null ? Ki : e
    }
    function nm() {
        var e = w.A;
        return w.A = j0,
        e
    }
    function Ec() {
        je = 4,
        ya || (oe & 4194048) !== oe && St.current !== null || (Ln = !0),
        (ba & 134217727) === 0 && (en & 134217727) === 0 || Ae === null || Aa(Ae, oe, At, !1)
    }
    function Tc(e, t, a) {
        var n = he;
        he |= 2;
        var l = am()
          , s = nm();
        (Ae !== e || oe !== t) && (ts = null,
        kn(e, t)),
        t = !1;
        var u = je;
        e: do
            try {
                if (ge !== 0 && se !== null) {
                    var m = se
                      , v = ft;
                    switch (ge) {
                    case 8:
                        Oc(),
                        u = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        St.current === null && (t = !0);
                        var O = ge;
                        if (ge = 0,
                        ft = null,
                        Gn(e, m, v, O),
                        a && Ln) {
                            u = 0;
                            break e
                        }
                        break;
                    default:
                        O = ge,
                        ge = 0,
                        ft = null,
                        Gn(e, m, v, O)
                    }
                }
                M0(),
                u = je;
                break
            } catch (j) {
                tm(e, j)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Kt = Pa = null,
        he = n,
        w.H = l,
        w.A = s,
        se === null && (Ae = null,
        oe = 0,
        Oi()),
        u
    }
    function M0() {
        for (; se !== null; )
            lm(se)
    }
    function z0(e, t) {
        var a = he;
        he |= 2;
        var n = am()
          , l = nm();
        Ae !== e || oe !== t ? (ts = null,
        es = jt() + 500,
        kn(e, t)) : Ln = el(e, t);
        e: do
            try {
                if (ge !== 0 && se !== null) {
                    t = se;
                    var s = ft;
                    t: switch (ge) {
                    case 1:
                        ge = 0,
                        ft = null,
                        Gn(e, t, s, 1);
                        break;
                    case 2:
                    case 9:
                        if (pf(s)) {
                            ge = 0,
                            ft = null,
                            im(t);
                            break
                        }
                        t = function() {
                            ge !== 2 && ge !== 9 || Ae !== e || (ge = 7),
                            Dt(e)
                        }
                        ,
                        s.then(t, t);
                        break e;
                    case 3:
                        ge = 7;
                        break e;
                    case 4:
                        ge = 5;
                        break e;
                    case 7:
                        pf(s) ? (ge = 0,
                        ft = null,
                        im(t)) : (ge = 0,
                        ft = null,
                        Gn(e, t, s, 7));
                        break;
                    case 5:
                        var u = null;
                        switch (se.tag) {
                        case 26:
                            u = se.memoizedState;
                        case 5:
                        case 27:
                            var m = se;
                            if (!u || km(u)) {
                                ge = 0,
                                ft = null;
                                var v = m.sibling;
                                if (v !== null)
                                    se = v;
                                else {
                                    var O = m.return;
                                    O !== null ? (se = O,
                                    ns(O)) : se = null
                                }
                                break t
                            }
                        }
                        ge = 0,
                        ft = null,
                        Gn(e, t, s, 5);
                        break;
                    case 6:
                        ge = 0,
                        ft = null,
                        Gn(e, t, s, 6);
                        break;
                    case 8:
                        Oc(),
                        je = 6;
                        break e;
                    default:
                        throw Error(c(462))
                    }
                }
                D0();
                break
            } catch (j) {
                tm(e, j)
            }
        while (!0);
        return Kt = Pa = null,
        w.H = n,
        w.A = l,
        he = a,
        se !== null ? 0 : (Ae = null,
        oe = 0,
        Oi(),
        je)
    }
    function D0() {
        for (; se !== null && !tp(); )
            lm(se)
    }
    function lm(e) {
        var t = Md(e.alternate, e, Jt);
        e.memoizedProps = e.pendingProps,
        t === null ? ns(e) : se = t
    }
    function im(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Ed(a, t, t.pendingProps, t.type, void 0, oe);
            break;
        case 11:
            t = Ed(a, t, t.pendingProps, t.type.render, t.ref, oe);
            break;
        case 5:
            Gr(t);
        default:
            Dd(a, t),
            t = se = sf(t, Jt),
            t = Md(a, t, Jt)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? ns(e) : se = t
    }
    function Gn(e, t, a, n) {
        Kt = Pa = null,
        Gr(t),
        zn = null,
        jl = 0;
        var l = t.return;
        try {
            if (A0(e, l, t, a, oe)) {
                je = 1,
                Pi(e, vt(a, e.current)),
                se = null;
                return
            }
        } catch (s) {
            if (l !== null)
                throw se = l,
                s;
            je = 1,
            Pi(e, vt(a, e.current)),
            se = null;
            return
        }
        t.flags & 32768 ? (me || n === 1 ? e = !0 : Ln || (oe & 536870912) !== 0 ? e = !1 : (ya = e = !0,
        (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current,
        n !== null && n.tag === 13 && (n.flags |= 16384))),
        sm(t, e)) : ns(t)
    }
    function ns(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                sm(t, ya);
                return
            }
            e = t.return;
            var a = O0(t.alternate, t, Jt);
            if (a !== null) {
                se = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                se = t;
                return
            }
            se = t = e
        } while (t !== null);
        je === 0 && (je = 5)
    }
    function sm(e, t) {
        do {
            var a = E0(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                se = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                se = e;
                return
            }
            se = e = a
        } while (e !== null);
        je = 6,
        se = null
    }
    function rm(e, t, a, n, l, s, u, m, v) {
        e.cancelPendingCommit = null;
        do
            ls();
        while (Ye !== 0);
        if ((he & 6) !== 0)
            throw Error(c(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(c(177));
            if (s = t.lanes | t.childLanes,
            s |= pr,
            fp(e, a, s, u, m, v),
            e === Ae && (se = Ae = null,
            oe = 0),
            Hn = t,
            Sa = e,
            Bn = a,
            Sc = s,
            Ac = l,
            Jd = n,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            q0(oi, function() {
                return dm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            n = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || n) {
                n = w.T,
                w.T = null,
                l = B.p,
                B.p = 2,
                u = he,
                he |= 4;
                try {
                    T0(e, t, a)
                } finally {
                    he = u,
                    B.p = l,
                    w.T = n
                }
            }
            Ye = 1,
            cm(),
            om(),
            um()
        }
    }
    function cm() {
        if (Ye === 1) {
            Ye = 0;
            var e = Sa
              , t = Hn
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = w.T,
                w.T = null;
                var n = B.p;
                B.p = 2;
                var l = he;
                he |= 4;
                try {
                    Vd(t, e);
                    var s = Hc
                      , u = Fu(e.containerInfo)
                      , m = s.focusedElem
                      , v = s.selectionRange;
                    if (u !== m && m && m.ownerDocument && Pu(m.ownerDocument.documentElement, m)) {
                        if (v !== null && fr(m)) {
                            var O = v.start
                              , j = v.end;
                            if (j === void 0 && (j = O),
                            "selectionStart"in m)
                                m.selectionStart = O,
                                m.selectionEnd = Math.min(j, m.value.length);
                            else {
                                var z = m.ownerDocument || document
                                  , T = z && z.defaultView || window;
                                if (T.getSelection) {
                                    var C = T.getSelection()
                                      , I = m.textContent.length
                                      , P = Math.min(v.start, I)
                                      , ye = v.end === void 0 ? P : Math.min(v.end, I);
                                    !C.extend && P > ye && (u = ye,
                                    ye = P,
                                    P = u);
                                    var A = Zu(m, P)
                                      , x = Zu(m, ye);
                                    if (A && x && (C.rangeCount !== 1 || C.anchorNode !== A.node || C.anchorOffset !== A.offset || C.focusNode !== x.node || C.focusOffset !== x.offset)) {
                                        var N = z.createRange();
                                        N.setStart(A.node, A.offset),
                                        C.removeAllRanges(),
                                        P > ye ? (C.addRange(N),
                                        C.extend(x.node, x.offset)) : (N.setEnd(x.node, x.offset),
                                        C.addRange(N))
                                    }
                                }
                            }
                        }
                        for (z = [],
                        C = m; C = C.parentNode; )
                            C.nodeType === 1 && z.push({
                                element: C,
                                left: C.scrollLeft,
                                top: C.scrollTop
                            });
                        for (typeof m.focus == "function" && m.focus(),
                        m = 0; m < z.length; m++) {
                            var M = z[m];
                            M.element.scrollLeft = M.left,
                            M.element.scrollTop = M.top
                        }
                    }
                    ps = !!qc,
                    Hc = qc = null
                } finally {
                    he = l,
                    B.p = n,
                    w.T = a
                }
            }
            e.current = t,
            Ye = 2
        }
    }
    function om() {
        if (Ye === 2) {
            Ye = 0;
            var e = Sa
              , t = Hn
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = w.T,
                w.T = null;
                var n = B.p;
                B.p = 2;
                var l = he;
                he |= 4;
                try {
                    kd(e, t.alternate, t)
                } finally {
                    he = l,
                    B.p = n,
                    w.T = a
                }
            }
            Ye = 3
        }
    }
    function um() {
        if (Ye === 4 || Ye === 3) {
            Ye = 0,
            ap();
            var e = Sa
              , t = Hn
              , a = Bn
              , n = Jd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0,
            Hn = Sa = null,
            fm(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (l === 0 && (xa = null),
            Vs(a),
            t = t.stateNode,
            it && typeof it.onCommitFiberRoot == "function")
                try {
                    it.onCommitFiberRoot(In, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (n !== null) {
                t = w.T,
                l = B.p,
                B.p = 2,
                w.T = null;
                try {
                    for (var s = e.onRecoverableError, u = 0; u < n.length; u++) {
                        var m = n[u];
                        s(m.value, {
                            componentStack: m.stack
                        })
                    }
                } finally {
                    w.T = t,
                    B.p = l
                }
            }
            (Bn & 3) !== 0 && ls(),
            Dt(e),
            l = e.pendingLanes,
            (a & 4194090) !== 0 && (l & 42) !== 0 ? e === Nc ? ql++ : (ql = 0,
            Nc = e) : ql = 0,
            Hl(0)
        }
    }
    function fm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        vl(t)))
    }
    function ls(e) {
        return cm(),
        om(),
        um(),
        dm()
    }
    function dm() {
        if (Ye !== 5)
            return !1;
        var e = Sa
          , t = Sc;
        Sc = 0;
        var a = Vs(Bn)
          , n = w.T
          , l = B.p;
        try {
            B.p = 32 > a ? 32 : a,
            w.T = null,
            a = Ac,
            Ac = null;
            var s = Sa
              , u = Bn;
            if (Ye = 0,
            Hn = Sa = null,
            Bn = 0,
            (he & 6) !== 0)
                throw Error(c(331));
            var m = he;
            if (he |= 4,
            Fd(s.current),
            Qd(s, s.current, u, a),
            he = m,
            Hl(0, !1),
            it && typeof it.onPostCommitFiberRoot == "function")
                try {
                    it.onPostCommitFiberRoot(In, s)
                } catch {}
            return !0
        } finally {
            B.p = l,
            w.T = n,
            fm(e, t)
        }
    }
    function mm(e, t, a) {
        t = vt(a, t),
        t = tc(e.stateNode, t, 2),
        e = fa(e, t, 2),
        e !== null && (tl(e, 2),
        Dt(e))
    }
    function xe(e, t, a) {
        if (e.tag === 3)
            mm(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    mm(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (xa === null || !xa.has(n))) {
                        e = vt(a, e),
                        a = vd(2),
                        n = fa(t, a, 2),
                        n !== null && (yd(a, n, t, e),
                        tl(n, 2),
                        Dt(n));
                        break
                    }
                }
                t = t.return
            }
    }
    function Cc(e, t, a) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new w0;
            var l = new Set;
            n.set(t, l)
        } else
            l = n.get(t),
            l === void 0 && (l = new Set,
            n.set(t, l));
        l.has(a) || (vc = !0,
        l.add(a),
        e = _0.bind(null, e, t, a),
        t.then(e, e))
    }
    function _0(e, t, a) {
        var n = e.pingCache;
        n !== null && n.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        Ae === e && (oe & a) === a && (je === 4 || je === 3 && (oe & 62914560) === oe && 300 > jt() - xc ? (he & 2) === 0 && kn(e, 0) : yc |= a,
        qn === oe && (qn = 0)),
        Dt(e)
    }
    function hm(e, t) {
        t === 0 && (t = ou()),
        e = An(e, t),
        e !== null && (tl(e, t),
        Dt(e))
    }
    function U0(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        hm(e, a)
    }
    function L0(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var n = e.stateNode
              , l = e.memoizedState;
            l !== null && (a = l.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        case 22:
            n = e.stateNode._retryCache;
            break;
        default:
            throw Error(c(314))
        }
        n !== null && n.delete(t),
        hm(e, a)
    }
    function q0(e, t) {
        return ks(e, t)
    }
    var is = null
      , Yn = null
      , jc = !1
      , ss = !1
      , wc = !1
      , tn = 0;
    function Dt(e) {
        e !== Yn && e.next === null && (Yn === null ? is = Yn = e : Yn = Yn.next = e),
        ss = !0,
        jc || (jc = !0,
        B0())
    }
    function Hl(e, t) {
        if (!wc && ss) {
            wc = !0;
            do
                for (var a = !1, n = is; n !== null; ) {
                    if (e !== 0) {
                        var l = n.pendingLanes;
                        if (l === 0)
                            var s = 0;
                        else {
                            var u = n.suspendedLanes
                              , m = n.pingedLanes;
                            s = (1 << 31 - st(42 | e) + 1) - 1,
                            s &= l & ~(u & ~m),
                            s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
                        }
                        s !== 0 && (a = !0,
                        ym(n, s))
                    } else
                        s = oe,
                        s = di(n, n === Ae ? s : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1),
                        (s & 3) === 0 || el(n, s) || (a = !0,
                        ym(n, s));
                    n = n.next
                }
            while (a);
            wc = !1
        }
    }
    function H0() {
        gm()
    }
    function gm() {
        ss = jc = !1;
        var e = 0;
        tn !== 0 && (Z0() && (e = tn),
        tn = 0);
        for (var t = jt(), a = null, n = is; n !== null; ) {
            var l = n.next
              , s = pm(n, t);
            s === 0 ? (n.next = null,
            a === null ? is = l : a.next = l,
            l === null && (Yn = a)) : (a = n,
            (e !== 0 || (s & 3) !== 0) && (ss = !0)),
            n = l
        }
        Hl(e)
    }
    function pm(e, t) {
        for (var a = e.suspendedLanes, n = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
            var u = 31 - st(s)
              , m = 1 << u
              , v = l[u];
            v === -1 ? ((m & a) === 0 || (m & n) !== 0) && (l[u] = up(m, t)) : v <= t && (e.expiredLanes |= m),
            s &= ~m
        }
        if (t = Ae,
        a = oe,
        a = di(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n = e.callbackNode,
        a === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null)
            return n !== null && n !== null && Gs(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || el(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (n !== null && Gs(n),
            Vs(a)) {
            case 2:
            case 8:
                a = su;
                break;
            case 32:
                a = oi;
                break;
            case 268435456:
                a = ru;
                break;
            default:
                a = oi
            }
            return n = vm.bind(null, e),
            a = ks(a, n),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return n !== null && n !== null && Gs(n),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function vm(e, t) {
        if (Ye !== 0 && Ye !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (ls() && e.callbackNode !== a)
            return null;
        var n = oe;
        return n = di(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n === 0 ? null : (Id(e, n, t),
        pm(e, jt()),
        e.callbackNode != null && e.callbackNode === a ? vm.bind(null, e) : null)
    }
    function ym(e, t) {
        if (ls())
            return null;
        Id(e, t, !0)
    }
    function B0() {
        F0(function() {
            (he & 6) !== 0 ? ks(iu, H0) : gm()
        })
    }
    function Rc() {
        return tn === 0 && (tn = cu()),
        tn
    }
    function bm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vi("" + e)
    }
    function xm(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function k0(e, t, a, n, l) {
        if (t === "submit" && a && a.stateNode === l) {
            var s = bm((l[Ie] || null).action)
              , u = n.submitter;
            u && (t = (t = u[Ie] || null) ? bm(t.formAction) : u.getAttribute("formAction"),
            t !== null && (s = t,
            u = null));
            var m = new Si("action","action",null,n,l);
            e.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (n.defaultPrevented) {
                            if (tn !== 0) {
                                var v = u ? xm(l, u) : new FormData(l);
                                Wr(a, {
                                    pending: !0,
                                    data: v,
                                    method: l.method,
                                    action: s
                                }, null, v)
                            }
                        } else
                            typeof s == "function" && (m.preventDefault(),
                            v = u ? xm(l, u) : new FormData(l),
                            Wr(a, {
                                pending: !0,
                                data: v,
                                method: l.method,
                                action: s
                            }, s, v))
                    },
                    currentTarget: l
                }]
            })
        }
    }
    for (var Mc = 0; Mc < gr.length; Mc++) {
        var zc = gr[Mc]
          , G0 = zc.toLowerCase()
          , Y0 = zc[0].toUpperCase() + zc.slice(1);
        Ot(G0, "on" + Y0)
    }
    Ot($u, "onAnimationEnd"),
    Ot(Iu, "onAnimationIteration"),
    Ot(ef, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(i0, "onTransitionRun"),
    Ot(s0, "onTransitionStart"),
    Ot(r0, "onTransitionCancel"),
    Ot(tf, "onTransitionEnd"),
    dn("onMouseEnter", ["mouseout", "mouseover"]),
    dn("onMouseLeave", ["mouseout", "mouseover"]),
    dn("onPointerEnter", ["pointerout", "pointerover"]),
    dn("onPointerLeave", ["pointerout", "pointerover"]),
    Ba("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ba("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ba("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ba("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ba("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ba("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , K0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));
    function Sm(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var n = e[a]
              , l = n.event;
            n = n.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var u = n.length - 1; 0 <= u; u--) {
                        var m = n[u]
                          , v = m.instance
                          , O = m.currentTarget;
                        if (m = m.listener,
                        v !== s && l.isPropagationStopped())
                            break e;
                        s = m,
                        l.currentTarget = O;
                        try {
                            s(l)
                        } catch (j) {
                            Zi(j)
                        }
                        l.currentTarget = null,
                        s = v
                    }
                else
                    for (u = 0; u < n.length; u++) {
                        if (m = n[u],
                        v = m.instance,
                        O = m.currentTarget,
                        m = m.listener,
                        v !== s && l.isPropagationStopped())
                            break e;
                        s = m,
                        l.currentTarget = O;
                        try {
                            s(l)
                        } catch (j) {
                            Zi(j)
                        }
                        l.currentTarget = null,
                        s = v
                    }
            }
        }
    }
    function re(e, t) {
        var a = t[Xs];
        a === void 0 && (a = t[Xs] = new Set);
        var n = e + "__bubble";
        a.has(n) || (Am(t, e, 2, !1),
        a.add(n))
    }
    function Dc(e, t, a) {
        var n = 0;
        t && (n |= 4),
        Am(a, e, n, t)
    }
    var rs = "_reactListening" + Math.random().toString(36).slice(2);
    function _c(e) {
        if (!e[rs]) {
            e[rs] = !0,
            hu.forEach(function(a) {
                a !== "selectionchange" && (K0.has(a) || Dc(a, !1, e),
                Dc(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[rs] || (t[rs] = !0,
            Dc("selectionchange", !1, t))
        }
    }
    function Am(e, t, a, n) {
        switch (Qm(t)) {
        case 2:
            var l = p1;
            break;
        case 8:
            l = v1;
            break;
        default:
            l = Pc
        }
        a = l.bind(null, t, a, e),
        l = void 0,
        !ar || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
        n ? l !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, a, !0) : l !== void 0 ? e.addEventListener(t, a, {
            passive: l
        }) : e.addEventListener(t, a, !1)
    }
    function Uc(e, t, a, n, l) {
        var s = n;
        if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
            e: for (; ; ) {
                if (n === null)
                    return;
                var u = n.tag;
                if (u === 3 || u === 4) {
                    var m = n.stateNode.containerInfo;
                    if (m === l)
                        break;
                    if (u === 4)
                        for (u = n.return; u !== null; ) {
                            var v = u.tag;
                            if ((v === 3 || v === 4) && u.stateNode.containerInfo === l)
                                return;
                            u = u.return
                        }
                    for (; m !== null; ) {
                        if (u = on(m),
                        u === null)
                            return;
                        if (v = u.tag,
                        v === 5 || v === 6 || v === 26 || v === 27) {
                            n = s = u;
                            continue e
                        }
                        m = m.parentNode
                    }
                }
                n = n.return
            }
        ju(function() {
            var O = s
              , j = er(a)
              , z = [];
            e: {
                var T = af.get(e);
                if (T !== void 0) {
                    var C = Si
                      , I = e;
                    switch (e) {
                    case "keypress":
                        if (bi(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        C = qp;
                        break;
                    case "focusin":
                        I = "focus",
                        C = sr;
                        break;
                    case "focusout":
                        I = "blur",
                        C = sr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        C = sr;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        C = Mu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        C = Ep;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        C = kp;
                        break;
                    case $u:
                    case Iu:
                    case ef:
                        C = jp;
                        break;
                    case tf:
                        C = Yp;
                        break;
                    case "scroll":
                    case "scrollend":
                        C = Np;
                        break;
                    case "wheel":
                        C = Vp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        C = Rp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        C = Du;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        C = Qp
                    }
                    var P = (t & 4) !== 0
                      , ye = !P && (e === "scroll" || e === "scrollend")
                      , A = P ? T !== null ? T + "Capture" : null : T;
                    P = [];
                    for (var x = O, N; x !== null; ) {
                        var M = x;
                        if (N = M.stateNode,
                        M = M.tag,
                        M !== 5 && M !== 26 && M !== 27 || N === null || A === null || (M = ll(x, A),
                        M != null && P.push(kl(x, M, N))),
                        ye)
                            break;
                        x = x.return
                    }
                    0 < P.length && (T = new C(T,I,null,a,j),
                    z.push({
                        event: T,
                        listeners: P
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (T = e === "mouseover" || e === "pointerover",
                    C = e === "mouseout" || e === "pointerout",
                    T && a !== Is && (I = a.relatedTarget || a.fromElement) && (on(I) || I[cn]))
                        break e;
                    if ((C || T) && (T = j.window === j ? j : (T = j.ownerDocument) ? T.defaultView || T.parentWindow : window,
                    C ? (I = a.relatedTarget || a.toElement,
                    C = O,
                    I = I ? on(I) : null,
                    I !== null && (ye = h(I),
                    P = I.tag,
                    I !== ye || P !== 5 && P !== 27 && P !== 6) && (I = null)) : (C = null,
                    I = O),
                    C !== I)) {
                        if (P = Mu,
                        M = "onMouseLeave",
                        A = "onMouseEnter",
                        x = "mouse",
                        (e === "pointerout" || e === "pointerover") && (P = Du,
                        M = "onPointerLeave",
                        A = "onPointerEnter",
                        x = "pointer"),
                        ye = C == null ? T : nl(C),
                        N = I == null ? T : nl(I),
                        T = new P(M,x + "leave",C,a,j),
                        T.target = ye,
                        T.relatedTarget = N,
                        M = null,
                        on(j) === O && (P = new P(A,x + "enter",I,a,j),
                        P.target = N,
                        P.relatedTarget = ye,
                        M = P),
                        ye = M,
                        C && I)
                            t: {
                                for (P = C,
                                A = I,
                                x = 0,
                                N = P; N; N = Kn(N))
                                    x++;
                                for (N = 0,
                                M = A; M; M = Kn(M))
                                    N++;
                                for (; 0 < x - N; )
                                    P = Kn(P),
                                    x--;
                                for (; 0 < N - x; )
                                    A = Kn(A),
                                    N--;
                                for (; x--; ) {
                                    if (P === A || A !== null && P === A.alternate)
                                        break t;
                                    P = Kn(P),
                                    A = Kn(A)
                                }
                                P = null
                            }
                        else
                            P = null;
                        C !== null && Nm(z, T, C, P, !1),
                        I !== null && ye !== null && Nm(z, ye, I, P, !0)
                    }
                }
                e: {
                    if (T = O ? nl(O) : window,
                    C = T.nodeName && T.nodeName.toLowerCase(),
                    C === "select" || C === "input" && T.type === "file")
                        var G = Gu;
                    else if (Bu(T))
                        if (Yu)
                            G = a0;
                        else {
                            G = e0;
                            var ie = Ip
                        }
                    else
                        C = T.nodeName,
                        !C || C.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? O && $s(O.elementType) && (G = Gu) : G = t0;
                    if (G && (G = G(e, O))) {
                        ku(z, G, a, j);
                        break e
                    }
                    ie && ie(e, T, O),
                    e === "focusout" && O && T.type === "number" && O.memoizedProps.value != null && Js(T, "number", T.value)
                }
                switch (ie = O ? nl(O) : window,
                e) {
                case "focusin":
                    (Bu(ie) || ie.contentEditable === "true") && (bn = ie,
                    dr = O,
                    dl = null);
                    break;
                case "focusout":
                    dl = dr = bn = null;
                    break;
                case "mousedown":
                    mr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mr = !1,
                    Wu(z, a, j);
                    break;
                case "selectionchange":
                    if (l0)
                        break;
                case "keydown":
                case "keyup":
                    Wu(z, a, j)
                }
                var K;
                if (cr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var W = "onCompositionStart";
                            break e;
                        case "compositionend":
                            W = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            W = "onCompositionUpdate";
                            break e
                        }
                        W = void 0
                    }
                else
                    yn ? qu(e, a) && (W = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (W = "onCompositionStart");
                W && (_u && a.locale !== "ko" && (yn || W !== "onCompositionStart" ? W === "onCompositionEnd" && yn && (K = wu()) : (ra = j,
                nr = "value"in ra ? ra.value : ra.textContent,
                yn = !0)),
                ie = cs(O, W),
                0 < ie.length && (W = new zu(W,e,null,a,j),
                z.push({
                    event: W,
                    listeners: ie
                }),
                K ? W.data = K : (K = Hu(a),
                K !== null && (W.data = K)))),
                (K = Pp ? Fp(e, a) : Wp(e, a)) && (W = cs(O, "onBeforeInput"),
                0 < W.length && (ie = new zu("onBeforeInput","beforeinput",null,a,j),
                z.push({
                    event: ie,
                    listeners: W
                }),
                ie.data = K)),
                k0(z, e, O, a, j)
            }
            Sm(z, t)
        })
    }
    function kl(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function cs(e, t) {
        for (var a = t + "Capture", n = []; e !== null; ) {
            var l = e
              , s = l.stateNode;
            if (l = l.tag,
            l !== 5 && l !== 26 && l !== 27 || s === null || (l = ll(e, a),
            l != null && n.unshift(kl(e, l, s)),
            l = ll(e, t),
            l != null && n.push(kl(e, l, s))),
            e.tag === 3)
                return n;
            e = e.return
        }
        return []
    }
    function Kn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Nm(e, t, a, n, l) {
        for (var s = t._reactName, u = []; a !== null && a !== n; ) {
            var m = a
              , v = m.alternate
              , O = m.stateNode;
            if (m = m.tag,
            v !== null && v === n)
                break;
            m !== 5 && m !== 26 && m !== 27 || O === null || (v = O,
            l ? (O = ll(a, s),
            O != null && u.unshift(kl(a, O, v))) : l || (O = ll(a, s),
            O != null && u.push(kl(a, O, v)))),
            a = a.return
        }
        u.length !== 0 && e.push({
            event: t,
            listeners: u
        })
    }
    var V0 = /\r\n?/g
      , X0 = /\u0000|\uFFFD/g;
    function Om(e) {
        return (typeof e == "string" ? e : "" + e).replace(V0, `
`).replace(X0, "")
    }
    function Em(e, t) {
        return t = Om(t),
        Om(e) === t
    }
    function os() {}
    function ve(e, t, a, n, l, s) {
        switch (a) {
        case "children":
            typeof n == "string" ? t === "body" || t === "textarea" && n === "" || gn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && gn(e, "" + n);
            break;
        case "className":
            hi(e, "class", n);
            break;
        case "tabIndex":
            hi(e, "tabindex", n);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            hi(e, a, n);
            break;
        case "style":
            Tu(e, n, s);
            break;
        case "data":
            if (t !== "object") {
                hi(e, "data", n);
                break
            }
        case "src":
        case "href":
            if (n === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break
            }
            n = vi("" + n),
            e.setAttribute(a, n);
            break;
        case "action":
        case "formAction":
            if (typeof n == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof s == "function" && (a === "formAction" ? (t !== "input" && ve(e, t, "name", l.name, l, null),
                ve(e, t, "formEncType", l.formEncType, l, null),
                ve(e, t, "formMethod", l.formMethod, l, null),
                ve(e, t, "formTarget", l.formTarget, l, null)) : (ve(e, t, "encType", l.encType, l, null),
                ve(e, t, "method", l.method, l, null),
                ve(e, t, "target", l.target, l, null)));
            if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break
            }
            n = vi("" + n),
            e.setAttribute(a, n);
            break;
        case "onClick":
            n != null && (e.onclick = os);
            break;
        case "onScroll":
            n != null && re("scroll", e);
            break;
        case "onScrollEnd":
            n != null && re("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(c(61));
                if (a = n.__html,
                a != null) {
                    if (l.children != null)
                        throw Error(c(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "muted":
            e.muted = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = vi("" + n),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "" + n) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            n === !0 ? e.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(a) : e.setAttribute(a, n);
            break;
        case "popover":
            re("beforetoggle", e),
            re("toggle", e),
            mi(e, "popover", n);
            break;
        case "xlinkActuate":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
            break;
        case "xlinkArcrole":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
            break;
        case "xlinkRole":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
            break;
        case "xlinkShow":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
            break;
        case "xlinkTitle":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
            break;
        case "xlinkType":
            Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
            break;
        case "xmlBase":
            Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
            break;
        case "xmlLang":
            Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
            break;
        case "xmlSpace":
            Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
            break;
        case "is":
            mi(e, "is", n);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Sp.get(a) || a,
            mi(e, a, n))
        }
    }
    function Lc(e, t, a, n, l, s) {
        switch (a) {
        case "style":
            Tu(e, n, s);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(c(61));
                if (a = n.__html,
                a != null) {
                    if (l.children != null)
                        throw Error(c(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof n == "string" ? gn(e, n) : (typeof n == "number" || typeof n == "bigint") && gn(e, "" + n);
            break;
        case "onScroll":
            n != null && re("scroll", e);
            break;
        case "onScrollEnd":
            n != null && re("scrollend", e);
            break;
        case "onClick":
            n != null && (e.onclick = os);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!gu.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"),
                    t = a.slice(2, l ? a.length - 7 : void 0),
                    s = e[Ie] || null,
                    s = s != null ? s[a] : null,
                    typeof s == "function" && e.removeEventListener(t, s, l),
                    typeof n == "function")) {
                        typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, n, l);
                        break e
                    }
                    a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : mi(e, a, n)
                }
        }
    }
    function Ke(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            re("error", e),
            re("load", e);
            var n = !1, l = !1, s;
            for (s in a)
                if (a.hasOwnProperty(s)) {
                    var u = a[s];
                    if (u != null)
                        switch (s) {
                        case "src":
                            n = !0;
                            break;
                        case "srcSet":
                            l = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, t));
                        default:
                            ve(e, t, s, u, a, null)
                        }
                }
            l && ve(e, t, "srcSet", a.srcSet, a, null),
            n && ve(e, t, "src", a.src, a, null);
            return;
        case "input":
            re("invalid", e);
            var m = s = u = l = null
              , v = null
              , O = null;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var j = a[n];
                    if (j != null)
                        switch (n) {
                        case "name":
                            l = j;
                            break;
                        case "type":
                            u = j;
                            break;
                        case "checked":
                            v = j;
                            break;
                        case "defaultChecked":
                            O = j;
                            break;
                        case "value":
                            s = j;
                            break;
                        case "defaultValue":
                            m = j;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null)
                                throw Error(c(137, t));
                            break;
                        default:
                            ve(e, t, n, j, a, null)
                        }
                }
            Au(e, s, m, v, O, u, l, !1),
            gi(e);
            return;
        case "select":
            re("invalid", e),
            n = u = s = null;
            for (l in a)
                if (a.hasOwnProperty(l) && (m = a[l],
                m != null))
                    switch (l) {
                    case "value":
                        s = m;
                        break;
                    case "defaultValue":
                        u = m;
                        break;
                    case "multiple":
                        n = m;
                    default:
                        ve(e, t, l, m, a, null)
                    }
            t = s,
            a = u,
            e.multiple = !!n,
            t != null ? hn(e, !!n, t, !1) : a != null && hn(e, !!n, a, !0);
            return;
        case "textarea":
            re("invalid", e),
            s = l = n = null;
            for (u in a)
                if (a.hasOwnProperty(u) && (m = a[u],
                m != null))
                    switch (u) {
                    case "value":
                        n = m;
                        break;
                    case "defaultValue":
                        l = m;
                        break;
                    case "children":
                        s = m;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (m != null)
                            throw Error(c(91));
                        break;
                    default:
                        ve(e, t, u, m, a, null)
                    }
            Ou(e, n, l, s),
            gi(e);
            return;
        case "option":
            for (v in a)
                if (a.hasOwnProperty(v) && (n = a[v],
                n != null))
                    switch (v) {
                    case "selected":
                        e.selected = n && typeof n != "function" && typeof n != "symbol";
                        break;
                    default:
                        ve(e, t, v, n, a, null)
                    }
            return;
        case "dialog":
            re("beforetoggle", e),
            re("toggle", e),
            re("cancel", e),
            re("close", e);
            break;
        case "iframe":
        case "object":
            re("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Bl.length; n++)
                re(Bl[n], e);
            break;
        case "image":
            re("error", e),
            re("load", e);
            break;
        case "details":
            re("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            re("error", e),
            re("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (O in a)
                if (a.hasOwnProperty(O) && (n = a[O],
                n != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(c(137, t));
                    default:
                        ve(e, t, O, n, a, null)
                    }
            return;
        default:
            if ($s(t)) {
                for (j in a)
                    a.hasOwnProperty(j) && (n = a[j],
                    n !== void 0 && Lc(e, t, j, n, a, void 0));
                return
            }
        }
        for (m in a)
            a.hasOwnProperty(m) && (n = a[m],
            n != null && ve(e, t, m, n, a, null))
    }
    function Q0(e, t, a, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var l = null
              , s = null
              , u = null
              , m = null
              , v = null
              , O = null
              , j = null;
            for (C in a) {
                var z = a[C];
                if (a.hasOwnProperty(C) && z != null)
                    switch (C) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        v = z;
                    default:
                        n.hasOwnProperty(C) || ve(e, t, C, null, n, z)
                    }
            }
            for (var T in n) {
                var C = n[T];
                if (z = a[T],
                n.hasOwnProperty(T) && (C != null || z != null))
                    switch (T) {
                    case "type":
                        s = C;
                        break;
                    case "name":
                        l = C;
                        break;
                    case "checked":
                        O = C;
                        break;
                    case "defaultChecked":
                        j = C;
                        break;
                    case "value":
                        u = C;
                        break;
                    case "defaultValue":
                        m = C;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (C != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        C !== z && ve(e, t, T, C, n, z)
                    }
            }
            Ws(e, u, m, v, O, j, s, l);
            return;
        case "select":
            C = u = m = T = null;
            for (s in a)
                if (v = a[s],
                a.hasOwnProperty(s) && v != null)
                    switch (s) {
                    case "value":
                        break;
                    case "multiple":
                        C = v;
                    default:
                        n.hasOwnProperty(s) || ve(e, t, s, null, n, v)
                    }
            for (l in n)
                if (s = n[l],
                v = a[l],
                n.hasOwnProperty(l) && (s != null || v != null))
                    switch (l) {
                    case "value":
                        T = s;
                        break;
                    case "defaultValue":
                        m = s;
                        break;
                    case "multiple":
                        u = s;
                    default:
                        s !== v && ve(e, t, l, s, n, v)
                    }
            t = m,
            a = u,
            n = C,
            T != null ? hn(e, !!a, T, !1) : !!n != !!a && (t != null ? hn(e, !!a, t, !0) : hn(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            C = T = null;
            for (m in a)
                if (l = a[m],
                a.hasOwnProperty(m) && l != null && !n.hasOwnProperty(m))
                    switch (m) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ve(e, t, m, null, n, l)
                    }
            for (u in n)
                if (l = n[u],
                s = a[u],
                n.hasOwnProperty(u) && (l != null || s != null))
                    switch (u) {
                    case "value":
                        T = l;
                        break;
                    case "defaultValue":
                        C = l;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (l != null)
                            throw Error(c(91));
                        break;
                    default:
                        l !== s && ve(e, t, u, l, n, s)
                    }
            Nu(e, T, C);
            return;
        case "option":
            for (var I in a)
                if (T = a[I],
                a.hasOwnProperty(I) && T != null && !n.hasOwnProperty(I))
                    switch (I) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        ve(e, t, I, null, n, T)
                    }
            for (v in n)
                if (T = n[v],
                C = a[v],
                n.hasOwnProperty(v) && T !== C && (T != null || C != null))
                    switch (v) {
                    case "selected":
                        e.selected = T && typeof T != "function" && typeof T != "symbol";
                        break;
                    default:
                        ve(e, t, v, T, n, C)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var P in a)
                T = a[P],
                a.hasOwnProperty(P) && T != null && !n.hasOwnProperty(P) && ve(e, t, P, null, n, T);
            for (O in n)
                if (T = n[O],
                C = a[O],
                n.hasOwnProperty(O) && T !== C && (T != null || C != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (T != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        ve(e, t, O, T, n, C)
                    }
            return;
        default:
            if ($s(t)) {
                for (var ye in a)
                    T = a[ye],
                    a.hasOwnProperty(ye) && T !== void 0 && !n.hasOwnProperty(ye) && Lc(e, t, ye, void 0, n, T);
                for (j in n)
                    T = n[j],
                    C = a[j],
                    !n.hasOwnProperty(j) || T === C || T === void 0 && C === void 0 || Lc(e, t, j, T, n, C);
                return
            }
        }
        for (var A in a)
            T = a[A],
            a.hasOwnProperty(A) && T != null && !n.hasOwnProperty(A) && ve(e, t, A, null, n, T);
        for (z in n)
            T = n[z],
            C = a[z],
            !n.hasOwnProperty(z) || T === C || T == null && C == null || ve(e, t, z, T, n, C)
    }
    var qc = null
      , Hc = null;
    function us(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Tm(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Cm(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Bc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var kc = null;
    function Z0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === kc ? !1 : (kc = e,
        !0) : (kc = null,
        !1)
    }
    var jm = typeof setTimeout == "function" ? setTimeout : void 0
      , P0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , wm = typeof Promise == "function" ? Promise : void 0
      , F0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wm < "u" ? function(e) {
        return wm.resolve(null).then(e).catch(W0)
    }
    : jm;
    function W0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Na(e) {
        return e === "head"
    }
    function Rm(e, t) {
        var a = t
          , n = 0
          , l = 0;
        do {
            var s = a.nextSibling;
            if (e.removeChild(a),
            s && s.nodeType === 8)
                if (a = s.data,
                a === "/$") {
                    if (0 < n && 8 > n) {
                        a = n;
                        var u = e.ownerDocument;
                        if (a & 1 && Gl(u.documentElement),
                        a & 2 && Gl(u.body),
                        a & 4)
                            for (a = u.head,
                            Gl(a),
                            u = a.firstChild; u; ) {
                                var m = u.nextSibling
                                  , v = u.nodeName;
                                u[al] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u),
                                u = m
                            }
                    }
                    if (l === 0) {
                        e.removeChild(s),
                        Fl(t);
                        return
                    }
                    l--
                } else
                    a === "$" || a === "$?" || a === "$!" ? l++ : n = a.charCodeAt(0) - 48;
            else
                n = 0;
            a = s
        } while (a);
        Fl(t)
    }
    function Gc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Gc(a),
                Qs(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function J0(e, t, a, n) {
        for (; e.nodeType === 1; ) {
            var l = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (n) {
                if (!e[al])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (s = e.getAttribute("rel"),
                        s === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (s !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (s = e.getAttribute("src"),
                        (s !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var s = l.name == null ? null : "" + l.name;
                if (l.type === "hidden" && e.getAttribute("name") === s)
                    return e
            } else
                return e;
            if (e = Tt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function $0(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Tt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Yc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function I0(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var n = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", n)
            };
            a.addEventListener("DOMContentLoaded", n),
            e._reactRetry = n
        }
    }
    function Tt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var Kc = null;
    function Mm(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function zm(e, t, a) {
        switch (t = us(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(c(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(c(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(c(454));
            return e;
        default:
            throw Error(c(451))
        }
    }
    function Gl(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Qs(e)
    }
    var Nt = new Map
      , Dm = new Set;
    function fs(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var $t = B.d;
    B.d = {
        f: e1,
        r: t1,
        D: a1,
        C: n1,
        L: l1,
        m: i1,
        X: r1,
        S: s1,
        M: c1
    };
    function e1() {
        var e = $t.f()
          , t = as();
        return e || t
    }
    function t1(e) {
        var t = un(e);
        t !== null && t.tag === 5 && t.type === "form" ? If(t) : $t.r(e)
    }
    var Vn = typeof document > "u" ? null : document;
    function _m(e, t, a) {
        var n = Vn;
        if (n && typeof t == "string" && t) {
            var l = pt(t);
            l = 'link[rel="' + e + '"][href="' + l + '"]',
            typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
            Dm.has(l) || (Dm.add(l),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            n.querySelector(l) === null && (t = n.createElement("link"),
            Ke(t, "link", e),
            Le(t),
            n.head.appendChild(t)))
        }
    }
    function a1(e) {
        $t.D(e),
        _m("dns-prefetch", e, null)
    }
    function n1(e, t) {
        $t.C(e, t),
        _m("preconnect", e, t)
    }
    function l1(e, t, a) {
        $t.L(e, t, a);
        var n = Vn;
        if (n && e && t) {
            var l = 'link[rel="preload"][as="' + pt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + pt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (l += '[imagesizes="' + pt(a.imageSizes) + '"]')) : l += '[href="' + pt(e) + '"]';
            var s = l;
            switch (t) {
            case "style":
                s = Xn(e);
                break;
            case "script":
                s = Qn(e)
            }
            Nt.has(s) || (e = E({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            Nt.set(s, e),
            n.querySelector(l) !== null || t === "style" && n.querySelector(Yl(s)) || t === "script" && n.querySelector(Kl(s)) || (t = n.createElement("link"),
            Ke(t, "link", e),
            Le(t),
            n.head.appendChild(t)))
        }
    }
    function i1(e, t) {
        $t.m(e, t);
        var a = Vn;
        if (a && e) {
            var n = t && typeof t.as == "string" ? t.as : "script"
              , l = 'link[rel="modulepreload"][as="' + pt(n) + '"][href="' + pt(e) + '"]'
              , s = l;
            switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                s = Qn(e)
            }
            if (!Nt.has(s) && (e = E({
                rel: "modulepreload",
                href: e
            }, t),
            Nt.set(s, e),
            a.querySelector(l) === null)) {
                switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Kl(s)))
                        return
                }
                n = a.createElement("link"),
                Ke(n, "link", e),
                Le(n),
                a.head.appendChild(n)
            }
        }
    }
    function s1(e, t, a) {
        $t.S(e, t, a);
        var n = Vn;
        if (n && e) {
            var l = fn(n).hoistableStyles
              , s = Xn(e);
            t = t || "default";
            var u = l.get(s);
            if (!u) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (u = n.querySelector(Yl(s)))
                    m.loading = 5;
                else {
                    e = E({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = Nt.get(s)) && Vc(e, a);
                    var v = u = n.createElement("link");
                    Le(v),
                    Ke(v, "link", e),
                    v._p = new Promise(function(O, j) {
                        v.onload = O,
                        v.onerror = j
                    }
                    ),
                    v.addEventListener("load", function() {
                        m.loading |= 1
                    }),
                    v.addEventListener("error", function() {
                        m.loading |= 2
                    }),
                    m.loading |= 4,
                    ds(u, t, n)
                }
                u = {
                    type: "stylesheet",
                    instance: u,
                    count: 1,
                    state: m
                },
                l.set(s, u)
            }
        }
    }
    function r1(e, t) {
        $t.X(e, t);
        var a = Vn;
        if (a && e) {
            var n = fn(a).hoistableScripts
              , l = Qn(e)
              , s = n.get(l);
            s || (s = a.querySelector(Kl(l)),
            s || (e = E({
                src: e,
                async: !0
            }, t),
            (t = Nt.get(l)) && Xc(e, t),
            s = a.createElement("script"),
            Le(s),
            Ke(s, "link", e),
            a.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            n.set(l, s))
        }
    }
    function c1(e, t) {
        $t.M(e, t);
        var a = Vn;
        if (a && e) {
            var n = fn(a).hoistableScripts
              , l = Qn(e)
              , s = n.get(l);
            s || (s = a.querySelector(Kl(l)),
            s || (e = E({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Nt.get(l)) && Xc(e, t),
            s = a.createElement("script"),
            Le(s),
            Ke(s, "link", e),
            a.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            n.set(l, s))
        }
    }
    function Um(e, t, a, n) {
        var l = (l = ae.current) ? fs(l) : null;
        if (!l)
            throw Error(c(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Xn(a.href),
            a = fn(l).hoistableStyles,
            n = a.get(t),
            n || (n = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Xn(a.href);
                var s = fn(l).hoistableStyles
                  , u = s.get(e);
                if (u || (l = l.ownerDocument || l,
                u = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                s.set(e, u),
                (s = l.querySelector(Yl(e))) && !s._p && (u.instance = s,
                u.state.loading = 5),
                Nt.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Nt.set(e, a),
                s || o1(l, e, a, u.state))),
                t && n === null)
                    throw Error(c(528, ""));
                return u
            }
            if (t && n !== null)
                throw Error(c(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Qn(a),
            a = fn(l).hoistableScripts,
            n = a.get(t),
            n || (n = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(c(444, e))
        }
    }
    function Xn(e) {
        return 'href="' + pt(e) + '"'
    }
    function Yl(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Lm(e) {
        return E({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function o1(e, t, a, n) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"),
        n.preload = t,
        t.addEventListener("load", function() {
            return n.loading |= 1
        }),
        t.addEventListener("error", function() {
            return n.loading |= 2
        }),
        Ke(t, "link", a),
        Le(t),
        e.head.appendChild(t))
    }
    function Qn(e) {
        return '[src="' + pt(e) + '"]'
    }
    function Kl(e) {
        return "script[async]" + e
    }
    function qm(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + pt(a.href) + '"]');
                if (n)
                    return t.instance = n,
                    Le(n),
                    n;
                var l = E({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return n = (e.ownerDocument || e).createElement("style"),
                Le(n),
                Ke(n, "style", l),
                ds(n, a.precedence, e),
                t.instance = n;
            case "stylesheet":
                l = Xn(a.href);
                var s = e.querySelector(Yl(l));
                if (s)
                    return t.state.loading |= 4,
                    t.instance = s,
                    Le(s),
                    s;
                n = Lm(a),
                (l = Nt.get(l)) && Vc(n, l),
                s = (e.ownerDocument || e).createElement("link"),
                Le(s);
                var u = s;
                return u._p = new Promise(function(m, v) {
                    u.onload = m,
                    u.onerror = v
                }
                ),
                Ke(s, "link", n),
                t.state.loading |= 4,
                ds(s, a.precedence, e),
                t.instance = s;
            case "script":
                return s = Qn(a.src),
                (l = e.querySelector(Kl(s))) ? (t.instance = l,
                Le(l),
                l) : (n = a,
                (l = Nt.get(s)) && (n = E({}, a),
                Xc(n, l)),
                e = e.ownerDocument || e,
                l = e.createElement("script"),
                Le(l),
                Ke(l, "link", n),
                e.head.appendChild(l),
                t.instance = l);
            case "void":
                return null;
            default:
                throw Error(c(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance,
            t.state.loading |= 4,
            ds(n, a.precedence, e));
        return t.instance
    }
    function ds(e, t, a) {
        for (var n = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = n.length ? n[n.length - 1] : null, s = l, u = 0; u < n.length; u++) {
            var m = n[u];
            if (m.dataset.precedence === t)
                s = m;
            else if (s !== l)
                break
        }
        s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function Vc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Xc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var ms = null;
    function Hm(e, t, a) {
        if (ms === null) {
            var n = new Map
              , l = ms = new Map;
            l.set(a, n)
        } else
            l = ms,
            n = l.get(a),
            n || (n = new Map,
            l.set(a, n));
        if (n.has(e))
            return n;
        for (n.set(e, null),
        a = a.getElementsByTagName(e),
        l = 0; l < a.length; l++) {
            var s = a[l];
            if (!(s[al] || s[Qe] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                var u = s.getAttribute(t) || "";
                u = e + u;
                var m = n.get(u);
                m ? m.push(s) : n.set(u, [s])
            }
        }
        return n
    }
    function Bm(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function u1(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function km(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Vl = null;
    function f1() {}
    function d1(e, t, a) {
        if (Vl === null)
            throw Error(c(475));
        var n = Vl;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var l = Xn(a.href)
                  , s = e.querySelector(Yl(l));
                if (s) {
                    e = s._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++,
                    n = hs.bind(n),
                    e.then(n, n)),
                    t.state.loading |= 4,
                    t.instance = s,
                    Le(s);
                    return
                }
                s = e.ownerDocument || e,
                a = Lm(a),
                (l = Nt.get(l)) && Vc(a, l),
                s = s.createElement("link"),
                Le(s);
                var u = s;
                u._p = new Promise(function(m, v) {
                    u.onload = m,
                    u.onerror = v
                }
                ),
                Ke(s, "link", a),
                t.instance = s
            }
            n.stylesheets === null && (n.stylesheets = new Map),
            n.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++,
            t = hs.bind(n),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function m1() {
        if (Vl === null)
            throw Error(c(475));
        var e = Vl;
        return e.stylesheets && e.count === 0 && Qc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && Qc(e, e.stylesheets),
                e.unsuspend) {
                    var n = e.unsuspend;
                    e.unsuspend = null,
                    n()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function hs() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Qc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var gs = null;
    function Qc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        gs = new Map,
        t.forEach(h1, e),
        gs = null,
        hs.call(e))
    }
    function h1(e, t) {
        if (!(t.state.loading & 4)) {
            var a = gs.get(e);
            if (a)
                var n = a.get(null);
            else {
                a = new Map,
                gs.set(e, a);
                for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < l.length; s++) {
                    var u = l[s];
                    (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u),
                    n = u)
                }
                n && a.set(null, n)
            }
            l = t.instance,
            u = l.getAttribute("data-precedence"),
            s = a.get(u) || n,
            s === n && a.set(null, l),
            a.set(u, l),
            this.count++,
            n = hs.bind(this),
            l.addEventListener("load", n),
            l.addEventListener("error", n),
            s ? s.parentNode.insertBefore(l, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(l, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Xl = {
        $$typeof: X,
        Provider: null,
        Consumer: null,
        _currentValue: J,
        _currentValue2: J,
        _threadCount: 0
    };
    function g1(e, t, a, n, l, s, u, m) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Ys(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ys(0),
        this.hiddenUpdates = Ys(null),
        this.identifierPrefix = n,
        this.onUncaughtError = l,
        this.onCaughtError = s,
        this.onRecoverableError = u,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = m,
        this.incompleteTransitions = new Map
    }
    function Gm(e, t, a, n, l, s, u, m, v, O, j, z) {
        return e = new g1(e,t,a,u,m,v,O,z),
        t = 1,
        s === !0 && (t |= 24),
        s = ct(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        t = Cr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        s.memoizedState = {
            element: n,
            isDehydrated: a,
            cache: t
        },
        Mr(s),
        e
    }
    function Ym(e) {
        return e ? (e = Nn,
        e) : Nn
    }
    function Km(e, t, a, n, l, s) {
        l = Ym(l),
        n.context === null ? n.context = l : n.pendingContext = l,
        n = ua(t),
        n.payload = {
            element: a
        },
        s = s === void 0 ? null : s,
        s !== null && (n.callback = s),
        a = fa(e, n, t),
        a !== null && (mt(a, e, t),
        Sl(a, e, t))
    }
    function Vm(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function Zc(e, t) {
        Vm(e, t),
        (e = e.alternate) && Vm(e, t)
    }
    function Xm(e) {
        if (e.tag === 13) {
            var t = An(e, 67108864);
            t !== null && mt(t, e, 67108864),
            Zc(e, 67108864)
        }
    }
    var ps = !0;
    function p1(e, t, a, n) {
        var l = w.T;
        w.T = null;
        var s = B.p;
        try {
            B.p = 2,
            Pc(e, t, a, n)
        } finally {
            B.p = s,
            w.T = l
        }
    }
    function v1(e, t, a, n) {
        var l = w.T;
        w.T = null;
        var s = B.p;
        try {
            B.p = 8,
            Pc(e, t, a, n)
        } finally {
            B.p = s,
            w.T = l
        }
    }
    function Pc(e, t, a, n) {
        if (ps) {
            var l = Fc(n);
            if (l === null)
                Uc(e, t, n, vs, a),
                Zm(e, n);
            else if (b1(l, e, t, a, n))
                n.stopPropagation();
            else if (Zm(e, n),
            t & 4 && -1 < y1.indexOf(e)) {
                for (; l !== null; ) {
                    var s = un(l);
                    if (s !== null)
                        switch (s.tag) {
                        case 3:
                            if (s = s.stateNode,
                            s.current.memoizedState.isDehydrated) {
                                var u = Ha(s.pendingLanes);
                                if (u !== 0) {
                                    var m = s;
                                    for (m.pendingLanes |= 2,
                                    m.entangledLanes |= 2; u; ) {
                                        var v = 1 << 31 - st(u);
                                        m.entanglements[1] |= v,
                                        u &= ~v
                                    }
                                    Dt(s),
                                    (he & 6) === 0 && (es = jt() + 500,
                                    Hl(0))
                                }
                            }
                            break;
                        case 13:
                            m = An(s, 2),
                            m !== null && mt(m, s, 2),
                            as(),
                            Zc(s, 2)
                        }
                    if (s = Fc(n),
                    s === null && Uc(e, t, n, vs, a),
                    s === l)
                        break;
                    l = s
                }
                l !== null && n.stopPropagation()
            } else
                Uc(e, t, n, null, a)
        }
    }
    function Fc(e) {
        return e = er(e),
        Wc(e)
    }
    var vs = null;
    function Wc(e) {
        if (vs = null,
        e = on(e),
        e !== null) {
            var t = h(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = p(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return vs = e,
        null
    }
    function Qm(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (np()) {
            case iu:
                return 2;
            case su:
                return 8;
            case oi:
            case lp:
                return 32;
            case ru:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Jc = !1
      , Oa = null
      , Ea = null
      , Ta = null
      , Ql = new Map
      , Zl = new Map
      , Ca = []
      , y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Zm(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Oa = null;
            break;
        case "dragenter":
        case "dragleave":
            Ea = null;
            break;
        case "mouseover":
        case "mouseout":
            Ta = null;
            break;
        case "pointerover":
        case "pointerout":
            Ql.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Zl.delete(t.pointerId)
        }
    }
    function Pl(e, t, a, n, l, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: n,
            nativeEvent: s,
            targetContainers: [l]
        },
        t !== null && (t = un(t),
        t !== null && Xm(t)),
        e) : (e.eventSystemFlags |= n,
        t = e.targetContainers,
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
    }
    function b1(e, t, a, n, l) {
        switch (t) {
        case "focusin":
            return Oa = Pl(Oa, e, t, a, n, l),
            !0;
        case "dragenter":
            return Ea = Pl(Ea, e, t, a, n, l),
            !0;
        case "mouseover":
            return Ta = Pl(Ta, e, t, a, n, l),
            !0;
        case "pointerover":
            var s = l.pointerId;
            return Ql.set(s, Pl(Ql.get(s) || null, e, t, a, n, l)),
            !0;
        case "gotpointercapture":
            return s = l.pointerId,
            Zl.set(s, Pl(Zl.get(s) || null, e, t, a, n, l)),
            !0
        }
        return !1
    }
    function Pm(e) {
        var t = on(e.target);
        if (t !== null) {
            var a = h(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = p(a),
                    t !== null) {
                        e.blockedOn = t,
                        dp(e.priority, function() {
                            if (a.tag === 13) {
                                var n = dt();
                                n = Ks(n);
                                var l = An(a, n);
                                l !== null && mt(l, a, n),
                                Zc(a, n)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function ys(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = Fc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var n = new a.constructor(a.type,a);
                Is = n,
                a.target.dispatchEvent(n),
                Is = null
            } else
                return t = un(a),
                t !== null && Xm(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function Fm(e, t, a) {
        ys(e) && a.delete(t)
    }
    function x1() {
        Jc = !1,
        Oa !== null && ys(Oa) && (Oa = null),
        Ea !== null && ys(Ea) && (Ea = null),
        Ta !== null && ys(Ta) && (Ta = null),
        Ql.forEach(Fm),
        Zl.forEach(Fm)
    }
    function bs(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Jc || (Jc = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, x1)))
    }
    var xs = null;
    function Wm(e) {
        xs !== e && (xs = e,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            xs === e && (xs = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , n = e[t + 1]
                  , l = e[t + 2];
                if (typeof n != "function") {
                    if (Wc(n || a) === null)
                        continue;
                    break
                }
                var s = un(a);
                s !== null && (e.splice(t, 3),
                t -= 3,
                Wr(s, {
                    pending: !0,
                    data: l,
                    method: a.method,
                    action: n
                }, n, l))
            }
        }))
    }
    function Fl(e) {
        function t(v) {
            return bs(v, e)
        }
        Oa !== null && bs(Oa, e),
        Ea !== null && bs(Ea, e),
        Ta !== null && bs(Ta, e),
        Ql.forEach(t),
        Zl.forEach(t);
        for (var a = 0; a < Ca.length; a++) {
            var n = Ca[a];
            n.blockedOn === e && (n.blockedOn = null)
        }
        for (; 0 < Ca.length && (a = Ca[0],
        a.blockedOn === null); )
            Pm(a),
            a.blockedOn === null && Ca.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (n = 0; n < a.length; n += 3) {
                var l = a[n]
                  , s = a[n + 1]
                  , u = l[Ie] || null;
                if (typeof s == "function")
                    u || Wm(a);
                else if (u) {
                    var m = null;
                    if (s && s.hasAttribute("formAction")) {
                        if (l = s,
                        u = s[Ie] || null)
                            m = u.formAction;
                        else if (Wc(l) !== null)
                            continue
                    } else
                        m = u.action;
                    typeof m == "function" ? a[n + 1] = m : (a.splice(n, 3),
                    n -= 3),
                    Wm(a)
                }
            }
    }
    function $c(e) {
        this._internalRoot = e
    }
    Ss.prototype.render = $c.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(c(409));
        var a = t.current
          , n = dt();
        Km(a, n, e, t, null, null)
    }
    ,
    Ss.prototype.unmount = $c.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Km(e.current, 2, null, e, null, null),
            as(),
            t[cn] = null
        }
    }
    ;
    function Ss(e) {
        this._internalRoot = e
    }
    Ss.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = du();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Ca.length && t !== 0 && t < Ca[a].priority; a++)
                ;
            Ca.splice(a, 0, e),
            a === 0 && Pm(e)
        }
    }
    ;
    var Jm = r.version;
    if (Jm !== "19.1.0")
        throw Error(c(527, Jm, "19.1.0"));
    B.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","),
            Error(c(268, e)));
        return e = b(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var S1 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: w,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!As.isDisabled && As.supportsFiber)
            try {
                In = As.inject(S1),
                it = As
            } catch {}
    }
    return Jl.createRoot = function(e, t) {
        if (!f(e))
            throw Error(c(299));
        var a = !1
          , n = ""
          , l = md
          , s = hd
          , u = gd
          , m = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
        t.onCaughtError !== void 0 && (s = t.onCaughtError),
        t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)),
        t = Gm(e, 1, !1, null, null, a, n, l, s, u, m, null),
        e[cn] = t.current,
        _c(e),
        new $c(t)
    }
    ,
    Jl.hydrateRoot = function(e, t, a) {
        if (!f(e))
            throw Error(c(299));
        var n = !1
          , l = ""
          , s = md
          , u = hd
          , m = gd
          , v = null
          , O = null;
        return a != null && (a.unstable_strictMode === !0 && (n = !0),
        a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
        a.onCaughtError !== void 0 && (u = a.onCaughtError),
        a.onRecoverableError !== void 0 && (m = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (O = a.formState)),
        t = Gm(e, 1, !0, t, a ?? null, n, l, s, u, m, v, O),
        t.context = Ym(null),
        a = t.current,
        n = dt(),
        n = Ks(n),
        l = ua(n),
        l.callback = null,
        fa(a, l, n),
        a = n,
        t.current.lanes = a,
        tl(t, a),
        Dt(t),
        e[cn] = t.current,
        _c(e),
        new Ss(t)
    }
    ,
    Jl.version = "19.1.0",
    Jl
}
var rh;
function z1() {
    if (rh)
        return to.exports;
    rh = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (r) {
                console.error(r)
            }
    }
    return i(),
    to.exports = M1(),
    to.exports
}
var D1 = z1();
Wh();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ti() {
    return ti = Object.assign ? Object.assign.bind() : function(i) {
        for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var c in o)
                Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c])
        }
        return i
    }
    ,
    ti.apply(this, arguments)
}
var Ma;
(function(i) {
    i.Pop = "POP",
    i.Push = "PUSH",
    i.Replace = "REPLACE"
}
)(Ma || (Ma = {}));
const ch = "popstate";
function _1(i) {
    i === void 0 && (i = {});
    function r(c, f) {
        let {pathname: h, search: p, hash: S} = c.location;
        return po("", {
            pathname: h,
            search: p,
            hash: S
        }, f.state && f.state.usr || null, f.state && f.state.key || "default")
    }
    function o(c, f) {
        return typeof f == "string" ? f : Cs(f)
    }
    return L1(r, o, null, i)
}
function De(i, r) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(r)
}
function Jh(i, r) {
    if (!i) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r)
        } catch {}
    }
}
function U1() {
    return Math.random().toString(36).substr(2, 8)
}
function oh(i, r) {
    return {
        usr: i.state,
        key: i.key,
        idx: r
    }
}
function po(i, r, o, c) {
    return o === void 0 && (o = null),
    ti({
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: ""
    }, typeof r == "string" ? Jn(r) : r, {
        state: o,
        key: r && r.key || c || U1()
    })
}
function Cs(i) {
    let {pathname: r="/", search: o="", hash: c=""} = i;
    return o && o !== "?" && (r += o.charAt(0) === "?" ? o : "?" + o),
    c && c !== "#" && (r += c.charAt(0) === "#" ? c : "#" + c),
    r
}
function Jn(i) {
    let r = {};
    if (i) {
        let o = i.indexOf("#");
        o >= 0 && (r.hash = i.substr(o),
        i = i.substr(0, o));
        let c = i.indexOf("?");
        c >= 0 && (r.search = i.substr(c),
        i = i.substr(0, c)),
        i && (r.pathname = i)
    }
    return r
}
function L1(i, r, o, c) {
    c === void 0 && (c = {});
    let {window: f=document.defaultView, v5Compat: h=!1} = c
      , p = f.history
      , S = Ma.Pop
      , b = null
      , g = E();
    g == null && (g = 0,
    p.replaceState(ti({}, p.state, {
        idx: g
    }), ""));
    function E() {
        return (p.state || {
            idx: null
        }).idx
    }
    function R() {
        S = Ma.Pop;
        let L = E()
          , ee = L == null ? null : L - g;
        g = L,
        b && b({
            action: S,
            location: $.location,
            delta: ee
        })
    }
    function _(L, ee) {
        S = Ma.Push;
        let te = po($.location, L, ee);
        g = E() + 1;
        let X = oh(te, g)
          , de = $.createHref(te);
        try {
            p.pushState(X, "", de)
        } catch (Q) {
            if (Q instanceof DOMException && Q.name === "DataCloneError")
                throw Q;
            f.location.assign(de)
        }
        h && b && b({
            action: S,
            location: $.location,
            delta: 1
        })
    }
    function V(L, ee) {
        S = Ma.Replace;
        let te = po($.location, L, ee);
        g = E();
        let X = oh(te, g)
          , de = $.createHref(te);
        p.replaceState(X, "", de),
        h && b && b({
            action: S,
            location: $.location,
            delta: 0
        })
    }
    function F(L) {
        let ee = f.location.origin !== "null" ? f.location.origin : f.location.href
          , te = typeof L == "string" ? L : Cs(L);
        return te = te.replace(/ $/, "%20"),
        De(ee, "No window.location.(origin|href) available to create URL for href: " + te),
        new URL(te,ee)
    }
    let $ = {
        get action() {
            return S
        },
        get location() {
            return i(f, p)
        },
        listen(L) {
            if (b)
                throw new Error("A history only accepts one active listener");
            return f.addEventListener(ch, R),
            b = L,
            () => {
                f.removeEventListener(ch, R),
                b = null
            }
        },
        createHref(L) {
            return r(f, L)
        },
        createURL: F,
        encodeLocation(L) {
            let ee = F(L);
            return {
                pathname: ee.pathname,
                search: ee.search,
                hash: ee.hash
            }
        },
        push: _,
        replace: V,
        go(L) {
            return p.go(L)
        }
    };
    return $
}
var uh;
(function(i) {
    i.data = "data",
    i.deferred = "deferred",
    i.redirect = "redirect",
    i.error = "error"
}
)(uh || (uh = {}));
function q1(i, r, o) {
    return o === void 0 && (o = "/"),
    H1(i, r, o)
}
function H1(i, r, o, c) {
    let f = typeof r == "string" ? Jn(r) : r
      , h = ko(f.pathname || "/", o);
    if (h == null)
        return null;
    let p = $h(i);
    B1(p);
    let S = null;
    for (let b = 0; S == null && b < p.length; ++b) {
        let g = J1(h);
        S = P1(p[b], g)
    }
    return S
}
function $h(i, r, o, c) {
    r === void 0 && (r = []),
    o === void 0 && (o = []),
    c === void 0 && (c = "");
    let f = (h, p, S) => {
        let b = {
            relativePath: S === void 0 ? h.path || "" : S,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: p,
            route: h
        };
        b.relativePath.startsWith("/") && (De(b.relativePath.startsWith(c), 'Absolute route path "' + b.relativePath + '" nested under path ' + ('"' + c + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        b.relativePath = b.relativePath.slice(c.length));
        let g = za([c, b.relativePath])
          , E = o.concat(b);
        h.children && h.children.length > 0 && (De(h.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        $h(h.children, r, E, g)),
        !(h.path == null && !h.index) && r.push({
            path: g,
            score: Q1(g, h.index),
            routesMeta: E
        })
    }
    ;
    return i.forEach( (h, p) => {
        var S;
        if (h.path === "" || !((S = h.path) != null && S.includes("?")))
            f(h, p);
        else
            for (let b of Ih(h.path))
                f(h, p, b)
    }
    ),
    r
}
function Ih(i) {
    let r = i.split("/");
    if (r.length === 0)
        return [];
    let[o,...c] = r
      , f = o.endsWith("?")
      , h = o.replace(/\?$/, "");
    if (c.length === 0)
        return f ? [h, ""] : [h];
    let p = Ih(c.join("/"))
      , S = [];
    return S.push(...p.map(b => b === "" ? h : [h, b].join("/"))),
    f && S.push(...p),
    S.map(b => i.startsWith("/") && b === "" ? "/" : b)
}
function B1(i) {
    i.sort( (r, o) => r.score !== o.score ? o.score - r.score : Z1(r.routesMeta.map(c => c.childrenIndex), o.routesMeta.map(c => c.childrenIndex)))
}
const k1 = /^:[\w-]+$/
  , G1 = 3
  , Y1 = 2
  , K1 = 1
  , V1 = 10
  , X1 = -2
  , fh = i => i === "*";
function Q1(i, r) {
    let o = i.split("/")
      , c = o.length;
    return o.some(fh) && (c += X1),
    r && (c += Y1),
    o.filter(f => !fh(f)).reduce( (f, h) => f + (k1.test(h) ? G1 : h === "" ? K1 : V1), c)
}
function Z1(i, r) {
    return i.length === r.length && i.slice(0, -1).every( (c, f) => c === r[f]) ? i[i.length - 1] - r[r.length - 1] : 0
}
function P1(i, r, o) {
    let {routesMeta: c} = i
      , f = {}
      , h = "/"
      , p = [];
    for (let S = 0; S < c.length; ++S) {
        let b = c[S]
          , g = S === c.length - 1
          , E = h === "/" ? r : r.slice(h.length) || "/"
          , R = F1({
            path: b.relativePath,
            caseSensitive: b.caseSensitive,
            end: g
        }, E)
          , _ = b.route;
        if (!R)
            return null;
        Object.assign(f, R.params),
        p.push({
            params: f,
            pathname: za([h, R.pathname]),
            pathnameBase: tv(za([h, R.pathnameBase])),
            route: _
        }),
        R.pathnameBase !== "/" && (h = za([h, R.pathnameBase]))
    }
    return p
}
function F1(i, r) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let[o,c] = W1(i.path, i.caseSensitive, i.end)
      , f = r.match(o);
    if (!f)
        return null;
    let h = f[0]
      , p = h.replace(/(.)\/+$/, "$1")
      , S = f.slice(1);
    return {
        params: c.reduce( (g, E, R) => {
            let {paramName: _, isOptional: V} = E;
            if (_ === "*") {
                let $ = S[R] || "";
                p = h.slice(0, h.length - $.length).replace(/(.)\/+$/, "$1")
            }
            const F = S[R];
            return V && !F ? g[_] = void 0 : g[_] = (F || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: h,
        pathnameBase: p,
        pattern: i
    }
}
function W1(i, r, o) {
    r === void 0 && (r = !1),
    o === void 0 && (o = !0),
    Jh(i === "*" || !i.endsWith("*") || i.endsWith("/*"), 'Route path "' + i + '" will be treated as if it were ' + ('"' + i.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + i.replace(/\*$/, "/*") + '".'));
    let c = []
      , f = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (p, S, b) => (c.push({
        paramName: S,
        isOptional: b != null
    }),
    b ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return i.endsWith("*") ? (c.push({
        paramName: "*"
    }),
    f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? f += "\\/*$" : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f,r ? void 0 : "i"), c]
}
function J1(i) {
    try {
        return i.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
    } catch (r) {
        return Jh(!1, 'The URL path "' + i + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")),
        i
    }
}
function ko(i, r) {
    if (r === "/")
        return i;
    if (!i.toLowerCase().startsWith(r.toLowerCase()))
        return null;
    let o = r.endsWith("/") ? r.length - 1 : r.length
      , c = i.charAt(o);
    return c && c !== "/" ? null : i.slice(o) || "/"
}
function $1(i, r) {
    r === void 0 && (r = "/");
    let {pathname: o, search: c="", hash: f=""} = typeof i == "string" ? Jn(i) : i;
    return {
        pathname: o ? o.startsWith("/") ? o : I1(o, r) : r,
        search: av(c),
        hash: nv(f)
    }
}
function I1(i, r) {
    let o = r.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(f => {
        f === ".." ? o.length > 1 && o.pop() : f !== "." && o.push(f)
    }
    ),
    o.length > 1 ? o.join("/") : "/"
}
function io(i, r, o, c) {
    return "Cannot include a '" + i + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(c) + "].  Please separate it out to the ") + ("`to." + o + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function ev(i) {
    return i.filter( (r, o) => o === 0 || r.route.path && r.route.path.length > 0)
}
function eg(i, r) {
    let o = ev(i);
    return r ? o.map( (c, f) => f === o.length - 1 ? c.pathname : c.pathnameBase) : o.map(c => c.pathnameBase)
}
function tg(i, r, o, c) {
    c === void 0 && (c = !1);
    let f;
    typeof i == "string" ? f = Jn(i) : (f = ti({}, i),
    De(!f.pathname || !f.pathname.includes("?"), io("?", "pathname", "search", f)),
    De(!f.pathname || !f.pathname.includes("#"), io("#", "pathname", "hash", f)),
    De(!f.search || !f.search.includes("#"), io("#", "search", "hash", f)));
    let h = i === "" || f.pathname === "", p = h ? "/" : f.pathname, S;
    if (p == null)
        S = o;
    else {
        let R = r.length - 1;
        if (!c && p.startsWith("..")) {
            let _ = p.split("/");
            for (; _[0] === ".."; )
                _.shift(),
                R -= 1;
            f.pathname = _.join("/")
        }
        S = R >= 0 ? r[R] : "/"
    }
    let b = $1(f, S)
      , g = p && p !== "/" && p.endsWith("/")
      , E = (h || p === ".") && o.endsWith("/");
    return !b.pathname.endsWith("/") && (g || E) && (b.pathname += "/"),
    b
}
const za = i => i.join("/").replace(/\/\/+/g, "/")
  , tv = i => i.replace(/\/+$/, "").replace(/^\/*/, "/")
  , av = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i
  , nv = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
function lv(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data"in i
}
const ag = ["post", "put", "patch", "delete"];
new Set(ag);
const iv = ["get", ...ag];
new Set(iv);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ai() {
    return ai = Object.assign ? Object.assign.bind() : function(i) {
        for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var c in o)
                Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c])
        }
        return i
    }
    ,
    ai.apply(this, arguments)
}
const Go = q.createContext(null)
  , sv = q.createContext(null)
  , sn = q.createContext(null)
  , Ms = q.createContext(null)
  , aa = q.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ng = q.createContext(null);
function rv(i, r) {
    let {relative: o} = r === void 0 ? {} : r;
    ii() || De(!1);
    let {basename: c, navigator: f} = q.useContext(sn)
      , {hash: h, pathname: p, search: S} = sg(i, {
        relative: o
    })
      , b = p;
    return c !== "/" && (b = p === "/" ? c : za([c, p])),
    f.createHref({
        pathname: b,
        search: S,
        hash: h
    })
}
function ii() {
    return q.useContext(Ms) != null
}
function zs() {
    return ii() || De(!1),
    q.useContext(Ms).location
}
function lg(i) {
    q.useContext(sn).static || q.useLayoutEffect(i)
}
function ig() {
    let {isDataRoute: i} = q.useContext(aa);
    return i ? Nv() : cv()
}
function cv() {
    ii() || De(!1);
    let i = q.useContext(Go)
      , {basename: r, future: o, navigator: c} = q.useContext(sn)
      , {matches: f} = q.useContext(aa)
      , {pathname: h} = zs()
      , p = JSON.stringify(eg(f, o.v7_relativeSplatPath))
      , S = q.useRef(!1);
    return lg( () => {
        S.current = !0
    }
    ),
    q.useCallback(function(g, E) {
        if (E === void 0 && (E = {}),
        !S.current)
            return;
        if (typeof g == "number") {
            c.go(g);
            return
        }
        let R = tg(g, JSON.parse(p), h, E.relative === "path");
        i == null && r !== "/" && (R.pathname = R.pathname === "/" ? r : za([r, R.pathname])),
        (E.replace ? c.replace : c.push)(R, E.state, E)
    }, [r, c, p, h, i])
}
const ov = q.createContext(null);
function uv(i) {
    let r = q.useContext(aa).outlet;
    return r && q.createElement(ov.Provider, {
        value: i
    }, r)
}
function fv() {
    let {matches: i} = q.useContext(aa)
      , r = i[i.length - 1];
    return r ? r.params : {}
}
function sg(i, r) {
    let {relative: o} = r === void 0 ? {} : r
      , {future: c} = q.useContext(sn)
      , {matches: f} = q.useContext(aa)
      , {pathname: h} = zs()
      , p = JSON.stringify(eg(f, c.v7_relativeSplatPath));
    return q.useMemo( () => tg(i, JSON.parse(p), h, o === "path"), [i, p, h, o])
}
function dv(i, r) {
    return mv(i, r)
}
function mv(i, r, o, c) {
    ii() || De(!1);
    let {navigator: f} = q.useContext(sn)
      , {matches: h} = q.useContext(aa)
      , p = h[h.length - 1]
      , S = p ? p.params : {};
    p && p.pathname;
    let b = p ? p.pathnameBase : "/";
    p && p.route;
    let g = zs(), E;
    if (r) {
        var R;
        let L = typeof r == "string" ? Jn(r) : r;
        b === "/" || (R = L.pathname) != null && R.startsWith(b) || De(!1),
        E = L
    } else
        E = g;
    let _ = E.pathname || "/"
      , V = _;
    if (b !== "/") {
        let L = b.replace(/^\//, "").split("/");
        V = "/" + _.replace(/^\//, "").split("/").slice(L.length).join("/")
    }
    let F = q1(i, {
        pathname: V
    })
      , $ = yv(F && F.map(L => Object.assign({}, L, {
        params: Object.assign({}, S, L.params),
        pathname: za([b, f.encodeLocation ? f.encodeLocation(L.pathname).pathname : L.pathname]),
        pathnameBase: L.pathnameBase === "/" ? b : za([b, f.encodeLocation ? f.encodeLocation(L.pathnameBase).pathname : L.pathnameBase])
    })), h, o, c);
    return r && $ ? q.createElement(Ms.Provider, {
        value: {
            location: ai({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, E),
            navigationType: Ma.Pop
        }
    }, $) : $
}
function hv() {
    let i = Av()
      , r = lv(i) ? i.status + " " + i.statusText : i instanceof Error ? i.message : JSON.stringify(i)
      , o = i instanceof Error ? i.stack : null
      , f = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return q.createElement(q.Fragment, null, q.createElement("h2", null, "Unexpected Application Error!"), q.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), o ? q.createElement("pre", {
        style: f
    }, o) : null, null)
}
const gv = q.createElement(hv, null);
class pv extends q.Component {
    constructor(r) {
        super(r),
        this.state = {
            location: r.location,
            revalidation: r.revalidation,
            error: r.error
        }
    }
    static getDerivedStateFromError(r) {
        return {
            error: r
        }
    }
    static getDerivedStateFromProps(r, o) {
        return o.location !== r.location || o.revalidation !== "idle" && r.revalidation === "idle" ? {
            error: r.error,
            location: r.location,
            revalidation: r.revalidation
        } : {
            error: r.error !== void 0 ? r.error : o.error,
            location: o.location,
            revalidation: r.revalidation || o.revalidation
        }
    }
    componentDidCatch(r, o) {
        console.error("React Router caught the following error during render", r, o)
    }
    render() {
        return this.state.error !== void 0 ? q.createElement(aa.Provider, {
            value: this.props.routeContext
        }, q.createElement(ng.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function vv(i) {
    let {routeContext: r, match: o, children: c} = i
      , f = q.useContext(Go);
    return f && f.static && f.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    q.createElement(aa.Provider, {
        value: r
    }, c)
}
function yv(i, r, o, c) {
    var f;
    if (r === void 0 && (r = []),
    o === void 0 && (o = null),
    c === void 0 && (c = null),
    i == null) {
        var h;
        if (!o)
            return null;
        if (o.errors)
            i = o.matches;
        else if ((h = c) != null && h.v7_partialHydration && r.length === 0 && !o.initialized && o.matches.length > 0)
            i = o.matches;
        else
            return null
    }
    let p = i
      , S = (f = o) == null ? void 0 : f.errors;
    if (S != null) {
        let E = p.findIndex(R => R.route.id && (S == null ? void 0 : S[R.route.id]) !== void 0);
        E >= 0 || De(!1),
        p = p.slice(0, Math.min(p.length, E + 1))
    }
    let b = !1
      , g = -1;
    if (o && c && c.v7_partialHydration)
        for (let E = 0; E < p.length; E++) {
            let R = p[E];
            if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (g = E),
            R.route.id) {
                let {loaderData: _, errors: V} = o
                  , F = R.route.loader && _[R.route.id] === void 0 && (!V || V[R.route.id] === void 0);
                if (R.route.lazy || F) {
                    b = !0,
                    g >= 0 ? p = p.slice(0, g + 1) : p = [p[0]];
                    break
                }
            }
        }
    return p.reduceRight( (E, R, _) => {
        let V, F = !1, $ = null, L = null;
        o && (V = S && R.route.id ? S[R.route.id] : void 0,
        $ = R.route.errorElement || gv,
        b && (g < 0 && _ === 0 ? (Ov("route-fallback"),
        F = !0,
        L = null) : g === _ && (F = !0,
        L = R.route.hydrateFallbackElement || null)));
        let ee = r.concat(p.slice(0, _ + 1))
          , te = () => {
            let X;
            return V ? X = $ : F ? X = L : R.route.Component ? X = q.createElement(R.route.Component, null) : R.route.element ? X = R.route.element : X = E,
            q.createElement(vv, {
                match: R,
                routeContext: {
                    outlet: E,
                    matches: ee,
                    isDataRoute: o != null
                },
                children: X
            })
        }
        ;
        return o && (R.route.ErrorBoundary || R.route.errorElement || _ === 0) ? q.createElement(pv, {
            location: o.location,
            revalidation: o.revalidation,
            component: $,
            error: V,
            children: te(),
            routeContext: {
                outlet: null,
                matches: ee,
                isDataRoute: !0
            }
        }) : te()
    }
    , null)
}
var rg = function(i) {
    return i.UseBlocker = "useBlocker",
    i.UseRevalidator = "useRevalidator",
    i.UseNavigateStable = "useNavigate",
    i
}(rg || {})
  , cg = function(i) {
    return i.UseBlocker = "useBlocker",
    i.UseLoaderData = "useLoaderData",
    i.UseActionData = "useActionData",
    i.UseRouteError = "useRouteError",
    i.UseNavigation = "useNavigation",
    i.UseRouteLoaderData = "useRouteLoaderData",
    i.UseMatches = "useMatches",
    i.UseRevalidator = "useRevalidator",
    i.UseNavigateStable = "useNavigate",
    i.UseRouteId = "useRouteId",
    i
}(cg || {});
function bv(i) {
    let r = q.useContext(Go);
    return r || De(!1),
    r
}
function xv(i) {
    let r = q.useContext(sv);
    return r || De(!1),
    r
}
function Sv(i) {
    let r = q.useContext(aa);
    return r || De(!1),
    r
}
function og(i) {
    let r = Sv()
      , o = r.matches[r.matches.length - 1];
    return o.route.id || De(!1),
    o.route.id
}
function Av() {
    var i;
    let r = q.useContext(ng)
      , o = xv()
      , c = og();
    return r !== void 0 ? r : (i = o.errors) == null ? void 0 : i[c]
}
function Nv() {
    let {router: i} = bv(rg.UseNavigateStable)
      , r = og(cg.UseNavigateStable)
      , o = q.useRef(!1);
    return lg( () => {
        o.current = !0
    }
    ),
    q.useCallback(function(f, h) {
        h === void 0 && (h = {}),
        o.current && (typeof f == "number" ? i.navigate(f) : i.navigate(f, ai({
            fromRouteId: r
        }, h)))
    }, [i, r])
}
const dh = {};
function Ov(i, r, o) {
    dh[i] || (dh[i] = !0)
}
function Ev(i, r) {
    i == null || i.v7_startTransition,
    i == null || i.v7_relativeSplatPath
}
function Tv(i) {
    return uv(i.context)
}
function It(i) {
    De(!1)
}
function Cv(i) {
    let {basename: r="/", children: o=null, location: c, navigationType: f=Ma.Pop, navigator: h, static: p=!1, future: S} = i;
    ii() && De(!1);
    let b = r.replace(/^\/*/, "/")
      , g = q.useMemo( () => ({
        basename: b,
        navigator: h,
        static: p,
        future: ai({
            v7_relativeSplatPath: !1
        }, S)
    }), [b, S, h, p]);
    typeof c == "string" && (c = Jn(c));
    let {pathname: E="/", search: R="", hash: _="", state: V=null, key: F="default"} = c
      , $ = q.useMemo( () => {
        let L = ko(E, b);
        return L == null ? null : {
            location: {
                pathname: L,
                search: R,
                hash: _,
                state: V,
                key: F
            },
            navigationType: f
        }
    }
    , [b, E, R, _, V, F, f]);
    return $ == null ? null : q.createElement(sn.Provider, {
        value: g
    }, q.createElement(Ms.Provider, {
        children: o,
        value: $
    }))
}
function jv(i) {
    let {children: r, location: o} = i;
    return dv(vo(r), o)
}
new Promise( () => {}
);
function vo(i, r) {
    r === void 0 && (r = []);
    let o = [];
    return q.Children.forEach(i, (c, f) => {
        if (!q.isValidElement(c))
            return;
        let h = [...r, f];
        if (c.type === q.Fragment) {
            o.push.apply(o, vo(c.props.children, h));
            return
        }
        c.type !== It && De(!1),
        !c.props.index || !c.props.children || De(!1);
        let p = {
            id: c.props.id || h.join("-"),
            caseSensitive: c.props.caseSensitive,
            element: c.props.element,
            Component: c.props.Component,
            index: c.props.index,
            path: c.props.path,
            loader: c.props.loader,
            action: c.props.action,
            errorElement: c.props.errorElement,
            ErrorBoundary: c.props.ErrorBoundary,
            hasErrorBoundary: c.props.ErrorBoundary != null || c.props.errorElement != null,
            shouldRevalidate: c.props.shouldRevalidate,
            handle: c.props.handle,
            lazy: c.props.lazy
        };
        c.props.children && (p.children = vo(c.props.children, h)),
        o.push(p)
    }
    ),
    o
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yo() {
    return yo = Object.assign ? Object.assign.bind() : function(i) {
        for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var c in o)
                Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c])
        }
        return i
    }
    ,
    yo.apply(this, arguments)
}
function wv(i, r) {
    if (i == null)
        return {};
    var o = {}, c = Object.keys(i), f, h;
    for (h = 0; h < c.length; h++)
        f = c[h],
        !(r.indexOf(f) >= 0) && (o[f] = i[f]);
    return o
}
function Rv(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Mv(i, r) {
    return i.button === 0 && (!r || r === "_self") && !Rv(i)
}
const zv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , Dv = "6";
try {
    window.__reactRouterVersion = Dv
} catch {}
const _v = "startTransition"
  , mh = C1[_v];
function Uv(i) {
    let {basename: r, children: o, future: c, window: f} = i
      , h = q.useRef();
    h.current == null && (h.current = _1({
        window: f,
        v5Compat: !0
    }));
    let p = h.current
      , [S,b] = q.useState({
        action: p.action,
        location: p.location
    })
      , {v7_startTransition: g} = c || {}
      , E = q.useCallback(R => {
        g && mh ? mh( () => b(R)) : b(R)
    }
    , [b, g]);
    return q.useLayoutEffect( () => p.listen(E), [p, E]),
    q.useEffect( () => Ev(c), [c]),
    q.createElement(Cv, {
        basename: r,
        children: o,
        location: S.location,
        navigationType: S.action,
        navigator: p,
        future: c
    })
}
const Lv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , qv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Se = q.forwardRef(function(r, o) {
    let {onClick: c, relative: f, reloadDocument: h, replace: p, state: S, target: b, to: g, preventScrollReset: E, viewTransition: R} = r, _ = wv(r, zv), {basename: V} = q.useContext(sn), F, $ = !1;
    if (typeof g == "string" && qv.test(g) && (F = g,
    Lv))
        try {
            let X = new URL(window.location.href)
              , de = g.startsWith("//") ? new URL(X.protocol + g) : new URL(g)
              , Q = ko(de.pathname, V);
            de.origin === X.origin && Q != null ? g = Q + de.search + de.hash : $ = !0
        } catch {}
    let L = rv(g, {
        relative: f
    })
      , ee = Hv(g, {
        replace: p,
        state: S,
        target: b,
        preventScrollReset: E,
        relative: f,
        viewTransition: R
    });
    function te(X) {
        c && c(X),
        X.defaultPrevented || ee(X)
    }
    return q.createElement("a", yo({}, _, {
        href: F || L,
        onClick: $ || h ? c : te,
        ref: o,
        target: b
    }))
});
var hh;
(function(i) {
    i.UseScrollRestoration = "useScrollRestoration",
    i.UseSubmit = "useSubmit",
    i.UseSubmitFetcher = "useSubmitFetcher",
    i.UseFetcher = "useFetcher",
    i.useViewTransitionState = "useViewTransitionState"
}
)(hh || (hh = {}));
var gh;
(function(i) {
    i.UseFetcher = "useFetcher",
    i.UseFetchers = "useFetchers",
    i.UseScrollRestoration = "useScrollRestoration"
}
)(gh || (gh = {}));
function Hv(i, r) {
    let {target: o, replace: c, state: f, preventScrollReset: h, relative: p, viewTransition: S} = r === void 0 ? {} : r
      , b = ig()
      , g = zs()
      , E = sg(i, {
        relative: p
    });
    return q.useCallback(R => {
        if (Mv(R, o)) {
            R.preventDefault();
            let _ = c !== void 0 ? c : Cs(g) === Cs(E);
            b(i, {
                replace: _,
                state: f,
                preventScrollReset: h,
                relative: p,
                viewTransition: S
            })
        }
    }
    , [g, b, E, c, f, o, i, h, p, S])
}
function Bv() {
    const [i,r] = q.useState(!1);
    return d.jsx("nav", {
        className: "bg-white shadow-lg",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [d.jsxs("div", {
                className: "flex justify-between h-16",
                children: [d.jsx("div", {
                    className: "flex items-center",
                    children: d.jsxs(Se, {
                        to: "/",
                        className: "flex items-center space-x-2",
                        children: [d.jsx("img", {
                            src: "https://i.imgur.com/24wHowD.jpg",
                            alt: "CyberTechOcean Logo",
                            className: "h-8 w-8 rounded-full"
                        }), d.jsx("span", {
                            className: "text-2xl font-bold text-red-600",
                            children: "CyberTechOcean"
                        })]
                    })
                }), d.jsx("div", {
                    className: "flex items-center md:hidden",
                    children: d.jsx("button", {
                        onClick: () => r(!i),
                        className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100",
                        children: d.jsx("svg", {
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: d.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: i ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    })
                }), d.jsxs("div", {
                    className: "hidden md:flex items-center space-x-4",
                    children: [d.jsx(Se, {
                        to: "/",
                        className: "hover:text-blue-600",
                        children: "Home"
                    }), d.jsx(Se, {
                        to: "/services",
                        className: "hover:text-blue-600",
                        children: "Services"
                    }), d.jsx(Se, {
                        to: "/projects",
                        className: "hover:text-blue-600",
                        children: "Projects"
                    }), d.jsx(Se, {
                        to: "/testimonials",
                        className: "hover:text-blue-600",
                        children: "Testimonials"
                    }), d.jsx(Se, {
                        to: "/about",
                        className: "hover:text-blue-600",
                        children: "About"
                    }), d.jsx(Se, {
                        to: "/contact",
                        className: "hover:text-blue-600",
                        children: "Contact"
                    })]
                })]
            }), i && d.jsx("div", {
                className: "md:hidden py-2",
                children: d.jsxs("div", {
                    className: "flex flex-col space-y-2",
                    children: [d.jsx(Se, {
                        to: "/",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "Home"
                    }), d.jsx(Se, {
                        to: "/services",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "Services"
                    }), d.jsx(Se, {
                        to: "/projects",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "Projects"
                    }), d.jsx(Se, {
                        to: "/testimonials",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "Testimonials"
                    }), d.jsx(Se, {
                        to: "/about",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "About"
                    }), d.jsx(Se, {
                        to: "/contact",
                        onClick: () => r(!1),
                        className: "hover:text-blue-600 px-2 py-1",
                        children: "Contact"
                    })]
                })
            })]
        })
    })
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function kv(i, r, o) {
    return (r = Yv(r))in i ? Object.defineProperty(i, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = o,
    i
}
function ph(i, r) {
    var o = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        r && (c = c.filter(function(f) {
            return Object.getOwnPropertyDescriptor(i, f).enumerable
        })),
        o.push.apply(o, c)
    }
    return o
}
function U(i) {
    for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r] != null ? arguments[r] : {};
        r % 2 ? ph(Object(o), !0).forEach(function(c) {
            kv(i, c, o[c])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : ph(Object(o)).forEach(function(c) {
            Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(o, c))
        })
    }
    return i
}
function Gv(i, r) {
    if (typeof i != "object" || !i)
        return i;
    var o = i[Symbol.toPrimitive];
    if (o !== void 0) {
        var c = o.call(i, r);
        if (typeof c != "object")
            return c;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(i)
}
function Yv(i) {
    var r = Gv(i, "string");
    return typeof r == "symbol" ? r : r + ""
}
const vh = () => {}
;
let Yo = {}
  , ug = {}
  , fg = null
  , dg = {
    mark: vh,
    measure: vh
};
try {
    typeof window < "u" && (Yo = window),
    typeof document < "u" && (ug = document),
    typeof MutationObserver < "u" && (fg = MutationObserver),
    typeof performance < "u" && (dg = performance)
} catch {}
const {userAgent: yh=""} = Yo.navigator || {}
  , Da = Yo
  , Ne = ug
  , bh = fg
  , Ns = dg;
Da.document;
const na = !!Ne.documentElement && !!Ne.head && typeof Ne.addEventListener == "function" && typeof Ne.createElement == "function"
  , mg = ~yh.indexOf("MSIE") || ~yh.indexOf("Trident/");
var Kv = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/
  , Vv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
  , hg = {
    classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
    },
    duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
    },
    sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    },
    "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
    }
}
  , Xv = {
    GROUP: "duotone-group",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , gg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , Fe = "classic"
  , Ds = "duotone"
  , Qv = "sharp"
  , Zv = "sharp-duotone"
  , pg = [Fe, Ds, Qv, Zv]
  , Pv = {
    classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
    },
    sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    },
    "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , Fv = {
    "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 6 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
    },
    "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , Wv = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}]])
  , Jv = {
    classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
    },
    duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
    },
    sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    },
    "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
    }
}
  , $v = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , xh = {
    kit: {
        fak: "kit",
        "fa-kit": "kit"
    },
    "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
}
  , Iv = ["kit"]
  , ey = {
    kit: {
        "fa-kit": "fak"
    }
}
  , ty = ["fak", "fakd"]
  , ay = {
    kit: {
        fak: "fa-kit"
    }
}
  , Sh = {
    kit: {
        kit: "fak"
    },
    "kit-duotone": {
        "kit-duotone": "fakd"
    }
}
  , Os = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , ny = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , ly = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , iy = {
    "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
    },
    "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
    }
}
  , sy = {
    classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    },
    duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
    },
    sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    },
    "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
    }
}
  , ry = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}
  , bo = {
    classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    },
    duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
    },
    sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    },
    "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
    }
}
  , cy = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"]
  , xo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...ny, ...cy]
  , oy = ["solid", "regular", "light", "thin", "duotone", "brands"]
  , vg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , uy = vg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , fy = [...Object.keys(ry), ...oy, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Os.GROUP, Os.SWAP_OPACITY, Os.PRIMARY, Os.SECONDARY].concat(vg.map(i => "".concat(i, "x"))).concat(uy.map(i => "w-".concat(i)))
  , dy = {
    "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    },
    "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 5 Duotone": {
        900: "fad"
    }
};
const ea = "___FONT_AWESOME___"
  , So = 16
  , yg = "fa"
  , bg = "svg-inline--fa"
  , nn = "data-fa-i2svg"
  , Ao = "data-fa-pseudo-element"
  , my = "data-fa-pseudo-element-pending"
  , Ko = "data-prefix"
  , Vo = "data-icon"
  , Ah = "fontawesome-i2svg"
  , hy = "async"
  , gy = ["HTML", "HEAD", "STYLE", "SCRIPT"]
  , xg = ( () => {
    try {
        return !0
    } catch {
        return !1
    }
}
)();
function si(i) {
    return new Proxy(i,{
        get(r, o) {
            return o in r ? r[o] : r[Fe]
        }
    })
}
const Sg = U({}, hg);
Sg[Fe] = U(U(U(U({}, {
    "fa-duotone": "duotone"
}), hg[Fe]), xh.kit), xh["kit-duotone"]);
const py = si(Sg)
  , No = U({}, Jv);
No[Fe] = U(U(U(U({}, {
    duotone: "fad"
}), No[Fe]), Sh.kit), Sh["kit-duotone"]);
const Nh = si(No)
  , Oo = U({}, bo);
Oo[Fe] = U(U({}, Oo[Fe]), ay.kit);
const Xo = si(Oo)
  , Eo = U({}, sy);
Eo[Fe] = U(U({}, Eo[Fe]), ey.kit);
si(Eo);
const vy = Kv
  , Ag = "fa-layers-text"
  , yy = Vv
  , by = U({}, Pv);
si(by);
const xy = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , so = Xv
  , Sy = [...Iv, ...fy]
  , Il = Da.FontAwesomeConfig || {};
function Ay(i) {
    var r = Ne.querySelector("script[" + i + "]");
    if (r)
        return r.getAttribute(i)
}
function Ny(i) {
    return i === "" ? !0 : i === "false" ? !1 : i === "true" ? !0 : i
}
Ne && typeof Ne.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(r => {
    let[o,c] = r;
    const f = Ny(Ay(o));
    f != null && (Il[c] = f)
}
);
const Ng = {
    styleDefault: "solid",
    familyDefault: Fe,
    cssPrefix: yg,
    replacementClass: bg,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
Il.familyPrefix && (Il.cssPrefix = Il.familyPrefix);
const Wn = U(U({}, Ng), Il);
Wn.autoReplaceSvg || (Wn.observeMutations = !1);
const Y = {};
Object.keys(Ng).forEach(i => {
    Object.defineProperty(Y, i, {
        enumerable: !0,
        set: function(r) {
            Wn[i] = r,
            ei.forEach(o => o(Y))
        },
        get: function() {
            return Wn[i]
        }
    })
}
);
Object.defineProperty(Y, "familyPrefix", {
    enumerable: !0,
    set: function(i) {
        Wn.cssPrefix = i,
        ei.forEach(r => r(Y))
    },
    get: function() {
        return Wn.cssPrefix
    }
});
Da.FontAwesomeConfig = Y;
const ei = [];
function Oy(i) {
    return ei.push(i),
    () => {
        ei.splice(ei.indexOf(i), 1)
    }
}
const wa = So
  , Ut = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function Ey(i) {
    if (!i || !na)
        return;
    const r = Ne.createElement("style");
    r.setAttribute("type", "text/css"),
    r.innerHTML = i;
    const o = Ne.head.childNodes;
    let c = null;
    for (let f = o.length - 1; f > -1; f--) {
        const h = o[f]
          , p = (h.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(p) > -1 && (c = h)
    }
    return Ne.head.insertBefore(r, c),
    i
}
const Ty = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ni() {
    let i = 12
      , r = "";
    for (; i-- > 0; )
        r += Ty[Math.random() * 62 | 0];
    return r
}
function $n(i) {
    const r = [];
    for (let o = (i || []).length >>> 0; o--; )
        r[o] = i[o];
    return r
}
function Qo(i) {
    return i.classList ? $n(i.classList) : (i.getAttribute("class") || "").split(" ").filter(r => r)
}
function Og(i) {
    return "".concat(i).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function Cy(i) {
    return Object.keys(i || {}).reduce( (r, o) => r + "".concat(o, '="').concat(Og(i[o]), '" '), "").trim()
}
function _s(i) {
    return Object.keys(i || {}).reduce( (r, o) => r + "".concat(o, ": ").concat(i[o].trim(), ";"), "")
}
function Zo(i) {
    return i.size !== Ut.size || i.x !== Ut.x || i.y !== Ut.y || i.rotate !== Ut.rotate || i.flipX || i.flipY
}
function jy(i) {
    let {transform: r, containerWidth: o, iconWidth: c} = i;
    const f = {
        transform: "translate(".concat(o / 2, " 256)")
    }
      , h = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
      , p = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
      , S = "rotate(".concat(r.rotate, " 0 0)")
      , b = {
        transform: "".concat(h, " ").concat(p, " ").concat(S)
    }
      , g = {
        transform: "translate(".concat(c / 2 * -1, " -256)")
    };
    return {
        outer: f,
        inner: b,
        path: g
    }
}
function wy(i) {
    let {transform: r, width: o=So, height: c=So, startCentered: f=!1} = i
      , h = "";
    return f && mg ? h += "translate(".concat(r.x / wa - o / 2, "em, ").concat(r.y / wa - c / 2, "em) ") : f ? h += "translate(calc(-50% + ".concat(r.x / wa, "em), calc(-50% + ").concat(r.y / wa, "em)) ") : h += "translate(".concat(r.x / wa, "em, ").concat(r.y / wa, "em) "),
    h += "scale(".concat(r.size / wa * (r.flipX ? -1 : 1), ", ").concat(r.size / wa * (r.flipY ? -1 : 1), ") "),
    h += "rotate(".concat(r.rotate, "deg) "),
    h
}
var Ry = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Eg() {
    const i = yg
      , r = bg
      , o = Y.cssPrefix
      , c = Y.replacementClass;
    let f = Ry;
    if (o !== i || c !== r) {
        const h = new RegExp("\\.".concat(i, "\\-"),"g")
          , p = new RegExp("\\--".concat(i, "\\-"),"g")
          , S = new RegExp("\\.".concat(r),"g");
        f = f.replace(h, ".".concat(o, "-")).replace(p, "--".concat(o, "-")).replace(S, ".".concat(c))
    }
    return f
}
let Oh = !1;
function ro() {
    Y.autoAddCss && !Oh && (Ey(Eg()),
    Oh = !0)
}
var My = {
    mixout() {
        return {
            dom: {
                css: Eg,
                insertCss: ro
            }
        }
    },
    hooks() {
        return {
            beforeDOMElementCreation() {
                ro()
            },
            beforeI2svg() {
                ro()
            }
        }
    }
};
const ta = Da || {};
ta[ea] || (ta[ea] = {});
ta[ea].styles || (ta[ea].styles = {});
ta[ea].hooks || (ta[ea].hooks = {});
ta[ea].shims || (ta[ea].shims = []);
var Lt = ta[ea];
const Tg = []
  , Cg = function() {
    Ne.removeEventListener("DOMContentLoaded", Cg),
    js = 1,
    Tg.map(i => i())
};
let js = !1;
na && (js = (Ne.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ne.readyState),
js || Ne.addEventListener("DOMContentLoaded", Cg));
function zy(i) {
    na && (js ? setTimeout(i, 0) : Tg.push(i))
}
function ri(i) {
    const {tag: r, attributes: o={}, children: c=[]} = i;
    return typeof i == "string" ? Og(i) : "<".concat(r, " ").concat(Cy(o), ">").concat(c.map(ri).join(""), "</").concat(r, ">")
}
function Eh(i, r, o) {
    if (i && i[r] && i[r][o])
        return {
            prefix: r,
            iconName: o,
            icon: i[r][o]
        }
}
var co = function(r, o, c, f) {
    var h = Object.keys(r), p = h.length, S = o, b, g, E;
    for (c === void 0 ? (b = 1,
    E = r[h[0]]) : (b = 0,
    E = c); b < p; b++)
        g = h[b],
        E = S(E, r[g], g, r);
    return E
};
function Dy(i) {
    const r = [];
    let o = 0;
    const c = i.length;
    for (; o < c; ) {
        const f = i.charCodeAt(o++);
        if (f >= 55296 && f <= 56319 && o < c) {
            const h = i.charCodeAt(o++);
            (h & 64512) == 56320 ? r.push(((f & 1023) << 10) + (h & 1023) + 65536) : (r.push(f),
            o--)
        } else
            r.push(f)
    }
    return r
}
function To(i) {
    const r = Dy(i);
    return r.length === 1 ? r[0].toString(16) : null
}
function _y(i, r) {
    const o = i.length;
    let c = i.charCodeAt(r), f;
    return c >= 55296 && c <= 56319 && o > r + 1 && (f = i.charCodeAt(r + 1),
    f >= 56320 && f <= 57343) ? (c - 55296) * 1024 + f - 56320 + 65536 : c
}
function Th(i) {
    return Object.keys(i).reduce( (r, o) => {
        const c = i[o];
        return !!c.icon ? r[c.iconName] = c.icon : r[o] = c,
        r
    }
    , {})
}
function Co(i, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {skipHooks: c=!1} = o
      , f = Th(r);
    typeof Lt.hooks.addPack == "function" && !c ? Lt.hooks.addPack(i, Th(r)) : Lt.styles[i] = U(U({}, Lt.styles[i] || {}), f),
    i === "fas" && Co("fa", r)
}
const {styles: li, shims: Uy} = Lt
  , jg = Object.keys(Xo)
  , Ly = jg.reduce( (i, r) => (i[r] = Object.keys(Xo[r]),
i), {});
let Po = null
  , wg = {}
  , Rg = {}
  , Mg = {}
  , zg = {}
  , Dg = {};
function qy(i) {
    return ~Sy.indexOf(i)
}
function Hy(i, r) {
    const o = r.split("-")
      , c = o[0]
      , f = o.slice(1).join("-");
    return c === i && f !== "" && !qy(f) ? f : null
}
const _g = () => {
    const i = c => co(li, (f, h, p) => (f[p] = co(h, c, {}),
    f), {});
    wg = i( (c, f, h) => (f[3] && (c[f[3]] = h),
    f[2] && f[2].filter(S => typeof S == "number").forEach(S => {
        c[S.toString(16)] = h
    }
    ),
    c)),
    Rg = i( (c, f, h) => (c[h] = h,
    f[2] && f[2].filter(S => typeof S == "string").forEach(S => {
        c[S] = h
    }
    ),
    c)),
    Dg = i( (c, f, h) => {
        const p = f[2];
        return c[h] = h,
        p.forEach(S => {
            c[S] = h
        }
        ),
        c
    }
    );
    const r = "far"in li || Y.autoFetchSvg
      , o = co(Uy, (c, f) => {
        const h = f[0];
        let p = f[1];
        const S = f[2];
        return p === "far" && !r && (p = "fas"),
        typeof h == "string" && (c.names[h] = {
            prefix: p,
            iconName: S
        }),
        typeof h == "number" && (c.unicodes[h.toString(16)] = {
            prefix: p,
            iconName: S
        }),
        c
    }
    , {
        names: {},
        unicodes: {}
    });
    Mg = o.names,
    zg = o.unicodes,
    Po = Us(Y.styleDefault, {
        family: Y.familyDefault
    })
}
;
Oy(i => {
    Po = Us(i.styleDefault, {
        family: Y.familyDefault
    })
}
);
_g();
function Fo(i, r) {
    return (wg[i] || {})[r]
}
function By(i, r) {
    return (Rg[i] || {})[r]
}
function an(i, r) {
    return (Dg[i] || {})[r]
}
function Ug(i) {
    return Mg[i] || {
        prefix: null,
        iconName: null
    }
}
function ky(i) {
    const r = zg[i]
      , o = Fo("fas", i);
    return r || (o ? {
        prefix: "fas",
        iconName: o
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function _a() {
    return Po
}
const Lg = () => ({
    prefix: null,
    iconName: null,
    rest: []
});
function Gy(i) {
    let r = Fe;
    const o = jg.reduce( (c, f) => (c[f] = "".concat(Y.cssPrefix, "-").concat(f),
    c), {});
    return pg.forEach(c => {
        (i.includes(o[c]) || i.some(f => Ly[c].includes(f))) && (r = c)
    }
    ),
    r
}
function Us(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {family: o=Fe} = r
      , c = py[o][i];
    if (o === Ds && !i)
        return "fad";
    const f = Nh[o][i] || Nh[o][c]
      , h = i in Lt.styles ? i : null;
    return f || h || null
}
function Yy(i) {
    let r = []
      , o = null;
    return i.forEach(c => {
        const f = Hy(Y.cssPrefix, c);
        f ? o = f : c && r.push(c)
    }
    ),
    {
        iconName: o,
        rest: r
    }
}
function Ch(i) {
    return i.sort().filter( (r, o, c) => c.indexOf(r) === o)
}
function Ls(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {skipLookups: o=!1} = r;
    let c = null;
    const f = xo.concat(ly)
      , h = Ch(i.filter(R => f.includes(R)))
      , p = Ch(i.filter(R => !xo.includes(R)))
      , S = h.filter(R => (c = R,
    !gg.includes(R)))
      , [b=null] = S
      , g = Gy(h)
      , E = U(U({}, Yy(p)), {}, {
        prefix: Us(b, {
            family: g
        })
    });
    return U(U(U({}, E), Qy({
        values: i,
        family: g,
        styles: li,
        config: Y,
        canonical: E,
        givenPrefix: c
    })), Ky(o, c, E))
}
function Ky(i, r, o) {
    let {prefix: c, iconName: f} = o;
    if (i || !c || !f)
        return {
            prefix: c,
            iconName: f
        };
    const h = r === "fa" ? Ug(f) : {}
      , p = an(c, f);
    return f = h.iconName || p || f,
    c = h.prefix || c,
    c === "far" && !li.far && li.fas && !Y.autoFetchSvg && (c = "fas"),
    {
        prefix: c,
        iconName: f
    }
}
const Vy = pg.filter(i => i !== Fe || i !== Ds)
  , Xy = Object.keys(bo).filter(i => i !== Fe).map(i => Object.keys(bo[i])).flat();
function Qy(i) {
    const {values: r, family: o, canonical: c, givenPrefix: f="", styles: h={}, config: p={}} = i
      , S = o === Ds
      , b = r.includes("fa-duotone") || r.includes("fad")
      , g = p.familyDefault === "duotone"
      , E = c.prefix === "fad" || c.prefix === "fa-duotone";
    if (!S && (b || g || E) && (c.prefix = "fad"),
    (r.includes("fa-brands") || r.includes("fab")) && (c.prefix = "fab"),
    !c.prefix && Vy.includes(o) && (Object.keys(h).find(_ => Xy.includes(_)) || p.autoFetchSvg)) {
        const _ = Wv.get(o).defaultShortPrefixId;
        c.prefix = _,
        c.iconName = an(c.prefix, c.iconName) || c.iconName
    }
    return (c.prefix === "fa" || f === "fa") && (c.prefix = _a() || "fas"),
    c
}
class Zy {
    constructor() {
        this.definitions = {}
    }
    add() {
        for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++)
            o[c] = arguments[c];
        const f = o.reduce(this._pullDefinitions, {});
        Object.keys(f).forEach(h => {
            this.definitions[h] = U(U({}, this.definitions[h] || {}), f[h]),
            Co(h, f[h]);
            const p = Xo[Fe][h];
            p && Co(p, f[h]),
            _g()
        }
        )
    }
    reset() {
        this.definitions = {}
    }
    _pullDefinitions(r, o) {
        const c = o.prefix && o.iconName && o.icon ? {
            0: o
        } : o;
        return Object.keys(c).map(f => {
            const {prefix: h, iconName: p, icon: S} = c[f]
              , b = S[2];
            r[h] || (r[h] = {}),
            b.length > 0 && b.forEach(g => {
                typeof g == "string" && (r[h][g] = S)
            }
            ),
            r[h][p] = S
        }
        ),
        r
    }
}
let jh = []
  , Zn = {};
const Fn = {}
  , Py = Object.keys(Fn);
function Fy(i, r) {
    let {mixoutsTo: o} = r;
    return jh = i,
    Zn = {},
    Object.keys(Fn).forEach(c => {
        Py.indexOf(c) === -1 && delete Fn[c]
    }
    ),
    jh.forEach(c => {
        const f = c.mixout ? c.mixout() : {};
        if (Object.keys(f).forEach(h => {
            typeof f[h] == "function" && (o[h] = f[h]),
            typeof f[h] == "object" && Object.keys(f[h]).forEach(p => {
                o[h] || (o[h] = {}),
                o[h][p] = f[h][p]
            }
            )
        }
        ),
        c.hooks) {
            const h = c.hooks();
            Object.keys(h).forEach(p => {
                Zn[p] || (Zn[p] = []),
                Zn[p].push(h[p])
            }
            )
        }
        c.provides && c.provides(Fn)
    }
    ),
    o
}
function jo(i, r) {
    for (var o = arguments.length, c = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)
        c[f - 2] = arguments[f];
    return (Zn[i] || []).forEach(p => {
        r = p.apply(null, [r, ...c])
    }
    ),
    r
}
function ln(i) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
        o[c - 1] = arguments[c];
    (Zn[i] || []).forEach(h => {
        h.apply(null, o)
    }
    )
}
function Ua() {
    const i = arguments[0]
      , r = Array.prototype.slice.call(arguments, 1);
    return Fn[i] ? Fn[i].apply(null, r) : void 0
}
function wo(i) {
    i.prefix === "fa" && (i.prefix = "fas");
    let {iconName: r} = i;
    const o = i.prefix || _a();
    if (r)
        return r = an(o, r) || r,
        Eh(qg.definitions, o, r) || Eh(Lt.styles, o, r)
}
const qg = new Zy
  , Wy = () => {
    Y.autoReplaceSvg = !1,
    Y.observeMutations = !1,
    ln("noAuto")
}
  , Jy = {
    i2svg: function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return na ? (ln("beforeI2svg", i),
        Ua("pseudoElements2svg", i),
        Ua("i2svg", i)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
    },
    watch: function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {autoReplaceSvgRoot: r} = i;
        Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0),
        Y.observeMutations = !0,
        zy( () => {
            Iy({
                autoReplaceSvgRoot: r
            }),
            ln("watch", i)
        }
        )
    }
}
  , $y = {
    icon: i => {
        if (i === null)
            return null;
        if (typeof i == "object" && i.prefix && i.iconName)
            return {
                prefix: i.prefix,
                iconName: an(i.prefix, i.iconName) || i.iconName
            };
        if (Array.isArray(i) && i.length === 2) {
            const r = i[1].indexOf("fa-") === 0 ? i[1].slice(3) : i[1]
              , o = Us(i[0]);
            return {
                prefix: o,
                iconName: an(o, r) || r
            }
        }
        if (typeof i == "string" && (i.indexOf("".concat(Y.cssPrefix, "-")) > -1 || i.match(vy))) {
            const r = Ls(i.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: r.prefix || _a(),
                iconName: an(r.prefix, r.iconName) || r.iconName
            }
        }
        if (typeof i == "string") {
            const r = _a();
            return {
                prefix: r,
                iconName: an(r, i) || i
            }
        }
    }
}
  , ht = {
    noAuto: Wy,
    config: Y,
    dom: Jy,
    parse: $y,
    library: qg,
    findIconDefinition: wo,
    toHtml: ri
}
  , Iy = function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {autoReplaceSvgRoot: r=Ne} = i;
    (Object.keys(Lt.styles).length > 0 || Y.autoFetchSvg) && na && Y.autoReplaceSvg && ht.dom.i2svg({
        node: r
    })
};
function qs(i, r) {
    return Object.defineProperty(i, "abstract", {
        get: r
    }),
    Object.defineProperty(i, "html", {
        get: function() {
            return i.abstract.map(o => ri(o))
        }
    }),
    Object.defineProperty(i, "node", {
        get: function() {
            if (!na)
                return;
            const o = Ne.createElement("div");
            return o.innerHTML = i.html,
            o.children
        }
    }),
    i
}
function e2(i) {
    let {children: r, main: o, mask: c, attributes: f, styles: h, transform: p} = i;
    if (Zo(p) && o.found && !c.found) {
        const {width: S, height: b} = o
          , g = {
            x: S / b / 2,
            y: .5
        };
        f.style = _s(U(U({}, h), {}, {
            "transform-origin": "".concat(g.x + p.x / 16, "em ").concat(g.y + p.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: f,
        children: r
    }]
}
function t2(i) {
    let {prefix: r, iconName: o, children: c, attributes: f, symbol: h} = i;
    const p = h === !0 ? "".concat(r, "-").concat(Y.cssPrefix, "-").concat(o) : h;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: U(U({}, f), {}, {
                id: p
            }),
            children: c
        }]
    }]
}
function Wo(i) {
    const {icons: {main: r, mask: o}, prefix: c, iconName: f, transform: h, symbol: p, title: S, maskId: b, titleId: g, extra: E, watchable: R=!1} = i
      , {width: _, height: V} = o.found ? o : r
      , F = ty.includes(c)
      , $ = [Y.replacementClass, f ? "".concat(Y.cssPrefix, "-").concat(f) : ""].filter(Q => E.classes.indexOf(Q) === -1).filter(Q => Q !== "" || !!Q).concat(E.classes).join(" ");
    let L = {
        children: [],
        attributes: U(U({}, E.attributes), {}, {
            "data-prefix": c,
            "data-icon": f,
            class: $,
            role: E.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(_, " ").concat(V)
        })
    };
    const ee = F && !~E.classes.indexOf("fa-fw") ? {
        width: "".concat(_ / V * 16 * .0625, "em")
    } : {};
    R && (L.attributes[nn] = ""),
    S && (L.children.push({
        tag: "title",
        attributes: {
            id: L.attributes["aria-labelledby"] || "title-".concat(g || ni())
        },
        children: [S]
    }),
    delete L.attributes.title);
    const te = U(U({}, L), {}, {
        prefix: c,
        iconName: f,
        main: r,
        mask: o,
        maskId: b,
        transform: h,
        symbol: p,
        styles: U(U({}, ee), E.styles)
    })
      , {children: X, attributes: de} = o.found && r.found ? Ua("generateAbstractMask", te) || {
        children: [],
        attributes: {}
    } : Ua("generateAbstractIcon", te) || {
        children: [],
        attributes: {}
    };
    return te.children = X,
    te.attributes = de,
    p ? t2(te) : e2(te)
}
function wh(i) {
    const {content: r, width: o, height: c, transform: f, title: h, extra: p, watchable: S=!1} = i
      , b = U(U(U({}, p.attributes), h ? {
        title: h
    } : {}), {}, {
        class: p.classes.join(" ")
    });
    S && (b[nn] = "");
    const g = U({}, p.styles);
    Zo(f) && (g.transform = wy({
        transform: f,
        startCentered: !0,
        width: o,
        height: c
    }),
    g["-webkit-transform"] = g.transform);
    const E = _s(g);
    E.length > 0 && (b.style = E);
    const R = [];
    return R.push({
        tag: "span",
        attributes: b,
        children: [r]
    }),
    h && R.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [h]
    }),
    R
}
function a2(i) {
    const {content: r, title: o, extra: c} = i
      , f = U(U(U({}, c.attributes), o ? {
        title: o
    } : {}), {}, {
        class: c.classes.join(" ")
    })
      , h = _s(c.styles);
    h.length > 0 && (f.style = h);
    const p = [];
    return p.push({
        tag: "span",
        attributes: f,
        children: [r]
    }),
    o && p.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [o]
    }),
    p
}
const {styles: oo} = Lt;
function Ro(i) {
    const r = i[0]
      , o = i[1]
      , [c] = i.slice(4);
    let f = null;
    return Array.isArray(c) ? f = {
        tag: "g",
        attributes: {
            class: "".concat(Y.cssPrefix, "-").concat(so.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(so.SECONDARY),
                fill: "currentColor",
                d: c[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(so.PRIMARY),
                fill: "currentColor",
                d: c[1]
            }
        }]
    } : f = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: c
        }
    },
    {
        found: !0,
        width: r,
        height: o,
        icon: f
    }
}
const n2 = {
    found: !1,
    width: 512,
    height: 512
};
function l2(i, r) {
    !xg && !Y.showMissingIcons && i && console.error('Icon with name "'.concat(i, '" and prefix "').concat(r, '" is missing.'))
}
function Mo(i, r) {
    let o = r;
    return r === "fa" && Y.styleDefault !== null && (r = _a()),
    new Promise( (c, f) => {
        if (o === "fa") {
            const h = Ug(i) || {};
            i = h.iconName || i,
            r = h.prefix || r
        }
        if (i && r && oo[r] && oo[r][i]) {
            const h = oo[r][i];
            return c(Ro(h))
        }
        l2(i, r),
        c(U(U({}, n2), {}, {
            icon: Y.showMissingIcons && i ? Ua("missingIconAbstract") || {} : {}
        }))
    }
    )
}
const Rh = () => {}
  , zo = Y.measurePerformance && Ns && Ns.mark && Ns.measure ? Ns : {
    mark: Rh,
    measure: Rh
}
  , $l = 'FA "6.7.2"'
  , i2 = i => (zo.mark("".concat($l, " ").concat(i, " begins")),
() => Hg(i))
  , Hg = i => {
    zo.mark("".concat($l, " ").concat(i, " ends")),
    zo.measure("".concat($l, " ").concat(i), "".concat($l, " ").concat(i, " begins"), "".concat($l, " ").concat(i, " ends"))
}
;
var Jo = {
    begin: i2,
    end: Hg
};
const Es = () => {}
;
function Mh(i) {
    return typeof (i.getAttribute ? i.getAttribute(nn) : null) == "string"
}
function s2(i) {
    const r = i.getAttribute ? i.getAttribute(Ko) : null
      , o = i.getAttribute ? i.getAttribute(Vo) : null;
    return r && o
}
function r2(i) {
    return i && i.classList && i.classList.contains && i.classList.contains(Y.replacementClass)
}
function c2() {
    return Y.autoReplaceSvg === !0 ? Ts.replace : Ts[Y.autoReplaceSvg] || Ts.replace
}
function o2(i) {
    return Ne.createElementNS("http://www.w3.org/2000/svg", i)
}
function u2(i) {
    return Ne.createElement(i)
}
function Bg(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {ceFn: o=i.tag === "svg" ? o2 : u2} = r;
    if (typeof i == "string")
        return Ne.createTextNode(i);
    const c = o(i.tag);
    return Object.keys(i.attributes || []).forEach(function(h) {
        c.setAttribute(h, i.attributes[h])
    }),
    (i.children || []).forEach(function(h) {
        c.appendChild(Bg(h, {
            ceFn: o
        }))
    }),
    c
}
function f2(i) {
    let r = " ".concat(i.outerHTML, " ");
    return r = "".concat(r, "Font Awesome fontawesome.com "),
    r
}
const Ts = {
    replace: function(i) {
        const r = i[0];
        if (r.parentNode)
            if (i[1].forEach(o => {
                r.parentNode.insertBefore(Bg(o), r)
            }
            ),
            r.getAttribute(nn) === null && Y.keepOriginalSource) {
                let o = Ne.createComment(f2(r));
                r.parentNode.replaceChild(o, r)
            } else
                r.remove()
    },
    nest: function(i) {
        const r = i[0]
          , o = i[1];
        if (~Qo(r).indexOf(Y.replacementClass))
            return Ts.replace(i);
        const c = new RegExp("".concat(Y.cssPrefix, "-.*"));
        if (delete o[0].attributes.id,
        o[0].attributes.class) {
            const h = o[0].attributes.class.split(" ").reduce( (p, S) => (S === Y.replacementClass || S.match(c) ? p.toSvg.push(S) : p.toNode.push(S),
            p), {
                toNode: [],
                toSvg: []
            });
            o[0].attributes.class = h.toSvg.join(" "),
            h.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", h.toNode.join(" "))
        }
        const f = o.map(h => ri(h)).join(`
`);
        r.setAttribute(nn, ""),
        r.innerHTML = f
    }
};
function zh(i) {
    i()
}
function kg(i, r) {
    const o = typeof r == "function" ? r : Es;
    if (i.length === 0)
        o();
    else {
        let c = zh;
        Y.mutateApproach === hy && (c = Da.requestAnimationFrame || zh),
        c( () => {
            const f = c2()
              , h = Jo.begin("mutate");
            i.map(f),
            h(),
            o()
        }
        )
    }
}
let $o = !1;
function Gg() {
    $o = !0
}
function Do() {
    $o = !1
}
let ws = null;
function Dh(i) {
    if (!bh || !Y.observeMutations)
        return;
    const {treeCallback: r=Es, nodeCallback: o=Es, pseudoElementsCallback: c=Es, observeMutationsRoot: f=Ne} = i;
    ws = new bh(h => {
        if ($o)
            return;
        const p = _a();
        $n(h).forEach(S => {
            if (S.type === "childList" && S.addedNodes.length > 0 && !Mh(S.addedNodes[0]) && (Y.searchPseudoElements && c(S.target),
            r(S.target)),
            S.type === "attributes" && S.target.parentNode && Y.searchPseudoElements && c(S.target.parentNode),
            S.type === "attributes" && Mh(S.target) && ~xy.indexOf(S.attributeName))
                if (S.attributeName === "class" && s2(S.target)) {
                    const {prefix: b, iconName: g} = Ls(Qo(S.target));
                    S.target.setAttribute(Ko, b || p),
                    g && S.target.setAttribute(Vo, g)
                } else
                    r2(S.target) && o(S.target)
        }
        )
    }
    ),
    na && ws.observe(f, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
    })
}
function d2() {
    ws && ws.disconnect()
}
function m2(i) {
    const r = i.getAttribute("style");
    let o = [];
    return r && (o = r.split(";").reduce( (c, f) => {
        const h = f.split(":")
          , p = h[0]
          , S = h.slice(1);
        return p && S.length > 0 && (c[p] = S.join(":").trim()),
        c
    }
    , {})),
    o
}
function h2(i) {
    const r = i.getAttribute("data-prefix")
      , o = i.getAttribute("data-icon")
      , c = i.innerText !== void 0 ? i.innerText.trim() : "";
    let f = Ls(Qo(i));
    return f.prefix || (f.prefix = _a()),
    r && o && (f.prefix = r,
    f.iconName = o),
    f.iconName && f.prefix || (f.prefix && c.length > 0 && (f.iconName = By(f.prefix, i.innerText) || Fo(f.prefix, To(i.innerText))),
    !f.iconName && Y.autoFetchSvg && i.firstChild && i.firstChild.nodeType === Node.TEXT_NODE && (f.iconName = i.firstChild.data)),
    f
}
function g2(i) {
    const r = $n(i.attributes).reduce( (f, h) => (f.name !== "class" && f.name !== "style" && (f[h.name] = h.value),
    f), {})
      , o = i.getAttribute("title")
      , c = i.getAttribute("data-fa-title-id");
    return Y.autoA11y && (o ? r["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(c || ni()) : (r["aria-hidden"] = "true",
    r.focusable = "false")),
    r
}
function p2() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: Ut,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function _h(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    };
    const {iconName: o, prefix: c, rest: f} = h2(i)
      , h = g2(i)
      , p = jo("parseNodeAttributes", {}, i);
    let S = r.styleParser ? m2(i) : [];
    return U({
        iconName: o,
        title: i.getAttribute("title"),
        titleId: i.getAttribute("data-fa-title-id"),
        prefix: c,
        transform: Ut,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: f,
            styles: S,
            attributes: h
        }
    }, p)
}
const {styles: v2} = Lt;
function Yg(i) {
    const r = Y.autoReplaceSvg === "nest" ? _h(i, {
        styleParser: !1
    }) : _h(i);
    return ~r.extra.classes.indexOf(Ag) ? Ua("generateLayersText", i, r) : Ua("generateSvgReplacementMutation", i, r)
}
function y2() {
    return [...$v, ...xo]
}
function Uh(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!na)
        return Promise.resolve();
    const o = Ne.documentElement.classList
      , c = E => o.add("".concat(Ah, "-").concat(E))
      , f = E => o.remove("".concat(Ah, "-").concat(E))
      , h = Y.autoFetchSvg ? y2() : gg.concat(Object.keys(v2));
    h.includes("fa") || h.push("fa");
    const p = [".".concat(Ag, ":not([").concat(nn, "])")].concat(h.map(E => ".".concat(E, ":not([").concat(nn, "])"))).join(", ");
    if (p.length === 0)
        return Promise.resolve();
    let S = [];
    try {
        S = $n(i.querySelectorAll(p))
    } catch {}
    if (S.length > 0)
        c("pending"),
        f("complete");
    else
        return Promise.resolve();
    const b = Jo.begin("onTree")
      , g = S.reduce( (E, R) => {
        try {
            const _ = Yg(R);
            _ && E.push(_)
        } catch (_) {
            xg || _.name === "MissingIcon" && console.error(_)
        }
        return E
    }
    , []);
    return new Promise( (E, R) => {
        Promise.all(g).then(_ => {
            kg(_, () => {
                c("active"),
                c("complete"),
                f("pending"),
                typeof r == "function" && r(),
                b(),
                E()
            }
            )
        }
        ).catch(_ => {
            b(),
            R(_)
        }
        )
    }
    )
}
function b2(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Yg(i).then(o => {
        o && kg([o], r)
    }
    )
}
function x2(i) {
    return function(r) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const c = (r || {}).icon ? r : wo(r || {});
        let {mask: f} = o;
        return f && (f = (f || {}).icon ? f : wo(f || {})),
        i(c, U(U({}, o), {}, {
            mask: f
        }))
    }
}
const S2 = function(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {transform: o=Ut, symbol: c=!1, mask: f=null, maskId: h=null, title: p=null, titleId: S=null, classes: b=[], attributes: g={}, styles: E={}} = r;
    if (!i)
        return;
    const {prefix: R, iconName: _, icon: V} = i;
    return qs(U({
        type: "icon"
    }, i), () => (ln("beforeDOMElementCreation", {
        iconDefinition: i,
        params: r
    }),
    Y.autoA11y && (p ? g["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(S || ni()) : (g["aria-hidden"] = "true",
    g.focusable = "false")),
    Wo({
        icons: {
            main: Ro(V),
            mask: f ? Ro(f.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
            }
        },
        prefix: R,
        iconName: _,
        transform: U(U({}, Ut), o),
        symbol: c,
        title: p,
        maskId: h,
        titleId: S,
        extra: {
            attributes: g,
            styles: E,
            classes: b
        }
    })))
};
var A2 = {
    mixout() {
        return {
            icon: x2(S2)
        }
    },
    hooks() {
        return {
            mutationObserverCallbacks(i) {
                return i.treeCallback = Uh,
                i.nodeCallback = b2,
                i
            }
        }
    },
    provides(i) {
        i.i2svg = function(r) {
            const {node: o=Ne, callback: c= () => {}
            } = r;
            return Uh(o, c)
        }
        ,
        i.generateSvgReplacementMutation = function(r, o) {
            const {iconName: c, title: f, titleId: h, prefix: p, transform: S, symbol: b, mask: g, maskId: E, extra: R} = o;
            return new Promise( (_, V) => {
                Promise.all([Mo(c, p), g.iconName ? Mo(g.iconName, g.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(F => {
                    let[$,L] = F;
                    _([r, Wo({
                        icons: {
                            main: $,
                            mask: L
                        },
                        prefix: p,
                        iconName: c,
                        transform: S,
                        symbol: b,
                        maskId: E,
                        title: f,
                        titleId: h,
                        extra: R,
                        watchable: !0
                    })])
                }
                ).catch(V)
            }
            )
        }
        ,
        i.generateAbstractIcon = function(r) {
            let {children: o, attributes: c, main: f, transform: h, styles: p} = r;
            const S = _s(p);
            S.length > 0 && (c.style = S);
            let b;
            return Zo(h) && (b = Ua("generateAbstractTransformGrouping", {
                main: f,
                transform: h,
                containerWidth: f.width,
                iconWidth: f.width
            })),
            o.push(b || f.icon),
            {
                children: o,
                attributes: c
            }
        }
    }
}
  , N2 = {
    mixout() {
        return {
            layer(i) {
                let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {classes: o=[]} = r;
                return qs({
                    type: "layer"
                }, () => {
                    ln("beforeDOMElementCreation", {
                        assembler: i,
                        params: r
                    });
                    let c = [];
                    return i(f => {
                        Array.isArray(f) ? f.map(h => {
                            c = c.concat(h.abstract)
                        }
                        ) : c = c.concat(f.abstract)
                    }
                    ),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(Y.cssPrefix, "-layers"), ...o].join(" ")
                        },
                        children: c
                    }]
                }
                )
            }
        }
    }
}
  , O2 = {
    mixout() {
        return {
            counter(i) {
                let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {title: o=null, classes: c=[], attributes: f={}, styles: h={}} = r;
                return qs({
                    type: "counter",
                    content: i
                }, () => (ln("beforeDOMElementCreation", {
                    content: i,
                    params: r
                }),
                a2({
                    content: i.toString(),
                    title: o,
                    extra: {
                        attributes: f,
                        styles: h,
                        classes: ["".concat(Y.cssPrefix, "-layers-counter"), ...c]
                    }
                })))
            }
        }
    }
}
  , E2 = {
    mixout() {
        return {
            text(i) {
                let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {transform: o=Ut, title: c=null, classes: f=[], attributes: h={}, styles: p={}} = r;
                return qs({
                    type: "text",
                    content: i
                }, () => (ln("beforeDOMElementCreation", {
                    content: i,
                    params: r
                }),
                wh({
                    content: i,
                    transform: U(U({}, Ut), o),
                    title: c,
                    extra: {
                        attributes: h,
                        styles: p,
                        classes: ["".concat(Y.cssPrefix, "-layers-text"), ...f]
                    }
                })))
            }
        }
    },
    provides(i) {
        i.generateLayersText = function(r, o) {
            const {title: c, transform: f, extra: h} = o;
            let p = null
              , S = null;
            if (mg) {
                const b = parseInt(getComputedStyle(r).fontSize, 10)
                  , g = r.getBoundingClientRect();
                p = g.width / b,
                S = g.height / b
            }
            return Y.autoA11y && !c && (h.attributes["aria-hidden"] = "true"),
            Promise.resolve([r, wh({
                content: r.innerHTML,
                width: p,
                height: S,
                transform: f,
                title: c,
                extra: h,
                watchable: !0
            })])
        }
    }
};
const T2 = new RegExp('"',"ug")
  , Lh = [1105920, 1112319]
  , qh = U(U(U(U({}, {
    FontAwesome: {
        normal: "fas",
        400: "fas"
    }
}), Fv), dy), iy)
  , _o = Object.keys(qh).reduce( (i, r) => (i[r.toLowerCase()] = qh[r],
i), {})
  , C2 = Object.keys(_o).reduce( (i, r) => {
    const o = _o[r];
    return i[r] = o[900] || [...Object.entries(o)][0][1],
    i
}
, {});
function j2(i) {
    const r = i.replace(T2, "")
      , o = _y(r, 0)
      , c = o >= Lh[0] && o <= Lh[1]
      , f = r.length === 2 ? r[0] === r[1] : !1;
    return {
        value: To(f ? r[0] : r),
        isSecondary: c || f
    }
}
function w2(i, r) {
    const o = i.replace(/^['"]|['"]$/g, "").toLowerCase()
      , c = parseInt(r)
      , f = isNaN(c) ? "normal" : c;
    return (_o[o] || {})[f] || C2[o]
}
function Hh(i, r) {
    const o = "".concat(my).concat(r.replace(":", "-"));
    return new Promise( (c, f) => {
        if (i.getAttribute(o) !== null)
            return c();
        const p = $n(i.children).filter(_ => _.getAttribute(Ao) === r)[0]
          , S = Da.getComputedStyle(i, r)
          , b = S.getPropertyValue("font-family")
          , g = b.match(yy)
          , E = S.getPropertyValue("font-weight")
          , R = S.getPropertyValue("content");
        if (p && !g)
            return i.removeChild(p),
            c();
        if (g && R !== "none" && R !== "") {
            const _ = S.getPropertyValue("content");
            let V = w2(b, E);
            const {value: F, isSecondary: $} = j2(_)
              , L = g[0].startsWith("FontAwesome");
            let ee = Fo(V, F)
              , te = ee;
            if (L) {
                const X = ky(F);
                X.iconName && X.prefix && (ee = X.iconName,
                V = X.prefix)
            }
            if (ee && !$ && (!p || p.getAttribute(Ko) !== V || p.getAttribute(Vo) !== te)) {
                i.setAttribute(o, te),
                p && i.removeChild(p);
                const X = p2()
                  , {extra: de} = X;
                de.attributes[Ao] = r,
                Mo(ee, V).then(Q => {
                    const We = Wo(U(U({}, X), {}, {
                        icons: {
                            main: Q,
                            mask: Lg()
                        },
                        prefix: V,
                        iconName: te,
                        extra: de,
                        watchable: !0
                    }))
                      , ke = Ne.createElementNS("http://www.w3.org/2000/svg", "svg");
                    r === "::before" ? i.insertBefore(ke, i.firstChild) : i.appendChild(ke),
                    ke.outerHTML = We.map(Je => ri(Je)).join(`
`),
                    i.removeAttribute(o),
                    c()
                }
                ).catch(f)
            } else
                c()
        } else
            c()
    }
    )
}
function R2(i) {
    return Promise.all([Hh(i, "::before"), Hh(i, "::after")])
}
function M2(i) {
    return i.parentNode !== document.head && !~gy.indexOf(i.tagName.toUpperCase()) && !i.getAttribute(Ao) && (!i.parentNode || i.parentNode.tagName !== "svg")
}
function Bh(i) {
    if (na)
        return new Promise( (r, o) => {
            const c = $n(i.querySelectorAll("*")).filter(M2).map(R2)
              , f = Jo.begin("searchPseudoElements");
            Gg(),
            Promise.all(c).then( () => {
                f(),
                Do(),
                r()
            }
            ).catch( () => {
                f(),
                Do(),
                o()
            }
            )
        }
        )
}
var z2 = {
    hooks() {
        return {
            mutationObserverCallbacks(i) {
                return i.pseudoElementsCallback = Bh,
                i
            }
        }
    },
    provides(i) {
        i.pseudoElements2svg = function(r) {
            const {node: o=Ne} = r;
            Y.searchPseudoElements && Bh(o)
        }
    }
};
let kh = !1;
var D2 = {
    mixout() {
        return {
            dom: {
                unwatch() {
                    Gg(),
                    kh = !0
                }
            }
        }
    },
    hooks() {
        return {
            bootstrap() {
                Dh(jo("mutationObserverCallbacks", {}))
            },
            noAuto() {
                d2()
            },
            watch(i) {
                const {observeMutationsRoot: r} = i;
                kh ? Do() : Dh(jo("mutationObserverCallbacks", {
                    observeMutationsRoot: r
                }))
            }
        }
    }
};
const Gh = i => {
    let r = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return i.toLowerCase().split(" ").reduce( (o, c) => {
        const f = c.toLowerCase().split("-")
          , h = f[0];
        let p = f.slice(1).join("-");
        if (h && p === "h")
            return o.flipX = !0,
            o;
        if (h && p === "v")
            return o.flipY = !0,
            o;
        if (p = parseFloat(p),
        isNaN(p))
            return o;
        switch (h) {
        case "grow":
            o.size = o.size + p;
            break;
        case "shrink":
            o.size = o.size - p;
            break;
        case "left":
            o.x = o.x - p;
            break;
        case "right":
            o.x = o.x + p;
            break;
        case "up":
            o.y = o.y - p;
            break;
        case "down":
            o.y = o.y + p;
            break;
        case "rotate":
            o.rotate = o.rotate + p;
            break
        }
        return o
    }
    , r)
}
;
var _2 = {
    mixout() {
        return {
            parse: {
                transform: i => Gh(i)
            }
        }
    },
    hooks() {
        return {
            parseNodeAttributes(i, r) {
                const o = r.getAttribute("data-fa-transform");
                return o && (i.transform = Gh(o)),
                i
            }
        }
    },
    provides(i) {
        i.generateAbstractTransformGrouping = function(r) {
            let {main: o, transform: c, containerWidth: f, iconWidth: h} = r;
            const p = {
                transform: "translate(".concat(f / 2, " 256)")
            }
              , S = "translate(".concat(c.x * 32, ", ").concat(c.y * 32, ") ")
              , b = "scale(".concat(c.size / 16 * (c.flipX ? -1 : 1), ", ").concat(c.size / 16 * (c.flipY ? -1 : 1), ") ")
              , g = "rotate(".concat(c.rotate, " 0 0)")
              , E = {
                transform: "".concat(S, " ").concat(b, " ").concat(g)
            }
              , R = {
                transform: "translate(".concat(h / 2 * -1, " -256)")
            }
              , _ = {
                outer: p,
                inner: E,
                path: R
            };
            return {
                tag: "g",
                attributes: U({}, _.outer),
                children: [{
                    tag: "g",
                    attributes: U({}, _.inner),
                    children: [{
                        tag: o.icon.tag,
                        children: o.icon.children,
                        attributes: U(U({}, o.icon.attributes), _.path)
                    }]
                }]
            }
        }
    }
};
const uo = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function Yh(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return i.attributes && (i.attributes.fill || r) && (i.attributes.fill = "black"),
    i
}
function U2(i) {
    return i.tag === "g" ? i.children : [i]
}
var L2 = {
    hooks() {
        return {
            parseNodeAttributes(i, r) {
                const o = r.getAttribute("data-fa-mask")
                  , c = o ? Ls(o.split(" ").map(f => f.trim())) : Lg();
                return c.prefix || (c.prefix = _a()),
                i.mask = c,
                i.maskId = r.getAttribute("data-fa-mask-id"),
                i
            }
        }
    },
    provides(i) {
        i.generateAbstractMask = function(r) {
            let {children: o, attributes: c, main: f, mask: h, maskId: p, transform: S} = r;
            const {width: b, icon: g} = f
              , {width: E, icon: R} = h
              , _ = jy({
                transform: S,
                containerWidth: E,
                iconWidth: b
            })
              , V = {
                tag: "rect",
                attributes: U(U({}, uo), {}, {
                    fill: "white"
                })
            }
              , F = g.children ? {
                children: g.children.map(Yh)
            } : {}
              , $ = {
                tag: "g",
                attributes: U({}, _.inner),
                children: [Yh(U({
                    tag: g.tag,
                    attributes: U(U({}, g.attributes), _.path)
                }, F))]
            }
              , L = {
                tag: "g",
                attributes: U({}, _.outer),
                children: [$]
            }
              , ee = "mask-".concat(p || ni())
              , te = "clip-".concat(p || ni())
              , X = {
                tag: "mask",
                attributes: U(U({}, uo), {}, {
                    id: ee,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [V, L]
            }
              , de = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: te
                    },
                    children: U2(R)
                }, X]
            };
            return o.push(de, {
                tag: "rect",
                attributes: U({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(te, ")"),
                    mask: "url(#".concat(ee, ")")
                }, uo)
            }),
            {
                children: o,
                attributes: c
            }
        }
    }
}
  , q2 = {
    provides(i) {
        let r = !1;
        Da.matchMedia && (r = Da.matchMedia("(prefers-reduced-motion: reduce)").matches),
        i.missingIconAbstract = function() {
            const o = []
              , c = {
                fill: "currentColor"
            }
              , f = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            o.push({
                tag: "path",
                attributes: U(U({}, c), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            const h = U(U({}, f), {}, {
                attributeName: "opacity"
            })
              , p = {
                tag: "circle",
                attributes: U(U({}, c), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return r || p.children.push({
                tag: "animate",
                attributes: U(U({}, f), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: U(U({}, h), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            o.push(p),
            o.push({
                tag: "path",
                attributes: U(U({}, c), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: r ? [] : [{
                    tag: "animate",
                    attributes: U(U({}, h), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            r || o.push({
                tag: "path",
                attributes: U(U({}, c), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: U(U({}, h), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: o
            }
        }
    }
}
  , H2 = {
    hooks() {
        return {
            parseNodeAttributes(i, r) {
                const o = r.getAttribute("data-fa-symbol")
                  , c = o === null ? !1 : o === "" ? !0 : o;
                return i.symbol = c,
                i
            }
        }
    }
}
  , B2 = [My, A2, N2, O2, E2, z2, D2, _2, L2, q2, H2];
Fy(B2, {
    mixoutsTo: ht
});
ht.noAuto;
ht.config;
ht.library;
ht.dom;
const Uo = ht.parse;
ht.findIconDefinition;
ht.toHtml;
const k2 = ht.icon;
ht.layer;
ht.text;
ht.counter;
var fo = {
    exports: {}
}, mo, Kh;
function G2() {
    if (Kh)
        return mo;
    Kh = 1;
    var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return mo = i,
    mo
}
var ho, Vh;
function Y2() {
    if (Vh)
        return ho;
    Vh = 1;
    var i = G2();
    function r() {}
    function o() {}
    return o.resetWarningCache = r,
    ho = function() {
        function c(p, S, b, g, E, R) {
            if (R !== i) {
                var _ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw _.name = "Invariant Violation",
                _
            }
        }
        c.isRequired = c;
        function f() {
            return c
        }
        var h = {
            array: c,
            bigint: c,
            bool: c,
            func: c,
            number: c,
            object: c,
            string: c,
            symbol: c,
            any: c,
            arrayOf: f,
            element: c,
            elementType: c,
            instanceOf: f,
            node: c,
            objectOf: f,
            oneOf: f,
            oneOfType: f,
            shape: f,
            exact: f,
            checkPropTypes: o,
            resetWarningCache: r
        };
        return h.PropTypes = h,
        h
    }
    ,
    ho
}
var Xh;
function K2() {
    return Xh || (Xh = 1,
    fo.exports = Y2()()),
    fo.exports
}
var V2 = K2();
const ce = Fh(V2);
function Qh(i, r) {
    var o = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        r && (c = c.filter(function(f) {
            return Object.getOwnPropertyDescriptor(i, f).enumerable
        })),
        o.push.apply(o, c)
    }
    return o
}
function _t(i) {
    for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Qh(Object(o), !0).forEach(function(c) {
            Pn(i, c, o[c])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : Qh(Object(o)).forEach(function(c) {
            Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(o, c))
        })
    }
    return i
}
function Rs(i) {
    "@babel/helpers - typeof";
    return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r
    }
    : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }
    ,
    Rs(i)
}
function Pn(i, r, o) {
    return r in i ? Object.defineProperty(i, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = o,
    i
}
function X2(i, r) {
    if (i == null)
        return {};
    var o = {}, c = Object.keys(i), f, h;
    for (h = 0; h < c.length; h++)
        f = c[h],
        !(r.indexOf(f) >= 0) && (o[f] = i[f]);
    return o
}
function Q2(i, r) {
    if (i == null)
        return {};
    var o = X2(i, r), c, f;
    if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(i);
        for (f = 0; f < h.length; f++)
            c = h[f],
            !(r.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(i, c) && (o[c] = i[c])
    }
    return o
}
function Lo(i) {
    return Z2(i) || P2(i) || F2(i) || W2()
}
function Z2(i) {
    if (Array.isArray(i))
        return qo(i)
}
function P2(i) {
    if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
        return Array.from(i)
}
function F2(i, r) {
    if (i) {
        if (typeof i == "string")
            return qo(i, r);
        var o = Object.prototype.toString.call(i).slice(8, -1);
        if (o === "Object" && i.constructor && (o = i.constructor.name),
        o === "Map" || o === "Set")
            return Array.from(i);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
            return qo(i, r)
    }
}
function qo(i, r) {
    (r == null || r > i.length) && (r = i.length);
    for (var o = 0, c = new Array(r); o < r; o++)
        c[o] = i[o];
    return c
}
function W2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function J2(i) {
    var r, o = i.beat, c = i.fade, f = i.beatFade, h = i.bounce, p = i.shake, S = i.flash, b = i.spin, g = i.spinPulse, E = i.spinReverse, R = i.pulse, _ = i.fixedWidth, V = i.inverse, F = i.border, $ = i.listItem, L = i.flip, ee = i.size, te = i.rotation, X = i.pull, de = (r = {
        "fa-beat": o,
        "fa-fade": c,
        "fa-beat-fade": f,
        "fa-bounce": h,
        "fa-shake": p,
        "fa-flash": S,
        "fa-spin": b,
        "fa-spin-reverse": E,
        "fa-spin-pulse": g,
        "fa-pulse": R,
        "fa-fw": _,
        "fa-inverse": V,
        "fa-border": F,
        "fa-li": $,
        "fa-flip": L === !0,
        "fa-flip-horizontal": L === "horizontal" || L === "both",
        "fa-flip-vertical": L === "vertical" || L === "both"
    },
    Pn(r, "fa-".concat(ee), typeof ee < "u" && ee !== null),
    Pn(r, "fa-rotate-".concat(te), typeof te < "u" && te !== null && te !== 0),
    Pn(r, "fa-pull-".concat(X), typeof X < "u" && X !== null),
    Pn(r, "fa-swap-opacity", i.swapOpacity),
    r);
    return Object.keys(de).map(function(Q) {
        return de[Q] ? Q : null
    }).filter(function(Q) {
        return Q
    })
}
function $2(i) {
    return i = i - 0,
    i === i
}
function Kg(i) {
    return $2(i) ? i : (i = i.replace(/[\-_\s]+(.)?/g, function(r, o) {
        return o ? o.toUpperCase() : ""
    }),
    i.substr(0, 1).toLowerCase() + i.substr(1))
}
var I2 = ["style"];
function eb(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
function tb(i) {
    return i.split(";").map(function(r) {
        return r.trim()
    }).filter(function(r) {
        return r
    }).reduce(function(r, o) {
        var c = o.indexOf(":")
          , f = Kg(o.slice(0, c))
          , h = o.slice(c + 1).trim();
        return f.startsWith("webkit") ? r[eb(f)] = h : r[f] = h,
        r
    }, {})
}
function Vg(i, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof r == "string")
        return r;
    var c = (r.children || []).map(function(b) {
        return Vg(i, b)
    })
      , f = Object.keys(r.attributes || {}).reduce(function(b, g) {
        var E = r.attributes[g];
        switch (g) {
        case "class":
            b.attrs.className = E,
            delete r.attributes.class;
            break;
        case "style":
            b.attrs.style = tb(E);
            break;
        default:
            g.indexOf("aria-") === 0 || g.indexOf("data-") === 0 ? b.attrs[g.toLowerCase()] = E : b.attrs[Kg(g)] = E
        }
        return b
    }, {
        attrs: {}
    })
      , h = o.style
      , p = h === void 0 ? {} : h
      , S = Q2(o, I2);
    return f.attrs.style = _t(_t({}, f.attrs.style), p),
    i.apply(void 0, [r.tag, _t(_t({}, f.attrs), S)].concat(Lo(c)))
}
var Xg = !1;
try {
    Xg = !0
} catch {}
function ab() {
    if (!Xg && console && typeof console.error == "function") {
        var i;
        (i = console).error.apply(i, arguments)
    }
}
function Zh(i) {
    if (i && Rs(i) === "object" && i.prefix && i.iconName && i.icon)
        return i;
    if (Uo.icon)
        return Uo.icon(i);
    if (i === null)
        return null;
    if (i && Rs(i) === "object" && i.prefix && i.iconName)
        return i;
    if (Array.isArray(i) && i.length === 2)
        return {
            prefix: i[0],
            iconName: i[1]
        };
    if (typeof i == "string")
        return {
            prefix: "fas",
            iconName: i
        }
}
function go(i, r) {
    return Array.isArray(r) && r.length > 0 || !Array.isArray(r) && r ? Pn({}, i, r) : {}
}
var Ph = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
}
  , Ra = Bo.forwardRef(function(i, r) {
    var o = _t(_t({}, Ph), i)
      , c = o.icon
      , f = o.mask
      , h = o.symbol
      , p = o.className
      , S = o.title
      , b = o.titleId
      , g = o.maskId
      , E = Zh(c)
      , R = go("classes", [].concat(Lo(J2(o)), Lo((p || "").split(" "))))
      , _ = go("transform", typeof o.transform == "string" ? Uo.transform(o.transform) : o.transform)
      , V = go("mask", Zh(f))
      , F = k2(E, _t(_t(_t(_t({}, R), _), V), {}, {
        symbol: h,
        title: S,
        titleId: b,
        maskId: g
    }));
    if (!F)
        return ab("Could not find icon", E),
        null;
    var $ = F.abstract
      , L = {
        ref: r
    };
    return Object.keys(o).forEach(function(ee) {
        Ph.hasOwnProperty(ee) || (L[ee] = o[ee])
    }),
    nb($[0], L)
});
Ra.displayName = "FontAwesomeIcon";
Ra.propTypes = {
    beat: ce.bool,
    border: ce.bool,
    beatFade: ce.bool,
    bounce: ce.bool,
    className: ce.string,
    fade: ce.bool,
    flash: ce.bool,
    mask: ce.oneOfType([ce.object, ce.array, ce.string]),
    maskId: ce.string,
    fixedWidth: ce.bool,
    inverse: ce.bool,
    flip: ce.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: ce.oneOfType([ce.object, ce.array, ce.string]),
    listItem: ce.bool,
    pull: ce.oneOf(["right", "left"]),
    pulse: ce.bool,
    rotation: ce.oneOf([0, 90, 180, 270]),
    shake: ce.bool,
    size: ce.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: ce.bool,
    spinPulse: ce.bool,
    spinReverse: ce.bool,
    symbol: ce.oneOfType([ce.bool, ce.string]),
    title: ce.string,
    titleId: ce.string,
    transform: ce.oneOfType([ce.string, ce.object]),
    swapOpacity: ce.bool
};
var nb = Vg.bind(null, Bo.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Qg = {
    prefix: "fab",
    iconName: "threads",
    icon: [448, 512, [], "e618", "M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"]
}
  , Zg = {
    prefix: "fab",
    iconName: "tiktok",
    icon: [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]
}
  , Pg = {
    prefix: "fab",
    iconName: "linkedin",
    icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
}
  , Fg = {
    prefix: "fab",
    iconName: "instagram",
    icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}
  , Wg = {
    prefix: "fab",
    iconName: "facebook",
    icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}
  , Jg = {
    prefix: "fab",
    iconName: "youtube",
    icon: [576, 512, [61802], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]
}
  , $g = {
    prefix: "fab",
    iconName: "twitter",
    icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}
  , Ig = {
    prefix: "fab",
    iconName: "pinterest",
    icon: [496, 512, [], "f0d2", "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]
};
function lb() {
    const i = [{
        icon: Wg,
        url: "https://facebook.com/CyberTechOcean"
    }, {
        icon: Zg,
        url: "https://tiktok.com/@CyberTechOcean"
    }, {
        icon: Jg,
        url: "https://youtube.com/@CyberTechOcean"
    }, {
        icon: Fg,
        url: "https://instagram.com/CyberTechOcean"
    }, {
        icon: $g,
        url: "https://twitter.com/CyberTechOcean"
    }, {
        icon: Ig,
        url: "https://pinterest.com/CyberTechOcean"
    }, {
        icon: Pg,
        url: "https://linkedin.com/company/CyberTechOcean"
    }, {
        icon: Qg,
        url: "https://threads.net/@CyberTechOcean"
    }];
    return d.jsx("footer", {
        className: "bg-gray-900 text-white py-8",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [d.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [d.jsxs("div", {
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold mb-4 text-red-600",
                        children: "CyberTechOcean"
                    }), d.jsx("p", {
                        children: "Your one-stop cyber café solution. We provide Web Development, Career Assistance, Government  Services (eCitizen), Graphic Design, Digital Marketing, Academic Writing, and Data Analysis."
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Quick Links"
                    }), d.jsxs("ul", {
                        className: "space-y-2",
                        children: [d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/",
                                className: "hover:text-red-600 transition-colors",
                                children: "Home"
                            })
                        }), d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/about",
                                className: "hover:text-red-600 transition-colors",
                                children: "About"
                            })
                        }), d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/services",
                                className: "hover:text-red-600 transition-colors",
                                children: "Services"
                            })
                        }), d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/projects",
                                className: "hover:text-red-600 transition-colors",
                                children: "Projects"
                            })
                        }), d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/testimonials",
                                className: "hover:text-red-600 transition-colors",
                                children: "Testimonials"
                            })
                        }), d.jsx("li", {
                            children: d.jsx(Se, {
                                to: "/contact",
                                className: "hover:text-red-600 transition-colors",
                                children: "Contact"
                            })
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Contact"
                    }), d.jsxs("p", {
                        children: ["Email:", d.jsx("a", {
                            href: "mailto:CyberTechOcean@gmail.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-white hover:bg-green-600 transition-colors",
                            children: "CyberTechOcean@gmail.com"
                        })]
                    }), d.jsxs("p", {
                        children: ["WhatsApp:", d.jsx("a", {
                            href: "https://wa.me/254706943651?text=Hello%20*CyberTechOcean*%20%F0%9F%91%8B%F0%9F%8F%BB",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-white hover:bg-green-600 transition-colors",
                            children: "+254 706 943 651"
                        })]
                    }), d.jsx("p", {
                        children: "Location: Ruaraka, Nairobi, Kenya"
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Follow Us"
                    }), d.jsx("div", {
                        className: "flex space-x-4",
                        children: i.map( (r, o) => d.jsx("a", {
                            href: r.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-blue-400",
                            children: d.jsx(Ra, {
                                icon: r.icon,
                                size: "lg"
                            })
                        }, o))
                    })]
                })]
            }), d.jsx("div", {
                className: "mt-8 text-center",
                children: d.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " CyberTechOcean. All rights reserved."]
                })
            })]
        })
    })
}
function ib() {
    return d.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [d.jsx(Bv, {}), d.jsx("main", {
            className: "flex-1",
            children: d.jsx(Tv, {})
        }), d.jsx(lb, {}), d.jsx("a", {
            href: "https://wa.me/254706943651?text=Hello%20*CyberTechOcean*%20%F0%9F%91%8B%F0%9F%8F%BB",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "fixed bottom-4 left-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors",
            children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                children: d.jsx("path", {
                    d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                })
            })
        })]
    })
}
const Io = [{
    id: "portfolio-websites",
    name: "Portfolio & Personal Websites",
    category: "Website Development",
    description: "Professional websites for freelancers, artists, consultants, and job seekers with CV, Bio, Projects, Contact forms, and Galleries.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80",
    details: `
      Our Portfolio & Personal Website service includes:
      • Clean, modern design optimized for your personal brand
      • Integration of CV, Biography, and Project showcases
      • Professional contact forms and gallery sections
      • Blog integration capabilities
      • LinkedIn and social media connectivity
      • Mobile-responsive design
      • SEO optimization
      • Analytics integration
      
      Technologies:
      • HTML/CSS/JavaScript
      • React
      • WordPress
      • Django
      
      Perfect for:
      • Freelancers
      • Artists
      • Consultants
      • Job seekers
      • Personal branding
    `
}, {
    id: "ecommerce-websites",
    name: "E-commerce Website",
    category: "Website Development",
    description: "Complete online stores with product catalogs, payment integration (M-Pesa, card), and order tracking systems.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    details: `
      Our E-commerce Website solution includes:
      • Professional product catalog system
      • Secure payment integration
        - M-Pesa integration
        - Card payment processing
      • Order management system
      • Inventory tracking
      • Customer accounts
      • Mobile-responsive design
      • Admin dashboard
      • Analytics and reporting
      
      Perfect for:
      • Boutiques
      • Electronics sellers
      • Supermarkets
      • Online retailers
    `
}, {
    id: "healthcare-websites",
    name: "Healthcare & Clinic Websites",
    category: "Website Development",
    description: "Professional medical websites with appointment booking, doctor profiles, patient portals, and health blogs.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    details: `
      Our Healthcare Website solution includes:
      • Online appointment booking system
      • Doctor/Staff profiles
      • Patient portals
      • Health blog integration
      • Medical service listings
      • Emergency contact features
      • HIPAA compliance considerations
      • Mobile-responsive design
      
      Perfect for:
      • Hospitals
      • Clinics
      • Pharmacies
      • Private practitioners
    `
}, {
    id: "institution-websites",
    name: "School/Church/Institution Websites",
    category: "Website Development",
    description: "Comprehensive websites for educational institutions and churches with custom portals, event calendars, and content management.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    details: `
      Our Institution Website features include:
      
      For Schools:
      • Admissions portal
      • Student dashboards
      • Class/teacher timetables
      • Event calendar
      • Results access portal
      • Parent communication system
      
      For Churches:
      • Sermon uploads
      • Church group management
      • Donation systems
      • Event calendars
      • Member portals
      
      Common Features:
      • Audio/video integration
      • Newsletter system
      • Secure admin panels
      • Mobile responsiveness
      • Content management system
    `
}, {
    id: "corporate-ngo-websites",
    name: "Corporate & NGO Websites",
    category: "Website Development",
    description: "Professional websites for businesses and NGOs with service showcases, case studies, and integrated management tools.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    details: `
      Our Corporate & NGO Website solution includes:
      • Professional about us section
      • Service showcases
      • Case study portfolios
      • Donation systems (for NGOs)
      • Report and document downloads
      • CRM integration
      • Donor management tools
      • Analytics and reporting
      • Mobile-responsive design
      
      Perfect for:
      • Corporations
      • NGOs
      • Non-profits
      • Foundations
    `
}, {
    id: "real-estate-websites",
    name: "Real Estate Websites",
    category: "Website Development",
    description: "Professional real estate websites with property listings, image galleries, maps integration, and inquiry management.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    details: `
      Our Real Estate Website solution includes:
      • Dynamic property listings
      • Advanced search filters
        - Price range
        - Location
        - Property type
        - Amenities
      • Interactive maps integration
      • High-quality image galleries
      • Virtual tour support
      • Lead capture forms
      • WhatsApp integration
      • CRM integration
      • Mobile-responsive design
      
      Perfect for:
      • Real estate agencies
      • Property developers
      • Individual agents
      • Property management companies
    `
}, {
    id: "news-magazine-websites",
    name: "News & Digital Magazine Websites",
    category: "Website Development",
    description: "Dynamic news and magazine websites with content management, subscription systems, and ad integration.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80",
    details: `
      Our News & Magazine Website features:
      • Dynamic content management system
      • Category management
      • Author profiles
      • Comment systems
      • Newsletter integration
      • Social media sharing
      • Ad space management
      • Google AdSense ready
      • SEO optimization
      • Mobile-first design
      
      CMS Options:
      • WordPress
      • Ghost
      • Custom CMS
      
      Perfect for:
      • News organizations
      • Digital magazines
      • Blog networks
      • Content publishers
    `
}, {
    id: "learning-management-system",
    name: "Online Learning Website (LMS)",
    category: "Website Development",
    description: "Complete learning management systems with course delivery, student tracking, and certification.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    details: `
      Our LMS solution includes:
      • Course management system
      • Video lesson hosting
      • Interactive quizzes
      • Progress tracking
      • Student dashboards
      • Assignment submission
      • Discussion forums
      • Certificate generation
      • Payment integration
      • Analytics dashboard
      
      Features for educators:
      • Course creation tools
      • Student management
      • Grade tracking
      • Automated emails
      
      Perfect for:
      • Educational institutions
      • Corporate training
      • Online course creators
      • Coaching businesses
    `
}, {
    id: "hotel-booking-websites",
    name: "Hotel & Booking Websites",
    category: "Website Development",
    description: "Professional booking websites with reservation systems, availability calendars, and payment processing.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    details: `
      Our Booking Website features:
      • Real-time availability calendar
      • Online reservation system
      • Room/property showcase
      • Multiple payment options
      • Booking management
      • Email notifications
      • Mobile booking support
      • Rate management
      • Channel manager integration
      
      Additional features:
      • Virtual tours
      • Review system
      • Special offers management
      • Multi-language support
      
      Perfect for:
      • Hotels
      • Resorts
      • Lodges
      • Tour operators
      • Airbnb managers
    `
}, {
    id: "website-redesign",
    name: "Website Redesign & Optimization",
    category: "Website Development",
    description: "Modernize and optimize existing websites for better performance, user experience, and search rankings.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    details: `
      Our Website Redesign service includes:
      • Modern UI/UX redesign
      • Mobile responsiveness
      • Speed optimization
        - Code optimization
        - Image optimization
        - Caching setup
      • SEO improvements
        - Meta tags optimization
        - Schema markup
        - URL structure
      • Security updates
      • Analytics integration
      • Content reorganization
      
      Performance improvements:
      • Page load speed
      • Mobile performance
      • Search rankings
      • User engagement
      
      Perfect for:
      • Outdated websites
      • Slow-loading sites
      • Poor mobile experience
      • Low conversion rates
    `
}]
  , eu = [{
    id: "kra-services",
    name: "KRA Services",
    category: "Government & Regulatory",
    description: "Comprehensive KRA services including returns filing, PIN registration, and tax compliance.",
    price: "KSh 50-500",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    details: `
      Our KRA Services include:

      Basic Returns & Registration:
      • KRA Nil Returns - KSh 50
      • KRA Employed Returns - KSh 100
      • KRA PIN Registration - KSh 150
      • KRA Email Change - KSh 150
      • KRA PIN Reprint - KSh 100
      
      Updates & Amendments:
      • KRA PIN Update/Retrieval - KSh 100-150
      • KRA Tax Amnesty Application - KSh 150
      • KRA Amended Returns - KSh 150
      
      Certificates & Compliance:
      • KRA Tax Compliance Certificate - KSh 100
      • KRA Withholding Returns (VAT/Income Tax) - KSh 150
      • KRA Exemption Returns (PWD) - KSh 150
      
      Advanced Services:
      • KRA Removal of Tax Obligation / E-Cancellation - KSh 200
      • e-TIMS Registration & Onboarding - KSh 300
      • Company/Group PIN Registration & Returns - KSh 500
    `
}, {
    id: "identity-civil-registration",
    name: "Identity & Civil Registration",
    category: "Government & Regulatory",
    description: "Essential identity and civil registration services including ID updates, birth certificates, and clearance certificates.",
    price: "KSh 200-500",
    image: "https://images.unsplash.com/photo-1634128222187-18eababc763d?auto=format&fit=crop&q=80",
    details: `
      Our Identity & Civil Registration services include:

      National ID Services:
      • National ID Name Change (ID correction/update) - KSh 300
        - Processing of name amendments on the Kenyan ID card
        - Official documentation handling
      
      Birth Certificate Services:
      • New Birth Certificate (first issue/replacement) - KSh 200
        - Application via e-Citizen/Huduma
        - Document verification
      • Birth Certificate Name Change - KSh 300
        - Amendment of name on existing certificate
        - Processing through relevant authorities
      
      Clearance Certificates:
      • Good Conduct Certificate - KSh 200
        - Police clearance certificate issuance
        - For employment, travel, or immigration
      • CRB Clearance Certificate - KSh 500
        - Credit reference bureau report
        - For loan applications or leasing
    `
}, {
    id: "passport-immigration",
    name: "Passport & Immigration",
    category: "Government & Regulatory",
    description: "Comprehensive passport and immigration services including applications, renewals, and visa support.",
    price: "KSh 200-550",
    image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?auto=format&fit=crop&q=80",
    details: `
      Our Passport & Immigration services include:

      Passport Services:
      • Passport Application (34-page Ordinary "A" Series) - KSh 550
        - New passport application via e-Citizen portal
        - Document verification
        - Application tracking
      
      • Passport Renewal (48-page "B" Series) - KSh 200
        - Renewal of expiring or expired passports
        - Status monitoring
      
      Special Passport Categories:
      • Diplomatic & East African Passports - KSh 300
        - Special-category issuance
        - Documentation support
      
      Immigration Support:
      • Visa Application Support - KSh 500
        - Assistance with online visa forms
        - Document preparation
        - Application tracking
        - Select foreign missions supported
    `
}, {
    id: "business-licenses",
    name: "Business & Trade Licenses",
    category: "Government & Regulatory",
    description: "Comprehensive business licensing services including permits, health certificates, and safety compliance.",
    price: "KSh 300-1,500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    details: `
      Our Business & Trade License services include:

      County Permits:
      • Single Business Permit (Nairobi County) - KSh 1,500
        - Application/renewal for trading
        - Signage permits
        - Premises licensing
        - Small business registration

      Health & Safety:
      • Food Hygiene / Health Permit - KSh 300
        - Health inspection certificate
        - Suitable for eateries and kiosks
        - Official documentation

      Construction & Planning:
      • Building Plan Approval - KSh 1,000
        - Submission to county planning
        - Plan review tracking
        - Approval facilitation

      Safety Compliance:
      • Fire Safety Certificate - KSh 300
        - Fire inspection coordination
        - Compliance certification
        - County fire department liaison
    `
}, {
    id: "social-security",
    name: "Social Security & Health Insurance",
    category: "Government & Regulatory",
    description: "Essential social security and health insurance services including NHIF and NSSF registration and management.",
    price: "KSh 200-300",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    details: `
      Our Social Security & Health Insurance services include:

      NHIF Services:
      • SHA/NHIF Registration & Contributions - KSh 200
        - New member registration
        - First 3 months coverage
        - Documentation support

      NHIF Management:
      • SHA/NHIF Package Upgrades & Changes - KSh 300
        - Beneficiary additions
        - Plan upgrades
        - Coverage modifications

      NSSF Services:
      • NSSF Registration & Returns - KSh 300
        - Employee/employer registration (free)
        - Monthly return facilitation
        - Compliance support
    `
}, {
    id: "student-services",
    name: "Student Loans & Education Services",
    category: "Government & Regulatory",
    description: "Comprehensive student financial aid and academic documentation services including HELB loans and certificate authentication.",
    price: "KSh 200",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    details: `
      Our Student Loans & Education Services include:

      HELB Services:
      • HELB/HEF Loan Application & Follow-up - KSh 200
        - Online application assistance
        - Status tracking
        - Documentation support
        - Follow-up coordination

      Academic Documentation:
      • Certificate Authentication - KSh 200
        - HELB verification
        - University transcript authentication
        - For employment verification
        - For further studies
    `
}, {
    id: "regulatory-registrations",
    name: "Regulatory Registrations & Clearances",
    category: "Government & Regulatory",
    description: "Comprehensive registration and clearance services for businesses, professionals, and organizations.",
    price: "KSh 1,000-1,500",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80",
    details: `
      Our Regulatory Registration services include:

      Business Registration:
      • Company Registration & Certificate Replacement - KSh 1,000
        - Business name registration
        - Limited company registration
        - Lost document replacement

      Professional Registration:
      • TSC Services - KSh 1,000
        - Teacher Service Commission PINs
        - Certificate requests
        - Documentation support

      Compliance Certificates:
      • EACC Clearance - KSh 1,000
        - Ethics & Anti-Corruption Commission
        - Certificate issuance
      
      Special Registrations:
      • AGPO Registration - KSh 1,000
        - Youth, women, PWD registration
        - Government procurement access
      
      • NCA Registration - KSh 1,000
        - National Construction Authority
        - Contractor registration

      Group Registrations:
      • SACCO Registration & Constitution - KSh 1,500
        - Cooperative society setup
        - By-laws drafting
      
      • Group Constitution & Registration - KSh 1,000
        - Group by-laws drafting
        - Registrar of Societies filing
    `
}, {
    id: "land-property",
    name: "Land & Property Services",
    category: "Government & Regulatory",
    description: "Comprehensive land and property services including registry searches, permits, and environmental assessments.",
    price: "KSh 2,000",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    details: `
      Our Land & Property Services include:

      Land Registry:
      • Ardh Sasa (Land Registry Services) - KSh 2,000
        - Property searches
        - Title transfers
        - Mapping via Huduma/e-Citizen
      
      Water Services:
      • Water Abstraction Permit - KSh 2,000
        - River water extraction
        - Ground water sources
        - License processing
      
      Environmental Services:
      • EIA/EA Report Submission - KSh 2,000
        - Environmental Impact Assessment
        - Portal filings
        - Documentation support
    `
}, {
    id: "ntsa-services",
    name: "NTSA e-Services",
    category: "Government & Regulatory",
    description: "Complete range of NTSA services including vehicle transfers, licenses, and PSV services.",
    price: "KSh 200-2,000",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
    details: `
      Our NTSA e-Services include:

      Vehicle Services:
      • Logbook Transfer - KSh 500
        - Ownership change processing
        - e-TIMS system
        - Fees vary by engine capacity
      
      Licensing:
      • Driving License - KSh 200
        - New applications
        - License renewals
        - NTSA processing
      
      Professional Services:
      • Certified Driving School Registration - KSh 2,000
        - School registration
        - Annual renewals
        - Compliance support
      
      PSV Services:
      • PSV Conductor Test Booking - KSh 500
        - Online test scheduling
        - Documentation support
        - Status tracking
    `
}]
  , tu = [{
    id: "ats-resume",
    name: "ATS-Compliant CV / Résumé",
    category: "Career Assistance",
    description: "A professionally formatted résumé designed to pass Applicant Tracking Systems, with strategic keyword placement and achievement-focused content.",
    price: "KSh 1,500",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80",
    details: `
      Our ATS-Compliant CV Service includes:

      Document Formatting:
      • Professional ATS-friendly layout
      • Strategic keyword optimization
      • Achievement-focused content
      • Industry-standard formatting

      Content Development:
      • Skills assessment and highlighting
      • Experience optimization
      • Accomplishment quantification
      • Keyword research and integration

      Quality Assurance:
      • ATS compliance testing
      • Formatting consistency check
      • Grammar and style review
      • Final professional polish
    `
}, {
    id: "cover-letter",
    name: "Cover Letter Customization",
    category: "Career Assistance",
    description: "A tailored cover letter that highlights your unique skills and experiences, aligns with the job description, and grabs the recruiter's attention.",
    price: "KSh 800",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80",
    details: `
      Our Cover Letter Service includes:

      Customization:
      • Job description analysis
      • Skills alignment
      • Company research integration
      • Unique value proposition

      Content Development:
      • Compelling opening
      • Achievement highlights
      • Relevant experience focus
      • Strong call to action

      Professional Polish:
      • Formatting consistency
      • Grammar check
      • Style optimization
      • Final review
    `
}, {
    id: "linkedin-optimization",
    name: "LinkedIn Profile Optimization",
    category: "Career Assistance",
    description: "Comprehensive review and enhancement of your LinkedIn headline, summary, experience, and skills to boost visibility and networking opportunities.",
    price: "KSh 1,200",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80",
    details: `
      Our LinkedIn Optimization includes:

      Profile Enhancement:
      • Headline optimization
      • Summary crafting
      • Experience section review
      • Skills assessment

      Visibility Boost:
      • Keyword optimization
      • SEO improvements
      • Network recommendations
      • Engagement strategies

      Content Review:
      • Professional photo advice
      • Background image selection
      • Recommendations strategy
      • Activity planning
    `
}, {
    id: "portfolio-website",
    name: "Portfolio Website Creation",
    category: "Career Assistance",
    description: "A sleek, mobile-friendly personal website showcasing your projects, bio, and contact details, fully responsive across devices.",
    price: "KSh 5,000",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80",
    details: `
      Our Portfolio Website Package includes:

      Design & Development:
      • 3-5 responsive pages
      • Mobile-friendly design
      • Project showcase section
      • Contact form integration

      Content Sections:
      • Professional bio
      • Project gallery
      • Skills showcase
      • Contact information

      Technical Features:
      • Fast loading speed
      • SEO optimization
      • Cross-browser compatibility
      • Social media integration
    `
}, {
    id: "mock-interview",
    name: "Interview Preparation",
    category: "Career Assistance",
    description: "Real-time mock interview sessions covering common and role-specific questions, followed by detailed performance feedback and improvement tips.",
    price: "KSh 2,000",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80",
    details: `
      Our Interview Prep includes:

      Mock Interview:
      • Common question practice
      • Role-specific scenarios
      • Behavioral question prep
      • Technical interview simulation

      Feedback Session:
      • Detailed performance review
      • Body language assessment
      • Response improvement tips
      • Follow-up strategy

      Additional Support:
      • Interview checklist
      • Common pitfalls guide
      • Question preparation
      • Confidence building tips
    `
}, {
    id: "career-coaching",
    name: "Career Coaching Package",
    category: "Career Assistance",
    description: "A one-hour personalized coaching session to clarify your career goals, map out actionable steps, and overcome job-search challenges.",
    price: "KSh 2,500",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    details: `
      Our Career Coaching includes:

      Strategy Session (30min-1hr):
      • Career goal clarification
      • Action plan development
      • Challenge identification
      • Progress tracking

      Personalized Guidance:
      • Industry insights
      • Network building tips
      • Job search strategy
      • Skill development plan

      Follow-up Support:
      • Resource recommendations
      • Progress check-in
      • Strategy adjustments
      • Next steps planning
    `
}]
  , au = [{
    id: "logo-design",
    name: "Logo Design",
    category: "Graphic Design & Branding",
    description: "Custom logo concepts with iterative revisions, delivered in scalable vector formats for versatile branding use.",
    price: "KSh 1,500",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
    details: `
      Our Logo Design Package includes:

      Design Process:
      • Multiple initial concepts
      • Iterative revisions
      • Final design refinement
      • Brand guidelines

      Deliverables:
      • Vector source files
      • High-res PNG files
      • Web-optimized versions
      • Brand style guide

      File Formats:
      • AI/EPS vector files
      • PDF for print
      • PNG for web/digital
      • JPEG for general use
    `
}, {
    id: "poster-flyer",
    name: "Poster / Flyer Design",
    category: "Graphic Design & Branding",
    description: "Eye-catching poster or flyer layouts optimized for high-resolution printing, including bleed and trim settings.",
    price: "KSh 1,000",
    image: "https://images.unsplash.com/photo-1626785774625-8a0be4f10304?auto=format&fit=crop&q=80",
    details: `
      Our Poster/Flyer Design includes:

      Design Features:
      • High-resolution artwork
      • Print-ready files
      • Proper bleed settings
      • Professional typography

      Layout Options:
      • Single or double-sided
      • Multiple size formats
      • Custom dimensions
      • Orientation choice

      Deliverables:
      • Print-ready PDF
      • Web version
      • Source files
      • Usage guidelines
    `
}, {
    id: "brochure-magazine",
    name: "Brochure / Magazine Layout",
    category: "Graphic Design & Branding",
    description: "Professionally structured multi-page brochures or magazine spreads with proper bleeds, margins, and typography.",
    price: "KSh 2,000",
    image: "https://images.unsplash.com/photo-1574351406668-7585cd5b080c?auto=format&fit=crop&q=80",
    details: `
      Our Brochure/Magazine Service includes:

      Layout Design:
      • Professional typography
      • Image placement
      • Content flow
      • Grid system

      Technical Setup:
      • Proper bleeds
      • Correct margins
      • Print specifications
      • Color management

      Final Delivery:
      • Print-ready files
      • Digital version
      • Source files
      • Style guide
    `
}, {
    id: "ad-creation",
    name: "Ad Creation",
    category: "Graphic Design & Branding",
    description: "Engaging ad designs tailored for online or print campaigns, formatted to platform specifications for maximum impact.",
    price: "KSh 1,200",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80",
    details: `
      Our Ad Creation Service includes:

      Design Options:
      • Digital ad formats
      • Print ad layouts
      • Social media sizes
      • Banner designs

      Platform Optimization:
      • Size specifications
      • Format requirements
      • Resolution settings
      • Platform guidelines

      Deliverables:
      • Multiple formats
      • Platform-specific files
      • Source files
      • Usage guidelines
    `
}, {
    id: "social-media-templates",
    name: "Social Media Post Templates",
    category: "Graphic Design & Branding",
    description: "A set of on-brand, fully editable social media graphics for consistent and professional online presence.",
    price: "KSh 5,000",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80",
    details: `
      Our Social Media Template Package includes:

      Template Set:
      • Instagram posts/stories
      • Facebook covers/posts
      • Twitter headers/posts
      • LinkedIn graphics

      Design Features:
      • Brand consistency
      • Easy customization
      • Text placeholders
      • Image placeholders

      Deliverables:
      • Editable templates
      • Style guide
      • Font package
      • Usage instructions
    `
}, {
    id: "pdf-document",
    name: "PDF Document Design",
    category: "Graphic Design & Branding",
    description: "Polished PDF layouts for reports, menus, or manuals, with attention to readability, hierarchy, and visual appeal.",
    price: "KSh 1,000",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
    details: `
      Our PDF Document Design includes:

      Document Setup:
      • Professional layout
      • Typography hierarchy
      • Visual elements
      • Interactive features

      Content Organization:
      • Table of contents
      • Section breaks
      • Page numbering
      • Headers/footers

      Final Delivery:
      • Interactive PDF
      • Print version
      • Source files
      • Style guide
    `
}, {
    id: "presentation-design",
    name: "PowerPoint / Presentation Design",
    category: "Graphic Design & Branding",
    description: "Professionally designed presentation slides with cohesive themes, infographics, and transitions for impactful storytelling.",
    price: "KSh 1,000",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    details: `
      Our Presentation Design includes:

      Slide Design:
      • Custom templates
      • Visual hierarchy
      • Infographic creation
      • Animation effects

      Content Enhancement:
      • Layout optimization
      • Image selection
      • Typography choices
      • Color schemes

      Deliverables:
      • Editable files
      • PDF version
      • Image assets
      • Font package
    `
}]
  , nu = [{
    id: "social-media-management",
    name: "Social Media Management",
    category: "Online Services & Digital Marketing",
    description: "Strategic planning and scheduling of 30 branded posts per month across your chosen platforms, complete with captions, hashtags, and posting calendar",
    price: "KSh 5,000",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    details: `
      Our Social Media Management Package includes:

      Monthly Content Calendar:
      • 30 branded posts per month
      • Strategic content planning
      • Platform-specific optimization
      • Hashtag research and strategy

      Content Creation:
      • Custom graphics
      • Engaging captions
      • Strategic hashtags
      • Posting schedule

      Management Features:
      • Content scheduling
      • Platform optimization
      • Performance tracking
      • Monthly analytics
    `
}, {
    id: "seo-audit-optimization",
    name: "SEO Audit & Optimization",
    category: "Online Services & Digital Marketing",
    description: "Comprehensive website audit to identify SEO gaps, in-depth keyword research, and implementation of on-page optimizations (meta tags, headings, URLs)",
    price: "KSh 3,000",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80",
    details: `
      Our SEO Audit & Optimization includes:

      Technical Audit:
      • Site structure analysis
      • Speed optimization
      • Mobile responsiveness
      • Technical SEO issues

      Content Optimization:
      • Keyword research
      • Meta tags optimization
      • Heading structure
      • URL optimization

      Deliverables:
      • Detailed audit report
      • Implementation guide
      • Keyword strategy
      • Optimization roadmap
    `
}, {
    id: "ads-setup",
    name: "Google Ads / Facebook Ads Setup",
    category: "Online Services & Digital Marketing",
    description: "Creation and configuration of targeted ad campaigns on Google and Facebook, including audience research, ad copywriting, and tracking pixel integration",
    price: "KSh 4,000",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
    details: `
      Our Ads Setup Package includes:

      Campaign Setup:
      • Account configuration
      • Campaign structure
      • Ad group creation
      • Targeting setup

      Creative Development:
      • Ad copywriting
      • Image selection
      • Call-to-action optimization
      • A/B testing setup

      Technical Integration:
      • Pixel installation
      • Conversion tracking
      • Analytics setup
      • Performance monitoring
    `
}, {
    id: "email-marketing-setup",
    name: "Email Marketing Setup",
    category: "Online Services & Digital Marketing",
    description: "Custom-designed email templates and audience segmentation strategy to boost open and click-through rates, plus integration with your email service provider",
    price: "KSh 3,500",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80",
    details: `
      Our Email Marketing Setup includes:

      Template Design:
      • Custom email templates
      • Responsive design
      • Brand integration
      • Call-to-action optimization

      Strategy Development:
      • Audience segmentation
      • Content planning
      • Automation setup
      • Testing strategy

      Technical Setup:
      • ESP integration
      • List management
      • Analytics setup
      • Deliverability optimization
    `
}, {
    id: "digital-branding-consultation",
    name: "Digital Branding Consultation",
    category: "Online Services & Digital Marketing",
    description: "One-on-one consultation to define your brand's unique voice, visual identity guidelines, and messaging framework for consistent digital presence",
    price: "KSh 4,000",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    details: `
      Our Digital Branding Consultation includes:

      Brand Strategy:
      • Voice definition
      • Visual identity guidelines
      • Messaging framework
      • Target audience analysis

      Implementation Guide:
      • Style guide creation
      • Template development
      • Asset organization
      • Usage guidelines

      Support Materials:
      • Brand guidelines document
      • Asset templates
      • Implementation checklist
      • Training resources
    `
}]
  , lu = [{
    id: "assignment-writing",
    name: "Assignment & Term Paper Writing",
    category: "Academics Services",
    description: "Research, writing and formatting (undergraduate & postgraduate)",
    price: "KSh 3,000",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    details: `
      Our Assignment Writing Service includes:

      Research & Writing:
      • Topic analysis
      • Literature review
      • Content development
      • Academic writing

      Formatting:
      • Citation styles (APA, MLA)
      • Document structure
      • Page formatting
      • Reference management
    `
}, {
    id: "report-writing",
    name: "Report Writing",
    category: "Academics Services",
    description: "Data‐driven report drafting, citation and formatting",
    price: "KSh 8,000",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80",
    details: `
      Our Report Writing Service includes:

      Report Development:
      • Data analysis
      • Report structure
      • Content writing
      • Visualization

      Professional Polish:
      • Citation formatting
      • Quality check
      • Document formatting
      • Final review
    `
}, {
    id: "concept-note",
    name: "Concept Note Preparation",
    category: "Academics Services",
    description: "Brief proposal development for grants or academic assignments",
    price: "KSh 2,000",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    details: `
      Our Concept Note Service includes:

      Development:
      • Idea articulation
      • Project outline
      • Methodology
      • Timeline planning

      Documentation:
      • Professional formatting
      • Review and editing
      • Final polish
      • Submission prep
    `
}, {
    id: "research-proposals",
    name: "Funding & Research Proposals",
    category: "Academics Services",
    description: "Full proposal (background, methodology, budget, timelines)",
    price: "KSh 2,500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    details: `
      Our Research Proposal Service includes:

      Proposal Components:
      • Background research
      • Methodology design
      • Budget planning
      • Timeline creation

      Documentation:
      • Professional formatting
      • Citation management
      • Review and editing
      • Submission prep
    `
}, {
    id: "plagiarism-removal",
    name: "Plagiarism Removal & Editing",
    category: "Academics Services",
    description: "Rewriting to eliminate duplication; includes similarity report",
    price: "KSh 300",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
    details: `
      Our Plagiarism Removal Service includes:

      Content Review:
      • Similarity check
      • Content rewriting
      • Citation verification
      • Reference check

      Quality Assurance:
      • Final scan
      • Report generation
      • Document formatting
      • Professional polish
    `
}, {
    id: "application-letters",
    name: "Application & Other Letters",
    category: "Academics Services",
    description: "Motivation letters, recommendation requests, leave applications, etc.",
    price: "KSh 250",
    image: "https://images.unsplash.com/photo-1586297098710-0382a496c814?auto=format&fit=crop&q=80",
    details: `
      Our Letter Writing Service includes:

      Letter Types:
      • Motivation letters
      • Recommendation requests
      • Leave applications
      • Academic correspondence

      Professional Polish:
      • Content development
      • Formatting
      • Review and editing
      • Final check
    `
}, {
    id: "thesis-formatting",
    name: "Postgraduate Thesis Formatting",
    category: "Academics Services",
    description: "Pagination, reference styling (APA, MLA, etc.)",
    price: "KSh 2,500",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80",
    details: `
      Our Thesis Formatting Service includes:

      Format Elements:
      • Page numbering
      • Citation styling
      • Reference formatting
      • Table/figure formatting

      Style Guidelines:
      • APA formatting
      • MLA formatting
      • Chicago style
      • Custom styles
    `
}, {
    id: "statistical-analysis",
    name: "Statistical Data Analysis (SPSS/Stata)",
    category: "Academics Services",
    description: "Data cleaning, analysis, interpretation, report generation",
    price: "KSh 4,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    details: `
      Our Statistical Analysis Service includes:

      Data Processing:
      • Data cleaning
      • Variable coding
      • Analysis execution
      • Result interpretation

      Deliverables:
      • Statistical reports
      • Data visualization
      • Interpretation guide
      • Documentation
    `
}, {
    id: "academic-presentation",
    name: "Presentation Design (Academic)",
    category: "Academics Services",
    description: "Slide decks with charts, infographics, animations",
    price: "KSh 1,000",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    details: `
      Our Academic Presentation Service includes:

      Design Elements:
      • Slide layout
      • Chart creation
      • Infographic design
      • Animation effects

      Content Development:
      • Content organization
      • Visual hierarchy
      • Citation formatting
      • Professional polish
    `
}]
  , sb = [...Io, ...eu, ...tu, ...au, ...nu, ...lu];
function ep() {
    const [i,r] = q.useState("")
      , [o,c] = q.useState([])
      , [f,h] = q.useState(!1)
      , p = q.useRef(null)
      , S = ig();
    return q.useEffect( () => {
        function b(g) {
            p.current && !p.current.contains(g.target) && h(!1)
        }
        return document.addEventListener("mousedown", b),
        () => document.removeEventListener("mousedown", b)
    }
    , []),
    q.useEffect( () => {
        if (i.length > 0) {
            const b = sb.filter(g => g.name.toLowerCase().includes(i.toLowerCase()) || g.description.toLowerCase().includes(i.toLowerCase()));
            c(b),
            h(!0)
        } else
            c([]),
            h(!1)
    }
    , [i]),
    d.jsxs("div", {
        ref: p,
        className: "relative w-full max-w-xl",
        children: [d.jsx("input", {
            type: "text",
            value: i,
            onChange: b => r(b.target.value),
            placeholder: "Search services...",
            className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34f4a4]"
        }), f && o.length > 0 && d.jsx("div", {
            className: "absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-96 overflow-auto",
            children: o.map(b => d.jsxs("div", {
                onClick: () => {
                    S(`/services/${b.id}`),
                    r(""),
                    h(!1)
                }
                ,
                className: "p-3 hover:bg-gray-100 cursor-pointer",
                children: [d.jsx("div", {
                    className: "font-semibold",
                    children: b.name
                }), d.jsx("div", {
                    className: "text-sm text-gray-600",
                    children: b.category
                })]
            }, b.id))
        })]
    })
}
function rb() {
    return d.jsxs("div", {
        className: "flex flex-col min-h-screen",
        children: [d.jsx("section", {
            className: "relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "Navigate Your Digital Frontier with CyberTechOcean"
                }), d.jsx("p", {
                    className: "text-xl mb-8 text-gray-300",
                    children: "We provide Web Development, Career Assistance, Government  Services (eCitizen), Graphic Design, Digital Marketing, Academic Writing, and Data Analysis."
                }), d.jsx("div", {
                    className: "flex justify-center mb-8 text-black",
                    children: d.jsx(ep, {})
                }), d.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                    children: [d.jsx(Se, {
                        to: "/contact",
                        className: "px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition",
                        children: "Get Free Consultation"
                    }), d.jsx(Se, {
                        to: "/services",
                        className: "text-[#34f4a4] hover:text-[#ff0000] transition flex items-center",
                        children: "Explore Our Services ↓"
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8 bg-white",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [d.jsxs("div", {
                        className: "p-6 border rounded-lg hover:shadow-lg transition",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Web & App Development"
                        }), d.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Bespoke websites, e-commerce stores, LMS and more—built on modern stacks (Django, React, WordPress)."
                        })]
                    }), d.jsxs("div", {
                        className: "p-6 border rounded-lg hover:shadow-lg transition",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Gov & Regulatory Compliance"
                        }), d.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "KRA returns & PIN services, e-Citizen applications, passports, licences—all handled for you."
                        })]
                    }), d.jsxs("div", {
                        className: "p-6 border rounded-lg hover:shadow-lg transition",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Branding & Design"
                        }), d.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Logos, brochures, social-media graphics and PowerPoint decks that tell your story."
                        })]
                    }), d.jsxs("div", {
                        className: "p-6 border rounded-lg hover:shadow-lg transition",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Digital Marketing & SEO"
                        }), d.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Social-media management, Google/Facebook ads, email campaigns and on-page SEO."
                        })]
                    })]
                }), d.jsx("div", {
                    className: "text-center mt-8",
                    children: d.jsx(Se, {
                        to: "/services",
                        className: "glow-on-hover",
                        children: "View All Services"
                    })
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8 bg-gray-50",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsx("h2", {
                    className: "text-3xl font-bold text-center mb-12",
                    children: "Why Choose CyberTechOcean?"
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Deep Expertise"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: "Over 6 years of combined web-development, design & compliance experience."
                        })]
                    }), d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "All-In-One Partner"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: "From registering your domain to launching your ad campaigns—we cover the full spectrum."
                        })]
                    }), d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Transparent Pricing"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: '"Price on Order" for custom projects; clear, flat rates for government & career services.'
                        })]
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8 bg-white",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsxs("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [d.jsx("h2", {
                        className: "text-3xl font-bold",
                        children: "Featured Projects"
                    }), d.jsx(Se, {
                        to: "/projects",
                        className: "text-[#34f4a4] hover:text-[#ff0000]",
                        children: "See More"
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [d.jsxs("div", {
                        className: "border rounded-lg overflow-hidden",
                        children: [d.jsx("img", {
                            src: "https://i.imgur.com/aFixvm9.png",
                            alt: "Limbs Orthopaedic",
                            className: "w-full h-48 object-cover"
                        }), d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Limbs Orthopaedic"
                            }), d.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "Modern, responsive website with patient inquiry support for a medical clinic in Kasarani, Nairobi."
                            }), d.jsx("a", {
                                href: "https://exampleone.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:text-blue-800",
                                children: "View Project →"
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "border rounded-lg overflow-hidden",
                        children: [d.jsx("img", {
                            src: "https://i.imgur.com/Fsixvm9.png",
                            alt: "Unspotted Africa Auto Spares",
                            className: "w-full h-48 object-cover"
                        }), d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Unspotted Africa Auto Spares"
                            }), d.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "Clean layout and service listing for a busy car garage at Fundi Lane, Kirinyaga Road."
                            }), d.jsx("a", {
                                href: "https://exampletwo.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:text-blue-800",
                                children: "View Project →"
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "border rounded-lg overflow-hidden",
                        children: [d.jsx("img", {
                            src: "https://i.imgur.com/ssixvm9.png",
                            alt: "LawiSchoolPro LMS",
                            className: "w-full h-48 object-cover"
                        }), d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "LawiSchoolPro LMS"
                            }), d.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "Full-featured education portal with courses, dashboards, and student progress tracking."
                            }), d.jsx("a", {
                                href: "https://examplethree.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:text-blue-800",
                                children: "View Project →"
                            })]
                        })]
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8 bg-gray-50",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsxs("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [d.jsx("h2", {
                        className: "text-3xl font-bold",
                        children: "Testimonials"
                    }), d.jsx(Se, {
                        to: "/testimonials",
                        className: "text-[#34f4a4] hover:text-[#ff0000]",
                        children: "Read More"
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [d.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow",
                        children: [d.jsx("p", {
                            className: "italic mb-4",
                            children: '"CyberTechOcean built a clean, modern site for our clinic—our patients now book appointments online with ease."'
                        }), d.jsx("p", {
                            className: "font-semibold",
                            children: "— Limbs Orthopaedic, Kasarani, Nairobi"
                        })]
                    }), d.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow",
                        children: [d.jsx("p", {
                            className: "italic mb-4",
                            children: `"Our auto shop website now gets inquiries daily, thanks to the team's work on our Fundi Lane garage brand."`
                        }), d.jsx("p", {
                            className: "font-semibold",
                            children: "— Unspotted Africa Auto Spares, Kirinyaga Rd, Nairobi"
                        })]
                    }), d.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow",
                        children: [d.jsx("p", {
                            className: "italic mb-4",
                            children: '"They designed and launched our entire e-learning platform, LawiSchoolPro LMS, faster than expected—excellent support throughout."'
                        }), d.jsx("p", {
                            className: "font-semibold",
                            children: "— LawiSchoolPro Team"
                        })]
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8 bg-black text-white",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [d.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Ready to Make Waves Online?"
                }), d.jsx("p", {
                    className: "text-xl mb-8",
                    children: "Let's chart your course together."
                }), d.jsx("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                    children: d.jsx("a", {
                        href: "https://wa.me/254706943651?text=Hello%20*CyberTechOcean*%20%F0%9F%91%8B%F0%9F%8F%BB",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition",
                        children: "Book Your a Service"
                    })
                })]
            })
        })]
    })
}
function cb() {
    const [i,r] = q.useState(null)
      , o = [...Io, ...eu, ...tu, ...au, ...nu, ...lu]
      , c = Array.from(new Set(o.map(S => S.category)))
      , h = (i ? o.filter(S => S.category === i) : o).reduce( (S, b) => {
        const g = b.category;
        return S[g] || (S[g] = []),
        S[g].push(b),
        S
    }
    , {})
      , p = S => {
        const b = encodeURIComponent(`Hello CyberTechOcean, 👋 I would like you to offer me ${S.name}: ${window.location.origin}/services/${S.id}`);
        window.open(`https://wa.me/254706943651?text=${b}`, "_blank")
    }
    ;
    return d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx("section", {
            className: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "Our Services"
                }), d.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Empowering your digital journey with expert solutions tailored to your needs. Our range of services includes Web Development, Career Assistance, Government Services (eCitizen), Graphic Design, Digital Marketing, Academic Writing, and Data Analysis."
                }), d.jsx("p", {
                    children: d.jsx("br", {})
                }), d.jsx("div", {
                    className: "flex justify-center mb-8 text-black",
                    children: d.jsx(ep, {})
                })]
            })
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [d.jsx("div", {
                className: "flex flex-col items-center gap-6 mb-8",
                children: d.jsxs("div", {
                    className: "flex justify-center",
                    children: [d.jsxs("select", {
                        value: i || "",
                        onChange: S => r(S.target.value || null),
                        className: "md:hidden w-full max-w-xs px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34f4a4]",
                        children: [d.jsx("option", {
                            value: "",
                            children: "All Categories"
                        }), c.map(S => d.jsx("option", {
                            value: S,
                            children: S
                        }, S))]
                    }), d.jsxs("div", {
                        className: "hidden md:flex flex-wrap gap-2 justify-center",
                        children: [d.jsx("button", {
                            onClick: () => r(null),
                            className: `px-4 py-2 rounded-full ${i ? "bg-gray-200" : "bg-[#34f4a4] text-white"}`,
                            children: "All"
                        }), c.map(S => d.jsx("button", {
                            onClick: () => r(S),
                            className: `px-4 py-2 rounded-full ${i === S ? "bg-[#34f4a4] text-white" : "bg-gray-200"}`,
                            children: S
                        }, S))]
                    })]
                })
            }), Object.entries(h).map( ([S,b]) => d.jsxs("div", {
                className: "mb-16",
                children: [d.jsx("div", {
                    className: "mb-8",
                    children: d.jsx("h3", {
                        className: "text-2xl font-semibold mb-4 text-[#34f4a4]",
                        children: S
                    })
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: b.map(g => d.jsxs("div", {
                        className: "bg-white rounded-lg shadow-lg overflow-hidden",
                        children: [d.jsx("img", {
                            src: g.image,
                            alt: g.name,
                            className: "w-full h-48 object-cover"
                        }), d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: g.name
                            }), d.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: g.category
                            }), d.jsx("p", {
                                className: "text-gray-700 mb-4",
                                children: g.description
                            }), d.jsx("p", {
                                className: "text-xl font-bold text-[#ff0000] mb-4",
                                children: g.price
                            }), d.jsxs("div", {
                                className: "flex space-x-4",
                                children: [d.jsx(Se, {
                                    to: `/services/${g.id}`,
                                    className: "glow-on-hover",
                                    children: "See Details"
                                }), d.jsx("button", {
                                    onClick: () => p(g),
                                    className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                                    children: "Order on WhatsApp"
                                })]
                            })]
                        })]
                    }, g.id))
                })]
            }, S))]
        })]
    })
}
function ob() {
    const {id: i} = fv()
      , r = [...Io, ...eu, ...tu, ...au, ...nu, ...lu].find(c => c.id === i);
    if (!r)
        return d.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: d.jsx("div", {
                className: "text-center",
                children: d.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Service not found"
                })
            })
        });
    const o = () => {
        const c = encodeURIComponent(`Hello CyberTechOcean, 👋 I would like you to offer me ${r.name}: ${window.location.href}`);
        window.open(`https://wa.me/254706943651?text=${c}`, "_blank")
    }
    ;
    return d.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: d.jsxs("div", {
            className: "bg-white rounded-lg shadow-lg overflow-hidden",
            children: [d.jsxs("div", {
                className: "relative",
                children: [d.jsx("img", {
                    src: r.image,
                    alt: r.name,
                    className: "w-full h-96 object-cover"
                }), d.jsx("div", {
                    className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                    children: d.jsxs("div", {
                        className: "text-center text-white",
                        children: [d.jsx("h1", {
                            className: "text-4xl font-bold mb-4",
                            children: r.name
                        }), d.jsx("p", {
                            className: "text-xl",
                            children: r.category
                        })]
                    })
                })]
            }), d.jsxs("div", {
                className: "p-8",
                children: [d.jsxs("div", {
                    className: "flex flex-wrap items-center justify-between mb-8",
                    children: [d.jsx("div", {
                        className: "mb-4 md:mb-0",
                        children: d.jsx("span", {
                            className: "inline-block bg-[#34f4a4] bg-opacity-10 text-[#34f4a4] px-4 py-2 rounded-full font-semibold",
                            children: r.category
                        })
                    }), d.jsx("div", {
                        className: "text-2xl font-bold text-[#ff0000]",
                        children: r.price
                    })]
                }), d.jsxs("div", {
                    className: "mb-8",
                    children: [d.jsx("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Overview"
                    }), d.jsx("p", {
                        className: "text-gray-600",
                        children: r.description
                    })]
                }), d.jsxs("div", {
                    className: "prose max-w-none mb-8",
                    children: [d.jsx("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Service Details"
                    }), d.jsx("div", {
                        className: "bg-gray-50 rounded-lg p-6",
                        children: d.jsx("pre", {
                            className: "whitespace-pre-line text-gray-600 font-sans",
                            children: r.details
                        })
                    })]
                }), d.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [d.jsxs("button", {
                        onClick: o,
                        className: "flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2",
                        children: [d.jsx("svg", {
                            className: "w-6 h-6",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: d.jsx("path", {
                                d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                            })
                        }), "Order on WhatsApp"]
                    }), d.jsx("button", {
                        onClick: () => window.history.back(),
                        className: "flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition",
                        children: "Back to Services"
                    })]
                })]
            })]
        })
    })
}
function ub() {
    const i = [{
        title: "Accessibility",
        description: "Open doors, open minds—everyone deserves equal access to technology."
    }, {
        title: "Integrity",
        description: "Transparent pricing, honest advice, and strict data privacy."
    }, {
        title: "Excellence",
        description: "Expert teams, reliable infrastructure, and solutions that stand the test of time."
    }, {
        title: "Community",
        description: "Local partnerships, skills workshops, and tech mentorship programs for youth and small businesses."
    }]
      , r = [{
        title: "Web Development",
        description: "Custom websites, e-commerce platforms, LMS solutions, and ongoing maintenance."
    }, {
        title: "Career Assistance",
        description: "CV & cover-letter writing, interview prep, career coaching, and LinkedIn profile optimization."
    }, {
        title: "Government Services (eCitizen)",
        description: "KRA returns, business registration, and passport & immigration facilitation via eCitizen."
    }, {
        title: "Graphic Design",
        description: "Logos, brand assets, social-media graphics, marketing collateral, and print layouts."
    }, {
        title: "Digital Marketing",
        description: "SEO, content strategy, social-media campaigns, and paid-ads management."
    }, {
        title: "Academic Writing",
        description: "Research papers, essays, theses, and professional proofreading/editing."
    }, {
        title: "Data Analysis",
        description: "Data cleaning, visualization, dashboard creation, and actionable insights."
    }]
      , o = [{
        title: "Digital Literacy Workshops",
        description: "Monthly sessions teaching basic computing, online safety, and productivity tools."
    }, {
        title: "Youth Mentorship",
        description: "Internship opportunities for local students interested in IT and design."
    }, {
        title: "Outreach Partnerships",
        description: "Collaborations with nearby schools and NGOs to donate equipment and training."
    }];
    return d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx("section", {
            className: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "About CyberTechOcean"
                }), d.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Know why CyberTechOcean is the trusted tech partner for individuals, businesses, and institutions in Nairobi and beyond."
                })]
            })
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [d.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-8 mb-12",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Our Story"
                }), d.jsx("p", {
                    className: "text-gray-600 mb-8",
                    children: "Founded in Ruaraka, Nairobi, CyberTechOcean began as a vision to empower individuals and businesses through accessible digital resources. What started as a modest cyber café has grown into a full-service technology partner—offering everything from printing and comfortable workstations to bespoke web development, regulatory compliance, and digital marketing solutions."
                }), d.jsxs("div", {
                    className: "border-l-4 border-[#34f4a4] pl-6 mb-8",
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: "Meet Our Founder"
                    }), d.jsx("h4", {
                        className: "font-semibold mb-2",
                        children: "Lawrence Otieno"
                    }), d.jsx("p", {
                        className: "text-gray-600 italic",
                        children: "CEO & Co-Founder"
                    }), d.jsx("p", {
                        className: "text-gray-600 mt-2",
                        children: "With a background in Mathematics, Website Development, and grassroots community outreach, Lawrence leads our team with a passion for closing the digital gap. His hands-on approach ensures every client—from students to SMEs—receives personalized support and innovative solutions."
                    })]
                })]
            }), d.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
                children: [d.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg p-8",
                    children: [d.jsx("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Our Mission"
                    }), d.jsx("p", {
                        className: "text-gray-600 italic mb-4",
                        children: '"Bridging the digital divide by providing accessible, high-quality digital TECH services to our community."'
                    }), d.jsx("p", {
                        className: "text-gray-600",
                        children: "We believe technology should be within everyone's reach. Through fair pricing, expert guidance, and continuous training, we empower our neighbors in Ruaraka and beyond to thrive in an increasingly connected world."
                    })]
                }), d.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg p-8",
                    children: [d.jsx("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Our Vision"
                    }), d.jsx("p", {
                        className: "text-gray-600",
                        children: "To become Nairobi's most trusted technology hub—where cutting-edge services meet community values, and every customer leaves more capable, confident, and connected than when they arrived."
                    })]
                })]
            }), d.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-8 mb-12",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "What We Stand For"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: i.map( (c, f) => d.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold text-[#34f4a4]",
                            children: c.title
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: c.description
                        })]
                    }, f))
                })]
            }), d.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-8 mb-12",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Our Services at a Glance"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: r.map( (c, f) => d.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [d.jsx("h3", {
                            className: "text-lg font-semibold text-[#34f4a4]",
                            children: c.title
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: c.description
                        })]
                    }, f))
                })]
            }), d.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-8 mb-12",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Community Impact"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: o.map( (c, f) => d.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [d.jsx("h3", {
                            className: "text-lg font-semibold text-[#34f4a4]",
                            children: c.title
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: c.description
                        })]
                    }, f))
                })]
            }), d.jsxs("div", {
                className: "bg-black text-white rounded-lg p-8 text-center",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Join the CyberTechOcean Family"
                }), d.jsx("p", {
                    className: "mb-6",
                    children: "Whether you're a freelancer needing quiet workspace, a startup seeking end-to-end tech support, or a resident looking to upskill, we're here for you."
                }), d.jsx("a", {
                    href: "/contact",
                    className: "inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition",
                    children: "Get in Touch"
                })]
            })]
        })]
    })
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const fb = {
    prefix: "fas",
    iconName: "phone",
    icon: [512, 512, [128222, 128379], "f095", "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]
}
  , db = {
    prefix: "fas",
    iconName: "envelope",
    icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}
  , mb = {
    prefix: "fas",
    iconName: "clock",
    icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}
  , hb = {
    prefix: "fas",
    iconName: "location-dot",
    icon: [384, 512, ["map-marker-alt"], "f3c5", "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
};
function gb() {
    const i = [{
        icon: Wg,
        url: "https://facebook.com/CyberTechOcean"
    }, {
        icon: Zg,
        url: "https://tiktok.com/@CyberTechOcean"
    }, {
        icon: Jg,
        url: "https://youtube.com/@CyberTechOcean"
    }, {
        icon: Fg,
        url: "https://instagram.com/CyberTechOcean"
    }, {
        icon: $g,
        url: "https://twitter.com/CyberTechOcean"
    }, {
        icon: Ig,
        url: "https://pinterest.com/CyberTechOcean"
    }, {
        icon: Pg,
        url: "https://linkedin.com/company/CyberTechOcean"
    }, {
        icon: Qg,
        url: "https://threads.net/@CyberTechOcean"
    }]
      , r = [{
        question: "1. What services does CyberTechOcean offer?",
        answer: "We specialize in Web Development, Career Assistance, Government Services (eCitizen), Graphic Design, Digital Marketing, Academic Writing, and Data Analysis—delivering tailored, end-to-end solutions for individuals and businesses."
    }, {
        question: "2. How can I request a quote or consultation?",
        answer: "Click 'Get Your Free Consultation' in the hero section, fill out the Contact Us form, or email us at CyberTechOcean@gmail.com. You can also WhatsApp or call +254 706 943 651—responses within 2 business hours."
    }, {
        question: "3. What is the typical project turnaround time?",
        answer: "Websites & landing pages: 1–2 weeks. Complex platforms & LMS: 3–6 weeks. CV revamps, academic writing & KRA filings: 48–72 hours once all inputs are provided. We'll confirm exact timelines after consultation."
    }, {
        question: "4. How are your pricing and payment terms structured?",
        answer: "We use transparent, custom pricing: flat rates for KRA, eCitizen, CV, and academic writing services, and bespoke quotes for development, design, and marketing projects. We accept M-Pesa, bank transfer, and PayPal. A 30% deposit is required to initiate most projects."
    }, {
        question: "5. Do you offer ongoing support and maintenance?",
        answer: "Yes—choose from monthly retainer plans or pay-as-you-go support for updates, security patches, content edits, and analytics reporting."
    }, {
        question: "6. Can you help with domain, hosting, and SSL?",
        answer: "Absolutely. We handle domain registration, DNS setup, SSL installation, and reliable hosting to ensure your site stays secure and performant."
    }, {
        question: "7. Which sectors have you served?",
        answer: "We’ve partnered with healthcare clinics (Limbs Orthopaedic), auto garages (Unspotted Africa Auto Spares), e‑commerce furniture platforms (Richsmart General Works), e‑learning solution providers (LawiSchoolPro), and hundreds of professionals for CVs and KRA services—across diverse industries."
    }, {
        question: "8. How do you protect my data and privacy?",
        answer: "We follow industry-standard encryption, secure coding practices, and strict confidentiality protocols. All sensitive information is stored on encrypted servers with limited access."
    }, {
        question: "9. What are your business hours and response times?",
        answer: "Monday–Friday: 8 AM–8 PM. Saturday: Closed. Sunday: 10 AM–4 PM. We respond to queries within 2 business hours during operating hours."
    }, {
        question: "10. Where can I view your past work and testimonials?",
        answer: "Visit our Projects page for case studies (Limbs Orthopaedic, Richsmart, Unspotted Africa, LawiSchoolPro) and check the Testimonials page for client feedback on our Career Assistance and digital services."
    }];
    return d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx("section", {
            className: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "Let's Chart Your Digital Path Together"
                }), d.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Have questions or ready to get started? We’re here to help."
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [d.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg text-center",
                    children: [d.jsx(Ra, {
                        icon: db,
                        className: "text-4xl text-[#34f4a4] mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Email"
                    }), d.jsx("p", {
                        children: d.jsx("a", {
                            href: "mailto:CyberTechOcean@gmail.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-[#34f4a4]",
                            children: "CyberTechOcean@gmail.com"
                        })
                    }), d.jsx("p", {
                        className: "text-sm text-gray-500 mt-2",
                        children: "(Replies within 2 business hours)"
                    })]
                }), d.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg text-center",
                    children: [d.jsx(Ra, {
                        icon: fb,
                        className: "text-4xl text-[#34f4a4] mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Phone & WhatsApp"
                    }), d.jsx("p", {
                        children: d.jsx("a", {
                            href: "https://wa.me/254706943651?text=Hello%20*CyberTechOcean*%20%F0%9F%91%8B%F0%9F%8F%BB",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-[#34f4a4]",
                            children: "+254 706 943 651"
                        })
                    }), d.jsx("p", {
                        className: "text-sm text-gray-500 mt-2",
                        children: "(Call or message us anytime)"
                    })]
                }), d.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg text-center",
                    children: [d.jsx(Ra, {
                        icon: hb,
                        className: "text-4xl text-[#34f4a4] mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Location"
                    }), d.jsx("p", {
                        className: "text-[#34f4a4]",
                        children: "Ruaraka, Nairobi, Kenya"
                    }), d.jsx("p", {
                        className: "text-sm text-gray-500 mt-2",
                        children: "(Visits by appointment)"
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "bg-gray-50 py-16 px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg",
                children: [d.jsxs("div", {
                    className: "flex items-center mb-6",
                    children: [d.jsx(Ra, {
                        icon: mb,
                        className: "text-3xl text-[#34f4a4] mr-4"
                    }), d.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: "Business Hours"
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [d.jsxs("div", {
                        className: "p-4 border rounded text-center",
                        children: [d.jsx("h3", {
                            className: "font-semibold mb-2",
                            children: "Mon–Fri"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: "8:00 AM – 8:00 PM"
                        })]
                    }), d.jsxs("div", {
                        className: "p-4 border rounded text-center",
                        children: [d.jsx("h3", {
                            className: "font-semibold mb-2",
                            children: "Saturday"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: "Closed"
                        })]
                    }), d.jsxs("div", {
                        className: "p-4 border rounded text-center",
                        children: [d.jsx("h3", {
                            className: "font-semibold mb-2",
                            children: "Sunday"
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: "10:00 AM – 4:00 PM"
                        })]
                    })]
                })]
            })
        }), d.jsx("section", {
            className: "bg-gray-50 py-16 px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-8",
                    children: "Connect With Us"
                }), d.jsx("div", {
                    className: "flex justify-center space-x-6",
                    children: i.map( (o, c) => d.jsx("a", {
                        href: o.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 hover:text-[#34f4a4] transition-colors",
                        children: d.jsx(Ra, {
                            icon: o.icon,
                            className: "text-2xl"
                        })
                    }, c))
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsx("h2", {
                    className: "text-3xl font-bold mb-8",
                    children: "Frequently Asked Questions"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: r.map( (o, c) => d.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-lg",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold mb-4 text-[#34f4a4]",
                            children: o.question
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: o.answer
                        })]
                    }, c))
                })]
            })
        }), d.jsx("section", {
            className: "py-16 px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Find Our Office"
                }), d.jsx("div", {
                    className: "aspect-w-16 aspect-h-9",
                    children: d.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.462950468223!2d36.87655494999999!3d-1.2191733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15b9976751c1%3A0xf97a86fce71d56ce!2sRuaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1653835271619!5m2!1sen!2ske",
                        width: "100%",
                        height: "450",
                        style: {
                            border: 0
                        },
                        allowFullScreen: !0,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: "rounded-lg shadow-lg"
                    })
                })]
            })
        })]
    })
}
function pb() {
    const i = [{
        title: "Limbs Orthopaedic – Clinic Website",
        industry: "Healthcare",
        location: "Kasarani, Nairobi",
        overview: "A responsive website for a leading prosthetics and orthotics clinic, designed to streamline patient inquiries and appointment bookings.",
        features: ["Online appointment scheduler", "Service pages with treatment details", "Integrated patient feedback form", "SSL-secured patient data handling"],
        image: "https://i.imgur.com/aFixvm9.png"
    }, {
        title: "Unspotted Africa Auto Spares",
        industry: "Automotive",
        location: "Fundi Lane, Kirinyaga Road, Nairobi",
        overview: "A clean, modern site that showcases services, parts catalog, and contact options for a busy car repair and spares business.",
        features: ["Interactive parts gallery", "Service booking form with date/time picker", "Google Maps integration for directions", "Mobile-first design for on-the-go customers"],
        image: "https://i.imgur.com/Fsixvm9.png"
    }, {
        title: "LawiSchoolPro LMS",
        industry: "Education / E-Learning",
        location: "Nairobi (Online)",
        overview: "A full-featured platform enabling instructors to create courses and students to track progress, complete quizzes, and download certificates.",
        features: ["Course authoring dashboard", "Student progress analytics", "Secure payment gateway integration", "Responsive video and document viewer"],
        image: "https://i.imgur.com/ssixvm9.png"
    }, {
        title: "Richsmart General Works",
        industry: "Retail / Furniture",
        location: "Kariobangi, Nairobi",
        overview: "A sleek online storefront for a bespoke furniture maker, complete with product filters, secure checkout, and gallery.",
        features: ["Category filtering (chairs, tables, school sets, etc.)", "M-Pesa and card payment integration", "High-resolution product galleries with zoom", "Inventory management dashboard"],
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
    }, {
        title: "CV & KRA Services Portal",
        industry: "Professional Services",
        location: "Kenya (Online)",
        overview: "A streamlined backend solution supporting hundreds of CV revamps and KRA filings, with order tracking and automated reminders.",
        features: ["Client order portal with status updates", "Secure document upload and storage", "Automated email notifications", "Admin dashboard for volume reporting"],
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80"
    }];
    return d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx("section", {
            className: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "Our Projects"
                }), d.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Explore a selection of our recent work. Click on any project to see detailed case studies, screenshots, and the technologies we used."
                })]
            })
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [d.jsx("div", {
                className: "space-y-16",
                children: i.map( (r, o) => d.jsx("div", {
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    children: d.jsxs("div", {
                        className: "md:flex",
                        children: [d.jsx("div", {
                            className: "md:w-1/3",
                            children: d.jsx("img", {
                                src: r.image,
                                alt: r.title,
                                className: "h-64 w-full object-cover"
                            })
                        }), d.jsxs("div", {
                            className: "p-8 md:w-2/3",
                            children: [d.jsx("h2", {
                                className: "text-2xl font-bold mb-4",
                                children: r.title
                            }), d.jsxs("div", {
                                className: "mb-4",
                                children: [d.jsx("span", {
                                    className: "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",
                                    children: r.industry
                                }), d.jsx("span", {
                                    className: "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700",
                                    children: r.location
                                })]
                            }), d.jsx("p", {
                                className: "text-gray-600 mb-6",
                                children: r.overview
                            }), d.jsx("h3", {
                                className: "font-semibold mb-2",
                                children: "Key Features:"
                            }), d.jsx("ul", {
                                className: "list-disc list-inside space-y-2 text-gray-600",
                                children: r.features.map( (c, f) => d.jsx("li", {
                                    children: c
                                }, f))
                            })]
                        })]
                    })
                }, o))
            }), d.jsx("div", {
                className: "text-center mt-16",
                children: d.jsx(Se, {
                    to: "/contact",
                    className: "inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition",
                    children: "Book Free Consultation"
                })
            })]
        })]
    })
}
function vb() {
    const i = [{
        quote: "CyberTechOcean built a clean, modern site for our clinic—our patients now book appointments online with ease.",
        author: "Dr. Collins Otieno",
        company: "Limbs Orthopaedic, Kasarani, Nairobi"
    }, {
        quote: "CyberTechOcean crafted a sleek, user-friendly furniture e-commerce site for us—our sales have surged since launch.",
        author: "Richard Omedo",
        company: "Richsmart General Works, Kariobangi, Nairobi"
    }, {
        quote: "Our auto shop website now gets inquiries daily. The team captured our brand perfectly and made everything so simple.",
        author: "Oscar Otieno",
        company: "Unspotted Africa Auto Spares, Kirinyaga Rd"
    }, {
        quote: "They designed and launched our entire e-learning platform, LawiSchoolPro LMS, faster than expected—excellent support throughout.",
        author: "LawiSchoolPro Team",
        company: "LawiSchoolPro LMS"
    }, {
        quote: "I got my CV revamped and KRA returns filed in record time. The new format helped me land multiple interviews!",
        author: "Pauline Nkatha",
        company: "Professional Client"
    }, {
        quote: "CyberTechOcean's regulatory compliance service took all the stress out of KRA filings. Highly recommend them.",
        author: "Peter Mwangi",
        company: "Small Business Owner"
    }, {
        quote: "The data analysis dashboard they delivered transformed how we track sales data—actionable insights in real time.",
        author: "Sarah Wanjiku",
        company: "Retail Analytics Ltd."
    }, {
        quote: "Their graphic design team gave our brand a fresh, modern look that resonates with our audience across all channels.",
        author: "Tommy Mutua",
        company: "Creative Concepts Agency"
    }, {
        quote: "Working with CyberTechOcean on our digital marketing campaign was a game changer—we saw a 40% increase in leads.",
        author: "Linda Kariuki",
        company: "GrowthWave Consulting"
    }, {
        quote: "Since CyberTechOcean took over our social media, engagement at Limbs Orthopaedic has doubled—our appointment bookings through Instagram DMs are off the charts!",
        author: "Dr. Collins Otieno",
        company: "Limbs Orthopaedic, Kasarani"
    }, {
        quote: "Our follower count on Facebook and Pinterest grew by over 50% in just two months thanks to their targeted campaigns for Richsmart General Works.",
        author: "Richard Omedo",
        company: "Richsmart General Works"
    }, {
        quote: "CyberTechOcean’s social media strategy for Unspotted Africa Auto Spares has driven consistent lead generation—our inbox and WhatsApp are buzzing daily!",
        author: "Oscar Otieno",
        company: "Unspotted Africa Auto Spares"
    }]
      , r = [{
        title: "Personalized Service",
        description: "We take time to understand your unique needs—and deliver solutions that fit."
    }, {
        title: "Fast Turnaround",
        description: "From project kickoff to launch, we move quickly without cutting corners."
    }, {
        title: "Reliable Support",
        description: "Whether it's a site update or last-minute tax filing, our team is just a message away."
    }, {
        title: "Tangible Results",
        description: "Increased bookings, higher site traffic, and countless career-success stories."
    }];
    return d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx("section", {
            className: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20",
            children: d.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [d.jsx("h1", {
                    className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text",
                    children: "Client Testimonials"
                }), d.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Real stories from real clients we've helped grow, streamline, and succeed."
                })]
            })
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                children: i.map( (o, c) => d.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg",
                    children: [d.jsxs("p", {
                        className: "text-gray-700 mb-4 italic",
                        children: ['"', o.quote, '"']
                    }), d.jsxs("div", {
                        className: "text-right",
                        children: [d.jsx("p", {
                            className: "font-semibold text-[#34f4a4]",
                            children: o.author
                        }), o.company && d.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: o.company
                        })]
                    })]
                }, c))
            }), d.jsxs("div", {
                className: "bg-gray-50 rounded-lg p-8 mb-16",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-8 text-center",
                    children: "Why Our Clients Love Us"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: r.map( (o, c) => d.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold text-[#34f4a4]",
                            children: o.title
                        }), d.jsx("p", {
                            className: "text-gray-600",
                            children: o.description
                        })]
                    }, c))
                })]
            }), d.jsxs("div", {
                className: "text-center",
                children: [d.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Share Your Story"
                }), d.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Have we helped you succeed? We'd love to hear how CyberTechOcean has made a difference for your business or career."
                }), d.jsx(Se, {
                    to: "/contact",
                    className: "inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition",
                    children: "Submit Your Testimonial"
                })]
            })]
        })]
    })
}
function yb() {
    return d.jsx(Uv, {
        children: d.jsx(jv, {
            children: d.jsxs(It, {
                path: "/",
                element: d.jsx(ib, {}),
                children: [d.jsx(It, {
                    index: !0,
                    element: d.jsx(rb, {})
                }), d.jsx(It, {
                    path: "/services",
                    element: d.jsx(cb, {})
                }), d.jsx(It, {
                    path: "/services/:id",
                    element: d.jsx(ob, {})
                }), d.jsx(It, {
                    path: "/about",
                    element: d.jsx(ub, {})
                }), d.jsx(It, {
                    path: "/contact",
                    element: d.jsx(gb, {})
                }), d.jsx(It, {
                    path: "/projects",
                    element: d.jsx(pb, {})
                }), d.jsx(It, {
                    path: "/testimonials",
                    element: d.jsx(vb, {})
                })]
            })
        })
    })
}
D1.createRoot(document.getElementById("root")).render(d.jsx(q.StrictMode, {
    children: d.jsx(yb, {})
}));
