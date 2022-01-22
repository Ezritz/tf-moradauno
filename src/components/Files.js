import Banner from './Banner'
import '../css/Files.scss';


export default function Files({urls}) {

  

  return (
    
    
    <main className= "upload-files">
      <Banner/>
      {/*urls.map((url,i)=>(
        <img key={i}
        src={url}></img>
      ))*/}
      <form className= "img-file">
        

      </form>
    </main>
    
  );
}