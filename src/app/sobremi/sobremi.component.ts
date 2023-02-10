import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { dato } from '../datos';
import { Experiencia } from '../Entity/experiencia';
import { Education } from '../Entity/education';
import { Aboutme } from '../Entity/aboutme';
//import { DatosService } from '../servicios/datos.service';
import { ExperienciaService } from '../servicios/experiencia.service';
import { EducationService } from '../servicios/education.service';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobreMiComponent implements OnInit {

  aboutmes: Aboutme[] = [] //se llama al modelo que es un array
  isLogged = false; 
  experiencias: Experiencia[] = []  //se llama al modelo que es un array
  educations: Education[] = [] //se llama al modelo que es un array
  


  constructor(private serviExp: ExperienciaService,
              private serviEdu: EducationService,
              private serviAbout:AboutmeService,
              private tokenService: TokenService) { }



  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducation();  
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
      this.serviExp.list().subscribe(data => {this.experiencias = data})
}
  cargarEducation(): void {
      this.serviEdu.list().subscribe(data => {this.educations = data})
}
  cargarAboutme(): void{
      this.serviAbout.list().subscribe(data => {this.aboutmes = data})
  }

  deleteExp(id?: number) {
    if (id != undefined){
      this.serviExp.eliminarExperiencia(id).subscribe(
        data => {
        }, () => {
        alert("Experiencia fue eliminada correctamente")
        this.cargarExperiencia();
      })
    }
  }

  deleteEdu(id?: number) {
    if (id != undefined){
      this.serviEdu.eliminarEducation(id).subscribe(
        data => {
        }, () => {
        alert("La educación fue eliminada correctamente")
        this.cargarEducation();
      })
    }
  }




}