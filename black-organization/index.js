document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "index.html" || a.getAttribute("href") === "./") a.classList.add("active");
});
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
