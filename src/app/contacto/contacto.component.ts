import { Component, OnInit } from '@angular/core';
//import { DatosService } from '../servicios/datos.service';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  isLogged = false;
  aboutmes: Aboutme[] = [] //se llama al modelo que es un array

  constructor(private serviAbout: AboutmeService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarAboutme();
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
  }

  cargarAboutme(): void{
    this.serviAbout.list().subscribe(data => {this.aboutmes = data})
  }

}
