import { authState } from "@/state/authState";
import { firestoreState } from "@/state/firestoreState";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    appId: import.meta.env.VITE_appId,
    authDomain: import.meta.env.VITE_authDomain,
    measurementId: import.meta.env.VITE_measurementId,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

firestoreState.set({ app, db });

// Initialize emulator for dev environment
if (import.meta.env.DEV) {
    // Optional: add emulator connection if needed
}

const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("onAuthStateChanged signed in:", user.email);
        authState.set({ auth: auth, user: user });
    } else {
        console.log("onAuthStateChanged signed out");
        authState.set(null);
    }
});
