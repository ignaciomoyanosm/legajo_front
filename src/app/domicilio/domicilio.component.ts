import { Component, OnInit } from '@angular/core';
import { Domicilio } from './domicilio';
import { DomicilioService } from './domicilio.service';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit{

  titulo:string="Domicilio";

  domicilio!: Domicilio[];

  
  constructor(private domicilioService : DomicilioService){
    
  }
  ngOnInit(): void {
    this.domicilioService.getAll().subscribe(
      f => this.domicilio=f
    );
  }
}
