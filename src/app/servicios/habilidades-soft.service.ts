import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabilidadesSoft } from '../Entity/habilidades-soft';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesSoftService {

  url = 'http://localhost:8080/habilidadesSoft/'

  constructor(private httpClient: HttpClient) { }

    public list(): Observable<HabilidadesSoft[]>{
    return this.httpClient.get<HabilidadesSoft[]>(this.url + 'lista');
    }
    
    public verHabilidadesSoft(id: number): Observable<HabilidadesSoft>{
    return this.httpClient.get<HabilidadesSoft>(this.url + `ver/${id}`);
    }
    
    public agregarHabilidadesSoft(habilidadesSoft: HabilidadesSoft): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidadesSoft);
    }
    
    public editarHabilidadesSoft(habilidadesSoft: HabilidadesSoft): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', habilidadesSoft);
    }
    
    public eliminarHabilidadesSoft(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }

}
