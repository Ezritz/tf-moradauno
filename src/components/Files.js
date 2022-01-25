import { useState, useEffect } from 'react';
import { dataRef, removed } from '../firebase/Firestore';
import { Banner } from './Banner';
import '../css/Picture.scss';
import Modal from './Modal';
import Swal from 'sweetalert2';
import iconDelete from "../img/iconDelete.png";
import iconAddComent from "../img/iconAddComent.png";
import iconShowComent from "../img/iconShowComent.png";


export default function Files() {
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectModal, setSelectModal] = useState(null);

  const [folio, setFolio]= useState('');
  

  useEffect(() => {
    const getCollection =  () => {  
      dataRef.onSnapshot((snapshot) => {
        const docs=[];
        snapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
             //console.log('id:',id)       
        });
        // console.log(docs)

        setCollection(docs)
      })
    };
    getCollection();
  }, []);


  const deleteImg = (id) => {
    Swal.fire({
      title: '¿Deseas eliminar la imagen?',
      icon: 'warning',
      iconColor: '#FF7457',
      showCancelButton: true,
      confirmButtonColor: '#1ABBBF',
      cancelButtonColor: '#1ABBBF',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        removed(id)
      }
    })
  
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
      confirmButtonColor: '#1ABBBF',
      confirmButtonText: 'Cool'
    })
  }

  const handleSearch=() => {
    
    console.log('aqui folio',folio)
  }

  return (
    <main className="main">
      <Banner/>
      <section className='principal'>
<<<<<<< HEAD
        <button className="btn-nav"> Regresar al menú </button>
=======
        <button className="btn-nav"> Regresar al menu </button>
        <input
        type="text"
        onChange={(e)=> setFolio(e.target.value)}
        placeholder="Selecciona tu folio"
        value={folio}
        ></input>
        <button onClick={handleSearch}>Buscar</button>
>>>>>>> f6c55dfd475a29e4433021ff202bf04ee719b577
        <div className="cards">
          {collection.map((data,i) => 
            folio === data.folio ? 
          (
            
            <div className="card" key={i}>
              
              <p className="text-card1">{data.id}</p>
              <p className="text-card2">{data.folio}</p>
              { <img className="prev-img" src={data.imgs} alt="icon"/> }
              <p className="text-card2">{data.folio}</p>
<<<<<<< HEAD
             <div className='btns'>
              <input type="image" src={iconAddComent} id='btnAddComent' title = "Agregar comentario" onClick={()=>comentModal(data.id)}/> 
              <input type="image" src={iconShowComent} id='btnShowComent' title = "Ver comentario" onClick={()=>handleSweet(data.descripcion.descripcion)}/>
              <input type="image" src={iconDelete} id='btnDelete' title = "Eliminar imagen" onClick={()=>deleteImg(data.id)}/>
              </div> 
            </div>
          ))}
=======
              <button className='btns' onClick={()=>deleteImg(data.id)}
              >Eliminar</button>
              <button className='btns' onClick={()=>comentModal(data.id)}
              >Editar</button>
              <button onClick={()=>handleSweet(data.descripcion.descripcion)} > Ver</button>
            </div> 
          ):null
          )}
>>>>>>> f6c55dfd475a29e4433021ff202bf04ee719b577
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