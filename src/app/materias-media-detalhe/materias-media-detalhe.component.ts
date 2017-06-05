import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { MateriasService } from './../materias/materias.service';
import { AuthService } from './../autenticacao/auth.service';
import { Materia } from './../models/materia';
import { Comentario } from './../models/comentario';

@Component({
  selector: 'app-materias-media-detalhe',
  templateUrl: './materias-media-detalhe.component.html',
  styleUrls: ['./materias-media-detalhe.component.css']
})
export class MateriasMediaDetalheComponent implements OnInit {

  id: string;
  materia: Materia;
  inscricao: Subscription;

  constructor(
    private materiasService: MateriasService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.materia = new Materia();
    this.inscricao = this.route.params.subscribe(
      (params: Materia) => {
         this.id = params['id'];
         this.materiasService.getMateria(this.id)
            .subscribe(m => { 
              this.materia = m;
          });
      });  
  }

  comentar(texto) {
    console.log(texto.value);
    let comentario = new Comentario();

    comentario.postId = this.id;
    let usuario = this.authService.obterUsuarioAutenticado();
    comentario.usuarioId = usuario._id;
    comentario.texto = texto.value;

    this.materiasService.incluirComentario(comentario)
        .subscribe(
          data => { comentario = data },
          error => console.log(error),
          () => this.router.navigate(['/'])
        );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
