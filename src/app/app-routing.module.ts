import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactFormComponent } from './formularios/contact-form/contact-form.component';
import { LoginFormComponent } from './formularios/login-form/login-form.component';
import { SignFormComponent } from './formularios/sign-form/sign-form.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminServiciosComponent } from './admin/admin-servicios/admin-servicios.component';

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
  },
  {
    path: 'admin-services', component: AdminServiciosComponent
  },
  {
    path: 'admin-users', component: AdminUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
