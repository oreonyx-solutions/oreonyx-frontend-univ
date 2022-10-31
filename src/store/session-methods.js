import firebaseApp from "../firebase"; 
import { getDatabase, child, update, get, push, set, query, ref, onValue, serverTimestamp  } from 'firebase/database';

import store from ".";

export default {
    async addSession() {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const participant = {
            name: store.state.user.firstName + ' ' + store.state.user.lastName,
            avatar: store.state.user.avatar,
            role: store.state.user.roleName,
            joinedAt: serverTimestamp(),
            leftAt: null
        }
        const participants = {};
        participants[store.state.user.id] = participant
        const db = getDatabase(firebaseApp());
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}`
         return await set(ref(db, url), { 
            // messages: [], 
            // canvasData: [], 
            // videos: [],
            participants,
            createdAt: serverTimestamp(),
            status: 2
        });
    },
    listenSession(cb) {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp());
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}`
        const q = query(ref(db, url))
        onValue(q,(res) => {
            // console.log(res.val())
            store.state.workspace.session = res.val()
           if (cb) cb(res.val())
        })
    },
    async findSession() {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp());
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}`
       return (await get(query(ref(db, url)))).val()
    },
    async joinSession() {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp());
        console.log(store.state.user.id)
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}/participants/${store.state.user.id}`;
        
        const isAlreadyJoined =  (await get(query(ref(db, url)))).exists()
        console.log('isAlreadyJoined', isAlreadyJoined)

        const participant = {
            name: store.state.user.firstName + ' ' + store.state.user.lastName,
            avatar: store.state.user.avatar,
            role: store.state.user.roleName,
            joinedAt: serverTimestamp(),
            leftAt: null
        }
        if (!isAlreadyJoined) return await set(ref(db, url), participant)
        else update(ref(db,url), { leftAt: null })
    },
    leaveSession() {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp());
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}/participants/${store.state.user.id}`;
        update(ref(db,url), { leftAt: serverTimestamp() })
    },
    addMessage(text) {
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp())
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}/messages`
        console.log(store.state.user)
        push(ref(db,url), {
            text,
            userId: store.state.user.id,
            createdAt: serverTimestamp(),
        })

    },
    async startSessionStream() {
      const streamStartedBy = store.state.user.id
      const groupId = store.state.workspace.group.id
      const date = store.state.workspace.date
      const db = getDatabase(firebaseApp());
      const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}`
      await update(ref(db, url+'/participants/'+store.state.user.id), { 
      streamStartedBy,
      streamingStartedAt: serverTimestamp(),
      isStreaming: true
    });
    },
    setSessionActiveUser() {

    },
    async endSessionStream() {
        const streamEndedBy = store.state.user.id
        const groupId = store.state.workspace.group.id
        const date = store.state.workspace.date
        const db = getDatabase(firebaseApp());
        const url = `db0/${store.state.schoolYear.id}/groups/${groupId}/sessions/${ new Date(date).getTime()}`
         return await update(ref(db, url+'/participants/'+store.state.user.id), { 
          streamEndedBy,
          streamingEndedAt: serverTimestamp(),
          isStreaming: false
        });
    },
    updateSessionStream() {

    },
    uploadFile() {
        // files is for all the group
        // store.apiCallMethods.uploads
    },

}
