import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesBack } from '../Entity/habilidades-back';
import { HabilidadesBackService } from '../servicios/habilidades-back.service';

@Component({
  selector: 'app-hbackeditar',
  templateUrl: './hbackeditar.component.html',
  styleUrls: ['./hbackeditar.component.css']
})
export class HbackeditarComponent implements OnInit {

  habiliB : HabilidadesBack = null;

  constructor(private habiliBServ: HabilidadesBackService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.habiliBServ.verHabilidadesBack(id).subscribe(
      data => {
          this.habiliB = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.habiliBServ.editarHabilidadesBack(this.habiliB).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }


}
