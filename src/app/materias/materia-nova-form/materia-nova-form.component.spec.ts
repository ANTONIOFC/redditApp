import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaNovaFormComponent } from './materia-nova-form.component';

describe('MateriaNovaFormComponent', () => {
  let component: MateriaNovaFormComponent;
  let fixture: ComponentFixture<MateriaNovaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaNovaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaNovaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
