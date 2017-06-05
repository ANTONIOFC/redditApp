import { Subscription } from 'rxjs/Rx';
import { Materia } from './../../models/materia';
import { Component, OnInit } from '@angular/core';

import { MateriasService } from './../materias.service';
import { AuthService } from './../../autenticacao/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materia-nova-form',
  templateUrl: './materia-nova-form.component.html',
  styleUrls: ['./materia-nova-form.component.css']
})
export class MateriaNovaFormComponent implements OnInit {

  materia: Materia;
  formMudou: boolean = false;

  constructor(
    private materiasService: MateriasService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.materia = new Materia();
    let usuario = this.authService.obterUsuarioAutenticado();
    this.materia.criadorId = usuario._id;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair do form ?');
    }
    return true;
  }

   onSubmit(form){
       //console.log(usuario);
      this.materiasService.criar(this.materia)
        .subscribe(
          data => { this.materia = data },
          error => console.log(error),
          () => this.router.navigate(['/materias'])
        );
   }

  campoIsValidTouched(campo){
    return !campo.valid && campo.touched;
  }
}
