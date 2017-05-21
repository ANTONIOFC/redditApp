import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada.component';

describe('MateriaNaoEncontradaComponent', () => {
  let component: MateriaNaoEncontradaComponent;
  let fixture: ComponentFixture<MateriaNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
