var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/dist/preact.mjs
function s(n4, l4) {
  for (var u4 in l4)
    n4[u4] = l4[u4];
  return n4;
}
function a(n4) {
  var l4 = n4.parentNode;
  l4 && l4.removeChild(n4);
}
function h(l4, u4, i4) {
  var t3, o4, r4, f4 = {};
  for (r4 in u4)
    "key" == r4 ? t3 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f4[r4] = u4[r4];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), "function" == typeof l4 && null != l4.defaultProps)
    for (r4 in l4.defaultProps)
      void 0 === f4[r4] && (f4[r4] = l4.defaultProps[r4]);
  return v(l4, f4, t3, o4, null);
}
function v(n4, i4, t3, o4, r4) {
  var f4 = { type: n4, props: i4, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
  return null == r4 && null != l.vnode && l.vnode(f4), f4;
}
function y() {
  return { current: null };
}
function p(n4) {
  return n4.children;
}
function d(n4, l4) {
  this.props = n4, this.context = l4;
}
function _(n4, l4) {
  if (null == l4)
    return n4.__ ? _(n4.__, n4.__.__k.indexOf(n4) + 1) : null;
  for (var u4; l4 < n4.__k.length; l4++)
    if (null != (u4 = n4.__k[l4]) && null != u4.__e)
      return u4.__e;
  return "function" == typeof n4.type ? _(n4) : null;
}
function k(n4) {
  var l4, u4;
  if (null != (n4 = n4.__) && null != n4.__c) {
    for (n4.__e = n4.__c.base = null, l4 = 0; l4 < n4.__k.length; l4++)
      if (null != (u4 = n4.__k[l4]) && null != u4.__e) {
        n4.__e = n4.__c.base = u4.__e;
        break;
      }
    return k(n4);
  }
}
function b(n4) {
  (!n4.__d && (n4.__d = true) && t.push(n4) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n4; g.__r = t.length; )
    n4 = t.sort(function(n5, l4) {
      return n5.__v.__b - l4.__v.__b;
    }), t = [], n4.some(function(n5) {
      var l4, u4, i4, t3, o4, r4;
      n5.__d && (o4 = (t3 = (l4 = n5).__v).__e, (r4 = l4.__P) && (u4 = [], (i4 = s({}, t3)).__v = t3.__v + 1, j(r4, t3, i4, l4.__n, void 0 !== r4.ownerSVGElement, null != t3.__h ? [o4] : null, u4, null == o4 ? _(t3) : o4, t3.__h), z(u4, t3), t3.__e != o4 && k(t3)));
    });
}
function w(n4, l4, u4, i4, t3, o4, r4, c4, s5, a4) {
  var h4, y3, d4, k4, b3, g5, w4, x5 = i4 && i4.__k || e, C3 = x5.length;
  for (u4.__k = [], h4 = 0; h4 < l4.length; h4++)
    if (null != (k4 = u4.__k[h4] = null == (k4 = l4[h4]) || "boolean" == typeof k4 ? null : "string" == typeof k4 || "number" == typeof k4 || "bigint" == typeof k4 ? v(null, k4, null, null, k4) : Array.isArray(k4) ? v(p, { children: k4 }, null, null, null) : k4.__b > 0 ? v(k4.type, k4.props, k4.key, null, k4.__v) : k4)) {
      if (k4.__ = u4, k4.__b = u4.__b + 1, null === (d4 = x5[h4]) || d4 && k4.key == d4.key && k4.type === d4.type)
        x5[h4] = void 0;
      else
        for (y3 = 0; y3 < C3; y3++) {
          if ((d4 = x5[y3]) && k4.key == d4.key && k4.type === d4.type) {
            x5[y3] = void 0;
            break;
          }
          d4 = null;
        }
      j(n4, k4, d4 = d4 || f, t3, o4, r4, c4, s5, a4), b3 = k4.__e, (y3 = k4.ref) && d4.ref != y3 && (w4 || (w4 = []), d4.ref && w4.push(d4.ref, null, k4), w4.push(y3, k4.__c || b3, k4)), null != b3 ? (null == g5 && (g5 = b3), "function" == typeof k4.type && k4.__k === d4.__k ? k4.__d = s5 = m(k4, s5, n4) : s5 = A(n4, k4, d4, x5, b3, s5), "function" == typeof u4.type && (u4.__d = s5)) : s5 && d4.__e == s5 && s5.parentNode != n4 && (s5 = _(d4));
    }
  for (u4.__e = g5, h4 = C3; h4--; )
    null != x5[h4] && ("function" == typeof u4.type && null != x5[h4].__e && x5[h4].__e == u4.__d && (u4.__d = _(i4, h4 + 1)), N(x5[h4], x5[h4]));
  if (w4)
    for (h4 = 0; h4 < w4.length; h4++)
      M(w4[h4], w4[++h4], w4[++h4]);
}
function m(n4, l4, u4) {
  for (var i4, t3 = n4.__k, o4 = 0; t3 && o4 < t3.length; o4++)
    (i4 = t3[o4]) && (i4.__ = n4, l4 = "function" == typeof i4.type ? m(i4, l4, u4) : A(u4, i4, i4, t3, i4.__e, l4));
  return l4;
}
function x(n4, l4) {
  return l4 = l4 || [], null == n4 || "boolean" == typeof n4 || (Array.isArray(n4) ? n4.some(function(n5) {
    x(n5, l4);
  }) : l4.push(n4)), l4;
}
function A(n4, l4, u4, i4, t3, o4) {
  var r4, f4, e3;
  if (void 0 !== l4.__d)
    r4 = l4.__d, l4.__d = void 0;
  else if (null == u4 || t3 != o4 || null == t3.parentNode)
    n:
      if (null == o4 || o4.parentNode !== n4)
        n4.appendChild(t3), r4 = null;
      else {
        for (f4 = o4, e3 = 0; (f4 = f4.nextSibling) && e3 < i4.length; e3 += 2)
          if (f4 == t3)
            break n;
        n4.insertBefore(t3, o4), r4 = o4;
      }
  return void 0 !== r4 ? r4 : t3.nextSibling;
}
function C(n4, l4, u4, i4, t3) {
  var o4;
  for (o4 in u4)
    "children" === o4 || "key" === o4 || o4 in l4 || H(n4, o4, null, u4[o4], i4);
  for (o4 in l4)
    t3 && "function" != typeof l4[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u4[o4] === l4[o4] || H(n4, o4, l4[o4], u4[o4], i4);
}
function $(n4, l4, u4) {
  "-" === l4[0] ? n4.setProperty(l4, u4) : n4[l4] = null == u4 ? "" : "number" != typeof u4 || c.test(l4) ? u4 : u4 + "px";
}
function H(n4, l4, u4, i4, t3) {
  var o4;
  n:
    if ("style" === l4)
      if ("string" == typeof u4)
        n4.style.cssText = u4;
      else {
        if ("string" == typeof i4 && (n4.style.cssText = i4 = ""), i4)
          for (l4 in i4)
            u4 && l4 in u4 || $(n4.style, l4, "");
        if (u4)
          for (l4 in u4)
            i4 && u4[l4] === i4[l4] || $(n4.style, l4, u4[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n4 ? l4.toLowerCase().slice(2) : l4.slice(2), n4.l || (n4.l = {}), n4.l[l4 + o4] = u4, u4 ? i4 || n4.addEventListener(l4, o4 ? T : I, o4) : n4.removeEventListener(l4, o4 ? T : I, o4);
    else if ("dangerouslySetInnerHTML" !== l4) {
      if (t3)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n4)
        try {
          n4[l4] = null == u4 ? "" : u4;
          break n;
        } catch (n5) {
        }
      "function" == typeof u4 || (null != u4 && (false !== u4 || "a" === l4[0] && "r" === l4[1]) ? n4.setAttribute(l4, u4) : n4.removeAttribute(l4));
    }
}
function I(n4) {
  this.l[n4.type + false](l.event ? l.event(n4) : n4);
}
function T(n4) {
  this.l[n4.type + true](l.event ? l.event(n4) : n4);
}
function j(n4, u4, i4, t3, o4, r4, f4, e3, c4) {
  var a4, h4, v4, y3, _5, k4, b3, g5, m4, x5, A4, C3, $3, H3 = u4.type;
  if (void 0 !== u4.constructor)
    return null;
  null != i4.__h && (c4 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, r4 = [e3]), (a4 = l.__b) && a4(u4);
  try {
    n:
      if ("function" == typeof H3) {
        if (g5 = u4.props, m4 = (a4 = H3.contextType) && t3[a4.__c], x5 = a4 ? m4 ? m4.props.value : a4.__ : t3, i4.__c ? b3 = (h4 = u4.__c = i4.__c).__ = h4.__E : ("prototype" in H3 && H3.prototype.render ? u4.__c = h4 = new H3(g5, x5) : (u4.__c = h4 = new d(g5, x5), h4.constructor = H3, h4.render = O), m4 && m4.sub(h4), h4.props = g5, h4.state || (h4.state = {}), h4.context = x5, h4.__n = t3, v4 = h4.__d = true, h4.__h = []), null == h4.__s && (h4.__s = h4.state), null != H3.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = s({}, h4.__s)), s(h4.__s, H3.getDerivedStateFromProps(g5, h4.__s))), y3 = h4.props, _5 = h4.state, v4)
          null == H3.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
        else {
          if (null == H3.getDerivedStateFromProps && g5 !== y3 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(g5, x5), !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(g5, h4.__s, x5) || u4.__v === i4.__v) {
            h4.props = g5, h4.state = h4.__s, u4.__v !== i4.__v && (h4.__d = false), h4.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n5) {
              n5 && (n5.__ = u4);
            }), h4.__h.length && f4.push(h4);
            break n;
          }
          null != h4.componentWillUpdate && h4.componentWillUpdate(g5, h4.__s, x5), null != h4.componentDidUpdate && h4.__h.push(function() {
            h4.componentDidUpdate(y3, _5, k4);
          });
        }
        if (h4.context = x5, h4.props = g5, h4.__v = u4, h4.__P = n4, A4 = l.__r, C3 = 0, "prototype" in H3 && H3.prototype.render)
          h4.state = h4.__s, h4.__d = false, A4 && A4(u4), a4 = h4.render(h4.props, h4.state, h4.context);
        else
          do {
            h4.__d = false, A4 && A4(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
          } while (h4.__d && ++C3 < 25);
        h4.state = h4.__s, null != h4.getChildContext && (t3 = s(s({}, t3), h4.getChildContext())), v4 || null == h4.getSnapshotBeforeUpdate || (k4 = h4.getSnapshotBeforeUpdate(y3, _5)), $3 = null != a4 && a4.type === p && null == a4.key ? a4.props.children : a4, w(n4, Array.isArray($3) ? $3 : [$3], u4, i4, t3, o4, r4, f4, e3, c4), h4.base = u4.__e, u4.__h = null, h4.__h.length && f4.push(h4), b3 && (h4.__E = h4.__ = null), h4.__e = false;
      } else
        null == r4 && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t3, o4, r4, f4, c4);
    (a4 = l.diffed) && a4(u4);
  } catch (n5) {
    u4.__v = null, (c4 || null != r4) && (u4.__e = e3, u4.__h = !!c4, r4[r4.indexOf(e3)] = null), l.__e(n5, u4, i4);
  }
}
function z(n4, u4) {
  l.__c && l.__c(u4, n4), n4.some(function(u5) {
    try {
      n4 = u5.__h, u5.__h = [], n4.some(function(n5) {
        n5.call(u5);
      });
    } catch (n5) {
      l.__e(n5, u5.__v);
    }
  });
}
function L(l4, u4, i4, t3, o4, r4, e3, c4) {
  var s5, h4, v4, y3 = i4.props, p4 = u4.props, d4 = u4.type, k4 = 0;
  if ("svg" === d4 && (o4 = true), null != r4) {
    for (; k4 < r4.length; k4++)
      if ((s5 = r4[k4]) && "setAttribute" in s5 == !!d4 && (d4 ? s5.localName === d4 : 3 === s5.nodeType)) {
        l4 = s5, r4[k4] = null;
        break;
      }
  }
  if (null == l4) {
    if (null === d4)
      return document.createTextNode(p4);
    l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), r4 = null, c4 = false;
  }
  if (null === d4)
    y3 === p4 || c4 && l4.data === p4 || (l4.data = p4);
  else {
    if (r4 = r4 && n.call(l4.childNodes), h4 = (y3 = i4.props || f).dangerouslySetInnerHTML, v4 = p4.dangerouslySetInnerHTML, !c4) {
      if (null != r4)
        for (y3 = {}, k4 = 0; k4 < l4.attributes.length; k4++)
          y3[l4.attributes[k4].name] = l4.attributes[k4].value;
      (v4 || h4) && (v4 && (h4 && v4.__html == h4.__html || v4.__html === l4.innerHTML) || (l4.innerHTML = v4 && v4.__html || ""));
    }
    if (C(l4, p4, y3, o4, c4), v4)
      u4.__k = [];
    else if (k4 = u4.props.children, w(l4, Array.isArray(k4) ? k4 : [k4], u4, i4, t3, o4 && "foreignObject" !== d4, r4, e3, r4 ? r4[0] : i4.__k && _(i4, 0), c4), null != r4)
      for (k4 = r4.length; k4--; )
        null != r4[k4] && a(r4[k4]);
    c4 || ("value" in p4 && void 0 !== (k4 = p4.value) && (k4 !== l4.value || "progress" === d4 && !k4 || "option" === d4 && k4 !== y3.value) && H(l4, "value", k4, y3.value, false), "checked" in p4 && void 0 !== (k4 = p4.checked) && k4 !== l4.checked && H(l4, "checked", k4, y3.checked, false));
  }
  return l4;
}
function M(n4, u4, i4) {
  try {
    "function" == typeof n4 ? n4(u4) : n4.current = u4;
  } catch (n5) {
    l.__e(n5, i4);
  }
}
function N(n4, u4, i4) {
  var t3, o4;
  if (l.unmount && l.unmount(n4), (t3 = n4.ref) && (t3.current && t3.current !== n4.__e || M(t3, null, u4)), null != (t3 = n4.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n5) {
        l.__e(n5, u4);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n4.__k)
    for (o4 = 0; o4 < t3.length; o4++)
      t3[o4] && N(t3[o4], u4, "function" != typeof n4.type);
  i4 || null == n4.__e || a(n4.__e), n4.__e = n4.__d = void 0;
}
function O(n4, l4, u4) {
  return this.constructor(n4, u4);
}
function P(u4, i4, t3) {
  var o4, r4, e3;
  l.__ && l.__(u4, i4), r4 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i4.__k, e3 = [], j(i4, u4 = (!o4 && t3 || i4).__k = h(p, null, [u4]), r4 || f, f, void 0 !== i4.ownerSVGElement, !o4 && t3 ? [t3] : r4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, e3, !o4 && t3 ? t3 : r4 ? r4.__e : i4.firstChild, o4), z(e3, u4);
}
function S(n4, l4) {
  P(n4, l4, S);
}
function q(l4, u4, i4) {
  var t3, o4, r4, f4 = s({}, l4.props);
  for (r4 in u4)
    "key" == r4 ? t3 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f4[r4] = u4[r4];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), v(l4.type, f4, t3 || l4.key, o4 || l4.ref, null);
}
function B(n4, l4) {
  var u4 = { __c: l4 = "__cC" + r++, __: n4, Consumer: function(n5, l5) {
    return n5.children(l5);
  }, Provider: function(n5) {
    var u5, i4;
    return this.getChildContext || (u5 = [], (i4 = {})[l4] = this, this.getChildContext = function() {
      return i4;
    }, this.shouldComponentUpdate = function(n6) {
      this.props.value !== n6.value && u5.some(b);
    }, this.sub = function(n6) {
      u5.push(n6);
      var l5 = n6.componentWillUnmount;
      n6.componentWillUnmount = function() {
        u5.splice(u5.indexOf(n6), 1), l5 && l5.call(n6);
      };
    }), n5.children;
  } };
  return u4.Provider.__ = u4.Consumer.contextType = u4;
}
var n, l, u, i, t, o, r, f, e, c;
var init_preact = __esm({
  "pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/dist/preact.mjs"() {
    f = {};
    e = [];
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = e.slice, l = { __e: function(n4, l4, u4, i4) {
      for (var t3, o4, r4; l4 = l4.__; )
        if ((t3 = l4.__c) && !t3.__)
          try {
            if ((o4 = t3.constructor) && null != o4.getDerivedStateFromError && (t3.setState(o4.getDerivedStateFromError(n4)), r4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n4, i4 || {}), r4 = t3.__d), r4)
              return t3.__E = t3;
          } catch (l5) {
            n4 = l5;
          }
      throw n4;
    } }, u = 0, i = function(n4) {
      return null != n4 && void 0 === n4.constructor;
    }, d.prototype.setState = function(n4, l4) {
      var u4;
      u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n4 && (n4 = n4(s({}, u4), this.props)), n4 && s(u4, n4), null != n4 && this.__v && (l4 && this.__h.push(l4), b(this));
    }, d.prototype.forceUpdate = function(n4) {
      this.__v && (this.__e = true, n4 && this.__h.push(n4), b(this));
    }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
  }
});

// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/hooks/dist/hooks.mjs
function d2(t3, r4) {
  l.__h && l.__h(u2, t3, i2 || r4), i2 = 0;
  var o4 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t3 >= o4.__.length && o4.__.push({ __V: f2 }), o4.__[t3];
}
function p2(n4) {
  return i2 = 1, y2(z2, n4);
}
function y2(n4, r4, o4) {
  var i4 = d2(t2++, 2);
  if (i4.t = n4, !i4.__c && (i4.__ = [o4 ? o4(r4) : z2(void 0, r4), function(n5) {
    var t3 = i4.__N ? i4.__N[0] : i4.__[0], u4 = i4.t(t3, n5);
    t3 !== u4 && (i4.__N = [u4, i4.__[1]], i4.__c.setState({}));
  }], i4.__c = u2, !i4.__c.u)) {
    i4.__c.__H.u = true;
    var c4 = i4.__c.shouldComponentUpdate;
    i4.__c.shouldComponentUpdate = function(n5, t3, u4) {
      var r5 = i4.__c.__H.__.filter(function(n6) {
        return n6.__c;
      });
      return r5.every(function(n6) {
        return !n6.__N;
      }) ? !c4 || c4(n5, t3, u4) : !r5.every(function(n6) {
        if (!n6.__N)
          return true;
        var t4 = n6.__[0];
        return n6.__ = n6.__N, n6.__N = void 0, t4 === n6.__[0];
      }) && (!c4 || c4(n5, t3, u4));
    };
  }
  return i4.__N || i4.__;
}
function _2(r4, o4) {
  var i4 = d2(t2++, 3);
  !l.__s && w2(i4.__H, o4) && (i4.__ = r4, i4.o = o4, u2.__H.__h.push(i4));
}
function h2(r4, o4) {
  var i4 = d2(t2++, 4);
  !l.__s && w2(i4.__H, o4) && (i4.__ = r4, i4.o = o4, u2.__h.push(i4));
}
function s2(n4) {
  return i2 = 5, F(function() {
    return { current: n4 };
  }, []);
}
function A2(n4, t3, u4) {
  i2 = 6, h2(function() {
    return "function" == typeof n4 ? (n4(t3()), function() {
      return n4(null);
    }) : n4 ? (n4.current = t3(), function() {
      return n4.current = null;
    }) : void 0;
  }, null == u4 ? u4 : u4.concat(n4));
}
function F(n4, u4) {
  var r4 = d2(t2++, 7);
  return w2(r4.__H, u4) ? (r4.__V = n4(), r4.o = u4, r4.__h = n4, r4.__V) : r4.__;
}
function T2(n4, t3) {
  return i2 = 8, F(function() {
    return n4;
  }, t3);
}
function q2(n4) {
  var r4 = u2.context[n4.__c], o4 = d2(t2++, 9);
  return o4.c = n4, r4 ? (null == o4.__ && (o4.__ = true, r4.sub(u2)), r4.props.value) : n4.__;
}
function x2(t3, u4) {
  l.useDebugValue && l.useDebugValue(u4 ? u4(t3) : t3);
}
function b2() {
  for (var t3; t3 = c2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
      } catch (u4) {
        t3.__H.__h = [], l.__e(u4, t3.__v);
      }
}
function j2(n4) {
  var t3 = u2, r4 = n4.__c;
  "function" == typeof r4 && (n4.__c = void 0, r4()), u2 = t3;
}
function k2(n4) {
  var t3 = u2;
  n4.__c = n4.__(), u2 = t3;
}
function w2(n4, t3) {
  return !n4 || n4.length !== t3.length || t3.some(function(t4, u4) {
    return t4 !== n4[u4];
  });
}
function z2(n4, t3) {
  return "function" == typeof t3 ? t3(n4) : t3;
}
var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, l2, m2, g2;
var init_hooks = __esm({
  "pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/hooks/dist/hooks.mjs"() {
    init_preact();
    i2 = 0;
    c2 = [];
    f2 = [];
    e2 = l.__b;
    a2 = l.__r;
    v2 = l.diffed;
    l2 = l.__c;
    m2 = l.unmount;
    l.__b = function(n4) {
      u2 = null, e2 && e2(n4);
    }, l.__r = function(n4) {
      a2 && a2(n4), t2 = 0;
      var o4 = (u2 = n4.__c).__H;
      o4 && (r2 === u2 ? (o4.__h = [], u2.__h = [], o4.__.forEach(function(n5) {
        n5.__N && (n5.__ = n5.__N), n5.__V = f2, n5.__N = n5.o = void 0;
      })) : (o4.__h.forEach(j2), o4.__h.forEach(k2), o4.__h = [])), r2 = u2;
    }, l.diffed = function(t3) {
      v2 && v2(t3);
      var i4 = t3.__c;
      i4 && i4.__H && (i4.__H.__h.length && (1 !== c2.push(i4) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || function(n4) {
        var t4, u4 = function() {
          clearTimeout(r4), g2 && cancelAnimationFrame(t4), setTimeout(n4);
        }, r4 = setTimeout(u4, 100);
        g2 && (t4 = requestAnimationFrame(u4));
      })(b2)), i4.__H.__.forEach(function(n4) {
        n4.o && (n4.__H = n4.o), n4.__V !== f2 && (n4.__ = n4.__V), n4.o = void 0, n4.__V = f2;
      })), r2 = u2 = null;
    }, l.__c = function(t3, u4) {
      u4.some(function(t4) {
        try {
          t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n4) {
            return !n4.__ || k2(n4);
          });
        } catch (r4) {
          u4.some(function(n4) {
            n4.__h && (n4.__h = []);
          }), u4 = [], l.__e(r4, t4.__v);
        }
      }), l2 && l2(t3, u4);
    }, l.unmount = function(t3) {
      m2 && m2(t3);
      var u4, r4 = t3.__c;
      r4 && r4.__H && (r4.__H.__.forEach(function(n4) {
        try {
          j2(n4);
        } catch (n5) {
          u4 = n5;
        }
      }), u4 && l.__e(u4, r4.__v));
    };
    g2 = "function" == typeof requestAnimationFrame;
  }
});

// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/compat/dist/compat.mjs
function S2(n4, t3) {
  for (var e3 in t3)
    n4[e3] = t3[e3];
  return n4;
}
function g3(n4, t3) {
  for (var e3 in n4)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r4 in t3)
    if ("__source" !== r4 && n4[r4] !== t3[r4])
      return true;
  return false;
}
function C2(n4) {
  this.props = n4;
}
function E(n4, t3) {
  function e3(n5) {
    var e4 = this.props.ref, r5 = e4 == n5.ref;
    return !r5 && e4 && (e4.call ? e4(null) : e4.current = null), t3 ? !t3(this.props, n5) || !r5 : g3(this.props, n5);
  }
  function r4(t4) {
    return this.shouldComponentUpdate = e3, h(n4, t4);
  }
  return r4.displayName = "Memo(" + (n4.displayName || n4.name) + ")", r4.prototype.isReactComponent = true, r4.__f = true, r4;
}
function R(n4) {
  function t3(t4) {
    var e3 = S2({}, t4);
    return delete e3.ref, n4(e3, t4.ref || null);
  }
  return t3.$$typeof = x3, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n4.displayName || n4.name) + ")", t3;
}
function T3() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L2(n4) {
  var t3 = n4.__.__c;
  return t3 && t3.__a && t3.__a(n4);
}
function U(n4) {
  var t3, e3, r4;
  function u4(u5) {
    if (t3 || (t3 = n4()).then(function(n5) {
      e3 = n5.default || n5;
    }, function(n5) {
      r4 = n5;
    }), r4)
      throw r4;
    if (!e3)
      throw t3;
    return h(e3, u5);
  }
  return u4.displayName = "Lazy", u4.__f = true, u4;
}
function D() {
  this.u = null, this.o = null;
}
function I2(n4) {
  return this.getChildContext = function() {
    return n4.context;
  }, n4.children;
}
function M2(n4) {
  var t3 = this, e3 = n4.i;
  t3.componentWillUnmount = function() {
    P(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== e3 && t3.componentWillUnmount(), n4.__v ? (t3.l || (t3.i = e3, t3.l = { nodeType: 1, parentNode: e3, childNodes: [], appendChild: function(n5) {
    this.childNodes.push(n5), t3.i.appendChild(n5);
  }, insertBefore: function(n5, e4) {
    this.childNodes.push(n5), t3.i.appendChild(n5);
  }, removeChild: function(n5) {
    this.childNodes.splice(this.childNodes.indexOf(n5) >>> 1, 1), t3.i.removeChild(n5);
  } }), P(h(I2, { context: t3.context }, n4.__v), t3.l)) : t3.l && t3.componentWillUnmount();
}
function V(n4, t3) {
  var e3 = h(M2, { __v: n4, i: t3 });
  return e3.containerInfo = t3, e3;
}
function z3(n4, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), P(n4, t3), "function" == typeof e3 && e3(), n4 ? n4.__c : null;
}
function B2(n4, t3, e3) {
  return S(n4, t3), "function" == typeof e3 && e3(), n4 ? n4.__c : null;
}
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q3() {
  return this.defaultPrevented;
}
function tn(n4) {
  return h.bind(null, n4);
}
function en(n4) {
  return !!n4 && n4.$$typeof === W;
}
function rn(n4) {
  return en(n4) ? q.apply(null, arguments) : n4;
}
function un(n4) {
  return !!n4.__k && (P(null, n4), true);
}
function on(n4) {
  return n4 && (n4.base || 1 === n4.nodeType && n4) || null;
}
function an(n4) {
  n4();
}
function sn(n4) {
  return n4;
}
function hn() {
  return [false, an];
}
function dn(t3, r4) {
  var u4 = p2(r4), o4 = u4[0], i4 = u4[1];
  return _2(function() {
    return t3(function() {
      i4(function() {
        return r4();
      });
    });
  }, [t3, r4]), o4;
}
var w3, x3, N2, k3, A3, O2, F2, W, P2, $2, j3, H2, G, J, K, Q, X, ln, fn, compat_default;
var init_compat = __esm({
  "pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/compat/dist/compat.mjs"() {
    init_hooks();
    init_hooks();
    init_preact();
    init_preact();
    (C2.prototype = new d()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(n4, t3) {
      return g3(this.props, n4) || g3(this.state, t3);
    };
    w3 = l.__b;
    l.__b = function(n4) {
      n4.type && n4.type.__f && n4.ref && (n4.props.ref = n4.ref, n4.ref = null), w3 && w3(n4);
    };
    x3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    N2 = function(n4, t3) {
      return null == n4 ? null : x(x(n4).map(t3));
    };
    k3 = { map: N2, forEach: N2, count: function(n4) {
      return n4 ? x(n4).length : 0;
    }, only: function(n4) {
      var t3 = x(n4);
      if (1 !== t3.length)
        throw "Children.only";
      return t3[0];
    }, toArray: x };
    A3 = l.__e;
    l.__e = function(n4, t3, e3, r4) {
      if (n4.then) {
        for (var u4, o4 = t3; o4 = o4.__; )
          if ((u4 = o4.__c) && u4.__c)
            return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u4.__c(n4, t3);
      }
      A3(n4, t3, e3, r4);
    };
    O2 = l.unmount;
    l.unmount = function(n4) {
      var t3 = n4.__c;
      t3 && t3.__R && t3.__R(), t3 && true === n4.__h && (n4.type = null), O2 && O2(n4);
    }, (T3.prototype = new d()).__c = function(n4, t3) {
      var e3 = t3.__c, r4 = this;
      null == r4.t && (r4.t = []), r4.t.push(e3);
      var u4 = L2(r4.__v), o4 = false, i4 = function() {
        o4 || (o4 = true, e3.__R = null, u4 ? u4(l4) : l4());
      };
      e3.__R = i4;
      var l4 = function() {
        if (!--r4.__u) {
          if (r4.state.__a) {
            var n5 = r4.state.__a;
            r4.__v.__k[0] = function n6(t5, e4, r5) {
              return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
                return n6(t6, e4, r5);
              }), t5.__c && t5.__c.__P === e4 && (t5.__e && r5.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r5)), t5;
            }(n5, n5.__c.__P, n5.__c.__O);
          }
          var t4;
          for (r4.setState({ __a: r4.__b = null }); t4 = r4.t.pop(); )
            t4.forceUpdate();
        }
      }, f4 = true === t3.__h;
      r4.__u++ || f4 || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), n4.then(i4, i4);
    }, T3.prototype.componentWillUnmount = function() {
      this.t = [];
    }, T3.prototype.render = function(n4, t3) {
      if (this.__b) {
        if (this.__v.__k) {
          var e3 = document.createElement("div"), r4 = this.__v.__k[0].__c;
          this.__v.__k[0] = function n5(t4, e4, r5) {
            return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n6) {
              "function" == typeof n6.__c && n6.__c();
            }), t4.__c.__H = null), null != (t4 = S2({}, t4)).__c && (t4.__c.__P === r5 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
              return n5(t5, e4, r5);
            })), t4;
          }(this.__b, e3, r4.__O = r4.__P);
        }
        this.__b = null;
      }
      var u4 = t3.__a && h(p, null, n4.fallback);
      return u4 && (u4.__h = null), [h(p, null, t3.__a ? null : n4.children), u4];
    };
    F2 = function(n4, t3, e3) {
      if (++e3[1] === e3[0] && n4.o.delete(t3), n4.props.revealOrder && ("t" !== n4.props.revealOrder[0] || !n4.o.size))
        for (e3 = n4.u; e3; ) {
          for (; e3.length > 3; )
            e3.pop()();
          if (e3[1] < e3[0])
            break;
          n4.u = e3 = e3[2];
        }
    };
    (D.prototype = new d()).__a = function(n4) {
      var t3 = this, e3 = L2(t3.__v), r4 = t3.o.get(n4);
      return r4[0]++, function(u4) {
        var o4 = function() {
          t3.props.revealOrder ? (r4.push(u4), F2(t3, n4, r4)) : u4();
        };
        e3 ? e3(o4) : o4();
      };
    }, D.prototype.render = function(n4) {
      this.u = null, this.o = /* @__PURE__ */ new Map();
      var t3 = x(n4.children);
      n4.revealOrder && "b" === n4.revealOrder[0] && t3.reverse();
      for (var e3 = t3.length; e3--; )
        this.o.set(t3[e3], this.u = [1, 0, this.u]);
      return n4.children;
    }, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function() {
      var n4 = this;
      this.o.forEach(function(t3, e3) {
        F2(n4, e3, t3);
      });
    };
    W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    $2 = "undefined" != typeof document;
    j3 = function(n4) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n4);
    };
    d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n4) {
      Object.defineProperty(d.prototype, n4, { configurable: true, get: function() {
        return this["UNSAFE_" + n4];
      }, set: function(t3) {
        Object.defineProperty(this, n4, { configurable: true, writable: true, value: t3 });
      } });
    });
    H2 = l.event;
    l.event = function(n4) {
      return H2 && (n4 = H2(n4)), n4.persist = Z, n4.isPropagationStopped = Y, n4.isDefaultPrevented = q3, n4.nativeEvent = n4;
    };
    J = { configurable: true, get: function() {
      return this.class;
    } };
    K = l.vnode;
    l.vnode = function(n4) {
      var t3 = n4.type, e3 = n4.props, r4 = e3;
      if ("string" == typeof t3) {
        var u4 = -1 === t3.indexOf("-");
        for (var o4 in r4 = {}, e3) {
          var i4 = e3[o4];
          $2 && "children" === o4 && "noscript" === t3 || "value" === o4 && "defaultValue" in e3 && null == i4 || ("defaultValue" === o4 && "value" in e3 && null == e3.value ? o4 = "value" : "download" === o4 && true === i4 ? i4 = "" : /ondoubleclick/i.test(o4) ? o4 = "ondblclick" : /^onchange(textarea|input)/i.test(o4 + t3) && !j3(e3.type) ? o4 = "oninput" : /^onfocus$/i.test(o4) ? o4 = "onfocusin" : /^onblur$/i.test(o4) ? o4 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o4) ? o4 = o4.toLowerCase() : u4 && P2.test(o4) ? o4 = o4.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === i4 && (i4 = void 0), /^oninput$/i.test(o4) && (o4 = o4.toLowerCase(), r4[o4] && (o4 = "oninputCapture")), r4[o4] = i4);
        }
        "select" == t3 && r4.multiple && Array.isArray(r4.value) && (r4.value = x(e3.children).forEach(function(n5) {
          n5.props.selected = -1 != r4.value.indexOf(n5.props.value);
        })), "select" == t3 && null != r4.defaultValue && (r4.value = x(e3.children).forEach(function(n5) {
          n5.props.selected = r4.multiple ? -1 != r4.defaultValue.indexOf(n5.props.value) : r4.defaultValue == n5.props.value;
        })), n4.props = r4, e3.class != e3.className && (J.enumerable = "className" in e3, null != e3.className && (r4.class = e3.className), Object.defineProperty(r4, "className", J));
      }
      n4.$$typeof = W, K && K(n4);
    };
    Q = l.__r;
    l.__r = function(n4) {
      Q && Q(n4), G = n4.__c;
    };
    X = { ReactCurrentDispatcher: { current: { readContext: function(n4) {
      return G.__n[n4.__c].props.value;
    } } } };
    ln = function(n4, t3) {
      return n4(t3);
    };
    fn = function(n4, t3) {
      return n4(t3);
    };
    compat_default = { useState: p2, useReducer: y2, useEffect: _2, useLayoutEffect: h2, useInsertionEffect: h2, useTransition: hn, useDeferredValue: sn, useSyncExternalStore: dn, startTransition: an, useRef: s2, useImperativeHandle: A2, useMemo: F, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: k3, render: z3, hydrate: B2, unmountComponentAtNode: un, createPortal: V, createElement: h, createContext: B, createFactory: tn, cloneElement: rn, createRef: y, Fragment: p, isValidElement: en, findDOMNode: on, Component: d, PureComponent: C2, memo: E, forwardRef: R, flushSync: fn, unstable_batchedUpdates: ln, StrictMode: p, Suspense: T3, SuspenseList: D, lazy: U, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X };
  }
});

