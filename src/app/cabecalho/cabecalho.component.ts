import { Component, EventEmitter, OnInit } from '@angular/core';

import { AuthService } from './../autenticacao/auth.service';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.obterUsuarioAutenticado();
  }


}
