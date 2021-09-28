import { initializeApp } from "firebase/app"
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCK2djdp8mWkk2jSCCqCED1L3viT4e_LIA",
    authDomain: "netflix-project-3db1e.firebaseapp.com",
    projectId: "netflix-project-3db1e",
    storageBucket: "netflix-project-3db1e.appspot.com",
    messagingSenderId: "650437644458",
    appId: "1:650437644458:web:84b77b77098a5c96ae40d3"
}

const firebase = initializeApp(config)

export { firebase }