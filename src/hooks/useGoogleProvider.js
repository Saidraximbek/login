import { auth, db } from "../firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { setDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore"
export const useGoogleProvider = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const googleProvider = async () => {
    try {
      setIsPending(true);
      const provider = new GoogleAuthProvider();

      const req = await signInWithPopup(auth, provider);
      const user = req.user;
       await setDoc(doc(db, "users", user.uid), {
              displayName: user.displayName,
              photoURL: user.photoURL,
              online: true
            })
         const userRef = doc(db, "users", user.uid)
            await updateDoc(userRef, {
                online: true
            })
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, data, googleProvider };
};
