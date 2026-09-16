import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmnVjY_Aa2pBOuBXt0nQ6CjT0A28zcmJ8",
  authDomain: "dev-nomad-ygor.firebaseapp.com",
  projectId: "dev-nomad-ygor",
  storageBucket: "dev-nomad-ygor.firebasestorage.app",
  messagingSenderId: "667911853105",
  appId: "1:667911853105:web:ca8cbd73583806376f7110",
  measurementId: "G-G3LS5ZPWDF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);