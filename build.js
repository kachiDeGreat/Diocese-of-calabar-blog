const fs = require("fs");
const path = require("path");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, query, orderBy } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCAcZeRSCT0iBEBFJJzjijI8QjN-ue4opM",
  authDomain: "diocese-of-calabar-website.firebaseapp.com",
  projectId: "diocese-of-calabar-website",
  storageBucket: "diocese-of-calabar-website.firebasestorage.app",
  messagingSenderId: "886195267710",
  appId: "1:886195267710:web:40d39b5cf0af799165502f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const templatePath = path.join(__dirname, "event.html");
const templateHtml = fs.readFileSync(templatePath, "utf8");

const newsDir = path.join(__dirname, "news");
if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir);
}

async function buildSite() {
  console.log("Fetching blogs from Firebase...");
  
  const blogsCol = collection(db, "blogs");
  // Sort blogs by createdAt ascending (since they are reversed on the frontend)
  const q = query(blogsCol, orderBy("createdAt", "asc"));
  const querySnapshot = await getDocs(q);
  
  const eventsData = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // Add an ID for legacy compatibility if needed
    data.id = doc.id;
    eventsData.push(data);
  });

  console.log(`Fetched ${eventsData.length} blogs. Overwriting js/data.js...`);

  const dataJsContent = `const eventsData = ${JSON.stringify(eventsData, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = eventsData;\n}\n`;
  fs.writeFileSync(path.join(__dirname, "js", "data.js"), dataJsContent);

  console.log("Generating static HTML pages for SEO...");
  eventsData.forEach((event) => {
    const eventDir = path.join(newsDir, event.slug);
    if (!fs.existsSync(eventDir)) {
      fs.mkdirSync(eventDir);
    }

    let excerptText = "";
    if (typeof event.content === 'string') {
      excerptText = event.content.replace(/<[^>]+>/g, '');
    } else if (Array.isArray(event.content)) {
      excerptText = event.content[0] || "";
    }
    
    const excerpt = excerptText.substring(0, 150) + "...";

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
        `content="${event.image || ''}"`,
      );

    const outputPath = path.join(eventDir, "index.html");
    fs.writeFileSync(outputPath, finalHtml);

    console.log(`✅ Baked: /news/${event.slug}/index.html`);
  });

  console.log("🎉 All articles baked successfully! Ready to push to Vercel.");
  process.exit(0);
}

buildSite().catch(console.error);
