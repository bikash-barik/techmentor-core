import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHKOZGkrE6WNxtzrRnk31e83umvx-9iwk",
  authDomain: "techmentor-core.firebaseapp.com",
  databaseURL: "https://techmentor-core-default-rtdb.firebaseio.com",
  projectId: "techmentor-core",
  storageBucket: "techmentor-core.appspot.com",
  messagingSenderId: "823051360090",
  appId: "1:823051360090:web:0f28dcef173487242e8563",
  measurementId: "G-RL7LCZJPHB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

export { db , storage, auth};
export default firebaseConfig;
