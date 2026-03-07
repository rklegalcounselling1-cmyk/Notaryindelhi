// ===============================
// DOM LOADED
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // MOBILE MENU TOGGLE
  // ===============================
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }


  // ===============================
  // SERVICES DROPDOWN TOGGLE
  // ===============================
  const dropdownTitles = document.querySelectorAll(".service-card.dropdown span");

  dropdownTitles.forEach(function (title) {
    title.addEventListener("click", function () {

      const content = this.nextElementSibling;

      // Close other dropdowns (optional but professional)
      document.querySelectorAll(".dropdown-content").forEach(function (item) {
        if (item !== content) {
          item.style.display = "none";
        }
      });

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });


  // ===============================
  // APPOINTMENT FORM SUBMIT (WHATSAPP)
  // ===============================
  const form = document.getElementById("appointmentForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      const phone = form.querySelector("input[type='tel']").value.trim();
      const service = form.querySelector("select").value;
      const messageField = form.querySelector("textarea").value.trim();

      if (!name || !phone || service === "Select Service") {
        alert("Please fill all required fields.");
        return;
      }

      // 👉 YOUR WHATSAPP NUMBER (WITH COUNTRY CODE)
      const whatsappNumber = "918700980489";

      const message =
        "New Appointment Request:%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Service: " + service + "%0A" +
        "Requirement: " + messageField;

      const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

      window.open(whatsappURL, "_blank");

      form.reset();
    });
  }

});
