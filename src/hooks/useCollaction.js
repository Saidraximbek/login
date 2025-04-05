import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export function useCollaction(c) {
  const [data, setData] = useState(null)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, c), (snapshot) => {
      const data =[]
      snapshot.forEach((d)=> {
          data.push({id:d.id, ...d.data()})
      })
      setData(data)
    //   console.log({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
    });

    return () => unsubscribe();
  }, [c]);

  return {data}
}
