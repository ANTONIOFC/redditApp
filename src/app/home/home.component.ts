import { Component, OnInit } from '@angular/core';

import { AuthService } from './../autenticacao/auth.service';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.obterUsuarioAutenticado();
  }

}
