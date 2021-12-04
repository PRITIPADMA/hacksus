import { getFirestore, collection } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export const storiesCol = collection(db, "stories");

export default db;
