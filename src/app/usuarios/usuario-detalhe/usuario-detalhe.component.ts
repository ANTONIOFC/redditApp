import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsuariosService } from './../usuarios.service';
import { LogService } from './../../shared/log.service';

@Component({
  selector: 'usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.usuariosService.getUsuario(id)
          .subscribe(u => { this.usuario = u; });
      }
    );
  }

  editarUsuario(){
    this.logService.consoleLog(this.usuario);
    this.router.navigate(['/usuarios', this.usuario._id, 'editar']);
  }

  excluirUsuario(f){
    console.log(f);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
