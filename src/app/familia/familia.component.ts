import { Component, OnInit } from '@angular/core';
import { Familiar } from './familiar';
import { FamiliaService } from './familia.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit{

  titulo:string="Lista de familiares";

  familiares!: Familiar[];
  nombresApellidos!: String[];

  constructor(private familiaService : FamiliaService){
    
  }
  ngOnInit(): void {
    this.familiaService.getAll().subscribe(
      f => this.familiares=f
    );
    this.familiaService.getNombres().subscribe(
      response => {
      this.nombresApellidos = response;
    });
  }

}
