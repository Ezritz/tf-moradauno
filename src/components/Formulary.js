import { useState } from 'react';
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
      addData(folio,nameAsesor,date).then(()=> {
        nav('/down-imgs')
        }).catch((error) => {
        setError(error.message)
        });
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
                min="0"
                type="number"
                placeholder="No.Folio"
                onChange={(e)=> setFolio(e.target.value)}
                value={folio}
                ></input>
                <label className="label-1">Fecha de captura</label>
                <input 
                onChange={(e)=> setDate(e.target.value)}
                className="date-1" 
                type="date"
                value={date}
                ></input>
                
                <label className="label-3">Nombre del Asesor</label>
                <input
                    onChange={(e)=> setNameAsesor(e.target.value)}
                    className="date-3"
                    type="text"
                    placeholder="Nombre completo"
                    value={nameAsesor}
                ></input>
                    <div className="type-cont">
                    <label
                    className="label-type"
                    htmlFor="first-cont">Tipo de contrato</label>
                    <input
                    className="date-4"
                    id="first-cont"
                    name="1"
                    type="radio"
                    className="cont-start"
                    value="1"
                    /> 
                    <label
                    className="label-type" 
                    htmlFor="end-cont">Inicio</label>
                    <input
                    className="date-5"
                    id="end-cont" 
                    name="1"
                    className="cont-end" 
                    type="radio"
                    value="2"
                    />
                    <p>{error}</p>
                    <label
                    className="label-type" 
                    >Termino</label>
                    </div>
                    
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
