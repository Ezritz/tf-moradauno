import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../firebase/Firestore";
import { BannerLog } from "./Banner";
import "../css/LogIn.scss";

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const handleLogIn= (e) =>{
        e.preventDefault();
        console.log(email,password)
        logIn(email,password).then(()=> {
          if(email=== 'inquilino@morada1.com'){
            navigate('/down-imgs')
          }
          else if(email=== 'asesor@morada1.com') {
            navigate('/')
          }
        })
        
    }

  return (
    <main className="main-log">
        <BannerLog/>
      <form onSubmit={handleLogIn}
      className="form-logIn">
        <h1 className="title-log">Inicia Sesión</h1>
        <label className="label-log">Correo</label>
        <input onChange={(e)=> { setEmail(e.target.value) } }
          className="input-log"
          min="0"
          type="email"
          placeholder="correo@ejemplo.com"
        ></input>
        <label className="label-log">Contraseña</label>
        <input onChange={(e) => { setPassword(e.target.value) } }
          className="input-log"
          min="0"
          type="password"
          placeholder="******"
        ></input>
        <button type="submit" className="btn-upload-image-2"> ENTRAR</button>
      </form>
    </main>
  );
}
