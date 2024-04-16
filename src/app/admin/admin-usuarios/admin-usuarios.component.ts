import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserServices } from 'src/app/user.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  usuarios : User [];

  searchEmail : string;

  constructor(private userServicios : UserServices) { }

  ngOnInit(): void {
    this.usuarios = this.userServicios.users;
  }

  search() {

    this.usuarios.find(user => user.email == this.searchEmail);
    
  }

}
