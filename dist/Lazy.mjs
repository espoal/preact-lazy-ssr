// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function a(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function h(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return v(l3, f3, t3, o3, null);
}
function v(n2, i3, t3, o3, r3) {
  var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function y() {
  return { current: null };
}
function p(n2) {
  return n2.children;
}
function d(n2, l3) {
  this.props = n2, this.context = l3;
}
function _(n2, l3) {
  if (null == l3)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t3, o3, r3;
      n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
    });
}
function w(n2, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
  var h3, y3, d3, k4, b3, g4, w4, x4 = i3 && i3.__k || e, C3 = x4.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (k4 = u3.__k[h3] = null == (k4 = l3[h3]) || "boolean" == typeof k4 ? null : "string" == typeof k4 || "number" == typeof k4 || "bigint" == typeof k4 ? v(null, k4, null, null, k4) : Array.isArray(k4) ? v(p, { children: k4 }, null, null, null) : k4.__b > 0 ? v(k4.type, k4.props, k4.key, null, k4.__v) : k4)) {
      if (k4.__ = u3, k4.__b = u3.__b + 1, null === (d3 = x4[h3]) || d3 && k4.key == d3.key && k4.type === d3.type)
        x4[h3] = void 0;
      else
        for (y3 = 0; y3 < C3; y3++) {
          if ((d3 = x4[y3]) && k4.key == d3.key && k4.type === d3.type) {
            x4[y3] = void 0;
            break;
          }
          d3 = null;
        }
      j(n2, k4, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b3 = k4.__e, (y3 = k4.ref) && d3.ref != y3 && (w4 || (w4 = []), d3.ref && w4.push(d3.ref, null, k4), w4.push(y3, k4.__c || b3, k4)), null != b3 ? (null == g4 && (g4 = b3), "function" == typeof k4.type && k4.__k === d3.__k ? k4.__d = s3 = m(k4, s3, n2) : s3 = A(n2, k4, d3, x4, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
    }
  for (u3.__e = g4, h3 = C3; h3--; )
    null != x4[h3] && ("function" == typeof u3.type && null != x4[h3].__e && x4[h3].__e == u3.__d && (u3.__d = _(i3, h3 + 1)), N(x4[h3], x4[h3]));
  if (w4)
    for (h3 = 0; h3 < w4.length; h3++)
      M(w4[h3], w4[++h3], w4[++h3]);
}
function m(n2, l3, u3) {
  for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function x(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    x(n3, l3);
  }) : l3.push(n2)), l3;
}
function A(n2, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o3 || null == t3.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n2)
        n2.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n2, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
}
function $(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
  var a3, h3, v3, y3, _3, k4, b3, g4, m3, x4, A4, C3, $3, H3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof H3) {
        if (g4 = u3.props, m3 = (a3 = H3.contextType) && t3[a3.__c], x4 = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in H3 && H3.prototype.render ? u3.__c = h3 = new H3(g4, x4) : (u3.__c = h3 = new d(g4, x4), h3.constructor = H3, h3.render = O), m3 && m3.sub(h3), h3.props = g4, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != H3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, H3.getDerivedStateFromProps(g4, h3.__s))), y3 = h3.props, _3 = h3.state, v3)
          null == H3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == H3.getDerivedStateFromProps && g4 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g4, x4), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g4, h3.__s, x4) || u3.__v === i3.__v) {
            h3.props = g4, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(g4, h3.__s, x4), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y3, _3, k4);
          });
        }
        if (h3.context = x4, h3.props = g4, h3.__v = u3, h3.__P = n2, A4 = l.__r, C3 = 0, "prototype" in H3 && H3.prototype.render)
          h3.state = h3.__s, h3.__d = false, A4 && A4(u3), a3 = h3.render(h3.props, h3.state, h3.context);
        else
          do {
            h3.__d = false, A4 && A4(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++C3 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k4 = h3.getSnapshotBeforeUpdate(y3, _3)), $3 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray($3) ? $3 : [$3], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, e3, c3) {
  var s3, h3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, k4 = 0;
  if ("svg" === d3 && (o3 = true), null != r3) {
    for (; k4 < r3.length; k4++)
      if ((s3 = r3[k4]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[k4] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (y3 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y3 = {}, k4 = 0; k4 < l3.attributes.length; k4++)
          y3[l3.attributes[k4].name] = l3.attributes[k4].value;
      (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y3, o3, c3), v3)
      u3.__k = [];
    else if (k4 = u3.props.children, w(l3, Array.isArray(k4) ? k4 : [k4], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k4 = r3.length; k4--; )
        null != r3[k4] && a(r3[k4]);
    c3 || ("value" in p3 && void 0 !== (k4 = p3.value) && (k4 !== l3.value || "progress" === d3 && !k4 || "option" === d3 && k4 !== y3.value) && H(l3, "value", k4, y3.value, false), "checked" in p3 && void 0 !== (k4 = p3.checked) && k4 !== l3.checked && H(l3, "checked", k4, y3.checked, false));
  }
  return l3;
}
function M(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n2.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, "function" != typeof n2.type);
  i3 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function P(u3, i3, t3) {
  var o3, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
}
function S(n2, l3) {
  P(n2, l3, S);
}
function q(l3, u3, i3) {
  var t3, o3, r3, f3 = s({}, l3.props);
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), v(l3.type, f3, t3 || l3.key, o3 || l3.ref, null);
}
function B(n2, l3) {
  var u3 = { __c: l3 = "__cC" + r++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(b);
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = e.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var u2;
var r2;
var o2;
var i2 = 0;
var c2 = [];
var f2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function d2(t3, r3) {
  l.__h && l.__h(u2, t3, i2 || r3), i2 = 0;
  var o3 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t3 >= o3.__.length && o3.__.push({ __V: f2 }), o3.__[t3];
}
function p2(n2) {
  return i2 = 1, y2(z2, n2);
}
function y2(n2, r3, o3) {
  var i3 = d2(t2++, 2);
  if (i3.t = n2, !i3.__c && (i3.__ = [o3 ? o3(r3) : z2(void 0, r3), function(n3) {
    var t3 = i3.__N ? i3.__N[0] : i3.__[0], u3 = i3.t(t3, n3);
    t3 !== u3 && (i3.__N = [u3, i3.__[1]], i3.__c.setState({}));
  }], i3.__c = u2, !i3.__c.u)) {
    i3.__c.__H.u = true;
    var c3 = i3.__c.shouldComponentUpdate;
    i3.__c.shouldComponentUpdate = function(n3, t3, u3) {
      var r4 = i3.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      return r4.every(function(n4) {
        return !n4.__N;
      }) ? !c3 || c3(n3, t3, u3) : !r4.every(function(n4) {
        if (!n4.__N)
          return true;
        var t4 = n4.__[0];
        return n4.__ = n4.__N, n4.__N = void 0, t4 === n4.__[0];
      }) && (!c3 || c3(n3, t3, u3));
    };
  }
  return i3.__N || i3.__;
}
function _2(r3, o3) {
  var i3 = d2(t2++, 3);
  !l.__s && w2(i3.__H, o3) && (i3.__ = r3, i3.o = o3, u2.__H.__h.push(i3));
}
function h2(r3, o3) {
  var i3 = d2(t2++, 4);
  !l.__s && w2(i3.__H, o3) && (i3.__ = r3, i3.o = o3, u2.__h.push(i3));
}
function s2(n2) {
  return i2 = 5, F(function() {
    return { current: n2 };
  }, []);
}
function A2(n2, t3, u3) {
  i2 = 6, h2(function() {
    return "function" == typeof n2 ? (n2(t3()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t3(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == u3 ? u3 : u3.concat(n2));
}
function F(n2, u3) {
  var r3 = d2(t2++, 7);
  return w2(r3.__H, u3) ? (r3.__V = n2(), r3.o = u3, r3.__h = n2, r3.__V) : r3.__;
}
function T2(n2, t3) {
  return i2 = 8, F(function() {
    return n2;
  }, t3);
}
function q2(n2) {
  var r3 = u2.context[n2.__c], o3 = d2(t2++, 9);
  return o3.c = n2, r3 ? (null == o3.__ && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
}
function x2(t3, u3) {
  l.useDebugValue && l.useDebugValue(u3 ? u3(t3) : t3);
}
function b2() {
  for (var t3; t3 = c2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
      } catch (u3) {
        t3.__H.__h = [], l.__e(u3, t3.__v);
      }
}
l.__b = function(n2) {
  u2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var o3 = (u2 = n2.__c).__H;
  o3 && (r2 === u2 ? (o3.__h = [], u2.__h = [], o3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = f2, n3.__N = n3.o = void 0;
  })) : (o3.__h.forEach(j2), o3.__h.forEach(k2), o3.__h = [])), r2 = u2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var i3 = t3.__c;
  i3 && i3.__H && (i3.__H.__h.length && (1 !== c2.push(i3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || function(n2) {
    var t4, u3 = function() {
      clearTimeout(r3), g2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r3 = setTimeout(u3, 100);
    g2 && (t4 = requestAnimationFrame(u3));
  })(b2)), i3.__H.__.forEach(function(n2) {
    n2.o && (n2.__H = n2.o), n2.__V !== f2 && (n2.__ = n2.__V), n2.o = void 0, n2.__V = f2;
  })), r2 = u2 = null;
}, l.__c = function(t3, u3) {
  u3.some(function(t4) {
    try {
      t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || k2(n2);
      });
    } catch (r3) {
      u3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u3 = [], l.__e(r3, t4.__v);
    }
  }), l2 && l2(t3, u3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var u3, r3 = t3.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
    try {
      j2(n2);
    } catch (n3) {
      u3 = n3;
    }
  }), u3 && l.__e(u3, r3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3 = u2, r3 = n2.__c;
  "function" == typeof r3 && (n2.__c = void 0, r3()), u2 = t3;
}
function k2(n2) {
  var t3 = u2;
  n2.__c = n2.__(), u2 = t3;
}
function w2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
    return t4 !== n2[u3];
  });
}
function z2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// pnp:/home/mamluk/.yarn/berry/cache/preact-npm-10.10.1-d9c6c9f767-9.zip/node_modules/preact/compat/dist/compat.module.js
function S2(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
}
function g3(n2, t3) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n2[r3] !== t3[r3])
      return true;
  return false;
}
function C2(n2) {
  this.props = n2;
}
function E(n2, t3) {
  function e3(n3) {
    var e4 = this.props.ref, r4 = e4 == n3.ref;
    return !r4 && e4 && (e4.call ? e4(null) : e4.current = null), t3 ? !t3(this.props, n3) || !r4 : g3(this.props, n3);
  }
  function r3(t4) {
    return this.shouldComponentUpdate = e3, h(n2, t4);
  }
  return r3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r3.prototype.isReactComponent = true, r3.__f = true, r3;
}
(C2.prototype = new d()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(n2, t3) {
  return g3(this.props, n2) || g3(this.state, t3);
};
var w3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
};
var x3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function R(n2) {
  function t3(t4) {
    var e3 = S2({}, t4);
    return delete e3.ref, n2(e3, t4.ref || null);
  }
  return t3.$$typeof = x3, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
}
var N2 = function(n2, t3) {
  return null == n2 ? null : x(x(n2).map(t3));
};
var k3 = { map: N2, forEach: N2, count: function(n2) {
  return n2 ? x(n2).length : 0;
}, only: function(n2) {
  var t3 = x(n2);
  if (1 !== t3.length)
    throw "Children.only";
  return t3[0];
}, toArray: x };
var A3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t3; o3 = o3.__; )
      if ((u3 = o3.__c) && u3.__c)
        return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  A3(n2, t3, e3, r3);
};
var O2 = l.unmount;
function T3() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L2(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function U(n2) {
  var t3, e3, r3;
  function u3(u4) {
    if (t3 || (t3 = n2()).then(function(n3) {
      e3 = n3.default || n3;
    }, function(n3) {
      r3 = n3;
    }), r3)
      throw r3;
    if (!e3)
      throw t3;
    return h(e3, u4);
  }
  return u3.displayName = "Lazy", u3.__f = true, u3;
}
function D() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), O2 && O2(n2);
}, (T3.prototype = new d()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = L2(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = function n4(t5, e4, r4) {
          return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
            return n4(t6, e4, r4);
          }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
        t4.forceUpdate();
    }
  }, f3 = true === t3.__h;
  r3.__u++ || f3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, T3.prototype.componentWillUnmount = function() {
  this.t = [];
}, T3.prototype.render = function(n2, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t4, e4, r4) {
        return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
          "function" == typeof n4.__c && n4.__c();
        }), t4.__c.__H = null), null != (t4 = S2({}, t4)).__c && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
          return n3(t5, e4, r4);
        })), t4;
      }(this.__b, e3, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var u3 = t3.__a && h(p, null, n2.fallback);
  return u3 && (u3.__h = null), [h(p, null, t3.__a ? null : n2.children), u3];
};
var F2 = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
function I2(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function M2(n2) {
  var t3 = this, e3 = n2.i;
  t3.componentWillUnmount = function() {
    P(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== e3 && t3.componentWillUnmount(), n2.__v ? (t3.l || (t3.i = e3, t3.l = { nodeType: 1, parentNode: e3, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t3.i.appendChild(n3);
  }, insertBefore: function(n3, e4) {
    this.childNodes.push(n3), t3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t3.i.removeChild(n3);
  } }), P(h(I2, { context: t3.context }, n2.__v), t3.l)) : t3.l && t3.componentWillUnmount();
}
function V(n2, t3) {
  var e3 = h(M2, { __v: n2, i: t3 });
  return e3.containerInfo = t3, e3;
}
(D.prototype = new d()).__a = function(n2) {
  var t3 = this, e3 = L2(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u3), F2(t3, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, D.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = x(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; )
    this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    F2(n2, e3, t3);
  });
};
var W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var $2 = "undefined" != typeof document;
var j3 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function z3(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), P(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
function B2(n2, t3, e3) {
  return S(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(d.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t3) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
  } });
});
var H2 = l.event;
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q3() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q3, n2.nativeEvent = n2;
};
var G;
var J = { configurable: true, get: function() {
  return this.class;
} };
var K = l.vnode;
l.vnode = function(n2) {
  var t3 = n2.type, e3 = n2.props, r3 = e3;
  if ("string" == typeof t3) {
    var u3 = -1 === t3.indexOf("-");
    for (var o3 in r3 = {}, e3) {
      var i3 = e3[o3];
      $2 && "children" === o3 && "noscript" === t3 || "value" === o3 && "defaultValue" in e3 && null == i3 || ("defaultValue" === o3 && "value" in e3 && null == e3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t3) && !j3(e3.type) ? o3 = "oninput" : /^onfocus$/i.test(o3) ? o3 = "onfocusin" : /^onblur$/i.test(o3) ? o3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o3) ? o3 = o3.toLowerCase() : u3 && P2.test(o3) ? o3 = o3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === i3 && (i3 = void 0), /^oninput$/i.test(o3) && (o3 = o3.toLowerCase(), r3[o3] && (o3 = "oninputCapture")), r3[o3] = i3);
    }
    "select" == t3 && r3.multiple && Array.isArray(r3.value) && (r3.value = x(e3.children).forEach(function(n3) {
      n3.props.selected = -1 != r3.value.indexOf(n3.props.value);
    })), "select" == t3 && null != r3.defaultValue && (r3.value = x(e3.children).forEach(function(n3) {
      n3.props.selected = r3.multiple ? -1 != r3.defaultValue.indexOf(n3.props.value) : r3.defaultValue == n3.props.value;
    })), n2.props = r3, e3.class != e3.className && (J.enumerable = "className" in e3, null != e3.className && (r3.class = e3.className), Object.defineProperty(r3, "className", J));
  }
  n2.$$typeof = W, K && K(n2);
};
var Q = l.__r;
l.__r = function(n2) {
  Q && Q(n2), G = n2.__c;
};
var X = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return G.__n[n2.__c].props.value;
} } } };
function tn(n2) {
  return h.bind(null, n2);
}
function en(n2) {
  return !!n2 && n2.$$typeof === W;
}
function rn(n2) {
  return en(n2) ? q.apply(null, arguments) : n2;
}
function un(n2) {
  return !!n2.__k && (P(null, n2), true);
}
function on(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var ln = function(n2, t3) {
  return n2(t3);
};
var fn = function(n2, t3) {
  return n2(t3);
};
function an(n2) {
  n2();
}
function sn(n2) {
  return n2;
}
function hn() {
  return [false, an];
}
function dn(t3, r3) {
  var u3 = p2(r3), o3 = u3[0], i3 = u3[1];
  return _2(function() {
    return t3(function() {
      i3(function() {
        return r3();
      });
    });
  }, [t3, r3]), o3;
}
var compat_module_default = { useState: p2, useReducer: y2, useEffect: _2, useLayoutEffect: h2, useInsertionEffect: h2, useTransition: hn, useDeferredValue: sn, useSyncExternalStore: dn, startTransition: an, useRef: s2, useImperativeHandle: A2, useMemo: F, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: k3, render: z3, hydrate: B2, unmountComponentAtNode: un, createPortal: V, createElement: h, createContext: B, createFactory: tn, cloneElement: rn, createRef: y, Fragment: p, isValidElement: en, findDOMNode: on, Component: d, PureComponent: C2, memo: E, forwardRef: R, flushSync: fn, unstable_batchedUpdates: ln, StrictMode: p, Suspense: T3, SuspenseList: D, lazy: U, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X };

// pnp:/home/mamluk/Projects/preact-lazy-ssr/src/Lazy.mjs
var Lazy = () => /* @__PURE__ */ compat_module_default.createElement("h1", null, "Hello World");
var Lazy_default = Lazy;
export {
  Lazy_default as default
};
