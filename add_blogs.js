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

// Update image URLs here if you want to push directly via this script
const newBlogs = [
  {
    title: "NAWADA Week 37: Parents Should Agree on Rules for Consistency",
    slug: "nawada-week-37-parents-agree-on-rules-for-consistency",
    category: "NAWADA",
    date: "SEPTEMBER 28, 2026",
    createdAt: "2026-09-27T23:00:00.000Z",
    updatedAt: "2026-09-28T08:00:00.000Z",
    image: "https://i.postimg.cc/vBYptqWr/IMG-20260927-WA0124.jpg", 
    content: `<p>Welcome to Week 37 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>As we conclude our <strong>September Trinity Season focus on Purpose &amp; Calling</strong>, this week's message highlights the strength of a united home: <strong>Parents should agree on rules for consistency.</strong></p>
<p>When parents stand together in agreement and maintain consistent boundaries, children find clarity, security, and the guidance needed to resist peer pressure. Parents are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Agree Together:</strong> Align on family principles, standards, and values so that both parents speak with one united voice.</li>
<li style='margin-bottom: 10px;'><strong>Set Clear Rules:</strong> Establish well-defined, realistic expectations for daily conduct, friendships, screen time, and curfews.</li>
<li style='margin-bottom: 10px;'><strong>Be Consistent:</strong> Uphold established rules fairly and steadily so children learn that boundaries are dependable and protective.</li>
<li style='margin-bottom: 10px;'><strong>Support Each Other:</strong> Back each other up in guidance and discipline, demonstrating unity and mutual respect in the home.</li>
</ul>
<p>Strong parents raise supported children, and supported children lead to brighter futures. Let us stand together and confidently say NO to drugs and alcohol.</p>
<p><strong>Strong parents. Supported children. Brighter futures.</strong></p>
<p><strong>Theme: Identity &amp; Direction</strong></p>
<p><em>Father, Reveal Your purpose to our children. When they know who they are in Christ, they will not seek identity in harmful substances. Give them confidence, vision, and godly friendships. Amen.</em></p>`
  },
  {
    title: "Warrior Generation Outreach: Raising, Transforming, and Sending the Next Generation",
    slug: "warrior-generation-outreach-2026",
    category: "Upcoming Event",
    date: "OCTOBER 2, 2026",
    createdAt: "2026-10-01T23:00:00.000Z",
    updatedAt: "2026-10-02T10:00:00.000Z",
    image: "https://i.postimg.cc/wvqSQfhf/IMG-20260928-WA0078.jpg",
    content: `<p>The Anglican Diocese of Calabar, in joint collaboration with <strong>Eternity Ministries</strong> and <strong>The Living Praise Foundation Network</strong>, cordially presents the <strong>Warrior Generation Outreach</strong> — a powerful, life-transforming gathering dedicated to raising and empowering the next generation.</p>
<p>Under the banner of <em>"A Collaboration for a Greater Impact,"</em> this outreach is anchored on the prophetic mandate of Scripture: <em>"Let the next generation know that they may set their hope in God."</em> (Psalm 78:6–7). It is a divine call to awaken our youth, deepen their faith, and commission them as godly warriors for kingdom influence.</p>
<p><strong>CORE MANDATE: RAISING, TRANSFORMING, SENDING</strong></p>
<p>The Warrior Generation Outreach is built on four transformative pillars:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>People:</strong> Bringing young believers, students, and families together in an atmosphere of fellowship and mentorship.</li>
<li style='margin-bottom: 10px;'><strong>Purpose:</strong> Guiding the youth to discover their God-given identity, calling, and destiny, shielding them from the distractions of the world.</li>
<li style='margin-bottom: 10px;'><strong>Impact:</strong> Equipping them with spiritual wisdom and practical life skills to be positive change-makers in society.</li>
<li style='margin-bottom: 10px;'><strong>A Brighter Tomorrow:</strong> Laying righteous foundations for generations to come through prayer, the Word, and godly character.</li>
</ul>
<p><strong>PROGRAMME DETAILS &amp; SCHEDULE</strong></p>
<ul>
<li style='margin-bottom: 10px;'><strong>Thursday, October 8th:</strong> 4:00 PM – 7:00 PM</li>
<li style='margin-bottom: 10px;'><strong>Friday, October 9th:</strong> 4:00 PM – 7:00 PM</li>
<li style='margin-bottom: 10px;'><strong>Saturday, October 11th:</strong> 9:00 AM – 6:00 PM</li>
</ul>
<p><strong>VENUE &amp; HOST</strong></p>
<ul>
<li style='margin-bottom: 10px;'><strong>Chief Host:</strong> The Rt. Rev'd Nneoyi Egbe (Bishop of Calabar Diocese)</li>
<li style='margin-bottom: 10px;'><strong>Venue:</strong> Christ Church Anglican Communion, Abong Aseng Street by Teaching Hospital Road, Calabar</li>
</ul>
<p>Don't miss this divine encounter! Come with your family, friends, and fellow youths as we unite together for a brighter tomorrow.</p>`
  },
  {
    title: "NAWADA Week 39: Teach Patience and Self-Control",
    slug: "nawada-week-39-teach-patience-and-self-control",
    category: "NAWADA",
    date: "OCTOBER 5, 2026",
    createdAt: "2026-10-04T23:00:00.000Z",
    updatedAt: "2026-10-05T12:00:00.000Z",
    image: "https://i.postimg.cc/V6f3WGjZ/IMG-20261005-WA0048.jpg", 
    content: `<p>Welcome to Week 39 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>As we enter our <strong>October Trinity Season focusing on Harvest &amp; Fruitfulness</strong>, our message for this week reminds parents and guardians: <strong>Teach patience and self-control.</strong></p>
<p>Healthy families bear good fruit. In a world driven by instant gratification and peer pressure, imparting self-mastery and patience protects our children from impulsive decisions and destructive habits. Parents are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Be Patient:</strong> Teach children to wait, persevere through challenges, and respond with calm rather than frustration.</li>
<li style='margin-bottom: 10px;'><strong>Practice Self-Control:</strong> Guide them to manage their impulses, desires, and emotions, choosing discipline over momentary temptation.</li>
<li style='margin-bottom: 10px;'><strong>Show Love:</strong> Cultivate a loving, forgiving atmosphere at home where correction is given with patience and grace.</li>
<li style='margin-bottom: 10px;'><strong>Choose Wisdom:</strong> Encourage children to weigh their choices carefully and seek godly guidance in all situations.</li>
</ul>
<p>Strong families. Good values. Brighter tomorrows. Let us stand firm together and say NO to drugs and alcohol.</p>
<p><strong>Strong families. Good values. Brighter tomorrows.</strong></p>
<p><strong>Theme: Good Fruit</strong></p>
<p><em>Lord of the Harvest, Let our families bear good fruit — self-control, love, patience, and wisdom. Remove every seed of addiction and plant seeds of righteousness in our homes. Amen.</em></p>`
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

// Uncomment below to run directly if needed:
addBlogs();

module.exports = { newBlogs, addBlogs };
