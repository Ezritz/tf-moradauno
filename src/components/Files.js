import { useState, useEffect } from 'react';
import { dataRef } from '../firebase/Firestore';
import '../css/Picture.scss';
import { Banner } from './Banner';

export default function Files() {
  const [collection, setCollection] = useState([]);

 const docs=[];
  useEffect(() => {
    const getCollection =  () => {  
      dataRef.onSnapshot((snapshot) => {
        
        snapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
             //console.log('id:',id)       
        });
        console.log(docs)

        setCollection(docs)
      })
    };
    getCollection();
  }, []);

  console.log('aqui toy', collection)
  console.log('folio: ', collection.id)

  return (
    <main className="main">
      <Banner/>
      <section className='principal'>
        <button className="btn-nav"> Regresar al menu </button>
        <div className="cards">
          {collection.map((data,i) => (
            <div className="card" key={i}>
              
              <p className="text-card1">{data.id}</p>
              <p className="text-card2">{data.folio}</p>
              { <img className="prev-img" src={data.imgs} alt="icon"/> }
              <p className="text-card2">{data.date.toDate().toLocaleString()}</p>
              

            </div>

          ))}
        </div>
      </section>
    </main>                              
  );
}