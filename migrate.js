const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const eventsData = require('./js/data.js');

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
const auth = getAuth(app);

async function migrateData() {
  console.log("Authenticating as admin...");
  try {
    await signInWithEmailAndPassword(auth, "mail.ricx@gmail.com", "123CAD");
    console.log("Authenticated successfully!");
  } catch (error) {
    console.error("Authentication failed:", error);
    process.exit(1);
  }

  console.log(`Found ${eventsData.length} blogs to migrate. Pushing to Firebase...`);

  let count = 0;
  for (const event of eventsData) {
    // Convert array of content into a single HTML string to match React Quill
    const htmlContent = event.content.map(p => {
      if (p.trim().startsWith("<")) return p; // Already HTML
      return `<p>${p}</p>`; // Wrap plain text in paragraphs
    }).join("\n");

    const blogData = {
      title: event.title,
      category: event.category || "Uncategorized",
      image: event.image || "",
      date: event.date,
      slug: event.slug,
      content: htmlContent,
      createdAt: new Date(event.date).toISOString(),
      updatedAt: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, "blogs"), blogData);
      console.log(`✅ Migrated: ${event.title}`);
      count++;
    } catch (e) {
      console.error(`❌ Error migrating ${event.title}:`, e);
    }
  }

  console.log(`🎉 Migration Complete! Successfully migrated ${count} blogs.`);
  process.exit(0);
}

migrateData();
