import firebaseApp from "../firebase"; 
import { getDatabase, child, get, query, ref, onValue  } from 'firebase/database';

export default {
    getGroups() {
        const db = getDatabase(firebaseApp());
       
    } 
}