import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHysVHmJw1exaBf3B6nZUIlDg-vlWw8XI",
  authDomain: "pam-posts-alan.firebaseapp.com",
  projectId: "pam-posts-alan",
  storageBucket: "pam-posts-alan.firebasestorage.app",
  messagingSenderId: "97552856759",
  appId: "1:97552856759:web:72afd2c4d91b2198a33f32"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);