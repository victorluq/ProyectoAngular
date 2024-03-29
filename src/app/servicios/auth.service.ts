import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../Entity/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../Entity/login-usuario';
import { JwtDto } from '../Entity/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authURL = 'http://localhost:8080/auth/';
  authURL = 'https://original-karena-victorluq.koyeb.app/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

}

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);

  }
}
