import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabilidadesBack } from '../Entity/habilidades-back';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesBackService {

  //url = 'http://localhost:8080/habilidadesBack/'
  url = 'https://original-karena-victorluq.koyeb.app/habilidadesBack/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<HabilidadesBack[]>{
    return this.httpClient.get<HabilidadesBack[]>(this.url + 'lista');
    }
    
    public verHabilidadesBack(id: number): Observable<HabilidadesBack>{
    return this.httpClient.get<HabilidadesBack>(this.url + `ver/${id}`);
    }
    
    public agregarHabilidadesBack(habilidadesBack: HabilidadesBack): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidadesBack);
    }
    
    public editarHabilidadesBack(habilidadesBack: HabilidadesBack): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', habilidadesBack);
    }
    
    public eliminarHabilidadesBack(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }
}
