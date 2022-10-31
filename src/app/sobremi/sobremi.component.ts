import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dato } from '../datos';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobreMiComponent implements OnInit {

  datos: dato[] = []

  @Output() onDeleteItem: EventEmitter<any>= new EventEmitter();

  sobremi: string = "";
  educations: any = [];
  experiencias: any = [];


  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos => {
      console.log(datos);
      // se define la información a mostrar
      this.sobremi=datos.sobremi;
      this.educations=datos.educations;
      this.experiencias=datos.experiencias;
  });

  }

  onDelete(education:any){
    this.onDeleteItem.emit(education);
  }

  deleteItem(education:any){
    console.log("borrado")
    //this.datosService.deleteItem(education)
    //.subscribe(
    //  () => (
    //  this.educations = this.educations.filter( (t: { id: any; }) => t.id !== education.id)
    //  ))
      
  }

}
