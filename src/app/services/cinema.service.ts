import { Injectable, inject } from '@angular/core';
import { Cinema } from '../models/cinema.model';
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';  
import {first} from 'rxjs';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //metodo para obtener todos los nombres de las peliculas
  getCinema(){
    const cinemaCollection= collection(this.db, 'cinema');
    return collectionData((cinemaCollection), {idField: 'id'}).pipe(first());
  }

  //metodo para agregar un documento a la coleccion de cinema  
  agregarCinema(cinema: Cinema){ 
    const cinemaCollection= collection(this.db, 'cinema');
    const cinemaData = {
      nombre: cinema.nombre,
      productor: cinema.productor,
      anio: cinema.anio
    };
    addDoc(cinemaCollection, cinemaData);
  }
  //metodo para modificar un documento de la coleccion cinema
  modificarCinema(cinema: Cinema){
    const documentRef = doc(this.db, 'cinema', cinema.id);
    updateDoc(documentRef, {
      nombre: cinema.nombre,
      productor: cinema.productor,
      anio: cinema.anio
    });
  }

  //metodo para eliminar un documento de la coleccion cinema
  eliminarCinema(cinema: Cinema){
    const documentRef = doc(this.db, 'cinema', cinema.id);
    deleteDoc(documentRef);
    alert("Registro eliminado correctamente");

  }
}

