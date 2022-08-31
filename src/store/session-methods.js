import firebaseApp from "../firebase"; 
import { getDatabase, child, get, push, set, query, ref, onValue, serverTimestamp  } from 'firebase/database';

export default {
    async addSession(groupId, date, participant) {
        const db = getDatabase(firebaseApp());
        return await set(ref(db, `groups/${groupId}/sessions/${ new Date(date).getTime()}`), { 
            date, 
            messages: [], 
            files: [], 
            participants: [ participant ], 
            canvasData: [], 
            videos: [],
            createdAt: serverTimestamp()
        });
    },
    listenSession(groupId, date) {
        const db = getDatabase(firebaseApp(), `groups/${groupId}/sessions/${ new Date(date).getTime()}`);
        const q = query(ref(db))
        onValue(q,(res) => {
            console.log(res.val())
        })
    } 
}