(() => {
  "use strict";

  /* 1. Ecosystem search: filters the project links in "Our network" */
  const dir = document.querySelector(".dir");
  if (dir) {
    const links = Array.from(dir.querySelectorAll("a"));

    const toolbar = document.createElement("div");
    toolbar.style.cssText = "display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:18px";

    const input = document.createElement("input");
    input.type = "search";
    input.placeholder = "Search projects";
    input.setAttribute("aria-label", "Search Black Organization projects");
    input.style.cssText = "flex:1 1 260px;padding:12px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:#171512;color:#f5efe5;font:inherit";

    const count = document.createElement("p");
    count.setAttribute("aria-live", "polite");
    count.style.cssText = "margin:0;color:#c6bba8;font-size:.9rem";

    toolbar.append(input, count);
    dir.before(toolbar);

    const empty = document.createElement("p");
    empty.textContent = "No projects match your search.";
    empty.style.cssText = "color:#c6bba8;margin-top:14px";
    empty.hidden = true;
    dir.after(empty);

    const applyFilter = () => {
      const query = input.value.trim().toLowerCase();
      let shown = 0;
      links.forEach(link => {
        const match = link.textContent.toLowerCase().includes(query);
        link.style.display = match ? "" : "none"; // inline style, since .dir a sets display:flex
        if (match) shown++;
      });
      count.textContent = `${shown} of ${links.length} projects`;
      empty.hidden = shown !== 0;
    };

    input.addEventListener("input", applyFilter);
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { input.value = ""; applyFilter(); }
    });
    applyFilter();
  }

  /* 2. Scroll spy: highlights the nav link for the section in view */
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.style.color = active ? "#f4d97d" : "";
          link.style.opacity = active ? "1" : "";
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(section => spy.observe(section));
  }
})();
