import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//librerias de formulario que se necesitarán
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  form: FormGroup;


  constructor(private formBuilder: FormBuilder) { 
    //Se crea el grupo de controles para el formulario login
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
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
  }
 

//onClick(){
 //  this.btnClick.emit(); 
 // }
}
