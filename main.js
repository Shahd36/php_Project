document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("theme-dark");
      document.body.classList.toggle("theme-light");
    });
  }

  const ctaBtn = document.getElementById("cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      alert("You clicked the Primary Action!");
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name.length < 2) {
        alert("Please enter your name (at least 2 characters).");
        event.preventDefault();
        return;
      }

      if (email === "") {
        alert("Please enter your email.");
        event.preventDefault();
        return;
      }

      alert("Form submitted successfully 🎉");
    });
  }
});
