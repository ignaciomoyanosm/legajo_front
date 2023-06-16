import { Component, OnInit } from '@angular/core';
import { Familiar } from './familiar';
import { FamiliaService } from './familia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-familia',
  templateUrl: './form-familia.component.html',
  styleUrls: ['./form-familia.component.css']
})
export class FormFamiliaComponent implements OnInit {

  familiar:Familiar = new Familiar();
  titulo:string="Registro de familiar";

  constructor(private familiaService:FamiliaService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  create():void{
    console.log(this.familiar);
    this.familiaService.create(this.familiar).subscribe(
      rfa=>this.router.navigate(['/familiar'])
    );
  }

}
