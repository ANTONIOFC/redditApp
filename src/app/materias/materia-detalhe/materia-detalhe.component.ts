import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { MateriasService } from './../materias.service';
import { LogService } from './../../shared/log.service';

@Component({
  selector: 'materia-detalhe',
  templateUrl: './materia-detalhe.component.html',
  styleUrls: ['./materia-detalhe.component.css']
})
export class MateriaDetalheComponent implements OnInit {

  id: string;
  materia: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private materiasService: MateriasService,
    private router: Router,
    private logService: LogService  
  ) { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
         this.id = params['id'];
         this.materiasService.getMateria(this.id)
            .subscribe(m => { 
              this.materia = m;

             /* if (this.materia == null) {
                this.router.navigate(['/materiaNaoEncontrada', this.id])
              }*/ 
            });
      }
    );
  }

  editarMateria(){
    this.logService.consoleLog(this.materia);
    this.router.navigate(['/materias', this.materia._id, 'editar']);
  }

  excluirMateria() {
    
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
