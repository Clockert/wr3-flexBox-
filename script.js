document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const contactMethod = document.querySelector(
    'input[name="contactMethod"]:checked'
  ).value;
  const isSubscribed = document.getElementById("subscribe").checked;

  // Create success message content
  const successMessage = `
    <div class="success-icon" aria-hidden="true">🎉</div>
    <h2 class="success-title" id="success-title">Thanks, ${name}!</h2>
    <div class="submission-details">
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
      <p><strong>Newsletter:</strong> ${
        isSubscribed ? "Subscribed" : "Not subscribed"
      }</p>
    </div>
    <p class="success-text">We'll get back to you shortly! But not really, this form isn't connected to a server</p>
    <button class="close-button" onclick="closeSuccessMessage()" aria-label="Close dialog">Close</button>
  `;

  // Update and show dialog
  const dialog = document.getElementById("successOverlay");
  document.querySelector(".success-message").innerHTML = successMessage;
  dialog.showModal();

  // Reset form
  this.reset();
});

function closeSuccessMessage() {
  document.getElementById("successOverlay").close();
}

// Improved dialog close handler
document.getElementById("successOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.target.close();
  }
});
