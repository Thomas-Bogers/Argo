const message =
  "Thank you for submitting your message to our crew ! We will respond ASAP !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
