import { Component, OnInit } from '@angular/core';
//import { DatosService } from '../servicios/datos.service';
import { HabilidadesFront } from '../Entity/habilidades-front';
import { HabilidadesBack } from '../Entity/habilidades-back';
import { HabilidadesSoft } from '../Entity/habilidades-soft';
import { Aboutme } from '../Entity/aboutme';
import { HabilidadesFrontService } from '../servicios/habilidades-front.service';
import { HabilidadesBackService } from '../servicios/habilidades-back.service';
import { HabilidadesSoftService } from '../servicios/habilidades-soft.service';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  isLogged = false;
  habilidadesFronts: HabilidadesFront[] = []; //se llama al modelo que es un array
  habilidadesBacks: HabilidadesBack[] = []; //se llama al modelo que es un array
  habilidadesSofts: HabilidadesSoft[] = []; //se llama al modelo que es un array
  aboutmes: Aboutme[] = [] //se llama al modelo que es un array
 
  

  constructor(private serviHabiliF: HabilidadesFrontService,
              private serviAbout:AboutmeService,
              private serviHabiliB: HabilidadesBackService,
              private serviHabiliS: HabilidadesSoftService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarHabilidadesFront();
    this.cargarHabilidadesBack();
    this.cargarHabilidadesSoft();
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
}

cargarHabilidadesFront(): void {
  this.serviHabiliF.list().subscribe(data => {this.habilidadesFronts = data})
}

cargarHabilidadesBack(): void {
  this.serviHabiliB.list().subscribe(data => {this.habilidadesBacks = data})
}

cargarHabilidadesSoft(): void {
  this.serviHabiliS.list().subscribe(data => {this.habilidadesSofts = data})
}

cargarAboutme(): void{
  this.serviAbout.list().subscribe(data => {this.aboutmes = data})
}

deletehfront(id?: number) {
  if (id != undefined){
    this.serviHabiliF.eliminarHabilidadesFront(id).subscribe(
      data => {
      }, () => {
      alert("La habilidad fue eliminada correctamente")
      this.cargarHabilidadesFront();
    })
  }
}

deletehback(id?: number) {
  if (id != undefined){
    this.serviHabiliB.eliminarHabilidadesBack(id).subscribe(
      data => {
      }, () => {
      alert("La habilidad fue eliminada correctamente")
      this.cargarHabilidadesBack();
    })
  }
}

deletehsoft(id?: number) {
  if (id != undefined){
    this.serviHabiliS.eliminarHabilidadesSoft(id).subscribe(
      data => {
      }, () => {
      alert("La habilidad fue eliminada correctamente")
      this.cargarHabilidadesSoft();      
    })
  }
}

}
