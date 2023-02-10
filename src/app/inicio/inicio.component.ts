import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// esto es el servicio creado que toma el Json
//import { DatosService } from '../servicios/datos.service';
//import { UiService } from '../servicios/ui.service';
import { Subscription } from 'rxjs';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isLogged = false;  
  aboutmes: Aboutme[] = [] //se llama al modelo que es un array


  // inyectar el servicio para tener acceso en la calse a los métodos
  constructor(private serviAbout: AboutmeService,
              private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
  }

  cargarAboutme(): void{
    this.serviAbout.list().subscribe(data => {this.aboutmes = data})
}

  //toggleShowBtn();{
  //  this.uiService.toggleShowBtn();
  //}
  
}


