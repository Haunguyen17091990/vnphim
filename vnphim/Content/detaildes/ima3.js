// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var h, l = this,
        p = function(a) {
            return void 0 !== a
        },
        r = function(a, b, c) {
            a = a.split(".");
            c = c || l;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && p(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
        },
        aa = function(a, b) {
            for (var c = a.split("."), d = b || l, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        },
        ba = function() {},
        t = function() {
            throw Error("unimplemented abstract method");
        },
        ca = function(a) {
            a.getInstance = function() {
                return a.tc ? a.tc : a.tc = new a
            }
        },
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        v = function(a) {
            return "array" == da(a)
        },
        ea = function(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        w = function(a) {
            return "string" == typeof a
        },
        x = function(a) {
            return "number" == typeof a
        },
        y = function(a) {
            return "function" == da(a)
        },
        fa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ga = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ha = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d =
                    Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        z = function(a, b, c) {
            z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
            return z.apply(null, arguments)
        },
        ia = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ka =
        Date.now || function() {
            return +new Date
        },
        A = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.P = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ij = function(a, c, g) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var la;
    var B = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        ma = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        va = function(a) {
            if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ta, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));
            return a
        },
        oa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /\x00/g,
        na = /[\x00&<>"']/,
        wa = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        C = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        xa = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        ya = function(a) {
            return null == a ? "" : String(a)
        },
        Aa = function(a, b) {
            for (var c = 0, d = ma(String(a)).split("."), e = ma(String(b)).split("."), g = Math.max(d.length, e.length), f = 0; 0 == c && f < g; f++) {
                var k = d[f] || "",
                    m = e[f] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == m[0].length) break;
                    c = za(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || za(0 == k[2].length, 0 == m[2].length) || za(k[2], m[2]);
                    k = k[3];
                    m = m[3]
                } while (0 == c)
            }
            return c
        },
        za = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ba = 2147483648 * Math.random() | 0,
        Ca = function(a) {
            var b = Number(a);
            return 0 == b && B(a) ? NaN : b
        },
        Da = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        Ea = function(a) {
            var b = w(void 0) ?
                "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Fa = function(a, b) {
            if (w(a)) return w(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        D = function(a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        Ga = function(a, b, c) {
            for (var d = a.length, e = [], g = 0, f = w(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in f) {
                    var m = f[k];
                    b.call(c, m, k, a) && (e[g++] = m)
                }
            return e
        },
        Ha = function(a, b, c) {
            for (var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, f = 0; f < d; f++) f in g && (e[f] = b.call(c, g[f], f, a));
            return e
        },
        Ja = function(a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return !0;
            return !1
        },
        La = function(a, b, c) {
            b = Ka(a, b, c);
            return 0 > b ? null : w(a) ? a.charAt(b) : a[b]
        },
        Ka = function(a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return g;
            return -1
        },
        Ma = function(a, b) {
            return 0 <= Fa(a, b)
        },
        Pa = function() {
            var a = Na;
            if (!v(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        },
        Qa = function(a, b) {
            var c = Fa(a, b),
                d;
            (d = 0 <= c) && Array.prototype.splice.call(a,
                c, 1);
            return d
        },
        Ra = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        Sa = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Ta = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        Ua = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = 0;
            return b
        },
        Va = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                if (v(d))
                    for (var e = 0; e < d.length; e += 8192)
                        for (var g = Va.apply(null, Ta(d,
                                e, e + 8192)), f = 0; f < g.length; f++) b.push(g[f]);
                else b.push(d)
            }
            return b
        };
    var Wa = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ya = function(a) {
            var b = Xa,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return !0;
            return !1
        },
        Za = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        $a = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        ab = function(a, b) {
            for (var c = ea(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], p(a)); c++);
            return a
        },
        bb = function(a, b) {
            return null !== a && b in a
        },
        db = function(a) {
            var b = cb,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return c
        },
        eb = function(a, b, c) {
            return null !==
                a && b in a ? a[b] : c
        },
        fb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        gb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < gb.length; g++) c = gb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var E;
    a: {
        var kb = l.navigator;
        if (kb) {
            var lb = kb.userAgent;
            if (lb) {
                E = lb;
                break a
            }
        }
        E = ""
    }
    var F = function(a) {
        return -1 != E.indexOf(a)
    };
    var nb = function() {
        return (F("Chrome") || F("CriOS")) && !F("Edge")
    };
    var ob = function() {
        return F("iPhone") && !F("iPod") && !F("iPad")
    };
    var pb = function(a) {
        pb[" "](a);
        return a
    };
    pb[" "] = ba;
    var qb = function(a, b) {
            try {
                return pb(a[b]), !0
            } catch (c) {}
            return !1
        },
        sb = function(a, b) {
            var c = rb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var tb = F("Opera"),
        G = F("Trident") || F("MSIE"),
        vb = F("Edge"),
        wb = F("Gecko") && !(C(E, "WebKit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
        xb = C(E, "WebKit") && !F("Edge"),
        yb = F("Macintosh"),
        zb = F("Android"),
        Ab = ob(),
        Bb = F("iPad"),
        Cb = function() {
            var a = l.document;
            return a ? a.documentMode : void 0
        },
        Db;
    a: {
        var Eb = "",
            Gb = function() {
                var a = E;
                if (wb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (vb) return /Edge\/([\d\.]+)/.exec(a);
                if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (xb) return /WebKit\/(\S+)/.exec(a);
                if (tb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Gb && (Eb = Gb ? Gb[1] : "");
        if (G) {
            var Hb = Cb();
            if (null != Hb && Hb > parseFloat(Eb)) {
                Db = String(Hb);
                break a
            }
        }
        Db = Eb
    }
    var Ib = Db,
        rb = {},
        Jb = function(a) {
            return sb(a, function() {
                return 0 <= Aa(Ib, a)
            })
        },
        Kb;
    var Lb = l.document;
    Kb = Lb && G ? Cb() || ("CSS1Compat" == Lb.compatMode ? parseInt(Ib, 10) : 5) : void 0;
    var H = function(a, b) {
        this.x = p(a) ? a : 0;
        this.y = p(b) ? b : 0
    };
    H.prototype.clone = function() {
        return new H(this.x, this.y)
    };
    H.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    H.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    H.prototype.scale = function(a, b) {
        var c = x(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    var Mb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Pb = function() {
        this.b = "";
        this.g = Nb
    };
    Pb.prototype.ya = !0;
    Pb.prototype.sa = function() {
        return this.b
    };
    Pb.prototype.toString = function() {
        return "Const{" + this.b + "}"
    };
    var Qb = function(a) {
            return a instanceof Pb && a.constructor === Pb && a.g === Nb ? a.b : "type_error:Const"
        },
        Nb = {},
        Rb = function(a) {
            var b = new Pb;
            b.b = a;
            return b
        };
    Rb("");
    var Tb = function() {
        this.b = "";
        this.g = Sb
    };
    Tb.prototype.ya = !0;
    var Sb = {};
    Tb.prototype.sa = function() {
        return this.b
    };
    var Ub = function(a) {
            var b = new Tb;
            b.b = a;
            return b
        },
        Vb = Ub(""),
        Wb = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
    var Zb = function() {
        this.b = "";
        this.g = Xb
    };
    Zb.prototype.ya = !0;
    Zb.prototype.sa = function() {
        return this.b
    };
    Zb.prototype.Fb = !0;
    Zb.prototype.Pa = function() {
        return 1
    };
    var $b = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        Xb = {},
        ac = function(a) {
            var b = new Zb;
            b.b = a;
            return b
        };
    ac("about:blank");
    var cc = function() {
        this.b = "";
        this.g = bc
    };
    cc.prototype.ya = !0;
    cc.prototype.sa = function() {
        return this.b
    };
    cc.prototype.Fb = !0;
    cc.prototype.Pa = function() {
        return 1
    };
    var bc = {},
        dc = function(a) {
            var b = new cc;
            b.b = a;
            return b
        };
    var fc = function() {
        this.b = "";
        this.h = ec;
        this.g = null
    };
    fc.prototype.Fb = !0;
    fc.prototype.Pa = function() {
        return this.g
    };
    fc.prototype.ya = !0;
    fc.prototype.sa = function() {
        return this.b
    };
    var gc = function(a) {
            if (a instanceof fc && a.constructor === fc && a.h === ec) return a.b;
            da(a);
            return "type_error:SafeHtml"
        },
        hc = /^[a-zA-Z0-9-]+$/,
        ic = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        kc = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    if (v(a)) D(a, d);
                    else {
                        var e;
                        a instanceof fc ? e = a : (e = null, a.Fb && (e = a.Pa()), a = va(a.ya ? a.sa() : String(a)), e = jc(a, e));
                        c += gc(e);
                        e = e.Pa();
                        0 == b ? b = e : 0 != e && b != e && (b = null)
                    }
                };
            D(arguments, d);
            return jc(c, b)
        },
        ec = {},
        jc = function(a, b) {
            var c = new fc;
            c.b = a;
            c.g = b;
            return c
        },
        lc = function(a, b, c) {
            var d = null,
                e, g = "";
            if (b)
                for (e in b) {
                    if (!hc.test(e)) throw Error('Invalid attribute name "' + e + '".');
                    var f = b[e];
                    if (null != f) {
                        var k, m = a;
                        k = e;
                        if (f instanceof Pb) f = Qb(f);
                        else if ("style" == k.toLowerCase()) {
                            if (!fa(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                            if (!(f instanceof Tb)) {
                                var m = "",
                                    n = void 0;
                                for (n in f) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(n)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + n);
                                    var q = f[n];
                                    if (null != q) {
                                        if (q instanceof Pb) q = Qb(q);
                                        else if (Wb.test(q)) {
                                            for (var u = !0, J = !0, pa = 0; pa < q.length; pa++) {
                                                var Oa = q.charAt(pa);
                                                "'" == Oa && J ? u = !u : '"' == Oa && u && (J = !J)
                                            }
                                            u && J || (q = "zClosurez")
                                        } else q = "zClosurez";
                                        m += n + ":" + q + ";"
                                    }
                                }
                                f = m ? Ub(m) : Vb
                            }
                            f instanceof Tb && f.constructor === Tb && f.g === Sb ? f = f.b : (da(f), f = "type_error:SafeStyle")
                        } else {
                            if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + f + '" given.');
                            if (k.toLowerCase() in ic)
                                if (f instanceof cc) f instanceof cc && f.constructor === cc && f.g === bc ? f = f.b : (da(f), f = "type_error:TrustedResourceUrl");
                                else if (f instanceof Zb) f instanceof Zb && f.constructor === Zb && f.g === Xb ? f = f.b : (da(f), f = "type_error:SafeUrl");
                            else if (w(f)) f instanceof Zb || (f = f.ya ? f.sa() : String(f), $b.test(f) || (f = "about:invalid#zClosurez"), f = ac(f)), f = f.sa();
                            else throw Error('Attribute "' + k + '" on tag "' + m + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                        }
                        f.ya && (f = f.sa());
                        k = k + '="' + va(String(f)) + '"';
                        g += " " + k
                    }
                }
            e = "<" + a + g;
            null != c ? v(c) || (c = [c]) : c = [];
            !0 === Mb[a.toLowerCase()] ? e += ">" : (d = kc(c), e += ">" + gc(d) + "</" +
                a + ">", d = d.Pa());
            (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
            return jc(e, d)
        },
        mc = function(a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = a[e];
            for (e in b) d[e] = b[e];
            for (e in c) {
                var g = e.toLowerCase();
                if (g in a) throw Error('Cannot override "' + g + '" attribute, got "' + e + '" with value "' + c[e] + '"');
                g in b && delete d[g];
                d[e] = c[e]
            }
            return d
        };
    jc("<!DOCTYPE html>", 0);
    jc("", 0);
    jc("<br>", 0);
    var I = function(a, b) {
        this.width = a;
        this.height = b
    };
    h = I.prototype;
    h.clone = function() {
        return new I(this.width, this.height)
    };
    h.isEmpty = function() {
        return !(this.width * this.height)
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    h.scale = function(a, b) {
        var c = x(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var nc = !G || 9 <= Number(Kb);
    !wb && !G || G && 9 <= Number(Kb) || wb && Jb("1.9.1");
    G && Jb("9");
    var qc = function(a) {
            return a ? new oc(pc(a)) : la || (la = new oc)
        },
        sc = function(a, b) {
            Wa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : rc.hasOwnProperty(d) ? a.setAttribute(rc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        rc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        tc = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new I(a.clientWidth, a.clientHeight)
        },
        uc = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : xb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return G && Jb("10") && a.pageYOffset != b.scrollTop ? new H(b.scrollLeft, b.scrollTop) : new H(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        K = function(a) {
            return a ? a.parentWindow ||
                a.defaultView : window
        },
        wc = function(a, b, c) {
            var d = arguments,
                e = document,
                g = String(d[0]),
                f = d[1];
            if (!nc && f && (f.name || f.type)) {
                g = ["<", g];
                f.name && g.push(' name="', va(f.name), '"');
                if (f.type) {
                    g.push(' type="', va(f.type), '"');
                    var k = {};
                    jb(k, f);
                    delete k.type;
                    f = k
                }
                g.push(">");
                g = g.join("")
            }
            g = e.createElement(g);
            f && (w(f) ? g.className = f : v(f) ? g.className = f.join(" ") : sc(g, f));
            2 < d.length && vc(e, g, d);
            return g
        },
        vc = function(a, b, c) {
            function d(c) {
                c && b.appendChild(w(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var g = c[e];
                !ea(g) || fa(g) && 0 < g.nodeType ? d(g) : D(xc(g) ? Sa(g) : g, d)
            }
        },
        yc = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Ec = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Fc = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        pc = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Gc = function(a) {
            try {
                return a.contentWindow ||
                    (a.contentDocument ? K(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        xc = function(a) {
            if (a && "number" == typeof a.length) {
                if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (y(a)) return "function" == typeof a.item
            }
            return !1
        },
        oc = function(a) {
            this.b = a || l.document || document
        };
    oc.prototype.oa = function(a) {
        return w(a) ? this.b.getElementById(a) : a
    };
    oc.prototype.createElement = function(a) {
        return this.b.createElement(String(a))
    };
    oc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    oc.prototype.contains = Fc;
    var L = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    h = L.prototype;
    h.clone = function() {
        return new L(this.top, this.right, this.bottom, this.left)
    };
    h.contains = function(a) {
        return this && a ? a instanceof L ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    h.scale = function(a, b) {
        var c = x(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var Hc = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Hc.prototype.clone = function() {
        return new Hc(this.left, this.top, this.width, this.height)
    };
    var Ic = function(a) {
        return new L(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    Hc.prototype.contains = function(a) {
        return a instanceof H ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Hc.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Hc.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Hc.prototype.scale = function(a, b) {
        var c = x(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var Kc = function(a, b, c) {
            if (w(b))(b = Jc(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        g = Jc(c, d);
                    g && (c.style[g] = e)
                }
        },
        Lc = {},
        Jc = function(a, b) {
            var c = Lc[b];
            if (!c) {
                var d = Da(b),
                    c = d;
                void 0 === a.style[d] && (d = (xb ? "Webkit" : wb ? "Moz" : G ? "ms" : tb ? "O" : null) + Ea(d), void 0 !== a.style[d] && (c = d));
                Lc[b] = c
            }
            return c
        },
        Mc = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -=
                a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Nc = function(a) {
            var b = pc(a),
                c = new H(0, 0),
                d;
            d = b ? pc(b) : document;
            d = !G || 9 <= Number(Kb) || "CSS1Compat" == qc(d).b.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = Mc(a);
            b = uc(qc(b).b);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Oc = function(a, b) {
            var c = new H(0, 0),
                d = K(pc(a));
            if (!qb(d, "parent")) return c;
            var e = a;
            do {
                var g;
                d == b ? g = Nc(e) : (g = Mc(e), g = new H(g.left, g.top));
                c.x += g.x;
                c.y += g.y
            } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));
            return c
        },
        Qc =
        function(a, b, c) {
            if (b instanceof I) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            a.style.width = Pc(b, !0);
            a.style.height = Pc(c, !0)
        },
        Pc = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        Sc = function(a) {
            var b = Rc,
                c;
            a: {
                c = pc(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break a
                }
                c = ""
            }
            if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                g = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = g;
            c.visibility = e;
            return a
        },
        Rc = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = xb && !b && !c;
            return p(b) && !d || !a.getBoundingClientRect ? new I(b, c) : (a = Mc(a), new I(a.right - a.left, a.bottom - a.top))
        };
    var Tc = function(a) {
            try {
                return !!a && null != a.location.href && qb(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Uc = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Vc = /https?:\/\/[^\/]+/,
        Wc = function() {
            var a = l;
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "http:":
                    case "file:":
                        return !1
                }
            } catch (c) {}
            return !0
        },
        Yc = function() {
            var a = Xc;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
    var Zc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $c = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var ad = function(a, b, c, d, e) {
            this.A = c || 4E3;
            this.h = a || "&";
            this.o = b || ",$";
            this.l = p(d) ? d : "trn";
            this.F = e || null;
            this.m = !1;
            this.g = {};
            this.w = 0;
            this.b = []
        },
        bd = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        cd = function(a, b, c, d) {
            a.b.push(b);
            a.g[b] = bd(c, d)
        },
        fd = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = dd(a) - d.length - 0;
            if (0 > e) return "";
            a.b.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var g = 0; g < a.b.length; g++)
                for (var f = a.b[g], k = a.g[f], m = 0; m < k.length; m++) {
                    if (!e) {
                        d = null == d ? f : d;
                        break
                    }
                    var n = ed(k[m], a.h, a.o);
                    if (n) {
                        n = c + n;
                        if (e >=
                            n.length) {
                            e -= n.length;
                            b += n;
                            c = a.h;
                            break
                        } else a.m && (c = e, n[c - 1] == a.h && --c, b += n.substr(0, c), c = a.h, e = 0);
                        d = null == d ? f : d
                    }
                }
            g = "";
            a.l && null != d && (g = c + a.l + "=" + (a.F || d));
            return b + g + ""
        },
        dd = function(a) {
            if (!a.l) return a.A;
            var b = 1,
                c;
            for (c in a.g) b = c.length > b ? c.length : b;
            return a.A - a.l.length - b - a.h.length - 1
        },
        ed = function(a, b, c, d, e) {
            var g = [];
            Uc(a, function(a, k) {
                var f = gd(a, b, c, d, e);
                f && g.push(k + "=" + f)
            });
            return g.join(b)
        },
        gd = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var g = [], f = 0; f < a.length; f++) g.push(gd(a[f], b, c, d + 1, e));
                    return g.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ed(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    var id = function(a, b, c, d, e) {
            if ((d ? a.h : Math.random()) < (e || a.b)) try {
                var g;
                c instanceof ad ? g = c : (g = new ad, Uc(c, function(a, b) {
                    var c = g,
                        d = c.w++,
                        e = bd(b, a);
                    c.b.push(d);
                    c.g[d] = e
                }));
                var f = fd(g, a.g, a.l, a.m + b + "&");
                f && hd(l, f)
            } catch (k) {}
        },
        hd = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    $c(d, "load", e);
                    $c(d, "error", e)
                };
                Zc(d, "load", e);
                Zc(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        };
    var jd = document,
        M = window;
    var kd = !!window.google_async_iframe_id,
        ld = kd && window.parent || window,
        md = function() {
            if (kd && !Tc(ld)) {
                var a = "." + jd.domain;
                try {
                    for (; 2 < a.split(".").length && !Tc(ld);) jd.domain = a = a.substr(a.indexOf(".") + 1), ld = window.parent
                } catch (b) {}
                Tc(ld) || (ld = window)
            }
            return ld
        };
    var nd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        od = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        g, f = null;
                    0 <= e ? (g = c[d].substring(0, e), f = c[d].substring(e + 1)) : g = c[d];
                    b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
        },
        pd = function(a, b, c) {
            if (v(b))
                for (var d = 0; d < b.length; d++) pd(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        },
        qd = function(a, b, c) {
            for (c =
                c || 0; c < b.length; c += 2) pd(b[c], b[c + 1], a);
            return a
        },
        rd = function(a, b) {
            var c = 2 == arguments.length ? qd([a], arguments[1], 0) : qd([a], arguments, 1);
            if (c[1]) {
                var d = c[0],
                    e = d.indexOf("#");
                0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
                e = d.indexOf("?");
                0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
            }
            return c.join("")
        },
        vd = /#|$/,
        wd = function(a, b) {
            var c = a.search(vd),
                d;
            a: {
                d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var g = a.charCodeAt(d - 1);
                    if (38 == g || 63 == g)
                        if (g = a.charCodeAt(d + e), !g || 61 == g || 38 == g || 35 == g) break a;
                    d += e +
                        1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
        };
    var xd = function(a, b) {
            this.b = a;
            this.g = b
        },
        yd = function(a, b, c) {
            this.url = a;
            this.Qb = b;
            this.vc = !!c;
            this.depth = x(void 0) ? void 0 : null
        },
        Ad = function(a) {
            a = a ? a : zd();
            for (var b = new yd(l.location.href, l, !1), c = a.length - 1, d = c; 0 <= d; --d) {
                var e = a[d];
                if (e.url && !e.vc) {
                    b = e;
                    break
                }
            }
            d = null;
            e = a.length && a[c].url;
            0 != b.depth && e && (d = a[c]);
            return new xd(b, d)
        },
        zd = function() {
            var a = l,
                b = [],
                c, d = null;
            do {
                var e = a;
                Tc(e) ? (c = e.location.href, d = e.document && e.document.referrer || null) : (c = d, d = null);
                b.push(new yd(c || "", e));
                try {
                    a = e.parent
                } catch (g) {
                    a =
                        null
                }
            } while (a && e != a);
            a = 0;
            for (e = b.length - 1; a <= e; ++a) b[a].depth = e - a;
            e = l;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) c = b[a], c.url || (c.url = e.location.ancestorOrigins[a - 1] || "", c.vc = !0);
            return b
        };
    var Bd = function(a, b, c) {
            this.h = a;
            this.m = b;
            this.g = c;
            this.l = this.b
        },
        Cd = function(a, b, c) {
            this.message = a;
            this.fileName = b || "";
            this.lineNumber = c || -1
        },
        Ed = function(a, b, c, d, e) {
            var g;
            try {
                g = c()
            } catch (m) {
                var f = a.g;
                try {
                    var k = Dd(m),
                        f = (e || a.l).call(a, b, k, void 0, d)
                } catch (n) {
                    a.b("pAR", n)
                }
                if (!f) throw m;
            } finally {}
            return g
        },
        Gd = function(a, b, c, d) {
            var e = Fd;
            return function() {
                for (var g = [], f = 0; f < arguments.length; ++f) g[f] = arguments[f];
                return Ed(e, a, function() {
                    return b.apply(c, g)
                }, d)
            }
        };
    Bd.prototype.b = function(a, b, c, d, e) {
        try {
            var g = e || this.m,
                f = new ad;
            f.m = !0;
            cd(f, 1, "context", a);
            b instanceof Cd || (b = Dd(b));
            cd(f, 2, "msg", b.message.substring(0, 512));
            b.fileName && cd(f, 3, "file", b.fileName);
            0 < b.lineNumber && cd(f, 4, "line", b.lineNumber.toString());
            b = {};
            if (d) try {
                d(b)
            } catch (m) {}
            d = [b];
            f.b.push(5);
            f.g[5] = d;
            var k = Ad();
            k.g && cd(f, 6, "top", k.g.url || "");
            cd(f, 7, "url", k.b.url || "");
            id(this.h, g, f, !1, c)
        } catch (m) {
            try {
                id(this.h, g, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Hd(m),
                    url: k.b.url
                }, !1, c)
            } catch (n) {}
        }
        return this.g
    };
    var Dd = function(a) {
            return new Cd(Hd(a), a.fileName, a.lineNumber)
        },
        Hd = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        };
    var Id, Fd, Jd, Kd = [],
        Ld = 1E-4 > Math.random(),
        Md = !(!M.performance || !M.performance.now);
    Id = new function() {
        this.g = "http:" === M.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.m = "/pagead/gen_204?id=";
        this.b = .01;
        this.h = Math.random()
    };
    Fd = new Bd(Id, "jserror", !0);
    var Pd = function(a, b) {
            var c = Nd;
            if (!Ld) return Ed(Fd, a, b, void 0, c);
            var d = Md ? M.performance.now() : ka(),
                c = Ed(Fd, a, b, void 0, c),
                d = Math.round((Md ? M.performance.now() : ka()) - d);
            Kd.push(a + "." + d);
            Jd || (Jd = M.setTimeout(Od, 500));
            return c
        },
        Nd = Fd.b,
        Od = function() {
            Kd.length && (id(Id, "execution_time", {
                data: Kd.join(","),
                nav_api: Md ? 1 : 0
            }, !0, Ld ? 1 : 0), Kd = [], M.clearTimeout(Jd), Jd = void 0)
        },
        Qd = function(a, b, c, d) {
            return Gd(a, b, c, d)
        },
        Rd = function(a, b) {
            return Gd(a, b, void 0, void 0)
        };
    var Sd = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Tc(a) && (c = a, b = d);
        return {
            Qb: c,
            level: b
        }
    };
    var Td = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var Ud = function(a, b, c) {
        this.h = b;
        this.g = c;
        this.l = a
    };
    A(Ud, Error);
    h = Ud.prototype;
    h.Zd = function() {
        return this.b
    };
    h.$d = function() {
        return this.h
    };
    h.Yd = function() {
        return this.g
    };
    h.yd = function() {
        return 1E3 > this.g ? this.g : 900
    };
    h.ae = function() {
        return this.l
    };
    h.toString = function() {
        return "AdError " + this.g + ": " + this.h + (null != this.b ? " Caused by: " + this.b : "")
    };
    var Vd = function() {
        this.L = this.L;
        this.F = this.F
    };
    Vd.prototype.L = !1;
    Vd.prototype.M = function() {
        this.L || (this.L = !0, this.K())
    };
    var Wd = function(a, b) {
        a.L ? p(void 0) ? b.call(void 0) : b() : (a.F || (a.F = []), a.F.push(p(void 0) ? z(b, void 0) : b))
    };
    Vd.prototype.K = function() {
        if (this.F)
            for (; this.F.length;) this.F.shift()()
    };
    var Xd = function(a) {
        a && "function" == typeof a.M && a.M()
    };
    var N = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.h = !1;
        this.Kc = !0
    };
    N.prototype.m = function() {
        this.h = !0
    };
    N.prototype.l = function() {
        this.Kc = !1
    };
    var Yd = function(a) {
        a.m()
    };
    var Zd = function(a, b) {
        N.call(this, "adError");
        this.b = a;
        this.A = b ? b : null
    };
    A(Zd, N);
    Zd.prototype.o = function() {
        return this.b
    };
    Zd.prototype.w = function() {
        return this.A
    };
    var O = function(a, b, c) {
        N.call(this, a);
        this.o = b;
        this.A = null != c ? c : null
    };
    A(O, N);
    O.prototype.F = function() {
        return this.o
    };
    O.prototype.B = function() {
        return this.A
    };
    var $d = function(a) {
            this.b = a
        },
        ce = function() {
            var a = ae(P);
            return be(a, "disableExperiments")
        },
        be = function(a, b) {
            if (bb(a.b, b)) {
                var c = a.b[b];
                if ("boolean" == typeof c) return c
            }
            return !1
        },
        de = function(a) {
            if (bb(a.b, "forceExperimentIds")) {
                a = a.b.forceExperimentIds;
                var b = [],
                    c = 0;
                v(a) && D(a, function(a) {
                    x(a) && (b[c++] = a)
                });
                return b
            }
            return null
        };
    var ee = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        fe = function(a) {
            a = String(a);
            if (ee(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        ie = function(a) {
            var b = [];
            ge(new he, a, b);
            return b.join("")
        },
        he = function() {},
        ge = function(a,
            b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (v(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", g = 0; g < b; g++) c.push(e), ge(a, d[g], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], "function" != typeof g && (c.push(e), je(d, c), c.push(":"), ge(a, g, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        je(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) &&
                            !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        ke = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        le = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        je = function(a, b) {
            b.push('"', a.replace(le, function(a) {
                var b = ke[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), ke[a] = b);
                return b
            }), '"')
        };
    var me = function(a) {
        return function() {
            return a
        }
    };
    var ne = "StopIteration" in l ? l.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        oe = function() {};
    oe.prototype.next = function() {
        throw ne;
    };
    oe.prototype.Ka = function() {
        return this
    };
    var pe = function(a) {
            if (a instanceof oe) return a;
            if ("function" == typeof a.Ka) return a.Ka(!1);
            if (ea(a)) {
                var b = 0,
                    c = new oe;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw ne;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        qe = function(a, b, c) {
            if (ea(a)) try {
                D(a, b, c)
            } catch (d) {
                if (d !== ne) throw d;
            } else {
                a = pe(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (d) {
                    if (d !== ne) throw d;
                }
            }
        };
    var re = function(a, b) {
        this.g = {};
        this.b = [];
        this.l = this.h = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            if (a instanceof re) d = a.xa(), c = a.Z();
            else {
                var c = [],
                    e = 0;
                for (d in a) c[e++] = d;
                d = c;
                c = $a(a)
            }
            for (e = 0; e < d.length; e++) this.set(d[e], c[e])
        }
    };
    h = re.prototype;
    h.wa = function() {
        return this.h
    };
    h.Z = function() {
        se(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.g[this.b[b]]);
        return a
    };
    h.xa = function() {
        se(this);
        return this.b.concat()
    };
    h.isEmpty = function() {
        return 0 == this.h
    };
    h.clear = function() {
        this.g = {};
        this.l = this.h = this.b.length = 0
    };
    h.Qa = function(a) {
        return te(this.g, a) ? (delete this.g[a], this.h--, this.l++, this.b.length > 2 * this.h && se(this), !0) : !1
    };
    var se = function(a) {
        if (a.h != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                te(a.g, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.h != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], te(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    };
    h = re.prototype;
    h.get = function(a, b) {
        return te(this.g, a) ? this.g[a] : b
    };
    h.set = function(a, b) {
        te(this.g, a) || (this.h++, this.b.push(a), this.l++);
        this.g[a] = b
    };
    h.forEach = function(a, b) {
        for (var c = this.xa(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    h.clone = function() {
        return new re(this)
    };
    h.Ka = function(a) {
        se(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new oe;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.b.length) throw ne;
            var e = d.b[b++];
            return a ? e : d.g[e]
        };
        return e
    };
    var te = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var ue = function(a, b) {
        this.g = this.w = this.h = "";
        this.o = null;
        this.m = this.A = "";
        this.l = !1;
        var c;
        a instanceof ue ? (this.l = p(b) ? b : a.l, ve(this, a.h), this.w = a.w, this.g = a.g, we(this, a.o), this.A = a.A, xe(this, a.b.clone()), this.m = a.m) : a && (c = String(a).match(nd)) ? (this.l = !!b, ve(this, c[1] || "", !0), this.w = ye(c[2] || ""), this.g = ye(c[3] || "", !0), we(this, c[4]), this.A = ye(c[5] || "", !0), xe(this, c[6] || "", !0), this.m = ye(c[7] || "")) : (this.l = !!b, this.b = new ze(null, 0, this.l))
    };
    ue.prototype.toString = function() {
        var a = [],
            b = this.h;
        b && a.push(Ae(b, Be, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.w) && a.push(Ae(b, Be, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, null != c && a.push(":", String(c));
        if (c = this.A) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Ae(c, "/" == c.charAt(0) ? Ce : Me, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", Ae(c, Ne));
        return a.join("")
    };
    ue.prototype.clone = function() {
        return new ue(this)
    };
    var ve = function(a, b, c) {
            a.h = c ? ye(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        },
        we = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.o = b
            } else a.o = null
        },
        xe = function(a, b, c) {
            b instanceof ze ? (a.b = b, Oe(a.b, a.l)) : (c || (b = Ae(b, Pe)), a.b = new ze(b, 0, a.l))
        },
        ye = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Ae = function(a, b, c) {
            return w(a) ? (a = encodeURI(a).replace(b, Qe), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Qe = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Be = /[#\/\?@]/g,
        Me = /[\#\?:]/g,
        Ce = /[\#\?]/g,
        Pe = /[\#\?@]/g,
        Ne = /#/g,
        ze = function(a, b, c) {
            this.g = this.b = null;
            this.h = a || null;
            this.l = !!c
        },
        Re = function(a) {
            a.b || (a.b = new re, a.g = 0, a.h && od(a.h, function(b, c) {
                var d = decodeURIComponent(b.replace(/\+/g, " "));
                Re(a);
                a.h = null;
                var d = Se(a, d),
                    e = a.b.get(d);
                e || a.b.set(d, e = []);
                e.push(c);
                a.g += 1
            }))
        };
    ze.prototype.wa = function() {
        Re(this);
        return this.g
    };
    var Te = function(a, b) {
        Re(a);
        b = Se(a, b);
        te(a.b.g, b) && (a.h = null, a.g -= a.b.get(b).length, a.b.Qa(b))
    };
    ze.prototype.clear = function() {
        this.b = this.h = null;
        this.g = 0
    };
    ze.prototype.isEmpty = function() {
        Re(this);
        return 0 == this.g
    };
    var Ue = function(a, b) {
        Re(a);
        b = Se(a, b);
        return te(a.b.g, b)
    };
    h = ze.prototype;
    h.xa = function() {
        Re(this);
        for (var a = this.b.Z(), b = this.b.xa(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    h.Z = function(a) {
        Re(this);
        var b = [];
        if (w(a)) Ue(this, a) && (b = Ra(b, this.b.get(Se(this, a))));
        else {
            a = this.b.Z();
            for (var c = 0; c < a.length; c++) b = Ra(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        Re(this);
        this.h = null;
        a = Se(this, a);
        Ue(this, a) && (this.g -= this.b.get(a).length);
        this.b.set(a, [b]);
        this.g += 1;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.Z(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    h.toString = function() {
        if (this.h) return this.h;
        if (!this.b) return "";
        for (var a = [], b = this.b.xa(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Z(d), g = 0; g < d.length; g++) {
                var f = e;
                "" !== d[g] && (f += "=" + encodeURIComponent(String(d[g])));
                a.push(f)
            }
        return this.h = a.join("&")
    };
    h.clone = function() {
        var a = new ze;
        a.h = this.h;
        this.b && (a.b = this.b.clone(), a.g = this.g);
        return a
    };
    var Se = function(a, b) {
            var c = String(b);
            a.l && (c = c.toLowerCase());
            return c
        },
        Oe = function(a, b) {
            b && !a.l && (Re(a), a.h = null, a.b.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (Te(this, b), Te(this, c), 0 < a.length && (this.h = null, this.b.set(Se(this, c), Sa(a)), this.g += a.length))
            }, a));
            a.l = b
        };
    var Q = function() {
            this.m = "always";
            this.o = 4;
            this.B = 1;
            this.g = !0;
            this.b = !1;
            this.l = "en";
            this.D = !1;
            this.w = this.A = "";
            this.F = null
        },
        Ve = "af am ar bg bn ca cs da de el en en_gb es es_419 et eu fa fi fil fr fr_ca gl gu he hi hr hu id in is it iw ja kn ko lt lv ml mr ms nb nl no pl pt_br pt_pt ro ru sk sl sr sv sw ta te th tr uk ur vi zh_cn zh_hk zh_tw zu".split(" "),
        We = function(a) {
            a = ya(a);
            B(a) || (a = a.substring(0, 20));
            return a
        };
    h = Q.prototype;
    h.Re = function(a) {
        this.m = a
    };
    h.Ke = function() {
        return this.m
    };
    h.Te = function(a) {
        this.o = a
    };
    h.Le = function() {
        return this.o
    };
    h.Ve = function(a) {
        this.C = a
    };
    h.Oe = function() {
        return this.C
    };
    h.Xe = function(a) {
        "boolean" == typeof a && (this.B = a ? 1 : 0)
    };
    h.Ye = function(a) {
        this.B = a
    };
    h.Qe = function(a) {
        this.g = a
    };
    h.Pe = function() {
        return this.g
    };
    h.We = function(a) {
        this.b = a
    };
    h.ff = function() {
        return this.b
    };
    h.Jf = function() {
        return !0
    };
    h.pa = function() {
        return !1
    };
    h.uc = function() {
        return !1
    };
    h.Se = function(a) {
        this.D = a
    };
    h.Hb = function() {
        return this.D
    };
    h.Aa = function() {
        return !1
    };
    h.Gb = function() {
        return !1
    };
    h.Ff = function() {
        return !1
    };
    h.Nc = function(a) {
        if (null != a) {
            a = a.toLowerCase().replace("-", "_");
            if (!Ma(Ve, a) && (a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "", !Ma(Ve, a))) return;
            this.l = a
        }
    };
    h.wd = function() {
        return this.l
    };
    h.pc = function(a) {
        this.A = We(a)
    };
    h.Me = function() {
        return this.A
    };
    h.Ue = function(a) {
        this.w = We(a)
    };
    h.Ne = function() {
        return this.w
    };
    var ae = function(a) {
        if (null == a.F) {
            var b = {},
                c = (new ue(K().location.href)).b;
            if (Ue(c, "tcnfp")) try {
                b = fe(c.get("tcnfp"))
            } catch (d) {}
            a.F = new $d(b)
        }
        return a.F
    };
    Q.prototype.L = function() {
        return !1
    };
    var P = new Q;
    window.console && "function" === typeof window.console.log && z(window.console.log, window.console);
    var Xe = function() {
            return Math.round(ka() / 1E3)
        },
        Ye = function(a) {
            var b;
            b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
            return null != b ? b : null != a ? a : Xe()
        };
    var Ze = function(a) {
        for (var b = [], c = a = K(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var $e = null,
        af = function() {
            this.b = {};
            this.g = 0
        },
        bf = function(a, b) {
            this.m = a;
            this.h = !0;
            this.b = b
        };
    bf.prototype.g = function() {
        return String(this.b)
    };
    var cf = function(a, b) {
        bf.call(this, String(a), b);
        this.l = a;
        this.b = !!b
    };
    A(cf, bf);
    cf.prototype.g = function() {
        return this.b ? "1" : "0"
    };
    var df = function(a, b) {
        bf.call(this, a, b)
    };
    A(df, bf);
    df.prototype.g = function() {
        return this.b ? Math.round(this.b.top) + "." + Math.round(this.b.left) + "." + (Math.round(this.b.top) + Math.round(this.b.height)) + "." + (Math.round(this.b.left) + Math.round(this.b.width)) : ""
    };
    var ef = function(a) {
            if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                a = a.split(".");
                var b = Number(a[0]),
                    c = Number(a[1]);
                return new df("", new Hc(c, b, Number(a[3]) - c, Number(a[2]) - b))
            }
            return new df("", new Hc(0, 0, 0, 0))
        },
        ff = function() {
            $e || ($e = new af);
            return $e
        };
    af.prototype.setItem = function(a) {
        this.b[a.m] = a
    };
    af.prototype.getItem = function(a) {
        return eb(this.b, a, null)
    };
    var gf = function(a) {
            var b = new Hc(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Hc(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                var e;
                a: {
                    e = b;
                    var g = a[d],
                        f = Math.max(e.left, g.left),
                        k = Math.min(e.left + e.width, g.left + g.width);
                    if (f <= k) {
                        var m = Math.max(e.top, g.top),
                            g = Math.min(e.top + e.height, g.top + g.height);
                        if (m <= g) {
                            e.left = f;
                            e.top = m;
                            e.width = k - f;
                            e.height = g - m;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        hf = function(a, b) {
            var c = a.getBoundingClientRect(),
                d = Oc(a,
                    b);
            return new Hc(Math.round(d.x), Math.round(d.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        jf = function(a, b, c) {
            if (b && c) {
                var d;
                a: {
                    d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var g = Math.max(b.top, c.top),
                            f = Math.min(b.top + b.height, c.top + c.height);
                        if (g <= f) {
                            d = new Hc(d, g, e - d, f - g);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;
                g = d ? b.height * b.width : 0;
                d = d && g ? Math.round(e / g * 100) : 0;
                a.setItem(new bf("vp", d));
                d && 0 < d ? (e = Ic(b), g = Ic(c), e = e.top >= g.top && e.top < g.bottom) : e = !1;
                a.setItem(new cf(512, e));
                d && 0 < d ? (e = Ic(b), g = Ic(c), e = e.bottom <= g.bottom && e.bottom > g.top) : e = !1;
                a.setItem(new cf(1024, e));
                d && 0 < d ? (e = Ic(b), g = Ic(c), e = e.left >= g.left && e.left < g.right) : e = !1;
                a.setItem(new cf(2048, e));
                d && 0 < d ? (b = Ic(b), c = Ic(c), c = b.right <= c.right && b.right > c.left) : c = !1;
                a.setItem(new cf(4096, c))
            }
        };
    var kf = !G || 9 <= Number(Kb),
        lf = G && !Jb("9");
    !xb || Jb("528");
    wb && Jb("1.9b") || G && Jb("8") || tb && Jb("9.5") || xb && Jb("528");
    wb && !Jb("8") || G && Jb("9");
    var mf = function(a) {
            return xb ? "webkit" + a : tb ? "o" + a.toLowerCase() : a.toLowerCase()
        },
        nf = {
            CLICK: "click",
            oi: "rightclick",
            ng: "dblclick",
            nh: "mousedown",
            th: "mouseup",
            sh: "mouseover",
            rh: "mouseout",
            qh: "mousemove",
            oh: "mouseenter",
            ph: "mouseleave",
            ui: "selectionchange",
            wi: "selectstart",
            hj: "wheel",
            Xg: "keypress",
            Wg: "keydown",
            Yg: "keyup",
            $f: "blur",
            Mg: "focus",
            og: "deactivate",
            Ng: G ? "focusin" : "DOMFocusIn",
            Og: G ? "focusout" : "DOMFocusOut",
            dg: "change",
            ki: "reset",
            ti: "select",
            Gi: "submit",
            Vg: "input",
            hi: "propertychange",
            Eg: "dragstart",
            zg: "drag",
            Bg: "dragenter",
            Dg: "dragover",
            Cg: "dragleave",
            Fg: "drop",
            Ag: "dragend",
            Ti: "touchstart",
            Si: "touchmove",
            Ri: "touchend",
            Qi: "touchcancel",
            Yf: "beforeunload",
            ig: "consolemessage",
            jg: "contextmenu",
            pg: "deviceorientation",
            tg: "DOMContentLoaded",
            ERROR: "error",
            Rg: "help",
            Zg: "load",
            ih: "losecapture",
            Uh: "orientationchange",
            ji: "readystatechange",
            li: "resize",
            pi: "scroll",
            $i: "unload",
            ag: "canplay",
            bg: "canplaythrough",
            Gg: "durationchange",
            Hg: "emptied",
            ENDED: "ended",
            bh: "loadeddata",
            eh: "loadedmetadata",
            fb: "pause",
            kd: "play",
            PLAYING: "playing",
            ii: "ratechange",
            ri: "seeked",
            si: "seeking",
            Di: "stalled",
            Hi: "suspend",
            Mi: "timeupdate",
            dj: "volumechange",
            fj: "waiting",
            Qg: "hashchange",
            Vh: "pagehide",
            Wh: "pageshow",
            gi: "popstate",
            kg: "copy",
            Yh: "paste",
            mg: "cut",
            Uf: "beforecopy",
            Vf: "beforecut",
            Wf: "beforepaste",
            Sh: "online",
            Ph: "offline",
            mh: "message",
            hg: "connect",
            Of: mf("AnimationStart"),
            Mf: mf("AnimationEnd"),
            Nf: mf("AnimationIteration"),
            Ui: mf("TransitionEnd"),
            $h: "pointerdown",
            fi: "pointerup",
            Zh: "pointercancel",
            ci: "pointermove",
            ei: "pointerover",
            di: "pointerout",
            ai: "pointerenter",
            bi: "pointerleave",
            Pg: "gotpointercapture",
            jh: "lostpointercapture",
            yh: "MSGestureChange",
            zh: "MSGestureEnd",
            Ah: "MSGestureHold",
            Bh: "MSGestureStart",
            Ch: "MSGestureTap",
            Dh: "MSGotPointerCapture",
            Eh: "MSInertiaStart",
            Fh: "MSLostPointerCapture",
            Gh: "MSPointerCancel",
            Hh: "MSPointerDown",
            Ih: "MSPointerEnter",
            Jh: "MSPointerHover",
            Kh: "MSPointerLeave",
            Lh: "MSPointerMove",
            Mh: "MSPointerOut",
            Nh: "MSPointerOver",
            Oh: "MSPointerUp",
            Ii: "text",
            Ji: "textInput",
            fg: "compositionstart",
            gg: "compositionupdate",
            eg: "compositionend",
            Kg: "exit",
            $g: "loadabort",
            ah: "loadcommit",
            fh: "loadredirect",
            gh: "loadstart",
            hh: "loadstop",
            ni: "responsive",
            Ai: "sizechanged",
            aj: "unresponsive",
            cj: "visibilitychange",
            Fi: "storage",
            yg: "DOMSubtreeModified",
            ug: "DOMNodeInserted",
            wg: "DOMNodeRemoved",
            xg: "DOMNodeRemovedFromDocument",
            vg: "DOMNodeInsertedIntoDocument",
            rg: "DOMAttrModified",
            sg: "DOMCharacterDataModified",
            Xf: "beforeprint",
            Lf: "afterprint"
        };
    var of = function(a, b) {
        N.call(this, a ? a.type : "");
        this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.b = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            var d = a.relatedTarget;
            d && wb && qb(d, "nodeName");
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY =
                a.screenY || 0) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY, this.screenX = c.screenX || 0, this.screenY = c.screenY || 0);
            this.button = a.button;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.b = a;
            a.defaultPrevented && this.l()
        }
    };
    A(of, N);
    of.prototype.m = function() {
        of.P.m.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    of.prototype.l = function() {
        of.P.l.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, lf) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var pf = "closure_listenable_" + (1E6 * Math.random() | 0),
        qf = function(a) {
            return !(!a || !a[pf])
        },
        rf = 0;
    var sf = function(a, b, c, d, e) {
            this.listener = a;
            this.b = null;
            this.src = b;
            this.type = c;
            this.Va = !!d;
            this.Ya = e;
            this.tb = ++rf;
            this.Ha = this.Ua = !1
        },
        tf = function(a) {
            a.Ha = !0;
            a.listener = null;
            a.b = null;
            a.src = null;
            a.Ya = null
        };
    var uf = function(a) {
            this.src = a;
            this.b = {};
            this.g = 0
        },
        wf = function(a, b, c, d, e, g) {
            var f = b.toString();
            b = a.b[f];
            b || (b = a.b[f] = [], a.g++);
            var k = vf(b, c, e, g); - 1 < k ? (a = b[k], d || (a.Ua = !1)) : (a = new sf(c, a.src, f, !!e, g), a.Ua = d, b.push(a));
            return a
        },
        xf = function(a, b) {
            var c = b.type;
            c in a.b && Qa(a.b[c], b) && (tf(b), 0 == a.b[c].length && (delete a.b[c], a.g--))
        },
        yf = function(a, b, c, d, e) {
            a = a.b[b.toString()];
            b = -1;
            a && (b = vf(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        vf = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var g = a[e];
                if (!g.Ha && g.listener == b &&
                    g.Va == !!c && g.Ya == d) return e
            }
            return -1
        };
    var zf = "closure_lm_" + (1E6 * Math.random() | 0),
        Af = {},
        Bf = 0,
        Cf = function(a, b, c, d, e) {
            if (v(b)) {
                for (var g = 0; g < b.length; g++) Cf(a, b[g], c, d, e);
                return null
            }
            c = Df(c);
            return qf(a) ? a.H(b, c, d, e) : Ef(a, b, c, !1, d, e)
        },
        Ef = function(a, b, c, d, e, g) {
            if (!b) throw Error("Invalid event type");
            var f = !!e,
                k = Ff(a);
            k || (a[zf] = k = new uf(a));
            c = wf(k, b, c, d, e, g);
            if (c.b) return c;
            d = Gf();
            c.b = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(Hf(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Bf++;
            return c
        },
        Gf = function() {
            var a = If,
                b = kf ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Jf = function(a, b, c, d, e) {
            if (v(b)) {
                for (var g = 0; g < b.length; g++) Jf(a, b[g], c, d, e);
                return null
            }
            c = Df(c);
            return qf(a) ? wf(a.A, String(b), c, !0, d, e) : Ef(a, b, c, !0, d, e)
        },
        Kf = function(a, b, c, d, e) {
            if (v(b))
                for (var g = 0; g < b.length; g++) Kf(a, b[g], c, d, e);
            else c = Df(c), qf(a) ? a.ma(b, c, d, e) : a && (a = Ff(a)) && (b = yf(a, b, c, !!d, e)) && Lf(b)
        },
        Lf = function(a) {
            if (!x(a) && a && !a.Ha) {
                var b =
                    a.src;
                if (qf(b)) xf(b.A, a);
                else {
                    var c = a.type,
                        d = a.b;
                    b.removeEventListener ? b.removeEventListener(c, d, a.Va) : b.detachEvent && b.detachEvent(Hf(c), d);
                    Bf--;
                    (c = Ff(b)) ? (xf(c, a), 0 == c.g && (c.src = null, b[zf] = null)) : tf(a)
                }
            }
        },
        Hf = function(a) {
            return a in Af ? Af[a] : Af[a] = "on" + a
        },
        Nf = function(a, b, c, d) {
            var e = !0;
            if (a = Ff(a))
                if (b = a.b[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.Va == c && !g.Ha && (g = Mf(g, d), e = e && !1 !== g)
                    }
                return e
        },
        Mf = function(a, b) {
            var c = a.listener,
                d = a.Ya || a.src;
            a.Ua && Lf(a);
            return c.call(d, b)
        },
        If = function(a, b) {
            if (a.Ha) return !0;
            if (!kf) {
                var c = b || aa("window.event"),
                    d = new of(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var g = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (m) {
                            g = !0
                        }
                        if (g || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (g = d.g; g; g = g.parentNode) c.push(g);
                    for (var g = a.type, f = c.length - 1; !d.h && 0 <= f; f--) {
                        d.g = c[f];
                        var k = Nf(c[f], g, !0, d),
                            e = e && k
                    }
                    for (f = 0; !d.h && f < c.length; f++) d.g = c[f],
                    k = Nf(c[f], g, !1, d),
                    e = e && k
                }
                return e
            }
            return Mf(a, new of(b, this))
        },
        Ff = function(a) {
            a = a[zf];
            return a instanceof
            uf ? a : null
        },
        Of = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Df = function(a) {
            if (y(a)) return a;
            a[Of] || (a[Of] = function(b) {
                return a.handleEvent(b)
            });
            return a[Of]
        };
    var R = function() {
        Vd.call(this);
        this.A = new uf(this);
        this.Ba = this;
        this.X = null
    };
    A(R, Vd);
    R.prototype[pf] = !0;
    h = R.prototype;
    h.Nb = function(a) {
        this.X = a
    };
    h.addEventListener = function(a, b, c, d) {
        Cf(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        Kf(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        var b, c = this.X;
        if (c)
            for (b = []; c; c = c.X) b.push(c);
        var c = this.Ba,
            d = a.type || a;
        if (w(a)) a = new N(a, c);
        else if (a instanceof N) a.target = a.target || c;
        else {
            var e = a;
            a = new N(d, c);
            jb(a, e)
        }
        var e = !0,
            g;
        if (b)
            for (var f = b.length - 1; !a.h && 0 <= f; f--) g = a.g = b[f], e = Pf(g, d, !0, a) && e;
        a.h || (g = a.g = c, e = Pf(g, d, !0, a) && e, a.h || (e = Pf(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.h && f < b.length; f++) g = a.g = b[f], e = Pf(g, d, !1, a) && e;
        return e
    };
    h.K = function() {
        R.P.K.call(this);
        if (this.A) {
            var a = this.A,
                b = 0,
                c;
            for (c in a.b) {
                for (var d = a.b[c], e = 0; e < d.length; e++) ++b, tf(d[e]);
                delete a.b[c];
                a.g--
            }
        }
        this.X = null
    };
    h.H = function(a, b, c, d) {
        return wf(this.A, String(a), b, !1, c, d)
    };
    h.ma = function(a, b, c, d) {
        var e;
        e = this.A;
        a = String(a).toString();
        if (a in e.b) {
            var g = e.b[a];
            b = vf(g, b, c, d); - 1 < b ? (tf(g[b]), Array.prototype.splice.call(g, b, 1), 0 == g.length && (delete e.b[a], e.g--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var Pf = function(a, b, c, d) {
        b = a.A.b[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var f = b[g];
            if (f && !f.Ha && f.Va == c) {
                var k = f.listener,
                    m = f.Ya || f.src;
                f.Ua && xf(a.A, f);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && 0 != d.Kc
    };
    var Qf = function(a, b) {
        R.call(this);
        this.h = a || 1;
        this.g = b || l;
        this.m = z(this.w, this);
        this.o = ka()
    };
    A(Qf, R);
    Qf.prototype.l = !1;
    Qf.prototype.b = null;
    Qf.prototype.w = function() {
        if (this.l) {
            var a = ka() - this.o;
            0 < a && a < .8 * this.h ? this.b = this.g.setTimeout(this.m, this.h - a) : (this.b && (this.g.clearTimeout(this.b), this.b = null), this.dispatchEvent("tick"), this.l && (this.b = this.g.setTimeout(this.m, this.h), this.o = ka()))
        }
    };
    Qf.prototype.start = function() {
        this.l = !0;
        this.b || (this.b = this.g.setTimeout(this.m, this.h), this.o = ka())
    };
    var Rf = function(a) {
        a.l = !1;
        a.b && (a.g.clearTimeout(a.b), a.b = null)
    };
    Qf.prototype.K = function() {
        Qf.P.K.call(this);
        Rf(this);
        delete this.g
    };
    var Sf = function(a, b, c) {
        if (y(a)) c && (a = z(a, c));
        else if (a && "function" == typeof a.handleEvent) a = z(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    };
    var Tf = F("Firefox"),
        Uf = ob() || F("iPod"),
        Vf = F("iPad"),
        Wf = F("Android") && !(nb() || F("Firefox") || F("Opera") || F("Silk")),
        Xf = nb(),
        Yf = F("Safari") && !(nb() || F("Coast") || F("Opera") || F("Edge") || F("Silk") || F("Android")) && !(ob() || F("iPad") || F("iPod"));
    var Zf = function(a) {
        return Ha(a, function(a) {
            a = a.toString(16);
            return 1 < a.length ? a : "0" + a
        }).join("")
    };
    var $f = null,
        ag = null;
    var bg = function() {
        this.g = -1
    };
    bg.prototype.reset = t;
    bg.prototype.m = t;
    bg.prototype.A = t;
    var cg = function() {
        this.b = {};
        return this
    };
    cg.prototype.set = function(a, b) {
        this.b[a] = b
    };
    var dg = function(a, b) {
        a.b.eb = eb(a.b, "eb", 0) | b
    };
    cg.prototype.get = function(a) {
        return eb(this.b, a, null)
    };
    var eg = function(a, b) {
        var c = 0;
        ab(K(), "ima", "video", "client", "tagged") && (c = 1);
        var d;
        d = null;
        a && (d = a());
        if (d) {
            var e = d;
            d = ff();
            d.b = {};
            var g = new cf(32, !0);
            g.h = !1;
            d.setItem(g);
            g = K().document;
            g = g.webkitVisibilityState || g.mozVisibilityState || g.visibilityState || g.msVisibilityState || "";
            d.setItem(new cf(64, "hidden" != g.toLowerCase().substring(g.length - 6) ? !0 : !1));
            var f;
            try {
                var k;
                var m = K().top;
                try {
                    k = !!m.location.href || "" === m.location.href
                } catch (u) {
                    k = !1
                }
                if (k) {
                    var n = Ze(e);
                    f = n && 0 != n.length ? "1" : "0"
                } else f = "2"
            } catch (u) {
                f =
                    "2"
            }
            d.setItem(new cf(256, "2" == f));
            d.setItem(new cf(128, "1" == f));
            n = k = K().top;
            "2" == f && (n = K());
            m = hf(e, n);
            d.setItem(new df("er", m));
            var q;
            try {
                q = n.document && !n.document.body ? null : tc(n || window)
            } catch (u) {
                q = null
            }
            q ? (n = uc(qc(n.document).b), d.setItem(new cf(16384, !!n)), q = n ? new Hc(n.x, n.y, q.width, q.height) : null) : q = null;
            d.setItem(new df("vi", q));
            if (q && "1" == f) {
                f = Ze(e);
                e = [];
                for (n = 0; n < f.length; n++)(g = hf(f[n], k)) && e.push(g);
                e.push(q);
                q = gf(e)
            }
            jf(d, m, q);
            d.g && (f = Xe() - d.g, d.setItem(new bf("ts", f)));
            d.g = Xe()
        } else d = ff(),
            d.b = {}, d.g = Xe(), d.setItem(new cf(32, !1));
        this.h = d;
        this.b = new cg;
        this.b.set("ve", 4);
        c && dg(this.b, 1);
        ab(K(), "ima", "video", "client", "crossdomainTag") && dg(this.b, 4);
        ab(K(), "ima", "video", "client", "sdkTag") && dg(this.b, 8);
        ab(K(), "ima", "video", "client", "jsTag") && dg(this.b, 2);
        b && eb(b, "fullscreen", !1) && dg(this.b, 16);
        this.g = d = null;
        if (c && (c = ab(K(), "ima", "video", "client"), c.getEData)) {
            this.g = c.getEData();
            if (c = ab(K(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (f = c()) this.g.extendWithDataFromTopIframe(f.tagstamp,
                    f.playstamp, f.lactstamp), c = this.h, d = f.er, f = f.vi, d && f && (d = ef(d).b, f = ef(f).b, e = null, c.getItem("er") && (e = c.getItem("er").b, e.top += d.top, e.left += d.left, c.setItem(new df("er", e))), c.getItem("vi") && (q = c.getItem("vi").b, q.top += d.top, q.left += d.left, k = [], k.push(q), k.push(d), k.push(f), d = gf(k), jf(c, e, d), c.setItem(new df("vi", f))));
            a: {
                if (this.g) {
                    if (this.g.getTagLoadTimestamp) {
                        d = this.g.getTagLoadTimestamp();
                        break a
                    }
                    if (this.g.getTimeSinceTagLoadSeconds) {
                        d = this.g.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                d = null
            }
        }
        this.b.set("td",
            Xe() - Ye(d))
    };
    var fg = new Qf(200),
        gg = function(a, b) {
            try {
                var c = new eg(a, b),
                    d = [],
                    e = Number(c.b.get("eb")),
                    g = c.b.b;
                "eb" in g && delete g.eb;
                var f, k = c.b,
                    g = [],
                    m;
                for (m in k.b) g.push(m + k.b[m]);
                (f = g.join("_")) && d.push(f);
                if (c.g) {
                    var n = c.g.serialize();
                    n && d.push(n)
                }
                var q, u = c.h;
                f = e;
                k = [];
                f || (f = 0);
                for (var J in u.b) {
                    var pa = u.b[J];
                    if (pa instanceof cf) pa.b && (f |= pa.l);
                    else {
                        var Oa, Ob = u.b[J];
                        (Oa = Ob.h ? Ob.g() : "") && k.push(J + Oa)
                    }
                }
                k.push("eb" + String(f));
                (q = k.join("_")) && d.push(q);
                c.b.set("eb", e);
                return d.join("_")
            } catch (ub) {
                return "tle;" + wa(ub.name,
                    12) + ";" + wa(ub.message, 40)
            }
        },
        hg = function(a) {
            Cf(fg, "tick", function() {
                var b = gg(a),
                    c = aa("ima.common.updateEngagementDetectionValue");
                c && y(c) && c(b)
            });
            fg.start();
            fg.dispatchEvent("tick")
        };
    var ig = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        cb = {
            Yb: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            hd: "metric",
            fb: "pause",
            ld: "resume",
            SKIPPED: "skip",
            nd: "viewable_impression",
            jd: "mute",
            md: "unmute",
            FULLSCREEN: "fullscreen",
            ad: "exitfullscreen",
            cd: "fully_viewable_audible_half_duration_impression",
            gd: "measurable_impression",
            Wc: "abandon",
            $c: "engagedview",
            IMPRESSION: "impression",
            Zc: "creativeview",
            LOADED: "loaded"
        },
        jg = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        kg = ["abandon"],
        lg = {
            Zi: -1,
            Yb: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            hd: 5,
            fb: 6,
            ld: 7,
            SKIPPED: 8,
            nd: 9,
            jd: 10,
            md: 11,
            FULLSCREEN: 12,
            ad: 13,
            cd: 14,
            gd: 15,
            Wc: 16,
            $c: 17,
            IMPRESSION: 18,
            Zc: 19,
            LOADED: 20
        },
        mg = {
            bj: 1,
            Rf: 2,
            Pf: 4,
            FULLSCREEN: 8,
            Tf: 16,
            Sf: 32,
            Qf: 64,
            lg: 128,
            Xh: 256
        };
    var ng = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4
            }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
        },
        og = function() {
            var a;
            jd.mozVisibilityState ? a = "mozvisibilitychange" : jd.webkitVisibilityState ? a = "webkitvisibilitychange" : jd.visibilityState && (a = "visibilitychange");
            return a
        };
    var pg = function() {
        this.b = 0;
        this.m = !1;
        this.g = -1;
        this.A = 0
    };
    var qg = !1,
        rg = "",
        sg = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (qg = !0, a.description)) {
                rg = sg(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                qg = !0;
                rg = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], qg = !(!a || !a.enabledPlugin))) {
            rg = sg(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            qg = !0;
            rg = sg(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            qg = !0;
            rg = "6.0.21";
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), qg = !0, rg = sg(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var tg = qg,
        ug = rg;
    var vg = function(a) {
            return (a = a.exec(E)) ? a[1] : ""
        },
        wg = function() {
            if (Tf) return vg(/Firefox\/([0-9.]+)/);
            if (G || vb || tb) return Ib;
            if (Xf) return vg(/Chrome\/([0-9.]+)/);
            if (Yf && !(ob() || F("iPad") || F("iPod"))) return vg(/Version\/([0-9.]+)/);
            if (Uf || Vf) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(E);
                if (a) return a[1] + "." + a[2]
            } else if (Wf) return (a = vg(/Android\s+([0-9.]+)/)) ? a : vg(/Version\/([0-9.]+)/);
            return ""
        }();
    var xg = {},
        yg = null;
    xg.le = 0;
    xg.nt = 2;
    xg.Fr = 3;
    xg.Po = 5;
    xg.me = 1;
    xg.om = 4;
    var Ag = function() {
        var a = M && M.document;
        xg.e = -1;
        xg.i = 6;
        xg.n = 7;
        xg.t = 8;
        if (!yg) {
            var b = [];
            Uc(xg, function(a, c) {
                b[a + 1] = c
            });
            var c = b.join("");
            yg = (c = a && a[c]) && z(c, a)
        }
        return yg
    };
    var Bg = function() {
        var a;
        if (a = yb && Yf) a = 0 <= Aa(wg, "6.0.1");
        return a && 0 <= Aa(ug, "10.1") ? !0 : !1
    };
    var Cg = function() {
        this.X = [0, 0, 0, 0, 0];
        this.b = [0, 0, 0, 0, 0];
        this.I = [0, 0, 0, 0, 0];
        this.N = this.C = -1;
        this.T = 1E3
    };
    Cg.prototype.l = function(a, b, c, d, e, g) {
        c = Dg(c.b);
        e = Dg(b.b);
        e = -1 == c || -1 == e ? -1 : Math.max(c, e);
        d = d ? e : c;
        this.C = -1 != this.C ? Math.min(this.C, b.b) : b.b;
        g && (this.N = Math.max(this.N, b.b)); - 1 != d && (this.X[d] += a);
        Eg(this.I, d, a);
        a = this.b;
        g = this.I;
        c = [0, 0, 0, 0, 0];
        for (e = 0; 4 >= e; e++) c[e] = Math.max(a[e], g[e]);
        this.b = c;
        a = this.I;
        g = Dg(b.b);
        for (c = 0; 4 >= c; ++c)
            if (c < g || b.m || -1 == g) a[c] = 0;
        return d
    };
    var Eg = function(a, b, c) {
            for (; 0 <= b && 4 >= b; b++) a[b] += c
        },
        Dg = function(a) {
            var b = -1;
            1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .3 <= a ? b = 3 : 0 < a && (b = 4);
            return b
        };
    if (jd && jd.URL) {
        var Xc = jd.URL,
            Fg = !(Xc && 0 < Yc().length);
        Fd.g = Fg
    }
    var Gg = function(a, b, c, d) {
        c = Gd(d || "osd_or_lidar::" + b, c, void 0, void 0);
        Zc(a, b, c, void 0);
        return c
    };
    var Hg = function(a, b) {
            var c = a || M;
            c.top != c && (c = c.top);
            try {
                return c.document && !c.document.body ? new I(-1, -1) : b ? (new I(c.innerWidth, c.innerHeight)).round() : tc(c || window).round()
            } catch (d) {
                return new I(-12245933, -12245933)
            }
        },
        Ig = 0,
        Og = function() {
            var a = S.getInstance().A,
                b = 0 <= Jg ? Kg() - Jg : -1,
                c = Lg ? Kg() - Mg : -1,
                d = 0 <= Ng ? Kg() - Ng : -1,
                e;
            if (79463068 == a) return 500;
            if (947190538 == a) a = [4E3], e = [250, 1E3];
            else if (947190541 == a) a = [4E3], e = [100, 1E3];
            else {
                if (947190542 == a) return 100;
                if (79463069 == a) return 200;
                a = [2E3, 4E3];
                e = [250, 500,
                    1E3
                ]
            }
            var g = b; - 1 != c && c < b && (g = c);
            for (var f, b = 0; b < a.length; ++b)
                if (g < a[b]) {
                    f = e[b];
                    break
                }
            void 0 === f && (f = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : f
        },
        Pg = (new Date).getTime(),
        Jg = -1,
        Lg = !1,
        Mg = -1,
        Ng = -1,
        Kg = function() {
            return (new Date).getTime() - Pg
        },
        Qg = function() {
            var a = wc("DIV");
            a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
            return a
        },
        Rg = function(a) {
            for (var b; a && a != a.parentElement;) {
                if (b = a.style) {
                    b = a;
                    var c = b.style[Da("display")];
                    b = "none" == ("undefined" !== typeof c ? c : b.style[Jc(b, "display")] ||
                        "")
                }
                if (b) return !0;
                b = a;
                a = a.parentElement
            }
            if (b && (a = pc(b))) {
                var d, e;
                try {
                    if (d = K(a)) e = d.frameElement
                } catch (g) {
                    return !1
                }
                if (d && e && d != d.parent) return Rg(e)
            }
            return !1
        },
        Sg = function(a) {
            return null != a && 0 <= a && 1 >= a
        };
    var Tg = function(a, b) {
            this.l = null;
            this.A = a;
            this.F = b || 1;
            this.b = "u"
        },
        Ug = function(a, b) {
            var c = b.right - b.left,
                d = b.bottom - b.top,
                e = Math.floor(c / 2),
                g = Math.floor(d / 2);
            switch (a.F) {
                case 4:
                    return a.A ? (e = Math.floor(.3 * c), g = Math.floor(.3 * d), [new H(e, g), new H(c - e, g), new H(e, d - g), new H(c - e, d - g)]) : [new H(e, 0), new H(0, g), new H(e, d - 1), new H(c - 1, g)];
                case 3:
                    return [new H(c - 1, 0), new H(e, g), new H(0, d - 1)];
                default:
                    return [new H(e, g)]
            }
        },
        Vg = function(a, b) {
            var c;
            try {
                c = b || a.l.getBoundingClientRect()
            } catch (e) {
                c = new L(0, 0, 0, 0)
            }
            var d =
                Ug(a, c);
            D(d, function(a) {
                a.x += c.left;
                a.y += c.top
            });
            return d
        },
        Wg = function(a, b) {
            Tg.call(this, a, b);
            this.g = [];
            this.w = !1;
            this.h = -1;
            this.m = this.o = 0
        };
    A(Wg, Tg);
    var Xg = function(a, b, c) {
            this.b = a;
            this.h = b;
            this.g = c
        },
        $g = function(a, b, c) {
            if (!(b && b.getBoundingClientRect && 0 <= Aa(ug, "11") && c) || G && 9 > Ib || 0 < a.g.length) return !1;
            try {
                var d = b.getBoundingClientRect()
            } catch (n) {
                return !1
            }
            var e = "DIV" == b.tagName || "INS" == b.tagName,
                g = pc(b),
                f = [];
            if (e) {
                var k = Qg(),
                    d = Ug(a, d);
                D(d, function(a, b) {
                    var d = new Yg("e", g, c, String(b));
                    this.g.push(d);
                    f.push(z(d.F, d, k, a))
                }, a);
                b.insertBefore(k, b.childNodes[0] || null)
            } else d = Vg(a, d), D(d, function(a, d) {
                var e = new Yg("e", g, c, String(d));
                this.g.push(e);
                f.push(z(e.w,
                    e, b, a))
            }, a);
            var m = !0;
            D(f, function(a) {
                m = m && a()
            });
            m ? (a.b = "l", a.l = b, a.w = !e) : (D(a.g, function(a) {
                Zg(a)
            }), a.g = []);
            return m
        },
        bh = function(a) {
            if (a.l && a.w) {
                var b = Vg(a);
                D(b, function(a, b) {
                    this.g[b] && ah(this.g[b], a)
                }, a)
            }
        },
        ch = function(a) {
            D(a.g, function(a) {
                Zg(a)
            });
            a.g = [];
            a.b = "d"
        },
        ih = function(a) {
            var b = ka(),
                c = a.o ? b - a.o : 0,
                d = -1,
                e = Ha(a.g, function(a) {
                    return dh(a, b)
                });
            4 == a.g.length ? d = a.A ? eh(e) : fh(e) : 3 == a.g.length ? d = gh(e) : 1 == a.g.length && (d = [-1, 0, 1, 2, 3, 5][dh(a.g[0], b) + 1]);
            a.m = d == a.h ? a.m + c : 0;
            c = new Xg(d, a.h, c);
            a.h = d;
            a.o = b;
            hh(a, d);
            bh(a);
            return c
        },
        Dh = function(a) {
            var b = Ua(Za(Ch));
            D(a, function(a) {
                0 <= a && ++b[a]
            });
            return b
        },
        fh = function(a) {
            a = Dh(a);
            return 4 == a[4] ? 6 : 3 <= a[4] ? 5 : 0 < a[4] ? 4 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        gh = function(a) {
            var b = Dh(a);
            return 4 == a[0] && 4 == a[2] ? 6 : 4 == a[1] ? 5 : 0 < b[4] ? 4 : 3 == b[2] ? 2 : 3 == b[1] ? 1 : 3 == b[0] ? 0 : 3
        },
        eh = function(a) {
            a = Dh(a);
            return 3 <= a[4] ? 5 : 2 == a[4] ? 8 : 0 < a[4] ? 7 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        hh = function(a, b) {
            if (0 == b && Eh(a)) a.b = "n";
            else switch (b) {
                case -1:
                    a.b = "d";
                    break;
                case 0:
                    a.b = "l";
                    break;
                case 1:
                    a.b = "f";
                    break;
                case 2:
                    a.b = "c";
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    a.b = "r"
            }
        },
        Eh = function(a) {
            return "n" == a.b ? !0 : "l" == a.b && 3E3 <= a.m
        },
        Yg = function(a, b, c, d) {
            this.b = null;
            this.l = a;
            this.o = "e" == a ? String(c) + "~" + String(d) : "";
            this.g = [];
            this.h = -1;
            this.A = 0;
            this.m = Ua(Za(Fh));
            this.C = Ua(Za(Ch));
            "e" == this.l && (Gh[this.o] = z(this.B, this));
            G ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' +
                Hh(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>', a = a.firstChild, a.id = String(Math.random())) : a = Ih(this, b);
            a.width = 1;
            a.height = 1;
            a.style.zIndex = -999999;
            this.b = a
        },
        Ch = {
            Yi: -1,
            LOADING: 0,
            bd: 1,
            Yc: 2,
            ed: 3,
            VISIBLE: 4
        },
        Fh = {
            LOADING: 0,
            bd: 1,
            Yc: 2,
            Pi: 3,
            Qh: 4,
            Wi: 5,
            Xi: 6,
            Vi: 7,
            Th: 8,
            Oi: 9
        },
        Gh = {},
        Ih = function(a, b) {
            var c = function(a, c, d) {
                    var e = b.createElement("param");
                    e.name = c;
                    e.value = d;
                    a.appendChild(e)
                },
                d = Hh(a),
                e = b.createElement("object");
            e.type = "application/x-shockwave-flash";
            e.data = d;
            c(e, "movie", d);
            c(e, "allowscriptaccess", "always");
            c(e, "wmode", "opaque");
            e.style.visibility = "s" == a.l ? "" : "hidden";
            e.style.opacity = 0;
            return e
        },
        Hh = function(a, b) {
            var c = rd("//pagead2.googlesyndication.com/osd/hbe.swf", "id", a.o);
            "s" == a.l && (c = "//pagead2.googlesyndication.com/osd/hbts.swf");
            b && (c = rd(c, "delay", "1"));
            return c
        };
    Yg.prototype.F = function(a, b) {
        if (!this.b) return !1;
        this.b.style.position = "absolute";
        ah(this, b);
        var c = !0;
        try {
            a.appendChild(this.b)
        } catch (d) {
            c = !1
        }
        return c
    };
    Yg.prototype.w = function(a, b) {
        if (!this.b || !a.parentNode) return !1;
        this.b.style.position = "fixed";
        ah(this, b);
        var c = !0;
        try {
            a.parentNode && a.parentNode.insertBefore(this.b, a.nextSibling)
        } catch (d) {
            c = !1
        }
        return c
    };
    var ah = function(a, b) {
            var c;
            if (c = a.b) c = a.b, c = new H(c.offsetLeft, c.offsetTop), c = !(b == c || b && c && b.x == c.x && b.y == c.y);
            if (c) {
                c = a.b;
                var d, e;
                b instanceof H ? (d = b.x, e = b.y) : (d = b, e = void 0);
                c.style.left = Pc(d, !1);
                c.style.top = Pc(e, !1)
            }
        },
        Zg = function(a) {
            if (a.b) try {
                Ec(a.b)
            } catch (b) {}
            a.b = null
        };
    Yg.prototype.B = function(a) {
        this.h = a ? 3 : 4
    };
    var dh = function(a, b) {
            if ("e" == a.l) {
                var c = null;
                try {
                    c = a.b.it()
                } catch (g) {}
                null === c ? (c = 0, 0 < a.h && (c = 2)) : c = c ? 3 : 4;
                ++a.C[c + 1];
                a.h = c
            } else {
                var d = Number(b),
                    e = Jh(a);
                Kh(a, e, d);
                c = a.g[a.g.length - 1];
                if (null === e) {
                    if (e = d = 0, 0 < a.h || x(c.cb)) e = d = 2
                } else null === c.cb || c.Ob >= d ? (d = 10 <= e ? 4 : 0, e = 0) : e > c.cb ? (c = (e - c.cb) / (d - c.Ob) * 1E3, d = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.A && 6 == c && (c = 7), e = c) : e = d = 1;
                6 == a.A && (--a.m[6], 4 == e || 8 == e ? ++a.m[5] : ++a.m[7]);
                ++a.m[e];
                a.h = d;
                a.A = e
            }
            return a.h
        },
        Jh = function(a) {
            var b = null;
            try {
                b = a.b.fc()
            } catch (c) {}
            return b
        },
        Kh = function(a, b, c) {
            var d = c - 1E3,
                e = a.g.length;
            D(a.g, function(a, b) {
                a.Ob <= d && (e = Math.min(e, b + 1))
            });
            var g = a.g.length - e;
            0 < g && a.g.splice(e, g);
            a.g.unshift({
                cb: b,
                Ob: c
            })
        };
    r("gteh", Qd("osd_or_lidar::gteh_ex", function(a, b) {
        var c = Gh[a];
        y(c) && c(b)
    }), void 0);
    var Lh = function() {
            this.A = !0;
            this.g = new Yg("s", jd);
            this.m = !1;
            this.F = this.w = this.G = this.b = this.l = this.o = this.C = this.D = this.L = this.h = this.B = null
        },
        Mh = {
            ed: 0,
            VISIBLE: 1
        },
        Nh = new H(-99999, 0),
        Oh = function(a, b) {
            b !== a.b && (a.b = b, a.L(b))
        },
        Ph = function(a) {
            var b = Jh(a.g);
            null === a.G && null !== b && null !== a.w && (a.G = ka() - a.w);
            return b
        },
        Qh = function(a) {
            var b = a.B.getBoundingClientRect(),
                c;
            c = null != a.C ? a.C.clone() : new H(Math.floor((b.right - b.left) / 2), Math.floor((b.bottom - b.top) / 2));
            a.m && (c.x += b.left, c.y += b.top);
            return c
        },
        Rh = function(a) {
            a.m &&
                (a.D = Qh(a));
            ah(a.g, a.D);
            a.o = M.setTimeout(Rd("osd_or_lidar::sfm_tpto", z(a.J, a)), 125)
        };
    Lh.prototype.J = function() {
        var a = Ph(this);
        if (null === a) Rh(this);
        else if (null === this.l) this.l = a, Rh(this);
        else {
            var b = a - this.l;
            this.l = a;
            0 == (4 <= b ? 1 : 0) ? (Rh(this), Oh(this, 0)) : (ah(this.g, Nh), this.o = M.setTimeout(Rd("osd_or_lidar::sfm_cpto", z(this.I, this)), 125))
        }
    };
    Lh.prototype.I = function() {
        var a = Ph(this),
            b = a - this.l;
        this.l = a;
        a = 4 <= b ? 1 : 0;
        Rh(this);
        Oh(this, 0 == a ? 1 : 0)
    };
    var Sh = function(a) {
            if (a.A) {
                var b = z(function() {
                        1 === ng(jd) ? (this.l = null, Rh(this)) : (M.clearTimeout(this.o), Oh(this, 0))
                    }, a),
                    c = og();
                if (c) {
                    var d = Gg(jd, c, b, "osd_or_lidar::sfm_pv");
                    a.F = function() {
                        $c(jd, c, d);
                        this.F = null
                    }
                }
                a.A = !1;
                a.b = null;
                b()
            }
        },
        Th = function(a) {
            a.A || (M.clearTimeout(a.o), null === a.F || a.F(), a.A = !0)
        },
        Uh = function(a, b) {
            Tg.call(this, a, b);
            this.g = [];
            this.m = this.w = null;
            this.h = !0;
            this.o = null
        };
    A(Uh, Tg);
    var Wh = function(a, b, c) {
            if (null !== a.m) return !1;
            a.l = b;
            a.w = c;
            c = b.getBoundingClientRect();
            c = "DIV" == b.tagName || "INS" == b.tagName ? Ug(a, c) : Vg(a, c);
            for (var d = 0; d < c.length; ++d) {
                var e = c[d],
                    g = new Lh,
                    f;
                f = g;
                var k = b,
                    m = z(a.B, a),
                    n = e;
                if (null === f.w) {
                    var q = "DIV" == k.tagName || "INS" == k.tagName;
                    f.m = !q;
                    f.B = k;
                    e = Qh(f);
                    if (null != n) {
                        e = n;
                        n = new H(0, 0);
                        if (f.m) {
                            var u = f.B.getBoundingClientRect();
                            n.x += u.left;
                            n.y += u.top
                        }
                        f.C = new H(e.x - n.x, e.y - n.y)
                    }
                    f.L = m;
                    q ? (f.h = Qg(), k.insertBefore(f.h, k.childNodes[0] || null), k = f.g.F(f.h, e)) : k = f.g.w(k, e);
                    k ? (f.w = ka(), f.D = e, f = !0) : (Zg(f.g), f.h && Ec(f.h), f = !1)
                } else f = !1;
                if (!f) return Vh(a), a.b = "c", !1;
                a.g.push(g)
            }
            a.m = ka();
            a.b = "l";
            return !0
        },
        Yh = function(a) {
            var b = Ua(Za(Mh));
            D(a.g, function(a) {
                null != a.b && 0 <= a.b && ++b[a.b]
            });
            switch (a.F) {
                case 4:
                    return Xh(a, b);
                case 3:
                    return 1 == a.g[0].b && 1 == a.g[2].b ? 3 : 1 == a.g[1].b ? 2 : 0 < b[1] ? 1 : 0;
                default:
                    return 1 == b[1] ? 2 : 0
            }
        },
        Xh = function(a, b) {
            var c = b[1];
            if (a.A) {
                if (3 <= c) return 2;
                if (2 == c) return 5;
                if (0 < c) return 4
            } else {
                if (4 == c) return 3;
                if (3 == c) return 2;
                if (0 < c) return 1
            }
            return 0
        };
    Uh.prototype.B = function() {
        var a = Yh(this);
        this.o != a && (this.o = a, this.w(a))
    };
    var Zh = function(a) {
            a.h && null !== a.m && "d" != a.b && (D(a.g, function(a) {
                Sh(a)
            }), a.b = "r", a.h = !1)
        },
        $h = function(a) {
            a.h || (D(a.g, function(a) {
                Th(a)
            }), a.h = !0)
        },
        Vh = function(a) {
            $h(a);
            D(a.g, function(a) {
                Th(a);
                a.g && (Zg(a.g), a.g = null);
                a.h && (Ec(a.h), a.h = null)
            });
            a.g = [];
            a.b = "d"
        };
    var S = function() {
            this.A = void 0;
            this.h = !Tc(M.top);
            var a = zd();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(nd)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.w = a;
            this.l = this.o = this.b = null;
            this.F = 0;
            this.g = !1;
            this.m = new L(0, 0, 0, 0)
        },
        ai = function(a, b) {
            if (b) {
                var c = b.split("-");
                4 == c.length && (a.m = new L(Ca(c[0]), Ca(c[3]), Ca(c[2]), Ca(c[1])))
            }
        };
    ca(S);
    var ci = function(a, b, c) {
            this.position = bi.clone();
            this.B = 0;
            this.pb = this.Xa();
            this.ob = -2;
            this.fd = ka();
            this.Vc = -1;
            this.N = b;
            this.J = -1 != b;
            this.O = null;
            this.Rc = c;
            this.Sb = this.ub = ba;
            this.G = this.element = a;
            this.h = null;
            this.I = 1;
            this.ca = !1;
            this.m = null;
            this.Ib = this.T = !1;
            this.Na = 1;
            this.Sc = !0;
            this.dd = S.getInstance().F++;
            this.Gc = 0;
            this.b = this.qb();
            this.Tc = -1
        },
        bi = new L(0, 0, 0, 0),
        di = {
            threshold: [0, .3, .5, .75, 1]
        };
    ci.prototype.Xa = function() {
        return new Cg
    };
    ci.prototype.ka = function() {
        return this.pb
    };
    var ei = function(a, b, c, d, e) {
            if (a.J) {
                var g = M.innerWidth,
                    f = M.innerHeight,
                    k = new L(Math.round(M.mozInnerScreenY), Math.round(M.mozInnerScreenX + g), Math.round(M.mozInnerScreenY + f), Math.round(M.mozInnerScreenX));
                c = new L(M.screenY + d, M.screenX + c.width, M.screenY + c.height, M.screenX);
                e || (d = new L(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.position.top ? a.position = d : (a.position.right = a.position.left + g, a.position.bottom = a.position.top + f), a.B = g * f);
                a.ra(k, c, b, e, !0, !0)
            }
        },
        hi = function(a, b, c) {
            if (a.J) {
                var d =
                    Ag();
                if (d) {
                    c || fi(a, M, !0);
                    if (a.Ib) var e = gi(a, d),
                        d = !0;
                    else var e = Math.floor((a.position.left + a.position.right) / 2),
                        g = Math.floor((a.position.top + a.position.bottom) / 2),
                        f = uc(document),
                        e = d(e - f.x, g - f.y) ? .5 : 0,
                        d = !1;
                    a.ra(a.position, e, b, c, !0, d)
                }
            }
        },
        ii = function(a, b, c) {
            if (c(b)) return b;
            for (;;) {
                var d = Math.floor((a + b) / 2);
                if (d == a || d == b) return a;
                c(d) ? a = d : b = d
            }
        },
        gi = function(a, b) {
            var c = uc(document),
                d = a.Na,
                e = Math.floor(a.position.left - c.x) + 1,
                g = Math.floor(a.position.top - c.y) + 1,
                f = Math.floor(a.position.right - c.x) - d,
                k = Math.floor(a.position.bottom -
                    c.y) - d,
                c = (k - g) * (f - e);
            if (g > k || e > f) return 0;
            var d = !!b(e, g),
                m = !!b(f, k);
            if (d && m) return 1;
            var n = !!b(f, g),
                q = !!b(e, k);
            if (d) k = ii(g, k, function(a) {
                return !!b(e, a)
            }), f = ii(e, f, function(a) {
                return !!b(a, g)
            });
            else if (n) k = ii(g, k, function(a) {
                return !!b(f, a)
            }), e = ii(f, e, function(a) {
                return !!b(a, g)
            });
            else if (q) g = ii(k, g, function(a) {
                return !!b(e, a)
            }), f = ii(e, f, function(a) {
                return !!b(a, k)
            });
            else if (m) g = ii(k, g, function(a) {
                return !!b(f, a)
            }), e = ii(f, e, function(a) {
                return !!b(a, k)
            });
            else {
                var u = Math.floor((e + f) / 2),
                    J = Math.floor((g + k) / 2);
                if (!b(u, J)) return 0;
                g = ii(J, g, function(a) {
                    return !!b(u, a)
                });
                k = ii(J, k, function(a) {
                    return !!b(u, a)
                });
                e = ii(u, e, function(a) {
                    return !!b(a, J)
                });
                f = ii(u, f, function(a) {
                    return !!b(a, J)
                })
            }
            return (k - g) * (f - e) / c
        },
        ji = function(a, b, c, d, e) {
            a.J && (d || fi(a, M, e), a.ra(a.position, c, b, d, !1, !0))
        };
    ci.prototype.Hc = ba;
    ci.prototype.hc = ba;
    ci.prototype.Pc = ba;
    var ki = function(a, b, c) {
        a.J && a.ra(a.position, c ? a.b.b : a.Gc, b, c, !0, !0)
    };
    h = ci.prototype;
    h.ra = function(a, b, c, d, e, g, f) {
        var k = f || {};
        f = this.ec(c, k);
        k = this.ib(a, b, d, k);
        x(b) || (this.O = new I(b.right - b.left, b.bottom - b.top));
        this.Pb(f, k, e && .5 <= this.b.b, g);
        this.N = c;
        0 < k.b && 0 > this.Tc && (this.Tc = c); - 1 == this.Vc && li(this) && (this.Vc = c); - 2 == this.ob && (this.ob = a && a != bi && 0 != this.B && this.O && this.O.height && this.O.width ? this.Oa(a, new L(0, this.O.width, this.O.height, 0)) : -1);
        this.b = k;
        d && (this.b.b = 0);
        this.ub(this)
    };
    h.Pb = function(a, b, c, d) {
        this.ka().l(a, b, this.b, c, .5, d)
    };
    h.qb = function() {
        return new pg
    };
    h.ib = function(a, b, c) {
        var d = this.qb();
        d.m = c;
        c = ng(jd);
        d.g = 0 == c ? -1 : 1 == c ? 0 : 1;
        var e;
        x(b) ? d.b = this.Oa(b) : (e = b, d.b = this.Oa(a, e));
        (a = e || null) ? (a = (a.bottom - a.top) * (a.right - a.left), a = 0 < a ? Math.min(this.B * d.b / a, 1) : 0) : a = 0;
        d.A = a;
        return d
    };
    h.ec = function(a) {
        if (-1 == this.N) return 0;
        a = a - this.N || 1;
        return 1E4 < a ? 1 : a
    };
    h.Oa = function(a, b) {
        if (x(a)) return a;
        if (b) {
            var c;
            c = null === a || null === b ? bi.clone() : new L(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left));
            return 0 >= this.B || 0 >= c.right - c.left || 0 >= c.bottom - c.top ? 0 : (c.bottom - c.top) * (c.right - c.left) / this.B
        }
        return 0
    };
    var mi = function(a, b) {
            a.I = 3;
            if (!a.G || Bg()) return a.ca = !0, !1;
            var c = new Wg(!1, a.I),
                d = $g(c, a.G, String(a.dd));
            d ? (a.Sb = b, a.h = c) : a.ca = !0;
            return d
        },
        oi = function(a, b) {
            if (!a.element || !Bg()) return !1;
            a.I = 3;
            var c = new Uh(!1, a.I),
                d = Wh(c, a.element, z(function(a) {
                    ni(this, Kg(), !1, b, [0, .01, .5, 1, .01, .3][a])
                }, a));
            d && (a.m = c, Zh(c));
            return d
        },
        ni = function(a, b, c, d, e) {
            a.J && pi(a) && (c ? a.m && $h(a.m) : (fi(a, d, !0), a.m && Zh(a.m)), a.ra(a.position, e || a.b.b, b, c, !1, !1), !li(a) || a.kb() || a.m && Vh(a.m))
        },
        pi = function(a) {
            return null !== a.m && "d" !=
                a.m.b
        },
        fi = function(a, b, c, d) {
            if (d) a.position = d;
            else {
                b = c ? b : b.top;
                try {
                    var e = bi.clone(),
                        g = new H(0, 0);
                    if (a.G) {
                        var f = 1 == a.Rc;
                        !c && f && Rg(a.G) || (e = a.G.getBoundingClientRect());
                        g = Oc(a.G, b)
                    }
                    var k = g.x,
                        m = g.y;
                    a.position = new L(Math.round(m), Math.round(k + (e.right - e.left)), Math.round(m + (e.bottom - e.top)), Math.round(k))
                } catch (n) {
                    a.position = bi.clone()
                }
            }
            a.B = (a.position.bottom - a.position.top) * (a.position.right - a.position.left)
        };
    ci.prototype.kb = function() {
        return !1
    };
    var li = function(a) {
            a = a.pb;
            var b = Dg(.5);
            return -1 == b ? !1 : a.b[b] >= a.T
        },
        qi = function(a, b) {
            var c = Math.pow(10, b);
            return Math.floor(a * c) / c
        },
        ri = function(a) {
            a.h && ch(a.h);
            a.m && Vh(a.m)
        },
        ti = function(a) {
            var b = !1,
                c = a.G;
            M.document && M.document.body && 12 == a.Rc && (c = M.document.body);
            if (null === c) return !1;
            Pd("osd_adblock::sunio", function() {
                var d = new M.IntersectionObserver(function(b) {
                    try {
                        var e;
                        if (!b || !b.length || 0 >= b.length) e = null;
                        else {
                            for (var f = b[0], k = 1; k < b.length; k++) b[k].time > f.time && (f = b[k]);
                            e = f
                        }
                        if (e) {
                            var m, n = e.boundingClientRect;
                            m = new L(n.top, n.right, n.bottom, n.left);
                            a.b.b = Math.min(Math.max(e.intersectionRect.width * e.intersectionRect.height / (e.boundingClientRect.width * e.boundingClientRect.height), 0), 1);
                            a.Gc = a.b.b;
                            fi(a, M, !0, m)
                        }
                    } catch (q) {
                        try {
                            d.unobserve(c), Fd.b("osd_adblock::nioc", q, void 0, void 0)
                        } catch (u) {}
                    }
                }, di);
                d.observe(c);
                si(c);
                b = !0
            });
            return b
        },
        si = function(a) {
            if (a && (a = a.style)) {
                var b = a.opacity;
                a.opacity = .98;
                a.opacity = .99;
                a.opacity = b
            }
        };
    var ui = function() {
        pg.call(this);
        this.l = !1;
        this.volume = void 0;
        this.h = !1
    };
    A(ui, pg);
    var vi = function(a) {
        return Sg(a.volume) && .1 <= a.volume
    };
    var wi = function() {
            this.b = {};
            for (var a in mg) this.b[mg[a]] = 0
        },
        xi = function(a, b) {
            0 == a.b[b] && (a.b[b] = 1)
        },
        yi = function(a) {
            var b = 0,
                c;
            for (c in a.b) {
                var d = parseInt(c, 10);
                1 == a.b[d] && (b += d, a.b[d] = 2)
            }
            return b
        };
    var zi = function() {
        Cg.call(this);
        this.S = this.w = this.D = 0;
        this.h = -1;
        this.A = this.m = this.G = this.O = this.o = 0;
        this.L = [0, 0, 0, 0, 0];
        this.B = this.g = -1;
        this.F = this.J = 0;
        this.T = 2E3
    };
    A(zi, Cg);
    var Ai = function(a, b, c) {
        var d = a.S;
        Lg || c || -1 == a.h || (d += b - a.h);
        return d
    };
    zi.prototype.l = function(a, b, c, d, e, g) {
        if (b.h) return -1;
        d = zi.P.l.call(this, a, b, c, d, e, g);
        e = Dg(e);
        e = -1 != d && d <= e;
        g = vi(b) && vi(c);
        Sg(b.volume) && (this.g = -1 != this.g ? Math.min(this.g, b.volume) : b.volume, this.B = Math.max(this.B, b.volume));
        e && (this.w += a);
        this.D += a;
        c.l && (this.J += a, this.F += a);
        g && (this.G += a, this.m += a, Eg(this.L, d, a), e ? this.A += a : this.o += a, this.O = Math.max(this.o, this.O));
        if (e || !vi(b)) this.o = 0;
        return d
    };
    var Bi = function(a, b, c, d) {
        ci.call(this, b, c, d);
        this.La = 0;
        this.F = {};
        this.w = new wi;
        this.Xb = {};
        this.Ia = this.l = "";
        this.Tb = !1;
        this.aa = [];
        this.zc = this.Vb = this.Wb = this.Kb = this.D = !1;
        this.o = void 0;
        this.C = -1;
        this.lb = void 0;
        this.S = !1;
        this.ha = this.ea = 0;
        this.ia = 1;
        this.Ba = -1;
        this.da = this.Jb = !1;
        this.L = this.Rb = 0;
        this.Ac = -1;
        this.X = this.wb = this.na = this.$ = this.g = 0;
        this.V = -1;
        this.Oc = this.Lc = 0;
        this.Ub = this.A = !1;
        this.Qc = 0;
        this.va = ba;
        this.Y = [this.Xa()];
        b = S.getInstance();
        fi(this, a, b.h)
    };
    A(Bi, ci);
    Bi.prototype.Hc = function(a) {
        500 < a - this.Ac && (a = aa("ima.admob.getViewability"), y(a) && a(this.l))
    };
    var Ci = function(a) {
        return p(a) ? Number(a) ? qi(a, 3) : 0 : a
    };
    h = Bi.prototype;
    h.hc = function(a) {
        this.Ac = Kg();
        this.Pc(a)
    };
    h.Pc = function(a) {
        var b = a.opt_nativeViewBounds || {},
            c = a.opt_nativeViewVisibleBounds || {},
            d = a.opt_nativeTime || -1,
            e = a.opt_nativeVolume,
            b = new L(b.top || 0, b.left + b.width || 0, b.top + b.height || 0, b.left || 0);
        a = a.opt_nativeViewHidden ? bi.clone() : new L(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0);
        c = void 0;
        "n" == this.o && (c = {}, c.volume = e);
        this.B = (b.bottom - b.top) * (b.right - b.left);
        this.position = b;
        this.ra(b, a, d, !1, !0, !0, c)
    };
    h.ra = function(a, b, c, d, e, g, f) {
        f = f || this.va(this) || {};
        this.C = f.duration || this.C;
        this.lb = f.isVpaid || this.lb;
        this.S = g;
        Bi.P.ra.call(this, a, b, c, d, e, g, f)
    };
    h.Pb = function(a, b, c, d) {
        Bi.P.Pb.call(this, a, b, c, d);
        this.Y[this.Y.length - 1].l(a, b, this.b, c, .5, d);
        this.da = vi(this.b) && vi(b); - 1 == this.Ba && this.Jb && (this.Ba = this.ka().D);
        a = li(this);
        b = this.b;
        a && xi(this.w, 1);
        Sg(b.volume) && xi(this.w, 2);
        this.da && xi(this.w, 4);
        this.A && xi(this.w, 8); - 1 != b.g && (xi(this.w, 16), 1 == b.g && xi(this.w, 32));
        this.da && a && xi(this.w, 64);
        this.S && xi(this.w, 128);
        this.S && 0 < b.b && xi(this.w, 256)
    };
    h.Xa = function() {
        return new zi
    };
    h.ka = function() {
        return this.pb
    };
    h.qb = function() {
        return new ui
    };
    h.ib = function(a, b, c, d) {
        a = Bi.P.ib.call(this, a, b, c, d);
        a.l = this.A;
        a.h = this.D;
        a.volume = d.volume;
        Sg(a.volume) || (this.Rb++, d = this.b, Sg(d.volume) && (a.volume = d.volume));
        return a
    };
    h.ec = function(a, b) {
        var c = p(b.currentTime) ? b.currentTime : this.ea,
            d = Di(this, a),
            e = c - this.ea,
            g = b.isYouTube,
            f = p(b.isPlaying) ? b.isPlaying : !0,
            k = 0;
        2 != this.ia ? (0 <= e ? (this.ha += d, this.X += Math.max(d - e, 0), k = Math.min(e, this.ha)) : this.wb += Math.abs(e), 0 != e && (this.ha = 0), -1 == this.V && 0 < e && (this.V = 0 <= Ng ? Kg() - Ng : -1)) : (f || this.D || (this.X += d), -1 == this.V && f && (this.V = 0 <= Ng ? Kg() - Ng : -1));
        this.ea = c;
        if (g) {
            if (1 == this.ia) return k;
            if (2 == this.ia) return f ? d : 0
        }
        return Di(this, a)
    };
    var Di = function(a, b) {
            if (-1 == a.N) return 0;
            var c = b - a.N || 1,
                d = 1E4;
            p(a.C) && -1 != a.C && (d = Math.max(d, a.C / 3));
            return c > d ? 1 : c
        },
        Ei = function(a) {
            var b = 0,
                c = a.b;
            .5 <= c.b && (b += 1);
            Sg(c.volume) && (b += 2);
            a.da && (b += 4);
            a.A && (b += 8); - 1 != c.g && (b += 16, 1 == c.g && (b += 32));
            a.S && (b += 128);
            a.S && 0 < c.b && (b += 256);
            return b
        };
    Bi.prototype.Oa = function(a, b) {
        return this.A ? 1 : Bi.P.Oa.call(this, a, b)
    };
    Bi.prototype.kb = function() {
        return !0
    };
    var Fi = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Hi = function(a, b) {
            var c = a.Xb[b];
            if (null != c) return c;
            a: if (Ma(kg, b)) c = !0;
                else {
                    c = a.F[b];
                    if (p(c) && (a.F[b] = !0, !c)) {
                        c = !0;
                        break a
                    }
                    c = !1
                }
            c = Gi(a, c, c);
            "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm");
            return c
        },
        Gi = function(a, b, c) {
            if (a.T) return {
                "if": 0
            };
            var d = a.position.clone();
            d.round();
            var e = Ha(a.aa, function(a) {
                    return 100 * a | 0
                }),
                g = S.getInstance(),
                f = a.ka(),
                k = {};
            k["if"] = g.h ? 1 : void 0;
            k.sdk = a.o ? a.o : void 0;
            k.t = a.fd;
            k.p = [d.top, d.left,
                d.bottom, d.right
            ];
            k.tos = f.X;
            k.mtos = f.b;
            k.ps = void 0;
            k.pt = e;
            k.vht = Ai(f, Kg(), !!a.D);
            k.mut = f.O;
            k.a = Ci(a.b.volume);
            k.mv = Ci(f.B);
            k.ns = a.Qc;
            k.fs = a.A ? 1 : 0;
            k.ft = f.J;
            k.at = f.G;
            k.as = .1 <= f.g ? 1 : 0;
            k.atos = f.L;
            k.uac = a.Rb;
            k.vpt = f.D;
            k.is = Ei(a);
            k.ic = yi(a.w);
            Ii && (k.nio = 1);
            if ("h" == a.o || "as" == a.o) k.gmm = "2";
            a.Ib && (k.efpf = a.Na);
            a.h && (k.swf = a.h.b, k.px = a.I);
            a.m && (k.sfm = a.m.b, k.px = a.I);
            0 < a.Oc && (k.nnut = a.Oc);
            k.tcm = a.ia;
            k.nmt = a.wb;
            k.bt = a.X;
            k.pst = a.V;
            k.mmct = a.Lc;
            k.vpaid = a.lb;
            k.dur = a.C;
            k.vmtime = a.ea;
            b && (li(a) && (k.dtos = f.w, k.dav =
                f.A, k.dtoss = a.La + 1, c && (f.w = 0, f.A = 0, a.La++)), k.dat = f.m, k.dft = f.F, c && (f.m = 0, f.F = 0));
            g.l && (k.ps = [g.l.width, g.l.height]);
            k.dom = g.w;
            a.ca && (k.fmf = "1", k.px = a.I);
            a.Kb && (k.ven = "1");
            a.Wb && (k.veh = "1");
            a.L && (k.vds = a.L);
            a.g && (k.vmer = a.g);
            a.$ && (k.vmmk = a.$);
            a.na && (k.vmiec = a.na);
            S.getInstance();
            Ji() ? (k.c = qi(a.b.b, 2), k.ss = qi(Ki(a), 2)) : k.tth = Kg() - Ig;
            k.mc = qi(f.N, 2);
            k.lte = qi(a.ob, 2);
            a = a.Y[a.Y.length - 1];
            k.qmtos = a.b;
            k.qmc = qi(a.C, 2);
            k.qmv = Ci(a.B);
            k.qas = .1 <= a.g ? 1 : 0;
            return k
        },
        Ki = function(a) {
            if (a.A) return 1;
            var b = M.screen.width *
                M.screen.height;
            return 0 >= b ? -1 : Math.min(a.B * a.b.b / b, 1)
        };
    var Li = function(a, b, c) {
        Vd.call(this);
        this.l = null != c ? z(a, c) : a;
        this.h = b;
        this.g = z(this.wf, this);
        this.b = []
    };
    A(Li, Vd);
    h = Li.prototype;
    h.ab = !1;
    h.Ca = null;
    h.dc = function(a) {
        this.b = arguments;
        this.Ca ? this.ab = !0 : Mi(this)
    };
    h.K = function() {
        Li.P.K.call(this);
        this.Ca && (l.clearTimeout(this.Ca), this.Ca = null, this.ab = !1, this.b = [])
    };
    h.wf = function() {
        this.Ca = null;
        this.ab && (this.ab = !1, Mi(this))
    };
    var Mi = function(a) {
        a.Ca = Sf(a.g, a.h);
        a.l.apply(null, a.b)
    };
    var Oi = function() {
            return !Ni() && (F("iPod") || F("iPhone") || F("Android") || F("IEMobile"))
        },
        Ni = function() {
            return F("iPad") || F("Android") && !F("Mobile") || F("Silk")
        };
    var Pi = function(a, b) {
            this.g = a || 0;
            this.b = b || ""
        },
        Qi = function(a) {
            return !!a.g || !!a.b
        },
        Ri = function(a, b) {
            a.g && (b[4] = a.g);
            a.b && (b[12] = a.b)
        };
    Pi.prototype.match = function(a) {
        return Qi(this) && Qi(a) ? this.b || a.b ? this.b == a.b : this.g || a.g ? this.g == a.g : !1 : !1
    };
    Pi.prototype.toString = function() {
        var a = "" + this.g;
        this.b && (a += "-" + this.b);
        return a
    };
    var Si = function(a) {
            var b = [];
            Wa(a, function(a, d) {
                var c = encodeURIComponent(d),
                    g = a;
                w(g) && (g = encodeURIComponent(g));
                b.push(c + "=" + g)
            });
            b.push("24=" + (new Date).getTime());
            return b.join("\n")
        },
        Ti = 0,
        Ui = 0,
        Vi = function(a) {
            var b = 0,
                c = M;
            try {
                if (c && c.Goog_AdSense_getAdAdapterInstance) return c
            } catch (e) {}
            var d = c.location && c.location.ancestorOrigins;
            if (p(d) && (!d || !d.length)) return null;
            for (; c && 5 > b;) {
                try {
                    if (c.google_osd_static_frame) return c
                } catch (e) {}
                try {
                    if (c.aswift_0 && c.aswift_0.google_osd_static_frame) return c.aswift_0
                } catch (e) {}
                b++;
                c = a ? 0 < c.location.ancestorOrigins.length && c.location.origin == c.location.ancestorOrigins[0] ? c.parent : null : c != c.parent ? c.parent : null
            }
            return null
        },
        Wi = function(a, b, c, d, e, g, f) {
            f = f || ba;
            if (10 < Ui) M.clearInterval(Ti), f();
            else if (++Ui, M.postMessage && Qi(b)) {
                if (g = Vi(g)) {
                    f = {};
                    Ri(b, f);
                    f[0] = "goog_request_monitoring";
                    f[6] = a;
                    f[16] = c;
                    d && d.length && (f[17] = d.join(","));
                    e && (f[19] = e);
                    try {
                        var k = Si(f);
                        g.postMessage(k, "*")
                    } catch (m) {}
                }
            } else M.clearInterval(Ti), f()
        };
    var Xi = null,
        Yi = null,
        Zi = null,
        $i = null,
        aj = null,
        bj = !1,
        cj = !1,
        ij = function() {
            if (!bj) {
                bj = !0;
                var a = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || l.msRequestAnimationFrame;
                if (!Xi && !Ii && !dj) {
                    var b;
                    if (a) {
                        var c = Gd("osd_or_lidar::throttled_scroll_raf_callback", ej, void 0, void 0);
                        b = function() {
                            a(function() {
                                M.setTimeout(c, 0)
                            })
                        }
                    } else b = ej;
                    Yi = new Li(Gd("osd_or_lidar::throttled_scroll_timeout", b, void 0, void 0), 100);
                    b = z(Yi.dc, Yi);
                    Xi = Gg(M, "scroll", b, "osd_or_lidar::throttled_scroll")
                }
                if (!Zi &&
                    !Ii && !dj) {
                    if (a) {
                        var d = Gd("osd_or_lidar::throttled_resize_raf_callback", fj, void 0, void 0);
                        b = function() {
                            a(function() {
                                M.setTimeout(d, 0)
                            })
                        }
                    } else b = fj;
                    $i = new Li(Gd("osd_or_lidar::throttled_resize_timeout", b, void 0, void 0), 100);
                    b = z($i.dc, $i);
                    Zi = Gg(M, "resize", b, "osd_or_lidar::throttled_resize")
                }
                gj();
                hj()
            }
        },
        fj = function() {
            jj(!1);
            ej()
        },
        ej = function() {
            kj(lj(), !1)
        },
        tj = function() {
            var a, b = S.getInstance();
            mj && !b.g && (b.b = Hg(M, mj));
            if (cj) return a = new nj, a.A = !0, a;
            if (Ii) return a = new nj, a.C = !0, a;
            if (dj) return a = new nj,
                a.o = !0, a;
            if (oj) {
                a = pj;
                jj(!1);
                var c = S.getInstance(),
                    d = c.o,
                    b = d.height - a;
                0 >= b && (b = d.height, a = 0);
                c.b = new I(d.width, b);
                b = new nj;
                b.F = !0;
                b.l = c.b;
                b.b = d;
                b.m = a;
                return b
            }
            if (qj) return a = new nj, a.w = !0, a;
            if (rj) return a = new nj, a.B = !0, a;
            if (sj) return a = new nj, a.D = !0, a;
            a: {
                var b = b.b,
                    e = new nj;e.l = b;e.g = !1;
                if (null != b && -1 != b.width && -1 != b.height && -12245933 != b.width && -12245933 != b.height) {
                    var g = S.getInstance();
                    if (g.g) a = g.m;
                    else try {
                        var g = mj,
                            f = M || M,
                            f = f.top;
                        f.environment && f.environment.browser && "Cobalt" === f.environment.browser &&
                            !f.document.defaultView && (f.document.defaultView = f);
                        c = b || Hg(f, g);
                        d = uc(qc(f.document).b);
                        a = -1 == c.width || -12245933 == c.width ? new L(c.width, c.width, c.width, c.width) : new L(d.y, d.x + c.width, d.y + c.height, d.x)
                    } catch (k) {
                        a = e;
                        break a
                    }
                    e.h = a;
                    e.g = !0
                }
                a = e
            }
            return a
        },
        kj = function(a, b, c) {
            var d;
            if (!uj)
                if (window.clearTimeout(vj), vj = null, 0 == a.length) b || wj();
                else {
                    var e = tj(),
                        g = S.getInstance();
                    try {
                        var f = Kg();
                        if (e.A)
                            for (d = 0; d < a.length; d++) p(c) ? a[d].hc(c) : a[d].Hc(f);
                        else if (e.o)
                            for (d = 0; d < a.length; d++) ki(a[d], f, b);
                        else if (e.C)
                            for (d =
                                0; d < a.length; d++) ki(a[d], f, b);
                        else if (e.F && e.b)
                            for (d = 0; d < a.length; d++) ei(a[d], f, e.b, e.m, b);
                        else if (e.w)
                            for (d = 0; d < a.length; d++) hi(a[d], f, b);
                        else if (e.B) D(a, function(a) {
                            if (b) {
                                if (a.h) {
                                    var c = a.h;
                                    3 <= c.h && (c.h = 3);
                                    a.b.b = 0
                                }
                            } else if (a.h && "d" != a.h.b) {
                                var c = ih(a.h),
                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                    e = d[c.b + 1];
                                a.b.b = d[c.h + 1];
                                a.ra(a.position, e, a.N + c.g, !1, !0, !1);
                                !li(a) || a.kb() || a.Sc || a.h && ch(a.h);
                                (c = 2 == c.b || Eh(a.h)) || (c = a.h, c = "f" == c.b && 3E3 <= c.m);
                                c && (a.Sb(a), a.Sc = !1, a.h && ch(a.h))
                            }
                        });
                        else if (e.D)
                            for (d = 0; d < a.length; d++) ni(a[d],
                                f, b, M);
                        else if (e.g && e.h)
                            for (d = 0; d < a.length; d++) ji(a[d], f, e.h, b, g.h);
                        ++xj
                    } finally {
                        b ? D(a, function(a) {
                            a.b.b = 0
                        }) : wj()
                    }
                }
        },
        gj = function() {
            var a = hj,
                b = og();
            b && (aj = aj || Gg(jd, b, a, "osd_or_lidar::visibility"))
        },
        hj = function() {
            var a = Ji(),
                b = Kg();
            a ? (Lg || (Mg = b, D(T, function(a) {
                var c = a.ka();
                c.S = Ai(c, b, !!a.D)
            })), Lg = !0, jj(!0)) : (Lg = !1, Ig = b, D(T, function(a) {
                a.J && (a.ka().h = b)
            }));
            kj(lj(), !a)
        },
        Ji = function() {
            if (yj()) return !0;
            var a = ng(M.document);
            return 1 == a || 0 == a
        },
        wj = function() {
            M && (vj = M.setTimeout(Rd("osd_or_lidar::psamp_to",
                function() {
                    kj(lj(), !1)
                }), Og()))
        },
        zj = function(a) {
            return Ja(T, function(b) {
                return b.element == a
            })
        },
        Aj = function(a) {
            return La(T, function(b) {
                return b.l == a
            })
        },
        T = [],
        Bj = [],
        lj = function() {
            return 0 == T.length ? Bj : 0 == Bj.length ? T : Ra(Bj, T)
        },
        uj = !1,
        vj = null,
        pj = 0,
        oj = !1,
        qj = !1,
        dj = !1,
        Ii = !1,
        rj = !1,
        sj = !1,
        mj = Ni() || Oi(),
        xj = 0,
        jj = function(a) {
            var b = S.getInstance(),
                c;
            if (b.g) {
                var d = c = b.m;
                c = (new I(c.right - c.left, d.bottom - d.top)).round()
            } else c = Hg(M, mj);
            b.b = c;
            if (!a) {
                b.o = M && M.outerWidth ? new I(M.outerWidth, M.outerHeight) : new I(-12245933, -12245933);
                var e;
                a = M;
                a.top != a && (a = a.top);
                var d = c = 0,
                    g = S.getInstance().b;
                try {
                    var f = a.document,
                        k = f.body,
                        m = f.documentElement;
                    if ("CSS1Compat" == f.compatMode && m.scrollHeight) c = m.scrollHeight != g.height ? m.scrollHeight : m.offsetHeight, d = m.scrollWidth != g.width ? m.scrollWidth : m.offsetWidth;
                    else {
                        var n = m.scrollHeight,
                            q = m.scrollWidth,
                            u = m.offsetHeight,
                            J = m.offsetWidth;
                        m.clientHeight != u && (n = k.scrollHeight, q = k.scrollWidth, u = k.offsetHeight, J = k.offsetWidth);
                        n > g.height ? n > u ? (c = n, d = q) : (c = u, d = J) : n < u ? (c = n, d = q) : (c = u, d = J)
                    }
                    e = new I(d,
                        c)
                } catch (pa) {
                    e = new I(-12245933, -12245933)
                }
                b.l = e
            }
        },
        Cj = function() {
            D(Bj.concat(T), function(a) {
                ti(a) && (Ii = !0)
            });
            return Ii
        },
        Dj = function(a, b) {
            var c = !1;
            D(T, function(b) {
                b = oi(b, a);
                c = c || b
            });
            (sj = c) && D(T, function(a) {
                pi(a) || b(a)
            });
            return c
        },
        Ej = function(a) {
            var b = !1;
            D(T, function(c) {
                c = mi(c, a);
                b = b || c
            });
            (rj = b) && D(T, function(b) {
                b.h || a(b)
            });
            return b
        },
        Fj = function(a) {
            D(a, function(a) {
                zj(a.element) || T.push(a)
            })
        },
        Gj = function(a) {
            D(a, function(a) {
                null == La(T, function(b) {
                    return b.element == a.element && b.Ia == a.Ia
                }) && T.push(a)
            })
        },
        yj = function() {
            return Ja(T, function(a) {
                return a.A
            })
        },
        nj = function() {
            this.b = this.l = null;
            this.m = 0;
            this.h = null;
            this.g = this.D = this.B = this.w = this.F = this.o = this.C = this.A = !1
        },
        Hj = function(a) {
            var b = [];
            Wa(a, function(a, d) {
                d in Object.prototype || "undefined" == typeof a || (v(a) && (a = a.join(",")), b.push([d, "=", a].join("")))
            });
            return b.join("&")
        },
        Ij = function(a) {
            a = "//pagead2.googlesyndication.com/pagead/gen_204?" + Hj(a);
            hd(M, a.substring(0, 2E3), void 0)
        };
    var Jj = function() {
        this.g = 64;
        this.b = Array(4);
        this.o = Array(this.g);
        this.l = this.h = 0;
        this.reset()
    };
    A(Jj, bg);
    Jj.prototype.reset = function() {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.l = this.h = 0
    };
    var Kj = function(a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if (w(b))
            for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
        else
            for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.b[0];
        c = a.b[1];
        var e = a.b[2],
            g = a.b[3],
            f;
        f = b + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^
            b)) + d[3] + 3250441966 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e +
            (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (f << 5 & 4294967295 |
            f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[0] + 3921069994 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[4] + 3889429448 & 4294967295;
        c = e + (f << 20 & 4294967295 |
            f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[8] + 1163531501 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295;
        e = g + (f << 14 & 4294967295 |
            f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[12] + 2368359562 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^
            b ^ c) + d[7] + 4139469664 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
        b = c +
            (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + (e + (f << 21 & 4294967295 | f >>> 11)) & 4294967295;
        a.b[2] = a.b[2] + e & 4294967295;
        a.b[3] = a.b[3] + g & 4294967295
    };
    Jj.prototype.m = function(a, b) {
        p(b) || (b = a.length);
        for (var c = b - this.g, d = this.o, e = this.h, g = 0; g < b;) {
            if (0 == e)
                for (; g <= c;) Kj(this, a, g), g += this.g;
            if (w(a))
                for (; g < b;) {
                    if (d[e++] = a.charCodeAt(g++), e == this.g) {
                        Kj(this, d);
                        e = 0;
                        break
                    }
                } else
                    for (; g < b;)
                        if (d[e++] = a[g++], e == this.g) {
                            Kj(this, d);
                            e = 0;
                            break
                        }
        }
        this.h = e;
        this.l += b
    };
    Jj.prototype.A = function() {
        var a = Array((56 > this.h ? this.g : 2 * this.g) - this.h);
        a[0] = 128;
        for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
        for (var c = 8 * this.l, b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
        this.m(a);
        a = Array(16);
        for (b = c = 0; 4 > b; ++b)
            for (var d = 0; 32 > d; d += 8) a[c++] = this.b[b] >>> d & 255;
        return a
    };
    var Mj = function() {
            var a = zd(),
                b = a.length - 1,
                c = Ad(a),
                a = c.b,
                d = c.g,
                c = [];
            d ? (a && c.push(Lj(b, [d.url, 2], 0, [a.url, 0], a.depth)), c.push(Lj(b, [d.url, 2], 0))) : a.url && (c.push(Lj(b, void 0, void 0, [a.url, 0], a.depth)), (d = (d = Vc.exec(a.url)) && d[0] || "") && c.push(Lj(b, [d, 1], a.depth)));
            c.push(Lj(b));
            return c
        },
        Lj = function(a, b, c, d, e) {
            a = [a];
            if (p(b) && p(c)) {
                for (var g = 0; g < c; g++) a.push("");
                a.push(b)
            }
            if (p(d) && p(e)) {
                b = e - a.length + 1;
                for (g = 0; g < b; g++) a.push("");
                a.push(d)
            }
            return a
        },
        Nj = function() {
            var a = Mj();
            return Ha(a, function(a) {
                return gd(a)
            })
        };
    var Oj = function(a) {
            return function(b) {
                return !p(b[a]) && p(0) ? 0 : b[a]
            }
        },
        Pj = function() {
            return function(a) {
                if (!p(a.tth)) return "1"
            }
        },
        Rj = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (v(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return p(a) ? Qj(c, a) : c
                }
            }
        },
        Sj = function(a, b) {
            return function(c) {
                c = c[a];
                if (v(c)) return Qj(c, b)
            }
        },
        Qj = function(a, b) {
            return Ga(a, function(a, d) {
                return Ma(b, d)
            })
        };
    var Tj = {
            v: "v",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            tos: "tos",
            mtos: "mtos",
            ps: "ps",
            pt: "pt",
            vht: "vht",
            mut: "mut",
            a: "a",
            ns: "ns",
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            uac: "uac",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            fm: "sfm",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            mmct: "mmct",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dom: "dom",
            fmf: "fmf",
            ven: "ven",
            veh: "veh",
            vds: "vds",
            is: "is",
            ic: "ic",
            c: "c",
            mc: "mc",
            lte: "lte",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb"
        },
        Uj = {
            c: Oj("c"),
            at: "at",
            atos: Sj("atos", [0, 2, 4]),
            ta: Pj(),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Rj(),
            j: "dom",
            mtos: Sj("mtos", [0, 2, 4]),
            gmm: "gmm",
            ss: Oj("ss"),
            vsv: me("w1"),
            t: "t"
        },
        Vj = {
            vmtime: "vmtime",
            tcm: "tcm",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            bt: "bt",
            pst: "pst",
            nmt: "nmt",
            mmct: "mmct",
            c: Oj("c"),
            at: "at",
            atos: Sj("atos", [0, 2, 4]),
            avt: Sj("atos", [2]),
            dav: "dav",
            ta: Pj(),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Rj(),
            j: "dom",
            mtos: Sj("mtos", [0, 2, 4]),
            gmm: "gmm",
            ss: Oj("ss"),
            vsv: me("w1"),
            t: "t"
        },
        Wj = {
            a: "a",
            tos: Rj(),
            at: "at",
            c: Oj("c"),
            mtos: Sj("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: me("ias_w1"),
            dom: "dom",
            gmm: "gmm",
            t: "t"
        },
        Xj = {
            tos: Rj(),
            at: "at",
            c: Oj("c"),
            mtos: Sj("mtos", [0, 2, 4]),
            p: "p",
            vpt: "vpt",
            vsv: me("dv_w2"),
            gmm: "gmm",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: Sj("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if (x(d)) return Ha(b, function(a) {
                        return 0 < d && d >= a ? 1 : 0
                    })
                }
            }("qmc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas"
        };
    var Yj = null,
        Zj = "",
        ak = !1,
        bk = function(a) {
            if (!a) return "";
            var b = a.document,
                c = [];
            c.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            b && b.referrer && c.push("referrer=" + encodeURIComponent(b.referrer.substring(0, 512)));
            return c.join("&")
        };
    var ck = function() {
        this.m = this.o = this.A = this.B = !1;
        this.g = null;
        this.C = "";
        this.D = [];
        this.b = {};
        this.b.start = this.Td;
        this.b.firstquartile = this.Jd;
        this.b.midpoint = this.Od;
        this.b.thirdquartile = this.Ud;
        this.b.complete = this.Fd;
        this.b.pause = this.Qd;
        this.b.resume = this.Rd;
        this.b.skip = this.Sd;
        this.b.viewable_impression = this.Wd;
        this.b.mute = this.Pd;
        this.b.unmute = this.Vd;
        this.b.fullscreen = this.Kd;
        this.b.exitfullscreen = this.Id;
        this.b.fully_viewable_audible_half_duration_impression = this.Ld;
        this.b.measurable_impression =
            this.Nd;
        this.b.abandon = this.Ed;
        this.b.engagedview = this.Hd;
        this.b.impression = this.Md;
        this.b.creativeview = this.Gd
    };
    h = ck.prototype;
    h.sb = function() {};
    h.jc = ba;
    h.Ic = ba;
    h.bc = ba;
    h.Zb = ba;
    var dk = function(a, b, c) {
            c || (b = -1);
            return new Bi(M, a, b, 7)
        },
        fk = function(a) {
            var b = S.getInstance(),
                c = z(function() {
                    b.g = !1;
                    ek(this)
                }, a);
            a.g && Qi(a.g) ? (Gg(M, "message", z(a.L, a), "lidar_video::message"), Ti = M.setInterval(Rd("osd_proto::reqm_int", ia(Wi, 4, a.g, !1, a.D, a.C, !1, c)), 500)) : c()
        };
    ck.prototype.L = function(a) {
        if (a && a.data && w(a.data)) {
            var b;
            var c = a.data;
            if (w(c)) {
                b = {};
                for (var c = c.split("\n"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("=");
                    if (!(0 >= e)) {
                        var g = Number(c[d].substr(0, e)),
                            e = c[d].substr(e + 1);
                        switch (g) {
                            case 5:
                            case 8:
                            case 11:
                            case 15:
                            case 16:
                            case 18:
                                e = "true" == e;
                                break;
                            case 4:
                            case 7:
                            case 6:
                            case 14:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                                e = Number(e);
                                break;
                            case 3:
                            case 19:
                                if (y(decodeURIComponent)) try {
                                    e = decodeURIComponent(e)
                                } catch (k) {
                                    throw Error("Error: URI malformed: " + e);
                                }
                                break;
                            case 17:
                                e = Ha(decodeURIComponent(e).split(","), Number)
                        }
                        b[g] = e
                    }
                }
                b = b[0] ? b : null
            } else b = null;
            if (b && (c = new Pi(b[4], b[12]), this.g && this.g.match(c)))
                if (c = b[0], "goog_acknowledge_monitoring" == c) {
                    a = b;
                    M.clearInterval(Ti);
                    var f = S.getInstance();
                    a[8] ? (f.g = !1, ek(this)) : (ai(f, a[9]), ij())
                } else if ("goog_get_mode" == c) {
                c = {};
                this.g && Ri(this.g, c);
                c[0] = "goog_provide_mode";
                c[6] = 4;
                c[19] = this.C;
                c[16] = !1;
                try {
                    f = Si(c), a.source.postMessage(f, a.origin)
                } catch (k) {}
                a = b[9];
                ai(S.getInstance(), a);
                M.clearInterval(Ti)
            } else if ("goog_update_data" ==
                c || "goog_image_request" == c) a = b, f = S.getInstance(), c = b = 0, isNaN(a[22]) || isNaN(a[23]) || (b = a[22], c = a[23]), f.b = (new I(Number(b), Number(c))).round(), ai(f, a[9])
        }
    };
    var ek = function(a) {
        if (null != M.IntersectionObserver && Cj()) ij();
        else {
            var b;
            if (wb && x(M.screenX) && x(M.mozInnerScreenX) && x(M.outerWidth)) {
                b = M.navigator.userAgent;
                var c = b.indexOf("Firefox/");
                if (0 <= c) {
                    var c = Math.floor(b.substr(c + 8)) || -1,
                        d = b.indexOf("Mac OS X 10."),
                        e = -1;
                    0 <= d && (e = Number(b.substr(d + 12, 1)) || -1);
                    var g = 0 < e ? -1 : b.indexOf("Windows NT "),
                        d = -1;
                    0 <= g && (d = {
                        "6.0": 0,
                        "6.1": 1,
                        "6.2": 2
                    }[b.substr(g + 11, 3)] || -1);
                    b = 148;
                    5 <= e ? b = 4 <= c ? 108 : 3 <= c ? 127 : 108 : 0 <= d && (16 == c || 17 == c || 18 == c) && (b = [
                        [146, 146, 146],
                        [148, 147, 148],
                        [131,
                            130, 136
                        ]
                    ][d][c - 16])
                } else b = null;
                null !== b && (pj = b, oj = !0);
                b = !0
            } else b = !1;
            if (b) ij();
            else if (b = G && Jb(8) && y(Ag()) ? qj = !0 : !1, b) ij();
            else {
                if (Bg()) {
                    if (Dj(M, z(a.vb, a))) {
                        ij();
                        a.o = !0;
                        return
                    }
                } else if (Ej(z(a.vb, a))) {
                    ij();
                    a.A = !0;
                    return
                }
                window.clearTimeout(vj);
                vj = null;
                Zj = "i";
                uj = !0
            }
        }
    };
    h = ck.prototype;
    h.vb = function(a) {
        if (a) {
            if (!a.Tb) {
                var b = Hi(a, "start"),
                    b = gk(b, Tj),
                    c = Yj || M,
                    d = [];
                d.push("v=499v");
                d.push("r=fp");
                d.push("efm=" + (this.A ? 1 : 0));
                d.push("esfm=" + (this.o ? 1 : 0));
                d.push(b);
                d.push(bk(c));
                hd(M, ("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&" + d.join("&")).substring(0, 2E3), void 0);
                a.Tb = !0
            }
            a.T = !0;
            this.F(a)
        }
    };
    h.Td = function(a) {
        a.Qc++;
        Fi(a.aa, 0, me(0));
        a.aa[0] = qi(a.b.b, 2);
        return Hi(a, "start")
    };
    h.Jd = function(a, b) {
        return hk(a, "firstquartile", 1, b)
    };
    h.Od = function(a, b) {
        a.Jb = !0;
        return hk(a, "midpoint", 2, b)
    };
    h.Ud = function(a, b) {
        return hk(a, "thirdquartile", 3, b)
    };
    h.Fd = function(a, b) {
        var c = hk(a, "complete", 4, b);
        a.A = !1;
        ik(a.l);
        return c
    };
    var hk = function(a, b, c, d) {
        kj([a], !Ji(), d);
        Fi(a.aa, c, me(0));
        a.aa[c] = qi(a.b.b, 2);
        b = Hi(a, b);
        4 != c && Fi(a.Y, c, a.Xa);
        return b
    };
    h = ck.prototype;
    h.Qd = function(a, b) {
        return jk(a, "pause", b)
    };
    h.Ed = function(a, b) {
        return jk(a, "abandon", b)
    };
    h.Rd = function(a, b) {
        var c = Ji();
        a.D && !c && (a.ka().h = Kg());
        kj([a], !c, b);
        a.D = !1;
        return Hi(a, "resume")
    };
    h.Wd = function(a) {
        var b = Hi(a, "viewable_impression");
        a.Wb = !0;
        return b
    };
    h.Sd = function(a, b) {
        var c = !Ji();
        kj([a], c, b);
        c = Hi(a, "skip");
        a.A = !1;
        ik(a.l);
        return c
    };
    h.Pd = function(a, b) {
        kj([a], !Ji(), b);
        return Hi(a, "mute")
    };
    h.Vd = function(a, b) {
        kj([a], !Ji(), b);
        return Hi(a, "unmute")
    };
    h.Kd = function(a, b) {
        a.A = !0;
        kj([a], !Ji(), b);
        return Hi(a, "fullscreen")
    };
    h.Id = function(a, b) {
        a.A = !1;
        kj([a], !Ji(), b);
        return Hi(a, "exitfullscreen")
    };
    h.Ld = function(a) {
        return Hi(a, "fully_viewable_audible_half_duration_impression")
    };
    h.Nd = function(a) {
        return Hi(a, "measurable_impression")
    };
    h.Hd = function(a) {
        return Hi(a, "engagedview")
    };
    h.Md = function(a) {
        return Hi(a, "impression")
    };
    h.Gd = function(a) {
        return Hi(a, "creativeview")
    };
    var jk = function(a, b, c) {
            var d = a.ka();
            d.S = Ai(d, Kg(), !!a.D);
            d = !Ji();
            kj([a], d, c);
            a.D = !0;
            return Hi(a, b)
        },
        ik = function(a) {
            if (w(a)) {
                var b = Ka(T, function(b) {
                    return b.l == a
                });
                0 <= b && (ri(T[b]), Array.prototype.splice.call(T, b, 1))
            }
        },
        lk = function(a, b, c) {
            var d = La(T, function(a) {
                return a.element == c
            });
            null !== d && d.l != b && (ik(d.l), d = null);
            d || (d = kk(a, c), d.l = b, d.o = "h");
            return d
        },
        kk = function(a, b) {
            var c = dk(b, Kg(), !1);
            c.ub = z(a.l, a);
            S.getInstance().A = 79463069;
            Gj([c]);
            ij();
            return c
        };
    ck.prototype.l = function(a) {
        li(a) && !a.Kb && this.Ic(a);
        this.bc(a)
    };
    var mk = function(a, b) {
            var c = db(function(b) {
                    return b == a
                }),
                c = {
                    v: "499v",
                    e: lg[c]
                },
                d = Hi(b, a);
            jb(c, d);
            b.Xb[a] = d;
            return gk(c, Tj)
        },
        gk = function(a, b, c, d, e) {
            var g = {};
            if (p(a))
                for (var f in b) {
                    var k = b[f];
                    f in Object.prototype || null != k && (y(k) ? g[f] = k(a) : g[f] = a[k])
                }
            p(c) && jb(g, c);
            a = Hj(g);
            0 != a.length && p(d) && p(e) && (e = e(a), a += "&" + d + "=" + e);
            return a
        },
        ok = function(a, b) {
            var c = {
                v: "499v"
            };
            c.nas = T.length;
            c.msg = a;
            if (p(b)) {
                var d = nk(b);
                d && (c.e = lg[d])
            }
            return c
        },
        nk = function(a) {
            var b = a.toLowerCase();
            return db(function(a) {
                return a ==
                    b
            })
        };
    ck.prototype.F = ba;
    var pk = function(a, b) {
        var c = a[b];
        p(c) && (a[b] = Math.floor(1E3 * c))
    };
    var qk = (new Date).getTime(),
        rk = !1,
        sk = !1,
        tk = !1,
        U = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        uk = function(a) {
            return !!(1 << a & qk)
        },
        vk = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return uk(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return uk(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return uk(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return uk(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return uk(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return sk
            },
            function() {
                return tk
            },
            function() {
                return uk(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return uk(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || U(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return U(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return uk(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return U(a.CSS.supports)
            },
            function() {
                return U(Intl.Collator)
            },
            function(a) {
                return U(a.document.createElement("dialog").show)
            },
            function() {
                return uk(8)
            },
            function(a) {
                return U(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    sd: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    sd: "ease-in"
                }], {
                    duration: 1300,
                    jj: 1
                }).reverse)
            },
            function(a) {
                return U(a.document.createElement("div").animate)
            },
            function(a) {
                return U(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return U(a.navigator.getBattery)
            },
            function(a) {
                return U(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return uk(9)
            },
            function() {
                return U(webkitRequestAnimationFrame)
            },
            function(a) {
                return U(a.BroadcastChannel.call)
            },
            function(a) {
                return U(a.FontFace)
            },
            function(a) {
                return U(a.Gamepad)
            },
            function() {
                return uk(10)
            },
            function(a) {
                return U(a.MutationEvent)
            },
            function(a) {
                return U(a.MutationObserver)
            },
            function(a) {
                return U(a.crypto.getRandomValues)
            },
            function(a) {
                return U(a.document.body.createShadowRoot)
            },
            function(a) {
                return U(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return U(a.fetch)
            },
            function() {
                return uk(11)
            },
            function(a) {
                return U(a.navigator.serviceWorker.register)
            },
            function(a) {
                return U(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return U(a.speechSynthesis.speak)
            },
            function(a) {
                return U(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return uk(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return uk(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return uk(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.kj
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        wk = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        xk = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        zk = function() {
            try {
                yk()
            } catch (d) {}
            var a = "a=1&b=" + qk + "&",
                b = [],
                c = 99;
            D(vk, function(a, c) {
                var d = !1;
                try {
                    d = a(M)
                } catch (f) {}
                b[c / 32 >>> 0] |= d << c % 32
            });
            D(b, function(b, e) {
                a += String.fromCharCode(c + e) + "=" + (b >>> 0).toString(16) + "&"
            });
            c = 105;
            D(wk, function(b) {
                var d = "false";
                try {
                    d = b(M)
                } catch (g) {}
                a += String.fromCharCode(c++) + "=" + d + "&"
            });
            D(xk, function(b) {
                var d = "";
                try {
                    var g = b(M);
                    b = [];
                    for (var f = 0, k = 0; k < g.length; k++) {
                        for (var m = g.charCodeAt(k); 255 < m;) b[f++] = m & 255, m >>= 8;
                        b[f++] = m
                    }
                    if (!$f)
                        for ($f = {}, ag = {}, g = 0; 65 > g; g++) $f[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g), ag[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(g);
                    g = ag;
                    m = [];
                    for (f = 0; f < b.length; f += 3) {
                        var n = b[f],
                            q = f + 1 < b.length,
                            u = q ? b[f + 1] : 0,
                            J = f + 2 < b.length,
                            pa = J ? b[f + 2] : 0,
                            k = n >> 2,
                            Oa = (n & 3) << 4 | u >> 4,
                            Ob = (u & 15) << 2 | pa >> 6,
                            ub = pa & 63;
                        J || (ub = 64, q || (Ob = 64));
                        m.push(g[k], g[Oa], g[Ob], g[ub])
                    }
                    d =
                        m.join("")
                } catch (zg) {}
                a += String.fromCharCode(c++) + "=" + d + "&"
            });
            return a.slice(0, -1)
        },
        yk = function() {
            if (!rk) {
                var a = function() {
                    sk = !0;
                    M.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                M.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    tk = !0;
                    M.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                M.document.addEventListener("webdriver-evaluate-response", b, !0);
                rk = !0
            }
        };
    var Ak = function() {
        ck.call(this);
        this.w = void 0;
        this.h = !1
    };
    A(Ak, ck);
    ca(Ak);
    Ak.prototype.sb = function(a, b) {
        S.getInstance();
        var c;
        cj ? (c = Aj(a), c || (c = dk(null, b.opt_nativeTime || -1, !0), c.o = "a", c.ub = z(this.l, this), Fj([c]), c.l = a)) : b.opt_adElement ? c = lk(this, a, b.opt_adElement) : (c = Bk(this, a, b.opt_sdkID || "")) || (c = Aj(a) || void 0);
        c && c.va == ba && (c.va = z(this.Zb, this));
        return c
    };
    Ak.prototype.Zb = function(a) {
        S.getInstance();
        a.g = 0;
        a.na = 0;
        var b;
        if ("as" == a.o) {
            var c = "getVideoMetadata" + a.Ia;
            if (y(a.element[c])) try {
                b = a.element[c]()
            } catch (g) {
                a.g |= 4
            } else a.g |= 2
        } else if ("h" == a.o)
            if (c = aa("ima.common.getVideoMetadata"), y(c)) try {
                b = c(a.l)
            } catch (g) {
                a.g |= 4
            } else a.g |= 2;
            else a.g |= 1;
        if (!a.g)
            if (p(b))
                if (null === b) a.g |= 16;
                else {
                    var d;
                    a: {
                        c = b;
                        for (d in c) {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d ? a.g |= 32 : null != b.errorCode && (a.na = b.errorCode, a.g |= 64)
                }
        else a.g |= 8;
        null != b || (b = {});
        d = b;
        a.$ = 0;
        for (var e in ig) null == d[e] && (a.$ |=
            ig[e]);
        null != d.currentTime || a.Lc++;
        pk(d, "currentTime");
        pk(d, "duration");
        Sg(b.volume) && Sg(this.w) && (b.volume *= this.w);
        return b
    };
    var Bk = function(a, b, c) {
            var d = La(T, z(function(a) {
                return a.element ? Ck(a.element, c) == b && a.Ia == c : !1
            }, a));
            null !== d && d.l != b && (ik(d.l), d = void 0);
            if (d) return d;
            d = Dk(c);
            if (d = La(d, z(function(a) {
                    return Ck(a, c) == b
                }, a))) return d = kk(a, d), d.o = "as", d.l = b, d.Ia = c, d
        },
        Dk = function(a) {
            var b = M.document,
                c = Va(Ha(["embed", "object"], function(a) {
                    return Sa(b.getElementsByTagName(a))
                })),
                d = "metricID" + a;
            return c = Ga(c, function(a) {
                if (!a || !fa(a) || 1 != a.nodeType || !y(a.getBoundingClientRect)) return !1;
                var b = a.getBoundingClientRect();
                return 0 !=
                    b.width && 0 != b.height && a[d] && y(a[d]) ? !0 : !1
            })
        },
        Ck = function(a, b) {
            var c = "metricID" + b;
            if (!a || !a[c] || !y(a[c])) return null;
            var d;
            try {
                d = a[c]()
            } catch (e) {
                return null
            }
            return d.queryID
        },
        Ek = function(a, b) {
            S.getInstance();
            var c;
            switch (a.o) {
                case "h":
                    c = aa("ima.common.triggerExternalActivityEvent");
                    break;
                case "a":
                    c = aa("ima.common.triggerExternalActivityEvent");
                    break;
                case "n":
                    c = aa("ima.bridge.triggerExternalActivityEvent");
                    break;
                case "as":
                    var d = "triggerExternalActivityEvent" + a.Ia;
                    a.element && y(a.element[d]) && (c = function(b,
                        c, e) {
                        a.element[d](e)
                    });
                    break;
                default:
                    return a.L |= 4, !1
            }
            if (y(c)) {
                var e = mk(b, a);
                try {
                    return c(a.l, e, b), !0
                } catch (g) {
                    a.L |= 2
                }
            } else a.L |= 1;
            return !1
        };
    Ak.prototype.Ic = function(a) {
        Ek(a, "viewable_impression") && (a.Kb = !0)
    };
    Ak.prototype.bc = function(a) {
        var b = a.ka().L[0];
        (15E3 <= b || a.Jb && (-1 != a.C ? b >= a.C / 2 : -1 != a.Ba && b >= a.Ba)) && !a.zc && Ek(a, "fully_viewable_audible_half_duration_impression") && (a.zc = !0)
    };
    Ak.prototype.jc = function(a) {
        a.Vb || a.T || this.m || !Ek(a, "measurable_impression") || (a.Vb = !0)
    };
    var Gk = function(a) {
            var b = {};
            b.viewability = gk(a, Tj);
            var c;
            c = qk = (new Date).getTime();
            var d = uk(5);
            c = (sk ? !d : d) ? c | 2 : c & -3;
            d = uk(2);
            c = (tk ? !d : d) ? c | 8 : c & -9;
            c = {
                s1: (c >>> 0).toString(16)
            };
            b.moatViewability = gk(a, Uj, c, "h", Fk("kArwaWEsTs"));
            b.integralAdsViewability = gk(a, Wj, {}, "h", Fk("b96YPMzfnx"));
            b.doubleVerifyViewability = gk(a, Xj, {}, "h", Fk("yb8Wev6QDg"));
            b.googleViewability = gk(a, Vj, c);
            return b
        },
        Fk = function(a) {
            return function(b) {
                var c = new Jj;
                c.m(b + a);
                return Zf(c.A()).slice(-8)
            }
        },
        Hk = function(a, b, c) {
            var d;
            d = Ak.getInstance();
            var e = {};
            jb(e, {
                opt_adElement: void 0,
                opt_fullscreen: void 0
            }, c || {});
            if (e.opt_bounds) d = Gk(ok("ol", a));
            else {
                b: {
                    if (nk(a)) {
                        if (ak) {
                            d = ok("ue", a);
                            break b
                        }
                        b = d.sb(b, e);
                        if (!b) {
                            d = ok("nf", a);
                            break b
                        }
                        if (!d.B) {
                            d.B = !0;
                            try {
                                Jg = Kg();
                                Yj = Sd(M).Qb;
                                jj(!1);
                                var g = M.document;
                                if (g.body && g.body.getBoundingClientRect) {
                                    var f = S.getInstance();
                                    f.h ? f.g ? fk(d) : ek(d) : ij()
                                } else ak = !0
                            } catch (k) {
                                throw T = [], Bj = [], k;
                            }
                        }
                        "i" == Zj && (b.T = !0, d.F(b));
                        b.Ib = !0;
                        b.Na = 2;
                        g = e.opt_fullscreen;
                        p(g) && (b.A = !!g);
                        a = a.toLowerCase();
                        Ma(jg, a) && (b.Ub || (b.Ub = !0, "i" !=
                            Zj && (uj = !1), Ii && ti(b), !d.A || b.h || b.ca || mi(b, z(d.vb, d)), d.o && !pi(b) && oi(b, M), b.F = {}, b.F.firstquartile = !1, b.F.midpoint = !1, b.F.thirdquartile = !1, b.F.complete = !1, b.F.pause = !1, b.F.skip = !1, b.F.viewable_impression = !1, b.La = 0, g = p(e) ? e.opt_nativeTime : void 0, Ng = g = x(g) ? g : Kg(), b.J = !0, f = !1, Ji() || (f = !0, b.ka().h = g), kj([b], f, e)), d.jc(b));
                        if (g = d.b[a])
                            if (d = g.call(d, b, e), p(d)) {
                                e = ok(void 0, a);
                                jb(e, d);
                                d = e;
                                break b
                            }
                    }
                    d = void 0
                }
                d = Gk(d)
            }
            return d
        };
    Ak.prototype.l = function(a) {
        this.m ? Ik(this, a) : Ak.P.l.call(this, a)
    };
    Ak.prototype.F = function(a) {
        this.m && Ik(this, a)
    };
    var Ik = function(a, b) {
        var c = document,
            d = new ue(M.parent == M ? M.location.href : c.referrer),
            c = {
                id: "avtest",
                lid: 48,
                source: "lidar_video"
            };
        c.queryId = b ? b.l : -1;
        c.domain = d.g;
        try {
            a.h || (c.event = "sendImaMeasurementUpdate_1", c.callback = "ima.common.triggerViewabilityMeasurementUpdate", Ij(c));
            var e = aa("ima.common.triggerViewabilityMeasurementUpdate");
            y(e) && (a.h || (c.event = "sendImaMeasurementUpdate_2", Ij(c)), d = {}, d.insideIframe = S.getInstance().h, d.unmeasurable = b.T, d.position = b.position, d.coverage = b.b.b, a.h || (c.event =
                "sendImaMeasurementUpdate_3", c.coverage = d.coverage, Ij(c)), d.nativeVolume = a.w, e(b.l, d), a.h || (c.event = "sendImaMeasurementUpdate_4", Ij(c)))
        } catch (g) {
            a.h || (c.event = "sendImaMeasurementUpdate_5", c.errMsg = g, Ij(c))
        } finally {
            a.h = !0
        }
    };
    r("Goog_AdSense_Lidar_sendVastEvent", Qd("lidar::handlevastevent_ex", Hk, void 0, function() {
        return {
            v: "499",
            "if": S.getInstance().h ? "1" : "0",
            nas: String(T.length)
        }
    }), void 0);
    r("Goog_AdSense_Lidar_getViewability", Qd("lidar::getviewability_ex", function(a, b) {
        var c;
        c = Ak.getInstance();
        var d = {};
        jb(d, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, b || {});
        d.opt_bounds ? c = Gk(ok("ol")) : (ak ? c = ok("ue") : (c = c.sb(a, d)) ? (d = ok(), jb(d, Gi(c, !0, !1)), c = d) : c = ok("nf"), c = Gk(c));
        return c
    }), void 0);
    r("Goog_AdSense_Lidar_getInitSignals", Qd("lidar::getinitsignals_ex", function() {
        var a = {};
        a.moatInit = zk();
        return a
    }), void 0);
    r("Goog_AdSense_Lidar_getUrlSignalsArray", Qd("lidar::geturlsignalsarray_ex", function() {
        return Nj()
    }), void 0);
    r("Goog_AdSense_Lidar_getUrlSignalsList", Qd("lidar::geturlsignalslist_ex", function() {
        return ie(Nj())
    }), void 0);
    var Jk = {
        vh: "video/mp4",
        xh: "video/mpeg",
        kh: "application/x-mpegURL",
        Rh: "video/ogg",
        Ki: "video/3gpp",
        gj: "video/webm",
        uh: "audio/mpeg",
        wh: "audio/mp4"
    };
    var Kk = function() {};
    Kk.prototype.allowCustom = !0;
    var Lk = {
            IMAGE: "Image",
            Lg: "Flash",
            Xc: "All"
        },
        Mk = {
            Sg: "Html",
            Tg: "IFrame",
            Ei: "Static",
            Xc: "All"
        },
        Nk = {
            Ug: "IgnoreSize",
            xi: "SelectExactMatch",
            yi: "SelectNearMatch"
        },
        Ok = {
            qg: "DisallowResize",
            mi: "ResizeSmaller"
        };
    var Pk = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com www.google.com/pagead/sul www.youtube.com/pagead/sul www.youtube.com/pagead/psul".split(" "),
        Qk = /\bocr\b/,
        Rk = 0,
        Sk = {},
        Tk = function(a) {
            return B(ya(a)) ? !1 : 0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&") || (new ue(a)).m.match(Qk) ? !0 : null != La(Pk, function(b) {
                return null != a.match(b)
            })
        },
        Wk = function(a, b) {
            if (a) {
                var c = 'javascript:"data:text/html,<body><img src=\\"' +
                    a + '\\"></body>"';
                b ? Uk(function(b) {
                    Vk(b ? c : 'javascript:"data:text/html,<body><object data=\\"' + a + '\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                }) : Vk(c)
            }
        },
        Vk = function(a) {
            var b = wc("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = pc(b).body;
            var c, d = Sf(function() {
                Lf(c);
                Ec(b)
            }, 15E3);
            c = Jf(b, ["load", "error"], function() {
                Sf(function() {
                    l.clearTimeout(d);
                    Ec(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        Uk = function(a) {
            var b = Sk.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                Xk(function(b, e) {
                    delete Sk[e];
                    c || (c = !0, null !=
                        Sk.imageLoadingEnabled || (Sk.imageLoadingEnabled = b), a(b))
                })
            }
        },
        Xk = function(a) {
            var b = new Image,
                c, d = "" + Rk++;
            Sk[d] = b;
            b.onload = function() {
                clearTimeout(c);
                a(!0, d)
            };
            c = setTimeout(function() {
                a(!1, d)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        Yk = function(a) {
            if (a) {
                var b = document.createElement("OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + Rk++;
                Sk[c] = b;
                b.onload = b.onerror = function() {
                    delete Sk[c]
                };
                document.body.appendChild(b)
            }
        },
        Zk = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + Rk++;
                Sk[c] = b;
                b.onload = b.onerror = function() {
                    delete Sk[c]
                };
                b.src = a
            }
        },
        yl = function(a, b) {
            a && (b ? Uk(function(b) {
                b ? Zk(a) : Yk(a)
            }) : Zk(a))
        };
    var zl = function(a, b) {
        return a.replace(/(\[|%5B)([a-zA-Z0-9_]+)(\]|%5D)/g, function(a, d, e) {
            try {
                var c = eb(b, e),
                    c = c.toString();
                if (!B(ya(c))) return encodeURIComponent(c).replace(/%2C/g, ",")
            } catch (f) {}
            return a
        })
    };
    var Al = function(a, b, c, d) {
        this.h = a;
        this.b = Math.min(Math.max(c || 0, 0), 1);
        this.g = null != d ? d : !0
    };
    Al.prototype.getId = function() {
        return this.h
    };
    var Bl = function(a) {
        this.h = a;
        this.g = new re;
        this.b = null
    };
    Bl.prototype.getId = function() {
        return this.h
    };
    var Cl = function(a) {
        var b = Math.random(),
            c = 0,
            d = a.g.Z();
        D(d, function(a) {
            c += a.b
        }, a);
        var e = 1 < c ? c : 1;
        a.b = null;
        for (var g = 0, f = 0; f < d.length; ++f)
            if (g += d[f].b, g / e >= b) {
                a.b = d[f];
                break
            }
    };
    var Fl = function() {
            this.g = null != l.G_testRunner;
            this.b = new re;
            V(this, "GvnExternalLayer", 31061774, .01);
            V(this, "GvnExternalLayer", 31061775, .01);
            V(this, "GvnExternalLayer", 41351016, .05);
            V(this, "GvnExternalLayer", 41351017, .05);
            V(this, "GvnExternalLayer", 41351020, .05);
            V(this, "GvnExternalLayer", 41351021, .05);
            V(this, "GvnExternalLayer", 41351088, .01);
            V(this, "GvnExternalLayer", 41351089, .01);
            V(this, "GvnExternalLayer", 136961001, .01);
            V(this, "GvnExternalLayer", 136961002, .01);
            V(this, "GvnExternalLayer", 420706008, .05);
            V(this, "GvnExternalLayer", 420706009, .05);
            V(this, "GvnExternalLayer", 231422001, .05);
            V(this, "GvnExternalLayer", 231422002, .05);
            V(this, "GvnExternalLayer", 31061780, .01);
            V(this, "GvnExternalLayer", 31061781, .01);
            V(this, "GvnExternalLayer", 31061784, .01);
            V(this, "GvnExternalLayer", 31061785, .01);
            V(this, "GvnExternalLayer", 420706010, .2);
            V(this, "GvnExternalLayer", 420706011, .2);
            V(this, "ActiveViewExternalLayer", 21592054, .05);
            V(this, "ActiveViewExternalLayer", 21592055, .05);
            V(this, "GvnExternalLayer", 21592052, .01);
            V(this,
                "GvnExternalLayer", 21592053, .01);
            V(this, "GvnExternalLayer", 420706024, .01);
            V(this, "GvnExternalLayer", 420706025, .01);
            V(this, "GvnExternalLayer", 420706029, .01);
            V(this, "GvnExternalLayer", 6518E5, .01);
            V(this, "GvnExternalLayer", 651800001, .01);
            Dl(this);
            var a;
            a = ae(P);
            a = de(a);
            null != a && (this.g = !1, El(this, a.map(String)))
        },
        Gl = null,
        Hl = function() {
            Gl || (Gl = new Fl);
            return Gl
        },
        V = function(a, b, c, d) {
            B(ya(b)) || isNaN(c) || 0 >= c || (c = new Al(c, 0, d), Il(a, b).g.set(c.getId(), c))
        },
        Dl = function(a) {
            ce() || P.Gb() || D(a.b.Z(), function(a) {
                    Cl(a)
                },
                a)
        },
        El = function(a, b) {
            D(b, function(a) {
                var b = Number(a);
                a = "FORCED_PUB_EXP_LAYER_" + a;
                isNaN(b) || 0 >= b || B(ya(a)) || (Il(this, a).b = new Al(b, 0, 0, !0))
            }, a)
        },
        Jl = function() {
            var a = Hl(),
                b = {};
            D(a.b.Z(), function(a) {
                var c = a.b;
                if (c) {
                    var e = {};
                    e.experimentId = c.getId();
                    e.shouldReport = c.g;
                    b[a.getId()] = e
                } else b[a.getId()] = {}
            });
            return b
        },
        Kl = function(a, b) {
            return a.g ? !1 : Ja(a.b.Z(), function(a) {
                return !!a.b && a.b.getId() == b
            })
        },
        Ll = function() {
            var a = Hl();
            if (a.g) return "";
            var b = [];
            D(a.b.Z(), function(a) {
                (a = a.b) && a.g && b.push(a.getId())
            });
            return b.sort().join(",")
        },
        Il = function(a, b) {
            var c = a.b.get(b);
            null == c && (c = new Bl(b), a.b.set(b, c));
            return c
        };
    var Ml = ["*.googlesyndication.com", "gcdn.2mdn.net"],
        Nl = ["*.youtu.be", "*.youtube.com"],
        Ol = "ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        Pl = ["c.googlesyndication.com"],
        Rl = function(a, b) {
            try {
                var c = (new ue(b)).g,
                    c = c.replace(/^www./i, "");
                return Ja(a, function(a) {
                    return Ql(a, c)
                })
            } catch (d) {
                return !1
            }
        },
        Ql = function(a, b) {
            if (B(ya(b))) return !1;
            a = a.toLowerCase();
            b = b.toLowerCase();
            return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
        },
        Sl = function(a, b) {
            return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
        };
    var Tl = function(a) {
        try {
            a: {
                var b = a,
                    c = void 0,
                    d = b.length - 11 - 2;
                if (!(-1 == b.indexOf("URL_SIGNALS") || 2048 <= d || !c && !window.Goog_AdSense_Lidar_getUrlSignalsArray))
                    for (var c = c || window.Goog_AdSense_Lidar_getUrlSignalsArray(), d = {}, e = 0; e < c.length; ++e) {
                        d.URL_SIGNALS = c[e];
                        var g = zl(b, d);
                        if (2048 > g.length) {
                            a = g;
                            break a
                        }
                    }
                a = b
            }
        }
        catch (n) {}
        try {
            g = a;
            b = !1;
            Sl(g, Pl) ? b = !1 : null != g && Rl(Nl, g) ? b = !0 : "https:" == window.location.protocol && (Sl(g, Ol) || P.Aa()) && (b = !0);
            if (b) {
                var f = new ue(g);
                "https" == f.h ? a = g : (ve(f, "https"), a = f.toString())
            } else a =
                g;
            var k = Hl(),
                m = !P.Aa() || Kl(k, 41351089) || !1;
            (f = a) && (Tk(f) ? Wk(f, m) : yl(f, m))
        } catch (n) {}
    };
    var Ul = function(a, b) {
            this.message = a;
            this.b = b
        },
        Vl = new Ul("Invalid usage of the API. Cause: {0}", 900),
        Wl = new Ul("Failed to initialize ad playback element before starting ad playback.", 400),
        Xl = new Ul("The provided {0} information: {1} is invalid.", 1101),
        Yl = function(a, b, c) {
            var d;
            d = b || null;
            if (!(d instanceof Ud)) {
                var e = a.b,
                    g = a.message,
                    f = Ta(arguments, 2);
                if (0 < f.length)
                    for (var k = 0; k < f.length; k++) g = g.replace(new RegExp("\\{" + k + "\\}", "ig"), f[k]);
                e = new Ud("adPlayError", g, e);
                e.b = d;
                d = e
            }
            return d
        };
    var $l = function(a, b) {
            if (null == a || 0 >= a.width || 0 >= a.height) throw Yl(Xl, null, "ad slot size", a.toString());
            this.g = a;
            this.b = null != b ? b : new Kk;
            this.m = Zl(Mk, this.b.resourceType) ? this.b.resourceType : "All";
            this.l = Zl(Lk, this.b.creativeType) ? this.b.creativeType : "All";
            this.o = Zl(Nk, this.b.sizeCriteria) ? this.b.sizeCriteria : "SelectExactMatch";
            this.w = Zl(Ok, this.b.b) ? this.b.b : "DisallowResize";
            this.h = null != this.b.adSlotIds ? this.b.adSlotIds : [];
            this.A = x(this.b.nearMatchPercent) && 0 < this.b.nearMatchPercent && 100 >= this.b.nearMatchPercent ?
                this.b.nearMatchPercent : 90
        },
        cm = function(a, b) {
            var c = [];
            D(b, function(a) {
                if (this.b.allowCustom || a.C) !B(a.g) && (isNaN(a.A) || isNaN(a.m) || a.m == a.A) && am(this, a) ? c.push(a) : (a = bm(this, a), null != a && !B(a.g) && c.push(a))
            }, a);
            return c
        },
        am = function(a, b) {
            var c;
            if (c = "Flash" != b.b || tg) {
                if (c = "All" == a.m || a.m == b.B) c = b.b, c = null != c ? "All" == a.l || a.l == c : !0;
                c && (c = b.D, c = 0 == a.h.length ? !0 : null != c ? 0 <= Fa(a.h, c) : !1)
            }
            if (c) {
                c = b.h;
                var d;
                (d = "IgnoreSize" == a.o) || (d = a.g, d = d == c ? !0 : d && c ? d.width == c.width && d.height == c.height : !1);
                if (d) c = !0;
                else {
                    if (d =
                        "SelectNearMatch" == a.o) "ResizeSmaller" != a.w || c.width <= a.g.width && c.height <= a.g.height || (d = a.g, d = Math.min(d.width / c.width, d.height / c.height), c = new I(d * c.width, d * c.height)), d = c.width, c = c.height, d = d > a.g.width || c > a.g.height || d < a.A / 100 * a.g.width || c < a.A / 100 * a.g.height ? !1 : !0;
                    c = d
                }
            } else c = !1;
            return c
        },
        bm = function(a, b) {
            var c = b.l;
            return null != c ? La(c, function(a) {
                return am(this, a)
            }, a) : null
        },
        Zl = function(a, b) {
            var c;
            if (c = null != b) a: {
                for (var d in a)
                    if (a[d] == b) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        };
    var dm = function(a) {
        var b = {};
        D(a.split(","), function(a) {
            var c = a.split("=");
            2 == c.length && (a = ma(c[0]), c = ma(c[1]), 0 < a.length && (b[a] = c))
        });
        return b
    };
    var em = function() {
        this.A = 1;
        this.h = -1;
        this.b = 1;
        this.m = this.l = 0;
        this.g = !1
    };
    h = em.prototype;
    h.ge = function() {
        return this.A
    };
    h.de = function() {
        return this.h
    };
    h.be = function() {
        return this.b
    };
    h.ee = function() {
        return this.l
    };
    h.fe = function() {
        return this.m
    };
    h.ce = function() {
        return this.g
    };
    var fm = function(a) {
        this.g = a.content;
        this.b = a.contentType;
        this.C = a.isSynthetic;
        this.h = a.size;
        this.m = a.masterSequenceNumber;
        this.B = a.resourceType;
        this.A = a.sequenceNumber;
        this.D = a.adSlotId;
        this.l = [];
        a = a.backupCompanions;
        null != a && (this.l = Ha(a, function(a) {
            return new fm(a)
        }))
    };
    fm.prototype.getContent = function() {
        return this.g
    };
    fm.prototype.o = function() {
        return this.b
    };
    fm.prototype.F = function() {
        return this.h.width
    };
    fm.prototype.w = function() {
        return this.h.height
    };
    var W = function(a) {
        this.b = a
    };
    W.prototype.g = function() {
        return this.b.adId
    };
    W.prototype.h = function() {
        return this.b.creativeId
    };
    var gm = function(a) {
        return a.b.adQueryId
    };
    h = W.prototype;
    h.ie = function() {
        return this.b.adSystem
    };
    h.je = function() {
        return this.b.apiFramework
    };
    h.ve = function() {
        return this.b.adWrapperIds
    };
    h.we = function() {
        return this.b.adWrapperSystems
    };
    h.xe = function() {
        return this.b.linear
    };
    h.ye = function() {
        return this.b.skippable
    };
    h.ne = function() {
        return this.b.contentType
    };
    h.vd = function() {
        return this.b.description
    };
    h.xd = function() {
        return this.b.title
    };
    h.xb = function() {
        return this.b.duration
    };
    h.te = function() {
        return this.b.vastMediaWidth
    };
    h.se = function() {
        return this.b.vastMediaHeight
    };
    h.ue = function() {
        return this.b.width
    };
    h.oe = function() {
        return this.b.height
    };
    h.re = function() {
        return this.b.uiElements
    };
    h.pe = function() {
        return this.b.minSuggestedDuration
    };
    h.he = function() {
        var a = this.b.adPodInfo,
            b = new em;
        b.l = a.podIndex;
        b.m = a.timeOffset;
        b.A = a.totalAds;
        b.b = a.adPosition;
        b.g = a.isBumper;
        b.h = a.maxDuration;
        return b
    };
    h.ke = function(a, b, c) {
        var d = Ha(this.b.companions, function(a) {
            return new fm(a)
        });
        return cm(new $l(new I(a, b), c), d)
    };
    h.qe = function() {
        return dm(ya(this.b.traffickingParameters))
    };
    h.kc = function() {
        return this.b.traffickingParameters
    };
    var X = function(a) {
        Vd.call(this);
        this.l = a;
        this.g = {}
    };
    A(X, Vd);
    var hm = [];
    X.prototype.H = function(a, b, c, d) {
        return im(this, a, b, c, d)
    };
    var im = function(a, b, c, d, e, g) {
            v(c) || (c && (hm[0] = c.toString()), c = hm);
            for (var f = 0; f < c.length; f++) {
                var k = Cf(b, c[f], d || a.handleEvent, e || !1, g || a.l || a);
                if (!k) break;
                a.g[k.tb] = k
            }
            return a
        },
        jm = function(a, b, c, d, e, g) {
            if (v(c))
                for (var f = 0; f < c.length; f++) jm(a, b, c[f], d, e, g);
            else(b = Jf(b, c, d || a.handleEvent, e, g || a.l || a)) && (a.g[b.tb] = b)
        };
    X.prototype.ma = function(a, b, c, d, e) {
        if (v(b))
            for (var g = 0; g < b.length; g++) this.ma(a, b[g], c, d, e);
        else c = c || this.handleEvent, e = e || this.l || this, c = Df(c), d = !!d, b = qf(a) ? yf(a.A, String(b), c, d, e) : a ? (a = Ff(a)) ? yf(a, b, c, d, e) : null : null, b && (Lf(b), delete this.g[b.tb]);
        return this
    };
    var km = function(a) {
        Wa(a.g, function(a, c) {
            this.g.hasOwnProperty(c) && Lf(a)
        }, a);
        a.g = {}
    };
    X.prototype.K = function() {
        X.P.K.call(this);
        km(this)
    };
    X.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var lm = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var mm = {},
        nm = "",
        om = /OS (\S+) like/,
        pm = /Android ([\d\.]+)/,
        rm = function() {
            return !qm() && (Oi() || Ni())
        },
        sm = function() {
            return Ab && !Bb || C(E, "iPod")
        },
        tm = function() {
            return sm() || Bb
        },
        vm = function(a) {
            return zb && um(pm, a)
        },
        um = function(a, b) {
            if (null == mm[b]) {
                var c;
                B(nm) && (c = a.exec(E)) && (nm = c[1]);
                (c = nm) ? (c = c.replace(/_/g, "."), mm[b] = 0 <= Aa(c, b)) : mm[b] = !1
            }
            return mm[b]
        },
        qm = function() {
            return P.pa() || !1
        },
        wm = function() {
            var a = E;
            return a ? C(a, "Nintendo WiiU") : !1
        },
        xm = function() {
            var a;
            if (!(a = C(E, "CrKey") || C(E, "PlayStation") ||
                    C(E, "Roku")))
                if (a = E) {
                    var b = C(a, "AppleTV") || C(a, "GoogleTV") || C(a, "HbbTV") || C(a, "NetCast.TV") || C(a, "Opera TV") || C(a, "POV_TV") || C(a, "SMART-TV") || C(a, "SmartTV");
                    a = Kl(Hl(), 420706011) ? b || C(a, "TV Store") || C(a, "OMI/") || C(a, "Presto") && C(a, "Linux") && !C(a, "X11") && !C(a, "Android") && !C(a, "Mobi") : b
                } else a = !1;
            return a || C(E, "Xbox")
        },
        ym = function() {
            return Wf || qm() && zb && !vm(4.4)
        },
        zm = function() {
            return qm() || P.Hb() && rm() || tm() || zb && !vm(4) || xm() ? !0 : !1
        };
    var Am = function() {
            this.h = -1;
            this.b = null;
            this.l = "";
            this.g = null
        },
        Bm = new Am;
    Am.prototype.clear = function() {
        this.b = null;
        this.l = "";
        this.g = null
    };
    var Cm = function() {
        var a;
        a = "h." + Bm.l;
        null != Bm.g ? (a += "/n." + Bm.g, null != Bm.b && (a += "/" + Bm.b)) : P.pa() && (a += "/o.0.0.0");
        return a
    };
    var Dm = function() {
        this.g = .01 > Math.random();
        this.b = Math.floor(4503599627370496 * Math.random())
    };
    ca(Dm);
    var Gm = function(a, b, c, d) {
            if (a.g || d) {
                c = c || {};
                c.lid = b;
                c.sdkv = Cm();
                b = Ll();
                B(ya(b)) || (c.e = b);
                c = Em(a, c);
                var e = new ue("http://pagead2.googlesyndication.com/pagead/gen_204");
                Wa(c, function(a, b) {
                    e.b.set(b, null != a ? "boolean" == typeof a ? a ? "t" : "f" : "" + a : "")
                }, a);
                a = Fm();
                ve(e, a.h);
                P.Gb() || Tl(e.toString())
            }
        },
        Em = function(a, b) {
            b.id = "ima_html5";
            var c = Fm();
            b.c = a.b;
            b.domain = c.g;
            return b
        },
        Fm = function() {
            var a = K(),
                b = document;
            return new ue(a.parent == a ? a.location.href : b.referrer)
        };
    var Hm = function() {
        R.call(this);
        this.b = null;
        this.C = new X(this);
        Wd(this, ia(Xd, this.C));
        this.g = new re;
        this.m = new re;
        this.w = this.o = !1;
        this.h = null;
        this.l = !1;
        this.B = null
    };
    A(Hm, R);
    var Im = null,
        Jm = !1,
        Km = function() {
            null != Im || (Im = new Hm);
            return Im
        };
    Hm.prototype.K = function() {
        this.C.ma(this.b, "activityMonitor", this.D);
        this.l = !1;
        this.g.clear();
        Hm.P.K.call(this)
    };
    var Mm = function(a) {
            if (null == a) return !1;
            if (sm() && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            var b = window.screen.availWidth || window.screen.width,
                c = window.screen.availHeight || window.screen.height;
            a = Lm(a);
            return 0 >= b - a.width && 42 >= c - a.height
        },
        Lm = function(a) {
            return y(a.getBoundingClientRect) && Fc(pc(a), a) ? a.getBoundingClientRect() : {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        Nm = function(a, b, c, d, e) {
            if (a.l) {
                if (a.B) return a.B(b, c, e);
                e = e || {};
                if (a =
                    d ? a.m.get(d) : P.h) null != e.opt_fullscreen || (e.opt_fullscreen = Mm(a)), null != e.opt_adElement || (e.opt_adElement = a);
                return Pd("lidar::handlevast_html5", ia(Hk, b, c, e)) || {}
            }
            return {}
        };
    Hm.prototype.I = function(a) {
        this.w = a
    };
    Hm.prototype.G = function() {
        return this.w
    };
    Hm.prototype.J = function(a) {
        a ? this.h = new Pi(a.adk, a.awbidKey) : this.h = null
    };
    var Om = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.m.set(c, b);
            if (Kl(Hl(), 31061775)) try {
                hg(function() {
                    return b
                })
            } catch (d) {}
            return c
        },
        Pm = function(a, b, c) {
            c ? a.g.get(c) == b && a.g.Qa(c) : (c = [], a.g.forEach(ia(function(a, b, c, f) {
                c == b && a.push(f)
            }, c, b)), D(c, a.g.Qa, a.g))
        },
        Rm = function(a) {
            if (y(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                Qm(a.b, "activityMonitor", "pageSignals", b)
            }
        };
    Hm.prototype.D = function(a) {
        var b = a.R,
            c = b.queryId,
            d = {};
        d.eventId = b.eventId;
        switch (a.U) {
            case "getPageSignals":
                Rm(this);
                break;
            case "reportVastEvent":
                var e = b.vastEvent;
                a = b.osdId;
                var g = {};
                g.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (g.opt_bounds = b.overlayBounds);
                d.viewabilityData = Nm(this, e, c, a, g);
                Qm(this.b, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                d = {}, d.eventId = b.eventId, a = b.osdId, c = null, bb(b, "isFullscreen") && (c = b.isFullscreen), bb(b, "loggingId") && (b = b.loggingId, d.loggingId = b, Gm(Dm.getInstance(),
                    43, {
                        step: "beforeLookup",
                        logid: b,
                        time: ka()
                    }, !0)), d.engagementString = Sm(this, a, c), Qm(this.b, "activityMonitor", "engagement", d)
        }
    };
    var Sm = function(a, b, c) {
        var d = b ? a.m.get(b) : P.h;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = gg(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + wa(e.name, 12) + ";" + wa(e.message, 40)
        }
        return c
    };
    r("ima.common.getVideoMetadata", function(a) {
        a = Km().g.get(a);
        return y(a) ? a() : {}
    }, void 0);
    r("ima.common.triggerViewEvent", function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        var d = Km().b;
        d ? Qm(d, "activityMonitor", "viewableImpression", c) : Km().dispatchEvent(new O("viewable_impression", null, c))
    }, void 0);
    r("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Jm || (Gm(Dm.getInstance(), 48, {
            source: "loader",
            event: "triggerUpdate",
            coverage: b.coverage,
            position: b.position,
            queryId: a
        }, !0), Jm = !0);
        var c = Km().b,
            d = {};
        d.queryId = a;
        d.viewabilityData = b;
        c && Qm(c, "activityMonitor", "viewabilityMeasurement", d)
    }, void 0);
    r("ima.common.triggerMeasurableEvent", function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        var d = Km().b;
        d ? Qm(d, "activityMonitor", "measurableImpression", c) : Km().dispatchEvent(new O("measurable_impression", null, c))
    }, void 0);
    r("ima.common.triggerExternalActivityEvent", function(a, b, c) {
        var d = {};
        d.queryId = a;
        d.viewabilityString = b;
        d.eventName = c;
        (a = Km().b) ? Qm(a, "activityMonitor", "externalActivityEvent", d): Km().dispatchEvent(new O("externalActivityEvent", null, d))
    }, void 0);
    r("ima.common.updateEngagementDetectionValue", function(a) {
        var b = Km().b;
        if (b) {
            var c = {};
            c.engagementString = a;
            Qm(b, "activityMonitor", "engagementData", c)
        }
    }, void 0);
    var Tm = Km();
    var Um = function(a, b, c) {
        this.g = c;
        0 == b.length && (b = [
            []
        ]);
        this.b = Ha(b, function(b) {
            b = a.concat(b);
            for (var c = [], d = 0, f = 0; d < b.length;) {
                var k = b[d++];
                if (128 > k) c[f++] = String.fromCharCode(k);
                else if (191 < k && 224 > k) {
                    var m = b[d++];
                    c[f++] = String.fromCharCode((k & 31) << 6 | m & 63)
                } else if (239 < k && 365 > k) {
                    var m = b[d++],
                        n = b[d++],
                        q = b[d++],
                        k = ((k & 7) << 18 | (m & 63) << 12 | (n & 63) << 6 | q & 63) - 65536;
                    c[f++] = String.fromCharCode(55296 + (k >> 10));
                    c[f++] = String.fromCharCode(56320 + (k & 1023))
                } else m = b[d++], n = b[d++], c[f++] = String.fromCharCode((k & 15) << 12 |
                    (m & 63) << 6 | n & 63)
            }
            return new RegExp(c.join(""))
        })
    };
    Um.prototype.match = function(a) {
        return Ja(this.b, function(b) {
            b = a.match(b);
            return null == b ? !1 : !this.g || 1 <= b.length && "3.147.1" == b[1] || 2 <= b.length && "3.147.1" == b[2] ? !0 : !1
        }, this)
    };
    var Vm = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Wm = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Xm = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 40, 115, 100,
            107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47
        ],
        Ym = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 99, 111, 114, 101, 47, 97, 100, 109, 111, 98, 47],
        Zm = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47],
        $m = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97,
                51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115
            ],
            [105, 109, 97, 51, 95, 116, 101, 115, 116, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        an = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103,
                40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 116, 101, 115, 116, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        bn = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109,
                95, 100, 101, 98, 117, 103, 92, 46, 106, 115
            ]
        ],
        cn = new Um(Vm, $m, !1),
        dn = new Um(Vm, an, !0),
        en = new Um(Wm, $m, !1),
        fn = new Um(Wm, an, !0),
        gn = new Um(Xm, [], !1),
        hn = new Um(Xm, an, !0),
        jn = new Um(Ym, an, !1),
        kn = new Um(Ym, [
            [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
            [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45,
                57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115
            ],
            [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
            [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115]
        ], !1),
        ln = new Um([104, 116, 116, 112, 115, 63, 58, 47, 47, 103, 111, 111, 103, 108, 101, 97, 100, 115, 92, 46, 103, 92,
            46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 92, 46, 110, 101, 116, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47
        ], [], !1),
        mn = new Um([104, 116, 116, 112, 115, 63, 58, 47, 47, 119, 119, 119, 92, 46, 103, 115, 116, 97, 116, 105, 99, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 106, 115, 47], [], !1),
        nn = new Um([104, 116, 116, 112, 115, 63, 58, 47, 47, 109, 105, 110, 116, 45, 109, 97, 100, 92, 46, 115, 97, 110, 100, 98, 111, 120, 92, 46, 103, 111, 111, 103, 108, 101, 92, 46, 99, 111, 109, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47, 102, 111, 114, 109, 97, 116, 115, 47], [], !1),
        on =
        new Um([104, 116, 116, 112, 115, 63, 58, 47, 47, 118, 105, 100, 101, 111, 45, 97, 100, 45, 116, 101, 115, 116, 92, 46, 97, 112, 112, 115, 112, 111, 116, 92, 46, 99, 111, 109, 47], [], !1),
        pn = new Um(Zm, $m, !1),
        qn = new Um([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47], [], !1),
        rn = new Um(Vm, bn, !1),
        sn = new Um(Zm, bn, !1),
        Xa = {
            B: cn,
            F: dn,
            L: en,
            D: fn,
            A: gn,
            h: hn,
            g: jn,
            l: kn,
            o: ln,
            m: mn,
            b: nn,
            w: on,
            C: pn,
            J: qn,
            G: rn,
            I: sn
        };
    var tn = function(a) {
        this.g = a
    };
    tn.prototype.b = function() {
        return this.g
    };
    var un = function() {
        R.call(this);
        this.currentTime = 0
    };
    A(un, R);
    un.prototype.start = t;
    un.prototype.h = t;
    var vn = function(a) {
        un.call(this);
        this.currentTime = a.currentTime;
        if (!("currentTime" in a) || isNaN(a.currentTime)) throw Yl(Xl, null, "content", "currentTime");
        this.g = a;
        this.b = new Qf(250);
        this.l = new X(this);
        im(this.l, this.b, "tick", this.m, !1, this)
    };
    A(vn, un);
    vn.prototype.start = function() {
        this.b.start()
    };
    vn.prototype.h = function() {
        Rf(this.b)
    };
    vn.prototype.K = function() {
        vn.P.K.call(this);
        this.l.M();
        this.b.M()
    };
    vn.prototype.m = function() {
        if ("currentTime" in this.g && !isNaN(this.g.currentTime)) {
            var a = this.currentTime;
            this.currentTime = this.g.currentTime;
            a != this.currentTime && this.dispatchEvent(new N("currentTimeUpdate"))
        } else this.dispatchEvent(new N("contentWrapperError")), this.h()
    };
    var wn = function(a, b) {
        O.call(this, "adMetadata", a);
        this.b = b || null
    };
    A(wn, O);
    wn.prototype.w = function() {
        return this.b
    };
    var xn = ["classid", "data", "movie", "type", "typemustmatch"],
        yn = function(a, b) {
            var c = function(a, b) {
                for (var c in a)
                    for (var d = c.toLowerCase(), e = 0; e < xn.length; e++) {
                        var m = xn[e];
                        if (d == m) throw Error('Cannot override "' + m + '" ' + b + ', got "' + c + '" with value "' + a[c] + '"');
                    }
            };
            c(a, "attribute");
            c(b, "param")
        };
    var zn = function() {};
    ca(zn);
    zn.prototype.b = 0;
    var An = function(a) {
        R.call(this);
        this.w = a || qc();
        this.I = null;
        this.za = !1;
        this.b = null;
        this.l = void 0;
        this.m = this.o = this.g = null
    };
    A(An, R);
    h = An.prototype;
    h.Xd = zn.getInstance();
    h.getId = function() {
        return this.I || (this.I = ":" + (this.Xd.b++).toString(36))
    };
    h.oa = function() {
        return this.b
    };
    h.Nb = function(a) {
        if (this.g && this.g != a) throw Error("Method not supported");
        An.P.Nb.call(this, a)
    };
    h.gc = function() {
        this.b = this.w.createElement("DIV")
    };
    h.Wa = function() {
        this.za = !0;
        Bn(this, function(a) {
            !a.za && a.oa() && a.Wa()
        })
    };
    var Cn = function(a) {
        Bn(a, function(a) {
            a.za && Cn(a)
        });
        a.l && km(a.l);
        a.za = !1
    };
    An.prototype.K = function() {
        this.za && Cn(this);
        this.l && (this.l.M(), delete this.l);
        Bn(this, function(a) {
            a.M()
        });
        this.b && Ec(this.b);
        this.g = this.b = this.m = this.o = null;
        An.P.K.call(this)
    };
    var Bn = function(a, b) {
        a.o && D(a.o, b, void 0)
    };
    An.prototype.removeChild = function(a, b) {
        if (a) {
            var c = w(a) ? a : a.getId();
            a = this.m && c ? eb(this.m, c) || null : null;
            if (c && a) {
                var d = this.m;
                c in d && delete d[c];
                Qa(this.o, a);
                b && (Cn(a), a.b && Ec(a.b));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.g = null;
                An.P.Nb.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Dn = function(a, b) {
        An.call(this, b);
        this.G = a;
        this.B = new X(this);
        this.h = new re
    };
    A(Dn, An);
    h = Dn.prototype;
    h.gb = "sameDomain";
    h.setSize = function(a, b) {
        this.D = w(a) ? a : Math.round(a) + "px";
        this.C = w(b) ? b : Math.round(b) + "px";
        this.oa() && Qc(this.oa() ? this.oa().firstChild : null, this.D, this.C);
        return this
    };
    h.Wa = function() {
        Dn.P.Wa.call(this);
        for (var a = this.oa(), b = this.h.xa(), c = this.h.Z(), d = [], e = 0; e < b.length; e++) d.push(encodeURIComponent(String(b[e])) + "=" + encodeURIComponent(String(c[e])));
        var b = d.join("&"),
            g;
        if (!G || 11 <= Number(Kb)) g = {
            AllowScriptAccess: this.gb,
            allowFullScreen: "true",
            allowNetworking: "all",
            bgcolor: "#000000",
            "class": "goog-ui-media-flash-object",
            FlashVars: b,
            id: this.getId(),
            name: this.getId(),
            quality: "high",
            SeamlessTabbing: "false",
            wmode: "window"
        }, g = mc({
            src: this.G,
            type: "application/x-shockwave-flash",
            pluginspage: "https://www.macromedia.com/go/getflashplayer"
        }, {
            allownetworking: "none",
            allowscriptaccess: "never"
        }, g), g = lc("embed", g);
        else {
            d = this.G;
            c = {
                allowFullScreen: "true",
                AllowScriptAccess: this.gb,
                allowNetworking: "all",
                bgcolor: "#000000",
                FlashVars: b,
                quality: "high",
                SeamlessTabbing: "false",
                wmode: "window"
            };
            b = {
                "class": "goog-ui-media-flash-object",
                id: this.getId(),
                name: this.getId()
            };
            yn(b, c);
            e = {
                allownetworking: "none",
                allowscriptaccess: "never",
                movie: d
            };
            d = {};
            for (g in e) d[g] = e[g];
            for (g in c) {
                var f = g.toLowerCase();
                f in e && delete d[f];
                d[g] = c[g]
            }
            c = [];
            for (g in d) c.push(lc("param", {
                name: g,
                value: d[g]
            }));
            g = mc({
                classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
            }, {}, b);
            g = lc("object", g, c)
        }
        a.innerHTML = gc(g);
        this.D && this.C && this.setSize(this.D, this.C);
        this.B.H(this.oa(), $a(nf), Yd)
    };
    h.gc = function() {
        if (null != this.J && !(0 <= Aa(ug, this.J))) throw Error("Method not supported");
        var a = this.w.createElement("DIV");
        a.className = "goog-ui-media-flash";
        this.b = a
    };
    h.K = function() {
        Dn.P.K.call(this);
        this.h = null;
        this.B.M();
        this.B = null
    };
    var En = function(a, b) {
        N.call(this, "vpaidEventType");
        this.b = a;
        this.data = b
    };
    A(En, N);
    var Fn = function(a) {
        R.call(this);
        this.o = a;
        this.g = null;
        this.l = -1;
        this.m = !1;
        this.h = "goog_" + Ba++
    };
    A(Fn, R);
    var Gn = dc(Qb(Rb("http://lab.blueserving.com/libs/imaSDK/flashinhtml.swf"))),
        Hn = dc(Qb(Rb("http://lab.blueserving.com/libs/imaSDK/flashinhtml.swf")));
    h = Fn.prototype;
    h.M = function() {
        this.b && (this.b.M(), this.g = null);
        window[this.h] && delete window[this.h];
        l.clearTimeout(this.l)
    };
    h.load = function(a, b, c, d) {
        window[this.h] = z(this.td, this);
        this.b = new Dn(P.uc() ? Hn : Gn);
        this.b.setSize(b, c);
        this.b.gb = "always";
        this.b.h.set("vpaid", a);
        this.b.h.set("vpaidEventHandler", this.h);
        a = this.b;
        b = this.o;
        if (a.za) throw Error("Component already rendered");
        a.b || a.gc();
        b ? b.insertBefore(a.b, null) : a.w.b.body.appendChild(a.b);
        a.g && !a.g.za || a.Wa();
        a = this.b;
        this.g = a.oa() ? a.oa().firstChild : null;
        this.l = Sf(this.nf, d, this)
    };
    h.jb = function(a) {
        if (!this.g) return null;
        var b = Array.prototype.slice.call(arguments),
            c = b.shift();
        if (!this.m && "handshakeVersion" != c && "initAd" != c) return null;
        try {
            if (this.g[c]) return this.g[c].apply(this.g, b)
        } catch (d) {}
        return null
    };
    h.td = function(a, b) {
        "AdLoaded" == a && (l.clearTimeout(this.l), this.m = !0);
        this.dispatchEvent(new En(a, b || null))
    };
    h.nf = function() {
        this.dispatchEvent("loadError")
    };
    var In = function() {
        R.call(this);
        this.o = this.B = this.G = this.C = !1;
        this.g = 0;
        this.l = [];
        this.w = !1;
        this.J = this.I = Infinity;
        this.h = 0;
        this.m = new X(this);
        this.D = {}
    };
    A(In, R);
    In.prototype.ua = function(a) {
        null == a || this.C || (this.b = a, Jn(this), this.C = !0)
    };
    In.prototype.ba = function() {
        null != this.b && this.C && (Kn(this), this.o = this.B = this.C = !1, this.g = 0, this.l = [], this.w = !1)
    };
    var Jn = function(a) {
            Kn(a);
            !(a.b instanceof R) && "ontouchstart" in document.documentElement && tm() ? (a.D = {
                touchstart: z(a.V, a),
                touchmove: z(a.T, a),
                touchend: z(a.S, a)
            }, Wa(a.D, function(a, c) {
                this.b.addEventListener(c, a, !1)
            }, a)) : a.m.H(a.b, "click", a.O)
        },
        Kn = function(a) {
            a.m.ma(a.b, "click", a.O);
            Wa(a.D, function(a, c) {
                this.b.removeEventListener(c, a, !1)
            }, a);
            a.D = {}
        };
    In.prototype.V = function(a) {
        this.B = !0;
        this.g = a.touches.length;
        this.h && (window.clearTimeout(this.h), this.h = 0, this.G = !0);
        (this.w = Ln(this, a.touches) || 1 != a.touches.length) ? this.J = this.I = Infinity: (this.I = a.touches[0].clientX, this.J = a.touches[0].clientY);
        Mn(this, a.touches)
    };
    In.prototype.T = function(a) {
        this.g = a.touches.length;
        if (!tm() || !um(om, 8) || Math.pow(a.changedTouches[0].clientX - this.I, 2) + Math.pow(a.changedTouches[0].clientY - this.J, 2) > Math.pow(5, 2)) this.o = !0
    };
    In.prototype.S = function(a) {
        !this.B || 1 != this.g || this.o || this.G || this.w || !Ln(this, a.changedTouches) || (this.h = window.setTimeout(z(this.N, this), 300));
        this.g = a.touches.length;
        0 == this.g && (this.o = this.B = !1, this.l = []);
        this.G = !1
    };
    In.prototype.O = function() {
        this.N()
    };
    var Mn = function(a, b) {
            a.l = [];
            D(b, function(a) {
                var b = this.l;
                a = a.identifier;
                Ma(b, a) || b.push(a)
            }, a)
        },
        Ln = function(a, b) {
            return Ja(b, function(a) {
                return Ma(this.l, a.identifier)
            }, a)
        };
    In.prototype.N = function() {
        this.h = 0;
        this.dispatchEvent(new N("click"))
    };
    In.prototype.K = function() {
        this.ba();
        this.m.M();
        this.m = null;
        In.P.K.call(this)
    };
    var Nn = function() {
        this.b = [];
        this.g = []
    };
    h = Nn.prototype;
    h.wa = function() {
        return this.b.length + this.g.length
    };
    h.isEmpty = function() {
        return 0 == this.b.length && 0 == this.g.length
    };
    h.clear = function() {
        this.b = [];
        this.g = []
    };
    h.contains = function(a) {
        return Ma(this.b, a) || Ma(this.g, a)
    };
    h.Z = function() {
        for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
        for (var c = this.g.length, b = 0; b < c; ++b) a.push(this.g[b]);
        return a
    };
    var On = function() {};
    h = On.prototype;
    h.disableClickThrough = !1;
    h.mimeTypes = null;
    h.restoreCustomPlaybackStateOnAdBreakComplete = !1;
    h.useStyledLinearAds = !1;
    h.useVideoAdUi = !0;
    h.loadVideoTimeout = 15E3;
    var Pn = function(a) {
        if (B(ya(a))) return null;
        var b = a.match(/^https?:\/\/[^\/]*youtu\.be\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        b = a.match(/^https?:\/\/[^\/]*youtube.com\/video\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        b = a.match(/^https?:\/\/[^\/]*youtube.com\/watch\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        a = (new ue(a)).b;
        return Ue(a, "v") ? a.get("v").toString() : Ue(a, "video_id") ? a.get("video_id").toString() : null
    };
    var Qn = function(a) {
        this.g = 0;
        this.h = a || 100;
        this.b = []
    };
    h = Qn.prototype;
    h.get = function(a) {
        a = Rn(this, a);
        return this.b[a]
    };
    h.set = function(a, b) {
        a = Rn(this, a);
        this.b[a] = b
    };
    h.wa = function() {
        return this.b.length
    };
    h.isEmpty = function() {
        return 0 == this.b.length
    };
    h.clear = function() {
        this.g = this.b.length = 0
    };
    h.Z = function() {
        for (var a = this.wa(), b = this.wa(), c = [], a = this.wa() - a; a < b; a++) c.push(this.get(a));
        return c
    };
    h.xa = function() {
        for (var a = [], b = this.wa(), c = 0; c < b; c++) a[c] = c;
        return a
    };
    var Rn = function(a, b) {
        if (b >= a.b.length) throw Error("Out of bounds exception");
        return a.b.length < a.h ? b : (a.g + Number(b)) % a.h
    };
    var Sn = function() {
        R.call(this)
    };
    A(Sn, R);
    var Tn = {
        Zf: "beginFullscreen",
        CLICK: "click",
        Ig: "end",
        Jg: "endFullscreen",
        ERROR: "error",
        LOADED: "loaded",
        lh: "mediaLoadTimeout",
        fb: "pause",
        kd: "play",
        Bi: "skip",
        Ci: "skipShown",
        zi: "shareClicked",
        Yb: "start",
        Ni: "timeUpdate",
        cg: "cardsStateChange",
        Li: "timedMetadata",
        ej: "volumeChange"
    };
    h = Sn.prototype;
    h.rb = t;
    h.$a = t;
    h.load = t;
    h.Sa = t;
    h.Bb = t;
    h.Ra = t;
    h.Db = t;
    h.Cb = t;
    h.nb = t;
    h.Fa = t;
    h.Ja = t;
    h.fa = t;
    h.Da = t;
    h.Ta = t;
    h.Ea = t;
    h.wc = function() {
        return !0
    };
    h.ua = t;
    h.ba = t;
    h.qc = ba;
    var Un = function(a) {
        R.call(this);
        this.b = a;
        this.S = "";
        this.w = -1;
        this.T = new Qn(4);
        this.h = 0;
        this.O = this.l = this.N = this.C = !1;
        this.I = this.Ea();
        this.G = this.Fa();
        this.V = 15E3;
        this.J = !1
    };
    A(Un, Sn);
    h = Un.prototype;
    h.rb = function() {
        return Ga($a(Jk), function(a) {
            return !B(this.b.canPlayType(a))
        }, this)
    };
    h.$a = function(a) {
        this.V = 0 < a.b ? a.b : 15E3
    };
    h.yc = function(a) {
        this.b.seekable.length ? this.b.seekable.end(0) > this.w && (this.b.currentTime = this.w, a()) : setTimeout(z(this.yc, this, a), 100)
    };
    h.Mc = function() {
        this.S = this.b.currentSrc;
        this.b.ended ? this.w = -1 : this.w = this.b.currentTime
    };
    h.Jc = function(a) {
        if (0 <= this.w) {
            var b = this;
            this.b.addEventListener("loadedmetadata", function d() {
                b.yc(a);
                b.b.removeEventListener("loadedmetadata", d, !1)
            }, !1);
            this.b.src = this.S;
            this.b.load()
        } else a()
    };
    h.load = function(a, b) {
        Vn(this);
        b && P.pa() && y(this.b.b) && this.b.b(b);
        this.b.src = a;
        this.b.load()
    };
    h.Sa = function(a) {
        this.b.volume = a
    };
    h.Bb = function() {
        return this.b.volume
    };
    h.Ra = function() {
        this.J = !1;
        Sf(this.b.play, 0, this.b);
        this.D || (this.D = Sf(this.pd, this.V, this))
    };
    h.Db = function() {
        this.J = !0;
        this.b.pause()
    };
    h.Cb = function() {
        return this.b.paused ? tm() || Xf ? this.b.currentTime < this.b.duration : !0 : !1
    };
    h.nb = function() {
        sm() && this.b.webkitDisplayingFullscreen && this.b.webkitExitFullscreen()
    };
    h.Fa = function() {
        return Mm(this.b)
    };
    h.Ja = function(a) {
        this.b.currentTime = a
    };
    h.fa = function() {
        return this.b.currentTime
    };
    h.Da = function() {
        return isNaN(this.b.duration) ? -1 : this.b.duration
    };
    h.Ta = function() {
        return this.b.ended
    };
    h.Ea = function() {
        return new I(this.b.offsetWidth, this.b.offsetHeight)
    };
    h.K = function() {
        this.ba();
        this.b = null;
        Un.P.K.call(this)
    };
    h.ua = function() {
        this.ba();
        this.g = new X(this);
        this.g.H(this.b, lm, this.Y);
        this.g.H(this.b, "canplay", this.kf);
        this.g.H(this.b, "ended", this.mf);
        this.g.H(this.b, "webkitbeginfullscreen", this.Eb);
        this.g.H(this.b, "webkitendfullscreen", this.rc);
        this.g.H(this.b, "pause", this.rf);
        this.g.H(this.b, "playing", this.tf);
        this.g.H(this.b, "timeupdate", this.vf);
        this.g.H(this.b, "volumechange", this.zf);
        this.g.H(this.b, "error", this.Cc);
        this.g.H(this.b, ym() || tm() && (!tm() || !um(om, 8)) ? "loadeddata" : "canplay", this.pf);
        this.o =
            new In;
        this.g.H(this.o, "click", this.Ze);
        this.o.ua(this.b);
        this.B = new Qf(1E3);
        this.g.H(this.B, "tick", this.$e);
        this.B.start()
    };
    h.ba = function() {
        null != this.o && (this.o.ba(), this.o = null);
        null != this.B && this.B.M();
        null != this.g && (this.g.M(), this.g = null);
        Vn(this)
    };
    var Vn = function(a) {
        a.N = !1;
        a.l = !1;
        a.C = !1;
        a.h = 0;
        a.O = !1;
        a.T.clear();
        Wn(a);
        Xd(a.m)
    };
    Un.prototype.Y = function(a) {
        this.dispatchEvent(a.type)
    };
    var Xn = function(a) {
        a.l || (a.l = !0, Wn(a), a.dispatchEvent("start"), (sm() && !qm() || zb && !vm(4) || !P.Aa() && xm()) && zb && !vm(3) && (!sm() || tm() && um(om, 4)) && a.Eb())
    };
    h = Un.prototype;
    h.kf = function() {
        var a;
        if (a = Yf) a = E, a = !(a && (C(a, "SMART-TV") || C(a, "SmartTV")));
        a && !this.O && (this.Ja(.001), this.O = !0)
    };
    h.pf = function() {
        this.N || (this.N = !0, this.dispatchEvent("loaded"))
    };
    h.tf = function() {
        this.dispatchEvent("play");
        tm() || ym() || Xn(this)
    };
    h.vf = function() {
        if (!this.l && (tm() || ym())) {
            if (0 >= this.fa()) return;
            if (ym() && this.Ta() && 1 == this.Da()) {
                this.Cc();
                return
            }
            Xn(this)
        }
        if (tm() || wm()) {
            if (1.5 < this.fa() - this.h) {
                this.C = !0;
                this.Ja(this.h);
                return
            }
            this.C = !1;
            this.fa() > this.h && (this.h = this.fa())
        }
        var a = this.T;
        a.b[a.g] = this.b.currentTime;
        a.g = (a.g + 1) % a.h;
        this.dispatchEvent("timeUpdate")
    };
    h.zf = function() {
        this.dispatchEvent("volumeChange")
    };
    h.rf = function() {
        var a;
        this.l && tm() && !this.J && 2 > Yn(this) ? (this.m = new Qf(250), this.g.H(this.m, "tick", this.jf), this.m.start(), a = !0) : a = !1;
        a || this.dispatchEvent("pause")
    };
    h.mf = function() {
        var a = Kl(Hl(), 136961002),
            b = !0;
        if (tm() || wm() || a && zb) b = this.h >= this.b.duration - 1.5;
        !this.C && b && this.dispatchEvent("end")
    };
    h.Eb = function() {
        this.dispatchEvent("beginFullscreen")
    };
    h.rc = function() {
        this.dispatchEvent("endFullscreen")
    };
    h.Cc = function() {
        Wn(this);
        this.dispatchEvent("error")
    };
    h.Ze = function() {
        this.dispatchEvent("click")
    };
    h.$e = function() {
        var a = this.Ea(),
            b = this.Fa();
        if (a.width != this.I.width || a.height != this.I.height) !this.G && b ? this.Eb() : this.G && !b && this.rc(), this.I = a, this.G = b
    };
    h.pd = function() {
        if (!this.l) {
            try {
                Gm(Dm.getInstance(), 16)
            } catch (a) {}
            Vn(this);
            this.dispatchEvent("mediaLoadTimeout")
        }
    };
    h.jf = function() {
        if (this.Ta() || !this.Cb()) Xd(this.m);
        else {
            var a = this.b.duration - this.b.currentTime,
                b = Yn(this);
            0 < b && (2 <= b || 2 > a) && (Xd(this.m), this.Ra())
        }
    };
    var Yn = function(a) {
            var b;
            a: {
                for (b = a.b.buffered.length - 1; 0 <= b;) {
                    if (a.b.buffered.start(b) <= a.b.currentTime) {
                        b = a.b.buffered.end(b);
                        break a
                    }
                    b--
                }
                b = 0
            }
            return b - a.b.currentTime
        },
        Wn = function(a) {
            a.D && (l.clearTimeout(a.D), a.D = null)
        };
    var $n = function() {
        R.call(this);
        this.g = new Zn;
        this.b = new X(this);
        var a = ae(P);
        if (a) {
            a: {
                if (bb(a.b, "videoElementMockDuration") && (a = a.b.videoElementMockDuration, x(a))) break a;a = NaN
            }
            this.duration = a
        }
    };
    A($n, R);
    var ao = function() {
            var a = ["video/mp4"],
                b = ["video/ogg"],
                c = new $n;
            c.canPlayType = function(c) {
                return Ma(a, c) ? "probably" : Ma(b, c) ? "maybe" : ""
            };
            c.width = 0;
            c.height = 0;
            c.offsetWidth = 0;
            c.offsetHeight = 0;
            return c
        },
        bo = function(a) {
            this.b = a
        },
        Zn = function() {
            this.length = 0;
            this.b = []
        };
    Zn.prototype.start = function() {
        return 0
    };
    Zn.prototype.end = function(a) {
        return this.b[a].b
    };
    h = $n.prototype;
    h.readyState = 0;
    h.currentTime = 0;
    h.duration = NaN;
    h.volume = 1;
    h.src = "";
    h.Ma = null;
    h.bb = null;
    h.load = function() {
        this.readyState = 0;
        this.dispatchEvent("loadstart");
        this.duration = Number(isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
        this.dispatchEvent("durationchange");
        var a = this.g;
        a.b.push(new bo(this.duration));
        a.length = a.b.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    };
    h.K = function() {
        this.b.M()
    };
    h.yf = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.bb && (this.bb.innerText = b);
        c && this.Ma && (this.Ma.style.backgroundColor = c)
    };
    G && Jb(8);
    var co = function() {
        throw Error("Do not instantiate directly");
    };
    co.prototype.b = null;
    co.prototype.getContent = function() {
        return this.content
    };
    co.prototype.toString = function() {
        return this.content
    };
    var eo = function() {
        co.call(this)
    };
    A(eo, co);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var c = new b(String(a));
            void 0 !== d && (c.b = d);
            return c
        }
    })(eo);
    var fo = {},
        go = function(a, b) {
            var c = "key_" + a + ":" + b,
                d = fo[c];
            if (void 0 === d || 0 > d) fo[c] = 0;
            else if (0 == d) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
        };
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var c = String(a);
            if (!c) return "";
            c = new b(c);
            void 0 !== d && (c.b = d);
            return c
        }
    })(eo);
    go("a", "");
    go("a", "redesign2014q4");
    go("b", "");
    go("b", "redesign2014q4");
    var ho = function(a, b, c) {
        if (null == a || !Fc(pc(a), a)) throw Yl(Xl, null, "containerElement", "element");
        this.m = a;
        this.g = this.b = null;
        this.l = b;
        this.A = c || !1;
        this.h = null;
        this.b = wc("DIV", {
            style: "display:none;"
        });
        var d;
        a = ae(P);
        if (be(a, "useVideoElementMock")) {
            a = ao();
            b = wc("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (d in a) b[d] = a[d];
            a.Ma = wc("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.bb = wc("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.Ma.appendChild(a.bb);
            b.appendChild(a.Ma);
            a.b.H(a, ["loadeddata", "playing", "pause", "ended"], a.yf);
            d = b
        } else d = wc("VIDEO", {
            style: "background-color:#000;position:absolute;width:100%;height:100%;",
            title: "Advertisement"
        });
        d.setAttribute("webkit-playsinline", !0);
        d.setAttribute("playsinline", !0);
        this.g = d;
        this.m.appendChild(this.b);
        this.b.appendChild(this.g);
        this.l && (d = wc("DIV", {
            id: this.l,
            style: "display:none;background-color:#000;position:absolute;width:100%;height:100%;"
        }), this.b.appendChild(d));
        this.A &&
            (this.h = wc("DIV", {
                style: "position:absolute;width:100%;height:100%;"
            }), this.b.appendChild(this.h))
    };
    A(ho, Vd);
    ho.prototype.K = function() {
        Ec(this.b);
        ho.P.K.call(this)
    };
    ho.prototype.show = function() {
        io(this.b, !0)
    };
    var io = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var jo = function(a, b, c, d, e, g, f, k, m, n, q, u, J) {
        this.h = a;
        this.l = m;
        this.m = b;
        this.A = c;
        this.w = f;
        this.F = n;
        this.B = d;
        this.D = e;
        this.C = q;
        this.b = g;
        this.g = k;
        this.o = u;
        this.L = J
    };
    var lo = function(a) {
        R.call(this);
        this.J = "ima-chromeless-video";
        var b = null;
        null != a && (w(a) ? this.J = a : b = a);
        this.N = new X(this);
        this.m = null;
        this.l = !1;
        this.aa = this.Ea();
        this.$ = this.Fa();
        this.D = -1;
        this.T = !1;
        this.o = -1;
        this.g = this.S = this.G = null;
        this.ea = "";
        this.h = !1;
        this.Y = null != b;
        this.da = this.I = this.V = this.b = null;
        this.w = void 0;
        this.C = this.ca = null;
        this.B = 0;
        this.Y ? (this.h = !0, this.b = b, this.w = 2) : (a = z(this.qd, this), ko ? a() : (Na.push(a), a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api", b =
            document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)))
    };
    A(lo, Sn);
    var mo = {
            el: "adunit",
            controls: 0,
            html5: 1,
            playsinline: 1,
            ps: "gvn",
            showinfo: 0
        },
        Na = [],
        ko = !1;
    h = lo.prototype;
    h.$a = function(a) {
        this.g = a
    };
    h.load = function(a, b) {
        null !== a && (this.ea = a, this.h ? no(this, a, b) : (this.G = a, this.S = b))
    };
    h.Sa = function(a) {
        this.Y ? this.dispatchEvent("volumeChange") : this.h ? (a = Math.min(Math.max(100 * a, 0), 100), this.b.setVolume(a), this.o = -1, this.dispatchEvent("volumeChange")) : this.o = a
    };
    h.Bb = function() {
        return this.h ? this.b.getVolume() / 100 : this.o
    };
    h.Ra = function() {
        if (!B(ya(this.ea))) {
            if (!this.l) {
                oo(this);
                var a = 15E3;
                null != this.g && 0 < this.g.b && (a = this.g.b);
                this.ia = Sf(this.va, a, this)
            }
            this.h ? (this.T = !1, !this.l && this.g && this.g.g ? this.b.loadVideoByPlayerVars(this.ca) : this.b.playVideo()) : this.T = !0
        }
    };
    h.Db = function() {
        this.h && this.l && this.b.pauseVideo()
    };
    h.Cb = function() {
        return this.h ? 2 == this.b.getPlayerState(this.w) : !1
    };
    h.nb = function() {};
    h.Fa = function() {
        var a = document.getElementById(this.J);
        return a ? Mm(a) : !1
    };
    h.Ja = function(a) {
        this.h ? this.b.seekTo(a, !1) : this.D = a
    };
    h.fa = function(a) {
        return this.h ? this.b.getCurrentTime(a || this.w) : -1
    };
    h.Da = function() {
        return this.h && this.l ? this.b.getDuration(this.w) : -1
    };
    h.rb = function() {
        return $a(Jk)
    };
    h.Ta = function() {
        return this.h ? 0 == this.b.getPlayerState(this.w) : !1
    };
    h.Ea = function() {
        var a = document.getElementById(this.J);
        return a ? new I(a.offsetWidth, a.offsetHeight) : new I(0, 0)
    };
    h.wc = function() {
        return this.h ? 1 == this.b.getPlayerState(this.w) : !1
    };
    h.af = function() {
        var a = this.Ea(),
            b = this.Fa();
        if (a.width != this.aa.width || a.height != this.aa.height) !this.$ && b ? this.dispatchEvent("beginFullscreen") : this.$ && !b && this.dispatchEvent("endFullscreen"), this.aa = a, this.$ = b
    };
    h.ua = function() {
        this.V = z(this.Dc, this);
        this.I = z(this.Lb, this);
        this.da = z(this.Ec, this);
        this.na = z(this.uf, this);
        this.Y && (this.b.addEventListener("onAdStateChange", this.I), this.b.addEventListener("onReady", this.V), this.b.addEventListener("onStateChange", this.I), this.b.addEventListener("onVolumeChange", this.da), this.b.addEventListener("onSharePanelOpened", this.na));
        this.O = new Qf(1E3);
        this.N.H(this.O, "tick", this.af);
        this.O.start()
    };
    h.ba = function() {
        this.Y && (this.b.removeEventListener("onAdStateChange", this.I), this.b.removeEventListener("onReady", this.V), this.b.removeEventListener("onStateChange", this.I), this.b.removeEventListener("onVolumeChange", this.da), this.b.removeEventListener("onSharePanelOpened", this.na));
        null != this.O && this.O.M()
    };
    h.qd = function() {
        var a = fb(mo);
        Kl(Hl(), 21592053) && (a.ps = "gvn-experiment");
        var b = this.J,
            a = {
                playerVars: a,
                events: {
                    cardstatechange: z(this.lf, this),
                    onError: z(this.sf, this),
                    onReady: z(this.Dc, this),
                    onAdStateChange: z(this.Lb, this),
                    onStateChange: z(this.Lb, this),
                    onVolumeChange: z(this.Ec, this)
                }
            },
            c = aa("YT");
        this.b = null != c && null != c.Player ? new c.Player(b, a) : null
    };
    var no = function(a, b, c) {
        var d = {
            autoplay: "1"
        };
        if (null != a.g) {
            var e = a.g.m;
            null != e && (d.agcid = e);
            e = a.g.h;
            null != e && (d.adformat = e);
            e = a.g.l;
            null != e && (d.ad_query_id = e);
            (e = a.g.A) && (d.cta_conversion_urls = e);
            (e = a.g.o) && (d.endscreen_ad_tracking_data = e);
            (e = a.g.L) && (d.wait_for_vast_info_cards_xml = e);
            a.g.F && (d.is_pharma = 1);
            d.iv_load_policy = a.g.B ? 1 : 3;
            a.g.w && (d.noiba = 1);
            a.g.D && (d.utpsa = 1);
            a.g.C && (d.autoplay = "1")
        }
        null != b ? Rl(Ml, b) ? (e = b.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), e = null != e && 1 < e.length ? e[1] : null) : e = null != b && Rl(Nl,
            b) ? Pn(b) : null : e = null;
        null === e ? d.url_encoded_third_party_media = "url=" + encodeURIComponent(b) + "&type=" + encodeURIComponent(null === c ? "" : c) : d.videoId = e;
        a.l = !1;
        a.g && a.g.g ? (a.ca = d, a.b.preloadVideoByPlayerVars(a.ca)) : a.b.cueVideoByPlayerVars(d);
        a.dispatchEvent("loaded")
    };
    h = lo.prototype;
    h.sf = function() {
        this.dispatchEvent("error")
    };
    h.Dc = function() {
        this.h = !0;
        this.C && this.qc(this.C.Kf, this.C.od, this.C.If); - 1 != this.o && (this.Sa(this.o), this.o = -1);
        null != this.G && (no(this, this.G, this.S), this.S = this.G = null); - 1 != this.D && (this.Ja(this.D), this.D = -1);
        this.T && this.Ra()
    };
    h.lf = function() {
        this.dispatchEvent("cardsStateChange")
    };
    h.Lb = function(a) {
        switch (a.data) {
            case 0:
                this.l ? this.dispatchEvent("end") : this.dispatchEvent("error");
                break;
            case 1:
                this.l || (oo(this), this.l = !0, this.B = 0, this.dispatchEvent("start"));
                this.dispatchEvent("play");
                po(this);
                this.m = new Qf(100);
                this.N.H(this.m, "tick", this.ha);
                this.m.start();
                break;
            case 2:
                this.dispatchEvent("pause"), po(this)
        }
    };
    h.Ec = function() {
        this.dispatchEvent("volumeChange")
    };
    h.uf = function() {
        this.dispatchEvent("shareClicked")
    };
    var po = function(a) {
            a.N.ma(a.m, "tick", a.ha);
            null != a.m && (Rf(a.m), a.m = null)
        },
        oo = function(a) {
            null != a.ia && l.clearTimeout(a.ia)
        };
    lo.prototype.ha = function() {
        if (Uf || wm()) {
            if (1.5 < this.fa() - this.B) {
                this.h && this.b.seekTo(this.B, !0);
                return
            }
            this.fa() > this.B && (this.B = this.fa())
        }
        this.dispatchEvent("timeUpdate")
    };
    lo.prototype.va = function() {
        this.dispatchEvent("mediaLoadTimeout")
    };
    lo.prototype.qc = function(a, b, c) {
        if (b || c) this.h ? this.b.addInfoCardXml(a, b, c) : this.C = {
            Kf: a,
            od: b,
            If: c
        }
    };
    lo.prototype.K = function() {
        po(this);
        oo(this);
        this.ba();
        this.h = !1;
        this.N.M();
        this.D = -1;
        this.S = null;
        this.T = !1;
        this.G = null;
        this.o = -1;
        this.V = this.b = this.g = null;
        this.l = !1;
        this.ea = "";
        lo.P.K.call(this)
    };
    r("onYouTubeIframeAPIReady", function() {
        ko = !0;
        D(Na, function(a) {
            a()
        });
        Pa()
    }, window);
    var qo = function(a) {
        R.call(this);
        this.b = a || "goog_" + Ba++;
        this.h = []
    };
    A(qo, R);
    qo.prototype.g = !1;
    qo.prototype.connect = function() {
        for (this.g = !0; 0 != this.h.length;) {
            var a = this.h.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    var Qm = function(a, b, c, d) {
        a.g ? a.sendMessage(b, c, d) : a.h.push({
            name: b,
            type: c,
            data: d
        })
    };
    qo.prototype.sendMessage = t;
    var ro = function(a, b, c, d, e) {
        N.call(this, a);
        this.U = b;
        this.R = c;
        this.Za = d;
        this.Fc = e
    };
    A(ro, N);
    ro.prototype.toString = function() {
        return ""
    };
    var so = function(a, b) {
        qo.call(this, b);
        this.l = a;
        this.ga = null;
        this.m = new X(this);
        this.m.H(K(), "message", this.o)
    };
    A(so, qo);
    var to = function(a) {
        if (null == a || !w(a) || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return fe(a)
        } catch (b) {
            return null
        }
    };
    so.prototype.sendMessage = function(a, b, c) {
        null != this.ga && null != this.ga.postMessage && this.ga.postMessage(uo(this, a, b, c), "*");
        null != this.ga && null == this.ga.postMessage && Gm(Dm.getInstance(), 11)
    };
    so.prototype.K = function() {
        this.m.M();
        so.P.K.call(this)
    };
    so.prototype.o = function(a) {
        a = a.b;
        var b = to(a.data);
        if (vo(this, b)) {
            if (null == this.ga) this.ga = a.source, this.g || this.connect();
            else if (this.ga != a.source) return;
            vo(this, b) && this.dispatchEvent(new ro(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var uo = function(a, b, c, d) {
            var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.b;
            e.channel = a.l;
            return "ima://" + ie(e)
        },
        vo = function(a, b) {
            if (null == b) return !1;
            var c = b.channel;
            if (null == c || c != a.l) return !1;
            c = b.sid;
            return null == c || "*" != a.b && c != a.b ? !1 : !0
        };
    var wo = function(a, b) {
        R.call(this);
        this.l = a;
        this.h = b;
        this.b = {};
        this.g = new X(this);
        this.g.H(K(), "message", this.m)
    };
    A(wo, R);
    var xo = function(a, b) {
            var c = b.b;
            a.b.hasOwnProperty(c) && Qm(a.b[c], b.type, b.U, b.R)
        },
        zo = function(a, b, c, d) {
            a.b.hasOwnProperty(b) || (c = new so(b, c), a.g.H(c, a.l, function(a) {
                this.dispatchEvent(new yo(a.type, a.U, a.R, a.Za, a.Fc, b))
            }), c.ga = d, c.connect(), a.b[b] = c)
        };
    wo.prototype.K = function() {
        this.g.M();
        for (var a in this.b) Xd(this.b[a]);
        wo.P.K.call(this)
    };
    wo.prototype.m = function(a) {
        a = a.b;
        var b = to(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.h && !this.b.hasOwnProperty(c)) {
                var d = b.sid;
                zo(this, c, d, a.source);
                this.dispatchEvent(new yo(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };
    var yo = function(a, b, c, d, e, g) {
        ro.call(this, a, b, c, d, e);
        this.b = g
    };
    A(yo, ro);
    var Bo = function() {
        var a = aa("google.ima.gptProxyInstance", K());
        if (null != a) return a;
        X.call(this);
        this.h = new wo("gpt", !0);
        Wd(this, ia(Xd, this.h));
        this.H(this.h, "gpt", this.A);
        this.b = null;
        Ao() || K().top === K() || (this.b = new wo("gpt", !1), Wd(this, ia(Xd, this.b)), this.H(this.b, "gpt", this.m))
    };
    A(Bo, X);
    var Ao = function() {
            return !!aa("googletag.cmd", K())
        },
        Co = function() {
            var a = aa("googletag.console", K());
            return null != a ? a : null
        };
    Bo.prototype.A = function(a) {
        var b = a.Fc,
            c = "//imasdk.googleapis.com".match(nd),
            b = b.match(nd);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.b) zo(this.b, a.b, a.Za, K().parent), null != this.b && xo(this.b, a);
            else if (c = a.R, null != c && p(c.scope)) {
            var b = c.scope,
                c = c.args,
                d;
            if ("proxy" == b) c = a.U, "isGptPresent" == c ? d = Ao() : "isConsolePresent" == c && (d = null != Co());
            else if (Ao())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.U;
                    var e, g = K().googletag;
                    if (null != g && null != g[b] && (g = g[b](), null != g && (d = g[d], null != d))) try {
                        e = d.apply(g, c)
                    } catch (f) {}
                    d =
                        e
                } else if ("console" == b) {
                if (g = a.U, e = Co(), null != e && (g = e[g], null != g)) try {
                    g.apply(e, c)
                } catch (f) {}
            } else if (null === b) {
                e = a.U;
                d = K();
                if (Ma(["googleGetCompanionAdSlots", "googleSetCompanionAdContents"], e) && (e = d[e], null != e)) try {
                    g = e.apply(d, c)
                } catch (f) {}
                d = g
            }
            p(d) && (a.R.returnValue = d, xo(this.h, a))
        }
    };
    Bo.prototype.m = function(a) {
        xo(this.h, a)
    };
    var Eo = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, n, q, u) {
                if ("%" == n) return "%";
                var e = c.shift();
                if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = e;
                return Do[n].apply(null, arguments)
            })
        },
        Do = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + xa(" ", Number(c) - a.length) : xa(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var g;
                g = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = g + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - g.length;
                return d = 0 <= b.indexOf("-", 0) ? g + d + xa(" ", a) : g + xa(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, g, f, k) {
                return Do.f(parseInt(a,
                    10), b, c, d, 0, g, f, k)
            }
        };
    Do.i = Do.d;
    Do.u = Do.d;
    var Go = function(a, b) {
        R.call(this);
        this.g = new X(this);
        this.C = !1;
        this.D = "goog_" + Ba++;
        this.B = new re;
        var c = this.D,
            d = P.pa() ? (Wc() ? "https:" : "http:") + Eo("//imasdk.googleapis.com/js/core/admob/bridge_%s.html", P.l) : (Wc() ? "https:" : "http:") + Eo("//lab.blueserving.com/libs/imaSDK/bridge3.147.1.html", P.l),
            e;
        a: {
            var g = window;
            try {
                do {
                    try {
                        if (0 == g.location.href.indexOf(d) || 0 == g.document.referrer.indexOf(d)) {
                            e = !0;
                            break a
                        }
                    } catch (f) {}
                    g = g.parent
                } while (g != g.top)
            } catch (f) {}
            e = !1
        }
        e && (d += "?f=" + c);
        c = wc("IFRAME", {
            src: d + "#" + c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        jm(this.g, c, "load", this.ud, void 0);
        a.appendChild(c);
        this.h = c;
        this.w = Fo(this);
        this.o = b;
        this.b = this.o.g;
        this.l = this.m = null;
        this.g.H(this.w, "mouse", this.G);
        this.g.H(this.w, "touch", this.J);
        null != this.b && (this.g.H(this.w, "displayContainer", this.Cd), this.g.H(this.w, "videoDisplay", this.I), this.g.H(this.w, "preloadVideoDisplay", this.Dd), this.g.H(this.b, $a(Tn), this.la), this.g.H(this.b, lm, this.la));
        c = K();
        d = aa("google.ima.gptProxyInstance",
            c);
        null == d && (d = new Bo, r("google.ima.gptProxyInstance", d, c))
    };
    A(Go, R);
    var Fo = function(a, b) {
            var c = b || "*",
                d = a.B.get(c);
            null == d && (d = new so(a.D, c), a.C && (d.ga = Gc(a.h), d.connect()), a.B.set(c, d));
            return d
        },
        Ho = function(a, b) {
            null != a.b && (a.g.ma(a.b, $a(Tn), a.la), a.g.ma(a.b, lm, a.la));
            a.b = b;
            a.g.H(a.b, $a(Tn), a.la);
            a.g.H(a.b, lm, a.la)
        };
    Go.prototype.K = function() {
        this.g.M();
        null !== this.l && (this.l.M(), this.l = null);
        qe(this.B.Ka(!1), function(a) {
            a.M()
        });
        this.B.clear();
        Ec(this.h);
        Go.P.K.call(this)
    };
    Go.prototype.G = function(a) {
        var b = a.R,
            c = Nc(this.h),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.U, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        if (!Yf || tm() || 0 == document.webkitIsFullScreen) this.h.blur(), window.focus();
        this.h.dispatchEvent(d)
    };
    var Io = function(a, b) {
        var c = Nc(a.h),
            d = Ha(b, function(a) {
                return document.createTouch(window, this.h, a.identifier, a.pageX + c.x, a.pageY + c.y, a.screenX, a.screenY)
            }, a);
        return document.createTouchList.apply(document, d)
    };
    Go.prototype.J = function(a) {
        var b = a.R,
            c = Nc(this.h),
            d = document.createEvent("TouchEvent");
        d.initTouchEvent(a.U, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, Io(this, b.touches), Io(this, b.targetTouches), Io(this, b.changedTouches), b.scale, b.rotation);
        this.h.dispatchEvent(d)
    };
    Go.prototype.I = function(a) {
        if (null != this.b) {
            var b = a.R;
            switch (a.U) {
                case "startTracking":
                    this.b.ua();
                    break;
                case "stopTracking":
                    this.b.ba();
                    break;
                case "exitFullscreen":
                    this.b.nb();
                    break;
                case "play":
                    this.b.Ra();
                    break;
                case "pause":
                    this.b.Db();
                    break;
                case "load":
                    this.b.load(b.videoUrl, b.mimeType);
                    break;
                case "setCurrentTime":
                    this.b.Ja(b.currentTime);
                    break;
                case "setPlaybackOptions":
                    this.b.$a(Jo(b));
                    break;
                case "setVolume":
                    this.b.Sa(b.volume)
            }
        }
    };
    var Jo = function(a) {
        a = a.playbackOptions;
        return new jo(a.adFormat, a.adSenseAgcid, a.ctaAnnotationTrackingEvents, a.showAnnotations, a.viewCountsDisabled, a.loadVideoTimeout, a.ibaDisabled, a.enablePreloading, a.adQemId, a.isPharma, a.useAutoplayFlag, a.endscreenAdTracking, a.waitForVastInfoCardsXml)
    };
    h = Go.prototype;
    h.Dd = function(a) {
        if (null != this.m) {
            var b = a.R;
            switch (a.U) {
                case "startTracking":
                    this.m.ua();
                    break;
                case "stopTracking":
                    this.m.ba();
                    break;
                case "setPlaybackOptions":
                    this.m.$a(Jo(b));
                    break;
                case "load":
                    this.m.load(b.videoUrl, b.mimeType)
            }
        }
    };
    h.la = function(a) {
        var b = {};
        switch (a.type) {
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.b.Ta();
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.b.fa();
                b.duration = this.b.Da();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.b.Bb();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.b.Da();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        Qm(this.w, "videoDisplay", a, b)
    };
    h.Cd = function(a) {
        switch (a.U) {
            case "showVideo":
                null != this.l ? this.l.ba() : (this.l = new In, this.g.H(this.l, "click", this.xf));
                this.l.ua(Ko(this.o));
                a = this.o;
                null != a.b && a.b.show();
                break;
            case "hide":
                null !== this.l && (this.l.M(), this.l = null);
                a = this.o;
                null != a.b && io(a.b.b, !1);
                break;
            case "getPreloadDisplay":
                null != this.b && null == this.m && (this.m = this.o.w);
                break;
            case "swapVideoDisplays":
                if (null != this.b && null != this.m) {
                    this.g.ma(this.b, $a(Tn), this.la);
                    this.g.ma(this.b, lm, this.la);
                    a = this.o;
                    if (a.b && a.g && a.l && a.w) {
                        var b =
                            a.g;
                        a.g = a.w;
                        a.w = b;
                        b = a.b;
                        a.b = a.l;
                        a.l = b;
                        null != a.o && Ho(a.o, a.g)
                    }
                    this.b = this.o.g;
                    this.m = this.o.w;
                    this.g.H(this.b, $a(Tn), this.la);
                    this.g.H(this.b, lm, this.la)
                }
        }
    };
    h.xf = function() {
        Qm(this.w, "displayContainer", "videoClick")
    };
    h.ud = function() {
        qe(this.B.Ka(!1), function(a) {
            a.ga = Gc(this.h);
            a.connect()
        }, this);
        this.C = !0
    };
    var Lo = function(a, b, c, d, e) {
        if (!(e || null != a && Fc(pc(a), a))) throw Yl(Xl, null, "containerElement", "element");
        this.L = !1;
        this.F = a;
        e = null != b || null != d;
        if (!e && P.b) throw Yl(Vl, null, "Custom video element was not provided even though the setting restrictToCustomPlayback is set to true.");
        var g = e,
            f = !1;
        P.b || zm() && e || (!qm() && rm() || qm() && zb && !vm(4.2) || xm() || (f = !0), g = !1);
        this.B = g;
        this.S = (this.X = f) || g && null != d;
        e = wc("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(e, a.firstChild);
        this.h = e;
        this.b = !this.B && this.h && rm() ?
            new ho(this.h, null, !0) : null;
        a = null;
        this.B ? b ? a = new Un(b) : d && (a = new lo(d)) : this.b && (a = new Un(this.b.g));
        this.g = a;
        this.w = this.l = null;
        a = zb && !vm(4);
        e = sm() && rm();
        (P.pa() || this.b && this.g && this.h && !this.B && P.g && !xm() && !a && !e) && this.h && (this.l = new ho(this.h, null, !0), this.w = new Un(this.l.g));
        this.A = this.g ? c || null : null;
        this.G = null != this.A;
        Gm(Dm.getInstance(), 8, {
            enabled: this.B,
            yt: null != d,
            customClick: null != this.A
        });
        null === this.h ? (b = this.F, P.h = b) : this.B && b ? y(b.getBoundingClientRect) || (b = this.F, P.h = b) : b = this.h;
        this.D = b;
        this.o = null != this.h ? new Go(this.h, this) : null;
        this.C = new I(0, 0)
    };
    Lo.prototype.I = function() {
        this.L = !0;
        if (null != this.b) {
            var a = this.b.g;
            rm() && a.load()
        }
        null != this.l && (a = this.l.g, rm() && a.load())
    };
    Lo.prototype.N = function() {
        Xd(this.b);
        Xd(this.l);
        Xd(this.o);
        Xd(this.g);
        Xd(this.w);
        Ec(this.h)
    };
    var Ko = function(a) {
        return a.G && a.A ? a.A : null != a.b ? a.b.h : null
    };
    Lo.prototype.m = function() {
        return this.B
    };
    Lo.prototype.O = function() {
        return this.X
    };
    Lo.prototype.J = function() {
        return this.S
    };
    Lo.prototype.setSize = function(a, b) {
        var c = this.h;
        null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
        null != this.o && (c = this.o, c.h.width = -1 == a ? "100%" : a, c.h.height = -1 == b ? "100%" : b);
        this.C = new I(a, b)
    };
    var Mo = xb && "srcdoc" in document.createElement("iframe"),
        No = wb || xb || G && Jb(11),
        Oo = function(a, b) {
            a.open("text/html", "replace");
            a.write(b);
            a.close()
        },
        To = function(a, b) {
            G && Jb(7) && !Jb(10) && 6 > Po() && Qo(b) && (b = Ro(b));
            var c = function() {
                    a.contentWindow.goog_content = b;
                    a.contentWindow.location.replace("javascript:window.goog_content")
                },
                d;
            if (d = G) {
                var e;
                try {
                    e = Tc(a.contentWindow)
                } catch (g) {
                    e = !1
                }
                d = !e
            }
            d ? So(a, c) : c()
        },
        Po = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Uo = 0,
        So = function(a, b) {
            var c = "goog_rendering_callback" + Uo++;
            window[c] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" + document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        Qo = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        Ro = function(a) {
            a = unescape(encodeURIComponent(a));
            for (var b = Math.floor(a.length / 2), c = [], d = 0; d < b; ++d) c[d] = String.fromCharCode(256 * a.charCodeAt(2 * d + 1) + a.charCodeAt(2 * d));
            1 == a.length % 2 && (c[b] = a.charAt(a.length - 1));
            return c.join("")
        };
    var Vo = function(a, b) {
        this.h = a;
        this.g = null;
        this.w = "";
        this.B = 0;
        this.l = this.b = null;
        this.G = b;
        this.o = null;
        this.m = ""
    };
    A(Vo, R);
    Vo.prototype.D = function(a) {
        try {
            var b = a.b.data;
            try {
                var c = fe(b)
            } catch (u) {
                return
            }
            var d = c.session;
            if (null != d && this.m == d) {
                if ("friendlyReady" == c.type) {
                    var e = Wo(this);
                    if ((Oi() || Ni()) && null != e) {
                        this.g = e;
                        this.w = e.currentSrc;
                        this.B = e.currentTime;
                        var g = this.h;
                        null != g.b && g.b.show()
                    } else {
                        var f = this.h.F,
                            k, m = this.h.C;
                        k = "border: 0; margin: 0; padding: 0; position: absolute; " + ("width:" + m.width + "px; ");
                        k += "height:" + m.height + "px;";
                        this.g = wc("VIDEO", {
                            style: k
                        });
                        null != Wo(this) && x(Wo(this).volume) && (this.g.volume = Wo(this).volume);
                        f.appendChild(this.g)
                    }
                    var n = this.h.F;
                    a = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var q = Sc(this.g);
                    a += "width:" + q.width + "px; ";
                    a += "height:" + q.height + "px;";
                    this.l = wc("DIV", {
                        style: a
                    });
                    n.appendChild(this.l);
                    try {
                        this.b.contentWindow.loader.initFriendly(this.g, this.l)
                    } catch (u) {
                        Xo(this)
                    }
                }
                Qm(this.G, "vpaid", "", b)
            }
        } catch (u) {
            Xo(this)
        }
    };
    var Xo = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.m;
            a = ie(b);
            window.postMessage(a, "*")
        },
        Wo = function(a) {
            a = a.h.g;
            return a instanceof Un && a.b instanceof HTMLVideoElement ? a.b : null
        };
    Vo.prototype.K = function() {
        R.P.K.call(this);
        Xd(this.C);
        this.C = null;
        Ec(this.l);
        this.l = null;
        Ec(this.b);
        this.b = null;
        var a = Wo(this);
        (Oi() || Ni()) && null != a ? (a.src = this.w, a.currentTime = this.B, a = this.h, null != a.b && io(a.b.b, !1)) : (Ec(this.g), this.g = null)
    };
    var Y = function(a, b, c, d, e, g) {
        R.call(this);
        this.b = a;
        this.I = b;
        this.va = d;
        this.m = null;
        this.$ = g;
        this.S = !1;
        this.O = 1;
        this.na = c;
        this.ea = this.aa = this.Y = -1;
        this.o = this.h = null;
        this.C = new Nn;
        this.ia = !1;
        this.T = new re;
        this.V = this.ha = !1;
        this.l = this.g = this.w = null;
        this.ca = e && null != this.b.A;
        this.N = z(this.zd, this);
        this.G = new X(this);
        this.G.H(this.$, "adsManager", this.La)
    };
    A(Y, R);
    Y.prototype.La = function(a) {
        switch (a.U) {
            case "error":
                Yo(this, a.R);
                break;
            case "contentPauseRequested":
                var b = this.b.g;
                this.b.m() && null != this.m && this.m.restoreCustomPlaybackStateOnAdBreakComplete && null != b.Mc && b.Mc();
                this.B(a.U, a.R);
                break;
            case "contentResumeRequested":
                a = z(Y.prototype.B, this, a.U, a.R);
                b = this.b.g;
                this.b.m() && null != this.m && this.m.restoreCustomPlaybackStateOnAdBreakComplete && null != b.Jc ? b.Jc(a) : a();
                break;
            case "remainingTime":
                b = a.R;
                this.Y = b.currentTime;
                this.aa = b.duration;
                this.ea = b.remainingTime;
                break;
            case "skip":
                this.B(a.U, a.R);
                break;
            case "log":
                var b = a.R,
                    c = b.adData;
                this.B(a.U, c, b.logData);
                break;
            case "companionBackfill":
                a = aa("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipshown":
                this.S = !0;
                this.B(a.U, a.R);
                break;
            case "vpaidEvent":
                try {
                    var d = a.R;
                    switch (d.vpaidEventType) {
                        case "createFriendlyIframe":
                            b = this.w = new Vo(this.b, this.$);
                            b.m = d.session;
                            a = "about:self";
                            G && (a = "");
                            b.b = wc("IFRAME", {
                                src: a,
                                allowtransparency: !0,
                                background: "transparent"
                            });
                            Kc(b.b, {
                                display: "none",
                                width: "0",
                                height: "0"
                            });
                            b.h.F.appendChild(b.b);
                            c = '<body><script src="//lab.blueserving.com/libs/imaSDK/loader.js">\x3c/script><script>' + ('loader = new VPAIDLoader(false, "' + b.m + '");') + "\x3c/script></body>";
                            null == b.o && (b.o = new X(b));
                            b.o.H(window, "message", b.D);
                            if (Xf || Tf) {
                                var e = b.b;
                                No ? Oo(e.contentWindow.document, c) : To(e, c)
                            } else {
                                var g = b.b;
                                Mo ? g.srcdoc = c : No ? Oo(g.contentWindow.document, c) : To(g, c)
                            }
                            break;
                        case "destroyFriendlyIframe":
                            null != this.w && (this.w.M(), this.w = null)
                    }
                } catch (f) {
                    Yo(this, f.R)
                }
                break;
            case "skippableStateChanged":
                b =
                    a.R;
                c = b.adData;
                null != c.skippable && (this.S = c.skippable);
                this.B(a.U, a.R);
                break;
            case "initInsecureFlashVpaid":
                this.h = a = null != a.R.adData ? new W(a.R.adData) : null;
                a = a.b.mediaUrl;
                this.l = wc("DIV", {
                    style: "position:absolute;visibility:visible;width:100%;height:100%;top:0;left:0;"
                });
                this.b.F.appendChild(this.l);
                this.g = new Fn(this.l);
                this.G.H(this.g, "loadError", this.Na);
                this.G.H(this.g, "vpaidEventType", this.da);
                this.g.load(a, this.b.C.width, this.b.C.height, null != this.m ? this.m.loadVideoTimeout : 15E3);
                break;
            case "destroyInsecureFlashVpaid":
                null !==
                    this.g && (this.g.M(), this.g = null);
                null !== this.l && (yc(this.l), this.l = null);
                break;
            case "callFlashVpaidMethod":
                if (null !== this.g) {
                    b = [];
                    c = a.R.methodData;
                    a = c.methodName;
                    c = c.args;
                    b.push(a);
                    for (e = 0; e < c.length; e++) b.push(c[e]);
                    (b = this.g.jb.apply(this.g, b)) && this.da(new En("flashVpaidMethodResults", {
                        methodName: a,
                        result: b
                    }))
                }
                break;
            case "cacheAbandonUrls":
                break;
            default:
                this.B(a.U, a.R)
        }
    };
    Y.prototype.Na = function() {
        this.da(new En("AdError", {
            message: "Flash VPAID loader failed to load."
        }))
    };
    Y.prototype.da = function(a) {
        var b = a.b;
        a = a.data;
        "flashReady" == b ? (this.g.jb("handshakeVersion", "2.0"), this.g.jb("initAd", this.b.C.width, this.b.C.height, "normal", -2, this.h.kc())) : Zo(this, "onFlashVpaidEvent", {
            eventType: b,
            data: a
        })
    };
    Y.prototype.B = function(a, b, c) {
        if (null == b.companions) {
            var d = this.T.get(b.adId);
            b.companions = null != d ? d : []
        }
        this.h = d = null != b.adData ? new W(b.adData) : null;
        switch (a) {
            case "adBreakReady":
            case "trackingUrlPinged":
            case "mediaUrlPinged":
                a = new O(a, null, b);
                break;
            case "adMetadata":
                a = null;
                null != b.adCuePoints && (a = new tn(b.adCuePoints));
                a = new wn(d, a);
                break;
            case "allAdsCompleted":
                this.h = null;
                this.ha = !0;
                a = new O(a, d);
                break;
            case "contentPauseRequested":
                this.V = !1;
                a = new O(a, d);
                break;
            case "contentResumeRequested":
                this.h =
                    null;
                this.V = !0;
                a = new O(a, d);
                break;
            case "loaded":
                this.Y = 0;
                this.aa = d.xb();
                this.ea = d.xb();
                c = Km();
                var e = this.N,
                    g = this.va,
                    f = Ak.getInstance();
                c.g.set(gm(d), e);
                c.w && c.h && (S.getInstance().g = !0, f.g = c.h);
                c.o && (Gm(Dm.getInstance(), 48, {
                    source: "loader",
                    event: "initialize",
                    queryId: gm(d)
                }, !0), f.m = !0, Nm(c, "loaded", gm(d), g));
                a = new O(a, d, b.adData);
                break;
            case "start":
                this.T.set(b.adId, b.companions);
                null != Ko(this.b) && (null != this.o ? this.o.ba() : (this.o = new In, this.G.H(this.o, "click", this.qf)), this.o.ua(Ko(this.b)));
                a = new O(a,
                    d);
                break;
            case "complete":
                null != this.o && this.o.ba();
                Pm(Km(), this.N, gm(d));
                this.h = null;
                this.T.Qa(b.adId);
                a = new O(a, d);
                break;
            case "log":
                b = {
                    adError: $o(c)
                };
                a = new O(a, d, b);
                break;
            case "urlNavigationRequested":
                a = new O(a, d, b.urlNavigationData);
                break;
            default:
                a = new O(a, d)
        }
        this.dispatchEvent(a);
        this.ha && this.V && this.yb()
    };
    var Yo = function(a, b) {
            var c = new Zd($o(b));
            a.ia ? (a.dispatchEvent(c), a.h && Pm(Km(), a.N, gm(a.h)), a.h = null) : a.C.g.push(c);
            Gm(Dm.getInstance(), 7, {
                error: b.errorCode
            }, !0)
        },
        $o = function(a) {
            var b = new Ud(a.type, a.errorMessage, a.errorCode);
            null != a.innerError && (b.b = Error(a.innerError));
            return b
        },
        Zo = function(a, b, c) {
            Qm(a.$, "adsManager", b, c)
        };
    h = Y.prototype;
    h.Bc = function() {
        Zo(this, "contentTimeUpdate", {
            currentTime: this.J.currentTime
        })
    };
    h.Ge = function() {
        Zo(this, "sendImpressionUrls")
    };
    h.lc = function(a, b, c, d) {
        if (this.C.isEmpty()) {
            var e = this.b;
            null != d && (P.b || zm() ? (e.B = !0, Xd(e.b), Xd(e.l), Xd(e.w), e.b = null, e.l = null, e.w = null, Xd(e.g), e.g = new Un(d), null !== e.h && (y(d.getBoundingClientRect) ? e.D = d : (e.D = e.F, P.h = e.D)), null != e.o && Ho(e.o, e.g)) : e.B = !1);
            this.ia = !0;
            this.zb(a, b, c);
            Zo(this, "init", {
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.C.isEmpty();) b = a = this.C, 0 == b.b.length && (b.b = b.g, b.b.reverse(), b.g = []), a = a.b.pop(), this.dispatchEvent(a);
            this.M()
        }
    };
    h.ef = function() {
        return this.b.m()
    };
    h.df = function() {
        return this.ca
    };
    h.Ee = function() {
        return this.ea
    };
    h.Be = function() {
        return this.S
    };
    h.rd = function() {
        Zo(this, "discardAdBreak")
    };
    h.zd = function() {
        var a = null != this.h ? this.h.b.vpaid : !1,
            b = this.b.g,
            c = null != b ? b.fa() : this.Y,
            d = null != b ? b.Da() : this.aa;
        return {
            currentTime: c,
            duration: d,
            isPlaying: null != b ? b.wc() : !1,
            isVpaid: a,
            isYouTube: P.Aa(),
            volume: this.O
        }
    };
    h.Ie = function() {
        Zo(this, "skip")
    };
    h.start = function() {
        if (this.I && !P.pa()) {
            !sm() || P.Aa() || Gm(Dm.getInstance(), 50, {
                customPlayback: this.b.m()
            });
            rm() && !this.b.L && Gm(Dm.getInstance(), 26, {
                adtagurl: this.I,
                customPlayback: this.b.m()
            });
            Rg(this.b.h) && Gm(Dm.getInstance(), 30, {
                adtagurl: this.I,
                customPlayback: this.b.m()
            });
            var a = this.b.A,
                b = this.b.h,
                c;
            if (c = a && b && !Rg(a)) a = Lm(a), b = Lm(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && Gm(Dm.getInstance(), 31, {
                adtagurl: this.I,
                customPlayback: this.b.m()
            })
        }
        if (rm() && !this.b.L && !this.b.m()) throw Yl(Wl);
        b = this.b;
        b.G = this.ca && null != b.A;
        this.b.o.h.style.opacity = 1;
        this.J && x(this.J.volume) && 1 == this.O && this.Ab(this.J.volume);
        Zo(this, "start")
    };
    h.qf = function() {
        if ((null == this.m || !this.m.disableClickThrough) && null != this.h) {
            var a = this.h.b.clickThroughUrl;
            null != a && (B(ya(a)) || window.open(a, "_blank"))
        }
    };
    h.zb = function(a, b, c) {
        if (null !== this.g) {
            var d = this.g;
            d.b && d.b.setSize(a, b);
            Qc(this.l, a, b)
        }
        this.b.setSize(a, b);
        Zo(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    h.Je = function() {
        Zo(this, "stop")
    };
    h.Ae = function() {
        Zo(this, "expand")
    };
    h.ze = function() {
        Zo(this, "collapse")
    };
    h.Fe = function() {
        return this.O
    };
    h.Ab = function(a) {
        this.O = a;
        if (!P.pa()) {
            var b = this.b.g;
            null != b && b.Sa(a)
        }
        Zo(this, "volume", {
            volume: a
        })
    };
    h.He = function(a) {
        Zo(this, "mediaUrl", {
            mediaUrl: a
        })
    };
    h.nc = function() {
        Zo(this, "pause")
    };
    h.oc = function() {
        Zo(this, "resume")
    };
    h.yb = function() {
        null != this.w && (this.w.M(), this.w = null);
        null !== this.g && (this.g.M(), this.g = null);
        null !== this.l && (yc(this.l), this.l = null);
        this.M()
    };
    h.Ce = function() {
        return this.na
    };
    h.De = function() {
        return this.h
    };
    h.K = function() {
        Zo(this, "destroy");
        null != this.o && this.o.M();
        this.G.M();
        this.C.clear();
        this.D && (this.D.h(), this.D.M());
        Pm(Km(), this.N);
        Y.P.K.call(this)
    };
    var ap = function(a, b, c) {
        N.call(this, "adsManagerLoaded");
        this.b = a;
        this.o = b;
        this.B = c || ""
    };
    A(ap, N);
    ap.prototype.A = function(a, b) {
        var c = this.b;
        c.J = a;
        null != b && (c.m = b);
        null != a.currentTime && (c.D = new vn(a), c.D.H("currentTimeUpdate", c.Bc, !1, c), c.D.start(), c.Bc());
        var d = {};
        null != b && jb(d, b);
        c.ca && (P.Aa() ? d.useVideoAdUi = !1 : d.useClickElement = !1, d.disableClickThrough = !0);
        Zo(c, "configure", {
            adsRenderingSettings: d
        });
        return this.b
    };
    ap.prototype.F = function() {
        return this.o
    };
    ap.prototype.w = function() {
        return this.B
    };
    /*
    var bp;
    if (bp = !Ya(function(a) {
            return a.match(K().location.href)
        })) {
        var cp = document;
        bp = null == La(cp.querySelectorAll && cp.querySelector ? cp.querySelectorAll("SCRIPT") : cp.getElementsByTagName("SCRIPT"), function(a) {
            return Ya(function(b) {
                return b.match(a.src)
            })
        })
    }
    if (bp) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    */
    var dp = function(a) {
        R.call(this);
        this.b = a;
        this.l = new re;
        this.g = this.b.o;
        this.m = new X(this);
        if (this.g) {
            a = Km();
            var b = Fo(this.g);
            if (!a.l) {
                a.b = b || null;
                a.b && (a.C.H(a.b, "activityMonitor", a.D), Rm(a));
                if (!(l.ima && l.ima.video && l.ima.video.client && l.ima.video.client.tagged)) {
                    r("ima.video.client.sdkTag", !0, void 0);
                    var c = l.document,
                        b = c.createElement("script"),
                        d = c.location.protocol;
                    "http:" != d && "https:" != d && (d = "");
                    b.src = d + "//s0.2mdn.net/instream/video/client.js";
                    b.async = !0;
                    b.type = "text/javascript";
                    c = c.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                Kl(Hl(), 41351021) && (a.o = !0);
                a.B = (y(null), null);
                P.pa() && (cj = !0, S.getInstance().A = 79463068);
                a.l = !0
            }
            this.h = Om(a, this.b.D)
        }
        var e;
        a: {
            try {
                e = window.top.location.href
            } catch (g) {
                e = 2;
                break a
            }
            e = null != e ? e == window.document.location.href ? 0 : 1 : 2
        }
        Bm.h = e
    };
    A(dp, R);
    h = dp.prototype;
    h.K = function() {
        this.m.M();
        Km().m.Qa(this.h);
        dp.P.K.call(this)
    };
    h.cf = function() {
        this.M()
    };
    h.sc = function(a, b) {
        a.adTagUrl && Gm(Dm.getInstance(), 8, {
            adtagurl: a.adTagUrl,
            customPlayback: this.b.m(),
            customClick: null != this.b.A,
            restrict: P.b
        });
        var c = "",
            d = Ad(),
            e = d.g,
            g = d.b;
        e && e.url ? c = e.url : g && g.url && (c = g.url);
        a.location = c;
        a.referrer = window.document.referrer;
        a.supportsYouTubeHosted = this.b.J();
        var f = a.adTagUrl,
            k = this.b.F,
            m = [],
            n = "",
            q = "";
        if (null != k) {
            for (var u = k, J = [], pa = 0; u && 25 > pa; ++pa) {
                var Oa;
                a: {
                    if (u && u.nodeName && u.parentElement)
                        for (var Ob = u.nodeName.toString().toLowerCase(), ub = u.parentElement.childNodes,
                                zg = 0, jh = 0; jh < ub.length; ++jh) {
                            var kh = ub[jh];
                            if (kh.nodeName && kh.nodeName.toString().toLowerCase() === Ob) {
                                if (u === kh) {
                                    Oa = "." + zg;
                                    break a
                                }++zg
                            }
                        }
                    Oa = ""
                }
                J.push((u.nodeName && u.nodeName.toString().toLowerCase()) + "" + Oa);
                u = u.parentElement
            }
            n = J.join();
            if (k) {
                var lh = k.ownerDocument,
                    zc = lh && (lh.defaultView || lh.parentWindow) || null,
                    $k = [];
                if (zc) try {
                    for (var sd = zc.parent, al = 0; sd && sd !== zc && 25 > al; ++al) {
                        for (var bl = sd.frames, De = 0; De < bl.length; ++De)
                            if (zc === bl[De]) {
                                $k.push(De);
                                break
                            }
                        zc = sd;
                        sd = zc.parent
                    }
                } catch (mh) {}
                q = $k.join()
            } else q =
                ""
        }
        m.push(n, q);
        if (null != f) {
            for (var nh = 0; nh < Td.length - 1; ++nh) m.push(wd(f, Td[nh]) || "");
            var cl = wd(f, "videoad_start_delay"),
                dl = "";
            if (cl) var el = parseInt(cl, 10),
                dl = 0 > el ? "postroll" : 0 == el ? "preroll" : "midroll";
            m.push(dl)
        } else
            for (var fl = 0; fl < Td.length; ++fl) m.push("");
        var oh;
        var gl = m.join(":"),
            hl = gl.length;
        if (0 == hl) oh = 0;
        else {
            for (var Ac = 305419896, ph = 0; ph < hl; ph++) Ac ^= (Ac << 5) + (Ac >> 2) + gl.charCodeAt(ph) & 4294967295;
            oh = 0 < Ac ? Ac : 4294967296 + Ac
        }
        a.videoAdKey = oh.toString();
        var il = a.adTagUrl,
            qh;
        if (null != il && "ca-pub-6219811747049371" !=
            wd(il, "client")) qh = null;
        else {
            var jl = aa("window.yt.util.activity.getTimeSinceActive");
            qh = null != jl ? jl().toString() : null
        }
        var kl = qh;
        null != kl && (a.lastActivity = kl);
        var rh;
        var ll = a.adTagUrl;
        if (null == ll) rh = !1;
        else {
            var ml = new ue(ll),
                nl = ml.A,
                ol = ml.g,
                sh = ol.length - 27;
            rh = 0 <= sh && ol.indexOf("googleads.g.doubleclick.net", sh) == sh && (B(ya(nl)) ? !1 : /\/pagead\/(live\/)?ads/.test(nl))
        }
        if (rh) {
            var Bc = window,
                Ia = md().document,
                ib = {},
                th, pl, ql, rl;
            th = Sd(window).Qb;
            var uh;
            var Yb = th,
                td = Yb.location.href;
            if (Yb == Yb.top) uh = {
                url: td,
                xc: !0
            };
            else {
                var vh = !1,
                    wh = Yb.document;
                wh && wh.referrer && (td = wh.referrer, Yb.parent == Yb.top && (vh = !0));
                var xh = Yb.location.ancestorOrigins;
                if (xh) {
                    var yh = xh[xh.length - 1];
                    yh && -1 == td.indexOf(yh) && (vh = !1, td = yh)
                }
                uh = {
                    url: td,
                    xc: vh
                }
            }
            pl = uh;
            var Ee;
            a: {
                var Fb = md(),
                    sl = Bc.h || Fb.h,
                    tl = Bc.g || Fb.g;
                if (Fb && Fb.top == Fb) Ee = !1;
                else {
                    var Fe = Ia.documentElement;
                    if (sl && tl) {
                        var Ge = 1,
                            He = 1;
                        Fb.innerHeight ? (Ge = Fb.innerWidth, He = Fb.innerHeight) : Fe && Fe.clientHeight ? (Ge = Fe.clientWidth, He = Fe.clientHeight) : Ia.body && (Ge = Ia.body.clientWidth, He = Ia.body.clientHeight);
                        if (He > 2 * tl || Ge > 2 * sl) {
                            Ee = !1;
                            break a
                        }
                    }
                    Ee = !0
                }
            }
            var Ie = ql = Ee,
                jp = pl.xc,
                zh = md(),
                Je = zh.top == zh ? 0 : Tc(zh.top) ? 1 : 2,
                Cc = 4;
            Ie || 1 != Je ? Ie || 2 != Je ? Ie && 1 == Je ? Cc = 7 : Ie && 2 == Je && (Cc = 8) : Cc = 6 : Cc = 5;
            jp && (Cc |= 16);
            rl = "" + Cc;
            var Ah = th,
                ul = ql;
            ib.iframing = rl;
            if (!Bc.b && "ad.yieldmanager.com" == Ia.domain) {
                for (var Ke = Ia.URL.substring(Ia.URL.lastIndexOf("http")); - 1 < Ke.indexOf("%");) try {
                    Ke = decodeURIComponent(Ke)
                } catch (mh) {
                    break
                }
                Bc.b = Ke
            }
            Bc.b ? (ib.page_url = Bc.b, ib.page_location = (ul ? Ia.referrer : Ia.URL) || "EMPTY") : (ib.page_url = ul ? Ia.referrer :
                Ia.URL, ib.page_location = null);
            ib.last_modified_time = Ia.URL == ib.page_url ? Date.parse(Ia.lastModified) / 1E3 : null;
            var Bh;
            if (Ah == Ah.top) Bh = Ah.document.referrer;
            else {
                var Le;
                a: {
                    var Dc = l.context;
                    if (!Dc) try {
                        Dc = l.parent.context
                    } catch (mh) {}
                    try {
                        if (Dc && "pageViewId" in Dc && "canonicalUrl" in Dc) {
                            Le = Dc;
                            break a
                        }
                    } catch (mh) {}
                    Le = null
                }
                Bh = (Le ? Le.referrer : null) || ""
            }
            ib.referrer_url = Bh;
            a.adSenseParams = ib
        }
        var vl = "goog_" + Ba++;
        this.l.set(vl, b || null);
        var ud = {};
        jb(ud, a);
        var kp = this.W().g,
            lp = this.W().m,
            mp = this.W().Jf(),
            np = this.W().pa(),
            op = this.W().uc() || !1,
            pp = this.W().Gb(),
            qp = this.W().Hb(),
            rp = this.W().Aa(),
            sp = this.W().o,
            tp = this.W().A,
            up = this.W().w,
            vp = this.W().C,
            wp = this.W().Ff(),
            xp = Km();
        ud.settings = {
            autoPlayAdBreaks: kp,
            chromelessPlayer: !0,
            companionBackfill: lp,
            enableTrvBillOnClick: !1,
            engagementDetection: !0,
            unloadAbandonPingEnabled: mp,
            cacheAbandonUrls: !1,
            isAdMob: np,
            isInChina: op,
            isFunctionalTest: pp,
            isVpaidAdapter: qp,
            isYouTube: rp,
            numRedirects: sp,
            onScreenDetection: !0,
            playbackQualityWindowMinimumLength: 3E3,
            playerType: tp,
            playerVersion: up,
            ppid: vp,
            preSkipFx: "",
            reportMediaRequests: wp,
            activeViewPushUpdates: xp.o,
            restrictToCustomPlayback: this.W().b,
            useCompanionsAsEndSlate: !1,
            usePlaybackQualityWindow: this.W().L(),
            vpaidMode: this.W().B,
            testingConfig: ae(this.W()).b
        };
        var wl = this.b.g;
        ud.videoEnvironment = {
            customClickTrackingProvided: null != this.b.A,
            iframeState: Bm.h,
            osdId: this.h,
            supportedMimeTypes: null != wl ? wl.rb() : null,
            usesChromelessPlayer: this.b.O(),
            usesCustomVideoPlayback: this.b.m(),
            usesYouTubePlayer: this.b.J()
        };
        ud.experimentState = Jl();
        var xl =
            Fo(this.g, vl);
        this.m.H(xl, "adsLoader", this.Bd);
        Qm(xl, "adsLoader", "requestAds", ud)
    };
    h.W = function() {
        return P
    };
    h.bf = function() {
        Qm(Fo(this.g), "adsLoader", "contentComplete")
    };
    h.Bd = function(a) {
        var b = a.U;
        switch (b) {
            case "adsLoaded":
                b = a.R;
                a = a.Za;
                var c = new Y(this.b, b.adTagUrl || "", b.adCuePoints, this.h, b.isCustomClickTrackingAllowed, Fo(this.g, a));
                this.dispatchEvent(new ap(c, this.l.get(a), b.response));
                break;
            case "error":
                b = a.R;
                a = a.Za;
                c = new Ud(b.type, b.errorMessage, b.errorCode);
                null != b.innerError && (c.b = Error(b.innerError));
                this.dispatchEvent(new Zd(c, this.l.get(a)));
                Gm(Dm.getInstance(), 7, {
                    error: b.errorCode
                }, !0);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new O(b, null, a.R))
        }
    };
    var Z = function() {};
    h = Z.prototype;
    h.clone = function() {
        var a = new Z;
        "auto" == this.videoPlayActivation ? a.Mb(!0) : "click" == this.videoPlayActivation && a.Mb(!1);
        a.adTagUrl = this.adTagUrl;
        a.adSenseParams = fb(this.adSenseParams);
        a.adsResponse = this.adsResponse;
        a.ac = this.ac;
        a.customMacros = fb(this.customMacros);
        a.b = this.b;
        a.location = this.location;
        a.referrer = this.referrer;
        a.lastActivity = this.lastActivity;
        a.language = this.language;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
        a.videoAdKey = this.videoAdKey;
        a.tagForChildDirectedContent = this.tagForChildDirectedContent;
        a.usePostAdRequests = this.usePostAdRequests;
        a.avoidRetries = this.avoidRetries;
        a.supportsYouTubeHosted = this.supportsYouTubeHosted;
        a.youTubeAdType = this.youTubeAdType;
        a.youTubeVideoAdStartTime = this.youTubeVideoAdStartTime;
        a.cc = this.cc;
        a.$b = this.$b;
        a.h = this.h;
        a.g = this.g;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        a.Uc = this.Uc;
        a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
        return a
    };
    h.adSenseParams = null;
    h.ac = null;
    h.customMacros = null;
    h.videoPlayActivation = "unknown";
    h.liveStreamPrefetchSeconds = 0;
    h.linearAdSlotWidth = 0;
    h.linearAdSlotHeight = 0;
    h.nonLinearAdSlotWidth = 0;
    h.nonLinearAdSlotHeight = 0;
    h.forceNonLinearFullSlot = !1;
    h.videoAdKey = null;
    h.tagForChildDirectedContent = !1;
    h.usePostAdRequests = !1;
    h.avoidRetries = !1;
    h.supportsYouTubeHosted = !0;
    h.Uc = new function() {};
    h.youTubeVideoAdStartTime = 0;
    h.cc = null;
    h.$b = !1;
    h.Mb = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    W.prototype.getCompanionAds = W.prototype.ke;
    W.prototype.isLinear = W.prototype.xe;
    W.prototype.isSkippable = W.prototype.ye;
    W.prototype.getAdId = W.prototype.g;
    W.prototype.getAdSystem = W.prototype.ie;
    W.prototype.getApiFramework = W.prototype.je;
    W.prototype.getContentType = W.prototype.ne;
    W.prototype.getCreativeId = W.prototype.h;
    W.prototype.getDescription = W.prototype.vd;
    W.prototype.getTitle = W.prototype.xd;
    W.prototype.getDuration = W.prototype.xb;
    W.prototype.getHeight = W.prototype.oe;
    W.prototype.getWidth = W.prototype.ue;
    W.prototype.getVastMediaHeight = W.prototype.se;
    W.prototype.getVastMediaWidth = W.prototype.te;
    W.prototype.getWrapperAdIds = W.prototype.ve;
    W.prototype.getWrapperAdSystems = W.prototype.we;
    W.prototype.getTraffickingParameters = W.prototype.qe;
    W.prototype.getTraffickingParametersString = W.prototype.kc;
    W.prototype.getAdPodInfo = W.prototype.he;
    W.prototype.getUiElements = W.prototype.re;
    W.prototype.getMinSuggestedDuration = W.prototype.pe;
    tn.prototype.getCuePoints = tn.prototype.b;
    r("google.ima.AdCuePoints.PREROLL", 0, window);
    r("google.ima.AdCuePoints.POSTROLL", -1, window);
    r("google.ima.AdDisplayContainer", Lo, window);
    Lo.prototype.initialize = Lo.prototype.I;
    Lo.prototype.destroy = Lo.prototype.N;
    em.prototype.getPodIndex = em.prototype.ee;
    em.prototype.getTimeOffset = em.prototype.fe;
    em.prototype.getTotalAds = em.prototype.ge;
    em.prototype.getMaxDuration = em.prototype.de;
    em.prototype.getAdPosition = em.prototype.be;
    em.prototype.getIsBumper = em.prototype.ce;
    r("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
    r("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
    r("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
    r("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
    r("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
    r("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
    r("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
    r("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
    r("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
    r("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
    r("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
    r("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
    r("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
    r("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
    r("google.ima.AdError.ErrorCode.INVALID_ADX_EXTENSION", 1105, window);
    r("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    r("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    r("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
    r("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
    Ud.prototype.getErrorCode = Ud.prototype.Yd;
    Ud.prototype.getVastErrorCode = Ud.prototype.yd;
    Ud.prototype.getInnerError = Ud.prototype.Zd;
    Ud.prototype.getMessage = Ud.prototype.$d;
    Ud.prototype.getType = Ud.prototype.ae;
    r("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
    Zd.prototype.getError = Zd.prototype.o;
    Zd.prototype.getUserRequestContext = Zd.prototype.w;
    r("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
    r("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
    r("google.ima.AdEvent.Type.CLICK", "click", window);
    r("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
    r("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
    r("google.ima.AdEvent.Type.STARTED", "start", window);
    r("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
    r("google.ima.AdEvent.Type.PAUSED", "pause", window);
    r("google.ima.AdEvent.Type.RESUMED", "resume", window);
    r("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstquartile", window);
    r("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
    r("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdquartile", window);
    r("google.ima.AdEvent.Type.COMPLETE", "complete", window);
    r("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
    r("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
    r("google.ima.AdEvent.Type.LOADED", "loaded", window);
    r("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
    r("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
    r("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
    r("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
    r("google.ima.AdEvent.Type.SKIPPED", "skip", window);
    r("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
    r("google.ima.AdEvent.Type.LOG", "log", window);
    r("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
    r("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
    O.prototype.type = O.prototype.type;
    O.prototype.getAd = O.prototype.F;
    O.prototype.getAdData = O.prototype.B;
    wn.prototype.getAdCuePoints = wn.prototype.w;
    r("google.ima.AdsLoader", dp, window);
    dp.prototype.getSettings = dp.prototype.W;
    dp.prototype.requestAds = dp.prototype.sc;
    dp.prototype.contentComplete = dp.prototype.bf;
    dp.prototype.destroy = dp.prototype.cf;
    r("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
    ap.prototype.getAdsManager = ap.prototype.A;
    ap.prototype.getUserRequestContext = ap.prototype.F;
    ap.prototype.getResponse = ap.prototype.w;
    r("google.ima.CompanionAdSelectionSettings", Kk, window);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
    r("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    r("ima.ImaSdkSettings", Q, window);
    r("google.ima.settings", P, window);
    Q.prototype.setCompanionBackfill = Q.prototype.Re;
    Q.prototype.getCompanionBackfill = Q.prototype.Ke;
    Q.prototype.setAutoPlayAdBreaks = Q.prototype.Qe;
    Q.prototype.isAutoPlayAdBreak = Q.prototype.Pe;
    Q.prototype.setPpid = Q.prototype.Ve;
    Q.prototype.getPpid = Q.prototype.Oe;
    Q.prototype.setVpaidAllowed = Q.prototype.Xe;
    Q.prototype.setVpaidMode = Q.prototype.Ye;
    Q.prototype.setIsVpaidAdapter = Q.prototype.Se;
    Q.prototype.isVpaidAdapter = Q.prototype.Hb;
    Q.prototype.setRestrictToCustomPlayback = Q.prototype.We;
    Q.prototype.isRestrictToCustomPlayback = Q.prototype.ff;
    Q.prototype.setNumRedirects = Q.prototype.Te;
    Q.prototype.getNumRedirects = Q.prototype.Le;
    Q.prototype.getLocale = Q.prototype.wd;
    Q.prototype.setLocale = Q.prototype.Nc;
    Q.prototype.getPlayerType = Q.prototype.Me;
    Q.prototype.setPlayerType = Q.prototype.pc;
    Q.prototype.getPlayerVersion = Q.prototype.Ne;
    Q.prototype.setPlayerVersion = Q.prototype.Ue;
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
    r("google.ima.common.adTrackingMonitor", Tm, window);
    Hm.prototype.setActiveViewUseOsdGeometry = Hm.prototype.I;
    Hm.prototype.getActiveViewUseOsdGeometry = Hm.prototype.G;
    Hm.prototype.setBlockId = Hm.prototype.J;
    r("google.ima.AdsRenderingSettings", On, window);
    r("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    r("google.ima.AdsRequest", Z, window);
    Z.prototype.adTagUrl = Z.prototype.adTagUrl;
    Z.prototype.adsResponse = Z.prototype.adsResponse;
    Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
    Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
    Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
    Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
    Z.prototype.setAdWillAutoPlay = Z.prototype.Mb;
    r("google.ima.VERSION", "3.147.1", void 0);
    r("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
    r("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
    r("google.ima.ViewMode.NORMAL", "normal", void 0);
    r("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
    Y.prototype.isCustomPlaybackUsed = Y.prototype.ef;
    Y.prototype.isCustomClickTrackingUsed = Y.prototype.df;
    Y.prototype.destroy = Y.prototype.yb;
    Y.prototype.init = Y.prototype.lc;
    Y.prototype.start = Y.prototype.start;
    Y.prototype.stop = Y.prototype.Je;
    Y.prototype.pause = Y.prototype.nc;
    Y.prototype.resume = Y.prototype.oc;
    Y.prototype.getCuePoints = Y.prototype.Ce;
    Y.prototype.getCurrentAd = Y.prototype.De;
    Y.prototype.getRemainingTime = Y.prototype.Ee;
    Y.prototype.expand = Y.prototype.Ae;
    Y.prototype.collapse = Y.prototype.ze;
    Y.prototype.getAdSkippableState = Y.prototype.Be;
    Y.prototype.resize = Y.prototype.zb;
    Y.prototype.skip = Y.prototype.Ie;
    Y.prototype.getVolume = Y.prototype.Fe;
    Y.prototype.setVolume = Y.prototype.Ab;
    Y.prototype.setMediaUrl = Y.prototype.He;
    Y.prototype.sendImpressionUrls = Y.prototype.Ge;
    Y.prototype.discardAdBreak = Y.prototype.rd;
    fm.prototype.getContent = fm.prototype.getContent;
    fm.prototype.getContentType = fm.prototype.o;
    fm.prototype.getHeight = fm.prototype.w;
    fm.prototype.getWidth = fm.prototype.F;
    var ep = function(a, b) {
        N.call(this, a);
        this.b = b
    };
    A(ep, N);
    ep.prototype.A = function() {
        return this.b
    };
    var fp = function(a, b, c, d) {
        R.call(this);
        this.B = c;
        this.w = b;
        this.h = a;
        this.g = null;
        this.o = !1;
        this.l = this.b = this.m = null;
        this.C = d || "en";
        this.g = document.createElement("DIV");
        this.g.id = "adContainer";
        Kc(this.g, {
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "none"
        });
        P.Nc(this.C);
        this.h.appendChild(this.g);
        this.m = new Lo(this.g);
        this.l = new dp(this.m);
        this.l.W().pc("outstream");
        Cf(this.l, "adsManagerLoaded", this.hf, !1, this);
        Cf(this.l, "adError", this.Ga, !1, this)
    };
    A(fp, R);
    h = fp.prototype;
    h.hf = function(a) {
        var b = new On;
        b.useVideoAdUi = !0;
        b.useStyledLinearAds = !0;
        try {
            this.b = a.A({}, b)
        } catch (c) {
            this.Ga(c);
            return
        }
        Cf(this.b, "adError", this.Ga, !1, this);
        Cf(this.b, ["allAdsCompleted", "complete", "skip", "userClose"], this.gf, !1, this);
        try {
            this.b.lc(Sc(this.h).width, Sc(this.h).height, "normal")
        } catch (c) {
            this.Ga(c)
        }
        try {
            this.w()
        } catch (c) {
            gp(this, "Error invoking onAdLoaded callback")
        }
    };
    h.gf = function(a) {
        switch (a.type) {
            case "allAdsCompleted":
            case "complete":
            case "userClose":
            case "skip":
                hp(this)
        }
    };
    h.Af = function() {
        this.m.I();
        this.o = !0
    };
    h.Hf = function(a) {
        null != this.b && this.b.Ab(a)
    };
    h.Ef = function() {
        null != this.b && this.b.nc()
    };
    h.Gf = function() {
        null != this.b && this.b.oc()
    };
    h.Bf = function(a) {
        if (this.o)
            if (B(a)) gp(this, "Empty ad tag url"), hp(this);
            else {
                var b = a; - 1 != b.indexOf("pubads.g.doubleclick.net") || -1 != b.indexOf("googleads.g.doubleclick.net") ? (b = new ue(b), a = ya(b.b.get("channel")), Te(b.b, "channel"), a = B(a) ? "interstitial" : a + "+interstitial", b.b.set("channel", a), a = b.toString()) : a = b;
                b = new Z;
                b.adTagUrl = a;
                b.forceNonLinearFullSlot = !0;
                a = Sc(this.h).width;
                var c = Sc(this.h).height;
                b.linearAdSlotWidth = a;
                b.linearAdSlotHeight = c;
                b.nonLinearAdSlotWidth = a;
                b.nonLinearAdSlotHeight = c;
                this.l.sc(b)
            }
        else gp(this,
            "Cannot request ad before initializing"), hp(this)
    };
    h.Df = function() {
        if (null != this.b) try {
            Kc(this.g, "display", "block"), this.b.start()
        } catch (a) {
            this.Ga(a)
        }
    };
    h.Cf = function(a, b) {
        this.h.style.height = b + "px";
        this.h.style.width = a + "px";
        if (null != this.b) try {
            this.b.zb(a, b, "normal")
        } catch (c) {
            this.Ga(c)
        }
    };
    h.Ga = function(a) {
        ip(this);
        var b;
        a instanceof Zd ? b = a.b.h : a instanceof Ud ? b = a.h : b = "Error loading or playing the ad";
        gp(this, b);
        hp(this)
    };
    var gp = function(a, b) {
            a.dispatchEvent(new ep("adError", b))
        },
        hp = function(a) {
            ip(a);
            try {
                a.B()
            } catch (b) {
                gp(a, "Error invoking done callback")
            }
        },
        ip = function(a) {
            a.b && a.b.yb();
            a.b = null;
            Kc(a.g, "display", "none")
        };
    r("google.outstream.AdsController", fp, window);
    fp.prototype.initialize = fp.prototype.Af;
    fp.prototype.requestAds = fp.prototype.Bf;
    fp.prototype.resize = fp.prototype.Cf;
    fp.prototype.showAd = fp.prototype.Df;
    fp.prototype.setVolumeInternal = fp.prototype.Hf;
    fp.prototype.pauseInternal = fp.prototype.Ef;
    fp.prototype.resumeInternal = fp.prototype.Gf;
    r("google.outstream.ErrorEvent.Type.AD_ERROR", "adError", window);
    ep.prototype.getErrorMessage = ep.prototype.A;
})();