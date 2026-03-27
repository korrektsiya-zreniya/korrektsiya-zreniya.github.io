import { forumState } from "@/state/forumState";
import { extractDataFromDocs } from "@/utils/dataUtils";
import { addComment as fbAddComment, addNewDocument as fbAddNewDocument, addThread as fbAddThread } from "@/utils/forumHelpersAdd";
import {
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from "firebase/firestore/lite";
import { get } from "svelte/store";

const globalFirestoreDB = getFirestore();

function addThread(data, path = "") {
    return fbAddThread(globalFirestoreDB, data, path);
}

function addComment(data, path = "") {
    return fbAddComment(globalFirestoreDB, data, path);
}

function addNewDocument(collectionName, data, path = "") {
    return fbAddNewDocument(globalFirestoreDB, collectionName, data, path);
}

async function getAllCollectionDocs(collectionName, orderByField = null) {
    let theQuery;

    const collectionRef = collection(globalFirestoreDB, collectionName);

    if (orderByField) {
        theQuery = query(collectionRef, orderBy(orderByField, "asc"));
    } else {
        theQuery = query(collectionRef);
    }

    const rawDocuments = await getDocs(theQuery);

    return extractDataFromDocs(rawDocuments.docs);
}

async function getAllComments() {
    let docs = get(forumState);

    if (!docs?.allComments?.length) {
        docs = await getAllCollectionDocs("comments", "dateCreated");

        // Cache comments
        forumState.update((prevState) => ({
            ...prevState,
            // @ts-ignore
            allComments: docs,
        }));
    }

    return docs?.allComments?.length ? docs.allComments : docs;
}

export {
    addComment,
    addNewDocument,
    addThread,
    getAllCollectionDocs,
    getAllComments,
    globalFirestoreDB,
};
