import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserServices } from 'src/app/user.service';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  //Variables inputs
  inputName: string;
  inputEmail: string;
  inputPassword: string;

  constructor(private userServicio: UserServices, private router: Router) { }

  ngOnInit(): void {
  }

  //Funcion para agregar usuario
  addUser() {
    this.userServicio.users.push(new User(this.inputName, this.inputEmail, this.inputPassword, "Viewer", ""));
    alert("Usuario registrado");
    this.router.navigate(['login']);
  }

}
