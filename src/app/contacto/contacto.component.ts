import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  descripcion_contacto: string = "";

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos => {
      // se define la información a mostrar
      this.descripcion_contacto= datos.descripcion_contacto;
  });


  }

}
