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
    title: "NAWADA Week 44: Teach Children to Learn from Failure, Not Escape It",
    slug: "nawada-week-44-teach-children-to-learn-from-failure-not-escape-it",
    category: "NAWADA",
    date: "NOVEMBER 9, 2026",
    createdAt: "2026-11-08T23:00:00.000Z",
    updatedAt: "2026-11-09T08:00:00.000Z",
    image: "https://i.postimg.cc/Bn6kpCx2/IMG-20261112-WA0004.jpg",
    content: `<p>Welcome to Week 44 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>As we continue in the <strong>November season of All Saints &amp; Christ the King</strong>, this week's message calls on parents, guardians, and mentors to guide young people through life's challenges with wisdom and grace: <strong>Teach children to learn from failure, not escape it.</strong></p>
<p>Mistakes and disappointments are an inevitable part of growing up. When children are taught to face setbacks constructively rather than seeking temporary relief in harmful substances, they develop lasting strength of character. Parents and guardians are encouraged to help children:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Build Resilience:</strong> Teach children that setbacks are stepping stones, not dead ends, empowering them to bounce back stronger when things do not go as planned.</li>
<li style='margin-bottom: 10px;'><strong>Learn &amp; Grow:</strong> Guide them to reflect on mistakes with humility and curiosity so every challenge becomes an opportunity for maturity and wisdom.</li>
<li style='margin-bottom: 10px;'><strong>Stay Focused:</strong> Keep their eyes anchored on godly values, long-term goals, and their purpose in Christ even when they feel discouraged.</li>
<li style='margin-bottom: 10px;'><strong>Make Better Choices:</strong> Equip them with healthy coping habits and sound judgment so they choose positive solutions over destructive escapes like drug abuse.</li>
</ul>
<p>Turning setbacks into strength prepares our children for a purposeful, drug-free future. Let us stand firm together, say NO to drugs, and SAY YES to life!</p>
<p><strong>Turn setbacks into strength. Choose a drug-free life.</strong></p>
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
