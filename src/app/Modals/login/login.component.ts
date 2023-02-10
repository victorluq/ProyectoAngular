import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//librerias de formulario que se necesitarán
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Entity/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  //@Output() btnClick = new EventEmitter();
  form: FormGroup;
  email: string;
  
  
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;



  constructor(private formBuilder: FormBuilder,
              private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) { 
    //Se crea el grupo de controles para el formulario login
    this.form=this.formBuilder.group({
      nombreUsuario:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles =data.authorities;
      window.location.reload();
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;  
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

  get Password(){
    return this.form.get("password");
  }
 
  get NombreUsuario(){
   return this.form.get("nombreUsuario");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get NombreUsuarioValid() {
    return this.NombreUsuario?.touched && !this.NombreUsuario?.valid;
  }

  limpiar(): void {
    this.form.reset();
  }

  onEnviar(event: Event){
    // Para detener la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!");      
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

   
 }
