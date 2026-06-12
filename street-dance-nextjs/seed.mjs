import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkH1tYEDZR4oFgcWreTIlrmpxD-LdleyM",
  authDomain: "street-dance-9c1a5.firebaseapp.com",
  projectId: "street-dance-9c1a5",
  storageBucket: "street-dance-9c1a5.firebasestorage.app",
  messagingSenderId: "178707103948",
  appId: "1:178707103948:web:4539fb142c38c7b3da8269",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

await setDoc(doc(db, "homepage", "content"), {
  hero: {
    title: "Street Dance",
    subtitle: "Move Your Body, Free Your Soul",
  },
  about: {
    title: "About Us",
    description: "We are a passionate community of street dancers dedicated to hip hop culture. From beginners to professionals, we welcome everyone who loves to move.",
  },
  testimonials: [
    { name: "Kamal Perera", text: "This is the best dance community in Sri Lanka. I learned so much here!" },
    { name: "Nimal Silva", text: "Amazing events and great products. Highly recommend to all dancers." },
    { name: "Sanduni Fernando", text: "The workshops changed my life. Best investment I ever made." },
  ],
});

console.log("Homepage data added!");