import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesSoft } from '../Entity/habilidades-soft';
import { HabilidadesSoftService } from '../servicios/habilidades-soft.service';

@Component({
  selector: 'app-hsofteditar',
  templateUrl: './hsofteditar.component.html',
  styleUrls: ['./hsofteditar.component.css']
})
export class HsofteditarComponent implements OnInit {

  habiliS : HabilidadesSoft = null;

  constructor(private habiliSServ: HabilidadesSoftService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.habiliSServ.verHabilidadesSoft(id).subscribe(
      data => {
          this.habiliS = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.habiliSServ.editarHabilidadesSoft(this.habiliS).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }


}
