(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3831],
  {
    15933: (t, e, n) => {
      "use strict";
      function i(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      n.d(e, { _: () => i });
    },
    16324: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => o }), n(12115);
      var i = n(69239),
        r = n(61870),
        a = n(54107);
      function o() {
        let t = (0, i.A)(r.A);
        return t[a.A] || t;
      }
    },
    17775: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => A });
      var i = n(15933),
        r = n(12115),
        a = n(52596),
        o = n(17472),
        s = n(14391),
        l = n(13380),
        d = n(75955),
        c = n(40680),
        h = n(77856),
        u = n(55170),
        x = n(90870);
      function p(t) {
        return (0, x.Ay)("MuiSkeleton", t);
      }
      (0, u.A)("MuiSkeleton", [
        "root",
        "text",
        "rectangular",
        "rounded",
        "circular",
        "pulse",
        "wave",
        "withChildren",
        "fitContent",
        "heightAuto",
      ]);
      var f = n(95155);
      function m() {
        let t = (0, i._)([
          "\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (m = function () {
            return t;
          }),
          t
        );
      }
      function g() {
        let t = (0, i._)([
          "\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n",
        ]);
        return (
          (g = function () {
            return t;
          }),
          t
        );
      }
      function b() {
        let t = (0, i._)([
          "\n        animation: ",
          " 2s ease-in-out 0.5s infinite;\n      ",
        ]);
        return (
          (b = function () {
            return t;
          }),
          t
        );
      }
      function y() {
        let t = (0, i._)([
          "\n        &::after {\n          animation: ",
          " 2s linear 0.5s infinite;\n        }\n      ",
        ]);
        return (
          (y = function () {
            return t;
          }),
          t
        );
      }
      let v = (t) => {
          let {
            classes: e,
            variant: n,
            animation: i,
            hasChildren: r,
            width: a,
            height: s,
          } = t;
          return (0, o.A)(
            {
              root: [
                "root",
                n,
                i,
                r && "withChildren",
                r && !a && "fitContent",
                r && !s && "heightAuto",
              ],
            },
            p,
            e
          );
        },
        j = (0, l.i7)(m()),
        w = (0, l.i7)(g()),
        C = "string" != typeof j ? (0, l.AH)(b(), j) : null,
        S = "string" != typeof w ? (0, l.AH)(y(), w) : null,
        k = (0, d.Ay)("span", {
          name: "MuiSkeleton",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: n } = t;
            return [
              e.root,
              e[n.variant],
              !1 !== n.animation && e[n.animation],
              n.hasChildren && e.withChildren,
              n.hasChildren && !n.width && e.fitContent,
              n.hasChildren && !n.height && e.heightAuto,
            ];
          },
        })(
          (0, c.A)((t) => {
            let { theme: e } = t,
              n =
                String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1] ||
                "px",
              i = parseFloat(e.shape.borderRadius);
            return {
              display: "block",
              backgroundColor: e.vars
                ? e.vars.palette.Skeleton.bg
                : (0, s.X4)(
                    e.palette.text.primary,
                    "light" === e.palette.mode ? 0.11 : 0.13
                  ),
              height: "1.2em",
              variants: [
                {
                  props: { variant: "text" },
                  style: {
                    marginTop: 0,
                    marginBottom: 0,
                    height: "auto",
                    transformOrigin: "0 55%",
                    transform: "scale(1, 0.60)",
                    borderRadius: ""
                      .concat(i)
                      .concat(n, "/")
                      .concat(Math.round((i / 0.6) * 10) / 10)
                      .concat(n),
                    "&:empty:before": { content: '"\\00a0"' },
                  },
                },
                {
                  props: { variant: "circular" },
                  style: { borderRadius: "50%" },
                },
                {
                  props: { variant: "rounded" },
                  style: { borderRadius: (e.vars || e).shape.borderRadius },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return e.hasChildren;
                  },
                  style: { "& > *": { visibility: "hidden" } },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return e.hasChildren && !e.width;
                  },
                  style: { maxWidth: "fit-content" },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return e.hasChildren && !e.height;
                  },
                  style: { height: "auto" },
                },
                {
                  props: { animation: "pulse" },
                  style: C || {
                    animation: "".concat(j, " 2s ease-in-out 0.5s infinite"),
                  },
                },
                {
                  props: { animation: "wave" },
                  style: {
                    position: "relative",
                    overflow: "hidden",
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    "&::after": {
                      background:
                        "linear-gradient(\n                90deg,\n                transparent,\n                ".concat(
                          (e.vars || e).palette.action.hover,
                          ",\n                transparent\n              )"
                        ),
                      content: '""',
                      position: "absolute",
                      transform: "translateX(-100%)",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                    },
                  },
                },
                {
                  props: { animation: "wave" },
                  style: S || {
                    "&::after": {
                      animation: "".concat(w, " 2s linear 0.5s infinite"),
                    },
                  },
                },
              ],
            };
          })
        ),
        A = r.forwardRef(function (t, e) {
          let n = (0, h.b)({ props: t, name: "MuiSkeleton" }),
            {
              animation: i = "pulse",
              className: r,
              component: o = "span",
              height: s,
              style: l,
              variant: d = "text",
              width: c,
              ...u
            } = n,
            x = {
              ...n,
              animation: i,
              component: o,
              variant: d,
              hasChildren: !!u.children,
            },
            p = v(x);
          return (0,
          f.jsx)(k, { as: o, ref: e, className: (0, a.A)(p.root, r), ownerState: x, ...u, style: { width: c, height: s, ...l } });
        });
    },
    35663: (t, e, n) => {
      Promise.resolve().then(n.bind(n, 51491));
    },
    51491: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => g });
      var i = n(95155),
        r = n(12115),
        a = n(54581),
        o = n(71116),
        s = n(17775),
        l = n(91468),
        d = n(36545),
        c = n(3096),
        h = n(66766),
        u = n(6874),
        x = n.n(u),
        p = n(59822);
      function f(t) {
        let { slug: e, title: n, date: r, description: s, thumbnailUrl: l } = t,
          [u, f] = (0, c.useInView)({ triggerOnce: !0 }),
          m = l || "/preview.png";
        return (
          (m = m.startsWith(".") ? m.slice(1) : m),
          (0, i.jsx)(a.default, {
            sx: { zIndex: 1 },
            ref: u,
            children: (0, i.jsx)(d.P.div, {
              initial: { opacity: 0, y: 0, x: -27 },
              animate: f ? { opacity: 1, y: 0, x: 0 } : {},
              transition: { duration: 1 },
              children: (0, i.jsx)(x(), {
                href: "/blog".concat(e),
                children: (0, i.jsxs)(a.default, {
                  sx: {
                    borderRadius: "15px",
                    overflow: "hidden",
                    backgroundColor: "#2b2b2b",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)" },
                  },
                  children: [
                    (0, i.jsx)(a.default, {
                      sx: {
                        width: "100%",
                        height: "150px",
                        overflow: "hidden",
                      },
                      children: (0, i.jsx)(h.default, {
                        src: m,
                        alt: n,
                        width: 400,
                        height: 150,
                      }),
                    }),
                    (0, i.jsxs)(a.default, {
                      sx: { padding: "2rem" },
                      children: [
                        (0, i.jsx)(o.default, {
                          color: "#FFF",
                          fontFamily: p.Tv.style.fontFamily,
                          fontWeight: "600",
                          fontSize: { md: "20px", xs: "18px" },
                          letterSpacing: "-0.2px",
                          lineHeight: "0.9",
                          mb: "1rem",
                          children: n,
                        }),
                        (0, i.jsx)(o.default, {
                          color: "#FFF",
                          fontFamily: p.Tv.style.fontFamily,
                          fontWeight: "350",
                          fontSize: { md: "14px", xs: "13px" },
                          letterSpacing: "-0.2px",
                          lineHeight: { md: "1.3", xs: "1.5" },
                          mb: "1.5rem",
                          children: s,
                        }),
                        (0, i.jsx)(o.default, {
                          color: "#2be6e0",
                          fontFamily: p.Tv.style.fontFamily,
                          fontWeight: "500",
                          fontSize: { md: "13px", xs: "16px" },
                          letterSpacing: "-0.1px",
                          lineHeight: "1.2",
                          mb: "0.5rem",
                          align: "left",
                          children: r,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      function m() {
        return (0, i.jsx)(a.default, {
          sx: { zIndex: 1 },
          children: (0, i.jsxs)(a.default, {
            sx: {
              borderRadius: "15px",
              overflow: "hidden",
              backgroundColor: "#2b2b2b",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            children: [
              (0, i.jsx)(s.A, {
                variant: "rectangular",
                animation: "wave",
                width: "100%",
                height: 150,
              }),
              (0, i.jsxs)(a.default, {
                sx: { padding: "2rem" },
                children: [
                  (0, i.jsx)(s.A, {
                    variant: "text",
                    width: "80%",
                    height: 24,
                    sx: { mb: 1 },
                  }),
                  (0, i.jsx)(s.A, {
                    variant: "text",
                    width: "100%",
                    height: 16,
                    sx: { mb: 0.5 },
                  }),
                  (0, i.jsx)(s.A, {
                    variant: "text",
                    width: "100%",
                    height: 16,
                    sx: { mb: 0.5 },
                  }),
                  (0, i.jsx)(s.A, {
                    variant: "text",
                    width: "60%",
                    height: 16,
                    sx: { mb: 1.5 },
                  }),
                  (0, i.jsx)(s.A, {
                    variant: "text",
                    width: "30%",
                    height: 14,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function g() {
        let [t, e] = (0, r.useState)([]),
          [n, s] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            (async function () {
              try {
                // DISABLED: Data transfer blocked
                // let t = await fetch("/api/blog-posts"),
                //   n = await t.json();
                // e(n);
                e([]); // Return empty array instead
              } catch (t) {
                console.error("Failed to fetch blog posts:", t);
              } finally {
                s(!1);
              }
            })();
          }, []),
          (0, i.jsxs)(a.default, {
            sx: { backgroundColor: "#1b1b1d" },
            children: [
              (0, i.jsx)(a.default, {
                sx: {
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                  zIndex: 1,
                  borderRadius: "30px",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                },
                children: (0, i.jsx)(a.default, {
                  sx: {
                    position: "relative",
                    maxWidth: "1000px !important",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    "::before": {
                      content: '""',
                      position: "absolute",
                      width: "94%",
                      height: "50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      opacity: "0.8",
                      top: "20%",
                      background:
                        "linear-gradient(88.9deg, rgba(32, 69, 85, 1) 11.32%, rgba(0, 207, 190, 0.4232) 99.21%)",
                      filter: "blur(89.5px)",
                      zIndex: 0,
                      borderRadius: "341px",
                    },
                  },
                  children: (0, i.jsx)(a.default, {
                    sx: {
                      margin: { md: "1rem", xs: "1.4rem" },
                      pt: { md: "8rem", xs: "7rem" },
                      pb: { md: "2rem", xs: "1rem" },
                      width: "100%",
                      position: "relative",
                    },
                    children: (0, i.jsxs)(a.default, {
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        zIndex: 0,
                      },
                      children: [
                        (0, i.jsx)(o.default, {
                          color: "#eee",
                          fontFamily: p.Tv.style.fontFamily,
                          fontWeight: "650",
                          fontSize: { md: "36px", xs: "33px" },
                          letterSpacing: "-0.4px",
                          lineHeight: "1.2",
                          mb: "1rem",
                          zIndex: "1",
                          marginBottom: "50px",
                          children: "Posei Trader Blog",
                        }),
                        (0, i.jsx)(a.default, {
                          sx: {
                            width: "100%",
                            maxWidth: "700px",
                            margin: "0 auto 1.5rem auto",
                            fontFamily: '"Inter", "IBM Plex Sans", Arial, sans-serif',
                          },
                          children: (0, i.jsxs)("div", {
                            className: "blog-posts",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "post",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "post-content",
                                    children: [
                                      (0, i.jsx)("a", {
                                        href: "Getting_Started.html",
                                        children: "Getting Started with PoseiTrader",
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "date",
                                        children: "2025-07-15",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("a", {
                                    href: "Getting_Started.html",
                                    className: "read-more-btn",
                                    children: "Read more",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "post",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "post-content",
                                    children: [
                                      (0, i.jsx)("a", {
                                        href: "Backtesting_vs_Live_Trading.html",
                                        children: "Backtesting vs. Live Trading",
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "date",
                                        children: "2025-07-15",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("a", {
                                    href: "Backtesting_vs_Live_Trading.html",
                                    className: "read-more-btn",
                                    children: "Read more",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "post",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "post-content",
                                    children: [
                                      (0, i.jsx)("a", {
                                        href: "Practical_Insights_for_Real_Trading.html",
                                        children: "Practical Insights for Real Trading",
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "date",
                                        children: "2025-07-15",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("a", {
                                    href: "Practical_Insights_for_Real_Trading.html",
                                    className: "read-more-btn",
                                    children: "Read more",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsx)(a.default, {
                sx: {
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                  zIndex: 1,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  borderRadius: "40px",
                  backgroundColor: "#1B1B1D",
                },
                children: (0, i.jsx)(a.default, {
                  sx: {
                    maxWidth: "1000px !important",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  },
                  children: (0, i.jsx)(a.default, {
                    sx: {
                      margin: "1.3rem",
                      zIndex: 2,
                      pt: { md: "3rem", xs: "3rem" },
                      pb: { md: "2rem", xs: "2rem" },
                      width: "100%",
                      position: "relative",
                    },
                    children: (0, i.jsx)(a.default, {
                      sx: { zIndex: 1 },
                      children: (0, i.jsx)(l.default, {
                        container: !0,
                        spacing: 4,
                        sx: {
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                          },
                          gap: 4,
                        },
                        children: n
                          ? Array.from(Array(6)).map((t, e) =>
                              (0, i.jsx)(m, {}, e)
                            )
                          : t.map((t) =>
                              (0, i.jsx)(
                                f,
                                {
                                  slug: t.slug,
                                  title: t.meta.title,
                                  date: t.meta.date,
                                  description: t.meta.description,
                                  thumbnailUrl: t.meta.thumbnail,
                                },
                                t.slug
                              )
                            ),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    59822: (t, e, n) => {
      "use strict";
      n.d(e, { GC: () => s.a, H2: () => u, HM: () => h.a, Tv: () => d.a });
      var i = n(95155),
        r = n(54581),
        a = n(71116),
        o = n(76917),
        s = n.n(o),
        l = n(7810),
        d = n.n(l),
        c = n(41885),
        h = n.n(c);
      function u(t) {
        let { children: e, color: n } = t;
        return (0, i.jsx)(r.default, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: "5rem", xs: "3rem" },
          },
          children: (0, i.jsx)(a.default, {
            color: n || "#EEEEEE",
            fontFamily: d().style.fontFamily,
            fontWeight: "650",
            fontStyle: "normal",
            fontSize: { md: "40px", xs: "2rem" },
            letterSpacing: "-0.3px",
            lineHeight: "1.2",
            children: e,
          }),
        });
      }
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [5320, 4581, 5875, 4200, 6874, 6766, 1468, 8441, 1684, 7358], () =>
      e(35663)
    ),
      (_N_E = t.O());
  },
]);
