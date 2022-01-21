import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {addData} from '../firebase/Firestore'
//import Select  from 'react-select'
import Banner from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";
import '../css/Files.scss';
import image01 from "../img/image01.png"
import {AddImg} from '../firebase/Firestore'
import {storage} from '../firebase/Config';

export default function Formulary() {
  const [date, setDate]= useState('');
  const [folio, setFolio]=useState();
  const [loading, setLoading] = useState(false);
  // const [contract, setContract] =useState('');
  const [nameAsesor, setNameAsesor] = useState('');
  const [error, setError]=useState('');
  const nav= useNavigate();
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const handleSendSubmit =(e) => {
    e.preventDefault()
    addData(folio,nameAsesor,date).then(()=> nav('/down-imgs'))
    //  if(folio!='' && date!= '' && nameAsesor!=''){
      // nav('/down-imgs');
      // 
    //  } else {
      // setError('Campo vacio')
    //  }
  }

  
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

  const handleUpload = () => {
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`morada/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrls((prevState) => [...prevState, urls]);
              console.log('url', url)
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };




  return (
    <main>
      <Banner />
      
      <section className="container">
        <div className="Geri">
          <Instructive />
        </div>
        <div className="containerForm">
          <form onSubmit={handleSendSubmit}
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
                  {loading && <button className="btn-upload-image-2" onClick={handleUpload} 
                  >Cargar imagenes
                  </button>}
                  <img src={urls}></img>
                </div>
          </form>
        </div>
      </section>
    </main>
  );
}