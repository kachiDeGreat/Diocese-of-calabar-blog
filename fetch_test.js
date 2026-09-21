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

async function test() {
  const blogsCol = collection(db, "blogs");
  const q = query(blogsCol, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach(doc => data.push(doc.data()));
  console.log(JSON.stringify(data[0], null, 2));
  process.exit(0);
}

test().catch(console.error);
