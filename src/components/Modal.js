import { useState } from "react";
import 'firebase/firestore'
import { db } from "../firebase/Config";
import '../css/Modal.scss'
import { updateData } from "../firebase/Firestore";

export default function Modal ({showModal, setShowModal, selectModal}){
    const [coment, setComent] = useState('');


  const handleText = (e) =>{
    
    setComent({ ...coment, [e.target.id]: e.target.value })
    console.log(selectModal)
    
    
  }

    const handleSubmit = (e)=> {
      e.preventDefault()
     
     
     
     
      updateData(selectModal).update({
        descripcion:coment
      }).then(()=> setShowModal((visible) => !visible))
     
    }


    return showModal ? (
        <section className="modal">
          <div className="container-modal">
                       
           <form className="form-coment" onSubmit={handleSubmit} >
           <div className="close-container">
            <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
            </div>
             <textarea onChange={handleText} rows="10" maxLength="90"
                name="text-note" id="descripcion" placeholder="Añade un comentario sobre la foto">
              </textarea>
              <button type="submit" className="btn-add">Añadir</button>
           </form>
          </div>
        </section>
      ) : null;

    
}