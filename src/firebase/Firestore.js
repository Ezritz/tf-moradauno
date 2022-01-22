import 'firebase/firestore'
import { db, storage } from "./Config";

export const addData = (setFolio, setAsesor, setFecha) => db.collection('files-morada').doc().set({
    folio: setFolio,
    asesor: setAsesor,
    fecha: setFecha,
    date: new Date(),
});

export const AddImg = (ref, img) => storage.ref(`/morada/${ref.name}`).put(img):

export const dataRef = db.collection('files-morada');

