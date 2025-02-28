import { Component } from '@angular/core';
import { Libro } from '../../models/libros.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  imports: [ FormsModule ],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  //propiedades
  libros: any
  libro = new Libro();

  //constructor
  constructor(private libroService: LibroService) {
    this.getLibros();
  }

  //metodo que obtiene los libros
  async getLibros(): Promise<void> {
    this.libros = await firstValueFrom(this.libroService.getLibros());
  } 

  //metodo que agrega un libro
  insertarLibro(): void {
    this.libroService.agregarLibro(this.libro)
      this.getLibros();
      this.libro = new Libro();
    }

    //metodo para seleccionar un libro de la tabla
    selectLibro(libroSeleccionado:Libro){
      this.libro = libroSeleccionado;
    }

    //metodo para modificar un libro
    updateLibro(){
      this.libroService.modificarLibro(this.libro)
      this.libro = new Libro();
      this.getLibros();
    }

    deleteLibro(){
      this.libroService.eliminarLibro(this.libro)
      this.libro = new Libro();
      this.getLibros();
    }
    
    

}
