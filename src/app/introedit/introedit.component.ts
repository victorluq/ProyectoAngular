import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from '../Entity/aboutme';
import { AboutmeService } from '../servicios/aboutme.service';

@Component({
  selector: 'app-introedit',
  templateUrl: './introedit.component.html',
  styleUrls: ['./introedit.component.css']
})
export class IntroeditComponent implements OnInit {
  
  about : Aboutme = null;

  constructor(private aboutServ: AboutmeService, 
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

}
