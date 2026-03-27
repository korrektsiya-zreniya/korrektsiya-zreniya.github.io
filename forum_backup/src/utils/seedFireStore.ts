import { forumState } from "@/state/forumState";
import { strToURL } from "@/utils/dataUtils";
import { mockCategories } from "@/utils/mockCategories";
import { mockThreads } from "@/utils/mockThreads";

function selectRandomFromArray(array) {
    const rand = (Math.random() * array.length) | 0;
    const rValue = array[rand];
    return rValue;
}

const generateBoards = (module) => {
    mockCategories.forEach((data) => {
        data.documents.forEach(async (doc) => {
            await module.addNewDocument(
                module.globalFirestoreDB,
                data.collectionName,
                doc,
                doc.title
            );
        });
    });
};

function generateIncreasingDates(num = 200) {
    const lsDates = [];
    let date = new Date();
    let updatedDate = date.setMinutes(date.getMinutes() + 1);

    Array.from(Array(num)).forEach(() => {
        updatedDate = date.setMinutes(date.getMinutes() + 1);
        lsDates.push(new Date(updatedDate));
    });

    return lsDates;
}

const generateMockThreads = (module, board) => {
    const dt = generateIncreasingDates();

    for (const thread of mockThreads.slice(0, 10)) {
        module.addThread(module.globalFirestoreDB, {
            board: board,
            title: `${thread.text}`,
            url: `${board}/${strToURL(thread.text)}`,
            dateCreated: dt.pop(),
            dateModified: dt.pop(),
            user: {
                displayName: `${thread.owner.firstName} ${thread.owner.lastName}`,
                uid: `${thread.owner.id}`,
            },
        });
    }
};

const getMockData = async (endpoint) => {
    const raw = await fetch(`http://localhost:3000/${endpoint}`);
    const res = await raw.json();
    return res;
};

const generateMockComments = (
    module,
    selectedThread,
    text,
    displayName,
    uid
) => {
    module.addComment(module.globalFirestoreDB, {
        board: selectedThread.board,
        text: text,
        threadURL: selectedThread.url,
        dateCreated: new Date(),
        dateModified: new Date(),
        user: {
            displayName: displayName,
            uid: uid,
        },
    });
};

/**
 *
 * Filters boards based on category name
 *
 * Examples:
 *      generalBoards = filterBoard(allBoards, "General");
 *      supportBoards = filterBoard(allBoards, "Support");
 *
 */
const filterBoard = (boards, boardName) => {
    return boards.filter((board) => board?.category === boardName);
};

async function addMockDataToFirestore(allBoards, module) {
    if (allBoards.length === 0) {
        console.log("Seeding boards...");
        generateBoards(module);
        // Refetch after seeding
        return await module.getAllCollectionDocs("boards");
    }
    return allBoards;
}

const seedBoards = () => {
    import("@/utils/initFireBase").then(() => {
        import("@/utils/forumHelpers").then(async (module) => {
            let allBoards = await module.getAllCollectionDocs("boards");

            if (allBoards.length === 0) {
                allBoards = await addMockDataToFirestore(allBoards, module);
            }
            
            forumState.setBoards(allBoards);
        });
    });
};

export { filterBoard, seedBoards };
