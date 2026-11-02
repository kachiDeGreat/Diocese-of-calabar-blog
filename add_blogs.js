const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

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

const newBlogs = [
  {
    title: "NAWADA Week 43: Speak Words of Encouragement Daily",
    slug: "nawada-week-43-speak-words-of-encouragement-daily",
    category: "NAWADA",
    date: "NOVEMBER 2, 2026",
    createdAt: "2026-11-01T23:00:00.000Z",
    updatedAt: "2026-11-02T08:00:00.000Z",
    image: "https://i.postimg.cc/4dd8rn8v/IMG-20261102-WA0010.jpg",
    content: `<p>Welcome to Week 43 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>As we enter the <strong>November season of All Saints &amp; Christ the King</strong>, this week's message reminds every parent and guardian of the life-giving power of our tongues: <strong>Speak words of encouragement daily.</strong></p>
<p>Words carry immense spiritual and psychological weight. When children grow up hearing affirmation, faith, and love spoken over their lives, their self-worth is anchored in God, shielding them from the deception and peer pressure of substance abuse. Parents and guardians are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Build Self-Esteem:</strong> Regularly affirm your children's worth, talents, and unique identity in Christ, letting them know they are deeply loved and valued.</li>
<li style='margin-bottom: 10px;'><strong>Inspire Good Choices:</strong> Use uplifting words that motivate children to pursue excellence, integrity, and godly character in their daily decisions.</li>
<li style='margin-bottom: 10px;'><strong>Strengthen Resilience:</strong> When they face setbacks or disappointment, speak hope and confidence into their hearts so they learn to persevere with courage.</li>
<li style='margin-bottom: 10px;'><strong>Build Stronger Families:</strong> Replace harsh criticism with words of grace, cultivating a peaceful and uplifting atmosphere in the home.</li>
</ul>
<p>Positive words build stronger children, and stronger children lead to drug-free futures. Let us stand firm together, say NO to drugs, and SAY YES to life!</p>
<p><strong>Positive words. Stronger children. Drug-free futures.</strong></p>
<p><strong>Theme: Holy Living</strong></p>
<p><em>King of Glory, Help our children live as saints in a challenging world. May they choose holiness over harmful habits. Let Christ reign in our homes and rule over every decision we make. Amen.</em></p>`
  }
];

async function addBlogs() {
  console.log("Authenticating as admin...");
  try {
    await signInWithEmailAndPassword(auth, "mail.ricx@gmail.com", "123CAD");
    console.log("Authenticated successfully!");
  } catch (error) {
    console.error("Authentication failed:", error);
    process.exit(1);
  }

  for (const blog of newBlogs) {
    try {
      const docRef = await addDoc(collection(db, "blogs"), blog);
      console.log(`✅ Added "${blog.title}" with ID: ${docRef.id}`);
    } catch (e) {
      console.error(`❌ Error adding ${blog.title}:`, e);
    }
  }

  console.log("Done! Run 'node build.js' afterwards to update static site and data.js.");
  process.exit(0);
}

// Execute upload
// addBlogs();

module.exports = { newBlogs, addBlogs };
