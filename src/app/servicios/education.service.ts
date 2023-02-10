import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../Entity/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = 'http://localhost:8080/education/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'lista');
}

public verEducation(id: number): Observable<Education>{
return this.httpClient.get<Education>(this.url + `ver/${id}`);
}

public agregarEducation(education: Education): Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', education);
}

public editarEducation(education: Education): Observable<any>{
return this.httpClient.put<any>(this.url + 'editar', education);
}

public eliminarEducation(id: number): Observable<any>{
return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}
}
