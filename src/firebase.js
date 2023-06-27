// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM-fJgPdLDvOCn-V4PGmtgOzGxI01_Tuw",
  authDomain: "vantest-ae94c.firebaseapp.com",
  projectId: "vantest-ae94c",
  storageBucket: "vantest-ae94c.appspot.com",
  messagingSenderId: "234952596787",
  appId: "1:234952596787:web:53299f54b95df46a32b246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")


export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  console.log(vans)
}
