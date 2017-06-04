import { Component, OnInit } from '@angular/core';

import { MateriasService } from './materias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any[];

  constructor(
    private materiasService: MateriasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.materiasService.getAll()
    .subscribe(
      //(result) => { console.log(result)} ,
      (result) => { this.materias = result } 
    );
  }

  criarNova() {
    console.log('vai');
    this.router.navigate(['materias/nova']);
  }
}
