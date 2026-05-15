document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("news-grid");
  let htmlContent = "";

  eventsData.forEach((event) => {
    const excerpt = event.content[0].substring(0, 120) + "...";
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
});
