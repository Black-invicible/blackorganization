document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "./") a.classList.add("active");
});
const staff = [
  { name: "CT Black", role: "Founder and CEO", email: "blackorganizationctblack@gmail.com" },
  { name: "Staff Name", role: "Role", email: "" },
  { name: "Staff Name", role: "Role", email: "" },
  { name: "Staff Name", role: "Role", email: "" }
];
const grid = document.getElementById("team");
staff.forEach(s => {
  const card = document.createElement("article");
  card.className = "card staff-card";
  card.innerHTML = `<div class="avatar">Photo</div><h3>${s.name}</h3><div class="role">${s.role}</div>${s.email ? `<p><a href="mailto:${s.email}">${s.email}</a></p>` : ""}`;
  grid.appendChild(card);
});
