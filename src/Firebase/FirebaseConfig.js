// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHb29G2zfOVE6kjUVTtN5vQFWRJGmVWws",
  authDomain: "likeplay-likeplay.firebaseapp.com",
  projectId: "likeplay-likeplay",
  storageBucket: "likeplay-likeplay.appspot.com",
  messagingSenderId: "155769601586",
  appId: "1:155769601586:web:2f573aee8cd6e2d868462b",
  measurementId: "G-7K600FCB07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app )
const analytics = getAnalytics(app);
