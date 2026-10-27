document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "./") a.classList.add("active");
});
const form = document.getElementById("contact-form");
const status = document.getElementById("status");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  if (!data.get("name") || !/\S+@\S+\.\S+/.test(data.get("email")) || !data.get("message")) {
    status.textContent = "Please fill in your name, a valid email, and a message.";
    return;
  }
  // The contact.php backend is not connected yet.
  status.textContent = "Thanks, your message is ready to send once the contact backend is connected.";
  form.reset();
});
