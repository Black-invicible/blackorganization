document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === "./") a.classList.add("active");
});
const posts = [
  { title: "First Post Title", date: "Coming soon", excerpt: "A short summary of the piece goes here." },
  { title: "Second Post Title", date: "Coming soon", excerpt: "A short summary of the piece goes here." },
  { title: "Third Post Title", date: "Coming soon", excerpt: "A short summary of the piece goes here." }
];
const list = document.getElementById("posts");
posts.forEach(p => {
  const card = document.createElement("article");
  card.className = "card post";
  card.innerHTML = `<h3>${p.title}</h3><div class="meta">${p.date}</div><p>${p.excerpt}</p>`;
  list.appendChild(card);
});
