// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjvC--xEX68TWH0czBgzWnzd5E4XN9T5g",
  authDomain: "warehouse-management-67fc0.firebaseapp.com",
  projectId: "warehouse-management-67fc0",
  storageBucket: "warehouse-management-67fc0.appspot.com",
  messagingSenderId: "91320715370",
  appId: "1:91320715370:web:78bbae7a581e9e5b77e213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;