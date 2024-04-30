import { Component, Input, OnInit } from '@angular/core';
import { ServicioServices } from './servicio.service';
import { Servicio } from './servicio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  //Array de servicios
  servicios : Servicio[];

  @Input() iconType: string;
  @Input() buttonName : string;

  validar: boolean = false;

  constructor(private servicioServices: ServicioServices, private router:Router) { }

  ngOnInit(): void {
    //Inicializamos el array
    this.servicios = this.servicioServices.servicios;
    console.log(this.servicios.lastIndexOf.toString)
  }

  redirigir() {
    if(this.buttonName === 'Editar') {
      this.validar = true;
    } else {
      this.router.navigate(['login']);
    }
  }

  actualizar(servi : Servicio) {
    this.servicios.filter((servicio) => {
      if(servicio.titulo === servi.titulo) {
        this.servicioServices.actualizar(servicio);
      }
    })

  }

}
