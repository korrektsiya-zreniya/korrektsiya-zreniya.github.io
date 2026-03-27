import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, deleteDoc } from "firebase/firestore/lite";

const firebaseConfig = {
    projectId: "korrektsiya-zreniya",
    apiKey: "AIzaSyBt4skmGtebN0Hq_kTRfBBQRT1UQYWY7mE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seed = async () => {
    console.log("Cleaning up old boards...");
    const boardsCol = collection(db, "boards");
    const boardsSnap = await getDocs(boardsCol);
    for (const d of boardsSnap.docs) {
        await deleteDoc(doc(db, "boards", d.id));
    }

    console.log("Seeding theme-specific boards...");
    const boards = [
        // Category: Главное
        { url: "boards/announcements", title: "Объявления", category: "Главное", threads: 1 },
        { url: "boards/rules", title: "Правила форума", category: "Главное", threads: 0 },
        
        // Category: Методы коррекции
        { url: "boards/lasik", title: "LASIK / Femto-LASIK", category: "Методы коррекции", threads: 0 },
        { url: "boards/smile", title: "SMILE / ReLex", category: "Методы коррекции", threads: 0 },
        { url: "boards/prk", title: "ФРК / Транс-ФРК", category: "Методы коррекции", threads: 0 },

        // Category: После операции
        { url: "boards/stories", title: "Личный опыт и отзывы", category: "Жизнь после операции", threads: 0 },
        { url: "boards/complications", title: "Осложнения и побочки", category: "Жизнь после операции", threads: 0 },

        // Category: Юридическая помощь
        { url: "boards/legal", title: "Судебная практика", category: "Юридическая помощь", threads: 0 },
    ];

    for (const b of boards) {
        const boardId = b.url.split('/')[1];
        await setDoc(doc(db, "boards", boardId), b);
    }

    console.log("Seeding initial thread...");
    await addDoc(collection(db, "threads"), {
        board: "boards/announcements",
        title: "Добро пожаловать на форум о лазерной коррекции зрения!",
        dateCreated: new Date(),
        dateModified: new Date(),
        url: "boards/announcements/welcome",
        user: {
            displayName: "Администратор",
            uid: "admin123"
        }
    });

    console.log("Done!");
};

seed();
