import { useState, useEffect } from 'react';
import Select  from 'react-select'
import Banner from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";

export default function Formulary() {
    const [date, setDate]= useState('');
    const [folio, setFolio]=useState();
    const [contract, setContract] =useState('');
    const [nameAsesor, setNameAsesor] = useState('');

   const handleChangeContract =() =>{
       

   }

  return (
    <main>
      <Banner />
      
      <section className="container">
        <div className="Geri">
          <Instructive />
        </div>
        <div className="containerForm">
          <form>
            <div className="type-cont">
                <label 
                for="first-cont">Tipo de contrato</label>
                <input
                id="first-cont"
                name="1"
                type="radio"
                className="cont-start"
                value="1"
                />
                <label 
                for="end-cont">Inicio</label>
                <input
                id="end-cont" 
                name="1"
                className="cont-end" 
                type="radio"
                value="2"
                />
                <label>Termino</label>
            </div>
            <div className="formulary">
              <label className="label-4">No. de Folio</label>
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
              <button className="btn-continue">Continuar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
