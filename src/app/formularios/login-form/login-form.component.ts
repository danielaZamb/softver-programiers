import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  //Variables login
  inputEmail: string;
  inputPassword: string;

  constructor(private userServicio: UserServices, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.userServicio.users.filter((user) => {
      if (user.email === this.inputEmail && user.contrasena === this.inputPassword) {
        this.router.navigate(['viewer']);
      }
    });

  }

}
