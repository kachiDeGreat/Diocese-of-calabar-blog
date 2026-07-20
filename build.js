const fs = require("fs");
const path = require("path");

const eventsData = require('./js/data.js');
const templatePath = path.join(__dirname, "event.html");
const templateHtml = fs.readFileSync(templatePath, "utf8");

const newsDir = path.join(__dirname, "news");
if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir);
}

eventsData.forEach((event) => {
  const eventDir = path.join(newsDir, event.slug);
  if (!fs.existsSync(eventDir)) {
    fs.mkdirSync(eventDir);
  }

  const excerpt = event.content[0].substring(0, 150) + "...";

  let finalHtml = templateHtml
    .replace(
      /<title>.*?<\/title>/g,
      `<title>${event.title} | Diocese of Calabar</title>`,
    )
    .replace(
      /content="Stay updated with the latest news, events, and announcements\."/g,
      `content="${excerpt}"`,
    )
    .replace(
      /content="Article \| Diocese of Calabar"/g,
      `content="${event.title}"`,
    )
    .replace(
      /content="https:\/\/drop-bibbi4ujk-onyekachidegreats-projects\.vercel\.app\/qa3xoupmngktvl0mkqru"/g,
      `content="${event.image}"`,
    );

  const outputPath = path.join(eventDir, "index.html");
  fs.writeFileSync(outputPath, finalHtml);

  console.log(`✅ Baked: /news/${event.slug}/index.html`);
});

console.log("🎉 All articles baked successfully! Ready to push to Vercel.");
