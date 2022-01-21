import { useState, useEffect } from 'react';
import { dataRef } from "./Firestore";

export default function Hoock(){
    const [collection, setCollection] = useState([]);


  
        const getCollection =  () => {  
            dataRef.onSnapshot((snapshot) => {
              let docs = [];
              snapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
                       //   console.log(docs)
              });
             
              setCollection(docs)
            })
          };

          useEffect(() => {
            getCollection();
      }, []);
      return (
         collection
      )
}