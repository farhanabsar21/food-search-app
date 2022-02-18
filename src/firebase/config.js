import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1JvxZ2ht0VJ5fGENkR-r48axP71cDAeA",
  authDomain: "food-recipe-app-d9644.firebaseapp.com",
  projectId: "food-recipe-app-d9644",
  storageBucket: "food-recipe-app-d9644.appspot.com",
  messagingSenderId: "927946578242",
  appId: "1:927946578242:web:964cf174a8e3bcd35710db"
};

//initialize the project

firebase.initializeApp(firebaseConfig)

//firestore

const projectFirestore = firebase.firestore()

export { projectFirestore }