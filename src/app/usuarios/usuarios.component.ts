import { Component, OnInit } from '@angular/core';

import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {    

  usuarios: Usuario[];
  //usuariosService: UsuariosService;

  constructor(private usuariosService: UsuariosService) {
    //this.usuariosService = new UsuariosService();
    //this.usuariosService = _usuariosService;
   }

  ngOnInit() {
    this.usuariosService.getAll()
    .subscribe(
      //(result) => { console.log(result)} ,
      (result) => { this.usuarios = result } 
    );
  }
}
