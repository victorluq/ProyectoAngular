import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-aboutedit',
  templateUrl: './aboutedit.component.html',
  styleUrls: ['./aboutedit.component.css']
})
export class AbouteditComponent implements OnInit {

  about : Aboutme = null;
  form: FormGroup;

  constructor(private aboutServ:AboutmeService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

              ngOnInit(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.aboutServ.verAboutme(id).subscribe(
                data => {
                    this.about = data;
                  }, err => {
                    alert("Falló la carga");
                    this.router.navigate(['']);
                  }
                  )
              }

              onUpdate(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.aboutServ.editarAboutme(this.about).subscribe(
                  data => {
                    this.router.navigate(['']);
                  }, err => {
                    this.router.navigate(['']);
                  }
                )
              }

              onEnviar(event:Event){
                event.preventDefault;
                if (this.form.valid){
                  this.onUpdate();
                }else{
                  alert("falló en la carga, intente nuevamente");
                  this.form.markAllAsTouched();
                }
              }

}
