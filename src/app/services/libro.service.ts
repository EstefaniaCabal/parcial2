import { Injectable, inject } from '@angular/core';
import { Libro } from '../models/libros.model';
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';  
import {first} from 'rxjs';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //metodo para obtener todos los libros
  getLibros(){
    const librosCollection= collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'}).pipe(first());
  }

  //metodo para agregar un documento a la coleccion libros  
  agregarLibro(libro: Libro){ 
    const librosCollection= collection(this.db, 'libros');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }
  //metodo para modificar un documento de la coleccion libros
  modificarLibro(libro: Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    updateDoc(documentRef, {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  //metodo para eliminar un documento de la coleccion libros
  eliminarLibro(libro: Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    deleteDoc(documentRef);
    alert("Registro eliminado correctamente");

  }
}

