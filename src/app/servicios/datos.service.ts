import { Injectable } from '@angular/core';
import { dato } from '../datos';
import { DATOS } from '../mock-datos';
// esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
// esto es para poder hacer peticiones APIrest , get, put, delete
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
private apiUrl = './assets/Json/datos.json'

// el primer http se llama alias
  constructor(private http:HttpClient) { }

// método observable que devuelve los datos
getDatos():Observable<any>{

// se llama al Json con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un Json online
 return this.http.get(this.apiUrl);
}

deleteItem(education:any): Observable<any> {
    const url = `${this.apiUrl}/${education.id}`
    return this.http.delete(url);

}
}
