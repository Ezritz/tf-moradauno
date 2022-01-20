import Banner from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";

export default function Formulary() {
  return (
    <main>
      <Banner />
      <div className="type-cont">
        <label>Tipo de contrato</label>
        <input className="cont-start" type="radio" />
        <label>Inicio</label>
        <input className="cont-end" type="radio" />
        <label>Termino</label>
      </div>
      <section className="container">
        <div className="Geri">
          <Instructive />
        </div>
        <div className="containerForm">
          <form>
            <div className="formulary">
              <label className="label-4">No. de Folio</label>
              <input
                className="n-folio"
                type="text"
                placeholder="000000"
              ></input>
              <label className="label-1">Fecha de captura</label>
              <input className="date-1" type="date"></input>
              <label className="label-2">Fecha de carga</label>
              <input className="date-2" type="date"></input>
              <label className="label-3">Nombre del Asesor</label>
              <input
                className="date-3"
                type="text"
                placeholder="Nombre completo"
              ></input>
              <button className="btn-continue">Continuar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
