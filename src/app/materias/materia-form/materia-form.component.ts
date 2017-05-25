import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { MateriasService } from './../materias.service';
import { LogService } from './../../shared/log.service';

@Component({
  selector: 'materia-form',
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit {

  id: string;
  materia: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private materiasService: MateriasService,
    private router: Router,
    private logService: LogService  
  ) { }

  ngOnInit() {
    this.materia = {};
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

  onInput(){
    this.formMudou = true;
    //console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair do form ?');
    }
    return true;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
