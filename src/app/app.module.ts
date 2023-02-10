import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { DatosService } from './servicios/datos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Modals/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobremi/sobremi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { IniciomodalComponent } from './Modals/iniciomodal/iniciomodal.component';
import { PerfilmodalComponent } from './Modals/perfilmodal/perfilmodal.component';
import { EduagregarComponent } from './Modals/eduagregar/eduagregar.component';
import { EdueditarComponent } from './Modals/edueditar/edueditar.component';
import { ExpeagregarComponent } from './Modals/expeagregar/expeagregar.component';
import { ExpeeditarComponent } from './Modals/expeeditar/expeeditar.component';
import { IntrohabilidadesComponent } from './Modals/introhabilidades/introhabilidades.component';
import { HabiliagregarComponent } from './Modals/habiliagregar/habiliagregar.component';
import { HabilieditarComponent } from './Modals/habilieditar/habilieditar.component';
import { ProyectintroComponent } from './Modals/proyectintro/proyectintro.component';
import { ProyectagregarComponent } from './Modals/proyectagregar/proyectagregar.component';
import { ProyecteditarComponent } from './Modals/proyecteditar/proyecteditar.component';
import { ContactomodalComponent } from './Modals/contactomodal/contactomodal.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ExpeeditComponent } from './expeedit/expeedit.component';
import { EdueditComponent } from './eduedit/eduedit.component';
import { IntroeditComponent } from './introedit/introedit.component';
import { AbouteditComponent } from './aboutedit/aboutedit.component';
import { HbackagregarComponent } from './Modals/hbackagregar/hbackagregar.component';
import { HsoftagregarComponent } from './Modals/hsoftagregar/hsoftagregar.component';
import { HfronteditarComponent } from './hfronteditar/hfronteditar.component';
import { HbackeditarComponent } from './hbackeditar/hbackeditar.component';
import { HsofteditarComponent } from './hsofteditar/hsofteditar.component';
import { HintroeditarComponent } from './hintroeditar/hintroeditar.component';
import { PintroeditarComponent } from './pintroeditar/pintroeditar.component';
import { ProyeditarComponent } from './proyeditar/proyeditar.component';
import { ContactoeditarComponent } from './contactoeditar/contactoeditar.component';
import { FootereditComponent } from './footeredit/footeredit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ErrorComponent,
    IndexComponent,
    IniciomodalComponent,
    PerfilmodalComponent,
    EduagregarComponent,
    EdueditarComponent,
    ExpeagregarComponent,
    ExpeeditarComponent,
    IntrohabilidadesComponent,
    HabiliagregarComponent,
    HabilieditarComponent,
    ProyectintroComponent,
    ProyectagregarComponent,
    ProyecteditarComponent,
    ContactomodalComponent,
    Navbar2Component,
    ExpeeditComponent,
    EdueditComponent,
    IntroeditComponent,
    AbouteditComponent,
    HbackagregarComponent,
    HsoftagregarComponent,
    HfronteditarComponent,
    HbackeditarComponent,
    HsofteditarComponent,
    HintroeditarComponent,
    PintroeditarComponent,
    ProyeditarComponent,
    ContactoeditarComponent,
    FootereditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
