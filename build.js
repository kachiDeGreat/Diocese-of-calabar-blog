const fs = require("fs");
const path = require("path");

const eventsData = [
  {
    id: 1,
    slug: "2026-diocesan-prayer-convocation",
    date: "APRIL 19, 2026",
    title: "2026 Diocesan Prayer Convocation: Enriched By Him In Everything",
    image: "https://dropimg.onyekachi.dev/uzqgclibqdvtgusovg1b",
    category: "Convocation",
    content: [
      "From Thursday, April 16th to Sunday, April 19th, 2026, the Anglican Diocese of Calabar gathered at Holy Trinity College, Asari Eso Layout, for a spiritually transformative Diocesan Prayer Convocation. Anchored on the Pauline envisioned theme, 'Enriched by Him in Everything' (1 Cor 1:5), the four-day convocation was a period of deep spiritual renewal, intense prayer, fasting, and profound scriptural learning.",
      "THE PROGRAMME OF ACTIVITIES",
      "The convocation kicked off on Thursday evening with arrivals, registration, and a powerful Opening Charge and Variety session led by Rev. Alexandar Nweke. By Friday morning, the spiritual atmosphere was fully set with a Holy Communion Service, followed by the first Bible Study session led by Ven. Prof. Ephraim Osai. Throughout the event, delegates were blessed with rigorous daily schedules that included 'Prayer! Prayer!!' sessions by Rev. Riman Urom, Faith Clinics with Ven. John Uka, Health Talks by Dr. Chigozie Uzomba, and 'Time with the Bishop'.",
      "EXPOSITION ON THE THEME",
      "At the heart of the convocation were the powerful Expositions delivered by the Diocesan Bishop, the Rt. Rev. Prof. Nneoyi Onen Egbe. A major focus of the study was being 'Grounded in Grace, Mercy, and Favour'. Delegates were taught that believers are saved by God's grace, not by human effort. The teachings emphasized that divine providence involves God's active guidance and sustenance, requiring believers to be spiritually regenerated, trust Him fully, and avoid diverse temptations.",
      "SEMINAR: GROWING IN FAITH (By Ven. S. O. Ukachukwu)",
      "A major highlight of the convocation was the seminar on 'Growing in Faith'. Ven. Ukachukwu taught that faith is strictly organic—it is a living entity, not a mechanical process. Likened to a mustard seed (Luke 17:6), faith must take root in Christ to draw life, grow abundantly, and bear visible fruit. He outlined the growth cycle of faith, from the 'Birth stage' (being born again through the Word), to 'Infancy' (adjusting to elementary doctrines), 'Adolescence', and finally 'Maturity' (the measure of the stature of Christ).",
      "The facilitator also corrected wrong impressions about faith, noting that faith does not grow automatically without effort, nor is it merely a product of subjective emotions or motivational speaking. He warned delegates that faith can be violently attacked through emotional infiltrations such as fear, unresolved anger, pride, anxiety, unforgiveness, and discouragement. A stern warning was given: 'Don't compare your faith with others.' Because God gives different measures of faith, comparing oneself leads only to pride or despair.",
      "To truly grow, believers were encouraged to embrace community life. 'Your faith gets stronger rubbing against other believers. Iron sharpens iron,' he noted, emphasizing that a horizontally grown faith (love for brethren) proves a vertically grown faith (love for God).",
      "WORKSHOP: HINDRANCES TO GOD'S ABUNDANT SUPPLY (By Rev. Canon Stanley Timothy Iwuji)",
      "Another highly anticipated session was the workshop on divine provision. Rev. Canon Iwuji established a fundamental truth: 'God is not limited in supply—He is unlimited. The real issue is not God's ability to give, but man's capacity to receive.'",
      "He outlined major hindrances that restrict the flow of God's blessings, favor, and purpose in a person's life. The first is 'Sin and Disobedience', which acts as a barrier that disconnects a man from divine flow (Isaiah 59:1-2). The second major hindrance discussed was 'Unbelief and Lack of Faith', as doubt directly cancels access to divine provision (Hebrews 11:6). Delegates were challenged to clear these spiritual, mental, and behavioral blocks to access God's financial provision, wisdom, peace, and health.",
      "WORKSHOP: THE POWER TO MAKE WEALTH (By Ven. Joseph Ighomereho)",
      "Complementing the teachings on abundance, Ven. Joseph Ighomereho led a practical and spiritually grounded workshop on the power to make wealth, ensuring delegates understood the balance between spiritual devotion and godly prosperity.",
      "CONCLUSION",
      "The convocation culminated on Saturday evening with an explosive 'Praise Unlimited' session, followed by a glorious Thanksgiving Service on Sunday morning. Delegates departed Holy Trinity College not just spiritually recharged, but deeply enriched in knowledge, armed with practical tools to defend their faith, access divine abundance, and remain a blessing to this generation.",
    ],
  },
  {
    id: 2,
    slug: "foundation-laying-women-retreat-centre",
    date: "APRIL 20, 2026",
    title:
      "Upcoming: Foundation Laying Service for the Diocesan Women Retreat Centre",
    image: "https://dropimg.onyekachi.dev/qtfltwjrr3pdr3fvcfqv",
    category: "Upcoming Event",
    content: [
      "The Anglican Diocese of Calabar cordially invites all clergy, lay delegates, parishioners, and well-wishers to a highly anticipated and historic occasion: the Foundation Laying Service of the brand new Diocesan Women Retreat Centre.",
      "This landmark event is scheduled to take place on Saturday, 25th April, 2026, starting promptly at 2:00 PM. The service will be held at the project site, located at Bacoco Village (just after Nassarawa).",
      "A VISION FOR SPIRITUAL RENEWAL",
      "The Diocesan Women Retreat Centre is a visionary project spearheaded by the Diocesan Women's Ministry (Mothers' Union and Women's Guild). Once completed, this center will serve as a dedicated sanctuary for spiritual renewal, prayer fasting, empowerment programs, and fellowship for women across the Diocese and beyond. It stands as a testament to the unwavering faith and dedication of our mothers in building the church.",
      "OFFICIATED BY THE BISHOP",
      "The foundation laying ceremony will be officially performed by our Diocesan Bishop, The Rt. Rev'd. Prof. Nneoyi Onen Egbe. Under his dynamic spiritual leadership, the Diocese continues to expand its physical and spiritual footprint, ensuring that well-equipped spaces are available to nurture the faith of every group within the Anglican communion.",
      "CALL FOR SUPPORT AND ATTENDANCE",
      "We are calling on all members of the Diocesan family to come out in their numbers to witness, celebrate, and support this great work. Let us gather together at Bacoco to commit this building project into the hands of the Almighty God, praying for divine provision, safety for the workers, and a speedy, successful completion.",
      "Mark your calendars, spread the word, and make plans to be there!",
    ],
  },
  {
    id: 3,
    slug: "ascension-elevated-to-archdeaconry",
    date: "MAY 15, 2026",
    title:
      "Historic Milestone: Ascension Deanery Elevated to a Full-Fledged Archdeaconry",
    image:
      "https://i.postimg.cc/5ttghzDk/697792999-122156910344973012-3823485635920366546-n.jpg",
    category: "News",
    content: [
      "On Ascension Day, Thursday, May 14th, 2026, the Anglican Diocese of Calabar witnessed a historic spiritual milestone as the Anglican Church of Ascension, located at 8 Miles, Ikot Omin, Calabar, was officially elevated from a Deanery to a full-fledged Archdeaconry.",
      "The glorious and heavily attended service was officiated by the Diocesan Bishop, The Rt. Rev'd. Prof. Nneoyi Onen Egbe. During the service, the Bishop also presided over the official re-dedication of the church building and the dedication of the vicarage.",
      "This elevation is a profound testament to the resilient faith of the Ascension congregation and the collective labor of many devoted leaders over 36 years. Birthed in 1990 by Rev. W. G. Ekprikpo (who later became the Pioneer Bishop of Calabar Diocese), the church started as a mustard seed with about four families under the leadership of its first vicar, Rev. Thompson Chijioke Onuoha.",
      "The early congregation faced numerous foundational challenges, from losing their initial land to being banned from using a government school, and even worshipping under a mango tree. Through these trying times, the baton of leadership was passed to dedicated priests, including Rev. Prince Christian Anyim in 2003.",
      "Shortly after, a major turning point occurred under the leadership of Ven. Bar. Dr. Lawrence Ngozi Umar. He and his ministerial team tirelessly navigated struggles to acquire the church's permanent site in July 2004, completing the first church hall in 2008 and dedicating the first worship building in 2011.",
      "Building upon this incredibly solid foundation, Ven. Prof. Chibueze Haggai Njoku, who became Vicar in 2016, worked with unwavering dedication alongside past and present assisting priests and mission workers including Rev. Charles Esien Eyo, Rev. Canon Chijioke Osigwe, Rev. Isaac Nwafor, Rev. Canon Sunday Joel Emerionwu, and currently Ven. Ogbuji Justin they guided the church through massive spiritual and structural expansion.",
      "The Diocese rejoices with the newly inaugurated Ascension Archdeaconry. We celebrate the pioneer families, the past leaders who planted and watered, and the present leadership experiencing the harvest. We pray that this new status will spur even greater exploits for the Kingdom of God. To God be the glory!",
    ],
  },
];
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
      /content="https:\/\/dropimg\.onyekachi\.dev\/qa3xoupmngktvl0mkqru"/g,
      `content="${event.image}"`,
    );

  const outputPath = path.join(eventDir, "index.html");
  fs.writeFileSync(outputPath, finalHtml);

  console.log(`✅ Baked: /news/${event.slug}/index.html`);
});

console.log("🎉 All articles baked successfully! Ready to push to Vercel.");
