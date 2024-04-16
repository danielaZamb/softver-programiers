import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-servicios',
  templateUrl: './admin-servicios.component.html',
  styleUrls: ['./admin-servicios.component.css']
})
export class AdminServiciosComponent implements OnInit {

  nameBtn : string = 'Editar';
  iconBtn : string = 'bi-pencil-fill'
  
  constructor() { }

  ngOnInit(): void {
  }

}
