import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aboutme } from '../Entity/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  //url = 'http://localhost:8080/aboutme/'
  url = 'https://backendrender.onrender.com/aboutme/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Aboutme[]>{
    return this.httpClient.get<Aboutme[]>(this.url + 'lista');
}

public verAboutme(id: number): Observable<Aboutme>{
return this.httpClient.get<Aboutme>(this.url + `ver/${id}`);
}

public agregarAboutme(aboutme: Aboutme): Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', aboutme);
}

public editarAboutme(aboutme: Aboutme): Observable<any>{
return this.httpClient.put<any>(this.url + 'editar', aboutme);
}

public eliminarAboutme(id: number): Observable<any>{
return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}

}
