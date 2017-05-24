import { Component } from '@angular/core';

import { AuthService } from './autenticacao/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit works!';

  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService) {

  }

  ngOnInit() {
        //aulas 41 e 63
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    ); 
  }

}
