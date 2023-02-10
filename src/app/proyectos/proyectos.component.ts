import { Component, OnInit } from '@angular/core';
//import { DatosService } from '../servicios/datos.service';
import { Proyecto } from '../Entity/proyecto';
import { Aboutme } from '../Entity/aboutme';
import { ProyectoService } from '../servicios/proyecto.service';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  proyectos: Proyecto[] = []; //se llama al modelo que es un array
  aboutmes: Aboutme[] = [] //se llama al modelo que es un array

  constructor(private serviProy: ProyectoService, 
              private serviAbout: AboutmeService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyecto();
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.serviProy.list().subscribe(data => {this.proyectos = data})
  }

  cargarAboutme(): void{
    this.serviAbout.list().subscribe(data => {this.aboutmes = data})
  }

  delete(id?: number) {
    if (id != undefined){
      this.serviProy.eliminarProyecto(id).subscribe(
        data => {
        }, () => {
        alert("El proyecto fue eliminado correctamente")
        this.cargarProyecto();
      })
    }
  }

}
