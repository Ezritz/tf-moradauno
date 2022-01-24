import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addData} from '../firebase/Firestore'
import Instructive from "./Instructive";
import "../css/Formulary.scss";
import '../css/Files.scss';
import image01 from "../img/image01.png"
import {storage} from '../firebase/Config';
import { Banner, BannerLog } from './Banner';
import NoUser from './NoUser';

export default function Formulary(user) {
  const [folio, setFolio]=useState('');
  const [loading, setLoading] = useState(false);
  const nav= useNavigate();
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [error, setError]= useState('');


  useEffect(()=>{
    
  },[])
  
  const handleSendSubmit =(e) => {
    e.preventDefault()
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`morada/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        
        async () => {
          await storage
            .ref("morada")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
              console.log('no se',urls)
              console.log('folio', folio, urls)
              addData(folio, urls).then(()=> nav('/down-imgs'))
              
            })
            .catch(()=>{
              setError('Es necesario tu número de folio')
            })
        }
      );
    });

    
    
  }

  
  console.log(user.user.email);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
      setLoading(true);
    }
  };


if(user.user.email==='null'){
  return (
    <main>
    <NoUser/>
  </main>
  
  );
}
 return(
  <main>
  <Banner/>      
  <section className="container">
    <div className="Geri">
      <Instructive />
    </div>
    <div className="containerForm">
      <div 
      className="form">
       
            <form className="formulary">
            
              <label 
              className="label-4">No. de Folio</label>
              <input onChange={(e)=> setFolio(e.target.value)}
              className="inputFolio"
              min="0"
              type="number"
              placeholder="No.Folio"
              value={folio}
              ></input>
              <img className="img-upload" src={image01} alt="img-upload"/>
  
              {!loading && <input onChange={handleChange} 
              type="file"accept="image/png, image/jpeg, image/jpg" multiple/>}
              {!loading && <button className="btn-upload-image"
              > Seleccionar imagenes
              </button>}
              
              <p className="error">{error}</p>
              {loading && <button 
              className="btn-upload-image-2" 
              onClick={handleSendSubmit}
              >Cargar imagenes
              </button>}
              
            </form>
            
      </div>
      
    </div>
    
  </section>
</main>
 ) 
}