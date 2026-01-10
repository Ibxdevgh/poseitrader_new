(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    22300: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 47078));
    },
    47078: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => et });
      var n = i(95155),
        r = i(54581),
        a = i(71116),
        s = i(91468),
        o = i(17775),
        l = i(29911),
        d = i(59432),
        c = i(59948),
        x = i(23671),
        p = i(12115),
        u = i(6874),
        m = i.n(u),
        f = i(36545),
        g = i(97178),
        h = i(3096),
        y = i(59822);
      async function b() {
        // DISABLED: Data transfer blocked
        // let e = await fetch(
        //   "https://api.github.com/repos/nautechsystems/posei_trader"
        // );
        // if (!e.ok) console.log("Failed to fetch data");
        // return e.json();
        return { stargazers_count: 0 };
      }
      async function j() {
        // DISABLED: Data transfer blocked
        // let e = await fetch("/api/downloads");
        // if (!e.ok) console.log("Failed to fetch data");
        // return e.text();
        return "";
      }
      async function v() {
        // DISABLED: Data transfer blocked
        // let e = await fetch("/api/discord");
        // if (!e.ok) console.log("Failed to fetch data");
        // return e.json();
        return { approximate_member_count: 0 };
      }
      function w() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 }),
          [i, u] = (0, p.useState)(null),
          [g, w] = (0, p.useState)(null),
          [k, C] = (0, p.useState)(null);
        return (
          (0, p.useEffect)(() => {
            (async () => {
              try {
                let [e, t, i] = await Promise.all([v(), j(), b()]),
                  n = 100 * Math.floor(e.approximate_member_count / 100);
                C(n);
                let r = t.match(/<text[^>]*>([0-9]+[a-zA-Z]+)<\/text>/),
                  a = r ? r[1].trim() : null;
                if (a) {
                  if (a.endsWith("k")) {
                    let e = parseFloat(a.slice(0, -1)),
                      t = 1e3 * e;
                    console.log("Downloads:", t), w(t);
                  } else {
                    let e = Number(a);
                    console.log("Downloads:", e), w(e);
                  }
                } else console.error("No matches found for downloads.");
                let s = 100 * Math.floor(i.stargazers_count / 100);
                u(s);
              } catch (e) {
                console.error("Error fetching data:", e);
              }
            })();
          }, []),
          (0, n.jsxs)(r.default, {
            sx: {
              justifyContent: "center",
              position: "relative",
              width: "100%",
              display: "flex",
              zIndex: 2,
              backgroundImage: "url(2.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "transparent",
              minHeight: "fit-content",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 0,
                pointerEvents: "none",
              },
            },
            children: [
              (0, n.jsx)(r.default, {
                sx: {
                  display: "none",
                },
              }),
              (0, n.jsx)(r.default, {
                sx: {
                  maxWidth: "1200px !important",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  zIndex: 10,
                  position: "relative",
                },
                children: (0, n.jsxs)(r.default, {
                  sx: {
                    mt: { md: "12rem", xs: "8rem" },
                    mb: { md: "6.5rem", xs: "5rem" },
                    width: "100%",
                    p: "1rem",
                  },
                  children: [
                    (0, n.jsx)(r.default, {
                      sx: { mb: "0.5rem", position: "relative", zIndex: 10 },
                      children: (0, n.jsxs)(a.default, {
                        color: "#b8b8c0",
                        fontFamily: y.GC.style.fontFamily,
                        fontWeight: "500",
                        fontSize: { md: "3.7rem", xs: "3rem" },
                        lineHeight: "1.1",
                        align: "center",
                        children: [
                          "The fastest, most reliable",
                          (0, n.jsx)("br", {}),
                          "open-source trading platform",
                        ],
                      }),
                    }),
                    (0, n.jsx)(a.default, {
                      color: "#a0a0a8",
                      fontFamily: y.Tv.style.fontFamily,
                      fontSize: { md: "1.1rem", xs: "1.2rem" },
                      mt: { md: "2.5rem", xs: "1rem" },
                      maxWidth: { md: "68%", xs: "100%" },
                      fontWeight: "350",
                      lineHeight: "1.4",
                      align: "center",
                      m: "0 auto",
                      position: "relative",
                      zIndex: 10,
                      children:
                        "Trade any asset class in one platform. Event-driven backtests on any historical data. Live trading with no code changes.",
                    }),
                    (0, n.jsx)(r.default, {
                      ref: e,
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { md: "row", xs: "column" },
                        width: "100%",
                        mt: "3.5rem",
                        gap: "1.5rem",
                        position: "relative",
                        zIndex: 10,
                      },
                      children: (0, n.jsx)(f.P.div, {
                        initial: { opacity: 0, y: 100 },
                        animate: t ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.8 },
                        children: (0, n.jsx)(m(), {
                          href: "/getting_started",
                          children: (0, n.jsxs)(r.default, {
                            sx: {
                              backgroundImage:
                                "linear-gradient(0deg, rgba(0,205,178,0.24) 10%, rgba(47,173,215,1) 100%)",
                              borderRadius: "50px",
                              padding: "13px 25px",
                              transition: "all 0.3s",
                              display: "flex",
                              alignItems: "center",
                              animation: "gradientAnimation 9s ease infinite",
                              border: "2px solid #2f3d50",
                              "& svg": { color: "#EEEEEE" },
                              "&:hover": {
                                cursor: "pointer",
                                boxShadow: "0 0 20px rgba(47,172,214,0.5)",
                              },
                              "&:hover svg": { transform: "translateX(5px)" },
                              svg: { transition: "all 0.3s" },
                              "@keyframes gradientAnimation": {
                                "0%": { backgroundPosition: "0% 50%" },
                                "50%": { backgroundPosition: "100% 50%" },
                                "100%": { backgroundPosition: "0% 50%" },
                              },
                            },
                            children: [
                              (0, n.jsx)(a.default, {
                                color: "#EEEEEE",
                                fontSize: "1.1rem",
                                fontWeight: "300",
                                fontFamily: y.HM.style.fontFamily,
                                children: "Get Started",
                              }),
                              (0, n.jsx)(x.TEl, { fontSize: "2rem" }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      let k = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      function S(e) {
        let { children: t, description: i, data: s } = e,
          [o, l] = (0, h.useInView)({ triggerOnce: !0 }),
          [d, c] = (0, p.useState)(0),
          x = (0, g.z)(0, { bounce: 0, duration: 500 });
        return (
          (0, p.useEffect)(() => {
            let e = x.on("change", (e) => {
              let t = Math.round(e);
              c(() => k(Math.floor(t)));
            });
            return x.set(Math.floor(s)), () => e();
          }, [x, s]),
          (0, n.jsx)(r.default, {
            sx: {
              backgroundImage:
                "radial-gradient(circle at 50% 0, #0f2026, #1b1d1c)",
              borderRadius: "10px",
              width: "100%",
              maxWidth: { xs: "100%", sm: "280px" },
            },
            children: (0, n.jsxs)(r.default, {
              sx: {
                height: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "0.3rem",
                alignItems: "center",
                padding: "1.3rem",
                position: "relative",
                transition: "all 0.3s",
                border: "2px solid #1e353d",
                flexDirection: "column",
                borderRadius: "10px",
              },
              children: [
                (0, n.jsx)(a.default, {
                  sx: {
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,205,178,1) 10%, rgba(47,173,215,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  },
                  fontFamily: y.Tv.style.fontFamily,
                  fontSize: { md: "2rem", xs: "1.5rem" },
                  fontWeight: "700",
                  lineHeight: "1.2",
                  transform: "all 0.3s ease",
                  children: null == t ? "".concat(d, "+") : t,
                }),
                (0, n.jsx)(a.default, {
                  color: "#B4B3B7",
                  fontSize: { md: "1rem", xs: "1rem" },
                  fontFamily: y.Tv.style.fontFamily,
                  fontWeight: "500",
                  lineHeight: "1.2",
                  children: i,
                }),
              ],
            }),
          })
        );
      }
      var C = i(66766);
      let I = [
          {
            title: "Integrate data",
            description:
              "Unlock the potential of your data. Load any custom or raw market data into Posei parquet format.",
            imageUrl: "/product_icons/product_data.svg",
          },
          {
            title: "Build strategies",
            description:
              "Discover strategies faster with a Python API. Stream up to 5 million rows per second, handling more data than available RAM.",
            imageUrl: "/product_icons/product_strategy.svg",
          },
          {
            title: "Analyze results",
            description:
              "Simulate the market with nanosecond-resolution. Realistic and accurate event-driven results you can rely on.",
            imageUrl: "/product_icons/product_analyze.svg",
          },
          {
            title: "Iterate faster",
            description:
              "Extremely fast backtests allow you to quickly iterate over a large search space of strategies and parameters.",
            imageUrl: "/product_icons/product_data.svg",
          },
          {
            title: "Trade live",
            description:
              "Launch reliable live trading operations without disruptions. Backtest-live code parity reduces implementation risks.",
            imageUrl: "/product_icons/product_live.svg",
          },
          {
            title: "Execute faster",
            description:
              "Capitalize on trading opportunities with high performance low-latency execution. Efficient Rust components and runtime.",
            imageUrl: "/product_icons/product_fast.svg",
          },
        ],
        E = (e) =>
          'url("'.concat(
            e,
            '"), linear-gradient(to right, #1b1b1d , #036e80), linear-gradient(to bottom, transparent, #1b1b1d)'
          );
      function z() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: { backgroundColor: "#1B1B1D" },
          children: (0, n.jsx)(r.default, {
            sx: {
              justifyContent: "center",
              width: "100%",
              display: "flex",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundPosition: "center",
            },
            children: (0, n.jsx)(r.default, {
              sx: {
                maxWidth: "1200px !important",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              },
              children: (0, n.jsx)(r.default, {
                sx: {
                  margin: "1rem",
                  pt: { md: "5rem", xs: "3rem" },
                  pb: { md: "4rem", xs: "2rem" },
                  width: "100%",
                  position: "relative",
                },
                children: (0, n.jsxs)(r.default, {
                  ref: e,
                  sx: { position: "relative", zIndex: 2 },
                  children: [
                    (0, n.jsx)(f.P.div, {
                      initial: { opacity: 0, y: 100 },
                      animate: t ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.8 },
                      children: (0, n.jsx)(y.H2, {
                        color: "#eeeeee",
                        children:
                          "Algorithmic trading solutions for cutting-edge firms",
                      }),
                    }),
                    (0, n.jsx)(r.default, {
                      sx: {
                        display: "flex",
                        justifyContent: { md: "space-between", xs: "center" },
                        alignItems: "flex-start",
                        width: "100%",
                        mb: { md: "3rem", xs: "1rem" },
                      },
                      children: (0, n.jsx)(s.default, {
                        container: !0,
                        spacing: { md: 5, xs: 1 },
                        sx: {
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                          },
                          gap: { xs: 1, md: 5 },
                        },
                        children: I.map((e, t) =>
                          (0, n.jsx)(
                            F,
                            {
                              title: e.title,
                              description: e.description,
                              imageUrl: e.imageUrl,
                            },
                            t
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function F(e) {
        let { title: t, description: i, imageUrl: s } = e,
          [o, l] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          ref: o,
          children: (0, n.jsx)(f.P.div, {
            initial: { opacity: 0, y: 100 },
            animate: l ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8 },
            children: (0, n.jsxs)(r.default, {
              sx: {
                position: "relative",
                minHeight: { md: "280px", xs: "220px" },
                width: "100%",
                padding: "1.3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                border: "2px solid #1e353d",
                gap: "1rem",
                borderRadius: "10px",
                backgroundImage:
                  "linear-gradient(to right, #2e2e2e, #1b1b1d), linear-gradient(to bottom, transparent, #1b1b1d)",
                cursor: "default",
                overflow: "hidden",
              },
              children: [
                (0, n.jsx)(r.default, {
                  sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    opacity: 0.27,
                    backgroundImage: E(s),
                    backgroundBlendMode: "overlay, multiply, normal",
                    backgroundPosition: "right -90% center, 0 0, 0 0",
                    backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                    backgroundSize: "70% auto, 100% 100%, 100% 100%",
                  },
                }),
                (0, n.jsxs)(r.default, {
                  sx: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                    flexDirection: "column",
                    zIndex: 1,
                  },
                  children: [
                    (0, n.jsx)(r.default, {
                      sx: {
                        padding: "10px",
                        borderRadius: "10px",
                        boxShadow: "0 0px 45px -8px #12B8C8",
                        backgroundImage:
                          "linear-gradient(180deg, #474747 0%, #1D1D1D 100%)",
                      },
                      children: (0, n.jsx)(C.default, {
                        priority: !0,
                        src: s,
                        alt: "product_icons",
                        width: 30,
                        height: 30,
                      }),
                    }),
                    (0, n.jsx)(a.default, {
                      color: "#EEE",
                      fontSize: { md: "22px", xs: "18px" },
                      fontWeight: "600",
                      fontFamily: y.Tv.style.fontFamily,
                      lineHeight: "1.4",
                      padding: "10px 0px",
                      children: t,
                    }),
                    (0, n.jsx)(r.default, {
                      sx: { display: "flex", alignItems: "flex-end" },
                      children: (0, n.jsx)(a.default, {
                        fontFamily: y.Tv.style.fontFamily,
                        color: "#D0D0DC",
                        fontSize: { md: "15px", xs: "13px" },
                        fontWeight: "350",
                        lineHeight: "1.4",
                        children: i,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var T = i(79737);
      let P = [
        {
          title: "Crypto",
          description:
            "Trade spot, futures, derivatives, and options with normalized instrument definitions and comprehensive field availability from all venues.",
        },
        {
          title: "Futures",
          description:
            "Simulate contract activation and expiration for both traditional and crypto futures. Support for underlying assets, exchanges, lot sizes, and multipliers.",
        },
        {
          title: "Equities",
          description:
            "Simulate short-selling restrictions and manage cash versus margin limitations. Support for round and odd lots with multi-venue trading capabilities.",
        },
        {
          title: "Options",
          description:
            "Calculate and publish Greeks and signals on the internal message bus. Specific option contract instrument definitions are supported.",
        },
        {
          title: "FX",
          description:
            "Trade spot and derivatives with detailed instrument definitions, including base, quote, and settlement currencies. Simulate exchange and ECN trading environments.",
        },
        {
          title: "Betting",
          description:
            "Access sports and alternative betting markets with full order book granularity. Includes Betfair adapter for seamless integration.",
        },
      ];
      function W() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: {
            justifyContent: "center",
            width: "100%",
            display: "flex",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#1B1B1D",
          },
          children: (0, n.jsx)(r.default, {
            sx: {
              maxWidth: "1200px !important",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            },
            children: (0, n.jsx)(r.default, {
              sx: {
                pt: { md: "6rem", xs: "3rem" },
                pb: { md: "4rem", xs: "2rem" },
                p: "1rem",
                width: "100%",
                position: "relative",
              },
              children: (0, n.jsxs)(r.default, {
                ref: e,
                sx: { position: "relative", zIndex: 2 },
                children: [
                  (0, n.jsx)(f.P.div, {
                    initial: { opacity: 0, y: 100 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    children: (0, n.jsx)(y.H2, {
                      color: "#FFF",
                      children: "Trade any asset class in one platform",
                    }),
                  }),
                  (0, n.jsx)(r.default, {
                    sx: {
                      display: "flex",
                      justifyContent: { md: "space-between", xs: "center" },
                      alignItems: "flex-start",
                      width: "100%",
                      mb: "2rem",
                    },
                    children: (0, n.jsx)(s.default, {
                      container: !0,
                      spacing: { md: 3, xs: 1 },
                      sx: {
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                        },
                        gap: { xs: 1, md: 3 },
                      },
                      children: P.map((e) =>
                        (0, n.jsx)(
                          D,
                          { title: e.title, description: e.description },
                          (0, T.A)()
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function D(e) {
        let { title: t, description: i } = e,
          [s, o] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          ref: s,
          children: (0, n.jsx)(f.P.div, {
            initial: { opacity: 0, y: 100 },
            animate: o ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8 },
            children: (0, n.jsx)(r.default, {
              sx: {
                position: "relative",
                minHeight: { md: "180px", xs: "auto" },
                width: "100%",
                padding: "1.3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                borderRadius: "10px",
                backgroundImage:
                  "radial-gradient(circle at 50% 0, #0f2026, #1b1d1c)",
                transition: "all 0.3s",
                border: "2px solid #1e353d",
                cursor: "pointer",
                "&:hover": {
                  border: "2px solid #2ed2d5",
                  boxShadow: "5px 5px 20px #002520, -5px -5px 20px #002d27",
                },
              },
              children: (0, n.jsxs)(r.default, {
                sx: {
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  flexDirection: "column",
                  zIndex: 1,
                },
                children: [
                  (0, n.jsx)(a.default, {
                    color: "#EEE",
                    fontSize: { md: "22px", xs: "18px" },
                    fontWeight: "600",
                    fontFamily: y.Tv.style.fontFamily,
                    lineHeight: "1.4",
                    padding: "10px 0px",
                    children: t,
                  }),
                  (0, n.jsx)(r.default, {
                    sx: { display: "flex", alignItems: "flex-end" },
                    children: (0, n.jsx)(a.default, {
                      fontFamily: y.Tv.style.fontFamily,
                      color: "#D0D0DC",
                      fontSize: { md: "15px", xs: "13px" },
                      fontWeight: "350",
                      lineHeight: "1.4",
                      children: i,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      let B = [
        {
          title: "Complex strategies, simple solutions",
          description:
            "Easily implement complex trading strategies using simple, modular components like Clock, Cache, MessageBus, Portfolio, and Actors.",
        },
        {
          title: "Accurate timing",
          description:
            "Achieve precise time handling with our nanosecond-resolution clock, ensuring consistent alerts and timers for both backtesting and live trading environments.",
        },
        {
          title: "Fast config",
          description:
            "Leverage powerful configuration options to trade across various venues, instruments, and parameter sets without altering your strategy code.",
        },
        {
          title: "Advanced orders",
          description:
            "Utilize advanced order types and execution instructions, including post-only, reduce-only, OCO, OTO, and other contingencies.",
        },
        {
          title: "API integrations",
          description:
            "Streamline the integration of new venues and data providers. Trade across multiple markets seamlessly on a single platform.",
        },
        {
          title: "High performance",
          description:
            "Experience unparalleled performance with core components meticulously crafted in Rust, ensuring speed and reliability.",
        },
      ];
      function _() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: {
            justifyContent: "center",
            width: "100%",
            display: "flex",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#1B1B1D",
          },
          children: (0, n.jsx)(r.default, {
            sx: {
              maxWidth: "1200px !important",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            },
            children: (0, n.jsx)(r.default, {
              sx: {
                pt: { md: "6rem", xs: "3rem" },
                pb: { md: "4rem", xs: "2rem" },
                p: "1rem",
                width: "100%",
                position: "relative",
              },
              children: (0, n.jsxs)(r.default, {
                ref: e,
                sx: { position: "relative", zIndex: 2 },
                children: [
                  (0, n.jsx)(f.P.div, {
                    initial: { opacity: 0, y: 100 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    children: (0, n.jsx)(y.H2, {
                      color: "#FFF",
                      children: "Build strategies for any instrument and venue",
                    }),
                  }),
                  (0, n.jsx)(r.default, {
                    sx: {
                      display: "flex",
                      justifyContent: { md: "space-between", xs: "center" },
                      alignItems: "flex-start",
                      width: "100%",
                      mb: "2rem",
                    },
                    children: (0, n.jsx)(s.default, {
                      container: !0,
                      spacing: { md: 3, xs: 1 },
                      sx: {
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "1fr 1fr",
                          md: "1fr 1fr 1fr",
                        },
                        gap: { xs: 1, md: 3 },
                      },
                      children: B.map((e, t) =>
                        (0, n.jsx)(
                          O,
                          { title: e.title, description: e.description },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function O(e) {
        let { title: t, description: i } = e,
          [s, o] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          ref: s,
          children: (0, n.jsx)(f.P.div, {
            initial: { opacity: 0, y: 100 },
            animate: o ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8 },
            children: (0, n.jsx)(r.default, {
              sx: {
                position: "relative",
                minHeight: { md: "193px", xs: "auto" },
                zIndex: 1,
                width: "100%",
                padding: "1.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                borderRadius: "10px",
                transition: "all 0.3s",
                border: "2px solid #1e353d",
                backgroundImage:
                  "radial-gradient(circle at 50% 0, #0f2026, #1b1d1c)",
                overflow: "hidden",
                "&:hover": {
                  border: "2px solid #2ed2d5",
                  boxShadow: "5px 5px 20px #002520, -5px -5px 20px #002d27",
                },
              },
              children: (0, n.jsxs)(r.default, {
                sx: {
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  flexDirection: "column",
                  zIndex: 1,
                  height: "100%",
                  overflow: "hidden",
                },
                children: [
                  (0, n.jsx)(a.default, {
                    color: "#EEE",
                    fontSize: { md: "21px", xs: "18px" },
                    fontWeight: "600",
                    fontFamily: y.Tv.style.fontFamily,
                    lineHeight: "1.4",
                    padding: "10px 0px",
                    children: t,
                  }),
                  (0, n.jsx)(r.default, {
                    sx: { display: "flex", alignItems: "flex-end" },
                    children: (0, n.jsx)(a.default, {
                      fontFamily: y.Tv.style.fontFamily,
                      color: "#D0D0DC",
                      fontSize: { md: "15px", xs: "13px" },
                      fontWeight: "350",
                      lineHeight: "1.4",
                      children: i,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function R() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: { backgroundColor: "#1B1B1D" },
          children: (0, n.jsxs)(r.default, {
            sx: {
              justifyContent: "center",
              width: "100%",
              position: "relative",
              display: "flex",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundPosition: "center",
            },
            children: [
              (0, n.jsx)(r.default, {
                sx: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "25%",
                  opacity: 0.9,
                  zIndex: 0,
                  backgroundImage: "url(mid-gradient.svg)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: "scale(2)",
                  transformOrigin: "center",
                },
              }),
              (0, n.jsx)(r.default, {
                sx: {
                  maxWidth: "1200px !important",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                },
                children: (0, n.jsx)(r.default, {
                  sx: {
                    margin: "1rem",
                    pt: { md: "5rem", xs: "3rem" },
                    pb: { md: "4rem", xs: "2rem" },
                    width: "100%",
                    position: "relative",
                  },
                  children: (0, n.jsxs)(r.default, {
                    ref: e,
                    sx: { position: "relative", zIndex: 2 },
                    children: [
                      (0, n.jsx)(f.P.div, {
                        initial: { opacity: 0, y: 100 },
                        animate: t ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.8 },
                        children: (0, n.jsx)(y.H2, {
                          color: "#eeeeee",
                          children:
                            "Unlimited backtesting strategies, venues and markets",
                        }),
                      }),
                      (0, n.jsx)(r.default, {
                        sx: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          mb: { md: "1.5rem", xs: "0.7rem" },
                        },
                        children: (0, n.jsx)(r.default, {
                          ref: e,
                          sx: {
                            position: "relative",
                            ml: "5px",
                            overflow: "hidden",
                          },
                          children: (0, n.jsx)(f.P.div, {
                            initial: { opacity: 0, y: 100 },
                            animate: t ? { opacity: 1, y: 0 } : {},
                            transition: { duration: 0.8 },
                            children: (0, n.jsx)(C.default, {
                              priority: !0,
                              src: "nautilus.jpg",
                              alt: "product_unlimited",
                              width: 1e3,
                              height: 1e3,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      let A = [
        {
          title: "Python code",
          description:
            "A Python API allows you to use your favourite ML/AI frameworks, or anything written in Python.",
          code: "def placeholder_function(param1, param2):\n    result = None\n\n    if param1 > param2:\n        result = param1 - param2\n    else:\n        result = param2 - param1\n\n    return result\n\nprint(placeholder_function(10, 5))",
          link: "/docs/latest/api_reference/",
          image: "Python",
        },
        {
          title: "Build any type of strategy",
          description:
            "Unlock your creativity by using customizable components to express any strategy ideas.",
          code: "def placeholder_function(param1, param2):\n    result = None\n\n    if param1 > param2:\n        result = param1 - param2\n    else:\n        result = param2 - param1\n\n    return result\n\nprint(placeholder_function(10, 5))",
          link: "/docs/latest/concepts/strategies",
          image: "Strategy",
        },
        {
          title: "Strategy configurations",
          description:
            "Simplify strategy and model reuse across instruments and venues just by changing configurations, without altering strategy code.",
          code: "def placeholder_function(param1, param2):\n    result = None\n\n    if param1 > param2:\n        result = param1 - param2\n    else:\n        result = param2 - param1\n\n    return result\n\nprint(placeholder_function(10, 5))",
          link: "/docs/latest/concepts/strategies#strategy-configuration",
          image: "Config",
        },
      ];
      function H() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: { backgroundColor: "#1b1b1d" },
          children: (0, n.jsx)(r.default, {
            sx: {
              justifyContent: "center",
              width: "100%",
              display: "flex",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundPosition: "center",
            },
            children: (0, n.jsx)(r.default, {
              sx: {
                maxWidth: "1200px !important",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              },
              children: (0, n.jsx)(r.default, {
                sx: {
                  margin: "1rem",
                  pt: { md: "5rem", xs: "3rem" },
                  pb: { md: "0rem", xs: "1rem" },
                  width: "100%",
                  position: "relative",
                },
                children: (0, n.jsxs)(r.default, {
                  ref: e,
                  sx: { position: "relative", zIndex: 2 },
                  children: [
                    (0, n.jsx)(f.P.div, {
                      initial: { opacity: 0, y: 100 },
                      animate: t ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.8 },
                      children: (0, n.jsx)(y.H2, {
                        color: "#eeeeee",
                        children:
                          "Express your strategy ideas with a clean, powerful API",
                      }),
                    }),
                    (0, n.jsx)(r.default, {
                      sx: {
                        display: "flex",
                        justifyContent: { md: "space-between", xs: "center" },
                        alignItems: "flex-start",
                        width: "100%",
                        mt: "4rem",
                        mb: { md: "4rem", xs: "1.7rem" },
                      },
                      children: (0, n.jsx)(s.default, {
                        container: !0,
                        spacing: { md: 6, xs: 2 },
                        children: A.map((e) =>
                          (0, n.jsx)(
                            U,
                            {
                              title: e.title,
                              description: e.description,
                              image: e.image,
                              code: e.code,
                              link: e.link,
                            },
                            (0, T.A)()
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function U(e) {
        let { title: t, description: i, code: s, link: o, image: l } = e,
          [d, c] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          ref: d,
          children: (0, n.jsx)(f.P.div, {
            initial: { opacity: 0, y: 100 },
            animate: c ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8 },
            children: (0, n.jsxs)(r.default, {
              sx: {
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mb: { md: "2rem", xs: "2rem" },
                gap: "1rem",
              },
              children: [
                (0, n.jsxs)(r.default, {
                  sx: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: { md: "100%", xs: "100%" },
                    height: "180px",
                    flexDirection: "column",
                    zIndex: 1,
                  },
                  children: [
                    (0, n.jsx)(a.default, {
                      color: "#eee",
                      fontSize: { md: "25px", xs: "24px" },
                      fontWeight: "600",
                      letterSpacing: "-0.2px",
                      fontFamily: y.Tv.style.fontFamily,
                      lineHeight: "1.4",
                      padding: "10px 0px",
                      children: t,
                    }),
                    (0, n.jsx)(r.default, {
                      sx: { display: "flex", alignItems: "flex-end" },
                      children: (0, n.jsx)(a.default, {
                        fontFamily: y.Tv.style.fontFamily,
                        color: "#eee",
                        fontSize: { md: "15px", xs: "15px" },
                        fontWeight: "400",
                        lineHeight: "1.4",
                        children: i,
                      }),
                    }),
                    (0, n.jsx)(r.default, {
                      sx: { width: "100%", display: "flex", mt: "1.5rem" },
                      children: (0, n.jsx)(m(), {
                        href: o,
                        target: "_blank",
                        children: (0, n.jsxs)(r.default, {
                          sx: {
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                            "& svg": { color: "#3db4bf" },
                            "&:hover": { cursor: "pointer" },
                            "&:hover svg": { transform: "translateX(5px)" },
                            svg: { transition: "all 0.3s" },
                          },
                          children: [
                            (0, n.jsx)(r.default, {
                              sx: {
                                transition: "all 0.3s",
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                "&:after": {
                                  content: '""',
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "2px",
                                  background: "#3db4bf",
                                  transform: "scaleX(0)",
                                  transformOrigin: "bottom right",
                                  transition: "transform 0.3s ease-out",
                                },
                                "&:hover:after": {
                                  transform: "scaleX(1)",
                                  transformOrigin: "bottom left",
                                },
                              },
                              children: (0, n.jsx)(a.default, {
                                fontFamily: y.Tv.style.fontFamily,
                                color: "#eee",
                                fontSize: { md: "16px", xs: "16px" },
                                fontWeight: "400",
                                lineHeight: "1.4",
                                children: "Learn More",
                              }),
                            }),
                            (0, n.jsx)(x.TEl, { fontSize: "1.4rem" }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(r.default, {
                  sx: {
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "12px",
                  },
                  children: (0, n.jsx)(C.default, {
                    src: "".concat(l, ".png"),
                    width: 630,
                    height: 300,
                    priority: !0,
                    alt: "".concat(t, " illustration"),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var N = i(95441),
        M = i(18096);
      function V() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 }),
          [i, o] = (0, p.useState)(0),
          [d, c] = (0, p.useState)(!1),
          [x, u] = (0, p.useState)(""),
          [m, g] = (0, p.useState)("1.0.0"),
          [b, j] = (0, p.useState)(!0),
          v = () => {
            let e = navigator.platform || "",
              t = navigator.userAgent || "";
            return /Win/.test(e) || /Win/.test(t)
              ? u("Windows")
              : /Mac/.test(e) || /Mac/.test(t)
              ? u("macOS")
              : /Linux/.test(e) || /Linux/.test(t)
              ? u("Linux")
              : /Android/.test(t)
              ? u("Android")
              : /iPhone|iPad|iPod/.test(t)
              ? u("iOS")
              : void u("Unknown");
          },
          w = () => {
            navigator.userAgentData
              ? navigator.userAgentData
                  .getHighEntropyValues(["platform", "platformVersion"])
                  .then((e) => {
                    u(e.platform);
                  })
                  .catch(() => {
                    v();
                  })
              : v();
          },
          k = async () => {
            // DISABLED: Data transfer blocked
            try {
              j(!0);
              // let e = await fetch("/api/version");
              // if (e.ok) {
              //   let t = await e.json();
              //   g(t.version);
              // }
              g("1.0.0"); // Use default version
            } catch (e) {
              console.error("Error fetching version:", e);
            } finally {
              j(!1);
            }
          };
        (0, p.useEffect)(() => {
          w(), k();
        }, []);
        let S = (e) => {
            navigator.clipboard.writeText(e),
              c(!0),
              setTimeout(() => c(!1), 2e3);
          },
          C = [{ tab: "Python", command: "pip install -U posei_trader" }];
        return (0, n.jsx)(r.default, {
          sx: { backgroundColor: "#1b1b1d" },
          children: (0, n.jsx)(r.default, {
            sx: {
              display: "flex",
              justifyContent: "center",
              padding: { xs: "3rem 1rem", md: "5rem 2rem" },
              maxWidth: "1400px",
              margin: "0 auto",
            },
            children: (0, n.jsx)(r.default, {
              ref: e,
              sx: { width: "100%" },
              children: (0, n.jsx)(f.P.div, {
                initial: { opacity: 0, y: 50 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6 },
                children: (0, n.jsxs)(s.default, {
                  container: !0,
                  spacing: 5,
                  children: [
                    (0, n.jsx)(s.default, {
                      size: { xs: 12, md: 5 },
                      children: (0, n.jsxs)(r.default, {
                        children: [
                          (0, n.jsx)(a.default, {
                            color: "#EEEEEE",
                            fontFamily: y.Tv.style.fontFamily,
                            fontWeight: "600",
                            fontSize: { xs: "36px", md: "40px" },
                            letterSpacing: "-0.3px",
                            mb: 3,
                            children: "Installation",
                          }),
                          (0, n.jsx)(a.default, {
                            color: "#eee",
                            fontSize: { xs: "15px", md: "17px" },
                            fontWeight: "400",
                            lineHeight: "1.6",
                            fontFamily: y.Tv.style.fontFamily,
                            mb: 4,
                            children:
                              "PoseiTrader is seamlessly integrated with Python. It can be installed in minutes on most platforms.",
                          }),
                          (0, n.jsx)(r.default, {
                            component: "a",
                            href: "/docs/latest/getting_started/installation",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            sx: {
                              display: "inline-block",
                              color: "#eee",
                              fontSize: "15px",
                              fontFamily: y.Tv.style.fontFamily,
                              textDecoration: "none",
                              border: "1px solid rgba(255,255,255,0.2)",
                              borderRadius: "50px",
                              padding: "10px 20px",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.05)",
                              },
                            },
                            children: "More installation options",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(s.default, {
                      size: { xs: 12, md: 7 },
                      children: (0, n.jsxs)(r.default, {
                        sx: {
                          backgroundColor: "#121214",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,0.1)",
                          position: "relative",
                          transition: "all 0.5s ease",
                          boxShadow: d
                            ? "0 0 75px rgba(0, 207, 190, 0.3)"
                            : "0 0 75px rgba(0, 207, 190, 0.13)",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: "0px",
                            padding: "1px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(88.9deg, rgba(32, 69, 85, 1) 11.32%, rgba(0, 207, 190, 0.4232) 99.21%)",
                            WebkitMask:
                              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            pointerEvents: "none",
                          },
                        },
                        children: [
                          (0, n.jsx)(N.A, {
                            value: i,
                            onChange: (e, t) => {
                              o(t);
                            },
                            variant: "scrollable",
                            scrollButtons: "auto",
                            sx: {
                              "& .MuiTabs-indicator": {
                                backgroundColor: "#eee",
                              },
                              "& .MuiTab-root": {
                                color: "#999",
                                fontFamily: y.Tv.style.fontFamily,
                                fontSize: { xs: "13px", md: "14px" },
                                padding: { xs: "12px 10px", md: "15px 16px" },
                                minWidth: { xs: "60px", md: "auto" },
                                textTransform: "none",
                                "&.Mui-selected": { color: "#eee" },
                              },
                              borderBottom: "1px solid rgba(255,255,255,0.1)",
                            },
                            children: C.map((e, t) =>
                              (0, n.jsx)(
                                M.A,
                                { label: e.tab, disableRipple: !0 },
                                t
                              )
                            ),
                          }),
                          (0, n.jsxs)(r.default, {
                            sx: {
                              p: { xs: "16px", md: "20px" },
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                            },
                            children: [
                              (0, n.jsx)(r.default, {
                                sx: {
                                  color: "#4bc0ef",
                                  fontFamily: "monospace",
                                  fontSize: { xs: "14px", md: "16px" },
                                  mr: 1,
                                },
                                children: 0 === i && "pip",
                              }),
                              (0, n.jsx)(a.default, {
                                component: "pre",
                                sx: {
                                  color: "#eee",
                                  fontFamily: "monospace",
                                  fontSize: { xs: "14px", md: "16px" },
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-all",
                                  margin: 0,
                                  padding: 0,
                                  flexGrow: 1,
                                },
                                children:
                                  0 === i
                                    ? "install -U posei_trader"
                                    : C[i].command,
                              }),
                              (0, n.jsx)(r.default, {
                                sx: {
                                  cursor: "pointer",
                                  backgroundColor: d
                                    ? "rgba(0, 207, 190, 0.1)"
                                    : "rgba(255,255,255,0.05)",
                                  color: d ? "#4CAF50" : "#aaa",
                                  transition: "all 0.2s",
                                  ml: 2,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "6px",
                                  border: "1px solid",
                                  borderColor: d
                                    ? "rgba(0, 207, 190, 0.2)"
                                    : "transparent",
                                  "&:hover": {
                                    backgroundColor: d
                                      ? "rgba(0, 207, 190, 0.1)"
                                      : "rgba(255,255,255,0.1)",
                                    color: d ? "#4CAF50" : "#fff",
                                  },
                                },
                                onClick: () => !d && S(C[i].command),
                                children: d
                                  ? (0, n.jsx)(l.CMH, { size: 18 })
                                  : (0, n.jsx)(l.zU_, { size: 18 }),
                              }),
                            ],
                          }),
                          (0, n.jsx)(r.default, {
                            sx: {
                              borderTop: "1px solid rgba(255,255,255,0.1)",
                              padding: "12px 20px",
                            },
                            children: (0, n.jsxs)(a.default, {
                              color: "#aaa",
                              fontSize: { xs: "12px", md: "14px" },
                              fontFamily: y.Tv.style.fontFamily,
                              textAlign: "left",
                              children: [
                                "Latest release: PoseiTrader",
                                " ",
                                b ? "..." : m,
                                " ",
                                x && "| System detected: ".concat(x),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      let L = [
        "betfair",
        "binance",
        "bybit",
        "coinbase-international",
        "db",
        "dydx",
        "ib",
        "polymarket",
        "pump",
        "tardisdev",
      ];
      function q() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: {
            justifyContent: "center",
            width: "100%",
            display: "flex",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#1b1b1d",
          },
          children: (0, n.jsx)(r.default, {
            sx: {
              maxWidth: "1200px !important",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            },
            children: (0, n.jsx)(r.default, {
              ref: e,
              sx: {
                pt: { md: "3rem", xs: "3rem" },
                pb: { md: "5rem", xs: "3rem" },
                p: "1rem",
                width: "100%",
                position: "relative",
              },
              children: (0, n.jsx)(r.default, {
                sx: { position: "relative", zIndex: 2 },
                children: (0, n.jsxs)(f.P.div, {
                  initial: { opacity: 0, y: 100 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8 },
                  children: [
                    (0, n.jsx)(r.default, {
                      sx: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: { md: "3rem", xs: "2rem" },
                      },
                      children: (0, n.jsx)(a.default, {
                        color: "#FFF",
                        fontFamily: y.Tv.style.fontFamily,
                        fontWeight: "650",
                        fontStyle: "normal",
                        fontSize: { md: "40px", xs: "2rem" },
                        letterSpacing: "-0.3px",
                        lineHeight: "1.2",
                        children: "Integrations",
                      }),
                    }),
                    (0, n.jsx)(s.default, {
                      container: !0,
                      sx: {
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      },
                      children: L.map((e) => (0, n.jsx)(G, { name: e }, e)),
                    }),
                    (0, n.jsx)(r.default, {
                      sx: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: (0, n.jsx)(a.default, {
                        fontSize: { md: "16px", xs: "15px" },
                        fontWeight: "550",
                        lineHeight: "1.4",
                        letterSpacing: "-0.24px",
                        color: "#FFF",
                        mt: { md: "2rem", xs: "1.2rem" },
                        fontFamily: y.Tv.style.fontFamily,
                        children:
                          "PoseiTrader supports a range of integrations, facilitating seamless data ingest, execution, and order management.",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function G(e) {
        let { name: t } = e,
          i = "".concat(t, ".png");
        return (0, n.jsx)(s.default, {
          size: { xs: 6, md: 3 },
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { md: "2rem", xs: "1.3rem" },
            height: "125px",
          },
          children: (0, n.jsx)(C.default, {
            priority: !0,
            src: i,
            alt: t,
            width: 160,
            height: 40,
            style: { filter: "grayscale(100%)" },
          }),
        });
      }
      var X = i(14426),
        J = i(64315),
        Z = i(67350),
        K = i(46108);
      function Q() {
        let [e, t] = (0, p.useState)("SUBSCRIBE TO OUR NEWSLETTER"),
          [i, s] = (0, p.useState)(""),
          [o, l] = (0, p.useState)(!1),
          [d, c] = (0, p.useState)(!1),
          x = async () => {
            // Always show thank you message without backend
            s("Thank you for subscribing!");
            c(!1);
            t("SUBSCRIBE TO OUR NEWSLETTER");
            l(!1);
          };
        return (0, n.jsxs)(r.default, {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          },
          children: [
            (0, n.jsx)(r.default, {
              component: "form",
              onSubmit: (e) => {
                e.preventDefault(), x();
              },
              role: "form",
              "aria-label": "Newsletter subscription",
              children: (0, n.jsxs)(r.default, {
                component: "div",
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "335px",
                  height: "50px",
                  borderRadius: "40px",
                  padding: "0 12px",
                  fontSize: "0.93rem",
                  color: "#EEE",
                  backgroundColor: "#171718",
                  fontFamily: y.Tv.style.fontFamily,
                  outline: "none",
                  transition: "all 0.4s",
                  border: "2px solid #1e353d",
                  "&:focus-within": {
                    outline: "none",
                    fontSize: "0.9rem",
                    borderColor: "#000",
                    backgroundColor: "#FFF",
                    color: "#000",
                    svg: { color: "#000" },
                  },
                },
                children: [
                  (0, n.jsx)(r.default, {
                    component: "input",
                    type: "email",
                    name: "email",
                    value: e,
                    onChange: (e) => t(e.target.value),
                    onFocus: () => {
                      "SUBSCRIBE TO OUR NEWSLETTER" === e && t("");
                    },
                    onBlur: () => {
                      "" === e && t("SUBSCRIBE TO OUR NEWSLETTER");
                    },
                    required: !0,
                    sx: {
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                      padding: "5px",
                      border: "none",
                      outline: "none",
                      color: "#EEE",
                      fontWeight: "600",
                      letterSpacing: "0.3px",
                      fontFamily: y.Tv.style.fontFamily,
                      "&::placeholder": { color: "#EEE" },
                      "&:focus": {
                        color: "#000",
                        outline: "none",
                        boxShadow: "none",
                      },
                    },
                    "aria-label": "Email address",
                  }),
                  (0, n.jsx)(r.default, {
                    component: "button",
                    type: "submit",
                    p: "9px",
                    sx: {
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      color: "inherit",
                    },
                    children: o
                      ? (0, n.jsx)(X.A, { size: "1.12rem", color: "inherit" })
                      : (0, n.jsx)(J.meu, { size: "1.12rem" }),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(r.default, {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                visibility: i ? "visible" : "hidden",
                height: "17px",
                gap: "0.2rem",
                p: "0.5rem",
              },
              children: [
                d
                  ? (0, n.jsx)(Z.A, { sx: { color: "#e7810e", fontSize: 20 } })
                  : (0, n.jsx)(K.A, { sx: { color: "#61d214", fontSize: 20 } }),
                (0, n.jsx)(a.default, {
                  fontFamily: y.Tv.style.fontFamily,
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "15px",
                  letterSpacing: "-0.2px",
                  lineHeight: "1.4",
                  sx: { color: d ? "#e7810e" : "#61d214" },
                  children: i,
                }),
              ],
            }),
          ],
        });
      }
      function Y() {
        let [e, t] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(r.default, {
          sx: { 
            backgroundImage: "url(back.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 0,
              pointerEvents: "none",
            },
          },
          children: (0, n.jsx)(r.default, {
            sx: {
              justifyContent: "center",
              width: "100%",
              display: "flex",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundPosition: "center",
              pt: { md: "4rem", xs: "3rem" },
              pb: { md: "4rem", xs: "3rem" },
            },
            children: (0, n.jsx)(r.default, {
              sx: {
                width: "100%",
                backgroundImage: "url(back.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                borderRadius: "15px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 0,
                  pointerEvents: "none",
                  borderRadius: "15px",
                },
                pt: { md: "2rem", xs: "2rem" },
                pb: { md: "2rem", xs: "2rem" },
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
              },
              children: (0, n.jsx)(r.default, {
                sx: {
                  maxWidth: "1200px !important",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  backgroundColor: "transparent",
                  pt: { md: "2rem", xs: "0rem" },
                  pb: { md: "2rem", xs: "0rem" },
                  zIndex: 10,
                },
                children: (0, n.jsx)(r.default, {
                  ref: e,
                  sx: { margin: "1rem", width: "100%", position: "relative" },
                  children: (0, n.jsx)(f.P.div, {
                    initial: { opacity: 0, y: 100 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    children: (0, n.jsxs)(r.default, {
                      sx: {
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      },
                      children: [
                        (0, n.jsx)(a.default, {
                          color: "#eee",
                          fontFamily: y.Tv.style.fontFamily,
                          fontWeight: "650",
                          fontStyle: "normal",
                          fontSize: { md: "36px", xs: "28px" },
                          letterSpacing: "-0.4px",
                          lineHeight: "1.1",
                          mb: "1rem",
                          children:
                            "A simpler, faster way to integrate new venues",
                        }),
                        (0, n.jsx)(a.default, {
                          color: "#eee",
                          fontFamily: y.Tv.style.fontFamily,
                          fontSize: { md: "17px", xs: "15px" },
                          lineHeight: "1.4",
                          children:
                            "Integrate any data provider and venue then trade across multiple markets in one platform.",
                        }),
                        (0, n.jsx)(r.default, {
                          mt: "3rem",
                          children: (0, n.jsx)(Q, {}),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      }
      var $ = i(83692),
        ee = i(65100);
      function et() {
        return (0, n.jsxs)(r.default, {
          sx: { width: "100%" },
          children: [
            (0, n.jsx)($.default, { gettingStarted: !0 }),
            (0, n.jsx)(w, {}),
            (0, n.jsx)(z, {}),
            (0, n.jsx)(W, {}),
            (0, n.jsx)(R, {}),
            (0, n.jsx)(_, {}),
            (0, n.jsx)(H, {}),
            (0, n.jsx)(V, {}),
            (0, n.jsx)(q, {}),
            (0, n.jsx)(Y, {}),
            (0, n.jsx)(ee.default, { gettingStarted: !0 }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        5320, 6711, 585, 8087, 6446, 7949, 2362, 4581, 5875, 4200, 6874, 6766,
        8739, 1127, 2960, 1468, 8819, 7787, 8441, 1684, 7358,
      ],
      () => t(22300)
    ),
      (_N_E = e.O());
  },
]);
