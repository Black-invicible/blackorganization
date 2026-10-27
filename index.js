(() => {
  "use strict";

  // Add new work here. genre must be one of the values in GENRES.
  const GENRES = ["All", "Story", "Film", "Music", "Poetry", "Essay", "Screenplay"];
  const WORKS = [
    { title: "First Story Title", genre: "Story", by: "Author name", excerpt: "A short summary of the story goes here." },
    { title: "First Film Title", genre: "Film", by: "Director or writer", excerpt: "A short logline for the film goes here." },
    { title: "First Song Title", genre: "Music", by: "Artist or writer", excerpt: "A short description of the song goes here." },
    { title: "First Poem Title", genre: "Poetry", by: "Poet name", excerpt: "A short note about the poem goes here." }
  ];

  const filters = document.getElementById("genre-filters");
  const list = document.getElementById("works");
  const empty = document.getElementById("empty");
  let active = "All";

  function renderFilters() {
    filters.innerHTML = "";
    GENRES.forEach(genre => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = genre;
      btn.setAttribute("aria-pressed", String(genre === active));
      btn.addEventListener("click", () => {
        active = genre;
        renderFilters();
        renderWorks();
      });
      filters.appendChild(btn);
    });
  }

  function renderWorks() {
    list.innerHTML = "";
    const shown = WORKS.filter(w => active === "All" || w.genre === active);
    shown.forEach(w => {
      const card = document.createElement("article");
      card.className = "card work";
      card.innerHTML = `
        <div class="genre">${w.genre}</div>
        <h3></h3>
        <div class="by"></div>
        <p></p>`;
      card.querySelector("h3").textContent = w.title;
      card.querySelector(".by").textContent = `By ${w.by}`;
      card.querySelector("p").textContent = w.excerpt;
      list.appendChild(card);
    });
    empty.hidden = shown.length !== 0;
  }

  renderFilters();
  renderWorks();
})();
