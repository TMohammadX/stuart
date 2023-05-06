let e,
  t,
  r,
  o,
  s,
  i,
  n,
  a,
  l,
  c,
  d,
  h,
  g,
  f,
  p,
  u = () => "undefined" != typeof window,
  m = () => e || (u() && (e = window.gsap) && e.registerPlugin && e),
  v = function () {
    return String.fromCharCode.apply(null, arguments);
  },
  y = v(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
  w =
    ((function (e) {
      var t = "undefined" != typeof window,
        r =
          0 ===
            (t ? window.location.href : "").indexOf(
              v(102, 105, 108, 101, 58, 47, 47)
            ) ||
          -1 !== e.indexOf(v(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
          -1 !== e.indexOf(v(49, 50, 55, 46, 48, 32, 48, 46, 49)),
        o = [
          y,
          v(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
          v(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            112,
            108,
            117,
            109,
            98,
            105,
            110,
            103
          ),
          v(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
          v(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
          v(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            119,
            101,
            98,
            115,
            105,
            116,
            101
          ),
          v(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
          v(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
          v(99, 100, 112, 110, 46, 105, 111),
          v(112, 101, 110, 115, 46, 105, 111),
          v(103, 97, 110, 110, 111, 110, 46, 116, 118),
          v(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
          v(
            116,
            104,
            101,
            109,
            101,
            102,
            111,
            114,
            101,
            115,
            116,
            46,
            110,
            101,
            116
          ),
          v(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
          v(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
          v(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
          v(112, 108, 110, 107, 114, 46, 99, 111),
          v(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
          v(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
          v(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
          v(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
          v(99, 115, 98, 46, 97, 112, 112),
          v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
          v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
          v(99, 111, 100, 105, 101, 114, 46, 105, 111),
          v(
            109,
            111,
            116,
            105,
            111,
            110,
            116,
            114,
            105,
            99,
            107,
            115,
            46,
            99,
            111,
            109
          ),
          v(
            115,
            116,
            97,
            99,
            107,
            111,
            118,
            101,
            114,
            102,
            108,
            111,
            119,
            46,
            99,
            111,
            109
          ),
          v(
            115,
            116,
            97,
            99,
            107,
            101,
            120,
            99,
            104,
            97,
            110,
            103,
            101,
            46,
            99,
            111,
            109
          ),
          v(
            115,
            116,
            117,
            100,
            105,
            111,
            102,
            114,
            101,
            105,
            103,
            104,
            116,
            46,
            99,
            111,
            109
          ),
          v(
            119,
            101,
            98,
            99,
            111,
            110,
            116,
            97,
            105,
            110,
            101,
            114,
            46,
            105,
            111
          ),
          v(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
        ],
        s = function () {
          t &&
            ("loading" === document.readyState ||
            "interactive" === document.readyState
              ? document.addEventListener("readystatechange", s)
              : (document.removeEventListener("readystatechange", s),
                t &&
                  window.console &&
                  !window._gsapWarned &&
                  "object" == typeof window.gsap &&
                  !1 !== window.gsap.config().trialWarn &&
                  (console.log(
                    v(37, 99, 87, 97, 114, 110, 105, 110, 103),
                    v(
                      102,
                      111,
                      110,
                      116,
                      45,
                      115,
                      105,
                      122,
                      101,
                      58,
                      51,
                      48,
                      112,
                      120,
                      59,
                      99,
                      111,
                      108,
                      111,
                      114,
                      58,
                      114,
                      101,
                      100,
                      59
                    )
                  ),
                  console.log(
                    v(
                      65,
                      32,
                      116,
                      114,
                      105,
                      97,
                      108,
                      32,
                      118,
                      101,
                      114,
                      115,
                      105,
                      111,
                      110,
                      32,
                      111,
                      102,
                      32
                    ) +
                      "ScrollSmoother" +
                      v(
                        32,
                        105,
                        115,
                        32,
                        108,
                        111,
                        97,
                        100,
                        101,
                        100,
                        32,
                        116,
                        104,
                        97,
                        116,
                        32,
                        111,
                        110,
                        108,
                        121,
                        32,
                        119,
                        111,
                        114,
                        107,
                        115,
                        32,
                        108,
                        111,
                        99,
                        97,
                        108,
                        108,
                        121,
                        32,
                        97,
                        110,
                        100,
                        32,
                        111,
                        110,
                        32,
                        100,
                        111,
                        109,
                        97,
                        105,
                        110,
                        115,
                        32,
                        108,
                        105,
                        107,
                        101,
                        32,
                        99,
                        111,
                        100,
                        101,
                        112,
                        101,
                        110,
                        46,
                        105,
                        111,
                        32,
                        97,
                        110,
                        100,
                        32,
                        99,
                        111,
                        100,
                        101,
                        115,
                        97,
                        110,
                        100,
                        98,
                        111,
                        120,
                        46,
                        105,
                        111,
                        46,
                        32,
                        42,
                        42,
                        42,
                        32,
                        68,
                        79,
                        32,
                        78,
                        79,
                        84,
                        32,
                        68,
                        69,
                        80,
                        76,
                        79,
                        89,
                        32,
                        84,
                        72,
                        73,
                        83,
                        32,
                        70,
                        73,
                        76,
                        69,
                        32,
                        42,
                        42,
                        42,
                        32,
                        76,
                        111,
                        97,
                        100,
                        105,
                        110,
                        103,
                        32,
                        105,
                        116,
                        32,
                        111,
                        110,
                        32,
                        97,
                        110,
                        32,
                        117,
                        110,
                        97,
                        117,
                        116,
                        104,
                        111,
                        114,
                        105,
                        122,
                        101,
                        100,
                        32,
                        115,
                        105,
                        116,
                        101,
                        32,
                        118,
                        105,
                        111,
                        108,
                        97,
                        116,
                        101,
                        115,
                        32,
                        116,
                        104,
                        101,
                        32,
                        108,
                        105,
                        99,
                        101,
                        110,
                        115,
                        101,
                        32,
                        97,
                        110,
                        100,
                        32,
                        119,
                        105,
                        108,
                        108,
                        32,
                        99,
                        97,
                        117,
                        115,
                        101,
                        32,
                        97,
                        32,
                        114,
                        101,
                        100,
                        105,
                        114,
                        101,
                        99,
                        116,
                        46,
                        32,
                        80,
                        108,
                        101,
                        97,
                        115,
                        101,
                        32,
                        106,
                        111,
                        105,
                        110,
                        32,
                        67,
                        108,
                        117,
                        98,
                        32,
                        71,
                        114,
                        101,
                        101,
                        110,
                        83,
                        111,
                        99,
                        107,
                        32,
                        116,
                        111,
                        32,
                        103,
                        101,
                        116,
                        32,
                        102,
                        117,
                        108,
                        108,
                        32,
                        97,
                        99,
                        99,
                        101,
                        115,
                        115,
                        32,
                        116,
                        111,
                        32,
                        116,
                        104,
                        101,
                        32,
                        98,
                        111,
                        110,
                        117,
                        115,
                        32,
                        112,
                        108,
                        117,
                        103,
                        105,
                        110,
                        115,
                        32,
                        116,
                        104,
                        97,
                        116,
                        32,
                        98,
                        111,
                        111,
                        115,
                        116,
                        32,
                        121,
                        111,
                        117,
                        114,
                        32,
                        97,
                        110,
                        105,
                        109,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        115,
                        117,
                        112,
                        101,
                        114,
                        112,
                        111,
                        119,
                        101,
                        114,
                        115,
                        46,
                        32,
                        68,
                        105,
                        115,
                        97,
                        98,
                        108,
                        101,
                        32,
                        116,
                        104,
                        105,
                        115,
                        32,
                        119,
                        97,
                        114,
                        110,
                        105,
                        110,
                        103,
                        32,
                        119,
                        105,
                        116,
                        104,
                        32,
                        103,
                        115,
                        97,
                        112,
                        46,
                        99,
                        111,
                        110,
                        102,
                        105,
                        103,
                        40,
                        123,
                        116,
                        114,
                        105,
                        97,
                        108,
                        87,
                        97,
                        114,
                        110,
                        58,
                        32,
                        102,
                        97,
                        108,
                        115,
                        101,
                        125,
                        41,
                        59
                      )
                  ),
                  console.log(
                    v(
                      37,
                      99,
                      71,
                      101,
                      116,
                      32,
                      117,
                      110,
                      114,
                      101,
                      115,
                      116,
                      114,
                      105,
                      99,
                      116,
                      101,
                      100,
                      32,
                      102,
                      105,
                      108,
                      101,
                      115,
                      32,
                      97,
                      116,
                      32,
                      104,
                      116,
                      116,
                      112,
                      115,
                      58,
                      47,
                      47,
                      103,
                      114,
                      101,
                      101,
                      110,
                      115,
                      111,
                      99,
                      107,
                      46,
                      99,
                      111,
                      109,
                      47,
                      99,
                      108,
                      117,
                      98
                    ),
                    v(
                      102,
                      111,
                      110,
                      116,
                      45,
                      115,
                      105,
                      122,
                      101,
                      58,
                      49,
                      54,
                      112,
                      120,
                      59,
                      99,
                      111,
                      108,
                      111,
                      114,
                      58,
                      35,
                      52,
                      101,
                      57,
                      56,
                      49,
                      53
                    )
                  ),
                  (window._gsapWarned = 0))));
        },
        i = o.length;
    })("undefined" != typeof window ? window.location.host : ""),
    (e) => {
      let t = o.querySelector(".ScrollSmoother-wrapper");
      return (
        t ||
          ((t = o.createElement("div")),
          t.classList.add("ScrollSmoother-wrapper"),
          e.parentNode.insertBefore(t, e),
          t.appendChild(e)),
        t
      );
    });
class S {
  constructor(u) {
    t ||
      S.register(e) ||
      console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
      (u = this.vars = u || {}),
      c && c.kill(),
      (c = this),
      f(this);
    let m,
      v,
      y,
      b,
      T,
      x,
      E,
      R,
      P,
      k,
      C,
      _,
      A,
      z,
      M,
      {
        smoothTouch: F,
        onUpdate: L,
        onStop: O,
        smooth: B,
        onFocusIn: H,
        normalizeScroll: I,
        wholePixels: N,
      } = u,
      U = this,
      q = u.effectsPrefix || "",
      V = l.getScrollFunc(r),
      W =
        1 === l.isTouch
          ? !0 === F
            ? 0.8
            : parseFloat(F) || 0
          : 0 === B || !1 === B
          ? 0
          : parseFloat(B) || 0.8,
      D = (W && +u.speed) || 1,
      Y = 0,
      j = 0,
      K = 1,
      G = h(0),
      J = () => G.update(-Y),
      Q = { y: 0 },
      X = () => (m.style.overflow = "visible"),
      Z = (e) => {
        e.update();
        let t = e.getTween();
        t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
          (z = !1),
          e.animation.progress(e.progress, !0);
      },
      $ = (e, t) => {
        ((e !== Y && !k) || t) &&
          (N && (e = Math.round(e)),
          W &&
            ((m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              e +
              ", 0, 1)"),
            (m._gsap.y = e + "px")),
          (j = e - Y),
          (Y = e),
          l.isUpdating || S.isRefreshing || l.update());
      },
      ee = function (e) {
        return arguments.length
          ? (e < 0 && (e = 0),
            (Q.y = -e),
            (z = !0),
            k ? (Y = -e) : $(-e),
            l.isRefreshing ? b.update() : V(e / D),
            this)
          : -Y;
      },
      te =
        "undefined" != typeof ResizeObserver &&
        !1 !== u.autoResize &&
        new ResizeObserver(() => {
          if (!l.isRefreshing) {
            let e = l.maxScroll(v);
            e < -Y && ee(e), p.restart(!0);
          }
        }),
      re = (e) => {
        (v.scrollTop = 0),
          (e.target.contains && e.target.contains(v)) ||
            (H && !1 === H(this, e)) ||
            (l.isInViewport(e.target) ||
              e.target === M ||
              this.scrollTo(e.target, !1, "center center"),
            (M = e.target));
      },
      oe = (t, r) => {
        let o, s, i, n;
        T.forEach((r) => {
          (o = r.pins),
            (n = r.markers),
            t.forEach((t) => {
              r.trigger &&
                t.trigger &&
                r !== t &&
                (t.trigger === r.trigger ||
                  t.pinnedContainer === r.trigger ||
                  r.trigger.contains(t.trigger)) &&
                ((s = t.start),
                (i = (s - r.start - r.offset) / r.ratio - (s - r.start)),
                o.forEach((e) => (i -= e.distance / r.ratio - e.distance)),
                t.setPositions(s + i, t.end + i),
                t.markerStart &&
                  n.push(
                    e.quickSetter([t.markerStart, t.markerEnd], "y", "px")
                  ),
                t.pin &&
                  t.end > 0 &&
                  ((i = t.end - t.start),
                  o.push({ start: t.start, end: t.end, distance: i, trig: t }),
                  r.setPositions(r.start, r.end + i),
                  r.vars.onRefresh(r)));
            });
        });
      },
      se = () => {
        X(),
          requestAnimationFrame(X),
          T &&
            (T.forEach((e) => {
              let t = e.start,
                r = e.auto
                  ? Math.min(l.maxScroll(e.scroller), e.end)
                  : t + (e.end - t) / e.ratio,
                o = (r - e.end) / 2;
              (t -= o),
                (r -= o),
                (e.offset = o || 1e-4),
                (e.pins.length = 0),
                e.setPositions(Math.min(t, r), Math.max(t, r)),
                e.vars.onRefresh(e);
            }),
            oe(l.sort())),
          G.reset();
      },
      ie = () => l.addEventListener("refresh", se),
      ne = () => T && T.forEach((e) => e.vars.onRefresh(e)),
      ae = () => (T && T.forEach((e) => e.vars.onRefreshInit(e)), ne),
      le = (e, t, r, o) => () => {
        let s = "function" == typeof t ? t(r, o) : t;
        return (
          s ||
            0 === s ||
            (s = o.getAttribute("data-" + q + e) || ("speed" === e ? 1 : 0)),
          o.setAttribute("data-" + q + e, s),
          "auto" === s ? s : parseFloat(s)
        );
      },
      ce = (t, o, i, n, c) => {
        c = ("function" == typeof c ? c(n, t) : c) || 0;
        let h,
          g,
          f,
          p,
          u,
          m,
          y = le("speed", o, n, t),
          w = le("lag", i, n, t),
          S = e.getProperty(t, "y"),
          b = t._gsap,
          x = () => {
            (o = y()),
              (i = w()),
              (h = parseFloat(o) || 1),
              (f = "auto" === o),
              (u = f ? 0 : 0.5),
              p && p.kill(),
              (p =
                i &&
                e.to(t, { ease: d, overwrite: !1, y: "+=0", duration: i })),
              g && ((g.ratio = h), (g.autoSpeed = f));
          },
          E = () => {
            (b.y = S + "px"), b.renderTransform(1), x();
          },
          R = [],
          P = [],
          k = 0,
          C = (e) => {
            if (f) {
              E();
              let o = ((e, t) => {
                let o,
                  i,
                  n = e.parentNode || s,
                  a = e.getBoundingClientRect(),
                  l = n.getBoundingClientRect(),
                  c = l.top - a.top,
                  d = l.bottom - a.bottom,
                  h = (Math.abs(c) > Math.abs(d) ? c : d) / (1 - t),
                  g = -h * t;
                return (
                  h > 0 &&
                    ((o = l.height / (r.innerHeight + l.height)),
                    (i =
                      0.5 === o
                        ? 2 * l.height
                        : 2 *
                          Math.min(l.height, (-h * o) / (2 * o - 1)) *
                          (t || 1)),
                    (g += t ? -i * t : -i / 2),
                    (h += i)),
                  { change: h, offset: g }
                );
              })(t, a(0, 1, -e.start / (e.end - e.start)));
              (k = o.change), (m = o.offset);
            } else (k = (e.end - e.start) * (1 - h)), (m = 0);
            R.forEach((e) => (k -= e.distance * (1 - h))),
              e.vars.onUpdate(e),
              p && p.progress(1);
          };
        return (
          x(),
          (1 !== h || f || p) &&
            ((g = l.create({
              trigger: f ? t.parentNode : t,
              start: "top bottom+=" + c,
              end: "bottom top-=" + c,
              scroller: v,
              scrub: !0,
              onKill: (e) => {
                let t = T.indexOf(e);
                t >= 0 && T.splice(t, 1), E();
              },
              onUpdate: (t) => {
                let r,
                  o,
                  s,
                  i = S + k * (t.progress - u),
                  n = R.length,
                  a = 0;
                if (t.offset) {
                  if (n) {
                    for (o = -Y, s = t.end; n--; ) {
                      if (
                        ((r = R[n]),
                        r.trig.isActive || (o >= r.start && o <= r.end))
                      )
                        return void (
                          p &&
                          ((r.trig.progress +=
                            r.trig.direction < 0 ? 0.001 : -0.001),
                          r.trig.update(0, 0, 1),
                          p.resetTo("y", parseFloat(b.y), -j, !0),
                          K && p.progress(1))
                        );
                      o > r.end && (a += r.distance), (s -= r.distance);
                    }
                    i =
                      S +
                      a +
                      k *
                        ((e.utils.clamp(t.start, t.end, o) - t.start - a) /
                          (s - t.start) -
                          u);
                  }
                  (l = i + m),
                    (i = Math.round(1e5 * l) / 1e5 || 0),
                    P.length && !f && P.forEach((e) => e(i - a)),
                    p
                      ? (p.resetTo("y", i, -j, !0), K && p.progress(1))
                      : ((b.y = i + "px"), b.renderTransform(1));
                }
                var l;
              },
            })),
            C(g),
            (e.core.getCache(g.trigger).stRevert = ae),
            (g.startY = S),
            (g.pins = R),
            (g.markers = P),
            (g.ratio = h),
            (g.autoSpeed = f),
            (t.style.willChange = "transform")),
          g
        );
      };
    function de() {
      return (
        (y = m.clientHeight),
        (m.style.overflow = "visible"),
        (i.style.height = r.innerHeight + (y - r.innerHeight) / D + "px"),
        y - r.innerHeight
      );
    }
    ie(),
      l.addEventListener("killAll", ie),
      e.delayedCall(0.5, () => (K = 0)),
      (this.scrollTop = ee),
      (this.scrollTo = (t, o, s) => {
        let i = e.utils.clamp(
          0,
          l.maxScroll(r),
          isNaN(t) ? this.offset(t, s) : +t
        );
        o
          ? k
            ? e.to(this, {
                duration: W,
                scrollTop: i,
                overwrite: "auto",
                ease: d,
              })
            : V(i)
          : ee(i);
      }),
      (this.offset = (t, r) => {
        let o,
          s = (t = n(t)[0]).style.cssText,
          i = l.create({ trigger: t, start: r || "top top" });
        return (
          T && oe([i]),
          (o = i.start / D),
          i.kill(!1),
          (t.style.cssText = s),
          (e.core.getCache(t).uncache = 1),
          o
        );
      }),
      (this.content = function (t) {
        if (arguments.length) {
          let r =
            n(t || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            i.children[0];
          return (
            r !== m &&
              ((m = r),
              (P = m.getAttribute("style") || ""),
              te && te.observe(m),
              e.set(m, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              W || e.set(m, { clearProps: "transform" })),
            this
          );
        }
        return m;
      }),
      (this.wrapper = function (t) {
        return arguments.length
          ? ((v = n(t || "#smooth-wrapper")[0] || w(m)),
            (R = v.getAttribute("style") || ""),
            de(),
            e.set(
              v,
              W
                ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
            ),
            this)
          : v;
      }),
      (this.effects = (e, t) => {
        if ((T || (T = []), !e)) return T.slice(0);
        (e = n(e)).forEach((e) => {
          let t = T.length;
          for (; t--; ) T[t].trigger === e && T[t].kill();
        }),
          (t = t || {});
        let r,
          o,
          { speed: s, lag: i, effectsPadding: a } = t,
          l = [];
        for (r = 0; r < e.length; r++)
          (o = ce(e[r], s, i, r, a)), o && l.push(o);
        return T.push(...l), l;
      }),
      (this.sections = (e, t) => {
        if ((x || (x = []), !e)) return x.slice(0);
        let r = n(e).map((e) =>
          l.create({
            trigger: e,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: (t) => {
              (e.style.opacity = t.isActive ? "1" : "0"),
                (e.style.pointerEvents = t.isActive ? "all" : "none");
            },
          })
        );
        return t && t.add ? x.push(...r) : (x = r.slice(0)), r;
      }),
      this.content(u.content),
      this.wrapper(u.wrapper),
      (this.render = (e) => $(e || 0 === e ? e : Y)),
      (this.getVelocity = () => G.getVelocity(-Y)),
      l.scrollerProxy(v, {
        scrollTop: ee,
        scrollHeight: () => de() && i.scrollHeight,
        fixedMarkers: !1 !== u.fixedMarkers && !!W,
        content: m,
        getBoundingClientRect: () => ({
          top: 0,
          left: 0,
          width: r.innerWidth,
          height: r.innerHeight,
        }),
      }),
      l.defaults({ scroller: v });
    let he = l.getAll().filter((e) => e.scroller === r || e.scroller === v);
    he.forEach((e) => e.revert(!0, !0)),
      (b = l.create({
        animation: e.fromTo(
          Q,
          { y: 0 },
          {
            y: () => -de(),
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function () {
              if (this._dur) {
                let e = z;
                e && (Z(b), (Q.y = Y)), $(Q.y, e), J(), L && !k && L(U);
              }
            },
          }
        ),
        onRefreshInit: (e) => {
          if (((S.isRefreshing = !0), T)) {
            let e = l.getAll().filter((e) => !!e.pin);
            T.forEach((t) => {
              t.vars.pinnedContainer ||
                e.forEach((e) => {
                  if (e.pin.contains(t.trigger)) {
                    let r = t.vars;
                    (r.pinnedContainer = e.pin),
                      (t.vars = null),
                      t.init(r, t.animation);
                  }
                });
            });
          }
          let t = e.getTween();
          (A = t && t._end > t._dp._time),
            (_ = Y),
            (Q.y = 0),
            W &&
              (1 === l.isTouch && (v.style.position = "absolute"),
              (v.scrollTop = 0),
              1 === l.isTouch && (v.style.position = "fixed"));
        },
        onRefresh: (t) => {
          t.animation.invalidate(),
            t.setPositions(t.start, de() / D),
            A || Z(t),
            (Q.y = -V() * D),
            $(Q.y),
            K || t.animation.progress(e.utils.clamp(0, 1, _ / D / -t.end)),
            A && ((t.progress -= 0.001), t.update()),
            (S.isRefreshing = !1);
        },
        id: "ScrollSmoother",
        scroller: r,
        start: 0,
        refreshPriority: -9999,
        end: () => de() / D,
        onScrubComplete: () => {
          G.reset(), O && O(this);
        },
        scrub: W || !0,
      })),
      (this.smooth = function (e) {
        return (
          arguments.length &&
            ((W = e || 0), (D = (W && +u.speed) || 1), b.scrubDuration(e)),
          b.getTween() ? b.getTween().duration() : 0
        );
      }),
      b.getTween() && (b.getTween().vars.ease = u.ease || d),
      (this.scrollTrigger = b),
      u.effects &&
        this.effects(
          !0 === u.effects
            ? "[data-" + q + "speed], [data-" + q + "lag]"
            : u.effects,
          { effectsPadding: u.effectsPadding }
        ),
      u.sections &&
        this.sections(!0 === u.sections ? "[data-section]" : u.sections),
      he.forEach((e) => {
        (e.vars.scroller = v), e.revert(!1, !0), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!k !== e &&
              (e
                ? (b.getTween() && b.getTween().pause(),
                  V(-Y / D),
                  G.reset(),
                  (C = l.normalizeScroll()),
                  C && C.disable(),
                  (k = l.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: () => ee(-Y),
                  })),
                  (k.nested = g(s, "wheel,touch,scroll", !0, !1 !== t)))
                : (k.nested.kill(),
                  k.kill(),
                  (k = 0),
                  C && C.enable(),
                  (b.progress = (-Y / D - b.start) / (b.end - b.start)),
                  Z(b))),
            this)
          : !!k;
      }),
      (this.kill = this.revert =
        () => {
          this.paused(!1), Z(b), b.kill();
          let e = (T || []).concat(x || []),
            t = e.length;
          for (; t--; ) e[t].kill();
          l.scrollerProxy(v),
            l.removeEventListener("killAll", ie),
            l.removeEventListener("refresh", se),
            (v.style.cssText = R),
            (m.style.cssText = P);
          let o = l.defaults({});
          o && o.scroller === v && l.defaults({ scroller: r }),
            this.normalizer && l.normalizeScroll(!1),
            clearInterval(E),
            (c = null),
            te && te.disconnect(),
            i.style.removeProperty("height"),
            r.removeEventListener("focusin", re);
        }),
      (this.refresh = (e, t) => b.refresh(e, t)),
      I &&
        (this.normalizer = l.normalizeScroll(
          !0 === I ? { debounce: !0, content: !W && m } : I
        )),
      l.config(u),
      "overscrollBehavior" in r.getComputedStyle(i) &&
        e.set([i, s], { overscrollBehavior: "none" }),
      "scrollBehavior" in r.getComputedStyle(i) &&
        e.set([i, s], { scrollBehavior: "auto" }),
      r.addEventListener("focusin", re),
      (E = setInterval(J, 250)),
      "loading" === o.readyState || requestAnimationFrame(() => l.refresh());
  }
  get progress() {
    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
  }
  static register(v) {
    return (
      t ||
        ((e = v || m()),
        u() &&
          window.document &&
          ((r = window), (o = document), (s = o.documentElement), (i = o.body)),
        e &&
          ((n = e.utils.toArray),
          (a = e.utils.clamp),
          (d = e.parseEase("expo")),
          (f = e.core.context || function () {}),
          (p = e
            .delayedCall(0.2, () => l.isRefreshing || (c && c.refresh()))
            .pause()),
          (l = e.core.globals().ScrollTrigger),
          e.core.globals("ScrollSmoother", S),
          i &&
            l &&
            ((h = l.core._getVelocityProp),
            (g = l.core._inputObserver),
            (S.refresh = l.refresh),
            (t = 1)))),
      t
    );
  }
}
(S.version = "3.11.5"),
  (S.create = (e) =>
    c && e && c.content() === n(e.content)[0] ? c : new S(e)),
  (S.get = () => c),
  m() && e.registerPlugin(S);
export default S;
export { S as ScrollSmoother };
