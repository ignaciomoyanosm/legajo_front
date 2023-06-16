import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domicilio } from './domicilio';
@Injectable({
  providedIn: 'root'
})
export class DomicilioService {
  
  private url:string="http://localhost:8080/api/v1/domicilio";
  constructor( private http:HttpClient) { }

  
  getAll():Observable<Domicilio[]>{
    return this.http.get<Domicilio[]>(this.url);
  }

}