import { GoogleAuthProvider, getAuth } from "@firebase/auth";
import app from "./firebase";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
