import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { DatosService } from './servicios/datos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modals/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobremi/sobremi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { EduagregarComponent } from './Modals/eduagregar/eduagregar.component';
import { ExpeagregarComponent } from './Modals/expeagregar/expeagregar.component';
import { HabiliagregarComponent } from './Modals/habiliagregar/habiliagregar.component';
import { ProyectagregarComponent } from './Modals/proyectagregar/proyectagregar.component';
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
    LoginComponent,
    InicioComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ErrorComponent,
    IndexComponent,
    EduagregarComponent,
    ExpeagregarComponent,
    HabiliagregarComponent,
    ProyectagregarComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
