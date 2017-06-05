import { Component, OnInit } from '@angular/core';

import { MateriasService } from './../materias/materias.service';
import { Materia } from './../models/materia';

@Component({
  selector: 'app-materias-media',
  templateUrl: './materias-media.component.html',
  styleUrls: ['./materias-media.component.css']
})
export class MateriasMediaComponent implements OnInit {

  materias: Materia[];
  //mostrarBotoes: boolean = false;

  constructor(
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
    this.materiasService.getAll()
    .subscribe(
      (result) => { this.materias = result } 
    );
  }
}
