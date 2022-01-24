import { useState } from "react";
import '../css/Modal.scss'

export default function Modal ({showModal, setShowModal, id}){
    const [coment, setComent] = useState('');

    const handleSubmit = (e)=> {
        console.log(e.target.value, id, coment)
    }


    return showModal ? (
        <section className="modal">
          <div className="container-modal">
            <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
           <form className="form-coment" onSubmit={handleSubmit} >
             <textarea onChange={(e) => {setComent(e.target.value)}} rows="15" maxLength="120"
                name="text-note" id="text-coment" placeholder="Añade un comentario sobre la foto">
              </textarea>
              <button type="submit" className="btn-add">Añadir</button>
           </form>
          </div>
        </section>
      ) : null;

    
}