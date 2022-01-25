import logo from "../img/logo.png";
import "../css/Banner.scss";
import { logOut } from "../firebase/Firestore";
import { useNavigate } from "react-router-dom";

export function Banner() {
const navigate= useNavigate()
  const handleOut = () => {
    logOut().then(()=> navigate('/logIn'))

  }

  return (
    <header className="Banner">
      <div>
        <img src={logo} className="Banner-logo" alt="logo" />
      </div>
        <h1 className="welcome">Bienvenido</h1>
        <button onClick={handleOut}
        className="logOut">Cerrar sesión</button>
    </header>
  );
}
export function BannerLog(){
  return (
    <header className="Banner">
        <img src={logo} className="Banner-logo" alt="logo" />
    </header>
  );
}

