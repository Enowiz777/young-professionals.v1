// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider,
    OAuthProvider
    } from "firebase/auth";

import { 
    getFirestore,
    collection,
    addDoc,
    query,
    onSnapshot
 } from "firebase/firestore";

// Storage
import { 
    getStorage, 
    ref, 
    uploadString, 
    listAll, 
    getDownloadURL   
} from "firebase/storage";

 // Testing DB query



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service.
export const auth = getAuth(firebaseApp);
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const GoogleUser = GoogleAuthProvider;
export const signInPopup = signInWithPopup;
export const OAuthProviderForYahoo = OAuthProvider ;

// Initialize DB
export const database = getFirestore(firebaseApp);
export const dbCollection = collection;
export const dbAddDoc = addDoc;
export const Query = query;
export const OnSnapshot = onSnapshot;

// Initialize storage
export const GetStorage = getStorage;
export const Ref = ref;
export const UploadString = uploadString; 
export const ListAll = listAll ; 
export const GetDownloadURL = getDownloadURL