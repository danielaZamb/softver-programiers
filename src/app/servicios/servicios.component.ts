import { Component, Input, OnInit } from '@angular/core';
import { ServicioServices } from './servicio.service';
import { Servicio } from './servicio.model';

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

  constructor(private servicioServices: ServicioServices) { }

  ngOnInit(): void {
    //Inicializamos el array
    this.servicios = this.servicioServices.servicios;
    console.log(this.servicios.lastIndexOf.toString)
  }

}
