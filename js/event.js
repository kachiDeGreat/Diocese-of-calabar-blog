document.addEventListener("DOMContentLoaded", () => {
  const pathArray = window.location.pathname.split("/");
  const slug = pathArray.filter((item) => item !== "").pop();

  const articleContainer = document.getElementById("article-container");
  const popularList = document.getElementById("popular-list");
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    document.title = "Not Found | Diocese of Calabar";
    articleContainer.innerHTML = `
            <div class="articleContainer" style="padding: 3rem; text-align: center;">
                <h2>Article Not Found</h2>
                <p>The news article you are looking for does not exist.</p>
                <a href="/" class="readMoreBtn">Go Back to News</a>
            </div>
        `;
    return;
  }

  document.title = `${event.title} | Diocese of Calabar`;

  let paragraphsHtml = "";
  event.content.forEach((paragraph) => {
    paragraphsHtml += `<p>${paragraph}</p>`;
  });

  articleContainer.innerHTML = `
        <div class="articleContainer">
            <div class="mainImageWrapper">
                <img src="${event.image}" alt="${event.title}" class="mainImage lazy-image" />
                <div class="categoryTag">${event.category}</div>
            </div>
            <div class="articleHeader">
                <span class="dateText">
                    <i class="far fa-calendar-alt" style="margin-right: 8px;"></i>
                    ${event.date}
                </span>
                <h1 class="articleTitle">${event.title}</h1>
            </div>
            <div class="articleBody">
                ${paragraphsHtml}
            </div>
        </div>
    `;

  const popularNews = [...eventsData]
    .reverse()
    .filter((e) => e.id !== event.id)
    .slice(0, 3);
  let sidebarHtml = "";

  popularNews.forEach((news) => {
    sidebarHtml += `
            <a href="/news/${news.slug}" class="popularItem">
                <div class="popularImgBox">
                    <img src="${news.image}" alt="${news.title}" class="lazy-image" />
                </div>
                <div class="popularInfo">
                    <h4>${news.title}</h4>
                    <span>
                        <i class="far fa-clock" style="margin-right: 5px; color: #c52810;"></i>
                        ${news.date}
                    </span>
                </div>
            </a>
        `;
  });

  popularList.innerHTML = sidebarHtml;

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