// pnp:/home/mamluk/Projects/preact-lazy-ssr/.yarn/__virtual__/@preact-compat-virtual-e0e84c374f/3/.yarn/berry/cache/@preact-compat-npm-17.1.1-0ef64b87e2-9.zip/node_modules/@preact/compat/index.mjs
var init_compat2 = __esm({
  "pnp:/home/mamluk/Projects/preact-lazy-ssr/.yarn/__virtual__/@preact-compat-virtual-e0e84c374f/3/.yarn/berry/cache/@preact-compat-npm-17.1.1-0ef64b87e2-9.zip/node_modules/@preact/compat/index.mjs"() {
    init_compat();
    init_compat();
  }
});

// pnp:/home/mamluk/Projects/preact-lazy-ssr/src/Lazy.mjs
var Lazy_exports = {};
__export(Lazy_exports, {
  default: () => Lazy_default
});
var Lazy, Lazy_default;
var init_Lazy = __esm({
  "pnp:/home/mamluk/Projects/preact-lazy-ssr/src/Lazy.mjs"() {
    init_compat2();
    Lazy = () => /* @__PURE__ */ compat_default.createElement("h1", null, "Hello World");
    Lazy_default = Lazy;
  }
});

// pnp:/home/mamluk/Projects/preact-lazy-ssr/src/server.mjs
init_compat2();
import { writeFile } from "node:fs/promises";

