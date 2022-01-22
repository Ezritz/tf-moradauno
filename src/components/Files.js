import { useState, useEffect } from 'react';
import { dataRef } from '../firebase/Firestore';
import Banner from './Banner'
import '../css/Picture.scss';

export default function Files() {
  const [collection, setCollection] = useState([]);


  useEffect(() => {
  const getCollection =  () => {  
      dataRef.onSnapshot((snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
                    console.log(docs)
        });
        console.log(docs)
 
        setCollection(docs)
      })
    };
      getCollection();
    }, []);

  return (
    <main className="main">
            <Banner/>
            <section className='principal'>
            <button className="btn-nav"> Regresar al menu </button>
           <div className="cards">
              {collection.map(data => (
                           <div className="card" key={data.id}>
                 <p className="text-card1">{data.date}</p>
                {/* <img className="prev-img" src="https://firebasestorage.googleapis.com/v0/b/totallook-1e8a8.appspot.com/o/mudarse-de-casa%201.png?alt=media&token=c8e8578a-15f2-4f11-8c53-243760a32fcd" alt="icon"/> */}
                <p className="text-card2">{data.folio}</p>
                </div>

              ))} 
           </div>
           </section>
        </main>                              
  );
}
