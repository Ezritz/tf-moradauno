import logo from "../img/logo.png";
import "../css/Banner.scss";

function Banner() {
  return (
    <header className="Banner">
      <div>
        <img src={logo} className="Banner-logo" alt="logo" />
      </div>
        <a className="welcome">Bienvenido</a>
        <button className="logOut">Cerrar sesión</button>
    </header>
  );
}

export default Banner;
