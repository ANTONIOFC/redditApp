import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../../models/usuario';
import { UsuariosService } from './../../usuarios/usuarios.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit(form) {
    this.usuarioService.criar(this.usuario)
    .subscribe(
      data => { this.usuario = data },
      error => console.log(error),
      () =>  this.authService.logar(this.usuario)
    );
  }

  cancelar() {
    this.router.navigate(['']);
  }

  campoIsValidTouched(campo){
    return !campo.valid && campo.touched;
  }
}
