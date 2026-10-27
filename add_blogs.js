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
    title: "NAWADA Week 40: Healthy Attachment Reduces the Need for Risky Experimentation",
    slug: "nawada-week-40-healthy-attachment-reduces-risky-experimentation",
    category: "NAWADA",
    date: "OCTOBER 12, 2026",
    createdAt: "2026-10-11T23:00:00.000Z",
    updatedAt: "2026-10-12T08:00:00.000Z",
    image: "https://i.postimg.cc/QCZvkP82/1.jpg", // Replace with your uploaded image URL
    content: `<p>Welcome to Week 40 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>Continuing our <strong>October Trinity Season focus on Harvest &amp; Fruitfulness</strong>, this week's message reminds us of the protective power of family connection: <strong>Healthy attachment reduces the need for risky experimentation.</strong></p>
<p>When children feel deeply loved, valued, and emotionally secure in their homes, they are far less likely to seek acceptance, thrill, or solace in dangerous substances. Parents and guardians are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Strong Family Bonds:</strong> Invest quality time into building close, nurturing relationships so children always feel connected and cherished.</li>
<li style='margin-bottom: 10px;'><strong>Safer Choices:</strong> Foster an open environment where children feel confident to ask questions, share worries, and make wise decisions.</li>
<li style='margin-bottom: 10px;'><strong>Positive Influence:</strong> Surround your children with godly values, encouraging peer circles, and wholesome role models.</li>
<li style='margin-bottom: 10px;'><strong>Brighter Futures:</strong> Guide young hearts with love and patience today, laying a secure foundation for tomorrow's success.</li>
</ul>
<p>Strong families raise secure children who stand firm against peer pressure. Say NO to drugs and SAY YES to life!</p>
<p><strong>Strong families. Good values. Brighter tomorrows.</strong></p>
<p><strong>Theme: Good Fruit</strong></p>
<p><em>Lord of the Harvest, Let our families bear good fruit — self-control, love, patience, and wisdom. Remove every seed of addiction and plant seeds of righteousness in our homes. Amen.</em></p>`
  },
  {
    title: "NAWADA Week 41: Stable Routines Give Children Security",
    slug: "nawada-week-41-stable-routines-give-children-security",
    category: "NAWADA",
    date: "OCTOBER 19, 2026",
    createdAt: "2026-10-18T23:00:00.000Z",
    updatedAt: "2026-10-19T08:00:00.000Z",
    image: "https://i.postimg.cc/wMYncPxp/2.jpg", // Replace with your uploaded image URL
    content: `<p>Welcome to Week 41 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>As we continue our <strong>October Trinity Season focus on Harvest &amp; Fruitfulness</strong>, this week's message highlights the strength of household structure: <strong>Stable routines give children security.</strong></p>
<p>Predictable daily rhythms and healthy boundaries provide young people with emotional stability, reduce anxiety, and guard against idle or harmful influences. Parents are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Consistent Routines:</strong> Establish regular schedules for study, family devotions, meals, chores, and rest to cultivate order and discipline.</li>
<li style='margin-bottom: 10px;'><strong>Safe Environment:</strong> Create a calm, predictable home where children know what to expect and feel secure in every season.</li>
<li style='margin-bottom: 10px;'><strong>Strong Family Bond:</strong> Use everyday family moments and shared routines to deepen connection, trust, and communication.</li>
<li style='margin-bottom: 10px;'><strong>Brighter Futures:</strong> Equip children with healthy lifestyle habits that prepare them for responsible, fruitful adulthood.</li>
</ul>
<p>Strong routines protect our youth and build confident hearts. Say NO to drugs and SAY YES to life!</p>
<p><strong>Strong routines. Safe children. Brighter tomorrows.</strong></p>
<p><strong>Theme: Good Fruit</strong></p>
<p><em>Lord of the Harvest, Let our families bear good fruit — self-control, love, patience, and wisdom. Remove every seed of addiction and plant seeds of righteousness in our homes. Amen.</em></p>`
  },
  {
    title: "NAWADA Week 42: Avoid Glorifying Alcohol or Drugs at Home",
    slug: "nawada-week-42-avoid-glorifying-alcohol-or-drugs-at-home",
    category: "NAWADA",
    date: "OCTOBER 26, 2026",
    createdAt: "2026-10-25T23:00:00.000Z",
    updatedAt: "2026-10-26T08:00:00.000Z",
    image: "https://i.postimg.cc/FzXwgqFv/3.jpg", // Replace with your uploaded image URL
    content: `<p>Welcome to Week 42 of the Nigerian Anglican War Against Drug Abuse (NAWADA) campaign by the Diocese of Calabar.</p>
<p>Continuing our <strong>October Trinity Season focus on Harvest &amp; Fruitfulness</strong>, this week's vital charge addresses parental example in the home: <strong>Avoid glorifying alcohol or drugs at home.</strong></p>
<p>Children learn far more from what they observe than what they are told. When alcohol or substance use is normalized, joked about, or glorified within the family space, it lowers their guard and invites curiosity. Parents are encouraged to:</p>
<ul>
<li style='margin-bottom: 10px;'><strong>Positive Home Environment:</strong> Ensure your home is a sanctuary of peace, godly values, and healthy habits free from substance exposure.</li>
<li style='margin-bottom: 10px;'><strong>Be a Good Example:</strong> Model sobriety, sound judgment, and healthy ways of coping with stress, celebrations, and social gatherings.</li>
<li style='margin-bottom: 10px;'><strong>Avoid Alcohol:</strong> Do not treat alcohol as a necessity for relaxation, hospitality, or celebration in front of impressionable minds.</li>
<li style='margin-bottom: 10px;'><strong>Avoid Drugs:</strong> Maintain a firm, non-negotiable stand against illegal substances and the misuse of prescription drugs.</li>
</ul>
<p>Safe homes build strong families and secure brighter futures. Say NO to drugs and SAY YES to life!</p>
<p><strong>Safe homes. Strong families. Brighter tomorrows.</strong></p>
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

// addBlogs();

module.exports = { newBlogs, addBlogs };
