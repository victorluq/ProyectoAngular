import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../Entity/education';
import { EducationService } from '../servicios/education.service';

@Component({
  selector: 'app-eduedit',
  templateUrl: './eduedit.component.html',
  styleUrls: ['./eduedit.component.css']
})
export class EdueditComponent implements OnInit {

  educat : Education = null;

  constructor(private eduServ: EducationService, 
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

              ngOnInit(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.eduServ.verEducation(id).subscribe(
                data => {
                    this.educat = data;
                  }, err => {
                    alert("Falló la carga");
                    this.router.navigate(['']);
                  }
                  )
              }

              onUpdate(): void {
                const id = this.activatedRouter.snapshot.params['id'];
                this.eduServ.editarEducation(this.educat).subscribe(
                  data => {
                    this.router.navigate(['']);
                  }, err => {
                    this.router.navigate(['']);
                  }
                )
              }

}
