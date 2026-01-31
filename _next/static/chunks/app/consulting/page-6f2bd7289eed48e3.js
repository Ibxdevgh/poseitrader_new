(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2575],
  {
    8699: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var i = n(95155),
        a = n(54581),
        l = n(71116),
        r = n(91468),
        o = n(68534),
        s = n(83590),
        d = n(92610),
        m = n(12115),
        x = n(36545),
        c = n(3096),
        f = n(67350),
        u = n(46108),
        p = n(59822);
      let h = [
        "Custom data clients and feed handlers",
        "Custom venue integrations",
        "System design and architecture",
        "Research and backtest environment setups",
        "Individual and team training/onboarding",
        "Trading strategy implementations and code reviews",
        "Cloud and colocated deployments",
        "Deployment support and maintenance",
        "Trading operations",
      ];
      function g() {
        let [e, t] = (0, c.useInView)({ triggerOnce: !0 }),
          [n, s] = (0, m.useState)({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          }),
          [g, b] = (0, m.useState)(""),
          [j, S] = (0, m.useState)(!1),
          [v, F] = (0, m.useState)(!1),
          C = (e) => {
            let { name: t, value: n } = e.target;
            s((e) => ({ ...e, [t]: n }));
          },
          w = async (e) => {
            e.preventDefault(), F(!1), b("");
            let { firstName: t, lastName: i, email: a, message: l } = n;
            if (!t || !i || !a || !l) {
              b("Please fill out all fields."), F(!0);
              return;
            }
            S(!0);
            b("Thank you for reaching out!");
            F(!1);
            s({ firstName: "", lastName: "", email: "", message: "" });
            S(!1);
          };
        return (0, i.jsxs)(a.default, {
          sx: { backgroundColor: "#1b1b1d" },
          children: [
            (0, i.jsx)(a.default, {
              sx: {
                justifyContent: "center",
                borderRadius: "30px",
                width: "100%",
                display: "flex",
                zIndex: 1,
                backgroundSize: "contain",
                backgroundPosition: "center",
              },
              children: (0, i.jsx)(a.default, {
                sx: {
                  position: "relative",
                  maxWidth: "1100px !important",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  "::before": {
                    content: '""',
                    position: "absolute",
                    width: "90%",
                    height: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: "0.8",
                    top: "25%",
                    background:
                      "linear-gradient(88.9deg, rgba(32, 69, 85, 1) 11.32%, rgba(0, 207, 190, 0.4232) 99.21%)",
                    filter: "blur(89.5px)",
                    zIndex: 0,
                    borderRadius: "341px",
                  },
                },
                children: (0, i.jsx)(a.default, {
                  sx: {
                    margin: "1.3rem",
                    pt: { md: "8rem", xs: "7rem" },
                    pb: { md: "4rem", xs: "2rem" },
                    width: "100%",
                    position: "relative",
                  },
                  children: (0, i.jsxs)(a.default, {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    },
                    children: [
                      (0, i.jsx)(l.default, {
                        color: "#FFF",
                        fontFamily: p.Tv.style.fontFamily,
                        fontWeight: "650",
                        fontStyle: "normal",
                        fontSize: { md: "36px", xs: "33px" },
                        letterSpacing: "-0.4px",
                        lineHeight: "1.2",
                        mb: "1rem",
                        children: "Consulting",
                      }),
                      (0, i.jsxs)(l.default, {
                        color: "#eee",
                        fontFamily: p.Tv.style.fontFamily,
                        fontWeight: "370",
                        fontStyle: "normal",
                        fontSize: { md: "17px", xs: "15.5px" },
                        letterSpacing: "-0.1px",
                        lineHeight: { md: "1.3", xs: "1.5" },
                        zIndex: "1",
                        children: [
                          "We can provide consulting and engineering services to support your individual needs for PoseiTrader.",
                          (0, i.jsx)("br", {}),
                          "Lets start a conversation so that we can better understand your requirements.",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          "Complete the contact form and we will be in touch to setup an initial call.",
                        ],
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
                backgroundColor: "#1b1b1d",
              },
              children: (0, i.jsx)(a.default, {
                sx: {
                  maxWidth: "1100px !important",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                },
                children: (0, i.jsx)(a.default, {
                  ref: e,
                  sx: {
                    zIndex: 2,
                    margin: "1.3rem",
                    pt: { md: "3rem", xs: "3rem" },
                    pb: { md: "2rem", xs: "2rem" },
                    width: "100%",
                    position: "relative",
                  },
                  children: (0, i.jsx)(x.P.div, {
                    initial: { opacity: 0, y: 100 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    children: (0, i.jsx)(a.default, {
                      sx: { borderRadius: "40px" },
                      children: (0, i.jsx)(a.default, {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          mb: "1rem",
                        },
                        children: (0, i.jsxs)(r.default, {
                          container: !0,
                          spacing: { md: 3, xs: 4 },
                          sx: {
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: { xs: 4, md: 3 },
                          },
                          children: [
                            (0, i.jsxs)(a.default, {
                              children: [
                                (0, i.jsx)(l.default, {
                                  color: "#2be6e0",
                                  fontFamily: p.Tv.style.fontFamily,
                                  fontWeight: "500",
                                  fontStyle: "normal",
                                  fontSize: { md: "19px", xs: "18px" },
                                  letterSpacing: "-0.4px",
                                  lineHeight: "1.2",
                                  children: "PROFESSIONAL SERVICES",
                                }),
                                (0, i.jsx)(l.default, {
                                  color: "#eee",
                                  fontFamily: p.Tv.style.fontFamily,
                                  fontWeight: "650",
                                  fontStyle: "normal",
                                  fontSize: { md: "28px", xs: "26px" },
                                  letterSpacing: "-0.1px",
                                  lineHeight: "1.2",
                                  mb: "1rem",
                                  children: "Development support",
                                }),
                                (0, i.jsx)(l.default, {
                                  color: "#FFF",
                                  fontFamily: p.Tv.style.fontFamily,
                                  fontWeight: "500",
                                  fontStyle: "normal",
                                  fontSize: { md: "20px", xs: "20px" },
                                  letterSpacing: "-0.1px",
                                  lineHeight: "1.2",
                                  mb: "1rem",
                                  children: "Services include:",
                                }),
                                (0, i.jsx)(a.default, {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "9px",
                                  children: h.map((e, t) =>
                                    (0, i.jsxs)(
                                      a.default,
                                      {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        children: [
                                          (0, i.jsx)(d.dnm, {
                                            fontSize: "10px",
                                            color: "white",
                                          }),
                                          (0, i.jsx)(l.default, {
                                            fontFamily: p.Tv.style.fontFamily,
                                            color: "#FFF",
                                            fontSize: {
                                              md: "16px",
                                              xs: "15px",
                                            },
                                            fontWeight: "400",
                                            lineHeight: "1.4",
                                            children: e,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, i.jsx)(a.default, {
                              children: (0, i.jsx)(a.default, {
                                component: "form",
                                onSubmit: w,
                                sx: {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "100%",
                                  height: "100%",
                                },
                                children: (0, i.jsxs)(a.default, {
                                  sx: {
                                    width: "100%",
                                    height: "100%",
                                    border: "2px solid #11636b",
                                    backgroundImage:
                                      "linear-gradient(to right, #2e2e2e, #1b1b1d), linear-gradient(to bottom, transparent, #1b1b1d)",
                                    padding: { md: "1.5rem", xs: "1rem" },
                                    borderRadius: "12px",
                                  },
                                  children: [
                                    (0, i.jsx)(l.default, {
                                      color: "#EEE",
                                      fontFamily: p.Tv.style.fontFamily,
                                      fontWeight: "600",
                                      fontStyle: "normal",
                                      fontSize: { md: "24px", xs: "20px" },
                                      letterSpacing: "0px",
                                      lineHeight: "1.2",
                                      mb: "2rem",
                                      mt: "0.6rem",
                                      children: "Contact Us",
                                    }),
                                    (0, i.jsxs)(a.default, {
                                      sx: {
                                        display: "flex",
                                        gap: "0.5rem",
                                        mb: "0.5rem",
                                      },
                                      children: [
                                        (0, i.jsx)(y, {
                                          label: "First Name",
                                          name: "firstName",
                                          value: n.firstName,
                                          onChange: C,
                                          placeholder: "First name",
                                          required: !0,
                                        }),
                                        (0, i.jsx)(y, {
                                          label: "Last Name",
                                          name: "lastName",
                                          value: n.lastName,
                                          onChange: C,
                                          placeholder: "Last name",
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(a.default, {
                                      mb: "1.3rem",
                                      children: (0, i.jsx)(y, {
                                        label: "Email",
                                        name: "email",
                                        value: n.email,
                                        onChange: C,
                                        placeholder: "Email",
                                        required: !0,
                                      }),
                                    }),
                                    (0, i.jsx)(a.default, {
                                      mb: "1rem",
                                      children: (0, i.jsx)(y, {
                                        rows: 6,
                                        multiline: !0,
                                        label:
                                          "Any additional information you'd like to provide?",
                                        name: "message",
                                        value: n.message,
                                        onChange: C,
                                        placeholder:
                                          "Please enter your message here",
                                      }),
                                    }),
                                    (0, i.jsx)(o.A, {
                                      type: "submit",
                                      variant: "contained",
                                      disabled: j,
                                      sx: {
                                        mt: 1,
                                        width: "100%",
                                        borderRadius: "16px",
                                        backgroundColor: "#11636b",
                                        "&:hover": {
                                          backgroundColor: "#0d7c86",
                                        },
                                        "&.Mui-disabled": {
                                          backgroundColor: "#e0e0e0",
                                          color: "#757575",
                                        },
                                      },
                                      children: j ? "Submitting..." : "Submit",
                                    }),
                                    (0, i.jsxs)(a.default, {
                                      sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        visibility: g ? "visible" : "hidden",
                                        height: "20px",
                                        gap: "0.2rem",
                                        pt: "1rem",
                                      },
                                      children: [
                                        v
                                          ? (0, i.jsx)(f.A, {
                                              sx: {
                                                color: "#e7810e",
                                                fontSize: 20,
                                              },
                                            })
                                          : (0, i.jsx)(u.A, {
                                              sx: {
                                                color: "#61d214",
                                                fontSize: 20,
                                              },
                                            }),
                                        (0, i.jsx)(l.default, {
                                          fontFamily: p.Tv.style.fontFamily,
                                          fontWeight: "500",
                                          fontStyle: "normal",
                                          fontSize: "15px",
                                          letterSpacing: "-0.2px",
                                          lineHeight: "1.4",
                                          sx: {
                                            color: v ? "#e7810e" : "#61d214",
                                          },
                                          children: g,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function y(e) {
        let { label: t, name: n, value: r, onChange: o, ...d } = e;
        return (0, i.jsxs)(a.default, {
          mb: "10px",
          width: "100%",
          children: [
            (0, i.jsxs)(l.default, {
              color: "#EEE",
              fontFamily: p.Tv.style.fontFamily,
              fontWeight: "450",
              fontStyle: "normal",
              fontSize: { md: "14px", xs: "14px" },
              letterSpacing: "0px",
              lineHeight: "1.2",
              mb: "9px",
              ml: "3px",
              sx: { ".required": { color: "cyan" } },
              children: [
                t,
                " ",
                (0, i.jsx)("span", { className: "required", children: "*" }),
              ],
            }),
            (0, i.jsx)(s.Ay, {
              name: n,
              value: r,
              onChange: o,
              sx: {
                width: "100%",
                padding: "0.5rem",
                borderRadius: "7px",
                fontSize: { md: "14px", xs: "14px" },
                border: "none",
                boxShadow: "#11636b 0 0 0 1px",
                transition: "all 0.3s",
                "&:focus-within": { boxShadow: "#148994 0 0 0 2px" },
                color: "#EEE",
              },
              ...d,
            }),
          ],
        });
      }
    },
    14443: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 8699));
    },
    59822: (e, t, n) => {
      "use strict";
      n.d(t, { GC: () => o.a, H2: () => c, HM: () => x.a, Tv: () => d.a });
      var i = n(95155),
        a = n(54581),
        l = n(71116),
        r = n(76917),
        o = n.n(r),
        s = n(7810),
        d = n.n(s),
        m = n(41885),
        x = n.n(m);
      function c(e) {
        let { children: t, color: n } = e;
        return (0, i.jsx)(a.default, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: "5rem", xs: "3rem" },
          },
          children: (0, i.jsx)(l.default, {
            color: n || "#EEEEEE",
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [5320, 2202, 4581, 5875, 4200, 8739, 1468, 5203, 8441, 1684, 7358],
      () => t(14443)
    ),
      (_N_E = e.O());
  },
]);
