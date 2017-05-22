import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsuariosService } from './../usuarios.service';
import { LogService } from './../../shared/log.service';

@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.usuario = {};

      this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.usuariosService.getUsuario(id)
          .subscribe(u => { this.usuario = u; });
      }
    );
  }

   onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
