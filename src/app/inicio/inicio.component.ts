import { Component, OnInit } from '@angular/core';
// esto es el servicio creado que toma el Json
import { DatosService } from '../servicios/datos.service';
import { UiService } from '../servicios/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //crear variable de instancia para almacenar los datos con los que trata el servicio
  nombre:string = "";
  apellido:string = "";
  profesion:string = "";
  imgperfil:string = "";
  sobremi:string = "";
  showBtn: boolean = false;
  subscription?: Subscription;


  // inyectar el servicio para tener acceso en la calse a los métodos
  constructor(private datosService: DatosService,
              private uiService: UiService) { }

  ngOnInit(): void {
    // esto es para almacenar en la variable de instancia los datos recuperados por el servicio
    this.datosService.getDatos().subscribe(datos => {
      console.log(datos);
      // se define la información a mostrar
      this.nombre=datos.nombre;
      this.apellido=datos.apellido;
      this.profesion=datos.profesion;
      this.imgperfil=datos.imgperfil;
      this.sobremi=datos.sobremi;
  })

  toggleShowBtn();{
    this.uiService.toggleShowBtn();
  }
  }
}
function toggleShowBtn() {
  throw new Error('Function not implemented.');
}

