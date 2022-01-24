import { useState } from "react";
import '../css/Modal.scss'
import { updateData } from "../firebase/Firestore";

export default function Modal ({showModal, setShowModal, selectModal= {descripcion:''}}){
    const [coment, setComent] = useState(selectModal);


  const handleText = (e) =>{
    
    setComent({ ...coment, [e.target.id]: e.target.value })
    console.log({ ...coment, [e.target.id]: e.target.value })
  }

    const handleSubmit = (e)=> {
      e.preventDefault()
        console.log(typeof(coment), coment)
        // updateData(coment).then(()=> setShowModal((visible) => !visible) )
        setShowModal((visible) => !visible)
    }


    return showModal ? (
        <section className="modal">
          <div className="container-modal">
            <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
           <form className="form-coment" onSubmit={handleSubmit} >
             <textarea onChange={handleText} rows="15" maxLength="120"
                name="text-note" id="descripcion" placeholder="Añade un comentario sobre la foto">
              </textarea>
              <button type="submit" className="btn-add">Añadir</button>
           </form>
          </div>
        </section>
      ) : null;

    
}