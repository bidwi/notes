(() => {
  var n = {
      106: (n, e, t) => {
        "use strict";
        t.d(e, { A: () => s });
        var a = t(601),
          o = t.n(a),
          r = t(314),
          i = t.n(r)()(o());
        i.push([
          n.id,
          '.validation-message {\n  margin-block-start: 0.5rem;\n  color: red;\n}\n\n::placeholder {\n  color: black;\n  opacity: 0.5;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f6f6f6;\n  margin: 0;\n  padding: 0;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 2fr 1fr 0.5fr;\n  gap: 10px;\n  padding: 10px;\n  margin-top: 3rem;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.form-group {\n  max-width: 260px;\n  margin-left: 10vw;\n}\n\n@media only screen and (max-width: 500px) {\n  .form-group {\n    margin-left: 2vw;\n  }\n}\n\nlabel {\n  font-weight: bold;\n}\n\ninput,\ntextarea,\ninput[type="text"],\ninput[type="date"] {\n  width: 100%;\n  padding: 10px;\n  border: 1.5px solid #d9cab3;\n  border-radius: 5px;\n  font-size: 16px;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  box-sizing: border-box;\n  max-width: 200px;\n}\n\n.validation-message {\n  color: #ff0000;\n  font-size: 14px;\n}\n\n.btn {\n  background-color: #6d9886;\n  color: #f6f6f6;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.btn:hover {\n  background-color: #212121;\n}\n',
          "",
        ]);
        const s = i;
      },
      314: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  a = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  a &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  a && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, a, o, r) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (a)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (i[d] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (a && i[c[0]]) ||
                  (void 0 !== r &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = r)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  o &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = o))
                      : (c[4] = "".concat(o))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        "use strict";
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        "use strict";
        var e = [];
        function t(n) {
          for (var t = -1, a = 0; a < e.length; a++)
            if (e[a].identifier === n) {
              t = a;
              break;
            }
          return t;
        }
        function a(n, a) {
          for (var r = {}, i = [], s = 0; s < n.length; s++) {
            var d = n[s],
              l = a.base ? d[0] + a.base : d[0],
              c = r[l] || 0,
              p = "".concat(l, " ").concat(c);
            r[l] = c + 1;
            var u = t(p),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var f = o(m, a);
              (a.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: f, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var r = a((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < r.length; i++) {
              var s = t(r[i]);
              e[s].references--;
            }
            for (var d = a(n, o), l = 0; l < r.length; l++) {
              var c = t(r[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            r = d;
          };
        };
      },
      659: (n) => {
        "use strict";
        var e = {};
        n.exports = function (n, t) {
          var a = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          a.appendChild(t);
        };
      },
      540: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        "use strict";
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var a = "";
                t.supports && (a += "@supports (".concat(t.supports, ") {")),
                  t.media && (a += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (a += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (a += t.css),
                  o && (a += "}"),
                  t.media && (a += "}"),
                  t.supports && (a += "}");
                var r = t.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (a +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */",
                    )),
                  e.styleTagTransform(a, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        "use strict";
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      284: () => {
        class n extends HTMLElement {
          constructor() {
            super(), (this.isDataDisplayed = !1), this.render();
          }
          connectedCallback() {
            this.getNotes();
          }
          render() {
            this.innerHTML =
              '\n    <style>\n\n  button {\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #6D9886;\n    color: #F6F6F6;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 30px;\n    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n  }\n\n  button:hover {\n    transition: 0.5s ease;\n    background-color: #212121;\n    color: #F6F6F6;\n  }\n\n  .note {\n    display: grid;\n    grid-template-columns: auto;\n    border: 4px solid #D9CAB3;\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n    background-color: #6D9886;\n    max-width: 60rem;\n  }\n\n  .note h2 {\n    margin-top: 0;\n    color: #F6F6F6;\n  }\n\n  .note p {\n    margin-bottom: 5px;\n    color: #F6F6F6;\n    padding: 5px;\n    padding-left: 2px;\n  }\n\n  .delete-button {\n    background-color: #F6F6F6;\n    color: #6D9886;\n    font-weight: bolder;\n  }\n\n  .delete-button:hover {\n    background-color: #F6F6F6;\n    color: red;\n  }\n\n  #loadingIndicator {\n    background-color: red;\n    margin-bottom: 2rem;\n    padding: 0.8rem;\n    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: bolder;\n    font-size: 15px;\n  }\n\n\n  @media only screen and (max-width: 500px) {\n    .note {\n    max-width: 7.3rem;\n    font-size: 8px;\n    }\n\n    button {\n      padding: 7px 10px;\n    }\n\n  }\n</style>\n\n<button type="button" id="cekNotes">Cek Notes</button>\n<p id="loadingIndicator" style="display: none;">Menunggu semua data muncul..</p>\n    ';
            const n = document.getElementById("cekNotes");
            n.addEventListener("click", () => this.toggleDisplayData(), {
              once: !0,
            }),
              this.appendChild(n),
              document.querySelector("form").addEventListener("submit", (n) => {
                n.preventDefault();
                const e = new FormData(n.target),
                  t = {};
                e.forEach((n, e) => {
                  t[e] = n;
                }),
                  this.insertNotes(t),
                  (this.notesData = []),
                  this.notesData.push(t),
                  this.displayData();
              });
          }
          toggleDisplayData() {
            this.isDataDisplayed ? this.hideData() : this.displayData();
          }
          displayData() {
            const n = [];
            if (!this.isDataDisplayed) {
              const e = n
                .map(
                  (n) =>
                    `\n            <div class="note">\n              <h2>${n.title}</h2>\n              <p>${n.body}</p>\n              <p>Created At: ${new Date(n.createdAt).toISOString().slice(0, 10)}</p>\n                <button type="submit" class="delete-button" data-id="${n.id}">Delete</button>\n            </div>\n          `,
                )
                .join("");
              (this.dataDisplay = document.createElement("div")),
                (this.dataDisplay.innerHTML = e),
                this.appendChild(this.dataDisplay),
                (this.isDataDisplayed = !0);
            }
            const e = this.notesData
              .map(
                (n) =>
                  `\n          <div class="note">\n            <h2>${n.title}</h2>\n            <p>${n.body}</p>\n            <p>Created At: ${new Date(n.createdAt).toISOString().slice(0, 10)}</p>\n            <button type="submit" class="delete-button" data-id="${n.id}">Delete</button>\n          </div>\n        `,
              )
              .join("");
            document.addEventListener("click", (n) => {
              if (n.target.classList.contains("delete-button")) {
                const e = n.target.dataset.id;
                (this.notesData = this.notesData.filter((n) => n.id !== e)),
                  n.target.parentNode.remove();
              }
            });
            const t = document.createElement("div");
            (t.innerHTML = e), this.appendChild(t);
          }
          hideData() {
            this.dataDisplay &&
              (this.removeChild(this.dataDisplay), (this.isDataDisplayed = !1));
          }
          insertNotes = async (n) => {
            const e = { title: n.title, body: n.body };
            try {
              const n = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345",
                  },
                  body: JSON.stringify(e),
                },
                t = await fetch("https://notes-api.dicoding.dev/v2/notes", n),
                a = await t.json();
              "success" === a.status
                ? console.log("Note ditambahkan:", a)
                : (alert("Gagal menambahkan data, coba lagi"),
                  console.error(
                    "Gagal menambahkan note, coba lagi.",
                    a.message,
                  ));
            } catch (n) {
              alert("Sedang error, Coba lagi lain kali"),
                console.error("Gagal menambahkan. Coba nanti.");
            }
          };
          removeNotes = (n) => {
            fetch(`https://notes-api.dicoding.dev/v2/notes/${n}`, {
              method: "DELETE",
              headers: { "X-Auth-Token": "12345" },
            })
              .then((n) => n.json())
              .then((n) => {
                "success" === n.status
                  ? console.log("Note terhapus:", n)
                  : (alert("Gagal hapus data, Coba lagi lain kali"),
                    console.error("Failed to delete note:", n.message));
              })
              .catch((n) => {
                console.error("Gagal hapus notes, coba lagi."),
                  showResponseMessage(n),
                  alert("Sedang error, Coba lagi lain kali");
              });
          };
          getNotes = async () => {
            try {
              document.getElementById("loadingIndicator").style.display =
                "block";
              const n = await fetch("https://notes-api.dicoding.dev/v2/notes"),
                e = await n.json();
              "success" === e.status
                ? ((this.notesData = e.data),
                  this.displayData(),
                  console.log("Note ditampilkan:", e))
                : (console.error("Gagal menampilkan data, ", e.message),
                  alert("Gagal menampilkan data, Coba lagi lain kali"));
            } catch (n) {
              alert("Sedang error, Coba lagi lain kali"),
                showResponseMessage(n);
            } finally {
              setTimeout(() => {
                document.getElementById("loadingIndicator").style.display =
                  "none";
              }, 3e3);
            }
          };
        }
        document.addEventListener("click", (n) => {
          if (n.target.classList.contains("delete-button")) {
            const e = n.target.dataset.id;
            document.querySelector("button-component").removeNotes(e);
          }
        }),
          customElements.define("button-component", n);
      },
      523: () => {
        class n extends HTMLElement {
          constructor() {
            super(), this.render();
          }
          render() {
            this.innerHTML =
              '\n<style>\n.site-footer {\n  background-color: #6D9886;\n  padding: 20px 0;\n  font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n  margin-top: 40vh;\n}\n\n.container {\n  max-width: 1200px; \n  margin: 0 auto;\n}\n\np {\n  color: #F6F6F6;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.footer-content p {\n  margin: 0;\n}\n\n.footer-content a {\n  text-decoration: none;\n  color: #F6F6F6;\n  margin: 0.4rem;\n}\n\n.footer-content a:hover {\n  text-decoration: underline;\n}\n\n.nav-footer {\n  margin: 1rem;\n}\n\n\n</style>\n\n<footer class="site-footer">\n    <div class="container">\n        <div class="footer-content">\n\n                <p>&copy; Notes App, Billy Dwi Prakoso. All rights reserved.</p>\n\n            <nav class=\'nav-footer\' id=\'footer-bookmark\'>\n                <a href="#"\'>Email</a>  \n                <a href="#">Instagram</a>\n            </nav>\n        </div>\n    </div>\n</footer>\n       ';
          }
        }
        customElements.define("footer-component", n);
      },
      937: () => {
        class n extends HTMLElement {
          constructor() {
            super(), this.render();
          }
          render() {
            this.innerHTML =
              '\n    <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      \n    }\n  \n    header {\n      background-color: #6D9886;\n      color: #F6F6F6;\n      padding: 20px 0;\n      \n    }\n  \n    .container {\n      width: 90%;\n      margin: 0 auto;\n      max-width: 1200px;\n      display: grid;\n      grid-template-columns: auto 1fr;\n      align-items: center;\n      \n    }\n  \n    h1 {\n      font-size: 24px;\n      font-family: Verdana, sans-serif;\n      font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n    }\n  \n    nav {\n      justify-self: end;\n      \n    }\n  \n    nav ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n      text-align: right;\n    }\n  \n    nav ul li {\n      display: inline-block;\n      margin-left: 40px;\n    }\n  \n    nav ul li a {\n      color: #F6F6F6;\n      text-decoration: none;\n      font-size: 16px;\n      transition: color 0.3s ease;\n      font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n      font-weight: bolder;\n    }\n  \n    nav ul li a:hover {\n      color: #D9CAB3;\n  \n    }\n  \n\n    @media only screen and (max-width: 420px) {\n      .container {\n        grid-template-columns: 1fr auto;\n        justify-items: center;\n      }\n  \n      h1 {\n        text-align: center;\n        margin-bottom: 10px;\n        \n      }\n  \n      nav {\n        grid-column: span 2;\n        justify-self: center;\n        margin-bottom: 20px;\n        padding-top: 10px;\n      }\n  \n      nav ul {\n        display: flex;\n        justify-content: center;\n      }\n  \n      nav ul li {\n        margin: 0 10px;\n      }\n    }\n  </style>\n\n\n    <header>\n        <div class="container" id="header-bookmark">\n            <h1>Notes App</h1>\n            <nav>\n                <ul>\n                    <li><a href="#header-bookmark">Buat Note</a></li>\n                    <li><a href="#footer-bookmark">Kontak</a></li>\n                </ul>\n            </nav>\n        </div>\n    </header>\n\n\n\n       ';
          }
        }
        customElements.define("header-component", n);
      },
    },
    e = {};
  function t(a) {
    var o = e[a];
    if (void 0 !== o) return o.exports;
    var r = (e[a] = { id: a, exports: {} });
    return n[a](r, r.exports, t), r.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var a in e)
        t.o(e, a) &&
          !t.o(n, a) &&
          Object.defineProperty(n, a, { enumerable: !0, get: e[a] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      "use strict";
      var n = t(72),
        e = t.n(n),
        a = t(825),
        o = t.n(a),
        r = t(659),
        i = t.n(r),
        s = t(56),
        d = t.n(s),
        l = t(540),
        c = t.n(l),
        p = t(113),
        u = t.n(p),
        m = t(106),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = d()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = c()),
        e()(m.A, f),
        m.A && m.A.locals && m.A.locals,
        t(937),
        t(523),
        t(284);
      const g = document.querySelector("form"),
        h = g.elements.title,
        v = g.elements.body,
        y = g.elements.createdAt;
      g.addEventListener("submit", (n) => n.preventDefault());
      const b = (n) => {
        n.target.setCustomValidity(""),
          n.target.validity.patternMismatch
            ? n.target.setCustomValidity("Tidak boleh ada simbol.")
            : n.target.validity.valueMissing
              ? n.target.setCustomValidity("Wajib diisi.")
              : n.target.validity.tooShort &&
                n.target.setCustomValidity(
                  "Tulis minimal 6 karakter (contoh: sepeda).",
                );
      };
      function x(n) {
        const e = n.target.validity.valid,
          t = n.target.validationMessage,
          a = n.target.getAttribute("aria-describedby"),
          o = a ? document.getElementById(a) : null;
        o.innerText = o && t && !e ? t : "";
      }
      h.addEventListener("change", b),
        h.addEventListener("invalid", b),
        h.addEventListener("blur", x),
        v.addEventListener("change", b),
        v.addEventListener("invalid", b),
        v.addEventListener("blur", x),
        y.addEventListener("change", b),
        y.addEventListener("invalid", b),
        y.addEventListener("blur", x);
      let k = document.querySelector("button-component");
      document.getElementById("cekNotes").onclick = () => {
        k.setAttribute("isClicked", "sudah");
      };
    })();
})();