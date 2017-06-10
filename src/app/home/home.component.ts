import { Component, OnInit } from '@angular/core';

import { AuthService } from './../autenticacao/auth.service';
import { MateriasService } from './../materias/materias.service';
import { Usuario } from './../models/usuario';
import { Materia } from './../models/materia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  materias: Materia[];

  constructor(
    private authService: AuthService,
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
    this.usuario = this.authService.obterUsuarioAutenticado();
  }
}
