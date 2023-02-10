import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectagregar',
  templateUrl: './proyectagregar.component.html',
  styleUrls: ['./proyectagregar.component.css']
})
export class ProyectagregarComponent implements OnInit {

  form: FormGroup;
  titulo: string = '';
  descripcion: string = '';
  imgproyecto: string = '';
  urllivedemo: string = '';
  urlrepositorio: string = '';
  fecha: string = '';

  constructor(private formBuilder: FormBuilder, 
              private proyServ: ProyectoService) {
                this.form = this.formBuilder.group({
                  titulo: ['', [Validators.required]],
                  descripcion: ['', [Validators.required]],
                  imgproyecto: ['', [Validators.required]],
                  urllivedemo: ['', [Validators.required]],
                  urlrepositorio: ['', [Validators.required]],
                  fecha: ['', [Validators.required]],
                })
               }

  ngOnInit(): void {
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Imgproyecto(){
    return this.form.get("imgproyecto");
  }

  get Urllivedemo(){
    return this.form.get("urllivedemo");
  }

  get Urlrepositorio(){
    return this.form.get("urlrepositorio");
  }

  get Fecha(){
    return this.form.get("fecha");
  }

  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  get ImgproyectoValid(){
    return this.Imgproyecto?.touched && !this.Imgproyecto?.valid;
  }

  get UrllivedemoValid(){
    return this.Urllivedemo?.touched && !this.Urllivedemo?.valid;
  }

  get UrlrepositorioValid(){
    return this.Urlrepositorio?.touched && !this.Urlrepositorio?.valid;
  }

  get FechaValid(){
    return this.Fecha?.touched && !this.Fecha?.valid;
  }

  onCreate(): void {
    this.proyServ.agregarProyecto(this.form.value).subscribe(
    data => {
    }, () => {
    alert("Proyecto Añadido");
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
