import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/servicios/education.service';


@Component({
  selector: 'app-eduagregar',
  templateUrl: './eduagregar.component.html',
  styleUrls: ['./eduagregar.component.css']
})
export class EduagregarComponent implements OnInit {

  form: FormGroup;
  imgEdu: string = '';
  sizeImg: string = '';
  titulo: string = '';
  inicio: string = '';
  fin: string = '';
  institucion: string = '';
  descripcionEdu: string = '';
  esEstudioActual: boolean = false;
  

  constructor(private formBuilder: FormBuilder, private eduServ: EducationService) {
    this.form = this.formBuilder.group({
      imgEdu: ['', [Validators.required]],
      sizeImg: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      descripcionEdu: ['', [Validators.required]],
      esEstudioActual: [''],
    })
  }

  ngOnInit(): void {
  }

  get ImgEdu(){
    return this.form.get("imgEdu");
  }

  get SizeImg(){
    return this.form.get("sizeImg");
  }

  get Titulo(){
    return this.form.get("titulo");
  }
 
  get Inicio(){
   return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }

  get Institucion(){
    return this.form.get("institucion");
  }

  get DescripcionEdu(){
    return this.form.get("descripcionEdu");
  }

  get ImgEduValid(){
    return this.ImgEdu?.touched && !this.ImgEdu?.valid;
  }

  get SizeImgValid(){
    return this.SizeImg?.touched && !this.SizeImg?.valid;
  }

  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get InicioValid(){
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinValid(){
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get InstitucionValid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get DescripcionEduValid(){
    return this.DescripcionEdu?.touched && !this.DescripcionEdu?.valid;
  }

  onCreate(): void {
    this.eduServ.agregarEducation(this.form.value).subscribe(
    data => {
    }, () => {
    alert("Educación Añadida");
    window.location.reload();
  });
  }

  limpiar(): void {
    this.form.reset();
  }

  onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onCreate();
     alert("Todo salio bien ¡Enviar formuario!")
    }else{
      alert("Falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
