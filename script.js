// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}


// ===============================
// APPOINTMENT FORM SUBMIT
// ===============================
document.addEventListener("DOMContentLoaded", function () {

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

      // 👉 YAHAN APNA REAL WHATSAPP NUMBER DALEIN (91 ke saath)
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