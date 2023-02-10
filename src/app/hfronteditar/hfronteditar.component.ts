import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesFront } from '../Entity/habilidades-front';
import { HabilidadesFrontService } from '../servicios/habilidades-front.service';

@Component({
  selector: 'app-hfronteditar',
  templateUrl: './hfronteditar.component.html',
  styleUrls: ['./hfronteditar.component.css']
})
export class HfronteditarComponent implements OnInit {

  habiliF : HabilidadesFront = null;

  constructor(private habiliFServ: HabilidadesFrontService, 
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

              ngOnInit(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.habiliFServ.verHabilidadesFront(id).subscribe(
                data => {
                    this.habiliF = data;
                  }, err => {
                    alert("Falló la carga");
                    this.router.navigate(['']);
                  }
                  )
              }

              onUpdate(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.habiliFServ.editarHabilidadesFront(this.habiliF).subscribe(
                  data => {
                    this.router.navigate(['']);
                  }, err => {
                    this.router.navigate(['']);
                  }
                )
              }

}
