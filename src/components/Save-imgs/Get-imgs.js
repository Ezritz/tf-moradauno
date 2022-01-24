import Banner from '../Banner'
import '../../css/Picture.scss'
export default function GetImg () {


    return(
        <main className="main">
            <Banner/>
            <section className='principal'>
            <button className="btn-nav"> Regresar al menú </button>
           <article className="cards">
           <div className="card">
                <p className="text-card1">Inmueble</p>
                <img className="prev-img" src="https://firebasestorage.googleapis.com/v0/b/totallook-1e8a8.appspot.com/o/mudarse-de-casa%201.png?alt=media&token=c8e8578a-15f2-4f11-8c53-243760a32fcd" alt="icon"/>
                <p className="text-card2">Nº Contrato</p>
           </div>
           </article>
           </section>
        </main>
    )
}