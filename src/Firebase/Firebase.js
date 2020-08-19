import firebase from 'firebase';
import '@firebase/firestore'

const firebaseConfig = {
  apiKey:'AIzaSyCaqGLmItH3LOQgJ58Ia-rIX7g7FnPcViA',
  authDomain: 'react-native-ce4d2.web.app',
 
  projectId: 'react-native-ce4d2',
  storageBucket: '',
  messagingSenderId:'424048184536',
  appId: '1:424048184536:android:25abeb8161cb8ac368dbad',
  databaseURL:'https://react-native-ce4d2.firebaseio.com/'
}

// Initialize Firebase
const Firebase = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()
export const db = Firebase.firestore()


export default Firebase
