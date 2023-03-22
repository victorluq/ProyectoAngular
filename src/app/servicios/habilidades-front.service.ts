import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabilidadesFront } from '../Entity/habilidades-front';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesFrontService {

  url = 'https://backendrender.onrender.com/habilidadesFront/'


  constructor(private httpClient: HttpClient) { }

public list(): Observable<HabilidadesFront[]>{
return this.httpClient.get<HabilidadesFront[]>(this.url + 'lista');
}

public verHabilidadesFront(id: number): Observable<HabilidadesFront>{
return this.httpClient.get<HabilidadesFront>(this.url + `ver/${id}`);
}

public agregarHabilidadesFront(habilidadesFront: HabilidadesFront): Observable<any>{
return this.httpClient.post<any>(this.url + 'crear', habilidadesFront);
}

public editarHabilidadesFront(habilidadesFront: HabilidadesFront): Observable<any>{
return this.httpClient.put<any>(this.url + 'editar', habilidadesFront);
}

public eliminarHabilidadesFront(id: number): Observable<any>{
return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}

}
