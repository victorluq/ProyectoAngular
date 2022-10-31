import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadesFront: any= [];
  habilidadesBack: any= [];
  habilidadesSoft: any= [];
  descripcion_habilidades: string="";

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos => {
      console.log(datos);
      // se define la información a mostrar
      this.habilidadesFront = datos.habilidadesFront;
      this.habilidadesBack = datos.habilidadesBack;
      this.habilidadesSoft = datos.habilidadesSoft;
      this.descripcion_habilidades= datos.descripcion_habilidades;
  });

}
}
