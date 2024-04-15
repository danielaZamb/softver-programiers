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
import { SignFormComponent } from './sign-form/sign-form.component';

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
    SignFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
