import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const FetchData = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const firestore = firebase.firestore();
    const DataRef = firestore.collection(collectionName);

    const unsubscribe = DataRef.onSnapshot(
      (snapshot) => {
        const Data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(Data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return data;
};

export default FetchData;
