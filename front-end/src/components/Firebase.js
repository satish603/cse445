// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDet3-U_LePSyoSWw1eAR4kObmA2pRE-kE",
  authDomain: "donato-b4ab8.firebaseapp.com",
  projectId: "donato-b4ab8",
  storageBucket: "donato-b4ab8.appspot.com",
  messagingSenderId: "548734721930",
  appId: "1:548734721930:web:c256d11f8652155b497273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app);