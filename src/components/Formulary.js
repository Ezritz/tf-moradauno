import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addData} from '../firebase/Firestore'
import Banner from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";
import '../css/Files.scss';
import image01 from "../img/image01.png"
import {storage} from '../firebase/Config';
import Files from './Files';

export default function Formulary() {
  const [folio, setFolio]=useState();
  const [loading, setLoading] = useState(false);
  const nav= useNavigate();
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [activeFiles, setActiveFiles] = useState('');

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
            });
        }
      );
    });

    /*
    Promise.all(promises)
      .then(() => {
        alert("All images uploaded")
        
      })//nav('.down-imgs'))
      .catch((err) => console.log(err));
      setLoading(false)
    */
    //  if(folio!='' && date!= '' && nameAsesor!=''){
      // nav('/down-imgs');
      // 
    //  } else {
      // setError('Campo vacio')
    //  }
    
  }

  
  console.log("images: ", images);

  
  
  
  /*
    const handleAddImg= (e) => {
      // const targ = e.target.files[0];
      const files = e.target.files;
      console.log(e.target.files)
      console.log('target', e.target);
      for(const i in files){
          console.log('targ: ', files[i])
        AddImg(files[i],files[i].name)//then(() =>{nav('/down-imgs')})

        //AddImg.snapshot.ref.getDownloadURL().then((url_img)=>{
         //     console.log('url', url_img)
          //})
          //
      
          // console.log(targ);
      }
      setLoading(true)
    }
  */
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
      setLoading(true);
    }
  };

  const handleChangeToFiles = () => {
    setActiveFiles('files')
    
  }

  

  
  



  return (
    <main>
      <Banner />
      
      <section className="container">
        <div className="Geri">
          <Instructive />
        </div>
        <div className="containerForm">
          <form 
          className="form">
           
                <div className="formulary">
                
                  <label 
                  className="label-4">No. de Folio</label>
                  <input
                  className="inputFolio"
                  min="0"
                  type="number"
                  placeholder="No.Folio"
                  onChange={(e)=> setFolio(e.target.value)}
                  value={folio}
                  ></input>
                  <img className="img-upload" src={image01} alt="img-upload"/>
      
                  {!loading && <input onChange={handleChange} 
                  type="file"accept="image/png, image/jpeg, image/jpg" multiple/>}
                  {!loading && <button className="btn-upload-image"
                  > Seleccionar imagenes
                  </button>}
                  <img src={urls}/>
                  
                  {loading && <button 
                  className="btn-upload-image-2" 
                  onClick={handleSendSubmit}
                  >Cargar imagenes
                  </button>}
                  
                </div>
                
          </form>
          
        </div>
        {/*activeFiles==='files' && (
          <Files urls={urls}/>
        )*/}
        
      </section>
    </main>
  );
}