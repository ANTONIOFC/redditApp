import { Subscription } from 'rxjs/Rx';
import { LogService } from './../shared/log.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private logService: LogService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {

    this.logService.consoleLog('vai logar ...');
    this.authService.logar(this.usuario);
  }

  signUp() {
    this.router.navigate(['/signUp']);
  }

}
