import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Familiar } from './familiar';
@Injectable({
  providedIn: 'root'
})
export class FamiliaService {
  
  private url:string="http://localhost:8080/api/v1/familia";
  constructor( private http:HttpClient) { }

  
  getAll():Observable<Familiar[]>{
    return this.http.get<Familiar[]>(this.url);
  }

  getNombres():Observable<String[]>{
    return this.http.get<String[]>('http://localhost:8080/api/v1/familia/nombre_apellido')
  }

  create(familiar:Familiar):Observable<Familiar>{
    return this.http.post<Familiar>(this.url, familiar);
  }
}
