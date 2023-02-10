import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';

@Component({
  selector: 'app-hintroeditar',
  templateUrl: './hintroeditar.component.html',
  styleUrls: ['./hintroeditar.component.css']
})
export class HintroeditarComponent implements OnInit {

  hintro : Aboutme = null;

  constructor(private hintroServ: AboutmeService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.hintroServ.verAboutme(id).subscribe(
      data => {
          this.hintro = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.hintroServ.editarAboutme(this.hintro).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }

}
