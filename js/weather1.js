(this["webpackJsonpweather-app"] = this["webpackJsonpweather-app"] || []).push([
  [0],
  {
    12: function (e, t, n) {},
    14: function (e, t, n) {},
    15: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n(1),
        c = n.n(a),
        o = n(6),
        i = n.n(o),
        s = (n(12), n(3)),
        l = n.n(s),
        u = n(4),
        p = n(2),
        d =
          (n(14),
          function (e) {
            return Object(r.jsxs)("div", {
              children: [
                Object(r.jsxs)("div", {
                  className: "align-center",
                  style: { gap: "10px", fontSize: "30px" },
                  children: [
                    Object(r.jsx)("img", {
                      style: { width: "60px" },
                      alt: "app-logo",
                      src: "https://cdn.glitch.com/47ad58f1-f213-4c8b-a7c4-9d5371005373%2F1337511_game_go_play_pokemon_storm_icon.png?v=1628609724266",
                    }),
                    Object(r.jsx)("p", { children: "Current Weather" }),
                  ],
                }),
                Object(r.jsx)("br", {}),
                Object(r.jsxs)("div", {
                  className: "align-center",
                  style: { gap: "20px" },
                  children: [
                    Object(r.jsx)("img", {
                      style: { cursor: "pointer", width: "30px" },
                      alt: "location access",
                      onClick: function () {
                        return e.getUserLocation();
                      },
                      src: "https://img.icons8.com/ios-filled/50/000000/marker.png",
                    }),
                    Object(r.jsx)("input", {
                      style: { borderRadius: "5px", padding: "5px" },
                      placeholder: "Enter Location...",
                      onKeyPress: function (t) {
                        return "Enter" === t.key && "" !== t.target.value
                          ? e.getLocation(t)
                          : null;
                      },
                    }),
                  ],
                }),
                Object(r.jsx)("p", {
                  className: "not-found",
                  children: e.errorLoading
                    ? "Ops, could u try something else?"
                    : null,
                }),
              ],
            });
          }),
        j = function (e) {
          var t = Object(a.useState)([]),
            n = Object(p.a)(t, 2),
            c = n[0],
            o = n[1];
          Object(a.useEffect)(
            function () {
              return s(e.location.sys.sunrise, e.location.sys.sunset);
            },
            [e.location]
          );
          var i = function (e) {
              return Math.round((9 * e) / 5) + 32;
            },
            s = function (e, t) {
              o([
                new Date(1e3 * e).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                new Date(1e3 * t).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              ]);
            };
          return Object(r.jsxs)("div", {
            className: "location-info",
            children: [
              Object(r.jsxs)("div", {
                className: "align-center",
                style: { gap: "20px", fontSize: "40px", margin: "0px" },
                children: [
                  Object(r.jsxs)("p", {
                    style: { margin: 0 },
                    children: [e.location.name, ", ", e.location.sys.country],
                  }),
                  Object(r.jsx)("img", {
                    alt: "flag",
                    src: "https://www.countryflags.io/".concat(
                      e.location.sys.country,
                      "/flat/64.png"
                    ),
                  }),
                ],
              }),
              Object(r.jsxs)("div", {
                children: [
                  Object(r.jsxs)("p", {
                    className: "align-center",
                    style: { fontSize: "30px" },
                    children: [
                      e.degreeFormat
                        ? i(Math.round(e.location.main.temp))
                        : Math.round(e.location.main.temp),
                      e.degreeFormat ? "\xb0F" : "\xb0C",
                      Object(r.jsx)("img", {
                        alt: "weather-icon",
                        src: "http://openweathermap.org/img/wn/".concat(
                          e.location.weather[0].icon,
                          "@2x.png"
                        ),
                      }),
                    ],
                  }),
                  Object(r.jsxs)("p", {
                    children: [
                      "Feels like",
                      " ",
                      e.degreeFormat
                        ? i(Math.round(e.location.main.feels_like))
                        : Math.round(e.location.main.feels_like),
                      e.degreeFormat ? "\xb0F" : "\xb0C",
                      " | ",
                      e.location.weather[0].description,
                      " | Humidity: ",
                      e.location.main.humidity,
                      "%",
                    ],
                  }),
                  Object(r.jsxs)("p", {
                    children: ["Sunrise: ", c[0], " | Sunset: ", c[1]],
                  }),
                  Object(r.jsx)("p", {}),
                  Object(r.jsx)("br", {}),
                ],
              }),
            ],
          });
        },
        h = function (e) {
          return Object(r.jsx)("div", {
            className: "align-center",
            children: Object(r.jsxs)("label", {
              className: "switch",
              children: [
                Object(r.jsx)("input", {
                  onChange: function () {
                    return e.toggleFormat();
                  },
                  checked: e.degreeFormat,
                  type: "checkbox",
                }),
                Object(r.jsx)("span", {
                  className: "slider round align-center",
                  children: Object(r.jsxs)("div", {
                    style: {
                      display: "flex",
                      gap: "20px",
                      color: "black",
                      zIndex: 2,
                      position: "relative",
                      fontSize: "12px",
                    },
                    children: [
                      Object(r.jsx)("span", { children: "C" }),
                      Object(r.jsx)("span", { children: "F" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var g = function () {
        var e = Object(a.useState)({}),
          t = Object(p.a)(e, 2),
          n = t[0],
          c = t[1],
          o = Object(a.useState)(!1),
          i = Object(p.a)(o, 2),
          s = i[0],
          g = i[1],
          b = Object(a.useState)(!0),
          x = Object(p.a)(b, 2),
          f = x[0],
          m = x[1],
          O = Object(a.useState)([]),
          w = Object(p.a)(O, 2),
          v = w[0],
          y = w[1],
          k = Object(a.useState)(!1),
          S = Object(p.a)(k, 2),
          F = S[0],
          L = S[1],
          N = Object(a.useState)(""),
          E = Object(p.a)(N, 2),
          M = E[0],
          C = E[1],
          z = function (e) {
            return "https://api.openweathermap.org/data/2.5/weather?q=".concat(
              e,
              "&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric"
            );
          },
          q = { mode: "cors" },
          D = function (e) {
            return new Request(z(e), q);
          };
        function I() {
          return (I = Object(u.a)(
            l.a.mark(function e() {
              var t, n;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          m(!0),
                          (e.prev = 1),
                          (e.next = 4),
                          fetch(
                            `${process.env.URL}`
                              .concat(v[0], "&lon=")
                              .concat(
                                v[1],
                                `
                                ${process.env.APP_KEY_ID}`
                                
                              ),
                            q
                          )
                        );
                      case 4:
                        if ((t = e.sent).ok) {
                          e.next = 7;
                          break;
                        }
                        throw new Error("bad network request");
                      case 7:
                        return (e.next = 9), t.json();
                      case 9:
                        (n = e.sent), c(n), L(!1), m(!1), (e.next = 20);
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(1)),
                          m(!1),
                          L(!0),
                          console.error(e.t0);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 15]]
              );
            })
          )).apply(this, arguments);
        }
        function T() {
          return (T = Object(u.a)(
            l.a.mark(function e(t) {
              var n, r;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          m(!0),
                          (e.prev = 1),
                          (e.next = 4),
                          fetch(D(t.target.value))
                        );
                      case 4:
                        if ((n = e.sent).ok) {
                          e.next = 7;
                          break;
                        }
                        throw new Error("bad network request");
                      case 7:
                        return (e.next = 9), n.json();
                      case 9:
                        (r = e.sent),
                          c(r),
                          (t.target.value = ""),
                          m(!1),
                          L(!1),
                          (e.next = 21);
                        break;
                      case 16:
                        (e.prev = 16),
                          (e.t0 = e.catch(1)),
                          L(!0),
                          m(!1),
                          console.error(e.t0);
                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 16]]
              );
            })
          )).apply(this, arguments);
        }
        function J() {
          return (J = Object(u.a)(
            l.a.mark(function e() {
              var t, n;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          m(!0),
                          (e.prev = 1),
                          (e.next = 4),
                          fetch(z("belize"), q)
                        );
                      case 4:
                        if ((t = e.sent).ok) {
                          e.next = 7;
                          break;
                        }
                        throw new Error("bad network request");
                      case 7:
                        return (e.next = 9), t.json();
                      case 9:
                        (n = e.sent), L(!1), c(n), m(!1), (e.next = 20);
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(1)),
                          L(!0),
                          m(!1),
                          console.error(e.t0);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 15]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          setInterval(function () {
            var e = new Date();
            C(
              e.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
            );
          }, 1e3),
          Object(a.useEffect)(
            function () {
              0 !== v.length &&
                (function () {
                  I.apply(this, arguments);
                })();
            },
            [v]
          ),
          Object(a.useEffect)(function () {
            !(function () {
              J.apply(this, arguments);
            })();
          }, []),
          Object(r.jsx)("div", {
            children: Object(r.jsxs)("div", {
              className: "App",
              children: [
                Object(r.jsx)(d, {
                  errorLoading: F,
                  getUserLocation: function () {
                    navigator.geolocation.getCurrentPosition(function (e) {
                      var t = [
                        Math.round(e.coords.latitude),
                        Math.round(e.coords.longitude),
                      ];
                      y(t);
                    });
                  },
                  getLocation: function (e) {
                    return T.apply(this, arguments);
                  },
                }),
                f
                  ? Object(r.jsx)("p", {
                      style: { fontSize: "40px" },
                      children: "Loading ...",
                    })
                  : Object(r.jsxs)("div", {
                      children: [
                        Object(r.jsx)(j, { degreeFormat: s, location: n }),
                        Object(r.jsx)(h, {
                          toggleFormat: function () {
                            return g(!s);
                          },
                          degreeFormat: s,
                        }),
                        Object(r.jsx)("p", { children: M }),
                      ],
                    }),
              ],
            }),
          })
        );
      };
      i.a.render(
        Object(r.jsx)(c.a.StrictMode, { children: Object(r.jsx)(g, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[15, 1, 2]],
]);

function log() {
  setTimeout(
    console.log.bind(
      console,
      "%c This Was Created By => Sergio J Cerritos %c",
      "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
      ""
    )
  );
}
log();