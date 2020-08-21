import firebase from 'firebase';
import '@firebase/firestore'

const firebaseConfig = {
  apiKey:'xxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxxx',
 
  projectId: 'xxxxxxxxxxxxx',
  storageBucket: '',
  messagingSenderId:'xxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxx',
  databaseURL:'xxxxxxxxxxxxx'
}

// Initialize Firebase
const Firebase = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()
export const db = Firebase.firestore()


export default Firebase
