import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {addData} from '../firebase/Firestore'
//import Select  from 'react-select'
import Banner from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";

export default function Formulary() {
    const [date, setDate]= useState('');
    const [folio, setFolio]=useState();
    // const [contract, setContract] =useState('');
    const [nameAsesor, setNameAsesor] = useState('');
    const [error, setError]=useState('');
    const nav= useNavigate();

    const handleSendSubmit =(e) => {
      e.preventDefault()
      addData(folio,nameAsesor,date).then(()=> nav('/down-imgs'))
      //  if(folio!='' && date!= '' && nameAsesor!=''){
        // nav('/down-imgs');
        // 
      //  } else {
        // setError('Campo vacio')
      //  }
    }


  return (
    <main>
      <Banner />
      
      <section className="container">
        <div className="Geri">
          <Instructive />
        </div>
        <div className="containerForm">
          <form onSubmit={handleSendSubmit}>
           
                <div className="formulary">
                
                <label 
                className="label-4">No. de Folio</label>
                <input
                className="inputFolio" 
                min="0"
                type="number"
                placeholder="No.Folio"
                onChange={(e)=> setFolio(e.target.value)}
                value={folio}
                ></input>
                <label className="label-1">Fecha de captura</label> <br/>
                <input 
                onChange={(e)=> setDate(e.target.value)}
                className="date-1" 
                type="date"
                value={date}
                ></input>
                
                <label className="label-3">Nombre del Asesor</label><br/>
                <input
                    onChange={(e)=> setNameAsesor(e.target.value)}
                    className="date-3"
                    type="text"
                    placeholder="Nombre completo"
                    value={nameAsesor}
                ></input>
                <button 
                className="btn-continue"
                >Continuar</button>
                </div>
          </form>
        </div>
      </section>
    </main>
  );
}
