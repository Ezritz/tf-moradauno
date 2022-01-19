import logo from '../img/logo.png';
import '../css/Banner.scss';

function Banner() {
  return (
    <div className="Banner">
      <header className="Banner-header">
        <img src={logo} className="Banner-logo" alt="logo" />
        <a className= "welcome">Bienvenido</a>
        <button className='logOut'>Cerrar sesión</button>
      </header>
    </div>
  );
}

export default Banner;