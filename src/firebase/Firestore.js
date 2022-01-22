import 'firebase/firestore'
import { db, storage } from "./Config";

export const addData = (setFolio, setUrls) => db.collection('files-morada').doc().set({
   folio:setFolio,
   imgs:setUrls, 
   date: new Date(),
});

export const AddImg = (ref, img) => storage.ref(`/morada/${ref.name}`).put(img).then((snapshot)=>{
    snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
    });
});
export const dataRef = db.collection('files-morada');