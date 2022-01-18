import logo from '../src/img/logo.png';
import '../src/css/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className='welcome'>Bienvenido</a>
        <button className='logOut'>Cerrar sesión</button>
      </header>
    </div>
  );
}

export default App;
