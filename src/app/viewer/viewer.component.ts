import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicios/servicio.model';
import { ServicioServices } from '../servicios/servicio.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  servicios : Servicio[];

  constructor(private servicioServices: ServicioServices) { }

  ngOnInit(): void {

    this.servicios = this.servicioServices.servicios;

  }

}
