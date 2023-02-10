import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';

@Component({
  selector: 'app-pintroeditar',
  templateUrl: './pintroeditar.component.html',
  styleUrls: ['./pintroeditar.component.css']
})
export class PintroeditarComponent implements OnInit {

  pintro : Aboutme = null;

  constructor(private pintroServ: AboutmeService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.pintroServ.verAboutme(id).subscribe(
      data => {
          this.pintro = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.pintroServ.editarAboutme(this.pintro).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }

}
