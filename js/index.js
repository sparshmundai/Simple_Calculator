const all_buttons = document.querySelectorAll(".btn"),
  input_number = document.querySelector("#eval"),
  store_pre_result = document.querySelector(".store-pre-result");
let changeOperator = !1,
  checkDecimal = !0,
  estore = !1,
  checkFirstZero = !1;
const dHeight = () => {
  document.documentElement.style.setProperty(
    "--doc-height",
    `${window.innerHeight}px`
  );
};
window.addEventListener("resize", dHeight), dHeight();
for (let i = 0; i < all_buttons.length; i++)
  all_buttons[i].addEventListener("click", function (e) {
    if (
      (0 == store_pre_result.innerHTML.length &&
        "." === this.innerHTML &&
        (store_pre_result.innerHTML += "0"),
      !(
        ("0" === this.innerHTML && checkFirstZero) ||
        (0 == store_pre_result.innerHTML.length && "0" === this.innerHTML)
      ))
    ) {
      if (this.innerHTML.match("^[0-9]")) {
        if (
          ((checkFirstZero = !1),
          store_pre_result.clientHeight < store_pre_result.scrollHeight)
        )
          return void (store_pre_result.style.fontSize = "2rem");
        if (estore) {
          (input_number.value = ""),
            (store_pre_result.innerHTML =
              store_pre_result.innerHTML + "" + this.innerHTML);
          let e = store_pre_result.innerHTML,
            r = Function("return " + e)(),
            t = 1e5 * r;
          (t = Math.floor(t)),
            (input_number.value = t / 1e5),
            (changeOperator = !1);
        } else
          (store_pre_result.innerHTML =
            store_pre_result.innerHTML + "" + this.innerHTML),
            (input_number.value += this.innerHTML);
      }
      if (
        ("." === this.innerHTML &&
          checkDecimal &&
          ((store_pre_result.innerHTML += this.innerHTML), (checkDecimal = !1)),
        0 == store_pre_result.innerHTML.length &&
          "." === this.innerHTML &&
          checkDecimal &&
          ((store_pre_result.innerHTML += "0" + this.innerHTML),
          (checkDecimal = !1)),
        ["+", "-", "*", "/", "%"].includes(this.innerHTML))
      )
        if (
          ((estore = !0),
          (checkFirstZero = !0),
          (checkDecimal = !0),
          changeOperator)
        )
          if (
            this.innerHTML ===
            store_pre_result.innerHTML.charAt(
              store_pre_result.innerHTML.length - 1
            )
          );
          else {
            let e = store_pre_result.innerHTML.split("");
            (e[store_pre_result.innerHTML.length - 1] = this.innerHTML),
              (e = e.join("")),
              (store_pre_result.innerHTML = e),
              (changeOperator = !0);
          }
        else {
          if (
            this.innerHTML ===
            store_pre_result.innerHTML.charAt(
              store_pre_result.innerHTML.length - 1
            )
          )
            return;
          ["+", "-", "*", "/", "%"].includes(this.innerHTML) &&
          0 == store_pre_result.innerHTML.length
            ? ((store_pre_result.innerHTML = "0" + this.innerHTML),
              (changeOperator = !0))
            : ((store_pre_result.innerHTML += this.innerHTML),
              (changeOperator = !0));
        }
      "=" === this.innerHTML &&
        ((estore = !0),
        (input_number.style.fontSize = "2.5rem"),
        (store_pre_result.style.fontSize = "2rem"),
        (store_pre_result.innerHTML = input_number.value),
        (changeOperator = !1)),
        ["C", "AC"].includes(this.innerHTML) &&
          ((store_pre_result.innerHTML = ""),
          (input_number.value = ""),
          (estore = !1)),
        "X" === this.innerHTML &&
          ((store_pre_result.innerHTML = store_pre_result.innerHTML.substring(
            0,
            store_pre_result.innerHTML.length - 1
          )),
          store_pre_result.innerHTML.length > 0
            ? (["+", "-", "*", "/", "%", "."].includes(
                store_pre_result.innerHTML.charAt(
                  store_pre_result.innerHTML.length - 1
                )
              ) ||
                ((temp = eval(store_pre_result.innerHTML)),
                (input_number.value = temp)),
              store_pre_result.innerHTML.charAt(
                store_pre_result.innerHTML.length - 1
              ) && (checkDecimal = !0))
            : ((input_number.value = ""), (estore = !1)));
    }
  });
