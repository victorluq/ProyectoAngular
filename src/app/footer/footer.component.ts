import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLogged = false;
  aboutmes: Aboutme[] = []

  constructor(private serviAbout: AboutmeService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarAboutme();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAboutme(): void {
    this.serviAbout.list().subscribe(data => { this.aboutmes = data })
  }

}
