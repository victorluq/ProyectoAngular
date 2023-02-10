import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../Entity/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyeditar',
  templateUrl: './proyeditar.component.html',
  styleUrls: ['./proyeditar.component.css']
})
export class ProyeditarComponent implements OnInit {

    proy : Proyecto = null;

  constructor(private proyServ: ProyectoService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyServ.verProyecto(id).subscribe(
      data => {
          this.proy = data;
        }, err => {
          alert("Falló la carga");
          this.router.navigate(['']);
        }
        )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyServ.editarProyecto(this.proy).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          this.router.navigate(['']);
        }
      )
    }


}
