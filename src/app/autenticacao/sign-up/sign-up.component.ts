import { Component, OnInit } from '@angular/core';

import { Usuario } from './../../models/usuario';
import { UsuariosService } from './../../usuarios/usuarios.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuariosService   
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit(form) {
    this.usuarioService.criar(this.usuario)
    .subscribe(
      data => { this.usuario = data },
      error => console.log(error),
      () => console.log('gravado')
    );
  }
}
