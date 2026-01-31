(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8898],
  {
    6654: (e, n, t) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = t(12115);
      function r(e, n) {
        let t = (0, i.useRef)(null),
          r = (0, i.useRef)(null);
        return (0, i.useCallback)(
          (i) => {
            if (null === i) {
              let e = t.current;
              e && ((t.current = null), e());
              let n = r.current;
              n && ((r.current = null), n());
            } else e && (t.current = s(e, i)), n && (r.current = s(n, i));
          },
          [e, n]
        );
      }
      function s(e, n) {
        if ("function" != typeof e)
          return (
            (e.current = n),
            () => {
              e.current = null;
            }
          );
        {
          let t = e(n);
          return "function" == typeof t ? t : () => e(null);
        }
      }
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
    34932: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => c });
      var i = t(95155),
        r = t(54581),
        s = t(71116),
        a = t(36545),
        o = t(3096),
        l = t(66766),
        d = t(59822);
      function c() {
        return (0, i.jsxs)(r.default, {
          sx: { backgroundColor: "#1b1b1d" },
          children: [
            (0, i.jsx)(r.default, {
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
              children: (0, i.jsx)(r.default, {
                sx: {
                  position: "relative",
                  maxWidth: "900px !important",
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
                children: (0, i.jsx)(r.default, {
                  sx: {
                    margin: { md: "1rem", xs: "1.4rem" },
                    pt: { md: "8rem", xs: "7rem" },
                    pb: { md: "4rem", xs: "1rem" },
                    width: "100%",
                    position: "relative",
                  },
                  children: (0, i.jsxs)(r.default, {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      zIndex: 0,
                    },
                    children: [
                      (0, i.jsx)(s.default, {
                        color: "#eee",
                        fontFamily: d.Tv.style.fontFamily,
                        fontWeight: "650",
                        fontStyle: "normal",
                        fontSize: { md: "36px", xs: "33px" },
                        letterSpacing: "-0.4px",
                        lineHeight: "1.2",
                        mb: "1rem",
                        zIndex: "1",
                        children: "Team",
                      }),
                      (0, i.jsxs)(s.default, {
                        color: "#eee",
                        fontFamily: d.Tv.style.fontFamily,
                        fontWeight: "370",
                        fontStyle: "normal",
                        fontSize: { md: "17px", xs: "15.5px" },
                        letterSpacing: "-0.1px",
                        lineHeight: { md: "1.3", xs: "1.5" },
                        zIndex: "1",
                        children: [
                          "Our team is made up of experienced professionals with a passion for algorithmic trading and software development. We're driven by the pursuit of excellence in trading system design and engineering.",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          "We strive to push the boundaries of what’s possible in the world of algorithmic trading. Our collective skills and experience have enabled us to create solutions that are not only robust but also highly customizable and adaptable to the evolving needs of traders.",
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, i.jsxs)(u, {
              name: "Chris Sellers",
              position: "Founder and Chief Executive Officer",
              image: "ceo",
              children: [
                "Chris has worked as an engineering manager for a FinTech market data provider startup and lead developer for an algorithmic trading firm. Drawing on over a decade of experience with algorithmic trading, system design for complex environments and software engineering.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "Chris brings a unique perspective to the team, stemming from his unconventional background as an airline pilot with a deep interest in computers.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "Although these fields are seemingly unrelated, Chris integrates the values he gained as a pilot into his role within the finance industry.",
              ],
            }),
            (0, i.jsxs)(u, {
              name: "Filip Macek",
              position: "Software Engineer",
              image: "se",
              children: [
                "Filip is a software engineer with a strong background in mathematics and finance, bringing a wealth of professional experience and a deep passion for building distributed and highly concurrent systems in the networking and financial industries.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "Whether orchestrating complex trading platforms or optimizing backend infrastructure, he thrives on turning challenging problems into elegant solutions.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "With years of hands-on experience designing trading algorithms, strategies, and quantitative systems, Filip combines creativity and technical expertise, always eager to push the boundaries of what's possible.",
              ],
            }),
            (0, i.jsxs)(u, {
              name: "Ishan Bhanuka",
              position: "Software Engineer",
              image: "engineer",
              children: [
                "Ishan has worked as an engineer and consultant across many projects ranging from web servers and file systems to big data platforms and cloud native applications.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "He has deep experience building high performance systems without compromising on correctness and maintainability.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "Ishan has earned a bachelor's and master's degree in computer science with a special focus on programming languages. His background in compilers and type systems research informs many of his design choices.",
              ],
            }),
            (0, i.jsxs)(u, {
              name: "Pushkar Mishra",
              position: "Software Engineer",
              image: "pushkar-mishra",
              children: [
                "Pushkar is a software engineer specializing in systems programming and financial technology. With a passion for open-source technologies, he has worked on complex projects focused on performance-critical systems and cross-language integrations.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "His extensive work, from building distributed tracing systems to concurrent proxy database servers, showcases his depth in building robust software solutions.",
                (0, i.jsx)("br", {}),
                (0, i.jsx)("br", {}),
                "Currently pursuing engineering at BITS Pilani, he brings together systems-level expertise and practical experience in performance-oriented technologies to tackle complex financial infrastructure challenges.",
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { name: n, position: t, image: c, children: u } = e,
          [f, m] = (0, o.useInView)({ triggerOnce: !0 });
        return (0, i.jsx)(r.default, {
          sx: {
            justifyContent: "center",
            width: "100%",
            display: "flex",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#1b1b1d",
          },
          children: (0, i.jsx)(r.default, {
            sx: {
              maxWidth: "1100px !important",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              zIndex: 2,
            },
            children: (0, i.jsx)(r.default, {
              ref: f,
              sx: {
                margin: { md: "1rem", xs: "1.4rem" },
                pt: { md: "3rem", xs: "2rem" },
                pb: { md: "2rem", xs: "2rem" },
                width: "100%",
                position: "relative",
              },
              children: (0, i.jsx)(a.P.div, {
                initial: { opacity: 0, y: 100 },
                animate: m ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                children: (0, i.jsxs)(r.default, {
                  sx: {
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 10,
                  },
                  children: [
                    (0, i.jsxs)(r.default, {
                      sx: {
                        flexBasis: { md: "320px" },
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      },
                      children: [
                        (0, i.jsx)(l.default, {
                          priority: !0,
                          src: "/team/".concat(c, ".jpg"),
                          width: 320,
                          height: 320,
                          alt: n,
                          style: {
                            borderRadius: "15px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            marginBottom: "1.3rem",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                            pointerEvents: "none",
                            WebkitUserDrag: "none",
                            MozUserSelect: "none",
                          },
                          draggable: !1,
                        }),
                        (0, i.jsx)(s.default, {
                          color: "#FFF",
                          fontFamily: d.Tv.style.fontFamily,
                          fontWeight: "550",
                          fontStyle: "normal",
                          fontSize: { md: "24px", xs: "21px" },
                          letterSpacing: "-0.2px",
                          lineHeight: "0.9",
                          mb: "0.5rem",
                          children: n,
                        }),
                        (0, i.jsx)(s.default, {
                          color: "#2be6e0",
                          fontFamily: d.Tv.style.fontFamily,
                          fontWeight: "400",
                          fontStyle: "normal",
                          fontSize: { md: "17px", xs: "16px" },
                          letterSpacing: "-0.1px",
                          lineHeight: "1.2",
                          mb: { xs: "0.5rem", md: 0 },
                          children: t,
                        }),
                      ],
                    }),
                    (0, i.jsx)(r.default, {
                      sx: { display: "flex", alignItems: "center" },
                      children: (0, i.jsx)(s.default, {
                        color: "#FFF",
                        fontFamily: d.Tv.style.fontFamily,
                        fontWeight: "350",
                        fontStyle: "normal",
                        fontSize: { md: "17px", xs: "15.5px" },
                        letterSpacing: "-0.1px",
                        lineHeight: { md: "1.3", xs: "1.5" },
                        mb: "1rem",
                        children: u,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    59822: (e, n, t) => {
      "use strict";
      t.d(n, { GC: () => o.a, H2: () => f, HM: () => u.a, Tv: () => d.a });
      var i = t(95155),
        r = t(54581),
        s = t(71116),
        a = t(76917),
        o = t.n(a),
        l = t(7810),
        d = t.n(l),
        c = t(41885),
        u = t.n(c);
      function f(e) {
        let { children: n, color: t } = e;
        return (0, i.jsx)(r.default, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: "5rem", xs: "3rem" },
          },
          children: (0, i.jsx)(s.default, {
            color: t || "#EEEEEE",
            fontFamily: d().style.fontFamily,
            fontWeight: "650",
            fontStyle: "normal",
            fontSize: { md: "40px", xs: "2rem" },
            letterSpacing: "-0.3px",
            lineHeight: "1.2",
            children: n,
          }),
        });
      }
    },
    97786: (e, n, t) => {
      Promise.resolve().then(t.bind(t, 34932));
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [5320, 4581, 5875, 4200, 6766, 8441, 1684, 7358], () => n(97786)),
      (_N_E = e.O());
  },
]);
