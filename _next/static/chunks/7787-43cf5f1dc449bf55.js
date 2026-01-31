"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7787],
  {
    59822: (e, t, r) => {
      r.d(t, { GC: () => s.a, H2: () => p, HM: () => c.a, Tv: () => d.a });
      var n = r(95155),
        i = r(54581),
        a = r(71116),
        l = r(76917),
        s = r.n(l),
        o = r(7810),
        d = r.n(o),
        x = r(41885),
        c = r.n(x);
      function p(e) {
        let { children: t, color: r } = e;
        return (0, n.jsx)(i.default, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: "5rem", xs: "3rem" },
          },
          children: (0, n.jsx)(a.default, {
            color: r || "#EEEEEE",
            fontFamily: d().style.fontFamily,
            fontWeight: "650",
            fontStyle: "normal",
            fontSize: { md: "40px", xs: "2rem" },
            letterSpacing: "-0.3px",
            lineHeight: "1.2",
            children: t,
          }),
        });
      }
    },
    65100: (e, t, r) => {
      r.d(t, { default: () => b });
      var n = r(95155),
        i = r(54581),
        a = r(71116),
        l = r(66766),
        s = r(6874),
        o = r.n(s),
        d = r(15305),
        x = r(64315),
        c = r(29911),
        p = r(79737),
        f = r(59822),
        u = r(23671),
        m = r(36545),
        h = r(3096);
      function g(e) {
        let { gettingStarted: t } = e,
          [r, l] = (0, h.useInView)({ triggerOnce: !0 });
        return (0, n.jsx)(i.default, {
          ref: r,
          sx: {
            justifyContent: "center",
            width: "100%",
            display: "flex",
            zIndex: 1,
            backgroundColor: "#1B1B1D",
            padding: { md: "6rem 0rem 8rem 0rem", xs: "2rem 0rem 4rem 0rem" },
          },
          children: (0, n.jsx)(m.P.div, {
            initial: { opacity: 0, y: 100 },
            animate: l ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8 },
            children: (0, n.jsx)(i.default, {
              sx: {
                maxWidth: "1200px !important",
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                alignItems: { md: "flex-start", xs: "center" },
                justifyContent: "space-between",
                padding: "1rem",
                width: "100%",
                position: "relative",
              },
              children: (0, n.jsxs)(i.default, {
                sx: {
                  width: "100%",
                  zIndex: 2,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "80%",
                    height: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "0px",
                    background:
                      "linear-gradient(88.9deg, rgba(32, 69, 85, 1) 11.32%, rgba(0, 207, 190, 0.4232) 99.21%)",
                    filter: "blur(89.5px)",
                    borderRadius: "341px",
                    zIndex: 1,
                  },
                },
                children: [
                  (0, n.jsx)(i.default, {
                    sx: {
                      display: "flex",
                      alignItems: { md: "flex-start", xs: "center" },
                      justifyContent: "center",
                      width: "100%",
                      zIndex: 2,
                      position: "relative",
                    },
                    children: (0, n.jsx)(a.default, {
                      color: "#FFF",
                      fontSize: { md: "32px", xs: "26px" },
                      fontWeight: "600",
                      letterSpacing: "-0.4px",
                      fontFamily: f.Tv.style.fontFamily,
                      lineHeight: "1.4",
                      align: "center",
                      padding: "10px 0px",
                      mb: "1rem",
                      children: "Launch your trading with PoseiTrader today.",
                    }),
                  }),
                  (0, n.jsx)(i.default, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: { md: "row", xs: "column" },
                      gap: { md: "2rem", xs: "0.7rem" },
                      zIndex: 2,
                      position: "relative",
                    },
                    children: t
                      ? (0, n.jsx)(o(), {
                          href: "/getting_started",
                          children: (0, n.jsxs)(i.default, {
                            sx: {
                              backgroundImage:
                                "linear-gradient(0deg, rgba(0,205,178,0.24) 10%, rgba(47,173,215,1) 100%)",
                              border: "2px solid #1e353d",
                              borderRadius: "50px",
                              padding: { md: "11px 19px", xs: "9px 15px" },
                              transition: "all 0.3s",
                              display: "flex",
                              alignItems: "center",
                              "& svg": { color: "#EEEEEE" },
                              "&:hover": {
                                boxShadow:
                                  "1px 1px 15px rgba(47,172,214,0.5), -1px -1px 15px rgba(47,172,214,0.5)",
                                cursor: "pointer",
                              },
                              "&:hover svg": { transform: "translateX(5px)" },
                              svg: { transition: "all 0.3s" },
                            },
                            children: [
                              (0, n.jsx)(a.default, {
                                color: "#EEEEEE",
                                fontSize: { md: "18px", xs: "14px" },
                                fontWeight: "500",
                                fontFamily: f.Tv.style.fontFamily,
                                children: "Get Started",
                              }),
                              (0, n.jsx)(u.TEl, { fontSize: "1.5rem" }),
                            ],
                          }),
                        })
                      : (0, n.jsx)(o(), {
                          href: "https://x.com/PoseiTrader",
                          target: "_blank",
                          children: (0, n.jsxs)(i.default, {
                            sx: {
                              backgroundImage:
                                "radial-gradient(circle at 50% 0, #0f2026, #1b1d1c)",
                              border: "2px solid #1e353d",
                              borderRadius: "50px",
                              padding: { md: "11px 19px", xs: "9px 15px" },
                              transition: "all 0.3s",
                              display: "flex",
                              alignItems: "center",
                              "& svg": { color: "#EEEEEE" },
                              "&:hover": {
                                boxShadow:
                                  "1px 1px 15px rgba(47,172,214,0.5), -1px -1px 15px rgba(47,172,214,0.5)",
                                cursor: "pointer",
                              },
                              "&:hover svg": { transform: "translateX(5px)" },
                              svg: { transition: "all 0.3s" },
                            },
                            children: [
                              (0, n.jsx)(a.default, {
                                color: "#EEEEEE",
                                fontSize: { md: "18px", xs: "14px" },
                                fontWeight: "550",
                                fontFamily: f.Tv.style.fontFamily,
                                children: "Join our Twitter(X) community",
                              }),
                              (0, n.jsx)(u.TEl, { fontSize: "1.5rem" }),
                            ],
                          }),
                        }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function b(e) {
        let { gettingStarted: t } = e;
        return (0, n.jsxs)(i.default, {
          position: "relative",
          children: [
            (0, n.jsx)(i.default, {
              sx: {
                position: "absolute",
                width: "100%",
                height: "100%",
                bottom: "13%",
                opacity: 0.35,
                left: "-73%",
                zIndex: 0,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "scale(2)",
                transformOrigin: "center left",
              },
            }),
            (0, n.jsx)(g, { gettingStarted: t }),
            (0, n.jsx)(y, {}),
          ],
        });
      }
      function y() {
        return (0, n.jsx)(i.default, {
          sx: { backgroundColor: "#1B1B1D" },
          children: (0, n.jsx)(i.default, {
            sx: {
              justifyContent: "center",
              width: "100%",
              display: "flex",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundPosition: "center",
            },
            children: (0, n.jsx)(i.default, {
              sx: {
                width: "100%",
                backgroundColor: "#171718",
                backgroundImage: {
                  md: "radial-gradient(farthest-side at bottom left, #1e353d, transparent 600px), radial-gradient(farthest-corner at bottom right, #1a3831, transparent 570px)",
                  xs: "radial-gradient(farthest-corner at bottom right, #233f38, transparent 250px)",
                },
                pt: { md: "6rem", xs: "3rem" },
                pb: { md: "4rem", xs: "2rem" },
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
              },
              children: (0, n.jsxs)(i.default, {
                sx: {
                  maxWidth: "1200px !important",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column-reverse" },
                  alignItems: { md: "flex-start", xs: "center" },
                  justifyContent: "space-between",
                  padding: { md: "1rem", xs: "0rem" },
                  width: "100%",
                },
                children: [
                  (0, n.jsxs)(i.default, {
                    sx: {
                      mb: { md: "2rem", xs: "0rem" },
                      display: { md: "block", xs: "flex" },
                      alignItems: "center",
                      flexDirection: "column",
                    },
                    children: [
                      (0, n.jsx)(l.default, {
                        src: "/nautilus-logo-white.png",
                        alt: "footer-logo",
                        width: 70,
                        height: 70,
                        priority: !0,
                      }),
                      (0, n.jsxs)(i.default, {
                        sx: {
                          display: "flex",
                          gap: "10px",
                          color: "#848895",
                          fontSize: "0.95rem",
                          padding: "1rem 0rem",
                          justifyContent: { md: "flex-start", xs: "center" },
                          "& a": {
                            padding: "5px",
                            backgroundColor: "#848895",
                            borderRadius: "50%",
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": { backgroundColor: "#EEE" },
                          },
                        },
                        children: [
                          (0, n.jsx)(o(), {
                            href: "https://github.com/poseisystems",
                            target: "_blank",
                            children: (0, n.jsx)(d.Tv0, { color: "black" }),
                          }),
                          (0, n.jsx)(o(), {
                            href: "https://x.com/PoseiTrader",
                            target: "_blank",
                            children: (0, n.jsx)(d.tZq, { color: "black" }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)(a.default, {
                        fontSize: { md: "15px", xs: "12px" },
                        fontFamily: f.Tv.style.fontFamily,
                        fontWeight: "350",
                        color: "#848895",
                        letterSpacing: "-0.18px",
                        m: "1.5rem 0rem",
                        children: [
                          "\xa9",
                          " ",
                          new Date().getFullYear(),
                          " ",
                          "Posei Systems Pty Ltd. All rights reserved.",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(i.default, {
                    sx: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: { md: "3rem", xs: "1.7rem" },
                    },
                    children: [
                      {
                        category: "Solutions",
                        items: [
                          {
                            text: "Open Source",
                            link: "https://github.com/poseisystems",
                            newTab: !0,
                            external: !0,
                          },
                          { text: "Cloud Platform", link: "/cloud-platform" },
                          { text: "Consulting", link: "/consulting" },
                        ],
                      },
                      {
                        category: "Company",
                        items: [
                          { text: "About", link: "/about" },
                          { text: "Team", link: "/team" },
                          { text: "Legal", link: "/legal" },
                        ],
                      },
                      {
                        category: "Resources",
                        items: [
                          {
                            text: "Docs",
                            link: "/docs/latest",
                            newTab: !0,
                            external: !0,
                          },
                        ],
                      },
                      {
                        category: "Blog",
                        items: [
                          {
                            text: "Blog",
                            link: "/blog/",
                            newTab: !0,
                            external: !0,
                          },
                        ],
                      },
                    ].map((e) =>
                      (0, n.jsxs)(
                        i.default,
                        {
                          mb: "1rem",
                          children: [
                            e.items &&
                              (0, n.jsx)(a.default, {
                                fontSize: { md: "18px", xs: "14px" },
                                fontWeight: "350",
                                color: "#EEE",
                                mb: "1rem",
                                children: e.category,
                              }),
                            e.items
                              ? e.items.map((e) =>
                                  (0, n.jsx)(
                                    o(),
                                    {
                                      href: e.disable ? "#" : e.link,
                                      target: e.newTab ? "_blank" : "_self",
                                      style: {
                                        pointerEvents: e.disable
                                          ? "none"
                                          : "auto",
                                        cursor: e.disable
                                          ? "default"
                                          : "pointer",
                                      },
                                      children: (0, n.jsxs)(i.default, {
                                        sx: {
                                          display: "flex",
                                          alignItems: "flex-start",
                                          mb: "1rem",
                                          gap: "0.2rem",
                                          "&:hover p": { color: "#EEE" },
                                          "&:hover svg": { color: "#EEE" },
                                        },
                                        children: [
                                          (0, n.jsx)(a.default, {
                                            fontSize: {
                                              md: "15px",
                                              xs: "14px",
                                            },
                                            letterSpacing: "-0.15px",
                                            color: "#848895",
                                            sx: {
                                              cursor: "pointer",
                                              transition: "all 0.2s ease",
                                            },
                                            children: e.text,
                                          }),
                                          e.external &&
                                            (0, n.jsx)(i.default, {
                                              sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                transition: "all 3s ease",
                                                color: "#848895",
                                              },
                                              children: (0, n.jsx)(c.P_O, {
                                                fontSize: "11px",
                                              }),
                                            }),
                                        ],
                                      }),
                                    },
                                    (0, p.A)()
                                  )
                                )
                              : (0, n.jsx)(o(), {
                                  href: e.disable ? "#" : e.link,
                                  style: {
                                    pointerEvents: e.disable ? "none" : "auto",
                                    cursor: e.disable ? "default" : "pointer",
                                  },
                                  onClick: (t) =>
                                    e.disable && t.preventDefault(),
                                  "aria-disabled": e.disable,
                                  children: (0, n.jsx)(a.default, {
                                    fontSize: { md: "18px", xs: "14px" },
                                    fontWeight: "350",
                                    color: "#EEE",
                                    mb: "1rem",
                                    children: e.category,
                                  }),
                                }),
                          ],
                        },
                        (0, p.A)()
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    83692: (e, t, r) => {
      r.d(t, { default: () => v });
      var n = r(95155),
        i = r(12115),
        a = r(54581),
        l = r(3127),
        s = r(71116),
        o = r(76890),
        d = r(44389),
        x = r(69242),
        c = r(6874),
        p = r.n(c),
        f = r(66766),
        u = r(29584),
        m = r(7302),
        h = r(95056),
        g = r(36545),
        b = r(23671),
        y = r(59822),
        j = r(31960),
        E = r(70978);
      function w() {
        let [e, t] = (0, i.useState)(!1);
        return e
          ? (0, n.jsx)(a.default, {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                background: "white",
                padding: "1px",
                gap: "10px",
              },
              children: (0, n.jsx)(a.default, {
                sx: {
                  maxWidth: "800px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                children: (0, n.jsxs)(a.default, {
                  sx: { display: "flex", alignItems: "center" },
                  children: [
                    (0, n.jsxs)(a.default, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        padding: "9px",
                      },
                      children: [
                        (0, n.jsx)(E.A, {
                          sx: {
                            color: "red",
                            mr: "5px",
                            fontSize: { xs: "20px", md: "22px" },
                          },
                        }),
                        (0, n.jsx)(s.default, {
                          color: "black",
                          fontFamily: y.Tv.style.fontFamily,
                          fontWeight: "700",
                          fontSize: { xs: "14px", md: "14px" },
                          letterSpacing: "0.1px",
                          lineHeight: "1.2",
                          children: "IMPORTANT:",
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.default, {
                      color: "black",
                      fontFamily: y.Tv.style.fontFamily,
                      fontWeight: "450",
                      fontSize: { xs: "15.5px", md: "0.95rem" },
                      letterSpacing: "-0.1px",
                      lineHeight: { xs: "1.5", md: "1.3" },
                      children: [
                        "PoseiTrader does not issue or promote any cryptocurrency tokens.",
                        " ",
                        (0, n.jsx)(j.A, {
                          href: "/about",
                          color: "#054b31",
                          sx: {
                            textDecoration: "underline",
                            "&:hover": { color: "#1ac8c2" },
                          },
                          children: "Read more",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      let v = function (e) {
        let { gettingStarted: t } = e,
          [r, c] = (0, i.useState)(!1),
          [j, E] = (0, i.useState)(null),
          v = (e) => () => {
            j === e ? E(null) : E(e);
          },
          S = [
            {
              text: "Solutions",
              items: [
                {
                  text: "Open Source",
                  link: "https://github.com/poseisystems",
                  newTab: !0,
                  description: "Explore our open-core GitHub repository.",
                },
                {
                  text: "Cloud Platform",
                  link: "/cloud-platform",
                  description:
                    "Revolutionize your operations with Posei Cloud.",
                },
                {
                  text: "Consulting",
                  link: "/consulting",
                  description:
                    "Access engineering services and direct support.",
                },
              ],
            },
            {
              text: "Company",
              items: [
                {
                  text: "About",
                  link: "/about",
                  description: "Learn about our vision and company ethos.",
                },
                {
                  text: "Team",
                  link: "/team",
                  description:
                    "Meet our executive team and project leadership.",
                },
                {
                  text: "Legal",
                  link: "/legal",
                  description: "Learn about our legal terms.",
                },
              ],
            },
            {
              text: "Resources",
              items: [
                {
                  text: "Docs",
                  link: "/docs/latest",
                  newTab: !0,
                  description: "Access PoseiTrader documentation.",
                },
              ],
            },
          ],
          F = "Blog",
          z = "/blog",
          C = () => {
            c(!r);
          },
          I = (0, n.jsxs)(a.default, {
            sx: {
              width: "100vw",
              backgroundColor: "#000",
              height: "100vh",
              color: "#a7aab5",
              backgroundImage:
                "radial-gradient(farthest-corner at bottom right, #233f38, transparent 250px)",
            },
            children: [
              (0, n.jsx)(a.default, {
                sx: { display: "flex", justifyContent: "flex-end", p: 2 },
                children: (0, n.jsx)(l.A, {
                  onClick: C,
                  children: (0, n.jsx)(x.A, {
                    sx: { fontSize: "30px", color: "#FFF" },
                  }),
                }),
              }),
              (0, n.jsx)(a.default, {
                children: S.map((e, t) =>
                  (0, n.jsxs)(
                    a.default,
                    {
                      width: "100%",
                      children: [
                        (0, n.jsxs)(a.default, {
                          sx: {
                            padding: "1.4rem",
                            display: "flex",
                            justifyContent: "space-between",
                            "& svg": {
                              transform:
                                j === t ? "rotate(180deg)" : "rotate(0deg)",
                              color: j === t ? "white" : "#a7aab5",
                              transition: "transform 0.3s",
                            },
                            "& p": {
                              transition: "color 0.3s",
                              color: j === t ? "white" : "#a7aab5",
                            },
                          },
                          onClick: v(t),
                          children: [
                            (0, n.jsx)(s.default, {
                              fontFamily: y.Tv.style.fontFamily,
                              fontSize: "1rem",
                              fontWeight: "500",
                              sx: { mb: 1 },
                              children: e.text,
                            }),
                            (0, n.jsx)(u.A, { sx: { fontSize: "1.7rem" } }),
                          ],
                        }),
                        (0, n.jsx)(a.default, {
                          sx: {
                            padding: "0rem 1rem 1rem 1rem",
                            display: j === t ? "block" : "none",
                            visibility: j === t ? "visible" : "hidden",
                            opacity: +(j === t),
                            transition: "all 0.3s ease",
                          },
                          children: (0, n.jsx)(a.default, {
                            sx: {
                              backgroundColor: "#161616",
                              boxShadow: "0 10px 10px rgba(0, 0, 0, 0.5)",
                              fontSize: "1rem",
                              borderRadius: "15px",
                              border: "1px solid #2D2930",
                            },
                            children: (0, n.jsx)(a.default, {
                              sx: {
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem",
                                gap: "0.3rem",
                              },
                              children: e.items.map((e, t) =>
                                (0, n.jsx)(
                                  p(),
                                  {
                                    onClick: C,
                                    href: e.link,
                                    target: "_self",
                                    style: {
                                      pointerEvents: e.disable
                                        ? "none"
                                        : "auto",
                                    },
                                    "aria-disabled": e.enable,
                                    children: (0, n.jsxs)(a.default, {
                                      sx: {
                                        borderRadius: "12px",
                                        width: "100%",
                                        padding: "0.7rem",
                                        border: "1px solid transparent",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                          backgroundColor: "#1B1B1D",
                                          border: "1px solid #2D2930",
                                        },
                                      },
                                      children: [
                                        (0, n.jsx)(s.default, {
                                          color: "#FFF",
                                          flexGrow: 1,
                                          whiteSpace: "nowrap",
                                          fontFamily: y.Tv.style.fontFamily,
                                          fontSize: {
                                            md: "0.9rem",
                                            xs: "0.8rem",
                                          },
                                          fontWeight: "600",
                                          children: e.text,
                                        }),
                                        (0, n.jsx)(s.default, {
                                          color: "#686B75",
                                          flexGrow: 1,
                                          whiteSpace: "nowrap",
                                          fontFamily: y.Tv.style.fontFamily,
                                          fontSize: {
                                            md: "0.85rem",
                                            xs: "0.8rem",
                                          },
                                          fontWeight: "500",
                                          sx: { pt: "3px" },
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, n.jsx)(a.default, {
                width: "100%",
                children: (0, n.jsx)(a.default, {
                  sx: {
                    padding: "1.4rem",
                    display: "flex",
                    justifyContent: "space-between",
                  },
                  children: (0, n.jsx)(p(), {
                    href: z,
                    style: { pointerEvents: "none" },
                    "aria-disabled": !0,
                    children: (0, n.jsx)(s.default, {
                      fontFamily: y.Tv.style.fontFamily,
                      fontSize: "1rem",
                      fontWeight: "500",
                      children: F,
                    }),
                  }),
                }),
              }),
              (0, n.jsx)(a.default, {
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: (0, n.jsx)(p(), {
                  onClick: C,
                  href: "/getting_started",
                  children: (0, n.jsx)(a.default, {
                    sx: {
                      backgroundImage:
                        "linear-gradient(0deg, rgba(0,205,178,0.24) 10%, rgba(47,173,215,1) 100%)",
                      border: "2px solid #1e353d",
                      borderRadius: "50px",
                      padding: "12px 22px",
                      margin: "1rem",
                    },
                    children: (0, n.jsx)(s.default, {
                      color: "#EEEEEE",
                      fontSize: "0.95rem",
                      fontWeight: "300",
                      flexGrow: 1,
                      whiteSpace: "nowrap",
                      fontFamily: y.HM.style.fontFamily,
                      children: "Get Started",
                    }),
                  }),
                }),
              }),
            ],
          }),
          [T, D] = (0, i.useState)(!1),
          { scrollY: W } = (0, m.L)(),
          [_, A] = (0, i.useState)(!1);
        return (
          (0, h.L)(W, "change", (e) => {
            e > W.getPrevious() && e > 1 ? D(!0) : (A(!0), D(!1)),
              e < 30 && A(!1);
          }),
          (0, n.jsx)(a.default, {
            sx: { position: "fixed", width: "100%", zIndex: "100" },
            children: (0, n.jsx)(g.P.div, {
              initial: { y: 0 },
              animate: T ? { y: "-200%" } : { y: 0 },
              transition: { duration: 0.4, ease: "easeInOut" },
              children: (0, n.jsxs)(a.default, {
                sx: {
                  position: "relative",
                  width: "100%",
                  backdropFilter: "blur(6px)",
                  backgroundColor: _ ? "rgba(27, 27, 29, 0.8)" : "transparent",
                  transition: "all 0.4s ease",
                },
                children: [
                  (0, n.jsx)(a.default, {
                    sx: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      pointerEvents: "none",
                      zIndex: 90,
                    },
                  }),
                  (0, n.jsx)(w, {}),
                  (0, n.jsxs)(a.default, {
                    sx: {
                      display: "flex",
                      padding: "0.6rem",
                      justifyContent: { sm: "center", xs: "flex-start" },
                      width: "100%",
                    },
                    children: [
                      (0, n.jsxs)(a.default, {
                        sx: {
                          maxWidth: "1200px !important",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          zIndex: "200",
                        },
                        children: [
                          (0, n.jsx)(p(), {
                            href: "/",
                            children: (0, n.jsx)(a.default, {
                              sx: {
                                display: "flex",
                                alignItems: "center",
                                padding: "0.5rem",
                              },
                              children: (0, n.jsx)(f.default, {
                                priority: !0,
                                src: "/nautilus-logo-white.png",
                                alt: "navbar-logo",
                                width: 80,
                                height: 80,
                              }),
                            }),
                          }),
                          (0, n.jsxs)(a.default, {
                            sx: {
                              display: { xs: "none", md: "flex" },
                              alignItems: "center",
                              gap: "1.7rem",
                              padding: "0.5rem",
                            },
                            children: [
                              S.map((e, t) =>
                                (0, n.jsx)(
                                  k,
                                  { menuItems: e.items, children: e.text },
                                  t
                                )
                              ),
                              (0, n.jsx)(p(), {
                                href: z,
                                style: { pointerEvents: "none" },
                                "aria-disabled": !0,
                                children: (0, n.jsx)(s.default, {
                                  fontFamily: y.Tv.style.fontFamily,
                                  color: "#a7aab5",
                                  fontSize: "0.99rem",
                                  fontWeight: "500",
                                  sx: { flexGrow: 1 },
                                  children: F,
                                }),
                              }),
                              t
                                ? (0, n.jsx)(p(), {
                                    href: "/getting_started",
                                    children: (0, n.jsx)(a.default, {
                                      sx: {
                                        backgroundImage:
                                          "linear-gradient(0deg, rgba(0,205,178,0.24) 10%, rgba(47,173,215,1) 100%)",
                                        border: "2px solid #1e353d",
                                        borderRadius: "50px",
                                        padding: "9px 19px",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        "& svg": { color: "#EEEEEE" },
                                        "&:hover": {
                                          boxShadow:
                                            "1px 1px 15px rgba(47,172,214,0.5), -1px -1px 15px rgba(47,172,214,0.5)",
                                          cursor: "pointer",
                                        },
                                        "&:hover svg": {
                                          transform: "translateX(5px)",
                                        },
                                        svg: { transition: "all 0.2s ease" },
                                      },
                                      children: (0, n.jsx)(s.default, {
                                        color: "#EEEEEE",
                                        fontSize: "0.8rem",
                                        fontWeight: "300",
                                        flexGrow: 1,
                                        whiteSpace: "nowrap",
                                        fontFamily: y.HM.style.fontFamily,
                                        children: "Get Started",
                                      }),
                                    }),
                                  })
                                : null,
                              (0, n.jsx)(p(), {
                                href: "https://x.com/PoseiTrader",
                                target: "_blank",
                                children: (0, n.jsxs)(a.default, {
                                  sx: {
                                    backgroundImage:
                                      "radial-gradient(circle at 50% 0, #0f2026, #1b1d1c)",
                                    border: "2px solid #1e353d",
                                    borderRadius: "50px",
                                    ml: "-0.4rem",
                                    padding: "9px 19px",
                                    transition: "all 0.3s",
                                    display: "flex",
                                    alignItems: "center",
                                    "& svg": { color: "#EEEEEE" },
                                    "&:hover": {
                                      boxShadow:
                                        "1px 1px 10px rgba(47,172,214,0.5), -1px -1px 10px rgba(47,172,214,0.5)",
                                      cursor: "pointer",
                                    },
                                    "&:hover svg": {
                                      transform: "translateX(5px)",
                                    },
                                    svg: { transition: "all 0.3s" },
                                  },
                                  children: [
                                    (0, n.jsx)(s.default, {
                                      color: "#EEEEEE",
                                      fontSize: "0.8rem",
                                      fontWeight: "550",
                                      flexGrow: 1,
                                      whiteSpace: "nowrap",
                                      fontFamily: y.HM.style.fontFamily,
                                      children: "Join X",
                                    }),
                                    (0, n.jsx)(b.TEl, { fontSize: "1.1rem" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)(a.default, {
                        zIndex: "90",
                        children: [
                          (0, n.jsx)(l.A, {
                            "aria-label": "open drawer",
                            size: "27px",
                            sx: { display: { md: "none" } },
                            padding: "0.5rem",
                            onClick: C,
                            children: (0, n.jsx)(d.A, {
                              sx: { color: "#a7aab5" },
                            }),
                          }),
                          (0, n.jsx)(o.A, {
                            anchor: "right",
                            open: r,
                            onOpen: C,
                            onClose: C,
                            BackdropProps: {
                              transitionDuration: { enter: 300, exit: 300 },
                            },
                            disableSwipeToOpen: !1,
                            children: I,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      function k(e) {
        let { children: t, menuItems: r } = e,
          [l, o] = (0, i.useState)(!1);
        return (0, n.jsxs)(a.default, {
          position: "relative",
          onMouseEnter: () => {
            o(!0);
          },
          onMouseLeave: () => {
            o(!1);
          },
          sx: {
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "& p": { transition: "opacity 0.3s" },
            "& svg": {
              transform: l ? "rotate(180deg)" : "rotate(0deg)",
              color: l ? "white" : "#a7aab5",
              transition: "transform 0.3s",
            },
          },
          children: [
            (0, n.jsx)(s.default, {
              fontFamily: y.Tv.style.fontFamily,
              color: l ? "white" : "#a7aab5",
              fontSize: "0.99rem",
              fontWeight: "450",
              sx: { flexGrow: 1 },
              children: t,
            }),
            (0, n.jsx)(a.default, {
              sx: {
                "&:before": {
                  content: '""',
                  position: "absolute",
                  height: "1px",
                  width: "100%",
                  bottom: "-6px",
                  left: 0,
                  backgroundColor: l ? "#1DBAC9" : "transparent",
                },
              },
            }),
            (0, n.jsx)(u.A, { sx: { fontSize: "1.3rem" } }),
            (0, n.jsx)(a.default, {
              sx: {
                pt: "1rem",
                visibility: l ? "visible" : "hidden",
                opacity: +!!l,
                transition: "opacity 0.3s ease",
                position: "absolute",
                transform: "translate3d(-30%, 0, 0)",
                left: "50%",
                top: "calc(100%)",
              },
              children: (0, n.jsx)(a.default, {
                sx: {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.5)",
                  fontSize: "1rem",
                  borderRadius: "15px",
                  border: "1px solid #2D2930",
                },
                children: (0, n.jsx)(a.default, {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    gap: "0.3rem",
                  },
                  children: r.map((e, t) =>
                    (0, n.jsx)(
                      p(),
                      {
                        href: e.link,
                        target: "_self",
                        style: { pointerEvents: e.disable ? "none" : "auto" },
                        "aria-disabled": e.enable,
                        children: (0, n.jsxs)(a.default, {
                          sx: {
                            borderRadius: "12px",
                            width: "100%",
                            padding: "0.7rem",
                            border: "1px solid transparent",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "#1B1B1D",
                              border: "1px solid #2D2930",
                            },
                          },
                          children: [
                            (0, n.jsx)(s.default, {
                              color: "#FFF",
                              flexGrow: 1,
                              whiteSpace: "nowrap",
                              fontFamily: y.Tv.style.fontFamily,
                              fontSize: { md: "0.9rem", xs: "0.8rem" },
                              fontWeight: "600",
                              children: e.text,
                            }),
                            (0, n.jsx)(s.default, {
                              color: "#686B75",
                              flexGrow: 1,
                              whiteSpace: "nowrap",
                              fontFamily: y.Tv.style.fontFamily,
                              fontSize: { md: "0.85rem", xs: "0.8rem" },
                              transition: "all 0.9s ease",
                              fontWeight: "500",
                              sx: { pt: "3px" },
                              children: e.description,
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
            }),
          ],
        });
      }
    },
  },
]);
