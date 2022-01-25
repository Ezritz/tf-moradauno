import '../css/Instructive.scss';
import check from "../img/check.png";

export default function Instructive () {
    
    return (
            <section className='section-1'>
                <h1><span className='textGreen'>PASOS </span>Y <span className='textPurple'>SUGERENCIAS</span> </h1>
                  <ul>
                    <li>Ingresa el número de <span className='textPurple'>folio</span> del contrato al que deseas <span className='textPurple'>agregar</span> la fotografía</li> <br/>
                    <li>Tomar <span className='textPurple'>fotos</span> por sección de la casa</li><br/>
                    <li><span className='textPurple'>Incluir</span> estanterías, muebles, electrodomésticos</li><br/>
                    <li>En cada sección de la casa identificar <span className='textPurple'>daños </span>
                    superficiales, <span className='textPurple'>desperfectos</span> y <span className='textPurple'>defectos</span> evidentes</li><br/>
                    <li>Agregar <span className='textPurple'>comentarios</span> sobre el daño que se está reportando en la foto</li><br/>
                    <li>En la foto se tiene que <span className='textPurple'>ver bien</span> el daño o desperfecto</li> <br/>
                 </ul>
                 <div>
                    <img className='imgCheck' src={check} alt="logo" />
                  </div>
            </section>   
    )
}