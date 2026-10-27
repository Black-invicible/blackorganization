document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "./") a.classList.add("active");
});
