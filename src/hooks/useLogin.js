import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore"
export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const register = async (email, password, displayName) => {
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
          online: true
      })
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/open-peeps/svg?seed=${displayName}
      `,
      });
      toast.success(`Qaytganing bilan, ${user.displayName}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
      console.log(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, register };
};
