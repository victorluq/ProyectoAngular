import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  isLogged = false;

  constructor(private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
     } else {
      this.isLogged = false;
    }
 }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

 
}
