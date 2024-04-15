import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactFormComponent } from './formularios/contact-form/contact-form.component';
import { LoginFormComponent } from './formularios/login-form/login-form.component';
import { SignFormComponent } from './formularios/sign-form/sign-form.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent 
  },
  {
    path:'contact', component: ContactFormComponent
  },
  {
    path:'login', component: LoginFormComponent
  },
  {
    path: 'sign', component: SignFormComponent
  },
  {
    path: 'viewer', component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
