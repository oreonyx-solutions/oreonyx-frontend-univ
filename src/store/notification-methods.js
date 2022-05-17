
import { collection, doc, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import firebaseApp from "../firebase"; 
import store from '.';

export default {
    getNotifications(cb) {
        const ref =   collection(getFirestore(firebaseApp()), 'admins/'+ store.state.user.id +'/notifications');
        const q =  query(ref, orderBy('createdAt', 'desc'), limit(100));
        onSnapshot(q, (snapshot) => {
            const notifications = [];
            snapshot.forEach(doc => {
                notifications.push({ id: doc.id, ...doc.data() })
            });
            cb(notifications)
        });
    },
    getCampaigns(cb) { 
        const ref =   collection(getFirestore(firebaseApp()), 'admins/'+ store.state.user.id +'/publications');
        const q =  query(ref, orderBy('createdAt', 'desc'), limit(100));
        onSnapshot(q, (snapshot) => {
            const publications = [];
            snapshot.forEach(doc => {
                publications.push({ id: doc.id, ...doc.data() })
            });
            cb(publications)
        });
    },
    markNotificationsAsSeen(id) { 
       const row = doc(getFirestore(firebaseApp()), 'admins/'+ store.state.user.id +'/notifications/'+id)
        updateDoc(row, { seenAt: serverTimestamp() })
    }
}