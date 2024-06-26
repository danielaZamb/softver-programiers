import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalNavComponent } from './principal-nav/principal-nav.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CommentComponent } from './comment/comment.component';
import { ContactFormComponent } from './formularios/contact-form/contact-form.component';
import { LoginFormComponent } from './formularios/login-form/login-form.component';
import { SignFormComponent } from './formularios/sign-form/sign-form.component';
import { CommentServices } from './comment.services';
import { FormsModule } from '@angular/forms';
import { UserServices } from './user.service';
import { ViewerComponent } from './viewer/viewer.component';
import { AdminServiciosComponent } from './admin/admin-servicios/admin-servicios.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { ServicioServices } from './servicios/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalNavComponent,
    FooterComponent,
    InicioComponent,
    ServiciosComponent,
    CommentComponent,
    ContactFormComponent,
    LoginFormComponent,
    SignFormComponent,
    ViewerComponent,
    AdminServiciosComponent,
    AdminUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommentServices, UserServices, ServicioServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