// pnp:/home/mamluk/Projects/preact-lazy-ssr/.yarn/__virtual__/preact-render-to-string-virtual-d5e571f3fe/3/.yarn/berry/cache/preact-render-to-string-npm-5.2.1-4438cea7d0-9.zip/node_modules/preact-render-to-string/dist/index.mjs
init_preact();
var r3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var n2 = /[&<>"]/;
function o3(e3) {
  var t3 = String(e3);
  return n2.test(t3) ? t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t3;
}
var a3 = function(e3, t3) {
  return String(e3).replace(/(\n+)/g, "$1" + (t3 || "	"));
};
var i3 = function(e3, t3, r4) {
  return String(e3).length > (t3 || 40) || !r4 && -1 !== String(e3).indexOf("\n") || -1 !== String(e3).indexOf("<");
};
var l3 = {};
function s3(e3) {
  var t3 = "";
  for (var n4 in e3) {
    var o4 = e3[n4];
    null != o4 && "" !== o4 && (t3 && (t3 += " "), t3 += "-" == n4[0] ? n4 : l3[n4] || (l3[n4] = n4.replace(/([A-Z])/g, "-$1").toLowerCase()), t3 += ": ", t3 += o4, "number" == typeof o4 && false === r3.test(n4) && (t3 += "px"), t3 += ";");
  }
  return t3 || void 0;
}
function f3(e3, t3) {
  for (var r4 in t3)
    e3[r4] = t3[r4];
  return e3;
}
function u3(e3, t3) {
  return Array.isArray(t3) ? t3.reduce(u3, e3) : null != t3 && false !== t3 && e3.push(t3), e3;
}
var c3 = { shallow: true };
var p3 = [];
var _3 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var d3 = /[\s\n\\/='"\0<>]/;
function v3() {
  this.__d = true;
}
m3.render = m3;
var g4 = function(e3, t3) {
  return m3(e3, t3, c3);
};
var h3 = [];
function m3(t3, r4, n4) {
  r4 = r4 || {}, n4 = n4 || {};
  var o4 = l.__s;
  l.__s = true;
  var a4 = x4(t3, r4, n4);
  return l.__c && l.__c(t3, h3), h3.length = 0, l.__s = o4, a4;
}
function x4(r4, n4, l4, c4, g5, h4) {
  if (null == r4 || "boolean" == typeof r4)
    return "";
  if ("object" != typeof r4)
    return o3(r4);
  var m4 = l4.pretty, y3 = m4 && "string" == typeof m4 ? m4 : "	";
  if (Array.isArray(r4)) {
    for (var b3 = "", S3 = 0; S3 < r4.length; S3++)
      m4 && S3 > 0 && (b3 += "\n"), b3 += x4(r4[S3], n4, l4, c4, g5, h4);
    return b3;
  }
  var k4, w4 = r4.type, O3 = r4.props, C3 = false;
  if ("function" == typeof w4) {
    if (C3 = true, !l4.shallow || !c4 && false !== l4.renderRootComponent) {
      if (w4 === p) {
        var A4 = [];
        return u3(A4, r4.props.children), x4(A4, n4, l4, false !== l4.shallowHighOrder, g5, h4);
      }
      var H3, j4 = r4.__c = { __v: r4, context: n4, props: r4.props, setState: v3, forceUpdate: v3, __d: true, __h: [] };
      l.__b && l.__b(r4);
      var F3 = l.__r;
      if (w4.prototype && "function" == typeof w4.prototype.render) {
        var M3 = w4.contextType, T4 = M3 && n4[M3.__c], $3 = null != M3 ? T4 ? T4.props.value : M3.__ : n4;
        (j4 = r4.__c = new w4(O3, $3)).__v = r4, j4._dirty = j4.__d = true, j4.props = O3, null == j4.state && (j4.state = {}), null == j4._nextState && null == j4.__s && (j4._nextState = j4.__s = j4.state), j4.context = $3, w4.getDerivedStateFromProps ? j4.state = f3(f3({}, j4.state), w4.getDerivedStateFromProps(j4.props, j4.state)) : j4.componentWillMount && (j4.componentWillMount(), j4.state = j4._nextState !== j4.state ? j4._nextState : j4.__s !== j4.state ? j4.__s : j4.state), F3 && F3(r4), H3 = j4.render(j4.props, j4.state, j4.context);
      } else
        for (var L3 = w4.contextType, E2 = L3 && n4[L3.__c], D2 = null != L3 ? E2 ? E2.props.value : L3.__ : n4, N3 = 0; j4.__d && N3++ < 25; )
          j4.__d = false, F3 && F3(r4), H3 = w4.call(r4.__c, O3, D2);
      return j4.getChildContext && (n4 = f3(f3({}, n4), j4.getChildContext())), l.diffed && l.diffed(r4), x4(H3, n4, l4, false !== l4.shallowHighOrder, g5, h4);
    }
    w4 = (k4 = w4).displayName || k4 !== Function && k4.name || function(e3) {
      var t3 = (Function.prototype.toString.call(e3).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t3) {
        for (var r5 = -1, n5 = p3.length; n5--; )
          if (p3[n5] === e3) {
            r5 = n5;
            break;
          }
        r5 < 0 && (r5 = p3.push(e3) - 1), t3 = "UnnamedComponent" + r5;
      }
      return t3;
    }(k4);
  }
  var P3, R2, U2 = "<" + w4;
  if (O3) {
    var W2 = Object.keys(O3);
    l4 && true === l4.sortAttributes && W2.sort();
    for (var q4 = 0; q4 < W2.length; q4++) {
      var z4 = W2[q4], I3 = O3[z4];
      if ("children" !== z4) {
        if (!d3.test(z4) && (l4 && l4.allAttributes || "key" !== z4 && "ref" !== z4 && "__self" !== z4 && "__source" !== z4)) {
          if ("defaultValue" === z4)
            z4 = "value";
          else if ("defaultChecked" === z4)
            z4 = "checked";
          else if ("defaultSelected" === z4)
            z4 = "selected";
          else if ("className" === z4) {
            if (void 0 !== O3.class)
              continue;
            z4 = "class";
          } else
            g5 && /^xlink:?./.test(z4) && (z4 = z4.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === z4) {
            if (O3.for)
              continue;
            z4 = "for";
          }
          "style" === z4 && I3 && "object" == typeof I3 && (I3 = s3(I3)), "a" === z4[0] && "r" === z4[1] && "boolean" == typeof I3 && (I3 = String(I3));
          var V2 = l4.attributeHook && l4.attributeHook(z4, I3, n4, l4, C3);
          if (V2 || "" === V2)
            U2 += V2;
          else if ("dangerouslySetInnerHTML" === z4)
            R2 = I3 && I3.__html;
          else if ("textarea" === w4 && "value" === z4)
            P3 = I3;
          else if ((I3 || 0 === I3 || "" === I3) && "function" != typeof I3) {
            if (!(true !== I3 && "" !== I3 || (I3 = z4, l4 && l4.xml))) {
              U2 = U2 + " " + z4;
              continue;
            }
            if ("value" === z4) {
              if ("select" === w4) {
                h4 = I3;
                continue;
              }
              "option" === w4 && h4 == I3 && void 0 === O3.selected && (U2 += " selected");
            }
            U2 = U2 + " " + z4 + '="' + o3(I3) + '"';
          }
        }
      } else
        P3 = I3;
    }
  }
  if (m4) {
    var Z2 = U2.replace(/\n\s*/, " ");
    Z2 === U2 || ~Z2.indexOf("\n") ? m4 && ~U2.indexOf("\n") && (U2 += "\n") : U2 = Z2;
  }
  if (U2 += ">", d3.test(w4))
    throw new Error(w4 + " is not a valid HTML tag name in " + U2);
  var B3, G2 = _3.test(w4) || l4.voidElements && l4.voidElements.test(w4), J2 = [];
  if (R2)
    m4 && i3(R2) && (R2 = "\n" + y3 + a3(R2, y3)), U2 += R2;
  else if (null != P3 && u3(B3 = [], P3).length) {
    for (var K2 = m4 && ~U2.indexOf("\n"), Q2 = false, X2 = 0; X2 < B3.length; X2++) {
      var Y2 = B3[X2];
      if (null != Y2 && false !== Y2) {
        var ee = x4(Y2, n4, l4, true, "svg" === w4 || "foreignObject" !== w4 && g5, h4);
        if (m4 && !K2 && i3(ee) && (K2 = true), ee)
          if (m4) {
            var te = ee.length > 0 && "<" != ee[0];
            Q2 && te ? J2[J2.length - 1] += ee : J2.push(ee), Q2 = te;
          } else
            J2.push(ee);
      }
    }
    if (m4 && K2)
      for (var re = J2.length; re--; )
        J2[re] = "\n" + y3 + a3(J2[re], y3);
  }
  if (J2.length || R2)
    U2 += J2.join("");
  else if (l4 && l4.xml)
    return U2.substring(0, U2.length - 1) + " />";
  return !G2 || B3 || R2 ? (m4 && ~U2.indexOf("\n") && (U2 += "\n"), U2 = U2 + "</" + w4 + ">") : U2 = U2.replace(/>$/, " />"), U2;
}
m3.shallowRender = g4;

// pnp:/home/mamluk/Projects/preact-lazy-ssr/.yarn/__virtual__/preact-ssr-prepass-virtual-ee9485004d/3/.yarn/berry/cache/preact-ssr-prepass-npm-1.2.0-89a9e37a3d-9.zip/node_modules/preact-ssr-prepass/dist/index.mjs
init_preact();
init_compat();
function n3(e3, t3) {
  for (let r4 in t3)
    e3[r4] = t3[r4];
  return e3;
}
function s4(e3, t3) {
  return Array.isArray(t3) ? t3.reduce(s4, e3) : null != t3 && false !== t3 && e3.push(t3), e3;
}
function _4(p4, i4, l4) {
  if (null == p4 || "object" != typeof p4)
    return Promise.resolve();
  let c4 = p4.type, a4 = p4.props, u4 = [];
  if (l4 = l4 || {}, "function" == typeof c4 && c4 !== p && c4 !== T3) {
    let e3, o4 = p4.__c = new d(a4, l4);
    o4.__d = true, o4.__v = p4, void 0 === o4.state && (o4.state = {});
    let s5 = false, u5 = c4.contextType, m4 = u5 && l4[u5.__c], d4 = null != u5 ? m4 ? m4.props.value : u5.__p || u5.__ : l4;
    return c4.prototype && "function" == typeof c4.prototype.render ? (s5 = true, o4 = p4.__c = new c4(a4, d4), o4.__d = true, o4.__v = p4, o4.props = a4, o4.context = d4, void 0 === o4.state && (o4.state = {}), c4.getDerivedStateFromProps ? o4.state = n3(n3({}, o4.state), c4.getDerivedStateFromProps(o4.props, o4.state)) : o4.componentWillMount && o4.componentWillMount(), e3 = () => {
      try {
        return l.render && l.render(p4), l.__r && l.__r(p4), Promise.resolve(o4.render(o4.props, o4.state, o4.context));
      } catch (t3) {
        return t3 && t3.then ? t3.then(e3, e3) : Promise.reject(t3);
      }
    }) : e3 = () => {
      try {
        const e4 = l.__s;
        l.__s = true, l.render && l.render(p4), l.__r && l.__r(p4);
        const t3 = Promise.resolve(c4.call(p4.__c, a4, d4));
        return l.__s = e4, t3;
      } catch (t3) {
        return t3 && t3.then ? t3.then(e3, e3) : Promise.reject(t3);
      }
    }, (i4 ? (i4(p4, s5 ? o4 : void 0) || Promise.resolve()).then(e3) : e3()).then((e4) => (o4.getChildContext && (l4 = n3(n3({}, l4), o4.getChildContext())), Array.isArray(e4) ? Promise.all(e4.map((e5) => _4(e5, i4, l4))) : _4(e4, i4, l4)));
  }
  return a4 && s4(u4 = [], a4.children).length ? Promise.all(u4.map((e3) => _4(e3, i4, l4))) : Promise.resolve();
}

// pnp:/home/mamluk/Projects/preact-lazy-ssr/src/App.mjs
init_compat2();
var LazyApp = U(async () => Promise.resolve().then(() => (init_Lazy(), Lazy_exports)));
var App = () => /* @__PURE__ */ compat_default.createElement(T3, {
  fallback: /* @__PURE__ */ compat_default.createElement(compat_default.Fragment, null, "Loading ...")
}, /* @__PURE__ */ compat_default.createElement(LazyApp, null));

// pnp:/home/mamluk/Projects/preact-lazy-ssr/src/server.mjs
var vnode = /* @__PURE__ */ compat_default.createElement(compat_default.StrictMode, null, /* @__PURE__ */ compat_default.createElement(App, null));
console.log({ vnode });
await _4(vnode);
console.log({ vnode });
var content = m3(vnode);
console.log({ content });
