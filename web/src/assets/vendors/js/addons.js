/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) { "use strict"; var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return S.each(this, e) }, map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function(n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } }

        function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { var n = e.split("|"),
                r = n.length; while (r--) b.attrHandle[n[r]] = t }

        function pe(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) { return le(function(o) { return o = +o, le(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function(e) { var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0; while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return l = !0, 0; var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t);
                    n = e; while (n = n.parentNode) a.unshift(n);
                    n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    r = 0,
                    i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(h, e, t, g, v) { var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e; return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function(e) { var r = [],
                            i = [],
                            s = f(e.replace($, "$1")); return s[S] ? le(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: le(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function(n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return J.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function() { return [0] }), last: ve(function(e, t) { return [t - 1] }), eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) { var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++; return e.first ? function(e, t, n) { while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) { var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r) }
                        o = p.length; while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) }

        function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) }
                    c.push(t) }
            return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function(e, t) { var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h) }
                        m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f) }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function(e, t, n) { var r = [],
                i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (i && S(e).is(n)) break;
                    r.push(e) }
            return r },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function() { for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || j, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, j = S(E); var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({ has: function(e) { var t = S(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e); if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, S.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return S.Deferred(function(r) { S.each(o, function(e, t) { var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function(e) { return null != e ? S.extend(e, a) : a } },
                s = {}; return S.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) }; var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n) } else n = void 0;
        return n }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Q.remove(this, e) }) } }), S.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) }) }

    function Ae(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce) }
    S.event = { global: {}, add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } }); var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } }

    function Pe(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) { var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l)) } return n }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function(e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0 }
                    n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function(e) { return Re(this, e, !0) }, remove: function(e) { return Re(this, e) }, text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) }, prepend: function() { return Pe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = qe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) }, html: function(e) { return $(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return Pe(this, arguments, function(e) { var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } })) }(); var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) { var t = S.cssProps[e] || Ue[e]; return t || (e in ze ? e : Ue[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length; while (n--)
                if ((e = _e[n] + t) in ze) return e }(e) || e) } var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function Ze(e, t, n) { var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Me.test(a)) { if (!n) return a;
            a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style; if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function(e, u) { S.cssHooks[u] = { get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) }, set: function(e, t, n) { var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s) } } }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({ css: function(e, t) { return $(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {}; var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function ft(o, e, t) { var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0 }
                    d[r] = v && v[r] || S.style(e, r) }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() { var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), S.each(["toggle", "show", "hide"], function(e, r) { var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) } }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() { var e, t = 0,
            n = S.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0 }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) } }) }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value; var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(P); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r } }); var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) }); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(i, t) { var o = typeof i,
                a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var xt = /\r/g;
    S.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) { var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t }; var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i) }
    S.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } }); var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(P) || []; if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, i, o, a) { var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (v.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return S.get(e, t, n, "json") }, getScript: function(e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} }; var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) { var o, a; if (y.cors || zt && !i.crossDomain) return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f)) } }, S.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        S.fn[t] = function(e) { return $(this, function(e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { S.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S }); var Yt = C.jQuery,
        Qt = C.$; return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function() { 'use strict';

    function e(e) { return e && '[object Function]' === {}.toString.call(e) }

    function t(e, t) { if (1 !== e.nodeType) return []; var o = getComputedStyle(e, null); return t ? o[t] : o }

    function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host }

    function n(e) { if (!e) return document.body; switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body; } var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) }

    function r(e) { return 11 === e ? re : 10 === e ? pe : re || pe }

    function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) }

    function d(e) { return null === e.parentNode ? e : d(e.parentNode) }

    function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) }

    function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] }

    function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, 'top'),
            i = l(t, 'left'),
            r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e }

    function m(e, t) { var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10) }

    function h(e, t, o, n) { return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0) }

    function c() { var e = document.body,
            t = document.documentElement,
            o = r(10) && getComputedStyle(t); return { height: h('Height', e, t, o), width: h('Width', e, t, o) } }

    function g(e) { return le({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'),
                    i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) {} var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            s = 'HTML' === e.nodeName ? c() : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a; if (f || h) { var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) }

    function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = 'HTML' === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var y = parseFloat(m.marginTop, 10),
                w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b }

    function y(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = $(o.clientWidth, window.innerWidth || 0),
            r = $(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'),
            d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) }

    function w(e) { var n = e.nodeName; return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e)) }

    function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement; return o || document.documentElement }

    function v(e, t, i, r) { var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            d = p ? E(e) : a(e, t); if ('viewport' === r) s = y(d, p);
        else { var l; 'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r; var f = b(l, d, p); if ('HTML' === l.nodeName && !w(d)) { var m = c(),
                    h = m.height,
                    g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left } else s = f } return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s }

    function x(e) { var t = e.width,
            o = e.height; return t * o }

    function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s).map(function(e) { return le({ key: e }, s[e], { area: x(s[e]) }) }).sort(function(e, t) { return t.area - e.area }),
            a = d.filter(function(e) { var t = e.width,
                    n = e.height; return t >= o.clientWidth && n >= o.clientHeight }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1]; return l + (f ? '-' + f : '') }

    function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? E(t) : a(t, o); return b(o, i, n) }

    function S(e) { var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = { width: e.offsetWidth + n, height: e.offsetHeight + o }; return i }

    function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function C(e, t, o) { o = o.split('-')[0]; var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i }

    function D(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === o }); var n = D(e, function(e) { return e[t] === o }); return e.indexOf(n) }

    function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function(t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o }

    function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }

    function W(e, t) { return e.some(function(e) { var o = e.name,
                n = e.enabled; return n && o === t }) }

    function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n],
                r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null }

    function H() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function M(e, t, o, i) { var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) }

    function I(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o }

    function F() { this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }

    function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) }

    function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function j(e, t) { Object.keys(t).forEach(function(o) { var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) }

    function K(e, t) { Object.keys(t).forEach(function(o) { var n = t[o];!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) }

    function q(e, t, o) { var n = D(e, function(e) { var o = e.name; return o === t }),
            i = !!n && e.some(function(e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i }

    function G(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e }

    function z(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = me.indexOf(e),
            n = me.slice(o + 1).concat(me.slice(0, o)); return t ? n.reverse() : n }

    function V(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) {
                case '%p':
                    s = o; break;
                case '%':
                case '%r':
                default:
                    s = n; } var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r }

    function _(e, t, o, n) { var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            s = p.indexOf(D(p, function(e) { return -1 !== e.search(/,|\s/) }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function(e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1; return e.reduce(function(e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function(e) { return V(e, i, t, o) }) }), a.forEach(function(e, t) { e.forEach(function(o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i }

    function X(e, t) { var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
        if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) { oe = 1; break }
    var i = ee && window.Promise,
        ie = i ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, oe)) } },
        re = ee && !!(window.MSInputMethodContext && document.documentMode),
        pe = ee && /MSIE 10/.test(navigator.userAgent),
        se = function(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') },
        de = function() {
            function e(e, t) { for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function(t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(),
        ae = function(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e },
        le = Object.assign || function(e) { for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e },
        fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        me = fe.slice(3),
        he = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
        ce = function() {
            function t(o, n) { var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) { i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return le({ name: e }, i.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p } return de(t, [{ key: 'update', value: function() { return k.call(this) } }, { key: 'destroy', value: function() { return H.call(this) } }, { key: 'enableEventListeners', value: function() { return F.call(this) } }, { key: 'disableEventListeners', value: function() { return U.call(this) } }]), t }(); return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1]; if (n) { var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) };
                        e.offsets.popper = le({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: X, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, t) { var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o)); var n = B('transform'),
                        i = e.instance.popper.style,
                        r = i.top,
                        s = i.left,
                        d = i[n];
                    i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority,
                        f = e.offsets.popper,
                        m = { primary: function(e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o) }, secondary: function(e) { var o = 'right' === e ? 'left' : 'top',
                                    n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n) } }; return l.forEach(function(e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, o) { var n; if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2,
                        y = t(e.instance.popper),
                        w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - w - E; return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function(e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = T(n),
                        r = e.placement.split('-')[1] || '',
                        p = []; switch (t.behavior) {
                        case he.FLIP:
                            p = [n, i]; break;
                        case he.CLOCKWISE:
                            p = z(n); break;
                        case he.COUNTERCLOCKWISE:
                            p = z(n, !0); break;
                        default:
                            p = t.behavior; } return p.forEach(function(s, d) { if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference,
                        o = D(e.instance.modifiers, function(e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        r = D(e.instance.modifiers, function(e) { return 'applyStyle' === e.name }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                        l = p(e.instance.popper),
                        f = u(l),
                        m = { position: i.position },
                        h = { left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right) },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === n ? 'left' : 'right',
                        b = B('transform'); if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                    else { var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == g ? -1 : 1;
                        m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function(e) { return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, o, n, i) { var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ce });
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, g, u) { "use strict";

    function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function e(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, i) } return n }

    function l(o) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(r), !0).forEach(function(t) { var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function(t) { Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t)) }) } return o }
    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u; var n = "transitionend";

    function o(t) { var e = this,
            n = !1; return g(this).one(_.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || _.triggerTransitionEnd(e) }, t), this } var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n); return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { g(t).trigger(n) }, supportsTransitionEnd: function() { return Boolean(n) }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(t, e, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') }
            var a }, findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null }, jQueryDetection: function() { if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = g.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") } };
    _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = { bindType: n, delegateType: n, handle: function(t) { if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = g.fn[r],
        f = { CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api" },
        d = "alert",
        m = "fade",
        p = "show",
        v = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.close = function(t) { var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function() { g.removeData(this._element, a), this._element = null }, t._getRootElement = function(t) { var e = _.getSelectorFromElement(t),
                    n = !1; return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0] }, t._triggerCloseEvent = function(t) { var e = g.Event(f.CLOSE); return g(t).trigger(e), e }, t._removeElement = function(e) { var n = this; if (g(e).removeClass(p), g(e).hasClass(m)) { var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function(t) { g(t).detach().trigger(f.CLOSED).remove() }, i._jQueryInterface = function(n) { return this.each(function() { var t = g(this),
                        e = t.data(a);
                    e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), i }();
    g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function() { return g.fn[r] = h, v._jQueryInterface }; var y = "button",
        E = "bs.button",
        C = "." + E,
        T = ".data-api",
        b = g.fn[y],
        S = "active",
        D = "btn",
        I = "focus",
        w = '[data-toggle^="button"]',
        A = '[data-toggle="buttons"]',
        N = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        k = 'input:not([type="hidden"])',
        P = ".active",
        L = ".btn",
        j = { CLICK_DATA_API: "click" + C + T, FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T, LOAD_DATA_API: "load" + C + T },
        H = function() {
            function n(t) { this._element = t } var t = n.prototype; return t.toggle = function() { var t = !0,
                    e = !0,
                    n = g(this._element).closest(A)[0]; if (n) { var i = this._element.querySelector(k); if (i) { if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S)) t = !1;
                            else { var o = n.querySelector(P);
                                o && g(o).removeClass(S) }
                        else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
                        t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1 } }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)) }, t.dispose = function() { g.removeData(this._element, E), this._element = null }, n._jQueryInterface = function(e) { return this.each(function() { var t = g(this).data(E);
                    t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), n }();
    g(document).on(j.CLICK_DATA_API, w, function(t) { var e = t.target; if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else { var n = e.querySelector(k); if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();
            H._jQueryInterface.call(g(e), "toggle") } }).on(j.FOCUS_BLUR_DATA_API, w, function(t) { var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type)) }), g(window).on(j.LOAD_DATA_API, function() { for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) { var i = t[e],
                o = i.querySelector(k);
            o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S) } for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) { var a = t[r]; "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S) } }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function() { return g.fn[y] = b, H._jQueryInterface }; var R = "carousel",
        x = "bs.carousel",
        F = "." + x,
        U = ".data-api",
        W = g.fn[R],
        q = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        M = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        K = "next",
        Q = "prev",
        B = "left",
        V = "right",
        Y = { SLIDE: "slide" + F, SLID: "slid" + F, KEYDOWN: "keydown" + F, MOUSEENTER: "mouseenter" + F, MOUSELEAVE: "mouseleave" + F, TOUCHSTART: "touchstart" + F, TOUCHMOVE: "touchmove" + F, TOUCHEND: "touchend" + F, POINTERDOWN: "pointerdown" + F, POINTERUP: "pointerup" + F, DRAG_START: "dragstart" + F, LOAD_DATA_API: "load" + F + U, CLICK_DATA_API: "click" + F + U },
        z = "carousel",
        X = "active",
        $ = "slide",
        G = "carousel-item-right",
        J = "carousel-item-left",
        Z = "carousel-item-next",
        tt = "carousel-item-prev",
        et = "pointer-event",
        nt = ".active",
        it = ".active.carousel-item",
        ot = ".carousel-item",
        rt = ".carousel-item img",
        st = ".carousel-item-next, .carousel-item-prev",
        at = ".carousel-indicators",
        lt = "[data-slide], [data-slide-to]",
        ct = '[data-ride="carousel"]',
        ht = { TOUCH: "touch", PEN: "pen" },
        ut = function() {
            function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var t = r.prototype; return t.next = function() { this._isSliding || this._slide(K) }, t.nextWhenVisible = function() {!document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(Q) }, t.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) { var e = this;
                this._activeElement = this._element.querySelector(it); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) g(this._element).one(Y.SLID, function() { return e.to(t) });
                    else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? K : Q;
                        this._slide(i, this._items[t]) } }, t.dispose = function() { g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t }, t._handleSwipe = function() { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX;
                    (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next() } }, t._addEventListeners = function() { var e = this;
                this._config.keyboard && g(this._element).on(Y.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function(t) { return e.pause(t) }).on(Y.MOUSELEAVE, function(t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, t._addTouchEventListeners = function() { var e = this; if (this._touchSupported) { var n = function(t) { e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX) },
                        i = function(t) { e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval)) };
                    g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function(t) { return t.preventDefault() }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function(t) { return n(t) }), g(this._element).on(Y.POINTERUP, function(t) { return i(t) }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function(t) { return n(t) }), g(this._element).on(Y.TOUCHMOVE, function(t) { return function(t) { t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX }(t) }), g(this._element).on(Y.TOUCHEND, function(t) { return i(t) })) } }, t._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev(); break;
                    case 39:
                        t.preventDefault(), this.next() } }, t._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t) }, t._getItemByDirection = function(t, e) { var n = t === K,
                    i = t === Q,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === Q ? -1 : 1)) % this._items.length; return -1 == s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function(t, e) { var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(it)),
                    o = g.Event(Y.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return g(this._element).trigger(o), o }, t._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
                    g(e).removeClass(X); var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(X) } }, t._slide = function(t, e) { var n, i, o, r = this,
                    s = this._element.querySelector(it),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval); if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = g.Event(Y.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (g(this._element).hasClass($)) { g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval; var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() { g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function() { return g(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);
                    h && this.cycle() } }, r._jQueryInterface = function(i) { return this.each(function() { var t = g(this).data(x),
                        e = l({}, q, {}, g(this).data()); "object" == typeof i && (e = l({}, e, {}, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } else e.interval && e.ride && (t.pause(), t.cycle()) }) }, r._dataApiClickHandler = function(t) { var e = _.getSelectorFromElement(this); if (e) { var n = g(e)[0]; if (n && g(n).hasClass(z)) { var i = l({}, g(n).data(), {}, g(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return q } }]), r }();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function() { for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) { var i = g(t[e]);
            ut._jQueryInterface.call(i, i.data()) } }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function() { return g.fn[R] = W, ut._jQueryInterface }; var ft = "collapse",
        dt = "bs.collapse",
        gt = "." + dt,
        _t = g.fn[ft],
        mt = { toggle: !0, parent: "" },
        pt = { toggle: "boolean", parent: "(string|element)" },
        vt = { SHOW: "show" + gt, SHOWN: "shown" + gt, HIDE: "hide" + gt, HIDDEN: "hidden" + gt, CLICK_DATA_API: "click" + gt + ".data-api" },
        yt = "show",
        Et = "collapse",
        Ct = "collapsing",
        Tt = "collapsed",
        bt = "width",
        St = "height",
        Dt = ".show, .collapsing",
        It = '[data-toggle="collapse"]',
        wt = function() {
            function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) { var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) { return t === e });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function() { g(this._element).hasClass(yt) ? this.hide() : this.show() }, t.show = function() { var t, e, n = this; if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et) })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) { var i = g.Event(vt.SHOW); if (g(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null)); var o = this._getDimension();
                        g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() { g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, t.hide = function() { var t = this; if (!this._isTransitioning && g(this._element).hasClass(yt)) { var e = g.Event(vt.HIDE); if (g(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt); var i = this._triggerArray.length; if (0 < i)
                            for (var o = 0; o < i; o++) { var r = this._triggerArray[o],
                                    s = _.getSelectorFromElement(r); if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1) }
                        this.setTransitioning(!0);
                        this._element.style[n] = ""; var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() { t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t }, t._getDimension = function() { return g(this._element).hasClass(bt) ? bt : St }, t._getParent = function() { var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e)); return g(i).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function(t, e) { var n = g(t).hasClass(yt);
                e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function(t) { var e = _.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function(i) { return this.each(function() { var t = g(this),
                        e = t.data(dt),
                        n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return mt } }]), a }();
    g(document).on(vt.CLICK_DATA_API, It, function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() { var t = g(this),
                e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e) }) }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function() { return g.fn[ft] = _t, wt._jQueryInterface }; var At = "dropdown",
        Nt = "bs.dropdown",
        Ot = "." + Nt,
        kt = ".data-api",
        Pt = g.fn[At],
        Lt = new RegExp("38|40|27"),
        jt = { HIDE: "hide" + Ot, HIDDEN: "hidden" + Ot, SHOW: "show" + Ot, SHOWN: "shown" + Ot, CLICK: "click" + Ot, CLICK_DATA_API: "click" + Ot + kt, KEYDOWN_DATA_API: "keydown" + Ot + kt, KEYUP_DATA_API: "keyup" + Ot + kt },
        Ht = "disabled",
        Rt = "show",
        xt = "dropup",
        Ft = "dropright",
        Ut = "dropleft",
        Wt = "dropdown-menu-right",
        qt = "position-static",
        Mt = '[data-toggle="dropdown"]',
        Kt = ".dropdown form",
        Qt = ".dropdown-menu",
        Bt = ".navbar-nav",
        Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Yt = "top-start",
        zt = "top-end",
        Xt = "bottom-start",
        $t = "bottom-end",
        Gt = "right-start",
        Jt = "left-start",
        Zt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        te = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        ee = function() {
            function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function() { if (!this._element.disabled && !g(this._element).hasClass(Ht)) { var t = g(this._menu).hasClass(Rt);
                    c._clearMenus(), t || this.show(!0) } }, t.show = function(t) { if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) { var e = { relatedTarget: this._element },
                        n = g.Event(jt.SHOW, e),
                        i = c._getParentFromElement(this._element); if (g(i).trigger(n), !n.isDefaultPrevented()) { if (!this._inNavbar && t) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e)) } } }, t.hide = function() { if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) { var t = { relatedTarget: this._element },
                        e = g.Event(jt.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t))) } }, t.dispose = function() { g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() { var e = this;
                g(this._element).on(jt.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function(t) { return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t }, t._getMenuElement = function() { if (!this._menu) { var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Qt)) } return this._menu }, t._getPlacement = function() { var t = g(this._element.parentNode),
                    e = Xt; return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e }, t._detectNavbar = function() { return 0 < g(this._element).closest(".navbar").length }, t._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, t._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), l({}, t, {}, this._config.popperConfig) }, c._jQueryInterface = function(e) { return this.each(function() { var t = g(this).data(Nt); if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, c._clearMenus = function(t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) { var o = c._getParentFromElement(e[n]),
                            r = g(e[n]).data(Nt),
                            s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), r) { var a = r._menu; if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) { var l = g.Event(jt.HIDE, s);
                                g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s))) } } } }, c._getParentFromElement = function(t) { var e, n = _.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function(t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) { var e = c._getParentFromElement(this),
                        n = g(e).hasClass(Rt); if (n || 27 !== t.which)
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(Vt)).filter(function(t) { return g(t).is(":visible") }); if (0 !== i.length) { var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === t.which) { var r = e.querySelector(Mt);
                                g(r).trigger("focus") }
                            g(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return Zt } }, { key: "DefaultType", get: function() { return te } }]), c }();
    g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function(t) { t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle") }).on(jt.CLICK_DATA_API, Kt, function(t) { t.stopPropagation() }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function() { return g.fn[At] = Pt, ee._jQueryInterface }; var ne = "modal",
        ie = "bs.modal",
        oe = "." + ie,
        re = g.fn[ne],
        se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        ae = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        le = { HIDE: "hide" + oe, HIDE_PREVENTED: "hidePrevented" + oe, HIDDEN: "hidden" + oe, SHOW: "show" + oe, SHOWN: "shown" + oe, FOCUSIN: "focusin" + oe, RESIZE: "resize" + oe, CLICK_DISMISS: "click.dismiss" + oe, KEYDOWN_DISMISS: "keydown.dismiss" + oe, MOUSEUP_DISMISS: "mouseup.dismiss" + oe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe, CLICK_DATA_API: "click" + oe + ".data-api" },
        ce = "modal-dialog-scrollable",
        he = "modal-scrollbar-measure",
        ue = "modal-backdrop",
        fe = "modal-open",
        de = "fade",
        ge = "show",
        _e = "modal-static",
        me = ".modal-dialog",
        pe = ".modal-body",
        ve = '[data-toggle="modal"]',
        ye = '[data-dismiss="modal"]',
        Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ce = ".sticky-top",
        Te = function() {
            function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var t = o.prototype; return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) { var e = this; if (!this._isShown && !this._isTransitioning) { g(this._element).hasClass(de) && (this._isTransitioning = !0); var n = g.Event(le.SHOW, { relatedTarget: t });
                    g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function(t) { return e.hide(t) }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function() { g(e._element).one(le.MOUSEUP_DISMISS, function(t) { g(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) })) } }, t.hide = function(t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = g.Event(le.HIDE); if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = g(this._element).hasClass(de); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) { var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(o) } else this._hideModal() } } }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) { return g(t).off(oe) }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t }, t._triggerBackdropTransition = function() { var t = this; if ("static" === this._config.backdrop) { var e = g.Event(le.HIDE_PREVENTED); if (g(this._element).trigger(e), e.defaultPrevented) return;
                    this._element.classList.add(_e); var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() { t._element.classList.remove(_e) }).emulateTransitionEnd(n), this._element.focus() } else this.hide() }, t._showElement = function(t) { var e = this,
                    n = g(this._element).hasClass(de),
                    i = this._dialog ? this._dialog.querySelector(pe) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

                function o() { e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r) } var r = g.Event(le.SHOWN, { relatedTarget: t }); if (n) { var s = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s) } else o() }, t._enforceFocus = function() { var e = this;
                g(document).off(le.FOCUSIN).on(le.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function() { var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function(t) { 27 === t.which && e._triggerBackdropTransition() }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS) }, t._setResizeEvent = function() { var e = this;
                this._isShown ? g(window).on(le.RESIZE, function(t) { return e.handleUpdate(t) }) : g(window).off(le.RESIZE) }, t._hideModal = function() { var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN) }) }, t._removeBackdrop = function() { this._backdrop && (g(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) { var e = this,
                    n = g(this._element).hasClass(de) ? de : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition() }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return; if (!n) return void t(); var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { g(this._backdrop).removeClass(ge); var o = function() { e._removeBackdrop(), t && t() }; if (g(this._element).hasClass(de)) { var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else t && t() }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function() { var o = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(Ee)),
                        e = [].slice.call(document.querySelectorAll(Ce));
                    g(t).each(function(t, e) { var n = e.style.paddingRight,
                            i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), g(e).each(function(t, e) { var n = e.style.marginRight,
                            i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                        i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") }
                g(document.body).addClass(fe) }, t._resetScrollbar = function() { var t = [].slice.call(document.querySelectorAll(Ee));
                g(t).each(function(t, e) { var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + Ce));
                g(e).each(function(t, e) { var n = g(e).data("margin-right"); "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right") }); var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function() { var t = document.createElement("div");
                t.className = he, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function(n, i) { return this.each(function() { var t = g(this).data(ie),
                        e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {}); if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i) } else e.show && t.show(i) }) }, s(o, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return se } }]), o }();
    g(document).on(le.CLICK_DATA_API, ve, function(t) { var e, n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i)); var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var r = g(e).one(le.SHOW, function(t) { t.isDefaultPrevented() || r.one(le.HIDDEN, function() { g(n).is(":visible") && n.focus() }) });
        Te._jQueryInterface.call(g(e), o, this) }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function() { return g.fn[ne] = re, Te._jQueryInterface }; var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Se = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function we(t, r, e) { if (0 === t.length) return t; if (e && "function" == typeof e) return e(t); for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function(t) { var e = a[t],
                    n = e.nodeName.toLowerCase(); if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue"; var i = [].slice.call(e.attributes),
                    o = [].concat(r["*"] || [], r[n] || []);
                i.forEach(function(t) {! function(t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie)); for (var i = e.filter(function(t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1 }(t, o) && e.removeAttribute(t.nodeName) }) }, o = 0, l = a.length; o < l; o++) i(o); return n.body.innerHTML } var Ae = "tooltip",
        Ne = "bs.tooltip",
        Oe = "." + Ne,
        ke = g.fn[Ae],
        Pe = "bs-tooltip",
        Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        He = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        Re = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        xe = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Se, popperConfig: null },
        Fe = "show",
        Ue = "out",
        We = { HIDE: "hide" + Oe, HIDDEN: "hidden" + Oe, SHOW: "show" + Oe, SHOWN: "shown" + Oe, INSERTED: "inserted" + Oe, CLICK: "click" + Oe, FOCUSIN: "focusin" + Oe, FOCUSOUT: "focusout" + Oe, MOUSEENTER: "mouseenter" + Oe, MOUSELEAVE: "mouseleave" + Oe },
        qe = "fade",
        Me = "show",
        Ke = ".tooltip-inner",
        Qe = ".arrow",
        Be = "hover",
        Ve = "focus",
        Ye = "click",
        ze = "manual",
        Xe = function() {
            function i(t, e) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) { if (this._isEnabled)
                    if (t) { var e = this.constructor.DATA_KEY,
                            n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);
                        this._enter(null, this) } }, t.dispose = function() { clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() { var e = this; if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = g.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { g(this.element).trigger(t); var n = _.findShadowRoot(this.element),
                        i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !i) return; var o = this.getTipElement(),
                        r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a); var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop); var c = function() { e.config.animation && e._fixTransition(); var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e) }; if (g(this.tip).hasClass(qe)) { var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, t.hide = function(t) {
                function e() { n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t() } var n = this,
                    i = this.getTipElement(),
                    o = g.Event(this.constructor.Event.HIDE); if (g(this.element).trigger(o), !o.isDefaultPrevented()) { if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) { var r = _.getTransitionDurationFromElement(i);
                        g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r) } else e();
                    this._hoverState = "" } }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { g(this.getTipElement()).addClass(Pe + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || g(this.config.template)[0], this.tip }, t.setContent = function() { var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me) }, t.setElementContent = function(t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title) }, t._getPopperConfig = function(t) { var e = this; return l({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Qe }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }, {}, this.config.popperConfig) }, t._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this.config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, t._getContainer = function() { return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container) }, t._getAttachment = function(t) { return Re[t.toUpperCase()] }, t._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(t) { if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== ze) { var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) }) } }), this._hideModalHandler = function() { i.element && i.hide() }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === Fe && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === Ue && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, t._getConfig = function(t) { var e = g(this.element).data(); return Object.keys(e).forEach(function(t) {-1 !== je.indexOf(t) && delete e[t] }), "number" == typeof(t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function() { var t = {}; if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function() { var t = g(this.getTipElement()),
                    e = t.attr("class").match(Le);
                null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function(t) { var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() { var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function(n) { return this.each(function() { var t = g(this).data(Ne),
                        e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return xe } }, { key: "NAME", get: function() { return Ae } }, { key: "DATA_KEY", get: function() { return Ne } }, { key: "Event", get: function() { return We } }, { key: "EVENT_KEY", get: function() { return Oe } }, { key: "DefaultType", get: function() { return He } }]), i }();
    g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function() { return g.fn[Ae] = ke, Xe._jQueryInterface }; var $e = "popover",
        Ge = "bs.popover",
        Je = "." + Ge,
        Ze = g.fn[$e],
        tn = "bs-popover",
        en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
        nn = l({}, Xe.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
        rn = "fade",
        sn = "show",
        an = ".popover-header",
        ln = ".popover-body",
        cn = { HIDE: "hide" + Je, HIDDEN: "hidden" + Je, SHOW: "show" + Je, SHOWN: "shown" + Je, INSERTED: "inserted" + Je, CLICK: "click" + Je, FOCUSIN: "focusin" + Je, FOCUSOUT: "focusout" + Je, MOUSEENTER: "mouseenter" + Je, MOUSELEAVE: "mouseleave" + Je },
        hn = function(t) {
            function i() { return t.apply(this, arguments) || this }! function(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }(i, t); var e = i.prototype; return e.isWithContent = function() { return this.getTitle() || this._getContent() }, e.addAttachmentClass = function(t) { g(this.getTipElement()).addClass(tn + "-" + t) }, e.getTipElement = function() { return this.tip = this.tip || g(this.config.template)[0], this.tip }, e.setContent = function() { var t = g(this.getTipElement());
                this.setElementContent(t.find(an), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn) }, e._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, e._cleanTipClass = function() { var t = g(this.getTipElement()),
                    e = t.attr("class").match(en);
                null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var t = g(this).data(Ge),
                        e = "object" == typeof n ? n : null; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return nn } }, { key: "NAME", get: function() { return $e } }, { key: "DATA_KEY", get: function() { return Ge } }, { key: "Event", get: function() { return cn } }, { key: "EVENT_KEY", get: function() { return Je } }, { key: "DefaultType", get: function() { return on } }]), i }(Xe);
    g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function() { return g.fn[$e] = Ze, hn._jQueryInterface }; var un = "scrollspy",
        fn = "bs.scrollspy",
        dn = "." + fn,
        gn = g.fn[un],
        _n = { offset: 10, method: "auto", target: "" },
        mn = { offset: "number", method: "string", target: "(string|element)" },
        pn = { ACTIVATE: "activate" + dn, SCROLL: "scroll" + dn, LOAD_DATA_API: "load" + dn + ".data-api" },
        vn = "dropdown-item",
        yn = "active",
        En = '[data-spy="scroll"]',
        Cn = ".nav, .list-group",
        Tn = ".nav-link",
        bn = ".nav-item",
        Sn = ".list-group-item",
        Dn = ".dropdown",
        In = ".dropdown-item",
        wn = ".dropdown-toggle",
        An = "offset",
        Nn = "position",
        On = function() {
            function n(t, e) { var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function() { var e = this,
                    t = this._scrollElement === this._scrollElement.window ? An : Nn,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === Nn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) { var e, n = _.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [g(e)[o]().top + r, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function() { g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) { if ("string" != typeof(t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) { var e = g(t.target).attr("id");
                    e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e } return _.typeCheckConfig(un, t, mn), t }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() { var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, t._activate = function(e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",").map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }),
                    n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, { relatedTarget: e }) }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) { return t.classList.contains(yn) }).forEach(function(t) { return t.classList.remove(yn) }) }, n._jQueryInterface = function(e) { return this.each(function() { var t = g(this).data(fn); if (t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return _n } }]), n }();
    g(window).on(pn.LOAD_DATA_API, function() { for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) { var n = g(t[e]);
            On._jQueryInterface.call(n, n.data()) } }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function() { return g.fn[un] = gn, On._jQueryInterface }; var kn = "bs.tab",
        Pn = "." + kn,
        Ln = g.fn.tab,
        jn = { HIDE: "hide" + Pn, HIDDEN: "hidden" + Pn, SHOW: "show" + Pn, SHOWN: "shown" + Pn, CLICK_DATA_API: "click" + Pn + ".data-api" },
        Hn = "dropdown-menu",
        Rn = "active",
        xn = "disabled",
        Fn = "fade",
        Un = "show",
        Wn = ".dropdown",
        qn = ".nav, .list-group",
        Mn = ".active",
        Kn = "> li > .active",
        Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Bn = ".dropdown-toggle",
        Vn = "> .dropdown-menu .active",
        Yn = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) { var t, i, e = g(this._element).closest(qn)[0],
                        o = _.getSelectorFromElement(this._element); if (e) { var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1] } var s = g.Event(jn.HIDE, { relatedTarget: this._element }),
                        a = g.Event(jn.SHOW, { relatedTarget: i }); if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (t = document.querySelector(o)), this._activate(this._element, e); var l = function() { var t = g.Event(jn.HIDDEN, { relatedTarget: n._element }),
                                e = g.Event(jn.SHOWN, { relatedTarget: i });
                            g(i).trigger(t), g(n._element).trigger(e) };
                        t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function() { g.removeData(this._element, kn), this._element = null }, t._activate = function(t, e, n) {
                function i() { return o._transitionComplete(t, r, n) } var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
                    s = n && r && g(r).hasClass(Fn); if (r && s) { var a = _.getTransitionDurationFromElement(r);
                    g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a) } else i() }, t._transitionComplete = function(t, e, n) { if (e) { g(e).removeClass(Rn); var i = g(e.parentNode).find(Vn)[0];
                    i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) { var o = g(t).closest(Wn)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(Bn));
                        g(r).addClass(Rn) }
                    t.setAttribute("aria-expanded", !0) }
                n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var t = g(this),
                        e = t.data(kn); if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), i }();
    g(document).on(jn.CLICK_DATA_API, Qn, function(t) { t.preventDefault(), Yn._jQueryInterface.call(g(this), "show") }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function() { return g.fn.tab = Ln, Yn._jQueryInterface }; var zn = "toast",
        Xn = "bs.toast",
        $n = "." + Xn,
        Gn = g.fn[zn],
        Jn = { CLICK_DISMISS: "click.dismiss" + $n, HIDE: "hide" + $n, HIDDEN: "hidden" + $n, SHOW: "show" + $n, SHOWN: "shown" + $n },
        Zn = "fade",
        ti = "hide",
        ei = "show",
        ni = "showing",
        ii = { animation: "boolean", autohide: "boolean", delay: "number" },
        oi = { animation: !0, autohide: !0, delay: 500 },
        ri = '[data-dismiss="toast"]',
        si = function() {
            function i(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var t = i.prototype; return t.show = function() { var t = this,
                    e = g.Event(Jn.SHOW); if (g(this._element).trigger(e), !e.isDefaultPrevented()) { this._config.animation && this._element.classList.add(Zn); var n = function() { t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function() { t.hide() }, t._config.delay)) }; if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) { var i = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i) } else n() } }, t.hide = function() { if (this._element.classList.contains(ei)) { var t = g.Event(Jn.HIDE);
                    g(this._element).trigger(t), t.isDefaultPrevented() || this._close() } }, t.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null }, t._getConfig = function(t) { return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t }, t._setListeners = function() { var t = this;
                g(this._element).on(Jn.CLICK_DISMISS, ri, function() { return t.hide() }) }, t._close = function() {
                function t() { e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN) } var e = this; if (this._element.classList.remove(ei), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n) } else t() }, i._jQueryInterface = function(n) { return this.each(function() { var t = g(this),
                        e = t.data(Xn); if (e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "DefaultType", get: function() { return ii } }, { key: "Default", get: function() { return oi } }]), i }();
    g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function() { return g.fn[zn] = Gn, si._jQueryInterface }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e() }(this, function() { "use strict";

    function t(t) { return getComputedStyle(t) }

    function e(t, e) { for (var i in e) { var r = e[i]; "number" == typeof r && (r += "px"), t.style[i] = r } return t }

    function i(t) { var e = document.createElement("div"); return e.className = t, e }

    function r(t, e) { if (!v) throw new Error("No element matching method supported"); return v.call(t, e) }

    function l(t) { t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) }

    function n(t, e) { return Array.prototype.filter.call(t.children, function(t) { return r(t, e) }) }

    function o(t, e) { var i = t.element.classList,
            r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r) }

    function s(t, e) { Y[e] = setTimeout(function() { return t.isAlive && t.element.classList.remove(m.state.scrolling(e)) }, t.settings.scrollingThreshold) }

    function a(t, e) { o(t, e), s(t, e) }

    function c(t) { if ("function" == typeof window.CustomEvent) return new CustomEvent(t); var e = document.createEvent("CustomEvent"); return e.initCustomEvent(t, !1, !1, void 0), e }

    function h(t, e, i, r, l) { var n = i[0],
            o = i[1],
            s = i[2],
            h = i[3],
            u = i[4],
            d = i[5];
        void 0 === r && (r = !0), void 0 === l && (l = !1); var f = t.element;
        t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h])) }

    function u(t) { return parseInt(t, 10) || 0 }

    function d(t) { return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]") }

    function f(e) { var i = t(e); return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth) }

    function p(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e }

    function b(t, i) { var r = { width: i.railXWidth },
            l = Math.floor(t.scrollTop);
        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r); var n = { top: l, height: i.railYHeight };
        i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth }), e(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth }) }

    function g(t, e) {
        function i(e) { b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault() }

        function r() { s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i) } var l = e[0],
            n = e[1],
            a = e[2],
            c = e[3],
            h = e[4],
            u = e[5],
            d = e[6],
            f = e[7],
            p = e[8],
            b = t.element,
            g = null,
            v = null,
            Y = null;
        t.event.bind(t[h], "mousedown", function(e) { g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault() }) } var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = { main: "ps", element: { thumb: function(t) { return "ps__thumb-" + t }, rail: function(t) { return "ps__rail-" + t }, consuming: "ps__child--consume" }, state: { focus: "ps--focus", clicking: "ps--clicking", active: function(t) { return "ps--active-" + t }, scrolling: function(t) { return "ps--scrolling-" + t } } },
        Y = { x: null, y: null },
        X = function(t) { this.element = t, this.handlers = {} },
        w = { isEmpty: { configurable: !0 } };
    X.prototype.bind = function(t, e) { void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1) }, X.prototype.unbind = function(t, e) { var i = this;
        this.handlers[t] = this.handlers[t].filter(function(r) { return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1) }) }, X.prototype.unbindAll = function() { var t = this; for (var e in t.handlers) t.unbind(e) }, w.isEmpty.get = function() { var t = this; return Object.keys(this.handlers).every(function(e) { return 0 === t.handlers[e].length }) }, Object.defineProperties(X.prototype, w); var y = function() { this.eventElements = [] };
    y.prototype.eventElement = function(t) { var e = this.eventElements.filter(function(e) { return e.element === t })[0]; return e || (e = new X(t), this.eventElements.push(e)), e }, y.prototype.bind = function(t, e, i) { this.eventElement(t).bind(e, i) }, y.prototype.unbind = function(t, e, i) { var r = this.eventElement(t);
        r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1) }, y.prototype.unbindAll = function() { this.eventElements.forEach(function(t) { return t.unbindAll() }), this.eventElements = [] }, y.prototype.once = function(t, e, i) { var r = this.eventElement(t),
            l = function(t) { r.unbind(e, l), i(t) };
        r.bind(e, l) }; var W = function(t, e, i, r, l) { void 0 === r && (r = !0), void 0 === l && (l = !1); var n; if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else { if ("left" !== e) throw new Error("A proper axis should be provided");
                n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"] }
            h(t, i, n, r, l) },
        L = { isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints, isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent) },
        R = function(t) { var e = t.element,
                i = Math.floor(e.scrollTop);
            t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function(t) { return l(t) }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function(t) { return l(t) }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0) },
        T = { "click-rail": function(t) { t.event.bind(t.scrollbarY, "mousedown", function(t) { return t.stopPropagation() }), t.event.bind(t.scrollbarYRail, "mousedown", function(e) { var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                    t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation() }), t.event.bind(t.scrollbarX, "mousedown", function(t) { return t.stopPropagation() }), t.event.bind(t.scrollbarXRail, "mousedown", function(e) { var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                    t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation() }) }, "drag-thumb": function(t) { g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]) }, keyboard: function(t) {
                function e(e, r) { var l = Math.floor(i.scrollTop); if (0 === e) { if (!t.scrollbarYActive) return !1; if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation } var n = i.scrollLeft; if (0 === r) { if (!t.scrollbarXActive) return !1; if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation } return !0 } var i = t.element,
                    l = function() { return r(i, ":hover") },
                    n = function() { return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus") };
                t.event.bind(t.ownerDocument, "keydown", function(r) { if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) { var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement; if (o) { if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;) o = o.shadowRoot.activeElement; if (d(o)) return } var s = 0,
                            a = 0; switch (r.which) {
                            case 37:
                                s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30; break;
                            case 38:
                                a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30; break;
                            case 39:
                                s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30; break;
                            case 40:
                                a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30; break;
                            case 32:
                                a = r.shiftKey ? t.containerHeight : -t.containerHeight; break;
                            case 33:
                                a = t.containerHeight; break;
                            case 34:
                                a = -t.containerHeight; break;
                            case 36:
                                a = t.contentHeight; break;
                            case 35:
                                a = -t.contentHeight; break;
                            default:
                                return }
                        t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault()) } }) }, wheel: function(e) {
                function i(t, i) { var r = Math.floor(o.scrollTop),
                        l = 0 === o.scrollTop,
                        n = r + o.offsetHeight === o.scrollHeight,
                        s = 0 === o.scrollLeft,
                        a = o.scrollLeft + o.offsetWidth === o.scrollWidth; return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation }

                function r(t) { var e = t.deltaX,
                        i = -1 * t.deltaY; return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i] }

                function l(e, i, r) { if (!L.isWebKit && o.querySelector("select:focus")) return !0; if (!o.contains(e)) return !1; for (var l = e; l && l !== o;) { if (l.classList.contains(m.element.consuming)) return !0; var n = t(l); if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) { var s = l.scrollHeight - l.clientHeight; if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0; var a = l.scrollWidth - l.clientWidth; if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0 }
                        l = l.parentNode } return !1 }

                function n(t) { var n = r(t),
                        s = n[0],
                        a = n[1]; if (!l(t.target, s, a)) { var c = !1;
                        e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault()) } } var o = e.element;
                void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n) }, touch: function(e) {
                function i(t, i) { var r = Math.floor(h.scrollTop),
                        l = h.scrollLeft,
                        n = Math.abs(t),
                        o = Math.abs(i); if (o > n) { if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0; return !0 }

                function r(t, i) { h.scrollTop -= i, h.scrollLeft -= t, R(e) }

                function l(t) { return t.targetTouches ? t.targetTouches[0] : t }

                function n(t) { return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)) }

                function o(t) { if (n(t)) { var e = l(t);
                        u.pageX = e.pageX, u.pageY = e.pageY, d = (new Date).getTime(), null !== p && clearInterval(p) } }

                function s(e, i, r) { if (!h.contains(e)) return !1; for (var l = e; l && l !== h;) { if (l.classList.contains(m.element.consuming)) return !0; var n = t(l); if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) { var o = l.scrollHeight - l.clientHeight; if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0; var s = l.scrollLeft - l.clientWidth; if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0 }
                        l = l.parentNode } return !1 }

                function a(t) { if (n(t)) { var e = l(t),
                            o = { pageX: e.pageX, pageY: e.pageY },
                            a = o.pageX - u.pageX,
                            c = o.pageY - u.pageY; if (s(t.target, a, c)) return;
                        r(a, c), u = o; var h = (new Date).getTime(),
                            p = h - d;
                        p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault() } }

                function c() { e.settings.swipeEasing && (clearInterval(p), p = setInterval(function() { e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p) }, 10)) } if (L.supportsTouch || L.supportsIePointer) { var h = e.element,
                        u = {},
                        d = 0,
                        f = {},
                        p = null;
                    L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c))) } } },
        H = function(r, l) { var n = this; if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            this.element = r, r.classList.add(m.main), this.settings = { handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !0, wheelSpeed: 1 }; for (var o in l) n.settings[o] = l[o];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null; var s = function() { return r.classList.add(m.state.focus) },
                a = function() { return r.classList.remove(m.state.focus) };
            this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function() { var t = r.scrollLeft,
                    e = null; return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null; var c = t(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null; var h = t(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = { x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null }, this.isAlive = !0, this.settings.handlers.forEach(function(t) { return T[t](n) }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(t) { return n.onScroll(t) }), R(this) }; return H.prototype.update = function() { this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, { display: "block" }), e(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, { display: "none" }), e(this.scrollbarYRail, { display: "none" }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, { display: "" }), e(this.scrollbarYRail, { display: "" })) }, H.prototype.onScroll = function(t) { this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft) }, H.prototype.destroy = function() { this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1) }, H.prototype.removePsClasses = function() { this.element.className = this.element.className.split(" ").filter(function(t) { return !t.match(/^ps([-_].+|)$/) }).join(" ") }, H });
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
! function(t) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t() } }(function() { return function t(e, i, n) {
        function a(r, s) { if (!i[r]) { if (!e[r]) { var l = "function" == typeof require && require; if (!s && l) return l(r, !0); if (o) return o(r, !0); var u = new Error("Cannot find module '" + r + "'"); throw u.code = "MODULE_NOT_FOUND", u } var d = i[r] = { exports: {} };
                e[r][0].call(d.exports, function(t) { var i = e[r][1][t]; return a(i || t) }, d, d.exports, t, e, i, n) } return i[r].exports } for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]); return a }({ 1: [function(t, e, i) {}, {}], 2: [function(t, e, i) { var n = t(6);

            function a(t) { if (t) { var e = [0, 0, 0],
                        i = 1,
                        a = t.match(/^#([a-fA-F0-9]{3})$/i); if (a) { a = a[1]; for (var o = 0; o < e.length; o++) e[o] = parseInt(a[o] + a[o], 16) } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) { a = a[1]; for (o = 0; o < e.length; o++) e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16) } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (o = 0; o < e.length; o++) e[o] = parseInt(a[o + 1]);
                        i = parseFloat(a[4]) } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
                        i = parseFloat(a[4]) } else if (a = t.match(/(\w+)/)) { if ("transparent" == a[1]) return [0, 0, 0, 0]; if (!(e = n[a[1]])) return } for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255); return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e } }

            function o(t) { if (t) { var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var i = parseFloat(e[4]); return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)] } } }

            function r(t) { if (t) { var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var i = parseFloat(e[4]); return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)] } } }

            function s(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")" }

            function l(t, e) { return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")" }

            function u(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")" }

            function d(t, e, i) { return Math.min(Math.max(e, t), i) }

            function c(t) { var e = t.toString(16).toUpperCase(); return e.length < 2 ? "0" + e : e }
            e.exports = { getRgba: a, getHsla: o, getRgb: function(t) { var e = a(t); return e && e.slice(0, 3) }, getHsl: function(t) { var e = o(t); return e && e.slice(0, 3) }, getHwb: r, getAlpha: function(t) { var e = a(t); { if (e) return e[3]; if (e = o(t)) return e[3]; if (e = r(t)) return e[3] } }, hexString: function(t) { return "#" + c(t[0]) + c(t[1]) + c(t[2]) }, rgbString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return s(t, e); return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")" }, rgbaString: s, percentString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return l(t, e); var i = Math.round(t[0] / 255 * 100),
                        n = Math.round(t[1] / 255 * 100),
                        a = Math.round(t[2] / 255 * 100); return "rgb(" + i + "%, " + n + "%, " + a + "%)" }, percentaString: l, hslString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return u(t, e); return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" }, hslaString: u, hwbString: function(t, e) { void 0 === e && (e = void 0 !== t[3] ? t[3] : 1); return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")" }, keyword: function(t) { return h[t.slice(0, 3)] } }; var h = {}; for (var f in n) h[n[f]] = f }, { 6: 6 }], 3: [function(t, e, i) { var n = t(5),
                a = t(2),
                o = function(t) { return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t); var e };
            o.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var t = this.values; return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var t = this.values; return t.rgb.concat([t.alpha]) }, hslaArray: function() { var t = this.values; return t.hsl.concat([t.alpha]) }, alpha: function(t) { return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this) }, red: function(t) { return this.setChannel("rgb", 0, t) }, green: function(t) { return this.setChannel("rgb", 1, t) }, blue: function(t) { return this.setChannel("rgb", 2, t) }, hue: function(t) { return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t) }, saturation: function(t) { return this.setChannel("hsl", 1, t) }, lightness: function(t) { return this.setChannel("hsl", 2, t) }, saturationv: function(t) { return this.setChannel("hsv", 1, t) }, whiteness: function(t) { return this.setChannel("hwb", 1, t) }, blackness: function(t) { return this.setChannel("hwb", 2, t) }, value: function(t) { return this.setChannel("hsv", 2, t) }, cyan: function(t) { return this.setChannel("cmyk", 0, t) }, magenta: function(t) { return this.setChannel("cmyk", 1, t) }, yellow: function(t) { return this.setChannel("cmyk", 2, t) }, black: function(t) { return this.setChannel("cmyk", 3, t) }, hexString: function() { return a.hexString(this.values.rgb) }, rgbString: function() { return a.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return a.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return a.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return a.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return a.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return a.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return a.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var t = this.values.rgb; return t[0] << 16 | t[1] << 8 | t[2] }, luminosity: function() { for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) { var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4) } return .2126 * e[0] + .7152 * e[1] + .0722 * e[2] }, contrast: function(t) { var e = this.luminosity(),
                        i = t.luminosity(); return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05) }, level: function(t) { var e = this.contrast(t); return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "" }, dark: function() { var t = this.values.rgb; return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e]; return this.setValues("rgb", t), this }, lighten: function(t) { var e = this.values.hsl; return e[2] += e[2] * t, this.setValues("hsl", e), this }, darken: function(t) { var e = this.values.hsl; return e[2] -= e[2] * t, this.setValues("hsl", e), this }, saturate: function(t) { var e = this.values.hsl; return e[1] += e[1] * t, this.setValues("hsl", e), this }, desaturate: function(t) { var e = this.values.hsl; return e[1] -= e[1] * t, this.setValues("hsl", e), this }, whiten: function(t) { var e = this.values.hwb; return e[1] += e[1] * t, this.setValues("hwb", e), this }, blacken: function(t) { var e = this.values.hwb; return e[2] += e[2] * t, this.setValues("hwb", e), this }, greyscale: function() { var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2]; return this.setValues("rgb", [e, e, e]), this }, clearer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e - e * t), this }, opaquer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e + e * t), this }, rotate: function(t) { var e = this.values.hsl,
                        i = (e[0] + t) % 360; return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this }, mix: function(t, e) { var i = this,
                        n = t,
                        a = void 0 === e ? .5 : e,
                        o = 2 * a - 1,
                        r = i.alpha() - n.alpha(),
                        s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                        l = 1 - s; return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a)) }, toJSON: function() { return this.rgb() }, clone: function() { var t, e, i = new o,
                        n = this.values,
                        a = i.values; for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t)); return i } }, o.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, o.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, o.prototype.getValues = function(t) { for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n]; return 1 !== e.alpha && (i.a = e.alpha), i }, o.prototype.setValues = function(t, e) { var i, a, o = this.values,
                    r = this.spaces,
                    s = this.maxes,
                    l = 1; if (this.valid = !0, "alpha" === t) l = e;
                else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) { for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                    l = e.a } else if (void 0 !== e[r[t][0]]) { var u = r[t]; for (i = 0; i < t.length; i++) o[t][i] = e[u[i]];
                    l = e.alpha } if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1; for (i = 0; i < t.length; i++) a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a); for (var d in r) d !== t && (o[d] = n[t][d](o[t])); return !0 }, o.prototype.setSpace = function(t, e) { var i = e[0]; return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this) }, o.prototype.setChannel = function(t, e, i) { var n = this.values[t]; return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this) }, "undefined" != typeof window && (window.Color = o), e.exports = o }, { 2: 2, 5: 5 }], 4: [function(t, e, i) {
            function n(t) { var e, i, n = t[0] / 255,
                    a = t[1] / 255,
                    o = t[2] / 255,
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r; return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i] }

            function a(t) { var e, i, n = t[0],
                    a = t[1],
                    o = t[2],
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r; return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10] }

            function o(t) { var e = t[0],
                    i = t[1],
                    a = t[2]; return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))] }

            function s(t) { var e, i = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255; return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e] }

            function l(t) { return C[JSON.stringify(t)] }

            function u(t) { var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255; return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)] }

            function d(t) { var e = u(t),
                    i = e[0],
                    n = e[1],
                    a = e[2]; return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))] }

            function c(t) { var e, i, n, a, o, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100; if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0]; for (var u = 0; u < 3; u++)(n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o; return a }

            function h(t) { var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    r = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * o),
                    l = 255 * n * (1 - i * (1 - o));
                n *= 255; switch (a) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s] } }

            function f(t) { var e, i, n, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l; switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) { default:
                        case 6:
                        case 0:
                        r = i, g = a, b = s; break;
                    case 1:
                            r = a, g = i, b = s; break;
                    case 2:
                            r = s, g = i, b = a; break;
                    case 3:
                            r = s, g = a, b = i; break;
                    case 4:
                            r = a, g = s, b = i; break;
                    case 5:
                            r = i, g = s, b = a } return [255 * r, 255 * g, 255 * b] }

            function p(t) { var e = t[0] / 100,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = t[3] / 100; return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))] }

            function m(t) { var e, i, n, a = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100; return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))] }

            function v(t) { var e = t[0],
                    i = t[1],
                    n = t[2]; return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))] }

            function x(t) { var e, i, n, a, o = t[0],
                    r = t[1],
                    s = t[2]; return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)] }

            function y(t) { var e, i = t[0],
                    n = t[1],
                    a = t[2]; return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e] }

            function k(t) { return m(x(t)) }

            function M(t) { var e, i = t[0],
                    n = t[1]; return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)] }

            function w(t) { return S[t] }
            e.exports = { rgb2hsl: n, rgb2hsv: a, rgb2hwb: o, rgb2cmyk: s, rgb2keyword: l, rgb2xyz: u, rgb2lab: d, rgb2lch: function(t) { return y(d(t)) }, hsl2rgb: c, hsl2hsv: function(t) { var e = t[0],
                        i = t[1] / 100,
                        n = t[2] / 100; if (0 === n) return [0, 0, 0]; return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)] }, hsl2hwb: function(t) { return o(c(t)) }, hsl2cmyk: function(t) { return s(c(t)) }, hsl2keyword: function(t) { return l(c(t)) }, hsv2rgb: h, hsv2hsl: function(t) { var e, i, n = t[0],
                        a = t[1] / 100,
                        o = t[2] / 100; return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)] }, hsv2hwb: function(t) { return o(h(t)) }, hsv2cmyk: function(t) { return s(h(t)) }, hsv2keyword: function(t) { return l(h(t)) }, hwb2rgb: f, hwb2hsl: function(t) { return n(f(t)) }, hwb2hsv: function(t) { return a(f(t)) }, hwb2cmyk: function(t) { return s(f(t)) }, hwb2keyword: function(t) { return l(f(t)) }, cmyk2rgb: p, cmyk2hsl: function(t) { return n(p(t)) }, cmyk2hsv: function(t) { return a(p(t)) }, cmyk2hwb: function(t) { return o(p(t)) }, cmyk2keyword: function(t) { return l(p(t)) }, keyword2rgb: w, keyword2hsl: function(t) { return n(w(t)) }, keyword2hsv: function(t) { return a(w(t)) }, keyword2hwb: function(t) { return o(w(t)) }, keyword2cmyk: function(t) { return s(w(t)) }, keyword2lab: function(t) { return d(w(t)) }, keyword2xyz: function(t) { return u(w(t)) }, xyz2rgb: m, xyz2lab: v, xyz2lch: function(t) { return y(v(t)) }, lab2xyz: x, lab2rgb: k, lab2lch: y, lch2lab: M, lch2xyz: function(t) { return x(M(t)) }, lch2rgb: function(t) { return k(M(t)) } }; var S = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                C = {}; for (var _ in S) C[JSON.stringify(S[_])] = _ }, {}], 5: [function(t, e, i) { var n = t(4),
                a = function() { return new u }; for (var o in n) { a[o + "Raw"] = function(t) { return function(e) { return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e) } }(o); var r = /(\w+)2(\w+)/.exec(o),
                    s = r[1],
                    l = r[2];
                (a[s] = a[s] || {})[l] = a[o] = function(t) { return function(e) { "number" == typeof e && (e = Array.prototype.slice.call(arguments)); var i = n[t](e); if ("string" == typeof i || void 0 === i) return i; for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]); return i } }(o) } var u = function() { this.convs = {} };
            u.prototype.routeSpace = function(t, e) { var i = e[0]; return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i)) }, u.prototype.setValues = function(t, e) { return this.space = t, this.convs = {}, this.convs[t] = e, this }, u.prototype.getValues = function(t) { var e = this.convs[t]; if (!e) { var i = this.space,
                        n = this.convs[i];
                    e = a[i][t](n), this.convs[t] = e } return e }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) { u.prototype[t] = function(e) { return this.routeSpace(t, arguments) } }), e.exports = a }, { 4: 4 }], 6: [function(t, e, i) { "use strict";
            e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] } }, {}], 7: [function(t, e, i) { var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n); var a = t(49); for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts }, { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 40: 40, 45: 45, 48: 48, 49: 49, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 8: 8, 9: 9 }], 8: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Bar = function(e, i) { return i.type = "bar", new t(e, i) } } }, {}], 9: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Bubble = function(e, i) { return i.type = "bubble", new t(e, i) } } }, {}], 10: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Doughnut = function(e, i) { return i.type = "doughnut", new t(e, i) } } }, {}], 11: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Line = function(e, i) { return i.type = "line", new t(e, i) } } }, {}], 12: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.PolarArea = function(e, i) { return i.type = "polarArea", new t(e, i) } } }, {}], 13: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Radar = function(e, i) { return i.type = "radar", new t(e, i) } } }, {}], 14: [function(t, e, i) { "use strict";
            e.exports = function(t) { t.Scatter = function(e, i) { return i.type = "scatter", new t(e, i) } } }, {}], 15: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), n._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { callbacks: { title: function(t, e) { var i = ""; return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i }, label: function(t, e) { return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel } }, mode: "index", axis: "y" } }), e.exports = function(t) { t.controllers.bar = t.DatasetController.extend({ dataElementType: a.Rectangle, initialize: function() { var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0 }, update: function(t) { var e, i, n = this.getMeta().data; for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t) }, updateElement: function(t, e, i) { var n = this,
                            a = n.chart,
                            r = n.getMeta(),
                            s = n.getDataset(),
                            l = t.custom || {},
                            u = a.options.elements.rectangle;
                        t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = { datasetLabel: s.label, label: a.data.labels[e], borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped, backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor), borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor), borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth) }, n.updateElementGeometry(t, e, i), t.pivot() }, updateElementGeometry: function(t, e, i) { var n = this,
                            a = t._model,
                            o = n.getValueScale(),
                            r = o.getBasePixel(),
                            s = o.isHorizontal(),
                            l = n._ruler || n.getRuler(),
                            u = n.calculateBarValuePixels(n.index, e),
                            d = n.calculateBarIndexPixels(n.index, e, l);
                        a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size }, getValueScaleId: function() { return this.getMeta().yAxisID }, getIndexScaleId: function() { return this.getMeta().xAxisID }, getValueScale: function() { return this.getScaleForId(this.getValueScaleId()) }, getIndexScale: function() { return this.getScaleForId(this.getIndexScaleId()) }, _getStacks: function(t) { var e, i, n = this.chart,
                            a = this.getIndexScale().options.stacked,
                            o = void 0 === t ? n.data.datasets.length : t + 1,
                            r = []; for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack); return r }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(t, e) { var i = this._getStacks(t),
                            n = void 0 !== e ? i.indexOf(e) : -1; return -1 === n ? i.length - 1 : n }, getRuler: function() { var t, e, i = this.getIndexScale(),
                            n = this.getStackCount(),
                            a = this.index,
                            r = i.isHorizontal(),
                            s = r ? i.left : i.top,
                            l = s + (r ? i.width : i.height),
                            u = []; for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(i.getPixelForValue(null, t, a)); return { min: o.isNullOrUndef(i.options.barThickness) ? function(t, e) { var i, n, a, o, r = t.isHorizontal() ? t.width : t.height,
                                    s = t.getTicks(); for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]); for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n; return r }(i, u) : -1, pixels: u, start: s, end: l, stackCount: n, scale: i } }, calculateBarValuePixels: function(t, e) { var i, n, a, o, r, s, l = this.chart,
                            u = this.getMeta(),
                            d = this.getValueScale(),
                            c = l.data.datasets,
                            h = d.getRightValue(c[t].data[e]),
                            f = d.options.stacked,
                            g = u.stack,
                            p = 0; if (f || void 0 === f && void 0 !== g)
                            for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a)); return o = d.getPixelForValue(p), { size: s = ((r = d.getPixelForValue(p + h)) - o) / 2, base: o, head: r, center: r + s / 2 } }, calculateBarIndexPixels: function(t, e, i) { var n, a, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k = i.scale.options,
                            M = "flex" === k.barThickness ? (h = e, g = k, m = (f = i).pixels, v = m[h], b = h > 0 ? m[h - 1] : null, x = h < m.length - 1 ? m[h + 1] : null, y = g.categoryPercentage, null === b && (b = v - (null === x ? f.end - v : x - v)), null === x && (x = v + v - b), p = v - (v - b) / 2 * y, { chunk: (x - b) / 2 * y / f.stackCount, ratio: g.barPercentage, start: p }) : (n = e, a = i, u = (r = k).barThickness, d = a.stackCount, c = a.pixels[n], o.isNullOrUndef(u) ? (s = a.min * r.categoryPercentage, l = r.barPercentage) : (s = u * d, l = 1), { chunk: s / d, ratio: l, start: c - s / 2 }),
                            w = this.getStackIndex(t, this.getMeta().stack),
                            S = M.start + M.chunk * w + M.chunk / 2,
                            C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio); return { base: S - C / 2, head: S + C / 2, center: S, size: C } }, draw: function() { var t = this.chart,
                            e = this.getValueScale(),
                            i = this.getMeta().data,
                            n = this.getDataset(),
                            a = i.length,
                            r = 0; for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                        o.canvas.unclipArea(t.ctx) }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth) }, removeHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model,
                            r = this.chart.options.elements.rectangle;
                        a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth) } }), t.controllers.horizontalBar = t.controllers.bar.extend({ getValueScaleId: function() { return this.getMeta().xAxisID }, getIndexScaleId: function() { return this.getMeta().yAxisID } }) } }, { 25: 25, 40: 40, 45: 45 }], 16: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index]; return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")" } } } }), e.exports = function(t) { t.controllers.bubble = t.DatasetController.extend({ dataElementType: a.Point, update: function(t) { var e = this,
                            i = e.getMeta().data;
                        o.each(i, function(i, n) { e.updateElement(i, n, t) }) }, updateElement: function(t, e, i) { var n = this,
                            a = n.getMeta(),
                            o = t.custom || {},
                            r = n.getScaleForId(a.xAxisID),
                            s = n.getScaleForId(a.yAxisID),
                            l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e],
                            d = n.index,
                            c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, radius: i ? 0 : l.radius, skip: o.skip || isNaN(c) || isNaN(h), x: c, y: h }, t.pivot() }, setHoverStyle: function(t) { var e = t._model,
                            i = t._options;
                        e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius }, removeHoverStyle: function(t) { var e = t._model,
                            i = t._options;
                        e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius }, _resolveElementOptions: function(t, e) { var i, n, a, r = this.chart,
                            s = r.data.datasets[this.index],
                            l = t.custom || {},
                            u = r.options.elements.point,
                            d = o.options.resolve,
                            c = s.data[e],
                            h = {},
                            f = { chart: r, dataIndex: e, dataset: s, datasetIndex: this.index },
                            g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"]; for (i = 0, n = g.length; i < n; ++i) h[a = g[i]] = d([l[a], s[a], u[a]], f, e); return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h } }) } }, { 25: 25, 40: 40, 45: 45 }], 17: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(t) { var e = [];
                    e.push('<ul class="' + t.id + '-legend">'); var i = t.data,
                        n = i.datasets,
                        a = i.labels; if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>"); return e.push("</ul>"), e.join("") }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) { var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[n],
                                    l = s && s.custom || {},
                                    u = o.valueAtIndexOrDefault,
                                    d = t.options.elements.arc; return { text: i, fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor), strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor), lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth), hidden: isNaN(r.data[n]) || a.data[n].hidden, index: n } }) : [] } }, onClick: function(t, e) { var i, n, a, o = e.index,
                            r = this.chart; for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                        r.update() } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var i = e.labels[t.index],
                                n = ": " + e.datasets[t.datasetIndex].data[t.index]; return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i } } } }), n._set("pie", o.clone(n.doughnut)), n._set("pie", { cutoutPercentage: 0 }), e.exports = function(t) { t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({ dataElementType: a.Arc, linkScales: o.noop, getRingIndex: function(t) { for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e; return e }, update: function(t) { var e = this,
                            i = e.chart,
                            n = i.chartArea,
                            a = i.options,
                            r = a.elements.arc,
                            s = n.right - n.left - r.borderWidth,
                            l = n.bottom - n.top - r.borderWidth,
                            u = Math.min(s, l),
                            d = { x: 0, y: 0 },
                            c = e.getMeta(),
                            h = a.cutoutPercentage,
                            f = a.circumference; if (f < 2 * Math.PI) { var g = a.rotation % (2 * Math.PI),
                                p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                                m = Math.cos(g),
                                v = Math.sin(g),
                                b = Math.cos(p),
                                x = Math.sin(p),
                                y = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                                k = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                M = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                                w = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                S = h / 100,
                                C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
                                _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
                                D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)),
                                I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)),
                                P = .5 * (D - C),
                                A = .5 * (I - _);
                            u = Math.min(s / P, l / A), d = { x: -.5 * (D + C), y: -.5 * (I + _) } }
                        i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function(i, n) { e.updateElement(i, n, t) }) }, updateElement: function(t, e, i) { var n = this,
                            a = n.chart,
                            r = a.chartArea,
                            s = a.options,
                            l = s.animation,
                            u = (r.left + r.right) / 2,
                            d = (r.top + r.bottom) / 2,
                            c = s.rotation,
                            h = s.rotation,
                            f = n.getDataset(),
                            g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            p = i && l.animateScale ? 0 : n.innerRadius,
                            m = i && l.animateScale ? 0 : n.outerRadius,
                            v = o.valueAtIndexOrDefault;
                        o.extend(t, { _datasetIndex: n.index, _index: e, _model: { x: u + a.offsetX, y: d + a.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: m, innerRadius: p, label: v(f.label, e, a.data.labels[e]) } }); var b = t._model;
                        this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot() }, removeHoverStyle: function(e) { t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc) }, calculateTotal: function() { var t, e = this.getDataset(),
                            i = this.getMeta(),
                            n = 0; return o.each(i.data, function(i, a) { t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t)) }), n }, calculateCircumference: function(t) { var e = this.getMeta().total; return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0 }, getMaxBorderWidth: function(t) { for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n; return n } }) } }, { 25: 25, 40: 40, 45: 45 }], 18: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }), e.exports = function(t) {
                function e(t, e) { return o.valueOrDefault(t.showLine, e.showLines) }
                t.controllers.line = t.DatasetController.extend({ datasetElementType: a.Line, dataElementType: a.Point, update: function(t) { var i, n, a, r = this,
                            s = r.getMeta(),
                            l = s.dataset,
                            u = s.data || [],
                            d = r.chart.options,
                            c = d.elements.line,
                            h = r.getScaleForId(s.yAxisID),
                            f = r.getDataset(),
                            g = e(f, d); for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = { spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps, tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension), backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor, borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth, borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor, borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle, borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash, borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset, borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle, fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill, steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped), cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode) }, l.pivot()), i = 0, n = u.length; i < n; ++i) r.updateElement(u[i], i, t); for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) u[i].pivot() }, getPointBackgroundColor: function(t, e) { var i = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            a = t.custom || {}; return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i }, getPointBorderColor: function(t, e) { var i = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            a = t.custom || {}; return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i }, getPointBorderWidth: function(t, e) { var i = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            a = t.custom || {}; return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i }, updateElement: function(t, e, i) { var n, a, r = this,
                            s = r.getMeta(),
                            l = t.custom || {},
                            u = r.getDataset(),
                            d = r.index,
                            c = u.data[e],
                            h = r.getScaleForId(s.yAxisID),
                            f = r.getScaleForId(s.xAxisID),
                            g = r.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == typeof c ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = { x: n, y: a, skip: l.skip || isNaN(n) || isNaN(a), radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius), pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: s.dataset._model ? s.dataset._model.tension : 0, steppedLine: !!s.dataset._model && s.dataset._model.steppedLine, hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius) } }, calculatePointY: function(t, e, i) { var n, a, o, r = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            u = 0,
                            d = 0; if (l.options.stacked) { for (n = 0; n < i; n++)
                                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) { var c = Number(l.getRightValue(a.data[e]));
                                    c < 0 ? d += c || 0 : u += c || 0 }
                            var h = Number(l.getRightValue(t)); return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h) } return l.getPixelForValue(t) }, updateBezierControlPoints: function() { var t, e, i, n, a = this.getMeta(),
                            r = this.chart.chartArea,
                            s = a.data || [];

                        function l(t, e, i) { return Math.max(Math.min(t, i), e) } if (a.dataset._model.spanGaps && (s = s.filter(function(t) { return !t._model.skip })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);
                        else
                            for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y; if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom) }, draw: function() { var t = this.chart,
                            i = this.getMeta(),
                            n = i.data || [],
                            a = t.chartArea,
                            r = n.length,
                            s = 0; for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) n[s].draw(a) }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth) }, removeHoverStyle: function(t) { var e = this,
                            i = e.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            a = t.custom || {},
                            r = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n) } }) } }, { 25: 25, 40: 40, 45: 45 }], 19: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(t) { var e = [];
                    e.push('<ul class="' + t.id + '-legend">'); var i = t.data,
                        n = i.datasets,
                        a = i.labels; if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>"); return e.push("</ul>"), e.join("") }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) { var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[n].custom || {},
                                    l = o.valueAtIndexOrDefault,
                                    u = t.options.elements.arc; return { text: i, fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor), strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor), lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth), hidden: isNaN(r.data[n]) || a.data[n].hidden, index: n } }) : [] } }, onClick: function(t, e) { var i, n, a, o = e.index,
                            r = this.chart; for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                        r.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { return e.labels[t.index] + ": " + t.yLabel } } } }), e.exports = function(t) { t.controllers.polarArea = t.DatasetController.extend({ dataElementType: a.Arc, linkScales: o.noop, update: function(t) { var e = this,
                            i = e.chart,
                            n = i.chartArea,
                            a = e.getMeta(),
                            r = i.options,
                            s = r.elements.arc,
                            l = Math.min(n.right - n.left, n.bottom - n.top);
                        i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function(i, n) { e.updateElement(i, n, t) }) }, updateElement: function(t, e, i) { for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), m = 0; m < e; ++m) isNaN(r.data[m]) || p.data[m].hidden || ++g; var v = s.startAngle,
                            b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                            x = v + c * g,
                            y = x + (t.hidden ? 0 : c),
                            k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
                        o.extend(t, { _datasetIndex: n.index, _index: e, _scale: u, _model: { x: h, y: f, innerRadius: 0, outerRadius: i ? k : b, startAngle: i && l.animateRotate ? v : x, endAngle: i && l.animateRotate ? v : y, label: o.valueAtIndexOrDefault(d, e, d[e]) } }), n.removeHoverStyle(t), t.pivot() }, removeHoverStyle: function(e) { t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc) }, countVisibleElements: function() { var t = this.getDataset(),
                            e = this.getMeta(),
                            i = 0; return o.each(e.data, function(e, n) { isNaN(t.data[n]) || e.hidden || i++ }), i }, calculateCircumference: function(t) { var e = this.getMeta().count; return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0 } }) } }, { 25: 25, 40: 40, 45: 45 }], 20: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }), e.exports = function(t) { t.controllers.radar = t.DatasetController.extend({ datasetElementType: a.Line, dataElementType: a.Point, linkScales: o.noop, update: function(t) { var e = this,
                            i = e.getMeta(),
                            n = i.dataset,
                            a = i.data,
                            r = n.custom || {},
                            s = e.getDataset(),
                            l = e.chart.options.elements.line,
                            u = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, { _datasetIndex: e.index, _scale: u, _children: a, _loop: !0, _model: { tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth, borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor, fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle, borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle } }), i.dataset.pivot(), o.each(a, function(i, n) { e.updateElement(i, n, t) }, e), e.updateBezierControlPoints() }, updateElement: function(t, e, i) { var n = this,
                            a = t.custom || {},
                            r = n.getDataset(),
                            s = n.chart.scale,
                            l = n.chart.options.elements.point,
                            u = s.getPointPositionForValue(e, r.data[e]);
                        void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, { _datasetIndex: n.index, _index: e, _scale: s, _model: { x: i ? s.xCenter : u.x, y: i ? s.yCenter : u.y, tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension), radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius), backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor), borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor), borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth), pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle), hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius) } }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y) }, updateBezierControlPoints: function() { var t = this.chart.chartArea,
                            e = this.getMeta();
                        o.each(e.data, function(i, n) { var a = i._model,
                                r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
                            a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot() }) }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model;
                        a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth) }, removeHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model,
                            r = this.chart.options.elements.point;
                        a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth) } }) } }, { 25: 25, 40: 40, 45: 45 }], 21: [function(t, e, i) { "use strict";
            t(25)._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function() { return "" }, label: function(t) { return "(" + t.xLabel + ", " + t.yLabel + ")" } } } }), e.exports = function(t) { t.controllers.scatter = t.controllers.line } }, { 25: 25 }], 22: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45);
            n._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: o.noop, onComplete: o.noop } }), e.exports = function(t) { t.Animation = a.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = { frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function(t, e, i, n) { var a, o, r = this.animations; for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                            if (r[a].chart === t) return void(r[a] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame() }, cancelAnimation: function(t) { var e = o.findIndex(this.animations, function(e) { return e.chart === t }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1) }, requestAnimationFrame: function() { var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function() { t.request = null, t.startDigest() })) }, startDigest: function() { var t = this,
                            e = Date.now(),
                            i = 0;
                        t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i); var n = Date.now();
                        t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame() }, advance: function(t) { for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a } }, Object.defineProperty(t.Animation.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(t.Animation.prototype, "chartInstance", { get: function() { return this.chart }, set: function(t) { this.chart = t } }) } }, { 25: 25, 26: 26, 45: 45 }], 23: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(45),
                o = t(28),
                r = t(30),
                s = t(48),
                l = t(31);
            e.exports = function(t) {
                function e(t) { return "top" === t || "bottom" === t }
                t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, { construct: function(e, i) { var o, r, l = this;
                        (r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || [], r.labels = r.labels || [], o.options = a.configMerge(n.global, n[o.type], o.options || {}), i = o; var u = s.acquireContext(e, i),
                            d = u && u.canvas,
                            c = d && d.height,
                            h = d && d.width;
                        l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = h, l.height = c, l.aspectRatio = c ? h / c : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", { get: function() { return l.config.data }, set: function(t) { l.config.data = t } }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item") }, initialize: function() { var t = this; return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t }, clear: function() { return a.canvas.clear(this), this }, stop: function() { return t.animationService.cancelAnimation(this), this }, resize: function(t) { var e = this,
                            i = e.options,
                            n = e.canvas,
                            o = i.maintainAspectRatio && e.aspectRatio || null,
                            r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                            s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n))); if ((e.width !== r || e.height !== s) && (n.width = e.width = r, n.height = e.height = s, n.style.width = r + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) { var u = { width: r, height: s };
                            l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration) } }, ensureScalesHaveIDs: function() { var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        a.each(e.xAxes, function(t, e) { t.id = t.id || "x-axis-" + e }), a.each(e.yAxes, function(t, e) { t.id = t.id || "y-axis-" + e }), i && (i.id = i.id || "scale") }, buildOrUpdateScales: function() { var i = this,
                            n = i.options,
                            o = i.scales || {},
                            r = [],
                            s = Object.keys(o).reduce(function(t, e) { return t[e] = !1, t }, {});
                        n.scales && (r = r.concat((n.scales.xAxes || []).map(function(t) { return { options: t, dtype: "category", dposition: "bottom" } }), (n.scales.yAxes || []).map(function(t) { return { options: t, dtype: "linear", dposition: "left" } }))), n.scale && r.push({ options: n.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), a.each(r, function(n) { var r = n.options,
                                l = r.id,
                                u = a.valueOrDefault(r.type, n.dtype);
                            e(r.position) !== e(n.dposition) && (r.position = n.dposition), s[l] = !0; var d = null; if (l in o && o[l].type === u)(d = o[l]).options = r, d.ctx = i.ctx, d.chart = i;
                            else { var c = t.scaleService.getScaleConstructor(u); if (!c) return;
                                d = new c({ id: l, type: u, options: r, ctx: i.ctx, chart: i }), o[d.id] = d }
                            d.mergeTicksOptions(), n.isDefault && (i.scale = d) }), a.each(s, function(t, e) { t || delete o[e] }), i.scales = o, t.scaleService.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var e = this,
                            i = [],
                            n = []; return a.each(e.data.datasets, function(a, o) { var r = e.getDatasetMeta(o),
                                s = a.type || e.config.type; if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o), r.controller.linkScales();
                            else { var l = t.controllers[r.type]; if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new l(e, o), n.push(r.controller) } }, e), n }, resetElements: function() { var t = this;
                        a.each(t.data.datasets, function(e, i) { t.getDatasetMeta(i).controller.reset() }, t) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(e) { var i, n, o = this; if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), n = (i = o).options, a.each(i.scales, function(t) { r.removeBox(i, t) }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(o), !1 !== l.notify(o, "beforeUpdate")) { o.tooltip._data = o.data; var s = o.buildOrUpdateControllers();
                            a.each(o.data.datasets, function(t, e) { o.getDatasetMeta(e).controller.buildOrUpdateElements() }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(s, function(t) { t.reset() }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], l.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : o.render(e) } }, updateLayout: function() {!1 !== l.notify(this, "beforeLayout") && (r.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout")) }, updateDatasets: function() { if (!1 !== l.notify(this, "beforeDatasetsUpdate")) { for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            l.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(t) { var e = this.getDatasetMeta(t),
                            i = { meta: e, index: t };!1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i])) }, render: function(e) { var i = this;
                        e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }); var n = e.duration,
                            o = e.lazy; if (!1 !== l.notify(i, "beforeRender")) { var r = i.options.animation,
                                s = function(t) { l.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i) }; if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) { var u = new t.Animation({ numSteps: (n || r.duration) / 16.66, easing: e.easing || r.easing, render: function(t, e) { var i = a.easing.effects[e.easing],
                                            n = e.currentStep,
                                            o = n / e.numSteps;
                                        t.draw(i(o), o, n) }, onAnimationProgress: r.onProgress, onAnimationComplete: s });
                                t.animationService.addAnimation(i, u, n, o) } else i.draw(), s(new t.Animation({ numSteps: 0, chart: i })); return i } }, draw: function(t) { var e = this;
                        e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function(t) { t.draw(e.chartArea) }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t])) }, transition: function(t) { for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t) }, drawDatasets: function(t) { var e = this; if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) { for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            l.notify(e, "afterDatasetsDraw", [t]) } }, drawDataset: function(t, e) { var i = this.getDatasetMeta(t),
                            n = { meta: i, index: t, easingValue: e };!1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n])) }, _drawTooltip: function(t) { var e = this.tooltip,
                            i = { tooltip: e, easingValue: t };!1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i])) }, getElementAtEvent: function(t) { return o.modes.single(this, t) }, getElementsAtEvent: function(t) { return o.modes.label(this, t, { intersect: !0 }) }, getElementsAtXAxis: function(t) { return o.modes["x-axis"](this, t, { intersect: !0 }) }, getElementsAtEventForMode: function(t, e, i) { var n = o.modes[e]; return "function" == typeof n ? n(this, t, i) : [] }, getDatasetAtEvent: function(t) { return o.modes.dataset(this, t, { intersect: !0 }) }, getDatasetMeta: function(t) { var e = this.data.datasets[t];
                        e._meta || (e._meta = {}); var i = e._meta[this.id]; return i || (i = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i }, getVisibleDatasetCount: function() { for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++; return t }, isDatasetVisible: function(t) { var e = this.getDatasetMeta(t); return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(t) { var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e]) }, destroy: function() { var e, i, n = this,
                            o = n.canvas; for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
                        o && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var e = this;
                        e.tooltip = new t.Tooltip({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e) }, bindEvents: function() { var t = this,
                            e = t._listeners = {},
                            i = function() { t.eventHandler.apply(t, arguments) };
                        a.each(t.options.events, function(n) { s.addEventListener(t, n, i), e[n] = i }), t.options.responsive && (i = function() { t.resize() }, s.addEventListener(t, "resize", i), e.resize = i) }, unbindEvents: function() { var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, a.each(e, function(e, i) { s.removeEventListener(t, i, e) })) }, updateHoverStyle: function(t, e, i) { var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle"; for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n) }, eventHandler: function(t) { var e = this,
                            i = e.tooltip; if (!1 !== l.notify(e, "beforeEvent", [t])) { e._bufferedRender = !0, e._bufferedRequest = null; var n = e.handleEvent(t);
                            i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]); var a = e._bufferedRequest; return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e } }, handleEvent: function(t) { var e, i = this,
                            n = i.options || {},
                            o = n.hover; return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e } }), t.Controller = t } }, { 25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48 }], 24: [function(t, e, i) { "use strict"; var n = t(45);
            e.exports = function(t) { var e = ["push", "pop", "shift", "splice", "unshift"];

                function i(t, i) { var n = t._chartjs; if (n) { var a = n.listeners,
                            o = a.indexOf(i); - 1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function(e) { delete t[e] }), delete t._chartjs) } }
                t.DatasetController = function(t, e) { this.initialize(t, e) }, n.extend(t.DatasetController.prototype, { datasetElementType: null, dataElementType: null, initialize: function(t, e) { this.chart = t, this.index = e, this.linkScales(), this.addElements() }, updateIndex: function(t) { this.index = t }, linkScales: function() { var t = this,
                            e = t.getMeta(),
                            i = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(t) { return this.chart.scales[t] }, reset: function() { this.update(!0) }, destroy: function() { this._data && i(this._data, this) }, createMetaDataset: function() { var t = this.datasetElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(t) { var e = this.dataElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t }) }, addElements: function() { var t, e, i = this.getMeta(),
                            n = this.getDataset().data || [],
                            a = i.data; for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset() }, addElementAndReset: function(t) { var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0) }, buildOrUpdateElements: function() { var t, a, o = this,
                            r = o.getDataset(),
                            s = r.data || (r.data = []);
                        o._data !== s && (o._data && i(o._data, o), a = o, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [a] } }), e.forEach(function(e) { var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                a = t[e];
                            Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function() { var e = Array.prototype.slice.call(arguments),
                                        o = a.apply(this, e); return n.each(t._chartjs.listeners, function(t) { "function" == typeof t[i] && t[i].apply(t, e) }), o } }) })), o._data = s), o.resyncElements() }, update: n.noop, transition: function(t) { for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                        e.dataset && e.dataset.transition(t) }, draw: function() { var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0; for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw() }, removeHoverStyle: function(t, e) { var i = this.chart.data.datasets[t._datasetIndex],
                            a = t._index,
                            o = t.custom || {},
                            r = n.valueAtIndexOrDefault,
                            s = t._model;
                        s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth) }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            a = t.custom || {},
                            o = n.valueAtIndexOrDefault,
                            r = n.getHoverColor,
                            s = t._model;
                        s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth) }, resyncElements: function() { var t = this.getMeta(),
                            e = this.getDataset().data,
                            i = t.data.length,
                            n = e.length;
                        n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i) }, insertElements: function(t, e) { for (var i = 0; i < e; ++i) this.addElementAndReset(t + i) }, onDataPush: function() { this.insertElements(this.getDataset().data.length - 1, arguments.length) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(t, e) { this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), t.DatasetController.extend = n.inherits } }, { 45: 45 }], 25: [function(t, e, i) { "use strict"; var n = t(45);
            e.exports = { _set: function(t, e) { return n.merge(this[t] || (this[t] = {}), e) } } }, { 45: 45 }], 26: [function(t, e, i) { "use strict"; var n = t(3),
                a = t(45); var o = function(t) { a.extend(this, t), this.initialize.apply(this, arguments) };
            a.extend(o.prototype, { initialize: function() { this.hidden = !1 }, pivot: function() { var t = this; return t._view || (t._view = a.clone(t._model)), t._start = {}, t }, transition: function(t) { var e = this,
                        i = e._model,
                        a = e._start,
                        o = e._view; return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function(t, e, i, a) { var o, r, s, l, u, d, c, h, f, g = Object.keys(i); for (o = 0, r = g.length; o < r; ++o)
                            if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) { if (t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof(u = t[s]))
                                    if ("string" === c) { if ((h = n(u)).valid && (f = n(d)).valid) { e[s] = f.mix(h, a).rgbString(); continue } } else if ("number" === c && isFinite(u) && isFinite(d)) { e[s] = u + (d - u) * a; continue }
                                e[s] = d } }(a, o, i, t), e) : (e._view = i, e._start = null, e) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return a.isNumber(this._model.x) && a.isNumber(this._model.y) } }), o.extend = a.inherits, e.exports = o }, { 3: 3, 45: 45 }], 27: [function(t, e, i) { "use strict"; var n = t(3),
                a = t(25),
                o = t(45);
            e.exports = function(t) {
                function e(t, e, i) { var n; return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n }

                function i(t) { return null != t && "none" !== t }

                function r(t, n, a) { var o = document.defaultView,
                        r = t.parentNode,
                        s = o.getComputedStyle(t)[n],
                        l = o.getComputedStyle(r)[n],
                        u = i(s),
                        d = i(l),
                        c = Number.POSITIVE_INFINITY; return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none" }
                o.configMerge = function() { return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), { merger: function(e, i, n, a) { var r = i[e] || {},
                                s = n[e]; "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a) } }) }, o.scaleMerge = function() { return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), { merger: function(e, i, n, a) { if ("xAxes" === e || "yAxes" === e) { var r, s, l, u = n[e].length; for (i[e] || (i[e] = []), r = 0; r < u; ++r) l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l) } else o._merger(e, i, n, a) } }) }, o.where = function(t, e) { if (o.isArray(t) && Array.prototype.filter) return t.filter(e); var i = []; return o.each(t, function(t) { e(t) && i.push(t) }), i }, o.findIndex = Array.prototype.findIndex ? function(t, e, i) { return t.findIndex(e, i) } : function(t, e, i) { i = void 0 === i ? t : i; for (var n = 0, a = t.length; n < a; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1 }, o.findNextWhere = function(t, e, i) { o.isNullOrUndef(i) && (i = -1); for (var n = i + 1; n < t.length; n++) { var a = t[n]; if (e(a)) return a } }, o.findPreviousWhere = function(t, e, i) { o.isNullOrUndef(i) && (i = t.length); for (var n = i - 1; n >= 0; n--) { var a = t[n]; if (e(a)) return a } }, o.isNumber = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, o.almostEquals = function(t, e, i) { return Math.abs(t - e) < i }, o.almostWhole = function(t, e) { var i = Math.round(t); return i - e < t && i + e > t }, o.max = function(t) { return t.reduce(function(t, e) { return isNaN(e) ? t : Math.max(t, e) }, Number.NEGATIVE_INFINITY) }, o.min = function(t) { return t.reduce(function(t, e) { return isNaN(e) ? t : Math.min(t, e) }, Number.POSITIVE_INFINITY) }, o.sign = Math.sign ? function(t) { return Math.sign(t) } : function(t) { return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1 }, o.log10 = Math.log10 ? function(t) { return Math.log10(t) } : function(t) { var e = Math.log(t) * Math.LOG10E,
                        i = Math.round(e); return t === Math.pow(10, i) ? i : e }, o.toRadians = function(t) { return t * (Math.PI / 180) }, o.toDegrees = function(t) { return t * (180 / Math.PI) }, o.getAngleFromPoint = function(t, e) { var i = e.x - t.x,
                        n = e.y - t.y,
                        a = Math.sqrt(i * i + n * n),
                        o = Math.atan2(n, i); return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a } }, o.distanceBetweenPoints = function(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) }, o.aliasPixel = function(t) { return t % 2 == 0 ? 0 : .5 }, o.splineCurve = function(t, e, i, n) { var a = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = n * (u = isNaN(u) ? 0 : u),
                        h = n * (d = isNaN(d) ? 0 : d); return { previous: { x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y) }, next: { x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y) } } }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) { var e, i, n, a, r, s, l, u, d, c = (t || []).map(function(t) { return { model: t._model, deltaK: 0, mK: 0 } }),
                        h = c.length; for (e = 0; e < h; ++e)
                        if (!(n = c[e]).model.skip) { if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) { var f = a.model.x - n.model.x;
                                n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0 }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2 }
                    for (e = 0; e < h - 1; ++e) n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK))); for (e = 0; e < h; ++e)(n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK)) }, o.nextItem = function(t, e, i) { return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1] }, o.previousItem = function(t, e, i) { return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1] }, o.niceNum = function(t, e) { var i = Math.floor(o.log10(t)),
                        n = t / Math.pow(10, i); return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i) }, o.requestAnimFrame = "undefined" == typeof window ? function(t) { t() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return window.setTimeout(t, 1e3 / 60) }, o.getRelativePosition = function(t, e) { var i, n, a = t.originalEvent || t,
                        r = t.currentTarget || t.srcElement,
                        s = r.getBoundingClientRect(),
                        l = a.touches;
                    l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY); var u = parseFloat(o.getStyle(r, "padding-left")),
                        d = parseFloat(o.getStyle(r, "padding-top")),
                        c = parseFloat(o.getStyle(r, "padding-right")),
                        h = parseFloat(o.getStyle(r, "padding-bottom")),
                        f = s.right - s.left - u - c,
                        g = s.bottom - s.top - d - h; return { x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio), y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio) } }, o.getConstraintWidth = function(t) { return r(t, "max-width", "clientWidth") }, o.getConstraintHeight = function(t) { return r(t, "max-height", "clientHeight") }, o.getMaximumWidth = function(t) { var e = t.parentNode; if (!e) return t.clientWidth; var i = parseInt(o.getStyle(e, "padding-left"), 10),
                        n = parseInt(o.getStyle(e, "padding-right"), 10),
                        a = e.clientWidth - i - n,
                        r = o.getConstraintWidth(t); return isNaN(r) ? a : Math.min(a, r) }, o.getMaximumHeight = function(t) { var e = t.parentNode; if (!e) return t.clientHeight; var i = parseInt(o.getStyle(e, "padding-top"), 10),
                        n = parseInt(o.getStyle(e, "padding-bottom"), 10),
                        a = e.clientHeight - i - n,
                        r = o.getConstraintHeight(t); return isNaN(r) ? a : Math.min(a, r) }, o.getStyle = function(t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) }, o.retinaScale = function(t, e) { var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1; if (1 !== i) { var n = t.canvas,
                            a = t.height,
                            o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px") } }, o.fontString = function(t, e, i) { return e + " " + t + "px " + i }, o.longestText = function(t, e, i, n) { var a = (n = n || {}).data = n.data || {},
                        r = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e; var s = 0;
                    o.each(i, function(e) { null != e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function(e) { null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e)) }) }); var l = r.length / 2; if (l > i.length) { for (var u = 0; u < l; u++) delete a[r[u]];
                        r.splice(0, l) } return s }, o.measureText = function(t, e, i, n, a) { var o = e[a]; return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n }, o.numberOfLabelLines = function(t) { var e = 1; return o.each(t, function(t) { o.isArray(t) && t.length > e && (e = t.length) }), e }, o.color = n ? function(t) { return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t) } : function(t) { return console.error("Color.js not found!"), t }, o.getHoverColor = function(t) { return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString() } } }, { 25: 25, 3: 3, 45: 45 }], 28: [function(t, e, i) { "use strict"; var n = t(45);

            function a(t, e) { return t.native ? { x: t.x, y: t.y } : n.getRelativePosition(t, e) }

            function o(t, e) { var i, n, a, o, r; for (n = 0, o = t.data.datasets.length; n < o; ++n)
                    if (t.isDatasetVisible(n))
                        for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) { var s = i.data[a];
                            s._view.skip || e(s) } }

            function r(t, e) { var i = []; return o(t, function(t) { t.inRange(e.x, e.y) && i.push(t) }), i }

            function s(t, e, i, n) { var a = Number.POSITIVE_INFINITY,
                    r = []; return o(t, function(t) { if (!i || t.inRange(e.x, e.y)) { var o = t.getCenterPoint(),
                            s = n(e, o);
                        s < a ? (r = [t], a = s) : s === a && r.push(t) } }), r }

            function l(t) { var e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y"); return function(t, n) { var a = e ? Math.abs(t.x - n.x) : 0,
                        o = i ? Math.abs(t.y - n.y) : 0; return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2)) } }

            function u(t, e, i) { var n = a(e, t);
                i.axis = i.axis || "x"; var o = l(i.axis),
                    u = i.intersect ? r(t, n) : s(t, n, !1, o),
                    d = []; return u.length ? (t.data.datasets.forEach(function(e, i) { if (t.isDatasetVisible(i)) { var n = t.getDatasetMeta(i).data[u[0]._index];
                        n && !n._view.skip && d.push(n) } }), d) : [] }
            e.exports = { modes: { single: function(t, e) { var i = a(e, t),
                            n = []; return o(t, function(t) { if (t.inRange(i.x, i.y)) return n.push(t), n }), n.slice(0, 1) }, label: u, index: u, dataset: function(t, e, i) { var n = a(e, t);
                        i.axis = i.axis || "xy"; var o = l(i.axis),
                            u = i.intersect ? r(t, n) : s(t, n, !1, o); return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u }, "x-axis": function(t, e) { return u(t, e, { intersect: !1 }) }, point: function(t, e) { return r(t, a(e, t)) }, nearest: function(t, e, i) { var n = a(e, t);
                        i.axis = i.axis || "xy"; var o = l(i.axis),
                            r = s(t, n, i.intersect, o); return r.length > 1 && r.sort(function(t, e) { var i = t.getArea() - e.getArea(); return 0 === i && (i = t._datasetIndex - e._datasetIndex), i }), r.slice(0, 1) }, x: function(t, e, i) { var n = a(e, t),
                            r = [],
                            s = !1; return o(t, function(t) { t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0) }), i.intersect && !s && (r = []), r }, y: function(t, e, i) { var n = a(e, t),
                            r = [],
                            s = !1; return o(t, function(t) { t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0) }), i.intersect && !s && (r = []), r } } } }, { 45: 45 }], 29: [function(t, e, i) { "use strict";
            t(25)._set("global", { responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }), e.exports = function() { var t = function(t, e) { return this.construct(t, e), this }; return t.Chart = t, t } }, { 25: 25 }], 30: [function(t, e, i) { "use strict"; var n = t(45);

            function a(t, e) { return n.where(t, function(t) { return t.position === e }) }

            function o(t, e) { t.forEach(function(t, e) { return t._tmpIndex_ = e, t }), t.sort(function(t, i) { var n = e ? i : t,
                        a = e ? t : i; return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight }), t.forEach(function(t) { delete t._tmpIndex_ }) }
            e.exports = { defaults: {}, addBox: function(t, e) { t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e) }, removeBox: function(t, e) { var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1) }, configure: function(t, e, i) { for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n]) }, update: function(t, e, i) { if (t) { var r = t.options.layout || {},
                            s = n.options.toPadding(r.padding),
                            l = s.left,
                            u = s.right,
                            d = s.top,
                            c = s.bottom,
                            h = a(t.boxes, "left"),
                            f = a(t.boxes, "right"),
                            g = a(t.boxes, "top"),
                            p = a(t.boxes, "bottom"),
                            m = a(t.boxes, "chartArea");
                        o(h, !0), o(f, !1), o(g, !0), o(p, !1); var v = e - l - u,
                            b = i - d - c,
                            x = b / 2,
                            y = (e - v / 2) / (h.length + f.length),
                            k = (i - x) / (g.length + p.length),
                            M = v,
                            w = b,
                            S = [];
                        n.each(h.concat(f, g, p), function(t) { var e, i = t.isHorizontal();
                            i ? (e = t.update(t.fullWidth ? v : M, k), w -= e.height) : (e = t.update(y, w), M -= e.width), S.push({ horizontal: i, minSize: e, box: t }) }); var C = 0,
                            _ = 0,
                            D = 0,
                            I = 0;
                        n.each(g.concat(p), function(t) { if (t.getPadding) { var e = t.getPadding();
                                C = Math.max(C, e.left), _ = Math.max(_, e.right) } }), n.each(h.concat(f), function(t) { if (t.getPadding) { var e = t.getPadding();
                                D = Math.max(D, e.top), I = Math.max(I, e.bottom) } }); var P = l,
                            A = u,
                            T = d,
                            F = c;
                        n.each(h.concat(f), N), n.each(h, function(t) { P += t.width }), n.each(f, function(t) { A += t.width }), n.each(g.concat(p), N), n.each(g, function(t) { T += t.height }), n.each(p, function(t) { F += t.height }), n.each(h.concat(f), function(t) { var e = n.findNextWhere(S, function(e) { return e.box === t }),
                                i = { left: 0, right: 0, top: T, bottom: F };
                            e && t.update(e.minSize.width, w, i) }), P = l, A = u, T = d, F = c, n.each(h, function(t) { P += t.width }), n.each(f, function(t) { A += t.width }), n.each(g, function(t) { T += t.height }), n.each(p, function(t) { F += t.height }); var O = Math.max(C - P, 0);
                        P += O, A += Math.max(_ - A, 0); var R = Math.max(D - T, 0);
                        T += R, F += Math.max(I - F, 0); var L = i - T - F,
                            z = e - P - A;
                        z === M && L === w || (n.each(h, function(t) { t.height = L }), n.each(f, function(t) { t.height = L }), n.each(g, function(t) { t.fullWidth || (t.width = z) }), n.each(p, function(t) { t.fullWidth || (t.width = z) }), w = L, M = z); var B = l + O,
                            W = d + R;
                        n.each(h.concat(g), V), B += M, W += w, n.each(f, V), n.each(p, V), t.chartArea = { left: P, top: T, right: P + M, bottom: T + w }, n.each(m, function(e) { e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, w) }) }

                    function N(t) { var e = n.findNextWhere(S, function(e) { return e.box === t }); if (e)
                            if (t.isHorizontal()) { var i = { left: Math.max(P, C), right: Math.max(A, _), top: 0, bottom: 0 };
                                t.update(t.fullWidth ? v : M, b / 2, i) } else t.update(e.minSize.width, w) }

                    function V(t) { t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - u : P + M, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right) } } } }, { 45: 45 }], 31: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(45);
            n._set("global", { plugins: {} }), e.exports = { _plugins: [], _cacheId: 0, register: function(t) { var e = this._plugins;
                    [].concat(t).forEach(function(t) {-1 === e.indexOf(t) && e.push(t) }), this._cacheId++ }, unregister: function(t) { var e = this._plugins;
                    [].concat(t).forEach(function(t) { var i = e.indexOf(t); - 1 !== i && e.splice(i, 1) }), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(t, e, i) { var n, a, o, r, s, l = this.descriptors(t),
                        u = l.length; for (n = 0; n < u; ++n)
                        if ("function" == typeof(s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                    return !0 }, descriptors: function(t) { var e = t.$plugins || (t.$plugins = {}); if (e.id === this._cacheId) return e.descriptors; var i = [],
                        o = [],
                        r = t && t.config || {},
                        s = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach(function(t) { if (-1 === i.indexOf(t)) { var e = t.id,
                                r = s[e];!1 !== r && (!0 === r && (r = a.clone(n.global.plugins[e])), i.push(t), o.push({ plugin: t, options: r || {} })) } }), e.descriptors = o, e.id = this._cacheId, o }, _invalidate: function(t) { delete t.$plugins } } }, { 25: 25, 45: 45 }], 32: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45),
                r = t(34);

            function s(t) { var e, i, n = []; for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label); return n }

            function l(t, e, i) { var n = t.getPixelForTick(e); return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n }
            n._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", lineHeight: 1.2, padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: r.formatters.values, minor: {}, major: {} } }), e.exports = function(t) {
                function e(t, e, i) { return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width }

                function i(t) { var e = o.valueOrDefault,
                        i = n.global,
                        a = e(t.fontSize, i.defaultFontSize),
                        r = e(t.fontStyle, i.defaultFontStyle),
                        s = e(t.fontFamily, i.defaultFontFamily); return { size: a, style: r, family: s, font: o.fontString(a, r, s) } }

                function r(t) { return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize)) }
                t.Scale = a.extend({ getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, mergeTicksOptions: function() { var t = this.options.ticks; for (var e in !1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e])) }, beforeUpdate: function() { o.callback(this.options.beforeUpdate, [this]) }, update: function(t, e, i) { var n, a, r, s, l, u, d = this; for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({ left: 0, right: 0, top: 0, bottom: 0 }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) s = r[n], (u = l[n]) ? u.label = s : l.push(u = { label: s, major: !1 }); return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize }, afterUpdate: function() { o.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { o.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0 }, afterSetDimensions: function() { o.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { o.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: o.noop, afterDataLimits: function() { o.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { o.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: o.noop, afterBuildTicks: function() { o.callback(this.options.afterBuildTicks, [this]) }, beforeTickToLabelConversion: function() { o.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this) }, afterTickToLabelConversion: function() { o.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { o.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var t = this,
                            e = t.ctx,
                            n = t.options.ticks,
                            a = s(t._ticks),
                            r = i(n);
                        e.font = r.font; var l = n.minRotation || 0; if (a.length && t.options.display && t.isHorizontal())
                            for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) { var f = o.toRadians(l); if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) { l--; break }
                                l++, c = u * d }
                        t.labelRotation = l }, afterCalculateTickRotation: function() { o.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { o.callback(this.options.beforeFit, [this]) }, fit: function() { var t = this,
                            n = t.minSize = { width: 0, height: 0 },
                            a = s(t._ticks),
                            l = t.options,
                            u = l.ticks,
                            d = l.scaleLabel,
                            c = l.gridLines,
                            h = l.display,
                            f = t.isHorizontal(),
                            g = i(u),
                            p = l.gridLines.tickMarkLength; if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) { var m = r(d) + o.options.toPadding(d.padding).height;
                            f ? n.height += m : n.width += m } if (u.display && h) { var v = o.longestText(t.ctx, g.font, a, t.longestTextCache),
                                b = o.numberOfLabelLines(a),
                                x = .5 * g.size,
                                y = t.options.ticks.padding; if (f) { t.longestLabelWidth = v; var k = o.toRadians(t.labelRotation),
                                    M = Math.cos(k),
                                    w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
                                n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font; var S = e(t.ctx, a[0], g.font),
                                    C = e(t.ctx, a[a.length - 1], g.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? M * S + 3 : M * x + 3, t.paddingRight = "bottom" === l.position ? M * x + 3 : M * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3) } else u.mirror ? v = 0 : v += y + x, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2 }
                        t.handleMargins(), t.width = n.width, t.height = n.height }, handleMargins: function() { var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0)) }, afterFit: function() { o.callback(this.options.afterFit, [this]) }, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(t) { if (o.isNullOrUndef(t)) return NaN; if ("number" == typeof t && !isFinite(t)) return NaN; if (t)
                            if (this.isHorizontal()) { if (void 0 !== t.x) return this.getRightValue(t.x) } else if (void 0 !== t.y) return this.getRightValue(t.y); return t }, getLabelForIndex: o.noop, getPixelForValue: o.noop, getValueForPixel: o.noop, getPixelForTick: function(t) { var e = this,
                            i = e.options.offset; if (e.isHorizontal()) { var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                a = n * t + e.paddingLeft;
                            i && (a += n / 2); var o = e.left + Math.round(a); return o += e.isFullWidth() ? e.margins.left : 0 } var r = e.height - (e.paddingTop + e.paddingBottom); return e.top + t * (r / (e._ticks.length - 1)) }, getPixelForDecimal: function(t) { var e = this; if (e.isHorizontal()) { var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                n = e.left + Math.round(i); return n += e.isFullWidth() ? e.margins.left : 0 } return e.top + t * e.height }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var t = this.min,
                            e = this.max; return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 }, _autoSkip: function(t) { var e, i, n, a, r = this,
                            s = r.isHorizontal(),
                            l = r.options.ticks.minor,
                            u = t.length,
                            d = o.toRadians(r.labelRotation),
                            c = Math.cos(d),
                            h = r.longestLabelWidth * c,
                            f = []; for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n); return f }, draw: function(t) { var e = this,
                            a = e.options; if (a.display) { var s = e.ctx,
                                u = n.global,
                                d = a.ticks.minor,
                                c = a.ticks.major || d,
                                h = a.gridLines,
                                f = a.scaleLabel,
                                g = 0 !== e.labelRotation,
                                p = e.isHorizontal(),
                                m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                v = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                                b = i(d),
                                x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                                y = i(c),
                                k = h.drawTicks ? h.tickMarkLength : 0,
                                M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                                w = i(f),
                                S = o.options.toPadding(f.padding),
                                C = o.toRadians(e.labelRotation),
                                _ = [],
                                D = e.options.gridLines.lineWidth,
                                I = "right" === a.position ? e.right : e.right - D - k,
                                P = "right" === a.position ? e.right + k : e.right,
                                A = "bottom" === a.position ? e.top + D : e.bottom - k - D,
                                T = "bottom" === a.position ? e.top + D + k : e.bottom + D; if (o.each(m, function(i, n) { if (!o.isNullOrUndef(i.label)) { var r, s, c, f, v, b, x, y, M, w, S, F, O, R, L = i.label;
                                        n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset)); var z = "middle",
                                            B = "middle",
                                            W = d.padding; if (p) { var N = k + W; "bottom" === a.position ? (B = g ? "middle" : "top", z = g ? "right" : "center", R = e.top + N) : (B = g ? "middle" : "bottom", z = g ? "left" : "center", R = e.bottom - N); var V = l(e, n, h.offsetGridLines && m.length > 1);
                                            V < e.left && (s = "rgba(0,0,0,0)"), V += o.aliasPixel(r), O = e.getPixelForTick(n) + d.labelOffset, v = x = M = S = V, b = A, y = T, w = t.top, F = t.bottom + D } else { var E, H = "left" === a.position;
                                            d.mirror ? (z = H ? "left" : "right", E = W) : (z = H ? "right" : "left", E = k + W), O = H ? e.right - E : e.left + E; var j = l(e, n, h.offsetGridLines && m.length > 1);
                                            j < e.top && (s = "rgba(0,0,0,0)"), j += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, v = I, x = P, M = t.left, S = t.right + D, b = y = w = F = j }
                                        _.push({ tx1: v, ty1: b, tx2: x, ty2: y, x1: M, y1: w, x2: S, y2: F, labelX: O, labelY: R, glWidth: r, glColor: s, glBorderDash: c, glBorderDashOffset: f, rotation: -1 * C, label: L, major: i.major, textBaseline: B, textAlign: z }) } }), o.each(_, function(t) { if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) { s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign; var i = t.label; if (o.isArray(i))
                                            for (var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) s.fillText("" + i[l], 0, r), r += a;
                                        else s.fillText(i, 0, 0);
                                        s.restore() } }), f.display) { var F, O, R = 0,
                                    L = r(f) / 2; if (p) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - L - S.bottom : e.top + L + S.top;
                                else { var z = "left" === a.position;
                                    F = z ? e.left + L + S.top : e.right - L - S.top, O = e.top + (e.bottom - e.top) / 2, R = z ? -.5 * Math.PI : .5 * Math.PI }
                                s.save(), s.translate(F, O), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = M, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore() } if (h.drawBorder) { s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0); var B = e.left,
                                    W = e.right + D,
                                    N = e.top,
                                    V = e.bottom + D,
                                    E = o.aliasPixel(s.lineWidth);
                                p ? (N = V = "top" === a.position ? e.bottom : e.top, N += E, V += E) : (B = W = "left" === a.position ? e.right : e.left, B += E, W += E), s.beginPath(), s.moveTo(B, N), s.lineTo(W, V), s.stroke() } } } }) } }, { 25: 25, 26: 26, 34: 34, 45: 45 }], 33: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(45),
                o = t(30);
            e.exports = function(t) { t.scaleService = { constructors: {}, defaults: {}, registerScaleType: function(t, e, i) { this.constructors[t] = e, this.defaults[t] = a.clone(i) }, getScaleConstructor: function(t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0 }, getScaleDefaults: function(t) { return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {} }, updateScaleDefaults: function(t, e) { this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e)) }, addScalesToLayout: function(t) { a.each(t.scales, function(e) { e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e) }) } } } }, { 25: 25, 30: 30, 45: 45 }], 34: [function(t, e, i) { "use strict"; var n = t(45);
            e.exports = { formatters: { values: function(t) { return n.isArray(t) ? t : "" + t }, linear: function(t, e, i) { var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                        Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t)); var o = n.log10(Math.abs(a)),
                            r = ""; if (0 !== t) { var s = -1 * Math.floor(o);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s) } else r = "0"; return r }, logarithmic: function(t, e, i) { var a = t / Math.pow(10, Math.floor(n.log10(t))); return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : "" } } } }, { 45: 45 }], 35: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45);
            n._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: o.noop, title: function(t, e) { var i = "",
                                n = e.labels,
                                a = n ? n.length : 0; if (t.length > 0) { var o = t[0];
                                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index]) } return i }, afterTitle: o.noop, beforeBody: o.noop, beforeLabel: o.noop, label: function(t, e) { var i = e.datasets[t.datasetIndex].label || ""; return i && (i += ": "), i += t.yLabel }, labelColor: function(t, e) { var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view; return { borderColor: i.borderColor, backgroundColor: i.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: o.noop, afterBody: o.noop, beforeFooter: o.noop, footer: o.noop, afterFooter: o.noop } } }), e.exports = function(t) {
                function e(t, e) { var i = o.color(t); return i.alpha(e * i.alpha()).rgbaString() }

                function i(t, e) { return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t }

                function r(t) { var e = n.global,
                        i = o.valueOrDefault; return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, bodyFontColor: t.bodyFontColor, _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: i(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle), titleFontSize: i(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle), footerFontSize: i(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth } }
                t.Tooltip = a.extend({ initialize: function() { this._model = r(this._options), this._lastActive = [] }, getTitle: function() { var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            n = t.title.apply(this, arguments),
                            a = t.afterTitle.apply(this, arguments),
                            o = []; return o = i(o = i(o = i(o, e), n), a) }, getBeforeBody: function() { var t = this._options.callbacks.beforeBody.apply(this, arguments); return o.isArray(t) ? t : void 0 !== t ? [t] : [] }, getBody: function(t, e) { var n = this,
                            a = n._options.callbacks,
                            r = []; return o.each(t, function(t) { var o = { before: [], lines: [], after: [] };
                            i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o) }), r }, getAfterBody: function() { var t = this._options.callbacks.afterBody.apply(this, arguments); return o.isArray(t) ? t : void 0 !== t ? [t] : [] }, getFooter: function() { var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            n = t.footer.apply(this, arguments),
                            a = t.afterFooter.apply(this, arguments),
                            o = []; return o = i(o = i(o = i(o, e), n), a) }, update: function(e) { var i, n, a, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k, M, w, S = this,
                            C = S._options,
                            _ = S._model,
                            D = S._model = r(C),
                            I = S._active,
                            P = S._data,
                            A = { xAlign: _.xAlign, yAlign: _.yAlign },
                            T = { x: _.x, y: _.y },
                            F = { width: _.width, height: _.height },
                            O = { x: _.caretX, y: _.caretY }; if (I.length) { D.opacity = 1; var R = [],
                                L = [];
                            O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition); var z = []; for (i = 0, n = I.length; i < n; ++i) z.push((x = I[i], y = void 0, k = void 0, void 0, void 0, y = x._xScale, k = x._yScale || x._scale, M = x._index, w = x._datasetIndex, { xLabel: y ? y.getLabelForIndex(M, w) : "", yLabel: k ? k.getLabelForIndex(M, w) : "", index: M, datasetIndex: w, x: x._model.x, y: x._model.y }));
                            C.filter && (z = z.filter(function(t) { return C.filter(t, P) })), C.itemSort && (z = z.sort(function(t, e) { return C.itemSort(t, e, P) })), o.each(z, function(t) { R.push(C.callbacks.labelColor.call(S, t, S._chart)), L.push(C.callbacks.labelTextColor.call(S, t, S._chart)) }), D.title = S.getTitle(z, P), D.beforeBody = S.getBeforeBody(z, P), D.body = S.getBody(z, P), D.afterBody = S.getAfterBody(z, P), D.footer = S.getFooter(z, P), D.x = Math.round(O.x), D.y = Math.round(O.y), D.caretPadding = C.caretPadding, D.labelColors = R, D.labelTextColors = L, D.dataPoints = z, A = function(t, e) { var i, n, a, o, r, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    d = "center",
                                    c = "center";
                                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom"); var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2; "center" === c ? (i = function(t) { return t <= h }, n = function(t) { return t > h }) : (i = function(t) { return t <= e.width / 2 }, n = function(t) { return t >= l.width - e.width / 2 }), a = function(t) { return t + e.width + s.caretSize + s.caretPadding > l.width }, o = function(t) { return t - e.width - s.caretSize - s.caretPadding < 0 }, r = function(t) { return t <= f ? "top" : "bottom" }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y))); var g = t._options; return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : c } }(this, F = function(t, e) { var i = t._chart.ctx,
                                    n = 2 * e.yPadding,
                                    a = 0,
                                    r = e.body,
                                    s = r.reduce(function(t, e) { return t + e.before.length + e.lines.length + e.after.length }, 0);
                                s += e.beforeBody.length + e.afterBody.length; var l = e.title.length,
                                    u = e.footer.length,
                                    d = e.titleFontSize,
                                    c = e.bodyFontSize,
                                    h = e.footerFontSize;
                                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0; var f = 0,
                                    g = function(t) { a = Math.max(a, i.measureText(t).width + f) }; return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function(t) { o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g) }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), { width: a += 2 * e.xPadding, height: n } }(this, D)), a = D, s = F, l = A, u = S._chart, d = a.x, c = a.y, h = a.caretSize, f = a.caretPadding, g = a.cornerRadius, p = l.xAlign, m = l.yAlign, v = h + f, b = g + f, "right" === p ? d -= s.width : "center" === p && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === m ? c += v : c -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === p ? d += v : "right" === p && (d -= v) : "left" === p ? d -= b : "right" === p && (d += b), T = { x: d, y: c } } else D.opacity = 0; return D.xAlign = A.xAlign, D.yAlign = A.yAlign, D.x = T.x, D.y = T.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, S._model = D, e && C.custom && C.custom.call(S, D), S }, drawCaret: function(t, e) { var i = this._chart.ctx,
                            n = this._view,
                            a = this.getCaretPosition(t, e, n);
                        i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3) }, getCaretPosition: function(t, e, i) { var n, a, o, r, s, l, u = i.caretSize,
                            d = i.cornerRadius,
                            c = i.xAlign,
                            h = i.yAlign,
                            f = t.x,
                            g = t.y,
                            p = e.width,
                            m = e.height; if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);
                        else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = i.caretX) - u, o = a + u), "top" === h) s = (r = g) - u, l = r;
                        else { s = (r = g + m) + u, l = r; var v = o;
                            o = n, n = v } return { x1: n, x2: a, x3: o, y1: r, y2: s, y3: l } }, drawTitle: function(t, i, n, a) { var r = i.title; if (r.length) { n.textAlign = i._titleAlign, n.textBaseline = "top"; var s, l, u = i.titleFontSize,
                                d = i.titleSpacing; for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d) } }, drawBody: function(t, i, n, a) { var r = i.bodyFontSize,
                            s = i.bodySpacing,
                            l = i.body;
                        n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily); var u = 0,
                            d = function(e) { n.fillText(e, t.x + u, t.y), t.y += r + s };
                        n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d); var c = i.displayColors;
                        u = c ? r + 2 : 0, o.each(l, function(s, l) { var u = e(i.labelTextColors[l], a);
                            n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function(o) { c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o) }), o.each(s.after, d) }), u = 0, o.each(i.afterBody, d), t.y -= s }, drawFooter: function(t, i, n, a) { var r = i.footer;
                        r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function(e) { n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing })) }, drawBackground: function(t, i, n, a, o) { n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth; var r = i.xAlign,
                            s = i.yAlign,
                            l = t.x,
                            u = t.y,
                            d = a.width,
                            c = a.height,
                            h = i.cornerRadius;
                        n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke() }, draw: function() { var t = this._chart.ctx,
                            e = this._view; if (0 !== e.opacity) { var i = { width: e.width, height: e.height },
                                n = { x: e.x, y: e.y },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a)) } }, handleEvent: function(t) { var e, i = this,
                            n = i._options; return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !o.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = { x: t.x, y: t.y }, i.update(!0), i.pivot())), e } }), t.Tooltip.positioners = { average: function(t) { if (!t.length) return !1; var e, i, n = 0,
                            a = 0,
                            o = 0; for (e = 0, i = t.length; e < i; ++e) { var r = t[e]; if (r && r.hasValue()) { var s = r.tooltipPosition();
                                n += s.x, a += s.y, ++o } } return { x: Math.round(n / o), y: Math.round(a / o) } }, nearest: function(t, e) { var i, n, a, r = e.x,
                            s = e.y,
                            l = Number.POSITIVE_INFINITY; for (i = 0, n = t.length; i < n; ++i) { var u = t[i]; if (u && u.hasValue()) { var d = u.getCenterPoint(),
                                    c = o.distanceBetweenPoints(e, d);
                                c < l && (l = c, a = u) } } if (a) { var h = a.tooltipPosition();
                            r = h.x, s = h.y } return { x: r, y: s } } } } }, { 25: 25, 26: 26, 45: 45 }], 36: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45);
            n._set("global", { elements: { arc: { backgroundColor: n.global.defaultColor, borderColor: "#fff", borderWidth: 2 } } }), e.exports = a.extend({ inLabelRange: function(t) { var e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) }, inRange: function(t, e) { var i = this._view; if (i) { for (var n = o.getAngleFromPoint(i, { x: t, y: e }), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI; for (; a > l;) a -= 2 * Math.PI; for (; a < s;) a += 2 * Math.PI; var u = a >= s && a <= l,
                            d = r >= i.innerRadius && r <= i.outerRadius; return u && d } return !1 }, getCenterPoint: function() { var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2; return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i } }, getArea: function() { var t = this._view; return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2)) }, tooltipPosition: function() { var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius; return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i } }, draw: function() { var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke() } }) }, { 25: 25, 26: 26, 45: 45 }], 37: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45),
                r = n.global;
            n._set("global", { elements: { line: { tension: .4, backgroundColor: r.defaultColor, borderWidth: 3, borderColor: r.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }), e.exports = a.extend({ draw: function() { var t, e, i, n, a = this._view,
                        s = this._chart.ctx,
                        l = a.spanGaps,
                        u = this._children.slice(),
                        d = r.elements.line,
                        c = -1; for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
                    s.stroke(), s.restore() } }) }, { 25: 25, 26: 26, 45: 45 }], 38: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45),
                r = n.global.defaultColor;

            function s(t) { var e = this._view; return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius }
            n._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: r, borderColor: r, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }), e.exports = a.extend({ inRange: function(t, e) { var i = this._view; return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2) }, inLabelRange: s, inXRange: s, inYRange: function(t) { var e = this._view; return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius }, getCenterPoint: function() { var t = this._view; return { x: t.x, y: t.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth } }, draw: function(t) { var e = this._view,
                        i = this._model,
                        a = this._chart.ctx,
                        s = e.pointStyle,
                        l = e.radius,
                        u = e.x,
                        d = e.y,
                        c = o.color,
                        h = 0;
                    e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d)) } }) }, { 25: 25, 26: 26, 45: 45 }], 39: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26);

            function o(t) { return void 0 !== t._view.width }

            function r(t) { var e, i, n, a, r = t._view; if (o(t)) { var s = r.width / 2;
                    e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base) } else { var l = r.height / 2;
                    e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l } return { left: e, top: n, right: i, bottom: a } }
            n._set("global", { elements: { rectangle: { backgroundColor: n.global.defaultColor, borderColor: n.global.defaultColor, borderSkipped: "bottom", borderWidth: 0 } } }), e.exports = a.extend({ draw: function() { var t, e, i, n, a, o, r, s = this._chart.ctx,
                        l = this._view,
                        u = l.borderWidth; if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) { var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                            c = (u = u > d ? d : u) / 2,
                            h = t + ("left" !== r ? c * a : 0),
                            f = e + ("right" !== r ? -c * a : 0),
                            g = i + ("top" !== r ? c * o : 0),
                            p = n + ("bottom" !== r ? -c * o : 0);
                        h !== f && (i = g, n = p), g !== p && (t = h, e = f) }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u; var m = [
                            [t, n],
                            [t, i],
                            [e, i],
                            [e, n]
                        ],
                        v = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function b(t) { return m[(v + t) % 4] } - 1 === v && (v = 0); var x = b(0);
                    s.moveTo(x[0], x[1]); for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
                    s.fill(), u && s.stroke() }, height: function() { var t = this._view; return t.base - t.y }, inRange: function(t, e) { var i = !1; if (this._view) { var n = r(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom } return i }, inLabelRange: function(t, e) { if (!this._view) return !1; var i = r(this); return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom }, inXRange: function(t) { var e = r(this); return t >= e.left && t <= e.right }, inYRange: function(t) { var e = r(this); return t >= e.top && t <= e.bottom }, getCenterPoint: function() { var t, e, i = this._view; return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), { x: t, y: e } }, getArea: function() { var t = this._view; return t.width * Math.abs(t.y - t.base) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y } } }) }, { 25: 25, 26: 26 }], 40: [function(t, e, i) { "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39) }, { 36: 36, 37: 37, 38: 38, 39: 39 }], 41: [function(t, e, i) { "use strict"; var n = t(42);
            i = e.exports = { clear: function(t) { t.ctx.clearRect(0, 0, t.width, t.height) }, roundedRect: function(t, e, i, n, a, o) { if (o) { var r = Math.min(o, n / 2),
                            s = Math.min(o, a / 2);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i) } else t.rect(e, i, n, a) }, drawPoint: function(t, e, i, n, a) { var o, r, s, l, u, d; if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) { if (!(isNaN(i) || i <= 0)) { switch (e) { default: t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill(); break;
                                case "triangle":
                                        t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill(); break;
                                case "rect":
                                        d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d); break;
                                case "rectRounded":
                                        var c = i / Math.SQRT2,
                                        h = n - c,
                                        f = a - c,
                                        g = Math.SQRT2 * i;t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill(); break;
                                case "rectRot":
                                        d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill(); break;
                                case "cross":
                                        t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath(); break;
                                case "crossRot":
                                        t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath(); break;
                                case "star":
                                        t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath(); break;
                                case "line":
                                        t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath(); break;
                                case "dash":
                                        t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath() }
                            t.stroke() } } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height) }, clipArea: function(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() }, unclipArea: function(t) { t.restore() }, lineTo: function(t, e, i, n) { if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y) } };
            n.clear = i.clear, n.drawRoundedRectangle = function(t) { t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath() } }, { 42: 42 }], 42: [function(t, e, i) { "use strict"; var n, a = { noop: function() {}, uid: (n = 0, function() { return n++ }), isNullOrUndef: function(t) { return null == t }, isArray: Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) }, isObject: function(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) }, valueOrDefault: function(t, e) { return void 0 === t ? e : t }, valueAtIndexOrDefault: function(t, e, i) { return a.valueOrDefault(a.isArray(t) ? t[e] : t, i) }, callback: function(t, e, i) { if (t && "function" == typeof t.call) return t.apply(i, e) }, each: function(t, e, i, n) { var o, r, s; if (a.isArray(t))
                        if (r = t.length, n)
                            for (o = r - 1; o >= 0; o--) e.call(i, t[o], o);
                        else
                            for (o = 0; o < r; o++) e.call(i, t[o], o);
                    else if (a.isObject(t))
                        for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[s[o]], s[o]) }, arrayEquals: function(t, e) { var i, n, o, r; if (!t || !e || t.length !== e.length) return !1; for (i = 0, n = t.length; i < n; ++i)
                        if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) { if (!a.arrayEquals(o, r)) return !1 } else if (o !== r) return !1; return !0 }, clone: function(t) { if (a.isArray(t)) return t.map(a.clone); if (a.isObject(t)) { for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = a.clone(t[i[o]]); return e } return t }, _merger: function(t, e, i, n) { var o = e[t],
                        r = i[t];
                    a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : e[t] = a.clone(r) }, _mergerIf: function(t, e, i) { var n = e[t],
                        o = i[t];
                    a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o)) }, merge: function(t, e, i) { var n, o, r, s, l, u = a.isArray(e) ? e : [e],
                        d = u.length; if (!a.isObject(t)) return t; for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o)
                        if (e = u[o], a.isObject(e))
                            for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
                    return t }, mergeIf: function(t, e) { return a.merge(t, e, { merger: a._mergerIf }) }, extend: function(t) { for (var e = function(e, i) { t[i] = e }, i = 1, n = arguments.length; i < n; ++i) a.each(arguments[i], e); return t }, inherits: function(t) { var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() { return e.apply(this, arguments) },
                        n = function() { this.constructor = i }; return n.prototype = e.prototype, i.prototype = new n, i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i } };
            e.exports = a, a.callCallback = a.callback, a.indexOf = function(t, e, i) { return Array.prototype.indexOf.call(t, e, i) }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault }, {}], 43: [function(t, e, i) { "use strict"; var n = t(42),
                a = { linear: function(t) { return t }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return -t * (t - 2) }, easeInOutQuad: function(t) { return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return (t -= 1) * t * t + 1 }, easeInOutCubic: function(t) { return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return -((t -= 1) * t * t * t - 1) }, easeInOutQuart: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return (t -= 1) * t * t * t * t + 1 }, easeInOutQuint: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, easeOutSine: function(t) { return Math.sin(t * (Math.PI / 2)) }, easeInOutSine: function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, easeInExpo: function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, easeOutExpo: function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t)) }, easeInCirc: function(t) { return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1) }, easeOutCirc: function(t) { return Math.sqrt(1 - (t -= 1) * t) }, easeInOutCirc: function(t) { return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) { var e = 1.70158,
                            i = 0,
                            n = 1; return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i)) }, easeOutElastic: function(t) { var e = 1.70158,
                            i = 0,
                            n = 1; return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1) }, easeInOutElastic: function(t) { var e = 1.70158,
                            i = 0,
                            n = 1; return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1) }, easeInBack: function(t) { return t * t * (2.70158 * t - 1.70158) }, easeOutBack: function(t) { return (t -= 1) * t * (2.70158 * t + 1.70158) + 1 }, easeInOutBack: function(t) { var e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: function(t) { return 1 - a.easeOutBounce(1 - t) }, easeOutBounce: function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, easeInOutBounce: function(t) { return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5 } };
            e.exports = { effects: a }, n.easingEffects = a }, { 42: 42 }], 44: [function(t, e, i) { "use strict"; var n = t(42);
            e.exports = { toLineHeight: function(t, e) { var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!i || "normal" === i[1]) return 1.2 * e; switch (t = +i[2], i[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100 } return e * t }, toPadding: function(t) { var e, i, a, o; return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, { top: e, right: i, bottom: a, left: o, height: e + a, width: o + i } }, resolve: function(t, e, i) { var a, o, r; for (a = 0, o = t.length; a < o; ++a)
                        if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r } } }, { 42: 42 }], 45: [function(t, e, i) { "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44) }, { 41: 41, 42: 42, 43: 43, 44: 44 }], 46: [function(t, e, i) { e.exports = { acquireContext: function(t) { return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null } } }, {}], 47: [function(t, e, i) { "use strict"; var n = t(45),
                a = "$chartjs",
                o = "chartjs-",
                r = o + "render-monitor",
                s = o + "render-animation",
                l = ["animationstart", "webkitAnimationStart"],
                u = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

            function d(t, e) { var i = n.getStyle(t, e),
                    a = i && i.match(/^(\d+)(\.\d+)?px$/); return a ? Number(a[1]) : void 0 } var c = !! function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                    window.addEventListener("e", null, e) } catch (t) {} return t }() && { passive: !0 };

            function h(t, e, i) { t.addEventListener(e, i, c) }

            function f(t, e, i) { t.removeEventListener(e, i, c) }

            function g(t, e, i, n, a) { return { type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null } }

            function p(t, e, i) { var u, d, c, f, p, m, v, b, x = t[a] || (t[a] = {}),
                    y = x.resizer = function(t) { var e = document.createElement("div"),
                            i = o + "size-monitor",
                            n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>'; var a = e.childNodes[0],
                            r = e.childNodes[1];
                        e._reset = function() { a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6 }; var s = function() { e._reset(), t() }; return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e }((u = function() { if (x.resizer) return e(g("resize", i)) }, c = !1, f = [], function() { f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function() { c = !1, u.apply(d, f) })) }));
                m = function() { if (x.resizer) { var e = t.parentNode;
                        e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset() } }, v = (p = t)[a] || (p[a] = {}), b = v.renderProxy = function(t) { t.animationName === s && m() }, n.each(l, function(t) { h(p, t, b) }), v.reflow = !!p.offsetParent, p.classList.add(r) }

            function m(t) { var e, i, o, s = t[a] || {},
                    u = s.resizer;
                delete s.resizer, i = (e = t)[a] || {}, (o = i.renderProxy) && (n.each(l, function(t) { f(e, t, o) }), delete i.renderProxy), e.classList.remove(r), u && u.parentNode && u.parentNode.removeChild(u) }
            e.exports = { _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function() { var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e)) }, acquireContext: function(t, e) { "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas); var i = t && t.getContext && t.getContext("2d"); return i && i.canvas === t ? (function(t, e) { var i = t.style,
                            n = t.getAttribute("height"),
                            o = t.getAttribute("width"); if (t[a] = { initial: { height: n, width: o, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", null === o || "" === o) { var r = d(t, "width");
                            void 0 !== r && (t.width = r) } if (null === n || "" === n)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else { var s = d(t, "height");
                                void 0 !== r && (t.height = s) } }(t, e), i) : null }, releaseContext: function(t) { var e = t.canvas; if (e[a]) { var i = e[a].initial;
                        ["height", "width"].forEach(function(t) { var a = i[t];
                            n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a) }), n.each(i.style || {}, function(t, i) { e.style[i] = t }), e.width = e.width, delete e[a] } }, addEventListener: function(t, e, i) { var o = t.canvas; if ("resize" !== e) { var r = i[a] || (i[a] = {});
                        h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) { var a, o, r, s;
                            i((o = t, r = u[(a = e).type] || a.type, s = n.getRelativePosition(a, o), g(r, o, s.x, s.y, a))) }) } else p(o, i, t) }, removeEventListener: function(t, e, i) { var n = t.canvas; if ("resize" !== e) { var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
                        o && f(n, e, o) } else m(n) } }, n.addEvent = h, n.removeEvent = f }, { 45: 45 }], 48: [function(t, e, i) { "use strict"; var n = t(45),
                a = t(46),
                o = t(47),
                r = o._enabled ? o : a;
            e.exports = n.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, r) }, { 45: 45, 46: 46, 47: 47 }], 49: [function(t, e, i) { "use strict";
            e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52) }, { 50: 50, 51: 51, 52: 52 }], 50: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(40),
                o = t(45);
            n._set("global", { plugins: { filler: { propagate: !0 } } }); var r = { dataset: function(t) { var e = t.fill,
                        i = t.chart,
                        n = i.getDatasetMeta(e),
                        a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                        o = a.length || 0; return o ? function(t, e) { return e < o && a[e]._view || null } : null }, boundary: function(t) { var e = t.boundary,
                        i = e ? e.x : null,
                        n = e ? e.y : null; return function(t) { return { x: null === i ? t.x : i, y: null === n ? t.y : n } } } };

            function s(t, e, i) { var n, a = t._model || {},
                    o = a.fill; if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1; if (!0 === o) return "origin"; if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n; switch (o) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return o;
                    default:
                        return !1 } }

            function l(t) { var e, i = t.el._model || {},
                    n = t.el._scale || {},
                    a = t.fill,
                    o = null; if (isFinite(a)) return null; if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) { if (void 0 !== o.x && void 0 !== o.y) return o; if ("number" == typeof o && isFinite(o)) return { x: (e = n.isHorizontal()) ? o : null, y: e ? null : o } } return null }

            function u(t, e, i) { var n, a = t[e].fill,
                    o = [e]; if (!i) return a; for (; !1 !== a && -1 === o.indexOf(a);) { if (!isFinite(a)) return a; if (!(n = t[a])) return !1; if (n.visible) return a;
                    o.push(a), a = n.fill } return !1 }

            function d(t) { return t && !t.skip }

            function c(t, e, i, n, a) { var r; if (n && a) { for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) o.canvas.lineTo(t, e[r - 1], e[r]); for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) o.canvas.lineTo(t, i[r], i[r - 1], !0) } }
            e.exports = { id: "filler", afterDatasetsUpdate: function(t, e) { var i, n, o, d, c, h, f, g = (t.data.datasets || []).length,
                        p = e.propagate,
                        m = []; for (n = 0; n < g; ++n) d = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof a.Line && (d = { visible: t.isDatasetVisible(n), fill: s(o, n, g), chart: t, el: o }), i.$filler = d, m.push(d); for (n = 0; n < g; ++n)(d = m[n]) && (d.fill = u(m, n, p), d.boundary = l(d), d.mapper = (void 0, f = void 0, h = (c = d).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), r[f](c)))) }, beforeDatasetDraw: function(t, e) { var i = e.meta.$filler; if (i) { var a = t.ctx,
                            r = i.el,
                            s = r._view,
                            l = r._children || [],
                            u = i.mapper,
                            h = s.backgroundColor || n.global.defaultColor;
                        u && h && l.length && (o.canvas.clipArea(a, t.chartArea), function(t, e, i, n, a, o) { var r, s, l, u, h, f, g, p = e.length,
                                m = n.spanGaps,
                                v = [],
                                b = [],
                                x = 0,
                                y = 0; for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) h = i(u = e[l = r % p]._view, l, n), f = d(u), g = d(h), f && g ? (x = v.push(u), y = b.push(h)) : x && y && (m ? (f && v.push(u), g && b.push(h)) : (c(t, v, b, x, y), x = y = 0, v = [], b = []));
                            c(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill() }(a, l, u, s, h, r._loop), o.canvas.unclipArea(a)) } } } }, { 25: 25, 40: 40, 45: 45 }], 51: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45),
                r = t(30),
                s = o.noop;

            function l(t, e) { return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth }
            n._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(t, e) { var i = e.datasetIndex,
                            n = this.chart,
                            a = n.getDatasetMeta(i);
                        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update() }, onHover: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(t) { var e = t.data; return o.isArray(e.datasets) ? e.datasets.map(function(e, i) { return { text: e.label, fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(i), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: i } }, this) : [] } } }, legendCallback: function(t) { var e = [];
                    e.push('<ul class="' + t.id + '-legend">'); for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>"); return e.push("</ul>"), e.join("") } }); var u = a.extend({ initialize: function(t) { o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1 }, beforeUpdate: s, update: function(t, e, i) { var n = this; return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function() { var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: function() { var t = this,
                        e = t.options.labels || {},
                        i = o.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (i = i.filter(function(i) { return e.filter(i, t.chart.data) })), t.options.reverse && i.reverse(), t.legendItems = i }, afterBuildLabels: s, beforeFit: s, fit: function() { var t = this,
                        e = t.options,
                        i = e.labels,
                        a = e.display,
                        r = t.ctx,
                        s = n.global,
                        u = o.valueOrDefault,
                        d = u(i.fontSize, s.defaultFontSize),
                        c = u(i.fontStyle, s.defaultFontStyle),
                        h = u(i.fontFamily, s.defaultFontFamily),
                        f = o.fontString(d, c, h),
                        g = t.legendHitBoxes = [],
                        p = t.minSize,
                        m = t.isHorizontal(); if (m ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a)
                        if (r.font = f, m) { var v = t.lineWidths = [0],
                                b = t.legendItems.length ? d + i.padding : 0;
                            r.textAlign = "left", r.textBaseline = "top", o.each(t.legendItems, function(e, n) { var a = l(i, d) + d / 2 + r.measureText(e.text).width;
                                v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), g[n] = { left: 0, top: 0, width: a, height: d }, v[v.length - 1] += a + i.padding }), p.height += b } else { var x = i.padding,
                                y = t.columnWidths = [],
                                k = i.padding,
                                M = 0,
                                w = 0,
                                S = d + x;
                            o.each(t.legendItems, function(t, e) { var n = l(i, d) + d / 2 + r.measureText(t.text).width;
                                w + S > p.height && (k += M + i.padding, y.push(M), M = 0, w = 0), M = Math.max(M, n), w += S, g[e] = { left: 0, top: 0, width: n, height: d } }), k += M, y.push(M), p.width += k }
                    t.width = p.width, t.height = p.height }, afterFit: s, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var t = this,
                        e = t.options,
                        i = e.labels,
                        a = n.global,
                        r = a.elements.line,
                        s = t.width,
                        u = t.lineWidths; if (e.display) { var d, c = t.ctx,
                            h = o.valueOrDefault,
                            f = h(i.fontColor, a.defaultFontColor),
                            g = h(i.fontSize, a.defaultFontSize),
                            p = h(i.fontStyle, a.defaultFontStyle),
                            m = h(i.fontFamily, a.defaultFontFamily),
                            v = o.fontString(g, p, m);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v; var b = l(i, g),
                            x = t.legendHitBoxes,
                            y = t.isHorizontal();
                        d = y ? { x: t.left + (s - u[0]) / 2, y: t.top + i.padding, line: 0 } : { x: t.left + i.padding, y: t.top + i.padding, line: 0 }; var k = g + i.padding;
                        o.each(t.legendItems, function(n, l) { var f, p, m, v, M, w = c.measureText(n.text).width,
                                S = b + g / 2 + w,
                                C = d.x,
                                _ = d.y;
                            y ? C + S >= s && (_ = d.y += k, d.line++, C = d.x = t.left + (s - u[d.line]) / 2) : _ + k > t.bottom && (C = d.x = C + t.columnWidths[d.line] + i.padding, _ = d.y = t.top + i.padding, d.line++),
                                function(t, i, n) { if (!(isNaN(b) || b <= 0)) { c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, r.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), c.lineJoin = h(n.lineJoin, r.borderJoinStyle), c.lineWidth = h(n.lineWidth, r.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor); var s = 0 === h(n.lineWidth, r.borderWidth); if (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) { var l = g * Math.SQRT2 / 2,
                                                u = l / Math.SQRT2,
                                                d = t + u,
                                                f = i + u;
                                            o.canvas.drawPoint(c, n.pointStyle, l, d, f) } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);
                                        c.restore() } }(C, _, n), x[l].left = C, x[l].top = _, f = n, p = w, v = b + (m = g / 2) + C, M = _ + m, c.fillText(f.text, v, M), f.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()), y ? d.x += S + i.padding : d.y += k }) } }, handleEvent: function(t) { var e = this,
                        i = e.options,
                        n = "mouseup" === t.type ? "click" : t.type,
                        a = !1; if ("mousemove" === n) { if (!i.onHover) return } else { if ("click" !== n) return; if (!i.onClick) return } var o = t.x,
                        r = t.y; if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) { var u = s[l]; if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) { if ("click" === n) { i.onClick.call(e, t.native, e.legendItems[l]), a = !0; break } if ("mousemove" === n) { i.onHover.call(e, t.native, e.legendItems[l]), a = !0; break } } }
                    return a } });

            function d(t, e) { var i = new u({ ctx: t.ctx, options: e, chart: t });
                r.configure(t, i, e), r.addBox(t, i), t.legend = i }
            e.exports = { id: "legend", _element: u, beforeInit: function(t) { var e = t.options.legend;
                    e && d(t, e) }, beforeUpdate: function(t) { var e = t.options.legend,
                        i = t.legend;
                    e ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.legend) }, afterEvent: function(t, e) { var i = t.legend;
                    i && i.handleEvent(e) } } }, { 25: 25, 26: 26, 30: 30, 45: 45 }], 52: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(26),
                o = t(45),
                r = t(30),
                s = o.noop;
            n._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, lineHeight: 1.2, padding: 10, position: "top", text: "", weight: 2e3 } }); var l = a.extend({ initialize: function(t) { o.extend(this, t), this.legendHitBoxes = [] }, beforeUpdate: s, update: function(t, e, i) { var n = this; return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function() { var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: s, afterBuildLabels: s, beforeFit: s, fit: function() { var t = this,
                        e = o.valueOrDefault,
                        i = t.options,
                        a = i.display,
                        r = e(i.fontSize, n.global.defaultFontSize),
                        s = t.minSize,
                        l = o.isArray(i.text) ? i.text.length : 1,
                        u = o.options.toLineHeight(i.lineHeight, r),
                        d = a ? l * u + 2 * i.padding : 0;
                    t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height }, afterFit: s, isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t }, draw: function() { var t = this,
                        e = t.ctx,
                        i = o.valueOrDefault,
                        a = t.options,
                        r = n.global; if (a.display) { var s, l, u, d = i(a.fontSize, r.defaultFontSize),
                            c = i(a.fontStyle, r.defaultFontStyle),
                            h = i(a.fontFamily, r.defaultFontFamily),
                            f = o.fontString(d, c, h),
                            g = o.options.toLineHeight(a.lineHeight, d),
                            p = g / 2 + a.padding,
                            m = 0,
                            v = t.top,
                            b = t.left,
                            x = t.bottom,
                            y = t.right;
                        e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = v + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = v + (x - v) / 2, s = x - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle"; var k = a.text; if (o.isArray(k))
                            for (var M = 0, w = 0; w < k.length; ++w) e.fillText(k[w], 0, M, s), M += g;
                        else e.fillText(k, 0, 0, s);
                        e.restore() } } });

            function u(t, e) { var i = new l({ ctx: t.ctx, options: e, chart: t });
                r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i }
            e.exports = { id: "title", _element: l, beforeInit: function(t) { var e = t.options.title;
                    e && u(t, e) }, beforeUpdate: function(t) { var e = t.options.title,
                        i = t.titleBlock;
                    e ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock) } } }, { 25: 25, 26: 26, 30: 30, 45: 45 }], 53: [function(t, e, i) { "use strict";
            e.exports = function(t) { var e = t.Scale.extend({ getLabels: function() { var t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels }, determineDataLimits: function() { var t, e = this,
                            i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex] }, buildTicks: function() { var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1) }, getLabelForIndex: function(t, e) { var i = this,
                            n = i.chart.data,
                            a = i.isHorizontal(); return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex] }, getPixelForValue: function(t, e) { var i, n = this,
                            a = n.options.offset,
                            o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1); if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) { t = i || t; var r = n.getLabels().indexOf(t);
                            e = -1 !== r ? r : e } if (n.isHorizontal()) { var s = n.width / o,
                                l = s * (e - n.minIndex); return a && (l += s / 2), n.left + Math.round(l) } var u = n.height / o,
                            d = u * (e - n.minIndex); return a && (d += u / 2), n.top + Math.round(d) }, getPixelForTick: function(t) { return this.getPixelForValue(this.ticks[t], t + this.minIndex, null) }, getValueForPixel: function(t) { var e = this,
                            i = e.options.offset,
                            n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            a = e.isHorizontal(),
                            o = (a ? e.width : e.height) / n; return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex }, getBasePixel: function() { return this.bottom } });
                t.scaleService.registerScaleType("category", e, { position: "bottom" }) } }, {}], 54: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(45),
                o = t(34);
            e.exports = function(t) { var e = { position: "left", ticks: { callback: o.formatters.linear } },
                    i = t.LinearScaleBase.extend({ determineDataLimits: function() { var t = this,
                                e = t.options,
                                i = t.chart,
                                n = i.data.datasets,
                                o = t.isHorizontal();

                            function r(e) { return o ? e.xAxisID === t.id : e.yAxisID === t.id }
                            t.min = null, t.max = null; var s = e.stacked; if (void 0 === s && a.each(n, function(t, e) { if (!s) { var n = i.getDatasetMeta(e);
                                        i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0) } }), e.stacked || s) { var l = {};
                                a.each(n, function(n, o) { var s = i.getDatasetMeta(o),
                                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                    void 0 === l[u] && (l[u] = { positiveValues: [], negativeValues: [] }); var d = l[u].positiveValues,
                                        c = l[u].negativeValues;
                                    i.isDatasetVisible(o) && r(s) && a.each(n.data, function(i, n) { var a = +t.getRightValue(i);
                                        isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a) }) }), a.each(l, function(e) { var i = e.positiveValues.concat(e.negativeValues),
                                        n = a.min(i),
                                        o = a.max(i);
                                    t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o) }) } else a.each(n, function(e, n) { var o = i.getDatasetMeta(n);
                                i.isDatasetVisible(n) && r(o) && a.each(e.data, function(e, i) { var n = +t.getRightValue(e);
                                    isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n)) }) });
                            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions() }, getTickLimit: function() { var t, e = this.options.ticks; if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else { var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i))) } return t }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) }, getPixelForValue: function(t) { var e = this,
                                i = e.start,
                                n = +e.getRightValue(t),
                                a = e.end - i; return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i) }, getValueForPixel: function(t) { var e = this,
                                i = e.isHorizontal(),
                                n = i ? e.width : e.height,
                                a = (i ? t - e.left : e.bottom - t) / n; return e.start + (e.end - e.start) * a }, getPixelForTick: function(t) { return this.getPixelForValue(this.ticksAsNumbers[t]) } });
                t.scaleService.registerScaleType("linear", i, e) } }, { 25: 25, 34: 34, 45: 45 }], 55: [function(t, e, i) { "use strict"; var n = t(45);
            e.exports = function(t) { var e = n.noop;
                t.LinearScaleBase = t.Scale.extend({ getRightValue: function(e) { return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e) }, handleTickRangeOptions: function() { var t = this,
                            e = t.options.ticks; if (e.beginAtZero) { var i = n.sign(t.min),
                                a = n.sign(t.max);
                            i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0) } var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                            r = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--) }, getTickLimit: e, handleDirectionalChanges: e, buildTicks: function() { var t = this,
                            e = t.options.ticks,
                            i = t.getTickLimit(),
                            a = { maxTicks: i = Math.max(2, i), min: e.min, max: e.max, stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize) },
                            o = t.ticks = function(t, e) { var i, a = []; if (t.stepSize && t.stepSize > 0) i = t.stepSize;
                                else { var o = n.niceNum(e.max - e.min, !1);
                                    i = n.niceNum(o / (t.maxTicks - 1), !0) } var r = Math.floor(e.min / i) * i,
                                    s = Math.ceil(e.max / i) * i;
                                t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max); var l = (s - r) / i;
                                l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l); var u = 1;
                                i < 1 && (u = Math.pow(10, i.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : r); for (var d = 1; d < l; ++d) a.push(Math.round((r + d * i) * u) / u); return a.push(void 0 !== t.max ? t.max : s), a }(a, t);
                        t.handleDirectionalChanges(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max) }, convertTicksToLabels: function() { var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e) } }) } }, { 45: 45 }], 56: [function(t, e, i) { "use strict"; var n = t(45),
                a = t(34);
            e.exports = function(t) { var e = { position: "left", ticks: { callback: a.formatters.logarithmic } },
                    i = t.Scale.extend({ determineDataLimits: function() { var t = this,
                                e = t.options,
                                i = t.chart,
                                a = i.data.datasets,
                                o = t.isHorizontal();

                            function r(e) { return o ? e.xAxisID === t.id : e.yAxisID === t.id }
                            t.min = null, t.max = null, t.minNotZero = null; var s = e.stacked; if (void 0 === s && n.each(a, function(t, e) { if (!s) { var n = i.getDatasetMeta(e);
                                        i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0) } }), e.stacked || s) { var l = {};
                                n.each(a, function(a, o) { var s = i.getDatasetMeta(o),
                                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                    i.isDatasetVisible(o) && r(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function(e, i) { var n = l[u],
                                            a = +t.getRightValue(e);
                                        isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a) })) }), n.each(l, function(e) { if (e.length > 0) { var i = n.min(e),
                                            a = n.max(e);
                                        t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a) } }) } else n.each(a, function(e, a) { var o = i.getDatasetMeta(a);
                                i.isDatasetVisible(a) && r(o) && n.each(e.data, function(e, i) { var n = +t.getRightValue(e);
                                    isNaN(n) || o.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n)) }) });
                            this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var t = this,
                                e = t.options.ticks,
                                i = n.valueOrDefault;
                            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1) }, buildTicks: function() { var t = this,
                                e = t.options.ticks,
                                i = !t.isHorizontal(),
                                a = { min: e.min, max: e.max },
                                o = t.ticks = function(t, e) { var i, a, o = [],
                                        r = n.valueOrDefault,
                                        s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                                        l = Math.floor(n.log10(e.max)),
                                        u = Math.ceil(e.max / Math.pow(10, l));
                                    0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i))); for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; o.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;); var c = r(t.max, s); return o.push(c), o }(a, t);
                            t.max = n.max(o), t.min = n.min(o), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && o.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) }, getPixelForTick: function(t) { return this.getPixelForValue(this.tickValues[t]) }, _getFirstTickValue: function(t) { var e = Math.floor(n.log10(t)); return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e) }, getPixelForValue: function(e) { var i, a, o, r, s, l = this,
                                u = l.options.ticks.reverse,
                                d = n.log10,
                                c = l._getFirstTickValue(l.minNotZero),
                                h = 0; return e = +l.getRightValue(e), u ? (o = l.end, r = l.start, s = -1) : (o = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== o && (0 === o && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = c), 0 !== e && (h += i / (d(r) - d(o)) * (d(e) - d(o))), a += s * h), a }, getValueForPixel: function(e) { var i, a, o, r, s = this,
                                l = s.options.ticks.reverse,
                                u = n.log10,
                                d = s._getFirstTickValue(s.minNotZero); if (l ? (a = s.end, o = s.start) : (a = s.start, o = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== a) { if (0 === a) { var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                    r -= c, i -= c, a = d }
                                r *= u(o) - u(a), r /= i, r = Math.pow(10, u(a) + r) } return r } });
                t.scaleService.registerScaleType("logarithmic", i, e) } }, { 34: 34, 45: 45 }], 57: [function(t, e, i) { "use strict"; var n = t(25),
                a = t(45),
                o = t(34);
            e.exports = function(t) { var e = n.global,
                    i = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: o.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(t) { return t } } };

                function r(t) { var e = t.options; return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0 }

                function s(t) { var i = t.options.pointLabels,
                        n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
                        o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                        r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily); return { size: n, style: o, family: r, font: a.fontString(n, o, r) } }

                function l(t, e, i, n, a) { return t === n || t === a ? { start: e - i / 2, end: e + i / 2 } : t < n || t > a ? { start: e - i - 5, end: e } : { start: e, end: e + i + 5 } }

                function u(t, e, i, n) { if (a.isArray(e))
                        for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, o), o += r;
                    else t.fillText(e, i.x, i.y) }

                function d(t) { return a.isNumber(t) ? t : 0 } var c = t.LinearScaleBase.extend({ setDimensions: function() { var t = this,
                            i = t.options,
                            n = i.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2); var o = a.min([t.height, t.width]),
                            r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
                        t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2 }, determineDataLimits: function() { var t = this,
                            e = t.chart,
                            i = Number.POSITIVE_INFINITY,
                            n = Number.NEGATIVE_INFINITY;
                        a.each(e.data.datasets, function(o, r) { if (e.isDatasetVisible(r)) { var s = e.getDatasetMeta(r);
                                a.each(o.data, function(e, a) { var o = +t.getRightValue(e);
                                    isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n)) }) } }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions() }, getTickLimit: function() { var t = this.options.ticks,
                            i = a.valueOrDefault(t.fontSize, e.defaultFontSize); return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i))) }, convertTicksToLabels: function() { var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e) }, getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) }, fit: function() { var t, e;
                        this.options.pointLabels.display ? function(t) { var e, i, n, o = s(t),
                                u = Math.min(t.height / 2, t.width / 2),
                                d = { r: t.width, l: 0, t: t.height, b: 0 },
                                c = {};
                            t.ctx.font = o.font, t._pointLabelSizes = []; var h, f, g, p = r(t); for (e = 0; e < p; e++) { n = t.getPointPosition(e, u), h = t.ctx, f = o.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? { w: a.longestText(h, h.font, g), h: g.length * f + 1.5 * (g.length - 1) * f } : { w: h.measureText(g).width, h: f }, t._pointLabelSizes[e] = i; var m = t.getIndexAngle(e),
                                    v = a.toDegrees(m) % 360,
                                    b = l(v, n.x, i.w, 0, 180),
                                    x = l(v, n.y, i.h, 90, 270);
                                b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), x.start < d.t && (d.t = x.start, c.t = m), x.end > d.b && (d.b = x.end, c.b = m) }
                            t.setReductions(u, d, c) }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)) }, setReductions: function(t, e, i) { var n = e.l / Math.sin(i.l),
                            a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            o = -e.t / Math.cos(i.t),
                            r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = d(n), a = d(a), o = d(o), r = d(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r) }, setCenterPoint: function(t, e, i, n) { var a = this,
                            o = a.width - e - a.drawingArea,
                            r = t + a.drawingArea,
                            s = i + a.drawingArea,
                            l = a.height - n - a.drawingArea;
                        a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top) }, getIndexAngle: function(t) { return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360 }, getDistanceFromCenterForValue: function(t) { var e = this; if (null === t) return 0; var i = e.drawingArea / (e.max - e.min); return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i }, getPointPosition: function(t, e) { var i = this.getIndexAngle(t) - Math.PI / 2; return { x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter } }, getPointPositionForValue: function(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) }, getBasePosition: function() { var t = this.min,
                            e = this.max; return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0) }, draw: function() { var t = this,
                            i = t.options,
                            n = i.gridLines,
                            o = i.ticks,
                            l = a.valueOrDefault; if (i.display) { var d = t.ctx,
                                c = this.getIndexAngle(0),
                                h = l(o.fontSize, e.defaultFontSize),
                                f = l(o.fontStyle, e.defaultFontStyle),
                                g = l(o.fontFamily, e.defaultFontFamily),
                                p = a.fontString(h, f, g);
                            a.each(t.ticks, function(i, s) { if (s > 0 || o.reverse) { var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]); if (n.display && 0 !== s && function(t, e, i, n) { var o = t.ctx; if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
                                            else { var s = r(t); if (0 === s) return;
                                                o.beginPath(); var l = t.getPointPosition(0, i);
                                                o.moveTo(l.x, l.y); for (var u = 1; u < s; u++) l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
                                                o.closePath(), o.stroke() } }(t, n, u, s), o.display) { var f = l(o.fontColor, e.defaultFontColor); if (d.font = p, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop) { var g = d.measureText(i).width;
                                            d.fillStyle = o.backdropColor, d.fillRect(-g / 2 - o.backdropPaddingX, -u - h / 2 - o.backdropPaddingY, g + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY) }
                                        d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore() } } }), (i.angleLines.display || i.pointLabels.display) && function(t) { var i = t.ctx,
                                    n = t.options,
                                    o = n.angleLines,
                                    l = n.pointLabels;
                                i.lineWidth = o.lineWidth, i.strokeStyle = o.color; var d, c, h, f, g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                    p = s(t);
                                i.textBaseline = "top"; for (var m = r(t) - 1; m >= 0; m--) { if (o.display) { var v = t.getPointPosition(m, g);
                                        i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath() } if (l.display) { var b = t.getPointPosition(m, g + 5),
                                            x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                                        i.font = p.font, i.fillStyle = x; var y = t.getIndexAngle(m),
                                            k = a.toDegrees(y);
                                        i.textAlign = 0 === (f = k) || 180 === f ? "center" : f < 180 ? "left" : "right", d = k, c = t._pointLabelSizes[m], h = b, 90 === d || 270 === d ? h.y -= c.h / 2 : (d > 270 || d < 90) && (h.y -= c.h), u(i, t.pointLabels[m] || "", b, p.size) } } }(t) } } });
                t.scaleService.registerScaleType("radialLinear", c, i) } }, { 25: 25, 34: 34, 45: 45 }], 58: [function(t, e, i) { "use strict"; var n = t(1);
            n = "function" == typeof n ? n : window.moment; var a = t(25),
                o = t(45),
                r = Number.MIN_SAFE_INTEGER || -9007199254740991,
                s = Number.MAX_SAFE_INTEGER || 9007199254740991,
                l = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
                u = Object.keys(l);

            function d(t, e) { return t - e }

            function c(t) { var e, i, n, a = {},
                    o = []; for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n)); return o }

            function h(t, e, i, n) { var a = function(t, e, i) { for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) { if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return { lo: null, hi: o }; if (o[e] < i) r = n + 1;
                            else { if (!(a[e] > i)) return { lo: a, hi: o };
                                s = n - 1 } } return { lo: o, hi: null } }(t, e, i),
                    o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                    r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                    s = r[e] - o[e],
                    l = s ? (i - o[e]) / s : 0,
                    u = (r[n] - o[n]) * l; return o[n] + u }

            function f(t, e) { var i = e.parser,
                    a = e.parser || e.format; return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t) }

            function g(t, e) { if (o.isNullOrUndef(t)) return null; var i = e.options.time,
                    n = f(e.getRightValue(t), i); return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null }

            function p(t) { for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e)
                    if (l[u[e]].common) return u[e] }

            function m(t, e, i, a) { var r, d = a.time,
                    c = d.unit || function(t, e, i, n) { var a, o, r, d = u.length; for (a = u.indexOf(t); a < d - 1; ++a)
                            if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
                        return u[d - 1] }(d.minUnit, t, e, i),
                    h = p(c),
                    f = o.valueOrDefault(d.stepSize, d.unitStepSize),
                    g = "week" === c && d.isoWeekday,
                    m = a.ticks.major.enabled,
                    v = l[c],
                    b = n(t),
                    x = n(e),
                    y = []; for (f || (f = function(t, e, i, n) { var a, o, r, s = e - t,
                            u = l[i],
                            d = u.size,
                            c = u.steps; if (!c) return Math.ceil(s / (n * d)); for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a); return r }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c)); r < x; r.add(f, c)) y.push(+r); return y.push(+r), y }
            e.exports = function(t) { var e = t.Scale.extend({ initialize: function() { if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this) }, update: function() { var e = this.options; return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments) }, getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e) }, determineDataLimits: function() { var t, e, i, a, l, u, h = this,
                            f = h.chart,
                            p = h.options.time,
                            m = p.unit || "day",
                            v = s,
                            b = r,
                            x = [],
                            y = [],
                            k = []; for (t = 0, i = f.data.labels.length; t < i; ++t) k.push(g(f.data.labels[t], h)); for (t = 0, i = (f.data.datasets || []).length; t < i; ++t)
                            if (f.isDatasetVisible(t))
                                if (l = f.data.datasets[t].data, o.isObject(l[0]))
                                    for (y[t] = [], e = 0, a = l.length; e < a; ++e) u = g(l[e], h), x.push(u), y[t][e] = u;
                                else x.push.apply(x, k), y[t] = k.slice(0);
                        else y[t] = [];
                        k.length && (k = c(k).sort(d), v = Math.min(v, k[0]), b = Math.max(b, k[k.length - 1])), x.length && (x = c(x).sort(d), v = Math.min(v, x[0]), b = Math.max(b, x[x.length - 1])), v = g(p.min, h) || v, b = g(p.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === r ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = { data: x, datasets: y, labels: k } }, buildTicks: function() { var t, e, i, a, o, r, s, d, c, v, b, x, y = this,
                            k = y.min,
                            M = y.max,
                            w = y.options,
                            S = w.time,
                            C = [],
                            _ = []; switch (w.ticks.source) {
                            case "data":
                                C = y._timestamps.data; break;
                            case "labels":
                                C = y._timestamps.labels; break;
                            case "auto":
                            default:
                                C = m(k, M, y.getLabelCapacity(k), w) } for ("ticks" === w.bounds && C.length && (k = C[0], M = C[C.length - 1]), k = g(S.min, y) || k, M = g(S.max, y) || M, t = 0, e = C.length; t < e; ++t)(i = C[t]) >= k && i <= M && _.push(i); return y.min = k, y.max = M, y._unit = S.unit || function(t, e, i, a) { var o, r, s = n.duration(n(a).diff(n(i))); for (o = u.length - 1; o >= u.indexOf(e); o--)
                                    if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
                                return u[e ? u.indexOf(e) : 0] }(_, S.minUnit, y.min, y.max), y._majorUnit = p(y._unit), y._table = function(t, e, i, n) { if ("linear" === n || !t.length) return [{ time: e, pos: 0 }, { time: i, pos: 1 }]; var a, o, r, s, l, u = [],
                                    d = [e]; for (a = 0, o = t.length; a < o; ++a)(s = t[a]) > e && s < i && d.push(s); for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({ time: s, pos: a / (o - 1) }); return u }(y._timestamps.data, k, M, w.distribution), y._offsets = (a = y._table, o = _, r = k, s = M, b = 0, x = 0, (d = w).offset && o.length && (d.time.min || (c = o.length > 1 ? o[1] : s, v = o[0], b = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2), d.time.max || (c = o[o.length - 1], v = o.length > 1 ? o[o.length - 2] : r, x = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2)), { left: b, right: x }), y._labelFormat = function(t, e) { var i, n, a, o = t.length; for (i = 0; i < o; i++) { if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                    0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0) } return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY" }(y._timestamps.data, S),
                            function(t, e) { var i, a, o, r, s = []; for (i = 0, a = t.length; i < a; ++i) o = t[i], r = !!e && o === +n(o).startOf(e), s.push({ value: o, major: r }); return s }(_, y._majorUnit) }, getLabelForIndex: function(t, e) { var i = this.chart.data,
                            n = this.options.time,
                            a = i.labels && t < i.labels.length ? i.labels[t] : "",
                            r = i.datasets[e].data[t]; return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat) }, tickFormatFunction: function(t, e, i, n) { var a = this.options,
                            r = t.valueOf(),
                            s = a.time.displayFormats,
                            l = s[this._unit],
                            u = this._majorUnit,
                            d = s[u],
                            c = t.clone().startOf(u).valueOf(),
                            h = a.ticks.major,
                            f = h.enabled && u && d && r === c,
                            g = t.format(n || (f ? d : l)),
                            p = f ? h : a.ticks.minor,
                            m = o.valueOrDefault(p.callback, p.userCallback); return m ? m(g, e, i) : g }, convertTicksToLabels: function(t) { var e, i, a = []; for (e = 0, i = t.length; e < i; ++e) a.push(this.tickFormatFunction(n(t[e].value), e, t)); return a }, getPixelForOffset: function(t) { var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = h(e._table, "time", t, "pos"); return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right) }, getPixelForValue: function(t, e, i) { var n = null; if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n) }, getPixelForTick: function(t) { var e = this.getTicks(); return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null }, getValueForPixel: function(t) { var e = this,
                            i = e._horizontal ? e.width : e.height,
                            a = e._horizontal ? e.left : e.top,
                            o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            r = h(e._table, "pos", o, "time"); return n(r) }, getLabelWidth: function(t) { var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            n = o.toRadians(e.maxRotation),
                            r = Math.cos(n),
                            s = Math.sin(n); return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s }, getLabelCapacity: function(t) { var e = this,
                            i = e.options.time.displayFormats.millisecond,
                            a = e.tickFormatFunction(n(t), 0, [], i),
                            o = e.getLabelWidth(a),
                            r = e.isHorizontal() ? e.width : e.height,
                            s = Math.floor(r / o); return s > 0 ? s : 1 } });
                t.scaleService.registerScaleType("time", e, { position: "bottom", distribution: "linear", bounds: "data", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } }) } }, { 1: 1, 25: 25, 45: 45 }] }, {}, [7])(7) });
! function($) { var apiParams = { set: { colors: 1, values: 1, backgroundColor: 1, scaleColors: 1, normalizeFunction: 1, focus: 1 }, get: { selectedRegions: 1, selectedMarkers: 1, mapObject: 1, regionName: 1 } };
    $.fn.vectorMap = function(options) { var map, methodName, map = this.children(".jvectormap-container").data("mapObject"); if ("addMap" === options) jvm.Map.maps[arguments[1]] = arguments[2];
        else { if (("set" === options || "get" === options) && apiParams[options][arguments[1]]) return methodName = arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1), map[options + methodName].apply(map, Array.prototype.slice.call(arguments, 2));
            options = options || {}, options.container = this, map = new jvm.Map(options) } return this } }(jQuery),
function(factory) { "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery) }(function($) {
    function handler(event) { var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0; if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 0 !== deltaY || 0 !== deltaX) { if (1 === orgEvent.deltaMode) { var lineHeight = $.data(this, "mousewheel-line-height");
                delta *= lineHeight, deltaY *= lineHeight, deltaX *= lineHeight } else if (2 === orgEvent.deltaMode) { var pageHeight = $.data(this, "mousewheel-page-height");
                delta *= pageHeight, deltaY *= pageHeight, deltaX *= pageHeight } return absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), ($.event.dispatch || $.event.handle).apply(this, args) } }

    function nullLowestDelta() { lowestDelta = null }

    function shouldAdjustOldDeltas(orgEvent, absDelta) { return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0 } var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        slice = Array.prototype.slice; if ($.event.fixHooks)
        for (var i = toFix.length; i;) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks; var special = $.event.special.mousewheel = { version: "3.1.9", setup: function() { if (this.addEventListener)
                for (var i = toBind.length; i;) this.addEventListener(toBind[--i], handler, !1);
            else this.onmousewheel = handler;
            $.data(this, "mousewheel-line-height", special.getLineHeight(this)), $.data(this, "mousewheel-page-height", special.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                for (var i = toBind.length; i;) this.removeEventListener(toBind[--i], handler, !1);
            else this.onmousewheel = null }, getLineHeight: function(elem) { return parseInt($(elem)["offsetParent" in $.fn ? "offsetParent" : "parent"]().css("fontSize"), 10) }, getPageHeight: function(elem) { return $(elem).height() }, settings: { adjustOldDeltas: !0 } };
    $.fn.extend({ mousewheel: function(fn) { return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel") }, unmousewheel: function(fn) { return this.unbind("mousewheel", fn) } }) });
var jvm = { inherits: function(child, parent) {
        function temp() {}
        temp.prototype = parent.prototype, child.prototype = new temp, child.prototype.constructor = child, child.parentClass = parent }, mixin: function(target, source) { var prop; for (prop in source.prototype) source.prototype.hasOwnProperty(prop) && (target.prototype[prop] = source.prototype[prop]) }, min: function(values) { var i, min = Number.MAX_VALUE; if (values instanceof Array)
            for (i = 0; i < values.length; i++) values[i] < min && (min = values[i]);
        else
            for (i in values) values[i] < min && (min = values[i]); return min }, max: function(values) { var i, max = Number.MIN_VALUE; if (values instanceof Array)
            for (i = 0; i < values.length; i++) values[i] > max && (max = values[i]);
        else
            for (i in values) values[i] > max && (max = values[i]); return max }, keys: function(object) { var key, keys = []; for (key in object) keys.push(key); return keys }, values: function(object) { var key, i, values = []; for (i = 0; i < arguments.length; i++) { object = arguments[i]; for (key in object) values.push(object[key]) } return values }, whenImageLoaded: function(url) { var deferred = new jvm.$.Deferred,
            img = jvm.$("<img/>"); return img.error(function() { deferred.reject() }).load(function() { deferred.resolve(img) }), img.attr("src", url), deferred }, isImageUrl: function(s) { return /\.\w{3,4}$/.test(s) } };
jvm.$ = jQuery, Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) { var k; if (null == this) throw new TypeError('"this" is null or not defined'); var O = Object(this),
        len = O.length >>> 0; if (0 === len) return -1; var n = +fromIndex || 0; if (Math.abs(n) === 1 / 0 && (n = 0), n >= len) return -1; for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); len > k;) { if (k in O && O[k] === searchElement) return k;
        k++ } return -1 }), jvm.AbstractElement = function(name, config) { this.node = this.createElement(name), this.name = name, this.properties = {}, config && this.set(config) }, jvm.AbstractElement.prototype.set = function(property, value) { var key; if ("object" == typeof property)
        for (key in property) this.properties[key] = property[key], this.applyAttr(key, property[key]);
    else this.properties[property] = value, this.applyAttr(property, value) }, jvm.AbstractElement.prototype.get = function(property) { return this.properties[property] }, jvm.AbstractElement.prototype.applyAttr = function(property, value) { this.node.setAttribute(property, value) }, jvm.AbstractElement.prototype.remove = function() { jvm.$(this.node).remove() }, jvm.AbstractCanvasElement = function(container, width, height) { this.container = container, this.setSize(width, height), this.rootElement = new jvm[this.classPrefix + "GroupElement"], this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node) }, jvm.AbstractCanvasElement.prototype.add = function(element, group) { group = group || this.rootElement, group.add(element), element.canvas = this }, jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group) { var el = new jvm[this.classPrefix + "PathElement"](config, style); return this.add(el, group), el }, jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group) { var el = new jvm[this.classPrefix + "CircleElement"](config, style); return this.add(el, group), el }, jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group) { var el = new jvm[this.classPrefix + "ImageElement"](config, style); return this.add(el, group), el }, jvm.AbstractCanvasElement.prototype.addText = function(config, style, group) { var el = new jvm[this.classPrefix + "TextElement"](config, style); return this.add(el, group), el }, jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup) { var el = new jvm[this.classPrefix + "GroupElement"]; return parentGroup ? parentGroup.node.appendChild(el.node) : this.node.appendChild(el.node), el.canvas = this, el }, jvm.AbstractShapeElement = function(name, config, style) { this.style = style || {}, this.style.current = this.style.current || {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle() }, jvm.AbstractShapeElement.prototype.setStyle = function(property, value) { var styles = {}; "object" == typeof property ? styles = property : styles[property] = value, jvm.$.extend(this.style.current, styles), this.updateStyle() }, jvm.AbstractShapeElement.prototype.updateStyle = function() { var attrs = {};
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial), jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current), this.isHovered && jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover), this.isSelected && (jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected), this.isHovered && jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover)), this.set(attrs) }, jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles) { var key;
    newStyles = newStyles || {}; for (key in newStyles) null === newStyles[key] ? delete styles[key] : styles[key] = newStyles[key] }, jvm.SVGElement = function() { jvm.SVGElement.parentClass.apply(this, arguments) }, jvm.inherits(jvm.SVGElement, jvm.AbstractElement), jvm.SVGElement.svgns = "http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement = function(tagName) { return document.createElementNS(jvm.SVGElement.svgns, tagName) }, jvm.SVGElement.prototype.addClass = function(className) { this.node.setAttribute("class", className) }, jvm.SVGElement.prototype.getElementCtr = function(ctr) { return jvm["SVG" + ctr] }, jvm.SVGElement.prototype.getBBox = function() { return this.node.getBBox() }, jvm.SVGGroupElement = function() { jvm.SVGGroupElement.parentClass.call(this, "g") }, jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement), jvm.SVGGroupElement.prototype.add = function(element) { this.node.appendChild(element.node) }, jvm.SVGCanvasElement = function() { this.classPrefix = "SVG", jvm.SVGCanvasElement.parentClass.call(this, "svg"), this.defsElement = new jvm.SVGElement("defs"), this.node.appendChild(this.defsElement.node), jvm.AbstractCanvasElement.apply(this, arguments) }, jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize = function(width, height) { this.width = width, this.height = height, this.node.setAttribute("width", width), this.node.setAttribute("height", height) }, jvm.SVGCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) { this.scale = scale, this.transX = transX, this.transY = transY, this.rootElement.node.setAttribute("transform", "scale(" + scale + ") translate(" + transX + ", " + transY + ")") }, jvm.SVGShapeElement = function(name, config) { jvm.SVGShapeElement.parentClass.call(this, name, config), jvm.AbstractShapeElement.apply(this, arguments) }, jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement), jvm.SVGShapeElement.prototype.applyAttr = function(attr, value) { var patternEl, imageEl, that = this; "fill" === attr && jvm.isImageUrl(value) ? jvm.SVGShapeElement.images[value] ? this.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[value] + ")") : jvm.whenImageLoaded(value).then(function(img) { imageEl = new jvm.SVGElement("image"), imageEl.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", value), imageEl.applyAttr("x", "0"), imageEl.applyAttr("y", "0"), imageEl.applyAttr("width", img[0].width), imageEl.applyAttr("height", img[0].height), patternEl = new jvm.SVGElement("pattern"), patternEl.applyAttr("id", "image" + jvm.SVGShapeElement.imageCounter), patternEl.applyAttr("x", 0), patternEl.applyAttr("y", 0), patternEl.applyAttr("width", img[0].width / 2), patternEl.applyAttr("height", img[0].height / 2), patternEl.applyAttr("viewBox", "0 0 " + img[0].width + " " + img[0].height), patternEl.applyAttr("patternUnits", "userSpaceOnUse"), patternEl.node.appendChild(imageEl.node), that.canvas.defsElement.node.appendChild(patternEl.node), jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++, that.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[value] + ")") }) : jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments) }, jvm.SVGShapeElement.imageCounter = 1, jvm.SVGShapeElement.images = {}, jvm.SVGPathElement = function(config, style) { jvm.SVGPathElement.parentClass.call(this, "path", config, style), this.node.setAttribute("fill-rule", "evenodd") }, jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement), jvm.SVGCircleElement = function(config, style) { jvm.SVGCircleElement.parentClass.call(this, "circle", config, style) }, jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement), jvm.SVGImageElement = function(config, style) { jvm.SVGImageElement.parentClass.call(this, "image", config, style) }, jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement), jvm.SVGImageElement.prototype.applyAttr = function(attr, value) { var that = this; "image" == attr ? jvm.whenImageLoaded(value).then(function(img) { that.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", value), that.width = img[0].width, that.height = img[0].height, that.applyAttr("width", that.width), that.applyAttr("height", that.height), that.applyAttr("x", that.cx - that.width / 2), that.applyAttr("y", that.cy - that.height / 2), jvm.$(that.node).trigger("imageloaded", [img]) }) : "cx" == attr ? (this.cx = value, this.width && this.applyAttr("x", value - this.width / 2)) : "cy" == attr ? (this.cy = value, this.height && this.applyAttr("y", value - this.height / 2)) : jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments) }, jvm.SVGTextElement = function(config, style) { jvm.SVGTextElement.parentClass.call(this, "text", config, style) }, jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement), jvm.SVGTextElement.prototype.applyAttr = function(attr, value) { "text" === attr ? this.node.textContent = value : jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments) }, jvm.VMLElement = function() { jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this, arguments) }, jvm.inherits(jvm.VMLElement, jvm.AbstractElement), jvm.VMLElement.VMLInitialized = !1, jvm.VMLElement.initializeVML = function() { try { document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement = function(tagName) { return document.createElement("<rvml:" + tagName + ' class="rvml">') } } catch (e) { jvm.VMLElement.prototype.createElement = function(tagName) { return document.createElement("<" + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } }
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized = !0 }, jvm.VMLElement.prototype.getElementCtr = function(ctr) { return jvm["VML" + ctr] }, jvm.VMLElement.prototype.addClass = function(className) { jvm.$(this.node).addClass(className) }, jvm.VMLElement.prototype.applyAttr = function(attr, value) { this.node[attr] = value }, jvm.VMLElement.prototype.getBBox = function() { var node = jvm.$(this.node); return { x: node.position().left / this.canvas.scale, y: node.position().top / this.canvas.scale, width: node.width() / this.canvas.scale, height: node.height() / this.canvas.scale } }, jvm.VMLGroupElement = function() { jvm.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0" }, jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement), jvm.VMLGroupElement.prototype.add = function(element) { this.node.appendChild(element.node) }, jvm.VMLCanvasElement = function() { this.classPrefix = "VML", jvm.VMLCanvasElement.parentClass.call(this, "group"), jvm.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute" }, jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize = function(width, height) { var paths, groups, i, l; if (this.width = width, this.height = height, this.node.style.width = width + "px", this.node.style.height = height + "px", this.node.coordsize = width + " " + height, this.node.coordorigin = "0 0", this.rootElement) { for (paths = this.rootElement.node.getElementsByTagName("shape"), i = 0, l = paths.length; l > i; i++) paths[i].coordsize = width + " " + height, paths[i].style.width = width + "px", paths[i].style.height = height + "px"; for (groups = this.node.getElementsByTagName("group"), i = 0, l = groups.length; l > i; i++) groups[i].coordsize = width + " " + height, groups[i].style.width = width + "px", groups[i].style.height = height + "px" } }, jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) { this.scale = scale, this.transX = transX, this.transY = transY, this.rootElement.node.coordorigin = this.width - transX - this.width / 100 + "," + (this.height - transY - this.height / 100), this.rootElement.node.coordsize = this.width / scale + "," + this.height / scale }, jvm.VMLShapeElement = function(name, config) { jvm.VMLShapeElement.parentClass.call(this, name, config), this.fillElement = new jvm.VMLElement("fill"), this.strokeElement = new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, jvm.AbstractShapeElement.apply(this, arguments) }, jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr = function(attr, value) { switch (attr) {
        case "fill":
            this.node.fillcolor = value; break;
        case "fill-opacity":
            this.fillElement.node.opacity = Math.round(100 * value) + "%"; break;
        case "stroke":
            this.node.stroked = "none" === value ? !1 : !0, this.node.strokecolor = value; break;
        case "stroke-opacity":
            this.strokeElement.node.opacity = Math.round(100 * value) + "%"; break;
        case "stroke-width":
            this.node.stroked = 0 === parseInt(value, 10) ? !1 : !0, this.node.strokeweight = value; break;
        case "d":
            this.node.path = jvm.VMLPathElement.pathSvgToVml(value); break;
        default:
            jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments) } }, jvm.VMLPathElement = function(config, style) { var scale = new jvm.VMLElement("skew");
    jvm.VMLPathElement.parentClass.call(this, "shape", config, style), this.node.coordorigin = "0 0", scale.node.on = !0, scale.node.matrix = "0.01,0,0,0.01,0,0", scale.node.offset = "0,0", this.node.appendChild(scale.node) }, jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr = function(attr, value) { "d" === attr ? this.node.path = jvm.VMLPathElement.pathSvgToVml(value) : jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value) }, jvm.VMLPathElement.pathSvgToVml = function(path) { var ctrlx, ctrly, cx = 0,
        cy = 0; return path = path.replace(/(-?\d+)e(-?\d+)/g, "0"), path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(segment, letter, coords) { coords = coords.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","), coords[0] || coords.shift(); for (var i = 0, l = coords.length; l > i; i++) coords[i] = Math.round(100 * coords[i]); switch (letter) {
            case "m":
                return cx += coords[0], cy += coords[1], "t" + coords.join(",");
            case "M":
                return cx = coords[0], cy = coords[1], "m" + coords.join(",");
            case "l":
                return cx += coords[0], cy += coords[1], "r" + coords.join(",");
            case "L":
                return cx = coords[0], cy = coords[1], "l" + coords.join(",");
            case "h":
                return cx += coords[0], "r" + coords[0] + ",0";
            case "H":
                return cx = coords[0], "l" + cx + "," + cy;
            case "v":
                return cy += coords[0], "r0," + coords[0];
            case "V":
                return cy = coords[0], "l" + cx + "," + cy;
            case "c":
                return ctrlx = cx + coords[coords.length - 4], ctrly = cy + coords[coords.length - 3], cx += coords[coords.length - 2], cy += coords[coords.length - 1], "v" + coords.join(",");
            case "C":
                return ctrlx = coords[coords.length - 4], ctrly = coords[coords.length - 3], cx = coords[coords.length - 2], cy = coords[coords.length - 1], "c" + coords.join(",");
            case "s":
                return coords.unshift(cy - ctrly), coords.unshift(cx - ctrlx), ctrlx = cx + coords[coords.length - 4], ctrly = cy + coords[coords.length - 3], cx += coords[coords.length - 2], cy += coords[coords.length - 1], "v" + coords.join(",");
            case "S":
                return coords.unshift(cy + cy - ctrly), coords.unshift(cx + cx - ctrlx), ctrlx = coords[coords.length - 4], ctrly = coords[coords.length - 3], cx = coords[coords.length - 2], cy = coords[coords.length - 1], "c" + coords.join(",") } return "" }).replace(/z/g, "e") }, jvm.VMLCircleElement = function(config, style) { jvm.VMLCircleElement.parentClass.call(this, "oval", config, style) }, jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr = function(attr, value) { switch (attr) {
        case "r":
            this.node.style.width = 2 * value + "px", this.node.style.height = 2 * value + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0); break;
        case "cx":
            if (!value) return;
            this.node.style.left = value - (this.get("r") || 0) + "px"; break;
        case "cy":
            if (!value) return;
            this.node.style.top = value - (this.get("r") || 0) + "px"; break;
        default:
            jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value) } }, jvm.VectorCanvas = function(container, width, height) { return this.mode = window.SVGAngle ? "svg" : "vml", this.impl = "svg" == this.mode ? new jvm.SVGCanvasElement(container, width, height) : new jvm.VMLCanvasElement(container, width, height), this.impl.mode = this.mode, this.impl }, jvm.SimpleScale = function(scale) { this.scale = scale }, jvm.SimpleScale.prototype.getValue = function(value) { return value }, jvm.OrdinalScale = function(scale) { this.scale = scale }, jvm.OrdinalScale.prototype.getValue = function(value) { return this.scale[value] }, jvm.OrdinalScale.prototype.getTicks = function() { var key, ticks = []; for (key in this.scale) ticks.push({ label: key, value: this.scale[key] }); return ticks }, jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) { this.scale = [], normalizeFunction = normalizeFunction || "linear", scale && this.setScale(scale), normalizeFunction && this.setNormalizeFunction(normalizeFunction), "undefined" != typeof minValue && this.setMin(minValue), "undefined" != typeof maxValue && this.setMax(maxValue) }, jvm.NumericScale.prototype = { setMin: function(min) { this.clearMinValue = min, this.minValue = "function" == typeof this.normalize ? this.normalize(min) : min }, setMax: function(max) { this.clearMaxValue = max, this.maxValue = "function" == typeof this.normalize ? this.normalize(max) : max }, setScale: function(scale) { var i; for (this.scale = [], i = 0; i < scale.length; i++) this.scale[i] = [scale[i]] }, setNormalizeFunction: function(f) { "polynomial" === f ? this.normalize = function(value) { return Math.pow(value, .2) } : "linear" === f ? delete this.normalize : this.normalize = f, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue) }, getValue: function(value) { var l, c, lengthes = [],
            fullLength = 0,
            i = 0; for ("function" == typeof this.normalize && (value = this.normalize(value)), i = 0; i < this.scale.length - 1; i++) l = this.vectorLength(this.vectorSubtract(this.scale[i + 1], this.scale[i])), lengthes.push(l), fullLength += l; for (c = (this.maxValue - this.minValue) / fullLength, i = 0; i < lengthes.length; i++) lengthes[i] *= c; for (i = 0, value -= this.minValue; value - lengthes[i] >= 0;) value -= lengthes[i], i++; return value = this.vectorToNum(i == this.scale.length - 1 ? this.scale[i] : this.vectorAdd(this.scale[i], this.vectorMult(this.vectorSubtract(this.scale[i + 1], this.scale[i]), value / lengthes[i]))) }, vectorToNum: function(vector) { var i, num = 0; for (i = 0; i < vector.length; i++) num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1); return num }, vectorSubtract: function(vector1, vector2) { var i, vector = []; for (i = 0; i < vector1.length; i++) vector[i] = vector1[i] - vector2[i]; return vector }, vectorAdd: function(vector1, vector2) { var i, vector = []; for (i = 0; i < vector1.length; i++) vector[i] = vector1[i] + vector2[i]; return vector }, vectorMult: function(vector, num) { var i, result = []; for (i = 0; i < vector.length; i++) result[i] = vector[i] * num; return result }, vectorLength: function(vector) { var i, result = 0; for (i = 0; i < vector.length; i++) result += vector[i] * vector[i]; return Math.sqrt(result) }, getTicks: function() { var tick, v, m = 5,
            extent = [this.clearMinValue, this.clearMaxValue],
            span = extent[1] - extent[0],
            step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
            err = m / span * step,
            ticks = []; for (.15 >= err ? step *= 10 : .35 >= err ? step *= 5 : .75 >= err && (step *= 2), extent[0] = Math.floor(extent[0] / step) * step, extent[1] = Math.ceil(extent[1] / step) * step, tick = extent[0]; tick <= extent[1];) v = tick == extent[0] ? this.clearMinValue : tick == extent[1] ? this.clearMaxValue : tick, ticks.push({ label: tick, value: this.getValue(v) }), tick += step; return ticks } }, jvm.ColorScale = function() { jvm.ColorScale.parentClass.apply(this, arguments) }, jvm.inherits(jvm.ColorScale, jvm.NumericScale), jvm.ColorScale.prototype.setScale = function(scale) { var i; for (i = 0; i < scale.length; i++) this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]) }, jvm.ColorScale.prototype.getValue = function(value) { return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value)) }, jvm.ColorScale.arrayToRgb = function(ar) { var d, i, rgb = "#"; for (i = 0; i < ar.length; i++) d = ar[i].toString(16), rgb += 1 == d.length ? "0" + d : d; return rgb }, jvm.ColorScale.numToRgb = function(num) { for (num = num.toString(16); num.length < 6;) num = "0" + num; return "#" + num }, jvm.ColorScale.rgbToArray = function(rgb) { return rgb = rgb.substr(1), [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)] }, jvm.Legend = function(params) { this.params = params || {}, this.map = this.params.map, this.series = this.params.series, this.body = jvm.$("<div/>"), this.body.addClass("jvectormap-legend"), this.params.cssClass && this.body.addClass(this.params.cssClass), params.vertical ? this.map.legendCntVertical.append(this.body) : this.map.legendCntHorizontal.append(this.body), this.render() }, jvm.Legend.prototype.render = function() { var i, tick, sample, label, ticks = this.series.scale.getTicks(),
        inner = jvm.$("<div/>").addClass("jvectormap-legend-inner"); for (this.body.html(""), this.params.title && this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)), this.body.append(inner), i = 0; i < ticks.length; i++) { switch (tick = jvm.$("<div/>").addClass("jvectormap-legend-tick"), sample = jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"), this.series.params.attribute) {
            case "fill":
                jvm.isImageUrl(ticks[i].value) ? sample.css("background", "url(" + ticks[i].value + ")") : sample.css("background", ticks[i].value); break;
            case "stroke":
                sample.css("background", ticks[i].value); break;
            case "image":
                sample.css("background", "url(" + ticks[i].value + ") no-repeat center center"); break;
            case "r":
                jvm.$("<div/>").css({ "border-radius": ticks[i].value, border: this.map.params.markerStyle.initial["stroke-width"] + "px " + this.map.params.markerStyle.initial.stroke + " solid", width: 2 * ticks[i].value + "px", height: 2 * ticks[i].value + "px", background: this.map.params.markerStyle.initial.fill }).appendTo(sample) }
        tick.append(sample), label = ticks[i].label, this.params.labelRender && (label = this.params.labelRender(label)), tick.append(jvm.$("<div>" + label + " </div>").addClass("jvectormap-legend-tick-text")), inner.append(tick) }
    inner.append(jvm.$("<div/>").css("clear", "both")) }, jvm.DataSeries = function(params, elements, map) { var scaleConstructor;
    params = params || {}, params.attribute = params.attribute || "fill", this.elements = elements, this.params = params, this.map = map, params.attributes && this.setAttributes(params.attributes), jvm.$.isArray(params.scale) ? (scaleConstructor = "fill" === params.attribute || "stroke" === params.attribute ? jvm.ColorScale : jvm.NumericScale, this.scale = new scaleConstructor(params.scale, params.normalizeFunction, params.min, params.max)) : this.scale = params.scale ? new jvm.OrdinalScale(params.scale) : new jvm.SimpleScale(params.scale), this.values = params.values || {}, this.setValues(this.values), this.params.legend && (this.legend = new jvm.Legend($.extend({ map: this.map, series: this }, this.params.legend))) }, jvm.DataSeries.prototype = { setAttributes: function(key, attr) { var code, attrs = key; if ("string" == typeof key) this.elements[key] && this.elements[key].setStyle(this.params.attribute, attr);
        else
            for (code in attrs) this.elements[code] && this.elements[code].element.setStyle(this.params.attribute, attrs[code]) }, setValues: function(values) { var val, cc, max = -Number.MAX_VALUE,
            min = Number.MAX_VALUE,
            attrs = {}; if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale)
            for (cc in values) attrs[cc] = values[cc] ? this.scale.getValue(values[cc]) : this.elements[cc].element.style.initial[this.params.attribute];
        else { if ("undefined" == typeof this.params.min || "undefined" == typeof this.params.max)
                for (cc in values) val = parseFloat(values[cc]), val > max && (max = val), min > val && (min = val); "undefined" == typeof this.params.min ? (this.scale.setMin(min), this.params.min = min) : this.scale.setMin(this.params.min), "undefined" == typeof this.params.max ? (this.scale.setMax(max), this.params.max = max) : this.scale.setMax(this.params.max); for (cc in values) "indexOf" != cc && (val = parseFloat(values[cc]), attrs[cc] = isNaN(val) ? this.elements[cc].element.style.initial[this.params.attribute] : this.scale.getValue(val)) }
        this.setAttributes(attrs), jvm.$.extend(this.values, values) }, clear: function() { var key, attrs = {}; for (key in this.values) this.elements[key] && (attrs[key] = this.elements[key].element.shape.style.initial[this.params.attribute]);
        this.setAttributes(attrs), this.values = {} }, setScale: function(scale) { this.scale.setScale(scale), this.values && this.setValues(this.values) }, setNormalizeFunction: function(f) { this.scale.setNormalizeFunction(f), this.values && this.setValues(this.values) } }, jvm.Proj = { degRad: 180 / Math.PI, radDeg: Math.PI / 180, radius: 6381372, sgn: function(n) { return n > 0 ? 1 : 0 > n ? -1 : n }, mill: function(lat, lng, c) { return { x: this.radius * (lng - c) * this.radDeg, y: -this.radius * Math.log(Math.tan((45 + .4 * lat) * this.radDeg)) / .8 } }, mill_inv: function(x, y, c) { return { lat: (2.5 * Math.atan(Math.exp(.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad, lng: (c * this.radDeg + x / this.radius) * this.degRad } }, merc: function(lat, lng, c) { return { x: this.radius * (lng - c) * this.radDeg, y: -this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)) } }, merc_inv: function(x, y, c) { return { lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad, lng: (c * this.radDeg + x / this.radius) * this.degRad } }, aea: function(lat, lng, c) { var fi0 = 0,
            lambda0 = c * this.radDeg,
            fi1 = 29.5 * this.radDeg,
            fi2 = 45.5 * this.radDeg,
            fi = lat * this.radDeg,
            lambda = lng * this.radDeg,
            n = (Math.sin(fi1) + Math.sin(fi2)) / 2,
            C = Math.cos(fi1) * Math.cos(fi1) + 2 * n * Math.sin(fi1),
            theta = n * (lambda - lambda0),
            ro = Math.sqrt(C - 2 * n * Math.sin(fi)) / n,
            ro0 = Math.sqrt(C - 2 * n * Math.sin(fi0)) / n; return { x: ro * Math.sin(theta) * this.radius, y: -(ro0 - ro * Math.cos(theta)) * this.radius } }, aea_inv: function(xCoord, yCoord, c) { var x = xCoord / this.radius,
            y = yCoord / this.radius,
            fi0 = 0,
            lambda0 = c * this.radDeg,
            fi1 = 29.5 * this.radDeg,
            fi2 = 45.5 * this.radDeg,
            n = (Math.sin(fi1) + Math.sin(fi2)) / 2,
            C = Math.cos(fi1) * Math.cos(fi1) + 2 * n * Math.sin(fi1),
            ro0 = Math.sqrt(C - 2 * n * Math.sin(fi0)) / n,
            ro = Math.sqrt(x * x + (ro0 - y) * (ro0 - y)),
            theta = Math.atan(x / (ro0 - y)); return { lat: Math.asin((C - ro * ro * n * n) / (2 * n)) * this.degRad, lng: (lambda0 + theta / n) * this.degRad } }, lcc: function(lat, lng, c) { var fi0 = 0,
            lambda0 = c * this.radDeg,
            lambda = lng * this.radDeg,
            fi1 = 33 * this.radDeg,
            fi2 = 45 * this.radDeg,
            fi = lat * this.radDeg,
            n = Math.log(Math.cos(fi1) * (1 / Math.cos(fi2))) / Math.log(Math.tan(Math.PI / 4 + fi2 / 2) * (1 / Math.tan(Math.PI / 4 + fi1 / 2))),
            F = Math.cos(fi1) * Math.pow(Math.tan(Math.PI / 4 + fi1 / 2), n) / n,
            ro = F * Math.pow(1 / Math.tan(Math.PI / 4 + fi / 2), n),
            ro0 = F * Math.pow(1 / Math.tan(Math.PI / 4 + fi0 / 2), n); return { x: ro * Math.sin(n * (lambda - lambda0)) * this.radius, y: -(ro0 - ro * Math.cos(n * (lambda - lambda0))) * this.radius } }, lcc_inv: function(xCoord, yCoord, c) { var x = xCoord / this.radius,
            y = yCoord / this.radius,
            fi0 = 0,
            lambda0 = c * this.radDeg,
            fi1 = 33 * this.radDeg,
            fi2 = 45 * this.radDeg,
            n = Math.log(Math.cos(fi1) * (1 / Math.cos(fi2))) / Math.log(Math.tan(Math.PI / 4 + fi2 / 2) * (1 / Math.tan(Math.PI / 4 + fi1 / 2))),
            F = Math.cos(fi1) * Math.pow(Math.tan(Math.PI / 4 + fi1 / 2), n) / n,
            ro0 = F * Math.pow(1 / Math.tan(Math.PI / 4 + fi0 / 2), n),
            ro = this.sgn(n) * Math.sqrt(x * x + (ro0 - y) * (ro0 - y)),
            theta = Math.atan(x / (ro0 - y)); return { lat: (2 * Math.atan(Math.pow(F / ro, 1 / n)) - Math.PI / 2) * this.degRad, lng: (lambda0 + theta / n) * this.degRad } } }, jvm.MapObject = function() {}, jvm.MapObject.prototype.getLabelText = function(key) { var text; return text = this.config.label ? "function" == typeof this.config.label.render ? this.config.label.render(key) : key : null }, jvm.MapObject.prototype.getLabelOffsets = function(key) { var offsets; return this.config.label && ("function" == typeof this.config.label.offsets ? offsets = this.config.label.offsets(key) : "object" == typeof this.config.label.offsets && (offsets = this.config.label.offsets[key])), offsets || [0, 0] }, jvm.MapObject.prototype.setHovered = function(isHovered) { this.isHovered !== isHovered && (this.isHovered = isHovered, this.shape.isHovered = isHovered, this.shape.updateStyle(), this.label && (this.label.isHovered = isHovered, this.label.updateStyle())) }, jvm.MapObject.prototype.setSelected = function(isSelected) { this.isSelected !== isSelected && (this.isSelected = isSelected, this.shape.isSelected = isSelected, this.shape.updateStyle(), this.label && (this.label.isSelected = isSelected, this.label.updateStyle()), jvm.$(this.shape).trigger("selected", [isSelected])) }, jvm.MapObject.prototype.setStyle = function() { this.shape.setStyle.apply(this.shape, arguments) }, jvm.MapObject.prototype.remove = function() { this.shape.remove(), this.label && this.label.remove() }, jvm.Region = function(config) {
    var bbox, text, offsets;
    this.config = config, this.map = this.config.map, this.shape = config.canvas.addPath({ d: config.path, "data-code": config.code }, config.style, config.canvas.rootElement), this.shape.addClass("jvectormap-region jvectormap-element"), bbox = this.shape.getBBox(), text = this.getLabelText(config.code),
        this.config.label && text && (offsets = this.getLabelOffsets(config.code), this.labelX = bbox.x + bbox.width / 2 + offsets[0], this.labelY = bbox.y + bbox.height / 2 + offsets[1], this.label = config.canvas.addText({ text: text, "text-anchor": "middle", "alignment-baseline": "central", x: this.labelX, y: this.labelY, "data-code": config.code }, config.labelStyle, config.labelsGroup), this.label.addClass("jvectormap-region jvectormap-element"))
}, jvm.inherits(jvm.Region, jvm.MapObject), jvm.Region.prototype.updateLabelPosition = function() { this.label && this.label.set({ x: this.labelX * this.map.scale + this.map.transX * this.map.scale, y: this.labelY * this.map.scale + this.map.transY * this.map.scale }) }, jvm.Marker = function(config) { var text;
    this.config = config, this.map = this.config.map, this.isImage = !!this.config.style.initial.image, this.createShape(), text = this.getLabelText(config.index), this.config.label && text && (this.offsets = this.getLabelOffsets(config.index), this.labelX = config.cx / this.map.scale - this.map.transX, this.labelY = config.cy / this.map.scale - this.map.transY, this.label = config.canvas.addText({ text: text, "data-index": config.index, dy: "0.6ex", x: this.labelX, y: this.labelY }, config.labelStyle, config.labelsGroup), this.label.addClass("jvectormap-marker jvectormap-element")) }, jvm.inherits(jvm.Marker, jvm.MapObject), jvm.Marker.prototype.createShape = function() { var that = this;
    this.shape && this.shape.remove(), this.shape = this.config.canvas[this.isImage ? "addImage" : "addCircle"]({ "data-index": this.config.index, cx: this.config.cx, cy: this.config.cy }, this.config.style, this.config.group), this.shape.addClass("jvectormap-marker jvectormap-element"), this.isImage && jvm.$(this.shape.node).on("imageloaded", function() { that.updateLabelPosition() }) }, jvm.Marker.prototype.updateLabelPosition = function() { this.label && this.label.set({ x: this.labelX * this.map.scale + this.offsets[0] + this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r), y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1] }) }, jvm.Marker.prototype.setStyle = function(property) { var isImage;
    jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments), "r" === property && this.updateLabelPosition(), isImage = !!this.shape.get("image"), isImage != this.isImage && (this.isImage = isImage, this.config.style = jvm.$.extend(!0, {}, this.shape.style), this.createShape()) }, jvm.Map = function(params) { var e, map = this; if (this.params = jvm.$.extend(!0, {}, jvm.Map.defaultParams, params), !jvm.Map.maps[this.params.map]) throw new Error("Attempt to use map which was not loaded: " + this.params.map);
    this.mapData = jvm.Map.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = jvm.$("<div>").addClass("jvectormap-container"), this.params.container && this.params.container.append(this.container), this.container.data("mapObject", this), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function() { map.updateSize() }, jvm.$(window).resize(this.onResize); for (e in jvm.Map.apiEvents) this.params[e] && this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height), this.params.bindTouchEvents && ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? this.bindContainerTouchEvents() : window.MSGesture && this.bindContainerPointerEvents()), this.bindContainerEvents(), this.bindElementEvents(), this.createTip(), this.params.zoomButtons && this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.updateSize(), this.params.focusOn && ("string" == typeof this.params.focusOn ? this.params.focusOn = { region: this.params.focusOn } : jvm.$.isArray(this.params.focusOn) && (this.params.focusOn = { regions: this.params.focusOn }), this.setFocus(this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.legendCntHorizontal = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"), this.legendCntVertical = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"), this.container.append(this.legendCntHorizontal), this.container.append(this.legendCntVertical), this.params.series && this.createSeries() }, jvm.Map.prototype = { transX: 0, transY: 0, scale: 1, baseTransX: 0, baseTransY: 0, baseScale: 1, width: 0, height: 0, setBackgroundColor: function(backgroundColor) { this.container.css("background-color", backgroundColor) }, resize: function() { var curBaseScale = this.baseScale;
        this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / curBaseScale, this.transX *= this.baseScale / curBaseScale, this.transY *= this.baseScale / curBaseScale }, updateSize: function() { this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform() }, reset: function() { var key, i; for (key in this.series)
            for (i = 0; i < this.series[key].length; i++) this.series[key][i].clear();
        this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform() }, applyTransform: function() { var maxTransX, maxTransY, minTransX, minTransY;
        this.defaultWidth * this.scale <= this.width ? (maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (maxTransX = 0, minTransX = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (maxTransY = 0, minTransY = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > maxTransY ? this.transY = maxTransY : this.transY < minTransY && (this.transY = minTransY), this.transX > maxTransX ? this.transX = maxTransX : this.transX < minTransX && (this.transX = minTransX), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers && this.repositionMarkers(), this.repositionLabels(), this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY]) }, bindContainerEvents: function() { var oldPageX, oldPageY, mouseDown = !1,
            map = this;
        this.params.panOnDrag && (this.container.mousemove(function(e) { return mouseDown && (map.transX -= (oldPageX - e.pageX) / map.scale, map.transY -= (oldPageY - e.pageY) / map.scale, map.applyTransform(), oldPageX = e.pageX, oldPageY = e.pageY), !1 }).mousedown(function(e) { return mouseDown = !0, oldPageX = e.pageX, oldPageY = e.pageY, !1 }), this.onContainerMouseUp = function() { mouseDown = !1 }, jvm.$("body").mouseup(this.onContainerMouseUp)), this.params.zoomOnScroll && this.container.mousewheel(function(event) { var offset = jvm.$(map.container).offset(),
                centerX = event.pageX - offset.left,
                centerY = event.pageY - offset.top,
                zoomStep = Math.pow(1 + map.params.zoomOnScrollSpeed / 1e3, event.deltaFactor * event.deltaY);
            map.tip.hide(), map.setScale(map.scale * zoomStep, centerX, centerY), event.preventDefault() }) }, bindContainerTouchEvents: function() { var touchStartScale, touchStartDistance, touchX, touchY, centerTouchX, centerTouchY, lastTouchesLength, map = this,
            handleTouchEvent = function(e) { var offset, scale, transXOld, transYOld, touches = e.originalEvent.touches; "touchstart" == e.type && (lastTouchesLength = 0), 1 == touches.length ? (1 == lastTouchesLength && (transXOld = map.transX, transYOld = map.transY, map.transX -= (touchX - touches[0].pageX) / map.scale, map.transY -= (touchY - touches[0].pageY) / map.scale, map.applyTransform(), map.tip.hide(), (transXOld != map.transX || transYOld != map.transY) && e.preventDefault()), touchX = touches[0].pageX, touchY = touches[0].pageY) : 2 == touches.length && (2 == lastTouchesLength ? (scale = Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2)) / touchStartDistance, map.setScale(touchStartScale * scale, centerTouchX, centerTouchY), map.tip.hide(), e.preventDefault()) : (offset = jvm.$(map.container).offset(), centerTouchX = touches[0].pageX > touches[1].pageX ? touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2 : touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2, centerTouchY = touches[0].pageY > touches[1].pageY ? touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2 : touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2, centerTouchX -= offset.left, centerTouchY -= offset.top, touchStartScale = map.scale, touchStartDistance = Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2)))), lastTouchesLength = touches.length };
        jvm.$(this.container).bind("touchstart", handleTouchEvent), jvm.$(this.container).bind("touchmove", handleTouchEvent) }, bindContainerPointerEvents: function() { var map = this,
            gesture = new MSGesture,
            element = this.container[0],
            handlePointerDownEvent = function(e) { gesture.addPointer(e.pointerId) },
            handleGestureEvent = function(e) { var transXOld, transYOld;
                (0 != e.translationX || 0 != e.translationY) && (transXOld = map.transX, transYOld = map.transY, map.transX += e.translationX / map.scale, map.transY += e.translationY / map.scale, map.applyTransform(), map.tip.hide(), (transXOld != map.transX || transYOld != map.transY) && e.preventDefault()), 1 != e.scale && (map.setScale(map.scale * e.scale, e.offsetX, e.offsetY), map.tip.hide(), e.preventDefault()) };
        gesture.target = element, element.addEventListener("MSGestureChange", handleGestureEvent, !1), element.addEventListener("pointerdown", handlePointerDownEvent, !1) }, bindElementEvents: function() { var pageX, pageY, mouseMoved, map = this;
        this.container.mousemove(function(e) { Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2 && (mouseMoved = !0) }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function(e) { var baseVal = jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
                type = -1 === baseVal.indexOf("jvectormap-region") ? "marker" : "region",
                code = jvm.$(this).attr("region" == type ? "data-code" : "data-index"),
                element = "region" == type ? map.regions[code].element : map.markers[code].element,
                tipText = "region" == type ? map.mapData.paths[code].name : map.markers[code].config.name || "",
                tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
                overEvent = jvm.$.Event(type + "Over.jvectormap"); "mouseover" == e.type ? (map.container.trigger(overEvent, [code]), overEvent.isDefaultPrevented() || element.setHovered(!0), map.tip.text(tipText), map.container.trigger(tipShowEvent, [map.tip, code]), tipShowEvent.isDefaultPrevented() || (map.tip.show(), map.tipWidth = map.tip.width(), map.tipHeight = map.tip.height())) : (element.setHovered(!1), map.tip.hide(), map.container.trigger(type + "Out.jvectormap", [code])) }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function(e) { pageX = e.pageX, pageY = e.pageY, mouseMoved = !1 }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function() { var baseVal = jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class"),
                type = -1 === baseVal.indexOf("jvectormap-region") ? "marker" : "region",
                code = jvm.$(this).attr("region" == type ? "data-code" : "data-index"),
                clickEvent = jvm.$.Event(type + "Click.jvectormap"),
                element = "region" == type ? map.regions[code].element : map.markers[code].element;
            mouseMoved || (map.container.trigger(clickEvent, [code]), ("region" === type && map.params.regionsSelectable || "marker" === type && map.params.markersSelectable) && (clickEvent.isDefaultPrevented() || (map.params[type + "sSelectableOne"] && map.clearSelected(type + "s"), element.setSelected(!element.isSelected)))) }) }, bindZoomButtons: function() { var map = this;
        jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function() { map.setScale(map.scale * map.params.zoomStep, map.width / 2, map.height / 2, !1, map.params.zoomAnimate) }), this.container.find(".jvectormap-zoomout").click(function() { map.setScale(map.scale / map.params.zoomStep, map.width / 2, map.height / 2, !1, map.params.zoomAnimate) }) }, createTip: function() { var map = this;
        this.tip = jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")), this.container.mousemove(function(e) { var left = e.pageX - 15 - map.tipWidth,
                top = e.pageY - 15 - map.tipHeight;
            5 > left && (left = e.pageX + 15), 5 > top && (top = e.pageY + 15), map.tip.css({ left: left, top: top }) }) }, setScale: function(scale, anchorX, anchorY, isCentered, animate) { var interval, scaleStart, scaleDiff, transXStart, transXDiff, transYStart, transYDiff, transX, transY, viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
            that = this,
            i = 0,
            count = Math.abs(Math.round(60 * (scale - this.scale) / Math.max(scale, this.scale))),
            deferred = new jvm.$.Deferred; return scale > this.params.zoomMax * this.baseScale ? scale = this.params.zoomMax * this.baseScale : scale < this.params.zoomMin * this.baseScale && (scale = this.params.zoomMin * this.baseScale), "undefined" != typeof anchorX && "undefined" != typeof anchorY && (zoomStep = scale / this.scale, isCentered ? (transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2, transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2) : (transX = this.transX - (zoomStep - 1) / scale * anchorX, transY = this.transY - (zoomStep - 1) / scale * anchorY)), animate && count > 0 ? (scaleStart = this.scale, scaleDiff = (scale - scaleStart) / count, transXStart = this.transX * this.scale, transYStart = this.transY * this.scale, transXDiff = (transX * scale - transXStart) / count, transYDiff = (transY * scale - transYStart) / count, interval = setInterval(function() { i += 1, that.scale = scaleStart + scaleDiff * i, that.transX = (transXStart + transXDiff * i) / that.scale, that.transY = (transYStart + transYDiff * i) / that.scale, that.applyTransform(), i == count && (clearInterval(interval), that.container.trigger(viewportChangeEvent, [scale / that.baseScale]), deferred.resolve()) }, 10)) : (this.transX = transX, this.transY = transY, this.scale = scale, this.applyTransform(), this.container.trigger(viewportChangeEvent, [scale / this.baseScale]), deferred.resolve()), deferred }, setFocus: function(config) { var bbox, itemBbox, newBbox, codes, i, point; if (config = config || {}, config.region ? codes = [config.region] : config.regions && (codes = config.regions), codes) { for (i = 0; i < codes.length; i++) this.regions[codes[i]] && (itemBbox = this.regions[codes[i]].element.shape.getBBox(), itemBbox && ("undefined" == typeof bbox ? bbox = itemBbox : (newBbox = { x: Math.min(bbox.x, itemBbox.x), y: Math.min(bbox.y, itemBbox.y), width: Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) - Math.min(bbox.x, itemBbox.x), height: Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) - Math.min(bbox.y, itemBbox.y) }, bbox = newBbox))); return this.setScale(Math.min(this.width / bbox.width, this.height / bbox.height), -(bbox.x + bbox.width / 2), -(bbox.y + bbox.height / 2), !0, config.animate) } return config.lat && config.lng ? (point = this.latLngToPoint(config.lat, config.lng), config.x = this.transX - point.x / this.scale, config.y = this.transY - point.y / this.scale) : config.x && config.y && (config.x *= -this.defaultWidth, config.y *= -this.defaultHeight), this.setScale(config.scale * this.baseScale, config.x, config.y, !0, config.animate) }, getSelected: function(type) { var key, selected = []; for (key in this[type]) this[type][key].element.isSelected && selected.push(key); return selected }, getSelectedRegions: function() { return this.getSelected("regions") }, getSelectedMarkers: function() { return this.getSelected("markers") }, setSelected: function(type, keys) { var i; if ("object" != typeof keys && (keys = [keys]), jvm.$.isArray(keys))
            for (i = 0; i < keys.length; i++) this[type][keys[i]].element.setSelected(!0);
        else
            for (i in keys) this[type][i].element.setSelected(!!keys[i]) }, setSelectedRegions: function(keys) { this.setSelected("regions", keys) }, setSelectedMarkers: function(keys) { this.setSelected("markers", keys) }, clearSelected: function(type) { var i, select = {},
            selected = this.getSelected(type); for (i = 0; i < selected.length; i++) select[selected[i]] = !1;
        this.setSelected(type, select) }, clearSelectedRegions: function() { this.clearSelected("regions") }, clearSelectedMarkers: function() { this.clearSelected("markers") }, getMapObject: function() { return this }, getRegionName: function(code) { return this.mapData.paths[code].name }, createRegions: function() { var key, region, map = this;
        this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup(); for (key in this.mapData.paths) region = new jvm.Region({ map: this, path: this.mapData.paths[key].path, code: key, style: jvm.$.extend(!0, {}, this.params.regionStyle), labelStyle: jvm.$.extend(!0, {}, this.params.regionLabelStyle), canvas: this.canvas, labelsGroup: this.regionLabelsGroup, label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.regions : null }), jvm.$(region.shape).bind("selected", function(e, isSelected) { map.container.trigger("regionSelected.jvectormap", [jvm.$(this.node).attr("data-code"), isSelected, map.getSelectedRegions()]) }), this.regions[key] = { element: region, config: this.mapData.paths[key] } }, createMarkers: function(markers) { var i, marker, point, markerConfig, markersArray, map = this; if (this.markersGroup = this.markersGroup || this.canvas.addGroup(), this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup(), jvm.$.isArray(markers))
            for (markersArray = markers.slice(), markers = {}, i = 0; i < markersArray.length; i++) markers[i] = markersArray[i]; for (i in markers) markerConfig = markers[i] instanceof Array ? { latLng: markers[i] } : markers[i], point = this.getMarkerPosition(markerConfig), point !== !1 && (marker = new jvm.Marker({ map: this, style: jvm.$.extend(!0, {}, this.params.markerStyle, { initial: markerConfig.style || {} }), labelStyle: jvm.$.extend(!0, {}, this.params.markerLabelStyle), index: i, cx: point.x, cy: point.y, group: this.markersGroup, canvas: this.canvas, labelsGroup: this.markerLabelsGroup, label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.markers : null }), jvm.$(marker.shape).bind("selected", function(e, isSelected) { map.container.trigger("markerSelected.jvectormap", [jvm.$(this.node).attr("data-index"), isSelected, map.getSelectedMarkers()]) }), this.markers[i] && this.removeMarkers([i]), this.markers[i] = { element: marker, config: markerConfig }) }, repositionMarkers: function() { var i, point; for (i in this.markers) point = this.getMarkerPosition(this.markers[i].config), point !== !1 && this.markers[i].element.setStyle({ cx: point.x, cy: point.y }) }, repositionLabels: function() { var key; for (key in this.regions) this.regions[key].element.updateLabelPosition(); for (key in this.markers) this.markers[key].element.updateLabelPosition() }, getMarkerPosition: function(markerConfig) { return jvm.Map.maps[this.params.map].projection ? this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]) : { x: markerConfig.coords[0] * this.scale + this.transX * this.scale, y: markerConfig.coords[1] * this.scale + this.transY * this.scale } }, addMarker: function(key, marker, seriesData) { var values, i, markers = {},
            data = [],
            seriesData = seriesData || []; for (markers[key] = marker, i = 0; i < seriesData.length; i++) values = {}, "undefined" != typeof seriesData[i] && (values[key] = seriesData[i]), data.push(values);
        this.addMarkers(markers, data) }, addMarkers: function(markers, seriesData) { var i; for (seriesData = seriesData || [], this.createMarkers(markers), i = 0; i < seriesData.length; i++) this.series.markers[i].setValues(seriesData[i] || {}) }, removeMarkers: function(markers) { var i; for (i = 0; i < markers.length; i++) this.markers[markers[i]].element.remove(), delete this.markers[markers[i]] }, removeAllMarkers: function() { var i, markers = []; for (i in this.markers) markers.push(i);
        this.removeMarkers(markers) }, latLngToPoint: function(lat, lng) { var point, inset, bbox, proj = jvm.Map.maps[this.params.map].projection,
            centralMeridian = proj.centralMeridian; return -180 + centralMeridian > lng && (lng += 360), point = jvm.Proj[proj.type](lat, lng, centralMeridian), inset = this.getInsetForPoint(point.x, point.y), inset ? (bbox = inset.bbox, point.x = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x) * inset.width * this.scale, point.y = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y) * inset.height * this.scale, { x: point.x + this.transX * this.scale + inset.left * this.scale, y: point.y + this.transY * this.scale + inset.top * this.scale }) : !1 }, pointToLatLng: function(x, y) { var i, inset, bbox, nx, ny, proj = jvm.Map.maps[this.params.map].projection,
            centralMeridian = proj.centralMeridian,
            insets = jvm.Map.maps[this.params.map].insets; for (i = 0; i < insets.length; i++)
            if (inset = insets[i], bbox = inset.bbox, nx = x - (this.transX * this.scale + inset.left * this.scale), ny = y - (this.transY * this.scale + inset.top * this.scale), nx = nx / (inset.width * this.scale) * (bbox[1].x - bbox[0].x) + bbox[0].x, ny = ny / (inset.height * this.scale) * (bbox[1].y - bbox[0].y) + bbox[0].y, nx > bbox[0].x && nx < bbox[1].x && ny > bbox[0].y && ny < bbox[1].y) return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
        return !1 }, getInsetForPoint: function(x, y) { var i, bbox, insets = jvm.Map.maps[this.params.map].insets; for (i = 0; i < insets.length; i++)
            if (bbox = insets[i].bbox, x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) return insets[i] }, createSeries: function() { var i, key;
        this.series = { markers: [], regions: [] }; for (key in this.params.series)
            for (i = 0; i < this.params.series[key].length; i++) this.series[key][i] = new jvm.DataSeries(this.params.series[key][i], this[key], this) }, remove: function() { this.tip.remove(), this.container.remove(), jvm.$(window).unbind("resize", this.onResize), jvm.$("body").unbind("mouseup", this.onContainerMouseUp) } }, jvm.Map.maps = {}, jvm.Map.defaultParams = { map: "world_mill_en", backgroundColor: "#505050", zoomButtons: !0, zoomOnScroll: !0, zoomOnScrollSpeed: 3, panOnDrag: !0, zoomMax: 8, zoomMin: 1, zoomStep: 1.6, zoomAnimate: !0, regionsSelectable: !1, markersSelectable: !1, bindTouchEvents: !0, regionStyle: { initial: { fill: "white", "fill-opacity": 1, stroke: "none", "stroke-width": 0, "stroke-opacity": 1 }, hover: { "fill-opacity": .8, cursor: "pointer" }, selected: { fill: "yellow" }, selectedHover: {} }, regionLabelStyle: { initial: { "font-family": "Verdana", "font-size": "12", "font-weight": "bold", cursor: "default", fill: "black" }, hover: { cursor: "pointer" } }, markerStyle: { initial: { fill: "grey", stroke: "#505050", "fill-opacity": 1, "stroke-width": 1, "stroke-opacity": 1, r: 5 }, hover: { stroke: "black", "stroke-width": 2, cursor: "pointer" }, selected: { fill: "blue" }, selectedHover: {} }, markerLabelStyle: { initial: { "font-family": "Verdana", "font-size": "12", "font-weight": "bold", cursor: "default", fill: "black" }, hover: { cursor: "pointer" } } }, jvm.Map.apiEvents = { onRegionTipShow: "regionTipShow", onRegionOver: "regionOver", onRegionOut: "regionOut", onRegionClick: "regionClick", onRegionSelected: "regionSelected", onMarkerTipShow: "markerTipShow", onMarkerOver: "markerOver", onMarkerOut: "markerOut", onMarkerClick: "markerClick", onMarkerSelected: "markerSelected", onViewportChange: "viewportChange" }, jvm.MultiMap = function(params) { var that = this;
    this.maps = {}, this.params = jvm.$.extend(!0, {}, jvm.MultiMap.defaultParams, params), this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE, this.params.main = this.params.main || {}, this.params.main.multiMapLevel = 0, this.history = [this.addMap(this.params.main.map, this.params.main)], this.defaultProjection = this.history[0].mapData.projection.type, this.mapsLoaded = {}, this.params.container.css({ position: "relative" }), this.backButton = jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container), this.backButton.hide(), this.backButton.click(function() { that.goBack() }), this.spinner = jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container), this.spinner.hide() }, jvm.MultiMap.prototype = { addMap: function(name, config) { var cnt = jvm.$("<div/>").css({ width: "100%", height: "100%" }); return this.params.container.append(cnt), this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt })), this.params.maxLevel > config.multiMapLevel && this.maps[name].container.on("regionClick.jvectormap", { scope: this }, function(e, code) { var multimap = e.data.scope,
                mapName = multimap.params.mapNameByCode(code, multimap);
            multimap.drillDownPromise && "pending" === multimap.drillDownPromise.state() || multimap.drillDown(mapName, code) }), this.maps[name] }, downloadMap: function(code) { var that = this,
            deferred = jvm.$.Deferred(); return this.mapsLoaded[code] ? deferred.resolve() : jvm.$.get(this.params.mapUrlByCode(code, this)).then(function() { that.mapsLoaded[code] = !0, deferred.resolve() }, function() { deferred.reject() }), deferred }, drillDown: function(name, code) { var currentMap = this.history[this.history.length - 1],
            that = this,
            focusPromise = currentMap.setFocus({ region: code, animate: !0 }),
            downloadPromise = this.downloadMap(code);
        focusPromise.then(function() { "pending" === downloadPromise.state() && that.spinner.show() }), downloadPromise.always(function() { that.spinner.hide() }), this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise), this.drillDownPromise.then(function() { currentMap.params.container.hide(), that.maps[name] ? that.maps[name].params.container.show() : that.addMap(name, { map: name, multiMapLevel: currentMap.params.multiMapLevel + 1 }), that.history.push(that.maps[name]), that.backButton.show() }) }, goBack: function() { var currentMap = this.history.pop(),
            prevMap = this.history[this.history.length - 1],
            that = this;
        currentMap.setFocus({ scale: 1, x: .5, y: .5, animate: !0 }).then(function() { currentMap.params.container.hide(), prevMap.params.container.show(), prevMap.updateSize(), 1 === that.history.length && that.backButton.hide(), prevMap.setFocus({ scale: 1, x: .5, y: .5, animate: !0 }) }) } }, jvm.MultiMap.defaultParams = { mapNameByCode: function(code, multiMap) { return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en" }, mapUrlByCode: function(code, multiMap) { return "jquery-jvectormap-data-" + code.toLowerCase() + "-" + multiMap.defaultProjection + "-en.js" } };
jQuery.fn.vectorMap('addMap', 'world_mill_en', { "insets": [{ "width": 900, "top": 0, "height": 440.70631074413296, "bbox": [{ "y": -12671671.123330014, "x": -20004297.151525836 }, { "y": 6930392.025135122, "x": 20026572.39474939 }], "left": 0 }], "paths": { "BD": { "path": "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z", "name": "Bangladesh" }, "BE": { "path": "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z", "name": "Belgium" }, "BF": { "path": "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z", "name": "Burkina Faso" }, "BG": { "path": "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z", "name": "Bulgaria" }, "BA": { "path": "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z", "name": "Bosnia and Herz." }, "BN": { "path": "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", "name": "Brunei" }, "BO": { "path": "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z", "name": "Bolivia" }, "JP": { "path": "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z", "name": "Japan" }, "BI": { "path": "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z", "name": "Burundi" }, "BJ": { "path": "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z", "name": "Benin" }, "BT": { "path": "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z", "name": "Bhutan" }, "JM": { "path": "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z", "name": "Jamaica" }, "BW": { "path": "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z", "name": "Botswana" }, "BR": { "path": "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z", "name": "Brazil" }, "BS": { "path": "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z", "name": "Bahamas" }, "BY": { "path": "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z", "name": "Belarus" }, "BZ": { "path": "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z", "name": "Belize" }, "RU": { "path": "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z", "name": "Russia" }, "RW": { "path": "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", "name": "Rwanda" }, "RS": { "path": "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z", "name": "Serbia" }, "LT": { "path": "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z", "name": "Lithuania" }, "LU": { "path": "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z", "name": "Luxembourg" }, "LR": { "path": "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z", "name": "Liberia" }, "RO": { "path": "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z", "name": "Romania" }, "GW": { "path": "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z", "name": "Guinea-Bissau" }, "GT": { "path": "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z", "name": "Guatemala" }, "GR": { "path": "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z", "name": "Greece" }, "GQ": { "path": "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", "name": "Eq. Guinea" }, "GY": { "path": "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z", "name": "Guyana" }, "GE": { "path": "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z", "name": "Georgia" }, "GB": { "path": "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z", "name": "United Kingdom" }, "GA": { "path": "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z", "name": "Gabon" }, "GN": { "path": "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z", "name": "Guinea" }, "GM": { "path": "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z", "name": "Gambia" }, "GL": { "path": "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z", "name": "Greenland" }, "KW": { "path": "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z", "name": "Kuwait" }, "GH": { "path": "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z", "name": "Ghana" }, "OM": { "path": "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z", "name": "Oman" }, "_2": { "path": "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z", "name": "Somaliland" }, "_1": { "path": "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z", "name": "Kosovo" }, "_0": { "path": "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z", "name": "N. Cyprus" }, "JO": { "path": "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z", "name": "Jordan" }, "HR": { "path": "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z", "name": "Croatia" }, "HT": { "path": "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z", "name": "Haiti" }, "HU": { "path": "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z", "name": "Hungary" }, "HN": { "path": "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z", "name": "Honduras" }, "PR": { "path": "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z", "name": "Puerto Rico" }, "PS": { "path": "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z", "name": "Palestine" }, "PT": { "path": "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z", "name": "Portugal" }, "PY": { "path": "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z", "name": "Paraguay" }, "PA": { "path": "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z", "name": "Panama" }, "PG": { "path": "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z", "name": "Papua New Guinea" }, "PE": { "path": "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z", "name": "Peru" }, "PK": { "path": "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z", "name": "Pakistan" }, "PH": { "path": "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z", "name": "Philippines" }, "PL": { "path": "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z", "name": "Poland" }, "ZM": { "path": "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z", "name": "Zambia" }, "EH": { "path": "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z", "name": "W. Sahara" }, "EE": { "path": "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z", "name": "Estonia" }, "EG": { "path": "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z", "name": "Egypt" }, "ZA": { "path": "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z", "name": "South Africa" }, "EC": { "path": "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z", "name": "Ecuador" }, "AL": { "path": "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z", "name": "Albania" }, "AO": { "path": "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z", "name": "Angola" }, "KZ": { "path": "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z", "name": "Kazakhstan" }, "ET": { "path": "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z", "name": "Ethiopia" }, "ZW": { "path": "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z", "name": "Zimbabwe" }, "ES": { "path": "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z", "name": "Spain" }, "ER": { "path": "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z", "name": "Eritrea" }, "ME": { "path": "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z", "name": "Montenegro" }, "MD": { "path": "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z", "name": "Moldova" }, "MG": { "path": "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z", "name": "Madagascar" }, "MA": { "path": "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z", "name": "Morocco" }, "UZ": { "path": "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z", "name": "Uzbekistan" }, "MM": { "path": "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z", "name": "Myanmar" }, "ML": { "path": "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z", "name": "Mali" }, "MN": { "path": "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z", "name": "Mongolia" }, "MK": { "path": "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z", "name": "Macedonia" }, "MW": { "path": "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z", "name": "Malawi" }, "MR": { "path": "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z", "name": "Mauritania" }, "UG": { "path": "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z", "name": "Uganda" }, "MY": { "path": "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z", "name": "Malaysia" }, "MX": { "path": "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z", "name": "Mexico" }, "VU": { "path": "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z", "name": "Vanuatu" }, "FR": { "path": "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z", "name": "France" }, "FI": { "path": "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z", "name": "Finland" }, "FJ": { "path": "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z", "name": "Fiji" }, "FK": { "path": "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z", "name": "Falkland Is." }, "NI": { "path": "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z", "name": "Nicaragua" }, "NL": { "path": "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z", "name": "Netherlands" }, "NO": { "path": "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z", "name": "Norway" }, "NA": { "path": "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z", "name": "Namibia" }, "NC": { "path": "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z", "name": "New Caledonia" }, "NE": { "path": "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z", "name": "Niger" }, "NG": { "path": "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z", "name": "Nigeria" }, "NZ": { "path": "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z", "name": "New Zealand" }, "NP": { "path": "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z", "name": "Nepal" }, "CI": { "path": "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z", "name": "C\u00c3\u00b4te d'Ivoire" }, "CH": { "path": "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z", "name": "Switzerland" }, "CO": { "path": "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z", "name": "Colombia" }, "CN": { "path": "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z", "name": "China" }, "CM": { "path": "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z", "name": "Cameroon" }, "CL": { "path": "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z", "name": "Chile" }, "CA": { "path": "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z", "name": "Canada" }, "CG": { "path": "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z", "name": "Congo" }, "CF": { "path": "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z", "name": "Central African Rep." }, "CD": { "path": "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z", "name": "Dem. Rep. Congo" }, "CZ": { "path": "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z", "name": "Czech Rep." }, "CY": { "path": "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z", "name": "Cyprus" }, "CR": { "path": "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z", "name": "Costa Rica" }, "CU": { "path": "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z", "name": "Cuba" }, "SZ": { "path": "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z", "name": "Swaziland" }, "SY": { "path": "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z", "name": "Syria" }, "KG": { "path": "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z", "name": "Kyrgyzstan" }, "KE": { "path": "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z", "name": "Kenya" }, "SS": { "path": "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z", "name": "S. Sudan" }, "SR": { "path": "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z", "name": "Suriname" }, "KH": { "path": "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z", "name": "Cambodia" }, "SV": { "path": "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z", "name": "El Salvador" }, "SK": { "path": "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z", "name": "Slovakia" }, "KR": { "path": "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z", "name": "Korea" }, "SI": { "path": "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z", "name": "Slovenia" }, "KP": { "path": "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z", "name": "Dem. Rep. Korea" }, "SO": { "path": "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z", "name": "Somalia" }, "SN": { "path": "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z", "name": "Senegal" }, "SL": { "path": "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z", "name": "Sierra Leone" }, "SB": { "path": "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z", "name": "Solomon Is." }, "SA": { "path": "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z", "name": "Saudi Arabia" }, "SE": { "path": "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z", "name": "Sweden" }, "SD": { "path": "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z", "name": "Sudan" }, "DO": { "path": "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z", "name": "Dominican Rep." }, "DJ": { "path": "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z", "name": "Djibouti" }, "DK": { "path": "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z", "name": "Denmark" }, "DE": { "path": "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z", "name": "Germany" }, "YE": { "path": "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z", "name": "Yemen" }, "AT": { "path": "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z", "name": "Austria" }, "DZ": { "path": "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z", "name": "Algeria" }, "US": { "path": "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z", "name": "United States" }, "LV": { "path": "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z", "name": "Latvia" }, "UY": { "path": "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z", "name": "Uruguay" }, "LB": { "path": "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z", "name": "Lebanon" }, "LA": { "path": "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z", "name": "Lao PDR" }, "TW": { "path": "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z", "name": "Taiwan" }, "TT": { "path": "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z", "name": "Trinidad and Tobago" }, "TR": { "path": "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z", "name": "Turkey" }, "LK": { "path": "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z", "name": "Sri Lanka" }, "TN": { "path": "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z", "name": "Tunisia" }, "TL": { "path": "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", "name": "Timor-Leste" }, "TM": { "path": "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z", "name": "Turkmenistan" }, "TJ": { "path": "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z", "name": "Tajikistan" }, "LS": { "path": "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z", "name": "Lesotho" }, "TH": { "path": "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z", "name": "Thailand" }, "TF": { "path": "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z", "name": "Fr. S. Antarctic Lands" }, "TG": { "path": "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z", "name": "Togo" }, "TD": { "path": "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z", "name": "Chad" }, "LY": { "path": "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z", "name": "Libya" }, "AE": { "path": "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z", "name": "United Arab Emirates" }, "VE": { "path": "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z", "name": "Venezuela" }, "AF": { "path": "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z", "name": "Afghanistan" }, "IQ": { "path": "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z", "name": "Iraq" }, "IS": { "path": "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z", "name": "Iceland" }, "IR": { "path": "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z", "name": "Iran" }, "AM": { "path": "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z", "name": "Armenia" }, "IT": { "path": "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z", "name": "Italy" }, "VN": { "path": "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z", "name": "Vietnam" }, "AR": { "path": "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z", "name": "Argentina" }, "AU": { "path": "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z", "name": "Australia" }, "IL": { "path": "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z", "name": "Israel" }, "IN": { "path": "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z", "name": "India" }, "TZ": { "path": "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z", "name": "Tanzania" }, "AZ": { "path": "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z", "name": "Azerbaijan" }, "IE": { "path": "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z", "name": "Ireland" }, "ID": { "path": "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z", "name": "Indonesia" }, "UA": { "path": "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z", "name": "Ukraine" }, "QA": { "path": "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z", "name": "Qatar" }, "MZ": { "path": "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z", "name": "Mozambique" } }, "height": 440.70631074413296, "projection": { "type": "mill", "centralMeridian": 11.5 }, "width": 900.0 });
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
! function(a, b) { "function" == typeof define && define.amd ? define("eve", function() { return b() }) : "object" == typeof exports ? module.exports = b() : a.eve = b() }(this, function() { var a, b, c = "0.4.2",
        d = "hasOwnProperty",
        e = /[\.\/]/,
        f = "*",
        g = function() {},
        h = function(a, b) { return a - b },
        i = { n: {} },
        j = function(c, d) { c = String(c); var e, f = b,
                g = Array.prototype.slice.call(arguments, 2),
                i = j.listeners(c),
                k = 0,
                l = [],
                m = {},
                n = [],
                o = a;
            a = c, b = 0; for (var p = 0, q = i.length; q > p; p++) "zIndex" in i[p] && (l.push(i[p].zIndex), i[p].zIndex < 0 && (m[i[p].zIndex] = i[p])); for (l.sort(h); l[k] < 0;)
                if (e = m[l[k++]], n.push(e.apply(d, g)), b) return b = f, n;
            for (p = 0; q > p; p++)
                if (e = i[p], "zIndex" in e)
                    if (e.zIndex == l[k]) { if (n.push(e.apply(d, g)), b) break;
                        do
                            if (k++, e = m[l[k]], e && n.push(e.apply(d, g)), b) break; while (e) } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), b) break; return b = f, a = o, n.length ? n : null }; return j._events = i, j.listeners = function(a) { var b, c, d, g, h, j, k, l, m = a.split(e),
            n = i,
            o = [n],
            p = []; for (g = 0, h = m.length; h > g; g++) { for (l = [], j = 0, k = o.length; k > j; j++)
                for (n = o[j].n, c = [n[m[g]], n[f]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l } return p }, j.on = function(a, b) { if (a = String(a), "function" != typeof b) return function() {}; for (var c = a.split(e), d = i, f = 0, h = c.length; h > f; f++) d = d.n, d = d.hasOwnProperty(c[f]) && d[c[f]] || (d[c[f]] = { n: {} }); for (d.f = d.f || [], f = 0, h = d.f.length; h > f; f++)
            if (d.f[f] == b) return g;
        return d.f.push(b),
            function(a) {+a == +a && (b.zIndex = +a) } }, j.f = function(a) { var b = [].slice.call(arguments, 1); return function() { j.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0))) } }, j.stop = function() { b = 1 }, j.nt = function(b) { return b ? new RegExp("(?:\\.|\\/|^)" + b + "(?:\\.|\\/|$)").test(a) : a }, j.nts = function() { return a.split(e) }, j.off = j.unbind = function(a, b) { if (!a) return void(j._events = i = { n: {} }); var c, g, h, k, l, m, n, o = a.split(e),
            p = [i]; for (k = 0, l = o.length; l > k; k++)
            for (m = 0; m < p.length; m += h.length - 2) { if (h = [m, 1], c = p[m].n, o[k] != f) c[o[k]] && h.push(c[o[k]]);
                else
                    for (g in c) c[d](g) && h.push(c[g]);
                p.splice.apply(p, h) }
        for (k = 0, l = p.length; l > k; k++)
            for (c = p[k]; c.n;) { if (b) { if (c.f) { for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) { c.f.splice(m, 1); break }!c.f.length && delete c.f } for (g in c.n)
                        if (c.n[d](g) && c.n[g].f) { var q = c.n[g].f; for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) { q.splice(m, 1); break }!q.length && delete c.n[g].f } } else { delete c.f; for (g in c.n) c.n[d](g) && c.n[g].f && delete c.n[g].f }
                c = c.n } }, j.once = function(a, b) { var c = function() { return j.unbind(a, c), b.apply(this, arguments) }; return j.on(a, c) }, j.version = c, j.toString = function() { return "You are running Eve " + c }, j }),
function(a, b) { "function" == typeof define && define.amd ? define("raphael.core", ["eve"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("eve")) : a.Raphael = b(a.eve) }(this, function(a) {
    function b(c) { if (b.is(c, "function")) return t ? c() : a.on("raphael.DOMload", c); if (b.is(c, U)) return b._engine.create[C](b, c.splice(0, 3 + b.is(c[0], S))).add(c); var d = Array.prototype.slice.call(arguments, 0); if (b.is(d[d.length - 1], "function")) { var e = d.pop(); return t ? e.call(b._engine.create[C](b, d)) : a.on("raphael.DOMload", function() { e.call(b._engine.create[C](b, d)) }) } return b._engine.create[C](b, arguments) }

    function c(a) { if ("function" == typeof a || Object(a) !== a) return a; var b = new a.constructor; for (var d in a) a[y](d) && (b[d] = c(a[d])); return b }

    function d(a, b) { for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0]) }

    function e(a, b, c) {
        function e() { var f = Array.prototype.slice.call(arguments, 0),
                g = f.join("␀"),
                h = e.cache = e.cache || {},
                i = e.count = e.count || []; return h[y](g) ? (d(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[C](b, f), c ? c(h[g]) : h[g]) } return e }

    function f() { return this.hex }

    function g(a, b) { for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) { var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];
            b ? d ? e - 4 == d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 == d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 == d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]) } return c }

    function h(a, b, c, d, e) { var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d; return a * g - 3 * b + 3 * c }

    function i(a, b, c, d, e, f, g, i, j) { null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j; for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) { var q = k * m[p] + k,
                r = h(q, a, c, e, g),
                s = h(q, b, d, f, i),
                t = r * r + s * s;
            o += n[p] * M.sqrt(t) } return k * o }

    function j(a, b, c, d, e, f, g, h, j) { if (!(0 > j || i(a, b, c, d, e, f, g, h) < j)) { var k, l = 1,
                m = l / 2,
                n = l - m,
                o = .01; for (k = i(a, b, c, d, e, f, g, h, n); P(k - j) > o;) m /= 2, n += (j > k ? 1 : -1) * m, k = i(a, b, c, d, e, f, g, h, n); return n } }

    function k(a, b, c, d, e, f, g, h) { if (!(N(a, c) < O(e, g) || O(a, c) > N(e, g) || N(b, d) < O(f, h) || O(b, d) > N(f, h))) { var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g); if (k) { var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2); if (!(n < +O(a, c).toFixed(2) || n > +N(a, c).toFixed(2) || n < +O(e, g).toFixed(2) || n > +N(e, g).toFixed(2) || o < +O(b, d).toFixed(2) || o > +N(b, d).toFixed(2) || o < +O(f, h).toFixed(2) || o > +N(f, h).toFixed(2))) return { x: l, y: m } } } }

    function l(a, c, d) { var e = b.bezierBBox(a),
            f = b.bezierBBox(c); if (!b.isBBoxIntersect(e, f)) return d ? 0 : []; for (var g = i.apply(0, a), h = i.apply(0, c), j = N(~~(g / 5), 1), l = N(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; j + 1 > q; q++) { var r = b.findDotsAtSegment.apply(b, a.concat(q / j));
            m.push({ x: r.x, y: r.y, t: q / j }) } for (q = 0; l + 1 > q; q++) r = b.findDotsAtSegment.apply(b, c.concat(q / l)), n.push({ x: r.x, y: r.y, t: q / l }); for (q = 0; j > q; q++)
            for (var s = 0; l > s; s++) { var t = m[q],
                    u = m[q + 1],
                    v = n[s],
                    w = n[s + 1],
                    x = P(u.x - t.x) < .001 ? "y" : "x",
                    y = P(w.x - v.x) < .001 ? "y" : "x",
                    z = k(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y); if (z) { if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                    o[z.x.toFixed(4)] = z.y.toFixed(4); var A = t.t + P((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                        B = v.t + P((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                    A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({ x: z.x, y: z.y, t1: O(A, 1), t2: O(B, 1) })) } }
        return p }

    function m(a, c, d) { a = b._path2curve(a), c = b._path2curve(c); for (var e, f, g, h, i, j, k, m, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) { var s = a[q]; if ("M" == s[0]) e = i = s[1], f = j = s[2];
            else { "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j); for (var t = 0, u = c.length; u > t; t++) { var v = c[t]; if ("M" == v[0]) g = k = v[1], h = m = v[2];
                    else { "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, m, k, m], g = k, h = m); var w = l(n, o, d); if (d) p += w;
                        else { for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w) } } } } } return p }

    function n(a, b, c, d, e, f) { null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) }

    function o() { return this.x + G + this.y + G + this.width + " × " + this.height }

    function p(a, b, c, d, e, f) {
        function g(a) { return ((l * a + k) * a + j) * a }

        function h(a, b) { var c = i(a, b); return ((o * c + n) * c + m) * c }

        function i(a, b) { var c, d, e, f, h, i; for (e = a, i = 0; 8 > i; i++) { if (f = g(e) - a, P(f) < b) return e; if (h = (3 * l * e + 2 * k) * e + j, P(h) < 1e-6) break;
                e -= f / h } if (c = 0, d = 1, e = a, c > e) return c; if (e > d) return d; for (; d > c;) { if (f = g(e), P(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c } return e } var j = 3 * b,
            k = 3 * (d - b) - j,
            l = 1 - j - k,
            m = 3 * c,
            n = 3 * (e - c) - m,
            o = 1 - m - n; return h(a, 1 / (200 * f)) }

    function q(a, b) { var c = [],
            d = {}; if (this.ms = b, this.times = 1, a) { for (var e in a) a[y](e) && (d[$(e)] = a[e], c.push($(e)));
            c.sort(ka) }
        this.anim = d, this.top = c[c.length - 1], this.percents = c }

    function r(c, d, e, f, g, h) { e = $(e); var i, j, k, l, m, o, q = c.ms,
            r = {},
            s = {},
            t = {}; if (f)
            for (w = 0, x = fb.length; x > w; w++) { var u = fb[w]; if (u.el.id == d.id && u.anim == c) { u.percent != e ? (fb.splice(w, 1), k = 1) : j = u, d.attr(u.totalOrigin); break } } else f = +s; for (var w = 0, x = c.percents.length; x > w; w++) { if (c.percents[w] == e || c.percents[w] > f * c.top) { e = c.percents[w], m = c.percents[w - 1] || 0, q = q / c.top * (e - m), l = c.percents[w + 1], i = c.anim[e]; break }
            f && d.attr(c.anim[c.percents[w]]) } if (i) { if (j) j.initstatus = f, j.start = new Date - j.ms * f;
            else { for (var z in i)
                    if (i[y](z) && (ca[y](z) || d.paper.customAttributes[y](z))) switch (r[z] = d.attr(z), null == r[z] && (r[z] = ba[z]), s[z] = i[z], ca[z]) {
                        case S:
                            t[z] = (s[z] - r[z]) / q; break;
                        case "colour":
                            r[z] = b.getRGB(r[z]); var A = b.getRGB(s[z]);
                            t[z] = { r: (A.r - r[z].r) / q, g: (A.g - r[z].g) / q, b: (A.b - r[z].b) / q }; break;
                        case "path":
                            var B = Ia(r[z], s[z]),
                                C = B[1]; for (r[z] = B[0], t[z] = [], w = 0, x = r[z].length; x > w; w++) { t[z][w] = [0]; for (var E = 1, F = r[z][w].length; F > E; E++) t[z][w][E] = (C[w][E] - r[z][w][E]) / q } break;
                        case "transform":
                            var G = d._,
                                J = Na(G[z], s[z]); if (J)
                                for (r[z] = J.from, s[z] = J.to, t[z] = [], t[z].real = !0, w = 0, x = r[z].length; x > w; w++)
                                    for (t[z][w] = [r[z][w][0]], E = 1, F = r[z][w].length; F > E; E++) t[z][w][E] = (s[z][w][E] - r[z][w][E]) / q;
                            else { var K = d.matrix || new n,
                                    L = { _: { transform: G.transform }, getBBox: function() { return d.getBBox(1) } };
                                r[z] = [K.a, K.b, K.c, K.d, K.e, K.f], La(L, s[z]), s[z] = L._.transform, t[z] = [(L.matrix.a - K.a) / q, (L.matrix.b - K.b) / q, (L.matrix.c - K.c) / q, (L.matrix.d - K.d) / q, (L.matrix.e - K.e) / q, (L.matrix.f - K.f) / q] } break;
                        case "csv":
                            var M = H(i[z])[I](v),
                                N = H(r[z])[I](v); if ("clip-rect" == z)
                                for (r[z] = N, t[z] = [], w = N.length; w--;) t[z][w] = (M[w] - r[z][w]) / q;
                            s[z] = M; break;
                        default:
                            for (M = [][D](i[z]), N = [][D](r[z]), t[z] = [], w = d.paper.customAttributes[z].length; w--;) t[z][w] = ((M[w] || 0) - (N[w] || 0)) / q }
                    var O = i.easing,
                        P = b.easing_formulas[O];
                if (!P)
                    if (P = H(O).match(Y), P && 5 == P.length) { var Q = P;
                        P = function(a) { return p(a, +Q[1], +Q[2], +Q[3], +Q[4], q) } } else P = la;
                if (o = i.start || c.start || +new Date, u = { anim: c, percent: e, timestamp: o, start: o + (c.del || 0), status: 0, initstatus: f || 0, stop: !1, ms: q, easing: P, from: r, diff: t, to: s, el: d, callback: i.callback, prev: m, next: l, repeat: h || c.times, origin: d.attr(), totalOrigin: g }, fb.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - q * f, 1 == fb.length)) return hb();
                k && (u.start = new Date - u.ms * f), 1 == fb.length && gb(hb) }
            a("raphael.anim.start." + d.id, d, c) } }

    function s(a) { for (var b = 0; b < fb.length; b++) fb[b].el.paper == a && fb.splice(b--, 1) }
    b.version = "2.1.4", b.eve = a;
    var t, u, v = /[, ]+/,
        w = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        x = /\{(\d+)\}/g,
        y = "hasOwnProperty",
        z = { doc: document, win: window },
        A = { was: Object.prototype[y].call(z.win, "Raphael"), is: z.win.Raphael },
        B = function() { this.ca = this.customAttributes = {} },
        C = "apply",
        D = "concat",
        E = "ontouchstart" in z.win || z.win.DocumentTouch && z.doc instanceof DocumentTouch,
        F = "",
        G = " ",
        H = String,
        I = "split",
        J = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [I](G),
        K = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
        L = H.prototype.toLowerCase,
        M = Math,
        N = M.max,
        O = M.min,
        P = M.abs,
        Q = M.pow,
        R = M.PI,
        S = "number",
        T = "string",
        U = "array",
        V = Object.prototype.toString,
        W = (b._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        X = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        Y = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        Z = M.round,
        $ = parseFloat,
        _ = parseInt,
        aa = H.prototype.toUpperCase,
        ba = b._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0 },
        ca = b._availableAnimAttrs = { blur: S, "clip-rect": "csv", cx: S, cy: S, fill: "colour", "fill-opacity": S, "font-size": S, height: S, opacity: S, path: "path", r: S, rx: S, ry: S, stroke: "colour", "stroke-opacity": S, "stroke-width": S, transform: "transform", width: S, x: S, y: S },
        da = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        ea = { hs: 1, rg: 1 },
        fa = /,?([achlmqrstvxz]),?/gi,
        ga = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ha = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ia = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        ja = (b._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        ka = function(a, b) { return $(a) - $(b) },
        la = function(a) { return a },
        ma = b._rectPath = function(a, b, c, d, e) { return e ? [
                ["M", a + e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ] : [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ] },
        na = function(a, b, c, d) { return null == d && (d = c), [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ] },
        oa = b._getPath = { path: function(a) { return a.attr("path") }, circle: function(a) { var b = a.attrs; return na(b.cx, b.cy, b.r) }, ellipse: function(a) { var b = a.attrs; return na(b.cx, b.cy, b.rx, b.ry) }, rect: function(a) { var b = a.attrs; return ma(b.x, b.y, b.width, b.height, b.r) }, image: function(a) { var b = a.attrs; return ma(b.x, b.y, b.width, b.height) }, text: function(a) { var b = a._getBBox(); return ma(b.x, b.y, b.width, b.height) }, set: function(a) { var b = a._getBBox(); return ma(b.x, b.y, b.width, b.height) } },
        pa = b.mapPath = function(a, b) { if (!b) return a; var c, d, e, f, g, h, i; for (a = Ia(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d; return a };
    if (b._g = z, b.type = z.win.SVGAngle || z.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == b.type) { var qa, ra = z.doc.createElement("div"); if (ra.innerHTML = '<v:shape adj="1"/>', qa = ra.firstChild, qa.style.behavior = "url(#default#VML)", !qa || "object" != typeof qa.adj) return b.type = F;
        ra = null }
    b.svg = !(b.vml = "VML" == b.type), b._Paper = B, b.fn = u = B.prototype = b.prototype, b._id = 0, b._oid = 0, b.is = function(a, b) { return b = L.call(b), "finite" == b ? !X[y](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || V.call(a).slice(8, -1).toLowerCase() == b }, b.angle = function(a, c, d, e, f, g) { if (null == f) { var h = a - d,
                i = c - e; return h || i ? (180 + 180 * M.atan2(-i, -h) / R + 360) % 360 : 0 } return b.angle(a, c, f, g) - b.angle(d, e, f, g) }, b.rad = function(a) { return a % 360 * R / 180 }, b.deg = function(a) { return Math.round(180 * a / R % 360 * 1e3) / 1e3 }, b.snapTo = function(a, c, d) { if (d = b.is(d, "finite") ? d : 10, b.is(a, U)) { for (var e = a.length; e--;)
                if (P(a[e] - c) <= d) return a[e] } else { a = +a; var f = c % a; if (d > f) return c - f; if (f > a - d) return c - f + a } return c };
    b.createUUID = function(a, b) { return function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase() } }(/[xy]/g, function(a) { var b = 16 * M.random() | 0,
            c = "x" == a ? b : 3 & b | 8; return c.toString(16) });
    b.setWindow = function(c) { a("raphael.setWindow", b, z.win, c), z.win = c, z.doc = z.win.document, b._engine.initWin && b._engine.initWin(z.win) };
    var sa = function(a) { if (b.vml) { var c, d = /^\s+|\s+$/g; try { var f = new ActiveXObject("htmlfile");
                    f.write("<body>"), f.close(), c = f.body } catch (g) { c = createPopup().document.body } var h = c.createTextRange();
                sa = e(function(a) { try { c.style.color = H(a).replace(d, F); var b = h.queryCommandValue("ForeColor"); return b = (255 & b) << 16 | 65280 & b | (16711680 & b) >>> 16, "#" + ("000000" + b.toString(16)).slice(-6) } catch (e) { return "none" } }) } else { var i = z.doc.createElement("i");
                i.title = "Raphaël Colour Picker", i.style.display = "none", z.doc.body.appendChild(i), sa = e(function(a) { return i.style.color = a, z.doc.defaultView.getComputedStyle(i, F).getPropertyValue("color") }) } return sa(a) },
        ta = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
        ua = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
        va = function() { return this.hex },
        wa = function(a, c, d) { if (null == c && b.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, c = a.g, a = a.r), null == c && b.is(a, T)) { var e = b.getRGB(a);
                a = e.r, c = e.g, d = e.b } return (a > 1 || c > 1 || d > 1) && (a /= 255, c /= 255, d /= 255), [a, c, d] },
        xa = function(a, c, d, e) { a *= 255, c *= 255, d *= 255; var f = { r: a, g: c, b: d, hex: b.rgb(a, c, d), toString: va }; return b.is(e, "finite") && (f.opacity = e), f };
    b.color = function(a) { var c; return b.is(a, "object") && "h" in a && "s" in a && "b" in a ? (c = b.hsb2rgb(a), a.r = c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : b.is(a, "object") && "h" in a && "s" in a && "l" in a ? (c = b.hsl2rgb(a), a.r = c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : (b.is(a, "string") && (a = b.getRGB(a)), b.is(a, "object") && "r" in a && "g" in a && "b" in a ? (c = b.rgb2hsl(a), a.h = c.h, a.s = c.s, a.l = c.l, c = b.rgb2hsb(a), a.v = c.b) : (a = { hex: "none" }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = va, a }, b.hsb2rgb = function(a, b, c, d) { this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360; var e, f, g, h, i; return a = a % 360 / 60, i = c * b, h = i * (1 - P(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xa(e, f, g, d) }, b.hsl2rgb = function(a, b, c, d) { this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360; var e, f, g, h, i; return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - P(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xa(e, f, g, d) }, b.rgb2hsb = function(a, b, c) { c = wa(a, b, c), a = c[0], b = c[1], c = c[2]; var d, e, f, g; return f = N(a, b, c), g = f - O(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, { h: d, s: e, b: f, toString: ta } }, b.rgb2hsl = function(a, b, c) { c = wa(a, b, c), a = c[0], b = c[1], c = c[2]; var d, e, f, g, h, i; return g = N(a, b, c), h = O(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), { h: d, s: e, l: f, toString: ua } }, b._path2string = function() { return this.join(",").replace(fa, "$1") };
    b._preload = function(a, b) { var c = z.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() { b.call(this), this.onload = null, z.doc.body.removeChild(this) }, c.onerror = function() { z.doc.body.removeChild(this) }, z.doc.body.appendChild(c), c.src = a };
    b.getRGB = e(function(a) { if (!a || (a = H(a)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: f }; if ("none" == a) return { r: -1, g: -1, b: -1, hex: "none", toString: f };!(ea[y](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = sa(a)); var c, d, e, g, h, i, j = a.match(W); return j ? (j[2] && (e = _(j[2].substring(5), 16), d = _(j[2].substring(3, 5), 16), c = _(j[2].substring(1, 3), 16)), j[3] && (e = _((h = j[3].charAt(3)) + h, 16), d = _((h = j[3].charAt(2)) + h, 16), c = _((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (c /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), b.hsb2rgb(c, d, e, g)) : j[6] ? (i = j[6][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (c /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), b.hsl2rgb(c, d, e, g)) : (j = { r: c, g: d, b: e, toString: f }, j.hex = "#" + (16777216 | e | d << 8 | c << 16).toString(16).slice(1), b.is(g, "finite") && (j.opacity = g), j)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: f } }, b), b.hsb = e(function(a, c, d) { return b.hsb2rgb(a, c, d).hex }), b.hsl = e(function(a, c, d) { return b.hsl2rgb(a, c, d).hex }), b.rgb = e(function(a, b, c) {
        function d(a) { return a + .5 | 0 } return "#" + (16777216 | d(c) | d(b) << 8 | d(a) << 16).toString(16).slice(1) }), b.getColor = function(a) { var b = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: a || .75 },
            c = this.hsb2rgb(b.h, b.s, b.b); return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: b.b })), c.hex }, b.getColor.reset = function() { delete this.start }, b.parsePathString = function(a) { if (!a) return null; var c = ya(a); if (c.arr) return Aa(c.arr); var d = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
            e = []; return b.is(a, U) && b.is(a[0], U) && (e = Aa(a)), e.length || H(a).replace(ga, function(a, b, c) { var f = [],
                g = b.toLowerCase(); if (c.replace(ia, function(a, b) { b && f.push(+b) }), "m" == g && f.length > 2 && (e.push([b][D](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][D](f));
            else
                for (; f.length >= d[g] && (e.push([b][D](f.splice(0, d[g]))), d[g]);); }), e.toString = b._path2string, c.arr = Aa(e), e }, b.parseTransformString = e(function(a) { if (!a) return null; var c = []; return b.is(a, U) && b.is(a[0], U) && (c = Aa(a)), c.length || H(a).replace(ha, function(a, b, d) {
            { var e = [];
                L.call(b) }
            d.replace(ia, function(a, b) { b && e.push(+b) }), c.push([b][D](e)) }), c.toString = b._path2string, c });
    var ya = function(a) { var b = ya.ps = ya.ps || {}; return b[a] ? b[a].sleep = 100 : b[a] = { sleep: 100 }, setTimeout(function() { for (var c in b) b[y](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]) }), b[a] };
    b.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) { var j = 1 - i,
            k = Q(j, 3),
            l = Q(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * M.atan2(q - s, r - t) / R; return (q > s || t > r) && (y += 180), { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y } }, b.bezierBBox = function(a, c, d, e, f, g, h, i) { b.is(a, "array") || (a = [a, c, d, e, f, g, h, i]); var j = Ha.apply(null, a); return { x: j.min.x, y: j.min.y, x2: j.max.x, y2: j.max.y, width: j.max.x - j.min.x, height: j.max.y - j.min.y } }, b.isPointInsideBBox = function(a, b, c) { return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2 }, b.isBBoxIntersect = function(a, c) { var d = b.isPointInsideBBox; return d(c, a.x, a.y) || d(c, a.x2, a.y) || d(c, a.x, a.y2) || d(c, a.x2, a.y2) || d(a, c.x, c.y) || d(a, c.x2, c.y) || d(a, c.x, c.y2) || d(a, c.x2, c.y2) || (a.x < c.x2 && a.x > c.x || c.x < a.x2 && c.x > a.x) && (a.y < c.y2 && a.y > c.y || c.y < a.y2 && c.y > a.y) }, b.pathIntersection = function(a, b) { return m(a, b) }, b.pathIntersectionNumber = function(a, b) { return m(a, b, 1) }, b.isPointInsidePath = function(a, c, d) { var e = b.pathBBox(a); return b.isPointInsideBBox(e, c, d) && m(a, [
            ["M", c, d],
            ["H", e.x2 + 10]
        ], 1) % 2 == 1 }, b._removedFactory = function(b) { return function() { a("raphael.log", null, "Raphaël: you are calling to method “" + b + "” of removed object", b) } };
    var za = b.pathBBox = function(a) { var b = ya(a); if (b.bbox) return c(b.bbox); if (!a) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
            a = Ia(a); for (var d, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
                if (d = a[i], "M" == d[0]) e = d[1], f = d[2], g.push(e), h.push(f);
                else { var k = Ha(e, f, d[1], d[2], d[3], d[4], d[5], d[6]);
                    g = g[D](k.min.x, k.max.x), h = h[D](k.min.y, k.max.y), e = d[5], f = d[6] }
            var l = O[C](0, g),
                m = O[C](0, h),
                n = N[C](0, g),
                o = N[C](0, h),
                p = n - l,
                q = o - m,
                r = { x: l, y: m, x2: n, y2: o, width: p, height: q, cx: l + p / 2, cy: m + q / 2 }; return b.bbox = c(r), r },
        Aa = function(a) { var d = c(a); return d.toString = b._path2string, d },
        Ba = b._pathToRelative = function(a) { var c = ya(a); if (c.rel) return Aa(c.rel);
            b.is(a, U) && b.is(a && a[0], U) || (a = b.parsePathString(a)); var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0; "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f])); for (var j = i, k = a.length; k > j; j++) { var l = d[j] = [],
                    m = a[j]; if (m[0] != L.call(m[0])) switch (l[0] = L.call(m[0]), l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3); break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3); break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3) } else { l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f); for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p] }
                var r = d[j].length; switch (d[j][0]) {
                    case "z":
                        e = g, f = h; break;
                    case "h":
                        e += +d[j][r - 1]; break;
                    case "v":
                        f += +d[j][r - 1]; break;
                    default:
                        e += +d[j][r - 2], f += +d[j][r - 1] } } return d.toString = b._path2string, c.rel = Aa(d), d },
        Ca = b._pathToAbsolute = function(a) { var c = ya(a); if (c.abs) return Aa(c.abs); if (b.is(a, U) && b.is(a && a[0], U) || (a = b.parsePathString(a)), !a || !a.length) return [
                ["M", 0, 0]
            ]; var d = [],
                e = 0,
                f = 0,
                h = 0,
                i = 0,
                j = 0; "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], h = e, i = f, j++, d[0] = ["M", e, f]); for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) { if (d.push(k = []), l = a[n], l[0] != aa.call(l[0])) switch (k[0] = aa.call(l[0]), k[0]) {
                        case "A":
                            k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f); break;
                        case "V":
                            k[1] = +l[1] + f; break;
                        case "H":
                            k[1] = +l[1] + e; break;
                        case "R":
                            for (var p = [e, f][D](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                            d.pop(), d = d[D](g(p, m)); break;
                        case "M":
                            h = +l[1] + e, i = +l[2] + f;
                        default:
                            for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f) } else if ("R" == l[0]) p = [e, f][D](l.slice(1)), d.pop(), d = d[D](g(p, m)), k = ["R"][D](l.slice(-2));
                    else
                        for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                switch (k[0]) {
                    case "Z":
                        e = h, f = i; break;
                    case "H":
                        e = k[1]; break;
                    case "V":
                        f = k[1]; break;
                    case "M":
                        h = k[k.length - 2], i = k[k.length - 1];
                    default:
                        e = k[k.length - 2], f = k[k.length - 1] } } return d.toString = b._path2string, c.abs = Aa(d), d },
        Da = function(a, b, c, d) { return [a, b, c, d, c, d] },
        Ea = function(a, b, c, d, e, f) { var g = 1 / 3,
                h = 2 / 3; return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f] },
        Fa = function(a, b, c, d, f, g, h, i, j, k) { var l, m = 120 * R / 180,
                n = R / 180 * (+f || 0),
                o = [],
                p = e(function(a, b, c) { var d = a * M.cos(c) - b * M.sin(c),
                        e = a * M.sin(c) + b * M.cos(c); return { x: d, y: e } }); if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else { l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y; var q = (M.cos(R / 180 * f), M.sin(R / 180 * f), (a - i) / 2),
                    r = (b - j) / 2,
                    s = q * q / (c * c) + r * r / (d * d);
                s > 1 && (s = M.sqrt(s), c = s * c, d = s * d); var t = c * c,
                    u = d * d,
                    v = (g == h ? -1 : 1) * M.sqrt(P((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * c * r / d + (a + i) / 2,
                    x = v * -d * q / c + (b + j) / 2,
                    y = M.asin(((b - x) / d).toFixed(9)),
                    z = M.asin(((j - x) / d).toFixed(9));
                y = w > a ? R - y : y, z = w > i ? R - z : z, 0 > y && (y = 2 * R + y), 0 > z && (z = 2 * R + z), h && y > z && (y -= 2 * R), !h && z > y && (z -= 2 * R) } var A = z - y; if (P(A) > m) { var B = z,
                    C = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + c * M.cos(z), j = x + d * M.sin(z), o = Fa(i, j, c, d, f, 0, h, C, E, [z, B, w, x]) }
            A = z - y; var F = M.cos(y),
                G = M.sin(y),
                H = M.cos(z),
                J = M.sin(z),
                K = M.tan(A / 4),
                L = 4 / 3 * c * K,
                N = 4 / 3 * d * K,
                O = [a, b],
                Q = [a + L * G, b - N * F],
                S = [i + L * J, j - N * H],
                T = [i, j]; if (Q[0] = 2 * O[0] - Q[0], Q[1] = 2 * O[1] - Q[1], k) return [Q, S, T][D](o);
            o = [Q, S, T][D](o).join()[I](","); for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x; return U },
        Ga = function(a, b, c, d, e, f, g, h, i) { var j = 1 - i; return { x: Q(j, 3) * a + 3 * Q(j, 2) * i * c + 3 * j * i * i * e + Q(i, 3) * g, y: Q(j, 3) * b + 3 * Q(j, 2) * i * d + 3 * j * i * i * f + Q(i, 3) * h } },
        Ha = e(function(a, b, c, d, e, f, g, h) { var i, j = e - 2 * c + a - (g - 2 * e + c),
                k = 2 * (c - a) - 2 * (e - c),
                l = a - c,
                m = (-k + M.sqrt(k * k - 4 * j * l)) / 2 / j,
                n = (-k - M.sqrt(k * k - 4 * j * l)) / 2 / j,
                o = [b, h],
                p = [a, g]; return P(m) > "1e12" && (m = .5), P(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ga(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ga(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + M.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - M.sqrt(k * k - 4 * j * l)) / 2 / j, P(m) > "1e12" && (m = .5), P(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ga(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ga(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), { min: { x: O[C](0, p), y: O[C](0, o) }, max: { x: N[C](0, p), y: N[C](0, o) } } }),
        Ia = b._path2curve = e(function(a, b) { var c = !b && ya(a); if (!b && c.curve) return Aa(c.curve); for (var d = Ca(a), e = b && Ca(b), f = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, g = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, h = (function(a, b, c) { var d, e, f = { T: 1, Q: 1 }; if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y]; switch (!(a[0] in f) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2]; break;
                        case "A":
                            a = ["C"][D](Fa[C](0, [b.x, b.y][D](a.slice(1)))); break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][D](a.slice(1)); break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][D](Ea(b.x, b.y, b.qx, b.qy, a[1], a[2])); break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"][D](Ea(b.x, b.y, a[1], a[2], a[3], a[4])); break;
                        case "L":
                            a = ["C"][D](Da(b.x, b.y, a[1], a[2])); break;
                        case "H":
                            a = ["C"][D](Da(b.x, b.y, a[1], b.y)); break;
                        case "V":
                            a = ["C"][D](Da(b.x, b.y, b.x, a[1])); break;
                        case "Z":
                            a = ["C"][D](Da(b.x, b.y, b.X, b.Y)) } return a }), i = function(a, b) { if (a[b].length > 7) { a[b].shift(); for (var c = a[b]; c.length;) k[b] = "A", e && (l[b] = "A"), a.splice(b++, 0, ["C"][D](c.splice(0, 6)));
                        a.splice(b, 1), p = N(d.length, e && e.length || 0) } }, j = function(a, b, c, f, g) { a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], p = N(d.length, e && e.length || 0)) }, k = [], l = [], m = "", n = "", o = 0, p = N(d.length, e && e.length || 0); p > o; o++) { d[o] && (m = d[o][0]), "C" != m && (k[o] = m, o && (n = k[o - 1])), d[o] = h(d[o], f, n), "A" != k[o] && "C" == m && (k[o] = "C"), i(d, o), e && (e[o] && (m = e[o][0]), "C" != m && (l[o] = m, o && (n = l[o - 1])), e[o] = h(e[o], g, n), "A" != l[o] && "C" == m && (l[o] = "C"), i(e, o)), j(d, e, f, g, o), j(e, d, g, f, o); var q = d[o],
                    r = e && e[o],
                    s = q.length,
                    t = e && r.length;
                f.x = q[s - 2], f.y = q[s - 1], f.bx = $(q[s - 4]) || f.x, f.by = $(q[s - 3]) || f.y, g.bx = e && ($(r[t - 4]) || g.x), g.by = e && ($(r[t - 3]) || g.y), g.x = e && r[t - 2], g.y = e && r[t - 1] } return e || (c.curve = Aa(d)), e ? [d, e] : d }, null, Aa),
        Ja = (b._parseDots = e(function(a) { for (var c = [], d = 0, e = a.length; e > d; d++) { var f = {},
                    g = a[d].match(/^([^:]*):?([\d\.]*)/); if (f.color = b.getRGB(g[1]), f.color.error) return null;
                f.opacity = f.color.opacity, f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f) } for (d = 1, e = c.length - 1; e > d; d++)
                if (!c[d].offset) { for (var h = $(c[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                        if (c[j].offset) { i = c[j].offset; break }
                    i || (i = 100, j = e), i = $(i); for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, c[d].offset = h + "%" }
            return c }), b._tear = function(a, b) { a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next) }),
        Ka = (b._tofront = function(a, b) { b.top !== a && (Ja(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a) }, b._toback = function(a, b) { b.bottom !== a && (Ja(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a) }, b._insertafter = function(a, b, c) { Ja(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a }, b._insertbefore = function(a, b, c) { Ja(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b }, b.toMatrix = function(a, b) { var c = za(a),
                d = { _: { transform: F }, getBBox: function() { return c } }; return La(d, b), d.matrix }),
        La = (b.transformPath = function(a, b) { return pa(a, Ka(a, b)) }, b._extractTransform = function(a, c) { if (null == c) return a._.transform;
            c = H(c).replace(/\.{3}|\u2026/g, a._.transform || F); var d = b.parseTransformString(c),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new n; if (j.transform = d || [], d)
                for (var l = 0, m = d.length; m > l; l++) { var o, p, q, r, s, t = d[l],
                        u = t.length,
                        v = H(t[0]).toLowerCase(),
                        w = t[0] != v,
                        x = w ? k.invert() : 0; "t" == v && 3 == u ? w ? (o = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - o, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1 }),
        Ma = function(a) { var b = a[0]; switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1] } },
        Na = b._equaliseTransform = function(a, c) {
            c = H(c).replace(/\.{3}|\u2026/g, a), a = b.parseTransformString(a) || [], c = b.parseTransformString(c) || [];
            for (var d, e, f, g, h = N(a.length, c.length), i = [], j = [], k = 0; h > k; k++) { if (f = a[k] || Ma(c[k]), g = c[k] || Ma(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return; for (i[k] = [], j[k] = [], d = 0, e = N(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d]) }
            return { from: i, to: j }
        };
    b._getContainer = function(a, c, d, e) { var f; return f = null != e || b.is(a, "object") ? a : z.doc.getElementById(a), null != f ? f.tagName ? null == c ? { container: f, width: f.style.pixelWidth || f.offsetWidth, height: f.style.pixelHeight || f.offsetHeight } : { container: f, width: c, height: d } : { container: 1, x: a, y: c, width: d, height: e } : void 0 }, b.pathToRelative = Ba, b._engine = {}, b.path2curve = Ia, b.matrix = function(a, b, c, d, e, f) { return new n(a, b, c, d, e, f) },
        function(a) {
            function c(a) { return a[0] * a[0] + a[1] * a[1] }

            function d(a) { var b = M.sqrt(c(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b) }
            a.add = function(a, b, c, d, e, f) { var g, h, i, j, k = [
                        [],
                        [],
                        []
                    ],
                    l = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    m = [
                        [a, c, e],
                        [b, d, f],
                        [0, 0, 1]
                    ]; for (a && a instanceof n && (m = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), g = 0; 3 > g; g++)
                    for (h = 0; 3 > h; h++) { for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                        k[g][h] = j }
                this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2] }, a.invert = function() { var a = this,
                    b = a.a * a.d - a.b * a.c; return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b) }, a.clone = function() { return new n(this.a, this.b, this.c, this.d, this.e, this.f) }, a.translate = function(a, b) { this.add(1, 0, 0, 1, a, b) }, a.scale = function(a, b, c, d) { null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d) }, a.rotate = function(a, c, d) { a = b.rad(a), c = c || 0, d = d || 0; var e = +M.cos(a).toFixed(9),
                    f = +M.sin(a).toFixed(9);
                this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d) }, a.x = function(a, b) { return a * this.a + b * this.c + this.e }, a.y = function(a, b) { return a * this.b + b * this.d + this.f }, a.get = function(a) { return +this[H.fromCharCode(97 + a)].toFixed(4) }, a.toString = function() { return b.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, a.toFilter = function() { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, a.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, a.split = function() { var a = {};
                a.dx = this.e, a.dy = this.f; var e = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                a.scalex = M.sqrt(c(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = M.sqrt(c(e[1])), d(e[1]), a.shear /= a.scaley; var f = -e[0][1],
                    g = e[1][1]; return 0 > g ? (a.rotate = b.deg(M.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = b.deg(M.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a }, a.toTransformString = function(a) { var b = a || this[I](); return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : F) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : F) + (b.rotate ? "r" + [b.rotate, 0, 0] : F)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] } }(n.prototype);
    for (var Oa = function() { this.returnValue = !1 }, Pa = function() { return this.originalEvent.preventDefault() }, Qa = function() { this.cancelBubble = !0 }, Ra = function() { return this.originalEvent.stopPropagation() }, Sa = function(a) { var b = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                c = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft; return { x: a.clientX + c, y: a.clientY + b } }, Ta = function() { return z.doc.addEventListener ? function(a, b, c, d) { var e = function(a) { var b = Sa(a); return c.call(d, a, b.x, b.y) }; if (a.addEventListener(b, e, !1), E && K[b]) { var f = function(b) { for (var e = Sa(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                            if (b.targetTouches[g].target == a) { b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Pa, b.stopPropagation = Ra; break }
                        return c.call(d, b, e.x, e.y) };
                    a.addEventListener(K[b], f, !1) } return function() { return a.removeEventListener(b, e, !1), E && K[b] && a.removeEventListener(K[b], f, !1), !0 } } : z.doc.attachEvent ? function(a, b, c, d) { var e = function(a) { a = a || z.win.event; var b = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                        e = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b; return a.preventDefault = a.preventDefault || Oa, a.stopPropagation = a.stopPropagation || Qa, c.call(d, a, f, g) };
                a.attachEvent("on" + b, e); var f = function() { return a.detachEvent("on" + b, e), !0 }; return f } : void 0 }(), Ua = [], Va = function(b) { for (var c, d = b.clientX, e = b.clientY, f = z.doc.documentElement.scrollTop || z.doc.body.scrollTop, g = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft, h = Ua.length; h--;) { if (c = Ua[h], E && b.touches) { for (var i, j = b.touches.length; j--;)
                        if (i = b.touches[j], i.identifier == c.el._drag.id) { d = i.clientX, e = i.clientY, (b.originalEvent ? b.originalEvent : b).preventDefault(); break } } else b.preventDefault(); var k, l = c.el.node,
                    m = l.nextSibling,
                    n = l.parentNode,
                    o = l.style.display;
                z.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, z.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && a("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, a("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, b) } }, Wa = function(c) { b.unmousemove(Va).unmouseup(Wa); for (var d, e = Ua.length; e--;) d = Ua[e], d.el._drag = {}, a("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
            Ua = [] }, Xa = b.el = {}, Ya = J.length; Ya--;) ! function(a) { b[a] = Xa[a] = function(c, d) { return b.is(c, "function") && (this.events = this.events || [], this.events.push({ name: a, f: c, unbind: Ta(this.shape || this.node || z.doc, a, c, d || this) })), this }, b["un" + a] = Xa["un" + a] = function(c) { for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !b.is(c, "undefined") && d[e].f != c || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events); return this } }(J[Ya]);
    Xa.data = function(c, d) { var e = ja[this.id] = ja[this.id] || {}; if (0 == arguments.length) return e; if (1 == arguments.length) { if (b.is(c, "object")) { for (var f in c) c[y](f) && this.data(f, c[f]); return this } return a("raphael.data.get." + this.id, this, e[c], c), e[c] } return e[c] = d, a("raphael.data.set." + this.id, this, d, c), this }, Xa.removeData = function(a) { return null == a ? ja[this.id] = {} : ja[this.id] && delete ja[this.id][a], this }, Xa.getData = function() { return c(ja[this.id] || {}) }, Xa.hover = function(a, b, c, d) { return this.mouseover(a, c).mouseout(b, d || c) }, Xa.unhover = function(a, b) { return this.unmouseover(a).unmouseout(b) };
    var Za = [];
    Xa.drag = function(c, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault(); var j = i.clientX,
                k = i.clientY,
                l = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                m = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft; if (this._drag.id = i.identifier, E && i.touches)
                for (var n, o = i.touches.length; o--;)
                    if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) { j = n.clientX, k = n.clientY; break }
            this._drag.x = j + m, this._drag.y = k + l, !Ua.length && b.mousemove(Va).mouseup(Wa), Ua.push({ el: this, move_scope: f, start_scope: g, end_scope: h }), d && a.on("raphael.drag.start." + this.id, d), c && a.on("raphael.drag.move." + this.id, c), e && a.on("raphael.drag.end." + this.id, e), a("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i) } return this._drag = {}, Za.push({ el: this, start: i }), this.mousedown(i), this }, Xa.onDragOver = function(b) { b ? a.on("raphael.drag.over." + this.id, b) : a.unbind("raphael.drag.over." + this.id) }, Xa.undrag = function() { for (var c = Za.length; c--;) Za[c].el == this && (this.unmousedown(Za[c].start), Za.splice(c, 1), a.unbind("raphael.drag.*." + this.id));!Za.length && b.unmousemove(Va).unmouseup(Wa), Ua = [] }, u.circle = function(a, c, d) { var e = b._engine.circle(this, a || 0, c || 0, d || 0); return this.__set__ && this.__set__.push(e), e }, u.rect = function(a, c, d, e, f) { var g = b._engine.rect(this, a || 0, c || 0, d || 0, e || 0, f || 0); return this.__set__ && this.__set__.push(g), g }, u.ellipse = function(a, c, d, e) { var f = b._engine.ellipse(this, a || 0, c || 0, d || 0, e || 0); return this.__set__ && this.__set__.push(f), f }, u.path = function(a) { a && !b.is(a, T) && !b.is(a[0], U) && (a += F); var c = b._engine.path(b.format[C](b, arguments), this); return this.__set__ && this.__set__.push(c), c }, u.image = function(a, c, d, e, f) { var g = b._engine.image(this, a || "about:blank", c || 0, d || 0, e || 0, f || 0); return this.__set__ && this.__set__.push(g), g }, u.text = function(a, c, d) { var e = b._engine.text(this, a || 0, c || 0, H(d)); return this.__set__ && this.__set__.push(e), e }, u.set = function(a) {!b.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length)); var c = new jb(a); return this.__set__ && this.__set__.push(c), c.paper = this, c.type = "set", c }, u.setStart = function(a) { this.__set__ = a || this.set() }, u.setFinish = function(a) { var b = this.__set__; return delete this.__set__, b }, u.getSize = function() { var a = this.canvas.parentNode; return { width: a.offsetWidth, height: a.offsetHeight } }, u.setSize = function(a, c) { return b._engine.setSize.call(this, a, c) }, u.setViewBox = function(a, c, d, e, f) { return b._engine.setViewBox.call(this, a, c, d, e, f) }, u.top = u.bottom = null, u.raphael = b;
    var $a = function(a) { var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h = b.top + (z.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i = b.left + (z.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g; return { y: h, x: i } };
    u.getElementByPoint = function(a, b) { var c = this,
            d = c.canvas,
            e = z.doc.elementFromPoint(a, b); if (z.win.opera && "svg" == e.tagName) { var f = $a(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1; var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1]) } if (!e) return null; for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode; return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null }, u.getElementsByBBox = function(a) { var c = this.set(); return this.forEach(function(d) { b.isBBoxIntersect(d.getBBox(), a) && c.push(d) }), c }, u.getById = function(a) { for (var b = this.bottom; b;) { if (b.id == a) return b;
            b = b.next } return null }, u.forEach = function(a, b) { for (var c = this.bottom; c;) { if (a.call(b, c) === !1) return this;
            c = c.next } return this }, u.getElementsByPoint = function(a, b) { var c = this.set(); return this.forEach(function(d) { d.isPointInside(a, b) && c.push(d) }), c }, Xa.isPointInside = function(a, c) { var d = this.realPath = oa[this.type](this); return this.attr("transform") && this.attr("transform").length && (d = b.transformPath(d, this.attr("transform"))), b.isPointInsidePath(d, a, c) }, Xa.getBBox = function(a) { if (this.removed) return {}; var b = this._; return a ? ((b.dirty || !b.bboxwt) && (this.realPath = oa[this.type](this), b.bboxwt = za(this.realPath), b.bboxwt.toString = o, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = oa[this.type](this)), b.bbox = za(pa(this.realPath, this.matrix)), b.bbox.toString = o, b.dirty = b.dirtyT = 0), b.bbox) }, Xa.clone = function() { if (this.removed) return null; var a = this.paper[this.type]().attr(this.attr()); return this.__set__ && this.__set__.push(a), a }, Xa.glow = function(a) { if ("text" == this.type) return null;
        a = a || {}; var b = { width: (a.width || 10) + (+this.attr("stroke-width") || 1), fill: a.fill || !1, opacity: null == a.opacity ? .5 : a.opacity, offsetx: a.offsetx || 0, offsety: a.offsety || 0, color: a.color || "#000" },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || oa[this.type](this);
        f = this.matrix ? pa(f, this.matrix) : f; for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({ stroke: b.color, fill: b.fill ? b.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(b.width / c * g).toFixed(3), opacity: +(b.opacity / c).toFixed(3) })); return e.insertBefore(this).translate(b.offsetx, b.offsety) };
    var _a = function(a, c, d, e, f, g, h, k, l) { return null == l ? i(a, c, d, e, f, g, h, k) : b.findDotsAtSegment(a, c, d, e, f, g, h, k, j(a, c, d, e, f, g, h, k, l)) },
        ab = function(a, c) { return function(d, e, f) { d = Ia(d); for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) { if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                    else { if (j = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) { if (c && !m.start) { if (k = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6]; continue } if (!a && !c) return k = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), { x: k.x, y: k.y, alpha: k.alpha } }
                        n += j, g = +i[5], h = +i[6] }
                    l += i.shift() + i } return m.end = l, k = a ? n : c ? m : b.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = { x: k.x, y: k.y, alpha: k.alpha }), k } },
        bb = ab(1),
        cb = ab(),
        db = ab(0, 1);
    b.getTotalLength = bb, b.getPointAtLength = cb, b.getSubpath = function(a, b, c) { if (this.getTotalLength(a) - c < 1e-6) return db(a, b).end; var d = db(a, c, 1); return b ? db(d, b).end : d }, Xa.getTotalLength = function() { var a = this.getPath(); if (a) return this.node.getTotalLength ? this.node.getTotalLength() : bb(a) }, Xa.getPointAtLength = function(a) { var b = this.getPath(); if (b) return cb(b, a) }, Xa.getPath = function() { var a, c = b._getPath[this.type]; if ("text" != this.type && "set" != this.type) return c && (a = c(this)), a }, Xa.getSubpath = function(a, c) { var d = this.getPath(); if (d) return b.getSubpath(d, a, c) };
    var eb = b.easing_formulas = { linear: function(a) { return a }, "<": function(a) { return Q(a, 1.7) }, ">": function(a) { return Q(a, .48) }, "<>": function(a) { var b = .48 - a / 1.04,
                c = M.sqrt(.1734 + b * b),
                d = c - b,
                e = Q(P(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = Q(P(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5; return 3 * (1 - h) * h * h + h * h * h }, backIn: function(a) { var b = 1.70158; return a * a * ((b + 1) * a - b) }, backOut: function(a) { a -= 1; var b = 1.70158; return a * a * ((b + 1) * a + b) + 1 }, elastic: function(a) { return a == !!a ? a : Q(2, -10 * a) * M.sin(2 * (a - .075) * R / .3) + 1 }, bounce: function(a) { var b, c = 7.5625,
                d = 2.75; return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b } };
    eb.easeIn = eb["ease-in"] = eb["<"], eb.easeOut = eb["ease-out"] = eb[">"], eb.easeInOut = eb["ease-in-out"] = eb["<>"], eb["back-in"] = eb.backIn, eb["back-out"] = eb.backOut;
    var fb = [],
        gb = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { setTimeout(a, 16) },
        hb = function() { for (var c = +new Date, d = 0; d < fb.length; d++) { var e = fb[d]; if (!e.el.removed && !e.paused) { var f, g, h = c - e.start,
                        i = e.ms,
                        j = e.easing,
                        k = e.from,
                        l = e.diff,
                        m = e.to,
                        n = (e.t, e.el),
                        o = {},
                        p = {}; if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && fb.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                        if (i > h) { var q = j(h / i); for (var s in k)
                                if (k[y](s)) { switch (ca[s]) {
                                        case S:
                                            f = +k[s] + q * i * l[s]; break;
                                        case "colour":
                                            f = "rgb(" + [ib(Z(k[s].r + q * i * l[s].r)), ib(Z(k[s].g + q * i * l[s].g)), ib(Z(k[s].b + q * i * l[s].b))].join(",") + ")"; break;
                                        case "path":
                                            f = []; for (var t = 0, u = k[s].length; u > t; t++) { f[t] = [k[s][t][0]]; for (var v = 1, w = k[s][t].length; w > v; v++) f[t][v] = +k[s][t][v] + q * i * l[s][t][v];
                                                f[t] = f[t].join(G) }
                                            f = f.join(G); break;
                                        case "transform":
                                            if (l[s].real)
                                                for (f = [], t = 0, u = k[s].length; u > t; t++)
                                                    for (f[t] = [k[s][t][0]], v = 1, w = k[s][t].length; w > v; v++) f[t][v] = k[s][t][v] + q * i * l[s][t][v];
                                            else { var x = function(a) { return +k[s][a] + q * i * l[s][a] };
                                                f = [
                                                    ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                ] } break;
                                        case "csv":
                                            if ("clip-rect" == s)
                                                for (f = [], t = 4; t--;) f[t] = +k[s][t] + q * i * l[s][t]; break;
                                        default:
                                            var z = [][D](k[s]); for (f = [], t = n.paper.customAttributes[s].length; t--;) f[t] = +z[t] + q * i * l[s][t] }
                                    o[s] = f }
                            n.attr(o),
                                function(b, c, d) { setTimeout(function() { a("raphael.anim.frame." + b, c, d) }) }(n.id, n, e.anim) } else { if (function(c, d, e) { setTimeout(function() { a("raphael.anim.frame." + d.id, d, e), a("raphael.anim.finish." + d.id, d, e), b.is(c, "function") && c.call(d) }) }(e.callback, n, e.anim), n.attr(m), fb.splice(d--, 1), e.repeat > 1 && !e.next) { for (g in m) m[y](g) && (p[g] = e.totalOrigin[g]);
                                e.el.attr(p), r(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1) }
                            e.next && !e.stop && r(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat) } } }
            fb.length && gb(hb) },
        ib = function(a) { return a > 255 ? 255 : 0 > a ? 0 : a };
    Xa.animateWith = function(a, c, d, e, f, g) { var h = this; if (h.removed) return g && g.call(h), h; var i = d instanceof q ? d : b.animation(d, e, f, g);
        r(i, h, i.percents[0], null, h.attr()); for (var j = 0, k = fb.length; k > j; j++)
            if (fb[j].anim == c && fb[j].el == a) { fb[k - 1].start = fb[j].start; break }
        return h }, Xa.onAnimation = function(b) { return b ? a.on("raphael.anim.frame." + this.id, b) : a.unbind("raphael.anim.frame." + this.id), this }, q.prototype.delay = function(a) { var b = new q(this.anim, this.ms); return b.times = this.times, b.del = +a || 0, b }, q.prototype.repeat = function(a) { var b = new q(this.anim, this.ms); return b.del = this.del, b.times = M.floor(N(a, 0)) || 1, b }, b.animation = function(a, c, d, e) { if (a instanceof q) return a;
        (b.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), c = +c || 0; var f, g, h = {}; for (g in a) a[y](g) && $(g) != g && $(g) + "%" != g && (f = !0, h[g] = a[g]); if (f) return d && (h.easing = d), e && (h.callback = e), new q({ 100: h }, c); if (e) { var i = 0; for (var j in a) { var k = _(j);
                a[y](j) && k > i && (i = k) }
            i += "%", !a[i].callback && (a[i].callback = e) } return new q(a, c) }, Xa.animate = function(a, c, d, e) { var f = this; if (f.removed) return e && e.call(f), f; var g = a instanceof q ? a : b.animation(a, c, d, e); return r(g, f, g.percents[0], null, f.attr()), f }, Xa.setTime = function(a, b) { return a && null != b && this.status(a, O(b, a.ms) / a.ms), this }, Xa.status = function(a, b) { var c, d, e = [],
            f = 0; if (null != b) return r(a, this, -1, O(b, 1)), this; for (c = fb.length; c > f; f++)
            if (d = fb[f], d.el.id == this.id && (!a || d.anim == a)) { if (a) return d.status;
                e.push({ anim: d.anim, status: d.status }) }
        return a ? 0 : e }, Xa.pause = function(b) { for (var c = 0; c < fb.length; c++) fb[c].el.id != this.id || b && fb[c].anim != b || a("raphael.anim.pause." + this.id, this, fb[c].anim) !== !1 && (fb[c].paused = !0); return this }, Xa.resume = function(b) { for (var c = 0; c < fb.length; c++)
            if (fb[c].el.id == this.id && (!b || fb[c].anim == b)) { var d = fb[c];
                a("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status)) }
        return this }, Xa.stop = function(b) { for (var c = 0; c < fb.length; c++) fb[c].el.id != this.id || b && fb[c].anim != b || a("raphael.anim.stop." + this.id, this, fb[c].anim) !== !1 && fb.splice(c--, 1); return this }, a.on("raphael.remove", s), a.on("raphael.clear", s), Xa.toString = function() { return "Raphaël’s object" };
    var jb = function(a) { if (this.items = [], this.length = 0, this.type = "set", a)
                for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != Xa.constructor && a[b].constructor != jb || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++) },
        kb = jb.prototype;
    kb.push = function() { for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != Xa.constructor && a.constructor != jb || (b = this.items.length, this[b] = this.items[b] = a, this.length++); return this }, kb.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, kb.forEach = function(a, b) { for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this };
    for (var lb in Xa) Xa[y](lb) && (kb[lb] = function(a) { return function() { var b = arguments; return this.forEach(function(c) { c[a][C](c, b) }) } }(lb));
    return kb.attr = function(a, c) { if (a && b.is(a, U) && b.is(a[0], "object"))
                for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
            else
                for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, c); return this }, kb.clear = function() { for (; this.length;) this.pop() }, kb.splice = function(a, b, c) { a = 0 > a ? N(this.length + a, 0) : a, b = N(0, O(this.length - a, b)); var d, e = [],
                f = [],
                g = []; for (d = 2; d < arguments.length; d++) g.push(arguments[d]); for (d = 0; b > d; d++) f.push(this[a + d]); for (; d < this.length - a; d++) e.push(this[a + d]); var h = g.length; for (d = 0; d < h + e.length; d++) this.items[a + d] = this[a + d] = h > d ? g[d] : e[d - h]; for (d = this.items.length = this.length -= b - h; this[d];) delete this[d++]; return new jb(f) }, kb.exclude = function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0 }, kb.animate = function(a, c, d, e) {
            (b.is(d, "function") || !d) && (e = d || null); var f, g, h = this.items.length,
                i = h,
                j = this; if (!h) return this;
            e && (g = function() {!--h && e.call(j) }), d = b.is(d, T) ? d : g; var k = b.animation(a, c, d, g); for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--; return this }, kb.insertAfter = function(a) { for (var b = this.items.length; b--;) this.items[b].insertAfter(a); return this }, kb.getBBox = function() { for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                if (!this.items[e].removed) { var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height) }
            return a = O[C](0, a), b = O[C](0, b), c = N[C](0, c), d = N[C](0, d), { x: a, y: b, x2: c, y2: d, width: c - a, height: d - b } }, kb.clone = function(a) { a = this.paper.set(); for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone()); return a }, kb.toString = function() { return "Raphaël‘s set" }, kb.glow = function(a) { var b = this.paper.set(); return this.forEach(function(c, d) { var e = c.glow(a);
                null != e && e.forEach(function(a, c) { b.push(a) }) }), b }, kb.isPointInside = function(a, b) { var c = !1; return this.forEach(function(d) { return d.isPointInside(a, b) ? (c = !0, !1) : void 0 }), c }, b.registerFont = function(a) { if (!a.face) return a;
            this.fonts = this.fonts || {}; var b = { w: a.w, face: {}, glyphs: {} },
                c = a.face["font-family"]; for (var d in a.face) a.face[y](d) && (b.face[d] = a.face[d]); if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) { b.face["units-per-em"] = _(a.face["units-per-em"], 10); for (var e in a.glyphs)
                    if (a.glyphs[y](e)) { var f = a.glyphs[e]; if (b.glyphs[e] = { w: f.w, k: {}, d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[a] || "M" }) + "z" }, f.k)
                            for (var g in f.k) f[y](g) && (b.glyphs[e].k[g] = f.k[g]) } } return a }, u.getFont = function(a, c, d, e) { if (e = e || "normal", d = d || "normal", c = +c || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[c] || 400, b.fonts) { var f = b.fonts[a]; if (!f) { var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, F) + "(\\s|$)", "i"); for (var h in b.fonts)
                        if (b.fonts[y](h) && g.test(h)) { f = b.fonts[h]; break } } var i; if (f)
                    for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != c || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++); return i } }, u.print = function(a, c, d, e, f, g, h, i) { g = g || "middle", h = N(O(h || 0, 1), -1), i = N(O(i || 1, 3), 1); var j, k = H(d)[I](F),
                l = 0,
                m = 0,
                n = F; if (b.is(e, "string") && (e = this.getFont(e)), e) { j = (f || 16) / e.face["units-per-em"]; for (var o = e.face.bbox[I](v), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) { if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                    else { var w = m && e.glyphs[k[t - 1]] || {},
                            x = e.glyphs[k[t]];
                        l += m ? (w.w || e.w) + (w.k && w.k[k[t]] || 0) + e.w * h : 0, m = 1 }
                    x && x.d && (n += b.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (c - s) / j])) } } return this.path(n).attr({ fill: "#000", stroke: "none" }) }, u.add = function(a) { if (b.is(a, "array"))
                for (var c, d = this.set(), e = 0, f = a.length; f > e; e++) c = a[e] || {}, w[y](c.type) && d.push(this[c.type]().attr(c)); return d }, b.format = function(a, c) { var d = b.is(c, U) ? [0][D](c) : arguments; return a && b.is(a, T) && d.length - 1 && (a = a.replace(x, function(a, b) { return null == d[++b] ? F : d[b] })), a || F }, b.fullfill = function() { var a = /\{([^\}]+)\}/g,
                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function(a, c, d) { var e = d; return c.replace(b, function(a, b, c, d, f) { b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e())) }), e = (null == e || e == d ? a : e) + "" }; return function(b, d) { return String(b).replace(a, function(a, b) { return c(a, b, d) }) } }(), b.ninja = function() { return A.was ? z.win.Raphael = A.is : delete Raphael, b }, b.st = kb, a.on("raphael.DOMload", function() { t = !0 }),
        function(a, c, d) {
            function e() { /in/.test(a.readyState) ? setTimeout(e, 9) : b.eve("raphael.DOMload") }
            null == a.readyState && a.addEventListener && (a.addEventListener(c, d = function() { a.removeEventListener(c, d, !1), a.readyState = "complete" }, !1), a.readyState = "loading"), e() }(document, "DOMContentLoaded"), b
}),
function(a, b) { "function" == typeof define && define.amd ? define("raphael.svg", ["raphael.core"], function(a) { return b(a) }) : b("object" == typeof exports ? require("./raphael.core") : a.Raphael) }(this, function(a) {
    if (!a || a.svg) {
        var b = "hasOwnProperty",
            c = String,
            d = parseFloat,
            e = parseInt,
            f = Math,
            g = f.max,
            h = f.abs,
            i = f.pow,
            j = /[, ]+/,
            k = a.eve,
            l = "",
            m = " ",
            n = "http://www.w3.org/1999/xlink",
            o = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
            p = {};
        a.toString = function() { return "Your browser supports SVG.\nYou are running Raphaël " + this.version };
        var q = function(d, e) { if (e) { "string" == typeof d && (d = q(d)); for (var f in e) e[b](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f]))) } else d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)"); return d },
            r = function(b, e) { var j = "linear",
                    k = b.id + e,
                    m = .5,
                    n = .5,
                    o = b.node,
                    p = b.paper,
                    r = o.style,
                    s = a._g.doc.getElementById(k); if (!s) { if (e = c(e).replace(a._radial_gradient, function(a, b, c) { if (j = "radial", b && c) { m = d(b), n = d(c); var e = 2 * (n > .5) - 1;
                                i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e) } return l }), e = e.split(/\s*\-\s*/), "linear" == j) { var t = e.shift(); if (t = -d(t), isNaN(t)) return null; var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))],
                            v = 1 / (g(h(u[2]), h(u[3])) || 1);
                        u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0) } var w = a._parseDots(e); if (!w) return null; if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient), !b.gradient) { s = q(j + "Gradient", { id: k }), b.gradient = s, q(s, "radial" == j ? { fx: m, fy: n } : { x1: u[0], y1: u[1], x2: u[2], y2: u[3], gradientTransform: b.matrix.invert() }), p.defs.appendChild(s); for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", { offset: w[x].offset ? w[x].offset : x ? "100%" : "0%", "stop-color": w[x].color || "#fff", "stop-opacity": isFinite(w[x].opacity) ? w[x].opacity : 1 })) } } return q(o, { fill: "url('" + document.location.origin + document.location.pathname + "#" + k + "')", opacity: 1, "fill-opacity": 1 }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1 },
            s = function(a) { var b = a.getBBox(1);
                q(a.pattern, { patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")" }) },
            t = function(d, e, f) { if ("path" == d.type) { for (var g, h, i, j, k, m = c(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            w = m[v]; break;
                        case "wide":
                            y = 5; break;
                        case "narrow":
                            y = 2; break;
                        case "long":
                            x = 5; break;
                        case "short":
                            x = 2 }
                    if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = { fill: "none", stroke: t.stroke }) : (j = i = x / 2, k = { fill: t.stroke, stroke: "none" }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) { var A = "raphael-marker-" + w,
                            B = "raphael-marker-" + r + w + x + y + "-obj" + d.id;
                        a._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), { "stroke-linecap": "round", d: o[w], id: A })), p[A] = 1); var C, D = a._g.doc.getElementById(B);
                        D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), { id: B, markerHeight: y, markerWidth: x, orient: "auto", refX: j, refY: y / 2 }), C = q(q("use"), { "xlink:href": "#" + A, transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")", "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4) }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k); var E = i * ("diamond" != w && "oval" != w);
                        f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - E * u) : (g = E * u, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = a.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e } else f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - g) : (g = 0, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, { d: a.getSubpath(t.path, g, h) }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"]; for (k in p)
                        if (p[b](k) && !p[k]) { var F = a._g.doc.getElementById(k);
                            F && F.parentNode.removeChild(F) } } },
            u = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
            v = function(a, b, d) { if (b = u[c(b).toLowerCase()]) { for (var e = a.attrs["stroke-width"] || "1", f = { round: e, square: e, butt: 0 }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = b.length; h--;) g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
                    q(a.node, { "stroke-dasharray": g.join(",") }) } else q(a.node, { "stroke-dasharray": "none" }) },
            w = function(d, f) {
                var i = d.node,
                    k = d.attrs,
                    m = i.style.visibility;
                i.style.visibility = "hidden";
                for (var o in f)
                    if (f[b](o)) {
                        if (!a._availableAttrs[b](o)) continue;
                        var p = f[o];
                        switch (k[o] = p, o) {
                            case "blur":
                                d.blur(p);
                                break;
                            case "title":
                                var u = i.getElementsByTagName("title");
                                if (u.length && (u = u[0])) u.firstChild.nodeValue = p;
                                else { u = q("title"); var w = a._g.doc.createTextNode(p);
                                    u.appendChild(w), i.appendChild(u) }
                                break;
                            case "href":
                            case "target":
                                var x = i.parentNode;
                                if ("a" != x.tagName.toLowerCase()) { var z = q("a");
                                    x.insertBefore(z, i), z.appendChild(i), x = z }
                                "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                break;
                            case "cursor":
                                i.style.cursor = p;
                                break;
                            case "transform":
                                d.transform(p);
                                break;
                            case "arrow-start":
                                t(d, p);
                                break;
                            case "arrow-end":
                                t(d, p, 1);
                                break;
                            case "clip-rect":
                                var A = c(p).split(j);
                                if (4 == A.length) { d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode); var B = q("clipPath"),
                                        C = q("rect");
                                    B.id = a.createUUID(), q(C, { x: A[0], y: A[1], width: A[2], height: A[3] }), B.appendChild(C), d.paper.defs.appendChild(B), q(i, { "clip-path": "url(#" + B.id + ")" }), d.clip = C }
                                if (!p) { var D = i.getAttribute("clip-path"); if (D) { var E = a._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g, l));
                                        E && E.parentNode.removeChild(E), q(i, { "clip-path": l }), delete d.clip } }
                                break;
                            case "path":
                                "path" == d.type && (q(i, { d: p ? k.path = a._pathToAbsolute(p) : "M0,0" }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                break;
                            case "width":
                                if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                o = "x", p = k.x;
                            case "x":
                                k.fx && (p = -k.x - (k.width || 0));
                            case "rx":
                                if ("rx" == o && "rect" == d.type) break;
                            case "cx":
                                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                break;
                            case "height":
                                if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                o = "y", p = k.y;
                            case "y":
                                k.fy && (p = -k.y - (k.height || 0));
                            case "ry":
                                if ("ry" == o && "rect" == d.type) break;
                            case "cy":
                                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                break;
                            case "r":
                                "rect" == d.type ? q(i, { rx: p, ry: p }) : i.setAttribute(o, p), d._.dirty = 1;
                                break;
                            case "src":
                                "image" == d.type && i.setAttributeNS(n, "href", p);
                                break;
                            case "stroke-width":
                                (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                break;
                            case "stroke-dasharray":
                                v(d, p, f);
                                break;
                            case "fill":
                                var F = c(p).match(a._ISURL);
                                if (F) { B = q("pattern"); var G = q("image");
                                    B.id = a.createUUID(), q(B, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), q(G, { x: 0, y: 0, "xlink:href": F[1] }), B.appendChild(G),
                                        function(b) { a._preload(F[1], function() { var a = this.offsetWidth,
                                                    c = this.offsetHeight;
                                                q(b, { width: a, height: c }), q(G, { width: a, height: c }) }) }(B), d.paper.defs.appendChild(B), q(i, { fill: "url(#" + B.id + ")" }), d.pattern = B, d.pattern && s(d); break }
                                var H = a.getRGB(p);
                                if (H.error) { if (("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p)) { if ("opacity" in k || "fill-opacity" in k) { var I = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)); if (I) { var J = I.getElementsByTagName("stop");
                                                q(J[J.length - 1], { "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1) }) } }
                                        k.gradient = p, k.fill = "none"; break } } else delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, { opacity: k.opacity }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, { "fill-opacity": k["fill-opacity"] });
                                H[b]("opacity") && q(i, { "fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity });
                            case "stroke":
                                H = a.getRGB(p), i.setAttribute(o, H.hex), "stroke" == o && H[b]("opacity") && q(i, { "stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                break;
                            case "gradient":
                                ("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p);

                                break;
                            case "opacity":
                                k.gradient && !k[b]("stroke-opacity") && q(i, { "stroke-opacity": p > 1 ? p / 100 : p });
                            case "fill-opacity":
                                if (k.gradient) { I = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), I && (J = I.getElementsByTagName("stop"), q(J[J.length - 1], { "stop-opacity": p })); break }
                            default:
                                "font-size" == o && (p = e(p, 10) + "px");
                                var K = o.replace(/(\-.)/g, function(a) { return a.substring(1).toUpperCase() });
                                i.style[K] = p, d._.dirty = 1, i.setAttribute(o, p)
                        }
                    }
                y(d, f), i.style.visibility = m
            },
            x = 1.2,
            y = function(d, f) { if ("text" == d.type && (f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) { var g = d.attrs,
                        h = d.node,
                        i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10; if (f[b]("text")) { for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild); for (var j, k = c(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, { dy: i * x, x: g.x }), j.appendChild(a._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j } else
                        for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], { dy: i * x, x: g.x }) : q(m[0], { dy: 0 });
                    q(h, { x: g.x, y: g.y }), d._.dirty = 1; var p = d._getBBox(),
                        r = g.y - (p.y + p.height / 2);
                    r && a.is(r, "finite") && q(m[0], { dy: r }) } },
            z = function(a) { return a.parentNode && "a" === a.parentNode.tagName.toLowerCase() ? a.parentNode : a },
            A = function(b, c) { this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null },
            B = a.el;
        A.prototype = B, B.constructor = A, a._engine.path = function(a, b) { var c = q("path");
            b.canvas && b.canvas.appendChild(c); var d = new A(c, b); return d.type = "path", w(d, { fill: "none", stroke: "#000", path: a }), d }, B.rotate = function(a, b, e) { if (this.removed) return this; if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) { var f = this.getBBox(1);
                b = f.x + f.width / 2, e = f.y + f.height / 2 } return this.transform(this._.transform.concat([
                ["r", a, b, e]
            ])), this }, B.scale = function(a, b, e, f) { if (this.removed) return this; if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1); return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                ["s", a, b, e, f]
            ])), this }, B.translate = function(a, b) { return this.removed ? this : (a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([
                ["t", a, b]
            ])), this) }, B.transform = function(c) { var d = this._; if (null == c) return d.transform; if (a._extractTransform(this, c), this.clip && q(this.clip, { transform: this.matrix.invert() }), this.pattern && s(this), this.node && q(this.node, { transform: this.matrix }), 1 != d.sx || 1 != d.sy) { var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
                this.attr({ "stroke-width": e }) } return this }, B.hide = function() { return this.removed || (this.node.style.display = "none"), this }, B.show = function() { return this.removed || (this.node.style.display = ""), this }, B.remove = function() { var b = z(this.node); if (!this.removed && b.parentNode) { var c = this.paper;
                c.__set__ && c.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && c.defs.removeChild(this.gradient), a._tear(this, c), b.parentNode.removeChild(b), this.removeData(); for (var d in this) this[d] = "function" == typeof this[d] ? a._removedFactory(d) : null;
                this.removed = !0 } }, B._getBBox = function() { if ("none" == this.node.style.display) { this.show(); var a = !0 } var b, c = !1;
            this.paper.canvas.parentElement ? b = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (b = this.paper.canvas.parentNode.style), b && "none" == b.display && (c = !0, b.display = ""); var d = {}; try { d = this.node.getBBox() } catch (e) { d = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight } } finally { d = d || {}, c && (b.display = "none") } return a && this.hide(), d }, B.attr = function(c, d) { if (this.removed) return this; if (null == c) { var e = {}; for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]); return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e } if (null == d && a.is(c, "string")) { if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; if ("transform" == c) return this._.transform; for (var g = c.split(j), h = {}, i = 0, l = g.length; l > i; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c]; return l - 1 ? h : h[g[0]] } if (null == d && a.is(c, "array")) { for (h = {}, i = 0, l = c.length; l > i; i++) h[c[i]] = this.attr(c[i]); return h } if (null != d) { var m = {};
                m[c] = d } else null != c && a.is(c, "object") && (m = c); for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]); for (n in this.paper.customAttributes)
                if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) { var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                    this.attrs[n] = m[n]; for (var p in o) o[b](p) && (m[p] = o[p]) }
            return w(this, m), this }, B.toFront = function() { if (this.removed) return this; var b = z(this.node);
            b.parentNode.appendChild(b); var c = this.paper; return c.top != this && a._tofront(this, c), this }, B.toBack = function() { if (this.removed) return this; var b = z(this.node),
                c = b.parentNode;
            c.insertBefore(b, c.firstChild), a._toback(this, this.paper);
            this.paper; return this }, B.insertAfter = function(b) { if (this.removed || !b) return this; var c = z(this.node),
                d = z(b.node || b[b.length - 1].node); return d.nextSibling ? d.parentNode.insertBefore(c, d.nextSibling) : d.parentNode.appendChild(c), a._insertafter(this, b, this.paper), this }, B.insertBefore = function(b) { if (this.removed || !b) return this; var c = z(this.node),
                d = z(b.node || b[0].node); return d.parentNode.insertBefore(c, d), a._insertbefore(this, b, this.paper), this }, B.blur = function(b) { var c = this; if (0 !== +b) { var d = q("filter"),
                    e = q("feGaussianBlur");
                c.attrs.blur = b, d.id = a.createUUID(), q(e, { stdDeviation: +b || 1.5 }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, { filter: "url(#" + d.id + ")" }) } else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter"); return c }, a._engine.circle = function(a, b, c, d) { var e = q("circle");
            a.canvas && a.canvas.appendChild(e); var f = new A(e, a); return f.attrs = { cx: b, cy: c, r: d, fill: "none", stroke: "#000" }, f.type = "circle", q(e, f.attrs), f }, a._engine.rect = function(a, b, c, d, e, f) { var g = q("rect");
            a.canvas && a.canvas.appendChild(g); var h = new A(g, a); return h.attrs = { x: b, y: c, width: d, height: e, rx: f || 0, ry: f || 0, fill: "none", stroke: "#000" }, h.type = "rect", q(g, h.attrs), h }, a._engine.ellipse = function(a, b, c, d, e) { var f = q("ellipse");
            a.canvas && a.canvas.appendChild(f); var g = new A(f, a); return g.attrs = { cx: b, cy: c, rx: d, ry: e, fill: "none", stroke: "#000" }, g.type = "ellipse", q(f, g.attrs), g }, a._engine.image = function(a, b, c, d, e, f) { var g = q("image");
            q(g, { x: c, y: d, width: e, height: f, preserveAspectRatio: "none" }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g); var h = new A(g, a); return h.attrs = { x: c, y: d, width: e, height: f, src: b }, h.type = "image", h }, a._engine.text = function(b, c, d, e) { var f = q("text");
            b.canvas && b.canvas.appendChild(f); var g = new A(f, b); return g.attrs = { x: c, y: d, "text-anchor": "middle", text: e, "font-family": a._availableAttrs["font-family"], "font-size": a._availableAttrs["font-size"], stroke: "none", fill: "#000" }, g.type = "text", w(g, g.attrs), g }, a._engine.setSize = function(a, b) { return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this }, a._engine.create = function() { var b = a._getContainer.apply(0, arguments),
                c = b && b.container,
                d = b.x,
                e = b.y,
                f = b.width,
                g = b.height; if (!c) throw new Error("SVG container not found."); var h, i = q("svg"),
                j = "overflow:hidden;"; return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, { height: g, version: 1.1, width: f, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), 1 == c ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i)), c = new a._Paper, c.width = f, c.height = g, c.canvas = i, c.clear(), c._left = c._top = 0, h && (c.renderfix = function() {}), c.renderfix(), c }, a._engine.setViewBox = function(a, b, c, d, e) { k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]); var f, h, i = this.getSize(),
                j = g(c / i.width, d / i.height),
                l = this.top,
                n = e ? "xMidYMid meet" : "xMinYMin"; for (null == a ? (this._vbSize && (j = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = j, f = a + m + b + m + c + m + d), q(this.canvas, { viewBox: f, preserveAspectRatio: n }); j && l;) h = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({ "stroke-width": h }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev; return this._viewBox = [a, b, c, d, !!e], this }, a.prototype.renderfix = function() { var a, b = this.canvas,
                c = b.style; try { a = b.getScreenCTM() || b.createSVGMatrix() } catch (d) { a = b.createSVGMatrix() } var e = -a.e % 1,
                f = -a.f % 1;
            (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px")) }, a.prototype.clear = function() { a.eve("raphael.clear", this); for (var b = this.canvas; b.firstChild;) b.removeChild(b.firstChild);
            this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs")) }, a.prototype.remove = function() { k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas); for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null };
        var C = a.st;
        for (var D in B) B[b](D) && !C[b](D) && (C[D] = function(a) { return function() { var b = arguments; return this.forEach(function(c) { c[a].apply(c, b) }) } }(D))
    }
}),
function(a, b) { "function" == typeof define && define.amd ? define("raphael.vml", ["raphael.core"], function(a) { return b(a) }) : b("object" == typeof exports ? require("./raphael.core") : a.Raphael) }(this, function(a) { if (!a || a.vml) { var b = "hasOwnProperty",
            c = String,
            d = parseFloat,
            e = Math,
            f = e.round,
            g = e.max,
            h = e.min,
            i = e.abs,
            j = "fill",
            k = /[, ]+/,
            l = a.eve,
            m = " progid:DXImageTransform.Microsoft",
            n = " ",
            o = "",
            p = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
            q = /([clmz]),?([^clmz]*)/gi,
            r = / progid:\S+Blur\([^\)]+\)/g,
            s = /-?[^,\s-]+/g,
            t = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
            u = 21600,
            v = { path: 1, rect: 1, image: 1 },
            w = { circle: 1, ellipse: 1 },
            x = function(b) { var d = /[ahqstv]/gi,
                    e = a._pathToAbsolute; if (c(b).match(d) && (e = a._path2curve), d = /[clmz]/g, e == a._pathToAbsolute && !c(b).match(d)) { var g = c(b).replace(q, function(a, b, c) { var d = [],
                            e = "m" == b.toLowerCase(),
                            g = p[b]; return c.replace(s, function(a) { e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u)) }), g + d }); return g } var h, i, j = e(b);
                g = []; for (var k = 0, l = j.length; l > k; k++) { h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x"); for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
                    g.push(i) } return g.join(n) },
            y = function(b, c, d) { var e = a.matrix(); return e.rotate(-b, .5, .5), { dx: e.x(c, d), dy: e.y(c, d) } },
            z = function(a, b, c, d, e, f) { var g = a._,
                    h = a.matrix,
                    k = g.fillpos,
                    l = a.node,
                    m = l.style,
                    o = 1,
                    p = "",
                    q = u / b,
                    r = u / c; if (m.visibility = "hidden", b && c) { if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) { var s = y(f, d, e);
                        d = s.dx, e = s.dy } if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) { var t = l.getElementsByTagName(j);
                        t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t) }
                    m.visibility = "visible" } };
        a.toString = function() { return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version }; var A = function(a, b, d) { for (var e = c(b).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        h = e[g]; break;
                    case "wide":
                    case "narrow":
                        j = e[g]; break;
                    case "long":
                    case "short":
                        i = e[g] }
                var k = a.node.getElementsByTagName("stroke")[0];
                k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j },
            B = function(e, i) { e.attrs = e.attrs || {}; var l = e.node,
                    m = e.attrs,
                    p = l.style,
                    q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                    r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                    s = e; for (var t in i) i[b](t) && (m[t] = i[t]); if (q && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), e._.dirty = 1, "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) { var y = +m.cx,
                        B = +m.cy,
                        D = +m.rx || +m.r || 0,
                        E = +m.ry || +m.r || 0;
                    l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1 } if ("clip-rect" in i) { var G = c(i["clip-rect"]).split(k); if (4 == G.length) { G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1]; var H = l.clipRect || a._g.doc.createElement("div"),
                            I = H.style;
                        I.clip = a.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H) }
                    i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto") } if (e.textpath) { var J = e.textpath.style;
                    i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"]) } if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) { var K = l.getElementsByTagName(j),
                        L = !1; if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) { var M = c(i.fill).match(a._ISURL); if (M) { K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile"; var N = e.getBBox(1);
                            K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], a._preload(M[1], function() { e._.fillsize = [this.offsetWidth, this.offsetHeight] }) } else K.color = a.getRGB(i.fill).hex, K.src = o, K.type = "solid", a.getRGB(i.fill).error && (s.type in { circle: 1, ellipse: 1 } || "r" != c(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1) } if ("fill-opacity" in i || "opacity" in i) { var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
                        O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none") }
                    l.appendChild(K); var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                        Q = !1;!P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1); var R = a.getRGB(i.stroke);
                    P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1); var S = .75 * (d(i["stroke-width"]) || 1); if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in i) { var T = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                        P.dashstyle = T[b](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o }
                    Q && l.appendChild(P) } if ("text" == s.type) { s.paper.canvas.style.display = o; var U = s.paper.span,
                        V = 100,
                        W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                    p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = c(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>")); var X = U.getBoundingClientRect();
                    s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1)); for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                        if (Y[Z] in i) { s._.dirty = 1; break }
                    switch (m["text-anchor"]) {
                        case "start":
                            s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2; break;
                        case "end":
                            s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2; break;
                        default:
                            s.textpath.style["v-text-align"] = "center", s.bbx = 0 }
                    s.textpath.style["v-text-kern"] = !0 } },
            C = function(b, f, g) { b.attrs = b.attrs || {}; var h = (b.attrs, Math.pow),
                    i = "linear",
                    j = ".5 .5"; if (b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) { return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o }), f = f.split(/\s*\-\s*/), "linear" == i) { var k = f.shift(); if (k = -d(k), isNaN(k)) return null } var l = a._parseDots(f); if (!l) return null; if (b = b.shape || b.node, l.length) { b.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color; for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                    g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), b.appendChild(g) } return 1 },
            D = function(b, c) { this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null },
            E = a.el;
        D.prototype = E, E.constructor = D, E.transform = function(b) { if (null == b) return this._.transform; var d, e = this.paper._viewBoxShift,
                f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
            e && (d = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, f + b); var g, h = this.matrix.clone(),
                i = this.skew,
                j = this.node,
                k = ~c(this.attrs.fill).indexOf("-"),
                l = !c(this.attrs.fill).indexOf("url("); if (h.translate(1, 1), l || k || "image" == this.type)
                if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) { j.style.filter = h.toFilter(); var m = this.getBBox(),
                        p = this.getBBox(1),
                        q = m.x - p.x,
                        r = m.y - p.y;
                    j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0) } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
            else j.style.filter = o, i.matrix = c(h), i.offset = h.offset(); return null !== d && (this._.transform = d, a._extractTransform(this, d)), this }, E.rotate = function(a, b, e) { if (this.removed) return this; if (null != a) { if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) { var f = this.getBBox(1);
                    b = f.x + f.width / 2, e = f.y + f.height / 2 } return this._.dirtyT = 1, this.transform(this._.transform.concat([
                    ["r", a, b, e]
                ])), this } }, E.translate = function(a, b) { return this.removed ? this : (a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([
                ["t", a, b]
            ])), this) }, E.scale = function(a, b, e, f) { if (this.removed) return this; if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1); return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                ["s", a, b, e, f]
            ])), this._.dirtyT = 1, this }, E.hide = function() { return !this.removed && (this.node.style.display = "none"), this }, E.show = function() { return !this.removed && (this.node.style.display = o), this }, E.auxGetBBox = a.el.getBBox, E.getBBox = function() { var a = this.auxGetBBox(); if (this.paper && this.paper._viewBoxShift) { var b = {},
                    c = 1 / this.paper._viewBoxShift.scale; return b.x = a.x - this.paper._viewBoxShift.dx, b.x *= c, b.y = a.y - this.paper._viewBoxShift.dy, b.y *= c, b.width = a.width * c, b.height = a.height * c, b.x2 = b.x + b.width, b.y2 = b.y + b.height, b } return a }, E._getBBox = function() { return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, E.remove = function() { if (!this.removed && this.node.parentNode) { this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape); for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
                this.removed = !0 } }, E.attr = function(c, d) { if (this.removed) return this; if (null == c) { var e = {}; for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]); return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e } if (null == d && a.is(c, "string")) { if (c == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; for (var g = c.split(k), h = {}, i = 0, m = g.length; m > i; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c]; return m - 1 ? h : h[g[0]] } if (this.attrs && null == d && a.is(c, "array")) { for (h = {}, i = 0, m = c.length; m > i; i++) h[c[i]] = this.attr(c[i]); return h } var n;
            null != d && (n = {}, n[c] = d), null == d && a.is(c, "object") && (n = c); for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]); if (n) { for (o in this.paper.customAttributes)
                    if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) { var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                        this.attrs[o] = n[o]; for (var q in p) p[b](q) && (n[q] = p[q]) }
                n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n) } return this }, E.toFront = function() { return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper), this }, E.toBack = function() { return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper)), this) }, E.insertAfter = function(b) { return this.removed ? this : (b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper), this) }, E.insertBefore = function(b) { return this.removed ? this : (b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper), this) }, E.blur = function(b) { var c = this.node.runtimeStyle,
                d = c.filter; return d = d.replace(r, o), 0 !== +b ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur), this }, a._engine.path = function(a, b) { var c = F("shape");
            c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin; var d = new D(c, b),
                e = { fill: "none", stroke: "#000" };
            a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c); var f = F("skew"); return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d }, a._engine.rect = function(b, c, d, e, f, g) { var h = a._rectPath(c, d, e, f, g),
                i = b.path(h),
                j = i.attrs; return i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i }, a._engine.ellipse = function(a, b, c, d, e) {
            { var f = a.path();
                f.attrs } return f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, { cx: b, cy: c, rx: d, ry: e }), f }, a._engine.circle = function(a, b, c, d) {
            { var e = a.path();
                e.attrs } return e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, { cx: b, cy: c, r: d }), e }, a._engine.image = function(b, c, d, e, f, g) { var h = a._rectPath(d, e, f, g),
                i = b.path(h).attr({ stroke: "none" }),
                k = i.attrs,
                l = i.node,
                m = l.getElementsByTagName(j)[0]; return k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i }, a._engine.text = function(b, d, e, g) { var h = F("shape"),
                i = F("path"),
                j = F("textpath");
            d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0"; var k = new D(h, b),
                l = { fill: "#000", stroke: "none", font: a._availableAttrs.font, text: g };
            k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h); var m = F("skew"); return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k }, a._engine.setSize = function(b, c) { var d = this.canvas.style; return this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox), this }, a._engine.setViewBox = function(b, c, d, e, f) { a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]); var g, h, i = this.getSize(),
                j = i.width,
                k = i.height; return f && (g = k / e, h = j / d, j > d * g && (b -= (j - d * g) / 2 / g), k > e * h && (c -= (k - e * h) / 2 / h)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = { dx: -b, dy: -c, scale: i }, this.forEach(function(a) { a.transform("...") }), this }; var F;
        a._engine.initWin = function(a) { var b = a.document;
            b.styleSheets.length < 31 ? b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : b.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)"); try {!b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) { return b.createElement("<rvml:" + a + ' class="rvml">') } } catch (c) { F = function(a) { return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, a._engine.initWin(a._g.win), a._engine.create = function() { var b = a._getContainer.apply(0, arguments),
                c = b.container,
                d = b.height,
                e = b.width,
                f = b.x,
                g = b.y; if (!c) throw new Error("VML container not found."); var h = new a._Paper,
                i = h.canvas = a._g.doc.createElement("div"),
                j = i.style; return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = a._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == c ? (a._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i), h.renderfix = function() {}, h }, a.prototype.clear = function() { a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, a.prototype.remove = function() { a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas); for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null; return !0 }; var G = a.st; for (var H in E) E[b](H) && !G[b](H) && (G[H] = function(a) { return function() { var b = arguments; return this.forEach(function(c) { c[a].apply(c, b) }) } }(H)) } });
/**
 * JustGage - animated gauges using RaphaelJS
 * Check http://www.justgage.com for official releases
 * Licensed under MIT.
 * @author Bojan Djuricic (@Toorshia)
 **/

JustGage = function(config) {

    var obj = this;

    // Helps in case developer wants to debug it. unobtrusive
    if (config === null || config === undefined) {
        console.log('* justgage: Make sure to pass options to the constructor!');
        return false;
    }

    var node;

    if (config.id !== null && config.id !== undefined) {
        node = document.getElementById(config.id);
        if (!node) {
            console.log('* justgage: No element with id : %s found', config.id);
            return false;
        }
    } else if (config.parentNode !== null && config.parentNode !== undefined) {
        node = config.parentNode;
    } else {
        console.log('* justgage: Make sure to pass the existing element id or parentNode to the constructor.');
        return false;
    }

    var dataset = node.dataset ? node.dataset : {};

    // check for defaults
    var defaults = (config.defaults !== null && config.defaults !== undefined) ? config.defaults : false;
    if (defaults !== false) {
        config = extend({}, config, defaults);
        delete config.defaults;
    }

    // configurable parameters
    obj.config = {
        // id : string
        // this is container element id
        id: config.id,

        // value : float
        // value gauge is showing
        value: kvLookup('value', config, dataset, 0, 'float'),

        // defaults : bool
        // defaults parameter to use
        defaults: kvLookup('defaults', config, dataset, 0, false),

        // parentNode : node object
        // this is container element
        parentNode: kvLookup('parentNode', config, dataset, null),

        // width : int
        // gauge width
        width: kvLookup('width', config, dataset, null),

        // height : int
        // gauge height
        height: kvLookup('height', config, dataset, null),

        // title : string
        // gauge title
        title: kvLookup('title', config, dataset, ""),

        // titleFontColor : string
        // color of gauge title
        titleFontColor: kvLookup('titleFontColor', config, dataset, "#999999"),

        // titleFontFamily : string
        // color of gauge title
        titleFontFamily: kvLookup('titleFontFamily', config, dataset, "sans-serif"),

        // titlePosition : string
        // 'above' or 'below'
        titlePosition: kvLookup('titlePosition', config, dataset, "above"),

        // valueFontColor : string
        // color of label showing current value
        valueFontColor: kvLookup('valueFontColor', config, dataset, "#010101"),

        // valueFontFamily : string
        // color of label showing current value
        valueFontFamily: kvLookup('valueFontFamily', config, dataset, "Arial"),

        // symbol : string
        // special symbol to show next to value
        symbol: kvLookup('symbol', config, dataset, ''),

        // min : float
        // min value
        min: kvLookup('min', config, dataset, 0, 'float'),

        // max : float
        // max value
        max: kvLookup('max', config, dataset, 100, 'float'),

        // reverse : bool
        // reverse min and max
        reverse: kvLookup('reverse', config, dataset, false),

        // humanFriendlyDecimal : int
        // number of decimal places for our human friendly number to contain
        humanFriendlyDecimal: kvLookup('humanFriendlyDecimal', config, dataset, 0),


        // textRenderer: func
        // function applied before rendering text
        textRenderer: kvLookup('textRenderer', config, dataset, null),

        // gaugeWidthScale : float
        // width of the gauge element
        gaugeWidthScale: kvLookup('gaugeWidthScale', config, dataset, 1.0),

        // gaugeColor : string
        // background color of gauge element
        gaugeColor: kvLookup('gaugeColor', config, dataset, "#edebeb"),

        // label : string
        // text to show below value
        label: kvLookup('label', config, dataset, ''),

        // labelFontColor : string
        // color of label showing label under value
        labelFontColor: kvLookup('labelFontColor', config, dataset, "#b3b3b3"),

        // shadowOpacity : int
        // 0 ~ 1
        shadowOpacity: kvLookup('shadowOpacity', config, dataset, 0.2),

        // shadowSize: int
        // inner shadow size
        shadowSize: kvLookup('shadowSize', config, dataset, 5),

        // shadowVerticalOffset : int
        // how much shadow is offset from top
        shadowVerticalOffset: kvLookup('shadowVerticalOffset', config, dataset, 3),

        // levelColors : string[]
        // colors of indicator, from lower to upper, in RGB format
        levelColors: kvLookup('levelColors', config, dataset, ["#a9d70b", "#f9c802", "#ff0000"], 'array', ','),

        // startAnimationTime : int
        // length of initial animation
        startAnimationTime: kvLookup('startAnimationTime', config, dataset, 700),

        // startAnimationType : string
        // type of initial animation (linear, >, <,  <>, bounce)
        startAnimationType: kvLookup('startAnimationType', config, dataset, '>'),

        // refreshAnimationTime : int
        // length of refresh animation
        refreshAnimationTime: kvLookup('refreshAnimationTime', config, dataset, 700),

        // refreshAnimationType : string
        // type of refresh animation (linear, >, <,  <>, bounce)
        refreshAnimationType: kvLookup('refreshAnimationType', config, dataset, '>'),

        // donutStartAngle : int
        // angle to start from when in donut mode
        donutStartAngle: kvLookup('donutStartAngle', config, dataset, 90),

        // valueMinFontSize : int
        // absolute minimum font size for the value
        valueMinFontSize: kvLookup('valueMinFontSize', config, dataset, 16),

        // titleMinFontSize
        // absolute minimum font size for the title
        titleMinFontSize: kvLookup('titleMinFontSize', config, dataset, 10),

        // labelMinFontSize
        // absolute minimum font size for the label
        labelMinFontSize: kvLookup('labelMinFontSize', config, dataset, 10),

        // minLabelMinFontSize
        // absolute minimum font size for the minimum label
        minLabelMinFontSize: kvLookup('minLabelMinFontSize', config, dataset, 10),

        // maxLabelMinFontSize
        // absolute minimum font size for the maximum label
        maxLabelMinFontSize: kvLookup('maxLabelMinFontSize', config, dataset, 10),

        // hideValue : bool
        // hide value text
        hideValue: kvLookup('hideValue', config, dataset, false),

        // hideMinMax : bool
        // hide min and max values
        hideMinMax: kvLookup('hideMinMax', config, dataset, false),

        // hideInnerShadow : bool
        // hide inner shadow
        hideInnerShadow: kvLookup('hideInnerShadow', config, dataset, false),

        // humanFriendly : bool
        // convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
        humanFriendly: kvLookup('humanFriendly', config, dataset, false),

        // noGradient : bool
        // whether to use gradual color change for value, or sector-based
        noGradient: kvLookup('noGradient', config, dataset, false),

        // donut : bool
        // show full donut gauge
        donut: kvLookup('donut', config, dataset, false),

        // relativeGaugeSize : bool
        // whether gauge size should follow changes in container element size
        relativeGaugeSize: kvLookup('relativeGaugeSize', config, dataset, false),

        // counter : bool
        // animate level number change
        counter: kvLookup('counter', config, dataset, false),

        // decimals : int
        // number of digits after floating point
        decimals: kvLookup('decimals', config, dataset, 0),

        // customSectors : [] of objects
        // number of digits after floating point
        customSectors: kvLookup('customSectors', config, dataset, []),

        // formatNumber: boolean
        // formats numbers with commas where appropriate
        formatNumber: kvLookup('formatNumber', config, dataset, false),

        // pointer : bool
        // show value pointer
        pointer: kvLookup('pointer', config, dataset, false),

        // pointerOptions : object
        // define pointer look
        pointerOptions: kvLookup('pointerOptions', config, dataset, [])
    };

    // variables
    var
        canvasW,
        canvasH,
        widgetW,
        widgetH,
        aspect,
        dx,
        dy,
        titleFontSize,
        titleX,
        titleY,
        valueFontSize,
        valueX,
        valueY,
        labelFontSize,
        labelX,
        labelY,
        minFontSize,
        minX,
        minY,
        maxFontSize,
        maxX,
        maxY;

    // overflow values
    if (obj.config.value > obj.config.max) obj.config.value = obj.config.max;
    if (obj.config.value < obj.config.min) obj.config.value = obj.config.min;
    obj.originalValue = kvLookup('value', config, dataset, -1, 'float');

    // create canvas
    if (obj.config.id !== null && (document.getElementById(obj.config.id)) !== null) {
        obj.canvas = Raphael(obj.config.id, "100%", "100%");
    } else if (obj.config.parentNode !== null) {
        obj.canvas = Raphael(obj.config.parentNode, "100%", "100%");
    }

    if (obj.config.relativeGaugeSize === true) {
        obj.canvas.setViewBox(0, 0, 200, 150, true);
    }

    // canvas dimensions
    if (obj.config.relativeGaugeSize === true) {
        canvasW = 200;
        canvasH = 150;
    } else if (obj.config.width !== null && obj.config.height !== null) {
        canvasW = obj.config.width;
        canvasH = obj.config.height;
    } else if (obj.config.parentNode !== null) {
        obj.canvas.setViewBox(0, 0, 200, 150, true);
        canvasW = 200;
        canvasH = 150;
    } else {
        canvasW = getStyle(document.getElementById(obj.config.id), "width").slice(0, -2) * 1;
        canvasH = getStyle(document.getElementById(obj.config.id), "height").slice(0, -2) * 1;
    }

    // widget dimensions
    if (obj.config.donut === true) {

        // DONUT *******************************

        // width more than height
        if (canvasW > canvasH) {
            widgetH = canvasH;
            widgetW = widgetH;
            // width less than height
        } else if (canvasW < canvasH) {
            widgetW = canvasW;
            widgetH = widgetW;
            // if height don't fit, rescale both
            if (widgetH > canvasH) {
                aspect = widgetH / canvasH;
                widgetH = widgetH / aspect;
                widgetW = widgetH / aspect;
            }
            // equal
        } else {
            widgetW = canvasW;
            widgetH = widgetW;
        }

        // delta
        dx = (canvasW - widgetW) / 2;
        dy = (canvasH - widgetH) / 2;

        // title
        titleFontSize = ((widgetH / 8) > 10) ? (widgetH / 10) : 10;
        titleX = dx + widgetW / 2;
        titleY = dy + widgetH / 11;

        // value
        valueFontSize = ((widgetH / 6.4) > 16) ? (widgetH / 5.4) : 18;
        valueX = dx + widgetW / 2;
        if (obj.config.label !== '') {
            valueY = dy + widgetH / 1.85;
        } else {
            valueY = dy + widgetH / 1.7;
        }

        // label
        labelFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        labelX = dx + widgetW / 2;
        labelY = valueY + labelFontSize;

        // min
        minFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        minY = labelY;

        // max
        maxFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        maxY = labelY;

    } else {
        // HALF *******************************

        // width more than height
        if (canvasW > canvasH) {
            widgetH = canvasH;
            widgetW = widgetH * 1.25;
            //if width doesn't fit, rescale both
            if (widgetW > canvasW) {
                aspect = widgetW / canvasW;
                widgetW = widgetW / aspect;
                widgetH = widgetH / aspect;
            }
            // width less than height
        } else if (canvasW < canvasH) {
            widgetW = canvasW;
            widgetH = widgetW / 1.25;
            // if height don't fit, rescale both
            if (widgetH > canvasH) {
                aspect = widgetH / canvasH;
                widgetH = widgetH / aspect;
                widgetW = widgetH / aspect;
            }
            // equal
        } else {
            widgetW = canvasW;
            widgetH = widgetW * 0.75;
        }

        // delta
        dx = (canvasW - widgetW) / 2;
        dy = (canvasH - widgetH) / 2;
        if (obj.config.titlePosition === 'below') {
            // shift whole thing down
            dy -= (widgetH / 6.4);
        }

        // title
        titleFontSize = ((widgetH / 8) > obj.config.titleMinFontSize) ? (widgetH / 10) : obj.config.titleMinFontSize;
        titleX = dx + widgetW / 2;
        titleY = dy + (obj.config.titlePosition === 'below' ? (widgetH * 1.07) : (widgetH / 6.4));

        // value
        valueFontSize = ((widgetH / 6.5) > obj.config.valueMinFontSize) ? (widgetH / 6.5) : obj.config.valueMinFontSize;
        valueX = dx + widgetW / 2;
        valueY = dy + widgetH / 1.275;

        // label
        labelFontSize = ((widgetH / 16) > obj.config.labelMinFontSize) ? (widgetH / 16) : obj.config.labelMinFontSize;
        labelX = dx + widgetW / 2;
        labelY = valueY + valueFontSize / 2 + 5;

        // min
        minFontSize = ((widgetH / 16) > obj.config.minLabelMinFontSize) ? (widgetH / 16) : obj.config.minLabelMinFontSize;
        minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        minY = labelY;

        // max
        maxFontSize = ((widgetH / 16) > obj.config.maxLabelMinFontSize) ? (widgetH / 16) : obj.config.maxLabelMinFontSize;
        maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        maxY = labelY;
    }

    // parameters
    obj.params = {
        canvasW: canvasW,
        canvasH: canvasH,
        widgetW: widgetW,
        widgetH: widgetH,
        dx: dx,
        dy: dy,
        titleFontSize: titleFontSize,
        titleX: titleX,
        titleY: titleY,
        valueFontSize: valueFontSize,
        valueX: valueX,
        valueY: valueY,
        labelFontSize: labelFontSize,
        labelX: labelX,
        labelY: labelY,
        minFontSize: minFontSize,
        minX: minX,
        minY: minY,
        maxFontSize: maxFontSize,
        maxX: maxX,
        maxY: maxY
    };

    // var clear
    canvasW, canvasH, widgetW, widgetH, aspect, dx, dy, titleFontSize, titleX, titleY, valueFontSize, valueX, valueY, labelFontSize, labelX, labelY, minFontSize, minX, minY, maxFontSize, maxX, maxY = null;

    // pki - custom attribute for generating gauge paths
    obj.canvas.customAttributes.pki = function(value, min, max, w, h, dx, dy, gws, donut, reverse) {

        var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path;

        if (donut) {
            alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 7;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.95 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) - Ri * Math.sin(alpha);

            path = "M" + (Cx - Ri) + "," + Cy + " ";
            path += "L" + (Cx - Ro) + "," + Cy + " ";
            if (value > ((max - min) / 2)) {
                path += "A" + Ro + "," + Ro + " 0 0 1 " + (Cx + Ro) + "," + Cy + " ";
            }
            path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
            path += "L" + Xi + "," + Yi + " ";
            if (value > ((max - min) / 2)) {
                path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx + Ri) + "," + Cy + " ";
            }
            path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
            path += "Z ";

            return {
                path: path
            };

        } else {
            alpha = (1 - (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 10;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.25 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) - Ri * Math.sin(alpha);

            path = "M" + (Cx - Ri) + "," + Cy + " ";
            path += "L" + (Cx - Ro) + "," + Cy + " ";
            path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
            path += "L" + Xi + "," + Yi + " ";
            path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
            path += "Z ";

            return {
                path: path
            };
        }

        // var clear
        alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path = null;
    };

    // ndl - custom attribute for generating needle path
    obj.canvas.customAttributes.ndl = function(value, min, max, w, h, dx, dy, gws, donut) {

        var dlt = w * 3.5 / 100;
        var dlb = w / 15;
        var dw = w / 100;

        if (obj.config.pointerOptions.toplength != null && obj.config.pointerOptions.toplength != undefined) dlt = obj.config.pointerOptions.toplength;
        if (obj.config.pointerOptions.bottomlength != null && obj.config.pointerOptions.bottomlength != undefined) dlb = obj.config.pointerOptions.bottomlength;
        if (obj.config.pointerOptions.bottomwidth != null && obj.config.pointerOptions.bottomwidth != undefined) dw = obj.config.pointerOptions.bottomwidth;

        var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, Xc, Yc, Xz, Yz, Xa, Ya, Xb, Yb, path;

        if (donut) {

            alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 7;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.95 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) - Ri * Math.sin(alpha);

            Xc = Xo + dlt * Math.cos(alpha);
            Yc = Yo - dlt * Math.sin(alpha);
            Xz = Xi - dlb * Math.cos(alpha);
            Yz = Yi + dlb * Math.sin(alpha);

            Xa = Xz + dw * Math.sin(alpha);
            Ya = Yz + dw * Math.cos(alpha);
            Xb = Xz - dw * Math.sin(alpha);
            Yb = Yz - dw * Math.cos(alpha);

            path = 'M' + Xa + ',' + Ya + ' ';
            path += 'L' + Xb + ',' + Yb + ' ';
            path += 'L' + Xc + ',' + Yc + ' ';
            path += 'Z ';

            return {
                path: path
            };

        } else {
            alpha = (1 - (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 10;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.25 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) - Ri * Math.sin(alpha);

            Xc = Xo + dlt * Math.cos(alpha);
            Yc = Yo - dlt * Math.sin(alpha);
            Xz = Xi - dlb * Math.cos(alpha);
            Yz = Yi + dlb * Math.sin(alpha);

            Xa = Xz + dw * Math.sin(alpha);
            Ya = Yz + dw * Math.cos(alpha);
            Xb = Xz - dw * Math.sin(alpha);
            Yb = Yz - dw * Math.cos(alpha);

            path = 'M' + Xa + ',' + Ya + ' ';
            path += 'L' + Xb + ',' + Yb + ' ';
            path += 'L' + Xc + ',' + Yc + ' ';
            path += 'Z ';

            return {
                path: path
            };
        }

        // var clear
        alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, Xc, Yc, Xz, Yz, Xa, Ya, Xb, Yb, path = null;
    };

    // gauge
    obj.gauge = obj.canvas.path().attr({
        "stroke": "none",
        "fill": obj.config.gaugeColor,
        pki: [
            obj.config.max,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut,
            obj.config.reverse
        ]
    });

    // level
    obj.level = obj.canvas.path().attr({
        "stroke": "none",
        "fill": getColor(obj.config.value, (obj.config.value - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors),
        pki: [
            obj.config.min,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut,
            obj.config.reverse
        ]
    });
    if (obj.config.donut) {
        obj.level.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW / 2 + obj.params.dx) + ", " + (obj.params.widgetH / 1.95 + obj.params.dy));
    }

    if (obj.config.pointer) {
        // needle
        obj.needle = obj.canvas.path().attr({
            "stroke": (obj.config.pointerOptions.stroke !== null && obj.config.pointerOptions.stroke !== undefined) ? obj.config.pointerOptions.stroke : "none",
            "stroke-width": (obj.config.pointerOptions.stroke_width !== null && obj.config.pointerOptions.stroke_width !== undefined) ? obj.config.pointerOptions.stroke_width : 0,
            "stroke-linecap": (obj.config.pointerOptions.stroke_linecap !== null && obj.config.pointerOptions.stroke_linecap !== undefined) ? obj.config.pointerOptions.stroke_linecap : "square",
            "fill": (obj.config.pointerOptions.color !== null && obj.config.pointerOptions.color !== undefined) ? obj.config.pointerOptions.color : "#000000",
            ndl: [
                obj.config.min,
                obj.config.min,
                obj.config.max,
                obj.params.widgetW,
                obj.params.widgetH,
                obj.params.dx,
                obj.params.dy,
                obj.config.gaugeWidthScale,
                obj.config.donut
            ]
        });

        if (obj.config.donut) {
            obj.needle.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW / 2 + obj.params.dx) + ", " + (obj.params.widgetH / 1.95 + obj.params.dy));
        }

    }

    // title
    obj.txtTitle = obj.canvas.text(obj.params.titleX, obj.params.titleY, obj.config.title);
    obj.txtTitle.attr({
        "font-size": obj.params.titleFontSize,
        "font-weight": "bold",
        "font-family": obj.config.titleFontFamily,
        "fill": obj.config.titleFontColor,
        "fill-opacity": "1"
    });
    setDy(obj.txtTitle, obj.params.titleFontSize, obj.params.titleY);

    // value
    obj.txtValue = obj.canvas.text(obj.params.valueX, obj.params.valueY, 0);
    obj.txtValue.attr({
        "font-size": obj.params.valueFontSize,
        "font-weight": "bold",
        "font-family": obj.config.valueFontFamily,
        "fill": obj.config.valueFontColor,
        "fill-opacity": "0"
    });
    setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);

    // label
    obj.txtLabel = obj.canvas.text(obj.params.labelX, obj.params.labelY, obj.config.label);
    obj.txtLabel.attr({
        "font-size": obj.params.labelFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": "0"
    });
    setDy(obj.txtLabel, obj.params.labelFontSize, obj.params.labelY);

    // min
    var min = obj.config.min;
    if (obj.config.reverse) {
        min = obj.config.max;
    }

    obj.txtMinimum = min;
    if (obj.config.humanFriendly) {
        obj.txtMinimum = humanFriendlyNumber(min, obj.config.humanFriendlyDecimal);
    } else if (obj.config.formatNumber) {
        obj.txtMinimum = formatNumber(min);
    }
    obj.txtMin = obj.canvas.text(obj.params.minX, obj.params.minY, obj.txtMinimum);
    obj.txtMin.attr({
        "font-size": obj.params.minFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
    });
    setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);

    // max
    var max = obj.config.max;
    if (obj.config.reverse) {
        max = obj.config.min;
    }
    obj.txtMaximum = max;
    if (obj.config.humanFriendly) {
        obj.txtMaximum = humanFriendlyNumber(max, obj.config.humanFriendlyDecimal);
    } else if (obj.config.formatNumber) {
        obj.txtMaximum = formatNumber(max);
    }
    obj.txtMax = obj.canvas.text(obj.params.maxX, obj.params.maxY, obj.txtMaximum);
    obj.txtMax.attr({
        "font-size": obj.params.maxFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
    });
    setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);

    var defs = obj.canvas.canvas.childNodes[1];
    var svg = "http://www.w3.org/2000/svg";

    if (ie !== 'undefined' && ie < 9) {
        // VML mode - no SVG & SVG filter support
    } else if (ie !== 'undefined') {
        onCreateElementNsReady(function() {
            obj.generateShadow(svg, defs);
        });
    } else {
        obj.generateShadow(svg, defs);
    }

    // var clear
    defs, svg = null;

    // set value to display
    if (obj.config.textRenderer) {
        obj.originalValue = obj.config.textRenderer(obj.originalValue);
    } else if (obj.config.humanFriendly) {
        obj.originalValue = humanFriendlyNumber(obj.originalValue, obj.config.humanFriendlyDecimal) + obj.config.symbol;
    } else if (obj.config.formatNumber) {
        obj.originalValue = formatNumber(obj.originalValue) + obj.config.symbol;
    } else {
        obj.originalValue = (obj.originalValue * 1).toFixed(obj.config.decimals) + obj.config.symbol;
    }

    if (obj.config.counter === true) {
        //on each animation frame
        eve.on("raphael.anim.frame." + (obj.level.id), function() {
            var currentValue = obj.level.attr("pki")[0];
            if (obj.config.reverse) {
                currentValue = (obj.config.max * 1) + (obj.config.min * 1) - (obj.level.attr("pki")[0] * 1);
            }
            if (obj.config.textRenderer) {
                obj.txtValue.attr("text", obj.config.textRenderer(Math.floor(currentValue)));
            } else if (obj.config.humanFriendly) {
                obj.txtValue.attr("text", humanFriendlyNumber(Math.floor(currentValue), obj.config.humanFriendlyDecimal) + obj.config.symbol);
            } else if (obj.config.formatNumber) {
                obj.txtValue.attr("text", formatNumber(Math.floor(currentValue)) + obj.config.symbol);
            } else {
                obj.txtValue.attr("text", (currentValue * 1).toFixed(obj.config.decimals) + obj.config.symbol);
            }
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
            currentValue = null;
        });
        //on animation end
        eve.on("raphael.anim.finish." + (obj.level.id), function() {
            obj.txtValue.attr({
                "text": obj.originalValue
            });
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
        });
    } else {
        //on animation start
        eve.on("raphael.anim.start." + (obj.level.id), function() {
            obj.txtValue.attr({
                "text": obj.originalValue
            });
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
        });
    }

    // animate gauge level, value & label
    var rvl = obj.config.value;
    if (obj.config.reverse) {
        rvl = (obj.config.max * 1) + (obj.config.min * 1) - (obj.config.value * 1);
    }
    obj.level.animate({
        pki: [
            rvl,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut,
            obj.config.reverse
        ]
    }, obj.config.startAnimationTime, obj.config.startAnimationType);

    if (obj.config.pointer) {
        obj.needle.animate({
            ndl: [
                rvl,
                obj.config.min,
                obj.config.max,
                obj.params.widgetW,
                obj.params.widgetH,
                obj.params.dx,
                obj.params.dy,
                obj.config.gaugeWidthScale,
                obj.config.donut
            ]
        }, obj.config.startAnimationTime, obj.config.startAnimationType);
    }

    obj.txtValue.animate({
        "fill-opacity": (obj.config.hideValue) ? "0" : "1"
    }, obj.config.startAnimationTime, obj.config.startAnimationType);
    obj.txtLabel.animate({
        "fill-opacity": "1"
    }, obj.config.startAnimationTime, obj.config.startAnimationType);
};

/** Refresh gauge level */
JustGage.prototype.refresh = function(val, max) {

    var obj = this;
    var displayVal, color, max = max || null;

    // set new max
    if (max !== null) {
        obj.config.max = max;
        // TODO: update customSectors

        obj.txtMaximum = obj.config.max;
        if (obj.config.humanFriendly) {
            obj.txtMaximum = humanFriendlyNumber(obj.config.max, obj.config.humanFriendlyDecimal);
        } else if (obj.config.formatNumber) {
            obj.txtMaximum = formatNumber(obj.config.max);
        }
        if (!obj.config.reverse) {
            obj.txtMax.attr({
                "text": obj.txtMaximum
            });
            setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);
        } else {
            obj.txtMin.attr({
                "text": obj.txtMaximum
            });
            setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);
        }
    }

    // overflow values
    displayVal = val;
    if ((val * 1) > (obj.config.max * 1)) {
        val = (obj.config.max * 1);
    }
    if ((val * 1) < (obj.config.min * 1)) {
        val = (obj.config.min * 1);
    }

    color = getColor(val, (val - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors);

    if (obj.config.textRenderer) {
        displayVal = obj.config.textRenderer(displayVal);
    } else if (obj.config.humanFriendly) {
        displayVal = humanFriendlyNumber(displayVal, obj.config.humanFriendlyDecimal) + obj.config.symbol;
    } else if (obj.config.formatNumber) {
        displayVal = formatNumber((displayVal * 1).toFixed(obj.config.decimals)) + obj.config.symbol;
    } else {
        displayVal = (displayVal * 1).toFixed(obj.config.decimals) + obj.config.symbol;
    }
    obj.originalValue = displayVal;
    obj.config.value = val * 1;

    if (!obj.config.counter) {
        obj.txtValue.attr({
            "text": displayVal
        });
        setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    }

    var rvl = obj.config.value;
    if (obj.config.reverse) {
        rvl = (obj.config.max * 1) + (obj.config.min * 1) - (obj.config.value * 1);
    }
    obj.level.animate({
        pki: [
            rvl,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut,
            obj.config.reverse
        ],
        "fill": color
    }, obj.config.refreshAnimationTime, obj.config.refreshAnimationType);

    if (obj.config.pointer) {
        obj.needle.animate({
            ndl: [
                rvl,
                obj.config.min,
                obj.config.max,
                obj.params.widgetW,
                obj.params.widgetH,
                obj.params.dx,
                obj.params.dy,
                obj.config.gaugeWidthScale,
                obj.config.donut
            ]
        }, obj.config.refreshAnimationTime, obj.config.refreshAnimationType);
    }

    // var clear
    obj, displayVal, color, max = null;
};

/** Generate shadow */
JustGage.prototype.generateShadow = function(svg, defs) {

    var obj = this;
    var sid = "inner-shadow-" + obj.config.id;
    var gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3;

    // FILTER
    gaussFilter = document.createElementNS(svg, "filter");
    gaussFilter.setAttribute("id", sid);
    defs.appendChild(gaussFilter);

    // offset
    feOffset = document.createElementNS(svg, "feOffset");
    feOffset.setAttribute("dx", 0);
    feOffset.setAttribute("dy", obj.config.shadowVerticalOffset);
    gaussFilter.appendChild(feOffset);

    // blur
    feGaussianBlur = document.createElementNS(svg, "feGaussianBlur");
    feGaussianBlur.setAttribute("result", "offset-blur");
    feGaussianBlur.setAttribute("stdDeviation", obj.config.shadowSize);
    gaussFilter.appendChild(feGaussianBlur);

    // composite 1
    feComposite1 = document.createElementNS(svg, "feComposite");
    feComposite1.setAttribute("operator", "out");
    feComposite1.setAttribute("in", "SourceGraphic");
    feComposite1.setAttribute("in2", "offset-blur");
    feComposite1.setAttribute("result", "inverse");
    gaussFilter.appendChild(feComposite1);

    // flood
    feFlood = document.createElementNS(svg, "feFlood");
    feFlood.setAttribute("flood-color", "black");
    feFlood.setAttribute("flood-opacity", obj.config.shadowOpacity);
    feFlood.setAttribute("result", "color");
    gaussFilter.appendChild(feFlood);

    // composite 2
    feComposite2 = document.createElementNS(svg, "feComposite");
    feComposite2.setAttribute("operator", "in");
    feComposite2.setAttribute("in", "color");
    feComposite2.setAttribute("in2", "inverse");
    feComposite2.setAttribute("result", "shadow");
    gaussFilter.appendChild(feComposite2);

    // composite 3
    feComposite3 = document.createElementNS(svg, "feComposite");
    feComposite3.setAttribute("operator", "over");
    feComposite3.setAttribute("in", "shadow");
    feComposite3.setAttribute("in2", "SourceGraphic");
    gaussFilter.appendChild(feComposite3);

    // set shadow
    if (!obj.config.hideInnerShadow) {
        obj.canvas.canvas.childNodes[2].setAttribute("filter", "url(#" + sid + ")");
        obj.canvas.canvas.childNodes[3].setAttribute("filter", "url(#" + sid + ")");
    }

    // var clear
    gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3 = null;
};

//
// tiny helper function to lookup value of a key from two hash tables
// if none found, return defaultvalue
//
// key: string
// tablea: object
// tableb: DOMStringMap|object
// defval: string|integer|float|null
// datatype: return datatype
// delimiter: delimiter to be used in conjunction with datatype formatting
//
function kvLookup(key, tablea, tableb, defval, datatype, delimiter) {
    var val = defval;
    var canConvert = false;
    if (!(key === null || key === undefined)) {
        if (tableb !== null && tableb !== undefined && typeof tableb === "object" && key in tableb) {
            val = tableb[key];
            canConvert = true;
        } else if (tablea !== null && tablea !== undefined && typeof tablea === "object" && key in tablea) {
            val = tablea[key];
            canConvert = true;
        } else {
            val = defval;
        }
        if (canConvert === true) {
            if (datatype !== null && datatype !== undefined) {
                switch (datatype) {
                    case 'int':
                        val = parseInt(val, 10);
                        break;
                    case 'float':
                        val = parseFloat(val);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return val;
};

/** Get color for value */
function getColor(val, pct, col, noGradient, custSec) {

    var no, inc, colors, percentage, rval, gval, bval, lower, upper, range, rangePct, pctLower, pctUpper, color;
    var noGradient = noGradient || custSec.length > 0;

    if (custSec.length > 0) {
        for (var i = 0; i < custSec.length; i++) {
            if (val > custSec[i].lo && val <= custSec[i].hi) {
                return custSec[i].color;
            }
        }
    }

    no = col.length;
    if (no === 1) return col[0];
    inc = (noGradient) ? (1 / no) : (1 / (no - 1));
    colors = [];
    for (i = 0; i < col.length; i++) {
        percentage = (noGradient) ? (inc * (i + 1)) : (inc * i);
        rval = parseInt((cutHex(col[i])).substring(0, 2), 16);
        gval = parseInt((cutHex(col[i])).substring(2, 4), 16);
        bval = parseInt((cutHex(col[i])).substring(4, 6), 16);
        colors[i] = {
            pct: percentage,
            color: {
                r: rval,
                g: gval,
                b: bval
            }
        };
    }

    if (pct === 0) {
        return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
    }

    for (var j = 0; j < colors.length; j++) {
        if (pct <= colors[j].pct) {
            if (noGradient) {
                return 'rgb(' + [colors[j].color.r, colors[j].color.g, colors[j].color.b].join(',') + ')';
            } else {
                lower = colors[j - 1];
                upper = colors[j];
                range = upper.pct - lower.pct;
                rangePct = (pct - lower.pct) / range;
                pctLower = 1 - rangePct;
                pctUpper = rangePct;
                color = {
                    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
                };
                return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
            }
        }
    }

}

/** Fix Raphael display:none tspan dy attribute bug */
function setDy(elem, fontSize, txtYpos) {
    if ((!ie || ie > 9) && elem.node.firstChild.attributes.dy) {
        elem.node.firstChild.attributes.dy.value = 0;
    }
}

/** Random integer  */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**  Cut hex  */
function cutHex(str) {
    return (str.charAt(0) == "#") ? str.substring(1, 7) : str;
}

/**  Human friendly number suffix - From: http://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator */
function humanFriendlyNumber(n, d) {
    var p, d2, i, s;

    p = Math.pow;
    d2 = p(10, d);
    i = 7;
    while (i) {
        s = p(10, i-- * 3);
        if (s <= n) {
            n = Math.round(n * d2 / s) / d2 + "KMGTPE" [i];
        }
    }
    return n;
}

/** Format numbers with commas - From: http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function formatNumber(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

/**  Get style  */
function getStyle(oElm, strCssRule) {
    var strValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    } else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

/**  Create Element NS Ready  */
function onCreateElementNsReady(func) {
    if (document.createElementNS !== undefined) {
        func();
    } else {
        setTimeout(function() {
            onCreateElementNsReady(func);
        }, 100);
    }
}

/**  Get IE version  */
// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------
// UPDATE: Now using Live NodeList idea from @jdalton
var ie = (function() {

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());

// extend target object with second object
function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
            continue;

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key))
                out[key] = arguments[i][key];
        }
    }

    return out;
};