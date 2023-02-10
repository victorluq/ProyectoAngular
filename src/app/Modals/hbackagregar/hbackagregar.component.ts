import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesBackService } from 'src/app/servicios/habilidades-back.service';

@Component({
  selector: 'app-hbackagregar',
  templateUrl: './hbackagregar.component.html',
  styleUrls: ['./hbackagregar.component.css']
})
export class HbackagregarComponent implements OnInit {

  form: FormGroup;
  habilidad: string = '';
  icono: string = '';
  nivel: string = '';
  porcentajeProgreso: string = '';

  constructor(private formBuilder: FormBuilder,
    private hbackServ: HabilidadesBackService) { 
      this.form = this.formBuilder.group({
        habilidad: ['', [Validators.required]],
        icono: ['', [Validators.required]],
        nivel: ['', [Validators.required]],
        porcentajeProgreso: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Icono(){
    return this.form.get("icono");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

  get PorcentajeProgreso(){
    return this.form.get("porcentajeProgreso");
  }

  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }

  get IconoValid(){
    return this.Icono?.touched && !this.Icono?.valid;
  }

  get NivelValid(){
    return this.Nivel?.touched && !this.Nivel?.valid;
  }

  get PorcentajeProgresoValid(){
    return this.PorcentajeProgreso?.touched && !this.PorcentajeProgreso?.valid;
  }

  onCreate(): void {
    this.hbackServ.agregarHabilidadesBack(this.form.value).subscribe(
    data => {
    }, () => {
    alert("Habilidad Añadida");
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
