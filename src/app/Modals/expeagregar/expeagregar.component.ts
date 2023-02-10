import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-expeagregar',
  templateUrl: './expeagregar.component.html',
  styleUrls: ['./expeagregar.component.css']
})
export class ExpeagregarComponent implements OnInit {

  form: FormGroup;
  imgExp: string = '';
  sizeImg: string = ''; 
  puesto: string = '';
  inicio: string = '';
  fin: string = '';
  empresa: string = '';
  descripcionExp: string = '';
  esTrabajoActual: boolean = false;
 

  constructor(private formBuilder: FormBuilder, private expServ: ExperienciaService) {
    this.form=this.formBuilder.group({
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
    return this.SizeImg?.touched && !this.SizeImg?.valid;
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


  onCreate(): void {
    this.expServ.agregarExperiencia(this.form.value).subscribe(
    data => {
    }, () => {
    alert("Experiencia Añadida");
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

  
  
  
  /*onEnviar(event: Event){
    // Para detener la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }*/


