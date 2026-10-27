document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "./") a.classList.add("active");
});
const designs = ["Poster", "Logo", "Brand Identity", "Album Cover", "Book Cover", "Packaging"];
const grid = document.getElementById("showcase");
designs.forEach(name => {
  const item = document.createElement("div");
  item.className = "placeholder";
  item.textContent = `${name}: add image to images/designs/`;
  grid.appendChild(item);
});
