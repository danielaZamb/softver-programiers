import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactFormComponent } from './formularios/contact-form/contact-form.component';
import { LoginFormComponent } from './formularios/login-form/login-form.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent 
  },
  {
    path:'contact', component: ContactFormComponent
  },
  {
    path:'login', component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
