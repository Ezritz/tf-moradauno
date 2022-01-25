import { useState, useEffect } from 'react';
import { dataRef, removed } from '../firebase/Firestore';
import {useNavigate} from 'react-router-dom';
import { Banner } from './Banner';
import '../css/Picture.scss';
import Modal from './Modal';
import Swal from 'sweetalert2';
import image from '../img/check.png';

export default function Files() {
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectModal, setSelectModal] = useState(null);
  const [folio, setFolio]= useState('');
  const nav= useNavigate();

  useEffect(() => {
    const getCollection =  () => {  
      dataRef.onSnapshot((snapshot) => {
        const docs=[];
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


  const deleteImg = (id) => {
    console.log(id)
    removed(id).then(()=> alert('BORRADO'))
  }
  const comentModal= (data, id) => {
    setSelectModal(data)
    console.log(id)
    setShowModal((visible)=> !visible)
    
  }

  const handleSweet= (coment) => {
    console.log(coment)
    Swal.fire({
      title: 'Descripción',
      text: coment,
      confirmButtonText: 'Cool'
    })
  }

  const handleSearch=() => {
    
    console.log('aqui folio',folio)
  }

  const handleBack = () => {
    nav('/');
  }


  return (
    <main className="main">
      <Banner/>
      <section className='principal'>
        <div className="div-nav">
          <button className="btn-nav" onClick={handleBack}> Volver </button>
          <input
          type="text"
          onChange={(e)=> setFolio(e.target.value)}
          placeholder="Selecciona tu folio"
          value={folio}
          ></input>
          <button onClick={handleSearch}>Buscar</button>
          <label className="type-service">Inquilino</label>
          <img className="inquilino" src={image}></img>
          
        </div>
        <div className="cards">
          {collection.map((data,i) => 
            folio === data.folio ? 
          (
        
            <div className="card" key={i}>
              
              <p className="text-card1">{data.id}</p>
              <p className="text-card2">{data.folio}</p>
              { <img className="prev-img" src={data.imgs} alt="icon"/> }
              <p className="text-card2">{data.folio}</p>
              <button className='btns' onClick={()=>deleteImg(data.id)}
              >Eliminar</button>
              <button className='btns' onClick={()=>comentModal(data.id)}
              >Editar</button>
              <button onClick={()=>handleSweet(data.descripcion.descripcion)} > Ver</button>
            </div> 
          ):null
          )}
          {selectModal && <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            selectModal={selectModal}
            />

          }
        </div>
      </section>
    </main>                              
  );
}