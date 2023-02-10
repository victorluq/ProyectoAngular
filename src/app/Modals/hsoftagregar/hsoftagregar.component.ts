import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';

@Component({
  selector: 'app-hsoftagregar',
  templateUrl: './hsoftagregar.component.html',
  styleUrls: ['./hsoftagregar.component.css']
})
export class HsoftagregarComponent implements OnInit {

  form: FormGroup;
  habilidad: string = '';
  icono: string = '';
  nivel: string = '';
  porcentajeProgreso: string = '';

  constructor(private formBuilder: FormBuilder,
    private hsoftServ: HabilidadesSoftService) { 
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
    this.hsoftServ.agregarHabilidadesSoft(this.form.value).subscribe(
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
