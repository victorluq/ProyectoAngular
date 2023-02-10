import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';

@Component({
  selector: 'app-contactoeditar',
  templateUrl: './contactoeditar.component.html',
  styleUrls: ['./contactoeditar.component.css']
})
export class ContactoeditarComponent implements OnInit {

  cont : Aboutme = null;

  constructor(private contServ: AboutmeService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.contServ.verAboutme(id).subscribe(
      data => {
          this.cont = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.contServ.editarAboutme(this.cont).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }

}
