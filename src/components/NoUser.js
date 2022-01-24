import { useNavigate } from "react-router-dom";
import "../css/LogIn.scss";


export default function NoUser () {
    const navigate= useNavigate()
    const handleLog = () => navigate('./logIn')

    return(
        <main className="main-log">
            <h1 className="title-log">Inicia sesión para agregas fotos </h1>
            <button  onClick={handleLog}
            className="btn-upload-image-2">Iniciar Sesión</button>
        </main>
    )
}