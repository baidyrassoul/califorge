(function () {
  "use strict";

  // ---- Footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Survey link (replace with your Tally.so / Google Forms URL) ----
  document.getElementById("survey-link").href =
    "https://tally.so/r/YOUR_SURVEY_ID";

  // ---- Waitlist form ----
  // 1) Free form backend (Formspree): https://formspree.io — free 50 subs/month.
  //    Replace with your own endpoint. Leave as "" to run in "local-only" mode.
  //    SETUP: https://formspree.io → create form → copy endpoint URL
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/mppakobz";

  var form = document.getElementById("waitlist-form");
  var statusEl = document.getElementById("form-status");
  var emailInput = document.getElementById("email");

  function setStatus(msg, cls) {
    statusEl.textContent = msg;
    statusEl.className = "form-status" + (cls ? " " + cls : "");
  }

  // Local backup store (0€, works even with no backend configured)
  function saveLocally(email) {
    try {
      var stored = JSON.parse(localStorage.getItem("califorge_waitlist") || "[]");
      stored.push({ email: email, at: new Date().toISOString() });
      localStorage.setItem("califorge_waitlist", JSON.stringify(stored));
      return true;
    } catch (e) {
      return false;
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.", "err");
      emailInput.focus();
      return;
    }

    // Always store locally as a safety net.
    saveLocally(email);

    if (!FORMSPREE_ENDPOINT) {
      setStatus("You're on the list! We'll be in touch soon.", "ok");
      form.reset();
      return;
    }

    setStatus("Signing you up…", "");

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (res) {
        if (res.ok) {
          setStatus("You're on the list! We'll be in touch soon.", "ok");
          form.reset();
        } else {
          setStatus("Thanks! (Note: server unreachable — we kept your email locally.)", "ok");
          form.reset();
        }
      })
      .catch(function () {
        setStatus("Thanks! (Note: server unreachable — we kept your email locally.)", "ok");
        form.reset();
      });
  });
})();
