import { useState, useEffect } from 'react';
import { dataRef, removed } from '../firebase/Firestore';
import { Banner } from './Banner';
import '../css/Picture.scss';
import Modal from './Modal';

export default function Files() {
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const deleteImg = (id) => {
    console.log(id)
    removed(id).then(()=> alert('BORRADO'))
  }
  const comentModal= (id) => {
    console.log(id)
    setShowModal((visible)=> !visible)
    
  }

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
              <button onClick={()=>deleteImg(data.id)}
              >Eliminar</button>
              <button onClick={()=>comentModal(data.id)}
              >Editar</button>
              <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              id={data.id}
              />
            </div>
            
          ))}
        </div>
      </section>
    </main>                              
  );
}