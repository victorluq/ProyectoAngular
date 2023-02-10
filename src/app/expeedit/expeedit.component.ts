import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../Entity/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expeedit',
  templateUrl: './expeedit.component.html',
  styleUrls: ['./expeedit.component.css']
})
export class ExpeeditComponent implements OnInit {

  expLab : Experiencia = null;
  form: FormGroup;
  id: number = 1;
  imgExp: string = '';
  sizeImg: string = ''; 
  puesto: string = '';
  inicio: string = '';
  fin: string = '';
  empresa: string = '';
  descripcionExp: string = '';
  esTrabajoActual: boolean = false;

  constructor(private expServ: ExperienciaService, 
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.form=this.formBuilder.group({
                  id:[''],
                  imgExp: ['', [Validators.required]],
                  sizeImg: ['', [Validators.required]],
                  puesto:['', [Validators.required]],
                  inicio:['', [Validators.required]],
                  fin:['', [Validators.required]],
                  empresa:['', [Validators.required]],
                  descripcionExp:['', [Validators.required]],
                  esTrabajoActual:[''],
                })
               }

  

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expServ.verExperiencia(id).subscribe(
    data => {
        this.expLab = data;
      }, err => {
        alert("Falló la carga");
        this.router.navigate(['']);
      }
      )
  }

  get ImgExp(){
    return this.form.get("imgExp");
  }

  get SizeImg(){
    return this.form.get("sizeImg");
  }

  get Puesto(){
    return this.form.get("puesto");
  }
  
  get Inicio(){
   return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }

  get Empresa(){
    return this.form.get("empresa");
  }

  get DescripcionExp(){
    return this.form.get("descripcionExp");
  }

  get ImgExpValid(){
    return this.ImgExp?.touched && !this.ImgExp?.valid;
  }

  get SizeImgValid(){
    return this.SizeImg?.touched && !this.ImgExp?.valid;
  }

  get PuestoValid(){
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get InicioValid(){
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinValid(){
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get EmpresaValid(){
    return this.Empresa?.touched && !this.Empresa?.valid;
  }

  get DescripcionExpValid(){
    return this.DescripcionExp?.touched && !this.DescripcionExp?.valid;
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expServ.editarExperiencia(this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

 /* onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onUpdate();
     alert("Todo salio bien ¡Enviar formuario!")
    }else{
      alert("Falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }*/
}
