import { LogService } from './../shared/log.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private logService: LogService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {

    this.logService.consoleLog('vai logar ...');
    this.authService.logar(this.usuario);
  }

}