document.addEventListener("keyup", function (e) {
  if (
    (0 == store_pre_result.innerHTML.length &&
      "." === e.key &&
      (store_pre_result.innerHTML += "0"),
    !(
      ("0" === e.key && checkFirstZero) ||
      (0 == store_pre_result.innerHTML.length && "0" === e.key)
    ))
  ) {
    if (e.key.match("^[0-9]")) {
      if (
        ((checkFirstZero = !1),
        store_pre_result.clientHeight < store_pre_result.scrollHeight)
      )
        return void (store_pre_result.style.fontSize = "2rem");
      if (estore) {
        (input_number.value = ""),
          (store_pre_result.innerHTML =
            store_pre_result.innerHTML + "" + e.key);
        let r = store_pre_result.innerHTML,
          t = Function("return " + r)(),
          n = 1e5 * t;
        (n = Math.floor(n)),
          (input_number.value = n / 1e5),
          (changeOperator = !1);
      } else
        (store_pre_result.innerHTML += e.key), (input_number.value += e.key);
    }
    if (
      ("." === e.key &&
        checkDecimal &&
        ((store_pre_result.innerHTML += e.key),
        (checkDecimal = !1),
        (checkFirstZero = !1)),
      0 == store_pre_result.innerHTML.length &&
        "." === e.key &&
        checkDecimal &&
        ((store_pre_result.innerHTML += "0" + e.key), (checkDecimal = !1)),
      ["+", "-", "*", "/", "%"].includes(e.key))
    )
      if (
        ((estore = !0),
        (checkFirstZero = !0),
        (checkDecimal = !0),
        changeOperator)
      )
        if (
          e.key ===
          store_pre_result.innerHTML.charAt(
            store_pre_result.innerHTML.length - 1
          )
        );
        else {
          let r = store_pre_result.innerHTML.split("");
          (r[store_pre_result.innerHTML.length - 1] = e.key),
            (r = r.join("")),
            (store_pre_result.innerHTML = r),
            (changeOperator = !0);
        }
      else {
        if (
          e.key ===
          store_pre_result.innerHTML.charAt(
            store_pre_result.innerHTML.length - 1
          )
        )
          return;
        ["+", "-", "*", "/", "%"].includes(e.key) &&
        0 == store_pre_result.innerHTML.length
          ? ((store_pre_result.innerHTML = "0" + e.key), (changeOperator = !0))
          : ((store_pre_result.innerHTML += e.key), (changeOperator = !0));
      }
    "Enter" === e.key &&
      ((estore = !0),
      (input_number.style.fontSize = "2.5rem"),
      (store_pre_result.style.fontSize = "2rem"),
      (store_pre_result.innerHTML = input_number.value),
      (changeOperator = !1)),
      ("Escape" !== e.key && "escape" !== e.key) ||
        ((store_pre_result.innerHTML = ""),
        (input_number.value = ""),
        (estore = !1)),
      ("Backspace" !== e.key && "backspace" !== e.key) ||
        ((store_pre_result.innerHTML = store_pre_result.innerHTML.substring(
          0,
          store_pre_result.innerHTML.length - 1
        )),
        store_pre_result.innerHTML.length > 0
          ? (["+", "-", "*", "/", "%", "."].includes(
              store_pre_result.innerHTML.charAt(
                store_pre_result.innerHTML.length - 1
              )
            ) ||
              ((temp = eval(store_pre_result.innerHTML)),
              (input_number.value = temp)),
            store_pre_result.innerHTML.charAt(
              store_pre_result.innerHTML.length - 1
            ) && (checkDecimal = !0))
          : ((input_number.value = ""), (estore = !1)));
  }
});
