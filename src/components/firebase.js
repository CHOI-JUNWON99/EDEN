import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBJZmyKTOdYQgU07sPlbFRvGE2_hPAmLJM",
  authDomain: "eandtech-f8efe.firebaseapp.com",
  projectId: "eandtech-f8efe",
  storageBucket: "eandtech-f8efe.appspot.com",
  messagingSenderId: "968863819887",
  appId: "1:968863819887:web:93ee7e468372a1e211859a",
  measurementId: "G-TG3ZTJ29ZS"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, analytics, db, database };