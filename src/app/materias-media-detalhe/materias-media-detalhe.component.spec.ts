import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasMediaDetalheComponent } from './materias-media-detalhe.component';

describe('MateriasMediaDetalheComponent', () => {
  let component: MateriasMediaDetalheComponent;
  let fixture: ComponentFixture<MateriasMediaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasMediaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasMediaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
