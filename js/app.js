document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("news-grid");
  const filterButtonsContainer = document.getElementById("filter-buttons");

  // Get unique categories
  const categories = ["All", ...new Set(eventsData.map((event) => event.category))];

  // Render filter buttons
  if (filterButtonsContainer) {
    let filterHtml = "";
    categories.forEach(category => {
      filterHtml += `<button class="filter-btn ${category === 'All' ? 'active' : ''}" data-category="${category}">${category}</button>`;
    });
    filterButtonsContainer.innerHTML = filterHtml;

    // Add event listeners to buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        // Filter and render
        const selectedCategory = e.target.getAttribute("data-category");
        renderEvents(selectedCategory);
      });
    });
  }

  function renderEvents(category = "All") {
    let htmlContent = "";
    
    let filteredEvents = [...eventsData].reverse();
    if (category !== "All") {
      filteredEvents = filteredEvents.filter(event => event.category === category);
    }

    if (filteredEvents.length === 0) {
      grid.innerHTML = "<div style='grid-column: 1 / -1; text-align: center; color: #777; padding: 2rem 0;'>No events found for this category.</div>";
      return;
    }

    filteredEvents.forEach((event) => {
      let excerptText = "";
      if (Array.isArray(event.content)) {
        excerptText = event.content[0] || "";
      } else if (typeof event.content === 'string') {
        // Use DOM to safely strip HTML and decode entities (like &nbsp;)
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = event.content;
        excerptText = tempDiv.textContent || tempDiv.innerText || "";
        excerptText = excerptText.replace(/\s+/g, ' ').trim();
      }
      
      let excerpt = excerptText;
      if (excerpt.length > 150) {
        excerpt = excerpt.substring(0, 150);
        const lastSpace = excerpt.lastIndexOf(" ");
        if (lastSpace > 0) {
          excerpt = excerpt.substring(0, lastSpace) + "...";
        } else {
          excerpt = excerpt + "...";
        }
      }
      htmlContent += `
              <div class="newsCard">
                  <div class="imageContainer">
                      <img src="${event.image}" alt="${event.title}" class="newsImage lazy-image" loading="lazy" />
                      <div class="categoryBadge">${event.category}</div>
                  </div>
                  <div class="newsContent">
                      <div class="dateRow">
                          <i class="far fa-calendar-alt"></i>
                          <span>${event.date}</span>
                      </div>
                      <h3 class="newsTitle">
                          <a href="/news/${event.slug}">${event.title}</a>
                      </h3>
                      <p class="newsExcerpt">${excerpt}</p>
                      <a href="/news/${event.slug}" class="readMoreBtn">
                          Read Article <i class="fas fa-arrow-right"></i>
                      </a>
                  </div>
              </div>
          `;
    });

    grid.innerHTML = htmlContent;

    const images = document.querySelectorAll(".lazy-image");
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });
      }
    });
  }

  // Initial render
  renderEvents();
});
