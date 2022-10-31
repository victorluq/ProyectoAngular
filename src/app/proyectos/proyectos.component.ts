import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any = [];
  descripcion_proyectos: string = "";

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos => {
      // se define la información a mostrar
      this.proyectos = datos.proyectos;
      this.descripcion_proyectos=datos.descripcion_proyectos;
  });


  }

}
