import { Component } from '@angular/core';
import { Cinema } from '../../models/cinema.model';
import { CinemaService } from '../../services/cinema.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cinema',
  imports: [ FormsModule ],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {

  //propiedades
  cinemas: any;
  cinema = new Cinema();

  //constructor
  constructor(private cinemaService: CinemaService) {
    this.getCinema();
  }

  //metodo que obtiene los cines
  async getCinema(): Promise<void> {
    this.cinemas = await firstValueFrom(this.cinemaService.getCinema());
  } 

  //metodo que agrega un cine
  insertarCinema(): void {
    this.cinemaService.agregarCinema(this.cinema);
    this.getCinema();
    this.cinema = new Cinema();
  }

  //metodo para seleccionar un cine de la tabla
  selectCinema(cinemaSeleccionado: Cinema): void {
    this.cinema = cinemaSeleccionado;
  }

  //metodo para modificar un cine
  updateCinema(): void {
    this.cinemaService.modificarCinema(this.cinema);
    this.cinema = new Cinema();
    this.getCinema();
  }

  //metodo para eliminar un cine
  deleteCinema(): void {
    this.cinemaService.eliminarCinema(this.cinema);
    this.cinema = new Cinema();
    this.getCinema();
  }
}